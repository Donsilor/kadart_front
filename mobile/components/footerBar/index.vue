<template>
  <div class="footer">
    <div class="footer-top-box">
      <div class="footer-logo">
        <a href="/">
          <img src="../../static/index/icon/logo-1.png" alt="">
        </a>
      </div>
      <div class="footer-email">
        <a href="/">@KADART.COM</a>
      </div>
      <div class="footer-share">
        <div class="share-icon share-icon-1" @click="shareFaceBook"></div>
        <!-- <div class="share-icon share-icon-2"></div> -->
        <div class="share-icon share-icon-3" @click="shareTwitter"></div>
        <!-- <div class="share-icon share-icon-4"></div> -->
        <div class="share-icon share-icon-5">
          <a style="background: none !important;opacity: 0;display: block;width: 100%;height: 100%;overflow: hidden;" target="_blank" href="//www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark"  data-pin-shape="round" data-pin-height="28">pinterest分享</a>
          <script type="text/javascript" async src="//assets.pinterest.com/js/pinit.js"></script><!-- ＊＊＊＊＊这是pinterest分享必带JS＊＊＊＊＊＊＊ -->
        </div>
      </div>
    </div>
    <div class="footer-bottom-box">
      <!-- <a href="/" target="_blank">PRIVACY POLICY </a>
      <div class="footer-bottom-line"></div>
      <a href="/" target="_blank">TERMS AND CONDITIONS</a>
      <div class="footer-bottom-line"></div>
      <a href="/" target="_blank">SITEMAP</a> -->
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
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
  .footer-top-box {
    width: 100%;
    background-color: #efeff1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0 2.3rem;
  }

  .footer-logo {
    width: 3.5rem;
    height: 4.1rem;
  }

  .footer-email {
    font-family: DFPYaSong;
    font-size: 1.1rem;
    font-weight: bold;
    color: #480f32;
    text-decoration: underline;
    margin-top: 1rem;
  }

  .footer-share {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 8.8rem;
    height: 2rem;
    margin-top: 1.5rem;
  }

  .share-icon {
    width: 2rem;
    height: 2rem;
  }

  .share-icon-1 {
    background: url(../../static/index/icon/web-Facebook.png) no-repeat center;
    background-size: 100% 100%;
  }

  .share-icon-2 {
    background: url(../../static/index/icon/youtube.png) no-repeat center;
    background-size: 100% 100%;
  }

  .share-icon-3 {
    background: url(../../static/index/icon/tuite.png) no-repeat center;
    background-size: 100% 100%;
  }

  .share-icon-4 {
    background: url(../../static/index/icon/in.png) no-repeat center;
    background-size: 100% 100%;
  }

  .share-icon-5 {
    background: url(../../static/index/icon/pinterest.png) no-repeat center;
    background-size: 100% 100%;
  }

  .footer-bottom-box {
    width: 100%;
    /* height: 6.3rem; */
    height: 3rem;
    background-color: #fff;
    padding: 0 4.8%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: STKAITI;
    font-size: 1.1rem;
    color: #480f32;
    font-weight: bold;
  }

  .footer-bottom-line {
    height: 1rem;
    width: 1px;
    background-color: #480f32;
  }

  .share-icon >>> .icon{
    background: none !important;
    opacity: 0 !important;
  }
</style>
