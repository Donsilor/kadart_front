(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{324:function(t,e,o){var content=o(327);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("e52bc7a2",content,!0,{sourceMap:!1})},326:function(t,e,o){"use strict";var n=o(324);o.n(n).a},327:function(t,e,o){(t.exports=o(19)(!1)).push([t.i,".ad{height:288px;margin-top:20px;border-bottom:1px solid #e2eaf0}.ad .swiper{width:100%;height:288px;overflow:inherit}.ad .swiper-wrapper{width:100%;height:254px}.ad .swiper-slide{height:240px}.ad .swiper-slide img{width:100%;height:100%}.ad .swiper-pagination{float:left;height:26px;position:inherit;margin:0 20px}.ad .swiper-pagination-bullet{width:12px;height:12px;background-color:#fff;border-radius:12px;opacity:1;border:1px solid #480f33;margin:7px 3px 0}.ad .swiper-pagination-bullet-active{background-color:#480f33!important}.ad .pos{width:100%;height:26px;text-align:center;font-size:0}.pos .inline{display:inline-block;height:100%}.ad .swiper-button-next,.ad .swiper-button-prev{position:relative;background-image:none!important;height:26px;width:26px;margin:0;top:0;left:0;bottom:0;right:0}.iconyou2,.iconzuo2{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);font-size:22px;color:#480f33}",""])},328:function(t,e,o){"use strict";var n={data:function(){return{banners:[],adv_id:2,swiperOptionTh:{loop:!0,autoplay:{stopOnLastSlide:!0},slidesPerView:"auto",centeredSlides:!0,spaceBetween:30,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChange:function(){},tap:function(){}}}}},mounted:function(){this.getAdData()},methods:{getAdData:function(){var t=this,e=localStorage.getItem("line_id");e&&(this.adv_id=e),this.$axios.get("/common/advert-images/banner",{params:{adv_id:"12",type_id:this.adv_id}}).then((function(e){t.banners=e.data})).catch((function(t){}))}}},r=(o(326),o(28)),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ad"},[this.banners&&0!=this.banners?e("div",{directives:[{name:"swiper",rawName:"v-swiper:hisSwiper",value:this.swiperOptionTh,expression:"swiperOptionTh",arg:"hisSwiper"}]},[e("div",{staticClass:"swiper-wrapper"},this._l(this.banners.data,(function(t){return e("div",{staticClass:"swiper-slide"},[e("a",{attrs:{href:t.adv_url||"javascript:;",target:"_blank"}},[e("img",{attrs:{src:t.adv_image}})])])})),0),this._v(" "),this._m(0)]):this._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pos"},[e("div",{staticClass:"inline"},[e("div",{staticClass:"swiper-button-prev fl"},[e("i",{staticClass:"iconfont iconzuo2"})]),this._v(" "),e("div",{staticClass:"swiper-pagination swiper-pagination-bullets fl"}),this._v(" "),e("div",{staticClass:"swiper-button-next fl"},[e("i",{staticClass:"iconfont iconyou2"})])])])}],!1,null,null,null);e.a=component.exports},345:function(t,e,o){var content=o(374);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("29d75253",content,!0,{sourceMap:!1})},373:function(t,e,o){"use strict";var n=o(345);o.n(n).a},374:function(t,e,o){(t.exports=o(19)(!1)).push([t.i,".engagement[data-v-6e0f9d1d]{font-family:Didot;font-size:38px;color:#000;text-align:center;margin-top:60px}.engagement-text[data-v-6e0f9d1d]{font-size:16px;color:#333;margin:10px 60px;text-align:center;line-height:24px}.components-box[data-v-6e0f9d1d]{width:1380px;margin:50px auto 0}.commodity-left[data-v-6e0f9d1d]{width:330px;border-top:8px solid grey;padding:0 25px;box-sizing:border-box}.refinements[data-v-6e0f9d1d]{font-size:20px;color:#333;line-height:56px}.commodity-left .tit[data-v-6e0f9d1d]{height:40px;line-height:40px;font-size:12px;color:#333;padding:0 4px;box-sizing:border-box;cursor:pointer}.commodity-left .tit .iconfont[data-v-6e0f9d1d]{font-size:20px}.commodity-left .classify-box.pack-up .iconfont[data-v-6e0f9d1d]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.D-box[data-v-6e0f9d1d]{height:auto}.commodity-left .classify-box.pack-up .D-box[data-v-6e0f9d1d]{height:0;-webkit-transition:all 1s;transition:all 1s;overflow:hidden}.classify-box[data-v-6e0f9d1d]{border-top:1px solid grey}.child-b[data-v-6e0f9d1d]{margin-left:40px;line-height:30px}.child-b .iconfont[data-v-6e0f9d1d]{position:relative;top:-1px}.child-a[data-v-6e0f9d1d]{margin-left:40px;font-size:12px;color:grey;line-height:40px;margin-bottom:10px;cursor:pointer}.child-a.active[data-v-6e0f9d1d]{color:#480f33}.child-a.active .square[data-v-6e0f9d1d]{border-color:#480f33}.child-a.active .square-text[data-v-6e0f9d1d]{text-decoration:underline}.child-a.active .iconfont[data-v-6e0f9d1d]{color:#480f33}.child-c[data-v-6e0f9d1d]{margin-left:40px;line-height:30px;cursor:pointer;font-size:12px;color:grey;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.child-c.active[data-v-6e0f9d1d]{color:#480f33;text-decoration:underline}.iconshanchu[data-v-6e0f9d1d]{color:#480f33;margin-right:6px;font-size:16px;position:relative;top:1px}.clear-all[data-v-6e0f9d1d]{width:122px;height:36px;border:1px solid #480f33;margin:10px 40px;border-radius:4px;line-height:30px;font-size:12px;color:#480f33;text-align:center;cursor:pointer}.clear-all .iconfont[data-v-6e0f9d1d]{font-size:20px;position:relative;top:3px}.child-a .square[data-v-6e0f9d1d]{width:18px;height:18px;border:1px solid grey;text-align:center;line-height:18px;margin-top:6px}.square-text[data-v-6e0f9d1d]{margin:-5px 0 0 5px;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.search-scope[data-v-6e0f9d1d]{height:32px;margin:10px 0}.search-scope .color[data-v-6e0f9d1d]{color:#999}.search-scope .ipt[data-v-6e0f9d1d]{width:98px;height:32px;border:1px solid #480f33;border-radius:4px;margin-left:2px;padding:0 4px;box-sizing:border-box}.search-scope .ipt[data-v-6e0f9d1d]:last-of-type{border-radius:4px 0 0 4px}.search-scope .search-btn[data-v-6e0f9d1d]{display:inline-block;width:42px;height:32px;border:3px solid #480f33;background-color:#f0f5fb;text-align:center;line-height:28px;color:grey;vertical-align:top;border-radius:0 4px 4px 0;cursor:pointer}.more[data-v-6e0f9d1d]{font-size:12px;color:#666;margin:18px 40px;cursor:pointer}.commodity-right[data-v-6e0f9d1d],.filtrate[data-v-6e0f9d1d]{width:100%}.filtrate[data-v-6e0f9d1d]{height:70px;border-top:1px solid grey;border-bottom:1px solid grey;line-height:70px;padding:0 50px 0 10px;box-sizing:border-box}.filtrate-text[data-v-6e0f9d1d]{font-family:Didot;font-size:16px;color:#000}.filtrate-child[data-v-6e0f9d1d],.filtrate-text .bold[data-v-6e0f9d1d]{font-family:Didot-B}.filtrate-child[data-v-6e0f9d1d]{font-size:16px;color:#999;margin-left:50px;cursor:pointer}.filtrate-child.active .filtrate-child-text[data-v-6e0f9d1d]{color:#480f32;text-decoration:underline}.triangle-wrap[data-v-6e0f9d1d]{margin-left:6px}.triangle-box[data-v-6e0f9d1d]{width:20px;height:16px;text-align:center;line-height:4px;overflow:hidden}.triangle-box.on .iconfont[data-v-6e0f9d1d]{color:#555}.triangle-box .iconfont[data-v-6e0f9d1d]{color:#c8c8c8}.filtrate-child .triangle-box[data-v-6e0f9d1d]:first-child{margin-top:20px;line-height:28px}.commodity-show[data-v-6e0f9d1d]{margin:30px auto}.commodity-show-list[data-v-6e0f9d1d]{width:294px;margin-bottom:40px}.commodity-show-list[data-v-6e0f9d1d]:not(:nth-child(4n+1)){margin-left:68px}.commodity-show-list .img-box[data-v-6e0f9d1d]{width:100%;height:294px}.commodity-show-list .price[data-v-6e0f9d1d]{font-size:22px;margin-top:18px;text-align:center;width:100%}.commodity-show-list .price[data-v-6e0f9d1d],.commodity-show-list .reference[data-v-6e0f9d1d]{font-family:Didot;color:#b64d52;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.commodity-show-list .reference[data-v-6e0f9d1d]{font-size:16px;margin-right:10px}.commodity-show-list .online[data-v-6e0f9d1d]{font-size:14px;color:#daab60;font-style:italic;height:24px;text-overflow:ellipsis;white-space:nowrap}.commodity-show-list .online[data-v-6e0f9d1d],.explain[data-v-6e0f9d1d]{font-family:Didot;line-height:24px;overflow:hidden}.explain[data-v-6e0f9d1d]{height:48px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;font-size:16px;color:#333}.commodity-show-list .btn[data-v-6e0f9d1d]{width:294px;height:38px;background-color:#480f33;line-height:38px;text-align:center;border-radius:4px;font-size:12px;color:#fff;margin-top:28px}.pages[data-v-6e0f9d1d]{height:100px;text-align:center}.el-pager .number[data-v-6e0f9d1d]{height:24px;min-width:24px;color:#999;line-height:24px;margin-top:2px}.el-pager .number.active[data-v-6e0f9d1d]{background-color:#480f32;height:24px!important;width:24px!important;line-height:24px;border-radius:50%;padding:0;margin:2px 6px;color:#fff}.el-pagination__jump[data-v-6e0f9d1d]{color:#480f32}.pages input[type=number][data-v-6e0f9d1d]{width:30px;height:30px!important;border-color:#480f32;padding:0;color:#480f32}.no-result[data-v-6e0f9d1d]{width:100%;margin-top:80px}.no-result .icon[data-v-6e0f9d1d]{text-align:center}.no-result .iconfont[data-v-6e0f9d1d]{font-size:40px;color:#d2b8c7}.no-result .text[data-v-6e0f9d1d]{font-size:12px;color:#ae809a;text-align:center;margin-top:20px}",""])},387:function(t,e,o){"use strict";o.r(e);var n=o(329),r=o(330),d=o(331),l=o(328),c=(o(179),o(180),o(325)),h={data:function(){return{loading:!1,currentPage1:1,totalPages:1,totalNum:0,ifOpenA:!1,ifOpenB:!1,filter:["1_0","1_1","2_0","2_1","3_0","3_1","4_0","4_1"],filter_index:-1,flag:!0,sort_i:0,ifShowDescribe:!1,dataItem:[{form:"GENDER",isShowT:!1,content:[{text:"Black Friday Special(1)",isChoose:!1}]},{form:"GENDER",isShowT:!1,content:[{text:"Black Friday Special(2)",isChoose:!1}]},{form:"GENDER",isShowT:!1,content:[{text:"Black Friday Special(3)",isChoose:!1},{text:"Black Friday Special(4)",isChoose:!1},{text:"Black Friday Special(5)",isChoose:!1}]},{form:"GENDER",isShowT:!1,content:[{text:"Black Friday Special(6)",isChoose:!1},{text:"Black Friday Special(7)",isChoose:!1},{text:"Black Friday Special(8)",isChoose:!1}]},{form:"GENDER",isShowT:!1,content:[{text:"Black Friday Special(9)",isChoose:!1},{text:"Black Friday Special(10)",isChoose:!1},{text:"Black Friday Special(11)",isChoose:!1}]}],arr:[],order:[],index_r:0,commodityItem:[],priceList:[{list:"Under $50 (1)"},{list:"Under $50 (1)"},{list:"Under $50 (1)"},{list:"Under $50 (1)"},{list:"Under $50 (1)"},{list:"Under $50 (1)"},{list:"Under $50 (1)"},{list:"Under $50 (1)"}],keyword:"",typeId:"",searchId:"",sortId:"",attrId:"",attrValue:"",priceRange:"",pageId:1,line_id:2,pageSize:20,ifShowText:!1,nav_text:"Items found for",seo:{meta_title:"",meta_word:"",meta_desc:"",title:"",description:""}}},mounted:function(){var t=localStorage.getItem("goods_id"),e=localStorage.getItem("now_page"),o=localStorage.getItem("sort_id"),n=localStorage.getItem("nav_text");n&&(this.nav_text=n);var r=this.$route.query.type_id;this.keyword=this.$route.query.keyword,null!=this.keyword&&(this.loading=!0),r?(this.line_id=r,localStorage.setItem("line_id",this.line_id)):localStorage.setItem("line_id",this.line_id),2==r?this.ifShowDescribe=!0:4==r?this.ifShowDescribe=!0:6==r?this.ifShowDescribe=!0:8==r?this.ifShowDescribe=!0:15==r&&(this.ifShowDescribe=!0),this.searchId=null==t?"":t,this.sortId=null==o?"":o,null==e?this.pageId="":(this.pageId=e,this.currentPage1=e-0);var d=location.search.split(/[?=&]/);d.shift();for(var i=0;i<d.length;i+=2)"type_id"==d[i]?this.typeId=d[i+1]:"attr_id"==d[i]?this.attrId=d[i+1]:"attr_value"==d[i]?this.attrValue=d[i+1]:"price_range"==d[i]&&(this.priceRange=d[i+1]);this.acquireData(this.keyword,"",this.pageId,this.typeId,this.attrId,this.attrValue,this.priceRange,this.pageSize);var l=this;c.a.$on("sendPriceVal",(function(t){location.search="",l.acquireData(t)}))},methods:{acquireData:function(t,e,o,n,r,d,l,c){var h=this,f=this;f.$axios.post("/goods/style/search",{keyword:t,sort:e,page:o,type_id:n,attr_id:r,attr_value:d,price_range:l,page_size:c}).then((function(t){h.loading=!1,f.commodityItem=t.data.data,h.seo=f.commodityItem.seo,console.log(f.commodityItem.data),h.totalNum=f.commodityItem.total_count-0,h.totalPages=f.commodityItem.page_count-0,null==f.commodityItem.data[0]&&(h.ifShowText=!0)})).catch((function(t){}))},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){localStorage.setItem("now_page",t),this.currentPage1=t;var e=this.$route.query.type_id,o=this.$route.query.attr_id,n=this.$route.query.keyword;this.typeId=null==e?"":e,this.attrId=null==o?"":o,this.searchId=null==n?"":n,this.acquireData(this.searchId,this.sortId,t,this.typeId,this.attrId,this.attrValue,this.priceRange,this.pageSize),console.log("当前页: ".concat(t))},ifShowF:function(t){this.dataItem[t].isShowT=!this.dataItem[t].isShowT},ifChooseF:function(i,t){this.dataItem[i].content[t].isChoose=!1;var s=i+""+t;if(this.order.some((function(t){return s==t})))this.arr.splice(this.order.indexOf(s),1),this.order.splice(this.order.indexOf(s),1);else{this.dataItem[i].content[t].isChoose=!0,this.order.push(s);var e=this.dataItem[i].content[t].text;this.arr.push(e)}},controlOpenA:function(){0==this.arr.length||(this.ifOpenA=!this.ifOpenA)},clearAll:function(){this.dataItem.map((function(t){t.content.map((function(t){t.isChoose=!1}))})),this.order.length=0,this.arr.length=0},controlOpenB:function(){this.ifOpenB=!this.ifOpenB},sort:function(i){0!=this.sort_i&&this.sort_i!=i&&(this.flag=!0);this.flag?this.filter_index=i:this.filter_index=i-1,localStorage.setItem("sort_id",this.filter[this.filter_index]),localStorage.setItem("now_page",""),this.currentPage1=1,this.acquireData(this.searchId,this.filter[this.filter_index],"",this.typeId,this.attrId,this.attrValue,this.priceRange),this.flag=!this.flag,this.sort_i=i},clickC:function(i){this.index_c=i}},head:function(){return{title:this.seo.meta_title,meta:[{hid:"description",name:"description",content:this.seo.meta_desc},{hid:"keywords",name:"keywords",content:this.seo.meta_word}]}}},f=(o(373),o(28)),x=Object(f.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.ifShowDescribe?o("h2",{staticClass:"engagement"},[t._v(t._s(t.seo.title))]):t._e(),t._v(" "),t.ifShowDescribe?o("div",{staticClass:"engagement-text"},[t._v(t._s(t.seo.description))]):t._e(),t._v(" "),o("div",{staticClass:"components-box clf"},[t._e(),t._v(" "),o("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"commodity-right fl",attrs:{"element-loading-text":"拼命加载中","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(0, 0, 0, 0)"}},[o("div",{staticClass:"filtrate clf"},[o("div",{staticClass:"filtrate-text fl"},[o("span",{staticClass:"bold"},[t._v(t._s(t.totalNum)+" ")]),t._v(t._s(t.nav_text))]),t._v(" "),o("div",{staticClass:"filtrate-condition fr clf"},[o("div",{staticClass:"filtrate-child fl",class:[0==t.filter_index||1==t.filter_index?"active":""],on:{click:function(e){return t.sort(1)}}},[o("div",{staticClass:"filtrate-child-text fl"},[t._v("Price")]),t._v(" "),o("div",{staticClass:"triangle-wrap fl"},[o("div",{staticClass:"triangle-box",class:[0==t.filter_index?"on":""],on:{click:function(e){return e.stopPropagation(),t.sort(0)}}},[o("i",{staticClass:"iconfont iconshengxu"})]),t._v(" "),o("div",{staticClass:"triangle-box",class:[1==t.filter_index?"on":""],on:{click:function(e){return e.stopPropagation(),t.sort(1)}}},[o("i",{staticClass:"iconfont iconjiangxu"})])])]),t._v(" "),o("div",{staticClass:"filtrate-child fl",class:[2==t.filter_index||3==t.filter_index?"active":""],on:{click:function(e){return t.sort(3)}}},[o("div",{staticClass:"filtrate-child-text fl"},[t._v("Popular")]),t._v(" "),o("div",{staticClass:"triangle-wrap fl"},[o("div",{staticClass:"triangle-box",class:[2==t.filter_index?"on":""],on:{click:function(e){return e.stopPropagation(),t.sort(2)}}},[o("i",{staticClass:"iconfont iconshengxu"})]),t._v(" "),o("div",{staticClass:"triangle-box",class:[3==t.filter_index?"on":""],on:{click:function(e){return e.stopPropagation(),t.sort(3)}}},[o("i",{staticClass:"iconfont iconjiangxu"})])])]),t._v(" "),o("div",{staticClass:"filtrate-child fl",class:[4==t.filter_index||5==t.filter_index?"active":""],on:{click:function(e){return t.sort(5)}}},[o("div",{staticClass:"filtrate-child-text fl"},[t._v("Latest")]),t._v(" "),o("div",{staticClass:"triangle-wrap fl"},[o("div",{staticClass:"triangle-box",class:[4==t.filter_index?"on":""],on:{click:function(e){return e.stopPropagation(),t.sort(4)}}},[o("i",{staticClass:"iconfont iconshengxu"})]),t._v(" "),o("div",{staticClass:"triangle-box",class:[5==t.filter_index?"on":""],on:{click:function(e){return e.stopPropagation(),t.sort(5)}}},[o("i",{staticClass:"iconfont iconjiangxu"})])])]),t._v(" "),o("div",{staticClass:"filtrate-child fl",class:[6==t.filter_index||7==t.filter_index?"active":""],on:{click:function(e){return t.sort(7)}}},[o("div",{staticClass:"filtrate-child-text fl"},[t._v("Integrated")]),t._v(" "),o("div",{staticClass:"triangle-wrap fl"},[o("div",{staticClass:"triangle-box",class:[6==t.filter_index?"on":""],on:{click:function(e){return e.stopPropagation(),t.sort(6)}}},[o("i",{staticClass:"iconfont iconshengxu"})]),t._v(" "),o("div",{staticClass:"triangle-box",class:[7==t.filter_index?"on":""],on:{click:function(e){return e.stopPropagation(),t.sort(7)}}},[o("i",{staticClass:"iconfont iconjiangxu"})])])])])]),t._v(" "),o("div",{staticClass:"commodity-show clf"},[t.ifShowText?o("div",{staticClass:"no-result"},[t._m(1),t._v(" "),o("div",{staticClass:"text"},[t._v("No results, try another keyword.")])]):t._e(),t._v(" "),t._l(t.commodityItem.data,(function(e,n){return n>=0?o("div",{key:n,staticClass:"commodity-show-list fl"},[o("router-link",{attrs:{to:{name:"goods-detail",query:{id:t.commodityItem.data[n].id}}}},[o("div",{staticClass:"img-box"},[o("img",{attrs:{src:e.style_image,alt:""}})]),t._v(" "),o("div",{staticClass:"price"},[o("span",{staticClass:"reference"},[t._v("Reference Price")]),t._v(t._s(e.currency)+t._s(e.sale_price))]),t._v(" "),o("div",{staticClass:"online"}),t._v(" "),o("div",{staticClass:"explain"},[t._v(t._s(e.style_name))]),t._v(" "),o("div",{staticClass:"btn"},[t._v("VIEW DETAILS")])])],1):t._e()}))],2),t._v(" "),o("div",{staticClass:"pages"},[0!=t.totalNum?o("el-pagination",{attrs:{total:t.totalNum,"current-page":t.currentPage1,"page-size":20,layout:"total, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage1=e},"update:current-page":function(e){t.currentPage1=e}}}):t._e()],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"search-scope"},[e("span",{staticClass:"color"},[this._v("$")]),e("input",{staticClass:"ipt",attrs:{type:"text",placeholder:"low"}}),this._v(" -\n            "),e("span",{staticClass:"color"},[this._v("$")]),e("input",{staticClass:"ipt",attrs:{type:"text",placeholder:"high"}}),this._v(" "),e("div",{staticClass:"search-btn"},[this._v("GO")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"icon"},[e("i",{staticClass:"iconfont iconfangdajing"})])}],!1,null,"6e0f9d1d",null).exports,v=o(332),m=o(333),_={data:function(){return{title:"列表页"}},components:{menus:n.a,headers:r.a,navs:d.a,ad:l.a,goodsListPage:x,footers:v.a,scroll:m.a}},w=Object(f.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("menus"),this._v(" "),e("headers"),this._v(" "),e("navs"),this._v(" "),e("ad"),this._v(" "),e("goodsListPage"),this._v(" "),e("footers"),this._v(" "),e("scroll")],1)}),[],!1,null,null,null);e.default=w.exports}}]);