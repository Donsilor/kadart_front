<template>
  <div class="footer">
	<div class="footer-top-box">
		<div class="footer-logo">
      <img src="../../static/index/icon/logo-1.png" alt="">
    </div>
		<div class="footer-email">@KADART.COM</div>
		<div class="footer-share">
			<div class="share-icon share-icon-1"></div>
			<div class="share-icon share-icon-2"></div>
			<div class="share-icon share-icon-3"></div>
			<div class="share-icon share-icon-4"></div>
			<div class="share-icon share-icon-5"></div>
		</div>
	</div>
	<div class="footer-bottom-box">
      <a href="/" target="_blank">PRIVACY POLICY </a>
      <div class="footer-bottom-line"></div>
      <a href="/" target="_blank">TERMS AND CONDITIONS</a>
      <div class="footer-bottom-line"></div>
      <a href="/" target="_blank">SITEMAP</a>
	</div>

  </div>
</template>

<script>
  export default{
    data(){
      return{
      }
    },
    mounted(){

    },
    methods:{

    }
  }
</script>

<style scoped>
	.footer-top-box{
		width: 100%;
		height: 13.6rem;
		background-color: #efeff1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
    padding: 2rem 0 1.7rem;
	}

  .footer-logo{
    width: 3.5rem;
    height: 4.1rem;
  }

  .footer-email{
    font-family: DFPYaSong;
    font-size: 1.1rem;
    font-weight: bold;
    color: #480f32;
    text-decoration: underline;
  }

  .footer-share{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 13rem;
    height: 2rem;
  }
  .share-icon{
    width: 2rem;
    height: 2rem;
  }

  .share-icon-1{
    background: url(../../static/index/icon/web-Facebook.png) no-repeat center;
    background-size: 100% 100%;
  }

  .share-icon-2{
    background: url(../../static/index/icon/youtube.png) no-repeat center;
    background-size: 100% 100%;
  }

  .share-icon-3{
    background: url(../../static/index/icon/tuite.png) no-repeat center;
    background-size: 100% 100%;
  }

  .share-icon-4{
    background: url(../../static/index/icon/in.png) no-repeat center;
    background-size: 100% 100%;
  }

  .share-icon-5{
    background: url(../../static/index/icon/pinterest.png) no-repeat center;
    background-size: 100% 100%;
  }

  .footer-bottom-box{
    width: 100%;
    height: 6.3rem;
    background-color: #fff;
    padding: 0 4.8%;
    display: flex;
    align-items: center;justify-content: space-between;
    font-size: 1.1rem;
    color: #480f32;
    font-weight: bold;
  }

  .footer-bottom-line{
    height: 1rem;
    width: 1px;
    background-color: #480f32;
  }


</style>
