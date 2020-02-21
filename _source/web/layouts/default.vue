<template>
  <div class="wrap">
    <div>
      <menu-bar></menu-bar>
    </div>

    <div>
      <header-bar></header-bar>
    </div>

    <div>
      <nav-bar></nav-bar>
    </div>

    <nuxt />

    <div>
      <footer-bar></footer-bar>
    </div>

    <div>
      <scroll-bar></scroll-bar>
    </div>
  </div>
</template>

<script>
  import azzd from '~/components/azzd/index.vue'
  import vuex from 'vuex'
  import Bus from '../components/Bus.js'

  export default {
    mounted() {
      this.getWidth();
      const _this = this
      _this.$nextTick(() => {
        window.onresize = function() {
          _this.getWidth();
        }
      })

    },
    methods: {
      getWidth() {
        var winWidth = document.body.clientWidth;
        if (winWidth < 1040) {
          winWidth = 1040;
        } else if (winWidth > 1340) {
          winWidth = 1340;
        }

        this.$store.commit('getWidth', winWidth);
        Bus.$emit('scrollFn', true)
      }
    }
  }
</script>

<style>
  .wrap {
    max-width: 1400px;
    min-width: 1000px;
    width: 100%;
    padding: 0 20px;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
