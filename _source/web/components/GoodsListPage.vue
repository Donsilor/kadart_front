<template>
  <div>
    <h2 class="engagement">Engagement Rings</h2>
    <div class="engagement-text">Find the diamond engagement ring or bridal set of her dreams from our selection of
      designer styles. Choose from classic solitaires with traditional round or princess‐cut diamonds, glistening
      halo‐framed Asscher or cushion‐cut diamonds, meaningful three‐stone looks, and much more.</div>

    <div class="components-box clf">
      <!-- 左侧选择区 -->
      <div class="commodity-left" v-if="0">
        <div class="refinements">Refinements</div>
        <div class="classify-box" v-bind:class="{'pack-up': ifOpenA}">
          <div class="tit clf">
            <i class="iconfont iconxiangshang fr" @click="controlOpenA()"></i>
          </div>

          <div class="D-box">
            <div class="child-b" v-for="item in arr">
              <i class="iconfont iconshanchu"></i>{{item}}
            </div>

            <div class="clear-all" v-if="arr.length != 0" @click="clearAll()">
              <i class="iconfont iconquxiao"></i>CLEAR ALL
            </div>
          </div>
        </div>

        <div class="refinements">Select Refinments</div>

        <div class="classify-box" v-bind:class="{'pack-up': item.isShowT}" v-for="(item, index) in dataItem" :key="index"
          v-if="index<3">
          <div class="tit clf" @click="ifShowF(index)">
            <div class="fl">{{item.form}}</div>
            <i class="iconfont iconxiangshang fr"></i>
          </div>

          <div class="D-box" v-for="(children, idx) in item.content" :key="idx">
            <div class="child-a clf" :class="[children.isChoose ? 'active' : '']" @click="ifChooseF(index, idx)">
              <div class="square fl">
                <i class="iconfont iconduihao" v-if="children.isChoose"></i>
              </div>
              <span class="square-text fl">{{children.text}}</span>
            </div>
          </div>
        </div>

        <div class="classify-box" v-bind:class="{'pack-up': ifOpenB}">
          <div class="tit clf" @click="controlOpenB()">
            <div class="fl">HOLIDAY DEALS</div>
            <i class="iconfont iconxiangshang fr"></i>
          </div>

          <div class="D-box">
            <div class="child-c" :class="index_c == index ? 'active' : ''" v-for="(item, index) in priceList" @click="clickC(index)">{{item.list}}</div>

            <div class="search-scope">
              <span class="color">$</span><input type="text" class="ipt" placeholder="low"> -
              <span class="color">$</span><input type="text" class="ipt" placeholder="high">
              <div class="search-btn">GO</div>
            </div>

            <div class="more">More...</div>
          </div>
        </div>

        <div class="classify-box" v-bind:class="{'pack-up': item.isShowT}" v-for="(item, index) in dataItem" :key="index"
          v-if="index>=3">
          <div class="tit clf" @click="ifShowF(index)">
            <div class="fl">{{item.form}}</div>
            <i class="iconfont iconxiangshang fr"></i>
          </div>

          <div class="D-box" v-for="(children, idx) in item.content" :key="idx">
            <div class="child-a clf" :class="[children.isChoose ? 'active' : '']"  @click="ifChooseF(index, idx)">
              <div class="square fl">
                <i class="iconfont iconduihao" v-if="children.isChoose"></i>
              </div>
              <span class="square-text fl">{{children.text}}</span>
            </div>
          </div>
        </div>

      </div>

      <!-- 右侧列表区 -->
      <div class="commodity-right fl">
        <div class="filtrate clf">
          <div class="filtrate-text fl"><span class="bold">{{totalNum}}</span> Items found for Engagement Rings</div>

          <div class="filtrate-condition fr clf">
           <div class="filtrate-child fl" :class="[filter_index == 0 || filter_index == 1 ? 'active' : '']" @click="sort(1)">
              <div class="filtrate-child-text fl">Price</div>
              <div class="triangle-wrap fl">
                <div class="triangle-box" :class="[filter_index == 0 ? 'on' : '']" @click.stop="sort(0)">
                  <i class="iconfont iconshengxu"></i>
                </div>
                <div class="triangle-box" :class="[filter_index == 1 ? 'on' : '']" @click.stop="sort(1)">
                  <i class="iconfont iconjiangxu"></i>
                </div>
              </div>
            </div>

            <div class="filtrate-child fl" :class="[filter_index == 2 || filter_index == 3 ? 'active' : '']" @click="sort(3)">
              <div class="filtrate-child-text fl">Popular</div>
              <div class="triangle-wrap fl">
                <div class="triangle-box" :class="[filter_index == 2 ? 'on' : '']" @click.stop="sort(2)">
                  <i class="iconfont iconshengxu"></i>
                </div>
                <div class="triangle-box" :class="[filter_index == 3 ? 'on' : '']" @click.stop="sort(3)">
                  <i class="iconfont iconjiangxu"></i>
                </div>
              </div>
            </div>

            <div class="filtrate-child fl" :class="[filter_index == 4 || filter_index == 5 ? 'active' : '']" @click="sort(5)">
              <div class="filtrate-child-text fl">Latest</div>
              <div class="triangle-wrap fl">
                <div class="triangle-box" :class="[filter_index == 4 ? 'on' : '']" @click.stop="sort(4)">
                  <i class="iconfont iconshengxu"></i>
                </div>
                <div class="triangle-box" :class="[filter_index == 5 ? 'on' : '']" @click.stop="sort(5)">
                  <i class="iconfont iconjiangxu"></i>
                </div>
              </div>
            </div>

            <div class="filtrate-child fl" :class="[filter_index == 6 || filter_index == 7 ? 'active' : '']" @click="sort(7)">
              <div class="filtrate-child-text fl">Integrated</div>
              <div class="triangle-wrap fl">
                <div class="triangle-box" :class="[filter_index == 6 ? 'on' : '']" @click.stop="sort(6)">
                  <i class="iconfont iconshengxu"></i>
                </div>
                <div class="triangle-box" :class="[filter_index == 7 ? 'on' : '']" @click.stop="sort(7)">
                  <i class="iconfont iconjiangxu"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="commodity-show clf">
          <div class="commodity-show-list fl" v-for="(item, index) in commodityItem.data" :key="index">
            <router-link :to="{ name: 'goods-detail', query: {id: commodityItem.data[index].id}}">
              <div class="img-box">
                <img :src=item.style_image alt="">
              </div>
              <div class="price"><span class="reference">Reference Price</span>{{item.sale_price}}</div>
              <div class="online">
                <span v-if="item.style_sn">{{item.style_sn}}</span>
              </div>
              <div class="explain">{{item.style_name}}</div>
              <div class="btn">VIEW DETAILS</div>
            </router-link>
          </div>
        </div>

        <div class="pages">
          <el-pagination v-if="totalNum != 0" :total="totalNum" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage1"
            :page-size="20" layout="total, prev, pager, next, jumper">
          </el-pagination>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Bus from './Bus.js'
  export default {
    data() {
      return {
        currentPage1: 1,
        totalPages: 1,
        totalNum: 0,
        ifOpenA: false,
        ifOpenB: false,
        filter: ['1_0','1_1','2_0','2_1','3_0','3_1','4_0','4_1'],
        filter_index: 1,
        dataItem: [{
            form: 'GENDER',
            isShowT: false,
            content: [{
              text: 'Black Friday Special(1)',
              isChoose: false
            }]
          },
          {
            form: 'GENDER',
            isShowT: false,
            content: [{
              text: 'Black Friday Special(2)',
              isChoose: false
            }]
          },
          {
            form: 'GENDER',
            isShowT: false,
            content: [{
                text: 'Black Friday Special(3)',
                isChoose: false
              },
              {
                text: 'Black Friday Special(4)',
                isChoose: false
              },
              {
                text: 'Black Friday Special(5)',
                isChoose: false
              },
            ]
          },
          {
            form: 'GENDER',
            isShowT: false,
            content: [{
                text: 'Black Friday Special(6)',
                isChoose: false
              },
              {
                text: 'Black Friday Special(7)',
                isChoose: false
              },
              {
                text: 'Black Friday Special(8)',
                isChoose: false
              },
            ]
          },
          {
            form: 'GENDER',
            isShowT: false,
            content: [{
                text: 'Black Friday Special(9)',
                isChoose: false
              },
              {
                text: 'Black Friday Special(10)',
                isChoose: false
              },
              {
                text: 'Black Friday Special(11)',
                isChoose: false
              },
            ]
          },
        ],
        arr: [], //选中的项目
        order: [], //选中的位置
        index_r: 0, // 筛选第几个
        commodityItem: [],
        priceList:[
          {'list': 'Under $50 (1)'},
          {'list': 'Under $50 (1)'},
          {'list': 'Under $50 (1)'},
          {'list': 'Under $50 (1)'},
          {'list': 'Under $50 (1)'},
          {'list': 'Under $50 (1)'},
          {'list': 'Under $50 (1)'},
          {'list': 'Under $50 (1)'}
        ],
        typeId: '',
        searchId:'',
        sortId:'',
        attrId: '',
        attrValue: '',
        priceRange: '',
        pageId: ''
      }
    },
    mounted(){
      var goods_id = localStorage.getItem('goods_id');
      var now_page = localStorage.getItem('now_page');
      var sort_id = localStorage.getItem('sort_id');

      console.log(goods_id)
      if(goods_id == null){
        this.searchId = ''
      }else{
        this.searchId = goods_id;
      }

      if(sort_id == null){
        this.sortId = '';
      }else{
        this.sortId = sort_id;
      }

      if(now_page == null){
        this.pageId = ''
      }else{
        this.pageId = now_page;
        this.currentPage1 = now_page-0
      }

	  var urlData = location.search;
	  var urlArr = urlData.split(/[?=&]/);
    urlArr.shift();
    for(var i=0; i<urlArr.length; i+=2){
      if(urlArr[i] == 'type_id'){
        this.typeId = urlArr[i+1]
      }else if(urlArr[i] == 'attr_id'){
        this.attrId = urlArr[i+1]
      }else if(urlArr[i] == 'attr_value'){
        this.attrValue = urlArr[i+1]
      }else if(urlArr[i] == 'price_range'){
        this.priceRange = urlArr[i+1]
      }
    }

      this.acquireData(this.searchId, '' , '', this.typeId, this.attrId, this.attrValue, this.priceRange);


      var self = this;
      Bus.$on('sendPriceVal', function(val){
        self.acquireData(val);
      })

    },
    methods: {
      acquireData(k_id,k_filter,k_page,k_type_id,K_attr_id,k_attr_value,k_price_range){
        var _self = this;
        _self.$axios.post('/goods/style/search',{
            keyword: k_id,
            sort: k_filter,
            page: k_page,
            type_id: k_type_id,
            attr_id: K_attr_id,
            attr_value: k_attr_value,
            price_range: k_price_range
        }).then(res =>{
            _self.commodityItem = res.data.data;
            // console.log(_self.commodityItem)
            this.totalNum = _self.commodityItem.total_count-0;
            // this.currentPage1 = _self.commodityItem.page;
            this.totalPages = _self.commodityItem.total_count-0;
        }).catch(function (error) {
            // console.log(error);
        });
      },

      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        localStorage.setItem('now_page',val);
        this.currentPage1 = val;
        this.acquireData(this.searchId, this.sortId, val, this.typeId, this.attrId, this.attrValue, this.priceRange)

        console.log(`当前页: ${val}`);
      },
      ifShowF(k) {
        this.dataItem[k].isShowT = !this.dataItem[k].isShowT
      },
      ifChooseF(i, j) {
        this.dataItem[i].content[j].isChoose = false;
        var s = i + '' + j;
        var result = this.order.some(o => {
          return s == o;
        })
        if (result) {
          this.arr.splice(this.order.indexOf(s), 1)
          this.order.splice(this.order.indexOf(s), 1)
        } else {
          this.dataItem[i].content[j].isChoose = true;
          this.order.push(s);
          var atems = this.dataItem[i].content[j].text;
          this.arr.push(atems);
        }
      },
      // 关闭第一项
      controlOpenA() {
        if (this.arr.length == 0) {

        } else {
          this.ifOpenA = !this.ifOpenA;
        }
      },
      // 清楚全部选项
      clearAll() {
        this.dataItem.map(o => {
          o.content.map(m => {
            m.isChoose = false
          })
        })
        this.order.length = 0;
        this.arr.length = 0;
      },
      // 关闭中间项
      controlOpenB() {
        this.ifOpenB = !this.ifOpenB;
      },
      sort(i) {
        var _self = this;
        _self.filter_index = i;
        localStorage.setItem('sort_id', this.filter[i]);
        _self.acquireData(this.searchId, this.filter[i] , this.pageId, this.typeId, this.attrId, this.attrValue, this.priceRange);
        console.log(789)
      },
      clickC(i){
        this.index_c = i;
      }
    }
  }
