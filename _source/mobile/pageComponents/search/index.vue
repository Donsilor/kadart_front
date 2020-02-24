<template>
  <div>
    <div class="search-box-r">
      <div class="search-icon-left"></div>
      <div class="search-icon-right"></div>
      <input type="text" class="search-ipt" placeholder="content">
    </div>

    <div class="search-recommended">
      <div class="search-recommended-tit">
        <div class="search-recommended-tit-text">SEARCH IS RECOMMENDED</div>
        <div class="search-recommended-tit-icon"></div>
      </div>
      <div class="search-recommended-content">
        <div class="search-recommended-list">Search is recommended</div>
        <div class="search-recommended-list">Search is recommended</div>
        <div class="search-recommended-list">Search is recommended</div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  .search-box-r{
    width: 100%;
    height: 2.6rem;
    background-color: rgba(229, 229, 229, 0.8);
    position: relative;
  }

  .search-icon-left{
    position: absolute;
    top: 50%;
    left: 3%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    background: url(../../static/index/icon/icon-2.png) no-repeat center;
    background-size: 100% 100%;
  }

  .search-icon-right{
    position: absolute;
    top: 50%;
    right: 3%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    width: 0.8rem;
    height: 0.8rem;
    background: url(../../static/index/icon/error.png) no-repeat center;
    background-size: 100% 100%;
  }
  .search-ipt{
    height: 2.4rem;
    width: 88%;
    margin: 0.1rem 0 0 8%;
    background-color: transparent;
  }

  .search-recommended{
    padding-bottom: 0.3rem;
  }
  .search-recommended-tit{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2.3rem;
    padding-right: 3%;
  }
  .search-recommended-tit-text{
    font-family: STKAITI;
    font-size: 1rem;
    font-weight: bold;
    color: #000;
  }
  .search-recommended-tit-icon{
    width: 0.7rem;
    height: 0.8rem;
    background: url(../../static/index/icon/trash.png) no-repeat center;
    background-size: 100% 100%;
  }
  .search-recommended-list{
    font-family: STKAITI;
    font-size: 1rem;
    color: #000;
    opacity: 0.5;
    margin-bottom: 0.6rem;
  }
</style>
