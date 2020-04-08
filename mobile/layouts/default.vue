<template>
  <div class="app-box">
	  <div v-if="0" class="abc" style="width: 100px;height: 100px;background-color: saddlebrown;position: absolute;z-index: 10;left: 100px;top: 100px;"></div>
    <div class="header-bar">
      <header-bar></header-bar>
    </div>

    <nuxt/>

    <div>
      <menu-bar @onLogin="startLogin" @onQuit="quitLogin"></menu-bar>
    </div>

    <div class="login-bar" v-if="ifShowLogin">
      <login :ifLogin="ifLogin"></login>
    </div>
  </div>
</template>

<script>
  import bus from '../assets/js/bus.js'

  export default{
    data(){
      return{
        ifShowLogin: false,
        ifLogin: true
      }
    },
    mounted(){
      document.documentElement.scrollTop = document.body.scrollTop = 0;
      var that = this;

      bus.$on('closeLogin', function(){
        that.ifShowLogin = false;
      })

      bus.$on('onLogin', function(){
        that.ifShowLogin = true;
      })

      var that = this;
      var ifShowM = sessionStorage.getItem('ifShowM');
      var username = localStorage.getItem('bdd_user')
      if(ifShowM == undefined && !that.username){
      	var Timer = setTimeout(function(){
            that.ifShowLogin = true;
      			clearTimeout(Timer);
      			Timer = null;
      			sessionStorage.setItem('ifShowM',true);
      	},15000)
      }
    },
    methods:{
      startLogin(){
        this.ifLogin = true;
        this.ifShowLogin = true;
      },
      quitLogin(e){
        this.ifLogin = false;
        this.ifShowLogin = true;
      }
    }
  }
</script>

<style scoped>
  .app-box{
    padding-top: 5.5rem;
  }

  .header-bar{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 66;
    width: 100%;
    height: 5.5rem;
  }

  .login-bar{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 88;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
