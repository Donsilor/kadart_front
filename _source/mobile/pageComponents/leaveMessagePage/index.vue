<template>
  <div>
    <div class="home_cid">
      <div v-if="this.banners && this.banners != 0" v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="banner in banners">
            <a :href='banner.adv_url || "javascript:;"' target="_blank">
              <img :src="banner.adv_image" class="no-stretch">
            </a>
            <!-- <img :src="banner" alt=""> -->
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
      </div>
    </div>

    <div class="contact-send">
      <div class="contact-tit">CONTACT US</div>
      <div class="list list-address" :class="isShowHint_a == true ? 'empty' : ''">
        <i class="icon-left"></i>
        <i class="icon-right" @click="edit(1)"></i>
        <input type="text" v-model="emailName" class="ipt" :placeholder="placeholder_a" @focus="onFocus(1)" @blur="onBlur(1)" ref="ipt_a">
        <div class="hint">Please fill in the correct content</div>
      </div>

      <div class="list list-subject" :class="isShowHint_b== true ? 'empty' : ''">
        <i class="icon-left"></i>
        <i class="icon-right" @click="edit(2)"></i>
        <input type="text" v-model="title" class="ipt" :placeholder="placeholder_b" @focus="onFocus(2)" @blur="onBlur(2)" ref="ipt_b">
        <div class="hint">Please fill in the correct content</div>
      </div>

      <div class="list list-message" :class="isShowHint_c == true ? 'empty' : ''">
        <i class="icon-left"></i>
        <i class="icon-right" @click="edit(3)"></i>
        <textarea type="text" v-model="content" class="textarea" :placeholder="placeholder_c" @focus="onFocus(3)" @blur="onBlur(3)" ref="ipt_c"></textarea>
        <div class="hint">Please fill in the correct content</div>
      </div>

      <div class="send" @click="submit()">SEND EMAIL</div>
    </div>

    <div class="contact-log-box" v-if="username != '' && book_list.length != 0">
      <div class="contact-log-tit">HISTORICAL MESSAGE</div>
      <div class="contact-log">
        <!-- <div class="message-list message-left">
          <i class="message-icon"></i>
          <i class="message-text">00 0000 011110000  000000 00000 00000 000000 00 000 000000 0000 0000 000 0000 0000000 00000000000</i>
        </div> -->
        <!-- <div class="log-time">12:23</div> -->
        <div class="message-list message-right" v-for="(item, index) in book_list" :key="index">
          <i class="message-icon"></i>
          <i class="message-text">{{item.content}}</i>
        </div>
      </div>
    </div>

    <div class="leave-message-pop" v-if="ifShowHint">
      <div class="leave-pop-info">received! We will reply you though email.</div>
    </div>
  </div>
</template>

