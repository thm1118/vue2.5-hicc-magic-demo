(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-d742"],{"06Eh":function(n,t,e){"use strict";var i=e("V/hC");e.n(i).a},RAt8:function(n,t,e){"use strict";e.r(t);var i=e("QbLZ"),o=e.n(i),l=e("P2sY"),a=e.n(l),s=(e("p77/"),e("9RMS"),e("WGVu")),c=(function(){var n="D:\\works\\jstest\\vue-element-admin\\src\\components\\MarkdownEditor\\defaultOptions.js",t="a27ac2b42eb00dd80d3c0d9888ec14fa848a9bb3",e=new(0,function(){}.constructor)("return this")(),i="__coverage__",o={path:"D:\\works\\jstest\\vue-element-admin\\src\\components\\MarkdownEditor\\defaultOptions.js",statementMap:{},fnMap:{},branchMap:{},s:{},f:{},b:{},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},l=e[i]||(e[i]={});l[n]&&l[n].hash===t?l[n]:(o.hash=t,l[n]=o)}(),{minHeight:"200px",previewStyle:"vertical",useCommandShortcut:!0,useDefaultHTMLSanitizer:!0,usageStatistics:!1,hideModeSwitch:!1,toolbarItems:["heading","bold","italic","strike","divider","hr","quote","divider","ul","ol","task","indent","outdent","divider","table","image","link","divider","code","codeblock"]}),r=function(){var n="D:\\works\\jstest\\vue-element-admin\\src\\components\\MarkdownEditor\\index.vue",t="40b12ddddaa7c2de59379c9a690e1116f915ad6a",e=new(0,function(){}.constructor)("return this")(),i="__coverage__",o={path:"D:\\works\\jstest\\vue-element-admin\\src\\components\\MarkdownEditor\\index.vue",statementMap:{0:{start:{line:25,column:8},end:{line:25,column:90}},1:{start:{line:31,column:8},end:{line:31,column:29}},2:{start:{line:50,column:4},end:{line:52,column:5}},3:{start:{line:56,column:22},end:{line:56,column:69}},4:{start:{line:57,column:6},end:{line:57,column:41}},5:{start:{line:58,column:6},end:{line:58,column:34}},6:{start:{line:59,column:6},end:{line:59,column:38}},7:{start:{line:60,column:6},end:{line:60,column:20}},8:{start:{line:65,column:6},end:{line:67,column:7}},9:{start:{line:66,column:8},end:{line:66,column:41}},10:{start:{line:70,column:6},end:{line:70,column:26}},11:{start:{line:71,column:6},end:{line:71,column:23}},12:{start:{line:74,column:6},end:{line:74,column:34}},13:{start:{line:77,column:6},end:{line:77,column:38}},14:{start:{line:81,column:4},end:{line:81,column:21}},15:{start:{line:84,column:4},end:{line:84,column:24}},16:{start:{line:88,column:6},end:{line:91,column:8}},17:{start:{line:92,column:6},end:{line:94,column:7}},18:{start:{line:93,column:8},end:{line:93,column:43}},19:{start:{line:95,column:6},end:{line:97,column:8}},20:{start:{line:96,column:8},end:{line:96,column:54}},21:{start:{line:100,column:6},end:{line:100,column:30}},22:{start:{line:100,column:24},end:{line:100,column:30}},23:{start:{line:101,column:6},end:{line:101,column:31}},24:{start:{line:102,column:6},end:{line:102,column:26}},25:{start:{line:105,column:6},end:{line:105,column:36}},26:{start:{line:108,column:6},end:{line:108,column:38}},27:{start:{line:111,column:6},end:{line:111,column:32}},28:{start:{line:114,column:6},end:{line:114,column:34}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:95,column:31},end:{line:95,column:32}},loc:{start:{line:95,column:37},end:{line:97,column:7}},line:95}},branchMap:{0:{loc:{start:{line:65,column:6},end:{line:67,column:7}},type:"if",locations:[{start:{line:65,column:6},end:{line:67,column:7}},{start:{line:65,column:6},end:{line:67,column:7}}],line:65},1:{loc:{start:{line:65,column:10},end:{line:65,column:73}},type:"binary-expr",locations:[{start:{line:65,column:10},end:{line:65,column:31}},{start:{line:65,column:35},end:{line:65,column:73}}],line:65},2:{loc:{start:{line:92,column:6},end:{line:94,column:7}},type:"if",locations:[{start:{line:92,column:6},end:{line:94,column:7}},{start:{line:92,column:6},end:{line:94,column:7}}],line:92},3:{loc:{start:{line:100,column:6},end:{line:100,column:30}},type:"if",locations:[{start:{line:100,column:6},end:{line:100,column:30}},{start:{line:100,column:6},end:{line:100,column:30}}],line:100}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0,13:0,14:0,15:0,16:0,17:0,18:0,19:0,20:0,21:0,22:0,23:0,24:0,25:0,26:0,27:0,28:0},f:{0:0},b:{0:[0,0],1:[0,0],2:[0,0],3:[0,0]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},l=e[i]||(e[i]={});return l[n]&&l[n].hash===t?l[n]:(o.hash=t,l[n]=o)}(),d={name:"MarddownEditor",props:{value:{type:String,default:""},id:{type:String,required:!1,default:function(){return r.s[0]++,"markdown-editor-"+ +new Date+(1e3*Math.random()).toFixed(0)}},options:{type:Object,default:function(){return r.s[1]++,c}},mode:{type:String,default:"markdown"},height:{type:String,required:!1,default:"300px"},language:{type:String,required:!1,default:"en_US"}},data:function(){return r.s[2]++,{editor:null}},computed:{editorOptions:function(){var n=(r.s[3]++,a()({},c,this.options));return r.s[4]++,n.initialEditType=this.mode,r.s[5]++,n.height=this.height,r.s[6]++,n.language=this.language,r.s[7]++,n}},watch:{value:function(n,t){r.s[8]++,r.b[1][0]++,n!==t&&(r.b[1][1]++,n!==this.editor.getMarkdown())?(r.b[0][0]++,r.s[9]++,this.editor.setMarkdown(n)):r.b[0][1]++},language:function(n){r.s[10]++,this.destroyEditor(),r.s[11]++,this.initEditor()},height:function(n){r.s[12]++,this.editor.height(n)},mode:function(n){r.s[13]++,this.editor.changeMode(n)}},mounted:function(){r.s[14]++,this.initEditor()},destroyed:function(){r.s[15]++,this.destroyEditor()},methods:{initEditor:function(){var n=this;r.s[16]++,this.editor=new s.a(o()({el:document.getElementById(this.id)},this.editorOptions)),r.s[17]++,this.value?(r.b[2][0]++,r.s[18]++,this.editor.setMarkdown(this.value)):r.b[2][1]++,r.s[19]++,this.editor.on("change",function(){r.f[0]++,r.s[20]++,n.$emit("input",n.editor.getMarkdown())})},destroyEditor:function(){if(r.s[21]++,!this.editor)return r.b[3][0]++,void r.s[22]++;r.b[3][1]++,r.s[23]++,this.editor.off("change"),r.s[24]++,this.editor.remove()},setValue:function(n){r.s[25]++,this.editor.setMarkdown(n)},getValue:function(){return r.s[26]++,this.editor.getMarkdown()},setHtml:function(n){r.s[27]++,this.editor.setHtml(n)},getHtml:function(){return r.s[28]++,this.editor.getHtml()}}},u=e("KHd+"),m=Object(u.a)(d,function(){var n=this.$createElement;return(this._self._c||n)("div",{attrs:{id:this.id}})},[],!1,null,null,null);m.options.__file="index.vue";var h=m.exports,f=function(){var n="D:\\works\\jstest\\vue-element-admin\\src\\views\\components-demo\\markdown.vue",t="26c4a97320afbced4cb4735621cb3d7f9eee7ede",e=new(0,function(){}.constructor)("return this")(),i="__coverage__",o={path:"D:\\works\\jstest\\vue-element-admin\\src\\views\\components-demo\\markdown.vue",statementMap:{0:{start:{line:45,column:16},end:{line:52,column:1}},1:{start:{line:57,column:4},end:{line:65,column:5}},2:{start:{line:69,column:6},end:{line:69,column:64}},3:{start:{line:74,column:6},end:{line:74,column:53}},4:{start:{line:75,column:6},end:{line:75,column:28}}},fnMap:{},branchMap:{},s:{0:0,1:0,2:0,3:0,4:0},f:{},b:{},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},l=e[i]||(e[i]={});return l[n]&&l[n].hash===t?l[n]:(o.hash=t,l[n]=o)}(),p=(f.s[0]++,"\n**This is test**\n\n* vue\n* element\n* webpack\n\n"),v={name:"MarkdownDemo",components:{MarkdownEditor:h},data:function(){return f.s[1]++,{content:p,html:"",languageTypeList:{en:"en_US",zh:"zh_CN",es:"es_ES"}}},computed:{language:function(){return f.s[2]++,this.languageTypeList[this.$store.getters.language]}},methods:{getHtml:function(){f.s[3]++,this.html=this.$refs.markdownEditor.getHtml(),f.s[4]++,console.log(this.html)}}},g=(e("06Eh"),Object(u.a)(v,function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"components-container"},[n._m(0),n._v(" "),e("div",{staticClass:"editor-container"},[e("el-tag",{staticClass:"tag-title"},[n._v("Basic:")]),n._v(" "),e("markdown-editor",{attrs:{height:"300px"},model:{value:n.content,callback:function(t){n.content=t},expression:"content"}})],1),n._v(" "),e("div",{staticClass:"editor-container"},[e("el-tag",{staticClass:"tag-title"},[n._v("Markdown Mode:")]),n._v(" "),e("markdown-editor",{ref:"markdownEditor",attrs:{options:{hideModeSwitch:!0,previewStyle:"tab"},height:"200px"},model:{value:n.content,callback:function(t){n.content=t},expression:"content"}})],1),n._v(" "),e("div",{staticClass:"editor-container"},[e("el-tag",{staticClass:"tag-title"},[n._v("Customize Toolbar:")]),n._v(" "),e("markdown-editor",{ref:"markdownEditor",attrs:{options:{toolbarItems:["heading","bold","italic"]}},model:{value:n.content,callback:function(t){n.content=t},expression:"content"}})],1),n._v(" "),e("div",{staticClass:"editor-container"},[e("el-tag",{staticClass:"tag-title"},[n._v("I18n:")]),n._v(" "),e("el-alert",{attrs:{closable:!1,title:"You can change the language of the admin system to see the effect",type:"success"}}),n._v(" "),e("markdown-editor",{attrs:{language:n.language,height:"300px"},model:{value:n.content,callback:function(t){n.content=t},expression:"content"}})],1),n._v(" "),e("el-button",{staticStyle:{"margin-top":"80px"},attrs:{type:"primary",icon:"el-icon-document"},on:{click:n.getHtml}},[n._v("Get HTML")]),n._v(" "),e("div",{domProps:{innerHTML:n._s(n.html)}})],1)},[function(){var n=this.$createElement,t=this._self._c||n;return t("code",[this._v("Markdown is based on\n    "),t("a",{attrs:{href:"https://github.com/nhnent/tui.editor",target:"_blank"}},[this._v("tui.editor")]),this._v(" ，Simply encapsulated in Vue.\n    "),t("a",{attrs:{target:"_blank",href:"https://panjiachen.github.io/vue-element-admin-site/feature/component/markdown-editor.html"}},[this._v("\n      Documentation ")])])}],!1,null,"00333ae5",null));g.options.__file="markdown.vue";t.default=g.exports},"V/hC":function(n,t,e){}}]);