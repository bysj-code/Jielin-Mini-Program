(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shangpinxinxi-add-or-update"],{"1baa":function(r,e,i){"use strict";var t=i("a680"),n=i.n(t);n.a},"565d":function(r,e,i){"use strict";i.r(e);var t=i("ea09"),n=i("f9f4");for(var a in n)"default"!==a&&function(r){i.d(e,r,(function(){return n[r]}))}(a);i("1baa");var o,s=i("f0c5"),d=Object(s["a"])(n["default"],t["b"],t["c"],!1,null,"6754f354",null,!1,t["a"],o);e["default"]=d.exports},a680:function(r,e,i){var t=i("ca44");"string"===typeof t&&(t=[[r.i,t,""]]),t.locals&&(r.exports=t.locals);var n=i("4f06").default;n("5764cdb8",t,!0,{sourceMap:!1,shadowMode:!1})},c955:function(r,e,i){"use strict";var t=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a481"),i("c5f6"),i("f559"),i("ac6a"),i("96cf");var n=t(i("3b8d")),a=t(i("e2b1")),o={data:function(){return{cross:"",ruleForm:{shangpinmingcheng:"",shangpinfenlei:"",pinpai:"",xiangqing:"",fengmian:"",price:""},shangpinfenleiOptions:[],shangpinfenleiIndex:0,user:{},ro:{shangpinmingcheng:!1,shangpinfenlei:!1,pinpai:!1,xiangqing:!1,fengmian:!1,clicktime:!1,clicknum:!1,price:!1}}},components:{wPicker:a.default},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var r=(0,n.default)(regeneratorRuntime.mark((function r(e){var i,t,n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i=uni.getStorageSync("nowTable"),r.next=3,this.$api.session(i);case 3:return t=r.sent,this.user=t.data,r.next=7,this.$api.option("shangpinfenlei","shangpinfenlei",{});case 7:if(t=r.sent,this.shangpinfenleiOptions=t.data,this.ruleForm.userid=uni.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!e.id){r.next=17;break}return this.ruleForm.id=e.id,r.next=15,this.$api.info("shangpinxinxi",this.ruleForm.id);case 15:t=r.sent,this.ruleForm=t.data;case 17:if(this.cross=e.cross,!e.cross){r.next=57;break}n=uni.getStorageSync("crossObj"),r.t0=regeneratorRuntime.keys(n);case 21:if((r.t1=r.t0()).done){r.next=57;break}if(a=r.t1.value,"shangpinmingcheng"!=a){r.next=27;break}return this.ruleForm.shangpinmingcheng=n[a],this.ro.shangpinmingcheng=!0,r.abrupt("continue",21);case 27:if("shangpinfenlei"!=a){r.next=31;break}return this.ruleForm.shangpinfenlei=n[a],this.ro.shangpinfenlei=!0,r.abrupt("continue",21);case 31:if("pinpai"!=a){r.next=35;break}return this.ruleForm.pinpai=n[a],this.ro.pinpai=!0,r.abrupt("continue",21);case 35:if("xiangqing"!=a){r.next=39;break}return this.ruleForm.xiangqing=n[a],this.ro.xiangqing=!0,r.abrupt("continue",21);case 39:if("fengmian"!=a){r.next=43;break}return this.ruleForm.fengmian=n[a],this.ro.fengmian=!0,r.abrupt("continue",21);case 43:if("clicktime"!=a){r.next=47;break}return this.ruleForm.clicktime=n[a],this.ro.clicktime=!0,r.abrupt("continue",21);case 47:if("clicknum"!=a){r.next=51;break}return this.ruleForm.clicknum=n[a],this.ro.clicknum=!0,r.abrupt("continue",21);case 51:if("price"!=a){r.next=55;break}return this.ruleForm.price=n[a],this.ro.price=!0,r.abrupt("continue",21);case 55:r.next=21;break;case 57:this.styleChange();case 58:case"end":return r.stop()}}),r,this)})));function e(e){return r.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},clicktimeConfirm:function(r){console.log(r),this.ruleForm.clicktime=r.result,this.$forceUpdate()},shangpinfenleiChange:function(r){this.shangpinfenleiIndex=r.target.value,this.ruleForm.shangpinfenlei=this.shangpinfenleiOptions[this.shangpinfenleiIndex]},fengmianTap:function(){var r=this;this.$api.upload((function(e){r.ruleForm.fengmian="upload/"+e.file,r.$forceUpdate(),r.$nextTick((function(){r.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var r=(0,n.default)(regeneratorRuntime.mark((function r(){var e,i,t,n,a,o,s,d,l,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){r.next=3;break}return this.$utils.msg("点击次数应输入整数"),r.abrupt("return");case 3:if(!this.ruleForm.price||this.$validate.isNumber(this.ruleForm.price)){r.next=6;break}return this.$utils.msg("价格应输入数字"),r.abrupt("return");case 6:if(!this.cross){r.next=22;break}if(n=uni.getStorageSync("statusColumnName"),a=uni.getStorageSync("statusColumnValue"),""==n){r.next=22;break}if(o=uni.getStorageSync("crossObj"),n.startsWith("[")){r.next=18;break}for(s in o)s==n&&(o[s]=a);return d=uni.getStorageSync("crossTable"),r.next=16,this.$api.update("".concat(d),o);case 16:r.next=22;break;case 18:e=Number(uni.getStorageSync("userid")),i=o["id"],t=uni.getStorageSync("statusColumnName"),t=t.replace(/\[/,"").replace(/\]/,"");case 22:if(!i||!e){r.next=44;break}return this.ruleForm.crossuserid=e,this.ruleForm.crossrefid=i,l={page:1,limit:10,crossuserid:e,crossrefid:i},r.next=28,this.$api.list("shangpinxinxi",l);case 28:if(c=r.sent,!(c.data.total>=t)){r.next=34;break}return this.$utils.msg(uni.getStorageSync("tips")),r.abrupt("return",!1);case 34:if(!this.ruleForm.id){r.next=39;break}return r.next=37,this.$api.update("shangpinxinxi",this.ruleForm);case 37:r.next=41;break;case 39:return r.next=41,this.$api.add("shangpinxinxi",this.ruleForm);case 41:this.$utils.msgBack("提交成功");case 42:r.next=52;break;case 44:if(!this.ruleForm.id){r.next=49;break}return r.next=47,this.$api.update("shangpinxinxi",this.ruleForm);case 47:r.next=51;break;case 49:return r.next=51,this.$api.add("shangpinxinxi",this.ruleForm);case 51:this.$utils.msgBack("提交成功");case 52:case"end":return r.stop()}}),r,this)})));function e(){return r.apply(this,arguments)}return e}(),optionsChange:function(r){this.index=r.target.value},bindDateChange:function(r){this.date=r.target.value},getDate:function(r){var e=new Date,i=e.getFullYear(),t=e.getMonth()+1,n=e.getDate();return"start"===r?i-=60:"end"===r&&(i+=2),t=t>9?t:"0"+t,n=n>9?n:"0"+n,"".concat(i,"-").concat(t,"-").concat(n)},toggleTab:function(r){this.$refs[r].show()}}};e.default=o},ca44:function(r,e,i){var t=i("24fb");e=t(!1),e.push([r.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-6754f354]{padding:%?20?%}.content[data-v-6754f354]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-image:url(http://codegen.caihongy.cn/20220210/87bd12d356ac4a8e90125da208a7597e.png);background-attachment:fixed;background-size:cover;background-position:50%}uni-textarea[data-v-6754f354]{border:%?1?% solid #eee;border-radius:%?20?%;padding:%?20?%}.title[data-v-6754f354]{width:%?180?%}.avator[data-v-6754f354]{width:%?150?%;height:%?60?%}.right-input[data-v-6754f354]{-webkit-box-flex:1;-webkit-flex:1;flex:1;text-align:left;padding:0 %?24?%}.cu-form-group.active[data-v-6754f354]{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.btn[data-v-6754f354]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap;padding:%?20?% 0}.cu-form-group[data-v-6754f354]{padding:0 %?24?%;background-color:initial;min-height:inherit}.cu-form-group + .cu-form-group[data-v-6754f354]{border:0}.cu-form-group uni-input[data-v-6754f354]{padding:0 %?30?%}.uni-input[data-v-6754f354]{padding:0 %?30?%}.cu-form-group uni-textarea[data-v-6754f354]{padding:%?30?%;margin:0}.cu-form-group uni-picker[data-v-6754f354]::after{line-height:%?80?%}.select .uni-input[data-v-6754f354]{line-height:%?80?%}.input .right-input[data-v-6754f354]{line-height:%?88?%}',""]),r.exports=e},ea09:function(r,e,i){"use strict";var t={"w-picker":i("e2b1").default},n=function(){var r=this,e=r.$createElement,i=r._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-form",{staticClass:"app-update-pv"},[i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("商品名称")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.shangpinmingcheng,placeholder:"商品名称"},model:{value:r.ruleForm.shangpinmingcheng,callback:function(e){r.$set(r.ruleForm,"shangpinmingcheng",e)},expression:"ruleForm.shangpinmingcheng"}})],1),i("v-uni-view",{staticClass:"cu-form-group select",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("商品分类")]),i("v-uni-picker",{attrs:{value:r.shangpinfenleiIndex,range:r.shangpinfenleiOptions},on:{change:function(e){arguments[0]=e=r.$handleEvent(e),r.shangpinfenleiChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v(r._s(r.ruleForm.shangpinfenlei?r.ruleForm.shangpinfenlei:"请选择商品分类"))])],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("品牌")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.pinpai,placeholder:"品牌"},model:{value:r.ruleForm.pinpai,callback:function(e){r.$set(r.ruleForm,"pinpai",e)},expression:"ruleForm.pinpai"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.fengmianTap.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("封面")]),i("v-uni-view",{staticClass:"right-input",staticStyle:{padding:"0"}},[r.ruleForm.fengmian?i("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 auto",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:r.baseUrl+r.ruleForm.fengmian,mode:"aspectFill"}}):i("v-uni-image",{staticClass:"avator",style:{padding:"0",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 auto",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",borderRadius:"100%",borderWidth:"0",width:"88rpx",borderStyle:"solid",height:"88rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1)],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#ccc",backgroundColor:"rgba(255, 255, 255, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"108rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(130, 163, 157, 1)",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("价格")]),i("v-uni-input",{style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",borderColor:"rgba(0,0,0,.6)",backgroundColor:"rgba(255, 255, 255, 0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"16rpx",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"88rpx"},attrs:{disabled:r.ro.price,placeholder:"价格"},model:{value:r.ruleForm.price,callback:function(e){r.$set(r.ruleForm,"price",e)},expression:"ruleForm.price"}})],1),i("v-uni-view",{staticClass:"cu-form-group",style:{padding:"0 30rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",backgroundColor:"rgba(255, 255, 255, 1)",borderColor:"#ccc",margin:"0 0 20rpx 0",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"308rpx"}},[i("v-uni-view",{staticClass:"title",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"rgba(0,0,0,0)",color:"rgba(161, 161, 161, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[r._v("详情")]),i("v-uni-textarea",{style:{padding:"20rpx",boxShadow:"0 0 0px rgba(0,0,0,.6) inset",margin:"0",backgroundColor:"rgba(255, 255, 255, 0)",borderColor:"rgba(0,0,0,.6)",borderRadius:"16rpx",color:"rgba(161, 161, 161, 1)",borderWidth:"2rpx",width:"calc(100% - 160rpx)",fontSize:"28rpx",borderStyle:"solid",height:"280rpx"},attrs:{placeholder:"详情"},model:{value:r.ruleForm.xiangqing,callback:function(e){r.$set(r.ruleForm,"xiangqing",e)},expression:"ruleForm.xiangqing"}})],1),i("v-uni-view",{staticClass:"btn"},[i("v-uni-button",{staticClass:"bg-red",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0) inset",margin:"0",backgroundColor:"rgba(130, 163, 157, 1)",borderColor:"rgba(130, 163, 157, 1)",borderRadius:"80rpx",color:"#fff",borderWidth:"1",width:"80%",fontSize:"28rpx",borderStyle:"solid",height:"80rpx"},on:{click:function(e){arguments[0]=e=r.$handleEvent(e),r.onSubmitTap.apply(void 0,arguments)}}},[r._v("提交")])],1)],1),i("w-picker",{ref:"clicktime",attrs:{mode:"dateTime",step:"1",current:!1,hasSecond:!1,themeColor:"#333333"},on:{confirm:function(e){arguments[0]=e=r.$handleEvent(e),r.clicktimeConfirm.apply(void 0,arguments)}}})],1)},a=[];i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return t}))},f9f4:function(r,e,i){"use strict";i.r(e);var t=i("c955"),n=i.n(t);for(var a in t)"default"!==a&&function(r){i.d(e,r,(function(){return t[r]}))}(a);e["default"]=n.a}}]);