(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process){
!function(t,n){"function"==typeof define&&define.amd?define([],n):t.FxaRelierClient=n()}(this,function(){var t,n,e;return function(r){function i(t,n){return g.call(t,n)}function o(t,n){var e,r,i,o,c,u,a,s,l,f,p,h=n&&n.split("/"),d=m.map,_=d&&d["*"]||{};if(t&&"."===t.charAt(0))if(n){for(h=h.slice(0,h.length-1),t=t.split("/"),c=t.length-1,m.nodeIdCompat&&y.test(t[c])&&(t[c]=t[c].replace(y,"")),t=h.concat(t),l=0;l<t.length;l+=1)if(p=t[l],"."===p)t.splice(l,1),l-=1;else if(".."===p){if(1===l&&(".."===t[2]||".."===t[0]))break;l>0&&(t.splice(l-1,2),l-=2)}t=t.join("/")}else 0===t.indexOf("./")&&(t=t.substring(2));if((h||_)&&d){for(e=t.split("/"),l=e.length;l>0;l-=1){if(r=e.slice(0,l).join("/"),h)for(f=h.length;f>0;f-=1)if(i=d[h.slice(0,f).join("/")],i&&(i=i[r])){o=i,u=l;break}if(o)break;!a&&_&&_[r]&&(a=_[r],s=l)}!o&&a&&(o=a,u=s),o&&(e.splice(0,u,o),t=e.join("/"))}return t}function c(t,n){return function(){var e=x.call(arguments,0);return"string"!=typeof e[0]&&1===e.length&&e.push(null),h.apply(r,e.concat([t,n]))}}function u(t){return function(n){return o(n,t)}}function a(t){return function(n){v[t]=n}}function s(t){if(i(w,t)){var n=w[t];delete w[t],b[t]=!0,p.apply(r,n)}if(!i(v,t)&&!i(b,t))throw new Error("No "+t);return v[t]}function l(t){var n,e=t?t.indexOf("!"):-1;return e>-1&&(n=t.substring(0,e),t=t.substring(e+1,t.length)),[n,t]}function f(t){return function(){return m&&m.config&&m.config[t]||{}}}var p,h,d,_,v={},w={},m={},b={},g=Object.prototype.hasOwnProperty,x=[].slice,y=/\.js$/;d=function(t,n){var e,r=l(t),i=r[0];return t=r[1],i&&(i=o(i,n),e=s(i)),i?t=e&&e.normalize?e.normalize(t,u(n)):o(t,n):(t=o(t,n),r=l(t),i=r[0],t=r[1],i&&(e=s(i))),{f:i?i+"!"+t:t,n:t,pr:i,p:e}},_={require:function(t){return c(t)},exports:function(t){var n=v[t];return"undefined"!=typeof n?n:v[t]={}},module:function(t){return{id:t,uri:"",exports:v[t],config:f(t)}}},p=function(t,n,e,o){var u,l,f,p,h,m,g=[],x=typeof e;if(o=o||t,"undefined"===x||"function"===x){for(n=!n.length&&e.length?["require","exports","module"]:n,h=0;h<n.length;h+=1)if(p=d(n[h],o),l=p.f,"require"===l)g[h]=_.require(t);else if("exports"===l)g[h]=_.exports(t),m=!0;else if("module"===l)u=g[h]=_.module(t);else if(i(v,l)||i(w,l)||i(b,l))g[h]=s(l);else{if(!p.p)throw new Error(t+" missing "+l);p.p.load(p.n,c(o,!0),a(l),{}),g[h]=v[l]}f=e?e.apply(v[t],g):void 0,t&&(u&&u.exports!==r&&u.exports!==v[t]?v[t]=u.exports:f===r&&m||(v[t]=f))}else t&&(v[t]=e)},t=n=h=function(t,n,e,i,o){if("string"==typeof t)return _[t]?_[t](n):s(d(t,n).f);if(!t.splice){if(m=t,m.deps&&h(m.deps,m.callback),!n)return;n.splice?(t=n,n=e,e=null):t=r}return n=n||function(){},"function"==typeof e&&(e=i,i=o),i?p(r,t,n,e):setTimeout(function(){p(r,t,n,e)},4),h},h.config=function(t){return h(t)},t._defined=v,e=function(t,n,e){n.splice||(e=n,n=[]),i(v,t)||i(w,t)||(w[t]=[t,n,e])},e.amd={jQuery:!0}}(),e("components/almond/almond",function(){}),function(t){"undefined"!=typeof module&&module&&module.exports?module.exports=t():"function"==typeof e&&e.amd?e("p-promise",t):P=t()}(function(){function t(t){if(!t.stack)try{throw t}catch(n){}return t}function e(){var t=J(new Error).stack;if(!t)return null;var n=[o(t,1)];return $&&(n=n.concat($),128===n.length&&n.pop()),n}function r(t){var n=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t)||/at ([^ ]+):(\d+):(?:\d+)$/.exec(t)||/@(.+):(\d+):(?:\d+)$/.exec(t);return n?{fileName:n[1],lineNumber:Number(n[2])}:null}function i(){var t=J(new Error).stack;if(!t)return 0;var n=t.split("\n"),e=n[0].indexOf("@")>0?n[1]:n[2],i=r(e);return i?(z=i.fileName,i.lineNumber):0}function o(t,n){for(var e=t.split("\n"),r=[],i=0|n,o=e.length;o>i;++i){var a=e[i];!a||c(a)||u(a)||r.push(a)}return r.join("\n")}function c(t){return-1!==t.indexOf("(module.js:")||-1!==t.indexOf("(node.js:")}function u(t){var n=r(t);return!!n&&n.fileName===z&&n.lineNumber>=Q&&n.lineNumber<=mn}function a(t){if(t instanceof Error){var n=t.stack;if(n){if(~n.indexOf(Y))return}else n=J(t).stack;n&&(t.stack=[o(n,0)].concat($||[]).join(Y))}}function s(){this.a=null,this.b=null,this.next=null}function l(t){return"object"===t||"function"===t}function f(){if(un.length)throw un.shift()}function p(){for(;nn!==en;){var t=nn=nn.next;on>=1024?en.next=en.next.next:++on;var n=t.a,e=t.b;t.a=null,t.b=null,C(n,e)}rn=!1,$=null}function h(t,n){var e=en.next;e===nn?(en.next=e=new s,e.next=nn):--on,en=e,e.a=t,e.b=n,rn||(rn=!0,cn())}function d(){var t=process.domain;t&&(K||(K=n("domain")),K.active=process.domain=null),rn&&Z?setImmediate(p):process.nextTick(p),t&&(K.active=process.domain=t)}function _(t){var n=1,e=document.createTextNode(""),r=new tn(t);return r.observe(e,{characterData:!0}),function(){n=-n,e.data=n}}function v(t){return function(){function n(){clearTimeout(e),clearInterval(r),t()}var e=setTimeout(n,0),r=setInterval(n,50)}}function w(t){if(!b.onerror)throw t;b.onerror(t)}function m(t){t._state===hn&&(t._domain&&t._domain.enter(),B(t._value))}function b(t){return t instanceof F?t:T(new F,t)}function g(t,n){t._state||(t._state=pn,t._value=n,I(t))}function x(t,n){t._state||($&&a(n),t._state=hn,t._value=n,V&&(t._domain=process.domain),I(t))}function y(t,n){n._state||(n._state=t._state,n._value=t._value,n._domain=t._domain,I(n))}function T(t,n){if(t._state)return t;if(n instanceof F)E(t,n);else{var e=typeof n;"object"===e&&null!==n||"function"===e?j(t,n):g(t,n)}return t}function E(t,n){n===t?x(t,new TypeError("You can't resolve a promise with itself")):n._state?y(n,t):H(n,_n,t)}function j(t,n){var e=O(t,n);"function"==typeof e?k(N(t,!1),e,n):g(t,n)}function O(t,n){try{return n.then}catch(e){return x(t,e),null}}function k(t,n,e){try{sn.call(n,e,t.resolve,t.reject)}catch(r){t.reject(r)}}function I(t){t._pending&&(S(t,t._op,t._pending),t._pending=null)}function S(t,n,e){if(n>=0)e(t,n);else if(n===_n)h(t,e);else for(var r=0,i=e.length;i>r;r+=2)S(t,e[r],e[r+1])}function H(t,n,e){t._state?S(t,n,e):t._pending?t._op===vn?t._pending.push(n,e):(t._pending=[t._op,t._pending,n,e],t._op=vn):(t._pending=e,t._op=n)}function C(t,n){var e=t._domain||n._domain;$=n._trace;var r=t._state===pn?n._cb:n._eb;n._cb=null,n._eb=null,n._domain=null,n._trace=null,null===r?y(t,n):e?e._disposed||(e.enter(),A(n,r,t._value),e.exit()):A(n,r,t._value)}function A(t,n,e){var r;try{r=n(e)}catch(i){return void x(t,i)}T(t,r)}function N(t,n){function r(e,r){if(t){var o=t;t=null,i&&($?i=null:$=i),e?x(o,n?e:r):T(o,r),i&&($=i=null)}}var i=b.longStackSupport?e():null;return n?r:{promise:t,resolve:function(t){r(!1,t)},reject:function(t){r(!0,t)}}}function q(){return N(new F,!1)}function U(t){var n=new F;return x(n,t),n}function F(){this._state=0,this._value=void 0,this._domain=null,this._cb=null,this._eb=null,this._op=0,this._pending=null,this._trace=null}function R(t){var n=L(t);return n._state?n:n._clone()}function L(t){function n(t,n){i[n]=t.inspect(),0===--o&&g(e,i)}var e=new F,r=t.length;if("number"!=typeof r)return x(e,new TypeError("input not array-like")),e;for(var i=new Array(r),o=r,c=0;r>c;++c)H(b(t[c]),c,n);return 0===o&&g(e,i),e}function M(t){var n=W(t);return n._state?n:n._clone()}function W(t){function n(t,n){null!==o&&(t._state===hn?(o=null,y(t,e),e=null):(o[n]=t._value,0===--c&&g(e,o)))}var e=new F,r=t.length,i=e;if("number"!=typeof r)return x(e,new TypeError("input not array-like")),e;for(var o=new Array(r),c=r,u=0;r>u;++u)H(b(t[u]),u,n);return 0===c&&g(e,o),i}function D(t,n,e){return W(t).then(function(t){return ln.call(n,void 0,t)},e)}function P(t){function n(n){return sn.apply(t,n)}return function(){var t=arguments.length,e=new Array(t+1);e[0]=this;for(var r=0;t>r;++r)e[r+1]=arguments[r];return W(e).then(n)}}function G(t){return function(){var n=new F,e=arguments.length,r=new Array(e+1);for(r[e]=N(n,!0);e--;)r[e]=arguments[e];return X(n,t,this,r),n}}function X(t,n,e,r){try{ln.call(n,e,r)}catch(i){x(t,i)}}var z,J=t,Q=i(),$=null;(new Error).stack&&(J=function(t){return t});var B,K,Y="\nFrom previous event:\n",V=l(typeof process)&&null!=process&&"[object process]"==={}.toString.call(process),Z="function"==typeof setImmediate,tn=l(typeof MutationObserver)&&MutationObserver||l(typeof WebKitMutationObserver)&&WebKitMutationObserver,nn=new s,en=nn,rn=!1,on=0,cn=V?d:tn?_(p):v(p),un=[],an=v(f),sn=l.call,ln=l.apply;en.next=nn,B=V?function(t){throw $=null,cn(),t}:function(t){un.push(t),an()};var fn=0,pn=1,hn=2,dn=0,_n=-1,vn=-2,wn=b(void 0);b.longStackSupport=!1,b.defer=q,b.reject=U,F.prototype._clone=function(){var t=new F;return E(t,this),t},F.prototype.then=function(t,n){var r=new F;return r._cb="function"==typeof t?t:null,r._eb="function"==typeof n?n:null,b.longStackSupport&&(r._trace=e()),V&&(r._domain=process.domain),this._state?h(this,r):H(this,_n,r),r},F.prototype.done=function(t,n){var e=this;(t||n)&&(e=e.then(t,n)),e=e.then(null,w),H(e,dn,m)},F.prototype.fail=function(t){return this.then(null,t)},F.prototype.fin=function(t){function n(){return b(t()).then(function(){y(e,r)})}var e=this,r=e.then(n,n);return r},F.prototype.spread=function(t,n){return this.then(W).then(function(n){return ln.call(t,void 0,n)},n)},F.prototype.timeout=function(t,n){var r=this._clone();if(this._state===fn){var i=b.longStackSupport?e():null,o=setTimeout(function(){$=i,x(r,new Error(n||"Timed out after "+t+" ms")),$=null},t);H(this,dn,function(){clearTimeout(o)})}return r},F.prototype.delay=function(t){var n=new F;return H(this,dn,function(e){e._state===pn?setTimeout(function(){y(e,n)},t):wn.then(function(){y(e,n)})}),n},F.prototype.all=function(){return this.then(W)},F.prototype.allSettled=function(){return this.then(L)},F.prototype.inspect=function(){switch(this._state){case fn:return{state:"pending"};case pn:return{state:"fulfilled",value:this._value};case hn:return{state:"rejected",reason:this._value};default:throw new TypeError("invalid state")}},F.prototype.nodeify=function(t){return t?void this.done(function(n){t(null,n)},t):this},b.allSettled=R,b.all=M,b.spread=D,b.promised=P,b.denodeify=G,b.onerror=null,b.nextTick=function(t){var n=wn.then(function(){t.call()});H(n,dn,m)};var mn=i();return b}),e("client/lib/function",[],function(){function t(t){var n=[].slice.call(arguments,1);return function(){return t.apply(this,n.concat([].slice.call(arguments,0)))}}return{partial:t}}),e("client/lib/object",[],function(){function t(t){for(var n,e=[].slice.call(arguments,1),r=0;n=e[r];++r)for(var i in n)t[i]=n[i];return t}return{extend:t}}),e("client/lib/options",[],function(){function t(t,n){for(var e,r=0;e=t[r];++r)if(!(e in n))throw new Error(e+" is required")}return{checkRequired:t}}),e("client/lib/constants",[],function(){return{DEFAULT_CONTENT_HOST:"https://accounts.firefox.com",DEFAULT_OAUTH_HOST:"https://oauth.accounts.firefox.com/v1",DEFAULT_PROFILE_HOST:"https://profile.accounts.firefox.com/v1",SIGNIN_ACTION:"signin",SIGNUP_ACTION:"signup",FORCE_AUTH_ACTION:"force_auth",BEST_CHOICE_ACTION:null}}),e("client/lib/url",[],function(){function t(t,n){return encodeURIComponent(t)+"="+encodeURIComponent(n)}function n(n){var e=[];for(var r in n)e.push(t(r,n[r]));return"?"+e.join("&")}return{createQueryParam:t,objectToQueryString:n}}),e("client/auth/base/api",["p-promise","client/lib/constants","client/lib/options","client/lib/function","client/lib/url"],function(t,n,e,r,i){function o(t,e){if(!t)throw new Error("clientId is required");this._clientId=t,this._oauthHost=e.oauthHost||n.DEFAULT_OAUTH_HOST,this._window=e.window||window}function c(n,r){var i=this;return r=r||{},t().then(function(){var t=["scope","state","redirectUri"];e.checkRequired(t,r);var o=u.call(i,n,r);return i.openFxa(o,r)})}function u(t,n){var e={client_id:this._clientId,state:n.state,scope:n.scope,redirect_uri:n.redirectUri};return t&&(e.action=t),n.email&&(e.email=n.email),this._context&&(e.context=this._context),this._oauthHost+"/authorization"+i.objectToQueryString(e)}var a=r.partial;return o.prototype={_context:null,setContext:function(t){this._context=t},openFxa:function(){throw new Error("openFxa must be overridden")},signIn:a(c,n.SIGNIN_ACTION),forceAuth:function(r){var i=this;return t().then(function(){r=r||{};var t=["email"];return e.checkRequired(t,r),c.call(i,n.FORCE_AUTH_ACTION,r)})},signUp:a(c,n.SIGNUP_ACTION),bestChoice:a(c,n.BEST_CHOICE_ACTION)},o}),e("client/auth/lightbox/lightbox",[],function(){function t(t,n,e){var r=t.document.createElement(n);for(var i in e)r.setAttribute(i,e[i]);return r}function n(t){var n="";for(var e in t)n+=e+":"+t[e]+";";return n}function e(t){t=t||{},this._window=t.window}return e.prototype={load:function(e,r){r=r||{};var i=r.background||"rgba(0,0,0,0.5)",o=r.zIndex||100,c=this._backgroundEl=t(this._window,"div",{id:"fxa-background",style:n({background:i,bottom:0,left:0,position:"fixed",right:0,top:0,"z-index":o})}),u=t(this._window,"iframe",{id:"fxa",src:e,width:"600",height:"400",allowtransparency:"true",border:"0",style:n({background:"transparent",border:"none",display:"block",height:"600px",margin:"0 auto 0 auto",position:"relative",top:"10%",width:"400px"})});c.appendChild(u),this._window.document.body.appendChild(c),this._iframe=u,this._contentWindow=u.contentWindow},getContentElement:function(){return this._iframe},getContentWindow:function(){return this._contentWindow},isLoaded:function(){return!!this._backgroundEl},unload:function(){this._backgroundEl&&(this._window.document.body.removeChild(this._backgroundEl),delete this._backgroundEl,delete this._iframe)}},e}),e("client/auth/lightbox/iframe_channel",["p-promise","client/lib/object"],function(t,n){function e(t){t=t||{},this._window=t.window,this._contentWindow=t.contentWindow,this._iframeHost=t.iframeHost}function r(t){if(t.origin===this._iframeHost){var n=i(t.data),e=n.command,r=n.data,o=c[e]||c.ignore;o.call(this,e,r)}}function i(t){return JSON.parse(t)}function o(t,n){return JSON.stringify({command:t,data:n||{}})}e.prototype={version:"0.0.0",attach:function(){return this._boundOnMessage=r.bind(this),this._window.addEventListener("message",this._boundOnMessage,!1),this._deferred=t.defer(),this._deferred.promise},detach:function(){this._window.removeEventListener("message",this._boundOnMessage,!1)},send:function(t,e){var r=n.extend({version:this.version},e),i=o(t,r);this._contentWindow.postMessage(i,this._iframeHost)}};var c={error:function(t,n){this.detach(),this._deferred.reject(n)},ping:function(t,n){this.send(t,n)},ignore:function(t){console.log("ignoring command: %s",t)},oauth_cancel:function(){return this.detach(),this._deferred.reject({reason:"cancel"})},oauth_complete:function(t,n){this.detach(),this._deferred.resolve(n)}};return e.stringifyFxAEvent=o,e.parseFxAEvent=i,e}),e("client/auth/lightbox/api",["p-promise","client/lib/object","client/lib/options","client/lib/constants","../base/api","./lightbox","./iframe_channel"],function(t,n,e,r,i,o,c){function u(){var t=this;return t._lightbox?t._lightbox:(t._lightbox=new o({window:t._window}),t._lightbox)}function a(n,e){var r=this;return t().then(function(){if(r._lightbox&&r._lightbox.isLoaded())throw new Error("lightbox already open");var t=u.call(r);return t.load(n,e),t})}function s(t){var n=this;return n._channel?n._channel:(n._channel=new c({iframeHost:n._contentHost,contentWindow:t.getContentWindow(),window:n._window}),n._channel)}function l(n){var e=this;return t().then(function(){var t=s.call(e,n);return t.attach()})}function f(t,n){n=n||{},i.call(this,t,n),this._lightbox=n.lightbox,this._channel=n.channel,this._contentHost=n.contentHost||r.DEFAULT_CONTENT_HOST,this.setContext("iframe")}return f.prototype=Object.create(i.prototype),n.extend(f.prototype,{openFxa:function(t,n){var e=this;return a.call(e,t,n).then(function(t){return l.call(e,t)}).then(function(t){return e.unload(),t},function(t){throw e.unload(),t})},unload:function(){var n=this;return t().then(function(){if(!n._lightbox)throw new Error("lightbox not open");n._lightbox.unload(),n._channel.detach()})}}),f}),e("client/auth/redirect/api",["../base/api","client/lib/constants","client/lib/options","client/lib/object"],function(t,n,e,r){function i(n,e){t.call(this,n,e)}return i.prototype=Object.create(t.prototype),r.extend(i.prototype,{openFxa:function(t){this._window.location.href=t}}),i}),e("client/auth/api",["p-promise","client/lib/function","client/auth/lightbox/api","client/auth/redirect/api"],function(t,n,e,r){function i(t,n,e,r){if(t._broker)throw new Error("Firefox Accounts is already open");if("object"==typeof n)t._broker=n;else{n=n||"default";var i=a[n];if(!i)throw new Error("Invalid ui: "+n);t._broker=new i(e,r)}return t._broker}function o(n,e){var r=this;return t().then(function(){e=e||{};var t=i(r,e.ui,r._clientId,r._options);return t[n](e).fin(function(){delete r._broker})})}function c(t,n){if(!t)throw new Error("clientId is required");this._clientId=t,this._options=n}var u=n.partial,a={"default":r,lightbox:e,redirect:r};return c.prototype={signIn:u(o,"signIn"),forceAuth:u(o,"forceAuth"),signUp:u(o,"signUp"),bestChoice:u(o,"bestChoice")},c}),function(t,n){"function"==typeof e&&e.amd?e("components/micrajax/micrajax",[],n):"object"==typeof exports?module.exports=n():t.Micrajax=n()}(this,function(){function t(t){var n=[].slice.call(arguments,1),e=function(){return t.apply(null,n.concat([].slice.call(arguments)))};return e}function n(t){return t.xhr?t.xhr:window.XMLHttpRequest?new window.XMLHttpRequest:window.ActiveXObject?new window.ActiveXObject("Microsoft.XMLHTTP"):void 0}function e(){}function r(t,n){try{4===t.readyState&&(t.onreadystatechange=e,n(t.responseText,t.status,t.statusText))}catch(r){}}function i(t){var n=[];for(var e in t){var r=t[e];if("undefined"!=typeof r){var i=encodeURIComponent(e)+"="+encodeURIComponent(r);n.push(i)}}return n.join("&")}function o(t,n){var e={"X-Requested-With":"XMLHttpRequest",Accept:"application/json;text/plain"};for(var r in t)e[r]=t[r];for(var i in e)n.setRequestHeader(i,e[i])}function c(t,n,e){var r=i(e);return"GET"===n&&r&&(t+="?"+r),t}function u(t,n,e){var r;if("GET"!==n&&e)switch(t){case"application/json":r="string"==typeof e?e:JSON.stringify(e);break;case"application/x-www-form-urlencoded":r=i(e)}return r||null}function a(t,n){var e={"Content-type":t};for(var r in n)e[r]=n[r];return e}function s(i,s,f){i=i||{};var p=n(i);if(!p)throw new Error("could not get XHR object");p.onreadystatechange=t(r,p,s||e);var h=(i.type||"GET").toUpperCase(),d=i.contentType||l,_=c(i.url,h,i.data);f=u(d,h,i.data),p.open(h,_,!0);var v=a(d,i.headers);return o(v,p),p.send(f),p}var l="application/x-www-form-urlencoded",f={ajax:function(t){t=t||{};var n=t.error||e,r=t.success||e,i={readyState:0},o=s(t,function(t,e,o){if(i.status=e,i.responseText=t,i.statusText||(i.statusText=0!==e?o:"error"),i.readyState=4,e>=200&&300>e||304===e){var c=t;try{c=JSON.parse(t)}catch(u){}r(c,t,i)}else n(i,e,t)});return i.abort=function(){i.statusText="aborted",o.abort()},i}};return f}),e("client/lib/xhr",["p-promise","components/micrajax/micrajax","./function"],function(t,e,r){function i(t){return t?t:c?new c:void 0}function o(n,r,o,c){c=c||{};var u=t.defer();return e.ajax({type:n,url:r,data:o,contentType:c.contentType||"application/json",headers:c.headers,xhr:i(c.xhr),success:function(t){u.resolve(t)},error:function(t,n,e){u.reject(e)}}),u.promise}var c,u=r.partial;try{"undefined"!=typeof n&&(c=n("xhr2"))}catch(a){c=null}var s={get:u(o,"GET"),post:u(o,"POST")};return s}),e("client/token/api",["p-promise","client/lib/constants","client/lib/xhr"],function(t,n,e){function r(t,e){if(!t)throw new Error("clientId is required");this._clientId=t,e=e||{},this._clientSecret=e.clientSecret,this._oauthHost=e.oauthHost||n.DEFAULT_OAUTH_HOST}return r.prototype={tradeCode:function(n,r){if(!this._clientSecret)return t.reject(new Error("clientSecret is required"));if(!n)return t.reject(new Error("code is required"));var i=this._oauthHost+"/token";return e.post(i,{client_id:this._clientId,client_secret:this._clientSecret,code:n},r)},verifyToken:function(n,r){if(!n)return t.reject(new Error("token is required"));var i=this._oauthHost+"/verify";return e.post(i,{token:n},r)},destroyToken:function(n,r){if(!this._clientSecret)return t.reject(new Error("clientSecret is required"));if(!n)return t.reject(new Error("token is required"));var i=this._oauthHost+"/destroy";return e.post(i,{client_secret:this._clientSecret,token:n},r)}},r}),e("client/profile/api",["p-promise","client/lib/constants","client/lib/xhr","client/lib/object"],function(t,n,e,r){function i(t,e){if(!t)throw new Error("clientId is required");this._clientId=t,e=e||{},this._profileHost=e.profileHost||n.DEFAULT_PROFILE_HOST}return i.prototype={fetch:function(t,n){if(!t)throw new Error("token is required");var i=r.extend({headers:{Authorization:"Bearer "+t}},n),o=this;return e.get(o._profileHost+"/profile",{},i).then(function(t){return o._profileData=t,t})},all:function(){return this._profileData}},i}),e("client/FxaRelierClient",["client/auth/api","client/token/api","client/profile/api"],function(t,n,e){function r(r,i){if(!r)throw new Error("clientId is required");this.auth=new t(r,i),this.token=new n(r,i),this.profile=new e(r,i)}return r.prototype={version:"0.0.0",auth:null},r}),t("client/FxaRelierClient")});

}).call(this,require('_process'))
},{"_process":4}],2:[function(require,module,exports){
var fxc = require('./lib/connect.js');

window.FoxBoxConnect = fxc.FoxBoxConnect;

},{"./lib/connect.js":3}],3:[function(require,module,exports){
'use strict';

var FxaRelierClient =
  require('../bower_components/fxa-relier-client/fxa-relier-client.min.js');

function required(value, name) {
  if (!value) {
    throw new Error('Missing ' + name);
  }
}

/**
 * @class FoxBoxConnect
 * @constructor
 * @param {String} fxaClientId Firefox Accounts client ID.
 * @param {String} fxaClientSecret Firefox Accounts client secret.
 */

var FoxBoxConnect = function(fxaClientId, fxaClientSecret) {
  required(fxaClientId);
  required(fxaClientSecret);

  this.fxaClient = new FxaRelierClient(fxaClientId, {
    clientSecret: fxaClientSecret
  });
};

FoxBoxConnect.prototype.start = function() {

};

FoxBoxConnect.prototype.stop = function() {
};

FoxBoxConnect.prototype.postMessage = function() {
};

FoxBoxConnect.prototype.onMessage = function() {
};

module.exports = {
  FoxBoxConnect: FoxBoxConnect
};

},{"../bower_components/fxa-relier-client/fxa-relier-client.min.js":1}],4:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[2]);
