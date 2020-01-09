<template>
  <div class="container">
    <ad></ad>
    <goodsDetailPage></goodsDetailPage>
  </div>
</template>

<script>
import ad from '~/components/Ad.vue'
import goodsDetailPage from '~/components/GoodsDetailPage.vue'

export default {
  data(){
    return{
    }
  },
  components: {
    ad,
    goodsDetailPage,
  }
}
</script>

<style>
</style>
