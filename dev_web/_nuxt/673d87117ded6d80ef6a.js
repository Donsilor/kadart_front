(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{366:function(t,e,l){var content=l(412);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(8).default)("2675eb62",content,!0,{sourceMap:!1})},411:function(t,e,l){"use strict";var c=l(366);l.n(c).a},412:function(t,e,l){(e=l(7)(!1)).push([t.i,".article-right-box[data-v-03465241]{font-size:14px;line-height:24px;color:#666;text-align:left;word-break:break-all;padding-top:20px}.article-right-box[data-v-03465241] p{margin-top:10px}.article-detail-box[data-v-03465241] img{max-width:640px;margin:20px 0}.article-right-tit[data-v-03465241]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.synopsis[data-v-03465241]{font-size:14px;line-height:24px;color:#ad317d;margin-bottom:20px}",""]),t.exports=e},455:function(t,e,l){"use strict";l.r(e);l(93);var c={head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description}]}},components:{azzd:l(92).a},data:function(){return{articleDetail:{},description:"",pid:"",title:"",active_idx:0,articleItem:[{title:""}],article_pid:0,detailUrl:"",detailId:-1,a:"",b:"",result:""}},mounted:function(){var t=this;document.documentElement.scrollTop=document.body.scrollTop=0,this.$axios.get("/article/article-cate/index",{params:{}}).then((function(e){t.result=e.data.data.lists;var l,path=location.href;l=-1!=path.indexOf("?")?path.split("=")[1]:path.slice(path.lastIndexOf("/")+1),t.getDetail(l)})).catch((function(t){console.log(t)}))},methods:{getDetail:function(t){var e=this,l=this;this.$axios.get("/article/article/detail",{params:{id:t}}).then((function(t){e.articleDetail=t.data.data,e.description=t.data.data.seo_content,e.pid=t.data.data.cate_id,l.getClassify(),l.getList()})).catch((function(t){console.log(t)}))},getList:function(){var t=this;this.$axios.get("/article/article/search",{params:{pid:this.pid}}).then((function(e){t.articleItem=e.data.data.data;for(var i=0;i<t.articleItem.length;i++)if(t.articleItem[i].title==t.articleDetail.title){t.active_idx=i;break}})).catch((function(t){console.log(t)}))},getClassify:function(){for(var t=this.result,e=!1,i=0;i<t.length;i++){for(var l=0;l<t[i].items.length;l++){for(var c=0;c<t[i].items[l].items.length;c++){var r=t[i].items[l].items[c];if(r.id==this.pid){this.title=r.title,e=!0;break}}if(e)break}if(e)break}}}},r=(l(411),l(3)),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"container"},[l("azzd"),t._v(" "),l("div",{staticClass:"article-wrap clf"},[l("div",{staticClass:"article-left fl"},[l("div",{staticClass:"article-left-tit"},[t._v(t._s(t.title))]),t._v(" "),l("div",{staticClass:"article-left-box"},t._l(t.articleItem,(function(e,c){return l("div",{key:c,staticClass:"article-left-list",class:t.active_idx==c?"active":""},[l("i",{staticClass:"article-left-icon fl"}),t._v(" "),l("a",{attrs:{href:e.url}},[t._v(t._s(e.title))])])})),0)]),t._v(" "),l("div",{staticClass:"article-right fr"},[l("div",{staticClass:"article-right-tit"},[t._v(t._s(t.articleDetail.title))]),t._v(" "),l("div",{staticClass:"article-right-box"},[l("div",{staticClass:"synopsis"},[t._v(t._s(t.articleDetail.seo_content))]),t._v(" "),l("div",{staticClass:"article-detail-box",domProps:{innerHTML:t._s(t.articleDetail.content)}})])])])],1)}),[],!1,null,"03465241",null);e.default=component.exports}}]);