<template>
  <div>
    <h2 class="engagement" v-if="ifShowDescribe">{{seo.title}}</h2>
    <div class="engagement-text" v-if="ifShowDescribe">{{seo.description}}</div>

    <div class="components-box clf">
      <!-- 左侧选择区 -->
      <div class="commodity-left fl" v-if="0">
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
              <span class="color">$</span><input type="text" class="ipt" placeholder="low">
              <i>-</i>
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
            <div class="child-a clf" :class="[children.isChoose ? 'active' : '']" @click="ifChooseF(index, idx)">
              <div class="square fl">
                <i class="iconfont iconduihao" v-if="children.isChoose"></i>
              </div>
              <span class="square-text fl">{{children.text}}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 右侧列表区 -->
      <div class="commodity-right fl" v-loading="loading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0)">
        <div class="filtrate clf">
          <div class="filtrate-text fl" v-if="totalNum && nav_text">
            <span class="bold">{{totalNum}} Items found for </span>{{nav_text}}
          </div>

          <div class="filtrate-condition fr clf">
            <div class="filtrate-child fl" :class="[filter_index == index * 2 || filter_index == + index * 2 + 1 ? 'active' : '']"
              v-for="(item, index) in sort_type" :key="index" @click="sort(index)">
              <div class="filtrate-child-text fl">{{item}}</div>
              <div class="triangle-wrap fl">
                <div class="triangle-box" :class="[filter_index == index*2 ? 'on' : '']" @click.stop="sort(index, 'a')">
                  <i class="iconfont iconshengxu"></i>
                </div>
                <div class="triangle-box" :class="[filter_index == +index*2+1 ? 'on' : '']" @click.stop="sort(index, 'b')">
                  <i class="iconfont iconjiangxu"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="commodity-show clf">
          <div class="no-result" v-if="ifShowText">
            <div class="icon">
              <i class="iconfont iconfangdajing"></i>
            </div>
            <div class="text">No results, try another keyword.</div>
          </div>

          <div v-if="index >= 0" class="commodity-show-list fl" v-for="(item, index) in commodityItem.data" :key="index">
            <a :href="commodityItem.data[index].url">
              <div class="img-box">
                <img :src=item.style_image alt="">
              </div>
              <div class="price"><span class="reference">Reference Price</span>{{item.currency}}{{item.sale_price}}</div>
              <div class="online">
              </div>
              <div class="explain">{{item.style_name}}</div>
              <div class="btn">VIEW DETAILS</div>
            </a>
          </div>
        </div>

        <div class="pages">
          <el-pagination v-if="totalNum != 0" :total="totalNum" @size-change="handleSizeChange" @current-change="handleCurrentChange"
            :current-page.sync="currentPage1" :page-size="20" layout="total, prev, pager, next, jumper">
          </el-pagination>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Bus from '../../components/Bus.js'
  export default {
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
    data() {
      return {
        loading: false,
        // fullscreenLoading: true,
        currentPage1: 1,
        totalPages: 1,
        totalNum: 0,
        ifOpenA: false,
        ifOpenB: false,
        ifShowDescribe: false,
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
        priceList: [{
            'list': 'Under $50 (3)'
          },
          {
            'list': '$50 - $100 (135)'
          },
          {
            'list': '$100 - $250 (13)'
          },
          {
            'list': '$250 - $500 (13)'
          },
          {
            'list': '$500 - $750 (486)'
          },
          {
            'list': '$750 - $1000 (84)'
          },
          {
            'list': '$1000 - $2000 (8)'
          },
          {
            'list': '$2000 - $3000 (513)'
          },
          {
            'list': '$3000 - $4000 (456)'
          },
          {
            'list': '$4000 - $5000 (221)'
          }
        ],

        ifShowText: false,
        nav_text: '',
        seo: {
          "meta_title": '',
          "meta_word": '',
          "meta_desc": '',
          'title': '',
          'description': '',
        },
        typeId: '',
        keyword: '',
        attrId: '',
        attrValue: '',
        priceRange: '',
        pageId: 1,
        pageSize: 6,
        filter: ['1_0', '1_1', '2_0', '2_1', '3_0', '3_1', '4_0', '4_1'],
        filter_index: -1,
        sort_i: '',
        flag: false,
        sort_type: ['Price', 'Popular', 'Latest', 'Integrated']
      }
    },
    mounted() {
      window.addEventListener('scroll', this.scrollToTop);
      this.getData()
    },
    methods: {
      acquireData(k_type_id, k_keyword, k_filter, K_attr_id, k_attr_value, k_price_range, k_page, k_page_size) {
        if (k_keyword != undefined) {
          k_keyword = unescape(k_keyword);
        }
        var that = this;
        this.$axios.post('/goods/style/search', {
          type_id: k_type_id,
          keyword: k_keyword,
          sort: k_filter,
          attr_id: K_attr_id,
          attr_value: k_attr_value,
          price_range: k_price_range,
          page: k_page,
          page_size: k_page_size
        }).then(res => {
          that.loading = false;
          that.commodityItem = res.data.data;
          that.seo = res.data.data.seo;
          that.totalNum = res.data.data.total_count - 0;
          that.totalPages = res.data.data.page_count - 0;

          if (that.commodityItem.data[0] == undefined) {
            that.ifShowText = true;
          }
        }).catch(function(error) {
          console.log(error);
        });
      },

      getData() {
        var path = location.href;

        // 有问号url
        if (path.indexOf('?') != -1) {
          path = path.split('?')[1];
          var arr = path.split(/[=&]/);

          for (var i = 0; i < arr.length; i++) {
            if (arr[i] == 'search') {
              this.keyword = unescape(arr[i + 1]);
            }
            if (arr[i] == 'type_id') {
              this.typeId = arr[i + 1];
              sessionStorage.setItem('line_id', this.typeId);
            }
            if (arr[i] == 'attr_id') {
              this.attrId = arr[i + 1];
            }
            if (arr[i] == 'price_range') {
              this.priceRange = arr[i + 1];
            }
          }
        } else {
          // 无问号url
          path = path.slice(path.lastIndexOf('/') + 1);
          if (path.indexOf('=') == -1) {
            this.keyword = unescape(path);
          } else {
            if (path.indexOf('&') == -1) {
              var arr = path.split('=');
              if (arr[0] == 'type_id') {
                this.typeId = path.split('=')[1];
              } else if (arr[0] == 'attr_id') {
                this.attrId = path.split('=')[1];
              }
              sessionStorage.setItem('line_id', this.typeId);
            } else {
              var arr = path.split(/[=&]/);

              for (var i = 0; i < arr.length; i++) {
                if (arr[i] == 'type_id') {
                  this.typeId = arr[i + 1];
                  sessionStorage.setItem('line_id', this.typeId);
                }
                if (arr[i] == 'attr_id') {
                  this.attrId = arr[i + 1];
                }
                if (arr[i] == 'price_range') {
                  this.priceRange = arr[i + 1];
                }
              }
            }
          }
        }

        if (this.keyword) {
          this.nav_text = this.keyword;
        } else {
          var nav_text = sessionStorage.getItem('nav_text');
          this.nav_text = nav_text;
        }

        if (this.typeId == 2 || this.typeId == 4 || this.typeId == 6 || this.typeId == 8 || this.typeId == 15) {
          this.ifShowDescribe = true;
        }

        var page_id = sessionStorage.getItem('page_id');
        if (page_id) {
          this.pageId = page_id;
          this.currentPage1 = page_id - 0;
        }

        var sort_id = sessionStorage.getItem('sort_id');
        if (sort_id) {
          this.filter_index = sort_id;
        }

        this.acquireData(this.typeId, this.keyword, this.filter[this.filter_index], this.attrId, this.attrValue, this.priceRange,
          this.pageId, this.page_size)
      },

      handleSizeChange(val) {
        // console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        document.documentElement.scrollTop = document.body.scrollTop = 0;

        this.pageId = val;
        sessionStorage.setItem('page_id', val);
        this.getData();

        // console.log(`当前页: ${val}`);
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
      sort(i, j) {
        sessionStorage.removeItem('page_id');
        this.pageId = 1;
        this.currentPage1 = 1;

        if (j != 'b') {
          this.filter_index = i * 2;
        } else {
          this.filter_index = +i * 2 + 1;
        }

        if (!j) {
          if (this.sort_i == i && this.flag == false) {
            this.filter_index = +i * 2 + 1;
          }
          if (this.sort_i != i) {
            this.flag = true;
            this.filter_index = +i * 2;
          }
        }

        this.sort_i = i;
        this.flag = !this.flag;

        sessionStorage.setItem('sort_id', this.filter_index);

        this.getData();
      },
      clickC(i) {
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
    margin-top: 60px;
  }

  .engagement-text {
    font-size: 16px;
    color: #333;
    margin: 10px 60px;
    text-align: center;
    line-height: 24px;
  }

  .components-box {
    width: 100%;
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

  .child-a.active {
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

  .child-c.active {
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
    display: flex;
    align-items: center;
  }

  .search-scope .color {
    color: #999;
  }

  .search-scope .ipt {
    width: 90px;
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

  .search-scope i {
    margin: 0 10px;
  }

  .search-scope .search-btn {
    width: 42px;
    height: 32px;
    border: 3px solid #480f33;
    background-color: #f0f5fb;
    text-align: center;
    line-height: 28px;
    color: #808080;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    box-sizing: border-box;
  }

  .more {
    font-size: 12px;
    color: #666;
    margin: 18px 40px;
    cursor: pointer;
  }

  .commodity-right {
    /* width: calc(100% - 350px); */
    /* margin-left: 20px; */
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
    /* width: 294px; */
    margin-bottom: 40px;
    width: 24%;
  }

  .commodity-show-list:not(:nth-child(4n+1)) {
    margin-left: 1%;
  }

  .commodity-show-list .img-box {
    width: 96%;
    margin: 0 auto;
    /* height: 294px; */
  }

  .commodity-show-list .price {
    font-size: 22px;
    color: #b64d52;
    margin-top: 18px;
    text-align: center;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .commodity-show-list .reference {
    font-size: 16px;
    color: #b64d52;
    margin-right: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .commodity-show-list .online {
    font-size: 14px;
    color: #daab60;
    font-style: italic;
    height: 24px;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .explain {
    width: 100%;
    height: 48px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    font-size: 16px;
    color: #333;
    line-height: 24px;
    margin: 0 auto;
  }

  .commodity-show-list .btn {
    width: 100%;
    height: 38px;
    background-color: #480f33;
    line-height: 38px;
    text-align: center;
    border-radius: 4px;
    font-size: 12px;
    color: #fff;
    margin: 28px auto 0;
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

  .no-result {
    width: 100%;
    margin-top: 80px;
  }

  .no-result .icon {
    text-align: center;
  }

  .no-result .iconfont {
    font-size: 40px;
    color: #d2b8c7;
  }

  .no-result .text {
    font-size: 12px;
    color: #ae809a;
    text-align: center;
    margin-top: 20px;
  }
</style>
