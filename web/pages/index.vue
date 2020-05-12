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
        
        var head_r = {
            title:'KAD ART LIMITED |High-quality Jewelry Manufacturer',
            meta: [
              { hid: 'description', name: 'description', content: 'KADART, a global premium jewelry manufacturer. It is aiming at hiring experienced jewelry craftsman in domestic and overseas to produce high quality jewelry for the world.'},
              { hid: 'keywords', name: 'keywords', content: 'KADArt, jewelry manufacturer, high-quality jewelry supplier,  jewelry factory, jewelry wholesale'}
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
