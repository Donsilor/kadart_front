<template>
  <div class="container">
    <ad></ad>
    <goodsListPage></goodsListPage>
  </div>
</template>

<script>
import ad from '~/components/ad/index.vue'
import goodsListPage from '~/pageComponents/goodsListPage/index'

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
