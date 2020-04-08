<template>
  <div class="container">
    <artcleSlideShow></artcleSlideShow>

    <div class="nav-box">
      <div class="scroll">
        <a :href="item.url" class="list" :class="active_idx == index ? 'active' : ''" v-for="(item, index) in menu_list"
          :key="index">
          {{item.title}}
        </a>
      </div>
    </div>

   <div class="article-wrap">
      <div class="article-right-box">
        <div class="article-right-list" v-for="(ite, index) in articleItem" @click="intoDetail(index)">
          <div class="article-right-r">
            <div class="article-right-list-title">{{ite.title}}</div>
            <div class="article-right-list-text">{{ite.seo_content}}</div>
          </div>
          <div class="img-box">
            <img :src="ite.img" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="more" v-if="ifShowLoad" @click="loadMore">
      <span>Load More</span>
      <i class="more-icon" v-if="ifLoad"></i>
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
          content: this.title
        }]
      }
    },
    data() {
      return {
        active_idx: 0,
        articleItem: [],
        article_pid: 0,
        detailUrl: '',
        title: '',
        ifShowLoad: false,
        ifLoad: false,
        page_size: 5,

        menu_list: [],
        pid_fore: '',
      }
    },
    mounted() {
      document.documentElement.scrollTop = document.body.scrollTop = 0;

      var url_id, path = location.href;
      if (path.indexOf('?') != -1) {
        url_id = path.split('=')[1];
      } else {
        url_id = path.slice(path.lastIndexOf('/') + 1);
      }

      this.article_pid = url_id;

      this.getList()

    },
    methods: {
      intoDetail(k) {
        location.href = this.articleItem[k].url;
      },

      // 文章列表
      getList(k) {
        var that = this;
        if (k) {
          this.page_size += k;
        }
        this.$axios.get('/article/article/search', {
          params: {
            'pid': that.article_pid,
            'page_size': this.page_size
          }
        }).then(res => {
          this.articleItem = res.data.data.data;
          this.pid_fore = res.data.data.pid;
          this.title = res.data.data.category_name;

          this.classify();

          if (res.data.data.total_count > 5 && this.page_size < res.data.data.total_count) {
            this.ifShowLoad = true;
          } else {
            this.ifShowLoad = false;
          }
          this.ifLoad = false;
        }).catch(function(error) {
          console.log(error);
        });
      },

      // 文章分类
      classify(){
        var that = this;
        this.$axios.get('/article/article-cate/index', {
          params: {
            'id' : this.article_pid
          }
        }).then(res => {
          this.menu_list = res.data.data.lists;

          // localStorage.setItem('article_list', JSON.stringify(this.result))
          for(var i=0; i<this.menu_list.length; i++){
            if(this.menu_list[i].id == this.pid_fore){
              that.active_idx = i;
              continue;
            }
          }

        }).catch(function(error) {
          console.log(error);
        });
      },

      loadMore() {
        this.ifLoad = true;
        this.getList(5);
      }
    }
  }
</script>

<style scoped>
  .nav-box {
    width: 100%;
    height: 3.7rem;
    padding-left: 3%;
    overflow-x: scroll;
    border-bottom: 0.05rem solid #e5e5e5;
  }

  .nav-box .scroll {
    display: inline-block;
    white-space: nowrap;
    height: 100%;
    font-size: 0;
    padding-right: 5%;
  }

  .nav-box .scroll .list {
    min-width: 5rem;
    height: 100%;
    box-sizing: border-box;
    display: inline-block;
    margin-right: 2rem;
    font-size: 1.5rem;
    color: #8d8d8d;
    line-height: 3.7rem;
    border-bottom: 0.2rem solid transparent;
    box-sizing: border-box;
    text-align: center;
  }

  .nav-box .scroll .list:last-child {
    margin-right: 0;
  }

  .nav-box .scroll .list.active {
    color: #480f32;
    border-color: #480f32;
  }

  .article-right-box {
    padding-bottom: 5rem;
  }

  .article-right-list {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 1.5rem 7%;
  }

  .article-right-list:not(:last-child) {
    border-bottom: 4px solid #f6f6f6;
  }

  .article-right-r {
    flex: 1;
    width: calc(100% - 10rem);
    height: 9rem;
    padding-top: 1rem;
    box-sizing: border-box;
    margin-right: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
  }

  .article-right-list .img-box {
    width: 9rem;
    height: 9rem;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
  }

  .article-right-list-title {
    font-size: 1.65rem;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .article-right-list-text {
    font-size: 1.3rem;
    line-height: 2rem;
    color: #999;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    word-break: break-all;
  }

  .more {
    margin-top: 0;
  }
</style>
