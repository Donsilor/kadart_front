<template>
  <div class="container">
    <azzd></azzd>

    <div class="article-wrap clf">
      <div class="article-left fl">
        <div>
          <div class="article-left-tit">{{title}}</div>
          <div class="article-left-box">
            <a :href="item.url" class="article-left-list" :class="active_idx == index ? 'active' : ''" v-for="(item, index) in articleTitle"
              :key="index">
              <i class="article-left-icon fl"></i>
              <span>{{item.title}}</span>
            </a>
          </div>
        </div>
      </div>

      <div class="article-right fr">
        <div class="article-right-tit">{{article_tit}}</div>
        <div class="article-right-box">
          <div class="article-right-list" v-for="(ite, index) in articleItem" :key="index" @click="intoDetail(index)">
            <div class="img-box">
              <img :src="ite.img" alt="">
            </div>
            <div class="article-right-r">
              <div class="article-right-list-title">{{ite.title}}</div>
              <div class="article-right-list-text">{{ite.seo_content}}</div>
            </div>
          </div>
        </div>

        <div class="pages" v-if="page_count > 1">
          <div class="totle" v-if="total_count != 0"><span>total</span>{{total_count}}</div>
          <el-pagination :total="page_count" @size-change="handleSizeChange" @current-change="handleCurrentChange"
            :current-page.sync="currentPage1" :page-size="1" layout="prev, pager, next, jumper">
          </el-pagination>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import azzd from '~/components/azzd/index.vue'

  export default {
    components: {
      azzd
    },
    data() {
      return {
        active_idx: 0,
        articleTitle: [{
          title: ''
        }],
        articleItem: [],
        title: '',
        currentPage1: 1,
        page_count: 0,
        total_count: 0,
        url_id: 0,
        article_tit: ''
      }
    },
    async asyncData({ $axios, route, store, app }) {
      var last = route.path.lastIndexOf('/')+1;
      var url_id = route.path.slice(last);

      return await $axios.get('/article/article-cate/index', {
        params: {
          id: 3
        }
      }).then(res => {
        var csDomain = 'https://www-kadart.bddco.cn';
        var Domain = 'https://kadart.com';
        var shareUrl = csDomain + route.path;

        var head_r = {
            title: res.data.data.title || '',
            meta: [
              { hid: 'description', name: 'description', content: res.data.data.title || ''},
              { property: 'og:url', content: shareUrl},
              { property: 'og:image', content: csDomain + '/share/index_3.png'},
              { property: 'og:type', content: 'website'},
              { property: 'og:site_name', content: 'site name'},
              { property: 'og:title', content: res.data.data.title || ''},
              { property: 'og:description', content: ''}

            ]
        };


        app.head.title = head_r.title;
        app.head.meta = head_r.meta;

        return {articleTitle: res.data.data.lists, url_id: url_id}
      }).catch(err => {
        // console.log(err)
      })
    },
    mounted() {
      document.documentElement.scrollTop = document.body.scrollTop = 0;

      this.getList()
    },
    methods: {
      intoDetail(k) {
        location.href = this.articleItem[k].url;
      },

      // 文章列表
      getList(k) {
        var that = this;
        var i = 1;
        if (k) {
          i = k;
        }
        this.$axios.get('/article/article/search', {
          params: {
            'pid': this.url_id,
            'page_size': 5,
            'page': i
          }
        }).then(res => {
          this.articleItem = res.data.data.data;
          this.total_count = res.data.data.total_count;
          this.page_count = res.data.data.page_count;
          this.article_tit = res.data.data.category_name;

          for (var i = 0; i < this.articleTitle.length; i++) {
            if (this.articleTitle[i].title == this.article_tit) {
              this.active_idx = i;
              break;
            }
          }
        }).catch(function(error) {
          console.log(error);
        });
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);

        this.getList(val)
      }
    }
  }
</script>

<style scoped>
  .article-right-list-text {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  .article-detail-box p {
    font-size: 14px;
    line-height: 28px;
    color: #666;
    box-sizing: border-box;
    text-align: left;
  }

  .article-detail-box img {
    max-width: 720px;
    margin: 30px 0;
  }

  .article-right .img-box {
    width: 140px;
    height: 140px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }

  .article-right .img-box img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 100%;
    width: auto;
  }

  .article-right-list {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 30px 0;
  }

  .article-right-r {
    width: calc(100% - 160px);
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
    height: 140px;
    padding: 3px 0;
    box-sizing: border-box;
    flex-shrink: 0;
  }

  .article-right-list-title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .pages {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 120px;
  }

  .totle {
    margin-right: 24px;
    font-weight: 400;
    color: #606266;
  }

  .totle span {
    margin-right: 14px;
  }
</style>
