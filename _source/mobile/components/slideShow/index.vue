<template>
  <div class="menu">
    <div v-swiper:mySwiper="swiperOption" class="swiper-box">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="banner in banners">
          <img :src="banner">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        banners: [
          '/index/01_03.jpg',
          '/index/01_05.jpg',
          '/index/01_07.jpg',
          '/index/01_09.jpg',
        ],
        swiperOption: {
          loop: true,
          autoplay: {
            stopOnLastSlide: true
          },
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
      }
    },
    mounted(){

    },
    methods:{

    }
  }
</script>

<style scoped>
  .menu{
    width: 100%;
    height: 12.2rem;
  }

  .swiper-box{
    width: 100%;
    height: 100%;
  }

  .menu .swiper-wrapper{
    width: 100%;
    height: 100%;
  }
  
  .menu .swiper-wrapper img{
    width: 100%;
    height: 100%;
  }


</style>
