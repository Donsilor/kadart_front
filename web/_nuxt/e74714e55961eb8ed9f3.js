(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{324:function(t,e,o){var content=o(327);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("e52bc7a2",content,!0,{sourceMap:!1})},326:function(t,e,o){"use strict";var n=o(324);o.n(n).a},327:function(t,e,o){(t.exports=o(19)(!1)).push([t.i,".ad{height:288px;margin-top:20px;border-bottom:1px solid #e2eaf0}.ad .swiper{width:100%;height:288px;overflow:inherit}.ad .swiper-wrapper{width:100%;height:254px}.ad .swiper-slide{height:240px}.ad .swiper-slide img{width:100%;height:100%}.ad .swiper-pagination{float:left;height:26px;position:inherit;margin:0 20px}.ad .swiper-pagination-bullet{width:12px;height:12px;background-color:#fff;border-radius:12px;opacity:1;border:1px solid #480f33;margin:7px 3px 0}.ad .swiper-pagination-bullet-active{background-color:#480f33!important}.ad .pos{width:100%;height:26px;text-align:center;font-size:0}.pos .inline{display:inline-block;height:100%}.ad .swiper-button-next,.ad .swiper-button-prev{position:relative;background-image:none!important;height:26px;width:26px;margin:0;top:0;left:0;bottom:0;right:0}.iconyou2,.iconzuo2{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);font-size:22px;color:#480f33}",""])},328:function(t,e,o){"use strict";var n={data:function(){return{banners:[],adv_id:2,swiperOptionTh:{loop:!0,autoplay:{stopOnLastSlide:!0},slidesPerView:"auto",centeredSlides:!0,spaceBetween:30,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChange:function(){},tap:function(){}}}}},mounted:function(){this.getAdData()},methods:{getAdData:function(){var t=this,e=localStorage.getItem("line_id");e&&(this.adv_id=e),this.$axios.get("/common/advert-images/banner",{params:{adv_id:"12",type_id:this.adv_id}}).then((function(e){t.banners=e.data})).catch((function(t){}))}}},r=(o(326),o(28)),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ad"},[this.banners&&0!=this.banners?e("div",{directives:[{name:"swiper",rawName:"v-swiper:hisSwiper",value:this.swiperOptionTh,expression:"swiperOptionTh",arg:"hisSwiper"}]},[e("div",{staticClass:"swiper-wrapper"},this._l(this.banners.data,(function(t){return e("div",{staticClass:"swiper-slide"},[e("a",{attrs:{href:t.adv_url||"javascript:;",target:"_blank"}},[e("img",{attrs:{src:t.adv_image}})])])})),0),this._v(" "),this._m(0)]):this._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pos"},[e("div",{staticClass:"inline"},[e("div",{staticClass:"swiper-button-prev fl"},[e("i",{staticClass:"iconfont iconzuo2"})]),this._v(" "),e("div",{staticClass:"swiper-pagination swiper-pagination-bullets fl"}),this._v(" "),e("div",{staticClass:"swiper-button-next fl"},[e("i",{staticClass:"iconfont iconyou2"})])])])}],!1,null,null,null);e.a=component.exports},343:function(t,e,o){var content=o(370);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("979c7022",content,!0,{sourceMap:!1})},344:function(t,e,o){var content=o(372);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(20).default)("b797dea6",content,!0,{sourceMap:!1})},367:function(t,e,o){"use strict";o(368)("big",(function(t){return function(){return t(this,"big","","")}}))},368:function(t,e,o){var n=o(6),r=o(10),l=o(29),c=/"/g,d=function(t,e,o,n){var r=String(l(t)),d="<"+e;return""!==o&&(d+=" "+o+'="'+String(n).replace(c,"&quot;")+'"'),d+">"+r+"</"+e+">"};t.exports=function(t,e){var o={};o[t]=e(d),n(n.P+n.F*r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",o)}},369:function(t,e,o){"use strict";var n=o(343);o.n(n).a},370:function(t,e,o){(t.exports=o(19)(!1)).push([t.i,".productLeft{height:100%}.mdImg,.productLeft{width:100%;position:relative}.mdImg{height:560px;overflow:hidden}.superMarks{width:100%;height:100%;background-color:hsla(0,0%,86.3%,0);position:absolute;top:0;left:0}.marks{width:100px;height:100px;background-color:hsla(0,0%,86.3%,.5)}.lgImg,.marks{position:absolute}.lgImg{width:560px;height:560px;overflow:hidden;top:0;left:770px;border:1px solid #a096b4;background-color:#fff;box-sizing:border-box}.lgImg img{width:1520px;height:1120px;position:absolute}",""])},371:function(t,e,o){"use strict";var n=o(344);o.n(n).a},372:function(t,e,o){(t.exports=o(19)(!1)).push([t.i,".commodity-box{margin-top:40px}.commodity-left{width:760px;margin-left:100px}.commodity-box .text-1{font-size:16px;color:#daab60;font-family:Didot;font-style:italic;height:22px}.commodity-box .text-2{height:60px;font-size:22px;color:#333;margin-top:8px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.commodity-box .img-box{width:760px;height:560px;margin-top:20px;font-size:0}.commodity-box .text-3{font-size:16px;color:#480f33;text-align:right;margin-top:10px}.commodity-box .text-3 .iconfont{font-size:20px;color:rgba(72,15,51,.5);position:relative;top:4px}.show-img{height:100px;margin-top:20px}.towards-left,.towards-right{width:100px;height:100px;background-color:#d0c9ce;text-align:center;line-height:100px;position:relative}.show-img .iconfont{font-size:20px;color:#999}.show-img .img-box-b{width:666px;height:102px;margin:0 10px;position:relative;padding-top:2px;overflow:hidden}.img-box-b-mid{position:absolute;right:0;top:0;height:100%;min-width:100%;white-space:nowrap}.show-img .img-box-b .img-box{width:100px;height:100px;margin:0 10px 0 0;position:relative;display:inline-block;cursor:pointer;font-size:0}.show-img .img-box-b .img-box.active{border:1px solid #480f33;box-sizing:border-box}.show-img .img-box-b .img-box .iconfont{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%)}.show-img .img-box-b .img-box img{width:98%;margin-left:1%}.swiper-button-prev{left:-76px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;background-image:none;outline:none}.swiper-button-next{left:370px}.commodity-box .commodity-right{width:406px;margin:20px 0 0 42px}.commodity-right .price{font-size:24px;color:#b64d52}.commodity-right .price .big{font-size:32px;margin-left:10px}.commodity-right .mq{font-size:16px;color:#333;margin-top:10px}.commodity-right .contact{height:72px;line-height:72px;text-align:center;border-top:1px solid grey;border-bottom:1px solid grey;margin-top:10px}.commodity-right .contact .color{color:#b64d52;text-decoration:underline;font-weight:700;cursor:pointer}.commodity-right .contact-btn{width:300px;height:38px;background-color:#480f33;border-radius:4px;margin:40px auto;text-align:center;color:#fff;font-size:12px;line-height:38px;cursor:pointer}.holiday-box{width:406px;border-top:1px solid grey;border-bottom:1px solid grey;padding:0 24px 40px;box-sizing:border-box}.holiday{margin:14px 0}.holiday .left{font-size:12px;color:#666}.table{border-top:1px solid #999;position:relative;z-index:-1;table-layout:fixed}.table .table-list{border-bottom:1px solid #999;height:30px;line-height:30px;word-break:break-all}.table-child{width:175px;overflow:hidden;white-space:nowrap;padding-left:5px;box-sizing:border-box}.table-list .left{text-align:left;font-weight:700;font-size:12px}.table-list .left,.table-list .right{width:50%;box-sizing:border-box;white-space:nowrap;overflow:hidden}.table-list .right{text-align:center;color:#666}.table .table-line{width:0;height:100%;border-left:1px solid #999;position:absolute;top:0;left:50%;z-index:-1}.share-text{margin-top:20px;font-family:Didot;font-size:18px;color:#666;padding-left:24px;box-sizing:border-box}.share-box img{width:30px;height:30px;margin:20px 0 0 24px}.other{font-size:24px;color:#333;text-align:center;font-weight:700;margin-top:80px}.swiper-box-two{width:1020px;height:140px;margin:40px auto 100px}.swiper-box-two img{width:140px;height:140px}.swiper-pagination-bullet{width:20px;height:20px;text-align:center;line-height:20px;font-size:12px;color:#000;opacity:1;background:rgba(0,0,0,.2)}.swiper-pagination-bullet-active{color:#fff;background:#007aff}.recommend-swiper{width:1020px;height:260px;overflow:hidden;margin:40px auto 80px}.recommend-swiper .swiper{width:100%;height:180px;overflow:inherit}.recommend-swiper .swiper-wrapper{width:100%;height:220px}.recommend-swiper .swiper-slide{height:140px;width:140px}.recommend-swiper .swiper-slide .img-box{width:140px;height:140px;margin-bottom:6px}.recommend-swiper .swiper-pagination{float:left;height:26px;position:inherit;margin:0 20px}.recommend-swiper .swiper-pagination-bullet{width:12px;height:12px;background-color:#fff;border-radius:12px;opacity:1;border:1px solid #480f33;margin:7px 3px 0}.recommend-swiper .swiper-pagination-bullet-active{background-color:#480f33!important}.recommend-swiper .pos{width:100%;height:26px;text-align:center;font-size:0}.recommend-swiper .pos .inline{display:inline-block;height:100%}.recommend-swiper .swiper-button-next,.recommend-swiper .swiper-button-prev{position:relative;background-image:none!important;height:26px;width:26px;margin:0;top:0;left:0;bottom:0;right:0}.recommend-swiper .iconyou2,.recommend-swiper .iconzuo2{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);font-size:22px;color:#480f33}.recommend-swiper .recommend-name,.recommend-swiper .recommend-price{font-family:Didot;font-size:14px;color:#333;line-height:22px;text-align:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.goods-detial-s{width:100%;margin-top:100px}.goods-tit-s{height:46px;font-size:18px;color:#480f33;border-bottom:1px solid #480f33;padding:0 20px;box-sizing:border-box}.goods-box-n{text-align:center;width:1000px;margin:0 auto}.goods-box-n p{width:1000px}.goods-box-n img{width:700px;height:400px;margin:0 auto 80px}",""])},386:function(t,e,o){"use strict";o.r(e);var n=o(329),r=o(330),l=o(331),c=o(328),d=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-3"},[this._v("Mouse over the image to view the large picture\n        "),e("i",{staticClass:"iconfont iconfangda"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"holiday clf"},[e("div",{staticClass:"left fl"},[this._v("Product Parameters")]),this._v(" "),e("div",{staticClass:"right fr"},[e("i",{staticClass:"iconfont"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"share-box",staticStyle:{display:"none"}},[e("a",{attrs:{href:""}},[e("img",{attrs:{src:o(347),alt:""}})]),this._v(" "),e("a",{attrs:{href:""}},[e("img",{attrs:{src:o(348),alt:""}})]),this._v(" "),e("a",{attrs:{href:""}},[e("img",{attrs:{src:o(349),alt:""}})]),this._v(" "),e("a",{attrs:{href:""}},[e("img",{attrs:{src:o(350),alt:""}})]),this._v(" "),e("a",{attrs:{href:""}},[e("img",{attrs:{src:o(351),alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pos"},[e("div",{staticClass:"inline"},[e("div",{staticClass:"swiper-button-prev fl"},[e("i",{staticClass:"iconfont iconzuo2"})]),this._v(" "),e("div",{staticClass:"swiper-pagination swiper-pagination-bullets fl"}),this._v(" "),e("div",{staticClass:"swiper-button-next fl"},[e("i",{staticClass:"iconfont iconyou2"})])])])}],h=(o(367),o(325)),m=(o(178),{name:"blog-header",data:function(){return{isPC:!0,qall:this.msg,qallBig:this.msg,isShow:!1,left:0,top:0,leftLgImg:0,topLgImg:0}},methods:{enter:function(){this.isShow=!0},leave:function(){this.isShow=!1},marks:function(t){1==this.isPC?(this.left=t.offsetX-50,this.top=t.offsetY-50,this.left<0?this.left=0:this.left>760&&(this.left=760),this.top<0?this.top=0:this.top>560&&(this.top=560),this.leftLgImg=1.36*-this.left,this.topLgImg=-this.top):(this.left=t.changedTouches[0].clientX-50,this.top=t.changedTouches[0].clientY-50,this.left<0?this.left=0:this.left>160&&(this.left=160),this.top<0?this.top=0:this.top>45&&(this.top=45),this.leftLgImg=320*-this.left/160,this.topLgImg=181*-this.top/91)},sub:function(){}},mounted:function(){navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)?this.isPC=!1:console.log("PC端")},props:["msg"],watch:{msg:function(t){this.qall=this.msg,this.qallBig=this.msg}}}),f=(o(369),o(28)),x={components:{magnifying:Object(f.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"productLeft"},[o("div",{staticClass:"mdImg"},[o("img",{staticClass:"no-stretch",attrs:{src:t.qall,alt:""}})]),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"marks",style:{top:t.top+"px",left:t.left+"px"}}),t._v(" "),0==t.isPC?o("div",{staticClass:"superMarks",on:{touchstart:function(e){return e.preventDefault(),t.enter(e)},touchend:function(e){return e.preventDefault(),t.leave(e)},touchmove:function(e){return e.preventDefault(),t.marks(e)},click:function(e){return e.preventDefault(),t.sub()}}}):t._e(),t._v(" "),1==t.isPC?o("div",{staticClass:"superMarks",on:{mouseenter:t.enter,mouseleave:t.leave,mousemove:t.marks,click:function(e){return e.preventDefault(),t.sub()}}}):t._e(),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"lgImg"},[o("img",{style:{top:t.topLgImg+"px",left:t.leftLgImg+"px"},attrs:{src:t.qallBig,alt:""}})])])}),[],!1,null,null,null).exports},head:function(){return{title:"Best high quality jewelry with fine craftsmanship wholesale",meta:[{hid:"description",name:"description",content:"KADArt manufacturer and wholesale top-end gold,silver, copper and alloy jewelry with precious,semi gems,crystal,zircon,rhinestone at good price"},{hid:"keywords",name:"keywords",content:"jewelry factory, jewelry supplier, jewelry manufacturer,jewelry wholesale,gold jewelry, silver jewelry, brass jewelry, high quality jewelry, best jewelry, stylish jewelry, fashion jewelry"}]}},data:function(){return{title:"",recommendUrl:"",goodsId:"",goodsDetail:{data:{currency:"",goods_3ds:"",goods_images:{big:[],thumb:[]},id:"",sale_price:"",style_attrs:[{name:"",value:""}],style_moq:"",style_name:"",type_id:""}},smallImg:[],bigImg:[],goodsRecommend:[{data:[{currency:"",goods_clicks:"",id:"",sale_price:"",style_image:"",styel_name:"",style_sn:""}]}],recommendId:"",recommendIndex:"",banners:["../index/2.jpg","../index/12.jpg","../index/5.jpg","../index/15"],bannersT:["../index/2.jpg","../index/12.jpg","../index/5.jpg","../index/15"],isShowImg:!1,text:"",index_k:0,swiperOptionFo:{loop:!0,slidesPerView:"auto",centeredSlides:!0,spaceBetween:80,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChange:function(){},tap:function(){}}},goodsDetailBS:""}},mounted:function(){var t=this;console.log("http://www.kadart.com/goods_qweqweqwe/31".lastIndexOf("/"));var e=this.$route.query.id;e?(localStorage.setItem("goodsDetailId",e),this.goodsId=e):(e=localStorage.getItem("goodsDetailId"),this.goodsId=e),this.$axios.get("/goods/style/detail",{params:{id:this.goodsId}}).then((function(e){t.goodsDetail=e.data,t.smallImg=e.data.data.goods_images.thumb||"",t.bigImg=e.data.data.goods_images.big||"",t.goodsDetailBS=t.goodsDetail.data.goods_body})).catch((function(t){console.log(t)})),this.$axios.get("/goods/style/guess-list",{params:{style_id:this.goodsId}}).then((function(e){t.goodsRecommend=e.data})).catch((function(t){console.log(t)}))},methods:{sendMsg:function(){h.a.$emit("send",!0)},chooseImg:function(t){this.index_k=t},ShowImg:function(){this.isShowImg=!0}}},w=(o(371),Object(f.a)(x,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"commodity-box clf"},[o("div",{staticClass:"commodity-left fl"},[o("div",{staticClass:"text-1"}),t._v(" "),o("div",{staticClass:"text-2"},[t._v(t._s(t.goodsDetail.data.style_name))]),t._v(" "),o("div",{staticClass:"img-box"},[o("magnifying",{attrs:{msg:t.bigImg[t.index_k]}})],1),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"show-img"},[o("div",{staticClass:"img-box-b"},[o("div",{staticClass:"img-box-b-mid"},[t._l(t.smallImg,(function(e,n){return n<5?o("div",{staticClass:"img-box",class:[t.index_k==n?"active":""],on:{click:function(e){return t.chooseImg(n)}}},[o("img",{attrs:{src:e,alt:""}})]):t._e()})),t._v(" "),t._l(t.smallImg,(function(e,n){return n>4&&n<6?o("div",{staticClass:"img-box",class:[t.index_k==n?"active":""],on:{click:function(e){return e.preventDefault(),t.chooseImg(n)}}},[o("img",{attrs:{src:e,alt:""}}),t._v(" "),t.isShowImg?t._e():o("i",{staticClass:"iconfont iconyou",on:{click:function(e){return e.preventDefault(),t.ShowImg()}}})]):t._e()})),t._v(" "),t._l(t.smallImg,(function(e,n){return n>6&&t.isShowImg?o("div",{staticClass:"img-box",class:[t.index_k==n?"active":""],on:{click:function(e){return t.chooseImg(n)}}},[o("img",{attrs:{src:e,alt:""}})]):t._e()}))],2)])])]),t._v(" "),o("div",{staticClass:"commodity-right fl"},[o("div",{staticClass:"price"},[t._v("Reference Price"),o("span",{staticClass:"big"},[t._v(t._s(t.goodsDetail.data.currency)+t._s(t.goodsDetail.data.sale_price))])]),t._v(" "),o("div",{staticClass:"mq"},[t._v("MOQ : "+t._s(t.goodsDetail.data.style_moq)+"pcs")]),t._v(" "),o("div",{staticClass:"contact"},[o("span",{staticClass:"color",on:{click:function(e){return t.sendMsg()}}},[t._v("Please contact us")]),t._v(" for more ring size\n        information.")]),t._v(" "),o("div",{staticClass:"contact-btn",on:{click:function(e){return t.sendMsg()}}},[t._v("CONTACT US")]),t._v(" "),o("div",{staticClass:"holiday-box"},[t._m(1),t._v(" "),o("div",{staticClass:"table"},[o("table",{attrs:{width:"100%"}},[o("tbody",t._l(t.goodsDetail.data.style_attrs,(function(e,n){return n<13?o("tr",{staticClass:"table-list clf"},[o("td",{staticClass:"left fl"},[o("div",{staticClass:"table-child"},[t._v(t._s(e.name))])]),t._v(" "),o("td",{staticClass:"right fl"},[o("div",{staticClass:"table-child"},[t._v(t._s(e.value))])])]):t._e()})),0)]),t._v(" "),o("div",{staticClass:"table-line"})])]),t._v(" "),o("div",{staticClass:"share-text",staticStyle:{display:"none"}},[t._v("Share:")]),t._v(" "),t._m(2)])]),t._v(" "),o("h3",{staticClass:"other"},[t._v("OTHER GUESTS ALSO LIKE")]),t._v(" "),o("div",{staticClass:"recommend-swiper"},[this.goodsRecommend.data&&0!=this.goodsRecommend.data?o("div",{directives:[{name:"swiper",rawName:"v-swiper:hisSwiper",value:t.swiperOptionFo,expression:"swiperOptionFo",arg:"hisSwiper"}]},[o("div",{staticClass:"swiper-wrapper"},t._l(t.goodsRecommend.data,(function(e,n){return n<6?o("div",{key:n,staticClass:"swiper-slide"},[o("a",{attrs:{href:"/goods-detail?id="+e.id}},[o("div",{staticClass:"img-box"},[o("img",{attrs:{src:e.style_image}})]),t._v(" "),o("div",{staticClass:"recommend-name"},[t._v("Reference Price")]),t._v(" "),o("div",{staticClass:"recommend-price"},[t._v(t._s(e.currency)+t._s(e.sale_price))])])]):t._e()})),0),t._v(" "),t._m(3)]):t._e()]),t._v(" "),o("div",{staticClass:"goods-detial-s"},[o("div",{staticClass:"goods-tit-s"},[t._v("COMMODITYD DETAILS")]),t._v(" "),o("div",{staticClass:"goods-box-n",domProps:{innerHTML:t._s(t.goodsDetailBS)}})])])}),d,!1,null,null,null).exports),v=o(332),_=o(333),y={data:function(){return{}},components:{menus:n.a,headers:r.a,navs:l.a,ad:c.a,goodsDetailPage:w,footers:v.a,scroll:_.a}},C=Object(f.a)(y,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("menus"),this._v(" "),e("headers"),this._v(" "),e("navs"),this._v(" "),e("ad"),this._v(" "),e("goodsDetailPage"),this._v(" "),e("footers"),this._v(" "),e("scroll")],1)}),[],!1,null,null,null);e.default=C.exports}}]);