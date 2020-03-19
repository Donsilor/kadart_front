<template>
  <div class="container">
    <azzd></azzd>

    <div class="article-wrap clf">
      <div class="article-left fl">
        <div>
          <div class="article-left-tit">Terms and Condtions</div>
          <div class="article-left-box">
            <div class="article-left-list">
              <a href="/kadart-jewelry-shipping-policy">Shipping Policy</a>
            </div>
            <div class="article-left-list active">Return Policy</div>
            <div class="article-left-list">
              <a href="/kadart-jewelry-privacy-policy">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>

      <div class="article-right fr">
        <div class="article-right-tit">Return Policy</div>
        <div class="article-right-box">
          <div class="article-right-list">
            <div class="article-right-list-title">Returns </div>
            <div class="article-right-list-text">Usually we are not accept any returns unless customer can provide an offical certification of quality defect.</div>
            <div class="article-right-list-text">Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can't offer you a refund or exchange any more.</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import azzd from '~/components/azzd/index.vue'

export default {
  components: {
    azzd
  },
  head() {
    return {
      title: 'KADArt introduction | High quality jewelry manufacture and wholesale',
      meta: [{
          hid: 'description',
          name: 'description',
          content: 'KADArt design, manufacture top-grade gold,silver jewellery like necklaces,rings,earrings,bracelets with diamond,ruby,sapphire,topaz,pearl,zircon,rhinstone, wholesale at reasonable price.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Kadart jewelry,BDD jewelry,Hengdeli jewelry,high-quality jewelry, top-grade jewelry'
        }
      ]
    }
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
