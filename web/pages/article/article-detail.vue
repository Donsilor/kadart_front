<template>
  <div class="container">
    <azzd></azzd>

    <div class="article-wrap clf">
      <div class="article-left fl">
        <div class="article-left-tit">{{article_tit}}</div>
        <div class="article-left-box">
          <div class="article-left-list" :class="active_idx == index ? 'active' : ''" v-for="(item, index) in articleItem" :key="index">
            <i class="article-left-icon fl"></i>
            <a :href="item.url">{{item.title}}</a>
          </div>
        </div>
      </div>

     <div class="article-right fr">
        <div class="article-right-tit">{{articleDetail.title}}</div>
        <div class="article-right-box">
          <div class="synopsis">{{articleDetail.seo_content}}</div>
          <div class="article-detail-box" v-html="articleDetail.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import azzd from '~/components/azzd/index.vue'

export default {
  components: {
    azzd
  },
  data() {
    return{
      // 详情数据
      articleDetail:{},
	  // 标题
      title: '',
      // 描述
      description: '',
      // 上级id
      // 左侧标题
	  article_tit: '',

      active_idx: 0,
      articleItem: [
        {title: ''}
      ],
      article_pid: 0,
      detailUrl: '',
      detailId: -1,
      a: '',
      b: '',
      result: '',
      article_tit: ''
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
      var head_r = {
          title: res.data.data.title,
          meta: [
            { hid: 'description', name: 'description', content: res.data.data.seo_content || ''}
          ]
      };

      app.head.title = head_r.title;
      app.head.meta = head_r.meta;

      return {articleDetail: res.data.data, pid: res.data.data.cate_id}
    }).catch(err => {
      console.log(err)
    })
  },
  mounted(){
   document.documentElement.scrollTop = document.body.scrollTop = 0;

   this.getList()
  },
  methods:{
    // 文章列表
    getList(){
      var that = this;
      this.$axios.get('/article/article/search', {
        params: {
          pid: this.pid
        }
      }).then(res => {
        this.articleItem = res.data.data.data;
        this.article_tit = res.data.data.category_name;

        for(var i=0; i<this.articleItem.length; i++){
          if(this.articleItem[i].title == this.articleDetail.title){
            this.active_idx = i;
            break;
          }
        }

      }).catch(function(error) {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>
  .article-right-box{
    font-size: 14px;
    line-height: 24px;
    color: #666;
    text-align: left;
    word-break: break-all;
    padding-top: 20px;
  }

  .article-right-box >>> p{
    margin-top: 10px;
  }

  .article-detail-box >>> img {
    max-width: 640px;
    margin: 20px 0;
  }

  .article-right-tit{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .synopsis{
    font-size: 14px;
    line-height: 24px;
    color: #ad317d;
		margin-bottom: 20px;
  }
</style>
