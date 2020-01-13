<template>
  <div class="container">
    <mains></mains>
  </div>
</template>

<script>
import mains from '~/pageComponents/indexPage/index'

export default {
  data(){
    return{
    }
  },
  components: {
    mains,
  },
  head () {
    return {
      title: 'KAD ART LIMITED |High-quality Jewelry Manufacturer',
      meta: [
        { hid: 'description', name: 'description', content: 'KADART, a global premium jewelry manufacturer. It is aiming at hiring experienced jewelry craftsman in domestic and overseas to produce high quality jewelry for the world.' },
        { hid: 'keywords', name: 'keywords', content: 'KADArt, jewelry manufacturer, high-quality jewelry supplier,  jewelry factory, jewelry wholesale' }
      ]
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
