<template>
  <div>
    <div class="commodity-box clf" ref="commodityBox">
      <div class="commodity-left" :style="{'width': commodityLeftWidth+'px'}">
        <div class="text-1">
          <!-- <span>Online Exclusive Brilliant Value</span> -->
        </div>
        <div class="text-2">{{goodsDetail.data.style_name}}</div>
        <div class="text-9">Item #: <span class="text-item">{{goodsDetail.data.style_sn}}</span></div>
        <div class="img-box" :style="{width: commodityLeftWidth}">
          <magnifying :msg="bigImg[index_k]"></magnifying>
        </div>
        <div class="text-3">Mouse over the image to view the large picture
          <i class="iconfont iconfangda"></i>
        </div>
        <div class="show-img">
          <div class="img-box-b">
            <div class="img-box-b-mid">
              <div v-if="index<5" class="img-box" :class="[index_k == index ? 'active' : '']" v-for="(item, index) in smallImg"
                @click="chooseImg(index)">
                <img :src="item" alt="">
              </div>
              <div v-if="index>4 && index<6" class="img-box" :class="[index_k == index ? 'active' : '']" v-for="(item, index) in smallImg"
                @click.prevent="chooseImg(index)">
                <img :src="item" alt="">
                <i class="iconfont iconyou" v-if="!isShowImg" @click.prevent="ShowImg()"></i>
              </div>
              <div v-if="index>6 && isShowImg" class="img-box" :class="[index_k == index ? 'active' : '']" v-for="(item, index) in smallImg"
                @click="chooseImg(index)">
                <img :src="item" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="commodity-right">
        <div class="price">Reference Price<span class="big">{{goodsDetail.data.currency}}{{goodsDetail.data.sale_price}}</span></div>
        <div class="mq">MOQ: {{goodsDetail.data.style_moq}} pcs</div>
        <div class="contact"><span class="color" @click="sendMsg()">Please contact us</span> for more ring size
          information.</div>
        <div class="contact-btn" @click="sendMsg()">CONTACT US</div>
        <div class="holiday-box">
          <div class="holiday clf">
            <div class="left fl">Product Parameters</div>
            <div class="right fr">
              <i class="iconfont"></i>
            </div>
          </div>

          <div class="table">
            <table width="100%">
              <tbody>
                <tr class="table-list clf" v-if="index < 13" v-for="(item, index) in goodsDetail.data.style_attrs">
                  <td class="left fl">
                    <div class="table-child">{{item.name}}</div>
                  </td>
                  <td class="right fl">
                    <div class="table-child">{{item.value}}</div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="table-line"></div>
          </div>
        </div>

        <div class="share-text" v-if="1">Share:</div>
        <div class="share-box" v-if="1">
          <div class="icon" @click="shareFaceBook">
            <img src="../../static/index/icon01.png" alt="">
          </div>
          <div class="icon" @click="shareTwitter">
            <img src="../../static/index/icon02.png" alt="">
          </div>
          <div class="icon" style="position: relative;">
              <img src="../../static/index/icon03.png" alt="" style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;z-index: -1;">
              <a style="background: none !important;opacity: 0;" target="_blank" href="//www.pinterest.com/pin/create/button/" data-pin-do="buttonBookmark"  data-pin-shape="round" data-pin-height="28">pinterest分享</a>
              <script type="text/javascript" async src="//assets.pinterest.com/js/pinit.js"></script><!-- ＊＊＊＊＊这是pinterest分享必带JS＊＊＊＊＊＊＊ -->
          </div>
          <div class="icon">
            <img src="../../static/index/icon04.png" alt="">
          </div>
          <div class="icon">
            <a href="https://studio.youtube.com/channel/UChui2nY6e-tN-poHVdcpb3Q/videos/upload?d=ud&filter=%5B%5D&sort=%7B'columnType'" target="_blank">
              <img src="../../static/index/icon05.png" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
    <h3 class="other">OTHER GUESTS ALSO LIKE</h3>

    <div class="recommend-swiper">
      <div v-if="this.goodsRecommend.data && this.goodsRecommend.data != 0" v-swiper:hisSwiper="swiperOptionFo">
        <div class="swiper-wrapper">
          <div v-if="index < 6" class="swiper-slide" v-for="(item, index) in goodsRecommend.data" :key="index">
            <!-- <a :href="'/goods-detail?id='+item.id"> -->
            <a :href="item.url">
              <div class="img-box">
                <img :src="item.style_image">
              </div>
              <div class="recommend-name">Reference Price</div>
              <div class="recommend-price">{{item.currency}}{{item.sale_price}}</div>
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

    <div class="goods-detail">
      <div class="goods-detail-tit">COMMODITYD DETAILS</div>
      <div class="goods-detail-box" id="goods-detail-box" v-html="goodsDetail.data.goods_body"></div>
    </div>
  </div>
