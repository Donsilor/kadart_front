<template>
  <div class="header clf">
    <div class="logo">
      <a href="/">
        <img src="../../static/index/logo.png" alt="">
      </a>
    </div>

    <div class="search" :class="ifShowHot ? 'searchHeight' : ''" @mouseover="showIpt()" @mouseleave="hideIpt()">
      <div ref="searchIcon">
        <i class="iconfont iconfangdajing"></i>SEARCH
      </div>
      <div class="search-move clf" :class="[ifShowText == false ? 'active' : '']" @mouseover="showIpt()">
        <div class="search-move-top">
          <div @click="startSearch()">
            <i class="iconfont iconfangdajing fl"></i>
          </div>
          <input class="ipt fl" type="text" v-on:input="monitorIpt()" v-model.trim="ipt" placeholder="SEARCH" @focus="onFocus()"
            @blur="onBlur()" value="123" @keyup.enter="startSearch()">
          <span class="del fl">
            <i class="iconfont iconquxiao" @click="del()"></i>
          </span>
        </div>
        <div class="hot" v-show="ifShowHot" @mouseover="showHot()" @mouseleave="hideHot()">
          <div class="first-list">Quick Search</div>
          <div class="hot-list" v-for="(item, index) in hotList" :key="index">
            <a :href="hotUrl[index]" target="_blank" @click="hotListA()">{{item}}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Bus from '../Bus.js'
  export default {
    data() {
      return {
        ifShowText: true,
        ifShowHot: false,
        ipt: '',
        iptVal: '',
        judge: true,
        ifHide: true,
        hotList: ['Wedding Ring', 'Necklace', 'Earring'],
        hotUrl:[
          'https://www.kadart.com/category/RINGS/type_id=2',
          'https://www.kadart.com/category/NECKLACES/type_id=4',
          'https://www.kadart.com/category/EARRINGS/type_id=6'
        ],
      }
    },
    methods: {
      showIpt() {
        this.ifShowText = false;

				var timer = setTimeout(() => {
					var _that = this;
					_that.$refs.searchIcon.style.display = 'none';
					clearTimeout(timer)
				},900)
      },
      hideIpt() {
        if (this.ifShowHot) {} else {
          this.ifShowText = true;
					var timertt = setTimeout(() => {
						var _that = this;
						_that.$refs.searchIcon.style.display = 'block';
						clearTimeout(timertt)
					},900)
        }
      },
      onFocus() {
        this.ifShowHot = true;
      },
      onBlur() {
        if (this.ifHide == true) {
          this.ifShowHot = false;
        }
      },
      showHot(){
        this.ifHide = false;
      },
      hideHot(){
        this.ifHide = true;
      },
      hotListA(){
        this.ifShowHot = false;
      },

      startSearch() {
        sessionStorage.removeItem('page_id');
				sessionStorage.removeItem('sort_id');
        sessionStorage.removeItem('nav_text');

        if(!(/^\s*$/.test(this.ipt))){
          location.href = '/search/'+this.ipt
        }

      },

      // 输入下方热词隐藏
      monitorIpt() {
        if (this.ipt != '') {
          this.ifShowHot = false
        } else {
          this.ifShowHot = true
        }
      },
      del() {
        this.ipt = '',
        this.iptval = ''
      },
    },
    watch: {
      '$route'(to, from) {
        this.$router.go(0);
      }
    },
    mounted() {
			var path = location.href;
			if(path.indexOf('search') != -1){
				if(path.indexOf('?') == -1){
					this.ipt = path.slice(path.lastIndexOf('/')+1);
				}else{
					this.ipt = path.split('=')[1];
				}
			}
		}
  }
</script>

<style>
  .header {
    position: relative;
  }
  .logo img{
    width: 100%;
    height: 100%;
  }

  .logo {
    font-size: 60px;
    width: 70px;
    height: 82px;
    margin: 0 auto;
  }

  .search {
    position: absolute;
    top: -12px;
    right: 40px;
    z-index: 20;
    width: 182px;
    height: 64px;
    font-size: 12px;
    line-height: 34px;
    color: #480f33;
    cursor: pointer;
    padding: 10px 0 0 30px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .search.searchHeight{
    height: 160px;
  }

  .search.on {
    /* overflow: inherit; */
  }

  .search .iconfont {
    margin-right: 10px;
    position: relative;
    overflow: hidden;
    top: 1px;
  }

  .search-move {
    position: absolute;
    top: 10px;
    right: -100%;
    z-index: 2;
    width: 160px;
    border: 1px solid #480F32;
    box-sizing: border-box;
    line-height: 28px;
    transition: right 1s;
    background-color: #fff;
  }

  .search-move.active {
    right: 0px;
    transition: all 1s;
  }

  .search-move .search-move-top {
    background-color: #F0E2ED;
    padding-left: 10px;
    box-sizing: border-box;
    height: 34px;
  }

  .search-move .iconfangdajing {
    margin-right: 8px;
    height: 20px;
    margin-top: 5px;
    line-height: 20px;
  }

  .search-move .ipt {
    width: 98px;
    height: 26px;
    font-size: 14px;
    color: #480F32;
    margin-top: 3px;
    background-color: #F0E2ED;
  }

  .search-move .del {
    width: 16px;
    height: 16px;
    border: 1px solid #999;
    margin-top: 8px;
    border-radius: 50%;
    position: relative;
  }

  .search-move .del .iconfont {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    color: #999;
  }

  .search-move .hot {
    position: absolute;
    top: 35px;
    left: 0;
    width: 100%;
    background-color: #fff;
    padding: 6px 0 10px;
    /* border: 1px solid #480F32; */
  }

  .search-move .first-list,
  .search-move .hot-list {
    width: 100%;
    height: 24px;
    font-size: 12px;
    color: #999;
    line-height: 24px;
    font-style: italic;
    padding-left: 30px;
    box-sizing: border-box;
  }

  .search-move .first-list {
    color: #333;
    background-color: #f0f0f0;
  }

  .search-move .hot-list:hover {
    color: #333;
    background-color: #f0f0f0;
  }
  .search-move .hot-list a{
    display: inline-block;
    width: 100%;
    height: 100%;
  }
</style>
