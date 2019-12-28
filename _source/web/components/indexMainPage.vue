<template>
  <div>
    <div class="home_ad">
      <div v-if="this.banners && this.banners != 0" v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="banner in banners">
            <a :href='banner.adv_url || "javascript:;"' target="_blank" >
              <img :src="banner.adv_image" alt="">
            </a>
          </div>
        </div>

        <div class="pos">
          <div class="inline">
            <div class="swiper-button-prev fl">
               <i class="iconfont iconzuo2"></i>
            </div>

            <div class="swiper-pagination swiper-pagination-bullets fl"></div>

            <div class="swiper-button-next fl">
              <i class="iconfont iconyou2"></i>
            </div>
          </div>
        </div>
      </div>

    </div>

    <div class="banner">
      <div v-swiper:youSwiper="swiperOptionTwo">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="ban in bannersTwo">
            <a :href='ban.adv_url || "javascript:;"' target="_blank" >
              <img :src="ban.adv_image" alt="">
            </a>
          </div>
        </div>

        <div class="pos">
          <div class="inline">
            <div class="swiper-button-prev fl">
               <i class="iconfont iconzuo2"></i>
            </div>

            <div class="swiper-pagination swiper-pagination-bullets fl"></div>

            <div class="swiper-button-next fl">
              <i class="iconfont iconyou2"></i>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="width-box">
      <h3 class="tit">POPULAR COLLECTION</h3>
      <h4 class="subheading">POPULAR COLLECTION</h4>

      <div class="banner">
         <a href="http://www.kadart.bddia.com/goods-list/?type_id=2" target="_blank">
          <img src="../static/index/home-13.png" alt="">
         </a>
      </div>
      <div class="box clf">
        <div class="img-box fl">
          <a href="http://www.kadart.bddia.com/goods-list/?type_id=4" target="_blank">
            <img src="../static/index/home-11.png" alt="">
          </a>
        </div>
        <div class="img-box fr">
          <a href="http://www.kadart.bddia.com/goods-list/?type_id=6" target="_blank">
            <img src="../static/index/home-12.png" alt="">
          </a>
        </div>
      </div>

      <h3 class="tit">BRAND CULTURE</h3>
      <h4 class="subheading">BRAND CULTURE</h4>

      <div class="classify clf">
        <div class="classify-left fl">
          <a href="http://www.kadart.bddia.com/goods-list/?type_id=2" target="_blank">
            <img src="../static/index/home-16.png" alt="">
          </a>
        </div>
        <div class="classify-right fr">
          <div class="classif-list">
            <a href="http://www.kadart.bddia.com/goods-list/?type_id=4" target="_blank">
              <img src="../static/index/home-14.png" alt="">
            </a>
          </div>
          <div class="classif-list">
            <a href="http://www.kadart.bddia.com/goods-list/?type_id=6" target="_blank">
              <img src="../static/index/home-15.png" alt="">
            </a>
          </div>
        </div>
      </div>

      <!-- <h3 class="tit">QUALITY ASSURANCE</h3> -->
      <!-- <h4 class="subheading">QUALITY ASSURANCE</h4> -->

      <!-- <div class="quality"> -->
        <!-- <img src="../static/index/1.png" alt=""> -->
      <!-- </div> -->
      <div class="video">
        <div class="cover" v-if="ifPlay">
          <div class="cover-but" @click="onPlay()"></div>
          <img src="../static/index/video.png" alt="">
        </div>
        <video width="100%" height="100%" controls="controls" :autoplay="videoAutoplay">
          <source src="https://cloud.video.taobao.com//play/u/2200750399716/p/1/e/6/t/1/248174688205.mp4" type="video/mp4">
          <source src="https://cloud.video.taobao.com//play/u/2200750399716/p/1/e/1/t/1/248174688205.swf" type="audio/mp4">
        </video>
      </div>

      <h3 class="tit">PRODUCT CATEGORIES</h3>
      <h4 class="subheading">PRODUCT CATEGORIES</h4>

      <div class="series">
        <el-carousel indicator-position="" :autoplay=auto class="swiper">
          <el-carousel-item v-for="item in 4" :key="item" class="swiper-item">
            <div class="swiper-item-box">
              <a :href="item.adv_url" v-for="(item,index) in classifyImg" >
                <img :src="item.adv_image" alt="" class="swiper-img">
              </a>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="new">
        <a :href="footNewImg[0].adv_url">
          <img :src="footNewImg[0].adv_image" alt="">
        </a>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        auto: false,
        banners: [],
        bannersTwo: [],
        classifyImg: [],
        footNewImg: [
          {
            adv_url: '',
            adv_image: ''
          }
        ],
        swiperOption: {
          loop: true,
          autoplay: {
            stopOnLastSlide: true
          },
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',

            dynamicBullets: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          on: {
            slideChange() {
              // console.log('onSlideChangeEnd', this);
            },
            tap() {
              // console.log('onTap', this);
            }
          }
        },
        swiperOptionTwo: {
          loop: true,
          autoplay: {
            stopOnLastSlide: true
          },
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 30,
          on: {
            slideChange() {
              console.log('onSlideChangeEnd', this);
            },
            tap() {
              console.log('onTap', this);
            }
          },
          pagination: {
            el: '.swiper-pagination',
          }
        },
        videoAutoplay: false,
        ifPlay: true

      }
    },
    created(){
      // 顶部轮播图
      this.$axios.get('/common/advert-images',{
          params:{
            'adv_id': 11,
          }
      }).then(res =>{
           this.banners = res.data.data;
      }).catch(function (error) {
          console.log(error);
      });

      // banner图
      this.$axios.get('/common/advert-images',{
          params:{
            'adv_id': 10,
          }
      }).then(res =>{
           this.bannersTwo = res.data.data;
      }).catch(function (error) {
          console.log(error);
      });

      // 分类小图，6张
      this.$axios.get('/common/advert-images',{
          params:{
            'adv_id': 13,
          }
      }).then(res =>{
           this.classifyImg = res.data.data;
           console.log(this.classifyImg)
           console.log(666)
      }).catch(function (error) {
          console.log(error);
      });

      // 底部新品预告图
      this.$axios.get('/common/advert-images',{
          params:{
            'adv_id': 14,
          }
      }).then(res =>{
           this.footNewImg = res.data.data;
      }).catch(function (error) {
          console.log(error);
      });
    },
    methods:{
      onPlay(){
        console.log(888)
        this.videoAutoplay = true;
        console.log(this.videoAutoplay)
      },
      showImg(){
        console.log(256313)
        _this.videoAutoplay = true;

        console.log(_this.videoAutoplay)
      }
    }
  }
