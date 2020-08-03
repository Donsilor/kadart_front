<template>
  <div class="nav" @mouseleave="liveNav()">
    <div class="inline">
      <div v-if="navList.length > 0" class="nav-list fl" :class="[idx_r == 0 ? 'active' : '']" @mouseover="chooseMe(0)">
        <a href="/about-kadart">{{navList[0].title}}</a>
      </div>

      <div v-if="index>0" class="nav-list fl" :class="[idx_r == index ? 'active' : '']" v-for="(list, index) in navList" :key="index+'a'" @mouseover="chooseMe(index)">
        <a :href="list.url || 'javascript:;'" target="_blank" @click="noSearch(index,$event)">{{list.title}}</a>
      </div>
    </div>

    <div class="nav-box" v-if="isShow">
      <div class="clf">
        <div class="nav-classify fl" v-for="(item, index) in navList[idx_r].items" :key="index+'b'">
          <div class="nav-classify-child"><a href="javascript:;">{{item.title}}</a></div>
          <div class="nav-classify-child" v-for="(ite, ide) in item.items" :key="ide+'c'">
            <a :href="ite.url || 'javascript:;'" target="_blank" @click="noSearch('',$event)">{{ite.title}}</a>
          </div>
        </div>
      </div>
      <!-- <div class="nav-btn" v-if="isShowText"> -->
      <div class="nav-btn" v-if="0">
        <a :href="navList[idx_r].url || 'javascript:;'" target="_blank" @click="noSearch()">{{nav_text}}</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navList: [],
        isShow: false,
        idx_r: -1,
        isShowText: true,
        nav_text: 'Items found for'
      }
    },
    mounted(){
      var that = this;
      var list = JSON.parse(localStorage.getItem('navList_05'));
      if(!list){
        this.$axios.get('/common/menu/index', {
          params: {}
        }).then(res => {
          this.navList = res.data.data;
          localStorage.setItem('navList_05',JSON.stringify(this.navList));
          that.$emit('load','true');
        }).catch(function(error) {
          console.log(error);
        });
      }else{
        this.navList = list;
        that.$emit('load','true');
      }
    },
    methods: {
      chooseMe(i) {
        this.idx_r = i;

        switch(i){
          case(0):
            this.isShow = false;
            this.isShowText = false;
            break;
          case(1):
            this.isShow = true;
            this.isShowText = true;
            this.nav_text = 'VIEW ALL RINGS';
            break;
          case(2):
            this.isShow = true;
            this.isShowText = false;
            break;
          case(3):
            this.isShow = true;
            this.isShowText = true;
            this.nav_text = 'VIEW ALL EARRINGS';
            break;
          case(4):
            this.isShow = true;
            this.isShowText = false;
            break;
          case(5):
            this.isShow = true;
            this.isShowText = true;
            this.nav_text = 'VIEW ALL JADES';
            break;
          case(6):
            this.isShow = true;
            this.isShowText = true;
            this.nav_text = 'VIEW ALL PRODUCTS';
            break;
          case(7):
            this.isShow = true;
            this.isShowText = false;
            break;
          case(8):
            this.isShow = true;
            this.isShowText = false;
            break;
          case(9):
            this.isShow = true;
            this.isShowText = false;
            break;
        }
      },
      noSearch(i,e){
        sessionStorage.removeItem('page_id');
        sessionStorage.removeItem('sort_id');
        sessionStorage.setItem('nav_text', e.target.innerText);
        sessionStorage.removeItem('now_p');
        sessionStorage.removeItem('min_p');
        sessionStorage.removeItem('max_p');
      },
      liveNav(){
        this.isShow = false;
        this.idx_r = -1;
      },
      toArticle(i){
        localStorage.setItem('article', i)
        var url = location.pathname;

        if(url.indexOf('about-kadart') != -1){
          this.$router.go(0)
        }else{
          this.$router.push({
            path: '/about-kadart'
          })
        }
      }
    }
  }
</script>

<style scoped>
  .nav {
    width: 100%;
    min-width: 1000px;
    height: 50px;
    background-color: #eee;
    margin-top: 18px;
    text-align: center;
    position: relative;
  }

  .nav .inline {
    display: inline-block;
  }

  .nav-list {
    line-height: 48px;
    font-size: 12px;
    color: #333;
    padding: 0 10px;
    border-bottom: 2px solid transparent;
    box-sizing: border-box;
    cursor: pointer;
  }

  .nav-list.active {
    border-color: #7f004e;
    color: #7f004e;
  }

  .nav-list:not(:first-child) {
    margin-left: 20px;
  }

  .nav-box {
    position: absolute;
    top: 50px;
    z-index: 12;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    width: 1200px;
    border: 1px solid #eee;
    background-color: #fff;
    padding: 30px 40px;
    box-sizing: border-box;
    min-height: 500px;
  }

  .nav-box .nav-classify {
    width: 200px;
    text-align: left;
    line-height: 26px;
    font-size: 14px;
    color: #333;
  }

  .nav-box .nav-classify:not(:first-child) {
    margin-left: 80px;
  }

  .nav-box .nav-classify .nav-classify-child:first-child {
    margin-bottom: 10px;
  }

  .nav-box .nav-classify .nav-classify-child:first-child a {
    cursor: inherit;
    font-family: Didot;
    font-size: 16px;
    color: #999;
  }

  .nav-box .nav-classify .nav-classify-child:not(:first-child):hover {
    color: #7f004e;
    text-decoration: underline;
  }

  .nav-btn {
    height: 40px;
    border: 1px solid #480f33;
    padding: 0 10px;
    margin: 20px auto 0;
    font-size: 12px;
    color: #480f33;
    text-align: center;
    line-height: 40px;
    display: inline-block;
    cursor: pointer;
  }
</style>
