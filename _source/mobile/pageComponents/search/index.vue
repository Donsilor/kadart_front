<template>
  <div>
    <div class="search-box-r">
      <div class="search-icon-left" @click="startSearch()"></div>
      <div class="search-icon-right" @click="clearIpt"></div>
      <input type="text" class="search-ipt" v-model="ipt" :placeholder="placeholder" @keydown.enter="startSearch()"
        @focus="onFocus" @blur="onBlur">
    </div>

    <div class="search-recommended">
      <div class="search-recommended-tit">
        <div class="search-recommended-tit-text">Quick Search</div>
      </div>
      <div class="search-recommended-content">
        <div class="search-recommended-list">
          <a href="https://wap.kadart.com/category/RINGS/type_id=2">Wedding Ring</a>
        </div>
        <div class="search-recommended-list">
          <a href="https://wap.kadart.com/category/NECKLACES/type_id=4">NeckLack</a>
        </div>
        <div class="search-recommended-list">
          <a href="https://wap.kadart.com/category/NECKLACES/type_id=6">Earring</a>
        </div>
        <div class="closeSearch" @click="$emit('starsSearch', true)"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ipt: '',
        placeholder: 'content'
      }
    },
    methods: {
      startSearch() {
        if (this.ipt != '') {
          this.$router.push({
            path: '/search/' + this.ipt
          })

          this.$emit('starsSearch', true)
        }
      },
      onFocus() {
        this.placeholder = '';
      },
      onBlur() {
        this.placeholder = 'content';
      },
      clearIpt() {
        this.ipt = '';
      }
    }
  }
</script>

<style scoped>
  .search-box-r {
    width: 100%;
    height: 4.2rem;
    background-color: rgba(229, 229, 229, 0.8);
    position: relative;
  }

  .search-icon-left {
    position: absolute;
    top: 50%;
    left: 3%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    width: 1.6rem;
    height: 1.6rem;
    background: url(../../static/index/icon/icon-2.png) no-repeat center;
    background-size: 100% 100%;
  }

  .search-icon-right {
    position: absolute;
    top: 50%;
    right: 3%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 50%;
    border: 1px solid #ccc;
    background: #f2f2f2 url(../../static/index/icon/error.png) no-repeat center center;
    background-size: 56% 56%;
    box-sizing: content-box;
  }

  .search-ipt {
    height: 4rem;
    width: 76%;
    margin: 0.1rem 0 0 11%;
    background-color: transparent;
    font-size: 1.45rem;
  }

  .search-recommended {
    width: calc(100% - 4px);
    margin: 0 auto;
    padding-bottom: 0.3rem;
    margin-top: 0.5rem;
    box-shadow: 0 0 2px 2px #e2e2e2;
  }

  .search-recommended-tit {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3rem;
    background-color: #f2f2f2;
    padding-left: 7.6%;
  }

  .search-recommended-tit-text {
    font-family: STKAITI;
    font-size: 1.4rem;
    font-weight: bold;
    color: #333;
  }

  .search-recommended-tit-icon {
    width: 0.7rem;
    height: 0.8rem;
    background: url(../../static/index/icon/trash.png) no-repeat center;
    background-size: 100% 100%;
  }

  .search-recommended-content {
    padding: 0.4rem 0 1rem 7.6%;
  }

  .search-recommended-list {
    font-family: STKAITI;
    font-size: 1.2rem;
    color: #000;
    opacity: 0.5;
    /* margin-bottom: 0.6rem; */
    line-height: 2.8rem;
  }

  .closeSearch {
    position: absolute;
    right: 2.2rem;
    bottom: 1.4rem;
    width: 1.4rem;
    height: 1.4rem;
    background: url(../../static/index/icon/error.png) no-repeat center;
    background-size: 100% 100%;
  }
</style>
