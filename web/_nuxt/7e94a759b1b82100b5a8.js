(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{346:function(t,e,r){var content=r(348);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("e52bc7a2",content,!0,{sourceMap:!1})},347:function(t,e,r){"use strict";var n=r(346);r.n(n).a},348:function(t,e,r){(t.exports=r(7)(!1)).push([t.i,".ad{height:288px;margin-top:20px;border-bottom:1px solid #e2eaf0}.ad .swiper{width:100%;height:288px;overflow:inherit}.ad .swiper-wrapper{width:100%;height:254px}.ad .swiper-slide{height:240px}.ad .swiper-slide img{width:100%;height:100%}.ad .swiper-pagination{float:left;height:26px;position:inherit;margin:0 20px}.ad .swiper-pagination-bullet{width:12px;height:12px;background-color:#fff;border-radius:12px;opacity:1;border:1px solid #480f33;margin:7px 3px 0}.ad .swiper-pagination-bullet-active{background-color:#480f33!important}.ad .pos{width:100%;height:26px;text-align:center;font-size:0}.pos .inline{display:inline-block;height:100%}.ad .swiper-button-next,.ad .swiper-button-prev{position:relative;background-image:none!important;height:26px;width:26px;margin:0;top:0;left:0;bottom:0;right:0}.iconyou2,.iconzuo2{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);-o-transform:translate(-50%,-50%);font-size:22px;color:#480f33}",""])},349:function(t,e,r){"use strict";var n={data:function(){return{banners:[],adv_id:2,swiperOptionTh:{loop:!0,autoplay:{stopOnLastSlide:!0},slidesPerView:"auto",centeredSlides:!0,spaceBetween:30,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},on:{slideChange:function(){},tap:function(){}}}}},mounted:function(){this.getAdData()},methods:{getAdData:function(){var t=this,e=localStorage.getItem("line_id");e&&(this.adv_id=e),this.$axios.get("/common/advert-images/banner",{params:{adv_id:"12",type_id:this.adv_id}}).then((function(e){t.banners=e.data})).catch((function(t){}))}}},o=(r(347),r(4)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ad"},[this.banners&&0!=this.banners?e("div",{directives:[{name:"swiper",rawName:"v-swiper:hisSwiper",value:this.swiperOptionTh,expression:"swiperOptionTh",arg:"hisSwiper"}]},[e("div",{staticClass:"swiper-wrapper"},this._l(this.banners.data,(function(t){return e("div",{staticClass:"swiper-slide"},[e("a",{attrs:{href:t.adv_url||"javascript:;",target:"_blank"}},[e("img",{attrs:{src:t.adv_image}})])])})),0),this._v(" "),this._m(0)]):this._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pos"},[e("div",{staticClass:"inline"},[e("div",{staticClass:"swiper-button-prev fl"},[e("i",{staticClass:"iconfont iconzuo2"})]),this._v(" "),e("div",{staticClass:"swiper-pagination swiper-pagination-bullets fl"}),this._v(" "),e("div",{staticClass:"swiper-button-next fl"},[e("i",{staticClass:"iconfont iconyou2"})])])])}],!1,null,null,null);e.a=component.exports},350:function(t,e,r){var content=r(359);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(8).default)("a6d32886",content,!0,{sourceMap:!1})},358:function(t,e,r){"use strict";var n=r(350);r.n(n).a},359:function(t,e,r){(t.exports=r(7)(!1)).push([t.i,".article-wrap{margin-top:60px;min-height:600px}.article-left{width:330px;border-top:8px solid grey}.article-left-tit{width:280px;height:58px;margin:0 auto;line-height:60px;border-bottom:1px solid grey;font-size:18px;color:#333}.article-left-box{width:280px;margin:20px auto;padding-left:20px;box-sizing:border-box}.article-left-list{font-size:14px;color:#333;margin-bottom:10px;cursor:pointer}.article-left-list.active{color:#b64d52;text-decoration:underline}.article-right{width:1030px;border-top:8px solid grey}.article-right-tit{height:74px;line-height:80px;border-bottom:1px solid grey;font-size:30px;color:#000;font-weight:700}.article-right-box,.article-right-tit{width:100%;padding:0 40px;box-sizing:border-box}.article-right-box{margin-top:10px}.article-right-list{margin-bottom:20px;padding-top:30px}.article-right-list:not(:first-child){border-top:1px solid grey}.article-right-list-title{font-size:24px;color:#470e30;font-weight:700}.article-right-list-text{font-size:14px;line-height:24px;color:#666;margin-top:10px}.article-detail{width:640px;margin:20px auto}.article-img{width:100%;height:200px}.article-detail-tit{font-size:18px;color:#470e30;text-align:center;margin-top:10px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:700}.article-detail-text{font-size:14px;color:#666;padding:0 20px;box-sizing:border-box;line-height:20px;margin-top:6px}",""])},382:function(t,e,r){"use strict";r.r(e);var n=r(349),o={data:function(){return{index:0}},methods:{clickMe:function(t){this.index=t}}},l=(r(358),r(4)),c=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-wrap clf"},[r("div",{staticClass:"article-left fl"},[r("div",{staticClass:"article-left-tit"},[t._v("BRAND CULTURE")]),t._v(" "),r("div",{staticClass:"article-left-box"},[r("div",{staticClass:"article-left-list",class:0==t.index?"active":"",on:{click:function(e){return t.clickMe(0)}}},[t._v("Contact Us")])])]),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"article-right fr"},[r("div",{staticClass:"article-right-tit"},[t._v("About us")]),t._v(" "),r("div",{staticClass:"article-right-box"},[r("div",{staticClass:"article-right-list"},[r("div",{staticClass:"article-right-list-title"}),t._v(" "),r("div",{staticClass:"article-right-list-text"},[t._v("KAD ART is a fashion jewelry company who has three jewelry brands totally. It is integrated with design, marketing, production and sales. We are very familiar with the trend of fashion jewelry. The creativity and vitality of our company is maintained by our advanced management model, effective advertising strategy and international branch office.")])]),t._v(" "),r("div",{staticClass:"article-right-list"},[r("div",{staticClass:"article-right-list-title"},[t._v("About  KADART")]),t._v(" "),r("div",{staticClass:"article-right-list-text"},[t._v("KADART, we are a global jewelry manufacture enterprise. It is aiming at hiring domestic and overseas experienced jewelry craftsman to produce high quality jewelry for the world. Our location is in Shenzhen IBC, set up headquarters in Hong Kong. We have 3 branch office and 9 factories. All the precious-stones, semi-gems and fashion jewelry material are sourcing around the world. The high quality jewelry we showed is made by our practiced craftsman. This is our belief, we only produce high quality jewelry.")])]),t._v(" "),r("div",{staticClass:"article-right-list"},[r("div",{staticClass:"article-right-list-title"},[t._v("About HENGDELI")]),t._v(" "),r("div",{staticClass:"article-right-list-text"},[t._v("HENGDELI is a luxury jewelry supplier, who focusing on jadeite, nephrite and precious stones. It is concentrating on producing the top class jewelry of Chinese traditional culture.")])]),t._v(" "),r("div",{staticClass:"article-right-list"},[r("div",{staticClass:"article-right-list-title"},[t._v("About BBD Co.")]),t._v(" "),r("div",{staticClass:"article-right-list-text"},[t._v("BBD Co. is an international online retailer of jewelry. It is concentrating on selling the diamond jewelry & fashion jewelry made by ourselves. All of our items comply with high quality standards and are greatly appreciated in a variety of different markets throughout the world.")])])])])}],!1,null,null,null).exports,d={components:{ad:n.a,articleMainPage:c},head:function(){return{title:"KADArt introduction | High quality jewelry manufacture and wholesale",meta:[{hid:"description",name:"description",content:"KADArt design, manufacture top-grade gold,silver jewellery like necklaces,rings,earrings,bracelets with diamond,ruby,sapphire,topaz,pearl,zircon,rhinstone, wholesale at reasonable price."},{hid:"keywords",name:"keywords",content:"Kadart jewelry,BDD jewelry,Hengdeli jewelry,high-quality jewelry, top-grade jewelry"}]}}},h=Object(l.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("ad"),this._v(" "),e("articleMainPage")],1)}),[],!1,null,null,null);e.default=h.exports}}]);