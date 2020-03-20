<template>
  <div class="container">
    <azzd></azzd>

    <div class="article-wrap clf">
      <div class="article-left fl">
        <div class="article-left-tit">{{title}}</div>
        <div class="article-left-box">
          <div class="article-left-list" :class="active_idx == index ? 'active' : ''" v-for="(item, index) in articleItem" :key="index">
            <i class="article-left-icon fl"></i>
            <a :href="'/'+item.url">{{item.title}}</a>
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
  components: {
    azzd
  },
  data() {
    return{
      // 详情数据
      articleDetail:{},
      // 描述
      description: '',
      // 上级id
      pid: '',
      // 左侧标题
      title: '',

      active_idx: 0,
      articleItem: [
        {title: ''}
      ],
      article_pid: 0,
      detailUrl: '',
      detailId: -1,
      a: '',
      b: '',
    }
  },
  asyncData({
    $axios,
    params,
    route
  }) {
    return $axios.get('/article/article-cate/index', {
      params: {}
    }).then(res => {
      var result = {
        url: route.path,
        id: route.query.id
      }

      if(Object.prototype.toString.call(res.data.data) === "[object Object]"){
        result.info = res.data.data.lists
      }

      return {result:result}
      // error(params)
    })
  },
  created() {
   var that = this;
   var url_id;
   if(this.result.id == undefined){
     url_id = this.result.url.split('=')[1]
   }else{
     url_id = this.result.id
   }

   this.getDetail(url_id);
  },
  mounted(){
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  },
  methods:{
    // 文章详情
    getDetail(k){
      var that = this;
      this.$axios.get('/article/article/detail', {
        params: {
          'id': k,
        }
      }).then(res => {
        this.articleDetail = res.data.data;
        this.description = res.data.data.seo_content;
        this.pid = res.data.data.cate_id;

        that.getClassify();
        that.getList();
      }).catch(function(error) {
        console.log(error);
      });
    },
    // 文章列表
    getList(){
      var that = this;
      this.$axios.get('/article/article/search', {
        params: {
          'pid': this.pid
        }
      }).then(res => {
        this.articleItem = res.data.data.data;
        // console.log(res)

        for(var i=0; i<this.articleItem.length; i++){
          if(this.articleItem[i].title == this.articleDetail.title){
            this.active_idx = i;
            break;
          }
        }

      }).catch(function(error) {
        console.log(error);
      });
    },

      // 文章分类
    getClassify(){
      var that = this;

      if('info' in this.result == true){
        var articleList = this.result.info;
      }else{
        return
      }
      var flag = false;

      for (var i = 0; i < articleList.length; i++) {
        for (var j = 0; j < articleList[i].items.length; j++) {
          for (var k = 0; k < articleList[i].items[j].items.length; k++) {
            var list = articleList[i].items[j].items[k];

            if (list.id == this.pid) {
                that.title = list.title;

              // that.tittle = articleList[i].title;
              flag = true;
              break;
            } else {
              // 跳转404
              // console.log(222)
            }
          }

          if (flag) {
            break;
          }
        }

        if (flag) {
          break;
        }

      }
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
    color: #666;
  }
</style>
