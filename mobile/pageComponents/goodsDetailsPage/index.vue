<template>
  <div>
    <div class="goods-info">
      <div class="goods-tit">{{goodsDetail.style_name}}</div>
      <div class="goods-num">Style no:{{goodsDetail.style_sn}}</div>
      <div class="goods-img-box" :style="{height: imgHeight + 'px'}">
        <div v-swiper:mybSwiper="swiperOptionFi">
          <div class="swiper-wrapper" :style="{height: imgHeight + 'px'}">
            <div class="swiper-slide" v-for="banner in banners" :style="{height: (imgHeight - 2) + 'px'}">
               <img :src="bigImg[index_k]">
            </div>
          </div>
        </div>

        <div class="button-prev" @click="toLeft"></div>
        <div class="button-next" @click="toRight"></div>
      </div>

      <div class="small-img-box">
        <div class="img-scroll">
          <div class="small-img" :class="index_k == index ?'active' : ''" v-for="(item, index) in smallImg" @click="chooseImg(index)">
            <a :href="item.url">
              <img :src="item" alt="">
            </a>
          </div>
        </div>
      </div>
      <div class="share-box clf">
        <div class="fr clf" style="margin-right: 1rem;">
          <div class="share-icon share-share-1 fl" @click="shareFaceBook"></div>
          <!-- <div class="share-icon share-share-2 fl"></div> -->
          <div class="share-icon share-share-3 fl" @click="shareTwitter"></div>
          <!-- <div class="share-icon share-share-4 fl"></div> -->
          <div class="share-icon share-share-5 fl">
            <a style="background: none !important;opacity: 0;display: block;width: 100%;height: 100%;overflow: hidden;" target="_blank" href="//www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark"  data-pin-shape="round" data-pin-height="28">pinterest分享</a>
            <script type="text/javascript" async src="//assets.pinterest.com/js/pinit.js"></script><!-- ＊＊＊＊＊这是pinterest分享必带JS＊＊＊＊＊＊＊ -->
          </div>
        </div>
      </div>
      <div class="contact-box">
        <div class="contact-box-left">
          <div class="contact-price">Reference price</div>
          <div class="contact-num">{{goodsDetail.currency}}{{goodsDetail.sale_price}}</div>
        </div>
        <div class="contact-box-btn">
          <a href="/leave-message">CONTACT US</a>
        </div>
      </div>
      <div class="contact-us">
        <a href="/leave-message">*Please contact us for more ring size information.</a>
      </div>
    </div>

    <div class="goods-parameter">
      <div class="tit-box">
        <div class="title">PRODUCT PARAMETERS</div>
      </div>

      <div class="parameter-box">
        <div class="parameter-list clf" v-if="index < parameterList" v-for="(item, index) in goodsAttr">
          <div class="parameter-name fl">{{item.name}}</div>
          <div class="parameter-val fl">{{item.value}}</div>
        </div>

        <div class="parameter-line"></div>
        <div class="parameter-more" v-if="ifShowOther" @click="showOther"></div>
      </div>
    </div>

    <div class="other">
      <div class="tit-box">
        <div class="title">OTHER GUESTS ALSO LIKE</div>
      </div>

      <div v-swiper:myaSwiper="swiperOptionTh">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-if="index < 6" v-for="(item, index) in goodsRecommend" :key="index">
            <div class="swiper-img" :style="{height: recImgHei + 'px'}">
              <a :href="item.url">
                <img :src="item.style_image">
              </a>
            </div>
            <div class="swiper-text">Reference price</div>
            <div class="swiper-price">{{item.currency}}{{item.sale_price}}</div>
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
      </div>
    </div>

    <div class="goods-detail" v-if="0">
      <div class="tit-box">
        <div class="title">COMMODITYD DETAILS</div>
      </div>

    </div>
  </div>
</template>

