<template>
  <div class="header flex-splice">
    <div class="icon-left"></div>
    <div class="icon-right clf">
      <div class="icon-right-1 fl" @click="onSearch()"></div>
      <div class="icon-right-2 fl"></div>
    </div>
    <div class="logo-box">
      <img src="../../static/index/icon/logo-1.png" alt="">
    </div>
  </div>
</template>

<script>
  import Bus from '../../assets/js/bus.js'
  export default {
    data() {
      return {

      }
    },
    methods: {
      onSearch(){
        Bus.$emit('onSearch', true)
      }
    }
  }
</script>

<style scoped>
  .header {
    position: relative;
    width: 100%;
    height: 5.5rem;
    padding-top: 0.525rem;
  }

  .icon-left{
    position: absolute;
    left: 4.8%;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    width: 2.1rem;
    height: 2.1rem;
    background: url(../../static/index/icon/icon-1.png) no-repeat center;
    background-size: 100% 100%;
  }

  .icon-right{
    position: absolute;
    right: 4.8%;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    height: 2.1rem;
  }

  .icon-right-1{
    width: 2.1rem;
    height: 2.1rem;
    background: url(../../static/index/icon/icon-2.png) no-repeat center;
    background-size: 100% 100%;
  }

  .icon-right-2{
    width: 2.1rem;
    height: 2.1rem;
    margin-left: 1.5rem;
    background: url(../../static/index/icon/icon-3.png) no-repeat center;
    background-size: 110% 110%;
  }


  .logo-box{
    width: 2.9rem;
    height: 3.4rem;
    margin: 0 auto;
  }
</style>
