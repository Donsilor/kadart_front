<template>
  <div class="container">
    <azzd></azzd>
    <articleMainPage></articleMainPage>
  </div>
</template>

<script>
import azzd from '~/components/azzd/index.vue'
import articleMainPage from '~/pageComponents/articlePage/index'

export default {
  components: {
    azzd,
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
