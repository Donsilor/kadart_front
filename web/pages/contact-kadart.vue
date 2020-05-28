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
          <div class="article-left-list">
            <a href="/kadart-jewelry-factory">Production Capacity</a>
          </div>
          <div class="article-left-list active">Contact Us</div>
        </div>
      </div>

      <div class="article-right fr">
        <div class="article-right-tit">Contact Us</div>
        <div class="article-right-box">
          <div class="article-right-list">
            <div class="article-right-list-title">KAD ART Limited (Shenzhen)</div>
            <div class="article-right-list-text">Email: James@kadart.com</div>
            <div class="article-right-list-text">https://www.kadart.com</div>
            <div class="article-right-list-text">Mobile/Tel: +86 18665619485  / +86 0755 25160872</div>
            <div class="article-right-list-text">1306-1307 Block A, IBC Business Jewelry Building,Shenzhen, Guangdong Province, China</div>
          </div>

          <div class="article-right-list">
            <div class="article-right-list-title">KAD ART Limited (HK)</div>
            <div class="article-right-list-text">Tel: +852 2165 3939 </div>
            <div class="article-right-list-text">Unit 4, 23/F, Universal Trade Centre, 3 Arbuthnot Rd, Central, HK</div>
          </div>

          <div class="article-right-list">
            <div class="article-right-list-title">HENGDELI (FS)</div>
            <div class="article-right-list-text">Tel: +86 18665619485 </div>
            <div class="article-right-list-text">Shop p2-16/17/19,2/f,Building D,Huicui Jewelry Plaza,Xinhui Plaza,7 Baili Emerald Avenue,Guicheng,Nanhai District,Foshan</div>
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
        title: 'Contact fine jewelry manufacturer-Kad Art Limited',
        meta: [
          { hid: 'description', name: 'description', content: 'Contact high-quality fine jewelry manufacturer with email, message, or phone call to the get best price for your ODM OEM or private label jewelry. Usually reply within 12 hours on workdays. Quality products, short lead time and excellent service.'},
          { hid: 'keywords', name: 'keywords', content: 'contact kadart, china jewelry factory, chinese jewelry supplier'}
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

<style>
  img {
  	width: 100%;
  	height: 100%;
  }
</style>
