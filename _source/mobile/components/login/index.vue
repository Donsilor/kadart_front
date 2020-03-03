<template>
  <div>
    <div class="popup">
      <div class="login" v-if="ifShowLogin">
        <div class="login-top">
          <div class="tit">SIGN IN</div>
          <i class="iconfont iconjian" @click="closeLogin"></i>
        </div>

        <div class="text">Enter Email Address</div>
        <div class="ipt-box">
          <input type="text" class="ipt" :placeholder="placeholder" maxlength="30" v-model="username" @focus="focus()" @blur="blur()" @keyup.enter="login()">
        </div>
        <div class="prompt">{{text}}</div>
        <div class="login-btn" @click="login()">LOGIN</div>
      </div>
    </div>

    <div class="popup" v-if="ifShowSuccess">
      <div class="success">{{hintText}}</div>
    </div>
  </div>
</template>

<script>
  import bus from '../../assets/js/bus.js'

  export default {
    data() {
      return {
        placeholder: 'Email...',
        ipt: '',
        text: '',
        ifShowLogin: true,
        ifShowSuccess: false,
        username: '',
        hintText: 'Login successful !'
      }
    },
    props:['ifLogin'],
    mounted(){
      if(this.ifLogin !== true){
        this.ifShowLogin = false;
        this.ifShowSuccess = true;

        var Timer = setTimeout(function(){
        		bus.$emit('closeLogin', true)
            this.ifShowLogin = true;
            this.ifShowSuccess = false;
        		clearTimeout(Timer);
        		Timer = null;
        },1500)
      }
      this.is_login();

      var that = this;
			var ifShowM = sessionStorage.getItem('ifShowM');
			if(ifShowM == undefined && !that.username){
				var Timer = setTimeout(function(){
						bus.$emit('onLogin', true)
						clearTimeout(Timer);
						Timer = null;
						sessionStorage.setItem('ifShowM',true);
				},15000)
			}

    },
    methods:{
      // 关闭登录弹窗
      closeLogin(){
        bus.$emit('closeLogin', true)
      },
      login(){
        var email = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;

        if(email.test(this.username) == false){
          this.text = 'E-mail format is incorrect'
        }else(
          this.$axios.post('/site/email-login',{
              username : this.username
          }).then(res =>{
              if(res.data.code == 200){
                 localStorage.setItem('bdd_user',this.username);
                 this.ifShowLogin = false;
                 this.ifShowSuccess = true;
                 bus.$emit('addOn', true)
                 bus.$emit('userInfo', true)
                 setTimeout(()=>{
                   this.ifShowSuccess = false;
                   bus.$emit('closeLogin', true)
                 },1500)

               }
          }).catch(function (error) {
              console.log(error);
              bus.$emit('closeLogin', true)
          })
        )
      },
      is_login(){
				var username = localStorage.getItem('bdd_user');
				if(!username){
				}else{
					this.username = username;
				}
      },
      focus(){
        this.text = '';
        this.placeholder = '';
      },
      blur(){
        this.placeholder = 'Email...';
      }
    }
  }
</script>

<style scoped>
  .popup{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 14;
  }
  .login{
    position: fixed;
    top: 46%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    width: 70%;
    /* height: 30rem; */
    background-color: #fff;
    border-radius: 6px;
  }

  .login-top{
    height: 4rem;
    line-height: 4rem;
    border-bottom: 1px solid #eaeaea;
    font-size: 1.6rem;
    color: #480f33;
    font-weight: bold;
    text-align: center;
    position: relative;
  }
  .login-top .iconfont{
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    width: 1.4rem;
    height: 1.4rem;
    background: url(../../static/menu/close.png) no-repeat center;
    background-size: 100% 100%;
  }

  .popup .text{
    width: 84%;
    font-size: 1.4rem;
    color: #333;
    font-weight: bold;
    margin: 2rem auto 0;
  }

  .popup .ipt-box{
    width: 84%;
    height: 2.6rem;
    margin: 2rem auto 0;
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
    width: 84%;
    height: 2.4rem;
    font-size: 14px;
    color: #be1e28;
    font-weight: bold;
    line-height: 2.4rem;
    margin: 0 auto;
  }

  .login-btn{
    width: 84%;
    height: 3rem;
    background-color: #480F32;
    border-radius: 4px;
    margin: 1rem auto 3rem;
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
