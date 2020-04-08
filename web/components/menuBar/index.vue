<template>
  <div class="menu clf">
    <div class="menu-left fl">
      <span class="menu-list fl">0086-186-6561-9485</span>
      <a class="menu-list fl" href="/contact-kadart">Contact Us</a>
    </div>
    <div class="menu-right fr">
      <div id="menu-list" class="menu-list fl user-num" :class="this.usernametwo == '' ? '' : 'default' " @click="ifLogin()" >{{this.usernametwo || 'Sign In'}}</div>
      <div id="log-out" class="menu-list fl log-out" v-show="usernametwo" @click="logOut()">Log out</div>
    </div>

    <div class="popup" v-if="ifShowLogin">
      <div class="login">
        <div class="login-top">
          <div class="tit">SIGN IN</div>
          <i class="iconfont iconjian" @click="ifShowLogin = false"></i>
        </div>

        <div class="text">Enter Email Address</div>
        <div class="ipt-box">
          <input type="text" class="ipt" placeholder="Email..." maxlength="30" v-model="username" @focus="focus()" @keyup.enter="login()">
        </div>
        <div class="prompt">{{text}}</div>
        <div class="login-btn" @click="login()">LOGIN</div>
      </div>
    </div>

    <div class="popup" v-if="ifShowSuccess">
      <div class="success">{{this.hintText}}</div>
    </div>
  </div>
</template>

<script>
  import Bus from '../Bus.js'

  export default{
    data(){
      return{
        ipt: '',
        text: '',
        ifShowLogin: false,
        ifShowSuccess: false,
        username: '',
        usernametwo:'',
        hintText: 'Login successful !'
      }
    },
    mounted(){
      this.is_login();
      var that = this
			Bus.$on('onlogin', function(val){
				that.username = val;
				that.usernametwo = val;
			})

			var ifShowM = sessionStorage.getItem('ifShowM');
			if(ifShowM == undefined && !that.usernametwo){
				var that = this;
				var Timer = setTimeout(function(){
					// if(!that.usernametwo){
						that.ifShowLogin = true;
						clearTimeout(Timer);
						Timer = null;
						sessionStorage.setItem('ifShowM',true);
					// }
				},15000)
			}
    },
    methods:{
      login(){
        var email = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        this.hintText = 'Login successful !';

        if(email.test(this.username) == false){
          this.text = 'E-mail format is incorrect'
        }else(
          this.$axios.post('/site/email-login',{
              username : this.username
          }).then(res =>{
              if(res.data.code == 200){
                 localStorage.setItem('bdd_user',this.username);
                 this.ifShowLogin = false;
                 this.usernametwo = this.username;
                 this.ifShowSuccess = true,
                 setTimeout(()=>{
                   this.ifShowSuccess = false;
                 },1500)

               }
          }).catch(function (error) {
              console.log(error);
              this.ifShowLogin = false;
          })
        )
      },
      is_login(){
				var username = localStorage.getItem('bdd_user');
				if(!username){
				}else{
					this.username = username;
					this.usernametwo = username;
				}
      },
      focus(){
        this.text = ''
      },
      logOut(){
				this.username = '';
        this.usernametwo = '';
        localStorage.removeItem('bdd_user');
        localStorage.removeItem('email_name');
        this.hintText = 'Account logout successful';
        this.ifShowSuccess = true,
        setTimeout(()=>{
          this.ifShowSuccess = false
        },1500)
      },
      ifLogin(){
				console.log(this.usernametwo)
				if(this.usernametwo == ''){
					this.ifShowLogin = true;
				}
      },
      toArticle(i){
        localStorage.setItem('article', i)
        var url = location.pathname;

        if(url.indexOf('article') != -1){
          this.$router.go(0)
        }else{
          this.$router.push({
            path: '/article'
          })
        }
      }
    }
  }
</script>

<style>
  .menu{
    padding: 0 100px;
    box-sizing: border-box;
    border-top: 8px solid #e2eaf0;
  }
  .menu-left,
  .menu-right{
    height: 46px;
    overflow: hidden;
    text-align: center;
  }
  .menu-list{
    font-size: 12px;
    color: #666;
    padding: 0 10px;
    box-sizing: border-box;
    height: 16px;
    line-height: 16px;
    margin-top: 12px;
  }
  .menu-left .menu-list:last-child{
    cursor: pointer;
  }
  .menu-left .menu-list:last-child:hover{
    text-decoration: underline;
    color: #480f33;
  }
  .menu-right .menu-list{
    padding-right: 0;
    cursor: pointer;
  }
	.menu-right .menu-list.default{
		cursor: default;
	}
  .menu-left .menu-list:not(:first-child){
    border-left: 1px solid #ccc;
  }

  .user-num{
    max-width: 128px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

  }
  .log-out{
      color: #480f33;
      text-decoration: underline;
  }

  .popup{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 14;
  }
  .login{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    width: 320px;
    height: 320px;
    background-color: #fff;
    border-radius: 10px;
  }

  .login-top{
    height: 72px;
    line-height: 72px;
    border-bottom: 2px solid #eaeaea;
    font-size: 16px;
    color: #480f33;
    font-weight: bold;
    text-align: center;
    position: relative;
  }
  .login-top .iconfont{
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

  .popup .text{
    font-size: 18px;
    color: #333;
    font-weight: bold;
    margin: 40px 0 0 25px;
  }

  .popup .ipt-box{
    width: 280px;
    height: 32px;
    margin: 34px auto 0;
    border-bottom: 1px solid #999;
  }

  .popup .ipt{
    width: 100%;
    font-size: 16px;
    color: #480F32;
    padding: 0 10px;
    box-sizing: border-box;
  }

  .popup .prompt{
    height: 30px;
    font-size: 14px;
    color: #be1e28;
    font-weight: bold;
    line-height: 30px;
    margin-left: 30px;
  }

  .login-btn{
    width: 292px;
    height: 40px;
    background-color: #480F32;
    border-radius: 6px;
    margin: 28px auto 0;
    font-size: 14px;
    color: #fff;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
  }

  .popup .success{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    height: 60px;
    padding: 0 20px;
    background-color: #fff;
    border-radius: 10px;
    font-size: 16px;
    color: #480f33;
    font-weight: bold;
    text-align: center;
    line-height: 60px;
  }
</style>
