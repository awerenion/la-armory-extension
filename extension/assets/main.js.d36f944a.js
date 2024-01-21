var K={exports:{}},ye=function(e,t){return function(){for(var a=new Array(arguments.length),s=0;s<a.length;s++)a[s]=arguments[s];return e.apply(t,a)}},Fe=ye,Q=Object.prototype.toString,Y=function(r){return function(e){var t=Q.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function A(r){return r=r.toLowerCase(),function(t){return Y(t)===r}}function G(r){return Array.isArray(r)}function F(r){return typeof r=="undefined"}function je(r){return r!==null&&!F(r)&&r.constructor!==null&&!F(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}var we=A("ArrayBuffer");function ke(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&we(r.buffer),e}function ge(r){return typeof r=="string"}function Ie(r){return typeof r=="number"}function be(r){return r!==null&&typeof r=="object"}function B(r){if(Y(r)!=="object")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}var qe=A("Date"),Me=A("File"),He=A("Blob"),Je=A("FileList");function Z(r){return Q.call(r)==="[object Function]"}function We(r){return be(r)&&Z(r.pipe)}function Ve(r){var e="[object FormData]";return r&&(typeof FormData=="function"&&r instanceof FormData||Q.call(r)===e||Z(r.toString)&&r.toString()===e)}var ze=A("URLSearchParams");function Xe(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function Ke(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function ee(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),G(r))for(var t=0,n=r.length;t<n;t++)e.call(null,r[t],t,r);else for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&e.call(null,r[a],a,r)}function z(){var r={};function e(a,s){B(r[s])&&B(a)?r[s]=z(r[s],a):B(a)?r[s]=z({},a):G(a)?r[s]=a.slice():r[s]=a}for(var t=0,n=arguments.length;t<n;t++)ee(arguments[t],e);return r}function Qe(r,e,t){return ee(e,function(a,s){t&&typeof a=="function"?r[s]=Fe(a,t):r[s]=a}),r}function Ye(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}function Ge(r,e,t,n){r.prototype=Object.create(e.prototype,n),r.prototype.constructor=r,t&&Object.assign(r.prototype,t)}function Ze(r,e,t){var n,a,s,i={};e=e||{};do{for(n=Object.getOwnPropertyNames(r),a=n.length;a-- >0;)s=n[a],i[s]||(e[s]=r[s],i[s]=!0);r=Object.getPrototypeOf(r)}while(r&&(!t||t(r,e))&&r!==Object.prototype);return e}function er(r,e,t){r=String(r),(t===void 0||t>r.length)&&(t=r.length),t-=e.length;var n=r.indexOf(e,t);return n!==-1&&n===t}function rr(r){if(!r)return null;var e=r.length;if(F(e))return null;for(var t=new Array(e);e-- >0;)t[e]=r[e];return t}var tr=function(r){return function(e){return r&&e instanceof r}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),c={isArray:G,isArrayBuffer:we,isBuffer:je,isFormData:Ve,isArrayBufferView:ke,isString:ge,isNumber:Ie,isObject:be,isPlainObject:B,isUndefined:F,isDate:qe,isFile:Me,isBlob:He,isFunction:Z,isStream:We,isURLSearchParams:ze,isStandardBrowserEnv:Ke,forEach:ee,merge:z,extend:Qe,trim:Xe,stripBOM:Ye,inherits:Ge,toFlatObject:Ze,kindOf:Y,kindOfTest:A,endsWith:er,toArray:rr,isTypedArray:tr,isFileList:Je},C=c;function oe(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var re=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(C.isURLSearchParams(t))a=t.toString();else{var s=[];C.forEach(t,function(l,h){l===null||typeof l=="undefined"||(C.isArray(l)?h=h+"[]":l=[l],C.forEach(l,function(f){C.isDate(f)?f=f.toISOString():C.isObject(f)&&(f=JSON.stringify(f)),s.push(oe(h)+"="+oe(f))}))}),a=s.join("&")}if(a){var i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e},nr=c;function j(){this.handlers=[]}j.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1};j.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};j.prototype.forEach=function(e){nr.forEach(this.handlers,function(n){n!==null&&e(n)})};var ar=j,sr=c,ir=function(e,t){sr.forEach(e,function(a,s){s!==t&&s.toUpperCase()===t.toUpperCase()&&(e[t]=a,delete e[s])})},Re=c;function N(r,e,t,n,a){Error.call(this),this.message=r,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),n&&(this.request=n),a&&(this.response=a)}Re.inherits(N,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Oe=N.prototype,Ae={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(r){Ae[r]={value:r}});Object.defineProperties(N,Ae);Object.defineProperty(Oe,"isAxiosError",{value:!0});N.from=function(r,e,t,n,a,s){var i=Object.create(Oe);return Re.toFlatObject(r,i,function(l){return l!==Error.prototype}),N.call(i,r.message,e,t,n,a),i.name=r.name,s&&Object.assign(i,s),i};var _=N,Se={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},w=c;function or(r,e){e=e||new FormData;var t=[];function n(s){return s===null?"":w.isDate(s)?s.toISOString():w.isArrayBuffer(s)||w.isTypedArray(s)?typeof Blob=="function"?new Blob([s]):Buffer.from(s):s}function a(s,i){if(w.isPlainObject(s)||w.isArray(s)){if(t.indexOf(s)!==-1)throw Error("Circular reference detected in "+i);t.push(s),w.forEach(s,function(l,h){if(!w.isUndefined(l)){var o=i?i+"."+h:h,f;if(l&&!i&&typeof l=="object"){if(w.endsWith(h,"{}"))l=JSON.stringify(l);else if(w.endsWith(h,"[]")&&(f=w.toArray(l))){f.forEach(function(v){!w.isUndefined(v)&&e.append(o,n(v))});return}}a(l,o)}}),t.pop()}else e.append(i,n(s))}return a(r),e}var Ce=or,H=_,xe=function(e,t,n){var a=n.config.validateStatus;!n.status||!a||a(n.status)?e(n):t(new H("Request failed with status code "+n.status,[H.ERR_BAD_REQUEST,H.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))},$=c,ur=$.isStandardBrowserEnv()?function(){return{write:function(t,n,a,s,i,u){var l=[];l.push(t+"="+encodeURIComponent(n)),$.isNumber(a)&&l.push("expires="+new Date(a).toGMTString()),$.isString(s)&&l.push("path="+s),$.isString(i)&&l.push("domain="+i),u===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(t){var n=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),lr=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},fr=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},cr=lr,dr=fr,te=function(e,t){return e&&!cr(t)?dr(e,t):t},J=c,hr=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],pr=function(e){var t={},n,a,s;return e&&J.forEach(e.split(`
`),function(u){if(s=u.indexOf(":"),n=J.trim(u.substr(0,s)).toLowerCase(),a=J.trim(u.substr(s+1)),n){if(t[n]&&hr.indexOf(n)>=0)return;n==="set-cookie"?t[n]=(t[n]?t[n]:[]).concat([a]):t[n]=t[n]?t[n]+", "+a:a}}),t},ue=c,mr=ue.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),n;function a(s){var i=s;return e&&(t.setAttribute("href",i),i=t.href),t.setAttribute("href",i),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return n=a(window.location.href),function(i){var u=ue.isString(i)?a(i):i;return u.protocol===n.protocol&&u.host===n.host}}():function(){return function(){return!0}}(),X=_,vr=c;function Ne(r){X.call(this,r==null?"canceled":r,X.ERR_CANCELED),this.name="CanceledError"}vr.inherits(Ne,X,{__CANCEL__:!0});var k=Ne,Er=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""},D=c,yr=xe,wr=ur,br=re,Rr=te,Or=pr,Ar=mr,Sr=Se,b=_,Cr=k,xr=Er,le=function(e){return new Promise(function(n,a){var s=e.data,i=e.headers,u=e.responseType,l;function h(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}D.isFormData(s)&&D.isStandardBrowserEnv()&&delete i["Content-Type"];var o=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.Authorization="Basic "+btoa(f+":"+v)}var p=Rr(e.baseURL,e.url);o.open(e.method.toUpperCase(),br(p,e.params,e.paramsSerializer),!0),o.timeout=e.timeout;function se(){if(!!o){var y="getAllResponseHeaders"in o?Or(o.getAllResponseHeaders()):null,S=!u||u==="text"||u==="json"?o.responseText:o.response,O={data:S,status:o.status,statusText:o.statusText,headers:y,config:e,request:o};yr(function(M){n(M),h()},function(M){a(M),h()},O),o=null}}if("onloadend"in o?o.onloadend=se:o.onreadystatechange=function(){!o||o.readyState!==4||o.status===0&&!(o.responseURL&&o.responseURL.indexOf("file:")===0)||setTimeout(se)},o.onabort=function(){!o||(a(new b("Request aborted",b.ECONNABORTED,e,o)),o=null)},o.onerror=function(){a(new b("Network Error",b.ERR_NETWORK,e,o,o)),o=null},o.ontimeout=function(){var S=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",O=e.transitional||Sr;e.timeoutErrorMessage&&(S=e.timeoutErrorMessage),a(new b(S,O.clarifyTimeoutError?b.ETIMEDOUT:b.ECONNABORTED,e,o)),o=null},D.isStandardBrowserEnv()){var ie=(e.withCredentials||Ar(p))&&e.xsrfCookieName?wr.read(e.xsrfCookieName):void 0;ie&&(i[e.xsrfHeaderName]=ie)}"setRequestHeader"in o&&D.forEach(i,function(S,O){typeof s=="undefined"&&O.toLowerCase()==="content-type"?delete i[O]:o.setRequestHeader(O,S)}),D.isUndefined(e.withCredentials)||(o.withCredentials=!!e.withCredentials),u&&u!=="json"&&(o.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&o.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&o.upload&&o.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(y){!o||(a(!y||y&&y.type?new Cr:y),o.abort(),o=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),s||(s=null);var q=xr(p);if(q&&["http","https","file"].indexOf(q)===-1){a(new b("Unsupported protocol "+q+":",b.ERR_BAD_REQUEST,e));return}o.send(s)})},Nr=null,d=c,fe=ir,ce=_,Tr=Se,Pr=Ce,_r={"Content-Type":"application/x-www-form-urlencoded"};function de(r,e){!d.isUndefined(r)&&d.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function Dr(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=le),r}function Ur(r,e,t){if(d.isString(r))try{return(e||JSON.parse)(r),d.trim(r)}catch(n){if(n.name!=="SyntaxError")throw n}return(t||JSON.stringify)(r)}var g={transitional:Tr,adapter:Dr(),transformRequest:[function(e,t){if(fe(t,"Accept"),fe(t,"Content-Type"),d.isFormData(e)||d.isArrayBuffer(e)||d.isBuffer(e)||d.isStream(e)||d.isFile(e)||d.isBlob(e))return e;if(d.isArrayBufferView(e))return e.buffer;if(d.isURLSearchParams(e))return de(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n=d.isObject(e),a=t&&t["Content-Type"],s;if((s=d.isFileList(e))||n&&a==="multipart/form-data"){var i=this.env&&this.env.FormData;return Pr(s?{"files[]":e}:e,i&&new i)}else if(n||a==="application/json")return de(t,"application/json"),Ur(e);return e}],transformResponse:[function(e){var t=this.transitional||g.transitional,n=t&&t.silentJSONParsing,a=t&&t.forcedJSONParsing,s=!n&&this.responseType==="json";if(s||a&&d.isString(e)&&e.length)try{return JSON.parse(e)}catch(i){if(s)throw i.name==="SyntaxError"?ce.from(i,ce.ERR_BAD_RESPONSE,this,null,this.response):i}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Nr},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};d.forEach(["delete","get","head"],function(e){g.headers[e]={}});d.forEach(["post","put","patch"],function(e){g.headers[e]=d.merge(_r)});var ne=g,$r=c,Br=ne,Lr=function(e,t,n){var a=this||Br;return $r.forEach(n,function(i){e=i.call(a,e,t)}),e},Te=function(e){return!!(e&&e.__CANCEL__)},he=c,W=Lr,Fr=Te,jr=ne,kr=k;function V(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new kr}var gr=function(e){V(e),e.headers=e.headers||{},e.data=W.call(e,e.data,e.headers,e.transformRequest),e.headers=he.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),he.forEach(["delete","get","head","post","put","patch","common"],function(a){delete e.headers[a]});var t=e.adapter||jr.adapter;return t(e).then(function(a){return V(e),a.data=W.call(e,a.data,a.headers,e.transformResponse),a},function(a){return Fr(a)||(V(e),a&&a.response&&(a.response.data=W.call(e,a.response.data,a.response.headers,e.transformResponse))),Promise.reject(a)})},E=c,Pe=function(e,t){t=t||{};var n={};function a(o,f){return E.isPlainObject(o)&&E.isPlainObject(f)?E.merge(o,f):E.isPlainObject(f)?E.merge({},f):E.isArray(f)?f.slice():f}function s(o){if(E.isUndefined(t[o])){if(!E.isUndefined(e[o]))return a(void 0,e[o])}else return a(e[o],t[o])}function i(o){if(!E.isUndefined(t[o]))return a(void 0,t[o])}function u(o){if(E.isUndefined(t[o])){if(!E.isUndefined(e[o]))return a(void 0,e[o])}else return a(void 0,t[o])}function l(o){if(o in t)return a(e[o],t[o]);if(o in e)return a(void 0,e[o])}var h={url:i,method:i,data:i,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:l};return E.forEach(Object.keys(e).concat(Object.keys(t)),function(f){var v=h[f]||s,p=v(f);E.isUndefined(p)&&v!==l||(n[f]=p)}),n},_e={version:"0.27.2"},Ir=_e.version,R=_,ae={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){ae[r]=function(n){return typeof n===r||"a"+(e<1?"n ":" ")+r}});var pe={};ae.transitional=function(e,t,n){function a(s,i){return"[Axios v"+Ir+"] Transitional option '"+s+"'"+i+(n?". "+n:"")}return function(s,i,u){if(e===!1)throw new R(a(i," has been removed"+(t?" in "+t:"")),R.ERR_DEPRECATED);return t&&!pe[i]&&(pe[i]=!0,console.warn(a(i," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,i,u):!0}};function qr(r,e,t){if(typeof r!="object")throw new R("options must be an object",R.ERR_BAD_OPTION_VALUE);for(var n=Object.keys(r),a=n.length;a-- >0;){var s=n[a],i=e[s];if(i){var u=r[s],l=u===void 0||i(u,s,r);if(l!==!0)throw new R("option "+s+" must be "+l,R.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new R("Unknown option "+s,R.ERR_BAD_OPTION)}}var Mr={assertOptions:qr,validators:ae},De=c,Hr=re,me=ar,ve=gr,I=Pe,Jr=te,Ue=Mr,x=Ue.validators;function T(r){this.defaults=r,this.interceptors={request:new me,response:new me}}T.prototype.request=function(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=I(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;n!==void 0&&Ue.assertOptions(n,{silentJSONParsing:x.transitional(x.boolean),forcedJSONParsing:x.transitional(x.boolean),clarifyTimeoutError:x.transitional(x.boolean)},!1);var a=[],s=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(t)===!1||(s=s&&p.synchronous,a.unshift(p.fulfilled,p.rejected))});var i=[];this.interceptors.response.forEach(function(p){i.push(p.fulfilled,p.rejected)});var u;if(!s){var l=[ve,void 0];for(Array.prototype.unshift.apply(l,a),l=l.concat(i),u=Promise.resolve(t);l.length;)u=u.then(l.shift(),l.shift());return u}for(var h=t;a.length;){var o=a.shift(),f=a.shift();try{h=o(h)}catch(v){f(v);break}}try{u=ve(h)}catch(v){return Promise.reject(v)}for(;i.length;)u=u.then(i.shift(),i.shift());return u};T.prototype.getUri=function(e){e=I(this.defaults,e);var t=Jr(e.baseURL,e.url);return Hr(t,e.params,e.paramsSerializer)};De.forEach(["delete","get","head","options"],function(e){T.prototype[e]=function(t,n){return this.request(I(n||{},{method:e,url:t,data:(n||{}).data}))}});De.forEach(["post","put","patch"],function(e){function t(n){return function(s,i,u){return this.request(I(u||{},{method:e,headers:n?{"Content-Type":"multipart/form-data"}:{},url:s,data:i}))}}T.prototype[e]=t(),T.prototype[e+"Form"]=t(!0)});var Wr=T,Vr=k;function P(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(a){e=a});var t=this;this.promise.then(function(n){if(!!t._listeners){var a,s=t._listeners.length;for(a=0;a<s;a++)t._listeners[a](n);t._listeners=null}}),this.promise.then=function(n){var a,s=new Promise(function(i){t.subscribe(i),a=i}).then(n);return s.cancel=function(){t.unsubscribe(a)},s},r(function(a){t.reason||(t.reason=new Vr(a),e(t.reason))})}P.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};P.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};P.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};P.source=function(){var e,t=new P(function(a){e=a});return{token:t,cancel:e}};var zr=P,Xr=function(e){return function(n){return e.apply(null,n)}},Kr=c,Qr=function(e){return Kr.isObject(e)&&e.isAxiosError===!0},Ee=c,Yr=ye,L=Wr,Gr=Pe,Zr=ne;function $e(r){var e=new L(r),t=Yr(L.prototype.request,e);return Ee.extend(t,L.prototype,e),Ee.extend(t,e),t.create=function(a){return $e(Gr(r,a))},t}var m=$e(Zr);m.Axios=L;m.CanceledError=k;m.CancelToken=zr;m.isCancel=Te;m.VERSION=_e.version;m.toFormData=Ce;m.AxiosError=_;m.Cancel=m.CanceledError;m.all=function(e){return Promise.all(e)};m.spread=Xr;m.isAxiosError=Qr;K.exports=m;K.exports.default=m;var U=K.exports;const et="https://\u043B\u043E\u0441\u0442\u0430\u0440\u043A.\u0440\u0444/\u041E\u0440\u0443\u0436\u0435\u0439\u043D\u0430\u044F/";async function rt(r){const e=nt(r),t=[tt(e,r)];r.timeout&&r.timeout>0&&t.push(new Promise(a=>{setTimeout(()=>{const s=r.timeoutErrorMessage?r.timeoutErrorMessage:"timeout of "+r.timeout+"ms exceeded";a(Be(s,r,"ECONNABORTED",e))},r.timeout)}));const n=await Promise.race(t);return new Promise((a,s)=>{n instanceof Error?s(n):Object.prototype.toString.call(r.settle)==="[object Function]"?r.settle(a,s,n):xe(a,s,n)})}async function tt(r,e){let t;try{t=await fetch(r)}catch{return Be("Network Error",e,"ERR_NETWORK",r)}const n={ok:t.ok,status:t.status,statusText:t.statusText,headers:new Headers(t.headers),config:e,request:r};if(t.status>=200&&t.status!==204)switch(e.responseType){case"arraybuffer":n.data=await t.arrayBuffer();break;case"blob":n.data=await t.blob();break;case"json":n.data=await t.json();break;case"formData":n.data=await t.formData();break;default:n.data=await t.text();break}return n}function nt(r){const e=new Headers(r.headers);if(r.auth){const i=r.auth.username||"",u=r.auth.password?decodeURI(encodeURIComponent(r.auth.password)):"";e.set("Authorization",`Basic ${btoa(i+":"+u)}`)}const t=r.method.toUpperCase(),n={headers:e,method:t};t!=="GET"&&t!=="HEAD"&&(n.body=r.data,c.isFormData(n.body)&&c.isStandardBrowserEnv()&&e.delete("Content-Type")),r.mode&&(n.mode=r.mode),r.cache&&(n.cache=r.cache),r.integrity&&(n.integrity=r.integrity),r.redirect&&(n.redirect=r.redirect),r.referrer&&(n.referrer=r.referrer),c.isUndefined(r.withCredentials)||(n.credentials=r.withCredentials?"include":"omit");const a=te(r.baseURL,r.url),s=re(a,r.params,r.paramsSerializer);return new Request(s,n)}function Be(r,e,t,n,a){if(U.AxiosError&&typeof U.AxiosError=="function")return new U.AxiosError(r,U.AxiosError[t],e,n,a);var s=new Error(r);return at(s,e,t,n,a)}function at(r,e,t,n,a){return r.config=e,t&&(r.code=t),r.request=n,r.response=a,r.isAxiosError=!0,r.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},r}chrome.runtime.onMessage.addListener(function(r,e,t){return r.type==="load-character-info"&&U.request({method:"get",url:et+r.name,adapter:rt}).then(n=>{let a=n.data.split("<span>\u0423\u0440\u043E\u0432\u0435\u043D\u044C \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u0436\u0430</span><span><small>\u0423\u0440.</small>")[1].split("</span></div>")[0],s=n.data.split("<span>\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0435\u0439\u0442\u0438\u043D\u0433</span><span><small>\u0423\u0440.</small>")[1].split("</small></span></div>")[0].replace("<small>","").replace(",","").replace(".00","");t({name:r.name,gs:s,level:a})}).catch(n=>console.error(n)),!0});