</script>

<style scoped>
  .engagement {
    font-family: Didot;
    font-size: 38px;
    color: #000;
    text-align: center;
    margin-top: 40px;
  }

  .engagement-text {
    font-size: 16px;
    color: #333;
    margin: 10px 60px;
    text-align: center;
    line-height: 24px;
  }

  .components-box {
    width: 1380px;
    margin: 0 auto;
    margin-top: 50px;
  }

  .commodity-left {
    width: 330px;
    border-top: 8px solid #808080;
    padding: 0 25px;
    box-sizing: border-box;
  }

  .refinements {
    font-size: 20px;
    color: #333333;
    line-height: 56px;
  }

  .commodity-left .tit {
    height: 40px;
    line-height: 40px;
    font-size: 12px;
    color: #333;
    padding: 0 4px;
    box-sizing: border-box;
    cursor: pointer;
  }

  .commodity-left .tit .iconfont {
    font-size: 20px;
  }

  .commodity-left .classify-box.pack-up .iconfont {
    transform: rotate(180deg);
  }

  .D-box {
    height: auto;
  }

  .commodity-left .classify-box.pack-up .D-box {
    height: 0;
    transition: all 1s;
    overflow: hidden;
  }

  .classify-box {
    border-top: 1px solid #808080;
  }

  .child-b {
    margin-left: 40px;
    line-height: 30px;
  }

  .child-b .iconfont {
    position: relative;
    top: -1px;
  }

  .child-a {
    margin-left: 40px;
    font-size: 12px;
    color: #808080;
    line-height: 40px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  .child-a.active{
    color: #480f33;
  }

  .child-a.active .square {
    border-color: #480f33;
  }

  .child-a.active .square-text {
    text-decoration: underline;
  }

  .child-a.active .iconfont {
    color: #480f33;
  }

  .child-c {
    margin-left: 40px;
    line-height: 30px;
    cursor: pointer;
    font-size: 12px;
    color: #808080;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .child-c.active{
    color: #480f33;
    text-decoration: underline;
  }

  .iconshanchu {
    color: #480f33;
    margin-right: 6px;
    font-size: 16px;
    position: relative;
    top: 1px;
  }

  .clear-all {
    width: 122px;
    height: 36px;
    border: 1px solid #480f33;
    margin: 10px 40px;
    border-radius: 4px;
    line-height: 30px;
    font-size: 12px;
    color: #480f33;
    text-align: center;
    cursor: pointer;
  }

  .clear-all .iconfont {
    font-size: 20px;
    position: relative;
    top: 3px;
  }

  .child-a .square {
    width: 18px;
    height: 18px;
    border: 1px solid #808080;
    text-align: center;
    line-height: 18px;
    margin-top: 6px;
  }

  .square-text {
    margin: -5px 0 0 5px;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .search-scope {
    height: 32px;
    margin: 10px 0;
  }

  .search-scope .color {
    color: #999;
  }

  .search-scope .ipt {
    width: 98px;
    height: 32px;
    border: 1px solid #480f33;
    border-radius: 4px;
    margin-left: 2px;
    padding: 0 4px;
    box-sizing: border-box;
  }

  .search-scope .ipt:last-of-type {
    border-radius: 4px 0 0 4px;
  }

  .search-scope .search-btn {
    display: inline-block;
    width: 42px;
    height: 32px;
    border: 3px solid #480f33;
    background-color: #f0f5fb;
    text-align: center;
    line-height: 28px;
    color: #808080;
    vertical-align: top;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
  }

  .more {
    font-size: 12px;
    color: #666;
    margin: 18px 40px;
    cursor: pointer;
  }

  .commodity-right{
    width: 100%;
  }
  .filtrate {
    /* width: 1030px; */
    width: 100%;
    height: 70px;
    border-top: 1px solid #808080;
    border-bottom: 1px solid #808080;
    line-height: 70px;
    padding: 0 50px 0 10px;
    box-sizing: border-box;
  }

  .filtrate-text {
    font-family: Didot;
    font-size: 16px;
    color: #000;
  }

  .filtrate-text .bold {
    font-family: Didot-B;
  }

  .filtrate-child {
    font-family: Didot-B;
    font-size: 16px;
    color: #999;
    margin-left: 50px;
    cursor: pointer;
  }

  .filtrate-child.active .filtrate-child-text {
    color: #480f32;
    text-decoration: underline;
  }

  .triangle-wrap {
    margin-left: 6px;
  }

  .triangle-box {
    width: 20px;
    height: 16px;
    text-align: center;
    line-height: 4px;
    overflow: hidden;
  }

  .triangle-box.on .iconfont {
    color: #555;
  }

  .triangle-box .iconfont {
    color: #c8c8c8;
  }

  .filtrate-child .triangle-box:first-child {
    margin-top: 20px;
    line-height: 28px;
  }

  .commodity-show {
    /* width: 960px; */
    margin: 30px auto;
  }

  .commodity-show-list {
    width: 294px;
    margin-bottom: 40px;
  }

  .commodity-show-list:not(:nth-child(4n+1)) {
    margin-left: 68px;
  }

  .commodity-show-list .img-box {
    width: 100%;
    height: 294px;
  }

  .commodity-show-list .price {
    font-family: Didot;
    font-size: 22px;
    color: #b64d52;
    margin-top: 10px;
    text-align: center;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .commodity-show-list .reference {
    font-family: Didot;
    font-size: 16px;
    color: #b64d52;
    margin-right: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .commodity-show-list .online {
    font-family: Didot;
    font-size: 14px;
    color: #daab60;
    font-style: italic;
    margin-top: 6px;
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .explain {
    font-family: Didot;
    height: 40px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 16px;
    color: #333;
    line-height: 20px;
  }

  .commodity-show-list .btn {
    width: 294px;
    height: 38px;
    background-color: #480f33;
    line-height: 38px;
    text-align: center;
    border-radius: 4px;
    font-size: 12px;
    color: #fff;
    margin-top: 10px;
  }

  .pages {
    height: 100px;
    text-align: center;
  }

  .el-pager .number {
    height: 24px;
    min-width: 24px;
    color: #999;
    line-height: 24px;
    margin-top: 2px;
  }

  .el-pager .number.active {
    background-color: #480F32;
    height: 24px !important;
    width: 24px !important;
    line-height: 24px;
    border-radius: 50%;
    padding: 0;
    margin: 2px 6px;
    color: #fff;
  }

  .el-pagination__jump {
    color: #480F32;
  }

  .pages input[type=number] {
    width: 30px;
    height: 30px !important;
    border-color: #480F32;
    padding: 0;
    color: #480F32;
  }
</style>
