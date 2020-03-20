<template>
  <div class="container">
    <artcleSlideShow></artcleSlideShow>

    <div class="article-wrap">
      <div class="article-right-box">
        <div class="synopsis">{{articleDetail.seo_content}}</div>
        <div class="article-detail-box" v-html="articleDetail.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: this.title,
        meta: [{
          hid: 'description',
          name: 'description',
          content: this.description
        }]
      }
    },
    data() {
      return {
        // 详情数据
        articleDetail: {},
        // 描述
        description: '',
        // 上级id
        pid: '',
        // 左侧标题
        title: '',

        active_idx: 0,
        articleItem: [{
          title: ''
        }],
        article_pid: 0,
        detailUrl: '',
        detailId: -1,
        a: '',
        b: '',
        result: ''
      }
    },
    mounted() {
      document.documentElement.scrollTop = document.body.scrollTop = 0;

      this.$axios.get('/article/article-cate/index', {
        params: {}
      }).then(res => {
        this.result = res.data.data.lists;
      }).catch(function(error) {
        console.log(error);
      });

      var url_id, path = location.href;
      if (path.indexOf('?') != -1) {
        url_id = path.split('=')[1];
      } else {
        url_id = path.slice(path.lastIndexOf('/') + 1);
      }

      this.getDetail(url_id);
    },
    methods: {
      // 文章详情
      getDetail(k) {
        var that = this;
        this.$axios.get('/article/article/detail', {
          params: {
            'id': k,
          }
        }).then(res => {
          this.articleDetail = res.data.data;
          this.description = res.data.data.seo_content;
          this.pid = res.data.data.cate_id;

          that.getClassify();
          that.getList();
        }).catch(function(error) {
          console.log(error);
        });
      },
      // 文章列表
      getList() {
        var that = this;
        this.$axios.get('/article/article/search', {
          params: {
            'pid': this.pid
          }
        }).then(res => {
          this.articleItem = res.data.data.data;
          // console.log(res)

          for (var i = 0; i < this.articleItem.length; i++) {
            if (this.articleItem[i].title == this.articleDetail.title) {
              this.active_idx = i;
              break;
            }
          }

        }).catch(function(error) {
          console.log(error);
        });
      },

      // 文章分类
      getClassify() {
        var that = this;

        var articleList = that.result;
        var flag = false;

        for (var i = 0; i < articleList.length; i++) {
          for (var j = 0; j < articleList[i].items.length; j++) {
            for (var k = 0; k < articleList[i].items[j].items.length; k++) {
              var list = articleList[i].items[j].items[k];

              if (list.id == this.pid) {
                that.title = list.title;

                // that.tittle = articleList[i].title;
                flag = true;
                break;
              } else {
                // 跳转404
                // console.log(222)
              }
            }

            if (flag) {
              break;
            }
          }

          if (flag) {
            break;
          }

        }
      }
    }
  }
</script>

<style scoped>
  .article-right-box {
    font-size: 1.3rem;
    line-height: 2rem;
    color: #666;
    text-align: left;
    word-break: break-all;
    padding: 0 5%;
  }

  .article-right-box>>>p {
    margin-top: 10px;
  }

  .article-detail-box>>>img {
    max-width: 100%;
    margin: 1rem 0;
  }
</style>
