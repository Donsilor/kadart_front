<template>
  <div class="container">
    <ad></ad>
    <goodsDetailPage></goodsDetailPage>
  </div>
</template>

<script>
import ad from '~/components/ad/index.vue'
import goodsDetailPage from '~/pageComponents/goodsDetailPage/index.vue'

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
