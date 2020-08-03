<template>
  <div class="menu">
    <div v-if="banners.length != 0" v-swiper:myzSwiper="swiperOptionN" class="swiper-box">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(banner, index) in banners" :key="index">
          <a :href="banner.adv_url">
            <img class="no-stretch" :src="banner.adv_image">
          </a>
        </div>
      </div>

      <div class="swiper-pagination swiper-pagination-bullets"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        banners: [
          // '/index/01_03.jpg',
        ],
        swiperOptionN: {
          loop: true,
          autoplay: {
            stopOnLastSlide: true
          },
          slidesPerView: 'auto',
          centeredSlides: true,
          pagination: {
            el: '.swiper-pagination'
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
      }
    },
    mounted(){
      var artcleImg = JSON.parse(localStorage.getItem('artcleImg'));
      if(artcleImg){
        this.banners = artcleImg;
      }else{
        // 顶部轮播图
        this.$axios.get('/common/advert-images', {
          params: {
            'acdv_id': 18,
          }
        }).then(res => {
          this.banners = res.data.data;
          localStorage.setItem('artcleImg', JSON.stringify(this.banners));

          if(this.banners.length == 1){
            this.swiperOptionN.autoplay = false;
          }
          // this.getHeight(this.banners)
        }).catch(function(error) {
          console.log(error);
        });
      }
    }
  }
</script>

<style scoped>
  .menu{
    width: 100%;
    height: 15rem;
  }

  .swiper-box{
    position: relative;
    width: 100%;
    height: 100%;
  }

  .menu .swiper-wrapper{
    width: 100%;
    height: 12.2rem;
  }

  .menu .swiper-slide{
    position: relative;
    overflow: hidden;
  }

  .menu .swiper-wrapper img{
    width: 100%;
    height: 100%;
  }

  .menu .swiper-button-prev{
    width: 2rem;
    height: 3rem;
    background: url(../../static/index/icon/left.png) no-repeat center;
    background-size: 100% 100%;
    position: absolute;
    top: 6.1rem;
    left: 5%;
    transform: translateY(-50%);
    margin: 0;
  }
  .menu .swiper-button-next{
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

  .menu .swiper-button-prev:focus{
    outline: none;
  }
  .menu .swiper-button-next:focus{
    outline: none;
  }

  /* 分页器容器 */
  .menu /deep/ .swiper-pagination {
    position: inherit;
    margin-top: 2.4rem;
  }

  /* 分页器 */
  .menu /deep/ .swiper-pagination-bullet {
    width: 4px;
    height: 4px;
    background-color: #fff;
    border-radius: 12px;
    opacity: 1;
    border: 1px solid #480f33;
    margin: 0 0.5rem;
  }

  /* 分页器选中 */
  .menu /deep/ .swiper-pagination-bullet-active {
    background-color: #480f33 !important;
  }
</style>
