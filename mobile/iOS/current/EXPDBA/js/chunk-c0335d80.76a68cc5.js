/*!
 * This source file is part of the Swift.org open source project
 * 
 * Copyright (c) 2021 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 * 
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c0335d80"],{"00b4":function(e,t,n){"use strict";var a,r,i,o,s,c,l,d,p=n("7b1f"),u={name:"ChangedToken",render(e){const{kind:t,tokens:n}=this;return e("span",{class:["token-"+t,"token-changed"]},n.map(t=>e(D,{props:t})))},props:{kind:{type:String,required:!0},tokens:{type:Array,required:!0}}},f=u,m=n("2877"),h=Object(m["a"])(f,a,r,!1,null,null,null),b=h.exports,g=n("86d8"),v=n("2f34"),y={name:"LinkableToken",mixins:[v["a"]],render(e){const t=this.references[this.identifier];return t&&t.url?e(g["a"],{props:{url:t.url,kind:t.kind,role:t.role}},this.$slots.default):e("span",{},this.$slots.default)},props:{identifier:{type:String,required:!0,default:()=>""}}},k=y,C=Object(m["a"])(k,i,o,!1,null,null,null),_=C.exports,x={name:"RawText",render(e){const{_v:t=(t=>e("span",t)),text:n}=this;return t(n)},props:{text:{type:String,required:!0}}},O=x,B=Object(m["a"])(O,s,c,!1,null,null,null),T=B.exports,S={name:"SyntaxToken",render(e){return e("span",{class:"token-"+this.kind},this.text)},props:{kind:{type:String,required:!0},text:{type:String,required:!0}}},I=S,$=Object(m["a"])(I,l,d,!1,null,null,null),j=$.exports;const q={attribute:"attribute",externalParam:"externalParam",genericParameter:"genericParameter",identifier:"identifier",internalParam:"internalParam",keyword:"keyword",label:"label",number:"number",string:"string",text:"text",typeIdentifier:"typeIdentifier",added:"added",removed:"removed"};var w,A,P={name:"DeclarationToken",render(e){const{kind:t,text:n,tokens:a}=this;switch(t){case q.text:{const t={text:n};return e(T,{props:t})}case q.typeIdentifier:{const t={identifier:this.identifier};return e(_,{class:"type-identifier-link",props:t},[e(p["a"],n)])}case q.attribute:{const{identifier:a}=this;return a?e(_,{class:"attribute-link",props:{identifier:a}},[e(p["a"],n)]):e(j,{props:{kind:t,text:n}})}case q.added:case q.removed:return e(b,{props:{tokens:a,kind:t}});default:{const a={kind:t,text:n};return e(j,{props:a})}}},constants:{TokenKind:q},props:{kind:{type:String,required:!0},identifier:{type:String,required:!1},text:{type:String,required:!1},tokens:{type:Array,required:!1,default:()=>[]}}},F=P,z=(n("8f34"),Object(m["a"])(F,w,A,!1,null,"3fd63d6c",null)),D=t["a"]=z.exports},"2a18":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"link-block",class:e.linkBlockClasses},[n(e.linkComponent,e._b({ref:"apiChangesDiff",tag:"component",staticClass:"link",class:e.linkClasses},"component",e.linkProps,!1),[e.topic.role&&!e.change?n("TopicLinkBlockIcon",{attrs:{role:e.topic.role,imageOverride:e.references[e.iconOverride]}}):e._e(),e.topic.fragments?n("DecoratedTopicTitle",{attrs:{tokens:e.topic.fragments}}):n("WordBreak",{attrs:{tag:e.titleTag}},[e._v(e._s(e.topic.title))]),e.change?n("span",{staticClass:"visuallyhidden"},[e._v("- "+e._s(e.$t(e.changeName)))]):e._e()],1),e.hasAbstractElements?n("div",{staticClass:"abstract"},[e.topic.abstract?n("ContentNode",{attrs:{content:e.topic.abstract}}):e._e(),e.topic.ideTitle?n("div",{staticClass:"topic-keyinfo"},[e.topic.titleStyle===e.titleStyles.title?[n("strong",[e._v("Key:")]),e._v(" "+e._s(e.topic.name)+" ")]:e.topic.titleStyle===e.titleStyles.symbol?[n("strong",[e._v("Name:")]),e._v(" "+e._s(e.topic.ideTitle)+" ")]:e._e()],2):e._e(),e.topic.required||e.topic.defaultImplementations?n("RequirementMetadata",{staticClass:"topic-required",attrs:{defaultImplementationsCount:e.topic.defaultImplementations}}):e._e(),e.topic.conformance?n("ConditionalConstraints",{attrs:{constraints:e.topic.conformance.constraints,prefix:e.topic.conformance.availabilityPrefix}}):e._e()],1):e._e(),e.showDeprecatedBadge?n("Badge",{attrs:{variant:"deprecated"}}):e.showBetaBadge?n("Badge",{attrs:{variant:"beta"}}):e._e(),e._l(e.tags,(function(t){return n("Badge",{key:t.type+"-"+t.text,attrs:{variant:t.type}},[e._v(" "+e._s(t.text)+" ")])}))],2)},r=[],i=n("66cd"),o=n("d26a"),s=n("a0fd"),c=n("7b1f"),l=n("6359"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.imageOverride||e.icon?n("div",{staticClass:"topic-icon-wrapper"},[e.imageOverride?n("OverridableAsset",{staticClass:"topic-icon",attrs:{imageOverride:e.imageOverride}}):e.icon?n(e.icon,{tag:"component",staticClass:"topic-icon"}):e._e()],1):e._e()},p=[],u=n("a9f1"),f=n("3b96"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("SVGIcon",{staticClass:"api-reference-icon",attrs:{viewBox:"0 0 14 14",themeId:"api-reference"}},[n("title",[e._v(e._s(e.$t("api-reference")))]),n("path",{attrs:{d:"m1 1v12h12v-12zm11 11h-10v-10h10z"}}),n("path",{attrs:{d:"m3 4h8v1h-8zm0 2.5h8v1h-8zm0 2.5h8v1h-8z"}}),n("path",{attrs:{d:"m3 4h8v1h-8z"}}),n("path",{attrs:{d:"m3 6.5h8v1h-8z"}}),n("path",{attrs:{d:"m3 9h8v1h-8z"}})])},h=[],b=n("be08"),g={name:"APIReferenceIcon",components:{SVGIcon:b["a"]}},v=g,y=n("2877"),k=Object(y["a"])(v,m,h,!1,null,null,null),C=k.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("SVGIcon",{attrs:{viewBox:"0 0 14 14",themeId:"endpoint"}},[n("title",[e._v(e._s(e.$t("icons.web-service-endpoint")))]),n("path",{attrs:{d:"M4.052 8.737h-1.242l-1.878 5.263h1.15l0.364-1.081h1.939l0.339 1.081h1.193zM2.746 12.012l0.678-2.071 0.653 2.071z"}}),n("path",{attrs:{d:"M11.969 8.737h1.093v5.263h-1.093v-5.263z"}}),n("path",{attrs:{d:"M9.198 8.737h-2.295v5.263h1.095v-1.892h1.12c0.040 0.003 0.087 0.004 0.134 0.004 0.455 0 0.875-0.146 1.217-0.394l-0.006 0.004c0.296-0.293 0.48-0.699 0.48-1.148 0-0.060-0.003-0.118-0.010-0.176l0.001 0.007c0.003-0.039 0.005-0.085 0.005-0.131 0-0.442-0.183-0.842-0.476-1.128l-0-0c-0.317-0.256-0.724-0.41-1.168-0.41-0.034 0-0.069 0.001-0.102 0.003l0.005-0zM9.628 11.014c-0.15 0.118-0.341 0.188-0.548 0.188-0.020 0-0.040-0.001-0.060-0.002l0.003 0h-1.026v-1.549h1.026c0.017-0.001 0.037-0.002 0.058-0.002 0.206 0 0.396 0.066 0.551 0.178l-0.003-0.002c0.135 0.13 0.219 0.313 0.219 0.515 0 0.025-0.001 0.050-0.004 0.074l0-0.003c0.002 0.020 0.003 0.044 0.003 0.068 0 0.208-0.083 0.396-0.219 0.534l0-0z"}}),n("path",{attrs:{d:"M13.529 4.981c0-1.375-1.114-2.489-2.489-2.49h-0l-0.134 0.005c-0.526-1.466-1.903-2.496-3.522-2.496-0.892 0-1.711 0.313-2.353 0.835l0.007-0.005c-0.312-0.243-0.709-0.389-1.14-0.389-1.030 0-1.865 0.834-1.866 1.864v0c0 0.001 0 0.003 0 0.004 0 0.123 0.012 0.242 0.036 0.358l-0.002-0.012c-0.94 0.37-1.593 1.27-1.593 2.323 0 1.372 1.11 2.485 2.482 2.49h8.243c1.306-0.084 2.333-1.164 2.333-2.484 0-0.001 0-0.002 0-0.003v0zM11.139 6.535h-8.319c-0.799-0.072-1.421-0.739-1.421-1.551 0-0.659 0.41-1.223 0.988-1.45l0.011-0.004 0.734-0.28-0.148-0.776-0.012-0.082v-0.088c0-0 0-0.001 0-0.001 0-0.515 0.418-0.933 0.933-0.933 0.216 0 0.416 0.074 0.574 0.197l-0.002-0.002 0.584 0.453 0.575-0.467 0.169-0.127c0.442-0.306 0.991-0.489 1.581-0.489 1.211 0 2.243 0.769 2.633 1.846l0.006 0.019 0.226 0.642 0.814-0.023 0.131 0.006c0.805 0.067 1.432 0.736 1.432 1.552 0 0.836-0.659 1.518-1.486 1.556l-0.003 0z"}})])},x=[],O={name:"EndpointIcon",components:{SVGIcon:b["a"]}},B=O,T=Object(y["a"])(B,_,x,!1,null,null,null),S=T.exports,I=n("a295"),$=n("3024"),j=n("8d2d"),q=n("fdd9");const w={[i["a"].article]:u["a"],[i["a"].collection]:$["a"],[i["a"].collectionGroup]:C,[i["a"].learn]:I["a"],[i["a"].overview]:I["a"],[i["a"].project]:j["a"],[i["a"].tutorial]:j["a"],[i["a"].resources]:I["a"],[i["a"].sampleCode]:f["a"],[i["a"].restRequestSymbol]:S};var A={components:{OverridableAsset:q["a"],SVGIcon:b["a"]},props:{role:{type:String,required:!0},imageOverride:{type:Object,default:null}},computed:{icon:({role:e})=>w[e]}},P=A,F=(n("d94b"),Object(y["a"])(P,d,p,!1,null,"03cf3183",null)),z=F.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("code",{staticClass:"decorated-title"},e._l(e.tokens,(function(t,a){return n(e.componentFor(t),{key:a,tag:"component",class:[e.classFor(t),e.emptyTokenClass(t)]},[e._v(e._s(t.text))])})),1)},N=[],E=n("00b4");const{TokenKind:M}=E["a"].constants,V={decorator:"decorator",identifier:"identifier",label:"label"};var L={name:"DecoratedTopicTitle",components:{WordBreak:c["a"]},props:{tokens:{type:Array,required:!0,default:()=>[]}},constants:{TokenKind:M},methods:{emptyTokenClass:({text:e})=>({"empty-token":" "===e}),classFor({kind:e}){switch(e){case M.externalParam:case M.identifier:return V.identifier;case M.label:return V.label;default:return V.decorator}},componentFor(e){return/^\s+$/.test(e.text)?"span":c["a"]}}},R=L,W=(n("dcf6"),Object(y["a"])(R,D,N,!1,null,"06ec7395",null)),G=W.exports,K=n("64cf"),H=n("e8ea"),J=n("5d59"),X=n("2f34");const Q={article:"article",symbol:"symbol"},U={title:"title",symbol:"symbol"},Y={link:"link"};var Z={name:"TopicsLinkBlock",components:{Badge:s["a"],WordBreak:c["a"],ContentNode:l["a"],TopicLinkBlockIcon:z,DecoratedTopicTitle:G,RequirementMetadata:H["a"],ConditionalConstraints:K["a"]},mixins:[J["b"],J["a"],X["a"]],constants:{ReferenceType:Y,TopicKind:Q,TitleStyles:U},props:{isSymbolBeta:Boolean,isSymbolDeprecated:Boolean,topic:{type:Object,required:!0,validator:e=>(!("abstract"in e)||Array.isArray(e.abstract))&&"string"===typeof e.identifier&&(e.type===Y.link&&!e.kind||"string"===typeof e.kind)&&(e.type===Y.link&&!e.role||"string"===typeof e.role)&&"string"===typeof e.title&&"string"===typeof e.url&&(!("defaultImplementations"in e)||"number"===typeof e.defaultImplementations)&&(!("required"in e)||"boolean"===typeof e.required)&&(!("conformance"in e)||"object"===typeof e.conformance)}},data(){return{state:this.store.state}},computed:{linkComponent:({topic:e})=>e.type===Y.link?"a":"router-link",linkProps({topic:e}){const t=Object(o["b"])(e.url,this.$route.query);return e.type===Y.link?{href:t}:{to:t}},linkBlockClasses:({changesClasses:e,hasAbstractElements:t,displaysMultipleLinesAfterAPIChanges:n,multipleLinesClass:a})=>({"has-inline-element":!t,[a]:n,...!t&&e}),linkClasses:({changesClasses:e,deprecated:t,hasAbstractElements:n})=>({deprecated:t,"has-adjacent-elements":n,...n&&e}),changesClasses:({getChangesClasses:e,change:t})=>e(t),titleTag({topic:e}){if(e.titleStyle===U.title)return e.ideTitle?"span":"code";if(e.role&&(e.role===i["a"].collection||e.role===i["a"].dictionarySymbol))return"span";switch(e.kind){case Q.symbol:return"code";default:return"span"}},titleStyles:()=>U,deprecated:({showDeprecatedBadge:e,topic:t})=>e||t.deprecated,showBetaBadge:({topic:e,isSymbolBeta:t})=>Boolean(!t&&e.beta),showDeprecatedBadge:({topic:e,isSymbolDeprecated:t})=>Boolean(!t&&e.deprecated),change({topic:{identifier:e},state:{apiChanges:t}}){return this.changeFor(e,t)},changeName:({change:e,getChangeName:t})=>t(e),hasAbstractElements:({topic:{abstract:e,conformance:t,required:n,defaultImplementations:a}}={})=>e&&e.length>0||t||n||a,tags:({topic:e})=>(e.tags||[]).slice(0,1),iconOverride:({topic:{images:e=[]}})=>{const t=e.find(({type:e})=>"icon"===e);return t?t.identifier:null}}},ee=Z,te=(n("8d8f8"),Object(y["a"])(ee,a,r,!1,null,"52205924",null));t["default"]=te.exports},"2f04":function(e,t,n){},4782:function(e,t,n){},4918:function(e,t,n){},"5d59":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l}));var a=n("b5cf"),r=n("9055"),i=n("beb1");const o="latest_",s={xcode:{value:"xcode",label:"Xcode"},other:{value:"other",label:"Other"}},c={constants:{multipleLinesClass:r["a"]},data(){return{multipleLinesClass:r["a"]}},computed:{displaysMultipleLinesAfterAPIChanges:({change:e,changeType:t,$refs:n})=>!(!e&&!t)&&Object(i["a"])(n.apiChangesDiff)}},l={methods:{toVersionRange({platform:e,versions:t}){return`${e} ${t[0]} – ${e} ${t[1]}`},toOptionValue:e=>`${o}${e}`,toScope:e=>e.slice(o.length,e.length),getOptionsForDiffAvailability(e={}){return this.getOptionsForDiffAvailabilities([e])},getOptionsForDiffAvailabilities(e=[]){const t=e.reduce((e,t={})=>Object.keys(t).reduce((e,n)=>({...e,[n]:(e[n]||[]).concat(t[n])}),e),{}),n=Object.keys(t),a=n.reduce((e,n)=>{const a=t[n];return{...e,[n]:a.find(e=>e.platform===s.xcode.label)||a[0]}},{}),r=e=>({label:this.toVersionRange(a[e]),value:this.toOptionValue(e),platform:a[e].platform}),{sdk:i,beta:o,minor:c,major:l,...d}=a,p=[].concat(i?r("sdk"):[]).concat(o?r("beta"):[]).concat(c?r("minor"):[]).concat(l?r("major"):[]).concat(Object.keys(d).map(r));return this.splitOptionsPerPlatform(p)},changesClassesFor(e,t){const n=this.changeFor(e,t);return this.getChangesClasses(n)},getChangesClasses:e=>({["changed changed-"+e]:!!e}),changeFor(e,t){const{change:n}=(t||{})[e]||{};return n},splitOptionsPerPlatform(e){return e.reduce((e,t)=>{const n=t.platform===s.xcode.label?s.xcode.value:s.other.value;return e[n].push(t),e},{[s.xcode.value]:[],[s.other.value]:[]})},getChangeName(e){return a["b"][e]}},computed:{availableOptions({diffAvailability:e={},toOptionValue:t}){return new Set(Object.keys(e).map(t))}}}},6359:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BaseContentNode",e._b({},"BaseContentNode",e.$props,!1))},r=[],i=n("5677"),o={name:"ContentNode",components:{BaseContentNode:i["default"]},props:i["default"].props,methods:i["default"].methods,BlockType:i["default"].BlockType,InlineType:i["default"].InlineType},s=o,c=(n("958a"),n("2877")),l=Object(c["a"])(s,a,r,!1,null,"20945666",null);t["a"]=l.exports},"64cf":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentNode",{staticClass:"conditional-constraints",attrs:{content:e.content}})},r=[],i=n("6359"),o={name:"ConditionalConstraints",components:{ContentNode:i["a"]},props:{constraints:i["a"].props.content,prefix:i["a"].props.content},computed:{content:({constraints:e,prefix:t,space:n})=>t.concat(n).concat(e),space:()=>({type:i["a"].InlineType.text,text:" "})}},s=o,c=(n("918a"),n("2877")),l=Object(c["a"])(s,a,r,!1,null,"1548fd90",null);t["a"]=l.exports},"686d":function(e,t,n){},"8d74":function(e,t,n){},"8d8f8":function(e,t,n){"use strict";n("4918")},"8f34":function(e,t,n){"use strict";n("686d")},9055:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a="displays-multiple-lines"},"918a":function(e,t,n){"use strict";n("a2b5")},"94ca":function(e,t,n){"use strict";n("4782")},"958a":function(e,t,n){"use strict";n("8d74")},a0fd:function(e,t,n){"use strict";var a=function(){var e,t=this,n=t.$createElement,a=t._self._c||n;return a("span",{staticClass:"badge",class:(e={},e["badge-"+t.variant]=t.variant,e),attrs:{role:"presentation"}},[t._t("default",(function(){return[t._v(t._s(t.text?t.$t(t.text):""))]}))],2)},r=[];const i={beta:"aside-kind.beta",deprecated:"aside-kind.deprecated"};var o={name:"Badge",props:{variant:{type:String,default:()=>""}},computed:{text:({variant:e})=>i[e]}},s=o,c=(n("94ca"),n("2877")),l=Object(c["a"])(s,a,r,!1,null,"8d6893ae",null);t["a"]=l.exports},a2b5:function(e,t,n){},b5cf:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));const a={added:"added",modified:"modified",deprecated:"deprecated"},r=[a.modified,a.added,a.deprecated],i={[a.modified]:"change-type.modified",[a.added]:"change-type.added",[a.deprecated]:"change-type.deprecated"},o={"change-type.modified":a.modified,"change-type.added":a.added,"change-type.deprecated":a.deprecated}},beb1:function(e,t,n){"use strict";function a(e){if(!e)return!1;const t=window.getComputedStyle(e.$el||e),n=(e.$el||e).offsetHeight,a=t.lineHeight?parseFloat(t.lineHeight):1,r=t.paddingTop?parseFloat(t.paddingTop):0,i=t.paddingBottom?parseFloat(t.paddingBottom):0,o=t.borderTopWidth?parseFloat(t.borderTopWidth):0,s=t.borderBottomWidth?parseFloat(t.borderBottomWidth):0,c=n-(r+i+o+s),l=c/a;return l>=2}n.d(t,"a",(function(){return a}))},d94b:function(e,t,n){"use strict";n("fff0")},dcf6:function(e,t,n){"use strict";n("2f04")},e8ea:function(e,t,n){"use strict";var a=function(e,t){var n=t._c;return n("p",{staticClass:"requirement-metadata",class:t.data.staticClass},[n("strong",[t._v(t._s(t.parent.$t("required")))]),t.props.defaultImplementationsCount?[t._v(" "+t._s(t.parent.$tc("metadata.default-implementation",t.props.defaultImplementationsCount))+" ")]:t._e()],2)},r=[],i={name:"RequirementMetadata",props:{defaultImplementationsCount:{type:Number,default:0}}},o=i,s=n("2877"),c=Object(s["a"])(o,a,r,!0,null,null,null);t["a"]=c.exports},fff0:function(e,t,n){}}]);