/*! @laomao800/vue-nav-box v1.3.0 */(function(t){function e(e){for(var n,r,l=e[0],s=e[1],c=e[2],b=0,f=[];b<l.length;b++)r=l[b],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,l=1;l<o.length;l++){var s=o[l];0!==a[s]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=o[0]))}return t}var n={},a={index:0},i=[];function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var d=s;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("e35a")},"1c90":function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,".form-item{margin-bottom:16px}.form-item__label{text-align:right;vertical-align:middle;float:left;font-size:14px;color:#606266;line-height:32px;padding:0 12px 0 0;-webkit-box-sizing:border-box;box-sizing:border-box;width:80px}.form-item__content{line-height:32px;position:relative;font-size:14px;margin-left:80px}.input{position:relative;font-size:12px;display:inline-block;width:100%}.input__inner,.textarea__inner{background-color:#fff;background-image:none;border-radius:4px;border:1px solid #dcdfe6;-webkit-box-sizing:border-box;box-sizing:border-box;color:#606266;display:inline-block;font-size:inherit;height:32px;line-height:32px;outline:none;padding:0 15px;width:100%}.checkbox,.radio{color:#606266;font-weight:500;font-size:14px;position:relative;cursor:pointer;display:inline-block;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin-right:20px}.checkbox input,.radio input{vertical-align:middle}.checkbox__label,.radio__label{padding-left:6px}",""]),t.exports=e},"42a9":function(t,e,o){"use strict";o("42c9")},"42c9":function(t,e,o){var n=o("1c90");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=o("499e").default;a("06d86955",n,!0,{sourceMap:!1,shadowMode:!1})},"47c4":function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,"*{padding:0;margin:0}.form-wrap{width:800px;border:1px solid #efefef;margin:40px auto 0}.form-wrap .body{padding:16px}.form-wrap .footer{padding:16px;border-top:1px solid #efefef;text-align:right}.button{display:inline-block;white-space:nowrap;cursor:pointer;background:#fff;border:1px solid #dcdfe6;border-color:#dcdfe6;color:#606266;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none;margin:0;padding:6px 12px;font-size:14px;border-radius:4px}.button--submit{color:#fff;background-color:#409eff;border-color:#409eff}.button+.button{margin-left:10px}",""]),t.exports=e},"56f0":function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,'.nav-box__wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;height:100%}.nav-box__content{position:relative;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-box-flex:1;-ms-flex:1;flex:1;padding-right:16px;overflow:auto}.nav-box__content:hover::-webkit-scrollbar{opacity:1}.nav-box__content::-webkit-scrollbar{width:8px;height:8px;background-color:rgba(0,0,0,.06);-webkit-border-radius:100px;opacity:0}.nav-box__content::-webkit-scrollbar:hover{background-color:rgba(0,0,0,.09)}.nav-box__content::-webkit-scrollbar-thumb{background:rgba(0,0,0,.2);-webkit-border-radius:100px}.nav-box__content::-webkit-scrollbar-thumb:active{background:rgba(0,0,0,.6)}.nav-box__navs{-webkit-box-sizing:content-box;box-sizing:content-box;width:200px;padding-left:16px;overflow:auto}.nav-box__navs:hover::-webkit-scrollbar{opacity:1}.nav-box__navs::-webkit-scrollbar{width:8px;height:8px;background-color:rgba(0,0,0,.06);-webkit-border-radius:100px;opacity:0}.nav-box__navs::-webkit-scrollbar:hover{background-color:rgba(0,0,0,.09)}.nav-box__navs::-webkit-scrollbar-thumb{background:rgba(0,0,0,.2);-webkit-border-radius:100px}.nav-box__navs::-webkit-scrollbar-thumb:active{background:rgba(0,0,0,.6)}.nav-box__navs ul{height:100%;padding:0;margin:0;list-style:none;border-left:1px solid #eaeaea}.nav-box__nav{position:relative;padding:6px 0 6px 16px;margin-bottom:4px;font-size:14px;line-height:1.4em;min-height:1.4em;color:#333;cursor:pointer;-webkit-transition:color .4s;transition:color .4s}.nav-box__nav,.nav-box__nav:before{-webkit-box-sizing:content-box;box-sizing:content-box}.nav-box__nav:before{position:absolute;top:50%;left:0;display:block;width:6px;height:6px;content:"";background-color:#eee;border:4px solid;border-color:transparent;border-radius:50%;-webkit-transition:background-color .4s;transition:background-color .4s;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.nav-box__nav:hover{color:#009efb}.nav-box__nav:hover:before{background-color:#ddd}.nav-box__nav--active{color:#009efb}.nav-box__nav--active:before{background-color:#fff!important;border-color:#009efb}.nav-box__pane:not(:last-child){padding-bottom:16px}.nav-box__header{position:relative;padding:.5em 1em;-webkit-box-sizing:content-box;box-sizing:content-box;margin-bottom:16px;line-height:1.8em;min-height:1.8em;background-color:#fafafa;border-left:3px solid #009efb;-webkit-box-shadow:inset 0 -1px 0 0 #eaeaea;box-shadow:inset 0 -1px 0 0 #eaeaea}.nav-box__title{display:inline-block;font-size:16px;cursor:default}.nav-box__folder{position:absolute;top:50%;right:16px;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:20px;height:20px;background-color:#fff;border:1px solid #ddd;border-radius:2px}.nav-box__folder:hover{border-color:#bbb;cursor:pointer}.nav-box__folder:after,.nav-box__folder:before{content:"";position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);display:block;height:2px;width:10px;background-color:#ddd}.nav-box__folder:after{display:none;-webkit-transform:translate(-50%,-50%) rotate(-90deg);transform:translate(-50%,-50%) rotate(-90deg)}.nav-box__pane--fold .nav-box__header{margin-bottom:0}.nav-box__pane--fold .nav-box__body{display:none}.nav-box__pane--fold .nav-box__folder:after{display:block}',""]),t.exports=e},"5dbe":function(t,e,o){"use strict";o("8869")},8869:function(t,e,o){var n=o("47c4");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=o("499e").default;a("db5ad48e",n,!0,{sourceMap:!1,shadowMode:!1})},a1b7:function(t,e,o){var n=o("56f0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=o("499e").default;a("692d0988",n,!0,{sourceMap:!1,shadowMode:!1})},e35a:function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"form-wrap"},[o("div",{staticClass:"body"},[o("nav-box",{attrs:{height:"360px",foldable:!0}},[o("nav-box-pane",[o("div",{attrs:{slot:"title"},slot:"title"},[t._v(" Form 1 "),o("strong",{staticStyle:{color:"#f90"}},[t._v("(Html surport)")])]),o("example-form")],1),o("nav-box-pane",{attrs:{title:"Form 2 (Fold by default)",fold:!0}},[o("example-form")],1),o("nav-box-pane",{attrs:{title:"Form 3 (Can't fold)",foldable:!1}},[o("example-form")],1)],1)],1),t._m(0)])},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"footer"},[o("button",{staticClass:"button button--submit"},[t._v("立即创建")]),o("button",{staticClass:"button"},[t._v("取消")])])}],r=(o("b0c0"),o("4160"),o("d81d"),o("a9e3"),o("159b"),o("d138")),l=o.n(r),s=o("7b06"),c=o.n(s),d={name:"NavBox",props:{height:{type:[String,Number],default:null},navWidth:{type:[String,Number],default:null},duration:{type:Number,default:400},offsetTop:{type:Number,default:0},foldable:{type:Boolean,default:!1},navHidden:{type:Boolean,default:!1}},data:function(){return{navs:[],activeItem:null,lastActiveItem:null,scrollByNav:!1}},computed:{internalHeight:function(){return c()(this.height)},internalNavWidth:function(){return c()(this.navWidth)}},watch:{navHidden:{immediate:!0,handler:function(t){t?this.teardown():this.init()}}},beforeDestroy:function(){this.teardown()},methods:{init:function(){var t=this;this.$nextTick((function(){return t.$refs.content.addEventListener("scroll",t.onScroll)}))},teardown:function(){this.$refs.content&&this.$refs.content.removeEventListener("scroll",this.onScroll),this.scrollAnimationFrame&&window.cancelAnimationFrame(this.scrollAnimationFrame)},addNav:function(t){this.navs.push(t)},navClick:function(t){var e=this,o=t.$el;o&&(this.scrollByNav=!0,this.activeItem=t,this.scrollTo(o,(function(){e.scrollByNav=!1})))},scrollTo:function(t,e){var o=this,n=this.getOffsetTop(t),a=this.$refs.content.scrollTop,i=n-a,r=l()(.5,0,.35,1),s=null,c=function t(n){s||(s=n);var l=n-s,c=l/o.duration;l>=o.duration&&(l=o.duration),c>=1&&(c=1);var d=a+r(c)*(i-o.offsetTop);o.$refs.content.scrollTo(0,d),l<o.duration?o.scrollAnimationFrame=window.requestAnimationFrame(t):(o.$refs.content.addEventListener("scroll",o.onScroll),e())};window.requestAnimationFrame(c)},getOffsetTop:function(t){var e=0,o=t;while(o&&o!==this.$refs.content)e+=o.offsetTop,o=o.offsetParent;return e},onScroll:function(t){this.scrollByNav||(this.activeItem=this.getItemInsideWindow(),this.activeItem!==this.lastActiveItem&&(this.$emit("activeChanged",t,this.activeItem,this.lastActiveItem),this.lastActiveItem=this.activeItem))},getItemInsideWindow:function(){var t,e=this;return this.navs.forEach((function(o){var n=o.$el;if(n){var a=e.$refs.content.scrollTop,i=a>=e.getOffsetTop(n)-e.offsetTop,r=a<e.getOffsetTop(n)-e.offsetTop+n.offsetHeight;i&&r&&(t=o)}})),t}},render:function(){var t=this,e=arguments[0];return e("div",{class:["nav-box__wrapper",{"nav-box__wrapper--foldable":this.foldable}],style:{height:this.internalHeight}},[e("div",{ref:"content",class:"nav-box__content"},[this.$slots.default]),this.navHidden?null:e("div",{class:"nav-box__navs",style:{width:this.internalNavWidth}},[e("ul",[this.navs.map((function(o,n){return e("li",{key:n,class:["nav-box__nav",{"nav-box__nav--active":t.activeItem?t.activeItem===o:0===n}],on:{click:function(){return t.navClick(o)}}},[o.$slots.title||o.title])}))])])])}},b={name:"NavBoxPane",props:{title:{type:String,default:null},foldable:{type:Boolean,default:!0},fold:{type:Boolean,default:!1}},data:function(){return{internalFoldable:!1,internalFold:!1}},computed:{owner:function(){return"NavBox"===this.$parent.$options.name?this.$parent:null},ownerFolable:function(){return!!this.owner&&this.owner.foldable}},watch:{foldable:{immediate:!0,handler:function(t){this.internalFoldable=!!this.ownerFolable&&t}},fold:{immediate:!0,handler:function(t){this.internalFold=!!this.ownerFolable&&t}},ownerFolable:function(t){t?(this.internalFoldable=this.foldable,this.internalFold=this.fold):(this.internalFoldable=!1,this.internalFold=!1)}},mounted:function(){this.owner&&this.owner.addNav(this)},render:function(){var t=this,e=arguments[0];return e("div",{class:["nav-box__pane",{"nav-box__pane--fold":this.internalFold}]},[e("div",{class:"nav-box__header"},[e("div",{class:"nav-box__title"},[this.$slots.title?this.$slots.title:this.title]),this.internalFoldable?e("span",{class:"nav-box__folder",on:{click:function(){return t.internalFold=!t.internalFold}}}):null]),e("div",{class:["nav-box__body",{"nav-box__body--fold":this.internalFold}]},[this.$slots.default])])}};o("a1b7");d.install=function(t){t.component(d.name,d)},b.install=function(t){t.component(b.name,b)},"undefined"!==typeof window&&window.Vue&&(window.Vue.use(d),window.Vue.use(b));var f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"form-item"},[o("label",{staticClass:"form-item__label"},[t._v("活动名称")]),o("div",{staticClass:"form-item__content"},[o("div",{staticClass:"input"},[o("input",{staticClass:"input__inner",attrs:{type:"text"}})])])]),o("div",{staticClass:"form-item"},[o("label",{staticClass:"form-item__label"},[t._v("活动区域")]),o("div",{staticClass:"form-item__content"},[o("div",{staticClass:"select"},[o("div",{staticClass:"input"},[o("input",{staticClass:"input__inner",attrs:{type:"text"}})])])])]),o("div",{staticClass:"form-item"},[o("label",{staticClass:"form-item__label"},[t._v("活动时间")]),o("div",{staticClass:"form-item__content"},[o("div",{staticStyle:{width:"40%",display:"inline-block","padding-right":"10px"}},[o("div",{staticClass:"input",staticStyle:{width:"100%"}},[o("input",{staticClass:"input__inner",attrs:{type:"text",name:"",placeholder:"选择日期"}})])]),o("div",{staticStyle:{width:"40%",display:"inline-block"}},[o("div",{staticClass:"input",staticStyle:{width:"100%"}},[o("input",{staticClass:"input__inner",attrs:{type:"text",name:"",placeholder:"选择日期"}})])])])]),o("div",{staticClass:"form-item"},[o("label",{staticClass:"form-item__label"},[t._v("活动性质")]),o("div",{staticClass:"form-item__content"},[o("div",{staticClass:"checkbox-group",attrs:{"aria-label":"checkbox-group"}},[o("label",{staticClass:"checkbox"},[o("input",{attrs:{type:"checkbox",name:"type",value:"美食/餐厅线上活动"}}),o("span",{staticClass:"checkbox__label"},[t._v("美食/餐厅线上活动")])]),o("label",{staticClass:"checkbox"},[o("input",{attrs:{type:"checkbox",name:"type",value:"地推活动"}}),o("span",{staticClass:"checkbox__label"},[t._v("地推活动")])])])])]),o("div",{staticClass:"form-item"},[o("label",{staticClass:"form-item__label"},[t._v("特殊资源")]),o("div",{staticClass:"form-item__content"},[o("div",{staticClass:"radio-group"},[o("label",{staticClass:"radio"},[o("input",{attrs:{type:"radio",value:"线上品牌商赞助"}}),o("span",{staticClass:"radio__label"},[t._v("线上品牌商赞助")])]),o("label",{staticClass:"radio"},[o("input",{attrs:{type:"radio",value:"线下场地免费"}}),o("span",{staticClass:"radio__label"},[t._v("线下场地免费")])])])])]),o("div",{staticClass:"form-item"},[o("label",{staticClass:"form-item__label"},[t._v("活动形式")]),o("div",{staticClass:"form-item__content"},[o("div",{staticClass:"textarea"},[o("textarea",{staticClass:"textarea__inner",staticStyle:{"min-height":"50px"}})])])])])}],u={name:"example-form"},v=u,x=(o("42a9"),o("2877")),h=Object(x["a"])(v,f,p,!1,null,null,null),_=h.exports,m={name:"app",components:{NavBox:d,NavBoxPane:b,ExampleForm:_}},g=m,w=(o("5dbe"),Object(x["a"])(g,a,i,!1,null,null,null)),k=w.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(k)}}).$mount("#app")}});