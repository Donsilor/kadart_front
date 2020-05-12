<template>
  <div class="container">
    <artcleSlideShow></artcleSlideShow>

    <div class="nav-box">
      <div class="scroll">
        <a :href="item.url" class="list" :class="active_idx == index ? 'active' : ''" v-for="(item, index) in articleTitle"
          :key="index">
          {{item.title}}
        </a>
      </div>
    </div>

   <div class="article-wrap">
      <div class="article-right-box">
        <div class="article-right-list" v-for="(ite, index) in articleItem" @click="intoDetail(index)">
          <div class="article-right-r">
            <div class="article-right-list-title">{{ite.title}}</div>
            <div class="article-right-list-text">{{ite.seo_content}}</div>
          </div>
          <div class="img-box">
            <img :src="ite.img" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="more" v-if="ifShowLoad" @click="loadMore">
      <span>Load More</span>
      <i class="more-icon" v-if="ifLoad"></i>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        active_idx: 0,
        articleItem: [],
        article_pid: 0,
        detailUrl: '',
        title: '',
        ifShowLoad: false,
        ifLoad: false,
        page_size: 5,

        menu_list: [],
        pid_fore: '',
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
        var head_r = {
            title: res.data.data.title,
            meta: [
              { charset: 'utf-8' },
              { name: 'viewport', content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0' },
              { hid: 'description', name: 'description', content: res.data.data.title || ''}
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
        if (k) {
          this.page_size += k;
        }
        this.$axios.get('/article/article/search', {
          params: {
            'pid': this.url_id,
            'page_size': this.page_size
          }
        }).then(res => {
          this.articleItem = res.data.data.data;
          this.pid_fore = res.data.data.pid;
          this.title = res.data.data.category_name;

          for (var i = 0; i < this.articleTitle.length; i++) {
            if (this.articleTitle[i].title == this.title) {
              this.active_idx = i;
              break;
            }
          }

          if (res.data.data.total_count > 5 && this.page_size < res.data.data.total_count) {
            this.ifShowLoad = true;
          } else {
            this.ifShowLoad = false;
          }
          this.ifLoad = false;
        }).catch(function(error) {
          console.log(error);
        });
      },

      loadMore() {
        this.ifLoad = true;
        this.getList(5);
      }
    }
  }
</script>

<style scoped>
  .nav-box {
    width: 100%;
    height: 3.7rem;
    padding-left: 3%;
    overflow-x: scroll;
    border-bottom: 0.05rem solid #e5e5e5;
  }

  .nav-box .scroll {
    display: inline-block;
    white-space: nowrap;
    height: 100%;
    font-size: 0;
    padding-right: 5%;
  }

  .nav-box .scroll .list {
    min-width: 5rem;
    height: 100%;
    box-sizing: border-box;
    display: inline-block;
    margin-right: 2rem;
    font-size: 1.5rem;
    color: #8d8d8d;
    line-height: 3.7rem;
    border-bottom: 0.2rem solid transparent;
    box-sizing: border-box;
    text-align: center;
  }

  .nav-box .scroll .list:last-child {
    margin-right: 0;
  }

  .nav-box .scroll .list.active {
    color: #480f32;
    border-color: #480f32;
  }

  .article-right-box {
    padding-bottom: 5rem;
  }

  .article-right-list {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 1.5rem 7%;
  }

  .article-right-list:not(:last-child) {
    border-bottom: 4px solid #f6f6f6;
  }

  .article-right-r {
    flex: 1;
    width: calc(100% - 10rem);
    height: 9rem;
    padding-top: 1rem;
    box-sizing: border-box;
    margin-right: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
  }

  .article-right-list .img-box {
    width: 9rem;
    height: 9rem;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }

  .article-right-list-title {
    font-size: 1.65rem;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .article-right-list-text {
    font-size: 1.3rem;
    line-height: 2rem;
    color: #999;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    word-break: break-all;
  }

  .more {
    margin-top: 0;
  }
</style>
