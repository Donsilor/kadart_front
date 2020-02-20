<template>
  <div class="goods-list-content">
    <div class="filter">
      <div class="filter-left">
        <div class="filter-list" :class="filterType == 1 ? 'active' : ''" @click="chooseFilterType(1)">
          <div class="filter-type">Price</div>
          <div class="icon-box" :class="sortType == 2 && filterType == 1 ? 'on' : ''">
            <div class="icon icon-up"></div>
            <div class="icon icon-down"></div>
          </div>
        </div>

        <div class="filter-list" :class="filterType == 2 ? 'active' : ''" @click="chooseFilterType(2)">
          <div class="filter-type">Popular</div>
          <div class="icon-box" :class="sortType == 2 && filterType == 2 ? 'on' : ''">
            <div class="icon icon-up"></div>
            <div class="icon icon-down"></div>
          </div>
        </div>

        <div class="filter-list" :class="filterType == 3 ? 'active' : ''" @click="chooseFilterType(3)">
          <div class="filter-type">Latest</div>
          <div class="icon-box" :class="sortType == 2 && filterType == 3 ? 'on' : ''">
            <div class="icon icon-up"></div>
            <div class="icon icon-down"></div>
          </div>
        </div>

        <div class="filter-list" :class="filterType == 4 ? 'active' : ''" @click="chooseFilterType(4)">
          <div class="filter-type">Integrated</div>
          <div class="icon-box" :class="sortType == 2 && filterType == 4 ? 'on' : ''">
            <div class="icon icon-up"></div>
            <div class="icon icon-down"></div>
          </div>
        </div>
      </div>
      <div class="filter-right"></div>
    </div>

    <div class="goods-box clf">
      <div class="goods-list fl">
        <div class="img-box">
          <img src="../../static/goods-list/goods-list_01.jpg" alt="">
        </div>
        <div class="img-tit">Diamond Accent Beaded "MOM"</div>
        <div class="img-text">Reference Price</div>
        <div class="img-price">$59.25</div>
      </div>

      <div class="goods-list fl">
        <div class="img-box">
          <img src="../../static/goods-list/goods-list_01.jpg" alt="">
        </div>
        <div class="img-tit">Diamond Accent Beaded "MOM"</div>
        <div class="img-text">Reference Price</div>
        <div class="img-price">$59.25</div>
      </div>

      <div class="goods-list fl">
        <div class="img-box">
          <img src="../../static/goods-list/goods-list_01.jpg" alt="">
        </div>
        <div class="img-tit">Diamond Accent Beaded "MOM"</div>
        <div class="img-text">Reference Price</div>
        <div class="img-price">$59.25</div>
      </div>

      <div class="goods-list fl">
        <div class="img-box">
          <img src="../../static/goods-list/goods-list_01.jpg" alt="">
        </div>
        <div class="img-tit">Diamond Accent Beaded "MOM"</div>
        <div class="img-text">Reference Price</div>
        <div class="img-price">$59.25</div>
      </div>

      <div class="goods-list fl">
        <div class="img-box">
          <img src="../../static/goods-list/goods-list_01.jpg" alt="">
        </div>
        <div class="img-tit">Diamond Accent Beaded "MOM"Diamond Accent Beaded "MOM"</div>
        <div class="img-text">Reference Price</div>
        <div class="img-price">$59.25</div>
      </div>

      <div class="goods-list fl">
        <div class="img-box">
          <img src="../../static/goods-list/goods-list_01.jpg" alt="">
        </div>
        <div class="img-tit">Diamond Accent Beaded "MOM"</div>
        <div class="img-text">Reference Price</div>
        <div class="img-price">$59.25</div>
      </div>
    </div>

    <img src="" alt="">

    <div class="more">Load More</div>
  </div>
</template>

<script>
  export default{
    data (){
      return{
        filterType: 0,
        sortType: 1,
      }
    },
    methods:{
      chooseFilterType(i){
        if(this.filterType == i){
          this.sortType = this.sortType == 1 ? 2 : 1 ;
        }else{
          this.sortType = 2
        }
        this.filterType = i;
      }
    }
  }
</script>

<style>
  .goods-list-content{
    margin-top: 1.9rem;
  }

  .filter{
    width: 100%;
    height: 5rem;
    padding-right: 4%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #aaa;
    border-bottom: 1px solid #aaa;
  }

  .filter-left{
    width: 86%;
    height: 100%;
    display: flex;
    align-items: center;
  }
  .filter-list{
    /* width: 25%; */
    min-width: 6rem;
    height: 1.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem 0 1rem;
    opacity: 0.5;
  }
  .filter-list:not(:last-child){
    border-right: 1px solid #aaa;
  }

  .filter-list.active{
    opacity: 1;
  }

  .icon-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    padding-top: 0.4rem;
    /* position: relative; */
  }

  .icon-box .icon{
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 0.1rem;
  }

  .icon-box .icon-up{
    background: url(../../static/goods-list/up.png) no-repeat center;
    background-size: 1.5rem 1.5rem;
    display: none;
  }
  .icon-box .icon-down{
    background: url(../../static/goods-list/down.png) no-repeat center;
    background-size: 1.5rem 1.5rem;
  }

  .icon-box.on .icon-up{
    display: block;
  }
  .icon-box.on .icon-down{
    display: none;
  }

  .filter-right{
    width: 2rem;
    height: 1.7rem;
    background: url(../../static/goods-list/filter.png) no-repeat center;
    background-size: 100% 100%;
  }

  .goods-box{
    width: 100%;
    margin-top: 1.4rem;
    padding: 0 1% 5rem;
  }
  .goods-list{
    width: 49%;
    margin-bottom: 2rem;
  }
  .goods-list:nth-child(even){
    margin-left: 2%;
  }

  .goods-list .img-box{
    width: 100%;
    height: 17rem;
    border: 1px solid #aaa;
    position: relative;
    overflow: hidden;
  }
  .goods-list .img-box img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }

  .goods-list .img-tit{
    height: 3rem;
    line-height: 3.4rem;
    font-family: STKAITI;
    font-size: 1.25rem;
    color: #480f32;
    opacity: 0.52;
    overflow: hidden;
    white-space: nowrap;
  }
  .goods-list .img-text,
  .goods-list .img-price{
    height: 1.4rem;
    line-height: 1.4rem;
    font-family: STKAITI;
    font-size: 0.145rem;
    color: #3f3d3e;
  }

  .more{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 5rem;
    background-color: #480f32;
    text-align: center;
    line-height: 5rem;
    font-size: 1.45rem;
    color: #fff;
  }
</style>
