<template>
  <div>
    <slideShow></slideShow>
    <goodsDetailsPage :info="this.info" :g_id="this.goods_id"></goodsDetailsPage>
  </div>
</template>

<script>
  import goodsDetailsPage from '../pageComponents/goodsDetailsPage/index.vue'

  export default{
    components:{
      goodsDetailsPage
    },
    async asyncData({ $axios, route, store, app }) {
      var last = route.path.lastIndexOf('/')+1;
      var goods_id = route.path.slice(last);
      return await $axios.get('/goods/style/detail', {
        params: {
          id: goods_id
        }
      }).then(res => {
        var shareUrl = 'https://wap-kadart.bddco.cn' + route.path, imgUrl = res.data.data.goods_images.thumb[0];
        if(imgUrl.indexOf('?')){
          imgUrl = imgUrl.split('?')[0];
        }

        var head_r = {
            title: res.data.data.seo.meta_title || 'Best high quality jewelry with fine craftsmanship wholesale',
            meta: [
              { charset: 'utf-8' },
              { name: 'viewport', content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0' },
              { hid: 'description', name: 'description', content: res.data.data.seo.meta_desc || 'KADArt manufacturer and wholesale top-end gold,silver, copper and alloy jewelry with precious,semi gems,crystal,zircon,rhinestone at good price.'},
              { hid: 'keywords', name: 'keywords', content: res.data.data.seo.meta_word || ' jewelry factory, jewelry supplier, jewelry manufacturer,jewelry wholesale,gold jewelry, silver jewelry, brass jewelry, high quality jewelry, best jewelry, stylish jewelry, fashion jewelry'},
              { property: 'og:url', content: shareUrl},
              { property: 'og:type', content: 'website'},
              { property: 'og:image', content: 'https://cdn.kadart.com/images/2019/12/24/image_157717509897555310.jpg'},
              { property: 'og:site_name', content: 'site name'},
              { property: 'og:title', content: res.data.data.seo.meta_title || 'Best high quality jewelry with fine craftsmanship wholesale'},
              { property: 'og:description', content: res.data.data.seo.meta_desc || 'KADArt manufacturer and wholesale top-end gold,silver, copper and alloy jewelry with precious,semi gems,crystal,zircon,rhinestone at good price.'}
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
