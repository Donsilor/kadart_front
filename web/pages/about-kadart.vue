<template>
  <div class="container">
    <azzd></azzd>

    <div class="article-wrap clf">
      <div class="article-left fl">
        <div class="article-left-tit">BRAND CULTURE</div>
        <div class="article-left-box">
          <div class="article-left-list active">About Us</div>
          <div class="article-left-list">
            <a href="/kadart-jewelry-factory">Production Capacity</a>
          </div>
          <div class="article-left-list">
             <a href="/contact-kadart">Contact Us</a>
          </div>
        </div>
      </div>

      <div class="article-right fr">
        <div class="article-right-tit">About Us</div>
        <div class="article-right-box">
          <div class="article-right-list">
            <div class="article-right-list-title">Who is KAD ART?</div>
            <div class="article-right-list-text">KAD ART, a premier jewelry manufacturer and wholesaler worldwide. We are specializing in high quality and fine exquisite pieces with aesthetical design. </div>
            <div class="article-right-list-text">We carry a wide selection including diamond, jade and silver，featuring a modern and elegant design. Meanwhile, we provide domestic and oversea manufacturing service with profession.</div>
          </div>

          <div class="article-right-list">
            <div class="article-right-list-title">Why Us?</div>
            <div class="article-right-list-text">We own 3 branch offices and 9 factories with 1200 technicians;</div>
            <div class="article-right-list-text">More than 50,000 square meters of self-owned production workshop, including design, manufacture and sales. With a high volume of sales which is up to 5 million pieces monthly, KAD ART can be rated as one of the top-notch jewelry manufacturing companies in China.</div>
            <div class="article-right-list-text">Moreover, KAD ART has been working with a group of exceptional designers domestically and world widely. Our goal is to bring a dynamic and classic style to our customers and all the precious-stones, semi-gems and fashion jewelry material are sourcing globally.</div>
          </div>

          <div class="article-right-list">
            <div class="article-right-list-title">Branches from KAD ART</div>
            <div>
              <div class="article-right-list-text smtit">Hengdeli</div>
              <div class="article-right-list-text">Hengdeli is a luxury jewelry supplier and is dedicating in bringing Chinese culture together with modern design. The brand is expertise in Jadeite, nephrite and precious stone and promising to bring an authentic and oriental accent to the design.</div>
              <div class="article-right-list-text smtit">BBD Co.</div>
              <div class="article-right-list-text">BDD Co. is an international online jewelry retailer. The main product line is focusing on diamond and fashion pieces designed by our own. All of the items comply with a high quality standard and are appreciated in various markets throughout the world.</div>
            </div>
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
        title: 'One-stop Fine Jewellery Supplier-Kad Art Limited',
        meta: [
          { hid: 'description', name: 'description', content: 'Find exquisite diamond, gold, and silver jewelry in Kad Art. 3 branch offices, 20 designers to ODM OEM your private label jewelry in short lead time. We guarantee high-quality and excellent customer service!'},
          { hid: 'keywords', name: 'keywords', content: 'Fine jewelry manufacturer, quality jewelry supplier, bulk jewelry factory'}
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
