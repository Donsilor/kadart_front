<template>
  <div class="container">
    <mains :data1="this.data1" :data2="this.data2" :data3="this.data3" :data4="this.data4"></mains>
  </div>
</template>

<script>
import mains from '~/pageComponents/indexPage/index'

export default {
  components: {
    mains,
  },
  async asyncData({ $axios, route, store, app }) {
    let [request1Data, request2Data, request3Data, request4Data] = await Promise.all([
          $axios.get('/common/advert-images',{params: {'acdv_id': 11,}}),
          $axios.get('/common/advert-images',{params: {'acdv_id': 10,}}),
          $axios.get('/common/advert-images',{params: {'acdv_id': 14,}}),
          $axios.get('/common/advert-images',{params: {'acdv_id': 13,}})
        ])

        var csDomain = 'https://www-kadart.bddco.cn';
        var Domain = 'https://kadart.com';
        var shareUrl = Domain + route.path;
        
        var head_r = {
            title:'High-quality Fine Jewelry Manufacturer and Supplier|KAD ART LIMITED',
            meta: [
              { hid: 'description', name: 'description', content: 'KADART, a global premium jewelry manufacturer. We provide high-quality gold, sterling silver jewelry with worldwide sourced gemstones made by experienced craftsmen for the world! Top-notch quality, short lead time, excellent service, we guarantee it!'},
              { hid: 'keywords', name: 'keywords', content: 'Jewelry manufacturer, quality jewelry maker, jewellery supplier'},
              { property: 'og:url', content: shareUrl},
              { property: 'og:image', content: Domain + '/share/index_3.png'},
              { property: 'og:type', content: 'website'},
              { property: 'og:site_name', content: 'site name'},
              { property: 'og:title', content: 'High-quality Fine Jewelry Manufacturer and Supplier|KAD ART LIMITED'},
              { property: 'og:description', content: 'KADART, a global premium jewelry manufacturer. We provide high-quality gold, sterling silver jewelry with worldwide sourced gemstones made by experienced craftsmen for the world! Top-notch quality, short lead time, excellent service, we guarantee it!'}
            ]
        }
        app.head.title = head_r.title;
        app.head.meta = head_r.meta;
        
        return {
          data1: request1Data.data.data,
          data2: request2Data.data.data,
          data3: request3Data.data.data,
          data4: request3Data.data.data
        }
  }
}
</script>

<style>
  img {
  	width: 100%;
  	height: 100%;
  }
</style>
