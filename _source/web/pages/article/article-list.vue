<template>
  <div class="container">
    <azzd></azzd>

    <div class="article-wrap clf">
      <div class="article-left fl">
        <div>
          <div class="article-left-tit">News</div>
          <div class="article-left-box">
            <div class="article-left-list" :class="active_idx == index ? 'active' : 'sd'" v-for="(item, index) in articleTitle" :key="index" @click="chooseItem(index)">
              <i class="article-left-icon fl"></i>
              <span>{{item.title}}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="article-right fr">
        <div class="article-right-tit">Express Method</div>
        <div class="article-right-box">
          <div class="article-right-list" v-for="ite in articleItem" @click="intoDetail">
            <div class="article-right-list-title">{{ite.title}}</div>
            <div class="img-box">
              <img :src="ite.img" alt="">
            </div>

            <div class="article-right-list-text">{{ite.seo_content}}</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import azzd from '~/components/azzd/index.vue'

export default {
  head() {
    return {
      title: 'KADArt introduction | High quality jewelry manufacture and wholesale',
      meta: [{
          hid: 'description',
          name: 'description',
          content: 'KADArt design, manufacture top-grade gold,silver jewellery like necklaces,rings,earrings,bracelets with diamond,ruby,sapphire,topaz,pearl,zircon,rhinstone, wholesale at reasonable price.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'Kadart jewelry,BDD jewelry,Hengdeli jewelry,high-quality jewelry, top-grade jewelry'
        }
      ]
    }
  },
  components: {
    azzd
  },
  data() {
    return{
      active_idx: 0,
      articleTitle:[],
      articleItem: []
    }
  },
  mounted() {
    document.documentElement.scrollTop = document.body.scrollTop = 0;

    // 文章分类
    this.$axios.get('/article/article-cate/index', {
      params: {
        // 'acdv_id': 11,
      }
    }).then(res => {
      this.articleTitle = res.data.data.lists[0]['-'][0]['-'];
      // console.log(res)
      // console.log(this.articleTitle)
    }).catch(function(error) {
      console.log(error);
    });

    // 文章列表
    this.$axios.get('/article/article/search', {
      params: {
        // 'acdv_id': 11,
      }
    }).then(res => {
      this.articleItem = res.data.data.data;
      // console.log(res)
      console.log(this.articleItem)
    }).catch(function(error) {
      console.log(error);
    });
  },
  methods:{
    intoDetail(){
      location.pathname = '/article/article-detail'
      // console.log(location)
    },
    chooseItem(k){
      this.active_idx = k;
    }
  }
}
</script>

<style scoped>
  .article-right .img-box{
    width: 720px;
    height: 480px;
    margin: 28px 0;
    position: relative;
    overflow: hidden;
    /* border: 1px solid red; */
  }
  .article-right .img-box img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 100%;
  }
  .article-right-list{
    cursor: pointer;
  }
</style>
