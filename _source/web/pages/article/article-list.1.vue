<template>
  <div class="container">
    <azzd></azzd>

    <div class="article-wrap clf">
      <div class="article-left fl">
        <div>
          <div class="article-left-tit">News</div>
          <div class="article-left-box">
            <div class="article-left-list" :class="active_idx == index ? 'active' : 'sd'" v-for="(item, index) in articleTitle" :key="index" @click="chooseItem(index)" ref = 'list'>
              <i class="article-left-icon fl"></i>
              <span>{{item.title}}</span></div>
          </div>
        </div>
      </div>

      <div class="article-right fr">
        <div class="article-right-tit">Express Method</div>
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
      title: 'KADArt introduction | High quality jewelry manufacture and wholesale',
      meta: [{
          hid: 'description',
          name: 'description',
          content: 'KADArt design, manufacture top-grade gold,silver jewellery like necklaces,rings,earrings,bracelets with diamond,ruby,sapphire,topaz,pearl,zircon,rhinstone, wholesale at reasonable price.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Kadart jewelry,BDD jewelry,Hengdeli jewelry,high-quality jewelry, top-grade jewelry'
        }
      ]
    }
  },
  components: {
    azzd
  },
  data() {
    return{
      active_idx: 0,
      articleTitle:[],
      articleItem: [],
      article_pid: 0,
      a: 0,
      b: 0,
    }
  },
  mounted() {
    document.documentElement.scrollTop = document.body.scrollTop = 0;

    var url = location.pathname.slice(1).replace('-', ' ');
    // console.log(url)

    var that = this;

    // 文章分类
    this.$axios.get('/article/article-cate/index', {
      params: {}
    }).then(res => {
      // console.log(res)
      var articleList = res.data.data.lists;
      // console.log(articleList)
      var flag = false;

      for(var i=0; i<articleList.length; i++){
        for(var j=0; j<articleList[i]['-'].length; j++){
          for(var k=0; k<articleList[i]['-'][j]['-'].length; k++){
            var list = articleList[i]['-'][j]['-'][k];
            // console.log(list.title)

            if(list.title == url){
              that.a = i;
              that.b = j;
              that.active_idx = k;
              that.article_pid = list.id;
              console.log('thatA',that.a,that.b)
              flag = true;
              break;
            }else{
              // 跳转404
              console.log(222)
            }
          }

          if(flag){
            break;
          }
        }

        if(flag){
          break;
        }
      }

      this.articleTitle = res.data.data.lists[this.a]['-'][this.b]['-'];

      this.getList()
      // console.log(this.articleTitle)
    }).catch(function(error) {
      console.log(error);
    });

  },
  methods:{
    intoDetail(k){
      var that = this;
      localStorage.setItem('articleId', that.articleItem[k].id)
      // location.pathname = '/article/article-detail';
      var pathA = this.articleTitle[this.a];
      console.log(pathA)
      console.log(k)
    },

    chooseItem(k, n){
      // this.active_idx = k;
      // this.article_pid = this.articleTitle[k].id;
      // this.getList();

      var urlA = this.$refs.list[k].getElementsByTagName('span')[0].innerText.replace(' ', '-');
      location.pathname = '/'+urlA;
    },

    // 文章列表
    getList(){
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
  .article-right-tit {
    width: 100%;
    height: 74px;
    line-height: 80px;
    border-bottom: 1px solid #808080;
    font-size: 30px;
    color: #000;
    font-weight: bold;
    box-sizing: border-box;
  }

  .article-right-box {
    margin: 10px 0 200px 0;
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;
  }

  .article-right-list-title {
    font-size: 24px;
    color: #470e30;
    font-weight: bold;
    text-align: left;
  }

  .article-right-list-text {
    font-size: 14px;
    line-height: 24px;
    color: #666;
    text-align: left;
    word-break: break-all;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  /* .article-detail {
    width: 640px;
    margin: 20px auto;
    text-align: left;
  } */

  /* .article-img {
    width: 100%;
    height: 200px;
  } */

  /* .article-detail-tit {
    font-size: 18px;
    color: #470e30;
    text-align: center;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: bold;
    text-align: left;
  } */

  .article-detail-box p {
    font-size: 14px;
    line-height: 28px;
    color: #666;
    box-sizing: border-box;
    text-align: left;
  }
  .article-detail-box img{
    max-width: 720px;
    margin: 30px 0;
  }

  .smtit {
    color: #470e30;
    font-weight: bold;
  }

  .mylivechat_buttonround{
    width: 140px !important;
  }
  .mylivechat_buttonround img{
    width: 30px !important;
    height: 30px !important;
  }

  .article-right .img-box{
    width: 120px;
    height: 120px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }
  .article-right .img-box img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 100%;
  }
  .article-right-list{
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 30px 0;
  }
  .article-right-list:not(:first-child) {
    border-top: 1px solid #808080;
  }
  .article-right-r{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
    height: 120px;
    padding: 3px 0;
    box-sizing: border-box;
  }
</style>
