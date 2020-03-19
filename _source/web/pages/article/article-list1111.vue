<template>
  <div class="container">
    <azzd></azzd>

    <div class="article-wrap clf">
      <div class="article-left fl">
        <div>
          <div class="article-left-tit">{{tittle}}</div>
          <div class="article-left-box">
            <div class="article-left-list" :class="active_idx == index ? 'active' : ''" v-for="(item, index) in articleTitle"
              :key="index" @click="chooseItem(index)" ref='list'>
              <i class="article-left-icon fl"></i>
              <span>{{item.title}}</span></div>
          </div>
        </div>
      </div>

      <div class="article-right fr">
        <div class="article-right-tit">{{articleTitle[active_idx].title}}</div>
        <div class="article-right-box">
          <div class="article-right-list" v-for="(ite, index) in articleItem" @click="intoDetail(index)">
            <div class="img-box">
              <img :src="ite.img" alt="">
            </div>
            <div class="article-right-r">
              <div class="article-right-list-title">{{ite.title}}</div>
              <div class="article-right-list-text">{{ite.seo_content}}</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import azzd from '~/components/azzd/index.vue'

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
    components: {
      azzd
    },
    data() {
      return {
        tdk: {
          title: ''
        },
        active_idx: 0,
        articleTitle: [{
          title: ''
        }],
        articleItem: [],
        article_pid: 0,
        a: 0,
        b: 0,
        detailUrl: '',
        title: '',
        description: '',
        tittle: '',

      }
    },
    asyncData({
      $axios,
      params,
      route
    }) {
      return $axios.get('/article/article-cate/index', {
        params: {}
      }).then(res => {
        var result = {
          url: route.path
        }

        if(Object.prototype.toString.call(res.data.data) === "[object Object]"){
          result.info = res.data.data.lists
        }

        return {result:result}
        // error(params)
      })
    },
    created() {
      var url = this.result.url.slice(1).replace('-', ' ');

      var that = this;

      console.log(this.result)

      // // 文章分类
      // if(this.resule.info){
      //   var articleList = this.resule.info;
      //   // console.log(articleList)
      // }else{
      //   return
      // }
      // var flag = false;
      // console.log(123)

      // for (var i = 0; i < articleList.length; i++) {
      //   for (var j = 0; j < articleList[i].items.length; j++) {
      //     for (var k = 0; k < articleList[i].items[j].items.length; k++) {
      //       var list = articleList[i].items[j].items[k];
      //       // console.log(list)

      //       if (list.title == url) {
      //         that.a = i;
      //         that.b = j;
      //         that.active_idx = k;
      //         that.article_pid = list.id;
      //         that.title = articleList[i].items[j].items[k].title,
      //           that.tittle = articleList[i].title;
      //         that.description = articleList[i].items[j].items[k].sseConnect,
      //           flag = true;
      //         break;
      //       } else {
      //         // 跳转404
      //         // console.log(222)
      //       }
      //     }

      //     if (flag) {
      //       break;
      //     }
      //   }

      //   if (flag) {
      //     break;
      //   }
      // }

      // this.articleTitle = articleList[this.a].items[this.b].items;
      // console.log(this.articleTitle)

    },
    mounted() {
      document.documentElement.scrollTop = document.body.scrollTop = 0;

      //     var url = location.pathname.slice(1).replace('-', ' ');
      //     // console.log(url)
      //
      //     var that = this;
      //
      //     // 文章分类
      //     this.$axios.get('/article/article-cate/index', {
      //       params: {}
      //     }).then(res => {
      // 			// that.tdk.title = '456';
      //       // console.log(res)
      //       var articleList = res.data.data.lists;
      //       // console.log(articleList)
      //       var flag = false;
      //
      //       for(var i=0; i<articleList.length; i++){
      //         for(var j=0; j<articleList[i].items.length; j++){
      //           for(var k=0; k<articleList[i].items[j].items.length; k++){
      //             var list = articleList[i].items[j].items[k];
      //             // console.log(list)
      //
      //             if(list.title == url){
      //               that.a = i;
      //               that.b = j;
      //               that.active_idx = k;
      //               that.article_pid = list.id;
      //               flag = true;
      //               break;
      //             }else{
      //               // 跳转404
      //               // console.log(222)
      //             }
      //           }
      //
      //           if(flag){
      //             break;
      //           }
      //         }
      //
      //         if(flag){
      //           break;
      //         }
      //       }
      //
      //       this.articleTitle = res.data.data.lists[this.a].items[this.b].items;
      //
      //       // console.log(this.articleTitle)
      //
      //       // console.log(this.articleTitle)
      //     }).catch(function(error) {
      //       console.log(error);
      //     });

      // this.getList()

    },
    methods: {
      intoDetail(k) {
        // var that = this;
        // localStorage.setItem('articleId', that.articleItem[k].id)
        // location.pathname = '/article/article-detail';

        location.pathname = this.articleItem[k].url;
      },

      chooseItem(k, n) {
        // this.active_idx = k;
        // this.article_pid = this.articleTitle[k].id;
        // this.getList();

        var urlA = this.$refs.list[k].getElementsByTagName('span')[0].innerText.replace(' ', '-');
        location.pathname = '/' + urlA;
        // console.log(urlA)
      },

      // 文章列表
      getList() {
        var that = this;
        this.$axios.get('/article/article/search', {
          params: {
            'pid': that.article_pid
          }
        }).then(res => {
          this.articleItem = res.data.data.data;
          // console.log(res)

          // console.log(this.articleItem)
        }).catch(function(error) {
          console.log(error);
        });
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
</style>
