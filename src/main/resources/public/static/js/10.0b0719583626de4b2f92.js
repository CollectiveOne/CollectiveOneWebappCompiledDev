webpackJsonp([10],{1042:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(1188),a=e.n(n),s=e(328),o=e.n(s);i.default={components:{"app-new-initiative-modal":o.a,"app-initiatives-nav":a.a},data:function(){return{showContent:!0,showNewInitiativeModal:!1}},computed:{expandNav:function(){return this.$store.state.support.expandNav},userAuthenticated:function(){return this.$store.state.user.authenticated},windowIsSmall:function(){return this.$store.state.support.windowIsSmall},basePage:function(){return"Initiatives"===this.$route.name}},methods:{initiativeSelected:function(){this.$store.commit("setExpandNav",!1)}},mounted:function(){this.$store.dispatch("updateMyInitiatives")}}},1068:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(322),a=e.n(n);i.default={name:"app-initiative-menu-item",components:{"app-notifications-list":a.a},props:{initiative:{type:Object,default:function(){return{name:"",driver:"",subInitiatives:[]}}},coord:{type:Array,default:function(){return[]}}},data:function(){return{showSubinitiatives:!1,animatingTab:!1}},computed:{color:function(){return this.initiative.meta.color},level:function(){return this.coord.length-1},isSelected:function(){return this.initiative.id===this.$route.params.initiativeId},bulletClass:function(){return this.hasSubinitiatives?{"bullet-class":!0,"w3-button":!0}:{"bullet-class":!0,"w3-padding":!0,"l3-color":!0,"line-element":!0}},leftSpaceClass:function(){if(this.level>0){var t="s"+(this.level<5?this.level:5),i={};return i[t]=!0,i["w3-col"]=!0,i}return{}},nameSpaceClass:function(){var t=this.level<5?this.level:5,i="s"+(8-t),e={};return e[i]=!0,e},nameColFontSize:function(){return{"font-size":(this.level<5?16-this.level:11)+"px"}},hasSubinitiatives:function(){return this.initiative.subInitiatives.length>0}},methods:{newSubInitiative:function(){this.$store.commit("showNewSubInitiativeModal",{show:!0,parentId:this.initiative.id})},isLoggedAnAdmin:function(){return"ADMIN"===this.initiative.loggedMembership[0].role}},mounted:function(){var t=this.$store.getters.initiativeCoordinate(this.initiative.id),i=this.$store.getters.initiativeCoordinate(this.$route.params.initiativeId);i.length>0&&t.length>0&&i[this.level]===t[this.level]&&(this.showSubinitiatives=!0)}}},1069:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e(1187),a=e.n(n);i.default={components:{"app-initiative-menu-item":a.a},data:function(){return{}},computed:{loading:function(){return this.$store.state.initiativesTree.loadingMyInitiatives},menuInitiatives:function(){return this.$store.getters.initiativesTree()}},methods:{newInitiative:function(){this.$emit("new-initiative")},login:function(){this.$store.state.user.lock.show()},closeNav:function(){this.$store.commit("toggleExpandNav")}}}},1086:function(t,i,e){i=t.exports=e(901)(!0),i.push([t.i,".btns-row[data-v-20a135c7]{padding:16px 12px}.btns-row .w3-button[data-v-20a135c7]{width:100%}.create-new[data-v-20a135c7]{text-align:left}.section-header[data-v-20a135c7]{margin-top:10px}.w3-display-topright[data-v-20a135c7]{width:80px;height:40px;cursor:pointer;z-index:1300;text-align:right}.fa-times[data-v-20a135c7]{margin-right:10px}.top-menu-item[data-v-20a135c7]{margin-bottom:15px}","",{version:3,sources:["/home/pepo/workspace/c1master/frontend/src/components/nav/InitiativesNav.vue"],names:[],mappings:"AAGA,2BACE,iBAAmB,CACpB,AACD,sCACE,UAAY,CACb,AACD,6BACE,eAAiB,CAClB,AACD,iCACE,eAAiB,CAClB,AACD,sCACE,WAAY,AACZ,YAAa,AACb,eAAgB,AAChB,aAAc,AACd,gBAAkB,CACnB,AACD,2BACE,iBAAmB,CACpB,AACD,gCACE,kBAAoB,CACrB",file:"InitiativesNav.vue",sourcesContent:["\n.nav-container[data-v-20a135c7] {\n}\n.btns-row[data-v-20a135c7] {\n  padding: 16px 12px;\n}\n.btns-row .w3-button[data-v-20a135c7] {\n  width: 100%;\n}\n.create-new[data-v-20a135c7] {\n  text-align: left;\n}\n.section-header[data-v-20a135c7] {\n  margin-top: 10px;\n}\n.w3-display-topright[data-v-20a135c7] {\n  width: 80px;\n  height: 40px;\n  cursor: pointer;\n  z-index: 1300;\n  text-align: right;\n}\n.fa-times[data-v-20a135c7] {\n  margin-right: 10px;\n}\n.top-menu-item[data-v-20a135c7] {\n  margin-bottom: 15px;\n}\n.my-initiatives-row[data-v-20a135c7] {\n}\n\n"],sourceRoot:""}])},1103:function(t,i,e){i=t.exports=e(901)(!0),i.push([t.i,".space-col[data-v-5dc3f6c9]{visibility:hidden}.bullet-class[data-v-5dc3f6c9]{height:100%}.name-col[data-v-5dc3f6c9]{padding:8px 5px 5px}.name-link[data-v-5dc3f6c9]{width:100%;height:100%;cursor:pointer}.line-element[data-v-5dc3f6c9]{text-align:center}.tooltip .tooltiptext[data-v-5dc3f6c9]{top:80%;right:70%}.selected[data-v-5dc3f6c9]{font-weight:700}.notification-div[data-v-5dc3f6c9]{min-height:1px;width:30px;float:left;position:relative;top:8px}","",{version:3,sources:["/home/pepo/workspace/c1master/frontend/src/components/nav/InitiativeMenuItem.vue"],names:[],mappings:"AACA,4BACE,iBAAmB,CACpB,AACD,+BACE,WAAa,CACd,AACD,2BACE,mBAAkB,CAInB,AACD,4BACE,WAAY,AACZ,YAAa,AACb,cAAgB,CACjB,AACD,+BACE,iBAAmB,CACpB,AACD,uCACE,QAAS,AACT,SAAW,CACZ,AACD,2BACE,eAAkB,CACnB,AACD,mCACE,eAAgB,AAChB,WAAY,AACZ,WAAY,AACZ,kBAAmB,AACnB,OAAQ,CACT",file:"InitiativeMenuItem.vue",sourcesContent:["\n.space-col[data-v-5dc3f6c9] {\n  visibility: hidden;\n}\n.bullet-class[data-v-5dc3f6c9] {\n  height: 100%;\n}\n.name-col[data-v-5dc3f6c9] {\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-top: 8px;\n  padding-bottom: 5px;\n}\n.name-link[data-v-5dc3f6c9] {\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n.line-element[data-v-5dc3f6c9] {\n  text-align: center;\n}\n.tooltip .tooltiptext[data-v-5dc3f6c9] {\n  top: 80%;\n  right: 70%;\n}\n.selected[data-v-5dc3f6c9] {\n  font-weight: bold;\n}\n.notification-div[data-v-5dc3f6c9] {\n  min-height: 1px;\n  width: 30px;\n  float: left;\n  position: relative;\n  top: 8px\n}\n\n\n"],sourceRoot:""}])},1111:function(t,i,e){i=t.exports=e(901)(!0),i.push([t.i,".content-container-cell[data-v-7820301d],.initiatives-row[data-v-7820301d],.initiatives-view[data-v-7820301d],.slider-container[data-v-7820301d]{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.nav-container-cell[data-v-7820301d]{width:300px;height:100%}","",{version:3,sources:["/home/pepo/workspace/c1master/frontend/src/components/InitiativesView.vue"],names:[],mappings:"AA+BA,iJACE,YAAa,AACb,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,qBAAuB,CAChC,AACD,qCACE,YAAa,AACb,WAAa,CACd",file:"InitiativesView.vue",sourcesContent:["\n.initiatives-view[data-v-7820301d] {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.initiatives-row[data-v-7820301d] {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.content-container-cell[data-v-7820301d] {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.slider-container[data-v-7820301d] {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.nav-container-cell[data-v-7820301d] {\n  width: 300px;\n  height: 100%;\n}\n\n"],sourceRoot:""}])},1125:function(t,i,e){var n=e(1086);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(902)("11629c57",n,!0)},1142:function(t,i,e){var n=e(1103);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(902)("367af254",n,!0)},1150:function(t,i,e){var n=e(1111);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e(902)("54bf4951",n,!0)},1187:function(t,i,e){e(1142);var n=e(2)(e(1068),e(1221),"data-v-5dc3f6c9",null);t.exports=n.exports},1188:function(t,i,e){e(1125);var n=e(2)(e(1069),e(1204),"data-v-20a135c7",null);t.exports=n.exports},1204:function(t,i,e){t.exports={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("nav",{staticClass:"nav-container w3-border-right"},[n("div",{},[t.$store.state.user.authenticated?n("div",{staticClass:"w3-row-padding btns-row"},[n("div",{staticClass:"w3-col s4"},[n("div",{staticClass:"w3-xlarge cursor-pointer noselect",on:{click:function(i){t.closeNav()}}},[n("i",{staticClass:"fa fa-chevron-circle-left"})])]),t._v(" "),n("div",{staticClass:"w3-col s8 ",attrs:{id:"T_createInitiativeButton"},on:{click:function(i){t.newInitiative()}}},[t._m(0,!1,!1)])]):t._e(),t._v(" "),n("div",{staticClass:"w3-row my-initiatives-row"},[n("h6",{staticClass:"w3-center white-text noselect"},[t.$store.state.user.authenticated?n("span",[n("i",[t._v("my initiatives")])]):n("span",[n("i",[t._v("current initiative")])])])]),t._v(" "),t.loading?n("div",{staticClass:"w3-row w3-center loader-gif-container"},[n("img",{staticClass:"loader-gif",attrs:{src:e(37),alt:""}})]):n("div",{},t._l(t.menuInitiatives,function(i,e){return n("app-initiative-menu-item",{key:i.id,staticClass:"top-menu-item",attrs:{initiative:i,coord:[e]},on:{"initiative-selected":function(i){t.$emit("initiative-selected")}}})}))]),t._v(" "),t.$store.state.user.authenticated?t._e():n("div",{staticClass:"w3-container"},[n("button",{staticClass:"create-new w3-button light-grey w3-round-large w3-center",attrs:{name:"button"},on:{click:function(i){t.login()}}},[t._v("\n      login\n    ")])])])},staticRenderFns:[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"create-new w3-button light-grey w3-round-large w3-center"},[e("i",{staticClass:"fa fa-plus-circle"}),t._v("  new initiative\n        ")])}]}},1221:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"white-text"},[e("div",{staticClass:"w3-row this-element",class:{selected:t.isSelected,"dark-gray-selected":t.isSelected}},[this.level>0?e("div",{staticClass:"space-col",class:t.leftSpaceClass},[t._v("\n      x\n    ")]):t._e(),t._v(" "),e("div",{staticClass:"w3-col s2",class:t.bulletClass,on:{click:function(i){t.showSubinitiatives=!t.showSubinitiatives}}},[t.hasSubinitiatives?e("div",[t.showSubinitiatives?e("i",{staticClass:"fa fa-chevron-circle-down",style:{color:t.color},attrs:{"aria-hidden":"true"}}):e("i",{staticClass:"fa fa-chevron-circle-right",style:{color:t.color},attrs:{"aria-hidden":"true"}})]):e("div",[e("i",{staticClass:"fa fa-circle",style:{color:t.color},attrs:{"aria-hidden":"true"}})])]),t._v(" "),e("div",{on:{click:function(i){t.$emit("initiative-selected")}}},[e("router-link",{staticClass:"w3-col name-col",class:t.nameSpaceClass,style:t.nameColFontSize,attrs:{to:{name:"Initiative",params:{initiativeId:t.initiative.id}}}},[e("div",{staticClass:"w3-left name-link noselect"},[t._v("\n          "+t._s(t.initiative.meta.name)+"\n        ")])])],1),t._v(" "),e("div",{staticClass:"notification-div"},[e("app-notifications-list",{attrs:{element:t.initiative,isMainNav:!0,contextType:"INITIATIVE"}})],1)]),t._v(" "),e("div",{class:{"slider-container":t.animatingTab}},[e("transition",{attrs:{name:"slideDownUp"},on:{"before-enter":function(i){t.animatingTab=!0},"after-enter":function(i){t.animatingTab=!1},"before-leave":function(i){t.animatingTab=!0},"after-leave":function(i){t.animatingTab=!1}}},[t.showSubinitiatives?e("div",{staticClass:"sub-initiatives-container"},t._l(t.initiative.subInitiatives,function(i,n){return e("div",{staticClass:"w3-row"},[e("app-initiative-menu-item",{key:i.id,staticClass:"sub-initiative-element",attrs:{initiative:i,coord:t.coord.concat([n])},on:{"initiative-selected":function(i){t.$emit("initiative-selected")}}})],1)})):t._e()])],1)])},staticRenderFns:[]}},1229:function(t,i){t.exports={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"initiatives-view"},[e("transition",{attrs:{name:"slideDownUp"}},[t.showNewInitiativeModal?e("app-new-initiative-modal",{on:{close:function(i){t.showNewInitiativeModal=!1}}}):t._e()],1),t._v(" "),e("div",{staticClass:"w3-row initiatives-row"},[e("transition",{attrs:{name:"slideRightLeft"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.expandNav,expression:"expandNav"}],staticClass:"dark-gray nav-container-cell w3-sidebar"},[e("app-initiatives-nav",{on:{"initiative-selected":function(i){t.initiativeSelected()},"new-initiative":function(i){t.showNewInitiativeModal=!0}}})],1)]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showContent,expression:"showContent"}],staticClass:"w3-row content-container-cell"},[e("div",{staticClass:"slider-container"},[e("transition",{attrs:{name:"slideDownUp",mode:"out-in"}},[e("router-view")],1)],1)])],1)],1)},staticRenderFns:[]}},905:function(t,i,e){e(1150);var n=e(2)(e(1042),e(1229),"data-v-7820301d",null);t.exports=n.exports}});
//# sourceMappingURL=10.0b0719583626de4b2f92.js.map