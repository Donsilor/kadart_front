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
    var site = route.path.lastIndexOf('/')+1,
        urlFront = route.path.slice(0, site),
        goods_id = route.path.slice(site);
    
    return await $axios.get('/goods/style/detail', {
      params: {
        id: goods_id
      }
    }).then(res => {
      var csDomain = 'https://www-kadart.bddco.cn';
      var Domain = 'https://kadart.com';
      var shareUrl = csDomain + route.path;

      // imgUrl = res.data.data.goods_images.thumb[0];
      // if(imgUrl.indexOf('?')){
      //   imgUrl = imgUrl.split('?')[0];
      // }

      var head_r = {
          title: res.data.data.seo.meta_title || 'Best high quality jewelry with fine craftsmanship wholesale',
          meta: [
            { hid: 'description', name: 'description', content: res.data.data.seo.meta_desc || 'KADArt manufacturer and wholesale top-end gold,silver, copper and alloy jewelry with precious,semi gems,crystal,zircon,rhinestone at good price.'},
            { hid: 'keywords', name: 'keywords', content: res.data.data.seo.meta_word || ' jewelry factory, jewelry supplier, jewelry manufacturer,jewelry wholesale,gold jewelry, silver jewelry, brass jewelry, high quality jewelry, best jewelry, stylish jewelry, fashion jewelry'},
            { property: 'og:url', content: shareUrl},
            { property: 'og:image', content: csDomain + '/share/index_626px.png'},
            { property: 'og:image:width', content: "200" },
            { property: 'og:image:height', content: "140" },
            { property: 'og:type', content: 'website'},
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

