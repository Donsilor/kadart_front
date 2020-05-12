<template>
  <div class="container">
    <azzd></azzd>
    <goodsDetailPage :info="this.info" :g_id="this.goods_id"></goodsDetailPage>
  </div>
</template>

<script>
import azzd from '~/components/azzd/index.vue'
import goodsDetailPage from '~/pageComponents/goodsDetailPage/index.vue'

export default {
  components: {
    azzd,
    goodsDetailPage,
  },
  async asyncData({ $axios, route, store, app }) {
    var last = route.path.lastIndexOf('/')+1;
    var goods_id = route.path.slice(last);
    return await $axios.get('/goods/style/detail', {
      params: {
        id: goods_id
      }
    }).then(res => {
      var head_r = {
          title:'new title',
          meta: [
            { hid: 'description', name: 'description', content: res.data.data.seo.meta_desc || '翻山倒海是返回个房间号发过火个房间号付款减肥'},
            { hid: 'keywords', name: 'keywords', content: res.data.data.seo.meta_word || '昂发发过火管道风机UK剪头啦人都说个事单方事故' }
          ]
      }
      app.head.title = head_r.title;
      app.head.meta = head_r.meta;

      return {info: res.data, goods_id: goods_id}
    }).catch(err => {
      // console.log(err)
    })
  }
}
</script>

<style>
</style>
