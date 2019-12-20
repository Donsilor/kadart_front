<template>
  <div class="article-wrap clf">
    <div class="article-left fl">
      <div class="article-left-tit">Customer Service</div>
      <div class="article-left-box">
        <div class="article-left-list" :class="index == 0 ? 'active' : ''" @click="clickMe(0)">Contact Us</div>
        <div class="article-left-list" :class="index == 1 ? 'active' : ''"  @click="clickMe(1)">Quality Certification</div>
        <div class="article-left-list" :class="index == 2 ? 'active' : ''"  @click="clickMe(2)">Return and Exchange Policy</div>
        <div class="article-left-list" :class="index == 3 ? 'active' : ''"  @click="clickMe(3)">Repairs and Services</div>
      </div>
    </div>
    <div class="article-right fr">
      <div class="article-right-tit">Contact KAD</div>
      <div class="article-right-box">
        <div class="article-right-list">
          <div class="article-right-list-title">The Diamond Card</div>
          <div class="article-right-list-text">Do you have questions about The Diamond Card? Would you like assistance making a payment on your credit account? Contact Comenity Capital Bank LLC at 1-844-271-2708 (TDD/TYY: 888-819-1918 ) or use their automated service 24 hours a day.</div>
        </div>

        <div class="article-right-list">
          <div class="article-right-list-title">The Diamond Card</div>
          <div class="article-right-list-text">Do you have questions about The Diamond Card? Would you like assistance making a payment on your credit account? Contact Comenity Capital Bank LLC at 1-844-271-2708 (TDD/TYY: 888-819-1918 ) or use their automated service 24 hours a day.</div>
        </div>

        <div class="article-right-list">
          <div class="article-right-list-title">The Diamond Card</div>
          <div class="article-right-list-text">Do you have questions about The Diamond Card? Would you like assistance making a payment on your credit account? Contact Comenity Capital Bank LLC at 1-844-271-2708 (TDD/TYY: 888-819-1918 ) or use their automated service 24 hours a day.</div>
        </div>

        <div class="article-right-list">
          <div class="article-right-list-title">The Diamond Card</div>
          <div class="article-right-list-text">Do you have questions about The Diamond Card? Would you like assistance making a payment on your credit account? Contact Comenity Capital Bank LLC at 1-844-271-2708 (TDD/TYY: 888-819-1918 ) or use their automated service 24 hours a day.</div>

          <div class="article-detail">
            <div class="article-img">
              <img src="../static/index/1.png" alt="">
            </div>
            <div class="article-detail-tit">The Diamond Card</div>
            <div class="article-detail-text">Do you have questions about The Diamond Card? Would you like assistance making a payment on your credit account? Contact Comenity Capital Bank LLC at 1-844-271-2708 (TDD/TYY: 888-819-1918 ) or use their automated service 24 hours a day.</div>
          </div>
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
