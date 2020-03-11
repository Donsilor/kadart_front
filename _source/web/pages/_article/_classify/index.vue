<template>
  <div class="container">
    <articleList></articleList>
  </div>
</template>

<script>
import articleList from '~/pageComponents/article/classify/list.vue'

export default {
  components: {
    articleList
  }
}
</script>

<style>
  img {
  	width: 100%;
  	height: 100%;
  }

  .article-img-box{
    width: 950px;
    margin: 0 auto;
    font-size: 0;
  }

  .article-img-box .img-a,
  .article-img-box .img-b,
  .article-img-box .img-c{
    width: 453px;
    margin-bottom: 30px;
  }

  .article-img-box .img-b{
    margin-bottom: -10px;
  }

  .article-img-box .img-a:nth-child(even),
  .article-img-box .img-b:last-child,
  .article-img-box .img-c:nth-child(even){
    margin-left: 44px;
  }

  .article-img-box .img-c:nth-child(2){
    margin-bottom: 32px;
  }

  .article-img-box .img-b{
    margin-top: -10px;
  }

  .article-right-list-text:first-child{
    margin-top: 0;
  }
</style>
