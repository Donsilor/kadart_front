<template>
  <div class="app-box">
    <div class="header-bar">
      <header-bar></header-bar>
    </div>

    <nuxt/>
    
    <div>
      <menu-bar></menu-bar>
    </div>
  </div>
</template>

<style scoped>
  .app-box{
    padding-top: 5.5rem;
  }
  
  .header-bar{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 66;
    width: 100%;
    height: 5.5rem;
  }
</style>