</script>

<style>
  .banner {
    width: 100%;
    height: 360px;
    margin-top: 16px;
  }

  .banner .swiper-wrapper{
    width: 100%;
    height: 360px;
  }

  .banner .swiper-slide{
    width: 100%;
    height: 360px;
  }

  .banner img{
    width: 100%;
    height: 100%;
  }

  .width-box {
    width: 1360px;
    margin: 0 auto;
  }

  h3.tit {
    font-size: 24px;
    color: #333;
    font-weight: bold;
    margin-top: 90px;
    text-align: center;
  }

  h4.subheading {
    font-family: Microsoft-Light;
    font-size: 14px;
    color: #333;
    letter-spacing: 3px;
    margin: 10px 0 40px;
    text-align: center;
  }

  .box {
    margin-top: 30px;
  }

  .img-box {
    width: 670px;
    height: 400px;
    background-color: #d0c9ce;
  }

  .classify-left {
    width: 520px;
    height: 740px;
    background-color: #d0c9ce;
  }

  .classif-list {
    width: 820px;
    height: 360px;
    background-color: #d0c9ce;
  }

  .classif-list:first-child {
    margin-bottom: 20px;
  }

  .quality {
    width: 100%;
    height: 240px;
    background-color: #d0c9ce;
  }

  .video {
    width: 1120px;
    height: 630px;
    background-color: #d0c9ce;
    margin: 90px auto 0;
    position: relative;
  }
  .video .cover{
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 50%;
    z-index: 1;
  }
  .video .cover .cover-but{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    z-index: 2;
    border-radius: 50%;
  }
  .video video{
    object-fit: fill
  }

  .series {
    height: 320px;
  }

  .new {
    height: 240px;
    background-color: #d0c9ce;
    margin: 100px 0;
  }

  .series .el-carousel__container {
    height: 320px;
  }

  .series .swiper {
    width: 100%;
    height: 320px;
  }

  .series .swiper-item {
    width: 100%;
    height: 320px;
  }

  .series .el-carousel__button {
    display: none;
  }

  .series .el-carousel__arrow {
    display: none !important;
  }

  .series .swiper-item-box {
    display: flex;
    justify-content: space-between;
  }

  .series .swiper-img {
    width: 220px;
    height: 320px;
  }

  .home_ad {
    height: 288px;
    margin-top: 20px;
    border-bottom: 1px solid #e2eaf0;
  }

  .home_ad .swiper{
    overflow: inherit;
  }

  .home_ad .swiper-wrapper {
    width: 100%;
    height: 254px;
  }
  .home_ad .swiper-slide{
    height: 240px;
  }

  .home_ad .swiper-slide img{
      width: 100%;
      height: 100%;
  }
  /* 分页器容器 */
  .swiper-pagination{
    float: left;
    height: 26px;
    position: inherit;
    margin: 0 20px;
  }
  /* 分页器 */
  .swiper-pagination-bullet{
    width: 12px;
    height: 12px;
    background-color: #fff ;
    border-radius: 12px;
    opacity: 1;
    border: 1px solid #480f33;
    margin: 0 3px;
    margin-top: 7px;
  }
  /* 分页器选中 */
  .swiper-pagination-bullet-active{
    background-color: #480f33 !important;
  }

  .pos{
    width: 100%;
    height: 26px;
    text-align: center;
    font-size: 0;
  }
  .pos .inline{
    display: inline-block;
    height: 100%;
  }
  /* 左右按钮 */
  .swiper-button-prev,
  .swiper-button-next{
    position: relative;
    background-image: none !important;
    height: 26px;
    width: 26px;
    margin: 0;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  .iconzuo2,
  .iconyou2{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    font-size: 22px;
    color: #480f33;
  }

  /* 分页器容器 */
  .banner .swiper-pagination-bullet{
    float: left;
    height: 26px;
    position: inherit;
    margin: 0 20px;
  }


  .banner .swiper-pagination{
    width: 12px;
    height: 12px;
    background-color: #fff;
    border-radius: 12px;
    opacity: 1;
    border: 1px solid #480f33;
    margin: 0 3px;
    margin-top: 7px;
  }
  .banner .swiper-pagination-bullet-active{
    background-color: #480f33 !important;
  }
  /* 分页器 */
  .banner .swiper-pagination-bullet{
    width: 12px;
    height: 12px;
    background-color: #fff ;
    border-radius: 12px;
    opacity: 1;
    border: 1px solid #480f33;
    margin: 0 3px;
    margin-top: 7px;
  }
  /* 分页器选中 */
  .banner .swiper-pagination-bullet-active{
    background-color: #480f33 !important;
  }
</style>
