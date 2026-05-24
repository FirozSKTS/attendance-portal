function Fy(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Uy(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Kp={exports:{}},Ta={},Qp={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xs=Symbol.for("react.element"),Wy=Symbol.for("react.portal"),zy=Symbol.for("react.fragment"),By=Symbol.for("react.strict_mode"),Hy=Symbol.for("react.profiler"),Vy=Symbol.for("react.provider"),$y=Symbol.for("react.context"),Gy=Symbol.for("react.forward_ref"),qy=Symbol.for("react.suspense"),Yy=Symbol.for("react.memo"),Ky=Symbol.for("react.lazy"),hh=Symbol.iterator;function Qy(t){return t===null||typeof t!="object"?null:(t=hh&&t[hh]||t["@@iterator"],typeof t=="function"?t:null)}var Xp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jp=Object.assign,Zp={};function Xr(t,e,n){this.props=t,this.context=e,this.refs=Zp,this.updater=n||Xp}Xr.prototype.isReactComponent={};Xr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function em(){}em.prototype=Xr.prototype;function _c(t,e,n){this.props=t,this.context=e,this.refs=Zp,this.updater=n||Xp}var vc=_c.prototype=new em;vc.constructor=_c;Jp(vc,Xr.prototype);vc.isPureReactComponent=!0;var fh=Array.isArray,tm=Object.prototype.hasOwnProperty,yc={current:null},nm={key:!0,ref:!0,__self:!0,__source:!0};function rm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)tm.call(e,r)&&!nm.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:xs,type:t,key:s,ref:o,props:i,_owner:yc.current}}function Xy(t,e){return{$$typeof:xs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function wc(t){return typeof t=="object"&&t!==null&&t.$$typeof===xs}function Jy(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ph=/\/+/g;function cl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Jy(""+t.key):e.toString(36)}function fo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case xs:case Wy:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+cl(o,0):r,fh(i)?(n="",t!=null&&(n=t.replace(ph,"$&/")+"/"),fo(i,e,n,"",function(u){return u})):i!=null&&(wc(i)&&(i=Xy(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(ph,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",fh(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+cl(s,a);o+=fo(s,e,n,l,i)}else if(l=Qy(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+cl(s,a++),o+=fo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $s(t,e,n){if(t==null)return t;var r=[],i=0;return fo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Zy(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Oe={current:null},po={transition:null},ew={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:po,ReactCurrentOwner:yc};function im(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:$s,forEach:function(t,e,n){$s(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $s(t,function(){e++}),e},toArray:function(t){return $s(t,function(e){return e})||[]},only:function(t){if(!wc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Component=Xr;U.Fragment=zy;U.Profiler=Hy;U.PureComponent=_c;U.StrictMode=By;U.Suspense=qy;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ew;U.act=im;U.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Jp({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=yc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)tm.call(e,l)&&!nm.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:xs,type:t.type,key:i,ref:s,props:r,_owner:o}};U.createContext=function(t){return t={$$typeof:$y,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Vy,_context:t},t.Consumer=t};U.createElement=rm;U.createFactory=function(t){var e=rm.bind(null,t);return e.type=t,e};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:Gy,render:t}};U.isValidElement=wc;U.lazy=function(t){return{$$typeof:Ky,_payload:{_status:-1,_result:t},_init:Zy}};U.memo=function(t,e){return{$$typeof:Yy,type:t,compare:e===void 0?null:e}};U.startTransition=function(t){var e=po.transition;po.transition={};try{t()}finally{po.transition=e}};U.unstable_act=im;U.useCallback=function(t,e){return Oe.current.useCallback(t,e)};U.useContext=function(t){return Oe.current.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t){return Oe.current.useDeferredValue(t)};U.useEffect=function(t,e){return Oe.current.useEffect(t,e)};U.useId=function(){return Oe.current.useId()};U.useImperativeHandle=function(t,e,n){return Oe.current.useImperativeHandle(t,e,n)};U.useInsertionEffect=function(t,e){return Oe.current.useInsertionEffect(t,e)};U.useLayoutEffect=function(t,e){return Oe.current.useLayoutEffect(t,e)};U.useMemo=function(t,e){return Oe.current.useMemo(t,e)};U.useReducer=function(t,e,n){return Oe.current.useReducer(t,e,n)};U.useRef=function(t){return Oe.current.useRef(t)};U.useState=function(t){return Oe.current.useState(t)};U.useSyncExternalStore=function(t,e,n){return Oe.current.useSyncExternalStore(t,e,n)};U.useTransition=function(){return Oe.current.useTransition()};U.version="18.3.1";Qp.exports=U;var S=Qp.exports;const tw=Uy(S),nw=Fy({__proto__:null,default:tw},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rw=S,iw=Symbol.for("react.element"),sw=Symbol.for("react.fragment"),ow=Object.prototype.hasOwnProperty,aw=rw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lw={key:!0,ref:!0,__self:!0,__source:!0};function sm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ow.call(e,r)&&!lw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:iw,type:t,key:s,ref:o,props:i,_owner:aw.current}}Ta.Fragment=sw;Ta.jsx=sm;Ta.jsxs=sm;Kp.exports=Ta;var h=Kp.exports,tu={},om={exports:{}},qe={},am={exports:{}},lm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,M){var L=A.length;A.push(M);e:for(;0<L;){var ie=L-1>>>1,fe=A[ie];if(0<i(fe,M))A[ie]=M,A[L]=fe,L=ie;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var M=A[0],L=A.pop();if(L!==M){A[0]=L;e:for(var ie=0,fe=A.length,Hs=fe>>>1;ie<Hs;){var bn=2*(ie+1)-1,ul=A[bn],Mn=bn+1,Vs=A[Mn];if(0>i(ul,L))Mn<fe&&0>i(Vs,ul)?(A[ie]=Vs,A[Mn]=L,ie=Mn):(A[ie]=ul,A[bn]=L,ie=bn);else if(Mn<fe&&0>i(Vs,L))A[ie]=Vs,A[Mn]=L,ie=Mn;else break e}}return M}function i(A,M){var L=A.sortIndex-M.sortIndex;return L!==0?L:A.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],d=1,c=null,f=3,_=!1,v=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(A){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=A)r(u),M.sortIndex=M.expirationTime,e(l,M);else break;M=n(u)}}function E(A){if(y=!1,g(A),!v)if(n(l)!==null)v=!0,al(k);else{var M=n(u);M!==null&&ll(E,M.startTime-A)}}function k(A,M){v=!1,y&&(y=!1,m(N),N=-1),_=!0;var L=f;try{for(g(M),c=n(l);c!==null&&(!(c.expirationTime>M)||A&&!he());){var ie=c.callback;if(typeof ie=="function"){c.callback=null,f=c.priorityLevel;var fe=ie(c.expirationTime<=M);M=t.unstable_now(),typeof fe=="function"?c.callback=fe:c===n(l)&&r(l),g(M)}else r(l);c=n(l)}if(c!==null)var Hs=!0;else{var bn=n(u);bn!==null&&ll(E,bn.startTime-M),Hs=!1}return Hs}finally{c=null,f=L,_=!1}}var T=!1,P=null,N=-1,x=5,O=-1;function he(){return!(t.unstable_now()-O<x)}function On(){if(P!==null){var A=t.unstable_now();O=A;var M=!0;try{M=P(!0,A)}finally{M?Dn():(T=!1,P=null)}}else T=!1}var Dn;if(typeof p=="function")Dn=function(){p(On)};else if(typeof MessageChannel<"u"){var hi=new MessageChannel,jy=hi.port2;hi.port1.onmessage=On,Dn=function(){jy.postMessage(null)}}else Dn=function(){w(On,0)};function al(A){P=A,T||(T=!0,Dn())}function ll(A,M){N=w(function(){A(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){v||_||(v=!0,al(k))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(f){case 1:case 2:case 3:var M=3;break;default:M=f}var L=f;f=M;try{return A()}finally{f=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,M){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var L=f;f=A;try{return M()}finally{f=L}},t.unstable_scheduleCallback=function(A,M,L){var ie=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?ie+L:ie):L=ie,A){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=L+fe,A={id:d++,callback:M,priorityLevel:A,startTime:L,expirationTime:fe,sortIndex:-1},L>ie?(A.sortIndex=L,e(u,A),n(l)===null&&A===n(u)&&(y?(m(N),N=-1):y=!0,ll(E,L-ie))):(A.sortIndex=fe,e(l,A),v||_||(v=!0,al(k))),A},t.unstable_shouldYield=he,t.unstable_wrapCallback=function(A){var M=f;return function(){var L=f;f=M;try{return A.apply(this,arguments)}finally{f=L}}}})(lm);am.exports=lm;var uw=am.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cw=S,Ge=uw;function C(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var um=new Set,Yi={};function or(t,e){Ur(t,e),Ur(t+"Capture",e)}function Ur(t,e){for(Yi[t]=e,t=0;t<e.length;t++)um.add(e[t])}var bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nu=Object.prototype.hasOwnProperty,dw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mh={},gh={};function hw(t){return nu.call(gh,t)?!0:nu.call(mh,t)?!1:dw.test(t)?gh[t]=!0:(mh[t]=!0,!1)}function fw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function pw(t,e,n,r){if(e===null||typeof e>"u"||fw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function De(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ee[t]=new De(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ee[e]=new De(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ee[t]=new De(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ee[t]=new De(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ee[t]=new De(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ee[t]=new De(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ee[t]=new De(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ee[t]=new De(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ee[t]=new De(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ec=/[\-:]([a-z])/g;function Sc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ec,Sc);Ee[e]=new De(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ec,Sc);Ee[e]=new De(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ec,Sc);Ee[e]=new De(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ee[t]=new De(t,1,!1,t.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ee[t]=new De(t,1,!1,t.toLowerCase(),null,!0,!0)});function Cc(t,e,n,r){var i=Ee.hasOwnProperty(e)?Ee[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(pw(e,n,i,r)&&(n=null),r||i===null?hw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var zt=cw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gs=Symbol.for("react.element"),mr=Symbol.for("react.portal"),gr=Symbol.for("react.fragment"),Ic=Symbol.for("react.strict_mode"),ru=Symbol.for("react.profiler"),cm=Symbol.for("react.provider"),dm=Symbol.for("react.context"),kc=Symbol.for("react.forward_ref"),iu=Symbol.for("react.suspense"),su=Symbol.for("react.suspense_list"),Tc=Symbol.for("react.memo"),Gt=Symbol.for("react.lazy"),hm=Symbol.for("react.offscreen"),_h=Symbol.iterator;function fi(t){return t===null||typeof t!="object"?null:(t=_h&&t[_h]||t["@@iterator"],typeof t=="function"?t:null)}var ne=Object.assign,dl;function xi(t){if(dl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);dl=e&&e[1]||""}return`
`+dl+t}var hl=!1;function fl(t,e){if(!t||hl)return"";hl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{hl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?xi(t):""}function mw(t){switch(t.tag){case 5:return xi(t.type);case 16:return xi("Lazy");case 13:return xi("Suspense");case 19:return xi("SuspenseList");case 0:case 2:case 15:return t=fl(t.type,!1),t;case 11:return t=fl(t.type.render,!1),t;case 1:return t=fl(t.type,!0),t;default:return""}}function ou(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gr:return"Fragment";case mr:return"Portal";case ru:return"Profiler";case Ic:return"StrictMode";case iu:return"Suspense";case su:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case dm:return(t.displayName||"Context")+".Consumer";case cm:return(t._context.displayName||"Context")+".Provider";case kc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tc:return e=t.displayName||null,e!==null?e:ou(t.type)||"Memo";case Gt:e=t._payload,t=t._init;try{return ou(t(e))}catch{}}return null}function gw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ou(e);case 8:return e===Ic?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function yn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _w(t){var e=fm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function qs(t){t._valueTracker||(t._valueTracker=_w(t))}function pm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=fm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ro(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function au(t,e){var n=e.checked;return ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function vh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=yn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function mm(t,e){e=e.checked,e!=null&&Cc(t,"checked",e,!1)}function lu(t,e){mm(t,e);var n=yn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uu(t,e.type,n):e.hasOwnProperty("defaultValue")&&uu(t,e.type,yn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function yh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uu(t,e,n){(e!=="number"||Ro(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ni=Array.isArray;function Pr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+yn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function cu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(C(91));return ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(C(92));if(Ni(n)){if(1<n.length)throw Error(C(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:yn(n)}}function gm(t,e){var n=yn(e.value),r=yn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Eh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function _m(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function du(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?_m(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ys,vm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ys=Ys||document.createElement("div"),Ys.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ys.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ki(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Di={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vw=["Webkit","ms","Moz","O"];Object.keys(Di).forEach(function(t){vw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Di[e]=Di[t]})});function ym(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Di.hasOwnProperty(t)&&Di[t]?(""+e).trim():e+"px"}function wm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ym(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var yw=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hu(t,e){if(e){if(yw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(C(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(C(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(C(61))}if(e.style!=null&&typeof e.style!="object")throw Error(C(62))}}function fu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pu=null;function xc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mu=null,Rr=null,Ar=null;function Sh(t){if(t=Rs(t)){if(typeof mu!="function")throw Error(C(280));var e=t.stateNode;e&&(e=Aa(e),mu(t.stateNode,t.type,e))}}function Em(t){Rr?Ar?Ar.push(t):Ar=[t]:Rr=t}function Sm(){if(Rr){var t=Rr,e=Ar;if(Ar=Rr=null,Sh(t),e)for(t=0;t<e.length;t++)Sh(e[t])}}function Cm(t,e){return t(e)}function Im(){}var pl=!1;function km(t,e,n){if(pl)return t(e,n);pl=!0;try{return Cm(t,e,n)}finally{pl=!1,(Rr!==null||Ar!==null)&&(Im(),Sm())}}function Qi(t,e){var n=t.stateNode;if(n===null)return null;var r=Aa(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(C(231,e,typeof n));return n}var gu=!1;if(bt)try{var pi={};Object.defineProperty(pi,"passive",{get:function(){gu=!0}}),window.addEventListener("test",pi,pi),window.removeEventListener("test",pi,pi)}catch{gu=!1}function ww(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var bi=!1,Ao=null,Oo=!1,_u=null,Ew={onError:function(t){bi=!0,Ao=t}};function Sw(t,e,n,r,i,s,o,a,l){bi=!1,Ao=null,ww.apply(Ew,arguments)}function Cw(t,e,n,r,i,s,o,a,l){if(Sw.apply(this,arguments),bi){if(bi){var u=Ao;bi=!1,Ao=null}else throw Error(C(198));Oo||(Oo=!0,_u=u)}}function ar(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Tm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ch(t){if(ar(t)!==t)throw Error(C(188))}function Iw(t){var e=t.alternate;if(!e){if(e=ar(t),e===null)throw Error(C(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ch(i),t;if(s===r)return Ch(i),e;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?t:e}function xm(t){return t=Iw(t),t!==null?Nm(t):null}function Nm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Nm(t);if(e!==null)return e;t=t.sibling}return null}var Pm=Ge.unstable_scheduleCallback,Ih=Ge.unstable_cancelCallback,kw=Ge.unstable_shouldYield,Tw=Ge.unstable_requestPaint,se=Ge.unstable_now,xw=Ge.unstable_getCurrentPriorityLevel,Nc=Ge.unstable_ImmediatePriority,Rm=Ge.unstable_UserBlockingPriority,Do=Ge.unstable_NormalPriority,Nw=Ge.unstable_LowPriority,Am=Ge.unstable_IdlePriority,xa=null,_t=null;function Pw(t){if(_t&&typeof _t.onCommitFiberRoot=="function")try{_t.onCommitFiberRoot(xa,t,void 0,(t.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:Ow,Rw=Math.log,Aw=Math.LN2;function Ow(t){return t>>>=0,t===0?32:31-(Rw(t)/Aw|0)|0}var Ks=64,Qs=4194304;function Pi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function bo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Pi(a):(s&=o,s!==0&&(r=Pi(s)))}else o=n&~i,o!==0?r=Pi(o):s!==0&&(r=Pi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-lt(e),i=1<<n,r|=t[n],e&=~i;return r}function Dw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-lt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=Dw(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function vu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Om(){var t=Ks;return Ks<<=1,!(Ks&4194240)&&(Ks=64),t}function ml(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ns(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-lt(e),t[e]=n}function Mw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-lt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Pc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-lt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var V=0;function Dm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var bm,Rc,Mm,Lm,jm,yu=!1,Xs=[],rn=null,sn=null,on=null,Xi=new Map,Ji=new Map,Yt=[],Lw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kh(t,e){switch(t){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":on=null;break;case"pointerover":case"pointerout":Xi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ji.delete(e.pointerId)}}function mi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Rs(e),e!==null&&Rc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function jw(t,e,n,r,i){switch(e){case"focusin":return rn=mi(rn,t,e,n,r,i),!0;case"dragenter":return sn=mi(sn,t,e,n,r,i),!0;case"mouseover":return on=mi(on,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Xi.set(s,mi(Xi.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ji.set(s,mi(Ji.get(s)||null,t,e,n,r,i)),!0}return!1}function Fm(t){var e=zn(t.target);if(e!==null){var n=ar(e);if(n!==null){if(e=n.tag,e===13){if(e=Tm(n),e!==null){t.blockedOn=e,jm(t.priority,function(){Mm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function mo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);pu=r,n.target.dispatchEvent(r),pu=null}else return e=Rs(n),e!==null&&Rc(e),t.blockedOn=n,!1;e.shift()}return!0}function Th(t,e,n){mo(t)&&n.delete(e)}function Fw(){yu=!1,rn!==null&&mo(rn)&&(rn=null),sn!==null&&mo(sn)&&(sn=null),on!==null&&mo(on)&&(on=null),Xi.forEach(Th),Ji.forEach(Th)}function gi(t,e){t.blockedOn===e&&(t.blockedOn=null,yu||(yu=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,Fw)))}function Zi(t){function e(i){return gi(i,t)}if(0<Xs.length){gi(Xs[0],t);for(var n=1;n<Xs.length;n++){var r=Xs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(rn!==null&&gi(rn,t),sn!==null&&gi(sn,t),on!==null&&gi(on,t),Xi.forEach(e),Ji.forEach(e),n=0;n<Yt.length;n++)r=Yt[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Yt.length&&(n=Yt[0],n.blockedOn===null);)Fm(n),n.blockedOn===null&&Yt.shift()}var Or=zt.ReactCurrentBatchConfig,Mo=!0;function Uw(t,e,n,r){var i=V,s=Or.transition;Or.transition=null;try{V=1,Ac(t,e,n,r)}finally{V=i,Or.transition=s}}function Ww(t,e,n,r){var i=V,s=Or.transition;Or.transition=null;try{V=4,Ac(t,e,n,r)}finally{V=i,Or.transition=s}}function Ac(t,e,n,r){if(Mo){var i=wu(t,e,n,r);if(i===null)kl(t,e,r,Lo,n),kh(t,r);else if(jw(i,t,e,n,r))r.stopPropagation();else if(kh(t,r),e&4&&-1<Lw.indexOf(t)){for(;i!==null;){var s=Rs(i);if(s!==null&&bm(s),s=wu(t,e,n,r),s===null&&kl(t,e,r,Lo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else kl(t,e,r,null,n)}}var Lo=null;function wu(t,e,n,r){if(Lo=null,t=xc(r),t=zn(t),t!==null)if(e=ar(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Tm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Lo=t,null}function Um(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xw()){case Nc:return 1;case Rm:return 4;case Do:case Nw:return 16;case Am:return 536870912;default:return 16}default:return 16}}var en=null,Oc=null,go=null;function Wm(){if(go)return go;var t,e=Oc,n=e.length,r,i="value"in en?en.value:en.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return go=i.slice(t,1<r?1-r:void 0)}function _o(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Js(){return!0}function xh(){return!1}function Ye(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Js:xh,this.isPropagationStopped=xh,this}return ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Js)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Js)},persist:function(){},isPersistent:Js}),e}var Jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dc=Ye(Jr),Ps=ne({},Jr,{view:0,detail:0}),zw=Ye(Ps),gl,_l,_i,Na=ne({},Ps,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_i&&(_i&&t.type==="mousemove"?(gl=t.screenX-_i.screenX,_l=t.screenY-_i.screenY):_l=gl=0,_i=t),gl)},movementY:function(t){return"movementY"in t?t.movementY:_l}}),Nh=Ye(Na),Bw=ne({},Na,{dataTransfer:0}),Hw=Ye(Bw),Vw=ne({},Ps,{relatedTarget:0}),vl=Ye(Vw),$w=ne({},Jr,{animationName:0,elapsedTime:0,pseudoElement:0}),Gw=Ye($w),qw=ne({},Jr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Yw=Ye(qw),Kw=ne({},Jr,{data:0}),Ph=Ye(Kw),Qw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Jw[t])?!!e[t]:!1}function bc(){return Zw}var eE=ne({},Ps,{key:function(t){if(t.key){var e=Qw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_o(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Xw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bc,charCode:function(t){return t.type==="keypress"?_o(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_o(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tE=Ye(eE),nE=ne({},Na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rh=Ye(nE),rE=ne({},Ps,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bc}),iE=Ye(rE),sE=ne({},Jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),oE=Ye(sE),aE=ne({},Na,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lE=Ye(aE),uE=[9,13,27,32],Mc=bt&&"CompositionEvent"in window,Mi=null;bt&&"documentMode"in document&&(Mi=document.documentMode);var cE=bt&&"TextEvent"in window&&!Mi,zm=bt&&(!Mc||Mi&&8<Mi&&11>=Mi),Ah=" ",Oh=!1;function Bm(t,e){switch(t){case"keyup":return uE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _r=!1;function dE(t,e){switch(t){case"compositionend":return Hm(e);case"keypress":return e.which!==32?null:(Oh=!0,Ah);case"textInput":return t=e.data,t===Ah&&Oh?null:t;default:return null}}function hE(t,e){if(_r)return t==="compositionend"||!Mc&&Bm(t,e)?(t=Wm(),go=Oc=en=null,_r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zm&&e.locale!=="ko"?null:e.data;default:return null}}var fE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fE[t.type]:e==="textarea"}function Vm(t,e,n,r){Em(r),e=jo(e,"onChange"),0<e.length&&(n=new Dc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Li=null,es=null;function pE(t){tg(t,0)}function Pa(t){var e=wr(t);if(pm(e))return t}function mE(t,e){if(t==="change")return e}var $m=!1;if(bt){var yl;if(bt){var wl="oninput"in document;if(!wl){var bh=document.createElement("div");bh.setAttribute("oninput","return;"),wl=typeof bh.oninput=="function"}yl=wl}else yl=!1;$m=yl&&(!document.documentMode||9<document.documentMode)}function Mh(){Li&&(Li.detachEvent("onpropertychange",Gm),es=Li=null)}function Gm(t){if(t.propertyName==="value"&&Pa(es)){var e=[];Vm(e,es,t,xc(t)),km(pE,e)}}function gE(t,e,n){t==="focusin"?(Mh(),Li=e,es=n,Li.attachEvent("onpropertychange",Gm)):t==="focusout"&&Mh()}function _E(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Pa(es)}function vE(t,e){if(t==="click")return Pa(e)}function yE(t,e){if(t==="input"||t==="change")return Pa(e)}function wE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var dt=typeof Object.is=="function"?Object.is:wE;function ts(t,e){if(dt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!nu.call(e,i)||!dt(t[i],e[i]))return!1}return!0}function Lh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jh(t,e){var n=Lh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lh(n)}}function qm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ym(){for(var t=window,e=Ro();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ro(t.document)}return e}function Lc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function EE(t){var e=Ym(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&qm(n.ownerDocument.documentElement,n)){if(r!==null&&Lc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=jh(n,s);var o=jh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var SE=bt&&"documentMode"in document&&11>=document.documentMode,vr=null,Eu=null,ji=null,Su=!1;function Fh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Su||vr==null||vr!==Ro(r)||(r=vr,"selectionStart"in r&&Lc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ji&&ts(ji,r)||(ji=r,r=jo(Eu,"onSelect"),0<r.length&&(e=new Dc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=vr)))}function Zs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var yr={animationend:Zs("Animation","AnimationEnd"),animationiteration:Zs("Animation","AnimationIteration"),animationstart:Zs("Animation","AnimationStart"),transitionend:Zs("Transition","TransitionEnd")},El={},Km={};bt&&(Km=document.createElement("div").style,"AnimationEvent"in window||(delete yr.animationend.animation,delete yr.animationiteration.animation,delete yr.animationstart.animation),"TransitionEvent"in window||delete yr.transitionend.transition);function Ra(t){if(El[t])return El[t];if(!yr[t])return t;var e=yr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Km)return El[t]=e[n];return t}var Qm=Ra("animationend"),Xm=Ra("animationiteration"),Jm=Ra("animationstart"),Zm=Ra("transitionend"),eg=new Map,Uh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kn(t,e){eg.set(t,e),or(e,[t])}for(var Sl=0;Sl<Uh.length;Sl++){var Cl=Uh[Sl],CE=Cl.toLowerCase(),IE=Cl[0].toUpperCase()+Cl.slice(1);kn(CE,"on"+IE)}kn(Qm,"onAnimationEnd");kn(Xm,"onAnimationIteration");kn(Jm,"onAnimationStart");kn("dblclick","onDoubleClick");kn("focusin","onFocus");kn("focusout","onBlur");kn(Zm,"onTransitionEnd");Ur("onMouseEnter",["mouseout","mouseover"]);Ur("onMouseLeave",["mouseout","mouseover"]);Ur("onPointerEnter",["pointerout","pointerover"]);Ur("onPointerLeave",["pointerout","pointerover"]);or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));or("onBeforeInput",["compositionend","keypress","textInput","paste"]);or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ri));function Wh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Cw(r,e,void 0,t),t.currentTarget=null}function tg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Wh(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Wh(i,a,u),s=l}}}if(Oo)throw t=_u,Oo=!1,_u=null,t}function K(t,e){var n=e[xu];n===void 0&&(n=e[xu]=new Set);var r=t+"__bubble";n.has(r)||(ng(e,t,2,!1),n.add(r))}function Il(t,e,n){var r=0;e&&(r|=4),ng(n,t,r,e)}var eo="_reactListening"+Math.random().toString(36).slice(2);function ns(t){if(!t[eo]){t[eo]=!0,um.forEach(function(n){n!=="selectionchange"&&(kE.has(n)||Il(n,!1,t),Il(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[eo]||(e[eo]=!0,Il("selectionchange",!1,e))}}function ng(t,e,n,r){switch(Um(e)){case 1:var i=Uw;break;case 4:i=Ww;break;default:i=Ac}n=i.bind(null,e,n,t),i=void 0,!gu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function kl(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=zn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}km(function(){var u=s,d=xc(n),c=[];e:{var f=eg.get(t);if(f!==void 0){var _=Dc,v=t;switch(t){case"keypress":if(_o(n)===0)break e;case"keydown":case"keyup":_=tE;break;case"focusin":v="focus",_=vl;break;case"focusout":v="blur",_=vl;break;case"beforeblur":case"afterblur":_=vl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Nh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=Hw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=iE;break;case Qm:case Xm:case Jm:_=Gw;break;case Zm:_=oE;break;case"scroll":_=zw;break;case"wheel":_=lE;break;case"copy":case"cut":case"paste":_=Yw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Rh}var y=(e&4)!==0,w=!y&&t==="scroll",m=y?f!==null?f+"Capture":null:f;y=[];for(var p=u,g;p!==null;){g=p;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,m!==null&&(E=Qi(p,m),E!=null&&y.push(rs(p,E,g)))),w)break;p=p.return}0<y.length&&(f=new _(f,v,null,n,d),c.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",f&&n!==pu&&(v=n.relatedTarget||n.fromElement)&&(zn(v)||v[Mt]))break e;if((_||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,_?(v=n.relatedTarget||n.toElement,_=u,v=v?zn(v):null,v!==null&&(w=ar(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(_=null,v=u),_!==v)){if(y=Nh,E="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=Rh,E="onPointerLeave",m="onPointerEnter",p="pointer"),w=_==null?f:wr(_),g=v==null?f:wr(v),f=new y(E,p+"leave",_,n,d),f.target=w,f.relatedTarget=g,E=null,zn(d)===u&&(y=new y(m,p+"enter",v,n,d),y.target=g,y.relatedTarget=w,E=y),w=E,_&&v)t:{for(y=_,m=v,p=0,g=y;g;g=dr(g))p++;for(g=0,E=m;E;E=dr(E))g++;for(;0<p-g;)y=dr(y),p--;for(;0<g-p;)m=dr(m),g--;for(;p--;){if(y===m||m!==null&&y===m.alternate)break t;y=dr(y),m=dr(m)}y=null}else y=null;_!==null&&zh(c,f,_,y,!1),v!==null&&w!==null&&zh(c,w,v,y,!0)}}e:{if(f=u?wr(u):window,_=f.nodeName&&f.nodeName.toLowerCase(),_==="select"||_==="input"&&f.type==="file")var k=mE;else if(Dh(f))if($m)k=yE;else{k=_E;var T=gE}else(_=f.nodeName)&&_.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=vE);if(k&&(k=k(t,u))){Vm(c,k,n,d);break e}T&&T(t,f,u),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&uu(f,"number",f.value)}switch(T=u?wr(u):window,t){case"focusin":(Dh(T)||T.contentEditable==="true")&&(vr=T,Eu=u,ji=null);break;case"focusout":ji=Eu=vr=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,Fh(c,n,d);break;case"selectionchange":if(SE)break;case"keydown":case"keyup":Fh(c,n,d)}var P;if(Mc)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else _r?Bm(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(zm&&n.locale!=="ko"&&(_r||N!=="onCompositionStart"?N==="onCompositionEnd"&&_r&&(P=Wm()):(en=d,Oc="value"in en?en.value:en.textContent,_r=!0)),T=jo(u,N),0<T.length&&(N=new Ph(N,t,null,n,d),c.push({event:N,listeners:T}),P?N.data=P:(P=Hm(n),P!==null&&(N.data=P)))),(P=cE?dE(t,n):hE(t,n))&&(u=jo(u,"onBeforeInput"),0<u.length&&(d=new Ph("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=P))}tg(c,e)})}function rs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function jo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Qi(t,n),s!=null&&r.unshift(rs(t,s,i)),s=Qi(t,e),s!=null&&r.push(rs(t,s,i))),t=t.return}return r}function dr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Qi(n,s),l!=null&&o.unshift(rs(n,l,a))):i||(l=Qi(n,s),l!=null&&o.push(rs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var TE=/\r\n?/g,xE=/\u0000|\uFFFD/g;function Bh(t){return(typeof t=="string"?t:""+t).replace(TE,`
`).replace(xE,"")}function to(t,e,n){if(e=Bh(e),Bh(t)!==e&&n)throw Error(C(425))}function Fo(){}var Cu=null,Iu=null;function ku(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Tu=typeof setTimeout=="function"?setTimeout:void 0,NE=typeof clearTimeout=="function"?clearTimeout:void 0,Hh=typeof Promise=="function"?Promise:void 0,PE=typeof queueMicrotask=="function"?queueMicrotask:typeof Hh<"u"?function(t){return Hh.resolve(null).then(t).catch(RE)}:Tu;function RE(t){setTimeout(function(){throw t})}function Tl(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Zi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Zi(e)}function an(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Vh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zr=Math.random().toString(36).slice(2),gt="__reactFiber$"+Zr,is="__reactProps$"+Zr,Mt="__reactContainer$"+Zr,xu="__reactEvents$"+Zr,AE="__reactListeners$"+Zr,OE="__reactHandles$"+Zr;function zn(t){var e=t[gt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mt]||n[gt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Vh(t);t!==null;){if(n=t[gt])return n;t=Vh(t)}return e}t=n,n=t.parentNode}return null}function Rs(t){return t=t[gt]||t[Mt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function wr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(C(33))}function Aa(t){return t[is]||null}var Nu=[],Er=-1;function Tn(t){return{current:t}}function X(t){0>Er||(t.current=Nu[Er],Nu[Er]=null,Er--)}function Y(t,e){Er++,Nu[Er]=t.current,t.current=e}var wn={},xe=Tn(wn),je=Tn(!1),Kn=wn;function Wr(t,e){var n=t.type.contextTypes;if(!n)return wn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Fe(t){return t=t.childContextTypes,t!=null}function Uo(){X(je),X(xe)}function $h(t,e,n){if(xe.current!==wn)throw Error(C(168));Y(xe,e),Y(je,n)}function rg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(C(108,gw(t)||"Unknown",i));return ne({},n,r)}function Wo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||wn,Kn=xe.current,Y(xe,t),Y(je,je.current),!0}function Gh(t,e,n){var r=t.stateNode;if(!r)throw Error(C(169));n?(t=rg(t,e,Kn),r.__reactInternalMemoizedMergedChildContext=t,X(je),X(xe),Y(xe,t)):X(je),Y(je,n)}var It=null,Oa=!1,xl=!1;function ig(t){It===null?It=[t]:It.push(t)}function DE(t){Oa=!0,ig(t)}function xn(){if(!xl&&It!==null){xl=!0;var t=0,e=V;try{var n=It;for(V=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}It=null,Oa=!1}catch(i){throw It!==null&&(It=It.slice(t+1)),Pm(Nc,xn),i}finally{V=e,xl=!1}}return null}var Sr=[],Cr=0,zo=null,Bo=0,Ke=[],Qe=0,Qn=null,kt=1,Tt="";function Ln(t,e){Sr[Cr++]=Bo,Sr[Cr++]=zo,zo=t,Bo=e}function sg(t,e,n){Ke[Qe++]=kt,Ke[Qe++]=Tt,Ke[Qe++]=Qn,Qn=t;var r=kt;t=Tt;var i=32-lt(r)-1;r&=~(1<<i),n+=1;var s=32-lt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,kt=1<<32-lt(e)+i|n<<i|r,Tt=s+t}else kt=1<<s|n<<i|r,Tt=t}function jc(t){t.return!==null&&(Ln(t,1),sg(t,1,0))}function Fc(t){for(;t===zo;)zo=Sr[--Cr],Sr[Cr]=null,Bo=Sr[--Cr],Sr[Cr]=null;for(;t===Qn;)Qn=Ke[--Qe],Ke[Qe]=null,Tt=Ke[--Qe],Ke[Qe]=null,kt=Ke[--Qe],Ke[Qe]=null}var $e=null,Ve=null,J=!1,it=null;function og(t,e){var n=Xe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function qh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,$e=t,Ve=an(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,$e=t,Ve=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qn!==null?{id:kt,overflow:Tt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Xe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,$e=t,Ve=null,!0):!1;default:return!1}}function Pu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ru(t){if(J){var e=Ve;if(e){var n=e;if(!qh(t,e)){if(Pu(t))throw Error(C(418));e=an(n.nextSibling);var r=$e;e&&qh(t,e)?og(r,n):(t.flags=t.flags&-4097|2,J=!1,$e=t)}}else{if(Pu(t))throw Error(C(418));t.flags=t.flags&-4097|2,J=!1,$e=t}}}function Yh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;$e=t}function no(t){if(t!==$e)return!1;if(!J)return Yh(t),J=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ku(t.type,t.memoizedProps)),e&&(e=Ve)){if(Pu(t))throw ag(),Error(C(418));for(;e;)og(t,e),e=an(e.nextSibling)}if(Yh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(C(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ve=an(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ve=null}}else Ve=$e?an(t.stateNode.nextSibling):null;return!0}function ag(){for(var t=Ve;t;)t=an(t.nextSibling)}function zr(){Ve=$e=null,J=!1}function Uc(t){it===null?it=[t]:it.push(t)}var bE=zt.ReactCurrentBatchConfig;function vi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,t))}return t}function ro(t,e){throw t=Object.prototype.toString.call(e),Error(C(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Kh(t){var e=t._init;return e(t._payload)}function lg(t){function e(m,p){if(t){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=dn(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,t?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,g,E){return p===null||p.tag!==6?(p=bl(g,m.mode,E),p.return=m,p):(p=i(p,g),p.return=m,p)}function l(m,p,g,E){var k=g.type;return k===gr?d(m,p,g.props.children,E,g.key):p!==null&&(p.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Gt&&Kh(k)===p.type)?(E=i(p,g.props),E.ref=vi(m,p,g),E.return=m,E):(E=Io(g.type,g.key,g.props,null,m.mode,E),E.ref=vi(m,p,g),E.return=m,E)}function u(m,p,g,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Ml(g,m.mode,E),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function d(m,p,g,E,k){return p===null||p.tag!==7?(p=qn(g,m.mode,E,k),p.return=m,p):(p=i(p,g),p.return=m,p)}function c(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=bl(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Gs:return g=Io(p.type,p.key,p.props,null,m.mode,g),g.ref=vi(m,null,p),g.return=m,g;case mr:return p=Ml(p,m.mode,g),p.return=m,p;case Gt:var E=p._init;return c(m,E(p._payload),g)}if(Ni(p)||fi(p))return p=qn(p,m.mode,g,null),p.return=m,p;ro(m,p)}return null}function f(m,p,g,E){var k=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:a(m,p,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Gs:return g.key===k?l(m,p,g,E):null;case mr:return g.key===k?u(m,p,g,E):null;case Gt:return k=g._init,f(m,p,k(g._payload),E)}if(Ni(g)||fi(g))return k!==null?null:d(m,p,g,E,null);ro(m,g)}return null}function _(m,p,g,E,k){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(g)||null,a(p,m,""+E,k);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Gs:return m=m.get(E.key===null?g:E.key)||null,l(p,m,E,k);case mr:return m=m.get(E.key===null?g:E.key)||null,u(p,m,E,k);case Gt:var T=E._init;return _(m,p,g,T(E._payload),k)}if(Ni(E)||fi(E))return m=m.get(g)||null,d(p,m,E,k,null);ro(p,E)}return null}function v(m,p,g,E){for(var k=null,T=null,P=p,N=p=0,x=null;P!==null&&N<g.length;N++){P.index>N?(x=P,P=null):x=P.sibling;var O=f(m,P,g[N],E);if(O===null){P===null&&(P=x);break}t&&P&&O.alternate===null&&e(m,P),p=s(O,p,N),T===null?k=O:T.sibling=O,T=O,P=x}if(N===g.length)return n(m,P),J&&Ln(m,N),k;if(P===null){for(;N<g.length;N++)P=c(m,g[N],E),P!==null&&(p=s(P,p,N),T===null?k=P:T.sibling=P,T=P);return J&&Ln(m,N),k}for(P=r(m,P);N<g.length;N++)x=_(P,m,N,g[N],E),x!==null&&(t&&x.alternate!==null&&P.delete(x.key===null?N:x.key),p=s(x,p,N),T===null?k=x:T.sibling=x,T=x);return t&&P.forEach(function(he){return e(m,he)}),J&&Ln(m,N),k}function y(m,p,g,E){var k=fi(g);if(typeof k!="function")throw Error(C(150));if(g=k.call(g),g==null)throw Error(C(151));for(var T=k=null,P=p,N=p=0,x=null,O=g.next();P!==null&&!O.done;N++,O=g.next()){P.index>N?(x=P,P=null):x=P.sibling;var he=f(m,P,O.value,E);if(he===null){P===null&&(P=x);break}t&&P&&he.alternate===null&&e(m,P),p=s(he,p,N),T===null?k=he:T.sibling=he,T=he,P=x}if(O.done)return n(m,P),J&&Ln(m,N),k;if(P===null){for(;!O.done;N++,O=g.next())O=c(m,O.value,E),O!==null&&(p=s(O,p,N),T===null?k=O:T.sibling=O,T=O);return J&&Ln(m,N),k}for(P=r(m,P);!O.done;N++,O=g.next())O=_(P,m,N,O.value,E),O!==null&&(t&&O.alternate!==null&&P.delete(O.key===null?N:O.key),p=s(O,p,N),T===null?k=O:T.sibling=O,T=O);return t&&P.forEach(function(On){return e(m,On)}),J&&Ln(m,N),k}function w(m,p,g,E){if(typeof g=="object"&&g!==null&&g.type===gr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Gs:e:{for(var k=g.key,T=p;T!==null;){if(T.key===k){if(k=g.type,k===gr){if(T.tag===7){n(m,T.sibling),p=i(T,g.props.children),p.return=m,m=p;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Gt&&Kh(k)===T.type){n(m,T.sibling),p=i(T,g.props),p.ref=vi(m,T,g),p.return=m,m=p;break e}n(m,T);break}else e(m,T);T=T.sibling}g.type===gr?(p=qn(g.props.children,m.mode,E,g.key),p.return=m,m=p):(E=Io(g.type,g.key,g.props,null,m.mode,E),E.ref=vi(m,p,g),E.return=m,m=E)}return o(m);case mr:e:{for(T=g.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=Ml(g,m.mode,E),p.return=m,m=p}return o(m);case Gt:return T=g._init,w(m,p,T(g._payload),E)}if(Ni(g))return v(m,p,g,E);if(fi(g))return y(m,p,g,E);ro(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=bl(g,m.mode,E),p.return=m,m=p),o(m)):n(m,p)}return w}var Br=lg(!0),ug=lg(!1),Ho=Tn(null),Vo=null,Ir=null,Wc=null;function zc(){Wc=Ir=Vo=null}function Bc(t){var e=Ho.current;X(Ho),t._currentValue=e}function Au(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Dr(t,e){Vo=t,Wc=Ir=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Me=!0),t.firstContext=null)}function Ze(t){var e=t._currentValue;if(Wc!==t)if(t={context:t,memoizedValue:e,next:null},Ir===null){if(Vo===null)throw Error(C(308));Ir=t,Vo.dependencies={lanes:0,firstContext:t}}else Ir=Ir.next=t;return e}var Bn=null;function Hc(t){Bn===null?Bn=[t]:Bn.push(t)}function cg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Hc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Lt(t,r)}function Lt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qt=!1;function Vc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function dg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ot(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ln(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Lt(t,n)}return i=r.interleaved,i===null?(e.next=e,Hc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Lt(t,n)}function vo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pc(t,n)}}function Qh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $o(t,e,n,r){var i=t.updateQueue;qt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(s!==null){var c=i.baseState;o=0,d=u=l=null,a=s;do{var f=a.lane,_=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(f=e,_=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){c=v.call(_,c,f);break e}c=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,f=typeof v=="function"?v.call(_,c,f):v,f==null)break e;c=ne({},c,f);break e;case 2:qt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else _={eventTime:_,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=_,l=c):d=d.next=_,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=c),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Jn|=o,t.lanes=o,t.memoizedState=c}}function Xh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var As={},vt=Tn(As),ss=Tn(As),os=Tn(As);function Hn(t){if(t===As)throw Error(C(174));return t}function $c(t,e){switch(Y(os,e),Y(ss,t),Y(vt,As),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:du(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=du(e,t)}X(vt),Y(vt,e)}function Hr(){X(vt),X(ss),X(os)}function hg(t){Hn(os.current);var e=Hn(vt.current),n=du(e,t.type);e!==n&&(Y(ss,t),Y(vt,n))}function Gc(t){ss.current===t&&(X(vt),X(ss))}var Z=Tn(0);function Go(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nl=[];function qc(){for(var t=0;t<Nl.length;t++)Nl[t]._workInProgressVersionPrimary=null;Nl.length=0}var yo=zt.ReactCurrentDispatcher,Pl=zt.ReactCurrentBatchConfig,Xn=0,te=null,le=null,me=null,qo=!1,Fi=!1,as=0,ME=0;function Ce(){throw Error(C(321))}function Yc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!dt(t[n],e[n]))return!1;return!0}function Kc(t,e,n,r,i,s){if(Xn=s,te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yo.current=t===null||t.memoizedState===null?UE:WE,t=n(r,i),Fi){s=0;do{if(Fi=!1,as=0,25<=s)throw Error(C(301));s+=1,me=le=null,e.updateQueue=null,yo.current=zE,t=n(r,i)}while(Fi)}if(yo.current=Yo,e=le!==null&&le.next!==null,Xn=0,me=le=te=null,qo=!1,e)throw Error(C(300));return t}function Qc(){var t=as!==0;return as=0,t}function mt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?te.memoizedState=me=t:me=me.next=t,me}function et(){if(le===null){var t=te.alternate;t=t!==null?t.memoizedState:null}else t=le.next;var e=me===null?te.memoizedState:me.next;if(e!==null)me=e,le=t;else{if(t===null)throw Error(C(310));le=t,t={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},me===null?te.memoizedState=me=t:me=me.next=t}return me}function ls(t,e){return typeof e=="function"?e(t):e}function Rl(t){var e=et(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=le,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var d=u.lane;if((Xn&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=c,o=r):l=l.next=c,te.lanes|=d,Jn|=d}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,dt(r,e.memoizedState)||(Me=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,te.lanes|=s,Jn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Al(t){var e=et(),n=e.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);dt(s,e.memoizedState)||(Me=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function fg(){}function pg(t,e){var n=te,r=et(),i=e(),s=!dt(r.memoizedState,i);if(s&&(r.memoizedState=i,Me=!0),r=r.queue,Xc(_g.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,us(9,gg.bind(null,n,r,i,e),void 0,null),ve===null)throw Error(C(349));Xn&30||mg(n,e,i)}return i}function mg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=te.updateQueue,e===null?(e={lastEffect:null,stores:null},te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function gg(t,e,n,r){e.value=n,e.getSnapshot=r,vg(e)&&yg(t)}function _g(t,e,n){return n(function(){vg(e)&&yg(t)})}function vg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!dt(t,n)}catch{return!0}}function yg(t){var e=Lt(t,1);e!==null&&ut(e,t,1,-1)}function Jh(t){var e=mt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ls,lastRenderedState:t},e.queue=t,t=t.dispatch=FE.bind(null,te,t),[e.memoizedState,t]}function us(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=te.updateQueue,e===null?(e={lastEffect:null,stores:null},te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function wg(){return et().memoizedState}function wo(t,e,n,r){var i=mt();te.flags|=t,i.memoizedState=us(1|e,n,void 0,r===void 0?null:r)}function Da(t,e,n,r){var i=et();r=r===void 0?null:r;var s=void 0;if(le!==null){var o=le.memoizedState;if(s=o.destroy,r!==null&&Yc(r,o.deps)){i.memoizedState=us(e,n,s,r);return}}te.flags|=t,i.memoizedState=us(1|e,n,s,r)}function Zh(t,e){return wo(8390656,8,t,e)}function Xc(t,e){return Da(2048,8,t,e)}function Eg(t,e){return Da(4,2,t,e)}function Sg(t,e){return Da(4,4,t,e)}function Cg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ig(t,e,n){return n=n!=null?n.concat([t]):null,Da(4,4,Cg.bind(null,e,t),n)}function Jc(){}function kg(t,e){var n=et();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Yc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Tg(t,e){var n=et();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Yc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function xg(t,e,n){return Xn&21?(dt(n,e)||(n=Om(),te.lanes|=n,Jn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Me=!0),t.memoizedState=n)}function LE(t,e){var n=V;V=n!==0&&4>n?n:4,t(!0);var r=Pl.transition;Pl.transition={};try{t(!1),e()}finally{V=n,Pl.transition=r}}function Ng(){return et().memoizedState}function jE(t,e,n){var r=cn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Pg(t))Rg(e,n);else if(n=cg(t,e,n,r),n!==null){var i=Re();ut(n,t,r,i),Ag(n,e,r)}}function FE(t,e,n){var r=cn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Pg(t))Rg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,dt(a,o)){var l=e.interleaved;l===null?(i.next=i,Hc(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=cg(t,e,i,r),n!==null&&(i=Re(),ut(n,t,r,i),Ag(n,e,r))}}function Pg(t){var e=t.alternate;return t===te||e!==null&&e===te}function Rg(t,e){Fi=qo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ag(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pc(t,n)}}var Yo={readContext:Ze,useCallback:Ce,useContext:Ce,useEffect:Ce,useImperativeHandle:Ce,useInsertionEffect:Ce,useLayoutEffect:Ce,useMemo:Ce,useReducer:Ce,useRef:Ce,useState:Ce,useDebugValue:Ce,useDeferredValue:Ce,useTransition:Ce,useMutableSource:Ce,useSyncExternalStore:Ce,useId:Ce,unstable_isNewReconciler:!1},UE={readContext:Ze,useCallback:function(t,e){return mt().memoizedState=[t,e===void 0?null:e],t},useContext:Ze,useEffect:Zh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,wo(4194308,4,Cg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return wo(4194308,4,t,e)},useInsertionEffect:function(t,e){return wo(4,2,t,e)},useMemo:function(t,e){var n=mt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=mt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=jE.bind(null,te,t),[r.memoizedState,t]},useRef:function(t){var e=mt();return t={current:t},e.memoizedState=t},useState:Jh,useDebugValue:Jc,useDeferredValue:function(t){return mt().memoizedState=t},useTransition:function(){var t=Jh(!1),e=t[0];return t=LE.bind(null,t[1]),mt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=te,i=mt();if(J){if(n===void 0)throw Error(C(407));n=n()}else{if(n=e(),ve===null)throw Error(C(349));Xn&30||mg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Zh(_g.bind(null,r,s,t),[t]),r.flags|=2048,us(9,gg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=mt(),e=ve.identifierPrefix;if(J){var n=Tt,r=kt;n=(r&~(1<<32-lt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=as++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ME++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},WE={readContext:Ze,useCallback:kg,useContext:Ze,useEffect:Xc,useImperativeHandle:Ig,useInsertionEffect:Eg,useLayoutEffect:Sg,useMemo:Tg,useReducer:Rl,useRef:wg,useState:function(){return Rl(ls)},useDebugValue:Jc,useDeferredValue:function(t){var e=et();return xg(e,le.memoizedState,t)},useTransition:function(){var t=Rl(ls)[0],e=et().memoizedState;return[t,e]},useMutableSource:fg,useSyncExternalStore:pg,useId:Ng,unstable_isNewReconciler:!1},zE={readContext:Ze,useCallback:kg,useContext:Ze,useEffect:Xc,useImperativeHandle:Ig,useInsertionEffect:Eg,useLayoutEffect:Sg,useMemo:Tg,useReducer:Al,useRef:wg,useState:function(){return Al(ls)},useDebugValue:Jc,useDeferredValue:function(t){var e=et();return le===null?e.memoizedState=t:xg(e,le.memoizedState,t)},useTransition:function(){var t=Al(ls)[0],e=et().memoizedState;return[t,e]},useMutableSource:fg,useSyncExternalStore:pg,useId:Ng,unstable_isNewReconciler:!1};function nt(t,e){if(t&&t.defaultProps){e=ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ou(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ba={isMounted:function(t){return(t=t._reactInternals)?ar(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Re(),i=cn(t),s=Ot(r,i);s.payload=e,n!=null&&(s.callback=n),e=ln(t,s,i),e!==null&&(ut(e,t,i,r),vo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Re(),i=cn(t),s=Ot(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ln(t,s,i),e!==null&&(ut(e,t,i,r),vo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Re(),r=cn(t),i=Ot(n,r);i.tag=2,e!=null&&(i.callback=e),e=ln(t,i,r),e!==null&&(ut(e,t,r,n),vo(e,t,r))}};function ef(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ts(n,r)||!ts(i,s):!0}function Og(t,e,n){var r=!1,i=wn,s=e.contextType;return typeof s=="object"&&s!==null?s=Ze(s):(i=Fe(e)?Kn:xe.current,r=e.contextTypes,s=(r=r!=null)?Wr(t,i):wn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ba,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function tf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ba.enqueueReplaceState(e,e.state,null)}function Du(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Vc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ze(s):(s=Fe(e)?Kn:xe.current,i.context=Wr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ou(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ba.enqueueReplaceState(i,i.state,null),$o(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Vr(t,e){try{var n="",r=e;do n+=mw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ol(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function bu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var BE=typeof WeakMap=="function"?WeakMap:Map;function Dg(t,e,n){n=Ot(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Qo||(Qo=!0,Vu=r),bu(t,e)},n}function bg(t,e,n){n=Ot(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){bu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){bu(t,e),typeof r!="function"&&(un===null?un=new Set([this]):un.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function nf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new BE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=n0.bind(null,t,e,n),e.then(t,t))}function rf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function sf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ot(-1,1),e.tag=2,ln(n,e,1))),n.lanes|=1),t)}var HE=zt.ReactCurrentOwner,Me=!1;function Ne(t,e,n,r){e.child=t===null?ug(e,null,n,r):Br(e,t.child,n,r)}function of(t,e,n,r,i){n=n.render;var s=e.ref;return Dr(e,i),r=Kc(t,e,n,r,s,i),n=Qc(),t!==null&&!Me?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jt(t,e,i)):(J&&n&&jc(e),e.flags|=1,Ne(t,e,r,i),e.child)}function af(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!od(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Mg(t,e,s,r,i)):(t=Io(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ts,n(o,r)&&t.ref===e.ref)return jt(t,e,i)}return e.flags|=1,t=dn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Mg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ts(s,r)&&t.ref===e.ref)if(Me=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Me=!0);else return e.lanes=t.lanes,jt(t,e,i)}return Mu(t,e,n,r,i)}function Lg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Y(Tr,Be),Be|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Y(Tr,Be),Be|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Y(Tr,Be),Be|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Y(Tr,Be),Be|=r;return Ne(t,e,i,n),e.child}function jg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Mu(t,e,n,r,i){var s=Fe(n)?Kn:xe.current;return s=Wr(e,s),Dr(e,i),n=Kc(t,e,n,r,s,i),r=Qc(),t!==null&&!Me?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,jt(t,e,i)):(J&&r&&jc(e),e.flags|=1,Ne(t,e,n,i),e.child)}function lf(t,e,n,r,i){if(Fe(n)){var s=!0;Wo(e)}else s=!1;if(Dr(e,i),e.stateNode===null)Eo(t,e),Og(e,n,r),Du(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ze(u):(u=Fe(n)?Kn:xe.current,u=Wr(e,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&tf(e,o,r,u),qt=!1;var f=e.memoizedState;o.state=f,$o(e,r,o,i),l=e.memoizedState,a!==r||f!==l||je.current||qt?(typeof d=="function"&&(Ou(e,n,d,r),l=e.memoizedState),(a=qt||ef(e,n,a,r,f,l,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,dg(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:nt(e.type,a),o.props=u,c=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ze(l):(l=Fe(n)?Kn:xe.current,l=Wr(e,l));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==c||f!==l)&&tf(e,o,r,l),qt=!1,f=e.memoizedState,o.state=f,$o(e,r,o,i);var v=e.memoizedState;a!==c||f!==v||je.current||qt?(typeof _=="function"&&(Ou(e,n,_,r),v=e.memoizedState),(u=qt||ef(e,n,u,r,f,v,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Lu(t,e,n,r,s,i)}function Lu(t,e,n,r,i,s){jg(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Gh(e,n,!1),jt(t,e,s);r=e.stateNode,HE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Br(e,t.child,null,s),e.child=Br(e,null,a,s)):Ne(t,e,a,s),e.memoizedState=r.state,i&&Gh(e,n,!0),e.child}function Fg(t){var e=t.stateNode;e.pendingContext?$h(t,e.pendingContext,e.pendingContext!==e.context):e.context&&$h(t,e.context,!1),$c(t,e.containerInfo)}function uf(t,e,n,r,i){return zr(),Uc(i),e.flags|=256,Ne(t,e,n,r),e.child}var ju={dehydrated:null,treeContext:null,retryLane:0};function Fu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ug(t,e,n){var r=e.pendingProps,i=Z.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Y(Z,i&1),t===null)return Ru(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ja(o,r,0,null),t=qn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Fu(n),e.memoizedState=ju,t):Zc(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return VE(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=dn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=dn(a,s):(s=qn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Fu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ju,r}return s=t.child,t=s.sibling,r=dn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Zc(t,e){return e=ja({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function io(t,e,n,r){return r!==null&&Uc(r),Br(e,t.child,null,n),t=Zc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function VE(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ol(Error(C(422))),io(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ja({mode:"visible",children:r.children},i,0,null),s=qn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Br(e,t.child,null,o),e.child.memoizedState=Fu(o),e.memoizedState=ju,s);if(!(e.mode&1))return io(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(C(419)),r=Ol(s,r,void 0),io(t,e,o,r)}if(a=(o&t.childLanes)!==0,Me||a){if(r=ve,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Lt(t,i),ut(r,t,i,-1))}return sd(),r=Ol(Error(C(421))),io(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=r0.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ve=an(i.nextSibling),$e=e,J=!0,it=null,t!==null&&(Ke[Qe++]=kt,Ke[Qe++]=Tt,Ke[Qe++]=Qn,kt=t.id,Tt=t.overflow,Qn=e),e=Zc(e,r.children),e.flags|=4096,e)}function cf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Au(t.return,e,n)}function Dl(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Wg(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ne(t,e,r.children,n),r=Z.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&cf(t,n,e);else if(t.tag===19)cf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Y(Z,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Go(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Dl(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Go(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Dl(e,!0,n,null,s);break;case"together":Dl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Eo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function jt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Jn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(C(153));if(e.child!==null){for(t=e.child,n=dn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=dn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $E(t,e,n){switch(e.tag){case 3:Fg(e),zr();break;case 5:hg(e);break;case 1:Fe(e.type)&&Wo(e);break;case 4:$c(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Y(Ho,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Y(Z,Z.current&1),e.flags|=128,null):n&e.child.childLanes?Ug(t,e,n):(Y(Z,Z.current&1),t=jt(t,e,n),t!==null?t.sibling:null);Y(Z,Z.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Wg(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Y(Z,Z.current),r)break;return null;case 22:case 23:return e.lanes=0,Lg(t,e,n)}return jt(t,e,n)}var zg,Uu,Bg,Hg;zg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Uu=function(){};Bg=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Hn(vt.current);var s=null;switch(n){case"input":i=au(t,i),r=au(t,r),s=[];break;case"select":i=ne({},i,{value:void 0}),r=ne({},r,{value:void 0}),s=[];break;case"textarea":i=cu(t,i),r=cu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Fo)}hu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Yi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Yi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&K("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Hg=function(t,e,n,r){n!==r&&(e.flags|=4)};function yi(t,e){if(!J)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ie(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function GE(t,e,n){var r=e.pendingProps;switch(Fc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(e),null;case 1:return Fe(e.type)&&Uo(),Ie(e),null;case 3:return r=e.stateNode,Hr(),X(je),X(xe),qc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(no(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,it!==null&&(qu(it),it=null))),Uu(t,e),Ie(e),null;case 5:Gc(e);var i=Hn(os.current);if(n=e.type,t!==null&&e.stateNode!=null)Bg(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(C(166));return Ie(e),null}if(t=Hn(vt.current),no(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[gt]=e,r[is]=s,t=(e.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<Ri.length;i++)K(Ri[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":vh(r,s),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},K("invalid",r);break;case"textarea":wh(r,s),K("invalid",r)}hu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&to(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&to(r.textContent,a,t),i=["children",""+a]):Yi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&K("scroll",r)}switch(n){case"input":qs(r),yh(r,s,!0);break;case"textarea":qs(r),Eh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Fo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=_m(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[gt]=e,t[is]=r,zg(t,e,!1,!1),e.stateNode=t;e:{switch(o=fu(n,r),n){case"dialog":K("cancel",t),K("close",t),i=r;break;case"iframe":case"object":case"embed":K("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ri.length;i++)K(Ri[i],t);i=r;break;case"source":K("error",t),i=r;break;case"img":case"image":case"link":K("error",t),K("load",t),i=r;break;case"details":K("toggle",t),i=r;break;case"input":vh(t,r),i=au(t,r),K("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ne({},r,{value:void 0}),K("invalid",t);break;case"textarea":wh(t,r),i=cu(t,r),K("invalid",t);break;default:i=r}hu(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?wm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ki(t,l):typeof l=="number"&&Ki(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Yi.hasOwnProperty(s)?l!=null&&s==="onScroll"&&K("scroll",t):l!=null&&Cc(t,s,l,o))}switch(n){case"input":qs(t),yh(t,r,!1);break;case"textarea":qs(t),Eh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+yn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Pr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Pr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Fo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ie(e),null;case 6:if(t&&e.stateNode!=null)Hg(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(C(166));if(n=Hn(os.current),Hn(vt.current),no(e)){if(r=e.stateNode,n=e.memoizedProps,r[gt]=e,(s=r.nodeValue!==n)&&(t=$e,t!==null))switch(t.tag){case 3:to(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&to(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gt]=e,e.stateNode=r}return Ie(e),null;case 13:if(X(Z),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(J&&Ve!==null&&e.mode&1&&!(e.flags&128))ag(),zr(),e.flags|=98560,s=!1;else if(s=no(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(C(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[gt]=e}else zr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ie(e),s=!1}else it!==null&&(qu(it),it=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Z.current&1?de===0&&(de=3):sd())),e.updateQueue!==null&&(e.flags|=4),Ie(e),null);case 4:return Hr(),Uu(t,e),t===null&&ns(e.stateNode.containerInfo),Ie(e),null;case 10:return Bc(e.type._context),Ie(e),null;case 17:return Fe(e.type)&&Uo(),Ie(e),null;case 19:if(X(Z),s=e.memoizedState,s===null)return Ie(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)yi(s,!1);else{if(de!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Go(t),o!==null){for(e.flags|=128,yi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Y(Z,Z.current&1|2),e.child}t=t.sibling}s.tail!==null&&se()>$r&&(e.flags|=128,r=!0,yi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Go(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),yi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!J)return Ie(e),null}else 2*se()-s.renderingStartTime>$r&&n!==1073741824&&(e.flags|=128,r=!0,yi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=se(),e.sibling=null,n=Z.current,Y(Z,r?n&1|2:n&1),e):(Ie(e),null);case 22:case 23:return id(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Be&1073741824&&(Ie(e),e.subtreeFlags&6&&(e.flags|=8192)):Ie(e),null;case 24:return null;case 25:return null}throw Error(C(156,e.tag))}function qE(t,e){switch(Fc(e),e.tag){case 1:return Fe(e.type)&&Uo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hr(),X(je),X(xe),qc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Gc(e),null;case 13:if(X(Z),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(C(340));zr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return X(Z),null;case 4:return Hr(),null;case 10:return Bc(e.type._context),null;case 22:case 23:return id(),null;case 24:return null;default:return null}}var so=!1,ke=!1,YE=typeof WeakSet=="function"?WeakSet:Set,R=null;function kr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(t,e,r)}else n.current=null}function Wu(t,e,n){try{n()}catch(r){re(t,e,r)}}var df=!1;function KE(t,e){if(Cu=Mo,t=Ym(),Lc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,d=0,c=t,f=null;t:for(;;){for(var _;c!==n||i!==0&&c.nodeType!==3||(a=o+i),c!==s||r!==0&&c.nodeType!==3||(l=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(_=c.firstChild)!==null;)f=c,c=_;for(;;){if(c===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++d===r&&(l=o),(_=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=_}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Iu={focusedElem:t,selectionRange:n},Mo=!1,R=e;R!==null;)if(e=R,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,R=t;else for(;R!==null;){e=R;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,w=v.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?y:nt(e.type,y),w);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(E){re(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,R=t;break}R=e.return}return v=df,df=!1,v}function Ui(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Wu(e,n,s)}i=i.next}while(i!==r)}}function Ma(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function zu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Vg(t){var e=t.alternate;e!==null&&(t.alternate=null,Vg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[gt],delete e[is],delete e[xu],delete e[AE],delete e[OE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $g(t){return t.tag===5||t.tag===3||t.tag===4}function hf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$g(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Fo));else if(r!==4&&(t=t.child,t!==null))for(Bu(t,e,n),t=t.sibling;t!==null;)Bu(t,e,n),t=t.sibling}function Hu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Hu(t,e,n),t=t.sibling;t!==null;)Hu(t,e,n),t=t.sibling}var ye=null,rt=!1;function Ht(t,e,n){for(n=n.child;n!==null;)Gg(t,e,n),n=n.sibling}function Gg(t,e,n){if(_t&&typeof _t.onCommitFiberUnmount=="function")try{_t.onCommitFiberUnmount(xa,n)}catch{}switch(n.tag){case 5:ke||kr(n,e);case 6:var r=ye,i=rt;ye=null,Ht(t,e,n),ye=r,rt=i,ye!==null&&(rt?(t=ye,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(rt?(t=ye,n=n.stateNode,t.nodeType===8?Tl(t.parentNode,n):t.nodeType===1&&Tl(t,n),Zi(t)):Tl(ye,n.stateNode));break;case 4:r=ye,i=rt,ye=n.stateNode.containerInfo,rt=!0,Ht(t,e,n),ye=r,rt=i;break;case 0:case 11:case 14:case 15:if(!ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Wu(n,e,o),i=i.next}while(i!==r)}Ht(t,e,n);break;case 1:if(!ke&&(kr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){re(n,e,a)}Ht(t,e,n);break;case 21:Ht(t,e,n);break;case 22:n.mode&1?(ke=(r=ke)||n.memoizedState!==null,Ht(t,e,n),ke=r):Ht(t,e,n);break;default:Ht(t,e,n)}}function ff(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new YE),e.forEach(function(r){var i=i0.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function tt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ye=a.stateNode,rt=!1;break e;case 3:ye=a.stateNode.containerInfo,rt=!0;break e;case 4:ye=a.stateNode.containerInfo,rt=!0;break e}a=a.return}if(ye===null)throw Error(C(160));Gg(s,o,i),ye=null,rt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){re(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)qg(e,t),e=e.sibling}function qg(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(tt(e,t),pt(t),r&4){try{Ui(3,t,t.return),Ma(3,t)}catch(y){re(t,t.return,y)}try{Ui(5,t,t.return)}catch(y){re(t,t.return,y)}}break;case 1:tt(e,t),pt(t),r&512&&n!==null&&kr(n,n.return);break;case 5:if(tt(e,t),pt(t),r&512&&n!==null&&kr(n,n.return),t.flags&32){var i=t.stateNode;try{Ki(i,"")}catch(y){re(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&mm(i,s),fu(a,o);var u=fu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],c=l[o+1];d==="style"?wm(i,c):d==="dangerouslySetInnerHTML"?vm(i,c):d==="children"?Ki(i,c):Cc(i,d,c,u)}switch(a){case"input":lu(i,s);break;case"textarea":gm(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Pr(i,!!s.multiple,_,!1):f!==!!s.multiple&&(s.defaultValue!=null?Pr(i,!!s.multiple,s.defaultValue,!0):Pr(i,!!s.multiple,s.multiple?[]:"",!1))}i[is]=s}catch(y){re(t,t.return,y)}}break;case 6:if(tt(e,t),pt(t),r&4){if(t.stateNode===null)throw Error(C(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){re(t,t.return,y)}}break;case 3:if(tt(e,t),pt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zi(e.containerInfo)}catch(y){re(t,t.return,y)}break;case 4:tt(e,t),pt(t);break;case 13:tt(e,t),pt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(nd=se())),r&4&&ff(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(ke=(u=ke)||d,tt(e,t),ke=u):tt(e,t),pt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(R=t,d=t.child;d!==null;){for(c=R=d;R!==null;){switch(f=R,_=f.child,f.tag){case 0:case 11:case 14:case 15:Ui(4,f,f.return);break;case 1:kr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){re(r,n,y)}}break;case 5:kr(f,f.return);break;case 22:if(f.memoizedState!==null){mf(c);continue}}_!==null?(_.return=f,R=_):mf(c)}d=d.sibling}e:for(d=null,c=t;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=c.stateNode,l=c.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ym("display",o))}catch(y){re(t,t.return,y)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(y){re(t,t.return,y)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===t)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===t)break e;for(;c.sibling===null;){if(c.return===null||c.return===t)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:tt(e,t),pt(t),r&4&&ff(t);break;case 21:break;default:tt(e,t),pt(t)}}function pt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($g(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ki(i,""),r.flags&=-33);var s=hf(t);Hu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=hf(t);Bu(t,a,o);break;default:throw Error(C(161))}}catch(l){re(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function QE(t,e,n){R=t,Yg(t)}function Yg(t,e,n){for(var r=(t.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||so;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||ke;a=so;var u=ke;if(so=o,(ke=l)&&!u)for(R=i;R!==null;)o=R,l=o.child,o.tag===22&&o.memoizedState!==null?gf(i):l!==null?(l.return=o,R=l):gf(i);for(;s!==null;)R=s,Yg(s),s=s.sibling;R=i,so=a,ke=u}pf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,R=s):pf(t)}}function pf(t){for(;R!==null;){var e=R;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ke||Ma(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ke)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:nt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Xh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&Zi(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}ke||e.flags&512&&zu(e)}catch(f){re(e,e.return,f)}}if(e===t){R=null;break}if(n=e.sibling,n!==null){n.return=e.return,R=n;break}R=e.return}}function mf(t){for(;R!==null;){var e=R;if(e===t){R=null;break}var n=e.sibling;if(n!==null){n.return=e.return,R=n;break}R=e.return}}function gf(t){for(;R!==null;){var e=R;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ma(4,e)}catch(l){re(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){re(e,i,l)}}var s=e.return;try{zu(e)}catch(l){re(e,s,l)}break;case 5:var o=e.return;try{zu(e)}catch(l){re(e,o,l)}}}catch(l){re(e,e.return,l)}if(e===t){R=null;break}var a=e.sibling;if(a!==null){a.return=e.return,R=a;break}R=e.return}}var XE=Math.ceil,Ko=zt.ReactCurrentDispatcher,ed=zt.ReactCurrentOwner,Je=zt.ReactCurrentBatchConfig,z=0,ve=null,ae=null,we=0,Be=0,Tr=Tn(0),de=0,cs=null,Jn=0,La=0,td=0,Wi=null,be=null,nd=0,$r=1/0,Ct=null,Qo=!1,Vu=null,un=null,oo=!1,tn=null,Xo=0,zi=0,$u=null,So=-1,Co=0;function Re(){return z&6?se():So!==-1?So:So=se()}function cn(t){return t.mode&1?z&2&&we!==0?we&-we:bE.transition!==null?(Co===0&&(Co=Om()),Co):(t=V,t!==0||(t=window.event,t=t===void 0?16:Um(t.type)),t):1}function ut(t,e,n,r){if(50<zi)throw zi=0,$u=null,Error(C(185));Ns(t,n,r),(!(z&2)||t!==ve)&&(t===ve&&(!(z&2)&&(La|=n),de===4&&Kt(t,we)),Ue(t,r),n===1&&z===0&&!(e.mode&1)&&($r=se()+500,Oa&&xn()))}function Ue(t,e){var n=t.callbackNode;bw(t,e);var r=bo(t,t===ve?we:0);if(r===0)n!==null&&Ih(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ih(n),e===1)t.tag===0?DE(_f.bind(null,t)):ig(_f.bind(null,t)),PE(function(){!(z&6)&&xn()}),n=null;else{switch(Dm(r)){case 1:n=Nc;break;case 4:n=Rm;break;case 16:n=Do;break;case 536870912:n=Am;break;default:n=Do}n=n_(n,Kg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Kg(t,e){if(So=-1,Co=0,z&6)throw Error(C(327));var n=t.callbackNode;if(br()&&t.callbackNode!==n)return null;var r=bo(t,t===ve?we:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Jo(t,r);else{e=r;var i=z;z|=2;var s=Xg();(ve!==t||we!==e)&&(Ct=null,$r=se()+500,Gn(t,e));do try{e0();break}catch(a){Qg(t,a)}while(!0);zc(),Ko.current=s,z=i,ae!==null?e=0:(ve=null,we=0,e=de)}if(e!==0){if(e===2&&(i=vu(t),i!==0&&(r=i,e=Gu(t,i))),e===1)throw n=cs,Gn(t,0),Kt(t,r),Ue(t,se()),n;if(e===6)Kt(t,r);else{if(i=t.current.alternate,!(r&30)&&!JE(i)&&(e=Jo(t,r),e===2&&(s=vu(t),s!==0&&(r=s,e=Gu(t,s))),e===1))throw n=cs,Gn(t,0),Kt(t,r),Ue(t,se()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(C(345));case 2:jn(t,be,Ct);break;case 3:if(Kt(t,r),(r&130023424)===r&&(e=nd+500-se(),10<e)){if(bo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Re(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Tu(jn.bind(null,t,be,Ct),e);break}jn(t,be,Ct);break;case 4:if(Kt(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-lt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*XE(r/1960))-r,10<r){t.timeoutHandle=Tu(jn.bind(null,t,be,Ct),r);break}jn(t,be,Ct);break;case 5:jn(t,be,Ct);break;default:throw Error(C(329))}}}return Ue(t,se()),t.callbackNode===n?Kg.bind(null,t):null}function Gu(t,e){var n=Wi;return t.current.memoizedState.isDehydrated&&(Gn(t,e).flags|=256),t=Jo(t,e),t!==2&&(e=be,be=n,e!==null&&qu(e)),t}function qu(t){be===null?be=t:be.push.apply(be,t)}function JE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!dt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Kt(t,e){for(e&=~td,e&=~La,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-lt(e),r=1<<n;t[n]=-1,e&=~r}}function _f(t){if(z&6)throw Error(C(327));br();var e=bo(t,0);if(!(e&1))return Ue(t,se()),null;var n=Jo(t,e);if(t.tag!==0&&n===2){var r=vu(t);r!==0&&(e=r,n=Gu(t,r))}if(n===1)throw n=cs,Gn(t,0),Kt(t,e),Ue(t,se()),n;if(n===6)throw Error(C(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,jn(t,be,Ct),Ue(t,se()),null}function rd(t,e){var n=z;z|=1;try{return t(e)}finally{z=n,z===0&&($r=se()+500,Oa&&xn())}}function Zn(t){tn!==null&&tn.tag===0&&!(z&6)&&br();var e=z;z|=1;var n=Je.transition,r=V;try{if(Je.transition=null,V=1,t)return t()}finally{V=r,Je.transition=n,z=e,!(z&6)&&xn()}}function id(){Be=Tr.current,X(Tr)}function Gn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,NE(n)),ae!==null)for(n=ae.return;n!==null;){var r=n;switch(Fc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Uo();break;case 3:Hr(),X(je),X(xe),qc();break;case 5:Gc(r);break;case 4:Hr();break;case 13:X(Z);break;case 19:X(Z);break;case 10:Bc(r.type._context);break;case 22:case 23:id()}n=n.return}if(ve=t,ae=t=dn(t.current,null),we=Be=e,de=0,cs=null,td=La=Jn=0,be=Wi=null,Bn!==null){for(e=0;e<Bn.length;e++)if(n=Bn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Bn=null}return t}function Qg(t,e){do{var n=ae;try{if(zc(),yo.current=Yo,qo){for(var r=te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}qo=!1}if(Xn=0,me=le=te=null,Fi=!1,as=0,ed.current=null,n===null||n.return===null){de=1,cs=e,ae=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=we,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=rf(o);if(_!==null){_.flags&=-257,sf(_,o,a,s,e),_.mode&1&&nf(s,u,e),e=_,l=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){nf(s,u,e),sd();break e}l=Error(C(426))}}else if(J&&a.mode&1){var w=rf(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),sf(w,o,a,s,e),Uc(Vr(l,a));break e}}s=l=Vr(l,a),de!==4&&(de=2),Wi===null?Wi=[s]:Wi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=Dg(s,l,e);Qh(s,m);break e;case 1:a=l;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(un===null||!un.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=bg(s,a,e);Qh(s,E);break e}}s=s.return}while(s!==null)}Zg(n)}catch(k){e=k,ae===n&&n!==null&&(ae=n=n.return);continue}break}while(!0)}function Xg(){var t=Ko.current;return Ko.current=Yo,t===null?Yo:t}function sd(){(de===0||de===3||de===2)&&(de=4),ve===null||!(Jn&268435455)&&!(La&268435455)||Kt(ve,we)}function Jo(t,e){var n=z;z|=2;var r=Xg();(ve!==t||we!==e)&&(Ct=null,Gn(t,e));do try{ZE();break}catch(i){Qg(t,i)}while(!0);if(zc(),z=n,Ko.current=r,ae!==null)throw Error(C(261));return ve=null,we=0,de}function ZE(){for(;ae!==null;)Jg(ae)}function e0(){for(;ae!==null&&!kw();)Jg(ae)}function Jg(t){var e=t_(t.alternate,t,Be);t.memoizedProps=t.pendingProps,e===null?Zg(t):ae=e,ed.current=null}function Zg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=qE(n,e),n!==null){n.flags&=32767,ae=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{de=6,ae=null;return}}else if(n=GE(n,e,Be),n!==null){ae=n;return}if(e=e.sibling,e!==null){ae=e;return}ae=e=t}while(e!==null);de===0&&(de=5)}function jn(t,e,n){var r=V,i=Je.transition;try{Je.transition=null,V=1,t0(t,e,n,r)}finally{Je.transition=i,V=r}return null}function t0(t,e,n,r){do br();while(tn!==null);if(z&6)throw Error(C(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(C(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Mw(t,s),t===ve&&(ae=ve=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||oo||(oo=!0,n_(Do,function(){return br(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Je.transition,Je.transition=null;var o=V;V=1;var a=z;z|=4,ed.current=null,KE(t,n),qg(n,t),EE(Iu),Mo=!!Cu,Iu=Cu=null,t.current=n,QE(n),Tw(),z=a,V=o,Je.transition=s}else t.current=n;if(oo&&(oo=!1,tn=t,Xo=i),s=t.pendingLanes,s===0&&(un=null),Pw(n.stateNode),Ue(t,se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Qo)throw Qo=!1,t=Vu,Vu=null,t;return Xo&1&&t.tag!==0&&br(),s=t.pendingLanes,s&1?t===$u?zi++:(zi=0,$u=t):zi=0,xn(),null}function br(){if(tn!==null){var t=Dm(Xo),e=Je.transition,n=V;try{if(Je.transition=null,V=16>t?16:t,tn===null)var r=!1;else{if(t=tn,tn=null,Xo=0,z&6)throw Error(C(331));var i=z;for(z|=4,R=t.current;R!==null;){var s=R,o=s.child;if(R.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(R=u;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:Ui(8,d,s)}var c=d.child;if(c!==null)c.return=d,R=c;else for(;R!==null;){d=R;var f=d.sibling,_=d.return;if(Vg(d),d===u){R=null;break}if(f!==null){f.return=_,R=f;break}R=_}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}R=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,R=o;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ui(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,R=m;break e}R=s.return}}var p=t.current;for(R=p;R!==null;){o=R;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,R=g;else e:for(o=p;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ma(9,a)}}catch(k){re(a,a.return,k)}if(a===o){R=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,R=E;break e}R=a.return}}if(z=i,xn(),_t&&typeof _t.onPostCommitFiberRoot=="function")try{_t.onPostCommitFiberRoot(xa,t)}catch{}r=!0}return r}finally{V=n,Je.transition=e}}return!1}function vf(t,e,n){e=Vr(n,e),e=Dg(t,e,1),t=ln(t,e,1),e=Re(),t!==null&&(Ns(t,1,e),Ue(t,e))}function re(t,e,n){if(t.tag===3)vf(t,t,n);else for(;e!==null;){if(e.tag===3){vf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(un===null||!un.has(r))){t=Vr(n,t),t=bg(e,t,1),e=ln(e,t,1),t=Re(),e!==null&&(Ns(e,1,t),Ue(e,t));break}}e=e.return}}function n0(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Re(),t.pingedLanes|=t.suspendedLanes&n,ve===t&&(we&n)===n&&(de===4||de===3&&(we&130023424)===we&&500>se()-nd?Gn(t,0):td|=n),Ue(t,e)}function e_(t,e){e===0&&(t.mode&1?(e=Qs,Qs<<=1,!(Qs&130023424)&&(Qs=4194304)):e=1);var n=Re();t=Lt(t,e),t!==null&&(Ns(t,e,n),Ue(t,n))}function r0(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),e_(t,n)}function i0(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(e),e_(t,n)}var t_;t_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||je.current)Me=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Me=!1,$E(t,e,n);Me=!!(t.flags&131072)}else Me=!1,J&&e.flags&1048576&&sg(e,Bo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Eo(t,e),t=e.pendingProps;var i=Wr(e,xe.current);Dr(e,n),i=Kc(null,e,r,t,i,n);var s=Qc();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Fe(r)?(s=!0,Wo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vc(e),i.updater=ba,e.stateNode=i,i._reactInternals=e,Du(e,r,t,n),e=Lu(null,e,r,!0,s,n)):(e.tag=0,J&&s&&jc(e),Ne(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Eo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=o0(r),t=nt(r,t),i){case 0:e=Mu(null,e,r,t,n);break e;case 1:e=lf(null,e,r,t,n);break e;case 11:e=of(null,e,r,t,n);break e;case 14:e=af(null,e,r,nt(r.type,t),n);break e}throw Error(C(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),Mu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),lf(t,e,r,i,n);case 3:e:{if(Fg(e),t===null)throw Error(C(387));r=e.pendingProps,s=e.memoizedState,i=s.element,dg(t,e),$o(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Vr(Error(C(423)),e),e=uf(t,e,r,n,i);break e}else if(r!==i){i=Vr(Error(C(424)),e),e=uf(t,e,r,n,i);break e}else for(Ve=an(e.stateNode.containerInfo.firstChild),$e=e,J=!0,it=null,n=ug(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zr(),r===i){e=jt(t,e,n);break e}Ne(t,e,r,n)}e=e.child}return e;case 5:return hg(e),t===null&&Ru(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,ku(r,i)?o=null:s!==null&&ku(r,s)&&(e.flags|=32),jg(t,e),Ne(t,e,o,n),e.child;case 6:return t===null&&Ru(e),null;case 13:return Ug(t,e,n);case 4:return $c(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Br(e,null,r,n):Ne(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),of(t,e,r,i,n);case 7:return Ne(t,e,e.pendingProps,n),e.child;case 8:return Ne(t,e,e.pendingProps.children,n),e.child;case 12:return Ne(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Y(Ho,r._currentValue),r._currentValue=o,s!==null)if(dt(s.value,o)){if(s.children===i.children&&!je.current){e=jt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Ot(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Au(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Au(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ne(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Dr(e,n),i=Ze(i),r=r(i),e.flags|=1,Ne(t,e,r,n),e.child;case 14:return r=e.type,i=nt(r,e.pendingProps),i=nt(r.type,i),af(t,e,r,i,n);case 15:return Mg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:nt(r,i),Eo(t,e),e.tag=1,Fe(r)?(t=!0,Wo(e)):t=!1,Dr(e,n),Og(e,r,i),Du(e,r,i,n),Lu(null,e,r,!0,t,n);case 19:return Wg(t,e,n);case 22:return Lg(t,e,n)}throw Error(C(156,e.tag))};function n_(t,e){return Pm(t,e)}function s0(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xe(t,e,n,r){return new s0(t,e,n,r)}function od(t){return t=t.prototype,!(!t||!t.isReactComponent)}function o0(t){if(typeof t=="function")return od(t)?1:0;if(t!=null){if(t=t.$$typeof,t===kc)return 11;if(t===Tc)return 14}return 2}function dn(t,e){var n=t.alternate;return n===null?(n=Xe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Io(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")od(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gr:return qn(n.children,i,s,e);case Ic:o=8,i|=8;break;case ru:return t=Xe(12,n,e,i|2),t.elementType=ru,t.lanes=s,t;case iu:return t=Xe(13,n,e,i),t.elementType=iu,t.lanes=s,t;case su:return t=Xe(19,n,e,i),t.elementType=su,t.lanes=s,t;case hm:return ja(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case cm:o=10;break e;case dm:o=9;break e;case kc:o=11;break e;case Tc:o=14;break e;case Gt:o=16,r=null;break e}throw Error(C(130,t==null?t:typeof t,""))}return e=Xe(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function qn(t,e,n,r){return t=Xe(7,t,r,e),t.lanes=n,t}function ja(t,e,n,r){return t=Xe(22,t,r,e),t.elementType=hm,t.lanes=n,t.stateNode={isHidden:!1},t}function bl(t,e,n){return t=Xe(6,t,null,e),t.lanes=n,t}function Ml(t,e,n){return e=Xe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function a0(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ml(0),this.expirationTimes=ml(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ml(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ad(t,e,n,r,i,s,o,a,l){return t=new a0(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Xe(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vc(s),t}function l0(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function r_(t){if(!t)return wn;t=t._reactInternals;e:{if(ar(t)!==t||t.tag!==1)throw Error(C(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Fe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(C(171))}if(t.tag===1){var n=t.type;if(Fe(n))return rg(t,n,e)}return e}function i_(t,e,n,r,i,s,o,a,l){return t=ad(n,r,!0,t,i,s,o,a,l),t.context=r_(null),n=t.current,r=Re(),i=cn(n),s=Ot(r,i),s.callback=e??null,ln(n,s,i),t.current.lanes=i,Ns(t,i,r),Ue(t,r),t}function Fa(t,e,n,r){var i=e.current,s=Re(),o=cn(i);return n=r_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ot(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ln(i,e,o),t!==null&&(ut(t,i,o,s),vo(t,i,o)),o}function Zo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function yf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ld(t,e){yf(t,e),(t=t.alternate)&&yf(t,e)}function u0(){return null}var s_=typeof reportError=="function"?reportError:function(t){console.error(t)};function ud(t){this._internalRoot=t}Ua.prototype.render=ud.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(C(409));Fa(t,e,null,null)};Ua.prototype.unmount=ud.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zn(function(){Fa(null,t,null,null)}),e[Mt]=null}};function Ua(t){this._internalRoot=t}Ua.prototype.unstable_scheduleHydration=function(t){if(t){var e=Lm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yt.length&&e!==0&&e<Yt[n].priority;n++);Yt.splice(n,0,t),n===0&&Fm(t)}};function cd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Wa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function wf(){}function c0(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Zo(o);s.call(u)}}var o=i_(e,r,t,0,null,!1,!1,"",wf);return t._reactRootContainer=o,t[Mt]=o.current,ns(t.nodeType===8?t.parentNode:t),Zn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Zo(l);a.call(u)}}var l=ad(t,0,!1,null,null,!1,!1,"",wf);return t._reactRootContainer=l,t[Mt]=l.current,ns(t.nodeType===8?t.parentNode:t),Zn(function(){Fa(e,l,n,r)}),l}function za(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Zo(o);a.call(l)}}Fa(e,o,t,i)}else o=c0(n,e,t,i,r);return Zo(o)}bm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Pi(e.pendingLanes);n!==0&&(Pc(e,n|1),Ue(e,se()),!(z&6)&&($r=se()+500,xn()))}break;case 13:Zn(function(){var r=Lt(t,1);if(r!==null){var i=Re();ut(r,t,1,i)}}),ld(t,1)}};Rc=function(t){if(t.tag===13){var e=Lt(t,134217728);if(e!==null){var n=Re();ut(e,t,134217728,n)}ld(t,134217728)}};Mm=function(t){if(t.tag===13){var e=cn(t),n=Lt(t,e);if(n!==null){var r=Re();ut(n,t,e,r)}ld(t,e)}};Lm=function(){return V};jm=function(t,e){var n=V;try{return V=t,e()}finally{V=n}};mu=function(t,e,n){switch(e){case"input":if(lu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Aa(r);if(!i)throw Error(C(90));pm(r),lu(r,i)}}}break;case"textarea":gm(t,n);break;case"select":e=n.value,e!=null&&Pr(t,!!n.multiple,e,!1)}};Cm=rd;Im=Zn;var d0={usingClientEntryPoint:!1,Events:[Rs,wr,Aa,Em,Sm,rd]},wi={findFiberByHostInstance:zn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},h0={bundleType:wi.bundleType,version:wi.version,rendererPackageName:wi.rendererPackageName,rendererConfig:wi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=xm(t),t===null?null:t.stateNode},findFiberByHostInstance:wi.findFiberByHostInstance||u0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ao.isDisabled&&ao.supportsFiber)try{xa=ao.inject(h0),_t=ao}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d0;qe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cd(e))throw Error(C(200));return l0(t,e,null,n)};qe.createRoot=function(t,e){if(!cd(t))throw Error(C(299));var n=!1,r="",i=s_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ad(t,1,!1,null,null,n,!1,r,i),t[Mt]=e.current,ns(t.nodeType===8?t.parentNode:t),new ud(e)};qe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(C(188)):(t=Object.keys(t).join(","),Error(C(268,t)));return t=xm(e),t=t===null?null:t.stateNode,t};qe.flushSync=function(t){return Zn(t)};qe.hydrate=function(t,e,n){if(!Wa(e))throw Error(C(200));return za(null,t,e,!0,n)};qe.hydrateRoot=function(t,e,n){if(!cd(t))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=s_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=i_(e,null,t,1,n??null,i,!1,s,o),t[Mt]=e.current,ns(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ua(e)};qe.render=function(t,e,n){if(!Wa(e))throw Error(C(200));return za(null,t,e,!1,n)};qe.unmountComponentAtNode=function(t){if(!Wa(t))throw Error(C(40));return t._reactRootContainer?(Zn(function(){za(null,null,t,!1,function(){t._reactRootContainer=null,t[Mt]=null})}),!0):!1};qe.unstable_batchedUpdates=rd;qe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Wa(n))throw Error(C(200));if(t==null||t._reactInternals===void 0)throw Error(C(38));return za(t,e,n,!1,r)};qe.version="18.3.1-next-f1338f8080-20240426";function o_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o_)}catch(t){console.error(t)}}o_(),om.exports=qe;var f0=om.exports,Ef=f0;tu.createRoot=Ef.createRoot,tu.hydrateRoot=Ef.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ds(){return ds=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ds.apply(this,arguments)}var nn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(nn||(nn={}));const Sf="popstate";function p0(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Yu("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ea(i)}return g0(e,n,null,t)}function oe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function dd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function m0(){return Math.random().toString(36).substr(2,8)}function Cf(t,e){return{usr:t.state,key:t.key,idx:e}}function Yu(t,e,n,r){return n===void 0&&(n=null),ds({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ei(e):e,{state:n,key:e&&e.key||r||m0()})}function ea(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ei(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function g0(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=nn.Pop,l=null,u=d();u==null&&(u=0,o.replaceState(ds({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function c(){a=nn.Pop;let w=d(),m=w==null?null:w-u;u=w,l&&l({action:a,location:y.location,delta:m})}function f(w,m){a=nn.Push;let p=Yu(y.location,w,m);u=d()+1;let g=Cf(p,u),E=y.createHref(p);try{o.pushState(g,"",E)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(E)}s&&l&&l({action:a,location:y.location,delta:1})}function _(w,m){a=nn.Replace;let p=Yu(y.location,w,m);u=d();let g=Cf(p,u),E=y.createHref(p);o.replaceState(g,"",E),s&&l&&l({action:a,location:y.location,delta:0})}function v(w){let m=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof w=="string"?w:ea(w);return p=p.replace(/ $/,"%20"),oe(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let y={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Sf,c),l=w,()=>{i.removeEventListener(Sf,c),l=null}},createHref(w){return e(i,w)},createURL:v,encodeLocation(w){let m=v(w);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:_,go(w){return o.go(w)}};return y}var If;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(If||(If={}));function _0(t,e,n){return n===void 0&&(n="/"),v0(t,e,n)}function v0(t,e,n,r){let i=typeof e=="string"?ei(e):e,s=hd(i.pathname||"/",n);if(s==null)return null;let o=a_(t);y0(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=A0(s);a=N0(o[l],u)}return a}function a_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(oe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=hn([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(oe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),a_(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:T0(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of l_(s.path))i(s,o,l)}),e}function l_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=l_(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function y0(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:x0(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const w0=/^:[\w-]+$/,E0=3,S0=2,C0=1,I0=10,k0=-2,kf=t=>t==="*";function T0(t,e){let n=t.split("/"),r=n.length;return n.some(kf)&&(r+=k0),e&&(r+=S0),n.filter(i=>!kf(i)).reduce((i,s)=>i+(w0.test(s)?E0:s===""?C0:I0),r)}function x0(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function N0(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],u=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",c=P0({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),f=l.route;if(!c)return null;Object.assign(i,c.params),o.push({params:i,pathname:hn([s,c.pathname]),pathnameBase:L0(hn([s,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(s=hn([s,c.pathnameBase]))}return o}function P0(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=R0(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,c)=>{let{paramName:f,isOptional:_}=d;if(f==="*"){let y=a[c]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const v=a[c];return _&&!v?u[f]=void 0:u[f]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function R0(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),dd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function A0(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return dd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function hd(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}const O0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,D0=t=>O0.test(t);function b0(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ei(t):t,s;if(n)if(D0(n))s=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),dd(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?s=Tf(n.substring(1),"/"):s=Tf(n,e)}else s=e;return{pathname:s,search:j0(r),hash:F0(i)}}function Tf(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ll(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function M0(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function fd(t,e){let n=M0(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function pd(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ei(t):(i=ds({},t),oe(!i.pathname||!i.pathname.includes("?"),Ll("?","pathname","search",i)),oe(!i.pathname||!i.pathname.includes("#"),Ll("#","pathname","hash",i)),oe(!i.search||!i.search.includes("#"),Ll("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let c=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),c-=1;i.pathname=f.join("/")}a=c>=0?e[c]:"/"}let l=b0(i,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const hn=t=>t.join("/").replace(/\/\/+/g,"/"),L0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),j0=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,F0=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function U0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const u_=["post","put","patch","delete"];new Set(u_);const W0=["get",...u_];new Set(W0);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hs(){return hs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},hs.apply(this,arguments)}const md=S.createContext(null),z0=S.createContext(null),Nn=S.createContext(null),Ba=S.createContext(null),Pn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),c_=S.createContext(null);function B0(t,e){let{relative:n}=e===void 0?{}:e;ti()||oe(!1);let{basename:r,navigator:i}=S.useContext(Nn),{hash:s,pathname:o,search:a}=h_(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:hn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ti(){return S.useContext(Ba)!=null}function ni(){return ti()||oe(!1),S.useContext(Ba).location}function d_(t){S.useContext(Nn).static||S.useLayoutEffect(t)}function Ha(){let{isDataRoute:t}=S.useContext(Pn);return t?tS():H0()}function H0(){ti()||oe(!1);let t=S.useContext(md),{basename:e,future:n,navigator:r}=S.useContext(Nn),{matches:i}=S.useContext(Pn),{pathname:s}=ni(),o=JSON.stringify(fd(i,n.v7_relativeSplatPath)),a=S.useRef(!1);return d_(()=>{a.current=!0}),S.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let c=pd(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:hn([e,c.pathname])),(d.replace?r.replace:r.push)(c,d.state,d)},[e,r,o,s,t])}function h_(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=S.useContext(Nn),{matches:i}=S.useContext(Pn),{pathname:s}=ni(),o=JSON.stringify(fd(i,r.v7_relativeSplatPath));return S.useMemo(()=>pd(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function V0(t,e){return $0(t,e)}function $0(t,e,n,r){ti()||oe(!1);let{navigator:i}=S.useContext(Nn),{matches:s}=S.useContext(Pn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=ni(),d;if(e){var c;let w=typeof e=="string"?ei(e):e;l==="/"||(c=w.pathname)!=null&&c.startsWith(l)||oe(!1),d=w}else d=u;let f=d.pathname||"/",_=f;if(l!=="/"){let w=l.replace(/^\//,"").split("/");_="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let v=_0(t,{pathname:_}),y=Q0(v&&v.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:hn([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:hn([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return e&&y?S.createElement(Ba.Provider,{value:{location:hs({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:nn.Pop}},y):y}function G0(){let t=eS(),e=U0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,null)}const q0=S.createElement(G0,null);class Y0 extends S.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?S.createElement(Pn.Provider,{value:this.props.routeContext},S.createElement(c_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function K0(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(md);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Pn.Provider,{value:e},r)}function Q0(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(c=>c.route.id&&(a==null?void 0:a[c.route.id])!==void 0);d>=0||oe(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let c=o[d];if((c.route.HydrateFallback||c.route.hydrateFallbackElement)&&(u=d),c.route.id){let{loaderData:f,errors:_}=n,v=c.route.loader&&f[c.route.id]===void 0&&(!_||_[c.route.id]===void 0);if(c.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,c,f)=>{let _,v=!1,y=null,w=null;n&&(_=a&&c.route.id?a[c.route.id]:void 0,y=c.route.errorElement||q0,l&&(u<0&&f===0?(nS("route-fallback"),v=!0,w=null):u===f&&(v=!0,w=c.route.hydrateFallbackElement||null)));let m=e.concat(o.slice(0,f+1)),p=()=>{let g;return _?g=y:v?g=w:c.route.Component?g=S.createElement(c.route.Component,null):c.route.element?g=c.route.element:g=d,S.createElement(K0,{match:c,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:g})};return n&&(c.route.ErrorBoundary||c.route.errorElement||f===0)?S.createElement(Y0,{location:n.location,revalidation:n.revalidation,component:y,error:_,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var f_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(f_||{}),p_=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(p_||{});function X0(t){let e=S.useContext(md);return e||oe(!1),e}function J0(t){let e=S.useContext(z0);return e||oe(!1),e}function Z0(t){let e=S.useContext(Pn);return e||oe(!1),e}function m_(t){let e=Z0(),n=e.matches[e.matches.length-1];return n.route.id||oe(!1),n.route.id}function eS(){var t;let e=S.useContext(c_),n=J0(),r=m_();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function tS(){let{router:t}=X0(f_.UseNavigateStable),e=m_(p_.UseNavigateStable),n=S.useRef(!1);return d_(()=>{n.current=!0}),S.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,hs({fromRouteId:e},s)))},[t,e])}const xf={};function nS(t,e,n){xf[t]||(xf[t]=!0)}function rS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Ku(t){let{to:e,replace:n,state:r,relative:i}=t;ti()||oe(!1);let{future:s,static:o}=S.useContext(Nn),{matches:a}=S.useContext(Pn),{pathname:l}=ni(),u=Ha(),d=pd(e,fd(a,s.v7_relativeSplatPath),l,i==="path"),c=JSON.stringify(d);return S.useEffect(()=>u(JSON.parse(c),{replace:n,state:r,relative:i}),[u,c,i,n,r]),null}function pr(t){oe(!1)}function iS(t){let{basename:e="/",children:n=null,location:r,navigationType:i=nn.Pop,navigator:s,static:o=!1,future:a}=t;ti()&&oe(!1);let l=e.replace(/^\/*/,"/"),u=S.useMemo(()=>({basename:l,navigator:s,static:o,future:hs({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=ei(r));let{pathname:d="/",search:c="",hash:f="",state:_=null,key:v="default"}=r,y=S.useMemo(()=>{let w=hd(d,l);return w==null?null:{location:{pathname:w,search:c,hash:f,state:_,key:v},navigationType:i}},[l,d,c,f,_,v,i]);return y==null?null:S.createElement(Nn.Provider,{value:u},S.createElement(Ba.Provider,{children:n,value:y}))}function sS(t){let{children:e,location:n}=t;return V0(Qu(e),n)}new Promise(()=>{});function Qu(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,Qu(r.props.children,s));return}r.type!==pr&&oe(!1),!r.props.index||!r.props.children||oe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Qu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xu(){return Xu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xu.apply(this,arguments)}function oS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function aS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function lS(t,e){return t.button===0&&(!e||e==="_self")&&!aS(t)}const uS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],cS="6";try{window.__reactRouterVersion=cS}catch{}const dS="startTransition",Nf=nw[dS];function hS(t){let{basename:e,children:n,future:r,window:i}=t,s=S.useRef();s.current==null&&(s.current=p0({window:i,v5Compat:!0}));let o=s.current,[a,l]=S.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},d=S.useCallback(c=>{u&&Nf?Nf(()=>l(c)):l(c)},[l,u]);return S.useLayoutEffect(()=>o.listen(d),[o,d]),S.useEffect(()=>rS(r),[r]),S.createElement(iS,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const fS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",pS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lo=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:d,viewTransition:c}=e,f=oS(e,uS),{basename:_}=S.useContext(Nn),v,y=!1;if(typeof u=="string"&&pS.test(u)&&(v=u,fS))try{let g=new URL(window.location.href),E=u.startsWith("//")?new URL(g.protocol+u):new URL(u),k=hd(E.pathname,_);E.origin===g.origin&&k!=null?u=k+E.search+E.hash:y=!0}catch{}let w=B0(u,{relative:i}),m=mS(u,{replace:o,state:a,target:l,preventScrollReset:d,relative:i,viewTransition:c});function p(g){r&&r(g),g.defaultPrevented||m(g)}return S.createElement("a",Xu({},f,{href:v||w,onClick:y||s?r:p,ref:n,target:l}))});var Pf;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Pf||(Pf={}));var Rf;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Rf||(Rf={}));function mS(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=Ha(),u=ni(),d=h_(t,{relative:o});return S.useCallback(c=>{if(lS(c,n)){c.preventDefault();let f=r!==void 0?r:ea(u)===ea(d);l(t,{replace:f,state:i,preventScrollReset:s,relative:o,viewTransition:a})}},[u,l,d,r,i,n,t,s,o,a])}var Af={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g_={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw ri(e)},ri=function(t){return new Error("Firebase Database ("+g_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},gS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},gd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=s>>2,c=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,_=u&63;l||(_=64,o||(f=64)),r.push(n[d],n[c],n[f],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(__(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||c==null)throw new _S;const f=s<<2|a>>4;if(r.push(f),u!==64){const _=a<<4&240|u>>2;if(r.push(_),c!==64){const v=u<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class _S extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const v_=function(t){const e=__(t);return gd.encodeByteArray(e,!0)},ta=function(t){return v_(t).replace(/\./g,"")},na=function(t){try{return gd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(t){return y_(void 0,t)}function y_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!yS(n)||(t[n]=y_(t[n],e[n]));return t}function yS(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES=()=>wS().__FIREBASE_DEFAULTS__,SS=()=>{if(typeof process>"u"||typeof Af>"u")return;const t=Af.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&na(t[1]);return e&&JSON.parse(e)},_d=()=>{try{return ES()||SS()||CS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},w_=t=>{var e,n;return(n=(e=_d())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},IS=t=>{const e=w_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},E_=()=>{var t;return(t=_d())===null||t===void 0?void 0:t.config},S_=t=>{var e;return(e=_d())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ta(JSON.stringify(n)),ta(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function TS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function C_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function NS(){const t=Ae();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function PS(){return g_.NODE_ADMIN===!0}function RS(){try{return typeof indexedDB=="object"}catch{return!1}}function AS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS="FirebaseError";class Rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=OS,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Os.prototype.create)}}class Os{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?DS(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Rn(i,a,r)}}function DS(t,e){return t.replace(bS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const bS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fs(t){return JSON.parse(t)}function ue(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=fs(na(s[0])||""),n=fs(na(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},MS=function(t){const e=I_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},LS=function(t){const e=I_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Gr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ju(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ra(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ia(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Of(s)&&Of(o)){if(!ia(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Of(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ai(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Oi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let c=0;c<16;c++)r[c]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let c=16;c<80;c++){const f=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=a^s&(o^a),d=1518500249):(u=s^o^a,d=1859775393):c<60?(u=s&o|a&(s|o),d=2400959708):(u=s^o^a,d=3395469782);const f=(i<<5|i>>>27)+u+l+d+r[c]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function FS(t,e){const n=new US(t,e);return n.subscribe.bind(n)}class US{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");WS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=jl),i.error===void 0&&(i.error=jl),i.complete===void 0&&(i.complete=jl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function WS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jl(){}function yd(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$a=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t){return t&&t._delegate?t._delegate:t}class er{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Va;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VS(e))try{this.getOrInitializeService({instanceIdentifier:Fn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Fn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fn){return this.instances.has(e)}getOptions(e=Fn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:HS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fn){return this.component?this.component.multipleInstances?e:Fn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function HS(t){return t===Fn?void 0:t}function VS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new BS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})($||($={}));const GS={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},qS=$.INFO,YS={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},KS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=YS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wd{constructor(e){this.name=e,this._logLevel=qS,this._logHandler=KS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?GS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const QS=(t,e)=>e.some(n=>t instanceof n);let Df,bf;function XS(){return Df||(Df=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JS(){return bf||(bf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const k_=new WeakMap,Zu=new WeakMap,T_=new WeakMap,Fl=new WeakMap,Ed=new WeakMap;function ZS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(fn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&k_.set(n,t)}).catch(()=>{}),Ed.set(e,t),e}function eC(t){if(Zu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Zu.set(t,e)}let ec={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||T_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function tC(t){ec=t(ec)}function nC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ul(this),e,...n);return T_.set(r,e.sort?e.sort():[e]),fn(r)}:JS().includes(t)?function(...e){return t.apply(Ul(this),e),fn(k_.get(this))}:function(...e){return fn(t.apply(Ul(this),e))}}function rC(t){return typeof t=="function"?nC(t):(t instanceof IDBTransaction&&eC(t),QS(t,XS())?new Proxy(t,ec):t)}function fn(t){if(t instanceof IDBRequest)return ZS(t);if(Fl.has(t))return Fl.get(t);const e=rC(t);return e!==t&&(Fl.set(t,e),Ed.set(e,t)),e}const Ul=t=>Ed.get(t);function iC(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=fn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(fn(o.result),l.oldVersion,l.newVersion,fn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const sC=["get","getKey","getAll","getAllKeys","count"],oC=["put","add","delete","clear"],Wl=new Map;function Mf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wl.get(e))return Wl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=oC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||sC.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Wl.set(e,s),s}tC(t=>({...t,get:(e,n,r)=>Mf(e,n)||t.get(e,n,r),has:(e,n)=>!!Mf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(lC(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function lC(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const tc="@firebase/app",Lf="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft=new wd("@firebase/app"),uC="@firebase/app-compat",cC="@firebase/analytics-compat",dC="@firebase/analytics",hC="@firebase/app-check-compat",fC="@firebase/app-check",pC="@firebase/auth",mC="@firebase/auth-compat",gC="@firebase/database",_C="@firebase/data-connect",vC="@firebase/database-compat",yC="@firebase/functions",wC="@firebase/functions-compat",EC="@firebase/installations",SC="@firebase/installations-compat",CC="@firebase/messaging",IC="@firebase/messaging-compat",kC="@firebase/performance",TC="@firebase/performance-compat",xC="@firebase/remote-config",NC="@firebase/remote-config-compat",PC="@firebase/storage",RC="@firebase/storage-compat",AC="@firebase/firestore",OC="@firebase/vertexai-preview",DC="@firebase/firestore-compat",bC="firebase",MC="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="[DEFAULT]",LC={[tc]:"fire-core",[uC]:"fire-core-compat",[dC]:"fire-analytics",[cC]:"fire-analytics-compat",[fC]:"fire-app-check",[hC]:"fire-app-check-compat",[pC]:"fire-auth",[mC]:"fire-auth-compat",[gC]:"fire-rtdb",[_C]:"fire-data-connect",[vC]:"fire-rtdb-compat",[yC]:"fire-fn",[wC]:"fire-fn-compat",[EC]:"fire-iid",[SC]:"fire-iid-compat",[CC]:"fire-fcm",[IC]:"fire-fcm-compat",[kC]:"fire-perf",[TC]:"fire-perf-compat",[xC]:"fire-rc",[NC]:"fire-rc-compat",[PC]:"fire-gcs",[RC]:"fire-gcs-compat",[AC]:"fire-fst",[DC]:"fire-fst-compat",[OC]:"fire-vertex","fire-js":"fire-js",[bC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=new Map,jC=new Map,rc=new Map;function jf(t,e){try{t.container.addComponent(e)}catch(n){Ft.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qr(t){const e=t.name;if(rc.has(e))return Ft.debug(`There were multiple attempts to register component ${e}.`),!1;rc.set(e,t);for(const n of sa.values())jf(n,t);for(const n of jC.values())jf(n,t);return!0}function Sd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function xt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pn=new Os("app","Firebase",FC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=MC;function x_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:nc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw pn.create("bad-app-name",{appName:String(i)});if(n||(n=E_()),!n)throw pn.create("no-options");const s=sa.get(i);if(s){if(ia(n,s.options)&&ia(r,s.config))return s;throw pn.create("duplicate-app",{appName:i})}const o=new $S(i);for(const l of rc.values())o.addComponent(l);const a=new UC(n,r,o);return sa.set(i,a),a}function N_(t=nc){const e=sa.get(t);if(!e&&t===nc&&E_())return x_();if(!e)throw pn.create("no-app",{appName:t});return e}function mn(t,e,n){var r;let i=(r=LC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ft.warn(a.join(" "));return}qr(new er(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC="firebase-heartbeat-database",zC=1,ps="firebase-heartbeat-store";let zl=null;function P_(){return zl||(zl=iC(WC,zC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ps)}catch(n){console.warn(n)}}}}).catch(t=>{throw pn.create("idb-open",{originalErrorMessage:t.message})})),zl}async function BC(t){try{const n=(await P_()).transaction(ps),r=await n.objectStore(ps).get(R_(t));return await n.done,r}catch(e){if(e instanceof Rn)Ft.warn(e.message);else{const n=pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ft.warn(n.message)}}}async function Ff(t,e){try{const r=(await P_()).transaction(ps,"readwrite");await r.objectStore(ps).put(e,R_(t)),await r.done}catch(n){if(n instanceof Rn)Ft.warn(n.message);else{const r=pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ft.warn(r.message)}}}function R_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HC=1024,VC=30*24*60*60*1e3;class $C{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Uf();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=VC}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ft.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Uf(),{heartbeatsToSend:r,unsentEntries:i}=GC(this._heartbeatsCache.heartbeats),s=ta(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ft.warn(n),""}}}function Uf(){return new Date().toISOString().substring(0,10)}function GC(t,e=HC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Wf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return RS()?AS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await BC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ff(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ff(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Wf(t){return ta(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(t){qr(new er("platform-logger",e=>new aC(e),"PRIVATE")),qr(new er("heartbeat",e=>new $C(e),"PRIVATE")),mn(tc,Lf,t),mn(tc,Lf,"esm2017"),mn("fire-js","")}YC("");var KC="firebase",QC="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mn(KC,QC,"app");function Cd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function A_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const XC=A_,O_=new Os("auth","Firebase",A_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=new wd("@firebase/auth");function JC(t,...e){oa.logLevel<=$.WARN&&oa.warn(`Auth (${si}): ${t}`,...e)}function ko(t,...e){oa.logLevel<=$.ERROR&&oa.error(`Auth (${si}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,...e){throw Id(t,...e)}function yt(t,...e){return Id(t,...e)}function D_(t,e,n){const r=Object.assign(Object.assign({},XC()),{[e]:n});return new Os("auth","Firebase",r).create(e,{appName:t.name})}function gn(t){return D_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Id(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return O_.create(t,...e)}function b(t,e,...n){if(!t)throw Id(e,...n)}function Nt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ko(e),new Error(e)}function Ut(t,e){t||Nt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ZC(){return zf()==="http:"||zf()==="https:"}function zf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZC()||xS()||"connection"in navigator)?navigator.onLine:!0}function tI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ut(n>e,"Short delay should be less than long delay!"),this.isMobile=vd()||C_()}get(){return eI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(t,e){Ut(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=new Ds(3e4,6e4);function lr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function An(t,e,n,r,i={}){return M_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ii(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},s);return TS()||(u.referrerPolicy="no-referrer"),b_.fetch()(L_(t,t.config.apiHost,n,a),u)})}async function M_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},nI),e);try{const i=new sI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw uo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw uo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw uo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw uo(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw D_(t,d,u);ht(t,d)}}catch(i){if(i instanceof Rn)throw i;ht(t,"network-request-failed",{message:String(i)})}}async function Ga(t,e,n,r,i={}){const s=await An(t,e,n,r,i);return"mfaPendingCredential"in s&&ht(t,"multi-factor-auth-required",{_serverResponse:s}),s}function L_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?kd(t.config,i):`${t.config.apiScheme}://${i}`}function iI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class sI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(yt(this.auth,"network-request-failed")),rI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function uo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=yt(t,e,r);return i.customData._tokenResponse=n,i}function Bf(t){return t!==void 0&&t.enterprise!==void 0}class oI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return iI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function aI(t,e){return An(t,"GET","/v2/recaptchaConfig",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lI(t,e){return An(t,"POST","/v1/accounts:delete",e)}async function j_(t,e){return An(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uI(t,e=!1){const n=Se(t),r=await n.getIdToken(e),i=Td(r);b(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Bi(Bl(i.auth_time)),issuedAtTime:Bi(Bl(i.iat)),expirationTime:Bi(Bl(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Bl(t){return Number(t)*1e3}function Td(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ko("JWT malformed, contained fewer than 3 sections"),null;try{const i=na(n);return i?JSON.parse(i):(ko("Failed to decode base64 JWT payload"),null)}catch(i){return ko("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Hf(t){const e=Td(t);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ms(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rn&&cI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bi(this.lastLoginAt),this.creationTime=Bi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aa(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ms(t,j_(n,{idToken:r}));b(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?F_(s.providerUserInfo):[],a=fI(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new sc(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,c)}async function hI(t){const e=Se(t);await aa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function fI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function F_(t){return t.map(e=>{var{providerId:n}=e,r=Cd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pI(t,e){const n=await M_(t,{},async()=>{const r=ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=L_(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",b_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mI(t,e){return An(t,"POST","/v2/accounts:revokeToken",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){b(e.length!==0,"internal-error");const n=Hf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(b(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await pI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Mr;return r&&(b(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(b(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(b(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mr,this.toJSON())}_performRefresh(){return Nt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,e){b(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Cd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new sc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ms(this,this.stsTokenManager.getToken(this.auth,e));return b(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return uI(this,e)}reload(){return hI(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await aa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(xt(this.auth.app))return Promise.reject(gn(this.auth));const e=await this.getIdToken();return await ms(this,lI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,d;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:g,emailVerified:E,isAnonymous:k,providerData:T,stsTokenManager:P}=n;b(g&&P,e,"internal-error");const N=Mr.fromJSON(this.name,P);b(typeof g=="string",e,"internal-error"),Vt(c,e.name),Vt(f,e.name),b(typeof E=="boolean",e,"internal-error"),b(typeof k=="boolean",e,"internal-error"),Vt(_,e.name),Vt(v,e.name),Vt(y,e.name),Vt(w,e.name),Vt(m,e.name),Vt(p,e.name);const x=new Pt({uid:g,auth:e,email:f,emailVerified:E,displayName:c,isAnonymous:k,photoURL:v,phoneNumber:_,tenantId:y,stsTokenManager:N,createdAt:m,lastLoginAt:p});return T&&Array.isArray(T)&&(x.providerData=T.map(O=>Object.assign({},O))),w&&(x._redirectEventId=w),x}static async _fromIdTokenResponse(e,n,r=!1){const i=new Mr;i.updateFromServerResponse(n);const s=new Pt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await aa(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];b(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?F_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Mr;a.updateFromIdToken(r);const l=new Pt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new sc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf=new Map;function Rt(t){Ut(t instanceof Function,"Expected a class definition");let e=Vf.get(t);return e?(Ut(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}U_.type="NONE";const $f=U_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t,e,n){return`firebase:${t}:${e}:${n}`}class Lr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=To(this.userKey,i.apiKey,s),this.fullPersistenceKey=To("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Lr(Rt($f),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Rt($f);const o=To(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(o);if(d){const c=Pt._fromJSON(e,d);u!==s&&(a=c),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Lr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Lr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(H_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(W_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($_(e))return"Blackberry";if(G_(e))return"Webos";if(z_(e))return"Safari";if((e.includes("chrome/")||B_(e))&&!e.includes("edge/"))return"Chrome";if(V_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function W_(t=Ae()){return/firefox\//i.test(t)}function z_(t=Ae()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function B_(t=Ae()){return/crios\//i.test(t)}function H_(t=Ae()){return/iemobile/i.test(t)}function V_(t=Ae()){return/android/i.test(t)}function $_(t=Ae()){return/blackberry/i.test(t)}function G_(t=Ae()){return/webos/i.test(t)}function xd(t=Ae()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function gI(t=Ae()){var e;return xd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _I(){return NS()&&document.documentMode===10}function q_(t=Ae()){return xd(t)||V_(t)||G_(t)||$_(t)||/windows phone/i.test(t)||H_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(t,e=[]){let n;switch(t){case"Browser":n=Gf(Ae());break;case"Worker":n=`${Gf(Ae())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${si}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yI(t,e={}){return An(t,"GET","/v2/passwordPolicy",lr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=6;class EI{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:wI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qf(this),this.idTokenSubscription=new qf(this),this.beforeStateQueue=new vI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=O_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Lr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await j_(this,{idToken:e}),r=await Pt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(xt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await aa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(xt(this.app))return Promise.reject(gn(this));const n=e?Se(e):null;return n&&b(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return xt(this.app)?Promise.reject(gn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return xt(this.app)?Promise.reject(gn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await yI(this),n=new EI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Os("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await mI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rt(e)||this._popupRedirectResolver;b(n,this,"argument-error"),this.redirectPersistenceManager=await Lr.create(this,[Rt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Y_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&JC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function oi(t){return Se(t)}class qf{constructor(e){this.auth=e,this.observer=null,this.addObserver=FS(n=>this.observer=n)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function CI(t){qa=t}function K_(t){return qa.loadJS(t)}function II(){return qa.recaptchaEnterpriseScript}function kI(){return qa.gapiScript}function TI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const xI="recaptcha-enterprise",NI="NO_RECAPTCHA";class PI{constructor(e){this.type=xI,this.auth=oi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{aI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new oI(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Bf(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(NI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Bf(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=II();l.length!==0&&(l+=a),K_(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Yf(t,e,n,r=!1){const i=new PI(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Kf(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Yf(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Yf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(t,e){const n=Sd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ia(s,e??{}))return i;ht(i,"already-initialized")}return n.initialize({options:e})}function AI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function OI(t,e,n){const r=oi(t);b(r._canInitEmulator,r,"emulator-config-failed"),b(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Q_(e),{host:o,port:a}=DI(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),bI()}function Q_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function DI(t){const e=Q_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Qf(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Qf(o)}}}function Qf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function bI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Nt("not implemented")}_getIdTokenResponse(e){return Nt("not implemented")}_linkToIdToken(e,n){return Nt("not implemented")}_getReauthenticationResolver(e){return Nt("not implemented")}}async function MI(t,e){return An(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LI(t,e){return Ga(t,"POST","/v1/accounts:signInWithPassword",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jI(t,e){return Ga(t,"POST","/v1/accounts:signInWithEmailLink",lr(t,e))}async function FI(t,e){return Ga(t,"POST","/v1/accounts:signInWithEmailLink",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends Nd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new gs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new gs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kf(e,n,"signInWithPassword",LI);case"emailLink":return jI(e,{email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Kf(e,r,"signUpPassword",MI);case"emailLink":return FI(e,{idToken:n,email:this._email,oobCode:this._password});default:ht(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jr(t,e){return Ga(t,"POST","/v1/accounts:signInWithIdp",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI="http://localhost";class tr extends Nd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Cd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new tr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return jr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,jr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,jr(e,n)}buildRequest(){const e={requestUri:UI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ii(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zI(t){const e=Ai(Oi(t)).link,n=e?Ai(Oi(e)).deep_link_id:null,r=Ai(Oi(t)).deep_link_id;return(r?Ai(Oi(r)).link:null)||r||n||e||t}class Pd{constructor(e){var n,r,i,s,o,a;const l=Ai(Oi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,c=WI((i=l.mode)!==null&&i!==void 0?i:null);b(u&&d&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=zI(e);try{return new Pd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(){this.providerId=ai.PROVIDER_ID}static credential(e,n){return gs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Pd.parseLink(n);return b(r,"argument-error"),gs._fromEmailAndCode(e,r.code,r.tenantId)}}ai.PROVIDER_ID="password";ai.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ai.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs extends X_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends bs{constructor(){super("facebook.com")}static credential(e){return tr._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt extends bs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return tr._fromParams({providerId:Xt.PROVIDER_ID,signInMethod:Xt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xt.credentialFromTaggedObject(e)}static credentialFromError(e){return Xt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xt.credential(n,r)}catch{return null}}}Xt.GOOGLE_SIGN_IN_METHOD="google.com";Xt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt extends bs{constructor(){super("github.com")}static credential(e){return tr._fromParams({providerId:Jt.PROVIDER_ID,signInMethod:Jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jt.credentialFromTaggedObject(e)}static credentialFromError(e){return Jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jt.credential(e.oauthAccessToken)}catch{return null}}}Jt.GITHUB_SIGN_IN_METHOD="github.com";Jt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends bs{constructor(){super("twitter.com")}static credential(e,n){return tr._fromParams({providerId:Zt.PROVIDER_ID,signInMethod:Zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zt.credentialFromTaggedObject(e)}static credentialFromError(e){return Zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zt.credential(n,r)}catch{return null}}}Zt.TWITTER_SIGN_IN_METHOD="twitter.com";Zt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Pt._fromIdTokenResponse(e,r,i),o=Xf(r);return new Yr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Xf(r);return new Yr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Xf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la extends Rn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,la.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new la(e,n,r,i)}}function J_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?la._fromErrorAndOperation(t,s,e,r):s})}async function BI(t,e,n=!1){const r=await ms(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HI(t,e,n=!1){const{auth:r}=t;if(xt(r.app))return Promise.reject(gn(r));const i="reauthenticate";try{const s=await ms(t,J_(r,i,e,t),n);b(s.idToken,r,"internal-error");const o=Td(s.idToken);b(o,r,"internal-error");const{sub:a}=o;return b(t.uid===a,r,"user-mismatch"),Yr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ht(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z_(t,e,n=!1){if(xt(t.app))return Promise.reject(gn(t));const r="signIn",i=await J_(t,r,e),s=await Yr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function VI(t,e){return Z_(oi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $I(t){const e=oi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function GI(t,e,n){return xt(t.app)?Promise.reject(gn(t)):VI(Se(t),ai.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$I(t),r})}function qI(t,e,n,r){return Se(t).onIdTokenChanged(e,n,r)}function YI(t,e,n){return Se(t).beforeAuthStateChanged(e,n)}function KI(t,e,n,r){return Se(t).onAuthStateChanged(e,n,r)}function QI(t){return Se(t).signOut()}const ua="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ua,"1"),this.storage.removeItem(ua),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=1e3,JI=10;class tv extends ev{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=q_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);_I()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,JI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},XI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}tv.type="LOCAL";const ZI=tv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv extends ev{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}nv.type="SESSION";const rv=nv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ya(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await ek(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ya.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Rd("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const f=c;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(){return window}function nk(t){wt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(){return typeof wt().WorkerGlobalScope<"u"&&typeof wt().importScripts=="function"}async function rk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ik(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function sk(){return iv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv="firebaseLocalStorageDb",ok=1,ca="firebaseLocalStorage",ov="fbase_key";class Ms{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ka(t,e){return t.transaction([ca],e?"readwrite":"readonly").objectStore(ca)}function ak(){const t=indexedDB.deleteDatabase(sv);return new Ms(t).toPromise()}function oc(){const t=indexedDB.open(sv,ok);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ca,{keyPath:ov})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ca)?e(r):(r.close(),await ak(),e(await oc()))})})}async function Jf(t,e,n){const r=Ka(t,!0).put({[ov]:e,value:n});return new Ms(r).toPromise()}async function lk(t,e){const n=Ka(t,!1).get(e),r=await new Ms(n).toPromise();return r===void 0?null:r.value}function Zf(t,e){const n=Ka(t,!0).delete(e);return new Ms(n).toPromise()}const uk=800,ck=3;class av{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await oc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ck)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return iv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ya._getInstance(sk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rk(),!this.activeServiceWorker)return;this.sender=new tk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ik()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await oc();return await Jf(e,ua,"1"),await Zf(e,ua),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Zf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ka(i,!1).getAll();return new Ms(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}av.type="LOCAL";const dk=av;new Ds(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hk(t,e){return e?Rt(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad extends Nd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return jr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return jr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function fk(t){return Z_(t.auth,new Ad(t),t.bypassAuthState)}function pk(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),HI(n,new Ad(t),t.bypassAuthState)}async function mk(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),BI(n,new Ad(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return fk;case"linkViaPopup":case"linkViaRedirect":return mk;case"reauthViaPopup":case"reauthViaRedirect":return pk;default:ht(this.auth,"internal-error")}}resolve(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk=new Ds(2e3,1e4);class xr extends lv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,xr.currentPopupAction&&xr.currentPopupAction.cancel(),xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){Ut(this.filter.length===1,"Popup operations only handle one event");const e=Rd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gk.get())};e()}}xr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k="pendingRedirect",xo=new Map;class vk extends lv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=xo.get(this.auth._key());if(!e){try{const r=await yk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}xo.set(this.auth._key(),e)}return this.bypassAuthState||xo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yk(t,e){const n=Sk(e),r=Ek(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function wk(t,e){xo.set(t._key(),e)}function Ek(t){return Rt(t._redirectPersistence)}function Sk(t){return To(_k,t.config.apiKey,t.name)}async function Ck(t,e,n=!1){if(xt(t.app))return Promise.reject(gn(t));const r=oi(t),i=hk(r,e),o=await new vk(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ik=10*60*1e3;class kk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Tk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!uv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(yt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Ik&&this.cachedEventUids.clear(),this.cachedEventUids.has(ep(e))}saveEventToCache(e){this.cachedEventUids.add(ep(e)),this.lastProcessedEventTime=Date.now()}}function ep(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function uv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Tk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return uv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xk(t,e={}){return An(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Pk=/^https?/;async function Rk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await xk(t);for(const n of e)try{if(Ak(n))return}catch{}ht(t,"unauthorized-domain")}function Ak(t){const e=ic(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Pk.test(n))return!1;if(Nk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ok=new Ds(3e4,6e4);function tp(){const t=wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Dk(t){return new Promise((e,n)=>{var r,i,s;function o(){tp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{tp(),n(yt(t,"network-request-failed"))},timeout:Ok.get()})}if(!((i=(r=wt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=wt().gapi)===null||s===void 0)&&s.load)o();else{const a=TI("iframefcb");return wt()[a]=()=>{gapi.load?o():n(yt(t,"network-request-failed"))},K_(`${kI()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw No=null,e})}let No=null;function bk(t){return No=No||Dk(t),No}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=new Ds(5e3,15e3),Lk="__/auth/iframe",jk="emulator/auth/iframe",Fk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Uk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wk(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?kd(e,jk):`https://${t.config.authDomain}/${Lk}`,r={apiKey:e.apiKey,appName:t.name,v:si},i=Uk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ii(r).slice(1)}`}async function zk(t){const e=await bk(t),n=wt().gapi;return b(n,t,"internal-error"),e.open({where:document.body,url:Wk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=yt(t,"network-request-failed"),a=wt().setTimeout(()=>{s(o)},Mk.get());function l(){wt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hk=500,Vk=600,$k="_blank",Gk="http://localhost";class np{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qk(t,e,n,r=Hk,i=Vk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Bk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ae().toLowerCase();n&&(a=B_(u)?$k:n),W_(u)&&(e=e||Gk,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[_,v])=>`${f}${_}=${v},`,"");if(gI(u)&&a!=="_self")return Yk(e||"",a),new np(null);const c=window.open(e||"",a,d);b(c,t,"popup-blocked");try{c.focus()}catch{}return new np(c)}function Yk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk="__/auth/handler",Qk="emulator/auth/handler",Xk=encodeURIComponent("fac");async function rp(t,e,n,r,i,s){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:si,eventId:i};if(e instanceof X_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ju(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,c]of Object.entries({}))o[d]=c}if(e instanceof bs){const d=e.getScopes().filter(c=>c!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${Xk}=${encodeURIComponent(l)}`:"";return`${Jk(t)}?${ii(a).slice(1)}${u}`}function Jk({config:t}){return t.emulator?kd(t,Qk):`https://${t.authDomain}/${Kk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl="webStorageSupport";class Zk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rv,this._completeRedirectFn=Ck,this._overrideRedirectResult=wk}async _openPopup(e,n,r,i){var s;Ut((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await rp(e,n,r,ic(),i);return qk(e,o,Rd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await rp(e,n,r,ic(),i);return nk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ut(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await zk(e),r=new kk(e);return n.register("authEvent",i=>(b(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hl,{type:Hl},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Hl];o!==void 0&&n(!!o),ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Rk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return q_()||z_()||xd()}}const eT=Zk;var ip="@firebase/auth",sp="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rT(t){qr(new er("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;b(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Y_(t)},u=new SI(r,i,s,l);return AI(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),qr(new er("auth-internal",e=>{const n=oi(e.getProvider("auth").getImmediate());return(r=>new tT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mn(ip,sp,nT(t)),mn(ip,sp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iT=5*60,sT=S_("authIdTokenMaxAge")||iT;let op=null;const oT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>sT)return;const i=n==null?void 0:n.token;op!==i&&(op=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function aT(t=N_()){const e=Sd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=RI(t,{popupRedirectResolver:eT,persistence:[dk,ZI,rv]}),r=S_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=oT(s.toString());YI(n,o,()=>o(n.currentUser)),qI(n,a=>o(a))}}const i=w_("auth");return i&&OI(n,`http://${i}`),n}function lT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}CI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=yt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",lT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rT("Browser");var ap={};const lp="@firebase/database",up="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cv="";function uT(t){cv=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ue(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:fs(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return St(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new cT(e)}}catch{}return new dT},Vn=dv("localStorage"),hT=dv("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new wd("@firebase/database"),fT=function(){let t=1;return function(){return t++}}(),hv=function(t){const e=zS(t),n=new jS;n.update(e);const r=n.digest();return gd.encodeByteArray(r)},Ls=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Ls.apply(null,r):typeof r=="object"?e+=ue(r):e+=r,e+=" "}return e};let Hi=null,cp=!0;const pT=function(t,e){I(!0,"Can't turn on custom loggers persistently."),Fr.logLevel=$.VERBOSE,Hi=Fr.log.bind(Fr)},Te=function(...t){if(cp===!0&&(cp=!1,Hi===null&&hT.get("logging_enabled")===!0&&pT()),Hi){const e=Ls.apply(null,t);Hi(e)}},js=function(t){return function(...e){Te(t,...e)}},ac=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ls(...t);Fr.error(e)},Wt=function(...t){const e=`FIREBASE FATAL ERROR: ${Ls(...t)}`;throw Fr.error(e),new Error(e)},We=function(...t){const e="FIREBASE WARNING: "+Ls(...t);Fr.warn(e)},mT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&We("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Od=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},gT=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},nr="[MIN_NAME]",En="[MAX_NAME]",li=function(t,e){if(t===e)return 0;if(t===nr||e===En)return-1;if(e===nr||t===En)return 1;{const n=dp(t),r=dp(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},_T=function(t,e){return t===e?0:t<e?-1:1},Ei=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ue(e))},Dd=function(t){if(typeof t!="object"||t===null)return ue(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ue(e[r]),n+=":",n+=Dd(t[e[r]]);return n+="}",n},fv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function ze(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const pv=function(t){I(!Od(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),c=c+f}return c.toLowerCase()},vT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},yT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function wT(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const ET=new RegExp("^-?(0*)\\d{1,10}$"),ST=-2147483648,CT=2147483647,dp=function(t){if(ET.test(t)){const e=Number(t);if(e>=ST&&e<=CT)return e}return null},ui=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw We("Exception was thrown by user callback.",n),e},Math.floor(0))}},IT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Vi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){We(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',We(e)}}class Po{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Po.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd="5",mv="v",gv="s",_v="r",vv="f",yv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,wv="ls",Ev="p",lc="ac",Sv="websocket",Cv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Vn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Vn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function xT(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function kv(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(e===Sv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Cv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);xT(t)&&(n.ns=t.namespace);const i=[];return ze(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(){this.counters_={}}incrementCounter(e,n=1){St(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return vS(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl={},$l={};function Md(t){const e=t.toString();return Vl[e]||(Vl[e]=new NT),Vl[e]}function PT(t,e){const n=t.toString();return $l[n]||($l[n]=e()),$l[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ui(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp="start",AT="close",OT="pLPCommand",DT="pRTLPCB",Tv="id",xv="pw",Nv="ser",bT="cb",MT="seg",LT="ts",jT="d",FT="dframe",Pv=1870,Rv=30,UT=Pv-Rv,WT=25e3,zT=3e4;class Nr{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=js(e),this.stats_=Md(n),this.urlFn=l=>(this.appCheckToken&&(l[lc]=this.appCheckToken),kv(n,Cv,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new RT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(zT)),gT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ld((...s)=>{const[o,a,l,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===hp)this.id=a,this.password=l;else if(o===AT)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[hp]="t",r[Nv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[bT]=this.scriptTagHolder.uniqueCallbackIdentifier),r[mv]=bd,this.transportSessionId&&(r[gv]=this.transportSessionId),this.lastSessionId&&(r[wv]=this.lastSessionId),this.applicationId&&(r[Ev]=this.applicationId),this.appCheckToken&&(r[lc]=this.appCheckToken),typeof location<"u"&&location.hostname&&yv.test(location.hostname)&&(r[_v]=vv);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Nr.forceAllow_=!0}static forceDisallow(){Nr.forceDisallow_=!0}static isAvailable(){return Nr.forceAllow_?!0:!Nr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!vT()&&!yT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=v_(n),i=fv(r,UT);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[FT]="t",r[Tv]=e,r[xv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ue(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ld{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=fT(),window[OT+this.uniqueCallbackIdentifier]=e,window[DT+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ld.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Te("frame writing exception"),a.stack&&Te(a.stack),Te(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Te("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Tv]=this.myID,e[xv]=this.myPW,e[Nv]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Rv+r.length<=Pv;){const o=this.pendingSegs.shift();r=r+"&"+MT+i+"="+o.seg+"&"+LT+i+"="+o.ts+"&"+jT+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(WT)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Te("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BT=16384,HT=45e3;let da=null;typeof MozWebSocket<"u"?da=MozWebSocket:typeof WebSocket<"u"&&(da=WebSocket);class st{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=js(this.connId),this.stats_=Md(n),this.connURL=st.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[mv]=bd,typeof location<"u"&&location.hostname&&yv.test(location.hostname)&&(o[_v]=vv),n&&(o[gv]=n),r&&(o[wv]=r),i&&(o[lc]=i),s&&(o[Ev]=s),kv(e,Sv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Vn.set("previous_websocket_failure",!0);try{let r;PS(),this.mySock=new da(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){st.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&da!==null&&!st.forceDisallow_}static previouslyFailed(){return Vn.isInMemoryStorage||Vn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Vn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=fs(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=fv(n,BT);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(HT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}st.responsesRequiredToBeHealthy=2;st.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Nr,st]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=st&&st.isAvailable();let r=n&&!st.previouslyFailed();if(e.webSocketOnly&&(n||We("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[st];else{const i=this.transports_=[];for(const s of _s.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);_s.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}_s.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT=6e4,$T=5e3,GT=10*1024,qT=100*1024,Gl="t",fp="d",YT="s",pp="r",KT="e",mp="o",gp="a",_p="n",vp="p",QT="h";class XT{constructor(e,n,r,i,s,o,a,l,u,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=js("c:"+this.id+":"),this.transportManager_=new _s(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Vi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>qT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>GT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Gl in e){const n=e[Gl];n===gp?this.upgradeIfSecondaryHealthy_():n===pp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===mp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ei("t",e),r=Ei("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:vp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:gp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:_p,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ei("t",e),r=Ei("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ei(Gl,e);if(fp in e){const r=e[fp];if(n===QT){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===_p){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===YT?this.onConnectionShutdown_(r):n===pp?this.onReset_(r):n===KT?ac("Server Error: "+r):n===mp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ac("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),bd!==r&&We("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Vi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(VT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Vi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor($T))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:vp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Vn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha extends Ov{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!vd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ha}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp=32,wp=768;class G{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function B(){return new G("")}function W(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Sn(t){return t.pieces_.length-t.pieceNum_}function q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new G(t.pieces_,e)}function Dv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function JT(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function bv(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Mv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new G(e,0)}function ce(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof G)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new G(n,0)}function j(t){return t.pieceNum_>=t.pieces_.length}function Pe(t,e){const n=W(t),r=W(e);if(n===null)return e;if(n===r)return Pe(q(t),q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Lv(t,e){if(Sn(t)!==Sn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ot(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Sn(t)>Sn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class ZT{constructor(e,n){this.errorPrefix_=n,this.parts_=bv(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=$a(this.parts_[r]);jv(this)}}function ex(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=$a(e),jv(t)}function tx(t){const e=t.parts_.pop();t.byteLength_-=$a(e),t.parts_.length>0&&(t.byteLength_-=1)}function jv(t){if(t.byteLength_>wp)throw new Error(t.errorPrefix_+"has a key path longer than "+wp+" bytes ("+t.byteLength_+").");if(t.parts_.length>yp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+yp+") or object contains a cycle "+Un(t))}function Un(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd extends Ov{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new jd}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=1e3,nx=60*5*1e3,Ep=30*1e3,rx=1.3,ix=3e4,sx="server_kill",Sp=3;class Dt extends Av{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Dt.nextPersistentConnectionId_++,this.log_=js("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Si,this.maxReconnectDelay_=nx,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");jd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ha.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ue(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Va,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;Dt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&St(e,"w")){const r=Gr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();We(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||LS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ep)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=MS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ue(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):ac("Unrecognized action received from server: "+ue(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Si,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Si,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ix&&(this.reconnectDelay_=Si),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*rx)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Dt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(c){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(c)};this.realtime_={close:l,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Te("getToken() completed but was canceled"):(Te("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=f&&f.token,a=new XT(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,_=>{We(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(sx)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&We(c),l())}}}interrupt(e){Te("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Te("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ju(this.interruptReasons_)&&(this.reconnectDelay_=Si,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Dd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new G(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Te("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Sp&&(this.reconnectDelay_=Ep,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Te("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Sp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+cv.replace(/\./g,"-")]=1,vd()?e["framework.cordova"]=1:C_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ha.getInstance().currentlyOnline();return Ju(this.interruptReasons_)&&e}}Dt.nextPersistentConnectionId_=0;Dt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new F(nr,e),i=new F(nr,n);return this.compare(r,i)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let co;class Fv extends Qa{static get __EMPTY_NODE(){return co}static set __EMPTY_NODE(e){co=e}compare(e,n){return li(e.name,n.name)}isDefinedOn(e){throw ri("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(En,co)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,co)}toString(){return".key"}}const Yn=new Fv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ge{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ge.RED,this.left=i??Le.EMPTY_NODE,this.right=s??Le.EMPTY_NODE}copy(e,n,r,i,s){return new ge(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Le.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Le.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ge.RED=!0;ge.BLACK=!1;class ox{copy(e,n,r,i,s){return this}insert(e,n,r){return new ge(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Le{constructor(e,n=Le.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Le(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ge.BLACK,null,null))}remove(e){return new Le(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ge.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ho(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ho(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ho(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ho(this.root_,null,this.comparator_,!0,e)}}Le.EMPTY_NODE=new ox;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(t,e){return li(t.name,e.name)}function Fd(t,e){return li(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uc;function lx(t){uc=t}const Uv=function(t){return typeof t=="number"?"number:"+pv(t):"string:"+t},Wv=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&St(e,".sv"),"Priority must be a string or number.")}else I(t===uc||t.isEmpty(),"priority of unexpected type.");I(t===uc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cp;class pe{constructor(e,n=pe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Wv(this.priorityNode_)}static set __childrenNodeConstructor(e){Cp=e}static get __childrenNodeConstructor(){return Cp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new pe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return j(e)?this:W(e)===".priority"?this.priorityNode_:pe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:pe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=W(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||Sn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,pe.__childrenNodeConstructor.EMPTY_NODE.updateChild(q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Uv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=pv(this.value_):e+=this.value_,this.lazyHash_=hv(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===pe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof pe.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=pe.VALUE_TYPE_ORDER.indexOf(n),s=pe.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}pe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zv,Bv;function ux(t){zv=t}function cx(t){Bv=t}class dx extends Qa{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?li(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(En,new pe("[PRIORITY-POST]",Bv))}makePost(e,n){const r=zv(e);return new F(n,new pe("[PRIORITY-POST]",r))}toString(){return".priority"}}const ee=new dx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx=Math.log(2);class fx{constructor(e){const n=s=>parseInt(Math.log(s)/hx,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const fa=function(t,e,n,r){t.sort(e);const i=function(l,u){const d=u-l;let c,f;if(d===0)return null;if(d===1)return c=t[l],f=n?n(c):c,new ge(f,c.node,ge.BLACK,null,null);{const _=parseInt(d/2,10)+l,v=i(l,_),y=i(_+1,u);return c=t[_],f=n?n(c):c,new ge(f,c.node,ge.BLACK,v,y)}},s=function(l){let u=null,d=null,c=t.length;const f=function(v,y){const w=c-v,m=c;c-=v;const p=i(w+1,m),g=t[w],E=n?n(g):g;_(new ge(E,g.node,y,null,p))},_=function(v){u?(u.left=v,u=v):(d=v,u=v)};for(let v=0;v<l.count;++v){const y=l.nextBitIsOne(),w=Math.pow(2,l.count-(v+1));y?f(w,ge.BLACK):(f(w,ge.BLACK),f(w,ge.RED))}return d},o=new fx(t.length),a=s(o);return new Le(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ql;const hr={};class At{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(hr&&ee,"ChildrenNode.ts has not been loaded"),ql=ql||new At({".priority":hr},{".priority":ee}),ql}get(e){const n=Gr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Le?n:null}hasIndex(e){return St(this.indexSet_,e.toString())}addIndex(e,n){I(e!==Yn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(F.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=fa(r,e.getCompare()):a=hr;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new At(d,u)}addToIndexes(e,n){const r=ra(this.indexes_,(i,s)=>{const o=Gr(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===hr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(F.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),fa(a,o.getCompare())}else return hr;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new F(e.name,a))),l.insert(e,e.node)}});return new At(r,this.indexSet_)}removeFromIndexes(e,n){const r=ra(this.indexes_,i=>{if(i===hr)return i;{const s=n.get(e.name);return s?i.remove(new F(e.name,s)):i}});return new At(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ci;class D{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Wv(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ci||(Ci=new D(new Le(Fd),null,At.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ci}updatePriority(e){return this.children_.isEmpty()?this:new D(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ci:n}}getChild(e){const n=W(e);return n===null?this:this.getImmediateChild(n).getChild(q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new F(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ci:this.priorityNode_;return new D(i,o,s)}}updateChild(e,n){const r=W(e);if(r===null)return n;{I(W(e)!==".priority"||Sn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ee,(o,a)=>{n[o]=a.val(e),r++,s&&D.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Uv(this.getPriority().val())+":"),this.forEachChild(ee,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":hv(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new F(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Fs?-1:0}withIndex(e){if(e===Yn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new D(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Yn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ee),i=n.getIterator(ee);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Yn?null:this.indexMap_.get(e.toString())}}D.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class px extends D{constructor(){super(new Le(Fd),D.EMPTY_NODE,At.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return D.EMPTY_NODE}isEmpty(){return!1}}const Fs=new px;Object.defineProperties(F,{MIN:{value:new F(nr,D.EMPTY_NODE)},MAX:{value:new F(En,Fs)}});Fv.__EMPTY_NODE=D.EMPTY_NODE;pe.__childrenNodeConstructor=D;lx(Fs);cx(Fs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx=!0;function _e(t,e=null){if(t===null)return D.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new pe(n,_e(e))}if(!(t instanceof Array)&&mx){const n=[];let r=!1;if(ze(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=_e(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new F(o,l)))}}),n.length===0)return D.EMPTY_NODE;const s=fa(n,ax,o=>o.name,Fd);if(r){const o=fa(n,ee.getCompare());return new D(s,_e(e),new At({".priority":o},{".priority":ee}))}else return new D(s,_e(e),At.Default)}else{let n=D.EMPTY_NODE;return ze(t,(r,i)=>{if(St(t,r)&&r.substring(0,1)!=="."){const s=_e(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(_e(e))}}ux(_e);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud extends Qa{constructor(e){super(),this.indexPath_=e,I(!j(e)&&W(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?li(e.name,n.name):s}makePost(e,n){const r=_e(e),i=D.EMPTY_NODE.updateChild(this.indexPath_,r);return new F(n,i)}maxPost(){const e=D.EMPTY_NODE.updateChild(this.indexPath_,Fs);return new F(En,e)}toString(){return bv(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx extends Qa{compare(e,n){const r=e.node.compareTo(n.node);return r===0?li(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const r=_e(e);return new F(n,r)}toString(){return".value"}}const Hv=new gx;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(t){return{type:"value",snapshotNode:t}}function Kr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function vs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ys(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function _x(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(vs(n,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Kr(n,r)):o.trackChildChange(ys(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ee,(i,s)=>{n.hasChild(i)||r.trackChildChange(vs(i,s))}),n.isLeafNode()||n.forEachChild(ee,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ys(i,s,o))}else r.trackChildChange(Kr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?D.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this.indexedFilter_=new Wd(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ws.getStartPost_(e),this.endPost_=ws.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new F(n,r))||(r=D.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=D.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(D.EMPTY_NODE);const s=this;return n.forEachChild(ee,(o,a)=>{s.matches(new F(o,a))||(i=i.updateImmediateChild(o,D.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new ws(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new F(n,r))||(r=D.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=D.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=D.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(D.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,D.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(f,_)=>c(_,f)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new F(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const c=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const _=f==null?1:o(f,l);if(d&&!r.isEmpty()&&_>=0)return s!=null&&s.trackChildChange(ys(n,r,c)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(vs(n,c));const y=a.updateImmediateChild(n,D.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Kr(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return r.isEmpty()?e:d&&o(u,l)>=0?(s!=null&&(s.trackChildChange(vs(u.name,u.node)),s.trackChildChange(Kr(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,D.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ee}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:nr}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:En}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ee}copy(){const e=new zd;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function yx(t){return t.loadsAllData()?new Wd(t.getIndex()):t.hasLimit()?new vx(t):new ws(t)}function wx(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function Ex(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function Sx(t,e){const n=t.copy();return n.index_=e,n}function Ip(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ee?n="$priority":t.index_===Hv?n="$value":t.index_===Yn?n="$key":(I(t.index_ instanceof Ud,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ue(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ue(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ue(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ue(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ue(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function kp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ee&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa extends Av{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=js("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=pa.getListenId_(e,r),a={};this.listens_[o]=a;const l=Ip(e._queryParams);this.restRequest_(s+".json",l,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Gr(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=pa.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Ip(e._queryParams),r=e._path.toString(),i=new Va;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ii(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=fs(a.responseText)}catch{We("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&We("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(){this.rootNode_=D.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(){return{value:null,children:new Map}}function $v(t,e,n){if(j(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=W(e);t.children.has(r)||t.children.set(r,ma());const i=t.children.get(r);e=q(e),$v(i,e,n)}}function cc(t,e,n){t.value!==null?n(e,t.value):Ix(t,(r,i)=>{const s=new G(e.toString()+"/"+r);cc(i,s,n)})}function Ix(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&ze(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp=10*1e3,Tx=30*1e3,xx=5*60*1e3;class Nx{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new kx(e);const r=Tp+(Tx-Tp)*Math.random();Vi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;ze(e,(i,s)=>{s>0&&St(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Vi(this.reportStats_.bind(this),Math.floor(Math.random()*2*xx))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(at||(at={}));function Gv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Bd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Hd(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=at.ACK_USER_WRITE,this.source=Gv()}operationForChild(e){if(j(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new G(e));return new ga(B(),n,this.revert)}}else return I(W(this.path)===e,"operationForChild called for unrelated child."),new ga(q(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n){this.source=e,this.path=n,this.type=at.LISTEN_COMPLETE}operationForChild(e){return j(this.path)?new Es(this.source,B()):new Es(this.source,q(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=at.OVERWRITE}operationForChild(e){return j(this.path)?new rr(this.source,B(),this.snap.getImmediateChild(e)):new rr(this.source,q(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=at.MERGE}operationForChild(e){if(j(this.path)){const n=this.children.subtree(new G(e));return n.isEmpty()?null:n.value?new rr(this.source,B(),n.value):new Ss(this.source,B(),n)}else return I(W(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ss(this.source,q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(j(e))return this.isFullyInitialized()&&!this.filtered_;const n=W(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Px{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Rx(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(_x(o.childName,o.snapshotNode))}),Ii(t,i,"child_removed",e,r,n),Ii(t,i,"child_added",e,r,n),Ii(t,i,"child_moved",s,r,n),Ii(t,i,"child_changed",e,r,n),Ii(t,i,"value",e,r,n),i}function Ii(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>Ox(t,a,l)),o.forEach(a=>{const l=Ax(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function Ax(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Ox(t,e,n){if(e.childName==null||n.childName==null)throw ri("Should only compare child_ events.");const r=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(t,e){return{eventCache:t,serverCache:e}}function $i(t,e,n,r){return Xa(new Cn(e,n,r),t.serverCache)}function qv(t,e,n,r){return Xa(t.eventCache,new Cn(e,n,r))}function _a(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ir(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yl;const Dx=()=>(Yl||(Yl=new Le(_T)),Yl);class Q{constructor(e,n=Dx()){this.value=e,this.children=n}static fromObject(e){let n=new Q(null);return ze(e,(r,i)=>{n=n.set(new G(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:B(),value:this.value};if(j(e))return null;{const r=W(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(q(e),n);return s!=null?{path:ce(new G(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(j(e))return this;{const n=W(e),r=this.children.get(n);return r!==null?r.subtree(q(e)):new Q(null)}}set(e,n){if(j(e))return new Q(n,this.children);{const r=W(e),s=(this.children.get(r)||new Q(null)).set(q(e),n),o=this.children.insert(r,s);return new Q(this.value,o)}}remove(e){if(j(e))return this.children.isEmpty()?new Q(null):new Q(null,this.children);{const n=W(e),r=this.children.get(n);if(r){const i=r.remove(q(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Q(null):new Q(this.value,s)}else return this}}get(e){if(j(e))return this.value;{const n=W(e),r=this.children.get(n);return r?r.get(q(e)):null}}setTree(e,n){if(j(e))return n;{const r=W(e),s=(this.children.get(r)||new Q(null)).setTree(q(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Q(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ce(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,B(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(j(e))return null;{const s=W(e),o=this.children.get(s);return o?o.findOnPath_(q(e),ce(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,B(),n)}foreachOnPath_(e,n,r){if(j(e))return this;{this.value&&r(n,this.value);const i=W(e),s=this.children.get(i);return s?s.foreachOnPath_(q(e),ce(n,i),r):new Q(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ce(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.writeTree_=e}static empty(){return new ct(new Q(null))}}function Gi(t,e,n){if(j(e))return new ct(new Q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Pe(i,e);return s=s.updateChild(o,n),new ct(t.writeTree_.set(i,s))}else{const i=new Q(n),s=t.writeTree_.setTree(e,i);return new ct(s)}}}function xp(t,e,n){let r=t;return ze(n,(i,s)=>{r=Gi(r,ce(e,i),s)}),r}function Np(t,e){if(j(e))return ct.empty();{const n=t.writeTree_.setTree(e,new Q(null));return new ct(n)}}function dc(t,e){return ur(t,e)!=null}function ur(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Pe(n.path,e)):null}function Pp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ee,(r,i)=>{e.push(new F(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new F(r,i.value))}),e}function _n(t,e){if(j(e))return t;{const n=ur(t,e);return n!=null?new ct(new Q(n)):new ct(t.writeTree_.subtree(e))}}function hc(t){return t.writeTree_.isEmpty()}function Qr(t,e){return Yv(B(),t.writeTree_,e)}function Yv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Yv(ce(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ce(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(t,e){return Jv(e,t)}function bx(t,e,n,r,i){I(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Gi(t.visibleWrites,e,n)),t.lastWriteId=r}function Mx(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function Lx(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&jx(a,r.path)?i=!1:ot(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return Fx(t),!0;if(r.snap)t.visibleWrites=Np(t.visibleWrites,r.path);else{const a=r.children;ze(a,l=>{t.visibleWrites=Np(t.visibleWrites,ce(r.path,l))})}return!0}else return!1}function jx(t,e){if(t.snap)return ot(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ot(ce(t.path,n),e))return!0;return!1}function Fx(t){t.visibleWrites=Kv(t.allWrites,Ux,B()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Ux(t){return t.visible}function Kv(t,e,n){let r=ct.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)ot(n,o)?(a=Pe(n,o),r=Gi(r,a,s.snap)):ot(o,n)&&(a=Pe(o,n),r=Gi(r,B(),s.snap.getChild(a)));else if(s.children){if(ot(n,o))a=Pe(n,o),r=xp(r,a,s.children);else if(ot(o,n))if(a=Pe(o,n),j(a))r=xp(r,B(),s.children);else{const l=Gr(s.children,W(a));if(l){const u=l.getChild(q(a));r=Gi(r,B(),u)}}}else throw ri("WriteRecord should have .snap or .children")}}return r}function Qv(t,e,n,r,i){if(!r&&!i){const s=ur(t.visibleWrites,e);if(s!=null)return s;{const o=_n(t.visibleWrites,e);if(hc(o))return n;if(n==null&&!dc(o,B()))return null;{const a=n||D.EMPTY_NODE;return Qr(o,a)}}}else{const s=_n(t.visibleWrites,e);if(!i&&hc(s))return n;if(!i&&n==null&&!dc(s,B()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(ot(u.path,e)||ot(e,u.path))},a=Kv(t.allWrites,o,e),l=n||D.EMPTY_NODE;return Qr(a,l)}}}function Wx(t,e,n){let r=D.EMPTY_NODE;const i=ur(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ee,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=_n(t.visibleWrites,e);return n.forEachChild(ee,(o,a)=>{const l=Qr(_n(s,new G(o)),a);r=r.updateImmediateChild(o,l)}),Pp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=_n(t.visibleWrites,e);return Pp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function zx(t,e,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ce(e,n);if(dc(t.visibleWrites,s))return null;{const o=_n(t.visibleWrites,s);return hc(o)?i.getChild(n):Qr(o,i.getChild(n))}}function Bx(t,e,n,r){const i=ce(e,n),s=ur(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=_n(t.visibleWrites,i);return Qr(o,r.getNode().getImmediateChild(n))}else return null}function Hx(t,e){return ur(t.visibleWrites,e)}function Vx(t,e,n,r,i,s,o){let a;const l=_n(t.visibleWrites,e),u=ur(l,B());if(u!=null)a=u;else if(n!=null)a=Qr(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],c=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let _=f.getNext();for(;_&&d.length<i;)c(_,r)!==0&&d.push(_),_=f.getNext();return d}else return[]}function $x(){return{visibleWrites:ct.empty(),allWrites:[],lastWriteId:-1}}function va(t,e,n,r){return Qv(t.writeTree,t.treePath,e,n,r)}function Vd(t,e){return Wx(t.writeTree,t.treePath,e)}function Rp(t,e,n,r){return zx(t.writeTree,t.treePath,e,n,r)}function ya(t,e){return Hx(t.writeTree,ce(t.treePath,e))}function Gx(t,e,n,r,i,s){return Vx(t.writeTree,t.treePath,e,n,r,i,s)}function $d(t,e,n){return Bx(t.writeTree,t.treePath,e,n)}function Xv(t,e){return Jv(ce(t.treePath,e),t.writeTree)}function Jv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ys(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,vs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Kr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ys(r,e.snapshotNode,i.oldSnap));else throw ri("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Zv=new Yx;class Gd{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Cn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return $d(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ir(this.viewCache_),s=Gx(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kx(t){return{filter:t}}function Qx(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Xx(t,e,n,r,i){const s=new qx;let o,a;if(n.type===at.OVERWRITE){const u=n;u.source.fromUser?o=fc(t,e,u.path,u.snap,r,i,s):(I(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!j(u.path),o=wa(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===at.MERGE){const u=n;u.source.fromUser?o=Zx(t,e,u.path,u.children,r,i,s):(I(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=pc(t,e,u.path,u.children,r,i,a,s))}else if(n.type===at.ACK_USER_WRITE){const u=n;u.revert?o=nN(t,e,u.path,r,i,s):o=eN(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===at.LISTEN_COMPLETE)o=tN(t,e,n.path,r,s);else throw ri("Unknown operation type: "+n.type);const l=s.getChanges();return Jx(e,o,l),{viewCache:o,changes:l}}function Jx(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=_a(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Vv(_a(e)))}}function ey(t,e,n,r,i,s){const o=e.eventCache;if(ya(r,n)!=null)return e;{let a,l;if(j(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ir(e),d=u instanceof D?u:D.EMPTY_NODE,c=Vd(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const u=va(r,ir(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=W(n);if(u===".priority"){I(Sn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const c=Rp(r,n,d,l);c!=null?a=t.filter.updatePriority(d,c):a=o.getNode()}else{const d=q(n);let c;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=Rp(r,n,o.getNode(),l);f!=null?c=o.getNode().getImmediateChild(u).updateChild(d,f):c=o.getNode().getImmediateChild(u)}else c=$d(r,u,e.serverCache);c!=null?a=t.filter.updateChild(o.getNode(),u,c,d,i,s):a=o.getNode()}}return $i(e,a,o.isFullyInitialized()||j(n),t.filter.filtersNodes())}}function wa(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const d=o?t.filter:t.filter.getIndexedFilter();if(j(n))u=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const _=l.getNode().updateChild(n,r);u=d.updateFullNode(l.getNode(),_,null)}else{const _=W(n);if(!l.isCompleteForPath(n)&&Sn(n)>1)return e;const v=q(n),w=l.getNode().getImmediateChild(_).updateChild(v,r);_===".priority"?u=d.updatePriority(l.getNode(),w):u=d.updateChild(l.getNode(),_,w,v,Zv,null)}const c=qv(e,u,l.isFullyInitialized()||j(n),d.filtersNodes()),f=new Gd(i,c,s);return ey(t,c,n,i,f,a)}function fc(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const d=new Gd(i,e,s);if(j(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=$i(e,u,!0,t.filter.filtersNodes());else{const c=W(n);if(c===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=$i(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=q(n),_=a.getNode().getImmediateChild(c);let v;if(j(f))v=r;else{const y=d.getCompleteChild(c);y!=null?Dv(f)===".priority"&&y.getChild(Mv(f)).isEmpty()?v=y:v=y.updateChild(f,r):v=D.EMPTY_NODE}if(_.equals(v))l=e;else{const y=t.filter.updateChild(a.getNode(),c,v,f,d,o);l=$i(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Ap(t,e){return t.eventCache.isCompleteForChild(e)}function Zx(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const d=ce(n,l);Ap(e,W(d))&&(a=fc(t,a,d,u,i,s,o))}),r.foreach((l,u)=>{const d=ce(n,l);Ap(e,W(d))||(a=fc(t,a,d,u,i,s,o))}),a}function Op(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function pc(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;j(n)?u=r:u=new Q(null).setTree(n,r);const d=e.serverCache.getNode();return u.children.inorderTraversal((c,f)=>{if(d.hasChild(c)){const _=e.serverCache.getNode().getImmediateChild(c),v=Op(t,_,f);l=wa(t,l,new G(c),v,i,s,o,a)}}),u.children.inorderTraversal((c,f)=>{const _=!e.serverCache.isCompleteForChild(c)&&f.value===null;if(!d.hasChild(c)&&!_){const v=e.serverCache.getNode().getImmediateChild(c),y=Op(t,v,f);l=wa(t,l,new G(c),y,i,s,o,a)}}),l}function eN(t,e,n,r,i,s,o){if(ya(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(j(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return wa(t,e,n,l.getNode().getChild(n),i,s,a,o);if(j(n)){let u=new Q(null);return l.getNode().forEachChild(Yn,(d,c)=>{u=u.set(new G(d),c)}),pc(t,e,n,u,i,s,a,o)}else return e}else{let u=new Q(null);return r.foreach((d,c)=>{const f=ce(n,d);l.isCompleteForPath(f)&&(u=u.set(d,l.getNode().getChild(f)))}),pc(t,e,n,u,i,s,a,o)}}function tN(t,e,n,r,i){const s=e.serverCache,o=qv(e,s.getNode(),s.isFullyInitialized()||j(n),s.isFiltered());return ey(t,o,n,r,Zv,i)}function nN(t,e,n,r,i,s){let o;if(ya(r,n)!=null)return e;{const a=new Gd(r,e,i),l=e.eventCache.getNode();let u;if(j(n)||W(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=va(r,ir(e));else{const c=e.serverCache.getNode();I(c instanceof D,"serverChildren would be complete if leaf node"),d=Vd(r,c)}d=d,u=t.filter.updateFullNode(l,d,s)}else{const d=W(n);let c=$d(r,d,e.serverCache);c==null&&e.serverCache.isCompleteForChild(d)&&(c=l.getImmediateChild(d)),c!=null?u=t.filter.updateChild(l,d,c,q(n),a,s):e.eventCache.getNode().hasChild(d)?u=t.filter.updateChild(l,d,D.EMPTY_NODE,q(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=va(r,ir(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||ya(r,B())!=null,$i(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Wd(r.getIndex()),s=yx(r);this.processor_=Kx(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(D.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(D.EMPTY_NODE,a.getNode(),null),d=new Cn(l,o.isFullyInitialized(),i.filtersNodes()),c=new Cn(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Xa(c,d),this.eventGenerator_=new Px(this.query_)}get query(){return this.query_}}function iN(t){return t.viewCache_.serverCache.getNode()}function sN(t){return _a(t.viewCache_)}function oN(t,e){const n=ir(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!j(e)&&!n.getImmediateChild(W(e)).isEmpty())?n.getChild(e):null}function Dp(t){return t.eventRegistrations_.length===0}function aN(t,e){t.eventRegistrations_.push(e)}function bp(t,e,n){const r=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Mp(t,e,n,r){e.type===at.MERGE&&e.source.queryId!==null&&(I(ir(t.viewCache_),"We should always have a full cache before handling merges"),I(_a(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=Xx(t.processor_,i,e,n,r);return Qx(t.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,ty(t,s.changes,s.viewCache.eventCache.getNode(),null)}function lN(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ee,(s,o)=>{r.push(Kr(s,o))}),n.isFullyInitialized()&&r.push(Vv(n.getNode())),ty(t,r,n.getNode(),e)}function ty(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return Rx(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ea;class ny{constructor(){this.views=new Map}}function uN(t){I(!Ea,"__referenceConstructor has already been defined"),Ea=t}function cN(){return I(Ea,"Reference.ts has not been loaded"),Ea}function dN(t){return t.views.size===0}function qd(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),Mp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Mp(o,e,n,r));return s}}function ry(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=va(n,i?r:null),l=!1;a?l=!0:r instanceof D?(a=Vd(n,r),l=!1):(a=D.EMPTY_NODE,l=!1);const u=Xa(new Cn(a,l,!1),new Cn(r,i,!1));return new rN(e,u)}return o}function hN(t,e,n,r,i,s){const o=ry(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),aN(o,n),lN(o,n)}function fN(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=In(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(bp(u,n,r)),Dp(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(bp(l,n,r)),Dp(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!In(t)&&s.push(new(cN())(e._repo,e._path)),{removed:s,events:o}}function iy(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function vn(t,e){let n=null;for(const r of t.views.values())n=n||oN(r,e);return n}function sy(t,e){if(e._queryParams.loadsAllData())return Za(t);{const r=e._queryIdentifier;return t.views.get(r)}}function oy(t,e){return sy(t,e)!=null}function In(t){return Za(t)!=null}function Za(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sa;function pN(t){I(!Sa,"__referenceConstructor has already been defined"),Sa=t}function mN(){return I(Sa,"Reference.ts has not been loaded"),Sa}let gN=1;class Lp{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Q(null),this.pendingWriteTree_=$x(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function ay(t,e,n,r,i){return bx(t.pendingWriteTree_,e,n,r,i),i?Ws(t,new rr(Gv(),e,n)):[]}function $n(t,e,n=!1){const r=Mx(t.pendingWriteTree_,e);if(Lx(t.pendingWriteTree_,e)){let s=new Q(null);return r.snap!=null?s=s.set(B(),!0):ze(r.children,o=>{s=s.set(new G(o),!0)}),Ws(t,new ga(r.path,s,n))}else return[]}function Us(t,e,n){return Ws(t,new rr(Bd(),e,n))}function _N(t,e,n){const r=Q.fromObject(n);return Ws(t,new Ss(Bd(),e,r))}function vN(t,e){return Ws(t,new Es(Bd(),e))}function yN(t,e,n){const r=Kd(t,n);if(r){const i=Qd(r),s=i.path,o=i.queryId,a=Pe(s,e),l=new Es(Hd(o),a);return Xd(t,s,l)}else return[]}function ly(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||oy(o,e))){const l=fN(o,e,n,r);dN(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,c=t.syncPointTree_.findOnPath(s,(f,_)=>In(_));if(d&&!c){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const _=CN(f);for(let v=0;v<_.length;++v){const y=_[v],w=y.query,m=hy(t,y);t.listenProvider_.startListening(qi(w),Cs(t,w),m.hashFn,m.onComplete)}}}!c&&u.length>0&&!r&&(d?t.listenProvider_.stopListening(qi(e),null):u.forEach(f=>{const _=t.queryToTagMap.get(el(f));t.listenProvider_.stopListening(qi(f),_)}))}IN(t,u)}return a}function uy(t,e,n,r){const i=Kd(t,r);if(i!=null){const s=Qd(i),o=s.path,a=s.queryId,l=Pe(o,e),u=new rr(Hd(a),l,n);return Xd(t,o,u)}else return[]}function wN(t,e,n,r){const i=Kd(t,r);if(i){const s=Qd(i),o=s.path,a=s.queryId,l=Pe(o,e),u=Q.fromObject(n),d=new Ss(Hd(a),l,u);return Xd(t,o,d)}else return[]}function EN(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,_)=>{const v=Pe(f,i);s=s||vn(_,v),o=o||In(_)});let a=t.syncPointTree_.get(i);a?(o=o||In(a),s=s||vn(a,B())):(a=new ny,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=D.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((_,v)=>{const y=vn(v,B());y&&(s=s.updateImmediateChild(_,y))}));const u=oy(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=el(e);I(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const _=kN();t.queryToTagMap.set(f,_),t.tagToQueryMap.set(_,f)}const d=Ja(t.pendingWriteTree_,i);let c=hN(a,e,n,d,s,l);if(!u&&!o&&!r){const f=sy(a,e);c=c.concat(TN(t,e,f))}return c}function Yd(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Pe(o,e),u=vn(a,l);if(u)return u});return Qv(i,e,s,n,!0)}function SN(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,d)=>{const c=Pe(u,n);r=r||vn(d,c)});let i=t.syncPointTree_.get(n);i?r=r||vn(i,B()):(i=new ny,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Cn(r,!0,!1):null,a=Ja(t.pendingWriteTree_,e._path),l=ry(i,e,a,s?o.getNode():D.EMPTY_NODE,s);return sN(l)}function Ws(t,e){return cy(e,t.syncPointTree_,null,Ja(t.pendingWriteTree_,B()))}function cy(t,e,n,r){if(j(t.path))return dy(t,e,n,r);{const i=e.get(B());n==null&&i!=null&&(n=vn(i,B()));let s=[];const o=W(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,d=Xv(r,o);s=s.concat(cy(a,l,u,d))}return i&&(s=s.concat(qd(i,t,r,n))),s}}function dy(t,e,n,r){const i=e.get(B());n==null&&i!=null&&(n=vn(i,B()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=Xv(r,o),d=t.operationForChild(o);d&&(s=s.concat(dy(d,a,l,u)))}),i&&(s=s.concat(qd(i,t,r,n))),s}function hy(t,e){const n=e.query,r=Cs(t,n);return{hashFn:()=>(iN(e)||D.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?yN(t,n._path,r):vN(t,n._path);{const s=wT(i,n);return ly(t,n,null,s)}}}}function Cs(t,e){const n=el(e);return t.queryToTagMap.get(n)}function el(t){return t._path.toString()+"$"+t._queryIdentifier}function Kd(t,e){return t.tagToQueryMap.get(e)}function Qd(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new G(t.substr(0,e))}}function Xd(t,e,n){const r=t.syncPointTree_.get(e);I(r,"Missing sync point for query tag that we're tracking");const i=Ja(t.pendingWriteTree_,e);return qd(r,n,i,null)}function CN(t){return t.fold((e,n,r)=>{if(n&&In(n))return[Za(n)];{let i=[];return n&&(i=iy(n)),ze(r,(s,o)=>{i=i.concat(o)}),i}})}function qi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(mN())(t._repo,t._path):t}function IN(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=el(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function kN(){return gN++}function TN(t,e,n){const r=e._path,i=Cs(t,e),s=hy(t,n),o=t.listenProvider_.startListening(qi(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)I(!In(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,d,c)=>{if(!j(u)&&d&&In(d))return[Za(d).query];{let f=[];return d&&(f=f.concat(iy(d).map(_=>_.query))),ze(c,(_,v)=>{f=f.concat(v)}),f}});for(let u=0;u<l.length;++u){const d=l[u];t.listenProvider_.stopListening(qi(d),Cs(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Jd(n)}node(){return this.node_}}class Zd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ce(this.path_,e);return new Zd(this.syncTree_,n)}node(){return Yd(this.syncTree_,this.path_)}}const xN=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},jp=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return NN(t[".sv"],e,n);if(typeof t[".sv"]=="object")return PN(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},NN=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},PN=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},RN=function(t,e,n,r){return eh(e,new Zd(n,t),r)},fy=function(t,e,n){return eh(t,new Jd(e),n)};function eh(t,e,n){const r=t.getPriority().val(),i=jp(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=jp(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new pe(a,_e(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new pe(i))),o.forEachChild(ee,(a,l)=>{const u=eh(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function nh(t,e){let n=e instanceof G?e:new G(e),r=t,i=W(n);for(;i!==null;){const s=Gr(r.node.children,i)||{children:{},childCount:0};r=new th(i,r,s),n=q(n),i=W(n)}return r}function ci(t){return t.node.value}function py(t,e){t.node.value=e,mc(t)}function my(t){return t.node.childCount>0}function AN(t){return ci(t)===void 0&&!my(t)}function tl(t,e){ze(t.node.children,(n,r)=>{e(new th(n,t,r))})}function gy(t,e,n,r){n&&e(t),tl(t,i=>{gy(i,e,!0)})}function ON(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function zs(t){return new G(t.parent===null?t.name:zs(t.parent)+"/"+t.name)}function mc(t){t.parent!==null&&DN(t.parent,t.name,t)}function DN(t,e,n){const r=AN(n),i=St(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,mc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,mc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bN=/[\[\].#$\/\u0000-\u001F\u007F]/,MN=/[\[\].#$\u0000-\u001F\u007F]/,Kl=10*1024*1024,_y=function(t){return typeof t=="string"&&t.length!==0&&!bN.test(t)},vy=function(t){return typeof t=="string"&&t.length!==0&&!MN.test(t)},LN=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),vy(t)},Fp=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Od(t)||t&&typeof t=="object"&&St(t,".sv")},Bs=function(t,e,n,r){r&&e===void 0||rh(yd(t,"value"),e,n)},rh=function(t,e,n){const r=n instanceof G?new ZT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Un(r));if(typeof e=="function")throw new Error(t+"contains a function "+Un(r)+" with contents = "+e.toString());if(Od(e))throw new Error(t+"contains "+e.toString()+" "+Un(r));if(typeof e=="string"&&e.length>Kl/3&&$a(e)>Kl)throw new Error(t+"contains a string greater than "+Kl+" utf8 bytes "+Un(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(ze(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!_y(o)))throw new Error(t+" contains an invalid key ("+o+") "+Un(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ex(r,o),rh(t,a,r),tx(r)}),i&&s)throw new Error(t+' contains ".value" child '+Un(r)+" in addition to actual children.")}},ih=function(t,e,n,r){if(!vy(n))throw new Error(yd(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},jN=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ih(t,e,n)},sh=function(t,e){if(W(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},FN=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!_y(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!LN(n))throw new Error(yd(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function yy(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Lv(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Et(t,e,n){yy(t,n),WN(t,r=>ot(r,e)||ot(e,r))}function WN(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(zN(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function zN(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Hi&&Te("event: "+n.toString()),ui(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN="repo_interrupt",HN=25;class VN{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new UN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ma(),this.transactionQueueTree_=new th,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function $N(t,e,n){if(t.stats_=Md(t.repoInfo_),t.forceRestClient_||IT())t.server_=new pa(t.repoInfo_,(r,i,s,o)=>{Up(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Wp(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ue(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Dt(t.repoInfo_,e,(r,i,s,o)=>{Up(t,r,i,s,o)},r=>{Wp(t,r)},r=>{GN(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=PT(t.repoInfo_,()=>new Nx(t.stats_,t.server_)),t.infoData_=new Cx,t.infoSyncTree_=new Lp({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Us(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ah(t,"connected",!1),t.serverSyncTree_=new Lp({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Et(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function wy(t){const n=t.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function oh(t){return xN({timestamp:wy(t)})}function Up(t,e,n,r,i){t.dataUpdateCount++;const s=new G(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=ra(n,u=>_e(u));o=wN(t.serverSyncTree_,s,l,i)}else{const l=_e(n);o=uy(t.serverSyncTree_,s,l,i)}else if(r){const l=ra(n,u=>_e(u));o=_N(t.serverSyncTree_,s,l)}else{const l=_e(n);o=Us(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=rl(t,s)),Et(t.eventQueue_,a,o)}function Wp(t,e){ah(t,"connected",e),e===!1&&KN(t)}function GN(t,e){ze(e,(n,r)=>{ah(t,n,r)})}function ah(t,e,n){const r=new G("/.info/"+e),i=_e(n);t.infoData_.updateSnapshot(r,i);const s=Us(t.infoSyncTree_,r,i);Et(t.eventQueue_,r,s)}function Ey(t){return t.nextWriteId_++}function qN(t,e,n){const r=SN(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=_e(i).withIndex(e._queryParams.getIndex());EN(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Us(t.serverSyncTree_,e._path,s);else{const a=Cs(t.serverSyncTree_,e);o=uy(t.serverSyncTree_,e._path,s,a)}return Et(t.eventQueue_,e._path,o),ly(t.serverSyncTree_,e,n,null,!0),s},i=>(nl(t,"get for query "+ue(e)+" failed: "+i),Promise.reject(new Error(i))))}function YN(t,e,n,r,i){nl(t,"set",{path:e.toString(),value:n,priority:r});const s=oh(t),o=_e(n,r),a=Yd(t.serverSyncTree_,e),l=fy(o,a,s),u=Ey(t),d=ay(t.serverSyncTree_,e,l,u,!0);yy(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(f,_)=>{const v=f==="ok";v||We("set at "+e+" failed: "+f);const y=$n(t.serverSyncTree_,u,!v);Et(t.eventQueue_,e,y),XN(t,i,f,_)});const c=Ty(t,e);rl(t,c),Et(t.eventQueue_,c,[])}function KN(t){nl(t,"onDisconnectEvents");const e=oh(t),n=ma();cc(t.onDisconnect_,B(),(i,s)=>{const o=RN(i,s,t.serverSyncTree_,e);$v(n,i,o)});let r=[];cc(n,B(),(i,s)=>{r=r.concat(Us(t.serverSyncTree_,i,s));const o=Ty(t,i);rl(t,o)}),t.onDisconnect_=ma(),Et(t.eventQueue_,B(),r)}function QN(t){t.persistentConnection_&&t.persistentConnection_.interrupt(BN)}function nl(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Te(n,...e)}function XN(t,e,n,r){e&&ui(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Sy(t,e,n){return Yd(t.serverSyncTree_,e,n)||D.EMPTY_NODE}function lh(t,e=t.transactionQueueTree_){if(e||il(t,e),ci(e)){const n=Iy(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&JN(t,zs(e),n)}else my(e)&&tl(e,n=>{lh(t,n)})}function JN(t,e,n){const r=n.map(u=>u.currentWriteId),i=Sy(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];I(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Pe(e,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{nl(t,"transaction put response",{path:l.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat($n(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&c.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();il(t,nh(t.transactionQueueTree_,e)),lh(t,t.transactionQueueTree_),Et(t.eventQueue_,e,d);for(let f=0;f<c.length;f++)ui(c[f])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{We("transaction at "+l.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}rl(t,e)}},o)}function rl(t,e){const n=Cy(t,e),r=zs(n),i=Iy(t,n);return ZN(t,i,r),r}function ZN(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Pe(n,l.path);let d=!1,c;if(I(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,c=l.abortReason,i=i.concat($n(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=HN)d=!0,c="maxretry",i=i.concat($n(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Sy(t,l.path,o);l.currentInputSnapshot=f;const _=e[a].update(f.val());if(_!==void 0){rh("transaction failed: Data returned ",_,l.path);let v=_e(_);typeof _=="object"&&_!=null&&St(_,".priority")||(v=v.updatePriority(f.getPriority()));const w=l.currentWriteId,m=oh(t),p=fy(v,f,m);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=p,l.currentWriteId=Ey(t),o.splice(o.indexOf(w),1),i=i.concat(ay(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat($n(t.serverSyncTree_,w,!0))}else d=!0,c="nodata",i=i.concat($n(t.serverSyncTree_,l.currentWriteId,!0))}Et(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(c==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(c),!1,null))))}il(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ui(r[a]);lh(t,t.transactionQueueTree_)}function Cy(t,e){let n,r=t.transactionQueueTree_;for(n=W(e);n!==null&&ci(r)===void 0;)r=nh(r,n),e=q(e),n=W(e);return r}function Iy(t,e){const n=[];return ky(t,e,n),n.sort((r,i)=>r.order-i.order),n}function ky(t,e,n){const r=ci(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);tl(e,i=>{ky(t,i,n)})}function il(t,e){const n=ci(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,py(e,n.length>0?n:void 0)}tl(e,r=>{il(t,r)})}function Ty(t,e){const n=zs(Cy(t,e)),r=nh(t.transactionQueueTree_,e);return ON(r,i=>{Ql(t,i)}),Ql(t,r),gy(r,i=>{Ql(t,i)}),n}function Ql(t,e){const n=ci(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat($n(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?py(e,void 0):n.length=s+1,Et(t.eventQueue_,zs(e),i);for(let o=0;o<r.length;o++)ui(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function tP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):We(`Invalid query segment '${n}' in query '${t}'`)}return e}const zp=function(t,e){const n=nP(t),r=n.namespace;n.domain==="firebase.com"&&Wt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Wt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||mT();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Iv(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new G(n.pathString)}},nP=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let d=t.indexOf("/");d===-1&&(d=t.length);let c=t.indexOf("?");c===-1&&(c=t.length),e=t.substring(0,Math.min(d,c)),d<c&&(i=eP(t.substring(d,c)));const f=tP(t.substring(Math.min(t.length,c)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const _=e.slice(0,u);if(_.toLowerCase()==="localhost")n="localhost";else if(_.split(".").length<=2)n=_;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",rP=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Bp.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Bp.charAt(e[i]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ue(this.snapshot.exportVal())}}class sP{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return j(this._path)?null:Dv(this._path)}get ref(){return new Bt(this._repo,this._path)}get _queryIdentifier(){const e=kp(this._queryParams),n=Dd(e);return n==="{}"?"default":n}get _queryObject(){return kp(this._queryParams)}isEqual(e){if(e=Se(e),!(e instanceof di))return!1;const n=this._repo===e._repo,r=Lv(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+JT(this._path)}}function aP(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function uh(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Yn){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==nr)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==En)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===ee){if(e!=null&&!Fp(e)||n!=null&&!Fp(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(I(t.getIndex()instanceof Ud||t.getIndex()===Hv,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function xy(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Bt extends di{constructor(e,n){super(e,n,new zd,!1)}get parent(){const e=Mv(this._path);return e===null?null:new Bt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Is{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new G(e),r=ks(this.ref,e);return new Is(this._node.getChild(n),r,ee)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Is(i,ks(this.ref,r),ee)))}hasChild(e){const n=new G(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ca(t,e){return t=Se(t),t._checkNotDeleted("ref"),e!==void 0?ks(t._root,e):t._root}function ks(t,e){return t=Se(t),W(t._path)===null?jN("child","path",e):ih("child","path",e),new Bt(t._repo,ce(t._path,e))}function lP(t,e){t=Se(t),sh("push",t._path),Bs("push",e,t._path,!0);const n=wy(t._repo),r=rP(n),i=ks(t,r),s=ks(t,r);let o;return o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function uP(t){return sh("remove",t._path),Ny(t,null)}function Ny(t,e){t=Se(t),sh("set",t._path),Bs("set",e,t._path,!1);const n=new Va;return YN(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Xl(t){t=Se(t);const e=new oP(()=>{}),n=new ch(e);return qN(t._repo,t,n).then(r=>new Is(r,new Bt(t._repo,t._path),t._queryParams.getIndex()))}class ch{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new iP("value",this,new Is(e.snapshotNode,new Bt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new sP(this,e,n):null}matches(e){return e instanceof ch?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class sl{}class cP extends sl{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){Bs("endAt",this._value,e._path,!0);const n=Ex(e._queryParams,this._value,this._key);if(xy(n),uh(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new di(e._repo,e._path,n,e._orderByCalled)}}class dP extends sl{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){Bs("startAt",this._value,e._path,!0);const n=wx(e._queryParams,this._value,this._key);if(xy(n),uh(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new di(e._repo,e._path,n,e._orderByCalled)}}class hP extends sl{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){aP(e,"orderByChild");const n=new G(this._path);if(j(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new Ud(n),i=Sx(e._queryParams,r);return uh(i),new di(e._repo,e._path,i,!0)}}function fP(t){return ih("orderByChild","path",t),new hP(t)}class pP extends sl{constructor(e,n){super(),this._value=e,this._key=n,this.type="equalTo"}_apply(e){if(Bs("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new cP(this._value,this._key)._apply(new dP(this._value,this._key)._apply(e))}}function mP(t,e){return new pP(t,e)}function gP(t,...e){let n=Se(t);for(const r of e)n=r._apply(n);return n}uN(Bt);pN(Bt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P="FIREBASE_DATABASE_EMULATOR_HOST",gc={};let vP=!1;function yP(t,e,n,r){t.repoInfo_=new Iv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function wP(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Wt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Te("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=zp(s,i),a=o.repoInfo,l;typeof process<"u"&&ap&&(l=ap[_P]),l?(s=`http://${l}?ns=${a.namespace}`,o=zp(s,i),a=o.repoInfo):o.repoInfo.secure;const u=new TT(t.name,t.options,e);FN("Invalid Firebase Database URL",o),j(o.path)||Wt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=SP(a,t,u,new kT(t.name,n));return new CP(d,t)}function EP(t,e){const n=gc[e];(!n||n[t.key]!==t)&&Wt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),QN(t),delete n[t.key]}function SP(t,e,n,r){let i=gc[e.name];i||(i={},gc[e.name]=i);let s=i[t.toURLString()];return s&&Wt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new VN(t,vP,n,r),i[t.toURLString()]=s,s}class CP{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||($N(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Bt(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(EP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Wt("Cannot call "+e+" on a deleted database.")}}function IP(t=N_(),e){const n=Sd(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=IS("database");r&&kP(n,...r)}return n}function kP(t,e,n,r={}){t=Se(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Wt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Wt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Po(Po.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:kS(r.mockUserToken,t.app.options.projectId);s=new Po(o)}yP(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TP(t){uT(si),qr(new er("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return wP(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),mn(lp,up,t),mn(lp,up,"esm2017")}Dt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Dt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};TP();const xP={apiKey:"AIzaSyAHjMwP0_C1ROUCEOzFqyNCEBMQITvGIqc",authDomain:"skts-attendance-portal.firebaseapp.com",projectId:"skts-attendance-portal",storageBucket:"skts-attendance-portal.firebasestorage.app",messagingSenderId:"764249344216",appId:"1:764249344216:web:a45db3f845f4d6e5ebafad",measurementId:"G-NGH731RC55",databaseURL:"https://skts-attendance-portal-default-rtdb.asia-southeast1.firebasedatabase.app"},Py=x_(xP),Jl=aT(Py),Ia=IP(Py);console.log("✅ Firebase initialized with Realtime Database");const Ry=S.createContext();function cr(){return S.useContext(Ry)}function NP({children:t}){const[e,n]=S.useState(null),[r,i]=S.useState(!0);S.useEffect(()=>{const l=KI(Jl,u=>{u?(console.log("User logged in:",u.email),n({uid:u.uid,email:u.email,name:u.displayName||u.email.split("@")[0],employeeId:u.email.split("@")[0].toUpperCase(),isAdmin:!0})):n(null),i(!1)});return()=>l()},[]);const a={user:e,login:async(l,u)=>GI(Jl,l,u),logout:()=>QI(Jl),loading:r};return h.jsx(Ry.Provider,{value:a,children:t})}function PP({isOpen:t,onClose:e,onConfirm:n,title:r,message:i}){return t?h.jsx("div",{className:"modal-overlay",onClick:e,children:h.jsxs("div",{className:"modal-content",onClick:s=>s.stopPropagation(),children:[h.jsx("div",{className:"modal-header",children:h.jsx("h3",{children:r})}),h.jsx("div",{className:"modal-body",children:h.jsx("p",{children:i})}),h.jsxs("div",{className:"modal-footer",children:[h.jsx("button",{onClick:e,className:"btn-modal btn-cancel",children:"Cancel"}),h.jsx("button",{onClick:n,className:"btn-modal btn-confirm",children:"Logout"})]})]})}):null}const Ay="/attendance-portal/assets/skts-latest-DNBFzrVy.png";function RP(){const{user:t,logout:e}=cr(),n=Ha(),r=ni(),[i,s]=S.useState(!1),[o,a]=S.useState(!1),l=()=>{s(!1),a(!0)},u=()=>{a(!1),e(),n("/login")},d=()=>{a(!1)},c=f=>r.pathname===f;return h.jsxs(h.Fragment,{children:[h.jsx("header",{className:"header",children:h.jsxs("div",{className:"header-container",children:[h.jsx("div",{className:"logo-section",children:h.jsx("img",{src:Ay,alt:"Smart Krow Logo",className:"logo-image"})}),h.jsx("nav",{className:"nav-menu",children:t?h.jsxs(h.Fragment,{children:[h.jsx(lo,{to:"/dashboard",className:`nav-link ${c("/dashboard")?"active":""}`,children:"Dashboard"}),h.jsx(lo,{to:"/attendance",className:`nav-link ${c("/attendance")?"active":""}`,children:"Mark Attendance"}),t.isAdmin&&h.jsx(lo,{to:"/admin",className:`nav-link ${c("/admin")?"active":""}`,children:"Admin Panel"}),h.jsxs("div",{className:"user-info",children:[h.jsx("span",{className:"user-name",children:t.name}),h.jsxs("div",{className:"user-dropdown",children:[h.jsx("button",{className:"user-icon-btn",onClick:()=>s(!i),children:h.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("circle",{cx:"12",cy:"8",r:"4",stroke:"currentColor",strokeWidth:"2"}),h.jsx("path",{d:"M4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]})}),i&&h.jsxs("div",{className:"dropdown-menu",children:[h.jsxs("div",{className:"dropdown-header",children:[h.jsx("strong",{children:t.name}),h.jsx("span",{children:t.email})]}),h.jsxs("button",{onClick:l,className:"dropdown-item",children:[h.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[h.jsx("path",{d:"M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),h.jsx("path",{d:"M16 17L21 12L16 7",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),h.jsx("path",{d:"M21 12H9",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),"Logout"]})]})]})]})]}):h.jsx(lo,{to:"/login",className:"btn-contact",children:"Login"})})]})}),h.jsx(PP,{isOpen:o,onClose:d,onConfirm:u,title:"Confirm Logout",message:"Are you sure you want to logout from your account?"})]})}function AP(){const[t,e]=S.useState(""),[n,r]=S.useState(""),[i,s]=S.useState(""),[o,a]=S.useState(!1),{login:l}=cr(),u=Ha(),d=async c=>{c.preventDefault();try{s(""),a(!0),await l(t,n),u("/dashboard")}catch(f){s("Failed to login. Please check your credentials."),console.error(f)}finally{a(!1)}};return h.jsx("div",{className:"login-page",children:h.jsx("div",{className:"login-container",children:h.jsxs("div",{className:"login-card",children:[h.jsx("div",{className:"logo-container",children:h.jsx("img",{src:Ay,alt:"Company Logo",className:"login-logo"})}),h.jsx("h1",{className:"portal-title",children:"Attendance Management Portal"}),h.jsx("h2",{className:"login-title",children:"Login"}),i&&h.jsx("div",{className:"error-message",children:i}),h.jsxs("form",{onSubmit:d,className:"login-form",children:[h.jsx("div",{className:"form-group",children:h.jsx("input",{type:"email",placeholder:"Email",value:t,onChange:c=>e(c.target.value),disabled:o,required:!0})}),h.jsx("div",{className:"form-group",children:h.jsx("input",{type:"password",placeholder:"Password",value:n,onChange:c=>r(c.target.value),disabled:o,required:!0})}),h.jsx("button",{type:"submit",className:"login-button",disabled:o,children:o?"Logging in...":"Login"})]}),h.jsx("div",{className:"login-footer",children:h.jsx("p",{className:"footer-text",children:"Smart Krow Technology Solutions"})})]})})})}const Oy=S.createContext();function dh(){return S.useContext(Oy)}function OP({children:t}){const{user:e}=cr(),[n,r]=S.useState([]),[i,s]=S.useState([]),[o,a]=S.useState([]),[l,u]=S.useState(!1),[d,c]=S.useState(!1);S.useEffect(()=>{e!=null&&e.uid&&!d&&f()},[e==null?void 0:e.uid]);const f=async()=>{if(e!=null&&e.uid){u(!0);try{const y=Ca(Ia,"attendance"),w=gP(y,fP("employeeId"),mP(e.uid)),m=await Xl(w),p=[];m.exists()&&m.forEach(N=>{p.push({id:N.key,...N.val()})}),p.sort((N,x)=>new Date(x.date)-new Date(N.date)),r(p);const g=await Xl(y),E=[];g.exists()&&g.forEach(N=>{E.push({id:N.key,...N.val()})}),E.sort((N,x)=>new Date(x.date)-new Date(N.date)),s(E);const k=Ca(Ia,"users"),T=await Xl(k),P=[];T.exists()&&T.forEach(N=>{const x=N.val();x.isAdmin||P.push({id:N.key,...x})}),a(P),c(!0)}catch(y){console.error("Error fetching data:",y)}finally{u(!1)}}},v={userAttendance:n,allAttendance:i,employees:o,loading:l,dataLoaded:d,refreshData:async()=>{c(!1),await f()}};return h.jsx(Oy.Provider,{value:v,children:t})}function ft(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}function sr(t,e){return t instanceof Date?new t.constructor(e):new Date(e)}const Dy=6048e5,DP=864e5;let bP={};function ol(){return bP}function Ts(t,e){var a,l,u,d;const n=ol(),r=(e==null?void 0:e.weekStartsOn)??((l=(a=e==null?void 0:e.locale)==null?void 0:a.options)==null?void 0:l.weekStartsOn)??n.weekStartsOn??((d=(u=n.locale)==null?void 0:u.options)==null?void 0:d.weekStartsOn)??0,i=ft(t),s=i.getDay(),o=(s<r?7:0)+s-r;return i.setDate(i.getDate()-o),i.setHours(0,0,0,0),i}function ka(t){return Ts(t,{weekStartsOn:1})}function by(t){const e=ft(t),n=e.getFullYear(),r=sr(t,0);r.setFullYear(n+1,0,4),r.setHours(0,0,0,0);const i=ka(r),s=sr(t,0);s.setFullYear(n,0,4),s.setHours(0,0,0,0);const o=ka(s);return e.getTime()>=i.getTime()?n+1:e.getTime()>=o.getTime()?n:n-1}function Hp(t){const e=ft(t);return e.setHours(0,0,0,0),e}function Vp(t){const e=ft(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function MP(t,e){const n=Hp(t),r=Hp(e),i=+n-Vp(n),s=+r-Vp(r);return Math.round((i-s)/DP)}function LP(t){const e=by(t),n=sr(t,0);return n.setFullYear(e,0,4),n.setHours(0,0,0,0),ka(n)}function jP(t){return t instanceof Date||typeof t=="object"&&Object.prototype.toString.call(t)==="[object Date]"}function FP(t){if(!jP(t)&&typeof t!="number")return!1;const e=ft(t);return!isNaN(Number(e))}function UP(t){const e=ft(t),n=sr(t,0);return n.setFullYear(e.getFullYear(),0,1),n.setHours(0,0,0,0),n}const WP={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},zP=(t,e,n)=>{let r;const i=WP[t];return typeof i=="string"?r=i:e===1?r=i.one:r=i.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function Zl(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const BP={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},HP={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},VP={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},$P={date:Zl({formats:BP,defaultWidth:"full"}),time:Zl({formats:HP,defaultWidth:"full"}),dateTime:Zl({formats:VP,defaultWidth:"full"})},GP={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},qP=(t,e,n,r)=>GP[t];function ki(t){return(e,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let i;if(r==="formatting"&&t.formattingValues){const o=t.defaultFormattingWidth||t.defaultWidth,a=n!=null&&n.width?String(n.width):o;i=t.formattingValues[a]||t.formattingValues[o]}else{const o=t.defaultWidth,a=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[a]||t.values[o]}const s=t.argumentCallback?t.argumentCallback(e):e;return i[s]}}const YP={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},KP={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},QP={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},XP={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},JP={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ZP={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},e1=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},t1={ordinalNumber:e1,era:ki({values:YP,defaultWidth:"wide"}),quarter:ki({values:KP,defaultWidth:"wide",argumentCallback:t=>t-1}),month:ki({values:QP,defaultWidth:"wide"}),day:ki({values:XP,defaultWidth:"wide"}),dayPeriod:ki({values:JP,defaultWidth:"wide",formattingValues:ZP,defaultFormattingWidth:"wide"})};function Ti(t){return(e,n={})=>{const r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],s=e.match(i);if(!s)return null;const o=s[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(a)?r1(a,c=>c.test(o)):n1(a,c=>c.test(o));let u;u=t.valueCallback?t.valueCallback(l):l,u=n.valueCallback?n.valueCallback(u):u;const d=e.slice(o.length);return{value:u,rest:d}}}function n1(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function r1(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function i1(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const i=r[0],s=e.match(t.parsePattern);if(!s)return null;let o=t.valueCallback?t.valueCallback(s[0]):s[0];o=n.valueCallback?n.valueCallback(o):o;const a=e.slice(i.length);return{value:o,rest:a}}}const s1=/^(\d+)(th|st|nd|rd)?/i,o1=/\d+/i,a1={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},l1={any:[/^b/i,/^(a|c)/i]},u1={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},c1={any:[/1/i,/2/i,/3/i,/4/i]},d1={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},h1={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},f1={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},p1={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},m1={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},g1={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},_1={ordinalNumber:i1({matchPattern:s1,parsePattern:o1,valueCallback:t=>parseInt(t,10)}),era:Ti({matchPatterns:a1,defaultMatchWidth:"wide",parsePatterns:l1,defaultParseWidth:"any"}),quarter:Ti({matchPatterns:u1,defaultMatchWidth:"wide",parsePatterns:c1,defaultParseWidth:"any",valueCallback:t=>t+1}),month:Ti({matchPatterns:d1,defaultMatchWidth:"wide",parsePatterns:h1,defaultParseWidth:"any"}),day:Ti({matchPatterns:f1,defaultMatchWidth:"wide",parsePatterns:p1,defaultParseWidth:"any"}),dayPeriod:Ti({matchPatterns:m1,defaultMatchWidth:"any",parsePatterns:g1,defaultParseWidth:"any"})},v1={code:"en-US",formatDistance:zP,formatLong:$P,formatRelative:qP,localize:t1,match:_1,options:{weekStartsOn:0,firstWeekContainsDate:1}};function y1(t){const e=ft(t);return MP(e,UP(e))+1}function w1(t){const e=ft(t),n=+ka(e)-+LP(e);return Math.round(n/Dy)+1}function My(t,e){var d,c,f,_;const n=ft(t),r=n.getFullYear(),i=ol(),s=(e==null?void 0:e.firstWeekContainsDate)??((c=(d=e==null?void 0:e.locale)==null?void 0:d.options)==null?void 0:c.firstWeekContainsDate)??i.firstWeekContainsDate??((_=(f=i.locale)==null?void 0:f.options)==null?void 0:_.firstWeekContainsDate)??1,o=sr(t,0);o.setFullYear(r+1,0,s),o.setHours(0,0,0,0);const a=Ts(o,e),l=sr(t,0);l.setFullYear(r,0,s),l.setHours(0,0,0,0);const u=Ts(l,e);return n.getTime()>=a.getTime()?r+1:n.getTime()>=u.getTime()?r:r-1}function E1(t,e){var a,l,u,d;const n=ol(),r=(e==null?void 0:e.firstWeekContainsDate)??((l=(a=e==null?void 0:e.locale)==null?void 0:a.options)==null?void 0:l.firstWeekContainsDate)??n.firstWeekContainsDate??((d=(u=n.locale)==null?void 0:u.options)==null?void 0:d.firstWeekContainsDate)??1,i=My(t,e),s=sr(t,0);return s.setFullYear(i,0,r),s.setHours(0,0,0,0),Ts(s,e)}function S1(t,e){const n=ft(t),r=+Ts(n,e)-+E1(n,e);return Math.round(r/Dy)+1}function H(t,e){const n=t<0?"-":"",r=Math.abs(t).toString().padStart(e,"0");return n+r}const $t={y(t,e){const n=t.getFullYear(),r=n>0?n:1-n;return H(e==="yy"?r%100:r,e.length)},M(t,e){const n=t.getMonth();return e==="M"?String(n+1):H(n+1,2)},d(t,e){return H(t.getDate(),e.length)},a(t,e){const n=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return n==="am"?"a.m.":"p.m."}},h(t,e){return H(t.getHours()%12||12,e.length)},H(t,e){return H(t.getHours(),e.length)},m(t,e){return H(t.getMinutes(),e.length)},s(t,e){return H(t.getSeconds(),e.length)},S(t,e){const n=e.length,r=t.getMilliseconds(),i=Math.trunc(r*Math.pow(10,n-3));return H(i,e.length)}},fr={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},$p={G:function(t,e,n){const r=t.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if(e==="yo"){const r=t.getFullYear(),i=r>0?r:1-r;return n.ordinalNumber(i,{unit:"year"})}return $t.y(t,e)},Y:function(t,e,n,r){const i=My(t,r),s=i>0?i:1-i;if(e==="YY"){const o=s%100;return H(o,2)}return e==="Yo"?n.ordinalNumber(s,{unit:"year"}):H(s,e.length)},R:function(t,e){const n=by(t);return H(n,e.length)},u:function(t,e){const n=t.getFullYear();return H(n,e.length)},Q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return H(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){const r=Math.ceil((t.getMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return H(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){const r=t.getMonth();switch(e){case"M":case"MM":return $t.M(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){const r=t.getMonth();switch(e){case"L":return String(r+1);case"LL":return H(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){const i=S1(t,r);return e==="wo"?n.ordinalNumber(i,{unit:"week"}):H(i,e.length)},I:function(t,e,n){const r=w1(t);return e==="Io"?n.ordinalNumber(r,{unit:"week"}):H(r,e.length)},d:function(t,e,n){return e==="do"?n.ordinalNumber(t.getDate(),{unit:"date"}):$t.d(t,e)},D:function(t,e,n){const r=y1(t);return e==="Do"?n.ordinalNumber(r,{unit:"dayOfYear"}):H(r,e.length)},E:function(t,e,n){const r=t.getDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){const i=t.getDay(),s=(i-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(s);case"ee":return H(s,2);case"eo":return n.ordinalNumber(s,{unit:"day"});case"eee":return n.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(i,{width:"short",context:"formatting"});case"eeee":default:return n.day(i,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){const i=t.getDay(),s=(i-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(s);case"cc":return H(s,e.length);case"co":return n.ordinalNumber(s,{unit:"day"});case"ccc":return n.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(i,{width:"narrow",context:"standalone"});case"cccccc":return n.day(i,{width:"short",context:"standalone"});case"cccc":default:return n.day(i,{width:"wide",context:"standalone"})}},i:function(t,e,n){const r=t.getDay(),i=r===0?7:r;switch(e){case"i":return String(i);case"ii":return H(i,e.length);case"io":return n.ordinalNumber(i,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){const i=t.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,e,n){const r=t.getHours();let i;switch(r===12?i=fr.noon:r===0?i=fr.midnight:i=r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,e,n){const r=t.getHours();let i;switch(r>=17?i=fr.evening:r>=12?i=fr.afternoon:r>=4?i=fr.morning:i=fr.night,e){case"B":case"BB":case"BBB":return n.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,e,n){if(e==="ho"){let r=t.getHours()%12;return r===0&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return $t.h(t,e)},H:function(t,e,n){return e==="Ho"?n.ordinalNumber(t.getHours(),{unit:"hour"}):$t.H(t,e)},K:function(t,e,n){const r=t.getHours()%12;return e==="Ko"?n.ordinalNumber(r,{unit:"hour"}):H(r,e.length)},k:function(t,e,n){let r=t.getHours();return r===0&&(r=24),e==="ko"?n.ordinalNumber(r,{unit:"hour"}):H(r,e.length)},m:function(t,e,n){return e==="mo"?n.ordinalNumber(t.getMinutes(),{unit:"minute"}):$t.m(t,e)},s:function(t,e,n){return e==="so"?n.ordinalNumber(t.getSeconds(),{unit:"second"}):$t.s(t,e)},S:function(t,e){return $t.S(t,e)},X:function(t,e,n){const r=t.getTimezoneOffset();if(r===0)return"Z";switch(e){case"X":return qp(r);case"XXXX":case"XX":return Wn(r);case"XXXXX":case"XXX":default:return Wn(r,":")}},x:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"x":return qp(r);case"xxxx":case"xx":return Wn(r);case"xxxxx":case"xxx":default:return Wn(r,":")}},O:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Gp(r,":");case"OOOO":default:return"GMT"+Wn(r,":")}},z:function(t,e,n){const r=t.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Gp(r,":");case"zzzz":default:return"GMT"+Wn(r,":")}},t:function(t,e,n){const r=Math.trunc(t.getTime()/1e3);return H(r,e.length)},T:function(t,e,n){const r=t.getTime();return H(r,e.length)}};function Gp(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),i=Math.trunc(r/60),s=r%60;return s===0?n+String(i):n+String(i)+e+H(s,2)}function qp(t,e){return t%60===0?(t>0?"-":"+")+H(Math.abs(t)/60,2):Wn(t,e)}function Wn(t,e=""){const n=t>0?"-":"+",r=Math.abs(t),i=H(Math.trunc(r/60),2),s=H(r%60,2);return n+i+e+s}const Yp=(t,e)=>{switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Ly=(t,e)=>{switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},C1=(t,e)=>{const n=t.match(/(P+)(p+)?/)||[],r=n[1],i=n[2];if(!i)return Yp(t,e);let s;switch(r){case"P":s=e.dateTime({width:"short"});break;case"PP":s=e.dateTime({width:"medium"});break;case"PPP":s=e.dateTime({width:"long"});break;case"PPPP":default:s=e.dateTime({width:"full"});break}return s.replace("{{date}}",Yp(r,e)).replace("{{time}}",Ly(i,e))},I1={p:Ly,P:C1},k1=/^D+$/,T1=/^Y+$/,x1=["D","DD","YY","YYYY"];function N1(t){return k1.test(t)}function P1(t){return T1.test(t)}function R1(t,e,n){const r=A1(t,e,n);if(console.warn(r),x1.includes(t))throw new RangeError(r)}function A1(t,e,n){const r=t[0]==="Y"?"years":"days of the month";return`Use \`${t.toLowerCase()}\` instead of \`${t}\` (in \`${e}\`) for formatting ${r} to the input \`${n}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const O1=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,D1=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,b1=/^'([^]*?)'?$/,M1=/''/g,L1=/[a-zA-Z]/;function He(t,e,n){var d,c,f,_;const r=ol(),i=r.locale??v1,s=r.firstWeekContainsDate??((c=(d=r.locale)==null?void 0:d.options)==null?void 0:c.firstWeekContainsDate)??1,o=r.weekStartsOn??((_=(f=r.locale)==null?void 0:f.options)==null?void 0:_.weekStartsOn)??0,a=ft(t);if(!FP(a))throw new RangeError("Invalid time value");let l=e.match(D1).map(v=>{const y=v[0];if(y==="p"||y==="P"){const w=I1[y];return w(v,i.formatLong)}return v}).join("").match(O1).map(v=>{if(v==="''")return{isToken:!1,value:"'"};const y=v[0];if(y==="'")return{isToken:!1,value:j1(v)};if($p[y])return{isToken:!0,value:v};if(y.match(L1))throw new RangeError("Format string contains an unescaped latin alphabet character `"+y+"`");return{isToken:!1,value:v}});i.localize.preprocessor&&(l=i.localize.preprocessor(a,l));const u={firstWeekContainsDate:s,weekStartsOn:o,locale:i};return l.map(v=>{if(!v.isToken)return v.value;const y=v.value;(P1(y)||N1(y))&&R1(y,e,String(t));const w=$p[y[0]];return w(a,y,i.localize,u)}).join("")}function j1(t){const e=t.match(b1);return e?e[1].replace(M1,"'"):t}function F1(){const{user:t}=cr(),{userAttendance:e,loading:n,dataLoaded:r,refreshData:i}=dh(),[s,o]=S.useState({present:0,absent:0,halfDay:0,total:0});S.useEffect(()=>{if(e.length>0){let l=0,u=0,d=0;e.forEach(c=>{c.status==="Present"?l++:c.status==="Absent"?u++:c.status==="Half Day"&&d++}),o({present:l,absent:u,halfDay:d,total:e.length})}},[e]);const a=l=>({Present:"badge-success",Absent:"badge-danger","Half Day":"badge-warning",Leave:"badge-info"})[l]||"badge-secondary";return n&&!r?h.jsx("div",{className:"dashboard-page",children:h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"dashboard-header",children:[h.jsxs("h1",{children:["Welcome, ",t.name,"!"]}),h.jsxs("p",{children:["Employee ID: ",t.employeeId]})]}),h.jsxs("div",{className:"stats-grid",children:[h.jsxs("div",{className:"stat-card stat-total",children:[h.jsx("div",{className:"stat-icon",children:"📊"}),h.jsxs("div",{className:"stat-content",children:[h.jsx("h3",{children:"..."}),h.jsx("p",{children:"Total Days"})]})]}),h.jsxs("div",{className:"stat-card stat-present",children:[h.jsx("div",{className:"stat-icon",children:"✅"}),h.jsxs("div",{className:"stat-content",children:[h.jsx("h3",{children:"..."}),h.jsx("p",{children:"Present"})]})]}),h.jsxs("div",{className:"stat-card stat-halfday",children:[h.jsx("div",{className:"stat-icon",children:"⏰"}),h.jsxs("div",{className:"stat-content",children:[h.jsx("h3",{children:"..."}),h.jsx("p",{children:"Half Day"})]})]}),h.jsxs("div",{className:"stat-card stat-absent",children:[h.jsx("div",{className:"stat-icon",children:"❌"}),h.jsxs("div",{className:"stat-content",children:[h.jsx("h3",{children:"..."}),h.jsx("p",{children:"Absent"})]})]})]}),h.jsxs("div",{className:"card",children:[h.jsx("h2",{children:"Attendance History"}),h.jsx("div",{style:{textAlign:"center",padding:"40px",color:"#666"},children:h.jsx("p",{children:"Loading your attendance records..."})})]})]})}):h.jsx("div",{className:"dashboard-page",children:h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"dashboard-header",children:[h.jsxs("h1",{children:["Welcome, ",t.name,"!"]}),h.jsxs("p",{children:["Employee ID: ",t.employeeId]})]}),h.jsxs("div",{className:"stats-grid",children:[h.jsxs("div",{className:"stat-card stat-total",children:[h.jsx("div",{className:"stat-icon",children:"📊"}),h.jsxs("div",{className:"stat-content",children:[h.jsx("h3",{children:s.total}),h.jsx("p",{children:"Total Days"})]})]}),h.jsxs("div",{className:"stat-card stat-present",children:[h.jsx("div",{className:"stat-icon",children:"✅"}),h.jsxs("div",{className:"stat-content",children:[h.jsx("h3",{children:s.present}),h.jsx("p",{children:"Present"})]})]}),h.jsxs("div",{className:"stat-card stat-halfday",children:[h.jsx("div",{className:"stat-icon",children:"⏰"}),h.jsxs("div",{className:"stat-content",children:[h.jsx("h3",{children:s.halfDay}),h.jsx("p",{children:"Half Day"})]})]}),h.jsxs("div",{className:"stat-card stat-absent",children:[h.jsx("div",{className:"stat-icon",children:"❌"}),h.jsxs("div",{className:"stat-content",children:[h.jsx("h3",{children:s.absent}),h.jsx("p",{children:"Absent"})]})]})]}),h.jsxs("div",{className:"card",children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px"},children:[h.jsx("h2",{children:"Your Attendance History"}),h.jsx("button",{onClick:i,className:"btn btn-secondary",disabled:n,children:n?"Refreshing...":"🔄 Refresh"})]}),e.length===0?h.jsx("div",{className:"empty-state",children:h.jsx("p",{children:"No attendance records found"})}):h.jsx("div",{className:"table-responsive",children:h.jsxs("table",{className:"table",children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Date"}),h.jsx("th",{children:"Month"}),h.jsx("th",{children:"Status"}),h.jsx("th",{children:"Remarks"}),h.jsx("th",{children:"Submitted On"})]})}),h.jsx("tbody",{children:e.map(l=>h.jsxs("tr",{children:[h.jsx("td",{children:He(new Date(l.date),"dd MMM yyyy")}),h.jsx("td",{children:He(new Date(l.date),"MMMM yyyy")}),h.jsx("td",{children:h.jsx("span",{className:`badge ${a(l.status)}`,children:l.status})}),h.jsx("td",{children:l.remarks||"-"}),h.jsx("td",{children:He(new Date(l.submittedAt),"dd MMM yyyy HH:mm")})]},l.id))})]})})]})]})})}function U1(){const{user:t}=cr(),{userAttendance:e,refreshData:n,loading:r}=dh(),[i,s]=S.useState(""),[o,a]=S.useState(""),[l,u]=S.useState(""),[d,c]=S.useState(null),[f,_]=S.useState(!1),[v,y]=S.useState({type:"",text:""}),[w,m]=S.useState([]),p=e,g=x=>{const O=x.target.files[0];if(O){const he=new FileReader;he.onloadend=()=>{c({name:O.name,type:O.type,data:he.result})},he.readAsDataURL(O)}},E=x=>{if(x.preventDefault(),!i||!o){y({type:"error",text:"Please fill in Type and Date"});return}const O={id:Date.now(),type:i,date:o,description:l||"",attachment:d};m([...w,O]),s(""),a(""),u(""),c(null),document.getElementById("file-input")&&(document.getElementById("file-input").value=""),y({type:"success",text:"Leave added! Click Submit All to save."})},k=x=>{m(w.filter(O=>O.id!==x))},T=async()=>{if(console.log("🔵 handleSubmitAll called!"),console.log("🔵 User:",t),console.log("🔵 Pending leaves:",w),w.length===0){y({type:"error",text:"No leaves to submit"});return}_(!0),y({type:"",text:""});try{console.log("🔵 Starting submission to Realtime Database...");const x=Ca(Ia,"attendance");for(const O of w){const he=new Date(O.date),On=He(he,"MMMM yyyy"),Dn={employeeId:t.uid,employeeName:t.name,employeeEmail:t.email,date:he.toISOString(),status:O.type,remarks:O.description||"",attachment:O.attachment||null,submittedAt:new Date().toISOString(),month:On};console.log("🔵 Submitting leave:",O.type,"for",O.date);const hi=lP(x);await Ny(hi,Dn),console.log("✅ Submitted successfully! ID:",hi.key)}console.log("✅ All leaves submitted!"),y({type:"success",text:`Successfully submitted ${w.length} leave(s)!`}),m([]),await n()}catch(x){console.error("❌ Submission Error:",x),console.error("❌ Error code:",x.code),console.error("❌ Error message:",x.message),y({type:"error",text:`Submission failed: ${x.message}`})}finally{_(!1)}},P=async x=>{if(window.confirm("Are you sure you want to delete this record?"))try{const O=Ca(Ia,`attendance/${x}`);await uP(O),y({type:"success",text:"Record deleted successfully!"}),await n()}catch(O){console.error("Error deleting:",O),y({type:"error",text:"Failed to delete record."})}},N=x=>({"Casual Leave":"badge-info","Sick Leave":"badge-warning","Half Day":"badge-warning"})[x]||"badge-secondary";return h.jsx("div",{className:"attendance-form-page",children:h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"card",children:[h.jsx("h1",{children:"Mark Attendance"}),h.jsx("p",{className:"subtitle",children:"Add leave/absence records. All unmarked working days are considered Present."}),v.text&&h.jsx("div",{className:`alert alert-${v.type}`,children:v.text}),h.jsxs("form",{onSubmit:E,className:"leave-form",children:[h.jsxs("div",{className:"form-inline",children:[h.jsxs("div",{className:"form-group-inline",children:[h.jsxs("label",{children:["Type ",h.jsx("span",{className:"required",children:"*"})]}),h.jsxs("select",{value:i,onChange:x=>s(x.target.value),required:!0,children:[h.jsx("option",{value:"",children:"Select"}),h.jsx("option",{value:"Casual Leave",children:"Casual Leave"}),h.jsx("option",{value:"Sick Leave",children:"Sick Leave"}),h.jsx("option",{value:"Half Day",children:"Half Day"})]})]}),h.jsxs("div",{className:"form-group-inline",children:[h.jsxs("label",{children:["Date ",h.jsx("span",{className:"required",children:"*"})]}),h.jsx("input",{type:"date",value:o,onChange:x=>a(x.target.value),max:He(new Date,"yyyy-MM-dd"),required:!0})]}),h.jsxs("div",{className:"form-group-inline",children:[h.jsx("label",{children:"Description"}),h.jsx("input",{type:"text",value:l,onChange:x=>u(x.target.value),placeholder:"Reason (optional)"})]}),h.jsxs("div",{className:"form-group-inline",children:[h.jsx("label",{children:"Attachment"}),h.jsx("input",{id:"file-input",type:"file",onChange:g,accept:".pdf,.jpg,.jpeg,.png,.doc,.docx",className:"file-input-compact"})]}),h.jsx("button",{type:"submit",className:"btn btn-primary btn-inline",children:"+ Add Leave"})]}),d&&h.jsxs("div",{className:"file-preview-compact",children:["📎 ",d.name,h.jsx("button",{type:"button",onClick:()=>{c(null),document.getElementById("file-input").value=""},className:"btn-remove-file",children:"✕"})]})]}),w.length>0&&h.jsxs("div",{className:"simple-card",style:{marginTop:"30px"},children:[h.jsxs("h3",{children:["Pending Leaves (",w.length,")"]}),h.jsx("div",{className:"table-responsive",children:h.jsxs("table",{className:"table",children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Date"}),h.jsx("th",{children:"Type"}),h.jsx("th",{children:"Description"}),h.jsx("th",{children:"Attachment"}),h.jsx("th",{children:"Action"})]})}),h.jsx("tbody",{children:w.map(x=>h.jsxs("tr",{children:[h.jsx("td",{children:He(new Date(x.date),"dd MMM yyyy")}),h.jsx("td",{children:h.jsx("span",{className:`badge ${N(x.type)}`,children:x.type})}),h.jsx("td",{children:x.description||"-"}),h.jsx("td",{children:x.attachment?`📎 ${x.attachment.name}`:"-"}),h.jsx("td",{children:h.jsx("button",{onClick:()=>k(x.id),className:"btn-delete",title:"Remove",children:"✕"})})]},x.id))})]})}),h.jsx("div",{style:{textAlign:"center",marginTop:"20px"},children:h.jsx("button",{onClick:T,className:"btn btn-primary",disabled:f,style:{minWidth:"200px"},children:f?"Submitting...":`Submit All (${w.length})`})})]})]}),p.length>0?h.jsxs("div",{className:"simple-card",children:[h.jsx("h2",{children:"Submitted Leave Records"}),h.jsx("div",{className:"table-responsive",children:h.jsxs("table",{className:"table",children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Date"}),h.jsx("th",{children:"Type"}),h.jsx("th",{children:"Description"}),h.jsx("th",{children:"Attachment"}),h.jsx("th",{children:"Submitted"}),h.jsx("th",{children:"Action"})]})}),h.jsx("tbody",{children:p.map(x=>h.jsxs("tr",{children:[h.jsx("td",{children:He(new Date(x.date),"dd MMM yyyy")}),h.jsx("td",{children:h.jsx("span",{className:`badge ${N(x.status)}`,children:x.status})}),h.jsx("td",{children:x.remarks||"-"}),h.jsx("td",{children:x.attachment?h.jsxs("a",{href:x.attachment.data,download:x.attachment.name,className:"attachment-link",children:["📎 ",x.attachment.name]}):"-"}),h.jsx("td",{children:He(new Date(x.submittedAt),"dd MMM yyyy")}),h.jsx("td",{children:h.jsx("button",{onClick:()=>P(x.id),className:"btn-delete",title:"Delete",children:"🗑️"})})]},x.id))})]})}),h.jsx("div",{style:{textAlign:"center",marginTop:"20px"},children:h.jsx("button",{onClick:n,className:"btn btn-secondary",disabled:f||r,children:f||r?"Refreshing...":"🔄 Refresh Records"})})]}):h.jsxs("div",{className:"simple-card",children:[h.jsx("h2",{children:"Submitted Leave Records"}),h.jsxs("div",{className:"empty-state",children:[h.jsx("p",{children:f?"Loading your records...":"No records found"}),!f&&!r&&h.jsx("button",{onClick:n,className:"btn btn-secondary",style:{marginTop:"10px"},children:"🔄 Refresh"})]})]})]})})}function W1(){const{allAttendance:t,employees:e,loading:n,dataLoaded:r,refreshData:i}=dh(),[s,o]=S.useState([]),[a,l]=S.useState("all"),[u,d]=S.useState(He(new Date,"MMMM yyyy")),[c,f]=S.useState({totalEmployees:0,totalRecords:0,presentCount:0,absentCount:0});S.useEffect(()=>{if(t.length>0){let w=[...t];a!=="all"&&(w=w.filter(g=>g.employeeId===a)),u!=="all"&&(w=w.filter(g=>g.month===u));let m=0,p=0;w.forEach(g=>{g.status==="Present"?m++:g.status==="Absent"&&p++}),o(w),f({totalEmployees:e.length,totalRecords:w.length,presentCount:m,absentCount:p})}},[t,e,a,u]);const _=()=>{const w=["Employee Name","Employee ID","Date","Month","Status","Remarks","Submitted At"],m=s.map(T=>[T.employeeName,T.employeeEmail,He(new Date(T.date),"dd/MM/yyyy"),T.month,T.status,T.remarks||"-",He(new Date(T.submittedAt),"dd/MM/yyyy HH:mm")]),p=[w.join(","),...m.map(T=>T.map(P=>`"${P}"`).join(","))].join(`
`),g=new Blob([p],{type:"text/csv"}),E=window.URL.createObjectURL(g),k=document.createElement("a");k.href=E,k.download=`attendance_${u}_${new Date().getTime()}.csv`,k.click()},v=w=>({Present:"badge-success",Absent:"badge-danger","Half Day":"badge-warning",Leave:"badge-info"})[w]||"badge-secondary",y=[...new Set(t.map(w=>w.month))];return n&&!r?h.jsx("div",{className:"admin-panel-page",children:h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"admin-header",children:[h.jsx("h1",{children:"Admin Panel"}),h.jsx("p",{children:"Manage and view all employee attendance records"})]}),h.jsxs("div",{className:"stats-grid",children:[h.jsxs("div",{className:"stat-card",children:[h.jsx("div",{className:"stat-icon",children:"👥"}),h.jsxs("div",{className:"stat-content",children:[h.jsx("h3",{children:"..."}),h.jsx("p",{children:"Total Employees"})]})]}),h.jsxs("div",{className:"stat-card",children:[h.jsx("div",{className:"stat-icon",children:"📊"}),h.jsxs("div",{className:"stat-content",children:[h.jsx("h3",{children:"..."}),h.jsx("p",{children:"Total Records"})]})]}),h.jsxs("div",{className:"stat-card",children:[h.jsx("div",{className:"stat-icon",children:"✅"}),h.jsxs("div",{className:"stat-content",children:[h.jsx("h3",{children:"..."}),h.jsx("p",{children:"Present"})]})]}),h.jsxs("div",{className:"stat-card",children:[h.jsx("div",{className:"stat-icon",children:"❌"}),h.jsxs("div",{className:"stat-content",children:[h.jsx("h3",{children:"..."}),h.jsx("p",{children:"Absent"})]})]})]}),h.jsxs("div",{className:"card",children:[h.jsx("h2",{children:"Attendance Records"}),h.jsx("div",{style:{textAlign:"center",padding:"40px",color:"#666"},children:h.jsx("p",{children:"Loading attendance data..."})})]})]})}):h.jsx("div",{className:"admin-panel-page",children:h.jsxs("div",{className:"container",children:[h.jsxs("div",{className:"admin-header",children:[h.jsx("h1",{children:"Admin Panel"}),h.jsx("p",{children:"Manage and view all employee attendance records"})]}),h.jsxs("div",{className:"stats-grid",children:[h.jsxs("div",{className:"stat-card",children:[h.jsx("div",{className:"stat-icon",children:"👥"}),h.jsxs("div",{className:"stat-content",children:[h.jsx("h3",{children:c.totalEmployees}),h.jsx("p",{children:"Total Employees"})]})]}),h.jsxs("div",{className:"stat-card",children:[h.jsx("div",{className:"stat-icon",children:"📊"}),h.jsxs("div",{className:"stat-content",children:[h.jsx("h3",{children:c.totalRecords}),h.jsx("p",{children:"Total Records"})]})]}),h.jsxs("div",{className:"stat-card",children:[h.jsx("div",{className:"stat-icon",children:"✅"}),h.jsxs("div",{className:"stat-content",children:[h.jsx("h3",{children:c.presentCount}),h.jsx("p",{children:"Present Days"})]})]}),h.jsxs("div",{className:"stat-card",children:[h.jsx("div",{className:"stat-icon",children:"❌"}),h.jsxs("div",{className:"stat-content",children:[h.jsx("h3",{children:c.absentCount}),h.jsx("p",{children:"Absent Days"})]})]})]}),h.jsxs("div",{className:"card",children:[h.jsxs("div",{className:"filters-section",children:[h.jsxs("div",{className:"filter-group",children:[h.jsx("label",{children:"Filter by Employee:"}),h.jsxs("select",{value:a,onChange:w=>{l(w.target.value)},children:[h.jsx("option",{value:"all",children:"All Employees"}),e.map(w=>h.jsxs("option",{value:w.id,children:[w.name," (",w.employeeId,")"]},w.id))]})]}),h.jsxs("div",{className:"filter-group",children:[h.jsx("label",{children:"Filter by Month:"}),h.jsxs("select",{value:u,onChange:w=>{d(w.target.value)},children:[h.jsx("option",{value:"all",children:"All Months"}),y.map(w=>h.jsx("option",{value:w,children:w},w))]})]}),h.jsx("button",{onClick:i,className:"btn btn-secondary",disabled:n,children:n?"Refreshing...":"🔄 Refresh Data"}),h.jsx("button",{onClick:_,className:"btn btn-primary",children:"📥 Export to CSV"})]}),n?h.jsx("div",{className:"loading",children:"Loading attendance records..."}):s.length===0?h.jsx("div",{className:"empty-state",children:h.jsx("p",{children:"No attendance records found"})}):h.jsx("div",{className:"table-responsive",children:h.jsxs("table",{className:"table",children:[h.jsx("thead",{children:h.jsxs("tr",{children:[h.jsx("th",{children:"Employee Name"}),h.jsx("th",{children:"Employee ID"}),h.jsx("th",{children:"Date"}),h.jsx("th",{children:"Month"}),h.jsx("th",{children:"Status"}),h.jsx("th",{children:"Remarks"}),h.jsx("th",{children:"Submitted At"})]})}),h.jsx("tbody",{children:s.map(w=>h.jsxs("tr",{children:[h.jsx("td",{children:w.employeeName}),h.jsx("td",{children:w.employeeEmail}),h.jsx("td",{children:He(new Date(w.date),"dd MMM yyyy")}),h.jsx("td",{children:w.month}),h.jsx("td",{children:h.jsx("span",{className:`badge ${v(w.status)}`,children:w.status})}),h.jsx("td",{children:w.remarks||"-"}),h.jsx("td",{children:He(new Date(w.submittedAt),"dd MMM yyyy HH:mm")})]},w.id))})]})})]})]})})}function eu({children:t,adminOnly:e=!1}){const{user:n,loading:r}=cr();return r?h.jsx("div",{className:"loading",children:"Loading..."}):n?e&&!n.isAdmin?h.jsx(Ku,{to:"/dashboard"}):t:h.jsx(Ku,{to:"/login"})}function z1(){const{user:t,loading:e}=cr();return e?h.jsx("div",{className:"loading",children:"Loading..."}):h.jsxs("div",{className:"App",children:[t&&h.jsx(RP,{}),h.jsxs(sS,{children:[h.jsx(pr,{path:"/login",element:h.jsx(AP,{})}),h.jsx(pr,{path:"/dashboard",element:h.jsx(eu,{children:h.jsx(F1,{})})}),h.jsx(pr,{path:"/attendance",element:h.jsx(eu,{children:h.jsx(U1,{})})}),h.jsx(pr,{path:"/admin",element:h.jsx(eu,{adminOnly:!0,children:h.jsx(W1,{})})}),h.jsx(pr,{path:"/",element:h.jsx(Ku,{to:"/dashboard"})})]})]})}function B1(){return h.jsx(NP,{children:h.jsx(OP,{children:h.jsx(hS,{basename:"/attendance-portal",children:h.jsx(z1,{})})})})}tu.createRoot(document.getElementById("root")).render(h.jsx(B1,{}));
