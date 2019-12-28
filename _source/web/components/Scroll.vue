<template>
  <div>
    <div v-if="btnFlag" class="to-top go-top" src="url" @click="backTop">
      <i class="iconfont iconhuidaodingbu"></i>
    </div>

    <div class="message" @click="ifShowMessage = true">
      <i class="iconfont iconxinfeng"></i>
    </div>

    <div class="popup" v-if="ifShowMessage">
      <!-- 判断账号是否登录 -->

      <div class="leave-message-two" v-if="isLogin">
        <div class="message-top">
          <div class="tit clf">
            <div class="account fl" :class="ifEdit == false ? 'active' : ''">
              <span v-show="ifEdit">{{username}}</span>
              <input v-show="ifEdit == false" id="ipt" class="account-ipt" type="text" v-model="username" @focus="editFocus()" @blur="editBlur()" >
            </div>
            <i class="iconfont iconbianji fl" @click="edit()"></i>
          </div>
          <div class="not-empty" v-if="isShowHint1">{{hint1}}</div>
          <i class="iconfont iconjian" @click="ifShowMessage = false"></i>
        </div>

        <div class="message-box">
          <div class="respond" v-if="isShowHint2">{{hint2}}</div>

          <div class="message-list" v-for="(item, index) in book_list" :key="index">
            <div class="message-list-tbox clf">
              <div class="num fl">{{item.email}}</div>
              <div class="time fl">{{item.created_at}}</div>
            </div>
            <div class="message-list-text">
              <span class="bold"># {{item.title}} #</span> {{item.content}}
            </div>
          </div>
        </div>

        <div class="message-footer clf">
          <div class="message-footer-left fl">
            <div class="Subject-box">
              <input type="text" class="ipt" :class="isChangeRed1 ? 'isRed' : ''" :placeholder="placeholder4" v-model="title" maxlength="24" @focus="focusIpt4()"
                @blur="blurIpt4()">
            </div>
            <div>
              <textarea class="Subject-textarea" :class="isChangeRed2 ? 'isRed' : ''" :placeholder="placeholder5" v-model="content" @focus="focusIpt5()" @blur="blurIpt5()"></textarea>
            </div>
          </div>
          <div class="message-send fl" :class="title != '' && content != '' && ifEdit == true ? 'active' : '' " @click="submit()">
            <i class="iconfont iconfasong"></i>
          </div>
        </div>
      </div>

    <div class="leave-message" v-else>
        <div class="message-top">
          <div class="tit">
            <span class="message-top-tit">CONTACT US</span>
            </div>
          <i class="iconfont iconjian" @click="closePopup()"></i>
        </div>
        <div class="ipt-box">
          <input type="text" class="ipt"  :class="isChangeRed1 ? 'isRed' : ''"  :placeholder="placeholder1" v-model="title" maxlength="28" @focus="focusIpt1()"
            @blur="blurIpt1()">
        </div>
        <div class="textarea-box">
          <textarea class="textarea"  :class="isChangeRed2 ? 'isRed' : ''"  :placeholder="placeholder2" @focus="focusIpt2()" @blur="blurIpt2()" v-model="content"></textarea>
        </div>
        <div class="text">*Email Address</div>
        <div class="ipt-box">
          <input type="text" class="ipt" :class="isChangeRed3 ? 'isRed' : ''" :placeholder="placeholder3" v-model="username" maxlength="30" @focus="focusIpt3()"
            @blur="blurIpt3()">
        </div>
        <div class="prompt">{{text}}</div>
        <div class="message-btn" @click="submit()">LOGIN</div>
      </div>

    </div>

    <div class="popup" v-if="ifShowHint">
      <div class="success">received! We will reply you though email.</div>
    </div>

  </div>
</template>

