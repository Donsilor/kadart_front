<template>
  <div class="header-box">
    <div class="header flex-splice">
      <div class="icon-left" @click="showMenu()"></div>
      <div class="icon-right clf">
        <div class="icon-right-1 fl" @click="onSearch()"></div>
        <div class="icon-right-2 fl"></div>
      </div>
      <div class="logo-box">
        <a href="/">
          <img src="../../static/index/icon/logo-1.png" alt="">
        </a>
      </div>
    </div>

    <!-- 搜索 -->
    <div class="search-box" v-if="ifShowSearch" ref="searchBox">
      <search @starsSearch="ifSearch"></search>
    </div>
  </div>
</template>

<script>
  import search from '../../pageComponents/search/index.vue'
  import bus from '../../assets/js/bus.js'

  export default {
    components: {
      search
    },
    data() {
      return {
        ifShowSearch: false
      }
    },
    mounted() {},
    methods: {
      showMenu() {
        bus.$emit('showMenu', true)
      },
      onSearch() {
        this.searchFn()
      },
      ifSearch() {
        var that = this;
        that.ifShowSearch = false;
      },
      searchFn() {
        var that = this;
        that.ifShowSearch = !that.ifShowSearch;
        if (that.ifShowSearch) {
          var timer = setTimeout(function() {
            // console.log(that.$refs.searchBox)
            that.$refs.searchBox.classList.add('hei');
          }, 20)
        }
      }
    }
  }
</script>

<style scoped>
  .header-box {
    position: relative;
  }

  .header {
    position: relative;
    width: 100%;
    height: 5.5rem;
    padding-top: 0.525rem;
    background-color: #fff;
    border-bottom: 1px solid #480f32;
    z-index: 3;
  }

  .icon-left {
    position: absolute;
    left: 4.8%;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    width: 2.1rem;
    height: 2.1rem;
    background: url(../../static/index/icon/icon-1.png) no-repeat center;
    background-size: 100% 100%;
  }

  .icon-right {
    position: absolute;
    right: 4.8%;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    height: 2.1rem;
  }

  .icon-right-1 {
    width: 2.1rem;
    height: 2.1rem;
    background: url(../../static/index/icon/icon-2.png) no-repeat center;
    background-size: 100% 100%;
  }

  .icon-right-2 {
    width: 2.1rem;
    height: 2.1rem;
    margin-left: 1.5rem;
    background: url(../../static/index/icon/icon-3.png) no-repeat center;
    background-size: 110% 110%;
  }

  .logo-box {
    width: 2.9rem;
    height: 3.4rem;
    margin: 0 auto;
  }

  .search-box {
    position: absolute;
    top: -100%;
    left: 0;
    z-index: 2;
    width: 100%;
    background-color: #fff;
    padding: 0 3%;
    /* height: 0; */
    /* overflow: hidden; */
    transition: top 0.5s;
  }

  .hei {
    top: 5.5rem;
    transition: top ease-in 0.2s;
  }
</style>
