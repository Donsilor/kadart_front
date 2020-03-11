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
      <div class="filter-right" style="display: none;"></div>
    </div>

    <div class="goods-box clf" v-if="goods_num > 0">
      <div class="goods-list fl" v-for="(item, index) in commodityItem.data" :key="index">
        <div class="img-box" :style="{height : listHeight+'px'}">
          <a :href="commodityItem.data[index].url">
            <img :src=item.style_image alt="">
          </a>
        </div>
        <div class="img-tit">{{item.style_name}}</div>
        <div class="img-text">Reference Price</div>
        <div class="img-price">{{item.currency}} {{item.sale_price}}</div>
      </div>
    </div>

    <div class="more" v-if="ifShowLoad" @click="loadMore">
      <span>Load More</span>
      <i class="more-icon" v-if="ifLoad"></i>
    </div>

    <div v-if="goods_num == 0">
      <div class="no-more"></div>
      <div class="no-more-text">No results, try another keyword.</div>
    </div>
  </div>
</template>

<script>
  export default{
    head() {
      return {
        title: this.seo.meta_title || 'Quality gold,silver jewelry wholesale at factory price',
        meta: [{
            hid: 'description',
            name: 'description',
            content: this.seo.meta_desc ||
              'KADArt design, manufacture and wholesale gold,silver,brass and alloy jewelry with diamond,ruby,sapphire,zircon,crystal and rhinestone at very good price.'
          },
          {
            hid: 'keywords',
            name: 'keywords',
            content: this.seo.meta_word ||
              'jewelry factory, jewelry supplier, jewelry manufacturer,China jewelry wholesale,gold jewelry, silver jewelry, brass jewelry,best jewelry, fashion jewelry '
          }
        ]
      }
    },
    data (){
      return{
        // 排序类型
        filterType: 0,
        // 正序反序
        sortType: 1,
        // 获取数据
        commodityItem: {},
        typeId: '',
        keyword: '',
        attrId: '',
        attrValue: '',
        priceRange: '',
        pageId: 1,
        pageSize: 6,
        filter: ['1_0', '1_1', '2_0', '2_1', '3_0', '3_1', '4_0', '4_1'],
        filter_index: 0,
        listHeight: '',
        goods_num: '',
        ifLoad: false,
        ifShowLoad: true,
        seo: {
          "meta_title": '',
          "meta_word": '',
          "meta_desc": '',
          'title': '',
          'description': '',
        },
      }
    },
    mounted(){
      var that = this;
      var win_width = document.body.clientWidth;
      that.listHeight = Math.round(win_width*0.49);

      this.analysisUrl();
      this.acquireData(this.typeId, this.keyword, '1_0', this.attrId, this.attrValue, this.priceRange,this.pageId, this.pageSize);
    },
    methods:{
      // 排序筛选
      chooseFilterType(i){
        if(this.filterType == i){
          this.sortType = this.sortType == 1 ? 2 : 1 ;
        }else{
          this.sortType = 2
        }
        this.filterType = i;

        if(i==1 && this.sortType==1){
          this.filter_index = 1;
        }else if(i==1 && this.sortType==2){
          this.filter_index = 0;
        }else if(i==2 && this.sortType==1){
          this.filter_index = 3;
        }else if(i==2 && this.sortType==2){
          this.filter_index = 2;
        }else if(i==3 && this.sortType==1){
          this.filter_index = 5;
        }else if(i==3 && this.sortType==2){
          this.filter_index = 4;
        }else if(i==4 && this.sortType==1){
          this.filter_index = 7;
        }else if(i==4 && this.sortType==2){
          this.filter_index = 6;
        }

        this.analysisUrl();
        this.acquireData(this.typeId, this.keyword, this.filter[this.filter_index], this.attrId, this.attrValue, this.priceRange,this.pageId, this.pageSize);
      },
      // 解析url
      analysisUrl(){
        var urlData = location.search;

        if (urlData.indexOf('?') == -1) {
          urlData = location.pathname;
          var num = urlData.lastIndexOf('/');

          if(urlData.indexOf('search') != -1){
            this.keyword = urlData.slice(num + 1)
          }else{
            urlData = urlData.slice(num + 1);

            var urlArr = urlData.split(/&/);

            for (var i = 0; i < urlArr.length; i++) {
              var arrVal = urlArr[i].split(/=/);

              if (arrVal[0] == 'type_id') {
                this.typeId = arrVal[1]
              } else if (arrVal[0] == 'attr_id') {
                this.attrId = arrVal[1]
              } else if (arrVal[0] == 'attr_value') {
                this.attrValue = arrVal[1]
              } else if (arrVal[0] == 'price_range') {
                this.priceRange = arrVal[1]
              }
            }
          }
        } else {
          var urlArr = urlData.split(/[?=&]/);
          urlArr.shift();
          for (var i = 0; i < urlArr.length; i += 2) {
            if (urlArr[i] == 'type_id') {
              this.typeId = urlArr[i + 1]
            } else if (urlArr[i] == 'attr_id') {
              this.attrId = urlArr[i + 1]
            } else if (urlArr[i] == 'attr_value') {
              this.attrValue = urlArr[i + 1]
            } else if (urlArr[i] == 'price_range') {
              this.priceRange = urlArr[i + 1]
            }
          }
        }
      },
      // 获取列表数据
      acquireData(k_type_id, k_keyword, k_filter, K_attr_id, k_attr_value, k_price_range, k_page, k_page_size) {
        var that = this;
        that.$axios.post('/goods/style/search', {
          type_id: k_type_id,
          keyword: k_keyword,
          sort: k_filter,
          attr_id: K_attr_id,
          attr_value: k_attr_value,
          price_range: k_price_range,
          page: k_page,
          page_size: k_page_size
        }).then(res => {
          that.ifLoad = false;
          that.commodityItem = res.data.data;
          that.goods_num = res.data.data.total_count;
          that.seo = that.commodityItem.seo;
          // console.log(that.commodityItem)

          if(that.goods_num < 7){
            that.ifShowLoad = false;
          }

          // if (that.commodityItem.data[0] == undefined) {
            // this.ifShowText = true;
          // }
        }).catch(function(error) {
          // console.log(error);
        });
      },
      loadMore(){
        if(this.pageSize < this.goods_num){
          this.ifLoad = true;
          this.pageSize += 6;
          this.analysisUrl();
          this.acquireData(this.typeId, this.keyword, this.filter[this.filter_index], this.attrId, this.attrValue, this.priceRange,this.pageId, this.pageSize);
        }

        if(this.pageSize >= this.goods_num){
          this.ifShowLoad = false;
        }
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
    padding: 0 1rem;
    font-family: STKAITI;
    font-size: 1.45rem;
    color: #480f32;
    opacity: 0.5;
  }
  .filter-list:not(:last-child){
    border-right: 1px solid #aaa;
  }

  @media screen and (max-width: 350px) {
    .filter-left{
      padding-left: 0.4rem;
    }
    .filter-list{
      min-width: 4.6rem;
      padding: 0 0.5rem;
    }
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
    padding: 0 1% 1rem;
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
    height: 2.4rem;
    line-height: 2.8rem;
    font-family: STKAITI;
    font-size: 1.25rem;
    color: #480f32;
    opacity: 0.52;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .goods-list .img-text,
  .goods-list .img-price{
    height: 1.4rem;
    line-height: 1.4rem;
    font-family: STKAITI;
    font-size: 1.2rem;
    color: #3f3d3e;
  }

  .more{
    width: 100%;
    height: 5rem;
    background-color: #916F84;
    text-align: center;
    line-height: 5rem;
    font-size: 1.45rem;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    /* opacity: 0.6; */
  }

  .more-icon{
    width: 2rem;
    height: 2rem;
    margin-left: 1rem;
    background: url(../../static/goods-list/load.gif) no-repeat center;
    background-size: 100% 100%;
  }

  .no-more{
    width: 4rem;
    height: 4rem;
    margin: 5rem auto 2rem;
    background: url(../../static/index/icon/search-2.png) no-repeat center;
    background-size: 100% 100%;
  }
  .no-more-text{
    font-family: STKAITI;
    font-size: 1.8rem;
    color: #d2b8c7;
    text-align: center;
  }
</style>
