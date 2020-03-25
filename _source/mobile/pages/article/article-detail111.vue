<template>
  <div class="container">
    <div class="article-wrap" v-if="ifShow">
      <div class="article-right-box">
        <div class="title">{{articleDetail.title}}</div>
        <div class="synopsis">{{articleDetail.seo_content}}</div>
				<div class="article-detail-box" v-html="articleDetail.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    head() {
      return {
        title: this.title,
        meta: [{
          hid: 'description',
          name: 'description',
          content: this.description
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
				ifShow: false,
      }
    },
    created(){
    if(this.articleDetail.title != '' || this.articleDetail.seo_content != '' || this.articleDetail.content != ''){
              this.ifShow = true;
     }
     this.description = this.articleDetail.seo_content;
      console.log(8888,this.articleDetail)
      // var url_id,that = this;
      // var path = this.$route.fullPath;

      // if(path.indexOf('?') == -1){
      //   url_id = path.slice(path.lastIndexOf('/')+1)
      // }else{
      //   url_id = path.slice(path.lastIndexOf('=')+1)
      // }

      // console.log(url_id)
      // this.description = 123

      // 文章详情
      // this.$axios.get('/article/article/detail', {
      //   params: {
      //     'id': url_id,
      //   }
      // }).then(res => {
      //   that.articleDetail = res.data.data;
      //   this.description = res.data.data.seo_content;
      //   that.title = res.data.data.title;

      //   console.log(123,this.description)

      //   if(this.articleDetail.title != '' || this.articleDetail.seo_content != '' || this.articleDetail.content != ''){
      //     this.ifShow = true;
      //   }
      // }).catch(function(error) {
      //   console.log(error);
      // });
    },

asyncData({ app, $axios, route, store }) {
    var url_id,path = route.fullPath;
    if(path.indexOf('?') == -1){
      url_id = path.slice(path.lastIndexOf('/')+1)
    }else{
      url_id = path.slice(path.lastIndexOf('=')+1)
    }
    return $axios({
      method: `get`,
      url: `/article/article/detail`,
      params: {
        'id': url_id,
      }
    })
      .then(res => {
        const infos = res.data.data;
        return {
          articleDetail: infos,
        }
      })
      .catch(err => {
        console.log(err)
      })
  },


   //  fetch ({ $axios, params, route, context }) {
   //    console.log(11,this.$axios)
   //     var url_id,path = route.fullPath;
   //      if(path.indexOf('?') == -1){
   //        url_id = path.slice(path.lastIndexOf('/')+1)
   //      }else{
   //        url_id = path.slice(path.lastIndexOf('=')+1)
   //      }
   //      return this.$axios.get('/article/article/detail', {
   //      params: {
   //        'id': url_id,
   //      }
   //    }).then(res => {
   //      store.commit('setData', res.data.data)
   //    }).catch(function(error) {
   //      console.log(error);
   //    });
   // }
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