<script>
  import Bus from './Bus.js'

  export default {
    data() {
      return {
        btnFlag: false,
        ifShowMessage: false,
        text: '',
        account: '',
        ifEdit: true,
        placeholder1: 'Message Subject...',
        placeholder2: 'Message...',
        placeholder3: 'Email...',
        placeholder4: 'Subject...',
        placeholder5: 'Message Subject...',
        isShowHint1: false,
        isShowHint2: false,
        hint1: 'E-mail format is incorrect！',
        hint2: 'received! We will reply you though email.',
        isChangeRed1: false,
        isChangeRed2: false,
        isChangeRed3: false,
        isLogin:false,
        username:'',
        title:'',
        content:'',
        page:1,
        book_list: [],
        ifShowHint: false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.scrollToTop);
      this.is_login();
      this.getUserBook();
    },
    destroyed() {
      window.removeEventListener('scroll', this.scrollToTop)
    },
    created(){
      var self = this;
      Bus.$on('send', function(val){
        self.ifShowMessage = val;
      })
    },

    methods: {
      // 点击图片回到顶部方法，加计时器是为了过渡顺滑
      backTop() {
        const that = this
        let timer = setInterval(() => {
          let ispeed = Math.floor(-that.scrollTop / 5)
          document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
          if (that.scrollTop === 0) {
            clearInterval(timer)
          }
        }, 16)
      },

      // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
      scrollToTop() {
        const that = this
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        that.scrollTop = scrollTop
        if (that.scrollTop > 60) {
          that.btnFlag = true
        } else {
          that.btnFlag = false
        }
      },
      edit() {
        this.username = '';
        var ipt = document.getElementById('ipt');
        if(this.ifEdit == true){
          this.ifEdit = false;
          setTimeout(function() {
            var ipt = document.getElementById('ipt').focus();
          }, 100)
        }else{

        }

      },
      editFocus() {
        this.hint1 = '';
        this.isShowHint1 = false;
      },
      editBlur(){
        if(this.username == ''){
          this.hint1 = 'E-mail format is incorrect！';
          this.isShowHint1 = true;
          setTimeout(() => {
            this.hint1 = '';
            this.isShowHint1 = false;
            var ipt = document.getElementById('ipt').focus();
          }, 1200)
        }else{
          var email = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;

          if (email.test(this.username) == false) {
            this.hint1 = 'E-mail format is incorrect！';
            this.isShowHint1 = true;
          }else{
            this.ifEdit = true;
            this.username = this.username;
            this.book_list = [];
            this.getUserBook();
          }
        }
      },
      focusIpt1() {
        this.placeholder1 = ''
      },
      blurIpt1() {
        this.placeholder1 = 'Message Subject...'
      },
      focusIpt2() {
        this.placeholder2 = ''
      },
      blurIpt2() {
        this.placeholder2 = 'Message...'
      },
      focusIpt3() {
        this.placeholder3 = '';
        this.text = ''
      },
      blurIpt3() {
        this.placeholder3 = 'Email...';
      },
      focusIpt4() {
        this.placeholder4 = '';
        this.isChangeRed1 = false;
      },
      blurIpt4() {
        this.placeholder4 = 'Subject...'
      },
      focusIpt5() {
        this.placeholder5 = '';
        this.isChangeRed2 = false;
      },
      blurIpt5() {
        this.placeholder5 = 'Message Subject...'
      },
      send() {
      },
      submit() {
        var email = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;

        if (email.test(this.username) == false) {
          this.text = 'E-mail format is incorrect！'
          this.isChangeRed3 = true;
        }else{
          this.text = ''
          this.isChangeRed3 = false;
        }

        if(this.content == ''){
          this.isChangeRed2 = true;
        }
        if(this.title == ''){
          this.isChangeRed1 = true;
        }

        if(this.content != '' && this.title != '' && this.ifEdit == true){

          this.$axios.post('/member/book/create',{
              username : this.username,
              title : this.title,
              content : this.content,
          }).then(res =>{
              if(res.data.code == 200){
                  localStorage.setItem('bdd_user',this.username);
                  this.book_list = [];
                  this.getUserBook();
                  this.isShowHint2 = true;
                  this.ifShowMessage = false;

                  if(this.isLogin){
                    this.ifShowHint2 = true;
                  }else{
                    this.ifShowHint = false;
                  }
                  setTimeout(() => {
                    // this.isShowHint2 = false;
                    // this.content == '';
                    // this.title == '';
                    this.ifShowHint = false;
                    this.$router.go(0);
                  }, 2000)
               }
          }).catch(function (error) {
              console.log(error);
          })


        }
      },
      closePopup(){
        this.ifShowMessage = false;
      },

      is_login(){
        var username = localStorage.getItem('bdd_user');
        if(username != null){
          this.username = username;
          this.isLogin = true;
        }else{
          this.isLogin = false;
        }
      },

      //获取用户信息
      getUserBook(){
          this.$axios.get('/member/book',{
             params:{
              page:this.page,
              username : this.username,
             }

          }).then(res =>{
              if(res.data.code == 200){
                // this.book_list.push.apply(this.book_list,res.data.data.list);
                this.book_list = this.book_list.concat(res.data.data.data)
              }
          }).catch(function (error) {
              console.log(error);
          })
      }


    },
    props:['ifShowM'],
    watch:{
      ifShowM:function(val){
        this.ifShowMessage = true;
      }
    }
  }
