<template>
  <div class="container">
    <menus></menus>
    <headers></headers>
    <navs></navs>
    <mains></mains>
    <footers></footers>
    <scroll></scroll>
  </div>
</template>

<script>
import menus from '~/components/Menu.vue'
import headers from '~/components/Header.vue'
import navs from '~/components/Nav.vue'
import mains from '~/components/indexMainPage.vue'
import footers from '~/components/Footer.vue'
import scroll from '~/components/Scroll.vue'

export default {
  data(){
    return{
    }
  },
  components: {
    menus,
    headers,
    navs,
    mains,
    footers,
    scroll
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
</style>
