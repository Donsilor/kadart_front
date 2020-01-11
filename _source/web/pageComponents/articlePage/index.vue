<template>
  <div class="article-wrap clf">
    <div class="article-left fl">
      <div class="article-left-tit">BRAND CULTURE</div>
      <div class="article-left-box">
        <div class="article-left-list" :class="index == 1 ? 'active' : ''" @click="clickMe(1)">About Us</div>
        <div class="article-left-list" :class="index == 2 ? 'active' : ''" @click="clickMe(2)">Contact Us</div>
      </div>
    </div>

    <div class="article-right fr">
      <about-us v-if="index == 1"></about-us>
      <contact-us v-else-if="index == 2"></contact-us>
    </div>

  </div>
</template>

<script>
  import AboutUs from './brandCulture/aboutUs.vue'
  import ContactUs from './brandCulture/contactUs.vue'
  export default{
    components:{
      AboutUs,
      ContactUs
    },
    data(){
      return{
        index: 0
      }
    },
    methods:{
      clickMe(k){
        this.index = k;
      }
    },
    mounted(){
      var typeId = localStorage.getItem('article');
      if(typeId) this.index = typeId;
    }
  }
</script>

<style>
  .article-wrap{
    margin-top: 60px;
    min-height: 600px;
  }
  .article-left{
    width: 330px;
    border-top: 8px solid #808080;
  }
  .article-left-tit{
    width: 280px;
    height: 58px;
    margin: 0 auto;
    line-height: 60px;
    border-bottom: 1px solid #808080;
    font-size: 18px;
    color: #333;
  }
  .article-left-box{
    width: 280px;
    margin: 20px auto;
    padding-left: 20px;
    box-sizing: border-box;
  }
  .article-left-list{
    font-size: 14px;
    color: #333;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .article-left-list.active{
    color: #b64d52;
    text-decoration: underline;
  }

  .article-right{
    width: 1030px;
    border-top: 8px solid #808080;
    padding-bottom: 30px;
  }
  .article-right-tit{
    width: 100%;
    height: 74px;
    line-height: 80px;
    border-bottom: 1px solid #808080;
    font-size: 30px;
    color: #000;
    font-weight: bold;
    padding: 0 40px;
    box-sizing: border-box;
  }
  .article-right-box{
    margin-top: 10px;
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;
  }
  .article-right-list{
    margin-bottom: 20px;
    padding-top: 30px;
  }
  .article-right-list:not(:first-child){
    border-top: 1px solid #808080;
  }
  .article-right-list-title{
    font-size: 24px;
    color: #470e30;
    font-weight: bold;
  }
  .article-right-list-text{
    font-size: 14px;
    line-height: 24px;
    color: #666;
    margin-top: 10px;
  }

  .article-detail{
    width: 640px;
    margin: 20px auto;
  }
  .article-img{
    width: 100%;
    height: 200px;
  }
  .article-detail-tit{
    font-size: 18px;
    color: #470e30;
    text-align: center;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: bold;
  }
  .article-detail-text{
    font-size: 14px;
    color: #666;
    padding: 0 20px;
    box-sizing: border-box;
    line-height: 20px;
    margin-top: 6px;
  }
</style>
