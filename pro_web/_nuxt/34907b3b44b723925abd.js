(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{365:function(t,e,l){var content=l(409);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(8).default)("084769e6",content,!0,{sourceMap:!1})},408:function(t,e,l){"use strict";var r=l(365);l.n(r).a},409:function(t,e,l){(e=l(7)(!1)).push([t.i,".article-right-box[data-v-63c99c97]{font-size:14px;line-height:24px;color:#666;text-align:left;word-break:break-all}.article-right-box[data-v-63c99c97] p{margin-top:10px}.article-detail-box[data-v-63c99c97] img{max-width:640px;margin:20px 0}",""]),t.exports=e},451:function(t,e,l){"use strict";l.r(e);l(133),l(93);var r={head:function(){return{title:"KADArt introduction | High quality jewelry manufacture and wholesale",meta:[{hid:"description",name:"description",content:"KADArt design, manufacture top-grade gold,silver jewellery like necklaces,rings,earrings,bracelets with diamond,ruby,sapphire,topaz,pearl,zircon,rhinstone, wholesale at reasonable price."},{hid:"keywords",name:"keywords",content:"Kadart jewelry,BDD jewelry,Hengdeli jewelry,high-quality jewelry, top-grade jewelry"}]}},components:{azzd:l(92).a},data:function(){return{active_idx:0,articleDetail:{},articleItem:[{title:""}],article_pid:0,detailUrl:"",detailId:-1}},mounted:function(){var t=this;document.documentElement.scrollTop=document.body.scrollTop=0,this.detailUrl=location.pathname.split("/")[1].replace("-"," ");var e=this;this.$axios.get("/article/article-cate/index",{params:{}}).then((function(l){for(var r=l.data.data.lists,c=!1,i=0;i<r.length;i++){for(var n=0;n<r[i]["-"].length;n++){for(var o=0;o<r[i]["-"][n]["-"].length;o++){var d=r[i]["-"][n]["-"][o];if(d.title==t.detailUrl){e.article_pid=d.id,c=!0;break}}if(c)break}if(c)break}t.getList()})).catch((function(t){console.log(t)}))},methods:{getList:function(){var t=this;this.$axios.get("/article/article/search",{params:{pid:this.article_pid}}).then((function(e){t.articleItem=e.data.data.data;var l=location.pathname,r=l.lastIndexOf("/")+1;l=l.slice(r).replace(/\-/g," ");for(var i=0;i<t.articleItem.length;i++)if(t.articleItem[i].title==l){t.detailId=t.articleItem[i].id,t.active_idx=i;break}t.detailId>-1&&t.getDetail()})).catch((function(t){console.log(t)}))},getDetail:function(){var t=this;this.$axios.get("/article/article/detail",{params:{id:this.detailId}}).then((function(e){t.articleDetail=e.data.data})).catch((function(t){console.log(t)}))}}},c=(l(408),l(3)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"container"},[l("azzd"),t._v(" "),l("div",{staticClass:"article-wrap clf"},[l("div",{staticClass:"article-left fl"},[l("div",[l("div",{staticClass:"article-left-tit"},[t._v(t._s(t.detailUrl))]),t._v(" "),l("div",{staticClass:"article-left-box"},t._l(t.articleItem,(function(e,r){return l("div",{key:r,staticClass:"article-left-list",class:t.active_idx==r?"active":""},[l("i",{staticClass:"article-left-icon fl"}),t._v(" "),l("a",{attrs:{href:e.url}},[t._v(t._s(e.title))])])})),0)])]),t._v(" "),l("div",{staticClass:"article-right fr"},[l("div",{staticClass:"article-right-tit"},[t._v(t._s(t.articleItem[t.active_idx].title))]),t._v(" "),l("div",{staticClass:"article-right-box"},[l("div",{staticClass:"article-detail-box",domProps:{innerHTML:t._s(t.articleDetail.content)}})])])])],1)}),[],!1,null,"63c99c97",null);e.default=component.exports}}]);