<template>
  <div>
    <div class="home_cid">
      <div v-if="this.banners && this.banners != 0" v-swiper:mySwiper="swiperOption" :style="{'height': bannerHeightA+'px'}">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="banner in banners">
            <a :href='banner.adv_url || "javascript:;"' target="_blank">
              <img :src="banner.adv_image" alt="" ref="img">
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
      <div v-if="this.bannersTwo && this.bannersTwo != 0" v-swiper:youSwiper="swiperOptionTk" :style="{'height': bannerHeightB+'px'}">
        <div class="swiper-wrapper" :style="{'height': bannerHeightB+'px'}">
          <div class="swiper-slide" v-for="ban in bannersTwo">
            <a :href='ban.adv_url || "javascript:;"' target="_blank">
              <img :src="ban.adv_image" alt="">
            </a>
          </div>
        </div>

        <div class="pos">
          <div class="inline">
            <div class="swiper-pagination swiper-pagination-bullets fl"></div>
          </div>
        </div>
      </div>
    </div>


    <div class="width-box">
      <h3 class="tit">FINE JEWELRY  COLLECTION</h3>
      <h4 class="subheading">
        <!-- <span>POPULAR COLLECTION</span> -->
      </h4>

      <div class="banner">
        <a href="https://www.kadart.com/category/RINGS/type_id=2" target="_blank">
        <!-- <a href="/goods-list/?type_id=2" target="_blank"> -->
          <img src="../../static/index/home-13.jpg" alt="">
        </a>
      </div>
      <div class="box clf">
        <div class="img-box fl">
          <a href="https://www.kadart.com/category/NECKLACES/type_id=4" target="_blank">
          <!-- <a href="/goods-list/?type_id=4" target="_blank"> -->
            <img src="../../static/index/home-11.jpg" alt="">
          </a>
        </div>
        <div class="img-box fr">
          <a href="https://www.kadart.com/category/EARRINGS/type_id=6" target="_blank">
          <!-- <a href="/goods-list/?type_id=6" target="_blank"> -->
            <img src="../../static/index/home-12.jpg" alt="">
          </a>
        </div>
      </div>

      <h3 class="tit">BRAND CULTURE</h3>
      <h4 class="subheading">
        <!-- <span>BRAND CULTURE</span> -->
      </h4>

      <div class="classify clf">
        <div class="classify-left fl">
          <a href="/about-kadart" target="_blank">
            <img src="../../static/index/home-16.jpg" alt="">
          </a>
        </div>
        <div class="classify-right fr">
          <div class="classif-list">
            <a href="/kadart-jewelry-factory" target="_blank">
              <img src="../../static/index/home-14.jpg" alt="">
            </a>
          </div>
          <div class="classif-list">
            <a href="https://www.kadart.com/category/EARRINGS/type_id=6" target="_blank">
              <img src="../../static/index/home-15.jpg" alt="">
            </a>
          </div>
        </div>
      </div>

      <div class="video-wrap">
        <div class="video">
          <div class="cover" v-if="ifPlay">
            <div class="cover-but" @click="onPlay()"></div>
            <img src="../../static/index/video.jpg" alt="">
          </div>
          <video width="100%" height="100%" controls="controls" :autoplay="false" ref="video" @ended="endedEd()">
            <source src="https://cloud.video.taobao.com//play/u/2200750399716/p/1/e/6/t/1/248174688205.mp4" type="video/mp4">
            <source src="https://cloud.video.taobao.com//play/u/2200750399716/p/1/e/1/t/1/248174688205.swf" type="audio/mp4">
          </video>
        </div>
      </div>

      <h3 class="tit">PRODUCT CATEGORIES</h3>
      <h4 class="subheading">
        <!-- <span>PRODUCT CATEGORIES</span> -->
      </h4>

      <div class="series" ref="series" :style="{'height': seriesHeight+'px'}">
        <el-carousel indicator-position="" :autoplay='auto' class="swiper" :style="{'height': seriesHeight+'px !important'}">
          <el-carousel-item class="swiper-item" :style="{'height': seriesHeight+'px'}">
            <div class="swiper-item-box" :style="{'height': seriesHeight+'px'}">
              <a :href="sixUrl[index]" v-for="(item,index) in classifyImg" target="_blank">
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
  import Bus from '../../components/Bus.js'

  export default {
    data() {
      return {
        auto: false,
        banners: [],
        bannersTwo: [],
        classifyImg: [],
        footNewImg: [{
          adv_url: '',
          adv_image: ''
        }],
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
        swiperOptionTk: {
          loop: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
          }
        },
        videoAutoplay: false,
        ifPlay: true,
        ifPaused: false,
        sixUrl: [
          'https://www.kadart.com/category/RINGS/type_id=2',
          'https://www.kadart.com/category/NECKLACES/type_id=4',
          'https://www.kadart.com/category/EARRINGS/type_id=6',
          'https://www.kadart.com/category/BRACELETS/type_id=8',
          'https://www.kadart.com/category/JADE/type_id=15',
          'https://www.kadart.com/category/JADE/type_id=15'
        ],
        imgUrl:'',
        bannerHeightA: '',
        bannerHeightB: '',
        bannerHeightC: '',
        imgUrl: '',
        seriesHeight: 320
      }
    },
    created() {
      // 顶部轮播图
      this.$axios.get('/common/advert-images', {
        params: {
          'acdv_id': 11,
        }
      }).then(res => {
        this.banners = res.data.data;
        // this.getHeight(this.banners)
      }).catch(function(error) {
        console.log(error);
      });

      // banner图
      this.$axios.get('/common/advert-images', {
        params: {
          'acdv_id': 10,
        }
      }).then(res => {
        this.bannersTwo = res.data.data;
        // this.getHeight(this.bannersTwo)
      }).catch(function(error) {
        console.log(error);
      });

      // 底部新品预告图
      this.$axios.get('/common/advert-images', {
        params: {
          'acdv_id': 14,
        }
      }).then(res => {
        this.footNewImg = res.data.data;
      }).catch(function(error) {
        console.log(error);
      });
    },
    mounted(){
      // 分类小图，6张
      this.$axios.get('/common/advert-images', {
        params: {
          'acdv_id': 13,
        }
      }).then(res => {
         var that = this;
         that.classifyImg = res.data.data;

         that.imgUrl = that.classifyImg[0].adv_image;

         that.getSeriesHeight()

      }).catch(function(error) {
        console.log(error);
      });

      var that = this;
      Bus.$on('scrollFn', function(val){
      	that.getSeriesHeight()
      })

    },
    methods: {
      getSeriesHeight(){
       // 获取图片高度
       var that = this
       var image = new Image();
       image.src = that.imgUrl;
       image.onload = function(){
         var seriesWidth = that.$refs.series.clientWidth;
         that.seriesHeight = ((image.height/image.width)*(seriesWidth/6*0.98)).toFixed(2);
       }
      },

      // onresizeHei(){
      //   var that = this;
      //   this.getHeight(that.bannersTwo, that.bannerHeightB);
      //   this.getHeight(that.banners, that.bannerHeightA);
      //   this.getHeight(that.classifyImg, that.bannerHeightC);
      // },
      // getHeight(element,resu){
      //  // 获取图片高度
      //  var url = element[0].adv_image;
      //  var image = new Image();
      //  image.src = url;
      //  var that = this;
      //  image.onload = function(){
      //    that.resu = (document.body.clientWidth * image.height) / image.width;
      //    // console.log(that.resu)
      //  }
      // },
      onPlay() {
        this.ifPlay = false;
        this.$refs.video.play()
      },
      endedEd() {
        this.ifPlay = true;
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
  .banner {
    width: 100%;
    margin-top: 16px;
  }

  .banner .swiper-wrapper {
    width: 100%;
  }

  .banner .swiper-slide {
    width: 100%;
  }

  .banner img {
    width: 100%;
  }

  .width-box {
    /* width: 1360px; */
    margin: 0 auto;
  }

  h3.tit {
    font-size: 24px;
    color: #333;
    font-weight: bold;
    margin-top: 60px;
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
    width: 49%;
    background-color: #d0c9ce;
  }

  .classify-left {
    width: 38%;
    background-color: #d0c9ce;
  }

  .classify-right{
    width: 60%;
  }

  .classif-list {
    width: 100%;
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

  .video-wrap{
    padding: 0 8.8%;
  }
  .video {
    width: 100%;
    background-color: #d0c9ce;
    margin: 90px auto 0;
    position: relative;
    box-sizing: border-box;
  }

  .video .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .video .cover .cover-but {
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

  .video video {
    object-fit: fill
  }

  .series {
    /* height: 320px; */
  }

  .new {
    /* height: 240px; */
    background-color: #d0c9ce;
    margin: 100px 0;
  }

  .series .el-carousel__container {
    height: 100%;
  }

  .series .swiper {
    width: 100%;
    /* height: 320px; */
  }

  .series .swiper-item {
    width: 100%;
    /* height: 320px; */
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
    width: 98%;
    /* height: 320px; */
  }

  .home_cid {
    /* height: 288px; */
    margin: 20px 0;
    border-bottom: 1px solid #e2eaf0;
  }

  .home_cid .swiper {
    overflow: inherit;
  }

  .home_cid .swiper-wrapper {
    width: 100%;
    /* height: 254px; */
  }

  .home_cid .swiper-slide {
    /* height: 240px; */
  }

  .home_cid .swiper-slide img {
    width: 100%;
    /* height: 100%; */
  }

  .home_cid .pos{
    margin: 10px 0 16px;
  }

  /* 分页器容器 */
  .swiper-pagination {
    float: left;
    height: 26px;
    position: inherit;
    margin: 0 20px;
  }

  /* 分页器 */
  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: #fff;
    border-radius: 12px;
    opacity: 1;
    border: 1px solid #480f33;
    margin: 0 3px;
    margin-top: 7px;
  }

  /* 分页器选中 */
  .swiper-pagination-bullet-active {
    background-color: #480f33 !important;
  }

  .pos {
    width: 100%;
    height: 26px;
    text-align: center;
    font-size: 0;
  }

  .pos .inline {
    display: inline-block;
    height: 100%;
  }

  /* 左右按钮 */
  .swiper-button-prev,
  .swiper-button-next {
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
  .iconyou2 {
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

  .banner .pos{
    position: relative;
    z-index: 3;
    top: -46px;
  }
</style>
