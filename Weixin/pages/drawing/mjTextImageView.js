(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/drawing/mjTextImageView"],{"0fee":function(e,n,t){"use strict";(function(e){var r=t("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("2eee")),i=r(t("c973")),o=t("8b57"),u={components:{LoadingComponent:function(){t.e("wxcomponents/components/loadingComponent").then(function(){return resolve(t("10e5"))}.bind(null,t)).catch(t.oe)},GenerateLoadingComponent:function(){t.e("pages/drawing/components/generateLoadingComponent").then(function(){return resolve(t("8058"))}.bind(null,t)).catch(t.oe)}},data:function(){return{form:{prompt:""},msg:"正在检查绘图服务运行状态"}},methods:{previousPage:function(){e.navigateBack()},stopTimer:function(){clearInterval(this.timer)},submit:function(){var n=(0,i.default)(a.default.mark((function n(){var t;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t=this.form.prompt,t||e.showToast({title:"请填写描述",icon:"none",duration:4e3});case 2:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}(),previewImage:function(n){e.previewImage({urls:[n]})},examineServer:function(){var n=(0,i.default)(a.default.mark((function n(){var t,r;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=this.$refs.loadingRef,n.prev=1,t.openShow(),n.next=5,(0,o.mjConnectivity)(0);case 5:if(r=n.sent,r){n.next=10;break}return this.msg="请联系小程序管理员开启绘图服务",setTimeout((function(){e.navigateBack()}),3e3),n.abrupt("return");case 10:t.closeShow(),n.next=17;break;case 13:n.prev=13,n.t0=n["catch"](1),this.msg=n.t0,setTimeout((function(){e.navigateBack()}),3e3);case 17:case"end":return n.stop()}}),n,this,[[1,13]])})));return function(){return n.apply(this,arguments)}}(),isDrawingSucceed:function(){var n=(0,i.default)(a.default.mark((function n(t){var r,i,u;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=this,i=this.$refs.generateLoadingRef,n.next=4,(0,o.isDrawingSucceed)(t);case 4:u=n.sent,u&&(i.closeShow(),r.stopTimer(),e.navigateTo({url:"/pages/drawing/drawingResultView?drawingId="+t}));case 6:case"end":return n.stop()}}),n,this)})));return function(e){return n.apply(this,arguments)}}()},onUnload:function(){e.$emit("master_userInfo")},beforeDestroy:function(){clearInterval(this.timer)},onLoad:function(){this.examineServer()}};n.default=u}).call(this,t("543d")["default"])},"247a":function(e,n,t){"use strict";(function(e,n){var r=t("4ea4");t("4943");r(t("66fd"));var a=r(t("7fd3"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(a.default)}).call(this,t("bc2e")["default"],t("543d")["createPage"])},"330a":function(e,n,t){"use strict";t.r(n);var r=t("0fee"),a=t.n(r);for(var i in r)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=a.a},"3e97":function(e,n,t){},"7fd3":function(e,n,t){"use strict";t.r(n);var r=t("cd90"),a=t("330a");for(var i in a)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("fce0");var o=t("f0c5"),u=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);n["default"]=u.exports},cd90:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){}));var r=function(){var e=this.$createElement;this._self._c},a=[]},fce0:function(e,n,t){"use strict";var r=t("3e97"),a=t.n(r);a.a}},[["247a","common/runtime","common/vendor"]]]);