webpackJsonp([7],{1001:function(t,e,n){var i=n(990);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(898)("bd164740",i,!0)},1002:function(t,e,n){var i=n(991);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(898)("58d4ca94",i,!0)},1003:function(t,e,n){var i=n(992);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(898)("6c5b3408",i,!0)},1013:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gU3ZnIFZlY3RvciBJY29ucyA6IGh0dHA6Ly93d3cub25saW5ld2ViZm9udHMuY29tL2ljb24gLS0+DQo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMTAwMCAxMDAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAwIDEwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPG1ldGFkYXRhPiBTdmcgVmVjdG9yIEljb25zIDogaHR0cDovL3d3dy5vbmxpbmV3ZWJmb250cy5jb20vaWNvbiA8L21ldGFkYXRhPg0KPGc+PHBhdGggZD0iTTUxMi45LDM4My45SDg3NGMxNy44LDAsMzIuMi0xNC40LDMyLjItMzIuMmMwLTEwLjYtNS4yLTIwLjEtMTMuMS0yNS45TDUzNS44LDE5LjZjLTUuOC01LjktMTMuOS05LjYtMjIuOS05LjZjLTE3LjgsMC0zMi4yLDE0LjQtMzIuMiwzMi4ydjMwOS41QzQ4MC43LDM2OS41LDQ5NS4xLDM4My45LDUxMi45LDM4My45eiBNNTQ1LjEsMTEyLjJMNzg3LDMxOS41SDU0NS4xVjExMi4yeiBNODc0LDQ2MS4zYy0xNy44LDAtMzIuMiwxNC40LTMyLjIsMzIuMnY2LjR2MzAzdjcwLjljMCwyOC41LTIzLjEsNTEuNi01MS42LDUxLjZIMjA5LjljLTI4LjUsMC01MS42LTIzLjEtNTEuNi01MS42VjEyNi4xYzAtMjguNSwyMy4xLTUxLjYsNTEuNi01MS42aDE5LjNIMzcxaDYuNHYtMC42YzE0LjctMywyNS44LTE2LDI1LjgtMzEuNmMwLTE1LjYtMTEuMS0yOC42LTI1LjgtMzEuNlYxMEgzNzFIMjI5LjJoLTE5LjNDMTQ1LjgsMTAsOTMuOCw2Miw5My44LDEyNi4xdjc0Ny45YzAsNjQuMSw1MiwxMTYuMSwxMTYuMSwxMTYuMWg1ODAuM2M2NC4xLDAsMTE2LjEtNTIsMTE2LjEtMTE2LjFWODAzVjUwMHYtNi40QzkwNi4yLDQ3NS43LDg5MS44LDQ2MS4zLDg3NCw0NjEuM3oiLz48L2c+DQo8L3N2Zz4="},1021:function(t,e,n){n(1002),n(1003);var i=n(2)(n(984),n(1025),"data-v-14b5a17e",null);t.exports=i.exports},1024:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cards-container-list"},[t._l(t.cardWrappers,function(e,i){return n("div",{key:e.id,staticClass:"section-card",class:t.cardsContainerClasses,on:{dragover:function(n){n.preventDefault(),t.draggingOver(n,e)},drop:function(n){n.preventDefault(),t.cardDroped(e.id,n)}}},[t.isDraggingOver(e)&&t.draggingOverCardWrapperBefore?n("div",{staticClass:"drop-div"}):t._e(),t._v(" "),n("div",{staticClass:"card-container-in-list"},[n("app-model-card",{attrs:{cardWrapperInit:e,inSection:t.inSection,type:t.cardsType,cardRouteName:t.cardRouteName,hideCardControls:t.hideCardControls},on:{edit:function(n){t.$emit("edit",e)},createNew:function(n){t.$emit("createNew",e)},updateCards:function(e){t.$emit("updateCards")}}})],1),t._v(" "),t.isDraggingOver(e)&&t.draggingOverCardWrapperAfter?n("div",{staticClass:"drop-div"}):t._e()])}),t._v(" "),t.hideCardControls?t._e():n("div",{class:t.cardsContainerClasses,on:{dragover:function(e){e.preventDefault(),t.draggingOver()},drop:function(e){e.preventDefault(),t.cardDroped("",e)}}},[t.draggingOverCreateCard?n("div",{staticClass:"drop-div"}):t._e(),t._v(" "),t.creatingNewCard?n("div",{staticClass:"card-container-in-list"},[n("app-model-card-editor",{attrs:{isNew:!0,inSection:t.inSection,type:t.cardsType},on:{edit:function(e){t.creatingNewCard=!1},updateCards:function(e){t.cardCreated()}}})],1):n("div",{},[n("button",{staticClass:"w3-button app-button-light new-card-button",on:{click:function(e){t.creatingNewCard=!0}}},[n("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}})])])])],2)},staticRenderFns:[]}},1025:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.section?n("div",{ref:"sectionContainer",staticClass:"section-container",attrs:{id:t.section.id}},[n("div",{staticClass:"slider-container"},[n("transition",{attrs:{name:"slideDownUp"}},[t.showNewCardModal?n("app-model-card-modal",{attrs:{isNew:!0,inSectionId:t.section.id,inSectionTitle:t.section.title},on:{close:function(e){t.showNewCardModal=!1},updateCards:function(e){t.updateCards()}}}):t._e()],1)],1),t._v(" "),t.nestedIn.length>0&&t.section.subElementsLoaded||t.showThisTitle?n("div",{staticClass:"w3-row title-row",class:{"card-container-doc":"doc"===t.cardsType}},[n("div",{staticClass:"w3-row blue-color title-text"},[t._l(t.nestedIn.slice(1,t.nestedIn.length),function(e){return n("div",{staticClass:"w3-left"},[t.addSectionLinks?n("router-link",{staticClass:"w3-left",attrs:{to:{name:"ModelSectionContent",params:{sectionId:e.id}}}},[t._v("\n           "+t._s(e.title)+"\n        ")]):n("div",{staticClass:"w3-left"},[n("span",{domProps:{innerHTML:t._s(t.headerOpenTag+e.title+t.headerCloseTag)}})]),t._v(" "),n("div",{staticClass:"w3-left chevron-container"},[t.isDocView?n("span",{domProps:{innerHTML:t._s(t.headerOpenTag+t.faRawHtml+t.headerCloseTag)}}):n("span",{domProps:{innerHTML:t._s(t.faRawHtml)}})])],1)}),t._v(" "),n("div",{staticClass:"w3-left"},[t.addSectionLinks?n("router-link",{attrs:{to:{name:"ModelSectionContent",params:{sectionId:t.section.id}}}},[n("b",[t._v(t._s(t.section.title))])]):n("div",{},[n("span",{domProps:{innerHTML:t._s(t.headerOpenTag+"<b>"+t.section.title+"</b>"+t.headerCloseTag)}})])],1)],2),t._v(" "),!t.readOnly&&t.section.inSections.length>1?n("div",{staticClass:"w3-row"},[t._m(0,!1,!1),t._v(" "),n("div",{staticClass:"w3-left"},[n("app-in-model-sections-tags",{attrs:{inModelSections:t.section.inSections,hideSectionId:t.inSection.id}})],1)]):t._e(),t._v(" "),t.hasDescription?n("div",{staticClass:"w3-row description-text light-grey"},[n("vue-markdown",{staticClass:"marked-text",attrs:{source:t.section.description}})],1):t._e()]):t._e(),t._v(" "),n("div",{staticClass:"w3-row"},[n("app-model-cards-container",{attrs:{cardWrappers:t.sortedCards,cardsType:t.cardsType,inSection:t.section,acceptDrop:!0,cardRouteName:t.cardRouteName,hideCardControls:t.readOnly},on:{updateCards:function(e){t.updateCards()},createNew:t.createNew,edit:t.edit,"create-card":function(e){t.showNewCardModal=!0}}})],1),t._v(" "),n("div",{staticClass:"w3-row"},t._l(t.sortedSubsections,function(e){return n("div",{key:e.id,staticClass:"subsection-container"},[n("app-model-section",{attrs:{section:e,inSection:t.section,cardsType:t.cardsType,nestedIn:t.nestedIn.concat([t.section]),cardRouteName:t.cardRouteName,readOnly:t.readOnly,showPrivate:t.showPrivate,showShared:t.showShared,showCommon:t.showCommon},on:{updateCards:function(e){t.updateCards()}}})],1)}))]):t._e()},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w3-left w3-margin-right"},[n("i",[t._v("also in")])])}]}},1055:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1021),a=n.n(i),o=n(1175),r=n.n(o);e.default={components:{"app-model-section":a.a,"app-model-section-nav-simple":r.a},data:function(){return{section:null,loading:!1,showCardModal:!1,expandModelNav:!0}},computed:{sectionId:function(){return this.$route.params.sectionId},cardsType:function(){return this.$store.state.viewParameters.cardsType},isSummary:function(){return"summary"===this.cardsType},isCard:function(){return"card"===this.cardsType},isDoc:function(){return"doc"===this.cardsType}},watch:{"$route.params.sectionId":function(){this.updateSection()},"$route.name":function(){this.checkCardSubroute()}},methods:{expandModelNavClicked:function(){this.expandModelNav=!this.expandModelNav},updateSection:function(){var t=this;this.loading=!0,this.axios.get("/1/model/section/"+this.sectionId,{params:{levels:999}}).then(function(e){t.loading=!1,"success"===e.data.result&&(t.section=e.data.data,t.checkCardSubroute())}).catch(function(t){console.log(t)})},checkCardSubroute:function(){this.showCardModal=!1,"ModelSectionReadCard"===this.$route.name&&this.section&&(this.showCardModal=!0)},closeCardModal:function(){this.$router.replace({name:"ModelSectionRead"})},summaryView:function(){this.$store.commit("setCardsType","summary")},cardView:function(){this.$store.commit("setCardsType","card")},docView:function(){this.$store.commit("setCardsType","doc")}},beforeCreate:function(){this.$store.commit("setCardsType","doc")},created:function(){this.updateSection()}}},1059:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1177),a=n.n(i);e.default={components:{"app-model-section-nav-item-simple":a.a},props:{section:{type:Object,default:null}},methods:{sectionSelected:function(t){document.getElementById(t.id).scrollIntoView({behavior:"smooth",block:"start"})}}}},1061:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(324);e.default={name:"app-model-section-nav-item-simple",components:{},props:{section:{type:Object,default:null}},data:function(){return{showSubsections:!0,animating:!1}},watch:{},computed:{subsections:function(){return null!=this.section?n.i(i.c)(this.section.subsectionsCommon.slice()):[]},highlight:function(){return this.highlightLevelUse>0},sectionTitle:function(){return this.section?this.section.title:""},hasSubsections:function(){return!!this.section&&this.section.nSubsections>0}},methods:{toggleSubsections:function(){this.showSubsections=!this.showSubsections},sectionSelected:function(){this.$emit("section-selected",this.section)}}}},1076:function(t,e,n){e=t.exports=n(897)(!0),e.push([t.i,".model-nav-container-large[data-v-0f38b1fd]{height:100%;padding:16px 12px;font-size:16px}","",{version:3,sources:["/home/pepo/workspace/c1master/frontend/src/components/model/nav/ModelNavSimple.vue"],names:[],mappings:"AACA,4CACE,YAAa,AACb,kBAAmB,AACnB,cAAgB,CACjB",file:"ModelNavSimple.vue",sourcesContent:["\n.model-nav-container-large[data-v-0f38b1fd] {\n  height: 100%;\n  padding: 16px 12px;\n  font-size: 16px;\n}\n.model-nav-container[data-v-0f38b1fd] {\n}\n\n"],sourceRoot:""}])},1082:function(t,e,n){e=t.exports=n(897)(!0),e.push([t.i,".section-nav-item-container[data-v-264cbb2b]{color:#fff}.section-nav-item-first-row[data-v-264cbb2b]{padding:3px 0}.subsections-container[data-v-264cbb2b]{padding-left:20px}.subsection-container-selected[data-v-264cbb2b]{background-color:#313942}.section-selected[data-v-264cbb2b]{background-color:#313942;transition:all .3s ease;color:#fff;border-color:#3e464e}.circle-div[data-v-264cbb2b]{width:30px;float:left;text-align:center;padding:3px 0;transition:all .3s ease}.circle-div[data-v-264cbb2b]:hover{color:#106e87}.title-div[data-v-264cbb2b]{width:calc(100% - 30px - 30px - 30px);float:left;padding:3px 0;transition:all .3s ease}.title-div[data-v-264cbb2b]:hover{color:#106e87}","",{version:3,sources:["/home/pepo/workspace/c1master/frontend/src/components/model/nav/ModelSectionNavItemSimple.vue"],names:[],mappings:"AACA,6CACE,UAAa,CACd,AACD,6CACE,aAAiB,CAClB,AACD,wCACE,iBAAmB,CACpB,AACD,gDACE,wBAA0B,CAC3B,AAGD,mCACE,yBAA0B,AAC1B,wBAA2B,AAC3B,WAAa,AACb,oBAAsB,CACvB,AACD,6BACE,WAAY,AACZ,WAAY,AACZ,kBAAmB,AACnB,cAAiB,AACjB,uBAA2B,CAC5B,AACD,mCACE,aAAe,CAChB,AACD,4BACE,sCAAuC,AACvC,WAAY,AACZ,cAAiB,AACjB,uBAA2B,CAC5B,AACD,kCACE,aAAe,CAChB",file:"ModelSectionNavItemSimple.vue",sourcesContent:["\n.section-nav-item-container[data-v-264cbb2b] {\n  color: white;\n}\n.section-nav-item-first-row[data-v-264cbb2b] {\n  padding: 3px 0px;\n}\n.subsections-container[data-v-264cbb2b] {\n  padding-left: 20px;\n}\n.subsection-container-selected[data-v-264cbb2b] {\n  background-color: #313942;\n}\n.subsection-row[data-v-264cbb2b] {\n}\n.section-selected[data-v-264cbb2b] {\n  background-color: #313942;\n  transition: all 300ms ease;\n  color: white;\n  border-color: #3e464e;\n}\n.circle-div[data-v-264cbb2b] {\n  width: 30px;\n  float: left;\n  text-align: center;\n  padding: 3px 0px;\n  transition: all 300ms ease;\n}\n.circle-div[data-v-264cbb2b]:hover {\n  color: #106e87;\n}\n.title-div[data-v-264cbb2b] {\n  width: calc(100% - 30px - 30px - 30px);\n  float: left;\n  padding: 3px 0px;\n  transition: all 300ms ease;\n}\n.title-div[data-v-264cbb2b]:hover {\n  color: #106e87;\n}\n\n\n"],sourceRoot:""}])},1084:function(t,e,n){e=t.exports=n(897)(!0),e.push([t.i,".model-section-read-component[data-v-2b51b577]{height:100%}.section-nav[data-v-2b51b577]{min-width:350px;height:100%;overflow:auto}.model-section-read-container[data-v-2b51b577]{-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;position:relative}.model-section-read-container[data-v-2b51b577],.section-content[data-v-2b51b577]{height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}.section-content[data-v-2b51b577]{padding:12px 0 12px 12px;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;min-width:300px}.control-btns-row[data-v-2b51b577]{padding-left:28px;padding-bottom:12px;-ms-flex-negative:0;flex-shrink:0}.control-btn[data-v-2b51b577]{margin-right:6px}.section-component-doc[data-v-2b51b577]{max-width:1000px}.section-row[data-v-2b51b577]{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;overflow:auto;padding:12px 0;padding-left:3vw;padding-right:3vw}.hide-nav-div-container[data-v-2b51b577]{width:0;z-index:3}.hide-nav-div[data-v-2b51b577]{width:25px;height:35px;position:absolute;top:12px;background-color:#313942;border-top-right-radius:5px;border-bottom-right-radius:5px;color:#fff;padding-top:7px;padding-left:6px;cursor:pointer}.hide-nav-div[data-v-2b51b577]:hover{background-color:#3e464e}","",{version:3,sources:["/home/pepo/workspace/c1master/frontend/src/components/model/ModelSectionRead.vue"],names:[],mappings:"AACA,+CACE,WAAa,CACd,AACD,8BACE,gBAAiB,AACjB,YAAa,AACb,aAAe,CAChB,AACD,+CAKE,8BAA+B,AAE3B,uBAAwB,AACpB,mBAAoB,AAC5B,iBAAmB,CACpB,AACD,iFAVE,YAAa,AACb,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AAEd,4BAA8B,CAmB/B,AAdD,kCACE,yBAA4B,AAC5B,mBAAoB,AAChB,oBAAqB,AACjB,YAAa,AAKrB,4BAA6B,AAEzB,0BAA2B,AACvB,sBAAuB,AAC/B,eAAiB,CAClB,AACD,mCACE,kBAAmB,AACnB,oBAAqB,AACrB,oBAAqB,AACjB,aAAe,CACpB,AACD,8BACE,gBAAkB,CACnB,AACD,wCACE,gBAAkB,CACnB,AACD,8BACE,mBAAoB,AAChB,oBAAqB,AACjB,YAAa,AACrB,cAAe,AACf,eAAkB,AAClB,iBAAkB,AAClB,iBAAmB,CACpB,AACD,yCACE,QAAW,AACX,SAAW,CACZ,AACD,+BACE,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,SAAU,AACV,yBAA0B,AAC1B,4BAA6B,AAC7B,+BAAgC,AAChC,WAAa,AACb,gBAAiB,AACjB,iBAAkB,AAClB,cAAgB,CACjB,AACD,qCACE,wBAA0B,CAC3B",file:"ModelSectionRead.vue",sourcesContent:["\n.model-section-read-component[data-v-2b51b577] {\n  height: 100%;\n}\n.section-nav[data-v-2b51b577] {\n  min-width: 350px;\n  height: 100%;\n  overflow: auto;\n}\n.model-section-read-container[data-v-2b51b577] {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  position: relative;\n}\n.section-content[data-v-2b51b577] {\n  padding: 12px 0px 12px 12px;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  min-width: 300px;\n}\n.control-btns-row[data-v-2b51b577] {\n  padding-left: 28px;\n  padding-bottom: 12px;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n.control-btn[data-v-2b51b577] {\n  margin-right: 6px;\n}\n.section-component-doc[data-v-2b51b577] {\n  max-width: 1000px;\n}\n.section-row[data-v-2b51b577] {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  overflow: auto;\n  padding: 12px 0px;\n  padding-left: 3vw;\n  padding-right: 3vw;\n}\n.hide-nav-div-container[data-v-2b51b577] {\n  width: 0px;\n  z-index: 3;\n}\n.hide-nav-div[data-v-2b51b577] {\n  width: 25px;\n  height: 35px;\n  position: absolute;\n  top: 12px;\n  background-color: #313942;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  color: white;\n  padding-top: 7px;\n  padding-left: 6px;\n  cursor: pointer;\n}\n.hide-nav-div[data-v-2b51b577]:hover {\n  background-color: #3e464e;\n}\n\n"],sourceRoot:""}])},1114:function(t,e,n){var i=n(1076);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(898)("58bc3cdc",i,!0)},1120:function(t,e,n){var i=n(1082);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(898)("b301deb6",i,!0)},1122:function(t,e,n){var i=n(1084);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(898)("2caf03c8",i,!0)},1175:function(t,e,n){n(1114);var i=n(2)(n(1059),n(1191),"data-v-0f38b1fd",null);t.exports=i.exports},1177:function(t,e,n){n(1120);var i=n(2)(n(1061),n(1197),"data-v-264cbb2b",null);t.exports=i.exports},1191:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"model-nav-container-large"},[n("div",{staticClass:"model-nav-container"},[n("div",{staticClass:"w3-row"},[n("app-model-section-nav-item-simple",{attrs:{section:t.section},on:{"section-selected":function(e){t.sectionSelected(e)}}})],1)])])},staticRenderFns:[]}},1197:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w3-row section-nav-item-container"},[n("div",{staticClass:"w3-row section-nav-item-first-row"},[n("div",{staticClass:"circle-div cursor-pointer",on:{click:function(e){t.toggleSubsections()}}},[t.hasSubsections?n("div",[t.showSubsections?n("i",{staticClass:"fa fa-chevron-circle-down",attrs:{"aria-hidden":"true"}}):n("i",{staticClass:"fa fa-chevron-circle-right",attrs:{"aria-hidden":"true"}})]):n("div",[n("i",{staticClass:"fa fa-circle",attrs:{"aria-hidden":"true"},on:{click:function(e){t.sectionSelected()}}})])]),t._v(" "),n("div",{staticClass:"title-div cursor-pointer noselect",on:{click:function(e){t.sectionSelected()},dblclick:function(e){t.toggleSubsections()}}},[t._v("\n      "+t._s(t.sectionTitle)+"\n    ")])]),t._v(" "),n("div",{class:{"slider-container":t.animating}},[n("transition",{attrs:{name:"slideDownUp"},on:{"before-enter":function(e){t.animating=!0},"after-enter":function(e){t.animating=!1},"before-leave":function(e){t.animating=!0},"after-leave":function(e){t.animating=!1}}},[t.showSubsections&&t.subsections.length>0?n("div",{staticClass:"w3-row subsections-container"},t._l(t.subsections,function(e,i){return n("app-model-section-nav-item-simple",{key:e.id,staticClass:"subsection-row",attrs:{section:e},on:{"section-selected":function(e){t.$emit("section-selected",e)}}})})):t._e()])],1)])},staticRenderFns:[]}},1199:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"model-section-read-component"},[i("div",{staticClass:"slider-container"},[i("transition",{attrs:{name:"slideDownUp"}},[t.showCardModal?i("app-model-card-modal",{attrs:{isNew:!1,cardWrapperId:t.$route.params.cardId},on:{close:function(e){t.closeCardModal()}}}):t._e()],1)],1),t._v(" "),i("div",{staticClass:"model-section-read-container"},[i("transition",{attrs:{name:"slideRightLeft"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.expandModelNav,expression:"expandModelNav"}],staticClass:"section-nav dark-gray"},[i("app-model-section-nav-simple",{attrs:{section:t.section}})],1)]),t._v(" "),i("div",{staticClass:"hide-nav-div-container"},[i("div",{staticClass:"hide-nav-div drop-shadow-br",on:{click:function(e){t.expandModelNavClicked()}}},[t.expandModelNav?i("i",{staticClass:"fa fa-chevron-left",attrs:{"aria-hidden":"true"}}):i("i",{staticClass:"fa fa-chevron-right",attrs:{"aria-hidden":"true"}})])]),t._v(" "),i("div",{staticClass:"section-content"},[i("div",{staticClass:"w3-row control-btns-row"},[i("div",{},[i("div",{staticClass:"w3-left control-btn",class:{"control-btn-selected":t.isSummary},on:{click:function(e){t.summaryView()}}},[i("img",{attrs:{src:n(327),alt:""}})]),t._v(" "),i("div",{staticClass:"w3-left control-btn",class:{"control-btn-selected":t.isCard},on:{click:function(e){t.cardView()}}},[i("img",{attrs:{src:n(326),alt:""}})]),t._v(" "),i("div",{staticClass:"w3-left control-btn",class:{"control-btn-selected":t.isDoc},on:{click:function(e){t.docView()}}},[i("img",{attrs:{src:n(1013),alt:""}})])])]),t._v(" "),i("div",{staticClass:"w3-row section-row"},[t.loading?i("div",{staticClass:"w3-row w3-center loader-gif-container"},[i("img",{staticClass:"loader-gif",attrs:{src:n(37),alt:""}})]):i("app-model-section",{class:{"section-component-doc":"doc"===t.cardsType},attrs:{section:t.section,readOnly:!0,showThisTitle:!0,showPrivate:!1,showShared:!1,showCommon:!0,cardRouteName:"ModelSectionReadCard",cardsType:t.cardsType}})],1)])],1)])},staticRenderFns:[]}},913:function(t,e,n){n(1122);var i=n(2)(n(1055),n(1199),"data-v-2b51b577",null);t.exports=i.exports},978:function(t,e,n){n(1001);var i=n(2)(n(986),n(1024),"data-v-1440eb74",null);t.exports=i.exports},984:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(32),a=n.n(i),o=n(329),r=n.n(o),s=n(978),c=n.n(s),d=n(121),l=n.n(d),p=n(324);e.default={name:"app-model-section",components:{"app-model-section-header":r.a,"app-model-cards-container":c.a,"app-in-model-sections-tags":l.a},props:{section:{type:Object,default:null},showThisTitle:{type:Boolean,default:!1},nestedIn:{type:Array,default:function(){return[]}},inSection:{type:Object,default:null},cardsType:{type:String,default:"card"},hideCardControls:{type:Boolean,default:!1},cardRouteName:{type:String,default:"ModelSectionCard"},showPrivate:{type:Boolean,default:!0},showShared:{type:Boolean,default:!0},showCommon:{type:Boolean,default:!0},readOnly:{type:Boolean,default:!1}},data:function(){return{loaded:!1,showSubsections:!0,showCards:!0,expanded:!0,showCardId:"",expandSubSubsecInit:!1,subscription:null,showNewCardModal:!1,createNewCard:!1,editCard:!1,targetCard:{type:"new",cardWrapper:null}}},computed:{nestedLevel:function(){return this.nestedIn.length+1},isDocView:function(){return"doc"===this.cardsType},isReadFriendly:function(){return"ModelSectionReadCard"===this.cardRouteName},addSectionLinks:function(){return!this.isReadFriendly},headerOpenTag:function(){return this.isDocView?"<h"+(this.nestedLevel<6?this.nestedLevel:6)+">":""},headerCloseTag:function(){return"doc"!==this.cardsType?"":"</h"+(this.nestedLevel<6?this.nestedLevel:6)+">"},hasDescription:function(){return!!this.section.description&&""!==this.section.description},sortedCards:function(){var t=this,e=n.i(p.b)(this.section,this.showCommon,this.showShared,this.showPrivate);if(this.createNewCard){var i=e.findIndex(function(e){return e.id===t.targetCard.cardWrapper.id});"before"===this.$store.state.support.createNewCardLocation&&(i-=1),e.splice(i+1,0,this.targetCard),this.createNewCard=!1}if(this.editCard){var a=e.findIndex(function(e){return e.id===t.targetCard.cardWrapper.id});this.targetCard.type="edit",e[a]=this.targetCard,this.editCard=!1}return e},sortedSubsections:function(){return n.i(p.a)(this.section,this.showCommon,this.showShared,this.showPrivate)},isLoggedAnEditor:function(){return this.$store.getters.isLoggedAnEditor},faRawHtml:function(){return'<i class="fa fa-chevron-right" aria-hidden="true"></i>'}},watch:{"$store.state.support.triggerUpdateSectionCards":function(){this.updateCards()},section:function(){this.subscribeSocket()}},methods:{edit:function(t){this.targetCard.cardWrapper=t,this.targetCard.type="edit",this.editCard=!0},createNew:function(t){this.targetCard.cardWrapper=t,this.targetCard.type="newCard",this.createNewCard=!0},updateCards:function(){var t=this;console.log("updating cards"),this.axios.get("/1/model/section/"+this.section.id+"/cardWrappers").then(function(e){"success"===e.data.result&&(t.createNewCard=!1,t.section.cardsWrappersCommon=e.data.data.cardsWrappersCommon,t.section.cardsWrappersPrivate=e.data.data.cardsWrappersPrivate,t.section.cardsWrappersShared=e.data.data.cardsWrappersShared)})},subscribeSocket:function(){var t=this;null===this.subscription&&(this.subscription=this.$store.dispatch("subscribe",{url:"/channel/activity/model/section/"+this.section.id,onMessage:function(e){var n=e.body;console.log("mesage on section: "+t.section.id+" - MSG: "+n),"UPDATE"===n&&t.updateCards()}}))},dragStart:function(t){var e={type:this.dragType,sectionId:this.section.id,fromElementId:this.inElementId};t.dataTransfer.setData("text/plain",a()(e))},newCardFromBar:function(){this.showCards=!0,this.$emit("new-card")},newSubsectionFromBar:function(){this.showSubsections=!0,this.$emit("new-subsection")},handleSocket:function(){var t=this;if(this.section){console.log(this.section.id);var e="/channel/activity/model/section/"+this.section.id;this.subscription=this.$store.dispatch("subscribe",{url:e,onMessage:function(e){var n=e.body;console.log("sagar"),"UPDATE"===n&&t.updateCards()}}),setInterval(function(){console.log(t.subscription.id+"sagar")},1e3)}}},created:function(){this.section&&this.subscribeSocket()},beforeDestroy:function(){this.subscription&&this.$store.dispatch("unsubscribe",this.subscription)}}},986:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(330),a=n.n(i),o=n(331),r=n.n(o);e.default={components:{"app-model-card":a.a,"app-model-card-editor":r.a},props:{cardWrappers:{type:Array,default:function(){return[]}},inSection:{type:Object,default:null},cardsType:{type:String,default:"new"},acceptDrop:{type:Boolean,default:!1},hideCardControls:{type:Boolean,default:!1},cardRouteName:{type:String,default:"ModelSectionCard"}},computed:{isLoggedAnEditor:function(){return this.$store.getters.isLoggedAnEditor},cardsContainerClasses:function(){return{"section-card-col-with-nav":"card"===this.cardsType&&this.$store.state.support.expandModelNav&&!this.$store.state.support.windowIsSmall,"section-card-col-no-nav":"card"===this.cardsType&&(!this.$store.state.support.expandModelNav||this.$store.state.support.windowIsSmall),"section-card-par":"card"!==!this.cardsType}},draggingElement:function(){return this.$store.state.support.draggingElement},lastCardWrapper:function(){return{cardWrapper:this.cardWrappers[this.cardWrappers.length-1]}}},data:function(){return{creatingNewCard:!1,draggingOverCardWrapper:null,draggingOverCreateCard:!1,draggingOverCardWrapperBefore:!1,draggingOverCardWrapperAfter:!1,resetIntervalId:0}},methods:{cardCreated:function(){this.creatingNewCard=!1,this.$emit("updateCards")},draggingOver:function(t,e){var n=this;if(this.acceptDrop){this.draggingOverCreateCard=null==e,"COMMON"===this.draggingElement.cardWrapper.scope&&"COMMON"===e.scope||"COMMON"!==this.draggingElement.cardWrapper.scope||null==this.draggingElement?this.draggingOverCardWrapper=e:this.draggingOverCardWrapper=null;(t.screenY-t.currentTarget.getBoundingClientRect().top-100)/t.currentTarget.offsetHeight<.5?"COMMON"!==this.draggingElement.cardWrapper.scope&&"COMMON"===e.scope?(this.draggingOverCardWrapper=null,this.draggingOverCardWrapperBefore=!1,this.draggingOverCardWrapperAfter=!1):(this.draggingOverCardWrapperBefore=!0,this.draggingOverCardWrapperAfter=!1):(this.draggingOverCardWrapperBefore=!1,this.draggingOverCardWrapperAfter=!0),clearTimeout(this.resetIntervalId),this.resetIntervalId=setTimeout(function(){n.draggingOverCardWrapper=null,n.draggingOverCreateCard=!1},500)}},isDraggingOver:function(t){return!!this.acceptDrop&&(!!this.draggingOverCardWrapper&&this.draggingOverCardWrapper.id===t.id)},cardDroped:function(t,e){var n=this;if(this.acceptDrop){var i=JSON.parse(e.dataTransfer.getData("text/plain"));if("MOVE_CARD"===i.type){var a=!1;a=!e.ctrlKey&&""!==i.fromSectionId,a?(console.log("moving card "+i.cardWrapperId+" from "+i.fromSectionId+" to "+this.inSection.id),this.axios.put("/1/model/section/"+i.fromSectionId+"/moveCard/"+i.cardWrapperId,{},{params:{onSectionId:this.inSection.id,onCardWrapperId:t,isBefore:this.draggingOverCardWrapperBefore}}).then(function(t){n.$store.commit("triggerUpdateSectionCards")})):(console.log("adding card "+i.cardWrapperId+" to "+this.inSection.id),this.axios.put("/1/model/section/"+this.inSection.id+"/cardWrapper/"+i.cardWrapperId,{},{params:{onCardWrapperId:t,isBefore:this.draggingOverCardWrapperBefore,scope:i.scope}}).then(function(t){n.$store.commit("triggerUpdateSectionCards")}))}this.$store.commit("setDraggingElement",null)}}},watch:{"inSection.id":function(){this.$route.query.createCard===this.inSection.id&&this.$emit("createNew",this.cardWrappers[this.cardWrappers.length-1])}}}},990:function(t,e,n){e=t.exports=n(897)(!0),e.push([t.i,".card-container-in-list[data-v-1440eb74]{margin-bottom:12px}.section-card-col-no-nav[data-v-1440eb74],.section-card-col-with-nav[data-v-1440eb74]{margin-bottom:20px;display:inline-block}.drop-div[data-v-1440eb74]{height:10px;background-color:#828282;border-radius:5px;margin-bottom:10px}.create-card-div[data-v-1440eb74]{margin-top:20px;max-width:350px}.new-card-button[data-v-1440eb74]{height:30px;width:30px;border-radius:15px!important;padding:0!important;color:#fff!important;background-color:#ccc!important}@media screen and (min-width:1700px){.section-card-col-no-nav[data-v-1440eb74]{width:calc(20% - 16px);margin-left:8px;margin-right:8px;vertical-align:top}}@media screen and (min-width:1300px) and (max-width:1699px){.section-card-col-no-nav[data-v-1440eb74]{width:calc(25% - 16px);margin-left:8px;margin-right:8px;vertical-align:top}}@media screen and (min-width:900px) and (max-width:1299px){.section-card-col-no-nav[data-v-1440eb74]{width:calc(33% - 16px);margin-left:8px;margin-right:8px;vertical-align:top}}@media screen and (min-width:600px) and (max-width:899px){.section-card-col-no-nav[data-v-1440eb74]{width:calc(50% - 16px);margin-left:8px;margin-right:8px;vertical-align:top}}@media screen and (max-width:599px){.section-card-col-no-nav[data-v-1440eb74]{width:calc(100% - 16px);margin-left:8px;margin-right:8px;vertical-align:top}}@media screen and (min-width:1700px){.section-card-col-with-nav[data-v-1440eb74]{width:calc(25% - 16px);margin-left:8px;margin-right:8px;vertical-align:top}}@media screen and (min-width:1200px) and (max-width:1699px){.section-card-col-with-nav[data-v-1440eb74]{width:calc(33% - 16px);margin-left:8px;margin-right:8px;vertical-align:top}}@media screen and (min-width:900px) and (max-width:1199px){.section-card-col-with-nav[data-v-1440eb74]{width:calc(50% - 16px);margin-left:8px;margin-right:8px;vertical-align:top}}@media screen and (max-width:899px){.section-card-col-with-nav[data-v-1440eb74]{width:calc(100% - 16px);margin-left:8px;margin-right:8px;vertical-align:top}}","",{version:3,sources:["/home/pepo/workspace/c1master/frontend/src/components/model/cards/ModelCardsContainer.vue"],names:[],mappings:"AACA,yCACE,kBAAoB,CACrB,AACD,sFACE,mBAAoB,AACpB,oBAAsB,CACvB,AAID,2BACE,YAAa,AACb,yBAA0B,AAC1B,kBAAmB,AACnB,kBAAoB,CACrB,AACD,kCACE,gBAAiB,AACjB,eAAiB,CAClB,AACD,kCACE,YAAa,AACb,WAAY,AACZ,6BAA+B,AAC/B,oBAAwB,AACxB,qBAAwB,AACxB,+BAAqC,CACtC,AACD,qCACA,0CACI,uBAAwB,AACxB,gBAAiB,AACjB,iBAAkB,AAClB,kBAAoB,CACvB,CACA,AACD,4DACA,0CACI,uBAAwB,AACxB,gBAAiB,AACjB,iBAAkB,AAClB,kBAAoB,CACvB,CACA,AACD,2DACA,0CACI,uBAAwB,AACxB,gBAAiB,AACjB,iBAAkB,AAClB,kBAAoB,CACvB,CACA,AACD,0DACA,0CACI,uBAAwB,AACxB,gBAAiB,AACjB,iBAAkB,AAClB,kBAAoB,CACvB,CACA,AACD,oCACA,0CACI,wBAAyB,AACzB,gBAAiB,AACjB,iBAAkB,AAClB,kBAAoB,CACvB,CACA,AACD,qCACA,4CACI,uBAAwB,AACxB,gBAAiB,AACjB,iBAAkB,AAClB,kBAAoB,CACvB,CACA,AACD,4DACA,4CACI,uBAAwB,AACxB,gBAAiB,AACjB,iBAAkB,AAClB,kBAAoB,CACvB,CACA,AACD,2DACA,4CACI,uBAAwB,AACxB,gBAAiB,AACjB,iBAAkB,AAClB,kBAAoB,CACvB,CACA,AACD,oCACA,4CACI,wBAAyB,AACzB,gBAAiB,AACjB,iBAAkB,AAClB,kBAAoB,CACvB,CACA",file:"ModelCardsContainer.vue",sourcesContent:["\n.card-container-in-list[data-v-1440eb74] {\n  margin-bottom: 12px;\n}\n.section-card-col-with-nav[data-v-1440eb74], .section-card-col-no-nav[data-v-1440eb74] {\n  margin-bottom: 20px;\n  display: inline-block;\n}\n.section-card[data-v-1440eb74] {\n  /*position: relative;*/\n}\n.drop-div[data-v-1440eb74] {\n  height: 10px;\n  background-color: #828282;\n  border-radius: 5px;\n  margin-bottom: 10px;\n}\n.create-card-div[data-v-1440eb74] {\n  margin-top: 20px;\n  max-width: 350px;\n}\n.new-card-button[data-v-1440eb74] {\n  height: 30px;\n  width: 30px;\n  border-radius: 15px !important;\n  padding: 0px !important;\n  color: white !important;\n  background-color: #cccccc !important;\n}\n@media screen and (min-width: 1700px) {\n.section-card-col-no-nav[data-v-1440eb74] {\n    width: calc(20% - 16px);\n    margin-left: 8px;\n    margin-right: 8px;\n    vertical-align: top;\n}\n}\n@media screen and (min-width: 1300px) and (max-width: 1699px) {\n.section-card-col-no-nav[data-v-1440eb74] {\n    width: calc(25% - 16px);\n    margin-left: 8px;\n    margin-right: 8px;\n    vertical-align: top;\n}\n}\n@media screen and (min-width: 900px) and (max-width: 1299px) {\n.section-card-col-no-nav[data-v-1440eb74] {\n    width: calc(33% - 16px);\n    margin-left: 8px;\n    margin-right: 8px;\n    vertical-align: top;\n}\n}\n@media screen and (min-width: 600px) and (max-width: 899px) {\n.section-card-col-no-nav[data-v-1440eb74] {\n    width: calc(50% - 16px);\n    margin-left: 8px;\n    margin-right: 8px;\n    vertical-align: top;\n}\n}\n@media screen and (max-width: 599px) {\n.section-card-col-no-nav[data-v-1440eb74] {\n    width: calc(100% - 16px);\n    margin-left: 8px;\n    margin-right: 8px;\n    vertical-align: top;\n}\n}\n@media screen and (min-width: 1700px) {\n.section-card-col-with-nav[data-v-1440eb74] {\n    width: calc(25% - 16px);\n    margin-left: 8px;\n    margin-right: 8px;\n    vertical-align: top;\n}\n}\n@media screen and (min-width: 1200px) and (max-width: 1699px) {\n.section-card-col-with-nav[data-v-1440eb74] {\n    width: calc(33% - 16px);\n    margin-left: 8px;\n    margin-right: 8px;\n    vertical-align: top;\n}\n}\n@media screen and (min-width: 900px) and (max-width: 1199px) {\n.section-card-col-with-nav[data-v-1440eb74] {\n    width: calc(50% - 16px);\n    margin-left: 8px;\n    margin-right: 8px;\n    vertical-align: top;\n}\n}\n@media screen and (max-width: 899px) {\n.section-card-col-with-nav[data-v-1440eb74] {\n    width: calc(100% - 16px);\n    margin-left: 8px;\n    margin-right: 8px;\n    vertical-align: top;\n}\n}\n\n"],sourceRoot:""}])},991:function(t,e,n){e=t.exports=n(897)(!0),e.push([t.i,".card-container-doc,.card-container-doc h1,.card-container-doc h2,.card-container-doc h3,.card-container-doc h4,.card-container-doc h5{font-family:Merriweather,serif}.card-container-doc{font-size:19px;line-height:32px}.card-container-doc h1{font-size:32px}.card-container-doc h2{font-size:26px}.card-container-doc h3,.card-container-doc h4,.card-container-doc h5{font-size:22px}","",{version:3,sources:["/home/pepo/workspace/c1master/frontend/src/components/model/ModelSection.vue"],names:[],mappings:"AACA,uIAOA,8BAAmC,CAClC,AACD,oBACE,eAAgB,AAChB,gBAAkB,CACnB,AACD,uBACE,cAAgB,CACjB,AACD,uBACE,cAAgB,CACjB,AACD,qEAIE,cAAgB,CACjB",file:"ModelSection.vue",sourcesContent:["\n.card-container-doc,\n.card-container-doc h1,\n.card-container-doc h2,\n.card-container-doc h3,\n.card-container-doc h4,\n.card-container-doc h5\n{\nfont-family: 'Merriweather', serif;\n}\n.card-container-doc {\n  font-size: 19px;\n  line-height: 32px;\n}\n.card-container-doc h1 {\n  font-size: 32px;\n}\n.card-container-doc h2 {\n  font-size: 26px;\n}\n.card-container-doc h3,\n.card-container-doc h4,\n.card-container-doc h5 {\n  /*font-weight: bold;*/\n  font-size: 22px;\n}\n\n"],sourceRoot:""}])},992:function(t,e,n){e=t.exports=n(897)(!0),e.push([t.i,".section-container[data-v-14b5a17e]{font-family:Open Sans,sans-serif}.title-row[data-v-14b5a17e]{margin-top:12px;margin-bottom:12px}.title-text[data-v-14b5a17e]{font-size:17px}.title-text>[data-v-14b5a17e]{display:inline-block}.title-text .w3-left>[data-v-14b5a17e]{display:inline-block;vertical-align:baseline}.chevron-container[data-v-14b5a17e]{padding:0 8px;font-size:15px}.title-row>div[data-v-14b5a17e]{margin-right:5px}.description-text[data-v-14b5a17e]{padding:3px 12px;margin-top:6px;margin-bottom:6px}","",{version:3,sources:["/home/pepo/workspace/c1master/frontend/src/components/model/ModelSection.vue"],names:[],mappings:"AACA,oCACE,gCAAqC,CACtC,AACD,4BACE,gBAAiB,AACjB,kBAAoB,CACrB,AACD,6BACE,cAAgB,CACjB,AACD,8BACE,oBAAsB,CACvB,AACD,uCACE,qBAAsB,AACtB,uBAAyB,CAC1B,AACD,oCACE,cAAiB,AACjB,cAAgB,CACjB,AACD,gCACE,gBAAkB,CACnB,AACD,mCACE,iBAAkB,AAClB,eAAgB,AAChB,iBAAmB,CACpB",file:"ModelSection.vue",sourcesContent:["\n.section-container[data-v-14b5a17e] {\n  font-family: 'Open Sans', sans-serif;\n}\n.title-row[data-v-14b5a17e] {\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n.title-text[data-v-14b5a17e] {\n  font-size: 17px;\n}\n.title-text > *[data-v-14b5a17e] {\n  display: inline-block;\n}\n.title-text .w3-left > *[data-v-14b5a17e] {\n  display: inline-block;\n  vertical-align: baseline;\n}\n.chevron-container[data-v-14b5a17e] {\n  padding: 0px 8px;\n  font-size: 15px;\n}\n.title-row > div[data-v-14b5a17e] {\n  margin-right: 5px;\n}\n.description-text[data-v-14b5a17e] {\n  padding: 3px 12px;\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n\n"],sourceRoot:""}])}});
//# sourceMappingURL=7.b06add738121ce51052a.js.map