<script>
  import bus from '../../assets/js/bus.js'
  export default{
    data(){
      return{
        banners: [
          // {
            // adv_url: '',
            // adv_image: require('../../static/index/01_05.jpg')
          // }
        ],
        username: '',
        page: 1,
        book_list: [],
        emailName: '',
        title: '',
        content: '',
        placeholder_a: 'Email address...',
        placeholder_b: 'Message subject...',
        placeholder_c: 'Message...',
        isShowHint_a: false,
        isShowHint_b: false,
        isShowHint_c: false,
        ifEdit: false,

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
        ifShowHint: false
      }
    },
    mounted(){
      var that = this;

      // 顶部轮播图
      this.$axios.get('/common/advert-images', {
        params: {
          'acdv_id': 14,
        }
      }).then(res => {
        that.banners = res.data.data;
        if(that.banners.length == 1){
          that.swiperOption.autoplay = false;
        }
      }).catch(function(error) {
        console.log(error);
      });

      this.getUserBook();

      bus.$on('userInfo', function(){
        that.book_list = [];
        that.getUserBook();
      })

      bus.$on('closeUserInfo', function(){
        that.book_list = [];
        that.getUserBook();
      })
    },
    methods:{
      //获取用户信息
      getUserBook() {
        var that = this;

        var username = localStorage.getItem('bdd_user');
        var emailName = localStorage.getItem('email_name');

        if(!username){
          if(!emailName){
            // 未发送任何消息
            this.username = '';
            this.emailName = '';
          }else{
            // 未登录已发送消息
            this.username = emailName;
            this.emailName = emailName;
            localStorage.setItem('bdd_user', this.username)
            bus.$emit('addOn', true)
          }
        }else{
          if(!emailName){
            this.username = username;
            this.emailName = username;
          }else{
            this.username = emailName;
            this.emailName = emailName;
          }
        }

        this.$axios.get('/member/book', {
          params: {
            page: that.page,
            username: that.username,
          }

        }).then(res => {
          if (res.data.code == 200) {
            that.book_list = that.book_list.concat(res.data.data.data);
            // localStorage.removeItem('email_name');
            that.content = '';
            that.title = '';
          }
        }).catch(function(error) {
          console.log(error);
        })
      },
      submit() {
        if (this.content != '' && this.title != '' && this.ifEdit == true) {
          this.$axios.post('/member/book/create', {
            username: this.emailName,
            title: this.title,
            content: this.content,
          }).then(res => {
            if (res.data.code == 200) {

              var username = localStorage.getItem('bdd_user');
              if(username == null){

              }

              localStorage.setItem('email_name', this.emailName)

              this.book_list = [];
              this.getUserBook();

              this.ifShowHint = true;
              setTimeout(()=>{
                this.ifShowHint = false;
              },1500)

            }
          }).catch(function(error) {
            console.log(error);
          })

        }else{
          if(this.content == ''){
            this.isShowHint_c = true;
          }

          if(this.title == ''){
            this.isShowHint_b = true;
          }

          var email = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;

          if (email.test(this.emailName) == false) {
            this.isShowHint_a = true;
          }
        }
      },
      onFocus(i){
        switch (i){
          case 1: this.placeholder_a = '';
                  this.isShowHint_a = false;
            break;
          case 2: this.placeholder_b = '';
                  this.isShowHint_b = false;
            break;
          case 3: this.placeholder_c = '';
                  this.isShowHint_c = false;
            break;
        }
      },
      onBlur(i){
        if(i ==1){
          this.placeholder_a = 'Email address...';
          var email = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;

          if (email.test(this.emailName) == false) {
            this.isShowHint_a = true;
          }
        }else if(i == 2){
          this.placeholder_b = 'Message subject...';

          if(this.title == ''){
            this.isShowHint_b = true;
          }
        }else if(i == 3){
          this.placeholder_c = 'Message...';

          if(this.content == ''){
            this.isShowHint_c = true;
          }
        }

        if(this.isShowHint_a == false && this.isShowHint_b == false && this.isShowHint_c == false){
          this.ifEdit = true;
        }
      },
      edit(k) {
        switch (k){
          case 1: this.$refs.ipt_a.focus();
                  this.emailName = '';
            break;
          case 2: this.$refs.ipt_b.focus();
                   this.title = '';
            break;
          case 3: this.$refs.ipt_c.focus();
                  this.content = '';
            break;
        }
      }
    },
  }
</script>