</script>

<style>
  .to-top {
    position: fixed;
    top: 55%;
    transform: translateY(-50%);
    right: 30px;
    z-index: 10;
    width: 50px;
    height: 50px;
    background-color: #a096b4;
    box-shadow: 4px 4px 0px 0px rgba(214, 180, 177, 0.5);
    border-radius: 6px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
  }

  .to-top .iconfont {
    color: #fff;
    font-size: 26px;
  }

  .message {
    position: fixed;
    top: 45%;
    transform: translateY(-50%);
    right: 30px;
    z-index: 10;
    width: 50px;
    height: 50px;
    background-color: #480f33;
    box-shadow: 4px 4px 0px 0px rgba(214, 180, 177, 0.5);
    border-radius: 6px;
    text-align: center;
    line-height: 50px;
    cursor: pointer;
  }

  .message .iconfont {
    font-size: 26px;
    color: #fff;
  }

  .popup {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 110;
  }

  .leave-message,
  .leave-message-two {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    width: 320px;
    height: 480px;
    background-color: #fff;
    border-radius: 10px;
  }

  .message-top {
    height: 72px;;
    border-bottom: 2px solid #e0e0e0;
    font-size: 16px;
    color: #480f33;
    font-weight: bold;
    text-align: center;
    position: relative;
  }

  .message-top .iconjian {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    cursor: pointer;
  }

  .message-top .message-top-tit{
    height: 72px;
    font-size: 16px;
    color: #480f33;
    font-weight: bold;
    line-height: 66px;
  }

  .leave-message .text {
    font-size: 18px;
    color: #333;
    font-weight: bold;
    margin: 0 0 0 25px;
  }

  .leave-message .ipt-box {
    width: 280px;
    height: 44px;
    margin: 0 auto;
    border-bottom: 1px solid #999;
  }

  .leave-message .ipt,
  .leave-message-two .ipt {
    font-size: 16px;
    color: #480F32;
    padding: 0 10px;
    width: 100%;
    height: 40px;
    box-sizing: border-box;
  }

  .leave-message-two .ipt {
    margin-top: 4px;
    background-color: transparent;
  }

  .leave-message .textarea-box {
    width: 281px;
    height: 130px;
    border: 1px solid #999;
    border-radius: 6px;
    margin: 30px auto 25px;
  }

  .leave-message .textarea {
    width: 100%;
    min-height: 98%;
    border-radius: 6px;
    resize: none;
    padding: 6px 10px;
    box-sizing: border-box;
  }

  textarea::-webkit-input-placeholder {
    color: #999;
    font-style: italic;
  }
  textarea:-moz-placeholder {
      color: #999;
      font-style: italic;
  }
  textarea::-moz-placeholder {
      color: #999;
      font-style: italic;
  }
  textarea:-ms-input-placeholder {
      color: #999;
      font-style: italic;
  }

  textarea.isRed::-webkit-input-placeholder {
    color: #f00;
  }
  textarea.isRed:-moz-placeholder {
      color: #f00;
  }
  textarea.isRed::-moz-placeholder {
      color: #f00;
  }
  textarea.isRed:-ms-input-placeholder {
      color: #f00;
  }

  input::-webkit-input-placeholder {
    color: #999;
    font-style: italic;
  }
  input:-moz-placeholder {
      color: #999;
      font-style: italic;
  }
  input::-moz-placeholder {
      color: #999;
      font-style: italic;
  }
  input:-ms-input-placeholder {
      color: #999;
      font-style: italic;
  }

  input.isRed::-webkit-input-placeholder {
    color: #f00;
  }
  input.isRed:-moz-placeholder {
      color: #f00;
  }
  input.isRed::-moz-placeholder {
      color: #f00;
  }
  input.isRed:-ms-input-placeholder {
      color: #f00;
  }

  .leave-message .prompt {
    height: 30px;
    font-size: 14px;
    color: #be1e28;
    font-weight: bold;
    line-height: 30px;
    margin-left: 30px;
  }

  .leave-message .message-btn {
    width: 292px;
    height: 40px;
    background-color: #480F32;
    border-radius: 6px;
    margin: 22px auto 0;
    font-size: 14px;
    color: #fff;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
  }


  .leave-message-two .message-box {
    width: 100%;
    height: 278px;
    background-color: #f5f5f5;
    overflow: auto;
    border-bottom: 2px solid #e0e0e0;
    padding: 0 20px 20px;
    box-sizing: border-box;
    position: relative;
  }

  .respond{
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    height: 26px;
    background-color: #96a4b4;
    font-size: 12px;
    color: #fff;
    text-align: center;
    line-height: 26px;
  }

  .leave-message-two .message-footer {
    width: 280px;
    margin: 0 auto;
  }

  .leave-message-two .message-footer-left {
    width: 220px;
  }

  .Subject-box {
    width: 100%;
    height: 44px;
    border-bottom: 1px solid #999;
  }

  .Subject-textarea {
    width: 100%;
    height: 68px;
    resize: none;
    padding: 10px;
    box-sizing: border-box;
    overflow:-Scroll;
    overflow-y:hidden
  }

  .message-send {
    width: 40px;
    margin-left: 20px;
    padding-top: 30px;
    box-sizing: border-box;
  }

  .message-send .iconfont {
    font-size: 50px;
    color: #d2d2d2;
    cursor: pointer;
  }

  .message-send.active .iconfont{
    color: #480f33;
  }

  .account {
    width: 142px;
    height: 30px;
    line-height: 30px;
    margin: 10px 0 0 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .account.active{
    border-bottom: 1px solid #480F33;
  }

  .iconbianji {
    height: 20px;
    margin: 20px 0 0 10px;
    cursor: pointer;
    color: #a38498;
    font-size: 12px !important;
  }

  .not-empty{
    text-align: left;
    font-size: 12px;
    color: #be1e28;
    font-style: italic;
    margin-left: 40px;
  }

  .account-ipt {
    font-size: 16px;
    color: #480f33;
  }

  .message-list {
    margin-top: 30px;
  }

  .message-list-tbox .num {
    font-size: 14px;
    color: #000;
    width: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: bold;
  }

  .message-list-tbox .time {
    font-size: 14px;
    color: #000;
    margin-left: 10px;
  }

  .message-list-text {
    width: 220px;
    max-height: 68px;
    margin: 6px 0 0 20px;
    padding: 10px;
    text-align: justify;
    word-break: break-all;
    box-sizing: border-box;
    background-color: #f5f5f5;
    box-shadow: 4px 4px 0px 0px rgba(214, 180, 177, 0.5);
    border-radius: 10px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }

  .message-list-text .bold {
    font-weight: bold;
  }

</style>
