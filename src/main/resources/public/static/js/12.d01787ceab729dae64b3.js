webpackJsonp([12],{1043:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(1187),o=n.n(s);e.default={components:{WSDebug:o.a},methods:{}}},1072:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(330),o=n.n(s),a=n(334),c=n.n(a);e.default={name:"WSDebug",data:function(){return{received_messages:[],send_message:null,connected:!1}},methods:{send:function(){if(console.log("Send message:"+this.send_message),this.stompClient&&this.stompClient.connected){var t=this.send_message;this.stompClient.send("/app/message/send",t,{})}},connect:function(){var t=this;this.socket=new o.a("https://collectiveone-dev.herokuapp.com"),this.stompClient=c.a.over(this.socket),this.stompClient.connect({},function(e){t.connected=!0,t.stompClient.subscribe("/channel/chat",function(t){console.log(t.body),console.log("sagar")})},function(e){console.log(e),t.connected=!1})},disconnect:function(){this.stompClient&&this.stompClient.disconnect(),this.connected=!1},tickleConnection:function(){this.connected?this.disconnect():this.connect()}},mounted:function(){}}},1073:function(t,e,n){e=t.exports=n(892)(!0),e.push([t.i,"tbody tr{height:20px!important}","",{version:3,sources:["/home/pepo/workspace/c1master/frontend/src/components/websocket/debug/WSDebug.css"],names:[],mappings:"AACA,SACI,qBAAwB,CAC3B",file:"WSDebug.css",sourcesContent:["\ntbody tr{\n    height: 20px !important;\n}"],sourceRoot:""}])},1101:function(t,e,n){e=t.exports=n(892)(!0),e.push([t.i,".welcome-header[data-v-66d65d7a]{background-color:#f7f7f7;padding-top:195px;height:500px;text-align:center}.welcome-header button[data-v-66d65d7a]{width:150px}","",{version:3,sources:["/home/pepo/workspace/c1master/frontend/src/components/WebSocketDebugPage.vue"],names:[],mappings:"AAKA,iCACE,yBAAqC,AACrC,kBAAmB,AACnB,aAAc,AACd,iBAAmB,CACpB,AACD,wCACE,WAAa,CACd",file:"WebSocketDebugPage.vue",sourcesContent:["\n.navbar[data-v-66d65d7a] {\n}\n.logo[data-v-66d65d7a] {\n}\n.welcome-header[data-v-66d65d7a] {\n  background-color: rgb(247, 247, 247);\n  padding-top: 195px;\n  height: 500px;\n  text-align: center;\n}\n.welcome-header button[data-v-66d65d7a] {\n  width: 150px;\n}\n\n"],sourceRoot:""}])},1111:function(t,e,n){var s=n(1073);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(893)("76a2a426",s,!0)},1139:function(t,e,n){var s=n(1101);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(893)("72e1e240",s,!0)},1187:function(t,e,n){var s={};s.$style=n(1111);var o=n(2)(n(1072),n(1188),null,s);t.exports=o.exports},1188:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"w3-container",attrs:{id:"main-content"}},[n("h1",[t._v("WebSocket Debug Page")]),t._v(" "),n("div",{staticClass:"w3-row"},[n("div",{staticClass:"w3-half"},[n("form",{staticClass:"w3-container"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"connect"}},[t._v("WebSocket connection:")]),t._v(" "),n("button",{staticClass:"w3-button transfer-button app-button",attrs:{id:"connect",type:"submit",disabled:1==t.connected},on:{click:function(e){e.preventDefault(),t.connect(e)}}},[t._v("Connect")]),t._v(" "),n("button",{staticClass:"w3-button transfer-button app-button",attrs:{id:"disconnect",type:"submit",disabled:0==t.connected},on:{click:function(e){e.preventDefault(),t.disconnect(e)}}},[t._v("Disconnect\n                        ")])])])]),t._v(" "),n("div",{staticClass:"w3-half"},[n("form",{staticClass:"form-inline"},[n("div",{staticClass:"form-group"},[n("label",[t._v("Type Some Text")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.send_message,expression:"send_message"}],staticClass:"w3-input",attrs:{id:"name",placeholder:"Your text here..."},domProps:{value:t.send_message},on:{input:function(e){e.target.composing||(t.send_message=e.target.value)}}})]),t._v(" "),n("p",[n("button",{staticClass:"w3-button transfer-button app-button",attrs:{id:"send",type:"submit"},on:{click:function(e){e.preventDefault(),t.send(e)}}},[t._v("Send")])])])])]),t._v(" "),n("div",{staticClass:"w3-row"},[n("div",{staticClass:"m12"},[n("table",{staticClass:"table table-striped",attrs:{id:"conversation"}},[t._m(0,!1,!1),t._v(" "),n("tbody",t._l(t.received_messages,function(e){return n("tr",{key:e},[n("td",[t._v(t._s(e))])])}))])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Response From Server")])])])}]}},1216:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("div",{staticClass:"w3-row"},[n("WSDebug")],1)])},staticRenderFns:[]}},900:function(t,e,n){n(1139);var s=n(2)(n(1043),n(1216),"data-v-66d65d7a",null);t.exports=s.exports}});
//# sourceMappingURL=12.d01787ceab729dae64b3.js.map