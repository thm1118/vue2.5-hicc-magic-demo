(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3734"],{"6tZy":function(e,l,v){"use strict";var n=v("DfF9");v.n(n).a},DfF9:function(e,l,v){},EeJQ:function(e,l,v){"use strict";var n=v("n8EX");v.n(n).a},FiM2:function(e,l,v){"use strict";v.r(l);var n=function(){var e="D:\\works\\jstest\\vue-element-admin\\src\\components\\BackToTop\\index.vue",l="c2d798200e989eda622e3b2e999cd6e9ab1e6361",v=new(0,function(){}.constructor)("return this")(),n="__coverage__",o={path:"D:\\works\\jstest\\vue-element-admin\\src\\components\\BackToTop\\index.vue",statementMap:{0:{start:{line:29,column:8},end:{line:37,column:9}},1:{start:{line:46,column:4},end:{line:50,column:5}},2:{start:{line:53,column:4},end:{line:53,column:56}},3:{start:{line:56,column:4},end:{line:56,column:59}},4:{start:{line:57,column:4},end:{line:59,column:5}},5:{start:{line:58,column:6},end:{line:58,column:34}},6:{start:{line:63,column:6},end:{line:63,column:63}},7:{start:{line:66,column:6},end:{line:66,column:31}},8:{start:{line:66,column:25},end:{line:66,column:31}},9:{start:{line:67,column:20},end:{line:67,column:38}},10:{start:{line:68,column:14},end:{line:68,column:15}},11:{start:{line:69,column:6},end:{line:69,column:26}},12:{start:{line:70,column:6},end:{line:80,column:14}},13:{start:{line:71,column:21},end:{line:71,column:79}},14:{start:{line:72,column:8},end:{line:78,column:9}},15:{start:{line:73,column:10},end:{line:73,column:47}},16:{start:{line:74,column:10},end:{line:74,column:38}},17:{start:{line:75,column:10},end:{line:75,column:31}},18:{start:{line:77,column:10},end:{line:77,column:34}},19:{start:{line:79,column:8},end:{line:79,column:11}},20:{start:{line:83,column:6},end:{line:83,column:52}},21:{start:{line:83,column:28},end:{line:83,column:52}},22:{start:{line:84,column:6},end:{line:84,column:45}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:28,column:15},end:{line:28,column:16}},loc:{start:{line:28,column:26},end:{line:38,column:7}},line:28},1:{name:"(anonymous_1)",decl:{start:{line:70,column:34},end:{line:70,column:35}},loc:{start:{line:70,column:40},end:{line:80,column:7}},line:70}},branchMap:{0:{loc:{start:{line:57,column:4},end:{line:59,column:5}},type:"if",locations:[{start:{line:57,column:4},end:{line:59,column:5}},{start:{line:57,column:4},end:{line:59,column:5}}],line:57},1:{loc:{start:{line:66,column:6},end:{line:66,column:31}},type:"if",locations:[{start:{line:66,column:6},end:{line:66,column:31}},{start:{line:66,column:6},end:{line:66,column:31}}],line:66},2:{loc:{start:{line:72,column:8},end:{line:78,column:9}},type:"if",locations:[{start:{line:72,column:8},end:{line:78,column:9}},{start:{line:72,column:8},end:{line:78,column:9}}],line:72},3:{loc:{start:{line:83,column:6},end:{line:83,column:52}},type:"if",locations:[{start:{line:83,column:6},end:{line:83,column:52}},{start:{line:83,column:6},end:{line:83,column:52}}],line:83}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0},f:{0:0,1:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},i=v[n]||(v[n]={});return i[e]&&i[e].hash===l?i[e]:(o.hash=l,i[e]=o)}(),o={name:"BackToTop",props:{visibilityHeight:{type:Number,default:400},backPosition:{type:Number,default:0},customStyle:{type:Object,default:function(){return n.f[0]++,n.s[0]++,{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"}}},transitionName:{type:String,default:"fade"}},data:function(){return n.s[1]++,{visible:!1,interval:null,isMoving:!1}},mounted:function(){n.s[2]++,window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){n.s[3]++,window.removeEventListener("scroll",this.handleScroll),n.s[4]++,this.interval?(n.b[0][0]++,n.s[5]++,clearInterval(this.interval)):n.b[0][1]++},methods:{handleScroll:function(){n.s[6]++,this.visible=window.pageYOffset>this.visibilityHeight},backToTop:function(){var e=this;if(n.s[7]++,this.isMoving)return n.b[1][0]++,void n.s[8]++;n.b[1][1]++;var l=(n.s[9]++,window.pageYOffset),v=(n.s[10]++,0);n.s[11]++,this.isMoving=!0,n.s[12]++,this.interval=setInterval(function(){n.f[1]++;var o=(n.s[13]++,Math.floor(e.easeInOutQuad(10*v,l,-l,500)));n.s[14]++,o<=e.backPosition?(n.b[2][0]++,n.s[15]++,window.scrollTo(0,e.backPosition),n.s[16]++,clearInterval(e.interval),n.s[17]++,e.isMoving=!1):(n.b[2][1]++,n.s[18]++,window.scrollTo(0,o)),n.s[19]++,v++},16.7)},easeInOutQuad:function(e,l,v,o){return n.s[20]++,(e/=o/2)<1?(n.b[3][0]++,n.s[21]++,v/2*e*e+l):(n.b[3][1]++,n.s[22]++,-v/2*(--e*(e-2)-1)+l)}}},i=(v("6tZy"),v("KHd+")),c=Object(i.a)(o,function(){var e=this.$createElement,l=this._self._c||e;return l("transition",{attrs:{name:this.transitionName}},[l("div",{directives:[{name:"show",rawName:"v-show",value:this.visible,expression:"visible"}],staticClass:"back-to-ceiling",style:this.customStyle,on:{click:this.backToTop}},[l("svg",{staticClass:"Icon Icon--backToTopArrow",staticStyle:{height:"16px",width:"16px"},attrs:{width:"16",height:"16",viewBox:"0 0 17 17",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"}},[l("title",[this._v("回到顶部")]),this._v(" "),l("g",[l("path",{attrs:{d:"M12.036 15.59c0 .55-.453.995-.997.995H5.032c-.55 0-.997-.445-.997-.996V8.584H1.03c-1.1 0-1.36-.633-.578-1.416L7.33.29c.39-.39 1.026-.385 1.412 0l6.878 6.88c.782.78.523 1.415-.58 1.415h-3.004v7.004z","fill-rule":"evenodd"}})])])])])},[],!1,null,"66d3fb6d",null);c.options.__file="index.vue";var d=c.exports,t=function(){var e="D:\\works\\jstest\\vue-element-admin\\src\\views\\components-demo\\backToTop.vue",l="61c85c40969ce4c698501e3ff829ca28a01d7e5c",v=new(0,function(){}.constructor)("return this")(),n="__coverage__",o={path:"D:\\works\\jstest\\vue-element-admin\\src\\views\\components-demo\\backToTop.vue",statementMap:{0:{start:{line:131,column:4},end:{line:141,column:5}}},fnMap:{},branchMap:{},s:{0:0},f:{},b:{},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},i=v[n]||(v[n]={});return i[e]&&i[e].hash===l?i[e]:(o.hash=l,i[e]=o)}(),a={name:"BackToTopDemo",components:{BackToTop:d},data:function(){return t.s[0]++,{myBackToTopStyle:{right:"50px",bottom:"50px",width:"40px",height:"40px","border-radius":"4px","line-height":"45px",background:"#e7eaf1"}}}},r=(v("EeJQ"),Object(i.a)(a,function(){var e=this,l=e.$createElement,v=e._self._c||l;return v("div",{staticClass:"components-container"},[v("code",[e._v(e._s(e.$t("components.backToTopTips1")))]),e._v(" "),v("code",[e._v(e._s(e.$t("components.backToTopTips2")))]),e._v(" "),e._m(0),e._v(" "),v("el-tooltip",{attrs:{placement:"top",content:"tooltip"}},[v("back-to-top",{attrs:{"custom-style":e.myBackToTopStyle,"visibility-height":300,"back-position":50,"transition-name":"fade"}})],1)],1)},[function(){var e=this,l=e.$createElement,v=e._self._c||l;return v("div",{staticClass:"placeholder-container"},[v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")]),e._v(" "),v("div",[e._v("placeholder")])])}],!1,null,"36b07a1c",null));r.options.__file="backToTop.vue";l.default=r.exports},n8EX:function(e,l,v){}}]);