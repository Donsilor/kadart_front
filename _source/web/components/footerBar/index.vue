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
          <div class="child">	About Us</div>
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
            <div class="icon" @click="shartTwitter">
              <img src="../../static/index/icon02.png" alt="">
            </div>
            <div class="icon">
              <img src="../../static/index/icon03.png" alt="">
            </div>
            <div class="icon">
              <img src="../../static/index/icon04.png" alt="">
            </div>
            <div class="icon">
              <img src="../../static/index/icon05.png" alt="">
            </div>
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
    head() {
      return {
        title: this.title,
        meta: [
          {
            property: 'og:url',
            class: 'fb_url',
            content: 'www.kadart.com'
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            property: 'og:title',
            class: 'fb_title',
            content: '11111'
          },
          {
            property: 'og:description',
            content: '222222'
          },
          {
            property: 'og:image',
            content: ''
          },
        ]
      }
    },
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
      shareFaceBook(){
        // var _url = window.location.href;
        // var shareUrl = "http://www.facebook.com/sharer/sharer.php?u="+ _url;
        // popupwindow(shareUrl, 'Facebook', 600, 400);

        // function popupwindow(url, title, w, h) {
        //     var wLeft = window.screenLeft ? window.screenLeft : window.screenX;
        //     var wTop = window.screenTop ? window.screenTop : window.screenY;

        //     var left = wLeft + (window.innerWidth / 2) - (w / 2);
        //     var top = wTop + (window.innerHeight / 2) - (h / 2);
        //     return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
        // }

        // 方法二-----------------
        // function fbShare(contentId) {

            var u = document.getElementsByClassName("fb_url")[0].content;

            var t = document.getElementsByClassName("fb_title")[0].content;

            window.open("http://www.facebook.com/sharer.php?u="+ encodeURIComponent(u) + "&t="+ encodeURIComponent(t), "sharer","toolbar=0,status=0,width=626,height=436");


        // }
      },
      shartTwitter(){
          var text = "Glass Water Pipes Bong Factory Creative Smokes. @CreativeSmokes  http://www.creativesmokes.com/";
          window.open("https://twitter.com/intent/tweet?text="+encodeURIComponent(text));
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
      }
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
  }

  .icon-box .icon {
    width: 30px;
    height: 30px;
    margin-bottom: 10px;
    cursor: pointer;
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
