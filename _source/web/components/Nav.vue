<template>
  <div class="nav" @mouseleave="isShow = false">
    <div class="inline">
      <div class="nav-list fl" v-for="(list, index) in navList" :key="'a'+index" @mouseover="chooseMe(index)">
        <span>{{list.title}}</span>
      </div>
    </div>

    <div class="nav-box" v-if="isShow">
      <div class="clf">
        <div class="nav-classify fl" v-for="(item, index) in navList[idx_r].items" :key="'b'+index">
          <div class="nav-classify-child"><a href="javascript:;">{{item.title}}</a></div>
          <div class="nav-classify-child" v-for="(ite, ide) in item.items" :key="'c'+ide">
            <a href="/goods-list">{{ite.title}}</a>
          </div>
        </div>
      </div>
      <div class="nav-btn" v-if="isShowText">{{nav_text}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navList: [{
          id: '',
          items: [{
            id: '',
            items: [{
              id: '',
              items: [],
              level: '',
              pid: '',
              title: '',
              url: ''
            }],
            level: '',
            pid: '',
            title: '',
            url: ''
          }],
          level: '',
          pid: '',
          title: '',
          url: ''
        },{
          id: '',
          items: [{
            id: '',
            items: [{
              id: '',
              items: [],
              level: '',
              pid: '',
              title: '',
              url: ''
            }],
            level: '',
            pid: '',
            title: '',
            url: ''
          }],
          level: '',
          pid: '',
          title: '',
          url: ''
        }],
        isShow: false,
        idx_r: 1,
        isShowText: true,
        nav_text: '123'
      }
    },
    created() {
      this.$axios.get('/common/menu/index', {
        params: {}
      }).then(res => {
        this.navList = res.data.data;
        // console.log(this.navList)
      }).catch(function(error) {
        // console.log(error);
      });
    },
    methods: {
      chooseMe(i) {
        this.idx_r = i;;

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
            this.isShow = false;
            this.isShowText = false;
            break;
          case(3):
            this.isShow = true;
            this.isShowText = true;
            this.nav_text = 'VIEW ALL EARRINGS';
            break;
          case(4):
            this.isShow = false;
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
            this.isShow = false;
            this.isShowText = false;
            break;
          case(9):
            this.isShow = false;
            this.isShowText = false;
            break;
        }
      }
    }
  }
</script>

<style>
  .nav {
    width: 100%;
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

  .nav-list:hover {
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
  }

  .nav-box .nav-classify {
    width: 200px;
    text-align: left;
    line-height: 24px;
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
