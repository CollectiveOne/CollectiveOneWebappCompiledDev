webpackJsonp([13],{1071:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{show:!1}},methods:{showNow:function(){var t=this;this.show=!0,setTimeout(function(){t.show=!1},5e3)}},mounted:function(){var t=this;this.$route.query.fromAll&&this.axios.put("/1/notifications/unsubscribeFromAll").then(function(e){t.message="Thats it! you wont receive further email notifications from CollectiveOne. Please contact CollectiveOne to enable them back.",t.showNow()}),this.$route.query.fromInitiativeId&&this.axios.put("/1/notifications/unsubscribeFromInitiative/"+this.$route.query.fromInitiativeId).then(function(e){t.message="Thats it! you wont receive further email notifications for activity in "+t.$route.query.fromInitiativeName+". Please visit that initiative page to enable them back.",t.showNow()})}}},1107:function(t,e,i){e=t.exports=i(897)(!0),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Unsubscribe.vue",sourceRoot:""}])},1145:function(t,e,i){var o=i(1107);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);i(898)("6c2d823c",o,!0)},1222:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"slider-container"},[i("transition",{attrs:{name:"slideDownUp"}},[t.show?i("div",{staticClass:"w3-panel w3-padding light-grey"},[i("h3",[t._v(t._s(t.message))])]):t._e()])],1)},staticRenderFns:[]}},914:function(t,e,i){i(1145);var o=i(2)(i(1071),i(1222),null,null);t.exports=o.exports}});
//# sourceMappingURL=13.cc6df698bcb8b7b3760a.js.map