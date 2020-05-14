<template lang="html">
  <div class="loading-page" v-if="loading">
    <div class="loading-box">
      <img class="img" src="../static/load.gif" alt="">
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  font-size: 1.6rem;
  font-family: sans-serif;
  color: #999;
}
.loading-box{
  width: 12rem;
  height: 12rem;
  background-color: #333;
  position: absolute;
  top: 30%;
  left: 50%;
  border-radius: 6px;
  transform: translateX(-50%);
}
.img{
  width: 3.6rem;
  height: 3.6rem;
  margin: 2.4rem auto 1rem;
}
p{
  padding-left: 1rem;
  box-sizing: border-box;
}
</style>