<script>
  export default{
    props:{
      info: {
        type: Object,
        required: false,
        default() {
          return {}
        }
      },
      g_id: {
        type: String,
        required: false,
        default() {
          return ''
        }
      }
    },
    data (){
      return{
        banners: [
          '/index/01_03.jpg',
          '/index/01_05.jpg',
          '/index/01_07.jpg',
          '/index/01_09.jpg',
          '/index/01_07.jpg',
          '/index/01_09.jpg',
        ],
        bannersT: [
          '/index/01_03.jpg',
        ],
        swiperOptionFi: {
          loop: true,
          slidesPerView: 'auto',
          spaceBetween: 10,
          on: {
            slideChange() {
              // console.log('onSlideChangeEnd', this);
            },
            tap() {
              // console.log('onTap', this);
            }
          }
        },
        swiperOptionTh: {
          loop: true,
          slidesPerView: '3',
          spaceBetween: 10,
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
        goodsId: '',
        goodsDetail: [],
        smallImg: [],
        bigImg: [],
        index_k: 0,
        goodsAttr: [],
        goodsRecommend: [],
        imgHeight: '',
        recImgHei: '',
        parameterList: 6,
        ifShowOther: true,
        seo: {
        	"meta_title": '',
        	"meta_word": '',
        	"meta_desc": '',
        }
      }
    },
    mounted(){
      this.goodsDetail = this.info.data;
      this.smallImg = this.info.data.goods_images.thumb || '';
      this.bigImg = this.info.data.goods_images.big || '';
      this.goodsAttr = [...this.info.data.style_attrs];

      // 商品推荐
      this.$axios.get('/goods/style/guess-list', {
        params: {
          style_id: this.g_id
        }
      }).then(res => {
        this.goodsRecommend = res.data.data;
      }).catch(function(error) {
        console.log(error);
      });

      var heig = document.body.clientWidth;
      this.imgHeight = Math.round(heig*0.8);
      this.recImgHei = Math.round((heig*0.9 - 20) * 0.333);
    },
    methods:{
      chooseImg(k) {
        this.index_k = k
      },
      toLeft(){
        var img_num = this.smallImg.length;
        this.index_k --;
        this.index_k = Math.abs(this.index_k+4);
        this.index_k %= img_num;
      },
      toRight(){
        var img_num = this.smallImg.length;
        this.index_k ++;
        this.index_k %= img_num;
      },
      showOther(){
        this.ifShowOther = false;
        this.parameterList = 100;
      },
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
  .goods-info{
    width: 80%;
    margin: 2rem auto 0;
  }

  .goods-tit{
    font-family: DFPYaSong;
    font-size: 1.45rem;
    line-height: 2.2rem;
    font-weight: bold;
    color: #1d003a;
    text-align: center;
    overflow: hidden;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp:2;
  }

  .goods-num{
    font-family: STKAITI;
    font-size: 1.1rem;
    font-weight: bold;
    text-decoration: underline;
    color: #adb1b4;
    text-align: center;
    line-height: 2.2rem;
  }

  .goods-img-box{
    width: 100%;
    height: 24rem;
    border: 1px solid #c3c3c3;
    margin-top: 1.5rem;
    position: relative;
    z-index: 2;
  }

  .button-prev{
    width: 3rem;
    height: 3.4rem;
    background: url(../../static/index/icon/left.png) no-repeat center;
    background-size: 60% 80%;
    position: absolute;
    top: 50%;
    left: 3%;
    transform: translateY(-50%);
    z-index: 6;
    opacity: 0.38;
  }
  .button-next{
    width: 3rem;
    height: 3.4rem;
    background: url(../../static/index/icon/right.png) no-repeat center;
    background-size: 60% 80%;
    position: absolute;
    top: 50%;
    right: 3%;
    transform: translateY(-50%);
    z-index: 6;
    opacity: 0.38;
  }

  .small-img-box{
    width: 100%;
    margin-top: 2rem;
    overflow: scroll;
  }
  .img-scroll{
    display: inline-block;
    white-space: nowrap;
  }
  .small-img{
    display: inline-block;
    width: 5rem;
    height: 5rem;
    border: 1px solid #c3c3c3;
    vertical-align: middle;
  }
  .small-img:not(:last-child){
    margin-right: 6px;
  }
  .small-img.active{
    border: 2px solid #313131;
  }

  .share-box{
    height: 2.1rem;
    margin-top: 2rem;
  }
  .share-icon{
    height: 2.1rem;
    width: 2.1rem;
    margin-left: 1rem;
  }

  .share-share-1{
    background: url(../../static/index/icon/web-Facebook.png) no-repeat center;
    background-size: 100% 100%;
  }
  .share-share-2{
    background: url(../../static/index/icon/youtube.png) no-repeat center;
    background-size: 100% 100%;
  }
  .share-share-3{
    background: url(../../static/index/icon/tuite.png) no-repeat center;
    background-size: 100% 100%;
  }
  .share-share-4{
    background: url(../../static/index/icon/in.png) no-repeat center;
    background-size: 100% 100%;
  }
  .share-share-5{
    background: url(../../static/index/icon/pinterest.png) no-repeat center;
    background-size: 100% 100%;
  }

  .contact-box{
    width: 100%;
    height: 10.5rem;
    border-top: 1px solid #c3c3c3;
    border-bottom: 1px solid #c3c3c3;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .contact-box-left{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .contact-price{
    font-family: STKAITI;
    font-size: 1.3rem;
    color: #000;
  }

  .contact-num{
    font-family: FZFYSJW;
    font-size: 1.9rem;
    color: #000;
    font-weight: bold;
    margin-top: 0.5rem;
  }

  .contact-box-btn{
    width: 11rem;
    height: 3.3rem;
    background-color: #000;
    text-align: center;
    line-height: 3.3rem;
    font-family: STKAITI;
    font-size: 1.3rem;
    font-weight: bold;
    color: #fff;
  }

  .contact-us{
    width: 100%;
    height: 5.5rem;
    line-height: 5.5rem;
    text-align: center;
    font-family: STKAITI;
    font-size: 1.1rem;
    font-weight: bold;
    text-decoration: underline;
    color: #db0f0f;
  }

  .goods-parameter{
    width: 100%;
    background-color: rgba(234, 234, 234, 0.37);
    padding: 3rem 5%;
  }

  .tit-box{
    width: 100%;
    height: 24px;
    border-bottom: 1px solid #000;
  }
  .tit-box .title{
    display: inline-block;
    font-size: 1.3rem;
    line-height: 23px;
    font-weight: bold;
    letter-spacing: -1px;
    border-bottom: 2px solid #000;
  }

  .parameter-box{
    margin-top: 2.5rem;
  }

  .parameter-list{
    height: 2rem;
    line-height: 2.4rem;
    border-bottom: 1px solid #ccc;
  }

  .parameter-name{
    width: 45%;
    height: 100%;
    font-family: STKAITI;
    font-size: 1.3rem;
    color: #1d003a;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .parameter-val{
    width: 55%;
    height: 100%;
    font-family: STKAITI;
    font-size: 1.3rem;
    color: #1d003a;
    opacity: 0.71;
    border-left: 1px solid #ccc;
    padding-left: 3%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .parameter-line{
    width: 100%;
    height: 1px;
    background-color: #1d003a;
    opacity: 0.6;
    margin-top: 3rem;
  }

  .parameter-more{
    width: 2rem;
    height: 2rem;
    background: url(../../static/index/icon/icon-7.png) no-repeat center;
    background-size: 100% 100%;
    margin: 1rem auto 0;
    opacity: 0.6;
  }

  .other{
    width: 100%;
    padding: 3rem 5% 2rem;
  }

  .other .swiper-container{
    margin-top: 2.5rem;
    width: 100%;
    height: 100%;
  }

  .other .swiper-slide{
    width: 100%;
  }

  .other .swiper-img{
    width: 100%;
    height: 7rem;
    border: 1px solid #ccc;
    margin-bottom: 1rem;
  }

  .swiper-slide img{
    width: 100%;
    height: 100%;
  }

  .swiper-text,
  .swiper-price{
    font-family: STKAITI;
    font-size: 1.3rem;
    color: #1d003a;
    line-height: 1.2rem;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 0.4rem;
  }

  .goods-detail{
    border-top: 1px solid #ccc;
    padding: 3rem 5%;
  }

  /* 分页器容器 */
  .other /deep/ .swiper-pagination {
    position: inherit;
    margin-top: 30px;
  }

  /* 分页器 */
  .other /deep/ .swiper-pagination-bullet {
    width: 4px;
    height: 4px;
    background-color: #fff;
    border-radius: 12px;
    opacity: 1;
    border: 1px solid #480f33;
    margin: 0 0.5rem;
  }

  /* 分页器选中 */
  .other /deep/ .swiper-pagination-bullet-active {
    background-color: #480f33 !important;
  }

  .goods-img-box .swiper-container{
    width: calc(100% -2px);
    height: calc(100% -2px);
  }
</style>
