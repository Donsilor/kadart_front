<template>
  <div class="container">
    <azzd></azzd>

    <div class="article-wrap clf">
      <div class="article-left fl">
        <div class="article-left-tit">{{article_tit}}</div>
        <div class="article-left-box">
          <div class="article-left-list" :class="active_idx == index ? 'active' : ''" v-for="(item, index) in articleItem" :key="index">
            <i class="article-left-icon fl"></i>
            <a :href="item.url">{{item.title}}</a>
          </div>
        </div>
      </div>

     <div class="article-right fr">
        <div class="article-right-tit">{{articleDetail.title}}</div>
        <div class="article-right-box">
          <div class="synopsis">{{articleDetail.seo_content}}</div>
          <div class="article-detail-box" v-html="articleDetail.content"></div>
        </div>

        <div class="cut-line"></div>
        <div class="icon-box">
          <div class="icon" @click="shareFaceBook">
            <img src="../../static/index/icon01.png" alt="">
          </div>
          <div class="icon" @click="shareTwitter">
            <img src="../../static/index/icon02.png" alt="">
          </div>
          <div class="icon" style="position: relative;">
            <img src="../../static/index/icon03.png" alt="" style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;z-index: -1;">
            <a style="background: none !important;opacity: 0;display: block;width: 100%;height: 100%;overflow: hidden;" target="_blank" href="//www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark"  data-pin-shape="round" data-pin-height="28">pinterest分享</a>
            <script type="text/javascript" async src="//assets.pinterest.com/js/pinit.js"></script><!-- ＊＊＊＊＊这是pinterest分享必带JS＊＊＊＊＊＊＊ -->
          </div> 
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
    return{
      // 详情数据
      articleDetail:{},
	  // 标题
      title: '',
      // 描述
      description: '',
      // 上级id
      // 左侧标题
	  article_tit: '',

      active_idx: 0,
      articleItem: [
        {title: ''}
      ],
      article_pid: 0,
      detailUrl: '',
      detailId: -1,
      a: '',
      b: '',
      result: '',
      article_tit: ''
    }
  },
  async asyncData({ $axios, route, store, app }) {
    var last = route.path.lastIndexOf('/')+1;
    var url_id = route.path.slice(last);

    return await $axios.get('/article/article/detail', {
      params: {
        id: url_id
      }
    }).then(res => {
      var csDomain = 'https://www-kadart.bddco.cn';
      var Domain = 'https://kadart.com';
      var shareUrl = csDomain + route.path;

      var head_r = {
          title: res.data.data.title || '',
          meta: [
            { hid: 'description', name: 'description', content:  res.data.data.seo_content || ''},
            { property: 'og:url', content: shareUrl},
            { property: 'og:image', content: csDomain + '/share/index_3.png'},
            { property: 'og:type', content: 'website'},
            { property: 'og:site_name', content: 'site name'},
            { property: 'og:title', content:  res.data.data.title || ''},
            { property: 'og:description', content: res.data.data.seo_content || ''}

          ]
      };

      app.head.title = head_r.title;
      app.head.meta = head_r.meta;

      return {articleDetail: res.data.data, pid: res.data.data.cate_id}
    }).catch(err => {
      console.log(err)
    })
  },
  mounted(){
   document.documentElement.scrollTop = document.body.scrollTop = 0;

   this.getList()
  },
  methods:{
    // 文章列表
    getList(){
      var that = this;
      this.$axios.get('/article/article/search', {
        params: {
          pid: this.pid
        }
      }).then(res => {
        this.articleItem = res.data.data.data;
        this.article_tit = res.data.data.category_name;

        for(var i=0; i<this.articleItem.length; i++){
          if(this.articleItem[i].title == this.articleDetail.title){
            this.active_idx = i;
            break;
          }
        }

      }).catch(function(error) {
        console.log(error);
      });
    },
    shareFaceBook(){
      var u = location.href;
      window.open("http://www.facebook.com/sharer.php?u="+ encodeURIComponent(u), "sharer","toolbar=0,status=0,width=626,height=436");
    },
    shareTwitter(){
      var u = location.href;
      var t = document.getElementsByTagName("title")[0].innerText;
      var d = document.querySelectorAll('meta[name="description"]')[0].content;

      var share = u + '\n' + t + '\n';
      if(share.length>280){
        share = share.slice(0, 279);
      }
      window.open("https://twitter.com/intent/tweet?text="+ encodeURIComponent(share), "sharer","toolbar=0,status=0,width=626,height=436");
    },
  }
}
</script>

<style scoped>

  .icon-box {
    position: absolute;
    bottom: 25px;
    right:0px;
    margin: 20px auto 0;
    width: 200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-right: 60px;
    box-sizing: border-box;
  }

  .icon-box .icon {
    width: 24px;
    height: 24px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .icon-box .icon img{
    width: 100%;
    height: 100%;
  }
  .cut-line{
    position: absolute;
    bottom: 100px;
    right:0px;
    width: 70%;
    /* width: 100%; */
    height: 1px;
    background: #e8e4e4;
  }

  .article-wrap{
    position: relative;
  }

  .article-right-box{
    font-size: 14px;
    line-height: 24px;
    color: #666;
    text-align: left;
    word-break: break-all;
    padding-top: 20px;
  }

  .article-right-box >>> p{
    margin-top: 10px;
  }

  .article-detail-box >>> img {
    max-width: 640px;
    margin: 20px 0;
  }

  .article-right-tit{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .synopsis{
    font-size: 14px;
    line-height: 24px;
    color: #ad317d;
		margin-bottom: 20px;
  }
</style>