<style scoped>
  .contact-send{
    width: 85%;
    margin: 4rem auto;
  }

  .contact-tit{
    font-family: DFPYaSong;
    font-size: 1.85rem;
    color: #480f32;
    letter-spacing: -1px;
    text-align: center;
  }

  .contact-send .list{
    width: 100%;
    height: 4.3rem;
    background-color: rgba(192, 189, 197, 0.21);
    position: relative;
    box-sizing: border-box;
    border: 1px solid transparent;
    font-family: STKAITI;
    font-size: 1.5rem;
    color: #000;
  }
  .contact-send .list:not(:first-child){
    margin-top: 2.7rem;
  }
  .contact-send .list.empty{
    border-bottom: 1px solid #b80b0b;
  }

  .contact-send .icon-left{
    width: 1.6rem;
    height: 1.6rem;
    position: absolute;
    top: 1.35rem;
    left: 4%;
  }
  .contact-send .icon-right{
    width: 1.3rem;
    height: 1.3rem;
    position: absolute;
    top: 1.35rem;
    right: 4%;
    background: url(../../static/send-message/message-icon-4.png) no-repeat center;
    background-size: 100% 100%;
  }
  .list-address .icon-left{
    background: url(../../static/send-message/message-icon-1.png) no-repeat center;
    background-size: 100% 100%;
  }
  .list-subject .icon-left{
    background: url(../../static/send-message/message-icon-2.png) no-repeat center;
    background-size: 100% 100%;
  }
  .list-message .icon-left{
    background: url(../../static/send-message/message-icon-3.png) no-repeat center;
    background-size: 100% 100%;
  }

  .contact-send .list.list-message{
    height: 12rem;
  }
  .contact-send .list.list-message .textarea{
    width: 76%;
    border: 1px solid rgba(72, 15, 50, 0.3);
    margin: 1rem 12%;
    background-color: transparent;
    line-height: 2rem;
    padding: 0 0.8rem;
    height: 10rem;
  }

  .list-message .icon-right{
    top: inherit;
    bottom: 1rem;
  }

  .contact-send .ipt{
    width: 60%;
    height: 3.3rem;
    margin: 0.5rem 14%;
    background-color: transparent;
  }

  .contact-send .list .hint{
    position: absolute;
    top: calc(100% + 0.3rem);
    left: 0;
    width: 100%;
    height: 2.4rem;
    padding-left: 13%;
    line-height: 2.4rem;
    font-family: STKAITI;
    font-size: 1.1rem;
    color: #b80b0b;
    display: none;
  }
  .contact-send .list.empty .hint{
    display: block;
  }

  .contact-send .send{
    width: 100%;
    height: 3.25rem;
    background-color: #480f32;
    margin-top: 4rem;
    font-family: DFPYaSong;
    font-size: 1.45rem;
    color: #fff;
    text-align: center;
    line-height: 3.25rem;
  }

  .contact-log-box{
    width: 90%;
    margin: 1rem auto;
  }
  .contact-log-tit{
    font-family: DFPYaSong;
    font-size: 1.55rem;
    color: #480f32;
    text-align: center;
  }
  .contact-log{
    width: 100%;
    /* height: 15rem; */
    background-color: rgba(237, 237, 237, 0.87);
    margin: 1.5rem 0 3rem;
    padding: 1.6rem 6%;
  }

  .log-time{
    font-family: STKAITI;
    font-size: 1.1rem;
    color: #c3c2c2;
    text-align: center;
  }

  .message-list{
    width: 100%;
    min-height: 2.1rem;
    display: flex;
    margin-top: 1.3rem;
  }

  .message-right{
    flex-direction: row-reverse;
  }

  .message-icon{
    width: 1.4rem;
    height: 1.4rem;
    margin-top: 0.35rem;
  }
  .message-left .message-icon{
    background: url(../../static/send-message/message-icon-5.png) no-repeat center;
    background-size: 100% 100%;
    margin-right: 1rem;
  }
  .message-right .message-icon{
    background: url(../../static/send-message/message-icon-6.png) no-repeat center;
    background-size: 100% 100%;
    margin-left: 1rem;
  }

  .message-text{
    font-family: STKAITI;
    font-size: 1.1rem;
    color: #fff;
    font-weight: bold;
    line-height: 2.1rem;
    min-height: 2.1rem;
    padding: 0 1rem;
    background-color: rgba(182, 181, 181, 0.87);
    max-width: calc(100% - 6.8rem);
  }

  .leave-message-pop{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 67;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .leave-pop-info{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    min-width: 64%;
    padding: 0 1rem;
    height: 5.5rem;
    background-color: #790e50;
    border-radius: 4px;
    font-family: STKAITI;
    font-size: 1.55rem;
    color: #fff;
    font-weight: bold;
    text-align: center;
    line-height: 5.5rem;
    letter-spacing: 1px;
    white-space: nowrap;
  }
  @media screen and (max-width: 350px) {
      .popup .success {
          font-size: 1.2rem;
      }
  }

  .home_cid{
    width: 100%;
    /* height: 9.2rem; */
  }

  .home_cid .swiper-container{
    width: 100%;
    height: 9.6rem;
  }

  .home_cid .swiper-wrapper{
    width: 100%;
    height: 9.2rem;
  }

  .home_cid .swiper-slide{
    width: 100%;
    height: 7.4rem;
    position: relative;
    overflow: hidden;
  }

  .swiper-slide img{
    width: 100%;
    height: 100%;
  }

  /* 分页器容器 */
  .home_cid /deep/ .swiper-pagination {
    position: inherit;
    margin-top: 0.3rem;
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
</style>
