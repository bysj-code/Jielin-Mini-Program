(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangpinxinxi/list"],{"250e":function(e,n,t){},"492a":function(e,n,t){"use strict";(function(e){t("96b2");i(t("66fd"));var n=i(t("a181"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"7f1e":function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return i}));var i={mescrollUni:function(){return Promise.all([t.e("common/vendor"),t.e("components/mescroll-uni/mescroll-uni")]).then(t.bind(null,"ba3b"))}},r=function(){var e=this,n=e.$createElement,t=(e._self._c,e.isAuth("shangpinxinxi","修改")),i=e.isAuthFront("shangpinxinxi","修改"),r=e.isAuth("shangpinxinxi","删除"),a=e.isAuthFront("shangpinxinxi","删除"),s=e.__map(e.list,(function(n,t){var i=e.__get_orig(n),r=n.fengmian?n.fengmian.split(","):null,a=Number(n.price).toFixed(2);return{$orig:i,g0:r,g1:a}})),o=e.isAuth("shangpinxinxi","新增"),c=e.isAuthFront("shangpinxinxi","新增");e.$mp.data=Object.assign({},{$root:{m0:t,m1:i,m2:r,m3:a,l0:s,m4:o,m5:c}})},a=[]},"9fab":function(e,n,t){"use strict";var i=t("250e"),r=t.n(i);r.a},a181:function(e,n,t){"use strict";t.r(n);var i=t("7f1e"),r=t("eea7");for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);t("9fab");var s,o=t("f0c5"),c=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);n["default"]=c.exports},d542:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,i,r,a,s){try{var o=e[a](s),c=o.value}catch(u){return void t(u)}o.done?n(c):Promise.resolve(c).then(i,r)}function s(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var s=e.apply(n,t);function o(e){a(s,i,r,o,c,"next",e)}function c(e){a(s,i,r,o,c,"throw",e)}o(void 0)}))}}var o={data:function(){return{btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],queryList:[{queryName:"商品名称"},{queryName:"商品分类"},{queryName:"品牌"}],sactiveItem:{padding:"0 28rpx",boxShadow:"0 0 12rpx rgba(0,0,0,.3)",margin:"0 12rpx",borderColor:"rgba(0,0,0,1)",backgroundColor:"rgba(130, 163, 157, 1)",color:"#fff",borderRadius:"8rpx",borderWidth:"0",width:"auto",lineHeight:"70rpx",fontSize:"28rpx",borderStyle:"solid"},sitem:{padding:"0 20rpx",boxShadow:"0 0 12rpx rgba(0,0,0,.3)",margin:"0 12rpx",borderColor:"rgba(0,0,0,1)",backgroundColor:"rgba(161, 161, 161, 1)",color:"rgba(255, 255, 255, 1)",borderRadius:"8rpx",borderWidth:"0",width:"auto",lineHeight:"70rpx",fontSize:"28rpx",borderStyle:"solid"},queryIndex:0,list:[],userid:"",mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:5,textNoMore:"~ 没有更多了 ~"},hasNext:!0,searchForm:{},categoryList:[],categoryName:"全部",CustomBar:"0"}},computed:{baseUrl:function(){return this.$base.url}},onShow:function(){var e=this;return s(i.default.mark((function n(){var t;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.btnColor=e.btnColor.sort((function(){return.5-Math.random()})),t={},!e.userid){n.next=8;break}return n.next=5,e.$api.page("shangpinfenlei",{page:1,limit:100});case 5:t=n.sent,n.next=11;break;case 8:return n.next=10,e.$api.list("shangpinfenlei",{page:1,limit:100});case 10:t=n.sent;case 11:t.data.list.splice(0,0,{id:0,shangpinfenlei:"全部"}),e.categoryList=t.data.list,e.hasNext=!0,e.mescroll&&e.mescroll.resetUpScroll();case 15:case"end":return n.stop()}}),n)})))()},onLoad:function(e){e.userid?this.userid=e.userid:this.userid="",this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},methods:{queryChange:function(e){this.queryIndex=e.detail.value,this.searchForm.shangpinmingcheng="",this.searchForm.shangpinfenlei="",this.searchForm.pinpai=""},categoryClick:function(e){this.categoryName=e,this.mescroll.resetUpScroll()},mescrollInit:function(e){this.mescroll=e},downCallback:function(e){this.hasNext=!0,e.resetUpScroll()},upCallback:function(e){var n=this;return s(i.default.mark((function t(){var r,a;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r={page:e.num,limit:e.size},"全部"!=n.categoryName&&(r.shangpinfenlei="%"+n.categoryName+"%"),n.searchForm.shangpinmingcheng&&(r["shangpinmingcheng"]="%"+n.searchForm.shangpinmingcheng+"%"),n.searchForm.shangpinfenlei&&(r["shangpinfenlei"]="%"+n.searchForm.shangpinfenlei+"%"),n.searchForm.pinpai&&(r["pinpai"]="%"+n.searchForm.pinpai+"%"),a={},!n.userid){t.next=12;break}return t.next=9,n.$api.page("shangpinxinxi",r);case 9:a=t.sent,t.next=15;break;case 12:return t.next=14,n.$api.list("shangpinxinxi",r);case 14:a=t.sent;case 15:1==e.num&&(n.list=[]),n.list=n.list.concat(a.data.list),0==a.data.list.length&&(n.hasNext=!1),e.endSuccess(e.size,n.hasNext);case 19:case"end":return t.stop()}}),t)})))()},onDetailTap:function(n){e.setStorageSync("useridTag",this.userid),this.$utils.jump("./detail?id=".concat(n.id,"&userid=")+this.userid)},onUpdateTap:function(n){e.setStorageSync("useridTag",this.userid),this.$utils.jump("./add-or-update?id=".concat(n))},onAddTap:function(){e.setStorageSync("useridTag",this.userid),this.$utils.jump("./add-or-update")},onDeleteTap:function(n){var t=this;e.showModal({title:"提示",content:"是否确认删除",success:function(){var e=s(i.default.mark((function e(r){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r.confirm){e.next=5;break}return e.next=3,t.$api.del("shangpinxinxi",JSON.stringify([n]));case 3:t.hasNext=!0,t.mescroll.resetUpScroll();case 5:case"end":return e.stop()}}),e)})));function r(n){return e.apply(this,arguments)}return r}()})},search:function(){var e=this;return s(i.default.mark((function n(){var t,r;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.mescroll.num=1,t={page:e.mescroll.num,limit:e.mescroll.size},e.searchForm.shangpinmingcheng&&(t["shangpinmingcheng"]="%"+e.searchForm.shangpinmingcheng+"%"),e.searchForm.shangpinfenlei&&(t["shangpinfenlei"]="%"+e.searchForm.shangpinfenlei+"%"),e.searchForm.pinpai&&(t["pinpai"]="%"+e.searchForm.pinpai+"%"),r={},!e.userid){n.next=12;break}return n.next=9,e.$api.page("shangpinxinxi",t);case 9:r=n.sent,n.next=15;break;case 12:return n.next=14,e.$api.list("shangpinxinxi",t);case 14:r=n.sent;case 15:1==e.mescroll.num&&(e.list=[]),e.list=e.list.concat(r.data.list),0==r.data.list.length&&(e.hasNext=!1),e.mescroll.endSuccess(e.mescroll.size,e.hasNext);case 19:case"end":return n.stop()}}),n)})))()}}};n.default=o}).call(this,t("543d")["default"])},eea7:function(e,n,t){"use strict";t.r(n);var i=t("d542"),r=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);n["default"]=r.a}},[["492a","common/runtime","common/vendor"]]]);