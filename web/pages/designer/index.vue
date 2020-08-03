<template>
  <div class="container">
    <azzd></azzd>

    <div class="img-box clf">
      <div class="img-list fl" :style="{height: e_height+'px',marginBottom: e_margin+'px'}" v-if="index < max_page && index > min_page" v-for="(item, index) in items[type]" :key="index">
        <img :src="item" alt="" @click="showImg(index)">
      </div>
    </div>

    <div class="pages">
      <el-pagination v-if="totalNum != 0" :total="totalNum" @size-change="handleSizeChange" @current-change="handleCurrentChange"
        :current-page.sync="currentPage1" :page-size="9" layout="total, prev, pager, next, jumper">
      </el-pagination>
    </div>

    <div class="popup" v-if="if_open" @click="openFn($event)">
      <div class="pop-img-box">
        <div class="layer">
          <img class="pop-img" :src="e_src" alt="">
        </div>
        <div class="open">
          <i class="iconfont iconquxiao"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from './index.js'
import azzd from '~/components/azzd/index.vue'
import Bus from '~/components/Bus.js'

export default {
  components: {
    azzd
  },
  data(){
    return{
        min_page: -1,
        max_page: 9,
        currentPage1: 1,
        totalNum: 0,
        items: {},
        type: 'a',
        e_height: 680,
        e_margin: 20,
        if_open: false,
        e_src: ''
    }
  },
  mounted(){
    var min = sessionStorage.getItem('min_p');
    var max = sessionStorage.getItem('max_p');
    if(min){
      this.min_page = min;
    }
    if(max){
      this.max_page = max;
    }

    var page = sessionStorage.getItem('now_p');
    if(page){
      this.currentPage1 = page-0;
    }

    this.getData();
    var that = this;
    var list_box = document.getElementsByClassName('img-box')[0];
    this.e_height = list_box.clientWidth * 0.32 * 1.5;
    this.e_margin = list_box.clientWidth * 0.02;

   Bus.$on('designer', function(){
     var list_box = document.getElementsByClassName('img-box')[0];
     that.e_height = list_box.clientWidth * 0.32 * 1.5;
     that.e_margin = list_box.clientWidth * 0.02;
   })
  },
  methods:{
    getData(){
      this.items = JSON.parse(JSON.stringify(data.items));

      var path = location.href;
      var path_id = path.split('=')[1];
      // console.log(path_id)

      if(path_id == 2){
        this.type = 'zoey';
      }else if(path_id == 4){
        this.type = 'heewon';
      }else if(path_id == 6){
        this.type = 'isha';
      }

      this.totalNum = this.items[this.type].length;

    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.min_page = (val-1)*9-1;
      this.max_page = val*9;
      sessionStorage.setItem('now_p', val);
      sessionStorage.setItem('min_p', this.min_page);
      sessionStorage.setItem('max_p', this.max_page);
      document.documentElement.scrollTop = document.body.scrollTop = 0;
      this.getData();
      // console.log(`当前页: ${val}`);
    },
    showImg(k){
      var that = this;
      that.if_open = true;
      that.e_src = this.items[this.type][k];
    },
    openFn(z){
      var that = this;
      var img = document.getElementsByClassName('pop-img')[0];
      if(z.target != img){
        that.if_open = false;
      }
    }
  }

}

</script>

<style scoped>
  .img-box{
    margin-top: 40px;
    /* padding-top: 30px; */
  }
  .img-list{
    position: relative;
    max-width: 500px;
    width: 32%;
    height: 750px;
    border: 1px solid rgba(72, 15, 50, 0.3);
    box-sizing: border-box;
    margin-bottom: 20px;
    overflow: hidden;
  }
  .img-list:not(:nth-child(3n)){
    margin-right: 2%;
    /* margin-right: calc((100% - 1500px) / 2); */
  }
  .img-list img {
  	position: absolute;
    top: 50%;
    left: 0;
    z-index: 2;
    width: 100%;
    transform: translateY(-50%);
  }

  .pages{
    margin: 80px auto;
    text-align: center;
  }

  .popup{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    box-sizing: border-box;
  }

  .pop-img-box{
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    width: 800px;
    height: 800px;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  .layer{
    position: relative;
     width: 100%;
     height: 100%;
     overflow-y: scroll;
  }
  .layer::-webkit-scrollbar {display:none}
  .pop-img-box img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: auto;
  }
  .open{
    position: absolute;
    top: 0;
    right: 80px;
    z-index: 3;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #e8e8e8;
    cursor: pointer;
  }
  .open i{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    color: rgb(72, 15, 50);
    font-weight: bold;
  }
</style>
