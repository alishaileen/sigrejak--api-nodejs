(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20347490"],{"0fd9":function(a,t,e){"use strict";var n=e("ade3"),s=e("5530"),i=(e("13d5"),e("caad"),e("2532"),e("99af"),e("b64b"),e("5319"),e("ac1f"),e("4ec9"),e("d3b7"),e("3ca3"),e("ddb0"),e("159b"),e("4b85"),e("2b0e")),r=e("d9f7"),c=e("80d2"),l=["sm","md","lg","xl"],o=["start","end","center"];function u(a,t){return l.reduce((function(e,n){return e[a+Object(c["G"])(n)]=t(),e}),{})}var d=function(a){return[].concat(o,["baseline","stretch"]).includes(a)},v=u("align",(function(){return{type:String,default:null,validator:d}})),p=function(a){return[].concat(o,["space-between","space-around"]).includes(a)},g=u("justify",(function(){return{type:String,default:null,validator:p}})),h=function(a){return[].concat(o,["space-between","space-around","stretch"]).includes(a)},m=u("alignContent",(function(){return{type:String,default:null,validator:h}})),f={align:Object.keys(v),justify:Object.keys(g),alignContent:Object.keys(m)},b={align:"align",justify:"justify",alignContent:"align-content"};function _(a,t,e){var n=b[a];if(null!=e){if(t){var s=t.replace(a,"");n+="-".concat(s)}return n+="-".concat(e),n.toLowerCase()}}var k=new Map;t["a"]=i["a"].extend({name:"v-row",functional:!0,props:Object(s["a"])(Object(s["a"])(Object(s["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},v),{},{justify:{type:String,default:null,validator:p}},g),{},{alignContent:{type:String,default:null,validator:h}},m),render:function(a,t){var e=t.props,s=t.data,i=t.children,c="";for(var l in e)c+=String(e[l]);var o=k.get(c);return o||function(){var a,t;for(t in o=[],f)f[t].forEach((function(a){var n=e[a],s=_(t,a,n);s&&o.push(s)}));o.push((a={"no-gutters":e.noGutters,"row--dense":e.dense},Object(n["a"])(a,"align-".concat(e.align),e.align),Object(n["a"])(a,"justify-".concat(e.justify),e.justify),Object(n["a"])(a,"align-content-".concat(e.alignContent),e.alignContent),a)),k.set(c,o)}(),a(e.tag,Object(r["a"])(s,{staticClass:"row",class:o}),i)}})},"132d":function(a,t,e){"use strict";var n,s=e("5530"),i=(e("c96a"),e("caad"),e("2532"),e("a9e3"),e("498a"),e("7db0"),e("fb6a"),e("4804"),e("7e2b")),r=e("a9ad"),c=e("af2b"),l=e("7560"),o=e("80d2"),u=e("2b0e"),d=e("58df");function v(a){return["fas","far","fal","fab","fad"].some((function(t){return a.includes(t)}))}function p(a){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(a)&&/[\dz]$/i.test(a)&&a.length>4}(function(a){a["xSmall"]="12px",a["small"]="16px",a["default"]="24px",a["medium"]="28px",a["large"]="36px",a["xLarge"]="40px"})(n||(n={}));var g=Object(d["a"])(i["a"],r["a"],c["a"],l["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var a="";return this.$slots.default&&(a=this.$slots.default[0].text.trim()),Object(o["C"])(this,a)},getSize:function(){var a={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},t=Object(o["z"])(a).find((function(t){return a[t]}));return t&&n[t]||Object(o["g"])(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(s["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var a=this.getSize(),t=Object(s["a"])(Object(s["a"])({},this.getDefaultData()),{},{style:a?{fontSize:a,height:a,width:a}:void 0});return this.applyColors(t),t},applyColors:function(a){a.class=Object(s["a"])(Object(s["a"])({},a.class),this.themeClasses),this.setTextColor(this.color,a)},renderFontIcon:function(a,t){var e=[],n=this.getDefaultData(),s="material-icons",i=a.indexOf("-"),r=i<=-1;r?e.push(a):(s=a.slice(0,i),v(s)&&(s="")),n.class[s]=!0,n.class[a]=!r;var c=this.getSize();return c&&(n.style={fontSize:c}),this.applyColors(n),t(this.hasClickListener?"button":this.tag,n,e)},renderSvgIcon:function(a,t){var e={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},n=this.getSize();return n&&(e.style={fontSize:n,height:n,width:n}),t(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[t("svg",e,[t("path",{attrs:{d:a}})])])},renderSvgIconComponent:function(a,t){var e={class:{"v-icon__component":!0}},n=this.getSize();n&&(e.style={fontSize:n,height:n,width:n}),this.applyColors(e);var s=a.component;return e.props=a.props,e.nativeOn=e.on,t(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[t(s,e)])}},render:function(a){var t=this.getIcon();return"string"===typeof t?p(t)?this.renderSvgIcon(t,a):this.renderFontIcon(t,a):this.renderSvgIconComponent(t,a)}});t["a"]=u["a"].extend({name:"v-icon",$_wrapperFor:g,functional:!0,render:function(a,t){var e=t.data,n=t.children,s="";return e.domProps&&(s=e.domProps.textContent||e.domProps.innerHTML||s,delete e.domProps.textContent,delete e.domProps.innerHTML),a(g,e,s?[s]:n)}})},"20f6":function(a,t,e){},"2fa4":function(a,t,e){"use strict";e("20f6");var n=e("80d2");t["a"]=Object(n["i"])("spacer","div","v-spacer")},4804:function(a,t,e){},"4b85":function(a,t,e){},"615b":function(a,t,e){},"78d3":function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("btn-kembali",{attrs:{path:"/keluarga/ketua/surat/surat-minyak-suci"}}),e("h1",{staticClass:"mb-5"},[a._v("Detail Surat Pelayanan Minyak Suci")]),e("v-row",[e("v-col",[e("v-card",{attrs:{flat:""}},[e("v-card-title",[e("h3",[a._v("Detail Informasi")]),e("v-spacer"),e("button-chat",{attrs:{countChatUnread:a.countChatUnread,chatPageUrl:"/keluarga/ketua/surat/surat-minyak-suci/chat/"+a.data.id,detailPageUrl:"/keluarga/ketua/surat/surat-minyak-suci/detail/"+a.data.id,endpointUrl:a.url}}),1===a.data.ketua_lingkungan_approval?e("v-chip",{staticClass:"ml-2",attrs:{color:1===a.data.ketua_lingkungan_approval?"green":"grey lighten-2"}},[e("span",{staticClass:"color-white"},[a._v(" Terverifikasi ")])]):a._e()],1),e("v-divider"),e("v-card-text",{staticClass:"pa-6"},[e("div",{staticClass:"mb-15"},[e("h2",{staticClass:"mb-5"},[a._v("Informasi Surat")]),e("v-divider",{staticClass:"mb-5"}),e("label",[a._v("No. surat")]),e("p",[a._v(a._s(a.data.no_surat))]),e("label",[a._v("Tanggal surat")]),e("p",[a._v(a._s(a.data.created_at))])],1),e("div",{staticClass:"mb-15"},[e("h2",{staticClass:"mb-5"},[a._v("Informasi Umat")]),e("v-divider",{staticClass:"mb-5"}),e("label",[a._v("Nama")]),e("p",[a._v(a._s(a.data.nama))]),e("label",[a._v("Tempat, tanggal lahir")]),e("p",[a._v(a._s(a.data.tempat_lahir+", "+a.data.tgl_lahir))]),e("label",[a._v("Alamat")]),e("p",[a._v(a._s(a.data.alamat))])],1),e("div",{staticClass:"mb-15"},[e("h2",{staticClass:"mb-5"},[a._v("Informasi Minyak Suci")]),e("v-divider",{staticClass:"mb-5"}),e("label",[a._v("Sudah/Belum pernah menerima minyak suci")]),e("p",[a._v(a._s(a.data.status_terima_minyak))]),"Sudah pernah"===a.data.status_terima_minyak?e("label",[a._v("Tanggal penerimaan minyak suci")]):a._e(),e("p",[a._v(a._s(a.data.tgl_terima_minyak))])],1),e("div",{staticClass:"mb-15"},[e("h2",{staticClass:"mb-5"},[a._v("Informasi Pasangan")]),e("v-divider",{staticClass:"mb-5"}),null===a.data.nama_pasangan?e("p",[a._v("Tidak punya pasangan")]):a._e(),null!=a.data.nama_pasangan?e("div",[e("label",[a._v("Nama pasangan")]),e("p",[a._v(a._s(a.data.nama_pasangan))]),e("label",[a._v("Cara menikah")]),e("p",[a._v(a._s(a.data.cara_menikah))]),e("label",[a._v("Tahun menikah")]),e("p",[a._v(a._s(a.data.tahun_menikah))])]):a._e()],1),e("div",{staticClass:"mb-15"},[e("h2",{staticClass:"mb-5"},[a._v("Informasi Keluarga Yang Bertanggung Jawab")]),e("v-divider",{staticClass:"mb-5"}),e("label",[a._v("Nama keluarga")]),e("p",[a._v(a._s(a.data.nama_keluarga_penanggung_jawab))]),e("label",[a._v("Alamat")]),e("p",[a._v(a._s(a.data.alamat_keluarga_penanggung_jawab))]),e("label",[a._v("Nomor telepon")]),e("p",[a._v(a._s(a.data.no_telp_keluarga_penanggung_jawab))])],1),e("div",{staticClass:"mb-15"},[e("h2",{staticClass:"mb-5"},[a._v("Informasi Pastor Pelayan")]),e("v-divider",{staticClass:"mb-5"}),e("label",[a._v("Nama pastor")]),e("p",[a._v(a._s(a.data.nama_pastor_pelayan))])],1)]),0===a.data.ketua_lingkungan_approval?e("v-card-actions",{staticClass:"py-3 px-5"},[e("v-spacer"),0===a.data.ketua_lingkungan_approval?e("v-btn",{staticClass:"btn text-none",attrs:{color:"blue accent-4",dark:"",depressed:""},on:{click:a.verify}},[a._v(" Verifikasi ")]):a._e()],1):a._e()],1)],1)],1),e("snackbar")],1)},s=[],i=e("1da1"),r=(e("96cf"),e("99af"),e("ed08")),c=e("6728"),l=e("ca7b"),o={components:{ButtonChat:l["a"]},data:function(){return{url:"/surat-pelayanan-minyak-suci",data:{},textChat:"",pastorPelayan:{nama:""},countChatUnread:0}},mounted:function(){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(r["i"])("".concat(a.url,"/").concat(a.$route.params.id));case 2:return a.data=t.sent,a.data.tgl_lahir=Object(r["b"])(a.data.tgl_lahir),a.data.tgl_terima_minyak=Object(r["b"])(a.data.tgl_terima_minyak),t.next=7,Object(r["i"])("/admin/".concat(a.data.id_pastor_pelayan));case 7:return a.pastorPelayan=t.sent,console.log(a.pastorPelayan),t.next=11,Object(r["i"])("/chat/count-unread/".concat(a.$route.params.id));case 11:a.countChatUnread=t.sent,a.countChatUnread=a.countChatUnread.count_unread;case 13:case"end":return t.stop()}}),t)})))()},computed:{isVerifyDisabled:function(){return!!this.data.ketua_lingkungan_approval}},methods:{verify:function(){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a.$store.dispatch("loading/openLoading"),a.$store.commit("snackbar/resetSnackbar"),a.data.role="ketua lingkungan",a.data.ketua_lingkungan=a.$store.state.keluarga.nama_kepala_keluarga,t.next=6,Object(c["a"])(a.url,a.data.id,a.data);case 6:return e=t.sent,"success"===e.color&&a.$router.push("/keluarga/ketua/surat/surat-minyak-suci"),t.next=10,Object(r["i"])("".concat(a.url,"/").concat(a.$route.params.id));case 10:a.data=t.sent,a.$store.dispatch("snackbar/openSnackbar",e),a.$store.dispatch("loading/closeLoading");case 13:case"end":return t.stop()}}),t)})))()}}},u=o,d=e("2877"),v=e("6544"),p=e.n(v),g=e("8336"),h=e("b0af"),m=e("99d9"),f=e("cc20"),b=e("62ad"),_=e("ce7e"),k=e("0fd9"),C=e("2fa4"),y=Object(d["a"])(u,n,s,!1,null,null,null);t["default"]=y.exports;p()(y,{VBtn:g["a"],VCard:h["a"],VCardActions:m["a"],VCardText:m["c"],VCardTitle:m["d"],VChip:f["a"],VCol:b["a"],VDivider:_["a"],VRow:k["a"],VSpacer:C["a"]})},"99d9":function(a,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return c})),e.d(t,"d",(function(){return l}));var n=e("b0af"),s=e("80d2"),i=Object(s["i"])("v-card__actions"),r=Object(s["i"])("v-card__subtitle"),c=Object(s["i"])("v-card__text"),l=Object(s["i"])("v-card__title");n["a"]},"9d26":function(a,t,e){"use strict";var n=e("132d");t["a"]=n["a"]},b0af:function(a,t,e){"use strict";var n=e("5530"),s=(e("a9e3"),e("615b"),e("10d2")),i=e("297c"),r=e("1c87"),c=e("58df");t["a"]=Object(c["a"])(i["a"],r["a"],s["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(n["a"])(Object(n["a"])({"v-card":!0},r["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},s["a"].options.computed.classes.call(this))},styles:function(){var a=Object(n["a"])({},s["a"].options.computed.styles.call(this));return this.img&&(a.background='url("'.concat(this.img,'") center center / cover no-repeat')),a}},methods:{genProgress:function(){var a=i["a"].options.methods.genProgress.call(this);return a?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[a]):null}},render:function(a){var t=this.generateRouteLink(),e=t.tag,n=t.data;return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),a(e,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=chunk-20347490.19194d8a.js.map