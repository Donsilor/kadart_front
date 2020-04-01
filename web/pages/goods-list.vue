<template>
  <div class="container">
    <azzd></azzd>
    <goodsListPage></goodsListPage>
  </div>
</template>

<script>
import azzd from '~/components/azzd/index.vue'
import goodsListPage from '~/pageComponents/goodsListPage/index'

export default {
  data(){
    return{
      title: '列表页'
    }
  },
  components: {
    azzd,
    goodsListPage,
  }
}

</script>

<style>
  img {
  	width: 100%;
  	height: 100%;
  }
</style>
