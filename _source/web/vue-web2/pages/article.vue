<template>
  <div class="container">
    <menus></menus>
    <headers></headers>
    <navs></navs>
    <ad></ad>
    <articleMainPage></articleMainPage>
    <footers></footers>
    <scroll></scroll>
  </div>
</template>

<script>
import menus from '~/components/Menu.vue'
import headers from '~/components/Header.vue'
import navs from '~/components/Nav.vue'
import ad from '~/components/Ad.vue'
import articleMainPage from '~/components/ArticleMainPage.vue'
import footers from '~/components/Footer.vue'
import scroll from '~/components/Scroll.vue'

export default {
  components: {
    menus,
    headers,
    navs,
    ad,
    articleMainPage,
    footers,
    scroll
  }
}
</script>

<style>
</style>
