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
  components: {
    azzd,
    goodsListPage,
  },
  async asyncData({ $axios, route, store, app }) {
    var path = route.path.slice(route.path.lastIndexOf('/') + 1);
    var keyword='',typeId='',attrId='',priceRange='';

    if (path.indexOf('=') == -1) {
      this.keyword = unescape(path);
    } else {
      if (path.indexOf('&') == -1) {
        var arr = path.split('=');
        if (arr[0] == 'type_id') {
          this.typeId = path.split('=')[1];
        } else if (arr[0] == 'attr_id') {
          this.attrId = path.split('=')[1];
        }
      } else {
        var arr = path.split(/[=&]/);

        for (var i = 0; i < arr.length; i++) {
          if (arr[i] == 'type_id') {
            this.typeId = arr[i + 1];
          }
          if (arr[i] == 'attr_id') {
            this.attrId = arr[i + 1];
          }
          if (arr[i] == 'price_range') {
            this.priceRange = arr[i + 1];
          }
        }
      }
    }

    return await $axios.get('/goods/style/search', {
      params: {
        id: 0
      }
    }).then(res => {
      // var head_r = {
      //     title:'new title',
      //     meta: [
      //       { hid: 'description', name: 'description', content: res.data.data.seo.meta_desc || '翻山倒海是返回个房间号发过火个房间号付款减肥'},
      //       { hid: 'keywords', name: 'keywords', content: res.data.data.seo.meta_word || '昂发发过火管道风机UK剪头啦人都说个事单方事故' }
      //     ]
      // }
      // app.head.title = head_r.title;
      // app.head.meta = head_r.meta;

      // return {info: res.data, goods_id: goods_id}
    }).catch(err => {
      // console.log(err)
    })
  }
}

</script>

<style>
  img {
  	width: 100%;
  	height: 100%;
  }
</style>
