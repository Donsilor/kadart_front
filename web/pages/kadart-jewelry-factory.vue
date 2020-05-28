<template>
  <div class="container">
    <azzd></azzd>

    <div class="article-wrap clf">
      <div class="article-left fl">
        <div class="article-left-tit">BRAND CULTURE</div>
        <div class="article-left-box">
          <div class="article-left-list">
            <a href="/about-kadart">About Us</a>
          </div>
          <div class="article-left-list active">Production Capacity</div>
          <div class="article-left-list">
             <a href="/contact-kadart">Contact Us</a>
          </div>
        </div>
      </div>

      <div class="article-right fr">
        <div class="article-right-tit">Production Capacity</div>
        <div class="article-right-box">
          <div class="article-right-list">
            <!-- <div class="article-right-list-title"></div> -->
            <div class="article-right-list-text">1. Factory Address :No.30，Fuping Road,Xiaoping Industrial Zone,Shatou Street,Panyu District,Guangzhou City,Guangdong Province,China</div>
            <div class="article-right-list-text">Floor Space: 6000 square meters</div>
            <div class="article-right-list-text">Number Of Technicians: 500</div>
            <div class="article-right-list-text">Mobile/Tel: +86 18665619485</div>
            <div class="article-right-list-text">Email: James@kadart.com</div>
          </div>
        </div>
        <div class="article-img-box clf">
          <div class="img-a fl">
            <img src="../static/article/article_01.jpg" alt="">
          </div>
          <div class="img-a fl">
            <img src="../static/article/article_02.jpg" alt="">
          </div>
          <div class="img-a fl">
            <img src="../static/article/article_03.jpg" alt="">
          </div>
          <div class="img-a fl">
            <img src="../static/article/article_04.jpg" alt="">
          </div>
          <!-- <div class="img-b fl">
            <img src="../static/article/article_11.jpg" alt="">
          </div>
          <div class="img-b fl">
            <img src="../static/article/article_12.jpg" alt="">
          </div> -->
        </div>
        <div class="article-right-box">
          <div class="article-right-list">
            <!-- <div class="article-right-list-title"></div> -->
            <div class="article-right-list-text">2.Factory Address : 2nd Floor, Factory Building, No. 10, Lijun Road, Xili Industrial Zone, Shatou Street, Panyu District, Guangzhou</div>
            <div class="article-right-list-text">Floor Space: 4000 square meters</div>
            <div class="article-right-list-text">Number Of Technicians: 380</div>
            <div class="article-right-list-text">Mobile/Tel: +86 18665619485</div>
            <div class="article-right-list-text">Email: James@kadart.com</div>
          </div>
        </div>
        <div class="article-img-box clf">
          <div class="img-c fl">
            <img src="../static/article/article_21.jpg" alt="">
          </div>
          <div class="img-c fl">
            <img src="../static/article/article_22.jpg" alt="">
          </div>
          <div class="img-c fl">
            <img src="../static/article/article_23.jpg" alt="">
          </div>
          <div class="img-c fl">
            <img src="../static/article/article_24.jpg" alt="">
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import azzd from '~/components/azzd/index.vue'

export default {
  async asyncData({ app }) {
    var head_r = {
        title: 'High-Quality Diamond 14K 18k Gold 925 Sterling Silver Jewelry Factory',
        meta: [
          { hid: 'description', name: 'description', content: 'Kad Art Jewelry own 9 jewelry factory, 20 designers, 1200 technicians. We are specializing in fine exquisite jewellery design and manufacture of diamond, 10K 14K 18K gold, 925 silver, and copper.'},
          { hid: 'keywords', name: 'keywords', content: 'Fine jewelry factory, jewelry manufacturer, gemstone jewelry supplier'}
        ]
    }
    app.head.title = head_r.title;
    app.head.meta = head_r.meta;
  },
  components: {
    azzd
  },
  mounted(){
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }
}
</script>

<style scoped>
  img {
  	width: 100%;
  	height: 100%;
  }

  .article-img-box{
    width: 950px;
    margin: 0 auto;
    font-size: 0;
  }

  .article-img-box .img-a,
  .article-img-box .img-b,
  .article-img-box .img-c{
    width: 453px;
    margin-bottom: 30px;
  }

  .article-img-box .img-b{
    margin-bottom: -10px;
  }

  .article-img-box .img-a:nth-child(even),
  .article-img-box .img-b:last-child,
  .article-img-box .img-c:nth-child(even){
    margin-left: 44px;
  }

  .article-img-box .img-c:nth-child(2){
    margin-bottom: 32px;
  }

  .article-img-box .img-b{
    margin-top: -10px;
  }

  .article-right-list-text:first-child{
    margin-top: 0;
  }

</style>
