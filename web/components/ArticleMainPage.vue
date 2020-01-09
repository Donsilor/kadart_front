<template>
  <div class="article-wrap clf">
    <div class="article-left fl">
      <div class="article-left-tit">BRAND CULTURE</div>
      <div class="article-left-box">
        <div class="article-left-list" :class="index == 0 ? 'active' : ''" @click="clickMe(0)">Contact Us</div>
      </div>
    </div>
    <div class="article-right fr">
      <div class="article-right-tit">About us</div>
      <div class="article-right-box">
        <div class="article-right-list">
          <div class="article-right-list-title"></div>
          <div class="article-right-list-text">KAD ART is a fashion jewelry company who has three jewelry brands totally. It is integrated with design, marketing, production and sales. We are very familiar with the trend of fashion jewelry. The creativity and vitality of our company is maintained by our advanced management model, effective advertising strategy and international branch office.</div>
        </div>
        
        <div class="article-right-list">
          <div class="article-right-list-title">About  KADART</div>
          <div class="article-right-list-text">KADART, we are a global jewelry manufacture enterprise. It is aiming at hiring domestic and overseas experienced jewelry craftsman to produce high quality jewelry for the world. Our location is in Shenzhen IBC, set up headquarters in Hong Kong. We have 3 branch office and 9 factories. All the precious-stones, semi-gems and fashion jewelry material are sourcing around the world. The high quality jewelry we showed is made by our practiced craftsman. This is our belief, we only produce high quality jewelry.</div>
        </div>
        
        <div class="article-right-list">
          <div class="article-right-list-title">About HENGDELI</div>
          <div class="article-right-list-text">HENGDELI is a luxury jewelry supplier, who focusing on jadeite, nephrite and precious stones. It is concentrating on producing the top class jewelry of Chinese traditional culture.</div>
        </div>
        
        <div class="article-right-list">
          <div class="article-right-list-title">About BBD Co.</div>
          <div class="article-right-list-text">BBD Co. is an international online retailer of jewelry. It is concentrating on selling the diamond jewelry & fashion jewelry made by ourselves. All of our items comply with high quality standards and are greatly appreciated in a variety of different markets throughout the world.</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        index: 0
      }
    },
    methods:{
      clickMe(k){
        this.index = k;
      }
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
