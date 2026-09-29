(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function g0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var x0={exports:{}},Zl={},v0={exports:{}},at={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var no=Symbol.for("react.element"),Rv=Symbol.for("react.portal"),Nv=Symbol.for("react.fragment"),Lv=Symbol.for("react.strict_mode"),Pv=Symbol.for("react.profiler"),Dv=Symbol.for("react.provider"),Iv=Symbol.for("react.context"),Uv=Symbol.for("react.forward_ref"),Fv=Symbol.for("react.suspense"),kv=Symbol.for("react.memo"),Ov=Symbol.for("react.lazy"),qh=Symbol.iterator;function zv(t){return t===null||typeof t!="object"?null:(t=qh&&t[qh]||t["@@iterator"],typeof t=="function"?t:null)}var _0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y0=Object.assign,S0={};function Zs(t,e,n){this.props=t,this.context=e,this.refs=S0,this.updater=n||_0}Zs.prototype.isReactComponent={};Zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function w0(){}w0.prototype=Zs.prototype;function yf(t,e,n){this.props=t,this.context=e,this.refs=S0,this.updater=n||_0}var Sf=yf.prototype=new w0;Sf.constructor=yf;y0(Sf,Zs.prototype);Sf.isPureReactComponent=!0;var $h=Array.isArray,M0=Object.prototype.hasOwnProperty,wf={current:null},b0={key:!0,ref:!0,__self:!0,__source:!0};function E0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)M0.call(e,i)&&!b0.hasOwnProperty(i)&&(r[i]=e[i]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];r.children=c}if(t&&t.defaultProps)for(i in l=t.defaultProps,l)r[i]===void 0&&(r[i]=l[i]);return{$$typeof:no,type:t,key:s,ref:a,props:r,_owner:wf.current}}function Bv(t,e){return{$$typeof:no,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Mf(t){return typeof t=="object"&&t!==null&&t.$$typeof===no}function jv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Yh=/\/+/g;function yc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?jv(""+t.key):e.toString(36)}function nl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case no:case Rv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+yc(a,0):i,$h(r)?(n="",t!=null&&(n=t.replace(Yh,"$&/")+"/"),nl(r,e,n,"",function(u){return u})):r!=null&&(Mf(r)&&(r=Bv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Yh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",$h(t))for(var l=0;l<t.length;l++){s=t[l];var c=i+yc(s,l);a+=nl(s,e,n,c,r)}else if(c=zv(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=i+yc(s,l++),a+=nl(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function po(t,e,n){if(t==null)return t;var i=[],r=0;return nl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Vv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var fn={current:null},il={transition:null},Hv={ReactCurrentDispatcher:fn,ReactCurrentBatchConfig:il,ReactCurrentOwner:wf};function T0(){throw Error("act(...) is not supported in production builds of React.")}at.Children={map:po,forEach:function(t,e,n){po(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return po(t,function(){e++}),e},toArray:function(t){return po(t,function(e){return e})||[]},only:function(t){if(!Mf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};at.Component=Zs;at.Fragment=Nv;at.Profiler=Pv;at.PureComponent=yf;at.StrictMode=Lv;at.Suspense=Fv;at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hv;at.act=T0;at.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=y0({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=wf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)M0.call(e,c)&&!b0.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}return{$$typeof:no,type:t.type,key:r,ref:s,props:i,_owner:a}};at.createContext=function(t){return t={$$typeof:Iv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Dv,_context:t},t.Consumer=t};at.createElement=E0;at.createFactory=function(t){var e=E0.bind(null,t);return e.type=t,e};at.createRef=function(){return{current:null}};at.forwardRef=function(t){return{$$typeof:Uv,render:t}};at.isValidElement=Mf;at.lazy=function(t){return{$$typeof:Ov,_payload:{_status:-1,_result:t},_init:Vv}};at.memo=function(t,e){return{$$typeof:kv,type:t,compare:e===void 0?null:e}};at.startTransition=function(t){var e=il.transition;il.transition={};try{t()}finally{il.transition=e}};at.unstable_act=T0;at.useCallback=function(t,e){return fn.current.useCallback(t,e)};at.useContext=function(t){return fn.current.useContext(t)};at.useDebugValue=function(){};at.useDeferredValue=function(t){return fn.current.useDeferredValue(t)};at.useEffect=function(t,e){return fn.current.useEffect(t,e)};at.useId=function(){return fn.current.useId()};at.useImperativeHandle=function(t,e,n){return fn.current.useImperativeHandle(t,e,n)};at.useInsertionEffect=function(t,e){return fn.current.useInsertionEffect(t,e)};at.useLayoutEffect=function(t,e){return fn.current.useLayoutEffect(t,e)};at.useMemo=function(t,e){return fn.current.useMemo(t,e)};at.useReducer=function(t,e,n){return fn.current.useReducer(t,e,n)};at.useRef=function(t){return fn.current.useRef(t)};at.useState=function(t){return fn.current.useState(t)};at.useSyncExternalStore=function(t,e,n){return fn.current.useSyncExternalStore(t,e,n)};at.useTransition=function(){return fn.current.useTransition()};at.version="18.3.1";v0.exports=at;var K=v0.exports;const Gv=g0(K);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv=K,Xv=Symbol.for("react.element"),qv=Symbol.for("react.fragment"),$v=Object.prototype.hasOwnProperty,Yv=Wv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Kv={key:!0,ref:!0,__self:!0,__source:!0};function C0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)$v.call(e,i)&&!Kv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Xv,type:t,key:s,ref:a,props:r,_owner:Yv.current}}Zl.Fragment=qv;Zl.jsx=C0;Zl.jsxs=C0;x0.exports=Zl;var o=x0.exports,Lu={},A0={exports:{}},Ln={},R0={exports:{}},N0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,M){var I=b.length;b.push(M);e:for(;0<I;){var k=I-1>>>1,F=b[k];if(0<r(F,M))b[k]=M,b[I]=F,I=k;else break e}}function n(b){return b.length===0?null:b[0]}function i(b){if(b.length===0)return null;var M=b[0],I=b.pop();if(I!==M){b[0]=I;e:for(var k=0,F=b.length,he=F>>>1;k<he;){var pe=2*(k+1)-1,oe=b[pe],j=pe+1,ie=b[j];if(0>r(oe,I))j<F&&0>r(ie,oe)?(b[k]=ie,b[j]=I,k=j):(b[k]=oe,b[pe]=I,k=pe);else if(j<F&&0>r(ie,I))b[k]=ie,b[j]=I,k=j;else break e}}return M}function r(b,M){var I=b.sortIndex-M.sortIndex;return I!==0?I:b.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var c=[],u=[],h=1,p=null,f=3,m=!1,_=!1,E=!1,x=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(b){for(var M=n(u);M!==null;){if(M.callback===null)i(u);else if(M.startTime<=b)i(u),M.sortIndex=M.expirationTime,e(c,M);else break;M=n(u)}}function y(b){if(E=!1,w(b),!_)if(n(c)!==null)_=!0,Q(T);else{var M=n(u);M!==null&&q(y,M.startTime-b)}}function T(b,M){_=!1,E&&(E=!1,d(g),g=-1),m=!0;var I=f;try{for(w(M),p=n(c);p!==null&&(!(p.expirationTime>M)||b&&!D());){var k=p.callback;if(typeof k=="function"){p.callback=null,f=p.priorityLevel;var F=k(p.expirationTime<=M);M=t.unstable_now(),typeof F=="function"?p.callback=F:p===n(c)&&i(c),w(M)}else i(c);p=n(c)}if(p!==null)var he=!0;else{var pe=n(u);pe!==null&&q(y,pe.startTime-M),he=!1}return he}finally{p=null,f=I,m=!1}}var C=!1,L=null,g=-1,R=5,A=-1;function D(){return!(t.unstable_now()-A<R)}function B(){if(L!==null){var b=t.unstable_now();A=b;var M=!0;try{M=L(!0,b)}finally{M?W():(C=!1,L=null)}}else C=!1}var W;if(typeof v=="function")W=function(){v(B)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,H=te.port2;te.port1.onmessage=B,W=function(){H.postMessage(null)}}else W=function(){x(B,0)};function Q(b){L=b,C||(C=!0,W())}function q(b,M){g=x(function(){b(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,Q(T))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(b){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var I=f;f=M;try{return b()}finally{f=I}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,M){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var I=f;f=b;try{return M()}finally{f=I}},t.unstable_scheduleCallback=function(b,M,I){var k=t.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?k+I:k):I=k,b){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=I+F,b={id:h++,callback:M,priorityLevel:b,startTime:I,expirationTime:F,sortIndex:-1},I>k?(b.sortIndex=I,e(u,b),n(c)===null&&b===n(u)&&(E?(d(g),g=-1):E=!0,q(y,I-k))):(b.sortIndex=F,e(c,b),_||m||(_=!0,Q(T))),b},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(b){var M=f;return function(){var I=f;f=M;try{return b.apply(this,arguments)}finally{f=I}}}})(N0);R0.exports=N0;var Zv=R0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qv=K,Nn=Zv;function Re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var L0=new Set,Ua={};function Yr(t,e){Bs(t,e),Bs(t+"Capture",e)}function Bs(t,e){for(Ua[t]=e,t=0;t<e.length;t++)L0.add(e[t])}var Di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pu=Object.prototype.hasOwnProperty,Jv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kh={},Zh={};function e_(t){return Pu.call(Zh,t)?!0:Pu.call(Kh,t)?!1:Jv.test(t)?Zh[t]=!0:(Kh[t]=!0,!1)}function t_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function n_(t,e,n,i){if(e===null||typeof e>"u"||t_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$t[t]=new hn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$t[e]=new hn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$t[t]=new hn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$t[t]=new hn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$t[t]=new hn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$t[t]=new hn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$t[t]=new hn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$t[t]=new hn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$t[t]=new hn(t,5,!1,t.toLowerCase(),null,!1,!1)});var bf=/[\-:]([a-z])/g;function Ef(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bf,Ef);$t[e]=new hn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bf,Ef);$t[e]=new hn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bf,Ef);$t[e]=new hn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$t[t]=new hn(t,1,!1,t.toLowerCase(),null,!1,!1)});$t.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$t[t]=new hn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Tf(t,e,n,i){var r=$t.hasOwnProperty(e)?$t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(n_(e,n,r,i)&&(n=null),i||r===null?e_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var zi=Qv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mo=Symbol.for("react.element"),vs=Symbol.for("react.portal"),_s=Symbol.for("react.fragment"),Cf=Symbol.for("react.strict_mode"),Du=Symbol.for("react.profiler"),P0=Symbol.for("react.provider"),D0=Symbol.for("react.context"),Af=Symbol.for("react.forward_ref"),Iu=Symbol.for("react.suspense"),Uu=Symbol.for("react.suspense_list"),Rf=Symbol.for("react.memo"),Zi=Symbol.for("react.lazy"),I0=Symbol.for("react.offscreen"),Qh=Symbol.iterator;function na(t){return t===null||typeof t!="object"?null:(t=Qh&&t[Qh]||t["@@iterator"],typeof t=="function"?t:null)}var At=Object.assign,Sc;function xa(t){if(Sc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Sc=e&&e[1]||""}return`
`+Sc+t}var wc=!1;function Mc(t,e){if(!t||wc)return"";wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,l=s.length-1;1<=a&&0<=l&&r[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(r[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||r[a]!==s[l]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=l);break}}}finally{wc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xa(t):""}function i_(t){switch(t.tag){case 5:return xa(t.type);case 16:return xa("Lazy");case 13:return xa("Suspense");case 19:return xa("SuspenseList");case 0:case 2:case 15:return t=Mc(t.type,!1),t;case 11:return t=Mc(t.type.render,!1),t;case 1:return t=Mc(t.type,!0),t;default:return""}}function Fu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case _s:return"Fragment";case vs:return"Portal";case Du:return"Profiler";case Cf:return"StrictMode";case Iu:return"Suspense";case Uu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case D0:return(t.displayName||"Context")+".Consumer";case P0:return(t._context.displayName||"Context")+".Provider";case Af:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rf:return e=t.displayName||null,e!==null?e:Fu(t.type)||"Memo";case Zi:e=t._payload,t=t._init;try{return Fu(t(e))}catch{}}return null}function r_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Fu(e);case 8:return e===Cf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function U0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function s_(t){var e=U0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function go(t){t._valueTracker||(t._valueTracker=s_(t))}function F0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=U0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function _l(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ku(t,e){var n=e.checked;return At({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Jh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function k0(t,e){e=e.checked,e!=null&&Tf(t,"checked",e,!1)}function Ou(t,e){k0(t,e);var n=pr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?zu(t,e.type,n):e.hasOwnProperty("defaultValue")&&zu(t,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ep(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function zu(t,e,n){(e!=="number"||_l(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var va=Array.isArray;function Ns(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+pr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Bu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(Re(91));return At({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function tp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(Re(92));if(va(n)){if(1<n.length)throw Error(Re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pr(n)}}function O0(t,e){var n=pr(e.value),i=pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function np(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function z0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ju(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?z0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var xo,B0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(xo=xo||document.createElement("div"),xo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=xo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Fa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ma={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},a_=["Webkit","ms","Moz","O"];Object.keys(Ma).forEach(function(t){a_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ma[e]=Ma[t]})});function j0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ma.hasOwnProperty(t)&&Ma[t]?(""+e).trim():e+"px"}function V0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=j0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var o_=At({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vu(t,e){if(e){if(o_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(Re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(Re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(Re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(Re(62))}}function Hu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gu=null;function Nf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Wu=null,Ls=null,Ps=null;function ip(t){if(t=so(t)){if(typeof Wu!="function")throw Error(Re(280));var e=t.stateNode;e&&(e=nc(e),Wu(t.stateNode,t.type,e))}}function H0(t){Ls?Ps?Ps.push(t):Ps=[t]:Ls=t}function G0(){if(Ls){var t=Ls,e=Ps;if(Ps=Ls=null,ip(t),e)for(t=0;t<e.length;t++)ip(e[t])}}function W0(t,e){return t(e)}function X0(){}var bc=!1;function q0(t,e,n){if(bc)return t(e,n);bc=!0;try{return W0(t,e,n)}finally{bc=!1,(Ls!==null||Ps!==null)&&(X0(),G0())}}function ka(t,e){var n=t.stateNode;if(n===null)return null;var i=nc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(Re(231,e,typeof n));return n}var Xu=!1;if(Di)try{var ia={};Object.defineProperty(ia,"passive",{get:function(){Xu=!0}}),window.addEventListener("test",ia,ia),window.removeEventListener("test",ia,ia)}catch{Xu=!1}function l_(t,e,n,i,r,s,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var ba=!1,yl=null,Sl=!1,qu=null,c_={onError:function(t){ba=!0,yl=t}};function u_(t,e,n,i,r,s,a,l,c){ba=!1,yl=null,l_.apply(c_,arguments)}function d_(t,e,n,i,r,s,a,l,c){if(u_.apply(this,arguments),ba){if(ba){var u=yl;ba=!1,yl=null}else throw Error(Re(198));Sl||(Sl=!0,qu=u)}}function Kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function rp(t){if(Kr(t)!==t)throw Error(Re(188))}function f_(t){var e=t.alternate;if(!e){if(e=Kr(t),e===null)throw Error(Re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return rp(r),t;if(s===i)return rp(r),e;s=s.sibling}throw Error(Re(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,l=r.child;l;){if(l===n){a=!0,n=r,i=s;break}if(l===i){a=!0,i=r,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,i=r;break}if(l===i){a=!0,i=s,n=r;break}l=l.sibling}if(!a)throw Error(Re(189))}}if(n.alternate!==i)throw Error(Re(190))}if(n.tag!==3)throw Error(Re(188));return n.stateNode.current===n?t:e}function Y0(t){return t=f_(t),t!==null?K0(t):null}function K0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=K0(t);if(e!==null)return e;t=t.sibling}return null}var Z0=Nn.unstable_scheduleCallback,sp=Nn.unstable_cancelCallback,h_=Nn.unstable_shouldYield,p_=Nn.unstable_requestPaint,It=Nn.unstable_now,m_=Nn.unstable_getCurrentPriorityLevel,Lf=Nn.unstable_ImmediatePriority,Q0=Nn.unstable_UserBlockingPriority,wl=Nn.unstable_NormalPriority,g_=Nn.unstable_LowPriority,J0=Nn.unstable_IdlePriority,Ql=null,hi=null;function x_(t){if(hi&&typeof hi.onCommitFiberRoot=="function")try{hi.onCommitFiberRoot(Ql,t,void 0,(t.current.flags&128)===128)}catch{}}var Jn=Math.clz32?Math.clz32:y_,v_=Math.log,__=Math.LN2;function y_(t){return t>>>=0,t===0?32:31-(v_(t)/__|0)|0}var vo=64,_o=4194304;function _a(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~r;l!==0?i=_a(l):(s&=a,s!==0&&(i=_a(s)))}else a=n&~r,a!==0?i=_a(a):s!==0&&(i=_a(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Jn(e),r=1<<n,i|=t[n],e&=~r;return i}function S_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function w_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Jn(s),l=1<<a,c=r[a];c===-1?(!(l&n)||l&i)&&(r[a]=S_(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function $u(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function eg(){var t=vo;return vo<<=1,!(vo&4194240)&&(vo=64),t}function Ec(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function io(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jn(e),t[e]=n}function M_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Pf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var mt=0;function tg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ng,Df,ig,rg,sg,Yu=!1,yo=[],sr=null,ar=null,or=null,Oa=new Map,za=new Map,Ji=[],b_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ap(t,e){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":Oa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":za.delete(e.pointerId)}}function ra(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=so(e),e!==null&&Df(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function E_(t,e,n,i,r){switch(e){case"focusin":return sr=ra(sr,t,e,n,i,r),!0;case"dragenter":return ar=ra(ar,t,e,n,i,r),!0;case"mouseover":return or=ra(or,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Oa.set(s,ra(Oa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,za.set(s,ra(za.get(s)||null,t,e,n,i,r)),!0}return!1}function ag(t){var e=Pr(t.target);if(e!==null){var n=Kr(e);if(n!==null){if(e=n.tag,e===13){if(e=$0(n),e!==null){t.blockedOn=e,sg(t.priority,function(){ig(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ku(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Gu=i,n.target.dispatchEvent(i),Gu=null}else return e=so(n),e!==null&&Df(e),t.blockedOn=n,!1;e.shift()}return!0}function op(t,e,n){rl(t)&&n.delete(e)}function T_(){Yu=!1,sr!==null&&rl(sr)&&(sr=null),ar!==null&&rl(ar)&&(ar=null),or!==null&&rl(or)&&(or=null),Oa.forEach(op),za.forEach(op)}function sa(t,e){t.blockedOn===e&&(t.blockedOn=null,Yu||(Yu=!0,Nn.unstable_scheduleCallback(Nn.unstable_NormalPriority,T_)))}function Ba(t){function e(r){return sa(r,t)}if(0<yo.length){sa(yo[0],t);for(var n=1;n<yo.length;n++){var i=yo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(sr!==null&&sa(sr,t),ar!==null&&sa(ar,t),or!==null&&sa(or,t),Oa.forEach(e),za.forEach(e),n=0;n<Ji.length;n++)i=Ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ji.length&&(n=Ji[0],n.blockedOn===null);)ag(n),n.blockedOn===null&&Ji.shift()}var Ds=zi.ReactCurrentBatchConfig,bl=!0;function C_(t,e,n,i){var r=mt,s=Ds.transition;Ds.transition=null;try{mt=1,If(t,e,n,i)}finally{mt=r,Ds.transition=s}}function A_(t,e,n,i){var r=mt,s=Ds.transition;Ds.transition=null;try{mt=4,If(t,e,n,i)}finally{mt=r,Ds.transition=s}}function If(t,e,n,i){if(bl){var r=Ku(t,e,n,i);if(r===null)Uc(t,e,i,El,n),ap(t,i);else if(E_(r,t,e,n,i))i.stopPropagation();else if(ap(t,i),e&4&&-1<b_.indexOf(t)){for(;r!==null;){var s=so(r);if(s!==null&&ng(s),s=Ku(t,e,n,i),s===null&&Uc(t,e,i,El,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Uc(t,e,i,null,n)}}var El=null;function Ku(t,e,n,i){if(El=null,t=Nf(i),t=Pr(t),t!==null)if(e=Kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return El=t,null}function og(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(m_()){case Lf:return 1;case Q0:return 4;case wl:case g_:return 16;case J0:return 536870912;default:return 16}default:return 16}}var nr=null,Uf=null,sl=null;function lg(){if(sl)return sl;var t,e=Uf,n=e.length,i,r="value"in nr?nr.value:nr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return sl=r.slice(t,1<i?1-i:void 0)}function al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function So(){return!0}function lp(){return!1}function Pn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?So:lp,this.isPropagationStopped=lp,this}return At(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=So)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=So)},persist:function(){},isPersistent:So}),e}var Qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ff=Pn(Qs),ro=At({},Qs,{view:0,detail:0}),R_=Pn(ro),Tc,Cc,aa,Jl=At({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==aa&&(aa&&t.type==="mousemove"?(Tc=t.screenX-aa.screenX,Cc=t.screenY-aa.screenY):Cc=Tc=0,aa=t),Tc)},movementY:function(t){return"movementY"in t?t.movementY:Cc}}),cp=Pn(Jl),N_=At({},Jl,{dataTransfer:0}),L_=Pn(N_),P_=At({},ro,{relatedTarget:0}),Ac=Pn(P_),D_=At({},Qs,{animationName:0,elapsedTime:0,pseudoElement:0}),I_=Pn(D_),U_=At({},Qs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),F_=Pn(U_),k_=At({},Qs,{data:0}),up=Pn(k_),O_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},B_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function j_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=B_[t])?!!e[t]:!1}function kf(){return j_}var V_=At({},ro,{key:function(t){if(t.key){var e=O_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?z_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kf,charCode:function(t){return t.type==="keypress"?al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),H_=Pn(V_),G_=At({},Jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dp=Pn(G_),W_=At({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kf}),X_=Pn(W_),q_=At({},Qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),$_=Pn(q_),Y_=At({},Jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),K_=Pn(Y_),Z_=[9,13,27,32],Of=Di&&"CompositionEvent"in window,Ea=null;Di&&"documentMode"in document&&(Ea=document.documentMode);var Q_=Di&&"TextEvent"in window&&!Ea,cg=Di&&(!Of||Ea&&8<Ea&&11>=Ea),fp=" ",hp=!1;function ug(t,e){switch(t){case"keyup":return Z_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ys=!1;function J_(t,e){switch(t){case"compositionend":return dg(e);case"keypress":return e.which!==32?null:(hp=!0,fp);case"textInput":return t=e.data,t===fp&&hp?null:t;default:return null}}function ey(t,e){if(ys)return t==="compositionend"||!Of&&ug(t,e)?(t=lg(),sl=Uf=nr=null,ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cg&&e.locale!=="ko"?null:e.data;default:return null}}var ty={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ty[t.type]:e==="textarea"}function fg(t,e,n,i){H0(i),e=Tl(e,"onChange"),0<e.length&&(n=new Ff("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ta=null,ja=null;function ny(t){Mg(t,0)}function ec(t){var e=Ms(t);if(F0(e))return t}function iy(t,e){if(t==="change")return e}var hg=!1;if(Di){var Rc;if(Di){var Nc="oninput"in document;if(!Nc){var mp=document.createElement("div");mp.setAttribute("oninput","return;"),Nc=typeof mp.oninput=="function"}Rc=Nc}else Rc=!1;hg=Rc&&(!document.documentMode||9<document.documentMode)}function gp(){Ta&&(Ta.detachEvent("onpropertychange",pg),ja=Ta=null)}function pg(t){if(t.propertyName==="value"&&ec(ja)){var e=[];fg(e,ja,t,Nf(t)),q0(ny,e)}}function ry(t,e,n){t==="focusin"?(gp(),Ta=e,ja=n,Ta.attachEvent("onpropertychange",pg)):t==="focusout"&&gp()}function sy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ec(ja)}function ay(t,e){if(t==="click")return ec(e)}function oy(t,e){if(t==="input"||t==="change")return ec(e)}function ly(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ti=typeof Object.is=="function"?Object.is:ly;function Va(t,e){if(ti(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Pu.call(e,r)||!ti(t[r],e[r]))return!1}return!0}function xp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vp(t,e){var n=xp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xp(n)}}function mg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?mg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function gg(){for(var t=window,e=_l();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=_l(t.document)}return e}function zf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function cy(t){var e=gg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&mg(n.ownerDocument.documentElement,n)){if(i!==null&&zf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=vp(n,s);var a=vp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var uy=Di&&"documentMode"in document&&11>=document.documentMode,Ss=null,Zu=null,Ca=null,Qu=!1;function _p(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qu||Ss==null||Ss!==_l(i)||(i=Ss,"selectionStart"in i&&zf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ca&&Va(Ca,i)||(Ca=i,i=Tl(Zu,"onSelect"),0<i.length&&(e=new Ff("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ss)))}function wo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ws={animationend:wo("Animation","AnimationEnd"),animationiteration:wo("Animation","AnimationIteration"),animationstart:wo("Animation","AnimationStart"),transitionend:wo("Transition","TransitionEnd")},Lc={},xg={};Di&&(xg=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function tc(t){if(Lc[t])return Lc[t];if(!ws[t])return t;var e=ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in xg)return Lc[t]=e[n];return t}var vg=tc("animationend"),_g=tc("animationiteration"),yg=tc("animationstart"),Sg=tc("transitionend"),wg=new Map,yp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(t,e){wg.set(t,e),Yr(e,[t])}for(var Pc=0;Pc<yp.length;Pc++){var Dc=yp[Pc],dy=Dc.toLowerCase(),fy=Dc[0].toUpperCase()+Dc.slice(1);vr(dy,"on"+fy)}vr(vg,"onAnimationEnd");vr(_g,"onAnimationIteration");vr(yg,"onAnimationStart");vr("dblclick","onDoubleClick");vr("focusin","onFocus");vr("focusout","onBlur");vr(Sg,"onTransitionEnd");Bs("onMouseEnter",["mouseout","mouseover"]);Bs("onMouseLeave",["mouseout","mouseover"]);Bs("onPointerEnter",["pointerout","pointerover"]);Bs("onPointerLeave",["pointerout","pointerover"]);Yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ya="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hy=new Set("cancel close invalid load scroll toggle".split(" ").concat(ya));function Sp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,d_(i,e,void 0,t),t.currentTarget=null}function Mg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var l=i[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&r.isPropagationStopped())break e;Sp(r,l,u),s=c}else for(a=0;a<i.length;a++){if(l=i[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&r.isPropagationStopped())break e;Sp(r,l,u),s=c}}}if(Sl)throw t=qu,Sl=!1,qu=null,t}function wt(t,e){var n=e[id];n===void 0&&(n=e[id]=new Set);var i=t+"__bubble";n.has(i)||(bg(e,t,2,!1),n.add(i))}function Ic(t,e,n){var i=0;e&&(i|=4),bg(n,t,i,e)}var Mo="_reactListening"+Math.random().toString(36).slice(2);function Ha(t){if(!t[Mo]){t[Mo]=!0,L0.forEach(function(n){n!=="selectionchange"&&(hy.has(n)||Ic(n,!1,t),Ic(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Mo]||(e[Mo]=!0,Ic("selectionchange",!1,e))}}function bg(t,e,n,i){switch(og(e)){case 1:var r=C_;break;case 4:r=A_;break;default:r=If}n=r.bind(null,e,n,t),r=void 0,!Xu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Uc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var l=i.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;l!==null;){if(a=Pr(l),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}l=l.parentNode}}i=i.return}q0(function(){var u=s,h=Nf(n),p=[];e:{var f=wg.get(t);if(f!==void 0){var m=Ff,_=t;switch(t){case"keypress":if(al(n)===0)break e;case"keydown":case"keyup":m=H_;break;case"focusin":_="focus",m=Ac;break;case"focusout":_="blur",m=Ac;break;case"beforeblur":case"afterblur":m=Ac;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=L_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=X_;break;case vg:case _g:case yg:m=I_;break;case Sg:m=$_;break;case"scroll":m=R_;break;case"wheel":m=K_;break;case"copy":case"cut":case"paste":m=F_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=dp}var E=(e&4)!==0,x=!E&&t==="scroll",d=E?f!==null?f+"Capture":null:f;E=[];for(var v=u,w;v!==null;){w=v;var y=w.stateNode;if(w.tag===5&&y!==null&&(w=y,d!==null&&(y=ka(v,d),y!=null&&E.push(Ga(v,y,w)))),x)break;v=v.return}0<E.length&&(f=new m(f,_,null,n,h),p.push({event:f,listeners:E}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Gu&&(_=n.relatedTarget||n.fromElement)&&(Pr(_)||_[Ii]))break e;if((m||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=u,_=_?Pr(_):null,_!==null&&(x=Kr(_),_!==x||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=u),m!==_)){if(E=cp,y="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(E=dp,y="onPointerLeave",d="onPointerEnter",v="pointer"),x=m==null?f:Ms(m),w=_==null?f:Ms(_),f=new E(y,v+"leave",m,n,h),f.target=x,f.relatedTarget=w,y=null,Pr(h)===u&&(E=new E(d,v+"enter",_,n,h),E.target=w,E.relatedTarget=x,y=E),x=y,m&&_)t:{for(E=m,d=_,v=0,w=E;w;w=ts(w))v++;for(w=0,y=d;y;y=ts(y))w++;for(;0<v-w;)E=ts(E),v--;for(;0<w-v;)d=ts(d),w--;for(;v--;){if(E===d||d!==null&&E===d.alternate)break t;E=ts(E),d=ts(d)}E=null}else E=null;m!==null&&wp(p,f,m,E,!1),_!==null&&x!==null&&wp(p,x,_,E,!0)}}e:{if(f=u?Ms(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var T=iy;else if(pp(f))if(hg)T=oy;else{T=sy;var C=ry}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=ay);if(T&&(T=T(t,u))){fg(p,T,n,h);break e}C&&C(t,f,u),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&zu(f,"number",f.value)}switch(C=u?Ms(u):window,t){case"focusin":(pp(C)||C.contentEditable==="true")&&(Ss=C,Zu=u,Ca=null);break;case"focusout":Ca=Zu=Ss=null;break;case"mousedown":Qu=!0;break;case"contextmenu":case"mouseup":case"dragend":Qu=!1,_p(p,n,h);break;case"selectionchange":if(uy)break;case"keydown":case"keyup":_p(p,n,h)}var L;if(Of)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else ys?ug(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(cg&&n.locale!=="ko"&&(ys||g!=="onCompositionStart"?g==="onCompositionEnd"&&ys&&(L=lg()):(nr=h,Uf="value"in nr?nr.value:nr.textContent,ys=!0)),C=Tl(u,g),0<C.length&&(g=new up(g,t,null,n,h),p.push({event:g,listeners:C}),L?g.data=L:(L=dg(n),L!==null&&(g.data=L)))),(L=Q_?J_(t,n):ey(t,n))&&(u=Tl(u,"onBeforeInput"),0<u.length&&(h=new up("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=L))}Mg(p,e)})}function Ga(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Tl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ka(t,n),s!=null&&i.unshift(Ga(t,s,r)),s=ka(t,e),s!=null&&i.push(Ga(t,s,r))),t=t.return}return i}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function wp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===i)break;l.tag===5&&u!==null&&(l=u,r?(c=ka(n,s),c!=null&&a.unshift(Ga(n,c,l))):r||(c=ka(n,s),c!=null&&a.push(Ga(n,c,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var py=/\r\n?/g,my=/\u0000|\uFFFD/g;function Mp(t){return(typeof t=="string"?t:""+t).replace(py,`
`).replace(my,"")}function bo(t,e,n){if(e=Mp(e),Mp(t)!==e&&n)throw Error(Re(425))}function Cl(){}var Ju=null,ed=null;function td(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var nd=typeof setTimeout=="function"?setTimeout:void 0,gy=typeof clearTimeout=="function"?clearTimeout:void 0,bp=typeof Promise=="function"?Promise:void 0,xy=typeof queueMicrotask=="function"?queueMicrotask:typeof bp<"u"?function(t){return bp.resolve(null).then(t).catch(vy)}:nd;function vy(t){setTimeout(function(){throw t})}function Fc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ba(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ba(e)}function lr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ep(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Js=Math.random().toString(36).slice(2),ci="__reactFiber$"+Js,Wa="__reactProps$"+Js,Ii="__reactContainer$"+Js,id="__reactEvents$"+Js,_y="__reactListeners$"+Js,yy="__reactHandles$"+Js;function Pr(t){var e=t[ci];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ii]||n[ci]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ep(t);t!==null;){if(n=t[ci])return n;t=Ep(t)}return e}t=n,n=t.parentNode}return null}function so(t){return t=t[ci]||t[Ii],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(Re(33))}function nc(t){return t[Wa]||null}var rd=[],bs=-1;function _r(t){return{current:t}}function Mt(t){0>bs||(t.current=rd[bs],rd[bs]=null,bs--)}function yt(t,e){bs++,rd[bs]=t.current,t.current=e}var mr={},sn=_r(mr),xn=_r(!1),zr=mr;function js(t,e){var n=t.type.contextTypes;if(!n)return mr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function vn(t){return t=t.childContextTypes,t!=null}function Al(){Mt(xn),Mt(sn)}function Tp(t,e,n){if(sn.current!==mr)throw Error(Re(168));yt(sn,e),yt(xn,n)}function Eg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(Re(108,r_(t)||"Unknown",r));return At({},n,i)}function Rl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,zr=sn.current,yt(sn,t),yt(xn,xn.current),!0}function Cp(t,e,n){var i=t.stateNode;if(!i)throw Error(Re(169));n?(t=Eg(t,e,zr),i.__reactInternalMemoizedMergedChildContext=t,Mt(xn),Mt(sn),yt(sn,t)):Mt(xn),yt(xn,n)}var Ti=null,ic=!1,kc=!1;function Tg(t){Ti===null?Ti=[t]:Ti.push(t)}function Sy(t){ic=!0,Tg(t)}function yr(){if(!kc&&Ti!==null){kc=!0;var t=0,e=mt;try{var n=Ti;for(mt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ti=null,ic=!1}catch(r){throw Ti!==null&&(Ti=Ti.slice(t+1)),Z0(Lf,yr),r}finally{mt=e,kc=!1}}return null}var Es=[],Ts=0,Nl=null,Ll=0,Fn=[],kn=0,Br=null,Ci=1,Ai="";function Cr(t,e){Es[Ts++]=Ll,Es[Ts++]=Nl,Nl=t,Ll=e}function Cg(t,e,n){Fn[kn++]=Ci,Fn[kn++]=Ai,Fn[kn++]=Br,Br=t;var i=Ci;t=Ai;var r=32-Jn(i)-1;i&=~(1<<r),n+=1;var s=32-Jn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ci=1<<32-Jn(e)+r|n<<r|i,Ai=s+t}else Ci=1<<s|n<<r|i,Ai=t}function Bf(t){t.return!==null&&(Cr(t,1),Cg(t,1,0))}function jf(t){for(;t===Nl;)Nl=Es[--Ts],Es[Ts]=null,Ll=Es[--Ts],Es[Ts]=null;for(;t===Br;)Br=Fn[--kn],Fn[kn]=null,Ai=Fn[--kn],Fn[kn]=null,Ci=Fn[--kn],Fn[kn]=null}var Rn=null,An=null,bt=!1,Kn=null;function Ag(t,e){var n=Bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ap(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Rn=t,An=lr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Rn=t,An=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Br!==null?{id:Ci,overflow:Ai}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Rn=t,An=null,!0):!1;default:return!1}}function sd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ad(t){if(bt){var e=An;if(e){var n=e;if(!Ap(t,e)){if(sd(t))throw Error(Re(418));e=lr(n.nextSibling);var i=Rn;e&&Ap(t,e)?Ag(i,n):(t.flags=t.flags&-4097|2,bt=!1,Rn=t)}}else{if(sd(t))throw Error(Re(418));t.flags=t.flags&-4097|2,bt=!1,Rn=t}}}function Rp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Rn=t}function Eo(t){if(t!==Rn)return!1;if(!bt)return Rp(t),bt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!td(t.type,t.memoizedProps)),e&&(e=An)){if(sd(t))throw Rg(),Error(Re(418));for(;e;)Ag(t,e),e=lr(e.nextSibling)}if(Rp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(Re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){An=lr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}An=null}}else An=Rn?lr(t.stateNode.nextSibling):null;return!0}function Rg(){for(var t=An;t;)t=lr(t.nextSibling)}function Vs(){An=Rn=null,bt=!1}function Vf(t){Kn===null?Kn=[t]:Kn.push(t)}var wy=zi.ReactCurrentBatchConfig;function oa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(Re(309));var i=n.stateNode}if(!i)throw Error(Re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=r.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(Re(284));if(!n._owner)throw Error(Re(290,t))}return t}function To(t,e){throw t=Object.prototype.toString.call(e),Error(Re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Np(t){var e=t._init;return e(t._payload)}function Ng(t){function e(d,v){if(t){var w=d.deletions;w===null?(d.deletions=[v],d.flags|=16):w.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=fr(d,v),d.index=0,d.sibling=null,d}function s(d,v,w){return d.index=w,t?(w=d.alternate,w!==null?(w=w.index,w<v?(d.flags|=2,v):w):(d.flags|=2,v)):(d.flags|=1048576,v)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function l(d,v,w,y){return v===null||v.tag!==6?(v=Gc(w,d.mode,y),v.return=d,v):(v=r(v,w),v.return=d,v)}function c(d,v,w,y){var T=w.type;return T===_s?h(d,v,w.props.children,y,w.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Zi&&Np(T)===v.type)?(y=r(v,w.props),y.ref=oa(d,v,w),y.return=d,y):(y=hl(w.type,w.key,w.props,null,d.mode,y),y.ref=oa(d,v,w),y.return=d,y)}function u(d,v,w,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==w.containerInfo||v.stateNode.implementation!==w.implementation?(v=Wc(w,d.mode,y),v.return=d,v):(v=r(v,w.children||[]),v.return=d,v)}function h(d,v,w,y,T){return v===null||v.tag!==7?(v=Or(w,d.mode,y,T),v.return=d,v):(v=r(v,w),v.return=d,v)}function p(d,v,w){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Gc(""+v,d.mode,w),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case mo:return w=hl(v.type,v.key,v.props,null,d.mode,w),w.ref=oa(d,null,v),w.return=d,w;case vs:return v=Wc(v,d.mode,w),v.return=d,v;case Zi:var y=v._init;return p(d,y(v._payload),w)}if(va(v)||na(v))return v=Or(v,d.mode,w,null),v.return=d,v;To(d,v)}return null}function f(d,v,w,y){var T=v!==null?v.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return T!==null?null:l(d,v,""+w,y);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case mo:return w.key===T?c(d,v,w,y):null;case vs:return w.key===T?u(d,v,w,y):null;case Zi:return T=w._init,f(d,v,T(w._payload),y)}if(va(w)||na(w))return T!==null?null:h(d,v,w,y,null);To(d,w)}return null}function m(d,v,w,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(w)||null,l(v,d,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case mo:return d=d.get(y.key===null?w:y.key)||null,c(v,d,y,T);case vs:return d=d.get(y.key===null?w:y.key)||null,u(v,d,y,T);case Zi:var C=y._init;return m(d,v,w,C(y._payload),T)}if(va(y)||na(y))return d=d.get(w)||null,h(v,d,y,T,null);To(v,y)}return null}function _(d,v,w,y){for(var T=null,C=null,L=v,g=v=0,R=null;L!==null&&g<w.length;g++){L.index>g?(R=L,L=null):R=L.sibling;var A=f(d,L,w[g],y);if(A===null){L===null&&(L=R);break}t&&L&&A.alternate===null&&e(d,L),v=s(A,v,g),C===null?T=A:C.sibling=A,C=A,L=R}if(g===w.length)return n(d,L),bt&&Cr(d,g),T;if(L===null){for(;g<w.length;g++)L=p(d,w[g],y),L!==null&&(v=s(L,v,g),C===null?T=L:C.sibling=L,C=L);return bt&&Cr(d,g),T}for(L=i(d,L);g<w.length;g++)R=m(L,d,g,w[g],y),R!==null&&(t&&R.alternate!==null&&L.delete(R.key===null?g:R.key),v=s(R,v,g),C===null?T=R:C.sibling=R,C=R);return t&&L.forEach(function(D){return e(d,D)}),bt&&Cr(d,g),T}function E(d,v,w,y){var T=na(w);if(typeof T!="function")throw Error(Re(150));if(w=T.call(w),w==null)throw Error(Re(151));for(var C=T=null,L=v,g=v=0,R=null,A=w.next();L!==null&&!A.done;g++,A=w.next()){L.index>g?(R=L,L=null):R=L.sibling;var D=f(d,L,A.value,y);if(D===null){L===null&&(L=R);break}t&&L&&D.alternate===null&&e(d,L),v=s(D,v,g),C===null?T=D:C.sibling=D,C=D,L=R}if(A.done)return n(d,L),bt&&Cr(d,g),T;if(L===null){for(;!A.done;g++,A=w.next())A=p(d,A.value,y),A!==null&&(v=s(A,v,g),C===null?T=A:C.sibling=A,C=A);return bt&&Cr(d,g),T}for(L=i(d,L);!A.done;g++,A=w.next())A=m(L,d,g,A.value,y),A!==null&&(t&&A.alternate!==null&&L.delete(A.key===null?g:A.key),v=s(A,v,g),C===null?T=A:C.sibling=A,C=A);return t&&L.forEach(function(B){return e(d,B)}),bt&&Cr(d,g),T}function x(d,v,w,y){if(typeof w=="object"&&w!==null&&w.type===_s&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case mo:e:{for(var T=w.key,C=v;C!==null;){if(C.key===T){if(T=w.type,T===_s){if(C.tag===7){n(d,C.sibling),v=r(C,w.props.children),v.return=d,d=v;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Zi&&Np(T)===C.type){n(d,C.sibling),v=r(C,w.props),v.ref=oa(d,C,w),v.return=d,d=v;break e}n(d,C);break}else e(d,C);C=C.sibling}w.type===_s?(v=Or(w.props.children,d.mode,y,w.key),v.return=d,d=v):(y=hl(w.type,w.key,w.props,null,d.mode,y),y.ref=oa(d,v,w),y.return=d,d=y)}return a(d);case vs:e:{for(C=w.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===w.containerInfo&&v.stateNode.implementation===w.implementation){n(d,v.sibling),v=r(v,w.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=Wc(w,d.mode,y),v.return=d,d=v}return a(d);case Zi:return C=w._init,x(d,v,C(w._payload),y)}if(va(w))return _(d,v,w,y);if(na(w))return E(d,v,w,y);To(d,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,w),v.return=d,d=v):(n(d,v),v=Gc(w,d.mode,y),v.return=d,d=v),a(d)):n(d,v)}return x}var Hs=Ng(!0),Lg=Ng(!1),Pl=_r(null),Dl=null,Cs=null,Hf=null;function Gf(){Hf=Cs=Dl=null}function Wf(t){var e=Pl.current;Mt(Pl),t._currentValue=e}function od(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Is(t,e){Dl=t,Hf=Cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gn=!0),t.firstContext=null)}function Vn(t){var e=t._currentValue;if(Hf!==t)if(t={context:t,memoizedValue:e,next:null},Cs===null){if(Dl===null)throw Error(Re(308));Cs=t,Dl.dependencies={lanes:0,firstContext:t}}else Cs=Cs.next=t;return e}var Dr=null;function Xf(t){Dr===null?Dr=[t]:Dr.push(t)}function Pg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Xf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ui(t,i)}function Ui(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qi=!1;function qf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ni(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function cr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ht&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ui(t,n)}return r=i.interleaved,r===null?(e.next=e,Xf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ui(t,n)}function ol(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Pf(t,n)}}function Lp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Il(t,e,n,i){var r=t.updateQueue;Qi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var h=t.alternate;h!==null&&(h=h.updateQueue,l=h.lastBaseUpdate,l!==a&&(l===null?h.firstBaseUpdate=u:l.next=u,h.lastBaseUpdate=c))}if(s!==null){var p=r.baseState;a=0,h=u=c=null,l=s;do{var f=l.lane,m=l.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,E=l;switch(f=e,m=n,E.tag){case 1:if(_=E.payload,typeof _=="function"){p=_.call(m,p,f);break e}p=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=E.payload,f=typeof _=="function"?_.call(m,p,f):_,f==null)break e;p=At({},p,f);break e;case 2:Qi=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[l]:f.push(l))}else m={eventTime:m,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},h===null?(u=h=m,c=p):h=h.next=m,a|=f;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;f=l,l=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(c=p),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Vr|=a,t.lanes=a,t.memoizedState=p}}function Pp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(Re(191,r));r.call(i)}}}var ao={},pi=_r(ao),Xa=_r(ao),qa=_r(ao);function Ir(t){if(t===ao)throw Error(Re(174));return t}function $f(t,e){switch(yt(qa,e),yt(Xa,t),yt(pi,ao),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ju(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ju(e,t)}Mt(pi),yt(pi,e)}function Gs(){Mt(pi),Mt(Xa),Mt(qa)}function Ig(t){Ir(qa.current);var e=Ir(pi.current),n=ju(e,t.type);e!==n&&(yt(Xa,t),yt(pi,n))}function Yf(t){Xa.current===t&&(Mt(pi),Mt(Xa))}var Et=_r(0);function Ul(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Oc=[];function Kf(){for(var t=0;t<Oc.length;t++)Oc[t]._workInProgressVersionPrimary=null;Oc.length=0}var ll=zi.ReactCurrentDispatcher,zc=zi.ReactCurrentBatchConfig,jr=0,Ct=null,kt=null,Vt=null,Fl=!1,Aa=!1,$a=0,My=0;function Kt(){throw Error(Re(321))}function Zf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ti(t[n],e[n]))return!1;return!0}function Qf(t,e,n,i,r,s){if(jr=s,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ll.current=t===null||t.memoizedState===null?Cy:Ay,t=n(i,r),Aa){s=0;do{if(Aa=!1,$a=0,25<=s)throw Error(Re(301));s+=1,Vt=kt=null,e.updateQueue=null,ll.current=Ry,t=n(i,r)}while(Aa)}if(ll.current=kl,e=kt!==null&&kt.next!==null,jr=0,Vt=kt=Ct=null,Fl=!1,e)throw Error(Re(300));return t}function Jf(){var t=$a!==0;return $a=0,t}function oi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?Ct.memoizedState=Vt=t:Vt=Vt.next=t,Vt}function Hn(){if(kt===null){var t=Ct.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var e=Vt===null?Ct.memoizedState:Vt.next;if(e!==null)Vt=e,kt=t;else{if(t===null)throw Error(Re(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Vt===null?Ct.memoizedState=Vt=t:Vt=Vt.next=t}return Vt}function Ya(t,e){return typeof e=="function"?e(t):e}function Bc(t){var e=Hn(),n=e.queue;if(n===null)throw Error(Re(311));n.lastRenderedReducer=t;var i=kt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var l=a=null,c=null,u=s;do{var h=u.lane;if((jr&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,a=i):c=c.next=p,Ct.lanes|=h,Vr|=h}u=u.next}while(u!==null&&u!==s);c===null?a=i:c.next=l,ti(i,e.memoizedState)||(gn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ct.lanes|=s,Vr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function jc(t){var e=Hn(),n=e.queue;if(n===null)throw Error(Re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ti(s,e.memoizedState)||(gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Ug(){}function Fg(t,e){var n=Ct,i=Hn(),r=e(),s=!ti(i.memoizedState,r);if(s&&(i.memoizedState=r,gn=!0),i=i.queue,eh(zg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Vt!==null&&Vt.memoizedState.tag&1){if(n.flags|=2048,Ka(9,Og.bind(null,n,i,r,e),void 0,null),Ht===null)throw Error(Re(349));jr&30||kg(n,e,r)}return r}function kg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Og(t,e,n,i){e.value=n,e.getSnapshot=i,Bg(e)&&jg(t)}function zg(t,e,n){return n(function(){Bg(e)&&jg(t)})}function Bg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ti(t,n)}catch{return!0}}function jg(t){var e=Ui(t,1);e!==null&&ei(e,t,1,-1)}function Dp(t){var e=oi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ya,lastRenderedState:t},e.queue=t,t=t.dispatch=Ty.bind(null,Ct,t),[e.memoizedState,t]}function Ka(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Vg(){return Hn().memoizedState}function cl(t,e,n,i){var r=oi();Ct.flags|=t,r.memoizedState=Ka(1|e,n,void 0,i===void 0?null:i)}function rc(t,e,n,i){var r=Hn();i=i===void 0?null:i;var s=void 0;if(kt!==null){var a=kt.memoizedState;if(s=a.destroy,i!==null&&Zf(i,a.deps)){r.memoizedState=Ka(e,n,s,i);return}}Ct.flags|=t,r.memoizedState=Ka(1|e,n,s,i)}function Ip(t,e){return cl(8390656,8,t,e)}function eh(t,e){return rc(2048,8,t,e)}function Hg(t,e){return rc(4,2,t,e)}function Gg(t,e){return rc(4,4,t,e)}function Wg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Xg(t,e,n){return n=n!=null?n.concat([t]):null,rc(4,4,Wg.bind(null,e,t),n)}function th(){}function qg(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Zf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function $g(t,e){var n=Hn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Zf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Yg(t,e,n){return jr&21?(ti(n,e)||(n=eg(),Ct.lanes|=n,Vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gn=!0),t.memoizedState=n)}function by(t,e){var n=mt;mt=n!==0&&4>n?n:4,t(!0);var i=zc.transition;zc.transition={};try{t(!1),e()}finally{mt=n,zc.transition=i}}function Kg(){return Hn().memoizedState}function Ey(t,e,n){var i=dr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Zg(t))Qg(e,n);else if(n=Pg(t,e,n,i),n!==null){var r=cn();ei(n,t,i,r),Jg(n,e,i)}}function Ty(t,e,n){var i=dr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zg(t))Qg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(r.hasEagerState=!0,r.eagerState=l,ti(l,a)){var c=e.interleaved;c===null?(r.next=r,Xf(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=Pg(t,e,r,i),n!==null&&(r=cn(),ei(n,t,i,r),Jg(n,e,i))}}function Zg(t){var e=t.alternate;return t===Ct||e!==null&&e===Ct}function Qg(t,e){Aa=Fl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Jg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Pf(t,n)}}var kl={readContext:Vn,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},Cy={readContext:Vn,useCallback:function(t,e){return oi().memoizedState=[t,e===void 0?null:e],t},useContext:Vn,useEffect:Ip,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,cl(4194308,4,Wg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return cl(4194308,4,t,e)},useInsertionEffect:function(t,e){return cl(4,2,t,e)},useMemo:function(t,e){var n=oi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=oi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Ey.bind(null,Ct,t),[i.memoizedState,t]},useRef:function(t){var e=oi();return t={current:t},e.memoizedState=t},useState:Dp,useDebugValue:th,useDeferredValue:function(t){return oi().memoizedState=t},useTransition:function(){var t=Dp(!1),e=t[0];return t=by.bind(null,t[1]),oi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ct,r=oi();if(bt){if(n===void 0)throw Error(Re(407));n=n()}else{if(n=e(),Ht===null)throw Error(Re(349));jr&30||kg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Ip(zg.bind(null,i,s,t),[t]),i.flags|=2048,Ka(9,Og.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=oi(),e=Ht.identifierPrefix;if(bt){var n=Ai,i=Ci;n=(i&~(1<<32-Jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=$a++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=My++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ay={readContext:Vn,useCallback:qg,useContext:Vn,useEffect:eh,useImperativeHandle:Xg,useInsertionEffect:Hg,useLayoutEffect:Gg,useMemo:$g,useReducer:Bc,useRef:Vg,useState:function(){return Bc(Ya)},useDebugValue:th,useDeferredValue:function(t){var e=Hn();return Yg(e,kt.memoizedState,t)},useTransition:function(){var t=Bc(Ya)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:Ug,useSyncExternalStore:Fg,useId:Kg,unstable_isNewReconciler:!1},Ry={readContext:Vn,useCallback:qg,useContext:Vn,useEffect:eh,useImperativeHandle:Xg,useInsertionEffect:Hg,useLayoutEffect:Gg,useMemo:$g,useReducer:jc,useRef:Vg,useState:function(){return jc(Ya)},useDebugValue:th,useDeferredValue:function(t){var e=Hn();return kt===null?e.memoizedState=t:Yg(e,kt.memoizedState,t)},useTransition:function(){var t=jc(Ya)[0],e=Hn().memoizedState;return[t,e]},useMutableSource:Ug,useSyncExternalStore:Fg,useId:Kg,unstable_isNewReconciler:!1};function $n(t,e){if(t&&t.defaultProps){e=At({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ld(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:At({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var sc={isMounted:function(t){return(t=t._reactInternals)?Kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=cn(),r=dr(t),s=Ni(i,r);s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,r),e!==null&&(ei(e,t,r,i),ol(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=cn(),r=dr(t),s=Ni(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=cr(t,s,r),e!==null&&(ei(e,t,r,i),ol(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=cn(),i=dr(t),r=Ni(n,i);r.tag=2,e!=null&&(r.callback=e),e=cr(t,r,i),e!==null&&(ei(e,t,i,n),ol(e,t,i))}};function Up(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Va(n,i)||!Va(r,s):!0}function ex(t,e,n){var i=!1,r=mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Vn(s):(r=vn(e)?zr:sn.current,i=e.contextTypes,s=(i=i!=null)?js(t,r):mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=sc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Fp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&sc.enqueueReplaceState(e,e.state,null)}function cd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},qf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Vn(s):(s=vn(e)?zr:sn.current,r.context=js(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ld(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&sc.enqueueReplaceState(r,r.state,null),Il(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ws(t,e){try{var n="",i=e;do n+=i_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Vc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ud(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ny=typeof WeakMap=="function"?WeakMap:Map;function tx(t,e,n){n=Ni(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){zl||(zl=!0,yd=i),ud(t,e)},n}function nx(t,e,n){n=Ni(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ud(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ud(t,e),typeof i!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function kp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Ny;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Gy.bind(null,t,e,n),e.then(t,t))}function Op(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function zp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ni(-1,1),e.tag=2,cr(n,e,1))),n.lanes|=1),t)}var Ly=zi.ReactCurrentOwner,gn=!1;function ln(t,e,n,i){e.child=t===null?Lg(e,null,n,i):Hs(e,t.child,n,i)}function Bp(t,e,n,i,r){n=n.render;var s=e.ref;return Is(e,r),i=Qf(t,e,n,i,s,r),n=Jf(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(bt&&n&&Bf(e),e.flags|=1,ln(t,e,i,r),e.child)}function jp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!ch(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ix(t,e,s,i,r)):(t=hl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Va,n(a,i)&&t.ref===e.ref)return Fi(t,e,r)}return e.flags|=1,t=fr(s,i),t.ref=e.ref,t.return=e,e.child=t}function ix(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Va(s,i)&&t.ref===e.ref)if(gn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(gn=!0);else return e.lanes=t.lanes,Fi(t,e,r)}return dd(t,e,n,i,r)}function rx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},yt(Rs,Tn),Tn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,yt(Rs,Tn),Tn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,yt(Rs,Tn),Tn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,yt(Rs,Tn),Tn|=i;return ln(t,e,r,n),e.child}function sx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function dd(t,e,n,i,r){var s=vn(n)?zr:sn.current;return s=js(e,s),Is(e,r),n=Qf(t,e,n,i,s,r),i=Jf(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Fi(t,e,r)):(bt&&i&&Bf(e),e.flags|=1,ln(t,e,n,r),e.child)}function Vp(t,e,n,i,r){if(vn(n)){var s=!0;Rl(e)}else s=!1;if(Is(e,r),e.stateNode===null)ul(t,e),ex(e,n,i),cd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Vn(u):(u=vn(n)?zr:sn.current,u=js(e,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==i||c!==u)&&Fp(e,a,i,u),Qi=!1;var f=e.memoizedState;a.state=f,Il(e,i,a,r),c=e.memoizedState,l!==i||f!==c||xn.current||Qi?(typeof h=="function"&&(ld(e,n,h,i),c=e.memoizedState),(l=Qi||Up(e,n,l,i,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=u,i=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Dg(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:$n(e.type,l),a.props=u,p=e.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Vn(c):(c=vn(n)?zr:sn.current,c=js(e,c));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||f!==c)&&Fp(e,a,i,c),Qi=!1,f=e.memoizedState,a.state=f,Il(e,i,a,r);var _=e.memoizedState;l!==p||f!==_||xn.current||Qi?(typeof m=="function"&&(ld(e,n,m,i),_=e.memoizedState),(u=Qi||Up(e,n,u,i,f,_,c)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=c,i=u):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return fd(t,e,n,i,s,r)}function fd(t,e,n,i,r,s){sx(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Cp(e,n,!1),Fi(t,e,s);i=e.stateNode,Ly.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Hs(e,t.child,null,s),e.child=Hs(e,null,l,s)):ln(t,e,l,s),e.memoizedState=i.state,r&&Cp(e,n,!0),e.child}function ax(t){var e=t.stateNode;e.pendingContext?Tp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Tp(t,e.context,!1),$f(t,e.containerInfo)}function Hp(t,e,n,i,r){return Vs(),Vf(r),e.flags|=256,ln(t,e,n,i),e.child}var hd={dehydrated:null,treeContext:null,retryLane:0};function pd(t){return{baseLanes:t,cachePool:null,transitions:null}}function ox(t,e,n){var i=e.pendingProps,r=Et.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(r&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),yt(Et,r&1),t===null)return ad(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=lc(a,i,0,null),t=Or(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=pd(n),e.memoizedState=hd,t):nh(e,a));if(r=t.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return Py(t,e,a,i,l,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,l=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=fr(r,c),i.subtreeFlags=r.subtreeFlags&14680064),l!==null?s=fr(l,s):(s=Or(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?pd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=hd,i}return s=t.child,t=s.sibling,i=fr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function nh(t,e){return e=lc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Co(t,e,n,i){return i!==null&&Vf(i),Hs(e,t.child,null,n),t=nh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Py(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Vc(Error(Re(422))),Co(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=lc({mode:"visible",children:i.children},r,0,null),s=Or(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Hs(e,t.child,null,a),e.child.memoizedState=pd(a),e.memoizedState=hd,s);if(!(e.mode&1))return Co(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,s=Error(Re(419)),i=Vc(s,i,void 0),Co(t,e,a,i)}if(l=(a&t.childLanes)!==0,gn||l){if(i=Ht,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ui(t,r),ei(i,t,r,-1))}return lh(),i=Vc(Error(Re(421))),Co(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Wy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,An=lr(r.nextSibling),Rn=e,bt=!0,Kn=null,t!==null&&(Fn[kn++]=Ci,Fn[kn++]=Ai,Fn[kn++]=Br,Ci=t.id,Ai=t.overflow,Br=e),e=nh(e,i.children),e.flags|=4096,e)}function Gp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),od(t.return,e,n)}function Hc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function lx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(t,e,i.children,n),i=Et.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gp(t,n,e);else if(t.tag===19)Gp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(yt(Et,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ul(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Hc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ul(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Hc(e,!0,n,null,s);break;case"together":Hc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ul(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Fi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(Re(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Dy(t,e,n){switch(e.tag){case 3:ax(e),Vs();break;case 5:Ig(e);break;case 1:vn(e.type)&&Rl(e);break;case 4:$f(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;yt(Pl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(yt(Et,Et.current&1),e.flags|=128,null):n&e.child.childLanes?ox(t,e,n):(yt(Et,Et.current&1),t=Fi(t,e,n),t!==null?t.sibling:null);yt(Et,Et.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return lx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),yt(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,rx(t,e,n)}return Fi(t,e,n)}var cx,md,ux,dx;cx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};md=function(){};ux=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ir(pi.current);var s=null;switch(n){case"input":r=ku(t,r),i=ku(t,i),s=[];break;case"select":r=At({},r,{value:void 0}),i=At({},i,{value:void 0}),s=[];break;case"textarea":r=Bu(t,r),i=Bu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Cl)}Vu(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var l=r[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ua.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var c=i[u];if(l=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ua.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&wt("scroll",t),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};dx=function(t,e,n,i){n!==i&&(e.flags|=4)};function la(t,e){if(!bt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Iy(t,e,n){var i=e.pendingProps;switch(jf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return vn(e.type)&&Al(),Zt(e),null;case 3:return i=e.stateNode,Gs(),Mt(xn),Mt(sn),Kf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Eo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kn!==null&&(Md(Kn),Kn=null))),md(t,e),Zt(e),null;case 5:Yf(e);var r=Ir(qa.current);if(n=e.type,t!==null&&e.stateNode!=null)ux(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(Re(166));return Zt(e),null}if(t=Ir(pi.current),Eo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ci]=e,i[Wa]=s,t=(e.mode&1)!==0,n){case"dialog":wt("cancel",i),wt("close",i);break;case"iframe":case"object":case"embed":wt("load",i);break;case"video":case"audio":for(r=0;r<ya.length;r++)wt(ya[r],i);break;case"source":wt("error",i);break;case"img":case"image":case"link":wt("error",i),wt("load",i);break;case"details":wt("toggle",i);break;case"input":Jh(i,s),wt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},wt("invalid",i);break;case"textarea":tp(i,s),wt("invalid",i)}Vu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?i.textContent!==l&&(s.suppressHydrationWarning!==!0&&bo(i.textContent,l,t),r=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&bo(i.textContent,l,t),r=["children",""+l]):Ua.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&wt("scroll",i)}switch(n){case"input":go(i),ep(i,s,!0);break;case"textarea":go(i),np(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Cl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=z0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ci]=e,t[Wa]=i,cx(t,e,!1,!1),e.stateNode=t;e:{switch(a=Hu(n,i),n){case"dialog":wt("cancel",t),wt("close",t),r=i;break;case"iframe":case"object":case"embed":wt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ya.length;r++)wt(ya[r],t);r=i;break;case"source":wt("error",t),r=i;break;case"img":case"image":case"link":wt("error",t),wt("load",t),r=i;break;case"details":wt("toggle",t),r=i;break;case"input":Jh(t,i),r=ku(t,i),wt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=At({},i,{value:void 0}),wt("invalid",t);break;case"textarea":tp(t,i),r=Bu(t,i),wt("invalid",t);break;default:r=i}Vu(n,r),l=r;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?V0(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&B0(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Fa(t,c):typeof c=="number"&&Fa(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ua.hasOwnProperty(s)?c!=null&&s==="onScroll"&&wt("scroll",t):c!=null&&Tf(t,s,c,a))}switch(n){case"input":go(t),ep(t,i,!1);break;case"textarea":go(t),np(t);break;case"option":i.value!=null&&t.setAttribute("value",""+pr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ns(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ns(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Cl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Zt(e),null;case 6:if(t&&e.stateNode!=null)dx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(Re(166));if(n=Ir(qa.current),Ir(pi.current),Eo(e)){if(i=e.stateNode,n=e.memoizedProps,i[ci]=e,(s=i.nodeValue!==n)&&(t=Rn,t!==null))switch(t.tag){case 3:bo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&bo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ci]=e,e.stateNode=i}return Zt(e),null;case 13:if(Mt(Et),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(bt&&An!==null&&e.mode&1&&!(e.flags&128))Rg(),Vs(),e.flags|=98560,s=!1;else if(s=Eo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(Re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(Re(317));s[ci]=e}else Vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Zt(e),s=!1}else Kn!==null&&(Md(Kn),Kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Et.current&1?Ot===0&&(Ot=3):lh())),e.updateQueue!==null&&(e.flags|=4),Zt(e),null);case 4:return Gs(),md(t,e),t===null&&Ha(e.stateNode.containerInfo),Zt(e),null;case 10:return Wf(e.type._context),Zt(e),null;case 17:return vn(e.type)&&Al(),Zt(e),null;case 19:if(Mt(Et),s=e.memoizedState,s===null)return Zt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)la(s,!1);else{if(Ot!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Ul(t),a!==null){for(e.flags|=128,la(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return yt(Et,Et.current&1|2),e.child}t=t.sibling}s.tail!==null&&It()>Xs&&(e.flags|=128,i=!0,la(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ul(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),la(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!bt)return Zt(e),null}else 2*It()-s.renderingStartTime>Xs&&n!==1073741824&&(e.flags|=128,i=!0,la(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=It(),e.sibling=null,n=Et.current,yt(Et,i?n&1|2:n&1),e):(Zt(e),null);case 22:case 23:return oh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Tn&1073741824&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),null;case 24:return null;case 25:return null}throw Error(Re(156,e.tag))}function Uy(t,e){switch(jf(e),e.tag){case 1:return vn(e.type)&&Al(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Gs(),Mt(xn),Mt(sn),Kf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Yf(e),null;case 13:if(Mt(Et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(Re(340));Vs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Mt(Et),null;case 4:return Gs(),null;case 10:return Wf(e.type._context),null;case 22:case 23:return oh(),null;case 24:return null;default:return null}}var Ao=!1,tn=!1,Fy=typeof WeakSet=="function"?WeakSet:Set,He=null;function As(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Nt(t,e,i)}else n.current=null}function gd(t,e,n){try{n()}catch(i){Nt(t,e,i)}}var Wp=!1;function ky(t,e){if(Ju=bl,t=gg(),zf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,h=0,p=t,f=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(l=a+r),p!==s||i!==0&&p.nodeType!==3||(c=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===t)break t;if(f===n&&++u===r&&(l=a),f===s&&++h===i&&(c=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ed={focusedElem:t,selectionRange:n},bl=!1,He=e;He!==null;)if(e=He,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,He=t;else for(;He!==null;){e=He;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var E=_.memoizedProps,x=_.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?E:$n(e.type,E),x);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(Re(163))}}catch(y){Nt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,He=t;break}He=e.return}return _=Wp,Wp=!1,_}function Ra(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&gd(e,n,s)}r=r.next}while(r!==i)}}function ac(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function xd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function fx(t){var e=t.alternate;e!==null&&(t.alternate=null,fx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ci],delete e[Wa],delete e[id],delete e[_y],delete e[yy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hx(t){return t.tag===5||t.tag===3||t.tag===4}function Xp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Cl));else if(i!==4&&(t=t.child,t!==null))for(vd(t,e,n),t=t.sibling;t!==null;)vd(t,e,n),t=t.sibling}function _d(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(_d(t,e,n),t=t.sibling;t!==null;)_d(t,e,n),t=t.sibling}var Wt=null,Yn=!1;function Hi(t,e,n){for(n=n.child;n!==null;)px(t,e,n),n=n.sibling}function px(t,e,n){if(hi&&typeof hi.onCommitFiberUnmount=="function")try{hi.onCommitFiberUnmount(Ql,n)}catch{}switch(n.tag){case 5:tn||As(n,e);case 6:var i=Wt,r=Yn;Wt=null,Hi(t,e,n),Wt=i,Yn=r,Wt!==null&&(Yn?(t=Wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Wt.removeChild(n.stateNode));break;case 18:Wt!==null&&(Yn?(t=Wt,n=n.stateNode,t.nodeType===8?Fc(t.parentNode,n):t.nodeType===1&&Fc(t,n),Ba(t)):Fc(Wt,n.stateNode));break;case 4:i=Wt,r=Yn,Wt=n.stateNode.containerInfo,Yn=!0,Hi(t,e,n),Wt=i,Yn=r;break;case 0:case 11:case 14:case 15:if(!tn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&gd(n,e,a),r=r.next}while(r!==i)}Hi(t,e,n);break;case 1:if(!tn&&(As(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){Nt(n,e,l)}Hi(t,e,n);break;case 21:Hi(t,e,n);break;case 22:n.mode&1?(tn=(i=tn)||n.memoizedState!==null,Hi(t,e,n),tn=i):Hi(t,e,n);break;default:Hi(t,e,n)}}function qp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Fy),e.forEach(function(i){var r=Xy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Gn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:Wt=l.stateNode,Yn=!1;break e;case 3:Wt=l.stateNode.containerInfo,Yn=!0;break e;case 4:Wt=l.stateNode.containerInfo,Yn=!0;break e}l=l.return}if(Wt===null)throw Error(Re(160));px(s,a,r),Wt=null,Yn=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){Nt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)mx(e,t),e=e.sibling}function mx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gn(e,t),ri(t),i&4){try{Ra(3,t,t.return),ac(3,t)}catch(E){Nt(t,t.return,E)}try{Ra(5,t,t.return)}catch(E){Nt(t,t.return,E)}}break;case 1:Gn(e,t),ri(t),i&512&&n!==null&&As(n,n.return);break;case 5:if(Gn(e,t),ri(t),i&512&&n!==null&&As(n,n.return),t.flags&32){var r=t.stateNode;try{Fa(r,"")}catch(E){Nt(t,t.return,E)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&k0(r,s),Hu(l,a);var u=Hu(l,s);for(a=0;a<c.length;a+=2){var h=c[a],p=c[a+1];h==="style"?V0(r,p):h==="dangerouslySetInnerHTML"?B0(r,p):h==="children"?Fa(r,p):Tf(r,h,p,u)}switch(l){case"input":Ou(r,s);break;case"textarea":O0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ns(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ns(r,!!s.multiple,s.defaultValue,!0):Ns(r,!!s.multiple,s.multiple?[]:"",!1))}r[Wa]=s}catch(E){Nt(t,t.return,E)}}break;case 6:if(Gn(e,t),ri(t),i&4){if(t.stateNode===null)throw Error(Re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(E){Nt(t,t.return,E)}}break;case 3:if(Gn(e,t),ri(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ba(e.containerInfo)}catch(E){Nt(t,t.return,E)}break;case 4:Gn(e,t),ri(t);break;case 13:Gn(e,t),ri(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(sh=It())),i&4&&qp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(tn=(u=tn)||h,Gn(e,t),tn=u):Gn(e,t),ri(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(He=t,h=t.child;h!==null;){for(p=He=h;He!==null;){switch(f=He,m=f.child,f.tag){case 0:case 11:case 14:case 15:Ra(4,f,f.return);break;case 1:As(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(E){Nt(i,n,E)}}break;case 5:As(f,f.return);break;case 22:if(f.memoizedState!==null){Yp(p);continue}}m!==null?(m.return=f,He=m):Yp(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=j0("display",a))}catch(E){Nt(t,t.return,E)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(E){Nt(t,t.return,E)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Gn(e,t),ri(t),i&4&&qp(t);break;case 21:break;default:Gn(e,t),ri(t)}}function ri(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(hx(n)){var i=n;break e}n=n.return}throw Error(Re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Fa(r,""),i.flags&=-33);var s=Xp(t);_d(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,l=Xp(t);vd(t,l,a);break;default:throw Error(Re(161))}}catch(c){Nt(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Oy(t,e,n){He=t,gx(t)}function gx(t,e,n){for(var i=(t.mode&1)!==0;He!==null;){var r=He,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Ao;if(!a){var l=r.alternate,c=l!==null&&l.memoizedState!==null||tn;l=Ao;var u=tn;if(Ao=a,(tn=c)&&!u)for(He=r;He!==null;)a=He,c=a.child,a.tag===22&&a.memoizedState!==null?Kp(r):c!==null?(c.return=a,He=c):Kp(r);for(;s!==null;)He=s,gx(s),s=s.sibling;He=r,Ao=l,tn=u}$p(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,He=s):$p(t)}}function $p(t){for(;He!==null;){var e=He;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tn||ac(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!tn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:$n(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Pp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Pp(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Ba(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(Re(163))}tn||e.flags&512&&xd(e)}catch(f){Nt(e,e.return,f)}}if(e===t){He=null;break}if(n=e.sibling,n!==null){n.return=e.return,He=n;break}He=e.return}}function Yp(t){for(;He!==null;){var e=He;if(e===t){He=null;break}var n=e.sibling;if(n!==null){n.return=e.return,He=n;break}He=e.return}}function Kp(t){for(;He!==null;){var e=He;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ac(4,e)}catch(c){Nt(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){Nt(e,r,c)}}var s=e.return;try{xd(e)}catch(c){Nt(e,s,c)}break;case 5:var a=e.return;try{xd(e)}catch(c){Nt(e,a,c)}}}catch(c){Nt(e,e.return,c)}if(e===t){He=null;break}var l=e.sibling;if(l!==null){l.return=e.return,He=l;break}He=e.return}}var zy=Math.ceil,Ol=zi.ReactCurrentDispatcher,ih=zi.ReactCurrentOwner,jn=zi.ReactCurrentBatchConfig,ht=0,Ht=null,Ft=null,qt=0,Tn=0,Rs=_r(0),Ot=0,Za=null,Vr=0,oc=0,rh=0,Na=null,mn=null,sh=0,Xs=1/0,Ei=null,zl=!1,yd=null,ur=null,Ro=!1,ir=null,Bl=0,La=0,Sd=null,dl=-1,fl=0;function cn(){return ht&6?It():dl!==-1?dl:dl=It()}function dr(t){return t.mode&1?ht&2&&qt!==0?qt&-qt:wy.transition!==null?(fl===0&&(fl=eg()),fl):(t=mt,t!==0||(t=window.event,t=t===void 0?16:og(t.type)),t):1}function ei(t,e,n,i){if(50<La)throw La=0,Sd=null,Error(Re(185));io(t,n,i),(!(ht&2)||t!==Ht)&&(t===Ht&&(!(ht&2)&&(oc|=n),Ot===4&&er(t,qt)),_n(t,i),n===1&&ht===0&&!(e.mode&1)&&(Xs=It()+500,ic&&yr()))}function _n(t,e){var n=t.callbackNode;w_(t,e);var i=Ml(t,t===Ht?qt:0);if(i===0)n!==null&&sp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&sp(n),e===1)t.tag===0?Sy(Zp.bind(null,t)):Tg(Zp.bind(null,t)),xy(function(){!(ht&6)&&yr()}),n=null;else{switch(tg(i)){case 1:n=Lf;break;case 4:n=Q0;break;case 16:n=wl;break;case 536870912:n=J0;break;default:n=wl}n=bx(n,xx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function xx(t,e){if(dl=-1,fl=0,ht&6)throw Error(Re(327));var n=t.callbackNode;if(Us()&&t.callbackNode!==n)return null;var i=Ml(t,t===Ht?qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=jl(t,i);else{e=i;var r=ht;ht|=2;var s=_x();(Ht!==t||qt!==e)&&(Ei=null,Xs=It()+500,kr(t,e));do try{Vy();break}catch(l){vx(t,l)}while(!0);Gf(),Ol.current=s,ht=r,Ft!==null?e=0:(Ht=null,qt=0,e=Ot)}if(e!==0){if(e===2&&(r=$u(t),r!==0&&(i=r,e=wd(t,r))),e===1)throw n=Za,kr(t,0),er(t,i),_n(t,It()),n;if(e===6)er(t,i);else{if(r=t.current.alternate,!(i&30)&&!By(r)&&(e=jl(t,i),e===2&&(s=$u(t),s!==0&&(i=s,e=wd(t,s))),e===1))throw n=Za,kr(t,0),er(t,i),_n(t,It()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(Re(345));case 2:Ar(t,mn,Ei);break;case 3:if(er(t,i),(i&130023424)===i&&(e=sh+500-It(),10<e)){if(Ml(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){cn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=nd(Ar.bind(null,t,mn,Ei),e);break}Ar(t,mn,Ei);break;case 4:if(er(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Jn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=It()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*zy(i/1960))-i,10<i){t.timeoutHandle=nd(Ar.bind(null,t,mn,Ei),i);break}Ar(t,mn,Ei);break;case 5:Ar(t,mn,Ei);break;default:throw Error(Re(329))}}}return _n(t,It()),t.callbackNode===n?xx.bind(null,t):null}function wd(t,e){var n=Na;return t.current.memoizedState.isDehydrated&&(kr(t,e).flags|=256),t=jl(t,e),t!==2&&(e=mn,mn=n,e!==null&&Md(e)),t}function Md(t){mn===null?mn=t:mn.push.apply(mn,t)}function By(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ti(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function er(t,e){for(e&=~rh,e&=~oc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jn(e),i=1<<n;t[n]=-1,e&=~i}}function Zp(t){if(ht&6)throw Error(Re(327));Us();var e=Ml(t,0);if(!(e&1))return _n(t,It()),null;var n=jl(t,e);if(t.tag!==0&&n===2){var i=$u(t);i!==0&&(e=i,n=wd(t,i))}if(n===1)throw n=Za,kr(t,0),er(t,e),_n(t,It()),n;if(n===6)throw Error(Re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ar(t,mn,Ei),_n(t,It()),null}function ah(t,e){var n=ht;ht|=1;try{return t(e)}finally{ht=n,ht===0&&(Xs=It()+500,ic&&yr())}}function Hr(t){ir!==null&&ir.tag===0&&!(ht&6)&&Us();var e=ht;ht|=1;var n=jn.transition,i=mt;try{if(jn.transition=null,mt=1,t)return t()}finally{mt=i,jn.transition=n,ht=e,!(ht&6)&&yr()}}function oh(){Tn=Rs.current,Mt(Rs)}function kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,gy(n)),Ft!==null)for(n=Ft.return;n!==null;){var i=n;switch(jf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Al();break;case 3:Gs(),Mt(xn),Mt(sn),Kf();break;case 5:Yf(i);break;case 4:Gs();break;case 13:Mt(Et);break;case 19:Mt(Et);break;case 10:Wf(i.type._context);break;case 22:case 23:oh()}n=n.return}if(Ht=t,Ft=t=fr(t.current,null),qt=Tn=e,Ot=0,Za=null,rh=oc=Vr=0,mn=Na=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Dr=null}return t}function vx(t,e){do{var n=Ft;try{if(Gf(),ll.current=kl,Fl){for(var i=Ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Fl=!1}if(jr=0,Vt=kt=Ct=null,Aa=!1,$a=0,ih.current=null,n===null||n.return===null){Ot=1,Za=e,Ft=null;break}e:{var s=t,a=n.return,l=n,c=e;if(e=qt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=l,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Op(a);if(m!==null){m.flags&=-257,zp(m,a,l,s,e),m.mode&1&&kp(s,u,e),e=m,c=u;var _=e.updateQueue;if(_===null){var E=new Set;E.add(c),e.updateQueue=E}else _.add(c);break e}else{if(!(e&1)){kp(s,u,e),lh();break e}c=Error(Re(426))}}else if(bt&&l.mode&1){var x=Op(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),zp(x,a,l,s,e),Vf(Ws(c,l));break e}}s=c=Ws(c,l),Ot!==4&&(Ot=2),Na===null?Na=[s]:Na.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=tx(s,c,e);Lp(s,d);break e;case 1:l=c;var v=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(ur===null||!ur.has(w)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=nx(s,l,e);Lp(s,y);break e}}s=s.return}while(s!==null)}Sx(n)}catch(T){e=T,Ft===n&&n!==null&&(Ft=n=n.return);continue}break}while(!0)}function _x(){var t=Ol.current;return Ol.current=kl,t===null?kl:t}function lh(){(Ot===0||Ot===3||Ot===2)&&(Ot=4),Ht===null||!(Vr&268435455)&&!(oc&268435455)||er(Ht,qt)}function jl(t,e){var n=ht;ht|=2;var i=_x();(Ht!==t||qt!==e)&&(Ei=null,kr(t,e));do try{jy();break}catch(r){vx(t,r)}while(!0);if(Gf(),ht=n,Ol.current=i,Ft!==null)throw Error(Re(261));return Ht=null,qt=0,Ot}function jy(){for(;Ft!==null;)yx(Ft)}function Vy(){for(;Ft!==null&&!h_();)yx(Ft)}function yx(t){var e=Mx(t.alternate,t,Tn);t.memoizedProps=t.pendingProps,e===null?Sx(t):Ft=e,ih.current=null}function Sx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Uy(n,e),n!==null){n.flags&=32767,Ft=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ot=6,Ft=null;return}}else if(n=Iy(n,e,Tn),n!==null){Ft=n;return}if(e=e.sibling,e!==null){Ft=e;return}Ft=e=t}while(e!==null);Ot===0&&(Ot=5)}function Ar(t,e,n){var i=mt,r=jn.transition;try{jn.transition=null,mt=1,Hy(t,e,n,i)}finally{jn.transition=r,mt=i}return null}function Hy(t,e,n,i){do Us();while(ir!==null);if(ht&6)throw Error(Re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(Re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(M_(t,s),t===Ht&&(Ft=Ht=null,qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ro||(Ro=!0,bx(wl,function(){return Us(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=jn.transition,jn.transition=null;var a=mt;mt=1;var l=ht;ht|=4,ih.current=null,ky(t,n),mx(n,t),cy(ed),bl=!!Ju,ed=Ju=null,t.current=n,Oy(n),p_(),ht=l,mt=a,jn.transition=s}else t.current=n;if(Ro&&(Ro=!1,ir=t,Bl=r),s=t.pendingLanes,s===0&&(ur=null),x_(n.stateNode),_n(t,It()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(zl)throw zl=!1,t=yd,yd=null,t;return Bl&1&&t.tag!==0&&Us(),s=t.pendingLanes,s&1?t===Sd?La++:(La=0,Sd=t):La=0,yr(),null}function Us(){if(ir!==null){var t=tg(Bl),e=jn.transition,n=mt;try{if(jn.transition=null,mt=16>t?16:t,ir===null)var i=!1;else{if(t=ir,ir=null,Bl=0,ht&6)throw Error(Re(331));var r=ht;for(ht|=4,He=t.current;He!==null;){var s=He,a=s.child;if(He.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(He=u;He!==null;){var h=He;switch(h.tag){case 0:case 11:case 15:Ra(8,h,s)}var p=h.child;if(p!==null)p.return=h,He=p;else for(;He!==null;){h=He;var f=h.sibling,m=h.return;if(fx(h),h===u){He=null;break}if(f!==null){f.return=m,He=f;break}He=m}}}var _=s.alternate;if(_!==null){var E=_.child;if(E!==null){_.child=null;do{var x=E.sibling;E.sibling=null,E=x}while(E!==null)}}He=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,He=a;else e:for(;He!==null;){if(s=He,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ra(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,He=d;break e}He=s.return}}var v=t.current;for(He=v;He!==null;){a=He;var w=a.child;if(a.subtreeFlags&2064&&w!==null)w.return=a,He=w;else e:for(a=v;He!==null;){if(l=He,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ac(9,l)}}catch(T){Nt(l,l.return,T)}if(l===a){He=null;break e}var y=l.sibling;if(y!==null){y.return=l.return,He=y;break e}He=l.return}}if(ht=r,yr(),hi&&typeof hi.onPostCommitFiberRoot=="function")try{hi.onPostCommitFiberRoot(Ql,t)}catch{}i=!0}return i}finally{mt=n,jn.transition=e}}return!1}function Qp(t,e,n){e=Ws(n,e),e=tx(t,e,1),t=cr(t,e,1),e=cn(),t!==null&&(io(t,1,e),_n(t,e))}function Nt(t,e,n){if(t.tag===3)Qp(t,t,n);else for(;e!==null;){if(e.tag===3){Qp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ur===null||!ur.has(i))){t=Ws(n,t),t=nx(e,t,1),e=cr(e,t,1),t=cn(),e!==null&&(io(e,1,t),_n(e,t));break}}e=e.return}}function Gy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=cn(),t.pingedLanes|=t.suspendedLanes&n,Ht===t&&(qt&n)===n&&(Ot===4||Ot===3&&(qt&130023424)===qt&&500>It()-sh?kr(t,0):rh|=n),_n(t,e)}function wx(t,e){e===0&&(t.mode&1?(e=_o,_o<<=1,!(_o&130023424)&&(_o=4194304)):e=1);var n=cn();t=Ui(t,e),t!==null&&(io(t,e,n),_n(t,n))}function Wy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),wx(t,n)}function Xy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(Re(314))}i!==null&&i.delete(e),wx(t,n)}var Mx;Mx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xn.current)gn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gn=!1,Dy(t,e,n);gn=!!(t.flags&131072)}else gn=!1,bt&&e.flags&1048576&&Cg(e,Ll,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ul(t,e),t=e.pendingProps;var r=js(e,sn.current);Is(e,n),r=Qf(null,e,i,t,r,n);var s=Jf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(i)?(s=!0,Rl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,qf(e),r.updater=sc,e.stateNode=r,r._reactInternals=e,cd(e,i,t,n),e=fd(null,e,i,!0,s,n)):(e.tag=0,bt&&s&&Bf(e),ln(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ul(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=$y(i),t=$n(i,t),r){case 0:e=dd(null,e,i,t,n);break e;case 1:e=Vp(null,e,i,t,n);break e;case 11:e=Bp(null,e,i,t,n);break e;case 14:e=jp(null,e,i,$n(i.type,t),n);break e}throw Error(Re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),dd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Vp(t,e,i,r,n);case 3:e:{if(ax(e),t===null)throw Error(Re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Dg(t,e),Il(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ws(Error(Re(423)),e),e=Hp(t,e,i,n,r);break e}else if(i!==r){r=Ws(Error(Re(424)),e),e=Hp(t,e,i,n,r);break e}else for(An=lr(e.stateNode.containerInfo.firstChild),Rn=e,bt=!0,Kn=null,n=Lg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vs(),i===r){e=Fi(t,e,n);break e}ln(t,e,i,n)}e=e.child}return e;case 5:return Ig(e),t===null&&ad(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,td(i,r)?a=null:s!==null&&td(i,s)&&(e.flags|=32),sx(t,e),ln(t,e,a,n),e.child;case 6:return t===null&&ad(e),null;case 13:return ox(t,e,n);case 4:return $f(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Hs(e,null,i,n):ln(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Bp(t,e,i,r,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,yt(Pl,i._currentValue),i._currentValue=a,s!==null)if(ti(s.value,a)){if(s.children===r.children&&!xn.current){e=Fi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=Ni(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),od(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(Re(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),od(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}ln(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Is(e,n),r=Vn(r),i=i(r),e.flags|=1,ln(t,e,i,n),e.child;case 14:return i=e.type,r=$n(i,e.pendingProps),r=$n(i.type,r),jp(t,e,i,r,n);case 15:return ix(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),ul(t,e),e.tag=1,vn(i)?(t=!0,Rl(e)):t=!1,Is(e,n),ex(e,i,r),cd(e,i,r,n),fd(null,e,i,!0,t,n);case 19:return lx(t,e,n);case 22:return rx(t,e,n)}throw Error(Re(156,e.tag))};function bx(t,e){return Z0(t,e)}function qy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,e,n,i){return new qy(t,e,n,i)}function ch(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $y(t){if(typeof t=="function")return ch(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Af)return 11;if(t===Rf)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=Bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function hl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")ch(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case _s:return Or(n.children,r,s,e);case Cf:a=8,r|=8;break;case Du:return t=Bn(12,n,e,r|2),t.elementType=Du,t.lanes=s,t;case Iu:return t=Bn(13,n,e,r),t.elementType=Iu,t.lanes=s,t;case Uu:return t=Bn(19,n,e,r),t.elementType=Uu,t.lanes=s,t;case I0:return lc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P0:a=10;break e;case D0:a=9;break e;case Af:a=11;break e;case Rf:a=14;break e;case Zi:a=16,i=null;break e}throw Error(Re(130,t==null?t:typeof t,""))}return e=Bn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Or(t,e,n,i){return t=Bn(7,t,i,e),t.lanes=n,t}function lc(t,e,n,i){return t=Bn(22,t,i,e),t.elementType=I0,t.lanes=n,t.stateNode={isHidden:!1},t}function Gc(t,e,n){return t=Bn(6,t,null,e),t.lanes=n,t}function Wc(t,e,n){return e=Bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Yy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ec(0),this.expirationTimes=Ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ec(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function uh(t,e,n,i,r,s,a,l,c){return t=new Yy(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qf(s),t}function Ky(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:vs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Ex(t){if(!t)return mr;t=t._reactInternals;e:{if(Kr(t)!==t||t.tag!==1)throw Error(Re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(Re(171))}if(t.tag===1){var n=t.type;if(vn(n))return Eg(t,n,e)}return e}function Tx(t,e,n,i,r,s,a,l,c){return t=uh(n,i,!0,t,r,s,a,l,c),t.context=Ex(null),n=t.current,i=cn(),r=dr(n),s=Ni(i,r),s.callback=e??null,cr(n,s,r),t.current.lanes=r,io(t,r,i),_n(t,i),t}function cc(t,e,n,i){var r=e.current,s=cn(),a=dr(r);return n=Ex(n),e.context===null?e.context=n:e.pendingContext=n,e=Ni(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=cr(r,e,a),t!==null&&(ei(t,r,a,s),ol(t,r,a)),a}function Vl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Jp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function dh(t,e){Jp(t,e),(t=t.alternate)&&Jp(t,e)}function Zy(){return null}var Cx=typeof reportError=="function"?reportError:function(t){console.error(t)};function fh(t){this._internalRoot=t}uc.prototype.render=fh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(Re(409));cc(t,e,null,null)};uc.prototype.unmount=fh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hr(function(){cc(null,t,null,null)}),e[Ii]=null}};function uc(t){this._internalRoot=t}uc.prototype.unstable_scheduleHydration=function(t){if(t){var e=rg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ji.length&&e!==0&&e<Ji[n].priority;n++);Ji.splice(n,0,t),n===0&&ag(t)}};function hh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function dc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function em(){}function Qy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Vl(a);s.call(u)}}var a=Tx(e,i,t,0,null,!1,!1,"",em);return t._reactRootContainer=a,t[Ii]=a.current,Ha(t.nodeType===8?t.parentNode:t),Hr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var l=i;i=function(){var u=Vl(c);l.call(u)}}var c=uh(t,0,!1,null,null,!1,!1,"",em);return t._reactRootContainer=c,t[Ii]=c.current,Ha(t.nodeType===8?t.parentNode:t),Hr(function(){cc(e,c,n,i)}),c}function fc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var l=r;r=function(){var c=Vl(a);l.call(c)}}cc(e,a,t,r)}else a=Qy(n,e,t,r,i);return Vl(a)}ng=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_a(e.pendingLanes);n!==0&&(Pf(e,n|1),_n(e,It()),!(ht&6)&&(Xs=It()+500,yr()))}break;case 13:Hr(function(){var i=Ui(t,1);if(i!==null){var r=cn();ei(i,t,1,r)}}),dh(t,1)}};Df=function(t){if(t.tag===13){var e=Ui(t,134217728);if(e!==null){var n=cn();ei(e,t,134217728,n)}dh(t,134217728)}};ig=function(t){if(t.tag===13){var e=dr(t),n=Ui(t,e);if(n!==null){var i=cn();ei(n,t,e,i)}dh(t,e)}};rg=function(){return mt};sg=function(t,e){var n=mt;try{return mt=t,e()}finally{mt=n}};Wu=function(t,e,n){switch(e){case"input":if(Ou(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=nc(i);if(!r)throw Error(Re(90));F0(i),Ou(i,r)}}}break;case"textarea":O0(t,n);break;case"select":e=n.value,e!=null&&Ns(t,!!n.multiple,e,!1)}};W0=ah;X0=Hr;var Jy={usingClientEntryPoint:!1,Events:[so,Ms,nc,H0,G0,ah]},ca={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},eS={bundleType:ca.bundleType,version:ca.version,rendererPackageName:ca.rendererPackageName,rendererConfig:ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Y0(t),t===null?null:t.stateNode},findFiberByHostInstance:ca.findFiberByHostInstance||Zy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var No=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!No.isDisabled&&No.supportsFiber)try{Ql=No.inject(eS),hi=No}catch{}}Ln.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jy;Ln.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hh(e))throw Error(Re(200));return Ky(t,e,null,n)};Ln.createRoot=function(t,e){if(!hh(t))throw Error(Re(299));var n=!1,i="",r=Cx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=uh(t,1,!1,null,null,n,!1,i,r),t[Ii]=e.current,Ha(t.nodeType===8?t.parentNode:t),new fh(e)};Ln.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(Re(188)):(t=Object.keys(t).join(","),Error(Re(268,t)));return t=Y0(e),t=t===null?null:t.stateNode,t};Ln.flushSync=function(t){return Hr(t)};Ln.hydrate=function(t,e,n){if(!dc(e))throw Error(Re(200));return fc(null,t,e,!0,n)};Ln.hydrateRoot=function(t,e,n){if(!hh(t))throw Error(Re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Cx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Tx(e,null,t,1,n??null,r,!1,s,a),t[Ii]=e.current,Ha(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new uc(e)};Ln.render=function(t,e,n){if(!dc(e))throw Error(Re(200));return fc(null,t,e,!1,n)};Ln.unmountComponentAtNode=function(t){if(!dc(t))throw Error(Re(40));return t._reactRootContainer?(Hr(function(){fc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ii]=null})}),!0):!1};Ln.unstable_batchedUpdates=ah;Ln.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!dc(n))throw Error(Re(200));if(t==null||t._reactInternals===void 0)throw Error(Re(38));return fc(t,e,n,!1,i)};Ln.version="18.3.1-next-f1338f8080-20240426";function Ax(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ax)}catch(t){console.error(t)}}Ax(),A0.exports=Ln;var tS=A0.exports,tm=tS;Lu.createRoot=tm.createRoot,Lu.hydrateRoot=tm.hydrateRoot;/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var nS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),it=(t,e)=>{const n=K.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:l="",children:c,...u},h)=>K.createElement("svg",{ref:h,...nS,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${iS(t)}`,l].join(" "),...u},[...e.map(([p,f])=>K.createElement(p,f)),...Array.isArray(c)?c:[c]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=it("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=it("Blinds",[["path",{d:"M3 3h18",key:"o7r712"}],["path",{d:"M20 7H8",key:"gd2fo2"}],["path",{d:"M20 11H8",key:"1ynp89"}],["path",{d:"M10 19h10",key:"19hjk5"}],["path",{d:"M8 15h12",key:"1yqzne"}],["path",{d:"M4 3v14",key:"fggqzn"}],["circle",{cx:"4",cy:"19",r:"2",key:"p3m9r0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=it("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=it("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=it("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=it("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=it("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=it("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=it("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=it("CloudRain",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=it("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=it("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=it("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=it("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=it("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=it("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=it("Link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=it("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=it("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=it("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=it("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=it("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=it("Pause",[["rect",{width:"4",height:"16",x:"6",y:"4",key:"iffhe4"}],["rect",{width:"4",height:"16",x:"14",y:"4",key:"sjin7j"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=it("Play",[["polygon",{points:"5 3 19 12 5 21 5 3",key:"191637"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pS=it("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=it("Repeat2",[["path",{d:"m2 9 3-3 3 3",key:"1ltn5i"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6",key:"1r6tfw"}],["path",{d:"m22 15-3 3-3-3",key:"4rnwn2"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10",key:"2f72bc"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gS=it("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=it("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=it("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=it("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=it("Share",[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["polyline",{points:"16 6 12 2 8 6",key:"m901s6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15",key:"1p0rca"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _S=it("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=it("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yS=it("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SS=it("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=it("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=it("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=it("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MS=it("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bS=it("Wine",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z",key:"10ffi3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=it("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),ES=[{id:1,name:"Deadwire",datacenter:"Chaos",server:"Ragnarok",location:"La Coupe",secteur:"2",numero:"6",appartement:!1,annexe:!1,types:["Bar"],horaires:[{jour:"Lun.",heures:"21h00 - 00h00"}],banner:"https://www.deadwire.fr/media/deadwire_banner.webp",url:"https://www.deadwire.fr/",discord:"https://discord.gg/QC6CEGcpgq"},{id:3,name:"L'Exil",datacenter:"Chaos",server:"Moogle",location:"Shirogane",secteur:"24",numero:"7",appartement:!1,annexe:!1,types:["Nightclub"],horaires:null,banner:"https://i.imgur.com/VR1mi7T.png",url:null,discord:"https://discord.gg/wae4VhUxPE"},{id:4,name:"Tequila N' Bullets",datacenter:"Chaos",server:"Phantom",location:"La Coupe",secteur:"26",numero:"5",appartement:!0,annexe:!1,types:["Bar"],horaires:null,banner:null,url:null,discord:null},{id:5,name:"Mégabuilding H10-25",datacenter:"Chaos",server:"Ragnarok",location:"La Coupe",secteur:"10",numero:"25",appartement:!1,annexe:!1,types:["Lieu public"],horaires:null,banner:null,url:null,discord:null},{id:6,name:"Lawless",datacenter:"Chaos",server:"Ragnarok",location:"La Coupe",secteur:"17",numero:"4",appartement:!0,annexe:!0,types:["Lieu public","Boutique"],horaires:"09h00 - 17h00 (PNJ) / Sur rendez-vous (Straya)",banner:"https://i.imgur.com/CwhP3G8.gif",url:null,discord:"https://discord.gg/f32rrfRfcA"},{id:7,name:"Coven - Le Refuge",datacenter:"Chaos",server:"Ragnarok",location:"Brumée",secteur:"9",numero:"46",appartement:!1,annexe:!0,types:["Bar"],horaires:null,banner:"https://i.imgur.com/B72Bnhs.png",url:"https://www.nexusxiv.fr/#coven",discord:"https://discord.gg/n8amsvtxN7"}],Lo=[{id:1,name:"MAGENTA",logo:"media/artistes/Magenta.png",styleMusical:"Rock / Grunge / Punk",url:"https://www.magenta-band.fr/",youtube:"https://www.youtube.com/@Magenta-Band",discord:"https://discord.gg/KMvttGHf3p"},{id:2,name:"Funk Machine",logo:"media/artistes/FunkMachine.png",styleMusical:"Funk / Future Funk",url:"https://obsidian-chrome.github.io/funkmachine/index",youtube:"https://www.youtube.com/@Funk_Machine",discord:null},{id:3,name:"Funk and the Machines",logo:"media/artistes/FaTM.png",styleMusical:"Funk / Future Funk",url:"https://obsidian-chrome.github.io/funkmachine/fatm/index.html",youtube:"https://www.youtube.com/@Funk_Machine",discord:null},{id:4,name:"GHOSTLINE",logo:"media/artistes/Ghostline.png",styleMusical:"Dark electro / Dark techno / EDM / Industriel",url:null,youtube:"https://www.youtube.com/@GHOSTLINE_song",discord:null},{id:5,name:"HeX",logo:"media/artistes/hex.png",styleMusical:"Hardcore techno / Witchcore / Dark synth",url:null,youtube:"https://www.youtube.com/@ArcaneaVII",discord:null},{id:6,name:"Glitchtrap",logo:"media/artistes/Glitchtrap.png",styleMusical:"Electro / Drum and Bass",url:null,youtube:"https://www.youtube.com/@ombreMelody",discord:null},{id:7,name:"Les Black Harpies",logo:"media/artistes/blackharpies.png",styleMusical:"Metal / Punk",url:"https://black-harpies.carrd.co/",youtube:"https://www.youtube.com/@Black-Harpies",discord:null}],Gi=[{id:1,name:"Neolens",equivalent:"Instagram",logo:"media/neolens_logo.png",description:"Plateforme de partage de photos et contenus visuels",type:"social"},{id:2,name:"Holofans",equivalent:"OnlyFans",logo:"media/holofans_logo.png",description:"Plateforme de contenu premium par abonnement",type:"premium"},{id:3,name:"Ping",equivalent:"Twitter",logo:"media/ping_logo.png",description:"Plateforme de microblogging et partage d'actualités",type:"social"}],sm=[];function TS(t,e){if(t.match(/^[a-z]+:\/\//i))return t;if(t.match(/^\/\//))return window.location.protocol+t;if(t.match(/^[a-z]+:/i))return t;const n=document.implementation.createHTMLDocument(),i=n.createElement("base"),r=n.createElement("a");return n.head.appendChild(i),n.body.appendChild(r),e&&(i.href=e),r.href=t,r.href}const CS=(()=>{let t=0;const e=()=>`0000${(Math.random()*36**4<<0).toString(36)}`.slice(-4);return()=>(t+=1,`u${e()}${t}`)})();function hr(t){const e=[];for(let n=0,i=t.length;n<i;n++)e.push(t[n]);return e}let ns=null;function Px(t={}){return ns||(t.includeStyleProperties?(ns=t.includeStyleProperties,ns):(ns=hr(window.getComputedStyle(document.documentElement)),ns))}function Hl(t,e){const i=(t.ownerDocument.defaultView||window).getComputedStyle(t).getPropertyValue(e);return i?parseFloat(i.replace("px","")):0}function AS(t){const e=Hl(t,"border-left-width"),n=Hl(t,"border-right-width");return t.clientWidth+e+n}function RS(t){const e=Hl(t,"border-top-width"),n=Hl(t,"border-bottom-width");return t.clientHeight+e+n}function Dx(t,e={}){const n=e.width||AS(t),i=e.height||RS(t);return{width:n,height:i}}function NS(){let t,e;try{e=process}catch{}const n=e&&e.env?e.env.devicePixelRatio:null;return n&&(t=parseInt(n,10),Number.isNaN(t)&&(t=1)),t||window.devicePixelRatio||1}const Mn=16384;function LS(t){(t.width>Mn||t.height>Mn)&&(t.width>Mn&&t.height>Mn?t.width>t.height?(t.height*=Mn/t.width,t.width=Mn):(t.width*=Mn/t.height,t.height=Mn):t.width>Mn?(t.height*=Mn/t.width,t.width=Mn):(t.width*=Mn/t.height,t.height=Mn))}function Gl(t){return new Promise((e,n)=>{const i=new Image;i.onload=()=>{i.decode().then(()=>{requestAnimationFrame(()=>e(i))})},i.onerror=n,i.crossOrigin="anonymous",i.decoding="async",i.src=t})}async function PS(t){return Promise.resolve().then(()=>new XMLSerializer().serializeToString(t)).then(encodeURIComponent).then(e=>`data:image/svg+xml;charset=utf-8,${e}`)}async function DS(t,e,n){const i="http://www.w3.org/2000/svg",r=document.createElementNS(i,"svg"),s=document.createElementNS(i,"foreignObject");return r.setAttribute("width",`${e}`),r.setAttribute("height",`${n}`),r.setAttribute("viewBox",`0 0 ${e} ${n}`),s.setAttribute("width","100%"),s.setAttribute("height","100%"),s.setAttribute("x","0"),s.setAttribute("y","0"),s.setAttribute("externalResourcesRequired","true"),r.appendChild(s),s.appendChild(t),PS(r)}const yn=(t,e)=>{if(t instanceof e)return!0;const n=Object.getPrototypeOf(t);return n===null?!1:n.constructor.name===e.name||yn(n,e)};function IS(t){const e=t.getPropertyValue("content");return`${t.cssText} content: '${e.replace(/'|"/g,"")}';`}function US(t,e){return Px(e).map(n=>{const i=t.getPropertyValue(n),r=t.getPropertyPriority(n);return`${n}: ${i}${r?" !important":""};`}).join(" ")}function FS(t,e,n,i){const r=`.${t}:${e}`,s=n.cssText?IS(n):US(n,i);return document.createTextNode(`${r}{${s}}`)}function am(t,e,n,i){const r=window.getComputedStyle(t,n),s=r.getPropertyValue("content");if(s===""||s==="none")return;const a=CS();try{e.className=`${e.className} ${a}`}catch{return}const l=document.createElement("style");l.appendChild(FS(a,n,r,i)),e.appendChild(l)}function kS(t,e,n){am(t,e,":before",n),am(t,e,":after",n)}const om="application/font-woff",lm="image/jpeg",OS={woff:om,woff2:om,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:lm,jpeg:lm,gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml",webp:"image/webp"};function zS(t){const e=/\.([^./]*?)$/g.exec(t);return e?e[1]:""}function mh(t){const e=zS(t).toLowerCase();return OS[e]||""}function BS(t){return t.split(/,/)[1]}function Cd(t){return t.search(/^(data:)/)!==-1}function jS(t,e){return`data:${e};base64,${t}`}async function Ix(t,e,n){const i=await fetch(t,e);if(i.status===404)throw new Error(`Resource "${i.url}" not found`);const r=await i.blob();return new Promise((s,a)=>{const l=new FileReader;l.onerror=a,l.onloadend=()=>{try{s(n({res:i,result:l.result}))}catch(c){a(c)}},l.readAsDataURL(r)})}const $c={};function VS(t,e,n){let i=t.replace(/\?.*/,"");return n&&(i=t),/ttf|otf|eot|woff2?/i.test(i)&&(i=i.replace(/.*\//,"")),e?`[${e}]${i}`:i}async function gh(t,e,n){const i=VS(t,e,n.includeQueryParams);if($c[i]!=null)return $c[i];n.cacheBust&&(t+=(/\?/.test(t)?"&":"?")+new Date().getTime());let r;try{const s=await Ix(t,n.fetchRequestInit,({res:a,result:l})=>(e||(e=a.headers.get("Content-Type")||""),BS(l)));r=jS(s,e)}catch(s){r=n.imagePlaceholder||"";let a=`Failed to fetch resource: ${t}`;s&&(a=typeof s=="string"?s:s.message),a&&console.warn(a)}return $c[i]=r,r}async function HS(t){const e=t.toDataURL();return e==="data:,"?t.cloneNode(!1):Gl(e)}async function GS(t,e){if(t.currentSrc){const s=document.createElement("canvas"),a=s.getContext("2d");s.width=t.clientWidth,s.height=t.clientHeight,a==null||a.drawImage(t,0,0,s.width,s.height);const l=s.toDataURL();return Gl(l)}const n=t.poster,i=mh(n),r=await gh(n,i,e);return Gl(r)}async function WS(t,e){var n;try{if(!((n=t==null?void 0:t.contentDocument)===null||n===void 0)&&n.body)return await mc(t.contentDocument.body,e,!0)}catch{}return t.cloneNode(!1)}async function XS(t,e){return yn(t,HTMLCanvasElement)?HS(t):yn(t,HTMLVideoElement)?GS(t,e):yn(t,HTMLIFrameElement)?WS(t,e):t.cloneNode(Ux(t))}const qS=t=>t.tagName!=null&&t.tagName.toUpperCase()==="SLOT",Ux=t=>t.tagName!=null&&t.tagName.toUpperCase()==="SVG";async function $S(t,e,n){var i,r;if(Ux(e))return e;let s=[];return qS(t)&&t.assignedNodes?s=hr(t.assignedNodes()):yn(t,HTMLIFrameElement)&&(!((i=t.contentDocument)===null||i===void 0)&&i.body)?s=hr(t.contentDocument.body.childNodes):s=hr(((r=t.shadowRoot)!==null&&r!==void 0?r:t).childNodes),s.length===0||yn(t,HTMLVideoElement)||await s.reduce((a,l)=>a.then(()=>mc(l,n)).then(c=>{c&&e.appendChild(c)}),Promise.resolve()),e}function YS(t,e,n){const i=e.style;if(!i)return;const r=window.getComputedStyle(t);r.cssText?(i.cssText=r.cssText,i.transformOrigin=r.transformOrigin):Px(n).forEach(s=>{let a=r.getPropertyValue(s);s==="font-size"&&a.endsWith("px")&&(a=`${Math.floor(parseFloat(a.substring(0,a.length-2)))-.1}px`),yn(t,HTMLIFrameElement)&&s==="display"&&a==="inline"&&(a="block"),s==="d"&&e.getAttribute("d")&&(a=`path(${e.getAttribute("d")})`),i.setProperty(s,a,r.getPropertyPriority(s))})}function KS(t,e){yn(t,HTMLTextAreaElement)&&(e.innerHTML=t.value),yn(t,HTMLInputElement)&&e.setAttribute("value",t.value)}function ZS(t,e){if(yn(t,HTMLSelectElement)){const n=e,i=Array.from(n.children).find(r=>t.value===r.getAttribute("value"));i&&i.setAttribute("selected","")}}function QS(t,e,n){return yn(e,Element)&&(YS(t,e,n),kS(t,e,n),KS(t,e),ZS(t,e)),e}async function JS(t,e){const n=t.querySelectorAll?t.querySelectorAll("use"):[];if(n.length===0)return t;const i={};for(let s=0;s<n.length;s++){const l=n[s].getAttribute("xlink:href");if(l){const c=t.querySelector(l),u=document.querySelector(l);!c&&u&&!i[l]&&(i[l]=await mc(u,e,!0))}}const r=Object.values(i);if(r.length){const s="http://www.w3.org/1999/xhtml",a=document.createElementNS(s,"svg");a.setAttribute("xmlns",s),a.style.position="absolute",a.style.width="0",a.style.height="0",a.style.overflow="hidden",a.style.display="none";const l=document.createElementNS(s,"defs");a.appendChild(l);for(let c=0;c<r.length;c++)l.appendChild(r[c]);t.appendChild(a)}return t}async function mc(t,e,n){return!n&&e.filter&&!e.filter(t)?null:Promise.resolve(t).then(i=>XS(i,e)).then(i=>$S(t,i,e)).then(i=>QS(t,i,e)).then(i=>JS(i,e))}const Fx=/url\((['"]?)([^'"]+?)\1\)/g,e1=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,t1=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function n1(t){const e=t.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${e})(['"]?\\))`,"g")}function i1(t){const e=[];return t.replace(Fx,(n,i,r)=>(e.push(r),n)),e.filter(n=>!Cd(n))}async function r1(t,e,n,i,r){try{const s=n?TS(e,n):e,a=mh(e);let l;return r||(l=await gh(s,a,i)),t.replace(n1(e),`$1${l}$3`)}catch{}return t}function s1(t,{preferredFontFormat:e}){return e?t.replace(t1,n=>{for(;;){const[i,,r]=e1.exec(n)||[];if(!r)return"";if(r===e)return`src: ${i};`}}):t}function kx(t){return t.search(Fx)!==-1}async function Ox(t,e,n){if(!kx(t))return t;const i=s1(t,n);return i1(i).reduce((s,a)=>s.then(l=>r1(l,a,e,n)),Promise.resolve(i))}async function is(t,e,n){var i;const r=(i=e.style)===null||i===void 0?void 0:i.getPropertyValue(t);if(r){const s=await Ox(r,null,n);return e.style.setProperty(t,s,e.style.getPropertyPriority(t)),!0}return!1}async function a1(t,e){await is("background",t,e)||await is("background-image",t,e),await is("mask",t,e)||await is("-webkit-mask",t,e)||await is("mask-image",t,e)||await is("-webkit-mask-image",t,e)}async function o1(t,e){const n=yn(t,HTMLImageElement);if(!(n&&!Cd(t.src))&&!(yn(t,SVGImageElement)&&!Cd(t.href.baseVal)))return;const i=n?t.src:t.href.baseVal,r=await gh(i,mh(i),e);await new Promise((s,a)=>{t.onload=s,t.onerror=e.onImageErrorHandler?(...c)=>{try{s(e.onImageErrorHandler(...c))}catch(u){a(u)}}:a;const l=t;l.decode&&(l.decode=s),l.loading==="lazy"&&(l.loading="eager"),n?(t.srcset="",t.src=r):t.href.baseVal=r})}async function l1(t,e){const i=hr(t.childNodes).map(r=>zx(r,e));await Promise.all(i).then(()=>t)}async function zx(t,e){yn(t,Element)&&(await a1(t,e),await o1(t,e),await l1(t,e))}function c1(t,e){const{style:n}=t;e.backgroundColor&&(n.backgroundColor=e.backgroundColor),e.width&&(n.width=`${e.width}px`),e.height&&(n.height=`${e.height}px`);const i=e.style;return i!=null&&Object.keys(i).forEach(r=>{n[r]=i[r]}),t}const cm={};async function um(t){let e=cm[t];if(e!=null)return e;const i=await(await fetch(t)).text();return e={url:t,cssText:i},cm[t]=e,e}async function dm(t,e){let n=t.cssText;const i=/url\(["']?([^"')]+)["']?\)/g,s=(n.match(/url\([^)]+\)/g)||[]).map(async a=>{let l=a.replace(i,"$1");return l.startsWith("https://")||(l=new URL(l,t.url).href),Ix(l,e.fetchRequestInit,({result:c})=>(n=n.replace(a,`url(${c})`),[a,c]))});return Promise.all(s).then(()=>n)}function fm(t){if(t==null)return[];const e=[],n=/(\/\*[\s\S]*?\*\/)/gi;let i=t.replace(n,"");const r=new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})","gi");for(;;){const c=r.exec(i);if(c===null)break;e.push(c[0])}i=i.replace(r,"");const s=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,a="((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})",l=new RegExp(a,"gi");for(;;){let c=s.exec(i);if(c===null){if(c=l.exec(i),c===null)break;s.lastIndex=l.lastIndex}else l.lastIndex=s.lastIndex;e.push(c[0])}return e}async function u1(t,e){const n=[],i=[];return t.forEach(r=>{if("cssRules"in r)try{hr(r.cssRules||[]).forEach((s,a)=>{if(s.type===CSSRule.IMPORT_RULE){let l=a+1;const c=s.href,u=um(c).then(h=>dm(h,e)).then(h=>fm(h).forEach(p=>{try{r.insertRule(p,p.startsWith("@import")?l+=1:r.cssRules.length)}catch(f){console.error("Error inserting rule from remote css",{rule:p,error:f})}})).catch(h=>{console.error("Error loading remote css",h.toString())});i.push(u)}})}catch(s){const a=t.find(l=>l.href==null)||document.styleSheets[0];r.href!=null&&i.push(um(r.href).then(l=>dm(l,e)).then(l=>fm(l).forEach(c=>{a.insertRule(c,a.cssRules.length)})).catch(l=>{console.error("Error loading remote stylesheet",l)})),console.error("Error inlining remote css file",s)}}),Promise.all(i).then(()=>(t.forEach(r=>{if("cssRules"in r)try{hr(r.cssRules||[]).forEach(s=>{n.push(s)})}catch(s){console.error(`Error while reading CSS rules from ${r.href}`,s)}}),n))}function d1(t){return t.filter(e=>e.type===CSSRule.FONT_FACE_RULE).filter(e=>kx(e.style.getPropertyValue("src")))}async function f1(t,e){if(t.ownerDocument==null)throw new Error("Provided element is not within a Document");const n=hr(t.ownerDocument.styleSheets),i=await u1(n,e);return d1(i)}function Bx(t){return t.trim().replace(/["']/g,"")}function h1(t){const e=new Set;function n(i){(i.style.fontFamily||getComputedStyle(i).fontFamily).split(",").forEach(s=>{e.add(Bx(s))}),Array.from(i.children).forEach(s=>{s instanceof HTMLElement&&n(s)})}return n(t),e}async function p1(t,e){const n=await f1(t,e),i=h1(t);return(await Promise.all(n.filter(s=>i.has(Bx(s.style.fontFamily))).map(s=>{const a=s.parentStyleSheet?s.parentStyleSheet.href:null;return Ox(s.cssText,a,e)}))).join(`
`)}async function m1(t,e){const n=e.fontEmbedCSS!=null?e.fontEmbedCSS:e.skipFonts?null:await p1(t,e);if(n){const i=document.createElement("style"),r=document.createTextNode(n);i.appendChild(r),t.firstChild?t.insertBefore(i,t.firstChild):t.appendChild(i)}}async function g1(t,e={}){const{width:n,height:i}=Dx(t,e),r=await mc(t,e,!0);return await m1(r,e),await zx(r,e),c1(r,e),await DS(r,n,i)}async function x1(t,e={}){const{width:n,height:i}=Dx(t,e),r=await g1(t,e),s=await Gl(r),a=document.createElement("canvas"),l=a.getContext("2d"),c=e.pixelRatio||NS(),u=e.canvasWidth||n,h=e.canvasHeight||i;return a.width=u*c,a.height=h*c,e.skipAutoScale||LS(a),a.style.width=`${u}`,a.style.height=`${h}`,e.backgroundColor&&(l.fillStyle=e.backgroundColor,l.fillRect(0,0,a.width,a.height)),l.drawImage(s,0,0,a.width,a.height),a}async function Qa(t,e={}){return(await x1(t,e)).toDataURL()}var jx={exports:{}};(function(t,e){(function(n,i,r,s){var a={URL:n.URL||n.webkitURL||n.mozURL||n.msURL,getUserMedia:function(){var b=r.getUserMedia||r.webkitGetUserMedia||r.mozGetUserMedia||r.msGetUserMedia;return b&&b.bind(r)}(),requestAnimFrame:n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame||n.oRequestAnimationFrame||n.msRequestAnimationFrame,requestTimeout:function(M,I){if(M=M||a.noop,I=I||0,!a.requestAnimFrame)return setTimeout(M,I);var k=new Date().getTime(),F=new Object,he=a.requestAnimFrame,pe=function oe(){var j=new Date().getTime(),ie=j-k;ie>=I?M.call():F.value=he(oe)};return F.value=he(pe),F},Blob:n.Blob||n.BlobBuilder||n.WebKitBlobBuilder||n.MozBlobBuilder||n.MSBlobBuilder,btoa:function(){var b=n.btoa||function(M){for(var I="",k=0,F=M.length,he="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",pe=void 0,oe=void 0,j=void 0,ie=void 0,de=void 0,Ne=void 0,Ee=void 0;k<F;)pe=M.charCodeAt(k++),oe=M.charCodeAt(k++),j=M.charCodeAt(k++),ie=pe>>2,de=(pe&3)<<4|oe>>4,Ne=(oe&15)<<2|j>>6,Ee=j&63,isNaN(oe)?Ne=Ee=64:isNaN(j)&&(Ee=64),I=I+he.charAt(ie)+he.charAt(de)+he.charAt(Ne)+he.charAt(Ee);return I};return b?b.bind(n):a.noop}(),isObject:function(M){return M&&Object.prototype.toString.call(M)==="[object Object]"},isEmptyObject:function(M){return a.isObject(M)&&!Object.keys(M).length},isArray:function(M){return M&&Array.isArray(M)},isFunction:function(M){return M&&typeof M=="function"},isElement:function(M){return M&&M.nodeType===1},isString:function(M){return typeof M=="string"||Object.prototype.toString.call(M)==="[object String]"},isSupported:{canvas:function(){var M=i.createElement("canvas");return M&&M.getContext&&M.getContext("2d")},webworkers:function(){return n.Worker},blob:function(){return a.Blob},Uint8Array:function(){return n.Uint8Array},Uint32Array:function(){return n.Uint32Array},videoCodecs:function(){var b=i.createElement("video"),M={mp4:!1,h264:!1,ogv:!1,ogg:!1,webm:!1};try{b&&b.canPlayType&&(M.mp4=b.canPlayType('video/mp4; codecs="mp4v.20.8"')!=="",M.h264=(b.canPlayType('video/mp4; codecs="avc1.42E01E"')||b.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"'))!=="",M.ogv=b.canPlayType('video/ogg; codecs="theora"')!=="",M.ogg=b.canPlayType('video/ogg; codecs="theora"')!=="",M.webm=b.canPlayType('video/webm; codecs="vp8, vorbis"')!==-1)}catch{}return M}()},noop:function(){},each:function(M,I){var k=void 0,F=void 0;if(a.isArray(M))for(k=-1,F=M.length;++k<F&&I(k,M[k])!==!1;);else if(a.isObject(M)){for(k in M)if(M.hasOwnProperty(k)&&I(k,M[k])===!1)break}},mergeOptions:function(M,I){if(!(!a.isObject(M)||!a.isObject(I)||!Object.keys)){var k={};return a.each(M,function(F,he){k[F]=M[F]}),a.each(I,function(F,he){var pe=I[F];a.isObject(pe)&&M[F]?k[F]=a.mergeOptions(M[F],pe):k[F]=pe}),k}},setCSSAttr:function(M,I,k){a.isElement(M)&&(a.isString(I)&&a.isString(k)?M.style[I]=k:a.isObject(I)&&a.each(I,function(F,he){M.style[F]=he}))},removeElement:function(M){a.isElement(M)&&M.parentNode&&M.parentNode.removeChild(M)},createWebWorker:function(M){if(!a.isString(M))return{};try{var I=new a.Blob([M],{type:"text/javascript"}),k=a.URL.createObjectURL(I),F=new Worker(k);return{objectUrl:k,worker:F}}catch(he){return""+he}},getExtension:function(M){return M.substr(M.lastIndexOf(".")+1,M.length)},getFontSize:function(){var M=arguments.length>0&&arguments[0]!==s?arguments[0]:{};if(!i.body||M.resizeFont===!1)return M.fontSize;var I=M.text,k=M.gifWidth,F=parseInt(M.fontSize,10),he=parseInt(M.minFontSize,10),pe=i.createElement("div"),oe=i.createElement("span");for(pe.setAttribute("width",k),pe.appendChild(oe),oe.innerHTML=I,oe.style.fontSize=F+"px",oe.style.textIndent="-9999px",oe.style.visibility="hidden",i.body.appendChild(oe);oe.offsetWidth>k&&F>=he;)oe.style.fontSize=--F+"px";return i.body.removeChild(oe),F+"px"},webWorkerError:!1},l=Object.freeze({default:a}),c={validate:function(M){M=a.isObject(M)?M:{};var I={};return a.each(c.validators,function(k,F){var he=F.errorCode;if(!M[he]&&!F.condition)return I=F,I.error=!0,!1}),delete I.condition,I},isValid:function(M){var I=c.validate(M),k=I.error!==!0;return k},validators:[{condition:a.isFunction(a.getUserMedia),errorCode:"getUserMedia",errorMsg:"The getUserMedia API is not supported in your browser"},{condition:a.isSupported.canvas(),errorCode:"canvas",errorMsg:"Canvas elements are not supported in your browser"},{condition:a.isSupported.webworkers(),errorCode:"webworkers",errorMsg:"The Web Workers API is not supported in your browser"},{condition:a.isFunction(a.URL),errorCode:"window.URL",errorMsg:"The window.URL API is not supported in your browser"},{condition:a.isSupported.blob(),errorCode:"window.Blob",errorMsg:"The window.Blob File API is not supported in your browser"},{condition:a.isSupported.Uint8Array(),errorCode:"window.Uint8Array",errorMsg:"The window.Uint8Array function constructor is not supported in your browser"},{condition:a.isSupported.Uint32Array(),errorCode:"window.Uint32Array",errorMsg:"The window.Uint32Array function constructor is not supported in your browser"}],messages:{videoCodecs:{errorCode:"videocodec",errorMsg:"The video codec you are trying to use is not supported in your browser"}}},u=Object.freeze({default:c}),h=function(){},p={sampleInterval:10,numWorkers:2,filter:"",gifWidth:200,gifHeight:200,interval:.1,numFrames:10,frameDuration:1,keepCameraOn:!1,images:[],video:null,webcamVideoElement:null,cameraStream:null,text:"",fontWeight:"normal",fontSize:"16px",minFontSize:"10px",resizeFont:!1,fontFamily:"sans-serif",fontColor:"#ffffff",textAlign:"center",textBaseline:"bottom",textXCoordinate:null,textYCoordinate:null,progressCallback:h,completeCallback:h,saveRenderingContexts:!1,savedRenderingContexts:[],crossOrigin:"Anonymous"},f=Object.freeze({default:p});function m(){return c.isValid()}function _(){return c.isValid()}function E(){var b={getUserMedia:!0};return c.isValid(b)}function x(b){var M=!1;if(a.isArray(b)&&b.length){if(a.each(b,function(I,k){a.isSupported.videoCodecs[k]&&(M=!0)}),!M)return!1}else if(a.isString(b)&&b.length&&!a.isSupported.videoCodecs[b])return!1;return c.isValid({getUserMedia:!0})}function d(){var b=256,M=499,I=491,k=487,F=503,he=3*F,pe=b-1,oe=4,j=100,ie=16,de=1<<ie,Ne=10,Ee=10,X=de>>Ee,we=de<<Ne-Ee,Se=b>>3,Te=6,Ce=1<<Te,De=Se*Ce,ze=30,Ie=10,Ue=1<<Ie,Ke,Xe=8,Qe=1<<Xe,V=Ie+Xe,qe=1<<V,Ze,U,S,G,J=[],ue=[],Me=[],Pe=[];function fe($,le,xe){var P,ne;for(Ze=$,U=le,S=xe,G=new Array(b),P=0;P<b;P++)G[P]=new Array(4),ne=G[P],ne[0]=ne[1]=ne[2]=(P<<oe+8)/b|0,Me[P]=de/b|0,ue[P]=0}function me(){for(var $=[],le=new Array(b),xe=0;xe<b;xe++)le[G[xe][3]]=xe;for(var P=0,ne=0;ne<b;ne++){var Z=le[ne];$[P++]=G[Z][0],$[P++]=G[Z][1],$[P++]=G[Z][2]}return $}function z(){var $,le,xe,P,ne,Z,ye,Le;for(ye=0,Le=0,$=0;$<b;$++){for(ne=G[$],xe=$,P=ne[1],le=$+1;le<b;le++)Z=G[le],Z[1]<P&&(xe=le,P=Z[1]);if(Z=G[xe],$!=xe&&(le=Z[0],Z[0]=ne[0],ne[0]=le,le=Z[1],Z[1]=ne[1],ne[1]=le,le=Z[2],Z[2]=ne[2],ne[2]=le,le=Z[3],Z[3]=ne[3],ne[3]=le),P!=ye){for(J[ye]=Le+$>>1,le=ye+1;le<P;le++)J[le]=$;ye=P,Le=$}}for(J[ye]=Le+pe>>1,le=ye+1;le<256;le++)J[le]=pe}function ee(){var $,le,xe,P,ne,Z,ye,Le,Be,tt,an,St,Gt,Qr;for(U<he&&(S=1),Ke=30+(S-1)/3,St=Ze,Gt=0,Qr=U,an=U/(3*S),tt=an/j|0,Le=Ue,Z=De,ye=Z>>Te,ye<=1&&(ye=0),$=0;$<ye;$++)Pe[$]=Le*((ye*ye-$*$)*Qe/(ye*ye));for(U<he?Be=3:U%M!==0?Be=3*M:U%I!==0?Be=3*I:U%k!==0?Be=3*k:Be=3*F,$=0;$<an;)if(xe=(St[Gt+0]&255)<<oe,P=(St[Gt+1]&255)<<oe,ne=(St[Gt+2]&255)<<oe,le=O(xe,P,ne),Ge(Le,le,xe,P,ne),ye!==0&&Ae(ye,le,xe,P,ne),Gt+=Be,Gt>=Qr&&(Gt-=U),$++,tt===0&&(tt=1),$%tt===0)for(Le-=Le/Ke,Z-=Z/ze,ye=Z>>Te,ye<=1&&(ye=0),le=0;le<ye;le++)Pe[le]=Le*((ye*ye-le*le)*Qe/(ye*ye))}function ge($,le,xe){var P,ne,Z,ye,Le,Be,tt;for(Le=1e3,tt=-1,P=J[le],ne=P-1;P<b||ne>=0;)P<b&&(Be=G[P],Z=Be[1]-le,Z>=Le?P=b:(P++,Z<0&&(Z=-Z),ye=Be[0]-$,ye<0&&(ye=-ye),Z+=ye,Z<Le&&(ye=Be[2]-xe,ye<0&&(ye=-ye),Z+=ye,Z<Le&&(Le=Z,tt=Be[3])))),ne>=0&&(Be=G[ne],Z=le-Be[1],Z>=Le?ne=-1:(ne--,Z<0&&(Z=-Z),ye=Be[0]-$,ye<0&&(ye=-ye),Z+=ye,Z<Le&&(ye=Be[2]-xe,ye<0&&(ye=-ye),Z+=ye,Z<Le&&(Le=Z,tt=Be[3]))));return tt}function _e(){return ee(),be(),z(),me()}function be(){var $;for($=0;$<b;$++)G[$][0]>>=oe,G[$][1]>>=oe,G[$][2]>>=oe,G[$][3]=$}function Ae($,le,xe,P,ne){var Z,ye,Le,Be,tt,an,St;for(Le=le-$,Le<-1&&(Le=-1),Be=le+$,Be>b&&(Be=b),Z=le+1,ye=le-1,an=1;Z<Be||ye>Le;){if(tt=Pe[an++],Z<Be){St=G[Z++];try{St[0]-=tt*(St[0]-xe)/qe|0,St[1]-=tt*(St[1]-P)/qe|0,St[2]-=tt*(St[2]-ne)/qe|0}catch{}}if(ye>Le){St=G[ye--];try{St[0]-=tt*(St[0]-xe)/qe|0,St[1]-=tt*(St[1]-P)/qe|0,St[2]-=tt*(St[2]-ne)/qe|0}catch{}}}}function Ge($,le,xe,P,ne){var Z=G[le],ye=$/Ue;Z[0]-=ye*(Z[0]-xe)|0,Z[1]-=ye*(Z[1]-P)|0,Z[2]-=ye*(Z[2]-ne)|0}function O($,le,xe){var P,ne,Z,ye,Le,Be,tt,an,St,Gt;for(an=2147483647,St=an,Be=-1,tt=Be,P=0;P<b;P++)Gt=G[P],ne=Gt[0]-$,ne<0&&(ne=-ne),Z=Gt[1]-le,Z<0&&(Z=-Z),ne+=Z,Z=Gt[2]-xe,Z<0&&(Z=-Z),ne+=Z,ne<an&&(an=ne,Be=P),ye=ne-(ue[P]>>ie-oe),ye<St&&(St=ye,tt=P),Le=Me[P]>>Ee,Me[P]-=Le,ue[P]+=Le<<Ne;return Me[Be]+=X,ue[Be]-=we,tt}fe.apply(this,arguments);var ve={};return ve.map=ge,ve.process=_e,ve}function v(){var b=this;try{b.onmessage=function(I){var k=I.data||{},F;k.gifshot&&(F=M.run(k),postMessage(F))}}catch{}var M={dataToRGB:function(k,F,he){for(var pe=F*he*4,oe=0,j=[];oe<pe;)j.push(k[oe++]),j.push(k[oe++]),j.push(k[oe++]),oe++;return j},componentizedPaletteToArray:function(k){k=k||[];for(var F=[],he=0;he<k.length;he+=3){var pe=k[he],oe=k[he+1],j=k[he+2];F.push(pe<<16|oe<<8|j)}return F},processFrameWithQuantizer:function(k,F,he,pe){for(var oe=this.dataToRGB(k,F,he),j=new d(oe,oe.length,pe),ie=j.process(),de=new Uint32Array(this.componentizedPaletteToArray(ie)),Ne=F*he,Ee=new Uint8Array(Ne),X=0,we=0;we<Ne;we++){var Se=oe[X++],Te=oe[X++],Ce=oe[X++];Ee[we]=j.map(Se,Te,Ce)}return{pixels:Ee,palette:de}},run:function(k){k=k||{};var F=k,he=F.height;F.palette;var pe=F.sampleInterval,oe=F.width,j=k.data;return this.processFrameWithQuantizer(j,oe,he,pe)}};return M}function w(b,M,I,k){var F=0;k=k===s?{}:k;var he=k.loop===s?null:k.loop,pe=k.palette===s?null:k.palette;if(M<=0||I<=0||M>65535||I>65535)throw"Width/Height invalid.";function oe(Ee){var X=Ee.length;if(X<2||X>256||X&X-1)throw"Invalid code/color length, must be power of 2 and 2 .. 256.";return X}b[F++]=71,b[F++]=73,b[F++]=70,b[F++]=56,b[F++]=57,b[F++]=97;var j=0,ie=0;if(b[F++]=M&255,b[F++]=M>>8&255,b[F++]=I&255,b[F++]=I>>8&255,b[F++]=(pe!==null?128:0)|j,b[F++]=ie,b[F++]=0,he!==null){if(he<0||he>65535)throw"Loop count invalid.";b[F++]=33,b[F++]=255,b[F++]=11,b[F++]=78,b[F++]=69,b[F++]=84,b[F++]=83,b[F++]=67,b[F++]=65,b[F++]=80,b[F++]=69,b[F++]=50,b[F++]=46,b[F++]=48,b[F++]=3,b[F++]=1,b[F++]=he&255,b[F++]=he>>8&255,b[F++]=0}var de=!1;this.addFrame=function(Ee,X,we,Se,Te,Ce){if(de===!0&&(--F,de=!1),Ce=Ce===s?{}:Ce,Ee<0||X<0||Ee>65535||X>65535)throw"x/y invalid.";if(we<=0||Se<=0||we>65535||Se>65535)throw"Width/Height invalid.";if(Te.length<we*Se)throw"Not enough pixels for the frame size.";var De=!0,ze=Ce.palette;if((ze===s||ze===null)&&(De=!1,ze=pe),ze===s||ze===null)throw"Must supply either a local or global palette.";for(var Ie=oe(ze),Ue=0;Ie>>=1;)++Ue;Ie=1<<Ue;var Ke=Ce.delay===s?0:Ce.delay,Xe=Ce.disposal===s?0:Ce.disposal;if(Xe<0||Xe>3)throw"Disposal out of range.";var Qe=!1,V=0;if(Ce.transparent!==s&&Ce.transparent!==null&&(Qe=!0,V=Ce.transparent,V<0||V>=Ie))throw"Transparent color index.";if((Xe!==0||Qe||Ke!==0)&&(b[F++]=33,b[F++]=249,b[F++]=4,b[F++]=Xe<<2|(Qe===!0?1:0),b[F++]=Ke&255,b[F++]=Ke>>8&255,b[F++]=V,b[F++]=0),b[F++]=44,b[F++]=Ee&255,b[F++]=Ee>>8&255,b[F++]=X&255,b[F++]=X>>8&255,b[F++]=we&255,b[F++]=we>>8&255,b[F++]=Se&255,b[F++]=Se>>8&255,b[F++]=De===!0?128|Ue-1:0,De===!0)for(var qe=0,Ze=ze.length;qe<Ze;++qe){var U=ze[qe];b[F++]=U>>16&255,b[F++]=U>>8&255,b[F++]=U&255}F=Ne(b,F,Ue<2?2:Ue,Te)},this.end=function(){return de===!1&&(b[F++]=59,de=!0),F};function Ne(Ee,X,we,Se){Ee[X++]=we;var Te=X++,Ce=1<<we,De=Ce-1,ze=Ce+1,Ie=ze+1,Ue=we+1,Ke=0,Xe=0;function Qe(Me){for(;Ke>=Me;)Ee[X++]=Xe&255,Xe>>=8,Ke-=8,X===Te+256&&(Ee[Te]=255,Te=X++)}function V(Me){Xe|=Me<<Ke,Ke+=Ue,Qe(8)}var qe=Se[0]&De,Ze={};V(Ce);for(var U=1,S=Se.length;U<S;++U){var G=Se[U]&De,J=qe<<8|G,ue=Ze[J];if(ue===s){for(Xe|=qe<<Ke,Ke+=Ue;Ke>=8;)Ee[X++]=Xe&255,Xe>>=8,Ke-=8,X===Te+256&&(Ee[Te]=255,Te=X++);Ie===4096?(V(Ce),Ie=ze+1,Ue=we+1,Ze={}):(Ie>=1<<Ue&&++Ue,Ze[J]=Ie++),qe=G}else qe=ue}return V(qe),V(ze),Qe(1),Te+1===X?Ee[Te]=0:(Ee[Te]=X-Te-1,Ee[X++]=0),X}}var y=function(){},T=function(M){this.canvas=null,this.ctx=null,this.repeat=0,this.frames=[],this.numRenderedFrames=0,this.onRenderCompleteCallback=y,this.onRenderProgressCallback=y,this.workers=[],this.availableWorkers=[],this.generatingGIF=!1,this.options=M,this.initializeWebWorkers(M)};T.prototype={workerMethods:v(),initializeWebWorkers:function(M){var I=this,k=d.toString()+"("+v.toString()+"());",F=void 0,he=void 0,pe=void 0,oe=void 0,j=-1,ie="";for(oe=M.numWorkers;++j<oe;)F=a.createWebWorker(k),a.isObject(F)?(he=F.objectUrl,pe=F.worker,I.workers.push({worker:pe,objectUrl:he}),I.availableWorkers.push(pe)):(ie=F,a.webWorkerError=!!F);this.workerError=ie,this.canvas=i.createElement("canvas"),this.canvas.width=M.gifWidth,this.canvas.height=M.gifHeight,this.ctx=this.canvas.getContext("2d"),this.frames=[]},getWorker:function(){return this.availableWorkers.pop()},freeWorker:function(M){this.availableWorkers.push(M)},byteMap:function(){for(var b=[],M=0;M<256;M++)b[M]=String.fromCharCode(M);return b}(),bufferToString:function(M){for(var I=M.length,k="",F=-1;++F<I;)k+=this.byteMap[M[F]];return k},onFrameFinished:function(M){var I=this,k=I.frames,F=I.options,he=!!(F.images||[]).length,pe=k.every(function(oe){return!oe.beingProcessed&&oe.done});I.numRenderedFrames++,he&&M(I.numRenderedFrames/k.length),I.onRenderProgressCallback(I.numRenderedFrames*.75/k.length),pe?I.generatingGIF||I.generateGIF(k,I.onRenderCompleteCallback):a.requestTimeout(function(){I.processNextFrame()},1)},processFrame:function(M){var I=this;this.options;var k=this.options,F=k.progressCallback,he=k.sampleInterval,pe=this.frames,oe=void 0,j=void 0,ie=function(){var Ne=arguments.length>0&&arguments[0]!==s?arguments[0]:{},Ee=Ne.data;delete oe.data,oe.pixels=Array.prototype.slice.call(Ee.pixels),oe.palette=Array.prototype.slice.call(Ee.palette),oe.done=!0,oe.beingProcessed=!1,I.freeWorker(j),I.onFrameFinished(F)};if(oe=pe[M],oe.beingProcessed||oe.done){this.onFrameFinished();return}oe.sampleInterval=he,oe.beingProcessed=!0,oe.gifshot=!0,j=this.getWorker(),j?(j.onmessage=ie,j.postMessage(oe)):ie({data:I.workerMethods.run(oe)})},startRendering:function(M){this.onRenderCompleteCallback=M;for(var I=0;I<this.options.numWorkers&&I<this.frames.length;I++)this.processFrame(I)},processNextFrame:function(){for(var M=-1,I=0;I<this.frames.length;I++){var k=this.frames[I];if(!k.done&&!k.beingProcessed){M=I;break}}M>=0&&this.processFrame(M)},generateGIF:function(M,I){var k=[],F={loop:this.repeat},he=this.options,pe=he.interval,oe=he.frameDuration,j=he.images,ie=!!j.length,de=he.gifHeight,Ne=he.gifWidth,Ee=new w(k,Ne,de,F),X=this.onRenderProgressCallback,we=ie?pe*100:0,Se=void 0,Te=void 0;this.generatingGIF=!0,a.each(M,function(Ce,De){var ze=De.palette;X(.75+.25*De.position*1/M.length);for(var Ie=0;Ie<oe;Ie++)Ee.addFrame(0,0,Ne,de,De.pixels,{palette:ze,delay:we})}),Ee.end(),X(1),this.frames=[],this.generatingGIF=!1,a.isFunction(I)&&(Se=this.bufferToString(k),Te="data:image/gif;base64,"+a.btoa(Se),I(Te))},setRepeat:function(M){this.repeat=M},addFrame:function(M,I){I=a.isObject(I)?I:{};var k=this,F=k.ctx,he=k.options,pe=he.gifWidth,oe=he.gifHeight,j=a.getFontSize(I),ie=I,de=ie.filter,Ne=ie.fontColor,Ee=ie.fontFamily,X=ie.fontWeight;ie.gifHeight,ie.gifWidth;var we=ie.text,Se=ie.textAlign,Te=ie.textBaseline,Ce=I.textXCoordinate?I.textXCoordinate:Se==="left"?1:Se==="right"?pe:pe/2,De=I.textYCoordinate?I.textYCoordinate:Te==="top"?1:Te==="center"?oe/2:oe,ze=X+" "+j+" "+Ee,Ie=void 0;try{F.filter=de,F.drawImage(M,0,0,pe,oe),we&&(F.font=ze,F.fillStyle=Ne,F.textAlign=Se,F.textBaseline=Te,F.fillText(we,Ce,De)),Ie=F.getImageData(0,0,pe,oe),k.addFrameImageData(Ie)}catch(Ue){return""+Ue}},addFrameImageData:function(){var M=arguments.length>0&&arguments[0]!==s?arguments[0]:{},I=this.frames,k=M.data;this.frames.push({data:k,width:M.width,height:M.height,palette:null,dithering:null,done:!1,beingProcessed:!1,position:I.length})},onRenderProgress:function(M){this.onRenderProgressCallback=M},isRendering:function(){return this.generatingGIF},getBase64GIF:function(M){var I=this,k=function(he){I.destroyWorkers(),a.requestTimeout(function(){M(he)},0)};I.startRendering(k)},destroyWorkers:function(){if(!this.workerError){var M=this.workers;a.each(M,function(I,k){var F=k.worker,he=k.objectUrl;F.terminate(),a.URL.revokeObjectURL(he)})}}};function C(b,M){b.getBase64GIF(function(I){M({error:!1,errorCode:"",errorMsg:"",image:I})})}function L(){var b=arguments.length>0&&arguments[0]!==s?arguments[0]:{},M=b.callback,I=b.images,k=b.options,F=b.imagesLength,he={getUserMedia:!0,"window.URL":!0},pe=c.validate(he),oe=[],j=0,ie=void 0,de=void 0;if(pe.error)return M(pe);de=new T(k),a.each(I,function(Ee,X){var we=X;X.src&&(we=we.src),a.isElement(we)?(k.crossOrigin&&(we.crossOrigin=k.crossOrigin),oe[Ee]=we,j+=1,j===F&&Ne()):a.isString(we)&&(ie=new Image,k.crossOrigin&&(ie.crossOrigin=k.crossOrigin),function(Se){X.text&&(Se.text=X.text),Se.onerror=function(Te){var Ce=void 0;if(--F,F===0)return Ce={},Ce.error="None of the requested images was capable of being retrieved",M(Ce)},Se.onload=function(Te){X.text?oe[Ee]={img:Se,text:Se.text}:oe[Ee]=Se,j+=1,j===F&&Ne(),a.removeElement(Se)},Se.src=we}(ie),a.setCSSAttr(ie,{position:"fixed",opacity:"0"}),i.body.appendChild(ie))});function Ne(){a.each(oe,function(Ee,X){X&&(X.text?de.addFrame(X.img,k,X.text):de.addFrame(X,k))}),C(de,M)}}var g=function(){},R={getGIF:function(){var M=arguments.length>0&&arguments[0]!==s?arguments[0]:{},I=arguments[1];I=a.isFunction(I)?I:g;var k=i.createElement("canvas"),F=void 0,he=M.images,pe=!!he.length,oe=M.cameraStream,j=M.crop,ie=M.filter,de=M.fontColor,Ne=M.fontFamily,Ee=M.fontWeight,X=M.keepCameraOn;M.numWorkers;var we=M.progressCallback,Se=M.saveRenderingContexts,Te=M.savedRenderingContexts,Ce=M.text,De=M.textAlign,ze=M.textBaseline,Ie=M.videoElement,Ue=M.videoHeight,Ke=M.videoWidth,Xe=M.webcamVideoElement,Qe=Number(M.gifWidth),V=Number(M.gifHeight),qe=Number(M.interval);Number(M.sampleInterval);var Ze=pe?0:qe*1e3,U=[],S=Te.length?Te.length:M.numFrames,G=S,J=new T(M),ue=a.getFontSize(M),Me=M.textXCoordinate?M.textXCoordinate:De==="left"?1:De==="right"?Qe:Qe/2,Pe=M.textYCoordinate?M.textYCoordinate:ze==="top"?1:ze==="center"?V/2:V,fe=Ee+" "+ue+" "+Ne,me=j?Math.floor(j.scaledWidth/2):0,z=j?Ke-j.scaledWidth:0,ee=j?Math.floor(j.scaledHeight/2):0,ge=j?Ue-j.scaledHeight:0,_e=function be(){var Ae=G-1;Te.length?(F.putImageData(Te[S-G],0,0),O()):Ge();function Ge(){try{z>Ke&&(z=Ke),ge>Ue&&(ge=Ue),me<0&&(me=0),ee<0&&(ee=0),F.filter=ie,F.drawImage(Ie,me,ee,z,ge,0,0,Qe,V),O()}catch(ve){if(ve.name==="NS_ERROR_NOT_AVAILABLE")a.requestTimeout(Ge,100);else throw ve}}function O(){var ve=void 0;Se&&U.push(F.getImageData(0,0,Qe,V)),Ce&&(F.font=fe,F.fillStyle=de,F.textAlign=De,F.textBaseline=ze,F.fillText(Ce,Me,Pe)),ve=F.getImageData(0,0,Qe,V),J.addFrameImageData(ve),G=Ae,we((S-G)/S),Ae>0&&a.requestTimeout(be,Ze),G||J.getBase64GIF(function($){I({error:!1,errorCode:"",errorMsg:"",image:$,cameraStream:oe,videoElement:Ie,webcamVideoElement:Xe,savedRenderingContexts:U,keepCameraOn:X})})}};S=S!==s?S:10,qe=qe!==s?qe:.1,k.width=Qe,k.height=V,F=k.getContext("2d"),function be(){if(!Te.length&&Ie.currentTime===0){a.requestTimeout(be,100);return}_e()}()},getCropDimensions:function(){var M=arguments.length>0&&arguments[0]!==s?arguments[0]:{},I=M.videoWidth,k=M.videoHeight,F=M.gifWidth,he=M.gifHeight,pe={width:0,height:0,scaledWidth:0,scaledHeight:0};return I>k?(pe.width=Math.round(I*(he/k))-F,pe.scaledWidth=Math.round(pe.width*(k/he))):(pe.height=Math.round(k*(F/I))-he,pe.scaledHeight=Math.round(pe.height*(I/F))),pe}},A={loadedData:!1,defaultVideoDimensions:{width:640,height:480},findVideoSize:function b(M){b.attempts=b.attempts||0;var I=M.cameraStream,k=M.completedCallback,F=M.videoElement;F&&(F.videoWidth>0&&F.videoHeight>0?(F.removeEventListener("loadeddata",A.findVideoSize),k({videoElement:F,cameraStream:I,videoWidth:F.videoWidth,videoHeight:F.videoHeight})):b.attempts<10?(b.attempts+=1,a.requestTimeout(function(){A.findVideoSize(M)},400)):k({videoElement:F,cameraStream:I,videoWidth:A.defaultVideoDimensions.width,videoHeight:A.defaultVideoDimensions.height}))},onStreamingTimeout:function(M){a.isFunction(M)&&M({error:!0,errorCode:"getUserMedia",errorMsg:"There was an issue with the getUserMedia API - Timed out while trying to start streaming",image:null,cameraStream:{}})},stream:function(M){var I=a.isArray(M.existingVideo)?M.existingVideo[0]:M.existingVideo,k=M.cameraStream,F=M.completedCallback,he=M.streamedCallback,pe=M.videoElement;if(a.isFunction(he)&&he(),I){if(a.isString(I))pe.src=I,pe.innerHTML='<source src="'+I+'" type="video/'+a.getExtension(I)+'" />';else if(I instanceof Blob){try{pe.src=a.URL.createObjectURL(I)}catch{}pe.innerHTML='<source src="'+I+'" type="'+I.type+'" />'}}else if(pe.mozSrcObject)pe.mozSrcObject=k;else if(a.URL)try{pe.srcObject=k,pe.src=a.URL.createObjectURL(k)}catch{pe.srcObject=k}pe.play(),a.requestTimeout(function oe(){oe.count=oe.count||0,A.loadedData===!0?(A.findVideoSize({videoElement:pe,cameraStream:k,completedCallback:F}),A.loadedData=!1):(oe.count+=1,oe.count>10?A.findVideoSize({videoElement:pe,cameraStream:k,completedCallback:F}):oe())},0)},startStreaming:function(M){var I=a.isFunction(M.error)?M.error:a.noop,k=a.isFunction(M.streamed)?M.streamed:a.noop,F=a.isFunction(M.completed)?M.completed:a.noop,he=M.crossOrigin,pe=M.existingVideo,oe=M.lastCameraStream,j=M.options,ie=M.webcamVideoElement,de=a.isElement(pe)?pe:ie||i.createElement("video");he&&(de.crossOrigin=j.crossOrigin),de.autoplay=!0,de.loop=!0,de.muted=!0,de.addEventListener("loadeddata",function(Ne){A.loadedData=!0,j.offset&&(de.currentTime=j.offset)}),pe?A.stream({videoElement:de,existingVideo:pe,completedCallback:F}):oe?A.stream({videoElement:de,cameraStream:oe,streamedCallback:k,completedCallback:F}):a.getUserMedia({video:!0},function(Ne){A.stream({videoElement:de,cameraStream:Ne,streamedCallback:k,completedCallback:F})},I)},startVideoStreaming:function(M){var I=arguments.length>1&&arguments[1]!==s?arguments[1]:{},k=I.timeout!==s?I.timeout:0,F=I.callback,he=I.webcamVideoElement,pe=void 0;k>0&&(pe=a.requestTimeout(function(){A.onStreamingTimeout(F)},1e4)),A.startStreaming({error:function(){F({error:!0,errorCode:"getUserMedia",errorMsg:"There was an issue with the getUserMedia API - the user probably denied permission",image:null,cameraStream:{}})},streamed:function(){clearTimeout(pe)},completed:function(){var j=arguments.length>0&&arguments[0]!==s?arguments[0]:{},ie=j.cameraStream,de=j.videoElement,Ne=j.videoHeight,Ee=j.videoWidth;M({cameraStream:ie,videoElement:de,videoHeight:Ne,videoWidth:Ee})},lastCameraStream:I.lastCameraStream,webcamVideoElement:he,crossOrigin:I.crossOrigin,options:I})},stopVideoStreaming:function(M){M=a.isObject(M)?M:{};var I=M,k=I.keepCameraOn,F=I.videoElement,he=I.webcamVideoElement,pe=M.cameraStream||{},oe=pe.getTracks?pe.getTracks()||[]:[],j=!!oe.length,ie=oe[0];!k&&j&&a.isFunction(ie.stop)&&ie.stop(),a.isElement(F)&&!he&&(F.pause(),a.isFunction(a.URL.revokeObjectURL)&&!a.webWorkerError&&F.src&&a.URL.revokeObjectURL(F.src),a.removeElement(F))}};function D(b){b=a.isObject(b)?b:{},A.stopVideoStreaming(b)}function B(b,M){var I=b.options||{},k=I.images,F=I.video,he=Number(I.gifWidth),pe=Number(I.gifHeight);Number(I.numFrames);var oe=b.cameraStream,j=b.videoElement,ie=b.videoWidth,de=b.videoHeight,Ne=R.getCropDimensions({videoWidth:ie,videoHeight:de,gifHeight:pe,gifWidth:he}),Ee=M;I.crop=Ne,I.videoElement=j,I.videoWidth=ie,I.videoHeight=de,I.cameraStream=oe,a.isElement(j)&&(j.width=he+Ne.width,j.height=pe+Ne.height,I.webcamVideoElement||(a.setCSSAttr(j,{position:"fixed",opacity:"0"}),i.body.appendChild(j)),j.play(),R.getGIF(I,function(X){(!k||!k.length)&&(!F||!F.length)&&D(X),Ee(X)}))}function W(){var b=arguments.length>0&&arguments[0]!==s?arguments[0]:{},M=b.callback,I=b.existingVideo,k=b.options,F={getUserMedia:!0,"window.URL":!0},he=c.validate(F),pe=void 0,oe=void 0;if(he.error)return M(he);if(a.isElement(I)&&I.src){if(oe=I.src,pe=a.getExtension(oe),!a.isSupported.videoCodecs[pe])return M(c.messages.videoCodecs)}else a.isArray(I)&&a.each(I,function(j,ie){if(ie instanceof Blob?pe=ie.type.substr(ie.type.lastIndexOf("/")+1,ie.length):pe=ie.substr(ie.lastIndexOf(".")+1,ie.length),a.isSupported.videoCodecs[pe])return I=ie,!1});A.startStreaming({completed:function(ie){ie.options=k||{},B(ie,M)},existingVideo:I,crossOrigin:k.crossOrigin,options:k})}function te(){var b=arguments.length>0&&arguments[0]!==s?arguments[0]:{},M=b.callback,I=b.lastCameraStream,k=b.options,F=b.webcamVideoElement;if(!_())return M(c.validate());if(k.savedRenderingContexts.length){R.getGIF(k,function(he){M(he)});return}A.startVideoStreaming(function(){var he=arguments.length>0&&arguments[0]!==s?arguments[0]:{};he.options=k||{},B(he,M)},{lastCameraStream:I,callback:M,webcamVideoElement:F,crossOrigin:k.crossOrigin})}function H(b,M){if(M=a.isFunction(b)?b:M,b=a.isObject(b)?b:{},!!a.isFunction(M)){var I=a.mergeOptions(p,b)||{},k=b.cameraStream,F=I.images,he=F?F.length:0,pe=I.video,oe=I.webcamVideoElement;I=a.mergeOptions(I,{gifWidth:Math.floor(I.gifWidth),gifHeight:Math.floor(I.gifHeight)}),he?L({images:F,imagesLength:he,callback:M,options:I}):pe?W({existingVideo:pe,callback:M,options:I}):te({lastCameraStream:k,callback:M,webcamVideoElement:oe,options:I})}}function Q(b,M){if(M=a.isFunction(b)?b:M,b=a.isObject(b)?b:{},!!a.isFunction(M)){var I=a.mergeOptions(p,b),k=a.mergeOptions(I,{interval:.1,numFrames:1,gifWidth:Math.floor(I.gifWidth),gifHeight:Math.floor(I.gifHeight)});H(k,M)}}var q={utils:l,error:u,defaultOptions:f,createGIF:H,takeSnapShot:Q,stopVideoStreaming:D,isSupported:m,isWebCamGIFSupported:_,isExistingVideoGIFSupported:x,isExistingImagesGIFSupported:E,VERSION:"0.4.5"};t.exports=q})(typeof window<"u"?window:{},typeof document<"u"?document:{createElement:function(){}},typeof window<"u"?window.navigator:{})})(jx);var v1=jx.exports;const Vx=g0(v1),hm=t=>{if(!t||t==="")return"0";const e=t.toString().replace(/\s/g,"");return isNaN(e)?t:parseInt(e).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")};function _1({neolensPost:t,setNeolensPost:e,onBack:n,isDragging:i,setIsDragging:r,dragStart:s,setDragStart:a,isDraggingAvatar:l,setIsDraggingAvatar:c,dragStartAvatar:u,setDragStartAvatar:h,showComments:p,setShowComments:f,showMentions:m,setShowMentions:_}){const[E,x]=K.useState(!0),[d,v]=K.useState(!1),[w,y]=K.useState(!1),[T,C]=K.useState(!1),L=t.images[t.currentImageIndex],g=t.images.filter(A=>A.url),R=A=>{const D=[...t.images];D[t.currentImageIndex]={...L,...A},e({...t,images:D})};return o.jsx("div",{className:"fixed inset-0 bg-black z-50 overflow-y-auto",children:o.jsxs("div",{className:"max-w-7xl mx-auto p-8",children:[o.jsxs("button",{onClick:n,className:"flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8",children:[o.jsx(On,{className:"w-5 h-5"}),o.jsx("span",{children:"Retour"})]}),o.jsx("h1",{className:"text-4xl font-bold text-white mb-2",children:"Générateur Neolens"}),o.jsx("p",{className:"text-gray-400 mb-8",children:"Créez votre post Neolens"}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Avatar"}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("input",{type:"text",placeholder:"URL de l'avatar...",value:t.avatar,onChange:A=>e({...t,avatar:A.target.value}),className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"}),o.jsx("input",{type:"file",accept:"image/*",onChange:A=>{const D=A.target.files[0];if(D){const B=new FileReader;B.onload=W=>e({...t,avatar:W.target.result}),B.readAsDataURL(D)}},className:"hidden",id:"avatar-upload"}),o.jsxs("label",{htmlFor:"avatar-upload",className:"flex items-center justify-center gap-2 w-full bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-3 cursor-pointer transition-colors",children:[o.jsx(Wr,{className:"w-4 h-4"}),"Importer un avatar"]})]}),o.jsxs("div",{className:"mt-4 space-y-2",children:[o.jsxs("label",{className:"block text-xs text-gray-400",children:["Zoom: ",t.avatarZoom.toFixed(2),"x"]}),o.jsx("input",{type:"range",min:"0.3",max:"3",step:"0.1",value:t.avatarZoom,onChange:A=>e({...t,avatarZoom:parseFloat(A.target.value)}),className:"w-full"}),o.jsx("p",{className:"text-xs text-gray-500",children:"Glissez l'avatar dans le preview pour le repositionner"}),o.jsx("button",{onClick:()=>e({...t,avatarPosition:{x:0,y:0},avatarZoom:1}),className:"w-full bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-2 text-xs transition-colors",children:"Réinitialiser la position"})]})]}),[0,1,2].map(A=>{const D=t.images[A],B=A===0?E:A===1?d:w,W=A===0?x:A===1?v:y;return o.jsxs("div",{className:"border border-zinc-800 bg-zinc-900/30",children:[o.jsxs("button",{onClick:()=>{W(!B),e({...t,currentImageIndex:A})},className:"w-full flex items-center justify-between p-4 hover:bg-zinc-800/50 transition-colors",children:[o.jsxs("label",{className:"block text-sm font-medium text-gray-400 cursor-pointer",children:["Image ",A+1," ",D.url&&"✓"]}),B?o.jsx(Da,{className:"w-4 h-4 text-gray-400"}):o.jsx(Pa,{className:"w-4 h-4 text-gray-400"})]}),B&&o.jsxs("div",{className:"p-4 pt-0 space-y-3",children:[o.jsx("input",{type:"text",placeholder:"URL de l'image...",value:D.url,onChange:te=>{const H=[...t.images];H[A]={...D,url:te.target.value},e({...t,images:H,currentImageIndex:A})},className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"}),o.jsx("input",{type:"file",accept:"image/*",onChange:te=>{const H=te.target.files[0];if(H){const Q=new FileReader;Q.onload=q=>{const b=[...t.images];b[A]={...D,url:q.target.result},e({...t,images:b,currentImageIndex:A})},Q.readAsDataURL(H)}},className:"hidden",id:`image-upload-${A}`}),o.jsxs("label",{htmlFor:`image-upload-${A}`,className:"flex items-center justify-center gap-2 w-full bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-3 cursor-pointer transition-colors",children:[o.jsx(Wr,{className:"w-4 h-4"}),"Importer une image"]}),D.url&&o.jsxs("div",{className:"space-y-2",children:[o.jsxs("label",{className:"block text-xs text-gray-400",children:["Zoom: ",D.zoom.toFixed(2),"x"]}),o.jsx("input",{type:"range",min:"0.3",max:"3",step:"0.1",value:D.zoom,onChange:te=>{const H=[...t.images];H[A]={...D,zoom:parseFloat(te.target.value)},e({...t,images:H,currentImageIndex:A})},className:"w-full"}),o.jsx("p",{className:"text-xs text-gray-500",children:"Glissez l'image dans le preview pour la repositionner"}),o.jsx("button",{onClick:()=>{const te=[...t.images];te[A]={...D,position:{x:0,y:0},zoom:1},e({...t,images:te,currentImageIndex:A})},className:"w-full bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-2 text-xs transition-colors",children:"Réinitialiser la position"})]})]})]},A)}),o.jsxs("div",{className:"space-y-3",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Nom d'utilisateur"}),o.jsx("input",{type:"text",value:t.username,onChange:A=>e({...t,username:A.target.value}),className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"})]}),o.jsxs("div",{className:"border border-zinc-800 bg-zinc-900/30",children:[o.jsxs("button",{onClick:()=>_(!m),className:"w-full flex items-center justify-between p-4 hover:bg-zinc-800/50 transition-colors",children:[o.jsx("label",{className:"block text-sm font-medium text-gray-400 cursor-pointer",children:"Mentions (optionnel)"}),m?o.jsx(Da,{className:"w-4 h-4 text-gray-400"}):o.jsx(Pa,{className:"w-4 h-4 text-gray-400"})]}),m&&o.jsxs("div",{className:"p-4 pt-0",children:[o.jsx("input",{type:"text",placeholder:"user1, user2, user3",value:t.mentions,onChange:A=>e({...t,mentions:A.target.value}),className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"}),o.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Séparez les mentions par des virgules (@ ajouté automatiquement)"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Légende"}),o.jsx("textarea",{value:t.caption,onChange:A=>e({...t,caption:A.target.value}),rows:3,placeholder:"Écrivez votre légende...",className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors resize-none"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Hashtags"}),o.jsx("input",{type:"text",value:t.hashtags,onChange:A=>e({...t,hashtags:A.target.value}),placeholder:"tag1, tag2, tag3",className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"}),o.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"Séparez les hashtags par des virgules (# ajouté automatiquement)"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Likes"}),o.jsx("input",{type:"text",value:t.likes,onChange:A=>e({...t,likes:A.target.value}),className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"})]})]}),o.jsxs("div",{className:"border border-zinc-800 bg-zinc-900/30",children:[o.jsxs("button",{onClick:()=>f(!p),className:"w-full flex items-center justify-between p-4 hover:bg-zinc-800/50 transition-colors",children:[o.jsx("label",{className:"block text-sm font-medium text-gray-400 cursor-pointer",children:"Commentaires (optionnel)"}),p?o.jsx(Da,{className:"w-4 h-4 text-gray-400"}):o.jsx(Pa,{className:"w-4 h-4 text-gray-400"})]}),p&&o.jsx("div",{className:"p-4 pt-0 space-y-4",children:t.comments.map((A,D)=>o.jsxs("div",{className:"space-y-2 border-l-2 border-zinc-700 pl-3",children:[o.jsxs("p",{className:"text-xs text-gray-500",children:["Commentaire ",D+1]}),o.jsx("input",{type:"text",placeholder:"Nom d'utilisateur...",value:A.username,onChange:B=>{const W=[...t.comments];W[D].username=B.target.value,e({...t,comments:W})},className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-3 py-2 focus:outline-none focus:border-zinc-600 transition-colors text-sm"}),o.jsx("input",{type:"text",placeholder:"Texte du commentaire...",value:A.text,onChange:B=>{const W=[...t.comments];W[D].text=B.target.value,e({...t,comments:W})},className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-3 py-2 focus:outline-none focus:border-zinc-600 transition-colors text-sm"}),o.jsx("input",{type:"text",placeholder:"Nombre de likes...",value:A.likes,onChange:B=>{const W=[...t.comments];W[D].likes=B.target.value,e({...t,comments:W})},className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-3 py-2 focus:outline-none focus:border-zinc-600 transition-colors text-sm"})]},D))})]}),o.jsx("button",{onClick:async()=>{C(!0);const A=document.getElementById("neolens-template"),D=t.images.filter(B=>B.url);if(D.length===0){alert("Ajoutez au moins une image ou une vidéo"),C(!1);return}if(D.length===1){try{const B=await Qa(A,{cacheBust:!0,pixelRatio:2,backgroundColor:"#000000"}),W=document.createElement("a");W.download="neolens-post.png",W.href=B,W.click()}catch(B){console.error("Erreur export:",B)}C(!1)}else{const B=[],W=t.currentImageIndex;for(let Q=0;Q<3;Q++)if(t.images[Q].url){e({...t,currentImageIndex:Q}),await new Promise(b=>setTimeout(b,100));const q=await Qa(A,{cacheBust:!0,pixelRatio:2,backgroundColor:"#000000"});B.push(q)}e({...t,currentImageIndex:W});const te=A.offsetWidth*2,H=A.offsetHeight*2;Vx.createGIF({images:B,gifWidth:te,gifHeight:H,interval:2,numFrames:B.length,frameDuration:2},Q=>{if(Q.error)console.error("Erreur GIF:",Q.error);else{const q=document.createElement("a");q.download="neolens-post.gif",q.href=Q.image,q.click()}C(!1)})}},disabled:T,className:"w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 text-white px-6 py-3 text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:T?"Export en cours...":"Enregistrer"})]}),o.jsx("div",{className:"flex items-start justify-center",children:o.jsxs("div",{id:"neolens-template",className:"bg-black border-2 border-cyan-500/30 shadow-lg shadow-cyan-500/20",style:{width:"400px"},children:[o.jsxs("div",{className:"p-3 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-950/30 to-blue-950/30",children:[o.jsx("img",{src:"media/neolens_logo.png",alt:"Neolens",className:"h-6 w-6 object-contain"}),o.jsx("span",{className:"text-cyan-400/50 text-sm font-semibold tracking-wider",children:"NEOLENS"})]}),o.jsxs("div",{className:"flex items-center gap-3 p-4 border-b-2 border-cyan-500/30 bg-gradient-to-r from-cyan-950/30 to-blue-950/30",children:[t.avatar?o.jsx("div",{className:"w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-400/50 cursor-move relative flex-shrink-0",onMouseDown:A=>{c(!0),h({x:A.clientX-t.avatarPosition.x,y:A.clientY-t.avatarPosition.y})},onMouseMove:A=>{l&&e({...t,avatarPosition:{x:A.clientX-u.x,y:A.clientY-u.y}})},onMouseUp:()=>c(!1),onMouseLeave:()=>c(!1),children:o.jsx("div",{className:"absolute inset-0 flex items-center justify-center select-none",style:{transform:`translate(${t.avatarPosition.x}px, ${t.avatarPosition.y}px)`},children:o.jsx("img",{src:t.avatar,alt:"Avatar",className:"select-none",style:{transform:`scale(${t.avatarZoom})`,transformOrigin:"center",maxWidth:"100%",maxHeight:"100%",objectFit:"contain"},draggable:!1})})}):o.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 border-2 border-cyan-400/50 flex-shrink-0",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:o.jsx("span",{className:"text-white font-bold",style:{fontSize:"14px",transform:"translateY(-1px)"},children:t.username.charAt(0).toUpperCase()})}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsx("div",{className:"text-cyan-100 font-semibold break-words",style:{fontSize:"14px",lineHeight:"1.2",letterSpacing:"0.025em",transform:"translateY(-2px)"},children:t.username}),t.mentions&&o.jsx("div",{className:"text-cyan-400/70 break-words",style:{fontSize:"12px",lineHeight:"1.2",marginTop:"2px",transform:"translateY(-2px)"},children:t.mentions.split(",").map((A,D)=>o.jsxs("span",{children:["@",A.trim(),D<t.mentions.split(",").length-1&&", "]},D))})]})]}),o.jsxs("div",{className:"relative bg-gradient-to-br from-zinc-900 to-black overflow-hidden cursor-move",style:{aspectRatio:"1/1"},onMouseDown:A=>{L.url&&(r(!0),a({x:A.clientX-L.position.x,y:A.clientY-L.position.y}))},onMouseMove:A=>{i&&R({position:{x:A.clientX-s.x,y:A.clientY-s.y}})},onMouseUp:()=>r(!1),onMouseLeave:()=>r(!1),children:[L.url?o.jsx("div",{className:"absolute inset-0 flex items-center justify-center select-none",style:{transform:`translate(${L.position.x}px, ${L.position.y}px)`},children:o.jsx("img",{src:L.url,alt:"Post",className:"select-none",style:{transform:`scale(${L.zoom})`,transformOrigin:"center",maxWidth:"100%",maxHeight:"100%",objectFit:"contain"},draggable:!1})}):o.jsx("div",{className:"w-full h-full flex items-center justify-center",children:o.jsx("p",{className:"text-gray-600",children:"Aucune image"})}),g.length>1&&o.jsx("div",{className:"absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10",children:t.images.map((A,D)=>A.url&&o.jsx("div",{className:"w-2 h-2 rounded-full transition-all",style:{backgroundColor:D===t.currentImageIndex?"#22d3ee":"rgba(255, 255, 255, 0.4)"}},D))})]}),o.jsxs("div",{className:"p-4 space-y-3 bg-gradient-to-r from-cyan-950/30 to-blue-950/30",children:[o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx(rm,{className:"w-6 h-6 text-cyan-400 hover:text-cyan-300 transition-colors flex-shrink-0"}),o.jsx(fS,{className:"w-6 h-6 text-cyan-400 hover:text-cyan-300 transition-colors flex-shrink-0"}),o.jsx(xS,{className:"w-6 h-6 text-cyan-400 hover:text-cyan-300 transition-colors flex-shrink-0"}),o.jsx("div",{className:"flex-1"}),o.jsx(SS,{className:"w-6 h-6 text-cyan-400 hover:text-cyan-300 transition-colors flex-shrink-0"})]}),o.jsxs("p",{className:"text-cyan-100 font-semibold text-sm",children:[o.jsx("span",{className:"text-cyan-400",children:hm(t.likes)})," J'aime"]}),(t.caption||t.hashtags)&&o.jsxs("div",{className:"text-cyan-100 text-sm break-words",children:[o.jsx("span",{className:"font-semibold text-cyan-300",children:t.username}),t.caption&&o.jsx("span",{className:"ml-2",children:t.caption}),t.hashtags&&o.jsx("p",{className:"text-cyan-400 mt-1 break-words",children:t.hashtags.split(",").map((A,D)=>o.jsxs("span",{children:["#",A.trim(),D<t.hashtags.split(",").length-1&&" "]},D))})]}),t.comments.filter(A=>A.username&&A.text).map((A,D)=>o.jsxs("div",{className:"text-cyan-100 text-sm border-l-2 border-cyan-500/30 pl-2 break-words",children:[o.jsxs("div",{children:[o.jsx("span",{className:"font-semibold text-cyan-300",children:A.username}),o.jsx("span",{className:"ml-2",children:A.text})]}),A.likes&&o.jsxs("div",{style:{marginTop:"4px",transform:"translateY(-1px)"},children:[o.jsx(rm,{className:"w-3 h-3 text-cyan-500/70",style:{display:"inline-block",verticalAlign:"middle",marginRight:"4px",transform:"translateY(-1px)"}}),o.jsx("span",{className:"text-cyan-500/70",style:{display:"inline-block",verticalAlign:"middle",fontSize:"12px",transform:"translateY(-1px)"},children:hm(A.likes)})]})]},D))]})]})})]})]})})}const pm=t=>{if(!t||t==="")return"0";const e=t.toString().replace(/\s/g,"");return isNaN(e)?t:parseInt(e).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")};function y1({holofansPost:t,setHolofansPost:e,onBack:n,isDragging:i,setIsDragging:r,dragStart:s,setDragStart:a,isDraggingAvatar:l,setIsDraggingAvatar:c,dragStartAvatar:u,setDragStartAvatar:h,showComments:p,setShowComments:f}){const[m,_]=K.useState(!0),[E,x]=K.useState(!1),[d,v]=K.useState(!1),[w,y]=K.useState(!1),T=t.images[t.currentImageIndex],C=t.images.filter(g=>g.url),L=g=>{const R=[...t.images];R[t.currentImageIndex]={...T,...g},e({...t,images:R})};return o.jsx("div",{className:"fixed inset-0 bg-black z-50 overflow-y-auto",children:o.jsxs("div",{className:"max-w-7xl mx-auto p-8",children:[o.jsxs("button",{onClick:n,className:"flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8",children:[o.jsx(On,{className:"w-5 h-5"}),o.jsx("span",{children:"Retour"})]}),o.jsx("h1",{className:"text-4xl font-bold text-white mb-2",children:"Générateur Holofans"}),o.jsx("p",{className:"text-gray-400 mb-8",children:"Créez votre post Holofans"}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Avatar"}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("input",{type:"text",placeholder:"URL de l'avatar...",value:t.avatar,onChange:g=>e({...t,avatar:g.target.value}),className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"}),o.jsx("input",{type:"file",accept:"image/*",onChange:g=>{const R=g.target.files[0];if(R){const A=new FileReader;A.onload=D=>e({...t,avatar:D.target.result}),A.readAsDataURL(R)}},className:"hidden",id:"holofans-avatar-upload"}),o.jsxs("label",{htmlFor:"holofans-avatar-upload",className:"flex items-center justify-center gap-2 w-full bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-3 cursor-pointer transition-colors",children:[o.jsx(Wr,{className:"w-4 h-4"}),"Importer un avatar"]})]}),o.jsxs("div",{className:"mt-4 space-y-2",children:[o.jsxs("label",{className:"block text-xs text-gray-400",children:["Zoom: ",t.avatarZoom.toFixed(2),"x"]}),o.jsx("input",{type:"range",min:"0.3",max:"3",step:"0.1",value:t.avatarZoom,onChange:g=>e({...t,avatarZoom:parseFloat(g.target.value)}),className:"w-full"}),o.jsx("p",{className:"text-xs text-gray-500",children:"Glissez l'avatar dans le preview pour le repositionner"}),o.jsx("button",{onClick:()=>e({...t,avatarPosition:{x:0,y:0},avatarZoom:1}),className:"w-full bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-2 text-xs transition-colors",children:"Réinitialiser la position"})]})]}),[0,1,2].map(g=>{const R=t.images[g],A=g===0?m:g===1?E:d,D=g===0?_:g===1?x:v;return o.jsxs("div",{className:"border border-zinc-800 bg-zinc-900/30",children:[o.jsxs("button",{onClick:()=>{D(!A),e({...t,currentImageIndex:g})},className:"w-full flex items-center justify-between p-4 hover:bg-zinc-800/50 transition-colors",children:[o.jsxs("label",{className:"block text-sm font-medium text-gray-400 cursor-pointer",children:["Image ",g+1," ",R.url&&"✓"]}),A?o.jsx(Da,{className:"w-4 h-4 text-gray-400"}):o.jsx(Pa,{className:"w-4 h-4 text-gray-400"})]}),A&&o.jsxs("div",{className:"p-4 pt-0 space-y-3",children:[o.jsx("input",{type:"text",placeholder:"URL de l'image...",value:R.url,onChange:B=>{const W=[...t.images];W[g]={...R,url:B.target.value},e({...t,images:W,currentImageIndex:g})},className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"}),o.jsx("input",{type:"file",accept:"image/*",onChange:B=>{const W=B.target.files[0];if(W){const te=new FileReader;te.onload=H=>{const Q=[...t.images];Q[g]={...R,url:H.target.result},e({...t,images:Q,currentImageIndex:g})},te.readAsDataURL(W)}},className:"hidden",id:`holofans-image-upload-${g}`}),o.jsxs("label",{htmlFor:`holofans-image-upload-${g}`,className:"flex items-center justify-center gap-2 w-full bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-3 cursor-pointer transition-colors",children:[o.jsx(Wr,{className:"w-4 h-4"}),"Importer une image"]}),R.url&&o.jsxs("div",{className:"space-y-2",children:[o.jsxs("label",{className:"block text-xs text-gray-400",children:["Zoom: ",R.zoom.toFixed(2),"x"]}),o.jsx("input",{type:"range",min:"0.3",max:"3",step:"0.1",value:R.zoom,onChange:B=>{const W=[...t.images];W[g]={...R,zoom:parseFloat(B.target.value)},e({...t,images:W,currentImageIndex:g})},className:"w-full"}),o.jsx("p",{className:"text-xs text-gray-500",children:"Glissez l'image dans le preview pour la repositionner"}),o.jsx("button",{onClick:()=>{const B=[...t.images];B[g]={...R,position:{x:0,y:0},zoom:1},e({...t,images:B,currentImageIndex:g})},className:"w-full bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-2 text-xs transition-colors",children:"Réinitialiser la position"})]})]})]},g)}),o.jsxs("div",{className:"space-y-3",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Nom d'utilisateur"}),o.jsx("input",{type:"text",value:t.username,onChange:g=>e({...t,username:g.target.value}),className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Mentions (séparer par des virgules)"}),o.jsx("input",{type:"text",value:t.mentions,onChange:g=>e({...t,mentions:g.target.value}),placeholder:"utilisateur1, utilisateur2, utilisateur3...",className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Légende"}),o.jsx("textarea",{value:t.caption,onChange:g=>e({...t,caption:g.target.value}),rows:3,placeholder:"Écrivez votre légende...",className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors resize-none"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Likes"}),o.jsx("input",{type:"text",value:t.likes,onChange:g=>e({...t,likes:g.target.value}),className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("input",{type:"checkbox",id:"locked",checked:t.isLocked,onChange:g=>e({...t,isLocked:g.target.checked}),className:"w-4 h-4 accent-pink-500"}),o.jsx("label",{htmlFor:"locked",className:"text-sm text-gray-400",children:"Contenu verrouillé (abonnés uniquement)"})]})]}),o.jsxs("div",{className:"border border-zinc-800 bg-zinc-900/30",children:[o.jsxs("button",{onClick:()=>f(!p),className:"w-full flex items-center justify-between p-4 hover:bg-zinc-800/50 transition-colors",children:[o.jsx("label",{className:"block text-sm font-medium text-gray-400 cursor-pointer",children:"Commentaires (optionnel)"}),p?o.jsx(Da,{className:"w-4 h-4 text-gray-400"}):o.jsx(Pa,{className:"w-4 h-4 text-gray-400"})]}),p&&o.jsx("div",{className:"p-4 pt-0 space-y-4",children:t.comments.map((g,R)=>o.jsxs("div",{className:"space-y-2 border-l-2 border-zinc-700 pl-3",children:[o.jsxs("p",{className:"text-xs text-gray-500",children:["Commentaire ",R+1]}),o.jsx("input",{type:"text",placeholder:"Nom d'utilisateur...",value:g.username,onChange:A=>{const D=[...t.comments];D[R].username=A.target.value,e({...t,comments:D})},className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-3 py-2 focus:outline-none focus:border-zinc-600 transition-colors text-sm"}),o.jsx("input",{type:"text",placeholder:"Texte du commentaire...",value:g.text,onChange:A=>{const D=[...t.comments];D[R].text=A.target.value,e({...t,comments:D})},className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-3 py-2 focus:outline-none focus:border-zinc-600 transition-colors text-sm"}),o.jsx("input",{type:"text",placeholder:"Nombre de likes...",value:g.likes,onChange:A=>{const D=[...t.comments];D[R].likes=A.target.value,e({...t,comments:D})},className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-3 py-2 focus:outline-none focus:border-zinc-600 transition-colors text-sm"})]},R))})]}),o.jsx("button",{onClick:async()=>{y(!0);const g=document.getElementById("holofans-template"),R=t.images.filter(A=>A.url);if(R.length===0){alert("Ajoutez au moins une image"),y(!1);return}if(R.length===1){try{const A=await Qa(g,{cacheBust:!0,pixelRatio:2,backgroundColor:"#000000"}),D=document.createElement("a");D.download="holofans-post.png",D.href=A,D.click()}catch(A){console.error("Erreur export:",A)}y(!1)}else{const A=[],D=t.currentImageIndex;for(let te=0;te<3;te++)if(t.images[te].url){e({...t,currentImageIndex:te}),await new Promise(Q=>setTimeout(Q,100));const H=await Qa(g,{cacheBust:!0,pixelRatio:2,backgroundColor:"#000000"});A.push(H)}e({...t,currentImageIndex:D});const B=g.offsetWidth*2,W=g.offsetHeight*2;Vx.createGIF({images:A,gifWidth:B,gifHeight:W,interval:2,numFrames:A.length,frameDuration:2},te=>{if(te.error)console.error("Erreur GIF:",te.error);else{const H=document.createElement("a");H.download="holofans-post.gif",H.href=te.image,H.click()}y(!1)})}},disabled:w,className:"w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 text-white px-6 py-3 text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed",children:w?"Export en cours...":"Enregistrer"})]}),o.jsx("div",{className:"flex items-start justify-center",children:o.jsxs("div",{id:"holofans-template",className:"bg-zinc-950",style:{width:"400px",border:"1px solid #2a2a2a"},children:[o.jsxs("div",{className:"flex items-center gap-3 p-3",style:{backgroundColor:"#1a1a1a",borderBottom:"1px solid #2a2a2a"},children:[t.avatar?o.jsx("div",{className:"w-12 h-12 rounded-full overflow-hidden cursor-move relative flex-shrink-0",style:{border:"2px solid #2a2a2a"},onMouseDown:g=>{c(!0),h({x:g.clientX-t.avatarPosition.x,y:g.clientY-t.avatarPosition.y})},onMouseMove:g=>{l&&e({...t,avatarPosition:{x:g.clientX-u.x,y:g.clientY-u.y}})},onMouseUp:()=>c(!1),onMouseLeave:()=>c(!1),children:o.jsx("div",{className:"absolute inset-0 flex items-center justify-center select-none",style:{transform:`translate(${t.avatarPosition.x}px, ${t.avatarPosition.y}px)`},children:o.jsx("img",{src:t.avatar,alt:"Avatar",className:"select-none",style:{transform:`scale(${t.avatarZoom})`,transformOrigin:"center",maxWidth:"100%",maxHeight:"100%",objectFit:"contain"},draggable:!1})})}):o.jsx("div",{className:"w-10 h-10 rounded-full flex-shrink-0",style:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#00AFF0"},children:o.jsx("img",{src:"media/holofans_logo.png",alt:"Holofans",className:"w-8 h-8 object-contain"})}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsx("div",{className:"text-white font-semibold break-words",style:{fontSize:"15px",lineHeight:"1.2",transform:"translateY(-2px)"},children:t.username}),t.mentions&&o.jsx("div",{className:"break-words",style:{fontSize:"12px",lineHeight:"1.2",marginTop:"2px",transform:"translateY(-2px)",color:"#9ca3af"},children:t.mentions.split(",").map((g,R)=>o.jsxs("span",{children:["@",g.trim(),R<t.mentions.split(",").length-1&&", "]},R))})]}),o.jsx("button",{className:"text-white px-5 py-2 text-sm font-semibold rounded-full flex-shrink-0",style:{backgroundColor:t.isLocked?"#00AFF0":"#4a5568"},children:t.isLocked?"S'abonner":"Abonné"})]}),o.jsxs("div",{className:"relative overflow-hidden cursor-move",style:{aspectRatio:"1/1",backgroundColor:"#000000"},onMouseDown:g=>{T.url&&(r(!0),a({x:g.clientX-T.position.x,y:g.clientY-T.position.y}))},onMouseMove:g=>{i&&L({position:{x:g.clientX-s.x,y:g.clientY-s.y}})},onMouseUp:()=>r(!1),onMouseLeave:()=>r(!1),children:[T.url?o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"absolute inset-0 flex items-center justify-center select-none",style:{transform:`translate(${T.position.x}px, ${T.position.y}px)`},children:o.jsx("img",{src:T.url,alt:"Post",className:"select-none",style:{transform:`scale(${T.zoom})`,transformOrigin:"center",maxWidth:"100%",maxHeight:"100%",objectFit:"contain",filter:t.isLocked?"blur(20px)":"none"},draggable:!1})}),t.isLocked&&o.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",style:{backgroundColor:"rgba(0, 0, 0, 0.3)"},children:o.jsxs("div",{className:"text-center",children:[o.jsx("img",{src:"media/lock_logo.png",alt:"Locked",className:"w-16 h-16 mx-auto mb-3 opacity-90"}),o.jsx("p",{className:"text-white font-semibold text-base",children:"S'abonner pour débloquer"})]})})]}):o.jsx("div",{className:"w-full h-full flex items-center justify-center",children:o.jsx("p",{className:"text-gray-600",children:"Aucune image"})}),C.length>1&&o.jsx("div",{className:"absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5 z-10",children:t.images.map((g,R)=>g.url&&o.jsx("div",{className:"w-2 h-2 rounded-full transition-all",style:{backgroundColor:R===t.currentImageIndex?"#00AFF0":"rgba(255, 255, 255, 0.4)"}},R))}),o.jsxs("div",{className:"absolute bottom-3 right-3 flex items-center gap-1 opacity-40",children:[o.jsx("img",{src:"media/holofans_logo.png",alt:"Holofans",className:"h-8 w-8 object-contain"}),o.jsx("span",{className:"text-white text-base font-semibold tracking-wide",children:"HOLOFANS"})]})]}),o.jsxs("div",{className:"p-4 space-y-3",style:{backgroundColor:"#1a1a1a"},children:[o.jsxs("div",{className:"flex items-center gap-5",children:[o.jsx(Ed,{className:"w-6 h-6 flex-shrink-0",style:{color:"#9ca3af"}}),o.jsx(Rx,{className:"w-6 h-6 flex-shrink-0",style:{color:"#9ca3af"}})]}),o.jsxs("p",{className:"text-sm",style:{color:"#d1d5db"},children:[o.jsx("span",{style:{color:"#ffffff",fontWeight:"600"},children:pm(t.likes)})," likes"]}),t.caption&&o.jsxs("div",{className:"text-sm break-words",style:{color:"#d1d5db"},children:[o.jsx("span",{className:"font-semibold",style:{color:"#ffffff"},children:t.username}),o.jsx("span",{className:"ml-2",children:t.caption})]}),t.comments.filter(g=>g.username&&g.text).map((g,R)=>o.jsxs("div",{className:"text-sm pl-2 break-words",style:{color:"#d1d5db",borderLeft:"2px solid #2a2a2a"},children:[o.jsxs("div",{children:[o.jsx("span",{className:"font-semibold",style:{color:"#ffffff"},children:g.username}),o.jsx("span",{className:"ml-2",children:g.text})]}),g.likes&&o.jsxs("div",{style:{marginTop:"4px",transform:"translateY(-1px)"},children:[o.jsx(Ed,{className:"w-3 h-3",style:{display:"inline-block",verticalAlign:"middle",marginRight:"4px",transform:"translateY(-1px)",color:"#6b7280"}}),o.jsx("span",{style:{display:"inline-block",verticalAlign:"middle",fontSize:"12px",transform:"translateY(-1px)",color:"#9ca3af"},children:pm(g.likes)})]})]},R))]})]})})]})]})})}const Yc=t=>{if(!t||t==="")return"0";const e=t.toString().replace(/\s/g,"");if(isNaN(e))return t;const n=parseInt(e);return n>=1e6?(n/1e6).toFixed(1)+"M":n>=1e3?(n/1e3).toFixed(1)+"K":n.toString()},S1=t=>t?t.split(/(#\w+)/g).map((n,i)=>n.match(/^#\w+$/)?o.jsx("span",{style:{color:"#1d9bf0"},children:n},i):n):null;function w1({pingPost:t,setPingPost:e,onBack:n,isDragging:i,setIsDragging:r,dragStart:s,setDragStart:a,isDraggingAvatar:l,setIsDraggingAvatar:c,dragStartAvatar:u,setDragStartAvatar:h,showComments:p,setShowComments:f}){return o.jsx("div",{className:"fixed inset-0 bg-black z-50 overflow-y-auto",children:o.jsxs("div",{className:"max-w-7xl mx-auto p-8",children:[o.jsxs("button",{onClick:n,className:"flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-8",children:[o.jsx(On,{className:"w-5 h-5"}),o.jsx("span",{children:"Retour"})]}),o.jsx("h1",{className:"text-4xl font-bold text-white mb-2",children:"Générateur Ping"}),o.jsx("p",{className:"text-gray-400 mb-8",children:"Créez votre post Ping"}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Avatar"}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("input",{type:"text",placeholder:"URL de l'avatar...",value:t.avatar,onChange:m=>e({...t,avatar:m.target.value}),className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"}),o.jsx("input",{type:"file",accept:"image/*",onChange:m=>{const _=m.target.files[0];if(_){const E=new FileReader;E.onload=x=>e({...t,avatar:x.target.result}),E.readAsDataURL(_)}},className:"hidden",id:"ping-avatar-upload"}),o.jsxs("label",{htmlFor:"ping-avatar-upload",className:"flex items-center justify-center gap-2 w-full bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-3 cursor-pointer transition-colors",children:[o.jsx(Wr,{className:"w-4 h-4"}),"Importer un avatar"]})]}),o.jsxs("div",{className:"mt-4 space-y-2",children:[o.jsxs("label",{className:"block text-xs text-gray-400",children:["Zoom: ",t.avatarZoom.toFixed(2),"x"]}),o.jsx("input",{type:"range",min:"0.3",max:"3",step:"0.1",value:t.avatarZoom,onChange:m=>e({...t,avatarZoom:parseFloat(m.target.value)}),className:"w-full"}),o.jsx("p",{className:"text-xs text-gray-500",children:"Glissez l'avatar dans le preview pour le repositionner"}),o.jsx("button",{onClick:()=>e({...t,avatarPosition:{x:0,y:0},avatarZoom:1}),className:"w-full bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-2 text-xs transition-colors",children:"Réinitialiser la position"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Image (optionnel)"}),o.jsxs("div",{className:"space-y-2",children:[o.jsx("input",{type:"text",placeholder:"URL de l'image...",value:t.image,onChange:m=>e({...t,image:m.target.value}),className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"}),o.jsx("input",{type:"file",accept:"image/*",onChange:m=>{const _=m.target.files[0];if(_){const E=new FileReader;E.onload=x=>e({...t,image:x.target.result}),E.readAsDataURL(_)}},className:"hidden",id:"ping-image-upload"}),o.jsxs("label",{htmlFor:"ping-image-upload",className:"flex items-center justify-center gap-2 w-full bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-3 cursor-pointer transition-colors",children:[o.jsx(Wr,{className:"w-4 h-4"}),"Importer une image"]})]}),t.image&&o.jsxs("div",{className:"mt-4 space-y-2",children:[o.jsxs("label",{className:"block text-xs text-gray-400",children:["Zoom: ",t.imageZoom.toFixed(2),"x"]}),o.jsx("input",{type:"range",min:"0.3",max:"3",step:"0.1",value:t.imageZoom,onChange:m=>e({...t,imageZoom:parseFloat(m.target.value)}),className:"w-full"}),o.jsx("p",{className:"text-xs text-gray-500",children:"Glissez l'image dans le preview pour la repositionner"}),o.jsx("button",{onClick:()=>e({...t,imagePosition:{x:0,y:0},imageZoom:1}),className:"w-full bg-zinc-800 hover:bg-zinc-700 text-white px-3 py-2 text-xs transition-colors",children:"Réinitialiser la position"})]})]}),o.jsxs("div",{className:"space-y-3",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Nom d'utilisateur"}),o.jsx("input",{type:"text",value:t.username,onChange:m=>e({...t,username:m.target.value}),className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Pseudo (@handle)"}),o.jsx("input",{type:"text",value:t.handle,onChange:m=>e({...t,handle:m.target.value}),placeholder:"handle",className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Texte du ping"}),o.jsx("textarea",{value:t.text,onChange:m=>e({...t,text:m.target.value}),rows:4,placeholder:"Quoi de neuf ?",className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors resize-none"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Date et heure"}),o.jsx("input",{type:"text",value:t.timestamp,onChange:m=>e({...t,timestamp:m.target.value}),placeholder:"12:34 · 30 mai 2026",className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"})]}),o.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Réponses"}),o.jsx("input",{type:"text",value:t.replies,onChange:m=>e({...t,replies:m.target.value}),placeholder:"0",className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Repings"}),o.jsx("input",{type:"text",value:t.repings,onChange:m=>e({...t,repings:m.target.value}),placeholder:"0",className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm font-medium text-gray-400 mb-2",children:"Likes"}),o.jsx("input",{type:"text",value:t.likes,onChange:m=>e({...t,likes:m.target.value}),placeholder:"0",className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-zinc-600 transition-colors"})]})]})]}),o.jsx("button",{onClick:()=>{const m=document.getElementById("ping-template");Qa(m,{cacheBust:!0,pixelRatio:2,backgroundColor:"#000000"}).then(_=>{const E=document.createElement("a");E.download="ping-post.png",E.href=_,E.click()}).catch(_=>{console.error("Erreur export:",_)})},className:"w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-zinc-600 text-white px-6 py-3 text-sm transition-colors",children:"Enregistrer l'image"})]}),o.jsx("div",{className:"flex items-start justify-center",children:o.jsxs("div",{id:"ping-template",className:"bg-black",style:{width:"600px",border:"1px solid #2f3336"},children:[o.jsx("div",{className:"p-4",style:{borderBottom:"1px solid #2f3336"},children:o.jsxs("div",{className:"flex gap-3",children:[t.avatar?o.jsx("div",{className:"w-12 h-12 rounded-full overflow-hidden cursor-move relative flex-shrink-0",onMouseDown:m=>{c(!0),h({x:m.clientX-t.avatarPosition.x,y:m.clientY-t.avatarPosition.y})},onMouseMove:m=>{l&&e({...t,avatarPosition:{x:m.clientX-u.x,y:m.clientY-u.y}})},onMouseUp:()=>c(!1),onMouseLeave:()=>c(!1),children:o.jsx("div",{className:"absolute inset-0 flex items-center justify-center select-none",style:{transform:`translate(${t.avatarPosition.x}px, ${t.avatarPosition.y}px)`},children:o.jsx("img",{src:t.avatar,alt:"Avatar",className:"select-none",style:{transform:`scale(${t.avatarZoom})`,transformOrigin:"center",maxWidth:"100%",maxHeight:"100%",objectFit:"contain"},draggable:!1})})}):o.jsx("div",{className:"w-10 h-10 rounded-full flex-shrink-0",style:{display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#1d9bf0"},children:o.jsx("img",{src:"media/ping_logo.png",alt:"Ping",className:"w-6 h-6 object-contain"})}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsxs("div",{className:"flex items-center gap-1 mb-1",children:[o.jsx("span",{className:"text-white font-bold",style:{fontSize:"15px"},children:t.username}),o.jsxs("span",{style:{color:"#71767b",fontSize:"15px"},children:["@",t.handle]})]}),o.jsx("div",{className:"text-white break-words mb-3",style:{fontSize:"15px",lineHeight:"1.3"},children:S1(t.text)}),t.image&&o.jsx("div",{className:"relative overflow-hidden cursor-move mb-3",style:{borderRadius:"16px",border:"1px solid #2f3336",aspectRatio:"16/9",backgroundColor:"#000000"},onMouseDown:m=>{r(!0),a({x:m.clientX-t.imagePosition.x,y:m.clientY-t.imagePosition.y})},onMouseMove:m=>{i&&e({...t,imagePosition:{x:m.clientX-s.x,y:m.clientY-s.y}})},onMouseUp:()=>r(!1),onMouseLeave:()=>r(!1),children:o.jsx("div",{className:"absolute inset-0 flex items-center justify-center select-none",style:{transform:`translate(${t.imagePosition.x}px, ${t.imagePosition.y}px)`},children:o.jsx("img",{src:t.image,alt:"Post",className:"select-none",style:{transform:`scale(${t.imageZoom})`,transformOrigin:"center",maxWidth:"100%",maxHeight:"100%",objectFit:"contain"},draggable:!1})})}),o.jsx("div",{style:{color:"#71767b",fontSize:"15px",marginBottom:"12px"},children:t.timestamp}),o.jsxs("div",{className:"flex items-center justify-between pt-3",style:{borderTop:"1px solid #2f3336"},children:[o.jsxs("div",{className:"flex items-center gap-1",children:[o.jsx(Rx,{className:"w-5 h-5",style:{color:"#71767b"}}),o.jsx("span",{style:{color:"#71767b",fontSize:"13px"},children:Yc(t.replies)})]}),o.jsxs("div",{className:"flex items-center gap-1",children:[o.jsx(mS,{className:"w-5 h-5",style:{color:"#71767b"}}),o.jsx("span",{style:{color:"#71767b",fontSize:"13px"},children:Yc(t.repings)})]}),o.jsxs("div",{className:"flex items-center gap-1",children:[o.jsx(Ed,{className:"w-5 h-5",style:{color:"#71767b"}}),o.jsx("span",{style:{color:"#71767b",fontSize:"13px"},children:Yc(t.likes)})]}),o.jsx("div",{className:"flex items-center gap-1",children:o.jsx(vS,{className:"w-5 h-5",style:{color:"#71767b"}})})]})]})]})}),o.jsxs("div",{className:"p-3 flex items-center justify-center gap-2",style:{backgroundColor:"#0a0a0a",opacity:.6},children:[o.jsx("img",{src:"media/ping_logo.png",alt:"Ping",className:"h-4 w-4 object-contain"}),o.jsx("span",{className:"text-white text-xs font-semibold tracking-wide",children:"PING"})]})]})})]})]})})}const wr=()=>{const t=K.useRef(null);return K.useEffect(()=>{const e=t.current;if(!e)return;const n=e.getContext("2d",{alpha:!1});let i,r=0,s=!0;const a=()=>{e.width=window.innerWidth,e.height=window.innerHeight};a(),window.addEventListener("resize",a);const l=40,c=l*Math.sqrt(3),u=l*2,h=(m,_,E,x=0,d=1)=>{n.beginPath();for(let v=0;v<6;v++){const w=Math.PI/3*v,y=m+E*Math.cos(w),T=_+E*Math.sin(w);v===0?n.moveTo(y,T):n.lineTo(y,T)}n.closePath(),x>.05?(n.strokeStyle=`rgba(6, 182, 212, ${x*.3*d})`,n.lineWidth=1,n.shadowBlur=8*x*d,n.shadowColor=`rgba(6, 182, 212, ${x*.5*d})`):(n.strokeStyle=`rgba(80, 80, 90, ${.25*d})`,n.lineWidth=.8,n.shadowBlur=0),n.stroke()},p=()=>{if(!s){i=requestAnimationFrame(p);return}n.fillStyle="#000000",n.fillRect(0,0,e.width,e.height),r+=.015;const m=Math.ceil(e.width/(u*.75))+2,_=Math.ceil(e.height/c)+2;for(let E=-1;E<_;E++)for(let x=-1;x<m;x++){const d=x*u*.75,v=E*c+(x%2===0?0:c/2),w=e.width/2,y=e.height/2,T=Math.sqrt(Math.pow(d-w,2)+Math.pow(v-y,2)),C=Math.sqrt(Math.pow(e.width/2,2)+Math.pow(e.height/2,2)),L=T/C,g=L<.3?0:Math.min(1,(L-.3)*2.2),R=v/e.height,A=Math.sin((1-R)*3-r*.5)*.5+.5,D=A>.85?(A-.85)*2.5:0;h(d,v,l,D,g)}i=requestAnimationFrame(p)},f=()=>{s=!document.hidden};return document.addEventListener("visibilitychange",f),p(),()=>{window.removeEventListener("resize",a),document.removeEventListener("visibilitychange",f),cancelAnimationFrame(i)}},[]),o.jsx("canvas",{ref:t,className:"fixed inset-0 w-full h-full pointer-events-none",style:{zIndex:0}})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xh="185",M1=0,mm=1,b1=2,Ia=1,E1=2,Sa=3,gr=0,Sn=1,ui=2,Li=0,ks=1,gm=2,xm=3,vm=4,T1=5,Nr=100,C1=101,A1=102,R1=103,N1=104,L1=200,P1=201,D1=202,I1=203,Ad=204,Rd=205,U1=206,F1=207,k1=208,O1=209,z1=210,B1=211,j1=212,V1=213,H1=214,Nd=0,Ld=1,Pd=2,qs=3,Dd=4,Id=5,Ud=6,Fd=7,Hx=0,G1=1,W1=2,mi=0,Gx=1,Wx=2,Xx=3,qx=4,$x=5,Yx=6,Kx=7,Zx=300,Xr=301,$s=302,Kc=303,Zc=304,gc=306,kd=1e3,Ri=1001,Od=1002,Xt=1003,X1=1004,Po=1005,nn=1006,Qc=1007,Ur=1008,Cn=1009,Qx=1010,Jx=1011,Ja=1012,vh=1013,vi=1014,di=1015,ki=1016,_h=1017,yh=1018,eo=1020,ev=35902,tv=35899,nv=1021,iv=1022,Qn=1023,Oi=1026,Fr=1027,rv=1028,Sh=1029,qr=1030,wh=1031,Mh=1033,pl=33776,ml=33777,gl=33778,xl=33779,zd=35840,Bd=35841,jd=35842,Vd=35843,Hd=36196,Gd=37492,Wd=37496,Xd=37488,qd=37489,Wl=37490,$d=37491,Yd=37808,Kd=37809,Zd=37810,Qd=37811,Jd=37812,ef=37813,tf=37814,nf=37815,rf=37816,sf=37817,af=37818,of=37819,lf=37820,cf=37821,uf=36492,df=36494,ff=36495,hf=36283,pf=36284,Xl=36285,mf=36286,q1=3200,gf=0,$1=1,tr="",Un="srgb",ql="srgb-linear",$l="linear",pt="srgb",rs=7680,_m=519,Y1=512,K1=513,Z1=514,bh=515,Q1=516,J1=517,Eh=518,ew=519,ym=35044,Sm="300 es",fi=2e3,to=2001;function tw(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Yl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function nw(){const t=Yl("canvas");return t.style.display="block",t}const wm={};function Mm(...t){const e="THREE."+t.shift();console.log(e,...t)}function sv(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Je(...t){t=sv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function dt(...t){t=sv(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Os(...t){const e=t.join(" ");e in wm||(wm[e]=!0,Je(...t))}function iw(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const rw={[Nd]:Ld,[Pd]:Ud,[Dd]:Fd,[qs]:Id,[Ld]:Nd,[Ud]:Pd,[Fd]:Dd,[Id]:qs};class Zr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jc=Math.PI/180,xf=180/Math.PI;function oo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[t&255]+Qt[t>>8&255]+Qt[t>>16&255]+Qt[t>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[n&63|128]+Qt[n>>8&255]+"-"+Qt[n>>16&255]+Qt[n>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function lt(t,e,n){return Math.max(e,Math.min(n,t))}function sw(t,e){return(t%e+e)%e}function eu(t,e,n){return(1-n)*t+n*e}function ua(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function pn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ih=class Ih{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=lt(this.x,e.x,n.x),this.y=lt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=lt(this.x,e,n),this.y=lt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ih.prototype.isVector2=!0;let ct=Ih;class ea{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,l){let c=i[r+0],u=i[r+1],h=i[r+2],p=i[r+3],f=s[a+0],m=s[a+1],_=s[a+2],E=s[a+3];if(p!==E||c!==f||u!==m||h!==_){let x=c*f+u*m+h*_+p*E;x<0&&(f=-f,m=-m,_=-_,E=-E,x=-x);let d=1-l;if(x<.9995){const v=Math.acos(x),w=Math.sin(v);d=Math.sin(d*v)/w,l=Math.sin(l*v)/w,c=c*d+f*l,u=u*d+m*l,h=h*d+_*l,p=p*d+E*l}else{c=c*d+f*l,u=u*d+m*l,h=h*d+_*l,p=p*d+E*l;const v=1/Math.sqrt(c*c+u*u+h*h+p*p);c*=v,u*=v,h*=v,p*=v}}e[n]=c,e[n+1]=u,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const l=i[r],c=i[r+1],u=i[r+2],h=i[r+3],p=s[a],f=s[a+1],m=s[a+2],_=s[a+3];return e[n]=l*_+h*p+c*m-u*f,e[n+1]=c*_+h*f+u*p-l*m,e[n+2]=u*_+h*m+l*f-c*p,e[n+3]=h*_-l*p-c*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,c=Math.sin,u=l(i/2),h=l(r/2),p=l(s/2),f=c(i/2),m=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=f*h*p+u*m*_,this._y=u*m*p-f*h*_,this._z=u*h*_+f*m*p,this._w=u*h*p-f*m*_;break;case"YXZ":this._x=f*h*p+u*m*_,this._y=u*m*p-f*h*_,this._z=u*h*_-f*m*p,this._w=u*h*p+f*m*_;break;case"ZXY":this._x=f*h*p-u*m*_,this._y=u*m*p+f*h*_,this._z=u*h*_+f*m*p,this._w=u*h*p-f*m*_;break;case"ZYX":this._x=f*h*p-u*m*_,this._y=u*m*p+f*h*_,this._z=u*h*_-f*m*p,this._w=u*h*p+f*m*_;break;case"YZX":this._x=f*h*p+u*m*_,this._y=u*m*p+f*h*_,this._z=u*h*_-f*m*p,this._w=u*h*p-f*m*_;break;case"XZY":this._x=f*h*p-u*m*_,this._y=u*m*p-f*h*_,this._z=u*h*_+f*m*p,this._w=u*h*p+f*m*_;break;default:Je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],l=n[5],c=n[9],u=n[2],h=n[6],p=n[10],f=i+l+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>l&&i>p){const m=2*Math.sqrt(1+i-l-p);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(l>p){const m=2*Math.sqrt(1+l-i-p);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+p-i-l);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,l=n._x,c=n._y,u=n._z,h=n._w;return this._x=i*h+a*l+r*u-s*c,this._y=r*h+a*c+s*l-i*u,this._z=s*h+a*u+i*c-r*l,this._w=a*h-i*l-r*c-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,l=this.dot(e);l<0&&(i=-i,r=-r,s=-s,a=-a,l=-l);let c=1-n;if(l<.9995){const u=Math.acos(l),h=Math.sin(u);c=Math.sin(c*u)/h,n=Math.sin(n*u)/h,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Uh=class Uh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(bm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(bm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,l=e.z,c=e.w,u=2*(a*r-l*i),h=2*(l*n-s*r),p=2*(s*i-a*n);return this.x=n+c*u+a*p-l*h,this.y=i+c*h+l*u-s*p,this.z=r+c*p+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=lt(this.x,e.x,n.x),this.y=lt(this.y,e.y,n.y),this.z=lt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=lt(this.x,e,n),this.y=lt(this.y,e,n),this.z=lt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,l=n.y,c=n.z;return this.x=r*c-s*l,this.y=s*a-i*c,this.z=i*l-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return tu.copy(this).projectOnVector(e),this.sub(tu)}reflect(e){return this.sub(tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Uh.prototype.isVector3=!0;let re=Uh;const tu=new re,bm=new ea,Fh=class Fh{constructor(e,n,i,r,s,a,l,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,l,c,u)}set(e,n,i,r,s,a,l,c,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=l,h[3]=n,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],l=i[3],c=i[6],u=i[1],h=i[4],p=i[7],f=i[2],m=i[5],_=i[8],E=r[0],x=r[3],d=r[6],v=r[1],w=r[4],y=r[7],T=r[2],C=r[5],L=r[8];return s[0]=a*E+l*v+c*T,s[3]=a*x+l*w+c*C,s[6]=a*d+l*y+c*L,s[1]=u*E+h*v+p*T,s[4]=u*x+h*w+p*C,s[7]=u*d+h*y+p*L,s[2]=f*E+m*v+_*T,s[5]=f*x+m*w+_*C,s[8]=f*d+m*y+_*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8];return n*a*h-n*l*u-i*s*h+i*l*c+r*s*u-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8],p=h*a-l*u,f=l*c-h*s,m=u*s-a*c,_=n*p+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/_;return e[0]=p*E,e[1]=(r*u-h*i)*E,e[2]=(l*i-r*a)*E,e[3]=f*E,e[4]=(h*n-r*c)*E,e[5]=(r*s-l*n)*E,e[6]=m*E,e[7]=(i*c-u*n)*E,e[8]=(a*n-i*s)*E,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,l){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*a+u*l)+a+e,-r*u,r*c,-r*(-u*a+c*l)+l+n,0,0,1),this}scale(e,n){return Os("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(nu.makeScale(e,n)),this}rotate(e){return Os("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(nu.makeRotation(-e)),this}translate(e,n){return Os("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(nu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Fh.prototype.isMatrix3=!0;let et=Fh;const nu=new et,Em=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tm=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aw(){const t={enabled:!0,workingColorSpace:ql,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===pt&&(r.r=Pi(r.r),r.g=Pi(r.g),r.b=Pi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(r.r=zs(r.r),r.g=zs(r.g),r.b=zs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===tr?$l:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Os("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Os("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ql]:{primaries:e,whitePoint:i,transfer:$l,toXYZ:Em,fromXYZ:Tm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:Em,fromXYZ:Tm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}}),t}const ot=aw();function Pi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function zs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ss;class ow{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ss===void 0&&(ss=Yl("canvas")),ss.width=e.width,ss.height=e.height;const r=ss.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ss}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Yl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Pi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Pi(n[i]/255)*255):n[i]=Pi(n[i]);return{data:n,width:e.width,height:e.height}}else return Je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lw=0;class Th{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lw++}),this.uuid=oo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(iu(r[a].image)):s.push(iu(r[a]))}else s=iu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function iu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ow.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Je("Texture: Unable to serialize Texture."),{})}let cw=0;const ru=new re;class un extends Zr{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=Ri,r=Ri,s=nn,a=Ur,l=Qn,c=Cn,u=un.DEFAULT_ANISOTROPY,h=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cw++}),this.uuid=oo(),this.name="",this.source=new Th(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ru).x}get height(){return this.source.getSize(ru).y}get depth(){return this.source.getSize(ru).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Je(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Je(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kd:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case Od:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kd:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case Od:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Zx;un.DEFAULT_ANISOTROPY=1;const kh=class kh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,u=c[0],h=c[4],p=c[8],f=c[1],m=c[5],_=c[9],E=c[2],x=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(p-E)<.01&&Math.abs(_-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+E)<.1&&Math.abs(_+x)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(u+1)/2,y=(m+1)/2,T=(d+1)/2,C=(h+f)/4,L=(p+E)/4,g=(_+x)/4;return w>y&&w>T?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=C/i,s=L/i):y>T?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=g/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=L/s,r=g/s),this.set(i,r,s,n),this}let v=Math.sqrt((x-_)*(x-_)+(p-E)*(p-E)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(x-_)/v,this.y=(p-E)/v,this.z=(f-h)/v,this.w=Math.acos((u+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=lt(this.x,e.x,n.x),this.y=lt(this.y,e.y,n.y),this.z=lt(this.z,e.z,n.z),this.w=lt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=lt(this.x,e,n),this.y=lt(this.y,e,n),this.z=lt(this.z,e,n),this.w=lt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(lt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};kh.prototype.isVector4=!0;let Tt=kh;class uw extends Zr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Tt(0,0,e,n),this.scissorTest=!1,this.viewport=new Tt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new un(r),a=i.count;for(let l=0;l<a;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Th(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gi extends uw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class av extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dw extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kl=class Kl{constructor(e,n,i,r,s,a,l,c,u,h,p,f,m,_,E,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,l,c,u,h,p,f,m,_,E,x)}set(e,n,i,r,s,a,l,c,u,h,p,f,m,_,E,x){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=l,d[13]=c,d[2]=u,d[6]=h,d[10]=p,d[14]=f,d[3]=m,d[7]=_,d[11]=E,d[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/as.setFromMatrixColumn(e,0).length(),s=1/as.setFromMatrixColumn(e,1).length(),a=1/as.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=a*h,m=a*p,_=l*h,E=l*p;n[0]=c*h,n[4]=-c*p,n[8]=u,n[1]=m+_*u,n[5]=f-E*u,n[9]=-l*c,n[2]=E-f*u,n[6]=_+m*u,n[10]=a*c}else if(e.order==="YXZ"){const f=c*h,m=c*p,_=u*h,E=u*p;n[0]=f+E*l,n[4]=_*l-m,n[8]=a*u,n[1]=a*p,n[5]=a*h,n[9]=-l,n[2]=m*l-_,n[6]=E+f*l,n[10]=a*c}else if(e.order==="ZXY"){const f=c*h,m=c*p,_=u*h,E=u*p;n[0]=f-E*l,n[4]=-a*p,n[8]=_+m*l,n[1]=m+_*l,n[5]=a*h,n[9]=E-f*l,n[2]=-a*u,n[6]=l,n[10]=a*c}else if(e.order==="ZYX"){const f=a*h,m=a*p,_=l*h,E=l*p;n[0]=c*h,n[4]=_*u-m,n[8]=f*u+E,n[1]=c*p,n[5]=E*u+f,n[9]=m*u-_,n[2]=-u,n[6]=l*c,n[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*u,_=l*c,E=l*u;n[0]=c*h,n[4]=E-f*p,n[8]=_*p+m,n[1]=p,n[5]=a*h,n[9]=-l*h,n[2]=-u*h,n[6]=m*p+_,n[10]=f-E*p}else if(e.order==="XZY"){const f=a*c,m=a*u,_=l*c,E=l*u;n[0]=c*h,n[4]=-p,n[8]=u*h,n[1]=f*p+E,n[5]=a*h,n[9]=m*p-_,n[2]=_*p-m,n[6]=l*h,n[10]=E*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fw,e,hw)}lookAt(e,n,i){const r=this.elements;return bn.subVectors(e,n),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Wi.crossVectors(i,bn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Wi.crossVectors(i,bn)),Wi.normalize(),Do.crossVectors(bn,Wi),r[0]=Wi.x,r[4]=Do.x,r[8]=bn.x,r[1]=Wi.y,r[5]=Do.y,r[9]=bn.y,r[2]=Wi.z,r[6]=Do.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],l=i[4],c=i[8],u=i[12],h=i[1],p=i[5],f=i[9],m=i[13],_=i[2],E=i[6],x=i[10],d=i[14],v=i[3],w=i[7],y=i[11],T=i[15],C=r[0],L=r[4],g=r[8],R=r[12],A=r[1],D=r[5],B=r[9],W=r[13],te=r[2],H=r[6],Q=r[10],q=r[14],b=r[3],M=r[7],I=r[11],k=r[15];return s[0]=a*C+l*A+c*te+u*b,s[4]=a*L+l*D+c*H+u*M,s[8]=a*g+l*B+c*Q+u*I,s[12]=a*R+l*W+c*q+u*k,s[1]=h*C+p*A+f*te+m*b,s[5]=h*L+p*D+f*H+m*M,s[9]=h*g+p*B+f*Q+m*I,s[13]=h*R+p*W+f*q+m*k,s[2]=_*C+E*A+x*te+d*b,s[6]=_*L+E*D+x*H+d*M,s[10]=_*g+E*B+x*Q+d*I,s[14]=_*R+E*W+x*q+d*k,s[3]=v*C+w*A+y*te+T*b,s[7]=v*L+w*D+y*H+T*M,s[11]=v*g+w*B+y*Q+T*I,s[15]=v*R+w*W+y*q+T*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],l=e[5],c=e[9],u=e[13],h=e[2],p=e[6],f=e[10],m=e[14],_=e[3],E=e[7],x=e[11],d=e[15],v=c*m-u*f,w=l*m-u*p,y=l*f-c*p,T=a*m-u*h,C=a*f-c*h,L=a*p-l*h;return n*(E*v-x*w+d*y)-i*(_*v-x*T+d*C)+r*(_*w-E*T+d*L)-s*(_*y-E*C+x*L)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10];return n*(a*h-l*u)-i*(s*h-l*c)+r*(s*u-a*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],h=e[8],p=e[9],f=e[10],m=e[11],_=e[12],E=e[13],x=e[14],d=e[15],v=n*l-i*a,w=n*c-r*a,y=n*u-s*a,T=i*c-r*l,C=i*u-s*l,L=r*u-s*c,g=h*E-p*_,R=h*x-f*_,A=h*d-m*_,D=p*x-f*E,B=p*d-m*E,W=f*d-m*x,te=v*W-w*B+y*D+T*A-C*R+L*g;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/te;return e[0]=(l*W-c*B+u*D)*H,e[1]=(r*B-i*W-s*D)*H,e[2]=(E*L-x*C+d*T)*H,e[3]=(f*C-p*L-m*T)*H,e[4]=(c*A-a*W-u*R)*H,e[5]=(n*W-r*A+s*R)*H,e[6]=(x*y-_*L-d*w)*H,e[7]=(h*L-f*y+m*w)*H,e[8]=(a*B-l*A+u*g)*H,e[9]=(i*A-n*B-s*g)*H,e[10]=(_*C-E*y+d*v)*H,e[11]=(p*y-h*C-m*v)*H,e[12]=(l*R-a*D-c*g)*H,e[13]=(n*D-i*R+r*g)*H,e[14]=(E*w-_*T-x*v)*H,e[15]=(h*T-p*w+f*v)*H,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,l=e.y,c=e.z,u=s*a,h=s*l;return this.set(u*a+i,u*l-r*c,u*c+r*l,0,u*l+r*c,h*l+i,h*c-r*a,0,u*c-r*l,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,l=n._z,c=n._w,u=s+s,h=a+a,p=l+l,f=s*u,m=s*h,_=s*p,E=a*h,x=a*p,d=l*p,v=c*u,w=c*h,y=c*p,T=i.x,C=i.y,L=i.z;return r[0]=(1-(E+d))*T,r[1]=(m+y)*T,r[2]=(_-w)*T,r[3]=0,r[4]=(m-y)*C,r[5]=(1-(f+d))*C,r[6]=(x+v)*C,r[7]=0,r[8]=(_+w)*L,r[9]=(x-v)*L,r[10]=(1-(f+E))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=as.set(r[0],r[1],r[2]).length();const l=as.set(r[4],r[5],r[6]).length(),c=as.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Wn.copy(this);const u=1/a,h=1/l,p=1/c;return Wn.elements[0]*=u,Wn.elements[1]*=u,Wn.elements[2]*=u,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=p,Wn.elements[9]*=p,Wn.elements[10]*=p,n.setFromRotationMatrix(Wn),i.x=a,i.y=l,i.z=c,this}makePerspective(e,n,i,r,s,a,l=fi,c=!1){const u=this.elements,h=2*s/(n-e),p=2*s/(i-r),f=(n+e)/(n-e),m=(i+r)/(i-r);let _,E;if(c)_=s/(a-s),E=a*s/(a-s);else if(l===fi)_=-(a+s)/(a-s),E=-2*a*s/(a-s);else if(l===to)_=-a/(a-s),E=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=p,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=E,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,l=fi,c=!1){const u=this.elements,h=2/(n-e),p=2/(i-r),f=-(n+e)/(n-e),m=-(i+r)/(i-r);let _,E;if(c)_=1/(a-s),E=a/(a-s);else if(l===fi)_=-2/(a-s),E=-(a+s)/(a-s);else if(l===to)_=-1/(a-s),E=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=h,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=p,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=_,u[14]=E,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Kl.prototype.isMatrix4=!0;let Lt=Kl;const as=new re,Wn=new Lt,fw=new re(0,0,0),hw=new re(1,1,1),Wi=new re,Do=new re,bn=new re,Cm=new Lt,Am=new ea;class xr{constructor(e=0,n=0,i=0,r=xr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],l=r[8],c=r[1],u=r[5],h=r[9],p=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-lt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Je("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Cm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Am.setFromEuler(this),this.setFromQuaternion(Am,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xr.DEFAULT_ORDER="XYZ";class ov{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pw=0;const Rm=new re,os=new ea,yi=new Lt,Io=new re,da=new re,mw=new re,gw=new ea,Nm=new re(1,0,0),Lm=new re(0,1,0),Pm=new re(0,0,1),Dm={type:"added"},xw={type:"removed"},ls={type:"childadded",child:null},su={type:"childremoved",child:null};class rn extends Zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pw++}),this.uuid=oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new re,n=new xr,i=new ea,r=new re(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new et}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ov,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return os.setFromAxisAngle(e,n),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,n){return os.setFromAxisAngle(e,n),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(Nm,e)}rotateY(e){return this.rotateOnAxis(Lm,e)}rotateZ(e){return this.rotateOnAxis(Pm,e)}translateOnAxis(e,n){return Rm.copy(e).applyQuaternion(this.quaternion),this.position.add(Rm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Nm,e)}translateY(e){return this.translateOnAxis(Lm,e)}translateZ(e){return this.translateOnAxis(Pm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Io.copy(e):Io.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yi.lookAt(da,Io,this.up):yi.lookAt(Io,da,this.up),this.quaternion.setFromRotationMatrix(yi),r&&(yi.extractRotation(r.matrixWorld),os.setFromRotationMatrix(yi),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dm),ls.child=e,this.dispatchEvent(ls),ls.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(xw),su.child=e,this.dispatchEvent(su),su.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dm),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,e,mw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,gw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const p=c[u];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(s(e.materials,this.material[c]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(e.animations,c))}}if(n){const l=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(l){const c=[];for(const u in l){const h=l[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}rn.DEFAULT_UP=new re(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Uo extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vw={type:"move"};class au{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const l=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const E of e.hand.values()){const x=n.getJointPose(E,i),d=this._getHandJoint(u,E);x!==null&&(d.matrix.fromArray(x.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=x.radius),d.visible=x!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=h.position.distanceTo(p.position),m=.02,_=.005;u.inputState.pinching&&f>m+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(vw)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Uo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const lv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function ou(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ft{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=ot.workingColorSpace){if(e=sw(e,1),n=lt(n,0,1),i=lt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=ou(a,s,e+1/3),this.g=ou(a,s,e),this.b=ou(a,s,e-1/3)}return ot.colorSpaceToWorking(this,r),this}setStyle(e,n=Un){function i(s){s!==void 0&&parseFloat(s)<1&&Je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Un){const i=lv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return ot.workingToColorSpace(Jt.copy(this),e),Math.round(lt(Jt.r*255,0,255))*65536+Math.round(lt(Jt.g*255,0,255))*256+Math.round(lt(Jt.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.workingToColorSpace(Jt.copy(this),n);const i=Jt.r,r=Jt.g,s=Jt.b,a=Math.max(i,r,s),l=Math.min(i,r,s);let c,u;const h=(l+a)/2;if(l===a)c=0,u=0;else{const p=a-l;switch(u=h<=.5?p/(a+l):p/(2-a-l),a){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,n=ot.workingColorSpace){return ot.workingToColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Un){ot.workingToColorSpace(Jt.copy(this),e);const n=Jt.r,i=Jt.g,r=Jt.b;return e!==Un?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+n,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Xi),e.getHSL(Fo);const i=eu(Xi.h,Fo.h,n),r=eu(Xi.s,Fo.s,n),s=eu(Xi.l,Fo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new ft;ft.NAMES=lv;class _w extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xr,this.environmentIntensity=1,this.environmentRotation=new xr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Xn=new re,Si=new re,lu=new re,wi=new re,cs=new re,us=new re,Im=new re,cu=new re,uu=new re,du=new re,fu=new Tt,hu=new Tt,pu=new Tt;class Zn{constructor(e=new re,n=new re,i=new re){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Xn.subVectors(e,n),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Xn.subVectors(r,n),Si.subVectors(i,n),lu.subVectors(e,n);const a=Xn.dot(Xn),l=Xn.dot(Si),c=Xn.dot(lu),u=Si.dot(Si),h=Si.dot(lu),p=a*u-l*l;if(p===0)return s.set(0,0,0),null;const f=1/p,m=(u*c-l*h)*f,_=(a*h-l*c)*f;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,n,i,r,s,a,l,c){return this.getBarycoord(e,n,i,r,wi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,wi.x),c.addScaledVector(a,wi.y),c.addScaledVector(l,wi.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return fu.setScalar(0),hu.setScalar(0),pu.setScalar(0),fu.fromBufferAttribute(e,n),hu.fromBufferAttribute(e,i),pu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(fu,s.x),a.addScaledVector(hu,s.y),a.addScaledVector(pu,s.z),a}static isFrontFacing(e,n,i,r){return Xn.subVectors(i,n),Si.subVectors(e,n),Xn.cross(Si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Xn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Zn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,l;cs.subVectors(r,i),us.subVectors(s,i),cu.subVectors(e,i);const c=cs.dot(cu),u=us.dot(cu);if(c<=0&&u<=0)return n.copy(i);uu.subVectors(e,r);const h=cs.dot(uu),p=us.dot(uu);if(h>=0&&p<=h)return n.copy(r);const f=c*p-h*u;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),n.copy(i).addScaledVector(cs,a);du.subVectors(e,s);const m=cs.dot(du),_=us.dot(du);if(_>=0&&m<=_)return n.copy(s);const E=m*u-c*_;if(E<=0&&u>=0&&_<=0)return l=u/(u-_),n.copy(i).addScaledVector(us,l);const x=h*_-m*p;if(x<=0&&p-h>=0&&m-_>=0)return Im.subVectors(s,r),l=(p-h)/(p-h+(m-_)),n.copy(r).addScaledVector(Im,l);const d=1/(x+E+f);return a=E*d,l=f*d,n.copy(i).addScaledVector(cs,a).addScaledVector(us,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class lo{constructor(e=new re(1/0,1/0,1/0),n=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,qn):qn.fromBufferAttribute(s,a),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ko.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ko.copy(i.boundingBox)),ko.applyMatrix4(e.matrixWorld),this.union(ko)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fa),Oo.subVectors(this.max,fa),ds.subVectors(e.a,fa),fs.subVectors(e.b,fa),hs.subVectors(e.c,fa),qi.subVectors(fs,ds),$i.subVectors(hs,fs),Mr.subVectors(ds,hs);let n=[0,-qi.z,qi.y,0,-$i.z,$i.y,0,-Mr.z,Mr.y,qi.z,0,-qi.x,$i.z,0,-$i.x,Mr.z,0,-Mr.x,-qi.y,qi.x,0,-$i.y,$i.x,0,-Mr.y,Mr.x,0];return!mu(n,ds,fs,hs,Oo)||(n=[1,0,0,0,1,0,0,0,1],!mu(n,ds,fs,hs,Oo))?!1:(zo.crossVectors(qi,$i),n=[zo.x,zo.y,zo.z],mu(n,ds,fs,hs,Oo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mi=[new re,new re,new re,new re,new re,new re,new re,new re],qn=new re,ko=new lo,ds=new re,fs=new re,hs=new re,qi=new re,$i=new re,Mr=new re,fa=new re,Oo=new re,zo=new re,br=new re;function mu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){br.fromArray(t,s);const l=r.x*Math.abs(br.x)+r.y*Math.abs(br.y)+r.z*Math.abs(br.z),c=e.dot(br),u=n.dot(br),h=i.dot(br);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>l)return!1}return!0}const Ut=new re,Bo=new ct;let yw=0;class xi extends Zr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yw++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ym,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Bo.fromBufferAttribute(this,n),Bo.applyMatrix3(e),this.setXY(n,Bo.x,Bo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix3(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix4(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyNormalMatrix(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.transformDirection(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ua(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=pn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ua(n,this.array)),n}setX(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ua(n,this.array)),n}setY(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ua(n,this.array)),n}setZ(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ua(n,this.array)),n}setW(e,n){return this.normalized&&(n=pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=pn(n,this.array),i=pn(i,this.array),r=pn(r,this.array),s=pn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ym&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class cv extends xi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class uv extends xi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class dn extends xi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const Sw=new lo,ha=new re,gu=new re;class Ch{constructor(e=new re,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Sw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ha.subVectors(e,this.center);const n=ha.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ha,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ha.copy(e.center).add(gu)),this.expandByPoint(ha.copy(e.center).sub(gu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let ww=0;const In=new Lt,xu=new rn,ps=new re,En=new lo,pa=new lo,jt=new re;class ni extends Zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ww++}),this.uuid=oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tw(e)?uv:cv)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new et().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,n,i){return In.makeTranslation(e,n,i),this.applyMatrix4(In),this}scale(e,n,i){return In.makeScale(e,n,i),this.applyMatrix4(In),this}lookAt(e){return xu.lookAt(e),xu.updateMatrix(),this.applyMatrix4(xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ch);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const l=n[s];pa.setFromBufferAttribute(l),this.morphTargetsRelative?(jt.addVectors(En.min,pa.min),En.expandByPoint(jt),jt.addVectors(En.max,pa.max),En.expandByPoint(jt)):(En.expandByPoint(pa.min),En.expandByPoint(pa.max))}En.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(jt));if(n)for(let s=0,a=n.length;s<a;s++){const l=n[s],c=this.morphTargetsRelative;for(let u=0,h=l.count;u<h;u++)jt.fromBufferAttribute(l,u),c&&(ps.fromBufferAttribute(e,u),jt.add(ps)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new xi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const l=[],c=[];for(let g=0;g<i.count;g++)l[g]=new re,c[g]=new re;const u=new re,h=new re,p=new re,f=new ct,m=new ct,_=new ct,E=new re,x=new re;function d(g,R,A){u.fromBufferAttribute(i,g),h.fromBufferAttribute(i,R),p.fromBufferAttribute(i,A),f.fromBufferAttribute(s,g),m.fromBufferAttribute(s,R),_.fromBufferAttribute(s,A),h.sub(u),p.sub(u),m.sub(f),_.sub(f);const D=1/(m.x*_.y-_.x*m.y);isFinite(D)&&(E.copy(h).multiplyScalar(_.y).addScaledVector(p,-m.y).multiplyScalar(D),x.copy(p).multiplyScalar(m.x).addScaledVector(h,-_.x).multiplyScalar(D),l[g].add(E),l[R].add(E),l[A].add(E),c[g].add(x),c[R].add(x),c[A].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let g=0,R=v.length;g<R;++g){const A=v[g],D=A.start,B=A.count;for(let W=D,te=D+B;W<te;W+=3)d(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const w=new re,y=new re,T=new re,C=new re;function L(g){T.fromBufferAttribute(r,g),C.copy(T);const R=l[g];w.copy(R),w.sub(T.multiplyScalar(T.dot(R))).normalize(),y.crossVectors(C,R);const D=y.dot(c[g])<0?-1:1;a.setXYZW(g,w.x,w.y,w.z,D)}for(let g=0,R=v.length;g<R;++g){const A=v[g],D=A.start,B=A.count;for(let W=D,te=D+B;W<te;W+=3)L(e.getX(W+0)),L(e.getX(W+1)),L(e.getX(W+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new xi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new re,s=new re,a=new re,l=new re,c=new re,u=new re,h=new re,p=new re;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),E=e.getX(f+1),x=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,E),a.fromBufferAttribute(n,x),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,E),u.fromBufferAttribute(i,x),l.add(h),c.add(h),u.add(h),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(x,u.x,u.y,u.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)jt.fromBufferAttribute(e,n),jt.normalize(),e.setXYZ(n,jt.x,jt.y,jt.z)}toNonIndexed(){function e(l,c){const u=l.array,h=l.itemSize,p=l.normalized,f=new u.constructor(c.length*h);let m=0,_=0;for(let E=0,x=c.length;E<x;E++){l.isInterleavedBufferAttribute?m=c[E]*l.data.stride+l.offset:m=c[E]*h;for(let d=0;d<h;d++)f[_++]=u[m++]}return new xi(f,h,p)}if(this.index===null)return Je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ni,i=this.index.array,r=this.attributes;for(const l in r){const c=r[l],u=e(c,i);n.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const c=[],u=s[l];for(let h=0,p=u.length;h<p;h++){const f=u[h],m=e(f,i);c.push(m)}n.morphAttributes[l]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const u=a[l];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let p=0,f=u.length;p<f;p++){const m=u[p];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],p=s[u];for(let f=0,m=p.length;f<m;f++)h.push(p[f].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Mw=0;class co extends Zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mw++}),this.uuid=oo(),this.name="",this.type="Material",this.blending=ks,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=Rd,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_m,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Je(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Je(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ks&&(i.blending=this.blending),this.side!==gr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ad&&(i.blendSrc=this.blendSrc),this.blendDst!==Rd&&(i.blendDst=this.blendDst),this.blendEquation!==Nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_m&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const l in s){const c=s[l];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ft().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ct().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const bi=new re,vu=new re,jo=new re,Yi=new re,_u=new re,Vo=new re,yu=new re;class bw{constructor(e=new re,n=new re(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=bi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,n),bi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){vu.copy(e).add(n).multiplyScalar(.5),jo.copy(n).sub(e).normalize(),Yi.copy(this.origin).sub(vu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(jo),l=Yi.dot(this.direction),c=-Yi.dot(jo),u=Yi.lengthSq(),h=Math.abs(1-a*a);let p,f,m,_;if(h>0)if(p=a*c-l,f=a*l-c,_=s*h,p>=0)if(f>=-_)if(f<=_){const E=1/h;p*=E,f*=E,m=p*(p+a*f+2*l)+f*(a*p+f+2*c)+u}else f=s,p=Math.max(0,-(a*f+l)),m=-p*p+f*(f+2*c)+u;else f=-s,p=Math.max(0,-(a*f+l)),m=-p*p+f*(f+2*c)+u;else f<=-_?(p=Math.max(0,-(-a*s+l)),f=p>0?-s:Math.min(Math.max(-s,-c),s),m=-p*p+f*(f+2*c)+u):f<=_?(p=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+u):(p=Math.max(0,-(a*s+l)),f=p>0?s:Math.min(Math.max(-s,-c),s),m=-p*p+f*(f+2*c)+u);else f=a>0?-s:s,p=Math.max(0,-(a*f+l)),m=-p*p+f*(f+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(vu).addScaledVector(jo,f),m}intersectSphere(e,n){bi.subVectors(e.center,this.origin);const i=bi.dot(this.direction),r=bi.dot(bi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=i-a,c=i+a;return c<0?null:l<0?this.at(c,n):this.at(l,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,l,c;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(l=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(l=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),i>c||l>r)||((l>i||i!==i)&&(i=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,n,i,r,s){_u.subVectors(n,e),Vo.subVectors(i,e),yu.crossVectors(_u,Vo);let a=this.direction.dot(yu),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;Yi.subVectors(this.origin,e);const c=l*this.direction.dot(Vo.crossVectors(Yi,Vo));if(c<0)return null;const u=l*this.direction.dot(_u.cross(Yi));if(u<0||c+u>a)return null;const h=-l*Yi.dot(yu);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ah extends co{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xr,this.combine=Hx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Um=new Lt,Er=new bw,Ho=new Ch,Fm=new re,Go=new re,Wo=new re,Xo=new re,Su=new re,qo=new re,km=new re,$o=new re;class en extends rn{constructor(e=new ni,n=new Ah){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){qo.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=l[c],p=s[c];h!==0&&(Su.fromBufferAttribute(p,e),a?qo.addScaledVector(Su,h):qo.addScaledVector(Su.sub(n),h))}n.add(qo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(s),Er.copy(e.ray).recast(e.near),!(Ho.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Ho,Fm)===null||Er.origin.distanceToSquared(Fm)>(e.far-e.near)**2))&&(Um.copy(s).invert(),Er.copy(e.ray).applyMatrix4(Um),!(i.boundingBox!==null&&Er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Er)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,l=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(l!==null)if(Array.isArray(a))for(let _=0,E=f.length;_<E;_++){const x=f[_],d=a[x.materialIndex],v=Math.max(x.start,m.start),w=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let y=v,T=w;y<T;y+=3){const C=l.getX(y),L=l.getX(y+1),g=l.getX(y+2);r=Yo(this,d,e,i,u,h,p,C,L,g),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let x=_,d=E;x<d;x+=3){const v=l.getX(x),w=l.getX(x+1),y=l.getX(x+2);r=Yo(this,a,e,i,u,h,p,v,w,y),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,E=f.length;_<E;_++){const x=f[_],d=a[x.materialIndex],v=Math.max(x.start,m.start),w=Math.min(c.count,Math.min(x.start+x.count,m.start+m.count));for(let y=v,T=w;y<T;y+=3){const C=y,L=y+1,g=y+2;r=Yo(this,d,e,i,u,h,p,C,L,g),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),E=Math.min(c.count,m.start+m.count);for(let x=_,d=E;x<d;x+=3){const v=x,w=x+1,y=x+2;r=Yo(this,a,e,i,u,h,p,v,w,y),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function Ew(t,e,n,i,r,s,a,l){let c;if(e.side===Sn?c=i.intersectTriangle(a,s,r,!0,l):c=i.intersectTriangle(r,s,a,e.side===gr,l),c===null)return null;$o.copy(l),$o.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo($o);return u<n.near||u>n.far?null:{distance:u,point:$o.clone(),object:t}}function Yo(t,e,n,i,r,s,a,l,c,u){t.getVertexPosition(l,Go),t.getVertexPosition(c,Wo),t.getVertexPosition(u,Xo);const h=Ew(t,e,n,i,Go,Wo,Xo,km);if(h){const p=new re;Zn.getBarycoord(km,Go,Wo,Xo,p),r&&(h.uv=Zn.getInterpolatedAttribute(r,l,c,u,p,new ct)),s&&(h.uv1=Zn.getInterpolatedAttribute(s,l,c,u,p,new ct)),a&&(h.normal=Zn.getInterpolatedAttribute(a,l,c,u,p,new re),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:l,b:c,c:u,normal:new re,materialIndex:0};Zn.getNormal(Go,Wo,Xo,f.normal),h.face=f,h.barycoord=p}return h}class Tw extends un{constructor(e=null,n=1,i=1,r,s,a,l,c,u=Xt,h=Xt,p,f){super(null,a,l,c,u,h,r,s,p,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const wu=new re,Cw=new re,Aw=new et;class Rr{constructor(e=new re(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=wu.subVectors(i,n).cross(Cw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(wu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Aw.getNormalMatrix(e),r=this.coplanarPoint(wu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new Ch,Rw=new ct(.5,.5),Ko=new re;class Rh{constructor(e=new Rr,n=new Rr,i=new Rr,r=new Rr,s=new Rr,a=new Rr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const l=this.planes;return l[0].copy(e),l[1].copy(n),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi,i=!1){const r=this.planes,s=e.elements,a=s[0],l=s[1],c=s[2],u=s[3],h=s[4],p=s[5],f=s[6],m=s[7],_=s[8],E=s[9],x=s[10],d=s[11],v=s[12],w=s[13],y=s[14],T=s[15];if(r[0].setComponents(u-a,m-h,d-_,T-v).normalize(),r[1].setComponents(u+a,m+h,d+_,T+v).normalize(),r[2].setComponents(u+l,m+p,d+E,T+w).normalize(),r[3].setComponents(u-l,m-p,d-E,T-w).normalize(),i)r[4].setComponents(c,f,x,y).normalize(),r[5].setComponents(u-c,m-f,d-x,T-y).normalize();else if(r[4].setComponents(u-c,m-f,d-x,T-y).normalize(),n===fi)r[5].setComponents(u+c,m+f,d+x,T+y).normalize();else if(n===to)r[5].setComponents(c,f,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){Tr.center.set(0,0,0);const n=Rw.distanceTo(e.center);return Tr.radius=.7071067811865476+n,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ko.x=r.normal.x>0?e.max.x:e.min.x,Ko.y=r.normal.y>0?e.max.y:e.min.y,Ko.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ko)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class dv extends un{constructor(e=[],n=Xr,i,r,s,a,l,c,u,h){super(e,n,i,r,s,a,l,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ys extends un{constructor(e,n,i=vi,r,s,a,l=Xt,c=Xt,u,h=Oi,p=1){if(h!==Oi&&h!==Fr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:p};super(f,r,s,a,l,c,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Th(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Nw extends Ys{constructor(e,n=vi,i=Xr,r,s,a=Xt,l=Xt,c,u=Oi){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,l,c,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class fv extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $r extends ni{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],h=[],p=[];let f=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new dn(u,3)),this.setAttribute("normal",new dn(h,3)),this.setAttribute("uv",new dn(p,2));function _(E,x,d,v,w,y,T,C,L,g,R){const A=y/L,D=T/g,B=y/2,W=T/2,te=C/2,H=L+1,Q=g+1;let q=0,b=0;const M=new re;for(let I=0;I<Q;I++){const k=I*D-W;for(let F=0;F<H;F++){const he=F*A-B;M[E]=he*v,M[x]=k*w,M[d]=te,u.push(M.x,M.y,M.z),M[E]=0,M[x]=0,M[d]=C>0?1:-1,h.push(M.x,M.y,M.z),p.push(F/L),p.push(1-I/g),q+=1}}for(let I=0;I<g;I++)for(let k=0;k<L;k++){const F=f+k+H*I,he=f+k+H*(I+1),pe=f+(k+1)+H*(I+1),oe=f+(k+1)+H*I;c.push(F,he,oe),c.push(he,pe,oe),b+=6}l.addGroup(m,b,R),m+=b,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Nh extends ni{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:l,thetaLength:c};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],p=[],f=[],m=[];let _=0;const E=[],x=i/2;let d=0;v(),a===!1&&(e>0&&w(!0),n>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new dn(p,3)),this.setAttribute("normal",new dn(f,3)),this.setAttribute("uv",new dn(m,2));function v(){const y=new re,T=new re;let C=0;const L=(n-e)/i;for(let g=0;g<=s;g++){const R=[],A=g/s,D=A*(n-e)+e;for(let B=0;B<=r;B++){const W=B/r,te=W*c+l,H=Math.sin(te),Q=Math.cos(te);T.x=D*H,T.y=-A*i+x,T.z=D*Q,p.push(T.x,T.y,T.z),y.set(H,L,Q).normalize(),f.push(y.x,y.y,y.z),m.push(W,1-A),R.push(_++)}E.push(R)}for(let g=0;g<r;g++)for(let R=0;R<s;R++){const A=E[R][g],D=E[R+1][g],B=E[R+1][g+1],W=E[R][g+1];(e>0||R!==0)&&(h.push(A,D,W),C+=3),(n>0||R!==s-1)&&(h.push(D,B,W),C+=3)}u.addGroup(d,C,0),d+=C}function w(y){const T=_,C=new ct,L=new re;let g=0;const R=y===!0?e:n,A=y===!0?1:-1;for(let B=1;B<=r;B++)p.push(0,x*A,0),f.push(0,A,0),m.push(.5,.5),_++;const D=_;for(let B=0;B<=r;B++){const te=B/r*c+l,H=Math.cos(te),Q=Math.sin(te);L.x=R*Q,L.y=x*A,L.z=R*H,p.push(L.x,L.y,L.z),f.push(0,A,0),C.x=H*.5+.5,C.y=Q*.5*A+.5,m.push(C.x,C.y),_++}for(let B=0;B<r;B++){const W=T+B,te=D+B;y===!0?h.push(te,te+1,W):h.push(te+1,te,W),g+=3}u.addGroup(d,g,y===!0?1:2),d+=g}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class uo extends ni{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,l=Math.floor(i),c=Math.floor(r),u=l+1,h=c+1,p=e/l,f=n/c,m=[],_=[],E=[],x=[];for(let d=0;d<h;d++){const v=d*f-a;for(let w=0;w<u;w++){const y=w*p-s;_.push(y,-v,0),E.push(0,0,1),x.push(w/l),x.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<l;v++){const w=v+u*d,y=v+u*(d+1),T=v+1+u*(d+1),C=v+1+u*d;m.push(w,y,C),m.push(y,T,C)}this.setIndex(m),this.setAttribute("position",new dn(_,3)),this.setAttribute("normal",new dn(E,3)),this.setAttribute("uv",new dn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Lh extends ni{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:l},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+l,Math.PI);let u=0;const h=[],p=new re,f=new re,m=[],_=[],E=[],x=[];for(let d=0;d<=i;d++){const v=[],w=d/i,y=a+w*l,T=e*Math.cos(y),C=Math.sqrt(e*e-T*T);let L=0;d===0&&a===0?L=.5/n:d===i&&c===Math.PI&&(L=-.5/n);for(let g=0;g<=n;g++){const R=g/n,A=r+R*s;p.x=-C*Math.cos(A),p.y=T,p.z=C*Math.sin(A),_.push(p.x,p.y,p.z),f.copy(p).normalize(),E.push(f.x,f.y,f.z),x.push(R+L,1-w),v.push(u++)}h.push(v)}for(let d=0;d<i;d++)for(let v=0;v<n;v++){const w=h[d][v+1],y=h[d][v],T=h[d+1][v],C=h[d+1][v+1];(d!==0||a>0)&&m.push(w,y,C),(d!==i-1||c<Math.PI)&&m.push(y,T,C)}this.setIndex(m),this.setAttribute("position",new dn(_,3)),this.setAttribute("normal",new dn(E,3)),this.setAttribute("uv",new dn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ks(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Om(r))r.isRenderTargetTexture?(Je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Om(r[0])){const s=[];for(let a=0,l=r.length;a<l;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=Ks(t[n]);for(const r in i)e[r]=i[r]}return e}function Om(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Lw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function hv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Pw={clone:Ks,merge:on};var Dw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends co{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dw,this.fragmentShader=Iw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=Lw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new ft().setHex(r.value);break;case"v2":this.uniforms[i].value=new ct().fromArray(r.value);break;case"v3":this.uniforms[i].value=new re().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Tt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new et().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Lt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Uw extends _i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Mu extends co{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gf,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fw extends co{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=q1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kw extends co{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class pv extends rn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ft(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const bu=new Lt,zm=new re,Bm=new re;class Ow{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rh,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;zm.setFromMatrixPosition(e.matrixWorld),n.position.copy(zm),Bm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Bm),n.updateMatrixWorld(),bu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bu,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===to||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(bu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Zo=new re,Qo=new ea,si=new re;class mv extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zo,Qo,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,Qo,si.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Zo,Qo,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,Qo,si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ki=new re,jm=new ct,Vm=new ct;class zn extends mv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=xf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xf*2*Math.atan(Math.tan(Jc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,n){return this.getViewBounds(e,jm,Vm),n.subVectors(Vm,jm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Jc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Ph extends mv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,l=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class zw extends Ow{constructor(){super(new Ph(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hm extends pv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rn.DEFAULT_UP),this.updateMatrix(),this.target=new rn,this.shadow=new zw}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Bw extends pv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ms=-90,gs=1;class jw extends rn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn(ms,gs,e,n);r.layers=this.layers,this.add(r);const s=new zn(ms,gs,e,n);s.layers=this.layers,this.add(s);const a=new zn(ms,gs,e,n);a.layers=this.layers,this.add(a);const l=new zn(ms,gs,e,n);l.layers=this.layers,this.add(l);const c=new zn(ms,gs,e,n);c.layers=this.layers,this.add(c);const u=new zn(ms,gs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,l,c]=n;for(const u of n)this.remove(u);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===to)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,c,u,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(p,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Vw extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Oh=class Oh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Oh.prototype.isMatrix2=!0;let Gm=Oh;function Wm(t,e,n,i){const r=Hw(i);switch(n){case nv:return t*e;case rv:return t*e/r.components*r.byteLength;case Sh:return t*e/r.components*r.byteLength;case qr:return t*e*2/r.components*r.byteLength;case wh:return t*e*2/r.components*r.byteLength;case iv:return t*e*3/r.components*r.byteLength;case Qn:return t*e*4/r.components*r.byteLength;case Mh:return t*e*4/r.components*r.byteLength;case pl:case ml:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case gl:case xl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Bd:case Vd:return Math.max(t,16)*Math.max(e,8)/4;case zd:case jd:return Math.max(t,8)*Math.max(e,8)/2;case Hd:case Gd:case Xd:case qd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Wd:case Wl:case $d:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ef:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case tf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case nf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case rf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case sf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case af:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case of:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case lf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case cf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case uf:case df:case ff:return Math.ceil(t/4)*Math.ceil(e/4)*16;case hf:case pf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Xl:case mf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Hw(t){switch(t){case Cn:case Qx:return{byteLength:1,components:1};case Ja:case Jx:case ki:return{byteLength:2,components:1};case _h:case yh:return{byteLength:2,components:4};case vi:case vh:case di:return{byteLength:4,components:1};case ev:case tv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xh}}));typeof window<"u"&&(window.__THREE__?Je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function gv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Gw(t){const e=new WeakMap;function n(l,c){const u=l.array,h=l.usage,p=u.byteLength,f=t.createBuffer();t.bindBuffer(c,f),t.bufferData(c,u,h),l.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=t.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:p}}function i(l,c,u){const h=c.array,p=c.updateRanges;if(t.bindBuffer(u,l),p.length===0)t.bufferSubData(u,0,h);else{p.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<p.length;m++){const _=p[f],E=p[m];E.start<=_.start+_.count+1?_.count=Math.max(_.count,E.start+E.count-_.start):(++f,p[f]=E)}p.length=f+1;for(let m=0,_=p.length;m<_;m++){const E=p[m];t.bufferSubData(u,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(t.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const u=e.get(l);if(u===void 0)e.set(l,n(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,l,c),u.version=l.version}}return{get:r,remove:s,update:a}}var Ww=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xw=`#ifdef USE_ALPHAHASH
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
#endif`,qw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$w=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zw=`#ifdef USE_AOMAP
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
#endif`,Qw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jw=`#ifdef USE_BATCHING
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
#endif`,eM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rM=`#ifdef USE_IRIDESCENCE
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
#endif`,sM=`#ifdef USE_BUMPMAP
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
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,pM=`#define PI 3.141592653589793
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
} // validated`,mM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gM=`vec3 transformedNormal = objectNormal;
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
#endif`,xM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_M=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SM="gl_FragColor = linearToOutputTexel( gl_FragColor );",wM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MM=`#ifdef USE_ENVMAP
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
#endif`,bM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,EM=`#ifdef USE_ENVMAP
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
#endif`,TM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CM=`#ifdef USE_ENVMAP
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
#endif`,AM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,RM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PM=`#ifdef USE_GRADIENTMAP
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
}`,DM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,kM=`#ifdef USE_ENVMAP
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
#endif`,OM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VM=`PhysicalMaterial material;
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
#endif`,HM=`uniform sampler2D dfgLUT;
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
}`,GM=`
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
#endif`,WM=`#if defined( RE_IndirectDiffuse )
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
#endif`,XM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,$M=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,QM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tb=`#if defined( USE_POINTS_UV )
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
#endif`,nb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ib=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ab=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ob=`#ifdef USE_MORPHTARGETS
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
#endif`,lb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ub=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pb=`#ifdef USE_NORMALMAP
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
#endif`,mb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_b=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ab=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nb=`float getShadowMask() {
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
}`,Lb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pb=`#ifdef USE_SKINNING
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
#endif`,Db=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ib=`#ifdef USE_SKINNING
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
#endif`,Ub=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ob=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zb=`#ifdef USE_TRANSMISSION
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
#endif`,Bb=`#ifdef USE_TRANSMISSION
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
#endif`,jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Wb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xb=`uniform sampler2D t2D;
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
}`,qb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$b=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zb=`#include <common>
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
}`,Qb=`#if DEPTH_PACKING == 3200
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
}`,Jb=`#define DISTANCE
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
}`,eE=`#define DISTANCE
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
}`,tE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iE=`uniform float scale;
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
}`,rE=`uniform vec3 diffuse;
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
}`,sE=`#include <common>
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
}`,aE=`uniform vec3 diffuse;
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
}`,oE=`#define LAMBERT
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
}`,lE=`#define LAMBERT
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
}`,cE=`#define MATCAP
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
}`,uE=`#define MATCAP
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
}`,dE=`#define NORMAL
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
}`,fE=`#define NORMAL
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
}`,hE=`#define PHONG
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
}`,pE=`#define PHONG
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
}`,mE=`#define STANDARD
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
}`,gE=`#define STANDARD
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
}`,xE=`#define TOON
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
}`,vE=`#define TOON
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
}`,_E=`uniform float size;
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
}`,yE=`uniform vec3 diffuse;
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
}`,SE=`#include <common>
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
}`,wE=`uniform vec3 color;
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
}`,ME=`uniform float rotation;
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
}`,bE=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:Ww,alphahash_pars_fragment:Xw,alphamap_fragment:qw,alphamap_pars_fragment:$w,alphatest_fragment:Yw,alphatest_pars_fragment:Kw,aomap_fragment:Zw,aomap_pars_fragment:Qw,batching_pars_vertex:Jw,batching_vertex:eM,begin_vertex:tM,beginnormal_vertex:nM,bsdfs:iM,iridescence_fragment:rM,bumpmap_pars_fragment:sM,clipping_planes_fragment:aM,clipping_planes_pars_fragment:oM,clipping_planes_pars_vertex:lM,clipping_planes_vertex:cM,color_fragment:uM,color_pars_fragment:dM,color_pars_vertex:fM,color_vertex:hM,common:pM,cube_uv_reflection_fragment:mM,defaultnormal_vertex:gM,displacementmap_pars_vertex:xM,displacementmap_vertex:vM,emissivemap_fragment:_M,emissivemap_pars_fragment:yM,colorspace_fragment:SM,colorspace_pars_fragment:wM,envmap_fragment:MM,envmap_common_pars_fragment:bM,envmap_pars_fragment:EM,envmap_pars_vertex:TM,envmap_physical_pars_fragment:kM,envmap_vertex:CM,fog_vertex:AM,fog_pars_vertex:RM,fog_fragment:NM,fog_pars_fragment:LM,gradientmap_pars_fragment:PM,lightmap_pars_fragment:DM,lights_lambert_fragment:IM,lights_lambert_pars_fragment:UM,lights_pars_begin:FM,lights_toon_fragment:OM,lights_toon_pars_fragment:zM,lights_phong_fragment:BM,lights_phong_pars_fragment:jM,lights_physical_fragment:VM,lights_physical_pars_fragment:HM,lights_fragment_begin:GM,lights_fragment_maps:WM,lights_fragment_end:XM,lightprobes_pars_fragment:qM,logdepthbuf_fragment:$M,logdepthbuf_pars_fragment:YM,logdepthbuf_pars_vertex:KM,logdepthbuf_vertex:ZM,map_fragment:QM,map_pars_fragment:JM,map_particle_fragment:eb,map_particle_pars_fragment:tb,metalnessmap_fragment:nb,metalnessmap_pars_fragment:ib,morphinstance_vertex:rb,morphcolor_vertex:sb,morphnormal_vertex:ab,morphtarget_pars_vertex:ob,morphtarget_vertex:lb,normal_fragment_begin:cb,normal_fragment_maps:ub,normal_pars_fragment:db,normal_pars_vertex:fb,normal_vertex:hb,normalmap_pars_fragment:pb,clearcoat_normal_fragment_begin:mb,clearcoat_normal_fragment_maps:gb,clearcoat_pars_fragment:xb,iridescence_pars_fragment:vb,opaque_fragment:_b,packing:yb,premultiplied_alpha_fragment:Sb,project_vertex:wb,dithering_fragment:Mb,dithering_pars_fragment:bb,roughnessmap_fragment:Eb,roughnessmap_pars_fragment:Tb,shadowmap_pars_fragment:Cb,shadowmap_pars_vertex:Ab,shadowmap_vertex:Rb,shadowmask_pars_fragment:Nb,skinbase_vertex:Lb,skinning_pars_vertex:Pb,skinning_vertex:Db,skinnormal_vertex:Ib,specularmap_fragment:Ub,specularmap_pars_fragment:Fb,tonemapping_fragment:kb,tonemapping_pars_fragment:Ob,transmission_fragment:zb,transmission_pars_fragment:Bb,uv_pars_fragment:jb,uv_pars_vertex:Vb,uv_vertex:Hb,worldpos_vertex:Gb,background_vert:Wb,background_frag:Xb,backgroundCube_vert:qb,backgroundCube_frag:$b,cube_vert:Yb,cube_frag:Kb,depth_vert:Zb,depth_frag:Qb,distance_vert:Jb,distance_frag:eE,equirect_vert:tE,equirect_frag:nE,linedashed_vert:iE,linedashed_frag:rE,meshbasic_vert:sE,meshbasic_frag:aE,meshlambert_vert:oE,meshlambert_frag:lE,meshmatcap_vert:cE,meshmatcap_frag:uE,meshnormal_vert:dE,meshnormal_frag:fE,meshphong_vert:hE,meshphong_frag:pE,meshphysical_vert:mE,meshphysical_frag:gE,meshtoon_vert:xE,meshtoon_frag:vE,points_vert:_E,points_frag:yE,shadow_vert:SE,shadow_frag:wE,sprite_vert:ME,sprite_frag:bE},Fe={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new re},probesMax:{value:new re},probesResolution:{value:new re}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},li={basic:{uniforms:on([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:on([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ft(0)},envMapIntensity:{value:1}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:on([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:on([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:on([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new ft(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:on([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:on([Fe.points,Fe.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:on([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:on([Fe.common,Fe.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:on([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:on([Fe.sprite,Fe.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distance:{uniforms:on([Fe.common,Fe.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distance_vert,fragmentShader:rt.distance_frag},shadow:{uniforms:on([Fe.lights,Fe.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};li.physical={uniforms:on([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const Jo={r:0,b:0,g:0},EE=new Lt,xv=new et;xv.set(-1,0,0,0,1,0,0,0,1);function TE(t,e,n,i,r,s){const a=new ft(0);let l=r===!0?0:1,c,u,h=null,p=0,f=null;function m(v){let w=v.isScene===!0?v.background:null;if(w&&w.isTexture){const y=v.backgroundBlurriness>0;w=e.get(w,y)}return w}function _(v){let w=!1;const y=m(v);y===null?x(a,l):y&&y.isColor&&(x(y,1),w=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function E(v,w){const y=m(w);y&&(y.isCubeTexture||y.mapping===gc)?(u===void 0&&(u=new en(new $r(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Ks(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,C,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(EE.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(xv),u.material.toneMapped=ot.getTransfer(y.colorSpace)!==pt,(h!==y||p!==y.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,h=y,p=y.version,f=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new en(new uo(2,2),new _i({name:"BackgroundMaterial",uniforms:Ks(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=ot.getTransfer(y.colorSpace)!==pt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||p!==y.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,h=y,p=y.version,f=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function x(v,w){v.getRGB(Jo,hv(t)),n.buffers.color.setClear(Jo.r,Jo.g,Jo.b,w,s)}function d(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,w=1){a.set(v),l=w,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,x(a,l)},render:_,addToRenderList:E,dispose:d}}function CE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function l(D,B,W,te,H){let Q=!1;const q=p(D,te,W,B);s!==q&&(s=q,u(s.object)),Q=m(D,te,W,H),Q&&_(D,te,W,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,y(D,B,W,te),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return t.createVertexArray()}function u(D){return t.bindVertexArray(D)}function h(D){return t.deleteVertexArray(D)}function p(D,B,W,te){const H=te.wireframe===!0;let Q=i[B.id];Q===void 0&&(Q={},i[B.id]=Q);const q=D.isInstancedMesh===!0?D.id:0;let b=Q[q];b===void 0&&(b={},Q[q]=b);let M=b[W.id];M===void 0&&(M={},b[W.id]=M);let I=M[H];return I===void 0&&(I=f(c()),M[H]=I),I}function f(D){const B=[],W=[],te=[];for(let H=0;H<n;H++)B[H]=0,W[H]=0,te[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:W,attributeDivisors:te,object:D,attributes:{},index:null}}function m(D,B,W,te){const H=s.attributes,Q=B.attributes;let q=0;const b=W.getAttributes();for(const M in b)if(b[M].location>=0){const k=H[M];let F=Q[M];if(F===void 0&&(M==="instanceMatrix"&&D.instanceMatrix&&(F=D.instanceMatrix),M==="instanceColor"&&D.instanceColor&&(F=D.instanceColor)),k===void 0||k.attribute!==F||F&&k.data!==F.data)return!0;q++}return s.attributesNum!==q||s.index!==te}function _(D,B,W,te){const H={},Q=B.attributes;let q=0;const b=W.getAttributes();for(const M in b)if(b[M].location>=0){let k=Q[M];k===void 0&&(M==="instanceMatrix"&&D.instanceMatrix&&(k=D.instanceMatrix),M==="instanceColor"&&D.instanceColor&&(k=D.instanceColor));const F={};F.attribute=k,k&&k.data&&(F.data=k.data),H[M]=F,q++}s.attributes=H,s.attributesNum=q,s.index=te}function E(){const D=s.newAttributes;for(let B=0,W=D.length;B<W;B++)D[B]=0}function x(D){d(D,0)}function d(D,B){const W=s.newAttributes,te=s.enabledAttributes,H=s.attributeDivisors;W[D]=1,te[D]===0&&(t.enableVertexAttribArray(D),te[D]=1),H[D]!==B&&(t.vertexAttribDivisor(D,B),H[D]=B)}function v(){const D=s.newAttributes,B=s.enabledAttributes;for(let W=0,te=B.length;W<te;W++)B[W]!==D[W]&&(t.disableVertexAttribArray(W),B[W]=0)}function w(D,B,W,te,H,Q,q){q===!0?t.vertexAttribIPointer(D,B,W,H,Q):t.vertexAttribPointer(D,B,W,te,H,Q)}function y(D,B,W,te){E();const H=te.attributes,Q=W.getAttributes(),q=B.defaultAttributeValues;for(const b in Q){const M=Q[b];if(M.location>=0){let I=H[b];if(I===void 0&&(b==="instanceMatrix"&&D.instanceMatrix&&(I=D.instanceMatrix),b==="instanceColor"&&D.instanceColor&&(I=D.instanceColor)),I!==void 0){const k=I.normalized,F=I.itemSize,he=e.get(I);if(he===void 0)continue;const pe=he.buffer,oe=he.type,j=he.bytesPerElement,ie=oe===t.INT||oe===t.UNSIGNED_INT||I.gpuType===vh;if(I.isInterleavedBufferAttribute){const de=I.data,Ne=de.stride,Ee=I.offset;if(de.isInstancedInterleavedBuffer){for(let X=0;X<M.locationSize;X++)d(M.location+X,de.meshPerAttribute);D.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let X=0;X<M.locationSize;X++)x(M.location+X);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let X=0;X<M.locationSize;X++)w(M.location+X,F/M.locationSize,oe,k,Ne*j,(Ee+F/M.locationSize*X)*j,ie)}else{if(I.isInstancedBufferAttribute){for(let de=0;de<M.locationSize;de++)d(M.location+de,I.meshPerAttribute);D.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let de=0;de<M.locationSize;de++)x(M.location+de);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let de=0;de<M.locationSize;de++)w(M.location+de,F/M.locationSize,oe,k,F*j,F/M.locationSize*de*j,ie)}}else if(q!==void 0){const k=q[b];if(k!==void 0)switch(k.length){case 2:t.vertexAttrib2fv(M.location,k);break;case 3:t.vertexAttrib3fv(M.location,k);break;case 4:t.vertexAttrib4fv(M.location,k);break;default:t.vertexAttrib1fv(M.location,k)}}}}v()}function T(){R();for(const D in i){const B=i[D];for(const W in B){const te=B[W];for(const H in te){const Q=te[H];for(const q in Q)h(Q[q].object),delete Q[q];delete te[H]}}delete i[D]}}function C(D){if(i[D.id]===void 0)return;const B=i[D.id];for(const W in B){const te=B[W];for(const H in te){const Q=te[H];for(const q in Q)h(Q[q].object),delete Q[q];delete te[H]}}delete i[D.id]}function L(D){for(const B in i){const W=i[B];for(const te in W){const H=W[te];if(H[D.id]===void 0)continue;const Q=H[D.id];for(const q in Q)h(Q[q].object),delete Q[q];delete H[D.id]}}}function g(D){for(const B in i){const W=i[B],te=D.isInstancedMesh===!0?D.id:0,H=W[te];if(H!==void 0){for(const Q in H){const q=H[Q];for(const b in q)h(q[b].object),delete q[b];delete H[Q]}delete W[te],Object.keys(W).length===0&&delete i[B]}}}function R(){A(),a=!0,s!==r&&(s=r,u(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:R,resetDefaultState:A,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfObject:g,releaseStatesOfProgram:L,initAttributes:E,enableAttribute:x,disableUnusedAttributes:v}}function AE(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function l(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l}function RE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(L){return!(L!==Qn&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(L){const g=L===ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Cn&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==di&&!g)}function c(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=c(u);h!==u&&(Je("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const p=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),w=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),C=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:E,maxCubemapSize:x,maxAttributes:d,maxVertexUniforms:v,maxVaryings:w,maxFragmentUniforms:y,maxSamples:T,samples:C}}function NE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Rr,l=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||i!==0||r;return r=f,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){n=h(p,f,0)},this.setState=function(p,f,m){const _=p.clippingPlanes,E=p.clipIntersection,x=p.clipShadows,d=t.get(p);if(!r||_===null||_.length===0||s&&!x)s?h(null):u();else{const v=s?0:i,w=v*4;let y=d.clippingState||null;c.value=y,y=h(_,f,w,m);for(let T=0;T!==w;++T)y[T]=n[T];d.clippingState=y,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=v}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,f,m,_){const E=p!==null?p.length:0;let x=null;if(E!==0){if(x=c.value,_!==!0||x===null){const d=m+E*4,v=f.matrixWorldInverse;l.getNormalMatrix(v),(x===null||x.length<d)&&(x=new Float32Array(d));for(let w=0,y=m;w!==E;++w,y+=4)a.copy(p[w]).applyMatrix4(v,l),a.normal.toArray(x,y),x[y+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,x}}const rr=4,Xm=[.125,.215,.35,.446,.526,.582],Lr=20,LE=256,ma=new Ph,qm=new ft;let Eu=null,Tu=0,Cu=0,Au=!1;const PE=new re;class $m{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:l=PE}=s;Eu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),Au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,l),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Km(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Eu,Tu,Cu),this._renderer.xr.enabled=Au,e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xr||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),Au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:ki,format:Qn,colorSpace:ql,depthBuffer:!1},r=Ym(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ym(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=DE(s)),this._blurMaterial=UE(s,e,n),this._ggxMaterial=IE(s,e,n)}return r}_compileMaterial(e){const n=new en(new ni,e);this._renderer.compile(n,ma)}_sceneToCubeUV(e,n,i,r,s){const c=new zn(90,1,n,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,m=p.toneMapping;p.getClearColor(qm),p.toneMapping=mi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new en(new $r,new Ah({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,x=E.material;let d=!1;const v=e.background;v?v.isColor&&(x.color.copy(v),e.background=null,d=!0):(x.color.copy(qm),d=!0);for(let w=0;w<6;w++){const y=w%3;y===0?(c.up.set(0,u[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[w],s.y,s.z)):y===1?(c.up.set(0,0,u[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[w],s.z)):(c.up.set(0,u[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[w]));const T=this._cubeSize;xs(r,y*T,w>2?T:0,T,T),p.setRenderTarget(r),d&&p.render(E,c),p.render(e,c)}p.toneMapping=m,p.autoClear=f,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Xr||e.mapping===$s;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Km());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const l=s.uniforms;l.envMap.value=e;const c=this._cubeSize;xs(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,ma)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[i];l.material=a;const c=a.uniforms,u=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(u*u-h*h),f=0+u*1.25,m=p*f,{_lodMax:_}=this,E=this._sizeLods[i],x=3*E*(i>_-rr?i-_+rr:0),d=4*(this._cubeSize-E);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=_-n,xs(s,x,d,3*E,2*E),r.setRenderTarget(s),r.render(l,ma),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=_-i,xs(e,x,d,3*E,2*E),r.setRenderTarget(e),r.render(l,ma)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,l){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&dt("blur direction must be either latitudinal or longitudinal!");const h=3,p=this._lodMeshes[r];p.material=u;const f=u.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Lr-1),E=s/_,x=isFinite(s)?1+Math.floor(h*E):Lr;x>Lr&&Je(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Lr}`);const d=[];let v=0;for(let L=0;L<Lr;++L){const g=L/E,R=Math.exp(-g*g/2);d.push(R),L===0?v+=R:L<x&&(v+=2*R)}for(let L=0;L<d.length;L++)d[L]=d[L]/v;f.envMap.value=e.texture,f.samples.value=x,f.weights.value=d,f.latitudinal.value=a==="latitudinal",l&&(f.poleAxis.value=l);const{_lodMax:w}=this;f.dTheta.value=_,f.mipInt.value=w-i;const y=this._sizeLods[r],T=3*y*(r>w-rr?r-w+rr:0),C=4*(this._cubeSize-y);xs(n,T,C,3*y,2*y),c.setRenderTarget(n),c.render(p,ma)}}function DE(t){const e=[],n=[],i=[];let r=t;const s=t-rr+1+Xm.length;for(let a=0;a<s;a++){const l=Math.pow(2,r);e.push(l);let c=1/l;a>t-rr?c=Xm[a-t+rr-1]:a===0&&(c=0),n.push(c);const u=1/(l-2),h=-u,p=1+u,f=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,_=6,E=3,x=2,d=1,v=new Float32Array(E*_*m),w=new Float32Array(x*_*m),y=new Float32Array(d*_*m);for(let C=0;C<m;C++){const L=C%3*2/3-1,g=C>2?0:-1,R=[L,g,0,L+2/3,g,0,L+2/3,g+1,0,L,g,0,L+2/3,g+1,0,L,g+1,0];v.set(R,E*_*C),w.set(f,x*_*C);const A=[C,C,C,C,C,C];y.set(A,d*_*C)}const T=new ni;T.setAttribute("position",new xi(v,E)),T.setAttribute("uv",new xi(w,x)),T.setAttribute("faceIndex",new xi(y,d)),i.push(new en(T,null)),r>rr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Ym(t,e,n){const i=new gi(t,e,n);return i.texture.mapping=gc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function IE(t,e,n){return new _i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:LE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xc(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function UE(t,e,n){const i=new Float32Array(Lr),r=new re(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:Lr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xc(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Km(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Zm(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function xc(){return`

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
	`}class vv extends gi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new dv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $r(5,5,5),s=new _i({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:Li});s.uniforms.tEquirect.value=n;const a=new en(r,s),l=n.minFilter;return n.minFilter===Ur&&(n.minFilter=nn),new jw(1,10,this).update(e,a),n.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function FE(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,m=!1){return f==null?null:m?a(f):s(f)}function s(f){if(f&&f.isTexture){const m=f.mapping;if(m===Kc||m===Zc)if(e.has(f)){const _=e.get(f).texture;return l(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const E=new vv(_.height);return E.fromEquirectangularTexture(t,f),e.set(f,E),f.addEventListener("dispose",u),l(E.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const m=f.mapping,_=m===Kc||m===Zc,E=m===Xr||m===$s;if(_||E){let x=n.get(f);const d=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new $m(t)),x=_?i.fromEquirectangular(f,x):i.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,n.set(f,x),x.texture;if(x!==void 0)return x.texture;{const v=f.image;return _&&v&&v.height>0||E&&v&&c(v)?(i===null&&(i=new $m(t)),x=_?i.fromEquirectangular(f):i.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,n.set(f,x),f.addEventListener("dispose",h),x.texture):null}}}return f}function l(f,m){return m===Kc?f.mapping=Xr:m===Zc&&(f.mapping=$s),f}function c(f){let m=0;const _=6;for(let E=0;E<_;E++)f[E]!==void 0&&m++;return m===_}function u(f){const m=f.target;m.removeEventListener("dispose",u);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function h(f){const m=f.target;m.removeEventListener("dispose",h);const _=n.get(m);_!==void 0&&(n.delete(m),_.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function kE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Os("WebGLRenderer: "+i+" extension not supported."),r}}}function OE(t,e,n,i){const r={},s=new WeakMap;function a(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function l(p,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function c(p){const f=p.attributes;for(const m in f)e.update(f[m],t.ARRAY_BUFFER)}function u(p){const f=[],m=p.index,_=p.attributes.position;let E=0;if(_===void 0)return;if(m!==null){const v=m.array;E=m.version;for(let w=0,y=v.length;w<y;w+=3){const T=v[w+0],C=v[w+1],L=v[w+2];f.push(T,C,C,L,L,T)}}else{const v=_.array;E=_.version;for(let w=0,y=v.length/3-1;w<y;w+=3){const T=w+0,C=w+1,L=w+2;f.push(T,C,C,L,L,T)}}const x=new(_.count>=65535?uv:cv)(f,1);x.version=E;const d=s.get(p);d&&e.remove(d),s.set(p,x)}function h(p){const f=s.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&u(p)}else u(p);return s.get(p)}return{get:l,update:c,getWireframeAttribute:h}}function zE(t,e,n){let i;function r(p){i=p}let s,a;function l(p){s=p.type,a=p.bytesPerElement}function c(p,f){t.drawElements(i,f,s,p*a),n.update(f,i,1)}function u(p,f,m){m!==0&&(t.drawElementsInstanced(i,f,s,p*a,m),n.update(f,i,m))}function h(p,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,p,0,m);let E=0;for(let x=0;x<m;x++)E+=f[x];n.update(E,i,1)}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function BE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,l){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=l*(s/3);break;case t.LINES:n.lines+=l*(s/2);break;case t.LINE_STRIP:n.lines+=l*(s-1);break;case t.LINE_LOOP:n.lines+=l*s;break;case t.POINTS:n.points+=l*s;break;default:dt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function jE(t,e,n){const i=new WeakMap,r=new Tt;function s(a,l,c){const u=a.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=h!==void 0?h.length:0;let f=i.get(l);if(f===void 0||f.count!==p){let A=function(){g.dispose(),i.delete(l),l.removeEventListener("dispose",A)};var m=A;f!==void 0&&f.texture.dispose();const _=l.morphAttributes.position!==void 0,E=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,d=l.morphAttributes.position||[],v=l.morphAttributes.normal||[],w=l.morphAttributes.color||[];let y=0;_===!0&&(y=1),E===!0&&(y=2),x===!0&&(y=3);let T=l.attributes.position.count*y,C=1;T>e.maxTextureSize&&(C=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const L=new Float32Array(T*C*4*p),g=new av(L,T,C,p);g.type=di,g.needsUpdate=!0;const R=y*4;for(let D=0;D<p;D++){const B=d[D],W=v[D],te=w[D],H=T*C*4*D;for(let Q=0;Q<B.count;Q++){const q=Q*R;_===!0&&(r.fromBufferAttribute(B,Q),L[H+q+0]=r.x,L[H+q+1]=r.y,L[H+q+2]=r.z,L[H+q+3]=0),E===!0&&(r.fromBufferAttribute(W,Q),L[H+q+4]=r.x,L[H+q+5]=r.y,L[H+q+6]=r.z,L[H+q+7]=0),x===!0&&(r.fromBufferAttribute(te,Q),L[H+q+8]=r.x,L[H+q+9]=r.y,L[H+q+10]=r.z,L[H+q+11]=te.itemSize===4?r.w:1)}}f={count:p,texture:g,size:new ct(T,C)},i.set(l,f),l.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let x=0;x<u.length;x++)_+=u[x];const E=l.morphTargetsRelative?1:1-_;c.getUniforms().setValue(t,"morphTargetBaseInfluence",E),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function VE(t,e,n,i,r){let s=new WeakMap;function a(u){const h=r.render.frame,p=u.geometry,f=e.get(u,p);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==h&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){const m=u.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return f}function l(){s=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:l}}const HE={[Gx]:"LINEAR_TONE_MAPPING",[Wx]:"REINHARD_TONE_MAPPING",[Xx]:"CINEON_TONE_MAPPING",[qx]:"ACES_FILMIC_TONE_MAPPING",[Yx]:"AGX_TONE_MAPPING",[Kx]:"NEUTRAL_TONE_MAPPING",[$x]:"CUSTOM_TONE_MAPPING"};function GE(t,e,n,i,r,s){const a=new gi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Ys(e,n):void 0}),l=new gi(e,n,{type:ki,depthBuffer:!1,stencilBuffer:!1}),c=new ni;c.setAttribute("position",new dn([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new dn([0,2,0,0,2,0],2));const u=new Uw({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new en(c,u),p=new Ph(-1,1,1,-1,0,1);let f=null,m=null,_=!1,E,x=null,d=[],v=!1;this.setSize=function(w,y){a.setSize(w,y),l.setSize(w,y);for(let T=0;T<d.length;T++){const C=d[T];C.setSize&&C.setSize(w,y)}},this.setEffects=function(w){d=w,v=d.length>0&&d[0].isRenderPass===!0;const y=a.width,T=a.height;for(let C=0;C<d.length;C++){const L=d[C];L.setSize&&L.setSize(y,T)}},this.begin=function(w,y){if(_||w.toneMapping===mi&&d.length===0)return!1;if(x=y,y!==null){const T=y.width,C=y.height;(a.width!==T||a.height!==C)&&this.setSize(T,C)}return v===!1&&w.setRenderTarget(a),E=w.toneMapping,w.toneMapping=mi,!0},this.hasRenderPass=function(){return v},this.end=function(w,y){w.toneMapping=E,_=!0;let T=a,C=l;for(let L=0;L<d.length;L++){const g=d[L];if(g.enabled!==!1&&(g.render(w,C,T,y),g.needsSwap!==!1)){const R=T;T=C,C=R}}if(f!==w.outputColorSpace||m!==w.toneMapping){f=w.outputColorSpace,m=w.toneMapping,u.defines={},ot.getTransfer(f)===pt&&(u.defines.SRGB_TRANSFER="");const L=HE[m];L&&(u.defines[L]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,w.setRenderTarget(x),w.render(h,p),x=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),l.dispose(),c.dispose(),u.dispose()}}const _v=new un,vf=new Ys(1,1),yv=new av,Sv=new dw,wv=new dv,Qm=[],Jm=[],e0=new Float32Array(16),t0=new Float32Array(9),n0=new Float32Array(4);function ta(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Qm[r];if(s===void 0&&(s=new Float32Array(r),Qm[r]=s),e!==0){i.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=n,t[a].toArray(s,l)}return s}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function vc(t,e){let n=Jm[e];n===void 0&&(n=new Int32Array(e),Jm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function WE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function XE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Bt(n,e)}}function qE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Bt(n,e)}}function $E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Bt(n,e)}}function YE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Bt(n,e)}else{if(zt(n,i))return;n0.set(i),t.uniformMatrix2fv(this.addr,!1,n0),Bt(n,i)}}function KE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Bt(n,e)}else{if(zt(n,i))return;t0.set(i),t.uniformMatrix3fv(this.addr,!1,t0),Bt(n,i)}}function ZE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Bt(n,e)}else{if(zt(n,i))return;e0.set(i),t.uniformMatrix4fv(this.addr,!1,e0),Bt(n,i)}}function QE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function JE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Bt(n,e)}}function e2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Bt(n,e)}}function t2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Bt(n,e)}}function n2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function i2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Bt(n,e)}}function r2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Bt(n,e)}}function s2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Bt(n,e)}}function a2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(vf.compareFunction=n.isReversedDepthBuffer()?Eh:bh,s=vf):s=_v,n.setTexture2D(e||s,r)}function o2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Sv,r)}function l2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||wv,r)}function c2(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||yv,r)}function u2(t){switch(t){case 5126:return WE;case 35664:return XE;case 35665:return qE;case 35666:return $E;case 35674:return YE;case 35675:return KE;case 35676:return ZE;case 5124:case 35670:return QE;case 35667:case 35671:return JE;case 35668:case 35672:return e2;case 35669:case 35673:return t2;case 5125:return n2;case 36294:return i2;case 36295:return r2;case 36296:return s2;case 35678:case 36198:case 36298:case 36306:case 35682:return a2;case 35679:case 36299:case 36307:return o2;case 35680:case 36300:case 36308:case 36293:return l2;case 36289:case 36303:case 36311:case 36292:return c2}}function d2(t,e){t.uniform1fv(this.addr,e)}function f2(t,e){const n=ta(e,this.size,2);t.uniform2fv(this.addr,n)}function h2(t,e){const n=ta(e,this.size,3);t.uniform3fv(this.addr,n)}function p2(t,e){const n=ta(e,this.size,4);t.uniform4fv(this.addr,n)}function m2(t,e){const n=ta(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function g2(t,e){const n=ta(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function x2(t,e){const n=ta(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function v2(t,e){t.uniform1iv(this.addr,e)}function _2(t,e){t.uniform2iv(this.addr,e)}function y2(t,e){t.uniform3iv(this.addr,e)}function S2(t,e){t.uniform4iv(this.addr,e)}function w2(t,e){t.uniform1uiv(this.addr,e)}function M2(t,e){t.uniform2uiv(this.addr,e)}function b2(t,e){t.uniform3uiv(this.addr,e)}function E2(t,e){t.uniform4uiv(this.addr,e)}function T2(t,e,n){const i=this.cache,r=e.length,s=vc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=vf:a=_v;for(let l=0;l!==r;++l)n.setTexture2D(e[l]||a,s[l])}function C2(t,e,n){const i=this.cache,r=e.length,s=vc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Sv,s[a])}function A2(t,e,n){const i=this.cache,r=e.length,s=vc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||wv,s[a])}function R2(t,e,n){const i=this.cache,r=e.length,s=vc(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||yv,s[a])}function N2(t){switch(t){case 5126:return d2;case 35664:return f2;case 35665:return h2;case 35666:return p2;case 35674:return m2;case 35675:return g2;case 35676:return x2;case 5124:case 35670:return v2;case 35667:case 35671:return _2;case 35668:case 35672:return y2;case 35669:case 35673:return S2;case 5125:return w2;case 36294:return M2;case 36295:return b2;case 36296:return E2;case 35678:case 36198:case 36298:case 36306:case 35682:return T2;case 35679:case 36299:case 36307:return C2;case 35680:case 36300:case 36308:case 36293:return A2;case 36289:case 36303:case 36311:case 36292:return R2}}class L2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=u2(n.type)}}class P2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=N2(n.type)}}class D2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(e,n[l.id],i)}}}const Ru=/(\w+)(\])?(\[|\.)?/g;function i0(t,e){t.seq.push(e),t.map[e.id]=e}function I2(t,e,n){const i=t.name,r=i.length;for(Ru.lastIndex=0;;){const s=Ru.exec(i),a=Ru.lastIndex;let l=s[1];const c=s[2]==="]",u=s[3];if(c&&(l=l|0),u===void 0||u==="["&&a+2===r){i0(n,u===void 0?new L2(l,t,e):new P2(l,t,e));break}else{let p=n.map[l];p===void 0&&(p=new D2(l),i0(n,p)),n=p}}}class vl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const l=e.getActiveUniform(n,a),c=e.getUniformLocation(n,l.name);I2(l,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const l=n[s],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function r0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const U2=37297;let F2=0;function k2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const l=a+1;i.push(`${l===e?">":" "} ${l}: ${n[a]}`)}return i.join(`
`)}const s0=new et;function O2(t){ot._getMatrix(s0,ot.workingColorSpace,t);const e=`mat3( ${s0.elements.map(n=>n.toFixed(4))} )`;switch(ot.getTransfer(t)){case $l:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Je("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function a0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const l=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+k2(t.getShaderSource(e),l)}else return s}function z2(t,e){const n=O2(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const B2={[Gx]:"Linear",[Wx]:"Reinhard",[Xx]:"Cineon",[qx]:"ACESFilmic",[Yx]:"AgX",[Kx]:"Neutral",[$x]:"Custom"};function j2(t,e){const n=B2[e];return n===void 0?(Je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const el=new re;function V2(){ot.getLuminanceCoefficients(el);const t=el.x.toFixed(4),e=el.y.toFixed(4),n=el.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wa).join(`
`)}function G2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function W2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let l=1;s.type===t.FLOAT_MAT2&&(l=2),s.type===t.FLOAT_MAT3&&(l=3),s.type===t.FLOAT_MAT4&&(l=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:l}}return n}function wa(t){return t!==""}function o0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function l0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const X2=/^[ \t]*#include +<([\w\d./]+)>/gm;function _f(t){return t.replace(X2,$2)}const q2=new Map;function $2(t,e){let n=rt[e];if(n===void 0){const i=q2.get(e);if(i!==void 0)n=rt[i],Je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return _f(n)}const Y2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function c0(t){return t.replace(Y2,K2)}function K2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function u0(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const Z2={[Ia]:"SHADOWMAP_TYPE_PCF",[Sa]:"SHADOWMAP_TYPE_VSM"};function Q2(t){return Z2[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const J2={[Xr]:"ENVMAP_TYPE_CUBE",[$s]:"ENVMAP_TYPE_CUBE",[gc]:"ENVMAP_TYPE_CUBE_UV"};function eT(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":J2[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const tT={[$s]:"ENVMAP_MODE_REFRACTION"};function nT(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":tT[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const iT={[Hx]:"ENVMAP_BLENDING_MULTIPLY",[G1]:"ENVMAP_BLENDING_MIX",[W1]:"ENVMAP_BLENDING_ADD"};function rT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":iT[t.combine]||"ENVMAP_BLENDING_NONE"}function sT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function aT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,l=n.fragmentShader;const c=Q2(n),u=eT(n),h=nT(n),p=rT(n),f=sT(n),m=H2(n),_=G2(s),E=r.createProgram();let x,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(wa).join(`
`),x.length>0&&(x+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(wa).join(`
`),d.length>0&&(d+=`
`)):(x=[u0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wa).join(`
`),d=[u0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==mi?"#define TONE_MAPPING":"",n.toneMapping!==mi?rt.tonemapping_pars_fragment:"",n.toneMapping!==mi?j2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,z2("linearToOutputTexel",n.outputColorSpace),V2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(wa).join(`
`)),a=_f(a),a=o0(a,n),a=l0(a,n),l=_f(l),l=o0(l,n),l=l0(l,n),a=c0(a),l=c0(l),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,d=["#define varying in",n.glslVersion===Sm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Sm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const w=v+x+a,y=v+d+l,T=r0(r,r.VERTEX_SHADER,w),C=r0(r,r.FRAGMENT_SHADER,y);r.attachShader(E,T),r.attachShader(E,C),n.index0AttributeName!==void 0?r.bindAttribLocation(E,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function L(D){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(E)||"",W=r.getShaderInfoLog(T)||"",te=r.getShaderInfoLog(C)||"",H=B.trim(),Q=W.trim(),q=te.trim();let b=!0,M=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(b=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,E,T,C);else{const I=a0(r,T,"vertex"),k=a0(r,C,"fragment");dt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+H+`
`+I+`
`+k)}else H!==""?Je("WebGLProgram: Program Info Log:",H):(Q===""||q==="")&&(M=!1);M&&(D.diagnostics={runnable:b,programLog:H,vertexShader:{log:Q,prefix:x},fragmentShader:{log:q,prefix:d}})}r.deleteShader(T),r.deleteShader(C),g=new vl(r,E),R=W2(r,E)}let g;this.getUniforms=function(){return g===void 0&&L(this),g};let R;this.getAttributes=function(){return R===void 0&&L(this),R};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(E,U2)),A},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=F2++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=T,this.fragmentShader=C,this}let oT=0;class lT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new cT(e),n.set(e,i)),i}}class cT{constructor(e){this.id=oT++,this.code=e,this.usedTimes=0}}function uT(t){return t===qr||t===Wl||t===Xl}function dT(t,e,n,i,r,s){const a=new ov,l=new lT,c=new Set,u=[],h=new Map,p=i.logarithmicDepthBuffer;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(g){return c.add(g),g===0?"uv":`uv${g}`}function E(g,R,A,D,B,W){const te=D.fog,H=B.geometry,Q=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?D.environment:null,q=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,b=e.get(g.envMap||Q,q),M=b&&b.mapping===gc?b.image.height:null,I=m[g.type];g.precision!==null&&(f=i.getMaxPrecision(g.precision),f!==g.precision&&Je("WebGLProgram.getParameters:",g.precision,"not supported, using",f,"instead."));const k=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,F=k!==void 0?k.length:0;let he=0;H.morphAttributes.position!==void 0&&(he=1),H.morphAttributes.normal!==void 0&&(he=2),H.morphAttributes.color!==void 0&&(he=3);let pe,oe,j,ie;if(I){const Z=li[I];pe=Z.vertexShader,oe=Z.fragmentShader}else{pe=g.vertexShader,oe=g.fragmentShader;const Z=l.getVertexShaderStage(g),ye=l.getFragmentShaderStage(g);l.update(g,Z,ye),j=Z.id,ie=ye.id}const de=t.getRenderTarget(),Ne=t.state.buffers.depth.getReversed(),Ee=B.isInstancedMesh===!0,X=B.isBatchedMesh===!0,we=!!g.map,Se=!!g.matcap,Te=!!b,Ce=!!g.aoMap,De=!!g.lightMap,ze=!!g.bumpMap&&g.wireframe===!1,Ie=!!g.normalMap,Ue=!!g.displacementMap,Ke=!!g.emissiveMap,Xe=!!g.metalnessMap,Qe=!!g.roughnessMap,V=g.anisotropy>0,qe=g.clearcoat>0,Ze=g.dispersion>0,U=g.iridescence>0,S=g.sheen>0,G=g.transmission>0,J=V&&!!g.anisotropyMap,ue=qe&&!!g.clearcoatMap,Me=qe&&!!g.clearcoatNormalMap,Pe=qe&&!!g.clearcoatRoughnessMap,fe=U&&!!g.iridescenceMap,me=U&&!!g.iridescenceThicknessMap,z=S&&!!g.sheenColorMap,ee=S&&!!g.sheenRoughnessMap,ge=!!g.specularMap,_e=!!g.specularColorMap,be=!!g.specularIntensityMap,Ae=G&&!!g.transmissionMap,Ge=G&&!!g.thicknessMap,O=!!g.gradientMap,ve=!!g.alphaMap,$=g.alphaTest>0,le=!!g.alphaHash,xe=!!g.extensions;let P=mi;g.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(P=t.toneMapping);const ne={shaderID:I,shaderType:g.type,shaderName:g.name,vertexShader:pe,fragmentShader:oe,defines:g.defines,customVertexShaderID:j,customFragmentShaderID:ie,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:f,batching:X,batchingColor:X&&B._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&B.instanceColor!==null,instancingMorph:Ee&&B.morphTexture!==null,outputColorSpace:de===null?t.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:we,matcap:Se,envMap:Te,envMapMode:Te&&b.mapping,envMapCubeUVHeight:M,aoMap:Ce,lightMap:De,bumpMap:ze,normalMap:Ie,displacementMap:Ue,emissiveMap:Ke,normalMapObjectSpace:Ie&&g.normalMapType===$1,normalMapTangentSpace:Ie&&g.normalMapType===gf,packedNormalMap:Ie&&g.normalMapType===gf&&uT(g.normalMap.format),metalnessMap:Xe,roughnessMap:Qe,anisotropy:V,anisotropyMap:J,clearcoat:qe,clearcoatMap:ue,clearcoatNormalMap:Me,clearcoatRoughnessMap:Pe,dispersion:Ze,iridescence:U,iridescenceMap:fe,iridescenceThicknessMap:me,sheen:S,sheenColorMap:z,sheenRoughnessMap:ee,specularMap:ge,specularColorMap:_e,specularIntensityMap:be,transmission:G,transmissionMap:Ae,thicknessMap:Ge,gradientMap:O,opaque:g.transparent===!1&&g.blending===ks&&g.alphaToCoverage===!1,alphaMap:ve,alphaTest:$,alphaHash:le,combine:g.combine,mapUv:we&&_(g.map.channel),aoMapUv:Ce&&_(g.aoMap.channel),lightMapUv:De&&_(g.lightMap.channel),bumpMapUv:ze&&_(g.bumpMap.channel),normalMapUv:Ie&&_(g.normalMap.channel),displacementMapUv:Ue&&_(g.displacementMap.channel),emissiveMapUv:Ke&&_(g.emissiveMap.channel),metalnessMapUv:Xe&&_(g.metalnessMap.channel),roughnessMapUv:Qe&&_(g.roughnessMap.channel),anisotropyMapUv:J&&_(g.anisotropyMap.channel),clearcoatMapUv:ue&&_(g.clearcoatMap.channel),clearcoatNormalMapUv:Me&&_(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&_(g.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&_(g.iridescenceMap.channel),iridescenceThicknessMapUv:me&&_(g.iridescenceThicknessMap.channel),sheenColorMapUv:z&&_(g.sheenColorMap.channel),sheenRoughnessMapUv:ee&&_(g.sheenRoughnessMap.channel),specularMapUv:ge&&_(g.specularMap.channel),specularColorMapUv:_e&&_(g.specularColorMap.channel),specularIntensityMapUv:be&&_(g.specularIntensityMap.channel),transmissionMapUv:Ae&&_(g.transmissionMap.channel),thicknessMapUv:Ge&&_(g.thicknessMap.channel),alphaMapUv:ve&&_(g.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ie||V),vertexNormals:!!H.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!H.attributes.uv&&(we||ve),fog:!!te,useFog:g.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||H.attributes.normal===void 0&&Ie===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Ne,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:he,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:g.dithering,shadowMapEnabled:t.shadowMap.enabled&&A.length>0,shadowMapType:t.shadowMap.type,toneMapping:P,decodeVideoTexture:we&&g.map.isVideoTexture===!0&&ot.getTransfer(g.map.colorSpace)===pt,decodeVideoTextureEmissive:Ke&&g.emissiveMap.isVideoTexture===!0&&ot.getTransfer(g.emissiveMap.colorSpace)===pt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===ui,flipSided:g.side===Sn,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:xe&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&g.extensions.multiDraw===!0||X)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ne.vertexUv1s=c.has(1),ne.vertexUv2s=c.has(2),ne.vertexUv3s=c.has(3),c.clear(),ne}function x(g){const R=[];if(g.shaderID?R.push(g.shaderID):(R.push(g.customVertexShaderID),R.push(g.customFragmentShaderID)),g.defines!==void 0)for(const A in g.defines)R.push(A),R.push(g.defines[A]);return g.isRawShaderMaterial===!1&&(d(R,g),v(R,g),R.push(t.outputColorSpace)),R.push(g.customProgramCacheKey),R.join()}function d(g,R){g.push(R.precision),g.push(R.outputColorSpace),g.push(R.envMapMode),g.push(R.envMapCubeUVHeight),g.push(R.mapUv),g.push(R.alphaMapUv),g.push(R.lightMapUv),g.push(R.aoMapUv),g.push(R.bumpMapUv),g.push(R.normalMapUv),g.push(R.displacementMapUv),g.push(R.emissiveMapUv),g.push(R.metalnessMapUv),g.push(R.roughnessMapUv),g.push(R.anisotropyMapUv),g.push(R.clearcoatMapUv),g.push(R.clearcoatNormalMapUv),g.push(R.clearcoatRoughnessMapUv),g.push(R.iridescenceMapUv),g.push(R.iridescenceThicknessMapUv),g.push(R.sheenColorMapUv),g.push(R.sheenRoughnessMapUv),g.push(R.specularMapUv),g.push(R.specularColorMapUv),g.push(R.specularIntensityMapUv),g.push(R.transmissionMapUv),g.push(R.thicknessMapUv),g.push(R.combine),g.push(R.fogExp2),g.push(R.sizeAttenuation),g.push(R.morphTargetsCount),g.push(R.morphAttributeCount),g.push(R.numDirLights),g.push(R.numPointLights),g.push(R.numSpotLights),g.push(R.numSpotLightMaps),g.push(R.numHemiLights),g.push(R.numRectAreaLights),g.push(R.numDirLightShadows),g.push(R.numPointLightShadows),g.push(R.numSpotLightShadows),g.push(R.numSpotLightShadowsWithMaps),g.push(R.numLightProbes),g.push(R.shadowMapType),g.push(R.toneMapping),g.push(R.numClippingPlanes),g.push(R.numClipIntersection),g.push(R.depthPacking)}function v(g,R){a.disableAll(),R.instancing&&a.enable(0),R.instancingColor&&a.enable(1),R.instancingMorph&&a.enable(2),R.matcap&&a.enable(3),R.envMap&&a.enable(4),R.normalMapObjectSpace&&a.enable(5),R.normalMapTangentSpace&&a.enable(6),R.clearcoat&&a.enable(7),R.iridescence&&a.enable(8),R.alphaTest&&a.enable(9),R.vertexColors&&a.enable(10),R.vertexAlphas&&a.enable(11),R.vertexUv1s&&a.enable(12),R.vertexUv2s&&a.enable(13),R.vertexUv3s&&a.enable(14),R.vertexTangents&&a.enable(15),R.anisotropy&&a.enable(16),R.alphaHash&&a.enable(17),R.batching&&a.enable(18),R.dispersion&&a.enable(19),R.batchingColor&&a.enable(20),R.gradientMap&&a.enable(21),R.packedNormalMap&&a.enable(22),R.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.reversedDepthBuffer&&a.enable(4),R.skinning&&a.enable(5),R.morphTargets&&a.enable(6),R.morphNormals&&a.enable(7),R.morphColors&&a.enable(8),R.premultipliedAlpha&&a.enable(9),R.shadowMapEnabled&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.decodeVideoTextureEmissive&&a.enable(20),R.alphaToCoverage&&a.enable(21),R.numLightProbeGrids>0&&a.enable(22),R.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function w(g){const R=m[g.type];let A;if(R){const D=li[R];A=Pw.clone(D.uniforms)}else A=g.uniforms;return A}function y(g,R){let A=h.get(R);return A!==void 0?++A.usedTimes:(A=new aT(t,R,g,r),u.push(A),h.set(R,A)),A}function T(g){if(--g.usedTimes===0){const R=u.indexOf(g);u[R]=u[u.length-1],u.pop(),h.delete(g.cacheKey),g.destroy()}}function C(g){l.remove(g)}function L(){l.dispose()}return{getParameters:E,getProgramCacheKey:x,getUniforms:w,acquireProgram:y,releaseProgram:T,releaseShaderCache:C,programs:u,dispose:L}}function fT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let l=t.get(a);return l===void 0&&(l={},t.set(a,l)),l}function i(a){t.delete(a)}function r(a,l,c){t.get(a)[l]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function hT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function d0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function f0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function l(f,m,_,E,x,d){let v=t[e];return v===void 0?(v={id:f.id,object:f,geometry:m,material:_,materialVariant:a(f),groupOrder:E,renderOrder:f.renderOrder,z:x,group:d},t[e]=v):(v.id=f.id,v.object=f,v.geometry=m,v.material=_,v.materialVariant=a(f),v.groupOrder=E,v.renderOrder=f.renderOrder,v.z=x,v.group=d),e++,v}function c(f,m,_,E,x,d){const v=l(f,m,_,E,x,d);_.transmission>0?i.push(v):_.transparent===!0?r.push(v):n.push(v)}function u(f,m,_,E,x,d){const v=l(f,m,_,E,x,d);_.transmission>0?i.unshift(v):_.transparent===!0?r.unshift(v):n.unshift(v)}function h(f,m,_){n.length>1&&n.sort(f||hT),i.length>1&&i.sort(m||d0),r.length>1&&r.sort(m||d0),_&&(n.reverse(),i.reverse(),r.reverse())}function p(){for(let f=e,m=t.length;f<m;f++){const _=t[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:u,finish:p,sort:h}}function pT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new f0,t.set(i,[a])):r>=s.length?(a=new f0,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function mT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new re,color:new ft};break;case"SpotLight":n={position:new re,direction:new re,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new re,color:new ft,distance:0,decay:0};break;case"HemisphereLight":n={direction:new re,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":n={color:new ft,position:new re,halfWidth:new re,halfHeight:new re};break}return t[e.id]=n,n}}}function gT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let xT=0;function vT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function _T(t){const e=new mT,n=gT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new re);const r=new re,s=new Lt,a=new Lt;function l(u){let h=0,p=0,f=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let m=0,_=0,E=0,x=0,d=0,v=0,w=0,y=0,T=0,C=0,L=0;u.sort(vT);for(let R=0,A=u.length;R<A;R++){const D=u[R],B=D.color,W=D.intensity,te=D.distance;let H=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===qr?H=D.shadow.map.texture:H=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=B.r*W,p+=B.g*W,f+=B.b*W;else if(D.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(D.sh.coefficients[Q],W);L++}else if(D.isDirectionalLight){const Q=e.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const q=D.shadow,b=n.get(D);b.shadowIntensity=q.intensity,b.shadowBias=q.bias,b.shadowNormalBias=q.normalBias,b.shadowRadius=q.radius,b.shadowMapSize=q.mapSize,i.directionalShadow[m]=b,i.directionalShadowMap[m]=H,i.directionalShadowMatrix[m]=D.shadow.matrix,v++}i.directional[m]=Q,m++}else if(D.isSpotLight){const Q=e.get(D);Q.position.setFromMatrixPosition(D.matrixWorld),Q.color.copy(B).multiplyScalar(W),Q.distance=te,Q.coneCos=Math.cos(D.angle),Q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Q.decay=D.decay,i.spot[E]=Q;const q=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,q.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[E]=q.matrix,D.castShadow){const b=n.get(D);b.shadowIntensity=q.intensity,b.shadowBias=q.bias,b.shadowNormalBias=q.normalBias,b.shadowRadius=q.radius,b.shadowMapSize=q.mapSize,i.spotShadow[E]=b,i.spotShadowMap[E]=H,y++}E++}else if(D.isRectAreaLight){const Q=e.get(D);Q.color.copy(B).multiplyScalar(W),Q.halfWidth.set(D.width*.5,0,0),Q.halfHeight.set(0,D.height*.5,0),i.rectArea[x]=Q,x++}else if(D.isPointLight){const Q=e.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),Q.distance=D.distance,Q.decay=D.decay,D.castShadow){const q=D.shadow,b=n.get(D);b.shadowIntensity=q.intensity,b.shadowBias=q.bias,b.shadowNormalBias=q.normalBias,b.shadowRadius=q.radius,b.shadowMapSize=q.mapSize,b.shadowCameraNear=q.camera.near,b.shadowCameraFar=q.camera.far,i.pointShadow[_]=b,i.pointShadowMap[_]=H,i.pointShadowMatrix[_]=D.shadow.matrix,w++}i.point[_]=Q,_++}else if(D.isHemisphereLight){const Q=e.get(D);Q.skyColor.copy(D.color).multiplyScalar(W),Q.groundColor.copy(D.groundColor).multiplyScalar(W),i.hemi[d]=Q,d++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Fe.LTC_FLOAT_1,i.rectAreaLTC2=Fe.LTC_FLOAT_2):(i.rectAreaLTC1=Fe.LTC_HALF_1,i.rectAreaLTC2=Fe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=f;const g=i.hash;(g.directionalLength!==m||g.pointLength!==_||g.spotLength!==E||g.rectAreaLength!==x||g.hemiLength!==d||g.numDirectionalShadows!==v||g.numPointShadows!==w||g.numSpotShadows!==y||g.numSpotMaps!==T||g.numLightProbes!==L)&&(i.directional.length=m,i.spot.length=E,i.rectArea.length=x,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=y+T-C,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=L,g.directionalLength=m,g.pointLength=_,g.spotLength=E,g.rectAreaLength=x,g.hemiLength=d,g.numDirectionalShadows=v,g.numPointShadows=w,g.numSpotShadows=y,g.numSpotMaps=T,g.numLightProbes=L,i.version=xT++)}function c(u,h){let p=0,f=0,m=0,_=0,E=0;const x=h.matrixWorldInverse;for(let d=0,v=u.length;d<v;d++){const w=u[d];if(w.isDirectionalLight){const y=i.directional[p];y.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(x),p++}else if(w.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(x),y.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(x),m++}else if(w.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(x),a.identity(),s.copy(w.matrixWorld),s.premultiply(x),a.extractRotation(s),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(w.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(x),f++}else if(w.isHemisphereLight){const y=i.hemi[E];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(x),E++}}}return{setup:l,setupView:c,state:i}}function h0(t){const e=new _T(t),n=[],i=[],r=[];function s(f){p.camera=f,n.length=0,i.length=0,r.length=0}function a(f){n.push(f)}function l(f){i.push(f)}function c(f){r.push(f)}function u(){e.setup(n)}function h(f){e.setupView(n,f)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:u,setupLightsView:h,pushLight:a,pushShadow:l,pushLightProbeGrid:c}}function yT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let l;return a===void 0?(l=new h0(t),e.set(r,[l])):s>=a.length?(l=new h0(t),a.push(l)):l=a[s],l}function i(){e=new WeakMap}return{get:n,dispose:i}}const ST=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wT=`uniform sampler2D shadow_pass;
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
}`,MT=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],bT=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],p0=new Lt,ga=new re,Nu=new re;function ET(t,e,n){let i=new Rh;const r=new ct,s=new ct,a=new Tt,l=new Fw,c=new kw,u={},h=n.maxTextureSize,p={[gr]:Sn,[Sn]:gr,[ui]:ui},f=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:ST,fragmentShader:wT}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new ni;_.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new en(_,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ia;let d=this.type;this.render=function(C,L,g){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||C.length===0)return;this.type===E1&&(Je("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ia);const R=t.getRenderTarget(),A=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),B=t.state;B.setBlending(Li),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const W=d!==this.type;W&&L.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(H=>H.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,H=C.length;te<H;te++){const Q=C[te],q=Q.shadow;if(q===void 0){Je("WebGLShadowMap:",Q,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const b=q.getFrameExtents();r.multiply(b),s.copy(q.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/b.x),r.x=s.x*b.x,q.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/b.y),r.y=s.y*b.y,q.mapSize.y=s.y));const M=t.state.buffers.depth.getReversed();if(q.camera._reversedDepth=M,q.map===null||W===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Sa){if(Q.isPointLight){Je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new gi(r.x,r.y,{format:qr,type:ki,minFilter:nn,magFilter:nn,generateMipmaps:!1}),q.map.texture.name=Q.name+".shadowMap",q.map.depthTexture=new Ys(r.x,r.y,di),q.map.depthTexture.name=Q.name+".shadowMapDepth",q.map.depthTexture.format=Oi,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Xt,q.map.depthTexture.magFilter=Xt}else Q.isPointLight?(q.map=new vv(r.x),q.map.depthTexture=new Nw(r.x,vi)):(q.map=new gi(r.x,r.y),q.map.depthTexture=new Ys(r.x,r.y,vi)),q.map.depthTexture.name=Q.name+".shadowMap",q.map.depthTexture.format=Oi,this.type===Ia?(q.map.depthTexture.compareFunction=M?Eh:bh,q.map.depthTexture.minFilter=nn,q.map.depthTexture.magFilter=nn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Xt,q.map.depthTexture.magFilter=Xt);q.camera.updateProjectionMatrix()}const I=q.map.isWebGLCubeRenderTarget?6:1;for(let k=0;k<I;k++){if(q.map.isWebGLCubeRenderTarget)t.setRenderTarget(q.map,k),t.clear();else{k===0&&(t.setRenderTarget(q.map),t.clear());const F=q.getViewport(k);a.set(s.x*F.x,s.y*F.y,s.x*F.z,s.y*F.w),B.viewport(a)}if(Q.isPointLight){const F=q.camera,he=q.matrix,pe=Q.distance||F.far;pe!==F.far&&(F.far=pe,F.updateProjectionMatrix()),ga.setFromMatrixPosition(Q.matrixWorld),F.position.copy(ga),Nu.copy(F.position),Nu.add(MT[k]),F.up.copy(bT[k]),F.lookAt(Nu),F.updateMatrixWorld(),he.makeTranslation(-ga.x,-ga.y,-ga.z),p0.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q._frustum.setFromProjectionMatrix(p0,F.coordinateSystem,F.reversedDepth)}else q.updateMatrices(Q);i=q.getFrustum(),y(L,g,q.camera,Q,this.type)}q.isPointLightShadow!==!0&&this.type===Sa&&v(q,g),q.needsUpdate=!1}d=this.type,x.needsUpdate=!1,t.setRenderTarget(R,A,D)};function v(C,L){const g=e.update(E);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new gi(r.x,r.y,{format:qr,type:ki})),f.uniforms.shadow_pass.value=C.map.depthTexture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(L,null,g,f,E,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(L,null,g,m,E,null)}function w(C,L,g,R){let A=null;const D=g.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)A=D;else if(A=g.isPointLight===!0?c:l,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const B=A.uuid,W=L.uuid;let te=u[B];te===void 0&&(te={},u[B]=te);let H=te[W];H===void 0&&(H=A.clone(),te[W]=H,L.addEventListener("dispose",T)),A=H}if(A.visible=L.visible,A.wireframe=L.wireframe,R===Sa?A.side=L.shadowSide!==null?L.shadowSide:L.side:A.side=L.shadowSide!==null?L.shadowSide:p[L.side],A.alphaMap=L.alphaMap,A.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,A.map=L.map,A.clipShadows=L.clipShadows,A.clippingPlanes=L.clippingPlanes,A.clipIntersection=L.clipIntersection,A.displacementMap=L.displacementMap,A.displacementScale=L.displacementScale,A.displacementBias=L.displacementBias,A.wireframeLinewidth=L.wireframeLinewidth,A.linewidth=L.linewidth,g.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const B=t.properties.get(A);B.light=g}return A}function y(C,L,g,R,A){if(C.visible===!1)return;if(C.layers.test(L.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&A===Sa)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,C.matrixWorld);const W=e.update(C),te=C.material;if(Array.isArray(te)){const H=W.groups;for(let Q=0,q=H.length;Q<q;Q++){const b=H[Q],M=te[b.materialIndex];if(M&&M.visible){const I=w(C,M,R,A);C.onBeforeShadow(t,C,L,g,W,I,b),t.renderBufferDirect(g,null,W,I,C,b),C.onAfterShadow(t,C,L,g,W,I,b)}}}else if(te.visible){const H=w(C,te,R,A);C.onBeforeShadow(t,C,L,g,W,H,null),t.renderBufferDirect(g,null,W,H,C,null),C.onAfterShadow(t,C,L,g,W,H,null)}}const B=C.children;for(let W=0,te=B.length;W<te;W++)y(B[W],L,g,R,A)}function T(C){C.target.removeEventListener("dispose",T);for(const g in u){const R=u[g],A=C.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}function TT(t,e){function n(){let O=!1;const ve=new Tt;let $=null;const le=new Tt(0,0,0,0);return{setMask:function(xe){$!==xe&&!O&&(t.colorMask(xe,xe,xe,xe),$=xe)},setLocked:function(xe){O=xe},setClear:function(xe,P,ne,Z,ye){ye===!0&&(xe*=Z,P*=Z,ne*=Z),ve.set(xe,P,ne,Z),le.equals(ve)===!1&&(t.clearColor(xe,P,ne,Z),le.copy(ve))},reset:function(){O=!1,$=null,le.set(-1,0,0,0)}}}function i(){let O=!1,ve=!1,$=null,le=null,xe=null;return{setReversed:function(P){if(ve!==P){const ne=e.get("EXT_clip_control");P?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT),ve=P;const Z=xe;xe=null,this.setClear(Z)}},getReversed:function(){return ve},setTest:function(P){P?de(t.DEPTH_TEST):Ne(t.DEPTH_TEST)},setMask:function(P){$!==P&&!O&&(t.depthMask(P),$=P)},setFunc:function(P){if(ve&&(P=rw[P]),le!==P){switch(P){case Nd:t.depthFunc(t.NEVER);break;case Ld:t.depthFunc(t.ALWAYS);break;case Pd:t.depthFunc(t.LESS);break;case qs:t.depthFunc(t.LEQUAL);break;case Dd:t.depthFunc(t.EQUAL);break;case Id:t.depthFunc(t.GEQUAL);break;case Ud:t.depthFunc(t.GREATER);break;case Fd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}le=P}},setLocked:function(P){O=P},setClear:function(P){xe!==P&&(xe=P,ve&&(P=1-P),t.clearDepth(P))},reset:function(){O=!1,$=null,le=null,xe=null,ve=!1}}}function r(){let O=!1,ve=null,$=null,le=null,xe=null,P=null,ne=null,Z=null,ye=null;return{setTest:function(Le){O||(Le?de(t.STENCIL_TEST):Ne(t.STENCIL_TEST))},setMask:function(Le){ve!==Le&&!O&&(t.stencilMask(Le),ve=Le)},setFunc:function(Le,Be,tt){($!==Le||le!==Be||xe!==tt)&&(t.stencilFunc(Le,Be,tt),$=Le,le=Be,xe=tt)},setOp:function(Le,Be,tt){(P!==Le||ne!==Be||Z!==tt)&&(t.stencilOp(Le,Be,tt),P=Le,ne=Be,Z=tt)},setLocked:function(Le){O=Le},setClear:function(Le){ye!==Le&&(t.clearStencil(Le),ye=Le)},reset:function(){O=!1,ve=null,$=null,le=null,xe=null,P=null,ne=null,Z=null,ye=null}}}const s=new n,a=new i,l=new r,c=new WeakMap,u=new WeakMap;let h={},p={},f={},m=new WeakMap,_=[],E=null,x=!1,d=null,v=null,w=null,y=null,T=null,C=null,L=null,g=new ft(0,0,0),R=0,A=!1,D=null,B=null,W=null,te=null,H=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,b=0;const M=t.getParameter(t.VERSION);M.indexOf("WebGL")!==-1?(b=parseFloat(/^WebGL (\d)/.exec(M)[1]),q=b>=1):M.indexOf("OpenGL ES")!==-1&&(b=parseFloat(/^OpenGL ES (\d)/.exec(M)[1]),q=b>=2);let I=null,k={};const F=t.getParameter(t.SCISSOR_BOX),he=t.getParameter(t.VIEWPORT),pe=new Tt().fromArray(F),oe=new Tt().fromArray(he);function j(O,ve,$,le){const xe=new Uint8Array(4),P=t.createTexture();t.bindTexture(O,P),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ne=0;ne<$;ne++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(ve,0,t.RGBA,1,1,le,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(ve+ne,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return P}const ie={};ie[t.TEXTURE_2D]=j(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=j(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=j(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=j(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),de(t.DEPTH_TEST),a.setFunc(qs),ze(!1),Ie(mm),de(t.CULL_FACE),Ce(Li);function de(O){h[O]!==!0&&(t.enable(O),h[O]=!0)}function Ne(O){h[O]!==!1&&(t.disable(O),h[O]=!1)}function Ee(O,ve){return f[O]!==ve?(t.bindFramebuffer(O,ve),f[O]=ve,O===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ve),O===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ve),!0):!1}function X(O,ve){let $=_,le=!1;if(O){$=m.get(ve),$===void 0&&($=[],m.set(ve,$));const xe=O.textures;if($.length!==xe.length||$[0]!==t.COLOR_ATTACHMENT0){for(let P=0,ne=xe.length;P<ne;P++)$[P]=t.COLOR_ATTACHMENT0+P;$.length=xe.length,le=!0}}else $[0]!==t.BACK&&($[0]=t.BACK,le=!0);le&&t.drawBuffers($)}function we(O){return E!==O?(t.useProgram(O),E=O,!0):!1}const Se={[Nr]:t.FUNC_ADD,[C1]:t.FUNC_SUBTRACT,[A1]:t.FUNC_REVERSE_SUBTRACT};Se[R1]=t.MIN,Se[N1]=t.MAX;const Te={[L1]:t.ZERO,[P1]:t.ONE,[D1]:t.SRC_COLOR,[Ad]:t.SRC_ALPHA,[z1]:t.SRC_ALPHA_SATURATE,[k1]:t.DST_COLOR,[U1]:t.DST_ALPHA,[I1]:t.ONE_MINUS_SRC_COLOR,[Rd]:t.ONE_MINUS_SRC_ALPHA,[O1]:t.ONE_MINUS_DST_COLOR,[F1]:t.ONE_MINUS_DST_ALPHA,[B1]:t.CONSTANT_COLOR,[j1]:t.ONE_MINUS_CONSTANT_COLOR,[V1]:t.CONSTANT_ALPHA,[H1]:t.ONE_MINUS_CONSTANT_ALPHA};function Ce(O,ve,$,le,xe,P,ne,Z,ye,Le){if(O===Li){x===!0&&(Ne(t.BLEND),x=!1);return}if(x===!1&&(de(t.BLEND),x=!0),O!==T1){if(O!==d||Le!==A){if((v!==Nr||T!==Nr)&&(t.blendEquation(t.FUNC_ADD),v=Nr,T=Nr),Le)switch(O){case ks:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gm:t.blendFunc(t.ONE,t.ONE);break;case xm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vm:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:dt("WebGLState: Invalid blending: ",O);break}else switch(O){case ks:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case gm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case xm:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vm:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",O);break}w=null,y=null,C=null,L=null,g.set(0,0,0),R=0,d=O,A=Le}return}xe=xe||ve,P=P||$,ne=ne||le,(ve!==v||xe!==T)&&(t.blendEquationSeparate(Se[ve],Se[xe]),v=ve,T=xe),($!==w||le!==y||P!==C||ne!==L)&&(t.blendFuncSeparate(Te[$],Te[le],Te[P],Te[ne]),w=$,y=le,C=P,L=ne),(Z.equals(g)===!1||ye!==R)&&(t.blendColor(Z.r,Z.g,Z.b,ye),g.copy(Z),R=ye),d=O,A=!1}function De(O,ve){O.side===ui?Ne(t.CULL_FACE):de(t.CULL_FACE);let $=O.side===Sn;ve&&($=!$),ze($),O.blending===ks&&O.transparent===!1?Ce(Li):Ce(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const le=O.stencilWrite;l.setTest(le),le&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ke(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):Ne(t.SAMPLE_ALPHA_TO_COVERAGE)}function ze(O){D!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),D=O)}function Ie(O){O!==M1?(de(t.CULL_FACE),O!==B&&(O===mm?t.cullFace(t.BACK):O===b1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ne(t.CULL_FACE),B=O}function Ue(O){O!==W&&(q&&t.lineWidth(O),W=O)}function Ke(O,ve,$){O?(de(t.POLYGON_OFFSET_FILL),(te!==ve||H!==$)&&(te=ve,H=$,a.getReversed()&&(ve=-ve),t.polygonOffset(ve,$))):Ne(t.POLYGON_OFFSET_FILL)}function Xe(O){O?de(t.SCISSOR_TEST):Ne(t.SCISSOR_TEST)}function Qe(O){O===void 0&&(O=t.TEXTURE0+Q-1),I!==O&&(t.activeTexture(O),I=O)}function V(O,ve,$){$===void 0&&(I===null?$=t.TEXTURE0+Q-1:$=I);let le=k[$];le===void 0&&(le={type:void 0,texture:void 0},k[$]=le),(le.type!==O||le.texture!==ve)&&(I!==$&&(t.activeTexture($),I=$),t.bindTexture(O,ve||ie[O]),le.type=O,le.texture=ve)}function qe(){const O=k[I];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Ze(){try{t.compressedTexImage2D(...arguments)}catch(O){dt("WebGLState:",O)}}function U(){try{t.compressedTexImage3D(...arguments)}catch(O){dt("WebGLState:",O)}}function S(){try{t.texSubImage2D(...arguments)}catch(O){dt("WebGLState:",O)}}function G(){try{t.texSubImage3D(...arguments)}catch(O){dt("WebGLState:",O)}}function J(){try{t.compressedTexSubImage2D(...arguments)}catch(O){dt("WebGLState:",O)}}function ue(){try{t.compressedTexSubImage3D(...arguments)}catch(O){dt("WebGLState:",O)}}function Me(){try{t.texStorage2D(...arguments)}catch(O){dt("WebGLState:",O)}}function Pe(){try{t.texStorage3D(...arguments)}catch(O){dt("WebGLState:",O)}}function fe(){try{t.texImage2D(...arguments)}catch(O){dt("WebGLState:",O)}}function me(){try{t.texImage3D(...arguments)}catch(O){dt("WebGLState:",O)}}function z(O){return p[O]!==void 0?p[O]:t.getParameter(O)}function ee(O,ve){p[O]!==ve&&(t.pixelStorei(O,ve),p[O]=ve)}function ge(O){pe.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),pe.copy(O))}function _e(O){oe.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),oe.copy(O))}function be(O,ve){let $=u.get(ve);$===void 0&&($=new WeakMap,u.set(ve,$));let le=$.get(O);le===void 0&&(le=t.getUniformBlockIndex(ve,O.name),$.set(O,le))}function Ae(O,ve){const le=u.get(ve).get(O);c.get(ve)!==le&&(t.uniformBlockBinding(ve,le,O.__bindingPointIndex),c.set(ve,le))}function Ge(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},p={},I=null,k={},f={},m=new WeakMap,_=[],E=null,x=!1,d=null,v=null,w=null,y=null,T=null,C=null,L=null,g=new ft(0,0,0),R=0,A=!1,D=null,B=null,W=null,te=null,H=null,pe.set(0,0,t.canvas.width,t.canvas.height),oe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:de,disable:Ne,bindFramebuffer:Ee,drawBuffers:X,useProgram:we,setBlending:Ce,setMaterial:De,setFlipSided:ze,setCullFace:Ie,setLineWidth:Ue,setPolygonOffset:Ke,setScissorTest:Xe,activeTexture:Qe,bindTexture:V,unbindTexture:qe,compressedTexImage2D:Ze,compressedTexImage3D:U,texImage2D:fe,texImage3D:me,pixelStorei:ee,getParameter:z,updateUBOMapping:be,uniformBlockBinding:Ae,texStorage2D:Me,texStorage3D:Pe,texSubImage2D:S,texSubImage3D:G,compressedTexSubImage2D:J,compressedTexSubImage3D:ue,scissor:ge,viewport:_e,reset:Ge}}function CT(t,e,n,i,r,s,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ct,h=new WeakMap,p=new Set;let f;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(U,S){return _?new OffscreenCanvas(U,S):Yl("canvas")}function x(U,S,G){let J=1;const ue=Ze(U);if((ue.width>G||ue.height>G)&&(J=G/Math.max(ue.width,ue.height)),J<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Me=Math.floor(J*ue.width),Pe=Math.floor(J*ue.height);f===void 0&&(f=E(Me,Pe));const fe=S?E(Me,Pe):f;return fe.width=Me,fe.height=Pe,fe.getContext("2d").drawImage(U,0,0,Me,Pe),Je("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+Me+"x"+Pe+")."),fe}else return"data"in U&&Je("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),U;return U}function d(U){return U.generateMipmaps}function v(U){t.generateMipmap(U)}function w(U){return U.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?t.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(U,S,G,J,ue,Me=!1){if(U!==null){if(t[U]!==void 0)return t[U];Je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Pe;J&&(Pe=e.get("EXT_texture_norm16"),Pe||Je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=S;if(S===t.RED&&(G===t.FLOAT&&(fe=t.R32F),G===t.HALF_FLOAT&&(fe=t.R16F),G===t.UNSIGNED_BYTE&&(fe=t.R8),G===t.UNSIGNED_SHORT&&Pe&&(fe=Pe.R16_EXT),G===t.SHORT&&Pe&&(fe=Pe.R16_SNORM_EXT)),S===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(fe=t.R8UI),G===t.UNSIGNED_SHORT&&(fe=t.R16UI),G===t.UNSIGNED_INT&&(fe=t.R32UI),G===t.BYTE&&(fe=t.R8I),G===t.SHORT&&(fe=t.R16I),G===t.INT&&(fe=t.R32I)),S===t.RG&&(G===t.FLOAT&&(fe=t.RG32F),G===t.HALF_FLOAT&&(fe=t.RG16F),G===t.UNSIGNED_BYTE&&(fe=t.RG8),G===t.UNSIGNED_SHORT&&Pe&&(fe=Pe.RG16_EXT),G===t.SHORT&&Pe&&(fe=Pe.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(fe=t.RG8UI),G===t.UNSIGNED_SHORT&&(fe=t.RG16UI),G===t.UNSIGNED_INT&&(fe=t.RG32UI),G===t.BYTE&&(fe=t.RG8I),G===t.SHORT&&(fe=t.RG16I),G===t.INT&&(fe=t.RG32I)),S===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(fe=t.RGB8UI),G===t.UNSIGNED_SHORT&&(fe=t.RGB16UI),G===t.UNSIGNED_INT&&(fe=t.RGB32UI),G===t.BYTE&&(fe=t.RGB8I),G===t.SHORT&&(fe=t.RGB16I),G===t.INT&&(fe=t.RGB32I)),S===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(fe=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(fe=t.RGBA16UI),G===t.UNSIGNED_INT&&(fe=t.RGBA32UI),G===t.BYTE&&(fe=t.RGBA8I),G===t.SHORT&&(fe=t.RGBA16I),G===t.INT&&(fe=t.RGBA32I)),S===t.RGB&&(G===t.UNSIGNED_SHORT&&Pe&&(fe=Pe.RGB16_EXT),G===t.SHORT&&Pe&&(fe=Pe.RGB16_SNORM_EXT),G===t.UNSIGNED_INT_5_9_9_9_REV&&(fe=t.RGB9_E5),G===t.UNSIGNED_INT_10F_11F_11F_REV&&(fe=t.R11F_G11F_B10F)),S===t.RGBA){const me=Me?$l:ot.getTransfer(ue);G===t.FLOAT&&(fe=t.RGBA32F),G===t.HALF_FLOAT&&(fe=t.RGBA16F),G===t.UNSIGNED_BYTE&&(fe=me===pt?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT&&Pe&&(fe=Pe.RGBA16_EXT),G===t.SHORT&&Pe&&(fe=Pe.RGBA16_SNORM_EXT),G===t.UNSIGNED_SHORT_4_4_4_4&&(fe=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(fe=t.RGB5_A1)}return(fe===t.R16F||fe===t.R32F||fe===t.RG16F||fe===t.RG32F||fe===t.RGBA16F||fe===t.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function T(U,S){let G;return U?S===null||S===vi||S===eo?G=t.DEPTH24_STENCIL8:S===di?G=t.DEPTH32F_STENCIL8:S===Ja&&(G=t.DEPTH24_STENCIL8,Je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===vi||S===eo?G=t.DEPTH_COMPONENT24:S===di?G=t.DEPTH_COMPONENT32F:S===Ja&&(G=t.DEPTH_COMPONENT16),G}function C(U,S){return d(U)===!0||U.isFramebufferTexture&&U.minFilter!==Xt&&U.minFilter!==nn?Math.log2(Math.max(S.width,S.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?S.mipmaps.length:1}function L(U){const S=U.target;S.removeEventListener("dispose",L),R(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&p.delete(S)}function g(U){const S=U.target;S.removeEventListener("dispose",g),D(S)}function R(U){const S=i.get(U);if(S.__webglInit===void 0)return;const G=U.source,J=m.get(G);if(J){const ue=J[S.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&A(U),Object.keys(J).length===0&&m.delete(G)}i.remove(U)}function A(U){const S=i.get(U);t.deleteTexture(S.__webglTexture);const G=U.source,J=m.get(G);delete J[S.__cacheKey],a.memory.textures--}function D(U){const S=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let ue=0;ue<S.__webglFramebuffer[J].length;ue++)t.deleteFramebuffer(S.__webglFramebuffer[J][ue]);else t.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)t.deleteFramebuffer(S.__webglFramebuffer[J]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=U.textures;for(let J=0,ue=G.length;J<ue;J++){const Me=i.get(G[J]);Me.__webglTexture&&(t.deleteTexture(Me.__webglTexture),a.memory.textures--),i.remove(G[J])}i.remove(U)}let B=0;function W(){B=0}function te(){return B}function H(U){B=U}function Q(){const U=B;return U>=r.maxTextures&&Je("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+r.maxTextures),B+=1,U}function q(U){const S=[];return S.push(U.wrapS),S.push(U.wrapT),S.push(U.wrapR||0),S.push(U.magFilter),S.push(U.minFilter),S.push(U.anisotropy),S.push(U.internalFormat),S.push(U.format),S.push(U.type),S.push(U.generateMipmaps),S.push(U.premultiplyAlpha),S.push(U.flipY),S.push(U.unpackAlignment),S.push(U.colorSpace),S.join()}function b(U,S){const G=i.get(U);if(U.isVideoTexture&&V(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&G.__version!==U.version){const J=U.image;if(J===null)Je("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Je("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(G,U,S);return}}else U.isExternalTexture&&(G.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+S)}function M(U,S){const G=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&G.__version!==U.version){Ne(G,U,S);return}else U.isExternalTexture&&(G.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+S)}function I(U,S){const G=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&G.__version!==U.version){Ne(G,U,S);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+S)}function k(U,S){const G=i.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&G.__version!==U.version){Ee(G,U,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+S)}const F={[kd]:t.REPEAT,[Ri]:t.CLAMP_TO_EDGE,[Od]:t.MIRRORED_REPEAT},he={[Xt]:t.NEAREST,[X1]:t.NEAREST_MIPMAP_NEAREST,[Po]:t.NEAREST_MIPMAP_LINEAR,[nn]:t.LINEAR,[Qc]:t.LINEAR_MIPMAP_NEAREST,[Ur]:t.LINEAR_MIPMAP_LINEAR},pe={[Y1]:t.NEVER,[ew]:t.ALWAYS,[K1]:t.LESS,[bh]:t.LEQUAL,[Z1]:t.EQUAL,[Eh]:t.GEQUAL,[Q1]:t.GREATER,[J1]:t.NOTEQUAL};function oe(U,S){if(S.type===di&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===nn||S.magFilter===Qc||S.magFilter===Po||S.magFilter===Ur||S.minFilter===nn||S.minFilter===Qc||S.minFilter===Po||S.minFilter===Ur)&&Je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(U,t.TEXTURE_WRAP_S,F[S.wrapS]),t.texParameteri(U,t.TEXTURE_WRAP_T,F[S.wrapT]),(U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY)&&t.texParameteri(U,t.TEXTURE_WRAP_R,F[S.wrapR]),t.texParameteri(U,t.TEXTURE_MAG_FILTER,he[S.magFilter]),t.texParameteri(U,t.TEXTURE_MIN_FILTER,he[S.minFilter]),S.compareFunction&&(t.texParameteri(U,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(U,t.TEXTURE_COMPARE_FUNC,pe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Xt||S.minFilter!==Po&&S.minFilter!==Ur||S.type===di&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(U,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function j(U,S){let G=!1;U.__webglInit===void 0&&(U.__webglInit=!0,S.addEventListener("dispose",L));const J=S.source;let ue=m.get(J);ue===void 0&&(ue={},m.set(J,ue));const Me=q(S);if(Me!==U.__cacheKey){ue[Me]===void 0&&(ue[Me]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ue[Me].usedTimes++;const Pe=ue[U.__cacheKey];Pe!==void 0&&(ue[U.__cacheKey].usedTimes--,Pe.usedTimes===0&&A(S)),U.__cacheKey=Me,U.__webglTexture=ue[Me].texture}return G}function ie(U,S,G){return Math.floor(Math.floor(U/G)/S)}function de(U,S,G,J){const Me=U.updateRanges;if(Me.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,G,J,S.data);else{Me.sort((ee,ge)=>ee.start-ge.start);let Pe=0;for(let ee=1;ee<Me.length;ee++){const ge=Me[Pe],_e=Me[ee],be=ge.start+ge.count,Ae=ie(_e.start,S.width,4),Ge=ie(ge.start,S.width,4);_e.start<=be+1&&Ae===Ge&&ie(_e.start+_e.count-1,S.width,4)===Ae?ge.count=Math.max(ge.count,_e.start+_e.count-ge.start):(++Pe,Me[Pe]=_e)}Me.length=Pe+1;const fe=n.getParameter(t.UNPACK_ROW_LENGTH),me=n.getParameter(t.UNPACK_SKIP_PIXELS),z=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let ee=0,ge=Me.length;ee<ge;ee++){const _e=Me[ee],be=Math.floor(_e.start/4),Ae=Math.ceil(_e.count/4),Ge=be%S.width,O=Math.floor(be/S.width),ve=Ae,$=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(t.UNPACK_SKIP_ROWS,O),n.texSubImage2D(t.TEXTURE_2D,0,Ge,O,ve,$,G,J,S.data)}U.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,fe),n.pixelStorei(t.UNPACK_SKIP_PIXELS,me),n.pixelStorei(t.UNPACK_SKIP_ROWS,z)}}function Ne(U,S,G){let J=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=t.TEXTURE_3D);const ue=j(U,S),Me=S.source;n.bindTexture(J,U.__webglTexture,t.TEXTURE0+G);const Pe=i.get(Me);if(Me.version!==Pe.__version||ue===!0){if(n.activeTexture(t.TEXTURE0+G),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const $=ot.getPrimaries(ot.workingColorSpace),le=S.colorSpace===tr?null:ot.getPrimaries(S.colorSpace),xe=S.colorSpace===tr||$===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let me=x(S.image,!1,r.maxTextureSize);me=qe(S,me);const z=s.convert(S.format,S.colorSpace),ee=s.convert(S.type);let ge=y(S.internalFormat,z,ee,S.normalized,S.colorSpace,S.isVideoTexture);oe(J,S);let _e;const be=S.mipmaps,Ae=S.isVideoTexture!==!0,Ge=Pe.__version===void 0||ue===!0,O=Me.dataReady,ve=C(S,me);if(S.isDepthTexture)ge=T(S.format===Fr,S.type),Ge&&(Ae?n.texStorage2D(t.TEXTURE_2D,1,ge,me.width,me.height):n.texImage2D(t.TEXTURE_2D,0,ge,me.width,me.height,0,z,ee,null));else if(S.isDataTexture)if(be.length>0){Ae&&Ge&&n.texStorage2D(t.TEXTURE_2D,ve,ge,be[0].width,be[0].height);for(let $=0,le=be.length;$<le;$++)_e=be[$],Ae?O&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,_e.width,_e.height,z,ee,_e.data):n.texImage2D(t.TEXTURE_2D,$,ge,_e.width,_e.height,0,z,ee,_e.data);S.generateMipmaps=!1}else Ae?(Ge&&n.texStorage2D(t.TEXTURE_2D,ve,ge,me.width,me.height),O&&de(S,me,z,ee)):n.texImage2D(t.TEXTURE_2D,0,ge,me.width,me.height,0,z,ee,me.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ae&&Ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,ge,be[0].width,be[0].height,me.depth);for(let $=0,le=be.length;$<le;$++)if(_e=be[$],S.format!==Qn)if(z!==null)if(Ae){if(O)if(S.layerUpdates.size>0){const xe=Wm(_e.width,_e.height,S.format,S.type);for(const P of S.layerUpdates){const ne=_e.data.subarray(P*xe/_e.data.BYTES_PER_ELEMENT,(P+1)*xe/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,P,_e.width,_e.height,1,z,ne)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,_e.width,_e.height,me.depth,z,_e.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,ge,_e.width,_e.height,me.depth,0,_e.data,0,0);else Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ae?O&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,_e.width,_e.height,me.depth,z,ee,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,ge,_e.width,_e.height,me.depth,0,z,ee,_e.data)}else{Ae&&Ge&&n.texStorage2D(t.TEXTURE_2D,ve,ge,be[0].width,be[0].height);for(let $=0,le=be.length;$<le;$++)_e=be[$],S.format!==Qn?z!==null?Ae?O&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,_e.width,_e.height,z,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,$,ge,_e.width,_e.height,0,_e.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ae?O&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,_e.width,_e.height,z,ee,_e.data):n.texImage2D(t.TEXTURE_2D,$,ge,_e.width,_e.height,0,z,ee,_e.data)}else if(S.isDataArrayTexture)if(Ae){if(Ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,ge,me.width,me.height,me.depth),O)if(S.layerUpdates.size>0){const $=Wm(me.width,me.height,S.format,S.type);for(const le of S.layerUpdates){const xe=me.data.subarray(le*$/me.data.BYTES_PER_ELEMENT,(le+1)*$/me.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,le,me.width,me.height,1,z,ee,xe)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,z,ee,me.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ge,me.width,me.height,me.depth,0,z,ee,me.data);else if(S.isData3DTexture)Ae?(Ge&&n.texStorage3D(t.TEXTURE_3D,ve,ge,me.width,me.height,me.depth),O&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,z,ee,me.data)):n.texImage3D(t.TEXTURE_3D,0,ge,me.width,me.height,me.depth,0,z,ee,me.data);else if(S.isFramebufferTexture){if(Ge)if(Ae)n.texStorage2D(t.TEXTURE_2D,ve,ge,me.width,me.height);else{let $=me.width,le=me.height;for(let xe=0;xe<ve;xe++)n.texImage2D(t.TEXTURE_2D,xe,ge,$,le,0,z,ee,null),$>>=1,le>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){const $=t.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),me.parentNode!==$){$.appendChild(me),p.add(S),$.onpaint=le=>{const xe=le.changedElements;for(const P of p)xe.includes(P.image)&&(P.needsUpdate=!0)},$.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,me);else{const xe=t.RGBA,P=t.RGBA,ne=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,xe,P,ne,me)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(be.length>0){if(Ae&&Ge){const $=Ze(be[0]);n.texStorage2D(t.TEXTURE_2D,ve,ge,$.width,$.height)}for(let $=0,le=be.length;$<le;$++)_e=be[$],Ae?O&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,z,ee,_e):n.texImage2D(t.TEXTURE_2D,$,ge,z,ee,_e);S.generateMipmaps=!1}else if(Ae){if(Ge){const $=Ze(me);n.texStorage2D(t.TEXTURE_2D,ve,ge,$.width,$.height)}O&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,z,ee,me)}else n.texImage2D(t.TEXTURE_2D,0,ge,z,ee,me);d(S)&&v(J),Pe.__version=Me.version,S.onUpdate&&S.onUpdate(S)}U.__version=S.version}function Ee(U,S,G){if(S.image.length!==6)return;const J=j(U,S),ue=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+G);const Me=i.get(ue);if(ue.version!==Me.__version||J===!0){n.activeTexture(t.TEXTURE0+G);const Pe=ot.getPrimaries(ot.workingColorSpace),fe=S.colorSpace===tr?null:ot.getPrimaries(S.colorSpace),me=S.colorSpace===tr||Pe===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const z=S.isCompressedTexture||S.image[0].isCompressedTexture,ee=S.image[0]&&S.image[0].isDataTexture,ge=[];for(let P=0;P<6;P++)!z&&!ee?ge[P]=x(S.image[P],!0,r.maxCubemapSize):ge[P]=ee?S.image[P].image:S.image[P],ge[P]=qe(S,ge[P]);const _e=ge[0],be=s.convert(S.format,S.colorSpace),Ae=s.convert(S.type),Ge=y(S.internalFormat,be,Ae,S.normalized,S.colorSpace),O=S.isVideoTexture!==!0,ve=Me.__version===void 0||J===!0,$=ue.dataReady;let le=C(S,_e);oe(t.TEXTURE_CUBE_MAP,S);let xe;if(z){O&&ve&&n.texStorage2D(t.TEXTURE_CUBE_MAP,le,Ge,_e.width,_e.height);for(let P=0;P<6;P++){xe=ge[P].mipmaps;for(let ne=0;ne<xe.length;ne++){const Z=xe[ne];S.format!==Qn?be!==null?O?$&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne,0,0,Z.width,Z.height,be,Z.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne,Ge,Z.width,Z.height,0,Z.data):Je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne,0,0,Z.width,Z.height,be,Ae,Z.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne,Ge,Z.width,Z.height,0,be,Ae,Z.data)}}}else{if(xe=S.mipmaps,O&&ve){xe.length>0&&le++;const P=Ze(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,le,Ge,P.width,P.height)}for(let P=0;P<6;P++)if(ee){O?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,ge[P].width,ge[P].height,be,Ae,ge[P].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,Ge,ge[P].width,ge[P].height,0,be,Ae,ge[P].data);for(let ne=0;ne<xe.length;ne++){const ye=xe[ne].image[P].image;O?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne+1,0,0,ye.width,ye.height,be,Ae,ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne+1,Ge,ye.width,ye.height,0,be,Ae,ye.data)}}else{O?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,be,Ae,ge[P]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,Ge,be,Ae,ge[P]);for(let ne=0;ne<xe.length;ne++){const Z=xe[ne];O?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne+1,0,0,be,Ae,Z.image[P]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne+1,Ge,be,Ae,Z.image[P])}}}d(S)&&v(t.TEXTURE_CUBE_MAP),Me.__version=ue.version,S.onUpdate&&S.onUpdate(S)}U.__version=S.version}function X(U,S,G,J,ue,Me){const Pe=s.convert(G.format,G.colorSpace),fe=s.convert(G.type),me=y(G.internalFormat,Pe,fe,G.normalized,G.colorSpace),z=i.get(S),ee=i.get(G);if(ee.__renderTarget=S,!z.__hasExternalTextures){const ge=Math.max(1,S.width>>Me),_e=Math.max(1,S.height>>Me);ue===t.TEXTURE_3D||ue===t.TEXTURE_2D_ARRAY?n.texImage3D(ue,Me,me,ge,_e,S.depth,0,Pe,fe,null):n.texImage2D(ue,Me,me,ge,_e,0,Pe,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,U),Qe(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,ue,ee.__webglTexture,0,Xe(S)):(ue===t.TEXTURE_2D||ue>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,ue,ee.__webglTexture,Me),n.bindFramebuffer(t.FRAMEBUFFER,null)}function we(U,S,G){if(t.bindRenderbuffer(t.RENDERBUFFER,U),S.depthBuffer){const J=S.depthTexture,ue=J&&J.isDepthTexture?J.type:null,Me=T(S.stencilBuffer,ue),Pe=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Qe(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Xe(S),Me,S.width,S.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe(S),Me,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,Me,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Pe,t.RENDERBUFFER,U)}else{const J=S.textures;for(let ue=0;ue<J.length;ue++){const Me=J[ue],Pe=s.convert(Me.format,Me.colorSpace),fe=s.convert(Me.type),me=y(Me.internalFormat,Pe,fe,Me.normalized,Me.colorSpace);Qe(S)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Xe(S),me,S.width,S.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe(S),me,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,me,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Se(U,S,G){const J=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,U),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ue=i.get(S.depthTexture);if(ue.__renderTarget=S,(!ue.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),J){if(ue.__webglInit===void 0&&(ue.__webglInit=!0,S.depthTexture.addEventListener("dispose",L)),ue.__webglTexture===void 0){ue.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ue.__webglTexture),oe(t.TEXTURE_CUBE_MAP,S.depthTexture);const z=s.convert(S.depthTexture.format),ee=s.convert(S.depthTexture.type);let ge;S.depthTexture.format===Oi?ge=t.DEPTH_COMPONENT24:S.depthTexture.format===Fr&&(ge=t.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ge,S.width,S.height,0,z,ee,null)}}else b(S.depthTexture,0);const Me=ue.__webglTexture,Pe=Xe(S),fe=J?t.TEXTURE_CUBE_MAP_POSITIVE_X+G:t.TEXTURE_2D,me=S.depthTexture.format===Fr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===Oi)Qe(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,me,fe,Me,0,Pe):t.framebufferTexture2D(t.FRAMEBUFFER,me,fe,Me,0);else if(S.depthTexture.format===Fr)Qe(S)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,me,fe,Me,0,Pe):t.framebufferTexture2D(t.FRAMEBUFFER,me,fe,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Te(U){const S=i.get(U),G=U.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==U.depthTexture){const J=U.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){const ue=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",ue)};J.addEventListener("dispose",ue),S.__depthDisposeCallback=ue}S.__boundDepthTexture=J}if(U.depthTexture&&!S.__autoAllocateDepthBuffer)if(G)for(let J=0;J<6;J++)Se(S.__webglFramebuffer[J],U,J);else{const J=U.texture.mipmaps;J&&J.length>0?Se(S.__webglFramebuffer[0],U,0):Se(S.__webglFramebuffer,U,0)}else if(G){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=t.createRenderbuffer(),we(S.__webglDepthbuffer[J],U,!1);else{const ue=U.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=S.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,Me),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,Me)}}else{const J=U.texture.mipmaps;if(J&&J.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),we(S.__webglDepthbuffer,U,!1);else{const ue=U.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Me),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,Me)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ce(U,S,G){const J=i.get(U);S!==void 0&&X(J.__webglFramebuffer,U,U.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Te(U)}function De(U){const S=U.texture,G=i.get(U),J=i.get(S);U.addEventListener("dispose",g);const ue=U.textures,Me=U.isWebGLCubeRenderTarget===!0,Pe=ue.length>1;if(Pe||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=S.version,a.memory.textures++),Me){G.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[fe]=[];for(let me=0;me<S.mipmaps.length;me++)G.__webglFramebuffer[fe][me]=t.createFramebuffer()}else G.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let fe=0;fe<S.mipmaps.length;fe++)G.__webglFramebuffer[fe]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(Pe)for(let fe=0,me=ue.length;fe<me;fe++){const z=i.get(ue[fe]);z.__webglTexture===void 0&&(z.__webglTexture=t.createTexture(),a.memory.textures++)}if(U.samples>0&&Qe(U)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let fe=0;fe<ue.length;fe++){const me=ue[fe];G.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[fe]);const z=s.convert(me.format,me.colorSpace),ee=s.convert(me.type),ge=y(me.internalFormat,z,ee,me.normalized,me.colorSpace,U.isXRRenderTarget===!0),_e=Xe(U);t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,ge,U.width,U.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,G.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),U.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),we(G.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Me){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),oe(t.TEXTURE_CUBE_MAP,S);for(let fe=0;fe<6;fe++)if(S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)X(G.__webglFramebuffer[fe][me],U,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,me);else X(G.__webglFramebuffer[fe],U,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);d(S)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let fe=0,me=ue.length;fe<me;fe++){const z=ue[fe],ee=i.get(z);let ge=t.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ge=U.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ge,ee.__webglTexture),oe(ge,z),X(G.__webglFramebuffer,U,z,t.COLOR_ATTACHMENT0+fe,ge,0),d(z)&&v(ge)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(fe=U.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,J.__webglTexture),oe(fe,S),S.mipmaps&&S.mipmaps.length>0)for(let me=0;me<S.mipmaps.length;me++)X(G.__webglFramebuffer[me],U,S,t.COLOR_ATTACHMENT0,fe,me);else X(G.__webglFramebuffer,U,S,t.COLOR_ATTACHMENT0,fe,0);d(S)&&v(fe),n.unbindTexture()}U.depthBuffer&&Te(U)}function ze(U){const S=U.textures;for(let G=0,J=S.length;G<J;G++){const ue=S[G];if(d(ue)){const Me=w(U),Pe=i.get(ue).__webglTexture;n.bindTexture(Me,Pe),v(Me),n.unbindTexture()}}}const Ie=[],Ue=[];function Ke(U){if(U.samples>0){if(Qe(U)===!1){const S=U.textures,G=U.width,J=U.height;let ue=t.COLOR_BUFFER_BIT;const Me=U.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Pe=i.get(U),fe=S.length>1;if(fe)for(let z=0;z<S.length;z++)n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+z,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+z,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const me=U.texture.mipmaps;me&&me.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let z=0;z<S.length;z++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ue|=t.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ue|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[z]);const ee=i.get(S[z]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ee,0)}t.blitFramebuffer(0,0,G,J,0,0,G,J,ue,t.NEAREST),c===!0&&(Ie.length=0,Ue.length=0,Ie.push(t.COLOR_ATTACHMENT0+z),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ie.push(Me),Ue.push(Me),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ue)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ie))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let z=0;z<S.length;z++){n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+z,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[z]);const ee=i.get(S[z]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+z,t.TEXTURE_2D,ee,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&c){const S=U.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function Xe(U){return Math.min(r.maxSamples,U.samples)}function Qe(U){const S=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function V(U){const S=a.render.frame;h.get(U)!==S&&(h.set(U,S),U.update())}function qe(U,S){const G=U.colorSpace,J=U.format,ue=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||G!==ql&&G!==tr&&(ot.getTransfer(G)===pt?(J!==Qn||ue!==Cn)&&Je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",G)),S}function Ze(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(u.width=U.naturalWidth||U.width,u.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(u.width=U.displayWidth,u.height=U.displayHeight):(u.width=U.width,u.height=U.height),u}this.allocateTextureUnit=Q,this.resetTextureUnits=W,this.getTextureUnits=te,this.setTextureUnits=H,this.setTexture2D=b,this.setTexture2DArray=M,this.setTexture3D=I,this.setTextureCube=k,this.rebindTextures=Ce,this.setupRenderTarget=De,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=X,this.useMultisampledRTT=Qe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function AT(t,e){function n(i,r=tr){let s;const a=ot.getTransfer(r);if(i===Cn)return t.UNSIGNED_BYTE;if(i===_h)return t.UNSIGNED_SHORT_4_4_4_4;if(i===yh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ev)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===tv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Qx)return t.BYTE;if(i===Jx)return t.SHORT;if(i===Ja)return t.UNSIGNED_SHORT;if(i===vh)return t.INT;if(i===vi)return t.UNSIGNED_INT;if(i===di)return t.FLOAT;if(i===ki)return t.HALF_FLOAT;if(i===nv)return t.ALPHA;if(i===iv)return t.RGB;if(i===Qn)return t.RGBA;if(i===Oi)return t.DEPTH_COMPONENT;if(i===Fr)return t.DEPTH_STENCIL;if(i===rv)return t.RED;if(i===Sh)return t.RED_INTEGER;if(i===qr)return t.RG;if(i===wh)return t.RG_INTEGER;if(i===Mh)return t.RGBA_INTEGER;if(i===pl||i===ml||i===gl||i===xl)if(a===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===pl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===pl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ml)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===xl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zd||i===Bd||i===jd||i===Vd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===zd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hd||i===Gd||i===Wd||i===Xd||i===qd||i===Wl||i===$d)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Hd||i===Gd)return a===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Wd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Xd)return s.COMPRESSED_R11_EAC;if(i===qd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Wl)return s.COMPRESSED_RG11_EAC;if(i===$d)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Yd||i===Kd||i===Zd||i===Qd||i===Jd||i===ef||i===tf||i===nf||i===rf||i===sf||i===af||i===of||i===lf||i===cf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Yd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jd)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ef)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===sf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===af)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===of)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===lf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cf)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===uf||i===df||i===ff)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===uf)return a===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===df)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ff)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hf||i===pf||i===Xl||i===mf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===hf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===pf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===mf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===eo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const RT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NT=`
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

}`;class LT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new fv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new _i({vertexShader:RT,fragmentShader:NT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new en(new uo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PT extends Zr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,l="local-floor",c=1,u=null,h=null,p=null,f=null,m=null,_=null;const E=typeof XRWebGLBinding<"u",x=new LT,d={},v=n.getContextAttributes();let w=null,y=null;const T=[],C=[],L=new ct;let g=null;const R=new zn;R.viewport=new Tt;const A=new zn;A.viewport=new Tt;const D=[R,A],B=new Vw;let W=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ie=T[j];return ie===void 0&&(ie=new au,T[j]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(j){let ie=T[j];return ie===void 0&&(ie=new au,T[j]=ie),ie.getGripSpace()},this.getHand=function(j){let ie=T[j];return ie===void 0&&(ie=new au,T[j]=ie),ie.getHandSpace()};function H(j){const ie=C.indexOf(j.inputSource);if(ie===-1)return;const de=T[ie];de!==void 0&&(de.update(j.inputSource,j.frame,u||a),de.dispatchEvent({type:j.type,data:j.inputSource}))}function Q(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",q);for(let j=0;j<T.length;j++){const ie=C[j];ie!==null&&(C[j]=null,T[j].disconnect(ie))}W=null,te=null,x.reset();for(const j in d)delete d[j];e.setRenderTarget(w),m=null,f=null,p=null,r=null,y=null,oe.stop(),i.isPresenting=!1,e.setPixelRatio(g),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&Je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){l=j,i.isPresenting===!0&&Je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",q),v.xrCompatible!==!0&&await n.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(L),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,Ne=null,Ee=null;v.depth&&(Ee=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,de=v.stencil?Fr:Oi,Ne=v.stencil?eo:vi);const X={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:s};p=this.getBinding(),f=p.createProjectionLayer(X),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new gi(f.textureWidth,f.textureHeight,{format:Qn,type:Cn,depthTexture:new Ys(f.textureWidth,f.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const de={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,de),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new gi(m.framebufferWidth,m.framebufferHeight,{format:Qn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(l),oe.setContext(r),oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(j){for(let ie=0;ie<j.removed.length;ie++){const de=j.removed[ie],Ne=C.indexOf(de);Ne>=0&&(C[Ne]=null,T[Ne].disconnect(de))}for(let ie=0;ie<j.added.length;ie++){const de=j.added[ie];let Ne=C.indexOf(de);if(Ne===-1){for(let X=0;X<T.length;X++)if(X>=C.length){C.push(de),Ne=X;break}else if(C[X]===null){C[X]=de,Ne=X;break}if(Ne===-1)break}const Ee=T[Ne];Ee&&Ee.connect(de)}}const b=new re,M=new re;function I(j,ie,de){b.setFromMatrixPosition(ie.matrixWorld),M.setFromMatrixPosition(de.matrixWorld);const Ne=b.distanceTo(M),Ee=ie.projectionMatrix.elements,X=de.projectionMatrix.elements,we=Ee[14]/(Ee[10]-1),Se=Ee[14]/(Ee[10]+1),Te=(Ee[9]+1)/Ee[5],Ce=(Ee[9]-1)/Ee[5],De=(Ee[8]-1)/Ee[0],ze=(X[8]+1)/X[0],Ie=we*De,Ue=we*ze,Ke=Ne/(-De+ze),Xe=Ke*-De;if(ie.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Xe),j.translateZ(Ke),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ee[10]===-1)j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Qe=we+Ke,V=Se+Ke,qe=Ie-Xe,Ze=Ue+(Ne-Xe),U=Te*Se/V*Qe,S=Ce*Se/V*Qe;j.projectionMatrix.makePerspective(qe,Ze,U,S,Qe,V),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function k(j,ie){ie===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ie.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ie=j.near,de=j.far;x.texture!==null&&(x.depthNear>0&&(ie=x.depthNear),x.depthFar>0&&(de=x.depthFar)),B.near=A.near=R.near=ie,B.far=A.far=R.far=de,(W!==B.near||te!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),W=B.near,te=B.far),B.layers.mask=j.layers.mask|6,R.layers.mask=B.layers.mask&-5,A.layers.mask=B.layers.mask&-3;const Ne=j.parent,Ee=B.cameras;k(B,Ne);for(let X=0;X<Ee.length;X++)k(Ee[X],Ne);Ee.length===2?I(B,R,A):B.projectionMatrix.copy(R.projectionMatrix),F(j,B,Ne)};function F(j,ie,de){de===null?j.matrix.copy(ie.matrixWorld):(j.matrix.copy(de.matrixWorld),j.matrix.invert(),j.matrix.multiply(ie.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=xf*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(j){c=j,f!==null&&(f.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(B)},this.getCameraTexture=function(j){return d[j]};let he=null;function pe(j,ie){if(h=ie.getViewerPose(u||a),_=ie,h!==null){const de=h.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let Ne=!1;de.length!==B.cameras.length&&(B.cameras.length=0,Ne=!0);for(let Se=0;Se<de.length;Se++){const Te=de[Se];let Ce=null;if(m!==null)Ce=m.getViewport(Te);else{const ze=p.getViewSubImage(f,Te);Ce=ze.viewport,Se===0&&(e.setRenderTargetTextures(y,ze.colorTexture,ze.depthStencilTexture),e.setRenderTarget(y))}let De=D[Se];De===void 0&&(De=new zn,De.layers.enable(Se),De.viewport=new Tt,D[Se]=De),De.matrix.fromArray(Te.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Te.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),Se===0&&(B.matrix.copy(De.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ne===!0&&B.cameras.push(De)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){p=i.getBinding();const Se=p.getDepthInformation(de[0]);Se&&Se.isValid&&Se.texture&&x.init(Se,r.renderState)}if(Ee&&Ee.includes("camera-access")&&E){e.state.unbindTexture(),p=i.getBinding();for(let Se=0;Se<de.length;Se++){const Te=de[Se].camera;if(Te){let Ce=d[Te];Ce||(Ce=new fv,d[Te]=Ce);const De=p.getCameraImage(Te);Ce.sourceTexture=De}}}}for(let de=0;de<T.length;de++){const Ne=C[de],Ee=T[de];Ne!==null&&Ee!==void 0&&Ee.update(Ne,ie,u||a)}he&&he(j,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),_=null}const oe=new gv;oe.setAnimationLoop(pe),this.setAnimationLoop=function(j){he=j},this.dispose=function(){}}}const DT=new Lt,Mv=new et;Mv.set(-1,0,0,0,1,0,0,0,1);function IT(t,e){function n(x,d){x.matrixAutoUpdate===!0&&x.updateMatrix(),d.value.copy(x.matrix)}function i(x,d){d.color.getRGB(x.fogColor.value,hv(t)),d.isFog?(x.fogNear.value=d.near,x.fogFar.value=d.far):d.isFogExp2&&(x.fogDensity.value=d.density)}function r(x,d,v,w,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(x,d):d.isMeshLambertMaterial?(s(x,d),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(x,d),p(x,d)):d.isMeshPhongMaterial?(s(x,d),h(x,d),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(x,d),f(x,d),d.isMeshPhysicalMaterial&&m(x,d,y)):d.isMeshMatcapMaterial?(s(x,d),_(x,d)):d.isMeshDepthMaterial?s(x,d):d.isMeshDistanceMaterial?(s(x,d),E(x,d)):d.isMeshNormalMaterial?s(x,d):d.isLineBasicMaterial?(a(x,d),d.isLineDashedMaterial&&l(x,d)):d.isPointsMaterial?c(x,d,v,w):d.isSpriteMaterial?u(x,d):d.isShadowMaterial?(x.color.value.copy(d.color),x.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(x,d){x.opacity.value=d.opacity,d.color&&x.diffuse.value.copy(d.color),d.emissive&&x.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.bumpMap&&(x.bumpMap.value=d.bumpMap,n(d.bumpMap,x.bumpMapTransform),x.bumpScale.value=d.bumpScale,d.side===Sn&&(x.bumpScale.value*=-1)),d.normalMap&&(x.normalMap.value=d.normalMap,n(d.normalMap,x.normalMapTransform),x.normalScale.value.copy(d.normalScale),d.side===Sn&&x.normalScale.value.negate()),d.displacementMap&&(x.displacementMap.value=d.displacementMap,n(d.displacementMap,x.displacementMapTransform),x.displacementScale.value=d.displacementScale,x.displacementBias.value=d.displacementBias),d.emissiveMap&&(x.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,x.emissiveMapTransform)),d.specularMap&&(x.specularMap.value=d.specularMap,n(d.specularMap,x.specularMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest);const v=e.get(d),w=v.envMap,y=v.envMapRotation;w&&(x.envMap.value=w,x.envMapRotation.value.setFromMatrix4(DT.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Mv),x.reflectivity.value=d.reflectivity,x.ior.value=d.ior,x.refractionRatio.value=d.refractionRatio),d.lightMap&&(x.lightMap.value=d.lightMap,x.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,x.lightMapTransform)),d.aoMap&&(x.aoMap.value=d.aoMap,x.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,x.aoMapTransform))}function a(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform))}function l(x,d){x.dashSize.value=d.dashSize,x.totalSize.value=d.dashSize+d.gapSize,x.scale.value=d.scale}function c(x,d,v,w){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.size.value=d.size*v,x.scale.value=w*.5,d.map&&(x.map.value=d.map,n(d.map,x.uvTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function u(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.rotation.value=d.rotation,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function h(x,d){x.specular.value.copy(d.specular),x.shininess.value=Math.max(d.shininess,1e-4)}function p(x,d){d.gradientMap&&(x.gradientMap.value=d.gradientMap)}function f(x,d){x.metalness.value=d.metalness,d.metalnessMap&&(x.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,x.metalnessMapTransform)),x.roughness.value=d.roughness,d.roughnessMap&&(x.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,x.roughnessMapTransform)),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)}function m(x,d,v){x.ior.value=d.ior,d.sheen>0&&(x.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),x.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(x.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,x.sheenColorMapTransform)),d.sheenRoughnessMap&&(x.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,x.sheenRoughnessMapTransform))),d.clearcoat>0&&(x.clearcoat.value=d.clearcoat,x.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(x.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,x.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(x.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Sn&&x.clearcoatNormalScale.value.negate())),d.dispersion>0&&(x.dispersion.value=d.dispersion),d.iridescence>0&&(x.iridescence.value=d.iridescence,x.iridescenceIOR.value=d.iridescenceIOR,x.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(x.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,x.iridescenceMapTransform)),d.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),d.transmission>0&&(x.transmission.value=d.transmission,x.transmissionSamplerMap.value=v.texture,x.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(x.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,x.transmissionMapTransform)),x.thickness.value=d.thickness,d.thicknessMap&&(x.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=d.attenuationDistance,x.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(x.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(x.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=d.specularIntensity,x.specularColor.value.copy(d.specularColor),d.specularColorMap&&(x.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,x.specularColorMapTransform)),d.specularIntensityMap&&(x.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,x.specularIntensityMapTransform))}function _(x,d){d.matcap&&(x.matcap.value=d.matcap)}function E(x,d){const v=e.get(d).light;x.referencePosition.value.setFromMatrixPosition(v.matrixWorld),x.nearDistance.value=v.shadow.camera.near,x.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function UT(t,e,n,i){let r={},s={},a=[];const l=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,T){const C=T.program;i.uniformBlockBinding(y,C)}function u(y,T){let C=r[y.id];C===void 0&&(x(y),C=h(y),r[y.id]=C,y.addEventListener("dispose",v));const L=T.program;i.updateUBOMapping(y,L);const g=e.render.frame;s[y.id]!==g&&(f(y),s[y.id]=g)}function h(y){const T=p();y.__bindingPointIndex=T;const C=t.createBuffer(),L=y.__size,g=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,C),t.bufferData(t.UNIFORM_BUFFER,L,g),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,C),C}function p(){for(let y=0;y<l;y++)if(a.indexOf(y)===-1)return a.push(y),y;return dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const T=r[y.id],C=y.uniforms,L=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let g=0,R=C.length;g<R;g++){const A=C[g];if(Array.isArray(A))for(let D=0,B=A.length;D<B;D++)m(A[D],g,D,L);else m(A,g,0,L)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(y,T,C,L){if(E(y,T,C,L)===!0){const g=y.__offset,R=y.value;if(Array.isArray(R)){let A=0;for(let D=0;D<R.length;D++){const B=R[D],W=d(B);_(B,y.__data,A),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(A+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(R,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,g,y.__data)}}function _(y,T,C){typeof y=="number"||typeof y=="boolean"?T[0]=y:y.isMatrix3?(T[0]=y.elements[0],T[1]=y.elements[1],T[2]=y.elements[2],T[3]=0,T[4]=y.elements[3],T[5]=y.elements[4],T[6]=y.elements[5],T[7]=0,T[8]=y.elements[6],T[9]=y.elements[7],T[10]=y.elements[8],T[11]=0):ArrayBuffer.isView(y)?T.set(new y.constructor(y.buffer,y.byteOffset,T.length)):y.toArray(T,C)}function E(y,T,C,L){const g=y.value,R=T+"_"+C;if(L[R]===void 0)return typeof g=="number"||typeof g=="boolean"?L[R]=g:ArrayBuffer.isView(g)?L[R]=g.slice():L[R]=g.clone(),!0;{const A=L[R];if(typeof g=="number"||typeof g=="boolean"){if(A!==g)return L[R]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(A.equals(g)===!1)return A.copy(g),!0}}return!1}function x(y){const T=y.uniforms;let C=0;const L=16;for(let R=0,A=T.length;R<A;R++){const D=Array.isArray(T[R])?T[R]:[T[R]];for(let B=0,W=D.length;B<W;B++){const te=D[B],H=Array.isArray(te.value)?te.value:[te.value];for(let Q=0,q=H.length;Q<q;Q++){const b=H[Q],M=d(b),I=C%L,k=I%M.boundary,F=I+k;C+=k,F!==0&&L-F<M.storage&&(C+=L-F),te.__data=new Float32Array(M.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=C,C+=M.storage}}}const g=C%L;return g>0&&(C+=L-g),y.__size=C,y.__cache={},this}function d(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?Je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):Je("WebGLRenderer: Unsupported uniform value type.",y),T}function v(y){const T=y.target;T.removeEventListener("dispose",v);const C=a.indexOf(T.__bindingPointIndex);a.splice(C,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function w(){for(const y in r)t.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:c,update:u,dispose:w}}const FT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ai=null;function kT(){return ai===null&&(ai=new Tw(FT,16,16,qr,ki),ai.name="DFG_LUT",ai.minFilter=nn,ai.magFilter=nn,ai.wrapS=Ri,ai.wrapT=Ri,ai.generateMipmaps=!1,ai.needsUpdate=!0),ai}class OT{constructor(e={}){const{canvas:n=nw(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:m=Cn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const E=m,x=new Set([Mh,wh,Sh]),d=new Set([Cn,vi,Ja,eo,_h,yh]),v=new Uint32Array(4),w=new Int32Array(4),y=new re;let T=null,C=null;const L=[],g=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const A=this;let D=!1,B=null,W=null,te=null,H=null;this._outputColorSpace=Un;let Q=0,q=0,b=null,M=-1,I=null;const k=new Tt,F=new Tt;let he=null;const pe=new ft(0);let oe=0,j=n.width,ie=n.height,de=1,Ne=null,Ee=null;const X=new Tt(0,0,j,ie),we=new Tt(0,0,j,ie);let Se=!1;const Te=new Rh;let Ce=!1,De=!1;const ze=new Lt,Ie=new re,Ue=new Tt,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function Qe(){return b===null?de:1}let V=i;function qe(N,Y){return n.getContext(N,Y)}try{const N={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${xh}`),n.addEventListener("webglcontextlost",ye,!1),n.addEventListener("webglcontextrestored",Le,!1),n.addEventListener("webglcontextcreationerror",Be,!1),V===null){const Y="webgl2";if(V=qe(Y,N),V===null)throw qe(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(N){throw dt("WebGLRenderer: "+N.message),N}let Ze,U,S,G,J,ue,Me,Pe,fe,me,z,ee,ge,_e,be,Ae,Ge,O,ve,$,le,xe,P;function ne(){Ze=new kE(V),Ze.init(),le=new AT(V,Ze),U=new RE(V,Ze,e,le),S=new TT(V,Ze),U.reversedDepthBuffer&&f&&S.buffers.depth.setReversed(!0),W=V.createFramebuffer(),te=V.createFramebuffer(),H=V.createFramebuffer(),G=new BE(V),J=new fT,ue=new CT(V,Ze,S,J,U,le,G),Me=new FE(A),Pe=new Gw(V),xe=new CE(V,Pe),fe=new OE(V,Pe,G,xe),me=new VE(V,fe,Pe,xe,G),O=new jE(V,U,ue),be=new NE(J),z=new dT(A,Me,Ze,U,xe,be),ee=new IT(A,J),ge=new pT,_e=new yT(Ze),Ge=new TE(A,Me,S,me,_,c),Ae=new ET(A,me,U),P=new UT(V,G,U,S),ve=new AE(V,Ze,G),$=new zE(V,Ze,G),G.programs=z.programs,A.capabilities=U,A.extensions=Ze,A.properties=J,A.renderLists=ge,A.shadowMap=Ae,A.state=S,A.info=G}ne(),E!==Cn&&(R=new GE(E,n.width,n.height,l,r,s));const Z=new PT(A,V);this.xr=Z,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const N=Ze.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Ze.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(N){N!==void 0&&(de=N,this.setSize(j,ie,!1))},this.getSize=function(N){return N.set(j,ie)},this.setSize=function(N,Y,ce=!0){if(Z.isPresenting){Je("WebGLRenderer: Can't change size while VR device is presenting.");return}j=N,ie=Y,n.width=Math.floor(N*de),n.height=Math.floor(Y*de),ce===!0&&(n.style.width=N+"px",n.style.height=Y+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,N,Y)},this.getDrawingBufferSize=function(N){return N.set(j*de,ie*de).floor()},this.setDrawingBufferSize=function(N,Y,ce){j=N,ie=Y,de=ce,n.width=Math.floor(N*ce),n.height=Math.floor(Y*ce),this.setViewport(0,0,N,Y)},this.setEffects=function(N){if(E===Cn){dt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let Y=0;Y<N.length;Y++)if(N[Y].isOutputPass===!0){Je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(k)},this.getViewport=function(N){return N.copy(X)},this.setViewport=function(N,Y,ce,se){N.isVector4?X.set(N.x,N.y,N.z,N.w):X.set(N,Y,ce,se),S.viewport(k.copy(X).multiplyScalar(de).round())},this.getScissor=function(N){return N.copy(we)},this.setScissor=function(N,Y,ce,se){N.isVector4?we.set(N.x,N.y,N.z,N.w):we.set(N,Y,ce,se),S.scissor(F.copy(we).multiplyScalar(de).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(N){S.setScissorTest(Se=N)},this.setOpaqueSort=function(N){Ne=N},this.setTransparentSort=function(N){Ee=N},this.getClearColor=function(N){return N.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(N=!0,Y=!0,ce=!0){let se=0;if(N){let ae=!1;if(b!==null){const Oe=b.texture.format;ae=x.has(Oe)}if(ae){const Oe=b.texture.type,Ve=d.has(Oe),ke=Ge.getClearColor(),We=Ge.getClearAlpha(),$e=ke.r,nt=ke.g,st=ke.b;Ve?(v[0]=$e,v[1]=nt,v[2]=st,v[3]=We,V.clearBufferuiv(V.COLOR,0,v)):(w[0]=$e,w[1]=nt,w[2]=st,w[3]=We,V.clearBufferiv(V.COLOR,0,w))}else se|=V.COLOR_BUFFER_BIT}Y&&(se|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(se|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&V.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),B=N},this.dispose=function(){n.removeEventListener("webglcontextlost",ye,!1),n.removeEventListener("webglcontextrestored",Le,!1),n.removeEventListener("webglcontextcreationerror",Be,!1),Ge.dispose(),ge.dispose(),_e.dispose(),J.dispose(),Me.dispose(),me.dispose(),xe.dispose(),P.dispose(),z.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",zh),Z.removeEventListener("sessionend",Bh),Sr.stop()};function ye(N){N.preventDefault(),Mm("WebGLRenderer: Context Lost."),D=!0}function Le(){Mm("WebGLRenderer: Context Restored."),D=!1;const N=G.autoReset,Y=Ae.enabled,ce=Ae.autoUpdate,se=Ae.needsUpdate,ae=Ae.type;ne(),G.autoReset=N,Ae.enabled=Y,Ae.autoUpdate=ce,Ae.needsUpdate=se,Ae.type=ae}function Be(N){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function tt(N){const Y=N.target;Y.removeEventListener("dispose",tt),an(Y)}function an(N){St(N),J.remove(N)}function St(N){const Y=J.get(N).programs;Y!==void 0&&(Y.forEach(function(ce){z.releaseProgram(ce)}),N.isShaderMaterial&&z.releaseShaderCache(N))}this.renderBufferDirect=function(N,Y,ce,se,ae,Oe){Y===null&&(Y=Ke);const Ve=ae.isMesh&&ae.matrixWorld.determinantAffine()<0,ke=Tv(N,Y,ce,se,ae);S.setMaterial(se,Ve);let We=ce.index,$e=1;if(se.wireframe===!0){if(We=fe.getWireframeAttribute(ce),We===void 0)return;$e=2}const nt=ce.drawRange,st=ce.attributes.position;let Ye=nt.start*$e,gt=(nt.start+nt.count)*$e;Oe!==null&&(Ye=Math.max(Ye,Oe.start*$e),gt=Math.min(gt,(Oe.start+Oe.count)*$e)),We!==null?(Ye=Math.max(Ye,0),gt=Math.min(gt,We.count)):st!=null&&(Ye=Math.max(Ye,0),gt=Math.min(gt,st.count));const Pt=gt-Ye;if(Pt<0||Pt===1/0)return;xe.setup(ae,se,ke,ce,We);let Rt,xt=ve;if(We!==null&&(Rt=Pe.get(We),xt=$,xt.setIndex(Rt)),ae.isMesh)se.wireframe===!0?(S.setLineWidth(se.wireframeLinewidth*Qe()),xt.setMode(V.LINES)):xt.setMode(V.TRIANGLES);else if(ae.isLine){let Yt=se.linewidth;Yt===void 0&&(Yt=1),S.setLineWidth(Yt*Qe()),ae.isLineSegments?xt.setMode(V.LINES):ae.isLineLoop?xt.setMode(V.LINE_LOOP):xt.setMode(V.LINE_STRIP)}else ae.isPoints?xt.setMode(V.POINTS):ae.isSprite&&xt.setMode(V.TRIANGLES);if(ae.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))xt.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const Yt=ae._multiDrawStarts,je=ae._multiDrawCounts,wn=ae._multiDrawCount,ut=We?Pe.get(We).bytesPerElement:1,Dn=J.get(se).currentProgram.getUniforms();for(let ii=0;ii<wn;ii++)Dn.setValue(V,"_gl_DrawID",ii),xt.render(Yt[ii]/ut,je[ii])}else if(ae.isInstancedMesh)xt.renderInstances(Ye,Pt,ae.count);else if(ce.isInstancedBufferGeometry){const Yt=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,je=Math.min(ce.instanceCount,Yt);xt.renderInstances(Ye,Pt,je)}else xt.render(Ye,Pt)};function Gt(N,Y,ce){N.transparent===!0&&N.side===ui&&N.forceSinglePass===!1?(N.side=Sn,N.needsUpdate=!0,ho(N,Y,ce),N.side=gr,N.needsUpdate=!0,ho(N,Y,ce),N.side=ui):ho(N,Y,ce)}this.compile=function(N,Y,ce=null){ce===null&&(ce=N),C=_e.get(ce),C.init(Y),g.push(C),ce.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Y.layers)&&(C.pushLight(ae),ae.castShadow&&C.pushShadow(ae))}),N!==ce&&N.traverseVisible(function(ae){ae.isLight&&ae.layers.test(Y.layers)&&(C.pushLight(ae),ae.castShadow&&C.pushShadow(ae))}),C.setupLights();const se=new Set;return N.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const Oe=ae.material;if(Oe)if(Array.isArray(Oe))for(let Ve=0;Ve<Oe.length;Ve++){const ke=Oe[Ve];Gt(ke,ce,ae),se.add(ke)}else Gt(Oe,ce,ae),se.add(Oe)}),C=g.pop(),se},this.compileAsync=function(N,Y,ce=null){const se=this.compile(N,Y,ce);return new Promise(ae=>{function Oe(){if(se.forEach(function(Ve){J.get(Ve).currentProgram.isReady()&&se.delete(Ve)}),se.size===0){ae(N);return}setTimeout(Oe,10)}Ze.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Qr=null;function bv(N){Qr&&Qr(N)}function zh(){Sr.stop()}function Bh(){Sr.start()}const Sr=new gv;Sr.setAnimationLoop(bv),typeof self<"u"&&Sr.setContext(self),this.setAnimationLoop=function(N){Qr=N,Z.setAnimationLoop(N),N===null?Sr.stop():Sr.start()},Z.addEventListener("sessionstart",zh),Z.addEventListener("sessionend",Bh),this.render=function(N,Y){if(Y!==void 0&&Y.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;B!==null&&B.renderStart(N,Y);const ce=Z.enabled===!0&&Z.isPresenting===!0,se=R!==null&&(b===null||ce)&&R.begin(A,b);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(Y),Y=Z.getCamera()),N.isScene===!0&&N.onBeforeRender(A,N,Y,b),C=_e.get(N,g.length),C.init(Y),C.state.textureUnits=ue.getTextureUnits(),g.push(C),ze.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Te.setFromProjectionMatrix(ze,fi,Y.reversedDepth),De=this.localClippingEnabled,Ce=be.init(this.clippingPlanes,De),T=ge.get(N,L.length),T.init(),L.push(T),Z.enabled===!0&&Z.isPresenting===!0){const Ve=A.xr.getDepthSensingMesh();Ve!==null&&_c(Ve,Y,-1/0,A.sortObjects)}_c(N,Y,0,A.sortObjects),T.finish(),A.sortObjects===!0&&T.sort(Ne,Ee,Y.reversedDepth),Xe=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Xe&&Ge.addToRenderList(T,N),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ce===!0&&be.beginShadows();const ae=C.state.shadowsArray;if(Ae.render(ae,N,Y),Ce===!0&&be.endShadows(),(se&&R.hasRenderPass())===!1){const Ve=T.opaque,ke=T.transmissive;if(C.setupLights(),Y.isArrayCamera){const We=Y.cameras;if(ke.length>0)for(let $e=0,nt=We.length;$e<nt;$e++){const st=We[$e];Vh(Ve,ke,N,st)}Xe&&Ge.render(N);for(let $e=0,nt=We.length;$e<nt;$e++){const st=We[$e];jh(T,N,st,st.viewport)}}else ke.length>0&&Vh(Ve,ke,N,Y),Xe&&Ge.render(N),jh(T,N,Y)}b!==null&&q===0&&(ue.updateMultisampleRenderTarget(b),ue.updateRenderTargetMipmap(b)),se&&R.end(A),N.isScene===!0&&N.onAfterRender(A,N,Y),xe.resetDefaultState(),M=-1,I=null,g.pop(),g.length>0?(C=g[g.length-1],ue.setTextureUnits(C.state.textureUnits),Ce===!0&&be.setGlobalState(A.clippingPlanes,C.state.camera)):C=null,L.pop(),L.length>0?T=L[L.length-1]:T=null,B!==null&&B.renderEnd()};function _c(N,Y,ce,se){if(N.visible===!1)return;if(N.layers.test(Y.layers)){if(N.isGroup)ce=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Y);else if(N.isLightProbeGrid)C.pushLightProbeGrid(N);else if(N.isLight)C.pushLight(N),N.castShadow&&C.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Te.intersectsSprite(N)){se&&Ue.setFromMatrixPosition(N.matrixWorld).applyMatrix4(ze);const Ve=me.update(N),ke=N.material;ke.visible&&T.push(N,Ve,ke,ce,Ue.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Te.intersectsObject(N))){const Ve=me.update(N),ke=N.material;if(se&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Ue.copy(N.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Ue.copy(Ve.boundingSphere.center)),Ue.applyMatrix4(N.matrixWorld).applyMatrix4(ze)),Array.isArray(ke)){const We=Ve.groups;for(let $e=0,nt=We.length;$e<nt;$e++){const st=We[$e],Ye=ke[st.materialIndex];Ye&&Ye.visible&&T.push(N,Ve,Ye,ce,Ue.z,st)}}else ke.visible&&T.push(N,Ve,ke,ce,Ue.z,null)}}const Oe=N.children;for(let Ve=0,ke=Oe.length;Ve<ke;Ve++)_c(Oe[Ve],Y,ce,se)}function jh(N,Y,ce,se){const{opaque:ae,transmissive:Oe,transparent:Ve}=N;C.setupLightsView(ce),Ce===!0&&be.setGlobalState(A.clippingPlanes,ce),se&&S.viewport(k.copy(se)),ae.length>0&&fo(ae,Y,ce),Oe.length>0&&fo(Oe,Y,ce),Ve.length>0&&fo(Ve,Y,ce),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Vh(N,Y,ce,se){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[se.id]===void 0){const Ye=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[se.id]=new gi(1,1,{generateMipmaps:!0,type:Ye?ki:Cn,minFilter:Ur,samples:Math.max(4,U.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace})}const Oe=C.state.transmissionRenderTarget[se.id],Ve=se.viewport||k;Oe.setSize(Ve.z*A.transmissionResolutionScale,Ve.w*A.transmissionResolutionScale);const ke=A.getRenderTarget(),We=A.getActiveCubeFace(),$e=A.getActiveMipmapLevel();A.setRenderTarget(Oe),A.getClearColor(pe),oe=A.getClearAlpha(),oe<1&&A.setClearColor(16777215,.5),A.clear(),Xe&&Ge.render(ce);const nt=A.toneMapping;A.toneMapping=mi;const st=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),C.setupLightsView(se),Ce===!0&&be.setGlobalState(A.clippingPlanes,se),fo(N,ce,se),ue.updateMultisampleRenderTarget(Oe),ue.updateRenderTargetMipmap(Oe),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let gt=0,Pt=Y.length;gt<Pt;gt++){const Rt=Y[gt],{object:xt,geometry:Yt,material:je,group:wn}=Rt;if(je.side===ui&&xt.layers.test(se.layers)){const ut=je.side;je.side=Sn,je.needsUpdate=!0,Hh(xt,ce,se,Yt,je,wn),je.side=ut,je.needsUpdate=!0,Ye=!0}}Ye===!0&&(ue.updateMultisampleRenderTarget(Oe),ue.updateRenderTargetMipmap(Oe))}A.setRenderTarget(ke,We,$e),A.setClearColor(pe,oe),st!==void 0&&(se.viewport=st),A.toneMapping=nt}function fo(N,Y,ce){const se=Y.isScene===!0?Y.overrideMaterial:null;for(let ae=0,Oe=N.length;ae<Oe;ae++){const Ve=N[ae],{object:ke,geometry:We,group:$e}=Ve;let nt=Ve.material;nt.allowOverride===!0&&se!==null&&(nt=se),ke.layers.test(ce.layers)&&Hh(ke,Y,ce,We,nt,$e)}}function Hh(N,Y,ce,se,ae,Oe){N.onBeforeRender(A,Y,ce,se,ae,Oe),N.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ae.onBeforeRender(A,Y,ce,se,N,Oe),ae.transparent===!0&&ae.side===ui&&ae.forceSinglePass===!1?(ae.side=Sn,ae.needsUpdate=!0,A.renderBufferDirect(ce,Y,se,ae,N,Oe),ae.side=gr,ae.needsUpdate=!0,A.renderBufferDirect(ce,Y,se,ae,N,Oe),ae.side=ui):A.renderBufferDirect(ce,Y,se,ae,N,Oe),N.onAfterRender(A,Y,ce,se,ae,Oe)}function ho(N,Y,ce){Y.isScene!==!0&&(Y=Ke);const se=J.get(N),ae=C.state.lights,Oe=C.state.shadowsArray,Ve=ae.state.version,ke=z.getParameters(N,ae.state,Oe,Y,ce,C.state.lightProbeGridArray),We=z.getProgramCacheKey(ke);let $e=se.programs;se.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?Y.environment:null,se.fog=Y.fog;const nt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;se.envMap=Me.get(N.envMap||se.environment,nt),se.envMapRotation=se.environment!==null&&N.envMap===null?Y.environmentRotation:N.envMapRotation,$e===void 0&&(N.addEventListener("dispose",tt),$e=new Map,se.programs=$e);let st=$e.get(We);if(st!==void 0){if(se.currentProgram===st&&se.lightsStateVersion===Ve)return Wh(N,ke),st}else ke.uniforms=z.getUniforms(N),B!==null&&N.isNodeMaterial&&B.build(N,ce,ke),N.onBeforeCompile(ke,A),st=z.acquireProgram(ke,We),$e.set(We,st),se.uniforms=ke.uniforms;const Ye=se.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ye.clippingPlanes=be.uniform),Wh(N,ke),se.needsLights=Av(N),se.lightsStateVersion=Ve,se.needsLights&&(Ye.ambientLightColor.value=ae.state.ambient,Ye.lightProbe.value=ae.state.probe,Ye.directionalLights.value=ae.state.directional,Ye.directionalLightShadows.value=ae.state.directionalShadow,Ye.spotLights.value=ae.state.spot,Ye.spotLightShadows.value=ae.state.spotShadow,Ye.rectAreaLights.value=ae.state.rectArea,Ye.ltc_1.value=ae.state.rectAreaLTC1,Ye.ltc_2.value=ae.state.rectAreaLTC2,Ye.pointLights.value=ae.state.point,Ye.pointLightShadows.value=ae.state.pointShadow,Ye.hemisphereLights.value=ae.state.hemi,Ye.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,Ye.spotLightMatrix.value=ae.state.spotLightMatrix,Ye.spotLightMap.value=ae.state.spotLightMap,Ye.pointShadowMatrix.value=ae.state.pointShadowMatrix),se.lightProbeGrid=C.state.lightProbeGridArray.length>0,se.currentProgram=st,se.uniformsList=null,st}function Gh(N){if(N.uniformsList===null){const Y=N.currentProgram.getUniforms();N.uniformsList=vl.seqWithValue(Y.seq,N.uniforms)}return N.uniformsList}function Wh(N,Y){const ce=J.get(N);ce.outputColorSpace=Y.outputColorSpace,ce.batching=Y.batching,ce.batchingColor=Y.batchingColor,ce.instancing=Y.instancing,ce.instancingColor=Y.instancingColor,ce.instancingMorph=Y.instancingMorph,ce.skinning=Y.skinning,ce.morphTargets=Y.morphTargets,ce.morphNormals=Y.morphNormals,ce.morphColors=Y.morphColors,ce.morphTargetsCount=Y.morphTargetsCount,ce.numClippingPlanes=Y.numClippingPlanes,ce.numIntersection=Y.numClipIntersection,ce.vertexAlphas=Y.vertexAlphas,ce.vertexTangents=Y.vertexTangents,ce.toneMapping=Y.toneMapping}function Ev(N,Y){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;y.setFromMatrixPosition(Y.matrixWorld);for(let ce=0,se=N.length;ce<se;ce++){const ae=N[ce];if(ae.texture!==null&&ae.boundingBox.containsPoint(y))return ae}return null}function Tv(N,Y,ce,se,ae){Y.isScene!==!0&&(Y=Ke),ue.resetTextureUnits();const Oe=Y.fog,Ve=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?Y.environment:null,ke=b===null?A.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:ot.workingColorSpace,We=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,$e=Me.get(se.envMap||Ve,We),nt=se.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,st=!!ce.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ye=!!ce.morphAttributes.position,gt=!!ce.morphAttributes.normal,Pt=!!ce.morphAttributes.color;let Rt=mi;se.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Rt=A.toneMapping);const xt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Yt=xt!==void 0?xt.length:0,je=J.get(se),wn=C.state.lights;if(Ce===!0&&(De===!0||N!==I)){const _t=N===I&&se.id===M;be.setState(se,N,_t)}let ut=!1;se.version===je.__version?(je.needsLights&&je.lightsStateVersion!==wn.state.version||je.outputColorSpace!==ke||ae.isBatchedMesh&&je.batching===!1||!ae.isBatchedMesh&&je.batching===!0||ae.isBatchedMesh&&je.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&je.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&je.instancing===!1||!ae.isInstancedMesh&&je.instancing===!0||ae.isSkinnedMesh&&je.skinning===!1||!ae.isSkinnedMesh&&je.skinning===!0||ae.isInstancedMesh&&je.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&je.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&je.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&je.instancingMorph===!1&&ae.morphTexture!==null||je.envMap!==$e||se.fog===!0&&je.fog!==Oe||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==be.numPlanes||je.numIntersection!==be.numIntersection)||je.vertexAlphas!==nt||je.vertexTangents!==st||je.morphTargets!==Ye||je.morphNormals!==gt||je.morphColors!==Pt||je.toneMapping!==Rt||je.morphTargetsCount!==Yt||!!je.lightProbeGrid!=C.state.lightProbeGridArray.length>0)&&(ut=!0):(ut=!0,je.__version=se.version);let Dn=je.currentProgram;ut===!0&&(Dn=ho(se,Y,ae),B&&se.isNodeMaterial&&B.onUpdateProgram(se,Dn,je));let ii=!1,Bi=!1,Jr=!1;const vt=Dn.getUniforms(),Dt=je.uniforms;if(S.useProgram(Dn.program)&&(ii=!0,Bi=!0,Jr=!0),se.id!==M&&(M=se.id,Bi=!0),je.needsLights){const _t=Ev(C.state.lightProbeGridArray,ae);je.lightProbeGrid!==_t&&(je.lightProbeGrid=_t,Bi=!0)}if(ii||I!==N){S.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),vt.setValue(V,"projectionMatrix",N.projectionMatrix),vt.setValue(V,"viewMatrix",N.matrixWorldInverse);const Vi=vt.map.cameraPosition;Vi!==void 0&&Vi.setValue(V,Ie.setFromMatrixPosition(N.matrixWorld)),U.logarithmicDepthBuffer&&vt.setValue(V,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&vt.setValue(V,"isOrthographic",N.isOrthographicCamera===!0),I!==N&&(I=N,Bi=!0,Jr=!0)}if(je.needsLights&&(wn.state.directionalShadowMap.length>0&&vt.setValue(V,"directionalShadowMap",wn.state.directionalShadowMap,ue),wn.state.spotShadowMap.length>0&&vt.setValue(V,"spotShadowMap",wn.state.spotShadowMap,ue),wn.state.pointShadowMap.length>0&&vt.setValue(V,"pointShadowMap",wn.state.pointShadowMap,ue)),ae.isSkinnedMesh){vt.setOptional(V,ae,"bindMatrix"),vt.setOptional(V,ae,"bindMatrixInverse");const _t=ae.skeleton;_t&&(_t.boneTexture===null&&_t.computeBoneTexture(),vt.setValue(V,"boneTexture",_t.boneTexture,ue))}ae.isBatchedMesh&&(vt.setOptional(V,ae,"batchingTexture"),vt.setValue(V,"batchingTexture",ae._matricesTexture,ue),vt.setOptional(V,ae,"batchingIdTexture"),vt.setValue(V,"batchingIdTexture",ae._indirectTexture,ue),vt.setOptional(V,ae,"batchingColorTexture"),ae._colorsTexture!==null&&vt.setValue(V,"batchingColorTexture",ae._colorsTexture,ue));const ji=ce.morphAttributes;if((ji.position!==void 0||ji.normal!==void 0||ji.color!==void 0)&&O.update(ae,ce,Dn),(Bi||je.receiveShadow!==ae.receiveShadow)&&(je.receiveShadow=ae.receiveShadow,vt.setValue(V,"receiveShadow",ae.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&Y.environment!==null&&(Dt.envMapIntensity.value=Y.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=kT()),Bi){if(vt.setValue(V,"toneMappingExposure",A.toneMappingExposure),je.needsLights&&Cv(Dt,Jr),Oe&&se.fog===!0&&ee.refreshFogUniforms(Dt,Oe),ee.refreshMaterialUniforms(Dt,se,de,ie,C.state.transmissionRenderTarget[N.id]),je.needsLights&&je.lightProbeGrid){const _t=je.lightProbeGrid;Dt.probesSH.value=_t.texture,Dt.probesMin.value.copy(_t.boundingBox.min),Dt.probesMax.value.copy(_t.boundingBox.max),Dt.probesResolution.value.copy(_t.resolution)}vl.upload(V,Gh(je),Dt,ue)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(vl.upload(V,Gh(je),Dt,ue),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&vt.setValue(V,"center",ae.center),vt.setValue(V,"modelViewMatrix",ae.modelViewMatrix),vt.setValue(V,"normalMatrix",ae.normalMatrix),vt.setValue(V,"modelMatrix",ae.matrixWorld),se.uniformsGroups!==void 0){const _t=se.uniformsGroups;for(let Vi=0,es=_t.length;Vi<es;Vi++){const Xh=_t[Vi];P.update(Xh,Dn),P.bind(Xh,Dn)}}return Dn}function Cv(N,Y){N.ambientLightColor.needsUpdate=Y,N.lightProbe.needsUpdate=Y,N.directionalLights.needsUpdate=Y,N.directionalLightShadows.needsUpdate=Y,N.pointLights.needsUpdate=Y,N.pointLightShadows.needsUpdate=Y,N.spotLights.needsUpdate=Y,N.spotLightShadows.needsUpdate=Y,N.rectAreaLights.needsUpdate=Y,N.hemisphereLights.needsUpdate=Y}function Av(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(N,Y,ce){const se=J.get(N);se.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),J.get(N.texture).__webglTexture=Y,J.get(N.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ce,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,Y){const ce=J.get(N);ce.__webglFramebuffer=Y,ce.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(N,Y=0,ce=0){b=N,Q=Y,q=ce;let se=null,ae=!1,Oe=!1;if(N){const ke=J.get(N);if(ke.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(V.FRAMEBUFFER,ke.__webglFramebuffer),k.copy(N.viewport),F.copy(N.scissor),he=N.scissorTest,S.viewport(k),S.scissor(F),S.setScissorTest(he),M=-1;return}else if(ke.__webglFramebuffer===void 0)ue.setupRenderTarget(N);else if(ke.__hasExternalTextures)ue.rebindTextures(N,J.get(N.texture).__webglTexture,J.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const nt=N.depthTexture;if(ke.__boundDepthTexture!==nt){if(nt!==null&&J.has(nt)&&(N.width!==nt.image.width||N.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ue.setupDepthRenderbuffer(N)}}const We=N.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Oe=!0);const $e=J.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray($e[Y])?se=$e[Y][ce]:se=$e[Y],ae=!0):N.samples>0&&ue.useMultisampledRTT(N)===!1?se=J.get(N).__webglMultisampledFramebuffer:Array.isArray($e)?se=$e[ce]:se=$e,k.copy(N.viewport),F.copy(N.scissor),he=N.scissorTest}else k.copy(X).multiplyScalar(de).floor(),F.copy(we).multiplyScalar(de).floor(),he=Se;if(ce!==0&&(se=W),S.bindFramebuffer(V.FRAMEBUFFER,se)&&S.drawBuffers(N,se),S.viewport(k),S.scissor(F),S.setScissorTest(he),ae){const ke=J.get(N.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ke.__webglTexture,ce)}else if(Oe){const ke=Y;for(let We=0;We<N.textures.length;We++){const $e=J.get(N.textures[We]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+We,$e.__webglTexture,ce,ke)}}else if(N!==null&&ce!==0){const ke=J.get(N.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ke.__webglTexture,ce)}M=-1},this.readRenderTargetPixels=function(N,Y,ce,se,ae,Oe,Ve,ke=0){if(!(N&&N.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=J.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ve!==void 0&&(We=We[Ve]),We){S.bindFramebuffer(V.FRAMEBUFFER,We);try{const $e=N.textures[ke],nt=$e.format,st=$e.type;if(N.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+ke),!U.textureFormatReadable(nt)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(st)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=N.width-se&&ce>=0&&ce<=N.height-ae&&V.readPixels(Y,ce,se,ae,le.convert(nt),le.convert(st),Oe)}finally{const $e=b!==null?J.get(b).__webglFramebuffer:null;S.bindFramebuffer(V.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(N,Y,ce,se,ae,Oe,Ve,ke=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=J.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ve!==void 0&&(We=We[Ve]),We)if(Y>=0&&Y<=N.width-se&&ce>=0&&ce<=N.height-ae){S.bindFramebuffer(V.FRAMEBUFFER,We);const $e=N.textures[ke],nt=$e.format,st=$e.type;if(N.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+ke),!U.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ye=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ye),V.bufferData(V.PIXEL_PACK_BUFFER,Oe.byteLength,V.STREAM_READ),V.readPixels(Y,ce,se,ae,le.convert(nt),le.convert(st),0);const gt=b!==null?J.get(b).__webglFramebuffer:null;S.bindFramebuffer(V.FRAMEBUFFER,gt);const Pt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await iw(V,Pt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ye),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Oe),V.deleteBuffer(Ye),V.deleteSync(Pt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,Y=null,ce=0){const se=Math.pow(2,-ce),ae=Math.floor(N.image.width*se),Oe=Math.floor(N.image.height*se),Ve=Y!==null?Y.x:0,ke=Y!==null?Y.y:0;ue.setTexture2D(N,0),V.copyTexSubImage2D(V.TEXTURE_2D,ce,0,0,Ve,ke,ae,Oe),S.unbindTexture()},this.copyTextureToTexture=function(N,Y,ce=null,se=null,ae=0,Oe=0){let Ve,ke,We,$e,nt,st,Ye,gt,Pt;const Rt=N.isCompressedTexture?N.mipmaps[Oe]:N.image;if(ce!==null)Ve=ce.max.x-ce.min.x,ke=ce.max.y-ce.min.y,We=ce.isBox3?ce.max.z-ce.min.z:1,$e=ce.min.x,nt=ce.min.y,st=ce.isBox3?ce.min.z:0;else{const Dt=Math.pow(2,-ae);Ve=Math.floor(Rt.width*Dt),ke=Math.floor(Rt.height*Dt),N.isDataArrayTexture?We=Rt.depth:N.isData3DTexture?We=Math.floor(Rt.depth*Dt):We=1,$e=0,nt=0,st=0}se!==null?(Ye=se.x,gt=se.y,Pt=se.z):(Ye=0,gt=0,Pt=0);const xt=le.convert(Y.format),Yt=le.convert(Y.type);let je;Y.isData3DTexture?(ue.setTexture3D(Y,0),je=V.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ue.setTexture2DArray(Y,0),je=V.TEXTURE_2D_ARRAY):(ue.setTexture2D(Y,0),je=V.TEXTURE_2D),S.activeTexture(V.TEXTURE0),S.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),S.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),S.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment);const wn=S.getParameter(V.UNPACK_ROW_LENGTH),ut=S.getParameter(V.UNPACK_IMAGE_HEIGHT),Dn=S.getParameter(V.UNPACK_SKIP_PIXELS),ii=S.getParameter(V.UNPACK_SKIP_ROWS),Bi=S.getParameter(V.UNPACK_SKIP_IMAGES);S.pixelStorei(V.UNPACK_ROW_LENGTH,Rt.width),S.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Rt.height),S.pixelStorei(V.UNPACK_SKIP_PIXELS,$e),S.pixelStorei(V.UNPACK_SKIP_ROWS,nt),S.pixelStorei(V.UNPACK_SKIP_IMAGES,st);const Jr=N.isDataArrayTexture||N.isData3DTexture,vt=Y.isDataArrayTexture||Y.isData3DTexture;if(N.isDepthTexture){const Dt=J.get(N),ji=J.get(Y),_t=J.get(Dt.__renderTarget),Vi=J.get(ji.__renderTarget);S.bindFramebuffer(V.READ_FRAMEBUFFER,_t.__webglFramebuffer),S.bindFramebuffer(V.DRAW_FRAMEBUFFER,Vi.__webglFramebuffer);for(let es=0;es<We;es++)Jr&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,J.get(N).__webglTexture,ae,st+es),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,J.get(Y).__webglTexture,Oe,Pt+es)),V.blitFramebuffer($e,nt,Ve,ke,Ye,gt,Ve,ke,V.DEPTH_BUFFER_BIT,V.NEAREST);S.bindFramebuffer(V.READ_FRAMEBUFFER,null),S.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(ae!==0||N.isRenderTargetTexture||J.has(N)){const Dt=J.get(N),ji=J.get(Y);S.bindFramebuffer(V.READ_FRAMEBUFFER,te),S.bindFramebuffer(V.DRAW_FRAMEBUFFER,H);for(let _t=0;_t<We;_t++)Jr?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Dt.__webglTexture,ae,st+_t):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Dt.__webglTexture,ae),vt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ji.__webglTexture,Oe,Pt+_t):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ji.__webglTexture,Oe),ae!==0?V.blitFramebuffer($e,nt,Ve,ke,Ye,gt,Ve,ke,V.COLOR_BUFFER_BIT,V.NEAREST):vt?V.copyTexSubImage3D(je,Oe,Ye,gt,Pt+_t,$e,nt,Ve,ke):V.copyTexSubImage2D(je,Oe,Ye,gt,$e,nt,Ve,ke);S.bindFramebuffer(V.READ_FRAMEBUFFER,null),S.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else vt?N.isDataTexture||N.isData3DTexture?V.texSubImage3D(je,Oe,Ye,gt,Pt,Ve,ke,We,xt,Yt,Rt.data):Y.isCompressedArrayTexture?V.compressedTexSubImage3D(je,Oe,Ye,gt,Pt,Ve,ke,We,xt,Rt.data):V.texSubImage3D(je,Oe,Ye,gt,Pt,Ve,ke,We,xt,Yt,Rt):N.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Oe,Ye,gt,Ve,ke,xt,Yt,Rt.data):N.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Oe,Ye,gt,Rt.width,Rt.height,xt,Rt.data):V.texSubImage2D(V.TEXTURE_2D,Oe,Ye,gt,Ve,ke,xt,Yt,Rt);S.pixelStorei(V.UNPACK_ROW_LENGTH,wn),S.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ut),S.pixelStorei(V.UNPACK_SKIP_PIXELS,Dn),S.pixelStorei(V.UNPACK_SKIP_ROWS,ii),S.pixelStorei(V.UNPACK_SKIP_IMAGES,Bi),Oe===0&&Y.generateMipmaps&&V.generateMipmap(je),S.unbindTexture()},this.initRenderTarget=function(N){J.get(N).__webglFramebuffer===void 0&&ue.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?ue.setTextureCube(N,0):N.isData3DTexture?ue.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?ue.setTexture2DArray(N,0):ue.setTexture2D(N,0),S.unbindTexture()},this.resetState=function(){Q=0,q=0,b=null,S.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),n.unpackColorSpace=ot._getUnpackColorSpace()}}const zT=({open:t})=>{const e=K.useRef(null),n=K.useRef(null),i=K.useRef(null),r=K.useRef(null),s=K.useRef([]),a=K.useRef(null),l=K.useRef(t);return K.useEffect(()=>{l.current=t},[t]),K.useEffect(()=>{const c=e.current;if(!c)return;const u=window.innerWidth,h=window.innerHeight,p=new _w;i.current=p;const f=new zn(45,u/h,.1,100);f.position.set(0,0,12),r.current=f;const m=new OT({alpha:!0,antialias:!0});m.setSize(u,h),m.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.shadowMap.enabled=!0,m.shadowMap.type=Ia,n.current=m,c.appendChild(m.domElement);const _=new Bw(16777215,.45);p.add(_);const E=new Hm(16772566,1.2);E.position.set(5,8,8),E.castShadow=!0,E.shadow.mapSize.width=1024,E.shadow.mapSize.height=1024,E.shadow.camera.near=.1,E.shadow.camera.far=30,E.shadow.camera.left=-15,E.shadow.camera.right=15,E.shadow.camera.top=15,E.shadow.camera.bottom=-15,p.add(E);const x=new Hm(12773887,.35);x.position.set(-4,2,-5),p.add(x);const d=12,v=45*Math.PI/180,w=2*Math.tan(v/2)*d,y=w*(u/h),T=y*1.02,C=y*.48,L=w*.035,g=w*.028,R=w*.006,A=w*.008,D=w*.02,B=w/2-L/2,W=w-L-D,te=Math.floor(W/(g+A)),H=new $r(T,g,R),Q=new Mu({color:2763306,roughness:.85,metalness:.1}),q=[],b=B-L/2-D-g/2;for(let Ie=0;Ie<te;Ie++){const Ue=new en(H,Q);Ue.position.y=b-Ie*(g+A),Ue.castShadow=!0,Ue.receiveShadow=!0,p.add(Ue),q.push(Ue)}s.current=q;const M=w*.005,I=B-L/2,k=-w/2,F=I-k,he=(I+k)/2,pe=new Nh(M,M,F,8),oe=new Mu({color:15790320,roughness:.9}),j=R+.02,ie=new en(pe,oe);ie.position.set(-C,he,j),p.add(ie);const de=new en(pe,oe);de.position.set(C,he,j),p.add(de);const Ne=new Lh(M*1.4,8,8);for(let Ie=0;Ie<te;Ie++){const Ue=b-Ie*(g+A),Ke=new en(Ne,oe);Ke.position.set(-C,Ue,j),p.add(Ke);const Xe=new en(Ne,oe);Xe.position.set(C,Ue,j),p.add(Xe)}const Ee=new $r(T+w*.02,L,w*.018),X=new Mu({color:2039583,roughness:.8,metalness:.1}),we=new en(Ee,X);we.position.y=B,we.position.z=R/2,we.castShadow=!0,we.receiveShadow=!0,p.add(we);const Se=new uo(y*2,w*2),Te=new Ah({color:0,transparent:!0,opacity:0,side:ui,depthWrite:!1}),Ce=new en(Se,Te);Ce.position.z=-2,p.add(Ce);const De=()=>{const Ie=window.innerWidth,Ue=window.innerHeight;f.aspect=Ie/Ue,f.updateProjectionMatrix(),m.setSize(Ie,Ue)};window.addEventListener("resize",De);const ze=()=>{a.current=requestAnimationFrame(ze);const Ie=l.current?.85:0,Ue=l.current?.35:1,Ke=l.current?.25:.85;s.current.forEach(Xe=>{Xe.rotation.x+=(Ie-Xe.rotation.x)*.08,Xe.scale.y+=(Ue-Xe.scale.y)*.08}),Ce.material.opacity+=(Ke-Ce.material.opacity)*.05,m.render(p,f)};return ze(),()=>{window.removeEventListener("resize",De),a.current&&cancelAnimationFrame(a.current),m.dispose(),c.contains(m.domElement)&&c.removeChild(m.domElement)}},[]),o.jsx("div",{ref:e,className:"absolute inset-0 z-20 pointer-events-none",style:{mixBlendMode:"normal"}})},BT=({src:t})=>{const e=K.useRef(null),n=K.useRef(null),i=K.useRef(null),r=K.useRef("A"),s=K.useRef(0),a=K.useRef(null),[l,c]=K.useState(!1);return K.useEffect(()=>{const u=n.current,h=i.current;if(!u||!h)return;let p=0;const f=()=>{p+=1,p===2&&(s.current=u.duration||2,c(!0),u.play().catch(()=>{}),r.current="A")};return u.addEventListener("loadedmetadata",f,{once:!0}),h.addEventListener("loadedmetadata",f,{once:!0}),u.load(),h.load(),()=>{a.current&&cancelAnimationFrame(a.current),u.pause(),h.pause(),u.src="",h.src="",u.load(),h.load()}},[t]),K.useEffect(()=>{if(!l)return;const u=n.current,h=i.current;if(!u||!h)return;const p=s.current,f=Math.min(p*.4,.8),m=()=>{const _=r.current==="A"?u:h,E=r.current==="A"?h:u,x=_.currentTime,d=p-x;if(d<=f&&E.paused&&E!==_&&(E.currentTime=0,E.play().catch(()=>{})),d<=f){const v=Math.max(0,Math.min(1,1-d/f));_.style.opacity=String(1-v),E.style.opacity=String(v)}else _.style.opacity="1",E.style.opacity="0";x>=p-.01&&(r.current==="A"?(r.current="B",u.currentTime=0,u.pause()):(r.current="A",h.currentTime=0,h.pause())),a.current=requestAnimationFrame(m)};return a.current=requestAnimationFrame(m),()=>{a.current&&cancelAnimationFrame(a.current)}},[l]),o.jsxs("div",{ref:e,className:"absolute inset-0 w-full h-full pointer-events-none z-20",style:{mixBlendMode:"screen"},children:[o.jsx("video",{ref:n,className:"absolute inset-0 w-full h-full object-cover",src:t,autoPlay:!1,muted:!0,playsInline:!0,preload:"auto",style:{opacity:1,filter:"grayscale(0.35) brightness(0.85) contrast(0.95) saturate(0.7)"}}),o.jsx("video",{ref:i,className:"absolute inset-0 w-full h-full object-cover",src:t,autoPlay:!1,muted:!0,playsInline:!0,preload:"auto",style:{opacity:0,filter:"grayscale(0.35) brightness(0.85) contrast(0.95) saturate(0.7)"}})]})},Dh=({onBack:t,simple:e=!1})=>{const[n,i]=K.useState(!0),[r,s]=K.useState(null),[a,l]=K.useState(!1),[c,u]=K.useState(!1),[h,p]=K.useState(0),f=K.useRef(null),m=K.useRef(null),_=[{id:"rain",label:"Pluie",icon:nm,src:"/media/visualizer-add/rain.mp4"},{id:"window",label:"Vitre",icon:lS,src:"/media/visualizer-add/window.mp4"},{id:"rain_window",label:"Pluie + Vitre",icon:nm,src:"/media/visualizer-add/rain-window.mp4"},{id:"clear",label:"Dégagé",icon:yS,src:null}],E={label:"Store"};K.useEffect(()=>{const y=g=>g&&g.target&&m.current&&m.current.contains(g.target),T=g=>{y(g)||(i(!0),f.current&&clearTimeout(f.current),f.current=setTimeout(()=>i(!1),3e3))},C=()=>{i(!0),f.current&&clearTimeout(f.current)},L=()=>{f.current&&clearTimeout(f.current),f.current=setTimeout(()=>i(!1),3e3)};return window.addEventListener("mousemove",T),m.current&&(m.current.addEventListener("mouseenter",C),m.current.addEventListener("mouseleave",L)),i(!0),f.current=setTimeout(()=>i(!1),3e3),()=>{window.removeEventListener("mousemove",T),m.current&&(m.current.removeEventListener("mouseenter",C),m.current.removeEventListener("mouseleave",L)),f.current&&clearTimeout(f.current)}},[]),K.useEffect(()=>{const y=window.location.hash.substring(1),T=y.indexOf("?");if(T>-1){const C=new URLSearchParams(y.substring(T+1)),L=C.get("overlay"),g=C.get("open");if(L){const R=L.split(","),A=R.find(B=>_.some(W=>W.id===B)),D=R.includes("blinds");s(A||null),l(D),D&&u(g==="true"),p(B=>B+1)}}},[]);const x=(y,T,C=!1)=>{const L=window.location.hash.split("?")[0],g=[];if(y&&g.push(y),T&&g.push("blinds"),g.length>0){const R=T?`&open=${C}`:"";window.location.hash=`${L}?overlay=${g.join(",")}${R}`}else window.location.hash=L},d=y=>{s(T=>{const C=y==="clear"||T===y?null:y;return x(C,a,c),C}),p(T=>T+1)},v=()=>{l(y=>{const T=!y;return T||u(!1),x(r,T,T?c:!1),T})},w=()=>{u(y=>{const T=!y;return x(r,a,T),T})};return o.jsxs(o.Fragment,{children:[r&&o.jsx("div",{className:"absolute inset-0 z-15 pointer-events-none",style:{background:"rgba(130, 140, 150, 0.25)",mixBlendMode:"multiply"}}),r&&o.jsx(BT,{src:_.find(y=>y.id===r).src},`${r}-${h}`),a&&o.jsx(zT,{open:c}),o.jsxs("div",{ref:m,className:`absolute top-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-4 py-3 rounded-lg border backdrop-blur-md transition-all duration-500 ${n?"opacity-100 translate-y-0":"opacity-0 -translate-y-4 pointer-events-none"}`,style:{borderColor:"rgba(6, 182, 212, 0.3)",background:"rgba(0, 0, 0, 0.75)"},children:[!e&&_.map(y=>{const T=y.icon,C=y.id==="clear"?r===null:r===y.id;return o.jsxs("button",{onClick:()=>d(y.id),className:`flex items-center gap-2 px-3 py-2 rounded text-xs font-semibold tracking-wider transition-all duration-200 ${C?"bg-cyan-500/20 text-cyan-400 border border-cyan-500/40":"text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"}`,title:y.label,children:[o.jsx(T,{className:"w-4 h-4"}),o.jsx("span",{className:"hidden sm:inline",children:y.label})]},y.id)}),!e&&o.jsxs("button",{onClick:v,className:`flex items-center gap-2 px-3 py-2 rounded text-xs font-semibold tracking-wider transition-all duration-200 ${a?"bg-cyan-500/20 text-cyan-400 border border-cyan-500/40":"text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"}`,title:E.label,children:[o.jsx(rS,{className:"w-4 h-4"}),o.jsx("span",{className:"hidden sm:inline",children:E.label})]}),!e&&a&&o.jsx("button",{onClick:w,className:"ml-2 px-3 py-2 rounded text-xs font-semibold tracking-wider text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/10 transition-all duration-200",children:c?"Fermer":"Ouvrir"}),!e&&o.jsx("div",{className:"w-px h-6 bg-white/10 mx-1"}),o.jsxs("button",{onClick:t,className:"flex items-center gap-1 px-3 py-2 rounded text-xs font-semibold tracking-wider text-red-400 border border-red-500/30 hover:bg-red-500/10 transition-all duration-200",title:"Quitter",children:[o.jsx(pc,{className:"w-4 h-4"}),o.jsx("span",{className:"hidden sm:inline",children:"Quitter"})]})]})]})},jT=({onBack:t})=>{const e=K.useRef(null),[n,i]=K.useState(!0),[r,s]=K.useState(!1),a=K.useRef(!1);return K.useEffect(()=>{const l=e.current;if(!l)return;const c=()=>{const h=new Date,p=new Date(h.toLocaleString("en-US",{timeZone:"Europe/Paris"})),f=p.getHours(),m=p.getMinutes(),_=p.getSeconds();let x=f+m/60+_/3600-20;x<0&&(x+=24);const v=x*7.5*60,w=240*60,y=v%w;l.readyState>=2&&(l.currentTime=y,l.playbackRate=.125,l.play().then(()=>{i(!1),setTimeout(()=>s(!0),100)}).catch(T=>{console.log("Erreur lecture vidéo:",T),i(!1),s(!0)}))},u=()=>{a.current||(a.current=!0,c())};return l.addEventListener("canplaythrough",u,{once:!0}),l.readyState>=4&&!a.current&&(a.current=!0,c()),()=>{l.removeEventListener("canplaythrough",u),l&&(l.pause(),l.src="",l.load())}},[]),o.jsxs("div",{className:"fixed inset-0 bg-black z-50",children:[n&&o.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black z-40",children:o.jsxs("div",{className:"flex flex-col items-center",children:[o.jsx("div",{className:"w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mb-4"}),o.jsx("p",{className:"text-cyan-400/80 text-sm tracking-wider",children:"CHARGEMENT..."})]})}),o.jsxs("video",{ref:e,className:`w-full h-full object-cover transition-opacity duration-500 ${r?"opacity-100":"opacity-0"}`,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata",children:[o.jsx("source",{src:"https://github.com/Obsidian-Chrome/nexus/releases/download/1.0.0/nightcity_24h.webm",type:"video/webm"}),"Votre navigateur ne supporte pas la lecture de vidéos."]}),o.jsx(Dh,{onBack:t})]})},VT=({onBack:t})=>{const e=K.useRef(null),[n,i]=K.useState(!0),[r,s]=K.useState(!1),a=()=>{i(!1),setTimeout(()=>s(!0),100)};return K.useEffect(()=>()=>{const l=e.current;l&&(l.pause(),l.src="",l.load())},[]),o.jsxs("div",{className:"fixed inset-0 bg-black z-50",children:[n&&o.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black z-40",children:o.jsxs("div",{className:"flex flex-col items-center",children:[o.jsx("div",{className:"w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mb-4"}),o.jsx("p",{className:"text-cyan-400/80 text-sm tracking-wider",children:"CHARGEMENT..."})]})}),o.jsxs("video",{ref:e,className:`w-full h-full object-cover transition-opacity duration-500 ${r?"opacity-100":"opacity-0"}`,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata",onCanPlayThrough:a,children:[o.jsx("source",{src:"https://github.com/Obsidian-Chrome/nexus/releases/download/1.1.0/PyonPix.-.Centre.Ville.webm",type:"video/webm"}),"Votre navigateur ne supporte pas la lecture de vidéos."]}),o.jsx(Dh,{onBack:t})]})},HT=({onBack:t})=>{const e=K.useRef(null),[n,i]=K.useState(!0),[r,s]=K.useState(!1),a=K.useRef(!1);return K.useEffect(()=>{const l=e.current;if(!l)return;const c=()=>{const h=new Date,p=new Date(h.getTime()+60*60*1e3),f=p.getUTCHours(),m=p.getUTCMinutes(),_=p.getUTCSeconds(),E=f*3600+m*60+_;if(l.readyState>=2&&l.duration){const x=E%l.duration;l.currentTime=x,l.play().then(()=>{i(!1),setTimeout(()=>s(!0),100)}).catch(d=>{console.log("Erreur lecture vidéo:",d),i(!1),s(!0)})}},u=()=>{a.current||(a.current=!0,c())};return l.addEventListener("canplaythrough",u,{once:!0}),l.readyState>=4&&!a.current&&(a.current=!0,c()),()=>{l.removeEventListener("canplaythrough",u),l&&(l.pause(),l.src="",l.load())}},[]),o.jsxs("div",{className:"fixed inset-0 bg-black z-50",children:[n&&o.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black z-40",children:o.jsxs("div",{className:"flex flex-col items-center",children:[o.jsx("div",{className:"w-16 h-16 border-4 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin mb-4"}),o.jsx("p",{className:"text-cyan-400/80 text-sm tracking-wider",children:"CHARGEMENT..."})]})}),o.jsxs("video",{ref:e,className:`w-full h-full object-cover transition-opacity duration-500 ${r?"opacity-100":"opacity-0"}`,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata",children:[o.jsx("source",{src:"https://github.com/Obsidian-Chrome/nexus/releases/download/1.2.0/Cyberpunk.Assets.-.Pubs.webm",type:"video/webm"}),"Votre navigateur ne supporte pas la lecture de vidéos."]}),o.jsx(Dh,{onBack:t,simple:!0})]})},GT=({onBack:t})=>{const e=K.useRef(null),[n,i]=K.useState(!0),[r,s]=K.useState(!1),[a,l]=K.useState(null),[c,u]=K.useState(null),[h,p]=K.useState(0);K.useEffect(()=>{const m=new Date().getTime();fetch(`/coven/visualizer.json?t=${m}`).then(_=>_.json()).then(_=>u(_)).catch(_=>console.error("Erreur chargement visualizer.json:",_))},[]),K.useEffect(()=>{if(!c)return;const m=()=>{const E=new Date,x=E.toLocaleDateString("fr-FR",{day:"2-digit",month:"2-digit",year:"numeric"}),d=E.toTimeString().slice(0,5),w=c.events.find(y=>{if(y.date!==x)return!1;const[T,C]=y.heureDebut.split(":").map(Number),[L,g]=y.heureFin.split(":").map(Number),[R,A]=d.split(":").map(Number),D=T*60+C,B=L*60+g,W=R*60+A;return W>=D&&W<=B})||c.default;l(y=>((y==null?void 0:y.fichier)!==(w==null?void 0:w.fichier)&&(i(!0),s(!1),p(T=>T+1)),w))};m();const _=setInterval(m,6e4);return()=>clearInterval(_)},[c]);const f=()=>{i(!1),setTimeout(()=>s(!0),100)};return K.useEffect(()=>()=>{const m=e.current;m&&(m.pause(),m.src="",m.load())},[]),a?o.jsxs("div",{className:"fixed inset-0 bg-black z-50",children:[n&&o.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-black z-40",children:o.jsxs("div",{className:"flex flex-col items-center",children:[o.jsx("div",{className:"w-16 h-16 border-4 border-red-500/30 border-t-red-500 rounded-full animate-spin mb-4"}),o.jsx("p",{className:"text-red-400/80 text-sm tracking-wider",children:"CHARGEMENT..."})]})}),o.jsxs("div",{className:"relative w-full h-full",children:[o.jsxs("video",{ref:e,className:`w-full h-full object-cover transition-opacity duration-500 ${r?"opacity-100":"opacity-0"}`,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"metadata",onClick:t,onCanPlayThrough:f,children:[o.jsx("source",{src:`/coven/visualizer/${a.fichier}`,type:"video/webm"}),"Votre navigateur ne supporte pas la lecture de vidéos."]},h),r&&a.hexadecimal&&a.hexadecimal!=="#000000"&&o.jsx("div",{className:"absolute inset-0 pointer-events-none mix-blend-multiply transition-opacity duration-500",style:{backgroundColor:a.hexadecimal,opacity:.3}})]})]}):o.jsx("div",{className:"fixed inset-0 bg-black z-50 flex items-center justify-center",children:o.jsx("p",{className:"text-white",children:"Aucun événement configuré"})})},WT=()=>o.jsx("div",{className:"fixed inset-0 bg-black z-50 overflow-y-auto",children:o.jsxs("div",{className:"min-h-screen relative",children:[o.jsx("div",{className:"border-b border-zinc-800 bg-black/95 backdrop-blur-sm sticky top-0 z-10",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-8 py-6 flex items-center justify-between",children:[o.jsxs("button",{onClick:()=>window.location.hash="",className:"flex items-center space-x-2 text-white/80 hover:text-red-400 transition-all duration-300",children:[o.jsx(On,{className:"w-5 h-5"}),o.jsx("span",{className:"font-medium",children:"Retour"})]}),o.jsx("img",{src:"/coven/coven_logo.png",alt:"Coven",className:"h-24 object-contain"}),o.jsx("div",{className:"w-24"})]})}),o.jsx("div",{className:"max-w-6xl mx-auto px-8 py-24",children:o.jsxs("div",{className:"flex flex-col md:flex-row gap-6 justify-center items-stretch",children:[o.jsx("a",{href:"#coven/visualizer",className:"flex-1 max-w-md bg-zinc-900/50 border border-zinc-800 p-8 hover:border-red-500/60 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all duration-300 group",children:o.jsxs("div",{className:"flex flex-col items-center text-center gap-4",children:[o.jsx("div",{className:"w-16 h-16 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center group-hover:bg-red-500/30 transition-all",children:o.jsx(Fs,{className:"w-8 h-8 text-red-400"})}),o.jsx("h2",{className:"text-2xl font-bold text-white group-hover:text-red-400 transition-colors",children:"Visualizer"})]})}),o.jsx("a",{href:"#coven/dvd",className:"flex-1 max-w-md bg-zinc-900/50 border border-zinc-800 p-8 hover:border-red-500/60 hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all duration-300 group",children:o.jsxs("div",{className:"flex flex-col items-center text-center gap-4",children:[o.jsx("div",{className:"w-16 h-16 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center group-hover:bg-red-500/30 transition-all",children:o.jsx(Nx,{className:"w-8 h-8 text-red-400"})}),o.jsx("h2",{className:"text-2xl font-bold text-white group-hover:text-red-400 transition-colors",children:"DVD Screensaver"})]})}),o.jsx("div",{className:"flex-1 max-w-md bg-zinc-900/50 border border-zinc-800 p-8 opacity-50 cursor-not-allowed",children:o.jsxs("div",{className:"flex flex-col items-center text-center gap-4",children:[o.jsx("div",{className:"w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center",children:o.jsx(bS,{className:"w-8 h-8 text-red-400/50"})}),o.jsx("h2",{className:"text-2xl font-bold text-white/50",children:"Carte"})]})})]})})]})}),XT=()=>{const t=K.useRef(null),e=K.useRef(null),n=K.useRef({x:100,y:100}),i=K.useRef({x:2,y:2}),r=K.useRef(null),[s,a]=K.useState(0);return K.useEffect(()=>{const l=t.current,c=e.current;if(!l||!c)return;const u=250,h=250,p=()=>{const _=c.clientWidth,E=c.clientHeight;n.current.x+=i.current.x,n.current.y+=i.current.y;let x=!1;(n.current.x+u>=_||n.current.x<=0)&&(i.current.x*=-1,n.current.x=Math.max(0,Math.min(n.current.x,_-u)),x=!0),(n.current.y+h>=E||n.current.y<=0)&&(i.current.y*=-1,n.current.y=Math.max(0,Math.min(n.current.y,E-h)),x=!0),x&&a(Math.random()*360),l.style.transform=`translate(${n.current.x}px, ${n.current.y}px)`,r.current=requestAnimationFrame(p)};n.current={x:Math.random()*(c.clientWidth-u),y:Math.random()*(c.clientHeight-h)};const f=2,m=Math.random()*Math.PI*2;return i.current={x:Math.cos(m)*f,y:Math.sin(m)*f},p(),()=>{r.current&&cancelAnimationFrame(r.current)}},[]),o.jsx("div",{ref:e,className:"fixed inset-0 bg-black z-50 overflow-hidden",children:o.jsx("img",{ref:t,src:"/coven/coven_logo.png",alt:"Coven Logo",className:"absolute w-[250px] h-[250px] object-contain transition-all duration-100",style:{filter:`hue-rotate(${s}deg) saturate(1.5)`,willChange:"transform"}})})},tl="https://raw.githubusercontent.com/Obsidian-Chrome/nexus/main/public/media/radio/mp3/",m0=[{id:1,freq:"69.9",name:"Funk Radio",slug:"funk-radio",logo:"/media/radio/logos/69.9_Funk_Radio.webp",color:"#2596be",playlistFile:"/media/radio/playlists/69.9_Funk_Radio.json"},{id:2,freq:"87.7",name:"Magenta Station",slug:"magenta-station",logo:"/media/radio/logos/87.7_Magenta_Station.webp",color:"#2596be",playlistFile:"/media/radio/playlists/87.7_Magenta_Station.json"},{id:3,freq:"88.9",name:"Pacific Dreams",slug:"pacific-dreams",logo:"/media/radio/logos/88.9_Pacific_Dreams.webp",color:"#2596be",playlistFile:"/media/radio/playlists/88.9_Pacific_Dreams.json"},{id:4,freq:"89.3",name:"Radio Vexelstrom",slug:"radio-vexelstrom",logo:"/media/radio/logos/89.3_Radio_Vexelstrom.webp",color:"#2596be",playlistFile:"/media/radio/playlists/89.3_Radio_Vexelstrom.json"},{id:5,freq:"89.7",name:"Growl FM",slug:"growl-fm",logo:"/media/radio/logos/89.7_Growl_FM.webp",color:"#2596be",playlistFile:"/media/radio/playlists/89.7_Growl_FM.json"},{id:6,freq:"91.9",name:"Royal Blue Radio",slug:"royal-blue-radio",logo:"/media/radio/logos/91.9_Royal_Blue_Radio.webp",color:"#2596be",playlistFile:"/media/radio/playlists/91.9_Royal_Blue_Radio.json"},{id:7,freq:"92.9",name:"Night FM",slug:"night-fm",logo:"/media/radio/logos/92.9_Night_FM.webp",color:"#2596be",playlistFile:"/media/radio/playlists/92.9_Night_FM.json"},{id:8,freq:"95.2",name:"Samizdat Radio",slug:"samizdat-radio",logo:"/media/radio/logos/95.2_Samizdat_Radio.webp",color:"#2596be",playlistFile:"/media/radio/playlists/95.2_Samizdat_Radio.json"},{id:9,freq:"96.1",name:"Ritual FM",slug:"ritual-fm",logo:"/media/radio/logos/96.1_Ritual_FM.webp",color:"#2596be",playlistFile:"/media/radio/playlists/96.1_Ritual_FM.json"},{id:10,freq:"98.7",name:"Body Heat Radio",slug:"body-heat-radio",logo:"/media/radio/logos/98.7_Body_Heat_Radio.webp",color:"#2596be",playlistFile:"/media/radio/playlists/98.7_Body_Heat_Radio.json"},{id:11,freq:"99.9",name:"Impulse",slug:"impulse",logo:"/media/radio/logos/99.9_Impulse.webp",color:"#2596be",playlistFile:"/media/radio/playlists/99.9_Impulse.json"},{id:12,freq:"101.9",name:"The Dirge",slug:"the-dirge",logo:"/media/radio/logos/101.9_The_Dirge.webp",color:"#2596be",playlistFile:"/media/radio/playlists/101.9_The_Dirge.json"},{id:13,freq:"103.5",name:"Radio PEBKAC",slug:"radio-pebkac",logo:"/media/radio/logos/103.5_Radio_PEBKAC.webp",color:"#2596be",playlistFile:"/media/radio/playlists/103.5_Radio_PEBKAC.json"},{id:14,freq:"106.9",name:"30 PRINCIPALES",slug:"30-principales",logo:"/media/radio/logos/106.9_30_PRINCIPALES.webp",color:"#2596be",playlistFile:"/media/radio/playlists/106.9_30_PRINCIPALES.json"},{id:15,freq:"107.3",name:"Morro Rock Radio",slug:"morro-rock-radio",logo:"/media/radio/logos/107.3_Morro_Rock_Radio.webp",color:"#2596be",playlistFile:"/media/radio/playlists/107.3_Morro_Rock_Radio.json"},{id:16,freq:"107.5",name:"Dark Star",slug:"dark-star",logo:"/media/radio/logos/107.5_Dark_Star.webp",color:"#2596be",playlistFile:"/media/radio/playlists/107.5_Dark_Star.json"}],qT=({active:t,color:e})=>o.jsx("div",{className:"flex items-end gap-[2px] h-5",children:[...Array(4)].map((n,i)=>{const r=.3+Math.random()*.4,s=i*.1;return o.jsx("div",{className:"w-[3px] rounded-sm transition-all duration-150",style:{height:t?`${Math.random()*80+20}%`:"20%",backgroundColor:t?"#22c55e":"#1a0000",animationName:t?"barPulse":"none",animationDuration:t?`${r}s`:void 0,animationTimingFunction:t?"ease-in-out":void 0,animationIterationCount:t?"infinite":void 0,animationDirection:t?"alternate":void 0,animationDelay:t?`${s}s`:void 0}},i)})}),$T=({onBack:t})=>{const e=K.useRef(null),[n,i]=K.useState(null),[r,s]=K.useState(!1),[a,l]=K.useState(!1),[c,u]=K.useState(.2),[h,p]=K.useState(!1),[f,m]=K.useState(!1),[_,E]=K.useState([]),[x,d]=K.useState(null),[v,w]=K.useState([]),[y,T]=K.useState(0),[C,L]=K.useState(0),[g,R]=K.useState(0),[A,D]=K.useState(!1),[B,W]=K.useState(!1),te=K.useRef(null),H=K.useRef(!1);K.useRef(!0);const Q=K.useRef(null),[q,b]=K.useState(null),[M,I]=K.useState(!1);K.useEffect(()=>{const X=window.location.hash,we=X.indexOf("?");if(we>-1){const Se=X.substring(we+1),Ce=new URLSearchParams(Se).get("radio");if(Ce){const De=m0.find(ze=>ze.slug===Ce);De&&(i(De),I(!0))}}},[]),K.useEffect(()=>{const X=setInterval(()=>{Math.random()>.85&&(m(!0),setTimeout(()=>m(!1),120))},2e3);return()=>clearInterval(X)},[]),K.useEffect(()=>{if(!n||n.streamUrl&&!B)return;D(!1),w([]),d(null),(async()=>{try{const Se=await(await fetch(n.playlistFile)).json(),Te=await Promise.all(Se.tracks.map(async Ie=>new Promise(Ue=>{const Ke=Ie.file.startsWith("http")?Ie.file:`${tl}${Ie.file}`,Xe=new Audio(Ke);Xe.addEventListener("loadedmetadata",()=>{Ue({...Ie,duration:Xe.duration})}),Xe.addEventListener("error",()=>{console.error(`Erreur chargement: ${Ie.file}`),Ue({...Ie,duration:180})})})));E(Te);const Ce=new Date().toISOString().split("T")[0],De=`${n.freq}_${n.name}_${Ce}`,ze=F([...Te],De);w(ze),setTimeout(()=>D(!0),0)}catch(we){console.error("Erreur chargement playlist:",we),E([]),w([]),D(!1),l(!1)}})()},[n,B]),K.useEffect(()=>{if(!n||!H.current||!n.streamUrl)return;const X=e.current;if(!X)return;l(!0),s(!1),d(null);let we=!1;const Se=()=>{we||(W(!0),l(!1),s(!1),X.pause(),X.src="")};return X.onerror=()=>{console.error("Erreur stream direct, fallback playlist:",n.streamUrl),Se()},X.oncanplay=()=>{we||(Q.current&&(clearTimeout(Q.current),Q.current=null),s(!0),l(!1))},X.src=n.streamUrl,X.volume=c,X.play().catch(Te=>{console.error("Erreur lecture stream direct:",Te),Se()}),Q.current=setTimeout(()=>{we||(console.warn("Timeout stream direct, fallback playlist:",n.streamUrl),Se())},5e3),()=>{we=!0,Q.current&&(clearTimeout(Q.current),Q.current=null)}},[n]),K.useEffect(()=>{if(!A||!H.current||v.length===0||!v[0])return;const we=v.reduce((Ue,Ke)=>Ue+Ke.duration,0),Te=Date.now()/1e3%we;let Ce=0,De=0,ze=0;for(let Ue=0;Ue<v.length;Ue++){if(Ce+v[Ue].duration>Te){De=Ue,ze=Te-Ce;break}Ce+=v[Ue].duration}const Ie=v[De];if(d(Ie),R(De),e.current){const Ue=Ie.file.startsWith("http")?Ie.file:`${tl}${Ie.file}`;e.current.src=Ue,e.current.currentTime=ze,e.current.volume=c,e.current.play().catch(Ke=>console.error("Erreur lecture:",Ke)),s(!0),l(!1)}H.current=!1},[A]);const k=()=>{if(v.length===0)return;const X=(g+1)%v.length,we=v[X];if(d(we),R(X),e.current&&r){const Se=we.file.startsWith("http")?we.file:`${tl}${we.file}`;e.current.src=Se,e.current.currentTime=0,e.current.volume=c,e.current.play().catch(Te=>console.error("Erreur lecture:",Te))}};K.useEffect(()=>{if(!r||!e.current)return;const we=setInterval(()=>{e.current&&(T(e.current.currentTime),L(e.current.duration))},100);return()=>clearInterval(we)},[r]);const F=(X,we)=>{const Se=De=>{let ze=Math.sin(De++)*1e4;return ze-Math.floor(ze)};let Te=0;for(let De=0;De<we.length;De++)Te+=we.charCodeAt(De);const Ce=[...X];for(let De=Ce.length-1;De>0;De--){const ze=Math.floor(Se(Te+De)*(De+1));[Ce[De],Ce[ze]]=[Ce[ze],Ce[De]]}return Ce},he=X=>{const we=`${window.location.origin}${window.location.pathname}#radio?radio=${X.slug}`;navigator.clipboard.writeText(we).then(()=>{b(X.id),setTimeout(()=>b(null),2e3)})},pe=X=>{te.current!==X.id&&(e.current&&(e.current.pause(),e.current.currentTime=0,e.current.onerror=null,e.current.oncanplay=null),Q.current&&(clearTimeout(Q.current),Q.current=null),s(!1),l(!0),d(null),D(!1),W(!1),i(X),te.current=X.id,H.current=!0)},oe=async X=>{const we=e.current;if(!we||!X)return!1;if(we.src===X&&!we.error)try{return we.volume=c,await we.play(),s(!0),l(!1),!0}catch(Se){console.error("Erreur relecture stream:",Se)}return l(!0),s(!1),d(null),new Promise(Se=>{let Te=null,Ce=!1;const De=()=>{Te&&clearTimeout(Te),we.onerror=null},ze=Ue=>{Ce||(Ce=!0,De(),Se(Ue))},Ie=Ue=>{console.error("Erreur stream:",Ue),W(!0),l(!1),s(!1),ze(!1)};we.onerror=Ie,we.src=X,we.volume=c,we.play().then(()=>{s(!0),l(!1),ze(!0)}).catch(Ue=>{console.error("Erreur lecture stream:",Ue),Ie(Ue)}),Te=setTimeout(()=>{console.warn("Timeout stream, fallback playlist:",X),W(!0),l(!1),s(!1);try{we.pause()}catch{}ze(!1)},5e3)})},j=()=>{if(!v.length)return;const X=v.reduce((Ie,Ue)=>Ie+Ue.duration,0),Se=Date.now()/1e3%X;let Te=0,Ce=0,De=0;for(let Ie=0;Ie<v.length;Ie++){if(Te+v[Ie].duration>Se){Ce=Ie,De=Se-Te;break}Te+=v[Ie].duration}const ze=v[Ce];if(d(ze),R(Ce),e.current){const Ie=ze.file.startsWith("http")?ze.file:`${tl}${ze.file}`;e.current.src=Ie,e.current.currentTime=De,e.current.volume=c,e.current.play().catch(Ue=>console.error("Erreur lecture playlist:",Ue)),s(!0),l(!1)}},ie=async()=>{var X;if(r){(X=e.current)==null||X.pause(),s(!1);return}n&&(n.streamUrl&&!B&&await oe(n.streamUrl)||(A&&v.length>0?j():(l(!0),H.current=!0)))},de=X=>{const we=parseFloat(X.target.value);u(we),p(!1),e.current&&(e.current.volume=we)},Ne=X=>{if(!X||isNaN(X))return"0:00";const we=Math.floor(X/60),Se=Math.floor(X%60);return`${we}:${Se.toString().padStart(2,"0")}`},Ee=()=>{const X=!h;p(X),e.current&&(e.current.muted=X)};return o.jsxs("div",{className:"fixed inset-0 z-50 overflow-hidden overflow-x-hidden max-w-screen",style:{fontFamily:"'Rajdhani', sans-serif",background:"#0a0000",maxWidth:"100vw",width:"100vw",boxSizing:"border-box"},children:[o.jsx("div",{className:"pointer-events-none fixed inset-0 z-10",style:{backgroundImage:"repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.18) 2px, rgba(0,0,0,0.18) 4px)"}}),o.jsx("div",{className:"pointer-events-none fixed inset-0 z-0",style:{background:"radial-gradient(ellipse at 50% 30%, rgba(180,0,0,0.18) 0%, transparent 70%)"}}),o.jsxs("div",{className:"relative z-20 h-screen flex flex-col overflow-x-hidden",children:[o.jsxs("div",{className:"border-b px-2 lg:px-8 py-5 flex items-center justify-between flex-shrink-0",style:{borderColor:"#8B0000",background:"rgba(10,0,0,0.95)"},children:[!M&&o.jsxs("button",{onClick:t,className:"flex items-center gap-2 transition-colors duration-200 group lg:w-auto w-8",style:{color:"#2596be"},children:[o.jsx(On,{className:"w-5 h-5 group-hover:text-white transition-colors"}),o.jsx("span",{className:"text-lg font-semibold tracking-widest uppercase hidden lg:inline",children:"Retour"})]}),M&&o.jsx("div",{className:"w-8 lg:w-32"}),o.jsxs("div",{className:"flex flex-col items-center flex-1 lg:flex-none",children:[o.jsxs("div",{className:"flex items-center gap-2 lg:gap-3",children:[o.jsx("div",{className:"w-2 h-2 rounded-full animate-pulse hidden lg:block",style:{backgroundColor:"#8B0000",boxShadow:"0 0 8px #ff0000"}}),o.jsx("span",{className:"text-2xl lg:text-4xl font-bold tracking-widest lg:tracking-[0.25em] uppercase",style:{color:"#2596be",textShadow:f?"3px 0 #ff0000, -3px 0 #00ffff":"0 0 20px rgba(0,180,255,0.8), 0 0 40px rgba(0,180,255,0.3)"},children:"RADIO"}),o.jsx("div",{className:"w-2 h-2 rounded-full animate-pulse hidden lg:block",style:{backgroundColor:"#8B0000",boxShadow:"0 0 8px #ff0000",animationDelay:"0.5s"}})]}),o.jsx("div",{className:"text-[0.5rem] lg:text-xs tracking-[0.3em] lg:tracking-[0.5em] mt-1",style:{color:"#8B0000"},children:"NIGHT CITY BROADCAST"})]}),o.jsx("div",{className:"w-8 lg:w-32"})]}),o.jsxs("div",{className:"flex flex-col lg:flex-row gap-0 flex-1 min-h-0 overflow-hidden",children:[!M&&o.jsxs("div",{className:"lg:w-[420px] lg:border-r flex-shrink-0 flex flex-col overflow-x-hidden overflow-y-hidden h-auto lg:h-full",style:{borderColor:"#3a0000",background:"rgba(8,0,0,0.97)"},children:[o.jsx("div",{className:"px-4 lg:px-6 py-4 border-b flex-shrink-0",style:{borderColor:"#3a0000"},children:o.jsx("div",{className:"text-xs tracking-wider lg:tracking-[0.4em] uppercase font-semibold text-center lg:text-left",style:{color:"#8B0000"},children:"— STATIONS DISPONIBLES —"})}),o.jsx("div",{className:"flex-1 overflow-y-auto max-h-[40vh] lg:max-h-none",style:{scrollbarWidth:"thin",scrollbarColor:"#3a0000 transparent"},children:m0.map((X,we)=>{const Se=(n==null?void 0:n.id)===X.id;return o.jsxs("div",{onClick:()=>pe(X),className:"w-full px-2 lg:px-6 py-4 border-b transition-all duration-200 relative cursor-pointer",style:{borderColor:"#1a0000",background:Se?"linear-gradient(90deg, rgba(0,180,255,0.08) 0%, transparent 100%)":"transparent"},children:[o.jsx("div",{className:"absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-200",style:{background:Se?"#2596be":"transparent",boxShadow:Se?"0 0 12px #2596be":"none"}}),o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("div",{className:"flex-shrink-0",children:o.jsx("img",{src:X.logo,alt:X.name,className:"w-16 h-16 object-contain rounded-sm",style:{filter:Se?"brightness(1.1)":"brightness(0.6)",border:Se?`2px solid ${X.color}40`:"2px solid transparent"}})}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[o.jsxs("span",{className:"text-lg font-bold tracking-widest",style:{color:Se?X.color:"#8B0000"},children:[X.freq," FM"]}),Se&&r&&o.jsx("span",{className:"text-sm animate-pulse",style:{color:"#22c55e"},children:"◉"})]}),o.jsx("div",{className:"text-base font-bold tracking-wider truncate transition-colors duration-200",style:{color:Se?"#ffffff":"#aaaaaa",textShadow:Se?`0 0 15px ${X.color}60`:"none"},children:X.name})]}),o.jsxs("div",{className:"flex-shrink-0 flex items-center gap-2",children:[Se&&r?o.jsxs(o.Fragment,{children:[o.jsx(qT,{active:!0,color:X.color}),o.jsx("button",{onClick:Te=>{Te.stopPropagation(),ie()},className:"w-8 h-8 rounded-sm flex items-center justify-center border transition-all duration-200 hover:scale-110 cursor-pointer",style:{borderColor:X.color,background:`${X.color}20`,color:X.color},children:o.jsx(Td,{className:"w-4 h-4"})})]}):Se&&a?o.jsx("div",{className:"w-8 h-8 rounded-sm flex items-center justify-center border",style:{borderColor:X.color,background:"transparent",color:X.color},children:o.jsx("div",{className:"w-4 h-4 border-2 border-t-transparent rounded-full animate-spin",style:{borderColor:X.color,borderTopColor:"transparent"}})}):Se?o.jsx("button",{onClick:Te=>{Te.stopPropagation(),ie()},className:"w-8 h-8 rounded-sm flex items-center justify-center border transition-all duration-200 hover:scale-110 cursor-pointer",style:{borderColor:X.color,background:"transparent",color:X.color},children:o.jsx(Fs,{className:"w-4 h-4 ml-0.5"})}):o.jsx("button",{onClick:Te=>{Te.stopPropagation(),pe(X)},className:"w-8 h-8 rounded-sm flex items-center justify-center border transition-all duration-200 hover:scale-110 cursor-pointer",style:{borderColor:X.color,background:"transparent",color:X.color,opacity:.6},children:o.jsx(Fs,{className:"w-4 h-4 ml-0.5"})}),o.jsxs("button",{onClick:Te=>{Te.stopPropagation(),he(X)},className:"w-8 h-8 rounded-sm flex items-center justify-center border transition-all duration-200 hover:scale-110 cursor-pointer relative",style:{borderColor:X.color,background:"transparent",color:X.color,opacity:Se?1:.6},title:"Copier le lien direct",children:[o.jsx(dS,{className:"w-4 h-4"}),q===X.id&&o.jsx("span",{className:"absolute -top-8 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap",style:{color:X.color},children:"Copié !"})]})]})]})]},X.id)})})]}),o.jsx("div",{className:"flex-1 flex items-center justify-center overflow-y-auto overflow-x-hidden p-2 lg:p-8",children:n?o.jsxs("div",{className:"flex flex-col items-center gap-4 lg:gap-8 w-full max-w-full lg:max-w-xl py-4 lg:py-0",children:[(M||window.innerWidth>=1024)&&o.jsx("div",{className:"flex items-center justify-center flex-shrink-0",children:o.jsx("img",{src:n.logo,alt:n.name,className:"w-48 h-48 lg:w-80 lg:h-80 object-contain",style:{filter:"brightness(1.2) drop-shadow(0 0 30px rgba(37, 150, 190, 0.5))"}})}),o.jsxs("div",{className:"text-center flex-shrink-0 px-2 max-w-full",children:[o.jsx("h2",{className:"text-2xl lg:text-5xl font-bold tracking-wide lg:tracking-widest uppercase mb-2 truncate",style:{color:n.color,textShadow:`0 0 30px ${n.color}80, 0 0 60px ${n.color}30`},children:n.name}),o.jsxs("div",{className:"text-xl lg:text-2xl font-bold tracking-wide lg:tracking-widest",style:{color:"#2596be"},children:[n.freq," FM"]})]}),M&&o.jsx("div",{className:"flex justify-center",children:a?o.jsx("div",{className:"w-16 h-16 rounded-full flex items-center justify-center border-2",style:{borderColor:n.color,background:"transparent"},children:o.jsx("div",{className:"w-8 h-8 border-2 border-t-transparent rounded-full animate-spin",style:{borderColor:n.color,borderTopColor:"transparent"}})}):o.jsx("button",{onClick:ie,className:"w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-200 hover:scale-110",style:{borderColor:n.color,background:r?`${n.color}20`:"transparent",color:n.color},children:r?o.jsx(Td,{className:"w-8 h-8"}):o.jsx(Fs,{className:"w-8 h-8 ml-1"})})}),r&&x?o.jsxs("div",{className:"text-center flex-shrink-0 px-2 max-w-full",children:[o.jsx("div",{className:"text-xs tracking-wider lg:tracking-[0.5em] mb-2",style:{color:"#8B0000"},children:"EN LECTURE"}),o.jsx("div",{className:"text-base lg:text-xl font-bold tracking-wide lg:tracking-wider mb-1 truncate",style:{color:"#ffffff"},children:x.name}),o.jsx("div",{className:"text-sm tracking-wide lg:tracking-widest truncate",style:{color:"#2596be"},children:x.artist}),o.jsxs("div",{className:"mt-3 flex items-center justify-center gap-2",children:[o.jsx("span",{className:"text-xs font-mono",style:{color:"#2596be"},children:Ne(y)}),o.jsx("span",{className:"text-xs",style:{color:"#555555"},children:"/"}),o.jsx("span",{className:"text-xs font-mono",style:{color:"#555555"},children:Ne(C)})]})]}):r?null:o.jsx("div",{className:"text-center py-4 flex-shrink-0",children:o.jsx("div",{className:"text-sm tracking-widest",style:{color:"#555555"},children:"APPUYEZ SUR PLAY"})}),o.jsx("div",{className:"hidden lg:flex flex-col items-center gap-6 w-full max-w-sm flex-shrink-0",children:o.jsx("div",{className:"w-full px-6 py-4 rounded-sm border",style:{borderColor:`${n.color}30`,background:"rgba(0,0,0,0.3)"},children:o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("button",{onClick:Ee,className:"transition-all duration-200 hover:scale-110",style:{color:h?"#555555":n.color},children:h?o.jsx(MS,{className:"w-6 h-6"}):o.jsx(Lx,{className:"w-6 h-6"})}),o.jsx("div",{className:"flex-1 relative",children:o.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:h?0:c,onChange:de,className:"w-full h-2 rounded-full appearance-none cursor-pointer",style:{background:`linear-gradient(to right, ${n.color} 0%, ${n.color} ${c*100}%, #1a0000 ${c*100}%, #1a0000 100%)`,accentColor:n.color}})}),o.jsx("span",{className:"text-xs font-bold tracking-wider min-w-[3ch]",style:{color:n.color},children:Math.round(c*100)})]})})})]}):o.jsxs("div",{className:"flex flex-col items-center gap-6 text-center",children:[o.jsx("div",{className:"text-2xl font-bold tracking-widest",style:{color:"#8B0000"},children:"SÉLECTIONNEZ UNE RADIO"}),o.jsx("div",{className:"text-sm tracking-wider",style:{color:"#555555"},children:"Cliquez sur une station dans la liste pour commencer"})]})})]})]}),o.jsx("audio",{ref:e,onEnded:k,preload:"auto"}),o.jsx("style",{children:`
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
      `})]})},YT=({events:t,onEventClick:e,filters:n})=>{const i=t&&Array.isArray(t)?t:[],r=new Date;r.setHours(0,0,0,0);const s=new Date(r);s.setDate(s.getDate()+1);const a=i.filter(u=>{if(!u.scheduledStartTime)return!1;const h=new Date(u.scheduledStartTime);if(!(n!=null&&n.startDate)&&!(n!=null&&n.endDate))return h>=r&&h<s;if(n!=null&&n.startDate){const p=new Date(n.startDate);if(p.setHours(0,0,0,0),h<p)return!1}if(n!=null&&n.endDate){const p=new Date(n.endDate);if(p.setHours(23,59,59,999),h>p)return!1}if(n!=null&&n.startTime){const[p,f]=n.startTime.split(":").map(Number),m=h.getHours(),_=h.getMinutes(),E=m*60+_,x=p*60+f;if(E<x)return!1}if(n!=null&&n.endTime){const[p,f]=n.endTime.split(":").map(Number),m=h.getHours(),_=h.getMinutes(),E=m*60+_,x=p*60+f;if(E>x)return!1}return!0}).sort((u,h)=>new Date(u.scheduledStartTime)-new Date(h.scheduledStartTime)),l=(n==null?void 0:n.startDate)||(n==null?void 0:n.endDate)||(n==null?void 0:n.startTime)||(n==null?void 0:n.endTime),c=l?"Événements filtrés":"Événements du jour";return o.jsx("div",{className:"lg:sticky lg:top-8 h-full",children:o.jsxs("div",{className:"bg-zinc-900/50 border border-zinc-800 p-6 rounded lg:rounded-l-none lg:border-l-0 flex flex-col h-full",children:[o.jsxs("h2",{className:"text-2xl font-bold text-white mb-6 flex items-center gap-2 flex-shrink-0",children:[o.jsx(Gr,{className:"w-6 h-6 text-cyan-400"}),c]}),o.jsx("div",{className:"overflow-y-auto flex-1 pr-2 -mr-2",children:a.length===0?o.jsx("div",{className:"text-center py-8",children:o.jsx("p",{className:"text-gray-500 text-sm",children:l?"Aucun événement ne correspond aux filtres":"Aucun événement prévu aujourd'hui"})}):o.jsx("div",{className:"space-y-4",children:a.map(u=>{const h=new Date(u.scheduledStartTime),p=u.scheduledEndTime?new Date(u.scheduledEndTime):null;return o.jsxs("div",{onClick:()=>e&&e(u),className:"border border-zinc-800 rounded p-4 hover:border-cyan-500/50 transition-colors cursor-pointer",children:[u.image&&o.jsx("img",{src:u.image,alt:u.name,className:"w-full h-32 object-cover rounded mb-3"}),u.status===2&&o.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[o.jsx("div",{className:"w-2 h-2 rounded-full bg-red-500 animate-pulse"}),o.jsx("span",{className:"text-xs font-semibold text-red-400",children:"EN COURS"})]}),o.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:u.name}),o.jsxs("div",{className:"space-y-1 text-sm text-gray-400 mb-3",children:[l&&o.jsx("div",{className:"text-xs font-semibold text-cyan-400 mb-1",children:h.toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long"})}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Gr,{className:"w-4 h-4"}),o.jsxs("span",{children:[h.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}),p&&` - ${p.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}`]})]}),u.location&&o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(hc,{className:"w-4 h-4"}),o.jsx("span",{className:"text-xs",children:u.location})]})]}),u.description&&o.jsx("p",{className:"text-sm text-gray-400 line-clamp-3",children:u.description})]},u.id)})})})]})})},KT=({events:t,onDayClick:e,filters:n})=>{const r=(t&&Array.isArray(t)?t:[]).filter(x=>{if(!x.scheduledStartTime)return!1;const d=new Date(x.scheduledStartTime);if(n!=null&&n.startDate){const v=new Date(n.startDate);if(v.setHours(0,0,0,0),d<v)return!1}if(n!=null&&n.endDate){const v=new Date(n.endDate);if(v.setHours(23,59,59,999),d>v)return!1}if(n!=null&&n.startTime){const[v,w]=n.startTime.split(":").map(Number),y=d.getHours(),T=d.getMinutes(),C=y*60+T,L=v*60+w;if(C<L)return!1}if(n!=null&&n.endTime){const[v,w]=n.endTime.split(":").map(Number),y=d.getHours(),T=d.getMinutes(),C=y*60+T,L=v*60+w;if(C>L)return!1}return!0}),s=new Date,[a,l]=K.useState(new Date(s.getFullYear(),s.getMonth(),1)),c=a.toLocaleString("fr-FR",{month:"long",year:"numeric"}),u=new Date(a.getFullYear(),a.getMonth(),1),h=new Date(a.getFullYear(),a.getMonth()+1,0),p=u.getDay()===0?6:u.getDay()-1,f=h.getDate(),m=()=>{l(new Date(a.getFullYear(),a.getMonth()-1,1))},_=()=>{l(new Date(a.getFullYear(),a.getMonth()+1,1))},E={};return r.forEach(x=>{if(x.scheduledStartTime){const d=new Date(x.scheduledStartTime),v=`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;E[v]||(E[v]=[]),E[v].push(x)}}),o.jsxs("div",{className:"bg-zinc-900/50 border border-zinc-800 p-6 rounded lg:rounded-r-none lg:border-r-0 h-full",children:[o.jsxs("h2",{className:"text-2xl font-bold text-white mb-6 flex items-center gap-2",children:[o.jsx(ph,{className:"w-6 h-6 text-cyan-400"}),"Calendrier"]}),o.jsxs("div",{className:"flex items-center justify-between mb-4",children:[o.jsx("button",{onClick:m,className:"p-2 hover:bg-zinc-800 rounded transition-colors",title:"Mois précédent",children:o.jsx(aS,{className:"w-5 h-5 text-cyan-400"})}),o.jsx("div",{className:"text-xl font-semibold text-cyan-400 capitalize",children:c}),o.jsx("button",{onClick:_,className:"p-2 hover:bg-zinc-800 rounded transition-colors",title:"Mois suivant",children:o.jsx(oS,{className:"w-5 h-5 text-cyan-400"})})]}),o.jsx("div",{className:"grid grid-cols-7 gap-2 mb-2",children:["Lun","Mar","Mer","Jeu","Ven","Sam","Dim"].map(x=>o.jsx("div",{className:"text-center text-sm font-semibold text-gray-400 py-2",children:x},x))}),o.jsxs("div",{className:"grid grid-cols-7 gap-2",children:[Array.from({length:p}).map((x,d)=>o.jsx("div",{className:"aspect-square"},`empty-${d}`)),Array.from({length:f}).map((x,d)=>{var L;const v=d+1,w=new Date(a.getFullYear(),a.getMonth(),v),y=`${w.getFullYear()}-${w.getMonth()}-${w.getDate()}`,T=((L=E[y])==null?void 0:L.length)>0,C=v===s.getDate()&&a.getMonth()===s.getMonth()&&a.getFullYear()===s.getFullYear();return o.jsxs("div",{onClick:()=>T&&e&&e(E[y],w),className:`aspect-square flex flex-col items-center justify-center rounded border ${C?"border-cyan-500 bg-cyan-500/20 text-cyan-400 font-bold shadow-[0_0_10px_rgba(6,182,212,0.5)]":T?"border-zinc-700 bg-zinc-800/50 text-white hover:border-cyan-500/50 cursor-pointer transition-colors":"border-zinc-800/50 text-gray-500"}`,children:[o.jsx("span",{className:"text-sm",children:v}),T&&o.jsx("div",{className:"flex gap-0.5 mt-1",children:E[y].slice(0,3).map((g,R)=>o.jsx("div",{className:"w-1 h-1 rounded-full bg-cyan-400"},R))})]},v)})]})]})},ZT=({events:t,date:e,onClose:n,onEventClick:i})=>{if(!t||t.length===0)return null;const r=[...t].sort((a,l)=>new Date(a.scheduledStartTime)-new Date(l.scheduledStartTime)),s=e.toLocaleDateString("fr-FR",{weekday:"long",day:"numeric",month:"long",year:"numeric"});return o.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80",onClick:n,children:o.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-lg p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto",onClick:a=>a.stopPropagation(),children:[o.jsxs("div",{className:"flex items-center justify-between mb-6",children:[o.jsx("h2",{className:"text-2xl font-bold text-white capitalize",children:s}),o.jsx("button",{onClick:n,className:"text-gray-400 hover:text-white transition-colors",children:o.jsx(pc,{className:"w-6 h-6"})})]}),o.jsx("div",{className:"space-y-4",children:r.map(a=>{const l=new Date(a.scheduledStartTime),c=a.scheduledEndTime?new Date(a.scheduledEndTime):null;return o.jsxs("div",{onClick:()=>i&&i(a),className:"border border-zinc-800 rounded p-4 hover:border-cyan-500/50 transition-colors cursor-pointer",children:[a.image&&o.jsx("img",{src:a.image,alt:a.name,className:"w-full h-32 object-cover rounded mb-3"}),a.status===2&&o.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[o.jsx("div",{className:"w-2 h-2 rounded-full bg-red-500 animate-pulse"}),o.jsx("span",{className:"text-xs font-semibold text-red-400",children:"EN COURS"})]}),o.jsx("h3",{className:"text-lg font-bold text-white mb-2",children:a.name}),o.jsxs("div",{className:"space-y-1 text-sm text-gray-400",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Gr,{className:"w-4 h-4"}),o.jsxs("span",{children:[l.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"}),c&&` - ${c.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})}`]})]}),a.location&&o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(hc,{className:"w-4 h-4"}),o.jsx("span",{className:"text-xs",children:a.location})]})]})]},a.id)})})]})})},QT=({event:t,onClose:e})=>{if(!t)return null;const n=new Date(t.scheduledStartTime),i=t.scheduledEndTime?new Date(t.scheduledEndTime):null;return o.jsx("div",{className:"fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80",onClick:e,children:o.jsxs("div",{className:"bg-zinc-900 border border-zinc-800 rounded-lg p-6 max-w-3xl w-full max-h-[80vh] overflow-y-auto",onClick:r=>r.stopPropagation(),children:[o.jsxs("div",{className:"flex items-center justify-between mb-6",children:[o.jsx("h2",{className:"text-3xl font-bold text-white",children:t.name}),o.jsx("button",{onClick:e,className:"text-gray-400 hover:text-white transition-colors",children:o.jsx(pc,{className:"w-6 h-6"})})]}),t.image&&o.jsx("img",{src:t.image,alt:t.name,className:"w-full h-64 object-cover rounded mb-6"}),t.status===2&&o.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[o.jsx("div",{className:"w-3 h-3 rounded-full bg-red-500 animate-pulse"}),o.jsx("span",{className:"text-sm font-semibold text-red-400",children:"ÉVÉNEMENT EN COURS"})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[o.jsxs("div",{className:"flex items-center gap-3 text-gray-300",children:[o.jsx(Gr,{className:"w-5 h-5 text-cyan-400"}),o.jsxs("div",{children:[o.jsx("p",{className:"text-sm text-gray-500",children:"Horaire"}),o.jsx("p",{className:"font-semibold",children:n.toLocaleString("fr-FR",{weekday:"long",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit"})}),i&&o.jsxs("p",{className:"text-sm text-gray-400",children:["Fin : ",i.toLocaleTimeString("fr-FR",{hour:"2-digit",minute:"2-digit"})]})]})]}),t.location&&o.jsxs("div",{className:"flex items-center gap-3 text-gray-300",children:[o.jsx(hc,{className:"w-5 h-5 text-cyan-400"}),o.jsxs("div",{children:[o.jsx("p",{className:"text-sm text-gray-500",children:"Lieu"}),o.jsx("p",{className:"font-semibold",children:t.location})]})]}),t.userCount&&o.jsxs("div",{className:"flex items-center gap-3 text-gray-300",children:[o.jsx(wS,{className:"w-5 h-5 text-cyan-400"}),o.jsxs("div",{children:[o.jsx("p",{className:"text-sm text-gray-500",children:"Participants"}),o.jsxs("p",{className:"font-semibold",children:[t.userCount," inscrits"]})]})]})]}),t.description&&o.jsxs("div",{className:"mt-6",children:[o.jsx("h3",{className:"text-xl font-bold text-white mb-3",children:"Description"}),o.jsx("div",{className:"text-gray-300 whitespace-pre-wrap leading-relaxed",children:t.description})]})]})})},JT=({filters:t,onFiltersChange:e})=>{const n=(a,l)=>{e({...t,[a]:l})},i=(a,l)=>{e({...t,[a]:l})},r=()=>{e({startDate:"",endDate:"",startTime:"",endTime:""})},s=t.startDate||t.endDate||t.startTime||t.endTime;return o.jsxs("div",{className:"bg-zinc-900/50 border border-zinc-800 p-4 rounded mb-6",children:[o.jsxs("div",{className:"flex items-center justify-between mb-4",children:[o.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[o.jsx(ph,{className:"w-5 h-5 text-cyan-400"}),"Filtres"]}),s&&o.jsxs("button",{onClick:r,className:"text-sm text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-1",children:[o.jsx(pc,{className:"w-4 h-4"}),"Réinitialiser"]})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Date de début"}),o.jsx("input",{type:"date",value:t.startDate,onChange:a=>n("startDate",a.target.value),className:"w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white focus:border-cyan-500 focus:outline-none"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-sm text-gray-400 mb-2",children:"Date de fin"}),o.jsx("input",{type:"date",value:t.endDate,onChange:a=>n("endDate",a.target.value),className:"w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white focus:border-cyan-500 focus:outline-none"})]}),o.jsxs("div",{children:[o.jsxs("label",{className:"block text-sm text-gray-400 mb-2 flex items-center gap-2",children:[o.jsx(Gr,{className:"w-4 h-4"}),"Heure de début"]}),o.jsx("input",{type:"time",value:t.startTime,onChange:a=>i("startTime",a.target.value),className:"w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white focus:border-cyan-500 focus:outline-none"})]}),o.jsxs("div",{children:[o.jsxs("label",{className:"block text-sm text-gray-400 mb-2 flex items-center gap-2",children:[o.jsx(Gr,{className:"w-4 h-4"}),"Heure de fin"]}),o.jsx("input",{type:"time",value:t.endTime,onChange:a=>i("endTime",a.target.value),className:"w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white focus:border-cyan-500 focus:outline-none"})]})]}),s&&o.jsxs("div",{className:"mt-3 flex flex-wrap gap-2",children:[t.startDate&&o.jsxs("span",{className:"text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded",children:["Depuis: ",new Date(t.startDate).toLocaleDateString("fr-FR")]}),t.endDate&&o.jsxs("span",{className:"text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded",children:["Jusqu'à: ",new Date(t.endDate).toLocaleDateString("fr-FR")]}),t.startTime&&o.jsxs("span",{className:"text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded",children:["Après: ",t.startTime]}),t.endTime&&o.jsxs("span",{className:"text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded",children:["Avant: ",t.endTime]})]})]})},eC=()=>{const[t,e]=K.useState(""),[n,i]=K.useState([]),[r,s]=K.useState(0),[a,l]=K.useState([]),[c,u]=K.useState(null),[h,p]=K.useState(null),[f,m]=K.useState(!1),[_,E]=K.useState(1),[x,d]=K.useState(0),[v,w]=K.useState(0),[y,T]=K.useState(!0),[C,L]=K.useState("stanza"),[g,R]=K.useState([]),[A,D]=K.useState([]),[B,W]=K.useState(!1),[te,H]=K.useState(""),[Q,q]=K.useState(""),[b,M]=K.useState(null),[I,k]=K.useState(!1),[F,he]=K.useState(!1),[pe,oe]=K.useState(!1),j=K.useRef(null),ie=K.useRef(null),de=K.useRef(null),Ne=K.useRef(null),Ee=K.useRef(null);K.useEffect(()=>{if(t){const z=t.split(`
`);i(z),l(new Array(z.length).fill(null));const ee=z.findIndex(ge=>ge.trim()!==""&&!qe(ge));s(ee>=0?ee:0)}else i([]),l([]),s(0)},[t]),K.useEffect(()=>{j.current&&(j.current.volume=_)},[_]),K.useEffect(()=>{const z=j.current;if(!z)return;const ee=()=>d(z.currentTime),ge=()=>w(z.duration),_e=()=>m(!1);return z.addEventListener("timeupdate",ee),z.addEventListener("loadedmetadata",ge),z.addEventListener("ended",_e),()=>{z.removeEventListener("timeupdate",ee),z.removeEventListener("loadedmetadata",ge),z.removeEventListener("ended",_e)}},[h]),K.useEffect(()=>{const z=ee=>{const ge=ee.target;ge.tagName==="INPUT"||ge.tagName==="TEXTAREA"||ee.code==="Space"&&j.current&&n.length>0&&(ee.preventDefault(),b!==null?Me():Xe())};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[r,n,x,b]),K.useEffect(()=>{if(pe&&f&&j.current){let z=0;for(let ee=n.length-1;ee>=0;ee--)if(!qe(n[ee])&&a[ee]!==null&&a[ee]<=x){z=ee;break}b===null&&s(z)}},[pe,f,x,a,n,b]);const X=z=>{const ee=z.target.files[0];ee&&we(ee)},we=z=>{if(z&&z.type.startsWith("audio/")){u(z);const ee=URL.createObjectURL(z);if(p(ee),d(0),m(!1),!te.trim()){const ge=z.name.replace(/\.[^/.]+$/,"");H(ge)}}},Se=z=>{z.preventDefault(),z.stopPropagation(),k(!0)},Te=z=>{z.preventDefault(),z.stopPropagation(),k(!1)},Ce=z=>{z.preventDefault(),z.stopPropagation(),k(!1);const ee=z.dataTransfer.files;if(ee.length>0){const ge=ee[0];ge.type.startsWith("audio/")&&we(ge)}},De=z=>{z.preventDefault(),z.stopPropagation(),he(!0)},ze=z=>{z.preventDefault(),z.stopPropagation(),he(!1)},Ie=z=>{z.preventDefault(),z.stopPropagation(),he(!1);const ee=z.dataTransfer.files;if(ee.length>0){const ge=ee[0];if(ge.type==="application/json"||ge.name.endsWith(".json")){const _e=new FileReader;_e.onload=be=>{try{const Ae=JSON.parse(be.target.result);Ae.songTitle&&H(Ae.songTitle),Ae.customCommand&&q(Ae.customCommand),Ae.lyrics&&e(Ae.lyrics),Ae.timestamps&&l(Ae.timestamps),typeof Ae.currentLineIndex<"u"&&s(Ae.currentLineIndex),Ae.options&&(typeof Ae.options.addMusicNote<"u"&&T(Ae.options.addMusicNote),typeof Ae.options.exportMode<"u"?L(Ae.options.exportMode):typeof Ae.options.exportByStanza<"u"&&L(Ae.options.exportByStanza?"stanza":"line"),typeof Ae.options.customSeparators<"u"&&R(Ae.options.customSeparators)),M(null),oe(!1),m(!1),j.current&&(j.current.pause(),j.current.currentTime=0)}catch(Ae){console.error("Erreur lors du chargement du projet:",Ae)}},_e.readAsText(ge)}else if(ge.type==="text/plain"||ge.name.endsWith(".txt")){const _e=new FileReader;_e.onload=be=>{e(be.target.result)},_e.readAsText(ge)}}},Ue=()=>{j.current&&(f?j.current.pause():j.current.play(),m(!f))},Ke=()=>{j.current&&(j.current.pause(),j.current.currentTime=0,m(!1))},Xe=()=>{if(r<n.length&&j.current){const z=[...a];z[r]=j.current.currentTime,l(z);let ee=r+1;for(;ee<n.length&&qe(n[ee]);)ee++;s(ee)}},Qe=z=>{if(!z||isNaN(z))return"0:00";const ee=Math.floor(z/60),ge=Math.floor(z%60);return`${ee}:${ge.toString().padStart(2,"0")}`},V=z=>z.trim(),qe=z=>{const ee=z.trim();return ee===""||ee.startsWith("[")||ee.startsWith("(")},Ze=z=>z.trim()==="",U=z=>{for(let ee=z-1;ee>=0;ee--)if(!Ze(n[ee]))return{index:ee,text:n[ee]};return null},S=z=>{for(let ee=z+1;ee<n.length;ee++)if(!Ze(n[ee]))return{index:ee,text:n[ee]};return null},G=()=>{if(n.length===0)return;let z=[];const ee=a.find(O=>O!==null);if(te.trim()){let O=`/echo ${te.trim()}`;if(ee!==null&&ee>0){const ve=Math.round(ee);O+=` <wait.${ve}>`}z.push(O)}if(Q.trim()&&z.push(Q.trim()),C==="stanza"||C==="dynamic"||C==="custom"){let O=[],ve=null;const $=le=>le.map((xe,P)=>{if(P===le.length-1)return xe;const ne=xe.trim().slice(-1);return[".","?","!",",",";",":"].includes(ne)?xe:xe+"."}).join(" ");for(let le=0;le<n.length;le++){const xe=n[le],P=a[le],ne=C==="custom"&&g.includes(le-1);if(qe(xe)||ne){if(O.length>0){let ye=`/y ${$(O)}`;if(y&&(ye+=" ♪"),ve!==null){let Le=null;for(let Be=le+1;Be<n.length;Be++)if(!qe(n[Be])&&a[Be]!==null){Le=a[Be];break}if(Le!==null){const Be=Math.round(Le-ve);ye+=` <wait.${Be}>`}}z.push(ye),O=[],ve=null}if(!ne){const Z=V(xe);Z!==""&&z.push(`/echo ${Z}`)}}else if(ve===null&&P!==null&&(ve=P),O.push(V(xe)),C==="dynamic"&&O.length>=2){let Le=`/y ${$(O)}`;if(y&&(Le+=" ♪"),ve!==null){let Be=null;for(let tt=le+1;tt<n.length;tt++)if(!qe(n[tt])&&a[tt]!==null){Be=a[tt];break}if(Be!==null){const tt=Math.round(Be-ve);Le+=` <wait.${tt}>`}}z.push(Le),O=[],ve=null}}if(O.length>0){let xe=`/y ${$(O)}`;y&&(xe+=" ♪"),z.push(xe)}}else for(let O=0;O<n.length;O++){const ve=n[O],$=a[O];if(qe(ve)){const le=V(ve);le!==""&&z.push(`/echo ${le}`)}else{let le=`/y ${V(ve)}`;if(y&&(le+=" ♪"),$!==null){let xe=O+1;for(;xe<n.length;){if(!qe(n[xe])&&a[xe]!==null){const P=Math.round(a[xe]-$);le+=` <wait.${P}>`;break}xe++}}z.push(le)}}const ge=new Blob([z.join(`
`)],{type:"text/plain"}),_e=URL.createObjectURL(ge),be=document.createElement("a");be.href=_e;const Ae=C==="line"?"_ligne":C==="stanza"?"_strophe":C==="dynamic"?"_dynamique":"_personnalise",Ge=te.trim()?`${te.trim().replace(/\s+/g,"-").replace(/[<>:"/\\|?*]/g,"_")}${Ae}.txt`:`lyrics_macro${Ae}.txt`;be.download=Ge,document.body.appendChild(be),be.click(),document.body.removeChild(be),URL.revokeObjectURL(_e)},J=()=>{l(new Array(n.length).fill(null));const z=n.findIndex(ee=>!qe(ee));s(z>=0?z:0),M(null),Ke()},ue=z=>{qe(n[z])||(M(z),s(z))},Me=()=>{if(j.current&&r<n.length){const z=[...a];z[r]=j.current.currentTime,l(z),M(null);let ee=r+1;for(;ee<n.length&&qe(n[ee]);)ee++;s(ee)}},Pe=z=>{const ee=[...a];ee[z]=null,l(ee)},fe=()=>{const z={version:"1.0",songTitle:te,customCommand:Q,lyrics:t,timestamps:a,currentLineIndex:r,options:{addMusicNote:y,exportMode:C,customSeparators:g},metadata:{savedAt:new Date().toISOString(),linesCount:n.filter(Ae=>!Ze(Ae)).length,calibratedCount:a.filter(Ae=>Ae!==null).length}},ee=new Blob([JSON.stringify(z,null,2)],{type:"application/json"}),ge=URL.createObjectURL(ee),_e=document.createElement("a");_e.href=ge;const be=te.trim()?`${te.trim().replace(/\s+/g,"-").replace(/[<>:"/\\|?*]/g,"_")}-project.json`:"lyrics-project.json";_e.download=be,document.body.appendChild(_e),_e.click(),document.body.removeChild(_e),URL.revokeObjectURL(ge)},me=z=>{const ee=z.target.files[0];if(ee&&ee.type==="application/json"){const ge=new FileReader;ge.onload=_e=>{try{const be=JSON.parse(_e.target.result);be.songTitle&&H(be.songTitle),be.customCommand&&q(be.customCommand),be.lyrics&&e(be.lyrics),be.timestamps&&l(be.timestamps),typeof be.currentLineIndex<"u"&&s(be.currentLineIndex),be.options&&(typeof be.options.addMusicNote<"u"&&T(be.options.addMusicNote),typeof be.options.exportMode<"u"?L(be.options.exportMode):typeof be.options.exportByStanza<"u"&&L(be.options.exportByStanza?"stanza":"line"),typeof be.options.customSeparators<"u"&&R(be.options.customSeparators)),M(null),oe(!1),m(!1),j.current&&(j.current.pause(),j.current.currentTime=0),console.log("Projet chargé avec succès:",be.metadata)}catch(be){console.error("Erreur lors du chargement du projet:",be),alert("Erreur lors du chargement du fichier JSON")}},ge.readAsText(ee)}};return o.jsxs("div",{className:"fixed inset-0 bg-black z-50 overflow-y-auto flex flex-col",children:[o.jsx("div",{className:"flex-grow p-8",children:o.jsxs("div",{className:"max-w-[1800px] mx-auto",children:[o.jsxs("button",{onClick:()=>window.history.back(),className:"flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 mb-8 group",children:[o.jsx(On,{className:"w-5 h-5"}),o.jsx("span",{children:"Retour"})]}),o.jsxs("header",{className:"mb-8 text-center",children:[o.jsx("h1",{className:"text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white tracking-[0.15em] mb-4 drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]",children:"MACRO SYNC"}),o.jsxs("div",{className:"flex items-center justify-center gap-4 mb-4",children:[o.jsx("div",{className:"h-px w-12 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"}),o.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-cyan-500/80 shadow-[0_0_8px_rgba(6,182,212,0.6)]"}),o.jsx("div",{className:"h-px w-12 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"})]}),o.jsx("p",{className:"text-gray-400 text-sm mb-3",children:"Synchronisez vos paroles avec la musique et exportez en macro FFXIV"}),o.jsx("div",{className:"bg-blue-500/10 border border-blue-500/30 rounded px-4 py-3 max-w-2xl mx-auto",children:o.jsxs("p",{className:"text-blue-300 text-xs",children:["Nécessite le plugin"," ",o.jsx("button",{onClick:z=>{z.preventDefault(),navigator.clipboard.writeText("https://puni.sh/api/repository/croizat")},className:"inline-flex items-center px-2 py-0.5 bg-blue-500/20 border border-blue-500/40 rounded text-blue-200 hover:bg-blue-500/30 hover:border-blue-500/60 transition-all font-semibold",children:"SomethingNeedDoing"})," ","pour des macros étendues • Cliquez pour copier le repo"]})})]}),o.jsxs("div",{className:"mb-6 grid grid-cols-1 md:grid-cols-2 gap-4",children:[o.jsx("input",{type:"text",placeholder:"Titre de la chanson",value:te,onChange:z=>H(z.target.value),className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-cyan-500/50 transition-colors"}),o.jsx("input",{type:"text",placeholder:"Commande personnalisée (ex: /hum motion)",value:Q,onChange:z=>q(z.target.value),className:"w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-3 focus:outline-none focus:border-cyan-500/50 transition-colors"})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[o.jsxs("div",{className:"lg:col-span-3 flex flex-col gap-4 h-[600px]",children:[o.jsxs("div",{ref:Ne,onDragOver:De,onDragLeave:ze,onDrop:Ie,className:`bg-zinc-900/50 border p-4 flex-1 flex flex-col transition-all ${F?"border-cyan-400 border-2 bg-cyan-500/10":"border-zinc-800"}`,children:[o.jsxs("h2",{className:"text-white font-semibold mb-3 text-sm uppercase tracking-wider",children:["Lyrics ",F&&o.jsx("span",{className:"text-cyan-400",children:"• Déposez le fichier"})]}),o.jsx("textarea",{value:t,onChange:z=>e(z.target.value),placeholder:"Collez les lyrics ici...",className:"flex-1 bg-zinc-800/50 border border-zinc-700 text-white p-3 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors resize-none font-mono"}),o.jsxs("div",{className:"mt-3 text-xs text-gray-500",children:[n.filter(z=>!Ze(z)).length," ligne",n.filter(z=>!Ze(z)).length>1?"s":""," (",n.filter(z=>!qe(z)).length," à caler) • ",a.filter(z=>z!==null).length," calée",a.filter(z=>z!==null).length>1?"s":""]})]}),o.jsxs("div",{className:"bg-zinc-900/50 border border-zinc-800 p-4",children:[o.jsx("h2",{className:"text-white font-semibold mb-3 text-sm uppercase tracking-wider",children:"Musique"}),o.jsx("input",{type:"file",ref:ie,onChange:X,accept:"audio/*",className:"hidden"}),o.jsxs("div",{ref:de,onDragOver:Se,onDragLeave:Te,onDrop:Ce,onClick:()=>{var z;return(z=ie.current)==null?void 0:z.click()},className:`w-full px-4 py-3 transition-all cursor-pointer flex items-center justify-center gap-2 ${I?"bg-cyan-500/40 border-2 border-cyan-400 text-cyan-200 scale-105":"bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/30"}`,children:[o.jsx(Wr,{className:"w-4 h-4"}),o.jsx("span",{children:I?"Déposez le fichier ici":c?c.name:"Cliquez ou glissez un fichier audio"})]})]})]}),o.jsx("div",{className:"lg:col-span-6",children:o.jsxs("div",{className:"bg-zinc-900/50 border border-zinc-800 p-6 h-[600px] flex flex-col",children:[o.jsx("div",{className:"flex-1 flex items-center justify-center mb-6 overflow-hidden relative",style:{perspective:"1000px"},children:n.length>0&&r<n.length?o.jsxs("div",{className:"w-full max-w-3xl relative h-64 flex items-center justify-center",children:[(()=>{const z=U(r);return z&&o.jsx("div",{className:"absolute text-gray-600 text-xl font-light opacity-40 transition-all duration-500",style:{transform:"translateY(-80px) rotateX(15deg) scale(0.8)",transformOrigin:"center bottom"},children:z.text})})(),o.jsxs("div",{className:"absolute w-full text-center transition-all duration-500",children:[o.jsx("div",{className:"text-gray-500 text-sm mb-3",children:pe?o.jsx("span",{className:"text-purple-400",children:"🎵 MODE PRÉVISUALISATION"}):o.jsxs(o.Fragment,{children:["Ligne ",r+1," / ",n.length,b!==null&&o.jsx("span",{className:"ml-2 text-orange-400",children:"• MODE ÉDITION"})]})}),o.jsx("div",{className:"text-white text-3xl font-light leading-relaxed px-8",children:n[r]}),!pe&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"mt-4 text-cyan-400 text-sm",children:b!==null?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"text-orange-400",children:"🔄 Recalage"})," - Appuyez sur ESPACE au bon moment"]}):"/y - Appuyez sur ESPACE pour caler"}),a[r]!==null&&o.jsxs("div",{className:"mt-2 text-gray-500 text-xs",children:["Actuellement calé à ",Qe(a[r])]})]})]}),(()=>{const z=S(r);return z&&o.jsx("div",{className:"absolute text-gray-600 text-xl font-light opacity-40 transition-all duration-500",style:{transform:"translateY(80px) rotateX(-15deg) scale(0.8)",transformOrigin:"center top"},children:z.text})})()]}):r>=n.length&&n.length>0?o.jsx("div",{className:"text-green-400 text-2xl",children:"✓ Toutes les lignes sont calées !"}):o.jsx("div",{className:"text-gray-500 text-xl",children:"Collez vos paroles à gauche pour commencer"})}),h&&o.jsxs("div",{className:"bg-zinc-800/50 border border-zinc-700 p-6",children:[o.jsx("audio",{ref:j,src:h}),o.jsxs("div",{className:"mb-4",children:[o.jsx("input",{type:"range",min:"0",max:v||0,value:x,onChange:z=>{j.current&&(j.current.currentTime=parseFloat(z.target.value))},className:"w-full h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"}),o.jsxs("div",{className:"flex justify-between text-xs text-gray-500 mt-1",children:[o.jsx("span",{children:Qe(x)}),o.jsx("span",{children:Qe(v)})]})]}),o.jsxs("div",{className:"flex items-center justify-center gap-4 mb-4",children:[o.jsx("button",{onClick:Ue,className:"bg-cyan-500 text-black p-3 hover:bg-cyan-400 transition-colors",disabled:!h,children:f?o.jsx(Td,{className:"w-6 h-6"}):o.jsx(Fs,{className:"w-6 h-6"})}),o.jsx("button",{onClick:Ke,className:"bg-zinc-700 text-white p-3 hover:bg-zinc-600 transition-colors",disabled:!h,children:o.jsx(_S,{className:"w-6 h-6"})}),o.jsxs("div",{className:"flex items-center gap-2 ml-4",children:[o.jsx(Lx,{className:"w-5 h-5 text-gray-400"}),o.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:_,onChange:z=>E(parseFloat(z.target.value)),className:"w-24 h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"})]})]}),!pe&&o.jsx("button",{onClick:b!==null?Me:Xe,disabled:r>=n.length||!h,className:`w-full border-2 px-6 py-4 hover:border-cyan-500/60 transition-colors disabled:opacity-30 disabled:cursor-not-allowed font-semibold ${b!==null?"bg-orange-500/20 border-orange-500/40 text-orange-300 hover:bg-orange-500/30":"bg-cyan-500/20 border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/30"}`,children:b!==null?"🔄 RECALER LA LIGNE (ESPACE)":"CALER LA LIGNE (ESPACE)"}),b!==null&&o.jsx("button",{onClick:()=>{M(null);const z=a.findIndex((ee,ge)=>ee===null&&!qe(n[ge]));z>=0&&s(z)},className:"w-full bg-zinc-700/50 border border-zinc-600 text-gray-300 px-4 py-2 hover:bg-zinc-600/50 transition-colors text-sm",children:"Annuler l'édition"})]})]})}),o.jsxs("div",{className:"lg:col-span-3 flex flex-col gap-4 h-[600px]",children:[o.jsxs("div",{className:"bg-zinc-900/50 border border-zinc-800 p-4",children:[o.jsxs("h2",{className:"text-white font-semibold mb-4 text-sm uppercase tracking-wider flex items-center gap-2",children:[o.jsx(im,{className:"w-4 h-4"}),"Options"]}),o.jsxs("div",{className:"space-y-3",children:[o.jsxs("label",{className:"flex items-center gap-3 cursor-pointer group",children:[o.jsx("input",{type:"checkbox",checked:y,onChange:z=>T(z.target.checked),className:"w-4 h-4 accent-cyan-500"}),o.jsx("span",{className:"text-gray-300 text-sm group-hover:text-white transition-colors",children:"Ajouter ♪ aux phrases"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block text-gray-300 text-sm mb-2",children:"Mode d'export"}),o.jsxs("select",{value:C,onChange:z=>L(z.target.value),className:"w-full bg-zinc-800 border border-zinc-700 text-white px-3 py-2 text-sm focus:outline-none focus:border-cyan-500/50 transition-colors",children:[o.jsx("option",{value:"line",children:"Ligne par ligne"}),o.jsx("option",{value:"stanza",children:"Strophe par strophe"}),o.jsx("option",{value:"dynamic",children:"Dynamique (demi-strophe)"}),o.jsx("option",{value:"custom",children:"Personnalisé"})]}),o.jsxs("p",{className:"text-gray-500 text-xs mt-1",children:[C==="line"&&"Chaque ligne = une macro",C==="stanza"&&"Regroupe les strophes complètes",C==="dynamic"&&"Découpe les strophes en 2 lignes",C==="custom"&&"Définissez vos propres groupes"]}),C==="custom"&&o.jsxs("button",{onClick:()=>W(!0),className:"w-full mt-2 bg-purple-500/20 border border-purple-500/40 text-purple-300 px-3 py-2 hover:bg-purple-500/30 transition-colors text-sm flex items-center justify-center gap-2",children:[o.jsx(im,{className:"w-4 h-4"}),"Configurer les groupes"]})]})]})]}),o.jsxs("div",{className:"bg-zinc-900/50 border border-zinc-800 p-4 flex-1 overflow-y-auto flex flex-col",children:[o.jsxs("div",{className:"flex-shrink-0",children:[o.jsx("h2",{className:"text-white font-semibold mb-2 text-sm uppercase tracking-wider",children:"Aperçu"}),o.jsx("p",{className:"text-gray-500 text-[10px] mb-3",children:"Cliquez sur une ligne pour la recaler • Survolez pour effacer"})]}),o.jsx("div",{className:"space-y-1 text-xs font-mono flex-1 overflow-y-auto",children:n.map((z,ee)=>{const ge=a[ee],_e=qe(z),be=V(z);if(Ze(z))return null;let Ae=null;if(!_e&&ge!==null){let Ge=ee+1;for(;Ge<n.length;){if(!qe(n[Ge])&&a[Ge]!==null){Ae=Math.round(a[Ge]-ge);break}Ge++}}return o.jsxs("div",{className:`group flex items-center justify-between gap-2 ${ee===r?"text-cyan-400 bg-cyan-500/10 border-l-2 border-cyan-500 pl-2":b===ee?"text-orange-400 bg-orange-500/10 border-l-2 border-orange-500 pl-2":_e?"text-yellow-400":ge!==null?"text-green-400":"text-gray-500"} py-1 ${_e?"":"cursor-pointer hover:bg-zinc-800/50"}`,onClick:()=>!_e&&ue(ee),title:_e?"Ligne /echo (non calable)":"Cliquer pour recaler cette ligne",children:[o.jsxs("div",{className:"flex-1 min-w-0",children:[_e?`/echo ${be}`:`/y ${be}${y?" ♪":""}`,Ae!==null&&o.jsxs("span",{className:"text-gray-600 ml-2",children:["<wait.",Ae,">"]}),!_e&&ge!==null&&o.jsxs("span",{className:"text-gray-600 ml-2 text-[10px]",children:["[",Qe(ge),"]"]})]}),!_e&&ge!==null&&o.jsx("button",{onClick:Ge=>{Ge.stopPropagation(),Pe(ee)},className:"opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-300 px-2 py-0.5 text-[10px] transition-opacity",title:"Effacer le calage",children:"✕"})]},ee)})})]}),o.jsxs("div",{className:"space-y-3 flex-shrink-0",children:[o.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[o.jsxs("button",{onClick:fe,disabled:n.length===0,className:"bg-blue-500/20 border border-blue-500/40 text-blue-300 px-3 py-2 hover:bg-blue-500/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm",children:[o.jsx(gS,{className:"w-4 h-4"}),"Sauvegarder"]}),o.jsxs("button",{onClick:()=>{var z;return(z=Ee.current)==null?void 0:z.click()},className:"bg-blue-500/20 border border-blue-500/40 text-blue-300 px-3 py-2 hover:bg-blue-500/30 transition-colors flex items-center justify-center gap-2 text-sm",children:[o.jsx(uS,{className:"w-4 h-4"}),"Charger"]}),o.jsx("input",{type:"file",ref:Ee,onChange:me,accept:"application/json,.json",className:"hidden"})]}),o.jsxs("button",{onClick:()=>{const z=!pe;oe(z),z&&j.current?(j.current.currentTime=0,j.current.play(),m(!0)):!z&&j.current&&(j.current.pause(),m(!1))},disabled:a.filter(z=>z!==null).length===0||!h,className:"w-full bg-purple-500/20 border border-purple-500/40 text-purple-300 px-4 py-3 hover:bg-purple-500/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-semibold",children:[o.jsx(Fs,{className:"w-4 h-4"}),pe?"Masquer":"Prévisualiser"," le résultat"]}),o.jsxs("button",{onClick:G,disabled:a.filter(z=>z!==null).length===0,className:"w-full bg-green-500/20 border border-green-500/40 text-green-300 px-4 py-3 hover:bg-green-500/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-semibold",children:[o.jsx(bd,{className:"w-4 h-4"}),"Exporter la macro"]}),o.jsx("button",{onClick:J,className:"w-full bg-red-500/20 border border-red-500/40 text-red-300 px-4 py-3 hover:bg-red-500/30 transition-colors flex items-center justify-center gap-2",children:"Réinitialiser"})]})]})]})]})}),B&&o.jsx("div",{className:"fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-8",children:o.jsxs("div",{className:"bg-zinc-900 border border-zinc-700 rounded-lg max-w-3xl w-full max-h-[80vh] flex flex-col",children:[o.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-zinc-700",children:[o.jsx("h2",{className:"text-white text-xl font-semibold",children:"Groupes personnalisés"}),o.jsx("button",{onClick:()=>{W(!1),D([])},className:"text-gray-400 hover:text-white transition-colors",children:"✕"})]}),o.jsxs("div",{className:"flex-1 overflow-y-auto p-6",children:[o.jsx("p",{className:"text-gray-400 text-sm mb-4",children:"Cliquez entre les lignes pour ajouter/retirer un séparateur • Ctrl/Shift pour sélection multiple"}),o.jsx("div",{className:"space-y-0 font-mono text-sm",children:n.map((z,ee)=>{const ge=qe(z),_e=Ze(z),be=a[ee],Ae=g.includes(ee);return _e?null:o.jsxs("div",{children:[o.jsx("div",{className:`px-3 py-2 ${ge?"text-yellow-400":be!==null?"text-green-400":"text-gray-500"}`,children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx("span",{className:"flex-1",children:V(z)}),!ge&&be!==null&&o.jsxs("span",{className:"text-gray-600 text-xs ml-2",children:["[",Qe(be),"]"]}),ge&&o.jsx("span",{className:"text-xs text-yellow-600 ml-2",children:"/echo"})]})}),ee<n.length-1&&!Ze(n[ee+1])&&o.jsx("div",{onClick:Ge=>{Ae?(R(O=>O.filter(ve=>ve!==ee)),D(O=>O.filter(ve=>ve!==ee))):R(O=>[...O,ee].sort((ve,$)=>ve-$))},className:`h-6 flex items-center justify-center cursor-pointer transition-all ${Ae?A.includes(ee)?"bg-blue-500/20":"bg-zinc-800/50 hover:bg-zinc-700/50":"hover:bg-cyan-500/10"}`,children:Ae?o.jsx("div",{onClick:Ge=>{if(Ge.stopPropagation(),Ge.ctrlKey||Ge.metaKey)D(O=>O.includes(ee)?O.filter(ve=>ve!==ee):[...O,ee]);else if(Ge.shiftKey&&A.length>0){const O=A[A.length-1],ve=Math.min(O,ee),$=Math.max(O,ee),le=g.filter(xe=>xe>=ve&&xe<=$);D(le)}else D([ee])},className:`w-full border-t-2 transition-colors ${A.includes(ee)?"border-blue-500":"border-zinc-600 hover:border-cyan-500"}`}):o.jsx("div",{className:"text-zinc-700 text-xs",children:"+ séparateur"})})]},ee)})})]}),o.jsxs("div",{className:"p-6 border-t border-zinc-700 flex items-center justify-between",children:[o.jsxs("div",{className:"text-sm text-gray-400",children:[g.length+1," groupe",g.length>0?"s":"",A.length>0&&o.jsxs("button",{onClick:()=>{R(z=>z.filter(ee=>!A.includes(ee))),D([])},className:"ml-4 text-red-400 hover:text-red-300 transition-colors",children:["Supprimer sélection (",A.length,")"]})]}),o.jsxs("div",{className:"flex gap-3",children:[o.jsx("button",{onClick:()=>{R([]),D([])},className:"px-4 py-2 bg-zinc-700 text-gray-300 hover:bg-zinc-600 transition-colors",children:"Réinitialiser"}),o.jsx("button",{onClick:()=>{W(!1),D([])},className:"px-4 py-2 bg-cyan-500 text-black hover:bg-cyan-400 transition-colors font-semibold",children:"Valider"})]})]})]})})]})},tC=()=>o.jsx("footer",{className:"border-t border-zinc-800 mt-auto relative z-10",children:o.jsx("div",{className:"max-w-7xl mx-auto px-8 py-8",children:o.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-4",children:[o.jsx("div",{children:o.jsxs("span",{className:"text-gray-400 text-sm",children:["Nexus - FFXIV © ",new Date().getFullYear()]})}),o.jsxs("a",{href:"https://discord.gg/KKJSb3rKjD",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 text-gray-400 hover:text-white transition-colors",children:[o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor",children:o.jsx("path",{d:"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"})}),o.jsx("span",{className:"text-sm font-medium",children:"Rejoindre le Discord"})]})]})})});function nC(){const[t,e]=K.useState(""),[n,i]=K.useState(null),[r,s]=K.useState(""),[a,l]=K.useState([]),[c,u]=K.useState([]),[h,p]=K.useState([]),[f,m]=K.useState("servers"),[_,E]=K.useState(""),[x,d]=K.useState("asc"),[v,w]=K.useState("asc"),[y,T]=K.useState(null),[C,L]=K.useState(!1),[g,R]=K.useState(!1),[A,D]=K.useState(!1),[B,W]=K.useState(!1),[te,H]=K.useState(!1),[Q,q]=K.useState(!1),[b,M]=K.useState(!1),[I,k]=K.useState(!1),[F,he]=K.useState(!1),[pe,oe]=K.useState(null),[j,ie]=K.useState(null),[de,Ne]=K.useState(null),[Ee,X]=K.useState({startDate:"",endDate:"",startTime:"",endTime:""}),[we,Se]=K.useState({images:[{url:"",position:{x:0,y:0},zoom:1},{url:"",position:{x:0,y:0},zoom:1},{url:"",position:{x:0,y:0},zoom:1}],currentImageIndex:0,avatar:"",avatarPosition:{x:0,y:0},avatarZoom:1,username:"Utilisateur",mentions:"",caption:"",hashtags:"",likes:"42",comments:[{username:"",text:"",likes:""},{username:"",text:"",likes:""},{username:"",text:"",likes:""}]}),[Te,Ce]=K.useState({images:[{url:"",position:{x:0,y:0},zoom:1},{url:"",position:{x:0,y:0},zoom:1},{url:"",position:{x:0,y:0},zoom:1}],currentImageIndex:0,avatar:"",avatarPosition:{x:0,y:0},avatarZoom:1,username:"Utilisateur",mentions:"",caption:"",likes:"42",isLocked:!1,comments:[{username:"",text:"",likes:""},{username:"",text:"",likes:""},{username:"",text:"",likes:""}]}),De=()=>{const P=new Date,ne=new Date(P.toLocaleString("en-US",{timeZone:"Europe/Paris"})),Z=ne.getHours().toString().padStart(2,"0"),ye=ne.getMinutes().toString().padStart(2,"0"),Le=ne.getDate(),tt=["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."][ne.getMonth()],an=ne.getFullYear();return`${Z}:${ye} · ${Le} ${tt} ${an}`},[ze,Ie]=K.useState({image:"",imagePosition:{x:0,y:0},imageZoom:1,avatar:"",avatarPosition:{x:0,y:0},avatarZoom:1,username:"Utilisateur",handle:"utilisateur",text:"",timestamp:De(),replies:"0",repings:"0",likes:"0"}),[Ue,Ke]=K.useState(!1),[Xe,Qe]=K.useState({x:0,y:0}),[V,qe]=K.useState(!1),[Ze,U]=K.useState({x:0,y:0}),[S,G]=K.useState(!1),[J,ue]=K.useState(!1),[Me,Pe]=K.useState(""),[fe,me]=K.useState([]),[z,ee]=K.useState("asc"),ge=P=>P.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");K.useEffect(()=>{const P=window.location.hash,ne=P.indexOf("?");if(ne>-1){const Z=P.substring(ne+1);new URLSearchParams(Z).get("radio")&&M(!0)}},[]),K.useEffect(()=>{setTimeout(()=>{const P=document.querySelector(".fixed.inset-0.overflow-y-auto");P?P.scrollTo(0,0):window.scrollTo(0,0)},0)},[n,C,g,A,B,te,Q,b,I]),K.useEffect(()=>{const P=()=>{const ne=window.location.hash.substring(1),Z=ne.indexOf("?"),ye=Z>-1?ne.substring(0,Z):ne;if(Z>-1?new URLSearchParams(ne.substring(Z+1)):new URLSearchParams,ye)if(ye==="macro-sync")k(!0),M(!1),L(!1),R(!1),D(!1),W(!1),H(!1),q(!1),i(null),T(null);else if(ye==="radio")M(!0),k(!1),L(!1),R(!1),D(!1),W(!1),H(!1),q(!1),i(null),T(null);else if(ye==="pyonpix/nightcity")L(!0),R(!1),D(!1),W(!1),H(!1),q(!1),M(!1),k(!1),i(null),T(null);else if(ye==="pyonpix/centreville")R(!0),L(!1),D(!1),W(!1),H(!1),q(!1),M(!1),k(!1),i(null),T(null);else if(ye==="pyonpix/pubs")D(!0),L(!1),R(!1),W(!1),H(!1),q(!1),M(!1),k(!1),i(null),T(null);else if(ye==="coven"||ye==="coven/")W(!0),L(!1),R(!1),D(!1),H(!1),q(!1),M(!1),k(!1),i(null),T(null);else if(ye==="coven/visualizer")H(!0),W(!1),q(!1),M(!1),k(!1),L(!1),R(!1),D(!1),i(null),T(null);else if(ye==="coven/dvd")q(!0),W(!1),H(!1),M(!1),k(!1),L(!1),R(!1),D(!1),i(null),T(null);else if(ye==="neolens"){const Le=Gi.find(Be=>Be.name==="Neolens");Le&&(i(O.find(Be=>Be.title==="RÉSEAUX")),T(Le),L(!1),R(!1),D(!1),W(!1),H(!1),q(!1))}else if(ye==="holofans"){const Le=Gi.find(Be=>Be.name==="Holofans");Le&&(i(O.find(Be=>Be.title==="RÉSEAUX")),T(Le),L(!1),R(!1),D(!1),W(!1),H(!1),q(!1))}else if(ye==="ping"){const Le=Gi.find(Be=>Be.name==="Ping");Le&&(i(O.find(Be=>Be.title==="RÉSEAUX")),T(Le),L(!1),R(!1),D(!1),W(!1),H(!1),q(!1))}else{const Le=O.find(Be=>ge(Be.title)===ye.toLowerCase());Le&&(i(Le),L(!1),R(!1),D(!1),W(!1),H(!1),q(!1),k(!1))}else i(null),T(null),L(!1),R(!1),D(!1),W(!1),H(!1),q(!1),M(!1),k(!1)};return P(),window.addEventListener("hashchange",P),()=>window.removeEventListener("hashchange",P)},[Gi]);const _e={Chaos:["Cerberus","Louisoix","Moogle","Omega","Phantom","Ragnarok","Sagittarius","Spriggan"],Light:["Alpha","Lich","Odin","Phoenix","Raiden","Shiva","Twintania","Zodiark"]},be=["La Coupe","Lavandière","Brumée","Empyrée","Shirogane"],Ae=["Bar","Lieu public","Nightclub","Boutique","Studio Photo"],Ge=ES,O=[{id:1,title:"ANNUAIRE",icon:sS},{id:2,title:"ARTISTES",icon:hS},{id:3,title:"ÉVÉNEMENTS",icon:ph},{id:4,title:"RÉSEAUX",icon:Xc},{id:5,title:"RESSOURCES",icon:bd}],ve=P=>{l(ne=>ne.includes(P)?ne.filter(Z=>Z!==P):[...ne,P])},$=P=>{u(ne=>ne.includes(P)?ne.filter(Z=>Z!==P):[...ne,P])},le=P=>{p(ne=>ne.includes(P)?ne.filter(Z=>Z!==P):[...ne,P])},xe=Ge.filter(P=>{const ne=P.name.toLowerCase().includes(r.toLowerCase()),Z=a.length===0||a.includes(P.server),ye=c.length===0||c.includes(P.location),Le=h.length===0||P.types.some(Be=>h.includes(Be));return ne&&Z&&ye&&Le}).sort((P,ne)=>x==="asc"?P.name.localeCompare(ne.name):ne.name.localeCompare(P.name));return o.jsxs("div",{className:"min-h-screen bg-black flex flex-col relative",children:[o.jsx(wr,{}),o.jsx("div",{className:"flex-grow p-8 relative z-10",children:o.jsxs("div",{className:"max-w-7xl mx-auto",children:[!n&&o.jsxs(o.Fragment,{children:[o.jsx("header",{className:"mb-20 text-center",children:o.jsxs("div",{className:"flex flex-col items-center justify-center gap-8",children:[o.jsxs("div",{className:"relative group",children:[o.jsx("div",{className:"absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),o.jsx("div",{className:"relative p-6 rounded-full border-2 border-cyan-500/30 bg-black/50 backdrop-blur-sm",children:o.jsx("img",{src:"media/nexus_logo.png",alt:"Nexus Logo",className:"w-32 h-32 object-contain drop-shadow-[0_0_25px_rgba(6,182,212,0.5)]"})})]}),o.jsxs("div",{className:"relative",children:[o.jsx("h1",{className:"text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white tracking-[0.2em] mb-4 drop-shadow-[0_0_30px_rgba(6,182,212,0.8)]",children:"NEXUS"}),o.jsxs("div",{className:"flex items-center justify-center gap-4 mb-4",children:[o.jsx("div",{className:"h-px w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"}),o.jsx("div",{className:"w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.8)]"}),o.jsx("div",{className:"h-px w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"})]}),o.jsx("p",{className:"text-cyan-400/80 text-sm tracking-[0.3em] uppercase font-light",children:"Final Fantasy XIV // Hub RP Cyber"})]})]})}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto",children:[O.map(P=>{const ne=P.icon;return o.jsx("button",{onClick:()=>{window.location.hash=ge(P.title),i(P)},className:"terminal-card group text-left",children:o.jsxs("div",{className:"flex items-center space-x-4",children:[o.jsx("div",{className:"text-white group-hover:text-cyan-400 transition-all duration-300",children:o.jsx(ne,{className:"w-7 h-7",strokeWidth:1.5})}),o.jsx("div",{className:"flex-1",children:o.jsx("h3",{className:"text-lg font-semibold text-white group-hover:text-cyan-100 tracking-wide transition-colors duration-300",children:P.title})}),o.jsx("div",{className:"text-gray-600 group-hover:text-cyan-400 transition-all duration-300 text-xs",children:"→"})]})},P.id)}),o.jsx("button",{onClick:()=>{window.location.hash="radio",M(!0)},className:"terminal-card group text-left",children:o.jsxs("div",{className:"flex items-center space-x-4",children:[o.jsx("div",{className:"text-white group-hover:text-cyan-400 transition-all duration-300",children:o.jsx(pS,{className:"w-7 h-7",strokeWidth:1.5})}),o.jsx("div",{className:"flex-1",children:o.jsx("h3",{className:"text-lg font-semibold text-white group-hover:text-cyan-100 tracking-wide transition-colors duration-300",children:"RADIO"})}),o.jsx("div",{className:"text-gray-600 group-hover:text-cyan-400 transition-all duration-300 text-xs",children:"→"})]})})]})]}),n&&n.title==="ANNUAIRE"&&o.jsxs("div",{className:"fixed inset-0 bg-black z-50 overflow-y-auto flex flex-col relative",children:[o.jsx(wr,{}),o.jsx("div",{className:"flex-grow relative z-10",children:o.jsxs("div",{className:"max-w-7xl mx-auto p-8 pb-16",children:[o.jsxs("button",{onClick:()=>{window.location.hash="",i(null)},className:"flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 mb-8 group",children:[o.jsx(On,{className:"w-5 h-5"}),o.jsx("span",{children:"Retour"})]}),o.jsxs("header",{className:"mb-8",children:[o.jsxs("div",{className:"text-center mb-8",children:[o.jsx("h1",{className:"text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white tracking-[0.15em] mb-4 drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]",children:"ANNUAIRE"}),o.jsxs("div",{className:"flex items-center justify-center gap-4 mb-4",children:[o.jsx("div",{className:"h-px w-12 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"}),o.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-cyan-500/80 shadow-[0_0_8px_rgba(6,182,212,0.6)]"}),o.jsx("div",{className:"h-px w-12 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"})]}),o.jsx("p",{className:"text-gray-400 text-sm",children:"Pour être ajouté à l'annuaire, créez un ticket sur le Discord"})]}),o.jsxs("div",{className:"flex gap-4 mb-6",children:[o.jsxs("div",{className:"relative flex-1",children:[o.jsx(qc,{className:"absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"}),o.jsx("input",{type:"text",placeholder:"Rechercher dans l'annuaire...",value:r,onChange:P=>s(P.target.value),className:"w-full bg-zinc-900/50 border border-zinc-800 text-white pl-12 pr-4 py-4 focus:outline-none focus:border-zinc-600 transition-colors"})]}),o.jsxs("select",{value:x,onChange:P=>d(P.target.value),className:"appearance-none bg-zinc-900/50 border border-zinc-800 text-white px-4 py-4 focus:outline-none focus:border-zinc-600 transition-colors cursor-pointer",children:[o.jsx("option",{value:"asc",children:"A → Z"}),o.jsx("option",{value:"desc",children:"Z → A"})]})]}),o.jsxs("div",{className:"mb-6",children:[o.jsxs("div",{className:"flex border-b border-zinc-800 mb-4",children:[o.jsx("button",{onClick:()=>m("servers"),className:`px-6 py-3 text-sm font-medium transition-colors ${f==="servers"?"text-white border-b-2 border-white":"text-gray-500 hover:text-gray-300"}`,children:"Serveurs"}),o.jsx("button",{onClick:()=>m("locations"),className:`px-6 py-3 text-sm font-medium transition-colors ${f==="locations"?"text-white border-b-2 border-white":"text-gray-500 hover:text-gray-300"}`,children:"Lieux"}),o.jsx("button",{onClick:()=>m("types"),className:`px-6 py-3 text-sm font-medium transition-colors ${f==="types"?"text-white border-b-2 border-white":"text-gray-500 hover:text-gray-300"}`,children:"Types"})]}),o.jsxs("div",{className:"bg-zinc-900/30 border border-zinc-800/50 p-6",children:[f==="servers"&&o.jsxs("div",{children:[o.jsxs("div",{className:"mb-6",children:[o.jsx("div",{className:"text-gray-400 text-xs font-bold mb-3 uppercase tracking-wider",children:"Chaos"}),o.jsx("div",{className:"flex flex-wrap gap-2",children:_e.Chaos.map(P=>o.jsx("button",{onClick:()=>ve(P),className:`px-4 py-2 text-sm font-medium transition-all ${a.includes(P)?"bg-white text-black":"bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white"}`,children:P},P))})]}),o.jsxs("div",{children:[o.jsx("div",{className:"text-gray-400 text-xs font-bold mb-3 uppercase tracking-wider",children:"Light"}),o.jsx("div",{className:"flex flex-wrap gap-2",children:_e.Light.map(P=>o.jsx("button",{onClick:()=>ve(P),className:`px-4 py-2 text-sm font-medium transition-all ${a.includes(P)?"bg-white text-black":"bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white"}`,children:P},P))})]})]}),f==="locations"&&o.jsx("div",{className:"flex flex-wrap gap-2",children:be.map(P=>o.jsx("button",{onClick:()=>$(P),className:`px-4 py-2 text-sm font-medium transition-all ${c.includes(P)?"bg-white text-black":"bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white"}`,children:P},P))}),f==="types"&&o.jsx("div",{className:"flex flex-wrap gap-2",children:Ae.map(P=>o.jsx("button",{onClick:()=>le(P),className:`px-4 py-2 text-sm font-medium transition-all ${h.includes(P)?"bg-white text-black":"bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white"}`,children:P},P))})]})]}),(a.length>0||c.length>0||h.length>0)&&o.jsxs("div",{className:"mt-6 p-4 bg-zinc-900/30 border border-zinc-800/50",children:[o.jsxs("div",{className:"flex items-center justify-between mb-3",children:[o.jsx("span",{className:"text-xs text-gray-500 uppercase tracking-wider",children:"Filtres actifs"}),o.jsx("button",{onClick:()=>{l([]),u([]),p([])},className:"text-xs text-gray-500 hover:text-white transition-colors",children:"Tout effacer"})]}),o.jsxs("div",{className:"flex flex-wrap gap-2",children:[a.map(P=>o.jsxs("button",{onClick:()=>ve(P),className:"px-3 py-1.5 bg-white text-black text-xs font-medium hover:bg-gray-300 transition-colors flex items-center gap-2",children:[P,o.jsx("span",{className:"text-lg leading-none",children:"×"})]},P)),c.map(P=>o.jsxs("button",{onClick:()=>$(P),className:"px-3 py-1.5 bg-white text-black text-xs font-medium hover:bg-gray-300 transition-colors flex items-center gap-2",children:[P,o.jsx("span",{className:"text-lg leading-none",children:"×"})]},P)),h.map(P=>o.jsxs("button",{onClick:()=>le(P),className:"px-3 py-1.5 bg-white text-black text-xs font-medium hover:bg-gray-300 transition-colors flex items-center gap-2",children:[P,o.jsx("span",{className:"text-lg leading-none",children:"×"})]},P))]})]})]}),o.jsxs("div",{className:"text-gray-500 text-sm font-medium mb-6 mt-8",children:[xe.length," établissement",xe.length>1?"s":""]}),o.jsxs("div",{className:"space-y-4",children:[xe.map(P=>o.jsx("div",{className:"establishment-card",children:o.jsxs("div",{className:"flex flex-col md:flex-row gap-6",children:[o.jsxs("div",{className:"flex-shrink-0 w-full md:w-[440px]",children:[P.banner?o.jsx("div",{className:"w-full h-[130px] overflow-hidden rounded border border-zinc-800 mb-3",children:o.jsx("img",{src:P.banner,alt:`Bannière ${P.name}`,className:"w-full h-full object-cover"})}):o.jsx("div",{className:"w-full h-[130px] rounded border border-zinc-800/50 bg-gradient-to-br from-zinc-900/50 via-zinc-800/30 to-zinc-900/50 flex items-center justify-center mb-3",children:o.jsx("div",{className:"w-20 h-1 bg-gradient-to-r from-cyan-500/30 via-cyan-400/50 to-cyan-500/30"})}),P.types&&P.types.length>0&&o.jsx("div",{className:"flex gap-2 flex-wrap",children:P.types.map(ne=>o.jsx("span",{className:"tag",children:ne},ne))})]}),o.jsx("div",{className:"flex-1 min-w-0",children:o.jsxs("div",{className:"flex items-start justify-between mb-4",children:[o.jsxs("div",{className:"flex-1",children:[o.jsx("h3",{className:"text-2xl font-bold text-white mb-3",children:P.name}),o.jsxs("div",{className:"space-y-2",children:[o.jsxs("div",{className:"flex flex-wrap items-center gap-x-3 gap-y-2 text-sm",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"text-gray-500 text-xs uppercase tracking-wider",children:P.datacenter}),o.jsx("span",{className:"w-1 h-1 bg-gray-700 rounded-full"}),o.jsx("span",{className:"text-gray-400 font-medium",children:P.server})]}),o.jsx("span",{className:"w-1 h-1 bg-gray-700 rounded-full"}),o.jsx("span",{className:"text-gray-400",children:P.location}),o.jsx("span",{className:"w-1 h-1 bg-gray-700 rounded-full"}),o.jsxs("div",{className:"flex items-center gap-2 text-gray-400",children:[o.jsx(hc,{className:"w-4 h-4"}),o.jsxs("span",{children:["Secteur ",P.secteur,P.annexe?" (Annexe)":""," - ",P.appartement?"Appartement ":"","N°",P.numero]})]})]}),P.horaires&&o.jsxs("div",{className:"flex items-start gap-2 text-gray-400 text-sm",children:[o.jsx(Gr,{className:"w-4 h-4 mt-0.5"}),o.jsx("div",{children:typeof P.horaires=="string"?o.jsx("span",{children:P.horaires}):o.jsx("div",{className:"space-y-0.5",children:P.horaires.map((ne,Z)=>o.jsxs("div",{children:[ne.jour," ",ne.heures]},Z))})})]})]})]}),o.jsxs("div",{className:"flex gap-3",children:[P.url&&o.jsx("a",{href:P.url,target:"_blank",rel:"noopener noreferrer",className:"btn-primary flex items-center gap-2",title:"Site web",children:o.jsx(Xc,{className:"w-4 h-4"})}),P.discord&&o.jsx("a",{href:P.discord,target:"_blank",rel:"noopener noreferrer",className:"btn-secondary flex items-center gap-2",title:"Discord",children:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:o.jsx("path",{d:"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"})})})]})]})})]})},P.id)),xe.length===0&&o.jsx("div",{className:"text-center py-12",children:o.jsx("p",{className:"text-gray-500",children:"Aucun établissement trouvé"})})]})]})})]}),n&&n.title==="ARTISTES"&&o.jsxs("div",{className:"fixed inset-0 bg-black z-50 overflow-y-auto flex flex-col relative",children:[o.jsx(wr,{}),o.jsx("div",{className:"flex-grow relative z-10",children:o.jsxs("div",{className:"max-w-7xl mx-auto p-8 pb-16",children:[o.jsxs("button",{onClick:()=>{window.location.hash="",i(null)},className:"flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 mb-8 group",children:[o.jsx(On,{className:"w-5 h-5"}),o.jsx("span",{children:"Retour"})]}),o.jsxs("header",{className:"mb-8",children:[o.jsxs("div",{className:"text-center mb-8",children:[o.jsx("h1",{className:"text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white tracking-[0.15em] mb-4 drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]",children:"ARTISTES"}),o.jsxs("div",{className:"flex items-center justify-center gap-4 mb-4",children:[o.jsx("div",{className:"h-px w-12 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"}),o.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-cyan-500/80 shadow-[0_0_8px_rgba(6,182,212,0.6)]"}),o.jsx("div",{className:"h-px w-12 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"})]}),o.jsx("p",{className:"text-gray-400 text-sm",children:"Pour être ajouté dans les artistes, créez un ticket sur le Discord"})]}),o.jsxs("div",{className:"flex gap-4 mb-6",children:[o.jsxs("div",{className:"relative flex-1",children:[o.jsx(qc,{className:"absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"}),o.jsx("input",{type:"text",placeholder:"Rechercher un artiste...",value:_,onChange:P=>E(P.target.value),className:"w-full bg-zinc-900/50 border border-zinc-800 text-white pl-12 pr-4 py-4 focus:outline-none focus:border-zinc-600 transition-colors"})]}),o.jsxs("select",{value:v,onChange:P=>w(P.target.value),className:"appearance-none bg-zinc-900/50 border border-zinc-800 text-white px-4 py-4 focus:outline-none focus:border-zinc-600 transition-colors cursor-pointer",children:[o.jsx("option",{value:"asc",children:"A → Z"}),o.jsx("option",{value:"desc",children:"Z → A"})]})]})]}),o.jsxs("div",{className:"text-gray-500 text-sm font-medium mb-6",children:[Lo.filter(P=>P.name.toLowerCase().includes(_.toLowerCase())).length," artiste",Lo.filter(P=>P.name.toLowerCase().includes(_.toLowerCase())).length>1?"s":""]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:Lo.filter(P=>P.name.toLowerCase().includes(_.toLowerCase())).sort((P,ne)=>v==="asc"?P.name.localeCompare(ne.name):ne.name.localeCompare(P.name)).map(P=>o.jsxs("div",{className:"establishment-card",children:[o.jsxs("div",{className:"flex items-start gap-4 mb-4",children:[P.logo&&o.jsx("img",{src:P.logo,alt:P.name,className:"h-16 max-w-32 object-contain"}),o.jsxs("div",{className:"flex-1",children:[o.jsx("h3",{className:"text-xl font-bold text-white mb-2",children:P.name}),o.jsx("p",{className:"text-gray-400 text-sm",children:P.styleMusical})]})]}),o.jsxs("div",{className:"flex gap-2 flex-wrap",children:[P.url&&o.jsx("a",{href:P.url,target:"_blank",rel:"noopener noreferrer",className:"btn-primary flex items-center gap-2",title:"Site web",children:o.jsx(Xc,{className:"w-4 h-4"})}),P.youtube&&o.jsx("a",{href:P.youtube,target:"_blank",rel:"noopener noreferrer",className:"btn-secondary flex items-center gap-2",title:"YouTube",children:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:o.jsx("path",{d:"M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"})})}),P.discord&&o.jsx("a",{href:P.discord,target:"_blank",rel:"noopener noreferrer",className:"btn-secondary flex items-center gap-2",title:"Discord",children:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:o.jsx("path",{d:"M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"})})})]})]},P.id))}),Lo.filter(P=>P.name.toLowerCase().includes(_.toLowerCase())).length===0&&o.jsx("div",{className:"text-center py-12",children:o.jsx("p",{className:"text-gray-500",children:"Aucun artiste trouvé"})})]})})]}),n&&n.title==="RESSOURCES"&&o.jsxs("div",{className:"fixed inset-0 bg-black z-50 overflow-y-auto flex flex-col relative",children:[o.jsx(wr,{}),o.jsx("div",{className:"flex-grow relative z-10",children:o.jsxs("div",{className:"max-w-7xl mx-auto p-8 pb-16",children:[o.jsxs("button",{onClick:()=>{window.location.hash="",i(null)},className:"flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 mb-8 group",children:[o.jsx(On,{className:"w-5 h-5"}),o.jsx("span",{children:"Retour"})]}),o.jsxs("header",{className:"mb-8",children:[o.jsxs("div",{className:"text-center mb-8",children:[o.jsx("h1",{className:"text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white tracking-[0.15em] mb-4 drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]",children:"RESSOURCES"}),o.jsxs("div",{className:"flex items-center justify-center gap-4",children:[o.jsx("div",{className:"h-px w-12 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"}),o.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-cyan-500/80 shadow-[0_0_8px_rgba(6,182,212,0.6)]"}),o.jsx("div",{className:"h-px w-12 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"})]})]}),o.jsxs("div",{className:"flex gap-4 mb-6",children:[o.jsxs("div",{className:"relative flex-1",children:[o.jsx(qc,{className:"absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"}),o.jsx("input",{type:"text",placeholder:"Rechercher une ressource...",value:Me,onChange:P=>Pe(P.target.value),className:"w-full bg-zinc-900/50 border border-zinc-800 text-white pl-12 pr-4 py-4 focus:outline-none focus:border-zinc-600 transition-colors"})]}),o.jsxs("select",{value:z,onChange:P=>ee(P.target.value),className:"appearance-none bg-zinc-900/50 border border-zinc-800 text-white px-4 py-4 focus:outline-none focus:border-zinc-600 transition-colors cursor-pointer",children:[o.jsx("option",{value:"asc",children:"A → Z"}),o.jsx("option",{value:"desc",children:"Z → A"})]})]}),o.jsxs("div",{className:"mb-6",children:[o.jsx("div",{className:"text-gray-400 text-xs font-bold mb-3 uppercase tracking-wider",children:"Filtrer par tag"}),o.jsx("div",{className:"flex flex-wrap gap-2",children:["PyonPix","Meuble","Meuble de jardin","Mascotte","Utilitaire"].map(P=>o.jsx("button",{onClick:()=>{fe.includes(P)?me(fe.filter(ne=>ne!==P)):me([...fe,P])},className:`px-4 py-2 text-sm font-medium transition-all ${fe.includes(P)?"bg-white text-black":"bg-zinc-800 text-gray-400 hover:bg-zinc-700 hover:text-white"}`,children:P},P))})]})]}),(()=>{const ne=[{title:"PyonPix: Night City",description:"Timelapse 24h de Night City synchronisé avec l'heure UTC+1",url:"#pyonpix/nightcity",tags:["PyonPix"],isInternal:!0,requiresPyonPix:!0},{title:"PyonPix: Night City - Centre ville",description:"Boucle vidéo montrant le centre ville de Night City",url:"#pyonpix/centreville",tags:["PyonPix"],isInternal:!0,requiresPyonPix:!0},{title:"PyonPix: Cyberpunk - Pubs",description:"Boucle vidéo montrant les pubs de Cyberpunk 2077",url:"#pyonpix/pubs",tags:["PyonPix"],isInternal:!0,requiresPyonPix:!0},{title:"Macro Sync",description:"Outil pour synchroniser des paroles avec une musique et exporter en macro FFXIV",url:"#macro-sync",tags:["Utilitaire"],isInternal:!0},{title:"Cyberpunk - Paysages magiques",description:"Mod modifiant les paysages magiques du jeu au profit de paysages du jeu Cyberpunk 2077",url:"https://heliosphere.app/mod/wnpyxb0ht96rfd85xzd3gqpgs0",tags:["Meuble"]},{title:"25th Hour - Distributeur",description:"Distributeur pour la boisson énergisante au café 25th Hour",url:"https://heliosphere.app/mod/va3w4snr550hfdpef5qtyqdpq8",tags:["Meuble de jardin"]},{title:"25th Hour - Canette",description:"Canette de la boisson énergisante au café 25th Hour",url:"https://heliosphere.app/mod/wyea6wmr990gf66fdcsq1q9a70",tags:["Mascotte"]},{title:"Listingway",description:"Importez votre fichier .txt Remakeplace et obtenez une estimation du prix de vos meubles et où les acheter",url:"https://obsidian-chrome.github.io/listingway/",tags:["Utilitaire"]}].filter(Z=>{const ye=Me===""||Z.title.toLowerCase().includes(Me.toLowerCase())||Z.description.toLowerCase().includes(Me.toLowerCase()),Le=fe.length===0||fe.some(Be=>Z.tags.includes(Be));return ye&&Le}).sort((Z,ye)=>z==="asc"?Z.title.localeCompare(ye.title):ye.title.localeCompare(Z.title));return o.jsxs("div",{className:"space-y-4 max-w-3xl",children:[o.jsxs("div",{className:"text-gray-500 text-sm font-medium mb-6",children:[ne.length," ressource",ne.length>1?"s":""]}),ne.length===0?o.jsx("div",{className:"text-center py-12",children:o.jsx("p",{className:"text-gray-400",children:"Aucune ressource trouvée"})}):ne.map((Z,ye)=>o.jsx("a",{href:Z.url,id:Z.id,...Z.isInternal?{}:{target:"_blank",rel:"noopener noreferrer"},className:"block bg-zinc-900/50 border border-zinc-800 p-4 hover:border-zinc-700 transition-colors",children:o.jsxs("div",{className:"flex items-center gap-3",children:[Z.tags.includes("PyonPix")?o.jsx(Nx,{className:"w-6 h-6 text-white flex-shrink-0"}):Z.title==="Listingway"?o.jsx(cS,{className:"w-6 h-6 text-white flex-shrink-0"}):o.jsx(bd,{className:"w-6 h-6 text-white flex-shrink-0"}),o.jsxs("div",{className:"flex-1",children:[o.jsx("h3",{className:"text-white font-semibold",children:Z.title}),o.jsx("p",{className:"text-gray-400 text-sm mb-2",children:Z.description}),Z.tags.length>0&&o.jsx("div",{className:"flex flex-wrap gap-1 mb-2",children:Z.tags.map(Le=>o.jsx("span",{className:"inline-block bg-zinc-800 text-gray-300 text-xs px-2 py-1 rounded",children:Le},Le))}),Z.requiresPyonPix&&o.jsxs("div",{className:"text-xs text-cyan-400/80 mt-2 pt-2 border-t border-zinc-800/50",children:[o.jsx("span",{className:"opacity-60",children:"PRÉREQUIS //"})," Nécessite le plugin"," ",o.jsx("button",{onClick:Le=>{Le.preventDefault(),Le.stopPropagation(),navigator.clipboard.writeText("https://raw.githubusercontent.com/priprii/FFXIVPlugins/main/repo.json"),he(!0),setTimeout(()=>he(!1),4e3)},className:"inline-flex items-center px-2 py-0.5 bg-cyan-500/20 border border-cyan-500/40 rounded text-cyan-300 hover:bg-cyan-500/30 hover:border-cyan-500/60 transition-all",children:"PyonPix"})," ","par Pyon"]})]})]})},ye))]})})()]})})]}),n&&n.title==="ÉVÉNEMENTS"&&o.jsxs("div",{className:"fixed inset-0 bg-black z-50 overflow-y-auto flex flex-col relative",children:[o.jsx(wr,{}),o.jsx("div",{className:"flex-grow relative z-10",children:o.jsxs("div",{className:"max-w-7xl mx-auto p-8 pb-16",children:[o.jsxs("button",{onClick:()=>{window.location.hash="",i(null)},className:"flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 mb-8 group",children:[o.jsx(On,{className:"w-5 h-5"}),o.jsx("span",{children:"Retour"})]}),o.jsxs("header",{className:"mb-8 text-center",children:[o.jsx("h1",{className:"text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white tracking-[0.15em] mb-4 drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]",children:"ÉVÉNEMENTS"}),o.jsxs("div",{className:"flex items-center justify-center gap-4",children:[o.jsx("div",{className:"h-px w-12 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"}),o.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-cyan-500/80 shadow-[0_0_8px_rgba(6,182,212,0.6)]"}),o.jsx("div",{className:"h-px w-12 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"})]})]}),o.jsx(JT,{filters:Ee,onFiltersChange:X}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 lg:h-[700px]",children:[o.jsx("div",{className:"lg:col-span-2 h-full",children:o.jsx(KT,{events:sm,filters:Ee,onDayClick:(P,ne)=>{oe(P),ie(ne)}})}),o.jsx("div",{className:"lg:col-span-1 h-full",children:o.jsx(YT,{events:sm,filters:Ee,onEventClick:P=>Ne(P)})})]}),pe&&o.jsx(ZT,{events:pe,date:j,onClose:()=>{oe(null),ie(null)},onEventClick:P=>{Ne(P)}}),de&&o.jsx(QT,{event:de,onClose:()=>Ne(null)})]})})]}),n&&n.title==="RÉSEAUX"&&o.jsxs("div",{className:"fixed inset-0 bg-black z-50 overflow-y-auto flex flex-col relative",children:[o.jsx(wr,{}),o.jsx("div",{className:"flex-grow relative z-10",children:o.jsxs("div",{className:"max-w-7xl mx-auto p-8 pb-16",children:[o.jsxs("button",{onClick:()=>{window.location.hash="",i(null)},className:"flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 mb-8 group",children:[o.jsx(On,{className:"w-5 h-5"}),o.jsx("span",{children:"Retour"})]}),o.jsxs("div",{className:"text-center mb-8",children:[o.jsx("h1",{className:"text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-white tracking-[0.15em] mb-4 drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]",children:"RÉSEAUX"}),o.jsxs("div",{className:"flex items-center justify-center gap-4",children:[o.jsx("div",{className:"h-px w-12 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"}),o.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-cyan-500/80 shadow-[0_0_8px_rgba(6,182,212,0.6)]"}),o.jsx("div",{className:"h-px w-12 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"})]})]}),o.jsxs("div",{className:"text-gray-500 text-sm font-medium mb-6",children:[Gi.length," réseau",Gi.length>1?"x":""]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:Gi.map(P=>o.jsx("button",{onClick:()=>{T(P),window.location.hash=P.name.toLowerCase()},className:"bg-zinc-900/50 border border-zinc-800 p-6 hover:border-zinc-700 transition-colors text-left w-full",children:o.jsxs("div",{className:"flex flex-col items-center text-center gap-4",children:[o.jsx("img",{src:P.logo,alt:P.name,className:"h-12 max-w-24 object-contain"}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xl font-bold text-white",children:P.name}),P.equivalent&&o.jsxs("p",{className:"text-gray-500 text-xs mt-1",children:["(",P.equivalent,")"]})]}),o.jsx("p",{className:"text-gray-400 text-sm",children:P.description}),o.jsx("p",{className:"text-blue-400 text-xs mt-2",children:"Créer un post →"})]})},P.id))}),Gi.length===0&&o.jsx("div",{className:"text-center py-12",children:o.jsx("p",{className:"text-gray-500",children:"Aucun réseau disponible pour le moment"})})]})})]}),y&&y.name==="Neolens"&&o.jsx(_1,{neolensPost:we,setNeolensPost:Se,onBack:()=>{T(null),window.location.hash="reseaux"},isDragging:Ue,setIsDragging:Ke,dragStart:Xe,setDragStart:Qe,isDraggingAvatar:V,setIsDraggingAvatar:qe,dragStartAvatar:Ze,setDragStartAvatar:U,showComments:S,setShowComments:G,showMentions:J,setShowMentions:ue}),y&&y.name==="Holofans"&&o.jsx(y1,{holofansPost:Te,setHolofansPost:Ce,onBack:()=>{T(null),window.location.hash="reseaux"},isDragging:Ue,setIsDragging:Ke,dragStart:Xe,setDragStart:Qe,isDraggingAvatar:V,setIsDraggingAvatar:qe,dragStartAvatar:Ze,setDragStartAvatar:U,showComments:S,setShowComments:G}),y&&y.name==="Ping"&&o.jsx(w1,{pingPost:ze,setPingPost:Ie,onBack:()=>{T(null),window.location.hash="reseaux"},isDragging:Ue,setIsDragging:Ke,dragStart:Xe,setDragStart:Qe,isDraggingAvatar:V,setIsDraggingAvatar:qe,dragStartAvatar:Ze,setDragStartAvatar:U,showComments:S,setShowComments:G}),n&&n.title!=="ANNUAIRE"&&n.title!=="ARTISTES"&&n.title!=="ÉVÉNEMENTS"&&n.title!=="RÉSEAUX"&&n.title!=="RESSOURCES"&&o.jsxs("div",{className:"fixed inset-0 bg-black z-50 overflow-y-auto flex flex-col relative",children:[o.jsx(wr,{}),o.jsx("div",{className:"flex-grow relative z-10",children:o.jsxs("div",{className:"max-w-7xl mx-auto p-8 pb-16",children:[o.jsxs("button",{onClick:()=>{window.location.hash="",i(null)},className:"flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-all duration-300 mb-8 group",children:[o.jsx(On,{className:"w-5 h-5"}),o.jsx("span",{children:"Retour"})]}),o.jsx("h1",{className:"text-4xl font-bold text-white mb-6",children:n.title}),o.jsx("div",{className:"text-center py-12",children:o.jsx("p",{className:"text-gray-500",children:"Aucun contenu disponible pour le moment"})})]})})]}),C&&o.jsx(jT,{onBack:()=>{L(!1),window.location.hash=""}}),g&&o.jsx(VT,{onBack:()=>{R(!1),window.location.hash=""}}),A&&o.jsx(HT,{onBack:()=>{D(!1),window.location.hash=""}}),B&&o.jsx(WT,{}),te&&o.jsx(GT,{onBack:()=>{H(!1),window.location.hash="coven"}}),Q&&o.jsx(XT,{}),b&&o.jsx($T,{onBack:()=>{M(!1),window.location.hash=""}}),I&&o.jsx(eC,{})]})}),F&&o.jsx("div",{className:"fixed bottom-8 right-8 z-[100] transition-all duration-300 ease-out",children:o.jsx("div",{className:"bg-zinc-900 border border-cyan-500/40 rounded-lg p-4 shadow-[0_0_30px_rgba(6,182,212,0.3)] backdrop-blur-sm min-w-[280px]",children:o.jsxs("div",{className:"flex items-start gap-3",children:[o.jsx("div",{className:"flex-shrink-0 w-5 h-5 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center mt-0.5",children:o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-cyan-400",children:o.jsx("polyline",{points:"20 6 9 17 4 12"})})}),o.jsxs("div",{className:"flex-1",children:[o.jsx("h4",{className:"text-white font-semibold text-sm mb-1",children:"Lien copié dans le presse-papier"}),o.jsxs("p",{className:"text-gray-400 text-xs",children:["Collez ce lien dans",o.jsx("br",{}),o.jsx("span",{className:"text-cyan-400",children:"Dalamud > Settings > Experimental"})]})]})]})})}),!y&&!C&&!g&&!A&&!B&&!te&&!Q&&!b&&!I&&o.jsx(tC,{})]})}Lu.createRoot(document.getElementById("root")).render(o.jsx(Gv.StrictMode,{children:o.jsx(nC,{})}));
