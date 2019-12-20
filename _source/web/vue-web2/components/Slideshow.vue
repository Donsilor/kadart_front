<template>
  <div>
    <div v-swiper:mySwiper="swiperOption" class="swiper-box-two">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="bannerT in bannersTwo">
          <img :src="bannerT">
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets"></div>
    </div>
  </div>
</template>

<script>
 export default {
    data () {
      return {
        bannersTwo: [
          'index/1.png',
          'index/15',
          'index/1.png'
        ],
        swiperOption: {
          loop: true,
          slidesPerView: 'auto',
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true
          }
        }
      }
    },
    mounted() {
      console.log('app init', this)
      setTimeout(() => {
        this.banners.push('/5.jpg')
        console.log('banners update')
      }, 3000)
      console.log(
        'This is current swiper instance object', this.mySwiper,
        'I will slideTo banners 3')
       this.mySwiper.slideTo(3)
    }
  }
</script>

<style>
  .swiper-box-two{
    width: 1020px;
    height: 140px;
    margin: 40px auto 100px;
    border: 1px solid red;
  }

  .swiper-box-two img{
    width: 140px;
    height: 140px;
  }

  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color:#000;
    opacity: 1;
    background: rgba(0,0,0,0.2);
  }
  .swiper-pagination-bullet-active {
    color:#fff;
    background: #007aff;
  }
</style>
