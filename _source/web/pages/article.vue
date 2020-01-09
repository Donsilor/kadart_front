<template>
  <div class="container">
    <ad></ad>
    <articleMainPage></articleMainPage>
  </div>
</template>

<script>
import ad from '~/components/Ad.vue'
import articleMainPage from '~/components/ArticleMainPage.vue'

export default {
  components: {
    ad,
    articleMainPage,
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
  }
}
</script>

<style>
</style>
