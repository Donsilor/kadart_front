<template>
  <div class="container">
    <div class="article-wrap" v-if="ifShow">
      <div class="article-right-box">
        <div class="title">{{this.articleDetail.title}}</div>
        <div class="synopsis">{{this.articleDetail.seo_content}}</div>
        <div class="article-detail-box" v-html="this.articleDetail.content"></div>
      </div>

      <div class="cut-line"></div>
      <div class="share-box clf">
        <div class="fr clf" style="margin-right: 1rem;">
          <div class="share-icon share-share-1 fl" @click="shareFaceBook"></div>
          <!-- <div class="share-icon share-share-2 fl"></div> -->
          <div class="share-icon share-share-3 fl" @click="shareTwitter"></div>
          <!-- <div class="share-icon share-share-4 fl"></div> -->
          <div class="share-icon share-share-5 fl">
            <a style="background: none !important;opacity: 0;display: block;width: 100%;height: 100%;overflow: hidden;" target="_blank" href="//www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark"  data-pin-shape="round" data-pin-height="28">pinterest分享</a>
            <script type="text/javascript" async src="//assets.pinterest.com/js/pinit.js"></script><!-- ＊＊＊＊＊这是pinterest分享必带JS＊＊＊＊＊＊＊ -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head() {
      return this.seo || {
        title: 'this.title',
        meta: [{
          hid: 'description',
          name: 'description',
          content: 'this.description'
        }]
      }
    },
    data() {
      return {
        articleDetail: {
          title: '',
          seo_content: '',
          content: ''
        },
        title: '',
        description: '',
        ifShow: true,
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
        var seo = {
            title: res.data.data.title,
            meta: [
              { hid: 'description', name: 'description', content: res.data.data.seo_content || ''}
            ]
        };

        return {articleDetail: res.data.data, pid: res.data.data.cate_id, seo: seo}
      }).catch(err => {
        console.log(err)
      })
    },
    mounted(){
     document.documentElement.scrollTop = document.body.scrollTop = 0;
    },
    methods:{
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
      }
    }
  }
</script>

<style scoped>
  body {
    position: relative;
  }
  .cut-line{
    position: absolute;
    bottom: 4.375rem;
    right:0;
    width: 100%;
    height: .0625rem;
    background: #e8e4e4;
  }

  .share-box{
    position: absolute;
    bottom: 1.25rem;
    right:0;
    height: 2.1rem;
    margin-top: 2rem;
  }
  .share-icon{
    height: 2.1rem;
    width: 2.1rem;
    margin-left: 1rem;
  }

  .share-share-1{
    background: url(../../static/index/icon/web-Facebook.png) no-repeat center;
    background-size: 100% 100%;
  }
  .share-share-2{
    background: url(../../static/index/icon/youtube.png) no-repeat center;
    background-size: 100% 100%;
  }
  .share-share-3{
    background: url(../../static/index/icon/tuite.png) no-repeat center;
    background-size: 100% 100%;
  }
  .share-share-4{
    background: url(../../static/index/icon/in.png) no-repeat center;
    background-size: 100% 100%;
  }
  .share-share-5{
    background: url(../../static/index/icon/pinterest.png) no-repeat center;
    background-size: 100% 100%;
  }

  .article-right-box {
    font-size: 1.3rem;
    line-height: 2rem;
    color: #666;
    text-align: left;
    word-break: break-all;
    padding: 2rem 5% 5rem;
  }

  .article-right-box>>>p {
    margin-top: 10px;
  }

  .article-detail-box>>>img {
    max-width: 100%;
    margin: 1rem 0;
  }

  .title {
    font-size: 2.4rem;
    color: #333;
    line-height: 2.6rem;
    text-align: center;
    font-weight: bold;
    margin-bottom: 3rem;
  }

  .synopsis {
    font-size: 1.6rem;
    color: #480f32;
    margin-bottom: 1.5rem;
  }
</style>
