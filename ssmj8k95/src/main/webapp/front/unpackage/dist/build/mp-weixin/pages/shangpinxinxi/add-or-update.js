(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangpinxinxi/add-or-update"],{"1e4b":function(e,n,t){"use strict";(function(e){t("96b2");r(t("66fd"));var n=r(t("ca0b"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},3857:function(e,n,t){"use strict";t.r(n);var r=t("e4ed"),i=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=i.a},"7ddf":function(e,n,t){},"82dd":function(e,n,t){"use strict";var r=t("7ddf"),i=t.n(r);i.a},ca0b:function(e,n,t){"use strict";t.r(n);var r=t("fe1f"),i=t("3857");for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);t("82dd");var u,c=t("f0c5"),o=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"181cfb6d",null,!1,r["a"],u);n["default"]=o.exports},e4ed:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,r,i,a,u){try{var c=e[a](u),o=c.value}catch(s){return void t(s)}c.done?n(o):Promise.resolve(o).then(r,i)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var u=e.apply(n,t);function c(e){a(u,r,i,c,o,"next",e)}function o(e){a(u,r,i,c,o,"throw",e)}c(void 0)}))}}var c=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("52cf"))}.bind(null,t)).catch(t.oe)},o={data:function(){return{cross:"",ruleForm:{shangpinmingcheng:"",shangpinfenlei:"",pinpai:"",xiangqing:"",fengmian:"",price:""},shangpinfenleiOptions:[],shangpinfenleiIndex:0,user:{},ro:{shangpinmingcheng:!1,shangpinfenlei:!1,pinpai:!1,xiangqing:!1,fengmian:!1,clicktime:!1,clicknum:!1,price:!1}}},components:{wPicker:c},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var t=this;return u(r.default.mark((function i(){var a,u,c,o;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=e.getStorageSync("nowTable"),i.next=3,t.$api.session(a);case 3:return u=i.sent,t.user=u.data,i.next=7,t.$api.option("shangpinfenlei","shangpinfenlei",{});case 7:if(u=i.sent,t.shangpinfenleiOptions=u.data,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){i.next=17;break}return t.ruleForm.id=n.id,i.next=15,t.$api.info("shangpinxinxi",t.ruleForm.id);case 15:u=i.sent,t.ruleForm=u.data;case 17:if(t.cross=n.cross,!n.cross){i.next=57;break}c=e.getStorageSync("crossObj"),i.t0=r.default.keys(c);case 21:if((i.t1=i.t0()).done){i.next=57;break}if(o=i.t1.value,"shangpinmingcheng"!=o){i.next=27;break}return t.ruleForm.shangpinmingcheng=c[o],t.ro.shangpinmingcheng=!0,i.abrupt("continue",21);case 27:if("shangpinfenlei"!=o){i.next=31;break}return t.ruleForm.shangpinfenlei=c[o],t.ro.shangpinfenlei=!0,i.abrupt("continue",21);case 31:if("pinpai"!=o){i.next=35;break}return t.ruleForm.pinpai=c[o],t.ro.pinpai=!0,i.abrupt("continue",21);case 35:if("xiangqing"!=o){i.next=39;break}return t.ruleForm.xiangqing=c[o],t.ro.xiangqing=!0,i.abrupt("continue",21);case 39:if("fengmian"!=o){i.next=43;break}return t.ruleForm.fengmian=c[o],t.ro.fengmian=!0,i.abrupt("continue",21);case 43:if("clicktime"!=o){i.next=47;break}return t.ruleForm.clicktime=c[o],t.ro.clicktime=!0,i.abrupt("continue",21);case 47:if("clicknum"!=o){i.next=51;break}return t.ruleForm.clicknum=c[o],t.ro.clicknum=!0,i.abrupt("continue",21);case 51:if("price"!=o){i.next=55;break}return t.ruleForm.price=c[o],t.ro.price=!0,i.abrupt("continue",21);case 55:i.next=21;break;case 57:t.styleChange();case 58:case"end":return i.stop()}}),i)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},shangpinfenleiChange:function(e){this.shangpinfenleiIndex=e.target.value,this.ruleForm.shangpinfenlei=this.shangpinfenleiOptions[this.shangpinfenleiIndex]},fengmianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.fengmian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(r.default.mark((function t(){var i,a,u,c,o,s,l,f,p,g;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.ruleForm.clicknum||n.$validate.isIntNumer(n.ruleForm.clicknum)){t.next=3;break}return n.$utils.msg("点击次数应输入整数"),t.abrupt("return");case 3:if(!n.ruleForm.price||n.$validate.isNumber(n.ruleForm.price)){t.next=6;break}return n.$utils.msg("价格应输入数字"),t.abrupt("return");case 6:if(!n.cross){t.next=22;break}if(c=e.getStorageSync("statusColumnName"),o=e.getStorageSync("statusColumnValue"),""==c){t.next=22;break}if(s=e.getStorageSync("crossObj"),c.startsWith("[")){t.next=18;break}for(l in s)l==c&&(s[l]=o);return f=e.getStorageSync("crossTable"),t.next=16,n.$api.update("".concat(f),s);case 16:t.next=22;break;case 18:i=Number(e.getStorageSync("userid")),a=s["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 22:if(!a||!i){t.next=44;break}return n.ruleForm.crossuserid=i,n.ruleForm.crossrefid=a,p={page:1,limit:10,crossuserid:i,crossrefid:a},t.next=28,n.$api.list("shangpinxinxi",p);case 28:if(g=t.sent,!(g.data.total>=u)){t.next=34;break}return n.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 34:if(!n.ruleForm.id){t.next=39;break}return t.next=37,n.$api.update("shangpinxinxi",n.ruleForm);case 37:t.next=41;break;case 39:return t.next=41,n.$api.add("shangpinxinxi",n.ruleForm);case 41:n.$utils.msgBack("提交成功");case 42:t.next=52;break;case 44:if(!n.ruleForm.id){t.next=49;break}return t.next=47,n.$api.update("shangpinxinxi",n.ruleForm);case 47:t.next=51;break;case 49:return t.next=51,n.$api.add("shangpinxinxi",n.ruleForm);case 51:n.$utils.msgBack("提交成功");case 52:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,i=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(t,"-").concat(r,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};n.default=o}).call(this,t("543d")["default"])},fe1f:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"52cf"))}},i=function(){var e=this,n=e.$createElement;e._self._c},a=[]}},[["1e4b","common/runtime","common/vendor"]]]);