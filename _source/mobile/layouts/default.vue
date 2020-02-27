<template>
  <div class="app-box">
    <div class="header-bar">
      <header-bar></header-bar>
    </div>

    <nuxt/>

    <div>
      <menu-bar @onLogin="startLogin"></menu-bar>
    </div>

    <div class="login-bar" v-if="ifShowLogin">
      <login></login>
    </div>
  </div>
</template>

<script>
  import bus from '../assets/js/bus.js'

  export default{
    data(){
      return{
        ifShowLogin: false
      }
    },
    mounted(){
      var that = this;
      
      bus.$on('closeLogin', function(){
        that.ifShowLogin = false;
      })
      
      bus.$on('onLogin', function(){
        that.ifShowLogin = true;
      })
    },
    methods:{
      startLogin(){
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
