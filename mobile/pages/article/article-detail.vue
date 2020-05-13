<template>
  <div class="container">
    <div class="article-wrap" v-if="ifShow">
      <div class="article-right-box">
        <div class="title">{{this.articleDetail.title}}</div>
        <div class="synopsis">{{this.articleDetail.seo_content}}</div>
        <div class="article-detail-box" v-html="this.articleDetail.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    head() {
      return this.seo || {
        title: 'this.title',
        meta: [{
          hid: 'description',
          name: 'description',
          content: 'this.description'
        }]
      }
    },
    data() {
      return {
        articleDetail: {
          title: '',
          seo_content: '',
          content: ''
        },
        title: '',
        description: '',
        ifShow: true,
      }
    },
    async asyncData({ $axios, route, store, app }) {
      var last = route.path.lastIndexOf('/')+1;
      var url_id = route.path.slice(last);

      return await $axios.get('/article/article/detail', {
        params: {
          id: url_id
        }
      }).then(res => {
        var seo = {
            title: res.data.data.title,
            meta: [
              { hid: 'description', name: 'description', content: res.data.data.seo_content || ''}
            ]
        };

        return {articleDetail: res.data.data, pid: res.data.data.cate_id, seo: seo}
      }).catch(err => {
        console.log(err)
      })
    },
    mounted(){
     document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
  }
</script>

<style scoped>
  .article-right-box {
    font-size: 1.3rem;
    line-height: 2rem;
    color: #666;
    text-align: left;
    word-break: break-all;
    padding: 2rem 5% 5rem;
  }

  .article-right-box>>>p {
    margin-top: 10px;
  }

  .article-detail-box>>>img {
    max-width: 100%;
    margin: 1rem 0;
  }

  .title {
    font-size: 2.4rem;
    color: #333;
    line-height: 2.6rem;
    text-align: center;
    font-weight: bold;
    margin-bottom: 3rem;
  }

  .synopsis {
    font-size: 1.6rem;
    color: #480f32;
    margin-bottom: 1.5rem;
  }
</style>
