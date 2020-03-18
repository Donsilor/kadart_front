<template>
  <div class="container">
    <azzd></azzd>

    <div class="article-wrap clf">
      <div class="article-left fl">
        <div>
          <div class="article-left-tit">{{detailUrl}}</div>
          <div class="article-left-box">
            <div class="article-left-list" :class="active_idx == index ? 'active' : ''" v-for="(item, index) in articleItem" :key="index">
              <i class="article-left-icon fl"></i>
              <a :href="'/'+item.url">{{item.title}}</a>
            </div>
          </div>
        </div>
      </div>

      <div class="article-right fr">
        <div class="article-right-tit">{{articleItem[active_idx].title}}</div>
        <div class="article-right-box">
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
      articleDetail:{},
      articleItem: [
        {title: ''}
      ],
      article_pid: 0,
      detailUrl: '',
      detailId: -1
    }
  },
  mounted(){
    document.documentElement.scrollTop = document.body.scrollTop = 0;

    this.detailUrl = location.pathname.split('/')[1].replace('-',' ');
    // console.log(url)

    var that = this;

    // 文章分类
    this.$axios.get('/article/article-cate/index', {
      params: {}
    }).then(res => {
      // console.log(res)
      var articleList = res.data.data.lists;
      // console.log(articleList)
      var flag = false;

      for(var i=0; i<articleList.length; i++){
        for(var j=0; j<articleList[i].items.length; j++){
          for(var k=0; k<articleList[i].items[j].items.length; k++){
            var list = articleList[i].items[j].items[k];
            // console.log(list.title)

            if(list.title == this.detailUrl){
              that.article_pid = list.id;
              flag = true;
              break;
            }else{
              // 跳转404
              // console.log(222)
            }
          }

          if(flag){
            break;
          }
        }

        if(flag){
          break;
        }
      }

      // console.log(this.articleTitle)

      this.getList()

    }).catch(function(error) {
      console.log(error);
    });

  },
  methods:{
    // 文章列表
    getList(){
      var that = this;
      this.$axios.get('/article/article/search', {
        params: {
          'pid': that.article_pid
        }
      }).then(res => {
        this.articleItem = res.data.data.data;
        // console.log(res)
        // console.log(this.articleItem)

        var pathUrl = location.pathname;
        var num = pathUrl.lastIndexOf('/')+1;

        pathUrl = pathUrl.slice(num).replace(/\-/g,' ');

        for(var i=0; i<this.articleItem.length; i++){
          if(this.articleItem[i].title == pathUrl){
            this.detailId = this.articleItem[i].id;
            this.active_idx = i;
            break;
          }
        }

        if(this.detailId > -1){
          this.getDetail()
        }

      }).catch(function(error) {
        console.log(error);
      });
    },

    getDetail(){
      // 文章详情
      this.$axios.get('/article/article/detail', {
        params: {
          'id': this.detailId,
        }
      }).then(res => {
        this.articleDetail = res.data.data;

        // console.log(this.articleDetail)
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
  }

  .article-right-box >>> p{
    margin-top: 10px;
  }

  .article-detail-box >>> img {
    max-width: 640px;
    margin: 20px 0;
  }


</style>
