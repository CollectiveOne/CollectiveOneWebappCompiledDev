webpackJsonp([11],{1048:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(317),n=i.n(s),r=i(187),a=i(332),o=i.n(a),d=i(1186),u=i.n(d),m=function(t,e){for(var i in t)if(t[i].user.c1Id===e)return i;return-1},c=function t(e,i){i=i||[],e.members.forEach(function(t){var s={name:e.initiativeName,id:e.initiativeId},n=m(i,t.user.c1Id);-1===n?i.push({user:t.user,subinitiatives:[s],receivedAssets:t.receivedAssets}):i[n].subinitiatives.push(s)});for(var s in e.subinitiativesMembers)t(e.subinitiativesMembers[s],i)},v=function(t){var e=[];return t.subinitiativesMembers.forEach(function(t){c(t,e)}),e};e.default={components:{"app-members-table":o.a,"app-submembers-table":u.a},data:function(){return{noOtherAdminError:!1,wantToContributeSelected:!1,userAdded:!1,requestSent:!1,requestError:!1}},computed:{initiative:function(){return this.$store.state.initiative.initiative},isLoggedAnAdmin:function(){return this.$store.getters.isLoggedAnAdmin},isLoggedAParentAdmin:function(){return this.$store.getters.isLoggedAParentAdmin},isLoggedAMember:function(){return this.$store.getters.isLoggedAMember},allSubmembers:function(){return v(this.initiative.initiativeMembers)},showWantToContribute:function(){return this.$store.state.user.authenticated&&!this.isLoggedAMember&&!this.isLoggedAParentAdmin&&!this.requestSent},addMemberLink:function(){for(var t in this.$route.matched){if("InitiativePeopleAddMember"===this.$route.matched[t].name)return!0}return!1}},methods:n()({},i.i(r.a)(["showOutputMessage"]),{wantToContribute:function(){var t=this;this.wantToContributeSelected=!1,this.axios.post("/1/initiative/"+this.initiative.id+"/wantToContribute").then(function(e){"success"===e.data.result?t.requestSent=!0:t.requestError=!0}).catch(function(){t.requestError=!0})},addMember:function(t){var e=this,i=this.indexOfMember(t.user.c1Id);t.initiativeId=this.initiative.id,-1===i?this.axios.post("/1/initiative/"+this.initiative.id+"/member",t).then(function(t){"success"===t.data.result?e.$store.dispatch("refreshInitiative"):e.showOutputMessage(t.data.message)}):this.showOutputMessage("user has been already included"),this.userAdded=!0,setTimeout(function(){e.userAdded=!1},3e3)},removeMember:function(t){var e=this;this.indexOfMember(t.user.c1Id)>-1&&this.axios.delete("/1/initiative/"+this.initiative.id+"/member/"+t.user.c1Id).then(function(t){"success"===t.data.result?e.$store.dispatch("refreshInitiative"):e.showOutputMessage(t.data.message)})},roleUpdated:function(t){var e=this,i=this.indexOfMember(t.user.c1Id);if(i>-1){var s=!1;for(var n in this.initiative.initiativeMembers.members)n!==i&&"ADMIN"===this.initiative.initiativeMembers.members[n].role&&(s=!0);s?this.axios.put("/1/initiative/"+this.initiative.id+"/member/"+t.user.c1Id,t).then(function(t){"success"===t.data.result?e.$store.dispatch("refreshInitiative"):e.showOutputMessage(t.data.message)}):(this.noOtherAdminError=!0,this.initiative.initiativeMembers.members[i].role="ADMIN",setTimeout(function(){e.noOtherAdminError=!1},2e3))}},indexOfMember:function(t){for(var e in this.initiative.initiativeMembers.members)if(this.initiative.initiativeMembers.members[e].user.c1Id===t)return e;return-1}}),mounted:function(){if(this.addMemberLink){var t={user:{c1Id:this.$route.params.userId,role:"MEMBER"}};this.addMember(t)}}}},1070:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(21),n=i.n(s);e.default={props:{submembers:Array,assets:{type:Array,default:function(){return[]}}},computed:{submembersSorted:function(){return JSON.parse(n()(this.submembers)).sort(function(t,e){return void 0!==e.receivedAssets[0]&&t.receivedAssets[0].ownedByThisHolder?e.receivedAssets[0].ownedByThisHolder-t.receivedAssets[0].ownedByThisHolder:0})}},methods:{ownedOfThisAsset:function(t,e){for(var i in e.receivedAssets)if(e.receivedAssets[i].assetId===t.assetId)return e.receivedAssets[i].ownedByThisHolder>0?e.receivedAssets[i].ownedByThisHolder.toFixed(2):"-";return"-"}}}},1091:function(t,e,i){e=t.exports=i(892)(!0),e.push([t.i,".this-container[data-v-45139732]{overflow:auto;padding-top:0!important;padding-bottom:25px!important}.top-button-row[data-v-45139732]{padding-top:30px;padding-bottom:30px}.members-div[data-v-45139732]{padding-top:20px;padding-bottom:20px}.members-panel[data-v-45139732]{margin-bottom:25px}.initiative-member-row[data-v-45139732]{margin-bottom:10px}.subinitiatives-tags-container[data-v-45139732]{padding-top:17px}.subinitiative-tag[data-v-45139732]{margin-right:10px;margin-bottom:10px;padding:3px 10px}","",{version:3,sources:["/home/pepo/workspace/c1master/frontend/src/components/initiative/PeopleSection.vue"],names:[],mappings:"AACA,iCACE,cAAe,AACf,wBAA4B,AAC5B,6BAAgC,CACjC,AACD,iCACE,iBAAkB,AAClB,mBAAqB,CACtB,AACD,8BACE,iBAAkB,AAClB,mBAAqB,CACtB,AACD,gCACE,kBAAoB,CACrB,AACD,wCACE,kBAAoB,CACrB,AACD,gDACE,gBAAkB,CACnB,AACD,oCACE,kBAAmB,AACnB,mBAAoB,AACpB,gBAA2B,CAC5B",file:"PeopleSection.vue",sourcesContent:["\n.this-container[data-v-45139732] {\n  overflow: auto;\n  padding-top: 0px !important;\n  padding-bottom: 25px !important;\n}\n.top-button-row[data-v-45139732] {\n  padding-top: 30px;\n  padding-bottom: 30px;\n}\n.members-div[data-v-45139732] {\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.members-panel[data-v-45139732] {\n  margin-bottom: 25px;\n}\n.initiative-member-row[data-v-45139732] {\n  margin-bottom: 10px;\n}\n.subinitiatives-tags-container[data-v-45139732] {\n  padding-top: 17px;\n}\n.subinitiative-tag[data-v-45139732] {\n  margin-right: 10px;\n  margin-bottom: 10px;\n  padding: 3px 10px 3px 10px;\n}\n\n"],sourceRoot:""}])},1093:function(t,e,i){e=t.exports=i(892)(!0),e.push([t.i,".subinitiative-tag[data-v-5191c350]{margin-left:5px;margin-bottom:3px}","",{version:3,sources:["/home/pepo/workspace/c1master/frontend/src/components/user/SubmembersTable.vue"],names:[],mappings:"AAMA,oCACE,gBAAiB,AACjB,iBAAmB,CACpB",file:"SubmembersTable.vue",sourcesContent:["\n.submembers-table[data-v-5191c350] {\n}\n.avatar-col[data-v-5191c350] {\n  /*width: 50px;*/\n}\n.subinitiative-tag[data-v-5191c350] {\n  margin-left: 5px;\n  margin-bottom: 3px;\n}\n\n"],sourceRoot:""}])},1129:function(t,e,i){var s=i(1091);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(893)("8c0241a2",s,!0)},1131:function(t,e,i){var s=i(1093);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(893)("0cf70e1e",s,!0)},1186:function(t,e,i){i(1131);var s=i(2)(i(1070),i(1208),"data-v-5191c350",null);t.exports=s.exports},1206:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"this-container"},[t.showWantToContribute?i("div",{staticClass:"w3-row w3-center top-button-row"},[i("div",{staticClass:"w3-row"},[i("button",{staticClass:"w3-button app-button",attrs:{type:"button",name:"button"},on:{click:function(e){t.wantToContributeSelected=!t.wantToContributeSelected}}},[t._v("\n        Want to contribute?\n      ")])]),t._v(" "),i("div",{staticClass:"w3-row w3-margin-top"},[i("div",{staticClass:"slider-container"},[i("transition",{attrs:{name:"slideDownUp"}},[t.wantToContributeSelected?i("div",{staticClass:"w3-row tags-row w3-center"},[i("div",{staticClass:"w3-padding w3-round light-grey w3-margin-bottom"},[i("p",[t._v("\n                The administrators of this initiative will be notified of your\n                interest and will be able to add you as a contributor to this initiative.\n              ")])]),t._v(" "),i("button",{staticClass:"w3-button app-button-light button-pair",on:{click:function(e){t.wantToContributeSelected=!1}}},[t._v("cancel\n            ")]),t._v(" "),i("button",{staticClass:"w3-button app-button button-pair",on:{click:function(e){t.wantToContribute()}}},[t._v("confirm\n            ")])]):t._e()])],1)])]):t._e(),t._v(" "),i("app-error-panel",{attrs:{show:t.requestSent,message:"The admins of this initiative have been notified.",panelType:"success"}}),t._v(" "),i("app-error-panel",{attrs:{show:t.userAdded,message:"User succesfully added.",panelType:"success"}}),t._v(" "),i("app-error-panel",{attrs:{show:t.requestError,message:"Error notifying the admins"}}),t._v(" "),i("div",{staticClass:"w3-row own-members-div"},[i("h3",{staticClass:"section-header"},[t._v("Members of "+t._s(t.initiative.meta.name)+":")]),t._v(" "),i("app-members-table",{attrs:{members:t.initiative.initiativeMembers.members,canEdit:t.isLoggedAnAdmin||t.isLoggedAParentAdmin,assets:t.initiative.assets},on:{remove:function(e){t.removeMember(e)},"role-updated":function(e){t.roleUpdated(e)},add:function(e){t.addMember(e)}}}),t._v(" "),t.noOtherAdminError?i("div",{staticClass:"w3-row w3-tag error-panel error-row w3-round"},[t._v("\n      there should be at least one admin per initiative\n    ")]):t._e()],1),t._v(" "),i("br"),t._v(" "),t.allSubmembers.length>0?i("div",{staticClass:"sub-members-div"},[i("hr"),t._v(" "),i("h3",{staticClass:"section-header"},[t._v("Members of subinitiatives of "+t._s(t.initiative.meta.name)+":")]),t._v(" "),i("app-submembers-table",{attrs:{submembers:t.allSubmembers,assets:t.initiative.assets}})],1):t._e()],1)},staticRenderFns:[]}},1208:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"submembers-table "},[t.submembers.length>0?i("table",{staticClass:"w3-table w3-striped w3-bordered w3-centered table-element"},[i("thead",[i("tr",[i("th",{staticClass:"avatar-col"},[t._v("AVATAR")]),t._v(" "),i("th",[t._v("NICKNAME")]),t._v(" "),t._l(t.assets,function(e){return i("th",[t._v(t._s(e.assetName))])}),t._v(" "),i("th",{staticClass:"subinitiatives-col"},[t._v("SUBINITIATIVES")])],2)]),t._v(" "),i("tbody",t._l(t.submembersSorted,function(e){return i("tr",[i("td",{staticClass:"avatar-col"},[i("app-user-avatar",{attrs:{user:e.user,showName:!1}})],1),t._v(" "),i("td",[t._v(t._s(e.user.nickname))]),t._v(" "),t._l(t.assets,function(s){return i("td",[t._v("\n          "+t._s(t.ownedOfThisAsset(s,e))+"\n        ")])}),t._v(" "),i("td",t._l(e.subinitiatives,function(e){return i("router-link",{key:e.id,staticClass:"subinitiative-tag w3-tag w3-round-large cursor-pointer noselect",style:{"background-color":t.$store.getters.colorOfInitiative(e.id)},attrs:{to:{name:"Initiative",params:{initiativeId:e.id}}}},[t._v("\n            "+t._s(e.name)+"\n          ")])}))],2)}))]):t._e()])},staticRenderFns:[]}},904:function(t,e,i){i(1129);var s=i(2)(i(1048),i(1206),"data-v-45139732",null);t.exports=s.exports}});
//# sourceMappingURL=11.a745e60e0a4c6c417fbe.js.map