</template>

<script>
  import Bus from '../../components/Bus.js'
  import magnifying from '../Magnifying/index.vue'

  export default {
    components: {
      magnifying
    },
    head() {
      return {
        title: this.seo.meta_title ||  'Best high quality jewelry with fine craftsmanship wholesale',
        meta: [
          { hid: 'description', name: 'description', content: this.seo.meta_desc || 'KADArt manufacturer and wholesale top-end gold,silver, copper and alloy jewelry with precious,semi gems,crystal,zircon,rhinestone at good price'},
          { hid: 'keywords', name: 'keywords', content: this.seo.meta_word || 'jewelry factory, jewelry supplier, jewelry manufacturer,jewelry wholesale,gold jewelry, silver jewelry, brass jewelry, high quality jewelry, best jewelry, stylish jewelry, fashion jewelry' },
          {
            property: 'og:url',
            class: 'fa_url',
            content: 'https://www.kadart/casd.com',
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            property: 'og:title',
            class: 'fa_title',
            content: '11111'
          },
          {
            property: 'og:description',
            class: 'fa_desc',
            content: '222222'
          },
          {
            property: 'og:image',
            class: 'fa_img',
            // content: 'https://cdn.kadart.com/images/2019/12/24/image_157716063699535250.jpg?x-oss-process=style/800X800',
            content: 'http://static.chiefmore.com/u/cms/www/201801/261037582477.jpg',
          },
        ]
      }
    },
    data() {
      return {
        og_url: '',
        og_img: 'www.baidu.com/img/bd_logo1.png',
        recommendUrl: '',
        goodsId: '',
        goodsDetail: {
          data: {
            currency: '',
            goods_3ds: '',
            goods_images: {
              big: [],
              thumb: []
            },
            id: '',
            sale_price: '',
            style_attrs: [{
              name: '',
              value: ''
            }],
            style_moq: '',
            style_name: '',
            type_id: ''
          }
        },
        smallImg: [],
        bigImg: [],
        goodsRecommend: [{
          data: [{
            currency: '',
            goods_clicks: '',
            id: '',
            sale_price: '',
            style_image: '',
            styel_name: '',
            style_sn: ''
          }]
        }],
        recommendId: '',
        recommendIndex: '',
        banners: [
          '../index/2.jpg',
          '../index/12.jpg',
          '../index/5.jpg',
          '../index/15',
        ],
        bannersT: [
          '../index/2.jpg',
          '../index/12.jpg',
          '../index/5.jpg',
          '../index/15',
        ],
        isShowImg: false,
        text: '',
        index_k: 0,
        swiperOptionFo: {
          loop: true,
          slidesPerView: 'auto',
          centeredSlides: true,
          spaceBetween: 80,
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
        commodityLeftWidth: '',
        seo: {
        	"meta_title": '',
        	"meta_word": '',
        	"meta_desc": '',
        }
      }
    },
    created(){

    },
    mounted() {
      var that = this;
      var goodsDetailId = this.$route.query.id;

      if(goodsDetailId == undefined){
        var dataId = location.pathname;
        var num = dataId.lastIndexOf('/');
        goodsDetailId = dataId.slice(num+1);
      }

      if (goodsDetailId) {
        localStorage.setItem('goodsDetailId', goodsDetailId)
        this.goodsId = goodsDetailId;
      } else {
        goodsDetailId = localStorage.getItem('goodsDetailId');
        this.goodsId = goodsDetailId;
      }

      this.$axios.get('/goods/style/detail', {
        params: {
          id: this.goodsId
        }
      }).then(res => {
        that.goodsDetail = res.data;
        that.smallImg = res.data.data.goods_images.thumb || '';
        that.bigImg = res.data.data.goods_images.big || '';
        that.seo = res.data.data.seo;
      }).catch(function(error) {
        console.log(error);
      });

      // 商品推荐
      this.$axios.get('/goods/style/guess-list', {
        params: {
          style_id: this.goodsId
        }
      }).then(res => {
        this.goodsRecommend = res.data;
        // console.log(this.goodsRecommend)
      }).catch(function(error) {
        console.log(error);
      });
    },
    methods: {
      sendMsg() {
        Bus.$emit('send', true)
      },
      chooseImg(k) {
        this.index_k = k
      },
      ShowImg(){
        this.isShowImg = true
      },
      getWidth(){
        var comBox = this.$refs.commodityBox.clientWidth;
        // var that = this;
        this.commodityLeftWidth = comBox-568;
        // console.log(that.commodityLeftWidth)
      },
      shareFaceBook(){
        var u = 'www.yousfku.com';
        var t = document.getElementsByClassName("fa_title")[0].content;
        var m = document.getElementsByClassName("fa_img")[0].content;
        // console.log(u)

        window.open("http://www.facebook.com/sharer.php?u="+ encodeURIComponent(u)+"&t=123123"+ encodeURIComponent(m), "sharer","toolbar=0,status=0,width=626,height=436");
      },
      shareTwitter(){
        var t = document.getElementsByClassName("fa_title")[0].content;
        var d = document.getElementsByClassName("fa_desc")[0].content;
        var u = document.getElementsByClassName("fa_url")[0].content;
        var share = u + '\n' + t + '\n' + d;

        window.open("https://twitter.com/intent/tweet?text="+ encodeURIComponent(share), "sharer","toolbar=0,status=0,width=626,height=436");
      },
    }
  }
</script>

<style>
  .commodity-box {
    margin: 40px auto 0;
		min-width: 800px;
		max-width: 90%;
		position: relative;
  }

  .commodity-left {
    min-width: 432px;
		max-width: 760px;
		margin-right: 448px;
  }

  .commodity-box .text-1 {
    font-size: 16px;
    color: #daab60;
    font-style: italic;
    height: 22px;
  }

  .commodity-box .text-2 {
    min-height: 32px;
    max-height: 60px;
    font-size: 22px;
    color: #333;
    margin-top: 8px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .commodity-box .text-9{
    margin-top: 10px;
    font-size: 14px;
    color: #363636;
  }

  .commodity-box .text-9 .text-item{
    font-weight: bold;
  }

  .commodity-box .img-box {
    width: 100%;
    height: 560px;
    margin-top: 20px;
    font-size: 0;
  }

  .commodity-box .text-3 {
    font-size: 16px;
    color: #480f33;
    text-align: right;
    margin-top: 10px;
  }

  .commodity-box .text-3 .iconfont {
    font-size: 20px;
    color: rgba(72, 15, 51, 0.5);
    position: relative;
    top: 4px;
  }
  .commodity-box img{
    width: 100%;
    height: 100%;
  }

  .show-img {
    height: 100px;
    margin-top: 20px;
  }

  .towards-left,
  .towards-right {
    width: 100px;
    height: 100px;
    background-color: #d0c9ce;
    text-align: center;
    line-height: 100px;
    position: relative;
  }

  .show-img .iconfont {
    font-size: 20px;
    color: #999;
  }

  .show-img .img-box-b {
    width: 666px;
    height: 102px;
    margin: 0 10px;
    position: relative;
    padding-top: 2px;
    overflow: hidden;
  }

  .img-box-b-mid{
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    min-width: 100%;
    white-space: nowrap;
  }

  .show-img .img-box-b .img-box {
    width: 100px;
    height: 100px;
    margin: 0 10px 0 0;
    position: relative;
    display: inline-block;
    cursor: pointer;
    font-size: 0;
  }

  .show-img .img-box-b .img-box.active {
    border: 1px solid #480f33;
    box-sizing: border-box;
  }

  .show-img .img-box-b .img-box .iconfont {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
  }

  .show-img .img-box-b .img-box img {
    width: 98%;
    margin-left: 1%;
  }

  .swiper-button-prev {
    position: absolute;
    left: -76px;
    top: 50%;
    background-image: none;
    outline: none;
  }

  .swiper-button-next {
    position: absolute;
    left: 370px;
    top: 50%;
    background-image: none;
    outline: none;
  }

  .commodity-box .commodity-right {
    width: 406px;
    margin: 20px 0 0 42px;
		position: absolute;
		right: 0;
		top: 0;
		z-index: 0;
  }

  .commodity-right .price {
    font-size: 24px;
    color: #b64d52;
  }

  .commodity-right .price .big {
    font-size: 32px;
    margin-left: 10px;
  }

  .commodity-right .mq {
    font-size: 16px;
    color: #333;
    margin-top: 10px;
  }

  .commodity-right .contact {
    height: 72px;
    line-height: 72px;
    text-align: center;
    border-top: 1px solid #808080;
    border-bottom: 1px solid #808080;
    margin-top: 10px;
  }

  .commodity-right .contact .color {
    color: #b64d52;
    text-decoration: underline;
    font-weight: bold;
    cursor: pointer;
  }

  .commodity-right .contact-btn {
    width: 300px;
    height: 38px;
    background-color: #480f33;
    border-radius: 4px;
    margin: 40px auto;
    text-align: center;
    color: #fff;
    font-size: 12px;
    line-height: 38px;
    cursor: pointer;
  }

  .holiday-box {
    width: 406px;
    border-top: 1px solid #808080;
    border-bottom: 1px solid #808080;
    padding: 0 24px 40px;
    box-sizing: border-box;
  }

  .holiday {
    margin: 14px 0;
  }

  .holiday .left {
    font-size: 12px;
    color: #666;
  }

  .table {
    border-top: 1px solid #999;
    position: relative;
    z-index: -1;
    table-layout:fixed
  }

  .table .table-list {
    border-bottom: 1px solid #999;
    height: 30px;
    line-height: 30px;
    word-break: break-all;
  }

  .table-child{
    width: 175px;
    overflow: hidden;
    white-space: nowrap;
    padding-left: 5px;
    box-sizing: border-box;
  }

  .table-list .left {
    text-align: left;
    font-weight: bold;
    font-size: 12px;
    width: 50%;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
  }

  .table-list .right {
    text-align: center;
    width: 50%;
    color: #666;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
  }

  .table .table-line {
    width: 0;
    height: 100%;
    border-left: 1px solid #999;
    position: absolute;
    top: 0;
    left: 50%;
    z-index: -1;
  }

  .share-text {
    margin-top: 20px;
    font-family: Didot;
    font-size: 18px;
    color: #666;
    padding-left: 24px;
    box-sizing: border-box;
  }

  .share-box{
    display: flex;
    align-items: center;
  }

  .share-box>div{
    /* display: inline-block; */
    width: 30px;
    height: 30px;
    margin: 20px 0 0 24px;
  }

  .share-box img {
  }

  .other {
    font-size: 24px;
    color: #333;
    text-align: center;
    font-weight: bold;
    margin-top: 80px;
  }

  .swiper-box-two {
    width: 1020px;
    height: 140px;
    margin: 40px auto 100px;
  }

  .swiper-box-two img {
    width: 140px;
    height: 140px;
  }

  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #000;
    opacity: 1;
    background: rgba(0, 0, 0, 0.2);
  }

  .swiper-pagination-bullet-active {
    color: #fff;
    background: #007aff;
  }

  /* 底部推荐商品 */
  .recommend-swiper {
    width: 1020px;
    height: 260px;
    overflow: hidden;
    margin: 40px auto 80px;
  }

  .recommend-swiper .swiper {
    width: 100%;
    height: 180px;
    overflow: inherit;
  }

  .recommend-swiper .swiper-wrapper {
    width: 100%;
    height: 220px;
  }

  .recommend-swiper .swiper-slide {
    height: 140px;
    width: 140px;
  }

  .recommend-swiper .swiper-slide .img-box {
    width: 140px;
    height: 140px;
    margin-bottom: 6px;
  }

  /* 分页器容器 */
  .recommend-swiper .swiper-pagination {
    float: left;
    height: 26px;
    position: inherit;
    margin: 0 20px;
  }

  /* 分页器 */
  .recommend-swiper .swiper-pagination-bullet {
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
  .recommend-swiper .swiper-pagination-bullet-active {
    background-color: #480f33 !important;
  }

  .recommend-swiper .pos {
    width: 100%;
    height: 26px;
    text-align: center;
    font-size: 0;
  }

  .recommend-swiper .pos .inline {
    display: inline-block;
    height: 100%;
  }

  /* 左右按钮 */
  .recommend-swiper .swiper-button-prev,
  .recommend-swiper .swiper-button-next {
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

  .recommend-swiper .iconzuo2,
  .recommend-swiper .iconyou2 {
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

  .recommend-swiper .recommend-name,
  .recommend-swiper .recommend-price {
    font-family: Didot;
    font-size: 14px;
    color: #333;
    line-height: 22px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .recommend-swiper img{
    width: 100%;
    height: 100%;
  }

  .goods-detail{
    margin-top: 100px;
  }
  .goods-detail-tit{
    height: 40px;
    border-bottom: 1px solid #480f33;
    font-size: 18px;
    color: #480f33;
    padding-left: 10px;
    font-weight: bold;
  }
  .goods-detail-box{
    max-width: 1000px;
    margin: 0 auto;
    padding: 100px 0;
    text-align: center;
    overflow: hidden;
  }
  .goods-detail-text{
    text-align: center;
    line-height: 30px;
    font-size: 18px;
    color: #480f33;
    margin-bottom: 30px;
  }
  .goods-detail-box img{
    max-width: 1000px;
  }
  .icon-box span{
    background: none !important;
  }
</style>
