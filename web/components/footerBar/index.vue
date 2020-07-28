<template>
  <div class="footer">
    <div class="line"></div>

    <div class="footer-box clf">
      <div class="join-our fl" ref="joinour" :style="{'height': heig+'px'}">
        <div class="text">Online Message</div>
        <div class="line-2"></div>
        <div class="text-2">We will reply you on email</div>
        <div class="btn" @click="sendMsg()">Send</div>
      </div>
      <div class="footer-box-right fr clf">
        <div class="list fl">
          <div class="child">Customer Service</div>
          <div class="child">
            <a href="/contact-kadart">Contact Us</a>
          </div>
        </div>
        <div class="list fl">
          <div class="child">About Us</div>
          <div class="child">
            <a href="/about-kadart">Brand Culture</a>
          </div>
        </div>
        <div class="list fl">
          <div class="child">Help</div>
          <div class="child">
            <span @click="sendMsg()">Message Board</span>
          </div>
          <div class="child">
            <a href="https://www.kadart.com/category/RINGS/type_id=2" target="_blank">Online Shopping</a>
          </div>
          <div class="child">
            <a href="/kadart-jewelry-shipping-policy">Shipping Policy</a>
          </div>
          <div class="child">
            <a href="/kadart-jewelry-return-policy">Return Policy</a>
          </div>
          <div class="child">
            <a href="/kadart-jewelry-privacy-policy">Privacy Policy</a>
          </div>

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
            <!-- <div class="icon">
              <img src="../../static/index/icon04.png" alt="">
            </div>
            <div class="icon">
              <a href="https://studio.youtube.com/channel/UChui2nY6e-tN-poHVdcpb3Q/videos/upload?d=ud&filter=%5B%5D&sort=%7B'columnType'" target="_blank">
                <img src="../../static/index/icon05.png" alt="">
              </a>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="registered-trademark fl">&copy;KADART.COM</div>
      <div class="fr">
        <!-- <div class="footer-bottom-list fl">
          <a href="">Privacy Policy</a>
        </div>
        <div class="footer-bottom-list fl">
          <a href="">Terms and Conditions</a>
        </div>
        <div class="footer-bottom-list fl">
          <a href="">Sitemap</a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
  import Bus from '../Bus.js'

  export default{
    data(){
      return{
        heig: ''
      }
    },
    mounted(){
      this.getWidth();
      const _this = this
      _this.$nextTick(() => {
        window.onresize = function(){
          _this.getWidth();
        }
      })
    },
    methods:{
      getWidth(){
         var wid = this.$refs.joinour.offsetWidth;
         this.heig = (234/220)*wid;
      },
      sendMsg(){
        Bus.$emit('send', true)
      },

      toArticle(i){
        localStorage.setItem('article', i)
        var url = location.pathname;

        if(url.indexOf('article') != -1){
          this.$router.go(0)
        }else{
          this.$router.push({
            path: '/article'
          })
        }
      },
      shareFaceBook(){
        // var url = location.href,urlFront,urlAfter,site,u;
        // console.log(location)
        // if(url.indexOf('goods-') != -1){
        //   site = url.lastIndexOf('/')+1;
        //   urlFront = url.slice(0, site)
        //   urlAfter = url.slice(site)
        //   u = urlFront + urlAfter;
        // }else if(){

        // }else{
        var  u = location.href;
        console.log(999,u)
        // }

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

<style>
  .line {
    height: 4px;
    background-color: #480f33;
  }

  .footer-box {
    max-width: 1400px;
    min-width: 1000px;
    width: 100%;
    margin: 24px 0;
  }

  .join-our {
    /* width: 220px; */
    width: 16.2%;
    height: 234px;
    background-color: #f0e2ed;
    padding: 30px 0;
    /* margin-left: 36px; */
    margin-left: 2.8%;
  }

  .join-our .text {
    width: 170px;
    margin: 0 auto;
    text-align: center;
    font-size: 18px;
    color: #000;
    font-family: Didot;
  }

  .join-our .line-2{
    width: 60px;
    height: 0;
    border-bottom: 1px solid #000;
    margin: 10px auto;
  }

  .join-our .text-2 {
    width: 120px;
    margin: 0 auto;
    text-align: center;
    font-size: 14px;
    color: #333;
  }

  .join-our .btn {
    width: 130px;
    height: 24px;
    background-color: #480f33;
    border-radius: 4px;
    text-align: center;
    line-height: 24px;
    color: #fff;
    margin: 30px auto 0;
    cursor: pointer;
  }

  .footer-box-right{
    width: 81%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
  }
  .footer-box-right .list {
    width: 200px;
    overflow: hidden;
    font-size: 0;
  }

  .footer-box-right .list .child {
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
    box-sizing: border-box;
    font-size: 14px;
    color: #333;
  }
  .footer-box-right .list .child span{
    cursor: pointer;
  }
  .footer-box-right .list .child:hover{
    color: #a096b4;
  }

  .footer-box-right .list .child:first-child {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #808080;
    padding-left: 0;
    font-size: 16px;
    color: #333;
  }

  .icon-box {
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

  .brand {
    width: 100%;
    background-color: #ccc;
    height: 30px;
    margin-top: 30px;
    font-size: 10px;
  }

  .brand .big {
    font-size: 20px;
    margin-left: 10px;
  }

  .footer-bottom {
    height: 46px;
    line-height: 46px;
    padding: 0 100px;
    font-size: 12px;
    color: #fff;
    background-color: #480f33;
  }
  .footer-bottom-list{
    margin-top: 14px;
    height: 18px;
    padding: 0 20px;
    line-height: 18px;
  }
  .footer-bottom .footer-bottom-list:not(:first-child){
    border-left: 1px solid #fff;
  }
</style>
