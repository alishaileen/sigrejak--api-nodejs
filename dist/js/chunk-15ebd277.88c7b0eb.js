(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15ebd277"],{"0fd9":function(t,e,a){"use strict";var n=a("ade3"),i=a("5530"),s=(a("13d5"),a("caad"),a("2532"),a("99af"),a("b64b"),a("5319"),a("ac1f"),a("4ec9"),a("d3b7"),a("3ca3"),a("ddb0"),a("159b"),a("4b85"),a("2b0e")),r=a("d9f7"),o=a("80d2"),l=["sm","md","lg","xl"],c=["start","end","center"];function u(t,e){return l.reduce((function(a,n){return a[t+Object(o["G"])(n)]=e(),a}),{})}var d=function(t){return[].concat(c,["baseline","stretch"]).includes(t)},h=u("align",(function(){return{type:String,default:null,validator:d}})),v=function(t){return[].concat(c,["space-between","space-around"]).includes(t)},f=u("justify",(function(){return{type:String,default:null,validator:v}})),g=function(t){return[].concat(c,["space-between","space-around","stretch"]).includes(t)},b=u("alignContent",(function(){return{type:String,default:null,validator:g}})),p={align:Object.keys(h),justify:Object.keys(f),alignContent:Object.keys(b)},m={align:"align",justify:"justify",alignContent:"align-content"};function _(t,e,a){var n=m[t];if(null!=a){if(e){var i=e.replace(t,"");n+="-".concat(i)}return n+="-".concat(a),n.toLowerCase()}}var k=new Map;e["a"]=s["a"].extend({name:"v-row",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},h),{},{justify:{type:String,default:null,validator:v}},f),{},{alignContent:{type:String,default:null,validator:g}},b),render:function(t,e){var a=e.props,i=e.data,s=e.children,o="";for(var l in a)o+=String(a[l]);var c=k.get(o);return c||function(){var t,e;for(e in c=[],p)p[e].forEach((function(t){var n=a[t],i=_(e,t,n);i&&c.push(i)}));c.push((t={"no-gutters":a.noGutters,"row--dense":a.dense},Object(n["a"])(t,"align-".concat(a.align),a.align),Object(n["a"])(t,"justify-".concat(a.justify),a.justify),Object(n["a"])(t,"align-content-".concat(a.alignContent),a.alignContent),t)),k.set(o,c)}(),t(a.tag,Object(r["a"])(i,{staticClass:"row",class:c}),s)}})},"132d":function(t,e,a){"use strict";var n,i=a("5530"),s=(a("c96a"),a("caad"),a("2532"),a("a9e3"),a("498a"),a("7db0"),a("fb6a"),a("4804"),a("7e2b")),r=a("a9ad"),o=a("af2b"),l=a("7560"),c=a("80d2"),u=a("2b0e"),d=a("58df");function h(t){return["fas","far","fal","fab","fad"].some((function(e){return t.includes(e)}))}function v(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(n||(n={}));var f=Object(d["a"])(s["a"],r["a"],o["a"],l["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(c["C"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(c["z"])(t).find((function(e){return t[e]}));return e&&n[e]||Object(c["g"])(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(i["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=Object(i["a"])(Object(i["a"])({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(t){t.class=Object(i["a"])(Object(i["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var a=[],n=this.getDefaultData(),i="material-icons",s=t.indexOf("-"),r=s<=-1;r?a.push(t):(i=t.slice(0,s),h(i)&&(i="")),n.class[i]=!0,n.class[t]=!r;var o=this.getSize();return o&&(n.style={fontSize:o}),this.applyColors(n),e(this.hasClickListener?"button":this.tag,n,a)},renderSvgIcon:function(t,e){var a={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},n=this.getSize();return n&&(a.style={fontSize:n,height:n,width:n}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",a,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var a={class:{"v-icon__component":!0}},n=this.getSize();n&&(a.style={fontSize:n,height:n,width:n}),this.applyColors(a);var i=t.component;return a.props=t.props,a.nativeOn=a.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(i,a)])}},render:function(t){var e=this.getIcon();return"string"===typeof e?v(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=u["a"].extend({name:"v-icon",$_wrapperFor:f,functional:!0,render:function(t,e){var a=e.data,n=e.children,i="";return a.domProps&&(i=a.domProps.textContent||a.domProps.innerHTML||i,delete a.domProps.textContent,delete a.domProps.innerHTML),t(f,a,i?[i]:n)}})},"20f6":function(t,e,a){},"22da":function(t,e,a){"use strict";var n=a("490a");e["a"]=n["a"]},"2fa4":function(t,e,a){"use strict";a("20f6");var n=a("80d2");e["a"]=Object(n["i"])("spacer","div","v-spacer")},3206:function(t,e,a){"use strict";a.d(e,"a",(function(){return o})),a.d(e,"b",(function(){return l}));var n=a("ade3"),i=(a("99af"),a("2b0e")),s=a("d9bd");function r(t,e){return function(){return Object(s["c"])("The ".concat(t," component must be used inside a ").concat(e))}}function o(t,e,a){var s=e&&a?{register:r(e,a),unregister:r(e,a)}:null;return i["a"].extend({name:"registrable-inject",inject:Object(n["a"])({},t,{default:s})})}function l(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return i["a"].extend({name:"registrable-provide",provide:function(){return Object(n["a"])({},t,e?this:{register:this.register,unregister:this.unregister})}})}},4804:function(t,e,a){},"490a":function(t,e,a){"use strict";a("a9e3"),a("99af"),a("8d4f");var n=a("a9ad"),i=a("80d2");e["a"]=n["a"].extend({name:"v-progress-circular",props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:function(){return{radius:20}},computed:{calculatedSize:function(){return Number(this.size)+(this.button?8:0)},circumference:function(){return 2*Math.PI*this.radius},classes:function(){return{"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue:function(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray:function(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset:function(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth:function(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles:function(){return{height:Object(i["g"])(this.calculatedSize),width:Object(i["g"])(this.calculatedSize)}},svgStyles:function(){return{transform:"rotate(".concat(Number(this.rotate),"deg)")}},viewBoxSize:function(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle:function(t,e){return this.$createElement("circle",{class:"v-progress-circular__".concat(t),attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":e}})},genSvg:function(){var t=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"".concat(this.viewBoxSize," ").concat(this.viewBoxSize," ").concat(2*this.viewBoxSize," ").concat(2*this.viewBoxSize)}},t)},genInfo:function(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)}},render:function(t){return t("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}})},"4b85":function(t,e,a){},"4e82":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));var n=a("ade3"),i=a("3206");function s(t,e,a){return Object(i["a"])(t,e,a).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[t])return this[t].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?Object(n["a"])({},this.activeClass,this.isActive):{}}},created:function(){this[t]&&this[t].register(this)},beforeDestroy:function(){this[t]&&this[t].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}s("itemGroup")},8336:function(t,e,a){"use strict";var n=a("53ca"),i=a("3835"),s=a("5530"),r=(a("c7cd"),a("a9e3"),a("caad"),a("86cc"),a("10d2")),o=a("22da"),l=a("4e82"),c=a("f2e7"),u=a("c995"),d=a("fe6c"),h=a("1c87"),v=a("af2b"),f=a("58df"),g=a("d9bd"),b=Object(f["a"])(r["a"],h["a"],d["a"],v["a"],Object(l["a"])("btnToggle"),Object(c["b"])("inputValue"));e["a"]=b.extend().extend({name:"v-btn",props:{activeClass:{type:String,default:function(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:function(){return{proxyClass:"v-btn--active"}},computed:{classes:function(){return Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])(Object(s["a"])({"v-btn":!0},h["a"].options.computed.classes.call(this)),{},{"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top},this.themeClasses),this.groupClasses),this.elevationClasses),this.sizeableClasses)},computedElevation:function(){if(!this.disabled)return u["a"].options.computed.computedElevation.call(this)},computedRipple:function(){var t,e=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!=(t=this.ripple)?t:e)},hasBg:function(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated:function(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound:function(){return Boolean(this.icon||this.fab)},styles:function(){return Object(s["a"])({},this.measurableStyles)}},created:function(){var t=this,e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((function(e){var a=Object(i["a"])(e,2),n=a[0],s=a[1];t.$attrs.hasOwnProperty(n)&&Object(g["a"])(n,s,t)}))},methods:{click:function(t){!this.retainFocusOnClick&&!this.fab&&t.detail&&this.$el.blur(),this.$emit("click",t),this.btnToggle&&this.toggle()},genContent:function(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader:function(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(o["a"],{props:{indeterminate:!0,size:23,width:2}})])}},render:function(t){var e=[this.genContent(),this.loading&&this.genLoader()],a=this.generateRouteLink(),i=a.tag,s=a.data,r=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===i&&(s.attrs.type=this.type,s.attrs.disabled=this.disabled),s.attrs.value=["string","number"].includes(Object(n["a"])(this.value))?this.value:JSON.stringify(this.value),t(i,this.disabled?s:r(this.color,s),e)}})},"86cc":function(t,e,a){},"8d4f":function(t,e,a){},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return o})),a.d(e,"d",(function(){return l}));var n=a("b0af"),i=a("80d2"),s=Object(i["i"])("v-card__actions"),r=Object(i["i"])("v-card__subtitle"),o=Object(i["i"])("v-card__text"),l=Object(i["i"])("v-card__title");n["a"]},"9d26":function(t,e,a){"use strict";var n=a("132d");e["a"]=n["a"]},af2b:function(t,e,a){"use strict";a("c96a");var n=a("2b0e");e["a"]=n["a"].extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},c96a:function(t,e,a){"use strict";var n=a("23e7"),i=a("857a"),s=a("af03");n({target:"String",proto:!0,forced:s("small")},{small:function(){return i(this,"small","","")}})},ca57:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("btn-kembali",{attrs:{path:"/keluarga/ketua/surat/surat-keterangan-pindah"}}),a("h1",{staticClass:"mb-5"},[t._v("Detail Surat Keterangan Pindah")]),a("v-row",[a("v-col",[a("v-card",{attrs:{flat:""}},[a("v-card-title",[a("h3",[t._v("Detail Informasi")]),a("v-spacer"),a("button-chat",{attrs:{countChatUnread:t.countChatUnread,chatPageUrl:"/keluarga/ketua/surat/surat-keterangan-pindah/chat/"+t.data.id,detailPageUrl:"/keluarga/ketua/surat/surat-keterangan-pindah/detail/"+t.data.id,endpointUrl:t.url}}),1===t.data.ketua_lingkungan_approval?a("v-chip",{staticClass:"ml-2",attrs:{color:1===t.data.ketua_lingkungan_approval?"green":"grey lighten-2"}},[a("span",{staticClass:"color-white"},[t._v(" Terverifikasi ")])]):t._e()],1),a("v-divider"),a("v-card-text",{staticClass:"pa-6"},[a("div",{staticClass:"mb-15"},[a("h2",{staticClass:"mb-5"},[t._v("Informasi Surat")]),a("v-divider",{staticClass:"mb-5"}),a("label",[t._v("No. surat")]),a("p",[t._v(t._s(t.data.no_surat))]),a("label",[t._v("Tanggal surat")]),a("p",[t._v(t._s(t.data.created_at))])],1),a("div",{staticClass:"mb-15"},[a("h2",{staticClass:"mb-5"},[t._v("Informasi Umat")]),a("v-divider",{staticClass:"mb-5"}),a("label",[t._v("Nama")]),a("p",[t._v(t._s(t.data.nama))]),a("label",[t._v("Tempat, tanggal lahir")]),a("p",[t._v(t._s(t.data.tempat_lahir+", "+t.data.tgl_lahir))])],1),a("div",{staticClass:"mb-15"},[a("h2",{staticClass:"mb-5"},[t._v("Tempat Tinggal Lama")]),a("v-divider"),a("label",[t._v("Tanggal pertama kali domisili")]),a("p",[t._v(t._s(t.data.tgl_domisili_lama))]),a("label",[t._v("Alamat lama")]),a("p",[t._v(t._s(t.data.alamat_lama))]),a("label",[t._v("Paroki lama")]),a("p",[t._v("Kumetiran")]),a("label",[t._v("Lingkungan lama")]),a("p",[t._v(t._s(t.data.nama_lingkungan_lama))])],1),a("h2",{staticClass:"mb-5"},[t._v("Tempat Tinggal Baru")]),a("v-divider",{staticClass:"mb-5"}),a("label",[t._v("Tanggal mulai domisili")]),a("p",[t._v(t._s(t.data.tgl_domisili_baru))]),a("label",[t._v("Paroki baru")]),a("p",[t._v(t._s(t.data.paroki_baru))]),a("label",[t._v("Lingkungan baru")]),a("p",[t._v(t._s(t.data.nama_lingkungan_baru))]),a("label",[t._v("Alamat baru")]),a("p",[t._v(t._s(t.data.alamat_baru))]),a("label",[t._v("Nomor telepon baru")]),a("p",[t._v(t._s(t.data.no_telp_baru))])],1),0===t.data.ketua_lingkungan_approval?a("v-card-actions",{staticClass:"py-3 px-5"},[a("v-spacer"),0===t.data.ketua_lingkungan_approval?a("v-btn",{staticClass:"btn text-none",attrs:{color:"blue accent-4",dark:"",depressed:""},on:{click:t.verify}},[t._v(" Verifikasi ")]):t._e()],1):t._e()],1)],1)],1),a("snackbar")],1)},i=[],s=a("1da1"),r=(a("96cf"),a("99af"),a("ed08")),o=a("6728"),l=a("ca7b"),c={components:{ButtonChat:l["a"]},data:function(){return{url:"/surat-keterangan-pindah",data:{},countChatUnread:0}},mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(r["i"])("".concat(t.url,"/").concat(t.$route.params.id));case 2:return t.data=e.sent,t.data.tgl_lahir=Object(r["b"])(t.data.tgl_lahir),t.data.tgl_domisili_lama=Object(r["b"])(t.data.tgl_domisili_lama),t.data.tgl_domisili_baru=Object(r["b"])(t.data.tgl_domisili_baru),e.next=8,Object(r["i"])("/chat/count-unread/".concat(t.$route.params.id));case 8:t.countChatUnread=e.sent,t.countChatUnread=t.countChatUnread.count_unread;case 10:case"end":return e.stop()}}),e)})))()},computed:{isVerifyDisabled:function(){return!!this.data.ketua_lingkungan_approval}},methods:{verify:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$store.dispatch("loading/openLoading"),t.$store.commit("snackbar/resetSnackbar"),t.data.role="ketua lingkungan",t.data.ketua_lingkungan=t.$store.state.keluarga.nama_kepala_keluarga,e.next=6,Object(o["a"])(t.url,t.data.id,t.data);case 6:return a=e.sent,"success"===a.color&&t.$router.push("/keluarga/ketua/surat/surat-keterangan-pindah"),e.next=10,Object(r["i"])("".concat(t.url,"/").concat(t.$route.params.id));case 10:t.data=e.sent,t.$store.dispatch("snackbar/openSnackbar",a),t.$store.dispatch("loading/closeLoading");case 13:case"end":return e.stop()}}),e)})))()}}},u=c,d=a("2877"),h=a("6544"),v=a.n(h),f=a("8336"),g=a("b0af"),b=a("99d9"),p=a("cc20"),m=a("62ad"),_=a("ce7e"),k=a("0fd9"),C=a("2fa4"),x=Object(d["a"])(u,n,i,!1,null,null,null);e["default"]=x.exports;v()(x,{VBtn:f["a"],VCard:g["a"],VCardActions:b["a"],VCardText:b["c"],VCardTitle:b["d"],VChip:p["a"],VCol:m["a"],VDivider:_["a"],VRow:k["a"],VSpacer:C["a"]})},f2e7:function(t,e,a){"use strict";a.d(e,"b",(function(){return s}));var n=a("ade3"),i=a("2b0e");function s(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return i["a"].extend({name:"toggleable",model:{prop:e,event:a},props:Object(n["a"])({},e,{required:!1}),data:function(){return{isActive:!!this[e]}},watch:(t={},Object(n["a"])(t,e,(function(t){this.isActive=!!t})),Object(n["a"])(t,"isActive",(function(t){!!t!==this[e]&&this.$emit(a,t)})),t)})}var r=s();e["a"]=r}}]);
//# sourceMappingURL=chunk-15ebd277.88c7b0eb.js.map