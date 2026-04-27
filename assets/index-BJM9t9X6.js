function Qc(e,n){for(var i=0;i<n.length;i++){const t=n[i];if(typeof t!="string"&&!Array.isArray(t)){for(const s in t)if(s!=="default"&&!(s in e)){const l=Object.getOwnPropertyDescriptor(t,s);l&&Object.defineProperty(e,s,l.get?l:{enumerable:!0,get:()=>t[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function i(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(s){if(s.ep)return;s.ep=!0;const l=i(s);fetch(s.href,l)}})();function Yc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ka={exports:{}},ys={},ba={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ot=Symbol.for("react.element"),Kc=Symbol.for("react.portal"),Jc=Symbol.for("react.fragment"),Xc=Symbol.for("react.strict_mode"),qc=Symbol.for("react.profiler"),Zc=Symbol.for("react.provider"),eu=Symbol.for("react.context"),nu=Symbol.for("react.forward_ref"),iu=Symbol.for("react.suspense"),tu=Symbol.for("react.memo"),su=Symbol.for("react.lazy"),no=Symbol.iterator;function lu(e){return e===null||typeof e!="object"?null:(e=no&&e[no]||e["@@iterator"],typeof e=="function"?e:null)}var xa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ta=Object.assign,Ia={};function yi(e,n,i){this.props=e,this.context=n,this.refs=Ia,this.updater=i||xa}yi.prototype.isReactComponent={};yi.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};yi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sa(){}Sa.prototype=yi.prototype;function lr(e,n,i){this.props=e,this.context=n,this.refs=Ia,this.updater=i||xa}var rr=lr.prototype=new Sa;rr.constructor=lr;Ta(rr,yi.prototype);rr.isPureReactComponent=!0;var io=Array.isArray,Ca=Object.prototype.hasOwnProperty,or={current:null},ja={key:!0,ref:!0,__self:!0,__source:!0};function Ea(e,n,i){var t,s={},l=null,r=null;if(n!=null)for(t in n.ref!==void 0&&(r=n.ref),n.key!==void 0&&(l=""+n.key),n)Ca.call(n,t)&&!ja.hasOwnProperty(t)&&(s[t]=n[t]);var o=arguments.length-2;if(o===1)s.children=i;else if(1<o){for(var a=Array(o),h=0;h<o;h++)a[h]=arguments[h+2];s.children=a}if(e&&e.defaultProps)for(t in o=e.defaultProps,o)s[t]===void 0&&(s[t]=o[t]);return{$$typeof:ot,type:e,key:l,ref:r,props:s,_owner:or.current}}function ru(e,n){return{$$typeof:ot,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ar(e){return typeof e=="object"&&e!==null&&e.$$typeof===ot}function ou(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(i){return n[i]})}var to=/\/+/g;function Fs(e,n){return typeof e=="object"&&e!==null&&e.key!=null?ou(""+e.key):n.toString(36)}function Wt(e,n,i,t,s){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(l){case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case ot:case Kc:r=!0}}if(r)return r=e,s=s(r),e=t===""?"."+Fs(r,0):t,io(s)?(i="",e!=null&&(i=e.replace(to,"$&/")+"/"),Wt(s,n,i,"",function(h){return h})):s!=null&&(ar(s)&&(s=ru(s,i+(!s.key||r&&r.key===s.key?"":(""+s.key).replace(to,"$&/")+"/")+e)),n.push(s)),1;if(r=0,t=t===""?".":t+":",io(e))for(var o=0;o<e.length;o++){l=e[o];var a=t+Fs(l,o);r+=Wt(l,n,i,a,s)}else if(a=lu(e),typeof a=="function")for(e=a.call(e),o=0;!(l=e.next()).done;)l=l.value,a=t+Fs(l,o++),r+=Wt(l,n,i,a,s);else if(l==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return r}function ft(e,n,i){if(e==null)return e;var t=[],s=0;return Wt(e,t,"","",function(l){return n.call(i,l,s++)}),t}function au(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(i){(e._status===0||e._status===-1)&&(e._status=1,e._result=i)},function(i){(e._status===0||e._status===-1)&&(e._status=2,e._result=i)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},_t={transition:null},hu={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:_t,ReactCurrentOwner:or};function Ma(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:ft,forEach:function(e,n,i){ft(e,function(){n.apply(this,arguments)},i)},count:function(e){var n=0;return ft(e,function(){n++}),n},toArray:function(e){return ft(e,function(n){return n})||[]},only:function(e){if(!ar(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};F.Component=yi;F.Fragment=Jc;F.Profiler=qc;F.PureComponent=lr;F.StrictMode=Xc;F.Suspense=iu;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hu;F.act=Ma;F.cloneElement=function(e,n,i){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var t=Ta({},e.props),s=e.key,l=e.ref,r=e._owner;if(n!=null){if(n.ref!==void 0&&(l=n.ref,r=or.current),n.key!==void 0&&(s=""+n.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(a in n)Ca.call(n,a)&&!ja.hasOwnProperty(a)&&(t[a]=n[a]===void 0&&o!==void 0?o[a]:n[a])}var a=arguments.length-2;if(a===1)t.children=i;else if(1<a){o=Array(a);for(var h=0;h<a;h++)o[h]=arguments[h+2];t.children=o}return{$$typeof:ot,type:e.type,key:s,ref:l,props:t,_owner:r}};F.createContext=function(e){return e={$$typeof:eu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Zc,_context:e},e.Consumer=e};F.createElement=Ea;F.createFactory=function(e){var n=Ea.bind(null,e);return n.type=e,n};F.createRef=function(){return{current:null}};F.forwardRef=function(e){return{$$typeof:nu,render:e}};F.isValidElement=ar;F.lazy=function(e){return{$$typeof:su,_payload:{_status:-1,_result:e},_init:au}};F.memo=function(e,n){return{$$typeof:tu,type:e,compare:n===void 0?null:n}};F.startTransition=function(e){var n=_t.transition;_t.transition={};try{e()}finally{_t.transition=n}};F.unstable_act=Ma;F.useCallback=function(e,n){return de.current.useCallback(e,n)};F.useContext=function(e){return de.current.useContext(e)};F.useDebugValue=function(){};F.useDeferredValue=function(e){return de.current.useDeferredValue(e)};F.useEffect=function(e,n){return de.current.useEffect(e,n)};F.useId=function(){return de.current.useId()};F.useImperativeHandle=function(e,n,i){return de.current.useImperativeHandle(e,n,i)};F.useInsertionEffect=function(e,n){return de.current.useInsertionEffect(e,n)};F.useLayoutEffect=function(e,n){return de.current.useLayoutEffect(e,n)};F.useMemo=function(e,n){return de.current.useMemo(e,n)};F.useReducer=function(e,n,i){return de.current.useReducer(e,n,i)};F.useRef=function(e){return de.current.useRef(e)};F.useState=function(e){return de.current.useState(e)};F.useSyncExternalStore=function(e,n,i){return de.current.useSyncExternalStore(e,n,i)};F.useTransition=function(){return de.current.useTransition()};F.version="18.3.1";ba.exports=F;var T=ba.exports;const za=Yc(T),cu=Qc({__proto__:null,default:za},[T]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uu=T,pu=Symbol.for("react.element"),du=Symbol.for("react.fragment"),gu=Object.prototype.hasOwnProperty,mu=uu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fu={key:!0,ref:!0,__self:!0,__source:!0};function Na(e,n,i){var t,s={},l=null,r=null;i!==void 0&&(l=""+i),n.key!==void 0&&(l=""+n.key),n.ref!==void 0&&(r=n.ref);for(t in n)gu.call(n,t)&&!fu.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps,n)s[t]===void 0&&(s[t]=n[t]);return{$$typeof:pu,type:e,key:l,ref:r,props:s,_owner:mu.current}}ys.Fragment=du;ys.jsx=Na;ys.jsxs=Na;ka.exports=ys;var f=ka.exports,cl={},Pa={exports:{}},Se={},Wa={exports:{}},_a={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(x,P){var L=x.length;x.push(P);e:for(;0<L;){var K=L-1>>>1,ne=x[K];if(0<s(ne,P))x[K]=P,x[L]=ne,L=K;else break e}}function i(x){return x.length===0?null:x[0]}function t(x){if(x.length===0)return null;var P=x[0],L=x.pop();if(L!==P){x[0]=L;e:for(var K=0,ne=x.length,gt=ne>>>1;K<gt;){var jn=2*(K+1)-1,As=x[jn],En=jn+1,mt=x[En];if(0>s(As,L))En<ne&&0>s(mt,As)?(x[K]=mt,x[En]=L,K=En):(x[K]=As,x[jn]=L,K=jn);else if(En<ne&&0>s(mt,L))x[K]=mt,x[En]=L,K=En;else break e}}return P}function s(x,P){var L=x.sortIndex-P.sortIndex;return L!==0?L:x.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var r=Date,o=r.now();e.unstable_now=function(){return r.now()-o}}var a=[],h=[],g=1,p=null,m=3,w=!1,k=!1,v=!1,I=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(x){for(var P=i(h);P!==null;){if(P.callback===null)t(h);else if(P.startTime<=x)t(h),P.sortIndex=P.expirationTime,n(a,P);else break;P=i(h)}}function y(x){if(v=!1,d(x),!k)if(i(a)!==null)k=!0,M(S);else{var P=i(h);P!==null&&_(y,P.startTime-x)}}function S(x,P){k=!1,v&&(v=!1,u(z),z=-1),w=!0;var L=m;try{for(d(P),p=i(a);p!==null&&(!(p.expirationTime>P)||x&&!ke());){var K=p.callback;if(typeof K=="function"){p.callback=null,m=p.priorityLevel;var ne=K(p.expirationTime<=P);P=e.unstable_now(),typeof ne=="function"?p.callback=ne:p===i(a)&&t(a),d(P)}else t(a);p=i(a)}if(p!==null)var gt=!0;else{var jn=i(h);jn!==null&&_(y,jn.startTime-P),gt=!1}return gt}finally{p=null,m=L,w=!1}}var j=!1,E=null,z=-1,V=5,A=-1;function ke(){return!(e.unstable_now()-A<V)}function Sn(){if(E!==null){var x=e.unstable_now();A=x;var P=!0;try{P=E(!0,x)}finally{P?Cn():(j=!1,E=null)}}else j=!1}var Cn;if(typeof c=="function")Cn=function(){c(Sn)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,W=N.port2;N.port1.onmessage=Sn,Cn=function(){W.postMessage(null)}}else Cn=function(){I(Sn,0)};function M(x){E=x,j||(j=!0,Cn())}function _(x,P){z=I(function(){x(e.unstable_now())},P)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(x){x.callback=null},e.unstable_continueExecution=function(){k||w||(k=!0,M(S))},e.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<x?Math.floor(1e3/x):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return i(a)},e.unstable_next=function(x){switch(m){case 1:case 2:case 3:var P=3;break;default:P=m}var L=m;m=P;try{return x()}finally{m=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(x,P){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var L=m;m=x;try{return P()}finally{m=L}},e.unstable_scheduleCallback=function(x,P,L){var K=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?K+L:K):L=K,x){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=L+ne,x={id:g++,callback:P,priorityLevel:x,startTime:L,expirationTime:ne,sortIndex:-1},L>K?(x.sortIndex=L,n(h,x),i(a)===null&&x===i(h)&&(v?(u(z),z=-1):v=!0,_(y,L-K))):(x.sortIndex=ne,n(a,x),k||w||(k=!0,M(S))),x},e.unstable_shouldYield=ke,e.unstable_wrapCallback=function(x){var P=m;return function(){var L=m;m=P;try{return x.apply(this,arguments)}finally{m=L}}}})(_a);Wa.exports=_a;var yu=Wa.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vu=T,Ie=yu;function b(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var La=new Set,Hi={};function Hn(e,n){ci(e,n),ci(e+"Capture",n)}function ci(e,n){for(Hi[e]=n,e=0;e<n.length;e++)La.add(n[e])}var Je=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ul=Object.prototype.hasOwnProperty,wu=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,so={},lo={};function ku(e){return ul.call(lo,e)?!0:ul.call(so,e)?!1:wu.test(e)?lo[e]=!0:(so[e]=!0,!1)}function bu(e,n,i,t){if(i!==null&&i.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return t?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function xu(e,n,i,t){if(n===null||typeof n>"u"||bu(e,n,i,t))return!0;if(t)return!1;if(i!==null)switch(i.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ge(e,n,i,t,s,l,r){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=t,this.attributeNamespace=s,this.mustUseProperty=i,this.propertyName=e,this.type=n,this.sanitizeURL=l,this.removeEmptyString=r}var re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){re[e]=new ge(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];re[n]=new ge(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){re[e]=new ge(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){re[e]=new ge(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){re[e]=new ge(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){re[e]=new ge(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){re[e]=new ge(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){re[e]=new ge(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){re[e]=new ge(e,5,!1,e.toLowerCase(),null,!1,!1)});var hr=/[\-:]([a-z])/g;function cr(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(hr,cr);re[n]=new ge(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(hr,cr);re[n]=new ge(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(hr,cr);re[n]=new ge(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){re[e]=new ge(e,1,!1,e.toLowerCase(),null,!1,!1)});re.xlinkHref=new ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){re[e]=new ge(e,1,!1,e.toLowerCase(),null,!0,!0)});function ur(e,n,i,t){var s=re.hasOwnProperty(n)?re[n]:null;(s!==null?s.type!==0:t||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(xu(n,i,s,t)&&(i=null),t||s===null?ku(n)&&(i===null?e.removeAttribute(n):e.setAttribute(n,""+i)):s.mustUseProperty?e[s.propertyName]=i===null?s.type===3?!1:"":i:(n=s.attributeName,t=s.attributeNamespace,i===null?e.removeAttribute(n):(s=s.type,i=s===3||s===4&&i===!0?"":""+i,t?e.setAttributeNS(t,n,i):e.setAttribute(n,i))))}var en=vu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yt=Symbol.for("react.element"),Gn=Symbol.for("react.portal"),Qn=Symbol.for("react.fragment"),pr=Symbol.for("react.strict_mode"),pl=Symbol.for("react.profiler"),Aa=Symbol.for("react.provider"),Fa=Symbol.for("react.context"),dr=Symbol.for("react.forward_ref"),dl=Symbol.for("react.suspense"),gl=Symbol.for("react.suspense_list"),gr=Symbol.for("react.memo"),tn=Symbol.for("react.lazy"),Da=Symbol.for("react.offscreen"),ro=Symbol.iterator;function bi(e){return e===null||typeof e!="object"?null:(e=ro&&e[ro]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Ds;function Mi(e){if(Ds===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);Ds=n&&n[1]||""}return`
`+Ds+e}var Os=!1;function Rs(e,n){if(!e||Os)return"";Os=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(h){var t=h}Reflect.construct(e,[],n)}else{try{n.call()}catch(h){t=h}e.call(n.prototype)}else{try{throw Error()}catch(h){t=h}e()}}catch(h){if(h&&t&&typeof h.stack=="string"){for(var s=h.stack.split(`
`),l=t.stack.split(`
`),r=s.length-1,o=l.length-1;1<=r&&0<=o&&s[r]!==l[o];)o--;for(;1<=r&&0<=o;r--,o--)if(s[r]!==l[o]){if(r!==1||o!==1)do if(r--,o--,0>o||s[r]!==l[o]){var a=`
`+s[r].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=r&&0<=o);break}}}finally{Os=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?Mi(e):""}function Tu(e){switch(e.tag){case 5:return Mi(e.type);case 16:return Mi("Lazy");case 13:return Mi("Suspense");case 19:return Mi("SuspenseList");case 0:case 2:case 15:return e=Rs(e.type,!1),e;case 11:return e=Rs(e.type.render,!1),e;case 1:return e=Rs(e.type,!0),e;default:return""}}function ml(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qn:return"Fragment";case Gn:return"Portal";case pl:return"Profiler";case pr:return"StrictMode";case dl:return"Suspense";case gl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Fa:return(e.displayName||"Context")+".Consumer";case Aa:return(e._context.displayName||"Context")+".Provider";case dr:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gr:return n=e.displayName||null,n!==null?n:ml(e.type)||"Memo";case tn:n=e._payload,e=e._init;try{return ml(e(n))}catch{}}return null}function Iu(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ml(n);case 8:return n===pr?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function wn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oa(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Su(e){var n=Oa(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),t=""+e[n];if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var s=i.get,l=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return s.call(this)},set:function(r){t=""+r,l.call(this,r)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return t},setValue:function(r){t=""+r},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function vt(e){e._valueTracker||(e._valueTracker=Su(e))}function Ra(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),t="";return e&&(t=Oa(e)?e.checked?"true":"false":e.value),e=t,e!==i?(n.setValue(e),!0):!1}function Qt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function fl(e,n){var i=n.checked;return Q({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function oo(e,n){var i=n.defaultValue==null?"":n.defaultValue,t=n.checked!=null?n.checked:n.defaultChecked;i=wn(n.value!=null?n.value:i),e._wrapperState={initialChecked:t,initialValue:i,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Ba(e,n){n=n.checked,n!=null&&ur(e,"checked",n,!1)}function yl(e,n){Ba(e,n);var i=wn(n.value),t=n.type;if(i!=null)t==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(t==="submit"||t==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?vl(e,n.type,i):n.hasOwnProperty("defaultValue")&&vl(e,n.type,wn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function ao(e,n,i){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var t=n.type;if(!(t!=="submit"&&t!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,i||n===e.value||(e.value=n),e.defaultValue=n}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function vl(e,n,i){(n!=="number"||Qt(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var zi=Array.isArray;function si(e,n,i,t){if(e=e.options,n){n={};for(var s=0;s<i.length;s++)n["$"+i[s]]=!0;for(i=0;i<e.length;i++)s=n.hasOwnProperty("$"+e[i].value),e[i].selected!==s&&(e[i].selected=s),s&&t&&(e[i].defaultSelected=!0)}else{for(i=""+wn(i),n=null,s=0;s<e.length;s++){if(e[s].value===i){e[s].selected=!0,t&&(e[s].defaultSelected=!0);return}n!==null||e[s].disabled||(n=e[s])}n!==null&&(n.selected=!0)}}function wl(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(b(91));return Q({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ho(e,n){var i=n.value;if(i==null){if(i=n.children,n=n.defaultValue,i!=null){if(n!=null)throw Error(b(92));if(zi(i)){if(1<i.length)throw Error(b(93));i=i[0]}n=i}n==null&&(n=""),i=n}e._wrapperState={initialValue:wn(i)}}function Ha(e,n){var i=wn(n.value),t=wn(n.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),n.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),t!=null&&(e.defaultValue=""+t)}function co(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Ua(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kl(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Ua(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var wt,Va=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,i,t,s){MSApp.execUnsafeLocalFunction(function(){return e(n,i,t,s)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(wt=wt||document.createElement("div"),wt.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=wt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function Ui(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var Wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Cu=["Webkit","ms","Moz","O"];Object.keys(Wi).forEach(function(e){Cu.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Wi[n]=Wi[e]})});function $a(e,n,i){return n==null||typeof n=="boolean"||n===""?"":i||typeof n!="number"||n===0||Wi.hasOwnProperty(e)&&Wi[e]?(""+n).trim():n+"px"}function Ga(e,n){e=e.style;for(var i in n)if(n.hasOwnProperty(i)){var t=i.indexOf("--")===0,s=$a(i,n[i],t);i==="float"&&(i="cssFloat"),t?e.setProperty(i,s):e[i]=s}}var ju=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bl(e,n){if(n){if(ju[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(b(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(b(61))}if(n.style!=null&&typeof n.style!="object")throw Error(b(62))}}function xl(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tl=null;function mr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Il=null,li=null,ri=null;function uo(e){if(e=ct(e)){if(typeof Il!="function")throw Error(b(280));var n=e.stateNode;n&&(n=xs(n),Il(e.stateNode,e.type,n))}}function Qa(e){li?ri?ri.push(e):ri=[e]:li=e}function Ya(){if(li){var e=li,n=ri;if(ri=li=null,uo(e),n)for(e=0;e<n.length;e++)uo(n[e])}}function Ka(e,n){return e(n)}function Ja(){}var Bs=!1;function Xa(e,n,i){if(Bs)return e(n,i);Bs=!0;try{return Ka(e,n,i)}finally{Bs=!1,(li!==null||ri!==null)&&(Ja(),Ya())}}function Vi(e,n){var i=e.stateNode;if(i===null)return null;var t=xs(i);if(t===null)return null;i=t[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(t=!t.disabled)||(e=e.type,t=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!t;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(b(231,n,typeof i));return i}var Sl=!1;if(Je)try{var xi={};Object.defineProperty(xi,"passive",{get:function(){Sl=!0}}),window.addEventListener("test",xi,xi),window.removeEventListener("test",xi,xi)}catch{Sl=!1}function Eu(e,n,i,t,s,l,r,o,a){var h=Array.prototype.slice.call(arguments,3);try{n.apply(i,h)}catch(g){this.onError(g)}}var _i=!1,Yt=null,Kt=!1,Cl=null,Mu={onError:function(e){_i=!0,Yt=e}};function zu(e,n,i,t,s,l,r,o,a){_i=!1,Yt=null,Eu.apply(Mu,arguments)}function Nu(e,n,i,t,s,l,r,o,a){if(zu.apply(this,arguments),_i){if(_i){var h=Yt;_i=!1,Yt=null}else throw Error(b(198));Kt||(Kt=!0,Cl=h)}}function Un(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function qa(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function po(e){if(Un(e)!==e)throw Error(b(188))}function Pu(e){var n=e.alternate;if(!n){if(n=Un(e),n===null)throw Error(b(188));return n!==e?null:e}for(var i=e,t=n;;){var s=i.return;if(s===null)break;var l=s.alternate;if(l===null){if(t=s.return,t!==null){i=t;continue}break}if(s.child===l.child){for(l=s.child;l;){if(l===i)return po(s),e;if(l===t)return po(s),n;l=l.sibling}throw Error(b(188))}if(i.return!==t.return)i=s,t=l;else{for(var r=!1,o=s.child;o;){if(o===i){r=!0,i=s,t=l;break}if(o===t){r=!0,t=s,i=l;break}o=o.sibling}if(!r){for(o=l.child;o;){if(o===i){r=!0,i=l,t=s;break}if(o===t){r=!0,t=l,i=s;break}o=o.sibling}if(!r)throw Error(b(189))}}if(i.alternate!==t)throw Error(b(190))}if(i.tag!==3)throw Error(b(188));return i.stateNode.current===i?e:n}function Za(e){return e=Pu(e),e!==null?eh(e):null}function eh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=eh(e);if(n!==null)return n;e=e.sibling}return null}var nh=Ie.unstable_scheduleCallback,go=Ie.unstable_cancelCallback,Wu=Ie.unstable_shouldYield,_u=Ie.unstable_requestPaint,J=Ie.unstable_now,Lu=Ie.unstable_getCurrentPriorityLevel,fr=Ie.unstable_ImmediatePriority,ih=Ie.unstable_UserBlockingPriority,Jt=Ie.unstable_NormalPriority,Au=Ie.unstable_LowPriority,th=Ie.unstable_IdlePriority,vs=null,Ue=null;function Fu(e){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(vs,e,void 0,(e.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:Ru,Du=Math.log,Ou=Math.LN2;function Ru(e){return e>>>=0,e===0?32:31-(Du(e)/Ou|0)|0}var kt=64,bt=4194304;function Ni(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Xt(e,n){var i=e.pendingLanes;if(i===0)return 0;var t=0,s=e.suspendedLanes,l=e.pingedLanes,r=i&268435455;if(r!==0){var o=r&~s;o!==0?t=Ni(o):(l&=r,l!==0&&(t=Ni(l)))}else r=i&~s,r!==0?t=Ni(r):l!==0&&(t=Ni(l));if(t===0)return 0;if(n!==0&&n!==t&&!(n&s)&&(s=t&-t,l=n&-n,s>=l||s===16&&(l&4194240)!==0))return n;if(t&4&&(t|=i&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=t;0<n;)i=31-Fe(n),s=1<<i,t|=e[i],n&=~s;return t}function Bu(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hu(e,n){for(var i=e.suspendedLanes,t=e.pingedLanes,s=e.expirationTimes,l=e.pendingLanes;0<l;){var r=31-Fe(l),o=1<<r,a=s[r];a===-1?(!(o&i)||o&t)&&(s[r]=Bu(o,n)):a<=n&&(e.expiredLanes|=o),l&=~o}}function jl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function sh(){var e=kt;return kt<<=1,!(kt&4194240)&&(kt=64),e}function Hs(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function at(e,n,i){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Fe(n),e[n]=i}function Uu(e,n){var i=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var t=e.eventTimes;for(e=e.expirationTimes;0<i;){var s=31-Fe(i),l=1<<s;n[s]=0,t[s]=-1,e[s]=-1,i&=~l}}function yr(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var t=31-Fe(i),s=1<<t;s&n|e[t]&n&&(e[t]|=n),i&=~s}}var O=0;function lh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var rh,vr,oh,ah,hh,El=!1,xt=[],un=null,pn=null,dn=null,$i=new Map,Gi=new Map,rn=[],Vu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mo(e,n){switch(e){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":pn=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":$i.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gi.delete(n.pointerId)}}function Ti(e,n,i,t,s,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:i,eventSystemFlags:t,nativeEvent:l,targetContainers:[s]},n!==null&&(n=ct(n),n!==null&&vr(n)),e):(e.eventSystemFlags|=t,n=e.targetContainers,s!==null&&n.indexOf(s)===-1&&n.push(s),e)}function $u(e,n,i,t,s){switch(n){case"focusin":return un=Ti(un,e,n,i,t,s),!0;case"dragenter":return pn=Ti(pn,e,n,i,t,s),!0;case"mouseover":return dn=Ti(dn,e,n,i,t,s),!0;case"pointerover":var l=s.pointerId;return $i.set(l,Ti($i.get(l)||null,e,n,i,t,s)),!0;case"gotpointercapture":return l=s.pointerId,Gi.set(l,Ti(Gi.get(l)||null,e,n,i,t,s)),!0}return!1}function ch(e){var n=Nn(e.target);if(n!==null){var i=Un(n);if(i!==null){if(n=i.tag,n===13){if(n=qa(i),n!==null){e.blockedOn=n,hh(e.priority,function(){oh(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lt(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=Ml(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var t=new i.constructor(i.type,i);Tl=t,i.target.dispatchEvent(t),Tl=null}else return n=ct(i),n!==null&&vr(n),e.blockedOn=i,!1;n.shift()}return!0}function fo(e,n,i){Lt(e)&&i.delete(n)}function Gu(){El=!1,un!==null&&Lt(un)&&(un=null),pn!==null&&Lt(pn)&&(pn=null),dn!==null&&Lt(dn)&&(dn=null),$i.forEach(fo),Gi.forEach(fo)}function Ii(e,n){e.blockedOn===n&&(e.blockedOn=null,El||(El=!0,Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority,Gu)))}function Qi(e){function n(s){return Ii(s,e)}if(0<xt.length){Ii(xt[0],e);for(var i=1;i<xt.length;i++){var t=xt[i];t.blockedOn===e&&(t.blockedOn=null)}}for(un!==null&&Ii(un,e),pn!==null&&Ii(pn,e),dn!==null&&Ii(dn,e),$i.forEach(n),Gi.forEach(n),i=0;i<rn.length;i++)t=rn[i],t.blockedOn===e&&(t.blockedOn=null);for(;0<rn.length&&(i=rn[0],i.blockedOn===null);)ch(i),i.blockedOn===null&&rn.shift()}var oi=en.ReactCurrentBatchConfig,qt=!0;function Qu(e,n,i,t){var s=O,l=oi.transition;oi.transition=null;try{O=1,wr(e,n,i,t)}finally{O=s,oi.transition=l}}function Yu(e,n,i,t){var s=O,l=oi.transition;oi.transition=null;try{O=4,wr(e,n,i,t)}finally{O=s,oi.transition=l}}function wr(e,n,i,t){if(qt){var s=Ml(e,n,i,t);if(s===null)qs(e,n,t,Zt,i),mo(e,t);else if($u(s,e,n,i,t))t.stopPropagation();else if(mo(e,t),n&4&&-1<Vu.indexOf(e)){for(;s!==null;){var l=ct(s);if(l!==null&&rh(l),l=Ml(e,n,i,t),l===null&&qs(e,n,t,Zt,i),l===s)break;s=l}s!==null&&t.stopPropagation()}else qs(e,n,t,null,i)}}var Zt=null;function Ml(e,n,i,t){if(Zt=null,e=mr(t),e=Nn(e),e!==null)if(n=Un(e),n===null)e=null;else if(i=n.tag,i===13){if(e=qa(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Zt=e,null}function uh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lu()){case fr:return 1;case ih:return 4;case Jt:case Au:return 16;case th:return 536870912;default:return 16}default:return 16}}var an=null,kr=null,At=null;function ph(){if(At)return At;var e,n=kr,i=n.length,t,s="value"in an?an.value:an.textContent,l=s.length;for(e=0;e<i&&n[e]===s[e];e++);var r=i-e;for(t=1;t<=r&&n[i-t]===s[l-t];t++);return At=s.slice(e,1<t?1-t:void 0)}function Ft(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Tt(){return!0}function yo(){return!1}function Ce(e){function n(i,t,s,l,r){this._reactName=i,this._targetInst=s,this.type=t,this.nativeEvent=l,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(i=e[o],this[o]=i?i(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Tt:yo,this.isPropagationStopped=yo,this}return Q(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Tt)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Tt)},persist:function(){},isPersistent:Tt}),n}var vi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},br=Ce(vi),ht=Q({},vi,{view:0,detail:0}),Ku=Ce(ht),Us,Vs,Si,ws=Q({},ht,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Si&&(Si&&e.type==="mousemove"?(Us=e.screenX-Si.screenX,Vs=e.screenY-Si.screenY):Vs=Us=0,Si=e),Us)},movementY:function(e){return"movementY"in e?e.movementY:Vs}}),vo=Ce(ws),Ju=Q({},ws,{dataTransfer:0}),Xu=Ce(Ju),qu=Q({},ht,{relatedTarget:0}),$s=Ce(qu),Zu=Q({},vi,{animationName:0,elapsedTime:0,pseudoElement:0}),ep=Ce(Zu),np=Q({},vi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ip=Ce(np),tp=Q({},vi,{data:0}),wo=Ce(tp),sp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},lp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function op(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=rp[e])?!!n[e]:!1}function xr(){return op}var ap=Q({},ht,{key:function(e){if(e.key){var n=sp[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ft(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?lp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xr,charCode:function(e){return e.type==="keypress"?Ft(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ft(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),hp=Ce(ap),cp=Q({},ws,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ko=Ce(cp),up=Q({},ht,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xr}),pp=Ce(up),dp=Q({},vi,{propertyName:0,elapsedTime:0,pseudoElement:0}),gp=Ce(dp),mp=Q({},ws,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fp=Ce(mp),yp=[9,13,27,32],Tr=Je&&"CompositionEvent"in window,Li=null;Je&&"documentMode"in document&&(Li=document.documentMode);var vp=Je&&"TextEvent"in window&&!Li,dh=Je&&(!Tr||Li&&8<Li&&11>=Li),bo=" ",xo=!1;function gh(e,n){switch(e){case"keyup":return yp.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function wp(e,n){switch(e){case"compositionend":return mh(n);case"keypress":return n.which!==32?null:(xo=!0,bo);case"textInput":return e=n.data,e===bo&&xo?null:e;default:return null}}function kp(e,n){if(Yn)return e==="compositionend"||!Tr&&gh(e,n)?(e=ph(),At=kr=an=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return dh&&n.locale!=="ko"?null:n.data;default:return null}}var bp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function To(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!bp[e.type]:n==="textarea"}function fh(e,n,i,t){Qa(t),n=es(n,"onChange"),0<n.length&&(i=new br("onChange","change",null,i,t),e.push({event:i,listeners:n}))}var Ai=null,Yi=null;function xp(e){jh(e,0)}function ks(e){var n=Xn(e);if(Ra(n))return e}function Tp(e,n){if(e==="change")return n}var yh=!1;if(Je){var Gs;if(Je){var Qs="oninput"in document;if(!Qs){var Io=document.createElement("div");Io.setAttribute("oninput","return;"),Qs=typeof Io.oninput=="function"}Gs=Qs}else Gs=!1;yh=Gs&&(!document.documentMode||9<document.documentMode)}function So(){Ai&&(Ai.detachEvent("onpropertychange",vh),Yi=Ai=null)}function vh(e){if(e.propertyName==="value"&&ks(Yi)){var n=[];fh(n,Yi,e,mr(e)),Xa(xp,n)}}function Ip(e,n,i){e==="focusin"?(So(),Ai=n,Yi=i,Ai.attachEvent("onpropertychange",vh)):e==="focusout"&&So()}function Sp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ks(Yi)}function Cp(e,n){if(e==="click")return ks(n)}function jp(e,n){if(e==="input"||e==="change")return ks(n)}function Ep(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Oe=typeof Object.is=="function"?Object.is:Ep;function Ki(e,n){if(Oe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),t=Object.keys(n);if(i.length!==t.length)return!1;for(t=0;t<i.length;t++){var s=i[t];if(!ul.call(n,s)||!Oe(e[s],n[s]))return!1}return!0}function Co(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jo(e,n){var i=Co(e);e=0;for(var t;i;){if(i.nodeType===3){if(t=e+i.textContent.length,e<=n&&t>=n)return{node:i,offset:n-e};e=t}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Co(i)}}function wh(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?wh(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function kh(){for(var e=window,n=Qt();n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=Qt(e.document)}return n}function Ir(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Mp(e){var n=kh(),i=e.focusedElem,t=e.selectionRange;if(n!==i&&i&&i.ownerDocument&&wh(i.ownerDocument.documentElement,i)){if(t!==null&&Ir(i)){if(n=t.start,e=t.end,e===void 0&&(e=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(e,i.value.length);else if(e=(n=i.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var s=i.textContent.length,l=Math.min(t.start,s);t=t.end===void 0?l:Math.min(t.end,s),!e.extend&&l>t&&(s=t,t=l,l=s),s=jo(i,l);var r=jo(i,t);s&&r&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==r.node||e.focusOffset!==r.offset)&&(n=n.createRange(),n.setStart(s.node,s.offset),e.removeAllRanges(),l>t?(e.addRange(n),e.extend(r.node,r.offset)):(n.setEnd(r.node,r.offset),e.addRange(n)))}}for(n=[],e=i;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)e=n[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var zp=Je&&"documentMode"in document&&11>=document.documentMode,Kn=null,zl=null,Fi=null,Nl=!1;function Eo(e,n,i){var t=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Nl||Kn==null||Kn!==Qt(t)||(t=Kn,"selectionStart"in t&&Ir(t)?t={start:t.selectionStart,end:t.selectionEnd}:(t=(t.ownerDocument&&t.ownerDocument.defaultView||window).getSelection(),t={anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}),Fi&&Ki(Fi,t)||(Fi=t,t=es(zl,"onSelect"),0<t.length&&(n=new br("onSelect","select",null,n,i),e.push({event:n,listeners:t}),n.target=Kn)))}function It(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var Jn={animationend:It("Animation","AnimationEnd"),animationiteration:It("Animation","AnimationIteration"),animationstart:It("Animation","AnimationStart"),transitionend:It("Transition","TransitionEnd")},Ys={},bh={};Je&&(bh=document.createElement("div").style,"AnimationEvent"in window||(delete Jn.animationend.animation,delete Jn.animationiteration.animation,delete Jn.animationstart.animation),"TransitionEvent"in window||delete Jn.transitionend.transition);function bs(e){if(Ys[e])return Ys[e];if(!Jn[e])return e;var n=Jn[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in bh)return Ys[e]=n[i];return e}var xh=bs("animationend"),Th=bs("animationiteration"),Ih=bs("animationstart"),Sh=bs("transitionend"),Ch=new Map,Mo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bn(e,n){Ch.set(e,n),Hn(n,[e])}for(var Ks=0;Ks<Mo.length;Ks++){var Js=Mo[Ks],Np=Js.toLowerCase(),Pp=Js[0].toUpperCase()+Js.slice(1);bn(Np,"on"+Pp)}bn(xh,"onAnimationEnd");bn(Th,"onAnimationIteration");bn(Ih,"onAnimationStart");bn("dblclick","onDoubleClick");bn("focusin","onFocus");bn("focusout","onBlur");bn(Sh,"onTransitionEnd");ci("onMouseEnter",["mouseout","mouseover"]);ci("onMouseLeave",["mouseout","mouseover"]);ci("onPointerEnter",["pointerout","pointerover"]);ci("onPointerLeave",["pointerout","pointerover"]);Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pi));function zo(e,n,i){var t=e.type||"unknown-event";e.currentTarget=i,Nu(t,n,void 0,e),e.currentTarget=null}function jh(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var t=e[i],s=t.event;t=t.listeners;e:{var l=void 0;if(n)for(var r=t.length-1;0<=r;r--){var o=t[r],a=o.instance,h=o.currentTarget;if(o=o.listener,a!==l&&s.isPropagationStopped())break e;zo(s,o,h),l=a}else for(r=0;r<t.length;r++){if(o=t[r],a=o.instance,h=o.currentTarget,o=o.listener,a!==l&&s.isPropagationStopped())break e;zo(s,o,h),l=a}}}if(Kt)throw e=Cl,Kt=!1,Cl=null,e}function B(e,n){var i=n[Al];i===void 0&&(i=n[Al]=new Set);var t=e+"__bubble";i.has(t)||(Eh(n,e,2,!1),i.add(t))}function Xs(e,n,i){var t=0;n&&(t|=4),Eh(i,e,t,n)}var St="_reactListening"+Math.random().toString(36).slice(2);function Ji(e){if(!e[St]){e[St]=!0,La.forEach(function(i){i!=="selectionchange"&&(Wp.has(i)||Xs(i,!1,e),Xs(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[St]||(n[St]=!0,Xs("selectionchange",!1,n))}}function Eh(e,n,i,t){switch(uh(n)){case 1:var s=Qu;break;case 4:s=Yu;break;default:s=wr}i=s.bind(null,n,i,e),s=void 0,!Sl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(s=!0),t?s!==void 0?e.addEventListener(n,i,{capture:!0,passive:s}):e.addEventListener(n,i,!0):s!==void 0?e.addEventListener(n,i,{passive:s}):e.addEventListener(n,i,!1)}function qs(e,n,i,t,s){var l=t;if(!(n&1)&&!(n&2)&&t!==null)e:for(;;){if(t===null)return;var r=t.tag;if(r===3||r===4){var o=t.stateNode.containerInfo;if(o===s||o.nodeType===8&&o.parentNode===s)break;if(r===4)for(r=t.return;r!==null;){var a=r.tag;if((a===3||a===4)&&(a=r.stateNode.containerInfo,a===s||a.nodeType===8&&a.parentNode===s))return;r=r.return}for(;o!==null;){if(r=Nn(o),r===null)return;if(a=r.tag,a===5||a===6){t=l=r;continue e}o=o.parentNode}}t=t.return}Xa(function(){var h=l,g=mr(i),p=[];e:{var m=Ch.get(e);if(m!==void 0){var w=br,k=e;switch(e){case"keypress":if(Ft(i)===0)break e;case"keydown":case"keyup":w=hp;break;case"focusin":k="focus",w=$s;break;case"focusout":k="blur",w=$s;break;case"beforeblur":case"afterblur":w=$s;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=vo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Xu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=pp;break;case xh:case Th:case Ih:w=ep;break;case Sh:w=gp;break;case"scroll":w=Ku;break;case"wheel":w=fp;break;case"copy":case"cut":case"paste":w=ip;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=ko}var v=(n&4)!==0,I=!v&&e==="scroll",u=v?m!==null?m+"Capture":null:m;v=[];for(var c=h,d;c!==null;){d=c;var y=d.stateNode;if(d.tag===5&&y!==null&&(d=y,u!==null&&(y=Vi(c,u),y!=null&&v.push(Xi(c,y,d)))),I)break;c=c.return}0<v.length&&(m=new w(m,k,null,i,g),p.push({event:m,listeners:v}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&i!==Tl&&(k=i.relatedTarget||i.fromElement)&&(Nn(k)||k[Xe]))break e;if((w||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,w?(k=i.relatedTarget||i.toElement,w=h,k=k?Nn(k):null,k!==null&&(I=Un(k),k!==I||k.tag!==5&&k.tag!==6)&&(k=null)):(w=null,k=h),w!==k)){if(v=vo,y="onMouseLeave",u="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=ko,y="onPointerLeave",u="onPointerEnter",c="pointer"),I=w==null?m:Xn(w),d=k==null?m:Xn(k),m=new v(y,c+"leave",w,i,g),m.target=I,m.relatedTarget=d,y=null,Nn(g)===h&&(v=new v(u,c+"enter",k,i,g),v.target=d,v.relatedTarget=I,y=v),I=y,w&&k)n:{for(v=w,u=k,c=0,d=v;d;d=Vn(d))c++;for(d=0,y=u;y;y=Vn(y))d++;for(;0<c-d;)v=Vn(v),c--;for(;0<d-c;)u=Vn(u),d--;for(;c--;){if(v===u||u!==null&&v===u.alternate)break n;v=Vn(v),u=Vn(u)}v=null}else v=null;w!==null&&No(p,m,w,v,!1),k!==null&&I!==null&&No(p,I,k,v,!0)}}e:{if(m=h?Xn(h):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var S=Tp;else if(To(m))if(yh)S=jp;else{S=Sp;var j=Ip}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Cp);if(S&&(S=S(e,h))){fh(p,S,i,g);break e}j&&j(e,m,h),e==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&vl(m,"number",m.value)}switch(j=h?Xn(h):window,e){case"focusin":(To(j)||j.contentEditable==="true")&&(Kn=j,zl=h,Fi=null);break;case"focusout":Fi=zl=Kn=null;break;case"mousedown":Nl=!0;break;case"contextmenu":case"mouseup":case"dragend":Nl=!1,Eo(p,i,g);break;case"selectionchange":if(zp)break;case"keydown":case"keyup":Eo(p,i,g)}var E;if(Tr)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Yn?gh(e,i)&&(z="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(z="onCompositionStart");z&&(dh&&i.locale!=="ko"&&(Yn||z!=="onCompositionStart"?z==="onCompositionEnd"&&Yn&&(E=ph()):(an=g,kr="value"in an?an.value:an.textContent,Yn=!0)),j=es(h,z),0<j.length&&(z=new wo(z,e,null,i,g),p.push({event:z,listeners:j}),E?z.data=E:(E=mh(i),E!==null&&(z.data=E)))),(E=vp?wp(e,i):kp(e,i))&&(h=es(h,"onBeforeInput"),0<h.length&&(g=new wo("onBeforeInput","beforeinput",null,i,g),p.push({event:g,listeners:h}),g.data=E))}jh(p,n)})}function Xi(e,n,i){return{instance:e,listener:n,currentTarget:i}}function es(e,n){for(var i=n+"Capture",t=[];e!==null;){var s=e,l=s.stateNode;s.tag===5&&l!==null&&(s=l,l=Vi(e,i),l!=null&&t.unshift(Xi(e,l,s)),l=Vi(e,n),l!=null&&t.push(Xi(e,l,s))),e=e.return}return t}function Vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function No(e,n,i,t,s){for(var l=n._reactName,r=[];i!==null&&i!==t;){var o=i,a=o.alternate,h=o.stateNode;if(a!==null&&a===t)break;o.tag===5&&h!==null&&(o=h,s?(a=Vi(i,l),a!=null&&r.unshift(Xi(i,a,o))):s||(a=Vi(i,l),a!=null&&r.push(Xi(i,a,o)))),i=i.return}r.length!==0&&e.push({event:n,listeners:r})}var _p=/\r\n?/g,Lp=/\u0000|\uFFFD/g;function Po(e){return(typeof e=="string"?e:""+e).replace(_p,`
`).replace(Lp,"")}function Ct(e,n,i){if(n=Po(n),Po(e)!==n&&i)throw Error(b(425))}function ns(){}var Pl=null,Wl=null;function _l(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ll=typeof setTimeout=="function"?setTimeout:void 0,Ap=typeof clearTimeout=="function"?clearTimeout:void 0,Wo=typeof Promise=="function"?Promise:void 0,Fp=typeof queueMicrotask=="function"?queueMicrotask:typeof Wo<"u"?function(e){return Wo.resolve(null).then(e).catch(Dp)}:Ll;function Dp(e){setTimeout(function(){throw e})}function Zs(e,n){var i=n,t=0;do{var s=i.nextSibling;if(e.removeChild(i),s&&s.nodeType===8)if(i=s.data,i==="/$"){if(t===0){e.removeChild(s),Qi(n);return}t--}else i!=="$"&&i!=="$?"&&i!=="$!"||t++;i=s}while(i);Qi(n)}function gn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function _o(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return e;n--}else i==="/$"&&n++}e=e.previousSibling}return null}var wi=Math.random().toString(36).slice(2),He="__reactFiber$"+wi,qi="__reactProps$"+wi,Xe="__reactContainer$"+wi,Al="__reactEvents$"+wi,Op="__reactListeners$"+wi,Rp="__reactHandles$"+wi;function Nn(e){var n=e[He];if(n)return n;for(var i=e.parentNode;i;){if(n=i[Xe]||i[He]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=_o(e);e!==null;){if(i=e[He])return i;e=_o(e)}return n}e=i,i=e.parentNode}return null}function ct(e){return e=e[He]||e[Xe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function xs(e){return e[qi]||null}var Fl=[],qn=-1;function xn(e){return{current:e}}function H(e){0>qn||(e.current=Fl[qn],Fl[qn]=null,qn--)}function R(e,n){qn++,Fl[qn]=e.current,e.current=n}var kn={},ce=xn(kn),ye=xn(!1),Fn=kn;function ui(e,n){var i=e.type.contextTypes;if(!i)return kn;var t=e.stateNode;if(t&&t.__reactInternalMemoizedUnmaskedChildContext===n)return t.__reactInternalMemoizedMaskedChildContext;var s={},l;for(l in i)s[l]=n[l];return t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=s),s}function ve(e){return e=e.childContextTypes,e!=null}function is(){H(ye),H(ce)}function Lo(e,n,i){if(ce.current!==kn)throw Error(b(168));R(ce,n),R(ye,i)}function Mh(e,n,i){var t=e.stateNode;if(n=n.childContextTypes,typeof t.getChildContext!="function")return i;t=t.getChildContext();for(var s in t)if(!(s in n))throw Error(b(108,Iu(e)||"Unknown",s));return Q({},i,t)}function ts(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||kn,Fn=ce.current,R(ce,e),R(ye,ye.current),!0}function Ao(e,n,i){var t=e.stateNode;if(!t)throw Error(b(169));i?(e=Mh(e,n,Fn),t.__reactInternalMemoizedMergedChildContext=e,H(ye),H(ce),R(ce,e)):H(ye),R(ye,i)}var Ge=null,Ts=!1,el=!1;function zh(e){Ge===null?Ge=[e]:Ge.push(e)}function Bp(e){Ts=!0,zh(e)}function Tn(){if(!el&&Ge!==null){el=!0;var e=0,n=O;try{var i=Ge;for(O=1;e<i.length;e++){var t=i[e];do t=t(!0);while(t!==null)}Ge=null,Ts=!1}catch(s){throw Ge!==null&&(Ge=Ge.slice(e+1)),nh(fr,Tn),s}finally{O=n,el=!1}}return null}var Zn=[],ei=0,ss=null,ls=0,je=[],Ee=0,Dn=null,Qe=1,Ye="";function Mn(e,n){Zn[ei++]=ls,Zn[ei++]=ss,ss=e,ls=n}function Nh(e,n,i){je[Ee++]=Qe,je[Ee++]=Ye,je[Ee++]=Dn,Dn=e;var t=Qe;e=Ye;var s=32-Fe(t)-1;t&=~(1<<s),i+=1;var l=32-Fe(n)+s;if(30<l){var r=s-s%5;l=(t&(1<<r)-1).toString(32),t>>=r,s-=r,Qe=1<<32-Fe(n)+s|i<<s|t,Ye=l+e}else Qe=1<<l|i<<s|t,Ye=e}function Sr(e){e.return!==null&&(Mn(e,1),Nh(e,1,0))}function Cr(e){for(;e===ss;)ss=Zn[--ei],Zn[ei]=null,ls=Zn[--ei],Zn[ei]=null;for(;e===Dn;)Dn=je[--Ee],je[Ee]=null,Ye=je[--Ee],je[Ee]=null,Qe=je[--Ee],je[Ee]=null}var Te=null,xe=null,U=!1,Ae=null;function Ph(e,n){var i=Me(5,null,null,0);i.elementType="DELETED",i.stateNode=n,i.return=e,n=e.deletions,n===null?(e.deletions=[i],e.flags|=16):n.push(i)}function Fo(e,n){switch(e.tag){case 5:var i=e.type;return n=n.nodeType!==1||i.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,Te=e,xe=gn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,Te=e,xe=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(i=Dn!==null?{id:Qe,overflow:Ye}:null,e.memoizedState={dehydrated:n,treeContext:i,retryLane:1073741824},i=Me(18,null,null,0),i.stateNode=n,i.return=e,e.child=i,Te=e,xe=null,!0):!1;default:return!1}}function Dl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ol(e){if(U){var n=xe;if(n){var i=n;if(!Fo(e,n)){if(Dl(e))throw Error(b(418));n=gn(i.nextSibling);var t=Te;n&&Fo(e,n)?Ph(t,i):(e.flags=e.flags&-4097|2,U=!1,Te=e)}}else{if(Dl(e))throw Error(b(418));e.flags=e.flags&-4097|2,U=!1,Te=e}}}function Do(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function jt(e){if(e!==Te)return!1;if(!U)return Do(e),U=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!_l(e.type,e.memoizedProps)),n&&(n=xe)){if(Dl(e))throw Wh(),Error(b(418));for(;n;)Ph(e,n),n=gn(n.nextSibling)}if(Do(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(n===0){xe=gn(e.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++}e=e.nextSibling}xe=null}}else xe=Te?gn(e.stateNode.nextSibling):null;return!0}function Wh(){for(var e=xe;e;)e=gn(e.nextSibling)}function pi(){xe=Te=null,U=!1}function jr(e){Ae===null?Ae=[e]:Ae.push(e)}var Hp=en.ReactCurrentBatchConfig;function Ci(e,n,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(b(309));var t=i.stateNode}if(!t)throw Error(b(147,e));var s=t,l=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===l?n.ref:(n=function(r){var o=s.refs;r===null?delete o[l]:o[l]=r},n._stringRef=l,n)}if(typeof e!="string")throw Error(b(284));if(!i._owner)throw Error(b(290,e))}return e}function Et(e,n){throw e=Object.prototype.toString.call(n),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Oo(e){var n=e._init;return n(e._payload)}function _h(e){function n(u,c){if(e){var d=u.deletions;d===null?(u.deletions=[c],u.flags|=16):d.push(c)}}function i(u,c){if(!e)return null;for(;c!==null;)n(u,c),c=c.sibling;return null}function t(u,c){for(u=new Map;c!==null;)c.key!==null?u.set(c.key,c):u.set(c.index,c),c=c.sibling;return u}function s(u,c){return u=vn(u,c),u.index=0,u.sibling=null,u}function l(u,c,d){return u.index=d,e?(d=u.alternate,d!==null?(d=d.index,d<c?(u.flags|=2,c):d):(u.flags|=2,c)):(u.flags|=1048576,c)}function r(u){return e&&u.alternate===null&&(u.flags|=2),u}function o(u,c,d,y){return c===null||c.tag!==6?(c=ol(d,u.mode,y),c.return=u,c):(c=s(c,d),c.return=u,c)}function a(u,c,d,y){var S=d.type;return S===Qn?g(u,c,d.props.children,y,d.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===tn&&Oo(S)===c.type)?(y=s(c,d.props),y.ref=Ci(u,c,d),y.return=u,y):(y=Vt(d.type,d.key,d.props,null,u.mode,y),y.ref=Ci(u,c,d),y.return=u,y)}function h(u,c,d,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=al(d,u.mode,y),c.return=u,c):(c=s(c,d.children||[]),c.return=u,c)}function g(u,c,d,y,S){return c===null||c.tag!==7?(c=Ln(d,u.mode,y,S),c.return=u,c):(c=s(c,d),c.return=u,c)}function p(u,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ol(""+c,u.mode,d),c.return=u,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case yt:return d=Vt(c.type,c.key,c.props,null,u.mode,d),d.ref=Ci(u,null,c),d.return=u,d;case Gn:return c=al(c,u.mode,d),c.return=u,c;case tn:var y=c._init;return p(u,y(c._payload),d)}if(zi(c)||bi(c))return c=Ln(c,u.mode,d,null),c.return=u,c;Et(u,c)}return null}function m(u,c,d,y){var S=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return S!==null?null:o(u,c,""+d,y);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case yt:return d.key===S?a(u,c,d,y):null;case Gn:return d.key===S?h(u,c,d,y):null;case tn:return S=d._init,m(u,c,S(d._payload),y)}if(zi(d)||bi(d))return S!==null?null:g(u,c,d,y,null);Et(u,d)}return null}function w(u,c,d,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(d)||null,o(c,u,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case yt:return u=u.get(y.key===null?d:y.key)||null,a(c,u,y,S);case Gn:return u=u.get(y.key===null?d:y.key)||null,h(c,u,y,S);case tn:var j=y._init;return w(u,c,d,j(y._payload),S)}if(zi(y)||bi(y))return u=u.get(d)||null,g(c,u,y,S,null);Et(c,y)}return null}function k(u,c,d,y){for(var S=null,j=null,E=c,z=c=0,V=null;E!==null&&z<d.length;z++){E.index>z?(V=E,E=null):V=E.sibling;var A=m(u,E,d[z],y);if(A===null){E===null&&(E=V);break}e&&E&&A.alternate===null&&n(u,E),c=l(A,c,z),j===null?S=A:j.sibling=A,j=A,E=V}if(z===d.length)return i(u,E),U&&Mn(u,z),S;if(E===null){for(;z<d.length;z++)E=p(u,d[z],y),E!==null&&(c=l(E,c,z),j===null?S=E:j.sibling=E,j=E);return U&&Mn(u,z),S}for(E=t(u,E);z<d.length;z++)V=w(E,u,z,d[z],y),V!==null&&(e&&V.alternate!==null&&E.delete(V.key===null?z:V.key),c=l(V,c,z),j===null?S=V:j.sibling=V,j=V);return e&&E.forEach(function(ke){return n(u,ke)}),U&&Mn(u,z),S}function v(u,c,d,y){var S=bi(d);if(typeof S!="function")throw Error(b(150));if(d=S.call(d),d==null)throw Error(b(151));for(var j=S=null,E=c,z=c=0,V=null,A=d.next();E!==null&&!A.done;z++,A=d.next()){E.index>z?(V=E,E=null):V=E.sibling;var ke=m(u,E,A.value,y);if(ke===null){E===null&&(E=V);break}e&&E&&ke.alternate===null&&n(u,E),c=l(ke,c,z),j===null?S=ke:j.sibling=ke,j=ke,E=V}if(A.done)return i(u,E),U&&Mn(u,z),S;if(E===null){for(;!A.done;z++,A=d.next())A=p(u,A.value,y),A!==null&&(c=l(A,c,z),j===null?S=A:j.sibling=A,j=A);return U&&Mn(u,z),S}for(E=t(u,E);!A.done;z++,A=d.next())A=w(E,u,z,A.value,y),A!==null&&(e&&A.alternate!==null&&E.delete(A.key===null?z:A.key),c=l(A,c,z),j===null?S=A:j.sibling=A,j=A);return e&&E.forEach(function(Sn){return n(u,Sn)}),U&&Mn(u,z),S}function I(u,c,d,y){if(typeof d=="object"&&d!==null&&d.type===Qn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case yt:e:{for(var S=d.key,j=c;j!==null;){if(j.key===S){if(S=d.type,S===Qn){if(j.tag===7){i(u,j.sibling),c=s(j,d.props.children),c.return=u,u=c;break e}}else if(j.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===tn&&Oo(S)===j.type){i(u,j.sibling),c=s(j,d.props),c.ref=Ci(u,j,d),c.return=u,u=c;break e}i(u,j);break}else n(u,j);j=j.sibling}d.type===Qn?(c=Ln(d.props.children,u.mode,y,d.key),c.return=u,u=c):(y=Vt(d.type,d.key,d.props,null,u.mode,y),y.ref=Ci(u,c,d),y.return=u,u=y)}return r(u);case Gn:e:{for(j=d.key;c!==null;){if(c.key===j)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){i(u,c.sibling),c=s(c,d.children||[]),c.return=u,u=c;break e}else{i(u,c);break}else n(u,c);c=c.sibling}c=al(d,u.mode,y),c.return=u,u=c}return r(u);case tn:return j=d._init,I(u,c,j(d._payload),y)}if(zi(d))return k(u,c,d,y);if(bi(d))return v(u,c,d,y);Et(u,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(i(u,c.sibling),c=s(c,d),c.return=u,u=c):(i(u,c),c=ol(d,u.mode,y),c.return=u,u=c),r(u)):i(u,c)}return I}var di=_h(!0),Lh=_h(!1),rs=xn(null),os=null,ni=null,Er=null;function Mr(){Er=ni=os=null}function zr(e){var n=rs.current;H(rs),e._currentValue=n}function Rl(e,n,i){for(;e!==null;){var t=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,t!==null&&(t.childLanes|=n)):t!==null&&(t.childLanes&n)!==n&&(t.childLanes|=n),e===i)break;e=e.return}}function ai(e,n){os=e,Er=ni=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(fe=!0),e.firstContext=null)}function Ne(e){var n=e._currentValue;if(Er!==e)if(e={context:e,memoizedValue:n,next:null},ni===null){if(os===null)throw Error(b(308));ni=e,os.dependencies={lanes:0,firstContext:e}}else ni=ni.next=e;return n}var Pn=null;function Nr(e){Pn===null?Pn=[e]:Pn.push(e)}function Ah(e,n,i,t){var s=n.interleaved;return s===null?(i.next=i,Nr(n)):(i.next=s.next,s.next=i),n.interleaved=i,qe(e,t)}function qe(e,n){e.lanes|=n;var i=e.alternate;for(i!==null&&(i.lanes|=n),i=e,e=e.return;e!==null;)e.childLanes|=n,i=e.alternate,i!==null&&(i.childLanes|=n),i=e,e=e.return;return i.tag===3?i.stateNode:null}var sn=!1;function Pr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ke(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function mn(e,n,i){var t=e.updateQueue;if(t===null)return null;if(t=t.shared,D&2){var s=t.pending;return s===null?n.next=n:(n.next=s.next,s.next=n),t.pending=n,qe(e,i)}return s=t.interleaved,s===null?(n.next=n,Nr(t)):(n.next=s.next,s.next=n),t.interleaved=n,qe(e,i)}function Dt(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194240)!==0)){var t=n.lanes;t&=e.pendingLanes,i|=t,n.lanes=i,yr(e,i)}}function Ro(e,n){var i=e.updateQueue,t=e.alternate;if(t!==null&&(t=t.updateQueue,i===t)){var s=null,l=null;if(i=i.firstBaseUpdate,i!==null){do{var r={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};l===null?s=l=r:l=l.next=r,i=i.next}while(i!==null);l===null?s=l=n:l=l.next=n}else s=l=n;i={baseState:t.baseState,firstBaseUpdate:s,lastBaseUpdate:l,shared:t.shared,effects:t.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}function as(e,n,i,t){var s=e.updateQueue;sn=!1;var l=s.firstBaseUpdate,r=s.lastBaseUpdate,o=s.shared.pending;if(o!==null){s.shared.pending=null;var a=o,h=a.next;a.next=null,r===null?l=h:r.next=h,r=a;var g=e.alternate;g!==null&&(g=g.updateQueue,o=g.lastBaseUpdate,o!==r&&(o===null?g.firstBaseUpdate=h:o.next=h,g.lastBaseUpdate=a))}if(l!==null){var p=s.baseState;r=0,g=h=a=null,o=l;do{var m=o.lane,w=o.eventTime;if((t&m)===m){g!==null&&(g=g.next={eventTime:w,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var k=e,v=o;switch(m=n,w=i,v.tag){case 1:if(k=v.payload,typeof k=="function"){p=k.call(w,p,m);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=v.payload,m=typeof k=="function"?k.call(w,p,m):k,m==null)break e;p=Q({},p,m);break e;case 2:sn=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=s.effects,m===null?s.effects=[o]:m.push(o))}else w={eventTime:w,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},g===null?(h=g=w,a=p):g=g.next=w,r|=m;if(o=o.next,o===null){if(o=s.shared.pending,o===null)break;m=o,o=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(g===null&&(a=p),s.baseState=a,s.firstBaseUpdate=h,s.lastBaseUpdate=g,n=s.shared.interleaved,n!==null){s=n;do r|=s.lane,s=s.next;while(s!==n)}else l===null&&(s.shared.lanes=0);Rn|=r,e.lanes=r,e.memoizedState=p}}function Bo(e,n,i){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var t=e[n],s=t.callback;if(s!==null){if(t.callback=null,t=i,typeof s!="function")throw Error(b(191,s));s.call(t)}}}var ut={},Ve=xn(ut),Zi=xn(ut),et=xn(ut);function Wn(e){if(e===ut)throw Error(b(174));return e}function Wr(e,n){switch(R(et,n),R(Zi,e),R(Ve,ut),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:kl(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=kl(n,e)}H(Ve),R(Ve,n)}function gi(){H(Ve),H(Zi),H(et)}function Dh(e){Wn(et.current);var n=Wn(Ve.current),i=kl(n,e.type);n!==i&&(R(Zi,e),R(Ve,i))}function _r(e){Zi.current===e&&(H(Ve),H(Zi))}var $=xn(0);function hs(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var nl=[];function Lr(){for(var e=0;e<nl.length;e++)nl[e]._workInProgressVersionPrimary=null;nl.length=0}var Ot=en.ReactCurrentDispatcher,il=en.ReactCurrentBatchConfig,On=0,G=null,Z=null,ie=null,cs=!1,Di=!1,nt=0,Up=0;function oe(){throw Error(b(321))}function Ar(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!Oe(e[i],n[i]))return!1;return!0}function Fr(e,n,i,t,s,l){if(On=l,G=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ot.current=e===null||e.memoizedState===null?Qp:Yp,e=i(t,s),Di){l=0;do{if(Di=!1,nt=0,25<=l)throw Error(b(301));l+=1,ie=Z=null,n.updateQueue=null,Ot.current=Kp,e=i(t,s)}while(Di)}if(Ot.current=us,n=Z!==null&&Z.next!==null,On=0,ie=Z=G=null,cs=!1,n)throw Error(b(300));return e}function Dr(){var e=nt!==0;return nt=0,e}function Be(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ie===null?G.memoizedState=ie=e:ie=ie.next=e,ie}function Pe(){if(Z===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=Z.next;var n=ie===null?G.memoizedState:ie.next;if(n!==null)ie=n,Z=e;else{if(e===null)throw Error(b(310));Z=e,e={memoizedState:Z.memoizedState,baseState:Z.baseState,baseQueue:Z.baseQueue,queue:Z.queue,next:null},ie===null?G.memoizedState=ie=e:ie=ie.next=e}return ie}function it(e,n){return typeof n=="function"?n(e):n}function tl(e){var n=Pe(),i=n.queue;if(i===null)throw Error(b(311));i.lastRenderedReducer=e;var t=Z,s=t.baseQueue,l=i.pending;if(l!==null){if(s!==null){var r=s.next;s.next=l.next,l.next=r}t.baseQueue=s=l,i.pending=null}if(s!==null){l=s.next,t=t.baseState;var o=r=null,a=null,h=l;do{var g=h.lane;if((On&g)===g)a!==null&&(a=a.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),t=h.hasEagerState?h.eagerState:e(t,h.action);else{var p={lane:g,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};a===null?(o=a=p,r=t):a=a.next=p,G.lanes|=g,Rn|=g}h=h.next}while(h!==null&&h!==l);a===null?r=t:a.next=o,Oe(t,n.memoizedState)||(fe=!0),n.memoizedState=t,n.baseState=r,n.baseQueue=a,i.lastRenderedState=t}if(e=i.interleaved,e!==null){s=e;do l=s.lane,G.lanes|=l,Rn|=l,s=s.next;while(s!==e)}else s===null&&(i.lanes=0);return[n.memoizedState,i.dispatch]}function sl(e){var n=Pe(),i=n.queue;if(i===null)throw Error(b(311));i.lastRenderedReducer=e;var t=i.dispatch,s=i.pending,l=n.memoizedState;if(s!==null){i.pending=null;var r=s=s.next;do l=e(l,r.action),r=r.next;while(r!==s);Oe(l,n.memoizedState)||(fe=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),i.lastRenderedState=l}return[l,t]}function Oh(){}function Rh(e,n){var i=G,t=Pe(),s=n(),l=!Oe(t.memoizedState,s);if(l&&(t.memoizedState=s,fe=!0),t=t.queue,Or(Uh.bind(null,i,t,e),[e]),t.getSnapshot!==n||l||ie!==null&&ie.memoizedState.tag&1){if(i.flags|=2048,tt(9,Hh.bind(null,i,t,s,n),void 0,null),te===null)throw Error(b(349));On&30||Bh(i,n,s)}return s}function Bh(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=G.updateQueue,n===null?(n={lastEffect:null,stores:null},G.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function Hh(e,n,i,t){n.value=i,n.getSnapshot=t,Vh(n)&&$h(e)}function Uh(e,n,i){return i(function(){Vh(n)&&$h(e)})}function Vh(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!Oe(e,i)}catch{return!0}}function $h(e){var n=qe(e,1);n!==null&&De(n,e,1,-1)}function Ho(e){var n=Be();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:it,lastRenderedState:e},n.queue=e,e=e.dispatch=Gp.bind(null,G,e),[n.memoizedState,e]}function tt(e,n,i,t){return e={tag:e,create:n,destroy:i,deps:t,next:null},n=G.updateQueue,n===null?(n={lastEffect:null,stores:null},G.updateQueue=n,n.lastEffect=e.next=e):(i=n.lastEffect,i===null?n.lastEffect=e.next=e:(t=i.next,i.next=e,e.next=t,n.lastEffect=e)),e}function Gh(){return Pe().memoizedState}function Rt(e,n,i,t){var s=Be();G.flags|=e,s.memoizedState=tt(1|n,i,void 0,t===void 0?null:t)}function Is(e,n,i,t){var s=Pe();t=t===void 0?null:t;var l=void 0;if(Z!==null){var r=Z.memoizedState;if(l=r.destroy,t!==null&&Ar(t,r.deps)){s.memoizedState=tt(n,i,l,t);return}}G.flags|=e,s.memoizedState=tt(1|n,i,l,t)}function Uo(e,n){return Rt(8390656,8,e,n)}function Or(e,n){return Is(2048,8,e,n)}function Qh(e,n){return Is(4,2,e,n)}function Yh(e,n){return Is(4,4,e,n)}function Kh(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Jh(e,n,i){return i=i!=null?i.concat([e]):null,Is(4,4,Kh.bind(null,n,e),i)}function Rr(){}function Xh(e,n){var i=Pe();n=n===void 0?null:n;var t=i.memoizedState;return t!==null&&n!==null&&Ar(n,t[1])?t[0]:(i.memoizedState=[e,n],e)}function qh(e,n){var i=Pe();n=n===void 0?null:n;var t=i.memoizedState;return t!==null&&n!==null&&Ar(n,t[1])?t[0]:(e=e(),i.memoizedState=[e,n],e)}function Zh(e,n,i){return On&21?(Oe(i,n)||(i=sh(),G.lanes|=i,Rn|=i,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,fe=!0),e.memoizedState=i)}function Vp(e,n){var i=O;O=i!==0&&4>i?i:4,e(!0);var t=il.transition;il.transition={};try{e(!1),n()}finally{O=i,il.transition=t}}function ec(){return Pe().memoizedState}function $p(e,n,i){var t=yn(e);if(i={lane:t,action:i,hasEagerState:!1,eagerState:null,next:null},nc(e))ic(n,i);else if(i=Ah(e,n,i,t),i!==null){var s=pe();De(i,e,t,s),tc(i,n,t)}}function Gp(e,n,i){var t=yn(e),s={lane:t,action:i,hasEagerState:!1,eagerState:null,next:null};if(nc(e))ic(n,s);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var r=n.lastRenderedState,o=l(r,i);if(s.hasEagerState=!0,s.eagerState=o,Oe(o,r)){var a=n.interleaved;a===null?(s.next=s,Nr(n)):(s.next=a.next,a.next=s),n.interleaved=s;return}}catch{}finally{}i=Ah(e,n,s,t),i!==null&&(s=pe(),De(i,e,t,s),tc(i,n,t))}}function nc(e){var n=e.alternate;return e===G||n!==null&&n===G}function ic(e,n){Di=cs=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function tc(e,n,i){if(i&4194240){var t=n.lanes;t&=e.pendingLanes,i|=t,n.lanes=i,yr(e,i)}}var us={readContext:Ne,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useInsertionEffect:oe,useLayoutEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useMutableSource:oe,useSyncExternalStore:oe,useId:oe,unstable_isNewReconciler:!1},Qp={readContext:Ne,useCallback:function(e,n){return Be().memoizedState=[e,n===void 0?null:n],e},useContext:Ne,useEffect:Uo,useImperativeHandle:function(e,n,i){return i=i!=null?i.concat([e]):null,Rt(4194308,4,Kh.bind(null,n,e),i)},useLayoutEffect:function(e,n){return Rt(4194308,4,e,n)},useInsertionEffect:function(e,n){return Rt(4,2,e,n)},useMemo:function(e,n){var i=Be();return n=n===void 0?null:n,e=e(),i.memoizedState=[e,n],e},useReducer:function(e,n,i){var t=Be();return n=i!==void 0?i(n):n,t.memoizedState=t.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},t.queue=e,e=e.dispatch=$p.bind(null,G,e),[t.memoizedState,e]},useRef:function(e){var n=Be();return e={current:e},n.memoizedState=e},useState:Ho,useDebugValue:Rr,useDeferredValue:function(e){return Be().memoizedState=e},useTransition:function(){var e=Ho(!1),n=e[0];return e=Vp.bind(null,e[1]),Be().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,i){var t=G,s=Be();if(U){if(i===void 0)throw Error(b(407));i=i()}else{if(i=n(),te===null)throw Error(b(349));On&30||Bh(t,n,i)}s.memoizedState=i;var l={value:i,getSnapshot:n};return s.queue=l,Uo(Uh.bind(null,t,l,e),[e]),t.flags|=2048,tt(9,Hh.bind(null,t,l,i,n),void 0,null),i},useId:function(){var e=Be(),n=te.identifierPrefix;if(U){var i=Ye,t=Qe;i=(t&~(1<<32-Fe(t)-1)).toString(32)+i,n=":"+n+"R"+i,i=nt++,0<i&&(n+="H"+i.toString(32)),n+=":"}else i=Up++,n=":"+n+"r"+i.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Yp={readContext:Ne,useCallback:Xh,useContext:Ne,useEffect:Or,useImperativeHandle:Jh,useInsertionEffect:Qh,useLayoutEffect:Yh,useMemo:qh,useReducer:tl,useRef:Gh,useState:function(){return tl(it)},useDebugValue:Rr,useDeferredValue:function(e){var n=Pe();return Zh(n,Z.memoizedState,e)},useTransition:function(){var e=tl(it)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:Oh,useSyncExternalStore:Rh,useId:ec,unstable_isNewReconciler:!1},Kp={readContext:Ne,useCallback:Xh,useContext:Ne,useEffect:Or,useImperativeHandle:Jh,useInsertionEffect:Qh,useLayoutEffect:Yh,useMemo:qh,useReducer:sl,useRef:Gh,useState:function(){return sl(it)},useDebugValue:Rr,useDeferredValue:function(e){var n=Pe();return Z===null?n.memoizedState=e:Zh(n,Z.memoizedState,e)},useTransition:function(){var e=sl(it)[0],n=Pe().memoizedState;return[e,n]},useMutableSource:Oh,useSyncExternalStore:Rh,useId:ec,unstable_isNewReconciler:!1};function _e(e,n){if(e&&e.defaultProps){n=Q({},n),e=e.defaultProps;for(var i in e)n[i]===void 0&&(n[i]=e[i]);return n}return n}function Bl(e,n,i,t){n=e.memoizedState,i=i(t,n),i=i==null?n:Q({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Ss={isMounted:function(e){return(e=e._reactInternals)?Un(e)===e:!1},enqueueSetState:function(e,n,i){e=e._reactInternals;var t=pe(),s=yn(e),l=Ke(t,s);l.payload=n,i!=null&&(l.callback=i),n=mn(e,l,s),n!==null&&(De(n,e,s,t),Dt(n,e,s))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var t=pe(),s=yn(e),l=Ke(t,s);l.tag=1,l.payload=n,i!=null&&(l.callback=i),n=mn(e,l,s),n!==null&&(De(n,e,s,t),Dt(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=pe(),t=yn(e),s=Ke(i,t);s.tag=2,n!=null&&(s.callback=n),n=mn(e,s,t),n!==null&&(De(n,e,t,i),Dt(n,e,t))}};function Vo(e,n,i,t,s,l,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(t,l,r):n.prototype&&n.prototype.isPureReactComponent?!Ki(i,t)||!Ki(s,l):!0}function sc(e,n,i){var t=!1,s=kn,l=n.contextType;return typeof l=="object"&&l!==null?l=Ne(l):(s=ve(n)?Fn:ce.current,t=n.contextTypes,l=(t=t!=null)?ui(e,s):kn),n=new n(i,l),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Ss,e.stateNode=n,n._reactInternals=e,t&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=l),n}function $o(e,n,i,t){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,t),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,t),n.state!==e&&Ss.enqueueReplaceState(n,n.state,null)}function Hl(e,n,i,t){var s=e.stateNode;s.props=i,s.state=e.memoizedState,s.refs={},Pr(e);var l=n.contextType;typeof l=="object"&&l!==null?s.context=Ne(l):(l=ve(n)?Fn:ce.current,s.context=ui(e,l)),s.state=e.memoizedState,l=n.getDerivedStateFromProps,typeof l=="function"&&(Bl(e,n,l,i),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(n=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),n!==s.state&&Ss.enqueueReplaceState(s,s.state,null),as(e,i,s,t),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function mi(e,n){try{var i="",t=n;do i+=Tu(t),t=t.return;while(t);var s=i}catch(l){s=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:n,stack:s,digest:null}}function ll(e,n,i){return{value:e,source:null,stack:i??null,digest:n??null}}function Ul(e,n){try{console.error(n.value)}catch(i){setTimeout(function(){throw i})}}var Jp=typeof WeakMap=="function"?WeakMap:Map;function lc(e,n,i){i=Ke(-1,i),i.tag=3,i.payload={element:null};var t=n.value;return i.callback=function(){ds||(ds=!0,Zl=t),Ul(e,n)},i}function rc(e,n,i){i=Ke(-1,i),i.tag=3;var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var s=n.value;i.payload=function(){return t(s)},i.callback=function(){Ul(e,n)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(i.callback=function(){Ul(e,n),typeof t!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var r=n.stack;this.componentDidCatch(n.value,{componentStack:r!==null?r:""})}),i}function Go(e,n,i){var t=e.pingCache;if(t===null){t=e.pingCache=new Jp;var s=new Set;t.set(n,s)}else s=t.get(n),s===void 0&&(s=new Set,t.set(n,s));s.has(i)||(s.add(i),e=cd.bind(null,e,n,i),n.then(e,e))}function Qo(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Yo(e,n,i,t,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===n?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(n=Ke(-1,1),n.tag=2,mn(i,n,1))),i.lanes|=1),e)}var Xp=en.ReactCurrentOwner,fe=!1;function ue(e,n,i,t){n.child=e===null?Lh(n,null,i,t):di(n,e.child,i,t)}function Ko(e,n,i,t,s){i=i.render;var l=n.ref;return ai(n,s),t=Fr(e,n,i,t,l,s),i=Dr(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,Ze(e,n,s)):(U&&i&&Sr(n),n.flags|=1,ue(e,n,t,s),n.child)}function Jo(e,n,i,t,s){if(e===null){var l=i.type;return typeof l=="function"&&!Yr(l)&&l.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(n.tag=15,n.type=l,oc(e,n,l,t,s)):(e=Vt(i.type,null,t,n,n.mode,s),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!(e.lanes&s)){var r=l.memoizedProps;if(i=i.compare,i=i!==null?i:Ki,i(r,t)&&e.ref===n.ref)return Ze(e,n,s)}return n.flags|=1,e=vn(l,t),e.ref=n.ref,e.return=n,n.child=e}function oc(e,n,i,t,s){if(e!==null){var l=e.memoizedProps;if(Ki(l,t)&&e.ref===n.ref)if(fe=!1,n.pendingProps=t=l,(e.lanes&s)!==0)e.flags&131072&&(fe=!0);else return n.lanes=e.lanes,Ze(e,n,s)}return Vl(e,n,i,t,s)}function ac(e,n,i){var t=n.pendingProps,s=t.children,l=e!==null?e.memoizedState:null;if(t.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},R(ti,be),be|=i;else{if(!(i&1073741824))return e=l!==null?l.baseLanes|i:i,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,R(ti,be),be|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},t=l!==null?l.baseLanes:i,R(ti,be),be|=t}else l!==null?(t=l.baseLanes|i,n.memoizedState=null):t=i,R(ti,be),be|=t;return ue(e,n,s,i),n.child}function hc(e,n){var i=n.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(n.flags|=512,n.flags|=2097152)}function Vl(e,n,i,t,s){var l=ve(i)?Fn:ce.current;return l=ui(n,l),ai(n,s),i=Fr(e,n,i,t,l,s),t=Dr(),e!==null&&!fe?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~s,Ze(e,n,s)):(U&&t&&Sr(n),n.flags|=1,ue(e,n,i,s),n.child)}function Xo(e,n,i,t,s){if(ve(i)){var l=!0;ts(n)}else l=!1;if(ai(n,s),n.stateNode===null)Bt(e,n),sc(n,i,t),Hl(n,i,t,s),t=!0;else if(e===null){var r=n.stateNode,o=n.memoizedProps;r.props=o;var a=r.context,h=i.contextType;typeof h=="object"&&h!==null?h=Ne(h):(h=ve(i)?Fn:ce.current,h=ui(n,h));var g=i.getDerivedStateFromProps,p=typeof g=="function"||typeof r.getSnapshotBeforeUpdate=="function";p||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==t||a!==h)&&$o(n,r,t,h),sn=!1;var m=n.memoizedState;r.state=m,as(n,t,r,s),a=n.memoizedState,o!==t||m!==a||ye.current||sn?(typeof g=="function"&&(Bl(n,i,g,t),a=n.memoizedState),(o=sn||Vo(n,i,o,t,m,a,h))?(p||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(n.flags|=4194308)):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=t,n.memoizedState=a),r.props=t,r.state=a,r.context=h,t=o):(typeof r.componentDidMount=="function"&&(n.flags|=4194308),t=!1)}else{r=n.stateNode,Fh(e,n),o=n.memoizedProps,h=n.type===n.elementType?o:_e(n.type,o),r.props=h,p=n.pendingProps,m=r.context,a=i.contextType,typeof a=="object"&&a!==null?a=Ne(a):(a=ve(i)?Fn:ce.current,a=ui(n,a));var w=i.getDerivedStateFromProps;(g=typeof w=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(o!==p||m!==a)&&$o(n,r,t,a),sn=!1,m=n.memoizedState,r.state=m,as(n,t,r,s);var k=n.memoizedState;o!==p||m!==k||ye.current||sn?(typeof w=="function"&&(Bl(n,i,w,t),k=n.memoizedState),(h=sn||Vo(n,i,h,t,m,k,a)||!1)?(g||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(t,k,a),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(t,k,a)),typeof r.componentDidUpdate=="function"&&(n.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=t,n.memoizedState=k),r.props=t,r.state=k,r.context=a,t=h):(typeof r.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),t=!1)}return $l(e,n,i,t,l,s)}function $l(e,n,i,t,s,l){hc(e,n);var r=(n.flags&128)!==0;if(!t&&!r)return s&&Ao(n,i,!1),Ze(e,n,l);t=n.stateNode,Xp.current=n;var o=r&&typeof i.getDerivedStateFromError!="function"?null:t.render();return n.flags|=1,e!==null&&r?(n.child=di(n,e.child,null,l),n.child=di(n,null,o,l)):ue(e,n,o,l),n.memoizedState=t.state,s&&Ao(n,i,!0),n.child}function cc(e){var n=e.stateNode;n.pendingContext?Lo(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Lo(e,n.context,!1),Wr(e,n.containerInfo)}function qo(e,n,i,t,s){return pi(),jr(s),n.flags|=256,ue(e,n,i,t),n.child}var Gl={dehydrated:null,treeContext:null,retryLane:0};function Ql(e){return{baseLanes:e,cachePool:null,transitions:null}}function uc(e,n,i){var t=n.pendingProps,s=$.current,l=!1,r=(n.flags&128)!==0,o;if((o=r)||(o=e!==null&&e.memoizedState===null?!1:(s&2)!==0),o?(l=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),R($,s&1),e===null)return Ol(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(r=t.children,e=t.fallback,l?(t=n.mode,l=n.child,r={mode:"hidden",children:r},!(t&1)&&l!==null?(l.childLanes=0,l.pendingProps=r):l=Es(r,t,0,null),e=Ln(e,t,i,null),l.return=n,e.return=n,l.sibling=e,n.child=l,n.child.memoizedState=Ql(i),n.memoizedState=Gl,e):Br(n,r));if(s=e.memoizedState,s!==null&&(o=s.dehydrated,o!==null))return qp(e,n,r,t,o,s,i);if(l){l=t.fallback,r=n.mode,s=e.child,o=s.sibling;var a={mode:"hidden",children:t.children};return!(r&1)&&n.child!==s?(t=n.child,t.childLanes=0,t.pendingProps=a,n.deletions=null):(t=vn(s,a),t.subtreeFlags=s.subtreeFlags&14680064),o!==null?l=vn(o,l):(l=Ln(l,r,i,null),l.flags|=2),l.return=n,t.return=n,t.sibling=l,n.child=t,t=l,l=n.child,r=e.child.memoizedState,r=r===null?Ql(i):{baseLanes:r.baseLanes|i,cachePool:null,transitions:r.transitions},l.memoizedState=r,l.childLanes=e.childLanes&~i,n.memoizedState=Gl,t}return l=e.child,e=l.sibling,t=vn(l,{mode:"visible",children:t.children}),!(n.mode&1)&&(t.lanes=i),t.return=n,t.sibling=null,e!==null&&(i=n.deletions,i===null?(n.deletions=[e],n.flags|=16):i.push(e)),n.child=t,n.memoizedState=null,t}function Br(e,n){return n=Es({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Mt(e,n,i,t){return t!==null&&jr(t),di(n,e.child,null,i),e=Br(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function qp(e,n,i,t,s,l,r){if(i)return n.flags&256?(n.flags&=-257,t=ll(Error(b(422))),Mt(e,n,r,t)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(l=t.fallback,s=n.mode,t=Es({mode:"visible",children:t.children},s,0,null),l=Ln(l,s,r,null),l.flags|=2,t.return=n,l.return=n,t.sibling=l,n.child=t,n.mode&1&&di(n,e.child,null,r),n.child.memoizedState=Ql(r),n.memoizedState=Gl,l);if(!(n.mode&1))return Mt(e,n,r,null);if(s.data==="$!"){if(t=s.nextSibling&&s.nextSibling.dataset,t)var o=t.dgst;return t=o,l=Error(b(419)),t=ll(l,t,void 0),Mt(e,n,r,t)}if(o=(r&e.childLanes)!==0,fe||o){if(t=te,t!==null){switch(r&-r){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(t.suspendedLanes|r)?0:s,s!==0&&s!==l.retryLane&&(l.retryLane=s,qe(e,s),De(t,e,s,-1))}return Qr(),t=ll(Error(b(421))),Mt(e,n,r,t)}return s.data==="$?"?(n.flags|=128,n.child=e.child,n=ud.bind(null,e),s._reactRetry=n,null):(e=l.treeContext,xe=gn(s.nextSibling),Te=n,U=!0,Ae=null,e!==null&&(je[Ee++]=Qe,je[Ee++]=Ye,je[Ee++]=Dn,Qe=e.id,Ye=e.overflow,Dn=n),n=Br(n,t.children),n.flags|=4096,n)}function Zo(e,n,i){e.lanes|=n;var t=e.alternate;t!==null&&(t.lanes|=n),Rl(e.return,n,i)}function rl(e,n,i,t,s){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:t,tail:i,tailMode:s}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=t,l.tail=i,l.tailMode=s)}function pc(e,n,i){var t=n.pendingProps,s=t.revealOrder,l=t.tail;if(ue(e,n,t.children,i),t=$.current,t&2)t=t&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zo(e,i,n);else if(e.tag===19)Zo(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}t&=1}if(R($,t),!(n.mode&1))n.memoizedState=null;else switch(s){case"forwards":for(i=n.child,s=null;i!==null;)e=i.alternate,e!==null&&hs(e)===null&&(s=i),i=i.sibling;i=s,i===null?(s=n.child,n.child=null):(s=i.sibling,i.sibling=null),rl(n,!1,s,i,l);break;case"backwards":for(i=null,s=n.child,n.child=null;s!==null;){if(e=s.alternate,e!==null&&hs(e)===null){n.child=s;break}e=s.sibling,s.sibling=i,i=s,s=e}rl(n,!0,i,null,l);break;case"together":rl(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Bt(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Ze(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),Rn|=n.lanes,!(i&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(b(153));if(n.child!==null){for(e=n.child,i=vn(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=vn(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function Zp(e,n,i){switch(n.tag){case 3:cc(n),pi();break;case 5:Dh(n);break;case 1:ve(n.type)&&ts(n);break;case 4:Wr(n,n.stateNode.containerInfo);break;case 10:var t=n.type._context,s=n.memoizedProps.value;R(rs,t._currentValue),t._currentValue=s;break;case 13:if(t=n.memoizedState,t!==null)return t.dehydrated!==null?(R($,$.current&1),n.flags|=128,null):i&n.child.childLanes?uc(e,n,i):(R($,$.current&1),e=Ze(e,n,i),e!==null?e.sibling:null);R($,$.current&1);break;case 19:if(t=(i&n.childLanes)!==0,e.flags&128){if(t)return pc(e,n,i);n.flags|=128}if(s=n.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),R($,$.current),t)break;return null;case 22:case 23:return n.lanes=0,ac(e,n,i)}return Ze(e,n,i)}var dc,Yl,gc,mc;dc=function(e,n){for(var i=n.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return;i=i.return}i.sibling.return=i.return,i=i.sibling}};Yl=function(){};gc=function(e,n,i,t){var s=e.memoizedProps;if(s!==t){e=n.stateNode,Wn(Ve.current);var l=null;switch(i){case"input":s=fl(e,s),t=fl(e,t),l=[];break;case"select":s=Q({},s,{value:void 0}),t=Q({},t,{value:void 0}),l=[];break;case"textarea":s=wl(e,s),t=wl(e,t),l=[];break;default:typeof s.onClick!="function"&&typeof t.onClick=="function"&&(e.onclick=ns)}bl(i,t);var r;i=null;for(h in s)if(!t.hasOwnProperty(h)&&s.hasOwnProperty(h)&&s[h]!=null)if(h==="style"){var o=s[h];for(r in o)o.hasOwnProperty(r)&&(i||(i={}),i[r]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Hi.hasOwnProperty(h)?l||(l=[]):(l=l||[]).push(h,null));for(h in t){var a=t[h];if(o=s!=null?s[h]:void 0,t.hasOwnProperty(h)&&a!==o&&(a!=null||o!=null))if(h==="style")if(o){for(r in o)!o.hasOwnProperty(r)||a&&a.hasOwnProperty(r)||(i||(i={}),i[r]="");for(r in a)a.hasOwnProperty(r)&&o[r]!==a[r]&&(i||(i={}),i[r]=a[r])}else i||(l||(l=[]),l.push(h,i)),i=a;else h==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,o=o?o.__html:void 0,a!=null&&o!==a&&(l=l||[]).push(h,a)):h==="children"?typeof a!="string"&&typeof a!="number"||(l=l||[]).push(h,""+a):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Hi.hasOwnProperty(h)?(a!=null&&h==="onScroll"&&B("scroll",e),l||o===a||(l=[])):(l=l||[]).push(h,a))}i&&(l=l||[]).push("style",i);var h=l;(n.updateQueue=h)&&(n.flags|=4)}};mc=function(e,n,i,t){i!==t&&(n.flags|=4)};function ji(e,n){if(!U)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var t=null;i!==null;)i.alternate!==null&&(t=i),i=i.sibling;t===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:t.sibling=null}}function ae(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,t=0;if(n)for(var s=e.child;s!==null;)i|=s.lanes|s.childLanes,t|=s.subtreeFlags&14680064,t|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)i|=s.lanes|s.childLanes,t|=s.subtreeFlags,t|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=t,e.childLanes=i,n}function ed(e,n,i){var t=n.pendingProps;switch(Cr(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ae(n),null;case 1:return ve(n.type)&&is(),ae(n),null;case 3:return t=n.stateNode,gi(),H(ye),H(ce),Lr(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(jt(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Ae!==null&&(ir(Ae),Ae=null))),Yl(e,n),ae(n),null;case 5:_r(n);var s=Wn(et.current);if(i=n.type,e!==null&&n.stateNode!=null)gc(e,n,i,t,s),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!t){if(n.stateNode===null)throw Error(b(166));return ae(n),null}if(e=Wn(Ve.current),jt(n)){t=n.stateNode,i=n.type;var l=n.memoizedProps;switch(t[He]=n,t[qi]=l,e=(n.mode&1)!==0,i){case"dialog":B("cancel",t),B("close",t);break;case"iframe":case"object":case"embed":B("load",t);break;case"video":case"audio":for(s=0;s<Pi.length;s++)B(Pi[s],t);break;case"source":B("error",t);break;case"img":case"image":case"link":B("error",t),B("load",t);break;case"details":B("toggle",t);break;case"input":oo(t,l),B("invalid",t);break;case"select":t._wrapperState={wasMultiple:!!l.multiple},B("invalid",t);break;case"textarea":ho(t,l),B("invalid",t)}bl(i,l),s=null;for(var r in l)if(l.hasOwnProperty(r)){var o=l[r];r==="children"?typeof o=="string"?t.textContent!==o&&(l.suppressHydrationWarning!==!0&&Ct(t.textContent,o,e),s=["children",o]):typeof o=="number"&&t.textContent!==""+o&&(l.suppressHydrationWarning!==!0&&Ct(t.textContent,o,e),s=["children",""+o]):Hi.hasOwnProperty(r)&&o!=null&&r==="onScroll"&&B("scroll",t)}switch(i){case"input":vt(t),ao(t,l,!0);break;case"textarea":vt(t),co(t);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(t.onclick=ns)}t=s,n.updateQueue=t,t!==null&&(n.flags|=4)}else{r=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ua(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=r.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof t.is=="string"?e=r.createElement(i,{is:t.is}):(e=r.createElement(i),i==="select"&&(r=e,t.multiple?r.multiple=!0:t.size&&(r.size=t.size))):e=r.createElementNS(e,i),e[He]=n,e[qi]=t,dc(e,n,!1,!1),n.stateNode=e;e:{switch(r=xl(i,t),i){case"dialog":B("cancel",e),B("close",e),s=t;break;case"iframe":case"object":case"embed":B("load",e),s=t;break;case"video":case"audio":for(s=0;s<Pi.length;s++)B(Pi[s],e);s=t;break;case"source":B("error",e),s=t;break;case"img":case"image":case"link":B("error",e),B("load",e),s=t;break;case"details":B("toggle",e),s=t;break;case"input":oo(e,t),s=fl(e,t),B("invalid",e);break;case"option":s=t;break;case"select":e._wrapperState={wasMultiple:!!t.multiple},s=Q({},t,{value:void 0}),B("invalid",e);break;case"textarea":ho(e,t),s=wl(e,t),B("invalid",e);break;default:s=t}bl(i,s),o=s;for(l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="style"?Ga(e,a):l==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Va(e,a)):l==="children"?typeof a=="string"?(i!=="textarea"||a!=="")&&Ui(e,a):typeof a=="number"&&Ui(e,""+a):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Hi.hasOwnProperty(l)?a!=null&&l==="onScroll"&&B("scroll",e):a!=null&&ur(e,l,a,r))}switch(i){case"input":vt(e),ao(e,t,!1);break;case"textarea":vt(e),co(e);break;case"option":t.value!=null&&e.setAttribute("value",""+wn(t.value));break;case"select":e.multiple=!!t.multiple,l=t.value,l!=null?si(e,!!t.multiple,l,!1):t.defaultValue!=null&&si(e,!!t.multiple,t.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=ns)}switch(i){case"button":case"input":case"select":case"textarea":t=!!t.autoFocus;break e;case"img":t=!0;break e;default:t=!1}}t&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ae(n),null;case 6:if(e&&n.stateNode!=null)mc(e,n,e.memoizedProps,t);else{if(typeof t!="string"&&n.stateNode===null)throw Error(b(166));if(i=Wn(et.current),Wn(Ve.current),jt(n)){if(t=n.stateNode,i=n.memoizedProps,t[He]=n,(l=t.nodeValue!==i)&&(e=Te,e!==null))switch(e.tag){case 3:Ct(t.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ct(t.nodeValue,i,(e.mode&1)!==0)}l&&(n.flags|=4)}else t=(i.nodeType===9?i:i.ownerDocument).createTextNode(t),t[He]=n,n.stateNode=t}return ae(n),null;case 13:if(H($),t=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&xe!==null&&n.mode&1&&!(n.flags&128))Wh(),pi(),n.flags|=98560,l=!1;else if(l=jt(n),t!==null&&t.dehydrated!==null){if(e===null){if(!l)throw Error(b(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(b(317));l[He]=n}else pi(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;ae(n),l=!1}else Ae!==null&&(ir(Ae),Ae=null),l=!0;if(!l)return n.flags&65536?n:null}return n.flags&128?(n.lanes=i,n):(t=t!==null,t!==(e!==null&&e.memoizedState!==null)&&t&&(n.child.flags|=8192,n.mode&1&&(e===null||$.current&1?ee===0&&(ee=3):Qr())),n.updateQueue!==null&&(n.flags|=4),ae(n),null);case 4:return gi(),Yl(e,n),e===null&&Ji(n.stateNode.containerInfo),ae(n),null;case 10:return zr(n.type._context),ae(n),null;case 17:return ve(n.type)&&is(),ae(n),null;case 19:if(H($),l=n.memoizedState,l===null)return ae(n),null;if(t=(n.flags&128)!==0,r=l.rendering,r===null)if(t)ji(l,!1);else{if(ee!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(r=hs(e),r!==null){for(n.flags|=128,ji(l,!1),t=r.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),n.subtreeFlags=0,t=i,i=n.child;i!==null;)l=i,e=t,l.flags&=14680066,r=l.alternate,r===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=r.childLanes,l.lanes=r.lanes,l.child=r.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=r.memoizedProps,l.memoizedState=r.memoizedState,l.updateQueue=r.updateQueue,l.type=r.type,e=r.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return R($,$.current&1|2),n.child}e=e.sibling}l.tail!==null&&J()>fi&&(n.flags|=128,t=!0,ji(l,!1),n.lanes=4194304)}else{if(!t)if(e=hs(r),e!==null){if(n.flags|=128,t=!0,i=e.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),ji(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!U)return ae(n),null}else 2*J()-l.renderingStartTime>fi&&i!==1073741824&&(n.flags|=128,t=!0,ji(l,!1),n.lanes=4194304);l.isBackwards?(r.sibling=n.child,n.child=r):(i=l.last,i!==null?i.sibling=r:n.child=r,l.last=r)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=J(),n.sibling=null,i=$.current,R($,t?i&1|2:i&1),n):(ae(n),null);case 22:case 23:return Gr(),t=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==t&&(n.flags|=8192),t&&n.mode&1?be&1073741824&&(ae(n),n.subtreeFlags&6&&(n.flags|=8192)):ae(n),null;case 24:return null;case 25:return null}throw Error(b(156,n.tag))}function nd(e,n){switch(Cr(n),n.tag){case 1:return ve(n.type)&&is(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return gi(),H(ye),H(ce),Lr(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return _r(n),null;case 13:if(H($),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(b(340));pi()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return H($),null;case 4:return gi(),null;case 10:return zr(n.type._context),null;case 22:case 23:return Gr(),null;case 24:return null;default:return null}}var zt=!1,he=!1,id=typeof WeakSet=="function"?WeakSet:Set,C=null;function ii(e,n){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(t){Y(e,n,t)}else i.current=null}function Kl(e,n,i){try{i()}catch(t){Y(e,n,t)}}var ea=!1;function td(e,n){if(Pl=qt,e=kh(),Ir(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var t=i.getSelection&&i.getSelection();if(t&&t.rangeCount!==0){i=t.anchorNode;var s=t.anchorOffset,l=t.focusNode;t=t.focusOffset;try{i.nodeType,l.nodeType}catch{i=null;break e}var r=0,o=-1,a=-1,h=0,g=0,p=e,m=null;n:for(;;){for(var w;p!==i||s!==0&&p.nodeType!==3||(o=r+s),p!==l||t!==0&&p.nodeType!==3||(a=r+t),p.nodeType===3&&(r+=p.nodeValue.length),(w=p.firstChild)!==null;)m=p,p=w;for(;;){if(p===e)break n;if(m===i&&++h===s&&(o=r),m===l&&++g===t&&(a=r),(w=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=w}i=o===-1||a===-1?null:{start:o,end:a}}else i=null}i=i||{start:0,end:0}}else i=null;for(Wl={focusedElem:e,selectionRange:i},qt=!1,C=n;C!==null;)if(n=C,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,C=e;else for(;C!==null;){n=C;try{var k=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var v=k.memoizedProps,I=k.memoizedState,u=n.stateNode,c=u.getSnapshotBeforeUpdate(n.elementType===n.type?v:_e(n.type,v),I);u.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=n.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(y){Y(n,n.return,y)}if(e=n.sibling,e!==null){e.return=n.return,C=e;break}C=n.return}return k=ea,ea=!1,k}function Oi(e,n,i){var t=n.updateQueue;if(t=t!==null?t.lastEffect:null,t!==null){var s=t=t.next;do{if((s.tag&e)===e){var l=s.destroy;s.destroy=void 0,l!==void 0&&Kl(n,i,l)}s=s.next}while(s!==t)}}function Cs(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var t=i.create;i.destroy=t()}i=i.next}while(i!==n)}}function Jl(e){var n=e.ref;if(n!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof n=="function"?n(e):n.current=e}}function fc(e){var n=e.alternate;n!==null&&(e.alternate=null,fc(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[He],delete n[qi],delete n[Al],delete n[Op],delete n[Rp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yc(e){return e.tag===5||e.tag===3||e.tag===4}function na(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xl(e,n,i){var t=e.tag;if(t===5||t===6)e=e.stateNode,n?i.nodeType===8?i.parentNode.insertBefore(e,n):i.insertBefore(e,n):(i.nodeType===8?(n=i.parentNode,n.insertBefore(e,i)):(n=i,n.appendChild(e)),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=ns));else if(t!==4&&(e=e.child,e!==null))for(Xl(e,n,i),e=e.sibling;e!==null;)Xl(e,n,i),e=e.sibling}function ql(e,n,i){var t=e.tag;if(t===5||t===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(t!==4&&(e=e.child,e!==null))for(ql(e,n,i),e=e.sibling;e!==null;)ql(e,n,i),e=e.sibling}var se=null,Le=!1;function nn(e,n,i){for(i=i.child;i!==null;)vc(e,n,i),i=i.sibling}function vc(e,n,i){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(vs,i)}catch{}switch(i.tag){case 5:he||ii(i,n);case 6:var t=se,s=Le;se=null,nn(e,n,i),se=t,Le=s,se!==null&&(Le?(e=se,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):se.removeChild(i.stateNode));break;case 18:se!==null&&(Le?(e=se,i=i.stateNode,e.nodeType===8?Zs(e.parentNode,i):e.nodeType===1&&Zs(e,i),Qi(e)):Zs(se,i.stateNode));break;case 4:t=se,s=Le,se=i.stateNode.containerInfo,Le=!0,nn(e,n,i),se=t,Le=s;break;case 0:case 11:case 14:case 15:if(!he&&(t=i.updateQueue,t!==null&&(t=t.lastEffect,t!==null))){s=t=t.next;do{var l=s,r=l.destroy;l=l.tag,r!==void 0&&(l&2||l&4)&&Kl(i,n,r),s=s.next}while(s!==t)}nn(e,n,i);break;case 1:if(!he&&(ii(i,n),t=i.stateNode,typeof t.componentWillUnmount=="function"))try{t.props=i.memoizedProps,t.state=i.memoizedState,t.componentWillUnmount()}catch(o){Y(i,n,o)}nn(e,n,i);break;case 21:nn(e,n,i);break;case 22:i.mode&1?(he=(t=he)||i.memoizedState!==null,nn(e,n,i),he=t):nn(e,n,i);break;default:nn(e,n,i)}}function ia(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new id),n.forEach(function(t){var s=pd.bind(null,e,t);i.has(t)||(i.add(t),t.then(s,s))})}}function We(e,n){var i=n.deletions;if(i!==null)for(var t=0;t<i.length;t++){var s=i[t];try{var l=e,r=n,o=r;e:for(;o!==null;){switch(o.tag){case 5:se=o.stateNode,Le=!1;break e;case 3:se=o.stateNode.containerInfo,Le=!0;break e;case 4:se=o.stateNode.containerInfo,Le=!0;break e}o=o.return}if(se===null)throw Error(b(160));vc(l,r,s),se=null,Le=!1;var a=s.alternate;a!==null&&(a.return=null),s.return=null}catch(h){Y(s,n,h)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)wc(n,e),n=n.sibling}function wc(e,n){var i=e.alternate,t=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(We(n,e),Re(e),t&4){try{Oi(3,e,e.return),Cs(3,e)}catch(v){Y(e,e.return,v)}try{Oi(5,e,e.return)}catch(v){Y(e,e.return,v)}}break;case 1:We(n,e),Re(e),t&512&&i!==null&&ii(i,i.return);break;case 5:if(We(n,e),Re(e),t&512&&i!==null&&ii(i,i.return),e.flags&32){var s=e.stateNode;try{Ui(s,"")}catch(v){Y(e,e.return,v)}}if(t&4&&(s=e.stateNode,s!=null)){var l=e.memoizedProps,r=i!==null?i.memoizedProps:l,o=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{o==="input"&&l.type==="radio"&&l.name!=null&&Ba(s,l),xl(o,r);var h=xl(o,l);for(r=0;r<a.length;r+=2){var g=a[r],p=a[r+1];g==="style"?Ga(s,p):g==="dangerouslySetInnerHTML"?Va(s,p):g==="children"?Ui(s,p):ur(s,g,p,h)}switch(o){case"input":yl(s,l);break;case"textarea":Ha(s,l);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!l.multiple;var w=l.value;w!=null?si(s,!!l.multiple,w,!1):m!==!!l.multiple&&(l.defaultValue!=null?si(s,!!l.multiple,l.defaultValue,!0):si(s,!!l.multiple,l.multiple?[]:"",!1))}s[qi]=l}catch(v){Y(e,e.return,v)}}break;case 6:if(We(n,e),Re(e),t&4){if(e.stateNode===null)throw Error(b(162));s=e.stateNode,l=e.memoizedProps;try{s.nodeValue=l}catch(v){Y(e,e.return,v)}}break;case 3:if(We(n,e),Re(e),t&4&&i!==null&&i.memoizedState.isDehydrated)try{Qi(n.containerInfo)}catch(v){Y(e,e.return,v)}break;case 4:We(n,e),Re(e);break;case 13:We(n,e),Re(e),s=e.child,s.flags&8192&&(l=s.memoizedState!==null,s.stateNode.isHidden=l,!l||s.alternate!==null&&s.alternate.memoizedState!==null||(Vr=J())),t&4&&ia(e);break;case 22:if(g=i!==null&&i.memoizedState!==null,e.mode&1?(he=(h=he)||g,We(n,e),he=h):We(n,e),Re(e),t&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!g&&e.mode&1)for(C=e,g=e.child;g!==null;){for(p=C=g;C!==null;){switch(m=C,w=m.child,m.tag){case 0:case 11:case 14:case 15:Oi(4,m,m.return);break;case 1:ii(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){t=m,i=m.return;try{n=t,k.props=n.memoizedProps,k.state=n.memoizedState,k.componentWillUnmount()}catch(v){Y(t,i,v)}}break;case 5:ii(m,m.return);break;case 22:if(m.memoizedState!==null){sa(p);continue}}w!==null?(w.return=m,C=w):sa(p)}g=g.sibling}e:for(g=null,p=e;;){if(p.tag===5){if(g===null){g=p;try{s=p.stateNode,h?(l=s.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(o=p.stateNode,a=p.memoizedProps.style,r=a!=null&&a.hasOwnProperty("display")?a.display:null,o.style.display=$a("display",r))}catch(v){Y(e,e.return,v)}}}else if(p.tag===6){if(g===null)try{p.stateNode.nodeValue=h?"":p.memoizedProps}catch(v){Y(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;g===p&&(g=null),p=p.return}g===p&&(g=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:We(n,e),Re(e),t&4&&ia(e);break;case 21:break;default:We(n,e),Re(e)}}function Re(e){var n=e.flags;if(n&2){try{e:{for(var i=e.return;i!==null;){if(yc(i)){var t=i;break e}i=i.return}throw Error(b(160))}switch(t.tag){case 5:var s=t.stateNode;t.flags&32&&(Ui(s,""),t.flags&=-33);var l=na(e);ql(e,l,s);break;case 3:case 4:var r=t.stateNode.containerInfo,o=na(e);Xl(e,o,r);break;default:throw Error(b(161))}}catch(a){Y(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function sd(e,n,i){C=e,kc(e)}function kc(e,n,i){for(var t=(e.mode&1)!==0;C!==null;){var s=C,l=s.child;if(s.tag===22&&t){var r=s.memoizedState!==null||zt;if(!r){var o=s.alternate,a=o!==null&&o.memoizedState!==null||he;o=zt;var h=he;if(zt=r,(he=a)&&!h)for(C=s;C!==null;)r=C,a=r.child,r.tag===22&&r.memoizedState!==null?la(s):a!==null?(a.return=r,C=a):la(s);for(;l!==null;)C=l,kc(l),l=l.sibling;C=s,zt=o,he=h}ta(e)}else s.subtreeFlags&8772&&l!==null?(l.return=s,C=l):ta(e)}}function ta(e){for(;C!==null;){var n=C;if(n.flags&8772){var i=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:he||Cs(5,n);break;case 1:var t=n.stateNode;if(n.flags&4&&!he)if(i===null)t.componentDidMount();else{var s=n.elementType===n.type?i.memoizedProps:_e(n.type,i.memoizedProps);t.componentDidUpdate(s,i.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}var l=n.updateQueue;l!==null&&Bo(n,l,t);break;case 3:var r=n.updateQueue;if(r!==null){if(i=null,n.child!==null)switch(n.child.tag){case 5:i=n.child.stateNode;break;case 1:i=n.child.stateNode}Bo(n,r,i)}break;case 5:var o=n.stateNode;if(i===null&&n.flags&4){i=o;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break;case"img":a.src&&(i.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var h=n.alternate;if(h!==null){var g=h.memoizedState;if(g!==null){var p=g.dehydrated;p!==null&&Qi(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}he||n.flags&512&&Jl(n)}catch(m){Y(n,n.return,m)}}if(n===e){C=null;break}if(i=n.sibling,i!==null){i.return=n.return,C=i;break}C=n.return}}function sa(e){for(;C!==null;){var n=C;if(n===e){C=null;break}var i=n.sibling;if(i!==null){i.return=n.return,C=i;break}C=n.return}}function la(e){for(;C!==null;){var n=C;try{switch(n.tag){case 0:case 11:case 15:var i=n.return;try{Cs(4,n)}catch(a){Y(n,i,a)}break;case 1:var t=n.stateNode;if(typeof t.componentDidMount=="function"){var s=n.return;try{t.componentDidMount()}catch(a){Y(n,s,a)}}var l=n.return;try{Jl(n)}catch(a){Y(n,l,a)}break;case 5:var r=n.return;try{Jl(n)}catch(a){Y(n,r,a)}}}catch(a){Y(n,n.return,a)}if(n===e){C=null;break}var o=n.sibling;if(o!==null){o.return=n.return,C=o;break}C=n.return}}var ld=Math.ceil,ps=en.ReactCurrentDispatcher,Hr=en.ReactCurrentOwner,ze=en.ReactCurrentBatchConfig,D=0,te=null,X=null,le=0,be=0,ti=xn(0),ee=0,st=null,Rn=0,js=0,Ur=0,Ri=null,me=null,Vr=0,fi=1/0,$e=null,ds=!1,Zl=null,fn=null,Nt=!1,hn=null,gs=0,Bi=0,er=null,Ht=-1,Ut=0;function pe(){return D&6?J():Ht!==-1?Ht:Ht=J()}function yn(e){return e.mode&1?D&2&&le!==0?le&-le:Hp.transition!==null?(Ut===0&&(Ut=sh()),Ut):(e=O,e!==0||(e=window.event,e=e===void 0?16:uh(e.type)),e):1}function De(e,n,i,t){if(50<Bi)throw Bi=0,er=null,Error(b(185));at(e,i,t),(!(D&2)||e!==te)&&(e===te&&(!(D&2)&&(js|=i),ee===4&&on(e,le)),we(e,t),i===1&&D===0&&!(n.mode&1)&&(fi=J()+500,Ts&&Tn()))}function we(e,n){var i=e.callbackNode;Hu(e,n);var t=Xt(e,e===te?le:0);if(t===0)i!==null&&go(i),e.callbackNode=null,e.callbackPriority=0;else if(n=t&-t,e.callbackPriority!==n){if(i!=null&&go(i),n===1)e.tag===0?Bp(ra.bind(null,e)):zh(ra.bind(null,e)),Fp(function(){!(D&6)&&Tn()}),i=null;else{switch(lh(t)){case 1:i=fr;break;case 4:i=ih;break;case 16:i=Jt;break;case 536870912:i=th;break;default:i=Jt}i=Ec(i,bc.bind(null,e))}e.callbackPriority=n,e.callbackNode=i}}function bc(e,n){if(Ht=-1,Ut=0,D&6)throw Error(b(327));var i=e.callbackNode;if(hi()&&e.callbackNode!==i)return null;var t=Xt(e,e===te?le:0);if(t===0)return null;if(t&30||t&e.expiredLanes||n)n=ms(e,t);else{n=t;var s=D;D|=2;var l=Tc();(te!==e||le!==n)&&($e=null,fi=J()+500,_n(e,n));do try{ad();break}catch(o){xc(e,o)}while(!0);Mr(),ps.current=l,D=s,X!==null?n=0:(te=null,le=0,n=ee)}if(n!==0){if(n===2&&(s=jl(e),s!==0&&(t=s,n=nr(e,s))),n===1)throw i=st,_n(e,0),on(e,t),we(e,J()),i;if(n===6)on(e,t);else{if(s=e.current.alternate,!(t&30)&&!rd(s)&&(n=ms(e,t),n===2&&(l=jl(e),l!==0&&(t=l,n=nr(e,l))),n===1))throw i=st,_n(e,0),on(e,t),we(e,J()),i;switch(e.finishedWork=s,e.finishedLanes=t,n){case 0:case 1:throw Error(b(345));case 2:zn(e,me,$e);break;case 3:if(on(e,t),(t&130023424)===t&&(n=Vr+500-J(),10<n)){if(Xt(e,0)!==0)break;if(s=e.suspendedLanes,(s&t)!==t){pe(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Ll(zn.bind(null,e,me,$e),n);break}zn(e,me,$e);break;case 4:if(on(e,t),(t&4194240)===t)break;for(n=e.eventTimes,s=-1;0<t;){var r=31-Fe(t);l=1<<r,r=n[r],r>s&&(s=r),t&=~l}if(t=s,t=J()-t,t=(120>t?120:480>t?480:1080>t?1080:1920>t?1920:3e3>t?3e3:4320>t?4320:1960*ld(t/1960))-t,10<t){e.timeoutHandle=Ll(zn.bind(null,e,me,$e),t);break}zn(e,me,$e);break;case 5:zn(e,me,$e);break;default:throw Error(b(329))}}}return we(e,J()),e.callbackNode===i?bc.bind(null,e):null}function nr(e,n){var i=Ri;return e.current.memoizedState.isDehydrated&&(_n(e,n).flags|=256),e=ms(e,n),e!==2&&(n=me,me=i,n!==null&&ir(n)),e}function ir(e){me===null?me=e:me.push.apply(me,e)}function rd(e){for(var n=e;;){if(n.flags&16384){var i=n.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var t=0;t<i.length;t++){var s=i[t],l=s.getSnapshot;s=s.value;try{if(!Oe(l(),s))return!1}catch{return!1}}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function on(e,n){for(n&=~Ur,n&=~js,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var i=31-Fe(n),t=1<<i;e[i]=-1,n&=~t}}function ra(e){if(D&6)throw Error(b(327));hi();var n=Xt(e,0);if(!(n&1))return we(e,J()),null;var i=ms(e,n);if(e.tag!==0&&i===2){var t=jl(e);t!==0&&(n=t,i=nr(e,t))}if(i===1)throw i=st,_n(e,0),on(e,n),we(e,J()),i;if(i===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,zn(e,me,$e),we(e,J()),null}function $r(e,n){var i=D;D|=1;try{return e(n)}finally{D=i,D===0&&(fi=J()+500,Ts&&Tn())}}function Bn(e){hn!==null&&hn.tag===0&&!(D&6)&&hi();var n=D;D|=1;var i=ze.transition,t=O;try{if(ze.transition=null,O=1,e)return e()}finally{O=t,ze.transition=i,D=n,!(D&6)&&Tn()}}function Gr(){be=ti.current,H(ti)}function _n(e,n){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,Ap(i)),X!==null)for(i=X.return;i!==null;){var t=i;switch(Cr(t),t.tag){case 1:t=t.type.childContextTypes,t!=null&&is();break;case 3:gi(),H(ye),H(ce),Lr();break;case 5:_r(t);break;case 4:gi();break;case 13:H($);break;case 19:H($);break;case 10:zr(t.type._context);break;case 22:case 23:Gr()}i=i.return}if(te=e,X=e=vn(e.current,null),le=be=n,ee=0,st=null,Ur=js=Rn=0,me=Ri=null,Pn!==null){for(n=0;n<Pn.length;n++)if(i=Pn[n],t=i.interleaved,t!==null){i.interleaved=null;var s=t.next,l=i.pending;if(l!==null){var r=l.next;l.next=s,t.next=r}i.pending=t}Pn=null}return e}function xc(e,n){do{var i=X;try{if(Mr(),Ot.current=us,cs){for(var t=G.memoizedState;t!==null;){var s=t.queue;s!==null&&(s.pending=null),t=t.next}cs=!1}if(On=0,ie=Z=G=null,Di=!1,nt=0,Hr.current=null,i===null||i.return===null){ee=1,st=n,X=null;break}e:{var l=e,r=i.return,o=i,a=n;if(n=le,o.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var h=a,g=o,p=g.tag;if(!(g.mode&1)&&(p===0||p===11||p===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var w=Qo(r);if(w!==null){w.flags&=-257,Yo(w,r,o,l,n),w.mode&1&&Go(l,h,n),n=w,a=h;var k=n.updateQueue;if(k===null){var v=new Set;v.add(a),n.updateQueue=v}else k.add(a);break e}else{if(!(n&1)){Go(l,h,n),Qr();break e}a=Error(b(426))}}else if(U&&o.mode&1){var I=Qo(r);if(I!==null){!(I.flags&65536)&&(I.flags|=256),Yo(I,r,o,l,n),jr(mi(a,o));break e}}l=a=mi(a,o),ee!==4&&(ee=2),Ri===null?Ri=[l]:Ri.push(l),l=r;do{switch(l.tag){case 3:l.flags|=65536,n&=-n,l.lanes|=n;var u=lc(l,a,n);Ro(l,u);break e;case 1:o=a;var c=l.type,d=l.stateNode;if(!(l.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(fn===null||!fn.has(d)))){l.flags|=65536,n&=-n,l.lanes|=n;var y=rc(l,o,n);Ro(l,y);break e}}l=l.return}while(l!==null)}Sc(i)}catch(S){n=S,X===i&&i!==null&&(X=i=i.return);continue}break}while(!0)}function Tc(){var e=ps.current;return ps.current=us,e===null?us:e}function Qr(){(ee===0||ee===3||ee===2)&&(ee=4),te===null||!(Rn&268435455)&&!(js&268435455)||on(te,le)}function ms(e,n){var i=D;D|=2;var t=Tc();(te!==e||le!==n)&&($e=null,_n(e,n));do try{od();break}catch(s){xc(e,s)}while(!0);if(Mr(),D=i,ps.current=t,X!==null)throw Error(b(261));return te=null,le=0,ee}function od(){for(;X!==null;)Ic(X)}function ad(){for(;X!==null&&!Wu();)Ic(X)}function Ic(e){var n=jc(e.alternate,e,be);e.memoizedProps=e.pendingProps,n===null?Sc(e):X=n,Hr.current=null}function Sc(e){var n=e;do{var i=n.alternate;if(e=n.return,n.flags&32768){if(i=nd(i,n),i!==null){i.flags&=32767,X=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ee=6,X=null;return}}else if(i=ed(i,n,be),i!==null){X=i;return}if(n=n.sibling,n!==null){X=n;return}X=n=e}while(n!==null);ee===0&&(ee=5)}function zn(e,n,i){var t=O,s=ze.transition;try{ze.transition=null,O=1,hd(e,n,i,t)}finally{ze.transition=s,O=t}return null}function hd(e,n,i,t){do hi();while(hn!==null);if(D&6)throw Error(b(327));i=e.finishedWork;var s=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var l=i.lanes|i.childLanes;if(Uu(e,l),e===te&&(X=te=null,le=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||Nt||(Nt=!0,Ec(Jt,function(){return hi(),null})),l=(i.flags&15990)!==0,i.subtreeFlags&15990||l){l=ze.transition,ze.transition=null;var r=O;O=1;var o=D;D|=4,Hr.current=null,td(e,i),wc(i,e),Mp(Wl),qt=!!Pl,Wl=Pl=null,e.current=i,sd(i),_u(),D=o,O=r,ze.transition=l}else e.current=i;if(Nt&&(Nt=!1,hn=e,gs=s),l=e.pendingLanes,l===0&&(fn=null),Fu(i.stateNode),we(e,J()),n!==null)for(t=e.onRecoverableError,i=0;i<n.length;i++)s=n[i],t(s.value,{componentStack:s.stack,digest:s.digest});if(ds)throw ds=!1,e=Zl,Zl=null,e;return gs&1&&e.tag!==0&&hi(),l=e.pendingLanes,l&1?e===er?Bi++:(Bi=0,er=e):Bi=0,Tn(),null}function hi(){if(hn!==null){var e=lh(gs),n=ze.transition,i=O;try{if(ze.transition=null,O=16>e?16:e,hn===null)var t=!1;else{if(e=hn,hn=null,gs=0,D&6)throw Error(b(331));var s=D;for(D|=4,C=e.current;C!==null;){var l=C,r=l.child;if(C.flags&16){var o=l.deletions;if(o!==null){for(var a=0;a<o.length;a++){var h=o[a];for(C=h;C!==null;){var g=C;switch(g.tag){case 0:case 11:case 15:Oi(8,g,l)}var p=g.child;if(p!==null)p.return=g,C=p;else for(;C!==null;){g=C;var m=g.sibling,w=g.return;if(fc(g),g===h){C=null;break}if(m!==null){m.return=w,C=m;break}C=w}}}var k=l.alternate;if(k!==null){var v=k.child;if(v!==null){k.child=null;do{var I=v.sibling;v.sibling=null,v=I}while(v!==null)}}C=l}}if(l.subtreeFlags&2064&&r!==null)r.return=l,C=r;else e:for(;C!==null;){if(l=C,l.flags&2048)switch(l.tag){case 0:case 11:case 15:Oi(9,l,l.return)}var u=l.sibling;if(u!==null){u.return=l.return,C=u;break e}C=l.return}}var c=e.current;for(C=c;C!==null;){r=C;var d=r.child;if(r.subtreeFlags&2064&&d!==null)d.return=r,C=d;else e:for(r=c;C!==null;){if(o=C,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Cs(9,o)}}catch(S){Y(o,o.return,S)}if(o===r){C=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,C=y;break e}C=o.return}}if(D=s,Tn(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(vs,e)}catch{}t=!0}return t}finally{O=i,ze.transition=n}}return!1}function oa(e,n,i){n=mi(i,n),n=lc(e,n,1),e=mn(e,n,1),n=pe(),e!==null&&(at(e,1,n),we(e,n))}function Y(e,n,i){if(e.tag===3)oa(e,e,i);else for(;n!==null;){if(n.tag===3){oa(n,e,i);break}else if(n.tag===1){var t=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof t.componentDidCatch=="function"&&(fn===null||!fn.has(t))){e=mi(i,e),e=rc(n,e,1),n=mn(n,e,1),e=pe(),n!==null&&(at(n,1,e),we(n,e));break}}n=n.return}}function cd(e,n,i){var t=e.pingCache;t!==null&&t.delete(n),n=pe(),e.pingedLanes|=e.suspendedLanes&i,te===e&&(le&i)===i&&(ee===4||ee===3&&(le&130023424)===le&&500>J()-Vr?_n(e,0):Ur|=i),we(e,n)}function Cc(e,n){n===0&&(e.mode&1?(n=bt,bt<<=1,!(bt&130023424)&&(bt=4194304)):n=1);var i=pe();e=qe(e,n),e!==null&&(at(e,n,i),we(e,i))}function ud(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),Cc(e,i)}function pd(e,n){var i=0;switch(e.tag){case 13:var t=e.stateNode,s=e.memoizedState;s!==null&&(i=s.retryLane);break;case 19:t=e.stateNode;break;default:throw Error(b(314))}t!==null&&t.delete(n),Cc(e,i)}var jc;jc=function(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps||ye.current)fe=!0;else{if(!(e.lanes&i)&&!(n.flags&128))return fe=!1,Zp(e,n,i);fe=!!(e.flags&131072)}else fe=!1,U&&n.flags&1048576&&Nh(n,ls,n.index);switch(n.lanes=0,n.tag){case 2:var t=n.type;Bt(e,n),e=n.pendingProps;var s=ui(n,ce.current);ai(n,i),s=Fr(null,n,t,e,s,i);var l=Dr();return n.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ve(t)?(l=!0,ts(n)):l=!1,n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Pr(n),s.updater=Ss,n.stateNode=s,s._reactInternals=n,Hl(n,t,e,i),n=$l(null,n,t,!0,l,i)):(n.tag=0,U&&l&&Sr(n),ue(null,n,s,i),n=n.child),n;case 16:t=n.elementType;e:{switch(Bt(e,n),e=n.pendingProps,s=t._init,t=s(t._payload),n.type=t,s=n.tag=gd(t),e=_e(t,e),s){case 0:n=Vl(null,n,t,e,i);break e;case 1:n=Xo(null,n,t,e,i);break e;case 11:n=Ko(null,n,t,e,i);break e;case 14:n=Jo(null,n,t,_e(t.type,e),i);break e}throw Error(b(306,t,""))}return n;case 0:return t=n.type,s=n.pendingProps,s=n.elementType===t?s:_e(t,s),Vl(e,n,t,s,i);case 1:return t=n.type,s=n.pendingProps,s=n.elementType===t?s:_e(t,s),Xo(e,n,t,s,i);case 3:e:{if(cc(n),e===null)throw Error(b(387));t=n.pendingProps,l=n.memoizedState,s=l.element,Fh(e,n),as(n,t,null,i);var r=n.memoizedState;if(t=r.element,l.isDehydrated)if(l={element:t,isDehydrated:!1,cache:r.cache,pendingSuspenseBoundaries:r.pendingSuspenseBoundaries,transitions:r.transitions},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){s=mi(Error(b(423)),n),n=qo(e,n,t,i,s);break e}else if(t!==s){s=mi(Error(b(424)),n),n=qo(e,n,t,i,s);break e}else for(xe=gn(n.stateNode.containerInfo.firstChild),Te=n,U=!0,Ae=null,i=Lh(n,null,t,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(pi(),t===s){n=Ze(e,n,i);break e}ue(e,n,t,i)}n=n.child}return n;case 5:return Dh(n),e===null&&Ol(n),t=n.type,s=n.pendingProps,l=e!==null?e.memoizedProps:null,r=s.children,_l(t,s)?r=null:l!==null&&_l(t,l)&&(n.flags|=32),hc(e,n),ue(e,n,r,i),n.child;case 6:return e===null&&Ol(n),null;case 13:return uc(e,n,i);case 4:return Wr(n,n.stateNode.containerInfo),t=n.pendingProps,e===null?n.child=di(n,null,t,i):ue(e,n,t,i),n.child;case 11:return t=n.type,s=n.pendingProps,s=n.elementType===t?s:_e(t,s),Ko(e,n,t,s,i);case 7:return ue(e,n,n.pendingProps,i),n.child;case 8:return ue(e,n,n.pendingProps.children,i),n.child;case 12:return ue(e,n,n.pendingProps.children,i),n.child;case 10:e:{if(t=n.type._context,s=n.pendingProps,l=n.memoizedProps,r=s.value,R(rs,t._currentValue),t._currentValue=r,l!==null)if(Oe(l.value,r)){if(l.children===s.children&&!ye.current){n=Ze(e,n,i);break e}}else for(l=n.child,l!==null&&(l.return=n);l!==null;){var o=l.dependencies;if(o!==null){r=l.child;for(var a=o.firstContext;a!==null;){if(a.context===t){if(l.tag===1){a=Ke(-1,i&-i),a.tag=2;var h=l.updateQueue;if(h!==null){h=h.shared;var g=h.pending;g===null?a.next=a:(a.next=g.next,g.next=a),h.pending=a}}l.lanes|=i,a=l.alternate,a!==null&&(a.lanes|=i),Rl(l.return,i,n),o.lanes|=i;break}a=a.next}}else if(l.tag===10)r=l.type===n.type?null:l.child;else if(l.tag===18){if(r=l.return,r===null)throw Error(b(341));r.lanes|=i,o=r.alternate,o!==null&&(o.lanes|=i),Rl(r,i,n),r=l.sibling}else r=l.child;if(r!==null)r.return=l;else for(r=l;r!==null;){if(r===n){r=null;break}if(l=r.sibling,l!==null){l.return=r.return,r=l;break}r=r.return}l=r}ue(e,n,s.children,i),n=n.child}return n;case 9:return s=n.type,t=n.pendingProps.children,ai(n,i),s=Ne(s),t=t(s),n.flags|=1,ue(e,n,t,i),n.child;case 14:return t=n.type,s=_e(t,n.pendingProps),s=_e(t.type,s),Jo(e,n,t,s,i);case 15:return oc(e,n,n.type,n.pendingProps,i);case 17:return t=n.type,s=n.pendingProps,s=n.elementType===t?s:_e(t,s),Bt(e,n),n.tag=1,ve(t)?(e=!0,ts(n)):e=!1,ai(n,i),sc(n,t,s),Hl(n,t,s,i),$l(null,n,t,!0,e,i);case 19:return pc(e,n,i);case 22:return ac(e,n,i)}throw Error(b(156,n.tag))};function Ec(e,n){return nh(e,n)}function dd(e,n,i,t){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=t,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,n,i,t){return new dd(e,n,i,t)}function Yr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gd(e){if(typeof e=="function")return Yr(e)?1:0;if(e!=null){if(e=e.$$typeof,e===dr)return 11;if(e===gr)return 14}return 2}function vn(e,n){var i=e.alternate;return i===null?(i=Me(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Vt(e,n,i,t,s,l){var r=2;if(t=e,typeof e=="function")Yr(e)&&(r=1);else if(typeof e=="string")r=5;else e:switch(e){case Qn:return Ln(i.children,s,l,n);case pr:r=8,s|=8;break;case pl:return e=Me(12,i,n,s|2),e.elementType=pl,e.lanes=l,e;case dl:return e=Me(13,i,n,s),e.elementType=dl,e.lanes=l,e;case gl:return e=Me(19,i,n,s),e.elementType=gl,e.lanes=l,e;case Da:return Es(i,s,l,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Aa:r=10;break e;case Fa:r=9;break e;case dr:r=11;break e;case gr:r=14;break e;case tn:r=16,t=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return n=Me(r,i,n,s),n.elementType=e,n.type=t,n.lanes=l,n}function Ln(e,n,i,t){return e=Me(7,e,t,n),e.lanes=i,e}function Es(e,n,i,t){return e=Me(22,e,t,n),e.elementType=Da,e.lanes=i,e.stateNode={isHidden:!1},e}function ol(e,n,i){return e=Me(6,e,null,n),e.lanes=i,e}function al(e,n,i){return n=Me(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function md(e,n,i,t,s){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hs(0),this.expirationTimes=Hs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hs(0),this.identifierPrefix=t,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Kr(e,n,i,t,s,l,r,o,a){return e=new md(e,n,i,o,a),n===1?(n=1,l===!0&&(n|=8)):n=0,l=Me(3,null,null,n),e.current=l,l.stateNode=e,l.memoizedState={element:t,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pr(l),e}function fd(e,n,i){var t=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gn,key:t==null?null:""+t,children:e,containerInfo:n,implementation:i}}function Mc(e){if(!e)return kn;e=e._reactInternals;e:{if(Un(e)!==e||e.tag!==1)throw Error(b(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ve(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(b(171))}if(e.tag===1){var i=e.type;if(ve(i))return Mh(e,i,n)}return n}function zc(e,n,i,t,s,l,r,o,a){return e=Kr(i,t,!0,e,s,l,r,o,a),e.context=Mc(null),i=e.current,t=pe(),s=yn(i),l=Ke(t,s),l.callback=n??null,mn(i,l,s),e.current.lanes=s,at(e,s,t),we(e,t),e}function Ms(e,n,i,t){var s=n.current,l=pe(),r=yn(s);return i=Mc(i),n.context===null?n.context=i:n.pendingContext=i,n=Ke(l,r),n.payload={element:e},t=t===void 0?null:t,t!==null&&(n.callback=t),e=mn(s,n,r),e!==null&&(De(e,s,r,l),Dt(e,s,r)),r}function fs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function aa(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function Jr(e,n){aa(e,n),(e=e.alternate)&&aa(e,n)}function yd(){return null}var Nc=typeof reportError=="function"?reportError:function(e){console.error(e)};function Xr(e){this._internalRoot=e}zs.prototype.render=Xr.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(b(409));Ms(e,n,null,null)};zs.prototype.unmount=Xr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Bn(function(){Ms(null,e,null,null)}),n[Xe]=null}};function zs(e){this._internalRoot=e}zs.prototype.unstable_scheduleHydration=function(e){if(e){var n=ah();e={blockedOn:null,target:e,priority:n};for(var i=0;i<rn.length&&n!==0&&n<rn[i].priority;i++);rn.splice(i,0,e),i===0&&ch(e)}};function qr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ns(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ha(){}function vd(e,n,i,t,s){if(s){if(typeof t=="function"){var l=t;t=function(){var h=fs(r);l.call(h)}}var r=zc(n,t,e,0,null,!1,!1,"",ha);return e._reactRootContainer=r,e[Xe]=r.current,Ji(e.nodeType===8?e.parentNode:e),Bn(),r}for(;s=e.lastChild;)e.removeChild(s);if(typeof t=="function"){var o=t;t=function(){var h=fs(a);o.call(h)}}var a=Kr(e,0,!1,null,null,!1,!1,"",ha);return e._reactRootContainer=a,e[Xe]=a.current,Ji(e.nodeType===8?e.parentNode:e),Bn(function(){Ms(n,a,i,t)}),a}function Ps(e,n,i,t,s){var l=i._reactRootContainer;if(l){var r=l;if(typeof s=="function"){var o=s;s=function(){var a=fs(r);o.call(a)}}Ms(n,r,e,s)}else r=vd(i,n,e,s,t);return fs(r)}rh=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var i=Ni(n.pendingLanes);i!==0&&(yr(n,i|1),we(n,J()),!(D&6)&&(fi=J()+500,Tn()))}break;case 13:Bn(function(){var t=qe(e,1);if(t!==null){var s=pe();De(t,e,1,s)}}),Jr(e,1)}};vr=function(e){if(e.tag===13){var n=qe(e,134217728);if(n!==null){var i=pe();De(n,e,134217728,i)}Jr(e,134217728)}};oh=function(e){if(e.tag===13){var n=yn(e),i=qe(e,n);if(i!==null){var t=pe();De(i,e,n,t)}Jr(e,n)}};ah=function(){return O};hh=function(e,n){var i=O;try{return O=e,n()}finally{O=i}};Il=function(e,n,i){switch(n){case"input":if(yl(e,i),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<i.length;n++){var t=i[n];if(t!==e&&t.form===e.form){var s=xs(t);if(!s)throw Error(b(90));Ra(t),yl(t,s)}}}break;case"textarea":Ha(e,i);break;case"select":n=i.value,n!=null&&si(e,!!i.multiple,n,!1)}};Ka=$r;Ja=Bn;var wd={usingClientEntryPoint:!1,Events:[ct,Xn,xs,Qa,Ya,$r]},Ei={findFiberByHostInstance:Nn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kd={bundleType:Ei.bundleType,version:Ei.version,rendererPackageName:Ei.rendererPackageName,rendererConfig:Ei.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:en.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Za(e),e===null?null:e.stateNode},findFiberByHostInstance:Ei.findFiberByHostInstance||yd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pt=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pt.isDisabled&&Pt.supportsFiber)try{vs=Pt.inject(kd),Ue=Pt}catch{}}Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wd;Se.createPortal=function(e,n){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qr(n))throw Error(b(200));return fd(e,n,null,i)};Se.createRoot=function(e,n){if(!qr(e))throw Error(b(299));var i=!1,t="",s=Nc;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(t=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),n=Kr(e,1,!1,null,null,i,!1,t,s),e[Xe]=n.current,Ji(e.nodeType===8?e.parentNode:e),new Xr(n)};Se.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=Za(n),e=e===null?null:e.stateNode,e};Se.flushSync=function(e){return Bn(e)};Se.hydrate=function(e,n,i){if(!Ns(n))throw Error(b(200));return Ps(null,e,n,!0,i)};Se.hydrateRoot=function(e,n,i){if(!qr(e))throw Error(b(405));var t=i!=null&&i.hydratedSources||null,s=!1,l="",r=Nc;if(i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(r=i.onRecoverableError)),n=zc(n,null,e,1,i??null,s,!1,l,r),e[Xe]=n.current,Ji(e),t)for(e=0;e<t.length;e++)i=t[e],s=i._getVersion,s=s(i._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[i,s]:n.mutableSourceEagerHydrationData.push(i,s);return new zs(n)};Se.render=function(e,n,i){if(!Ns(n))throw Error(b(200));return Ps(null,e,n,!1,i)};Se.unmountComponentAtNode=function(e){if(!Ns(e))throw Error(b(40));return e._reactRootContainer?(Bn(function(){Ps(null,null,e,!1,function(){e._reactRootContainer=null,e[Xe]=null})}),!0):!1};Se.unstable_batchedUpdates=$r;Se.unstable_renderSubtreeIntoContainer=function(e,n,i,t){if(!Ns(i))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return Ps(e,n,i,!1,t)};Se.version="18.3.1-next-f1338f8080-20240426";function Pc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pc)}catch(e){console.error(e)}}Pc(),Pa.exports=Se;var bd=Pa.exports,ca=bd;cl.createRoot=ca.createRoot,cl.hydrateRoot=ca.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lt(){return lt=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},lt.apply(this,arguments)}var cn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(cn||(cn={}));const ua="popstate";function xd(e){e===void 0&&(e={});function n(t,s){let{pathname:l,search:r,hash:o}=t.location;return tr("",{pathname:l,search:r,hash:o},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function i(t,s){return typeof s=="string"?s:Wc(s)}return Id(n,i,null,e)}function q(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Zr(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function Td(){return Math.random().toString(36).substr(2,8)}function pa(e,n){return{usr:e.state,key:e.key,idx:n}}function tr(e,n,i,t){return i===void 0&&(i=null),lt({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?ki(n):n,{state:i,key:n&&n.key||t||Td()})}function Wc(e){let{pathname:n="/",search:i="",hash:t=""}=e;return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function ki(e){let n={};if(e){let i=e.indexOf("#");i>=0&&(n.hash=e.substr(i),e=e.substr(0,i));let t=e.indexOf("?");t>=0&&(n.search=e.substr(t),e=e.substr(0,t)),e&&(n.pathname=e)}return n}function Id(e,n,i,t){t===void 0&&(t={});let{window:s=document.defaultView,v5Compat:l=!1}=t,r=s.history,o=cn.Pop,a=null,h=g();h==null&&(h=0,r.replaceState(lt({},r.state,{idx:h}),""));function g(){return(r.state||{idx:null}).idx}function p(){o=cn.Pop;let I=g(),u=I==null?null:I-h;h=I,a&&a({action:o,location:v.location,delta:u})}function m(I,u){o=cn.Push;let c=tr(v.location,I,u);h=g()+1;let d=pa(c,h),y=v.createHref(c);try{r.pushState(d,"",y)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;s.location.assign(y)}l&&a&&a({action:o,location:v.location,delta:1})}function w(I,u){o=cn.Replace;let c=tr(v.location,I,u);h=g();let d=pa(c,h),y=v.createHref(c);r.replaceState(d,"",y),l&&a&&a({action:o,location:v.location,delta:0})}function k(I){let u=s.location.origin!=="null"?s.location.origin:s.location.href,c=typeof I=="string"?I:Wc(I);return c=c.replace(/ $/,"%20"),q(u,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,u)}let v={get action(){return o},get location(){return e(s,r)},listen(I){if(a)throw new Error("A history only accepts one active listener");return s.addEventListener(ua,p),a=I,()=>{s.removeEventListener(ua,p),a=null}},createHref(I){return n(s,I)},createURL:k,encodeLocation(I){let u=k(I);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:m,replace:w,go(I){return r.go(I)}};return v}var da;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(da||(da={}));function Sd(e,n,i){return i===void 0&&(i="/"),Cd(e,n,i)}function Cd(e,n,i,t){let s=typeof n=="string"?ki(n):n,l=Ac(s.pathname||"/",i);if(l==null)return null;let r=_c(e);jd(r);let o=null;for(let a=0;o==null&&a<r.length;++a){let h=Od(l);o=Ad(r[a],h)}return o}function _c(e,n,i,t){n===void 0&&(n=[]),i===void 0&&(i=[]),t===void 0&&(t="");let s=(l,r,o)=>{let a={relativePath:o===void 0?l.path||"":o,caseSensitive:l.caseSensitive===!0,childrenIndex:r,route:l};a.relativePath.startsWith("/")&&(q(a.relativePath.startsWith(t),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+t+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(t.length));let h=An([t,a.relativePath]),g=i.concat(a);l.children&&l.children.length>0&&(q(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),_c(l.children,n,g,h)),!(l.path==null&&!l.index)&&n.push({path:h,score:_d(h,l.index),routesMeta:g})};return e.forEach((l,r)=>{var o;if(l.path===""||!((o=l.path)!=null&&o.includes("?")))s(l,r);else for(let a of Lc(l.path))s(l,r,a)}),n}function Lc(e){let n=e.split("/");if(n.length===0)return[];let[i,...t]=n,s=i.endsWith("?"),l=i.replace(/\?$/,"");if(t.length===0)return s?[l,""]:[l];let r=Lc(t.join("/")),o=[];return o.push(...r.map(a=>a===""?l:[l,a].join("/"))),s&&o.push(...r),o.map(a=>e.startsWith("/")&&a===""?"/":a)}function jd(e){e.sort((n,i)=>n.score!==i.score?i.score-n.score:Ld(n.routesMeta.map(t=>t.childrenIndex),i.routesMeta.map(t=>t.childrenIndex)))}const Ed=/^:[\w-]+$/,Md=3,zd=2,Nd=1,Pd=10,Wd=-2,ga=e=>e==="*";function _d(e,n){let i=e.split("/"),t=i.length;return i.some(ga)&&(t+=Wd),n&&(t+=zd),i.filter(s=>!ga(s)).reduce((s,l)=>s+(Ed.test(l)?Md:l===""?Nd:Pd),t)}function Ld(e,n){return e.length===n.length&&e.slice(0,-1).every((t,s)=>t===n[s])?e[e.length-1]-n[n.length-1]:0}function Ad(e,n,i){let{routesMeta:t}=e,s={},l="/",r=[];for(let o=0;o<t.length;++o){let a=t[o],h=o===t.length-1,g=l==="/"?n:n.slice(l.length)||"/",p=Fd({path:a.relativePath,caseSensitive:a.caseSensitive,end:h},g),m=a.route;if(!p)return null;Object.assign(s,p.params),r.push({params:s,pathname:An([l,p.pathname]),pathnameBase:Vd(An([l,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(l=An([l,p.pathnameBase]))}return r}function Fd(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,t]=Dd(e.path,e.caseSensitive,e.end),s=n.match(i);if(!s)return null;let l=s[0],r=l.replace(/(.)\/+$/,"$1"),o=s.slice(1);return{params:t.reduce((h,g,p)=>{let{paramName:m,isOptional:w}=g;if(m==="*"){let v=o[p]||"";r=l.slice(0,l.length-v.length).replace(/(.)\/+$/,"$1")}const k=o[p];return w&&!k?h[m]=void 0:h[m]=(k||"").replace(/%2F/g,"/"),h},{}),pathname:l,pathnameBase:r,pattern:e}}function Dd(e,n,i){n===void 0&&(n=!1),i===void 0&&(i=!0),Zr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let t=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(r,o,a)=>(t.push({paramName:o,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(t.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,n?void 0:"i"),t]}function Od(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Zr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Ac(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let i=n.endsWith("/")?n.length-1:n.length,t=e.charAt(i);return t&&t!=="/"?null:e.slice(i)||"/"}const Rd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Bd=e=>Rd.test(e);function Hd(e,n){n===void 0&&(n="/");let{pathname:i,search:t="",hash:s=""}=typeof e=="string"?ki(e):e,l;if(i)if(Bd(i))l=i;else{if(i.includes("//")){let r=i;i=i.replace(/\/\/+/g,"/"),Zr(!1,"Pathnames cannot have embedded double slashes - normalizing "+(r+" -> "+i))}i.startsWith("/")?l=ma(i.substring(1),"/"):l=ma(i,n)}else l=n;return{pathname:l,search:$d(t),hash:Gd(s)}}function ma(e,n){let i=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?i.length>1&&i.pop():s!=="."&&i.push(s)}),i.length>1?i.join("/"):"/"}function hl(e,n,i,t){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(t)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ud(e){return e.filter((n,i)=>i===0||n.route.path&&n.route.path.length>0)}function Fc(e,n){let i=Ud(e);return n?i.map((t,s)=>s===i.length-1?t.pathname:t.pathnameBase):i.map(t=>t.pathnameBase)}function Dc(e,n,i,t){t===void 0&&(t=!1);let s;typeof e=="string"?s=ki(e):(s=lt({},e),q(!s.pathname||!s.pathname.includes("?"),hl("?","pathname","search",s)),q(!s.pathname||!s.pathname.includes("#"),hl("#","pathname","hash",s)),q(!s.search||!s.search.includes("#"),hl("#","search","hash",s)));let l=e===""||s.pathname==="",r=l?"/":s.pathname,o;if(r==null)o=i;else{let p=n.length-1;if(!t&&r.startsWith("..")){let m=r.split("/");for(;m[0]==="..";)m.shift(),p-=1;s.pathname=m.join("/")}o=p>=0?n[p]:"/"}let a=Hd(s,o),h=r&&r!=="/"&&r.endsWith("/"),g=(l||r===".")&&i.endsWith("/");return!a.pathname.endsWith("/")&&(h||g)&&(a.pathname+="/"),a}const An=e=>e.join("/").replace(/\/\/+/g,"/"),Vd=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),$d=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Gd=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Qd(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Oc=["post","put","patch","delete"];new Set(Oc);const Yd=["get",...Oc];new Set(Yd);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rt(){return rt=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},rt.apply(this,arguments)}const eo=T.createContext(null),Kd=T.createContext(null),pt=T.createContext(null),Ws=T.createContext(null),In=T.createContext({outlet:null,matches:[],isDataRoute:!1}),Rc=T.createContext(null);function dt(){return T.useContext(Ws)!=null}function _s(){return dt()||q(!1),T.useContext(Ws).location}function Bc(e){T.useContext(pt).static||T.useLayoutEffect(e)}function Ls(){let{isDataRoute:e}=T.useContext(In);return e?hg():Jd()}function Jd(){dt()||q(!1);let e=T.useContext(eo),{basename:n,future:i,navigator:t}=T.useContext(pt),{matches:s}=T.useContext(In),{pathname:l}=_s(),r=JSON.stringify(Fc(s,i.v7_relativeSplatPath)),o=T.useRef(!1);return Bc(()=>{o.current=!0}),T.useCallback(function(h,g){if(g===void 0&&(g={}),!o.current)return;if(typeof h=="number"){t.go(h);return}let p=Dc(h,JSON.parse(r),l,g.relative==="path");e==null&&n!=="/"&&(p.pathname=p.pathname==="/"?n:An([n,p.pathname])),(g.replace?t.replace:t.push)(p,g.state,g)},[n,t,r,l,e])}function Xd(){let{matches:e}=T.useContext(In),n=e[e.length-1];return n?n.params:{}}function qd(e,n){return Zd(e,n)}function Zd(e,n,i,t){dt()||q(!1);let{navigator:s}=T.useContext(pt),{matches:l}=T.useContext(In),r=l[l.length-1],o=r?r.params:{};r&&r.pathname;let a=r?r.pathnameBase:"/";r&&r.route;let h=_s(),g;if(n){var p;let I=typeof n=="string"?ki(n):n;a==="/"||(p=I.pathname)!=null&&p.startsWith(a)||q(!1),g=I}else g=h;let m=g.pathname||"/",w=m;if(a!=="/"){let I=a.replace(/^\//,"").split("/");w="/"+m.replace(/^\//,"").split("/").slice(I.length).join("/")}let k=Sd(e,{pathname:w}),v=sg(k&&k.map(I=>Object.assign({},I,{params:Object.assign({},o,I.params),pathname:An([a,s.encodeLocation?s.encodeLocation(I.pathname).pathname:I.pathname]),pathnameBase:I.pathnameBase==="/"?a:An([a,s.encodeLocation?s.encodeLocation(I.pathnameBase).pathname:I.pathnameBase])})),l,i,t);return n&&v?T.createElement(Ws.Provider,{value:{location:rt({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:cn.Pop}},v):v}function eg(){let e=ag(),n=Qd(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},n),i?T.createElement("pre",{style:s},i):null,null)}const ng=T.createElement(eg,null);class ig extends T.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){console.error("React Router caught the following error during render",n,i)}render(){return this.state.error!==void 0?T.createElement(In.Provider,{value:this.props.routeContext},T.createElement(Rc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function tg(e){let{routeContext:n,match:i,children:t}=e,s=T.useContext(eo);return s&&s.static&&s.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=i.route.id),T.createElement(In.Provider,{value:n},t)}function sg(e,n,i,t){var s;if(n===void 0&&(n=[]),i===void 0&&(i=null),t===void 0&&(t=null),e==null){var l;if(!i)return null;if(i.errors)e=i.matches;else if((l=t)!=null&&l.v7_partialHydration&&n.length===0&&!i.initialized&&i.matches.length>0)e=i.matches;else return null}let r=e,o=(s=i)==null?void 0:s.errors;if(o!=null){let g=r.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);g>=0||q(!1),r=r.slice(0,Math.min(r.length,g+1))}let a=!1,h=-1;if(i&&t&&t.v7_partialHydration)for(let g=0;g<r.length;g++){let p=r[g];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(h=g),p.route.id){let{loaderData:m,errors:w}=i,k=p.route.loader&&m[p.route.id]===void 0&&(!w||w[p.route.id]===void 0);if(p.route.lazy||k){a=!0,h>=0?r=r.slice(0,h+1):r=[r[0]];break}}}return r.reduceRight((g,p,m)=>{let w,k=!1,v=null,I=null;i&&(w=o&&p.route.id?o[p.route.id]:void 0,v=p.route.errorElement||ng,a&&(h<0&&m===0?(cg("route-fallback"),k=!0,I=null):h===m&&(k=!0,I=p.route.hydrateFallbackElement||null)));let u=n.concat(r.slice(0,m+1)),c=()=>{let d;return w?d=v:k?d=I:p.route.Component?d=T.createElement(p.route.Component,null):p.route.element?d=p.route.element:d=g,T.createElement(tg,{match:p,routeContext:{outlet:g,matches:u,isDataRoute:i!=null},children:d})};return i&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?T.createElement(ig,{location:i.location,revalidation:i.revalidation,component:v,error:w,children:c(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):c()},null)}var Hc=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Hc||{}),Uc=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Uc||{});function lg(e){let n=T.useContext(eo);return n||q(!1),n}function rg(e){let n=T.useContext(Kd);return n||q(!1),n}function og(e){let n=T.useContext(In);return n||q(!1),n}function Vc(e){let n=og(),i=n.matches[n.matches.length-1];return i.route.id||q(!1),i.route.id}function ag(){var e;let n=T.useContext(Rc),i=rg(),t=Vc();return n!==void 0?n:(e=i.errors)==null?void 0:e[t]}function hg(){let{router:e}=lg(Hc.UseNavigateStable),n=Vc(Uc.UseNavigateStable),i=T.useRef(!1);return Bc(()=>{i.current=!0}),T.useCallback(function(s,l){l===void 0&&(l={}),i.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,rt({fromRouteId:n},l)))},[e,n])}const fa={};function cg(e,n,i){fa[e]||(fa[e]=!0)}function ug(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function pg(e){let{to:n,replace:i,state:t,relative:s}=e;dt()||q(!1);let{future:l,static:r}=T.useContext(pt),{matches:o}=T.useContext(In),{pathname:a}=_s(),h=Ls(),g=Dc(n,Fc(o,l.v7_relativeSplatPath),a,s==="path"),p=JSON.stringify(g);return T.useEffect(()=>h(JSON.parse(p),{replace:i,state:t,relative:s}),[h,p,s,i,t]),null}function $n(e){q(!1)}function dg(e){let{basename:n="/",children:i=null,location:t,navigationType:s=cn.Pop,navigator:l,static:r=!1,future:o}=e;dt()&&q(!1);let a=n.replace(/^\/*/,"/"),h=T.useMemo(()=>({basename:a,navigator:l,static:r,future:rt({v7_relativeSplatPath:!1},o)}),[a,o,l,r]);typeof t=="string"&&(t=ki(t));let{pathname:g="/",search:p="",hash:m="",state:w=null,key:k="default"}=t,v=T.useMemo(()=>{let I=Ac(g,a);return I==null?null:{location:{pathname:I,search:p,hash:m,state:w,key:k},navigationType:s}},[a,g,p,m,w,k,s]);return v==null?null:T.createElement(pt.Provider,{value:h},T.createElement(Ws.Provider,{children:i,value:v}))}function gg(e){let{children:n,location:i}=e;return qd(sr(n),i)}new Promise(()=>{});function sr(e,n){n===void 0&&(n=[]);let i=[];return T.Children.forEach(e,(t,s)=>{if(!T.isValidElement(t))return;let l=[...n,s];if(t.type===T.Fragment){i.push.apply(i,sr(t.props.children,l));return}t.type!==$n&&q(!1),!t.props.index||!t.props.children||q(!1);let r={id:t.props.id||l.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:t.props.ErrorBoundary!=null||t.props.errorElement!=null,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(r.children=sr(t.props.children,l)),i.push(r)}),i}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const mg="6";try{window.__reactRouterVersion=mg}catch{}const fg="startTransition",ya=cu[fg];function yg(e){let{basename:n,children:i,future:t,window:s}=e,l=T.useRef();l.current==null&&(l.current=xd({window:s,v5Compat:!0}));let r=l.current,[o,a]=T.useState({action:r.action,location:r.location}),{v7_startTransition:h}=t||{},g=T.useCallback(p=>{h&&ya?ya(()=>a(p)):a(p)},[a,h]);return T.useLayoutEffect(()=>r.listen(g),[r,g]),T.useEffect(()=>ug(t),[t]),T.createElement(dg,{basename:n,children:i,location:o.location,navigationType:o.action,navigator:r,future:t})}var va;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(va||(va={}));var wa;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(wa||(wa={}));const vg=[{path:"/",label:"首页",icon:"🏠"},{path:"/words",label:"单词",icon:"📖"},{path:"/profile",label:"我的",icon:"👤"}];function wg(){const e=Ls(),n=_s();return f.jsxs("div",{className:"tab-bar",children:[vg.map(i=>f.jsxs("button",{className:`tab-item ${n.pathname===i.path?"active":""}`,onClick:()=>e(i.path),children:[f.jsx("span",{className:"tab-icon",children:i.icon}),f.jsx("span",{className:"tab-label",children:i.label})]},i.path)),f.jsx("style",{children:`
        .tab-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-around;
          align-items: center;
          background: #fff;
          box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
          padding: 8px 0;
          padding-bottom: max(8px, env(safe-area-inset-bottom));
          z-index: 100;
        }

        .tab-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 4px 12px;
          color: var(--text-secondary);
          transition: all 0.2s ease;
          border-radius: var(--radius-md);
        }

        .tab-item:active {
          transform: scale(0.95);
        }

        .tab-item.active {
          color: var(--primary-color);
        }

        .tab-icon {
          font-size: 20px;
        }

        .tab-label {
          font-size: 11px;
          font-weight: 500;
        }

        .tab-item.active .tab-label {
          font-weight: 600;
        }
      `})]})}const kg=[{id:"1",title:"My Mom",titleCn:"我的妈妈",image:"/images/01我的妈妈.jpg",englishText:`My mom is kind and beautiful. She has big eyes and long brown hair.

She cooks delicious food for our family every day. Her dumplings are the best in the world!

She helps me get ready for school in the morning. She packs my backpack and makes sure I have everything.

She reads stories to me at night. My favorite story is about a brave rabbit. I love my mom very much!`,chineseText:`我的妈妈又善良又漂亮。她有一双大眼睛和棕色的长发。

她每天为家人做美味的食物。她的饺子是世界上最好吃的！

早上她帮我准备好去上学。她帮我整理书包，确保我带齐东西。

晚上她给我讲故事。我最喜欢的故事是关于一只勇敢兔子的故事。我非常爱我的妈妈！`,vocabularies:[{english:"mom",phonetic:"/moʊm/",chinese:"妈妈"},{english:"kind",phonetic:"/kaɪnd/",chinese:"善良的"},{english:"beautiful",phonetic:"/ˈbjuːtɪfl/",chinese:"漂亮的"},{english:"delicious",phonetic:"/dɪˈlɪʃəs/",chinese:"美味的"},{english:"ready",phonetic:"/ˈredi/",chinese:"准备好的"},{english:"school",phonetic:"/skuːl/",chinese:"学校"},{english:"morning",phonetic:"/ˈmɔːrnɪŋ/",chinese:"早上"},{english:"night",phonetic:"/naɪt/",chinese:"晚上"}]},{id:"2",title:"My Dad",titleCn:"我的爸爸",image:"/images/02我的爸爸.jpg",englishText:`My dad is tall and strong. He always has a smile on his face. He works hard every day and never complains.

He helps me with my homework after work. He checks my answers and explains things I do not understand.

He likes to play basketball with me in the park near our home. On weekends, we go there together and have fun.

After dinner, he tells me funny jokes and makes me laugh a lot. My dad is my hero and I want to be like him one day!`,chineseText:`我的爸爸又高又强壮。他脸上总是带着微笑。他每天努力工作，从不抱怨。

下班后他帮我辅导作业。他检查我的答案，解释我不理解的地方。

他喜欢在家附近的公园和我打篮球。周末我们一起去那里玩得很开心。

晚饭后，他给我讲有趣的故事逗我大笑。我的爸爸是我的英雄，我长大想成为像他一样的人！`,vocabularies:[{english:"dad",phonetic:"/dæd/",chinese:"爸爸"},{english:"tall",phonetic:"/tɔːl/",chinese:"高的"},{english:"strong",phonetic:"/strɒŋ/",chinese:"强壮的"},{english:"smile",phonetic:"/smaɪl/",chinese:"微笑"},{english:"work",phonetic:"/wɜːrk/",chinese:"工作"},{english:"homework",phonetic:"/ˈhoʊmwɜːrk/",chinese:"作业"},{english:"basketball",phonetic:"/ˈbæskɪtbɔːl/",chinese:"篮球"},{english:"weekend",phonetic:"/ˈwiːkend/",chinese:"周末"},{english:"park",phonetic:"/pɑːrk/",chinese:"公园"},{english:"funny",phonetic:"/ˈfʌni/",chinese:"有趣的"},{english:"laugh",phonetic:"/læf/",chinese:"笑"},{english:"hero",phonetic:"/ˈhɪroʊ/",chinese:"英雄"}]},{id:"3",title:"My Grandma",titleCn:"我的奶奶",image:"/images/03我的奶奶.jpg",englishText:`My grandma loves me more than anything in the world. She cooks the most delicious food with fresh vegetables from her garden.

When I visit her on weekends, she gives me the biggest hug and asks about my school and my friends.

Grandma tells me wonderful stories about when she was a little girl. She also teaches me how to make dumplings.

Her hands are warm because she cooks for the family every day. I feel safe and happy with her. She says I am her favorite grandchild!`,chineseText:`我的奶奶爱我胜过世界上任何东西。她用菜园里的新鲜蔬菜做最好吃的食物。

每周末我去看她时，她都会给我最大的拥抱，问我学校和朋友们的事情。

奶奶给我讲很多关于她小女孩时候的精彩故事。她还教我做饺子。

她的手因为每天为家人做饭而温暖。和她在一起我感到安全和幸福。她说我是她最爱的孙女！`,vocabularies:[{english:"grandma",phonetic:"/ˈɡrænmɑː/",chinese:"奶奶"},{english:"visit",phonetic:"/ˈvɪzɪt/",chinese:"看望"},{english:"hug",phonetic:"/hʌɡ/",chinese:"拥抱"},{english:"school",phonetic:"/skuːl/",chinese:"学校"},{english:"story",phonetic:"/ˈstɔːri/",chinese:"故事"},{english:"dumpling",phonetic:"/ˈdʌmplɪŋ/",chinese:"饺子"},{english:"warm",phonetic:"/wɔːrm/",chinese:"温暖的"},{english:"safe",phonetic:"/seɪf/",chinese:"安全的"},{english:"happy",phonetic:"/ˈhæpi/",chinese:"开心的"}]},{id:"4",title:"My Grandpa",titleCn:"我的爷爷",image:"/images/04我的爷爷.jpg",englishText:`My grandpa is seventy but he is still strong and healthy. He can walk faster than me in the park!

Every morning, he does tai chi in the park with his old friends. He says it makes him feel young.

My grandpa tells me stories about his childhood. His stories are about the old days when there were no computers.

He grows beautiful flowers in his garden. My favorite is the red rose. He gives me one flower on my birthday every year!`,chineseText:`我的爷爷七十岁了但身体依然很强壮健康。当我们去公园时，他走得比我还快！

每天早上，他和老朋友们在公园里打太极拳。他说打太极拳让他感觉年轻。

我爷爷给我讲关于他童年的故事。他的故事都是关于过去没有电脑的时光。

他在花园里种漂亮的花。我最喜欢红玫瑰。每年我生日他都会给我一朵花！`,vocabularies:[{english:"grandpa",phonetic:"/ˈɡrænpɑː/",chinese:"爷爷"},{english:"healthy",phonetic:"/ˈhelθi/",chinese:"健康的"},{english:"tai chi",phonetic:"/taɪ ˈtʃiː/",chinese:"太极拳"},{english:"park",phonetic:"/pɑːrk/",chinese:"公园"},{english:"health",phonetic:"/helθ/",chinese:"健康"},{english:"story",phonetic:"/ˈstɔːri/",chinese:"故事"},{english:"flower",phonetic:"/ˈflaʊər/",chinese:"花"},{english:"garden",phonetic:"/ˈɡɑːrdn/",chinese:"花园"},{english:"birthday",phonetic:"/ˈbɜːrθdeɪ/",chinese:"生日"}]},{id:"5",title:"My Teacher",titleCn:"我的老师",image:"/images/05我的老师.jpg",englishText:`My teacher is Miss Wang. She is the kindest and most patient teacher. She never gets angry when we make mistakes.

She teaches us Chinese and Math. Her lessons are always interesting and full of fun. We learn new things and play games.

She helps me whenever I have questions. She explains things slowly until I understand. She corrects my homework carefully.

I want to be a teacher when I grow up just like Miss Wang. She is my biggest role model and inspires me every day!`,chineseText:`我的老师是王老师。她是我遇到的最善良最有耐心的老师。当我们犯错时她从来不生气。

她教我们语文和数学。她的课堂总是非常有趣，充满了欢乐。我们学新知识、玩游戏。

当我有问题时她总是帮助我。她慢慢地解释直到我理解。她认真批改我的作业。

当我长大时，我想成为像王老师一样的老师。她是我最大的榜样，每天激励着我！`,vocabularies:[{english:"teacher",phonetic:"/ˈtiːtʃər/",chinese:"老师"},{english:"kind",phonetic:"/kaɪnd/",chinese:"善良的"},{english:"patient",phonetic:"/ˈpeɪʃnt/",chinese:"耐心的"},{english:"lesson",phonetic:"/ˈlesn/",chinese:"课"},{english:"interesting",phonetic:"/ˈɪntrəstɪŋ/",chinese:"有趣的"},{english:"question",phonetic:"/ˈkwestʃən/",chinese:"问题"},{english:"homework",phonetic:"/ˈhoʊmwɜːrk/",chinese:"作业"},{english:"role model",phonetic:"/roʊl ˈmɒdl/",chinese:"榜样"}]},{id:"6",title:"My Best Friend",titleCn:"我最好的朋友",image:"/images/06我最好的朋友.jpg",englishText:`My best friend is Tom. We are in the same class and sit next to each other. We do everything together.

We sit together at lunch and share our food. Sometimes I give him my apple and he gives me his cookies. We play together at recess.

Tom is funny and kind. He makes me laugh with his silly jokes. When I am sad, he talks to me and helps me feel better.

He shares his toys with me and invites me to his birthday party every year. True friends like Tom are precious!`,chineseText:`我最好的朋友是汤姆。我们在同一个班，座位也挨着。我们做什么都在一起。

午饭时我们坐在一起分享食物。有时我把苹果给他，他就把饼干给我。课间我们一起玩。

汤姆很有趣很善良。他用傻话让我大笑。当我不开心时，他陪我说话让我感觉好一些。

他会和我分享玩具，每年都邀请我参加他的生日派对。像汤姆这样的真正朋友是很珍贵的！`,vocabularies:[{english:"friend",phonetic:"/frend/",chinese:"朋友"},{english:"class",phonetic:"/klæs/",chinese:"班级"},{english:"lunch",phonetic:"/lʌntʃ/",chinese:"午饭"},{english:"recess",phonetic:"/rɪˈses/",chinese:"课间"},{english:"funny",phonetic:"/ˈfʌni/",chinese:"有趣的"},{english:"kind",phonetic:"/kaɪnd/",chinese:"善良的"},{english:"sad",phonetic:"/sæd/",chinese:"伤心的"},{english:"precious",phonetic:"/ˈpreʃəs/",chinese:"珍贵的"}]},{id:"7",title:"My School",titleCn:"我的学校",image:"/images/07我的学校.jpg",englishText:`I go to Sunshine Elementary School. It has a big garden with colorful flowers. The air smells fresh and nice.

Our playground has swings, slides, and a basketball court. We run and play there during recess. Everyone loves outdoor time!

There are many friendly teachers. They teach us about science, art, music, and sports. I learn something new every day.

I have many friends at school. We sit together at lunch and play together at recess. I'm happy to see my best friends every morning!`,chineseText:`我在阳光小学上学。它有一个大花园，种满了五颜六色的花。空气闻起来非常清新。

我们的操场有秋千、滑梯和一个篮球场。课间我们可以在那里跑步和玩耍。每个人都喜欢户外活动时间！

我们学校有很多友善的老师。他们教我们学习科学、艺术、音乐和体育。我每天都能学到新的知识。

我在学校有很多朋友。我们一起吃午饭，一起在课间玩耍。我每天早上都很开心能看到我最好的朋友们！`,vocabularies:[{english:"school",phonetic:"/skuːl/",chinese:"学校"},{english:"playground",phonetic:"/ˈpleɪɡraʊnd/",chinese:"操场"},{english:"friendly",phonetic:"/ˈfrendli/",chinese:"亲切的"},{english:"teacher",phonetic:"/ˈtiːtʃər/",chinese:"老师"},{english:"interesting",phonetic:"/ˈɪntrəstɪŋ/",chinese:"有趣的"},{english:"study",phonetic:"/ˈstʌdi/",chinese:"学习"},{english:"friend",phonetic:"/frend/",chinese:"朋友"}]},{id:"8",title:"My Classroom",titleCn:"我的教室",image:"/images/08我的教室.jpg",englishText:`This is my classroom. It is clean and bright with big windows. The walls have colorful pictures.

From my seat, I can see a garden with flowers. Sometimes birds sing outside.

There is a big blackboard on the front wall. Our teacher writes lessons and tells stories every day. A clock is next to it.

I have books on my desk. My favorite book has funny animal stories. I love my classroom because it is where I learn and grow!`,chineseText:`这是我的教室。它干净又明亮，有大窗户每天早上让温暖的阳光照进来。墙上有我们自己画的彩色图画。

我的座位在窗户旁边，是一张漂亮的木桌子。从我的座位可以看到外面有彩色花朵和绿色树木的美丽花园。有时鸟儿会飞来在外面唱歌。

教室前墙有一块大大的黑板。我们的老师每天在上面写课程内容、画图画、给我们讲故事。旁边有一个时钟帮助我们看时间。

我的桌上有许多书和一个铅笔盒。我最喜欢的书是那本有有趣动物故事的书。我爱我的教室，因为这是我学习和成长的地方！`,vocabularies:[{english:"classroom",phonetic:"/ˈklæsrʊm/",chinese:"教室"},{english:"clean",phonetic:"/kliːn/",chinese:"干净的"},{english:"bright",phonetic:"/braɪt/",chinese:"明亮的"},{english:"window",phonetic:"/ˈwɪndoʊ/",chinese:"窗户"},{english:"garden",phonetic:"/ˈɡɑːrdn/",chinese:"花园"},{english:"blackboard",phonetic:"/ˈblækbɔːrd/",chinese:"黑板"},{english:"book",phonetic:"/bʊk/",chinese:"书"}]},{id:"9",title:"My Bedroom",titleCn:"我的卧室",image:"/images/09我的卧室.jpg",englishText:`This is my bedroom. It is small but cozy. I put my favorite animal posters on the walls.

I have a soft bed with a blue blanket and a fluffy pillow. On my desk, there is a cute lamp that gives warm light at night.

I keep my favorite toys on the wooden shelf. My teddy bear Brownie sits on my bed. He has been with me since I was a baby.

Sometimes I listen to music while drawing. My bedroom is my favorite place. I feel safe and happy here!`,chineseText:`这是我的卧室。它小小的但是很温馨。我在墙上贴满了动物海报。

我有一张柔软的床，配着蓝色毯子和蓬松的枕头。桌上有一盏可爱的台灯，晚上发出温暖的光。

我把最喜欢的玩具放在木架子上。我的泰迪熊布朗尼坐在床上。他从我小时候就一直陪着我。

有时我听音乐同时画画。我的卧室是我最喜欢的地方。我在这里感到安全和快乐！`,vocabularies:[{english:"bedroom",phonetic:"/ˈbedruːm/",chinese:"卧室"},{english:"cozy",phonetic:"/ˈkoʊzi/",chinese:"温馨的"},{english:"bed",phonetic:"/bed/",chinese:"床"},{english:"lamp",phonetic:"/læmp/",chinese:"台灯"},{english:"toy",phonetic:"/tɔɪ/",chinese:"玩具"},{english:"shelf",phonetic:"/ʃelf/",chinese:"架子"},{english:"teddy bear",phonetic:"/ˈtedi ber/",chinese:"泰迪熊"},{english:"favorite",phonetic:"/ˈfeɪvərɪt/",chinese:"最喜欢的"}]},{id:"10",title:"My Day",titleCn:"我的一天",image:"/images/10我的一天.jpg",englishText:`I have a busy but wonderful day. Let me tell you about my daily routine.

I wake up at seven in the morning. I brush my teeth, wash my face, and comb my hair. I always make my bed.

I eat breakfast with my family at half past seven. Mom makes eggs and milk for me. Then I go to school by yellow school bus.

After school, I do my homework. Then I play with my friends. After dinner, I read books. At nine, I take a shower and go to bed. Sweet dreams!`,chineseText:`我每天都很忙碌但很美好。让我告诉你我每天的安排。

早上七点起床。我刷牙、洗脸、梳头。起床后我整理床铺。

七点半我和家人一起吃早餐。妈妈给我做鸡蛋和牛奶。然后我坐校车去上学。

放学后，我做作业。然后和朋友们玩。晚饭后，我读书。九点，我洗澡然后上床睡觉。甜甜的梦！`,vocabularies:[{english:"busy",phonetic:"/ˈbɪzi/",chinese:"忙碌的"},{english:"wake up",phonetic:"/weɪk ʌp/",chinese:"起床"},{english:"brush teeth",phonetic:"/brʌʃ tiːθ/",chinese:"刷牙"},{english:"wash",phonetic:"/wɒʃ/",chinese:"洗"},{english:"breakfast",phonetic:"/ˈbrekfəst/",chinese:"早餐"},{english:"family",phonetic:"/ˈfæməli/",chinese:"家人"},{english:"homework",phonetic:"/ˈhoʊmwɜːrk/",chinese:"作业"},{english:"friend",phonetic:"/frend/",chinese:"朋友"}]},{id:"11",title:"I Love Summer",titleCn:"我爱夏天",image:"/images/11我爱夏天.jpg",englishText:`Summer is my favorite season. The weather is warm and the days are long!

In summer, the sun is bright and the sky is blue. The clouds look like white cotton candy.

I can swim in the swimming pool every weekend. The water is cool. I splash around with my friends and have fun.

I eat lots of ice cream in summer. My favorite flavor is strawberry. I cannot wait for summer vacation to go to the beach!`,chineseText:`夏天是我最喜欢的季节。天气暖和，白天很长！

夏天的时候，太阳很明亮，天空是蓝色的。云朵看起来像棉花糖。

每周末我都可以在游泳池里游泳。水很凉快。我和朋友们一起玩得很开心。

夏天我可以吃很多冰淇淋。我最喜欢的口味是草莓味。我等不及暑假去海边了！`,vocabularies:[{english:"summer",phonetic:"/ˈsʌmər/",chinese:"夏天"},{english:"season",phonetic:"/ˈsiːzn/",chinese:"季节"},{english:"sun",phonetic:"/sʌn/",chinese:"太阳"},{english:"sky",phonetic:"/skaɪ/",chinese:"天空"},{english:"swim",phonetic:"/swɪm/",chinese:"游泳"},{english:"swimming pool",phonetic:"/ˈswɪmɪŋ puːl/",chinese:"游泳池"},{english:"ice cream",phonetic:"/aɪs kriːm/",chinese:"冰淇淋"},{english:"vacation",phonetic:"/veɪˈkeɪʃn/",chinese:"假期"}]},{id:"12",title:"My Dog",titleCn:"我的小狗",image:"/images/12我的小狗.jpg",englishText:`I have a white dog. His name is Wangwang. He is fluffy and cute, and he is my best friend.

He has four legs and a fluffy tail that wags when he sees me. He can run fast in the park and never gets tired.

He likes to play fetch with me. He brings the ball back to me every time. He always looks happy!

When I am sad, he sits beside me and puts his head on my lap. He makes me feel better. My dog makes me happy every day!`,chineseText:`我有一只白色的小狗。他叫汪汪。他毛茸茸的很可爱，他是我最好的朋友。

他有四条腿和一条毛茸茸的尾巴，每次见到我都会摇尾巴。他能在公园里跑得很快，而且从来不累。

他喜欢和我在公园玩捡球游戏。他每次都会把球叼回来。他看起来总是很开心！

我不开心的时候，他就坐在我旁边，把头放在我腿上。他让我感觉好一些。我的小狗每天都让我开心！`,vocabularies:[{english:"dog",phonetic:"/dɔːɡ/",chinese:"狗"},{english:"white",phonetic:"/waɪt/",chinese:"白色的"},{english:"friend",phonetic:"/frend/",chinese:"朋友"},{english:"leg",phonetic:"/leɡ/",chinese:"腿"},{english:"tail",phonetic:"/teɪl/",chinese:"尾巴"},{english:"run",phonetic:"/rʌn/",chinese:"跑"},{english:"ball",phonetic:"/bɔːl/",chinese:"球"},{english:"park",phonetic:"/pɑːrk/",chinese:"公园"},{english:"happy",phonetic:"/ˈhæpi/",chinese:"开心的"}]},{id:"13",title:"My Cat",titleCn:"我的小猫",image:"/images/13我的小猫.jpg",englishText:`I have a cute cat. Her name is Mimi. She is soft and fluffy with beautiful white fur.

She has big green eyes and whiskers. She likes to sleep in the sun on the windowsill all afternoon.

Mimi can catch mice in the garden. She is a good hunter. But she is also very gentle and loves to cuddle with me.

She likes to sit on my lap and purr when I pet her. The sound is like a little motor. My cat is my sweet companion and I love her!`,chineseText:`我有一只可爱的猫。她叫咪咪。她软软的毛茸茸的，有漂亮的白色毛发。

她有一双大大的绿眼睛，脸上有胡须。她喜欢整个下午在窗台上晒太阳睡觉。

咪咪会在花园里抓老鼠。她是个好猎手。但她也非常温柔，喜欢和我依偎在一起。

她喜欢坐在我腿上，当我抚摸她时她会咕噜叫。那个声音就像小马达。我的猫是我甜蜜的伙伴，我非常爱她！`,vocabularies:[{english:"cat",phonetic:"/kæt/",chinese:"猫"},{english:"cute",phonetic:"/kjuːt/",chinese:"可爱的"},{english:"soft",phonetic:"/sɔːft/",chinese:"柔软的"},{english:"eye",phonetic:"/aɪ/",chinese:"眼睛"},{english:"sleep",phonetic:"/sliːp/",chinese:"睡觉"},{english:"sun",phonetic:"/sʌn/",chinese:"太阳"},{english:"gentle",phonetic:"/ˈdʒentl/",chinese:"温柔的"},{english:"companion",phonetic:"/kəmˈpæniən/",chinese:"伙伴"}]},{id:"14",title:"At the Zoo",titleCn:"在动物园",image:"/images/14在动物园.jpg",englishText:`Last Sunday, my family went to the zoo. We were excited to see many different animals.

We saw a big elephant. He had a long nose and big ears. He sprayed water at us and we laughed!

We also saw giraffes with very long necks. They ate leaves from tall trees. Their spots were beautiful.

The panda was cute and a little lazy. He ate bamboo all day. Monkeys swung from tree to tree.

The zoo was so much fun! I learned that we should protect all animals.`,chineseText:`上星期天，我们全家去了动物园。我们非常兴奋能在一个地方看到很多不同的动物。

我们看到了一头大象。他有长长的鼻子和大大的耳朵。他向我们喷水，我们都笑了！他吃了很多花生。

我们还看到了长颈鹿，脖子很长。他们吃高树上的叶子。他们的斑点像指纹一样美丽独特。

熊猫又可爱又有点懒。他整天吃竹子。猴子在树之间荡来荡去，发出有趣的声音。

动物园真有趣！我学到了我们应该保护所有动物。`,vocabularies:[{english:"zoo",phonetic:"/zuː/",chinese:"动物园"},{english:"animal",phonetic:"/ˈænɪml/",chinese:"动物"},{english:"elephant",phonetic:"/ˈelɪfənt/",chinese:"大象"},{english:"giraffe",phonetic:"/dʒəˈræf/",chinese:"长颈鹿"},{english:"neck",phonetic:"/nek/",chinese:"脖子"},{english:"leaf",phonetic:"/liːf/",chinese:"叶子"},{english:"panda",phonetic:"/ˈpændə/",chinese:"熊猫"},{english:"bamboo",phonetic:"/ˌbæmˈbuː/",chinese:"竹子"}]},{id:"15",title:"My Favorite Food",titleCn:"我最喜欢的食物",image:"/images/15我最喜欢的食物.jpg",englishText:`My favorite food is dumplings. They are delicious and juicy, and every bite makes me feel warm inside.

My mom makes the best dumplings in the world. She puts meat and vegetables inside and folds the wrapper carefully.

I help her make dumplings on weekends. We make them together and it is fun. Sometimes I make funny-shaped dumplings and we laugh.

We eat dumplings with vinegar and soy sauce. The taste reminds me of happy family times. Dumplings make me think of home and love!`,chineseText:`我最喜欢的食物是饺子。它们又好吃又多汁，每一口都让我感到温暖幸福。

我妈妈做的饺子是世界上最好吃的。她在里面放肉和蔬菜，仔细捏好面皮。

周末我帮她包饺子。我们一起做，很有趣。有时候我会包出形状奇怪的饺子，我们都会笑。

我们吃饺子配醋和酱油。味道让我想起快乐的家庭时光。饺子让我想到家和爱！`,vocabularies:[{english:"favorite",phonetic:"/ˈfeɪvərɪt/",chinese:"最喜欢的"},{english:"food",phonetic:"/fuːd/",chinese:"食物"},{english:"dumpling",phonetic:"/ˈdʌmplɪŋ/",chinese:"饺子"},{english:"delicious",phonetic:"/dɪˈlɪʃəs/",chinese:"美味的"},{english:"mom",phonetic:"/moʊm/",chinese:"妈妈"},{english:"meat",phonetic:"/miːt/",chinese:"肉"},{english:"vegetable",phonetic:"/ˈvedʒtəbl/",chinese:"蔬菜"},{english:"weekend",phonetic:"/ˈwiːkend/",chinese:"周末"}]},{id:"16",title:"My Birthday",titleCn:"我的生日",image:"/images/16我的生日.jpg",englishText:`Yesterday was my birthday. I turned eight years old and it was the best day ever!

My mom baked a big chocolate cake. It had eight candles. I closed my eyes, made a wish, and blew them all out!

I got many gifts from my family and friends. Grandma gave me a new storybook. Dad gave me a soccer ball. A book was my favorite present.

We ate cake and played party games. My friends sang the birthday song for me. It was the best birthday ever and I felt so loved!`,chineseText:`昨天是我的生日。我八岁了，这是最好的一天！

我妈妈烤了一个大巧克力蛋糕。上面有八根蜡烛。我闭上眼睛，许了个愿望，然后一口气把它们全部吹灭了！

我从家人和朋友那里收到了很多礼物。奶奶给了我一本新的故事书。爸爸给了我一个足球。一本书是我最喜欢的礼物。

我们一起吃蛋糕、玩派对游戏。我的朋友们为我唱了生日歌。这是有史以来最好的生日，我感到被爱包围！`,vocabularies:[{english:"birthday",phonetic:"/ˈbɜːrθdeɪ/",chinese:"生日"},{english:"cake",phonetic:"/keɪk/",chinese:"蛋糕"},{english:"candle",phonetic:"/ˈkændl/",chinese:"蜡烛"},{english:"gift",phonetic:"/ɡɪft/",chinese:"礼物"},{english:"present",phonetic:"/ˈpreznt/",chinese:"礼物"},{english:"family",phonetic:"/ˈfæməli/",chinese:"家人"},{english:"friend",phonetic:"/frend/",chinese:"朋友"},{english:"book",phonetic:"/bʊk/",chinese:"书"}]},{id:"17",title:"At the Park",titleCn:"在公园",image:"/images/17在公园.jpg",englishText:`This afternoon, I went to the park with my dad. The weather was nice with a gentle breeze.

There were many children playing. Some were riding bikes, some were on swings. The playground was full of laughter.

I flew a red kite with my dad. At first, it got stuck in a tree, but dad climbed up and saved it. Then the kite flew high in the blue sky.

We sat under a big tree and ate ice cream. We watched the clouds. What a wonderful afternoon!`,chineseText:`今天下午，我和爸爸去公园了。天气很好，有轻柔的微风。

公园里有很多孩子在玩。有的在骑自行车，有的在荡秋千。操场上充满了笑声。

我和爸爸一起放红色的风筝。开始时风筝卡在树上了，但爸爸爬上树救下了它。然后风筝在蓝天上飞得很高。

我们坐在一棵大树下吃冰淇淋。我们看着云朵。这是一个多么美好的下午！`,vocabularies:[{english:"park",phonetic:"/pɑːrk/",chinese:"公园"},{english:"weather",phonetic:"/ˈweðər/",chinese:"天气"},{english:"child",phonetic:"/tʃaɪld/",chinese:"孩子"},{english:"swing",phonetic:"/swɪŋ/",chinese:"秋千"},{english:"slide",phonetic:"/slaɪd/",chinese:"滑梯"},{english:"kite",phonetic:"/kaɪt/",chinese:"风筝"},{english:"sky",phonetic:"/skaɪ/",chinese:"天空"},{english:"tree",phonetic:"/triː/",chinese:"树"},{english:"ice cream",phonetic:"/aɪs kriːm/",chinese:"冰淇淋"}]},{id:"18",title:"My Hobbies",titleCn:"我的爱好",image:"/images/18我的爱好.jpg",englishText:`I have many hobbies but drawing is my favorite. I use crayons to create pictures of animals and my family.

I draw pictures every day after finishing homework. Sometimes I draw cats and dogs. My mom says I have an artistic eye.

I also like to read storybooks. They take me to magical worlds with talking animals. I can imagine being part of their adventures.

Sometimes I play the piano and sing songs. Music makes me feel happy and relaxed.`,chineseText:`我有很多爱好，但画画是我最喜欢的。我用蜡笔创作动物和家人的图画。

每天做完作业后我都画画。有时我画猫和狗。妈妈说我有艺术眼光。

我也喜欢读故事书。它们带我进入神奇的世界，那里有会说话的动物。我可以想象自己成为他们冒险的一部分。

有时我弹钢琴和唱歌。音乐让我感到快乐和放松。`,vocabularies:[{english:"hobby",phonetic:"/ˈhɒbi/",chinese:"爱好"},{english:"draw",phonetic:"/drɔː/",chinese:"画"},{english:"picture",phonetic:"/ˈpɪktʃər/",chinese:"图片"},{english:"crayon",phonetic:"/ˈkreɪən/",chinese:"蜡笔"},{english:"animal",phonetic:"/ˈænɪml/",chinese:"动物"},{english:"flower",phonetic:"/ˈflaʊər/",chinese:"花"},{english:"storybook",phonetic:"/ˈstɔːrɪbʊk/",chinese:"故事书"},{english:"piano",phonetic:"/piˈænoʊ/",chinese:"钢琴"},{english:"music",phonetic:"/ˈmjuːzɪk/",chinese:"音乐"},{english:"happy",phonetic:"/ˈhæpi/",chinese:"开心的"}]},{id:"19",title:"When I Grow Up",titleCn:"当我长大后",image:"/images/19当我长大后.jpg",englishText:`When I grow up, I want to be a teacher. I will have a big classroom with lots of books. Students will sit at wooden desks and learn new things every day.

I will teach kids to read and write. I will make lessons fun with songs and games.

I will help them learn about the amazing world. We will talk about animals and stars in the sky.

I will teach them to be kind and honest. Being a teacher is important and I am ready to work hard for my dream!`,chineseText:`当我长大后，我想当一名老师。我会有一个大教室，书架上摆满了很多书。学生们会坐在木桌前，每天学习新知识。

我会教孩子们读书写字。我会用歌曲、游戏和有趣的故事让课堂变得有趣。

我会帮助他们了解这个神奇的世界。我们会谈论动物、植物和天空中的星星。

我会教他们善良、诚实和助人为乐。当老师很重要，我准备好努力工作来实现我的梦想！`,vocabularies:[{english:"grow up",phonetic:"/ɡroʊ ʌp/",chinese:"长大"},{english:"teacher",phonetic:"/ˈtiːtʃər/",chinese:"老师"},{english:"classroom",phonetic:"/ˈklæsrʊm/",chinese:"教室"},{english:"book",phonetic:"/bʊk/",chinese:"书"},{english:"read",phonetic:"/riːd/",chinese:"读"},{english:"write",phonetic:"/raɪt/",chinese:"写"},{english:"lesson",phonetic:"/ˈlesn/",chinese:"课"},{english:"animal",phonetic:"/ˈænɪml/",chinese:"动物"},{english:"plant",phonetic:"/plænt/",chinese:"植物"},{english:"star",phonetic:"/stɑːr/",chinese:"星星"},{english:"kind",phonetic:"/kaɪnd/",chinese:"善良的"},{english:"helpful",phonetic:"/ˈhelpfl/",chinese:"有帮助的"}]},{id:"20",title:"A Rainy Day",titleCn:"雨天",image:"/images/20雨天.jpg",englishText:`This morning, it started to rain. The sky was gray and dark clouds covered the sun. Rain dropped on the windows.

I carried my yellow umbrella to school. I also wore my blue raincoat and rubber boots. They kept me dry on the way to school.

I saw many puddles during recess. Some children jumped in them and splashed water everywhere. We laughed and played in the rain.

After school, I went home. Mom made hot chocolate for me. I watched the rain from my window. Rainy days can be fun and cozy too!`,chineseText:`今天早上，开始下雨了。天空灰蒙蒙的，乌云遮住了太阳。雨滴落在窗户上。

我带着黄色雨伞去上学。我还穿了蓝色雨衣和橡胶靴。它们在我上学的路上保持我干爽。

课间休息时，我看到地上有很多水坑。一些孩子跳进水坑，水溅得到处都是。我们像鸭子一样在雨中欢笑玩耍。

放学后，我撑着雨伞回家。妈妈给我做了热巧克力。我一边喝热巧克力，一边从窗户看雨。雨天也可以很有趣很温馨！`,vocabularies:[{english:"rain",phonetic:"/reɪn/",chinese:"雨"},{english:"sky",phonetic:"/skaɪ/",chinese:"天空"},{english:"cloud",phonetic:"/klaʊd/",chinese:"云"},{english:"umbrella",phonetic:"/ʌmˈbrelə/",chinese:"雨伞"},{english:"raincoat",phonetic:"/ˈreɪnkoʊt/",chinese:"雨衣"},{english:"puddle",phonetic:"/ˈpʌdl/",chinese:"水坑"},{english:"jump",phonetic:"/dʒʌmp/",chinese:"跳"},{english:"play",phonetic:"/pleɪ/",chinese:"玩"},{english:"chocolate",phonetic:"/ˈtʃɒklət/",chinese:"巧克力"},{english:"cozy",phonetic:"/ˈkoʊzi/",chinese:"温馨的"}]},{id:"21",title:"My Favorite Color",titleCn:"我最喜欢的颜色",image:"/images/21我最喜欢的颜色.jpg",englishText:`My favorite color is blue. Blue is the color of the sky and the ocean. It makes me feel calm and peaceful.

I have a blue backpack and blue shoes. My bed has blue sheets. Blue is my favorite color because it reminds me of sunny days.

I also like yellow because it is bright like the sun. But blue is still my number one favorite. What is your favorite color?`,chineseText:`我最喜欢的颜色是蓝色。蓝色是天空和大海的颜色。它让我感到平静和安宁。

我有一个蓝色的背包和蓝色的鞋子。我的床有蓝色的床单。蓝色是我最喜欢的颜色，因为它让我想起阳光明媚的日子。

我也喜欢黄色，因为它像太阳一样明亮。但蓝色仍然是我的第一选择。你最喜欢的颜色是什么？`,vocabularies:[{english:"color",phonetic:"/ˈkʌlər/",chinese:"颜色"},{english:"blue",phonetic:"/bluː/",chinese:"蓝色"},{english:"sky",phonetic:"/skaɪ/",chinese:"天空"},{english:"ocean",phonetic:"/ˈoʊʃn/",chinese:"海洋"},{english:"calm",phonetic:"/kɑːm/",chinese:"平静的"},{english:"backpack",phonetic:"/ˈbækpæk/",chinese:"背包"},{english:"yellow",phonetic:"/ˈjeloʊ/",chinese:"黄色"},{english:"sunny",phonetic:"/ˈsʌni/",chinese:"阳光明媚的"}]},{id:"22",title:"My Week",titleCn:"我的一周",image:"/images/22我的一周.jpg",englishText:`I have a busy week from Monday to Friday. I go to school every day and learn many new things.

On Monday, I have Chinese class. On Tuesday, I have Math. Wednesday is my favorite because I have Art class. Thursday I have English and Friday I have Music.

On Saturday, I rest at home and do fun things. On Sunday, I go to the park with my family. The weekend is the best part of the week!`,chineseText:`我从周一到周五都很忙。每天都上学，学到很多新东西。

周一有语文课。周二有数学课。周三是我最喜欢的，因为有美术课。周四有英语课，周五有音乐课。

周六我在家休息，做有趣的事情。周日我和家人去公园。周末是一周中最棒的时光！`,vocabularies:[{english:"week",phonetic:"/wiːk/",chinese:"星期"},{english:"Monday",phonetic:"/ˈmʌndeɪ/",chinese:"周一"},{english:"Tuesday",phonetic:"/ˈtuːzdeɪ/",chinese:"周二"},{english:"Wednesday",phonetic:"/ˈwenzdeɪ/",chinese:"周三"},{english:"Thursday",phonetic:"/ˈθɜːrzdeɪ/",chinese:"周四"},{english:"Friday",phonetic:"/ˈfraɪdeɪ/",chinese:"周五"},{english:"Saturday",phonetic:"/ˈsætərdeɪ/",chinese:"周六"},{english:"Sunday",phonetic:"/ˈsʌndeɪ/",chinese:"周日"}]},{id:"23",title:"My House",titleCn:"我的家",image:"/images/23我的家.jpg",englishText:`My house has three rooms. There is a living room, a bedroom, and a kitchen. It is not big but it is cozy and comfortable.

The living room has a soft sofa and a big TV. My bedroom has a nice bed and many books. The kitchen smells like delicious food every day.

I love my house because my family lives here together. Home is the warmest place in the world.`,chineseText:`我的房子有三个房间。有客厅、卧室和厨房。它不大但是很温馨舒适。

客厅有柔软的沙发和大电视。我的卧室有一张漂亮的床和很多书。厨房每天都有美食的香味。

我爱我的家，因为我的家人住在一起。家是世界上最温暖的地方。`,vocabularies:[{english:"house",phonetic:"/haʊs/",chinese:"房子"},{english:"room",phonetic:"/ruːm/",chinese:"房间"},{english:"living room",phonetic:"/ˈlɪvɪŋ ruːm/",chinese:"客厅"},{english:"kitchen",phonetic:"/ˈkɪtʃɪn/",chinese:"厨房"},{english:"sofa",phonetic:"/ˈsoʊfə/",chinese:"沙发"},{english:"bedroom",phonetic:"/ˈbedruːm/",chinese:"卧室"},{english:"family",phonetic:"/ˈfæməli/",chinese:"家人"},{english:"home",phonetic:"/hoʊm/",chinese:"家"}]},{id:"24",title:"The Four Seasons",titleCn:"四季",image:"/images/24四季.jpg",englishText:`There are four seasons in a year. They are spring, summer, autumn, and winter.

In spring, flowers bloom and birds sing. The weather is warm and nice. Summer is hot and sunny. I like to swim in summer.

Autumn is cool and leaves turn yellow. Winter is cold and sometimes it snows. Children like to play in the snow.

Each season is beautiful in its own way. I love all four seasons!`,chineseText:`一年有四个季节。它们是春天、夏天、秋天和冬天。

春天，花朵盛开，鸟儿歌唱。天气温暖宜人。夏天炎热阳光充足。我喜欢在夏天游泳。

秋天凉爽，树叶变黄。冬天寒冷，有时会下雪。孩子们喜欢在雪里玩耍。

每个季节都有自己的美丽。我爱所有四个季节！`,vocabularies:[{english:"season",phonetic:"/ˈsiːzn/",chinese:"季节"},{english:"spring",phonetic:"/sprɪŋ/",chinese:"春天"},{english:"summer",phonetic:"/ˈsʌmər/",chinese:"夏天"},{english:"autumn",phonetic:"/ˈɔːtəm/",chinese:"秋天"},{english:"winter",phonetic:"/ˈwɪntər/",chinese:"冬天"},{english:"flower",phonetic:"/ˈflaʊər/",chinese:"花"},{english:"snow",phonetic:"/snoʊ/",chinese:"雪"},{english:"leaf",phonetic:"/liːf/",chinese:"叶子"}]},{id:"25",title:"My Morning",titleCn:"我的早晨",image:"/images/25我的早晨.jpg",englishText:`Every morning, I wake up at six thirty. The first thing I do is stretch and say good morning to my family.

I brush my teeth and wash my face. Then I put on my school uniform. It is blue and white, very nice.

I eat breakfast with my mom. She makes yummy eggs and milk for me. After breakfast, I put on my backpack and go to school. Morning time is always busy but happy!`,chineseText:`每天早晨，我六点半醒来。我做的第一件事是伸个懒腰，向家人说早上好。

我刷牙、洗脸。然后穿上校服。是蓝白色的，很好看。

我和妈妈一起吃早餐。她给我做美味的鸡蛋和牛奶。早饭后，我背上书包去上学。早晨总是忙碌但快乐！`,vocabularies:[{english:"morning",phonetic:"/ˈmɔːrnɪŋ/",chinese:"早晨"},{english:"wake up",phonetic:"/weɪk ʌp/",chinese:"醒来"},{english:"stretch",phonetic:"/stretʃ/",chinese:"伸懒腰"},{english:"uniform",phonetic:"/ˈjuːnɪfɔːrm/",chinese:"校服"},{english:"breakfast",phonetic:"/ˈbrekfəst/",chinese:"早餐"},{english:"backpack",phonetic:"/ˈbækpæk/",chinese:"书包"},{english:"school",phonetic:"/skuːl/",chinese:"学校"},{english:"happy",phonetic:"/ˈhæpi/",chinese:"快乐的"}]},{id:"26",title:"My Pet Fish",titleCn:"我的宠物鱼",image:"/images/26我的宠物鱼.jpg",englishText:`I have a pet fish. His name is Goldy because he is golden. He swims in a round fishbowl.

Every morning, I give him little fish food. He swims to the top and eats it quickly. Goldy is small but very colorful.

I watch him swim around and around in the water. It makes me feel relaxed and happy. Sometimes I talk to him and he seems to listen!

My pet fish is my little friend. He makes my room feel alive. I love watching Goldy swim!`,chineseText:`我有一条宠物鱼。他叫小金，因为他全身金色。他在圆形的鱼缸里游泳。

每天早上，我给他喂小小的鱼食。他游到水面上，很快地把鱼食吃掉。小金很小但非常色彩斑斓。

我看他在水里游来游去。这让我感到放松和快乐。有时我和他说话，他似乎在听！

我的宠物鱼是我的小朋友。他让我的房间充满生机。我喜欢看小金游泳！`,vocabularies:[{english:"pet",phonetic:"/pet/",chinese:"宠物"},{english:"fish",phonetic:"/fɪʃ/",chinese:"鱼"},{english:"gold",phonetic:"/ɡoʊld/",chinese:"金色"},{english:"fishbowl",phonetic:"/ˈfɪʃboʊl/",chinese:"鱼缸"},{english:"food",phonetic:"/fuːd/",chinese:"食物"},{english:"colorful",phonetic:"/ˈkʌlərfl/",chinese:"色彩斑斓的"},{english:"relaxed",phonetic:"/rɪˈlækst/",chinese:"放松的"},{english:"friend",phonetic:"/frend/",chinese:"朋友"}]},{id:"27",title:"My School Bag",titleCn:"我的书包",image:"/images/27我的书包.jpg",englishText:`I have a big blue school bag. It has many pockets to put my things in.

In the front pocket, I put my pencil case. In the side pocket, I put my water bottle. In the main part, I put my books and homework.

My school bag carries everything I need for class. It is heavy sometimes but very useful. I bring it to school every day!`,chineseText:`我有一个大大的蓝色书包。它有很多口袋，可以放我的东西。

前面的口袋，我放铅笔盒。侧面的口袋，我放水壶。主要的部分，我放书和作业。

我的书包装着我上课需要的所有东西。有时很重但非常有用。我每天带着它去学校！`,vocabularies:[{english:"school bag",phonetic:"/skuːl bæɡ/",chinese:"书包"},{english:"pocket",phonetic:"/ˈpɒkɪt/",chinese:"口袋"},{english:"pencil case",phonetic:"/ˈpensl keɪs/",chinese:"铅笔盒"},{english:"water bottle",phonetic:"/ˈwɔːtər ˈbɒtl/",chinese:"水壶"},{english:"book",phonetic:"/bʊk/",chinese:"书"},{english:"homework",phonetic:"/ˈhoʊmwɜːrk/",chinese:"作业"},{english:"heavy",phonetic:"/ˈhevi/",chinese:"重的"},{english:"useful",phonetic:"/ˈjuːsfl/",chinese:"有用的"}]},{id:"28",title:"The Weather Today",titleCn:"今天的天气",image:"/images/28今天的天气.jpg",englishText:`Today is a sunny day. The sun is bright and the sky is blue. White clouds look like cotton candy floating in the sky.

The weather is warm and nice. I do not need my jacket today. I can play outside with my friends in the sunshine.

Yesterday it was rainy and cloudy. The ground had many puddles. But today is perfect for a picnic in the park!

I love sunny days because they make me feel happy. The warm sun feels good on my face.`,chineseText:`今天是晴天。太阳很亮，天空是蓝色的。白云像棉花糖一样飘浮在天空中。

天气温暖宜人。今天我不需要穿夹克。我可以和朋友们在阳光下在外面玩。

昨天下雨又多云。地上有很多水坑。但今天非常适合去公园野餐！

我喜欢晴天因为它们让我感到快乐。温暖的阳光照在脸上很舒服。`,vocabularies:[{english:"weather",phonetic:"/ˈweðər/",chinese:"天气"},{english:"sunny",phonetic:"/ˈsʌni/",chinese:"阳光充足的"},{english:"cloudy",phonetic:"/ˈklaʊdi/",chinese:"多云的"},{english:"rainy",phonetic:"/ˈreɪni/",chinese:"下雨的"},{english:"cloud",phonetic:"/klaʊd/",chinese:"云"},{english:"jacket",phonetic:"/ˈdʒækɪt/",chinese:"夹克"},{english:"picnic",phonetic:"/ˈpɪknɪk/",chinese:"野餐"},{english:"park",phonetic:"/pɑːrk/",chinese:"公园"}]},{id:"29",title:"My Favorite Subject",titleCn:"我最喜欢的科目",image:"/images/29我最喜欢的科目.jpg",englishText:`My favorite subject is Art class. I love to draw pictures with crayons and colored pencils.

In Art class, I can be creative and make beautiful things. I like to draw animals, flowers, and my family.

Sometimes we use clay to make fun shapes. Other times we cut paper to make nice pictures. Art class is always fun and relaxing.

What is your favorite subject?`,chineseText:`我最喜欢的科目是美术课。我喜欢用蜡笔和彩色铅笔画画。

在美术课上，我可以发挥创造力，创作美丽的东西。我喜欢画动物、花和我的家人。

有时我们用黏土制作有趣的形状。其他时候我们剪纸做漂亮的图画。美术课总是有趣又放松。

你最喜欢的科目是什么？`,vocabularies:[{english:"subject",phonetic:"/ˈsʌbdʒɪkt/",chinese:"科目"},{english:"art",phonetic:"/ɑːrt/",chinese:"美术"},{english:"draw",phonetic:"/drɔː/",chinese:"画"},{english:"creative",phonetic:"/kriˈeɪtɪv/",chinese:"有创造力的"},{english:"crayon",phonetic:"/ˈkreɪən/",chinese:"蜡笔"},{english:"clay",phonetic:"/kleɪ/",chinese:"黏土"},{english:"paper",phonetic:"/ˈpeɪpər/",chinese:"纸"},{english:"relaxing",phonetic:"/rɪˈlæksɪŋ/",chinese:"放松的"}]},{id:"30",title:"Going to Bed",titleCn:"上床睡觉",image:"/images/30上床睡觉.jpg",englishText:`Every night, I go to bed at nine o'clock. Before sleep, I brush my teeth and wash my face.

I read a storybook for a little while. The story is about a brave little rabbit. It makes me feel happy and sleepy.

My mom turns off the light and says good night. I close my eyes and think about the nice day I had.

Sweet dreams come to me as I sleep. Good night!`,chineseText:`每天晚上，我九点上床睡觉。睡前，我刷牙、洗脸。

我看一会儿故事书。故事是关于一只勇敢的小兔子的。它让我感到快乐和困倦。

妈妈关灯，说晚安。我闭上眼睛，想想我今天美好的一天。

当我睡着时，甜甜的梦来到我身边。晚安！`,vocabularies:[{english:"bed",phonetic:"/bed/",chinese:"床"},{english:"night",phonetic:"/naɪt/",chinese:"夜晚"},{english:"sleep",phonetic:"/sliːp/",chinese:"睡觉"},{english:"storybook",phonetic:"/ˈstɔːrɪbʊk/",chinese:"故事书"},{english:"brave",phonetic:"/breɪv/",chinese:"勇敢的"},{english:"rabbit",phonetic:"/ˈræbɪt/",chinese:"兔子"},{english:"light",phonetic:"/laɪt/",chinese:"灯"},{english:"dream",phonetic:"/driːm/",chinese:"梦"}]},{id:"31",title:"My Best Day",titleCn:"我最好的一天",image:"/images/31我最好的一天.png",englishText:`Last Saturday was the best day of my life. It was my birthday and everything was perfect.

In the morning, I got many gifts from my family. My grandma gave me a teddy bear. My dad gave me a new bike.

In the afternoon, my friends came to my party. We ate cake and played games. We sang and danced together.

In the evening, we had a big dinner. My mom made my favorite food. I felt so happy and loved. It was the best day ever!`,chineseText:`上星期六是我一生中最美好的一天。那天是我的生日，一切都那么完美。

早上，我收到了家人送的很多礼物。奶奶给了我一只泰迪熊。爸爸给了我一辆新自行车。

下午，朋友们来参加我的派对。我们吃蛋糕、玩游戏。我们一起唱歌跳舞。

晚上，我们吃了一顿大餐。妈妈做了我最喜欢的食物。我感到非常快乐和被爱。这是最好的一天！`,vocabularies:[{english:"birthday",phonetic:"/ˈbɜːrθdeɪ/",chinese:"生日"},{english:"gift",phonetic:"/ɡɪft/",chinese:"礼物"},{english:"teddy bear",phonetic:"/ˈtedi ber/",chinese:"泰迪熊"},{english:"bike",phonetic:"/baɪk/",chinese:"自行车"},{english:"party",phonetic:"/ˈpɑːrti/",chinese:"派对"},{english:"cake",phonetic:"/keɪk/",chinese:"蛋糕"},{english:"friend",phonetic:"/frend/",chinese:"朋友"},{english:"happy",phonetic:"/ˈhæpi/",chinese:"快乐的"}]},{id:"32",title:"My Shadow",titleCn:"我的影子",image:"/images/32我的影子.png",englishText:`I have a friend that follows me everywhere. It is my shadow! When the sun shines, my shadow appears on the ground.

Sometimes my shadow is big and sometimes it is small. When I jump, my shadow jumps too. When I run, my shadow runs fast.

At night, my shadow disappears. But in the morning, it comes back again. My shadow is always with me!

I think my shadow is cool because it copies everything I do. It is like a magic friend.`,chineseText:`我有一个朋友，它到处跟着我。它就是我的影子！当太阳照耀时，我的影子出现在地上。

有时我的影子很大，有时很小。当我跳的时候，我的影子也跳。当我跑的时候，我的影子也快跑。

晚上，我的影子消失了。但早上，它又回来了。我的影子总是和我在一起！

我觉得我的影子很酷，因为它复制我做的每件事。它就像一个神奇的朋友。`,vocabularies:[{english:"shadow",phonetic:"/ˈʃædoʊ/",chinese:"影子"},{english:"follow",phonetic:"/ˈfɒloʊ/",chinese:"跟随"},{english:"everywhere",phonetic:"/ˈevrɪwer/",chinese:"到处"},{english:"sun",phonetic:"/sʌn/",chinese:"太阳"},{english:"ground",phonetic:"/ɡraʊnd/",chinese:"地面"},{english:"jump",phonetic:"/dʒʌmp/",chinese:"跳"},{english:"run",phonetic:"/rʌn/",chinese:"跑"},{english:"magic",phonetic:"/ˈmædʒɪk/",chinese:"神奇的"}]},{id:"33",title:"The Little Red Hen",titleCn:"小红母鸡",image:"/images/33小红母鸡.png",englishText:`Once upon a time, there was a little red hen. She found some wheat seeds. Who will plant this wheat? asked the hen. No one wanted to help.

So the little red hen planted the seeds by herself. She watered them every day. The wheat grew tall and golden.

Who will cut the wheat? No one helped again. But the little red hen did it herself.

At last, she baked a beautiful bread. Who will eat this bread? This time, everyone wanted to help! But the little red hen said no one will eat!`,chineseText:`从前，有一只小红母鸡。她找到了一些麦子种子。"谁来种这些麦子？"母鸡问。没有人想帮忙。

所以小红母鸡自己种下了种子。她每天浇水。麦子长得很高，金灿灿的。

"谁来割麦子？"又没有人帮忙。但小红母鸡自己做了。

最后，她烤了一个漂亮的面包。"谁来吃这个面包？"这次，每个人都想帮忙！小红母鸡说："没有人帮忙，所以没有人能吃！"`,vocabularies:[{english:"hen",phonetic:"/hen/",chinese:"母鸡"},{english:"wheat",phonetic:"/wiːt/",chinese:"麦子"},{english:"seed",phonetic:"/siːd/",chinese:"种子"},{english:"plant",phonetic:"/plænt/",chinese:"种植"},{english:"water",phonetic:"/ˈwɔːtər/",chinese:"浇水"},{english:"cut",phonetic:"/kʌt/",chinese:"割"},{english:"bake",phonetic:"/beɪk/",chinese:"烤"},{english:"bread",phonetic:"/bred/",chinese:"面包"}]},{id:"34",title:"The Three Little Pigs",titleCn:"三只小猪",image:"/images/34三只小猪.png",englishText:`Once upon a time, there were three little pigs. They each built a house. The first pig used straw. It fell down easily.

The second pig used wood. The wolf blew it down too. The third pig used bricks. He worked hard and built a strong house.

The wolf huffed and puffed at the straw house. It fell down. He huffed and puffed at the wood house. It fell down too.

But the wolf could not blow down the brick house. The three little pigs were safe inside. Hard work pays off!`,chineseText:`从前，有三只小猪。他们各自建了一所房子。第一只小猪用稻草。房子很容易就倒了。

第二只小猪用木头。狼也把它吹倒了。第三只小猪用砖块。他努力工作，建了一所坚固的房子。

狼来到第一所房子。他用力吹。稻草房子倒了。狼来到第二所房子。他用力吹。木头房子也倒了。

但狼吹不倒砖房。三只小猪安全地待在里面。努力付出是有回报的！`,vocabularies:[{english:"pig",phonetic:"/pɪɡ/",chinese:"猪"},{english:"straw",phonetic:"/strɔː/",chinese:"稻草"},{english:"wood",phonetic:"/wʊd/",chinese:"木头"},{english:"brick",phonetic:"/brɪk/",chinese:"砖块"},{english:"wolf",phonetic:"/wʊlf/",chinese:"狼"},{english:"huff",phonetic:"/hʌf/",chinese:"用力吹"},{english:"puff",phonetic:"/pʌf/",chinese:"吹"},{english:"safe",phonetic:"/seɪf/",chinese:"安全的"}]},{id:"35",title:"My Grandfather's Garden",titleCn:"爷爷的花园",image:"/images/35爷爷的花园.png",englishText:`My grandfather has a beautiful garden behind his house. In spring, colorful flowers bloom everywhere.

He grows tomatoes, cucumbers, and green beans in his garden. The vegetables are fresh and delicious.

Grandpa spends many hours taking care of his garden. He waters the plants and removes the weeds. I like to help him sometimes.

I always learn something new when I am in the garden. Grandfather says the earth gives us good things when we take care of it.`,chineseText:`我爷爷的房子后面有一个美丽的花园。春天，五颜六色的花到处盛开。

他在花园里种西红柿、黄瓜和四季豆。蔬菜很新鲜很好吃。

爷爷花很多时间照料他的花园。他给植物浇水，除草。有时候我喜欢帮助他。

我在花园里总是学到新东西。爷爷说，大地会在我们照顾它的时候给我们好东西。`,vocabularies:[{english:"garden",phonetic:"/ˈɡɑːrdn/",chinese:"花园"},{english:"flower",phonetic:"/ˈflaʊər/",chinese:"花"},{english:"tomato",phonetic:"/təˈmeɪtoʊ/",chinese:"西红柿"},{english:"cucumber",phonetic:"/ˈkjuːkʌmbər/",chinese:"黄瓜"},{english:"vegetable",phonetic:"/ˈvedʒtəbl/",chinese:"蔬菜"},{english:"water",phonetic:"/ˈwɔːtər/",chinese:"浇水"},{english:"earth",phonetic:"/ɜːrθ/",chinese:"大地"},{english:"fresh",phonetic:"/freʃ/",chinese:"新鲜的"}]},{id:"36",title:"My Funny Cat",titleCn:"我有趣的猫",image:"/images/36我有趣的猫.png",englishText:`My cat is very funny. Every morning, she jumps onto my bed and wakes me up. She sits on my chest and looks at me with her big eyes.

Sometimes she runs around the house for no reason. She suddenly stops and then runs again. Mom calls her silly cat.

She likes to play with a red yarn ball. She bites it and kicks it with her feet.

When I am sad, she sits next to me and purrs. She makes me smile even on cloudy days. My cat is my best friend!`,chineseText:`我的猫很有趣。每天早上，她跳到我的床上把我叫醒。她坐在我胸口，用大眼睛看着我。

有时候她无缘无故地在房子里跑来跑去。她突然停下来，然后又跑起来。妈妈叫她傻猫。

她喜欢玩红色的毛线球。她咬它，用脚踢它。有时她抓住了它，感到很骄傲。

我不开心的时候，她坐在我旁边咕噜叫。她甚至在阴天也让我微笑。我的猫是我最好的朋友！`,vocabularies:[{english:"cat",phonetic:"/kæt/",chinese:"猫"},{english:"funny",phonetic:"/ˈfʌni/",chinese:"有趣的"},{english:"chest",phonetic:"/tʃest/",chinese:"胸口"},{english:"yarn",phonetic:"/jɑːrn/",chinese:"毛线"},{english:"bite",phonetic:"/baɪt/",chinese:"咬"},{english:"proud",phonetic:"/praʊd/",chinese:"骄傲的"},{english:"purr",phonetic:"/pɜːr/",chinese:"咕噜叫"},{english:"cloudy",phonetic:"/ˈklaʊdi/",chinese:"阴天的"}]},{id:"37",title:"My Happy Family",titleCn:"我幸福的家",image:"/images/37我幸福的家.png",englishText:`I have a happy family. My dad works hard every day. My mom cooks delicious food for us. My grandma tells me stories every night.

My little sister is cute and funny. She always follows me around and wants to play with me. Sometimes we fight but we always make up.

We eat dinner together every evening. We talk about our day and laugh together. Family time is the best time of the day.

I feel safe and loved in my home. I am lucky to have such a wonderful family!`,chineseText:`我有一个幸福的家。爸爸每天努力工作。妈妈为我们做美味的食物。奶奶每天晚上给我讲故事。

我的小妹妹很可爱很有趣。她总是跟着我，想和我玩。有时我们会吵架，但我们总是和好。

每天晚上我们一起吃晚饭。我们谈论一天的事情，一起笑。家庭时光是一天中最好的时光。

在家里我感到安全和被爱。我很幸运有这样一个美好的家庭！`,vocabularies:[{english:"family",phonetic:"/ˈfæməli/",chinese:"家庭"},{english:"work",phonetic:"/wɜːrk/",chinese:"工作"},{english:"sister",phonetic:"/ˈsɪstər/",chinese:"妹妹"},{english:"together",phonetic:"/təˈɡeðər/",chinese:"一起"},{english:"talk",phonetic:"/tɔːk/",chinese:"谈话"},{english:"laugh",phonetic:"/læf/",chinese:"笑"},{english:"safe",phonetic:"/seɪf/",chinese:"安全的"},{english:"lucky",phonetic:"/ˈlʌki/",chinese:"幸运的"}]},{id:"38",title:"My First Day at School",titleCn:"我第一天上学",image:"/images/38我第一天上学.png",englishText:`I remember my first day at school. I was very nervous and a little scared. The school building looked big and new.

My mom held my hand and walked with me. My teacher smiled and said hello. Her name was Miss Li. She was very kind.

I met many new friends that day. We played together and shared toys. At first, I missed my mom. But then I had so much fun.

When mom picked me up, I could not stop talking. I said, Mom, I love school!`,chineseText:`我记得我第一天上学的日子。我非常紧张，有点害怕。学校建筑看起来又大又新。

妈妈握着我的手，和我一起走。我的老师微笑着打招呼。她叫李老师。她非常和善。

那天我遇到了很多新朋友。我们一起玩，分享玩具。刚开始，我想妈妈。但后来我玩得很开心，忘了难过。

当妈妈来接我时，我停不下来地谈论我的一天。我说："妈妈，我喜欢上学！"`,vocabularies:[{english:"nervous",phonetic:"/ˈnɜːrvəs/",chinese:"紧张的"},{english:"scared",phonetic:"/skerd/",chinese:"害怕的"},{english:"building",phonetic:"/ˈbɪldɪŋ/",chinese:"建筑"},{english:"teacher",phonetic:"/ˈtiːtʃər/",chinese:"老师"},{english:"friend",phonetic:"/frend/",chinese:"朋友"},{english:"share",phonetic:"/ʃer/",chinese:"分享"},{english:"pick up",phonetic:"/pɪk ʌp/",chinese:"接"},{english:"love",phonetic:"/lʌv/",chinese:"爱"}]},{id:"39",title:"The Clever Rabbit",titleCn:"聪明的兔子",image:"/images/39聪明的兔子.png",englishText:`Once upon a time, a clever rabbit lived in a forest. One day, a lion became the king. All animals were afraid of him.

The rabbit had an idea. She went to the lake and said to the lion, There is another lion in the lake. He wants to fight you!

The lion went to the lake. He saw his reflection and thought it was another lion. He jumped into the water.

All the animals laughed. The lion learned that being mean does not make you strong. Cleverness is stronger than strength!`,chineseText:`从前，一只聪明的兔子住在森林里。一天，一头狮子成为了森林之王。狮子又大又壮。所有的动物都怕他。

兔子有了一个主意。她去湖边，对狮子说："你是最强的动物，但湖里还有另一头狮子。他想和你打架！"

狮子去了湖边。他在水里看到了自己的倒影。他以为那是另一头狮子。他吼叫一声，跳进水里。

所有的动物都笑了。狮子明白了，凶恶并不能让你强大。聪明比力量更强！`,vocabularies:[{english:"clever",phonetic:"/ˈklevər/",chinese:"聪明的"},{english:"rabbit",phonetic:"/ˈræbɪt/",chinese:"兔子"},{english:"lion",phonetic:"/ˈlaɪən/",chinese:"狮子"},{english:"king",phonetic:"/kɪŋ/",chinese:"国王"},{english:"forest",phonetic:"/ˈfɔːrɪst/",chinese:"森林"},{english:"lake",phonetic:"/leɪk/",chinese:"湖"},{english:"reflection",phonetic:"/rɪˈflekʃn/",chinese:"倒影"},{english:"strong",phonetic:"/strɒŋ/",chinese:"强壮的"}]},{id:"40",title:"My Little Brother",titleCn:"我的小弟弟",image:"/images/40我的小弟弟.png",englishText:`I have a little brother named Tom. He is only five years old. He has big eyes and a cute smile.

Tom follows me everywhere. He wants to do everything I do. When I read, he reads too. When I draw, he draws with me.

Sometimes Tom breaks my things. He drops my pencils and loses my books. It makes me angry.

When I am sad, Tom shares his candy with me. He hugs me and says, Do not cry. He is annoying but also lovely. I am glad he is my brother!`,chineseText:`我有一个小弟弟叫汤姆。他只有五岁。他有大眼睛和可爱的笑容。

汤姆到处跟着我。他想做我做的每件事。当我读书时，他也读。当我画画时，他也画。

有时汤姆弄坏我的东西。他弄掉我的铅笔，弄丢我的书。这让我生气。但然后他用可爱的笑容说对不起。

我不开心时，汤姆和我分享他的糖果。他抱抱我说："别哭，哥哥。"他很烦人但也很可爱。我很高兴他是我的弟弟！`,vocabularies:[{english:"brother",phonetic:"/ˈbrʌðər/",chinese:"弟弟"},{english:"smile",phonetic:"/smaɪl/",chinese:"微笑"},{english:"follow",phonetic:"/ˈfɒloʊ/",chinese:"跟随"},{english:"angry",phonetic:"/ˈæŋɡri/",chinese:"生气的"},{english:"candy",phonetic:"/ˈkændi/",chinese:"糖果"},{english:"hug",phonetic:"/hʌɡ/",chinese:"拥抱"},{english:"annoying",phonetic:"/əˈnɔɪɪŋ/",chinese:"烦人的"},{english:"lovely",phonetic:"/ˈlʌvli/",chinese:"可爱的"}]},{id:"41",title:"My Favorite Book",titleCn:"我最喜欢的书",image:"/images/41我最喜欢的书.png",englishText:`My favorite book is about a brave mouse. He lives in a big library and loves to read books.

One day, the library catches fire. All the animals run away. But the little mouse stays and saves many books.

He carries books one by one to safety. His paws get burned but he never stops. He saves every single book!

After that, all the animals call him a hero. But the little mouse just smiles and says, Books are my friends. I must save them.`,chineseText:`我最喜欢的书是关于一只勇敢的小老鼠的。他住在一个大图书馆里，喜欢读书。

一天，图书馆着火了。所有动物都逃跑了。但小老鼠留下来，救了很多书。

他一次一只地把书搬到安全的地方。他的爪子被烧伤了，但他从不停止。他救出了每一本书！

之后，所有动物都叫他英雄。但小老鼠只是笑笑说："书是我的朋友。我必须救它们。"`,vocabularies:[{english:"mouse",phonetic:"/maʊs/",chinese:"老鼠"},{english:"library",phonetic:"/ˈlaɪbreri/",chinese:"图书馆"},{english:"fire",phonetic:"/ˈfaɪər/",chinese:"火"},{english:"burn",phonetic:"/bɜːrn/",chinese:"烧伤"},{english:"save",phonetic:"/seɪv/",chinese:"拯救"},{english:"hero",phonetic:"/ˈhɪroʊ/",chinese:"英雄"},{english:"book",phonetic:"/bʊk/",chinese:"书"},{english:"brave",phonetic:"/breɪv/",chinese:"勇敢的"}]},{id:"42",title:"The Boy Who Cried Wolf",titleCn:"狼来了",image:"/images/42狼来了.png",englishText:`A shepherd boy watched sheep on the hill. He was bored and wanted to have fun. Help! Wolf! Help! he shouted.

The villagers ran to help him. But there was no wolf. The boy laughed and said, Just kidding!

Later, a wolf really came. Help! Wolf! the boy cried. But no one came. They thought it was another joke.

The wolf ran away with many sheep. The boy learned a lesson. If you tell lies, people will not believe you when you tell the truth.`,chineseText:`一个牧童在山上放羊。他很无聊，想找乐子。"救命！狼来了！救命！"他大喊。

村民们跑来帮他。但根本没有狼。男孩大笑说："开玩笑的！"

后来，真的来了一只狼。"救命！狼来了！"男孩哭了。但没有人来。他们以为又是一个玩笑。

狼叼走了很多羊。男孩学到了一个教训。如果你撒谎，当你说真话时，没有人会相信你。`,vocabularies:[{english:"shepherd",phonetic:"/ˈʃepərd/",chinese:"牧羊人"},{english:"sheep",phonetic:"/ʃiːp/",chinese:"羊"},{english:"wolf",phonetic:"/wʊlf/",chinese:"狼"},{english:"shout",phonetic:"/ʃaʊt/",chinese:"喊"},{english:"villager",phonetic:"/ˈvɪlɪdʒər/",chinese:"村民"},{english:"joke",phonetic:"/dʒoʊk/",chinese:"玩笑"},{english:"lie",phonetic:"/laɪ/",chinese:"谎言"},{english:"truth",phonetic:"/truːθ/",chinese:"真话"}]},{id:"43",title:"My School Lunch",titleCn:"我的学校午餐",image:"/images/43我的学校午餐.png",englishText:`I eat lunch at school every day at twelve o'clock. The lunch lady is very nice. She always smiles at me.

Today I had rice, chicken, and vegetables. The food was warm and tasty. I drank apple juice with my lunch.

I sit with my friends at lunch time. We talk and laugh together. Sometimes we share food with each other.

After lunch, I have a short rest. Then it is time for afternoon classes. School lunch time is always a happy time for me!`,chineseText:`我每天十二点在学校吃午饭。打饭阿姨很和善。她总是对我微笑。

今天我吃了米饭、鸡肉和蔬菜。食物是热的，很好吃。我喝了苹果汁配午餐。

午饭时间我和朋友们坐在一起。我们一起聊天、一起笑。有时我们互相分享食物。

午饭后，我休息一会儿。然后是下午课的时间。学校午餐时间总是我最快乐的时光！`,vocabularies:[{english:"lunch",phonetic:"/lʌntʃ/",chinese:"午餐"},{english:"school",phonetic:"/skuːl/",chinese:"学校"},{english:"rice",phonetic:"/raɪs/",chinese:"米饭"},{english:"chicken",phonetic:"/ˈtʃɪkɪn/",chinese:"鸡肉"},{english:"vegetable",phonetic:"/ˈvedʒtəbl/",chinese:"蔬菜"},{english:"juice",phonetic:"/dʒuːs/",chinese:"果汁"},{english:"rest",phonetic:"/rest/",chinese:"休息"},{english:"happy",phonetic:"/ˈhæpi/",chinese:"快乐的"}]},{id:"44",title:"The Little Star",titleCn:"小星星",image:"/images/44小星星.png",englishText:`High up in the sky, there was a little star. She was the smallest star in the whole universe. But she wanted to shine the brightest.

Every night, she tried her best to shine. But she was too small. Her light was not bright enough.

One night, a little girl looked up at the sky. She saw the little star and smiled. The little star felt so happy.

Now the little star shines every night. She may be small, but she is the favorite star of someone. Being loved is better than being the brightest!`,chineseText:`在高高的天空中，有一颗小星星。她是整个宇宙中最小的星星。但她想成为最亮的。

每天晚上，她尽力发光。但她太小了。她的光不够亮。

一天晚上，一个小女孩抬头看天空。她看到了小星星，笑了。小星星感到非常开心。她为小女孩多亮了一点。

现在小星星每天晚上都发光。她可能很小，但她某个人最喜欢的星星。被爱比成为最亮的更好！`,vocabularies:[{english:"star",phonetic:"/stɑːr/",chinese:"星星"},{english:"sky",phonetic:"/skaɪ/",chinese:"天空"},{english:"universe",phonetic:"/ˈjuːnɪvɜːrs/",chinese:"宇宙"},{english:"shine",phonetic:"/ʃaɪn/",chinese:"发光"},{english:"bright",phonetic:"/braɪt/",chinese:"明亮的"},{english:"girl",phonetic:"/ɡɜːrl/",chinese:"女孩"},{english:"favorite",phonetic:"/ˈfeɪvərɪt/",chinese:"最喜欢的"},{english:"love",phonetic:"/lʌv/",chinese:"爱"}]},{id:"45",title:"My Dad's Job",titleCn:"爸爸的工作",image:"/images/45爸爸的工作.png",englishText:`My dad is a doctor. He helps sick people feel better. Every morning, he wears a white coat to the hospital.

Dad comes home tired but happy. He says helping others is the best job in the world. Sometimes patients give him flowers to say thank you.

I am proud of my dad. When I grow up, I want to help people like him. Being a doctor is an important job. My dad is my hero!`,chineseText:`我爸爸是一名医生。他帮助生病的人感觉好些。每天早上，他穿着白大褂去医院。

爸爸回家时很累但很开心。他说帮助别人是世界上最好的工作。有时病人给他花，说谢谢。

我为爸爸感到骄傲。长大后，我想像他一样帮助别人。当医生是一份重要的工作。我爸爸是我的英雄！`,vocabularies:[{english:"doctor",phonetic:"/ˈdɒktər/",chinese:"医生"},{english:"sick",phonetic:"/sɪk/",chinese:"生病的"},{english:"hospital",phonetic:"/ˈhɒspɪtl/",chinese:"医院"},{english:"patient",phonetic:"/ˈpeɪʃnt/",chinese:"病人"},{english:"flower",phonetic:"/ˈflaʊər/",chinese:"花"},{english:"proud",phonetic:"/praʊd/",chinese:"骄傲的"},{english:"help",phonetic:"/help/",chinese:"帮助"},{english:"hero",phonetic:"/ˈhɪroʊ/",chinese:"英雄"}]},{id:"46",title:"The Hare and the Tortoise",titleCn:"龟兔赛跑",image:"/images/46龟兔赛跑.png",englishText:`A hare was proud of his speed. One day, he laughed at a tortoise. You are so slow! he said.

The tortoise smiled and said, Let us have a race. The hare agreed. He was sure he would win.

When the race started, the hare ran very fast. Soon, he was far ahead. He decided to take a nap under a tree.

Meanwhile, the tortoise kept walking slowly. When the hare woke up, he ran to the finish line. But the tortoise was already there!

The hare learned that slow and steady wins the race!`,chineseText:`一只兔子为自己的速度骄傲。一天，他嘲笑一只乌龟。"你太慢了！"他说。

乌龟笑着说："让我们比赛吧。"兔子同意了。他确信他会赢。

比赛开始后，兔子跑得很快。很快，他就远远领先了。他决定在一棵树下睡一觉。

同时，乌龟慢慢但稳定地走。当兔子醒来时，他跑向终点线。但乌龟已经在那里了！

兔子学到了慢而稳才能赢。坚持比快速更重要！`,vocabularies:[{english:"hare",phonetic:"/her/",chinese:"兔子"},{english:"tortoise",phonetic:"/ˈtɔːrtəs/",chinese:"乌龟"},{english:"proud",phonetic:"/praʊd/",chinese:"骄傲的"},{english:"speed",phonetic:"/spiːd/",chinese:"速度"},{english:"race",phonetic:"/reɪs/",chinese:"比赛"},{english:"nap",phonetic:"/næp/",chinese:"小睡"},{english:"steady",phonetic:"/ˈstedi/",chinese:"稳定的"},{english:"win",phonetic:"/wɪn/",chinese:"赢"}]},{id:"47",title:"My Grandmother's Kitchen",titleCn:"奶奶的厨房",image:"/images/47奶奶的厨房.png",englishText:`My grandmother has a warm and cozy kitchen. The smell of fresh bread fills the air every morning.

Grandma bakes delicious cookies and cakes. She uses recipes from her own mother. The cookies taste like love.

I love to sit at the wooden table in her kitchen. We talk and cook together. She tells me stories about the old days.

Grandma says the best ingredients are love and happiness. Her kitchen is my favorite place in the world.`,chineseText:`我奶奶有一个温暖舒适的厨房。每天早上，新鲜面包的香气弥漫在空气中。

奶奶烤美味的饼干和蛋糕。她用她自己妈妈的食谱。饼干吃起来像爱的味道。

我喜欢坐在她厨房的木桌旁。我们一起聊天，一起做饭。她给我讲过去的故事。

奶奶说最好的配料是爱和幸福。她的厨房是我世界上最爱的地方。`,vocabularies:[{english:"kitchen",phonetic:"/ˈkɪtʃɪn/",chinese:"厨房"},{english:"bread",phonetic:"/bred/",chinese:"面包"},{english:"cookie",phonetic:"/ˈkʊki/",chinese:"饼干"},{english:"cake",phonetic:"/keɪk/",chinese:"蛋糕"},{english:"recipe",phonetic:"/ˈresɪpi/",chinese:"食谱"},{english:"table",phonetic:"/ˈteɪbl/",chinese:"桌子"},{english:"ingredient",phonetic:"/ɪnˈɡriːdiənt/",chinese:"配料"},{english:"happiness",phonetic:"/ˈhæpinəs/",chinese:"幸福"}]},{id:"48",title:"The Tortoise and the Hare",titleCn:"兔子和乌龟",image:"/images/48兔子和乌龟.png",englishText:`One sunny day, a hare met a tortoise by the pond. The hare was fast and the tortoise was slow.

The hare challenged the tortoise to a race. The tortoise agreed. On race day, they stood at the starting line.

Go! The hare ran fast and left the tortoise behind. But after a while, the hare got hungry. He stopped to eat carrots.

The tortoise kept walking. He did not stop. He crossed the finish line first. The hare was very embarrassed.

This story teaches us that consistency is more important than talent!`,chineseText:`一个阳光明媚的日子，兔子和乌龟在池塘边相遇。兔子很快，乌龟很慢。

兔子挑战乌龟比赛。乌龟同意了。比赛那天，他们站在起跑线上。

"开始！"兔子跑得很快，把乌龟甩在后面。但过了一会儿，兔子饿了。他停下来吃胡萝卜。

乌龟一直走。他没有为任何事停下来。他第一个穿过终点线。兔子非常尴尬。

这个故事告诉我们，坚持比天赋更重要。不断努力，你就会成功！`,vocabularies:[{english:"pond",phonetic:"/pɒnd/",chinese:"池塘"},{english:"challenge",phonetic:"/ˈtʃælɪndʒ/",chinese:"挑战"},{english:"race",phonetic:"/reɪs/",chinese:"比赛"},{english:"start",phonetic:"/stɑːrt/",chinese:"开始"},{english:"hungry",phonetic:"/ˈhʌŋɡri/",chinese:"饿的"},{english:"carrot",phonetic:"/ˈkærət/",chinese:"胡萝卜"},{english:"embarrassed",phonetic:"/ɪmˈbærəst/",chinese:"尴尬的"},{english:"succeed",phonetic:"/səkˈsiːd/",chinese:"成功"}]},{id:"49",title:"My Favorite Game",titleCn:"我最喜欢的游戏",image:"/images/49我最喜欢的游戏.png",englishText:`My favorite game is hide and seek. It is so much fun to hide and wait for others to find me.

When I hide, I find a quiet and clever spot. I stay very still and quiet. Sometimes I hold my breath.

When someone gets close, my heart beats fast. But I do not move. I wait until they find me.

I also like being the seeker. I count to twenty and then look everywhere. Finding someone is exciting!`,chineseText:`我最喜欢的游戏是捉迷藏。藏起来等着别人找到我非常有趣。

当我藏的时候，我找一个安静又聪明的位置。我一动不动，非常安静。有时我屏住呼吸。

当有人靠近时，我心跳加速。但我不动。我等到他们找到我。

我也喜欢当找的人。我数到二十，然后到处找。找到人很刺激！`,vocabularies:[{english:"hide",phonetic:"/haɪd/",chinese:"藏"},{english:"seek",phonetic:"/siːk/",chinese:"找"},{english:"fun",phonetic:"/fʌn/",chinese:"有趣"},{english:"spot",phonetic:"/spɒt/",chinese:"位置"},{english:"still",phonetic:"/stɪl/",chinese:"静止的"},{english:"heart",phonetic:"/hɑːrt/",chinese:"心脏"},{english:"beat",phonetic:"/biːt/",chinese:"跳动"},{english:"exciting",phonetic:"/ɪkˈsaɪtɪŋ/",chinese:"刺激的"}]},{id:"50",title:"The Crow and the Fox",titleCn:"狐狸和乌鸦",image:"/images/50狐狸和乌鸦.png",englishText:`A crow found a piece of cheese. She sat on a tree branch with the cheese in her beak.

A hungry fox saw the cheese. He wanted it very much. Fox went to the tree and said, What a beautiful bird you are!

The crow felt proud. Fox continued, Your voice must be the prettiest. Please sing for me!

The crow opened her beak to sing. The cheese fell down. Fox caught it and ran away. The crow learned not to listen to flattery.`,chineseText:`一只乌鸦找到一块奶酪。她坐在树枝上，嘴里叼着奶酪。

一只饥饿的狐狸看到了奶酪。他非常想要它。狐狸走到树前说："你是一只多么美丽的鸟啊！"

乌鸦感到很骄傲。狐狸继续说："你的声音一定是最优美的。请为我唱首歌吧！"

乌鸦张嘴唱歌。奶酪掉了下来。狐狸接住它，跑掉了。乌鸦学到了不要听奉承话。`,vocabularies:[{english:"crow",phonetic:"/kroʊ/",chinese:"乌鸦"},{english:"fox",phonetic:"/fɒks/",chinese:"狐狸"},{english:"cheese",phonetic:"/tʃiːz/",chinese:"奶酪"},{english:"beak",phonetic:"/biːk/",chinese:"鸟嘴"},{english:"hungry",phonetic:"/ˈhʌŋɡri/",chinese:"饥饿的"},{english:"beautiful",phonetic:"/ˈbjuːtɪfl/",chinese:"美丽的"},{english:"flattery",phonetic:"/ˈflætəri/",chinese:"奉承"},{english:"proud",phonetic:"/praʊd/",chinese:"骄傲的"}]},{id:"51",title:"The Ugly Duckling",titleCn:"丑小鸭",image:"/images/51丑小鸭.png",englishText:`A mother duck had many babies. One of them was ugly. The other animals made fun of him.

The ugly duckling felt sad and lonely. He ran away from home. He found a pond but winter came. It was cold.

A kind farmer found him and brought him inside. Spring came and the ugly duckling grew up.

One day, he looked at his reflection. He was not a duck anymore. He was a beautiful swan!`,chineseText:`鸭妈妈有很多宝宝。其中一只很丑。其他动物都取笑他。

丑小鸭感到难过和孤独。他离家出走了。他找到一个池塘，但冬天来了。很冷。

一位善良的农夫发现了他，把他带进屋里。春天来了，丑小鸭长大了。

一天，他看着自己的倒影。他不再是鸭子了。他变成了一只美丽的天鹅！`,vocabularies:[{english:"duckling",phonetic:"/ˈdʌklɪŋ/",chinese:"小鸭"},{english:"ugly",phonetic:"/ˈʌɡli/",chinese:"丑的"},{english:"sad",phonetic:"/sæd/",chinese:"难过的"},{english:"lonely",phonetic:"/ˈloʊnli/",chinese:"孤独的"},{english:"winter",phonetic:"/ˈwɪntər/",chinese:"冬天"},{english:"farm",phonetic:"/fɑːrm/",chinese:"农场"},{english:"spring",phonetic:"/sprɪŋ/",chinese:"春天"},{english:"swan",phonetic:"/swɒn/",chinese:"天鹅"}]},{id:"52",title:"My School Clock",titleCn:"我的学校时钟",image:"/images/52我的学校时钟.png",englishText:`There is a big clock in my classroom. It hangs on the wall and shows me the time every day.

When the big hand points to twelve and the small hand points to three, it is time for lunch. I always feel hungry at twelve!

The clock helps me know when class starts and ends. When the bell rings, I know it is time to go home.

My classroom clock is my helpful friend. It keeps me on time every day!`,chineseText:`我的教室里有一个大时钟。它挂在墙上，每天告诉我时间。

当时针指向十二，分针指向三时，就是吃午饭的时间。我十二点总是感到饿！

时钟帮我知道什么时候上课、下课。铃响的时候，我就知道该回家了。

我的教室时钟是我有用的朋友。它每天帮我准时！`,vocabularies:[{english:"clock",phonetic:"/klɒk/",chinese:"时钟"},{english:"classroom",phonetic:"/ˈklæsrʊm/",chinese:"教室"},{english:"hand",phonetic:"/hænd/",chinese:"指针"},{english:"lunch",phonetic:"/lʌntʃ/",chinese:"午饭"},{english:"bell",phonetic:"/bel/",chinese:"铃"},{english:"time",phonetic:"/taɪm/",chinese:"时间"},{english:"helpful",phonetic:"/ˈhelpfl/",chinese:"有用的"},{english:"on time",phonetic:"/ɒn taɪm/",chinese:"准时"}]},{id:"53",title:"The Farmer and the Snake",titleCn:"农夫与蛇",image:"/images/53农夫与蛇.png",englishText:`A farmer found a snake in the field. The snake was cold and could not move. The farmer felt sorry for him.

The farmer picked up the snake and put it in his coat. He warmed it with his body heat.

When the snake got warm, it bit the farmer. The farmer was angry. Why did you bite me? I saved your life!

The snake said, You knew I was a snake. Kindness does not change nature. Be careful who you help!`,chineseText:`一位农夫在田里发现了一条蛇。蛇很冷，动不了。农夫为它感到难过。

农夫捡起蛇，放进他的外套里。他用自己的体温温暖它。

蛇暖和过来后，咬了农夫。农夫很生气。"你为什么咬我？我救了你的命！"

蛇说："你知道我是蛇。善良不会改变本性。小心你帮助的人！"`,vocabularies:[{english:"farmer",phonetic:"/ˈfɑːrmər/",chinese:"农夫"},{english:"snake",phonetic:"/sneɪk/",chinese:"蛇"},{english:"field",phonetic:"/fiːld/",chinese:"田地"},{english:"cold",phonetic:"/koʊld/",chinese:"冷的"},{english:"warm",phonetic:"/wɔːrm/",chinese:"暖和"},{english:"bite",phonetic:"/baɪt/",chinese:"咬"},{english:"kindness",phonetic:"/ˈkaɪndnəs/",chinese:"善良"},{english:"nature",phonetic:"/ˈneɪtʃər/",chinese:"本性"}]},{id:"54",title:"My Drawing Table",titleCn:"我的画桌",image:"/images/54我的画桌.png",englishText:`I have a special table just for drawing. It sits by the window where the light is good.

On my table, I keep my crayons, pencils, and colored paper. I also have an eraser to fix my mistakes.

When I draw, I sit at my table and imagine new things. I draw animals, houses, and people I love.

My drawing table is my favorite place to be creative. Every picture I make comes from my heart!`,chineseText:`我有一张专门用来画画的桌子。它放在窗户旁边，那里光线很好。

在我的桌子上，我放着蜡笔、铅笔和彩色纸。我还有一个橡皮擦来改正错误。

当我画画时，我坐在桌子旁，想象新事物。我画动物、房子和我爱的人。

我的画桌是我发挥创造力的最喜欢的地方。每幅画都来自我的内心！`,vocabularies:[{english:"table",phonetic:"/ˈteɪbl/",chinese:"桌子"},{english:"drawing",phonetic:"/ˈdrɔːɪŋ/",chinese:"画画"},{english:"window",phonetic:"/ˈwɪndoʊ/",chinese:"窗户"},{english:"crayon",phonetic:"/ˈkreɪən/",chinese:"蜡笔"},{english:"eraser",phonetic:"/ɪˈreɪsər/",chinese:"橡皮擦"},{english:"creative",phonetic:"/kriˈeɪtɪv/",chinese:"有创造力的"},{english:"picture",phonetic:"/ˈpɪktʃər/",chinese:"图画"},{english:"heart",phonetic:"/hɑːrt/",chinese:"心"}]},{id:"55",title:"The Lion and the Mouse",titleCn:"狮子与老鼠",image:"/images/55狮子与老鼠.png",englishText:`A lion was sleeping in the forest. A little mouse walked over him. The lion woke up and caught the mouse.

Please let me go! said the mouse. If you save me, I will help you one day.

The lion laughed. How can a tiny mouse help a big lion? But he let the mouse go.

Later, hunters caught the lion. The mouse chewed the ropes and saved the lion. A friend in need is a friend indeed!`,chineseText:`一头狮子在森林里睡觉。一只小老鼠从他身上走过。狮子醒来，抓住了老鼠。

"请放我走！"老鼠说。"如果你救我，我有一天会帮助你。"

狮子大笑。"一只小老鼠怎么能帮助大狮子？"但他放了老鼠。

后来，猎人抓住了狮子。老鼠咬断了绳子，救了狮子。患难见真情！`,vocabularies:[{english:"lion",phonetic:"/ˈlaɪən/",chinese:"狮子"},{english:"mouse",phonetic:"/maʊs/",chinese:"老鼠"},{english:"sleep",phonetic:"/sliːp/",chinese:"睡觉"},{english:"forest",phonetic:"/ˈfɔːrɪst/",chinese:"森林"},{english:"help",phonetic:"/help/",chinese:"帮助"},{english:"hunter",phonetic:"/ˈhʌntər/",chinese:"猎人"},{english:"rope",phonetic:"/roʊp/",chinese:"绳子"},{english:"friend",phonetic:"/frend/",chinese:"朋友"}]},{id:"56",title:"My Raincoat",titleCn:"我的雨衣",image:"/images/56我的雨衣.png",englishText:`I have a yellow raincoat. It is bright like the sun. I wear it when it rains.

The raincoat has a hood to keep my head dry. It also has big pockets for my hands to keep them warm.

When I wear my raincoat, I can jump in puddles. The water slides off my coat and I stay dry. I feel happy splashing in the rain.

My yellow raincoat makes rainy days fun! I am not afraid of rain anymore because I stay warm and dry!`,chineseText:`我有一件黄色的雨衣。它像太阳一样明亮。下雨时我穿上它。

雨衣有一个兜帽，保持我的头干燥。它还有大口袋，给手保暖。

当我穿上雨衣时，我可以踩水坑。水从我的雨衣上滑下来，我保持干燥。踩水时我感到快乐。

我的黄色雨衣让雨天变得有趣！我不再害怕下雨了，因为我保持温暖干燥！`,vocabularies:[{english:"raincoat",phonetic:"/ˈreɪnkoʊt/",chinese:"雨衣"},{english:"yellow",phonetic:"/ˈjeloʊ/",chinese:"黄色"},{english:"rain",phonetic:"/reɪn/",chinese:"雨"},{english:"hood",phonetic:"/hʊd/",chinese:"兜帽"},{english:"pocket",phonetic:"/ˈpɒkɪt/",chinese:"口袋"},{english:"puddle",phonetic:"/ˈpʌdl/",chinese:"水坑"},{english:"dry",phonetic:"/draɪ/",chinese:"干燥"},{english:"fun",phonetic:"/fʌn/",chinese:"有趣"}]},{id:"57",title:"My Bicycle",titleCn:"我的自行车",image:"/images/57我的自行车.png",englishText:`I got a new red bicycle for my birthday. It has two wheels and shiny handlebars.

I wear my helmet when I ride. It keeps my head safe. I also wear knee pads to protect my knees.

I ride my bicycle in the park every Sunday. The wind feels cool on my face. I love riding my bike!

Riding a bicycle is good exercise. It keeps me healthy and strong. My bicycle is my favorite thing!`,chineseText:`我生日时得到了一辆新的红色自行车。它有两个轮子和闪亮的车把。

我骑车时戴头盔。它保护我的头安全。我还戴护膝保护我的膝盖。

每周日我都在公园骑自行车。风在我脸上感觉很凉快。我喜欢骑车！

骑自行车是很好的运动。它让我健康和强壮。我的自行车是我最喜欢的东西！`,vocabularies:[{english:"bicycle",phonetic:"/ˈbaɪsɪkl/",chinese:"自行车"},{english:"wheel",phonetic:"/wiːl/",chinese:"轮子"},{english:"helmet",phonetic:"/ˈhelmɪt/",chinese:"头盔"},{english:"knee",phonetic:"/niː/",chinese:"膝盖"},{english:"exercise",phonetic:"/ˈeksərsaɪz/",chinese:"运动"},{english:"healthy",phonetic:"/ˈhelθi/",chinese:"健康的"},{english:"strong",phonetic:"/strɒŋ/",chinese:"强壮的"},{english:"favorite",phonetic:"/ˈfeɪvərɪt/",chinese:"最喜欢的"}]},{id:"58",title:"The North Wind",titleCn:"北风",image:"/images/58北风.png",englishText:`One cold day, the north wind tried to take off a traveler's coat. He blew and blew very hard.

But the harder the wind blew, the tighter the traveler held his coat. The wind could not take it off.

Then the sun came out and shone gently. The traveler felt warm and took off his coat himself.

Gentleness is stronger than force. Kind words can accomplish more than harsh ones!`,chineseText:`一个寒冷的日子，北风试图吹走旅行者的外套。他吹啊吹，非常用力。

但风越吹，旅行者越紧紧抓住他的外套。风没能吹掉。

然后太阳出来了，温和地照耀着。旅行者感到温暖，自己脱下了外套。

温柔比力量更强。温和的话语比粗暴更有成效！`,vocabularies:[{english:"wind",phonetic:"/wɪnd/",chinese:"风"},{english:"cold",phonetic:"/koʊld/",chinese:"冷的"},{english:"traveler",phonetic:"/ˈtrævələr/",chinese:"旅行者"},{english:"coat",phonetic:"/koʊt/",chinese:"外套"},{english:"sun",phonetic:"/sʌn/",chinese:"太阳"},{english:"gentle",phonetic:"/ˈdʒentl/",chinese:"温柔的"},{english:"force",phonetic:"/fɔːrs/",chinese:"力量"},{english:"kind",phonetic:"/kaɪnd/",chinese:"友善的"}]},{id:"59",title:"My Favorite Fruit",titleCn:"我最喜欢的水果",image:"/images/59我最喜欢的水果.png",englishText:`My favorite fruit is the orange. It is round and juicy. The color is bright like the sun.

I peel the orange and smell its sweet smell. Then I separate the slices and eat them one by one.

Oranges are full of vitamin C. They help me stay healthy and fight colds.

I eat an orange every day after school. It gives me energy to do my homework!`,chineseText:`我最喜欢的水果是橙子。它圆圆的，多汁。颜色像太阳一样明亮。

我剥橙子，闻它甜甜的味道。然后我把橙子分成一瓣一瓣，一瓣一瓣吃。

橙子富含维生素C。它们帮我保持健康，抵抗感冒。

我每天放学后吃一个橙子。它给我能量做作业！`,vocabularies:[{english:"fruit",phonetic:"/fruːt/",chinese:"水果"},{english:"orange",phonetic:"/ˈɒrɪndʒ/",chinese:"橙子"},{english:"juicy",phonetic:"/ˈdʒuːsi/",chinese:"多汁的"},{english:"peel",phonetic:"/piːl/",chinese:"剥皮"},{english:"slice",phonetic:"/slaɪs/",chinese:"片"},{english:"vitamin",phonetic:"/ˈvaɪtəmɪn/",chinese:"维生素"},{english:"healthy",phonetic:"/ˈhelθi/",chinese:"健康的"},{english:"energy",phonetic:"/ˈenərdʒi/",chinese:"能量"}]},{id:"60",title:"The Country Mouse and the City Mouse",titleCn:"乡下老鼠和城市老鼠",image:"/images/60乡下老鼠和城市老鼠.png",englishText:`A country mouse lived in a field. She had simple food and a small home. One day, she visited her cousin in the city.

The city mouse ate cheese and bread. She lived in a big house with many rooms. The country mouse was amazed!

But then the city mouse heard a cat. They ran and hid. The country mouse said, I prefer my simple home. It may be small, but it is safe and peaceful.`,chineseText:`一只乡下老鼠住在田野里。她吃简单的食物，住小房子。一天，她去城市看望她的表妹。

城市老鼠吃奶酪和面包。她住在一所有很多房间的大房子里。乡下老鼠很惊讶！

但后来城市老鼠听到一只猫。他们跑啊躲。乡下老鼠说："我更喜欢我简单的家。它可能小，但是安全又平静。"`,vocabularies:[{english:"country",phonetic:"/ˈkʌntri/",chinese:"乡下"},{english:"city",phonetic:"/ˈsɪti/",chinese:"城市"},{english:"mouse",phonetic:"/maʊs/",chinese:"老鼠"},{english:"field",phonetic:"/fiːld/",chinese:"田地"},{english:"simple",phonetic:"/ˈsɪmpl/",chinese:"简单的"},{english:"cheese",phonetic:"/tʃiːz/",chinese:"奶酪"},{english:"safe",phonetic:"/seɪf/",chinese:"安全的"},{english:"peaceful",phonetic:"/ˈpiːsfl/",chinese:"平静的"}]},{id:"61",title:"My Mom's Handbag",titleCn:"妈妈的手提包",image:"/images/61妈妈的手提包.png",englishText:`My mom has a big blue handbag. She carries it everywhere. I always wonder what is inside.

There is her wallet with money and cards. There are her keys to the house and car. She also has her phone to call people.

Sometimes she puts snacks for me. When I am hungry, she opens her bag and gives me yummy food.

My mom's handbag is like a magic bag. It has everything we need!`,chineseText:`我妈妈有一个大的蓝色手提包。她到处都带着它。我一直想知道里面有什么。

有她的钱包，里面有钱和卡。有她家的钥匙和车钥匙。她还有手机打电话。

有时她放零食给我。当我饿的时候，她打开包给我好吃的食物。

我妈妈的手提包就像一个神奇的袋子。它有我们需要的一切！`,vocabularies:[{english:"handbag",phonetic:"/ˈhændbæɡ/",chinese:"手提包"},{english:"wallet",phonetic:"/ˈwɒlɪt/",chinese:"钱包"},{english:"key",phonetic:"/kiː/",chinese:"钥匙"},{english:"phone",phonetic:"/foʊn/",chinese:"手机"},{english:"snack",phonetic:"/snæk/",chinese:"零食"},{english:"hungry",phonetic:"/ˈhʌŋɡri/",chinese:"饿的"},{english:"magic",phonetic:"/ˈmædʒɪk/",chinese:"神奇的"},{english:"everything",phonetic:"/ˈevrɪθɪŋ/",chinese:"一切"}]},{id:"62",title:"The Fox and the Grapes",titleCn:"狐狸和葡萄",image:"/images/62狐狸和葡萄.png",englishText:`A hungry fox saw some grapes hanging from a vine. They looked so sweet and juicy.

The fox jumped and jumped but could not reach the grapes. He tried many times but failed.

At last, the fox gave up and walked away. He said to himself, Those grapes are sour anyway. I did not want them!

It is easy to hate what you cannot have. We should not pretend we do not want things we cannot get.`,chineseText:`一只饥饿的狐狸看到一些葡萄挂在藤上。它们看起来非常甜非常多汁。

狐狸跳啊跳，但够不到葡萄。他试了很多次都失败了。

最后，狐狸放弃了，走开了。他对自己说："那些葡萄反正也是酸的。我不想要它们！"

得不到就讨厌很容易。我们不应该假装不想要我们得不到的东西。`,vocabularies:[{english:"grapes",phonetic:"/ɡreɪps/",chinese:"葡萄"},{english:"hungry",phonetic:"/ˈhʌŋɡri/",chinese:"饥饿的"},{english:"vine",phonetic:"/vaɪn/",chinese:"藤"},{english:"juicy",phonetic:"/ˈdʒuːsi/",chinese:"多汁的"},{english:"jump",phonetic:"/dʒʌmp/",chinese:"跳"},{english:"sour",phonetic:"/ˈsaʊər/",chinese:"酸的"},{english:"pretend",phonetic:"/prɪˈtend/",chinese:"假装"},{english:"hate",phonetic:"/heɪt/",chinese:"讨厌"}]},{id:"63",title:"My Little Garden",titleCn:"我的小花园",image:"/images/63我的小花园.png",englishText:`I have a little garden behind my house. I planted some flower seeds there. Every day, I water them.

After one week, small green leaves appear. I am so happy to see them grow.

One month later, beautiful flowers bloom. They are red, yellow, and pink. Bees come to visit them.

My little garden makes my house look beautiful. Growing things is fun and rewarding!`,chineseText:`我在房子后面有一个小花园。我在那里种了一些花种子。每天，我给它们浇水。

一周后，小绿叶出现了。我很高兴看到它们生长。

一个月后，美丽的花开了。有红色、黄色和粉色的。蜜蜂来拜访它们。

我的小花园让我的房子看起来漂亮。种植东西是有趣和有益的！`,vocabularies:[{english:"garden",phonetic:"/ˈɡɑːrdn/",chinese:"花园"},{english:"flower",phonetic:"/ˈflaʊər/",chinese:"花"},{english:"seed",phonetic:"/siːd/",chinese:"种子"},{english:"water",phonetic:"/ˈwɔːtər/",chinese:"浇水"},{english:"leaf",phonetic:"/liːf/",chinese:"叶子"},{english:"grow",phonetic:"/ɡroʊ/",chinese:"生长"},{english:"bee",phonetic:"/biː/",chinese:"蜜蜂"},{english:"beautiful",phonetic:"/ˈbjuːtɪfl/",chinese:"美丽的"}]},{id:"64",title:"My School Desk",titleCn:"我的学校书桌",image:"/images/64我的学校书桌.png",englishText:`I have a desk at school. It is made of wood and has four legs. My name is written on it.

On my desk, I keep my books, pencils, and eraser. I also put my homework there every morning.

During class, I sit at my desk and listen to the teacher. I write and draw on my desk with my pencils.

My school desk is where I learn new things every day. I take good care of it!`,chineseText:`我在学校有一张书桌。它是木头做的，有四条腿。上面写着我的名字。

在我的书桌上，我放着书、铅笔和橡皮擦。每天早上，我还把作业放在那里。

上课时，我坐在书桌旁听老师讲。我用铅笔在书桌上面写字和画画。

我的学校书桌是我每天学习新东西的地方。我好好爱护它！`,vocabularies:[{english:"desk",phonetic:"/desk/",chinese:"书桌"},{english:"school",phonetic:"/skuːl/",chinese:"学校"},{english:"wood",phonetic:"/wʊd/",chinese:"木头"},{english:"book",phonetic:"/bʊk/",chinese:"书"},{english:"pencil",phonetic:"/ˈpensl/",chinese:"铅笔"},{english:"homework",phonetic:"/ˈhoʊmwɜːrk/",chinese:"作业"},{english:"teacher",phonetic:"/ˈtiːtʃər/",chinese:"老师"},{english:"learn",phonetic:"/lɜːrn/",chinese:"学习"}]},{id:"65",title:"The Turtle",titleCn:"小乌龟",image:"/images/65小乌龟.png",englishText:`A little turtle lives in a pond. She has a hard shell on her back. It protects her from danger.

When the turtle feels scared, she pulls her head and legs into her shell. No one can hurt her inside.

The turtle moves slowly but never gives up. She keeps walking forward no matter what.

I can learn from the turtle. Be patient and never give up!`,chineseText:`一只小乌龟住在池塘里。她的背上有坚硬的壳。它保护她免受危险。

当乌龟感到害怕时，她把头和腿缩进壳里。没有人能伤害壳里的她。

乌龟爬得很慢但从不放弃。无论发生什么，她都继续向前走。

我可以向乌龟学习。要有耐心，永不放弃！`,vocabularies:[{english:"turtle",phonetic:"/ˈtɜːrtl/",chinese:"乌龟"},{english:"pond",phonetic:"/pɒnd/",chinese:"池塘"},{english:"shell",phonetic:"/ʃel/",chinese:"壳"},{english:"protect",phonetic:"/prəˈtekt/",chinese:"保护"},{english:"danger",phonetic:"/ˈdeɪndʒər/",chinese:"危险"},{english:"slowly",phonetic:"/ˈsloʊli/",chinese:"慢慢地"},{english:"patient",phonetic:"/ˈpeɪʃnt/",chinese:"有耐心的"},{english:"give up",phonetic:"/ɡɪv ʌp/",chinese:"放弃"}]},{id:"66",title:"My Whiteboard",titleCn:"我的白板",image:"/images/66我的白板.png",englishText:`My teacher has a big whiteboard in class. It is white and we can write on it with special markers.

When the teacher writes words on the board, I can read them clearly. She draws pictures and numbers too.

I love it when I get to write on the whiteboard. I stand up front and write big letters for everyone to see.

The whiteboard helps us learn together. It is one of my favorite things at school!`,chineseText:`我的老师在教室有一块大白板。它是白色的，我们可以用特殊的马克笔在上面写字。

当老师在白板上写字时，我可以清楚地读。她还画图画和数字。

我喜欢当有机会在白板上写字时。我站在前面写大字，让每个人都能看到。

白板帮助我们一起学习。它是我在学校最喜欢的东西之一！`,vocabularies:[{english:"whiteboard",phonetic:"/ˈwaɪtbɔːrd/",chinese:"白板"},{english:"marker",phonetic:"/ˈmɑːrkər/",chinese:"马克笔"},{english:"write",phonetic:"/raɪt/",chinese:"写"},{english:"draw",phonetic:"/drɔː/",chinese:"画"},{english:"learn",phonetic:"/lɜːrn/",chinese:"学习"},{english:"together",phonetic:"/təˈɡeðər/",chinese:"一起"},{english:"favorite",phonetic:"/ˈfeɪvərɪt/",chinese:"最喜欢的"},{english:"school",phonetic:"/skuːl/",chinese:"学校"}]},{id:"67",title:"The Elephant",titleCn:"大象",image:"/images/67大象.png",englishText:`An elephant is very big and strong. He has a long trunk and big ears. He uses his trunk to drink water and pick up food.

Elephants live together in a group. They help each other and take care of their babies.

When an elephant is sad, other elephants put their trunks on him. They make sounds to comfort him.

Elephants are kind and smart animals. They never forget their friends!`,chineseText:`大象非常大而强壮。他有长长的鼻子和大大的耳朵。他用鼻子喝水和捡食物。

大象群居生活。他们互相帮助，照顾他们的宝宝。

当大象难过时，其他大象会把鼻子放在他身上。他们发出声音安慰他。

大象是善良聪明的动物。他们永远不会忘记朋友！`,vocabularies:[{english:"elephant",phonetic:"/ˈelɪfənt/",chinese:"大象"},{english:"trunk",phonetic:"/trʌŋk/",chinese:"鼻子"},{english:"ear",phonetic:"/ɪr/",chinese:"耳朵"},{english:"group",phonetic:"/ɡruːp/",chinese:"群"},{english:"baby",phonetic:"/ˈbeɪbi/",chinese:"宝宝"},{english:"sad",phonetic:"/sæd/",chinese:"难过的"},{english:"smart",phonetic:"/smɑːrt/",chinese:"聪明的"},{english:"friend",phonetic:"/frend/",chinese:"朋友"}]},{id:"68",title:"My Homework Time",titleCn:"我的作业时间",image:"/images/68我的作业时间.png",englishText:`Every day after school, I have homework time. I sit at my desk and take out my books.

First, I do my math homework. Numbers can be tricky but I try my best. Then I read my Chinese book.

After finishing my homework, I put everything in my bag. I check twice to make sure I did not forget anything.

Homework time is quiet and focused. I like finishing my work before dinner!`,chineseText:`每天放学后，我有作业时间。我坐在书桌旁，拿出我的书。

首先，我做数学作业。数字可能有点难，但我尽力。然后我读语文书。

完成作业后，我把所有东西放进书包。我检查两遍，确保没有忘记任何东西。

作业时间是安静和专注的。我喜欢在晚饭前完成作业！`,vocabularies:[{english:"homework",phonetic:"/ˈhoʊmwɜːrk/",chinese:"作业"},{english:"school",phonetic:"/skuːl/",chinese:"学校"},{english:"math",phonetic:"/mæθ/",chinese:"数学"},{english:"number",phonetic:"/ˈnʌmbər/",chinese:"数字"},{english:"Chinese",phonetic:"/tʃaɪˈniːz/",chinese:"语文"},{english:"finish",phonetic:"/ˈfɪnɪʃ/",chinese:"完成"},{english:"check",phonetic:"/tʃek/",chinese:"检查"},{english:"focus",phonetic:"/ˈfoʊkəs/",chinese:"专注"}]},{id:"69",title:"The Penguin",titleCn:"企鹅",image:"/images/69企鹅.png",englishText:`A penguin is a bird but it cannot fly. It lives in cold places and loves to swim in icy water.

Penguins have black and white feathers. They look like they are wearing a tuxedo. They are very fashionable!

Penguins walk in a funny way. They waddle from side to side. But they are great swimmers.

I think penguins are one of the cutest animals. I wish I could see one in real life!`,chineseText:`企鹅是一种鸟但它不会飞。它生活在寒冷的地方，喜欢在冰冷的水里游泳。

企鹅有黑色和白色的羽毛。它们看起来像穿着晚礼服。非常时髦！

企鹅走路的方式很有趣。它们左右摇摆。但它们是游泳高手。

我认为企鹅是最可爱的动物之一。我希望我能亲眼看到一只！`,vocabularies:[{english:"penguin",phonetic:"/ˈpeŋɡwɪn/",chinese:"企鹅"},{english:"bird",phonetic:"/bɜːrd/",chinese:"鸟"},{english:"fly",phonetic:"/flaɪ/",chinese:"飞"},{english:"feather",phonetic:"/ˈfeðər/",chinese:"羽毛"},{english:"swim",phonetic:"/swɪm/",chinese:"游泳"},{english:"waddle",phonetic:"/ˈwɒdl/",chinese:"摇摆着走"},{english:"cute",phonetic:"/kjuːt/",chinese:"可爱的"},{english:"wish",phonetic:"/wɪʃ/",chinese:"希望"}]},{id:"70",title:"My Favorite Season",titleCn:"我最喜欢的季节",image:"/images/70我最喜欢的季节.png",englishText:`Summer is my favorite season. The days are long and the sun stays up late. I do not need to wear heavy coats.

In summer, I can swim in the pool and eat ice cream. I also have a long vacation from school.

I love the warm feeling of summer. The birds sing loudly and the flowers bloom brightly.

Summer makes me feel happy and energetic. I count the days until summer comes again!`,chineseText:`夏天是我最喜欢的季节。白天很长，太阳很晚才下山。我不需要穿厚外套。

夏天，我可以在游泳池游泳，吃冰淇淋。我还有长长的学校假期。

我喜欢夏天的温暖感觉。鸟儿大声唱歌，花儿鲜艳地开放。

夏天让我感到快乐和充满活力。我数着日子等待夏天的到来！`,vocabularies:[{english:"season",phonetic:"/ˈsiːzn/",chinese:"季节"},{english:"summer",phonetic:"/ˈsʌmər/",chinese:"夏天"},{english:"sun",phonetic:"/sʌn/",chinese:"太阳"},{english:"swim",phonetic:"/swɪm/",chinese:"游泳"},{english:"vacation",phonetic:"/veɪˈkeɪʃn/",chinese:"假期"},{english:"warm",phonetic:"/wɔːrm/",chinese:"温暖的"},{english:"flower",phonetic:"/ˈflaʊər/",chinese:"花"},{english:"happy",phonetic:"/ˈhæpi/",chinese:"快乐的"}]},{id:"71",title:"The Flying Squirrel",titleCn:"飞鼠",image:"/images/71飞鼠.png",englishText:`A little squirrel lived in a tall tree. She had wings on her body. She could glide from tree to tree.

One day, the squirrel saw a lake. She wanted to cross it. She flew and glided over the water.

A fish looked up and saw the flying squirrel. It thought the squirrel was a bird. The fish was surprised!

Flying squirrels are amazing animals. They can fly but they are not birds!`,chineseText:`一只小飞鼠住在一棵高高的树上。她身上有翅膀。她可以从一棵树滑行到另一棵树。

一天，飞鼠看到一个湖。她想穿过它。她飞啊滑行在水面上。

一条鱼抬头看到了飞鼠。它以为飞鼠是一只鸟。鱼很惊讶！

飞鼠是神奇的动物。它们会飞但它们不是鸟！`,vocabularies:[{english:"squirrel",phonetic:"/ˈskwɜːrəl/",chinese:"松鼠"},{english:"tree",phonetic:"/triː/",chinese:"树"},{english:"wing",phonetic:"/wɪŋ/",chinese:"翅膀"},{english:"glide",phonetic:"/ɡlaɪd/",chinese:"滑行"},{english:"lake",phonetic:"/leɪk/",chinese:"湖"},{english:"water",phonetic:"/ˈwɔːtər/",chinese:"水"},{english:"fish",phonetic:"/fɪʃ/",chinese:"鱼"},{english:"amazing",phonetic:"/əˈmeɪzɪŋ/",chinese:"神奇的"}]},{id:"72",title:"My Kitchen",titleCn:"我的厨房",image:"/images/72我的厨房.png",englishText:`My kitchen is the heart of my home. It is where my mom cooks delicious food every day.

There is a big stove for cooking and a refrigerator for keeping food cold. The sink is for washing vegetables.

When I am hungry, I go to the kitchen. The smell of food makes me feel warm inside.

I love sitting at the kitchen table and eating fresh food with my family!`,chineseText:`我的厨房是我家的心脏。那是我妈妈每天做饭的地方。

有一个大火炉用来做饭，一个冰箱用来保存食物冷藏。水槽是用来洗蔬菜的。

当我饿的时候，我去厨房。食物的香味让我内心感到温暖。

我喜欢坐在厨房桌旁，和家人一起吃新鲜的食物！`,vocabularies:[{english:"kitchen",phonetic:"/ˈkɪtʃɪn/",chinese:"厨房"},{english:"stove",phonetic:"/stoʊv/",chinese:"火炉"},{english:"refrigerator",phonetic:"/rɪˈfrɪdʒəreɪtər/",chinese:"冰箱"},{english:"sink",phonetic:"/sɪŋk/",chinese:"水槽"},{english:"vegetable",phonetic:"/ˈvedʒtəbl/",chinese:"蔬菜"},{english:"smell",phonetic:"/smel/",chinese:"味道"},{english:"warm",phonetic:"/wɔːrm/",chinese:"温暖的"},{english:"family",phonetic:"/ˈfæməli/",chinese:"家人"}]},{id:"73",title:"The Dolphin",titleCn:"海豚",image:"/images/73海豚.png",englishText:`A dolphin is a smart and friendly sea animal. They live in the ocean and love to play with each other.

Dolphins can jump high out of the water. They make sounds to talk to their friends. They are very social.

Sometimes dolphins help people. They guide lost ships and save swimmers in trouble.

I think dolphins are one of the most intelligent animals in the sea. They are like the heroes of the ocean!`,chineseText:`海豚是一种聪明友好的海洋动物。它们生活在海洋里，喜欢互相玩耍。

海豚能从水里高高跳起。它们发出声音和朋友们说话。它们非常社会化。

有时海豚帮助人类。它们引导迷路的船，拯救遇到麻烦的游泳者。

我认为海豚是海里最聪明的动物之一。它们就像海洋的英雄！`,vocabularies:[{english:"dolphin",phonetic:"/ˈdɒlfɪn/",chinese:"海豚"},{english:"smart",phonetic:"/smɑːrt/",chinese:"聪明的"},{english:"friendly",phonetic:"/ˈfrendli/",chinese:"友好的"},{english:"ocean",phonetic:"/ˈoʊʃn/",chinese:"海洋"},{english:"jump",phonetic:"/dʒʌmp/",chinese:"跳"},{english:"help",phonetic:"/help/",chinese:"帮助"},{english:"intelligent",phonetic:"/ɪnˈtelɪdʒənt/",chinese:"有智慧的"},{english:"hero",phonetic:"/ˈhɪroʊ/",chinese:"英雄"}]},{id:"74",title:"My Mirror",titleCn:"我的镜子",image:"/images/74我的镜子.png",englishText:`I have a small mirror in my bedroom. It hangs on the wall and has a pink frame.

Every morning, I look in the mirror. I comb my hair and check my face. I want to look nice for school.

My mirror shows me who I am. I can see my eyes, my nose, and my smile. I am happy with how I look!

A mirror shows the truth. It tells me I am unique and special!`,chineseText:`我的卧室里有一面小镜子。它挂在墙上，有粉色的框。

每天早上，我照镜子。我梳头，检查我的脸。我想在学校看起来精神。

我的镜子告诉我我是谁。我能看到我的眼睛、鼻子和微笑。我对我看起来的样子感到满意！

镜子显示真相。它告诉我，我是独特和特别的！`,vocabularies:[{english:"mirror",phonetic:"/ˈmɪrər/",chinese:"镜子"},{english:"bedroom",phonetic:"/ˈbedruːm/",chinese:"卧室"},{english:"frame",phonetic:"/freɪm/",chinese:"框架"},{english:"comb",phonetic:"/koʊm/",chinese:"梳子"},{english:"hair",phonetic:"/her/",chinese:"头发"},{english:"face",phonetic:"/feɪs/",chinese:"脸"},{english:"unique",phonetic:"/juːˈniːk/",chinese:"独特的"},{english:"special",phonetic:"/ˈspeʃl/",chinese:"特别的"}]},{id:"75",title:"The Koala Bear",titleCn:"考拉熊",image:"/images/75考拉熊.png",englishText:`A koala bear lives in Australia. She has soft gray fur and big round ears. She looks like a little teddy bear.

Koalas eat leaves from eucalyptus trees. They sleep for most of the day. They look cute when they hug the tree trunk.

Koalas are not really bears. They are marsupials. They carry their babies in their pouches.

Koalas are gentle and quiet animals. They are symbol of Australia!`,chineseText:`考拉熊住在澳大利亚。她有柔软的灰色毛皮和大大的圆耳朵。她看起来像一只小泰迪熊。

考拉吃桉树的叶子。它们每天大部分时间都在睡觉。当它们抱树干时，看起来很可爱。

考拉不是真正的熊。它们是有袋动物。它们把宝宝放在育儿袋里。

考拉是温柔安静的动物。它们是澳大利亚的象征！`,vocabularies:[{english:"koala",phonetic:"/koʊˈɑːlə/",chinese:"考拉"},{english:"Australia",phonetic:"/ɒˈstreɪliə/",chinese:"澳大利亚"},{english:"fur",phonetic:"/fɜːr/",chinese:"毛皮"},{english:"eucalyptus",phonetic:"/ˌjuːkəˈlɪptəs/",chinese:"桉树"},{english:"sleep",phonetic:"/sliːp/",chinese:"睡觉"},{english:"marsupial",phonetic:"/mɑːrˈsuːpiəl/",chinese:"有袋动物"},{english:"pouch",phonetic:"/paʊtʃ/",chinese:"育儿袋"},{english:"symbol",phonetic:"/ˈsɪmbl/",chinese:"象征"}]},{id:"76",title:"The Butterfly",titleCn:"蝴蝶",image:"/images/76蝴蝶.png",englishText:`A caterpillar was born on a leaf. She was small and green. She ate leaves every day and grew bigger.

One day, she made a cocoon around herself. She stayed inside for many days. She was transforming.

When she came out, she was not a caterpillar anymore. She had beautiful wings. She was a butterfly!

The butterfly flew from flower to flower. She was free and beautiful. Change can be wonderful!`,chineseText:`一只毛毛虫在一片叶子上出生。她小小的，绿色的。她每天吃叶子，越长越大。

一天，她给自己织了一个茧。她在里面待了很多天。她正在转变。

当她出来时，她不再是毛毛虫了。她有了美丽的翅膀。她变成了一只蝴蝶！

蝴蝶从一朵花飞到另一朵花。她自由而美丽。改变可以是美好的！`,vocabularies:[{english:"caterpillar",phonetic:"/ˈkætərpɪlər/",chinese:"毛毛虫"},{english:"leaf",phonetic:"/liːf/",chinese:"叶子"},{english:"cocoon",phonetic:"/kəˈkuːn/",chinese:"茧"},{english:"transform",phonetic:"/trænsˈfɔːrm/",chinese:"转变"},{english:"butterfly",phonetic:"/ˈbʌtərflaɪ/",chinese:"蝴蝶"},{english:"wing",phonetic:"/wɪŋ/",chinese:"翅膀"},{english:"free",phonetic:"/friː/",chinese:"自由的"},{english:"beautiful",phonetic:"/ˈbjuːtɪfl/",chinese:"美丽的"}]},{id:"77",title:"My Backpack",titleCn:"我的背包",image:"/images/77我的背包.png",englishText:`I have a blue backpack with stars on it. It has many pockets for my things.

In the front pocket, I keep my pencil case. In the side pockets, I put my water bottle and umbrella.

The main part holds my books and homework. I also keep a small snack for after school.

My backpack goes everywhere with me. It carries all my school things. I could not go to school without it!`,chineseText:`我有一个上面有星星的蓝色背包。它有很多口袋放我的东西。

前面的口袋，我放铅笔盒。侧面的口袋，我放水壶和雨伞。

主要部分放我的书和作业。我还放一个小零食，放学后吃。

我的背包和我一起去任何地方。它装着我所有学校的东西。没有它我没法去学校！`,vocabularies:[{english:"backpack",phonetic:"/ˈbækpæk/",chinese:"背包"},{english:"star",phonetic:"/stɑːr/",chinese:"星星"},{english:"pocket",phonetic:"/ˈpɒkɪt/",chinese:"口袋"},{english:"pencil case",phonetic:"/ˈpensl keɪs/",chinese:"铅笔盒"},{english:"water bottle",phonetic:"/ˈwɔːtər ˈbɒtl/",chinese:"水壶"},{english:"umbrella",phonetic:"/ʌmˈbrelə/",chinese:"雨伞"},{english:"book",phonetic:"/bʊk/",chinese:"书"},{english:"school",phonetic:"/skuːl/",chinese:"学校"}]},{id:"78",title:"The Snowflake",titleCn:"雪花",image:"/images/78雪花.png",englishText:`Every winter, snowflakes fall from the sky. No two snowflakes are the same. Each one is unique and beautiful.

A snowflake starts as a tiny drop of water. When it gets very cold, the drop freezes and becomes a crystal.

Snowflakes have six sides and many patterns. Some look like stars and some look like flowers.

When snowflakes cover the ground, the world turns white. Winter makes everything look magical!`,chineseText:`每年冬天，雪花从天空飘落。没有两片雪花是一样的。每一片都是独特而美丽的。

雪花开始是一滴小小的水。当非常冷的时候，水滴冻结变成晶体。

雪花有六边和很多图案。有些看起来像星星，有些看起来像花。

当雪花覆盖地面时，世界变成白色。冬天让一切看起来像魔法！`,vocabularies:[{english:"snowflake",phonetic:"/ˈsnoʊfleɪk/",chinese:"雪花"},{english:"winter",phonetic:"/ˈwɪntər/",chinese:"冬天"},{english:"unique",phonetic:"/juːˈniːk/",chinese:"独特的"},{english:"drop",phonetic:"/drɒp/",chinese:"水滴"},{english:"freeze",phonetic:"/friːz/",chinese:"冻结"},{english:"crystal",phonetic:"/ˈkrɪstl/",chinese:"晶体"},{english:"pattern",phonetic:"/ˈpætərn/",chinese:"图案"},{english:"magical",phonetic:"/ˈmædʒɪkl/",chinese:"有魔力的"}]},{id:"79",title:"My School Hallway",titleCn:"我的学校走廊",image:"/images/79我的学校走廊.png",englishText:`My school has a long hallway with many classrooms. There are colorful pictures on the walls.

I walk through the hallway every morning to get to my class. I say hello to my friends.

The hallway has big windows. Sunlight comes in and makes it bright. I like walking in the hallway.

Sometimes I see the principal in the hallway. She always smiles and says good morning. The hallway connects everything in school!`,chineseText:`我的学校有一条长长的走廊，两边有很多教室。墙上有彩色图画。

每天早上我走过走廊去教室。我和朋友们打招呼。

走廊有大窗户。阳光照进来，让走廊明亮。我喜欢在走廊里走。

有时我在走廊里看到校长。她总是微笑，说早上好。走廊连接着学校里的一切！`,vocabularies:[{english:"hallway",phonetic:"/ˈhɔːlweɪ/",chinese:"走廊"},{english:"classroom",phonetic:"/ˈklæsrʊm/",chinese:"教室"},{english:"picture",phonetic:"/ˈpɪktʃər/",chinese:"图画"},{english:"window",phonetic:"/ˈwɪndoʊ/",chinese:"窗户"},{english:"sunlight",phonetic:"/ˈsʌnlaɪt/",chinese:"阳光"},{english:"principal",phonetic:"/ˈprɪnsəpl/",chinese:"校长"},{english:"morning",phonetic:"/ˈmɔːrnɪŋ/",chinese:"早上"},{english:"connect",phonetic:"/kəˈnekt/",chinese:"连接"}]},{id:"80",title:"The Giraffe",titleCn:"长颈鹿",image:"/images/80长颈鹿.png",englishText:`A giraffe has a very long neck. She can reach the highest leaves on the trees. No other animal can reach as high.

Giraffes have spots on their bodies. Each giraffe has a different pattern. They look like walking art!

Giraffes live in the hot savanna. They do not need much water. They get water from the leaves they eat.

A giraffe is the tallest animal in the world. She can see danger from very far away!`,chineseText:`长颈鹿有很长的脖子。她能够到树上最高的叶子。没有其他动物能爬那么高。

长颈鹿身上有斑点。每只长颈鹿有不同的图案。它们看起来像行走的艺术品！

长颈鹿住在炎热的草原上。它们不需要太多水。它们从吃的叶子里获得水分。

长颈鹿是世界上最高的动物。她能从很远的地方看到危险！`,vocabularies:[{english:"giraffe",phonetic:"/dʒəˈræf/",chinese:"长颈鹿"},{english:"neck",phonetic:"/nek/",chinese:"脖子"},{english:"leaf",phonetic:"/liːf/",chinese:"叶子"},{english:"spot",phonetic:"/spɒt/",chinese:"斑点"},{english:"pattern",phonetic:"/ˈpætərn/",chinese:"图案"},{english:"savanna",phonetic:"/səˈvænə/",chinese:"草原"},{english:"tall",phonetic:"/tɔːl/",chinese:"高的"},{english:"danger",phonetic:"/ˈdeɪndʒər/",chinese:"危险"}]},{id:"81",title:"My Reading Corner",titleCn:"我的阅读角",image:"/images/81我的阅读角.png",englishText:`I have a special corner in my room just for reading. It has a soft cushion and a small lamp.

When I sit in my reading corner, I feel calm and happy. I open a book and go to another world.

My favorite books are about animals and magic. I read for one hour every day before bed.

My reading corner is my peaceful place. It is where I dream big dreams!`,chineseText:`我在房间里有一个专门的阅读角。它有一个柔软的垫子和一盏小灯。

当我坐在阅读角时，我感到平静和快乐。我打开一本书，进入另一个世界。

我最喜欢的书是关于动物和魔法的。每天睡前我读一个小时的书。

我的阅读角是我平静的地方。那里是我做大梦的地方！`,vocabularies:[{english:"corner",phonetic:"/ˈkɔːrnər/",chinese:"角落"},{english:"cushion",phonetic:"/ˈkʊʃn/",chinese:"垫子"},{english:"lamp",phonetic:"/læmp/",chinese:"灯"},{english:"calm",phonetic:"/kɑːm/",chinese:"平静的"},{english:"peaceful",phonetic:"/ˈpiːsfl/",chinese:"和平的"},{english:"dream",phonetic:"/driːm/",chinese:"梦"},{english:"book",phonetic:"/bʊk/",chinese:"书"},{english:"world",phonetic:"/wɜːrld/",chinese:"世界"}]},{id:"82",title:"The Pumpkin Patch",titleCn:"南瓜田",image:"/images/82南瓜田.png",englishText:`In autumn, I visited a pumpkin patch with my family. There were hundreds of pumpkins in the field!

Some pumpkins were big and some were small. Some were orange and some were yellow. We picked the perfect one.

We took our pumpkin home and made a jack-o-lantern. We cut out eyes, a nose, and a mouth.

We put a candle inside and the pumpkin glowed. It was scary and fun!`,chineseText:`秋天，我和家人去南瓜田参观。田里有数百个南瓜！

有些南瓜大，有些小。有些是橙色的，有些是黄色的。我们选了一个完美的。

我们把南瓜带回家，做了一个南瓜灯。我们切出了眼睛、鼻子和嘴。

我们在里面放了一根蜡烛，南瓜发光了。又吓人又有趣！`,vocabularies:[{english:"pumpkin",phonetic:"/ˈpʌmpkɪn/",chinese:"南瓜"},{english:"autumn",phonetic:"/ˈɔːtəm/",chinese:"秋天"},{english:"patch",phonetic:"/pætʃ/",chinese:"小块田地"},{english:"field",phonetic:"/fiːld/",chinese:"田地"},{english:"pick",phonetic:"/pɪk/",chinese:"挑选"},{english:"candle",phonetic:"/ˈkændl/",chinese:"蜡烛"},{english:"glow",phonetic:"/ɡloʊ/",chinese:"发光"},{english:"scary",phonetic:"/ˈskeri/",chinese:"吓人的"}]},{id:"83",title:"My Mom's Birthday",titleCn:"妈妈的生日",image:"/images/83妈妈的生日.png",englishText:`Today is my mom's birthday. I woke up early to make her a card. I drew flowers and wrote I love you.

I bought her a small gift with my saved money. It was a beautiful ring for her finger.

In the evening, we had a birthday party. We ate cake and sang the birthday song. Mom smiled and said it was the best birthday ever.

Making my mom happy makes me happy too!`,chineseText:`今天是我妈妈的生日。我早早醒来，给她做了一张卡片。我画了花，写了"我爱你"。

我用存的钱给她买了一个小礼物。是一个漂亮的戒指，给她戴在手指上。

晚上，我们开了生日派对。我们吃蛋糕，唱生日歌。妈妈笑着说，这是她过得最好的生日。

让妈妈开心也让我开心！`,vocabularies:[{english:"birthday",phonetic:"/ˈbɜːrθdeɪ/",chinese:"生日"},{english:"card",phonetic:"/kɑːrd/",chinese:"卡片"},{english:"gift",phonetic:"/ɡɪft/",chinese:"礼物"},{english:"ring",phonetic:"/rɪŋ/",chinese:"戒指"},{english:"party",phonetic:"/ˈpɑːrti/",chinese:"派对"},{english:"cake",phonetic:"/keɪk/",chinese:"蛋糕"},{english:"song",phonetic:"/sɔːŋ/",chinese:"歌"},{english:"happy",phonetic:"/ˈhæpi/",chinese:"快乐的"}]},{id:"84",title:"The Moon",titleCn:"月亮",image:"/images/84月亮.png",englishText:`At night, the moon comes out in the sky. It is round and bright and follows me home.

The moon changes shape every night. Sometimes it is a full circle and sometimes it is a thin curve.

The moon shines light on the dark earth. Children look up and make wishes on the moon.

I wonder who else is looking at the same moon tonight. The moon connects everyone in the world!`,chineseText:`晚上，月亮出现在天空中。它圆圆的，亮亮的，跟着我回家。

月亮每晚形状都不一样。有时是满月，有时是细细的月牙。

月亮在黑暗的地球上照耀着光芒。孩子们抬头看，对月亮许愿。

我想知道今晚还有谁在看同一轮月亮。月亮连接着世界上的每个人！`,vocabularies:[{english:"moon",phonetic:"/muːn/",chinese:"月亮"},{english:"night",phonetic:"/naɪt/",chinese:"夜晚"},{english:"sky",phonetic:"/skaɪ/",chinese:"天空"},{english:"shape",phonetic:"/ʃeɪp/",chinese:"形状"},{english:"light",phonetic:"/laɪt/",chinese:"光"},{english:"wish",phonetic:"/wɪʃ/",chinese:"愿望"},{english:"world",phonetic:"/wɜːrld/",chinese:"世界"},{english:"connect",phonetic:"/kəˈnekt/",chinese:"连接"}]},{id:"85",title:"My Piano",titleCn:"我的钢琴",image:"/images/85我的钢琴.png",englishText:`I have a black piano in my living room. I practice playing songs every day after school.

At first, the songs were hard. My fingers hurt and the notes were confusing. But I kept practicing.

Now I can play many songs. When I play, I feel proud and happy. Music fills my home with joy.

Playing piano is not easy but it is worth it. Practice makes everything better!`,chineseText:`我的客厅里有一架黑色钢琴。每天放学后我练习弹曲子。

刚开始，曲子很难。我的手指疼，音符也很难理解。但我继续练习。

现在我会弹很多曲子了。当我弹的时候，我感到骄傲和快乐。音乐让我的家充满欢乐。

弹钢琴不容易，但是值得。练习让一切变得更好！`,vocabularies:[{english:"piano",phonetic:"/piˈænoʊ/",chinese:"钢琴"},{english:"practice",phonetic:"/ˈpræktɪs/",chinese:"练习"},{english:"finger",phonetic:"/ˈfɪŋɡər/",chinese:"手指"},{english:"note",phonetic:"/noʊt/",chinese:"音符"},{english:"music",phonetic:"/ˈmjuːzɪk/",chinese:"音乐"},{english:"joy",phonetic:"/dʒɔɪ/",chinese:"欢乐"},{english:"proud",phonetic:"/praʊd/",chinese:"骄傲的"},{english:"worth",phonetic:"/wɜːrθ/",chinese:"值得的"}]},{id:"86",title:"The Rainbow",titleCn:"彩虹",image:"/images/86彩虹.png",englishText:`After the rain, a rainbow appears in the sky. It has many beautiful colors like red, orange, yellow, green, blue, and purple.

A rainbow is like a bridge in the sky. I always want to walk on it and see where it leads.

When I see a rainbow, I feel hopeful. It reminds me that the sun always comes back after rain.

A rainbow is nature's gift to make us smile. I always take a picture when I see one!`,chineseText:`雨后，天空中出现一道彩虹。它有很多美丽的颜色：红、橙、黄、绿、蓝、紫。

彩虹就像天空中的桥。我总想走在上面，看看它通向哪里。

当我看到彩虹时，我感到充满希望。它提醒我，太阳在雨后总是会回来。

彩虹是大自然的礼物，让我们微笑。每次看到彩虹，我都拍照留念！`,vocabularies:[{english:"rainbow",phonetic:"/ˈreɪnboʊ/",chinese:"彩虹"},{english:"rain",phonetic:"/reɪn/",chinese:"雨"},{english:"color",phonetic:"/ˈkʌlər/",chinese:"颜色"},{english:"bridge",phonetic:"/brɪdʒ/",chinese:"桥"},{english:"hopeful",phonetic:"/ˈhoʊpfl/",chinese:"充满希望的"},{english:"nature",phonetic:"/ˈneɪtʃər/",chinese:"自然"},{english:"gift",phonetic:"/ɡɪft/",chinese:"礼物"},{english:"smile",phonetic:"/smaɪl/",chinese:"微笑"}]},{id:"87",title:"My Grandfather's Clock",titleCn:"爷爷的时钟",image:"/images/87爷爷的时钟.png",englishText:`Grandfather has an old clock in his living room. It is big and tall and makes a ticking sound.

The clock has been in our family for many years. My grandfather got it from his own father.

Every hour, the clock chimes. It rings like a song to tell us the time. I love that sound.

Grandfather says this clock will be mine one day. I will keep it in my family forever.`,chineseText:`爷爷客厅里有一个旧时钟。它又大又高，发出滴答声。

这个时钟在我们家已经很多年了。爷爷从他父亲那里得到的。

每个小时，时钟报时。它像一首歌一样响起，告诉我们时间。我喜欢那个声音。

爷爷说这个时钟将来会是我的。我会把它永远留在我的家庭里。`,vocabularies:[{english:"clock",phonetic:"/klɒk/",chinese:"时钟"},{english:"ticking",phonetic:"/ˈtɪkɪŋ/",chinese:"滴答声"},{english:"family",phonetic:"/ˈfæməli/",chinese:"家庭"},{english:"year",phonetic:"/jɪr/",chinese:"年"},{english:"chime",phonetic:"/tʃaɪm/",chinese:"报时声"},{english:"forever",phonetic:"/fərˈevər/",chinese:"永远"},{english:"grandfather",phonetic:"/ˈɡrænfɑːðər/",chinese:"爷爷"},{english:"sound",phonetic:"/saʊnd/",chinese:"声音"}]},{id:"88",title:"The Ladybug",titleCn:"瓢虫",image:"/images/88瓢虫.png",englishText:`A little ladybug sat on a flower in my garden. She was red with black dots on her back.

I was careful not to scare her. Ladybugs are friendly insects that help flowers grow by eating bad bugs.

The ladybug opened her wings and flew away to another flower. She was small but very beautiful.

I am happy I got to see her up close. Nature has so many tiny wonders to discover!`,chineseText:`一只小瓢虫坐在我花园的花上。她是红色的，背上有黑点。

我小心不去吓她。瓢虫是友好的昆虫，帮助花朵生长。

瓢虫打开翅膀飞走了。她很小但非常美丽。

我很高兴能见到她。大自然有这么多微小奇迹！`,vocabularies:[{english:"ladybug",phonetic:"/ˈleɪdibʌɡ/",chinese:"瓢虫"},{english:"flower",phonetic:"/ˈflaʊər/",chinese:"花"},{english:"red",phonetic:"/red/",chinese:"红色"},{english:"dot",phonetic:"/dɒt/",chinese:"点"},{english:"insect",phonetic:"/ˈɪnsekt/",chinese:"昆虫"},{english:"wing",phonetic:"/wɪŋ/",chinese:"翅膀"},{english:"beautiful",phonetic:"/ˈbjuːtɪfl/",chinese:"美丽的"},{english:"wonder",phonetic:"/ˈwʌndər/",chinese:"奇迹"}]},{id:"89",title:"My School Library",titleCn:"我的学校图书馆",image:"/images/89我的学校图书馆.png",englishText:`My school has a big library with many books. There are storybooks, science books, and picture books.

I go to the library every week to borrow new books. The librarian is very kind and helps me find good stories.

In the library, I must be quiet. I sit in a corner and read my book. It feels peaceful.

Books take me to magical places. The library is my favorite spot in school!`,chineseText:`我的学校有一个大图书馆，有很多书。有故事书、科学书和图画书。

我每周去图书馆借新书。图书管理员很和善，帮我找好故事。

在图书馆里，我必须安静。我坐在角落里看书。很平静。

书带我进入神奇的地方。图书馆是我在学校最喜欢的地方！`,vocabularies:[{english:"library",phonetic:"/ˈlaɪbreri/",chinese:"图书馆"},{english:"book",phonetic:"/bʊk/",chinese:"书"},{english:"librarian",phonetic:"/laɪˈbreriən/",chinese:"图书管理员"},{english:"borrow",phonetic:"/ˈbɒroʊ/",chinese:"借"},{english:"quiet",phonetic:"/ˈkwaɪət/",chinese:"安静的"},{english:"peaceful",phonetic:"/ˈpiːsfl/",chinese:"平静的"},{english:"magical",phonetic:"/ˈmædʒɪkl/",chinese:"神奇的"},{english:"favorite",phonetic:"/ˈfeɪvərɪt/",chinese:"最喜欢的"}]},{id:"90",title:"The Sunflower",titleCn:"向日葵",image:"/images/90向日葵.png",englishText:`I planted a sunflower seed in spring. It grew into a tall plant with a big yellow flower.

The sunflower looks just like the sun. Its yellow petals and brown center make me smile every time I see it.

Sunflowers follow the sun across the sky. They turn their heads to face the light all day long.

When summer comes, the sunflowers bloom beautifully. They are like happy flowers that bring sunshine everywhere I look!`,chineseText:`我在春天种了一颗向日葵种子。它长成一株高高的植物，上面有一朵大大的黄花。

向日葵看起来像太阳。它黄色的花瓣和棕色的花心让我微笑。

向日葵跟着太阳穿过天空。它们转动脑袋面向阳光。

向日葵让我想到夏天。它们像快乐的花朵，把阳光带到每个地方！`,vocabularies:[{english:"sunflower",phonetic:"/ˈsʌnflaʊər/",chinese:"向日葵"},{english:"seed",phonetic:"/siːd/",chinese:"种子"},{english:"spring",phonetic:"/sprɪŋ/",chinese:"春天"},{english:"yellow",phonetic:"/ˈjeloʊ/",chinese:"黄色"},{english:"petal",phonetic:"/ˈpetl/",chinese:"花瓣"},{english:"sunshine",phonetic:"/ˈsʌnʃaɪn/",chinese:"阳光"},{english:"summer",phonetic:"/ˈsʌmər/",chinese:"夏天"},{english:"happy",phonetic:"/ˈhæpi/",chinese:"快乐的"}]},{id:"91",title:"My Rubber Duck",titleCn:"我的橡皮鸭",image:"/images/91我的橡皮鸭.png",englishText:`I have a yellow rubber duck in my bathtub. It squeaks when I squeeze it. I have had it since I was a baby.

When I take a bath, the duck floats on the water. It is my best bath buddy.

Sometimes I play games with the duck. I ask it questions and make up answers. My duck is a good listener.

My rubber duck may be small but it makes bath time fun!`,chineseText:`我的浴缸里有一只黄色橡皮鸭。我捏它，它会吱吱叫。我从婴儿时期就有它了。

当我洗澡时，鸭子浮在水面上。它是我最好的洗澡伙伴。

有时我和鸭子玩游戏。我问它问题，然后编造答案。我的鸭子是一个很好的倾听者。

我的橡皮鸭可能很小，但它让洗澡时间变得有趣！`,vocabularies:[{english:"rubber duck",phonetic:"/ˈrʌbər dʌk/",chinese:"橡皮鸭"},{english:"bathtub",phonetic:"/ˈbæθtʌb/",chinese:"浴缸"},{english:"squeak",phonetic:"/skwiːk/",chinese:"吱吱叫"},{english:"float",phonetic:"/floʊt/",chinese:"漂浮"},{english:"buddy",phonetic:"/ˈbʌdi/",chinese:"伙伴"},{english:"bath",phonetic:"/bæθ/",chinese:"洗澡"},{english:"listener",phonetic:"/ˈlɪsənər/",chinese:"倾听者"},{english:"fun",phonetic:"/fʌn/",chinese:"有趣"}]},{id:"92",title:"The Rooster",titleCn:"公鸡",image:"/images/92公鸡.png",englishText:`A rooster lives on my grandfather's farm. He has a red comb and beautiful feathers. Every morning, he crows to wake everyone up.

The rooster walks around the farm proudly. He protects the chickens from danger. The hens follow him because he is their leader.

When the sun rises, the rooster crows again. He is proud of his job. The farm would be quiet without him!`,chineseText:`一只公鸡住在我爷爷的农场里。他有红色的鸡冠和美丽的羽毛。每天早上，他啼叫叫醒大家。

公鸡骄傲地在农场里走来走去。他保护母鸡免受危险。母鸡跟着他，因为他是领袖。

太阳升起时，公鸡再次啼叫。他为他的工作感到骄傲。没有他，农场会很安静！`,vocabularies:[{english:"rooster",phonetic:"/ˈruːstər/",chinese:"公鸡"},{english:"farm",phonetic:"/fɑːrm/",chinese:"农场"},{english:"comb",phonetic:"/koʊm/",chinese:"鸡冠"},{english:"feather",phonetic:"/ˈfeðər/",chinese:"羽毛"},{english:"crown",phonetic:"/kraʊn/",chinese:"啼叫"},{english:"protect",phonetic:"/prəˈtekt/",chinese:"保护"},{english:"leader",phonetic:"/ˈliːdər/",chinese:"领袖"},{english:"proud",phonetic:"/praʊd/",chinese:"骄傲的"}]},{id:"93",title:"My Favorite Day of the Week",titleCn:"我一周中最喜欢的一天",image:"/images/93我一周中最喜欢的一天.png",englishText:`Saturday is my favorite day of the week. I do not have to go to school. I can sleep late and relax.

In the morning, I play games with my family. In the afternoon, I go to the park with my friends.

In the evening, we have a big dinner together. We talk and laugh about the whole week.

Saturday is the best day because I get to do what I love with the people I love!`,chineseText:`周六是我一周中最喜欢的一天。我不用上学。我可以睡懒觉，放松一下。

早上，我和家人玩游戏。下午，我和朋友们去公园。

晚上，我们一起吃大餐。我们谈论整整一周的事情，一起笑。

周六是最棒的一天，因为我能和我爱的人一起做我喜欢的事！`,vocabularies:[{english:"Saturday",phonetic:"/ˈsætərdeɪ/",chinese:"周六"},{english:"favorite",phonetic:"/ˈfeɪvərɪt/",chinese:"最喜欢的"},{english:"relax",phonetic:"/rɪˈlæks/",chinese:"放松"},{english:"morning",phonetic:"/ˈmɔːrnɪŋ/",chinese:"早上"},{english:"afternoon",phonetic:"/ˌæftərˈnuːn/",chinese:"下午"},{english:"evening",phonetic:"/ˈiːvnɪŋ/",chinese:"晚上"},{english:"together",phonetic:"/təˈɡeðər/",chinese:"一起"},{english:"love",phonetic:"/lʌv/",chinese:"爱"}]},{id:"94",title:"The Turtle and the Rabbit Race",titleCn:"龟兔赛跑",image:"/images/94龟兔赛跑.png",englishText:`After the first race, the rabbit learned his lesson. He asked the turtle for another race.

This time, the rabbit ran without stopping. He did not take naps or play. He ran straight to the finish line.

But the turtle started earlier. He walked the whole day without resting. He reached the finish line before the rabbit!

The turtle won again! The rabbit learned that early start and steady progress beat speed without planning.`,chineseText:`第一次比赛后，兔子学到了教训。他要求和乌龟再比一次。

这次，兔子不停下来跑。他不睡午觉，不玩耍。他一直跑到终点线。

但乌龟更早出发。他走了一整天，没有休息。他在兔子之前到达终点线！

乌龟又赢了！兔子学到了提前出发和稳定前进比没有计划的快速更有用。`,vocabularies:[{english:"race",phonetic:"/reɪs/",chinese:"比赛"},{english:"rabbit",phonetic:"/ˈræbɪt/",chinese:"兔子"},{english:"turtle",phonetic:"/ˈtɜːrtl/",chinese:"乌龟"},{english:"lesson",phonetic:"/ˈlesn/",chinese:"教训"},{english:"stop",phonetic:"/stɒp/",chinese:"停止"},{english:"finish",phonetic:"/ˈfɪnɪʃ/",chinese:"完成"},{english:"progress",phonetic:"/ˈprɒɡres/",chinese:"前进"},{english:"planning",phonetic:"/ˈplænɪŋ/",chinese:"计划"}]},{id:"95",title:"My Window View",titleCn:"我的窗外风景",image:"/images/95我的窗外风景.png",englishText:`From my bedroom window, I can see a big tree with many green leaves. Birds come to the tree every morning and sing.

Sometimes I see squirrels running up and down the tree. They look so playful and funny.

When it rains, I watch the raindrops sliding down the window. They make little rivers on the glass.

My window shows me the beauty of nature. I never get bored looking outside!`,chineseText:`从我卧室的窗户，我能看到一棵有大绿叶的大树。鸟儿每天早上来到树上唱歌。

有时我看到松鼠在树上下跑。它们看起来很顽皮很有趣。

下雨时，我看着雨滴滑下窗户。它们在玻璃上形成小小的河流。

我的窗户让我看到大自然的美丽。看外面我永远不会无聊！`,vocabularies:[{english:"window",phonetic:"/ˈwɪndoʊ/",chinese:"窗户"},{english:"tree",phonetic:"/triː/",chinese:"树"},{english:"bird",phonetic:"/bɜːrd/",chinese:"鸟"},{english:"squirrel",phonetic:"/ˈskwɜːrəl/",chinese:"松鼠"},{english:"raindrop",phonetic:"/ˈreɪndrɒp/",chinese:"雨滴"},{english:"river",phonetic:"/ˈrɪvər/",chinese:"河"},{english:"beauty",phonetic:"/ˈbjuːti/",chinese:"美丽"},{english:"nature",phonetic:"/ˈneɪtʃər/",chinese:"自然"}]},{id:"96",title:"The Singing Bird",titleCn:"歌唱的鸟",image:"/images/96歌唱的鸟.png",englishText:`Every morning, a little bird sits on my window ledge. She opens her beak and sings beautiful songs.

Her songs make me feel happy. I tap my foot to her music. The bird seems to know I am listening.

Sometimes the bird brings a friend. They sing together in harmony. Their voices make my room bright.

A bird is like a free musical performance right outside my window!`,chineseText:`每天早上，一只小鸟坐在我的窗台上。她张嘴唱着美丽的歌。

她的歌让我感到快乐。我跟着她的音乐打拍子。鸟儿似乎知道我在听。

有时鸟儿带一个朋友来。它们一起和谐地歌唱。它们的歌声让我的房间明亮。

一只鸟就像在我窗外的一场免费音乐表演！`,vocabularies:[{english:"bird",phonetic:"/bɜːrd/",chinese:"鸟"},{english:"window",phonetic:"/ˈwɪndoʊ/",chinese:"窗户"},{english:"sing",phonetic:"/sɪŋ/",chinese:"唱"},{english:"song",phonetic:"/sɔːŋ/",chinese:"歌"},{english:"happy",phonetic:"/ˈhæpi/",chinese:"快乐的"},{english:"harmony",phonetic:"/ˈhɑːrməni/",chinese:"和谐"},{english:"voice",phonetic:"/vɔɪs/",chinese:"声音"},{english:"performance",phonetic:"/pərˈfɔːrməns/",chinese:"表演"}]},{id:"97",title:"My Favorite Sport",titleCn:"我最喜欢的运动",image:"/images/97我最喜欢的运动.png",englishText:`My favorite sport is swimming. I go to the swimming pool every Saturday with my dad.

At first, I was afraid of the water. But my dad taught me to float. Now I am not afraid anymore.

I can swim in different styles now. I know freestyle and backstroke. Swimming makes me feel strong and free.

When I swim, I feel like a fish in the water. I love the cool feeling all around me!`,chineseText:`我最喜欢的运动是游泳。我每周六和爸爸一起去游泳池。

刚开始，我害怕水。但爸爸教我漂浮。现在我不再害怕了。

我现在会用不同姿势游泳了。我会自由泳和仰泳。游泳让我感到强壮和自由。

当我游泳时，我感觉自己像水里的鱼。我喜欢周围凉爽的感觉！`,vocabularies:[{english:"sport",phonetic:"/spɔːrt/",chinese:"运动"},{english:"swimming",phonetic:"/ˈswɪmɪŋ/",chinese:"游泳"},{english:"pool",phonetic:"/puːl/",chinese:"游泳池"},{english:"water",phonetic:"/ˈwɔːtər/",chinese:"水"},{english:"float",phonetic:"/floʊt/",chinese:"漂浮"},{english:"freestyle",phonetic:"/ˈfriːstaɪl/",chinese:"自由泳"},{english:"backstroke",phonetic:"/ˈbækstroʊk/",chinese:"仰泳"},{english:"strong",phonetic:"/strɒŋ/",chinese:"强壮的"}]},{id:"98",title:"The Windy Day",titleCn:"大风天",image:"/images/98大风天.png",englishText:`Today is very windy. The wind blows so hard that my umbrella turned inside out!

I hold onto my hat so it does not fly away. Leaves and papers dance in the air like flying birds.

The wind makes a whistling sound as it passes my ears. My hair flies everywhere but I kind of like it.

Windy days are fun. They make ordinary things look like an adventure!`,chineseText:`今天风很大。风吹得太用力，我的雨伞翻了！

我抓住帽子，不让它飞走。树叶和纸张像飞鸟一样在空中飞舞。

风吹过我的耳边，发出嗖嗖的声音。我的头发到处飘，但我有点喜欢。

大风天很有趣。它们让普通的东西看起来像冒险！`,vocabularies:[{english:"windy",phonetic:"/ˈwɪndi/",chinese:"大风"},{english:"wind",phonetic:"/wɪnd/",chinese:"风"},{english:"umbrella",phonetic:"/ʌmˈbrelə/",chinese:"雨伞"},{english:"hat",phonetic:"/hæt/",chinese:"帽子"},{english:"leaf",phonetic:"/liːf/",chinese:"叶子"},{english:"whistle",phonetic:"/ˈwɪsl/",chinese:"嗖嗖声"},{english:"adventure",phonetic:"/ədˈventʃər/",chinese:"冒险"},{english:"ordinary",phonetic:"/ˈɔːrdɪneri/",chinese:"普通的"}]},{id:"99",title:"My School Canteen",titleCn:"我的学校食堂",image:"/images/99我的学校食堂.png",englishText:`My school has a big canteen. Many students eat lunch there every day. The food smells really good!

Today the canteen served fried rice and vegetables. The rice was yellow and the vegetables were green and red.

I sit with my friends at a long table. We talk and laugh while eating. Lunch time is the best break of the day.

After eating, we have recess. We play and run around before afternoon class. School canteen makes me happy every day!`,chineseText:`我的学校有一个大食堂。很多学生每天在那里吃午饭。食物闻起来非常香！

今天食堂供应炒饭和蔬菜。米饭是黄色的，蔬菜有绿色和红色的。

我和朋友们坐在一张长桌旁。吃饭时我们聊天、欢笑。午餐时间是一天中最好的休息。

吃完后，我们课间活动。下午课前我们玩耍、跑步。学校食堂每天让我开心！`,vocabularies:[{english:"canteen",phonetic:"/kænˈtiːn/",chinese:"食堂"},{english:"lunch",phonetic:"/lʌntʃ/",chinese:"午饭"},{english:"fried rice",phonetic:"/fraɪd raɪs/",chinese:"炒饭"},{english:"vegetable",phonetic:"/ˈvedʒtəbl/",chinese:"蔬菜"},{english:"recess",phonetic:"/rɪˈses/",chinese:"课间"},{english:"break",phonetic:"/breɪk/",chinese:"休息"},{english:"play",phonetic:"/pleɪ/",chinese:"玩"},{english:"happy",phonetic:"/ˈhæpi/",chinese:"快乐的"}]},{id:"100",title:"My First Day",titleCn:"我的第一天",image:"/images/100我的第一天.png",englishText:`This is my first day at a new school. I felt nervous this morning. I did not know anyone.

But a friendly girl said hello to me. She introduced me to her friends. They all smiled and welcomed me.

At lunch, they saved a seat for me. They asked me questions about my hobbies. I felt less scared.

Now I feel happy about my new school. Making friends is not so hard after all. My first day became a good day!`,chineseText:`这是我在新学校的第一天。今天早上我感到紧张。我不认识任何人。

但一个友好的女孩向我打招呼。她把我介绍给她的朋友们。他们都微笑，欢迎我。

午饭时，他们给我留了一个位置。他们问我的爱好。我不那么害怕了。

现在我对新学校感到开心。交朋友其实并不难。我的第一天变成了美好的一天！`,vocabularies:[{english:"nervous",phonetic:"/ˈnɜːrvəs/",chinese:"紧张的"},{english:"friendly",phonetic:"/ˈfrendli/",chinese:"友好的"},{english:"introduce",phonetic:"/ˌɪntrəˈdjuːs/",chinese:"介绍"},{english:"welcome",phonetic:"/ˈwelkəm/",chinese:"欢迎"},{english:"scared",phonetic:"/skerd/",chinese:"害怕的"},{english:"friend",phonetic:"/frend/",chinese:"朋友"},{english:"hobby",phonetic:"/ˈhɒbi/",chinese:"爱好"},{english:"happy",phonetic:"/ˈhæpi/",chinese:"快乐的"}]}],bg=[{id:"21",title:"My Little Brother",titleCn:"我的弟弟",image:"/images/21我的弟弟.png",englishText:`I have a little brother. His name is Baby. He is only three years old.

He has big eyes and a cute smile. Everyone loves him.

He likes to follow me around the house. He calls my name all day long.

When I come home from school, he runs to hug me. My little brother is my treasure.`,chineseText:`我有一个小弟弟。他叫贝贝。他才三岁。

他有一双大眼睛和可爱的笑容。每个人都喜欢他。

他喜欢在家里跟着我转。他整天喊我的名字。

我从学校回家时，他就跑过来抱我。我的小弟弟是我的宝贝。`,vocabularies:[{english:"brother",phonetic:"/ˈbrʌðər/",chinese:"哥哥/弟弟"},{english:"little",phonetic:"/ˈlɪtl/",chinese:"小的"},{english:"smile",phonetic:"/smaɪl/",chinese:"微笑"},{english:"cute",phonetic:"/kjuːt/",chinese:"可爱的"},{english:"follow",phonetic:"/ˈfɒloʊ/",chinese:"跟着"},{english:"school",phonetic:"/skuːl/",chinese:"学校"},{english:"hug",phonetic:"/hʌɡ/",chinese:"拥抱"},{english:"treasure",phonetic:"/ˈtreʒər/",chinese:"宝贝"}]},{id:"22",title:"My Sister",titleCn:"我的姐姐",image:"/images/22我的姐姐.png",englishText:`My sister is ten years old. She is in Grade Five.

She is very smart and works very hard at school. She always gets good grades.

She helps me with my homework when I do not understand something.

She lets me play with her dolls sometimes. I love my big sister very much.`,chineseText:`我姐姐十岁了。她在五年级。

她非常聪明，学习很努力。她总是取得好成绩。

当我有些东西不懂时，她会帮我辅导作业。

有时候她让我玩她的洋娃娃。我非常爱我的姐姐。`,vocabularies:[{english:"sister",phonetic:"/ˈsɪstər/",chinese:"姐姐/妹妹"},{english:"smart",phonetic:"/smɑːrt/",chinese:"聪明的"},{english:"grade",phonetic:"/ɡreɪd/",chinese:"年级"},{english:"hard",phonetic:"/hɑːrd/",chinese:"努力的"},{english:"homework",phonetic:"/ˈhoʊmwɜːrk/",chinese:"作业"},{english:"understand",phonetic:"/ˌʌndərˈstænd/",chinese:"理解"},{english:"doll",phonetic:"/dɒl/",chinese:"洋娃娃"}]},{id:"23",title:"A Happy Family",titleCn:"一个幸福的家庭",image:"/images/23一个幸福的家庭.png",englishText:`I have a happy family. There are five people in my family.

My dad works hard every day. My mom takes care of us at home.

My grandma cooks delicious food. My grandpa tells us funny stories.

We love each other very much. Every Sunday, we go out together. Family time is the best time!`,chineseText:`我有一个幸福的家庭。我家有五口人。

我爸爸每天努力工作。我妈妈在家里照顾我们。

我奶奶做美味的食物。我爷爷给我们讲有趣的故事。

我们非常相爱。每个星期天，我们都一起外出。家庭时光是最美好的时光！`,vocabularies:[{english:"family",phonetic:"/ˈfæməli/",chinese:"家庭"},{english:"happy",phonetic:"/ˈhæpi/",chinese:"幸福的"},{english:"dad",phonetic:"/dæd/",chinese:"爸爸"},{english:"mom",phonetic:"/moʊm/",chinese:"妈妈"},{english:"grandma",phonetic:"/ˈɡrænmɑː/",chinese:"奶奶"},{english:"grandpa",phonetic:"/ˈɡrænpɑː/",chinese:"爷爷"},{english:"together",phonetic:"/təˈɡeðər/",chinese:"一起"},{english:"love",phonetic:"/lʌv/",chinese:"爱"}]},{id:"24",title:"My Uncle",titleCn:"我的叔叔",image:"/images/24我的叔叔.png",englishText:`My uncle is my dad's brother. He is tall and handsome.

He works in a big company. He wears a suit and tie to work every day.

He sometimes takes me to the park and buys me ice cream. He is very generous.

I am happy to have such a cool uncle. When I grow up, I want to be like him.`,chineseText:`我叔叔是我爸爸的弟弟。他又高又帅。

他在一家大公司工作。他每天穿西装打领带去上班。

他有时带我去公园，给我买冰淇淋。他非常大方。

我很高兴有这样一个酷酷的叔叔。长大后我想成为像他一样的人。`,vocabularies:[{english:"uncle",phonetic:"/ˈʌŋkl/",chinese:"叔叔"},{english:"brother",phonetic:"/ˈbrʌðər/",chinese:"哥哥/弟弟"},{english:"handsome",phonetic:"/ˈhænsəm/",chinese:"帅气的"},{english:"company",phonetic:"/ˈkʌmpəni/",chinese:"公司"},{english:"suit",phonetic:"/suːt/",chinese:"西装"},{english:"ice cream",phonetic:"/aɪs kriːm/",chinese:"冰淇淋"},{english:"generous",phonetic:"/ˈdʒenərəs/",chinese:"大方的"}]},{id:"25",title:"My Aunt",titleCn:"我的阿姨",image:"/images/25我的阿姨.png",englishText:`My aunt is my mom's sister. She is very pretty and kind.

She lives in another city, but she visits us every month.

She always brings me gifts and pretty dresses. I feel like a princess when I wear them.

She tells me stories about when she was a little girl. I love my aunt very much.`,chineseText:`我阿姨是我妈妈的妹妹。她非常漂亮和善良。

她住在另一个城市，但她每个月都来看我们。

她总是给我带礼物和漂亮的裙子。穿上它们我感觉像个小公主。

她给我讲她小时候的故事。我非常爱我的阿姨。`,vocabularies:[{english:"aunt",phonetic:"/ænt/",chinese:"阿姨"},{english:"sister",phonetic:"/ˈsɪstər/",chinese:"姐姐/妹妹"},{english:"pretty",phonetic:"/ˈprɪti/",chinese:"漂亮的"},{english:"kind",phonetic:"/kaɪnd/",chinese:"善良的"},{english:"city",phonetic:"/ˈsɪti/",chinese:"城市"},{english:"gift",phonetic:"/ɡɪft/",chinese:"礼物"},{english:"dress",phonetic:"/dres/",chinese:"裙子"},{english:"princess",phonetic:"/ˌprɪnˈses/",chinese:"公主"}]},{id:"26",title:"My Cousin",titleCn:"我的表弟",image:"/images/26我的表弟.png",englishText:`My cousin Tom is the same age as me. We are like brothers.

We go to the same school and sit in the same class. We do homework together.

During summer vacation, we stay at grandma's house. We play games and watch TV together.

He is my best friend. We share all our secrets with each other.`,chineseText:`我表弟汤姆和我同龄。我们像亲兄弟一样。

我们在同一所学校读书，同一个班级。我们一起做作业。

暑假期间，我们住在奶奶家。我们一起玩游戏一起看电视。

他是我的最好的朋友。我们彼此分享所有的秘密。`,vocabularies:[{english:"cousin",phonetic:"/ˈkʌzn/",chinese:"表兄弟姐妹"},{english:"same",phonetic:"/seɪm/",chinese:"相同的"},{english:"age",phonetic:"/eɪdʒ/",chinese:"年龄"},{english:"vacation",phonetic:"/veɪˈkeɪʃn/",chinese:"假期"},{english:"grandma",phonetic:"/ˈɡrænmɑː/",chinese:"奶奶"},{english:"game",phonetic:"/ɡeɪm/",chinese:"游戏"},{english:"friend",phonetic:"/frend/",chinese:"朋友"},{english:"secret",phonetic:"/ˈsiːkrət/",chinese:"秘密"}]},{id:"27",title:"Our Neighborhood",titleCn:"我们的邻居",image:"/images/27我们的邻居.png",englishText:`We have friendly neighbors. Mr. Li lives next to us.

He always says hello to us when we pass by. He waters his flowers every morning.

Mrs. Wang lives on the other side. She makes delicious cookies for the children.

The neighbors are like a big family. We help each other when someone needs help.`,chineseText:`我们有友好的邻居。李叔叔住在我们隔壁。

我们经过时他总是和我们打招呼。他每天早上浇花。

王阿姨住在另一边。她给孩子们做美味的饼干。

邻居们就像一个大家庭。当有人需要帮助时，我们会互相帮助。`,vocabularies:[{english:"neighbor",phonetic:"/ˈneɪbər/",chinese:"邻居"},{english:"friendly",phonetic:"/ˈfrendli/",chinese:"友好的"},{english:"flower",phonetic:"/ˈflaʊər/",chinese:"花"},{english:"morning",phonetic:"/ˈmɔːrnɪŋ/",chinese:"早上"},{english:"delicious",phonetic:"/dɪˈlɪʃəs/",chinese:"美味的"},{english:"cookie",phonetic:"/ˈkʊki/",chinese:"饼干"},{english:"family",phonetic:"/ˈfæməli/",chinese:"家庭"},{english:"help",phonetic:"/help/",chinese:"帮助"}]},{id:"28",title:"Moving to a New House",titleCn:"搬新家",image:"/images/28搬新家.png",englishText:`Last month, we moved to a new house. It is bigger than our old one.

I have my own room now. I can decorate it with my favorite pictures.

There is a big garden behind the house. I can plant flowers there.

We invited our friends to visit our new home. They said it was very beautiful.`,chineseText:`上个月，我们搬进了新房子。它比我们老房子大。

现在我有自己的房间了。我可以用我最喜欢的图片装饰它。

房子后面有一个大花园。我可以在那里种花。

我们邀请朋友来参观我们的新家。他们说非常漂亮。`,vocabularies:[{english:"move",phonetic:"/muːv/",chinese:"搬家"},{english:"house",phonetic:"/haʊs/",chinese:"房子"},{english:"big",phonetic:"/bɪɡ/",chinese:"大的"},{english:"room",phonetic:"/ruːm/",chinese:"房间"},{english:"decorate",phonetic:"/ˈdekəreɪt/",chinese:"装饰"},{english:"garden",phonetic:"/ˈɡɑːrdn/",chinese:"花园"},{english:"flower",phonetic:"/ˈflaʊər/",chinese:"花"},{english:"friend",phonetic:"/frend/",chinese:"朋友"},{english:"beautiful",phonetic:"/ˈbjuːtɪfl/",chinese:"漂亮的"}]},{id:"29",title:"Sunday Morning",titleCn:"星期天的早晨",image:"/images/29星期天的早晨.png",englishText:`Sunday morning is my favorite time. The whole family is home.

Dad reads the newspaper in the living room. Mom cooks a big breakfast for us.

My brother and I play with our toys. Sometimes we watch cartoons on TV.

These quiet and happy mornings are what I treasure most.`,chineseText:`星期天的早晨是我最爱的时光。全家人都在家。

爸爸在客厅看报纸。妈妈为我们做丰盛的早餐。

我和弟弟玩玩具。有时候我们看电视上的动画片。

这些安静幸福的早晨是我最珍惜的时光。`,vocabularies:[{english:"Sunday",phonetic:"/ˈsʌndeɪ/",chinese:"星期日"},{english:"morning",phonetic:"/ˈmɔːrnɪŋ/",chinese:"早晨"},{english:"favorite",phonetic:"/ˈfeɪvərɪt/",chinese:"最喜欢的"},{english:"family",phonetic:"/ˈfæməli/",chinese:"家人"},{english:"newspaper",phonetic:"/ˈnjuːzpeɪpər/",chinese:"报纸"},{english:"living room",phonetic:"/ˈlɪvɪŋ ruːm/",chinese:"客厅"},{english:"breakfast",phonetic:"/ˈbrekfəst/",chinese:"早餐"},{english:"toy",phonetic:"/tɔɪ/",chinese:"玩具"},{english:"treasure",phonetic:"/ˈtreʒər/",chinese:"珍惜"}]},{id:"30",title:"Helping at Home",titleCn:"在家里帮忙",image:"/images/30在家里帮忙.png",englishText:`I help my parents at home. I want to be a responsible child.

I make my bed every morning after I wake up. I keep my room clean and tidy.

I wash the dishes after dinner. I also take out the garbage.

Mom and Dad say I am a big helper. Helping at home makes me feel proud.`,chineseText:`我在家帮爸爸妈妈。我想做一个有责任心的孩子。

每天早上起床后我叠被子。我保持房间干净整洁。

晚饭后我洗碗。我也倒垃圾。

爸爸妈妈说我是个小帮手。在家帮忙让我感到自豪。`,vocabularies:[{english:"help",phonetic:"/help/",chinese:"帮助"},{english:"responsible",phonetic:"/rɪˈspɒnsəbl/",chinese:"有责任心的"},{english:"child",phonetic:"/tʃaɪld/",chinese:"孩子"},{english:"clean",phonetic:"/kliːn/",chinese:"干净的"},{english:"tidy",phonetic:"/ˈtaɪdi/",chinese:"整洁的"},{english:"dinner",phonetic:"/ˈdɪnər/",chinese:"晚餐"},{english:"garbage",phonetic:"/ˈɡɑːrbɪdʒ/",chinese:"垃圾"},{english:"proud",phonetic:"/praʊd/",chinese:"自豪的"}]},{id:"31",title:"My Classroom",titleCn:"我的教室",image:"/images/31我的教室.png",englishText:`Our classroom is on the second floor. It is bright and clean.

We have a big blackboard on the front wall. Our teacher writes lessons on it every day.

There are twenty desks and chairs in the room. Each student has their own seat.

We have a reading corner with many books. I love spending time there during recess.`,chineseText:`我们教室在二楼。它明亮又干净。

前面墙上有一块大黑板。我们的老师每天在上面写课程内容。

房间里有二十张桌椅。每个学生都有自己的座位。

我们有一个阅读角，有很多书。课间我喜欢在那里消磨时光。`,vocabularies:[{english:"classroom",phonetic:"/ˈklæsrʊm/",chinese:"教室"},{english:"floor",phonetic:"/flɔːr/",chinese:"楼层"},{english:"bright",phonetic:"/braɪt/",chinese:"明亮的"},{english:"blackboard",phonetic:"/ˈblækbɔːrd/",chinese:"黑板"},{english:"lesson",phonetic:"/ˈlesn/",chinese:"课程"},{english:"student",phonetic:"/ˈstjuːdnt/",chinese:"学生"},{english:"reading corner",phonetic:"/ˈriːdɪŋ ˈkɔːrnər/",chinese:"阅读角"},{english:"recess",phonetic:"/rɪˈses/",chinese:"课间"}]},{id:"32",title:"My Desk",titleCn:"我的课桌",image:"/images/32我的课桌.png",englishText:`My desk is near the window. I can see the beautiful garden from my seat.

On my desk, I keep my textbooks, notebooks, and pencil case.

I have a cute pencil box with colorful pencils inside. They help me draw nice pictures.

I always keep my desk clean and organized. A tidy desk helps me study better.`,chineseText:`我的课桌在窗户旁边。我可以从座位上看到美丽的花园。

我的桌上有课本、笔记本和铅笔盒。

我有一个可爱的铅笔盒，里面有彩色铅笔。它们帮我画出漂亮的图画。

我总是保持桌子整洁有序。整洁的桌子帮助我更好地学习。`,vocabularies:[{english:"desk",phonetic:"/desk/",chinese:"课桌"},{english:"window",phonetic:"/ˈwɪndoʊ/",chinese:"窗户"},{english:"garden",phonetic:"/ˈɡɑːrdn/",chinese:"花园"},{english:"textbook",phonetic:"/ˈtekstbʊk/",chinese:"课本"},{english:"notebook",phonetic:"/ˈnoʊtbʊk/",chinese:"笔记本"},{english:"pencil case",phonetic:"/ˈpensl keɪs/",chinese:"铅笔盒"},{english:"colorful",phonetic:"/ˈkʌlərfl/",chinese:"彩色的"},{english:"tidy",phonetic:"/ˈtaɪdi/",chinese:"整洁的"}]},{id:"33",title:"My Schoolbag",titleCn:"我的书包",image:"/images/33我的书包.png",englishText:`I have a blue schoolbag. It is my favorite color.

Every morning, I put my books, notebooks, and pencil box into my bag.

I also carry a water bottle. It is important to drink water during the day.

My schoolbag is a bit heavy sometimes, but it carries all my learning tools.`,chineseText:`我有一个蓝色的书包。这是我最喜欢的颜色。

每天早上，我把书、笔记本和铅笔盒放进书包里。

我还带一瓶水。白天喝水很重要。

我的书包有时候有点重，但它装着我所有的学习工具。`,vocabularies:[{english:"schoolbag",phonetic:"/ˈskuːlbæɡ/",chinese:"书包"},{english:"blue",phonetic:"/bluː/",chinese:"蓝色的"},{english:"favorite",phonetic:"/ˈfeɪvərɪt/",chinese:"最喜欢的"},{english:"book",phonetic:"/bʊk/",chinese:"书"},{english:"notebook",phonetic:"/ˈnoʊtbʊk/",chinese:"笔记本"},{english:"water bottle",phonetic:"/ˈwɔːtər ˈbɒtl/",chinese:"水瓶"},{english:"heavy",phonetic:"/ˈhevi/",chinese:"重的"},{english:"tool",phonetic:"/tuːl/",chinese:"工具"}]},{id:"34",title:"Monday Morning",titleCn:"星期一早晨",image:"/images/34星期一早晨.png",englishText:`Monday morning comes after a fun weekend. I feel a little tired but happy.

I wake up at six-thirty. I brush my teeth and wash my face quickly.

I put on my school uniform and eat a quick breakfast. Time is always short in the morning!

Then I rush to school with my schoolbag. A new week of learning begins!`,chineseText:`星期一早晨是在一个有趣周末之后到来的。我感觉有点累但很开心。

我六点半起床。我快速刷牙洗脸。

我穿上校服，快速吃早餐。早上的时间总是很紧张！

然后我背着书包赶往学校。新一周的学习开始了！`,vocabularies:[{english:"Monday",phonetic:"/ˈmʌndeɪ/",chinese:"星期一"},{english:"morning",phonetic:"/ˈmɔːrnɪŋ/",chinese:"早晨"},{english:"weekend",phonetic:"/ˈwiːkend/",chinese:"周末"},{english:"tired",phonetic:"/ˈtaɪərd/",chinese:"累的"},{english:"uniform",phonetic:"/ˈjuːnɪfɔːrm/",chinese:"校服"},{english:"breakfast",phonetic:"/ˈbrekfəst/",chinese:"早餐"},{english:"quick",phonetic:"/kwɪk/",chinese:"快速的"},{english:"rush",phonetic:"/rʌʃ/",chinese:"匆忙"}]},{id:"35",title:"At the Library",titleCn:"在图书馆",image:"/images/35在图书馆.png",englishText:`Our school has a big library. It is my favorite place in school.

There are thousands of books on the shelves. Storybooks, science books, and picture books.

I go to the library every Wednesday. I can borrow two books each time.

Reading takes me to different worlds. Books are the best friends of children!`,chineseText:`我们学校有一个大图书馆。它是我在学校最喜欢的地方。

书架上有成千上万的书。故事书、科学书和图画书。

我每个星期三去图书馆。我每次可以借两本书。

阅读带我进入不同的世界。书是孩子们最好的朋友！`,vocabularies:[{english:"library",phonetic:"/ˈlaɪbreri/",chinese:"图书馆"},{english:"favorite",phonetic:"/ˈfeɪvərɪt/",chinese:"最喜欢的"},{english:"place",phonetic:"/pleɪs/",chinese:"地方"},{english:"book",phonetic:"/bʊk/",chinese:"书"},{english:"storybook",phonetic:"/ˈstɔːrɪbʊk/",chinese:"故事书"},{english:"science",phonetic:"/ˈsaɪəns/",chinese:"科学"},{english:"borrow",phonetic:"/ˈbɒroʊ/",chinese:"借"},{english:"reading",phonetic:"/ˈriːdɪŋ/",chinese:"阅读"}]},{id:"36",title:"My Best Subject",titleCn:"我最喜欢的科目",image:"/images/36我最喜欢的科目.png",englishText:`My favorite subject is English. I love learning new words and sentences.

Our English teacher makes the class fun and interesting. We sing English songs and play games.

I practice speaking English every day. I want to travel to foreign countries someday.

English helps me make friends from different countries. It opens a new door for me!`,chineseText:`我最喜欢的科目是英语。我喜欢学习新单词和句子。

我们英语老师让课堂变得有趣。我们唱英语歌玩游戏。

我每天练习说英语。我想有一天去外国旅游。

英语帮我结交不同国家的朋友。它为我打开了一扇新的大门！`,vocabularies:[{english:"subject",phonetic:"/ˈsʌbdʒɪkt/",chinese:"科目"},{english:"English",phonetic:"/ˈɪŋɡlɪʃ/",chinese:"英语"},{english:"word",phonetic:"/wɜːrd/",chinese:"单词"},{english:"sentence",phonetic:"/ˈsentəns/",chinese:"句子"},{english:"class",phonetic:"/klæs/",chinese:"课堂"},{english:"interesting",phonetic:"/ˈɪntrəstɪŋ/",chinese:"有趣的"},{english:"practice",phonetic:"/ˈpræktɪs/",chinese:"练习"},{english:"country",phonetic:"/ˈkʌntri/",chinese:"国家"}]},{id:"37",title:"The Playground",titleCn:"操场",image:"/images/37操场.png",englishText:`Our school playground is very big. There is a long running track around it.

During PE class, we do exercises on the playground. Some students run races, some play basketball.

After lunch, many children come here to play. We fly kites and play tag.

The playground is full of laughter and joy. It is the happiest place in school!`,chineseText:`我们学校的操场非常大。周围有一条长长的跑道。

体育课上，我们在操场上锻炼。有的学生跑步，有的打篮球。

午饭后，很多孩子来这里玩。我们放风筝和玩抓人游戏。

操场充满了欢声笑语。它是学校里最快乐的地方！`,vocabularies:[{english:"playground",phonetic:"/ˈpleɪɡraʊnd/",chinese:"操场"},{english:"track",phonetic:"/træk/",chinese:"跑道"},{english:"PE class",phonetic:"/piː iː klæs/",chinese:"体育课"},{english:"exercise",phonetic:"/ˈeksərsaɪz/",chinese:"锻炼"},{english:"race",phonetic:"/reɪs/",chinese:"赛跑"},{english:"basketball",phonetic:"/ˈbæskɪtbɔːl/",chinese:"篮球"},{english:"kite",phonetic:"/kaɪt/",chinese:"风筝"},{english:"joy",phonetic:"/dʒɔɪ/",chinese:"快乐"}]},{id:"38",title:"Learning to Write",titleCn:"学写字",image:"/images/38学写字.png",englishText:`Learning to write is important. When I first started school, I could not write at all.

My teacher taught me to hold the pencil correctly. She showed me how to write each letter.

At first, my handwriting was not good. But I practiced every day.

Now I can write beautiful sentences. I am proud of my progress!`,chineseText:`学写字很重要。当我刚上学时，我完全不会写。

我的老师教我正确握铅笔。她教我如何写每个字母。

一开始，我的书写不太好。但我每天练习。

现在我可以写漂亮的句子了。我为我的进步感到骄傲！`,vocabularies:[{english:"write",phonetic:"/raɪt/",chinese:"写"},{english:"important",phonetic:"/ɪmˈpɔːrtənt/",chinese:"重要的"},{english:"pencil",phonetic:"/ˈpensl/",chinese:"铅笔"},{english:"correctly",phonetic:"/kəˈrektli/",chinese:"正确地"},{english:"letter",phonetic:"/ˈletər/",chinese:"字母"},{english:"handwriting",phonetic:"/ˈhændraɪtɪŋ/",chinese:"书写"},{english:"practice",phonetic:"/ˈpræktɪs/",chinese:"练习"},{english:"progress",phonetic:"/ˈprɒɡres/",chinese:"进步"}]},{id:"39",title:"Making Friends",titleCn:"交朋友",image:"/images/39交朋友.png",englishText:`Making friends is an important skill. When I started school, I was very shy.

I did not know anyone in my class. I felt lonely at first.

Then a friendly girl named Lily talked to me. She invited me to play with her.

Now I have many friends. I learned that being friendly is the first step to making friends.`,chineseText:`交朋友是一项重要的技能。当我刚上学时，我非常害羞。

我班里一个人都不认识。起初我感到很孤独。

然后一个叫莉莉的友好女孩和我说话了。她邀请我和她一起玩。

现在我有很多朋友了。我明白了友好是交朋友的第一步。`,vocabularies:[{english:"friend",phonetic:"/frend/",chinese:"朋友"},{english:"skill",phonetic:"/skɪl/",chinese:"技能"},{english:"shy",phonetic:"/ʃaɪ/",chinese:"害羞的"},{english:"class",phonetic:"/klæs/",chinese:"班级"},{english:"lonely",phonetic:"/ˈloʊnli/",chinese:"孤独的"},{english:"friendly",phonetic:"/ˈfrendli/",chinese:"友好的"},{english:"invite",phonetic:"/ɪnˈvaɪt/",chinese:"邀请"}]},{id:"40",title:"Friday Afternoon",titleCn:"星期五下午",image:"/images/40星期五下午.png",englishText:`Friday afternoon is the best time of the school week. Classes are almost over.

After school, I do not have homework on Fridays. I feel so happy and free!

Sometimes my friends and I go to the playground. Sometimes we just walk home together.

Then the wonderful weekend begins! Friday makes everyone excited!`,chineseText:`星期五下午是一周中最好的时光。课程几乎结束了。

放学后，星期五我没有作业。我感到非常开心和自由！

有时候我和朋友去操场。有时候我们一起走路回家。

然后美好的周末就开始了！星期五让每个人都很兴奋！`,vocabularies:[{english:"Friday",phonetic:"/ˈfraɪdeɪ/",chinese:"星期五"},{english:"afternoon",phonetic:"/ˌæftərˈnuːn/",chinese:"下午"},{english:"week",phonetic:"/wiːk/",chinese:"周"},{english:"homework",phonetic:"/ˈhoʊmwɜːrk/",chinese:"作业"},{english:"happy",phonetic:"/ˈhæpi/",chinese:"开心的"},{english:"free",phonetic:"/friː/",chinese:"自由的"},{english:"playground",phonetic:"/ˈpleɪɡraʊnd/",chinese:"操场"},{english:"excited",phonetic:"/ɪkˈsaɪtɪd/",chinese:"兴奋的"}]},{id:"41",title:"The Butterfly",titleCn:"蝴蝶",image:"/images/41蝴蝶.png",englishText:`Last spring, I saw a beautiful butterfly in the garden. Its wings were colorful.

It flew from flower to flower. It looked so graceful and free.

I stayed very still and watched it for a long time. Nature is so wonderful!

Sometimes I imagine I am a butterfly flying in the blue sky. That would be amazing!`,chineseText:`去年春天，我在花园里看到一只美丽的蝴蝶。它的翅膀色彩斑斓。

它在花间飞来飞去。看起来那么优雅那么自由。

我静静地站着看了它很久。大自然真奇妙！

有时候我想象自己是一只蝴蝶，在蓝天中飞翔。那一定很神奇！`,vocabularies:[{english:"butterfly",phonetic:"/ˈbʌtərflaɪ/",chinese:"蝴蝶"},{english:"spring",phonetic:"/sprɪŋ/",chinese:"春天"},{english:"beautiful",phonetic:"/ˈbjuːtɪfl/",chinese:"美丽的"},{english:"wing",phonetic:"/wɪŋ/",chinese:"翅膀"},{english:"colorful",phonetic:"/ˈkʌlərfl/",chinese:"彩色的"},{english:"flower",phonetic:"/ˈflaʊər/",chinese:"花"},{english:"graceful",phonetic:"/ˈɡreɪsfl/",chinese:"优雅的"},{english:"wonderful",phonetic:"/ˈwʌndərfl/",chinese:"奇妙的"}]},{id:"42",title:"The Elephant",titleCn:"大象",image:"/images/42大象.png",englishText:`The elephant is the biggest animal on land. It has a long trunk and big ears.

Elephants live in groups. They take care of each other like a big family.

They eat grass, leaves, and fruits. They need to drink a lot of water every day.

Elephants are very smart and gentle. They never forget things they learn.`,chineseText:`大象是陆地上最大的动物。它有长长的鼻子和大大的耳朵。

大象群居生活。它们像大家庭一样互相照顾。

它们吃草、叶子和水果。它们每天需要喝很多水。

大象非常聪明和温和。它们永远不会忘记学到的东西。`,vocabularies:[{english:"elephant",phonetic:"/ˈelɪfənt/",chinese:"大象"},{english:"animal",phonetic:"/ˈænɪml/",chinese:"动物"},{english:"big",phonetic:"/bɪɡ/",chinese:"大的"},{english:"trunk",phonetic:"/trʌŋk/",chinese:"鼻子"},{english:"grass",phonetic:"/ɡræs/",chinese:"草"},{english:"leaf",phonetic:"/liːf/",chinese:"叶子"},{english:"fruit",phonetic:"/fruːt/",chinese:"水果"},{english:"smart",phonetic:"/smɑːrt/",chinese:"聪明的"}]},{id:"43",title:"The Dolphin",titleCn:"海豚",image:"/images/43海豚.png",englishText:`Dolphins live in the ocean. They are very clever and friendly animals.

They can jump high out of the water. Sometimes they swim alongside boats.

Dolphins talk to each other using special sounds. They use sounds to find food.

People love dolphins because they are playful and kind. They are the smiles of the sea!`,chineseText:`海豚生活在海洋里。它们是非常聪明和友好的动物。

它们可以高高跳出水面。有时候它们沿着船游。

海豚用特殊的声音互相交流。它们用声音寻找食物。

人们喜欢海豚因为它们顽皮友善。它们是海上的微笑！`,vocabularies:[{english:"dolphin",phonetic:"/ˈdɒlfɪn/",chinese:"海豚"},{english:"ocean",phonetic:"/ˈoʊʃn/",chinese:"海洋"},{english:"clever",phonetic:"/ˈklevər/",chinese:"聪明的"},{english:"friendly",phonetic:"/ˈfrendli/",chinese:"友好的"},{english:"jump",phonetic:"/dʒʌmp/",chinese:"跳"},{english:"water",phonetic:"/ˈwɔːtər/",chinese:"水"},{english:"sound",phonetic:"/saʊnd/",chinese:"声音"},{english:"playful",phonetic:"/ˈpleɪfl/",chinese:"顽皮的"}]},{id:"44",title:"The Rabbit",titleCn:"小兔子",image:"/images/44小兔子.png",englishText:`A rabbit has long ears and a fluffy tail. It hops instead of walking.

Rabbits like to eat carrots and fresh vegetables. They chew with their strong teeth.

They live in holes in the ground. The holes keep them safe from danger.

Baby rabbits are called kittens. They are so soft and cute!`,chineseText:`兔子有长长的耳朵和毛茸茸的尾巴。它用跳代替走路。

兔子喜欢吃胡萝卜和新鲜蔬菜。它们用坚硬的牙齿咀嚼。

它们住在地下的洞里。洞让它们远离危险。

小兔子叫做幼兔。它们非常柔软可爱！`,vocabularies:[{english:"rabbit",phonetic:"/ˈræbɪt/",chinese:"兔子"},{english:"ear",phonetic:"/ɪr/",chinese:"耳朵"},{english:"tail",phonetic:"/teɪl/",chinese:"尾巴"},{english:"hop",phonetic:"/hɒp/",chinese:"跳"},{english:"carrot",phonetic:"/ˈkærət/",chinese:"胡萝卜"},{english:"vegetable",phonetic:"/ˈvedʒtəbl/",chinese:"蔬菜"},{english:"hole",phonetic:"/hoʊl/",chinese:"洞"},{english:"safe",phonetic:"/seɪf/",chinese:"安全的"}]},{id:"45",title:"The Bird's Nest",titleCn:"鸟巢",image:"/images/45鸟巢.png",englishText:`Spring is the season when birds build nests. They use twigs and leaves.

The mother bird lays eggs in the nest. She sits on them to keep them warm.

After some days, baby birds break out of the shells. They are so tiny and helpless.

The parents work hard to find food for their babies. That is what parents do!`,chineseText:`春天是鸟类筑巢的季节。它们用小树枝和叶子。

鸟妈妈在窝里下蛋。她坐在上面保持蛋的温暖。

几天后，小鸟破壳而出。它们那么小那么无助。

鸟爸爸妈妈努力为宝宝找食物。这就是父母做的事！`,vocabularies:[{english:"bird",phonetic:"/bɜːrd/",chinese:"鸟"},{english:"nest",phonetic:"/nest/",chinese:"巢"},{english:"spring",phonetic:"/sprɪŋ/",chinese:"春天"},{english:"twig",phonetic:"/twɪɡ/",chinese:"小树枝"},{english:"leaf",phonetic:"/liːf/",chinese:"叶子"},{english:"egg",phonetic:"/eɡ/",chinese:"蛋"},{english:"warm",phonetic:"/wɔːrm/",chinese:"温暖的"},{english:"parent",phonetic:"/ˈperənt/",chinese:"父母"}]},{id:"46",title:"A Walk in the Forest",titleCn:"森林漫步",image:"/images/46森林漫步.png",englishText:`Last weekend, my family went for a walk in the forest. It was so peaceful.

The trees were tall and green. Sunlight came through the leaves gently.

We heard birds singing. A squirrel ran across our path with an acorn.

The forest is like a big home for many animals. We must protect it!`,chineseText:`上周末，我们全家去森林散步。那里非常宁静。

树木高大翠绿。阳光透过叶子温柔地洒落。

我们听到鸟儿歌唱。一只松鼠叼着橡果从我们的小路上跑过。

森林像很多动物的大本营。我们必须保护它！`,vocabularies:[{english:"forest",phonetic:"/ˈfɔːrɪst/",chinese:"森林"},{english:"peaceful",phonetic:"/ˈpiːsfl/",chinese:"宁静的"},{english:"tree",phonetic:"/triː/",chinese:"树"},{english:"green",phonetic:"/ɡriːn/",chinese:"绿色的"},{english:"sunlight",phonetic:"/ˈsʌnlaɪt/",chinese:"阳光"},{english:"bird",phonetic:"/bɜːrd/",chinese:"鸟"},{english:"squirrel",phonetic:"/ˈskwɪrəl/",chinese:"松鼠"},{english:"protect",phonetic:"/prəˈtekt/",chinese:"保护"}]},{id:"47",title:"The Moon",titleCn:"月亮",image:"/images/47月亮.png",englishText:`At night, the moon shines in the sky. It looks like a silver bowl.

The moon does not have its own light. It reflects the sunlight.

Sometimes the moon is round, sometimes it is a crescent. It changes its shape.

The moon goes around the Earth. It takes about one month to complete one circle.`,chineseText:`夜晚，月亮在天空中照耀。它看起来像一个银色的碗。

月亮本身不发光。它反射太阳光。

有时候月亮是圆的，有时候是月牙形。它在改变形状。

月亮绕着地球转。它大约需要一个月完成一圈。`,vocabularies:[{english:"moon",phonetic:"/muːn/",chinese:"月亮"},{english:"night",phonetic:"/naɪt/",chinese:"夜晚"},{english:"sky",phonetic:"/skaɪ/",chinese:"天空"},{english:"light",phonetic:"/laɪt/",chinese:"光"},{english:"sunlight",phonetic:"/ˈsʌnlaɪt/",chinese:"阳光"},{english:"round",phonetic:"/raʊnd/",chinese:"圆的"},{english:"crescent",phonetic:"/ˈkresnt/",chinese:"月牙形的"},{english:"Earth",phonetic:"/ɜːrθ/",chinese:"地球"}]},{id:"48",title:"The Sun",titleCn:"太阳",image:"/images/48太阳.png",englishText:`The sun rises in the morning and sets in the evening. It gives us daylight.

The sun is a star. It is very big and very hot. Plants need sunlight to grow.

We get warmth and light from the sun every day. Without the sun, Earth would be dark and cold.

The sun looks small because it is far away. Actually, one million Earths could fit inside the sun!`,chineseText:`太阳早上升起，傍晚落下。它给我们带来白昼。

太阳是一颗恒星。它非常大非常热。植物需要阳光才能生长。

每天我们从太阳获得温暖和光明。没有太阳，地球将会黑暗寒冷。

太阳看起来小是因为它离我们很远。实际上，一百万个地球才能填满太阳！`,vocabularies:[{english:"sun",phonetic:"/sʌn/",chinese:"太阳"},{english:"rise",phonetic:"/raɪz/",chinese:"升起"},{english:"set",phonetic:"/set/",chinese:"落下"},{english:"daylight",phonetic:"/ˈdeɪlaɪt/",chinese:"日光"},{english:"star",phonetic:"/stɑːr/",chinese:"星星"},{english:"plant",phonetic:"/plænt/",chinese:"植物"},{english:"grow",phonetic:"/ɡroʊ/",chinese:"生长"},{english:"warmth",phonetic:"/wɔːrmθ/",chinese:"温暖"}]},{id:"49",title:"Rainbows",titleCn:"彩虹",image:"/images/49彩虹.png",englishText:`After the rain, sometimes we can see a rainbow in the sky. It is so beautiful!

A rainbow has seven colors. They are red, orange, yellow, green, blue, indigo, and violet.

The rainbow is like a big bridge in the sky. Everyone stops to look at it.

When I see a rainbow, I feel hopeful. It reminds me that good times come after difficult times.`,chineseText:`雨后，有时候我们可以在天空中看到彩虹。它真美！

彩虹有七种颜色。它们是红、橙、黄、绿、蓝、靛、紫。

彩虹像天空中的一座大桥。每个人都会停下来看它。

当我看到彩虹时，我感到充满希望。它提醒我美好的时光总会到来。`,vocabularies:[{english:"rainbow",phonetic:"/ˈreɪnboʊ/",chinese:"彩虹"},{english:"rain",phonetic:"/reɪn/",chinese:"雨"},{english:"sky",phonetic:"/skaɪ/",chinese:"天空"},{english:"beautiful",phonetic:"/ˈbjuːtɪfl/",chinese:"美丽的"},{english:"color",phonetic:"/ˈkʌlər/",chinese:"颜色"},{english:"bridge",phonetic:"/brɪdʒ/",chinese:"桥"},{english:"hopeful",phonetic:"/ˈhoʊpfl/",chinese:"充满希望的"},{english:"remind",phonetic:"/rɪˈmaɪnd/",chinese:"提醒"}]},{id:"50",title:"Four Seasons",titleCn:"四季",image:"/images/50四季.png",englishText:`There are four seasons in a year. They are spring, summer, autumn, and winter.

In spring, flowers bloom and birds return. Everything looks fresh and new.

Summer is hot and sunny. We can swim and eat ice cream.

Autumn brings cool air and falling leaves. Winter is cold with snow covering the ground.

Each season has its own beauty. That is why I love all four seasons!`,chineseText:`一年有四个季节。它们是春、夏、秋、冬。

春天，花儿盛开，鸟儿归来。一切看起来新鲜美好。

夏天炎热阳光充足。我们可以游泳吃冰淇淋。

秋天带来凉爽的空气和飘落的叶子。冬天寒冷，白雪覆盖大地。

每个季节都有自己的美。这就是为什么我喜欢所有四个季节！`,vocabularies:[{english:"season",phonetic:"/ˈsiːzn/",chinese:"季节"},{english:"spring",phonetic:"/sprɪŋ/",chinese:"春天"},{english:"summer",phonetic:"/ˈsʌmər/",chinese:"夏天"},{english:"autumn",phonetic:"/ˈɔːtəm/",chinese:"秋天"},{english:"winter",phonetic:"/ˈwɪntər/",chinese:"冬天"},{english:"flower",phonetic:"/ˈflaʊər/",chinese:"花"},{english:"snow",phonetic:"/snoʊ/",chinese:"雪"},{english:"beauty",phonetic:"/ˈbjuːti/",chinese:"美"}]}],xg=[{id:"51",title:"Breakfast is Important",titleCn:"早餐很重要",image:"/images/51早餐很重要.png",englishText:`Breakfast is the most important meal of the day. I never skip breakfast.

Every morning, Mom prepares a nutritious breakfast for me. I have milk, eggs, and bread.

Sometimes I have noodles or congee. A good breakfast gives me energy for the whole morning.

With a full stomach, I can study better and play happily. Never forget to eat breakfast!`,chineseText:`早餐是一天中最重要的一餐。我从不吃早餐。

每天早上，妈妈为我准备营养早餐。我喝牛奶、吃鸡蛋和面包。

有时候我吃面条或粥。一顿好的早餐给我一整个上午的能量。

吃饱了肚子，我可以更好地学习开心地玩耍。千万不要忘记吃早餐！`,vocabularies:[{english:"breakfast",phonetic:"/ˈbrekfəst/",chinese:"早餐"},{english:"important",phonetic:"/ɪmˈpɔːrtənt/",chinese:"重要的"},{english:"meal",phonetic:"/miːl/",chinese:"一餐"},{english:"nutritious",phonetic:"/njuːˈtrɪʃəs/",chinese:"营养的"},{english:"milk",phonetic:"/mɪlk/",chinese:"牛奶"},{english:"egg",phonetic:"/eɡ/",chinese:"鸡蛋"},{english:"bread",phonetic:"/bred/",chinese:"面包"},{english:"energy",phonetic:"/ˈenərdʒi/",chinese:"能量"},{english:"stomach",phonetic:"/ˈstʌmək/",chinese:"胃"}]},{id:"52",title:"Eating Vegetables",titleCn:"吃蔬菜",image:"/images/52吃蔬菜.png",englishText:`Vegetables are good for our health. They have many vitamins and minerals.

I used to not like vegetables. But Mom found ways to make them tasty.

She cooks broccoli, carrots, and spinach. She makes them with a little butter and salt.

Now I know vegetables help me grow strong and stay healthy. Eat your vegetables every day!`,chineseText:`蔬菜对我们的健康有好处。它们有很多维生素和矿物质。

我以前不喜欢吃蔬菜。但妈妈找到了让它们变得美味的方法。

她做西兰花、胡萝卜和菠菜。她用一点黄油和盐来烹饪。

现在我知道蔬菜帮助我健康成长。多吃蔬菜身体好！`,vocabularies:[{english:"vegetable",phonetic:"/ˈvedʒtəbl/",chinese:"蔬菜"},{english:"health",phonetic:"/helθ/",chinese:"健康"},{english:"vitamin",phonetic:"/ˈvaɪtəmɪn/",chinese:"维生素"},{english:"broccoli",phonetic:"/ˈbrɒkəli/",chinese:"西兰花"},{english:"carrot",phonetic:"/ˈkærət/",chinese:"胡萝卜"},{english:"spinach",phonetic:"/ˈspɪnɪtʃ/",chinese:"菠菜"},{english:"strong",phonetic:"/strɒŋ/",chinese:"强壮的"},{english:"healthy",phonetic:"/ˈhelθi/",chinese:"健康的"}]},{id:"53",title:"Fruits Are Delicious",titleCn:"水果很美味",image:"/images/53水果很美味.png",englishText:`Fruits are not only delicious but also healthy. They are full of vitamins.

Apples are sweet and crunchy. Oranges are juicy and sour. Bananas are soft and sweet.

Mom always puts a fruit in my lunch box. She says an apple a day keeps the doctor away.

I love all kinds of fruits. They are nature's candy!`,chineseText:`水果不仅美味而且健康。它们富含维生素。

苹果又甜又脆。橙子多汁酸甜。香蕉软软的甜甜的。

妈妈总是在我的午餐盒里放一个水果。她说每天一个苹果，医生远离我。

我喜欢各种水果。它们是大自然的糖果！`,vocabularies:[{english:"fruit",phonetic:"/fruːt/",chinese:"水果"},{english:"delicious",phonetic:"/dɪˈlɪʃəs/",chinese:"美味的"},{english:"healthy",phonetic:"/ˈhelθi/",chinese:"健康的"},{english:"apple",phonetic:"/ˈæpl/",chinese:"苹果"},{english:"orange",phonetic:"/ˈɔːrɪndʒ/",chinese:"橙子"},{english:"banana",phonetic:"/bəˈnɑːnə/",chinese:"香蕉"},{english:"lunch",phonetic:"/lʌntʃ/",chinese:"午餐"},{english:"nature",phonetic:"/ˈneɪtʃər/",chinese:"大自然"}]},{id:"54",title:"Drinking Water",titleCn:"喝水",image:"/images/54喝水.png",englishText:`Drinking enough water is very important. Our body needs water to work properly.

I carry a water bottle to school every day. I drink water during breaks and after sports.

Water helps our body stay cool. It also helps us digest food and think clearly.

If you feel thirsty, that means your body already needs water. Drink water before you get thirsty!`,chineseText:`喝足够的水非常重要。我们的身体需要水才能正常工作。

我每天带水瓶去学校。休息时和运动后我会喝水。

水帮助我们的身体保持凉爽。它还帮助我们消化食物和清晰思考。

如果你感到口渴，那意味着你的身体已经需要水了。口渴之前就要喝水！`,vocabularies:[{english:"water",phonetic:"/ˈwɔːtər/",chinese:"水"},{english:"important",phonetic:"/ɪmˈpɔːrtənt/",chinese:"重要的"},{english:"body",phonetic:"/ˈbɒdi/",chinese:"身体"},{english:"thirsty",phonetic:"/ˈθɜːrsti/",chinese:"口渴的"},{english:"sport",phonetic:"/spɔːrt/",chinese:"运动"},{english:"cool",phonetic:"/kuːl/",chinese:"凉爽的"},{english:"digest",phonetic:"/daɪˈdʒest/",chinese:"消化"},{english:"clearly",phonetic:"/ˈklɪərli/",chinese:"清晰地"}]},{id:"55",title:"Exercise Keeps Us Fit",titleCn:"运动让我们健康",image:"/images/55运动让我们健康.png",englishText:`Exercise is important for our body and mind. It keeps us fit and strong.

I run and jump during PE class. I play basketball with my friends after school.

Exercise makes our heart strong. It also helps us sleep better at night.

Playing sports is not only good for health but also fun. Let us move and exercise every day!`,chineseText:`运动对我们的身心都很重要。它让我们保持健康和强壮。

体育课上我跑步跳绳。放学后我和朋友打篮球。

运动让我们的心脏更强壮。它还帮助我们晚上睡得更好。

运动不仅对健康有益，还很有趣。让我们每天动起来！`,vocabularies:[{english:"exercise",phonetic:"/ˈeksərsaɪz/",chinese:"运动"},{english:"fit",phonetic:"/fɪt/",chinese:"健康的"},{english:"strong",phonetic:"/strɒŋ/",chinese:"强壮的"},{english:"run",phonetic:"/rʌn/",chinese:"跑"},{english:"jump",phonetic:"/dʒʌmp/",chinese:"跳"},{english:"basketball",phonetic:"/ˈbæskɪtbɔːl/",chinese:"篮球"},{english:"heart",phonetic:"/hɑːrt/",chinese:"心脏"},{english:"sleep",phonetic:"/sliːp/",chinese:"睡觉"}]},{id:"56",title:"A Good Night's Sleep",titleCn:"良好的睡眠",image:"/images/56良好的睡眠.png",englishText:`Sleep is as important as food and water. Our body and brain need rest.

I go to bed at nine o'clock every night. I read a story before I sleep.

A good night's sleep helps me grow taller. It also helps me remember things better.

When I wake up after eight hours of sleep, I feel refreshed and ready for a new day.`,chineseText:`睡眠和食物水一样重要。我们的身体和大脑需要休息。

我每晚九点上床睡觉。睡前我会读一个故事。

良好的睡眠帮助我长高。它还帮助我更好地记住东西。

当我睡了八个小时后醒来，我感到神清气爽，准备好迎接新的一天。`,vocabularies:[{english:"sleep",phonetic:"/sliːp/",chinese:"睡觉"},{english:"important",phonetic:"/ɪmˈpɔːrtənt/",chinese:"重要的"},{english:"brain",phonetic:"/breɪn/",chinese:"大脑"},{english:"rest",phonetic:"/rest/",chinese:"休息"},{english:"story",phonetic:"/ˈstɔːri/",chinese:"故事"},{english:"grow",phonetic:"/ɡroʊ/",chinese:"生长"},{english:"remember",phonetic:"/rɪˈmembər/",chinese:"记住"},{english:"refreshed",phonetic:"/rɪˈfreʃt/",chinese:"神清气爽的"}]},{id:"57",title:"Wash Your Hands",titleCn:"洗手",image:"/images/57洗手.png",englishText:`Washing hands is one of the best ways to stay healthy. germs are everywhere!

I wash my hands before eating. I also wash them after using the toilet.

I use soap and water. I scrub my hands for at least twenty seconds.

Clean hands help prevent sickness. Everyone should wash their hands often!`,chineseText:`洗手是保持健康最好的方法之一。细菌无处不在！

我饭前洗手。上完厕所后我也洗手。

我用肥皂和水。我搓手至少二十秒。

干净的手帮助预防疾病。每个人都要经常洗手！`,vocabularies:[{english:"wash",phonetic:"/wɒʃ/",chinese:"洗"},{english:"hand",phonetic:"/hænd/",chinese:"手"},{english:"healthy",phonetic:"/ˈhelθi/",chinese:"健康的"},{english:"germ",phonetic:"/dʒɜːrm/",chinese:"细菌"},{english:"soap",phonetic:"/soʊp/",chinese:"肥皂"},{english:"toilet",phonetic:"/ˈtɔɪlət/",chinese:"厕所"},{english:"prevent",phonetic:"/prɪˈvent/",chinese:"预防"},{english:"sickness",phonetic:"/ˈsɪknəs/",chinese:"疾病"}]},{id:"58",title:"At the Doctor's",titleCn:"看医生",image:"/images/58看医生.png",englishText:`Yesterday I did not feel well. I had a fever and a sore throat.

Mom took me to see the doctor. The doctor was kind and gentle.

She checked my temperature and looked at my throat. She said I had a cold.

The doctor gave me some medicine. She told me to rest and drink lots of water. I will get better soon!`,chineseText:`昨天我感觉不舒服。我发烧了，喉咙也疼。

妈妈带我去看医生。医生很和蔼很温柔。

她检查了我的体温，看了看我的喉咙。她说我感冒了。

医生给我开了一些药。她让我休息多喝水。我很快就会好起来的！`,vocabularies:[{english:"doctor",phonetic:"/ˈdɒktər/",chinese:"医生"},{english:"fever",phonetic:"/ˈfiːvər/",chinese:"发烧"},{english:"sore throat",phonetic:"/sɔːr θroʊt/",chinese:"喉咙痛"},{english:"temperature",phonetic:"/ˈtemprətʃər/",chinese:"体温"},{english:"cold",phonetic:"/koʊld/",chinese:"感冒"},{english:"medicine",phonetic:"/ˈmedɪsn/",chinese:"药"},{english:"rest",phonetic:"/rest/",chinese:"休息"},{english:"water",phonetic:"/ˈwɔːtər/",chinese:"水"}]},{id:"59",title:"Staying Safe",titleCn:"保护安全",image:"/images/59保护安全.png",englishText:`Safety first! We must learn to protect ourselves from danger.

I look both ways before crossing the street. I wear a helmet when riding my bike.

I do not talk to strangers. I remember Mom and Dad's phone number.

Being safe means being smart. Let us all stay safe!`,chineseText:`安全第一！我们必须学会保护自己远离危险。

过马路前我左右看。骑自行车时我戴头盔。

我不和陌生人说话。我记住爸爸妈妈的电话号码。

注意安全意味着要聪明。让我们都保护好自己的安全！`,vocabularies:[{english:"safe",phonetic:"/seɪf/",chinese:"安全的"},{english:"safety",phonetic:"/ˈseɪfti/",chinese:"安全"},{english:"danger",phonetic:"/ˈdeɪndʒər/",chinese:"危险"},{english:"street",phonetic:"/striːt/",chinese:"街道"},{english:"helmet",phonetic:"/ˈhelmɪt/",chinese:"头盔"},{english:"stranger",phonetic:"/ˈstreɪndʒər/",chinese:"陌生人"},{english:"phone number",phonetic:"/foʊn ˈnʌmbər/",chinese:"电话号码"},{english:"smart",phonetic:"/smɑːrt/",chinese:"聪明的"}]},{id:"60",title:"Being Healthy",titleCn:"保持健康",image:"/images/60保持健康.png",englishText:`Being healthy means taking care of our body in many ways.

We should eat a balanced diet with vegetables, fruits, and protein. We should exercise regularly.

We need enough sleep every night. We should keep our body clean.

When we are healthy, we can learn better and play happily. Health is the greatest wealth!`,chineseText:`保持健康意味着用很多方式照顾我们的身体。

我们应该吃均衡的饮食，包括蔬菜、水果和蛋白质。我们应该定期运动。

我们每晚需要足够的睡眠。我们应该保持身体清洁。

当我们健康时，我们可以更好地学习开心地玩耍。健康是最大的财富！`,vocabularies:[{english:"healthy",phonetic:"/ˈhelθi/",chinese:"健康的"},{english:"body",phonetic:"/ˈbɒdi/",chinese:"身体"},{english:"balanced diet",phonetic:"/ˈbælənst ˈdaɪət/",chinese:"均衡饮食"},{english:"vegetable",phonetic:"/ˈvedʒtəbl/",chinese:"蔬菜"},{english:"fruit",phonetic:"/fruːt/",chinese:"水果"},{english:"protein",phonetic:"/ˈproʊtiːn/",chinese:"蛋白质"},{english:"exercise",phonetic:"/ˈeksərsaɪz/",chinese:"运动"},{english:"wealth",phonetic:"/welθ/",chinese:"财富"}]},{id:"61",title:"My Hobby: Drawing",titleCn:"我的爱好：画画",image:"/images/61我的爱好画画.png",englishText:`Drawing is my favorite hobby. I like to draw pictures with pencils and crayons.

I draw the things I see around me. I also draw things from my imagination.

Sometimes I draw my family. Sometimes I draw animals and flowers.

When I draw, I feel happy and peaceful. Drawing lets me express my feelings.`,chineseText:`画画是我最喜欢的爱好。我喜欢用铅笔和蜡笔画画。

我画我周围看到的东西。我也画我想象的事物。

有时候我画我的家人。有时候我画动物和花。

当我画画时，我感到快乐和平静。画画让我表达我的情感。`,vocabularies:[{english:"hobby",phonetic:"/ˈhɒbi/",chinese:"爱好"},{english:"draw",phonetic:"/drɔː/",chinese:"画"},{english:"pencil",phonetic:"/ˈpensl/",chinese:"铅笔"},{english:"crayon",phonetic:"/ˈkreɪən/",chinese:"蜡笔"},{english:"imagination",phonetic:"/ɪˌmædʒɪˈneɪʃn/",chinese:"想象力"},{english:"family",phonetic:"/ˈfæməli/",chinese:"家人"},{english:"animal",phonetic:"/ˈænɪml/",chinese:"动物"},{english:"peaceful",phonetic:"/ˈpiːsfl/",chinese:"平静的"},{english:"express",phonetic:"/ɪkˈspres/",chinese:"表达"}]},{id:"62",title:"Learning to Swim",titleCn:"学游泳",image:"/images/62学游泳.png",englishText:`Last summer, I learned to swim. At first, I was a little scared of the water.

My dad taught me. He held me in the water and showed me how to move my arms and legs.

After many practices, I could float by myself. Now I can swim across the pool!

Swimming is great exercise. I love splashing in the water on hot days.`,chineseText:`去年夏天，我学了游泳。起初，我对水有点害怕。

爸爸教我。他托着我在水里，教我如何挥动手臂和腿。

经过多次练习，我可以自己浮起来了。现在我可以游过泳池了！

游泳是很棒的运动。我喜欢在热天在水里溅水玩。`,vocabularies:[{english:"swim",phonetic:"/swɪm/",chinese:"游泳"},{english:"summer",phonetic:"/ˈsʌmər/",chinese:"夏天"},{english:"scared",phonetic:"/skerd/",chinese:"害怕的"},{english:"water",phonetic:"/ˈwɔːtər/",chinese:"水"},{english:"practice",phonetic:"/ˈpræktɪs/",chinese:"练习"},{english:"float",phonetic:"/floʊt/",chinese:"漂浮"},{english:"pool",phonetic:"/puːl/",chinese:"泳池"},{english:"exercise",phonetic:"/ˈeksərsaɪz/",chinese:"运动"}]},{id:"63",title:"Playing the Piano",titleCn:"弹钢琴",image:"/images/63弹钢琴.png",englishText:`I started learning piano when I was five years old. It was not easy at first.

I had to practice every day. My fingers had to learn to move in special ways.

Now I can play many songs. I play happy songs when my family is together.

Music makes all of us happy. Playing piano is difficult but rewarding!`,chineseText:`我五岁开始学钢琴。起初这并不容易。

我必须每天练习。我的手指要学会用特殊的方式移动。

现在我会弹很多歌曲了。当家人在一起时，我弹欢乐的歌曲。

音乐让我们所有人都快乐。弹钢琴虽然困难但很有成就感！`,vocabularies:[{english:"piano",phonetic:"/piˈænoʊ/",chinese:"钢琴"},{english:"learn",phonetic:"/lɜːrn/",chinese:"学习"},{english:"practice",phonetic:"/ˈpræktɪs/",chinese:"练习"},{english:"finger",phonetic:"/ˈfɪŋɡər/",chinese:"手指"},{english:"song",phonetic:"/sɒŋ/",chinese:"歌曲"},{english:"family",phonetic:"/ˈfæməli/",chinese:"家人"},{english:"music",phonetic:"/ˈmjuːzɪk/",chinese:"音乐"},{english:"rewarding",phonetic:"/rɪˈwɔːrdɪŋ/",chinese:"有成就感的"}]},{id:"64",title:"Reading Books",titleCn:"读书",image:"/images/64读书.png",englishText:`I love reading books. Books take me to magical worlds full of adventures.

I read fairy tales about princes and princesses. I also read stories about animals.

Books teach me new words and ideas. They help me learn about different people and places.

A good book is like a good friend. The more I read, the more I want to read!`,chineseText:`我喜欢读书。书带我进入充满冒险的神奇世界。

我读关于王子公主的童话故事。我也读关于动物的故事。

书教我新单词和新思想。它们帮助我了解不同的人和文化。

一本好书就像一个好朋友。我读得越多，就越想读！`,vocabularies:[{english:"read",phonetic:"/riːd/",chinese:"读"},{english:"book",phonetic:"/bʊk/",chinese:"书"},{english:"adventure",phonetic:"/ədˈventʃər/",chinese:"冒险"},{english:"fairy tale",phonetic:"/ˈferi teɪl/",chinese:"童话"},{english:"prince",phonetic:"/prɪns/",chinese:"王子"},{english:"princess",phonetic:"/ˌprɪnˈses/",chinese:"公主"},{english:"word",phonetic:"/wɜːrd/",chinese:"单词"},{english:"friend",phonetic:"/frend/",chinese:"朋友"}]},{id:"65",title:"Playing with Friends",titleCn:"和朋友玩",image:"/images/65和朋友玩.png",englishText:`Playing with friends is the most fun part of my day. We play different games together.

We play hide and seek in the park. We also play tag and jump rope.

Sometimes we build sandcastles at the beach. Sometimes we ride bikes together.

Friends make our lives happier. I am lucky to have such wonderful friends!`,chineseText:`和朋友玩是我一天中最开心的时光。我们一起玩不同的游戏。

我们在公园玩捉迷藏。我们也玩抓人游戏和跳绳。

有时候我们在海滩堆沙堡。有时候我们一起骑自行车。

朋友让我们的生活更快乐。我很幸运有这么多好朋友！`,vocabularies:[{english:"friend",phonetic:"/frend/",chinese:"朋友"},{english:"play",phonetic:"/pleɪ/",chinese:"玩"},{english:"game",phonetic:"/ɡeɪm/",chinese:"游戏"},{english:"hide and seek",phonetic:"/haɪd ænd siːk/",chinese:"捉迷藏"},{english:"tag",phonetic:"/tæɡ/",chinese:"抓人游戏"},{english:"jump rope",phonetic:"/dʒʌmp roʊp/",chinese:"跳绳"},{english:"beach",phonetic:"/biːtʃ/",chinese:"海滩"},{english:"bike",phonetic:"/baɪk/",chinese:"自行车"}]},{id:"66",title:"Growing Flowers",titleCn:"种花",image:"/images/66种花.png",englishText:`In spring, I help Grandma plant flowers in the garden. It is hard but fun work.

We dig holes in the soil and put the seeds in. We water them every day.

After some weeks, small green shoots appear. It is exciting to watch them grow!

Finally, beautiful flowers bloom. Flowers make our garden look like a colorful rainbow.`,chineseText:`春天，我帮奶奶在花园里种花。这是辛苦但有趣的工作。

我们在土里挖洞，把种子放进去。我们每天浇水。

几周后，绿色的小芽冒出来了。看着它们生长真令人兴奋！

最后，美丽的花朵开放了。花朵让我们的花园看起来像一道彩色的彩虹。`,vocabularies:[{english:"flower",phonetic:"/ˈflaʊər/",chinese:"花"},{english:"spring",phonetic:"/sprɪŋ/",chinese:"春天"},{english:"garden",phonetic:"/ˈɡɑːrdn/",chinese:"花园"},{english:"plant",phonetic:"/plænt/",chinese:"种植"},{english:"seed",phonetic:"/siːd/",chinese:"种子"},{english:"soil",phonetic:"/sɔɪl/",chinese:"土壤"},{english:"water",phonetic:"/ˈwɔːtər/",chinese:"浇水"},{english:"bloom",phonetic:"/bluːm/",chinese:"开花"}]},{id:"67",title:"Collecting Stamps",titleCn:"集邮",image:"/images/67集邮.png",englishText:`My dad collects stamps. He has albums full of beautiful stamps from different countries.

Each stamp tells a story about a place or an event. Some stamps are very old and valuable.

Dad showed me how to handle stamps carefully. We use tweezers to pick them up.

Now I have my own small collection. Collecting stamps is like traveling the world without leaving home!`,chineseText:`我爸爸收集邮票。他有满相册的来自不同国家的漂亮邮票。

每张邮票都讲述着一个关于某个地方或事件的故事。有些邮票非常古老珍贵。

爸爸教我如何小心地拿邮票。我们用镊子夹起它们。

现在我有自己的小收藏了。集邮就像不出家门游遍世界！`,vocabularies:[{english:"stamp",phonetic:"/stæmp/",chinese:"邮票"},{english:"collect",phonetic:"/kəˈlekt/",chinese:"收集"},{english:"album",phonetic:"/ˈælbəm/",chinese:"相册"},{english:"country",phonetic:"/ˈkʌntri/",chinese:"国家"},{english:"story",phonetic:"/ˈstɔːri/",chinese:"故事"},{english:"place",phonetic:"/pleɪs/",chinese:"地方"},{english:"valuable",phonetic:"/ˈvæljuəbl/",chinese:"珍贵的"},{english:"travel",phonetic:"/ˈtrævl/",chinese:"旅行"}]},{id:"68",title:"Watching Cartoons",titleCn:"看动画片",image:"/images/68看动画片.png",englishText:`After finishing my homework, sometimes I watch cartoons on TV. It is my favorite way to relax.

I like cartoons about funny animals and brave heroes. They make me laugh and dream.

But I always remember to limit my screen time. Too much TV is not good for my eyes or my brain.

Watching good cartoons in moderation is a nice reward after studying hard!`,chineseText:`完成作业后，有时候我看电视上的动画片。这是我最喜欢的放松方式。

我喜欢关于有趣动物和勇敢英雄的动画片。它们让我笑让我做梦。

但我总是记得要限制屏幕时间。太看电视对眼睛和大脑都不好。

在学习努力之后适度看好动画片是对自己的奖励！`,vocabularies:[{english:"cartoon",phonetic:"/kɑːrˈtuːn/",chinese:"动画片"},{english:"homework",phonetic:"/ˈhoʊmwɜːrk/",chinese:"作业"},{english:"relax",phonetic:"/rɪˈlæks/",chinese:"放松"},{english:"funny",phonetic:"/ˈfʌni/",chinese:"有趣的"},{english:"hero",phonetic:"/ˈhɪroʊ/",chinese:"英雄"},{english:"dream",phonetic:"/driːm/",chinese:"做梦"},{english:"screen time",phonetic:"/skriːn taɪm/",chinese:"屏幕时间"},{english:"reward",phonetic:"/rɪˈwɔːrd/",chinese:"奖励"}]},{id:"69",title:"Playing Chess",titleCn:"下棋",image:"/images/69下棋.png",englishText:`My grandpa taught me to play chess. It is a game of thinking and planning.

Each chess piece moves in a different way. The king is the most important piece.

When I play chess, I have to think about my opponent's moves. I need to plan ahead.

Chess makes my brain sharper. Winning feels great, but even losing teaches me something!`,chineseText:`我爷爷教我下棋。这是一个思考和计划的游戏。

每个棋子的走法都不一样。王是最重要的棋子。

下棋时，我必须考虑对手的走法。我需要提前计划。

下棋让我的大脑更敏锐。赢的感觉很棒，但即使输了也能让我学到东西！`,vocabularies:[{english:"chess",phonetic:"/tʃes/",chinese:"棋"},{english:"grandpa",phonetic:"/ˈɡrænpɑː/",chinese:"爷爷"},{english:"game",phonetic:"/ɡeɪm/",chinese:"游戏"},{english:"think",phonetic:"/θɪŋk/",chinese:"思考"},{english:"plan",phonetic:"/plæn/",chinese:"计划"},{english:"opponent",phonetic:"/əˈpoʊnənt/",chinese:"对手"},{english:"brain",phonetic:"/breɪn/",chinese:"大脑"},{english:"win",phonetic:"/wɪn/",chinese:"赢"}]},{id:"70",title:"Singing Songs",titleCn:"唱歌",image:"/images/70唱歌.png",englishText:`I love to sing songs. Singing makes my heart feel light and happy.

I learned many English songs at school. I also know some Chinese songs from my grandma.

Sometimes I sing while I walk to school. Sometimes I sing in the shower.

Singing is good for my mood and my lungs. Let us all sing and spread joy!`,chineseText:`我喜欢唱歌。唱歌让我的心情轻松快乐。

我在学校学了很多英语歌曲。我也从奶奶那里学到一些中文歌。

有时候我走路去学校时唱歌。有时候我洗澡时唱歌。

唱歌对我的心情和肺都有好处。让我们都唱歌传播快乐！`,vocabularies:[{english:"sing",phonetic:"/sɪŋ/",chinese:"唱"},{english:"song",phonetic:"/sɒŋ/",chinese:"歌曲"},{english:"heart",phonetic:"/hɑːrt/",chinese:"心脏"},{english:"happy",phonetic:"/ˈhæpi/",chinese:"开心的"},{english:"English",phonetic:"/ˈɪŋɡlɪʃ/",chinese:"英语"},{english:"Chinese",phonetic:"/tʃaɪˈniːz/",chinese:"中文"},{english:"shower",phonetic:"/ˈʃaʊər/",chinese:"淋浴"},{english:"mood",phonetic:"/muːd/",chinese:"心情"}]},{id:"71",title:"Chinese New Year",titleCn:"春节",image:"/images/71春节.png",englishText:`Chinese New Year is the most important festival in China. It usually falls in January or February.

Before New Year, we clean our house and decorate it with red things. Red means good luck.

On New Year's Eve, the whole family eats dumplings together. We stay up to welcome the new year.

On New Year's Day, we wear new clothes and visit relatives. We say happy new year to each other!`,chineseText:`春节是中国最重要的节日。它通常在一月或二月。

新年之前，我们打扫房子，用红色的东西装饰。红色意味着好运。

除夕夜，全家人一起吃饺子。我们熬夜迎接新年。

新年第一天，我们穿新衣服走亲访友。我们互相说新年快乐！`,vocabularies:[{english:"Chinese New Year",phonetic:"/ˌtʃaɪˈniːz njuː jɪr/",chinese:"春节"},{english:"festival",phonetic:"/ˈfestɪvl/",chinese:"节日"},{english:"clean",phonetic:"/kliːn/",chinese:"打扫"},{english:"decorate",phonetic:"/ˈdekəreɪt/",chinese:"装饰"},{english:"red",phonetic:"/red/",chinese:"红色"},{english:"dumpling",phonetic:"/ˈdʌmplɪŋ/",chinese:"饺子"},{english:"relative",phonetic:"/ˈrelətɪv/",chinese:"亲戚"},{english:"new year",phonetic:"/njuː jɪr/",chinese:"新年"}]},{id:"72",title:"Mid-Autumn Festival",titleCn:"中秋节",image:"/images/72中秋节.png",englishText:`Mid-Autumn Festival is a special time for family reunions. It is usually in September or October.

The moon looks the biggest and roundest on this night. We eat moon cakes and appreciate the moon.

Moon cakes are round like the full moon. They have different flavors like lotus seed paste and red bean.

Looking at the round moon with my family makes me feel warm inside. Family love is like the full moon!`,chineseText:`中秋节是家庭团聚的特殊时刻。它通常在九月或十月。

这一晚月亮看起来最大最圆。我们吃月饼赏月。

月饼像满月一样圆。它们有不同口味，如莲蓉和红豆。

和家人一起赏月让我内心感到温暖。家人的爱就像满月一样！`,vocabularies:[{english:"Mid-Autumn Festival",phonetic:"/mɪd ˈɔːftərn ˈfestɪvl/",chinese:"中秋节"},{english:"family reunion",phonetic:"/ˈfæməli ˌriːˈjuːniən/",chinese:"家庭团聚"},{english:"moon",phonetic:"/muːn/",chinese:"月亮"},{english:"moon cake",phonetic:"/muːn keɪk/",chinese:"月饼"},{english:"appreciate",phonetic:"/əˈpriːʃieɪt/",chinese:"欣赏"},{english:"flavor",phonetic:"/ˈfleɪvər/",chinese:"口味"},{english:"warm",phonetic:"/wɔːrm/",chinese:"温暖的"}]},{id:"73",title:"Children's Day",titleCn:"儿童节",image:"/images/73儿童节.png",englishText:`Children's Day is on June first. It is a special day just for children!

On this day, schools organize fun activities. We play games and win prizes.

Sometimes parents give children gifts. Some families go to the zoo or amusement parks.

Children bring so much joy to the world. Every child deserves to be happy on this day!`,chineseText:`儿童节在六月一日。这是专属于儿童的特别日子！

这一天，学校组织有趣的活动。我们玩游戏赢奖品。

有时候父母给孩子礼物。有些家庭去动物园或游乐场。

儿童给世界带来这么多欢乐。每个孩子在这一天都应该快乐！`,vocabularies:[{english:"Children's Day",phonetic:"/ˈtʃɪldrənz deɪ/",chinese:"儿童节"},{english:"June",phonetic:"/dʒuːn/",chinese:"六月"},{english:"child",phonetic:"/tʃaɪld/",chinese:"儿童"},{english:"activity",phonetic:"/ækˈtɪvəti/",chinese:"活动"},{english:"game",phonetic:"/ɡeɪm/",chinese:"游戏"},{english:"gift",phonetic:"/ɡɪft/",chinese:"礼物"},{english:"zoo",phonetic:"/zuː/",chinese:"动物园"},{english:"joy",phonetic:"/dʒɔɪ/",chinese:"欢乐"}]},{id:"74",title:"Christmas",titleCn:"圣诞节",image:"/images/74圣诞节.png",englishText:`Christmas is on December twenty-fifth. It is a special holiday in many countries.

We decorate Christmas trees with colorful lights and ornaments. It looks so beautiful!

We also give gifts to each other. Santa Claus brings presents to good children.

Christmas is about sharing love and happiness with family and friends. Peace and joy to all!`,chineseText:`圣诞节在十二月二十五日。这是很多国家的特别节日。

我们用彩灯和装饰品装饰圣诞树。它看起来真美！

我们也互相送礼物。圣诞老人给好孩子送礼物。

圣诞节是关于与家人朋友分享爱和快乐。祝所有人平安喜乐！`,vocabularies:[{english:"Christmas",phonetic:"/ˈkrɪsməs/",chinese:"圣诞节"},{english:"December",phonetic:"/dɪˈsembər/",chinese:"十二月"},{english:"decorate",phonetic:"/ˈdekəreɪt/",chinese:"装饰"},{english:"Christmas tree",phonetic:"/ˈkrɪsməs triː/",chinese:"圣诞树"},{english:"light",phonetic:"/laɪt/",chinese:"灯"},{english:"gift",phonetic:"/ɡɪft/",chinese:"礼物"},{english:"Santa Claus",phonetic:"/ˈsæntə klɔːz/",chinese:"圣诞老人"},{english:"peace",phonetic:"/piːs/",chinese:"平安"}]},{id:"75",title:"My Birthday Party",titleCn:"我的生日派对",image:"/images/75我的生日派对.png",englishText:`Last Saturday was my birthday. Mom and Dad threw a party for me at home.

I invited my close friends. They came with presents and happy smiles.

We played games and ate birthday cake. There were balloons and decorations everywhere.

We sang the birthday song and I made a wish. Then I blew out the candles. It was a wonderful day!`,chineseText:`上星期六是我的生日。妈妈和爸爸在家里为我举办了一个派对。

我邀请了我的好朋友。他们带着礼物和开心的笑容来了。

我们玩游戏吃生日蛋糕。到处是气球和装饰品。

我们唱生日歌，我许了个愿。然后我吹灭了蜡烛。这是美好的一天！`,vocabularies:[{english:"birthday",phonetic:"/ˈbɜːrθdeɪ/",chinese:"生日"},{english:"party",phonetic:"/ˈpɑːrti/",chinese:"派对"},{english:"friend",phonetic:"/frend/",chinese:"朋友"},{english:"present",phonetic:"/ˈpreznt/",chinese:"礼物"},{english:"cake",phonetic:"/keɪk/",chinese:"蛋糕"},{english:"balloon",phonetic:"/bəˈluːn/",chinese:"气球"},{english:"wish",phonetic:"/wɪʃ/",chinese:"愿望"},{english:"candle",phonetic:"/ˈkændl/",chinese:"蜡烛"}]},{id:"76",title:"A Trip to the Beach",titleCn:"去海滩旅行",image:"/images/76去海滩旅行.png",englishText:`During summer vacation, our family went to the beach. It was so exciting!

The beach had soft sand and blue water. I built a big sandcastle with my brother.

We swam in the sea and played with the waves. The water was cool and refreshing.

We collected beautiful shells and watched the sunset. It was a perfect family trip!`,chineseText:`暑假期间，我们全家去海滩了。真是太兴奋了！

海滩有柔软的沙子和蓝色的海水。我和弟弟堆了一个大沙堡。

我们在海里游泳，和海浪玩耍。水凉爽又清新。

我们收集了漂亮的贝壳，看日落。这是一次完美的家庭旅行！`,vocabularies:[{english:"beach",phonetic:"/biːtʃ/",chinese:"海滩"},{english:"summer vacation",phonetic:"/ˈsʌmər veɪˈkeɪʃn/",chinese:"暑假"},{english:"sand",phonetic:"/sænd/",chinese:"沙子"},{english:"sandcastle",phonetic:"/ˈsændkæsl/",chinese:"沙堡"},{english:"sea",phonetic:"/siː/",chinese:"海"},{english:"wave",phonetic:"/weɪv/",chinese:"海浪"},{english:"shell",phonetic:"/ʃel/",chinese:"贝壳"},{english:"sunset",phonetic:"/ˈsʌnset/",chinese:"日落"}]},{id:"77",title:"A Picnic in the Park",titleCn:"在公园野餐",image:"/images/77在公园野餐.png",englishText:`What a beautiful day for a picnic! Mom prepared delicious food for us.

We laid a blanket under a big tree. Dad brought sandwiches, fruits, and juice.

We ate delicious food in the fresh air. A gentle breeze made us feel cool and comfortable.

After eating, we played frisbee and lay on the grass watching the clouds. Life is beautiful!`,chineseText:`多好的野餐天气啊！妈妈为我们准备了美味的食物。

我们在一棵大树下铺了一块毯子。爸爸带来了三明治、水果和果汁。

我们在新鲜的空气里吃美味的食物。微风让我们感到凉爽舒适。

吃完后，我们玩飞盘，躺在草地上看云朵。生活真美好！`,vocabularies:[{english:"picnic",phonetic:"/ˈpɪknɪk/",chinese:"野餐"},{english:"park",phonetic:"/pɑːrk/",chinese:"公园"},{english:"blanket",phonetic:"/ˈblæŋkɪt/",chinese:"毯子"},{english:"sandwich",phonetic:"/ˈsændwɪtʃ/",chinese:"三明治"},{english:"fruit",phonetic:"/fruːt/",chinese:"水果"},{english:"juice",phonetic:"/dʒuːs/",chinese:"果汁"},{english:"frisbee",phonetic:"/ˈfrɪzbi/",chinese:"飞盘"},{english:"cloud",phonetic:"/klaʊd/",chinese:"云"}]},{id:"78",title:"First Day of School",titleCn:"上学的第一天",image:"/images/78上学的第一天.png",englishText:`Today was my first day at a new school. I felt nervous and excited at the same time.

Mom walked me to my classroom. The teacher welcomed us with a warm smile.

I met many new classmates. Some of them were shy like me, but we smiled at each other.

By the end of the day, I made two new friends. I am not nervous anymore about school!`,chineseText:`今天是我在新学校的第一天。我既紧张又兴奋。

妈妈带我走到教室。老师用温暖的笑容迎接我们。

我见到了很多新同学。他们中有些和我一样害羞，但我们互相微笑。

一天结束时，我交了两个新朋友。我不再对学校感到紧张了！`,vocabularies:[{english:"first day",phonetic:"/fɜːrst deɪ/",chinese:"第一天"},{english:"school",phonetic:"/skuːl/",chinese:"学校"},{english:"nervous",phonetic:"/ˈnɜːrvəs/",chinese:"紧张的"},{english:"excited",phonetic:"/ɪkˈsaɪtɪd/",chinese:"兴奋的"},{english:"classroom",phonetic:"/ˈklæsrʊm/",chinese:"教室"},{english:"teacher",phonetic:"/ˈtiːtʃər/",chinese:"老师"},{english:"classmate",phonetic:"/ˈklæsmeɪt/",chinese:"同学"},{english:"friend",phonetic:"/frend/",chinese:"朋友"}]},{id:"79",title:"Sports Day",titleCn:"运动会",image:"/images/79运动会.png",englishText:`Our school held a sports day last Friday. All students were very excited.

There were running races, long jump, and relay races. Everyone cheered for their classmates.

I joined the running race. I ran as fast as I could. I did not win, but I tried my best.

Sports day taught me that participating is more important than winning. Exercise brings happiness!`,chineseText:`上周五我们学校举办了运动会。所有学生都非常兴奋。

有跑步比赛、跳远和接力赛。每个人都为同学加油。

我参加了跑步比赛。我尽可能跑得最快。我没赢，但我尽了全力。

运动会教会我参与比获胜更重要。运动带来快乐！`,vocabularies:[{english:"sports day",phonetic:"/spɔːrts deɪ/",chinese:"运动会"},{english:"race",phonetic:"/reɪs/",chinese:"比赛"},{english:"long jump",phonetic:"/lɒŋ dʒʌmp/",chinese:"跳远"},{english:"relay",phonetic:"/ˈriːleɪ/",chinese:"接力"},{english:"cheer",phonetic:"/tʃɪr/",chinese:"加油"},{english:"classmate",phonetic:"/ˈklæsmeɪt/",chinese:"同学"},{english:"participate",phonetic:"/pɑːrˈtɪsɪpeɪt/",chinese:"参与"},{english:"exercise",phonetic:"/ˈeksərsaɪz/",chinese:"运动"}]},{id:"80",title:"A Rainy Day",titleCn:"下雨天",image:"/images/80下雨天.png",englishText:`It rained heavily this morning. Dark clouds covered the sky and it thundered.

I carried my umbrella to school. My raincoat kept me dry. I wore my waterproof boots.

Some children played in the puddles. Water splashed everywhere and they laughed happily.

After school, the rain stopped. A beautiful rainbow appeared. Rainy days have their own beauty!`,chineseText:`今天早上下大雨了。乌云遮住了天空，还打雷了。

我撑着伞去学校。我的雨衣让我保持干爽。我穿着防水靴。

有些孩子在水坑里玩。水溅得到处都是，他们开心地笑着。

放学后，雨停了。美丽的彩虹出现了。雨天的美！`,vocabularies:[{english:"rain",phonetic:"/reɪn/",chinese:"雨"},{english:"cloud",phonetic:"/klaʊd/",chinese:"云"},{english:"thunder",phonetic:"/ˈθʌndər/",chinese:"打雷"},{english:"umbrella",phonetic:"/ʌmˈbrelə/",chinese:"雨伞"},{english:"raincoat",phonetic:"/ˈreɪnkoʊt/",chinese:"雨衣"},{english:"puddle",phonetic:"/ˈpʌdl/",chinese:"水坑"},{english:"rainbow",phonetic:"/ˈreɪnboʊ/",chinese:"彩虹"},{english:"beauty",phonetic:"/ˈbjuːti/",chinese:"美"}]}],Tg=[{id:"81",title:"What I Want to Be",titleCn:"我想成为什么",image:"/images/81我想成为什么.png",englishText:`When I grow up, I want to be a doctor. Doctors help people who are sick.

I will wear a white coat and help patients feel better. I will work in a clean hospital.

I will study very hard to learn medicine. I want to help children stay healthy.

Being a doctor is a big responsibility, but I am ready to work hard for it!`,chineseText:`长大后，我想当一名医生。医生帮助生病的人。

我会穿上白大褂，帮助病人感觉好起来。我会在干净的医院工作。

我会非常努力地学习医学。我想帮助孩子们保持健康。

当医生是一份重大的责任，但我已经准备好为此努力了！`,vocabularies:[{english:"doctor",phonetic:"/ˈdɒktər/",chinese:"医生"},{english:"sick",phonetic:"/sɪk/",chinese:"生病的"},{english:"hospital",phonetic:"/ˈhɒspɪtl/",chinese:"医院"},{english:"medicine",phonetic:"/ˈmedɪsn/",chinese:"医学"},{english:"healthy",phonetic:"/ˈhelθi/",chinese:"健康的"},{english:"responsibility",phonetic:"/rɪˌspɒnsəˈbɪləti/",chinese:"责任"},{english:"work",phonetic:"/wɜːrk/",chinese:"工作"},{english:"hard",phonetic:"/hɑːrd/",chinese:"努力的"}]},{id:"82",title:"I Want to Be a Scientist",titleCn:"我想成为科学家",image:"/images/82我想成为科学家.png",englishText:`I want to be a scientist when I grow up. Scientists discover new things about the world.

I will work in a laboratory. I will do experiments and make discoveries.

Maybe I will discover a new medicine or invent a useful robot. Who knows what I might find?

Science is all about asking questions and finding answers. I love learning new things!`,chineseText:`我长大后想成为科学家。科学家发现世界上新的事物。

我会在实验室工作。我会做实验和发现新东西。

也许我会发现新药或发明有用的机器人。谁知道我会发现什么呢？

科学就是提出问题并找到答案。我喜欢学习新事物！`,vocabularies:[{english:"scientist",phonetic:"/ˈsaɪəntɪst/",chinese:"科学家"},{english:"discover",phonetic:"/dɪˈskʌvər/",chinese:"发现"},{english:"world",phonetic:"/wɜːrld/",chinese:"世界"},{english:"laboratory",phonetic:"/ˈlæbrətɔːri/",chinese:"实验室"},{english:"experiment",phonetic:"/ɪkˈsperɪmənt/",chinese:"实验"},{english:"medicine",phonetic:"/ˈmedɪsn/",chinese:"药"},{english:"robot",phonetic:"/ˈroʊbɒt/",chinese:"机器人"},{english:"science",phonetic:"/ˈsaɪəns/",chinese:"科学"}]},{id:"83",title:"I Want to Be a Pilot",titleCn:"我想成为飞行员",image:"/images/83我想成为飞行员.png",englishText:`My dream is to become a pilot. Pilots fly airplanes in the sky.

When I am a pilot, I will wear a cool uniform and a cap. I will travel to different countries.

I will learn how to fly an airplane carefully. Safety is the most important thing for pilots.

I cannot wait to sit in the cockpit and fly above the clouds someday!`,chineseText:`我的梦想是成为一名飞行员。飞行员在天上开飞机。

当我成为飞行员时，我会穿上酷酷的制服和帽子。我将旅行到不同的国家。

我会学习如何小心地驾驶飞机。安全对飞行员来说最重要。

我等不及有一天坐在驾驶舱里，飞翔在云层之上了！`,vocabularies:[{english:"pilot",phonetic:"/ˈpaɪlət/",chinese:"飞行员"},{english:"dream",phonetic:"/driːm/",chinese:"梦想"},{english:"fly",phonetic:"/flaɪ/",chinese:"飞"},{english:"airplane",phonetic:"/ˈerpleɪn/",chinese:"飞机"},{english:"uniform",phonetic:"/ˈjuːnɪfɔːrm/",chinese:"制服"},{english:"country",phonetic:"/ˈkʌntri/",chinese:"国家"},{english:"safety",phonetic:"/ˈseɪfti/",chinese:"安全"},{english:"cockpit",phonetic:"/ˈkɒkpɪt/",chinese:"驾驶舱"}]},{id:"84",title:"I Want to Be a Chef",titleCn:"我想成为厨师",image:"/images/84我想成为厨师.png",englishText:`I love food and I want to be a chef. Chefs cook delicious meals for people.

I will work in a big kitchen. I will learn to make all kinds of dishes from around the world.

Some dishes will be spicy, some will be sweet. I will make food that makes people happy.

Being a chef means making people smile through food. That is my goal!`,chineseText:`我喜欢食物，我想成为厨师。厨师为人们烹饪美味的饭菜。

我会在大厨房工作。我将学习制作来自世界各地的各种菜肴。

有些菜会是辣的，有些会是甜的。我会做让人们开心的食物。

当厨师意味着通过食物让人们微笑。那就是我的目标！`,vocabularies:[{english:"chef",phonetic:"/ʃef/",chinese:"厨师"},{english:"cook",phonetic:"/kʊk/",chinese:"烹饪"},{english:"kitchen",phonetic:"/ˈkɪtʃɪn/",chinese:"厨房"},{english:"dish",phonetic:"/dɪʃ/",chinese:"菜肴"},{english:"spicy",phonetic:"/ˈspaɪsi/",chinese:"辣的"},{english:"sweet",phonetic:"/swiːt/",chinese:"甜的"},{english:"happy",phonetic:"/ˈhæpi/",chinese:"开心的"},{english:"goal",phonetic:"/ɡoʊl/",chinese:"目标"}]},{id:"85",title:"I Want to Be a Teacher",titleCn:"我想成为老师",image:"/images/85我想成为老师.png",englishText:`I want to be a teacher when I am older. Teachers help children learn new things.

I will have my own classroom. I will teach subjects like Chinese, Math, and English.

I will be patient with my students. I will make learning fun with games and activities.

Teachers shape the future by helping children grow. That is why I want to be a teacher!`,chineseText:`长大后我想当老师。老师帮助孩子们学习新事物。

我会有自己的教室。我会教语文、数学和英语等科目。

我会对学生有耐心。我会用游戏和活动让学习变得有趣。

老师通过帮助孩子成长塑造未来。这就是我想当老师的原因！`,vocabularies:[{english:"teacher",phonetic:"/ˈtiːtʃər/",chinese:"老师"},{english:"student",phonetic:"/ˈstjuːdnt/",chinese:"学生"},{english:"classroom",phonetic:"/ˈklæsrʊm/",chinese:"教室"},{english:"patient",phonetic:"/ˈpeɪʃnt/",chinese:"耐心的"},{english:"learn",phonetic:"/lɜːrn/",chinese:"学习"},{english:"fun",phonetic:"/fʌn/",chinese:"有趣的"},{english:"future",phonetic:"/ˈfjuːtʃər/",chinese:"未来"},{english:"grow",phonetic:"/ɡroʊ/",chinese:"成长"}]},{id:"86",title:"I Want to Be an Artist",titleCn:"我想成为艺术家",image:"/images/86我想成为艺术家.png",englishText:`I love to draw and paint. I want to be an artist when I grow up.

Artists create beautiful things. They express their feelings through colors and shapes.

I will paint pictures of nature, people, and places. Maybe I will become famous one day!

Art makes the world more beautiful. I want to share my art with everyone!`,chineseText:`我喜欢画画。我长大后想成为艺术家。

艺术家创作美丽的东西。他们通过色彩和形状表达情感。

我会画大自然、人物和风景。也许有一天我会成名！

艺术让世界更美丽。我想和每个人分享我的艺术！`,vocabularies:[{english:"artist",phonetic:"/ˈɑːrtɪst/",chinese:"艺术家"},{english:"draw",phonetic:"/drɔː/",chinese:"画"},{english:"paint",phonetic:"/peɪnt/",chinese:"画"},{english:"create",phonetic:"/kriˈeɪt/",chinese:"创作"},{english:"beautiful",phonetic:"/ˈbjuːtɪfl/",chinese:"美丽的"},{english:"nature",phonetic:"/ˈneɪtʃər/",chinese:"大自然"},{english:"famous",phonetic:"/ˈfeɪməs/",chinese:"著名的"},{english:"art",phonetic:"/ɑːrt/",chinese:"艺术"}]},{id:"87",title:"I Want to Be a Writer",titleCn:"我想成为作家",image:"/images/87我想成为作家.png",englishText:`I enjoy writing stories. I want to be a writer when I grow up.

Writers create magical worlds with words. They write books that people love to read.

I will write stories about adventures, friendship, and kindness. Maybe my books will be in every library!

Words have the power to change the world. I want to write stories that inspire people!`,chineseText:`我喜欢写故事。我长大后想成为作家。

作家用文字创造神奇的世界。他们写人们喜欢读的书。

我会写关于冒险、友谊和善良的故事。也许我的书会在每个图书馆里！

文字有改变世界的力量。我想写激励人们的书！`,vocabularies:[{english:"writer",phonetic:"/ˈraɪtər/",chinese:"作家"},{english:"story",phonetic:"/ˈstɔːri/",chinese:"故事"},{english:"adventure",phonetic:"/ədˈventʃər/",chinese:"冒险"},{english:"friendship",phonetic:"/ˈfrendʃɪp/",chinese:"友谊"},{english:"kindness",phonetic:"/ˈkaɪndnəs/",chinese:"善良"},{english:"library",phonetic:"/ˈlaɪbreri/",chinese:"图书馆"},{english:"word",phonetic:"/wɜːrd/",chinese:"文字"},{english:"inspire",phonetic:"/ɪnˈspaɪər/",chinese:"激励"}]},{id:"88",title:"I Want to Be a Firefighter",titleCn:"我想成为消防员",image:"/images/88我想成为消防员.png",englishText:`Firefighters are heroes who help keep us safe. I want to be one someday.

When there is a fire, firefighters rush to the scene. They put out fires and save people.

They also help during floods and accidents. Firefighters are brave and strong.

I will train hard to become a firefighter. I want to help people in danger!`,chineseText:`消防员是保护我们安全的英雄。我想有一天成为其中一员。

发生火灾时，消防员冲向现场。他们灭火救人。

洪水和事故时他们也会帮忙。消防员既勇敢又强壮。

我会努力训练成为消防员。我想帮助处于危险中的人们！`,vocabularies:[{english:"firefighter",phonetic:"/ˈfaɪərfaɪtər/",chinese:"消防员"},{english:"hero",phonetic:"/ˈhɪroʊ/",chinese:"英雄"},{english:"safe",phonetic:"/seɪf/",chinese:"安全的"},{english:"fire",phonetic:"/ˈfaɪər/",chinese:"火"},{english:"flood",phonetic:"/flʌd/",chinese:"洪水"},{english:"accident",phonetic:"/ˈæksɪdənt/",chinese:"事故"},{english:"brave",phonetic:"/breɪv/",chinese:"勇敢的"},{english:"strong",phonetic:"/strɒŋ/",chinese:"强壮的"}]},{id:"89",title:"I Want to Be a Scientist Who Explores Space",titleCn:"我想成为探索太空的科学家",image:"/images/89我想成为探索太空的科学家.png",englishText:`Space is so vast and mysterious. I want to be a scientist who explores space.

Maybe I will become an astronaut and travel to the moon or even Mars someday.

I will learn about stars, planets, and galaxies. I will help discover if there is life on other planets.

Space exploration helps us understand our universe better. The sky is not the limit!`,chineseText:`太空如此广阔神秘。我想成为探索太空的科学家。

也许我会成为宇航员，有一天去月球甚至火星。

我会学习关于星星、行星和星系的知识。我会帮助发现其他星球上是否有生命。

太空探索帮助我们更好地了解宇宙。天空不是极限！`,vocabularies:[{english:"space",phonetic:"/speɪs/",chinese:"太空"},{english:"mysterious",phonetic:"/mɪˈstɪriəs/",chinese:"神秘的"},{english:"astronaut",phonetic:"/ˈæstrənɔːt/",chinese:"宇航员"},{english:"moon",phonetic:"/muːn/",chinese:"月亮"},{english:"Mars",phonetic:"/mɑːrz/",chinese:"火星"},{english:"star",phonetic:"/stɑːr/",chinese:"星星"},{english:"planet",phonetic:"/ˈplænɪt/",chinese:"行星"},{english:"universe",phonetic:"/ˈjuːnɪvɜːrs/",chinese:"宇宙"}]},{id:"90",title:"My Dreams",titleCn:"我的梦想",image:"/images/90我的梦想.png",englishText:`I have many dreams for my future. Some are big, some are small.

I dream of traveling around the world. I dream of making my parents proud.

I dream of helping others and making a difference. I dream of being happy every day.

Dreams give us something to look forward to. They make life exciting and meaningful!`,chineseText:`我对未来有很多梦想。有些大，有些小。

我梦想环游世界。我梦想让我的父母骄傲。

我梦想帮助别人，做出改变。我梦想每天都快乐。

梦想给予我们期待的东西。它们让生活充满期待和意义！`,vocabularies:[{english:"dream",phonetic:"/driːm/",chinese:"梦想"},{english:"future",phonetic:"/ˈfjuːtʃər/",chinese:"未来"},{english:"world",phonetic:"/wɜːrld/",chinese:"世界"},{english:"proud",phonetic:"/praʊd/",chinese:"骄傲的"},{english:"help",phonetic:"/help/",chinese:"帮助"},{english:"happy",phonetic:"/ˈhæpi/",chinese:"开心的"},{english:"exciting",phonetic:"/ɪkˈsaɪtɪŋ/",chinese:"令人兴奋的"},{english:"meaningful",phonetic:"/ˈmiːnɪŋfl/",chinese:"有意义的"}]},{id:"91",title:"Making a Phone Call",titleCn:"打电话",image:"/images/91打电话.png",englishText:`Ring ring! Mom answered the phone. It was Grandma calling.

Hello? Mom said. Hello, Mom! Grandma said. How are you?

I am fine, thank you. How are you doing? Mom asked.

I am doing well. I miss you all very much! Grandma said with a warm voice.`,chineseText:`叮铃铃！妈妈接了电话。是奶奶打来的。

喂？妈妈说。喂，妈妈！奶奶说。您好吗？

我很好，谢谢您。您好吗？妈妈问。

我很好。我非常想念你们！奶奶用温暖的声音说。`,vocabularies:[{english:"phone",phonetic:"/foʊn/",chinese:"电话"},{english:"call",phonetic:"/kɔːl/",chinese:"打电话"},{english:"answer",phonetic:"/ˈænsər/",chinese:"接"},{english:"hello",phonetic:"/həˈloʊ/",chinese:"你好"},{english:"fine",phonetic:"/faɪn/",chinese:"好的"},{english:"miss",phonetic:"/mɪs/",chinese:"想念"},{english:"warm",phonetic:"/wɔːrm/",chinese:"温暖的"},{english:"voice",phonetic:"/vɔɪs/",chinese:"声音"}]},{id:"92",title:"At the Supermarket",titleCn:"在超市",image:"/images/92在超市.png",englishText:`Mom took me to the supermarket today. It was big with many shelves full of things.

We walked through different aisles. One had fruits, one had vegetables, and one had snacks.

I helped Mom pick fresh apples and big watermelons. The fruits looked so colorful!

We also bought milk, bread, and eggs. Shopping with Mom is fun!`,chineseText:`今天妈妈带我去超市了。它很大，有很多货架摆满了东西。

我们走过不同的通道。有水果区、蔬菜区，还有零食区。

我帮妈妈挑选新鲜的苹果和大西瓜。水果看起来色彩缤纷！

我们还买了牛奶、面包和鸡蛋。和妈妈一起购物真有趣！`,vocabularies:[{english:"supermarket",phonetic:"/ˈsuːpərmɑːrkɪt/",chinese:"超市"},{english:"shelf",phonetic:"/ʃelf/",chinese:"货架"},{english:"aisle",phonetic:"/ˈaɪl/",chinese:"通道"},{english:"fruit",phonetic:"/fruːt/",chinese:"水果"},{english:"vegetable",phonetic:"/ˈvedʒtəbl/",chinese:"蔬菜"},{english:"apple",phonetic:"/ˈæpl/",chinese:"苹果"},{english:"watermelon",phonetic:"/ˈwɔːtərmelən/",chinese:"西瓜"},{english:"milk",phonetic:"/mɪlk/",chinese:"牛奶"}]},{id:"93",title:"Asking for Help",titleCn:"请求帮助",image:"/images/93请求帮助.png",englishText:`Excuse me, could you please help me? I asked the policeman at the crossing.

Of course! What do you need? The policeman said with a kind smile.

I cannot find my way home. I lost my map. I said feeling sad.

Do not worry! I will help you find your home. The policeman said. Let us call your parents.`,chineseText:`打扰一下，请问您能帮帮我吗？我在路口问警察。

当然可以！您需要什么？警察和善地微笑着说。

我找不到回家的路了。我的地图丢了。我伤心的说。

别担心！我会帮您找到家。警察说。让我们给您父母打电话。`,vocabularies:[{english:"excuse me",phonetic:"/ɪkˈskjuːz miː/",chinese:"打扰一下"},{english:"help",phonetic:"/help/",chinese:"帮助"},{english:"policeman",phonetic:"/pəˈliːsmən/",chinese:"警察"},{english:"kind",phonetic:"/kaɪnd/",chinese:"和善的"},{english:"find",phonetic:"/faɪnd/",chinese:"找到"},{english:"home",phonetic:"/hoʊm/",chinese:"家"},{english:"worry",phonetic:"/ˈwʌri/",chinese:"担心"},{english:"parent",phonetic:"/ˈperənt/",chinese:"父母"}]},{id:"94",title:"Thank You",titleCn:"谢谢",image:"/images/94谢谢.png",englishText:`Thank you for helping me cross the street, ma'am. I said to the kind woman.

You are welcome! she replied with a smile. Be careful next time!

Thank you for the delicious food, Mom. It was amazing! I said after dinner.

You are welcome, dear. I am glad you liked it. Mom said happily.`,chineseText:`谢谢您帮我过马路，女士。我对那位善良的女士说。

不客气！她微笑着回答。下次要小心哦！

谢谢您的美味食物，妈妈。太好吃了！晚饭后我说。

不客气，亲爱的。你喜欢我很开心。妈妈开心地说。`,vocabularies:[{english:"thank you",phonetic:"/θæŋk juː/",chinese:"谢谢"},{english:"help",phonetic:"/help/",chinese:"帮助"},{english:"street",phonetic:"/striːt/",chinese:"街道"},{english:"careful",phonetic:"/ˈkerfl/",chinese:"小心的"},{english:"delicious",phonetic:"/dɪˈlɪʃəs/",chinese:"美味的"},{english:"food",phonetic:"/fuːd/",chinese:"食物"},{english:"glad",phonetic:"/ɡlæd/",chinese:"开心的"},{english:"happy",phonetic:"/ˈhæpi/",chinese:"开心的"}]},{id:"95",title:"Sorry and Apologize",titleCn:"对不起",image:"/images/95对不起.png",englishText:`I am so sorry! I accidentally bumped into you and dropped your books.

It is okay. Are you hurt? Tom asked with concern.

No, I am fine. I am really sorry. Let me help you pick up the books.

No worries. These things happen. Tom smiled. Let us be more careful next time!`,chineseText:`非常抱歉！我不小心撞到了你，把你的书弄掉了。

没关系。你受伤了吗？汤姆关心地问。

没有，我很好。真的很抱歉。让我帮你捡书。

没关系。这种事难免会发生。汤姆笑着说。下次我们都小心点！`,vocabularies:[{english:"sorry",phonetic:"/ˈsɔːri/",chinese:"对不起"},{english:"accidentally",phonetic:"/ˌæksɪˈdentəli/",chinese:"不小心地"},{english:"bump",phonetic:"/bʌmp/",chinese:"撞"},{english:"drop",phonetic:"/drɒp/",chinese:"掉"},{english:"book",phonetic:"/bʊk/",chinese:"书"},{english:"hurt",phonetic:"/hɜːrt/",chinese:"受伤"},{english:"careful",phonetic:"/ˈkerfl/",chinese:"小心的"},{english:"worry",phonetic:"/ˈwʌri/",chinese:"担心"}]},{id:"96",title:"Asking Questions",titleCn:"问问题",image:"/images/96问问题.png",englishText:`Excuse me, could I ask you some questions? I said to my grandpa.

Of course! What would you like to know? Grandpa replied warmly.

Where did you grow up, Grandpa? I asked curiously.

I grew up in a small village by the river. Life was simple but happy, Grandpa said with a smile.`,chineseText:`打扰一下，我能问您一些问题吗？我对爷爷说。

当然！你想知道什么？爷爷亲切地回答。

您在哪里长大的，爷爷？我好奇地问。

我在河边的一个小村庄长大的。生活简单但很开心，爷爷笑着说。`,vocabularies:[{english:"question",phonetic:"/ˈkwestʃən/",chinese:"问题"},{english:"grow up",phonetic:"/ɡroʊ ʌp/",chinese:"长大"},{english:"village",phonetic:"/ˈvɪlɪdʒ/",chinese:"村庄"},{english:"river",phonetic:"/ˈrɪvər/",chinese:"河"},{english:"simple",phonetic:"/ˈsɪmpl/",chinese:"简单的"},{english:"curious",phonetic:"/ˈkjʊriəs/",chinese:"好奇的"},{english:"happily",phonetic:"/ˈhæpɪli/",chinese:"开心地"}]},{id:"97",title:"Weather Report",titleCn:"天气预报",image:"/images/97天气预报.png",englishText:`Good morning! Here is the weather report for today.

It will be sunny and hot in the morning. The temperature will reach thirty degrees.

In the afternoon, there will be some clouds. It might rain in the evening.

Remember to bring an umbrella and drink lots of water. Have a nice day!`,chineseText:`早上好！这里是今天的天气预报。

早上的天气晴朗炎热。温度将达到三十度。

下午会有一些云。晚上可能会下雨。

记得带伞，多喝水。祝您有美好的一天！`,vocabularies:[{english:"weather report",phonetic:"/ˈweðər rɪˈpɔːrt/",chinese:"天气预报"},{english:"sunny",phonetic:"/ˈsʌni/",chinese:"晴朗的"},{english:"hot",phonetic:"/hɒt/",chinese:"热的"},{english:"temperature",phonetic:"/ˈtemprətʃər/",chinese:"温度"},{english:"cloud",phonetic:"/klaʊd/",chinese:"云"},{english:"rain",phonetic:"/reɪn/",chinese:"雨"},{english:"umbrella",phonetic:"/ʌmˈbrelə/",chinese:"雨伞"},{english:"degree",phonetic:"/dɪˈɡriː/",chinese:"度"}]},{id:"98",title:"At the Restaurant",titleCn:"在餐厅",image:"/images/98在餐厅.png",englishText:`Welcome! How many people? The waiter asked with a smile.

Four people, please. Dad answered.

Here is the menu. What would you like to order? The waiter said.

We would like some dumplings, fried rice, and vegetables, please. Mom said.

Anything to drink? Water or juice? The waiter asked.`,chineseText:`欢迎光临！请问几位？服务员微笑着问。

四位，谢谢。爸爸回答。

这是菜单。请问您想点什么？服务员说。

我们想要一些饺子、炒饭和蔬菜，谢谢。妈妈说。

请问喝什么？水还是果汁？服务员问。`,vocabularies:[{english:"restaurant",phonetic:"/ˈrestrɒnt/",chinese:"餐厅"},{english:"waiter",phonetic:"/ˈweɪtər/",chinese:"服务员"},{english:"menu",phonetic:"/ˈmenjuː/",chinese:"菜单"},{english:"order",phonetic:"/ˈɔːrdər/",chinese:"点菜"},{english:"dumpling",phonetic:"/ˈdʌmplɪŋ/",chinese:"饺子"},{english:"fried rice",phonetic:"/fraɪd raɪs/",chinese:"炒饭"},{english:"vegetable",phonetic:"/ˈvedʒtəbl/",chinese:"蔬菜"},{english:"juice",phonetic:"/dʒuːs/",chinese:"果汁"}]},{id:"99",title:"I Love My Family",titleCn:"我爱我的家人",image:"/images/99我爱我的家人.png",englishText:`I love my family very much. They are the most important people in my life.

Mom takes care of me every day. She cooks for me and helps me with my studies.

Dad works hard to provide for our family. He plays with me and teaches me important lessons.

Grandparents share their wisdom and love. I am lucky to have such a wonderful family!`,chineseText:`我非常爱我的家人。他们是我生命中最重要的人。

妈妈每天照顾我。她为我做饭，帮我学习。

爸爸努力工作供养我们的家庭。他和我玩，教我重要的道理。

祖父母分享他们的智慧和爱。我很幸运有这样一个美满的家庭！`,vocabularies:[{english:"family",phonetic:"/ˈfæməli/",chinese:"家庭"},{english:"love",phonetic:"/lʌv/",chinese:"爱"},{english:"important",phonetic:"/ɪmˈpɔːrtənt/",chinese:"重要的"},{english:"care",phonetic:"/ker/",chinese:"照顾"},{english:"study",phonetic:"/ˈstʌdi/",chinese:"学习"},{english:"work",phonetic:"/wɜːrk/",chinese:"工作"},{english:"lesson",phonetic:"/ˈlesn/",chinese:"道理/课"},{english:"wisdom",phonetic:"/ˈwɪzdəm/",chinese:"智慧"},{english:"lucky",phonetic:"/ˈlʌki/",chinese:"幸运的"}]},{id:"100",title:"Being Grateful",titleCn:"感恩",image:"/images/100感恩.png",englishText:`Every day, I try to remember to be grateful for the things I have.

I am thankful for my family who loves me. I am thankful for my friends who play with me.

I am thankful for my teachers who teach me. I am thankful for the food I eat and the roof over my head.

Being grateful makes me a happier person. Let us all appreciate what we have!`,chineseText:`每天，我努力记住感恩我所拥有的事物。

我感恩爱我的家人。我感恩和我一起玩的朋友。

我感恩教我的老师。我感恩我吃的食物和头上的屋顶。

感恩让我成为更快乐的人。让我们都珍惜我们所拥有的！`,vocabularies:[{english:"grateful",phonetic:"/ˈɡreɪtfl/",chinese:"感恩的"},{english:"thankful",phonetic:"/ˈθæŋkfl/",chinese:"感谢的"},{english:"family",phonetic:"/ˈfæməli/",chinese:"家人"},{english:"friend",phonetic:"/frend/",chinese:"朋友"},{english:"teacher",phonetic:"/ˈtiːtʃər/",chinese:"老师"},{english:"food",phonetic:"/fuːd/",chinese:"食物"},{english:"appreciate",phonetic:"/əˈpriːʃieɪt/",chinese:"珍惜"},{english:"happier",phonetic:"/ˈhæpiər/",chinese:"更快乐的"}]}],ln=[...kg,...bg,...xg,...Tg];function Ig(){const e=Ls(),[n,i]=T.useState(""),t=ln.filter(s=>s.titleCn.toLowerCase().includes(n.toLowerCase())||s.title.toLowerCase().includes(n.toLowerCase()));return f.jsxs("div",{className:"home-page",children:[f.jsxs("div",{className:"header",children:[f.jsx("h1",{className:"app-title",children:"📚 英语点读宝"}),f.jsx("p",{className:"app-desc",children:"英语初学者绘本阅读"})]}),f.jsxs("div",{className:"page-content",children:[f.jsxs("div",{className:"search-box",children:[f.jsx("span",{className:"search-icon",children:"🔍"}),f.jsx("input",{type:"text",placeholder:"搜索绘本...",value:n,onChange:s=>i(s.target.value)}),n&&f.jsx("button",{className:"clear-btn",onClick:()=>i(""),children:"✕"})]}),f.jsx("div",{className:"result-count",children:n?`找到 ${t.length} 个绘本`:`${ln.length} 个绘本`}),f.jsx("div",{className:"story-list",children:t.map((s,l)=>f.jsxs("div",{className:"story-card",onClick:()=>e(`/reading/${s.id}`),children:[f.jsx("div",{className:"story-number",children:String(l+1).padStart(2,"0")}),f.jsxs("div",{className:"story-info",children:[f.jsx("h3",{className:"story-title",children:s.title}),f.jsx("p",{className:"story-desc",children:s.titleCn})]})]},s.id))}),t.length===0&&f.jsx("div",{className:"no-result",children:"没有找到相关绘本"})]}),f.jsx("style",{children:`
        .home-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #E8F4FD 0%, #F5F7FA 100%);
          padding-bottom: 80px;
        }

        .header {
          background: linear-gradient(135deg, #4A90D9 0%, #6BA3E0 100%);
          padding: 24px 20px 32px;
          border-radius: 0 0 24px 24px;
        }

        .app-title {
          font-size: 24px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 4px;
        }

        .app-desc {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
        }

        .page-content {
          padding: 16px 20px;
          margin-top: -12px;
        }

        .search-box {
          background: #fff;
          border-radius: 12px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          margin-bottom: 12px;
        }

        .search-icon {
          font-size: 16px;
        }

        .search-box input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 15px;
          background: transparent;
        }

        .clear-btn {
          color: #999;
          font-size: 14px;
          padding: 4px 8px;
        }

        .result-count {
          font-size: 13px;
          color: #666;
          margin-bottom: 12px;
        }

        .story-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .story-card {
          background: #fff;
          border-radius: 16px;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .story-card:active {
          transform: scale(0.98);
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
        }

        .story-number {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #4A90D9 0%, #6BA3E0 100%);
          color: #fff;
          font-size: 18px;
          font-weight: 700;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .story-info {
          flex: 1;
        }

        .story-title {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          margin-bottom: 2px;
        }

        .story-desc {
          font-size: 14px;
          color: #666;
        }

        .no-result {
          text-align: center;
          padding: 40px;
          color: #999;
          font-size: 14px;
        }
      `})]})}const $c="english-reading-app:read-stories",Gc="english-reading-app:learned-words";function $t(){try{const e=localStorage.getItem($c);return e?JSON.parse(e):[]}catch{return[]}}function Sg(e){const n=$t();n.includes(e)||(n.push(e),localStorage.setItem($c,JSON.stringify(n)))}function Gt(){try{const e=localStorage.getItem(Gc);return e?JSON.parse(e):[]}catch{return[]}}function Cg(e){const n=Gt();n.includes(e)||(n.push(e),localStorage.setItem(Gc,JSON.stringify(n)))}function jg(){const[e,n]=T.useState(0),[i,t]=T.useState(0);return T.useEffect(()=>{n($t().length),t(Gt().length);const l=()=>{n($t().length),t(Gt().length)};return window.addEventListener("storage",l),()=>window.removeEventListener("storage",l)},[]),{readCount:e,learnedCount:i,refresh:()=>{n($t().length),t(Gt().length)}}}function Eg(){const{id:e}=Xd(),n=Ls(),[i,t]=T.useState(null),[,s]=T.useState({}),l=T.useRef(!1),r=T.useRef(!1),o=T.useRef(0),a=T.useRef(!1),h=T.useRef(!1),g=T.useRef(0),p=ln.find(N=>N.id===e)||ln[0];T.useEffect(()=>{e&&Sg(e)},[e]);const m=ln.findIndex(N=>N.id===e),w=m>0?ln[m-1]:null,k=m<ln.length-1?ln[m+1]:null,v=.6,I=()=>speechSynthesis.getVoices().find(W=>W.lang.includes("en")),u=()=>{const N=speechSynthesis.getVoices();return N.find(W=>W.lang.includes("zh"))||N.find(W=>W.lang.includes("CN"))},c=()=>{speechSynthesis.cancel(),l.current=!1,r.current=!1,t(null)},d=()=>{if(speechSynthesis.speaking&&!l.current)return;l.current&&(l.current=!1,s({})),speechSynthesis.cancel(),r.current=!0,o.current=0;const N=p.englishText.split(new RegExp("(?<=[.!?])\\s+")).filter(M=>M.trim()),W=M=>{if(M>=N.length){t(null);return}if(l.current){setTimeout(()=>W(M),100);return}o.current=M,t(M);const _=new SpeechSynthesisUtterance(N[M].trim());_.lang="en-US",_.rate=v;const x=I();x&&(_.voice=x),_.onend=()=>{l.current||setTimeout(()=>W(M+1),300)},_.onerror=()=>{l.current||setTimeout(()=>W(M+1),300)},speechSynthesis.speak(_)};W(0)},y=()=>{if(!l.current)return;l.current=!1,s({});const N=p.englishText.split(new RegExp("(?<=[.!?])\\s+")).filter(M=>M.trim()),W=M=>{if(M>=N.length){t(null),r.current=!1,s({});return}if(l.current)return;o.current=M,t(M);const _=new SpeechSynthesisUtterance(N[M].trim());_.lang="en-US",_.rate=v;const x=I();x&&(_.voice=x),_.onend=()=>{l.current||setTimeout(()=>W(M+1),300)},_.onerror=()=>{l.current||setTimeout(()=>W(M+1),300)},speechSynthesis.speak(_)};W(o.current)},S=()=>{r.current&&(l.current=!0,speechSynthesis.cancel(),s({}))},j=()=>{if(speechSynthesis.speaking&&!a.current)return;a.current&&(a.current=!1,s({})),speechSynthesis.cancel(),h.current=!0,g.current=0;const N=p.chineseText.replace(/\n\n/g,`
`).replace(/([。！？])/g,`$1
`).split(`
`).filter(M=>M.trim()),W=M=>{if(M>=N.length){t(null),h.current=!1,s({});return}if(a.current){setTimeout(()=>W(M),100);return}g.current=M,t(M);const _=new SpeechSynthesisUtterance(N[M].trim());_.lang="zh-CN",_.rate=v;const x=u();x&&(_.voice=x),_.onend=()=>{a.current||setTimeout(()=>W(M+1),200)},_.onerror=()=>{a.current||setTimeout(()=>W(M+1),200)},speechSynthesis.speak(_)};W(0)},E=()=>{h.current&&(a.current=!0,speechSynthesis.cancel(),s({}))},z=()=>{if(!a.current)return;a.current=!1,s({});const N=p.chineseText.replace(/\n\n/g,`
`).replace(/([。！？])/g,`$1
`).split(`
`).filter(M=>M.trim()),W=M=>{if(M>=N.length){t(null),h.current=!1,s({});return}if(a.current)return;g.current=M,t(M);const _=new SpeechSynthesisUtterance(N[M].trim());_.lang="zh-CN",_.rate=v;const x=u();x&&(_.voice=x),_.onend=()=>{a.current||setTimeout(()=>W(M+1),200)},_.onerror=()=>{a.current||setTimeout(()=>W(M+1),200)},speechSynthesis.speak(_)};W(g.current)},V=(N,W)=>{c(),t(W);const M=new SpeechSynthesisUtterance(N);M.lang="zh-CN",M.rate=v;const _=u();_&&(M.voice=_),M.onend=()=>{setTimeout(()=>t(null),1e3)},speechSynthesis.speak(M)},A=(N,W)=>{c(),t(W);const M=new SpeechSynthesisUtterance(N);M.lang="en-US",M.rate=v;const _=I();_&&(M.voice=_),M.onend=()=>{setTimeout(()=>t(null),1e3)},speechSynthesis.speak(M)},ke=(N,W)=>{c();const M=new SpeechSynthesisUtterance(N);M.lang="en-US",M.rate=v;const _=I();_&&(M.voice=_),M.onend=()=>{const x=new SpeechSynthesisUtterance(W);x.lang="zh-CN",x.rate=v;const P=u();P&&(x.voice=P),speechSynthesis.speak(x)},speechSynthesis.speak(M)},Sn=p.englishText.split(new RegExp("(?<=[.!?])\\s+")).filter(N=>N.trim()),Cn=p.chineseText.replace(/\n\n/g,`
`).replace(/([。！？])/g,`$1
`).split(`
`).filter(N=>N.trim());return f.jsxs("div",{className:"reading-page",children:[f.jsxs("div",{className:"header",children:[f.jsx("div",{className:"back-btn-wrapper",children:f.jsx("button",{className:"back-btn",onClick:()=>{c(),n(-1)},children:"返回"})}),f.jsxs("div",{className:"header-title-wrapper",children:[f.jsx("h1",{className:"header-title-cn",children:p.titleCn}),f.jsx("h2",{className:"header-title-en",children:p.title})]}),f.jsx("div",{className:"header-placeholder"})]}),f.jsx("div",{className:"story-image-section",children:f.jsx("img",{src:p.image,alt:p.title,className:"story-image"})}),f.jsxs("div",{className:"english-section",children:[f.jsx("div",{className:"section-label",children:"📖 英文短文"}),f.jsx("div",{className:"english-content",children:Sn.map((N,W)=>f.jsxs("span",{className:`sentence-item ${i===W?"active":""}`,onClick:()=>A(N,W),children:[N.trim(),f.jsx("span",{className:"speak-icon",children:"🔊"})]},W))}),f.jsxs("div",{className:"speak-section",children:[f.jsx("button",{className:"play-btn",onClick:d,disabled:speechSynthesis.speaking&&!l.current,children:"▶ 朗读英文"}),f.jsx("button",{className:"pause-btn",onClick:S,disabled:!r.current||l.current,children:"⏸ 暂停"}),f.jsx("button",{className:"continue-btn",onClick:y,disabled:!l.current,children:"▶ 继续"})]})]}),f.jsxs("div",{className:"chinese-section",children:[f.jsx("div",{className:"section-label",children:"📝 中文翻译"}),f.jsx("div",{className:"chinese-content",children:Cn.map((N,W)=>f.jsx("span",{className:`chinese-sentence ${i===W?"highlight":""}`,onClick:()=>V(N,W),children:N.trim()},W))}),f.jsxs("div",{className:"speak-chinese-section",children:[f.jsx("button",{className:"speak-cn-btn",onClick:j,disabled:speechSynthesis.speaking&&!a.current,children:"🔊 朗读中文"}),f.jsx("button",{className:"cn-pause-btn",onClick:E,disabled:!h.current||a.current,children:"⏸ 暂停"}),f.jsx("button",{className:"cn-continue-btn",onClick:z,disabled:!a.current,children:"▶ 继续"})]})]}),f.jsxs("div",{className:"vocab-section",children:[f.jsx("div",{className:"section-label",children:"⭐ 重点词汇"}),f.jsx("div",{className:"vocab-grid",children:(p.vocabularies||[]).map((N,W)=>f.jsxs("div",{className:"vocab-card",children:[f.jsxs("div",{className:"vocab-row",children:[f.jsx("span",{className:"vocab-english",children:N.english}),f.jsx("button",{className:"vocab-speak",onClick:()=>ke(N.english,N.chinese),children:"🔊"})]}),f.jsx("div",{className:"vocab-phonetic",children:N.phonetic}),f.jsx("div",{className:"vocab-chinese",children:N.chinese})]},W))})]}),f.jsxs("div",{className:"nav-section",children:[w&&f.jsxs("button",{className:"nav-btn prev-btn",onClick:()=>{c(),n(`/reading/${w.id}`)},children:["上一篇：",w.titleCn]}),k&&f.jsxs("button",{className:"nav-btn next-btn",onClick:()=>{c(),n(`/reading/${k.id}`)},children:["下一篇：",k.titleCn]})]}),f.jsx("style",{children:`
        .reading-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #E8F4FD 0%, #F5F7FA 100%);
          padding-bottom: 100px;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          background: #fff;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .back-btn-wrapper {
          background: rgba(74, 144, 217, 0.1);
          border-radius: 20px;
          padding: 6px 12px;
        }

        .back-btn {
          color: #4A90D9;
          font-size: 14px;
          font-weight: 500;
          background: transparent;
        }

        .header-title-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: linear-gradient(135deg, #4A90D9 0%, #6BA3E0 100%);
          border-radius: 24px;
          padding: 8px 24px;
          margin: 0 auto;
        }

        .header-title-cn {
          font-size: 18px;
          font-weight: 600;
          color: #fff;
          margin: 0 0 2px 0;
        }

        .header-title-en {
          font-size: 14px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }

        .header-placeholder {
          width: 60px;
        }

        .story-image-section {
          padding: 8px 20px 0;
          text-align: center;
        }

        .story-image {
          width: 70%;
          max-width: 300px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          display: block;
          margin: 0 auto;
        }

        .title-section {
          padding: 20px;
          text-align: center;
          background: linear-gradient(135deg, #4A90D9 0%, #6BA3E0 100%);
        }

        .story-title {
          font-size: 20px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 4px;
        }

        .story-title-cn {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.9);
        }

        .section-label {
          font-size: 15px;
          font-weight: 600;
          color: #4A90D9;
          margin-bottom: 12px;
          padding: 6px 14px;
          border-radius: 20px;
          background: rgba(74, 144, 217, 0.1);
          display: inline-block;
        }

        .english-section {
          background: #fff;
          border-radius: 16px;
          padding: 20px;
          margin: 16px 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }

        .english-content {
          margin-bottom: 16px;
        }

        .sentence-item {
          font-size: 15px;
          line-height: 1.6;
          color: #333;
          cursor: pointer;
          display: inline;
          padding: 2px 4px;
          border-radius: 4px;
          transition: background 0.2s, color 0.2s;
        }

        .sentence-item:last-child {
          margin-bottom: 0;
        }

        .sentence-item.active {
          background: rgba(74, 144, 217, 0.15);
          color: #4A90D9;
        }

        .speak-icon {
          font-size: 14px;
          opacity: 0;
          flex-shrink: 0;
          display: none;
        }

        .sentence-item.active .speak-icon {
          opacity: 0;
        }

        .speak-section {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-top: 12px;
          border-top: 1px dashed #eee;
          flex-wrap: wrap;
        }

        .play-btn, .pause-btn, .continue-btn {
          padding: 10px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
        }

        .play-btn {
          background: #4A90D9;
          color: #fff;
        }

        .play-btn:hover:not(:disabled) {
          background: #3A7BC8;
        }

        .pause-btn {
          background: #FF9800;
          color: #fff;
        }

        .pause-btn:hover:not(:disabled) {
          background: #E68A00;
        }

        .pause-btn:disabled, .continue-btn:disabled {
          background: #ccc;
          cursor: not-allowed;
        }

        .continue-btn {
          background: #4CAF50;
          color: #fff;
        }

        .continue-btn:hover:not(:disabled) {
          background: #45a049;
        }

        .chinese-section {
          background: #FFF9E6;
          border-radius: 16px;
          padding: 20px;
          margin: 0 20px 16px;
        }

        .chinese-content {
          margin-bottom: 12px;
        }

        .chinese-sentence {
          font-size: 14px;
          line-height: 1.6;
          color: #666;
          display: inline;
          padding: 2px 4px;
          border-radius: 4px;
          transition: background 0.2s, color 0.2s;
          cursor: pointer;
        }

        .chinese-sentence.highlight {
          background: rgba(255, 193, 7, 0.3);
          color: #333;
        }

        .speak-chinese-section {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-top: 12px;
          border-top: 1px dashed #ddd;
        }

        .speak-cn-btn {
          padding: 10px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          background: #FF9800;
          color: #fff;
          border: none;
          transition: all 0.2s;
        }

        .speak-cn-btn:hover:not(:disabled) {
          background: #E68A00;
        }

        .speak-cn-btn:disabled {
          background: #ccc;
          cursor: not-allowed;
        }

        .cn-pause-btn, .cn-continue-btn {
          padding: 10px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
        }

        .cn-pause-btn {
          background: #FF9800;
          color: #fff;
        }

        .cn-pause-btn:hover:not(:disabled) {
          background: #E68A00;
        }

        .cn-pause-btn:disabled {
          background: #ccc;
          cursor: not-allowed;
        }

        .cn-continue-btn {
          background: #4CAF50;
          color: #fff;
        }

        .cn-continue-btn:hover:not(:disabled) {
          background: #45a049;
        }

        .cn-continue-btn:disabled {
          background: #ccc;
          cursor: not-allowed;
        }

        .vocab-section {
          margin: 0 20px 20px;
        }

        .vocab-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .vocab-card {
          background: #fff;
          border-radius: 12px;
          padding: 14px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .vocab-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .vocab-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4px;
        }

        .vocab-english {
          font-size: 16px;
          font-weight: 600;
          color: #333;
        }

        .vocab-speak {
          font-size: 14px;
          opacity: 0.6;
          transition: opacity 0.2s;
          background: transparent;
          border: none;
          cursor: pointer;
        }

        .vocab-speak:active {
          opacity: 1;
        }

        .vocab-phonetic {
          font-size: 12px;
          color: #999;
          margin-bottom: 4px;
        }

        .vocab-chinese {
          font-size: 14px;
          color: #666;
        }

        .nav-section {
          display: flex;
          justify-content: space-between;
          padding: 20px;
          gap: 12px;
        }

        .nav-btn {
          flex: 1;
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .prev-btn {
          background: #fff;
          color: #4A90D9;
          border: 1px solid #4A90D9;
        }

        .prev-btn:active {
          background: #E8F4FD;
        }

        .next-btn {
          background: #4A90D9;
          color: #fff;
          border: 1px solid #4A90D9;
        }

        .next-btn:active {
          background: #3A7BC8;
        }
      `})]})}const Mg=[{id:"1",title:"Children's Day",titleCn:"儿童节",image:"/images/01儿童节.png",englishText:`Today is Children's Day. I am so excited!

I wear my new beautiful clothes. I go to the park with my mom and dad.

We fly a kite in the park. The kite is red and looks like a fish. It flies so high!

I eat ice cream. It is vanilla and strawberry. It is so sweet!

I am very happy today. Children's Day is the best day!`,chineseText:`今天是儿童节。我太兴奋了！

我穿上了漂亮的新衣服。我和爸爸妈妈一起去公园。

我们在公园放风筝。风筝是红色的，像一条鱼。它飞得好高！

我吃了冰淇淋。是香草味和草莓味的。好甜啊！

我今天非常开心。儿童节是最棒的一天！`,vocabularies:[{english:"Children's Day",phonetic:"/ˈtʃɪldrən deɪ/",chinese:"儿童节"},{english:"excited",phonetic:"/ɪkˈsaɪtɪd/",chinese:"兴奋的"},{english:"wear",phonetic:"/wer/",chinese:"穿"},{english:"new",phonetic:"/nuː/",chinese:"新的"},{english:"beautiful",phonetic:"/ˈbjuːtɪfl/",chinese:"漂亮的"},{english:"park",phonetic:"/pɑːrk/",chinese:"公园"},{english:"kite",phonetic:"/kaɪt/",chinese:"风筝"},{english:"ice cream",phonetic:"/aɪs kriːm/",chinese:"冰淇淋"}]},{id:"2",title:"Ice Cream",titleCn:"冰激淋",image:"/images/02冰淇淋.png",englishText:`I love ice cream so much. It is my favorite snack.

There are many flavors. There is chocolate, vanilla, and strawberry. I like all of them!

In summer, I eat ice cream every day. It makes me feel cool and happy.

Last Sunday, my dad bought me a big ice cream cone. It had three flavors. I shared it with my mom.

Ice cream is sweet and delicious. I will never get tired of it!`,chineseText:`我太喜欢冰激淋了。它是我最爱的零食。

有很多口味。有巧克力味、香草味和草莓味。我都喜欢！

夏天的时候，我每天都吃冰激淋。它让我感觉凉爽又开心。

上星期天，爸爸给我买了一个大蛋筒冰激淋。有三种口味。我和妈妈一起分享了。

冰激淋又甜又好吃。我永远也吃不腻！`,vocabularies:[{english:"ice cream",phonetic:"/aɪs kriːm/",chinese:"冰激淋"},{english:"flavor",phonetic:"/ˈfleɪvər/",chinese:"口味"},{english:"chocolate",phonetic:"/ˈtʃɔːklət/",chinese:"巧克力"},{english:"vanilla",phonetic:"/vəˈnɪlə/",chinese:"香草"},{english:"strawberry",phonetic:"/ˈstrɔːberi/",chinese:"草莓"},{english:"summer",phonetic:"/ˈsʌmər/",chinese:"夏天"},{english:"cool",phonetic:"/kuːl/",chinese:"凉爽的"},{english:"delicious",phonetic:"/dɪˈlɪʃəs/",chinese:"美味的"}]},{id:"3",title:"All About Me",titleCn:"自我介绍",image:"/images/03自我介绍.png",englishText:`Hello, everyone! Let me introduce myself.

My name is Li Ming. I am eight years old. I live in Beijing with my family.

I have big eyes and short hair. I like to wear blue shirts.

I am a student at Sunny Elementary School. I am in Class Two, Grade Three.

I like to read books and play soccer. My favorite subject is English.

Nice to meet you all! I hope we can be good friends.`,chineseText:`大家好！让我介绍一下自己。

我叫李明。我今年八岁了。我和家人住在北京。

我有一双大眼睛和短短的头发。我喜欢穿蓝色的衬衫。

我是阳光小学的学生。我在三年级二班。

我喜欢读书和踢足球。我最喜欢的科目是英语。

很高兴认识大家！希望我们能成为好朋友。`,vocabularies:[{english:"introduce",phonetic:"/ˌɪntrəˈdjuːs/",chinese:"介绍"},{english:"elementary school",phonetic:"/ˌelɪˈmentri skuːl/",chinese:"小学"},{english:"subject",phonetic:"/ˈsʌbdʒɪkt/",chinese:"科目"},{english:"soccer",phonetic:"/ˈsɑːkər/",chinese:"足球"},{english:"favorite",phonetic:"/ˈfeɪvərɪt/",chinese:"最喜欢的"},{english:"family",phonetic:"/ˈfæməli/",chinese:"家人"},{english:"student",phonetic:"/ˈstuːdnt/",chinese:"学生"},{english:"friend",phonetic:"/frend/",chinese:"朋友"}]},{id:"4",title:"My Day",titleCn:"我的一天",image:"/images/04我的一天.png",englishText:`I have a busy day every day. Let me tell you about it.

I wake up at seven o'clock in the morning. I brush my teeth and wash my face.

I eat breakfast with my family at half past seven. Then I go to school by bus.

Classes start at eight o'clock. I have Chinese, Math, English, and Music every day.

After school, I do my homework. Then I play with my friends in the park.

At nine o'clock, I take a bath and go to bed. What a busy day!`,chineseText:`我每天都很忙碌。让我告诉你关于我的一天。

早上七点我起床。我刷牙洗脸。

七点半我和家人一起吃早餐。然后我坐公交车去学校。

八点开始上课。我每天有语文、数学、英语和音乐课。

放学后，我做作业。然后我和朋友们在公园玩。

九点，我洗澡睡觉。真是忙碌的一天！`,vocabularies:[{english:"wake up",phonetic:"/weɪk ʌp/",chinese:"起床"},{english:"brush teeth",phonetic:"/brʌʃ tiːθ/",chinese:"刷牙"},{english:"breakfast",phonetic:"/ˈbrekfəst/",chinese:"早餐"},{english:"class",phonetic:"/klæs/",chinese:"课"},{english:"homework",phonetic:"/ˈhoʊmwɜːrk/",chinese:"作业"},{english:"park",phonetic:"/pɑːrk/",chinese:"公园"},{english:"bath",phonetic:"/bæθ/",chinese:"洗澡"},{english:"busy",phonetic:"/ˈbɪzi/",chinese:"忙碌的"}]},{id:"5",title:"I Love Summer",titleCn:"我爱夏天",image:"/images/05我爱夏天.png",englishText:`Summer is my favorite season. I love it so much!

In summer, the sun is bright and the sky is blue. The days are long and warm.

I can swim in the swimming pool. The water is cool and I feel so happy.

I eat lots of ice cream in summer. My favorite is strawberry flavor.

I also wear my beautiful dresses and sandals. I look so cute!

Summer vacation starts in July. I will go to the beach with my family. I cannot wait!`,chineseText:`夏天是我最喜欢的季节。我太喜欢它了！

夏天的时候，太阳很明亮，天空是蓝色的。白天很长很暖和。

我可以在游泳池里游泳。水很凉快，我感觉很开心。

夏天我可以吃很多冰淇淋。我最喜欢草莓味的。

我还穿上漂亮的裙子和凉鞋。我看起来好可爱！

暑假从七月开始。我会和家人一起去海边。我等不及了！`,vocabularies:[{english:"summer",phonetic:"/ˈsʌmər/",chinese:"夏天"},{english:"season",phonetic:"/ˈsiːzn/",chinese:"季节"},{english:"swim",phonetic:"/swɪm/",chinese:"游泳"},{english:"swimming pool",phonetic:"/ˈswɪmɪŋ puːl/",chinese:"游泳池"},{english:"vacation",phonetic:"/veɪˈkeɪʃn/",chinese:"假期"},{english:"beach",phonetic:"/biːtʃ/",chinese:"海边"},{english:"sandal",phonetic:"/ˈsændl/",chinese:"凉鞋"},{english:"bright",phonetic:"/braɪt/",chinese:"明亮的"}]},{id:"6",title:"My School",titleCn:"我的学校",image:"/images/06我的学校.png",englishText:`I go to Sunshine Elementary School. It is a beautiful school.

Our school has a big playground. We can run and play there.

There are many classrooms in our school. My classroom is on the second floor. It is Room 205.

I have a best desk. It is near the window. I can see the beautiful garden from my seat.

My teachers are very kind. They teach us many interesting things.

I have many friends at school. We study and play together every day. I love my school!`,chineseText:`我在阳光小学上学。它是一所美丽的学校。

我们学校有一个大操场。我们可以在那里跑步和玩耍。

我们学校有很多教室。我的教室在二楼。是205教室。

我有一张最好的桌子。它在窗户旁边。我可以从座位上看到美丽的花园。

我的老师们都很亲切。他们教我们很多有趣的知识。

我在学校有很多朋友。我们每天一起学习和玩耍。我爱我的学校！`,vocabularies:[{english:"school",phonetic:"/skuːl/",chinese:"学校"},{english:"playground",phonetic:"/ˈpleɪɡraʊnd/",chinese:"操场"},{english:"classroom",phonetic:"/ˈklæsrʊm/",chinese:"教室"},{english:"teacher",phonetic:"/ˈtiːtʃər/",chinese:"老师"},{english:"garden",phonetic:"/ˈɡɑːrdn/",chinese:"花园"},{english:"floor",phonetic:"/flɔːr/",chinese:"楼层"},{english:"friend",phonetic:"/frend/",chinese:"朋友"},{english:"interesting",phonetic:"/ˈɪntrəstɪŋ/",chinese:"有趣的"}]},{id:"7",title:"A Happy Home",titleCn:"幸福的家",image:"/images/07幸福的家.jpg",englishText:`I have a happy family. There are four people in my family.

My dad is tall and strong. He works hard every day. He teaches me to ride a bike.

My mom is kind and beautiful. She cooks delicious food for us every day. She also helps me with my homework.

I have a little brother. He is cute and funny. He always makes me laugh.

We love each other very much. Every Sunday, we go out together. My family makes me happy!`,chineseText:`我有一个幸福的家。我家有四口人。

我爸爸又高又强壮。他每天努力工作。他教我骑自行车。

我妈妈又善良又漂亮。她每天为我们做美味的食物。她还帮我辅导作业。

我有一个小弟弟。他很可爱很有趣。他总是让我笑。

我们非常相爱。每个星期天，我们都一起外出。我的家庭让我幸福！`,vocabularies:[{english:"family",phonetic:"/ˈfæməli/",chinese:"家庭"},{english:"happy",phonetic:"/ˈhæpi/",chinese:"幸福的"},{english:"dad",phonetic:"/dæd/",chinese:"爸爸"},{english:"mom",phonetic:"/mɑːm/",chinese:"妈妈"},{english:"brother",phonetic:"/ˈbrʌðər/",chinese:"哥哥/弟弟"},{english:"strong",phonetic:"/strɔːŋ/",chinese:"强壮的"},{english:"laugh",phonetic:"/læf/",chinese:"笑"},{english:"together",phonetic:"/təˈɡeðər/",chinese:"一起"}]},{id:"8",title:"My Grandpa",titleCn:"我的爷爷",image:"/images/08我的爷爷.jpg",englishText:`My grandpa is seventy years old. But he is still very healthy.

Every morning, he does tai chi in the park. He says it is good for his health.

My grandpa tells me many interesting stories. His stories are about the old days.

He grows beautiful flowers in his garden. He gives me one flower on my birthday every year.

My grandpa loves me very much. I love him too. He is the best grandpa in the world!`,chineseText:`我爷爷七十岁了。但他的身体依然很健康。

每天早上，他在公园打太极拳。他说这对他的健康有好处。

我爷爷给我讲很多有趣的故事。他的故事都是关于过去的时光。

他在花园里种漂亮的花。每年我生日他都会给我一朵花。

我爷爷非常爱我。我也爱他。他是世界上最好的爷爷！`,vocabularies:[{english:"grandpa",phonetic:"/ˈɡrænpɑː/",chinese:"爷爷"},{english:"healthy",phonetic:"/ˈhelθi/",chinese:"健康的"},{english:"tai chi",phonetic:"/taɪ ˈtʃiː/",chinese:"太极拳"},{english:"health",phonetic:"/helθ/",chinese:"健康"},{english:"story",phonetic:"/ˈstɔːri/",chinese:"故事"},{english:"flower",phonetic:"/ˈflaʊər/",chinese:"花"},{english:"birthday",phonetic:"/ˈbɜːrθdeɪ/",chinese:"生日"},{english:"garden",phonetic:"/ˈɡɑːrdn/",chinese:"花园"}]},{id:"9",title:"My Grandma",titleCn:"我的奶奶",image:"/images/09我的奶奶.jpg",englishText:`My grandma is sixty-five years old. She has grey hair and a warm smile.

She cooks the most delicious food in the world. Her dumplings are my favorite.

Every weekend, she tells me stories and sings songs. Her voice is so beautiful.

My grandma grows vegetables in her small garden. She says fresh vegetables are very healthy.

When I am sick, she takes good care of me. She makes me chicken soup.

I love my grandma. She is the kindest person in my family.`,chineseText:`我奶奶六十五岁了。她有灰白的头发和温暖的笑容。

她做的食物是世界上最好吃的。她的饺子是我的最爱。

每个周末，她给我讲故事和唱歌。她的声音非常好听。

我奶奶在她的一个小菜园里种蔬菜。她说新鲜的蔬菜非常健康。

当我生病的时候，她很好地照顾我。她给我做鸡汤。

我爱我的奶奶。她是我家最善良的人。`,vocabularies:[{english:"grandma",phonetic:"/ˈɡrænmɑː/",chinese:"奶奶"},{english:"grey",phonetic:"/ɡreɪ/",chinese:"灰色的"},{english:"smile",phonetic:"/smaɪl/",chinese:"微笑"},{english:"dumpling",phonetic:"/ˈdʌmplɪŋ/",chinese:"饺子"},{english:"vegetable",phonetic:"/ˈvedʒtəbl/",chinese:"蔬菜"},{english:"soup",phonetic:"/suːp/",chinese:"汤"},{english:"sick",phonetic:"/sɪk/",chinese:"生病的"},{english:"kindest",phonetic:"/ˈkaɪndɪst/",chinese:"最善良的"}]},{id:"10",title:"My Dad",titleCn:"我的爸爸",image:"/images/10我的爸爸.jpg",englishText:`My dad is a superman in my heart. He is tall, strong, and brave.

He works very hard every day. He often comes home late at night.

My dad likes to play basketball with me on weekends. We have so much fun together.

He teaches me how to swim. He says I am a natural swimmer.

When I am scared, he says, "Be brave! You can do it!"

My dad loves me and my mom forever. I will be his little girl forever.`,chineseText:`在我心里，爸爸是一个超人。他又高又强壮又勇敢。

他每天都很努力工作。他经常很晚才回家。

我爸爸喜欢在周末和我一起打篮球。我们在一起非常开心。

他教我游泳。他说我是天生的游泳选手。

当我害怕的时候，他说："要勇敢！你可以的！"

爸爸永远爱我和妈妈。我永远是他的小女孩。`,vocabularies:[{english:"dad",phonetic:"/dæd/",chinese:"爸爸"},{english:"superman",phonetic:"/ˈsuːpərmæn/",chinese:"超人"},{english:"strong",phonetic:"/strɔːŋ/",chinese:"强壮的"},{english:"brave",phonetic:"/breɪv/",chinese:"勇敢的"},{english:"basketball",phonetic:"/ˈbæskɪtbɔːl/",chinese:"篮球"},{english:"scared",phonetic:"/skerd/",chinese:"害怕的"},{english:"forever",phonetic:"/fərˈevər/",chinese:"永远"},{english:"swimmer",phonetic:"/ˈswɪmər/",chinese:"游泳者"}]}],zg=[{id:"11",title:"Dragon Boat Festival",titleCn:"端午节",image:"/images/11端午节.jpg",englishText:`Dragon Boat Festival is on the fifth day of the fifth lunar month.

On this day, people eat zongzi. It is made of sticky rice with different flavors.

My mom makes the best zongzi. She puts red beans and meat inside. They are so delicious!

People also watch dragon boat races. The boats look like dragons. The teams row together very fast.

I learn that the festival is to remember Qu Yuan. He was a great poet. Happy Dragon Boat Festival!`,chineseText:`端午节在农历五月初五。

这一天，人们吃粽子。粽子是用糯米做的，有不同的口味。

我妈妈做的粽子最好吃。她放了红豆和肉在里面。太好吃了！

人们还观看龙舟比赛。龙舟看起来像龙。队伍划得非常快。

我知道了这个节日是为了纪念屈原。他是一位伟大的诗人。端午节快乐！`,vocabularies:[{english:"Dragon Boat Festival",phonetic:"/ˈdræɡən boʊt ˈfestɪvl/",chinese:"端午节"},{english:"zongzi",phonetic:"/ˈzɔːŋzi/",chinese:"粽子"},{english:"sticky rice",phonetic:"/ˈstɪki raɪs/",chinese:"糯米"},{english:"dragon boat",phonetic:"/ˈdræɡən boʊt/",chinese:"龙舟"},{english:"race",phonetic:"/reɪs/",chinese:"比赛"},{english:"row",phonetic:"/roʊ/",chinese:"划(船)"},{english:"poet",phonetic:"/ˈpoʊɪt/",chinese:"诗人"},{english:"lunar month",phonetic:"/ˈluːnər mʌnθ/",chinese:"农历月份"}]},{id:"12",title:"Dragon Boat Racing",titleCn:"赛龙舟",image:"/images/12赛龙舟.jpg",englishText:`Today we go to watch the dragon boat race. It is so exciting!

The dragon boats are very long. They have colorful heads and tails. They look like real dragons.

There are twenty people in each boat. One person beats a drum. The others row the boat.

We cheer for our favorite team. "Come on! Come on!" we shout.

The boats race very fast on the river. The first team to finish wins. What a wonderful day!`,chineseText:`今天我们去看龙舟比赛。太激动人心了！

龙舟非常长。它们有色彩缤纷的船头和船尾。它们看起来像真的龙。

每条船上有二十个人。一个人打鼓。其他人划船。

我们为我们最喜欢的队伍加油。"加油！加油！"我们喊。

船在河上飞快地前进。最先到达的队伍获胜。多美好的一天啊！`,vocabularies:[{english:"dragon boat",phonetic:"/ˈdræɡən boʊt/",chinese:"龙舟"},{english:"race",phonetic:"/reɪs/",chinese:"比赛"},{english:"exciting",phonetic:"/ɪkˈsaɪtɪŋ/",chinese:"令人兴奋的"},{english:"drum",phonetic:"/drʌm/",chinese:"鼓"},{english:"row",phonetic:"/roʊ/",chinese:"划(船)"},{english:"cheer",phonetic:"/tʃɪr/",chinese:"加油"},{english:"river",phonetic:"/ˈrɪvər/",chinese:"河"},{english:"colorful",phonetic:"/ˈkʌlərfl/",chinese:"色彩缤纷的"}]},{id:"13",title:"Qu Yuan",titleCn:"屈原",image:"/images/13屈原.jpg",englishText:`Qu Yuan was a great poet in ancient China. He lived a very long time ago.

He loved his country very much. He wrote many famous poems.

When his country was in danger, he was very sad. He could not help his people.

Qu Yuan jumped into the Miluo River. People were very sad. They threw rice into the river to protect him.

Now we have Dragon Boat Festival to remember him. His poems are still famous today.`,chineseText:`屈原是中国古代的一位伟大诗人。他生活在很久以前。

他非常热爱他的国家。他写了很多著名的诗。

当他的国家处于危险中时，他非常伤心。他无法帮助他的人民。

屈原跳进了汨罗江。人们非常伤心。他们往江里扔米饭来保护他。

现在我们有端午节来纪念他。他的诗至今仍然著名。`,vocabularies:[{english:"poet",phonetic:"/ˈpoʊɪt/",chinese:"诗人"},{english:"ancient",phonetic:"/ˈeɪnʃənt/",chinese:"古代的"},{english:"poem",phonetic:"/ˈpoʊɪm/",chinese:"诗"},{english:"country",phonetic:"/ˈkʌntri/",chinese:"国家"},{english:"danger",phonetic:"/ˈdeɪndʒər/",chinese:"危险"},{english:"river",phonetic:"/ˈrɪvər/",chinese:"河"},{english:"protect",phonetic:"/prəˈtekt/",chinese:"保护"},{english:"famous",phonetic:"/ˈfeɪməs/",chinese:"著名的"}]},{id:"14",title:"Making Zongzi",titleCn:"包粽子",image:"/images/14包粽子.jpg",englishText:`Today my grandma teaches me how to make zongzi. I am so excited!

First, we wash the sticky rice. Then we soak the bamboo leaves in water.

We put the rice on the leaves. Next, we add sweet or salty filling. I like the sweet one best.

We fold the leaves and tie them with a string. It is not easy. I try three times.

After one hour, the zongzi are ready! They are soft and tasty. I love helping grandma!`,chineseText:`今天我奶奶教我如何包粽子。我太兴奋了！

首先，我们洗糯米。然后我们把竹叶泡在水里。

我们把糯米放在叶子上。接着，我们加甜的或咸的馅料。我最喜欢甜的。

我们把叶子折起来，用绳子绑好。这不容易。我试了三次。

一个小时后，粽子做好了！它们又软又好吃。我喜欢帮奶奶！`,vocabularies:[{english:"zongzi",phonetic:"/ˈzɔːŋzi/",chinese:"粽子"},{english:"sticky rice",phonetic:"/ˈstɪki raɪs/",chinese:"糯米"},{english:"bamboo leaves",phonetic:"/ˌbæmˈbuː liːvz/",chinese:"竹叶"},{english:"soak",phonetic:"/soʊk/",chinese:"浸泡"},{english:"filling",phonetic:"/ˈfɪlɪŋ/",chinese:"馅料"},{english:"fold",phonetic:"/foʊld/",chinese:"折叠"},{english:"tie",phonetic:"/taɪ/",chinese:"绑"},{english:"tasty",phonetic:"/ˈteɪsti/",chinese:"美味的"}]},{id:"15",title:"Learning to Swim",titleCn:"学游泳",image:"/images/15学游泳.jpg",englishText:`Last summer, I learned to swim. It was scary at first.

My dad took me to the swimming pool. The water was cool and blue.

At first, I was very scared. I held onto the edge tightly. Dad said, "Trust me!"

He taught me to kick my legs and move my arms. "Breathe in, breathe out," he said.

After many practices, I could swim by myself! I felt so proud. Swimming is so much fun!`,chineseText:`去年夏天，我学了游泳。一开始很可怕。

我爸爸带我去游泳池。水又凉又蓝。

一开始，我非常害怕。我紧紧抓住池边。爸爸说："相信我！"

他教我踢腿和划手臂。"吸气，呼气，"他说。

经过很多次练习后，我可以自己游了！我感到非常自豪。游泳太有趣了！`,vocabularies:[{english:"swim",phonetic:"/swɪm/",chinese:"游泳"},{english:"scared",phonetic:"/skerd/",chinese:"害怕的"},{english:"swimming pool",phonetic:"/ˈswɪmɪŋ puːl/",chinese:"游泳池"},{english:"kick",phonetic:"/kɪk/",chinese:"踢"},{english:"leg",phonetic:"/leɡ/",chinese:"腿"},{english:"arm",phonetic:"/ɑːrm/",chinese:"手臂"},{english:"breathe",phonetic:"/briːð/",chinese:"呼吸"},{english:"proud",phonetic:"/praʊd/",chinese:"自豪的"}]},{id:"16",title:"Doing Homework",titleCn:"写作业",image:"/images/16写作业.jpg",englishText:`Every day after school, I do my homework. It is my daily task.

First, I take out my books and pencils from my schoolbag. I put them on the desk.

Then I start with Chinese. I practice writing characters carefully. Good handwriting is important.

Next is Math. I count numbers and solve problems. Some problems are hard, but I never give up.

Last is English. I read words aloud and memorize new vocabulary. Homework makes me smarter!`,chineseText:`每天放学后，我做作业。这是我每天的任务。

首先，我从书包里拿出书本和铅笔。我把它们放在桌子上。

然后我从语文开始。我认真地练习写字。好的书写很重要。

接下来是数学。我数数字和解题。有些题目很难，但我从不放弃。

最后是英语。我大声读单词并记住新词汇。作业让我更聪明！`,vocabularies:[{english:"homework",phonetic:"/ˈhoʊmwɜːrk/",chinese:"作业"},{english:"schoolbag",phonetic:"/ˈskuːlbæɡ/",chinese:"书包"},{english:"desk",phonetic:"/desk/",chinese:"书桌"},{english:"character",phonetic:"/ˈkærəktər/",chinese:"汉字"},{english:"handwriting",phonetic:"/ˈhændraɪtɪŋ/",chinese:"书写"},{english:"Math",phonetic:"/mæθ/",chinese:"数学"},{english:"problem",phonetic:"/ˈprɑːbləm/",chinese:"问题"},{english:"memorize",phonetic:"/ˈmeməraɪz/",chinese:"记住"}]},{id:"17",title:"My Bicycle",titleCn:"我的自行车",image:"/images/17我的自行车.jpg",englishText:`I have a new red bicycle. It is my birthday present from my dad.

My bicycle has a basket in the front. I can put my schoolbag inside.

Every morning, I ride my bicycle to school. The wind blows on my face. I feel free and happy.

On weekends, I ride to the park with my friends. We race each other. I always win!

Taking care of my bicycle is my responsibility. I clean it and pump the tires every week.`,chineseText:`我有一辆新的红色自行车。它是爸爸送我的生日礼物。

我的自行车前面有一个篮子。我可以把书包放在里面。

每天早上，我骑自行车去学校。风吹在脸上。我感到自由和快乐。

周末，我和朋友们骑到公园。我们互相比赛。我总是赢！

照顾我的自行车是我的责任。我每周清洗它并给轮胎充气。`,vocabularies:[{english:"bicycle",phonetic:"/ˈbaɪsɪkl/",chinese:"自行车"},{english:"present",phonetic:"/ˈpreznt/",chinese:"礼物"},{english:"basket",phonetic:"/ˈbæskɪt/",chinese:"篮子"},{english:"ride",phonetic:"/raɪd/",chinese:"骑"},{english:"wind",phonetic:"/wɪnd/",chinese:"风"},{english:"race",phonetic:"/reɪs/",chinese:"比赛"},{english:"responsibility",phonetic:"/rɪˌspɑːnsəˈbɪləti/",chinese:"责任"},{english:"tire",phonetic:"/ˈtaɪər/",chinese:"轮胎"}]},{id:"18",title:"My Room",titleCn:"我的房间",image:"/images/18我的房间.jpg",englishText:`I have my own small room. It is my favorite place in the house.

My bed is near the window. I can see the beautiful stars at night.

There is a desk by the wall. I do homework and read books there.

My bookshelf is full of picture books. I love reading stories before sleep.

I keep my room clean and tidy. I make my bed every morning. This is my happy little world!`,chineseText:`我有自己的小房间。它是我在家里最喜欢的地方。

我的床在窗户旁边。晚上我可以看见美丽的星星。

墙边有一张书桌。我在那里做作业和读书。

我的书架上放满了图画书。我喜欢睡前看故事。

我保持房间干净整洁。我每天早上整理床铺。这是我快乐的小世界！`,vocabularies:[{english:"room",phonetic:"/ruːm/",chinese:"房间"},{english:"bed",phonetic:"/bed/",chinese:"床"},{english:"window",phonetic:"/ˈwɪndoʊ/",chinese:"窗户"},{english:"desk",phonetic:"/desk/",chinese:"书桌"},{english:"bookshelf",phonetic:"/ˈbʊkʃelf/",chinese:"书架"},{english:"tidy",phonetic:"/ˈtaɪdi/",chinese:"整洁的"},{english:"star",phonetic:"/stɑːr/",chinese:"星星"},{english:"world",phonetic:"/wɜːrld/",chinese:"世界"}]},{id:"19",title:"My Weekend",titleCn:"我的周末",image:"/images/19我的周末.jpg",englishText:`I love weekends! I have two days off from school.

On Saturday morning, I sleep late. Then I have breakfast slowly. No hurry!

In the afternoon, I often go to the zoo with my family. I like to watch the monkeys. They are so clever and funny.

On Sunday, I visit my grandparents. We have a big lunch together. Grandma cooks my favorite dishes.

Sunday evening, I prepare my school things for next week. Weekends are always wonderful!`,chineseText:`我喜欢周末！我有两天不用上学。

星期六早上，我睡懒觉。然后慢慢地吃早餐。不用着急！

下午，我经常和家人去动物园。我喜欢看猴子。它们又聪明又有趣。

星期天，我去看望爷爷奶奶。我们一起吃一顿丰盛的午餐。奶奶做我最喜欢的菜。

星期天晚上，我整理下周的学校用品。周末总是很美好！`,vocabularies:[{english:"weekend",phonetic:"/ˈwiːkend/",chinese:"周末"},{english:"Saturday",phonetic:"/ˈsætərdeɪ/",chinese:"星期六"},{english:"Sunday",phonetic:"/ˈsʌndeɪ/",chinese:"星期天"},{english:"zoo",phonetic:"/zuː/",chinese:"动物园"},{english:"monkey",phonetic:"/ˈmʌŋki/",chinese:"猴子"},{english:"grandparent",phonetic:"/ˈɡrændperənt/",chinese:"祖父母"},{english:"lunch",phonetic:"/lʌntʃ/",chinese:"午餐"},{english:"wonderful",phonetic:"/ˈwʌndərfl/",chinese:"美好的"}]},{id:"20",title:"Father's Day",titleCn:"父亲节",image:"/images/20父亲节.jpg",englishText:`Father's Day is on the third Sunday of June. It is a special day for my dad.

I want to give my dad the best gift. I make a card with my own hands.

I draw a big heart on the card. Inside, I write "I love you, Dad!"

I help mom cook a delicious dinner. We buy a big cake. Dad does not know about the surprise!

When Dad sees the card, he hugs me tightly. His eyes are wet. "This is the best gift ever," he says.`,chineseText:`父亲节在六月第三个星期日。这是我爸爸的特殊日子。

我想给爸爸最好的礼物。我亲手做了一张卡片。

我在卡片上画了一颗大心。在里面，我写"我爱您，爸爸！"

我帮妈妈做了一顿美味的晚餐。我们买了一个大蛋糕。爸爸不知道这个惊喜！

当爸爸看到卡片时，他紧紧拥抱我。他的眼睛湿润了。"这是最好的礼物，"他说。`,vocabularies:[{english:"Father's Day",phonetic:"/ˈfɑːðərz deɪ/",chinese:"父亲节"},{english:"special",phonetic:"/ˈspeʃl/",chinese:"特殊的"},{english:"gift",phonetic:"/ɡɪft/",chinese:"礼物"},{english:"card",phonetic:"/kɑːrd/",chinese:"卡片"},{english:"heart",phonetic:"/hɑːrt/",chinese:"心"},{english:"hug",phonetic:"/hʌɡ/",chinese:"拥抱"},{english:"surprise",phonetic:"/sərˈpraɪz/",chinese:"惊喜"},{english:"wet",phonetic:"/wet/",chinese:"湿润的"}]}],Ng=[{id:"21",title:"My Body",titleCn:"我的身体",image:"/images/21我的身体.jpg",englishText:`I have one head, one body, two arms, and two legs. This is my body.

My head is round. I have two eyes to see, two ears to hear, and one nose to smell.

My mouth helps me eat and speak. I brush my teeth twice a day.

My arms can hug my parents. My legs can run and jump. I use my hands to draw and write.

I take care of my body. I eat healthy food, exercise every day, and sleep early. My body is amazing!`,chineseText:`我有一个头、一个身体、两条胳膊和两条腿。这是我的身体。

我的头是圆圆的。我有两只眼睛看、两只耳朵听、一个鼻子闻。

我的嘴巴帮我吃东西和说话。我每天刷两次牙。

我的胳膊可以拥抱爸爸妈妈。我的腿可以跑和跳。我用手画画和写字。

我照顾我的身体。我吃健康的食物、每天锻炼、早睡早起。我的身体真神奇！`,vocabularies:[{english:"body",phonetic:"/ˈbɑːdi/",chinese:"身体"},{english:"head",phonetic:"/hed/",chinese:"头"},{english:"arm",phonetic:"/ɑːrm/",chinese:"手臂"},{english:"leg",phonetic:"/leɡ/",chinese:"腿"},{english:"eye",phonetic:"/aɪ/",chinese:"眼睛"},{english:"ear",phonetic:"/ɪr/",chinese:"耳朵"},{english:"nose",phonetic:"/noʊz/",chinese:"鼻子"},{english:"mouth",phonetic:"/maʊθ/",chinese:"嘴巴"}]},{id:"22",title:"The Beach",titleCn:"海滩",image:"/images/22海滩.jpg",englishText:`Last summer, my family went to the beach. It was so beautiful!

The sand was soft and yellow. The waves were big and blue. I could hear the ocean.

I built a big sandcastle with my dad. It had many towers and a big door.

I swam in the sea. The water was salty but cool. I collected beautiful shells.

When the sun set, we sat together watching the beautiful colors in the sky. It was magical!`,chineseText:`去年夏天，我家人去了海滩。太美了！

沙子又软又黄。海浪又大又蓝。我能听到大海的声音。

我和爸爸一起建了一个大沙堡。它有很多塔楼和一个大门口。

我在海里游泳。水是咸的但很凉快。我收集了美丽的贝壳。

当太阳落山时，我们坐在一起看着天空中美丽的色彩。太神奇了！`,vocabularies:[{english:"beach",phonetic:"/biːtʃ/",chinese:"海滩"},{english:"sand",phonetic:"/sænd/",chinese:"沙子"},{english:"wave",phonetic:"/weɪv/",chinese:"海浪"},{english:"ocean",phonetic:"/ˈoʊʃn/",chinese:"大海"},{english:"sandcastle",phonetic:"/ˈsændkæsl/",chinese:"沙堡"},{english:"shell",phonetic:"/ʃel/",chinese:"贝壳"},{english:"sunset",phonetic:"/ˈsʌnset/",chinese:"日落"},{english:"magical",phonetic:"/ˈmædʒɪkl/",chinese:"神奇的"}]},{id:"23",title:"Watermelon",titleCn:"西瓜",image:"/images/23西瓜.jpg",englishText:`Summer is here! Watermelon is the king of fruits.

A watermelon is big and round. It is green on the outside and red on the inside.

The best way to eat it is cold. Cut it into pieces and share with family.

It has many black seeds inside. Do not eat the seeds! They are not good for you.

Watermelon is sweet and juicy. It can make you feel cool on hot summer days. Yummy!`,chineseText:`夏天来了！西瓜是水果之王。

西瓜又大又圆。外面是绿色的，里面是红色的。

最好的吃法是冰凉的。切成块和家人分享。

里面有很多黑色的籽。不要吃籽！它们对你不好。

西瓜又甜又多汁。它可以让你在炎热的夏天感到凉爽。好吃！`,vocabularies:[{english:"watermelon",phonetic:"/ˈwɔːtərmelən/",chinese:"西瓜"},{english:"fruit",phonetic:"/fruːt/",chinese:"水果"},{english:"round",phonetic:"/raʊnd/",chinese:"圆的"},{english:"seed",phonetic:"/siːd/",chinese:"籽"},{english:"sweet",phonetic:"/swiːt/",chinese:"甜的"},{english:"juicy",phonetic:"/ˈdʒuːsi/",chinese:"多汁的"},{english:"piece",phonetic:"/piːs/",chinese:"块"},{english:"yummy",phonetic:"/ˈjʌmi/",chinese:"好吃的"}]},{id:"24",title:"Banana",titleCn:"香蕉",image:"/images/24香蕉.jpg",englishText:`Banana is my favorite fruit. I eat one every day.

A banana is long and yellow. It grows on a big plant in tropical places.

When it is green, it is not sweet. When it turns yellow, it is ripe and sweet.

Peel it before you eat. The peel is not edible. Be careful!

Bananas are good for you. They have lots of vitamins. They give me energy to play!`,chineseText:`香蕉是我最喜欢的水果。我每天吃一根。

香蕉长长的，是黄色的。它生长在热带地区的大植物上。

当它是绿色的时候，它不甜。当它变黄时，它成熟了，很甜。

吃之前要剥皮。皮不能吃！要注意！

香蕉对你有好处。它们有很多维生素。它们给我能量去玩！`,vocabularies:[{english:"banana",phonetic:"/bəˈnænə/",chinese:"香蕉"},{english:"favorite",phonetic:"/ˈfeɪvərɪt/",chinese:"最喜欢的"},{english:"fruit",phonetic:"/fruːt/",chinese:"水果"},{english:"yellow",phonetic:"/ˈjeloʊ/",chinese:"黄色的"},{english:"ripe",phonetic:"/raɪp/",chinese:"成熟的"},{english:"peel",phonetic:"/piːl/",chinese:"剥皮"},{english:"vitamin",phonetic:"/ˈvaɪtəmɪn/",chinese:"维生素"},{english:"energy",phonetic:"/ˈenərdʒi/",chinese:"能量"}]},{id:"25",title:"Strawberry",titleCn:"草莓",image:"/images/25草莓.jpg",englishText:`Strawberries are small, red, and heart-shaped. They look so cute!

In spring, we can pick strawberries on the farm. I go with my mom.

Fresh strawberries are sweet and a little sour. They smell so good!

Mom makes strawberry jam. We spread it on bread. It is so delicious!

Strawberries have vitamin C. They are good for your skin and your eyes. I love strawberries!`,chineseText:`草莓小小的、红红的，是心形的。它们看起来好可爱！

春天的时候，我们可以去农场摘草莓。我和妈妈一起去。

新鲜的草莓又甜又有点酸。它们的味道好香！

妈妈做草莓果酱。我们把它涂在面包上。太美味了！

草莓含有维生素C。它们对你的皮肤和眼睛都有好处。我爱草莓！`,vocabularies:[{english:"strawberry",phonetic:"/ˈstrɔːberi/",chinese:"草莓"},{english:"heart-shaped",phonetic:"/hɑːrt ʃeɪpt/",chinese:"心形的"},{english:"spring",phonetic:"/sprɪŋ/",chinese:"春天"},{english:"farm",phonetic:"/fɑːrm/",chinese:"农场"},{english:"sour",phonetic:"/ˈsaʊər/",chinese:"酸的"},{english:"jam",phonetic:"/dʒæm/",chinese:"果酱"},{english:"vitamin C",phonetic:"/ˈvaɪtəmɪn siː/",chinese:"维生素C"},{english:"skin",phonetic:"/skɪn/",chinese:"皮肤"}]},{id:"26",title:"Apple",titleCn:"苹果",image:"/images/26苹果.jpg",englishText:`An apple a day keeps the doctor away. This is what my grandma says.

Apples are red, green, or yellow. They grow on apple trees in autumn.

Bite into an apple. Crunch crunch! It is sweet and juicy.

Apples are very healthy. They have fiber and vitamin C. They help your tummy.

I bring an apple to school every day. It is my favorite snack. Do you like apples too?`,chineseText:`一天一苹果，医生远离我。这是奶奶说的话。

苹果有红色的、绿色的或黄色的。它们在秋天长在苹果树上。

咬一口苹果。嘎吱嘎吱！又甜又多汁。

苹果非常健康。它们含有纤维和维生素C。它们对你的肚子有好处。

我每天带一个苹果去学校。它是我最喜欢的零食。你也喜欢苹果吗？`,vocabularies:[{english:"apple",phonetic:"/ˈæpl/",chinese:"苹果"},{english:"doctor",phonetic:"/ˈdɑːktər/",chinese:"医生"},{english:"autumn",phonetic:"/ˈɔːtəm/",chinese:"秋天"},{english:"crunch",phonetic:"/krʌntʃ/",chinese:"嘎吱声"},{english:"healthy",phonetic:"/ˈhelθi/",chinese:"健康的"},{english:"fiber",phonetic:"/ˈfaɪbər/",chinese:"纤维"},{english:"snack",phonetic:"/snæk/",chinese:"零食"},{english:"tummy",phonetic:"/ˈtʌmi/",chinese:"肚子"}]},{id:"27",title:"Avocado",titleCn:"牛油果",image:"/images/27牛油果.jpg",englishText:`Have you ever tried avocado? It is a special fruit from tropical places.

An avocado is green and oval-shaped. Its skin is rough, but the inside is soft.

The flesh is light green. It tastes like butter, but healthier!

People make avocado toast for breakfast. They also make guacamole for chips.

Avocado has good fat. It is good for your brain. My mom says it makes you smart!`,chineseText:`你吃过牛油果吗？它是一种来自热带地区的特殊水果。

牛油果是绿色的，呈椭圆形。它的皮很粗糙，但里面很软。

果肉是浅绿色的。吃起来像黄油，但更健康！

人们早餐做牛油果吐司。他们还做鳄梨酱配薯片。

牛油果含有好脂肪。它对大脑有好处。我妈妈说它让你更聪明！`,vocabularies:[{english:"avocado",phonetic:"/ˌævəˈkɑːdoʊ/",chinese:"牛油果"},{english:"tropical",phonetic:"/ˈtrɑːpɪkl/",chinese:"热带的"},{english:"oval",phonetic:"/ˈoʊvl/",chinese:"椭圆形的"},{english:"flesh",phonetic:"/fleʃ/",chinese:"果肉"},{english:"butter",phonetic:"/ˈbʌtər/",chinese:"黄油"},{english:"toast",phonetic:"/toʊst/",chinese:"吐司"},{english:"brain",phonetic:"/breɪn/",chinese:"大脑"},{english:"smart",phonetic:"/smɑːrt/",chinese:"聪明的"}]},{id:"28",title:"Durian",titleCn:"榴莲",image:"/images/28榴莲.jpg",englishText:`Durian is called the king of fruits. It is very famous in Southeast Asia.

A durian is big and round with spikes on the outside. Be careful, or it will hurt!

Inside, there are yellow pods. They smell very strong. Some people love it, some hate it.

The taste is creamy and sweet. It is like custard. But the smell is very different!

Not all people like durian. But in my family, we all love it. It is a special treat!`,chineseText:`榴莲被称为水果之王。它在东南亚非常著名。

榴莲又大又圆，外面有刺。小心点，不然会扎伤你！

里面是黄色的果肉瓣。味道很浓。有些人喜欢，有些讨厌。

味道奶油般细腻又甜。像蛋奶冻。但气味很不一样！

不是所有人都喜欢榴莲。但在我家，我们都喜欢它。这是一种特别的享受！`,vocabularies:[{english:"durian",phonetic:"/ˈdʊriən/",chinese:"榴莲"},{english:"famous",phonetic:"/ˈfeɪməs/",chinese:"著名的"},{english:"Southeast Asia",phonetic:"/ˌsaʊθˈiːst ˈeɪʒə/",chinese:"东南亚"},{english:"spike",phonetic:"/spaɪk/",chinese:"刺"},{english:"creamy",phonetic:"/ˈkriːmi/",chinese:"奶油般的"},{english:"custard",phonetic:"/ˈkʌstərd/",chinese:"蛋奶冻"},{english:"smell",phonetic:"/smel/",chinese:"气味"},{english:"treat",phonetic:"/triːt/",chinese:"享受"}]},{id:"29",title:"My Hobby",titleCn:"我的爱好",image:"/images/29我的爱好.jpg",englishText:`Everyone has a hobby. A hobby makes our life more interesting.

My hobby is drawing pictures. I like to draw with colored pencils.

When I draw, I feel happy and peaceful. I can draw anything I imagine.

Sometimes I draw my family. Sometimes I draw animals and flowers. My mom puts my drawings on the wall.

My dream is to be an artist one day. I will keep practicing and never give up!`,chineseText:`每个人都有一个爱好。爱好让我们的生活更有趣。

我的爱好是画画。我喜欢用彩铅笔画画。

当我画画的时候，我感到快乐和平静。我可以画任何我想象的东西。

有时候我画我的家人。有时候我画动物和花朵。妈妈把我的画挂在墙上。

我的梦想是有一天成为一名艺术家。我会继续练习，永不放弃！`,vocabularies:[{english:"hobby",phonetic:"/ˈhɑːbi/",chinese:"爱好"},{english:"draw",phonetic:"/drɔː/",chinese:"画"},{english:"colored pencil",phonetic:"/ˈkʌlərd ˈpensl/",chinese:"彩铅笔"},{english:"peaceful",phonetic:"/ˈpiːsfl/",chinese:"平静的"},{english:"imagine",phonetic:"/ɪˈmædʒɪn/",chinese:"想象"},{english:"artist",phonetic:"/ˈɑːrtɪst/",chinese:"艺术家"},{english:"practice",phonetic:"/ˈpræktɪs/",chinese:"练习"},{english:"dream",phonetic:"/driːm/",chinese:"梦想"}]},{id:"30",title:"My Face",titleCn:"我的脸",image:"/images/30我的脸.jpg",englishText:`Look at my face in the mirror. What can you see?

I have an oval face with two big eyes. My eyes are brown and shiny.

I have a small nose and a cute mouth. I smile and show my white teeth.

My ears are on both sides. I can hear the birds singing with my ears.

My hair is black and straight. I wash my face every morning and night. I keep my face clean!`,chineseText:`看镜子里的我的脸。你能看到什么？

我有一张椭圆形的脸和两只大眼睛。我的眼睛是棕色的，亮晶晶的。

我有一个小鼻子和一张可爱的嘴巴。我微笑时露出白色的牙齿。

我的耳朵在两边。我能用耳朵听到鸟儿唱歌。

我的头发又黑又直。我每天早晚洗脸。我保持脸部清洁！`,vocabularies:[{english:"face",phonetic:"/feɪs/",chinese:"脸"},{english:"mirror",phonetic:"/ˈmɪrər/",chinese:"镜子"},{english:"oval",phonetic:"/ˈoʊvl/",chinese:"椭圆形的"},{english:"brown",phonetic:"/braʊn/",chinese:"棕色的"},{english:"nose",phonetic:"/noʊz/",chinese:"鼻子"},{english:"teeth",phonetic:"/tiːθ/",chinese:"牙齿"},{english:"ear",phonetic:"/ɪr/",chinese:"耳朵"},{english:"straight",phonetic:"/streɪt/",chinese:"直的"}]}],Pg=[{id:"31",title:"My Mom",titleCn:"我的妈妈",image:"/images/31我的妈妈.jpg",englishText:`My mom is the best mom in the world. She is kind and beautiful.

Every morning, she wakes up early to make breakfast for me. She cooks eggs and makes toast.

She helps me with my homework after school. She is very patient when I make mistakes.

On weekends, she takes me to the park. We fly kites and ride bikes together.

When I am sick, she takes care of me day and night. I love my mom more than anything!`,chineseText:`我妈妈是世界上最好的妈妈。她又善良又漂亮。

每天早上，她早起为我做早餐。她煮鸡蛋、做吐司。

放学后她帮我做作业。当我犯错时她非常有耐心。

周末，她带我去公园。我们一起放风筝、骑自行车。

当我生病的时候，她日日夜夜照顾我。我爱我的妈妈胜过一切！`,vocabularies:[{english:"mom",phonetic:"/mɑːm/",chinese:"妈妈"},{english:"kind",phonetic:"/kaɪnd/",chinese:"善良的"},{english:"beautiful",phonetic:"/ˈbjuːtɪfl/",chinese:"漂亮的"},{english:"breakfast",phonetic:"/ˈbrekfəst/",chinese:"早餐"},{english:"patient",phonetic:"/ˈpeɪʃnt/",chinese:"耐心的"},{english:"weekend",phonetic:"/ˈwiːkend/",chinese:"周末"},{english:"sick",phonetic:"/sɪk/",chinese:"生病的"},{english:"anything",phonetic:"/ˈeniθɪŋ/",chinese:"任何事"}]},{id:"32",title:"My Grandma's House",titleCn:"我的外婆",image:"/images/32我的外婆.jpg",englishText:`My grandma lives in a small village. I visit her every summer.

Her house is old but cozy. There is a big tree in front of the house.

She grows vegetables in her garden. Tomatoes, cucumbers, and peppers. They are all fresh!

At night, she tells me stories under the big tree. The stars are so bright in the village.

Her home is my favorite place. I feel safe and happy there. I miss her when I am away!`,chineseText:`我外婆住在一个小村庄里。我每年夏天去看她。

她的房子又旧又舒适。房子前面有一棵大树。

她在菜园里种蔬菜。西红柿、黄瓜和辣椒。都很新鲜！

晚上，她在大树下给我讲故事。村里的星星非常明亮。

她的家是我最喜欢的地方。在那里我感到安全和快乐。当我不在那里的时候，我想念她！`,vocabularies:[{english:"grandma",phonetic:"/ˈɡrænmɑː/",chinese:"外婆/奶奶"},{english:"village",phonetic:"/ˈvɪlɪdʒ/",chinese:"村庄"},{english:"cozy",phonetic:"/ˈkoʊzi/",chinese:"舒适的"},{english:"vegetable",phonetic:"/ˈvedʒtəbl/",chinese:"蔬菜"},{english:"tomato",phonetic:"/təˈmeɪtoʊ/",chinese:"西红柿"},{english:"cucumber",phonetic:"/ˈkjuːkʌmbər/",chinese:"黄瓜"},{english:"star",phonetic:"/stɑːr/",chinese:"星星"},{english:"miss",phonetic:"/mɪs/",chinese:"想念"}]},{id:"33",title:"My Family",titleCn:"我的家庭",image:"/images/33我的家庭.jpg",englishText:`There are five people in my family. We love each other very much.

My grandpa and grandma are the oldest. They tell us old stories and teach us good manners.

My dad works in an office. He is busy but always has time for me on weekends.

My mom takes care of our home. She cooks delicious food and cleans our house every day.

I have a little sister. She is only five years old. She is cute and always follows me around.`,chineseText:`我家有五口人。我们非常相爱。

爷爷和奶奶年纪最大。他们给我们讲古老的故事，教我们好的礼仪。

我爸爸在办公室工作。他很忙，但周末总是有时间陪我。

我妈妈照顾我们的家。她每天做美味的食物，打扫我们的房子。

我有一个小妹妹。她只有五岁。她很可爱，总是跟着我。`,vocabularies:[{english:"family",phonetic:"/ˈfæməli/",chinese:"家庭"},{english:"grandpa",phonetic:"/ˈɡrænpɑː/",chinese:"爷爷/外公"},{english:"grandma",phonetic:"/ˈɡrænmɑː/",chinese:"奶奶/外婆"},{english:"office",phonetic:"/ˈɔːfɪs/",chinese:"办公室"},{english:"busy",phonetic:"/ˈbɪzi/",chinese:"忙碌的"},{english:"sister",phonetic:"/ˈsɪstər/",chinese:"姐姐/妹妹"},{english:"follow",phonetic:"/ˈfɑːloʊ/",chinese:"跟随"},{english:"manner",phonetic:"/ˈmænər/",chinese:"礼仪"}]},{id:"34",title:"My Schoolbag",titleCn:"我的书包",image:"/images/34我的书包.jpg",englishText:`I have a new schoolbag. It is blue and has many pockets.

Every morning, I pack my schoolbag carefully. I put my books, pencils, and eraser inside.

My schoolbag also has a water bottle pocket. I bring fresh water to school every day.

It is not too heavy, but not too light. Just the right weight for me.

I take good care of my schoolbag. I clean it every week. It is my best school friend!`,chineseText:`我有一个新书包。它是蓝色的，有很多口袋。

每天早上，我仔细整理书包。我把书本、铅笔和橡皮放进里面。

我的书包还有一个水壶袋。我每天带新鲜的水去学校。

它不太重，但也不太轻。对我来说刚刚好。

我好好照顾我的书包。我每周清洗它。它是我最好的学校朋友！`,vocabularies:[{english:"schoolbag",phonetic:"/ˈskuːlbæɡ/",chinese:"书包"},{english:"pocket",phonetic:"/ˈpɑːkɪt/",chinese:"口袋"},{english:"pack",phonetic:"/pæk/",chinese:"整理"},{english:"eraser",phonetic:"/ɪˈreɪsər/",chinese:"橡皮擦"},{english:"bottle",phonetic:"/ˈbɑːtl/",chinese:"瓶子"},{english:"weight",phonetic:"/weɪt/",chinese:"重量"},{english:"carefully",phonetic:"/ˈkerfəli/",chinese:"仔细地"},{english:"friend",phonetic:"/frend/",chinese:"朋友"}]},{id:"35",title:"My Breakfast",titleCn:"我的早餐",image:"/images/35我的早餐.jpg",englishText:`Breakfast is the most important meal of the day. I never skip it.

Every morning, I have milk and bread with butter. Sometimes I have eggs.

My mom makes fresh soy milk for me. It is hot and sweet. So delicious!

I also eat some fruit. An apple or a banana. Fruits are good for my health.

After breakfast, I feel energetic and ready for school. Breakfast gives me energy to learn!`,chineseText:`早餐是一天中最重要的一餐。我从不跳过它。

每天早上，我喝牛奶、吃面包加黄油。有时我吃鸡蛋。

我妈妈给我做新鲜豆浆。它又热又甜。太好喝了！

我也吃一些水果。一个苹果或一根香蕉。水果对我的健康有好处。

早餐后，我感到精力充沛，准备好去学校。早餐给我学习的能量！`,vocabularies:[{english:"breakfast",phonetic:"/ˈbrekfəst/",chinese:"早餐"},{english:"important",phonetic:"/ɪmˈpɔːrtnt/",chinese:"重要的"},{english:"meal",phonetic:"/miːl/",chinese:"一餐"},{english:"milk",phonetic:"/mɪlk/",chinese:"牛奶"},{english:"bread",phonetic:"/bred/",chinese:"面包"},{english:"soy milk",phonetic:"/sɔɪ mɪlk/",chinese:"豆浆"},{english:"energetic",phonetic:"/ˌenərˈdʒetɪk/",chinese:"精力充沛的"},{english:"health",phonetic:"/helθ/",chinese:"健康"}]},{id:"36",title:"My Classroom",titleCn:"我的教室",image:"/images/36我的教室.jpg",englishText:`My classroom is on the second floor. It is bright and clean.

There are many desks and chairs. Each student has their own desk. My desk is near the window.

We have a big blackboard at the front. Our teacher writes lessons on it every day.

There is a reading corner with many books. I love to read there during free time.

We also have a fish tank. The colorful fish make our classroom lively. I love my classroom!`,chineseText:`我的教室在二楼。它又明亮又干净。

有很多课桌和椅子。每个学生都有自己的课桌。我的桌子在窗户旁边。

前面有一块大黑板。我们的老师每天在上面写教学内容。

有一个阅读角，放着很多书。我喜欢在自由时间在那里看书。

我们还有一个鱼缸。色彩斑斓的鱼让我们的教室充满活力。我爱我的教室！`,vocabularies:[{english:"classroom",phonetic:"/ˈklæsrʊm/",chinese:"教室"},{english:"floor",phonetic:"/flɔːr/",chinese:"楼层"},{english:"desk",phonetic:"/desk/",chinese:"课桌"},{english:"chair",phonetic:"/tʃer/",chinese:"椅子"},{english:"blackboard",phonetic:"/ˈblækbɔːrd/",chinese:"黑板"},{english:"corner",phonetic:"/ˈkɔːrnər/",chinese:"角落"},{english:"fish tank",phonetic:"/fɪʃ tæŋk/",chinese:"鱼缸"},{english:"lively",phonetic:"/ˈlaɪvli/",chinese:"充满活力的"}]},{id:"37",title:"Basketball",titleCn:"篮球",image:"/images/37篮球.jpg",englishText:`I love playing basketball. It is my favorite sport.

I play basketball with my friends after school. We run and jump on the court.

To play basketball, you need to practice a lot. You need to learn how to shoot, pass, and dribble.

My favorite player is Yao Ming. He is very tall and skilled. I want to be like him!

Playing basketball makes me strong and healthy. It also teaches me teamwork.`,chineseText:`我喜欢打篮球。它是我最喜欢的运动。

放学后我和朋友们打篮球。我们在球场上跑跳。

打篮球需要大量练习。你需要学习如何投篮、传球和运球。

我最喜欢的球员是姚明。他又高又有技术。我想成为像他一样的人！

打篮球让我又强壮又健康。它也教会我团队合作。`,vocabularies:[{english:"basketball",phonetic:"/ˈbæskɪtbɔːl/",chinese:"篮球"},{english:"sport",phonetic:"/spɔːrt/",chinese:"运动"},{english:"court",phonetic:"/kɔːrt/",chinese:"球场"},{english:"shoot",phonetic:"/ʃuːt/",chinese:"投篮"},{english:"pass",phonetic:"/pæs/",chinese:"传球"},{english:"dribble",phonetic:"/ˈdrɪbl/",chinese:"运球"},{english:"player",phonetic:"/ˈpleɪər/",chinese:"球员"},{english:"teamwork",phonetic:"/ˈtiːmwɜːrk/",chinese:"团队合作"}]},{id:"38",title:"Monday",titleCn:"星期一",image:"/images/38星期一.jpg",englishText:`Monday is the first day of the school week. I feel a little tired in the morning.

I wake up at half past six. I wash my face and brush my teeth quickly.

I wear my school uniform. I eat a quick breakfast with milk and bread.

On Mondays, we have a flag-raising ceremony. All students stand and sing the national anthem.

After the ceremony, the new week begins. I have Chinese, Math, English, and Art class. Let us have a good week!`,chineseText:`星期一是一周中学校生活的第一天。早上我感到有点困。

我六点半起床。我快速洗脸刷牙。

我穿上校服。我快速吃牛奶和面包当早餐。

星期一，我们有升旗仪式。所有学生站着唱国歌。

仪式结束后，新的一周开始了。我有语文、数学、英语和美术课。让我们有一周的好时光！`,vocabularies:[{english:"Monday",phonetic:"/ˈmʌndeɪ/",chinese:"星期一"},{english:"tired",phonetic:"/ˈtaɪərd/",chinese:"困倦的"},{english:"uniform",phonetic:"/ˈjuːnɪfɔːrm/",chinese:"校服"},{english:"ceremony",phonetic:"/ˈserəmoʊni/",chinese:"仪式"},{english:"flag",phonetic:"/flæɡ/",chinese:"旗子"},{english:"national anthem",phonetic:"/ˈnæʃnəl ˈænθəm/",chinese:"国歌"},{english:"week",phonetic:"/wiːk/",chinese:"周"},{english:"art class",phonetic:"/ɑːrt klæs/",chinese:"美术课"}]},{id:"39",title:"Tuesday",titleCn:"星期二",image:"/images/39星期二.jpg",englishText:`Tuesday comes after Monday. I feel more awake today.

We have Physical Education class on Tuesdays. I wear my sports clothes and sneakers.

In PE class, we do warm-up exercises first. Then we play different sports. Today we play soccer.

After PE, I am sweaty but happy. Exercise makes me feel good.

In the afternoon, we have Music class. We learn a new song. Tuesdays are always fun!`,chineseText:`星期二在星期一之后来。今天我感到更清醒了。

星期二我们有体育课。我穿上运动服和运动鞋。

体育课上，我们先做热身运动。然后我们做不同的运动。今天我们踢足球。

体育课后，我满身是汗但很开心。运动让我感觉很好。

下午，我们有音乐课。我们学一首新歌。星期二总是很有趣！`,vocabularies:[{english:"Tuesday",phonetic:"/ˈtuːzdeɪ/",chinese:"星期二"},{english:"Physical Education",phonetic:"/ˈfɪzɪkl ˌedʒuˈkeɪʃnl/",chinese:"体育课"},{english:"sports",phonetic:"/spɔːrts/",chinese:"运动"},{english:"soccer",phonetic:"/ˈsɑːkər/",chinese:"足球"},{english:"sweaty",phonetic:"/ˈsweti/",chinese:"出汗的"},{english:"exercise",phonetic:"/ˈeksərsaɪz/",chinese:"锻炼"},{english:"music",phonetic:"/ˈmjuːzɪk/",chinese:"音乐"},{english:"song",phonetic:"/sɔːŋ/",chinese:"歌曲"}]},{id:"40",title:"Broccoli",titleCn:"西兰花",image:"/images/40西兰花.jpg",englishText:`Broccoli is a green vegetable. It looks like a little tree.

Some kids do not like broccoli, but I think it is yummy. My mom cooks it in many ways.

She steams it and adds a little salt. Sometimes she stir-fries it with garlic.

Broccoli is very good for you. It has vitamins and makes your body strong.

Mom says eating green vegetables every day is healthy. Now I eat broccoli happily!`,chineseText:`西兰花是一种绿色蔬菜。它看起来像一棵小树。

有些孩子不喜欢西兰花，但我觉得很好吃。妈妈用很多种方式做它。

她蒸西兰花，加一点点盐。有时她用大蒜翻炒。

西兰花对你很有好处。它含有维生素，让你的身体更强壮。

妈妈说每天吃绿色蔬菜是健康的。现在我开心地吃西兰花！`,vocabularies:[{english:"broccoli",phonetic:"/ˈbrɑːkəli/",chinese:"西兰花"},{english:"vegetable",phonetic:"/ˈvedʒtəbl/",chinese:"蔬菜"},{english:"steam",phonetic:"/stiːm/",chinese:"蒸"},{english:"salt",phonetic:"/sɔːlt/",chinese:"盐"},{english:"stir-fry",phonetic:"/ˈstɜːr fraɪ/",chinese:"翻炒"},{english:"garlic",phonetic:"/ˈɡɑːrlɪk/",chinese:"大蒜"},{english:"vitamin",phonetic:"/ˈvaɪtəmɪn/",chinese:"维生素"},{english:"healthy",phonetic:"/ˈhelθi/",chinese:"健康的"}]}],Wg=[{id:"41",title:"Tomato",titleCn:"西红柿",image:"/images/41西红柿.jpg",englishText:`Tomato is a red and round vegetable. But some people say it is a fruit!

Tomatoes grow on plants. They start green and turn red when they are ripe.

Mom makes tomato scrambled eggs for me. It is my favorite breakfast dish. So yummy!

Tomatoes have vitamin C. They are good for your skin and your eyes.

I also like to eat cherry tomatoes as a snack. They are small and sweet.`,chineseText:`西红柿是一种红色圆圆的蔬菜。但有些人说它是水果！

西红柿长在植物上。它们一开始是绿色的，成熟时变成红色。

妈妈给我做西红柿炒鸡蛋。这是我最喜欢的早餐菜。太美味了！

西红柿含有维生素C。它们对你的皮肤和眼睛有好处。

我也喜欢把小番茄当零食吃。它们又小又甜。`,vocabularies:[{english:"tomato",phonetic:"/təˈmeɪtoʊ/",chinese:"西红柿"},{english:"fruit",phonetic:"/fruːt/",chinese:"水果"},{english:"ripe",phonetic:"/raɪp/",chinese:"成熟的"},{english:"scrambled eggs",phonetic:"/ˈskræmbld ˈeɡz/",chinese:"炒鸡蛋"},{english:"vitamin C",phonetic:"/ˈvaɪtəmɪn siː/",chinese:"维生素C"},{english:"skin",phonetic:"/skɪn/",chinese:"皮肤"},{english:"cherry tomato",phonetic:"/ˈtʃeri təˈmeɪtoʊ/",chinese:"小番茄"},{english:"snack",phonetic:"/snæk/",chinese:"零食"}]},{id:"42",title:"Reading Books",titleCn:"读书",image:"/images/42读书.jpg",englishText:`I love reading books. It is my favorite hobby.

Every night before bed, I read a story. Fairy tales are my favorite.

Books take me to magical places. I can fly with dragons or swim with mermaids.

Reading makes my imagination grow. I can see wonderful things in my mind.

The more I read, the more I learn. Books are my best friends. I will read forever!`,chineseText:`我喜欢读书。它是我最喜欢的爱好。

每天晚上睡觉前，我读一个故事。童话是我最喜欢的。

书带我去了神奇的地方。我可以和龙一起飞，或者和美人鱼一起游泳。

阅读让我的想象力增长。我可以在脑海中看到美好的事物。

我读得越多，学得越多。书是我最好的朋友。我会永远读下去！`,vocabularies:[{english:"read",phonetic:"/riːd/",chinese:"读"},{english:"book",phonetic:"/bʊk/",chinese:"书"},{english:"hobby",phonetic:"/ˈhɑːbi/",chinese:"爱好"},{english:"fairy tale",phonetic:"/ˈferi teɪl/",chinese:"童话"},{english:"magical",phonetic:"/ˈmædʒɪkl/",chinese:"神奇的"},{english:"imagination",phonetic:"/ɪˌmædʒɪˈneɪʃn/",chinese:"想象力"},{english:"learn",phonetic:"/lɜːrn/",chinese:"学习"},{english:"forever",phonetic:"/fərˈevər/",chinese:"永远"}]},{id:"43",title:"Summer Vacation Starts",titleCn:"暑假开始啦",image:"/images/43暑假开始啦.jpg",englishText:`Hooray! Summer vacation is here! No more school for two months!

The first day of vacation, I sleep until nine o'clock. No alarm clock!

Then I eat a big breakfast slowly. No need to hurry to school.

In the afternoon, I call my best friend. We plan our summer adventures together.

What should I do first? Swim in the pool? Go to the beach? Or read books at home?`,chineseText:`好耶！暑假来了！两个月不用上学了！

放假第一天，我睡到九点。没有闹钟！

然后我慢慢地吃一顿丰盛的早餐。不用急着去学校了。

下午，我给我最好的朋友打电话。我们一起计划夏天的冒险。

我应该先做什么？去游泳池游泳？去海边？还是在家里看书？`,vocabularies:[{english:"vacation",phonetic:"/veɪˈkeɪʃn/",chinese:"假期"},{english:"summer",phonetic:"/ˈsʌmər/",chinese:"夏天"},{english:"alarm clock",phonetic:"/əˈlɑːrm klɑːk/",chinese:"闹钟"},{english:"hurry",phonetic:"/ˈhɜːri/",chinese:"匆忙"},{english:"adventure",phonetic:"/ədˈventʃər/",chinese:"冒险"},{english:"swim",phonetic:"/swɪm/",chinese:"游泳"},{english:"pool",phonetic:"/puːl/",chinese:"游泳池"},{english:"beach",phonetic:"/biːtʃ/",chinese:"海边"}]},{id:"44",title:"Going to the Supermarket",titleCn:"逛超市",image:"/images/44逛超市.jpg",englishText:`Today I go to the supermarket with my mom. It is so big and fun!

First, we get a shopping cart. Then we walk through different sections.

In the fruit area, we buy apples, bananas, and grapes. Fresh fruits are the best!

In the vegetable area, we pick tomatoes and broccoli. Green vegetables are healthy.

At the snack area, I ask for some cookies. Mom says okay, but just a small box.

Shopping with mom is fun. I help carry the heavy bags too!`,chineseText:`今天我和妈妈去超市。它又大又好玩！

首先，我们拿了一辆购物车。然后我们走过不同的区域。

在水果区，我们买了苹果、香蕉和葡萄。新鲜水果最好了！

在蔬菜区，我们挑了西红柿和西兰花。绿色蔬菜很健康。

在零食区，我要了一些饼干。妈妈说可以，但只能买一小盒。

和妈妈一起购物很有趣。我也帮忙提重袋子！`,vocabularies:[{english:"supermarket",phonetic:"/ˈsuːpərmɑːrkɪt/",chinese:"超市"},{english:"shopping cart",phonetic:"/ˈʃɑːpɪŋ kɑːrt/",chinese:"购物车"},{english:"section",phonetic:"/ˈsekʃn/",chinese:"区域"},{english:"grape",phonetic:"/ɡreɪp/",chinese:"葡萄"},{english:"cookie",phonetic:"/ˈkʊki/",chinese:"饼干"},{english:"carry",phonetic:"/ˈkæri/",chinese:"提/搬"},{english:"fresh",phonetic:"/freʃ/",chinese:"新鲜的"},{english:"healthy",phonetic:"/ˈhelθi/",chinese:"健康的"}]},{id:"45",title:"Eating Watermelon",titleCn:"吃西瓜",image:"/images/45吃西瓜.jpg",englishText:`Summer is so hot! The best way to cool down is eating watermelon.

Mom cuts a big watermelon into pieces. The flesh is red and juicy. So beautiful!

I bite into a piece. Crunch! Sweet and refreshing. The juice drips down my chin.

We eat watermelon together in the living room. Dad tells us funny jokes while we eat.

Summer tastes like watermelon. This is what I love about summer!`,chineseText:`夏天太热了！最棒的降温方式就是吃西瓜。

妈妈把一个大西瓜切成块。瓜瓤红红的、多汁的。真漂亮！

我咬了一口。嘎吱！又甜又清爽。汁水流到了我的下巴。

我们一起在客厅吃西瓜。我们吃的时候爸爸给我们讲有趣的笑话。

夏天的味道就像西瓜。这就是我爱夏天的原因！`,vocabularies:[{english:"watermelon",phonetic:"/ˈwɔːtərmelən/",chinese:"西瓜"},{english:"cool down",phonetic:"/kuːl daʊn/",chinese:"降温"},{english:"piece",phonetic:"/piːs/",chinese:"块"},{english:"juicy",phonetic:"/ˈdʒuːsi/",chinese:"多汁的"},{english:"refreshing",phonetic:"/rɪˈfreʃɪŋ/",chinese:"清爽的"},{english:"juice",phonetic:"/dʒuːs/",chinese:"果汁"},{english:"living room",phonetic:"/ˈlɪvɪŋ ruːm/",chinese:"客厅"},{english:"funny",phonetic:"/ˈfʌni/",chinese:"有趣的"}]},{id:"46",title:"Grapes",titleCn:"葡萄",image:"/images/46葡萄.jpg",englishText:`Grapes come in many colors. There are green, red, and purple grapes.

Grapes grow in bunches on vines. They look like little balls hanging together.

I like to eat grapes as a snack. They are sweet and bite-sized. No need to cook them.

Mom sometimes freezes grapes. Frozen grapes are like natural ice pops. So cool!

Grapes are healthy snacks. They have vitamins and are good for you. I eat grapes every day!`,chineseText:`葡萄有很多颜色。有绿色的、红色的和紫色的葡萄。

葡萄长在藤上，一串一串的。它们看起来像小球挂在一起。

我喜欢把葡萄当零食吃。它们甜甜的，一口一个。不需要煮。

妈妈有时把葡萄冷冻起来。冰冻的葡萄就像天然的冰棍。好凉爽！

葡萄是健康的零食。它们含有维生素，对你有好处。我每天都吃葡萄！`,vocabularies:[{english:"grape",phonetic:"/ɡreɪp/",chinese:"葡萄"},{english:"purple",phonetic:"/ˈpɜːrpl/",chinese:"紫色的"},{english:"bunch",phonetic:"/bʌntʃ/",chinese:"串"},{english:"vine",phonetic:"/vaɪn/",chinese:"藤"},{english:"snack",phonetic:"/snæk/",chinese:"零食"},{english:"freeze",phonetic:"/friːz/",chinese:"冷冻"},{english:"natural",phonetic:"/ˈnætʃrəl/",chinese:"天然的"},{english:"vitamin",phonetic:"/ˈvaɪtəmɪn/",chinese:"维生素"}]},{id:"47",title:"Hello, July",titleCn:"你好七月",image:"/images/47你好七月.jpg",englishText:`July is here! The hottest month of summer has begun.

The sun shines bright every day. The days are long and bright.

July is the month of summer vacation. I have so much free time to play!

In July, my family might go to the beach or the mountains. Anywhere is fun with my family.

Hello, July! Are you ready for adventures with me?`,chineseText:`七月来了！夏天最热的月份开始了。

太阳每天都明亮地照耀。白天很长很明亮。

七月是暑假月。我有很多自由时间可以玩！

七月，我家人可能会去海边或者山上。和家人在一起，哪里都有趣。

你好，七月！你准备好和我一起冒险了吗？`,vocabularies:[{english:"July",phonetic:"/dʒuˈlaɪ/",chinese:"七月"},{english:"hottest",phonetic:"/ˈhɑːtɪst/",chinese:"最热的"},{english:"summer",phonetic:"/ˈsʌmər/",chinese:"夏天"},{english:"sun",phonetic:"/sʌn/",chinese:"太阳"},{english:"vacation",phonetic:"/veɪˈkeɪʃn/",chinese:"假期"},{english:"mountain",phonetic:"/ˈmaʊntən/",chinese:"山"},{english:"adventure",phonetic:"/ədˈventʃər/",chinese:"冒险"},{english:"bright",phonetic:"/braɪt/",chinese:"明亮的"}]},{id:"48",title:"Doing Housework",titleCn:"做家务",image:"/images/48做家务.jpg",englishText:`I am a helpful child. I help my parents do housework at home.

After breakfast, I wash the dishes. The plates are slippery but I am careful.

I also sweep the floor every day. The floor becomes clean and shiny.

On weekends, I make my bed and tidy my room. Everything in order makes me happy.

Doing housework is not boring. It makes me feel grown up. I am proud of myself!`,chineseText:`我是一个乐于助心的孩子。我在家帮爸爸妈妈做家务。

早餐后，我洗碗。盘子滑溜溜的，但我很小心。

我还每天扫地。地板变得又干净又亮。

周末，我整理床铺，打扫我的房间。整整齐齐的让我开心。

做家务不无聊。它让我感觉自己长大了。我为自己骄傲！`,vocabularies:[{english:"housework",phonetic:"/ˈhaʊswɜːrk/",chinese:"家务"},{english:"helpful",phonetic:"/ˈhelpfl/",chinese:"乐于助人的"},{english:"wash",phonetic:"/wɑːʃ/",chinese:"洗"},{english:"dish",phonetic:"/dɪʃ/",chinese:"盘子"},{english:"sweep",phonetic:"/swiːp/",chinese:"扫地"},{english:"floor",phonetic:"/flɔːr/",chinese:"地板"},{english:"tidy",phonetic:"/ˈtaɪdi/",chinese:"整洁"},{english:"grown up",phonetic:"/ɡrɔːn ʌp/",chinese:"长大"}]},{id:"49",title:"My Puppy",titleCn:"我的狗狗",image:"/images/49我的狗狗.jpg",englishText:`I have a puppy. His name is Happy. He is brown and white.

Every morning, I take Happy for a walk in the park. He runs and jumps happily.

Happy loves to play fetch. I throw a ball and he brings it back to me.

When I am sad, Happy sits beside me. He makes me feel better with his warm eyes.

Dogs are mans best friend. Happy makes my life so much happier!`,chineseText:`我有一只小狗。他叫Happy。他是棕色和白色相间的。

每天早上，我带Happy去公园散步。他开心地跑跑跳跳。

Happy喜欢玩捡球游戏。我扔一个球，他就把它捡回来给我。

当我伤心的时候，Happy坐在我旁边。他用温暖的眼神让我感觉好起来。

狗是人类最好的朋友。Happy让我的生活更加快乐！`,vocabularies:[{english:"puppy",phonetic:"/ˈpʌpi/",chinese:"小狗"},{english:"walk",phonetic:"/wɔːk/",chinese:"散步"},{english:"park",phonetic:"/pɑːrk/",chinese:"公园"},{english:"fetch",phonetic:"/fetʃ/",chinese:"捡回"},{english:"ball",phonetic:"/bɔːl/",chinese:"球"},{english:"sad",phonetic:"/sæd/",chinese:"伤心的"},{english:"beside",phonetic:"/bɪˈsaɪd/",chinese:"在旁边"},{english:"friend",phonetic:"/frend/",chinese:"朋友"}]},{id:"50",title:"Traveling",titleCn:"旅行",image:"/images/50旅行.jpg",englishText:`Traveling is exciting! Last National Day, my family went to Shanghai.

We visited the Oriental Pearl Tower. It is so tall and modern. The view from the top was amazing!

We also walked on the Bund at night. The buildings were lit up like magic.

We tried many delicious foods. I especially liked the Xiaolongbao. It was so juicy!

Traveling lets me see new places and learn new things. I cannot wait for the next trip!`,chineseText:`旅行真令人兴奋！上次国庆节，我家人去了上海。

我们参观了东方明珠塔。它又高又现代。从塔顶看到的风景太棒了！

我们晚上还在外滩散步。建筑物被点亮，像魔法一样。

我们尝了很多美食。我特别喜欢吃小笼包。汁水好多！

旅行让我看到新地方，学到新东西。我等不及下一次旅行了！`,vocabularies:[{english:"travel",phonetic:"/ˈtrævl/",chinese:"旅行"},{english:"exciting",phonetic:"/ɪkˈsaɪtɪŋ/",chinese:"令人兴奋的"},{english:"view",phonetic:"/vjuː/",chinese:"风景"},{english:"building",phonetic:"/ˈbɪldɪŋ/",chinese:"建筑物"},{english:"delicious",phonetic:"/dɪˈlɪʃəs/",chinese:"美味的"},{english:"lit up",phonetic:"/lɪt ʌp/",chinese:"点亮"},{english:"trip",phonetic:"/trɪp/",chinese:"旅行"},{english:"amazing",phonetic:"/əˈmeɪzɪŋ/",chinese:"惊人的"}]}],_g=[{id:"51",title:"My Little Sister",titleCn:"我的妹妹",image:"/images/51我的妹妹.jpg",englishText:`I have a little sister. Her name is Lily. She is five years old.

She has big eyes and a cute smile. Everyone says she looks like a doll.

Lily follows me everywhere. She wants to do everything I do. It can be annoying sometimes.

But when she hugs me and says "I love you, brother," I feel so warm.

Lily makes my life more fun. She is my best little friend!`,chineseText:`我有一个小妹妹。她叫Lily。她五岁了。

她有一双大眼睛和可爱的微笑。每个人都说她看起来像一个洋娃娃。

Lily到处跟着我。她想做所有我做的事。有时候很烦。

但当她拥抱我说"哥哥，我爱你"的时候，我感到很温暖。

Lily让我的生活更有趣。她是我最好的小朋友！`,vocabularies:[{english:"sister",phonetic:"/ˈsɪstər/",chinese:"妹妹"},{english:"little",phonetic:"/ˈlɪtl/",chinese:"小的"},{english:"cute",phonetic:"/kjuːt/",chinese:"可爱的"},{english:"doll",phonetic:"/dɑːl/",chinese:"洋娃娃"},{english:"follow",phonetic:"/ˈfɑːloʊ/",chinese:"跟随"},{english:"everywhere",phonetic:"/ˈevriwer/",chinese:"到处"},{english:"annoying",phonetic:"/əˈnɔɪɪŋ/",chinese:"烦人的"},{english:"warm",phonetic:"/wɔːrm/",chinese:"温暖的"}]},{id:"52",title:"My Teacher",titleCn:"我的老师",image:"/images/52我的老师.jpg",englishText:`My favorite teacher is Miss Wang. She teaches us English.

She is young and beautiful. She always smiles and makes class fun.

Miss Wang has many creative ideas. We play games and sing songs to learn English.

When I make mistakes, she says "Try again! You can do it!" She is very patient.

I want to learn English well to make Miss Wang proud. She is the best teacher ever!`,chineseText:`我最喜欢的老师是王老师。她教我们英语。

她又年轻又漂亮。她总是微笑着，让课堂很有趣。

王老师有很多有创意的想法。我们玩游戏、唱歌来学英语。

当我犯错误时，她说"再试一次！你可以的！"她非常有耐心。

我想学好英语让王老师骄傲。她是世界上最好的老师！`,vocabularies:[{english:"teacher",phonetic:"/ˈtiːtʃər/",chinese:"老师"},{english:"English",phonetic:"/ˈɪŋɡlɪʃ/",chinese:"英语"},{english:"creative",phonetic:"/kriˈeɪtɪv/",chinese:"有创意的"},{english:"class",phonetic:"/klæs/",chinese:"课"},{english:"mistake",phonetic:"/mɪˈsteɪk/",chinese:"错误"},{english:"patient",phonetic:"/ˈpeɪʃnt/",chinese:"耐心的"},{english:"proud",phonetic:"/praʊd/",chinese:"骄傲的"},{english:"fun",phonetic:"/fʌn/",chinese:"有趣的"}]},{id:"53",title:"A Sick Day",titleCn:"生病的一天",image:"/images/53生病的一天.jpg",englishText:`Oh no! I do not feel well today. My throat is sore and my head hurts.

Mom takes my temperature. I have a fever. I need to stay in bed.

Mom gives me medicine and soup. She takes good care of me all day.

I am bored staying home. I miss my friends and teachers at school.

Rest is important. I will drink lots of water and get better soon. See you tomorrow, school!`,chineseText:`哦不！我今天感觉不舒服。我的喉咙疼，头也痛。

妈妈给我量体温。我发烧了。我需要卧床休息。

妈妈给我吃药和汤。她整天悉心照顾我。

待在家里好无聊。我想念我的朋友们和学校的老师。

休息很重要。我要多喝水，尽快好起来。明天见，学校！`,vocabularies:[{english:"sick",phonetic:"/sɪk/",chinese:"生病的"},{english:"throat",phonetic:"/θroʊt/",chinese:"喉咙"},{english:"fever",phonetic:"/ˈfiːvər/",chinese:"发烧"},{english:"temperature",phonetic:"/ˈtemprətʃər/",chinese:"体温"},{english:"medicine",phonetic:"/ˈmedɪsn/",chinese:"药"},{english:"soup",phonetic:"/suːp/",chinese:"汤"},{english:"bored",phonetic:"/bɔːrd/",chinese:"无聊的"},{english:"rest",phonetic:"/rest/",chinese:"休息"}]},{id:"54",title:"I Love Roller Skating",titleCn:"我喜欢轮滑",image:"/images/54我喜欢轮滑.jpg",englishText:`Last summer, I learned to roller skate. It was hard at first but so fun!

I put on my roller skates and a helmet. Safety first!

At first, I fell down many times. But I never gave up.

Now I can skate smoothly. I feel like the wind under my feet!

Roller skating is great exercise. It makes my legs strong and my heart happy!`,chineseText:`去年夏天，我学了轮滑。开始很难但太有趣了！

我穿上轮滑鞋和头盔。安全第一！

一开始，我跌倒了很多次。但我从不放弃。

现在我可以平稳地滑行了。我感觉脚下有风！

轮滑是很棒的锻炼。它让我的腿更强壮，心脏更开心！`,vocabularies:[{english:"roller skate",phonetic:"/ˈroʊlər skeɪt/",chinese:"轮滑"},{english:"helmet",phonetic:"/ˈhelmet/",chinese:"头盔"},{english:"safety",phonetic:"/ˈseɪfti/",chinese:"安全"},{english:"fall down",phonetic:"/fɔːl daʊn/",chinese:"跌倒"},{english:"smoothly",phonetic:"/ˈsmuːðli/",chinese:"平稳地"},{english:"wind",phonetic:"/wɪnd/",chinese:"风"},{english:"exercise",phonetic:"/ˈeksərsaɪz/",chinese:"锻炼"},{english:"strong",phonetic:"/strɔːŋ/",chinese:"强壮的"}]},{id:"55",title:"My Summer Vacation Plan",titleCn:"我的暑假计划",image:"/images/55我的暑假计划.jpg",englishText:`Summer vacation is coming! I have made a plan for my summer.

First, I will finish my homework on time. Then I can play freely!

I plan to read ten books this summer. Learning never stops!

I also want to learn swimming. It will be cool to swim like a fish.

And of course, I will spend time with my family. Summer is the best time for family trips!`,chineseText:`暑假要来了！我已经制定了一个暑假计划。

首先，我会按时完成作业。然后我就可以自由地玩了！

我计划这个夏天读十本书。学习永不停歇！

我还想要学游泳。像鱼一样游泳会很酷。

当然，我会和家人在一起。暑假是家庭旅行的最佳时光！`,vocabularies:[{english:"vacation",phonetic:"/veɪˈkeɪʃn/",chinese:"假期"},{english:"plan",phonetic:"/plæn/",chinese:"计划"},{english:"summer",phonetic:"/ˈsʌmər/",chinese:"夏天"},{english:"homework",phonetic:"/ˈhoʊmwɜːrk/",chinese:"作业"},{english:"freely",phonetic:"/ˈfriːli/",chinese:"自由地"},{english:"swimming",phonetic:"/ˈswɪmɪŋ/",chinese:"游泳"},{english:"family",phonetic:"/ˈfæməli/",chinese:"家人"},{english:"trip",phonetic:"/trɪp/",chinese:"旅行"}]},{id:"56",title:"My Best Friend",titleCn:"我的好朋友",image:"/images/56我的好朋友.jpg",englishText:`My best friend is Tom. We have been friends since first grade.

Tom has short hair and wears glasses. He is very smart.

We sit together at lunch and play together at recess. We share our snacks too!

When I am sad, Tom tells me jokes. When he is sad, I cheer him up.

A good friend is like a treasure. Tom is my most precious friend!`,chineseText:`我最好的朋友是Tom。我们从一年级就是朋友了。

Tom留着短头发，戴眼镜。他非常聪明。

我们一起吃午饭，课间一起玩。我们也分享零食！

当我伤心的时候，Tom给我讲笑话。当他伤心的时候，我让他开心。

好朋友就像宝藏。Tom是我最珍贵的朋友！`,vocabularies:[{english:"friend",phonetic:"/frend/",chinese:"朋友"},{english:"smart",phonetic:"/smɑːrt/",chinese:"聪明的"},{english:"lunch",phonetic:"/lʌntʃ/",chinese:"午餐"},{english:"recess",phonetic:"/ˈriːses/",chinese:"课间休息"},{english:"share",phonetic:"/ʃer/",chinese:"分享"},{english:"joke",phonetic:"/dʒoʊk/",chinese:"笑话"},{english:"treasure",phonetic:"/ˈtreʒər/",chinese:"宝藏"},{english:"precious",phonetic:"/ˈpreʃəs/",chinese:"珍贵的"}]},{id:"57",title:"Summer Beach",titleCn:"夏天的海边",image:"/images/57夏天的海边.jpg",englishText:`Summer and the beach are perfect together! The beach is my favorite summer place.

I build sandcastles on the beach. I make walls and towers. They are my sandy kingdom!

The waves touch my feet. The water is warm and blue. I splash in the sea and laugh.

When I am tired, I sit on the sand and watch the clouds. What a peaceful day!

Summer beach memories will last forever in my heart.`,chineseText:`夏天和海边是完美组合！海边是我夏天最喜欢的地方。

我在海边建沙堡。我做城墙和塔。它们是我的沙之国！

海浪拍打着我的脚。水又温暖又蓝。我在海里嬉水欢笑。

当我累了，我坐在沙滩上看云。多平静的一天啊！

夏天的海边记忆将永远留在我心中。`,vocabularies:[{english:"beach",phonetic:"/biːtʃ/",chinese:"海边"},{english:"sandcastle",phonetic:"/ˈsændkæsl/",chinese:"沙堡"},{english:"wave",phonetic:"/weɪv/",chinese:"海浪"},{english:"splash",phonetic:"/splæʃ/",chinese:"溅水"},{english:"peaceful",phonetic:"/ˈpiːsfl/",chinese:"平静的"},{english:"cloud",phonetic:"/klaʊd/",chinese:"云"},{english:"memory",phonetic:"/ˈmeməri/",chinese:"记忆"},{english:"forever",phonetic:"/fərˈevər/",chinese:"永远"}]},{id:"58",title:"Badminton",titleCn:"羽毛球",image:"/images/58羽毛球.jpg",englishText:`Badminton is a fun sport to play with friends. I learned it last year.

You need a racket and a shuttlecock. The shuttlecock flies so fast!

To play, you hit the shuttlecock over the net. If it falls on your side, you lose a point.

I practice hitting every day. Sometimes I win, sometimes I lose. That is okay!

Playing badminton makes me quick and agile. It is also a great way to make friends!`,chineseText:`羽毛球是一项和朋友一起玩的有趣运动。我去年学的。

你需要球拍和羽毛球。羽毛球飞得很快！

打的时候，你要把羽毛球打过网。如果它落在你这边，你就丢一分。

我每天练习打球。有时候我赢，有时候我输。没关系！

打羽毛球让我变得敏捷。它也是交朋友的好方式！`,vocabularies:[{english:"badminton",phonetic:"/ˈbædmɪntən/",chinese:"羽毛球"},{english:"racket",phonetic:"/ˈrækɪt/",chinese:"球拍"},{english:"shuttlecock",phonetic:"/ˈʌtlkɑːk/",chinese:"羽毛球"},{english:"net",phonetic:"/net/",chinese:"网"},{english:"point",phonetic:"/pɔɪnt/",chinese:"分"},{english:"quick",phonetic:"/kwɪk/",chinese:"快的"},{english:"agile",phonetic:"/ˈædʒl/",chinese:"敏捷的"},{english:"practice",phonetic:"/ˈpræktɪs/",chinese:"练习"}]},{id:"59",title:"Vegetables",titleCn:"蔬菜",image:"/images/59蔬菜.jpg",englishText:`Vegetables are good for my health. I eat them every day.

There are many kinds of vegetables. Carrots, cucumbers, cabbage, and spinach.

Mom cooks vegetables in different ways. Sometimes she stir-fries, sometimes she steams.

I used to not like vegetables. But now I know they make me strong and help me grow.

Eating vegetables is a good habit. They give me energy to play and learn!`,chineseText:`蔬菜对我的健康有好处。我每天都吃。

蔬菜有很多种。胡萝卜、黄瓜、卷心菜和菠菜。

妈妈用不同的方式做蔬菜。有时候她炒菜，有时候她蒸菜。

我以前不喜欢蔬菜。但现在我知道它们让我更强壮，帮助我成长。

吃蔬菜是一个好习惯。它们给我能量去玩耍和学习！`,vocabularies:[{english:"vegetable",phonetic:"/ˈvedʒtəbl/",chinese:"蔬菜"},{english:"carrot",phonetic:"/ˈkærət/",chinese:"胡萝卜"},{english:"cucumber",phonetic:"/ˈkjuːkʌmbər/",chinese:"黄瓜"},{english:"cabbage",phonetic:"/ˈkæbɪdʒ/",chinese:"卷心菜"},{english:"spinach",phonetic:"/ˈspɪnɪtʃ/",chinese:"菠菜"},{english:"steam",phonetic:"/stiːm/",chinese:"蒸"},{english:"strong",phonetic:"/strɔːŋ/",chinese:"强壮的"},{english:"habit",phonetic:"/ˈhæbɪt/",chinese:"习惯"}]},{id:"60",title:"My Dream",titleCn:"我的梦想",image:"/images/60我的梦想.jpg",englishText:`Everyone has a dream. My dream is to become a scientist when I grow up.

Scientists discover new things. They help make the world a better place.

I want to study hard and go to a good university. I will learn about science and technology.

I will invent something useful. Maybe a robot or a new medicine.

Dreams are important. They give me direction. I will never stop believing in my dream!`,chineseText:`每个人都有梦想。我的梦想是长大后成为一名科学家。

科学家发现新事物。他们帮助让世界变得更美好。

我要努力学习，上一所好大学。我将学习科学和技术。

我要发明一些有用的东西。也许是机器人或者新药。

梦想很重要。它们给我方向。我永远不会停止相信我的梦想！`,vocabularies:[{english:"dream",phonetic:"/driːm/",chinese:"梦想"},{english:"scientist",phonetic:"/ˈsaɪəntɪst/",chinese:"科学家"},{english:"discover",phonetic:"/dɪˈskʌvər/",chinese:"发现"},{english:"technology",phonetic:"/tekˈnɑːlədʒi/",chinese:"科技"},{english:"invent",phonetic:"/ɪnˈvent/",chinese:"发明"},{english:"robot",phonetic:"/ˈroʊbɑːt/",chinese:"机器人"},{english:"medicine",phonetic:"/ˈmedɪsn/",chinese:"药"},{english:"believe",phonetic:"/bɪˈliːv/",chinese:"相信"}]}],Lg=[{id:"61",title:"The Great Wall",titleCn:"长城",image:"/images/61长城.jpg",englishText:`The Great Wall of China is one of the greatest wonders in the world. I visited it last year.

The wall is very long and very old. It was built by many people a long time ago.

Walking on the wall, I could see mountains and trees everywhere. The view was amazing!

The wall is like a giant dragon. It goes up and down the mountains. So wonderful!

I am proud of the Great Wall. It is a symbol of China. Everyone should visit it once!`,chineseText:`中国的长城是世界最伟大的奇迹之一。去年我参观了它。

城墙非常长，非常古老。它是很久以前由很多人建造的。

走在城墙上，我能看到到处都是山和树。风景太美了！

城墙像一条巨龙。它在山上上下起伏。太神奇了！

我为长城感到骄傲。它是中国的象征。每个人都应该来参观一次！`,vocabularies:[{english:"Great Wall",phonetic:"/ɡreɪt wɔːl/",chinese:"长城"},{english:"wonder",phonetic:"/ˈwʌndər/",chinese:"奇迹"},{english:"ancient",phonetic:"/ˈeɪnʃənt/",chinese:"古老的"},{english:"mountain",phonetic:"/ˈmaʊntən/",chinese:"山"},{english:"dragon",phonetic:"/ˈdræɡən/",chinese:"龙"},{english:"symbol",phonetic:"/ˈsɪmbl/",chinese:"象征"},{english:"proud",phonetic:"/praʊd/",chinese:"骄傲的"},{english:"wonderful",phonetic:"/ˈwʌndərfl/",chinese:"精彩的"}]},{id:"62",title:"Myself",titleCn:"我自己",image:"/images/62我自己.jpg",englishText:`Let me tell you about myself. I am a unique person in this world.

I am eight years old. I have black hair and black eyes like my parents.

I am outgoing and friendly. I like to meet new people and make friends.

I am also curious. I always ask many questions about the world.

I have my own strengths and weaknesses. I am working on improving myself every day!

I am special because I am me. No one else is exactly the same.`,chineseText:`让我介绍一下自己。我是世界上一个独特的人。

我八岁了。我有黑头发黑眼睛，像我的父母。

我性格外向，很友好。我喜欢认识新朋友。

我也很好奇。我总是问很多关于世界的问题。

我有自己的优点和缺点。我每天都在努力完善自己！

我是独特的，因为这就是我。没有人和我完全一样。`,vocabularies:[{english:"myself",phonetic:"/maɪˈself/",chinese:"我自己"},{english:"unique",phonetic:"/juːˈniːk/",chinese:"独特的"},{english:"outgoing",phonetic:"/ˈaʊtɡoʊɪŋ/",chinese:"外向的"},{english:"friendly",phonetic:"/ˈfrendli/",chinese:"友好的"},{english:"curious",phonetic:"/ˈkjʊriəs/",chinese:"好奇的"},{english:"strength",phonetic:"/streŋθ/",chinese:"优点"},{english:"weakness",phonetic:"/ˈwiːknəs/",chinese:"缺点"},{english:"exactly",phonetic:"/ɪɡˈzæktli/",chinese:"完全地"}]},{id:"63",title:"Noodles",titleCn:"面条",image:"/images/63面条.jpg",englishText:`Noodles are a delicious food in China. I love them very much!

My mom makes the best noodles. She cooks them in clear soup with vegetables.

On my birthday, mom always makes me longevity noodles. They are long and symbolize a long life.

I slurp the noodles happily. They are chewy and taste so good!

Different places have different noodles. I want to try all the noodles in China one day!`,chineseText:`面条是中国的一种美食。我非常喜欢吃！

我妈妈做的面条最好吃。她用清汤蔬菜一起煮。

我生日的时候，妈妈总是给我做长寿面。它们长长的，象征着长命百岁。

我开心地吸溜面条。它们qq的，味道好极了！

不同的地方有不同的面条。有一天我想尝遍全中国的面条！`,vocabularies:[{english:"noodle",phonetic:"/ˈnuːdl/",chinese:"面条"},{english:"delicious",phonetic:"/dɪˈlɪʃəs/",chinese:"美味的"},{english:"soup",phonetic:"/suːp/",chinese:"汤"},{english:"birthday",phonetic:"/ˈbɜːrθdeɪ/",chinese:"生日"},{english:"longevity",phonetic:"/lɔːnˈdʒevəti/",chinese:"长寿"},{english:"symbolize",phonetic:"/ˈsɪmbəlaɪz/",chinese:"象征"},{english:"slurp",phonetic:"/slɜːrp/",chinese:"吸溜"},{english:"chewy",phonetic:"/ˈtʃuːi/",chinese:"有嚼劲的"}]},{id:"64",title:"Beijing",titleCn:"北京",image:"/images/64北京.jpg",englishText:`Beijing is the capital city of China. It is big and beautiful.

There are many famous places in Beijing. The Forbidden City, the Temple of Heaven, and the Great Wall.

The food in Beijing is famous too. Beijing duck is crispy and delicious. I want to try it!

Beijing has many tall buildings and wide roads. It is a modern city with a long history.

I hope to visit Beijing one day. It is a city everyone should see!`,chineseText:`北京是中国的首都。它又大又美丽。

北京有很多著名的地方。故宫、天坛和长城。

北京的美食也很著名。北京烤鸭酥脆美味。我想尝尝！

北京有很多高楼和宽阔的马路。它是一座历史悠久的现代城市。

我希望有一天能去北京。这是一个每个人都应该看看的城市！`,vocabularities:[{english:"Beijing",phonetic:"/beɪˈdʒɪŋ/",chinese:"北京"},{english:"capital",phonetic:"/ˈkæpɪtl/",chinese:"首都"},{english:"Forbidden City",phonetic:"/fərˈbɪdn ˈsɪti/",chinese:"故宫"},{english:"Temple of Heaven",phonetic:"/ˈtempl əv ˈhevən/",chinese:"天坛"},{english:"crispy",phonetic:"/ˈkrɪspi/",chinese:"酥脆的"},{english:"modern",phonetic:"/ˈmɑːdərn/",chinese:"现代的"},{english:"history",phonetic:"/ˈhɪstri/",chinese:"历史"},{english:"building",phonetic:"/ˈbɪldɪŋ/",chinese:"建筑物"}]},{id:"65",title:"Summer",titleCn:"夏天",image:"/images/65夏天.jpg",englishText:`Summer is the hottest season of the year. It comes after spring.

In summer, the sun shines brightly. The days are long and the nights are short.

Children love summer because of summer vacation. We have two months to play!

In summer, we eat ice cream and swim in pools. We wear shorts and sunglasses.

Summer nights, we can catch fireflies. They light up like little stars. Summer is magical!`,chineseText:`夏天是一年中最热的季节。春天之后就是夏天。

夏天，太阳明亮地照耀。白天很长，夜晚很短。

孩子们因为暑假而喜欢夏天。我们有两个月的时间玩耍！

夏天，我们吃冰淇淋，在游泳池游泳。我们穿短裤和戴墨镜。

夏天的晚上，我们可以捉萤火虫。它们像小星星一样发光。夏天是神奇的！`,vocabularies:[{english:"summer",phonetic:"/ˈsʌmər/",chinese:"夏天"},{english:"season",phonetic:"/ˈsiːzn/",chinese:"季节"},{english:"spring",phonetic:"/sprɪŋ/",chinese:"春天"},{english:"vacation",phonetic:"/veɪˈkeɪʃn/",chinese:"假期"},{english:"sunglasses",phonetic:"/ˈsʌnɡlæsɪz/",chinese:"太阳镜"},{english:"firefly",phonetic:"/ˈfaɪərflaɪ/",chinese:"萤火虫"},{english:"shorts",phonetic:"/ʃɔːrts/",chinese:"短裤"},{english:"magical",phonetic:"/ˈmædʒɪkl/",chinese:"神奇的"}]},{id:"66",title:"Believe in Yourself",titleCn:"相信自己",image:"/images/66相信自己.jpg",englishText:`Sometimes we face challenges that seem too hard. But we should believe in ourselves.

When I first learned to ride a bike, I fell many times. I wanted to give up.

But I believed I could do it. I kept practicing. Finally, I could ride smoothly!

Believe in yourself, and others will believe in you too. Never say "I cannot" before trying.

You are smarter and stronger than you think. Have confidence and you can achieve anything!`,chineseText:`有时候我们面对看起来太难的挑战。但我们应该相信自己。

当我第一次学骑自行车的时候，我跌倒了很多次。我想放弃。

但我相信我能做到。我一直练习。最后，我可以平稳地骑了！

相信自己，别人也会相信你。在尝试之前不要说"我不行"。

你比你想象的更聪明、更强壮。有了自信，你可以实现任何事情！`,vocabularies:[{english:"believe",phonetic:"/bɪˈliːv/",chinese:"相信"},{english:"challenge",phonetic:"/ˈtʃælɪndʒ/",chinese:"挑战"},{english:"ride",phonetic:"/raɪd/",chinese:"骑"},{english:"practice",phonetic:"/ˈpræktɪs/",chinese:"练习"},{english:"confident",phonetic:"/ˈkɑːnfɪdənt/",chinese:"自信的"},{english:"achieve",phonetic:"/əˈtʃiːv/",chinese:"实现"},{english:"stronger",phonetic:"/ˈstrɔːŋɡər/",chinese:"更强壮的"},{english:"smarter",phonetic:"/ˈsmɑːrtər/",chinese:"更聪明的"}]},{id:"67",title:"Soup Dumplings",titleCn:"灌汤包",image:"/images/67灌汤包.jpg",englishText:`Soup dumplings are a famous snack from Shanghai. They are also called Xiaolongbao.

The wrapper is thin but strong. Inside, there is delicious meat and hot soup.

When you bite it, the soup flows out. Be careful, or it will burn your mouth!

People dip them in vinegar and ginger. The taste is amazing!

Eating soup dumplings is an experience. Everyone should try them once!`,chineseText:`灌汤包是上海的著名小吃。它们也叫小笼包。

皮很薄但很结实。里面有美味的肉和热汤。

当你咬的时候，汤就流出来了。要小心，不然会烫嘴！

人们把它们蘸在醋和姜里。味道好极了！

吃灌汤包是一种体验。每个人都应该尝一次！`,vocabularies:[{english:"soup dumpling",phonetic:"/suːp ˈdʌmplɪŋ/",chinese:"灌汤包"},{english:"wrapper",phonetic:"/ˈræpər/",chinese:"皮"},{english:"soup",phonetic:"/suːp/",chinese:"汤"},{english:"burn",phonetic:"/bɜːrn/",chinese:"烫伤"},{english:"dip",phonetic:"/dɪp/",chinese:"蘸"},{english:"vinegar",phonetic:"/ˈvɪnɪɡər/",chinese:"醋"},{english:"ginger",phonetic:"/ˈdʒɪndʒər/",chinese:"姜"},{english:"experience",phonetic:"/ɪkˈspɪriəns/",chinese:"体验"}]},{id:"68",title:"The Airport",titleCn:"飞机场",image:"/images/68飞机场.jpg",englishText:`The airport is a busy place with planes taking off and landing all day.

At the airport, we can see many people from different countries. Everyone has a destination.

There are big airplanes on the runway. They look like giant birds waiting to fly.

Before boarding, we check in and get a boarding pass. Then we wait in the lounge.

Finally, we board the plane. The plane roars and takes us to the sky!`,chineseText:`飞机场是一个繁忙的地方，飞机整天都在起飞和降落。

在飞机场，我们可以看到来自不同国家的很多人。每个人都有一个目的地。

跑道上有大型飞机。它们看起来像等待飞翔的巨鸟。

登机前，我们办理登机手续，拿登机牌。然后我们在休息室等候。

最后，我们登上飞机。飞机轰鸣着带我们飞向天空！`,vocabularies:[{english:"airport",phonetic:"/ˈerpɔːrt/",chinese:"飞机场"},{english:"plane",phonetic:"/pleɪn/",chinese:"飞机"},{english:"airplane",phonetic:"/ˈerpleɪn/",chinese:"飞机"},{english:"runway",phonetic:"/ˈrʌnweɪ/",chinese:"跑道"},{english:"boarding pass",phonetic:"/ˈbɔːrdɪŋ pæs/",chinese:"登机牌"},{english:"lounge",phonetic:"/laʊndʒ/",chinese:"休息室"},{english:"board",phonetic:"/bɔːrd/",chinese:"登机"},{english:"destination",phonetic:"/ˌdestɪˈneɪʃn/",chinese:"目的地"}]},{id:"69",title:"My First Airplane Ride",titleCn:"第一次坐飞机",image:"/images/69第一次坐飞机.jpg",englishText:`Last summer, I took my first airplane ride. I was so excited!

When I sat in the seat, I felt so small. The seat was comfortable though.

The plane moved faster and faster on the runway. Then it lifted off the ground!

Looking out the window, I saw houses and roads becoming tiny. The clouds were like cotton candy!

Flying in the sky was amazing. It was one of the best experiences in my life!`,chineseText:`去年夏天，我第一次坐飞机。我太激动了！

当我坐在座位上，我感觉自己很小。不过座位很舒服。

飞机在跑道上越跑越快。然后它就起飞了！

透过窗户看，房屋和道路变得小小的。云朵像棉花糖一样！

在天上飞太神奇了。这是我人生中最棒的经历之一！`,vocabularies:[{english:"airplane",phonetic:"/ˈerpleɪn/",chinese:"飞机"},{english:"excited",phonetic:"/ɪkˈsaɪtɪd/",chinese:"激动的"},{english:"seat",phonetic:"/siːt/",chinese:"座位"},{english:"comfortable",phonetic:"/ˈkʌmftəbl/",chinese:"舒服的"},{english:"runway",phonetic:"/ˈrʌnweɪ/",chinese:"跑道"},{english:"lift off",phonetic:"/lɪft ɔːf/",chinese:"起飞"},{english:"cotton candy",phonetic:"/ˈkɑːtn ˈkændi/",chinese:"棉花糖"},{english:"experience",phonetic:"/ɪkˈspɪriəns/",chinese:"经历"}]},{id:"70",title:"Time Management",titleCn:"时间管理",image:"/images/70时间管理.jpg",englishText:`Time is precious. We should learn to manage it well.

Every day, I make a schedule. I list things I need to do and set times for them.

First, I finish my homework. Then I have time to play and read books.

Going to bed at the same time every night is important. Good sleep helps me learn better.

Time management is a useful skill. It helps me have time for everything!`,chineseText:`时间很宝贵。我们应该学会好好管理它。

每天，我制定一个时间表。我列出需要做的事情，并设定时间。

首先，我完成作业。然后我有时间玩耍和读书。

每天晚上同一时间睡觉很重要。好的睡眠帮助我学得更好。

时间管理是一个有用的技能。它帮我把每件事都安排好时间！`,vocabularies:[{english:"time",phonetic:"/taɪm/",chinese:"时间"},{english:"precious",phonetic:"/ˈpreʃəs/",chinese:"宝贵的"},{english:"manage",phonetic:"/ˈmænɪdʒ/",chinese:"管理"},{english:"schedule",phonetic:"/ˈskedʒuːl/",chinese:"时间表"},{english:"homework",phonetic:"/ˈhoʊmwɜːrk/",chinese:"作业"},{english:"sleep",phonetic:"/sliːp/",chinese:"睡觉"},{english:"skill",phonetic:"/skɪl/",chinese:"技能"},{english:"important",phonetic:"/ɪmˈpɔːrtnt/",chinese:"重要的"}]}],Ag=[{id:"71",title:"Dumplings",titleCn:"饺子",image:"/images/71饺子.jpg",englishText:`Dumplings are a traditional Chinese food. My family makes them together.

First, we make the filling. We mix meat and vegetables together with spices.

Then we make the dough and roll it into small circles. Next, we put filling in the center.

We fold the wrappers and pinch the edges. They look like little money bags!

We cook dumplings in boiling water. They float when they are ready. Yummy!`,chineseText:`饺子是中国传统美食。我家一起包饺子。

首先，我们做馅。我们把肉和蔬菜与香料混合在一起。

然后我们做面团，擀成小圆片。接着，我们在中间放馅。

我们把皮对折，捏紧边缘。它们看起来像小元宝！

我们在开水里煮饺子。当它们浮起来的时候就熟了。好吃！`,vocabularies:[{english:"dumpling",phonetic:"/ˈdʌmplɪŋ/",chinese:"饺子"},{english:"traditional",phonetic:"/trəˈdɪʃənl/",chinese:"传统的"},{english:"filling",phonetic:"/ˈfɪlɪŋ/",chinese:"馅"},{english:"dough",phonetic:"/doʊ/",chinese:"面团"},{english:"wrapper",phonetic:"/ˈræpər/",chinese:"饺子皮"},{english:"spice",phonetic:"/spaɪs/",chinese:"香料"},{english:"boiling",phonetic:"/ˈbɔɪlɪŋ/",chinese:"沸腾的"},{english:"pinch",phonetic:"/pɪntʃ/",chinese:"捏"}]},{id:"72",title:"My Pencil Case",titleCn:"我的铅笔盒",image:"/images/72我的铅笔盒.jpg",englishText:`I have a beautiful pencil case. It is blue with pictures of dinosaurs on it.

My pencil case has many pockets. I keep my pencils, pens, erasers, and rulers inside.

Every morning, I check if I have everything I need. Organization is important for school.

When my pencils get short, I sharpen them. A sharp pencil is easier to write with.

I take good care of my pencil case. It helps me learn better!`,chineseText:`我有一个漂亮的铅笔盒。它是蓝色的，上面有恐龙的图案。

我的铅笔盒有很多格子。我把铅笔、钢笔、橡皮和尺子都放在里面。

每天早上，我检查是否有我需要的所有东西。整理对学校很重要。

当我的铅笔变短了，我就削尖它们。尖的铅笔更好写。

我好好照顾我的铅笔盒。它帮助我更好地学习！`,vocabularies:[{english:"pencil case",phonetic:"/ˈpensl keɪs/",chinese:"铅笔盒"},{english:"pencil",phonetic:"/ˈpensl/",chinese:"铅笔"},{english:"eraser",phonetic:"/ɪˈreɪsər/",chinese:"橡皮"},{english:"ruler",phonetic:"/ˈruːlər/",chinese:"尺子"},{english:"sharpen",phonetic:"/ˈʃɑːrpən/",chinese:"削尖"},{english:"organization",phonetic:"/ˌɔːrɡənəˈzeɪʃn/",chinese:"组织/整理"},{english:"dinosaur",phonetic:"/ˈdaɪnəsɔːr/",chinese:"恐龙"},{english:"pocket",phonetic:"/ˈpɑːkɪt/",chinese:"口袋"}]},{id:"73",title:"Giant Panda",titleCn:"大熊猫",image:"/images/73大熊猫.jpg",englishText:`Giant pandas are China's national treasure. They are so cute and loveable!

Pandas have black and white fur. They look like they are wearing a tuxedo!

In the wild, pandas live in the mountains of Sichuan. They eat bamboo all day long.

Baby pandas are called cubs. They are born pink and tiny. So adorable!

We must protect pandas. They are endangered animals. Let us keep them safe!`,chineseText:`大熊猫是中国的国宝。它们又可爱又讨人喜欢！

熊猫有黑白相间的毛皮。它们看起来像穿着礼服！

在野外，熊猫生活在四川的深山里。它们整天吃竹子。

熊猫宝宝叫幼崽。它们出生时是粉色的、小小的。好可爱！

我们必须保护熊猫。它们是濒危动物。让我们保护它们的安全！`,vocabularies:[{english:"panda",phonetic:"/ˈpændə/",chinese:"熊猫"},{english:"national treasure",phonetic:"/ˈnæʃnəl ˈtreʒər/",chinese:"国宝"},{english:"fur",phonetic:"/fɜːr/",chinese:"毛皮"},{english:"wild",phonetic:"/waɪld/",chinese:"野外"},{english:"bamboo",phonetic:"/ˌbæmˈbuː/",chinese:"竹子"},{english:"endangered",phonetic:"/ɪnˈdeɪndʒərd/",chinese:"濒危的"},{english:"protect",phonetic:"/prəˈtekt/",chinese:"保护"},{english:"adorable",phonetic:"/əˈdɔːrəbl/",chinese:"可爱的"}]},{id:"74",title:"My Motherland",titleCn:"我的祖国",image:"/images/74我的祖国.jpg",englishText:`My motherland is China. It is a beautiful and great country.

China has a long history of five thousand years. It is one of the oldest civilizations.

There are many beautiful places in China. Mountains, rivers, lakes, and beaches. So many to see!

Chinese people are hard-working and smart. We have scientists, artists, and athletes.

I am proud to be Chinese. I love my motherland and will make it proud!`,chineseText:`我的祖国是中国。它是一个美丽而伟大的国家。

中国有五千年的悠久历史。它是最古老的文明之一。

中国有很多美丽的地方。山脉、河流、湖泊和海滩。有那么多可以看的！

中国人民勤劳又聪明。我们有科学家、艺术家和运动员。

我为中国人感到骄傲。我爱我的祖国，我会让祖国骄傲！`,vocabularies:[{english:"motherland",phonetic:"/ˈmʌðərlænd/",chinese:"祖国"},{english:"country",phonetic:"/ˈkʌntri/",chinese:"国家"},{english:"history",phonetic:"/ˈhɪstri/",chinese:"历史"},{english:"civilization",phonetic:"/ˌsɪvələˈzeɪʃn/",chinese:"文明"},{english:"mountain",phonetic:"/ˈmaʊntən/",chinese:"山"},{english:"river",phonetic:"/ˈrɪvər/",chinese:"河"},{english:"proud",phonetic:"/praʊd/",chinese:"骄傲的"},{english:"athlete",phonetic:"/ˈæθliːt/",chinese:"运动员"}]},{id:"75",title:"Temple of Heaven",titleCn:"天坛",image:"/images/75天坛.jpg",englishText:`The Temple of Heaven is in Beijing. It is a famous historical site.

In the past, emperors went there to pray for a good harvest. The temple is round and beautiful.

The main building has three levels. The roof is blue and round. It represents heaven.

There is a special Echo Wall. If you stand at one end and whisper, others can hear you at the other end!

The Temple of Heaven shows the wisdom of ancient Chinese people. It is amazing!`,chineseText:`天坛在北京。它是一个著名的历史遗迹。

过去，皇帝去那里祈祷丰收。寺庙是圆形漂亮的。

主建筑有三层。屋顶是蓝色的、圆形的。它代表天。

有一面特殊的回音壁。如果你站在一端轻声说话，其他人在另一端可以听到！

天坛展示了古中国人的智慧。太神奇了！`,vocabularies:[{english:"Temple of Heaven",phonetic:"/ˈtempl əv ˈhevən/",chinese:"天坛"},{english:"historical",phonetic:"/hɪˈstɔːrɪkl/",chinese:"历史的"},{english:"emperor",phonetic:"/ˈempərər/",chinese:"皇帝"},{english:"harvest",phonetic:"/ˈhɑːrvɪst/",chinese:"丰收"},{english:"roof",phonetic:"/ruːf/",chinese:"屋顶"},{english:"heaven",phonetic:"/ˈhevən/",chinese:"天"},{english:"echo",phonetic:"/ˈekoʊ/",chinese:"回音"},{english:"wisdom",phonetic:"/ˈwɪzdəm/",chinese:"智慧"}]},{id:"76",title:"My Favorite Season",titleCn:"我最喜欢的季节",image:"/images/76我最喜欢的季节.jpg",englishText:`There are four seasons in a year. Spring, summer, autumn, and winter. Each one is special.

Spring is warm. Flowers bloom and birds sing. It is a time of new beginnings.

Summer is hot. We can swim and eat ice cream. Vacations happen in summer.

Autumn is cool. Leaves change colors and fall down. It is harvest time.

Winter is cold. We can wear warm coats and maybe see snow. Chinese New Year is in winter!

Each season brings joy. But my favorite is autumn because of the beautiful colors.`,chineseText:`一年有四个季节。春天、夏天、秋天和冬天。每个都很特别。

春天暖和。花朵盛开，鸟儿歌唱。这是新开始的时节。

夏天炎热。我们可以游泳和吃冰淇淋。暑假在夏天。

秋天凉爽。叶子变色，落下来。这是丰收的时候。

冬天寒冷。我们可以穿暖和的外套，也许还能看到雪。春节在冬天！

每个季节都带来快乐。但我最喜欢秋天，因为色彩斑斓。`,vocabularies:[{english:"season",phonetic:"/ˈsiːzn/",chinese:"季节"},{english:"spring",phonetic:"/sprɪŋ/",chinese:"春天"},{english:"summer",phonetic:"/ˈsʌmər/",chinese:"夏天"},{english:"autumn",phonetic:"/ˈɔːtəm/",chinese:"秋天"},{english:"winter",phonetic:"/ˈwɪntər/",chinese:"冬天"},{english:"harvest",phonetic:"/ˈhɑːrvɪst/",chinese:"丰收"},{english:"bloom",phonetic:"/bluːm/",chinese:"盛开"},{english:"vacation",phonetic:"/veɪˈkeɪʃn/",chinese:"假期"}]},{id:"77",title:"Self-Driving Cars",titleCn:"无人驾驶车",image:"/images/77无人驾驶车.jpg",englishText:`In the future, we might have self-driving cars. No drivers needed!

The car has special computers and cameras. They can see the road and other cars.

You just sit in the car and tell it where to go. The car will take you there safely.

Self-driving cars can reduce accidents. They do not get tired or distracted.

Technology is amazing! Maybe I will design self-driving cars when I grow up!`,chineseText:`在未来，我们也许会有无人驾驶汽车。不需要司机！

汽车有特殊的电脑和摄像头。它们可以看到道路和其他汽车。

你只需要坐在车里，告诉它去哪里。汽车会安全地带你去那里。

无人驾驶汽车可以减少事故。它们不会疲劳或分心。

科技太神奇了！也许我长大后会设计无人驾驶汽车！`,vocabularies:[{english:"self-driving car",phonetic:"/self ˈdraɪvɪŋ kɑːr/",chinese:"无人驾驶汽车"},{english:"future",phonetic:"/ˈfjuːtʃər/",chinese:"未来"},{english:"computer",phonetic:"/kəmˈpjuːtər/",chinese:"电脑"},{english:"camera",phonetic:"/ˈkæmərə/",chinese:"摄像头"},{english:"reduce",phonetic:"/rɪˈduːs/",chinese:"减少"},{english:"accident",phonetic:"/ˈæksɪdənt/",chinese:"事故"},{english:"distracted",phonetic:"/dɪˈstræktɪd/",chinese:"分心的"},{english:"technology",phonetic:"/tekˈnɑːlədʒi/",chinese:"科技"}]},{id:"78",title:"Chinese Tea",titleCn:"中国茶",image:"/images/78中国茶.jpg",englishText:`China is famous for tea. Tea drinking is part of Chinese culture.

There are many kinds of tea. Green tea, black tea, and flower tea. Each has its own taste.

My grandpa drinks tea every day. He says it is good for health and makes him relaxed.

To make tea, we put tea leaves in a teapot and pour hot water. The tea smells so good!

Tea is not just a drink. It is a way of life. Let us enjoy a cup of tea together!`,chineseText:`中国以茶著名。饮茶是中国文化的一部分。

茶有很多种。绿茶、红茶和花茶。每种都有自己的味道。

我爷爷每天喝茶。他说喝茶对健康有好处，让他放松。

泡茶的时候，我们把茶叶放进茶壶，倒入热水。茶闻起来好香！

茶不只是饮料。它是一种生活方式。让我们一起享受一杯茶吧！`,vocabularies:[{english:"tea",phonetic:"/tiː/",chinese:"茶"},{english:"culture",phonetic:"/ˈkʌltʃər/",chinese:"文化"},{english:"green tea",phonetic:"/ɡriːn tiː/",chinese:"绿茶"},{english:"health",phonetic:"/helθ/",chinese:"健康"},{english:"teapot",phonetic:"/ˈtiːpɑːt/",chinese:"茶壶"},{english:"relaxed",phonetic:"/rɪˈlækst/",chinese:"放松的"},{english:"taste",phonetic:"/teɪst/",chinese:"味道"},{english:"enjoy",phonetic:"/ɪnˈdʒɔɪ/",chinese:"享受"}]},{id:"79",title:"Artificial Intelligence",titleCn:"人工智能",image:"/images/79人工智能.jpg",englishText:`Artificial Intelligence, or AI, is a hot topic today. It changes our lives in many ways.

AI can play chess and win against the best players. It can also translate languages instantly.

Smartphones have AI assistants. They can answer questions and set reminders for us.

In the future, AI might drive cars and help doctors treat patients. So amazing!

But we must use AI wisely. It should help people, not replace human jobs completely.`,chineseText:`人工智能，简称AI，是今天的热门话题。它在很多方面改变着我们的生活。

AI可以下棋，赢过最好的棋手。它也可以即时翻译语言。

智能手机有AI助手。它们可以回答问题，为我们设置提醒。

在未来，AI可能会开车，帮助医生治疗病人。太神奇了！

但我们必须明智地使用AI。它应该帮助人，而不是完全取代人类的工作。`,vocabularies:[{english:"Artificial Intelligence",phonetic:"/ˌɑːrtɪfɪʃl ɪnˈtelɪdʒəns/",chinese:"人工智能"},{english:"AI",phonetic:"/eɪ aɪ/",chinese:"人工智能"},{english:"translate",phonetic:"/trænzˈleɪt/",chinese:"翻译"},{english:"assistant",phonetic:"/əˈsɪstənt/",chinese:"助手"},{english:"reminder",phonetic:"/rɪˈmaɪndər/",chinese:"提醒"},{english:"instantly",phonetic:"/ˈɪnstəntli/",chinese:"即时地"},{english:"wisely",phonetic:"/ˈwaɪzli/",chinese:"明智地"},{english:"human",phonetic:"/ˈhjuːmən/",chinese:"人类"}]},{id:"80",title:"Do Not Waste Time",titleCn:"不要浪费时间",image:"/images/80不要浪费时间.jpg",englishText:`Time is precious. Once it is gone, we can never get it back.

Some people waste time playing games all day. They do not realize time is passing by.

We should use time wisely. Study when it is study time. Play when it is play time.

Reading books, learning new skills, and exercising are good ways to use time.

Every day is a gift. Let us make the most of it and not waste a single moment!`,chineseText:`时间很宝贵。一旦失去，我们就再也回不来了。

有些人整天浪费时间玩游戏。他们没有意识到时间正在流逝。

我们应该明智地利用时间。学习的时候就学习。玩耍的时候就玩耍。

读书、学习新技能和锻炼是利用时间的好方式。

每一天都是一份礼物。让我们充分利用它，不浪费一刻！`,vocabularies:[{english:"waste",phonetic:"/weɪst/",chinese:"浪费"},{english:"time",phonetic:"/taɪm/",chinese:"时间"},{english:"precious",phonetic:"/ˈpreʃəs/",chinese:"宝贵的"},{english:"realize",phonetic:"/ˈriːəlaɪz/",chinese:"意识到"},{english:"wisely",phonetic:"/ˈwaɪzli/",chinese:"明智地"},{english:"skill",phonetic:"/skɪl/",chinese:"技能"},{english:"exercise",phonetic:"/ˈeksərsaɪz/",chinese:"锻炼"},{english:"gift",phonetic:"/ɡɪft/",chinese:"礼物"}]}],Fg=[{id:"81",title:"I Love Sports",titleCn:"我爱运动",image:"/images/81我爱运动.jpg",englishText:`Sports are important for our health. I love playing all kinds of sports.

Running makes my legs strong. I run every morning in the park.

Swimming makes my whole body work. The water is cool and refreshing.

Basketball helps me grow taller. I play with my friends every weekend.

Sports teach me teamwork and never giving up. A healthy body leads to a healthy mind!`,chineseText:`运动对我们的健康很重要。我喜欢各种各样的运动。

跑步让我的腿更强壮。我每天早上在公园跑步。

游泳让我的全身都运动起来。水又凉快又清爽。

篮球帮助我长高。我每个周末和朋友们打篮球。

运动教会我团队合作和不放弃。健康的身体带来健康的心灵！`,vocabularies:[{english:"sport",phonetic:"/spɔːrt/",chinese:"运动"},{english:"health",phonetic:"/helθ/",chinese:"健康"},{english:"running",phonetic:"/ˈrʌnɪŋ/",chinese:"跑步"},{english:"swimming",phonetic:"/ˈswɪmɪŋ/",chinese:"游泳"},{english:"teamwork",phonetic:"/ˈtiːmwɜːrk/",chinese:"团队合作"},{english:"body",phonetic:"/ˈbɑːdi/",chinese:"身体"},{english:"mind",phonetic:"/maɪnd/",chinese:"心灵"},{english:"refreshing",phonetic:"/rɪˈfreʃɪŋ/",chinese:"清爽的"}]},{id:"82",title:"I Like Myself",titleCn:"我喜欢我自己",image:"/images/82我喜欢我自己.jpg",englishText:`I am special because I am me. No one else is exactly the same.

I have my own strengths. I am good at drawing and making people laugh.

I have my own personality. I am kind and always ready to help others.

I am not perfect, but I am working on improving myself every day.

I like who I am. I am proud of my progress. Self-love is important!`,chineseText:`我是独特的，因为这就是我。没有人和我完全一样。

我有自己的优点。我擅长画画，让人发笑。

我有自己的个性。我很善良，总是愿意帮助别人。

我不完美，但我每天都在努力完善自己。

我喜欢我自己。我为我的进步骄傲。自爱很重要！`,vocabularies:[{english:"myself",phonetic:"/maɪˈself/",chinese:"我自己"},{english:"special",phonetic:"/ˈspeʃl/",chinese:"特别的"},{english:"strength",phonetic:"/streŋθ/",chinese:"优点"},{english:"personality",phonetic:"/ˌpɜːrsəˈnæləti/",chinese:"个性"},{english:"perfect",phonetic:"/ˈpɜːrfɪkt/",chinese:"完美的"},{english:"progress",phonetic:"/ˈprɑːɡres/",chinese:"进步"},{english:"self-love",phonetic:"/self lʌv/",chinese:"自爱"},{english:"proud",phonetic:"/praʊd/",chinese:"骄傲的"}]},{id:"83",title:"A Day in Summer Vacation",titleCn:"暑假的一天",image:"/images/83暑假的一天.jpg",englishText:`It is a hot summer day. I do not have school today. What a wonderful day!

In the morning, I read a storybook under the big tree in our yard. The shade is cool and nice.

After lunch, I go swimming with my friends at the community pool. We splash and play Marco Polo.

In the evening, my family eats dinner together. Mom makes delicious cold noodles. So yummy!

Before bed, I eat a bowl of watermelon. Then I say goodnight to everyone. Sweet dreams!`,chineseText:`这是一个炎热的夏日。我今天不用上学。多美好的一天啊！

早上，我在院子里的大树下看故事书。树荫又凉快又舒服。

午饭后，我和朋友们去社区游泳池游泳。我们嬉水玩水球游戏。

晚上，我家人一起吃晚饭。妈妈做了美味的凉面。好吃！

睡觉前，我吃了一碗西瓜。然后我和大家说晚安。甜蜜的梦！`,vocabularies:[{english:"vacation",phonetic:"/veɪˈkeɪʃn/",chinese:"假期"},{english:"storybook",phonetic:"/ˈstɔːribʊk/",chinese:"故事书"},{english:"shade",phonetic:"/ʃeɪd/",chinese:"阴凉处"},{english:"swimming",phonetic:"/ˈswɪmɪŋ/",chinese:"游泳"},{english:"splash",phonetic:"/splæʃ/",chinese:"溅水"},{english:"noodle",phonetic:"/ˈnuːdl/",chinese:"面条"},{english:"watermelon",phonetic:"/ˈwɔːtərmelən/",chinese:"西瓜"},{english:"goodnight",phonetic:"/ˌɡʊdˈnaɪt/",chinese:"晚安"}]},{id:"84",title:"My Bedroom",titleCn:"我的卧室",image:"/images/84我的卧室.jpg",englishText:`My bedroom is my favorite room. It is small but cozy and comfortable.

My bed is in the corner. It has blue sheets with stars on them. So dreamy!

My desk is near the window. I do homework there and watch the sunset sometimes.

I have a bookshelf full of my favorite books. I can read for hours there.

I keep my bedroom clean and tidy. A clean room makes my mind clear and peaceful!`,chineseText:`我的卧室是我最喜欢的房间。它小但温馨舒适。

我的床在角落里。床单是蓝色的，上面有星星。好梦幻！

我的书桌在窗户旁边。我在那里做作业，有时候看日落。

我有一个装满我最爱书籍的书架。我可以在那里看几个小时的书。

我保持卧室干净整洁。整洁的房间让我的心灵清明平静！`,vocabularies:[{english:"bedroom",phonetic:"/ˈbedruːm/",chinese:"卧室"},{english:"cozy",phonetic:"/ˈkoʊzi/",chinese:"舒适的"},{english:"corner",phonetic:"/ˈkɔːrnər/",chinese:"角落"},{english:"sheet",phonetic:"/ʃiːt/",chinese:"床单"},{english:"sunset",phonetic:"/ˈsʌnset/",chinese:"日落"},{english:"bookshelf",phonetic:"/ˈbʊkʃelf/",chinese:"书架"},{english:"tidy",phonetic:"/ˈtaɪdi/",chinese:"整洁的"},{english:"peaceful",phonetic:"/ˈpiːsfl/",chinese:"平静的"}]},{id:"85",title:"I Love the Sea",titleCn:"我喜欢大海",image:"/images/85我喜欢大海.jpg",englishText:`The sea is blue and vast. I love the sea more than anything!

When I stand by the sea, I feel so small. But it makes me feel free at the same time.

The waves crash on the shore again and again. It sounds like a lullaby.

The sea has so many treasures. Shells, crabs, and colorful fish. I can explore for hours!

Every summer, I go to the beach. The sea is my second home. I love the sea forever!`,chineseText:`大海又蓝又辽阔。我爱大海胜过一切！

当我站在海边，我感觉自己很渺小。但同时也感到自由。

海浪一次又一次拍打着海岸。听起来像一首摇篮曲。

大海有那么多宝藏。贝壳、螃蟹和色彩斑斓的鱼。我可以探索好几个小时！

每年夏天，我去海边。大海是我的第二个家。我永远爱大海！`,vocabularies:[{english:"sea",phonetic:"/siː/",chinese:"大海"},{english:"vast",phonetic:"/væst/",chinese:"辽阔的"},{english:"wave",phonetic:"/weɪv/",chinese:"海浪"},{english:"shore",phonetic:"/ʃɔːr/",chinese:"海岸"},{english:"lullaby",phonetic:"/ˈlʌləbaɪ/",chinese:"摇篮曲"},{english:"treasure",phonetic:"/ˈtreʒər/",chinese:"宝藏"},{english:"shell",phonetic:"/ʃel/",chinese:"贝壳"},{english:"explore",phonetic:"/ɪkˈsplɔːr/",chinese:"探索"}]},{id:"86",title:"Summer Palace",titleCn:"颐和园",image:"/images/86颐和园.jpg",englishText:`The Summer Palace is in Beijing. It is one of the most beautiful places in China.

There is a huge lake called Kunming Lake. The water is clear and sparkles in the sunlight.

The Long Corridor has many painted pictures on the ceiling. Each picture tells a different story.

We can take a boat on the lake or walk through the beautiful gardens. So relaxing!

The Summer Palace shows the智慧 of ancient Chinese architects. It is a place worth visiting!`,chineseText:`颐和园在北京。它是中国最美丽的地方之一。

有一个巨大的湖泊叫昆明湖。湖水清澈，在阳光下闪闪发光。

长廊的天花板上有很多绘画。每幅画都讲述着不同的故事。

我们可以在湖上划船，或者走在美丽的花园里。好惬意！

颐和园展示了古中国建筑师的智慧。这是一个值得参观的地方！`,vocabularies:[{english:"Summer Palace",phonetic:"/ˈsʌmər ˈpæləs/",chinese:"颐和园"},{english:"lake",phonetic:"/leɪk/",chinese:"湖"},{english:"sparkle",phonetic:"/ˈspɑːrkl/",chinese:"闪闪发光"},{english:"corridor",phonetic:"/ˈkɔːrɪdɔːr/",chinese:"长廊"},{english:"ceiling",phonetic:"/ˈsiːlɪŋ/",chinese:"天花板"},{english:"boat",phonetic:"/boʊt/",chinese:"船"},{english:"architect",phonetic:"/ˈɑːrkɪtekt/",chinese:"建筑师"},{english:"worth",phonetic:"/wɜːrθ/",chinese:"值得"}]},{id:"87",title:"Wash Your Hands Often",titleCn:"勤洗手",image:"/images/87勤洗手.jpg",englishText:`Washing hands is important. It keeps germs away and us healthy.

We should wash our hands before eating and after using the toilet. Also after playing outside.

To wash hands properly, we need soap and water. Rub hands together for twenty seconds.

Sing "Happy Birthday" twice while washing. That is about twenty seconds!

Clean hands help stop the spread of germs. Washing hands is a simple but powerful habit!`,chineseText:`洗手很重要。它让细菌远离，让我们健康。

我们应该在饭前便后洗手。也在外面玩耍后洗手。

正确洗手，我们需要肥皂和水。双手搓揉二十秒。

洗手的时候唱两遍"生日快乐"！大约二十秒！

干净的手帮助阻止细菌传播。洗手是一个简单但有力的习惯！`,vocabularies:[{english:"wash hands",phonetic:"/wɑːʃ hændz/",chinese:"洗手"},{english:"germ",phonetic:"/dʒɜːrm/",chinese:"细菌"},{english:"healthy",phonetic:"/ˈhelθi/",chinese:"健康的"},{english:"soap",phonetic:"/soʊp/",chinese:"肥皂"},{english:"rub",phonetic:"/rʌb/",chinese:"搓"},{english:"toilet",phonetic:"/ˈtɔɪlət/",chinese:"厕所"},{english:"spread",phonetic:"/spred/",chinese:"传播"},{english:"habit",phonetic:"/ˈhæbɪt/",chinese:"习惯"}]},{id:"88",title:"Making a Cake",titleCn:"做蛋糕",image:"/images/88做蛋糕.jpg",englishText:`Today is my birthday! I am going to make a cake with mom.

First, we mix flour, sugar, eggs, and butter together. We stir until it is smooth.

Then we pour the batter into a cake pan. Mom puts it in the oven.

While waiting, we make frosting. We use cream, sugar, and vanilla. So sweet!

After the cake cools, we add frosting and candles. One candle for each year. Happy birthday to me!`,chineseText:`今天是我的生日！我要和妈妈一起做蛋糕。

首先，我们把面粉、糖、鸡蛋和黄油混合在一起。我们搅拌直到变得光滑。

然后我们把面糊倒进蛋糕模具里。妈妈把它放进烤箱。

等待的时候，我们做糖霜。我们用奶油、糖和香草。好甜！

蛋糕凉下来后，我们加上糖霜和蜡烛。每岁一根蜡烛。祝我生日快乐！`,vocabularies:[{english:"cake",phonetic:"/keɪk/",chinese:"蛋糕"},{english:"flour",phonetic:"/ˈflaʊər/",chinese:"面粉"},{english:"sugar",phonetic:"/ˈʃʊɡər/",chinese:"糖"},{english:"batter",phonetic:"/ˈbætər/",chinese:"面糊"},{english:"oven",phonetic:"/ˈʌvn/",chinese:"烤箱"},{english:"frosting",phonetic:"/ˈfrɔːstɪŋ/",chinese:"糖霜"},{english:"candle",phonetic:"/ˈkændl/",chinese:"蜡烛"},{english:"birthday",phonetic:"/ˈbɜːrθdeɪ/",chinese:"生日"}]},{id:"89",title:"Paris Olympics",titleCn:"巴黎奥运会",image:"/images/89巴黎奥运会.jpg",englishText:`The Olympics is the biggest sports event in the world. Athletes from many countries compete.

The Olympic rings stand for five continents. They are blue, yellow, black, green, and red.

Athletes train very hard. They want to win gold medals for their countries.

The most important thing is not winning but participating. The Olympic spirit is about peace and friendship.

I dream of becoming an Olympian one day. Maybe I can win a medal for China!`,chineseText:`奥运会是世界上最大的体育赛事。来自很多国家的运动员同场竞技。

奥运五环代表着五大洲。它们是蓝色、黄色、黑色、绿色和红色。

运动员们训练非常刻苦。他们想为自己的国家赢得金牌。

最重要的是不是获胜，而是参与。奥运精神是关于和平与友谊的。

我梦想有一天成为奥运选手。也许我可以为中国赢得奖牌！`,vocabularies:[{english:"Olympics",phonetic:"/əˈlɪmpɪks/",chinese:"奥运会"},{english:"athlete",phonetic:"/ˈæθliːt/",chinese:"运动员"},{english:"continent",phonetic:"/ˈkɑːntɪnənt/",chinese:"洲"},{english:"medal",phonetic:"/ˈmedl/",chinese:"奖牌"},{english:"compete",phonetic:"/kəmˈpiːt/",chinese:"竞争"},{english:"spirit",phonetic:"/ˈspɪrɪt/",chinese:"精神"},{english:"peace",phonetic:"/piːs/",chinese:"和平"},{english:"friendship",phonetic:"/ˈfrendʃɪp/",chinese:"友谊"}]},{id:"90",title:"Table Tennis Match",titleCn:"乒乓球比赛",image:"/images/90乒乓球比赛.jpg",englishText:`Table tennis is a popular sport in China. It is also called ping-pong.

Yesterday, our school had a table tennis match. I was nervous but excited.

I served the ball first. It flew over the net quickly. My opponent hit it back.

We hit the ball back and forth. The sound went "ping pong ping pong!"

In the end, I won the match. My teammates cheered for me. I was so proud!`,chineseText:`乒乓球在中国是一项受欢迎的运动。它也叫ping-pong。

昨天，我们学校有乒乓球比赛。我紧张但兴奋。

我先发球。球飞快地越过球网。对手打了回来。

我们一来一回地打。声音是"乒乓乒乓"！

最后，我赢了比赛。我的队友为我欢呼。我太骄傲了！`,vocabularies:[{english:"table tennis",phonetic:"/ˈteɪbl ˈtenɪs/",chinese:"乒乓球"},{english:"match",phonetic:"/mætʃ/",chinese:"比赛"},{english:"nervous",phonetic:"/ˈnɜːrvəs/",chinese:"紧张的"},{english:"serve",phonetic:"/sɜːrv/",chinese:"发球"},{english:"opponent",phonetic:"/əˈpoʊnənt/",chinese:"对手"},{english:"team",phonetic:"/tiːm/",chinese:"队"},{english:"cheer",phonetic:"/tʃɪr/",chinese:"欢呼"},{english:"proud",phonetic:"/praʊd/",chinese:"骄傲的"}]}],Dg=[{id:"91",title:"Olympic Spirit",titleCn:"奥运精神",image:"/images/91奥运精神.jpg",englishText:`The Olympic spirit teaches us important values. It is about more than just winning.

The first value is friendship. Athletes from different countries become friends through sports.

The second value is excellence. Athletes try their best and improve themselves every day.

The third value is respect. Athletes respect the rules, their opponents, and the judges.

The Olympic motto is "Faster, Higher, Stronger." But the real spirit is to never give up and always try your best!

The Olympic spirit inspires people all over the world. It makes the world a better place!`,chineseText:`奥运精神教给我们重要的价值观。它不只是关于获胜。

第一个价值观是友谊。来自不同国家的运动员通过运动成为朋友。

第二个价值观是卓越。运动员每天尽全力，提升自己。

第三个价值观是尊重。运动员尊重规则、尊重对手和裁判。

奥林匹克的口号是"更快、更高、更强"。但真正的精神是永不放弃，永远尽力！

奥运精神鼓舞着全世界的人。它让世界变得更美好！`,vocabularies:[{english:"Olympic spirit",phonetic:"/əˈlɪmpɪk ˈspɪrɪt/",chinese:"奥运精神"},{english:"friendship",phonetic:"/ˈfrendʃɪp/",chinese:"友谊"},{english:"excellence",phonetic:"/ˈeksələns/",chinese:"卓越"},{english:"respect",phonetic:"/rɪˈspekt/",chinese:"尊重"},{english:"motto",phonetic:"/ˈmɑːtoʊ/",chinese:"口号"},{english:"inspire",phonetic:"/ɪnˈspaɪər/",chinese:"鼓舞"},{english:"opponent",phonetic:"/əˈpoʊnənt/",chinese:"对手"},{english:"judge",phonetic:"/dʒʌdʒ/",chinese:"裁判"}]},{id:"92",title:"Visiting the Zoo",titleCn:"参观动物园",image:"/images/92参观动物园.jpg",englishText:`Last weekend, my family went to the zoo. I was so excited to see the animals!

The lion is called the king of the jungle. It has a big mane and roars loudly. So powerful!

The giraffe has a very long neck. It can eat leaves from tall trees. So special!

The monkeys are so playful. They swing from tree to tree and show funny faces.

The zoo taught me to love and protect animals. They are our friends on Earth!`,chineseText:`上周末，我家人去了动物园。看到动物们我太激动了！

狮子被称为丛林之王。它有一头大的鬓毛，大声咆哮。好威风！

长颈鹿有长长的脖子。它能从高高的树上吃叶子。好特别！

猴子们太顽皮了。它们在树间荡来荡去，做着滑稽的表情。

动物园教会我热爱和保护动物。它们是我们地球上的朋友！`,vocabularies:[{english:"zoo",phonetic:"/zuː/",chinese:"动物园"},{english:"lion",phonetic:"/ˈlaɪən/",chinese:"狮子"},{english:"giraffe",phonetic:"/dʒəˈræf/",chinese:"长颈鹿"},{english:"monkey",phonetic:"/ˈmʌŋki/",chinese:"猴子"},{english:"jungle",phonetic:"/ˈdʒʌŋɡl/",chinese:"丛林"},{english:"mane",phonetic:"/meɪn/",chinese:"鬓毛"},{english:"swing",phonetic:"/swɪŋ/",chinese:"摇摆"},{english:"protect",phonetic:"/prəˈtekt/",chinese:"保护"}]},{id:"93",title:"My Summer Life",titleCn:"我的暑假生活",image:"/images/93我的暑假生活.jpg",englishText:`Summer vacation is half over. Let me tell you about my summer life!

In the mornings, I do my homework and read books. Learning never stops, even in vacation.

In the afternoons, I play outside with my friends. We ride bikes and catch cicadas.

In the evenings, my family takes a walk in the park. The air is fresh and cool.

On weekends, we sometimes go on trips. We visited the zoo and the museum. So fun!

My summer is colorful and wonderful. I am making memories that will last forever!`,chineseText:`暑假已经过了一半。让我告诉你我的暑假生活！

早上，我做作业和看书。即使在假期，学习也不能停止。

下午，我和朋友们在外面玩。我们骑自行车，捉蝉。

晚上，我家人去公园散步。空气清新又凉爽。

周末，我们有时候去旅行。我们参观了动物园和博物馆。好开心！

我的暑假五彩缤纷，美妙无比。我正在创造将永远持续的记忆！`,vocabularies:[{english:"summer vacation",phonetic:"/ˈsʌmər veɪˈkeɪʃn/",chinese:"暑假"},{english:"cicada",phonetic:"/sɪˈkeɪdə/",chinese:"蝉"},{english:"museum",phonetic:"/mjuˈziːəm/",chinese:"博物馆"},{english:"memory",phonetic:"/ˈmeməri/",chinese:"记忆"},{english:"colorful",phonetic:"/ˈkʌlərfl/",chinese:"五彩缤纷的"},{english:"wonderful",phonetic:"/ˈwʌndərfl/",chinese:"美妙的"},{english:"fresh",phonetic:"/freʃ/",chinese:"新鲜的"},{english:"trip",phonetic:"/trɪp/",chinese:"旅行"}]},{id:"94",title:"Hello, August",titleCn:"你好八月",image:"/images/94你好八月.jpg",englishText:`August is here! The second month of summer vacation has begun.

August is even hotter than July. The sun is strong and the days are long.

School will start soon. I need to prepare my school things and review my lessons.

But there is still time for fun! I want to go to the beach one more time before school.

Hello, August! Let us make the best of your last days of freedom!`,chineseText:`八月来了！暑假的第二个月开始了。

八月比七月更热。太阳很强烈，白天很长。

学校很快就要开学了。我需要准备学校用品，复习功课。

但还有时间玩耍！我想在开学前再去一次海边。

你好，八月！让我们好好利用你最后几天自由的时光吧！`,vocabularies:[{english:"August",phonetic:"/ˈɔːɡəst/",chinese:"八月"},{english:"vacation",phonetic:"/veɪˈkeɪʃn/",chinese:"假期"},{english:"hot",phonetic:"/hɑːt/",chinese:"热的"},{english:"prepare",phonetic:"/prɪˈper/",chinese:"准备"},{english:"review",phonetic:"/rɪˈvjuː/",chinese:"复习"},{english:"lesson",phonetic:"/ˈlesn/",chinese:"功课"},{english:"freedom",phonetic:"/ˈfriːdəm/",chinese:"自由"},{english:"beach",phonetic:"/biːtʃ/",chinese:"海边"}]},{id:"95",title:"Dog Days",titleCn:"三伏天",image:"/images/95三伏天.jpg",englishText:`Dog Days is the hottest period of summer. It usually lasts from mid-July to mid-August.

During Dog Days, people try to stay cool. They drink cold drinks and eat watermelons.

Taking a nap in the afternoon is popular during this time. The afternoon sun makes people sleepy.

Some people go to places with cool air, like swimming pools or air-conditioned malls.

Dog Days will pass soon. Autumn is coming after it. Keep cool and stay healthy!`,chineseText:`三伏天是夏天最热的时期。它通常从七月中旬持续到八月中旬。

在三伏天，人们尽量保持凉爽。他们喝冷饮，吃西瓜。

这段时间下午小睡很流行。下午的太阳让人昏昏欲睡。

有些人去凉爽的地方，比如游泳池或有空调的商场。

三伏天很快就会过去。秋天在它之后来。保持凉爽，保重身体！`,vocabularies:[{english:"Dog Days",phonetic:"/dɔːɡ deɪz/",chinese:"三伏天"},{english:"hottest",phonetic:"/ˈhɑːtɪst/",chinese:"最热的"},{english:"period",phonetic:"/ˈpɪriəd/",chinese:"时期"},{english:"nap",phonetic:"/næp/",chinese:"小睡"},{english:"sleepy",phonetic:"/ˈsliːpi/",chinese:"困倦的"},{english:"air-conditioned",phonetic:"/ˈer kəndɪʃnd/",chinese:"有空调的"},{english:"autumn",phonetic:"/ˈɔːtəm/",chinese:"秋天"},{english:"healthy",phonetic:"/ˈhelθi/",chinese:"健康的"}]},{id:"96",title:"My Piano",titleCn:"我的钢琴",image:"/images/96我的钢琴.jpg",englishText:`I have a beautiful black piano in my room. It was my grandparents' gift to me.

I started learning piano two years ago. At first, it was hard to read the notes.

Now I can play many songs. "Twinkle Twinkle Little Star" and "Happy Birthday" are my favorites.

Playing piano makes me feel calm and happy. Music touches my heart.

I practice every day for one hour. One day, I want to play beautifully like a professional!`,chineseText:`我房间里有一架漂亮的黑色钢琴。这是祖父母送给我的礼物。

两年前我开始学钢琴。起初，看音符很难。

现在我会弹很多曲子。《小星星》和《生日快乐》是我最喜欢的。

弹钢琴让我感到平静和快乐。音乐触动我的心灵。

我每天练习一个小时。有一天，我想像专业人士一样弹得动听！`,vocabularies:[{english:"piano",phonetic:"/piˈænoʊ/",chinese:"钢琴"},{english:"note",phonetic:"/noʊt/",chinese:"音符"},{english:"twinkle",phonetic:"/ˈtwɪŋkl/",chinese:"闪烁"},{english:"calm",phonetic:"/kɑːm/",chinese:"平静的"},{english:"music",phonetic:"/ˈmjuːzɪk/",chinese:"音乐"},{english:"practice",phonetic:"/ˈpræktɪs/",chinese:"练习"},{english:"professional",phonetic:"/prəˈfeʃənl/",chinese:"专业的"},{english:"heart",phonetic:"/hɑːrt/",chinese:"心灵"}]},{id:"97",title:"Beijing Opera",titleCn:"京剧",image:"/images/97京剧.jpg",englishText:`Beijing Opera is a traditional Chinese art form. It is also called Peking Opera.

Performers wear colorful costumes and makeup. Each color has a special meaning.

Red means brave and loyal. White means tricky or cunning. Blue means steady and calm.

The singing is special. Performers use their voices to express different emotions.

Beijing Opera is a treasure of Chinese culture. We should protect and pass it on to future generations!`,chineseText:`京剧是一种传统中国艺术形式。它也叫Peking Opera。

表演者穿着色彩缤纷的戏服，化着妆。每种颜色都有特殊的含义。

红色代表勇敢和忠诚。白色代表狡猾。蓝色代表沉稳冷静。

演唱很特别。表演者用他们的声音表达不同的情感。

京剧是中国文化的瑰宝。我们应该保护和传承给后代！`,vocabularies:[{english:"Beijing Opera",phonetic:"/beɪˈdʒɪŋ ˈɑːpərə/",chinese:"京剧"},{english:"traditional",phonetic:"/trəˈdɪʃənl/",chinese:"传统的"},{english:"costume",phonetic:"/ˈkɑːstuːm/",chinese:"戏服"},{english:"makeup",phonetic:"/ˈmeɪkʌp/",chinese:"化妆"},{english:"brave",phonetic:"/breɪv/",chinese:"勇敢的"},{english:"loyal",phonetic:"/ˈlɔɪəl/",chinese:"忠诚的"},{english:"emotion",phonetic:"/ɪˈmoʊʃn/",chinese:"情感"},{english:"treasure",phonetic:"/ˈtreʒər/",chinese:"瑰宝"}]},{id:"98",title:"Chinese Porcelain",titleCn:"中国瓷器",image:"/images/98中国瓷器.jpg",englishText:`Chinese porcelain is famous all over the world. China is called the birthplace of porcelain.

Porcelain is made from a special kind of clay. It is fired in very hot kilns.

The most famous type is blue and white porcelain. It has beautiful blue patterns on white backgrounds.

Porcelain plates, cups, and vases are both useful and beautiful. They are often given as gifts.

The art of making porcelain has been passed down for thousands of years. It is part of Chinese heritage!`,chineseText:`中国瓷器闻名世界。中国被称为瓷器的诞生地。

瓷器是用一种特殊的黏土制成的。它在非常热的窑中烧制。

最著名的类型是青花瓷。它在白色底上有着美丽的蓝色图案。

瓷盘、瓷杯和瓷花瓶既实用又美观。它们经常被作为礼物赠送。

制瓷艺术已经传承了数千年。它是中国文化遗产的一部分！`,vocabularies:[{english:"porcelain",phonetic:"/ˈpɔːrsəlɪn/",chinese:"瓷器"},{english:"birthplace",phonetic:"/ˈbɜːrθpleɪs/",chinese:"诞生地"},{english:"clay",phonetic:"/kleɪ/",chinese:"黏土"},{english:"kiln",phonetic:"/kɪln/",chinese:"窑"},{english:"pattern",phonetic:"/ˈpætərn/",chinese:"图案"},{english:"vase",phonetic:"/veɪs/",chinese:"花瓶"},{english:"heritage",phonetic:"/ˈherɪtɪdʒ/",chinese:"遗产"},{english:"thousand",phonetic:"/ˈθaʊznd/",chinese:"千"}]},{id:"99",title:"Overcoming Fear",titleCn:"克服恐惧",image:"/images/99克服恐惧.jpg",englishText:`Everyone feels scared sometimes. I used to be afraid of the dark.

At night, I would imagine monsters under my bed. I could not sleep well.

Mom gave me a night light. It made the room bright and cozy.

Dad taught me that fear is normal. But I should be brave and face my fears.

Now I am not afraid of the dark anymore. I learned that courage is not being fearless, but facing fears anyway!`,chineseText:`每个人有时候都会感到害怕。我以前怕黑。

晚上，我会想象床底下有怪物。我睡不好觉。

妈妈给了我一个小夜灯。它让房间明亮又温馨。

爸爸教我恐惧是正常的。但我应该勇敢，面对恐惧。

现在我不再怕黑了。我明白了勇气不是没有恐惧，而是无论如何都要面对恐惧！`,vocabularies:[{english:"fear",phonetic:"/fɪr/",chinese:"恐惧"},{english:"scared",phonetic:"/skerd/",chinese:"害怕的"},{english:"monster",phonetic:"/ˈmɑːnstər/",chinese:"怪物"},{english:"night light",phonetic:"/naɪt laɪt/",chinese:"小夜灯"},{english:"bright",phonetic:"/braɪt/",chinese:"明亮的"},{english:"courage",phonetic:"/ˈkɜːrɪdʒ/",chinese:"勇气"},{english:"brave",phonetic:"/breɪv/",chinese:"勇敢的"},{english:"normal",phonetic:"/ˈnɔːrml/",chinese:"正常的"}]},{id:"100",title:"Olympic Gold Medal",titleCn:"奥运金牌",image:"/images/100奥运金牌.jpg",englishText:`The Olympic gold medal is the highest honor for athletes. It represents years of hard work.

To win a gold medal, athletes train every day. They wake up early and practice until night.

They face injuries and setbacks. But they never give up on their dreams.

When the national anthem plays and the flag rises, tears of joy flow. All the hard work pays off.

A gold medal is not just about glory. It is about dedication, discipline, and never giving up. That is the true spirit!`,chineseText:`奥运金牌是运动员的最高荣誉。它代表着多年的努力。

要赢得金牌，运动员每天训练。他们早起，练习到深夜。

他们面对伤病和挫折。但他们从不放弃梦想。

当国歌响起，国旗升起时，喜悦的泪水流淌。所有的努力都得到了回报。

金牌不只是关于荣耀。它是关于奉献、自律和永不放弃。这就是真正的精神！`,vocabularies:[{english:"gold medal",phonetic:"/ɡoʊld ˈmedl/",chinese:"金牌"},{english:"honor",phonetic:"/ˈɑːnər/",chinese:"荣誉"},{english:"train",phonetic:"/treɪn/",chinese:"训练"},{english:"injury",phonetic:"/ˈɪndʒəri/",chinese:"伤病"},{english:"national anthem",phonetic:"/ˈnæʃnəl ˈænθəm/",chinese:"国歌"},{english:"glory",phonetic:"/ˈɡlɔːri/",chinese:"荣耀"},{english:"dedication",phonetic:"/ˌdedɪˈkeɪʃn/",chinese:"奉献"},{english:"discipline",phonetic:"/ˈdɪsəplɪn/",chinese:"自律"}]}],Og=[...Mg,...zg,...Ng,...Pg,...Wg,..._g,...Lg,...Ag,...Fg,...Dg],Rg=Og.flatMap(e=>(e.vocabularies||[]).map(n=>({english:n.english,phonetic:n.phonetic,chinese:n.chinese,source:e.titleCn})));function Bg(){const[e,n]=T.useState(""),i=Rg.filter(s=>s.english.toLowerCase().includes(e.toLowerCase())||s.chinese.includes(e)),t=s=>{Cg(s);const l=new SpeechSynthesisUtterance(s);l.lang="en-US",l.rate=.85,speechSynthesis.speak(l)};return f.jsxs("div",{className:"words-page",children:[f.jsxs("div",{className:"header",children:[f.jsx("h1",{className:"page-title",children:"📖 单词列表"}),f.jsxs("div",{className:"search-box",children:[f.jsx("span",{className:"search-icon",children:"🔍"}),f.jsx("input",{type:"text",placeholder:"搜索单词...",value:e,onChange:s=>n(s.target.value)})]})]}),f.jsxs("div",{className:"word-count",children:["共 ",i.length," 个词汇"]}),f.jsx("div",{className:"word-list",children:i.map((s,l)=>f.jsxs("div",{className:"word-card",children:[f.jsxs("div",{className:"word-main",children:[f.jsxs("div",{className:"word-row",children:[f.jsx("span",{className:"word-english",children:s.english}),f.jsx("button",{className:"speak-btn",onClick:()=>t(s.english),children:"🔊"})]}),f.jsx("div",{className:"word-phonetic",children:s.phonetic}),f.jsx("div",{className:"word-chinese",children:s.chinese})]}),f.jsxs("div",{className:"word-source",children:["📚 ",s.source]})]},l))}),f.jsx("style",{children:`
        .words-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #E8F4FD 0%, #F5F7FA 100%);
          padding: 20px;
          padding-bottom: 100px;
        }

        .header {
          margin-bottom: 16px;
        }

        .page-title {
          font-size: 22px;
          font-weight: 700;
          color: #333;
          margin-bottom: 16px;
        }

        .search-box {
          background: #fff;
          border-radius: 12px;
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }

        .search-icon {
          font-size: 16px;
        }

        .search-box input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 15px;
          background: transparent;
        }

        .word-count {
          font-size: 13px;
          color: #666;
          margin-bottom: 16px;
        }

        .word-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .word-card {
          background: #fff;
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }

        .word-main {
          margin-bottom: 8px;
        }

        .word-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4px;
        }

        .word-english {
          font-size: 18px;
          font-weight: 600;
          color: #333;
        }

        .speak-btn {
          font-size: 16px;
          opacity: 0.6;
          transition: opacity 0.2s;
        }

        .speak-btn:active {
          opacity: 1;
        }

        .word-phonetic {
          font-size: 13px;
          color: #999;
          margin-bottom: 4px;
        }

        .word-chinese {
          font-size: 15px;
          color: #666;
        }

        .word-source {
          font-size: 12px;
          color: #4A90D9;
          background: rgba(74, 144, 217, 0.1);
          padding: 4px 10px;
          border-radius: 10px;
          display: inline-block;
        }
      `})]})}function Hg(){const{readCount:e,learnedCount:n}=jg();return f.jsxs("div",{className:"profile-page",children:[f.jsxs("div",{className:"profile-header",children:[f.jsx("div",{className:"avatar",children:f.jsx("span",{children:"👧"})}),f.jsxs("div",{className:"user-info",children:[f.jsx("div",{className:"user-name",children:"小学霸"}),f.jsxs("div",{className:"user-stats",children:[f.jsxs("span",{children:["📚 已读 ",e," 篇"]}),f.jsxs("span",{children:["⭐ 已学 ",n," 词"]})]})]})]}),f.jsxs("div",{className:"stats-section",children:[f.jsx("div",{className:"stats-title",children:"学习统计"}),f.jsxs("div",{className:"stats-grid",children:[f.jsxs("div",{className:"stat-card",children:[f.jsx("div",{className:"stat-icon",children:"📖"}),f.jsx("div",{className:"stat-value",children:e}),f.jsx("div",{className:"stat-label",children:"阅读绘本"})]}),f.jsxs("div",{className:"stat-card",children:[f.jsx("div",{className:"stat-icon",children:"📝"}),f.jsx("div",{className:"stat-value",children:n}),f.jsx("div",{className:"stat-label",children:"学习词汇"})]})]})]}),f.jsx("div",{className:"about-section",children:f.jsx("div",{className:"about-item",children:f.jsx("span",{children:"📖 英语点读宝 v1.0"})})}),f.jsx("style",{children:`
        .profile-page {
          min-height: 100vh;
          background: linear-gradient(180deg, #E8F4FD 0%, #F5F7FA 100%);
          padding: 20px;
          padding-bottom: 100px;
        }

        .profile-header {
          background: linear-gradient(135deg, #4A90D9 0%, #6BA3E0 100%);
          border-radius: 20px;
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .avatar {
          width: 64px;
          height: 64px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 36px;
        }

        .user-info {
          color: #fff;
        }

        .user-name {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .user-stats {
          display: flex;
          gap: 16px;
          font-size: 13px;
          opacity: 0.9;
        }

        .stats-section {
          background: #fff;
          border-radius: 16px;
          padding: 20px;
          margin-bottom: 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }

        .stats-title {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          margin-bottom: 16px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .stat-card {
          text-align: center;
          padding: 20px;
          background: linear-gradient(135deg, #E8F4FD 0%, #F0F7FF 100%);
          border-radius: 16px;
        }

        .stat-icon {
          font-size: 28px;
          margin-bottom: 8px;
        }

        .stat-value {
          font-size: 28px;
          font-weight: 700;
          color: #4A90D9;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 14px;
          color: #666;
        }

        .about-section {
          background: #fff;
          border-radius: 16px;
          padding: 16px 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }

        .about-item {
          padding: 14px 0;
          font-size: 14px;
          color: #666;
          text-align: center;
        }
      `})]})}function Ug(){return f.jsx(yg,{children:f.jsxs("div",{className:"app",children:[f.jsxs(gg,{children:[f.jsx($n,{path:"/",element:f.jsx(Ig,{})}),f.jsx($n,{path:"/reading/:id",element:f.jsx(Eg,{})}),f.jsx($n,{path:"/words",element:f.jsx(Bg,{})}),f.jsx($n,{path:"/profile",element:f.jsx(Hg,{})}),f.jsx($n,{path:"*",element:f.jsx(pg,{to:"/",replace:!0})})]}),f.jsx(wg,{}),f.jsx("style",{children:`
          .app {
            width: 100%;
            min-height: 100vh;
            background: #F5F7FA;
            position: relative;
          }
        `})]})})}cl.createRoot(document.getElementById("root")).render(f.jsx(za.StrictMode,{children:f.jsx(Ug,{})}));
