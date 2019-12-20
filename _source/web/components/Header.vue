<template>
  <div class="header clf">
    <div class="logo">
      <a href="/">
        <img src="../static/index/logo.png" alt="">
      </a>
    </div>
    <div class="search" :class="ifShowText == false ? 'on' : ''" @mouseover="showIpt()" @mouseout="hideIpt()">
      <span v-show="ifShowText">
        <i class="iconfont iconfangdajing"></i>SEARCH
      </span>
      <div class="search-move clf" :class="[ifShowText == false ? 'active' : '']" @mouseover="showIpt()">
        <i class="iconfont iconfangdajing fl" @click="startSearch()"></i>
        <input class="ipt fl" type="text" v-model="ipt" placeholder="SEARCH" @focus="onFocus()" @blur="onBlur()" value="iptVal">
        <span class="del fl">
          <i class="iconfont iconquxiao" @click="del()"></i>
        </span>
        <div class="hot" v-show="ifShowHot">
          <div class="first-list">Quick Search</div>
          <div class="hot-list">Wedding Ring</div>
          <div class="hot-list">Necklace</div>
          <div class="hot-list">Earring</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Bus from './Bus.js'
  export default{
    data(){
      return{
        ifShowText: true,
        ifShowHot: false,
        ipt: '',
        iptVal: '',
        judge: true
      }
    },
    methods:{
      showIpt(){
        this.ifShowText = false

      },
      hideIpt(){
        if(this.ifShowHot){
        }else{
          this.ifShowText = true
        }
      },
      onFocus(){
        this.ifShowHot = true
      },
      onBlur(){
        this.ifShowHot = false;
      },
      startSearch(){
        this.ifShowHot = false;
        this.iptVal = this.ipt;
        
        localStorage.setItem('goods_id',this.ipt)
        
        var location_r = window.location.href;

        if(location_r.indexOf('goods-list') == -1){
          this.$router.push({
            name: 'goods-list',
            params:{
              id:this.ipt
            }
          })
        }else{
          Bus.$emit('sendPriceVal', true)
        }

      },
      del(){
        this.ipt = '',
        this.iptval = ''
      },
    },
    mounted(){
    }
  }
</script>

<style>
  .header{
    position: relative;
  }
  .logo{
    font-size: 60px;
    width: 70px;
    height: 82px;
    margin: 0 auto;
  }
  .search{
    position: absolute;
    top: 50%;
    right: 40px;
    z-index: 20;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -z-transform: translateY(-50%);
    width: 160px;
    height: 34px;
    font-size: 12px;
    line-height: 34px;
    color: #480f33;
    cursor: pointer;
    padding-left: 10px;
    box-sizing: border-box;
    overflow: hidden;
  }
  .search.on{
    overflow: inherit;
  }
  .search .iconfont{
    margin-right: 10px;
    position: relative;
    overflow: hidden;
    top: 1px;
  }

  .search-move{
    position: absolute;
    top: 0;
    right: -100%;
    z-index: 2;
    width: 100%;
    height: 100%;
    border: 1px solid #480F32;
    padding-left: 10px;
    box-sizing: border-box;
    line-height: 28px;
    transition: right 1s;
    background-color: #F0E2ED;
  }
  .search-move.active{
    right: 0;
    transition: all 1s;
  }
  .search-move .iconfangdajing{
    margin-right: 8px;
    height: 20px;
    margin-top: 5px;
    line-height: 20px;
  }
  .search-move .ipt{
    width: 98px;
    height: 26px;
    font-size: 14px;
    color: #480F32;
    margin-top: 3px;
    background-color: #F0E2ED;
  }
  .search-move .del{
    width: 16px;
    height: 16px;
    border: 1px solid #999;
    margin-top: 8px;
    border-radius: 50%;
    position: relative;
  }
  .search-move .del .iconfont{
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

  .search-move .hot{
    position: absolute;
    top: 34px;
    left: 0;
    width: 100%;
    background-color: #fff;
    padding: 6px 0 10px;
    /* border: 1px solid #480F32; */
  }
  .search-move .first-list,
  .search-move .hot-list{
    width: 100%;
    height: 24px;
    font-size: 12px;
    color: #999;
    line-height: 24px;
    font-style: italic;
    padding-left: 30px;
    box-sizing: border-box;
  }
  .search-move .first-list{
    color: #333;
    background-color: #f0f0f0;
  }
  .search-move .hot-list:hover{
    color: #333;
    background-color: #f0f0f0;
  }
</style>
