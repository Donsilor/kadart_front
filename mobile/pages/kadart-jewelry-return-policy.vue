<template>
  <div>
    <slideShow></slideShow>

    <div class="about-box">
      <div class="title">
        <i class="icon" @click="goBack"></i>
        <span>Return Policy</span>
      </div>

      <div>
        <div class="list">
          <div class="list-tit">Returns</div>
          <div class="list-text">
            <div class="list-child">Usually we are not accept any returns unless customer can provide an offical certification of quality defect. Our policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately we can't offer you a refund or exchange any more.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
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
    methods:{
      goBack(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
  @import url("../assets/css/article.css");
</style>
