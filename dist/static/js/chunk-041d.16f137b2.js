(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-041d"],{"9x5b":function(e,t,n){"use strict";n.d(t,"a",function(){return c});var o=n("Kw5r"),i=n("Ddwv"),r=n.n(i),l=function(){var e="D:\\works\\jstest\\vue-element-admin\\src\\utils\\clipboard.js",t="676c21615267af15f226a3ce89030dcccffd8f31",n=new(0,function(){}.constructor)("return this")(),o="__coverage__",i={path:"D:\\works\\jstest\\vue-element-admin\\src\\utils\\clipboard.js",statementMap:{0:{start:{line:5,column:2},end:{line:9,column:4}},1:{start:{line:13,column:2},end:{line:16,column:4}},2:{start:{line:20,column:20},end:{line:22,column:4}},3:{start:{line:21,column:16},end:{line:21,column:20}},4:{start:{line:23,column:2},end:{line:28,column:4}},5:{start:{line:24,column:4},end:{line:24,column:22}},6:{start:{line:25,column:4},end:{line:25,column:26}},7:{start:{line:26,column:4},end:{line:26,column:28}},8:{start:{line:27,column:4},end:{line:27,column:23}},9:{start:{line:29,column:2},end:{line:34,column:4}},10:{start:{line:30,column:4},end:{line:30,column:20}},11:{start:{line:31,column:4},end:{line:31,column:26}},12:{start:{line:32,column:4},end:{line:32,column:28}},13:{start:{line:33,column:4},end:{line:33,column:23}},14:{start:{line:35,column:2},end:{line:35,column:26}}},fnMap:{0:{name:"clipboardSuccess",decl:{start:{line:4,column:9},end:{line:4,column:25}},loc:{start:{line:4,column:28},end:{line:10,column:1}},line:4},1:{name:"clipboardError",decl:{start:{line:12,column:9},end:{line:12,column:23}},loc:{start:{line:12,column:26},end:{line:17,column:1}},line:12},2:{name:"handleClipboard",decl:{start:{line:19,column:24},end:{line:19,column:39}},loc:{start:{line:19,column:53},end:{line:36,column:1}},line:19},3:{name:"(anonymous_3)",decl:{start:{line:21,column:10},end:{line:21,column:11}},loc:{start:{line:21,column:16},end:{line:21,column:20}},line:21},4:{name:"(anonymous_4)",decl:{start:{line:23,column:26},end:{line:23,column:27}},loc:{start:{line:23,column:32},end:{line:28,column:3}},line:23},5:{name:"(anonymous_5)",decl:{start:{line:29,column:24},end:{line:29,column:25}},loc:{start:{line:29,column:30},end:{line:34,column:3}},line:29}},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0},f:{0:0,1:0,2:0,3:0,4:0,5:0},b:{},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},r=n[o]||(n[o]={});return r[e]&&r[e].hash===t?r[e]:(i.hash=t,r[e]=i)}();function c(e,t){l.f[2]++;var n=(l.s[2]++,new r.a(t.target,{text:function(){return l.f[3]++,l.s[3]++,e}}));l.s[4]++,n.on("success",function(){l.f[4]++,l.s[5]++,l.f[0]++,l.s[0]++,o.default.prototype.$message({message:"Copy successfully",type:"success",duration:1500}),l.s[6]++,n.off("error"),l.s[7]++,n.off("success"),l.s[8]++,n.destroy()}),l.s[9]++,n.on("error",function(){l.f[5]++,l.s[10]++,l.f[1]++,l.s[1]++,o.default.prototype.$message({message:"Copy failed",type:"error"}),l.s[11]++,n.off("error"),l.s[12]++,n.off("success"),l.s[13]++,n.destroy()}),l.s[14]++,n.onClick(t)}},Ddwv:function(e,t,n){var o,i,r;i=[e,n("YDNs"),n("wOJ8"),n("TiCD")],void 0===(r="function"==typeof(o=function(e,t,n,o){"use strict";var i=c(t),r=c(n),l=c(o);function c(e){return e&&e.__esModule?e:{default:e}}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return o.resolveOptions(n),o.listenClick(e),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),u(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===a(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=(0,l.default)(e,"click",function(e){return t.onClick(e)})}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new i.default({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return f("action",e)}},{key:"defaultTarget",value:function(e){var t=f("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return f("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach(function(e){n=n&&!!document.queryCommandSupported(e)}),n}}]),t}(r.default);function f(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}e.exports=s})?o.apply(t,i):o)||(e.exports=r)},TiCD:function(e,t,n){var o=n("b+/x"),i=n("jFDo");e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!o.string(t))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(o.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,function(e){e.addEventListener(t,n)}),{destroy:function(){Array.prototype.forEach.call(e,function(e){e.removeEventListener(t,n)})}}}(e,t,n);if(o.string(e))return function(e,t,n){return i(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},YDNs:function(e,t,n){var o,i,r;i=[e,n("gvr7")],void 0===(r="function"==typeof(o=function(e,t){"use strict";var n=function(e){return e&&e.__esModule?e:{default:e}}(t),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return i(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=o+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,n.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,n.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":o(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}();e.exports=r})?o.apply(t,i):o)||(e.exports=r)},"b+/x":function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},gvr7:function(e,t){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var o=window.getSelection(),i=document.createRange();i.selectNodeContents(e),o.removeAllRanges(),o.addRange(i),t=o.toString()}return t}},jFDo:function(e,t,n){var o=n("lNia");function i(e,t,n,i,r){var l=function(e,t,n,i){return function(n){n.delegateTarget=o(n.target,t),n.delegateTarget&&i.call(e,n)}}.apply(this,arguments);return e.addEventListener(n,l,r),{destroy:function(){e.removeEventListener(n,l,r)}}}e.exports=function(e,t,n,o,r){return"function"==typeof e.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,function(e){return i(e,t,n,o,r)}))}},lNia:function(e,t){var n=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}e.exports=function(e,t){for(;e&&e.nodeType!==n;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},wOJ8:function(e,t){function n(){}n.prototype={on:function(e,t,n){var o=this.e||(this.e={});return(o[e]||(o[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var o=this;function i(){o.off(e,i),t.apply(n,arguments)}return i._=t,this.on(e,i,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),o=0,i=n.length;o<i;o++)n[o].fn.apply(n[o].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),o=n[e],i=[];if(o&&t)for(var r=0,l=o.length;r<l;r++)o[r].fn!==t&&o[r].fn._!==t&&i.push(o[r]);return i.length?n[e]=i:delete n[e],this}},e.exports=n,e.exports.TinyEmitter=n}}]);