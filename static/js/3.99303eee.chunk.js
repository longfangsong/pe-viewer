(this["webpackJsonppe-viewer"]=this["webpackJsonppe-viewer"]||[]).push([[3],{81:function(t,r,e){(function(t){var n=Object.getOwnPropertyDescriptors||function(t){for(var r=Object.keys(t),e={},n=0;n<r.length;n++)e[r[n]]=Object.getOwnPropertyDescriptor(t,r[n]);return e},i=/%[sdj%]/g;r.format=function(t){if(!g(t)){for(var r=[],e=0;e<arguments.length;e++)r.push(c(arguments[e]));return r.join(" ")}e=1;for(var n=arguments,o=n.length,u=String(t).replace(i,(function(t){if("%%"===t)return"%";if(e>=o)return t;switch(t){case"%s":return String(n[e++]);case"%d":return Number(n[e++]);case"%j":try{return JSON.stringify(n[e++])}catch(r){return"[Circular]"}default:return t}})),s=n[e];e<o;s=n[++e])v(s)||!m(s)?u+=" "+s:u+=" "+c(s);return u},r.deprecate=function(e,n){if("undefined"!==typeof t&&!0===t.noDeprecation)return e;if("undefined"===typeof t)return function(){return r.deprecate(e,n).apply(this,arguments)};var i=!1;return function(){if(!i){if(t.throwDeprecation)throw new Error(n);t.traceDeprecation?console.trace(n):console.error(n),i=!0}return e.apply(this,arguments)}};var o,u={};function c(t,e){var n={seen:[],stylize:a};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),y(e)?n.showHidden=e:e&&r._extend(n,e),_(n.showHidden)&&(n.showHidden=!1),_(n.depth)&&(n.depth=2),_(n.colors)&&(n.colors=!1),_(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=s),p(n,t,n.depth)}function s(t,r){var e=c.styles[r];return e?"\x1b["+c.colors[e][0]+"m"+t+"\x1b["+c.colors[e][1]+"m":t}function a(t,r){return t}function p(t,e,n){if(t.customInspect&&e&&O(e.inspect)&&e.inspect!==r.inspect&&(!e.constructor||e.constructor.prototype!==e)){var i=e.inspect(n,t);return g(i)||(i=p(t,i,n)),i}var o=function(t,r){if(_(r))return t.stylize("undefined","undefined");if(g(r)){var e="'"+JSON.stringify(r).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(e,"string")}if(d(r))return t.stylize(""+r,"number");if(y(r))return t.stylize(""+r,"boolean");if(v(r))return t.stylize("null","null")}(t,e);if(o)return o;var u=Object.keys(e),c=function(t){var r={};return t.forEach((function(t,e){r[t]=!0})),r}(u);if(t.showHidden&&(u=Object.getOwnPropertyNames(e)),k(e)&&(u.indexOf("message")>=0||u.indexOf("description")>=0))return f(e);if(0===u.length){if(O(e)){var s=e.name?": "+e.name:"";return t.stylize("[Function"+s+"]","special")}if(b(e))return t.stylize(RegExp.prototype.toString.call(e),"regexp");if(w(e))return t.stylize(Date.prototype.toString.call(e),"date");if(k(e))return f(e)}var a,m="",j=!1,E=["{","}"];(h(e)&&(j=!0,E=["[","]"]),O(e))&&(m=" [Function"+(e.name?": "+e.name:"")+"]");return b(e)&&(m=" "+RegExp.prototype.toString.call(e)),w(e)&&(m=" "+Date.prototype.toUTCString.call(e)),k(e)&&(m=" "+f(e)),0!==u.length||j&&0!=e.length?n<0?b(e)?t.stylize(RegExp.prototype.toString.call(e),"regexp"):t.stylize("[Object]","special"):(t.seen.push(e),a=j?function(t,r,e,n,i){for(var o=[],u=0,c=r.length;u<c;++u)z(r,String(u))?o.push(l(t,r,e,n,String(u),!0)):o.push("");return i.forEach((function(i){i.match(/^\d+$/)||o.push(l(t,r,e,n,i,!0))})),o}(t,e,n,c,u):u.map((function(r){return l(t,e,n,c,r,j)})),t.seen.pop(),function(t,r,e){if(t.reduce((function(t,r){return r.indexOf("\n")>=0&&0,t+r.replace(/\u001b\[\d\d?m/g,"").length+1}),0)>60)return e[0]+(""===r?"":r+"\n ")+" "+t.join(",\n  ")+" "+e[1];return e[0]+r+" "+t.join(", ")+" "+e[1]}(a,m,E)):E[0]+m+E[1]}function f(t){return"["+Error.prototype.toString.call(t)+"]"}function l(t,r,e,n,i,o){var u,c,s;if((s=Object.getOwnPropertyDescriptor(r,i)||{value:r[i]}).get?c=s.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):s.set&&(c=t.stylize("[Setter]","special")),z(n,i)||(u="["+i+"]"),c||(t.seen.indexOf(s.value)<0?(c=v(e)?p(t,s.value,null):p(t,s.value,e-1)).indexOf("\n")>-1&&(c=o?c.split("\n").map((function(t){return"  "+t})).join("\n").substr(2):"\n"+c.split("\n").map((function(t){return"   "+t})).join("\n")):c=t.stylize("[Circular]","special")),_(u)){if(o&&i.match(/^\d+$/))return c;(u=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=t.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=t.stylize(u,"string"))}return u+": "+c}function h(t){return Array.isArray(t)}function y(t){return"boolean"===typeof t}function v(t){return null===t}function d(t){return"number"===typeof t}function g(t){return"string"===typeof t}function _(t){return void 0===t}function b(t){return m(t)&&"[object RegExp]"===j(t)}function m(t){return"object"===typeof t&&null!==t}function w(t){return m(t)&&"[object Date]"===j(t)}function k(t){return m(t)&&("[object Error]"===j(t)||t instanceof Error)}function O(t){return"function"===typeof t}function j(t){return Object.prototype.toString.call(t)}function E(t){return t<10?"0"+t.toString(10):t.toString(10)}r.debuglog=function(e){if(_(o)&&(o=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).NODE_DEBUG||""),e=e.toUpperCase(),!u[e])if(new RegExp("\\b"+e+"\\b","i").test(o)){var n=t.pid;u[e]=function(){var t=r.format.apply(r,arguments);console.error("%s %d: %s",e,n,t)}}else u[e]=function(){};return u[e]},r.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},r.isArray=h,r.isBoolean=y,r.isNull=v,r.isNullOrUndefined=function(t){return null==t},r.isNumber=d,r.isString=g,r.isSymbol=function(t){return"symbol"===typeof t},r.isUndefined=_,r.isRegExp=b,r.isObject=m,r.isDate=w,r.isError=k,r.isFunction=O,r.isPrimitive=function(t){return null===t||"boolean"===typeof t||"number"===typeof t||"string"===typeof t||"symbol"===typeof t||"undefined"===typeof t},r.isBuffer=e(83);var T=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function x(){var t=new Date,r=[E(t.getHours()),E(t.getMinutes()),E(t.getSeconds())].join(":");return[t.getDate(),T[t.getMonth()],r].join(" ")}function z(t,r){return Object.prototype.hasOwnProperty.call(t,r)}r.log=function(){console.log("%s - %s",x(),r.format.apply(r,arguments))},r.inherits=e(84),r._extend=function(t,r){if(!r||!m(r))return t;for(var e=Object.keys(r),n=e.length;n--;)t[e[n]]=r[e[n]];return t};var S="undefined"!==typeof Symbol?Symbol("util.promisify.custom"):void 0;function D(t,r){if(!t){var e=new Error("Promise was rejected with a falsy value");e.reason=t,t=e}return r(t)}r.promisify=function(t){if("function"!==typeof t)throw new TypeError('The "original" argument must be of type Function');if(S&&t[S]){var r;if("function"!==typeof(r=t[S]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(r,S,{value:r,enumerable:!1,writable:!1,configurable:!0}),r}function r(){for(var r,e,n=new Promise((function(t,n){r=t,e=n})),i=[],o=0;o<arguments.length;o++)i.push(arguments[o]);i.push((function(t,n){t?e(t):r(n)}));try{t.apply(this,i)}catch(u){e(u)}return n}return Object.setPrototypeOf(r,Object.getPrototypeOf(t)),S&&Object.defineProperty(r,S,{value:r,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(r,n(t))},r.promisify.custom=S,r.callbackify=function(r){if("function"!==typeof r)throw new TypeError('The "original" argument must be of type Function');function e(){for(var e=[],n=0;n<arguments.length;n++)e.push(arguments[n]);var i=e.pop();if("function"!==typeof i)throw new TypeError("The last argument must be of type Function");var o=this,u=function(){return i.apply(o,arguments)};r.apply(this,e).then((function(r){t.nextTick(u,null,r)}),(function(r){t.nextTick(D,r,u)}))}return Object.setPrototypeOf(e,Object.getPrototypeOf(r)),Object.defineProperties(e,n(r)),e}}).call(this,e(82))},82:function(t,r){var e,n,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(t){if(e===setTimeout)return setTimeout(t,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(r){try{return e.call(null,t,0)}catch(r){return e.call(this,t,0)}}}!function(){try{e="function"===typeof setTimeout?setTimeout:o}catch(t){e=o}try{n="function"===typeof clearTimeout?clearTimeout:u}catch(t){n=u}}();var s,a=[],p=!1,f=-1;function l(){p&&s&&(p=!1,s.length?a=s.concat(a):f=-1,a.length&&h())}function h(){if(!p){var t=c(l);p=!0;for(var r=a.length;r;){for(s=a,a=[];++f<r;)s&&s[f].run();f=-1,r=a.length}s=null,p=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(r){try{return n.call(null,t)}catch(r){return n.call(this,t)}}}(t)}}function y(t,r){this.fun=t,this.array=r}function v(){}i.nextTick=function(t){var r=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)r[e-1]=arguments[e];a.push(new y(t,r)),1!==a.length||p||c(h)},y.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},83:function(t,r){t.exports=function(t){return t&&"object"===typeof t&&"function"===typeof t.copy&&"function"===typeof t.fill&&"function"===typeof t.readUInt8}},84:function(t,r){"function"===typeof Object.create?t.exports=function(t,r){t.super_=r,t.prototype=Object.create(r.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,r){t.super_=r;var e=function(){};e.prototype=r.prototype,t.prototype=new e,t.prototype.constructor=t}},85:function(t,r,e){"use strict";var n=e.w[t.i];t.exports=n;e(86);n.vc()},86:function(t,r,e){"use strict";function n(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}function i(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,r,e){return r&&i(t.prototype,r),e&&i(t,e),t}e.r(r),e.d(r,"parse_pe",(function(){return b})),e.d(r,"get_sections",(function(){return m})),e.d(r,"CoffHeaderExport",(function(){return w})),e.d(r,"DataDirectoriesExport",(function(){return k})),e.d(r,"DataDirectoryExport",(function(){return O})),e.d(r,"DosHeaderExport",(function(){return j})),e.d(r,"HeaderExport",(function(){return E})),e.d(r,"OptionalHeaderExport",(function(){return T})),e.d(r,"StandardFieldsExport",(function(){return x})),e.d(r,"WindowsFieldsExport",(function(){return z})),e.d(r,"__wbindgen_throw",(function(){return S}));var u=e(85),c=new("undefined"===typeof TextDecoder?e(81).TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});c.decode();var s=null;function a(){return null!==s&&s.buffer===u.tc.buffer||(s=new Uint8Array(u.tc.buffer)),s}function p(t,r){return c.decode(a().subarray(t,t+r))}var f=null;function l(){return null!==f&&f.buffer===u.tc.buffer||(f=new Int32Array(u.tc.buffer)),f}var h=new Uint32Array(2),y=new BigUint64Array(h.buffer);function v(t){return void 0===t||null===t}function d(t,r){if(!(t instanceof r))throw new Error("expected instance of ".concat(r.name));return t.ptr}var g=0;function _(t,r){var e=r(1*t.length);return a().set(t,e/1),g=t.length,e}function b(t){var r=_(t,u.rc),e=g,n=u.uc(r,e);return 0===n?void 0:E.__wrap(n)}function m(t){var r=_(t,u.rc),e=g;u.sc(8,r,e);var n,i=l()[2],o=l()[3];return 0!==i&&(n=p(i,o).slice(),u.qc(i,1*o)),n}var w=function(){function t(){n(this,t)}return o(t,[{key:"free",value:function(){var t=this.ptr;this.ptr=0,u.a(t)}},{key:"machine",get:function(){return u.f(this.ptr)},set:function(t){u.lb(this.ptr,t)}},{key:"number_of_sections",get:function(){return u.g(this.ptr)},set:function(t){u.mb(this.ptr,t)}},{key:"time_date_stamp",get:function(){return u.k(this.ptr)>>>0},set:function(t){u.qb(this.ptr,t)}},{key:"pointer_to_symbol_table",get:function(){return u.i(this.ptr)>>>0},set:function(t){u.ob(this.ptr,t)}},{key:"number_of_symbol_table",get:function(){return u.h(this.ptr)>>>0},set:function(t){u.nb(this.ptr,t)}},{key:"size_of_optional_header",get:function(){return u.j(this.ptr)},set:function(t){u.pb(this.ptr,t)}},{key:"characteristics",get:function(){return u.e(this.ptr)},set:function(t){u.kb(this.ptr,t)}}],[{key:"__wrap",value:function(r){var e=Object.create(t.prototype);return e.ptr=r,e}}]),t}(),k=function(){function t(){n(this,t)}return o(t,[{key:"free",value:function(){var t=this.ptr;this.ptr=0,u.b(t)}},{key:"data_directories0",get:function(){var t=u.l(this.ptr);return 0===t?void 0:O.__wrap(t)},set:function(t){var r=0;v(t)||(d(t,O),r=t.ptr,t.ptr=0),u.rb(this.ptr,r)}},{key:"data_directories1",get:function(){var t=u.m(this.ptr);return 0===t?void 0:O.__wrap(t)},set:function(t){var r=0;v(t)||(d(t,O),r=t.ptr,t.ptr=0),u.sb(this.ptr,r)}},{key:"data_directories2",get:function(){var t=u.t(this.ptr);return 0===t?void 0:O.__wrap(t)},set:function(t){var r=0;v(t)||(d(t,O),r=t.ptr,t.ptr=0),u.zb(this.ptr,r)}},{key:"data_directories3",get:function(){var t=u.u(this.ptr);return 0===t?void 0:O.__wrap(t)},set:function(t){var r=0;v(t)||(d(t,O),r=t.ptr,t.ptr=0),u.Ab(this.ptr,r)}},{key:"data_directories4",get:function(){var t=u.v(this.ptr);return 0===t?void 0:O.__wrap(t)},set:function(t){var r=0;v(t)||(d(t,O),r=t.ptr,t.ptr=0),u.Bb(this.ptr,r)}},{key:"data_directories5",get:function(){var t=u.w(this.ptr);return 0===t?void 0:O.__wrap(t)},set:function(t){var r=0;v(t)||(d(t,O),r=t.ptr,t.ptr=0),u.Cb(this.ptr,r)}},{key:"data_directories6",get:function(){var t=u.x(this.ptr);return 0===t?void 0:O.__wrap(t)},set:function(t){var r=0;v(t)||(d(t,O),r=t.ptr,t.ptr=0),u.Db(this.ptr,r)}},{key:"data_directories7",get:function(){var t=u.y(this.ptr);return 0===t?void 0:O.__wrap(t)},set:function(t){var r=0;v(t)||(d(t,O),r=t.ptr,t.ptr=0),u.Eb(this.ptr,r)}},{key:"data_directories8",get:function(){var t=u.z(this.ptr);return 0===t?void 0:O.__wrap(t)},set:function(t){var r=0;v(t)||(d(t,O),r=t.ptr,t.ptr=0),u.Fb(this.ptr,r)}},{key:"data_directories9",get:function(){var t=u.A(this.ptr);return 0===t?void 0:O.__wrap(t)},set:function(t){var r=0;v(t)||(d(t,O),r=t.ptr,t.ptr=0),u.Gb(this.ptr,r)}},{key:"data_directories10",get:function(){var t=u.n(this.ptr);return 0===t?void 0:O.__wrap(t)},set:function(t){var r=0;v(t)||(d(t,O),r=t.ptr,t.ptr=0),u.tb(this.ptr,r)}},{key:"data_directories11",get:function(){var t=u.o(this.ptr);return 0===t?void 0:O.__wrap(t)},set:function(t){var r=0;v(t)||(d(t,O),r=t.ptr,t.ptr=0),u.ub(this.ptr,r)}},{key:"data_directories12",get:function(){var t=u.p(this.ptr);return 0===t?void 0:O.__wrap(t)},set:function(t){var r=0;v(t)||(d(t,O),r=t.ptr,t.ptr=0),u.vb(this.ptr,r)}},{key:"data_directories13",get:function(){var t=u.q(this.ptr);return 0===t?void 0:O.__wrap(t)},set:function(t){var r=0;v(t)||(d(t,O),r=t.ptr,t.ptr=0),u.wb(this.ptr,r)}},{key:"data_directories14",get:function(){var t=u.r(this.ptr);return 0===t?void 0:O.__wrap(t)},set:function(t){var r=0;v(t)||(d(t,O),r=t.ptr,t.ptr=0),u.xb(this.ptr,r)}},{key:"data_directories15",get:function(){var t=u.s(this.ptr);return 0===t?void 0:O.__wrap(t)},set:function(t){var r=0;v(t)||(d(t,O),r=t.ptr,t.ptr=0),u.yb(this.ptr,r)}}],[{key:"__wrap",value:function(r){var e=Object.create(t.prototype);return e.ptr=r,e}}]),t}(),O=function(){function t(){n(this,t)}return o(t,[{key:"free",value:function(){var t=this.ptr;this.ptr=0,u.c(t)}},{key:"virtual_address",get:function(){return u.k(this.ptr)>>>0},set:function(t){u.qb(this.ptr,t)}},{key:"size",get:function(){return u.B(this.ptr)>>>0},set:function(t){u.Hb(this.ptr,t)}}],[{key:"__wrap",value:function(r){var e=Object.create(t.prototype);return e.ptr=r,e}}]),t}(),j=function(){function t(){n(this,t)}return o(t,[{key:"free",value:function(){var t=this.ptr;this.ptr=0,u.d(t)}},{key:"signature",get:function(){return u.C(this.ptr)},set:function(t){u.Ib(this.ptr,t)}},{key:"pe_pointer",get:function(){return u.k(this.ptr)>>>0},set:function(t){u.qb(this.ptr,t)}}],[{key:"__wrap",value:function(r){var e=Object.create(t.prototype);return e.ptr=r,e}}]),t}(),E=function(){function t(){n(this,t)}return o(t,[{key:"free",value:function(){var t=this.ptr;this.ptr=0,u.ib(t)}},{key:"dos_header",get:function(){var t=u.E(this.ptr);return j.__wrap(t)},set:function(t){d(t,j);var r=t.ptr;t.ptr=0,u.Kb(this.ptr,r)}},{key:"signature",get:function(){return u.G(this.ptr)>>>0},set:function(t){u.Mb(this.ptr,t)}},{key:"coff_header",get:function(){var t=u.D(this.ptr);return w.__wrap(t)},set:function(t){d(t,w);var r=t.ptr;t.ptr=0,u.Jb(this.ptr,r)}},{key:"optional_header",get:function(){var t=u.F(this.ptr);return 0===t?void 0:T.__wrap(t)},set:function(t){var r=0;v(t)||(d(t,T),r=t.ptr,t.ptr=0),u.Lb(this.ptr,r)}}],[{key:"__wrap",value:function(r){var e=Object.create(t.prototype);return e.ptr=r,e}}]),t}(),T=function(){function t(){n(this,t)}return o(t,[{key:"free",value:function(){var t=this.ptr;this.ptr=0,u.jb(t)}},{key:"standard_fields",get:function(){var t=u.I(this.ptr);return x.__wrap(t)},set:function(t){d(t,x);var r=t.ptr;t.ptr=0,u.Ob(this.ptr,r)}},{key:"windows_fields",get:function(){var t=u.J(this.ptr);return z.__wrap(t)},set:function(t){d(t,z);var r=t.ptr;t.ptr=0,u.Pb(this.ptr,r)}},{key:"data_directories",get:function(){var t=u.H(this.ptr);return k.__wrap(t)},set:function(t){d(t,k);var r=t.ptr;t.ptr=0,u.Nb(this.ptr,r)}}],[{key:"__wrap",value:function(r){var e=Object.create(t.prototype);return e.ptr=r,e}}]),t}(),x=function(){function t(){n(this,t)}return o(t,[{key:"free",value:function(){var t=this.ptr;this.ptr=0,u.oc(t)}},{key:"magic",get:function(){return u.N(this.ptr)},set:function(t){u.Tb(this.ptr,t)}},{key:"major_linker_version",get:function(){return u.O(this.ptr)},set:function(t){u.Ub(this.ptr,t)}},{key:"minor_linker_version",get:function(){return u.P(this.ptr)},set:function(t){u.Vb(this.ptr,t)}},{key:"size_of_code",get:function(){u.Q(8,this.ptr);var t=l()[2],r=l()[3];return h[0]=t,h[1]=r,y[0]},set:function(t){y[0]=t;var r=h[0],e=h[1];u.Wb(this.ptr,r,e)}},{key:"size_of_initialized_data",get:function(){u.R(8,this.ptr);var t=l()[2],r=l()[3];return h[0]=t,h[1]=r,y[0]},set:function(t){y[0]=t;var r=h[0],e=h[1];u.Xb(this.ptr,r,e)}},{key:"size_of_uninitialized_data",get:function(){u.S(8,this.ptr);var t=l()[2],r=l()[3];return h[0]=t,h[1]=r,y[0]},set:function(t){y[0]=t;var r=h[0],e=h[1];u.Yb(this.ptr,r,e)}},{key:"address_of_entry_point",get:function(){u.K(8,this.ptr);var t=l()[2],r=l()[3];return h[0]=t,h[1]=r,y[0]},set:function(t){y[0]=t;var r=h[0],e=h[1];u.Qb(this.ptr,r,e)}},{key:"base_of_code",get:function(){u.L(8,this.ptr);var t=l()[2],r=l()[3];return h[0]=t,h[1]=r,y[0]},set:function(t){y[0]=t;var r=h[0],e=h[1];u.Rb(this.ptr,r,e)}},{key:"base_of_data",get:function(){return u.M(this.ptr)>>>0},set:function(t){u.Sb(this.ptr,t)}}],[{key:"__wrap",value:function(r){var e=Object.create(t.prototype);return e.ptr=r,e}}]),t}(),z=function(){function t(){n(this,t)}return o(t,[{key:"free",value:function(){var t=this.ptr;this.ptr=0,u.pc(t)}},{key:"image_base",get:function(){u.Q(8,this.ptr);var t=l()[2],r=l()[3];return h[0]=t,h[1]=r,y[0]},set:function(t){y[0]=t;var r=h[0],e=h[1];u.Wb(this.ptr,r,e)}},{key:"section_alignment",get:function(){return u.M(this.ptr)>>>0},set:function(t){u.Sb(this.ptr,t)}},{key:"file_alignment",get:function(){return u.V(this.ptr)>>>0},set:function(t){u.bc(this.ptr,t)}},{key:"major_operating_system_version",get:function(){return u.Y(this.ptr)},set:function(t){u.ec(this.ptr,t)}},{key:"minor_operating_system_version",get:function(){return u.bb(this.ptr)},set:function(t){u.hc(this.ptr,t)}},{key:"major_image_version",get:function(){return u.X(this.ptr)},set:function(t){u.dc(this.ptr,t)}},{key:"minor_image_version",get:function(){return u.ab(this.ptr)},set:function(t){u.gc(this.ptr,t)}},{key:"major_subsystem_version",get:function(){return u.Z(this.ptr)},set:function(t){u.fc(this.ptr,t)}},{key:"minor_subsystem_version",get:function(){return u.cb(this.ptr)},set:function(t){u.ic(this.ptr,t)}},{key:"win32_version_value",get:function(){return u.hb(this.ptr)>>>0},set:function(t){u.nc(this.ptr,t)}},{key:"size_of_image",get:function(){return u.fb(this.ptr)>>>0},set:function(t){u.lc(this.ptr,t)}},{key:"size_of_headers",get:function(){return u.eb(this.ptr)>>>0},set:function(t){u.kc(this.ptr,t)}},{key:"check_sum",get:function(){return u.T(this.ptr)>>>0},set:function(t){u.Zb(this.ptr,t)}},{key:"subsystem",get:function(){return u.gb(this.ptr)},set:function(t){u.mc(this.ptr,t)}},{key:"dll_characteristics",get:function(){return u.U(this.ptr)},set:function(t){u.ac(this.ptr,t)}},{key:"size_of_stack_reserve",get:function(){u.R(8,this.ptr);var t=l()[2],r=l()[3];return h[0]=t,h[1]=r,y[0]},set:function(t){y[0]=t;var r=h[0],e=h[1];u.Xb(this.ptr,r,e)}},{key:"size_of_stack_commit",get:function(){u.S(8,this.ptr);var t=l()[2],r=l()[3];return h[0]=t,h[1]=r,y[0]},set:function(t){y[0]=t;var r=h[0],e=h[1];u.Yb(this.ptr,r,e)}},{key:"size_of_heap_reserve",get:function(){u.K(8,this.ptr);var t=l()[2],r=l()[3];return h[0]=t,h[1]=r,y[0]},set:function(t){y[0]=t;var r=h[0],e=h[1];u.Qb(this.ptr,r,e)}},{key:"size_of_heap_commit",get:function(){u.L(8,this.ptr);var t=l()[2],r=l()[3];return h[0]=t,h[1]=r,y[0]},set:function(t){y[0]=t;var r=h[0],e=h[1];u.Rb(this.ptr,r,e)}},{key:"loader_flags",get:function(){return u.W(this.ptr)>>>0},set:function(t){u.cc(this.ptr,t)}},{key:"number_of_rva_and_sizes",get:function(){return u.db(this.ptr)>>>0},set:function(t){u.jc(this.ptr,t)}}],[{key:"__wrap",value:function(r){var e=Object.create(t.prototype);return e.ptr=r,e}}]),t}(),S=function(t,r){throw new Error(p(t,r))}}}]);
//# sourceMappingURL=3.99303eee.chunk.js.map