<template>
  <div class="background-box" v-if="1">
    <div class="error-text">Sorry, the page can not be found</div>
    <div class="error-type" v-if="0">404</div>
    <div class="error-type" v-else-if="1">500</div>
    <div class="error-operation">You can go <a class="goBack" href="">back</a>  or go to <a class="goHome" href="/">home</a> page</div>
  </div>
</template>

<script>
</script>

<style>
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 14;
  }

  .background-box{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 22;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right ,#dcced7, #fff);
    background-image: -webkit-linear-gradient(to right ,#dcced7, #fff);
    background-image: -moz-linear-gradient(to right ,#dcced7, #fff);
    background-image: -ms-linear-gradient(to right ,#dcced7, #fff);
    background-image: -o-linear-gradient(to right ,#dcced7, #fff);
  }
  .error-text{
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    font-family: AdobeHeitiStd-R;
    font-size: 24px;
    color: #480f33;
  }
  .error-type{
    position: absolute;
    top: 32%;
    left: 48%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    font-family: tw-cen-mt;
    font-size: 300px;
    color: #480f33;
    font-style: italic;
  }
  .error-operation{
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    font-size: 18px;
    color: #480f33;
  }
  .goBack,
  .goHome{
    font-weight: bold;
    text-decoration: underline;
  }
</style>
