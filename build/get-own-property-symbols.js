/*! (C) WebReflection Mit Style License */
(function(e,t){"use strict";if(t in e)return;var n,r=typeof global==typeof r?window:global,i=0,s=""+Math.random(),o="__symbol:",u=o.length,a="__symbol@@"+s,f="defineProperty",l="defineProperties",c="getOwnPropertyNames",h="getOwnPropertyDescriptor",p="propertyIsEnumerable",d=e[c],v=e[h],m=e.create,g=e.keys,y=e[f],b=e[l],w=v(e,c),E=e.prototype,S=E.hasOwnProperty,x=E[p],T=Array.prototype.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},N=function(e,t,n){S.call(e,a)||y(e,a,{enumerable:!1,configurable:!1,writable:!1,value:{}}),e[a]["@@"+t]=n},C=function(e,t){var n=m(e);return d(t).forEach(function(e){M.call(t,e)&&P(n,e,t[e])}),n},k=function(e){var t=m(e);return t.enumerable=!1,t},L=function(){},A=function(e){return e!==a&&e.slice(0,u)!==o},O=function(e){return e!==a&&e.slice(0,u)===o},M=function j(e){var t=""+e;return O(t)?S.call(this,t)&&this[a]["@@"+t]:x.call(this,e)},_=function(e){var t={enumerable:!1,configurable:!0,get:L,set:function(t){n(this,e,{enumerable:!1,configurable:!0,writable:!0,value:t}),N(this,e,!0)}};return y(E,e,t),e},D=function(t){if(this&&this!==r)throw new TypeError("Symbol is not a constructor");return _(o.concat(t||"",s,++i))},P=function(t,r,i){var s=""+r;return O(s)?(n(t,s,i.enumerable?k(i):i),N(t,s,!!i.enumerable)):y(t,r,i),t},H=function(t){return d(t).filter(O)};w.value=P,y(e,f,w),w.value=H,y(e,t,w),w.value=function(t){return d(t).filter(A)},y(e,c,w),w.value=function F(e,t){var n=H(t);return n.length?g(t).concat(n).forEach(function(n){M.call(t,n)&&P(e,n,t[n])}):F(e,t),e},y(e,l,w),w.value=M,y(E,p,w),w.value=D,y(r,"Symbol",w),w.value=function(e){var t=o.concat(o,e,s);return t in E?t:_(t)},y(D,"for",w),w.value=function(e){return o+o===e.slice(0,u*2)&&-1<T.call(d(E),e)?e.slice(u*2,-s.length):void 0},y(D,"keyFor",w),w.value=function(t,n){var r=v(t,n);return r&&O(n)&&(r.enumerable=M.call(t,n)),r},y(e,h,w),w.value=function I(e,t){return arguments.length===1?I(e):C(e,t)},y(e,"create",w);try{n=m(y({},o,{get:function(){return y(this,o,{value:!1})[o]}}))[o]||y}catch(B){n=function(e,t,n){var r=v(E,t);delete E[t],y(e,t,n),y(E,t,r)}}["iterator","match","replace","search","split","hasInstance","isConcatSpreadable","unscopables","species","toPrimitive","toStringTag"].forEach(function(e){y(D,e,{value:D(e)})})})(Object,"getOwnPropertySymbols"),function(e,t,n){t[e]||(t[e]=function(){var e=0,t=this;return{next:function(){var r=t.length<=e;return r?{done:r}:{done:r,value:t[e++]}}}}),n[e]||(n[e]=function(){var e=String.fromCodePoint,t=this,n=0,r=t.length;return{next:function(){var o=r<=n,u=o?"":e(t.codePointAt(n));return n+=u.length,o?{done:o}:{done:o,value:u}}}})}(Symbol.iterator,Array.prototype,String.prototype);