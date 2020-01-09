<template>
  <div class="container">
    <ad></ad>
    <goodsListPage></goodsListPage>
  </div>
</template>

<script>
import ad from '~/components/Ad.vue'
import goodsListPage from '~/components/GoodsListPage.vue'

export default {
  data(){
    return{
      title: '列表页'
    }
  },
  components: {
    ad,
    goodsListPage,
  }
}

</script>

<style>
</style>
