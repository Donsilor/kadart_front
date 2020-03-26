<template>
  <div class="container">
    <azzd></azzd>

    <div class="img-box clf">
      <div class="list fl" v-if="index < max_page && index > min_page " v-for="(item, index) in items[type]">
        <img :src="item" alt="">
      </div>
    </div>

    <div class="pages">
      <el-pagination v-if="totalNum != 0" :total="totalNum" @size-change="handleSizeChange" @current-change="handleCurrentChange"
        :current-page.sync="currentPage1" :page-size="9" layout="total, prev, pager, next, jumper">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import data from './index.js'
import azzd from '~/components/azzd/index.vue'

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
    }
  },
  mounted(){
    this.getData();

  },
  methods:{
    getData(){
      this.items = JSON.parse(JSON.stringify(data.items));
      console.log(this.items)
      var path = location.href;
      var path_id = path.split('=')[1];
      console.log(path_id)

      if(path_id == 9){
        this.type = 'zoey';
      }else if(path_id == 10){
        this.type = 'heewon';
      }else if(path_id == 12){
        this.type = 'isha';
      }

      this.totalNum = this.items[this.type].length;
      console.log(this.totalNum)
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(123)
      this.min_page = (val-1)*9-1;
      this.max_page = val*9;
      this.getData();
      console.log(`当前页: ${val}`);
    },
  }

}

</script>

<style scoped>
  .list{
    position: relative;
    max-width: 500px;
    width: 32%;
    height: 500px;
    border: 1px solid sienna;
    box-sizing: border-box;
    margin-bottom: 20px;
    overflow: hidden;
  }
  .list:not(:nth-child(3n)){
    margin-right: 2%;
    /* margin-right: calc((100% - 1500px) / 2); */
  }
  img {
  	position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
  }

  .pages{
    margin: 80px auto;
    text-align: center;
  }
</style>
