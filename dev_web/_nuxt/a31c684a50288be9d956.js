(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{366:function(t,e,l){var content=l(411);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(8).default)("0cd35aca",content,!0,{sourceMap:!1})},410:function(t,e,l){"use strict";var r=l(366);l.n(r).a},411:function(t,e,l){(e=l(7)(!1)).push([t.i,".article-right-list-text[data-v-3798e2ab]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;overflow:hidden}.article-detail-box p[data-v-3798e2ab]{font-size:14px;line-height:28px;color:#666;box-sizing:border-box;text-align:left}.article-detail-box img[data-v-3798e2ab]{max-width:720px;margin:30px 0}.article-right .img-box[data-v-3798e2ab]{width:140px;height:140px;position:relative;overflow:hidden;flex-shrink:0}.article-right .img-box img[data-v-3798e2ab]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);max-width:100%;max-height:100%}.article-right-list[data-v-3798e2ab]{cursor:pointer;display:flex;align-items:center;padding:30px 0}.article-right-r[data-v-3798e2ab]{flex:1;display:flex;flex-direction:column;justify-content:space-between;margin-left:20px;height:140px;padding:3px 0;box-sizing:border-box}",""]),t.exports=e},452:function(t,e,l){"use strict";l.r(e);l(93);var r={head:function(){return{title:"KADArt introduction | High quality jewelry manufacture and wholesale",meta:[{hid:"description",name:"description",content:"KADArt design, manufacture top-grade gold,silver jewellery like necklaces,rings,earrings,bracelets with diamond,ruby,sapphire,topaz,pearl,zircon,rhinstone, wholesale at reasonable price."},{hid:"keywords",name:"keywords",content:"Kadart jewelry,BDD jewelry,Hengdeli jewelry,high-quality jewelry, top-grade jewelry"}]}},components:{azzd:l(92).a},data:function(){return{active_idx:0,articleTitle:[{title:""}],articleItem:[],article_pid:0,a:0,b:0,detailUrl:""}},mounted:function(){var t=this;document.documentElement.scrollTop=document.body.scrollTop=0;var e=location.pathname.slice(1).replace("-"," "),l=this;this.$axios.get("/article/article-cate/index",{params:{}}).then((function(r){for(var c=r.data.data.lists,n=!1,i=0;i<c.length;i++){for(var o=0;o<c[i].items.length;o++){for(var d=0;d<c[i].items[o].items.length;d++){var h=c[i].items[o].items[d];if(h.title==e){l.a=i,l.b=o,l.active_idx=d,l.article_pid=h.id,n=!0;break}}if(n)break}if(n)break}t.articleTitle=r.data.data.lists[t.a].items[t.b].items,t.getList()})).catch((function(t){console.log(t)}))},methods:{intoDetail:function(t){location.pathname=this.articleItem[t].url},chooseItem:function(t,e){var l=this.$refs.list[t].getElementsByTagName("span")[0].innerText.replace(" ","-");location.pathname="/"+l},getList:function(){var t=this;this.$axios.get("/article/article/search",{params:{pid:this.article_pid}}).then((function(e){t.articleItem=e.data.data.data})).catch((function(t){console.log(t)}))}}},c=(l(410),l(3)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"container"},[l("azzd"),t._v(" "),l("div",{staticClass:"article-wrap clf"},[l("div",{staticClass:"article-left fl"},[l("div",[l("div",{staticClass:"article-left-tit"},[t._v("News")]),t._v(" "),l("div",{staticClass:"article-left-box"},t._l(t.articleTitle,(function(e,r){return l("div",{key:r,ref:"list",refInFor:!0,staticClass:"article-left-list",class:t.active_idx==r?"active":"",on:{click:function(e){return t.chooseItem(r)}}},[l("i",{staticClass:"article-left-icon fl"}),t._v(" "),l("span",[t._v(t._s(e.title))])])})),0)])]),t._v(" "),l("div",{staticClass:"article-right fr"},[l("div",{staticClass:"article-right-tit"},[t._v(t._s(t.articleTitle[t.active_idx].title))]),t._v(" "),l("div",{staticClass:"article-right-box"},t._l(t.articleItem,(function(e,r){return l("div",{staticClass:"article-right-list",on:{click:function(e){return t.intoDetail(r)}}},[l("div",{staticClass:"img-box"},[l("img",{attrs:{src:e.img,alt:""}})]),t._v(" "),l("div",{staticClass:"article-right-r"},[l("div",{staticClass:"article-right-list-title"},[t._v(t._s(e.title))]),t._v(" "),l("div",{staticClass:"article-right-list-text"},[t._v(t._s(e.seo_content))])])])})),0)])])],1)}),[],!1,null,"3798e2ab",null);e.default=component.exports}}]);