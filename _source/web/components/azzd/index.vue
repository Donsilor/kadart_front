<template>
  <div class="azzd">
    <div v-if="this.banners && this.banners != 0" v-swiper:hisSwiper="swiperOptionTh" :style="{'height': bannerHeightA+'px'}">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="banner in banners.data">
          <a :href='banner.adv_url || "javascript:;"' target="_blank">
            <img :src="banner.adv_image">
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
</template>

<script>
  export default {
    data() {
      return {
        banners: [
          // {url:'https://images-aka.zales.com/hp/z20191218/tsb_20191218_fs_d.gif',title: '123'},
          // {url:'https://images-aka.zales.com/hp/z20191212/tsb_20191212_DazzlingDeals_d.jpg',title: '1203'},
        ],
        adv_id: 2,
        swiperOptionTh: {
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
        bannerHeightA: ''
      }
    },
    mounted(){
      this.getAdData();
      const _this = this;
      _this.$nextTick(() => {
        window.onresize = function(){
         _this.onresizeHei();
        }
      })
    },
    methods: {
      onresizeHei(){
        var that = this;
        this.getHeight(that.banners, that.bannerHeightA);
      },
      getHeight(element,resu){
       // 获取图片高度
       var url = element[0].adv_image;
       var image = new Image();
       image.src = url;
       var that = this;
       image.onload = function(){
         that.resu = (document.body.clientWidth * image.height) / image.width;
         console.log(that.resu)
       }
     },
      getAdData() {
        var line_id = localStorage.getItem('line_id');
        if(line_id){
          this.adv_id = line_id;
        }
        this.$axios.get('/common/advert-images/baner', {
          params: {
            'acdv_id': '12',
            'type_id': this.adv_id
          },
        }).then(res => {
          this.banners = res.data;
          // console.log(this.banners)
          this.getHeight(this.banners, that.bannerHeightA)
        }).catch(function(error) {
          // console.log(error);
        });
      }
    }
  }
</script>

<style>
  .azzd {
    /* height: 288px; */
    margin-top: 20px;
    border-bottom: 1px solid #e2eaf0;
  }

  .azzd .swiper {
    width: 100%;
    /* height: 288px; */
    overflow: inherit;
  }

  .azzd .swiper-wrapper {
    width: 100%;
    /* height: 254px; */
  }

  .azzd .swiper-slide {
    /* height: 240px; */
  }

  .azzd .swiper-slide img {
    width: 100%;
    height: 100%;
  }

  /* 分页器容器 */
  .azzd .swiper-pagination {
    float: left;
    height: 26px;
    position: inherit;
    margin: 0 20px;
  }

  /* 分页器 */
  .azzd .swiper-pagination-bullet {
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
  .azzd .swiper-pagination-bullet-active {
    background-color: #480f33 !important;
  }

  .azzd .pos {
    width: 100%;
    height: 26px;
    text-align: center;
    font-size: 0;
    margin: 20px 0;
  }

  .pos .inline {
    display: inline-block;
    height: 100%;
  }

  /* 左右按钮 */
  .azzd .swiper-button-prev,
  .azzd .swiper-button-next {
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
</style>
