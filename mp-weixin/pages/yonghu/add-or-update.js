(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yonghu/add-or-update"],{1963:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return r}));var a=function(){var e=this,n=e.$createElement;e._self._c},i=[]},3569:function(e,n,t){"use strict";var r=t("622e"),a=t.n(r);a.a},"409d":function(e,n,t){"use strict";t.r(n);var r=t("ad18"),a=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=a.a},"622e":function(e,n,t){},"881a":function(e,n,t){"use strict";t.r(n);var r=t("1963"),a=t("409d");for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("3569");var u,o=t("f0c5"),s=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"06bcd006",null,!1,r["a"],u);n["default"]=s.exports},ad18:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,r,a,i,u){try{var o=e[i](u),s=o.value}catch(c){return void t(c)}o.done?n(s):Promise.resolve(s).then(r,a)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var u=e.apply(n,t);function o(e){i(u,r,a,o,s,"next",e)}function s(e){i(u,r,a,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("52cf"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{cross:"",ruleForm:{yonghuming:"",yonghuxingming:"",mima:"",xingbie:"",lianxidianhua:"",money:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{yonghuming:!1,yonghuxingming:!1,mima:!1,xingbie:!1,lianxidianhua:!1,money:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var t=this;return u(r.default.mark((function a(){var i,u,o,s;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=e.getStorageSync("nowTable"),a.next=3,t.$api.session(i);case 3:if(u=a.sent,t.user=u.data,t.xingbieOptions="男,女".split(","),t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){a.next=14;break}return t.ruleForm.id=n.id,a.next=12,t.$api.info("yonghu",t.ruleForm.id);case 12:u=a.sent,t.ruleForm=u.data;case 14:if(t.cross=n.cross,!n.cross){a.next=46;break}o=e.getStorageSync("crossObj"),a.t0=r.default.keys(o);case 18:if((a.t1=a.t0()).done){a.next=46;break}if(s=a.t1.value,"yonghuming"!=s){a.next=24;break}return t.ruleForm.yonghuming=o[s],t.ro.yonghuming=!0,a.abrupt("continue",18);case 24:if("yonghuxingming"!=s){a.next=28;break}return t.ruleForm.yonghuxingming=o[s],t.ro.yonghuxingming=!0,a.abrupt("continue",18);case 28:if("mima"!=s){a.next=32;break}return t.ruleForm.mima=o[s],t.ro.mima=!0,a.abrupt("continue",18);case 32:if("xingbie"!=s){a.next=36;break}return t.ruleForm.xingbie=o[s],t.ro.xingbie=!0,a.abrupt("continue",18);case 36:if("lianxidianhua"!=s){a.next=40;break}return t.ruleForm.lianxidianhua=o[s],t.ro.lianxidianhua=!0,a.abrupt("continue",18);case 40:if("money"!=s){a.next=44;break}return t.ruleForm.money=o[s],t.ro.money=!0,a.abrupt("continue",18);case 44:a.next=18;break;case 46:t.styleChange();case 47:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(r.default.mark((function t(){var a,i,u,o,s,c,l,g,f,m;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.ruleForm.yonghuming){t.next=3;break}return n.$utils.msg("用户名不能为空"),t.abrupt("return");case 3:if(n.ruleForm.yonghuxingming){t.next=6;break}return n.$utils.msg("用户姓名不能为空"),t.abrupt("return");case 6:if(n.ruleForm.mima){t.next=9;break}return n.$utils.msg("密码不能为空"),t.abrupt("return");case 9:if(!n.ruleForm.lianxidianhua||n.$validate.isMobile(n.ruleForm.lianxidianhua)){t.next=12;break}return n.$utils.msg("联系电话应输入手机格式"),t.abrupt("return");case 12:if(!n.ruleForm.money||n.$validate.isNumber(n.ruleForm.money)){t.next=15;break}return n.$utils.msg("余额应输入数字"),t.abrupt("return");case 15:if(!n.cross){t.next=31;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){t.next=31;break}if(c=e.getStorageSync("crossObj"),o.startsWith("[")){t.next=27;break}for(l in c)l==o&&(c[l]=s);return g=e.getStorageSync("crossTable"),t.next=25,n.$api.update("".concat(g),c);case 25:t.next=31;break;case 27:a=Number(e.getStorageSync("userid")),i=c["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 31:if(!i||!a){t.next=53;break}return n.ruleForm.crossuserid=a,n.ruleForm.crossrefid=i,f={page:1,limit:10,crossuserid:a,crossrefid:i},t.next=37,n.$api.list("yonghu",f);case 37:if(m=t.sent,!(m.data.total>=u)){t.next=43;break}return n.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 43:if(!n.ruleForm.id){t.next=48;break}return t.next=46,n.$api.update("yonghu",n.ruleForm);case 46:t.next=50;break;case 48:return t.next=50,n.$api.add("yonghu",n.ruleForm);case 50:n.$utils.msgBack("提交成功");case 51:t.next=61;break;case 53:if(!n.ruleForm.id){t.next=58;break}return t.next=56,n.$api.update("yonghu",n.ruleForm);case 56:t.next=60;break;case 58:return t.next=60,n.$api.add("yonghu",n.ruleForm);case 60:n.$utils.msgBack("提交成功");case 61:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,a=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(t,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,t("543d")["default"])},d4af:function(e,n,t){"use strict";(function(e){t("96b2");r(t("66fd"));var n=r(t("881a"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])}},[["d4af","common/runtime","common/vendor"]]]);