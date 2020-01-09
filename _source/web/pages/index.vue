<template>
  <div class="container">
    <mains></mains>
  </div>
</template>

<script>
import mains from '~/components/indexMainPage.vue'

export default {
  components: {
    mains
  },
  head () {
    return {
      title: 'KAD ART LIMITED |High-quality Jewelry Manufacturer',
      meta: [
        { hid: 'description', name: 'description', content: 'KADART, a global premium jewelry manufacturer. It is aiming at hiring experienced jewelry craftsman in domestic and overseas to produce high quality jewelry for the world.' },
        { hid: 'keywords', name: 'keywords', content: 'KADArt, jewelry manufacturer, high-quality jewelry supplier,  jewelry factory, jewelry wholesale' }
      ]
    }
  },
  mounted() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://www.googletagmanager.com/gtag/js?id=UA-155201916-1';
    document.body.appendChild(s);
   },
}
</script>

<!-- Global site tag (gtag.js) - Google Analytics -->

<style>
</style>
