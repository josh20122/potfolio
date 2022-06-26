(function(){"use strict";var t={223:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var r=n(144),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",flat:"",outlined:"",dense:"",dark:"","hide-on-scroll":""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2 rounded-circle",attrs:{alt:"Vuetify Logo",src:"images/logo1.jpg",transition:"scale-transition",width:"40",contain:""}})],1),n("v-spacer"),n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}})],1),n("v-navigation-drawer",{attrs:{src:"images/logo2.jpg",app:"",color:"secondary",right:"",value:t.drawer}},[n("v-list",t._l(t.pages,(function(e,r){return n("v-list-item",{key:r,attrs:{to:e.link,color:"white"}},[n("v-list-item-content",[n("v-list-item-title",{staticClass:"red--text",domProps:{textContent:t._s(e.page)}})],1)],1)})),1)],1),n("v-main",{staticClass:"primary"},[n("router-view")],1)],1)},a=[],i={data:function(){return{drawer:!1,pages:[{page:"About Page",link:"/about"},{page:"Resume",link:"/resume"},{page:"Home",link:"/"}]}}},s=i,u=n(1001),l=n(3453),c=n.n(l),f=n(303),d=n(7666),p=n(5078),v=n(5288),m=n(893),g=n(907),h=n(2155),E=n(4021),y=n(7619),b=n(2515),w=(0,u.Z)(s,o,a,!1,null,null,null),C=w.exports;c()(w,{VApp:f.Z,VAppBar:d.Z,VAppBarNavIcon:p.Z,VImg:v.Z,VList:m.Z,VListItem:g.Z,VListItemContent:h.km,VListItemTitle:h.V9,VMain:E.Z,VNavigationDrawer:y.Z,VSpacer:b.Z});n(1539),n(8783),n(3948);var x=n(8345),Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"fill-height pb-12"},[n("v-row",[n("v-col",[n("v-card",{staticClass:"mx-auto mt-14",attrs:{color:"blue ",rounded:"lg"}},[n("v-card-text",[n("v-img",{staticClass:"rounded-lg",attrs:{src:"images/logo2.jpg",contain:"","max-width":"500"}})],1)],1)],1),n("v-col",[n("div",{staticClass:"\n          font-bold\n          text-lg\n          py-1\n          px-3\n          mb-4\n          bg-blue-500\n          rounded-t-lg rounded-br-lg\n          text-white\n          font-mono\n          max-w-min\n        "},[t._v(" Hello ")]),n("div",{staticClass:"grid space-y-5"},[n("div",{staticClass:"text-4xl font-bold text-gray-50"},[t._v(" I'M "),n("span",{staticClass:"info--text uppercase"},[t._v("Joshua Nzomo")])]),n("div",[n("typewriter",{attrs:{replace:t.replace,"type-interval":100,"replace-interval":3e3}},[n("div",{staticClass:"text-gray-50 text-2xl font-medium"},[t._v(" I DO WEB DEVELOPMENT ")])])],1),n("div",{staticClass:"text-gray-50"},[t._v(" With over 5+ years of job experience. I studied Information Technology at University and later honed my skills through commercial and freelance experience. My skills include PHP, Laravel, jQuery, database design, JavaScript and MySQL. ")]),n("div",[n("v-btn",{staticClass:"grey--text text--lighten-4",attrs:{large:"",elevation:"",color:"blue "}},[n("v-icon",{attrs:{color:"white",left:""}},[t._v("mdi-rocket")]),n("span",[t._v("portfolio")])],1)],1)])])],1),n("v-row",[n("v-col",[n("div",{staticClass:"text-gray-50"})])],1)],1)},I=[],N=n(7360),k={components:{Typewriter:N.Z},data:function(){return{replace:[{from:"WEB DEVELOPMENT",to:"UX/UI DESIGN"},{from:"UX/UI DESIGN",to:"WEB DESIGN"},{from:"WEB DESIGN",to:"WEB DEVELOPMENT"},{from:"WEB DEVELOPMENT",to:"UX/UI DESIGN"},{from:"UX/UI DESIGN",to:"WEB DESIGN"},{from:"WEB DESIGN",to:"WEB DEVELOPMENT"},{from:"WEB DEVELOPMENT",to:"UX/UI DESIGN"},{from:"UX/UI DESIGN",to:"WEB DESIGN"},{from:"WEB DESIGN",to:"WEB DEVELOPMENT"}]}}},V=k,S=n(9787),D=n(539),O=n(5255),T=n(7024),B=n(1819),P=n(4456),_=n(7894),L=(0,u.Z)(V,Z,I,!1,null,null,null),j=L.exports;c()(L,{VBtn:S.Z,VCard:D.Z,VCardText:O.ZB,VCol:T.Z,VContainer:B.Z,VIcon:P.Z,VImg:v.Z,VRow:_.Z}),r.Z.use(x.Z);var M=[{path:"/",name:"home view",component:j},{path:"/resume",name:"resume",component:function(){return n.e(443).then(n.bind(n,1960))}},{path:"/about",name:"about",component:function(){return n.e(443).then(n.bind(n,1804))}}],U=new x.Z({mode:"history",base:"/last/",routes:M}),W=U,A=n(629);r.Z.use(A.ZP);var G=new A.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),X=n(6482);r.Z.use(X.Z);var F=new X.Z({theme:{themes:{light:{primary:"#171c32",secondary:"#252c48",info:"#4c84ff",wait:"#ffffff",error:"#4c84ff",secondary2:"#acaeb9",back:"#27365a"}}}});r.Z.config.productionTip=!1,new r.Z({router:W,store:G,vuetify:F,render:function(t){return t(C)}}).$mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var i=1/0;for(c=0;c<t.length;c++){r=t[c][0],o=t[c][1],a=t[c][2];for(var s=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(s=!1,a<i&&(i=a));if(s){t.splice(c--,1);var l=o();void 0!==l&&(e=l)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[r,o,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about-legacy.e55398e4.js"}}(),function(){n.miniCssF=function(t){return"css/about.3a658e32.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="last:";n.l=function(r,o,a,i){if(t[r])t[r].push(o);else{var s,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var f=l[c];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+a){s=f;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+a),s.src=r),t[r]=[o];var d=function(e,n){s.onerror=s.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/last/"}(),function(){var t=function(t,e,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=a,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===t||a===e))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===t||a===e)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),s=n.p+i;if(e(i,s))return o();t(r,s,o,a)}))},o={143:0};n.f.miniCss=function(t,e){var n={443:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(e),s=new Error,u=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};n.l(i,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,i=r[0],s=r[1],u=r[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var c=u(n)}for(e&&e(r);l<i.length;l++)a=i[l],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(c)},r=self["webpackChunklast"]=self["webpackChunklast"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(223)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.80b328c7.js.map