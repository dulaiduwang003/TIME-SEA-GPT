(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dialogue/gptDialogueView"],{"420d":function(t,e,n){"use strict";n.r(e);var o=n("c3a7"),a=n("5387");for(var i in a)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("c7c1");var c=n("f0c5"),r=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);e["default"]=r.exports},5387:function(t,e,n){"use strict";n.r(e);var o=n("cdc1"),a=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=a.a},"8ad2":function(t,e,n){"use strict";(function(t,e){var o=n("4ea4");n("4943");o(n("66fd"));var a=o(n("420d"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(a.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},c3a7:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.chatTemporary.length),o=n<=0?null:t.__map(t.chatTemporary,(function(e,n){var o=t.__get_orig(e),a=t.userInfo.avatar?t.conversionImage(t.userInfo.avatar):null,i=e.isSucceed?e.answer.trim().length:null;return{$orig:o,m0:a,g1:i}}));t._isMounted||(t.e0=function(e){t.mode=!t.mode}),t.$mp.data=Object.assign({},{$root:{g0:n,l0:o}})},a=[]},c7c1:function(t,e,n){"use strict";var o=n("cb6f"),a=n.n(o);a.a},cb6f:function(t,e,n){},cdc1:function(t,e,n){"use strict";(function(t){var o=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n("2eee")),i=o(n("c973")),c=o(n("cd24")),r=o(n("9e95")),s=n("024e"),u=n("6855"),l=n("3ae9"),f={computed:{env:function(){return r.default},md:function(){return c.default.tagStyle}},created:function(){this.userInfo=(0,s.getUser)()},onUnload:function(){t.$emit("master_userInfo"),(0,s.removeChat)(),this.closeSocket()},onLoad:function(e){var n=t.createAnimation({duration:1e3,timingFunction:"ease-in-out"});if(n.translate(0,-50).step(),this.animationData=n.export(),this.loadTitle(),e.continue){var o=(0,s.getChat)();this.chatTemporary.push(o),this.context.push(o)}},data:function(){return{mode:!1,userInfo:{},input:"",chatTemporary:[],context:[],isNextSend:!0,scrollTop:0,animationData:{},title:""}},methods:{conversionImage:l.conversionImage,closeSocket:function(){t.closeSocket({success:function(){console.log("用户主动关闭连接")},fail:function(t){console.log("连接被正常关闭")}})},getUser:s.getUser,copyBotContext:function(e){var n=this.chatTemporary[e].answer;t.setClipboardData({data:n,success:function(){t.showToast({title:"复制成功",icon:"success"})}})},copyPersonContext:function(e){var n=this.chatTemporary[e].question;t.setClipboardData({data:n,success:function(){t.showToast({title:"复制成功",icon:"success"})}})},sendMessage:function(){var e=this;if(this.isNextSend){var n=e.input;if(/^\s*$/.test(n))t.showToast({title:"不能发送空白消息",icon:"none",duration:2e3});else if(n=n.toUpperCase().replace(/\s/g,""),r.default.filtration.some((function(t){return n.includes(t)})))t.showToast({title:"请勿发布违法微信社区相关的消息",icon:"none",duration:2e3});else{e.isNextSend=!1;var o=this.input;e.input="";var a={question:o,answer:"",isSucceed:!1,starId:void 0};this.chatTemporary.push(a);var i=this.chatTemporary.length-1;setTimeout((function(){e.scrollToBottom()}),200);var c=this.mode?"gpt-4-0314":"gpt-3.5-turbo";t.connectSocket({url:r.default.baseWs+"/gpt/api/"+(0,s.getToken)()+"/"+c}),t.onSocketOpen((function(){e.context.length>r.default.memory&&e.context.shift(),e.context.forEach((function(t){t.question.length>r.default.contextLength&&(t.question=t.question.substring(0,r.default.contextLength)+"//省略..."),t.answer.length>r.default.contextLength&&(t.answer=t.answer.substring(0,r.default.contextLength)+"//省略...")})),t.sendSocketMessage({data:JSON.stringify({prompt:o,context:e.context})})})),t.onSocketError((function(){e.chatTemporary[i].answer="哎哟! 与服务器建立连接失败,请稍后再试",e.isNextSend=!0})),t.onSocketMessage((function(t){e.chatTemporary[i].answer+=t.data,e.scrollToBottom()})),t.onSocketClose((function(){t.setNavigationBarTitle({title:o}),e.chatTemporary[i].isSucceed=!0,e.chatTemporary[i].answer.trim().length>0?e.context.push(a):e.chatTemporary.splice(i,1),e.isNextSend=!0}))}}},scrollToBottom:function(){var e=this;t.createSelectorQuery().select("#scroll-view-content").boundingClientRect((function(t){t.height>0&&e.$set(e,"scrollTop",t.height)})).exec()},loadTitle:function(){var t=r.default.botInitialization,e=this,n=t[Math.floor(Math.random()*t.length)],o=0,a=setInterval((function(){try{o<=e.title.length?e.title=n.slice(0,o++)+"|":(e.title=n,clearInterval(a))}catch(t){clearInterval(a)}}),60)},starDialogue:function(){var e=(0,i.default)(a.default.mark((function e(n,o,i){var c;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,c=this.chatTemporary[i].starId,!c){e.next=9;break}return e.next=5,(0,u.deleteStarDialogue)(c);case 5:t.showToast({title:"取消成功",icon:"none",duration:2e3}),this.chatTemporary[i].starId=void 0,e.next=13;break;case 9:return e.next=11,(0,u.putStarDialogue)({issue:n,answer:o});case 11:this.chatTemporary[i].starId=e.sent,t.showToast({title:"收藏成功",icon:"none",duration:2e3});case 13:e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](0),t.showToast({title:e.t0,icon:"none",duration:2e3});case 18:case"end":return e.stop()}}),e,this,[[0,15]])})));return function(t,n,o){return e.apply(this,arguments)}}(),clearDialogue:function(){var e=this;this.isNextSend?t.showModal({title:"提示",content:"确定要清空记录嘛?",success:function(t){t.confirm&&(e.chatTemporary=[],e.context=[],e.input="",e.isNextSend=!0)}}):t.showToast({title:"Sorry , 请先等待回复完毕",icon:"none",duration:2e3})}},components:{mpHtml:function(){Promise.all([n.e("common/vendor"),n.e("wxcomponents/mp-html/mp-html")]).then(function(){return resolve(n("8986"))}.bind(null,n)).catch(n.oe)}}};e.default=f}).call(this,n("543d")["default"])}},[["8ad2","common/runtime","common/vendor"]]]);