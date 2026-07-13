(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function h0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var p0={exports:{}},Zl={},m0={exports:{}},rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eo=Symbol.for("react.element"),Tv=Symbol.for("react.portal"),Cv=Symbol.for("react.fragment"),Av=Symbol.for("react.strict_mode"),Rv=Symbol.for("react.profiler"),Nv=Symbol.for("react.provider"),Pv=Symbol.for("react.context"),Lv=Symbol.for("react.forward_ref"),Dv=Symbol.for("react.suspense"),Iv=Symbol.for("react.memo"),Uv=Symbol.for("react.lazy"),jh=Symbol.iterator;function Fv(t){return t===null||typeof t!="object"?null:(t=jh&&t[jh]||t["@@iterator"],typeof t=="function"?t:null)}var g0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x0=Object.assign,v0={};function Ks(t,e,n){this.props=t,this.context=e,this.refs=v0,this.updater=n||g0}Ks.prototype.isReactComponent={};Ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function _0(){}_0.prototype=Ks.prototype;function vf(t,e,n){this.props=t,this.context=e,this.refs=v0,this.updater=n||g0}var _f=vf.prototype=new _0;_f.constructor=vf;x0(_f,Ks.prototype);_f.isPureReactComponent=!0;var Wh=Array.isArray,y0=Object.prototype.hasOwnProperty,yf={current:null},S0={key:!0,ref:!0,__self:!0,__source:!0};function M0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)y0.call(e,i)&&!S0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];r.children=c}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:eo,type:t,key:s,ref:a,props:r,_owner:yf.current}}function kv(t,e){return{$$typeof:eo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Sf(t){return typeof t=="object"&&t!==null&&t.$$typeof===eo}function Ov(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xh=/\/+/g;function yc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ov(""+t.key):e.toString(36)}function el(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case eo:case Tv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+yc(a,0):i,Wh(r)?(n="",t!=null&&(n=t.replace(Xh,"$&/")+"/"),el(r,e,n,"",function(u){return u})):r!=null&&(Sf(r)&&(r=kv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Xh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Wh(t))for(var o=0;o<t.length;o++){s=t[o];var c=i+yc(s,o);a+=el(s,e,n,c,r)}else if(c=Fv(t),typeof c=="function")for(t=c.call(t),o=0;!(s=t.next()).done;)s=s.value,c=i+yc(s,o++),a+=el(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function fo(t,e,n){if(t==null)return t;var i=[],r=0;return el(t,i,"","",function(s){return e.call(n,s,r++)}),i}function zv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var cn={current:null},tl={transition:null},Bv={ReactCurrentDispatcher:cn,ReactCurrentBatchConfig:tl,ReactCurrentOwner:yf};function w0(){throw Error("act(...) is not supported in production builds of React.")}rt.Children={map:fo,forEach:function(t,e,n){fo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fo(t,function(){e++}),e},toArray:function(t){return fo(t,function(e){return e})||[]},only:function(t){if(!Sf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};rt.Component=Ks;rt.Fragment=Cv;rt.Profiler=Rv;rt.PureComponent=vf;rt.StrictMode=Av;rt.Suspense=Dv;rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bv;rt.act=w0;rt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=x0({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=yf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(c in e)y0.call(e,c)&&!S0.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&o!==void 0?o[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:eo,type:t.type,key:r,ref:s,props:i,_owner:a}};rt.createContext=function(t){return t={$$typeof:Pv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Nv,_context:t},t.Consumer=t};rt.createElement=M0;rt.createFactory=function(t){var e=M0.bind(null,t);return e.type=t,e};rt.createRef=function(){return{current:null}};rt.forwardRef=function(t){return{$$typeof:Lv,render:t}};rt.isValidElement=Sf;rt.lazy=function(t){return{$$typeof:Uv,_payload:{_status:-1,_result:t},_init:zv}};rt.memo=function(t,e){return{$$typeof:Iv,type:t,compare:e===void 0?null:e}};rt.startTransition=function(t){var e=tl.transition;tl.transition={};try{t()}finally{tl.transition=e}};rt.unstable_act=w0;rt.useCallback=function(t,e){return cn.current.useCallback(t,e)};rt.useContext=function(t){return cn.current.useContext(t)};rt.useDebugValue=function(){};rt.useDeferredValue=function(t){return cn.current.useDeferredValue(t)};rt.useEffect=function(t,e){return cn.current.useEffect(t,e)};rt.useId=function(){return cn.current.useId()};rt.useImperativeHandle=function(t,e,n){return cn.current.useImperativeHandle(t,e,n)};rt.useInsertionEffect=function(t,e){return cn.current.useInsertionEffect(t,e)};rt.useLayoutEffect=function(t,e){return cn.current.useLayoutEffect(t,e)};rt.useMemo=function(t,e){return cn.current.useMemo(t,e)};rt.useReducer=function(t,e,n){return cn.current.useReducer(t,e,n)};rt.useRef=function(t){return cn.current.useRef(t)};rt.useState=function(t){return cn.current.useState(t)};rt.useSyncExternalStore=function(t,e,n){return cn.current.useSyncExternalStore(t,e,n)};rt.useTransition=function(){return cn.current.useTransition()};rt.version="18.3.1";m0.exports=rt;var ue=m0.exports;const Vv=h0(ue);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hv=ue,Gv=Symbol.for("react.element"),jv=Symbol.for("react.fragment"),Wv=Object.prototype.hasOwnProperty,Xv=Hv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qv={key:!0,ref:!0,__self:!0,__source:!0};function E0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Wv.call(e,i)&&!qv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Gv,type:t,key:s,ref:a,props:r,_owner:Xv.current}}Zl.Fragment=jv;Zl.jsx=E0;Zl.jsxs=E0;p0.exports=Zl;var l=p0.exports,Pu={},b0={exports:{}},Nn={},T0={exports:{}},C0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,w){var L=b.length;b.push(w);e:for(;0<L;){var O=L-1>>>1,U=b[O];if(0<r(U,w))b[O]=w,b[L]=U,L=O;else break e}}function n(b){return b.length===0?null:b[0]}function i(b){if(b.length===0)return null;var w=b[0],L=b.pop();if(L!==w){b[0]=L;e:for(var O=0,U=b.length,oe=U>>>1;O<oe;){var ce=2*(O+1)-1,se=b[ce],k=ce+1,$=b[k];if(0>r(se,L))k<U&&0>r($,se)?(b[O]=$,b[k]=L,O=k):(b[O]=se,b[ce]=L,O=ce);else if(k<U&&0>r($,L))b[O]=$,b[k]=L,O=k;else break e}}return w}function r(b,w){var L=b.sortIndex-w.sortIndex;return L!==0?L:b.id-w.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var c=[],u=[],h=1,p=null,f=3,m=!1,_=!1,E=!1,x=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function M(b){for(var w=n(u);w!==null;){if(w.callback===null)i(u);else if(w.startTime<=b)i(u),w.sortIndex=w.expirationTime,e(c,w);else break;w=n(u)}}function S(b){if(E=!1,M(b),!_)if(n(c)!==null)_=!0,Q(T);else{var w=n(u);w!==null&&q(S,w.startTime-b)}}function T(b,w){_=!1,E&&(E=!1,d(g),g=-1),m=!0;var L=f;try{for(M(w),p=n(c);p!==null&&(!(p.expirationTime>w)||b&&!I());){var O=p.callback;if(typeof O=="function"){p.callback=null,f=p.priorityLevel;var U=O(p.expirationTime<=w);w=t.unstable_now(),typeof U=="function"?p.callback=U:p===n(c)&&i(c),M(w)}else i(c);p=n(c)}if(p!==null)var oe=!0;else{var ce=n(u);ce!==null&&q(S,ce.startTime-w),oe=!1}return oe}finally{p=null,f=L,m=!1}}var N=!1,P=null,g=-1,R=5,A=-1;function I(){return!(t.unstable_now()-A<R)}function z(){if(P!==null){var b=t.unstable_now();A=b;var w=!0;try{w=P(!0,b)}finally{w?W():(N=!1,P=null)}}else N=!1}var W;if(typeof v=="function")W=function(){v(z)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,V=ne.port2;ne.port1.onmessage=z,W=function(){V.postMessage(null)}}else W=function(){x(z,0)};function Q(b){P=b,N||(N=!0,W())}function q(b,w){g=x(function(){b(t.unstable_now())},w)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,Q(T))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(b){switch(f){case 1:case 2:case 3:var w=3;break;default:w=f}var L=f;f=w;try{return b()}finally{f=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,w){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var L=f;f=b;try{return w()}finally{f=L}},t.unstable_scheduleCallback=function(b,w,L){var O=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?O+L:O):L=O,b){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=L+U,b={id:h++,callback:w,priorityLevel:b,startTime:L,expirationTime:U,sortIndex:-1},L>O?(b.sortIndex=L,e(u,b),n(c)===null&&b===n(u)&&(E?(d(g),g=-1):E=!0,q(S,L-O))):(b.sortIndex=U,e(c,b),_||m||(_=!0,Q(T))),b},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(b){var w=f;return function(){var L=f;f=w;try{return b.apply(this,arguments)}finally{f=L}}}})(C0);T0.exports=C0;var $v=T0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yv=ue,Rn=$v;function _e(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var A0=new Set,Da={};function $r(t,e){Os(t,e),Os(t+"Capture",e)}function Os(t,e){for(Da[t]=e,t=0;t<e.length;t++)A0.add(e[t])}var Di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lu=Object.prototype.hasOwnProperty,Kv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qh={},$h={};function Zv(t){return Lu.call($h,t)?!0:Lu.call(qh,t)?!1:Kv.test(t)?$h[t]=!0:(qh[t]=!0,!1)}function Qv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Jv(t,e,n,i){if(e===null||typeof e>"u"||Qv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function un(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$t[t]=new un(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$t[e]=new un(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$t[t]=new un(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$t[t]=new un(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$t[t]=new un(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$t[t]=new un(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$t[t]=new un(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$t[t]=new un(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$t[t]=new un(t,5,!1,t.toLowerCase(),null,!1,!1)});var Mf=/[\-:]([a-z])/g;function wf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Mf,wf);$t[e]=new un(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Mf,wf);$t[e]=new un(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Mf,wf);$t[e]=new un(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$t[t]=new un(t,1,!1,t.toLowerCase(),null,!1,!1)});$t.xlinkHref=new un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$t[t]=new un(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ef(t,e,n,i){var r=$t.hasOwnProperty(e)?$t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Jv(e,n,r,i)&&(n=null),i||r===null?Zv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var zi=Yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ho=Symbol.for("react.element"),xs=Symbol.for("react.portal"),vs=Symbol.for("react.fragment"),bf=Symbol.for("react.strict_mode"),Du=Symbol.for("react.profiler"),R0=Symbol.for("react.provider"),N0=Symbol.for("react.context"),Tf=Symbol.for("react.forward_ref"),Iu=Symbol.for("react.suspense"),Uu=Symbol.for("react.suspense_list"),Cf=Symbol.for("react.memo"),Zi=Symbol.for("react.lazy"),P0=Symbol.for("react.offscreen"),Yh=Symbol.iterator;function ta(t){return t===null||typeof t!="object"?null:(t=Yh&&t[Yh]||t["@@iterator"],typeof t=="function"?t:null)}var At=Object.assign,Sc;function ga(t){if(Sc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Sc=e&&e[1]||""}return`
`+Sc+t}var Mc=!1;function wc(t,e){if(!t||Mc)return"";Mc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=o);break}}}finally{Mc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ga(t):""}function e_(t){switch(t.tag){case 5:return ga(t.type);case 16:return ga("Lazy");case 13:return ga("Suspense");case 19:return ga("SuspenseList");case 0:case 2:case 15:return t=wc(t.type,!1),t;case 11:return t=wc(t.type.render,!1),t;case 1:return t=wc(t.type,!0),t;default:return""}}function Fu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vs:return"Fragment";case xs:return"Portal";case Du:return"Profiler";case bf:return"StrictMode";case Iu:return"Suspense";case Uu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case N0:return(t.displayName||"Context")+".Consumer";case R0:return(t._context.displayName||"Context")+".Provider";case Tf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cf:return e=t.displayName||null,e!==null?e:Fu(t.type)||"Memo";case Zi:e=t._payload,t=t._init;try{return Fu(t(e))}catch{}}return null}function t_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fu(e);case 8:return e===bf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function L0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function n_(t){var e=L0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function po(t){t._valueTracker||(t._valueTracker=n_(t))}function D0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=L0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function _l(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ku(t,e){var n=e.checked;return At({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Kh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function I0(t,e){e=e.checked,e!=null&&Ef(t,"checked",e,!1)}function Ou(t,e){I0(t,e);var n=pr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zu(t,e.type,n):e.hasOwnProperty("defaultValue")&&zu(t,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Zh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zu(t,e,n){(e!=="number"||_l(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var xa=Array.isArray;function Rs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+pr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Bu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(_e(91));return At({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Qh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(_e(92));if(xa(n)){if(1<n.length)throw Error(_e(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pr(n)}}function U0(t,e){var n=pr(e.value),i=pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Jh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function F0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?F0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var mo,k0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(mo=mo||document.createElement("div"),mo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=mo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ia(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ma={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},i_=["Webkit","ms","Moz","O"];Object.keys(Ma).forEach(function(t){i_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ma[e]=Ma[t]})});function O0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ma.hasOwnProperty(t)&&Ma[t]?(""+e).trim():e+"px"}function z0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=O0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var r_=At({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Hu(t,e){if(e){if(r_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(_e(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(_e(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(_e(61))}if(e.style!=null&&typeof e.style!="object")throw Error(_e(62))}}function Gu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ju=null;function Af(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wu=null,Ns=null,Ps=null;function ep(t){if(t=io(t)){if(typeof Wu!="function")throw Error(_e(280));var e=t.stateNode;e&&(e=nc(e),Wu(t.stateNode,t.type,e))}}function B0(t){Ns?Ps?Ps.push(t):Ps=[t]:Ns=t}function V0(){if(Ns){var t=Ns,e=Ps;if(Ps=Ns=null,ep(t),e)for(t=0;t<e.length;t++)ep(e[t])}}function H0(t,e){return t(e)}function G0(){}var Ec=!1;function j0(t,e,n){if(Ec)return t(e,n);Ec=!0;try{return H0(t,e,n)}finally{Ec=!1,(Ns!==null||Ps!==null)&&(G0(),V0())}}function Ua(t,e){var n=t.stateNode;if(n===null)return null;var i=nc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(_e(231,e,typeof n));return n}var Xu=!1;if(Di)try{var na={};Object.defineProperty(na,"passive",{get:function(){Xu=!0}}),window.addEventListener("test",na,na),window.removeEventListener("test",na,na)}catch{Xu=!1}function s_(t,e,n,i,r,s,a,o,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var wa=!1,yl=null,Sl=!1,qu=null,a_={onError:function(t){wa=!0,yl=t}};function o_(t,e,n,i,r,s,a,o,c){wa=!1,yl=null,s_.apply(a_,arguments)}function l_(t,e,n,i,r,s,a,o,c){if(o_.apply(this,arguments),wa){if(wa){var u=yl;wa=!1,yl=null}else throw Error(_e(198));Sl||(Sl=!0,qu=u)}}function Yr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function W0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function tp(t){if(Yr(t)!==t)throw Error(_e(188))}function c_(t){var e=t.alternate;if(!e){if(e=Yr(t),e===null)throw Error(_e(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return tp(r),t;if(s===i)return tp(r),e;s=s.sibling}throw Error(_e(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(_e(189))}}if(n.alternate!==i)throw Error(_e(190))}if(n.tag!==3)throw Error(_e(188));return n.stateNode.current===n?t:e}function X0(t){return t=c_(t),t!==null?q0(t):null}function q0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=q0(t);if(e!==null)return e;t=t.sibling}return null}var $0=Rn.unstable_scheduleCallback,np=Rn.unstable_cancelCallback,u_=Rn.unstable_shouldYield,d_=Rn.unstable_requestPaint,It=Rn.unstable_now,f_=Rn.unstable_getCurrentPriorityLevel,Rf=Rn.unstable_ImmediatePriority,Y0=Rn.unstable_UserBlockingPriority,Ml=Rn.unstable_NormalPriority,h_=Rn.unstable_LowPriority,K0=Rn.unstable_IdlePriority,Ql=null,fi=null;function p_(t){if(fi&&typeof fi.onCommitFiberRoot=="function")try{fi.onCommitFiberRoot(Ql,t,void 0,(t.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:x_,m_=Math.log,g_=Math.LN2;function x_(t){return t>>>=0,t===0?32:31-(m_(t)/g_|0)|0}var go=64,xo=4194304;function va(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=va(o):(s&=a,s!==0&&(i=va(s)))}else a=n&~r,a!==0?i=va(a):s!==0&&(i=va(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Jn(e),r=1<<n,i|=t[n],e&=~r;return i}function v_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function __(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Jn(s),o=1<<a,c=r[a];c===-1?(!(o&n)||o&i)&&(r[a]=v_(o,e)):c<=e&&(t.expiredLanes|=o),s&=~o}}function $u(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Z0(){var t=go;return go<<=1,!(go&4194240)&&(go=64),t}function bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function to(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jn(e),t[e]=n}function y_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Nf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var mt=0;function Q0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var J0,Pf,eg,tg,ng,Yu=!1,vo=[],sr=null,ar=null,or=null,Fa=new Map,ka=new Map,Ji=[],S_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ip(t,e){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":Fa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ka.delete(e.pointerId)}}function ia(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=io(e),e!==null&&Pf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function M_(t,e,n,i,r){switch(e){case"focusin":return sr=ia(sr,t,e,n,i,r),!0;case"dragenter":return ar=ia(ar,t,e,n,i,r),!0;case"mouseover":return or=ia(or,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Fa.set(s,ia(Fa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ka.set(s,ia(ka.get(s)||null,t,e,n,i,r)),!0}return!1}function ig(t){var e=Lr(t.target);if(e!==null){var n=Yr(e);if(n!==null){if(e=n.tag,e===13){if(e=W0(n),e!==null){t.blockedOn=e,ng(t.priority,function(){eg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ku(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ju=i,n.target.dispatchEvent(i),ju=null}else return e=io(n),e!==null&&Pf(e),t.blockedOn=n,!1;e.shift()}return!0}function rp(t,e,n){nl(t)&&n.delete(e)}function w_(){Yu=!1,sr!==null&&nl(sr)&&(sr=null),ar!==null&&nl(ar)&&(ar=null),or!==null&&nl(or)&&(or=null),Fa.forEach(rp),ka.forEach(rp)}function ra(t,e){t.blockedOn===e&&(t.blockedOn=null,Yu||(Yu=!0,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,w_)))}function Oa(t){function e(r){return ra(r,t)}if(0<vo.length){ra(vo[0],t);for(var n=1;n<vo.length;n++){var i=vo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(sr!==null&&ra(sr,t),ar!==null&&ra(ar,t),or!==null&&ra(or,t),Fa.forEach(e),ka.forEach(e),n=0;n<Ji.length;n++)i=Ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ji.length&&(n=Ji[0],n.blockedOn===null);)ig(n),n.blockedOn===null&&Ji.shift()}var Ls=zi.ReactCurrentBatchConfig,El=!0;function E_(t,e,n,i){var r=mt,s=Ls.transition;Ls.transition=null;try{mt=1,Lf(t,e,n,i)}finally{mt=r,Ls.transition=s}}function b_(t,e,n,i){var r=mt,s=Ls.transition;Ls.transition=null;try{mt=4,Lf(t,e,n,i)}finally{mt=r,Ls.transition=s}}function Lf(t,e,n,i){if(El){var r=Ku(t,e,n,i);if(r===null)Uc(t,e,i,bl,n),ip(t,i);else if(M_(r,t,e,n,i))i.stopPropagation();else if(ip(t,i),e&4&&-1<S_.indexOf(t)){for(;r!==null;){var s=io(r);if(s!==null&&J0(s),s=Ku(t,e,n,i),s===null&&Uc(t,e,i,bl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Uc(t,e,i,null,n)}}var bl=null;function Ku(t,e,n,i){if(bl=null,t=Af(i),t=Lr(t),t!==null)if(e=Yr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=W0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return bl=t,null}function rg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(f_()){case Rf:return 1;case Y0:return 4;case Ml:case h_:return 16;case K0:return 536870912;default:return 16}default:return 16}}var nr=null,Df=null,il=null;function sg(){if(il)return il;var t,e=Df,n=e.length,i,r="value"in nr?nr.value:nr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return il=r.slice(t,1<i?1-i:void 0)}function rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _o(){return!0}function sp(){return!1}function Pn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_o:sp,this.isPropagationStopped=sp,this}return At(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),e}var Zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},If=Pn(Zs),no=At({},Zs,{view:0,detail:0}),T_=Pn(no),Tc,Cc,sa,Jl=At({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==sa&&(sa&&t.type==="mousemove"?(Tc=t.screenX-sa.screenX,Cc=t.screenY-sa.screenY):Cc=Tc=0,sa=t),Tc)},movementY:function(t){return"movementY"in t?t.movementY:Cc}}),ap=Pn(Jl),C_=At({},Jl,{dataTransfer:0}),A_=Pn(C_),R_=At({},no,{relatedTarget:0}),Ac=Pn(R_),N_=At({},Zs,{animationName:0,elapsedTime:0,pseudoElement:0}),P_=Pn(N_),L_=At({},Zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),D_=Pn(L_),I_=At({},Zs,{data:0}),op=Pn(I_),U_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},F_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function O_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=k_[t])?!!e[t]:!1}function Uf(){return O_}var z_=At({},no,{key:function(t){if(t.key){var e=U_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?F_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uf,charCode:function(t){return t.type==="keypress"?rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),B_=Pn(z_),V_=At({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lp=Pn(V_),H_=At({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uf}),G_=Pn(H_),j_=At({},Zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),W_=Pn(j_),X_=At({},Jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),q_=Pn(X_),$_=[9,13,27,32],Ff=Di&&"CompositionEvent"in window,Ea=null;Di&&"documentMode"in document&&(Ea=document.documentMode);var Y_=Di&&"TextEvent"in window&&!Ea,ag=Di&&(!Ff||Ea&&8<Ea&&11>=Ea),cp=" ",up=!1;function og(t,e){switch(t){case"keyup":return $_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _s=!1;function K_(t,e){switch(t){case"compositionend":return lg(e);case"keypress":return e.which!==32?null:(up=!0,cp);case"textInput":return t=e.data,t===cp&&up?null:t;default:return null}}function Z_(t,e){if(_s)return t==="compositionend"||!Ff&&og(t,e)?(t=sg(),il=Df=nr=null,_s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ag&&e.locale!=="ko"?null:e.data;default:return null}}var Q_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Q_[t.type]:e==="textarea"}function cg(t,e,n,i){B0(i),e=Tl(e,"onChange"),0<e.length&&(n=new If("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ba=null,za=null;function J_(t){yg(t,0)}function ec(t){var e=Ms(t);if(D0(e))return t}function ey(t,e){if(t==="change")return e}var ug=!1;if(Di){var Rc;if(Di){var Nc="oninput"in document;if(!Nc){var fp=document.createElement("div");fp.setAttribute("oninput","return;"),Nc=typeof fp.oninput=="function"}Rc=Nc}else Rc=!1;ug=Rc&&(!document.documentMode||9<document.documentMode)}function hp(){ba&&(ba.detachEvent("onpropertychange",dg),za=ba=null)}function dg(t){if(t.propertyName==="value"&&ec(za)){var e=[];cg(e,za,t,Af(t)),j0(J_,e)}}function ty(t,e,n){t==="focusin"?(hp(),ba=e,za=n,ba.attachEvent("onpropertychange",dg)):t==="focusout"&&hp()}function ny(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ec(za)}function iy(t,e){if(t==="click")return ec(e)}function ry(t,e){if(t==="input"||t==="change")return ec(e)}function sy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ti=typeof Object.is=="function"?Object.is:sy;function Ba(t,e){if(ti(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Lu.call(e,r)||!ti(t[r],e[r]))return!1}return!0}function pp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function mp(t,e){var n=pp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=pp(n)}}function fg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?fg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hg(){for(var t=window,e=_l();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=_l(t.document)}return e}function kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ay(t){var e=hg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&fg(n.ownerDocument.documentElement,n)){if(i!==null&&kf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=mp(n,s);var a=mp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oy=Di&&"documentMode"in document&&11>=document.documentMode,ys=null,Zu=null,Ta=null,Qu=!1;function gp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qu||ys==null||ys!==_l(i)||(i=ys,"selectionStart"in i&&kf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ta&&Ba(Ta,i)||(Ta=i,i=Tl(Zu,"onSelect"),0<i.length&&(e=new If("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ys)))}function yo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ss={animationend:yo("Animation","AnimationEnd"),animationiteration:yo("Animation","AnimationIteration"),animationstart:yo("Animation","AnimationStart"),transitionend:yo("Transition","TransitionEnd")},Pc={},pg={};Di&&(pg=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function tc(t){if(Pc[t])return Pc[t];if(!Ss[t])return t;var e=Ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in pg)return Pc[t]=e[n];return t}var mg=tc("animationend"),gg=tc("animationiteration"),xg=tc("animationstart"),vg=tc("transitionend"),_g=new Map,xp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){_g.set(t,e),$r(e,[t])}for(var Lc=0;Lc<xp.length;Lc++){var Dc=xp[Lc],ly=Dc.toLowerCase(),cy=Dc[0].toUpperCase()+Dc.slice(1);vr(ly,"on"+cy)}vr(mg,"onAnimationEnd");vr(gg,"onAnimationIteration");vr(xg,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(vg,"onTransitionEnd");Os("onMouseEnter",["mouseout","mouseover"]);Os("onMouseLeave",["mouseout","mouseover"]);Os("onPointerEnter",["pointerout","pointerover"]);Os("onPointerLeave",["pointerout","pointerover"]);$r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$r("onBeforeInput",["compositionend","keypress","textInput","paste"]);$r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uy=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function vp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,l_(i,e,void 0,t),t.currentTarget=null}function yg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==s&&r.isPropagationStopped())break e;vp(r,o,u),s=c}else for(a=0;a<i.length;a++){if(o=i[a],c=o.instance,u=o.currentTarget,o=o.listener,c!==s&&r.isPropagationStopped())break e;vp(r,o,u),s=c}}}if(Sl)throw t=qu,Sl=!1,qu=null,t}function Mt(t,e){var n=e[id];n===void 0&&(n=e[id]=new Set);var i=t+"__bubble";n.has(i)||(Sg(e,t,2,!1),n.add(i))}function Ic(t,e,n){var i=0;e&&(i|=4),Sg(n,t,i,e)}var So="_reactListening"+Math.random().toString(36).slice(2);function Va(t){if(!t[So]){t[So]=!0,A0.forEach(function(n){n!=="selectionchange"&&(uy.has(n)||Ic(n,!1,t),Ic(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[So]||(e[So]=!0,Ic("selectionchange",!1,e))}}function Sg(t,e,n,i){switch(rg(e)){case 1:var r=E_;break;case 4:r=b_;break;default:r=Lf}n=r.bind(null,e,n,t),r=void 0,!Xu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Uc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Lr(o),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}o=o.parentNode}}i=i.return}j0(function(){var u=s,h=Af(n),p=[];e:{var f=_g.get(t);if(f!==void 0){var m=If,_=t;switch(t){case"keypress":if(rl(n)===0)break e;case"keydown":case"keyup":m=B_;break;case"focusin":_="focus",m=Ac;break;case"focusout":_="blur",m=Ac;break;case"beforeblur":case"afterblur":m=Ac;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=A_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=G_;break;case mg:case gg:case xg:m=P_;break;case vg:m=W_;break;case"scroll":m=T_;break;case"wheel":m=q_;break;case"copy":case"cut":case"paste":m=D_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=lp}var E=(e&4)!==0,x=!E&&t==="scroll",d=E?f!==null?f+"Capture":null:f;E=[];for(var v=u,M;v!==null;){M=v;var S=M.stateNode;if(M.tag===5&&S!==null&&(M=S,d!==null&&(S=Ua(v,d),S!=null&&E.push(Ha(v,S,M)))),x)break;v=v.return}0<E.length&&(f=new m(f,_,null,n,h),p.push({event:f,listeners:E}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==ju&&(_=n.relatedTarget||n.fromElement)&&(Lr(_)||_[Ii]))break e;if((m||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?Lr(_):null,_!==null&&(x=Yr(_),_!==x||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(E=ap,S="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(E=lp,S="onPointerLeave",d="onPointerEnter",v="pointer"),x=m==null?f:Ms(m),M=_==null?f:Ms(_),f=new E(S,v+"leave",m,n,h),f.target=x,f.relatedTarget=M,S=null,Lr(h)===u&&(E=new E(d,v+"enter",_,n,h),E.target=M,E.relatedTarget=x,S=E),x=S,m&&_)t:{for(E=m,d=_,v=0,M=E;M;M=es(M))v++;for(M=0,S=d;S;S=es(S))M++;for(;0<v-M;)E=es(E),v--;for(;0<M-v;)d=es(d),M--;for(;v--;){if(E===d||d!==null&&E===d.alternate)break t;E=es(E),d=es(d)}E=null}else E=null;m!==null&&_p(p,f,m,E,!1),_!==null&&x!==null&&_p(p,x,_,E,!0)}}e:{if(f=u?Ms(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var T=ey;else if(dp(f))if(ug)T=ry;else{T=ny;var N=ty}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=iy);if(T&&(T=T(t,u))){cg(p,T,n,h);break e}N&&N(t,f,u),t==="focusout"&&(N=f._wrapperState)&&N.controlled&&f.type==="number"&&zu(f,"number",f.value)}switch(N=u?Ms(u):window,t){case"focusin":(dp(N)||N.contentEditable==="true")&&(ys=N,Zu=u,Ta=null);break;case"focusout":Ta=Zu=ys=null;break;case"mousedown":Qu=!0;break;case"contextmenu":case"mouseup":case"dragend":Qu=!1,gp(p,n,h);break;case"selectionchange":if(oy)break;case"keydown":case"keyup":gp(p,n,h)}var P;if(Ff)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else _s?og(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(ag&&n.locale!=="ko"&&(_s||g!=="onCompositionStart"?g==="onCompositionEnd"&&_s&&(P=sg()):(nr=h,Df="value"in nr?nr.value:nr.textContent,_s=!0)),N=Tl(u,g),0<N.length&&(g=new op(g,t,null,n,h),p.push({event:g,listeners:N}),P?g.data=P:(P=lg(n),P!==null&&(g.data=P)))),(P=Y_?K_(t,n):Z_(t,n))&&(u=Tl(u,"onBeforeInput"),0<u.length&&(h=new op("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=P))}yg(p,e)})}function Ha(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Tl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ua(t,n),s!=null&&i.unshift(Ha(t,s,r)),s=Ua(t,e),s!=null&&i.push(Ha(t,s,r))),t=t.return}return i}function es(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function _p(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,c=o.alternate,u=o.stateNode;if(c!==null&&c===i)break;o.tag===5&&u!==null&&(o=u,r?(c=Ua(n,s),c!=null&&a.unshift(Ha(n,c,o))):r||(c=Ua(n,s),c!=null&&a.push(Ha(n,c,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var dy=/\r\n?/g,fy=/\u0000|\uFFFD/g;function yp(t){return(typeof t=="string"?t:""+t).replace(dy,`
`).replace(fy,"")}function Mo(t,e,n){if(e=yp(e),yp(t)!==e&&n)throw Error(_e(425))}function Cl(){}var Ju=null,ed=null;function td(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nd=typeof setTimeout=="function"?setTimeout:void 0,hy=typeof clearTimeout=="function"?clearTimeout:void 0,Sp=typeof Promise=="function"?Promise:void 0,py=typeof queueMicrotask=="function"?queueMicrotask:typeof Sp<"u"?function(t){return Sp.resolve(null).then(t).catch(my)}:nd;function my(t){setTimeout(function(){throw t})}function Fc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Oa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Oa(e)}function lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Mp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),li="__reactFiber$"+Qs,Ga="__reactProps$"+Qs,Ii="__reactContainer$"+Qs,id="__reactEvents$"+Qs,gy="__reactListeners$"+Qs,xy="__reactHandles$"+Qs;function Lr(t){var e=t[li];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ii]||n[li]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Mp(t);t!==null;){if(n=t[li])return n;t=Mp(t)}return e}t=n,n=t.parentNode}return null}function io(t){return t=t[li]||t[Ii],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(_e(33))}function nc(t){return t[Ga]||null}var rd=[],ws=-1;function _r(t){return{current:t}}function wt(t){0>ws||(t.current=rd[ws],rd[ws]=null,ws--)}function yt(t,e){ws++,rd[ws]=t.current,t.current=e}var mr={},rn=_r(mr),mn=_r(!1),zr=mr;function zs(t,e){var n=t.type.contextTypes;if(!n)return mr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function gn(t){return t=t.childContextTypes,t!=null}function Al(){wt(mn),wt(rn)}function wp(t,e,n){if(rn.current!==mr)throw Error(_e(168));yt(rn,e),yt(mn,n)}function Mg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(_e(108,t_(t)||"Unknown",r));return At({},n,i)}function Rl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,zr=rn.current,yt(rn,t),yt(mn,mn.current),!0}function Ep(t,e,n){var i=t.stateNode;if(!i)throw Error(_e(169));n?(t=Mg(t,e,zr),i.__reactInternalMemoizedMergedChildContext=t,wt(mn),wt(rn),yt(rn,t)):wt(mn),yt(mn,n)}var Ti=null,ic=!1,kc=!1;function wg(t){Ti===null?Ti=[t]:Ti.push(t)}function vy(t){ic=!0,wg(t)}function yr(){if(!kc&&Ti!==null){kc=!0;var t=0,e=mt;try{var n=Ti;for(mt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ti=null,ic=!1}catch(r){throw Ti!==null&&(Ti=Ti.slice(t+1)),$0(Rf,yr),r}finally{mt=e,kc=!1}}return null}var Es=[],bs=0,Nl=null,Pl=0,Un=[],Fn=0,Br=null,Ci=1,Ai="";function Cr(t,e){Es[bs++]=Pl,Es[bs++]=Nl,Nl=t,Pl=e}function Eg(t,e,n){Un[Fn++]=Ci,Un[Fn++]=Ai,Un[Fn++]=Br,Br=t;var i=Ci;t=Ai;var r=32-Jn(i)-1;i&=~(1<<r),n+=1;var s=32-Jn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ci=1<<32-Jn(e)+r|n<<r|i,Ai=s+t}else Ci=1<<s|n<<r|i,Ai=t}function Of(t){t.return!==null&&(Cr(t,1),Eg(t,1,0))}function zf(t){for(;t===Nl;)Nl=Es[--bs],Es[bs]=null,Pl=Es[--bs],Es[bs]=null;for(;t===Br;)Br=Un[--Fn],Un[Fn]=null,Ai=Un[--Fn],Un[Fn]=null,Ci=Un[--Fn],Un[Fn]=null}var An=null,Cn=null,Et=!1,Yn=null;function bg(t,e){var n=On(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function bp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,An=t,Cn=lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,An=t,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Br!==null?{id:Ci,overflow:Ai}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=On(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,An=t,Cn=null,!0):!1;default:return!1}}function sd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ad(t){if(Et){var e=Cn;if(e){var n=e;if(!bp(t,e)){if(sd(t))throw Error(_e(418));e=lr(n.nextSibling);var i=An;e&&bp(t,e)?bg(i,n):(t.flags=t.flags&-4097|2,Et=!1,An=t)}}else{if(sd(t))throw Error(_e(418));t.flags=t.flags&-4097|2,Et=!1,An=t}}}function Tp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;An=t}function wo(t){if(t!==An)return!1;if(!Et)return Tp(t),Et=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!td(t.type,t.memoizedProps)),e&&(e=Cn)){if(sd(t))throw Tg(),Error(_e(418));for(;e;)bg(t,e),e=lr(e.nextSibling)}if(Tp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(_e(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Cn=lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Cn=null}}else Cn=An?lr(t.stateNode.nextSibling):null;return!0}function Tg(){for(var t=Cn;t;)t=lr(t.nextSibling)}function Bs(){Cn=An=null,Et=!1}function Bf(t){Yn===null?Yn=[t]:Yn.push(t)}var _y=zi.ReactCurrentBatchConfig;function aa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_e(309));var i=n.stateNode}if(!i)throw Error(_e(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(_e(284));if(!n._owner)throw Error(_e(290,t))}return t}function Eo(t,e){throw t=Object.prototype.toString.call(e),Error(_e(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Cp(t){var e=t._init;return e(t._payload)}function Cg(t){function e(d,v){if(t){var M=d.deletions;M===null?(d.deletions=[v],d.flags|=16):M.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=fr(d,v),d.index=0,d.sibling=null,d}function s(d,v,M){return d.index=M,t?(M=d.alternate,M!==null?(M=M.index,M<v?(d.flags|=2,v):M):(d.flags|=2,v)):(d.flags|=1048576,v)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,v,M,S){return v===null||v.tag!==6?(v=jc(M,d.mode,S),v.return=d,v):(v=r(v,M),v.return=d,v)}function c(d,v,M,S){var T=M.type;return T===vs?h(d,v,M.props.children,S,M.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Zi&&Cp(T)===v.type)?(S=r(v,M.props),S.ref=aa(d,v,M),S.return=d,S):(S=dl(M.type,M.key,M.props,null,d.mode,S),S.ref=aa(d,v,M),S.return=d,S)}function u(d,v,M,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==M.containerInfo||v.stateNode.implementation!==M.implementation?(v=Wc(M,d.mode,S),v.return=d,v):(v=r(v,M.children||[]),v.return=d,v)}function h(d,v,M,S,T){return v===null||v.tag!==7?(v=Or(M,d.mode,S,T),v.return=d,v):(v=r(v,M),v.return=d,v)}function p(d,v,M){if(typeof v=="string"&&v!==""||typeof v=="number")return v=jc(""+v,d.mode,M),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ho:return M=dl(v.type,v.key,v.props,null,d.mode,M),M.ref=aa(d,null,v),M.return=d,M;case xs:return v=Wc(v,d.mode,M),v.return=d,v;case Zi:var S=v._init;return p(d,S(v._payload),M)}if(xa(v)||ta(v))return v=Or(v,d.mode,M,null),v.return=d,v;Eo(d,v)}return null}function f(d,v,M,S){var T=v!==null?v.key:null;if(typeof M=="string"&&M!==""||typeof M=="number")return T!==null?null:o(d,v,""+M,S);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case ho:return M.key===T?c(d,v,M,S):null;case xs:return M.key===T?u(d,v,M,S):null;case Zi:return T=M._init,f(d,v,T(M._payload),S)}if(xa(M)||ta(M))return T!==null?null:h(d,v,M,S,null);Eo(d,M)}return null}function m(d,v,M,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(M)||null,o(v,d,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ho:return d=d.get(S.key===null?M:S.key)||null,c(v,d,S,T);case xs:return d=d.get(S.key===null?M:S.key)||null,u(v,d,S,T);case Zi:var N=S._init;return m(d,v,M,N(S._payload),T)}if(xa(S)||ta(S))return d=d.get(M)||null,h(v,d,S,T,null);Eo(v,S)}return null}function _(d,v,M,S){for(var T=null,N=null,P=v,g=v=0,R=null;P!==null&&g<M.length;g++){P.index>g?(R=P,P=null):R=P.sibling;var A=f(d,P,M[g],S);if(A===null){P===null&&(P=R);break}t&&P&&A.alternate===null&&e(d,P),v=s(A,v,g),N===null?T=A:N.sibling=A,N=A,P=R}if(g===M.length)return n(d,P),Et&&Cr(d,g),T;if(P===null){for(;g<M.length;g++)P=p(d,M[g],S),P!==null&&(v=s(P,v,g),N===null?T=P:N.sibling=P,N=P);return Et&&Cr(d,g),T}for(P=i(d,P);g<M.length;g++)R=m(P,d,g,M[g],S),R!==null&&(t&&R.alternate!==null&&P.delete(R.key===null?g:R.key),v=s(R,v,g),N===null?T=R:N.sibling=R,N=R);return t&&P.forEach(function(I){return e(d,I)}),Et&&Cr(d,g),T}function E(d,v,M,S){var T=ta(M);if(typeof T!="function")throw Error(_e(150));if(M=T.call(M),M==null)throw Error(_e(151));for(var N=T=null,P=v,g=v=0,R=null,A=M.next();P!==null&&!A.done;g++,A=M.next()){P.index>g?(R=P,P=null):R=P.sibling;var I=f(d,P,A.value,S);if(I===null){P===null&&(P=R);break}t&&P&&I.alternate===null&&e(d,P),v=s(I,v,g),N===null?T=I:N.sibling=I,N=I,P=R}if(A.done)return n(d,P),Et&&Cr(d,g),T;if(P===null){for(;!A.done;g++,A=M.next())A=p(d,A.value,S),A!==null&&(v=s(A,v,g),N===null?T=A:N.sibling=A,N=A);return Et&&Cr(d,g),T}for(P=i(d,P);!A.done;g++,A=M.next())A=m(P,d,g,A.value,S),A!==null&&(t&&A.alternate!==null&&P.delete(A.key===null?g:A.key),v=s(A,v,g),N===null?T=A:N.sibling=A,N=A);return t&&P.forEach(function(z){return e(d,z)}),Et&&Cr(d,g),T}function x(d,v,M,S){if(typeof M=="object"&&M!==null&&M.type===vs&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case ho:e:{for(var T=M.key,N=v;N!==null;){if(N.key===T){if(T=M.type,T===vs){if(N.tag===7){n(d,N.sibling),v=r(N,M.props.children),v.return=d,d=v;break e}}else if(N.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Zi&&Cp(T)===N.type){n(d,N.sibling),v=r(N,M.props),v.ref=aa(d,N,M),v.return=d,d=v;break e}n(d,N);break}else e(d,N);N=N.sibling}M.type===vs?(v=Or(M.props.children,d.mode,S,M.key),v.return=d,d=v):(S=dl(M.type,M.key,M.props,null,d.mode,S),S.ref=aa(d,v,M),S.return=d,d=S)}return a(d);case xs:e:{for(N=M.key;v!==null;){if(v.key===N)if(v.tag===4&&v.stateNode.containerInfo===M.containerInfo&&v.stateNode.implementation===M.implementation){n(d,v.sibling),v=r(v,M.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=Wc(M,d.mode,S),v.return=d,d=v}return a(d);case Zi:return N=M._init,x(d,v,N(M._payload),S)}if(xa(M))return _(d,v,M,S);if(ta(M))return E(d,v,M,S);Eo(d,M)}return typeof M=="string"&&M!==""||typeof M=="number"?(M=""+M,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,M),v.return=d,d=v):(n(d,v),v=jc(M,d.mode,S),v.return=d,d=v),a(d)):n(d,v)}return x}var Vs=Cg(!0),Ag=Cg(!1),Ll=_r(null),Dl=null,Ts=null,Vf=null;function Hf(){Vf=Ts=Dl=null}function Gf(t){var e=Ll.current;wt(Ll),t._currentValue=e}function od(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ds(t,e){Dl=t,Vf=Ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pn=!0),t.firstContext=null)}function Vn(t){var e=t._currentValue;if(Vf!==t)if(t={context:t,memoizedValue:e,next:null},Ts===null){if(Dl===null)throw Error(_e(308));Ts=t,Dl.dependencies={lanes:0,firstContext:t}}else Ts=Ts.next=t;return e}var Dr=null;function jf(t){Dr===null?Dr=[t]:Dr.push(t)}function Rg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,jf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ui(t,i)}function Ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qi=!1;function Wf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ng(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ni(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ft&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ui(t,n)}return r=i.interleaved,r===null?(e.next=e,jf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ui(t,n)}function sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Nf(t,n)}}function Ap(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Il(t,e,n,i){var r=t.updateQueue;Qi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var c=o,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=c))}if(s!==null){var p=r.baseState;a=0,h=u=c=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,E=o;switch(f=e,m=n,E.tag){case 1:if(_=E.payload,typeof _=="function"){p=_.call(m,p,f);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=E.payload,f=typeof _=="function"?_.call(m,p,f):_,f==null)break e;p=At({},p,f);break e;case 2:Qi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=m,c=p):h=h.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(c=p),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Hr|=a,t.lanes=a,t.memoizedState=p}}function Rp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(_e(191,r));r.call(i)}}}var ro={},hi=_r(ro),ja=_r(ro),Wa=_r(ro);function Ir(t){if(t===ro)throw Error(_e(174));return t}function Xf(t,e){switch(yt(Wa,e),yt(ja,t),yt(hi,ro),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Vu(e,t)}wt(hi),yt(hi,e)}function Hs(){wt(hi),wt(ja),wt(Wa)}function Pg(t){Ir(Wa.current);var e=Ir(hi.current),n=Vu(e,t.type);e!==n&&(yt(ja,t),yt(hi,n))}function qf(t){ja.current===t&&(wt(hi),wt(ja))}var bt=_r(0);function Ul(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Oc=[];function $f(){for(var t=0;t<Oc.length;t++)Oc[t]._workInProgressVersionPrimary=null;Oc.length=0}var al=zi.ReactCurrentDispatcher,zc=zi.ReactCurrentBatchConfig,Vr=0,Ct=null,kt=null,Ht=null,Fl=!1,Ca=!1,Xa=0,yy=0;function Kt(){throw Error(_e(321))}function Yf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ti(t[n],e[n]))return!1;return!0}function Kf(t,e,n,i,r,s){if(Vr=s,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,al.current=t===null||t.memoizedState===null?Ey:by,t=n(i,r),Ca){s=0;do{if(Ca=!1,Xa=0,25<=s)throw Error(_e(301));s+=1,Ht=kt=null,e.updateQueue=null,al.current=Ty,t=n(i,r)}while(Ca)}if(al.current=kl,e=kt!==null&&kt.next!==null,Vr=0,Ht=kt=Ct=null,Fl=!1,e)throw Error(_e(300));return t}function Zf(){var t=Xa!==0;return Xa=0,t}function ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?Ct.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function Hn(){if(kt===null){var t=Ct.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var e=Ht===null?Ct.memoizedState:Ht.next;if(e!==null)Ht=e,kt=t;else{if(t===null)throw Error(_e(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Ht===null?Ct.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function qa(t,e){return typeof e=="function"?e(t):e}function Bc(t){var e=Hn(),n=e.queue;if(n===null)throw Error(_e(311));n.lastRenderedReducer=t;var i=kt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,c=null,u=s;do{var h=u.lane;if((Vr&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=p,a=i):c=c.next=p,Ct.lanes|=h,Hr|=h}u=u.next}while(u!==null&&u!==s);c===null?a=i:c.next=o,ti(i,e.memoizedState)||(pn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ct.lanes|=s,Hr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vc(t){var e=Hn(),n=e.queue;if(n===null)throw Error(_e(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ti(s,e.memoizedState)||(pn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Lg(){}function Dg(t,e){var n=Ct,i=Hn(),r=e(),s=!ti(i.memoizedState,r);if(s&&(i.memoizedState=r,pn=!0),i=i.queue,Qf(Fg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ht!==null&&Ht.memoizedState.tag&1){if(n.flags|=2048,$a(9,Ug.bind(null,n,i,r,e),void 0,null),Gt===null)throw Error(_e(349));Vr&30||Ig(n,e,r)}return r}function Ig(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ug(t,e,n,i){e.value=n,e.getSnapshot=i,kg(e)&&Og(t)}function Fg(t,e,n){return n(function(){kg(e)&&Og(t)})}function kg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ti(t,n)}catch{return!0}}function Og(t){var e=Ui(t,1);e!==null&&ei(e,t,1,-1)}function Np(t){var e=ai();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:t},e.queue=t,t=t.dispatch=wy.bind(null,Ct,t),[e.memoizedState,t]}function $a(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function zg(){return Hn().memoizedState}function ol(t,e,n,i){var r=ai();Ct.flags|=t,r.memoizedState=$a(1|e,n,void 0,i===void 0?null:i)}function rc(t,e,n,i){var r=Hn();i=i===void 0?null:i;var s=void 0;if(kt!==null){var a=kt.memoizedState;if(s=a.destroy,i!==null&&Yf(i,a.deps)){r.memoizedState=$a(e,n,s,i);return}}Ct.flags|=t,r.memoizedState=$a(1|e,n,s,i)}function Pp(t,e){return ol(8390656,8,t,e)}function Qf(t,e){return rc(2048,8,t,e)}function Bg(t,e){return rc(4,2,t,e)}function Vg(t,e){return rc(4,4,t,e)}function Hg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Gg(t,e,n){return n=n!=null?n.concat([t]):null,rc(4,4,Hg.bind(null,e,t),n)}function Jf(){}function jg(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Yf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Wg(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Yf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Xg(t,e,n){return Vr&21?(ti(n,e)||(n=Z0(),Ct.lanes|=n,Hr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pn=!0),t.memoizedState=n)}function Sy(t,e){var n=mt;mt=n!==0&&4>n?n:4,t(!0);var i=zc.transition;zc.transition={};try{t(!1),e()}finally{mt=n,zc.transition=i}}function qg(){return Hn().memoizedState}function My(t,e,n){var i=dr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},$g(t))Yg(e,n);else if(n=Rg(t,e,n,i),n!==null){var r=on();ei(n,t,i,r),Kg(n,e,i)}}function wy(t,e,n){var i=dr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if($g(t))Yg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ti(o,a)){var c=e.interleaved;c===null?(r.next=r,jf(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=Rg(t,e,r,i),n!==null&&(r=on(),ei(n,t,i,r),Kg(n,e,i))}}function $g(t){var e=t.alternate;return t===Ct||e!==null&&e===Ct}function Yg(t,e){Ca=Fl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Kg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Nf(t,n)}}var kl={readContext:Vn,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},Ey={readContext:Vn,useCallback:function(t,e){return ai().memoizedState=[t,e===void 0?null:e],t},useContext:Vn,useEffect:Pp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ol(4194308,4,Hg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ol(4194308,4,t,e)},useInsertionEffect:function(t,e){return ol(4,2,t,e)},useMemo:function(t,e){var n=ai();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ai();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=My.bind(null,Ct,t),[i.memoizedState,t]},useRef:function(t){var e=ai();return t={current:t},e.memoizedState=t},useState:Np,useDebugValue:Jf,useDeferredValue:function(t){return ai().memoizedState=t},useTransition:function(){var t=Np(!1),e=t[0];return t=Sy.bind(null,t[1]),ai().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ct,r=ai();if(Et){if(n===void 0)throw Error(_e(407));n=n()}else{if(n=e(),Gt===null)throw Error(_e(349));Vr&30||Ig(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Pp(Fg.bind(null,i,s,t),[t]),i.flags|=2048,$a(9,Ug.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ai(),e=Gt.identifierPrefix;if(Et){var n=Ai,i=Ci;n=(i&~(1<<32-Jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Xa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=yy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},by={readContext:Vn,useCallback:jg,useContext:Vn,useEffect:Qf,useImperativeHandle:Gg,useInsertionEffect:Bg,useLayoutEffect:Vg,useMemo:Wg,useReducer:Bc,useRef:zg,useState:function(){return Bc(qa)},useDebugValue:Jf,useDeferredValue:function(t){var e=Hn();return Xg(e,kt.memoizedState,t)},useTransition:function(){var t=Bc(qa)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:Lg,useSyncExternalStore:Dg,useId:qg,unstable_isNewReconciler:!1},Ty={readContext:Vn,useCallback:jg,useContext:Vn,useEffect:Qf,useImperativeHandle:Gg,useInsertionEffect:Bg,useLayoutEffect:Vg,useMemo:Wg,useReducer:Vc,useRef:zg,useState:function(){return Vc(qa)},useDebugValue:Jf,useDeferredValue:function(t){var e=Hn();return kt===null?e.memoizedState=t:Xg(e,kt.memoizedState,t)},useTransition:function(){var t=Vc(qa)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:Lg,useSyncExternalStore:Dg,useId:qg,unstable_isNewReconciler:!1};function qn(t,e){if(t&&t.defaultProps){e=At({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ld(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:At({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var sc={isMounted:function(t){return(t=t._reactInternals)?Yr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=on(),r=dr(t),s=Ni(i,r);s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,r),e!==null&&(ei(e,t,r,i),sl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=on(),r=dr(t),s=Ni(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,r),e!==null&&(ei(e,t,r,i),sl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=on(),i=dr(t),r=Ni(n,i);r.tag=2,e!=null&&(r.callback=e),e=cr(t,r,i),e!==null&&(ei(e,t,i,n),sl(e,t,i))}};function Lp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ba(n,i)||!Ba(r,s):!0}function Zg(t,e,n){var i=!1,r=mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vn(s):(r=gn(e)?zr:rn.current,i=e.contextTypes,s=(i=i!=null)?zs(t,r):mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=sc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Dp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&sc.enqueueReplaceState(e,e.state,null)}function cd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Wf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Vn(s):(s=gn(e)?zr:rn.current,r.context=zs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ld(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&sc.enqueueReplaceState(r,r.state,null),Il(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Gs(t,e){try{var n="",i=e;do n+=e_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Hc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ud(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Cy=typeof WeakMap=="function"?WeakMap:Map;function Qg(t,e,n){n=Ni(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){zl||(zl=!0,yd=i),ud(t,e)},n}function Jg(t,e,n){n=Ni(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ud(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ud(t,e),typeof i!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Ip(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Cy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Vy.bind(null,t,e,n),e.then(t,t))}function Up(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Fp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ni(-1,1),e.tag=2,cr(n,e,1))),n.lanes|=1),t)}var Ay=zi.ReactCurrentOwner,pn=!1;function an(t,e,n,i){e.child=t===null?Ag(e,null,n,i):Vs(e,t.child,n,i)}function kp(t,e,n,i,r){n=n.render;var s=e.ref;return Ds(e,r),i=Kf(t,e,n,i,s,r),n=Zf(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(Et&&n&&Of(e),e.flags|=1,an(t,e,i,r),e.child)}function Op(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!oh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ex(t,e,s,i,r)):(t=dl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ba,n(a,i)&&t.ref===e.ref)return Fi(t,e,r)}return e.flags|=1,t=fr(s,i),t.ref=e.ref,t.return=e,e.child=t}function ex(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ba(s,i)&&t.ref===e.ref)if(pn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(pn=!0);else return e.lanes=t.lanes,Fi(t,e,r)}return dd(t,e,n,i,r)}function tx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},yt(As,bn),bn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,yt(As,bn),bn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,yt(As,bn),bn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,yt(As,bn),bn|=i;return an(t,e,r,n),e.child}function nx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function dd(t,e,n,i,r){var s=gn(n)?zr:rn.current;return s=zs(e,s),Ds(e,r),n=Kf(t,e,n,i,s,r),i=Zf(),t!==null&&!pn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(Et&&i&&Of(e),e.flags|=1,an(t,e,n,r),e.child)}function zp(t,e,n,i,r){if(gn(n)){var s=!0;Rl(e)}else s=!1;if(Ds(e,r),e.stateNode===null)ll(t,e),Zg(e,n,i),cd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Vn(u):(u=gn(n)?zr:rn.current,u=zs(e,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||c!==u)&&Dp(e,a,i,u),Qi=!1;var f=e.memoizedState;a.state=f,Il(e,i,a,r),c=e.memoizedState,o!==i||f!==c||mn.current||Qi?(typeof h=="function"&&(ld(e,n,h,i),c=e.memoizedState),(o=Qi||Lp(e,n,o,i,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Ng(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:qn(e.type,o),a.props=u,p=e.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Vn(c):(c=gn(n)?zr:rn.current,c=zs(e,c));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||f!==c)&&Dp(e,a,i,c),Qi=!1,f=e.memoizedState,a.state=f,Il(e,i,a,r);var _=e.memoizedState;o!==p||f!==_||mn.current||Qi?(typeof m=="function"&&(ld(e,n,m,i),_=e.memoizedState),(u=Qi||Lp(e,n,u,i,f,_,c)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=c,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return fd(t,e,n,i,s,r)}function fd(t,e,n,i,r,s){nx(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Ep(e,n,!1),Fi(t,e,s);i=e.stateNode,Ay.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Vs(e,t.child,null,s),e.child=Vs(e,null,o,s)):an(t,e,o,s),e.memoizedState=i.state,r&&Ep(e,n,!0),e.child}function ix(t){var e=t.stateNode;e.pendingContext?wp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wp(t,e.context,!1),Xf(t,e.containerInfo)}function Bp(t,e,n,i,r){return Bs(),Bf(r),e.flags|=256,an(t,e,n,i),e.child}var hd={dehydrated:null,treeContext:null,retryLane:0};function pd(t){return{baseLanes:t,cachePool:null,transitions:null}}function rx(t,e,n){var i=e.pendingProps,r=bt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),yt(bt,r&1),t===null)return ad(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=lc(a,i,0,null),t=Or(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=pd(n),e.memoizedState=hd,t):eh(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Ry(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=fr(r,c),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=fr(o,s):(s=Or(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?pd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=hd,i}return s=t.child,t=s.sibling,i=fr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function eh(t,e){return e=lc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function bo(t,e,n,i){return i!==null&&Bf(i),Vs(e,t.child,null,n),t=eh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ry(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Hc(Error(_e(422))),bo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=lc({mode:"visible",children:i.children},r,0,null),s=Or(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Vs(e,t.child,null,a),e.child.memoizedState=pd(a),e.memoizedState=hd,s);if(!(e.mode&1))return bo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(_e(419)),i=Hc(s,i,void 0),bo(t,e,a,i)}if(o=(a&t.childLanes)!==0,pn||o){if(i=Gt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ui(t,r),ei(i,t,r,-1))}return ah(),i=Hc(Error(_e(421))),bo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Hy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Cn=lr(r.nextSibling),An=e,Et=!0,Yn=null,t!==null&&(Un[Fn++]=Ci,Un[Fn++]=Ai,Un[Fn++]=Br,Ci=t.id,Ai=t.overflow,Br=e),e=eh(e,i.children),e.flags|=4096,e)}function Vp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),od(t.return,e,n)}function Gc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function sx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(an(t,e,i.children,n),i=bt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Vp(t,n,e);else if(t.tag===19)Vp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(yt(bt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ul(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Gc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ul(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Gc(e,!0,n,null,s);break;case"together":Gc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(_e(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ny(t,e,n){switch(e.tag){case 3:ix(e),Bs();break;case 5:Pg(e);break;case 1:gn(e.type)&&Rl(e);break;case 4:Xf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;yt(Ll,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(yt(bt,bt.current&1),e.flags|=128,null):n&e.child.childLanes?rx(t,e,n):(yt(bt,bt.current&1),t=Fi(t,e,n),t!==null?t.sibling:null);yt(bt,bt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return sx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),yt(bt,bt.current),i)break;return null;case 22:case 23:return e.lanes=0,tx(t,e,n)}return Fi(t,e,n)}var ax,md,ox,lx;ax=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};md=function(){};ox=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ir(hi.current);var s=null;switch(n){case"input":r=ku(t,r),i=ku(t,i),s=[];break;case"select":r=At({},r,{value:void 0}),i=At({},i,{value:void 0}),s=[];break;case"textarea":r=Bu(t,r),i=Bu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Cl)}Hu(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Da.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var c=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&o[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Da.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Mt("scroll",t),s||o===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};lx=function(t,e,n,i){n!==i&&(e.flags|=4)};function oa(t,e){if(!Et)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Py(t,e,n){var i=e.pendingProps;switch(zf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return gn(e.type)&&Al(),Zt(e),null;case 3:return i=e.stateNode,Hs(),wt(mn),wt(rn),$f(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(wo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yn!==null&&(wd(Yn),Yn=null))),md(t,e),Zt(e),null;case 5:qf(e);var r=Ir(Wa.current);if(n=e.type,t!==null&&e.stateNode!=null)ox(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(_e(166));return Zt(e),null}if(t=Ir(hi.current),wo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[li]=e,i[Ga]=s,t=(e.mode&1)!==0,n){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(r=0;r<_a.length;r++)Mt(_a[r],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":Kh(i,s),Mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Mt("invalid",i);break;case"textarea":Qh(i,s),Mt("invalid",i)}Hu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Mo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Mo(i.textContent,o,t),r=["children",""+o]):Da.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&Mt("scroll",i)}switch(n){case"input":po(i),Zh(i,s,!0);break;case"textarea":po(i),Jh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Cl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=F0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[li]=e,t[Ga]=i,ax(t,e,!1,!1),e.stateNode=t;e:{switch(a=Gu(n,i),n){case"dialog":Mt("cancel",t),Mt("close",t),r=i;break;case"iframe":case"object":case"embed":Mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<_a.length;r++)Mt(_a[r],t);r=i;break;case"source":Mt("error",t),r=i;break;case"img":case"image":case"link":Mt("error",t),Mt("load",t),r=i;break;case"details":Mt("toggle",t),r=i;break;case"input":Kh(t,i),r=ku(t,i),Mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=At({},i,{value:void 0}),Mt("invalid",t);break;case"textarea":Qh(t,i),r=Bu(t,i),Mt("invalid",t);break;default:r=i}Hu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?z0(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&k0(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ia(t,c):typeof c=="number"&&Ia(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Da.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Mt("scroll",t):c!=null&&Ef(t,s,c,a))}switch(n){case"input":po(t),Zh(t,i,!1);break;case"textarea":po(t),Jh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+pr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Rs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Rs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Cl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Zt(e),null;case 6:if(t&&e.stateNode!=null)lx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(_e(166));if(n=Ir(Wa.current),Ir(hi.current),wo(e)){if(i=e.stateNode,n=e.memoizedProps,i[li]=e,(s=i.nodeValue!==n)&&(t=An,t!==null))switch(t.tag){case 3:Mo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Mo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[li]=e,e.stateNode=i}return Zt(e),null;case 13:if(wt(bt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Et&&Cn!==null&&e.mode&1&&!(e.flags&128))Tg(),Bs(),e.flags|=98560,s=!1;else if(s=wo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(_e(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(_e(317));s[li]=e}else Bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Zt(e),s=!1}else Yn!==null&&(wd(Yn),Yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||bt.current&1?Ot===0&&(Ot=3):ah())),e.updateQueue!==null&&(e.flags|=4),Zt(e),null);case 4:return Hs(),md(t,e),t===null&&Va(e.stateNode.containerInfo),Zt(e),null;case 10:return Gf(e.type._context),Zt(e),null;case 17:return gn(e.type)&&Al(),Zt(e),null;case 19:if(wt(bt),s=e.memoizedState,s===null)return Zt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)oa(s,!1);else{if(Ot!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Ul(t),a!==null){for(e.flags|=128,oa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return yt(bt,bt.current&1|2),e.child}t=t.sibling}s.tail!==null&&It()>js&&(e.flags|=128,i=!0,oa(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ul(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),oa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Et)return Zt(e),null}else 2*It()-s.renderingStartTime>js&&n!==1073741824&&(e.flags|=128,i=!0,oa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=It(),e.sibling=null,n=bt.current,yt(bt,i?n&1|2:n&1),e):(Zt(e),null);case 22:case 23:return sh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?bn&1073741824&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),null;case 24:return null;case 25:return null}throw Error(_e(156,e.tag))}function Ly(t,e){switch(zf(e),e.tag){case 1:return gn(e.type)&&Al(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hs(),wt(mn),wt(rn),$f(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qf(e),null;case 13:if(wt(bt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(_e(340));Bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return wt(bt),null;case 4:return Hs(),null;case 10:return Gf(e.type._context),null;case 22:case 23:return sh(),null;case 24:return null;default:return null}}var To=!1,en=!1,Dy=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function Cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Nt(t,e,i)}else n.current=null}function gd(t,e,n){try{n()}catch(i){Nt(t,e,i)}}var Hp=!1;function Iy(t,e){if(Ju=El,t=hg(),kf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,c=-1,u=0,h=0,p=t,f=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(c=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===t)break t;if(f===n&&++u===r&&(o=a),f===s&&++h===i&&(c=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ed={focusedElem:t,selectionRange:n},El=!1,Ue=e;Ue!==null;)if(e=Ue,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ue=t;else for(;Ue!==null;){e=Ue;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var E=_.memoizedProps,x=_.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?E:qn(e.type,E),x);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var M=e.stateNode.containerInfo;M.nodeType===1?M.textContent="":M.nodeType===9&&M.documentElement&&M.removeChild(M.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_e(163))}}catch(S){Nt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Ue=t;break}Ue=e.return}return _=Hp,Hp=!1,_}function Aa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&gd(e,n,s)}r=r.next}while(r!==i)}}function ac(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function xd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function cx(t){var e=t.alternate;e!==null&&(t.alternate=null,cx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[li],delete e[Ga],delete e[id],delete e[gy],delete e[xy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ux(t){return t.tag===5||t.tag===3||t.tag===4}function Gp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ux(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cl));else if(i!==4&&(t=t.child,t!==null))for(vd(t,e,n),t=t.sibling;t!==null;)vd(t,e,n),t=t.sibling}function _d(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(_d(t,e,n),t=t.sibling;t!==null;)_d(t,e,n),t=t.sibling}var Wt=null,$n=!1;function Gi(t,e,n){for(n=n.child;n!==null;)dx(t,e,n),n=n.sibling}function dx(t,e,n){if(fi&&typeof fi.onCommitFiberUnmount=="function")try{fi.onCommitFiberUnmount(Ql,n)}catch{}switch(n.tag){case 5:en||Cs(n,e);case 6:var i=Wt,r=$n;Wt=null,Gi(t,e,n),Wt=i,$n=r,Wt!==null&&($n?(t=Wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Wt.removeChild(n.stateNode));break;case 18:Wt!==null&&($n?(t=Wt,n=n.stateNode,t.nodeType===8?Fc(t.parentNode,n):t.nodeType===1&&Fc(t,n),Oa(t)):Fc(Wt,n.stateNode));break;case 4:i=Wt,r=$n,Wt=n.stateNode.containerInfo,$n=!0,Gi(t,e,n),Wt=i,$n=r;break;case 0:case 11:case 14:case 15:if(!en&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&gd(n,e,a),r=r.next}while(r!==i)}Gi(t,e,n);break;case 1:if(!en&&(Cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Nt(n,e,o)}Gi(t,e,n);break;case 21:Gi(t,e,n);break;case 22:n.mode&1?(en=(i=en)||n.memoizedState!==null,Gi(t,e,n),en=i):Gi(t,e,n);break;default:Gi(t,e,n)}}function jp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Dy),e.forEach(function(i){var r=Gy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Gn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Wt=o.stateNode,$n=!1;break e;case 3:Wt=o.stateNode.containerInfo,$n=!0;break e;case 4:Wt=o.stateNode.containerInfo,$n=!0;break e}o=o.return}if(Wt===null)throw Error(_e(160));dx(s,a,r),Wt=null,$n=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){Nt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)fx(e,t),e=e.sibling}function fx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gn(e,t),ii(t),i&4){try{Aa(3,t,t.return),ac(3,t)}catch(E){Nt(t,t.return,E)}try{Aa(5,t,t.return)}catch(E){Nt(t,t.return,E)}}break;case 1:Gn(e,t),ii(t),i&512&&n!==null&&Cs(n,n.return);break;case 5:if(Gn(e,t),ii(t),i&512&&n!==null&&Cs(n,n.return),t.flags&32){var r=t.stateNode;try{Ia(r,"")}catch(E){Nt(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&I0(r,s),Gu(o,a);var u=Gu(o,s);for(a=0;a<c.length;a+=2){var h=c[a],p=c[a+1];h==="style"?z0(r,p):h==="dangerouslySetInnerHTML"?k0(r,p):h==="children"?Ia(r,p):Ef(r,h,p,u)}switch(o){case"input":Ou(r,s);break;case"textarea":U0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Rs(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Rs(r,!!s.multiple,s.defaultValue,!0):Rs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ga]=s}catch(E){Nt(t,t.return,E)}}break;case 6:if(Gn(e,t),ii(t),i&4){if(t.stateNode===null)throw Error(_e(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){Nt(t,t.return,E)}}break;case 3:if(Gn(e,t),ii(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Oa(e.containerInfo)}catch(E){Nt(t,t.return,E)}break;case 4:Gn(e,t),ii(t);break;case 13:Gn(e,t),ii(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ih=It())),i&4&&jp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(en=(u=en)||h,Gn(e,t),en=u):Gn(e,t),ii(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(Ue=t,h=t.child;h!==null;){for(p=Ue=h;Ue!==null;){switch(f=Ue,m=f.child,f.tag){case 0:case 11:case 14:case 15:Aa(4,f,f.return);break;case 1:Cs(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(E){Nt(i,n,E)}}break;case 5:Cs(f,f.return);break;case 22:if(f.memoizedState!==null){Xp(p);continue}}m!==null?(m.return=f,Ue=m):Xp(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=O0("display",a))}catch(E){Nt(t,t.return,E)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(E){Nt(t,t.return,E)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Gn(e,t),ii(t),i&4&&jp(t);break;case 21:break;default:Gn(e,t),ii(t)}}function ii(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ux(n)){var i=n;break e}n=n.return}throw Error(_e(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ia(r,""),i.flags&=-33);var s=Gp(t);_d(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Gp(t);vd(t,o,a);break;default:throw Error(_e(161))}}catch(c){Nt(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Uy(t,e,n){Ue=t,hx(t)}function hx(t,e,n){for(var i=(t.mode&1)!==0;Ue!==null;){var r=Ue,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||To;if(!a){var o=r.alternate,c=o!==null&&o.memoizedState!==null||en;o=To;var u=en;if(To=a,(en=c)&&!u)for(Ue=r;Ue!==null;)a=Ue,c=a.child,a.tag===22&&a.memoizedState!==null?qp(r):c!==null?(c.return=a,Ue=c):qp(r);for(;s!==null;)Ue=s,hx(s),s=s.sibling;Ue=r,To=o,en=u}Wp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ue=s):Wp(t)}}function Wp(t){for(;Ue!==null;){var e=Ue;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:en||ac(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!en)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:qn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Rp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Rp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Oa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_e(163))}en||e.flags&512&&xd(e)}catch(f){Nt(e,e.return,f)}}if(e===t){Ue=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ue=n;break}Ue=e.return}}function Xp(t){for(;Ue!==null;){var e=Ue;if(e===t){Ue=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ue=n;break}Ue=e.return}}function qp(t){for(;Ue!==null;){var e=Ue;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ac(4,e)}catch(c){Nt(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){Nt(e,r,c)}}var s=e.return;try{xd(e)}catch(c){Nt(e,s,c)}break;case 5:var a=e.return;try{xd(e)}catch(c){Nt(e,a,c)}}}catch(c){Nt(e,e.return,c)}if(e===t){Ue=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ue=o;break}Ue=e.return}}var Fy=Math.ceil,Ol=zi.ReactCurrentDispatcher,th=zi.ReactCurrentOwner,zn=zi.ReactCurrentBatchConfig,ft=0,Gt=null,Ft=null,qt=0,bn=0,As=_r(0),Ot=0,Ya=null,Hr=0,oc=0,nh=0,Ra=null,fn=null,ih=0,js=1/0,bi=null,zl=!1,yd=null,ur=null,Co=!1,ir=null,Bl=0,Na=0,Sd=null,cl=-1,ul=0;function on(){return ft&6?It():cl!==-1?cl:cl=It()}function dr(t){return t.mode&1?ft&2&&qt!==0?qt&-qt:_y.transition!==null?(ul===0&&(ul=Z0()),ul):(t=mt,t!==0||(t=window.event,t=t===void 0?16:rg(t.type)),t):1}function ei(t,e,n,i){if(50<Na)throw Na=0,Sd=null,Error(_e(185));to(t,n,i),(!(ft&2)||t!==Gt)&&(t===Gt&&(!(ft&2)&&(oc|=n),Ot===4&&er(t,qt)),xn(t,i),n===1&&ft===0&&!(e.mode&1)&&(js=It()+500,ic&&yr()))}function xn(t,e){var n=t.callbackNode;__(t,e);var i=wl(t,t===Gt?qt:0);if(i===0)n!==null&&np(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&np(n),e===1)t.tag===0?vy($p.bind(null,t)):wg($p.bind(null,t)),py(function(){!(ft&6)&&yr()}),n=null;else{switch(Q0(i)){case 1:n=Rf;break;case 4:n=Y0;break;case 16:n=Ml;break;case 536870912:n=K0;break;default:n=Ml}n=Sx(n,px.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function px(t,e){if(cl=-1,ul=0,ft&6)throw Error(_e(327));var n=t.callbackNode;if(Is()&&t.callbackNode!==n)return null;var i=wl(t,t===Gt?qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Vl(t,i);else{e=i;var r=ft;ft|=2;var s=gx();(Gt!==t||qt!==e)&&(bi=null,js=It()+500,kr(t,e));do try{zy();break}catch(o){mx(t,o)}while(!0);Hf(),Ol.current=s,ft=r,Ft!==null?e=0:(Gt=null,qt=0,e=Ot)}if(e!==0){if(e===2&&(r=$u(t),r!==0&&(i=r,e=Md(t,r))),e===1)throw n=Ya,kr(t,0),er(t,i),xn(t,It()),n;if(e===6)er(t,i);else{if(r=t.current.alternate,!(i&30)&&!ky(r)&&(e=Vl(t,i),e===2&&(s=$u(t),s!==0&&(i=s,e=Md(t,s))),e===1))throw n=Ya,kr(t,0),er(t,i),xn(t,It()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(_e(345));case 2:Ar(t,fn,bi);break;case 3:if(er(t,i),(i&130023424)===i&&(e=ih+500-It(),10<e)){if(wl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){on(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=nd(Ar.bind(null,t,fn,bi),e);break}Ar(t,fn,bi);break;case 4:if(er(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Jn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=It()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Fy(i/1960))-i,10<i){t.timeoutHandle=nd(Ar.bind(null,t,fn,bi),i);break}Ar(t,fn,bi);break;case 5:Ar(t,fn,bi);break;default:throw Error(_e(329))}}}return xn(t,It()),t.callbackNode===n?px.bind(null,t):null}function Md(t,e){var n=Ra;return t.current.memoizedState.isDehydrated&&(kr(t,e).flags|=256),t=Vl(t,e),t!==2&&(e=fn,fn=n,e!==null&&wd(e)),t}function wd(t){fn===null?fn=t:fn.push.apply(fn,t)}function ky(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ti(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function er(t,e){for(e&=~nh,e&=~oc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jn(e),i=1<<n;t[n]=-1,e&=~i}}function $p(t){if(ft&6)throw Error(_e(327));Is();var e=wl(t,0);if(!(e&1))return xn(t,It()),null;var n=Vl(t,e);if(t.tag!==0&&n===2){var i=$u(t);i!==0&&(e=i,n=Md(t,i))}if(n===1)throw n=Ya,kr(t,0),er(t,e),xn(t,It()),n;if(n===6)throw Error(_e(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ar(t,fn,bi),xn(t,It()),null}function rh(t,e){var n=ft;ft|=1;try{return t(e)}finally{ft=n,ft===0&&(js=It()+500,ic&&yr())}}function Gr(t){ir!==null&&ir.tag===0&&!(ft&6)&&Is();var e=ft;ft|=1;var n=zn.transition,i=mt;try{if(zn.transition=null,mt=1,t)return t()}finally{mt=i,zn.transition=n,ft=e,!(ft&6)&&yr()}}function sh(){bn=As.current,wt(As)}function kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,hy(n)),Ft!==null)for(n=Ft.return;n!==null;){var i=n;switch(zf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Al();break;case 3:Hs(),wt(mn),wt(rn),$f();break;case 5:qf(i);break;case 4:Hs();break;case 13:wt(bt);break;case 19:wt(bt);break;case 10:Gf(i.type._context);break;case 22:case 23:sh()}n=n.return}if(Gt=t,Ft=t=fr(t.current,null),qt=bn=e,Ot=0,Ya=null,nh=oc=Hr=0,fn=Ra=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Dr=null}return t}function mx(t,e){do{var n=Ft;try{if(Hf(),al.current=kl,Fl){for(var i=Ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Fl=!1}if(Vr=0,Ht=kt=Ct=null,Ca=!1,Xa=0,th.current=null,n===null||n.return===null){Ot=1,Ya=e,Ft=null;break}e:{var s=t,a=n.return,o=n,c=e;if(e=qt,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=o,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Up(a);if(m!==null){m.flags&=-257,Fp(m,a,o,s,e),m.mode&1&&Ip(s,u,e),e=m,c=u;var _=e.updateQueue;if(_===null){var E=new Set;E.add(c),e.updateQueue=E}else _.add(c);break e}else{if(!(e&1)){Ip(s,u,e),ah();break e}c=Error(_e(426))}}else if(Et&&o.mode&1){var x=Up(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Fp(x,a,o,s,e),Bf(Gs(c,o));break e}}s=c=Gs(c,o),Ot!==4&&(Ot=2),Ra===null?Ra=[s]:Ra.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Qg(s,c,e);Ap(s,d);break e;case 1:o=c;var v=s.type,M=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(ur===null||!ur.has(M)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Jg(s,o,e);Ap(s,S);break e}}s=s.return}while(s!==null)}vx(n)}catch(T){e=T,Ft===n&&n!==null&&(Ft=n=n.return);continue}break}while(!0)}function gx(){var t=Ol.current;return Ol.current=kl,t===null?kl:t}function ah(){(Ot===0||Ot===3||Ot===2)&&(Ot=4),Gt===null||!(Hr&268435455)&&!(oc&268435455)||er(Gt,qt)}function Vl(t,e){var n=ft;ft|=2;var i=gx();(Gt!==t||qt!==e)&&(bi=null,kr(t,e));do try{Oy();break}catch(r){mx(t,r)}while(!0);if(Hf(),ft=n,Ol.current=i,Ft!==null)throw Error(_e(261));return Gt=null,qt=0,Ot}function Oy(){for(;Ft!==null;)xx(Ft)}function zy(){for(;Ft!==null&&!u_();)xx(Ft)}function xx(t){var e=yx(t.alternate,t,bn);t.memoizedProps=t.pendingProps,e===null?vx(t):Ft=e,th.current=null}function vx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ly(n,e),n!==null){n.flags&=32767,Ft=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ot=6,Ft=null;return}}else if(n=Py(n,e,bn),n!==null){Ft=n;return}if(e=e.sibling,e!==null){Ft=e;return}Ft=e=t}while(e!==null);Ot===0&&(Ot=5)}function Ar(t,e,n){var i=mt,r=zn.transition;try{zn.transition=null,mt=1,By(t,e,n,i)}finally{zn.transition=r,mt=i}return null}function By(t,e,n,i){do Is();while(ir!==null);if(ft&6)throw Error(_e(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(_e(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(y_(t,s),t===Gt&&(Ft=Gt=null,qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Co||(Co=!0,Sx(Ml,function(){return Is(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=zn.transition,zn.transition=null;var a=mt;mt=1;var o=ft;ft|=4,th.current=null,Iy(t,n),fx(n,t),ay(ed),El=!!Ju,ed=Ju=null,t.current=n,Uy(n),d_(),ft=o,mt=a,zn.transition=s}else t.current=n;if(Co&&(Co=!1,ir=t,Bl=r),s=t.pendingLanes,s===0&&(ur=null),p_(n.stateNode),xn(t,It()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(zl)throw zl=!1,t=yd,yd=null,t;return Bl&1&&t.tag!==0&&Is(),s=t.pendingLanes,s&1?t===Sd?Na++:(Na=0,Sd=t):Na=0,yr(),null}function Is(){if(ir!==null){var t=Q0(Bl),e=zn.transition,n=mt;try{if(zn.transition=null,mt=16>t?16:t,ir===null)var i=!1;else{if(t=ir,ir=null,Bl=0,ft&6)throw Error(_e(331));var r=ft;for(ft|=4,Ue=t.current;Ue!==null;){var s=Ue,a=s.child;if(Ue.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(Ue=u;Ue!==null;){var h=Ue;switch(h.tag){case 0:case 11:case 15:Aa(8,h,s)}var p=h.child;if(p!==null)p.return=h,Ue=p;else for(;Ue!==null;){h=Ue;var f=h.sibling,m=h.return;if(cx(h),h===u){Ue=null;break}if(f!==null){f.return=m,Ue=f;break}Ue=m}}}var _=s.alternate;if(_!==null){var E=_.child;if(E!==null){_.child=null;do{var x=E.sibling;E.sibling=null,E=x}while(E!==null)}}Ue=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ue=a;else e:for(;Ue!==null;){if(s=Ue,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Aa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Ue=d;break e}Ue=s.return}}var v=t.current;for(Ue=v;Ue!==null;){a=Ue;var M=a.child;if(a.subtreeFlags&2064&&M!==null)M.return=a,Ue=M;else e:for(a=v;Ue!==null;){if(o=Ue,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ac(9,o)}}catch(T){Nt(o,o.return,T)}if(o===a){Ue=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Ue=S;break e}Ue=o.return}}if(ft=r,yr(),fi&&typeof fi.onPostCommitFiberRoot=="function")try{fi.onPostCommitFiberRoot(Ql,t)}catch{}i=!0}return i}finally{mt=n,zn.transition=e}}return!1}function Yp(t,e,n){e=Gs(n,e),e=Qg(t,e,1),t=cr(t,e,1),e=on(),t!==null&&(to(t,1,e),xn(t,e))}function Nt(t,e,n){if(t.tag===3)Yp(t,t,n);else for(;e!==null;){if(e.tag===3){Yp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ur===null||!ur.has(i))){t=Gs(n,t),t=Jg(e,t,1),e=cr(e,t,1),t=on(),e!==null&&(to(e,1,t),xn(e,t));break}}e=e.return}}function Vy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=on(),t.pingedLanes|=t.suspendedLanes&n,Gt===t&&(qt&n)===n&&(Ot===4||Ot===3&&(qt&130023424)===qt&&500>It()-ih?kr(t,0):nh|=n),xn(t,e)}function _x(t,e){e===0&&(t.mode&1?(e=xo,xo<<=1,!(xo&130023424)&&(xo=4194304)):e=1);var n=on();t=Ui(t,e),t!==null&&(to(t,e,n),xn(t,n))}function Hy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_x(t,n)}function Gy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(_e(314))}i!==null&&i.delete(e),_x(t,n)}var yx;yx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mn.current)pn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pn=!1,Ny(t,e,n);pn=!!(t.flags&131072)}else pn=!1,Et&&e.flags&1048576&&Eg(e,Pl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ll(t,e),t=e.pendingProps;var r=zs(e,rn.current);Ds(e,n),r=Kf(null,e,i,t,r,n);var s=Zf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gn(i)?(s=!0,Rl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Wf(e),r.updater=sc,e.stateNode=r,r._reactInternals=e,cd(e,i,t,n),e=fd(null,e,i,!0,s,n)):(e.tag=0,Et&&s&&Of(e),an(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ll(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Wy(i),t=qn(i,t),r){case 0:e=dd(null,e,i,t,n);break e;case 1:e=zp(null,e,i,t,n);break e;case 11:e=kp(null,e,i,t,n);break e;case 14:e=Op(null,e,i,qn(i.type,t),n);break e}throw Error(_e(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),dd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),zp(t,e,i,r,n);case 3:e:{if(ix(e),t===null)throw Error(_e(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ng(t,e),Il(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Gs(Error(_e(423)),e),e=Bp(t,e,i,n,r);break e}else if(i!==r){r=Gs(Error(_e(424)),e),e=Bp(t,e,i,n,r);break e}else for(Cn=lr(e.stateNode.containerInfo.firstChild),An=e,Et=!0,Yn=null,n=Ag(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bs(),i===r){e=Fi(t,e,n);break e}an(t,e,i,n)}e=e.child}return e;case 5:return Pg(e),t===null&&ad(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,td(i,r)?a=null:s!==null&&td(i,s)&&(e.flags|=32),nx(t,e),an(t,e,a,n),e.child;case 6:return t===null&&ad(e),null;case 13:return rx(t,e,n);case 4:return Xf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Vs(e,null,i,n):an(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),kp(t,e,i,r,n);case 7:return an(t,e,e.pendingProps,n),e.child;case 8:return an(t,e,e.pendingProps.children,n),e.child;case 12:return an(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,yt(Ll,i._currentValue),i._currentValue=a,s!==null)if(ti(s.value,a)){if(s.children===r.children&&!mn.current){e=Fi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var c=o.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=Ni(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),od(s.return,n,e),o.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(_e(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),od(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}an(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ds(e,n),r=Vn(r),i=i(r),e.flags|=1,an(t,e,i,n),e.child;case 14:return i=e.type,r=qn(i,e.pendingProps),r=qn(i.type,r),Op(t,e,i,r,n);case 15:return ex(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qn(i,r),ll(t,e),e.tag=1,gn(i)?(t=!0,Rl(e)):t=!1,Ds(e,n),Zg(e,i,r),cd(e,i,r,n),fd(null,e,i,!0,t,n);case 19:return sx(t,e,n);case 22:return tx(t,e,n)}throw Error(_e(156,e.tag))};function Sx(t,e){return $0(t,e)}function jy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,e,n,i){return new jy(t,e,n,i)}function oh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Wy(t){if(typeof t=="function")return oh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Tf)return 11;if(t===Cf)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=On(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function dl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")oh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case vs:return Or(n.children,r,s,e);case bf:a=8,r|=8;break;case Du:return t=On(12,n,e,r|2),t.elementType=Du,t.lanes=s,t;case Iu:return t=On(13,n,e,r),t.elementType=Iu,t.lanes=s,t;case Uu:return t=On(19,n,e,r),t.elementType=Uu,t.lanes=s,t;case P0:return lc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case R0:a=10;break e;case N0:a=9;break e;case Tf:a=11;break e;case Cf:a=14;break e;case Zi:a=16,i=null;break e}throw Error(_e(130,t==null?t:typeof t,""))}return e=On(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Or(t,e,n,i){return t=On(7,t,i,e),t.lanes=n,t}function lc(t,e,n,i){return t=On(22,t,i,e),t.elementType=P0,t.lanes=n,t.stateNode={isHidden:!1},t}function jc(t,e,n){return t=On(6,t,null,e),t.lanes=n,t}function Wc(t,e,n){return e=On(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Xy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bc(0),this.expirationTimes=bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function lh(t,e,n,i,r,s,a,o,c){return t=new Xy(t,e,n,o,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=On(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wf(s),t}function qy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Mx(t){if(!t)return mr;t=t._reactInternals;e:{if(Yr(t)!==t||t.tag!==1)throw Error(_e(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(_e(171))}if(t.tag===1){var n=t.type;if(gn(n))return Mg(t,n,e)}return e}function wx(t,e,n,i,r,s,a,o,c){return t=lh(n,i,!0,t,r,s,a,o,c),t.context=Mx(null),n=t.current,i=on(),r=dr(n),s=Ni(i,r),s.callback=e??null,cr(n,s,r),t.current.lanes=r,to(t,r,i),xn(t,i),t}function cc(t,e,n,i){var r=e.current,s=on(),a=dr(r);return n=Mx(n),e.context===null?e.context=n:e.pendingContext=n,e=Ni(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=cr(r,e,a),t!==null&&(ei(t,r,a,s),sl(t,r,a)),a}function Hl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Kp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ch(t,e){Kp(t,e),(t=t.alternate)&&Kp(t,e)}function $y(){return null}var Ex=typeof reportError=="function"?reportError:function(t){console.error(t)};function uh(t){this._internalRoot=t}uc.prototype.render=uh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(_e(409));cc(t,e,null,null)};uc.prototype.unmount=uh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Gr(function(){cc(null,t,null,null)}),e[Ii]=null}};function uc(t){this._internalRoot=t}uc.prototype.unstable_scheduleHydration=function(t){if(t){var e=tg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ji.length&&e!==0&&e<Ji[n].priority;n++);Ji.splice(n,0,t),n===0&&ig(t)}};function dh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function dc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Zp(){}function Yy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Hl(a);s.call(u)}}var a=wx(e,i,t,0,null,!1,!1,"",Zp);return t._reactRootContainer=a,t[Ii]=a.current,Va(t.nodeType===8?t.parentNode:t),Gr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Hl(c);o.call(u)}}var c=lh(t,0,!1,null,null,!1,!1,"",Zp);return t._reactRootContainer=c,t[Ii]=c.current,Va(t.nodeType===8?t.parentNode:t),Gr(function(){cc(e,c,n,i)}),c}function fc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var c=Hl(a);o.call(c)}}cc(e,a,t,r)}else a=Yy(n,e,t,r,i);return Hl(a)}J0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=va(e.pendingLanes);n!==0&&(Nf(e,n|1),xn(e,It()),!(ft&6)&&(js=It()+500,yr()))}break;case 13:Gr(function(){var i=Ui(t,1);if(i!==null){var r=on();ei(i,t,1,r)}}),ch(t,1)}};Pf=function(t){if(t.tag===13){var e=Ui(t,134217728);if(e!==null){var n=on();ei(e,t,134217728,n)}ch(t,134217728)}};eg=function(t){if(t.tag===13){var e=dr(t),n=Ui(t,e);if(n!==null){var i=on();ei(n,t,e,i)}ch(t,e)}};tg=function(){return mt};ng=function(t,e){var n=mt;try{return mt=t,e()}finally{mt=n}};Wu=function(t,e,n){switch(e){case"input":if(Ou(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=nc(i);if(!r)throw Error(_e(90));D0(i),Ou(i,r)}}}break;case"textarea":U0(t,n);break;case"select":e=n.value,e!=null&&Rs(t,!!n.multiple,e,!1)}};H0=rh;G0=Gr;var Ky={usingClientEntryPoint:!1,Events:[io,Ms,nc,B0,V0,rh]},la={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zy={bundleType:la.bundleType,version:la.version,rendererPackageName:la.rendererPackageName,rendererConfig:la.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=X0(t),t===null?null:t.stateNode},findFiberByHostInstance:la.findFiberByHostInstance||$y,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ao.isDisabled&&Ao.supportsFiber)try{Ql=Ao.inject(Zy),fi=Ao}catch{}}Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ky;Nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dh(e))throw Error(_e(200));return qy(t,e,null,n)};Nn.createRoot=function(t,e){if(!dh(t))throw Error(_e(299));var n=!1,i="",r=Ex;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=lh(t,1,!1,null,null,n,!1,i,r),t[Ii]=e.current,Va(t.nodeType===8?t.parentNode:t),new uh(e)};Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(_e(188)):(t=Object.keys(t).join(","),Error(_e(268,t)));return t=X0(e),t=t===null?null:t.stateNode,t};Nn.flushSync=function(t){return Gr(t)};Nn.hydrate=function(t,e,n){if(!dc(e))throw Error(_e(200));return fc(null,t,e,!0,n)};Nn.hydrateRoot=function(t,e,n){if(!dh(t))throw Error(_e(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Ex;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=wx(e,null,t,1,n??null,r,!1,s,a),t[Ii]=e.current,Va(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new uc(e)};Nn.render=function(t,e,n){if(!dc(e))throw Error(_e(200));return fc(null,t,e,!1,n)};Nn.unmountComponentAtNode=function(t){if(!dc(t))throw Error(_e(40));return t._reactRootContainer?(Gr(function(){fc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ii]=null})}),!0):!1};Nn.unstable_batchedUpdates=rh;Nn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!dc(n))throw Error(_e(200));if(t==null||t._reactInternals===void 0)throw Error(_e(38));return fc(t,e,n,!1,i)};Nn.version="18.3.1-next-f1338f8080-20240426";function bx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bx)}catch(t){console.error(t)}}bx(),b0.exports=Nn;var Qy=b0.exports,Qp=Qy;Pu.createRoot=Qp.createRoot,Pu.hydrateRoot=Qp.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Jy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),st=(t,e)=>{const n=ue.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:c,...u},h)=>ue.createElement("svg",{ref:h,...Jy,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${eS(t)}`,o].join(" "),...u},[...e.map(([p,f])=>ue.createElement(p,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=st("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=st("Blinds",[["path",{d:"M3 3h18",key:"o7r712"}],["path",{d:"M20 7H8",key:"gd2fo2"}],["path",{d:"M20 11H8",key:"1ynp89"}],["path",{d:"M10 19h10",key:"19hjk5"}],["path",{d:"M8 15h12",key:"1yqzne"}],["path",{d:"M4 3v14",key:"fggqzn"}],["circle",{cx:"4",cy:"19",r:"2",key:"p3m9r0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=st("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=st("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=st("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=st("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=st("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=st("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=st("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=st("CloudRain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=st("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=st("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=st("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=st("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=st("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=st("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=st("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=st("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=st("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=st("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=st("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=st("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=st("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=st("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=st("Repeat2",[["path",{d:"m2 9 3-3 3 3",key:"1ltn5i"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6",key:"1r6tfw"}],["path",{d:"m22 15-3 3-3-3",key:"4rnwn2"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10",key:"2f72bc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=st("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=st("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=st("Share",[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["polyline",{points:"16 6 12 2 8 6",key:"m901s6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15",key:"1p0rca"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=st("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=st("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=st("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=st("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=st("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=st("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=st("Wine",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z",key:"10ffi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=st("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),yS=[{id:1,name:"Deadwire",datacenter:"Chaos",server:"Ragnarok",location:"La Coupe",secteur:"2",numero:"6",appartement:!1,annexe:!1,types:["Bar"],horaires:[{jour:"Lun.",heures:"21h00 - 00h00"}],banner:"https://www.deadwire.fr/media/deadwire_banner.webp",url:"https://www.deadwire.fr/",discord:"https://discord.gg/QC6CEGcpgq"},{id:3,name:"L'Exil",datacenter:"Chaos",server:"Moogle",location:"Shirogane",secteur:"24",numero:"7",appartement:!1,annexe:!1,types:["Nightclub"],horaires:null,banner:"https://i.imgur.com/VR1mi7T.png",url:null,discord:"https://discord.gg/wae4VhUxPE"},{id:4,name:"Tequila N' Bullets",datacenter:"Chaos",server:"Phantom",location:"La Coupe",secteur:"26",numero:"5",appartement:!0,annexe:!1,types:["Bar"],horaires:null,banner:null,url:null,discord:null},{id:5,name:"Mégabuilding H10-25",datacenter:"Chaos",server:"Ragnarok",location:"La Coupe",secteur:"10",numero:"25",appartement:!1,annexe:!1,types:["Lieu public"],horaires:null,banner:null,url:null,discord:null},{id:6,name:"Lawless",datacenter:"Chaos",server:"Ragnarok",location:"La Coupe",secteur:"17",numero:"4",appartement:!0,annexe:!0,types:["Lieu public","Boutique"],horaires:"09h00 - 17h00 (PNJ) / Sur rendez-vous (Straya)",banner:"https://i.imgur.com/CwhP3G8.gif",url:null,discord:"https://discord.gg/f32rrfRfcA"},{id:7,name:"Coven - Le Refuge",datacenter:"Chaos",server:"Ragnarok",location:"Brumée",secteur:"9",numero:"46",appartement:!1,annexe:!0,types:["Bar"],horaires:null,banner:"https://i.imgur.com/B72Bnhs.png",url:"https://www.nexusxiv.fr/#coven",discord:"https://discord.gg/n8amsvtxN7"}],Ro=[{id:1,name:"MAGENTA",logo:"media/artistes/Magenta.png",styleMusical:"Rock / Grunge / Punk",url:"https://www.magenta-band.fr/",youtube:"https://www.youtube.com/@Magenta-Band",discord:"https://discord.gg/KMvttGHf3p"},{id:2,name:"Funk Machine",logo:"media/artistes/FunkMachine.png",styleMusical:"Funk / Future Funk",url:"https://obsidian-chrome.github.io/funkmachine/index",youtube:"https://www.youtube.com/@Funk_Machine",discord:null},{id:3,name:"Funk and the Machines",logo:"media/artistes/FaTM.png",styleMusical:"Funk / Future Funk",url:"https://obsidian-chrome.github.io/funkmachine/fatm/index.html",youtube:"https://www.youtube.com/@Funk_Machine",discord:null},{id:4,name:"GHOSTLINE",logo:"media/artistes/Ghostline.png",styleMusical:"Dark electro / Dark techno / EDM / Industriel",url:null,youtube:"https://www.youtube.com/@GHOSTLINE_song",discord:null},{id:5,name:"HeX",logo:"media/artistes/hex.png",styleMusical:"Hardcore techno / Witchcore / Dark synth",url:null,youtube:"https://www.youtube.com/@ArcaneaVII",discord:null},{id:6,name:"Glitchtrap",logo:"media/artistes/Glitchtrap.png",styleMusical:"Electro / Drum and Bass",url:null,youtube:"https://www.youtube.com/@ombreMelody",discord:null},{id:7,name:"Les Black Harpies",logo:"media/artistes/blackharpies.png",styleMusical:"Metal / Punk",url:"https://black-harpies.carrd.co/",youtube:"https://www.youtube.com/@Black-Harpies",discord:null}],ji=[{id:1,name:"Neolens",equivalent:"Instagram",logo:"media/neolens_logo.png",description:"Plateforme de partage de photos et contenus visuels",type:"social"},{id:2,name:"Holofans",equivalent:"OnlyFans",logo:"media/holofans_logo.png",description:"Plateforme de contenu premium par abonnement",type:"premium"},{id:3,name:"Ping",equivalent:"Twitter",logo:"media/ping_logo.png",description:"Plateforme de microblogging et partage d'actualités",type:"social"}],nm=[{id:"1514667227088027771",name:"Ouverture du Deadwire",description:"",scheduledStartTime:"2026-07-20T19:00:00+00:00",scheduledEndTime:"2026-07-20T21:45:00+00:00",location:"La Coupe 2 - 6 | Ragnarok",status:1,userCount:null,image:"https://cdn.discordapp.com/guild-events/1514667227088027771/a6b9cb9c78ca1a8de0813a19dac8849e.png?size=1024",creator:{id:"159360181476524032",username:"jago_is_real",avatar:"https://cdn.discordapp.com/avatars/159360181476524032/97968ed36034f3d8b5e5316d9d645600.png"}},{id:"1524875086153252937",name:"Ouverture du Deadwire (Avec WarCøre-9)",description:"Thème vestimentaire : Rave party",scheduledStartTime:"2026-07-13T19:00:00+00:00",scheduledEndTime:"2026-07-13T21:45:00+00:00",location:"La Coupe 2 - 6 | Ragnarok",status:1,userCount:null,image:"https://cdn.discordapp.com/guild-events/1524875086153252937/bdcca1784d9ecad3a9272d281cbdcffd.png?size=1024",creator:{id:"159360181476524032",username:"jago_is_real",avatar:"https://cdn.discordapp.com/avatars/159360181476524032/97968ed36034f3d8b5e5316d9d645600.png"}}];function SS(t,e){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;const n=document.implementation.createHTMLDocument(),i=n.createElement("base"),r=n.createElement("a");return n.head.appendChild(i),n.body.appendChild(r),e&&(i.href=e),r.href=t,r.href}const MS=(()=>{let t=0;const e=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(t+=1,`u${e()}${t}`)})();function hr(t){const e=[];for(let n=0,i=t.length;n<i;n++)e.push(t[n]);return e}let ts=null;function Ax(t={}){return ts||(t.includeStyleProperties?(ts=t.includeStyleProperties,ts):(ts=hr(window.getComputedStyle(document.documentElement)),ts))}function Gl(t,e){const i=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return i?parseFloat(i.replace("px","")):0}function wS(t){const e=Gl(t,"border-left-width"),n=Gl(t,"border-right-width");return t.clientWidth+e+n}function ES(t){const e=Gl(t,"border-top-width"),n=Gl(t,"border-bottom-width");return t.clientHeight+e+n}function Rx(t,e={}){const n=e.width||wS(t),i=e.height||ES(t);return{width:n,height:i}}function bS(){let t,e;try{e=process}catch{}const n=e&&e.env?e.env.devicePixelRatio:null;return n&&(t=parseInt(n,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}const Mn=16384;function TS(t){(t.width>Mn||t.height>Mn)&&(t.width>Mn&&t.height>Mn?t.width>t.height?(t.height*=Mn/t.width,t.width=Mn):(t.width*=Mn/t.height,t.height=Mn):t.width>Mn?(t.height*=Mn/t.width,t.width=Mn):(t.width*=Mn/t.height,t.height=Mn))}function jl(t){return new Promise((e,n)=>{const i=new Image;i.onload=()=>{i.decode().then(()=>{requestAnimationFrame(()=>e(i))})},i.onerror=n,i.crossOrigin="anonymous",i.decoding="async",i.src=t})}async function CS(t){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then(e=>`data:image/svg+xml;charset=utf-8,${e}`)}async function AS(t,e,n){const i="http://www.w3.org/2000/svg",r=document.createElementNS(i,"svg"),s=document.createElementNS(i,"foreignObject");return r.setAttribute("width",`${e}`),r.setAttribute("height",`${n}`),r.setAttribute("viewBox",`0 0 ${e} ${n}`),s.setAttribute("width","100%"),s.setAttribute("height","100%"),s.setAttribute("x","0"),s.setAttribute("y","0"),s.setAttribute("externalResourcesRequired","true"),r.appendChild(s),s.appendChild(t),CS(r)}const vn=(t,e)=>{if(t instanceof e)return!0;const n=Object.getPrototypeOf(t);return n===null?!1:n.constructor.name===e.name||vn(n,e)};function RS(t){const e=t.getPropertyValue("content");return`${t.cssText} content: '${e.replace(/'|"/g,"")}';`}function NS(t,e){return Ax(e).map(n=>{const i=t.getPropertyValue(n),r=t.getPropertyPriority(n);return`${n}: ${i}${r?" !important":""};`}).join(" ")}function PS(t,e,n,i){const r=`.${t}:${e}`,s=n.cssText?RS(n):NS(n,i);return document.createTextNode(`${r}{${s}}`)}function im(t,e,n,i){const r=window.getComputedStyle(t,n),s=r.getPropertyValue("content");if(s===""||s==="none")return;const a=MS();try{e.className=`${e.className} ${a}`}catch{return}const o=document.createElement("style");o.appendChild(PS(a,n,r,i)),e.appendChild(o)}function LS(t,e,n){im(t,e,":before",n),im(t,e,":after",n)}const rm="application/font-woff",sm="image/jpeg",DS={woff:rm,woff2:rm,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:sm,jpeg:sm,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function IS(t){const e=/\.([^./]*?)$/g.exec(t);return e?e[1]:""}function hh(t){const e=IS(t).toLowerCase();return DS[e]||""}function US(t){return t.split(/,/)[1]}function bd(t){return t.search(/^(data:)/)!==-1}function FS(t,e){return`data:${e};base64,${t}`}async function Nx(t,e,n){const i=await fetch(t,e);if(i.status===404)throw new Error(`Resource "${i.url}" not found`);const r=await i.blob();return new Promise((s,a)=>{const o=new FileReader;o.onerror=a,o.onloadend=()=>{try{s(n({res:i,result:o.result}))}catch(c){a(c)}},o.readAsDataURL(r)})}const $c={};function kS(t,e,n){let i=t.replace(/\?.*/,"");return n&&(i=t),/ttf|otf|eot|woff2?/i.test(i)&&(i=i.replace(/.*\//,"")),e?`[${e}]${i}`:i}async function ph(t,e,n){const i=kS(t,e,n.includeQueryParams);if($c[i]!=null)return $c[i];n.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+new Date().getTime());let r;try{const s=await Nx(t,n.fetchRequestInit,({res:a,result:o})=>(e||(e=a.headers.get("Content-Type")||""),US(o)));r=FS(s,e)}catch(s){r=n.imagePlaceholder||"";let a=`Failed to fetch resource: ${t}`;s&&(a=typeof s=="string"?s:s.message),a&&console.warn(a)}return $c[i]=r,r}async function OS(t){const e=t.toDataURL();return e==="data:,"?t.cloneNode(!1):jl(e)}async function zS(t,e){if(t.currentSrc){const s=document.createElement("canvas"),a=s.getContext("2d");s.width=t.clientWidth,s.height=t.clientHeight,a==null||a.drawImage(t,0,0,s.width,s.height);const o=s.toDataURL();return jl(o)}const n=t.poster,i=hh(n),r=await ph(n,i,e);return jl(r)}async function BS(t,e){var n;try{if(!((n=t==null?void 0:t.contentDocument)===null||n===void 0)&&n.body)return await mc(t.contentDocument.body,e,!0)}catch{}return t.cloneNode(!1)}async function VS(t,e){return vn(t,HTMLCanvasElement)?OS(t):vn(t,HTMLVideoElement)?zS(t,e):vn(t,HTMLIFrameElement)?BS(t,e):t.cloneNode(Px(t))}const HS=t=>t.tagName!=null&&t.tagName.toUpperCase()==="SLOT",Px=t=>t.tagName!=null&&t.tagName.toUpperCase()==="SVG";async function GS(t,e,n){var i,r;if(Px(e))return e;let s=[];return HS(t)&&t.assignedNodes?s=hr(t.assignedNodes()):vn(t,HTMLIFrameElement)&&(!((i=t.contentDocument)===null||i===void 0)&&i.body)?s=hr(t.contentDocument.body.childNodes):s=hr(((r=t.shadowRoot)!==null&&r!==void 0?r:t).childNodes),s.length===0||vn(t,HTMLVideoElement)||await s.reduce((a,o)=>a.then(()=>mc(o,n)).then(c=>{c&&e.appendChild(c)}),Promise.resolve()),e}function jS(t,e,n){const i=e.style;if(!i)return;const r=window.getComputedStyle(t);r.cssText?(i.cssText=r.cssText,i.transformOrigin=r.transformOrigin):Ax(n).forEach(s=>{let a=r.getPropertyValue(s);s==="font-size"&&a.endsWith("px")&&(a=`${Math.floor(parseFloat(a.substring(0,a.length-2)))-.1}px`),vn(t,HTMLIFrameElement)&&s==="display"&&a==="inline"&&(a="block"),s==="d"&&e.getAttribute("d")&&(a=`path(${e.getAttribute("d")})`),i.setProperty(s,a,r.getPropertyPriority(s))})}function WS(t,e){vn(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),vn(t,HTMLInputElement)&&e.setAttribute("value",t.value)}function XS(t,e){if(vn(t,HTMLSelectElement)){const n=e,i=Array.from(n.children).find(r=>t.value===r.getAttribute("value"));i&&i.setAttribute("selected","")}}function qS(t,e,n){return vn(e,Element)&&(jS(t,e,n),LS(t,e,n),WS(t,e),XS(t,e)),e}async function $S(t,e){const n=t.querySelectorAll?t.querySelectorAll("use"):[];if(n.length===0)return t;const i={};for(let s=0;s<n.length;s++){const o=n[s].getAttribute("xlink:href");if(o){const c=t.querySelector(o),u=document.querySelector(o);!c&&u&&!i[o]&&(i[o]=await mc(u,e,!0))}}const r=Object.values(i);if(r.length){const s="http://www.w3.org/1999/xhtml",a=document.createElementNS(s,"svg");a.setAttribute("xmlns",s),a.style.position="absolute",a.style.width="0",a.style.height="0",a.style.overflow="hidden",a.style.display="none";const o=document.createElementNS(s,"defs");a.appendChild(o);for(let c=0;c<r.length;c++)o.appendChild(r[c]);t.appendChild(a)}return t}async function mc(t,e,n){return!n&&e.filter&&!e.filter(t)?null:Promise.resolve(t).then(i=>VS(i,e)).then(i=>GS(t,i,e)).then(i=>qS(t,i,e)).then(i=>$S(i,e))}const Lx=/url\((['"]?)([^'"]+?)\1\)/g,YS=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,KS=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function ZS(t){const e=t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`,"g")}function QS(t){const e=[];return t.replace(Lx,(n,i,r)=>(e.push(r),n)),e.filter(n=>!bd(n))}async function JS(t,e,n,i,r){try{const s=n?SS(e,n):e,a=hh(e);let o;return r||(o=await ph(s,a,i)),t.replace(ZS(e),`$1${o}$3`)}catch{}return t}function e1(t,{preferredFontFormat:e}){return e?t.replace(KS,n=>{for(;;){const[i,,r]=YS.exec(n)||[];if(!r)return"";if(r===e)return`src: ${i};`}}):t}function Dx(t){return t.search(Lx)!==-1}async function Ix(t,e,n){if(!Dx(t))return t;const i=e1(t,n);return QS(i).reduce((s,a)=>s.then(o=>JS(o,a,e,n)),Promise.resolve(i))}async function ns(t,e,n){var i;const r=(i=e.style)===null||i===void 0?void 0:i.getPropertyValue(t);if(r){const s=await Ix(r,null,n);return e.style.setProperty(t,s,e.style.getPropertyPriority(t)),!0}return!1}async function t1(t,e){await ns("background",t,e)||await ns("background-image",t,e),await ns("mask",t,e)||await ns("-webkit-mask",t,e)||await ns("mask-image",t,e)||await ns("-webkit-mask-image",t,e)}async function n1(t,e){const n=vn(t,HTMLImageElement);if(!(n&&!bd(t.src))&&!(vn(t,SVGImageElement)&&!bd(t.href.baseVal)))return;const i=n?t.src:t.href.baseVal,r=await ph(i,hh(i),e);await new Promise((s,a)=>{t.onload=s,t.onerror=e.onImageErrorHandler?(...c)=>{try{s(e.onImageErrorHandler(...c))}catch(u){a(u)}}:a;const o=t;o.decode&&(o.decode=s),o.loading==="lazy"&&(o.loading="eager"),n?(t.srcset="",t.src=r):t.href.baseVal=r})}async function i1(t,e){const i=hr(t.childNodes).map(r=>Ux(r,e));await Promise.all(i).then(()=>t)}async function Ux(t,e){vn(t,Element)&&(await t1(t,e),await n1(t,e),await i1(t,e))}function r1(t,e){const{style:n}=t;e.backgroundColor&&(n.backgroundColor=e.backgroundColor),e.width&&(n.width=`${e.width}px`),e.height&&(n.height=`${e.height}px`);const i=e.style;return i!=null&&Object.keys(i).forEach(r=>{n[r]=i[r]}),t}const am={};async function om(t){let e=am[t];if(e!=null)return e;const i=await(await fetch(t)).text();return e={url:t,cssText:i},am[t]=e,e}async function lm(t,e){let n=t.cssText;const i=/url\(["']?([^"')]+)["']?\)/g,s=(n.match(/url\([^)]+\)/g)||[]).map(async a=>{let o=a.replace(i,"$1");return o.startsWith("https://")||(o=new URL(o,t.url).href),Nx(o,e.fetchRequestInit,({result:c})=>(n=n.replace(a,`url(${c})`),[a,c]))});return Promise.all(s).then(()=>n)}function cm(t){if(t==null)return[];const e=[],n=/(\/\*[\s\S]*?\*\/)/gi;let i=t.replace(n,"");const r=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const c=r.exec(i);if(c===null)break;e.push(c[0])}i=i.replace(r,"");const s=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,a="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",o=new RegExp(a,"gi");for(;;){let c=s.exec(i);if(c===null){if(c=o.exec(i),c===null)break;s.lastIndex=o.lastIndex}else o.lastIndex=s.lastIndex;e.push(c[0])}return e}async function s1(t,e){const n=[],i=[];return t.forEach(r=>{if("cssRules"in r)try{hr(r.cssRules||[]).forEach((s,a)=>{if(s.type===CSSRule.IMPORT_RULE){let o=a+1;const c=s.href,u=om(c).then(h=>lm(h,e)).then(h=>cm(h).forEach(p=>{try{r.insertRule(p,p.startsWith("@import")?o+=1:r.cssRules.length)}catch(f){console.error("Error inserting rule from remote css",{rule:p,error:f})}})).catch(h=>{console.error("Error loading remote css",h.toString())});i.push(u)}})}catch(s){const a=t.find(o=>o.href==null)||document.styleSheets[0];r.href!=null&&i.push(om(r.href).then(o=>lm(o,e)).then(o=>cm(o).forEach(c=>{a.insertRule(c,a.cssRules.length)})).catch(o=>{console.error("Error loading remote stylesheet",o)})),console.error("Error inlining remote css file",s)}}),Promise.all(i).then(()=>(t.forEach(r=>{if("cssRules"in r)try{hr(r.cssRules||[]).forEach(s=>{n.push(s)})}catch(s){console.error(`Error while reading CSS rules from ${r.href}`,s)}}),n))}function a1(t){return t.filter(e=>e.type===CSSRule.FONT_FACE_RULE).filter(e=>Dx(e.style.getPropertyValue("src")))}async function o1(t,e){if(t.ownerDocument==null)throw new Error("Provided element is not within a Document");const n=hr(t.ownerDocument.styleSheets),i=await s1(n,e);return a1(i)}function Fx(t){return t.trim().replace(/["']/g,"")}function l1(t){const e=new Set;function n(i){(i.style.fontFamily||getComputedStyle(i).fontFamily).split(",").forEach(s=>{e.add(Fx(s))}),Array.from(i.children).forEach(s=>{s instanceof HTMLElement&&n(s)})}return n(t),e}async function c1(t,e){const n=await o1(t,e),i=l1(t);return(await Promise.all(n.filter(s=>i.has(Fx(s.style.fontFamily))).map(s=>{const a=s.parentStyleSheet?s.parentStyleSheet.href:null;return Ix(s.cssText,a,e)}))).join(`
`)}async function u1(t,e){const n=e.fontEmbedCSS!=null?e.fontEmbedCSS:e.skipFonts?null:await c1(t,e);if(n){const i=document.createElement("style"),r=document.createTextNode(n);i.appendChild(r),t.firstChild?t.insertBefore(i,t.firstChild):t.appendChild(i)}}async function d1(t,e={}){const{width:n,height:i}=Rx(t,e),r=await mc(t,e,!0);return await u1(r,e),await Ux(r,e),r1(r,e),await AS(r,n,i)}async function f1(t,e={}){const{width:n,height:i}=Rx(t,e),r=await d1(t,e),s=await jl(r),a=document.createElement("canvas"),o=a.getContext("2d"),c=e.pixelRatio||bS(),u=e.canvasWidth||n,h=e.canvasHeight||i;return a.width=u*c,a.height=h*c,e.skipAutoScale||TS(a),a.style.width=`${u}`,a.style.height=`${h}`,e.backgroundColor&&(o.fillStyle=e.backgroundColor,o.fillRect(0,0,a.width,a.height)),o.drawImage(s,0,0,a.width,a.height),a}async function Ka(t,e={}){return(await f1(t,e)).toDataURL()}var kx={exports:{}};(function(t,e){(function(n,i,r,s){var a={URL:n.URL||n.webkitURL||n.mozURL||n.msURL,getUserMedia:function(){var b=r.getUserMedia||r.webkitGetUserMedia||r.mozGetUserMedia||r.msGetUserMedia;return b&&b.bind(r)}(),requestAnimFrame:n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame||n.oRequestAnimationFrame||n.msRequestAnimationFrame,requestTimeout:function(w,L){if(w=w||a.noop,L=L||0,!a.requestAnimFrame)return setTimeout(w,L);var O=new Date().getTime(),U=new Object,oe=a.requestAnimFrame,ce=function se(){var k=new Date().getTime(),$=k-O;$>=L?w.call():U.value=oe(se)};return U.value=oe(ce),U},Blob:n.Blob||n.BlobBuilder||n.WebKitBlobBuilder||n.MozBlobBuilder||n.MSBlobBuilder,btoa:function(){var b=n.btoa||function(w){for(var L="",O=0,U=w.length,oe="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",ce=void 0,se=void 0,k=void 0,$=void 0,Z=void 0,ge=void 0,me=void 0;O<U;)ce=w.charCodeAt(O++),se=w.charCodeAt(O++),k=w.charCodeAt(O++),$=ce>>2,Z=(ce&3)<<4|se>>4,ge=(se&15)<<2|k>>6,me=k&63,isNaN(se)?ge=me=64:isNaN(k)&&(me=64),L=L+oe.charAt($)+oe.charAt(Z)+oe.charAt(ge)+oe.charAt(me);return L};return b?b.bind(n):a.noop}(),isObject:function(w){return w&&Object.prototype.toString.call(w)==="[object Object]"},isEmptyObject:function(w){return a.isObject(w)&&!Object.keys(w).length},isArray:function(w){return w&&Array.isArray(w)},isFunction:function(w){return w&&typeof w=="function"},isElement:function(w){return w&&w.nodeType===1},isString:function(w){return typeof w=="string"||Object.prototype.toString.call(w)==="[object String]"},isSupported:{canvas:function(){var w=i.createElement("canvas");return w&&w.getContext&&w.getContext("2d")},webworkers:function(){return n.Worker},blob:function(){return a.Blob},Uint8Array:function(){return n.Uint8Array},Uint32Array:function(){return n.Uint32Array},videoCodecs:function(){var b=i.createElement("video"),w={mp4:!1,h264:!1,ogv:!1,ogg:!1,webm:!1};try{b&&b.canPlayType&&(w.mp4=b.canPlayType('video/mp4; codecs="mp4v.20.8"')!=="",w.h264=(b.canPlayType('video/mp4; codecs="avc1.42E01E"')||b.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'))!=="",w.ogv=b.canPlayType('video/ogg; codecs="theora"')!=="",w.ogg=b.canPlayType('video/ogg; codecs="theora"')!=="",w.webm=b.canPlayType('video/webm; codecs="vp8, vorbis"')!==-1)}catch{}return w}()},noop:function(){},each:function(w,L){var O=void 0,U=void 0;if(a.isArray(w))for(O=-1,U=w.length;++O<U&&L(O,w[O])!==!1;);else if(a.isObject(w)){for(O in w)if(w.hasOwnProperty(O)&&L(O,w[O])===!1)break}},mergeOptions:function(w,L){if(!(!a.isObject(w)||!a.isObject(L)||!Object.keys)){var O={};return a.each(w,function(U,oe){O[U]=w[U]}),a.each(L,function(U,oe){var ce=L[U];a.isObject(ce)&&w[U]?O[U]=a.mergeOptions(w[U],ce):O[U]=ce}),O}},setCSSAttr:function(w,L,O){a.isElement(w)&&(a.isString(L)&&a.isString(O)?w.style[L]=O:a.isObject(L)&&a.each(L,function(U,oe){w.style[U]=oe}))},removeElement:function(w){a.isElement(w)&&w.parentNode&&w.parentNode.removeChild(w)},createWebWorker:function(w){if(!a.isString(w))return{};try{var L=new a.Blob([w],{type:"text/javascript"}),O=a.URL.createObjectURL(L),U=new Worker(O);return{objectUrl:O,worker:U}}catch(oe){return""+oe}},getExtension:function(w){return w.substr(w.lastIndexOf(".")+1,w.length)},getFontSize:function(){var w=arguments.length>0&&arguments[0]!==s?arguments[0]:{};if(!i.body||w.resizeFont===!1)return w.fontSize;var L=w.text,O=w.gifWidth,U=parseInt(w.fontSize,10),oe=parseInt(w.minFontSize,10),ce=i.createElement("div"),se=i.createElement("span");for(ce.setAttribute("width",O),ce.appendChild(se),se.innerHTML=L,se.style.fontSize=U+"px",se.style.textIndent="-9999px",se.style.visibility="hidden",i.body.appendChild(se);se.offsetWidth>O&&U>=oe;)se.style.fontSize=--U+"px";return i.body.removeChild(se),U+"px"},webWorkerError:!1},o=Object.freeze({default:a}),c={validate:function(w){w=a.isObject(w)?w:{};var L={};return a.each(c.validators,function(O,U){var oe=U.errorCode;if(!w[oe]&&!U.condition)return L=U,L.error=!0,!1}),delete L.condition,L},isValid:function(w){var L=c.validate(w),O=L.error!==!0;return O},validators:[{condition:a.isFunction(a.getUserMedia),errorCode:"getUserMedia",errorMsg:"The getUserMedia API is not supported in your browser"},{condition:a.isSupported.canvas(),errorCode:"canvas",errorMsg:"Canvas elements are not supported in your browser"},{condition:a.isSupported.webworkers(),errorCode:"webworkers",errorMsg:"The Web Workers API is not supported in your browser"},{condition:a.isFunction(a.URL),errorCode:"window.URL",errorMsg:"The window.URL API is not supported in your browser"},{condition:a.isSupported.blob(),errorCode:"window.Blob",errorMsg:"The window.Blob File API is not supported in your browser"},{condition:a.isSupported.Uint8Array(),errorCode:"window.Uint8Array",errorMsg:"The window.Uint8Array function constructor is not supported in your browser"},{condition:a.isSupported.Uint32Array(),errorCode:"window.Uint32Array",errorMsg:"The window.Uint32Array function constructor is not supported in your browser"}],messages:{videoCodecs:{errorCode:"videocodec",errorMsg:"The video codec you are trying to use is not supported in your browser"}}},u=Object.freeze({default:c}),h=function(){},p={sampleInterval:10,numWorkers:2,filter:"",gifWidth:200,gifHeight:200,interval:.1,numFrames:10,frameDuration:1,keepCameraOn:!1,images:[],video:null,webcamVideoElement:null,cameraStream:null,text:"",fontWeight:"normal",fontSize:"16px",minFontSize:"10px",resizeFont:!1,fontFamily:"sans-serif",fontColor:"#ffffff",textAlign:"center",textBaseline:"bottom",textXCoordinate:null,textYCoordinate:null,progressCallback:h,completeCallback:h,saveRenderingContexts:!1,savedRenderingContexts:[],crossOrigin:"Anonymous"},f=Object.freeze({default:p});function m(){return c.isValid()}function _(){return c.isValid()}function E(){var b={getUserMedia:!0};return c.isValid(b)}function x(b){var w=!1;if(a.isArray(b)&&b.length){if(a.each(b,function(L,O){a.isSupported.videoCodecs[O]&&(w=!0)}),!w)return!1}else if(a.isString(b)&&b.length&&!a.isSupported.videoCodecs[b])return!1;return c.isValid({getUserMedia:!0})}function d(){var b=256,w=499,L=491,O=487,U=503,oe=3*U,ce=b-1,se=4,k=100,$=16,Z=1<<$,ge=10,me=10,he=Z>>me,Pe=Z<<ge-me,Se=b>>3,Me=6,Ae=1<<Me,Be=Se*Ae,je=30,Xe=10,Ye=1<<Xe,Je,Ke=8,et=1<<Ke,B=Xe+Ke,tt=1<<B,qe,D,y,H,K=[],le=[],xe=[],we=[];function de(Y,F,re){var j,fe;for(qe=Y,D=F,y=re,H=new Array(b),j=0;j<b;j++)H[j]=new Array(4),fe=H[j],fe[0]=fe[1]=fe[2]=(j<<se+8)/b|0,xe[j]=Z/b|0,le[j]=0}function pe(){for(var Y=[],F=new Array(b),re=0;re<b;re++)F[H[re][3]]=re;for(var j=0,fe=0;fe<b;fe++){var ie=F[fe];Y[j++]=H[ie][0],Y[j++]=H[ie][1],Y[j++]=H[ie][2]}return Y}function Ee(){var Y,F,re,j,fe,ie,ve,Oe;for(ve=0,Oe=0,Y=0;Y<b;Y++){for(fe=H[Y],re=Y,j=fe[1],F=Y+1;F<b;F++)ie=H[F],ie[1]<j&&(re=F,j=ie[1]);if(ie=H[re],Y!=re&&(F=ie[0],ie[0]=fe[0],fe[0]=F,F=ie[1],ie[1]=fe[1],fe[1]=F,F=ie[2],ie[2]=fe[2],fe[2]=F,F=ie[3],ie[3]=fe[3],fe[3]=F),j!=ve){for(K[ve]=Oe+Y>>1,F=ve+1;F<j;F++)K[F]=Y;ve=j,Oe=Y}}for(K[ve]=Oe+ce>>1,F=ve+1;F<256;F++)K[F]=ce}function De(){var Y,F,re,j,fe,ie,ve,Oe,Ze,ht,yn,St,jt,Zr;for(D<oe&&(y=1),Je=30+(y-1)/3,St=qe,jt=0,Zr=D,yn=D/(3*y),ht=yn/k|0,Oe=Ye,ie=Be,ve=ie>>Me,ve<=1&&(ve=0),Y=0;Y<ve;Y++)we[Y]=Oe*((ve*ve-Y*Y)*et/(ve*ve));for(D<oe?Ze=3:D%w!==0?Ze=3*w:D%L!==0?Ze=3*L:D%O!==0?Ze=3*O:Ze=3*U,Y=0;Y<yn;)if(re=(St[jt+0]&255)<<se,j=(St[jt+1]&255)<<se,fe=(St[jt+2]&255)<<se,F=G(re,j,fe),Ge(Oe,F,re,j,fe),ve!==0&&ke(ve,F,re,j,fe),jt+=Ze,jt>=Zr&&(jt-=D),Y++,ht===0&&(ht=1),Y%ht===0)for(Oe-=Oe/Je,ie-=ie/je,ve=ie>>Me,ve<=1&&(ve=0),F=0;F<ve;F++)we[F]=Oe*((ve*ve-F*F)*et/(ve*ve))}function be(Y,F,re){var j,fe,ie,ve,Oe,Ze,ht;for(Oe=1e3,ht=-1,j=K[F],fe=j-1;j<b||fe>=0;)j<b&&(Ze=H[j],ie=Ze[1]-F,ie>=Oe?j=b:(j++,ie<0&&(ie=-ie),ve=Ze[0]-Y,ve<0&&(ve=-ve),ie+=ve,ie<Oe&&(ve=Ze[2]-re,ve<0&&(ve=-ve),ie+=ve,ie<Oe&&(Oe=ie,ht=Ze[3])))),fe>=0&&(Ze=H[fe],ie=F-Ze[1],ie>=Oe?fe=-1:(fe--,ie<0&&(ie=-ie),ve=Ze[0]-Y,ve<0&&(ve=-ve),ie+=ve,ie<Oe&&(ve=Ze[2]-re,ve<0&&(ve=-ve),ie+=ve,ie<Oe&&(Oe=ie,ht=Ze[3]))));return ht}function Te(){return De(),Fe(),Ee(),pe()}function Fe(){var Y;for(Y=0;Y<b;Y++)H[Y][0]>>=se,H[Y][1]>>=se,H[Y][2]>>=se,H[Y][3]=Y}function ke(Y,F,re,j,fe){var ie,ve,Oe,Ze,ht,yn,St;for(Oe=F-Y,Oe<-1&&(Oe=-1),Ze=F+Y,Ze>b&&(Ze=b),ie=F+1,ve=F-1,yn=1;ie<Ze||ve>Oe;){if(ht=we[yn++],ie<Ze){St=H[ie++];try{St[0]-=ht*(St[0]-re)/tt|0,St[1]-=ht*(St[1]-j)/tt|0,St[2]-=ht*(St[2]-fe)/tt|0}catch{}}if(ve>Oe){St=H[ve--];try{St[0]-=ht*(St[0]-re)/tt|0,St[1]-=ht*(St[1]-j)/tt|0,St[2]-=ht*(St[2]-fe)/tt|0}catch{}}}}function Ge(Y,F,re,j,fe){var ie=H[F],ve=Y/Ye;ie[0]-=ve*(ie[0]-re)|0,ie[1]-=ve*(ie[1]-j)|0,ie[2]-=ve*(ie[2]-fe)|0}function G(Y,F,re){var j,fe,ie,ve,Oe,Ze,ht,yn,St,jt;for(yn=2147483647,St=yn,Ze=-1,ht=Ze,j=0;j<b;j++)jt=H[j],fe=jt[0]-Y,fe<0&&(fe=-fe),ie=jt[1]-F,ie<0&&(ie=-ie),fe+=ie,ie=jt[2]-re,ie<0&&(ie=-ie),fe+=ie,fe<yn&&(yn=fe,Ze=j),ve=fe-(le[j]>>$-se),ve<St&&(St=ve,ht=j),Oe=xe[j]>>me,xe[j]-=Oe,le[j]+=Oe<<ge;return xe[Ze]+=he,le[Ze]-=Pe,ht}de.apply(this,arguments);var ye={};return ye.map=be,ye.process=Te,ye}function v(){var b=this;try{b.onmessage=function(L){var O=L.data||{},U;O.gifshot&&(U=w.run(O),postMessage(U))}}catch{}var w={dataToRGB:function(O,U,oe){for(var ce=U*oe*4,se=0,k=[];se<ce;)k.push(O[se++]),k.push(O[se++]),k.push(O[se++]),se++;return k},componentizedPaletteToArray:function(O){O=O||[];for(var U=[],oe=0;oe<O.length;oe+=3){var ce=O[oe],se=O[oe+1],k=O[oe+2];U.push(ce<<16|se<<8|k)}return U},processFrameWithQuantizer:function(O,U,oe,ce){for(var se=this.dataToRGB(O,U,oe),k=new d(se,se.length,ce),$=k.process(),Z=new Uint32Array(this.componentizedPaletteToArray($)),ge=U*oe,me=new Uint8Array(ge),he=0,Pe=0;Pe<ge;Pe++){var Se=se[he++],Me=se[he++],Ae=se[he++];me[Pe]=k.map(Se,Me,Ae)}return{pixels:me,palette:Z}},run:function(O){O=O||{};var U=O,oe=U.height;U.palette;var ce=U.sampleInterval,se=U.width,k=O.data;return this.processFrameWithQuantizer(k,se,oe,ce)}};return w}function M(b,w,L,O){var U=0;O=O===s?{}:O;var oe=O.loop===s?null:O.loop,ce=O.palette===s?null:O.palette;if(w<=0||L<=0||w>65535||L>65535)throw"Width/Height invalid.";function se(me){var he=me.length;if(he<2||he>256||he&he-1)throw"Invalid code/color length, must be power of 2 and 2 .. 256.";return he}b[U++]=71,b[U++]=73,b[U++]=70,b[U++]=56,b[U++]=57,b[U++]=97;var k=0,$=0;if(b[U++]=w&255,b[U++]=w>>8&255,b[U++]=L&255,b[U++]=L>>8&255,b[U++]=(ce!==null?128:0)|k,b[U++]=$,b[U++]=0,oe!==null){if(oe<0||oe>65535)throw"Loop count invalid.";b[U++]=33,b[U++]=255,b[U++]=11,b[U++]=78,b[U++]=69,b[U++]=84,b[U++]=83,b[U++]=67,b[U++]=65,b[U++]=80,b[U++]=69,b[U++]=50,b[U++]=46,b[U++]=48,b[U++]=3,b[U++]=1,b[U++]=oe&255,b[U++]=oe>>8&255,b[U++]=0}var Z=!1;this.addFrame=function(me,he,Pe,Se,Me,Ae){if(Z===!0&&(--U,Z=!1),Ae=Ae===s?{}:Ae,me<0||he<0||me>65535||he>65535)throw"x/y invalid.";if(Pe<=0||Se<=0||Pe>65535||Se>65535)throw"Width/Height invalid.";if(Me.length<Pe*Se)throw"Not enough pixels for the frame size.";var Be=!0,je=Ae.palette;if((je===s||je===null)&&(Be=!1,je=ce),je===s||je===null)throw"Must supply either a local or global palette.";for(var Xe=se(je),Ye=0;Xe>>=1;)++Ye;Xe=1<<Ye;var Je=Ae.delay===s?0:Ae.delay,Ke=Ae.disposal===s?0:Ae.disposal;if(Ke<0||Ke>3)throw"Disposal out of range.";var et=!1,B=0;if(Ae.transparent!==s&&Ae.transparent!==null&&(et=!0,B=Ae.transparent,B<0||B>=Xe))throw"Transparent color index.";if((Ke!==0||et||Je!==0)&&(b[U++]=33,b[U++]=249,b[U++]=4,b[U++]=Ke<<2|(et===!0?1:0),b[U++]=Je&255,b[U++]=Je>>8&255,b[U++]=B,b[U++]=0),b[U++]=44,b[U++]=me&255,b[U++]=me>>8&255,b[U++]=he&255,b[U++]=he>>8&255,b[U++]=Pe&255,b[U++]=Pe>>8&255,b[U++]=Se&255,b[U++]=Se>>8&255,b[U++]=Be===!0?128|Ye-1:0,Be===!0)for(var tt=0,qe=je.length;tt<qe;++tt){var D=je[tt];b[U++]=D>>16&255,b[U++]=D>>8&255,b[U++]=D&255}U=ge(b,U,Ye<2?2:Ye,Me)},this.end=function(){return Z===!1&&(b[U++]=59,Z=!0),U};function ge(me,he,Pe,Se){me[he++]=Pe;var Me=he++,Ae=1<<Pe,Be=Ae-1,je=Ae+1,Xe=je+1,Ye=Pe+1,Je=0,Ke=0;function et(xe){for(;Je>=xe;)me[he++]=Ke&255,Ke>>=8,Je-=8,he===Me+256&&(me[Me]=255,Me=he++)}function B(xe){Ke|=xe<<Je,Je+=Ye,et(8)}var tt=Se[0]&Be,qe={};B(Ae);for(var D=1,y=Se.length;D<y;++D){var H=Se[D]&Be,K=tt<<8|H,le=qe[K];if(le===s){for(Ke|=tt<<Je,Je+=Ye;Je>=8;)me[he++]=Ke&255,Ke>>=8,Je-=8,he===Me+256&&(me[Me]=255,Me=he++);Xe===4096?(B(Ae),Xe=je+1,Ye=Pe+1,qe={}):(Xe>=1<<Ye&&++Ye,qe[K]=Xe++),tt=H}else tt=le}return B(tt),B(je),et(1),Me+1===he?me[Me]=0:(me[Me]=he-Me-1,me[he++]=0),he}}var S=function(){},T=function(w){this.canvas=null,this.ctx=null,this.repeat=0,this.frames=[],this.numRenderedFrames=0,this.onRenderCompleteCallback=S,this.onRenderProgressCallback=S,this.workers=[],this.availableWorkers=[],this.generatingGIF=!1,this.options=w,this.initializeWebWorkers(w)};T.prototype={workerMethods:v(),initializeWebWorkers:function(w){var L=this,O=d.toString()+"("+v.toString()+"());",U=void 0,oe=void 0,ce=void 0,se=void 0,k=-1,$="";for(se=w.numWorkers;++k<se;)U=a.createWebWorker(O),a.isObject(U)?(oe=U.objectUrl,ce=U.worker,L.workers.push({worker:ce,objectUrl:oe}),L.availableWorkers.push(ce)):($=U,a.webWorkerError=!!U);this.workerError=$,this.canvas=i.createElement("canvas"),this.canvas.width=w.gifWidth,this.canvas.height=w.gifHeight,this.ctx=this.canvas.getContext("2d"),this.frames=[]},getWorker:function(){return this.availableWorkers.pop()},freeWorker:function(w){this.availableWorkers.push(w)},byteMap:function(){for(var b=[],w=0;w<256;w++)b[w]=String.fromCharCode(w);return b}(),bufferToString:function(w){for(var L=w.length,O="",U=-1;++U<L;)O+=this.byteMap[w[U]];return O},onFrameFinished:function(w){var L=this,O=L.frames,U=L.options,oe=!!(U.images||[]).length,ce=O.every(function(se){return!se.beingProcessed&&se.done});L.numRenderedFrames++,oe&&w(L.numRenderedFrames/O.length),L.onRenderProgressCallback(L.numRenderedFrames*.75/O.length),ce?L.generatingGIF||L.generateGIF(O,L.onRenderCompleteCallback):a.requestTimeout(function(){L.processNextFrame()},1)},processFrame:function(w){var L=this;this.options;var O=this.options,U=O.progressCallback,oe=O.sampleInterval,ce=this.frames,se=void 0,k=void 0,$=function(){var ge=arguments.length>0&&arguments[0]!==s?arguments[0]:{},me=ge.data;delete se.data,se.pixels=Array.prototype.slice.call(me.pixels),se.palette=Array.prototype.slice.call(me.palette),se.done=!0,se.beingProcessed=!1,L.freeWorker(k),L.onFrameFinished(U)};if(se=ce[w],se.beingProcessed||se.done){this.onFrameFinished();return}se.sampleInterval=oe,se.beingProcessed=!0,se.gifshot=!0,k=this.getWorker(),k?(k.onmessage=$,k.postMessage(se)):$({data:L.workerMethods.run(se)})},startRendering:function(w){this.onRenderCompleteCallback=w;for(var L=0;L<this.options.numWorkers&&L<this.frames.length;L++)this.processFrame(L)},processNextFrame:function(){for(var w=-1,L=0;L<this.frames.length;L++){var O=this.frames[L];if(!O.done&&!O.beingProcessed){w=L;break}}w>=0&&this.processFrame(w)},generateGIF:function(w,L){var O=[],U={loop:this.repeat},oe=this.options,ce=oe.interval,se=oe.frameDuration,k=oe.images,$=!!k.length,Z=oe.gifHeight,ge=oe.gifWidth,me=new M(O,ge,Z,U),he=this.onRenderProgressCallback,Pe=$?ce*100:0,Se=void 0,Me=void 0;this.generatingGIF=!0,a.each(w,function(Ae,Be){var je=Be.palette;he(.75+.25*Be.position*1/w.length);for(var Xe=0;Xe<se;Xe++)me.addFrame(0,0,ge,Z,Be.pixels,{palette:je,delay:Pe})}),me.end(),he(1),this.frames=[],this.generatingGIF=!1,a.isFunction(L)&&(Se=this.bufferToString(O),Me="data:image/gif;base64,"+a.btoa(Se),L(Me))},setRepeat:function(w){this.repeat=w},addFrame:function(w,L){L=a.isObject(L)?L:{};var O=this,U=O.ctx,oe=O.options,ce=oe.gifWidth,se=oe.gifHeight,k=a.getFontSize(L),$=L,Z=$.filter,ge=$.fontColor,me=$.fontFamily,he=$.fontWeight;$.gifHeight,$.gifWidth;var Pe=$.text,Se=$.textAlign,Me=$.textBaseline,Ae=L.textXCoordinate?L.textXCoordinate:Se==="left"?1:Se==="right"?ce:ce/2,Be=L.textYCoordinate?L.textYCoordinate:Me==="top"?1:Me==="center"?se/2:se,je=he+" "+k+" "+me,Xe=void 0;try{U.filter=Z,U.drawImage(w,0,0,ce,se),Pe&&(U.font=je,U.fillStyle=ge,U.textAlign=Se,U.textBaseline=Me,U.fillText(Pe,Ae,Be)),Xe=U.getImageData(0,0,ce,se),O.addFrameImageData(Xe)}catch(Ye){return""+Ye}},addFrameImageData:function(){var w=arguments.length>0&&arguments[0]!==s?arguments[0]:{},L=this.frames,O=w.data;this.frames.push({data:O,width:w.width,height:w.height,palette:null,dithering:null,done:!1,beingProcessed:!1,position:L.length})},onRenderProgress:function(w){this.onRenderProgressCallback=w},isRendering:function(){return this.generatingGIF},getBase64GIF:function(w){var L=this,O=function(oe){L.destroyWorkers(),a.requestTimeout(function(){w(oe)},0)};L.startRendering(O)},destroyWorkers:function(){if(!this.workerError){var w=this.workers;a.each(w,function(L,O){var U=O.worker,oe=O.objectUrl;U.terminate(),a.URL.revokeObjectURL(oe)})}}};function N(b,w){b.getBase64GIF(function(L){w({error:!1,errorCode:"",errorMsg:"",image:L})})}function P(){var b=arguments.length>0&&arguments[0]!==s?arguments[0]:{},w=b.callback,L=b.images,O=b.options,U=b.imagesLength,oe={getUserMedia:!0,"window.URL":!0},ce=c.validate(oe),se=[],k=0,$=void 0,Z=void 0;if(ce.error)return w(ce);Z=new T(O),a.each(L,function(me,he){var Pe=he;he.src&&(Pe=Pe.src),a.isElement(Pe)?(O.crossOrigin&&(Pe.crossOrigin=O.crossOrigin),se[me]=Pe,k+=1,k===U&&ge()):a.isString(Pe)&&($=new Image,O.crossOrigin&&($.crossOrigin=O.crossOrigin),function(Se){he.text&&(Se.text=he.text),Se.onerror=function(Me){var Ae=void 0;if(--U,U===0)return Ae={},Ae.error="None of the requested images was capable of being retrieved",w(Ae)},Se.onload=function(Me){he.text?se[me]={img:Se,text:Se.text}:se[me]=Se,k+=1,k===U&&ge(),a.removeElement(Se)},Se.src=Pe}($),a.setCSSAttr($,{position:"fixed",opacity:"0"}),i.body.appendChild($))});function ge(){a.each(se,function(me,he){he&&(he.text?Z.addFrame(he.img,O,he.text):Z.addFrame(he,O))}),N(Z,w)}}var g=function(){},R={getGIF:function(){var w=arguments.length>0&&arguments[0]!==s?arguments[0]:{},L=arguments[1];L=a.isFunction(L)?L:g;var O=i.createElement("canvas"),U=void 0,oe=w.images,ce=!!oe.length,se=w.cameraStream,k=w.crop,$=w.filter,Z=w.fontColor,ge=w.fontFamily,me=w.fontWeight,he=w.keepCameraOn;w.numWorkers;var Pe=w.progressCallback,Se=w.saveRenderingContexts,Me=w.savedRenderingContexts,Ae=w.text,Be=w.textAlign,je=w.textBaseline,Xe=w.videoElement,Ye=w.videoHeight,Je=w.videoWidth,Ke=w.webcamVideoElement,et=Number(w.gifWidth),B=Number(w.gifHeight),tt=Number(w.interval);Number(w.sampleInterval);var qe=ce?0:tt*1e3,D=[],y=Me.length?Me.length:w.numFrames,H=y,K=new T(w),le=a.getFontSize(w),xe=w.textXCoordinate?w.textXCoordinate:Be==="left"?1:Be==="right"?et:et/2,we=w.textYCoordinate?w.textYCoordinate:je==="top"?1:je==="center"?B/2:B,de=me+" "+le+" "+ge,pe=k?Math.floor(k.scaledWidth/2):0,Ee=k?Je-k.scaledWidth:0,De=k?Math.floor(k.scaledHeight/2):0,be=k?Ye-k.scaledHeight:0,Te=function Fe(){var ke=H-1;Me.length?(U.putImageData(Me[y-H],0,0),G()):Ge();function Ge(){try{Ee>Je&&(Ee=Je),be>Ye&&(be=Ye),pe<0&&(pe=0),De<0&&(De=0),U.filter=$,U.drawImage(Xe,pe,De,Ee,be,0,0,et,B),G()}catch(ye){if(ye.name==="NS_ERROR_NOT_AVAILABLE")a.requestTimeout(Ge,100);else throw ye}}function G(){var ye=void 0;Se&&D.push(U.getImageData(0,0,et,B)),Ae&&(U.font=de,U.fillStyle=Z,U.textAlign=Be,U.textBaseline=je,U.fillText(Ae,xe,we)),ye=U.getImageData(0,0,et,B),K.addFrameImageData(ye),H=ke,Pe((y-H)/y),ke>0&&a.requestTimeout(Fe,qe),H||K.getBase64GIF(function(Y){L({error:!1,errorCode:"",errorMsg:"",image:Y,cameraStream:se,videoElement:Xe,webcamVideoElement:Ke,savedRenderingContexts:D,keepCameraOn:he})})}};y=y!==s?y:10,tt=tt!==s?tt:.1,O.width=et,O.height=B,U=O.getContext("2d"),function Fe(){if(!Me.length&&Xe.currentTime===0){a.requestTimeout(Fe,100);return}Te()}()},getCropDimensions:function(){var w=arguments.length>0&&arguments[0]!==s?arguments[0]:{},L=w.videoWidth,O=w.videoHeight,U=w.gifWidth,oe=w.gifHeight,ce={width:0,height:0,scaledWidth:0,scaledHeight:0};return L>O?(ce.width=Math.round(L*(oe/O))-U,ce.scaledWidth=Math.round(ce.width*(O/oe))):(ce.height=Math.round(O*(U/L))-oe,ce.scaledHeight=Math.round(ce.height*(L/U))),ce}},A={loadedData:!1,defaultVideoDimensions:{width:640,height:480},findVideoSize:function b(w){b.attempts=b.attempts||0;var L=w.cameraStream,O=w.completedCallback,U=w.videoElement;U&&(U.videoWidth>0&&U.videoHeight>0?(U.removeEventListener("loadeddata",A.findVideoSize),O({videoElement:U,cameraStream:L,videoWidth:U.videoWidth,videoHeight:U.videoHeight})):b.attempts<10?(b.attempts+=1,a.requestTimeout(function(){A.findVideoSize(w)},400)):O({videoElement:U,cameraStream:L,videoWidth:A.defaultVideoDimensions.width,videoHeight:A.defaultVideoDimensions.height}))},onStreamingTimeout:function(w){a.isFunction(w)&&w({error:!0,errorCode:"getUserMedia",errorMsg:"There was an issue with the getUserMedia API - Timed out while trying to start streaming",image:null,cameraStream:{}})},stream:function(w){var L=a.isArray(w.existingVideo)?w.existingVideo[0]:w.existingVideo,O=w.cameraStream,U=w.completedCallback,oe=w.streamedCallback,ce=w.videoElement;if(a.isFunction(oe)&&oe(),L){if(a.isString(L))ce.src=L,ce.innerHTML='<source src="'+L+'" type="video/'+a.getExtension(L)+'" />';else if(L instanceof Blob){try{ce.src=a.URL.createObjectURL(L)}catch{}ce.innerHTML='<source src="'+L+'" type="'+L.type+'" />'}}else if(ce.mozSrcObject)ce.mozSrcObject=O;else if(a.URL)try{ce.srcObject=O,ce.src=a.URL.createObjectURL(O)}catch{ce.srcObject=O}ce.play(),a.requestTimeout(function se(){se.count=se.count||0,A.loadedData===!0?(A.findVideoSize({videoElement:ce,cameraStream:O,completedCallback:U}),A.loadedData=!1):(se.count+=1,se.count>10?A.findVideoSize({videoElement:ce,cameraStream:O,completedCallback:U}):se())},0)},startStreaming:function(w){var L=a.isFunction(w.error)?w.error:a.noop,O=a.isFunction(w.streamed)?w.streamed:a.noop,U=a.isFunction(w.completed)?w.completed:a.noop,oe=w.crossOrigin,ce=w.existingVideo,se=w.lastCameraStream,k=w.options,$=w.webcamVideoElement,Z=a.isElement(ce)?ce:$||i.createElement("video");oe&&(Z.crossOrigin=k.crossOrigin),Z.autoplay=!0,Z.loop=!0,Z.muted=!0,Z.addEventListener("loadeddata",function(ge){A.loadedData=!0,k.offset&&(Z.currentTime=k.offset)}),ce?A.stream({videoElement:Z,existingVideo:ce,completedCallback:U}):se?A.stream({videoElement:Z,cameraStream:se,streamedCallback:O,completedCallback:U}):a.getUserMedia({video:!0},function(ge){A.stream({videoElement:Z,cameraStream:ge,streamedCallback:O,completedCallback:U})},L)},startVideoStreaming:function(w){var L=arguments.length>1&&arguments[1]!==s?arguments[1]:{},O=L.timeout!==s?L.timeout:0,U=L.callback,oe=L.webcamVideoElement,ce=void 0;O>0&&(ce=a.requestTimeout(function(){A.onStreamingTimeout(U)},1e4)),A.startStreaming({error:function(){U({error:!0,errorCode:"getUserMedia",errorMsg:"There was an issue with the getUserMedia API - the user probably denied permission",image:null,cameraStream:{}})},streamed:function(){clearTimeout(ce)},completed:function(){var k=arguments.length>0&&arguments[0]!==s?arguments[0]:{},$=k.cameraStream,Z=k.videoElement,ge=k.videoHeight,me=k.videoWidth;w({cameraStream:$,videoElement:Z,videoHeight:ge,videoWidth:me})},lastCameraStream:L.lastCameraStream,webcamVideoElement:oe,crossOrigin:L.crossOrigin,options:L})},stopVideoStreaming:function(w){w=a.isObject(w)?w:{};var L=w,O=L.keepCameraOn,U=L.videoElement,oe=L.webcamVideoElement,ce=w.cameraStream||{},se=ce.getTracks?ce.getTracks()||[]:[],k=!!se.length,$=se[0];!O&&k&&a.isFunction($.stop)&&$.stop(),a.isElement(U)&&!oe&&(U.pause(),a.isFunction(a.URL.revokeObjectURL)&&!a.webWorkerError&&U.src&&a.URL.revokeObjectURL(U.src),a.removeElement(U))}};function I(b){b=a.isObject(b)?b:{},A.stopVideoStreaming(b)}function z(b,w){var L=b.options||{},O=L.images,U=L.video,oe=Number(L.gifWidth),ce=Number(L.gifHeight);Number(L.numFrames);var se=b.cameraStream,k=b.videoElement,$=b.videoWidth,Z=b.videoHeight,ge=R.getCropDimensions({videoWidth:$,videoHeight:Z,gifHeight:ce,gifWidth:oe}),me=w;L.crop=ge,L.videoElement=k,L.videoWidth=$,L.videoHeight=Z,L.cameraStream=se,a.isElement(k)&&(k.width=oe+ge.width,k.height=ce+ge.height,L.webcamVideoElement||(a.setCSSAttr(k,{position:"fixed",opacity:"0"}),i.body.appendChild(k)),k.play(),R.getGIF(L,function(he){(!O||!O.length)&&(!U||!U.length)&&I(he),me(he)}))}function W(){var b=arguments.length>0&&arguments[0]!==s?arguments[0]:{},w=b.callback,L=b.existingVideo,O=b.options,U={getUserMedia:!0,"window.URL":!0},oe=c.validate(U),ce=void 0,se=void 0;if(oe.error)return w(oe);if(a.isElement(L)&&L.src){if(se=L.src,ce=a.getExtension(se),!a.isSupported.videoCodecs[ce])return w(c.messages.videoCodecs)}else a.isArray(L)&&a.each(L,function(k,$){if($ instanceof Blob?ce=$.type.substr($.type.lastIndexOf("/")+1,$.length):ce=$.substr($.lastIndexOf(".")+1,$.length),a.isSupported.videoCodecs[ce])return L=$,!1});A.startStreaming({completed:function($){$.options=O||{},z($,w)},existingVideo:L,crossOrigin:O.crossOrigin,options:O})}function ne(){var b=arguments.length>0&&arguments[0]!==s?arguments[0]:{},w=b.callback,L=b.lastCameraStream,O=b.options,U=b.webcamVideoElement;if(!_())return w(c.validate());if(O.savedRenderingContexts.length){R.getGIF(O,function(oe){w(oe)});return}A.startVideoStreaming(function(){var oe=arguments.length>0&&arguments[0]!==s?arguments[0]:{};oe.options=O||{},z(oe,w)},{lastCameraStream:L,callback:w,webcamVideoElement:U,crossOrigin:O.crossOrigin})}function V(b,w){if(w=a.isFunction(b)?b:w,b=a.isObject(b)?b:{},!!a.isFunction(w)){var L=a.mergeOptions(p,b)||{},O=b.cameraStream,U=L.images,oe=U?U.length:0,ce=L.video,se=L.webcamVideoElement;L=a.mergeOptions(L,{gifWidth:Math.floor(L.gifWidth),gifHeight:Math.floor(L.gifHeight)}),oe?P({images:U,imagesLength:oe,callback:w,options:L}):ce?W({existingVideo:ce,callback:w,options:L}):ne({lastCameraStream:O,callback:w,webcamVideoElement:se,options:L})}}function Q(b,w){if(w=a.isFunction(b)?b:w,b=a.isObject(b)?b:{},!!a.isFunction(w)){var L=a.mergeOptions(p,b),O=a.mergeOptions(L,{interval:.1,numFrames:1,gifWidth:Math.floor(L.gifWidth),gifHeight:Math.floor(L.gifHeight)});V(O,w)}}var q={utils:o,error:u,defaultOptions:f,createGIF:V,takeSnapShot:Q,stopVideoStreaming:I,isSupported:m,isWebCamGIFSupported:_,isExistingVideoGIFSupported:x,isExistingImagesGIFSupported:E,VERSION:"0.4.5"};t.exports=q})(typeof window<"u"?window:{},typeof document<"u"?document:{createElement:function(){}},typeof window<"u"?window.navigator:{})})(kx);var h1=kx.exports;const Ox=h0(h1),um=t=>{if(!t||t==="")return"0";const e=t.toString().replace(/\s/g,"");return isNaN(e)?t:parseInt(e).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")};function p1({neolensPost:t,setNeolensPost:e,onBack:n,isDragging:i,setIsDragging:r,dragStart:s,setDragStart:a,isDraggingAvatar:o,setIsDraggingAvatar:c,dragStartAvatar:u,setDragStartAvatar:h,showComments:p,setShowComments:f,showMentions:m,setShowMentions:_}){const[E,x]=ue.useState(!0),[d,v]=ue.useState(!1),[M,S]=ue.useState(!1),[T,N]=ue.useState(!1),P=t.images[t.currentImageIndex],g=t.images.filter(A=>A.url),R=A=>{const I=[...t.images];I[t.currentImageIndex]={...P,...A},e({...t,images:I})};return l.jsx("div",{className:"fixed inset-0 bg-black z-50 overflow-y-auto",children:l.jsxs("div",{className:"max-w-7xl mx-auto p-8",children:[l.jsxs("button",{onClick:n,className:"flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8",children:[l.jsx(Kn,{className:"w-5 h-5"}),l.jsx("span",{children:"Retour"})]}),l.jsx("h1",{className:"text-4xl font-bold text-white mb-2",children:"Générateur Neolens"}),l.jsx("p",{className:"text-gray-400 mb-8",children:"Créez votre post Neolens"}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Avatar"}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("input",{type:"text",placeholder:"URL de l'avatar...",value:t.avatar,onChange:A=>e({...t,avatar:A.target.value}),className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"}),l.jsx("input",{type:"file",accept:"image/*",onChange:A=>{const I=A.target.files[0];if(I){const z=new FileReader;z.onload=W=>e({...t,avatar:W.target.result}),z.readAsDataURL(I)}},className:"hidden",id:"avatar-upload"}),l.jsxs("label",{htmlFor:"avatar-upload",className:"flex items-center justify-center gap-2 w-full bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-3 cursor-pointer transition-colors",children:[l.jsx(Ws,{className:"w-4 h-4"}),"Importer un avatar"]})]}),l.jsxs("div",{className:"mt-4 space-y-2",children:[l.jsxs("label",{className:"block text-xs text-gray-400",children:["Zoom: ",t.avatarZoom.toFixed(2),"x"]}),l.jsx("input",{type:"range",min:"0.3",max:"3",step:"0.1",value:t.avatarZoom,onChange:A=>e({...t,avatarZoom:parseFloat(A.target.value)}),className:"w-full"}),l.jsx("p",{className:"text-xs text-gray-500",children:"Glissez l'avatar dans le preview pour le repositionner"}),l.jsx("button",{onClick:()=>e({...t,avatarPosition:{x:0,y:0},avatarZoom:1}),className:"w-full bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-2 text-xs transition-colors",children:"Réinitialiser la position"})]})]}),[0,1,2].map(A=>{const I=t.images[A],z=A===0?E:A===1?d:M,W=A===0?x:A===1?v:S;return l.jsxs("div",{className:"border border-zinc-800 bg-zinc-900/30",children:[l.jsxs("button",{onClick:()=>{W(!z),e({...t,currentImageIndex:A})},className:"w-full flex items-center justify-between p-4 hover:bg-zinc-800/50 transition-colors",children:[l.jsxs("label",{className:"block text-sm font-medium text-gray-400 cursor-pointer",children:["Image ",A+1," ",I.url&&"✓"]}),z?l.jsx(La,{className:"w-4 h-4 text-gray-400"}):l.jsx(Pa,{className:"w-4 h-4 text-gray-400"})]}),z&&l.jsxs("div",{className:"p-4 pt-0 space-y-3",children:[l.jsx("input",{type:"text",placeholder:"URL de l'image...",value:I.url,onChange:ne=>{const V=[...t.images];V[A]={...I,url:ne.target.value},e({...t,images:V,currentImageIndex:A})},className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"}),l.jsx("input",{type:"file",accept:"image/*",onChange:ne=>{const V=ne.target.files[0];if(V){const Q=new FileReader;Q.onload=q=>{const b=[...t.images];b[A]={...I,url:q.target.result},e({...t,images:b,currentImageIndex:A})},Q.readAsDataURL(V)}},className:"hidden",id:`image-upload-${A}`}),l.jsxs("label",{htmlFor:`image-upload-${A}`,className:"flex items-center justify-center gap-2 w-full bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-3 cursor-pointer transition-colors",children:[l.jsx(Ws,{className:"w-4 h-4"}),"Importer une image"]}),I.url&&l.jsxs("div",{className:"space-y-2",children:[l.jsxs("label",{className:"block text-xs text-gray-400",children:["Zoom: ",I.zoom.toFixed(2),"x"]}),l.jsx("input",{type:"range",min:"0.3",max:"3",step:"0.1",value:I.zoom,onChange:ne=>{const V=[...t.images];V[A]={...I,zoom:parseFloat(ne.target.value)},e({...t,images:V,currentImageIndex:A})},className:"w-full"}),l.jsx("p",{className:"text-xs text-gray-500",children:"Glissez l'image dans le preview pour la repositionner"}),l.jsx("button",{onClick:()=>{const ne=[...t.images];ne[A]={...I,position:{x:0,y:0},zoom:1},e({...t,images:ne,currentImageIndex:A})},className:"w-full bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-2 text-xs transition-colors",children:"Réinitialiser la position"})]})]})]},A)}),l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Nom d'utilisateur"}),l.jsx("input",{type:"text",value:t.username,onChange:A=>e({...t,username:A.target.value}),className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"})]}),l.jsxs("div",{className:"border border-zinc-800 bg-zinc-900/30",children:[l.jsxs("button",{onClick:()=>_(!m),className:"w-full flex items-center justify-between p-4 hover:bg-zinc-800/50 transition-colors",children:[l.jsx("label",{className:"block text-sm font-medium text-gray-400 cursor-pointer",children:"Mentions (optionnel)"}),m?l.jsx(La,{className:"w-4 h-4 text-gray-400"}):l.jsx(Pa,{className:"w-4 h-4 text-gray-400"})]}),m&&l.jsxs("div",{className:"p-4 pt-0",children:[l.jsx("input",{type:"text",placeholder:"user1, user2, user3",value:t.mentions,onChange:A=>e({...t,mentions:A.target.value}),className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"}),l.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Séparez les mentions par des virgules (@ ajouté automatiquement)"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Légende"}),l.jsx("textarea",{value:t.caption,onChange:A=>e({...t,caption:A.target.value}),rows:3,placeholder:"Écrivez votre légende...",className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors resize-none"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Hashtags"}),l.jsx("input",{type:"text",value:t.hashtags,onChange:A=>e({...t,hashtags:A.target.value}),placeholder:"tag1, tag2, tag3",className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"}),l.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Séparez les hashtags par des virgules (# ajouté automatiquement)"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Likes"}),l.jsx("input",{type:"text",value:t.likes,onChange:A=>e({...t,likes:A.target.value}),className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"})]})]}),l.jsxs("div",{className:"border border-zinc-800 bg-zinc-900/30",children:[l.jsxs("button",{onClick:()=>f(!p),className:"w-full flex items-center justify-between p-4 hover:bg-zinc-800/50 transition-colors",children:[l.jsx("label",{className:"block text-sm font-medium text-gray-400 cursor-pointer",children:"Commentaires (optionnel)"}),p?l.jsx(La,{className:"w-4 h-4 text-gray-400"}):l.jsx(Pa,{className:"w-4 h-4 text-gray-400"})]}),p&&l.jsx("div",{className:"p-4 pt-0 space-y-4",children:t.comments.map((A,I)=>l.jsxs("div",{className:"space-y-2 border-l-2 border-zinc-700 pl-3",children:[l.jsxs("p",{className:"text-xs text-gray-500",children:["Commentaire ",I+1]}),l.jsx("input",{type:"text",placeholder:"Nom d'utilisateur...",value:A.username,onChange:z=>{const W=[...t.comments];W[I].username=z.target.value,e({...t,comments:W})},className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-3 py-2 focus:outline-none focus:border-zinc-600 transition-colors text-sm"}),l.jsx("input",{type:"text",placeholder:"Texte du commentaire...",value:A.text,onChange:z=>{const W=[...t.comments];W[I].text=z.target.value,e({...t,comments:W})},className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-3 py-2 focus:outline-none focus:border-zinc-600 transition-colors text-sm"}),l.jsx("input",{type:"text",placeholder:"Nombre de likes...",value:A.likes,onChange:z=>{const W=[...t.comments];W[I].likes=z.target.value,e({...t,comments:W})},className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-3 py-2 focus:outline-none focus:border-zinc-600 transition-colors text-sm"})]},I))})]}),l.jsx("button",{onClick:async()=>{N(!0);const A=document.getElementById("neolens-template"),I=t.images.filter(z=>z.url);if(I.length===0){alert("Ajoutez au moins une image ou une vidéo"),N(!1);return}if(I.length===1){try{const z=await Ka(A,{cacheBust:!0,pixelRatio:2,backgroundColor:"#000000"}),W=document.createElement("a");W.download="neolens-post.png",W.href=z,W.click()}catch(z){console.error("Erreur export:",z)}N(!1)}else{const z=[],W=t.currentImageIndex;for(let Q=0;Q<3;Q++)if(t.images[Q].url){e({...t,currentImageIndex:Q}),await new Promise(b=>setTimeout(b,100));const q=await Ka(A,{cacheBust:!0,pixelRatio:2,backgroundColor:"#000000"});z.push(q)}e({...t,currentImageIndex:W});const ne=A.offsetWidth*2,V=A.offsetHeight*2;Ox.createGIF({images:z,gifWidth:ne,gifHeight:V,interval:2,numFrames:z.length,frameDuration:2},Q=>{if(Q.error)console.error("Erreur GIF:",Q.error);else{const q=document.createElement("a");q.download="neolens-post.gif",q.href=Q.image,q.click()}N(!1)})}},disabled:T,className:"w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 text-white px-6 py-3 text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:T?"Export en cours...":"Enregistrer"})]}),l.jsx("div",{className:"flex items-start justify-center",children:l.jsxs("div",{id:"neolens-template",className:"bg-black border-2 border-cyan-500/30 shadow-lg shadow-cyan-500/20",style:{width:"400px"},children:[l.jsxs("div",{className:"p-3 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-950/30 to-blue-950/30",children:[l.jsx("img",{src:"media/neolens_logo.png",alt:"Neolens",className:"h-6 w-6 object-contain"}),l.jsx("span",{className:"text-cyan-400/50 text-sm font-semibold tracking-wider",children:"NEOLENS"})]}),l.jsxs("div",{className:"flex items-center gap-3 p-4 border-b-2 border-cyan-500/30 bg-gradient-to-r from-cyan-950/30 to-blue-950/30",children:[t.avatar?l.jsx("div",{className:"w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-400/50 cursor-move relative flex-shrink-0",onMouseDown:A=>{c(!0),h({x:A.clientX-t.avatarPosition.x,y:A.clientY-t.avatarPosition.y})},onMouseMove:A=>{o&&e({...t,avatarPosition:{x:A.clientX-u.x,y:A.clientY-u.y}})},onMouseUp:()=>c(!1),onMouseLeave:()=>c(!1),children:l.jsx("div",{className:"absolute inset-0 flex items-center justify-center select-none",style:{transform:`translate(${t.avatarPosition.x}px, ${t.avatarPosition.y}px)`},children:l.jsx("img",{src:t.avatar,alt:"Avatar",className:"select-none",style:{transform:`scale(${t.avatarZoom})`,transformOrigin:"center",maxWidth:"100%",maxHeight:"100%",objectFit:"contain"},draggable:!1})})}):l.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 border-2 border-cyan-400/50 flex-shrink-0",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:l.jsx("span",{className:"text-white font-bold",style:{fontSize:"14px",transform:"translateY(-1px)"},children:t.username.charAt(0).toUpperCase()})}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("div",{className:"text-cyan-100 font-semibold break-words",style:{fontSize:"14px",lineHeight:"1.2",letterSpacing:"0.025em",transform:"translateY(-2px)"},children:t.username}),t.mentions&&l.jsx("div",{className:"text-cyan-400/70 break-words",style:{fontSize:"12px",lineHeight:"1.2",marginTop:"2px",transform:"translateY(-2px)"},children:t.mentions.split(",").map((A,I)=>l.jsxs("span",{children:["@",A.trim(),I<t.mentions.split(",").length-1&&", "]},I))})]})]}),l.jsxs("div",{className:"relative bg-gradient-to-br from-zinc-900 to-black overflow-hidden cursor-move",style:{aspectRatio:"1/1"},onMouseDown:A=>{P.url&&(r(!0),a({x:A.clientX-P.position.x,y:A.clientY-P.position.y}))},onMouseMove:A=>{i&&R({position:{x:A.clientX-s.x,y:A.clientY-s.y}})},onMouseUp:()=>r(!1),onMouseLeave:()=>r(!1),children:[P.url?l.jsx("div",{className:"absolute inset-0 flex items-center justify-center select-none",style:{transform:`translate(${P.position.x}px, ${P.position.y}px)`},children:l.jsx("img",{src:P.url,alt:"Post",className:"select-none",style:{transform:`scale(${P.zoom})`,transformOrigin:"center",maxWidth:"100%",maxHeight:"100%",objectFit:"contain"},draggable:!1})}):l.jsx("div",{className:"w-full h-full flex items-center justify-center",children:l.jsx("p",{className:"text-gray-600",children:"Aucune image"})}),g.length>1&&l.jsx("div",{className:"absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10",children:t.images.map((A,I)=>A.url&&l.jsx("div",{className:"w-2 h-2 rounded-full transition-all",style:{backgroundColor:I===t.currentImageIndex?"#22d3ee":"rgba(255, 255, 255, 0.4)"}},I))})]}),l.jsxs("div",{className:"p-4 space-y-3 bg-gradient-to-r from-cyan-950/30 to-blue-950/30",children:[l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsx(tm,{className:"w-6 h-6 text-cyan-400 hover:text-cyan-300 transition-colors flex-shrink-0"}),l.jsx(cS,{className:"w-6 h-6 text-cyan-400 hover:text-cyan-300 transition-colors flex-shrink-0"}),l.jsx(hS,{className:"w-6 h-6 text-cyan-400 hover:text-cyan-300 transition-colors flex-shrink-0"}),l.jsx("div",{className:"flex-1"}),l.jsx(mS,{className:"w-6 h-6 text-cyan-400 hover:text-cyan-300 transition-colors flex-shrink-0"})]}),l.jsxs("p",{className:"text-cyan-100 font-semibold text-sm",children:[l.jsx("span",{className:"text-cyan-400",children:um(t.likes)})," J'aime"]}),(t.caption||t.hashtags)&&l.jsxs("div",{className:"text-cyan-100 text-sm break-words",children:[l.jsx("span",{className:"font-semibold text-cyan-300",children:t.username}),t.caption&&l.jsx("span",{className:"ml-2",children:t.caption}),t.hashtags&&l.jsx("p",{className:"text-cyan-400 mt-1 break-words",children:t.hashtags.split(",").map((A,I)=>l.jsxs("span",{children:["#",A.trim(),I<t.hashtags.split(",").length-1&&" "]},I))})]}),t.comments.filter(A=>A.username&&A.text).map((A,I)=>l.jsxs("div",{className:"text-cyan-100 text-sm border-l-2 border-cyan-500/30 pl-2 break-words",children:[l.jsxs("div",{children:[l.jsx("span",{className:"font-semibold text-cyan-300",children:A.username}),l.jsx("span",{className:"ml-2",children:A.text})]}),A.likes&&l.jsxs("div",{style:{marginTop:"4px",transform:"translateY(-1px)"},children:[l.jsx(tm,{className:"w-3 h-3 text-cyan-500/70",style:{display:"inline-block",verticalAlign:"middle",marginRight:"4px",transform:"translateY(-1px)"}}),l.jsx("span",{className:"text-cyan-500/70",style:{display:"inline-block",verticalAlign:"middle",fontSize:"12px",transform:"translateY(-1px)"},children:um(A.likes)})]})]},I))]})]})})]})]})})}const dm=t=>{if(!t||t==="")return"0";const e=t.toString().replace(/\s/g,"");return isNaN(e)?t:parseInt(e).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")};function m1({holofansPost:t,setHolofansPost:e,onBack:n,isDragging:i,setIsDragging:r,dragStart:s,setDragStart:a,isDraggingAvatar:o,setIsDraggingAvatar:c,dragStartAvatar:u,setDragStartAvatar:h,showComments:p,setShowComments:f}){const[m,_]=ue.useState(!0),[E,x]=ue.useState(!1),[d,v]=ue.useState(!1),[M,S]=ue.useState(!1),T=t.images[t.currentImageIndex],N=t.images.filter(g=>g.url),P=g=>{const R=[...t.images];R[t.currentImageIndex]={...T,...g},e({...t,images:R})};return l.jsx("div",{className:"fixed inset-0 bg-black z-50 overflow-y-auto",children:l.jsxs("div",{className:"max-w-7xl mx-auto p-8",children:[l.jsxs("button",{onClick:n,className:"flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8",children:[l.jsx(Kn,{className:"w-5 h-5"}),l.jsx("span",{children:"Retour"})]}),l.jsx("h1",{className:"text-4xl font-bold text-white mb-2",children:"Générateur Holofans"}),l.jsx("p",{className:"text-gray-400 mb-8",children:"Créez votre post Holofans"}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Avatar"}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("input",{type:"text",placeholder:"URL de l'avatar...",value:t.avatar,onChange:g=>e({...t,avatar:g.target.value}),className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"}),l.jsx("input",{type:"file",accept:"image/*",onChange:g=>{const R=g.target.files[0];if(R){const A=new FileReader;A.onload=I=>e({...t,avatar:I.target.result}),A.readAsDataURL(R)}},className:"hidden",id:"holofans-avatar-upload"}),l.jsxs("label",{htmlFor:"holofans-avatar-upload",className:"flex items-center justify-center gap-2 w-full bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-3 cursor-pointer transition-colors",children:[l.jsx(Ws,{className:"w-4 h-4"}),"Importer un avatar"]})]}),l.jsxs("div",{className:"mt-4 space-y-2",children:[l.jsxs("label",{className:"block text-xs text-gray-400",children:["Zoom: ",t.avatarZoom.toFixed(2),"x"]}),l.jsx("input",{type:"range",min:"0.3",max:"3",step:"0.1",value:t.avatarZoom,onChange:g=>e({...t,avatarZoom:parseFloat(g.target.value)}),className:"w-full"}),l.jsx("p",{className:"text-xs text-gray-500",children:"Glissez l'avatar dans le preview pour le repositionner"}),l.jsx("button",{onClick:()=>e({...t,avatarPosition:{x:0,y:0},avatarZoom:1}),className:"w-full bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-2 text-xs transition-colors",children:"Réinitialiser la position"})]})]}),[0,1,2].map(g=>{const R=t.images[g],A=g===0?m:g===1?E:d,I=g===0?_:g===1?x:v;return l.jsxs("div",{className:"border border-zinc-800 bg-zinc-900/30",children:[l.jsxs("button",{onClick:()=>{I(!A),e({...t,currentImageIndex:g})},className:"w-full flex items-center justify-between p-4 hover:bg-zinc-800/50 transition-colors",children:[l.jsxs("label",{className:"block text-sm font-medium text-gray-400 cursor-pointer",children:["Image ",g+1," ",R.url&&"✓"]}),A?l.jsx(La,{className:"w-4 h-4 text-gray-400"}):l.jsx(Pa,{className:"w-4 h-4 text-gray-400"})]}),A&&l.jsxs("div",{className:"p-4 pt-0 space-y-3",children:[l.jsx("input",{type:"text",placeholder:"URL de l'image...",value:R.url,onChange:z=>{const W=[...t.images];W[g]={...R,url:z.target.value},e({...t,images:W,currentImageIndex:g})},className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"}),l.jsx("input",{type:"file",accept:"image/*",onChange:z=>{const W=z.target.files[0];if(W){const ne=new FileReader;ne.onload=V=>{const Q=[...t.images];Q[g]={...R,url:V.target.result},e({...t,images:Q,currentImageIndex:g})},ne.readAsDataURL(W)}},className:"hidden",id:`holofans-image-upload-${g}`}),l.jsxs("label",{htmlFor:`holofans-image-upload-${g}`,className:"flex items-center justify-center gap-2 w-full bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-3 cursor-pointer transition-colors",children:[l.jsx(Ws,{className:"w-4 h-4"}),"Importer une image"]}),R.url&&l.jsxs("div",{className:"space-y-2",children:[l.jsxs("label",{className:"block text-xs text-gray-400",children:["Zoom: ",R.zoom.toFixed(2),"x"]}),l.jsx("input",{type:"range",min:"0.3",max:"3",step:"0.1",value:R.zoom,onChange:z=>{const W=[...t.images];W[g]={...R,zoom:parseFloat(z.target.value)},e({...t,images:W,currentImageIndex:g})},className:"w-full"}),l.jsx("p",{className:"text-xs text-gray-500",children:"Glissez l'image dans le preview pour la repositionner"}),l.jsx("button",{onClick:()=>{const z=[...t.images];z[g]={...R,position:{x:0,y:0},zoom:1},e({...t,images:z,currentImageIndex:g})},className:"w-full bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-2 text-xs transition-colors",children:"Réinitialiser la position"})]})]})]},g)}),l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Nom d'utilisateur"}),l.jsx("input",{type:"text",value:t.username,onChange:g=>e({...t,username:g.target.value}),className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Mentions (séparer par des virgules)"}),l.jsx("input",{type:"text",value:t.mentions,onChange:g=>e({...t,mentions:g.target.value}),placeholder:"utilisateur1, utilisateur2, utilisateur3...",className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Légende"}),l.jsx("textarea",{value:t.caption,onChange:g=>e({...t,caption:g.target.value}),rows:3,placeholder:"Écrivez votre légende...",className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors resize-none"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Likes"}),l.jsx("input",{type:"text",value:t.likes,onChange:g=>e({...t,likes:g.target.value}),className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("input",{type:"checkbox",id:"locked",checked:t.isLocked,onChange:g=>e({...t,isLocked:g.target.checked}),className:"w-4 h-4 accent-pink-500"}),l.jsx("label",{htmlFor:"locked",className:"text-sm text-gray-400",children:"Contenu verrouillé (abonnés uniquement)"})]})]}),l.jsxs("div",{className:"border border-zinc-800 bg-zinc-900/30",children:[l.jsxs("button",{onClick:()=>f(!p),className:"w-full flex items-center justify-between p-4 hover:bg-zinc-800/50 transition-colors",children:[l.jsx("label",{className:"block text-sm font-medium text-gray-400 cursor-pointer",children:"Commentaires (optionnel)"}),p?l.jsx(La,{className:"w-4 h-4 text-gray-400"}):l.jsx(Pa,{className:"w-4 h-4 text-gray-400"})]}),p&&l.jsx("div",{className:"p-4 pt-0 space-y-4",children:t.comments.map((g,R)=>l.jsxs("div",{className:"space-y-2 border-l-2 border-zinc-700 pl-3",children:[l.jsxs("p",{className:"text-xs text-gray-500",children:["Commentaire ",R+1]}),l.jsx("input",{type:"text",placeholder:"Nom d'utilisateur...",value:g.username,onChange:A=>{const I=[...t.comments];I[R].username=A.target.value,e({...t,comments:I})},className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-3 py-2 focus:outline-none focus:border-zinc-600 transition-colors text-sm"}),l.jsx("input",{type:"text",placeholder:"Texte du commentaire...",value:g.text,onChange:A=>{const I=[...t.comments];I[R].text=A.target.value,e({...t,comments:I})},className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-3 py-2 focus:outline-none focus:border-zinc-600 transition-colors text-sm"}),l.jsx("input",{type:"text",placeholder:"Nombre de likes...",value:g.likes,onChange:A=>{const I=[...t.comments];I[R].likes=A.target.value,e({...t,comments:I})},className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-3 py-2 focus:outline-none focus:border-zinc-600 transition-colors text-sm"})]},R))})]}),l.jsx("button",{onClick:async()=>{S(!0);const g=document.getElementById("holofans-template"),R=t.images.filter(A=>A.url);if(R.length===0){alert("Ajoutez au moins une image"),S(!1);return}if(R.length===1){try{const A=await Ka(g,{cacheBust:!0,pixelRatio:2,backgroundColor:"#000000"}),I=document.createElement("a");I.download="holofans-post.png",I.href=A,I.click()}catch(A){console.error("Erreur export:",A)}S(!1)}else{const A=[],I=t.currentImageIndex;for(let ne=0;ne<3;ne++)if(t.images[ne].url){e({...t,currentImageIndex:ne}),await new Promise(Q=>setTimeout(Q,100));const V=await Ka(g,{cacheBust:!0,pixelRatio:2,backgroundColor:"#000000"});A.push(V)}e({...t,currentImageIndex:I});const z=g.offsetWidth*2,W=g.offsetHeight*2;Ox.createGIF({images:A,gifWidth:z,gifHeight:W,interval:2,numFrames:A.length,frameDuration:2},ne=>{if(ne.error)console.error("Erreur GIF:",ne.error);else{const V=document.createElement("a");V.download="holofans-post.gif",V.href=ne.image,V.click()}S(!1)})}},disabled:M,className:"w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 text-white px-6 py-3 text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:M?"Export en cours...":"Enregistrer"})]}),l.jsx("div",{className:"flex items-start justify-center",children:l.jsxs("div",{id:"holofans-template",className:"bg-zinc-950",style:{width:"400px",border:"1px solid #2a2a2a"},children:[l.jsxs("div",{className:"flex items-center gap-3 p-3",style:{backgroundColor:"#1a1a1a",borderBottom:"1px solid #2a2a2a"},children:[t.avatar?l.jsx("div",{className:"w-12 h-12 rounded-full overflow-hidden cursor-move relative flex-shrink-0",style:{border:"2px solid #2a2a2a"},onMouseDown:g=>{c(!0),h({x:g.clientX-t.avatarPosition.x,y:g.clientY-t.avatarPosition.y})},onMouseMove:g=>{o&&e({...t,avatarPosition:{x:g.clientX-u.x,y:g.clientY-u.y}})},onMouseUp:()=>c(!1),onMouseLeave:()=>c(!1),children:l.jsx("div",{className:"absolute inset-0 flex items-center justify-center select-none",style:{transform:`translate(${t.avatarPosition.x}px, ${t.avatarPosition.y}px)`},children:l.jsx("img",{src:t.avatar,alt:"Avatar",className:"select-none",style:{transform:`scale(${t.avatarZoom})`,transformOrigin:"center",maxWidth:"100%",maxHeight:"100%",objectFit:"contain"},draggable:!1})})}):l.jsx("div",{className:"w-10 h-10 rounded-full flex-shrink-0",style:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#00AFF0"},children:l.jsx("img",{src:"media/holofans_logo.png",alt:"Holofans",className:"w-8 h-8 object-contain"})}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsx("div",{className:"text-white font-semibold break-words",style:{fontSize:"15px",lineHeight:"1.2",transform:"translateY(-2px)"},children:t.username}),t.mentions&&l.jsx("div",{className:"break-words",style:{fontSize:"12px",lineHeight:"1.2",marginTop:"2px",transform:"translateY(-2px)",color:"#9ca3af"},children:t.mentions.split(",").map((g,R)=>l.jsxs("span",{children:["@",g.trim(),R<t.mentions.split(",").length-1&&", "]},R))})]}),l.jsx("button",{className:"text-white px-5 py-2 text-sm font-semibold rounded-full flex-shrink-0",style:{backgroundColor:t.isLocked?"#00AFF0":"#4a5568"},children:t.isLocked?"S'abonner":"Abonné"})]}),l.jsxs("div",{className:"relative overflow-hidden cursor-move",style:{aspectRatio:"1/1",backgroundColor:"#000000"},onMouseDown:g=>{T.url&&(r(!0),a({x:g.clientX-T.position.x,y:g.clientY-T.position.y}))},onMouseMove:g=>{i&&P({position:{x:g.clientX-s.x,y:g.clientY-s.y}})},onMouseUp:()=>r(!1),onMouseLeave:()=>r(!1),children:[T.url?l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"absolute inset-0 flex items-center justify-center select-none",style:{transform:`translate(${T.position.x}px, ${T.position.y}px)`},children:l.jsx("img",{src:T.url,alt:"Post",className:"select-none",style:{transform:`scale(${T.zoom})`,transformOrigin:"center",maxWidth:"100%",maxHeight:"100%",objectFit:"contain",filter:t.isLocked?"blur(20px)":"none"},draggable:!1})}),t.isLocked&&l.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",style:{backgroundColor:"rgba(0, 0, 0, 0.3)"},children:l.jsxs("div",{className:"text-center",children:[l.jsx("img",{src:"media/lock_logo.png",alt:"Locked",className:"w-16 h-16 mx-auto mb-3 opacity-90"}),l.jsx("p",{className:"text-white font-semibold text-base",children:"S'abonner pour débloquer"})]})})]}):l.jsx("div",{className:"w-full h-full flex items-center justify-center",children:l.jsx("p",{className:"text-gray-600",children:"Aucune image"})}),N.length>1&&l.jsx("div",{className:"absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10",children:t.images.map((g,R)=>g.url&&l.jsx("div",{className:"w-2 h-2 rounded-full transition-all",style:{backgroundColor:R===t.currentImageIndex?"#00AFF0":"rgba(255, 255, 255, 0.4)"}},R))}),l.jsxs("div",{className:"absolute bottom-3 right-3 flex items-center gap-1 opacity-40",children:[l.jsx("img",{src:"media/holofans_logo.png",alt:"Holofans",className:"h-8 w-8 object-contain"}),l.jsx("span",{className:"text-white text-base font-semibold tracking-wide",children:"HOLOFANS"})]})]}),l.jsxs("div",{className:"p-4 space-y-3",style:{backgroundColor:"#1a1a1a"},children:[l.jsxs("div",{className:"flex items-center gap-5",children:[l.jsx(Ed,{className:"w-6 h-6 flex-shrink-0",style:{color:"#9ca3af"}}),l.jsx(Tx,{className:"w-6 h-6 flex-shrink-0",style:{color:"#9ca3af"}})]}),l.jsxs("p",{className:"text-sm",style:{color:"#d1d5db"},children:[l.jsx("span",{style:{color:"#ffffff",fontWeight:"600"},children:dm(t.likes)})," likes"]}),t.caption&&l.jsxs("div",{className:"text-sm break-words",style:{color:"#d1d5db"},children:[l.jsx("span",{className:"font-semibold",style:{color:"#ffffff"},children:t.username}),l.jsx("span",{className:"ml-2",children:t.caption})]}),t.comments.filter(g=>g.username&&g.text).map((g,R)=>l.jsxs("div",{className:"text-sm pl-2 break-words",style:{color:"#d1d5db",borderLeft:"2px solid #2a2a2a"},children:[l.jsxs("div",{children:[l.jsx("span",{className:"font-semibold",style:{color:"#ffffff"},children:g.username}),l.jsx("span",{className:"ml-2",children:g.text})]}),g.likes&&l.jsxs("div",{style:{marginTop:"4px",transform:"translateY(-1px)"},children:[l.jsx(Ed,{className:"w-3 h-3",style:{display:"inline-block",verticalAlign:"middle",marginRight:"4px",transform:"translateY(-1px)",color:"#6b7280"}}),l.jsx("span",{style:{display:"inline-block",verticalAlign:"middle",fontSize:"12px",transform:"translateY(-1px)",color:"#9ca3af"},children:dm(g.likes)})]})]},R))]})]})})]})]})})}const Yc=t=>{if(!t||t==="")return"0";const e=t.toString().replace(/\s/g,"");if(isNaN(e))return t;const n=parseInt(e);return n>=1e6?(n/1e6).toFixed(1)+"M":n>=1e3?(n/1e3).toFixed(1)+"K":n.toString()},g1=t=>t?t.split(/(#\w+)/g).map((n,i)=>n.match(/^#\w+$/)?l.jsx("span",{style:{color:"#1d9bf0"},children:n},i):n):null;function x1({pingPost:t,setPingPost:e,onBack:n,isDragging:i,setIsDragging:r,dragStart:s,setDragStart:a,isDraggingAvatar:o,setIsDraggingAvatar:c,dragStartAvatar:u,setDragStartAvatar:h,showComments:p,setShowComments:f}){return l.jsx("div",{className:"fixed inset-0 bg-black z-50 overflow-y-auto",children:l.jsxs("div",{className:"max-w-7xl mx-auto p-8",children:[l.jsxs("button",{onClick:n,className:"flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8",children:[l.jsx(Kn,{className:"w-5 h-5"}),l.jsx("span",{children:"Retour"})]}),l.jsx("h1",{className:"text-4xl font-bold text-white mb-2",children:"Générateur Ping"}),l.jsx("p",{className:"text-gray-400 mb-8",children:"Créez votre post Ping"}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Avatar"}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("input",{type:"text",placeholder:"URL de l'avatar...",value:t.avatar,onChange:m=>e({...t,avatar:m.target.value}),className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"}),l.jsx("input",{type:"file",accept:"image/*",onChange:m=>{const _=m.target.files[0];if(_){const E=new FileReader;E.onload=x=>e({...t,avatar:x.target.result}),E.readAsDataURL(_)}},className:"hidden",id:"ping-avatar-upload"}),l.jsxs("label",{htmlFor:"ping-avatar-upload",className:"flex items-center justify-center gap-2 w-full bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-3 cursor-pointer transition-colors",children:[l.jsx(Ws,{className:"w-4 h-4"}),"Importer un avatar"]})]}),l.jsxs("div",{className:"mt-4 space-y-2",children:[l.jsxs("label",{className:"block text-xs text-gray-400",children:["Zoom: ",t.avatarZoom.toFixed(2),"x"]}),l.jsx("input",{type:"range",min:"0.3",max:"3",step:"0.1",value:t.avatarZoom,onChange:m=>e({...t,avatarZoom:parseFloat(m.target.value)}),className:"w-full"}),l.jsx("p",{className:"text-xs text-gray-500",children:"Glissez l'avatar dans le preview pour le repositionner"}),l.jsx("button",{onClick:()=>e({...t,avatarPosition:{x:0,y:0},avatarZoom:1}),className:"w-full bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-2 text-xs transition-colors",children:"Réinitialiser la position"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Image (optionnel)"}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("input",{type:"text",placeholder:"URL de l'image...",value:t.image,onChange:m=>e({...t,image:m.target.value}),className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"}),l.jsx("input",{type:"file",accept:"image/*",onChange:m=>{const _=m.target.files[0];if(_){const E=new FileReader;E.onload=x=>e({...t,image:x.target.result}),E.readAsDataURL(_)}},className:"hidden",id:"ping-image-upload"}),l.jsxs("label",{htmlFor:"ping-image-upload",className:"flex items-center justify-center gap-2 w-full bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-3 cursor-pointer transition-colors",children:[l.jsx(Ws,{className:"w-4 h-4"}),"Importer une image"]})]}),t.image&&l.jsxs("div",{className:"mt-4 space-y-2",children:[l.jsxs("label",{className:"block text-xs text-gray-400",children:["Zoom: ",t.imageZoom.toFixed(2),"x"]}),l.jsx("input",{type:"range",min:"0.3",max:"3",step:"0.1",value:t.imageZoom,onChange:m=>e({...t,imageZoom:parseFloat(m.target.value)}),className:"w-full"}),l.jsx("p",{className:"text-xs text-gray-500",children:"Glissez l'image dans le preview pour la repositionner"}),l.jsx("button",{onClick:()=>e({...t,imagePosition:{x:0,y:0},imageZoom:1}),className:"w-full bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-2 text-xs transition-colors",children:"Réinitialiser la position"})]})]}),l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Nom d'utilisateur"}),l.jsx("input",{type:"text",value:t.username,onChange:m=>e({...t,username:m.target.value}),className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Pseudo (@handle)"}),l.jsx("input",{type:"text",value:t.handle,onChange:m=>e({...t,handle:m.target.value}),placeholder:"handle",className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Texte du ping"}),l.jsx("textarea",{value:t.text,onChange:m=>e({...t,text:m.target.value}),rows:4,placeholder:"Quoi de neuf ?",className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors resize-none"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Date et heure"}),l.jsx("input",{type:"text",value:t.timestamp,onChange:m=>e({...t,timestamp:m.target.value}),placeholder:"12:34 · 30 mai 2026",className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"})]}),l.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Réponses"}),l.jsx("input",{type:"text",value:t.replies,onChange:m=>e({...t,replies:m.target.value}),placeholder:"0",className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Repings"}),l.jsx("input",{type:"text",value:t.repings,onChange:m=>e({...t,repings:m.target.value}),placeholder:"0",className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Likes"}),l.jsx("input",{type:"text",value:t.likes,onChange:m=>e({...t,likes:m.target.value}),placeholder:"0",className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"})]})]})]}),l.jsx("button",{onClick:()=>{const m=document.getElementById("ping-template");Ka(m,{cacheBust:!0,pixelRatio:2,backgroundColor:"#000000"}).then(_=>{const E=document.createElement("a");E.download="ping-post.png",E.href=_,E.click()}).catch(_=>{console.error("Erreur export:",_)})},className:"w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 text-white px-6 py-3 text-sm transition-colors",children:"Enregistrer l'image"})]}),l.jsx("div",{className:"flex items-start justify-center",children:l.jsxs("div",{id:"ping-template",className:"bg-black",style:{width:"600px",border:"1px solid #2f3336"},children:[l.jsx("div",{className:"p-4",style:{borderBottom:"1px solid #2f3336"},children:l.jsxs("div",{className:"flex gap-3",children:[t.avatar?l.jsx("div",{className:"w-12 h-12 rounded-full overflow-hidden cursor-move relative flex-shrink-0",onMouseDown:m=>{c(!0),h({x:m.clientX-t.avatarPosition.x,y:m.clientY-t.avatarPosition.y})},onMouseMove:m=>{o&&e({...t,avatarPosition:{x:m.clientX-u.x,y:m.clientY-u.y}})},onMouseUp:()=>c(!1),onMouseLeave:()=>c(!1),children:l.jsx("div",{className:"absolute inset-0 flex items-center justify-center select-none",style:{transform:`translate(${t.avatarPosition.x}px, ${t.avatarPosition.y}px)`},children:l.jsx("img",{src:t.avatar,alt:"Avatar",className:"select-none",style:{transform:`scale(${t.avatarZoom})`,transformOrigin:"center",maxWidth:"100%",maxHeight:"100%",objectFit:"contain"},draggable:!1})})}):l.jsx("div",{className:"w-10 h-10 rounded-full flex-shrink-0",style:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#1d9bf0"},children:l.jsx("img",{src:"media/ping_logo.png",alt:"Ping",className:"w-6 h-6 object-contain"})}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsxs("div",{className:"flex items-center gap-1 mb-1",children:[l.jsx("span",{className:"text-white font-bold",style:{fontSize:"15px"},children:t.username}),l.jsxs("span",{style:{color:"#71767b",fontSize:"15px"},children:["@",t.handle]})]}),l.jsx("div",{className:"text-white break-words mb-3",style:{fontSize:"15px",lineHeight:"1.3"},children:g1(t.text)}),t.image&&l.jsx("div",{className:"relative overflow-hidden cursor-move mb-3",style:{borderRadius:"16px",border:"1px solid #2f3336",aspectRatio:"16/9",backgroundColor:"#000000"},onMouseDown:m=>{r(!0),a({x:m.clientX-t.imagePosition.x,y:m.clientY-t.imagePosition.y})},onMouseMove:m=>{i&&e({...t,imagePosition:{x:m.clientX-s.x,y:m.clientY-s.y}})},onMouseUp:()=>r(!1),onMouseLeave:()=>r(!1),children:l.jsx("div",{className:"absolute inset-0 flex items-center justify-center select-none",style:{transform:`translate(${t.imagePosition.x}px, ${t.imagePosition.y}px)`},children:l.jsx("img",{src:t.image,alt:"Post",className:"select-none",style:{transform:`scale(${t.imageZoom})`,transformOrigin:"center",maxWidth:"100%",maxHeight:"100%",objectFit:"contain"},draggable:!1})})}),l.jsx("div",{style:{color:"#71767b",fontSize:"15px",marginBottom:"12px"},children:t.timestamp}),l.jsxs("div",{className:"flex items-center justify-between pt-3",style:{borderTop:"1px solid #2f3336"},children:[l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx(Tx,{className:"w-5 h-5",style:{color:"#71767b"}}),l.jsx("span",{style:{color:"#71767b",fontSize:"13px"},children:Yc(t.replies)})]}),l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx(fS,{className:"w-5 h-5",style:{color:"#71767b"}}),l.jsx("span",{style:{color:"#71767b",fontSize:"13px"},children:Yc(t.repings)})]}),l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx(Ed,{className:"w-5 h-5",style:{color:"#71767b"}}),l.jsx("span",{style:{color:"#71767b",fontSize:"13px"},children:Yc(t.likes)})]}),l.jsx("div",{className:"flex items-center gap-1",children:l.jsx(pS,{className:"w-5 h-5",style:{color:"#71767b"}})})]})]})]})}),l.jsxs("div",{className:"p-3 flex items-center justify-center gap-2",style:{backgroundColor:"#0a0a0a",opacity:.6},children:[l.jsx("img",{src:"media/ping_logo.png",alt:"Ping",className:"h-4 w-4 object-contain"}),l.jsx("span",{className:"text-white text-xs font-semibold tracking-wide",children:"PING"})]})]})})]})]})})}const Mr=()=>{const t=ue.useRef(null);return ue.useEffect(()=>{const e=t.current;if(!e)return;const n=e.getContext("2d",{alpha:!1});let i,r=0,s=!0;const a=()=>{e.width=window.innerWidth,e.height=window.innerHeight};a(),window.addEventListener("resize",a);const o=40,c=o*Math.sqrt(3),u=o*2,h=(m,_,E,x=0,d=1)=>{n.beginPath();for(let v=0;v<6;v++){const M=Math.PI/3*v,S=m+E*Math.cos(M),T=_+E*Math.sin(M);v===0?n.moveTo(S,T):n.lineTo(S,T)}n.closePath(),x>.05?(n.strokeStyle=`rgba(6, 182, 212, ${x*.3*d})`,n.lineWidth=1,n.shadowBlur=8*x*d,n.shadowColor=`rgba(6, 182, 212, ${x*.5*d})`):(n.strokeStyle=`rgba(80, 80, 90, ${.25*d})`,n.lineWidth=.8,n.shadowBlur=0),n.stroke()},p=()=>{if(!s){i=requestAnimationFrame(p);return}n.fillStyle="#000000",n.fillRect(0,0,e.width,e.height),r+=.015;const m=Math.ceil(e.width/(u*.75))+2,_=Math.ceil(e.height/c)+2;for(let E=-1;E<_;E++)for(let x=-1;x<m;x++){const d=x*u*.75,v=E*c+(x%2===0?0:c/2),M=e.width/2,S=e.height/2,T=Math.sqrt(Math.pow(d-M,2)+Math.pow(v-S,2)),N=Math.sqrt(Math.pow(e.width/2,2)+Math.pow(e.height/2,2)),P=T/N,g=P<.3?0:Math.min(1,(P-.3)*2.2),R=v/e.height,A=Math.sin((1-R)*3-r*.5)*.5+.5,I=A>.85?(A-.85)*2.5:0;h(d,v,o,I,g)}i=requestAnimationFrame(p)},f=()=>{s=!document.hidden};return document.addEventListener("visibilitychange",f),p(),()=>{window.removeEventListener("resize",a),document.removeEventListener("visibilitychange",f),cancelAnimationFrame(i)}},[]),l.jsx("canvas",{ref:t,className:"fixed inset-0 w-full h-full pointer-events-none",style:{zIndex:0}})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mh="185",v1=0,fm=1,_1=2,hl=1,zx=2,ya=3,gr=0,_n=1,ci=2,Pi=0,Us=1,hm=2,pm=3,mm=4,y1=5,Nr=100,S1=101,M1=102,w1=103,E1=104,b1=200,T1=201,C1=202,A1=203,Td=204,Cd=205,R1=206,N1=207,P1=208,L1=209,D1=210,I1=211,U1=212,F1=213,k1=214,Ad=0,Rd=1,Nd=2,Xs=3,Pd=4,Ld=5,Dd=6,Id=7,Bx=0,O1=1,z1=2,pi=0,Vx=1,Hx=2,Gx=3,jx=4,Wx=5,Xx=6,qx=7,$x=300,Wr=301,qs=302,Kc=303,Zc=304,gc=306,Ud=1e3,Ri=1001,Fd=1002,Xt=1003,B1=1004,No=1005,tn=1006,Qc=1007,Ur=1008,Tn=1009,Yx=1010,Kx=1011,Za=1012,gh=1013,xi=1014,ui=1015,ki=1016,xh=1017,vh=1018,Qa=1020,Zx=35902,Qx=35899,Jx=1021,ev=1022,Qn=1023,Oi=1026,Fr=1027,tv=1028,_h=1029,Xr=1030,yh=1031,Sh=1033,pl=33776,ml=33777,gl=33778,xl=33779,kd=35840,Od=35841,zd=35842,Bd=35843,Vd=36196,Hd=37492,Gd=37496,jd=37488,Wd=37489,Wl=37490,Xd=37491,qd=37808,$d=37809,Yd=37810,Kd=37811,Zd=37812,Qd=37813,Jd=37814,ef=37815,tf=37816,nf=37817,rf=37818,sf=37819,af=37820,of=37821,lf=36492,cf=36494,uf=36495,df=36283,ff=36284,Xl=36285,hf=36286,V1=3200,pf=0,H1=1,tr="",In="srgb",ql="srgb-linear",$l="linear",pt="srgb",is=7680,gm=519,G1=512,j1=513,W1=514,Mh=515,X1=516,q1=517,wh=518,$1=519,xm=35044,vm="300 es",di=2e3,Ja=2001;function Y1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Yl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function K1(){const t=Yl("canvas");return t.style.display="block",t}const _m={};function ym(...t){const e="THREE."+t.shift();console.log(e,...t)}function nv(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function We(...t){t=nv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ut(...t){t=nv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Fs(...t){const e=t.join(" ");e in _m||(_m[e]=!0,We(...t))}function Z1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Q1={[Ad]:Rd,[Nd]:Dd,[Pd]:Id,[Xs]:Ld,[Rd]:Ad,[Dd]:Nd,[Id]:Pd,[Ld]:Xs};class Kr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jc=Math.PI/180,mf=180/Math.PI;function so(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[t&255]+Qt[t>>8&255]+Qt[t>>16&255]+Qt[t>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[n&63|128]+Qt[n>>8&255]+"-"+Qt[n>>16&255]+Qt[n>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function ot(t,e,n){return Math.max(e,Math.min(n,t))}function J1(t,e){return(t%e+e)%e}function eu(t,e,n){return(1-n)*t+n*e}function ca(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ph=class Ph{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=ot(this.x,e.x,n.x),this.y=ot(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=ot(this.x,e,n),this.y=ot(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ph.prototype.isVector2=!0;let lt=Ph;class Js{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],u=i[r+1],h=i[r+2],p=i[r+3],f=s[a+0],m=s[a+1],_=s[a+2],E=s[a+3];if(p!==E||c!==f||u!==m||h!==_){let x=c*f+u*m+h*_+p*E;x<0&&(f=-f,m=-m,_=-_,E=-E,x=-x);let d=1-o;if(x<.9995){const v=Math.acos(x),M=Math.sin(v);d=Math.sin(d*v)/M,o=Math.sin(o*v)/M,c=c*d+f*o,u=u*d+m*o,h=h*d+_*o,p=p*d+E*o}else{c=c*d+f*o,u=u*d+m*o,h=h*d+_*o,p=p*d+E*o;const v=1/Math.sqrt(c*c+u*u+h*h+p*p);c*=v,u*=v,h*=v,p*=v}}e[n]=c,e[n+1]=u,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],u=i[r+2],h=i[r+3],p=s[a],f=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+h*p+c*m-u*f,e[n+1]=c*_+h*f+u*p-o*m,e[n+2]=u*_+h*m+o*f-c*p,e[n+3]=h*_-o*p-c*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(i/2),h=o(r/2),p=o(s/2),f=c(i/2),m=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=f*h*p+u*m*_,this._y=u*m*p-f*h*_,this._z=u*h*_+f*m*p,this._w=u*h*p-f*m*_;break;case"YXZ":this._x=f*h*p+u*m*_,this._y=u*m*p-f*h*_,this._z=u*h*_-f*m*p,this._w=u*h*p+f*m*_;break;case"ZXY":this._x=f*h*p-u*m*_,this._y=u*m*p+f*h*_,this._z=u*h*_+f*m*p,this._w=u*h*p-f*m*_;break;case"ZYX":this._x=f*h*p-u*m*_,this._y=u*m*p+f*h*_,this._z=u*h*_-f*m*p,this._w=u*h*p+f*m*_;break;case"YZX":this._x=f*h*p+u*m*_,this._y=u*m*p+f*h*_,this._z=u*h*_-f*m*p,this._w=u*h*p-f*m*_;break;case"XZY":this._x=f*h*p-u*m*_,this._y=u*m*p-f*h*_,this._z=u*h*_+f*m*p,this._w=u*h*p+f*m*_;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],u=n[2],h=n[6],p=n[10],f=i+o+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,u=n._z,h=n._w;return this._x=i*h+a*o+r*u-s*c,this._y=r*h+a*c+s*o-i*u,this._z=s*h+a*u+i*c-r*o,this._w=a*h-i*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-n;if(o<.9995){const u=Math.acos(o),h=Math.sin(u);c=Math.sin(c*u)/h,n=Math.sin(n*u)/h,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Lh=class Lh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Sm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Sm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*i),h=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+c*u+a*p-o*h,this.y=i+c*h+o*u-s*p,this.z=r+c*p+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=ot(this.x,e.x,n.x),this.y=ot(this.y,e.y,n.y),this.z=ot(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=ot(this.x,e,n),this.y=ot(this.y,e,n),this.z=ot(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return tu.copy(this).projectOnVector(e),this.sub(tu)}reflect(e){return this.sub(tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Lh.prototype.isVector3=!0;let ee=Lh;const tu=new ee,Sm=new Js,Dh=class Dh{constructor(e,n,i,r,s,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u)}set(e,n,i,r,s,a,o,c,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],u=i[1],h=i[4],p=i[7],f=i[2],m=i[5],_=i[8],E=r[0],x=r[3],d=r[6],v=r[1],M=r[4],S=r[7],T=r[2],N=r[5],P=r[8];return s[0]=a*E+o*v+c*T,s[3]=a*x+o*M+c*N,s[6]=a*d+o*S+c*P,s[1]=u*E+h*v+p*T,s[4]=u*x+h*M+p*N,s[7]=u*d+h*S+p*P,s[2]=f*E+m*v+_*T,s[5]=f*x+m*M+_*N,s[8]=f*d+m*S+_*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8];return n*a*h-n*o*u-i*s*h+i*o*c+r*s*u-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],p=h*a-o*u,f=o*c-h*s,m=u*s-a*c,_=n*p+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/_;return e[0]=p*E,e[1]=(r*u-h*i)*E,e[2]=(o*i-r*a)*E,e[3]=f*E,e[4]=(h*n-r*c)*E,e[5]=(r*s-o*n)*E,e[6]=m*E,e[7]=(i*c-u*n)*E,e[8]=(a*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+n,0,0,1),this}scale(e,n){return Fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nu.makeScale(e,n)),this}rotate(e){return Fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nu.makeRotation(-e)),this}translate(e,n){return Fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Dh.prototype.isMatrix3=!0;let $e=Dh;const nu=new $e,Mm=new $e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wm=new $e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eM(){const t={enabled:!0,workingColorSpace:ql,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===pt&&(r.r=Li(r.r),r.g=Li(r.g),r.b=Li(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(r.r=ks(r.r),r.g=ks(r.g),r.b=ks(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===tr?$l:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ql]:{primaries:e,whitePoint:i,transfer:$l,toXYZ:Mm,fromXYZ:wm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:In},outputColorSpaceConfig:{drawingBufferColorSpace:In}},[In]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:Mm,fromXYZ:wm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:In}}}),t}const at=eM();function Li(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ks(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let rs;class tM{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{rs===void 0&&(rs=Yl("canvas")),rs.width=e.width,rs.height=e.height;const r=rs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=rs}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Yl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Li(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Li(n[i]/255)*255):n[i]=Li(n[i]);return{data:n,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nM=0;class Eh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=so(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(iu(r[a].image)):s.push(iu(r[a]))}else s=iu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function iu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?tM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}let iM=0;const ru=new ee;class ln extends Kr{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=Ri,r=Ri,s=tn,a=Ur,o=Qn,c=Tn,u=ln.DEFAULT_ANISOTROPY,h=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=so(),this.name="",this.source=new Eh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ru).x}get height(){return this.source.getSize(ru).y}get depth(){return this.source.getSize(ru).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){We(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){We(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$x)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ud:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case Fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ud:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case Fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=$x;ln.DEFAULT_ANISOTROPY=1;const Ih=class Ih{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,u=c[0],h=c[4],p=c[8],f=c[1],m=c[5],_=c[9],E=c[2],x=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(p-E)<.01&&Math.abs(_-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+E)<.1&&Math.abs(_+x)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(u+1)/2,S=(m+1)/2,T=(d+1)/2,N=(h+f)/4,P=(p+E)/4,g=(_+x)/4;return M>S&&M>T?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=N/i,s=P/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=N/r,s=g/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=P/s,r=g/s),this.set(i,r,s,n),this}let v=Math.sqrt((x-_)*(x-_)+(p-E)*(p-E)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(x-_)/v,this.y=(p-E)/v,this.z=(f-h)/v,this.w=Math.acos((u+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=ot(this.x,e.x,n.x),this.y=ot(this.y,e.y,n.y),this.z=ot(this.z,e.z,n.z),this.w=ot(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=ot(this.x,e,n),this.y=ot(this.y,e,n),this.z=ot(this.z,e,n),this.w=ot(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ih.prototype.isVector4=!0;let Tt=Ih;class rM extends Kr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Tt(0,0,e,n),this.scissorTest=!1,this.viewport=new Tt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new ln(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Eh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends rM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class iv extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sM extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kl=class Kl{constructor(e,n,i,r,s,a,o,c,u,h,p,f,m,_,E,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u,h,p,f,m,_,E,x)}set(e,n,i,r,s,a,o,c,u,h,p,f,m,_,E,x){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=u,d[6]=h,d[10]=p,d[14]=f,d[3]=m,d[7]=_,d[11]=E,d[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ss.setFromMatrixColumn(e,0).length(),s=1/ss.setFromMatrixColumn(e,1).length(),a=1/ss.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=a*h,m=a*p,_=o*h,E=o*p;n[0]=c*h,n[4]=-c*p,n[8]=u,n[1]=m+_*u,n[5]=f-E*u,n[9]=-o*c,n[2]=E-f*u,n[6]=_+m*u,n[10]=a*c}else if(e.order==="YXZ"){const f=c*h,m=c*p,_=u*h,E=u*p;n[0]=f+E*o,n[4]=_*o-m,n[8]=a*u,n[1]=a*p,n[5]=a*h,n[9]=-o,n[2]=m*o-_,n[6]=E+f*o,n[10]=a*c}else if(e.order==="ZXY"){const f=c*h,m=c*p,_=u*h,E=u*p;n[0]=f-E*o,n[4]=-a*p,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*h,n[9]=E-f*o,n[2]=-a*u,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const f=a*h,m=a*p,_=o*h,E=o*p;n[0]=c*h,n[4]=_*u-m,n[8]=f*u+E,n[1]=c*p,n[5]=E*u+f,n[9]=m*u-_,n[2]=-u,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*u,_=o*c,E=o*u;n[0]=c*h,n[4]=E-f*p,n[8]=_*p+m,n[1]=p,n[5]=a*h,n[9]=-o*h,n[2]=-u*h,n[6]=m*p+_,n[10]=f-E*p}else if(e.order==="XZY"){const f=a*c,m=a*u,_=o*c,E=o*u;n[0]=c*h,n[4]=-p,n[8]=u*h,n[1]=f*p+E,n[5]=a*h,n[9]=m*p-_,n[2]=_*p-m,n[6]=o*h,n[10]=E*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aM,e,oM)}lookAt(e,n,i){const r=this.elements;return wn.subVectors(e,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Wi.crossVectors(i,wn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Wi.crossVectors(i,wn)),Wi.normalize(),Po.crossVectors(wn,Wi),r[0]=Wi.x,r[4]=Po.x,r[8]=wn.x,r[1]=Wi.y,r[5]=Po.y,r[9]=wn.y,r[2]=Wi.z,r[6]=Po.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],u=i[12],h=i[1],p=i[5],f=i[9],m=i[13],_=i[2],E=i[6],x=i[10],d=i[14],v=i[3],M=i[7],S=i[11],T=i[15],N=r[0],P=r[4],g=r[8],R=r[12],A=r[1],I=r[5],z=r[9],W=r[13],ne=r[2],V=r[6],Q=r[10],q=r[14],b=r[3],w=r[7],L=r[11],O=r[15];return s[0]=a*N+o*A+c*ne+u*b,s[4]=a*P+o*I+c*V+u*w,s[8]=a*g+o*z+c*Q+u*L,s[12]=a*R+o*W+c*q+u*O,s[1]=h*N+p*A+f*ne+m*b,s[5]=h*P+p*I+f*V+m*w,s[9]=h*g+p*z+f*Q+m*L,s[13]=h*R+p*W+f*q+m*O,s[2]=_*N+E*A+x*ne+d*b,s[6]=_*P+E*I+x*V+d*w,s[10]=_*g+E*z+x*Q+d*L,s[14]=_*R+E*W+x*q+d*O,s[3]=v*N+M*A+S*ne+T*b,s[7]=v*P+M*I+S*V+T*w,s[11]=v*g+M*z+S*Q+T*L,s[15]=v*R+M*W+S*q+T*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],h=e[2],p=e[6],f=e[10],m=e[14],_=e[3],E=e[7],x=e[11],d=e[15],v=c*m-u*f,M=o*m-u*p,S=o*f-c*p,T=a*m-u*h,N=a*f-c*h,P=a*p-o*h;return n*(E*v-x*M+d*S)-i*(_*v-x*T+d*N)+r*(_*M-E*T+d*P)-s*(_*S-E*N+x*P)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],u=e[6],h=e[10];return n*(a*h-o*u)-i*(s*h-o*c)+r*(s*u-a*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],p=e[9],f=e[10],m=e[11],_=e[12],E=e[13],x=e[14],d=e[15],v=n*o-i*a,M=n*c-r*a,S=n*u-s*a,T=i*c-r*o,N=i*u-s*o,P=r*u-s*c,g=h*E-p*_,R=h*x-f*_,A=h*d-m*_,I=p*x-f*E,z=p*d-m*E,W=f*d-m*x,ne=v*W-M*z+S*I+T*A-N*R+P*g;if(ne===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/ne;return e[0]=(o*W-c*z+u*I)*V,e[1]=(r*z-i*W-s*I)*V,e[2]=(E*P-x*N+d*T)*V,e[3]=(f*N-p*P-m*T)*V,e[4]=(c*A-a*W-u*R)*V,e[5]=(n*W-r*A+s*R)*V,e[6]=(x*S-_*P-d*M)*V,e[7]=(h*P-f*S+m*M)*V,e[8]=(a*z-o*A+u*g)*V,e[9]=(i*A-n*z-s*g)*V,e[10]=(_*N-E*S+d*v)*V,e[11]=(p*S-h*N-m*v)*V,e[12]=(o*R-a*I-c*g)*V,e[13]=(n*I-i*R+r*g)*V,e[14]=(E*M-_*T-x*v)*V,e[15]=(h*T-p*M+f*v)*V,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,u=s*a,h=s*o;return this.set(u*a+i,u*o-r*c,u*c+r*o,0,u*o+r*c,h*o+i,h*c-r*a,0,u*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,u=s+s,h=a+a,p=o+o,f=s*u,m=s*h,_=s*p,E=a*h,x=a*p,d=o*p,v=c*u,M=c*h,S=c*p,T=i.x,N=i.y,P=i.z;return r[0]=(1-(E+d))*T,r[1]=(m+S)*T,r[2]=(_-M)*T,r[3]=0,r[4]=(m-S)*N,r[5]=(1-(f+d))*N,r[6]=(x+v)*N,r[7]=0,r[8]=(_+M)*P,r[9]=(x-v)*P,r[10]=(1-(f+E))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=ss.set(r[0],r[1],r[2]).length();const o=ss.set(r[4],r[5],r[6]).length(),c=ss.set(r[8],r[9],r[10]).length();s<0&&(a=-a),jn.copy(this);const u=1/a,h=1/o,p=1/c;return jn.elements[0]*=u,jn.elements[1]*=u,jn.elements[2]*=u,jn.elements[4]*=h,jn.elements[5]*=h,jn.elements[6]*=h,jn.elements[8]*=p,jn.elements[9]*=p,jn.elements[10]*=p,n.setFromRotationMatrix(jn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,n,i,r,s,a,o=di,c=!1){const u=this.elements,h=2*s/(n-e),p=2*s/(i-r),f=(n+e)/(n-e),m=(i+r)/(i-r);let _,E;if(c)_=s/(a-s),E=a*s/(a-s);else if(o===di)_=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(o===Ja)_=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=p,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=E,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=di,c=!1){const u=this.elements,h=2/(n-e),p=2/(i-r),f=-(n+e)/(n-e),m=-(i+r)/(i-r);let _,E;if(c)_=1/(a-s),E=a/(a-s);else if(o===di)_=-2/(a-s),E=-(a+s)/(a-s);else if(o===Ja)_=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=p,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=_,u[14]=E,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Kl.prototype.isMatrix4=!0;let Pt=Kl;const ss=new ee,jn=new Pt,aM=new ee(0,0,0),oM=new ee(1,1,1),Wi=new ee,Po=new ee,wn=new ee,Em=new Pt,bm=new Js;class xr{constructor(e=0,n=0,i=0,r=xr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],h=r[9],p=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ot(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Em.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Em,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return bm.setFromEuler(this),this.setFromQuaternion(bm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xr.DEFAULT_ORDER="XYZ";class rv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let lM=0;const Tm=new ee,as=new Js,yi=new Pt,Lo=new ee,ua=new ee,cM=new ee,uM=new Js,Cm=new ee(1,0,0),Am=new ee(0,1,0),Rm=new ee(0,0,1),Nm={type:"added"},dM={type:"removed"},os={type:"childadded",child:null},su={type:"childremoved",child:null};class nn extends Kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=so(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new ee,n=new xr,i=new Js,r=new ee(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new $e}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return as.setFromAxisAngle(e,n),this.quaternion.multiply(as),this}rotateOnWorldAxis(e,n){return as.setFromAxisAngle(e,n),this.quaternion.premultiply(as),this}rotateX(e){return this.rotateOnAxis(Cm,e)}rotateY(e){return this.rotateOnAxis(Am,e)}rotateZ(e){return this.rotateOnAxis(Rm,e)}translateOnAxis(e,n){return Tm.copy(e).applyQuaternion(this.quaternion),this.position.add(Tm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Cm,e)}translateY(e){return this.translateOnAxis(Am,e)}translateZ(e){return this.translateOnAxis(Rm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Lo.copy(e):Lo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(ua,Lo,this.up):yi.lookAt(Lo,ua,this.up),this.quaternion.setFromRotationMatrix(yi),r&&(yi.extractRotation(r.matrixWorld),as.setFromRotationMatrix(yi),this.quaternion.premultiply(as.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nm),os.child=e,this.dispatchEvent(os),os.child=null):ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(dM),su.child=e,this.dispatchEvent(su),su.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nm),os.child=e,this.dispatchEvent(os),os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,e,cM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,uM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const p=c[u];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}nn.DEFAULT_UP=new ee(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Do extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fM={type:"move"};class au{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Do,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Do,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Do,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const E of e.hand.values()){const x=n.getJointPose(E,i),d=this._getHandJoint(u,E);x!==null&&(d.matrix.fromArray(x.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=x.radius),d.visible=x!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=h.position.distanceTo(p.position),m=.02,_=.005;u.inputState.pinching&&f>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fM)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Do;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const sv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Io={h:0,s:0,l:0};function ou(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class dt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=at.workingColorSpace){return this.r=e,this.g=n,this.b=i,at.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=at.workingColorSpace){if(e=J1(e,1),n=ot(n,0,1),i=ot(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=ou(a,s,e+1/3),this.g=ou(a,s,e),this.b=ou(a,s,e-1/3)}return at.colorSpaceToWorking(this,r),this}setStyle(e,n=In){function i(s){s!==void 0&&parseFloat(s)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:We("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=In){const i=sv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return at.workingToColorSpace(Jt.copy(this),e),Math.round(ot(Jt.r*255,0,255))*65536+Math.round(ot(Jt.g*255,0,255))*256+Math.round(ot(Jt.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=at.workingColorSpace){at.workingToColorSpace(Jt.copy(this),n);const i=Jt.r,r=Jt.g,s=Jt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,u;const h=(o+a)/2;if(o===a)c=0,u=0;else{const p=a-o;switch(u=h<=.5?p/(a+o):p/(2-a-o),a){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,n=at.workingColorSpace){return at.workingToColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=In){at.workingToColorSpace(Jt.copy(this),e);const n=Jt.r,i=Jt.g,r=Jt.b;return e!==In?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+n,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Xi),e.getHSL(Io);const i=eu(Xi.h,Io.h,n),r=eu(Xi.s,Io.s,n),s=eu(Xi.l,Io.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new dt;dt.NAMES=sv;class hM extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xr,this.environmentIntensity=1,this.environmentRotation=new xr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Wn=new ee,Si=new ee,lu=new ee,Mi=new ee,ls=new ee,cs=new ee,Pm=new ee,cu=new ee,uu=new ee,du=new ee,fu=new Tt,hu=new Tt,pu=new Tt;class Zn{constructor(e=new ee,n=new ee,i=new ee){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Wn.subVectors(e,n),r.cross(Wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Wn.subVectors(r,n),Si.subVectors(i,n),lu.subVectors(e,n);const a=Wn.dot(Wn),o=Wn.dot(Si),c=Wn.dot(lu),u=Si.dot(Si),h=Si.dot(lu),p=a*u-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,m=(u*c-o*h)*f,_=(a*h-o*c)*f;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Mi)===null?!1:Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,Mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Mi.x),c.addScaledVector(a,Mi.y),c.addScaledVector(o,Mi.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return fu.setScalar(0),hu.setScalar(0),pu.setScalar(0),fu.fromBufferAttribute(e,n),hu.fromBufferAttribute(e,i),pu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(fu,s.x),a.addScaledVector(hu,s.y),a.addScaledVector(pu,s.z),a}static isFrontFacing(e,n,i,r){return Wn.subVectors(i,n),Si.subVectors(e,n),Wn.cross(Si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Wn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Zn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;ls.subVectors(r,i),cs.subVectors(s,i),cu.subVectors(e,i);const c=ls.dot(cu),u=cs.dot(cu);if(c<=0&&u<=0)return n.copy(i);uu.subVectors(e,r);const h=ls.dot(uu),p=cs.dot(uu);if(h>=0&&p<=h)return n.copy(r);const f=c*p-h*u;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),n.copy(i).addScaledVector(ls,a);du.subVectors(e,s);const m=ls.dot(du),_=cs.dot(du);if(_>=0&&m<=_)return n.copy(s);const E=m*u-c*_;if(E<=0&&u>=0&&_<=0)return o=u/(u-_),n.copy(i).addScaledVector(cs,o);const x=h*_-m*p;if(x<=0&&p-h>=0&&m-_>=0)return Pm.subVectors(s,r),o=(p-h)/(p-h+(m-_)),n.copy(r).addScaledVector(Pm,o);const d=1/(x+E+f);return a=E*d,o=f*d,n.copy(i).addScaledVector(ls,a).addScaledVector(cs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ao{constructor(e=new ee(1/0,1/0,1/0),n=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Xn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Xn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Xn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xn):Xn.fromBufferAttribute(s,a),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Uo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Uo.copy(i.boundingBox)),Uo.applyMatrix4(e.matrixWorld),this.union(Uo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(da),Fo.subVectors(this.max,da),us.subVectors(e.a,da),ds.subVectors(e.b,da),fs.subVectors(e.c,da),qi.subVectors(ds,us),$i.subVectors(fs,ds),wr.subVectors(us,fs);let n=[0,-qi.z,qi.y,0,-$i.z,$i.y,0,-wr.z,wr.y,qi.z,0,-qi.x,$i.z,0,-$i.x,wr.z,0,-wr.x,-qi.y,qi.x,0,-$i.y,$i.x,0,-wr.y,wr.x,0];return!mu(n,us,ds,fs,Fo)||(n=[1,0,0,0,1,0,0,0,1],!mu(n,us,ds,fs,Fo))?!1:(ko.crossVectors(qi,$i),n=[ko.x,ko.y,ko.z],mu(n,us,ds,fs,Fo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wi=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Xn=new ee,Uo=new ao,us=new ee,ds=new ee,fs=new ee,qi=new ee,$i=new ee,wr=new ee,da=new ee,Fo=new ee,ko=new ee,Er=new ee;function mu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Er.fromArray(t,s);const o=r.x*Math.abs(Er.x)+r.y*Math.abs(Er.y)+r.z*Math.abs(Er.z),c=e.dot(Er),u=n.dot(Er),h=i.dot(Er);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}const Ut=new ee,Oo=new lt;let pM=0;class gi extends Kr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:pM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=xm,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Oo.fromBufferAttribute(this,n),Oo.applyMatrix3(e),this.setXY(n,Oo.x,Oo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix3(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix4(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyNormalMatrix(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.transformDirection(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ca(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ca(n,this.array)),n}setX(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ca(n,this.array)),n}setY(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ca(n,this.array)),n}setZ(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ca(n,this.array)),n}setW(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array),s=dn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class av extends gi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ov extends gi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Bn extends gi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const mM=new ao,fa=new ee,gu=new ee;class bh{constructor(e=new ee,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):mM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fa.subVectors(e,this.center);const n=fa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(fa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fa.copy(e.center).add(gu)),this.expandByPoint(fa.copy(e.center).sub(gu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let gM=0;const Dn=new Pt,xu=new nn,hs=new ee,En=new ao,ha=new ao,Vt=new ee;class _i extends Kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=so(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Y1(e)?ov:av)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new $e().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,n,i){return Dn.makeTranslation(e,n,i),this.applyMatrix4(Dn),this}scale(e,n,i){return Dn.makeScale(e,n,i),this.applyMatrix4(Dn),this}lookAt(e){return xu.lookAt(e),xu.updateMatrix(),this.applyMatrix4(xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hs).negate(),this.translate(hs.x,hs.y,hs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Bn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ao);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ha.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(En.min,ha.min),En.expandByPoint(Vt),Vt.addVectors(En.max,ha.max),En.expandByPoint(Vt)):(En.expandByPoint(ha.min),En.expandByPoint(ha.max))}En.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Vt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Vt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Vt.fromBufferAttribute(o,u),c&&(hs.fromBufferAttribute(e,u),Vt.add(hs)),r=Math.max(r,i.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new gi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let g=0;g<i.count;g++)o[g]=new ee,c[g]=new ee;const u=new ee,h=new ee,p=new ee,f=new lt,m=new lt,_=new lt,E=new ee,x=new ee;function d(g,R,A){u.fromBufferAttribute(i,g),h.fromBufferAttribute(i,R),p.fromBufferAttribute(i,A),f.fromBufferAttribute(s,g),m.fromBufferAttribute(s,R),_.fromBufferAttribute(s,A),h.sub(u),p.sub(u),m.sub(f),_.sub(f);const I=1/(m.x*_.y-_.x*m.y);isFinite(I)&&(E.copy(h).multiplyScalar(_.y).addScaledVector(p,-m.y).multiplyScalar(I),x.copy(p).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(I),o[g].add(E),o[R].add(E),o[A].add(E),c[g].add(x),c[R].add(x),c[A].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let g=0,R=v.length;g<R;++g){const A=v[g],I=A.start,z=A.count;for(let W=I,ne=I+z;W<ne;W+=3)d(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const M=new ee,S=new ee,T=new ee,N=new ee;function P(g){T.fromBufferAttribute(r,g),N.copy(T);const R=o[g];M.copy(R),M.sub(T.multiplyScalar(T.dot(R))).normalize(),S.crossVectors(N,R);const I=S.dot(c[g])<0?-1:1;a.setXYZW(g,M.x,M.y,M.z,I)}for(let g=0,R=v.length;g<R;++g){const A=v[g],I=A.start,z=A.count;for(let W=I,ne=I+z;W<ne;W+=3)P(e.getX(W+0)),P(e.getX(W+1)),P(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new gi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new ee,s=new ee,a=new ee,o=new ee,c=new ee,u=new ee,h=new ee,p=new ee;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),E=e.getX(f+1),x=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,E),a.fromBufferAttribute(n,x),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(i,_),c.fromBufferAttribute(i,E),u.fromBufferAttribute(i,x),o.add(h),c.add(h),u.add(h),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(x,u.x,u.y,u.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Vt.fromBufferAttribute(e,n),Vt.normalize(),e.setXYZ(n,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,c){const u=o.array,h=o.itemSize,p=o.normalized,f=new u.constructor(c.length*h);let m=0,_=0;for(let E=0,x=c.length;E<x;E++){o.isInterleavedBufferAttribute?m=c[E]*o.data.stride+o.offset:m=c[E]*h;for(let d=0;d<h;d++)f[_++]=u[m++]}return new gi(f,h,p)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new _i,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=e(c,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let h=0,p=u.length;h<p;h++){const f=u[h],m=e(f,i);c.push(m)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let p=0,f=u.length;p<f;p++){const m=u[p];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],p=s[u];for(let f=0,m=p.length;f<m;f++)h.push(p[f].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let xM=0;class oo extends Kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=so(),this.name="",this.type="Material",this.blending=Us,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Td,this.blendDst=Cd,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){We(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){We(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(i.blending=this.blending),this.side!==gr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Td&&(i.blendSrc=this.blendSrc),this.blendDst!==Cd&&(i.blendDst=this.blendDst),this.blendEquation!==Nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(i.stencilFail=this.stencilFail),this.stencilZFail!==is&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new dt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new lt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ei=new ee,vu=new ee,zo=new ee,Yi=new ee,_u=new ee,Bo=new ee,yu=new ee;class vM{constructor(e=new ee,n=new ee(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,n),Ei.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){vu.copy(e).add(n).multiplyScalar(.5),zo.copy(n).sub(e).normalize(),Yi.copy(this.origin).sub(vu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(zo),o=Yi.dot(this.direction),c=-Yi.dot(zo),u=Yi.lengthSq(),h=Math.abs(1-a*a);let p,f,m,_;if(h>0)if(p=a*c-o,f=a*o-c,_=s*h,p>=0)if(f>=-_)if(f<=_){const E=1/h;p*=E,f*=E,m=p*(p+a*f+2*o)+f*(a*p+f+2*c)+u}else f=s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+u;else f=-s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+u;else f<=-_?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-c),s),m=-p*p+f*(f+2*c)+u):f<=_?(p=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+u):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-c),s),m=-p*p+f*(f+2*c)+u);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(vu).addScaledVector(zo,f),m}intersectSphere(e,n){Ei.subVectors(e.center,this.origin);const i=Ei.dot(this.direction),r=Ei.dot(Ei)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,n,i,r,s){_u.subVectors(n,e),Bo.subVectors(i,e),yu.crossVectors(_u,Bo);let a=this.direction.dot(yu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Yi.subVectors(this.origin,e);const c=o*this.direction.dot(Bo.crossVectors(Yi,Bo));if(c<0)return null;const u=o*this.direction.dot(_u.cross(Yi));if(u<0||c+u>a)return null;const h=-o*Yi.dot(yu);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Th extends oo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xr,this.combine=Bx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lm=new Pt,br=new vM,Vo=new bh,Dm=new ee,Ho=new ee,Go=new ee,jo=new ee,Su=new ee,Wo=new ee,Im=new ee,Xo=new ee;class hn extends nn{constructor(e=new _i,n=new Th){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Wo.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=o[c],p=s[c];h!==0&&(Su.fromBufferAttribute(p,e),a?Wo.addScaledVector(Su,h):Wo.addScaledVector(Su.sub(n),h))}n.add(Wo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vo.copy(i.boundingSphere),Vo.applyMatrix4(s),br.copy(e.ray).recast(e.near),!(Vo.containsPoint(br.origin)===!1&&(br.intersectSphere(Vo,Dm)===null||br.origin.distanceToSquared(Dm)>(e.far-e.near)**2))&&(Lm.copy(s).invert(),br.copy(e.ray).applyMatrix4(Lm),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,br)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,E=f.length;_<E;_++){const x=f[_],d=a[x.materialIndex],v=Math.max(x.start,m.start),M=Math.min(o.count,Math.min(x.start+x.count,m.start+m.count));for(let S=v,T=M;S<T;S+=3){const N=o.getX(S),P=o.getX(S+1),g=o.getX(S+2);r=qo(this,d,e,i,u,h,p,N,P,g),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),E=Math.min(o.count,m.start+m.count);for(let x=_,d=E;x<d;x+=3){const v=o.getX(x),M=o.getX(x+1),S=o.getX(x+2);r=qo(this,a,e,i,u,h,p,v,M,S),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,E=f.length;_<E;_++){const x=f[_],d=a[x.materialIndex],v=Math.max(x.start,m.start),M=Math.min(c.count,Math.min(x.start+x.count,m.start+m.count));for(let S=v,T=M;S<T;S+=3){const N=S,P=S+1,g=S+2;r=qo(this,d,e,i,u,h,p,N,P,g),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),E=Math.min(c.count,m.start+m.count);for(let x=_,d=E;x<d;x+=3){const v=x,M=x+1,S=x+2;r=qo(this,a,e,i,u,h,p,v,M,S),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function _M(t,e,n,i,r,s,a,o){let c;if(e.side===_n?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===gr,o),c===null)return null;Xo.copy(o),Xo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Xo);return u<n.near||u>n.far?null:{distance:u,point:Xo.clone(),object:t}}function qo(t,e,n,i,r,s,a,o,c,u){t.getVertexPosition(o,Ho),t.getVertexPosition(c,Go),t.getVertexPosition(u,jo);const h=_M(t,e,n,i,Ho,Go,jo,Im);if(h){const p=new ee;Zn.getBarycoord(Im,Ho,Go,jo,p),r&&(h.uv=Zn.getInterpolatedAttribute(r,o,c,u,p,new lt)),s&&(h.uv1=Zn.getInterpolatedAttribute(s,o,c,u,p,new lt)),a&&(h.normal=Zn.getInterpolatedAttribute(a,o,c,u,p,new ee),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:u,normal:new ee,materialIndex:0};Zn.getNormal(Ho,Go,jo,f.normal),h.face=f,h.barycoord=p}return h}class yM extends ln{constructor(e=null,n=1,i=1,r,s,a,o,c,u=Xt,h=Xt,p,f){super(null,a,o,c,u,h,r,s,p,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mu=new ee,SM=new ee,MM=new $e;class Rr{constructor(e=new ee(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Mu.subVectors(i,n).cross(SM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Mu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||MM.getNormalMatrix(e),r=this.coplanarPoint(Mu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new bh,wM=new lt(.5,.5),$o=new ee;class Ch{constructor(e=new Rr,n=new Rr,i=new Rr,r=new Rr,s=new Rr,a=new Rr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=di,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],u=s[3],h=s[4],p=s[5],f=s[6],m=s[7],_=s[8],E=s[9],x=s[10],d=s[11],v=s[12],M=s[13],S=s[14],T=s[15];if(r[0].setComponents(u-a,m-h,d-_,T-v).normalize(),r[1].setComponents(u+a,m+h,d+_,T+v).normalize(),r[2].setComponents(u+o,m+p,d+E,T+M).normalize(),r[3].setComponents(u-o,m-p,d-E,T-M).normalize(),i)r[4].setComponents(c,f,x,S).normalize(),r[5].setComponents(u-c,m-f,d-x,T-S).normalize();else if(r[4].setComponents(u-c,m-f,d-x,T-S).normalize(),n===di)r[5].setComponents(u+c,m+f,d+x,T+S).normalize();else if(n===Ja)r[5].setComponents(c,f,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){Tr.center.set(0,0,0);const n=wM.distanceTo(e.center);return Tr.radius=.7071067811865476+n,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if($o.x=r.normal.x>0?e.max.x:e.min.x,$o.y=r.normal.y>0?e.max.y:e.min.y,$o.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($o)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lv extends ln{constructor(e=[],n=Wr,i,r,s,a,o,c,u,h){super(e,n,i,r,s,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $s extends ln{constructor(e,n,i=xi,r,s,a,o=Xt,c=Xt,u,h=Oi,p=1){if(h!==Oi&&h!==Fr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:p};super(f,r,s,a,o,c,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Eh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class EM extends $s{constructor(e,n=xi,i=Wr,r,s,a=Xt,o=Xt,c,u=Oi){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,o,c,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class cv extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class qr extends _i{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],h=[],p=[];let f=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Bn(u,3)),this.setAttribute("normal",new Bn(h,3)),this.setAttribute("uv",new Bn(p,2));function _(E,x,d,v,M,S,T,N,P,g,R){const A=S/P,I=T/g,z=S/2,W=T/2,ne=N/2,V=P+1,Q=g+1;let q=0,b=0;const w=new ee;for(let L=0;L<Q;L++){const O=L*I-W;for(let U=0;U<V;U++){const oe=U*A-z;w[E]=oe*v,w[x]=O*M,w[d]=ne,u.push(w.x,w.y,w.z),w[E]=0,w[x]=0,w[d]=N>0?1:-1,h.push(w.x,w.y,w.z),p.push(U/P),p.push(1-L/g),q+=1}}for(let L=0;L<g;L++)for(let O=0;O<P;O++){const U=f+O+V*L,oe=f+O+V*(L+1),ce=f+(O+1)+V*(L+1),se=f+(O+1)+V*L;c.push(U,oe,se),c.push(oe,ce,se),b+=6}o.addGroup(m,b,R),m+=b,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ah extends _i{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],p=[],f=[],m=[];let _=0;const E=[],x=i/2;let d=0;v(),a===!1&&(e>0&&M(!0),n>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Bn(p,3)),this.setAttribute("normal",new Bn(f,3)),this.setAttribute("uv",new Bn(m,2));function v(){const S=new ee,T=new ee;let N=0;const P=(n-e)/i;for(let g=0;g<=s;g++){const R=[],A=g/s,I=A*(n-e)+e;for(let z=0;z<=r;z++){const W=z/r,ne=W*c+o,V=Math.sin(ne),Q=Math.cos(ne);T.x=I*V,T.y=-A*i+x,T.z=I*Q,p.push(T.x,T.y,T.z),S.set(V,P,Q).normalize(),f.push(S.x,S.y,S.z),m.push(W,1-A),R.push(_++)}E.push(R)}for(let g=0;g<r;g++)for(let R=0;R<s;R++){const A=E[R][g],I=E[R+1][g],z=E[R+1][g+1],W=E[R][g+1];(e>0||R!==0)&&(h.push(A,I,W),N+=3),(n>0||R!==s-1)&&(h.push(I,z,W),N+=3)}u.addGroup(d,N,0),d+=N}function M(S){const T=_,N=new lt,P=new ee;let g=0;const R=S===!0?e:n,A=S===!0?1:-1;for(let z=1;z<=r;z++)p.push(0,x*A,0),f.push(0,A,0),m.push(.5,.5),_++;const I=_;for(let z=0;z<=r;z++){const ne=z/r*c+o,V=Math.cos(ne),Q=Math.sin(ne);P.x=R*Q,P.y=x*A,P.z=R*V,p.push(P.x,P.y,P.z),f.push(0,A,0),N.x=V*.5+.5,N.y=Q*.5*A+.5,m.push(N.x,N.y),_++}for(let z=0;z<r;z++){const W=T+z,ne=I+z;S===!0?h.push(ne,ne+1,W):h.push(ne+1,ne,W),g+=3}u.addGroup(d,g,S===!0?1:2),d+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ah(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lo extends _i{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),u=o+1,h=c+1,p=e/o,f=n/c,m=[],_=[],E=[],x=[];for(let d=0;d<h;d++){const v=d*f-a;for(let M=0;M<u;M++){const S=M*p-s;_.push(S,-v,0),E.push(0,0,1),x.push(M/o),x.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<o;v++){const M=v+u*d,S=v+u*(d+1),T=v+1+u*(d+1),N=v+1+u*d;m.push(M,S,N),m.push(S,T,N)}this.setIndex(m),this.setAttribute("position",new Bn(_,3)),this.setAttribute("normal",new Bn(E,3)),this.setAttribute("uv",new Bn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lo(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ys(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Um(r))r.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Um(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function sn(t){const e={};for(let n=0;n<t.length;n++){const i=Ys(t[n]);for(const r in i)e[r]=i[r]}return e}function Um(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function bM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function uv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const TM={clone:Ys,merge:sn};var CM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,AM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends oo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CM,this.fragmentShader=AM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=bM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new dt().setHex(r.value);break;case"v2":this.uniforms[i].value=new lt().fromArray(r.value);break;case"v3":this.uniforms[i].value=new ee().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Tt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new $e().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Pt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class RM extends vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wu extends oo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pf,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class NM extends oo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=V1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class PM extends oo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class dv extends nn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Eu=new Pt,Fm=new ee,km=new ee;class LM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ch,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Fm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Fm),km.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(km),n.updateMatrixWorld(),Eu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eu,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Ja||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Eu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Yo=new ee,Ko=new Js,ri=new ee;class fv extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yo,Ko,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yo,Ko,ri.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Yo,Ko,ri),ri.x===1&&ri.y===1&&ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yo,Ko,ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new ee,Om=new lt,zm=new lt;class kn extends fv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=mf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mf*2*Math.atan(Math.tan(Jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,n){return this.getViewBounds(e,Om,zm),n.subVectors(zm,Om)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Jc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Rh extends fv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class DM extends LM{constructor(){super(new Rh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bm extends dv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nn.DEFAULT_UP),this.updateMatrix(),this.target=new nn,this.shadow=new DM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class IM extends dv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ps=-90,ms=1;class UM extends nn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kn(ps,ms,e,n);r.layers=this.layers,this.add(r);const s=new kn(ps,ms,e,n);s.layers=this.layers,this.add(s);const a=new kn(ps,ms,e,n);a.layers=this.layers,this.add(a);const o=new kn(ps,ms,e,n);o.layers=this.layers,this.add(o);const c=new kn(ps,ms,e,n);c.layers=this.layers,this.add(c);const u=new kn(ps,ms,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const u of n)this.remove(u);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ja)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(p,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class FM extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Uh=class Uh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Uh.prototype.isMatrix2=!0;let Vm=Uh;function Hm(t,e,n,i){const r=kM(i);switch(n){case Jx:return t*e;case tv:return t*e/r.components*r.byteLength;case _h:return t*e/r.components*r.byteLength;case Xr:return t*e*2/r.components*r.byteLength;case yh:return t*e*2/r.components*r.byteLength;case ev:return t*e*3/r.components*r.byteLength;case Qn:return t*e*4/r.components*r.byteLength;case Sh:return t*e*4/r.components*r.byteLength;case pl:case ml:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case gl:case xl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Od:case Bd:return Math.max(t,16)*Math.max(e,8)/4;case kd:case zd:return Math.max(t,8)*Math.max(e,8)/2;case Vd:case Hd:case jd:case Wd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Gd:case Wl:case Xd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $d:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ef:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case tf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case nf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case rf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case sf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case af:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case of:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case lf:case cf:case uf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case df:case ff:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Xl:case hf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function kM(t){switch(t){case Tn:case Yx:return{byteLength:1,components:1};case Za:case Kx:case ki:return{byteLength:2,components:1};case xh:case vh:return{byteLength:2,components:4};case xi:case gh:case ui:return{byteLength:4,components:1};case Zx:case Qx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mh}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function OM(t){const e=new WeakMap;function n(o,c){const u=o.array,h=o.usage,p=u.byteLength,f=t.createBuffer();t.bindBuffer(c,f),t.bufferData(c,u,h),o.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,c,u){const h=c.array,p=c.updateRanges;if(t.bindBuffer(u,o),p.length===0)t.bufferSubData(u,0,h);else{p.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<p.length;m++){const _=p[f],E=p[m];E.start<=_.start+_.count+1?_.count=Math.max(_.count,E.start+E.count-_.start):(++f,p[f]=E)}p.length=f+1;for(let m=0,_=p.length;m<_;m++){const E=p[m];t.bufferSubData(u,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}var zM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,VM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,WM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,XM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$M=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,YM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,QM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,JM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ew=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,aw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ow=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,lw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,dw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mw="gl_FragColor = linearToOutputTexel( gl_FragColor );",gw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,vw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_w=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Mw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ww=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ew=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Aw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Rw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Pw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Lw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Iw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kw=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ow=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vw=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Hw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ww=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$w=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,lE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,mE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_E=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,ME=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,EE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,bE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,CE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,AE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,RE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,DE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,IE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,UE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,OE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,XE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,qE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$E=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,YE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,eb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ib=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ab=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ob=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ub=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,db=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:zM,alphahash_pars_fragment:BM,alphamap_fragment:VM,alphamap_pars_fragment:HM,alphatest_fragment:GM,alphatest_pars_fragment:jM,aomap_fragment:WM,aomap_pars_fragment:XM,batching_pars_vertex:qM,batching_vertex:$M,begin_vertex:YM,beginnormal_vertex:KM,bsdfs:ZM,iridescence_fragment:QM,bumpmap_pars_fragment:JM,clipping_planes_fragment:ew,clipping_planes_pars_fragment:tw,clipping_planes_pars_vertex:nw,clipping_planes_vertex:iw,color_fragment:rw,color_pars_fragment:sw,color_pars_vertex:aw,color_vertex:ow,common:lw,cube_uv_reflection_fragment:cw,defaultnormal_vertex:uw,displacementmap_pars_vertex:dw,displacementmap_vertex:fw,emissivemap_fragment:hw,emissivemap_pars_fragment:pw,colorspace_fragment:mw,colorspace_pars_fragment:gw,envmap_fragment:xw,envmap_common_pars_fragment:vw,envmap_pars_fragment:_w,envmap_pars_vertex:yw,envmap_physical_pars_fragment:Pw,envmap_vertex:Sw,fog_vertex:Mw,fog_pars_vertex:ww,fog_fragment:Ew,fog_pars_fragment:bw,gradientmap_pars_fragment:Tw,lightmap_pars_fragment:Cw,lights_lambert_fragment:Aw,lights_lambert_pars_fragment:Rw,lights_pars_begin:Nw,lights_toon_fragment:Lw,lights_toon_pars_fragment:Dw,lights_phong_fragment:Iw,lights_phong_pars_fragment:Uw,lights_physical_fragment:Fw,lights_physical_pars_fragment:kw,lights_fragment_begin:Ow,lights_fragment_maps:zw,lights_fragment_end:Bw,lightprobes_pars_fragment:Vw,logdepthbuf_fragment:Hw,logdepthbuf_pars_fragment:Gw,logdepthbuf_pars_vertex:jw,logdepthbuf_vertex:Ww,map_fragment:Xw,map_pars_fragment:qw,map_particle_fragment:$w,map_particle_pars_fragment:Yw,metalnessmap_fragment:Kw,metalnessmap_pars_fragment:Zw,morphinstance_vertex:Qw,morphcolor_vertex:Jw,morphnormal_vertex:eE,morphtarget_pars_vertex:tE,morphtarget_vertex:nE,normal_fragment_begin:iE,normal_fragment_maps:rE,normal_pars_fragment:sE,normal_pars_vertex:aE,normal_vertex:oE,normalmap_pars_fragment:lE,clearcoat_normal_fragment_begin:cE,clearcoat_normal_fragment_maps:uE,clearcoat_pars_fragment:dE,iridescence_pars_fragment:fE,opaque_fragment:hE,packing:pE,premultiplied_alpha_fragment:mE,project_vertex:gE,dithering_fragment:xE,dithering_pars_fragment:vE,roughnessmap_fragment:_E,roughnessmap_pars_fragment:yE,shadowmap_pars_fragment:SE,shadowmap_pars_vertex:ME,shadowmap_vertex:wE,shadowmask_pars_fragment:EE,skinbase_vertex:bE,skinning_pars_vertex:TE,skinning_vertex:CE,skinnormal_vertex:AE,specularmap_fragment:RE,specularmap_pars_fragment:NE,tonemapping_fragment:PE,tonemapping_pars_fragment:LE,transmission_fragment:DE,transmission_pars_fragment:IE,uv_pars_fragment:UE,uv_pars_vertex:FE,uv_vertex:kE,worldpos_vertex:OE,background_vert:zE,background_frag:BE,backgroundCube_vert:VE,backgroundCube_frag:HE,cube_vert:GE,cube_frag:jE,depth_vert:WE,depth_frag:XE,distance_vert:qE,distance_frag:$E,equirect_vert:YE,equirect_frag:KE,linedashed_vert:ZE,linedashed_frag:QE,meshbasic_vert:JE,meshbasic_frag:eb,meshlambert_vert:tb,meshlambert_frag:nb,meshmatcap_vert:ib,meshmatcap_frag:rb,meshnormal_vert:sb,meshnormal_frag:ab,meshphong_vert:ob,meshphong_frag:lb,meshphysical_vert:cb,meshphysical_frag:ub,meshtoon_vert:db,meshtoon_frag:fb,points_vert:hb,points_frag:pb,shadow_vert:mb,shadow_frag:gb,sprite_vert:xb,sprite_frag:vb},Ce={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $e}},envmap:{envMap:{value:null},envMapRotation:{value:new $e},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $e},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ee},probesMax:{value:new ee},probesResolution:{value:new ee}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0},uvTransform:{value:new $e}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $e},alphaMap:{value:null},alphaMapTransform:{value:new $e},alphaTest:{value:0}}},oi={basic:{uniforms:sn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:sn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new dt(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:sn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:sn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:sn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new dt(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:sn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:sn([Ce.points,Ce.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:sn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:sn([Ce.common,Ce.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:sn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:sn([Ce.sprite,Ce.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new $e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $e}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:sn([Ce.common,Ce.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:sn([Ce.lights,Ce.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};oi.physical={uniforms:sn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $e},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $e},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $e},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $e},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $e},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $e}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Zo={r:0,b:0,g:0},_b=new Pt,pv=new $e;pv.set(-1,0,0,0,1,0,0,0,1);function yb(t,e,n,i,r,s){const a=new dt(0);let o=r===!0?0:1,c,u,h=null,p=0,f=null;function m(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){const S=v.backgroundBlurriness>0;M=e.get(M,S)}return M}function _(v){let M=!1;const S=m(v);S===null?x(a,o):S&&S.isColor&&(x(S,1),M=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(v,M){const S=m(M);S&&(S.isCubeTexture||S.mapping===gc)?(u===void 0&&(u=new hn(new qr(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Ys(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,N,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_b.makeRotationFromEuler(M.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(pv),u.material.toneMapped=at.getTransfer(S.colorSpace)!==pt,(h!==S||p!==S.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,h=S,p=S.version,f=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new hn(new lo(2,2),new vi({name:"BackgroundMaterial",uniforms:Ys(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=at.getTransfer(S.colorSpace)!==pt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||p!==S.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,h=S,p=S.version,f=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function x(v,M){v.getRGB(Zo,uv(t)),n.buffers.color.setClear(Zo.r,Zo.g,Zo.b,M,s)}function d(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),o=M,x(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,x(a,o)},render:_,addToRenderList:E,dispose:d}}function Sb(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(I,z,W,ne,V){let Q=!1;const q=p(I,ne,W,z);s!==q&&(s=q,u(s.object)),Q=m(I,ne,W,V),Q&&_(I,ne,W,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,S(I,z,W,ne),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function c(){return t.createVertexArray()}function u(I){return t.bindVertexArray(I)}function h(I){return t.deleteVertexArray(I)}function p(I,z,W,ne){const V=ne.wireframe===!0;let Q=i[z.id];Q===void 0&&(Q={},i[z.id]=Q);const q=I.isInstancedMesh===!0?I.id:0;let b=Q[q];b===void 0&&(b={},Q[q]=b);let w=b[W.id];w===void 0&&(w={},b[W.id]=w);let L=w[V];return L===void 0&&(L=f(c()),w[V]=L),L}function f(I){const z=[],W=[],ne=[];for(let V=0;V<n;V++)z[V]=0,W[V]=0,ne[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:W,attributeDivisors:ne,object:I,attributes:{},index:null}}function m(I,z,W,ne){const V=s.attributes,Q=z.attributes;let q=0;const b=W.getAttributes();for(const w in b)if(b[w].location>=0){const O=V[w];let U=Q[w];if(U===void 0&&(w==="instanceMatrix"&&I.instanceMatrix&&(U=I.instanceMatrix),w==="instanceColor"&&I.instanceColor&&(U=I.instanceColor)),O===void 0||O.attribute!==U||U&&O.data!==U.data)return!0;q++}return s.attributesNum!==q||s.index!==ne}function _(I,z,W,ne){const V={},Q=z.attributes;let q=0;const b=W.getAttributes();for(const w in b)if(b[w].location>=0){let O=Q[w];O===void 0&&(w==="instanceMatrix"&&I.instanceMatrix&&(O=I.instanceMatrix),w==="instanceColor"&&I.instanceColor&&(O=I.instanceColor));const U={};U.attribute=O,O&&O.data&&(U.data=O.data),V[w]=U,q++}s.attributes=V,s.attributesNum=q,s.index=ne}function E(){const I=s.newAttributes;for(let z=0,W=I.length;z<W;z++)I[z]=0}function x(I){d(I,0)}function d(I,z){const W=s.newAttributes,ne=s.enabledAttributes,V=s.attributeDivisors;W[I]=1,ne[I]===0&&(t.enableVertexAttribArray(I),ne[I]=1),V[I]!==z&&(t.vertexAttribDivisor(I,z),V[I]=z)}function v(){const I=s.newAttributes,z=s.enabledAttributes;for(let W=0,ne=z.length;W<ne;W++)z[W]!==I[W]&&(t.disableVertexAttribArray(W),z[W]=0)}function M(I,z,W,ne,V,Q,q){q===!0?t.vertexAttribIPointer(I,z,W,V,Q):t.vertexAttribPointer(I,z,W,ne,V,Q)}function S(I,z,W,ne){E();const V=ne.attributes,Q=W.getAttributes(),q=z.defaultAttributeValues;for(const b in Q){const w=Q[b];if(w.location>=0){let L=V[b];if(L===void 0&&(b==="instanceMatrix"&&I.instanceMatrix&&(L=I.instanceMatrix),b==="instanceColor"&&I.instanceColor&&(L=I.instanceColor)),L!==void 0){const O=L.normalized,U=L.itemSize,oe=e.get(L);if(oe===void 0)continue;const ce=oe.buffer,se=oe.type,k=oe.bytesPerElement,$=se===t.INT||se===t.UNSIGNED_INT||L.gpuType===gh;if(L.isInterleavedBufferAttribute){const Z=L.data,ge=Z.stride,me=L.offset;if(Z.isInstancedInterleavedBuffer){for(let he=0;he<w.locationSize;he++)d(w.location+he,Z.meshPerAttribute);I.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let he=0;he<w.locationSize;he++)x(w.location+he);t.bindBuffer(t.ARRAY_BUFFER,ce);for(let he=0;he<w.locationSize;he++)M(w.location+he,U/w.locationSize,se,O,ge*k,(me+U/w.locationSize*he)*k,$)}else{if(L.isInstancedBufferAttribute){for(let Z=0;Z<w.locationSize;Z++)d(w.location+Z,L.meshPerAttribute);I.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let Z=0;Z<w.locationSize;Z++)x(w.location+Z);t.bindBuffer(t.ARRAY_BUFFER,ce);for(let Z=0;Z<w.locationSize;Z++)M(w.location+Z,U/w.locationSize,se,O,U*k,U/w.locationSize*Z*k,$)}}else if(q!==void 0){const O=q[b];if(O!==void 0)switch(O.length){case 2:t.vertexAttrib2fv(w.location,O);break;case 3:t.vertexAttrib3fv(w.location,O);break;case 4:t.vertexAttrib4fv(w.location,O);break;default:t.vertexAttrib1fv(w.location,O)}}}}v()}function T(){R();for(const I in i){const z=i[I];for(const W in z){const ne=z[W];for(const V in ne){const Q=ne[V];for(const q in Q)h(Q[q].object),delete Q[q];delete ne[V]}}delete i[I]}}function N(I){if(i[I.id]===void 0)return;const z=i[I.id];for(const W in z){const ne=z[W];for(const V in ne){const Q=ne[V];for(const q in Q)h(Q[q].object),delete Q[q];delete ne[V]}}delete i[I.id]}function P(I){for(const z in i){const W=i[z];for(const ne in W){const V=W[ne];if(V[I.id]===void 0)continue;const Q=V[I.id];for(const q in Q)h(Q[q].object),delete Q[q];delete V[I.id]}}}function g(I){for(const z in i){const W=i[z],ne=I.isInstancedMesh===!0?I.id:0,V=W[ne];if(V!==void 0){for(const Q in V){const q=V[Q];for(const b in q)h(q[b].object),delete q[b];delete V[Q]}delete W[ne],Object.keys(W).length===0&&delete i[z]}}}function R(){A(),a=!0,s!==r&&(s=r,u(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:A,dispose:T,releaseStatesOfGeometry:N,releaseStatesOfObject:g,releaseStatesOfProgram:P,initAttributes:E,enableAttribute:x,disableUnusedAttributes:v}}function Mb(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function wb(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==Qn&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const g=P===ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Tn&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ui&&!g)}function c(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=c(u);h!==u&&(We("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const p=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),N=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:E,maxCubemapSize:x,maxAttributes:d,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:S,maxSamples:T,samples:N}}function Eb(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Rr,o=new $e,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||i!==0||r;return r=f,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){n=h(p,f,0)},this.setState=function(p,f,m){const _=p.clippingPlanes,E=p.clipIntersection,x=p.clipShadows,d=t.get(p);if(!r||_===null||_.length===0||s&&!x)s?h(null):u();else{const v=s?0:i,M=v*4;let S=d.clippingState||null;c.value=S,S=h(_,f,M,m);for(let T=0;T!==M;++T)S[T]=n[T];d.clippingState=S,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=v}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,f,m,_){const E=p!==null?p.length:0;let x=null;if(E!==0){if(x=c.value,_!==!0||x===null){const d=m+E*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(x===null||x.length<d)&&(x=new Float32Array(d));for(let M=0,S=m;M!==E;++M,S+=4)a.copy(p[M]).applyMatrix4(v,o),a.normal.toArray(x,S),x[S+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}const rr=4,Gm=[.125,.215,.35,.446,.526,.582],Pr=20,bb=256,pa=new Rh,jm=new dt;let bu=null,Tu=0,Cu=0,Au=!1;const Tb=new ee;class Wm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=Tb}=s;bu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),Au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$m(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bu,Tu,Cu),this._renderer.xr.enabled=Au,e.scissorTest=!1,gs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Wr||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),Au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:ki,format:Qn,colorSpace:ql,depthBuffer:!1},r=Xm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xm(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Cb(s)),this._blurMaterial=Rb(s,e,n),this._ggxMaterial=Ab(s,e,n)}return r}_compileMaterial(e){const n=new hn(new _i,e);this._renderer.compile(n,pa)}_sceneToCubeUV(e,n,i,r,s){const c=new kn(90,1,n,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,m=p.toneMapping;p.getClearColor(jm),p.toneMapping=pi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new hn(new qr,new Th({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,x=E.material;let d=!1;const v=e.background;v?v.isColor&&(x.color.copy(v),e.background=null,d=!0):(x.color.copy(jm),d=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(c.up.set(0,u[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[M],s.y,s.z)):S===1?(c.up.set(0,0,u[M]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[M],s.z)):(c.up.set(0,u[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[M]));const T=this._cubeSize;gs(r,S*T,M>2?T:0,T,T),p.setRenderTarget(r),d&&p.render(E,c),p.render(e,c)}p.toneMapping=m,p.autoClear=f,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Wr||e.mapping===qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$m()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;gs(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,pa)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,u=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(u*u-h*h),f=0+u*1.25,m=p*f,{_lodMax:_}=this,E=this._sizeLods[i],x=3*E*(i>_-rr?i-_+rr:0),d=4*(this._cubeSize-E);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=_-n,gs(s,x,d,3*E,2*E),r.setRenderTarget(s),r.render(o,pa),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=_-i,gs(e,x,d,3*E,2*E),r.setRenderTarget(e),r.render(o,pa)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ut("blur direction must be either latitudinal or longitudinal!");const h=3,p=this._lodMeshes[r];p.material=u;const f=u.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Pr-1),E=s/_,x=isFinite(s)?1+Math.floor(h*E):Pr;x>Pr&&We(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Pr}`);const d=[];let v=0;for(let P=0;P<Pr;++P){const g=P/E,R=Math.exp(-g*g/2);d.push(R),P===0?v+=R:P<x&&(v+=2*R)}for(let P=0;P<d.length;P++)d[P]=d[P]/v;f.envMap.value=e.texture,f.samples.value=x,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-i;const S=this._sizeLods[r],T=3*S*(r>M-rr?r-M+rr:0),N=4*(this._cubeSize-S);gs(n,T,N,3*S,2*S),c.setRenderTarget(n),c.render(p,pa)}}function Cb(t){const e=[],n=[],i=[];let r=t;const s=t-rr+1+Gm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>t-rr?c=Gm[a-t+rr-1]:a===0&&(c=0),n.push(c);const u=1/(o-2),h=-u,p=1+u,f=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,_=6,E=3,x=2,d=1,v=new Float32Array(E*_*m),M=new Float32Array(x*_*m),S=new Float32Array(d*_*m);for(let N=0;N<m;N++){const P=N%3*2/3-1,g=N>2?0:-1,R=[P,g,0,P+2/3,g,0,P+2/3,g+1,0,P,g,0,P+2/3,g+1,0,P,g+1,0];v.set(R,E*_*N),M.set(f,x*_*N);const A=[N,N,N,N,N,N];S.set(A,d*_*N)}const T=new _i;T.setAttribute("position",new gi(v,E)),T.setAttribute("uv",new gi(M,x)),T.setAttribute("faceIndex",new gi(S,d)),i.push(new hn(T,null)),r>rr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Xm(t,e,n){const i=new mi(t,e,n);return i.texture.mapping=gc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Ab(t,e,n){return new vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Rb(t,e,n){const i=new Float32Array(Pr),r=new ee(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function qm(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function $m(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function xc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class mv extends mi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new lv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new qr(5,5,5),s=new vi({name:"CubemapFromEquirect",uniforms:Ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Pi});s.uniforms.tEquirect.value=n;const a=new hn(r,s),o=n.minFilter;return n.minFilter===Ur&&(n.minFilter=tn),new UM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function Nb(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,m=!1){return f==null?null:m?a(f):s(f)}function s(f){if(f&&f.isTexture){const m=f.mapping;if(m===Kc||m===Zc)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const E=new mv(_.height);return E.fromEquirectangularTexture(t,f),e.set(f,E),f.addEventListener("dispose",u),o(E.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const m=f.mapping,_=m===Kc||m===Zc,E=m===Wr||m===qs;if(_||E){let x=n.get(f);const d=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new Wm(t)),x=_?i.fromEquirectangular(f,x):i.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,n.set(f,x),x.texture;if(x!==void 0)return x.texture;{const v=f.image;return _&&v&&v.height>0||E&&v&&c(v)?(i===null&&(i=new Wm(t)),x=_?i.fromEquirectangular(f):i.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,n.set(f,x),f.addEventListener("dispose",h),x.texture):null}}}return f}function o(f,m){return m===Kc?f.mapping=Wr:m===Zc&&(f.mapping=qs),f}function c(f){let m=0;const _=6;for(let E=0;E<_;E++)f[E]!==void 0&&m++;return m===_}function u(f){const m=f.target;m.removeEventListener("dispose",u);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function h(f){const m=f.target;m.removeEventListener("dispose",h);const _=n.get(m);_!==void 0&&(n.delete(m),_.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function Pb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Fs("WebGLRenderer: "+i+" extension not supported."),r}}}function Lb(t,e,n,i){const r={},s=new WeakMap;function a(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(p,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function c(p){const f=p.attributes;for(const m in f)e.update(f[m],t.ARRAY_BUFFER)}function u(p){const f=[],m=p.index,_=p.attributes.position;let E=0;if(_===void 0)return;if(m!==null){const v=m.array;E=m.version;for(let M=0,S=v.length;M<S;M+=3){const T=v[M+0],N=v[M+1],P=v[M+2];f.push(T,N,N,P,P,T)}}else{const v=_.array;E=_.version;for(let M=0,S=v.length/3-1;M<S;M+=3){const T=M+0,N=M+1,P=M+2;f.push(T,N,N,P,P,T)}}const x=new(_.count>=65535?ov:av)(f,1);x.version=E;const d=s.get(p);d&&e.remove(d),s.set(p,x)}function h(p){const f=s.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&u(p)}else u(p);return s.get(p)}return{get:o,update:c,getWireframeAttribute:h}}function Db(t,e,n){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function c(p,f){t.drawElements(i,f,s,p*a),n.update(f,i,1)}function u(p,f,m){m!==0&&(t.drawElementsInstanced(i,f,s,p*a,m),n.update(f,i,m))}function h(p,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,p,0,m);let E=0;for(let x=0;x<m;x++)E+=f[x];n.update(E,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function Ib(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:ut("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Ub(t,e,n){const i=new WeakMap,r=new Tt;function s(a,o,c){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==p){let A=function(){g.dispose(),i.delete(o),o.removeEventListener("dispose",A)};var m=A;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),E===!0&&(S=2),x===!0&&(S=3);let T=o.attributes.position.count*S,N=1;T>e.maxTextureSize&&(N=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const P=new Float32Array(T*N*4*p),g=new iv(P,T,N,p);g.type=ui,g.needsUpdate=!0;const R=S*4;for(let I=0;I<p;I++){const z=d[I],W=v[I],ne=M[I],V=T*N*4*I;for(let Q=0;Q<z.count;Q++){const q=Q*R;_===!0&&(r.fromBufferAttribute(z,Q),P[V+q+0]=r.x,P[V+q+1]=r.y,P[V+q+2]=r.z,P[V+q+3]=0),E===!0&&(r.fromBufferAttribute(W,Q),P[V+q+4]=r.x,P[V+q+5]=r.y,P[V+q+6]=r.z,P[V+q+7]=0),x===!0&&(r.fromBufferAttribute(ne,Q),P[V+q+8]=r.x,P[V+q+9]=r.y,P[V+q+10]=r.z,P[V+q+11]=ne.itemSize===4?r.w:1)}}f={count:p,texture:g,size:new lt(T,N)},i.set(o,f),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let x=0;x<u.length;x++)_+=u[x];const E=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(t,"morphTargetBaseInfluence",E),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function Fb(t,e,n,i,r){let s=new WeakMap;function a(u){const h=r.render.frame,p=u.geometry,f=e.get(u,p);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==h&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){const m=u.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return f}function o(){s=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}const kb={[Vx]:"LINEAR_TONE_MAPPING",[Hx]:"REINHARD_TONE_MAPPING",[Gx]:"CINEON_TONE_MAPPING",[jx]:"ACES_FILMIC_TONE_MAPPING",[Xx]:"AGX_TONE_MAPPING",[qx]:"NEUTRAL_TONE_MAPPING",[Wx]:"CUSTOM_TONE_MAPPING"};function Ob(t,e,n,i,r,s){const a=new mi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new $s(e,n):void 0}),o=new mi(e,n,{type:ki,depthBuffer:!1,stencilBuffer:!1}),c=new _i;c.setAttribute("position",new Bn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Bn([0,2,0,0,2,0],2));const u=new RM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new hn(c,u),p=new Rh(-1,1,1,-1,0,1);let f=null,m=null,_=!1,E,x=null,d=[],v=!1;this.setSize=function(M,S){a.setSize(M,S),o.setSize(M,S);for(let T=0;T<d.length;T++){const N=d[T];N.setSize&&N.setSize(M,S)}},this.setEffects=function(M){d=M,v=d.length>0&&d[0].isRenderPass===!0;const S=a.width,T=a.height;for(let N=0;N<d.length;N++){const P=d[N];P.setSize&&P.setSize(S,T)}},this.begin=function(M,S){if(_||M.toneMapping===pi&&d.length===0)return!1;if(x=S,S!==null){const T=S.width,N=S.height;(a.width!==T||a.height!==N)&&this.setSize(T,N)}return v===!1&&M.setRenderTarget(a),E=M.toneMapping,M.toneMapping=pi,!0},this.hasRenderPass=function(){return v},this.end=function(M,S){M.toneMapping=E,_=!0;let T=a,N=o;for(let P=0;P<d.length;P++){const g=d[P];if(g.enabled!==!1&&(g.render(M,N,T,S),g.needsSwap!==!1)){const R=T;T=N,N=R}}if(f!==M.outputColorSpace||m!==M.toneMapping){f=M.outputColorSpace,m=M.toneMapping,u.defines={},at.getTransfer(f)===pt&&(u.defines.SRGB_TRANSFER="");const P=kb[m];P&&(u.defines[P]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,M.setRenderTarget(x),M.render(h,p),x=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),c.dispose(),u.dispose()}}const gv=new ln,gf=new $s(1,1),xv=new iv,vv=new sM,_v=new lv,Ym=[],Km=[],Zm=new Float32Array(16),Qm=new Float32Array(9),Jm=new Float32Array(4);function ea(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Ym[r];if(s===void 0&&(s=new Float32Array(r),Ym[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function vc(t,e){let n=Km[e];n===void 0&&(n=new Int32Array(e),Km[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function zb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Bb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Bt(n,e)}}function Vb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Bt(n,e)}}function Hb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Bt(n,e)}}function Gb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Bt(n,e)}else{if(zt(n,i))return;Jm.set(i),t.uniformMatrix2fv(this.addr,!1,Jm),Bt(n,i)}}function jb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Bt(n,e)}else{if(zt(n,i))return;Qm.set(i),t.uniformMatrix3fv(this.addr,!1,Qm),Bt(n,i)}}function Wb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Bt(n,e)}else{if(zt(n,i))return;Zm.set(i),t.uniformMatrix4fv(this.addr,!1,Zm),Bt(n,i)}}function Xb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function qb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Bt(n,e)}}function $b(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Bt(n,e)}}function Yb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Bt(n,e)}}function Kb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Zb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Bt(n,e)}}function Qb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Bt(n,e)}}function Jb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Bt(n,e)}}function eT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(gf.compareFunction=n.isReversedDepthBuffer()?wh:Mh,s=gf):s=gv,n.setTexture2D(e||s,r)}function tT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||vv,r)}function nT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||_v,r)}function iT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||xv,r)}function rT(t){switch(t){case 5126:return zb;case 35664:return Bb;case 35665:return Vb;case 35666:return Hb;case 35674:return Gb;case 35675:return jb;case 35676:return Wb;case 5124:case 35670:return Xb;case 35667:case 35671:return qb;case 35668:case 35672:return $b;case 35669:case 35673:return Yb;case 5125:return Kb;case 36294:return Zb;case 36295:return Qb;case 36296:return Jb;case 35678:case 36198:case 36298:case 36306:case 35682:return eT;case 35679:case 36299:case 36307:return tT;case 35680:case 36300:case 36308:case 36293:return nT;case 36289:case 36303:case 36311:case 36292:return iT}}function sT(t,e){t.uniform1fv(this.addr,e)}function aT(t,e){const n=ea(e,this.size,2);t.uniform2fv(this.addr,n)}function oT(t,e){const n=ea(e,this.size,3);t.uniform3fv(this.addr,n)}function lT(t,e){const n=ea(e,this.size,4);t.uniform4fv(this.addr,n)}function cT(t,e){const n=ea(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function uT(t,e){const n=ea(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function dT(t,e){const n=ea(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function fT(t,e){t.uniform1iv(this.addr,e)}function hT(t,e){t.uniform2iv(this.addr,e)}function pT(t,e){t.uniform3iv(this.addr,e)}function mT(t,e){t.uniform4iv(this.addr,e)}function gT(t,e){t.uniform1uiv(this.addr,e)}function xT(t,e){t.uniform2uiv(this.addr,e)}function vT(t,e){t.uniform3uiv(this.addr,e)}function _T(t,e){t.uniform4uiv(this.addr,e)}function yT(t,e,n){const i=this.cache,r=e.length,s=vc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=gf:a=gv;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function ST(t,e,n){const i=this.cache,r=e.length,s=vc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||vv,s[a])}function MT(t,e,n){const i=this.cache,r=e.length,s=vc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||_v,s[a])}function wT(t,e,n){const i=this.cache,r=e.length,s=vc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||xv,s[a])}function ET(t){switch(t){case 5126:return sT;case 35664:return aT;case 35665:return oT;case 35666:return lT;case 35674:return cT;case 35675:return uT;case 35676:return dT;case 5124:case 35670:return fT;case 35667:case 35671:return hT;case 35668:case 35672:return pT;case 35669:case 35673:return mT;case 5125:return gT;case 36294:return xT;case 36295:return vT;case 36296:return _T;case 35678:case 36198:case 36298:case 36306:case 35682:return yT;case 35679:case 36299:case 36307:return ST;case 35680:case 36300:case 36308:case 36293:return MT;case 36289:case 36303:case 36311:case 36292:return wT}}class bT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=rT(n.type)}}class TT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ET(n.type)}}class CT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Ru=/(\w+)(\])?(\[|\.)?/g;function e0(t,e){t.seq.push(e),t.map[e.id]=e}function AT(t,e,n){const i=t.name,r=i.length;for(Ru.lastIndex=0;;){const s=Ru.exec(i),a=Ru.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){e0(n,u===void 0?new bT(o,t,e):new TT(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new CT(o),e0(n,p)),n=p}}}class vl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),c=e.getUniformLocation(n,o.name);AT(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function t0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const RT=37297;let NT=0;function PT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const n0=new $e;function LT(t){at._getMatrix(n0,at.workingColorSpace,t);const e=`mat3( ${n0.elements.map(n=>n.toFixed(4))} )`;switch(at.getTransfer(t)){case $l:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function i0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+PT(t.getShaderSource(e),o)}else return s}function DT(t,e){const n=LT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const IT={[Vx]:"Linear",[Hx]:"Reinhard",[Gx]:"Cineon",[jx]:"ACESFilmic",[Xx]:"AgX",[qx]:"Neutral",[Wx]:"Custom"};function UT(t,e){const n=IT[e];return n===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Qo=new ee;function FT(){at.getLuminanceCoefficients(Qo);const t=Qo.x.toFixed(4),e=Qo.y.toFixed(4),n=Qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sa).join(`
`)}function OT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function zT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Sa(t){return t!==""}function r0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function s0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BT=/^[ \t]*#include +<([\w\d./]+)>/gm;function xf(t){return t.replace(BT,HT)}const VT=new Map;function HT(t,e){let n=nt[e];if(n===void 0){const i=VT.get(e);if(i!==void 0)n=nt[i],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return xf(n)}const GT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function a0(t){return t.replace(GT,jT)}function jT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function o0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const WT={[hl]:"SHADOWMAP_TYPE_PCF",[ya]:"SHADOWMAP_TYPE_VSM"};function XT(t){return WT[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const qT={[Wr]:"ENVMAP_TYPE_CUBE",[qs]:"ENVMAP_TYPE_CUBE",[gc]:"ENVMAP_TYPE_CUBE_UV"};function $T(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":qT[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const YT={[qs]:"ENVMAP_MODE_REFRACTION"};function KT(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":YT[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ZT={[Bx]:"ENVMAP_BLENDING_MULTIPLY",[O1]:"ENVMAP_BLENDING_MIX",[z1]:"ENVMAP_BLENDING_ADD"};function QT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":ZT[t.combine]||"ENVMAP_BLENDING_NONE"}function JT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function e2(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=XT(n),u=$T(n),h=KT(n),p=QT(n),f=JT(n),m=kT(n),_=OT(s),E=r.createProgram();let x,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Sa).join(`
`),x.length>0&&(x+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Sa).join(`
`),d.length>0&&(d+=`
`)):(x=[o0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sa).join(`
`),d=[o0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==pi?"#define TONE_MAPPING":"",n.toneMapping!==pi?nt.tonemapping_pars_fragment:"",n.toneMapping!==pi?UT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,DT("linearToOutputTexel",n.outputColorSpace),FT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Sa).join(`
`)),a=xf(a),a=r0(a,n),a=s0(a,n),o=xf(o),o=r0(o,n),o=s0(o,n),a=a0(a),o=a0(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,d=["#define varying in",n.glslVersion===vm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=v+x+a,S=v+d+o,T=t0(r,r.VERTEX_SHADER,M),N=t0(r,r.FRAGMENT_SHADER,S);r.attachShader(E,T),r.attachShader(E,N),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function P(I){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(E)||"",W=r.getShaderInfoLog(T)||"",ne=r.getShaderInfoLog(N)||"",V=z.trim(),Q=W.trim(),q=ne.trim();let b=!0,w=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(b=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,T,N);else{const L=i0(r,T,"vertex"),O=i0(r,N,"fragment");ut("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+V+`
`+L+`
`+O)}else V!==""?We("WebGLProgram: Program Info Log:",V):(Q===""||q==="")&&(w=!1);w&&(I.diagnostics={runnable:b,programLog:V,vertexShader:{log:Q,prefix:x},fragmentShader:{log:q,prefix:d}})}r.deleteShader(T),r.deleteShader(N),g=new vl(r,E),R=zT(r,E)}let g;this.getUniforms=function(){return g===void 0&&P(this),g};let R;this.getAttributes=function(){return R===void 0&&P(this),R};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(E,RT)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=NT++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=T,this.fragmentShader=N,this}let t2=0;class n2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new i2(e),n.set(e,i)),i}}class i2{constructor(e){this.id=t2++,this.code=e,this.usedTimes=0}}function r2(t){return t===Xr||t===Wl||t===Xl}function s2(t,e,n,i,r,s){const a=new rv,o=new n2,c=new Set,u=[],h=new Map,p=i.logarithmicDepthBuffer;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){return c.add(g),g===0?"uv":`uv${g}`}function E(g,R,A,I,z,W){const ne=I.fog,V=z.geometry,Q=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?I.environment:null,q=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,b=e.get(g.envMap||Q,q),w=b&&b.mapping===gc?b.image.height:null,L=m[g.type];g.precision!==null&&(f=i.getMaxPrecision(g.precision),f!==g.precision&&We("WebGLProgram.getParameters:",g.precision,"not supported, using",f,"instead."));const O=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,U=O!==void 0?O.length:0;let oe=0;V.morphAttributes.position!==void 0&&(oe=1),V.morphAttributes.normal!==void 0&&(oe=2),V.morphAttributes.color!==void 0&&(oe=3);let ce,se,k,$;if(L){const ie=oi[L];ce=ie.vertexShader,se=ie.fragmentShader}else{ce=g.vertexShader,se=g.fragmentShader;const ie=o.getVertexShaderStage(g),ve=o.getFragmentShaderStage(g);o.update(g,ie,ve),k=ie.id,$=ve.id}const Z=t.getRenderTarget(),ge=t.state.buffers.depth.getReversed(),me=z.isInstancedMesh===!0,he=z.isBatchedMesh===!0,Pe=!!g.map,Se=!!g.matcap,Me=!!b,Ae=!!g.aoMap,Be=!!g.lightMap,je=!!g.bumpMap&&g.wireframe===!1,Xe=!!g.normalMap,Ye=!!g.displacementMap,Je=!!g.emissiveMap,Ke=!!g.metalnessMap,et=!!g.roughnessMap,B=g.anisotropy>0,tt=g.clearcoat>0,qe=g.dispersion>0,D=g.iridescence>0,y=g.sheen>0,H=g.transmission>0,K=B&&!!g.anisotropyMap,le=tt&&!!g.clearcoatMap,xe=tt&&!!g.clearcoatNormalMap,we=tt&&!!g.clearcoatRoughnessMap,de=D&&!!g.iridescenceMap,pe=D&&!!g.iridescenceThicknessMap,Ee=y&&!!g.sheenColorMap,De=y&&!!g.sheenRoughnessMap,be=!!g.specularMap,Te=!!g.specularColorMap,Fe=!!g.specularIntensityMap,ke=H&&!!g.transmissionMap,Ge=H&&!!g.thicknessMap,G=!!g.gradientMap,ye=!!g.alphaMap,Y=g.alphaTest>0,F=!!g.alphaHash,re=!!g.extensions;let j=pi;g.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(j=t.toneMapping);const fe={shaderID:L,shaderType:g.type,shaderName:g.name,vertexShader:ce,fragmentShader:se,defines:g.defines,customVertexShaderID:k,customFragmentShaderID:$,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:f,batching:he,batchingColor:he&&z._colorsTexture!==null,instancing:me,instancingColor:me&&z.instanceColor!==null,instancingMorph:me&&z.morphTexture!==null,outputColorSpace:Z===null?t.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Pe,matcap:Se,envMap:Me,envMapMode:Me&&b.mapping,envMapCubeUVHeight:w,aoMap:Ae,lightMap:Be,bumpMap:je,normalMap:Xe,displacementMap:Ye,emissiveMap:Je,normalMapObjectSpace:Xe&&g.normalMapType===H1,normalMapTangentSpace:Xe&&g.normalMapType===pf,packedNormalMap:Xe&&g.normalMapType===pf&&r2(g.normalMap.format),metalnessMap:Ke,roughnessMap:et,anisotropy:B,anisotropyMap:K,clearcoat:tt,clearcoatMap:le,clearcoatNormalMap:xe,clearcoatRoughnessMap:we,dispersion:qe,iridescence:D,iridescenceMap:de,iridescenceThicknessMap:pe,sheen:y,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:be,specularColorMap:Te,specularIntensityMap:Fe,transmission:H,transmissionMap:ke,thicknessMap:Ge,gradientMap:G,opaque:g.transparent===!1&&g.blending===Us&&g.alphaToCoverage===!1,alphaMap:ye,alphaTest:Y,alphaHash:F,combine:g.combine,mapUv:Pe&&_(g.map.channel),aoMapUv:Ae&&_(g.aoMap.channel),lightMapUv:Be&&_(g.lightMap.channel),bumpMapUv:je&&_(g.bumpMap.channel),normalMapUv:Xe&&_(g.normalMap.channel),displacementMapUv:Ye&&_(g.displacementMap.channel),emissiveMapUv:Je&&_(g.emissiveMap.channel),metalnessMapUv:Ke&&_(g.metalnessMap.channel),roughnessMapUv:et&&_(g.roughnessMap.channel),anisotropyMapUv:K&&_(g.anisotropyMap.channel),clearcoatMapUv:le&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:xe&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:De&&_(g.sheenRoughnessMap.channel),specularMapUv:be&&_(g.specularMap.channel),specularColorMapUv:Te&&_(g.specularColorMap.channel),specularIntensityMapUv:Fe&&_(g.specularIntensityMap.channel),transmissionMapUv:ke&&_(g.transmissionMap.channel),thicknessMapUv:Ge&&_(g.thicknessMap.channel),alphaMapUv:ye&&_(g.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Xe||B),vertexNormals:!!V.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!V.attributes.uv&&(Pe||ye),fog:!!ne,useFog:g.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||V.attributes.normal===void 0&&Xe===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ge,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:oe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:t.shadowMap.enabled&&A.length>0,shadowMapType:t.shadowMap.type,toneMapping:j,decodeVideoTexture:Pe&&g.map.isVideoTexture===!0&&at.getTransfer(g.map.colorSpace)===pt,decodeVideoTextureEmissive:Je&&g.emissiveMap.isVideoTexture===!0&&at.getTransfer(g.emissiveMap.colorSpace)===pt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===ci,flipSided:g.side===_n,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:re&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&g.extensions.multiDraw===!0||he)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return fe.vertexUv1s=c.has(1),fe.vertexUv2s=c.has(2),fe.vertexUv3s=c.has(3),c.clear(),fe}function x(g){const R=[];if(g.shaderID?R.push(g.shaderID):(R.push(g.customVertexShaderID),R.push(g.customFragmentShaderID)),g.defines!==void 0)for(const A in g.defines)R.push(A),R.push(g.defines[A]);return g.isRawShaderMaterial===!1&&(d(R,g),v(R,g),R.push(t.outputColorSpace)),R.push(g.customProgramCacheKey),R.join()}function d(g,R){g.push(R.precision),g.push(R.outputColorSpace),g.push(R.envMapMode),g.push(R.envMapCubeUVHeight),g.push(R.mapUv),g.push(R.alphaMapUv),g.push(R.lightMapUv),g.push(R.aoMapUv),g.push(R.bumpMapUv),g.push(R.normalMapUv),g.push(R.displacementMapUv),g.push(R.emissiveMapUv),g.push(R.metalnessMapUv),g.push(R.roughnessMapUv),g.push(R.anisotropyMapUv),g.push(R.clearcoatMapUv),g.push(R.clearcoatNormalMapUv),g.push(R.clearcoatRoughnessMapUv),g.push(R.iridescenceMapUv),g.push(R.iridescenceThicknessMapUv),g.push(R.sheenColorMapUv),g.push(R.sheenRoughnessMapUv),g.push(R.specularMapUv),g.push(R.specularColorMapUv),g.push(R.specularIntensityMapUv),g.push(R.transmissionMapUv),g.push(R.thicknessMapUv),g.push(R.combine),g.push(R.fogExp2),g.push(R.sizeAttenuation),g.push(R.morphTargetsCount),g.push(R.morphAttributeCount),g.push(R.numDirLights),g.push(R.numPointLights),g.push(R.numSpotLights),g.push(R.numSpotLightMaps),g.push(R.numHemiLights),g.push(R.numRectAreaLights),g.push(R.numDirLightShadows),g.push(R.numPointLightShadows),g.push(R.numSpotLightShadows),g.push(R.numSpotLightShadowsWithMaps),g.push(R.numLightProbes),g.push(R.shadowMapType),g.push(R.toneMapping),g.push(R.numClippingPlanes),g.push(R.numClipIntersection),g.push(R.depthPacking)}function v(g,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),R.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function M(g){const R=m[g.type];let A;if(R){const I=oi[R];A=TM.clone(I.uniforms)}else A=g.uniforms;return A}function S(g,R){let A=h.get(R);return A!==void 0?++A.usedTimes:(A=new e2(t,R,g,r),u.push(A),h.set(R,A)),A}function T(g){if(--g.usedTimes===0){const R=u.indexOf(g);u[R]=u[u.length-1],u.pop(),h.delete(g.cacheKey),g.destroy()}}function N(g){o.remove(g)}function P(){o.dispose()}return{getParameters:E,getProgramCacheKey:x,getUniforms:M,acquireProgram:S,releaseProgram:T,releaseShaderCache:N,programs:u,dispose:P}}function a2(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,c){t.get(a)[o]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function o2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function l0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function c0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function o(f,m,_,E,x,d){let v=t[e];return v===void 0?(v={id:f.id,object:f,geometry:m,material:_,materialVariant:a(f),groupOrder:E,renderOrder:f.renderOrder,z:x,group:d},t[e]=v):(v.id=f.id,v.object=f,v.geometry=m,v.material=_,v.materialVariant=a(f),v.groupOrder=E,v.renderOrder=f.renderOrder,v.z=x,v.group=d),e++,v}function c(f,m,_,E,x,d){const v=o(f,m,_,E,x,d);_.transmission>0?i.push(v):_.transparent===!0?r.push(v):n.push(v)}function u(f,m,_,E,x,d){const v=o(f,m,_,E,x,d);_.transmission>0?i.unshift(v):_.transparent===!0?r.unshift(v):n.unshift(v)}function h(f,m,_){n.length>1&&n.sort(f||o2),i.length>1&&i.sort(m||l0),r.length>1&&r.sort(m||l0),_&&(n.reverse(),i.reverse(),r.reverse())}function p(){for(let f=e,m=t.length;f<m;f++){const _=t[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:u,finish:p,sort:h}}function l2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new c0,t.set(i,[a])):r>=s.length?(a=new c0,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function c2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ee,color:new dt};break;case"SpotLight":n={position:new ee,direction:new ee,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ee,color:new dt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ee,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":n={color:new dt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return t[e.id]=n,n}}}function u2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let d2=0;function f2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function h2(t){const e=new c2,n=u2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new ee);const r=new ee,s=new Pt,a=new Pt;function o(u){let h=0,p=0,f=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let m=0,_=0,E=0,x=0,d=0,v=0,M=0,S=0,T=0,N=0,P=0;u.sort(f2);for(let R=0,A=u.length;R<A;R++){const I=u[R],z=I.color,W=I.intensity,ne=I.distance;let V=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Xr?V=I.shadow.map.texture:V=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=z.r*W,p+=z.g*W,f+=z.b*W;else if(I.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(I.sh.coefficients[Q],W);P++}else if(I.isDirectionalLight){const Q=e.get(I);if(Q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const q=I.shadow,b=n.get(I);b.shadowIntensity=q.intensity,b.shadowBias=q.bias,b.shadowNormalBias=q.normalBias,b.shadowRadius=q.radius,b.shadowMapSize=q.mapSize,i.directionalShadow[m]=b,i.directionalShadowMap[m]=V,i.directionalShadowMatrix[m]=I.shadow.matrix,v++}i.directional[m]=Q,m++}else if(I.isSpotLight){const Q=e.get(I);Q.position.setFromMatrixPosition(I.matrixWorld),Q.color.copy(z).multiplyScalar(W),Q.distance=ne,Q.coneCos=Math.cos(I.angle),Q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Q.decay=I.decay,i.spot[E]=Q;const q=I.shadow;if(I.map&&(i.spotLightMap[T]=I.map,T++,q.updateMatrices(I),I.castShadow&&N++),i.spotLightMatrix[E]=q.matrix,I.castShadow){const b=n.get(I);b.shadowIntensity=q.intensity,b.shadowBias=q.bias,b.shadowNormalBias=q.normalBias,b.shadowRadius=q.radius,b.shadowMapSize=q.mapSize,i.spotShadow[E]=b,i.spotShadowMap[E]=V,S++}E++}else if(I.isRectAreaLight){const Q=e.get(I);Q.color.copy(z).multiplyScalar(W),Q.halfWidth.set(I.width*.5,0,0),Q.halfHeight.set(0,I.height*.5,0),i.rectArea[x]=Q,x++}else if(I.isPointLight){const Q=e.get(I);if(Q.color.copy(I.color).multiplyScalar(I.intensity),Q.distance=I.distance,Q.decay=I.decay,I.castShadow){const q=I.shadow,b=n.get(I);b.shadowIntensity=q.intensity,b.shadowBias=q.bias,b.shadowNormalBias=q.normalBias,b.shadowRadius=q.radius,b.shadowMapSize=q.mapSize,b.shadowCameraNear=q.camera.near,b.shadowCameraFar=q.camera.far,i.pointShadow[_]=b,i.pointShadowMap[_]=V,i.pointShadowMatrix[_]=I.shadow.matrix,M++}i.point[_]=Q,_++}else if(I.isHemisphereLight){const Q=e.get(I);Q.skyColor.copy(I.color).multiplyScalar(W),Q.groundColor.copy(I.groundColor).multiplyScalar(W),i.hemi[d]=Q,d++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=f;const g=i.hash;(g.directionalLength!==m||g.pointLength!==_||g.spotLength!==E||g.rectAreaLength!==x||g.hemiLength!==d||g.numDirectionalShadows!==v||g.numPointShadows!==M||g.numSpotShadows!==S||g.numSpotMaps!==T||g.numLightProbes!==P)&&(i.directional.length=m,i.spot.length=E,i.rectArea.length=x,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+T-N,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=P,g.directionalLength=m,g.pointLength=_,g.spotLength=E,g.rectAreaLength=x,g.hemiLength=d,g.numDirectionalShadows=v,g.numPointShadows=M,g.numSpotShadows=S,g.numSpotMaps=T,g.numLightProbes=P,i.version=d2++)}function c(u,h){let p=0,f=0,m=0,_=0,E=0;const x=h.matrixWorldInverse;for(let d=0,v=u.length;d<v;d++){const M=u[d];if(M.isDirectionalLight){const S=i.directional[p];S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(x),p++}else if(M.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(x),m++}else if(M.isRectAreaLight){const S=i.rectArea[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(x),a.identity(),s.copy(M.matrixWorld),s.premultiply(x),a.extractRotation(s),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(x),f++}else if(M.isHemisphereLight){const S=i.hemi[E];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(x),E++}}}return{setup:o,setupView:c,state:i}}function u0(t){const e=new h2(t),n=[],i=[],r=[];function s(f){p.camera=f,n.length=0,i.length=0,r.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function c(f){r.push(f)}function u(){e.setup(n)}function h(f){e.setupView(n,f)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:u,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function p2(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new u0(t),e.set(r,[o])):s>=a.length?(o=new u0(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const m2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,g2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,x2=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],v2=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],d0=new Pt,ma=new ee,Nu=new ee;function _2(t,e,n){let i=new Ch;const r=new lt,s=new lt,a=new Tt,o=new NM,c=new PM,u={},h=n.maxTextureSize,p={[gr]:_n,[_n]:gr,[ci]:ci},f=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:m2,fragmentShader:g2}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new _i;_.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new hn(_,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hl;let d=this.type;this.render=function(N,P,g){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||N.length===0)return;this.type===zx&&(We("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=hl);const R=t.getRenderTarget(),A=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Pi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const W=d!==this.type;W&&P.traverse(function(ne){ne.material&&(Array.isArray(ne.material)?ne.material.forEach(V=>V.needsUpdate=!0):ne.material.needsUpdate=!0)});for(let ne=0,V=N.length;ne<V;ne++){const Q=N[ne],q=Q.shadow;if(q===void 0){We("WebGLShadowMap:",Q,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const b=q.getFrameExtents();r.multiply(b),s.copy(q.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/b.x),r.x=s.x*b.x,q.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/b.y),r.y=s.y*b.y,q.mapSize.y=s.y));const w=t.state.buffers.depth.getReversed();if(q.camera._reversedDepth=w,q.map===null||W===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===ya){if(Q.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new mi(r.x,r.y,{format:Xr,type:ki,minFilter:tn,magFilter:tn,generateMipmaps:!1}),q.map.texture.name=Q.name+".shadowMap",q.map.depthTexture=new $s(r.x,r.y,ui),q.map.depthTexture.name=Q.name+".shadowMapDepth",q.map.depthTexture.format=Oi,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Xt,q.map.depthTexture.magFilter=Xt}else Q.isPointLight?(q.map=new mv(r.x),q.map.depthTexture=new EM(r.x,xi)):(q.map=new mi(r.x,r.y),q.map.depthTexture=new $s(r.x,r.y,xi)),q.map.depthTexture.name=Q.name+".shadowMap",q.map.depthTexture.format=Oi,this.type===hl?(q.map.depthTexture.compareFunction=w?wh:Mh,q.map.depthTexture.minFilter=tn,q.map.depthTexture.magFilter=tn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Xt,q.map.depthTexture.magFilter=Xt);q.camera.updateProjectionMatrix()}const L=q.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<L;O++){if(q.map.isWebGLCubeRenderTarget)t.setRenderTarget(q.map,O),t.clear();else{O===0&&(t.setRenderTarget(q.map),t.clear());const U=q.getViewport(O);a.set(s.x*U.x,s.y*U.y,s.x*U.z,s.y*U.w),z.viewport(a)}if(Q.isPointLight){const U=q.camera,oe=q.matrix,ce=Q.distance||U.far;ce!==U.far&&(U.far=ce,U.updateProjectionMatrix()),ma.setFromMatrixPosition(Q.matrixWorld),U.position.copy(ma),Nu.copy(U.position),Nu.add(x2[O]),U.up.copy(v2[O]),U.lookAt(Nu),U.updateMatrixWorld(),oe.makeTranslation(-ma.x,-ma.y,-ma.z),d0.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q._frustum.setFromProjectionMatrix(d0,U.coordinateSystem,U.reversedDepth)}else q.updateMatrices(Q);i=q.getFrustum(),S(P,g,q.camera,Q,this.type)}q.isPointLightShadow!==!0&&this.type===ya&&v(q,g),q.needsUpdate=!1}d=this.type,x.needsUpdate=!1,t.setRenderTarget(R,A,I)};function v(N,P){const g=e.update(E);f.defines.VSM_SAMPLES!==N.blurSamples&&(f.defines.VSM_SAMPLES=N.blurSamples,m.defines.VSM_SAMPLES=N.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new mi(r.x,r.y,{format:Xr,type:ki})),f.uniforms.shadow_pass.value=N.map.depthTexture,f.uniforms.resolution.value=N.mapSize,f.uniforms.radius.value=N.radius,t.setRenderTarget(N.mapPass),t.clear(),t.renderBufferDirect(P,null,g,f,E,null),m.uniforms.shadow_pass.value=N.mapPass.texture,m.uniforms.resolution.value=N.mapSize,m.uniforms.radius.value=N.radius,t.setRenderTarget(N.map),t.clear(),t.renderBufferDirect(P,null,g,m,E,null)}function M(N,P,g,R){let A=null;const I=g.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(I!==void 0)A=I;else if(A=g.isPointLight===!0?c:o,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const z=A.uuid,W=P.uuid;let ne=u[z];ne===void 0&&(ne={},u[z]=ne);let V=ne[W];V===void 0&&(V=A.clone(),ne[W]=V,P.addEventListener("dispose",T)),A=V}if(A.visible=P.visible,A.wireframe=P.wireframe,R===ya?A.side=P.shadowSide!==null?P.shadowSide:P.side:A.side=P.shadowSide!==null?P.shadowSide:p[P.side],A.alphaMap=P.alphaMap,A.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,A.map=P.map,A.clipShadows=P.clipShadows,A.clippingPlanes=P.clippingPlanes,A.clipIntersection=P.clipIntersection,A.displacementMap=P.displacementMap,A.displacementScale=P.displacementScale,A.displacementBias=P.displacementBias,A.wireframeLinewidth=P.wireframeLinewidth,A.linewidth=P.linewidth,g.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const z=t.properties.get(A);z.light=g}return A}function S(N,P,g,R,A){if(N.visible===!1)return;if(N.layers.test(P.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&A===ya)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,N.matrixWorld);const W=e.update(N),ne=N.material;if(Array.isArray(ne)){const V=W.groups;for(let Q=0,q=V.length;Q<q;Q++){const b=V[Q],w=ne[b.materialIndex];if(w&&w.visible){const L=M(N,w,R,A);N.onBeforeShadow(t,N,P,g,W,L,b),t.renderBufferDirect(g,null,W,L,N,b),N.onAfterShadow(t,N,P,g,W,L,b)}}}else if(ne.visible){const V=M(N,ne,R,A);N.onBeforeShadow(t,N,P,g,W,V,null),t.renderBufferDirect(g,null,W,V,N,null),N.onAfterShadow(t,N,P,g,W,V,null)}}const z=N.children;for(let W=0,ne=z.length;W<ne;W++)S(z[W],P,g,R,A)}function T(N){N.target.removeEventListener("dispose",T);for(const g in u){const R=u[g],A=N.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}function y2(t,e){function n(){let G=!1;const ye=new Tt;let Y=null;const F=new Tt(0,0,0,0);return{setMask:function(re){Y!==re&&!G&&(t.colorMask(re,re,re,re),Y=re)},setLocked:function(re){G=re},setClear:function(re,j,fe,ie,ve){ve===!0&&(re*=ie,j*=ie,fe*=ie),ye.set(re,j,fe,ie),F.equals(ye)===!1&&(t.clearColor(re,j,fe,ie),F.copy(ye))},reset:function(){G=!1,Y=null,F.set(-1,0,0,0)}}}function i(){let G=!1,ye=!1,Y=null,F=null,re=null;return{setReversed:function(j){if(ye!==j){const fe=e.get("EXT_clip_control");j?fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.ZERO_TO_ONE_EXT):fe.clipControlEXT(fe.LOWER_LEFT_EXT,fe.NEGATIVE_ONE_TO_ONE_EXT),ye=j;const ie=re;re=null,this.setClear(ie)}},getReversed:function(){return ye},setTest:function(j){j?Z(t.DEPTH_TEST):ge(t.DEPTH_TEST)},setMask:function(j){Y!==j&&!G&&(t.depthMask(j),Y=j)},setFunc:function(j){if(ye&&(j=Q1[j]),F!==j){switch(j){case Ad:t.depthFunc(t.NEVER);break;case Rd:t.depthFunc(t.ALWAYS);break;case Nd:t.depthFunc(t.LESS);break;case Xs:t.depthFunc(t.LEQUAL);break;case Pd:t.depthFunc(t.EQUAL);break;case Ld:t.depthFunc(t.GEQUAL);break;case Dd:t.depthFunc(t.GREATER);break;case Id:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}F=j}},setLocked:function(j){G=j},setClear:function(j){re!==j&&(re=j,ye&&(j=1-j),t.clearDepth(j))},reset:function(){G=!1,Y=null,F=null,re=null,ye=!1}}}function r(){let G=!1,ye=null,Y=null,F=null,re=null,j=null,fe=null,ie=null,ve=null;return{setTest:function(Oe){G||(Oe?Z(t.STENCIL_TEST):ge(t.STENCIL_TEST))},setMask:function(Oe){ye!==Oe&&!G&&(t.stencilMask(Oe),ye=Oe)},setFunc:function(Oe,Ze,ht){(Y!==Oe||F!==Ze||re!==ht)&&(t.stencilFunc(Oe,Ze,ht),Y=Oe,F=Ze,re=ht)},setOp:function(Oe,Ze,ht){(j!==Oe||fe!==Ze||ie!==ht)&&(t.stencilOp(Oe,Ze,ht),j=Oe,fe=Ze,ie=ht)},setLocked:function(Oe){G=Oe},setClear:function(Oe){ve!==Oe&&(t.clearStencil(Oe),ve=Oe)},reset:function(){G=!1,ye=null,Y=null,F=null,re=null,j=null,fe=null,ie=null,ve=null}}}const s=new n,a=new i,o=new r,c=new WeakMap,u=new WeakMap;let h={},p={},f={},m=new WeakMap,_=[],E=null,x=!1,d=null,v=null,M=null,S=null,T=null,N=null,P=null,g=new dt(0,0,0),R=0,A=!1,I=null,z=null,W=null,ne=null,V=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,b=0;const w=t.getParameter(t.VERSION);w.indexOf("WebGL")!==-1?(b=parseFloat(/^WebGL (\d)/.exec(w)[1]),q=b>=1):w.indexOf("OpenGL ES")!==-1&&(b=parseFloat(/^OpenGL ES (\d)/.exec(w)[1]),q=b>=2);let L=null,O={};const U=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),ce=new Tt().fromArray(U),se=new Tt().fromArray(oe);function k(G,ye,Y,F){const re=new Uint8Array(4),j=t.createTexture();t.bindTexture(G,j),t.texParameteri(G,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(G,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let fe=0;fe<Y;fe++)G===t.TEXTURE_3D||G===t.TEXTURE_2D_ARRAY?t.texImage3D(ye,0,t.RGBA,1,1,F,0,t.RGBA,t.UNSIGNED_BYTE,re):t.texImage2D(ye+fe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,re);return j}const $={};$[t.TEXTURE_2D]=k(t.TEXTURE_2D,t.TEXTURE_2D,1),$[t.TEXTURE_CUBE_MAP]=k(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[t.TEXTURE_2D_ARRAY]=k(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),$[t.TEXTURE_3D]=k(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Z(t.DEPTH_TEST),a.setFunc(Xs),je(!1),Xe(fm),Z(t.CULL_FACE),Ae(Pi);function Z(G){h[G]!==!0&&(t.enable(G),h[G]=!0)}function ge(G){h[G]!==!1&&(t.disable(G),h[G]=!1)}function me(G,ye){return f[G]!==ye?(t.bindFramebuffer(G,ye),f[G]=ye,G===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ye),G===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ye),!0):!1}function he(G,ye){let Y=_,F=!1;if(G){Y=m.get(ye),Y===void 0&&(Y=[],m.set(ye,Y));const re=G.textures;if(Y.length!==re.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let j=0,fe=re.length;j<fe;j++)Y[j]=t.COLOR_ATTACHMENT0+j;Y.length=re.length,F=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,F=!0);F&&t.drawBuffers(Y)}function Pe(G){return E!==G?(t.useProgram(G),E=G,!0):!1}const Se={[Nr]:t.FUNC_ADD,[S1]:t.FUNC_SUBTRACT,[M1]:t.FUNC_REVERSE_SUBTRACT};Se[w1]=t.MIN,Se[E1]=t.MAX;const Me={[b1]:t.ZERO,[T1]:t.ONE,[C1]:t.SRC_COLOR,[Td]:t.SRC_ALPHA,[D1]:t.SRC_ALPHA_SATURATE,[P1]:t.DST_COLOR,[R1]:t.DST_ALPHA,[A1]:t.ONE_MINUS_SRC_COLOR,[Cd]:t.ONE_MINUS_SRC_ALPHA,[L1]:t.ONE_MINUS_DST_COLOR,[N1]:t.ONE_MINUS_DST_ALPHA,[I1]:t.CONSTANT_COLOR,[U1]:t.ONE_MINUS_CONSTANT_COLOR,[F1]:t.CONSTANT_ALPHA,[k1]:t.ONE_MINUS_CONSTANT_ALPHA};function Ae(G,ye,Y,F,re,j,fe,ie,ve,Oe){if(G===Pi){x===!0&&(ge(t.BLEND),x=!1);return}if(x===!1&&(Z(t.BLEND),x=!0),G!==y1){if(G!==d||Oe!==A){if((v!==Nr||T!==Nr)&&(t.blendEquation(t.FUNC_ADD),v=Nr,T=Nr),Oe)switch(G){case Us:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hm:t.blendFunc(t.ONE,t.ONE);break;case pm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case mm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ut("WebGLState: Invalid blending: ",G);break}else switch(G){case Us:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case pm:ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mm:ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ut("WebGLState: Invalid blending: ",G);break}M=null,S=null,N=null,P=null,g.set(0,0,0),R=0,d=G,A=Oe}return}re=re||ye,j=j||Y,fe=fe||F,(ye!==v||re!==T)&&(t.blendEquationSeparate(Se[ye],Se[re]),v=ye,T=re),(Y!==M||F!==S||j!==N||fe!==P)&&(t.blendFuncSeparate(Me[Y],Me[F],Me[j],Me[fe]),M=Y,S=F,N=j,P=fe),(ie.equals(g)===!1||ve!==R)&&(t.blendColor(ie.r,ie.g,ie.b,ve),g.copy(ie),R=ve),d=G,A=!1}function Be(G,ye){G.side===ci?ge(t.CULL_FACE):Z(t.CULL_FACE);let Y=G.side===_n;ye&&(Y=!Y),je(Y),G.blending===Us&&G.transparent===!1?Ae(Pi):Ae(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),s.setMask(G.colorWrite);const F=G.stencilWrite;o.setTest(F),F&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Je(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Z(t.SAMPLE_ALPHA_TO_COVERAGE):ge(t.SAMPLE_ALPHA_TO_COVERAGE)}function je(G){I!==G&&(G?t.frontFace(t.CW):t.frontFace(t.CCW),I=G)}function Xe(G){G!==v1?(Z(t.CULL_FACE),G!==z&&(G===fm?t.cullFace(t.BACK):G===_1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ge(t.CULL_FACE),z=G}function Ye(G){G!==W&&(q&&t.lineWidth(G),W=G)}function Je(G,ye,Y){G?(Z(t.POLYGON_OFFSET_FILL),(ne!==ye||V!==Y)&&(ne=ye,V=Y,a.getReversed()&&(ye=-ye),t.polygonOffset(ye,Y))):ge(t.POLYGON_OFFSET_FILL)}function Ke(G){G?Z(t.SCISSOR_TEST):ge(t.SCISSOR_TEST)}function et(G){G===void 0&&(G=t.TEXTURE0+Q-1),L!==G&&(t.activeTexture(G),L=G)}function B(G,ye,Y){Y===void 0&&(L===null?Y=t.TEXTURE0+Q-1:Y=L);let F=O[Y];F===void 0&&(F={type:void 0,texture:void 0},O[Y]=F),(F.type!==G||F.texture!==ye)&&(L!==Y&&(t.activeTexture(Y),L=Y),t.bindTexture(G,ye||$[G]),F.type=G,F.texture=ye)}function tt(){const G=O[L];G!==void 0&&G.type!==void 0&&(t.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function qe(){try{t.compressedTexImage2D(...arguments)}catch(G){ut("WebGLState:",G)}}function D(){try{t.compressedTexImage3D(...arguments)}catch(G){ut("WebGLState:",G)}}function y(){try{t.texSubImage2D(...arguments)}catch(G){ut("WebGLState:",G)}}function H(){try{t.texSubImage3D(...arguments)}catch(G){ut("WebGLState:",G)}}function K(){try{t.compressedTexSubImage2D(...arguments)}catch(G){ut("WebGLState:",G)}}function le(){try{t.compressedTexSubImage3D(...arguments)}catch(G){ut("WebGLState:",G)}}function xe(){try{t.texStorage2D(...arguments)}catch(G){ut("WebGLState:",G)}}function we(){try{t.texStorage3D(...arguments)}catch(G){ut("WebGLState:",G)}}function de(){try{t.texImage2D(...arguments)}catch(G){ut("WebGLState:",G)}}function pe(){try{t.texImage3D(...arguments)}catch(G){ut("WebGLState:",G)}}function Ee(G){return p[G]!==void 0?p[G]:t.getParameter(G)}function De(G,ye){p[G]!==ye&&(t.pixelStorei(G,ye),p[G]=ye)}function be(G){ce.equals(G)===!1&&(t.scissor(G.x,G.y,G.z,G.w),ce.copy(G))}function Te(G){se.equals(G)===!1&&(t.viewport(G.x,G.y,G.z,G.w),se.copy(G))}function Fe(G,ye){let Y=u.get(ye);Y===void 0&&(Y=new WeakMap,u.set(ye,Y));let F=Y.get(G);F===void 0&&(F=t.getUniformBlockIndex(ye,G.name),Y.set(G,F))}function ke(G,ye){const F=u.get(ye).get(G);c.get(ye)!==F&&(t.uniformBlockBinding(ye,F,G.__bindingPointIndex),c.set(ye,F))}function Ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},p={},L=null,O={},f={},m=new WeakMap,_=[],E=null,x=!1,d=null,v=null,M=null,S=null,T=null,N=null,P=null,g=new dt(0,0,0),R=0,A=!1,I=null,z=null,W=null,ne=null,V=null,ce.set(0,0,t.canvas.width,t.canvas.height),se.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Z,disable:ge,bindFramebuffer:me,drawBuffers:he,useProgram:Pe,setBlending:Ae,setMaterial:Be,setFlipSided:je,setCullFace:Xe,setLineWidth:Ye,setPolygonOffset:Je,setScissorTest:Ke,activeTexture:et,bindTexture:B,unbindTexture:tt,compressedTexImage2D:qe,compressedTexImage3D:D,texImage2D:de,texImage3D:pe,pixelStorei:De,getParameter:Ee,updateUBOMapping:Fe,uniformBlockBinding:ke,texStorage2D:xe,texStorage3D:we,texSubImage2D:y,texSubImage3D:H,compressedTexSubImage2D:K,compressedTexSubImage3D:le,scissor:be,viewport:Te,reset:Ge}}function S2(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new lt,h=new WeakMap,p=new Set;let f;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,y){return _?new OffscreenCanvas(D,y):Yl("canvas")}function x(D,y,H){let K=1;const le=qe(D);if((le.width>H||le.height>H)&&(K=H/Math.max(le.width,le.height)),K<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const xe=Math.floor(K*le.width),we=Math.floor(K*le.height);f===void 0&&(f=E(xe,we));const de=y?E(xe,we):f;return de.width=xe,de.height=we,de.getContext("2d").drawImage(D,0,0,xe,we),We("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+xe+"x"+we+")."),de}else return"data"in D&&We("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),D;return D}function d(D){return D.generateMipmaps}function v(D){t.generateMipmap(D)}function M(D){return D.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?t.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(D,y,H,K,le,xe=!1){if(D!==null){if(t[D]!==void 0)return t[D];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let we;K&&(we=e.get("EXT_texture_norm16"),we||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=y;if(y===t.RED&&(H===t.FLOAT&&(de=t.R32F),H===t.HALF_FLOAT&&(de=t.R16F),H===t.UNSIGNED_BYTE&&(de=t.R8),H===t.UNSIGNED_SHORT&&we&&(de=we.R16_EXT),H===t.SHORT&&we&&(de=we.R16_SNORM_EXT)),y===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(de=t.R8UI),H===t.UNSIGNED_SHORT&&(de=t.R16UI),H===t.UNSIGNED_INT&&(de=t.R32UI),H===t.BYTE&&(de=t.R8I),H===t.SHORT&&(de=t.R16I),H===t.INT&&(de=t.R32I)),y===t.RG&&(H===t.FLOAT&&(de=t.RG32F),H===t.HALF_FLOAT&&(de=t.RG16F),H===t.UNSIGNED_BYTE&&(de=t.RG8),H===t.UNSIGNED_SHORT&&we&&(de=we.RG16_EXT),H===t.SHORT&&we&&(de=we.RG16_SNORM_EXT)),y===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(de=t.RG8UI),H===t.UNSIGNED_SHORT&&(de=t.RG16UI),H===t.UNSIGNED_INT&&(de=t.RG32UI),H===t.BYTE&&(de=t.RG8I),H===t.SHORT&&(de=t.RG16I),H===t.INT&&(de=t.RG32I)),y===t.RGB_INTEGER&&(H===t.UNSIGNED_BYTE&&(de=t.RGB8UI),H===t.UNSIGNED_SHORT&&(de=t.RGB16UI),H===t.UNSIGNED_INT&&(de=t.RGB32UI),H===t.BYTE&&(de=t.RGB8I),H===t.SHORT&&(de=t.RGB16I),H===t.INT&&(de=t.RGB32I)),y===t.RGBA_INTEGER&&(H===t.UNSIGNED_BYTE&&(de=t.RGBA8UI),H===t.UNSIGNED_SHORT&&(de=t.RGBA16UI),H===t.UNSIGNED_INT&&(de=t.RGBA32UI),H===t.BYTE&&(de=t.RGBA8I),H===t.SHORT&&(de=t.RGBA16I),H===t.INT&&(de=t.RGBA32I)),y===t.RGB&&(H===t.UNSIGNED_SHORT&&we&&(de=we.RGB16_EXT),H===t.SHORT&&we&&(de=we.RGB16_SNORM_EXT),H===t.UNSIGNED_INT_5_9_9_9_REV&&(de=t.RGB9_E5),H===t.UNSIGNED_INT_10F_11F_11F_REV&&(de=t.R11F_G11F_B10F)),y===t.RGBA){const pe=xe?$l:at.getTransfer(le);H===t.FLOAT&&(de=t.RGBA32F),H===t.HALF_FLOAT&&(de=t.RGBA16F),H===t.UNSIGNED_BYTE&&(de=pe===pt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT&&we&&(de=we.RGBA16_EXT),H===t.SHORT&&we&&(de=we.RGBA16_SNORM_EXT),H===t.UNSIGNED_SHORT_4_4_4_4&&(de=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(de=t.RGB5_A1)}return(de===t.R16F||de===t.R32F||de===t.RG16F||de===t.RG32F||de===t.RGBA16F||de===t.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function T(D,y){let H;return D?y===null||y===xi||y===Qa?H=t.DEPTH24_STENCIL8:y===ui?H=t.DEPTH32F_STENCIL8:y===Za&&(H=t.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===xi||y===Qa?H=t.DEPTH_COMPONENT24:y===ui?H=t.DEPTH_COMPONENT32F:y===Za&&(H=t.DEPTH_COMPONENT16),H}function N(D,y){return d(D)===!0||D.isFramebufferTexture&&D.minFilter!==Xt&&D.minFilter!==tn?Math.log2(Math.max(y.width,y.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?y.mipmaps.length:1}function P(D){const y=D.target;y.removeEventListener("dispose",P),R(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&p.delete(y)}function g(D){const y=D.target;y.removeEventListener("dispose",g),I(y)}function R(D){const y=i.get(D);if(y.__webglInit===void 0)return;const H=D.source,K=m.get(H);if(K){const le=K[y.__cacheKey];le.usedTimes--,le.usedTimes===0&&A(D),Object.keys(K).length===0&&m.delete(H)}i.remove(D)}function A(D){const y=i.get(D);t.deleteTexture(y.__webglTexture);const H=D.source,K=m.get(H);delete K[y.__cacheKey],a.memory.textures--}function I(D){const y=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let le=0;le<y.__webglFramebuffer[K].length;le++)t.deleteFramebuffer(y.__webglFramebuffer[K][le]);else t.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)t.deleteFramebuffer(y.__webglFramebuffer[K]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const H=D.textures;for(let K=0,le=H.length;K<le;K++){const xe=i.get(H[K]);xe.__webglTexture&&(t.deleteTexture(xe.__webglTexture),a.memory.textures--),i.remove(H[K])}i.remove(D)}let z=0;function W(){z=0}function ne(){return z}function V(D){z=D}function Q(){const D=z;return D>=r.maxTextures&&We("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),z+=1,D}function q(D){const y=[];return y.push(D.wrapS),y.push(D.wrapT),y.push(D.wrapR||0),y.push(D.magFilter),y.push(D.minFilter),y.push(D.anisotropy),y.push(D.internalFormat),y.push(D.format),y.push(D.type),y.push(D.generateMipmaps),y.push(D.premultiplyAlpha),y.push(D.flipY),y.push(D.unpackAlignment),y.push(D.colorSpace),y.join()}function b(D,y){const H=i.get(D);if(D.isVideoTexture&&B(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&H.__version!==D.version){const K=D.image;if(K===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(H,D,y);return}}else D.isExternalTexture&&(H.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+y)}function w(D,y){const H=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){ge(H,D,y);return}else D.isExternalTexture&&(H.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+y)}function L(D,y){const H=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){ge(H,D,y);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+y)}function O(D,y){const H=i.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&H.__version!==D.version){me(H,D,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+y)}const U={[Ud]:t.REPEAT,[Ri]:t.CLAMP_TO_EDGE,[Fd]:t.MIRRORED_REPEAT},oe={[Xt]:t.NEAREST,[B1]:t.NEAREST_MIPMAP_NEAREST,[No]:t.NEAREST_MIPMAP_LINEAR,[tn]:t.LINEAR,[Qc]:t.LINEAR_MIPMAP_NEAREST,[Ur]:t.LINEAR_MIPMAP_LINEAR},ce={[G1]:t.NEVER,[$1]:t.ALWAYS,[j1]:t.LESS,[Mh]:t.LEQUAL,[W1]:t.EQUAL,[wh]:t.GEQUAL,[X1]:t.GREATER,[q1]:t.NOTEQUAL};function se(D,y){if(y.type===ui&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===tn||y.magFilter===Qc||y.magFilter===No||y.magFilter===Ur||y.minFilter===tn||y.minFilter===Qc||y.minFilter===No||y.minFilter===Ur)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(D,t.TEXTURE_WRAP_S,U[y.wrapS]),t.texParameteri(D,t.TEXTURE_WRAP_T,U[y.wrapT]),(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)&&t.texParameteri(D,t.TEXTURE_WRAP_R,U[y.wrapR]),t.texParameteri(D,t.TEXTURE_MAG_FILTER,oe[y.magFilter]),t.texParameteri(D,t.TEXTURE_MIN_FILTER,oe[y.minFilter]),y.compareFunction&&(t.texParameteri(D,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(D,t.TEXTURE_COMPARE_FUNC,ce[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Xt||y.minFilter!==No&&y.minFilter!==Ur||y.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(D,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function k(D,y){let H=!1;D.__webglInit===void 0&&(D.__webglInit=!0,y.addEventListener("dispose",P));const K=y.source;let le=m.get(K);le===void 0&&(le={},m.set(K,le));const xe=q(y);if(xe!==D.__cacheKey){le[xe]===void 0&&(le[xe]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,H=!0),le[xe].usedTimes++;const we=le[D.__cacheKey];we!==void 0&&(le[D.__cacheKey].usedTimes--,we.usedTimes===0&&A(y)),D.__cacheKey=xe,D.__webglTexture=le[xe].texture}return H}function $(D,y,H){return Math.floor(Math.floor(D/H)/y)}function Z(D,y,H,K){const xe=D.updateRanges;if(xe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,H,K,y.data);else{xe.sort((De,be)=>De.start-be.start);let we=0;for(let De=1;De<xe.length;De++){const be=xe[we],Te=xe[De],Fe=be.start+be.count,ke=$(Te.start,y.width,4),Ge=$(be.start,y.width,4);Te.start<=Fe+1&&ke===Ge&&$(Te.start+Te.count-1,y.width,4)===ke?be.count=Math.max(be.count,Te.start+Te.count-be.start):(++we,xe[we]=Te)}xe.length=we+1;const de=n.getParameter(t.UNPACK_ROW_LENGTH),pe=n.getParameter(t.UNPACK_SKIP_PIXELS),Ee=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let De=0,be=xe.length;De<be;De++){const Te=xe[De],Fe=Math.floor(Te.start/4),ke=Math.ceil(Te.count/4),Ge=Fe%y.width,G=Math.floor(Fe/y.width),ye=ke,Y=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(t.UNPACK_SKIP_ROWS,G),n.texSubImage2D(t.TEXTURE_2D,0,Ge,G,ye,Y,H,K,y.data)}D.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,de),n.pixelStorei(t.UNPACK_SKIP_PIXELS,pe),n.pixelStorei(t.UNPACK_SKIP_ROWS,Ee)}}function ge(D,y,H){let K=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=t.TEXTURE_3D);const le=k(D,y),xe=y.source;n.bindTexture(K,D.__webglTexture,t.TEXTURE0+H);const we=i.get(xe);if(xe.version!==we.__version||le===!0){if(n.activeTexture(t.TEXTURE0+H),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const Y=at.getPrimaries(at.workingColorSpace),F=y.colorSpace===tr?null:at.getPrimaries(y.colorSpace),re=y.colorSpace===tr||Y===F?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,re)}n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment);let pe=x(y.image,!1,r.maxTextureSize);pe=tt(y,pe);const Ee=s.convert(y.format,y.colorSpace),De=s.convert(y.type);let be=S(y.internalFormat,Ee,De,y.normalized,y.colorSpace,y.isVideoTexture);se(K,y);let Te;const Fe=y.mipmaps,ke=y.isVideoTexture!==!0,Ge=we.__version===void 0||le===!0,G=xe.dataReady,ye=N(y,pe);if(y.isDepthTexture)be=T(y.format===Fr,y.type),Ge&&(ke?n.texStorage2D(t.TEXTURE_2D,1,be,pe.width,pe.height):n.texImage2D(t.TEXTURE_2D,0,be,pe.width,pe.height,0,Ee,De,null));else if(y.isDataTexture)if(Fe.length>0){ke&&Ge&&n.texStorage2D(t.TEXTURE_2D,ye,be,Fe[0].width,Fe[0].height);for(let Y=0,F=Fe.length;Y<F;Y++)Te=Fe[Y],ke?G&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,Te.width,Te.height,Ee,De,Te.data):n.texImage2D(t.TEXTURE_2D,Y,be,Te.width,Te.height,0,Ee,De,Te.data);y.generateMipmaps=!1}else ke?(Ge&&n.texStorage2D(t.TEXTURE_2D,ye,be,pe.width,pe.height),G&&Z(y,pe,Ee,De)):n.texImage2D(t.TEXTURE_2D,0,be,pe.width,pe.height,0,Ee,De,pe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ke&&Ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ye,be,Fe[0].width,Fe[0].height,pe.depth);for(let Y=0,F=Fe.length;Y<F;Y++)if(Te=Fe[Y],y.format!==Qn)if(Ee!==null)if(ke){if(G)if(y.layerUpdates.size>0){const re=Hm(Te.width,Te.height,y.format,y.type);for(const j of y.layerUpdates){const fe=Te.data.subarray(j*re/Te.data.BYTES_PER_ELEMENT,(j+1)*re/Te.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,j,Te.width,Te.height,1,Ee,fe)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,Te.width,Te.height,pe.depth,Ee,Te.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,be,Te.width,Te.height,pe.depth,0,Te.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?G&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,Te.width,Te.height,pe.depth,Ee,De,Te.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,be,Te.width,Te.height,pe.depth,0,Ee,De,Te.data)}else{ke&&Ge&&n.texStorage2D(t.TEXTURE_2D,ye,be,Fe[0].width,Fe[0].height);for(let Y=0,F=Fe.length;Y<F;Y++)Te=Fe[Y],y.format!==Qn?Ee!==null?ke?G&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,Te.width,Te.height,Ee,Te.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,be,Te.width,Te.height,0,Te.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?G&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,Te.width,Te.height,Ee,De,Te.data):n.texImage2D(t.TEXTURE_2D,Y,be,Te.width,Te.height,0,Ee,De,Te.data)}else if(y.isDataArrayTexture)if(ke){if(Ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ye,be,pe.width,pe.height,pe.depth),G)if(y.layerUpdates.size>0){const Y=Hm(pe.width,pe.height,y.format,y.type);for(const F of y.layerUpdates){const re=pe.data.subarray(F*Y/pe.data.BYTES_PER_ELEMENT,(F+1)*Y/pe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,F,pe.width,pe.height,1,Ee,De,re)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ee,De,pe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,pe.width,pe.height,pe.depth,0,Ee,De,pe.data);else if(y.isData3DTexture)ke?(Ge&&n.texStorage3D(t.TEXTURE_3D,ye,be,pe.width,pe.height,pe.depth),G&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ee,De,pe.data)):n.texImage3D(t.TEXTURE_3D,0,be,pe.width,pe.height,pe.depth,0,Ee,De,pe.data);else if(y.isFramebufferTexture){if(Ge)if(ke)n.texStorage2D(t.TEXTURE_2D,ye,be,pe.width,pe.height);else{let Y=pe.width,F=pe.height;for(let re=0;re<ye;re++)n.texImage2D(t.TEXTURE_2D,re,be,Y,F,0,Ee,De,null),Y>>=1,F>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in t){const Y=t.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),pe.parentNode!==Y){Y.appendChild(pe),p.add(y),Y.onpaint=F=>{const re=F.changedElements;for(const j of p)re.includes(j.image)&&(j.needsUpdate=!0)},Y.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,pe);else{const re=t.RGBA,j=t.RGBA,fe=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,re,j,fe,pe)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Fe.length>0){if(ke&&Ge){const Y=qe(Fe[0]);n.texStorage2D(t.TEXTURE_2D,ye,be,Y.width,Y.height)}for(let Y=0,F=Fe.length;Y<F;Y++)Te=Fe[Y],ke?G&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,Ee,De,Te):n.texImage2D(t.TEXTURE_2D,Y,be,Ee,De,Te);y.generateMipmaps=!1}else if(ke){if(Ge){const Y=qe(pe);n.texStorage2D(t.TEXTURE_2D,ye,be,Y.width,Y.height)}G&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ee,De,pe)}else n.texImage2D(t.TEXTURE_2D,0,be,Ee,De,pe);d(y)&&v(K),we.__version=xe.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function me(D,y,H){if(y.image.length!==6)return;const K=k(D,y),le=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+H);const xe=i.get(le);if(le.version!==xe.__version||K===!0){n.activeTexture(t.TEXTURE0+H);const we=at.getPrimaries(at.workingColorSpace),de=y.colorSpace===tr?null:at.getPrimaries(y.colorSpace),pe=y.colorSpace===tr||we===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ee=y.isCompressedTexture||y.image[0].isCompressedTexture,De=y.image[0]&&y.image[0].isDataTexture,be=[];for(let j=0;j<6;j++)!Ee&&!De?be[j]=x(y.image[j],!0,r.maxCubemapSize):be[j]=De?y.image[j].image:y.image[j],be[j]=tt(y,be[j]);const Te=be[0],Fe=s.convert(y.format,y.colorSpace),ke=s.convert(y.type),Ge=S(y.internalFormat,Fe,ke,y.normalized,y.colorSpace),G=y.isVideoTexture!==!0,ye=xe.__version===void 0||K===!0,Y=le.dataReady;let F=N(y,Te);se(t.TEXTURE_CUBE_MAP,y);let re;if(Ee){G&&ye&&n.texStorage2D(t.TEXTURE_CUBE_MAP,F,Ge,Te.width,Te.height);for(let j=0;j<6;j++){re=be[j].mipmaps;for(let fe=0;fe<re.length;fe++){const ie=re[fe];y.format!==Qn?Fe!==null?G?Y&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,0,0,ie.width,ie.height,Fe,ie.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,Ge,ie.width,ie.height,0,ie.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,0,0,ie.width,ie.height,Fe,ke,ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe,Ge,ie.width,ie.height,0,Fe,ke,ie.data)}}}else{if(re=y.mipmaps,G&&ye){re.length>0&&F++;const j=qe(be[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,F,Ge,j.width,j.height)}for(let j=0;j<6;j++)if(De){G?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,be[j].width,be[j].height,Fe,ke,be[j].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ge,be[j].width,be[j].height,0,Fe,ke,be[j].data);for(let fe=0;fe<re.length;fe++){const ve=re[fe].image[j].image;G?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,0,0,ve.width,ve.height,Fe,ke,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,Ge,ve.width,ve.height,0,Fe,ke,ve.data)}}else{G?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Fe,ke,be[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ge,Fe,ke,be[j]);for(let fe=0;fe<re.length;fe++){const ie=re[fe];G?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,0,0,Fe,ke,ie.image[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,fe+1,Ge,Fe,ke,ie.image[j])}}}d(y)&&v(t.TEXTURE_CUBE_MAP),xe.__version=le.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function he(D,y,H,K,le,xe){const we=s.convert(H.format,H.colorSpace),de=s.convert(H.type),pe=S(H.internalFormat,we,de,H.normalized,H.colorSpace),Ee=i.get(y),De=i.get(H);if(De.__renderTarget=y,!Ee.__hasExternalTextures){const be=Math.max(1,y.width>>xe),Te=Math.max(1,y.height>>xe);le===t.TEXTURE_3D||le===t.TEXTURE_2D_ARRAY?n.texImage3D(le,xe,pe,be,Te,y.depth,0,we,de,null):n.texImage2D(le,xe,pe,be,Te,0,we,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,D),et(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,le,De.__webglTexture,0,Ke(y)):(le===t.TEXTURE_2D||le>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,le,De.__webglTexture,xe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(D,y,H){if(t.bindRenderbuffer(t.RENDERBUFFER,D),y.depthBuffer){const K=y.depthTexture,le=K&&K.isDepthTexture?K.type:null,xe=T(y.stencilBuffer,le),we=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;et(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ke(y),xe,y.width,y.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ke(y),xe,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,xe,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,we,t.RENDERBUFFER,D)}else{const K=y.textures;for(let le=0;le<K.length;le++){const xe=K[le],we=s.convert(xe.format,xe.colorSpace),de=s.convert(xe.type),pe=S(xe.internalFormat,we,de,xe.normalized,xe.colorSpace);et(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ke(y),pe,y.width,y.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ke(y),pe,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,pe,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Se(D,y,H){const K=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,D),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const le=i.get(y.depthTexture);if(le.__renderTarget=y,(!le.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),K){if(le.__webglInit===void 0&&(le.__webglInit=!0,y.depthTexture.addEventListener("dispose",P)),le.__webglTexture===void 0){le.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,le.__webglTexture),se(t.TEXTURE_CUBE_MAP,y.depthTexture);const Ee=s.convert(y.depthTexture.format),De=s.convert(y.depthTexture.type);let be;y.depthTexture.format===Oi?be=t.DEPTH_COMPONENT24:y.depthTexture.format===Fr&&(be=t.DEPTH24_STENCIL8);for(let Te=0;Te<6;Te++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,be,y.width,y.height,0,Ee,De,null)}}else b(y.depthTexture,0);const xe=le.__webglTexture,we=Ke(y),de=K?t.TEXTURE_CUBE_MAP_POSITIVE_X+H:t.TEXTURE_2D,pe=y.depthTexture.format===Fr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===Oi)et(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,pe,de,xe,0,we):t.framebufferTexture2D(t.FRAMEBUFFER,pe,de,xe,0);else if(y.depthTexture.format===Fr)et(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,pe,de,xe,0,we):t.framebufferTexture2D(t.FRAMEBUFFER,pe,de,xe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Me(D){const y=i.get(D),H=D.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==D.depthTexture){const K=D.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const le=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",le)};K.addEventListener("dispose",le),y.__depthDisposeCallback=le}y.__boundDepthTexture=K}if(D.depthTexture&&!y.__autoAllocateDepthBuffer)if(H)for(let K=0;K<6;K++)Se(y.__webglFramebuffer[K],D,K);else{const K=D.texture.mipmaps;K&&K.length>0?Se(y.__webglFramebuffer[0],D,0):Se(y.__webglFramebuffer,D,0)}else if(H){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=t.createRenderbuffer(),Pe(y.__webglDepthbuffer[K],D,!1);else{const le=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=y.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,xe),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,xe)}}else{const K=D.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),Pe(y.__webglDepthbuffer,D,!1);else{const le=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,xe),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,xe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ae(D,y,H){const K=i.get(D);y!==void 0&&he(K.__webglFramebuffer,D,D.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Me(D)}function Be(D){const y=D.texture,H=i.get(D),K=i.get(y);D.addEventListener("dispose",g);const le=D.textures,xe=D.isWebGLCubeRenderTarget===!0,we=le.length>1;if(we||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=y.version,a.memory.textures++),xe){H.__webglFramebuffer=[];for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[de]=[];for(let pe=0;pe<y.mipmaps.length;pe++)H.__webglFramebuffer[de][pe]=t.createFramebuffer()}else H.__webglFramebuffer[de]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let de=0;de<y.mipmaps.length;de++)H.__webglFramebuffer[de]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(we)for(let de=0,pe=le.length;de<pe;de++){const Ee=i.get(le[de]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=t.createTexture(),a.memory.textures++)}if(D.samples>0&&et(D)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let de=0;de<le.length;de++){const pe=le[de];H.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[de]);const Ee=s.convert(pe.format,pe.colorSpace),De=s.convert(pe.type),be=S(pe.internalFormat,Ee,De,pe.normalized,pe.colorSpace,D.isXRRenderTarget===!0),Te=Ke(D);t.renderbufferStorageMultisample(t.RENDERBUFFER,Te,be,D.width,D.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,H.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),D.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Pe(H.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(xe){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),se(t.TEXTURE_CUBE_MAP,y);for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0)for(let pe=0;pe<y.mipmaps.length;pe++)he(H.__webglFramebuffer[de][pe],D,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe);else he(H.__webglFramebuffer[de],D,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);d(y)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let de=0,pe=le.length;de<pe;de++){const Ee=le[de],De=i.get(Ee);let be=t.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(be=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(be,De.__webglTexture),se(be,Ee),he(H.__webglFramebuffer,D,Ee,t.COLOR_ATTACHMENT0+de,be,0),d(Ee)&&v(be)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(de=D.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,K.__webglTexture),se(de,y),y.mipmaps&&y.mipmaps.length>0)for(let pe=0;pe<y.mipmaps.length;pe++)he(H.__webglFramebuffer[pe],D,y,t.COLOR_ATTACHMENT0,de,pe);else he(H.__webglFramebuffer,D,y,t.COLOR_ATTACHMENT0,de,0);d(y)&&v(de),n.unbindTexture()}D.depthBuffer&&Me(D)}function je(D){const y=D.textures;for(let H=0,K=y.length;H<K;H++){const le=y[H];if(d(le)){const xe=M(D),we=i.get(le).__webglTexture;n.bindTexture(xe,we),v(xe),n.unbindTexture()}}}const Xe=[],Ye=[];function Je(D){if(D.samples>0){if(et(D)===!1){const y=D.textures,H=D.width,K=D.height;let le=t.COLOR_BUFFER_BIT;const xe=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(D),de=y.length>1;if(de)for(let Ee=0;Ee<y.length;Ee++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const pe=D.texture.mipmaps;pe&&pe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ee=0;Ee<y.length;Ee++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(le|=t.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(le|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[Ee]);const De=i.get(y[Ee]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,De,0)}t.blitFramebuffer(0,0,H,K,0,0,H,K,le,t.NEAREST),c===!0&&(Xe.length=0,Ye.length=0,Xe.push(t.COLOR_ATTACHMENT0+Ee),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Xe.push(xe),Ye.push(xe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ye)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Xe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let Ee=0;Ee<y.length;Ee++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.RENDERBUFFER,we.__webglColorRenderbuffer[Ee]);const De=i.get(y[Ee]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ee,t.TEXTURE_2D,De,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const y=D.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function Ke(D){return Math.min(r.maxSamples,D.samples)}function et(D){const y=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function B(D){const y=a.render.frame;h.get(D)!==y&&(h.set(D,y),D.update())}function tt(D,y){const H=D.colorSpace,K=D.format,le=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||H!==ql&&H!==tr&&(at.getTransfer(H)===pt?(K!==Qn||le!==Tn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ut("WebGLTextures: Unsupported texture color space:",H)),y}function qe(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(u.width=D.naturalWidth||D.width,u.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(u.width=D.displayWidth,u.height=D.displayHeight):(u.width=D.width,u.height=D.height),u}this.allocateTextureUnit=Q,this.resetTextureUnits=W,this.getTextureUnits=ne,this.setTextureUnits=V,this.setTexture2D=b,this.setTexture2DArray=w,this.setTexture3D=L,this.setTextureCube=O,this.rebindTextures=Ae,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=he,this.useMultisampledRTT=et,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function M2(t,e){function n(i,r=tr){let s;const a=at.getTransfer(r);if(i===Tn)return t.UNSIGNED_BYTE;if(i===xh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===vh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Zx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Qx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Yx)return t.BYTE;if(i===Kx)return t.SHORT;if(i===Za)return t.UNSIGNED_SHORT;if(i===gh)return t.INT;if(i===xi)return t.UNSIGNED_INT;if(i===ui)return t.FLOAT;if(i===ki)return t.HALF_FLOAT;if(i===Jx)return t.ALPHA;if(i===ev)return t.RGB;if(i===Qn)return t.RGBA;if(i===Oi)return t.DEPTH_COMPONENT;if(i===Fr)return t.DEPTH_STENCIL;if(i===tv)return t.RED;if(i===_h)return t.RED_INTEGER;if(i===Xr)return t.RG;if(i===yh)return t.RG_INTEGER;if(i===Sh)return t.RGBA_INTEGER;if(i===pl||i===ml||i===gl||i===xl)if(a===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===pl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===pl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ml)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kd||i===Od||i===zd||i===Bd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===kd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Od)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Bd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vd||i===Hd||i===Gd||i===jd||i===Wd||i===Wl||i===Xd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Vd||i===Hd)return a===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Gd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===jd)return s.COMPRESSED_R11_EAC;if(i===Wd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Wl)return s.COMPRESSED_RG11_EAC;if(i===Xd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===qd||i===$d||i===Yd||i===Kd||i===Zd||i===Qd||i===Jd||i===ef||i===tf||i===nf||i===rf||i===sf||i===af||i===of)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$d)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ef)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===nf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===af)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===of)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===lf||i===cf||i===uf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===lf)return a===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===cf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===df||i===ff||i===Xl||i===hf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===df)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ff)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const w2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,E2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class b2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new cv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new vi({vertexShader:w2,fragmentShader:E2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new hn(new lo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class T2 extends Kr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,h=null,p=null,f=null,m=null,_=null;const E=typeof XRWebGLBinding<"u",x=new b2,d={},v=n.getContextAttributes();let M=null,S=null;const T=[],N=[],P=new lt;let g=null;const R=new kn;R.viewport=new Tt;const A=new kn;A.viewport=new Tt;const I=[R,A],z=new FM;let W=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let $=T[k];return $===void 0&&($=new au,T[k]=$),$.getTargetRaySpace()},this.getControllerGrip=function(k){let $=T[k];return $===void 0&&($=new au,T[k]=$),$.getGripSpace()},this.getHand=function(k){let $=T[k];return $===void 0&&($=new au,T[k]=$),$.getHandSpace()};function V(k){const $=N.indexOf(k.inputSource);if($===-1)return;const Z=T[$];Z!==void 0&&(Z.update(k.inputSource,k.frame,u||a),Z.dispatchEvent({type:k.type,data:k.inputSource}))}function Q(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",q);for(let k=0;k<T.length;k++){const $=N[k];$!==null&&(N[k]=null,T[k].disconnect($))}W=null,ne=null,x.reset();for(const k in d)delete d[k];e.setRenderTarget(M),m=null,f=null,p=null,r=null,S=null,se.stop(),i.isPresenting=!1,e.setPixelRatio(g),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(k){u=k},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",q),v.xrCompatible!==!0&&await n.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(P),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let Z=null,ge=null,me=null;v.depth&&(me=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=v.stencil?Fr:Oi,ge=v.stencil?Qa:xi);const he={colorFormat:n.RGBA8,depthFormat:me,scaleFactor:s};p=this.getBinding(),f=p.createProjectionLayer(he),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new mi(f.textureWidth,f.textureHeight,{format:Qn,type:Tn,depthTexture:new $s(f.textureWidth,f.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Z={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,Z),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new mi(m.framebufferWidth,m.framebufferHeight,{format:Qn,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),se.setContext(r),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(k){for(let $=0;$<k.removed.length;$++){const Z=k.removed[$],ge=N.indexOf(Z);ge>=0&&(N[ge]=null,T[ge].disconnect(Z))}for(let $=0;$<k.added.length;$++){const Z=k.added[$];let ge=N.indexOf(Z);if(ge===-1){for(let he=0;he<T.length;he++)if(he>=N.length){N.push(Z),ge=he;break}else if(N[he]===null){N[he]=Z,ge=he;break}if(ge===-1)break}const me=T[ge];me&&me.connect(Z)}}const b=new ee,w=new ee;function L(k,$,Z){b.setFromMatrixPosition($.matrixWorld),w.setFromMatrixPosition(Z.matrixWorld);const ge=b.distanceTo(w),me=$.projectionMatrix.elements,he=Z.projectionMatrix.elements,Pe=me[14]/(me[10]-1),Se=me[14]/(me[10]+1),Me=(me[9]+1)/me[5],Ae=(me[9]-1)/me[5],Be=(me[8]-1)/me[0],je=(he[8]+1)/he[0],Xe=Pe*Be,Ye=Pe*je,Je=ge/(-Be+je),Ke=Je*-Be;if($.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ke),k.translateZ(Je),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),me[10]===-1)k.projectionMatrix.copy($.projectionMatrix),k.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const et=Pe+Je,B=Se+Je,tt=Xe-Ke,qe=Ye+(ge-Ke),D=Me*Se/B*et,y=Ae*Se/B*et;k.projectionMatrix.makePerspective(tt,qe,D,y,et,B),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function O(k,$){$===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices($.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let $=k.near,Z=k.far;x.texture!==null&&(x.depthNear>0&&($=x.depthNear),x.depthFar>0&&(Z=x.depthFar)),z.near=A.near=R.near=$,z.far=A.far=R.far=Z,(W!==z.near||ne!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),W=z.near,ne=z.far),z.layers.mask=k.layers.mask|6,R.layers.mask=z.layers.mask&-5,A.layers.mask=z.layers.mask&-3;const ge=k.parent,me=z.cameras;O(z,ge);for(let he=0;he<me.length;he++)O(me[he],ge);me.length===2?L(z,R,A):z.projectionMatrix.copy(R.projectionMatrix),U(k,z,ge)};function U(k,$,Z){Z===null?k.matrix.copy($.matrixWorld):(k.matrix.copy(Z.matrixWorld),k.matrix.invert(),k.matrix.multiply($.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy($.projectionMatrix),k.projectionMatrixInverse.copy($.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=mf*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(k){c=k,f!==null&&(f.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(z)},this.getCameraTexture=function(k){return d[k]};let oe=null;function ce(k,$){if(h=$.getViewerPose(u||a),_=$,h!==null){const Z=h.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let ge=!1;Z.length!==z.cameras.length&&(z.cameras.length=0,ge=!0);for(let Se=0;Se<Z.length;Se++){const Me=Z[Se];let Ae=null;if(m!==null)Ae=m.getViewport(Me);else{const je=p.getViewSubImage(f,Me);Ae=je.viewport,Se===0&&(e.setRenderTargetTextures(S,je.colorTexture,je.depthStencilTexture),e.setRenderTarget(S))}let Be=I[Se];Be===void 0&&(Be=new kn,Be.layers.enable(Se),Be.viewport=new Tt,I[Se]=Be),Be.matrix.fromArray(Me.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Me.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),Se===0&&(z.matrix.copy(Be.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),ge===!0&&z.cameras.push(Be)}const me=r.enabledFeatures;if(me&&me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){p=i.getBinding();const Se=p.getDepthInformation(Z[0]);Se&&Se.isValid&&Se.texture&&x.init(Se,r.renderState)}if(me&&me.includes("camera-access")&&E){e.state.unbindTexture(),p=i.getBinding();for(let Se=0;Se<Z.length;Se++){const Me=Z[Se].camera;if(Me){let Ae=d[Me];Ae||(Ae=new cv,d[Me]=Ae);const Be=p.getCameraImage(Me);Ae.sourceTexture=Be}}}}for(let Z=0;Z<T.length;Z++){const ge=N[Z],me=T[Z];ge!==null&&me!==void 0&&me.update(ge,$,u||a)}oe&&oe(k,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),_=null}const se=new hv;se.setAnimationLoop(ce),this.setAnimationLoop=function(k){oe=k},this.dispose=function(){}}}const C2=new Pt,yv=new $e;yv.set(-1,0,0,0,1,0,0,0,1);function A2(t,e){function n(x,d){x.matrixAutoUpdate===!0&&x.updateMatrix(),d.value.copy(x.matrix)}function i(x,d){d.color.getRGB(x.fogColor.value,uv(t)),d.isFog?(x.fogNear.value=d.near,x.fogFar.value=d.far):d.isFogExp2&&(x.fogDensity.value=d.density)}function r(x,d,v,M,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(x,d):d.isMeshLambertMaterial?(s(x,d),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(x,d),p(x,d)):d.isMeshPhongMaterial?(s(x,d),h(x,d),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(x,d),f(x,d),d.isMeshPhysicalMaterial&&m(x,d,S)):d.isMeshMatcapMaterial?(s(x,d),_(x,d)):d.isMeshDepthMaterial?s(x,d):d.isMeshDistanceMaterial?(s(x,d),E(x,d)):d.isMeshNormalMaterial?s(x,d):d.isLineBasicMaterial?(a(x,d),d.isLineDashedMaterial&&o(x,d)):d.isPointsMaterial?c(x,d,v,M):d.isSpriteMaterial?u(x,d):d.isShadowMaterial?(x.color.value.copy(d.color),x.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(x,d){x.opacity.value=d.opacity,d.color&&x.diffuse.value.copy(d.color),d.emissive&&x.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.bumpMap&&(x.bumpMap.value=d.bumpMap,n(d.bumpMap,x.bumpMapTransform),x.bumpScale.value=d.bumpScale,d.side===_n&&(x.bumpScale.value*=-1)),d.normalMap&&(x.normalMap.value=d.normalMap,n(d.normalMap,x.normalMapTransform),x.normalScale.value.copy(d.normalScale),d.side===_n&&x.normalScale.value.negate()),d.displacementMap&&(x.displacementMap.value=d.displacementMap,n(d.displacementMap,x.displacementMapTransform),x.displacementScale.value=d.displacementScale,x.displacementBias.value=d.displacementBias),d.emissiveMap&&(x.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,x.emissiveMapTransform)),d.specularMap&&(x.specularMap.value=d.specularMap,n(d.specularMap,x.specularMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest);const v=e.get(d),M=v.envMap,S=v.envMapRotation;M&&(x.envMap.value=M,x.envMapRotation.value.setFromMatrix4(C2.makeRotationFromEuler(S)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(yv),x.reflectivity.value=d.reflectivity,x.ior.value=d.ior,x.refractionRatio.value=d.refractionRatio),d.lightMap&&(x.lightMap.value=d.lightMap,x.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,x.lightMapTransform)),d.aoMap&&(x.aoMap.value=d.aoMap,x.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,x.aoMapTransform))}function a(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform))}function o(x,d){x.dashSize.value=d.dashSize,x.totalSize.value=d.dashSize+d.gapSize,x.scale.value=d.scale}function c(x,d,v,M){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.size.value=d.size*v,x.scale.value=M*.5,d.map&&(x.map.value=d.map,n(d.map,x.uvTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function u(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.rotation.value=d.rotation,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function h(x,d){x.specular.value.copy(d.specular),x.shininess.value=Math.max(d.shininess,1e-4)}function p(x,d){d.gradientMap&&(x.gradientMap.value=d.gradientMap)}function f(x,d){x.metalness.value=d.metalness,d.metalnessMap&&(x.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,x.metalnessMapTransform)),x.roughness.value=d.roughness,d.roughnessMap&&(x.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,x.roughnessMapTransform)),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)}function m(x,d,v){x.ior.value=d.ior,d.sheen>0&&(x.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),x.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(x.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,x.sheenColorMapTransform)),d.sheenRoughnessMap&&(x.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,x.sheenRoughnessMapTransform))),d.clearcoat>0&&(x.clearcoat.value=d.clearcoat,x.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(x.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,x.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(x.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===_n&&x.clearcoatNormalScale.value.negate())),d.dispersion>0&&(x.dispersion.value=d.dispersion),d.iridescence>0&&(x.iridescence.value=d.iridescence,x.iridescenceIOR.value=d.iridescenceIOR,x.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(x.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,x.iridescenceMapTransform)),d.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),d.transmission>0&&(x.transmission.value=d.transmission,x.transmissionSamplerMap.value=v.texture,x.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(x.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,x.transmissionMapTransform)),x.thickness.value=d.thickness,d.thicknessMap&&(x.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=d.attenuationDistance,x.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(x.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(x.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=d.specularIntensity,x.specularColor.value.copy(d.specularColor),d.specularColorMap&&(x.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,x.specularColorMapTransform)),d.specularIntensityMap&&(x.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,x.specularIntensityMapTransform))}function _(x,d){d.matcap&&(x.matcap.value=d.matcap)}function E(x,d){const v=e.get(d).light;x.referencePosition.value.setFromMatrixPosition(v.matrixWorld),x.nearDistance.value=v.shadow.camera.near,x.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function R2(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,T){const N=T.program;i.uniformBlockBinding(S,N)}function u(S,T){let N=r[S.id];N===void 0&&(x(S),N=h(S),r[S.id]=N,S.addEventListener("dispose",v));const P=T.program;i.updateUBOMapping(S,P);const g=e.render.frame;s[S.id]!==g&&(f(S),s[S.id]=g)}function h(S){const T=p();S.__bindingPointIndex=T;const N=t.createBuffer(),P=S.__size,g=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,N),t.bufferData(t.UNIFORM_BUFFER,P,g),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,N),N}function p(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const T=r[S.id],N=S.uniforms,P=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let g=0,R=N.length;g<R;g++){const A=N[g];if(Array.isArray(A))for(let I=0,z=A.length;I<z;I++)m(A[I],g,I,P);else m(A,g,0,P)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(S,T,N,P){if(E(S,T,N,P)===!0){const g=S.__offset,R=S.value;if(Array.isArray(R)){let A=0;for(let I=0;I<R.length;I++){const z=R[I],W=d(z);_(z,S.__data,A),typeof z!="number"&&typeof z!="boolean"&&!z.isMatrix3&&!ArrayBuffer.isView(z)&&(A+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(R,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,g,S.__data)}}function _(S,T,N){typeof S=="number"||typeof S=="boolean"?T[0]=S:S.isMatrix3?(T[0]=S.elements[0],T[1]=S.elements[1],T[2]=S.elements[2],T[3]=0,T[4]=S.elements[3],T[5]=S.elements[4],T[6]=S.elements[5],T[7]=0,T[8]=S.elements[6],T[9]=S.elements[7],T[10]=S.elements[8],T[11]=0):ArrayBuffer.isView(S)?T.set(new S.constructor(S.buffer,S.byteOffset,T.length)):S.toArray(T,N)}function E(S,T,N,P){const g=S.value,R=T+"_"+N;if(P[R]===void 0)return typeof g=="number"||typeof g=="boolean"?P[R]=g:ArrayBuffer.isView(g)?P[R]=g.slice():P[R]=g.clone(),!0;{const A=P[R];if(typeof g=="number"||typeof g=="boolean"){if(A!==g)return P[R]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(A.equals(g)===!1)return A.copy(g),!0}}return!1}function x(S){const T=S.uniforms;let N=0;const P=16;for(let R=0,A=T.length;R<A;R++){const I=Array.isArray(T[R])?T[R]:[T[R]];for(let z=0,W=I.length;z<W;z++){const ne=I[z],V=Array.isArray(ne.value)?ne.value:[ne.value];for(let Q=0,q=V.length;Q<q;Q++){const b=V[Q],w=d(b),L=N%P,O=L%w.boundary,U=L+O;N+=O,U!==0&&P-U<w.storage&&(N+=P-U),ne.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),ne.__offset=N,N+=w.storage}}}const g=N%P;return g>0&&(N+=P-g),S.__size=N,S.__cache={},this}function d(S){const T={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(T.boundary=4,T.storage=4):S.isVector2?(T.boundary=8,T.storage=8):S.isVector3||S.isColor?(T.boundary=16,T.storage=12):S.isVector4?(T.boundary=16,T.storage=16):S.isMatrix3?(T.boundary=48,T.storage=48):S.isMatrix4?(T.boundary=64,T.storage=64):S.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(T.boundary=16,T.storage=S.byteLength):We("WebGLRenderer: Unsupported uniform value type.",S),T}function v(S){const T=S.target;T.removeEventListener("dispose",v);const N=a.indexOf(T.__bindingPointIndex);a.splice(N,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function M(){for(const S in r)t.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:c,update:u,dispose:M}}const N2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let si=null;function P2(){return si===null&&(si=new yM(N2,16,16,Xr,ki),si.name="DFG_LUT",si.minFilter=tn,si.magFilter=tn,si.wrapS=Ri,si.wrapT=Ri,si.generateMipmaps=!1,si.needsUpdate=!0),si}class L2{constructor(e={}){const{canvas:n=K1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:m=Tn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const E=m,x=new Set([Sh,yh,_h]),d=new Set([Tn,xi,Za,Qa,xh,vh]),v=new Uint32Array(4),M=new Int32Array(4),S=new ee;let T=null,N=null;const P=[],g=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let I=!1,z=null,W=null,ne=null,V=null;this._outputColorSpace=In;let Q=0,q=0,b=null,w=-1,L=null;const O=new Tt,U=new Tt;let oe=null;const ce=new dt(0);let se=0,k=n.width,$=n.height,Z=1,ge=null,me=null;const he=new Tt(0,0,k,$),Pe=new Tt(0,0,k,$);let Se=!1;const Me=new Ch;let Ae=!1,Be=!1;const je=new Pt,Xe=new ee,Ye=new Tt,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function et(){return b===null?Z:1}let B=i;function tt(C,X){return n.getContext(C,X)}try{const C={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${mh}`),n.addEventListener("webglcontextlost",ve,!1),n.addEventListener("webglcontextrestored",Oe,!1),n.addEventListener("webglcontextcreationerror",Ze,!1),B===null){const X="webgl2";if(B=tt(X,C),B===null)throw tt(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw ut("WebGLRenderer: "+C.message),C}let qe,D,y,H,K,le,xe,we,de,pe,Ee,De,be,Te,Fe,ke,Ge,G,ye,Y,F,re,j;function fe(){qe=new Pb(B),qe.init(),F=new M2(B,qe),D=new wb(B,qe,e,F),y=new y2(B,qe),D.reversedDepthBuffer&&f&&y.buffers.depth.setReversed(!0),W=B.createFramebuffer(),ne=B.createFramebuffer(),V=B.createFramebuffer(),H=new Ib(B),K=new a2,le=new S2(B,qe,y,K,D,F,H),xe=new Nb(A),we=new OM(B),re=new Sb(B,we),de=new Lb(B,we,H,re),pe=new Fb(B,de,we,re,H),G=new Ub(B,D,le),Fe=new Eb(K),Ee=new s2(A,xe,qe,D,re,Fe),De=new A2(A,K),be=new l2,Te=new p2(qe),Ge=new yb(A,xe,y,pe,_,c),ke=new _2(A,pe,D),j=new R2(B,H,D,y),ye=new Mb(B,qe,H),Y=new Db(B,qe,H),H.programs=Ee.programs,A.capabilities=D,A.extensions=qe,A.properties=K,A.renderLists=be,A.shadowMap=ke,A.state=y,A.info=H}fe(),E!==Tn&&(R=new Ob(E,n.width,n.height,o,r,s));const ie=new T2(A,B);this.xr=ie,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=qe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=qe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(C){C!==void 0&&(Z=C,this.setSize(k,$,!1))},this.getSize=function(C){return C.set(k,$)},this.setSize=function(C,X,ae=!0){if(ie.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}k=C,$=X,n.width=Math.floor(C*Z),n.height=Math.floor(X*Z),ae===!0&&(n.style.width=C+"px",n.style.height=X+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(k*Z,$*Z).floor()},this.setDrawingBufferSize=function(C,X,ae){k=C,$=X,Z=ae,n.width=Math.floor(C*ae),n.height=Math.floor(X*ae),this.setViewport(0,0,C,X)},this.setEffects=function(C){if(E===Tn){ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let X=0;X<C.length;X++)if(C[X].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(O)},this.getViewport=function(C){return C.copy(he)},this.setViewport=function(C,X,ae,J){C.isVector4?he.set(C.x,C.y,C.z,C.w):he.set(C,X,ae,J),y.viewport(O.copy(he).multiplyScalar(Z).round())},this.getScissor=function(C){return C.copy(Pe)},this.setScissor=function(C,X,ae,J){C.isVector4?Pe.set(C.x,C.y,C.z,C.w):Pe.set(C,X,ae,J),y.scissor(U.copy(Pe).multiplyScalar(Z).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(C){y.setScissorTest(Se=C)},this.setOpaqueSort=function(C){ge=C},this.setTransparentSort=function(C){me=C},this.getClearColor=function(C){return C.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(C=!0,X=!0,ae=!0){let J=0;if(C){let te=!1;if(b!==null){const Ne=b.texture.format;te=x.has(Ne)}if(te){const Ne=b.texture.type,Ie=d.has(Ne),Re=Ge.getClearColor(),ze=Ge.getClearAlpha(),Ve=Re.r,Qe=Re.g,it=Re.b;Ie?(v[0]=Ve,v[1]=Qe,v[2]=it,v[3]=ze,B.clearBufferuiv(B.COLOR,0,v)):(M[0]=Ve,M[1]=Qe,M[2]=it,M[3]=ze,B.clearBufferiv(B.COLOR,0,M))}else J|=B.COLOR_BUFFER_BIT}X&&(J|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(J|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&B.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),z=C},this.dispose=function(){n.removeEventListener("webglcontextlost",ve,!1),n.removeEventListener("webglcontextrestored",Oe,!1),n.removeEventListener("webglcontextcreationerror",Ze,!1),Ge.dispose(),be.dispose(),Te.dispose(),K.dispose(),xe.dispose(),pe.dispose(),re.dispose(),j.dispose(),Ee.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Fh),ie.removeEventListener("sessionend",kh),Sr.stop()};function ve(C){C.preventDefault(),ym("WebGLRenderer: Context Lost."),I=!0}function Oe(){ym("WebGLRenderer: Context Restored."),I=!1;const C=H.autoReset,X=ke.enabled,ae=ke.autoUpdate,J=ke.needsUpdate,te=ke.type;fe(),H.autoReset=C,ke.enabled=X,ke.autoUpdate=ae,ke.needsUpdate=J,ke.type=te}function Ze(C){ut("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ht(C){const X=C.target;X.removeEventListener("dispose",ht),yn(X)}function yn(C){St(C),K.remove(C)}function St(C){const X=K.get(C).programs;X!==void 0&&(X.forEach(function(ae){Ee.releaseProgram(ae)}),C.isShaderMaterial&&Ee.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,ae,J,te,Ne){X===null&&(X=Je);const Ie=te.isMesh&&te.matrixWorld.determinantAffine()<0,Re=wv(C,X,ae,J,te);y.setMaterial(J,Ie);let ze=ae.index,Ve=1;if(J.wireframe===!0){if(ze=de.getWireframeAttribute(ae),ze===void 0)return;Ve=2}const Qe=ae.drawRange,it=ae.attributes.position;let He=Qe.start*Ve,gt=(Qe.start+Qe.count)*Ve;Ne!==null&&(He=Math.max(He,Ne.start*Ve),gt=Math.min(gt,(Ne.start+Ne.count)*Ve)),ze!==null?(He=Math.max(He,0),gt=Math.min(gt,ze.count)):it!=null&&(He=Math.max(He,0),gt=Math.min(gt,it.count));const Lt=gt-He;if(Lt<0||Lt===1/0)return;re.setup(te,J,Re,ae,ze);let Rt,xt=ye;if(ze!==null&&(Rt=we.get(ze),xt=Y,xt.setIndex(Rt)),te.isMesh)J.wireframe===!0?(y.setLineWidth(J.wireframeLinewidth*et()),xt.setMode(B.LINES)):xt.setMode(B.TRIANGLES);else if(te.isLine){let Yt=J.linewidth;Yt===void 0&&(Yt=1),y.setLineWidth(Yt*et()),te.isLineSegments?xt.setMode(B.LINES):te.isLineLoop?xt.setMode(B.LINE_LOOP):xt.setMode(B.LINE_STRIP)}else te.isPoints?xt.setMode(B.POINTS):te.isSprite&&xt.setMode(B.TRIANGLES);if(te.isBatchedMesh)if(qe.get("WEBGL_multi_draw"))xt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const Yt=te._multiDrawStarts,Le=te._multiDrawCounts,Sn=te._multiDrawCount,ct=ze?we.get(ze).bytesPerElement:1,Ln=K.get(J).currentProgram.getUniforms();for(let ni=0;ni<Sn;ni++)Ln.setValue(B,"_gl_DrawID",ni),xt.render(Yt[ni]/ct,Le[ni])}else if(te.isInstancedMesh)xt.renderInstances(He,Lt,te.count);else if(ae.isInstancedBufferGeometry){const Yt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Le=Math.min(ae.instanceCount,Yt);xt.renderInstances(He,Lt,Le)}else xt.render(He,Lt)};function jt(C,X,ae){C.transparent===!0&&C.side===ci&&C.forceSinglePass===!1?(C.side=_n,C.needsUpdate=!0,uo(C,X,ae),C.side=gr,C.needsUpdate=!0,uo(C,X,ae),C.side=ci):uo(C,X,ae)}this.compile=function(C,X,ae=null){ae===null&&(ae=C),N=Te.get(ae),N.init(X),g.push(N),ae.traverseVisible(function(te){te.isLight&&te.layers.test(X.layers)&&(N.pushLight(te),te.castShadow&&N.pushShadow(te))}),C!==ae&&C.traverseVisible(function(te){te.isLight&&te.layers.test(X.layers)&&(N.pushLight(te),te.castShadow&&N.pushShadow(te))}),N.setupLights();const J=new Set;return C.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Ne=te.material;if(Ne)if(Array.isArray(Ne))for(let Ie=0;Ie<Ne.length;Ie++){const Re=Ne[Ie];jt(Re,ae,te),J.add(Re)}else jt(Ne,ae,te),J.add(Ne)}),N=g.pop(),J},this.compileAsync=function(C,X,ae=null){const J=this.compile(C,X,ae);return new Promise(te=>{function Ne(){if(J.forEach(function(Ie){K.get(Ie).currentProgram.isReady()&&J.delete(Ie)}),J.size===0){te(C);return}setTimeout(Ne,10)}qe.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Zr=null;function Sv(C){Zr&&Zr(C)}function Fh(){Sr.stop()}function kh(){Sr.start()}const Sr=new hv;Sr.setAnimationLoop(Sv),typeof self<"u"&&Sr.setContext(self),this.setAnimationLoop=function(C){Zr=C,ie.setAnimationLoop(C),C===null?Sr.stop():Sr.start()},ie.addEventListener("sessionstart",Fh),ie.addEventListener("sessionend",kh),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;z!==null&&z.renderStart(C,X);const ae=ie.enabled===!0&&ie.isPresenting===!0,J=R!==null&&(b===null||ae)&&R.begin(A,b);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(X),X=ie.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,X,b),N=Te.get(C,g.length),N.init(X),N.state.textureUnits=le.getTextureUnits(),g.push(N),je.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Me.setFromProjectionMatrix(je,di,X.reversedDepth),Be=this.localClippingEnabled,Ae=Fe.init(this.clippingPlanes,Be),T=be.get(C,P.length),T.init(),P.push(T),ie.enabled===!0&&ie.isPresenting===!0){const Ie=A.xr.getDepthSensingMesh();Ie!==null&&_c(Ie,X,-1/0,A.sortObjects)}_c(C,X,0,A.sortObjects),T.finish(),A.sortObjects===!0&&T.sort(ge,me,X.reversedDepth),Ke=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Ke&&Ge.addToRenderList(T,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ae===!0&&Fe.beginShadows();const te=N.state.shadowsArray;if(ke.render(te,C,X),Ae===!0&&Fe.endShadows(),(J&&R.hasRenderPass())===!1){const Ie=T.opaque,Re=T.transmissive;if(N.setupLights(),X.isArrayCamera){const ze=X.cameras;if(Re.length>0)for(let Ve=0,Qe=ze.length;Ve<Qe;Ve++){const it=ze[Ve];zh(Ie,Re,C,it)}Ke&&Ge.render(C);for(let Ve=0,Qe=ze.length;Ve<Qe;Ve++){const it=ze[Ve];Oh(T,C,it,it.viewport)}}else Re.length>0&&zh(Ie,Re,C,X),Ke&&Ge.render(C),Oh(T,C,X)}b!==null&&q===0&&(le.updateMultisampleRenderTarget(b),le.updateRenderTargetMipmap(b)),J&&R.end(A),C.isScene===!0&&C.onAfterRender(A,C,X),re.resetDefaultState(),w=-1,L=null,g.pop(),g.length>0?(N=g[g.length-1],le.setTextureUnits(N.state.textureUnits),Ae===!0&&Fe.setGlobalState(A.clippingPlanes,N.state.camera)):N=null,P.pop(),P.length>0?T=P[P.length-1]:T=null,z!==null&&z.renderEnd()};function _c(C,X,ae,J){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)ae=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLightProbeGrid)N.pushLightProbeGrid(C);else if(C.isLight)N.pushLight(C),C.castShadow&&N.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Me.intersectsSprite(C)){J&&Ye.setFromMatrixPosition(C.matrixWorld).applyMatrix4(je);const Ie=pe.update(C),Re=C.material;Re.visible&&T.push(C,Ie,Re,ae,Ye.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Me.intersectsObject(C))){const Ie=pe.update(C),Re=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ye.copy(C.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Ye.copy(Ie.boundingSphere.center)),Ye.applyMatrix4(C.matrixWorld).applyMatrix4(je)),Array.isArray(Re)){const ze=Ie.groups;for(let Ve=0,Qe=ze.length;Ve<Qe;Ve++){const it=ze[Ve],He=Re[it.materialIndex];He&&He.visible&&T.push(C,Ie,He,ae,Ye.z,it)}}else Re.visible&&T.push(C,Ie,Re,ae,Ye.z,null)}}const Ne=C.children;for(let Ie=0,Re=Ne.length;Ie<Re;Ie++)_c(Ne[Ie],X,ae,J)}function Oh(C,X,ae,J){const{opaque:te,transmissive:Ne,transparent:Ie}=C;N.setupLightsView(ae),Ae===!0&&Fe.setGlobalState(A.clippingPlanes,ae),J&&y.viewport(O.copy(J)),te.length>0&&co(te,X,ae),Ne.length>0&&co(Ne,X,ae),Ie.length>0&&co(Ie,X,ae),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function zh(C,X,ae,J){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[J.id]===void 0){const He=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[J.id]=new mi(1,1,{generateMipmaps:!0,type:He?ki:Tn,minFilter:Ur,samples:Math.max(4,D.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace})}const Ne=N.state.transmissionRenderTarget[J.id],Ie=J.viewport||O;Ne.setSize(Ie.z*A.transmissionResolutionScale,Ie.w*A.transmissionResolutionScale);const Re=A.getRenderTarget(),ze=A.getActiveCubeFace(),Ve=A.getActiveMipmapLevel();A.setRenderTarget(Ne),A.getClearColor(ce),se=A.getClearAlpha(),se<1&&A.setClearColor(16777215,.5),A.clear(),Ke&&Ge.render(ae);const Qe=A.toneMapping;A.toneMapping=pi;const it=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),N.setupLightsView(J),Ae===!0&&Fe.setGlobalState(A.clippingPlanes,J),co(C,ae,J),le.updateMultisampleRenderTarget(Ne),le.updateRenderTargetMipmap(Ne),qe.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let gt=0,Lt=X.length;gt<Lt;gt++){const Rt=X[gt],{object:xt,geometry:Yt,material:Le,group:Sn}=Rt;if(Le.side===ci&&xt.layers.test(J.layers)){const ct=Le.side;Le.side=_n,Le.needsUpdate=!0,Bh(xt,ae,J,Yt,Le,Sn),Le.side=ct,Le.needsUpdate=!0,He=!0}}He===!0&&(le.updateMultisampleRenderTarget(Ne),le.updateRenderTargetMipmap(Ne))}A.setRenderTarget(Re,ze,Ve),A.setClearColor(ce,se),it!==void 0&&(J.viewport=it),A.toneMapping=Qe}function co(C,X,ae){const J=X.isScene===!0?X.overrideMaterial:null;for(let te=0,Ne=C.length;te<Ne;te++){const Ie=C[te],{object:Re,geometry:ze,group:Ve}=Ie;let Qe=Ie.material;Qe.allowOverride===!0&&J!==null&&(Qe=J),Re.layers.test(ae.layers)&&Bh(Re,X,ae,ze,Qe,Ve)}}function Bh(C,X,ae,J,te,Ne){C.onBeforeRender(A,X,ae,J,te,Ne),C.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),te.onBeforeRender(A,X,ae,J,C,Ne),te.transparent===!0&&te.side===ci&&te.forceSinglePass===!1?(te.side=_n,te.needsUpdate=!0,A.renderBufferDirect(ae,X,J,te,C,Ne),te.side=gr,te.needsUpdate=!0,A.renderBufferDirect(ae,X,J,te,C,Ne),te.side=ci):A.renderBufferDirect(ae,X,J,te,C,Ne),C.onAfterRender(A,X,ae,J,te,Ne)}function uo(C,X,ae){X.isScene!==!0&&(X=Je);const J=K.get(C),te=N.state.lights,Ne=N.state.shadowsArray,Ie=te.state.version,Re=Ee.getParameters(C,te.state,Ne,X,ae,N.state.lightProbeGridArray),ze=Ee.getProgramCacheKey(Re);let Ve=J.programs;J.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?X.environment:null,J.fog=X.fog;const Qe=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;J.envMap=xe.get(C.envMap||J.environment,Qe),J.envMapRotation=J.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,Ve===void 0&&(C.addEventListener("dispose",ht),Ve=new Map,J.programs=Ve);let it=Ve.get(ze);if(it!==void 0){if(J.currentProgram===it&&J.lightsStateVersion===Ie)return Hh(C,Re),it}else Re.uniforms=Ee.getUniforms(C),z!==null&&C.isNodeMaterial&&z.build(C,ae,Re),C.onBeforeCompile(Re,A),it=Ee.acquireProgram(Re,ze),Ve.set(ze,it),J.uniforms=Re.uniforms;const He=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(He.clippingPlanes=Fe.uniform),Hh(C,Re),J.needsLights=bv(C),J.lightsStateVersion=Ie,J.needsLights&&(He.ambientLightColor.value=te.state.ambient,He.lightProbe.value=te.state.probe,He.directionalLights.value=te.state.directional,He.directionalLightShadows.value=te.state.directionalShadow,He.spotLights.value=te.state.spot,He.spotLightShadows.value=te.state.spotShadow,He.rectAreaLights.value=te.state.rectArea,He.ltc_1.value=te.state.rectAreaLTC1,He.ltc_2.value=te.state.rectAreaLTC2,He.pointLights.value=te.state.point,He.pointLightShadows.value=te.state.pointShadow,He.hemisphereLights.value=te.state.hemi,He.directionalShadowMatrix.value=te.state.directionalShadowMatrix,He.spotLightMatrix.value=te.state.spotLightMatrix,He.spotLightMap.value=te.state.spotLightMap,He.pointShadowMatrix.value=te.state.pointShadowMatrix),J.lightProbeGrid=N.state.lightProbeGridArray.length>0,J.currentProgram=it,J.uniformsList=null,it}function Vh(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=vl.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function Hh(C,X){const ae=K.get(C);ae.outputColorSpace=X.outputColorSpace,ae.batching=X.batching,ae.batchingColor=X.batchingColor,ae.instancing=X.instancing,ae.instancingColor=X.instancingColor,ae.instancingMorph=X.instancingMorph,ae.skinning=X.skinning,ae.morphTargets=X.morphTargets,ae.morphNormals=X.morphNormals,ae.morphColors=X.morphColors,ae.morphTargetsCount=X.morphTargetsCount,ae.numClippingPlanes=X.numClippingPlanes,ae.numIntersection=X.numClipIntersection,ae.vertexAlphas=X.vertexAlphas,ae.vertexTangents=X.vertexTangents,ae.toneMapping=X.toneMapping}function Mv(C,X){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;S.setFromMatrixPosition(X.matrixWorld);for(let ae=0,J=C.length;ae<J;ae++){const te=C[ae];if(te.texture!==null&&te.boundingBox.containsPoint(S))return te}return null}function wv(C,X,ae,J,te){X.isScene!==!0&&(X=Je),le.resetTextureUnits();const Ne=X.fog,Ie=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?X.environment:null,Re=b===null?A.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:at.workingColorSpace,ze=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Ve=xe.get(J.envMap||Ie,ze),Qe=J.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,it=!!ae.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),He=!!ae.morphAttributes.position,gt=!!ae.morphAttributes.normal,Lt=!!ae.morphAttributes.color;let Rt=pi;J.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Rt=A.toneMapping);const xt=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Yt=xt!==void 0?xt.length:0,Le=K.get(J),Sn=N.state.lights;if(Ae===!0&&(Be===!0||C!==L)){const _t=C===L&&J.id===w;Fe.setState(J,C,_t)}let ct=!1;J.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Sn.state.version||Le.outputColorSpace!==Re||te.isBatchedMesh&&Le.batching===!1||!te.isBatchedMesh&&Le.batching===!0||te.isBatchedMesh&&Le.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&Le.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&Le.instancing===!1||!te.isInstancedMesh&&Le.instancing===!0||te.isSkinnedMesh&&Le.skinning===!1||!te.isSkinnedMesh&&Le.skinning===!0||te.isInstancedMesh&&Le.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Le.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Le.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Le.instancingMorph===!1&&te.morphTexture!==null||Le.envMap!==Ve||J.fog===!0&&Le.fog!==Ne||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==Fe.numPlanes||Le.numIntersection!==Fe.numIntersection)||Le.vertexAlphas!==Qe||Le.vertexTangents!==it||Le.morphTargets!==He||Le.morphNormals!==gt||Le.morphColors!==Lt||Le.toneMapping!==Rt||Le.morphTargetsCount!==Yt||!!Le.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(ct=!0):(ct=!0,Le.__version=J.version);let Ln=Le.currentProgram;ct===!0&&(Ln=uo(J,X,te),z&&J.isNodeMaterial&&z.onUpdateProgram(J,Ln,Le));let ni=!1,Bi=!1,Qr=!1;const vt=Ln.getUniforms(),Dt=Le.uniforms;if(y.useProgram(Ln.program)&&(ni=!0,Bi=!0,Qr=!0),J.id!==w&&(w=J.id,Bi=!0),Le.needsLights){const _t=Mv(N.state.lightProbeGridArray,te);Le.lightProbeGrid!==_t&&(Le.lightProbeGrid=_t,Bi=!0)}if(ni||L!==C){y.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),vt.setValue(B,"projectionMatrix",C.projectionMatrix),vt.setValue(B,"viewMatrix",C.matrixWorldInverse);const Hi=vt.map.cameraPosition;Hi!==void 0&&Hi.setValue(B,Xe.setFromMatrixPosition(C.matrixWorld)),D.logarithmicDepthBuffer&&vt.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&vt.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),L!==C&&(L=C,Bi=!0,Qr=!0)}if(Le.needsLights&&(Sn.state.directionalShadowMap.length>0&&vt.setValue(B,"directionalShadowMap",Sn.state.directionalShadowMap,le),Sn.state.spotShadowMap.length>0&&vt.setValue(B,"spotShadowMap",Sn.state.spotShadowMap,le),Sn.state.pointShadowMap.length>0&&vt.setValue(B,"pointShadowMap",Sn.state.pointShadowMap,le)),te.isSkinnedMesh){vt.setOptional(B,te,"bindMatrix"),vt.setOptional(B,te,"bindMatrixInverse");const _t=te.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),vt.setValue(B,"boneTexture",_t.boneTexture,le))}te.isBatchedMesh&&(vt.setOptional(B,te,"batchingTexture"),vt.setValue(B,"batchingTexture",te._matricesTexture,le),vt.setOptional(B,te,"batchingIdTexture"),vt.setValue(B,"batchingIdTexture",te._indirectTexture,le),vt.setOptional(B,te,"batchingColorTexture"),te._colorsTexture!==null&&vt.setValue(B,"batchingColorTexture",te._colorsTexture,le));const Vi=ae.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&G.update(te,ae,Ln),(Bi||Le.receiveShadow!==te.receiveShadow)&&(Le.receiveShadow=te.receiveShadow,vt.setValue(B,"receiveShadow",te.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&X.environment!==null&&(Dt.envMapIntensity.value=X.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=P2()),Bi){if(vt.setValue(B,"toneMappingExposure",A.toneMappingExposure),Le.needsLights&&Ev(Dt,Qr),Ne&&J.fog===!0&&De.refreshFogUniforms(Dt,Ne),De.refreshMaterialUniforms(Dt,J,Z,$,N.state.transmissionRenderTarget[C.id]),Le.needsLights&&Le.lightProbeGrid){const _t=Le.lightProbeGrid;Dt.probesSH.value=_t.texture,Dt.probesMin.value.copy(_t.boundingBox.min),Dt.probesMax.value.copy(_t.boundingBox.max),Dt.probesResolution.value.copy(_t.resolution)}vl.upload(B,Vh(Le),Dt,le)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(vl.upload(B,Vh(Le),Dt,le),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&vt.setValue(B,"center",te.center),vt.setValue(B,"modelViewMatrix",te.modelViewMatrix),vt.setValue(B,"normalMatrix",te.normalMatrix),vt.setValue(B,"modelMatrix",te.matrixWorld),J.uniformsGroups!==void 0){const _t=J.uniformsGroups;for(let Hi=0,Jr=_t.length;Hi<Jr;Hi++){const Gh=_t[Hi];j.update(Gh,Ln),j.bind(Gh,Ln)}}return Ln}function Ev(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function bv(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(C,X,ae){const J=K.get(C);J.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),K.get(C.texture).__webglTexture=X,K.get(C.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:ae,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,X){const ae=K.get(C);ae.__webglFramebuffer=X,ae.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,ae=0){b=C,Q=X,q=ae;let J=null,te=!1,Ne=!1;if(C){const Re=K.get(C);if(Re.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(B.FRAMEBUFFER,Re.__webglFramebuffer),O.copy(C.viewport),U.copy(C.scissor),oe=C.scissorTest,y.viewport(O),y.scissor(U),y.setScissorTest(oe),w=-1;return}else if(Re.__webglFramebuffer===void 0)le.setupRenderTarget(C);else if(Re.__hasExternalTextures)le.rebindTextures(C,K.get(C.texture).__webglTexture,K.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Qe=C.depthTexture;if(Re.__boundDepthTexture!==Qe){if(Qe!==null&&K.has(Qe)&&(C.width!==Qe.image.width||C.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(C)}}const ze=C.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ne=!0);const Ve=K.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ve[X])?J=Ve[X][ae]:J=Ve[X],te=!0):C.samples>0&&le.useMultisampledRTT(C)===!1?J=K.get(C).__webglMultisampledFramebuffer:Array.isArray(Ve)?J=Ve[ae]:J=Ve,O.copy(C.viewport),U.copy(C.scissor),oe=C.scissorTest}else O.copy(he).multiplyScalar(Z).floor(),U.copy(Pe).multiplyScalar(Z).floor(),oe=Se;if(ae!==0&&(J=W),y.bindFramebuffer(B.FRAMEBUFFER,J)&&y.drawBuffers(C,J),y.viewport(O),y.scissor(U),y.setScissorTest(oe),te){const Re=K.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,Re.__webglTexture,ae)}else if(Ne){const Re=X;for(let ze=0;ze<C.textures.length;ze++){const Ve=K.get(C.textures[ze]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+ze,Ve.__webglTexture,ae,Re)}}else if(C!==null&&ae!==0){const Re=K.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Re.__webglTexture,ae)}w=-1},this.readRenderTargetPixels=function(C,X,ae,J,te,Ne,Ie,Re=0){if(!(C&&C.isWebGLRenderTarget)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=K.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(ze=ze[Ie]),ze){y.bindFramebuffer(B.FRAMEBUFFER,ze);try{const Ve=C.textures[Re],Qe=Ve.format,it=Ve.type;if(C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Re),!D.textureFormatReadable(Qe)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(it)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-J&&ae>=0&&ae<=C.height-te&&B.readPixels(X,ae,J,te,F.convert(Qe),F.convert(it),Ne)}finally{const Ve=b!==null?K.get(b).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(C,X,ae,J,te,Ne,Ie,Re=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=K.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(ze=ze[Ie]),ze)if(X>=0&&X<=C.width-J&&ae>=0&&ae<=C.height-te){y.bindFramebuffer(B.FRAMEBUFFER,ze);const Ve=C.textures[Re],Qe=Ve.format,it=Ve.type;if(C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Re),!D.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const He=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,He),B.bufferData(B.PIXEL_PACK_BUFFER,Ne.byteLength,B.STREAM_READ),B.readPixels(X,ae,J,te,F.convert(Qe),F.convert(it),0);const gt=b!==null?K.get(b).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,gt);const Lt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Z1(B,Lt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,He),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ne),B.deleteBuffer(He),B.deleteSync(Lt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,X=null,ae=0){const J=Math.pow(2,-ae),te=Math.floor(C.image.width*J),Ne=Math.floor(C.image.height*J),Ie=X!==null?X.x:0,Re=X!==null?X.y:0;le.setTexture2D(C,0),B.copyTexSubImage2D(B.TEXTURE_2D,ae,0,0,Ie,Re,te,Ne),y.unbindTexture()},this.copyTextureToTexture=function(C,X,ae=null,J=null,te=0,Ne=0){let Ie,Re,ze,Ve,Qe,it,He,gt,Lt;const Rt=C.isCompressedTexture?C.mipmaps[Ne]:C.image;if(ae!==null)Ie=ae.max.x-ae.min.x,Re=ae.max.y-ae.min.y,ze=ae.isBox3?ae.max.z-ae.min.z:1,Ve=ae.min.x,Qe=ae.min.y,it=ae.isBox3?ae.min.z:0;else{const Dt=Math.pow(2,-te);Ie=Math.floor(Rt.width*Dt),Re=Math.floor(Rt.height*Dt),C.isDataArrayTexture?ze=Rt.depth:C.isData3DTexture?ze=Math.floor(Rt.depth*Dt):ze=1,Ve=0,Qe=0,it=0}J!==null?(He=J.x,gt=J.y,Lt=J.z):(He=0,gt=0,Lt=0);const xt=F.convert(X.format),Yt=F.convert(X.type);let Le;X.isData3DTexture?(le.setTexture3D(X,0),Le=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(le.setTexture2DArray(X,0),Le=B.TEXTURE_2D_ARRAY):(le.setTexture2D(X,0),Le=B.TEXTURE_2D),y.activeTexture(B.TEXTURE0),y.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),y.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),y.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const Sn=y.getParameter(B.UNPACK_ROW_LENGTH),ct=y.getParameter(B.UNPACK_IMAGE_HEIGHT),Ln=y.getParameter(B.UNPACK_SKIP_PIXELS),ni=y.getParameter(B.UNPACK_SKIP_ROWS),Bi=y.getParameter(B.UNPACK_SKIP_IMAGES);y.pixelStorei(B.UNPACK_ROW_LENGTH,Rt.width),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Rt.height),y.pixelStorei(B.UNPACK_SKIP_PIXELS,Ve),y.pixelStorei(B.UNPACK_SKIP_ROWS,Qe),y.pixelStorei(B.UNPACK_SKIP_IMAGES,it);const Qr=C.isDataArrayTexture||C.isData3DTexture,vt=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){const Dt=K.get(C),Vi=K.get(X),_t=K.get(Dt.__renderTarget),Hi=K.get(Vi.__renderTarget);y.bindFramebuffer(B.READ_FRAMEBUFFER,_t.__webglFramebuffer),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let Jr=0;Jr<ze;Jr++)Qr&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,K.get(C).__webglTexture,te,it+Jr),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,K.get(X).__webglTexture,Ne,Lt+Jr)),B.blitFramebuffer(Ve,Qe,Ie,Re,He,gt,Ie,Re,B.DEPTH_BUFFER_BIT,B.NEAREST);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(te!==0||C.isRenderTargetTexture||K.has(C)){const Dt=K.get(C),Vi=K.get(X);y.bindFramebuffer(B.READ_FRAMEBUFFER,ne),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,V);for(let _t=0;_t<ze;_t++)Qr?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dt.__webglTexture,te,it+_t):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Dt.__webglTexture,te),vt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Vi.__webglTexture,Ne,Lt+_t):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Vi.__webglTexture,Ne),te!==0?B.blitFramebuffer(Ve,Qe,Ie,Re,He,gt,Ie,Re,B.COLOR_BUFFER_BIT,B.NEAREST):vt?B.copyTexSubImage3D(Le,Ne,He,gt,Lt+_t,Ve,Qe,Ie,Re):B.copyTexSubImage2D(Le,Ne,He,gt,Ve,Qe,Ie,Re);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else vt?C.isDataTexture||C.isData3DTexture?B.texSubImage3D(Le,Ne,He,gt,Lt,Ie,Re,ze,xt,Yt,Rt.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(Le,Ne,He,gt,Lt,Ie,Re,ze,xt,Rt.data):B.texSubImage3D(Le,Ne,He,gt,Lt,Ie,Re,ze,xt,Yt,Rt):C.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Ne,He,gt,Ie,Re,xt,Yt,Rt.data):C.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Ne,He,gt,Rt.width,Rt.height,xt,Rt.data):B.texSubImage2D(B.TEXTURE_2D,Ne,He,gt,Ie,Re,xt,Yt,Rt);y.pixelStorei(B.UNPACK_ROW_LENGTH,Sn),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ct),y.pixelStorei(B.UNPACK_SKIP_PIXELS,Ln),y.pixelStorei(B.UNPACK_SKIP_ROWS,ni),y.pixelStorei(B.UNPACK_SKIP_IMAGES,Bi),Ne===0&&X.generateMipmaps&&B.generateMipmap(Le),y.unbindTexture()},this.initRenderTarget=function(C){K.get(C).__webglFramebuffer===void 0&&le.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?le.setTextureCube(C,0):C.isData3DTexture?le.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?le.setTexture2DArray(C,0):le.setTexture2D(C,0),y.unbindTexture()},this.resetState=function(){Q=0,q=0,b=null,y.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),n.unpackColorSpace=at._getUnpackColorSpace()}}const D2=({open:t})=>{const e=ue.useRef(null),n=ue.useRef(null),i=ue.useRef(null),r=ue.useRef(null),s=ue.useRef([]),a=ue.useRef(null),o=ue.useRef(t);return ue.useEffect(()=>{o.current=t},[t]),ue.useEffect(()=>{const c=e.current;if(!c)return;const u=window.innerWidth,h=window.innerHeight,p=new hM;i.current=p;const f=new kn(45,u/h,.1,100);f.position.set(0,0,12),r.current=f;const m=new L2({alpha:!0,antialias:!0});m.setSize(u,h),m.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.shadowMap.enabled=!0,m.shadowMap.type=zx,n.current=m,c.appendChild(m.domElement);const _=new IM(16777215,.45);p.add(_);const E=new Bm(16772566,1.2);E.position.set(5,8,8),E.castShadow=!0,E.shadow.mapSize.width=1024,E.shadow.mapSize.height=1024,E.shadow.camera.near=.1,E.shadow.camera.far=30,E.shadow.camera.left=-10,E.shadow.camera.right=10,E.shadow.camera.top=10,E.shadow.camera.bottom=-10,p.add(E);const x=new Bm(12773887,.35);x.position.set(-4,2,-5),p.add(x);const d=18,v=.35,M=.06,S=14,T=.12,N=d*(v+T),P=N/2-v/2,g=new qr(S,v,M),R=new wu({color:16115411,roughness:.6,metalness:.05}),A=[];for(let oe=0;oe<d;oe++){const ce=new hn(g,R);ce.position.y=P-oe*(v+T),ce.castShadow=!0,ce.receiveShadow=!0,p.add(ce),A.push(ce)}s.current=A;const I=new Ah(.015,.015,N+.5,8),z=new wu({color:16777215,roughness:.8}),W=new hn(I,z);W.position.set(-S/2-.1,0,.06),p.add(W);const ne=new hn(I,z);ne.position.set(S/2+.1,0,.06),p.add(ne);const V=new qr(S+.8,.4,.25),Q=new wu({color:15260864,roughness:.5}),q=new hn(V,Q);q.position.y=P+v/2+.25,q.castShadow=!0,q.receiveShadow=!0,p.add(q);const b=new lo(30,30),w=new Th({color:0,transparent:!0,opacity:0,side:ci,depthWrite:!1}),L=new hn(b,w);L.position.z=-2,p.add(L);const O=()=>{const oe=window.innerWidth,ce=window.innerHeight;f.aspect=oe/ce,f.updateProjectionMatrix(),m.setSize(oe,ce)};window.addEventListener("resize",O);const U=()=>{a.current=requestAnimationFrame(U);const oe=o.current?.55:0,ce=o.current?.35:.85;s.current.forEach((se,k)=>{const $=oe+(k%2===0?.02:-.02);se.rotation.x+=($-se.rotation.x)*.08}),L.material.opacity+=(ce-L.material.opacity)*.05,m.render(p,f)};return U(),()=>{window.removeEventListener("resize",O),a.current&&cancelAnimationFrame(a.current),m.dispose(),c.contains(m.domElement)&&c.removeChild(m.domElement)}},[]),l.jsx("div",{ref:e,className:"absolute inset-0 z-20 pointer-events-none",style:{mixBlendMode:"normal"}})},I2=({src:t})=>{const e=ue.useRef(null),n=ue.useRef(null),i=ue.useRef(null),r=ue.useRef("A"),s=ue.useRef(0),a=ue.useRef(null),[o,c]=ue.useState(!1);return ue.useEffect(()=>{const u=n.current,h=i.current;if(!u||!h)return;let p=0;const f=()=>{p+=1,p===2&&(s.current=u.duration||2,c(!0),u.play().catch(()=>{}),r.current="A")};return u.addEventListener("loadedmetadata",f,{once:!0}),h.addEventListener("loadedmetadata",f,{once:!0}),u.load(),h.load(),()=>{a.current&&cancelAnimationFrame(a.current),u.pause(),h.pause(),u.src="",h.src="",u.load(),h.load()}},[t]),ue.useEffect(()=>{if(!o)return;const u=n.current,h=i.current;if(!u||!h)return;const p=.08,f=s.current,m=()=>{const _=r.current==="A"?u:h,E=r.current==="A"?h:u,x=f-_.currentTime;x<=p&&r.current!=="next"&&(E.currentTime=0,E.play().catch(()=>{})),x<=.02&&(r.current==="A"?(u.style.opacity="0",h.style.opacity="1",r.current="B",u.currentTime=0,u.pause()):(h.style.opacity="0",u.style.opacity="1",r.current="A",h.currentTime=0,h.pause())),a.current=requestAnimationFrame(m)};return a.current=requestAnimationFrame(m),()=>{a.current&&cancelAnimationFrame(a.current)}},[o]),l.jsxs("div",{ref:e,className:"absolute inset-0 w-full h-full pointer-events-none z-20",children:[l.jsx("video",{ref:n,className:"absolute inset-0 w-full h-full object-cover transition-opacity duration-75",src:t,autoPlay:!1,muted:!0,playsInline:!0,preload:"auto",style:{opacity:1}}),l.jsx("video",{ref:i,className:"absolute inset-0 w-full h-full object-cover transition-opacity duration-75",src:t,autoPlay:!1,muted:!0,playsInline:!0,preload:"auto",style:{opacity:0}})]})},Nh=({onBack:t,simple:e=!1})=>{const[n,i]=ue.useState(!0),[r,s]=ue.useState(null),[a,o]=ue.useState(!1),[c,u]=ue.useState(0),h=ue.useRef(null),p=ue.useRef(null),f=ue.useRef(null),m=[{id:"rain",label:"Pluie",icon:sS,src:"https://github.com/Obsidian-Chrome/nexus/releases/download/rain/rain.webm"},{id:"rain_window",label:"Pluie vitre",icon:aS,src:"https://github.com/Obsidian-Chrome/nexus/releases/download/rain-window/rain_window.webm"},{id:"blinds",label:"Store",icon:tS,src:null}];ue.useEffect(()=>{const d=T=>T&&T.target&&f.current&&f.current.contains(T.target),v=T=>{d(T)||(i(!0),h.current&&clearTimeout(h.current),h.current=setTimeout(()=>i(!1),3e3))},M=()=>{i(!0),h.current&&clearTimeout(h.current)},S=()=>{h.current&&clearTimeout(h.current),h.current=setTimeout(()=>i(!1),3e3)};return window.addEventListener("mousemove",v),f.current&&(f.current.addEventListener("mouseenter",M),f.current.addEventListener("mouseleave",S)),i(!0),h.current=setTimeout(()=>i(!1),3e3),()=>{window.removeEventListener("mousemove",v),f.current&&(f.current.removeEventListener("mouseenter",M),f.current.removeEventListener("mouseleave",S)),h.current&&clearTimeout(h.current)}},[]),ue.useEffect(()=>{const d=window.location.hash.substring(1),v=d.indexOf("?");if(v>-1){const M=new URLSearchParams(d.substring(v+1)),S=M.get("overlay"),T=M.get("open");m.some(N=>N.id===S)&&(s(S),S==="blinds"&&o(T==="true"),u(N=>N+1))}},[]),ue.useEffect(()=>{r&&r!=="blinds"&&p.current&&p.current.play().catch(d=>console.error("Erreur lecture overlay:",d))},[r,c]);const _=(d,v=null)=>{const M=window.location.hash.split("?")[0];if(d){const S=d==="blinds"&&v!==null?`&open=${v}`:"";window.location.hash=`${M}?overlay=${d}${S}`}else window.location.hash=M},E=d=>{r===d?(s(null),o(!1),_(null)):(s(d),o(!1),u(v=>v+1),_(d,!1))},x=()=>{const d=!a;o(d),_("blinds",d)};return l.jsxs(l.Fragment,{children:[r&&r!=="blinds"&&l.jsx(I2,{src:m.find(d=>d.id===r).src},c),r==="blinds"&&l.jsx(D2,{open:a}),l.jsxs("div",{ref:f,className:`absolute top-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-4 py-3 rounded-lg border backdrop-blur-md transition-all duration-500 ${n?"opacity-100 translate-y-0":"opacity-0 -translate-y-4 pointer-events-none"}`,style:{borderColor:"rgba(6, 182, 212, 0.3)",background:"rgba(0, 0, 0, 0.75)"},children:[!e&&m.map(d=>{const v=d.icon,M=r===d.id;return l.jsxs("button",{onClick:()=>E(d.id),className:`flex items-center gap-2 px-3 py-2 rounded text-xs font-semibold tracking-wider transition-all duration-200 ${M?"bg-cyan-500/20 text-cyan-400 border border-cyan-500/40":"text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"}`,title:d.label,children:[l.jsx(v,{className:"w-4 h-4"}),l.jsx("span",{className:"hidden sm:inline",children:d.label})]},d.id)}),!e&&r==="blinds"&&l.jsx("button",{onClick:x,className:"ml-2 px-3 py-2 rounded text-xs font-semibold tracking-wider text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-200",children:a?"Fermer":"Ouvrir"}),!e&&l.jsx("div",{className:"w-px h-6 bg-white/10 mx-1"}),l.jsxs("button",{onClick:t,className:"flex items-center gap-1 px-3 py-2 rounded text-xs font-semibold tracking-wider text-red-400 border border-red-500/30 hover:bg-red-500/10 transition-all duration-200",title:"Quitter",children:[l.jsx(pc,{className:"w-4 h-4"}),l.jsx("span",{className:"hidden sm:inline",children:"Quitter"})]})]})]})},U2=({onBack:t})=>{const e=ue.useRef(null),[n,i]=ue.useState(!0),[r,s]=ue.useState(!1),a=ue.useRef(!1);return ue.useEffect(()=>{const o=e.current;if(!o)return;const c=()=>{const h=new Date,p=new Date(h.toLocaleString("en-US",{timeZone:"Europe/Paris"})),f=p.getHours(),m=p.getMinutes(),_=p.getSeconds();let x=f+m/60+_/3600-20;x<0&&(x+=24);const v=x*7.5*60,M=240*60,S=v%M;o.readyState>=2&&(o.currentTime=S,o.playbackRate=.125,o.play().then(()=>{i(!1),setTimeout(()=>s(!0),100)}).catch(T=>{console.log("Erreur lecture vidéo:",T),i(!1),s(!0)}))},u=()=>{a.current||(a.current=!0,c())};return o.addEventListener("canplaythrough",u,{once:!0}),o.readyState>=4&&!a.current&&(a.current=!0,c()),()=>{o.removeEventListener("canplaythrough",u),o&&(o.pause(),o.src="",o.load())}},[]),l.jsxs("div",{className:"fixed inset-0 bg-black z-50",children:[n&&l.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black z-40",children:l.jsxs("div",{className:"flex flex-col items-center",children:[l.jsx("div",{className:"w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mb-4"}),l.jsx("p",{className:"text-cyan-400/80 text-sm tracking-wider",children:"CHARGEMENT..."})]})}),l.jsxs("video",{ref:e,className:`w-full h-full object-cover transition-opacity duration-500 ${r?"opacity-100":"opacity-0"}`,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata",children:[l.jsx("source",{src:"https://github.com/Obsidian-Chrome/nexus/releases/download/1.0.0/nightcity_24h.webm",type:"video/webm"}),"Votre navigateur ne supporte pas la lecture de vidéos."]}),l.jsx(Nh,{onBack:t})]})},F2=({onBack:t})=>{const e=ue.useRef(null),[n,i]=ue.useState(!0),[r,s]=ue.useState(!1),a=()=>{i(!1),setTimeout(()=>s(!0),100)};return ue.useEffect(()=>()=>{const o=e.current;o&&(o.pause(),o.src="",o.load())},[]),l.jsxs("div",{className:"fixed inset-0 bg-black z-50",children:[n&&l.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black z-40",children:l.jsxs("div",{className:"flex flex-col items-center",children:[l.jsx("div",{className:"w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mb-4"}),l.jsx("p",{className:"text-cyan-400/80 text-sm tracking-wider",children:"CHARGEMENT..."})]})}),l.jsxs("video",{ref:e,className:`w-full h-full object-cover transition-opacity duration-500 ${r?"opacity-100":"opacity-0"}`,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata",onCanPlayThrough:a,children:[l.jsx("source",{src:"https://github.com/Obsidian-Chrome/nexus/releases/download/1.1.0/PyonPix.-.Centre.Ville.webm",type:"video/webm"}),"Votre navigateur ne supporte pas la lecture de vidéos."]}),l.jsx(Nh,{onBack:t})]})},k2=({onBack:t})=>{const e=ue.useRef(null),[n,i]=ue.useState(!0),[r,s]=ue.useState(!1),a=ue.useRef(!1);return ue.useEffect(()=>{const o=e.current;if(!o)return;const c=()=>{const h=new Date,p=new Date(h.getTime()+60*60*1e3),f=p.getUTCHours(),m=p.getUTCMinutes(),_=p.getUTCSeconds(),E=f*3600+m*60+_;if(o.readyState>=2&&o.duration){const x=E%o.duration;o.currentTime=x,o.play().then(()=>{i(!1),setTimeout(()=>s(!0),100)}).catch(d=>{console.log("Erreur lecture vidéo:",d),i(!1),s(!0)})}},u=()=>{a.current||(a.current=!0,c())};return o.addEventListener("canplaythrough",u,{once:!0}),o.readyState>=4&&!a.current&&(a.current=!0,c()),()=>{o.removeEventListener("canplaythrough",u),o&&(o.pause(),o.src="",o.load())}},[]),l.jsxs("div",{className:"fixed inset-0 bg-black z-50",children:[n&&l.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black z-40",children:l.jsxs("div",{className:"flex flex-col items-center",children:[l.jsx("div",{className:"w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mb-4"}),l.jsx("p",{className:"text-cyan-400/80 text-sm tracking-wider",children:"CHARGEMENT..."})]})}),l.jsxs("video",{ref:e,className:`w-full h-full object-cover transition-opacity duration-500 ${r?"opacity-100":"opacity-0"}`,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata",children:[l.jsx("source",{src:"https://github.com/Obsidian-Chrome/nexus/releases/download/1.2.0/Cyberpunk.Assets.-.Pubs.webm",type:"video/webm"}),"Votre navigateur ne supporte pas la lecture de vidéos."]}),l.jsx(Nh,{onBack:t,simple:!0})]})},O2=({onBack:t})=>{const e=ue.useRef(null),[n,i]=ue.useState(!0),[r,s]=ue.useState(!1),[a,o]=ue.useState(null),[c,u]=ue.useState(null),[h,p]=ue.useState(0);ue.useEffect(()=>{const m=new Date().getTime();fetch(`/coven/visualizer.json?t=${m}`).then(_=>_.json()).then(_=>u(_)).catch(_=>console.error("Erreur chargement visualizer.json:",_))},[]),ue.useEffect(()=>{if(!c)return;const m=()=>{const E=new Date,x=E.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}),d=E.toTimeString().slice(0,5),M=c.events.find(S=>{if(S.date!==x)return!1;const[T,N]=S.heureDebut.split(":").map(Number),[P,g]=S.heureFin.split(":").map(Number),[R,A]=d.split(":").map(Number),I=T*60+N,z=P*60+g,W=R*60+A;return W>=I&&W<=z})||c.default;o(S=>((S==null?void 0:S.fichier)!==(M==null?void 0:M.fichier)&&(i(!0),s(!1),p(T=>T+1)),M))};m();const _=setInterval(m,6e4);return()=>clearInterval(_)},[c]);const f=()=>{i(!1),setTimeout(()=>s(!0),100)};return ue.useEffect(()=>()=>{const m=e.current;m&&(m.pause(),m.src="",m.load())},[]),a?l.jsxs("div",{className:"fixed inset-0 bg-black z-50",children:[n&&l.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black z-40",children:l.jsxs("div",{className:"flex flex-col items-center",children:[l.jsx("div",{className:"w-16 h-16 border-4 border-red-500/30 border-t-red-500 rounded-full animate-spin mb-4"}),l.jsx("p",{className:"text-red-400/80 text-sm tracking-wider",children:"CHARGEMENT..."})]})}),l.jsxs("div",{className:"relative w-full h-full",children:[l.jsxs("video",{ref:e,className:`w-full h-full object-cover transition-opacity duration-500 ${r?"opacity-100":"opacity-0"}`,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata",onClick:t,onCanPlayThrough:f,children:[l.jsx("source",{src:`/coven/visualizer/${a.fichier}`,type:"video/webm"}),"Votre navigateur ne supporte pas la lecture de vidéos."]},h),r&&a.hexadecimal&&a.hexadecimal!=="#000000"&&l.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-multiply transition-opacity duration-500",style:{backgroundColor:a.hexadecimal,opacity:.3}})]})]}):l.jsx("div",{className:"fixed inset-0 bg-black z-50 flex items-center justify-center",children:l.jsx("p",{className:"text-white",children:"Aucun événement configuré"})})},z2=()=>l.jsx("div",{className:"fixed inset-0 bg-black z-50 overflow-y-auto",children:l.jsxs("div",{className:"min-h-screen relative",children:[l.jsx("div",{className:"border-b border-zinc-800 bg-black/95 backdrop-blur-sm sticky top-0 z-10",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-8 py-6 flex items-center justify-between",children:[l.jsxs("button",{onClick:()=>window.location.hash="",className:"flex items-center space-x-2 text-white/80 hover:text-red-400 transition-all duration-300",children:[l.jsx(Kn,{className:"w-5 h-5"}),l.jsx("span",{className:"font-medium",children:"Retour"})]}),l.jsx("img",{src:"/coven/coven_logo.png",alt:"Coven",className:"h-24 object-contain"}),l.jsx("div",{className:"w-24"})]})}),l.jsx("div",{className:"max-w-6xl mx-auto px-8 py-24",children:l.jsxs("div",{className:"flex flex-col md:flex-row gap-6 justify-center items-stretch",children:[l.jsx("a",{href:"#coven/visualizer",className:"flex-1 max-w-md bg-zinc-900/50 border border-zinc-800 p-8 hover:border-red-500/60 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all duration-300 group",children:l.jsxs("div",{className:"flex flex-col items-center text-center gap-4",children:[l.jsx("div",{className:"w-16 h-16 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center group-hover:bg-red-500/30 transition-all",children:l.jsx(fl,{className:"w-8 h-8 text-red-400"})}),l.jsx("h2",{className:"text-2xl font-bold text-white group-hover:text-red-400 transition-colors",children:"Visualizer"})]})}),l.jsx("a",{href:"#coven/dvd",className:"flex-1 max-w-md bg-zinc-900/50 border border-zinc-800 p-8 hover:border-red-500/60 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all duration-300 group",children:l.jsxs("div",{className:"flex flex-col items-center text-center gap-4",children:[l.jsx("div",{className:"w-16 h-16 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center group-hover:bg-red-500/30 transition-all",children:l.jsx(Cx,{className:"w-8 h-8 text-red-400"})}),l.jsx("h2",{className:"text-2xl font-bold text-white group-hover:text-red-400 transition-colors",children:"DVD Screensaver"})]})}),l.jsx("div",{className:"flex-1 max-w-md bg-zinc-900/50 border border-zinc-800 p-8 opacity-50 cursor-not-allowed",children:l.jsxs("div",{className:"flex flex-col items-center text-center gap-4",children:[l.jsx("div",{className:"w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center",children:l.jsx(_S,{className:"w-8 h-8 text-red-400/50"})}),l.jsx("h2",{className:"text-2xl font-bold text-white/50",children:"Carte"})]})})]})})]})}),B2=()=>{const t=ue.useRef(null),e=ue.useRef(null),n=ue.useRef({x:100,y:100}),i=ue.useRef({x:2,y:2}),r=ue.useRef(null),[s,a]=ue.useState(0);return ue.useEffect(()=>{const o=t.current,c=e.current;if(!o||!c)return;const u=250,h=250,p=()=>{const _=c.clientWidth,E=c.clientHeight;n.current.x+=i.current.x,n.current.y+=i.current.y;let x=!1;(n.current.x+u>=_||n.current.x<=0)&&(i.current.x*=-1,n.current.x=Math.max(0,Math.min(n.current.x,_-u)),x=!0),(n.current.y+h>=E||n.current.y<=0)&&(i.current.y*=-1,n.current.y=Math.max(0,Math.min(n.current.y,E-h)),x=!0),x&&a(Math.random()*360),o.style.transform=`translate(${n.current.x}px, ${n.current.y}px)`,r.current=requestAnimationFrame(p)};n.current={x:Math.random()*(c.clientWidth-u),y:Math.random()*(c.clientHeight-h)};const f=2,m=Math.random()*Math.PI*2;return i.current={x:Math.cos(m)*f,y:Math.sin(m)*f},p(),()=>{r.current&&cancelAnimationFrame(r.current)}},[]),l.jsx("div",{ref:e,className:"fixed inset-0 bg-black z-50 overflow-hidden",children:l.jsx("img",{ref:t,src:"/coven/coven_logo.png",alt:"Coven Logo",className:"absolute w-[250px] h-[250px] object-contain transition-all duration-100",style:{filter:`hue-rotate(${s}deg) saturate(1.5)`,willChange:"transform"}})})},Jo="https://raw.githubusercontent.com/Obsidian-Chrome/nexus/main/public/media/radio/mp3/",f0=[{id:1,freq:"69.9",name:"Funk Radio",slug:"funk-radio",logo:"/media/radio/logos/69.9_Funk_Radio.webp",color:"#2596be",playlistFile:"/media/radio/playlists/69.9_Funk_Radio.json"},{id:2,freq:"87.7",name:"Magenta Station",slug:"magenta-station",logo:"/media/radio/logos/87.7_Magenta_Station.webp",color:"#2596be",playlistFile:"/media/radio/playlists/87.7_Magenta_Station.json"},{id:3,freq:"88.9",name:"Pacific Dreams",slug:"pacific-dreams",logo:"/media/radio/logos/88.9_Pacific_Dreams.webp",color:"#2596be",playlistFile:"/media/radio/playlists/88.9_Pacific_Dreams.json"},{id:4,freq:"89.3",name:"Radio Vexelstrom",slug:"radio-vexelstrom",logo:"/media/radio/logos/89.3_Radio_Vexelstrom.webp",color:"#2596be",playlistFile:"/media/radio/playlists/89.3_Radio_Vexelstrom.json"},{id:5,freq:"89.7",name:"Growl FM",slug:"growl-fm",logo:"/media/radio/logos/89.7_Growl_FM.webp",color:"#2596be",playlistFile:"/media/radio/playlists/89.7_Growl_FM.json"},{id:6,freq:"91.9",name:"Royal Blue Radio",slug:"royal-blue-radio",logo:"/media/radio/logos/91.9_Royal_Blue_Radio.webp",color:"#2596be",playlistFile:"/media/radio/playlists/91.9_Royal_Blue_Radio.json"},{id:7,freq:"92.9",name:"Night FM",slug:"night-fm",logo:"/media/radio/logos/92.9_Night_FM.webp",color:"#2596be",playlistFile:"/media/radio/playlists/92.9_Night_FM.json"},{id:8,freq:"95.2",name:"Samizdat Radio",slug:"samizdat-radio",logo:"/media/radio/logos/95.2_Samizdat_Radio.webp",color:"#2596be",playlistFile:"/media/radio/playlists/95.2_Samizdat_Radio.json"},{id:9,freq:"96.1",name:"Ritual FM",slug:"ritual-fm",logo:"/media/radio/logos/96.1_Ritual_FM.webp",color:"#2596be",playlistFile:"/media/radio/playlists/96.1_Ritual_FM.json"},{id:10,freq:"98.7",name:"Body Heat Radio",slug:"body-heat-radio",logo:"/media/radio/logos/98.7_Body_Heat_Radio.webp",color:"#2596be",playlistFile:"/media/radio/playlists/98.7_Body_Heat_Radio.json"},{id:11,freq:"99.9",name:"Impulse",slug:"impulse",logo:"/media/radio/logos/99.9_Impulse.webp",color:"#2596be",playlistFile:"/media/radio/playlists/99.9_Impulse.json"},{id:12,freq:"101.9",name:"The Dirge",slug:"the-dirge",logo:"/media/radio/logos/101.9_The_Dirge.webp",color:"#2596be",playlistFile:"/media/radio/playlists/101.9_The_Dirge.json"},{id:13,freq:"103.5",name:"Radio PEBKAC",slug:"radio-pebkac",logo:"/media/radio/logos/103.5_Radio_PEBKAC.webp",color:"#2596be",playlistFile:"/media/radio/playlists/103.5_Radio_PEBKAC.json"},{id:14,freq:"106.9",name:"30 PRINCIPALES",slug:"30-principales",logo:"/media/radio/logos/106.9_30_PRINCIPALES.webp",color:"#2596be",playlistFile:"/media/radio/playlists/106.9_30_PRINCIPALES.json"},{id:15,freq:"107.3",name:"Morro Rock Radio",slug:"morro-rock-radio",logo:"/media/radio/logos/107.3_Morro_Rock_Radio.webp",color:"#2596be",playlistFile:"/media/radio/playlists/107.3_Morro_Rock_Radio.json"},{id:16,freq:"107.5",name:"Dark Star",slug:"dark-star",logo:"/media/radio/logos/107.5_Dark_Star.webp",color:"#2596be",playlistFile:"/media/radio/playlists/107.5_Dark_Star.json"}],V2=({active:t,color:e})=>l.jsx("div",{className:"flex items-end gap-[2px] h-5",children:[...Array(4)].map((n,i)=>{const r=.3+Math.random()*.4,s=i*.1;return l.jsx("div",{className:"w-[3px] rounded-sm transition-all duration-150",style:{height:t?`${Math.random()*80+20}%`:"20%",backgroundColor:t?"#22c55e":"#1a0000",animationName:t?"barPulse":"none",animationDuration:t?`${r}s`:void 0,animationTimingFunction:t?"ease-in-out":void 0,animationIterationCount:t?"infinite":void 0,animationDirection:t?"alternate":void 0,animationDelay:t?`${s}s`:void 0}},i)})}),H2=({onBack:t})=>{const e=ue.useRef(null),[n,i]=ue.useState(null),[r,s]=ue.useState(!1),[a,o]=ue.useState(!1),[c,u]=ue.useState(.2),[h,p]=ue.useState(!1),[f,m]=ue.useState(!1),[_,E]=ue.useState([]),[x,d]=ue.useState(null),[v,M]=ue.useState([]),[S,T]=ue.useState(0),[N,P]=ue.useState(0),[g,R]=ue.useState(0),[A,I]=ue.useState(!1),z=ue.useRef(null),W=ue.useRef(!1);ue.useRef(!0);const[ne,V]=ue.useState(null),[Q,q]=ue.useState(!1);ue.useEffect(()=>{const k=window.location.hash,$=k.indexOf("?");if($>-1){const Z=k.substring($+1),me=new URLSearchParams(Z).get("radio");if(me){const he=f0.find(Pe=>Pe.slug===me);he&&(i(he),q(!0))}}},[]),ue.useEffect(()=>{const k=setInterval(()=>{Math.random()>.85&&(m(!0),setTimeout(()=>m(!1),120))},2e3);return()=>clearInterval(k)},[]),ue.useEffect(()=>{if(!n)return;I(!1),M([]),d(null),(async()=>{try{const Z=await(await fetch(n.playlistFile)).json(),ge=await Promise.all(Z.tracks.map(async Se=>new Promise(Me=>{const Ae=Se.file.startsWith("http")?Se.file:`${Jo}${Se.file}`,Be=new Audio(Ae);Be.addEventListener("loadedmetadata",()=>{Me({...Se,duration:Be.duration})}),Be.addEventListener("error",()=>{console.error(`Erreur chargement: ${Se.file}`),Me({...Se,duration:180})})})));E(ge);const me=new Date().toISOString().split("T")[0],he=`${n.freq}_${n.name}_${me}`,Pe=w([...ge],he);M(Pe),setTimeout(()=>I(!0),0)}catch($){console.error("Erreur chargement playlist:",$),E([]),M([]),I(!1),o(!1)}})()},[n]),ue.useEffect(()=>{if(!A||!W.current||v.length===0||!v[0])return;const $=v.reduce((Me,Ae)=>Me+Ae.duration,0),ge=Date.now()/1e3%$;let me=0,he=0,Pe=0;for(let Me=0;Me<v.length;Me++){if(me+v[Me].duration>ge){he=Me,Pe=ge-me;break}me+=v[Me].duration}const Se=v[he];if(d(Se),R(he),e.current){const Me=Se.file.startsWith("http")?Se.file:`${Jo}${Se.file}`;e.current.src=Me,e.current.currentTime=Pe,e.current.volume=c,e.current.play().catch(Ae=>console.error("Erreur lecture:",Ae)),s(!0),o(!1)}W.current=!1},[A]);const b=()=>{if(v.length===0)return;const k=(g+1)%v.length,$=v[k];if(d($),R(k),e.current&&r){const Z=$.file.startsWith("http")?$.file:`${Jo}${$.file}`;e.current.src=Z,e.current.currentTime=0,e.current.volume=c,e.current.play().catch(ge=>console.error("Erreur lecture:",ge))}};ue.useEffect(()=>{if(!r||!e.current)return;const $=setInterval(()=>{e.current&&(T(e.current.currentTime),P(e.current.duration))},100);return()=>clearInterval($)},[r]);const w=(k,$)=>{const Z=he=>{let Pe=Math.sin(he++)*1e4;return Pe-Math.floor(Pe)};let ge=0;for(let he=0;he<$.length;he++)ge+=$.charCodeAt(he);const me=[...k];for(let he=me.length-1;he>0;he--){const Pe=Math.floor(Z(ge+he)*(he+1));[me[he],me[Pe]]=[me[Pe],me[he]]}return me},L=k=>{const $=`${window.location.origin}${window.location.pathname}#radio?radio=${k.slug}`;navigator.clipboard.writeText($).then(()=>{V(k.id),setTimeout(()=>V(null),2e3)})},O=k=>{z.current!==k.id&&(e.current&&(e.current.pause(),e.current.currentTime=0),s(!1),o(!0),d(null),I(!1),i(k),z.current=k.id,W.current=!0)},U=()=>{var k;if(r)(k=e.current)==null||k.pause(),s(!1);else{if(!x&&n){if(A&&v.length>0){const $=v.reduce((Me,Ae)=>Me+Ae.duration,0),ge=Date.now()/1e3%$;let me=0,he=0,Pe=0;for(let Me=0;Me<v.length;Me++){if(me+v[Me].duration>ge){he=Me,Pe=ge-me;break}me+=v[Me].duration}const Se=v[he];if(d(Se),R(he),e.current){const Me=Se.file.startsWith("http")?Se.file:`${Jo}${Se.file}`;e.current.src=Me,e.current.currentTime=Pe,e.current.volume=c,e.current.play().catch(Ae=>console.error("Erreur lecture:",Ae)),s(!0)}}else o(!0),W.current=!0;return}e.current&&x&&(e.current.volume=c,e.current.play().catch($=>console.error("Erreur lecture:",$))),s(!0),o(!1)}},oe=k=>{const $=parseFloat(k.target.value);u($),p(!1),e.current&&(e.current.volume=$)},ce=k=>{if(!k||isNaN(k))return"0:00";const $=Math.floor(k/60),Z=Math.floor(k%60);return`${$}:${Z.toString().padStart(2,"0")}`},se=()=>{const k=!h;p(k),e.current&&(e.current.muted=k)};return l.jsxs("div",{className:"fixed inset-0 z-50 overflow-hidden overflow-x-hidden max-w-screen",style:{fontFamily:"'Rajdhani', sans-serif",background:"#0a0000",maxWidth:"100vw",width:"100vw",boxSizing:"border-box"},children:[l.jsx("div",{className:"pointer-events-none fixed inset-0 z-10",style:{backgroundImage:"repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.18) 2px, rgba(0,0,0,0.18) 4px)"}}),l.jsx("div",{className:"pointer-events-none fixed inset-0 z-0",style:{background:"radial-gradient(ellipse at 50% 30%, rgba(180,0,0,0.18) 0%, transparent 70%)"}}),l.jsxs("div",{className:"relative z-20 h-screen flex flex-col overflow-x-hidden",children:[l.jsxs("div",{className:"border-b px-2 lg:px-8 py-5 flex items-center justify-between flex-shrink-0",style:{borderColor:"#8B0000",background:"rgba(10,0,0,0.95)"},children:[!Q&&l.jsxs("button",{onClick:t,className:"flex items-center gap-2 transition-colors duration-200 group lg:w-auto w-8",style:{color:"#2596be"},children:[l.jsx(Kn,{className:"w-5 h-5 group-hover:text-white transition-colors"}),l.jsx("span",{className:"text-lg font-semibold tracking-widest uppercase hidden lg:inline",children:"Retour"})]}),Q&&l.jsx("div",{className:"w-8 lg:w-32"}),l.jsxs("div",{className:"flex flex-col items-center flex-1 lg:flex-none",children:[l.jsxs("div",{className:"flex items-center gap-2 lg:gap-3",children:[l.jsx("div",{className:"w-2 h-2 rounded-full animate-pulse hidden lg:block",style:{backgroundColor:"#8B0000",boxShadow:"0 0 8px #ff0000"}}),l.jsx("span",{className:"text-2xl lg:text-4xl font-bold tracking-widest lg:tracking-[0.25em] uppercase",style:{color:"#2596be",textShadow:f?"3px 0 #ff0000, -3px 0 #00ffff":"0 0 20px rgba(0,180,255,0.8), 0 0 40px rgba(0,180,255,0.3)"},children:"RADIO"}),l.jsx("div",{className:"w-2 h-2 rounded-full animate-pulse hidden lg:block",style:{backgroundColor:"#8B0000",boxShadow:"0 0 8px #ff0000",animationDelay:"0.5s"}})]}),l.jsx("div",{className:"text-[0.5rem] lg:text-xs tracking-[0.3em] lg:tracking-[0.5em] mt-1",style:{color:"#8B0000"},children:"NIGHT CITY BROADCAST"})]}),l.jsx("div",{className:"w-8 lg:w-32"})]}),l.jsxs("div",{className:"flex flex-col lg:flex-row gap-0 flex-1 min-h-0 overflow-hidden",children:[!Q&&l.jsxs("div",{className:"lg:w-[420px] lg:border-r flex-shrink-0 flex flex-col overflow-x-hidden overflow-y-hidden h-auto lg:h-full",style:{borderColor:"#3a0000",background:"rgba(8,0,0,0.97)"},children:[l.jsx("div",{className:"px-4 lg:px-6 py-4 border-b flex-shrink-0",style:{borderColor:"#3a0000"},children:l.jsx("div",{className:"text-xs tracking-wider lg:tracking-[0.4em] uppercase font-semibold text-center lg:text-left",style:{color:"#8B0000"},children:"— STATIONS DISPONIBLES —"})}),l.jsx("div",{className:"flex-1 overflow-y-auto max-h-[40vh] lg:max-h-none",style:{scrollbarWidth:"thin",scrollbarColor:"#3a0000 transparent"},children:f0.map((k,$)=>{const Z=(n==null?void 0:n.id)===k.id;return l.jsxs("div",{onClick:()=>O(k),className:"w-full px-2 lg:px-6 py-4 border-b transition-all duration-200 relative cursor-pointer",style:{borderColor:"#1a0000",background:Z?"linear-gradient(90deg, rgba(0,180,255,0.08) 0%, transparent 100%)":"transparent"},children:[l.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-200",style:{background:Z?"#2596be":"transparent",boxShadow:Z?"0 0 12px #2596be":"none"}}),l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsx("div",{className:"flex-shrink-0",children:l.jsx("img",{src:k.logo,alt:k.name,className:"w-16 h-16 object-contain rounded-sm",style:{filter:Z?"brightness(1.1)":"brightness(0.6)",border:Z?`2px solid ${k.color}40`:"2px solid transparent"}})}),l.jsxs("div",{className:"flex-1 min-w-0",children:[l.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[l.jsxs("span",{className:"text-lg font-bold tracking-widest",style:{color:Z?k.color:"#8B0000"},children:[k.freq," FM"]}),Z&&r&&l.jsx("span",{className:"text-sm animate-pulse",style:{color:"#22c55e"},children:"◉"})]}),l.jsx("div",{className:"text-base font-bold tracking-wider truncate transition-colors duration-200",style:{color:Z?"#ffffff":"#aaaaaa",textShadow:Z?`0 0 15px ${k.color}60`:"none"},children:k.name})]}),l.jsxs("div",{className:"flex-shrink-0 flex items-center gap-2",children:[Z&&r?l.jsxs(l.Fragment,{children:[l.jsx(V2,{active:!0,color:k.color}),l.jsx("button",{onClick:ge=>{ge.stopPropagation(),U()},className:"w-8 h-8 rounded-sm flex items-center justify-center border transition-all duration-200 hover:scale-110 cursor-pointer",style:{borderColor:k.color,background:`${k.color}20`,color:k.color},children:l.jsx(em,{className:"w-4 h-4"})})]}):Z&&a?l.jsx("div",{className:"w-8 h-8 rounded-sm flex items-center justify-center border",style:{borderColor:k.color,background:"transparent",color:k.color},children:l.jsx("div",{className:"w-4 h-4 border-2 border-t-transparent rounded-full animate-spin",style:{borderColor:k.color,borderTopColor:"transparent"}})}):Z?l.jsx("button",{onClick:ge=>{ge.stopPropagation(),U()},className:"w-8 h-8 rounded-sm flex items-center justify-center border transition-all duration-200 hover:scale-110 cursor-pointer",style:{borderColor:k.color,background:"transparent",color:k.color},children:l.jsx(fl,{className:"w-4 h-4 ml-0.5"})}):l.jsx("button",{onClick:ge=>{ge.stopPropagation(),O(k)},className:"w-8 h-8 rounded-sm flex items-center justify-center border transition-all duration-200 hover:scale-110 cursor-pointer",style:{borderColor:k.color,background:"transparent",color:k.color,opacity:.6},children:l.jsx(fl,{className:"w-4 h-4 ml-0.5"})}),l.jsxs("button",{onClick:ge=>{ge.stopPropagation(),L(k)},className:"w-8 h-8 rounded-sm flex items-center justify-center border transition-all duration-200 hover:scale-110 cursor-pointer relative",style:{borderColor:k.color,background:"transparent",color:k.color,opacity:Z?1:.6},title:"Copier le lien direct",children:[l.jsx(lS,{className:"w-4 h-4"}),ne===k.id&&l.jsx("span",{className:"absolute -top-8 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap",style:{color:k.color},children:"Copié !"})]})]})]})]},k.id)})})]}),l.jsx("div",{className:"flex-1 flex items-center justify-center overflow-y-auto overflow-x-hidden p-2 lg:p-8",children:n?l.jsxs("div",{className:"flex flex-col items-center gap-4 lg:gap-8 w-full max-w-full lg:max-w-xl py-4 lg:py-0",children:[(Q||window.innerWidth>=1024)&&l.jsx("div",{className:"flex items-center justify-center flex-shrink-0",children:l.jsx("img",{src:n.logo,alt:n.name,className:"w-48 h-48 lg:w-80 lg:h-80 object-contain",style:{filter:"brightness(1.2) drop-shadow(0 0 30px rgba(37, 150, 190, 0.5))"}})}),l.jsxs("div",{className:"text-center flex-shrink-0 px-2 max-w-full",children:[l.jsx("h2",{className:"text-2xl lg:text-5xl font-bold tracking-wide lg:tracking-widest uppercase mb-2 truncate",style:{color:n.color,textShadow:`0 0 30px ${n.color}80, 0 0 60px ${n.color}30`},children:n.name}),l.jsxs("div",{className:"text-xl lg:text-2xl font-bold tracking-wide lg:tracking-widest",style:{color:"#2596be"},children:[n.freq," FM"]})]}),Q&&l.jsx("div",{className:"flex justify-center",children:a?l.jsx("div",{className:"w-16 h-16 rounded-full flex items-center justify-center border-2",style:{borderColor:n.color,background:"transparent"},children:l.jsx("div",{className:"w-8 h-8 border-2 border-t-transparent rounded-full animate-spin",style:{borderColor:n.color,borderTopColor:"transparent"}})}):l.jsx("button",{onClick:U,className:"w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-200 hover:scale-110",style:{borderColor:n.color,background:r?`${n.color}20`:"transparent",color:n.color},children:r?l.jsx(em,{className:"w-8 h-8"}):l.jsx(fl,{className:"w-8 h-8 ml-1"})})}),r&&x?l.jsxs("div",{className:"text-center flex-shrink-0 px-2 max-w-full",children:[l.jsx("div",{className:"text-xs tracking-wider lg:tracking-[0.5em] mb-2",style:{color:"#8B0000"},children:"EN LECTURE"}),l.jsx("div",{className:"text-base lg:text-xl font-bold tracking-wide lg:tracking-wider mb-1 truncate",style:{color:"#ffffff"},children:x.name}),l.jsx("div",{className:"text-sm tracking-wide lg:tracking-widest truncate",style:{color:"#2596be"},children:x.artist}),l.jsxs("div",{className:"mt-3 flex items-center justify-center gap-2",children:[l.jsx("span",{className:"text-xs font-mono",style:{color:"#2596be"},children:ce(S)}),l.jsx("span",{className:"text-xs",style:{color:"#555555"},children:"/"}),l.jsx("span",{className:"text-xs font-mono",style:{color:"#555555"},children:ce(N)})]})]}):l.jsx("div",{className:"text-center py-4 flex-shrink-0",children:l.jsx("div",{className:"text-sm tracking-widest",style:{color:"#555555"},children:r?"CHARGEMENT...":"APPUYEZ SUR PLAY"})}),l.jsx("div",{className:"hidden lg:flex flex-col items-center gap-6 w-full max-w-sm flex-shrink-0",children:l.jsx("div",{className:"w-full px-6 py-4 rounded-sm border",style:{borderColor:`${n.color}30`,background:"rgba(0,0,0,0.3)"},children:l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsx("button",{onClick:se,className:"transition-all duration-200 hover:scale-110",style:{color:h?"#555555":n.color},children:h?l.jsx(vS,{className:"w-6 h-6"}):l.jsx(xS,{className:"w-6 h-6"})}),l.jsx("div",{className:"flex-1 relative",children:l.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:h?0:c,onChange:oe,className:"w-full h-2 rounded-full appearance-none cursor-pointer",style:{background:`linear-gradient(to right, ${n.color} 0%, ${n.color} ${c*100}%, #1a0000 ${c*100}%, #1a0000 100%)`,accentColor:n.color}})}),l.jsx("span",{className:"text-xs font-bold tracking-wider min-w-[3ch]",style:{color:n.color},children:Math.round(c*100)})]})})})]}):l.jsxs("div",{className:"flex flex-col items-center gap-6 text-center",children:[l.jsx("div",{className:"text-2xl font-bold tracking-widest",style:{color:"#8B0000"},children:"SÉLECTIONNEZ UNE RADIO"}),l.jsx("div",{className:"text-sm tracking-wider",style:{color:"#555555"},children:"Cliquez sur une station dans la liste pour commencer"})]})})]})]}),l.jsx("audio",{ref:e,onEnded:b}),l.jsx("style",{children:`
        @keyframes barPulse {
          from { transform: scaleY(0.5); }
          to { transform: scaleY(1); }
        }

        /* Scrollbar personnalisée Cyberpunk */
        .flex-1.overflow-y-auto::-webkit-scrollbar {
          width: 8px;
        }
        .flex-1.overflow-y-auto::-webkit-scrollbar-track {
          background: rgba(26, 0, 0, 0.5);
        }
        .flex-1.overflow-y-auto::-webkit-scrollbar-thumb {
          background: #3a0000;
          border-radius: 4px;
        }
        .flex-1.overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #8B0000;
        }
      `})]})},G2=({events:t,onEventClick:e,filters:n})=>{const i=t&&Array.isArray(t)?t:[],r=new Date;r.setHours(0,0,0,0);const s=new Date(r);s.setDate(s.getDate()+1);const a=i.filter(u=>{if(!u.scheduledStartTime)return!1;const h=new Date(u.scheduledStartTime);if(!(n!=null&&n.startDate)&&!(n!=null&&n.endDate))return h>=r&&h<s;if(n!=null&&n.startDate){const p=new Date(n.startDate);if(p.setHours(0,0,0,0),h<p)return!1}if(n!=null&&n.endDate){const p=new Date(n.endDate);if(p.setHours(23,59,59,999),h>p)return!1}if(n!=null&&n.startTime){const[p,f]=n.startTime.split(":").map(Number),m=h.getHours(),_=h.getMinutes(),E=m*60+_,x=p*60+f;if(E<x)return!1}if(n!=null&&n.endTime){const[p,f]=n.endTime.split(":").map(Number),m=h.getHours(),_=h.getMinutes(),E=m*60+_,x=p*60+f;if(E>x)return!1}return!0}).sort((u,h)=>new Date(u.scheduledStartTime)-new Date(h.scheduledStartTime)),o=(n==null?void 0:n.startDate)||(n==null?void 0:n.endDate)||(n==null?void 0:n.startTime)||(n==null?void 0:n.endTime),c=o?"Événements filtrés":"Événements du jour";return l.jsx("div",{className:"lg:sticky lg:top-8 h-full",children:l.jsxs("div",{className:"bg-zinc-900/50 border border-zinc-800 p-6 rounded lg:rounded-l-none lg:border-l-0 flex flex-col h-full",children:[l.jsxs("h2",{className:"text-2xl font-bold text-white mb-6 flex items-center gap-2 flex-shrink-0",children:[l.jsx(jr,{className:"w-6 h-6 text-cyan-400"}),c]}),l.jsx("div",{className:"overflow-y-auto flex-1 pr-2 -mr-2",children:a.length===0?l.jsx("div",{className:"text-center py-8",children:l.jsx("p",{className:"text-gray-500 text-sm",children:o?"Aucun événement ne correspond aux filtres":"Aucun événement prévu aujourd'hui"})}):l.jsx("div",{className:"space-y-4",children:a.map(u=>{const h=new Date(u.scheduledStartTime),p=u.scheduledEndTime?new Date(u.scheduledEndTime):null;return l.jsxs("div",{onClick:()=>e&&e(u),className:"border border-zinc-800 rounded p-4 hover:border-cyan-500/50 transition-colors cursor-pointer",children:[u.image&&l.jsx("img",{src:u.image,alt:u.name,className:"w-full h-32 object-cover rounded mb-3"}),u.status===2&&l.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[l.jsx("div",{className:"w-2 h-2 rounded-full bg-red-500 animate-pulse"}),l.jsx("span",{className:"text-xs font-semibold text-red-400",children:"EN COURS"})]}),l.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:u.name}),l.jsxs("div",{className:"space-y-1 text-sm text-gray-400 mb-3",children:[o&&l.jsx("div",{className:"text-xs font-semibold text-cyan-400 mb-1",children:h.toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long"})}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(jr,{className:"w-4 h-4"}),l.jsxs("span",{children:[h.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}),p&&` - ${p.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}`]})]}),u.location&&l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(hc,{className:"w-4 h-4"}),l.jsx("span",{className:"text-xs",children:u.location})]})]}),u.description&&l.jsx("p",{className:"text-sm text-gray-400 line-clamp-3",children:u.description})]},u.id)})})})]})})},j2=({events:t,onDayClick:e,filters:n})=>{const r=(t&&Array.isArray(t)?t:[]).filter(x=>{if(!x.scheduledStartTime)return!1;const d=new Date(x.scheduledStartTime);if(n!=null&&n.startDate){const v=new Date(n.startDate);if(v.setHours(0,0,0,0),d<v)return!1}if(n!=null&&n.endDate){const v=new Date(n.endDate);if(v.setHours(23,59,59,999),d>v)return!1}if(n!=null&&n.startTime){const[v,M]=n.startTime.split(":").map(Number),S=d.getHours(),T=d.getMinutes(),N=S*60+T,P=v*60+M;if(N<P)return!1}if(n!=null&&n.endTime){const[v,M]=n.endTime.split(":").map(Number),S=d.getHours(),T=d.getMinutes(),N=S*60+T,P=v*60+M;if(N>P)return!1}return!0}),s=new Date,[a,o]=ue.useState(new Date(s.getFullYear(),s.getMonth(),1)),c=a.toLocaleString("fr-FR",{month:"long",year:"numeric"}),u=new Date(a.getFullYear(),a.getMonth(),1),h=new Date(a.getFullYear(),a.getMonth()+1,0),p=u.getDay()===0?6:u.getDay()-1,f=h.getDate(),m=()=>{o(new Date(a.getFullYear(),a.getMonth()-1,1))},_=()=>{o(new Date(a.getFullYear(),a.getMonth()+1,1))},E={};return r.forEach(x=>{if(x.scheduledStartTime){const d=new Date(x.scheduledStartTime),v=`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;E[v]||(E[v]=[]),E[v].push(x)}}),l.jsxs("div",{className:"bg-zinc-900/50 border border-zinc-800 p-6 rounded lg:rounded-r-none lg:border-r-0 h-full",children:[l.jsxs("h2",{className:"text-2xl font-bold text-white mb-6 flex items-center gap-2",children:[l.jsx(fh,{className:"w-6 h-6 text-cyan-400"}),"Calendrier"]}),l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsx("button",{onClick:m,className:"p-2 hover:bg-zinc-800 rounded transition-colors",title:"Mois précédent",children:l.jsx(iS,{className:"w-5 h-5 text-cyan-400"})}),l.jsx("div",{className:"text-xl font-semibold text-cyan-400 capitalize",children:c}),l.jsx("button",{onClick:_,className:"p-2 hover:bg-zinc-800 rounded transition-colors",title:"Mois suivant",children:l.jsx(rS,{className:"w-5 h-5 text-cyan-400"})})]}),l.jsx("div",{className:"grid grid-cols-7 gap-2 mb-2",children:["Lun","Mar","Mer","Jeu","Ven","Sam","Dim"].map(x=>l.jsx("div",{className:"text-center text-sm font-semibold text-gray-400 py-2",children:x},x))}),l.jsxs("div",{className:"grid grid-cols-7 gap-2",children:[Array.from({length:p}).map((x,d)=>l.jsx("div",{className:"aspect-square"},`empty-${d}`)),Array.from({length:f}).map((x,d)=>{var P;const v=d+1,M=new Date(a.getFullYear(),a.getMonth(),v),S=`${M.getFullYear()}-${M.getMonth()}-${M.getDate()}`,T=((P=E[S])==null?void 0:P.length)>0,N=v===s.getDate()&&a.getMonth()===s.getMonth()&&a.getFullYear()===s.getFullYear();return l.jsxs("div",{onClick:()=>T&&e&&e(E[S],M),className:`aspect-square flex flex-col items-center justify-center rounded border ${N?"border-cyan-500 bg-cyan-500/20 text-cyan-400 font-bold shadow-[0_0_10px_rgba(6,182,212,0.5)]":T?"border-zinc-700 bg-zinc-800/50 text-white hover:border-cyan-500/50 cursor-pointer transition-colors":"border-zinc-800/50 text-gray-500"}`,children:[l.jsx("span",{className:"text-sm",children:v}),T&&l.jsx("div",{className:"flex gap-0.5 mt-1",children:E[S].slice(0,3).map((g,R)=>l.jsx("div",{className:"w-1 h-1 rounded-full bg-cyan-400"},R))})]},v)})]})]})},W2=({events:t,date:e,onClose:n,onEventClick:i})=>{if(!t||t.length===0)return null;const r=[...t].sort((a,o)=>new Date(a.scheduledStartTime)-new Date(o.scheduledStartTime)),s=e.toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long",year:"numeric"});return l.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80",onClick:n,children:l.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto",onClick:a=>a.stopPropagation(),children:[l.jsxs("div",{className:"flex items-center justify-between mb-6",children:[l.jsx("h2",{className:"text-2xl font-bold text-white capitalize",children:s}),l.jsx("button",{onClick:n,className:"text-gray-400 hover:text-white transition-colors",children:l.jsx(pc,{className:"w-6 h-6"})})]}),l.jsx("div",{className:"space-y-4",children:r.map(a=>{const o=new Date(a.scheduledStartTime),c=a.scheduledEndTime?new Date(a.scheduledEndTime):null;return l.jsxs("div",{onClick:()=>i&&i(a),className:"border border-zinc-800 rounded p-4 hover:border-cyan-500/50 transition-colors cursor-pointer",children:[a.image&&l.jsx("img",{src:a.image,alt:a.name,className:"w-full h-32 object-cover rounded mb-3"}),a.status===2&&l.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[l.jsx("div",{className:"w-2 h-2 rounded-full bg-red-500 animate-pulse"}),l.jsx("span",{className:"text-xs font-semibold text-red-400",children:"EN COURS"})]}),l.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:a.name}),l.jsxs("div",{className:"space-y-1 text-sm text-gray-400",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(jr,{className:"w-4 h-4"}),l.jsxs("span",{children:[o.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}),c&&` - ${c.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}`]})]}),a.location&&l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(hc,{className:"w-4 h-4"}),l.jsx("span",{className:"text-xs",children:a.location})]})]})]},a.id)})})]})})},X2=({event:t,onClose:e})=>{if(!t)return null;const n=new Date(t.scheduledStartTime),i=t.scheduledEndTime?new Date(t.scheduledEndTime):null;return l.jsx("div",{className:"fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80",onClick:e,children:l.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-lg p-6 max-w-3xl w-full max-h-[80vh] overflow-y-auto",onClick:r=>r.stopPropagation(),children:[l.jsxs("div",{className:"flex items-center justify-between mb-6",children:[l.jsx("h2",{className:"text-3xl font-bold text-white",children:t.name}),l.jsx("button",{onClick:e,className:"text-gray-400 hover:text-white transition-colors",children:l.jsx(pc,{className:"w-6 h-6"})})]}),t.image&&l.jsx("img",{src:t.image,alt:t.name,className:"w-full h-64 object-cover rounded mb-6"}),t.status===2&&l.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[l.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500 animate-pulse"}),l.jsx("span",{className:"text-sm font-semibold text-red-400",children:"ÉVÉNEMENT EN COURS"})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[l.jsxs("div",{className:"flex items-center gap-3 text-gray-300",children:[l.jsx(jr,{className:"w-5 h-5 text-cyan-400"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-sm text-gray-500",children:"Horaire"}),l.jsx("p",{className:"font-semibold",children:n.toLocaleString("fr-FR",{weekday:"long",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit"})}),i&&l.jsxs("p",{className:"text-sm text-gray-400",children:["Fin : ",i.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})]})]})]}),t.location&&l.jsxs("div",{className:"flex items-center gap-3 text-gray-300",children:[l.jsx(hc,{className:"w-5 h-5 text-cyan-400"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-sm text-gray-500",children:"Lieu"}),l.jsx("p",{className:"font-semibold",children:t.location})]})]}),t.userCount&&l.jsxs("div",{className:"flex items-center gap-3 text-gray-300",children:[l.jsx(gS,{className:"w-5 h-5 text-cyan-400"}),l.jsxs("div",{children:[l.jsx("p",{className:"text-sm text-gray-500",children:"Participants"}),l.jsxs("p",{className:"font-semibold",children:[t.userCount," inscrits"]})]})]})]}),t.description&&l.jsxs("div",{className:"mt-6",children:[l.jsx("h3",{className:"text-xl font-bold text-white mb-3",children:"Description"}),l.jsx("div",{className:"text-gray-300 whitespace-pre-wrap leading-relaxed",children:t.description})]})]})})},q2=({filters:t,onFiltersChange:e})=>{const n=(a,o)=>{e({...t,[a]:o})},i=(a,o)=>{e({...t,[a]:o})},r=()=>{e({startDate:"",endDate:"",startTime:"",endTime:""})},s=t.startDate||t.endDate||t.startTime||t.endTime;return l.jsxs("div",{className:"bg-zinc-900/50 border border-zinc-800 p-4 rounded mb-6",children:[l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[l.jsx(fh,{className:"w-5 h-5 text-cyan-400"}),"Filtres"]}),s&&l.jsxs("button",{onClick:r,className:"text-sm text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-1",children:[l.jsx(pc,{className:"w-4 h-4"}),"Réinitialiser"]})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Date de début"}),l.jsx("input",{type:"date",value:t.startDate,onChange:a=>n("startDate",a.target.value),className:"w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white focus:border-cyan-500 focus:outline-none"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Date de fin"}),l.jsx("input",{type:"date",value:t.endDate,onChange:a=>n("endDate",a.target.value),className:"w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white focus:border-cyan-500 focus:outline-none"})]}),l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm text-gray-400 mb-2 flex items-center gap-2",children:[l.jsx(jr,{className:"w-4 h-4"}),"Heure de début"]}),l.jsx("input",{type:"time",value:t.startTime,onChange:a=>i("startTime",a.target.value),className:"w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white focus:border-cyan-500 focus:outline-none"})]}),l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm text-gray-400 mb-2 flex items-center gap-2",children:[l.jsx(jr,{className:"w-4 h-4"}),"Heure de fin"]}),l.jsx("input",{type:"time",value:t.endTime,onChange:a=>i("endTime",a.target.value),className:"w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white focus:border-cyan-500 focus:outline-none"})]})]}),s&&l.jsxs("div",{className:"mt-3 flex flex-wrap gap-2",children:[t.startDate&&l.jsxs("span",{className:"text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded",children:["Depuis: ",new Date(t.startDate).toLocaleDateString("fr-FR")]}),t.endDate&&l.jsxs("span",{className:"text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded",children:["Jusqu'à: ",new Date(t.endDate).toLocaleDateString("fr-FR")]}),t.startTime&&l.jsxs("span",{className:"text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded",children:["Après: ",t.startTime]}),t.endTime&&l.jsxs("span",{className:"text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded",children:["Avant: ",t.endTime]})]})]})},$2=()=>l.jsx("footer",{className:"border-t border-zinc-800 mt-auto relative z-10",children:l.jsx("div",{className:"max-w-7xl mx-auto px-8 py-8",children:l.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[l.jsx("div",{children:l.jsxs("span",{className:"text-gray-400 text-sm",children:["Nexus - FFXIV © ",new Date().getFullYear()]})}),l.jsxs("a",{href:"https://discord.gg/KKJSb3rKjD",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-gray-400 hover:text-white transition-colors",children:[l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:l.jsx("path",{d:"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"})}),l.jsx("span",{className:"text-sm font-medium",children:"Rejoindre le Discord"})]})]})})});function Y2(){const[t,e]=ue.useState(""),[n,i]=ue.useState(null),[r,s]=ue.useState(""),[a,o]=ue.useState([]),[c,u]=ue.useState([]),[h,p]=ue.useState([]),[f,m]=ue.useState("servers"),[_,E]=ue.useState(""),[x,d]=ue.useState("asc"),[v,M]=ue.useState("asc"),[S,T]=ue.useState(null),[N,P]=ue.useState(!1),[g,R]=ue.useState(!1),[A,I]=ue.useState(!1),[z,W]=ue.useState(!1),[ne,V]=ue.useState(!1),[Q,q]=ue.useState(!1),[b,w]=ue.useState(!1),[L,O]=ue.useState(!1),[U,oe]=ue.useState(null),[ce,se]=ue.useState(null),[k,$]=ue.useState(null),[Z,ge]=ue.useState({startDate:"",endDate:"",startTime:"",endTime:""}),[me,he]=ue.useState({images:[{url:"",position:{x:0,y:0},zoom:1},{url:"",position:{x:0,y:0},zoom:1},{url:"",position:{x:0,y:0},zoom:1}],currentImageIndex:0,avatar:"",avatarPosition:{x:0,y:0},avatarZoom:1,username:"Utilisateur",mentions:"",caption:"",hashtags:"",likes:"42",comments:[{username:"",text:"",likes:""},{username:"",text:"",likes:""},{username:"",text:"",likes:""}]}),[Pe,Se]=ue.useState({images:[{url:"",position:{x:0,y:0},zoom:1},{url:"",position:{x:0,y:0},zoom:1},{url:"",position:{x:0,y:0},zoom:1}],currentImageIndex:0,avatar:"",avatarPosition:{x:0,y:0},avatarZoom:1,username:"Utilisateur",mentions:"",caption:"",likes:"42",isLocked:!1,comments:[{username:"",text:"",likes:""},{username:"",text:"",likes:""},{username:"",text:"",likes:""}]}),Me=()=>{const F=new Date,re=new Date(F.toLocaleString("en-US",{timeZone:"Europe/Paris"})),j=re.getHours().toString().padStart(2,"0"),fe=re.getMinutes().toString().padStart(2,"0"),ie=re.getDate(),Oe=["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."][re.getMonth()],Ze=re.getFullYear();return`${j}:${fe} · ${ie} ${Oe} ${Ze}`},[Ae,Be]=ue.useState({image:"",imagePosition:{x:0,y:0},imageZoom:1,avatar:"",avatarPosition:{x:0,y:0},avatarZoom:1,username:"Utilisateur",handle:"utilisateur",text:"",timestamp:Me(),replies:"0",repings:"0",likes:"0"}),[je,Xe]=ue.useState(!1),[Ye,Je]=ue.useState({x:0,y:0}),[Ke,et]=ue.useState(!1),[B,tt]=ue.useState({x:0,y:0}),[qe,D]=ue.useState(!1),[y,H]=ue.useState(!1),[K,le]=ue.useState(""),[xe,we]=ue.useState([]),[de,pe]=ue.useState("asc"),Ee=F=>F.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");ue.useEffect(()=>{const F=window.location.hash,re=F.indexOf("?");if(re>-1){const j=F.substring(re+1);new URLSearchParams(j).get("radio")&&w(!0)}},[]),ue.useEffect(()=>{setTimeout(()=>{const F=document.querySelector(".fixed.inset-0.overflow-y-auto");F?F.scrollTo(0,0):window.scrollTo(0,0)},0)},[n,N,g,A,z,ne,Q,b]),ue.useEffect(()=>{const F=()=>{const re=window.location.hash.substring(1),j=re.indexOf("?"),fe=j>-1?re.substring(0,j):re;if(j>-1?new URLSearchParams(re.substring(j+1)):new URLSearchParams,fe)if(fe==="radio")w(!0),P(!1),R(!1),I(!1),W(!1),V(!1),q(!1),i(null),T(null);else if(fe==="pyonpix/nightcity")P(!0),R(!1),I(!1),W(!1),V(!1),q(!1),w(!1),i(null),T(null);else if(fe==="pyonpix/centreville")R(!0),P(!1),I(!1),W(!1),V(!1),q(!1),w(!1),i(null),T(null);else if(fe==="pyonpix/pubs")I(!0),P(!1),R(!1),W(!1),V(!1),q(!1),w(!1),i(null),T(null);else if(fe==="coven"||fe==="coven/")W(!0),P(!1),R(!1),I(!1),V(!1),q(!1),w(!1),i(null),T(null);else if(fe==="coven/visualizer")V(!0),W(!1),q(!1),w(!1),P(!1),R(!1),I(!1),i(null),T(null);else if(fe==="coven/dvd")q(!0),W(!1),V(!1),w(!1),P(!1),R(!1),I(!1),i(null),T(null);else if(fe==="neolens"){const ie=ji.find(ve=>ve.name==="Neolens");ie&&(i(ke.find(ve=>ve.title==="RÉSEAUX")),T(ie),P(!1),R(!1),I(!1),W(!1),V(!1),q(!1))}else if(fe==="holofans"){const ie=ji.find(ve=>ve.name==="Holofans");ie&&(i(ke.find(ve=>ve.title==="RÉSEAUX")),T(ie),P(!1),R(!1),I(!1),W(!1),V(!1),q(!1))}else if(fe==="ping"){const ie=ji.find(ve=>ve.name==="Ping");ie&&(i(ke.find(ve=>ve.title==="RÉSEAUX")),T(ie),P(!1),R(!1),I(!1),W(!1),V(!1),q(!1))}else{const ie=ke.find(ve=>Ee(ve.title)===fe.toLowerCase());ie&&(i(ie),P(!1),R(!1),I(!1),W(!1),V(!1),q(!1))}else i(null),T(null),P(!1),R(!1),I(!1),W(!1),V(!1),q(!1),w(!1)};return F(),window.addEventListener("hashchange",F),()=>window.removeEventListener("hashchange",F)},[ji]);const De={Chaos:["Cerberus","Louisoix","Moogle","Omega","Phantom","Ragnarok","Sagittarius","Spriggan"],Light:["Alpha","Lich","Odin","Phoenix","Raiden","Shiva","Twintania","Zodiark"]},be=["La Coupe","Lavandière","Brumée","Empyrée","Shirogane"],Te=["Bar","Lieu public","Nightclub","Boutique","Studio Photo"],Fe=yS,ke=[{id:1,title:"ANNUAIRE",icon:nS},{id:2,title:"ARTISTES",icon:uS},{id:3,title:"ÉVÉNEMENTS",icon:fh},{id:4,title:"RÉSEAUX",icon:Xc},{id:5,title:"RESSOURCES",icon:Jp}],Ge=F=>{o(re=>re.includes(F)?re.filter(j=>j!==F):[...re,F])},G=F=>{u(re=>re.includes(F)?re.filter(j=>j!==F):[...re,F])},ye=F=>{p(re=>re.includes(F)?re.filter(j=>j!==F):[...re,F])},Y=Fe.filter(F=>{const re=F.name.toLowerCase().includes(r.toLowerCase()),j=a.length===0||a.includes(F.server),fe=c.length===0||c.includes(F.location),ie=h.length===0||F.types.some(ve=>h.includes(ve));return re&&j&&fe&&ie}).sort((F,re)=>x==="asc"?F.name.localeCompare(re.name):re.name.localeCompare(F.name));return l.jsxs("div",{className:"min-h-screen bg-black flex flex-col relative",children:[l.jsx(Mr,{}),l.jsx("div",{className:"flex-grow p-8 relative z-10",children:l.jsxs("div",{className:"max-w-7xl mx-auto",children:[!n&&l.jsxs(l.Fragment,{children:[l.jsx("header",{className:"mb-20 text-center",children:l.jsxs("div",{className:"flex flex-col items-center justify-center gap-8",children:[l.jsxs("div",{className:"relative group",children:[l.jsx("div",{className:"absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),l.jsx("div",{className:"relative p-6 rounded-full border-2 border-cyan-500/30 bg-black/50 backdrop-blur-sm",children:l.jsx("img",{src:"media/nexus_logo.png",alt:"Nexus Logo",className:"w-32 h-32 object-contain drop-shadow-[0_0_25px_rgba(6,182,212,0.5)]"})})]}),l.jsxs("div",{className:"relative",children:[l.jsx("h1",{className:"text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white tracking-[0.2em] mb-4 drop-shadow-[0_0_30px_rgba(6,182,212,0.8)]",children:"NEXUS"}),l.jsxs("div",{className:"flex items-center justify-center gap-4 mb-4",children:[l.jsx("div",{className:"h-px w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"}),l.jsx("div",{className:"w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"}),l.jsx("div",{className:"h-px w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"})]}),l.jsx("p",{className:"text-cyan-400/80 text-sm tracking-[0.3em] uppercase font-light",children:"Final Fantasy XIV // Hub RP Cyber"})]})]})}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto",children:[ke.map(F=>{const re=F.icon;return l.jsx("button",{onClick:()=>{window.location.hash=Ee(F.title),i(F)},className:"terminal-card group text-left",children:l.jsxs("div",{className:"flex items-center space-x-4",children:[l.jsx("div",{className:"text-white group-hover:text-cyan-400 transition-all duration-300",children:l.jsx(re,{className:"w-7 h-7",strokeWidth:1.5})}),l.jsx("div",{className:"flex-1",children:l.jsx("h3",{className:"text-lg font-semibold text-white group-hover:text-cyan-100 tracking-wide transition-colors duration-300",children:F.title})}),l.jsx("div",{className:"text-gray-600 group-hover:text-cyan-400 transition-all duration-300 text-xs",children:"→"})]})},F.id)}),l.jsx("button",{onClick:()=>{window.location.hash="radio",w(!0)},className:"terminal-card group text-left",children:l.jsxs("div",{className:"flex items-center space-x-4",children:[l.jsx("div",{className:"text-white group-hover:text-cyan-400 transition-all duration-300",children:l.jsx(dS,{className:"w-7 h-7",strokeWidth:1.5})}),l.jsx("div",{className:"flex-1",children:l.jsx("h3",{className:"text-lg font-semibold text-white group-hover:text-cyan-100 tracking-wide transition-colors duration-300",children:"RADIO"})}),l.jsx("div",{className:"text-gray-600 group-hover:text-cyan-400 transition-all duration-300 text-xs",children:"→"})]})})]})]}),n&&n.title==="ANNUAIRE"&&l.jsxs("div",{className:"fixed inset-0 bg-black z-50 overflow-y-auto flex flex-col relative",children:[l.jsx(Mr,{}),l.jsx("div",{className:"flex-grow relative z-10",children:l.jsxs("div",{className:"max-w-7xl mx-auto p-8 pb-16",children:[l.jsxs("button",{onClick:()=>{window.location.hash="",i(null)},className:"flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 mb-8 group",children:[l.jsx(Kn,{className:"w-5 h-5"}),l.jsx("span",{children:"Retour"})]}),l.jsxs("header",{className:"mb-8",children:[l.jsxs("div",{className:"text-center mb-8",children:[l.jsx("h1",{className:"text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white tracking-[0.15em] mb-4 drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]",children:"ANNUAIRE"}),l.jsxs("div",{className:"flex items-center justify-center gap-4 mb-4",children:[l.jsx("div",{className:"h-px w-12 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"}),l.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-cyan-500/80 shadow-[0_0_8px_rgba(6,182,212,0.6)]"}),l.jsx("div",{className:"h-px w-12 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"})]}),l.jsx("p",{className:"text-gray-400 text-sm",children:"Pour être ajouté à l'annuaire, créez un ticket sur le Discord"})]}),l.jsxs("div",{className:"flex gap-4 mb-6",children:[l.jsxs("div",{className:"relative flex-1",children:[l.jsx(qc,{className:"absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"}),l.jsx("input",{type:"text",placeholder:"Rechercher dans l'annuaire...",value:r,onChange:F=>s(F.target.value),className:"w-full bg-zinc-900/50 border border-zinc-800 text-white pl-12 pr-4 py-4 focus:outline-none focus:border-zinc-600 transition-colors"})]}),l.jsxs("select",{value:x,onChange:F=>d(F.target.value),className:"appearance-none bg-zinc-900/50 border border-zinc-800 text-white px-4 py-4 focus:outline-none focus:border-zinc-600 transition-colors cursor-pointer",children:[l.jsx("option",{value:"asc",children:"A → Z"}),l.jsx("option",{value:"desc",children:"Z → A"})]})]}),l.jsxs("div",{className:"mb-6",children:[l.jsxs("div",{className:"flex border-b border-zinc-800 mb-4",children:[l.jsx("button",{onClick:()=>m("servers"),className:`px-6 py-3 text-sm font-medium transition-colors ${f==="servers"?"text-white border-b-2 border-white":"text-gray-500 hover:text-gray-300"}`,children:"Serveurs"}),l.jsx("button",{onClick:()=>m("locations"),className:`px-6 py-3 text-sm font-medium transition-colors ${f==="locations"?"text-white border-b-2 border-white":"text-gray-500 hover:text-gray-300"}`,children:"Lieux"}),l.jsx("button",{onClick:()=>m("types"),className:`px-6 py-3 text-sm font-medium transition-colors ${f==="types"?"text-white border-b-2 border-white":"text-gray-500 hover:text-gray-300"}`,children:"Types"})]}),l.jsxs("div",{className:"bg-zinc-900/30 border border-zinc-800/50 p-6",children:[f==="servers"&&l.jsxs("div",{children:[l.jsxs("div",{className:"mb-6",children:[l.jsx("div",{className:"text-gray-400 text-xs font-bold mb-3 uppercase tracking-wider",children:"Chaos"}),l.jsx("div",{className:"flex flex-wrap gap-2",children:De.Chaos.map(F=>l.jsx("button",{onClick:()=>Ge(F),className:`px-4 py-2 text-sm font-medium transition-all ${a.includes(F)?"bg-white text-black":"bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white"}`,children:F},F))})]}),l.jsxs("div",{children:[l.jsx("div",{className:"text-gray-400 text-xs font-bold mb-3 uppercase tracking-wider",children:"Light"}),l.jsx("div",{className:"flex flex-wrap gap-2",children:De.Light.map(F=>l.jsx("button",{onClick:()=>Ge(F),className:`px-4 py-2 text-sm font-medium transition-all ${a.includes(F)?"bg-white text-black":"bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white"}`,children:F},F))})]})]}),f==="locations"&&l.jsx("div",{className:"flex flex-wrap gap-2",children:be.map(F=>l.jsx("button",{onClick:()=>G(F),className:`px-4 py-2 text-sm font-medium transition-all ${c.includes(F)?"bg-white text-black":"bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white"}`,children:F},F))}),f==="types"&&l.jsx("div",{className:"flex flex-wrap gap-2",children:Te.map(F=>l.jsx("button",{onClick:()=>ye(F),className:`px-4 py-2 text-sm font-medium transition-all ${h.includes(F)?"bg-white text-black":"bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white"}`,children:F},F))})]})]}),(a.length>0||c.length>0||h.length>0)&&l.jsxs("div",{className:"mt-6 p-4 bg-zinc-900/30 border border-zinc-800/50",children:[l.jsxs("div",{className:"flex items-center justify-between mb-3",children:[l.jsx("span",{className:"text-xs text-gray-500 uppercase tracking-wider",children:"Filtres actifs"}),l.jsx("button",{onClick:()=>{o([]),u([]),p([])},className:"text-xs text-gray-500 hover:text-white transition-colors",children:"Tout effacer"})]}),l.jsxs("div",{className:"flex flex-wrap gap-2",children:[a.map(F=>l.jsxs("button",{onClick:()=>Ge(F),className:"px-3 py-1.5 bg-white text-black text-xs font-medium hover:bg-gray-300 transition-colors flex items-center gap-2",children:[F,l.jsx("span",{className:"text-lg leading-none",children:"×"})]},F)),c.map(F=>l.jsxs("button",{onClick:()=>G(F),className:"px-3 py-1.5 bg-white text-black text-xs font-medium hover:bg-gray-300 transition-colors flex items-center gap-2",children:[F,l.jsx("span",{className:"text-lg leading-none",children:"×"})]},F)),h.map(F=>l.jsxs("button",{onClick:()=>ye(F),className:"px-3 py-1.5 bg-white text-black text-xs font-medium hover:bg-gray-300 transition-colors flex items-center gap-2",children:[F,l.jsx("span",{className:"text-lg leading-none",children:"×"})]},F))]})]})]}),l.jsxs("div",{className:"text-gray-500 text-sm font-medium mb-6 mt-8",children:[Y.length," établissement",Y.length>1?"s":""]}),l.jsxs("div",{className:"space-y-4",children:[Y.map(F=>l.jsx("div",{className:"establishment-card",children:l.jsxs("div",{className:"flex flex-col md:flex-row gap-6",children:[l.jsxs("div",{className:"flex-shrink-0 w-full md:w-[440px]",children:[F.banner?l.jsx("div",{className:"w-full h-[130px] overflow-hidden rounded border border-zinc-800 mb-3",children:l.jsx("img",{src:F.banner,alt:`Bannière ${F.name}`,className:"w-full h-full object-cover"})}):l.jsx("div",{className:"w-full h-[130px] rounded border border-zinc-800/50 bg-gradient-to-br from-zinc-900/50 via-zinc-800/30 to-zinc-900/50 flex items-center justify-center mb-3",children:l.jsx("div",{className:"w-20 h-1 bg-gradient-to-r from-cyan-500/30 via-cyan-400/50 to-cyan-500/30"})}),F.types&&F.types.length>0&&l.jsx("div",{className:"flex gap-2 flex-wrap",children:F.types.map(re=>l.jsx("span",{className:"tag",children:re},re))})]}),l.jsx("div",{className:"flex-1 min-w-0",children:l.jsxs("div",{className:"flex items-start justify-between mb-4",children:[l.jsxs("div",{className:"flex-1",children:[l.jsx("h3",{className:"text-2xl font-bold text-white mb-3",children:F.name}),l.jsxs("div",{className:"space-y-2",children:[l.jsxs("div",{className:"flex flex-wrap items-center gap-x-3 gap-y-2 text-sm",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-gray-500 text-xs uppercase tracking-wider",children:F.datacenter}),l.jsx("span",{className:"w-1 h-1 bg-gray-700 rounded-full"}),l.jsx("span",{className:"text-gray-400 font-medium",children:F.server})]}),l.jsx("span",{className:"w-1 h-1 bg-gray-700 rounded-full"}),l.jsx("span",{className:"text-gray-400",children:F.location}),l.jsx("span",{className:"w-1 h-1 bg-gray-700 rounded-full"}),l.jsxs("div",{className:"flex items-center gap-2 text-gray-400",children:[l.jsx(hc,{className:"w-4 h-4"}),l.jsxs("span",{children:["Secteur ",F.secteur,F.annexe?" (Annexe)":""," - ",F.appartement?"Appartement ":"","N°",F.numero]})]})]}),F.horaires&&l.jsxs("div",{className:"flex items-start gap-2 text-gray-400 text-sm",children:[l.jsx(jr,{className:"w-4 h-4 mt-0.5"}),l.jsx("div",{children:typeof F.horaires=="string"?l.jsx("span",{children:F.horaires}):l.jsx("div",{className:"space-y-0.5",children:F.horaires.map((re,j)=>l.jsxs("div",{children:[re.jour," ",re.heures]},j))})})]})]})]}),l.jsxs("div",{className:"flex gap-3",children:[F.url&&l.jsx("a",{href:F.url,target:"_blank",rel:"noopener noreferrer",className:"btn-primary flex items-center gap-2",title:"Site web",children:l.jsx(Xc,{className:"w-4 h-4"})}),F.discord&&l.jsx("a",{href:F.discord,target:"_blank",rel:"noopener noreferrer",className:"btn-secondary flex items-center gap-2",title:"Discord",children:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:l.jsx("path",{d:"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"})})})]})]})})]})},F.id)),Y.length===0&&l.jsx("div",{className:"text-center py-12",children:l.jsx("p",{className:"text-gray-500",children:"Aucun établissement trouvé"})})]})]})})]}),n&&n.title==="ARTISTES"&&l.jsxs("div",{className:"fixed inset-0 bg-black z-50 overflow-y-auto flex flex-col relative",children:[l.jsx(Mr,{}),l.jsx("div",{className:"flex-grow relative z-10",children:l.jsxs("div",{className:"max-w-7xl mx-auto p-8 pb-16",children:[l.jsxs("button",{onClick:()=>{window.location.hash="",i(null)},className:"flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 mb-8 group",children:[l.jsx(Kn,{className:"w-5 h-5"}),l.jsx("span",{children:"Retour"})]}),l.jsxs("header",{className:"mb-8",children:[l.jsxs("div",{className:"text-center mb-8",children:[l.jsx("h1",{className:"text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white tracking-[0.15em] mb-4 drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]",children:"ARTISTES"}),l.jsxs("div",{className:"flex items-center justify-center gap-4 mb-4",children:[l.jsx("div",{className:"h-px w-12 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"}),l.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-cyan-500/80 shadow-[0_0_8px_rgba(6,182,212,0.6)]"}),l.jsx("div",{className:"h-px w-12 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"})]}),l.jsx("p",{className:"text-gray-400 text-sm",children:"Pour être ajouté dans les artistes, créez un ticket sur le Discord"})]}),l.jsxs("div",{className:"flex gap-4 mb-6",children:[l.jsxs("div",{className:"relative flex-1",children:[l.jsx(qc,{className:"absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"}),l.jsx("input",{type:"text",placeholder:"Rechercher un artiste...",value:_,onChange:F=>E(F.target.value),className:"w-full bg-zinc-900/50 border border-zinc-800 text-white pl-12 pr-4 py-4 focus:outline-none focus:border-zinc-600 transition-colors"})]}),l.jsxs("select",{value:v,onChange:F=>M(F.target.value),className:"appearance-none bg-zinc-900/50 border border-zinc-800 text-white px-4 py-4 focus:outline-none focus:border-zinc-600 transition-colors cursor-pointer",children:[l.jsx("option",{value:"asc",children:"A → Z"}),l.jsx("option",{value:"desc",children:"Z → A"})]})]})]}),l.jsxs("div",{className:"text-gray-500 text-sm font-medium mb-6",children:[Ro.filter(F=>F.name.toLowerCase().includes(_.toLowerCase())).length," artiste",Ro.filter(F=>F.name.toLowerCase().includes(_.toLowerCase())).length>1?"s":""]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:Ro.filter(F=>F.name.toLowerCase().includes(_.toLowerCase())).sort((F,re)=>v==="asc"?F.name.localeCompare(re.name):re.name.localeCompare(F.name)).map(F=>l.jsxs("div",{className:"establishment-card",children:[l.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[F.logo&&l.jsx("img",{src:F.logo,alt:F.name,className:"h-16 max-w-32 object-contain"}),l.jsxs("div",{className:"flex-1",children:[l.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:F.name}),l.jsx("p",{className:"text-gray-400 text-sm",children:F.styleMusical})]})]}),l.jsxs("div",{className:"flex gap-2 flex-wrap",children:[F.url&&l.jsx("a",{href:F.url,target:"_blank",rel:"noopener noreferrer",className:"btn-primary flex items-center gap-2",title:"Site web",children:l.jsx(Xc,{className:"w-4 h-4"})}),F.youtube&&l.jsx("a",{href:F.youtube,target:"_blank",rel:"noopener noreferrer",className:"btn-secondary flex items-center gap-2",title:"YouTube",children:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:l.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})})}),F.discord&&l.jsx("a",{href:F.discord,target:"_blank",rel:"noopener noreferrer",className:"btn-secondary flex items-center gap-2",title:"Discord",children:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:l.jsx("path",{d:"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"})})})]})]},F.id))}),Ro.filter(F=>F.name.toLowerCase().includes(_.toLowerCase())).length===0&&l.jsx("div",{className:"text-center py-12",children:l.jsx("p",{className:"text-gray-500",children:"Aucun artiste trouvé"})})]})})]}),n&&n.title==="RESSOURCES"&&l.jsxs("div",{className:"fixed inset-0 bg-black z-50 overflow-y-auto flex flex-col relative",children:[l.jsx(Mr,{}),l.jsx("div",{className:"flex-grow relative z-10",children:l.jsxs("div",{className:"max-w-7xl mx-auto p-8 pb-16",children:[l.jsxs("button",{onClick:()=>{window.location.hash="",i(null)},className:"flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 mb-8 group",children:[l.jsx(Kn,{className:"w-5 h-5"}),l.jsx("span",{children:"Retour"})]}),l.jsxs("header",{className:"mb-8",children:[l.jsxs("div",{className:"text-center mb-8",children:[l.jsx("h1",{className:"text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white tracking-[0.15em] mb-4 drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]",children:"RESSOURCES"}),l.jsxs("div",{className:"flex items-center justify-center gap-4",children:[l.jsx("div",{className:"h-px w-12 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"}),l.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-cyan-500/80 shadow-[0_0_8px_rgba(6,182,212,0.6)]"}),l.jsx("div",{className:"h-px w-12 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"})]})]}),l.jsxs("div",{className:"flex gap-4 mb-6",children:[l.jsxs("div",{className:"relative flex-1",children:[l.jsx(qc,{className:"absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"}),l.jsx("input",{type:"text",placeholder:"Rechercher une ressource...",value:K,onChange:F=>le(F.target.value),className:"w-full bg-zinc-900/50 border border-zinc-800 text-white pl-12 pr-4 py-4 focus:outline-none focus:border-zinc-600 transition-colors"})]}),l.jsxs("select",{value:de,onChange:F=>pe(F.target.value),className:"appearance-none bg-zinc-900/50 border border-zinc-800 text-white px-4 py-4 focus:outline-none focus:border-zinc-600 transition-colors cursor-pointer",children:[l.jsx("option",{value:"asc",children:"A → Z"}),l.jsx("option",{value:"desc",children:"Z → A"})]})]}),l.jsxs("div",{className:"mb-6",children:[l.jsx("div",{className:"text-gray-400 text-xs font-bold mb-3 uppercase tracking-wider",children:"Filtrer par tag"}),l.jsx("div",{className:"flex flex-wrap gap-2",children:["PyonPix","Meuble","Meuble de jardin","Mascotte","Utilitaire"].map(F=>l.jsx("button",{onClick:()=>{xe.includes(F)?we(xe.filter(re=>re!==F)):we([...xe,F])},className:`px-4 py-2 text-sm font-medium transition-all ${xe.includes(F)?"bg-white text-black":"bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white"}`,children:F},F))})]})]}),(()=>{const re=[{title:"PyonPix: Night City",description:"Timelapse 24h de Night City synchronisé avec l'heure UTC+1",url:"#pyonpix/nightcity",tags:["PyonPix"],isInternal:!0,requiresPyonPix:!0},{title:"PyonPix: Night City - Centre ville",description:"Boucle vidéo montrant le centre ville de Night City",url:"#pyonpix/centreville",tags:["PyonPix"],isInternal:!0,requiresPyonPix:!0},{title:"PyonPix: Cyberpunk - Pubs",description:"Boucle vidéo montrant les pubs de Cyberpunk 2077",url:"#pyonpix/pubs",tags:["PyonPix"],isInternal:!0,requiresPyonPix:!0},{title:"Cyberpunk - Paysages magiques",description:"Mod modifiant les paysages magiques du jeu au profit de paysages du jeu Cyberpunk 2077",url:"https://heliosphere.app/mod/wnpyxb0ht96rfd85xzd3gqpgs0",tags:["Meuble"]},{title:"25th Hour - Distributeur",description:"Distributeur pour la boisson énergisante au café 25th Hour",url:"https://heliosphere.app/mod/va3w4snr550hfdpef5qtyqdpq8",tags:["Meuble de jardin"]},{title:"25th Hour - Canette",description:"Canette de la boisson énergisante au café 25th Hour",url:"https://heliosphere.app/mod/wyea6wmr990gf66fdcsq1q9a70",tags:["Mascotte"]},{title:"Listingway",description:"Importez votre fichier .txt Remakeplace et obtenez une estimation du prix de vos meubles et où les acheter",url:"https://obsidian-chrome.github.io/listingway/",tags:["Utilitaire"]}].filter(j=>{const fe=K===""||j.title.toLowerCase().includes(K.toLowerCase())||j.description.toLowerCase().includes(K.toLowerCase()),ie=xe.length===0||xe.some(ve=>j.tags.includes(ve));return fe&&ie}).sort((j,fe)=>de==="asc"?j.title.localeCompare(fe.title):fe.title.localeCompare(j.title));return l.jsxs("div",{className:"space-y-4 max-w-3xl",children:[l.jsxs("div",{className:"text-gray-500 text-sm font-medium mb-6",children:[re.length," ressource",re.length>1?"s":""]}),re.length===0?l.jsx("div",{className:"text-center py-12",children:l.jsx("p",{className:"text-gray-400",children:"Aucune ressource trouvée"})}):re.map((j,fe)=>l.jsx("a",{href:j.url,id:j.id,...j.isInternal?{}:{target:"_blank",rel:"noopener noreferrer"},className:"block bg-zinc-900/50 border border-zinc-800 p-4 hover:border-zinc-700 transition-colors",children:l.jsxs("div",{className:"flex items-center gap-3",children:[j.tags.includes("PyonPix")?l.jsx(Cx,{className:"w-6 h-6 text-white flex-shrink-0"}):j.title==="Listingway"?l.jsx(oS,{className:"w-6 h-6 text-white flex-shrink-0"}):l.jsx(Jp,{className:"w-6 h-6 text-white flex-shrink-0"}),l.jsxs("div",{className:"flex-1",children:[l.jsx("h3",{className:"text-white font-semibold",children:j.title}),l.jsx("p",{className:"text-gray-400 text-sm mb-2",children:j.description}),j.tags.length>0&&l.jsx("div",{className:"flex flex-wrap gap-1 mb-2",children:j.tags.map(ie=>l.jsx("span",{className:"inline-block bg-zinc-800 text-gray-300 text-xs px-2 py-1 rounded",children:ie},ie))}),j.requiresPyonPix&&l.jsxs("div",{className:"text-xs text-cyan-400/80 mt-2 pt-2 border-t border-zinc-800/50",children:[l.jsx("span",{className:"opacity-60",children:"PRÉREQUIS //"})," Nécessite le plugin"," ",l.jsx("button",{onClick:ie=>{ie.preventDefault(),ie.stopPropagation(),navigator.clipboard.writeText("https://raw.githubusercontent.com/priprii/FFXIVPlugins/main/repo.json"),O(!0),setTimeout(()=>O(!1),4e3)},className:"inline-flex items-center px-2 py-0.5 bg-cyan-500/20 border border-cyan-500/40 rounded text-cyan-300 hover:bg-cyan-500/30 hover:border-cyan-500/60 transition-all",children:"PyonPix"})," ","par Pyon"]})]})]})},fe))]})})()]})})]}),n&&n.title==="ÉVÉNEMENTS"&&l.jsxs("div",{className:"fixed inset-0 bg-black z-50 overflow-y-auto flex flex-col relative",children:[l.jsx(Mr,{}),l.jsx("div",{className:"flex-grow relative z-10",children:l.jsxs("div",{className:"max-w-7xl mx-auto p-8 pb-16",children:[l.jsxs("button",{onClick:()=>{window.location.hash="",i(null)},className:"flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 mb-8 group",children:[l.jsx(Kn,{className:"w-5 h-5"}),l.jsx("span",{children:"Retour"})]}),l.jsxs("header",{className:"mb-8 text-center",children:[l.jsx("h1",{className:"text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white tracking-[0.15em] mb-4 drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]",children:"ÉVÉNEMENTS"}),l.jsxs("div",{className:"flex items-center justify-center gap-4",children:[l.jsx("div",{className:"h-px w-12 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"}),l.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-cyan-500/80 shadow-[0_0_8px_rgba(6,182,212,0.6)]"}),l.jsx("div",{className:"h-px w-12 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"})]})]}),l.jsx(q2,{filters:Z,onFiltersChange:ge}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 lg:h-[700px]",children:[l.jsx("div",{className:"lg:col-span-2 h-full",children:l.jsx(j2,{events:nm,filters:Z,onDayClick:(F,re)=>{oe(F),se(re)}})}),l.jsx("div",{className:"lg:col-span-1 h-full",children:l.jsx(G2,{events:nm,filters:Z,onEventClick:F=>$(F)})})]}),U&&l.jsx(W2,{events:U,date:ce,onClose:()=>{oe(null),se(null)},onEventClick:F=>{$(F)}}),k&&l.jsx(X2,{event:k,onClose:()=>$(null)})]})})]}),n&&n.title==="RÉSEAUX"&&l.jsxs("div",{className:"fixed inset-0 bg-black z-50 overflow-y-auto flex flex-col relative",children:[l.jsx(Mr,{}),l.jsx("div",{className:"flex-grow relative z-10",children:l.jsxs("div",{className:"max-w-7xl mx-auto p-8 pb-16",children:[l.jsxs("button",{onClick:()=>{window.location.hash="",i(null)},className:"flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 mb-8 group",children:[l.jsx(Kn,{className:"w-5 h-5"}),l.jsx("span",{children:"Retour"})]}),l.jsxs("div",{className:"text-center mb-8",children:[l.jsx("h1",{className:"text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white tracking-[0.15em] mb-4 drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]",children:"RÉSEAUX"}),l.jsxs("div",{className:"flex items-center justify-center gap-4",children:[l.jsx("div",{className:"h-px w-12 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"}),l.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-cyan-500/80 shadow-[0_0_8px_rgba(6,182,212,0.6)]"}),l.jsx("div",{className:"h-px w-12 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"})]})]}),l.jsxs("div",{className:"text-gray-500 text-sm font-medium mb-6",children:[ji.length," réseau",ji.length>1?"x":""]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:ji.map(F=>l.jsx("button",{onClick:()=>{T(F),window.location.hash=F.name.toLowerCase()},className:"bg-zinc-900/50 border border-zinc-800 p-6 hover:border-zinc-700 transition-colors text-left w-full",children:l.jsxs("div",{className:"flex flex-col items-center text-center gap-4",children:[l.jsx("img",{src:F.logo,alt:F.name,className:"h-12 max-w-24 object-contain"}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-bold text-white",children:F.name}),F.equivalent&&l.jsxs("p",{className:"text-gray-500 text-xs mt-1",children:["(",F.equivalent,")"]})]}),l.jsx("p",{className:"text-gray-400 text-sm",children:F.description}),l.jsx("p",{className:"text-blue-400 text-xs mt-2",children:"Créer un post →"})]})},F.id))}),ji.length===0&&l.jsx("div",{className:"text-center py-12",children:l.jsx("p",{className:"text-gray-500",children:"Aucun réseau disponible pour le moment"})})]})})]}),S&&S.name==="Neolens"&&l.jsx(p1,{neolensPost:me,setNeolensPost:he,onBack:()=>{T(null),window.location.hash="reseaux"},isDragging:je,setIsDragging:Xe,dragStart:Ye,setDragStart:Je,isDraggingAvatar:Ke,setIsDraggingAvatar:et,dragStartAvatar:B,setDragStartAvatar:tt,showComments:qe,setShowComments:D,showMentions:y,setShowMentions:H}),S&&S.name==="Holofans"&&l.jsx(m1,{holofansPost:Pe,setHolofansPost:Se,onBack:()=>{T(null),window.location.hash="reseaux"},isDragging:je,setIsDragging:Xe,dragStart:Ye,setDragStart:Je,isDraggingAvatar:Ke,setIsDraggingAvatar:et,dragStartAvatar:B,setDragStartAvatar:tt,showComments:qe,setShowComments:D}),S&&S.name==="Ping"&&l.jsx(x1,{pingPost:Ae,setPingPost:Be,onBack:()=>{T(null),window.location.hash="reseaux"},isDragging:je,setIsDragging:Xe,dragStart:Ye,setDragStart:Je,isDraggingAvatar:Ke,setIsDraggingAvatar:et,dragStartAvatar:B,setDragStartAvatar:tt,showComments:qe,setShowComments:D}),n&&n.title!=="ANNUAIRE"&&n.title!=="ARTISTES"&&n.title!=="ÉVÉNEMENTS"&&n.title!=="RÉSEAUX"&&n.title!=="RESSOURCES"&&l.jsxs("div",{className:"fixed inset-0 bg-black z-50 overflow-y-auto flex flex-col relative",children:[l.jsx(Mr,{}),l.jsx("div",{className:"flex-grow relative z-10",children:l.jsxs("div",{className:"max-w-7xl mx-auto p-8 pb-16",children:[l.jsxs("button",{onClick:()=>{window.location.hash="",i(null)},className:"flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 mb-8 group",children:[l.jsx(Kn,{className:"w-5 h-5"}),l.jsx("span",{children:"Retour"})]}),l.jsx("h1",{className:"text-4xl font-bold text-white mb-6",children:n.title}),l.jsx("div",{className:"text-center py-12",children:l.jsx("p",{className:"text-gray-500",children:"Aucun contenu disponible pour le moment"})})]})})]}),N&&l.jsx(U2,{onBack:()=>{P(!1),window.location.hash=""}}),g&&l.jsx(F2,{onBack:()=>{R(!1),window.location.hash=""}}),A&&l.jsx(k2,{onBack:()=>{I(!1),window.location.hash=""}}),z&&l.jsx(z2,{}),ne&&l.jsx(O2,{onBack:()=>{V(!1),window.location.hash="coven"}}),Q&&l.jsx(B2,{}),b&&l.jsx(H2,{onBack:()=>{w(!1),window.location.hash=""}})]})}),L&&l.jsx("div",{className:"fixed bottom-8 right-8 z-[100] transition-all duration-300 ease-out",children:l.jsx("div",{className:"bg-zinc-900 border border-cyan-500/40 rounded-lg p-4 shadow-[0_0_30px_rgba(6,182,212,0.3)] backdrop-blur-sm min-w-[280px]",children:l.jsxs("div",{className:"flex items-start gap-3",children:[l.jsx("div",{className:"flex-shrink-0 w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center mt-0.5",children:l.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-cyan-400",children:l.jsx("polyline",{points:"20 6 9 17 4 12"})})}),l.jsxs("div",{className:"flex-1",children:[l.jsx("h4",{className:"text-white font-semibold text-sm mb-1",children:"Lien copié dans le presse-papier"}),l.jsxs("p",{className:"text-gray-400 text-xs",children:["Collez ce lien dans",l.jsx("br",{}),l.jsx("span",{className:"text-cyan-400",children:"Dalamud > Settings > Experimental"})]})]})]})})}),!S&&!N&&!g&&!A&&!z&&!ne&&!Q&&!b&&l.jsx($2,{})]})}Pu.createRoot(document.getElementById("root")).render(l.jsx(Vv.StrictMode,{children:l.jsx(Y2,{})}));
