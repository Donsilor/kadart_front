(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{373:function(t,e,n){var content=n(415);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("6b51f017",content,!0,{sourceMap:!1})},414:function(t,e,n){"use strict";var r=n(373);n.n(r).a},415:function(t,e,n){(e=n(9)(!1)).push([t.i,".article-right-box[data-v-f38f2aee]{font-size:1.3rem;line-height:2rem;color:#666;text-align:left;word-break:break-all;padding:2rem 5% 5rem}.article-right-box[data-v-f38f2aee] p{margin-top:10px}.article-detail-box[data-v-f38f2aee] img{max-width:100%;margin:1rem 0}.title[data-v-f38f2aee]{font-size:2.4rem;color:#333;line-height:2.6rem;text-align:center;font-weight:700;margin-bottom:3rem}.synopsis[data-v-f38f2aee]{font-size:1.6rem;color:#480f32;margin-bottom:1.5rem}",""]),t.exports=e},445:function(t,e,n){"use strict";n.r(e);n(194);var r={head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:this.description}]}},data:function(){return{articleDetail:{},title:"",description:"",pid:"",result:""}},mounted:function(){var path=location.href;-1!=path.indexOf("?")?path.split("=")[1]:path.slice(path.lastIndexOf("/")+1),this.getDetail()},methods:{getDetail:function(){var t=this;this.$axios.get("/article/article/detail",{params:{id:"2"}}).then((function(e){t.articleDetail=e.data.data})).catch((function(t){console.log(t)}))}}},o=(n(414),n(2)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",{staticClass:"article-wrap"},[e("div",{staticClass:"article-right-box"},[e("div",{staticClass:"title"},[this._v(this._s(this.articleDetail.title))]),this._v(" "),e("div",{staticClass:"synopsis"},[this._v(this._s(this.articleDetail.seo_content))])])])])}),[],!1,null,"f38f2aee",null);e.default=component.exports}}]);