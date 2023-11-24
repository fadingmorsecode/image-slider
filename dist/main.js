(()=>{"use strict";var n={150:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(537),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nbody {\n  background-color: #577399;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.slide-container {\n  width: 100%;\n  height: 80%;\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n}\n\n.slides {\n  min-width: 40vw;\n  display: flex;\n  justify-content: center;\n}\n\n.slides > img {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.arrow-container-left,\n.arrow-container-right {\n  align-self: center;\n}\n\n.arrow-container-left > img,\n.arrow-container-right > img {\n  width: 75px;\n  border: solid #bdd5ea 2px;\n  border-radius: 10px;\n}\n\n.arrow-container-left > img {\n  transform: rotate(90deg);\n}\n\n.arrow-container-right > img {\n  transform: rotate(-90deg);\n}\n\n.slide {\n  display: none;\n}\n\n.visibility {\n  display: flex;\n}\n\n.dots-layout {\n  height: 20%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 3fr 5fr 3fr;\n}\n\n.dots-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\n.dots-container > div {\n  width: 35px;\n  height: 35px;\n  border: solid 2px #fe5f55;\n  border-radius: 50%;\n}\n\n.toggle-background {\n  background-color: #fe5f55;\n}\n',"",{version:3,sources:["webpack://./src/main.css"],names:[],mappings:"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;;EAEE,WAAW;EACX,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,WAAW;EACX,aAAa;EACb,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;AAC3B",sourcesContent:['/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nbody {\n  background-color: #577399;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.slide-container {\n  width: 100%;\n  height: 80%;\n  display: flex;\n  justify-content: center;\n  padding: 10px;\n}\n\n.slides {\n  min-width: 40vw;\n  display: flex;\n  justify-content: center;\n}\n\n.slides > img {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.arrow-container-left,\n.arrow-container-right {\n  align-self: center;\n}\n\n.arrow-container-left > img,\n.arrow-container-right > img {\n  width: 75px;\n  border: solid #bdd5ea 2px;\n  border-radius: 10px;\n}\n\n.arrow-container-left > img {\n  transform: rotate(90deg);\n}\n\n.arrow-container-right > img {\n  transform: rotate(-90deg);\n}\n\n.slide {\n  display: none;\n}\n\n.visibility {\n  display: flex;\n}\n\n.dots-layout {\n  height: 20%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 3fr 5fr 3fr;\n}\n\n.dots-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\n.dots-container > div {\n  width: 35px;\n  height: 35px;\n  border: solid 2px #fe5f55;\n  border-radius: 50%;\n}\n\n.toggle-background {\n  background-color: #fe5f55;\n}\n'],sourceRoot:""}]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var A=0;A<n.length;A++){var l=[].concat(n[A]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],A=r.base?c[0]+r.base:c[0],l=i[A]||0,d="".concat(A," ").concat(l);i[A]=l+1;var u=t(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var p=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:d,updater:p,references:1})}a.push(d)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=r(n,o),A=0;A<i.length;A++){var l=t(i[A]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),s=t(565),c=t.n(s),A=t(216),l=t.n(A),d=t(589),u=t.n(d),f=t(150),p={};p.styleTagTransform=u(),p.setAttributes=c(),p.insert=a().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=l(),e()(f.Z,p),f.Z&&f.Z.locals&&f.Z.locals;const g=t.p+"9daf04f6f403db5ba593.svg",h=[],m=[];let b;function E(){return h.indexOf(b)}function y(n){h[n].classList.toggle("visibility"),function(n){m[n].classList.toggle("toggle-background")}(n)}function v(){const n=E();if(n===h.length-1)y(n),y(0),b=h[0];else{y(n);const e=n+1;b=h[e],y(e)}}const C=document.querySelector(".arrow-container-left"),B=document.querySelector(".arrow-container-right"),w=new Image;w.classList.add("left"),w.src=g;const x=new Image;x.classList.add("right"),x.src=g,C.append(w),B.append(x),document.querySelectorAll(".slide").forEach((n=>{h.push(n)})),document.querySelectorAll(".dot").forEach((n=>{m.push(n)})),b=h[0],y(h.indexOf(b)),document.addEventListener("click",(n=>{n.target.matches(".left")?function(){const n=E();if(0===n){y(n),y(h.length-1);const e=h.length-1;b=h[e]}else{y(n);const e=n+-1;b=h[e],y(e)}}():n.target.matches(".right")&&v()})),document.addEventListener("click",(n=>{n.target.matches(".dot")&&function(n){y(E());const e=m.indexOf(n.target);y(e),b=h[e]}(n)})),setInterval(v,5e3)})()})();
//# sourceMappingURL=main.js.map