<template>
  <div class="home">
    <div class="home_cid">
      <div v-if="this.banners && this.banners.length != 0" v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(banner, index) in banners" :key="index">
            <a :href='banner.adv_url || "javascript:;"' target="_blank">
              <img :src="banner.adv_image" class="no-stretch">
            </a>
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
      </div>
    </div>

    <div class="banner">
      <div v-if="this.bannersTwo && this.bannersTwo.length != 0" v-swiper:youSwiper="swiperOptionTwo">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(ban, idx) in bannersTwo" :key="idx">
            <a :href='ban.adv_url || "javascript:;"' target="_blank">
              <img :src="ban.adv_image" alt="">
            </a>
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
      </div>
    </div>

    <h3 class="h3">POPULAR COLLECTION</h3>
    <!-- <h4 class="h4">POPULAR COLLECTION</h4> -->

    <div class="img-box-2">
      <a href="https://wap.kadart.com/category/RINGS/type_id=2">
        <img src="../../static/index/01_05_0528.jpg" alt="">
      </a>
    </div>

    <div class="img-box-34 clf">
      <div class="img-box-3 fl">
        <a href="https://wap.kadart.com/category/NECKLACES/type_id=4">
          <img src="../../static/index/01_07_0528.jpg" alt="">
        </a>
      </div>
      <div class="img-box-4 fr">
        <a href="https://wap.kadart.com/category/NECKLACES/type_id=6">
          <img src="../../static/index/01_09_0528.jpg" alt="">
        </a>
      </div>
    </div>

    <h3 class="h3">BRAND CULTURE</h3>
    <!-- <h4 class="h4">BRAND CULTURE</h4> -->

    <div class="img-box-567">
      <div class="img-box-5">
        <a href="/about-kadart">
          <img src="../../static/index/01_13_0528.jpg" alt="">
        </a>
      </div>
      <div class="img-box-67">
        <div class="img-box-6">
          <a href="/kadart-jewelry-factory">
            <img src="../../static/index/01_15_0528.jpg" alt="">
          </a>
        </div>
        <div class="img-box-7">
          <a href="https://wap.kadart.com/category/NECKLACES/type_id=6">
            <img src="../../static/index/01_19_0528.jpg" alt="">
          </a>
        </div>
      </div>
    </div>

    <h3 class="h3">PRODUCT CATEGORIES</h3>
    <!-- <h4 class="h4">PRODUCT CATEGORIES</h4> -->

    <div class="img-box-more" v-if="bannersThree.length > 0">
      <div v-swiper:myssSwiper="swiperOptionThr">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="banner in bannersThree">
            <a :href="banner.adv_url">
              <img :src="banner.adv_image">
            </a>
          </div>
        </div>
        <!-- <div class="swiper-button-next"></div> -->
      </div>
    </div>

    <div class="img-box-8">

      <!-- <div v-swiper:mysnSwiper="swiperOptionThk">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="bannerr in bannersFour">
            <img :src="bannerr.adv_image">
          </div>
        </div>
      </div> -->

      <a :href="bannersFour[0].adv_url">
        <img :src="bannersFour[0].adv_image" alt="">
      </a>
    </div>

    <div class="contact-box">
      <div class="list" :class="optionIndex == 1 ? 'on' : ''">
        <div class="list-tit" @click="contactOption(1)">
          <div class="list-left clf">
            <div class="list-icon list-icon-1 fl"></div>
            <div class="list-tit-text fl">Customer Service</div>
          </div>
          <div class="list-right-icon"></div>
        </div>

        <div class="list-content">
          <div class="list-content-child">
            <a href="/contact-kadart">Contact Us</a>
          </div>
        </div>
      </div>

      <div class="list" :class="optionIndex == 2 ? 'on' : ''">
        <div class="list-tit" @click="contactOption(2)">
          <div class="list-left clf">
            <div class="list-icon list-icon-2 fl"></div>
            <div class="list-tit-text fl">About Us</div>
          </div>
          <div class="list-right-icon"></div>
        </div>

        <div class="list-content">
          <div class="list-content-child">
            <a href="/about-kadart">Brand Culture</a>
          </div>
        </div>
      </div>

      <div class="list" :class="optionIndex == 3 ? 'on' : ''">
        <div class="list-tit" @click="contactOption(3)">
          <div class="list-left clf">
            <div class="list-icon list-icon-3 fl"></div>
            <div class="list-tit-text fl">Help</div>
          </div>
          <div class="list-right-icon"></div>
        </div>

        <div class="list-content">
          <div class="list-content-child">
            <a href="/leave-message">Message Board</a>
          </div>
          <div class="list-content-child">
            <a href="https://wap.kadart.com/category/RINGS/type_id=2">Online Shopping</a>
          </div>
          <div class="list-content-child">
            <a href="/kadart-jewelry-shipping-policy">Shipping Policy</a>
          </div>
          <div class="list-content-child">
            <a href="/kadart-jewelry-return-policy">Return Policy</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import search from '../search/index.vue'
  import Bus from '../../assets/js/bus.js'

  export default {
    components: {
      search
    },
    props: {
      data1: {
        type: Array,
        required: false,
        default () {
          return []
        }
      },
      data2: {
        type: Array,
        required: false,
        default () {
          return []
        }
      },
      data3: {
        type: Array,
        required: false,
        default () {
          return []
        }
      },
      data4: {
        type: Array,
        required: false,
        default () {
          return []
        }
      }
    },
    data() {
      return {
        banners: [],
        bannersTwo: [],
        bannersThree: [],
        bannersFour: [{
          adv_image: '',
          adv_url: ''
        }],
        swiperOption: {
          loop: true,
          autoplay: {
            stopOnLastSlide: true
          },
          slidesPerView: 'auto',
          centeredSlides: true,
          pagination: {
            el: '.swiper-pagination'
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
          slidesPerView: 'auto',
          centeredSlides: true,
          on: {
            slideChange() {
              // console.log('onSlideChangeEnd', this);
            },
            tap() {
              // console.log('onTap', this);
            }
          }
        },
        optionIndex: 0,
        swiperOptionThr: {
          loop: true,
          slidesPerView: 'auto',
          spaceBetween: 5,
          navigation: {
            nextEl: '.swiper-button-next'
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
      }
    },
    mounted() {
      this.banners = this.data1;
      this.bannersTwo = this.data2;
      this.bannersThree = this.data3;
      this.bannersFour = this.data4;
    },
    methods: {
      contactOption(k) {
        if (this.optionIndex == k) {
          this.optionIndex = 0
        } else {
          this.optionIndex = k
        }
      }
    }
  }
</script>

<style scoped>
  .home_cid {
    width: 100%;
    /* height: 9.2rem; */
  }

  .home_cid .swiper-container {
    width: 100%;
    height: 10rem;
  }

  .home_cid .swiper-wrapper {
    width: 100%;
    height: 9.2rem;
  }

  .home_cid .swiper-slide {
    width: 100%;
    height: 7.4rem;
    position: relative;
    overflow: hidden;
  }

  .swiper-slide img {
    width: 100%;
    height: 100%;
  }

  .banner {
    width: 100%;
    margin: 1rem 0 3rem;
    height: 32.6rem;
  }

  .banner .swiper-container {
    width: 100%;
    height: 100%;
  }

  .banner .swiper-wrapper {
    width: 100%;
    height: 100%;
  }

  .banner .swiper-slide {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }

  .h3 {
    font-family: DFPYaSong;
    font-size: 1.55rem;
    color: #333;
    text-align: center;
  }

  .h4 {
    font-family: STKAITI;
    font-size: 1.1rem;
    color: #333;
    text-align: center;
    letter-spacing: 1px;
    margin-top: 0.6rem;
  }

  .img-box-2 {
    width: 100%;
    margin-top: 2.5rem;
  }

  .img-box-3,
  .img-box-4 {
    width: 49%;
  }

  .img-box-34 {
    width: 100;
    margin: 1.25rem 0 5rem;
  }

  .img-box-567 {
    display: flex;
    justify-content: space-between;
    width: 98%;
    height: 33.3rem;
    margin: 3.5rem auto 5rem;
  }

  .img-box-5 {
    width: 49.5%;
    height: 100%;
  }

  .img-box-67 {
    display: flex;
    width: 49.5%;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .img-box-6,
  .img-box-7 {
    height: 16.5rem;
  }

  .img-box-more {
    width: 99%;
    height: 13.1rem;
    overflow-x: scroll;
    margin: 4rem 0 3.5rem 1%;
    padding-right: 1%;
  }

  .img-box-more .swiper-slide {
    width: 10.5rem;
    height: 13.1rem;
  }

  .img-box-more .swiper-button-next {
    width: 2rem;
    height: 3rem;
    background: url(../../static/index/icon/right.png) no-repeat center;
    background-size: 100% 100%;
    position: absolute;
    top: 6.1rem;
    right: 5%;
    transform: translateY(-50%);
    margin: 0;
  }


  .img-box-scroll {
    display: inline-block;
    white-space: nowrap;
    height: 100%;
  }

  .img-box-r {
    width: 10.5rem;
    height: 13.1rem;
    display: inline-block;
  }

  .img-box-8 {
    width: 100%;
  }

  .contact-box {
    width: 100%;
    border-top: 1px solid #bcb9c3;
    padding: 0.6rem 0.8% 0 0.8%;
    margin: 4rem 0 5rem;
  }

  .contact-box .list-tit {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
    padding: 0.8rem 3.2% 0 4%;
    border-bottom: 1px solid rgba(29, 0, 58, 0.32);
    ;
  }

  .contact-box .list-left {
    display: flex;
    align-items: center;
  }

  .contact-box .list-icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .list-icon-1 {
    background: url(../../static/index/icon/icon-5.png) no-repeat center;
    background-size: 100% 100%;
  }

  .list-icon-2 {
    background: url(../../static/index/icon/icon-4.png) no-repeat center;
    background-size: 100% 100%;
  }

  .list-icon-3 {
    background: url(../../static/index/icon/icon-6.png) no-repeat center;
    background-size: 100% 100%;
  }

  .list-tit-text {
    font-family: DFPYaSong;
    font-size: 1.45rem;
    color: #333;
    white-space: nowrap;
    margin-left: 1rem;
  }

  .list-right-icon {
    width: 1.5rem;
    height: 1.5rem;
    background: url(../../static/index/icon/icon-7.png) no-repeat center;
    background-size: 100% 100%;
  }

  .list.on .list-right-icon {
    transform: rotate(180deg);
  }

  .list-content {
    min-height: 4rem;
    padding-left: 3.8rem;
    display: none;
  }

  .list.on .list-content {
    display: block;
  }

  .list-content-child {
    font-family: STKAITI;
    font-size: 1.3rem;
    color: #333;
    opacity: 0.66;
    text-decoration: underline;
    margin-top: 1.3rem;
  }

  /* 分页器容器 */
  .home_cid /deep/ .swiper-pagination {
    position: inherit;
    margin-top: 0.4rem;
  }

  /* 分页器 */
  .home_cid /deep/ .swiper-pagination-bullet {
    width: 4px;
    height: 4px;
    background-color: #fff;
    border-radius: 12px;
    opacity: 1;
    border: 1px solid #480f33;
    margin: 0 0.5rem;
  }

  /* 分页器选中 */
  .home_cid /deep/ .swiper-pagination-bullet-active {
    background-color: #480f33 !important;
  }

  .swiper-button-next:focus {
    outline: none;
  }
</style>
