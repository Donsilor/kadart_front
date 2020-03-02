<template>
  <div>
    <div class="contact-send">
      <div class="contact-tit">CONTACT US</div>
      <div class="list list-address">
        <i class="icon-left"></i>
        <i class="icon-right"></i>
        <input type="text" v-model="emailName" class="ipt" placeholder="Email address..." @focus="onFocus(1)" @blur="onBlur(1)">
        <div class="hint">Please fill in the correct content</div>
      </div>

      <div class="list list-subject empty">
        <i class="icon-left"></i>
        <i class="icon-right"></i>
        <input type="text" v-model="title" class="ipt" placeholder="Message subject..." @focus="onFocus(2)" @blur="onBlur(2)">
        <div class="hint">Please fill in the correct content</div>
      </div>

      <div class="list list-message">
        <i class="icon-left"></i>
        <i class="icon-right"></i>
        <input type="text" v-model="content" class="ipt" placeholder="Message..." @focus="onFocus(3)" @blur="onBlur(3)">
        <div class="hint">Please fill in the correct content</div>
      </div>

      <div class="send" @click="submit()">SEND EMAIL</div>
    </div>

    <div class="contact-log-box" v-if="1">
      <div class="contact-log-tit">HISTORICAL MESSAGE</div>
      <div class="contact-log" v-for="(item, index) in book_list" :key="index">
        <div class="log-time">12:23</div>
        <div class="message-list message-left">
          <i class="message-icon"></i>
          <i class="message-text">00 0000 00000  000000 00000 00000 000000 00 000 000000 0000 0000 000 0000 0000000 00000000000</i>
        </div>
        <div class="message-list message-right">
          <i class="message-icon"></i>
          <i class="message-text">{{item.content}}</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        username: '',
        page: 1,
        book_list: [],
        emailName: '',
        title: '',
        content: ''
      }
    },
    mounted(){
      var username = localStorage.getItem('bdd_user');
      if(!username){
      }else{
      	this.username = username;
      }
      console.log(this.username)

      this.getUserBook();
    },
    methods:{
      //获取用户信息
      getUserBook() {
        this.$axios.get('/member/book', {
          params: {
            page: this.page,
            username: this.username,
          }

        }).then(res => {
          if (res.data.code == 200) {
            // console.log(res.data)
            // this.book_list.push.apply(this.book_list,res.data.data.list);
            this.book_list = this.book_list.concat(res.data.data.data);
          }
        }).catch(function(error) {
          console.log(error);
        })
      },
      submit() {
        // var email = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;

        // if (email.test(this.emailName) == false) {
        //   this.text = 'E-mail format is incorrect！'
        //   this.isChangeRed3 = true;
        // } else {
        //   this.text = ''
        //   this.isChangeRed3 = false;
        // }

        // if (this.content == '') {
        //   this.isChangeRed2 = true;
        // }
        // if (this.title == '') {
        //   this.isChangeRed1 = true;
        // }

        // if (this.content != '' && this.title != '' && this.ifEdit == true) {
        if (1) {

          this.$axios.post('/member/book/create', {
            username: this.emailName,
            title: this.title,
            content: this.content,
          }).then(res => {
            if (res.data.code == 200) {
              console.log(123123)
              console.log(res.data)
              localStorage.setItem('email_name', this.emailName)

              var bdd_user = localStorage.getItem('bdd_user');
              if (!bdd_user) {
                localStorage.setItem('bdd_user', this.emailName)
              }

              this.username = this.emailName;
              this.book_list = [];
              this.getUserBook();
              this.isShowHint2 = true;

              // console.log(this.isLogin)
              if (this.isLogin) {
                setTimeout(() => {
                  this.ifShowMessage = false;
                  this.isShowHint2 = false;
                }, 2000)
              } else {
                Bus.$emit('onlogin', this.emailName)
                setTimeout(() => {
                  this.ifShowMessage = false;
                  this.ifPopHint = true;
                }, 2000)
                setTimeout(() => {
                  this.isShowHint2 = false;
                  this.ifPopHint = false;
                }, 4000)
              }

            }
          }).catch(function(error) {
            console.log(error);
          })

        }
      },
      onFocus(i){
        console.log(i)
      },
      onBlur(i){
        // while
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
    background-color: rgb(192, 189, 197, 0.21);
    position: relative;
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
    top: 50%;
    left: 4%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
  }
  .contact-send .icon-right{
    width: 1.3rem;
    height: 1.3rem;
    position: absolute;
    top: 50%;
    right: 4%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
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

  .contact-send .ipt{
    width: 60%;
    height: 3.3rem;
    margin: 0.5rem 14%;
    background-color: transparent;
  }

  .contact-send .list .hint{
    position: absolute;
    top: 4.3rem;
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
</style>
