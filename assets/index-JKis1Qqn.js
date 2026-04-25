function Hu(e,n){for(var t=0;t<n.length;t++){const i=n[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in e)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(e,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Vu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ya={exports:{}},hr={},va={exports:{}},_={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ii=Symbol.for("react.element"),$u=Symbol.for("react.portal"),Qu=Symbol.for("react.fragment"),Yu=Symbol.for("react.strict_mode"),Gu=Symbol.for("react.profiler"),Ku=Symbol.for("react.provider"),Xu=Symbol.for("react.context"),Ju=Symbol.for("react.forward_ref"),Zu=Symbol.for("react.suspense"),qu=Symbol.for("react.memo"),eh=Symbol.for("react.lazy"),Zl=Symbol.iterator;function nh(e){return e===null||typeof e!="object"?null:(e=Zl&&e[Zl]||e["@@iterator"],typeof e=="function"?e:null)}var wa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ka=Object.assign,xa={};function ht(e,n,t){this.props=e,this.context=n,this.refs=xa,this.updater=t||wa}ht.prototype.isReactComponent={};ht.prototype.setState=function(e,n){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")};ht.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Sa(){}Sa.prototype=ht.prototype;function nl(e,n,t){this.props=e,this.context=n,this.refs=xa,this.updater=t||wa}var tl=nl.prototype=new Sa;tl.constructor=nl;ka(tl,ht.prototype);tl.isPureReactComponent=!0;var ql=Array.isArray,Ta=Object.prototype.hasOwnProperty,il={current:null},Ia={key:!0,ref:!0,__self:!0,__source:!0};function Ca(e,n,t){var i,r={},s=null,l=null;if(n!=null)for(i in n.ref!==void 0&&(l=n.ref),n.key!==void 0&&(s=""+n.key),n)Ta.call(n,i)&&!Ia.hasOwnProperty(i)&&(r[i]=n[i]);var o=arguments.length-2;if(o===1)r.children=t;else if(1<o){for(var a=Array(o),u=0;u<o;u++)a[u]=arguments[u+2];r.children=a}if(e&&e.defaultProps)for(i in o=e.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:ii,type:e,key:s,ref:l,props:r,_owner:il.current}}function th(e,n){return{$$typeof:ii,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function rl(e){return typeof e=="object"&&e!==null&&e.$$typeof===ii}function ih(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return n[t]})}var eo=/\/+/g;function Mr(e,n){return typeof e=="object"&&e!==null&&e.key!=null?ih(""+e.key):n.toString(36)}function Ni(e,n,t,i,r){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case ii:case $u:l=!0}}if(l)return l=e,r=r(l),e=i===""?"."+Mr(l,0):i,ql(r)?(t="",e!=null&&(t=e.replace(eo,"$&/")+"/"),Ni(r,n,t,"",function(u){return u})):r!=null&&(rl(r)&&(r=th(r,t+(!r.key||l&&l.key===r.key?"":(""+r.key).replace(eo,"$&/")+"/")+e)),n.push(r)),1;if(l=0,i=i===""?".":i+":",ql(e))for(var o=0;o<e.length;o++){s=e[o];var a=i+Mr(s,o);l+=Ni(s,n,t,a,r)}else if(a=nh(e),typeof a=="function")for(e=a.call(e),o=0;!(s=e.next()).done;)s=s.value,a=i+Mr(s,o++),l+=Ni(s,n,t,a,r);else if(s==="object")throw n=String(e),Error("Objects are not valid as a React child (found: "+(n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return l}function di(e,n,t){if(e==null)return e;var i=[],r=0;return Ni(e,i,"","",function(s){return n.call(t,s,r++)}),i}function rh(e){if(e._status===-1){var n=e._result;n=n(),n.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=n)}if(e._status===1)return e._result.default;throw e._result}var ce={current:null},zi={transition:null},sh={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:zi,ReactCurrentOwner:il};function ba(){throw Error("act(...) is not supported in production builds of React.")}_.Children={map:di,forEach:function(e,n,t){di(e,function(){n.apply(this,arguments)},t)},count:function(e){var n=0;return di(e,function(){n++}),n},toArray:function(e){return di(e,function(n){return n})||[]},only:function(e){if(!rl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_.Component=ht;_.Fragment=Qu;_.Profiler=Gu;_.PureComponent=nl;_.StrictMode=Yu;_.Suspense=Zu;_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sh;_.act=ba;_.cloneElement=function(e,n,t){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var i=ka({},e.props),r=e.key,s=e.ref,l=e._owner;if(n!=null){if(n.ref!==void 0&&(s=n.ref,l=il.current),n.key!==void 0&&(r=""+n.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(a in n)Ta.call(n,a)&&!Ia.hasOwnProperty(a)&&(i[a]=n[a]===void 0&&o!==void 0?o[a]:n[a])}var a=arguments.length-2;if(a===1)i.children=t;else if(1<a){o=Array(a);for(var u=0;u<a;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:ii,type:e.type,key:r,ref:s,props:i,_owner:l}};_.createContext=function(e){return e={$$typeof:Xu,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ku,_context:e},e.Consumer=e};_.createElement=Ca;_.createFactory=function(e){var n=Ca.bind(null,e);return n.type=e,n};_.createRef=function(){return{current:null}};_.forwardRef=function(e){return{$$typeof:Ju,render:e}};_.isValidElement=rl;_.lazy=function(e){return{$$typeof:eh,_payload:{_status:-1,_result:e},_init:rh}};_.memo=function(e,n){return{$$typeof:qu,type:e,compare:n===void 0?null:n}};_.startTransition=function(e){var n=zi.transition;zi.transition={};try{e()}finally{zi.transition=n}};_.unstable_act=ba;_.useCallback=function(e,n){return ce.current.useCallback(e,n)};_.useContext=function(e){return ce.current.useContext(e)};_.useDebugValue=function(){};_.useDeferredValue=function(e){return ce.current.useDeferredValue(e)};_.useEffect=function(e,n){return ce.current.useEffect(e,n)};_.useId=function(){return ce.current.useId()};_.useImperativeHandle=function(e,n,t){return ce.current.useImperativeHandle(e,n,t)};_.useInsertionEffect=function(e,n){return ce.current.useInsertionEffect(e,n)};_.useLayoutEffect=function(e,n){return ce.current.useLayoutEffect(e,n)};_.useMemo=function(e,n){return ce.current.useMemo(e,n)};_.useReducer=function(e,n,t){return ce.current.useReducer(e,n,t)};_.useRef=function(e){return ce.current.useRef(e)};_.useState=function(e){return ce.current.useState(e)};_.useSyncExternalStore=function(e,n,t){return ce.current.useSyncExternalStore(e,n,t)};_.useTransition=function(){return ce.current.useTransition()};_.version="18.3.1";va.exports=_;var C=va.exports;const Ea=Vu(C),lh=Hu({__proto__:null,default:Ea},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oh=C,ah=Symbol.for("react.element"),ch=Symbol.for("react.fragment"),uh=Object.prototype.hasOwnProperty,hh=oh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,dh={key:!0,ref:!0,__self:!0,__source:!0};function ja(e,n,t){var i,r={},s=null,l=null;t!==void 0&&(s=""+t),n.key!==void 0&&(s=""+n.key),n.ref!==void 0&&(l=n.ref);for(i in n)uh.call(n,i)&&!dh.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps,n)r[i]===void 0&&(r[i]=n[i]);return{$$typeof:ah,type:e,key:s,ref:l,props:r,_owner:hh.current}}hr.Fragment=ch;hr.jsx=ja;hr.jsxs=ja;ya.exports=hr;var f=ya.exports,ls={},Na={exports:{}},ke={},za={exports:{}},Pa={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function n(b,z){var P=b.length;b.push(z);e:for(;0<P;){var $=P-1>>>1,J=b[$];if(0<r(J,z))b[$]=z,b[P]=J,P=$;else break e}}function t(b){return b.length===0?null:b[0]}function i(b){if(b.length===0)return null;var z=b[0],P=b.pop();if(P!==z){b[0]=P;e:for(var $=0,J=b.length,ui=J>>>1;$<ui;){var xn=2*($+1)-1,_r=b[xn],Sn=xn+1,hi=b[Sn];if(0>r(_r,P))Sn<J&&0>r(hi,_r)?(b[$]=hi,b[Sn]=P,$=Sn):(b[$]=_r,b[xn]=P,$=xn);else if(Sn<J&&0>r(hi,P))b[$]=hi,b[Sn]=P,$=Sn;else break e}}return z}function r(b,z){var P=b.sortIndex-z.sortIndex;return P!==0?P:b.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var l=Date,o=l.now();e.unstable_now=function(){return l.now()-o}}var a=[],u=[],g=1,p=null,m=3,v=!1,k=!1,x=!1,T=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(b){for(var z=t(u);z!==null;){if(z.callback===null)i(u);else if(z.startTime<=b)i(u),z.sortIndex=z.expirationTime,n(a,z);else break;z=t(u)}}function y(b){if(x=!1,d(b),!k)if(t(a)!==null)k=!0,zr(S);else{var z=t(u);z!==null&&Pr(y,z.startTime-b)}}function S(b,z){k=!1,x&&(x=!1,h(N),N=-1),v=!0;var P=m;try{for(d(z),p=t(a);p!==null&&(!(p.expirationTime>z)||b&&!Ne());){var $=p.callback;if(typeof $=="function"){p.callback=null,m=p.priorityLevel;var J=$(p.expirationTime<=z);z=e.unstable_now(),typeof J=="function"?p.callback=J:p===t(a)&&i(a),d(z)}else i(a);p=t(a)}if(p!==null)var ui=!0;else{var xn=t(u);xn!==null&&Pr(y,xn.startTime-z),ui=!1}return ui}finally{p=null,m=P,v=!1}}var E=!1,j=null,N=-1,V=5,M=-1;function Ne(){return!(e.unstable_now()-M<V)}function gt(){if(j!==null){var b=e.unstable_now();M=b;var z=!0;try{z=j(!0,b)}finally{z?mt():(E=!1,j=null)}}else E=!1}var mt;if(typeof c=="function")mt=function(){c(gt)};else if(typeof MessageChannel<"u"){var Jl=new MessageChannel,Uu=Jl.port2;Jl.port1.onmessage=gt,mt=function(){Uu.postMessage(null)}}else mt=function(){T(gt,0)};function zr(b){j=b,E||(E=!0,mt())}function Pr(b,z){N=T(function(){b(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){k||v||(k=!0,zr(S))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return t(a)},e.unstable_next=function(b){switch(m){case 1:case 2:case 3:var z=3;break;default:z=m}var P=m;m=z;try{return b()}finally{m=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,z){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var P=m;m=b;try{return z()}finally{m=P}},e.unstable_scheduleCallback=function(b,z,P){var $=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?$+P:$):P=$,b){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=P+J,b={id:g++,callback:z,priorityLevel:b,startTime:P,expirationTime:J,sortIndex:-1},P>$?(b.sortIndex=P,n(u,b),t(a)===null&&b===t(u)&&(x?(h(N),N=-1):x=!0,Pr(y,P-$))):(b.sortIndex=J,n(a,b),k||v||(k=!0,zr(S))),b},e.unstable_shouldYield=Ne,e.unstable_wrapCallback=function(b){var z=m;return function(){var P=m;m=z;try{return b.apply(this,arguments)}finally{m=P}}}})(Pa);za.exports=Pa;var ph=za.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fh=C,we=ph;function w(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _a=new Set,Dt={};function Fn(e,n){rt(e,n),rt(e+"Capture",n)}function rt(e,n){for(Dt[e]=n,e=0;e<n.length;e++)_a.add(n[e])}var Ye=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),os=Object.prototype.hasOwnProperty,gh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,no={},to={};function mh(e){return os.call(to,e)?!0:os.call(no,e)?!1:gh.test(e)?to[e]=!0:(no[e]=!0,!1)}function yh(e,n,t,i){if(t!==null&&t.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function vh(e,n,t,i){if(n===null||typeof n>"u"||yh(e,n,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function ue(e,n,t,i,r,s,l){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=e,this.type=n,this.sanitizeURL=s,this.removeEmptyString=l}var te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){te[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];te[n]=new ue(n,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){te[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){te[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){te[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){te[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){te[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){te[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){te[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var sl=/[\-:]([a-z])/g;function ll(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(sl,ll);te[n]=new ue(n,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(sl,ll);te[n]=new ue(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(sl,ll);te[n]=new ue(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){te[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});te.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){te[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function ol(e,n,t,i){var r=te.hasOwnProperty(n)?te[n]:null;(r!==null?r.type!==0:i||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(vh(n,t,r,i)&&(t=null),i||r===null?mh(n)&&(t===null?e.removeAttribute(n):e.setAttribute(n,""+t)):r.mustUseProperty?e[r.propertyName]=t===null?r.type===3?!1:"":t:(n=r.attributeName,i=r.attributeNamespace,t===null?e.removeAttribute(n):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?e.setAttributeNS(i,n,t):e.setAttribute(n,t))))}var Je=fh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pi=Symbol.for("react.element"),Wn=Symbol.for("react.portal"),Bn=Symbol.for("react.fragment"),al=Symbol.for("react.strict_mode"),as=Symbol.for("react.profiler"),Ma=Symbol.for("react.provider"),La=Symbol.for("react.context"),cl=Symbol.for("react.forward_ref"),cs=Symbol.for("react.suspense"),us=Symbol.for("react.suspense_list"),ul=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),Ra=Symbol.for("react.offscreen"),io=Symbol.iterator;function yt(e){return e===null||typeof e!="object"?null:(e=io&&e[io]||e["@@iterator"],typeof e=="function"?e:null)}var U=Object.assign,Lr;function Ct(e){if(Lr===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Lr=n&&n[1]||""}return`
`+Lr+e}var Rr=!1;function Fr(e,n){if(!e||Rr)return"";Rr=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(u){var i=u}Reflect.construct(e,[],n)}else{try{n.call()}catch(u){i=u}e.call(n.prototype)}else{try{throw Error()}catch(u){i=u}e()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),l=r.length-1,o=s.length-1;1<=l&&0<=o&&r[l]!==s[o];)o--;for(;1<=l&&0<=o;l--,o--)if(r[l]!==s[o]){if(l!==1||o!==1)do if(l--,o--,0>o||r[l]!==s[o]){var a=`
`+r[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=o);break}}}finally{Rr=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?Ct(e):""}function wh(e){switch(e.tag){case 5:return Ct(e.type);case 16:return Ct("Lazy");case 13:return Ct("Suspense");case 19:return Ct("SuspenseList");case 0:case 2:case 15:return e=Fr(e.type,!1),e;case 11:return e=Fr(e.type.render,!1),e;case 1:return e=Fr(e.type,!0),e;default:return""}}function hs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Bn:return"Fragment";case Wn:return"Portal";case as:return"Profiler";case al:return"StrictMode";case cs:return"Suspense";case us:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case La:return(e.displayName||"Context")+".Consumer";case Ma:return(e._context.displayName||"Context")+".Provider";case cl:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ul:return n=e.displayName||null,n!==null?n:hs(e.type)||"Memo";case qe:n=e._payload,e=e._init;try{return hs(e(n))}catch{}}return null}function kh(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hs(n);case 8:return n===al?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function gn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fa(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function xh(e){var n=Fa(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),i=""+e[n];if(!e.hasOwnProperty(n)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(l){i=""+l,s.call(this,l)}}),Object.defineProperty(e,n,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function fi(e){e._valueTracker||(e._valueTracker=xh(e))}function Oa(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),i="";return e&&(i=Fa(e)?e.checked?"true":"false":e.value),e=i,e!==t?(n.setValue(e),!0):!1}function Bi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ds(e,n){var t=n.checked;return U({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??e._wrapperState.initialChecked})}function ro(e,n){var t=n.defaultValue==null?"":n.defaultValue,i=n.checked!=null?n.checked:n.defaultChecked;t=gn(n.value!=null?n.value:t),e._wrapperState={initialChecked:i,initialValue:t,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function Da(e,n){n=n.checked,n!=null&&ol(e,"checked",n,!1)}function ps(e,n){Da(e,n);var t=gn(n.value),i=n.type;if(t!=null)i==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(i==="submit"||i==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?fs(e,n.type,t):n.hasOwnProperty("defaultValue")&&fs(e,n.type,gn(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function so(e,n,t){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var i=n.type;if(!(i!=="submit"&&i!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,t||n===e.value||(e.value=n),e.defaultValue=n}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function fs(e,n,t){(n!=="number"||Bi(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var bt=Array.isArray;function Zn(e,n,t,i){if(e=e.options,n){n={};for(var r=0;r<t.length;r++)n["$"+t[r]]=!0;for(t=0;t<e.length;t++)r=n.hasOwnProperty("$"+e[t].value),e[t].selected!==r&&(e[t].selected=r),r&&i&&(e[t].defaultSelected=!0)}else{for(t=""+gn(t),n=null,r=0;r<e.length;r++){if(e[r].value===t){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function gs(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(w(91));return U({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function lo(e,n){var t=n.value;if(t==null){if(t=n.children,n=n.defaultValue,t!=null){if(n!=null)throw Error(w(92));if(bt(t)){if(1<t.length)throw Error(w(93));t=t[0]}n=t}n==null&&(n=""),t=n}e._wrapperState={initialValue:gn(t)}}function Aa(e,n){var t=gn(n.value),i=gn(n.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),n.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),i!=null&&(e.defaultValue=""+i)}function oo(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Wa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ms(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Wa(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gi,Ba=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,t,i,r){MSApp.execUnsafeLocalFunction(function(){return e(n,t,i,r)})}:e}(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(gi=gi||document.createElement("div"),gi.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=gi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function At(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Nt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sh=["Webkit","ms","Moz","O"];Object.keys(Nt).forEach(function(e){Sh.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),Nt[n]=Nt[e]})});function Ua(e,n,t){return n==null||typeof n=="boolean"||n===""?"":t||typeof n!="number"||n===0||Nt.hasOwnProperty(e)&&Nt[e]?(""+n).trim():n+"px"}function Ha(e,n){e=e.style;for(var t in n)if(n.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Ua(t,n[t],i);t==="float"&&(t="cssFloat"),i?e.setProperty(t,r):e[t]=r}}var Th=U({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ys(e,n){if(n){if(Th[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(w(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(w(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(w(61))}if(n.style!=null&&typeof n.style!="object")throw Error(w(62))}}function vs(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ws=null;function hl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ks=null,qn=null,et=null;function ao(e){if(e=li(e)){if(typeof ks!="function")throw Error(w(280));var n=e.stateNode;n&&(n=mr(n),ks(e.stateNode,e.type,n))}}function Va(e){qn?et?et.push(e):et=[e]:qn=e}function $a(){if(qn){var e=qn,n=et;if(et=qn=null,ao(e),n)for(e=0;e<n.length;e++)ao(n[e])}}function Qa(e,n){return e(n)}function Ya(){}var Or=!1;function Ga(e,n,t){if(Or)return e(n,t);Or=!0;try{return Qa(e,n,t)}finally{Or=!1,(qn!==null||et!==null)&&(Ya(),$a())}}function Wt(e,n){var t=e.stateNode;if(t===null)return null;var i=mr(t);if(i===null)return null;t=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(w(231,n,typeof t));return t}var xs=!1;if(Ye)try{var vt={};Object.defineProperty(vt,"passive",{get:function(){xs=!0}}),window.addEventListener("test",vt,vt),window.removeEventListener("test",vt,vt)}catch{xs=!1}function Ih(e,n,t,i,r,s,l,o,a){var u=Array.prototype.slice.call(arguments,3);try{n.apply(t,u)}catch(g){this.onError(g)}}var zt=!1,Ui=null,Hi=!1,Ss=null,Ch={onError:function(e){zt=!0,Ui=e}};function bh(e,n,t,i,r,s,l,o,a){zt=!1,Ui=null,Ih.apply(Ch,arguments)}function Eh(e,n,t,i,r,s,l,o,a){if(bh.apply(this,arguments),zt){if(zt){var u=Ui;zt=!1,Ui=null}else throw Error(w(198));Hi||(Hi=!0,Ss=u)}}function On(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function Ka(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function co(e){if(On(e)!==e)throw Error(w(188))}function jh(e){var n=e.alternate;if(!n){if(n=On(e),n===null)throw Error(w(188));return n!==e?null:e}for(var t=e,i=n;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return co(r),e;if(s===i)return co(r),n;s=s.sibling}throw Error(w(188))}if(t.return!==i.return)t=r,i=s;else{for(var l=!1,o=r.child;o;){if(o===t){l=!0,t=r,i=s;break}if(o===i){l=!0,i=r,t=s;break}o=o.sibling}if(!l){for(o=s.child;o;){if(o===t){l=!0,t=s,i=r;break}if(o===i){l=!0,i=s,t=r;break}o=o.sibling}if(!l)throw Error(w(189))}}if(t.alternate!==i)throw Error(w(190))}if(t.tag!==3)throw Error(w(188));return t.stateNode.current===t?e:n}function Xa(e){return e=jh(e),e!==null?Ja(e):null}function Ja(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Ja(e);if(n!==null)return n;e=e.sibling}return null}var Za=we.unstable_scheduleCallback,uo=we.unstable_cancelCallback,Nh=we.unstable_shouldYield,zh=we.unstable_requestPaint,Q=we.unstable_now,Ph=we.unstable_getCurrentPriorityLevel,dl=we.unstable_ImmediatePriority,qa=we.unstable_UserBlockingPriority,Vi=we.unstable_NormalPriority,_h=we.unstable_LowPriority,ec=we.unstable_IdlePriority,dr=null,We=null;function Mh(e){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(dr,e,void 0,(e.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:Fh,Lh=Math.log,Rh=Math.LN2;function Fh(e){return e>>>=0,e===0?32:31-(Lh(e)/Rh|0)|0}var mi=64,yi=4194304;function Et(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function $i(e,n){var t=e.pendingLanes;if(t===0)return 0;var i=0,r=e.suspendedLanes,s=e.pingedLanes,l=t&268435455;if(l!==0){var o=l&~r;o!==0?i=Et(o):(s&=l,s!==0&&(i=Et(s)))}else l=t&~r,l!==0?i=Et(l):s!==0&&(i=Et(s));if(i===0)return 0;if(n!==0&&n!==i&&!(n&r)&&(r=i&-i,s=n&-n,r>=s||r===16&&(s&4194240)!==0))return n;if(i&4&&(i|=t&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=i;0<n;)t=31-Le(n),r=1<<t,i|=e[t],n&=~r;return i}function Oh(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dh(e,n){for(var t=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,s=e.pendingLanes;0<s;){var l=31-Le(s),o=1<<l,a=r[l];a===-1?(!(o&t)||o&i)&&(r[l]=Oh(o,n)):a<=n&&(e.expiredLanes|=o),s&=~o}}function Ts(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function nc(){var e=mi;return mi<<=1,!(mi&4194240)&&(mi=64),e}function Dr(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ri(e,n,t){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Le(n),e[n]=t}function Ah(e,n){var t=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var i=e.eventTimes;for(e=e.expirationTimes;0<t;){var r=31-Le(t),s=1<<r;n[r]=0,i[r]=-1,e[r]=-1,t&=~s}}function pl(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var i=31-Le(t),r=1<<i;r&n|e[i]&n&&(e[i]|=n),t&=~r}}var R=0;function tc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ic,fl,rc,sc,lc,Is=!1,vi=[],on=null,an=null,cn=null,Bt=new Map,Ut=new Map,nn=[],Wh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ho(e,n){switch(e){case"focusin":case"focusout":on=null;break;case"dragenter":case"dragleave":an=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":Bt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ut.delete(n.pointerId)}}function wt(e,n,t,i,r,s){return e===null||e.nativeEvent!==s?(e={blockedOn:n,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},n!==null&&(n=li(n),n!==null&&fl(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function Bh(e,n,t,i,r){switch(n){case"focusin":return on=wt(on,e,n,t,i,r),!0;case"dragenter":return an=wt(an,e,n,t,i,r),!0;case"mouseover":return cn=wt(cn,e,n,t,i,r),!0;case"pointerover":var s=r.pointerId;return Bt.set(s,wt(Bt.get(s)||null,e,n,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ut.set(s,wt(Ut.get(s)||null,e,n,t,i,r)),!0}return!1}function oc(e){var n=Cn(e.target);if(n!==null){var t=On(n);if(t!==null){if(n=t.tag,n===13){if(n=Ka(t),n!==null){e.blockedOn=n,lc(e.priority,function(){rc(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Pi(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Cs(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var i=new t.constructor(t.type,t);ws=i,t.target.dispatchEvent(i),ws=null}else return n=li(t),n!==null&&fl(n),e.blockedOn=t,!1;n.shift()}return!0}function po(e,n,t){Pi(e)&&t.delete(n)}function Uh(){Is=!1,on!==null&&Pi(on)&&(on=null),an!==null&&Pi(an)&&(an=null),cn!==null&&Pi(cn)&&(cn=null),Bt.forEach(po),Ut.forEach(po)}function kt(e,n){e.blockedOn===n&&(e.blockedOn=null,Is||(Is=!0,we.unstable_scheduleCallback(we.unstable_NormalPriority,Uh)))}function Ht(e){function n(r){return kt(r,e)}if(0<vi.length){kt(vi[0],e);for(var t=1;t<vi.length;t++){var i=vi[t];i.blockedOn===e&&(i.blockedOn=null)}}for(on!==null&&kt(on,e),an!==null&&kt(an,e),cn!==null&&kt(cn,e),Bt.forEach(n),Ut.forEach(n),t=0;t<nn.length;t++)i=nn[t],i.blockedOn===e&&(i.blockedOn=null);for(;0<nn.length&&(t=nn[0],t.blockedOn===null);)oc(t),t.blockedOn===null&&nn.shift()}var nt=Je.ReactCurrentBatchConfig,Qi=!0;function Hh(e,n,t,i){var r=R,s=nt.transition;nt.transition=null;try{R=1,gl(e,n,t,i)}finally{R=r,nt.transition=s}}function Vh(e,n,t,i){var r=R,s=nt.transition;nt.transition=null;try{R=4,gl(e,n,t,i)}finally{R=r,nt.transition=s}}function gl(e,n,t,i){if(Qi){var r=Cs(e,n,t,i);if(r===null)Gr(e,n,i,Yi,t),ho(e,i);else if(Bh(r,e,n,t,i))i.stopPropagation();else if(ho(e,i),n&4&&-1<Wh.indexOf(e)){for(;r!==null;){var s=li(r);if(s!==null&&ic(s),s=Cs(e,n,t,i),s===null&&Gr(e,n,i,Yi,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Gr(e,n,i,null,t)}}var Yi=null;function Cs(e,n,t,i){if(Yi=null,e=hl(i),e=Cn(e),e!==null)if(n=On(e),n===null)e=null;else if(t=n.tag,t===13){if(e=Ka(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Yi=e,null}function ac(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ph()){case dl:return 1;case qa:return 4;case Vi:case _h:return 16;case ec:return 536870912;default:return 16}default:return 16}}var rn=null,ml=null,_i=null;function cc(){if(_i)return _i;var e,n=ml,t=n.length,i,r="value"in rn?rn.value:rn.textContent,s=r.length;for(e=0;e<t&&n[e]===r[e];e++);var l=t-e;for(i=1;i<=l&&n[t-i]===r[s-i];i++);return _i=r.slice(e,1<i?1-i:void 0)}function Mi(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function wi(){return!0}function fo(){return!1}function xe(e){function n(t,i,r,s,l){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wi:fo,this.isPropagationStopped=fo,this}return U(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=wi)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=wi)},persist:function(){},isPersistent:wi}),n}var dt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=xe(dt),si=U({},dt,{view:0,detail:0}),$h=xe(si),Ar,Wr,xt,pr=U({},si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xt&&(xt&&e.type==="mousemove"?(Ar=e.screenX-xt.screenX,Wr=e.screenY-xt.screenY):Wr=Ar=0,xt=e),Ar)},movementY:function(e){return"movementY"in e?e.movementY:Wr}}),go=xe(pr),Qh=U({},pr,{dataTransfer:0}),Yh=xe(Qh),Gh=U({},si,{relatedTarget:0}),Br=xe(Gh),Kh=U({},dt,{animationName:0,elapsedTime:0,pseudoElement:0}),Xh=xe(Kh),Jh=U({},dt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zh=xe(Jh),qh=U({},dt,{data:0}),mo=xe(qh),ed={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},td={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function id(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=td[e])?!!n[e]:!1}function vl(){return id}var rd=U({},si,{key:function(e){if(e.key){var n=ed[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Mi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vl,charCode:function(e){return e.type==="keypress"?Mi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sd=xe(rd),ld=U({},pr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yo=xe(ld),od=U({},si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vl}),ad=xe(od),cd=U({},dt,{propertyName:0,elapsedTime:0,pseudoElement:0}),ud=xe(cd),hd=U({},pr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dd=xe(hd),pd=[9,13,27,32],wl=Ye&&"CompositionEvent"in window,Pt=null;Ye&&"documentMode"in document&&(Pt=document.documentMode);var fd=Ye&&"TextEvent"in window&&!Pt,uc=Ye&&(!wl||Pt&&8<Pt&&11>=Pt),vo=" ",wo=!1;function hc(e,n){switch(e){case"keyup":return pd.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Un=!1;function gd(e,n){switch(e){case"compositionend":return dc(n);case"keypress":return n.which!==32?null:(wo=!0,vo);case"textInput":return e=n.data,e===vo&&wo?null:e;default:return null}}function md(e,n){if(Un)return e==="compositionend"||!wl&&hc(e,n)?(e=cc(),_i=ml=rn=null,Un=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return uc&&n.locale!=="ko"?null:n.data;default:return null}}var yd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ko(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!yd[e.type]:n==="textarea"}function pc(e,n,t,i){Va(i),n=Gi(n,"onChange"),0<n.length&&(t=new yl("onChange","change",null,t,i),e.push({event:t,listeners:n}))}var _t=null,Vt=null;function vd(e){Ic(e,0)}function fr(e){var n=$n(e);if(Oa(n))return e}function wd(e,n){if(e==="change")return n}var fc=!1;if(Ye){var Ur;if(Ye){var Hr="oninput"in document;if(!Hr){var xo=document.createElement("div");xo.setAttribute("oninput","return;"),Hr=typeof xo.oninput=="function"}Ur=Hr}else Ur=!1;fc=Ur&&(!document.documentMode||9<document.documentMode)}function So(){_t&&(_t.detachEvent("onpropertychange",gc),Vt=_t=null)}function gc(e){if(e.propertyName==="value"&&fr(Vt)){var n=[];pc(n,Vt,e,hl(e)),Ga(vd,n)}}function kd(e,n,t){e==="focusin"?(So(),_t=n,Vt=t,_t.attachEvent("onpropertychange",gc)):e==="focusout"&&So()}function xd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fr(Vt)}function Sd(e,n){if(e==="click")return fr(n)}function Td(e,n){if(e==="input"||e==="change")return fr(n)}function Id(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Fe=typeof Object.is=="function"?Object.is:Id;function $t(e,n){if(Fe(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),i=Object.keys(n);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!os.call(n,r)||!Fe(e[r],n[r]))return!1}return!0}function To(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Io(e,n){var t=To(e);e=0;for(var i;t;){if(t.nodeType===3){if(i=e+t.textContent.length,e<=n&&i>=n)return{node:t,offset:n-e};e=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=To(t)}}function mc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?mc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function yc(){for(var e=window,n=Bi();n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=Bi(e.document)}return n}function kl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function Cd(e){var n=yc(),t=e.focusedElem,i=e.selectionRange;if(n!==t&&t&&t.ownerDocument&&mc(t.ownerDocument.documentElement,t)){if(i!==null&&kl(t)){if(n=i.start,e=i.end,e===void 0&&(e=n),"selectionStart"in t)t.selectionStart=n,t.selectionEnd=Math.min(e,t.value.length);else if(e=(n=t.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!e.extend&&s>i&&(r=i,i=s,s=r),r=Io(t,s);var l=Io(t,i);r&&l&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(n=n.createRange(),n.setStart(r.node,r.offset),e.removeAllRanges(),s>i?(e.addRange(n),e.extend(l.node,l.offset)):(n.setEnd(l.node,l.offset),e.addRange(n)))}}for(n=[],e=t;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<n.length;t++)e=n[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bd=Ye&&"documentMode"in document&&11>=document.documentMode,Hn=null,bs=null,Mt=null,Es=!1;function Co(e,n,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Es||Hn==null||Hn!==Bi(i)||(i=Hn,"selectionStart"in i&&kl(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Mt&&$t(Mt,i)||(Mt=i,i=Gi(bs,"onSelect"),0<i.length&&(n=new yl("onSelect","select",null,n,t),e.push({event:n,listeners:i}),n.target=Hn)))}function ki(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Vn={animationend:ki("Animation","AnimationEnd"),animationiteration:ki("Animation","AnimationIteration"),animationstart:ki("Animation","AnimationStart"),transitionend:ki("Transition","TransitionEnd")},Vr={},vc={};Ye&&(vc=document.createElement("div").style,"AnimationEvent"in window||(delete Vn.animationend.animation,delete Vn.animationiteration.animation,delete Vn.animationstart.animation),"TransitionEvent"in window||delete Vn.transitionend.transition);function gr(e){if(Vr[e])return Vr[e];if(!Vn[e])return e;var n=Vn[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in vc)return Vr[e]=n[t];return e}var wc=gr("animationend"),kc=gr("animationiteration"),xc=gr("animationstart"),Sc=gr("transitionend"),Tc=new Map,bo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yn(e,n){Tc.set(e,n),Fn(n,[e])}for(var $r=0;$r<bo.length;$r++){var Qr=bo[$r],Ed=Qr.toLowerCase(),jd=Qr[0].toUpperCase()+Qr.slice(1);yn(Ed,"on"+jd)}yn(wc,"onAnimationEnd");yn(kc,"onAnimationIteration");yn(xc,"onAnimationStart");yn("dblclick","onDoubleClick");yn("focusin","onFocus");yn("focusout","onBlur");yn(Sc,"onTransitionEnd");rt("onMouseEnter",["mouseout","mouseover"]);rt("onMouseLeave",["mouseout","mouseover"]);rt("onPointerEnter",["pointerout","pointerover"]);rt("onPointerLeave",["pointerout","pointerover"]);Fn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nd=new Set("cancel close invalid load scroll toggle".split(" ").concat(jt));function Eo(e,n,t){var i=e.type||"unknown-event";e.currentTarget=t,Eh(i,n,void 0,e),e.currentTarget=null}function Ic(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var i=e[t],r=i.event;i=i.listeners;e:{var s=void 0;if(n)for(var l=i.length-1;0<=l;l--){var o=i[l],a=o.instance,u=o.currentTarget;if(o=o.listener,a!==s&&r.isPropagationStopped())break e;Eo(r,o,u),s=a}else for(l=0;l<i.length;l++){if(o=i[l],a=o.instance,u=o.currentTarget,o=o.listener,a!==s&&r.isPropagationStopped())break e;Eo(r,o,u),s=a}}}if(Hi)throw e=Ss,Hi=!1,Ss=null,e}function O(e,n){var t=n[_s];t===void 0&&(t=n[_s]=new Set);var i=e+"__bubble";t.has(i)||(Cc(n,e,2,!1),t.add(i))}function Yr(e,n,t){var i=0;n&&(i|=4),Cc(t,e,i,n)}var xi="_reactListening"+Math.random().toString(36).slice(2);function Qt(e){if(!e[xi]){e[xi]=!0,_a.forEach(function(t){t!=="selectionchange"&&(Nd.has(t)||Yr(t,!1,e),Yr(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[xi]||(n[xi]=!0,Yr("selectionchange",!1,n))}}function Cc(e,n,t,i){switch(ac(n)){case 1:var r=Hh;break;case 4:r=Vh;break;default:r=gl}t=r.bind(null,n,t,e),r=void 0,!xs||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(n,t,{capture:!0,passive:r}):e.addEventListener(n,t,!0):r!==void 0?e.addEventListener(n,t,{passive:r}):e.addEventListener(n,t,!1)}function Gr(e,n,t,i,r){var s=i;if(!(n&1)&&!(n&2)&&i!==null)e:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(l===4)for(l=i.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===r||a.nodeType===8&&a.parentNode===r))return;l=l.return}for(;o!==null;){if(l=Cn(o),l===null)return;if(a=l.tag,a===5||a===6){i=s=l;continue e}o=o.parentNode}}i=i.return}Ga(function(){var u=s,g=hl(t),p=[];e:{var m=Tc.get(e);if(m!==void 0){var v=yl,k=e;switch(e){case"keypress":if(Mi(t)===0)break e;case"keydown":case"keyup":v=sd;break;case"focusin":k="focus",v=Br;break;case"focusout":k="blur",v=Br;break;case"beforeblur":case"afterblur":v=Br;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=go;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Yh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=ad;break;case wc:case kc:case xc:v=Xh;break;case Sc:v=ud;break;case"scroll":v=$h;break;case"wheel":v=dd;break;case"copy":case"cut":case"paste":v=Zh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=yo}var x=(n&4)!==0,T=!x&&e==="scroll",h=x?m!==null?m+"Capture":null:m;x=[];for(var c=u,d;c!==null;){d=c;var y=d.stateNode;if(d.tag===5&&y!==null&&(d=y,h!==null&&(y=Wt(c,h),y!=null&&x.push(Yt(c,y,d)))),T)break;c=c.return}0<x.length&&(m=new v(m,k,null,t,g),p.push({event:m,listeners:x}))}}if(!(n&7)){e:{if(m=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",m&&t!==ws&&(k=t.relatedTarget||t.fromElement)&&(Cn(k)||k[Ge]))break e;if((v||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,v?(k=t.relatedTarget||t.toElement,v=u,k=k?Cn(k):null,k!==null&&(T=On(k),k!==T||k.tag!==5&&k.tag!==6)&&(k=null)):(v=null,k=u),v!==k)){if(x=go,y="onMouseLeave",h="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(x=yo,y="onPointerLeave",h="onPointerEnter",c="pointer"),T=v==null?m:$n(v),d=k==null?m:$n(k),m=new x(y,c+"leave",v,t,g),m.target=T,m.relatedTarget=d,y=null,Cn(g)===u&&(x=new x(h,c+"enter",k,t,g),x.target=d,x.relatedTarget=T,y=x),T=y,v&&k)n:{for(x=v,h=k,c=0,d=x;d;d=Dn(d))c++;for(d=0,y=h;y;y=Dn(y))d++;for(;0<c-d;)x=Dn(x),c--;for(;0<d-c;)h=Dn(h),d--;for(;c--;){if(x===h||h!==null&&x===h.alternate)break n;x=Dn(x),h=Dn(h)}x=null}else x=null;v!==null&&jo(p,m,v,x,!1),k!==null&&T!==null&&jo(p,T,k,x,!0)}}e:{if(m=u?$n(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var S=wd;else if(ko(m))if(fc)S=Td;else{S=xd;var E=kd}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(S=Sd);if(S&&(S=S(e,u))){pc(p,S,t,g);break e}E&&E(e,m,u),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&fs(m,"number",m.value)}switch(E=u?$n(u):window,e){case"focusin":(ko(E)||E.contentEditable==="true")&&(Hn=E,bs=u,Mt=null);break;case"focusout":Mt=bs=Hn=null;break;case"mousedown":Es=!0;break;case"contextmenu":case"mouseup":case"dragend":Es=!1,Co(p,t,g);break;case"selectionchange":if(bd)break;case"keydown":case"keyup":Co(p,t,g)}var j;if(wl)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Un?hc(e,t)&&(N="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(N="onCompositionStart");N&&(uc&&t.locale!=="ko"&&(Un||N!=="onCompositionStart"?N==="onCompositionEnd"&&Un&&(j=cc()):(rn=g,ml="value"in rn?rn.value:rn.textContent,Un=!0)),E=Gi(u,N),0<E.length&&(N=new mo(N,e,null,t,g),p.push({event:N,listeners:E}),j?N.data=j:(j=dc(t),j!==null&&(N.data=j)))),(j=fd?gd(e,t):md(e,t))&&(u=Gi(u,"onBeforeInput"),0<u.length&&(g=new mo("onBeforeInput","beforeinput",null,t,g),p.push({event:g,listeners:u}),g.data=j))}Ic(p,n)})}function Yt(e,n,t){return{instance:e,listener:n,currentTarget:t}}function Gi(e,n){for(var t=n+"Capture",i=[];e!==null;){var r=e,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Wt(e,t),s!=null&&i.unshift(Yt(e,s,r)),s=Wt(e,n),s!=null&&i.push(Yt(e,s,r))),e=e.return}return i}function Dn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function jo(e,n,t,i,r){for(var s=n._reactName,l=[];t!==null&&t!==i;){var o=t,a=o.alternate,u=o.stateNode;if(a!==null&&a===i)break;o.tag===5&&u!==null&&(o=u,r?(a=Wt(t,s),a!=null&&l.unshift(Yt(t,a,o))):r||(a=Wt(t,s),a!=null&&l.push(Yt(t,a,o)))),t=t.return}l.length!==0&&e.push({event:n,listeners:l})}var zd=/\r\n?/g,Pd=/\u0000|\uFFFD/g;function No(e){return(typeof e=="string"?e:""+e).replace(zd,`
`).replace(Pd,"")}function Si(e,n,t){if(n=No(n),No(e)!==n&&t)throw Error(w(425))}function Ki(){}var js=null,Ns=null;function zs(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ps=typeof setTimeout=="function"?setTimeout:void 0,_d=typeof clearTimeout=="function"?clearTimeout:void 0,zo=typeof Promise=="function"?Promise:void 0,Md=typeof queueMicrotask=="function"?queueMicrotask:typeof zo<"u"?function(e){return zo.resolve(null).then(e).catch(Ld)}:Ps;function Ld(e){setTimeout(function(){throw e})}function Kr(e,n){var t=n,i=0;do{var r=t.nextSibling;if(e.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){e.removeChild(r),Ht(n);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Ht(n)}function un(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Po(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(n===0)return e;n--}else t==="/$"&&n++}e=e.previousSibling}return null}var pt=Math.random().toString(36).slice(2),Ae="__reactFiber$"+pt,Gt="__reactProps$"+pt,Ge="__reactContainer$"+pt,_s="__reactEvents$"+pt,Rd="__reactListeners$"+pt,Fd="__reactHandles$"+pt;function Cn(e){var n=e[Ae];if(n)return n;for(var t=e.parentNode;t;){if(n=t[Ge]||t[Ae]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Po(e);e!==null;){if(t=e[Ae])return t;e=Po(e)}return n}e=t,t=e.parentNode}return null}function li(e){return e=e[Ae]||e[Ge],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function $n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(w(33))}function mr(e){return e[Gt]||null}var Ms=[],Qn=-1;function vn(e){return{current:e}}function D(e){0>Qn||(e.current=Ms[Qn],Ms[Qn]=null,Qn--)}function F(e,n){Qn++,Ms[Qn]=e.current,e.current=n}var mn={},le=vn(mn),pe=vn(!1),Pn=mn;function st(e,n){var t=e.type.contextTypes;if(!t)return mn;var i=e.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===n)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=n[s];return i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=r),r}function fe(e){return e=e.childContextTypes,e!=null}function Xi(){D(pe),D(le)}function _o(e,n,t){if(le.current!==mn)throw Error(w(168));F(le,n),F(pe,t)}function bc(e,n,t){var i=e.stateNode;if(n=n.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in n))throw Error(w(108,kh(e)||"Unknown",r));return U({},t,i)}function Ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mn,Pn=le.current,F(le,e),F(pe,pe.current),!0}function Mo(e,n,t){var i=e.stateNode;if(!i)throw Error(w(169));t?(e=bc(e,n,Pn),i.__reactInternalMemoizedMergedChildContext=e,D(pe),D(le),F(le,e)):D(pe),F(pe,t)}var He=null,yr=!1,Xr=!1;function Ec(e){He===null?He=[e]:He.push(e)}function Od(e){yr=!0,Ec(e)}function wn(){if(!Xr&&He!==null){Xr=!0;var e=0,n=R;try{var t=He;for(R=1;e<t.length;e++){var i=t[e];do i=i(!0);while(i!==null)}He=null,yr=!1}catch(r){throw He!==null&&(He=He.slice(e+1)),Za(dl,wn),r}finally{R=n,Xr=!1}}return null}var Yn=[],Gn=0,Zi=null,qi=0,Se=[],Te=0,_n=null,Ve=1,$e="";function Tn(e,n){Yn[Gn++]=qi,Yn[Gn++]=Zi,Zi=e,qi=n}function jc(e,n,t){Se[Te++]=Ve,Se[Te++]=$e,Se[Te++]=_n,_n=e;var i=Ve;e=$e;var r=32-Le(i)-1;i&=~(1<<r),t+=1;var s=32-Le(n)+r;if(30<s){var l=r-r%5;s=(i&(1<<l)-1).toString(32),i>>=l,r-=l,Ve=1<<32-Le(n)+r|t<<r|i,$e=s+e}else Ve=1<<s|t<<r|i,$e=e}function xl(e){e.return!==null&&(Tn(e,1),jc(e,1,0))}function Sl(e){for(;e===Zi;)Zi=Yn[--Gn],Yn[Gn]=null,qi=Yn[--Gn],Yn[Gn]=null;for(;e===_n;)_n=Se[--Te],Se[Te]=null,$e=Se[--Te],Se[Te]=null,Ve=Se[--Te],Se[Te]=null}var ve=null,ye=null,A=!1,Me=null;function Nc(e,n){var t=Ce(5,null,null,0);t.elementType="DELETED",t.stateNode=n,t.return=e,n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)}function Lo(e,n){switch(e.tag){case 5:var t=e.type;return n=n.nodeType!==1||t.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,ve=e,ye=un(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,ve=e,ye=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(t=_n!==null?{id:Ve,overflow:$e}:null,e.memoizedState={dehydrated:n,treeContext:t,retryLane:1073741824},t=Ce(18,null,null,0),t.stateNode=n,t.return=e,e.child=t,ve=e,ye=null,!0):!1;default:return!1}}function Ls(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Rs(e){if(A){var n=ye;if(n){var t=n;if(!Lo(e,n)){if(Ls(e))throw Error(w(418));n=un(t.nextSibling);var i=ve;n&&Lo(e,n)?Nc(i,t):(e.flags=e.flags&-4097|2,A=!1,ve=e)}}else{if(Ls(e))throw Error(w(418));e.flags=e.flags&-4097|2,A=!1,ve=e}}}function Ro(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ve=e}function Ti(e){if(e!==ve)return!1;if(!A)return Ro(e),A=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!zs(e.type,e.memoizedProps)),n&&(n=ye)){if(Ls(e))throw zc(),Error(w(418));for(;n;)Nc(e,n),n=un(n.nextSibling)}if(Ro(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(n===0){ye=un(e.nextSibling);break e}n--}else t!=="$"&&t!=="$!"&&t!=="$?"||n++}e=e.nextSibling}ye=null}}else ye=ve?un(e.stateNode.nextSibling):null;return!0}function zc(){for(var e=ye;e;)e=un(e.nextSibling)}function lt(){ye=ve=null,A=!1}function Tl(e){Me===null?Me=[e]:Me.push(e)}var Dd=Je.ReactCurrentBatchConfig;function St(e,n,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(w(309));var i=t.stateNode}if(!i)throw Error(w(147,e));var r=i,s=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===s?n.ref:(n=function(l){var o=r.refs;l===null?delete o[s]:o[s]=l},n._stringRef=s,n)}if(typeof e!="string")throw Error(w(284));if(!t._owner)throw Error(w(290,e))}return e}function Ii(e,n){throw e=Object.prototype.toString.call(n),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function Fo(e){var n=e._init;return n(e._payload)}function Pc(e){function n(h,c){if(e){var d=h.deletions;d===null?(h.deletions=[c],h.flags|=16):d.push(c)}}function t(h,c){if(!e)return null;for(;c!==null;)n(h,c),c=c.sibling;return null}function i(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function r(h,c){return h=fn(h,c),h.index=0,h.sibling=null,h}function s(h,c,d){return h.index=d,e?(d=h.alternate,d!==null?(d=d.index,d<c?(h.flags|=2,c):d):(h.flags|=2,c)):(h.flags|=1048576,c)}function l(h){return e&&h.alternate===null&&(h.flags|=2),h}function o(h,c,d,y){return c===null||c.tag!==6?(c=is(d,h.mode,y),c.return=h,c):(c=r(c,d),c.return=h,c)}function a(h,c,d,y){var S=d.type;return S===Bn?g(h,c,d.props.children,y,d.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===qe&&Fo(S)===c.type)?(y=r(c,d.props),y.ref=St(h,c,d),y.return=h,y):(y=Wi(d.type,d.key,d.props,null,h.mode,y),y.ref=St(h,c,d),y.return=h,y)}function u(h,c,d,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=rs(d,h.mode,y),c.return=h,c):(c=r(c,d.children||[]),c.return=h,c)}function g(h,c,d,y,S){return c===null||c.tag!==7?(c=Nn(d,h.mode,y,S),c.return=h,c):(c=r(c,d),c.return=h,c)}function p(h,c,d){if(typeof c=="string"&&c!==""||typeof c=="number")return c=is(""+c,h.mode,d),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case pi:return d=Wi(c.type,c.key,c.props,null,h.mode,d),d.ref=St(h,null,c),d.return=h,d;case Wn:return c=rs(c,h.mode,d),c.return=h,c;case qe:var y=c._init;return p(h,y(c._payload),d)}if(bt(c)||yt(c))return c=Nn(c,h.mode,d,null),c.return=h,c;Ii(h,c)}return null}function m(h,c,d,y){var S=c!==null?c.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return S!==null?null:o(h,c,""+d,y);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case pi:return d.key===S?a(h,c,d,y):null;case Wn:return d.key===S?u(h,c,d,y):null;case qe:return S=d._init,m(h,c,S(d._payload),y)}if(bt(d)||yt(d))return S!==null?null:g(h,c,d,y,null);Ii(h,d)}return null}function v(h,c,d,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(d)||null,o(c,h,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case pi:return h=h.get(y.key===null?d:y.key)||null,a(c,h,y,S);case Wn:return h=h.get(y.key===null?d:y.key)||null,u(c,h,y,S);case qe:var E=y._init;return v(h,c,d,E(y._payload),S)}if(bt(y)||yt(y))return h=h.get(d)||null,g(c,h,y,S,null);Ii(c,y)}return null}function k(h,c,d,y){for(var S=null,E=null,j=c,N=c=0,V=null;j!==null&&N<d.length;N++){j.index>N?(V=j,j=null):V=j.sibling;var M=m(h,j,d[N],y);if(M===null){j===null&&(j=V);break}e&&j&&M.alternate===null&&n(h,j),c=s(M,c,N),E===null?S=M:E.sibling=M,E=M,j=V}if(N===d.length)return t(h,j),A&&Tn(h,N),S;if(j===null){for(;N<d.length;N++)j=p(h,d[N],y),j!==null&&(c=s(j,c,N),E===null?S=j:E.sibling=j,E=j);return A&&Tn(h,N),S}for(j=i(h,j);N<d.length;N++)V=v(j,h,N,d[N],y),V!==null&&(e&&V.alternate!==null&&j.delete(V.key===null?N:V.key),c=s(V,c,N),E===null?S=V:E.sibling=V,E=V);return e&&j.forEach(function(Ne){return n(h,Ne)}),A&&Tn(h,N),S}function x(h,c,d,y){var S=yt(d);if(typeof S!="function")throw Error(w(150));if(d=S.call(d),d==null)throw Error(w(151));for(var E=S=null,j=c,N=c=0,V=null,M=d.next();j!==null&&!M.done;N++,M=d.next()){j.index>N?(V=j,j=null):V=j.sibling;var Ne=m(h,j,M.value,y);if(Ne===null){j===null&&(j=V);break}e&&j&&Ne.alternate===null&&n(h,j),c=s(Ne,c,N),E===null?S=Ne:E.sibling=Ne,E=Ne,j=V}if(M.done)return t(h,j),A&&Tn(h,N),S;if(j===null){for(;!M.done;N++,M=d.next())M=p(h,M.value,y),M!==null&&(c=s(M,c,N),E===null?S=M:E.sibling=M,E=M);return A&&Tn(h,N),S}for(j=i(h,j);!M.done;N++,M=d.next())M=v(j,h,N,M.value,y),M!==null&&(e&&M.alternate!==null&&j.delete(M.key===null?N:M.key),c=s(M,c,N),E===null?S=M:E.sibling=M,E=M);return e&&j.forEach(function(gt){return n(h,gt)}),A&&Tn(h,N),S}function T(h,c,d,y){if(typeof d=="object"&&d!==null&&d.type===Bn&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case pi:e:{for(var S=d.key,E=c;E!==null;){if(E.key===S){if(S=d.type,S===Bn){if(E.tag===7){t(h,E.sibling),c=r(E,d.props.children),c.return=h,h=c;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===qe&&Fo(S)===E.type){t(h,E.sibling),c=r(E,d.props),c.ref=St(h,E,d),c.return=h,h=c;break e}t(h,E);break}else n(h,E);E=E.sibling}d.type===Bn?(c=Nn(d.props.children,h.mode,y,d.key),c.return=h,h=c):(y=Wi(d.type,d.key,d.props,null,h.mode,y),y.ref=St(h,c,d),y.return=h,h=y)}return l(h);case Wn:e:{for(E=d.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){t(h,c.sibling),c=r(c,d.children||[]),c.return=h,h=c;break e}else{t(h,c);break}else n(h,c);c=c.sibling}c=rs(d,h.mode,y),c.return=h,h=c}return l(h);case qe:return E=d._init,T(h,c,E(d._payload),y)}if(bt(d))return k(h,c,d,y);if(yt(d))return x(h,c,d,y);Ii(h,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,c!==null&&c.tag===6?(t(h,c.sibling),c=r(c,d),c.return=h,h=c):(t(h,c),c=is(d,h.mode,y),c.return=h,h=c),l(h)):t(h,c)}return T}var ot=Pc(!0),_c=Pc(!1),er=vn(null),nr=null,Kn=null,Il=null;function Cl(){Il=Kn=nr=null}function bl(e){var n=er.current;D(er),e._currentValue=n}function Fs(e,n,t){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===t)break;e=e.return}}function tt(e,n){nr=e,Il=Kn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&n&&(de=!0),e.firstContext=null)}function Ee(e){var n=e._currentValue;if(Il!==e)if(e={context:e,memoizedValue:n,next:null},Kn===null){if(nr===null)throw Error(w(308));Kn=e,nr.dependencies={lanes:0,firstContext:e}}else Kn=Kn.next=e;return n}var bn=null;function El(e){bn===null?bn=[e]:bn.push(e)}function Mc(e,n,t,i){var r=n.interleaved;return r===null?(t.next=t,El(n)):(t.next=r.next,r.next=t),n.interleaved=t,Ke(e,i)}function Ke(e,n){e.lanes|=n;var t=e.alternate;for(t!==null&&(t.lanes|=n),t=e,e=e.return;e!==null;)e.childLanes|=n,t=e.alternate,t!==null&&(t.childLanes|=n),t=e,e=e.return;return t.tag===3?t.stateNode:null}var en=!1;function jl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qe(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function hn(e,n,t){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,L&2){var r=i.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),i.pending=n,Ke(e,t)}return r=i.interleaved,r===null?(n.next=n,El(i)):(n.next=r.next,r.next=n),i.interleaved=n,Ke(e,t)}function Li(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194240)!==0)){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,pl(e,t)}}function Oo(e,n){var t=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var l={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=l:s=s.next=l,t=t.next}while(t!==null);s===null?r=s=n:s=s.next=n}else r=s=n;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}function tr(e,n,t,i){var r=e.updateQueue;en=!1;var s=r.firstBaseUpdate,l=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var a=o,u=a.next;a.next=null,l===null?s=u:l.next=u,l=a;var g=e.alternate;g!==null&&(g=g.updateQueue,o=g.lastBaseUpdate,o!==l&&(o===null?g.firstBaseUpdate=u:o.next=u,g.lastBaseUpdate=a))}if(s!==null){var p=r.baseState;l=0,g=u=a=null,o=s;do{var m=o.lane,v=o.eventTime;if((i&m)===m){g!==null&&(g=g.next={eventTime:v,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var k=e,x=o;switch(m=n,v=t,x.tag){case 1:if(k=x.payload,typeof k=="function"){p=k.call(v,p,m);break e}p=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=x.payload,m=typeof k=="function"?k.call(v,p,m):k,m==null)break e;p=U({},p,m);break e;case 2:en=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,m=r.effects,m===null?r.effects=[o]:m.push(o))}else v={eventTime:v,lane:m,tag:o.tag,payload:o.payload,callback:o.callback,next:null},g===null?(u=g=v,a=p):g=g.next=v,l|=m;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;m=o,o=m.next,m.next=null,r.lastBaseUpdate=m,r.shared.pending=null}}while(!0);if(g===null&&(a=p),r.baseState=a,r.firstBaseUpdate=u,r.lastBaseUpdate=g,n=r.shared.interleaved,n!==null){r=n;do l|=r.lane,r=r.next;while(r!==n)}else s===null&&(r.shared.lanes=0);Ln|=l,e.lanes=l,e.memoizedState=p}}function Do(e,n,t){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var i=e[n],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(w(191,r));r.call(i)}}}var oi={},Be=vn(oi),Kt=vn(oi),Xt=vn(oi);function En(e){if(e===oi)throw Error(w(174));return e}function Nl(e,n){switch(F(Xt,n),F(Kt,e),F(Be,oi),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:ms(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=ms(n,e)}D(Be),F(Be,n)}function at(){D(Be),D(Kt),D(Xt)}function Rc(e){En(Xt.current);var n=En(Be.current),t=ms(n,e.type);n!==t&&(F(Kt,e),F(Be,t))}function zl(e){Kt.current===e&&(D(Be),D(Kt))}var W=vn(0);function ir(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Jr=[];function Pl(){for(var e=0;e<Jr.length;e++)Jr[e]._workInProgressVersionPrimary=null;Jr.length=0}var Ri=Je.ReactCurrentDispatcher,Zr=Je.ReactCurrentBatchConfig,Mn=0,B=null,K=null,Z=null,rr=!1,Lt=!1,Jt=0,Ad=0;function ie(){throw Error(w(321))}function _l(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!Fe(e[t],n[t]))return!1;return!0}function Ml(e,n,t,i,r,s){if(Mn=s,B=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ri.current=e===null||e.memoizedState===null?Hd:Vd,e=t(i,r),Lt){s=0;do{if(Lt=!1,Jt=0,25<=s)throw Error(w(301));s+=1,Z=K=null,n.updateQueue=null,Ri.current=$d,e=t(i,r)}while(Lt)}if(Ri.current=sr,n=K!==null&&K.next!==null,Mn=0,Z=K=B=null,rr=!1,n)throw Error(w(300));return e}function Ll(){var e=Jt!==0;return Jt=0,e}function De(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z===null?B.memoizedState=Z=e:Z=Z.next=e,Z}function je(){if(K===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var n=Z===null?B.memoizedState:Z.next;if(n!==null)Z=n,K=e;else{if(e===null)throw Error(w(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},Z===null?B.memoizedState=Z=e:Z=Z.next=e}return Z}function Zt(e,n){return typeof n=="function"?n(e):n}function qr(e){var n=je(),t=n.queue;if(t===null)throw Error(w(311));t.lastRenderedReducer=e;var i=K,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var l=r.next;r.next=s.next,s.next=l}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=l=null,a=null,u=s;do{var g=u.lane;if((Mn&g)===g)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var p={lane:g,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(o=a=p,l=i):a=a.next=p,B.lanes|=g,Ln|=g}u=u.next}while(u!==null&&u!==s);a===null?l=i:a.next=o,Fe(i,n.memoizedState)||(de=!0),n.memoizedState=i,n.baseState=l,n.baseQueue=a,t.lastRenderedState=i}if(e=t.interleaved,e!==null){r=e;do s=r.lane,B.lanes|=s,Ln|=s,r=r.next;while(r!==e)}else r===null&&(t.lanes=0);return[n.memoizedState,t.dispatch]}function es(e){var n=je(),t=n.queue;if(t===null)throw Error(w(311));t.lastRenderedReducer=e;var i=t.dispatch,r=t.pending,s=n.memoizedState;if(r!==null){t.pending=null;var l=r=r.next;do s=e(s,l.action),l=l.next;while(l!==r);Fe(s,n.memoizedState)||(de=!0),n.memoizedState=s,n.baseQueue===null&&(n.baseState=s),t.lastRenderedState=s}return[s,i]}function Fc(){}function Oc(e,n){var t=B,i=je(),r=n(),s=!Fe(i.memoizedState,r);if(s&&(i.memoizedState=r,de=!0),i=i.queue,Rl(Wc.bind(null,t,i,e),[e]),i.getSnapshot!==n||s||Z!==null&&Z.memoizedState.tag&1){if(t.flags|=2048,qt(9,Ac.bind(null,t,i,r,n),void 0,null),q===null)throw Error(w(349));Mn&30||Dc(t,n,r)}return r}function Dc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Ac(e,n,t,i){n.value=t,n.getSnapshot=i,Bc(n)&&Uc(e)}function Wc(e,n,t){return t(function(){Bc(n)&&Uc(e)})}function Bc(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!Fe(e,t)}catch{return!0}}function Uc(e){var n=Ke(e,1);n!==null&&Re(n,e,1,-1)}function Ao(e){var n=De();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zt,lastRenderedState:e},n.queue=e,e=e.dispatch=Ud.bind(null,B,e),[n.memoizedState,e]}function qt(e,n,t,i){return e={tag:e,create:n,destroy:t,deps:i,next:null},n=B.updateQueue,n===null?(n={lastEffect:null,stores:null},B.updateQueue=n,n.lastEffect=e.next=e):(t=n.lastEffect,t===null?n.lastEffect=e.next=e:(i=t.next,t.next=e,e.next=i,n.lastEffect=e)),e}function Hc(){return je().memoizedState}function Fi(e,n,t,i){var r=De();B.flags|=e,r.memoizedState=qt(1|n,t,void 0,i===void 0?null:i)}function vr(e,n,t,i){var r=je();i=i===void 0?null:i;var s=void 0;if(K!==null){var l=K.memoizedState;if(s=l.destroy,i!==null&&_l(i,l.deps)){r.memoizedState=qt(n,t,s,i);return}}B.flags|=e,r.memoizedState=qt(1|n,t,s,i)}function Wo(e,n){return Fi(8390656,8,e,n)}function Rl(e,n){return vr(2048,8,e,n)}function Vc(e,n){return vr(4,2,e,n)}function $c(e,n){return vr(4,4,e,n)}function Qc(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Yc(e,n,t){return t=t!=null?t.concat([e]):null,vr(4,4,Qc.bind(null,n,e),t)}function Fl(){}function Gc(e,n){var t=je();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&_l(n,i[1])?i[0]:(t.memoizedState=[e,n],e)}function Kc(e,n){var t=je();n=n===void 0?null:n;var i=t.memoizedState;return i!==null&&n!==null&&_l(n,i[1])?i[0]:(e=e(),t.memoizedState=[e,n],e)}function Xc(e,n,t){return Mn&21?(Fe(t,n)||(t=nc(),B.lanes|=t,Ln|=t,e.baseState=!0),n):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=t)}function Wd(e,n){var t=R;R=t!==0&&4>t?t:4,e(!0);var i=Zr.transition;Zr.transition={};try{e(!1),n()}finally{R=t,Zr.transition=i}}function Jc(){return je().memoizedState}function Bd(e,n,t){var i=pn(e);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Zc(e))qc(n,t);else if(t=Mc(e,n,t,i),t!==null){var r=ae();Re(t,e,i,r),eu(t,n,i)}}function Ud(e,n,t){var i=pn(e),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Zc(e))qc(n,r);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=n.lastRenderedReducer,s!==null))try{var l=n.lastRenderedState,o=s(l,t);if(r.hasEagerState=!0,r.eagerState=o,Fe(o,l)){var a=n.interleaved;a===null?(r.next=r,El(n)):(r.next=a.next,a.next=r),n.interleaved=r;return}}catch{}finally{}t=Mc(e,n,r,i),t!==null&&(r=ae(),Re(t,e,i,r),eu(t,n,i))}}function Zc(e){var n=e.alternate;return e===B||n!==null&&n===B}function qc(e,n){Lt=rr=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function eu(e,n,t){if(t&4194240){var i=n.lanes;i&=e.pendingLanes,t|=i,n.lanes=t,pl(e,t)}}var sr={readContext:Ee,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},Hd={readContext:Ee,useCallback:function(e,n){return De().memoizedState=[e,n===void 0?null:n],e},useContext:Ee,useEffect:Wo,useImperativeHandle:function(e,n,t){return t=t!=null?t.concat([e]):null,Fi(4194308,4,Qc.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Fi(4194308,4,e,n)},useInsertionEffect:function(e,n){return Fi(4,2,e,n)},useMemo:function(e,n){var t=De();return n=n===void 0?null:n,e=e(),t.memoizedState=[e,n],e},useReducer:function(e,n,t){var i=De();return n=t!==void 0?t(n):n,i.memoizedState=i.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=Bd.bind(null,B,e),[i.memoizedState,e]},useRef:function(e){var n=De();return e={current:e},n.memoizedState=e},useState:Ao,useDebugValue:Fl,useDeferredValue:function(e){return De().memoizedState=e},useTransition:function(){var e=Ao(!1),n=e[0];return e=Wd.bind(null,e[1]),De().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,t){var i=B,r=De();if(A){if(t===void 0)throw Error(w(407));t=t()}else{if(t=n(),q===null)throw Error(w(349));Mn&30||Dc(i,n,t)}r.memoizedState=t;var s={value:t,getSnapshot:n};return r.queue=s,Wo(Wc.bind(null,i,s,e),[e]),i.flags|=2048,qt(9,Ac.bind(null,i,s,t,n),void 0,null),t},useId:function(){var e=De(),n=q.identifierPrefix;if(A){var t=$e,i=Ve;t=(i&~(1<<32-Le(i)-1)).toString(32)+t,n=":"+n+"R"+t,t=Jt++,0<t&&(n+="H"+t.toString(32)),n+=":"}else t=Ad++,n=":"+n+"r"+t.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Vd={readContext:Ee,useCallback:Gc,useContext:Ee,useEffect:Rl,useImperativeHandle:Yc,useInsertionEffect:Vc,useLayoutEffect:$c,useMemo:Kc,useReducer:qr,useRef:Hc,useState:function(){return qr(Zt)},useDebugValue:Fl,useDeferredValue:function(e){var n=je();return Xc(n,K.memoizedState,e)},useTransition:function(){var e=qr(Zt)[0],n=je().memoizedState;return[e,n]},useMutableSource:Fc,useSyncExternalStore:Oc,useId:Jc,unstable_isNewReconciler:!1},$d={readContext:Ee,useCallback:Gc,useContext:Ee,useEffect:Rl,useImperativeHandle:Yc,useInsertionEffect:Vc,useLayoutEffect:$c,useMemo:Kc,useReducer:es,useRef:Hc,useState:function(){return es(Zt)},useDebugValue:Fl,useDeferredValue:function(e){var n=je();return K===null?n.memoizedState=e:Xc(n,K.memoizedState,e)},useTransition:function(){var e=es(Zt)[0],n=je().memoizedState;return[e,n]},useMutableSource:Fc,useSyncExternalStore:Oc,useId:Jc,unstable_isNewReconciler:!1};function Pe(e,n){if(e&&e.defaultProps){n=U({},n),e=e.defaultProps;for(var t in e)n[t]===void 0&&(n[t]=e[t]);return n}return n}function Os(e,n,t,i){n=e.memoizedState,t=t(i,n),t=t==null?n:U({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var wr={isMounted:function(e){return(e=e._reactInternals)?On(e)===e:!1},enqueueSetState:function(e,n,t){e=e._reactInternals;var i=ae(),r=pn(e),s=Qe(i,r);s.payload=n,t!=null&&(s.callback=t),n=hn(e,s,r),n!==null&&(Re(n,e,r,i),Li(n,e,r))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var i=ae(),r=pn(e),s=Qe(i,r);s.tag=1,s.payload=n,t!=null&&(s.callback=t),n=hn(e,s,r),n!==null&&(Re(n,e,r,i),Li(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=ae(),i=pn(e),r=Qe(t,i);r.tag=2,n!=null&&(r.callback=n),n=hn(e,r,i),n!==null&&(Re(n,e,i,t),Li(n,e,i))}};function Bo(e,n,t,i,r,s,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,s,l):n.prototype&&n.prototype.isPureReactComponent?!$t(t,i)||!$t(r,s):!0}function nu(e,n,t){var i=!1,r=mn,s=n.contextType;return typeof s=="object"&&s!==null?s=Ee(s):(r=fe(n)?Pn:le.current,i=n.contextTypes,s=(i=i!=null)?st(e,r):mn),n=new n(t,s),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=wr,e.stateNode=n,n._reactInternals=e,i&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=s),n}function Uo(e,n,t,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,i),n.state!==e&&wr.enqueueReplaceState(n,n.state,null)}function Ds(e,n,t,i){var r=e.stateNode;r.props=t,r.state=e.memoizedState,r.refs={},jl(e);var s=n.contextType;typeof s=="object"&&s!==null?r.context=Ee(s):(s=fe(n)?Pn:le.current,r.context=st(e,s)),r.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(Os(e,n,s,t),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(n=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),n!==r.state&&wr.enqueueReplaceState(r,r.state,null),tr(e,t,r,i),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function ct(e,n){try{var t="",i=n;do t+=wh(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:n,stack:r,digest:null}}function ns(e,n,t){return{value:e,source:null,stack:t??null,digest:n??null}}function As(e,n){try{console.error(n.value)}catch(t){setTimeout(function(){throw t})}}var Qd=typeof WeakMap=="function"?WeakMap:Map;function tu(e,n,t){t=Qe(-1,t),t.tag=3,t.payload={element:null};var i=n.value;return t.callback=function(){or||(or=!0,Ks=i),As(e,n)},t}function iu(e,n,t){t=Qe(-1,t),t.tag=3;var i=e.type.getDerivedStateFromError;if(typeof i=="function"){var r=n.value;t.payload=function(){return i(r)},t.callback=function(){As(e,n)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){As(e,n),typeof i!="function"&&(dn===null?dn=new Set([this]):dn.add(this));var l=n.stack;this.componentDidCatch(n.value,{componentStack:l!==null?l:""})}),t}function Ho(e,n,t){var i=e.pingCache;if(i===null){i=e.pingCache=new Qd;var r=new Set;i.set(n,r)}else r=i.get(n),r===void 0&&(r=new Set,i.set(n,r));r.has(t)||(r.add(t),e=lp.bind(null,e,n,t),n.then(e,e))}function Vo(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function $o(e,n,t,i,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===n?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(n=Qe(-1,1),n.tag=2,hn(t,n,1))),t.lanes|=1),e)}var Yd=Je.ReactCurrentOwner,de=!1;function oe(e,n,t,i){n.child=e===null?_c(n,null,t,i):ot(n,e.child,t,i)}function Qo(e,n,t,i,r){t=t.render;var s=n.ref;return tt(n,r),i=Ml(e,n,t,i,s,r),t=Ll(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Xe(e,n,r)):(A&&t&&xl(n),n.flags|=1,oe(e,n,i,r),n.child)}function Yo(e,n,t,i,r){if(e===null){var s=t.type;return typeof s=="function"&&!Vl(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(n.tag=15,n.type=s,ru(e,n,s,i,r)):(e=Wi(t.type,null,i,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(s=e.child,!(e.lanes&r)){var l=s.memoizedProps;if(t=t.compare,t=t!==null?t:$t,t(l,i)&&e.ref===n.ref)return Xe(e,n,r)}return n.flags|=1,e=fn(s,i),e.ref=n.ref,e.return=n,n.child=e}function ru(e,n,t,i,r){if(e!==null){var s=e.memoizedProps;if($t(s,i)&&e.ref===n.ref)if(de=!1,n.pendingProps=i=s,(e.lanes&r)!==0)e.flags&131072&&(de=!0);else return n.lanes=e.lanes,Xe(e,n,r)}return Ws(e,n,t,i,r)}function su(e,n,t){var i=n.pendingProps,r=i.children,s=e!==null?e.memoizedState:null;if(i.mode==="hidden")if(!(n.mode&1))n.memoizedState={baseLanes:0,cachePool:null,transitions:null},F(Jn,me),me|=t;else{if(!(t&1073741824))return e=s!==null?s.baseLanes|t:t,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,F(Jn,me),me|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,F(Jn,me),me|=i}else s!==null?(i=s.baseLanes|t,n.memoizedState=null):i=t,F(Jn,me),me|=i;return oe(e,n,r,t),n.child}function lu(e,n){var t=n.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(n.flags|=512,n.flags|=2097152)}function Ws(e,n,t,i,r){var s=fe(t)?Pn:le.current;return s=st(n,s),tt(n,r),t=Ml(e,n,t,i,s,r),i=Ll(),e!==null&&!de?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~r,Xe(e,n,r)):(A&&i&&xl(n),n.flags|=1,oe(e,n,t,r),n.child)}function Go(e,n,t,i,r){if(fe(t)){var s=!0;Ji(n)}else s=!1;if(tt(n,r),n.stateNode===null)Oi(e,n),nu(n,t,i),Ds(n,t,i,r),i=!0;else if(e===null){var l=n.stateNode,o=n.memoizedProps;l.props=o;var a=l.context,u=t.contextType;typeof u=="object"&&u!==null?u=Ee(u):(u=fe(t)?Pn:le.current,u=st(n,u));var g=t.getDerivedStateFromProps,p=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==i||a!==u)&&Uo(n,l,i,u),en=!1;var m=n.memoizedState;l.state=m,tr(n,i,l,r),a=n.memoizedState,o!==i||m!==a||pe.current||en?(typeof g=="function"&&(Os(n,t,g,i),a=n.memoizedState),(o=en||Bo(n,t,o,i,m,a,u))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=a),l.props=i,l.state=a,l.context=u,i=o):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{l=n.stateNode,Lc(e,n),o=n.memoizedProps,u=n.type===n.elementType?o:Pe(n.type,o),l.props=u,p=n.pendingProps,m=l.context,a=t.contextType,typeof a=="object"&&a!==null?a=Ee(a):(a=fe(t)?Pn:le.current,a=st(n,a));var v=t.getDerivedStateFromProps;(g=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==p||m!==a)&&Uo(n,l,i,a),en=!1,m=n.memoizedState,l.state=m,tr(n,i,l,r);var k=n.memoizedState;o!==p||m!==k||pe.current||en?(typeof v=="function"&&(Os(n,t,v,i),k=n.memoizedState),(u=en||Bo(n,t,u,i,m,k,a)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,k,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,k,a)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=k),l.props=i,l.state=k,l.context=a,i=u):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(n.flags|=1024),i=!1)}return Bs(e,n,t,i,s,r)}function Bs(e,n,t,i,r,s){lu(e,n);var l=(n.flags&128)!==0;if(!i&&!l)return r&&Mo(n,t,!1),Xe(e,n,s);i=n.stateNode,Yd.current=n;var o=l&&typeof t.getDerivedStateFromError!="function"?null:i.render();return n.flags|=1,e!==null&&l?(n.child=ot(n,e.child,null,s),n.child=ot(n,null,o,s)):oe(e,n,o,s),n.memoizedState=i.state,r&&Mo(n,t,!0),n.child}function ou(e){var n=e.stateNode;n.pendingContext?_o(e,n.pendingContext,n.pendingContext!==n.context):n.context&&_o(e,n.context,!1),Nl(e,n.containerInfo)}function Ko(e,n,t,i,r){return lt(),Tl(r),n.flags|=256,oe(e,n,t,i),n.child}var Us={dehydrated:null,treeContext:null,retryLane:0};function Hs(e){return{baseLanes:e,cachePool:null,transitions:null}}function au(e,n,t){var i=n.pendingProps,r=W.current,s=!1,l=(n.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(r&2)!==0),o?(s=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),F(W,r&1),e===null)return Rs(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(n.mode&1?e.data==="$!"?n.lanes=8:n.lanes=1073741824:n.lanes=1,null):(l=i.children,e=i.fallback,s?(i=n.mode,s=n.child,l={mode:"hidden",children:l},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=Sr(l,i,0,null),e=Nn(e,i,t,null),s.return=n,e.return=n,s.sibling=e,n.child=s,n.child.memoizedState=Hs(t),n.memoizedState=Us,e):Ol(n,l));if(r=e.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Gd(e,n,l,i,o,r,t);if(s){s=i.fallback,l=n.mode,r=e.child,o=r.sibling;var a={mode:"hidden",children:i.children};return!(l&1)&&n.child!==r?(i=n.child,i.childLanes=0,i.pendingProps=a,n.deletions=null):(i=fn(r,a),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=fn(o,s):(s=Nn(s,l,t,null),s.flags|=2),s.return=n,i.return=n,i.sibling=s,n.child=i,i=s,s=n.child,l=e.child.memoizedState,l=l===null?Hs(t):{baseLanes:l.baseLanes|t,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=e.childLanes&~t,n.memoizedState=Us,i}return s=e.child,e=s.sibling,i=fn(s,{mode:"visible",children:i.children}),!(n.mode&1)&&(i.lanes=t),i.return=n,i.sibling=null,e!==null&&(t=n.deletions,t===null?(n.deletions=[e],n.flags|=16):t.push(e)),n.child=i,n.memoizedState=null,i}function Ol(e,n){return n=Sr({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function Ci(e,n,t,i){return i!==null&&Tl(i),ot(n,e.child,null,t),e=Ol(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Gd(e,n,t,i,r,s,l){if(t)return n.flags&256?(n.flags&=-257,i=ns(Error(w(422))),Ci(e,n,l,i)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(s=i.fallback,r=n.mode,i=Sr({mode:"visible",children:i.children},r,0,null),s=Nn(s,r,l,null),s.flags|=2,i.return=n,s.return=n,i.sibling=s,n.child=i,n.mode&1&&ot(n,e.child,null,l),n.child.memoizedState=Hs(l),n.memoizedState=Us,s);if(!(n.mode&1))return Ci(e,n,l,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(w(419)),i=ns(s,i,void 0),Ci(e,n,l,i)}if(o=(l&e.childLanes)!==0,de||o){if(i=q,i!==null){switch(l&-l){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|l)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ke(e,r),Re(i,e,r,-1))}return Hl(),i=ns(Error(w(421))),Ci(e,n,l,i)}return r.data==="$?"?(n.flags|=128,n.child=e.child,n=op.bind(null,e),r._reactRetry=n,null):(e=s.treeContext,ye=un(r.nextSibling),ve=n,A=!0,Me=null,e!==null&&(Se[Te++]=Ve,Se[Te++]=$e,Se[Te++]=_n,Ve=e.id,$e=e.overflow,_n=n),n=Ol(n,i.children),n.flags|=4096,n)}function Xo(e,n,t){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),Fs(e.return,n,t)}function ts(e,n,t,i,r){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=n,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function cu(e,n,t){var i=n.pendingProps,r=i.revealOrder,s=i.tail;if(oe(e,n,i.children,t),i=W.current,i&2)i=i&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Xo(e,t,n);else if(e.tag===19)Xo(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}i&=1}if(F(W,i),!(n.mode&1))n.memoizedState=null;else switch(r){case"forwards":for(t=n.child,r=null;t!==null;)e=t.alternate,e!==null&&ir(e)===null&&(r=t),t=t.sibling;t=r,t===null?(r=n.child,n.child=null):(r=t.sibling,t.sibling=null),ts(n,!1,r,t,s);break;case"backwards":for(t=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&ir(e)===null){n.child=r;break}e=r.sibling,r.sibling=t,t=r,r=e}ts(n,!0,t,null,s);break;case"together":ts(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Oi(e,n){!(n.mode&1)&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function Xe(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),Ln|=n.lanes,!(t&n.childLanes))return null;if(e!==null&&n.child!==e.child)throw Error(w(153));if(n.child!==null){for(e=n.child,t=fn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=fn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function Kd(e,n,t){switch(n.tag){case 3:ou(n),lt();break;case 5:Rc(n);break;case 1:fe(n.type)&&Ji(n);break;case 4:Nl(n,n.stateNode.containerInfo);break;case 10:var i=n.type._context,r=n.memoizedProps.value;F(er,i._currentValue),i._currentValue=r;break;case 13:if(i=n.memoizedState,i!==null)return i.dehydrated!==null?(F(W,W.current&1),n.flags|=128,null):t&n.child.childLanes?au(e,n,t):(F(W,W.current&1),e=Xe(e,n,t),e!==null?e.sibling:null);F(W,W.current&1);break;case 19:if(i=(t&n.childLanes)!==0,e.flags&128){if(i)return cu(e,n,t);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),F(W,W.current),i)break;return null;case 22:case 23:return n.lanes=0,su(e,n,t)}return Xe(e,n,t)}var uu,Vs,hu,du;uu=function(e,n){for(var t=n.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Vs=function(){};hu=function(e,n,t,i){var r=e.memoizedProps;if(r!==i){e=n.stateNode,En(Be.current);var s=null;switch(t){case"input":r=ds(e,r),i=ds(e,i),s=[];break;case"select":r=U({},r,{value:void 0}),i=U({},i,{value:void 0}),s=[];break;case"textarea":r=gs(e,r),i=gs(e,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(e.onclick=Ki)}ys(t,i);var l;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(l in o)o.hasOwnProperty(l)&&(t||(t={}),t[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Dt.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var a=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&a!==o&&(a!=null||o!=null))if(u==="style")if(o){for(l in o)!o.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(t||(t={}),t[l]="");for(l in a)a.hasOwnProperty(l)&&o[l]!==a[l]&&(t||(t={}),t[l]=a[l])}else t||(s||(s=[]),s.push(u,t)),t=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,o=o?o.__html:void 0,a!=null&&o!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Dt.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&O("scroll",e),s||o===a||(s=[])):(s=s||[]).push(u,a))}t&&(s=s||[]).push("style",t);var u=s;(n.updateQueue=u)&&(n.flags|=4)}};du=function(e,n,t,i){t!==i&&(n.flags|=4)};function Tt(e,n){if(!A)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function re(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,i=0;if(n)for(var r=e.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=t,n}function Xd(e,n,t){var i=n.pendingProps;switch(Sl(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(n),null;case 1:return fe(n.type)&&Xi(),re(n),null;case 3:return i=n.stateNode,at(),D(pe),D(le),Pl(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Ti(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,Me!==null&&(Zs(Me),Me=null))),Vs(e,n),re(n),null;case 5:zl(n);var r=En(Xt.current);if(t=n.type,e!==null&&n.stateNode!=null)hu(e,n,t,i,r),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!i){if(n.stateNode===null)throw Error(w(166));return re(n),null}if(e=En(Be.current),Ti(n)){i=n.stateNode,t=n.type;var s=n.memoizedProps;switch(i[Ae]=n,i[Gt]=s,e=(n.mode&1)!==0,t){case"dialog":O("cancel",i),O("close",i);break;case"iframe":case"object":case"embed":O("load",i);break;case"video":case"audio":for(r=0;r<jt.length;r++)O(jt[r],i);break;case"source":O("error",i);break;case"img":case"image":case"link":O("error",i),O("load",i);break;case"details":O("toggle",i);break;case"input":ro(i,s),O("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},O("invalid",i);break;case"textarea":lo(i,s),O("invalid",i)}ys(t,s),r=null;for(var l in s)if(s.hasOwnProperty(l)){var o=s[l];l==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Si(i.textContent,o,e),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Si(i.textContent,o,e),r=["children",""+o]):Dt.hasOwnProperty(l)&&o!=null&&l==="onScroll"&&O("scroll",i)}switch(t){case"input":fi(i),so(i,s,!0);break;case"textarea":fi(i),oo(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ki)}i=r,n.updateQueue=i,i!==null&&(n.flags|=4)}else{l=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Wa(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof i.is=="string"?e=l.createElement(t,{is:i.is}):(e=l.createElement(t),t==="select"&&(l=e,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):e=l.createElementNS(e,t),e[Ae]=n,e[Gt]=i,uu(e,n,!1,!1),n.stateNode=e;e:{switch(l=vs(t,i),t){case"dialog":O("cancel",e),O("close",e),r=i;break;case"iframe":case"object":case"embed":O("load",e),r=i;break;case"video":case"audio":for(r=0;r<jt.length;r++)O(jt[r],e);r=i;break;case"source":O("error",e),r=i;break;case"img":case"image":case"link":O("error",e),O("load",e),r=i;break;case"details":O("toggle",e),r=i;break;case"input":ro(e,i),r=ds(e,i),O("invalid",e);break;case"option":r=i;break;case"select":e._wrapperState={wasMultiple:!!i.multiple},r=U({},i,{value:void 0}),O("invalid",e);break;case"textarea":lo(e,i),r=gs(e,i),O("invalid",e);break;default:r=i}ys(t,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="style"?Ha(e,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Ba(e,a)):s==="children"?typeof a=="string"?(t!=="textarea"||a!=="")&&At(e,a):typeof a=="number"&&At(e,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Dt.hasOwnProperty(s)?a!=null&&s==="onScroll"&&O("scroll",e):a!=null&&ol(e,s,a,l))}switch(t){case"input":fi(e),so(e,i,!1);break;case"textarea":fi(e),oo(e);break;case"option":i.value!=null&&e.setAttribute("value",""+gn(i.value));break;case"select":e.multiple=!!i.multiple,s=i.value,s!=null?Zn(e,!!i.multiple,s,!1):i.defaultValue!=null&&Zn(e,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=Ki)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return re(n),null;case 6:if(e&&n.stateNode!=null)du(e,n,e.memoizedProps,i);else{if(typeof i!="string"&&n.stateNode===null)throw Error(w(166));if(t=En(Xt.current),En(Be.current),Ti(n)){if(i=n.stateNode,t=n.memoizedProps,i[Ae]=n,(s=i.nodeValue!==t)&&(e=ve,e!==null))switch(e.tag){case 3:Si(i.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Si(i.nodeValue,t,(e.mode&1)!==0)}s&&(n.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Ae]=n,n.stateNode=i}return re(n),null;case 13:if(D(W),i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(A&&ye!==null&&n.mode&1&&!(n.flags&128))zc(),lt(),n.flags|=98560,s=!1;else if(s=Ti(n),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(w(318));if(s=n.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[Ae]=n}else lt(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;re(n),s=!1}else Me!==null&&(Zs(Me),Me=null),s=!0;if(!s)return n.flags&65536?n:null}return n.flags&128?(n.lanes=t,n):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(n.child.flags|=8192,n.mode&1&&(e===null||W.current&1?X===0&&(X=3):Hl())),n.updateQueue!==null&&(n.flags|=4),re(n),null);case 4:return at(),Vs(e,n),e===null&&Qt(n.stateNode.containerInfo),re(n),null;case 10:return bl(n.type._context),re(n),null;case 17:return fe(n.type)&&Xi(),re(n),null;case 19:if(D(W),s=n.memoizedState,s===null)return re(n),null;if(i=(n.flags&128)!==0,l=s.rendering,l===null)if(i)Tt(s,!1);else{if(X!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(l=ir(e),l!==null){for(n.flags|=128,Tt(s,!1),i=l.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),n.subtreeFlags=0,i=t,t=n.child;t!==null;)s=t,e=i,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,e=l.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return F(W,W.current&1|2),n.child}e=e.sibling}s.tail!==null&&Q()>ut&&(n.flags|=128,i=!0,Tt(s,!1),n.lanes=4194304)}else{if(!i)if(e=ir(l),e!==null){if(n.flags|=128,i=!0,t=e.updateQueue,t!==null&&(n.updateQueue=t,n.flags|=4),Tt(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!A)return re(n),null}else 2*Q()-s.renderingStartTime>ut&&t!==1073741824&&(n.flags|=128,i=!0,Tt(s,!1),n.lanes=4194304);s.isBackwards?(l.sibling=n.child,n.child=l):(t=s.last,t!==null?t.sibling=l:n.child=l,s.last=l)}return s.tail!==null?(n=s.tail,s.rendering=n,s.tail=n.sibling,s.renderingStartTime=Q(),n.sibling=null,t=W.current,F(W,i?t&1|2:t&1),n):(re(n),null);case 22:case 23:return Ul(),i=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(n.flags|=8192),i&&n.mode&1?me&1073741824&&(re(n),n.subtreeFlags&6&&(n.flags|=8192)):re(n),null;case 24:return null;case 25:return null}throw Error(w(156,n.tag))}function Jd(e,n){switch(Sl(n),n.tag){case 1:return fe(n.type)&&Xi(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return at(),D(pe),D(le),Pl(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 5:return zl(n),null;case 13:if(D(W),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(w(340));lt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return D(W),null;case 4:return at(),null;case 10:return bl(n.type._context),null;case 22:case 23:return Ul(),null;case 24:return null;default:return null}}var bi=!1,se=!1,Zd=typeof WeakSet=="function"?WeakSet:Set,I=null;function Xn(e,n){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){H(e,n,i)}else t.current=null}function $s(e,n,t){try{t()}catch(i){H(e,n,i)}}var Jo=!1;function qd(e,n){if(js=Qi,e=yc(),kl(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var l=0,o=-1,a=-1,u=0,g=0,p=e,m=null;n:for(;;){for(var v;p!==t||r!==0&&p.nodeType!==3||(o=l+r),p!==s||i!==0&&p.nodeType!==3||(a=l+i),p.nodeType===3&&(l+=p.nodeValue.length),(v=p.firstChild)!==null;)m=p,p=v;for(;;){if(p===e)break n;if(m===t&&++u===r&&(o=l),m===s&&++g===i&&(a=l),(v=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=v}t=o===-1||a===-1?null:{start:o,end:a}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ns={focusedElem:e,selectionRange:t},Qi=!1,I=n;I!==null;)if(n=I,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,I=e;else for(;I!==null;){n=I;try{var k=n.alternate;if(n.flags&1024)switch(n.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var x=k.memoizedProps,T=k.memoizedState,h=n.stateNode,c=h.getSnapshotBeforeUpdate(n.elementType===n.type?x:Pe(n.type,x),T);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var d=n.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){H(n,n.return,y)}if(e=n.sibling,e!==null){e.return=n.return,I=e;break}I=n.return}return k=Jo,Jo=!1,k}function Rt(e,n,t){var i=n.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&e)===e){var s=r.destroy;r.destroy=void 0,s!==void 0&&$s(n,t,s)}r=r.next}while(r!==i)}}function kr(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var t=n=n.next;do{if((t.tag&e)===e){var i=t.create;t.destroy=i()}t=t.next}while(t!==n)}}function Qs(e){var n=e.ref;if(n!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof n=="function"?n(e):n.current=e}}function pu(e){var n=e.alternate;n!==null&&(e.alternate=null,pu(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Ae],delete n[Gt],delete n[_s],delete n[Rd],delete n[Fd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function fu(e){return e.tag===5||e.tag===3||e.tag===4}function Zo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||fu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ys(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.nodeType===8?t.parentNode.insertBefore(e,n):t.insertBefore(e,n):(t.nodeType===8?(n=t.parentNode,n.insertBefore(e,t)):(n=t,n.appendChild(e)),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Ki));else if(i!==4&&(e=e.child,e!==null))for(Ys(e,n,t),e=e.sibling;e!==null;)Ys(e,n,t),e=e.sibling}function Gs(e,n,t){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(i!==4&&(e=e.child,e!==null))for(Gs(e,n,t),e=e.sibling;e!==null;)Gs(e,n,t),e=e.sibling}var ee=null,_e=!1;function Ze(e,n,t){for(t=t.child;t!==null;)gu(e,n,t),t=t.sibling}function gu(e,n,t){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(dr,t)}catch{}switch(t.tag){case 5:se||Xn(t,n);case 6:var i=ee,r=_e;ee=null,Ze(e,n,t),ee=i,_e=r,ee!==null&&(_e?(e=ee,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):ee.removeChild(t.stateNode));break;case 18:ee!==null&&(_e?(e=ee,t=t.stateNode,e.nodeType===8?Kr(e.parentNode,t):e.nodeType===1&&Kr(e,t),Ht(e)):Kr(ee,t.stateNode));break;case 4:i=ee,r=_e,ee=t.stateNode.containerInfo,_e=!0,Ze(e,n,t),ee=i,_e=r;break;case 0:case 11:case 14:case 15:if(!se&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&$s(t,n,l),r=r.next}while(r!==i)}Ze(e,n,t);break;case 1:if(!se&&(Xn(t,n),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(o){H(t,n,o)}Ze(e,n,t);break;case 21:Ze(e,n,t);break;case 22:t.mode&1?(se=(i=se)||t.memoizedState!==null,Ze(e,n,t),se=i):Ze(e,n,t);break;default:Ze(e,n,t)}}function qo(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Zd),n.forEach(function(i){var r=ap.bind(null,e,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ze(e,n){var t=n.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=e,l=n,o=l;e:for(;o!==null;){switch(o.tag){case 5:ee=o.stateNode,_e=!1;break e;case 3:ee=o.stateNode.containerInfo,_e=!0;break e;case 4:ee=o.stateNode.containerInfo,_e=!0;break e}o=o.return}if(ee===null)throw Error(w(160));gu(s,l,r),ee=null,_e=!1;var a=r.alternate;a!==null&&(a.return=null),r.return=null}catch(u){H(r,n,u)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)mu(n,e),n=n.sibling}function mu(e,n){var t=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(n,e),Oe(e),i&4){try{Rt(3,e,e.return),kr(3,e)}catch(x){H(e,e.return,x)}try{Rt(5,e,e.return)}catch(x){H(e,e.return,x)}}break;case 1:ze(n,e),Oe(e),i&512&&t!==null&&Xn(t,t.return);break;case 5:if(ze(n,e),Oe(e),i&512&&t!==null&&Xn(t,t.return),e.flags&32){var r=e.stateNode;try{At(r,"")}catch(x){H(e,e.return,x)}}if(i&4&&(r=e.stateNode,r!=null)){var s=e.memoizedProps,l=t!==null?t.memoizedProps:s,o=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Da(r,s),vs(o,l);var u=vs(o,s);for(l=0;l<a.length;l+=2){var g=a[l],p=a[l+1];g==="style"?Ha(r,p):g==="dangerouslySetInnerHTML"?Ba(r,p):g==="children"?At(r,p):ol(r,g,p,u)}switch(o){case"input":ps(r,s);break;case"textarea":Aa(r,s);break;case"select":var m=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Zn(r,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?Zn(r,!!s.multiple,s.defaultValue,!0):Zn(r,!!s.multiple,s.multiple?[]:"",!1))}r[Gt]=s}catch(x){H(e,e.return,x)}}break;case 6:if(ze(n,e),Oe(e),i&4){if(e.stateNode===null)throw Error(w(162));r=e.stateNode,s=e.memoizedProps;try{r.nodeValue=s}catch(x){H(e,e.return,x)}}break;case 3:if(ze(n,e),Oe(e),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Ht(n.containerInfo)}catch(x){H(e,e.return,x)}break;case 4:ze(n,e),Oe(e);break;case 13:ze(n,e),Oe(e),r=e.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Wl=Q())),i&4&&qo(e);break;case 22:if(g=t!==null&&t.memoizedState!==null,e.mode&1?(se=(u=se)||g,ze(n,e),se=u):ze(n,e),Oe(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!g&&e.mode&1)for(I=e,g=e.child;g!==null;){for(p=I=g;I!==null;){switch(m=I,v=m.child,m.tag){case 0:case 11:case 14:case 15:Rt(4,m,m.return);break;case 1:Xn(m,m.return);var k=m.stateNode;if(typeof k.componentWillUnmount=="function"){i=m,t=m.return;try{n=i,k.props=n.memoizedProps,k.state=n.memoizedState,k.componentWillUnmount()}catch(x){H(i,t,x)}}break;case 5:Xn(m,m.return);break;case 22:if(m.memoizedState!==null){na(p);continue}}v!==null?(v.return=m,I=v):na(p)}g=g.sibling}e:for(g=null,p=e;;){if(p.tag===5){if(g===null){g=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,a=p.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,o.style.display=Ua("display",l))}catch(x){H(e,e.return,x)}}}else if(p.tag===6){if(g===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(x){H(e,e.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;g===p&&(g=null),p=p.return}g===p&&(g=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:ze(n,e),Oe(e),i&4&&qo(e);break;case 21:break;default:ze(n,e),Oe(e)}}function Oe(e){var n=e.flags;if(n&2){try{e:{for(var t=e.return;t!==null;){if(fu(t)){var i=t;break e}t=t.return}throw Error(w(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(At(r,""),i.flags&=-33);var s=Zo(e);Gs(e,s,r);break;case 3:case 4:var l=i.stateNode.containerInfo,o=Zo(e);Ys(e,o,l);break;default:throw Error(w(161))}}catch(a){H(e,e.return,a)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function ep(e,n,t){I=e,yu(e)}function yu(e,n,t){for(var i=(e.mode&1)!==0;I!==null;){var r=I,s=r.child;if(r.tag===22&&i){var l=r.memoizedState!==null||bi;if(!l){var o=r.alternate,a=o!==null&&o.memoizedState!==null||se;o=bi;var u=se;if(bi=l,(se=a)&&!u)for(I=r;I!==null;)l=I,a=l.child,l.tag===22&&l.memoizedState!==null?ta(r):a!==null?(a.return=l,I=a):ta(r);for(;s!==null;)I=s,yu(s),s=s.sibling;I=r,bi=o,se=u}ea(e)}else r.subtreeFlags&8772&&s!==null?(s.return=r,I=s):ea(e)}}function ea(e){for(;I!==null;){var n=I;if(n.flags&8772){var t=n.alternate;try{if(n.flags&8772)switch(n.tag){case 0:case 11:case 15:se||kr(5,n);break;case 1:var i=n.stateNode;if(n.flags&4&&!se)if(t===null)i.componentDidMount();else{var r=n.elementType===n.type?t.memoizedProps:Pe(n.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=n.updateQueue;s!==null&&Do(n,s,i);break;case 3:var l=n.updateQueue;if(l!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Do(n,l,t)}break;case 5:var o=n.stateNode;if(t===null&&n.flags&4){t=o;var a=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&t.focus();break;case"img":a.src&&(t.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var u=n.alternate;if(u!==null){var g=u.memoizedState;if(g!==null){var p=g.dehydrated;p!==null&&Ht(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}se||n.flags&512&&Qs(n)}catch(m){H(n,n.return,m)}}if(n===e){I=null;break}if(t=n.sibling,t!==null){t.return=n.return,I=t;break}I=n.return}}function na(e){for(;I!==null;){var n=I;if(n===e){I=null;break}var t=n.sibling;if(t!==null){t.return=n.return,I=t;break}I=n.return}}function ta(e){for(;I!==null;){var n=I;try{switch(n.tag){case 0:case 11:case 15:var t=n.return;try{kr(4,n)}catch(a){H(n,t,a)}break;case 1:var i=n.stateNode;if(typeof i.componentDidMount=="function"){var r=n.return;try{i.componentDidMount()}catch(a){H(n,r,a)}}var s=n.return;try{Qs(n)}catch(a){H(n,s,a)}break;case 5:var l=n.return;try{Qs(n)}catch(a){H(n,l,a)}}}catch(a){H(n,n.return,a)}if(n===e){I=null;break}var o=n.sibling;if(o!==null){o.return=n.return,I=o;break}I=n.return}}var np=Math.ceil,lr=Je.ReactCurrentDispatcher,Dl=Je.ReactCurrentOwner,be=Je.ReactCurrentBatchConfig,L=0,q=null,Y=null,ne=0,me=0,Jn=vn(0),X=0,ei=null,Ln=0,xr=0,Al=0,Ft=null,he=null,Wl=0,ut=1/0,Ue=null,or=!1,Ks=null,dn=null,Ei=!1,sn=null,ar=0,Ot=0,Xs=null,Di=-1,Ai=0;function ae(){return L&6?Q():Di!==-1?Di:Di=Q()}function pn(e){return e.mode&1?L&2&&ne!==0?ne&-ne:Dd.transition!==null?(Ai===0&&(Ai=nc()),Ai):(e=R,e!==0||(e=window.event,e=e===void 0?16:ac(e.type)),e):1}function Re(e,n,t,i){if(50<Ot)throw Ot=0,Xs=null,Error(w(185));ri(e,t,i),(!(L&2)||e!==q)&&(e===q&&(!(L&2)&&(xr|=t),X===4&&tn(e,ne)),ge(e,i),t===1&&L===0&&!(n.mode&1)&&(ut=Q()+500,yr&&wn()))}function ge(e,n){var t=e.callbackNode;Dh(e,n);var i=$i(e,e===q?ne:0);if(i===0)t!==null&&uo(t),e.callbackNode=null,e.callbackPriority=0;else if(n=i&-i,e.callbackPriority!==n){if(t!=null&&uo(t),n===1)e.tag===0?Od(ia.bind(null,e)):Ec(ia.bind(null,e)),Md(function(){!(L&6)&&wn()}),t=null;else{switch(tc(i)){case 1:t=dl;break;case 4:t=qa;break;case 16:t=Vi;break;case 536870912:t=ec;break;default:t=Vi}t=Cu(t,vu.bind(null,e))}e.callbackPriority=n,e.callbackNode=t}}function vu(e,n){if(Di=-1,Ai=0,L&6)throw Error(w(327));var t=e.callbackNode;if(it()&&e.callbackNode!==t)return null;var i=$i(e,e===q?ne:0);if(i===0)return null;if(i&30||i&e.expiredLanes||n)n=cr(e,i);else{n=i;var r=L;L|=2;var s=ku();(q!==e||ne!==n)&&(Ue=null,ut=Q()+500,jn(e,n));do try{rp();break}catch(o){wu(e,o)}while(!0);Cl(),lr.current=s,L=r,Y!==null?n=0:(q=null,ne=0,n=X)}if(n!==0){if(n===2&&(r=Ts(e),r!==0&&(i=r,n=Js(e,r))),n===1)throw t=ei,jn(e,0),tn(e,i),ge(e,Q()),t;if(n===6)tn(e,i);else{if(r=e.current.alternate,!(i&30)&&!tp(r)&&(n=cr(e,i),n===2&&(s=Ts(e),s!==0&&(i=s,n=Js(e,s))),n===1))throw t=ei,jn(e,0),tn(e,i),ge(e,Q()),t;switch(e.finishedWork=r,e.finishedLanes=i,n){case 0:case 1:throw Error(w(345));case 2:In(e,he,Ue);break;case 3:if(tn(e,i),(i&130023424)===i&&(n=Wl+500-Q(),10<n)){if($i(e,0)!==0)break;if(r=e.suspendedLanes,(r&i)!==i){ae(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=Ps(In.bind(null,e,he,Ue),n);break}In(e,he,Ue);break;case 4:if(tn(e,i),(i&4194240)===i)break;for(n=e.eventTimes,r=-1;0<i;){var l=31-Le(i);s=1<<l,l=n[l],l>r&&(r=l),i&=~s}if(i=r,i=Q()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*np(i/1960))-i,10<i){e.timeoutHandle=Ps(In.bind(null,e,he,Ue),i);break}In(e,he,Ue);break;case 5:In(e,he,Ue);break;default:throw Error(w(329))}}}return ge(e,Q()),e.callbackNode===t?vu.bind(null,e):null}function Js(e,n){var t=Ft;return e.current.memoizedState.isDehydrated&&(jn(e,n).flags|=256),e=cr(e,n),e!==2&&(n=he,he=t,n!==null&&Zs(n)),e}function Zs(e){he===null?he=e:he.push.apply(he,e)}function tp(e){for(var n=e;;){if(n.flags&16384){var t=n.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Fe(s(),r))return!1}catch{return!1}}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function tn(e,n){for(n&=~Al,n&=~xr,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var t=31-Le(n),i=1<<t;e[t]=-1,n&=~i}}function ia(e){if(L&6)throw Error(w(327));it();var n=$i(e,0);if(!(n&1))return ge(e,Q()),null;var t=cr(e,n);if(e.tag!==0&&t===2){var i=Ts(e);i!==0&&(n=i,t=Js(e,i))}if(t===1)throw t=ei,jn(e,0),tn(e,n),ge(e,Q()),t;if(t===6)throw Error(w(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,In(e,he,Ue),ge(e,Q()),null}function Bl(e,n){var t=L;L|=1;try{return e(n)}finally{L=t,L===0&&(ut=Q()+500,yr&&wn())}}function Rn(e){sn!==null&&sn.tag===0&&!(L&6)&&it();var n=L;L|=1;var t=be.transition,i=R;try{if(be.transition=null,R=1,e)return e()}finally{R=i,be.transition=t,L=n,!(L&6)&&wn()}}function Ul(){me=Jn.current,D(Jn)}function jn(e,n){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,_d(t)),Y!==null)for(t=Y.return;t!==null;){var i=t;switch(Sl(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Xi();break;case 3:at(),D(pe),D(le),Pl();break;case 5:zl(i);break;case 4:at();break;case 13:D(W);break;case 19:D(W);break;case 10:bl(i.type._context);break;case 22:case 23:Ul()}t=t.return}if(q=e,Y=e=fn(e.current,null),ne=me=n,X=0,ei=null,Al=xr=Ln=0,he=Ft=null,bn!==null){for(n=0;n<bn.length;n++)if(t=bn[n],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var l=s.next;s.next=r,i.next=l}t.pending=i}bn=null}return e}function wu(e,n){do{var t=Y;try{if(Cl(),Ri.current=sr,rr){for(var i=B.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}rr=!1}if(Mn=0,Z=K=B=null,Lt=!1,Jt=0,Dl.current=null,t===null||t.return===null){X=1,ei=n,Y=null;break}e:{var s=e,l=t.return,o=t,a=n;if(n=ne,o.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,g=o,p=g.tag;if(!(g.mode&1)&&(p===0||p===11||p===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var v=Vo(l);if(v!==null){v.flags&=-257,$o(v,l,o,s,n),v.mode&1&&Ho(s,u,n),n=v,a=u;var k=n.updateQueue;if(k===null){var x=new Set;x.add(a),n.updateQueue=x}else k.add(a);break e}else{if(!(n&1)){Ho(s,u,n),Hl();break e}a=Error(w(426))}}else if(A&&o.mode&1){var T=Vo(l);if(T!==null){!(T.flags&65536)&&(T.flags|=256),$o(T,l,o,s,n),Tl(ct(a,o));break e}}s=a=ct(a,o),X!==4&&(X=2),Ft===null?Ft=[s]:Ft.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,n&=-n,s.lanes|=n;var h=tu(s,a,n);Oo(s,h);break e;case 1:o=a;var c=s.type,d=s.stateNode;if(!(s.flags&128)&&(typeof c.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(dn===null||!dn.has(d)))){s.flags|=65536,n&=-n,s.lanes|=n;var y=iu(s,o,n);Oo(s,y);break e}}s=s.return}while(s!==null)}Su(t)}catch(S){n=S,Y===t&&t!==null&&(Y=t=t.return);continue}break}while(!0)}function ku(){var e=lr.current;return lr.current=sr,e===null?sr:e}function Hl(){(X===0||X===3||X===2)&&(X=4),q===null||!(Ln&268435455)&&!(xr&268435455)||tn(q,ne)}function cr(e,n){var t=L;L|=2;var i=ku();(q!==e||ne!==n)&&(Ue=null,jn(e,n));do try{ip();break}catch(r){wu(e,r)}while(!0);if(Cl(),L=t,lr.current=i,Y!==null)throw Error(w(261));return q=null,ne=0,X}function ip(){for(;Y!==null;)xu(Y)}function rp(){for(;Y!==null&&!Nh();)xu(Y)}function xu(e){var n=Iu(e.alternate,e,me);e.memoizedProps=e.pendingProps,n===null?Su(e):Y=n,Dl.current=null}function Su(e){var n=e;do{var t=n.alternate;if(e=n.return,n.flags&32768){if(t=Jd(t,n),t!==null){t.flags&=32767,Y=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{X=6,Y=null;return}}else if(t=Xd(t,n,me),t!==null){Y=t;return}if(n=n.sibling,n!==null){Y=n;return}Y=n=e}while(n!==null);X===0&&(X=5)}function In(e,n,t){var i=R,r=be.transition;try{be.transition=null,R=1,sp(e,n,t,i)}finally{be.transition=r,R=i}return null}function sp(e,n,t,i){do it();while(sn!==null);if(L&6)throw Error(w(327));t=e.finishedWork;var r=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(w(177));e.callbackNode=null,e.callbackPriority=0;var s=t.lanes|t.childLanes;if(Ah(e,s),e===q&&(Y=q=null,ne=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ei||(Ei=!0,Cu(Vi,function(){return it(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=be.transition,be.transition=null;var l=R;R=1;var o=L;L|=4,Dl.current=null,qd(e,t),mu(t,e),Cd(Ns),Qi=!!js,Ns=js=null,e.current=t,ep(t),zh(),L=o,R=l,be.transition=s}else e.current=t;if(Ei&&(Ei=!1,sn=e,ar=r),s=e.pendingLanes,s===0&&(dn=null),Mh(t.stateNode),ge(e,Q()),n!==null)for(i=e.onRecoverableError,t=0;t<n.length;t++)r=n[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(or)throw or=!1,e=Ks,Ks=null,e;return ar&1&&e.tag!==0&&it(),s=e.pendingLanes,s&1?e===Xs?Ot++:(Ot=0,Xs=e):Ot=0,wn(),null}function it(){if(sn!==null){var e=tc(ar),n=be.transition,t=R;try{if(be.transition=null,R=16>e?16:e,sn===null)var i=!1;else{if(e=sn,sn=null,ar=0,L&6)throw Error(w(331));var r=L;for(L|=4,I=e.current;I!==null;){var s=I,l=s.child;if(I.flags&16){var o=s.deletions;if(o!==null){for(var a=0;a<o.length;a++){var u=o[a];for(I=u;I!==null;){var g=I;switch(g.tag){case 0:case 11:case 15:Rt(8,g,s)}var p=g.child;if(p!==null)p.return=g,I=p;else for(;I!==null;){g=I;var m=g.sibling,v=g.return;if(pu(g),g===u){I=null;break}if(m!==null){m.return=v,I=m;break}I=v}}}var k=s.alternate;if(k!==null){var x=k.child;if(x!==null){k.child=null;do{var T=x.sibling;x.sibling=null,x=T}while(x!==null)}}I=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,I=l;else e:for(;I!==null;){if(s=I,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Rt(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,I=h;break e}I=s.return}}var c=e.current;for(I=c;I!==null;){l=I;var d=l.child;if(l.subtreeFlags&2064&&d!==null)d.return=l,I=d;else e:for(l=c;I!==null;){if(o=I,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:kr(9,o)}}catch(S){H(o,o.return,S)}if(o===l){I=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,I=y;break e}I=o.return}}if(L=r,wn(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(dr,e)}catch{}i=!0}return i}finally{R=t,be.transition=n}}return!1}function ra(e,n,t){n=ct(t,n),n=tu(e,n,1),e=hn(e,n,1),n=ae(),e!==null&&(ri(e,1,n),ge(e,n))}function H(e,n,t){if(e.tag===3)ra(e,e,t);else for(;n!==null;){if(n.tag===3){ra(n,e,t);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(dn===null||!dn.has(i))){e=ct(t,e),e=iu(n,e,1),n=hn(n,e,1),e=ae(),n!==null&&(ri(n,1,e),ge(n,e));break}}n=n.return}}function lp(e,n,t){var i=e.pingCache;i!==null&&i.delete(n),n=ae(),e.pingedLanes|=e.suspendedLanes&t,q===e&&(ne&t)===t&&(X===4||X===3&&(ne&130023424)===ne&&500>Q()-Wl?jn(e,0):Al|=t),ge(e,n)}function Tu(e,n){n===0&&(e.mode&1?(n=yi,yi<<=1,!(yi&130023424)&&(yi=4194304)):n=1);var t=ae();e=Ke(e,n),e!==null&&(ri(e,n,t),ge(e,t))}function op(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),Tu(e,t)}function ap(e,n){var t=0;switch(e.tag){case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(w(314))}i!==null&&i.delete(n),Tu(e,t)}var Iu;Iu=function(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps||pe.current)de=!0;else{if(!(e.lanes&t)&&!(n.flags&128))return de=!1,Kd(e,n,t);de=!!(e.flags&131072)}else de=!1,A&&n.flags&1048576&&jc(n,qi,n.index);switch(n.lanes=0,n.tag){case 2:var i=n.type;Oi(e,n),e=n.pendingProps;var r=st(n,le.current);tt(n,t),r=Ml(null,n,i,e,r,t);var s=Ll();return n.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,fe(i)?(s=!0,Ji(n)):s=!1,n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,jl(n),r.updater=wr,n.stateNode=r,r._reactInternals=n,Ds(n,i,e,t),n=Bs(null,n,i,!0,s,t)):(n.tag=0,A&&s&&xl(n),oe(null,n,r,t),n=n.child),n;case 16:i=n.elementType;e:{switch(Oi(e,n),e=n.pendingProps,r=i._init,i=r(i._payload),n.type=i,r=n.tag=up(i),e=Pe(i,e),r){case 0:n=Ws(null,n,i,e,t);break e;case 1:n=Go(null,n,i,e,t);break e;case 11:n=Qo(null,n,i,e,t);break e;case 14:n=Yo(null,n,i,Pe(i.type,e),t);break e}throw Error(w(306,i,""))}return n;case 0:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:Pe(i,r),Ws(e,n,i,r,t);case 1:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:Pe(i,r),Go(e,n,i,r,t);case 3:e:{if(ou(n),e===null)throw Error(w(387));i=n.pendingProps,s=n.memoizedState,r=s.element,Lc(e,n),tr(n,i,null,t);var l=n.memoizedState;if(i=l.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},n.updateQueue.baseState=s,n.memoizedState=s,n.flags&256){r=ct(Error(w(423)),n),n=Ko(e,n,i,t,r);break e}else if(i!==r){r=ct(Error(w(424)),n),n=Ko(e,n,i,t,r);break e}else for(ye=un(n.stateNode.containerInfo.firstChild),ve=n,A=!0,Me=null,t=_c(n,null,i,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(lt(),i===r){n=Xe(e,n,t);break e}oe(e,n,i,t)}n=n.child}return n;case 5:return Rc(n),e===null&&Rs(n),i=n.type,r=n.pendingProps,s=e!==null?e.memoizedProps:null,l=r.children,zs(i,r)?l=null:s!==null&&zs(i,s)&&(n.flags|=32),lu(e,n),oe(e,n,l,t),n.child;case 6:return e===null&&Rs(n),null;case 13:return au(e,n,t);case 4:return Nl(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=ot(n,null,i,t):oe(e,n,i,t),n.child;case 11:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:Pe(i,r),Qo(e,n,i,r,t);case 7:return oe(e,n,n.pendingProps,t),n.child;case 8:return oe(e,n,n.pendingProps.children,t),n.child;case 12:return oe(e,n,n.pendingProps.children,t),n.child;case 10:e:{if(i=n.type._context,r=n.pendingProps,s=n.memoizedProps,l=r.value,F(er,i._currentValue),i._currentValue=l,s!==null)if(Fe(s.value,l)){if(s.children===r.children&&!pe.current){n=Xe(e,n,t);break e}}else for(s=n.child,s!==null&&(s.return=n);s!==null;){var o=s.dependencies;if(o!==null){l=s.child;for(var a=o.firstContext;a!==null;){if(a.context===i){if(s.tag===1){a=Qe(-1,t&-t),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var g=u.pending;g===null?a.next=a:(a.next=g.next,g.next=a),u.pending=a}}s.lanes|=t,a=s.alternate,a!==null&&(a.lanes|=t),Fs(s.return,t,n),o.lanes|=t;break}a=a.next}}else if(s.tag===10)l=s.type===n.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(w(341));l.lanes|=t,o=l.alternate,o!==null&&(o.lanes|=t),Fs(l,t,n),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===n){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}oe(e,n,r.children,t),n=n.child}return n;case 9:return r=n.type,i=n.pendingProps.children,tt(n,t),r=Ee(r),i=i(r),n.flags|=1,oe(e,n,i,t),n.child;case 14:return i=n.type,r=Pe(i,n.pendingProps),r=Pe(i.type,r),Yo(e,n,i,r,t);case 15:return ru(e,n,n.type,n.pendingProps,t);case 17:return i=n.type,r=n.pendingProps,r=n.elementType===i?r:Pe(i,r),Oi(e,n),n.tag=1,fe(i)?(e=!0,Ji(n)):e=!1,tt(n,t),nu(n,i,r),Ds(n,i,r,t),Bs(null,n,i,!0,e,t);case 19:return cu(e,n,t);case 22:return su(e,n,t)}throw Error(w(156,n.tag))};function Cu(e,n){return Za(e,n)}function cp(e,n,t,i){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ce(e,n,t,i){return new cp(e,n,t,i)}function Vl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function up(e){if(typeof e=="function")return Vl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===cl)return 11;if(e===ul)return 14}return 2}function fn(e,n){var t=e.alternate;return t===null?(t=Ce(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function Wi(e,n,t,i,r,s){var l=2;if(i=e,typeof e=="function")Vl(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Bn:return Nn(t.children,r,s,n);case al:l=8,r|=8;break;case as:return e=Ce(12,t,n,r|2),e.elementType=as,e.lanes=s,e;case cs:return e=Ce(13,t,n,r),e.elementType=cs,e.lanes=s,e;case us:return e=Ce(19,t,n,r),e.elementType=us,e.lanes=s,e;case Ra:return Sr(t,r,s,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ma:l=10;break e;case La:l=9;break e;case cl:l=11;break e;case ul:l=14;break e;case qe:l=16,i=null;break e}throw Error(w(130,e==null?e:typeof e,""))}return n=Ce(l,t,n,r),n.elementType=e,n.type=i,n.lanes=s,n}function Nn(e,n,t,i){return e=Ce(7,e,i,n),e.lanes=t,e}function Sr(e,n,t,i){return e=Ce(22,e,i,n),e.elementType=Ra,e.lanes=t,e.stateNode={isHidden:!1},e}function is(e,n,t){return e=Ce(6,e,null,n),e.lanes=t,e}function rs(e,n,t){return n=Ce(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function hp(e,n,t,i,r){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dr(0),this.expirationTimes=Dr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dr(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function $l(e,n,t,i,r,s,l,o,a){return e=new hp(e,n,t,o,a),n===1?(n=1,s===!0&&(n|=8)):n=0,s=Ce(3,null,null,n),e.current=s,s.stateNode=e,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},jl(s),e}function dp(e,n,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wn,key:i==null?null:""+i,children:e,containerInfo:n,implementation:t}}function bu(e){if(!e)return mn;e=e._reactInternals;e:{if(On(e)!==e||e.tag!==1)throw Error(w(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(fe(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(w(171))}if(e.tag===1){var t=e.type;if(fe(t))return bc(e,t,n)}return n}function Eu(e,n,t,i,r,s,l,o,a){return e=$l(t,i,!0,e,r,s,l,o,a),e.context=bu(null),t=e.current,i=ae(),r=pn(t),s=Qe(i,r),s.callback=n??null,hn(t,s,r),e.current.lanes=r,ri(e,r,i),ge(e,i),e}function Tr(e,n,t,i){var r=n.current,s=ae(),l=pn(r);return t=bu(t),n.context===null?n.context=t:n.pendingContext=t,n=Qe(s,l),n.payload={element:e},i=i===void 0?null:i,i!==null&&(n.callback=i),e=hn(r,n,l),e!==null&&(Re(e,r,l,s),Li(e,r,l)),l}function ur(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sa(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function Ql(e,n){sa(e,n),(e=e.alternate)&&sa(e,n)}function pp(){return null}var ju=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yl(e){this._internalRoot=e}Ir.prototype.render=Yl.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(w(409));Tr(e,n,null,null)};Ir.prototype.unmount=Yl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Rn(function(){Tr(null,e,null,null)}),n[Ge]=null}};function Ir(e){this._internalRoot=e}Ir.prototype.unstable_scheduleHydration=function(e){if(e){var n=sc();e={blockedOn:null,target:e,priority:n};for(var t=0;t<nn.length&&n!==0&&n<nn[t].priority;t++);nn.splice(t,0,e),t===0&&oc(e)}};function Gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function la(){}function fp(e,n,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=ur(l);s.call(u)}}var l=Eu(n,i,e,0,null,!1,!1,"",la);return e._reactRootContainer=l,e[Ge]=l.current,Qt(e.nodeType===8?e.parentNode:e),Rn(),l}for(;r=e.lastChild;)e.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=ur(a);o.call(u)}}var a=$l(e,0,!1,null,null,!1,!1,"",la);return e._reactRootContainer=a,e[Ge]=a.current,Qt(e.nodeType===8?e.parentNode:e),Rn(function(){Tr(n,a,t,i)}),a}function br(e,n,t,i,r){var s=t._reactRootContainer;if(s){var l=s;if(typeof r=="function"){var o=r;r=function(){var a=ur(l);o.call(a)}}Tr(n,l,e,r)}else l=fp(t,n,e,r,i);return ur(l)}ic=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var t=Et(n.pendingLanes);t!==0&&(pl(n,t|1),ge(n,Q()),!(L&6)&&(ut=Q()+500,wn()))}break;case 13:Rn(function(){var i=Ke(e,1);if(i!==null){var r=ae();Re(i,e,1,r)}}),Ql(e,1)}};fl=function(e){if(e.tag===13){var n=Ke(e,134217728);if(n!==null){var t=ae();Re(n,e,134217728,t)}Ql(e,134217728)}};rc=function(e){if(e.tag===13){var n=pn(e),t=Ke(e,n);if(t!==null){var i=ae();Re(t,e,n,i)}Ql(e,n)}};sc=function(){return R};lc=function(e,n){var t=R;try{return R=e,n()}finally{R=t}};ks=function(e,n,t){switch(n){case"input":if(ps(e,t),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<t.length;n++){var i=t[n];if(i!==e&&i.form===e.form){var r=mr(i);if(!r)throw Error(w(90));Oa(i),ps(i,r)}}}break;case"textarea":Aa(e,t);break;case"select":n=t.value,n!=null&&Zn(e,!!t.multiple,n,!1)}};Qa=Bl;Ya=Rn;var gp={usingClientEntryPoint:!1,Events:[li,$n,mr,Va,$a,Bl]},It={findFiberByHostInstance:Cn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mp={bundleType:It.bundleType,version:It.version,rendererPackageName:It.rendererPackageName,rendererConfig:It.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Xa(e),e===null?null:e.stateNode},findFiberByHostInstance:It.findFiberByHostInstance||pp,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ji=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ji.isDisabled&&ji.supportsFiber)try{dr=ji.inject(mp),We=ji}catch{}}ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gp;ke.createPortal=function(e,n){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gl(n))throw Error(w(200));return dp(e,n,null,t)};ke.createRoot=function(e,n){if(!Gl(e))throw Error(w(299));var t=!1,i="",r=ju;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(r=n.onRecoverableError)),n=$l(e,1,!1,null,null,t,!1,i,r),e[Ge]=n.current,Qt(e.nodeType===8?e.parentNode:e),new Yl(n)};ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=Xa(n),e=e===null?null:e.stateNode,e};ke.flushSync=function(e){return Rn(e)};ke.hydrate=function(e,n,t){if(!Cr(n))throw Error(w(200));return br(null,e,n,!0,t)};ke.hydrateRoot=function(e,n,t){if(!Gl(e))throw Error(w(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",l=ju;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),n=Eu(n,null,e,1,t??null,r,!1,s,l),e[Ge]=n.current,Qt(e),i)for(e=0;e<i.length;e++)t=i[e],r=t._getVersion,r=r(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,r]:n.mutableSourceEagerHydrationData.push(t,r);return new Ir(n)};ke.render=function(e,n,t){if(!Cr(n))throw Error(w(200));return br(null,e,n,!1,t)};ke.unmountComponentAtNode=function(e){if(!Cr(e))throw Error(w(40));return e._reactRootContainer?(Rn(function(){br(null,null,e,!1,function(){e._reactRootContainer=null,e[Ge]=null})}),!0):!1};ke.unstable_batchedUpdates=Bl;ke.unstable_renderSubtreeIntoContainer=function(e,n,t,i){if(!Cr(t))throw Error(w(200));if(e==null||e._reactInternals===void 0)throw Error(w(38));return br(e,n,t,!1,i)};ke.version="18.3.1-next-f1338f8080-20240426";function Nu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nu)}catch(e){console.error(e)}}Nu(),Na.exports=ke;var yp=Na.exports,oa=yp;ls.createRoot=oa.createRoot,ls.hydrateRoot=oa.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ni(){return ni=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ni.apply(this,arguments)}var ln;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ln||(ln={}));const aa="popstate";function vp(e){e===void 0&&(e={});function n(i,r){let{pathname:s,search:l,hash:o}=i.location;return qs("",{pathname:s,search:l,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(i,r){return typeof r=="string"?r:zu(r)}return kp(n,t,null,e)}function G(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Kl(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function wp(){return Math.random().toString(36).substr(2,8)}function ca(e,n){return{usr:e.state,key:e.key,idx:n}}function qs(e,n,t,i){return t===void 0&&(t=null),ni({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof n=="string"?ft(n):n,{state:t,key:n&&n.key||i||wp()})}function zu(e){let{pathname:n="/",search:t="",hash:i=""}=e;return t&&t!=="?"&&(n+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(n+=i.charAt(0)==="#"?i:"#"+i),n}function ft(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substr(t),e=e.substr(0,t));let i=e.indexOf("?");i>=0&&(n.search=e.substr(i),e=e.substr(0,i)),e&&(n.pathname=e)}return n}function kp(e,n,t,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,l=r.history,o=ln.Pop,a=null,u=g();u==null&&(u=0,l.replaceState(ni({},l.state,{idx:u}),""));function g(){return(l.state||{idx:null}).idx}function p(){o=ln.Pop;let T=g(),h=T==null?null:T-u;u=T,a&&a({action:o,location:x.location,delta:h})}function m(T,h){o=ln.Push;let c=qs(x.location,T,h);u=g()+1;let d=ca(c,u),y=x.createHref(c);try{l.pushState(d,"",y)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;r.location.assign(y)}s&&a&&a({action:o,location:x.location,delta:1})}function v(T,h){o=ln.Replace;let c=qs(x.location,T,h);u=g();let d=ca(c,u),y=x.createHref(c);l.replaceState(d,"",y),s&&a&&a({action:o,location:x.location,delta:0})}function k(T){let h=r.location.origin!=="null"?r.location.origin:r.location.href,c=typeof T=="string"?T:zu(T);return c=c.replace(/ $/,"%20"),G(h,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,h)}let x={get action(){return o},get location(){return e(r,l)},listen(T){if(a)throw new Error("A history only accepts one active listener");return r.addEventListener(aa,p),a=T,()=>{r.removeEventListener(aa,p),a=null}},createHref(T){return n(r,T)},createURL:k,encodeLocation(T){let h=k(T);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:v,go(T){return l.go(T)}};return x}var ua;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ua||(ua={}));function xp(e,n,t){return t===void 0&&(t="/"),Sp(e,n,t)}function Sp(e,n,t,i){let r=typeof n=="string"?ft(n):n,s=Mu(r.pathname||"/",t);if(s==null)return null;let l=Pu(e);Tp(l);let o=null;for(let a=0;o==null&&a<l.length;++a){let u=Rp(s);o=_p(l[a],u)}return o}function Pu(e,n,t,i){n===void 0&&(n=[]),t===void 0&&(t=[]),i===void 0&&(i="");let r=(s,l,o)=>{let a={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:l,route:s};a.relativePath.startsWith("/")&&(G(a.relativePath.startsWith(i),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(i.length));let u=zn([i,a.relativePath]),g=t.concat(a);s.children&&s.children.length>0&&(G(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Pu(s.children,n,g,u)),!(s.path==null&&!s.index)&&n.push({path:u,score:zp(u,s.index),routesMeta:g})};return e.forEach((s,l)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,l);else for(let a of _u(s.path))r(s,l,a)}),n}function _u(e){let n=e.split("/");if(n.length===0)return[];let[t,...i]=n,r=t.endsWith("?"),s=t.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let l=_u(i.join("/")),o=[];return o.push(...l.map(a=>a===""?s:[s,a].join("/"))),r&&o.push(...l),o.map(a=>e.startsWith("/")&&a===""?"/":a)}function Tp(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:Pp(n.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const Ip=/^:[\w-]+$/,Cp=3,bp=2,Ep=1,jp=10,Np=-2,ha=e=>e==="*";function zp(e,n){let t=e.split("/"),i=t.length;return t.some(ha)&&(i+=Np),n&&(i+=bp),t.filter(r=>!ha(r)).reduce((r,s)=>r+(Ip.test(s)?Cp:s===""?Ep:jp),i)}function Pp(e,n){return e.length===n.length&&e.slice(0,-1).every((i,r)=>i===n[r])?e[e.length-1]-n[n.length-1]:0}function _p(e,n,t){let{routesMeta:i}=e,r={},s="/",l=[];for(let o=0;o<i.length;++o){let a=i[o],u=o===i.length-1,g=s==="/"?n:n.slice(s.length)||"/",p=Mp({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},g),m=a.route;if(!p)return null;Object.assign(r,p.params),l.push({params:r,pathname:zn([s,p.pathname]),pathnameBase:Wp(zn([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=zn([s,p.pathnameBase]))}return l}function Mp(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,i]=Lp(e.path,e.caseSensitive,e.end),r=n.match(t);if(!r)return null;let s=r[0],l=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((u,g,p)=>{let{paramName:m,isOptional:v}=g;if(m==="*"){let x=o[p]||"";l=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const k=o[p];return v&&!k?u[m]=void 0:u[m]=(k||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:l,pattern:e}}function Lp(e,n,t){n===void 0&&(n=!1),t===void 0&&(t=!0),Kl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,o,a)=>(i.push({paramName:o,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,n?void 0:"i"),i]}function Rp(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Kl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+n+").")),e}}function Mu(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,i=e.charAt(t);return i&&i!=="/"?null:e.slice(t)||"/"}const Fp=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Op=e=>Fp.test(e);function Dp(e,n){n===void 0&&(n="/");let{pathname:t,search:i="",hash:r=""}=typeof e=="string"?ft(e):e,s;if(t)if(Op(t))s=t;else{if(t.includes("//")){let l=t;t=t.replace(/\/\/+/g,"/"),Kl(!1,"Pathnames cannot have embedded double slashes - normalizing "+(l+" -> "+t))}t.startsWith("/")?s=da(t.substring(1),"/"):s=da(t,n)}else s=n;return{pathname:s,search:Bp(i),hash:Up(r)}}function da(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function ss(e,n,t,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+n+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ap(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function Lu(e,n){let t=Ap(e);return n?t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function Ru(e,n,t,i){i===void 0&&(i=!1);let r;typeof e=="string"?r=ft(e):(r=ni({},e),G(!r.pathname||!r.pathname.includes("?"),ss("?","pathname","search",r)),G(!r.pathname||!r.pathname.includes("#"),ss("#","pathname","hash",r)),G(!r.search||!r.search.includes("#"),ss("#","search","hash",r)));let s=e===""||r.pathname==="",l=s?"/":r.pathname,o;if(l==null)o=t;else{let p=n.length-1;if(!i&&l.startsWith("..")){let m=l.split("/");for(;m[0]==="..";)m.shift(),p-=1;r.pathname=m.join("/")}o=p>=0?n[p]:"/"}let a=Dp(r,o),u=l&&l!=="/"&&l.endsWith("/"),g=(s||l===".")&&t.endsWith("/");return!a.pathname.endsWith("/")&&(u||g)&&(a.pathname+="/"),a}const zn=e=>e.join("/").replace(/\/\/+/g,"/"),Wp=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Bp=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Up=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Hp(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Fu=["post","put","patch","delete"];new Set(Fu);const Vp=["get",...Fu];new Set(Vp);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ti(){return ti=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},ti.apply(this,arguments)}const Xl=C.createContext(null),$p=C.createContext(null),ai=C.createContext(null),Er=C.createContext(null),kn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Ou=C.createContext(null);function ci(){return C.useContext(Er)!=null}function jr(){return ci()||G(!1),C.useContext(Er).location}function Du(e){C.useContext(ai).static||C.useLayoutEffect(e)}function Nr(){let{isDataRoute:e}=C.useContext(kn);return e?lf():Qp()}function Qp(){ci()||G(!1);let e=C.useContext(Xl),{basename:n,future:t,navigator:i}=C.useContext(ai),{matches:r}=C.useContext(kn),{pathname:s}=jr(),l=JSON.stringify(Lu(r,t.v7_relativeSplatPath)),o=C.useRef(!1);return Du(()=>{o.current=!0}),C.useCallback(function(u,g){if(g===void 0&&(g={}),!o.current)return;if(typeof u=="number"){i.go(u);return}let p=Ru(u,JSON.parse(l),s,g.relative==="path");e==null&&n!=="/"&&(p.pathname=p.pathname==="/"?n:zn([n,p.pathname])),(g.replace?i.replace:i.push)(p,g.state,g)},[n,i,l,s,e])}function Yp(){let{matches:e}=C.useContext(kn),n=e[e.length-1];return n?n.params:{}}function Gp(e,n){return Kp(e,n)}function Kp(e,n,t,i){ci()||G(!1);let{navigator:r}=C.useContext(ai),{matches:s}=C.useContext(kn),l=s[s.length-1],o=l?l.params:{};l&&l.pathname;let a=l?l.pathnameBase:"/";l&&l.route;let u=jr(),g;if(n){var p;let T=typeof n=="string"?ft(n):n;a==="/"||(p=T.pathname)!=null&&p.startsWith(a)||G(!1),g=T}else g=u;let m=g.pathname||"/",v=m;if(a!=="/"){let T=a.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(T.length).join("/")}let k=xp(e,{pathname:v}),x=ef(k&&k.map(T=>Object.assign({},T,{params:Object.assign({},o,T.params),pathname:zn([a,r.encodeLocation?r.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?a:zn([a,r.encodeLocation?r.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),s,t,i);return n&&x?C.createElement(Er.Provider,{value:{location:ti({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:ln.Pop}},x):x}function Xp(){let e=sf(),n=Hp(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},n),t?C.createElement("pre",{style:r},t):null,null)}const Jp=C.createElement(Xp,null);class Zp extends C.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,t){return t.location!==n.location||t.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:t.error,location:t.location,revalidation:n.revalidation||t.revalidation}}componentDidCatch(n,t){console.error("React Router caught the following error during render",n,t)}render(){return this.state.error!==void 0?C.createElement(kn.Provider,{value:this.props.routeContext},C.createElement(Ou.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function qp(e){let{routeContext:n,match:t,children:i}=e,r=C.useContext(Xl);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),C.createElement(kn.Provider,{value:n},i)}function ef(e,n,t,i){var r;if(n===void 0&&(n=[]),t===void 0&&(t=null),i===void 0&&(i=null),e==null){var s;if(!t)return null;if(t.errors)e=t.matches;else if((s=i)!=null&&s.v7_partialHydration&&n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let l=e,o=(r=t)==null?void 0:r.errors;if(o!=null){let g=l.findIndex(p=>p.route.id&&(o==null?void 0:o[p.route.id])!==void 0);g>=0||G(!1),l=l.slice(0,Math.min(l.length,g+1))}let a=!1,u=-1;if(t&&i&&i.v7_partialHydration)for(let g=0;g<l.length;g++){let p=l[g];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=g),p.route.id){let{loaderData:m,errors:v}=t,k=p.route.loader&&m[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||k){a=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((g,p,m)=>{let v,k=!1,x=null,T=null;t&&(v=o&&p.route.id?o[p.route.id]:void 0,x=p.route.errorElement||Jp,a&&(u<0&&m===0?(of("route-fallback"),k=!0,T=null):u===m&&(k=!0,T=p.route.hydrateFallbackElement||null)));let h=n.concat(l.slice(0,m+1)),c=()=>{let d;return v?d=x:k?d=T:p.route.Component?d=C.createElement(p.route.Component,null):p.route.element?d=p.route.element:d=g,C.createElement(qp,{match:p,routeContext:{outlet:g,matches:h,isDataRoute:t!=null},children:d})};return t&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?C.createElement(Zp,{location:t.location,revalidation:t.revalidation,component:x,error:v,children:c(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):c()},null)}var Au=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Au||{}),Wu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Wu||{});function nf(e){let n=C.useContext(Xl);return n||G(!1),n}function tf(e){let n=C.useContext($p);return n||G(!1),n}function rf(e){let n=C.useContext(kn);return n||G(!1),n}function Bu(e){let n=rf(),t=n.matches[n.matches.length-1];return t.route.id||G(!1),t.route.id}function sf(){var e;let n=C.useContext(Ou),t=tf(),i=Bu();return n!==void 0?n:(e=t.errors)==null?void 0:e[i]}function lf(){let{router:e}=nf(Au.UseNavigateStable),n=Bu(Wu.UseNavigateStable),t=C.useRef(!1);return Du(()=>{t.current=!0}),C.useCallback(function(r,s){s===void 0&&(s={}),t.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,ti({fromRouteId:n},s)))},[e,n])}const pa={};function of(e,n,t){pa[e]||(pa[e]=!0)}function af(e,n){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function cf(e){let{to:n,replace:t,state:i,relative:r}=e;ci()||G(!1);let{future:s,static:l}=C.useContext(ai),{matches:o}=C.useContext(kn),{pathname:a}=jr(),u=Nr(),g=Ru(n,Lu(o,s.v7_relativeSplatPath),a,r==="path"),p=JSON.stringify(g);return C.useEffect(()=>u(JSON.parse(p),{replace:t,state:i,relative:r}),[u,p,r,t,i]),null}function An(e){G(!1)}function uf(e){let{basename:n="/",children:t=null,location:i,navigationType:r=ln.Pop,navigator:s,static:l=!1,future:o}=e;ci()&&G(!1);let a=n.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:a,navigator:s,static:l,future:ti({v7_relativeSplatPath:!1},o)}),[a,o,s,l]);typeof i=="string"&&(i=ft(i));let{pathname:g="/",search:p="",hash:m="",state:v=null,key:k="default"}=i,x=C.useMemo(()=>{let T=Mu(g,a);return T==null?null:{location:{pathname:T,search:p,hash:m,state:v,key:k},navigationType:r}},[a,g,p,m,v,k,r]);return x==null?null:C.createElement(ai.Provider,{value:u},C.createElement(Er.Provider,{children:t,value:x}))}function hf(e){let{children:n,location:t}=e;return Gp(el(n),t)}new Promise(()=>{});function el(e,n){n===void 0&&(n=[]);let t=[];return C.Children.forEach(e,(i,r)=>{if(!C.isValidElement(i))return;let s=[...n,r];if(i.type===C.Fragment){t.push.apply(t,el(i.props.children,s));return}i.type!==An&&G(!1),!i.props.index||!i.props.children||G(!1);let l={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(l.children=el(i.props.children,s)),t.push(l)}),t}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const df="6";try{window.__reactRouterVersion=df}catch{}const pf="startTransition",fa=lh[pf];function ff(e){let{basename:n,children:t,future:i,window:r}=e,s=C.useRef();s.current==null&&(s.current=vp({window:r,v5Compat:!0}));let l=s.current,[o,a]=C.useState({action:l.action,location:l.location}),{v7_startTransition:u}=i||{},g=C.useCallback(p=>{u&&fa?fa(()=>a(p)):a(p)},[a,u]);return C.useLayoutEffect(()=>l.listen(g),[l,g]),C.useEffect(()=>af(i),[i]),C.createElement(uf,{basename:n,children:t,location:o.location,navigationType:o.action,navigator:l,future:i})}var ga;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ga||(ga={}));var ma;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ma||(ma={}));const gf=[{path:"/",label:"首页",icon:"🏠"},{path:"/words",label:"单词",icon:"📖"},{path:"/profile",label:"我的",icon:"👤"}];function mf(){const e=Nr(),n=jr();return f.jsxs("div",{className:"tab-bar",children:[gf.map(t=>f.jsxs("button",{className:`tab-item ${n.pathname===t.path?"active":""}`,onClick:()=>e(t.path),children:[f.jsx("span",{className:"tab-icon",children:t.icon}),f.jsx("span",{className:"tab-label",children:t.label})]},t.path)),f.jsx("style",{children:`
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
      `})]})}const yf=[{id:"1",title:"Children's Day",titleCn:"儿童节",image:"/images/01儿童节.jpg",englishText:`Today is Children's Day. I am so excited!

I wear my new beautiful clothes. I go to the park with my mom and dad.

We fly a kite in the park. The kite is red and looks like a fish. It flies so high!

I eat ice cream. It is vanilla and strawberry. It is so sweet!

I am very happy today. Children's Day is the best day!`,chineseText:`今天是儿童节。我太兴奋了！

我穿上了漂亮的新衣服。我和爸爸妈妈一起去公园。

我们在公园放风筝。风筝是红色的，像一条鱼。它飞得好高！

我吃了冰淇淋。是香草味和草莓味的。好甜啊！

我今天非常开心。儿童节是最棒的一天！`,vocabularies:[{english:"Children's Day",phonetic:"/ˈtʃɪldrən deɪ/",chinese:"儿童节"},{english:"excited",phonetic:"/ɪkˈsaɪtɪd/",chinese:"兴奋的"},{english:"wear",phonetic:"/wer/",chinese:"穿"},{english:"new",phonetic:"/nuː/",chinese:"新的"},{english:"beautiful",phonetic:"/ˈbjuːtɪfl/",chinese:"漂亮的"},{english:"park",phonetic:"/pɑːrk/",chinese:"公园"},{english:"kite",phonetic:"/kaɪt/",chinese:"风筝"},{english:"ice cream",phonetic:"/aɪs kriːm/",chinese:"冰淇淋"}]},{id:"2",title:"Ice Cream",titleCn:"冰激淋",image:"/images/02冰激淋.jpg",englishText:`I love ice cream so much. It is my favorite snack.

There are many flavors. There is chocolate, vanilla, and strawberry. I like all of them!

In summer, I eat ice cream every day. It makes me feel cool and happy.

Last Sunday, my dad bought me a big ice cream cone. It had three flavors. I shared it with my mom.

Ice cream is sweet and delicious. I will never get tired of it!`,chineseText:`我太喜欢冰激淋了。它是我最爱的零食。

有很多口味。有巧克力味、香草味和草莓味。我都喜欢！

夏天的时候，我每天都吃冰激淋。它让我感觉凉爽又开心。

上星期天，爸爸给我买了一个大蛋筒冰激淋。有三种口味。我和妈妈一起分享了。

冰激淋又甜又好吃。我永远也吃不腻！`,vocabularies:[{english:"ice cream",phonetic:"/aɪs kriːm/",chinese:"冰激淋"},{english:"flavor",phonetic:"/ˈfleɪvər/",chinese:"口味"},{english:"chocolate",phonetic:"/ˈtʃɔːklət/",chinese:"巧克力"},{english:"vanilla",phonetic:"/vəˈnɪlə/",chinese:"香草"},{english:"strawberry",phonetic:"/ˈstrɔːberi/",chinese:"草莓"},{english:"summer",phonetic:"/ˈsʌmər/",chinese:"夏天"},{english:"cool",phonetic:"/kuːl/",chinese:"凉爽的"},{english:"delicious",phonetic:"/dɪˈlɪʃəs/",chinese:"美味的"}]},{id:"3",title:"All About Me",titleCn:"自我介绍",image:"/images/03自我介绍.jpg",englishText:`Hello, everyone! Let me introduce myself.

My name is Li Ming. I am eight years old. I live in Beijing with my family.

I have big eyes and short hair. I like to wear blue shirts.

I am a student at Sunny Elementary School. I am in Class Two, Grade Three.

I like to read books and play soccer. My favorite subject is English.

Nice to meet you all! I hope we can be good friends.`,chineseText:`大家好！让我介绍一下自己。

我叫李明。我今年八岁了。我和家人住在北京。

我有一双大眼睛和短短的头发。我喜欢穿蓝色的衬衫。

我是阳光小学的学生。我在三年级二班。

我喜欢读书和踢足球。我最喜欢的科目是英语。

很高兴认识大家！希望我们能成为好朋友。`,vocabularies:[{english:"introduce",phonetic:"/ˌɪntrəˈdjuːs/",chinese:"介绍"},{english:"elementary school",phonetic:"/ˌelɪˈmentri skuːl/",chinese:"小学"},{english:"subject",phonetic:"/ˈsʌbdʒɪkt/",chinese:"科目"},{english:"soccer",phonetic:"/ˈsɑːkər/",chinese:"足球"},{english:"favorite",phonetic:"/ˈfeɪvərɪt/",chinese:"最喜欢的"},{english:"family",phonetic:"/ˈfæməli/",chinese:"家人"},{english:"student",phonetic:"/ˈstuːdnt/",chinese:"学生"},{english:"friend",phonetic:"/frend/",chinese:"朋友"}]},{id:"4",title:"My Day",titleCn:"我的一天",image:"/images/04我的一天.jpg",englishText:`I have a busy day every day. Let me tell you about it.

I wake up at seven o'clock in the morning. I brush my teeth and wash my face.

I eat breakfast with my family at half past seven. Then I go to school by bus.

Classes start at eight o'clock. I have Chinese, Math, English, and Music every day.

After school, I do my homework. Then I play with my friends in the park.

At nine o'clock, I take a bath and go to bed. What a busy day!`,chineseText:`我每天都很忙碌。让我告诉你关于我的一天。

早上七点我起床。我刷牙洗脸。

七点半我和家人一起吃早餐。然后我坐公交车去学校。

八点开始上课。我每天有语文、数学、英语和音乐课。

放学后，我做作业。然后我和朋友们在公园玩。

九点，我洗澡睡觉。真是忙碌的一天！`,vocabularies:[{english:"wake up",phonetic:"/weɪk ʌp/",chinese:"起床"},{english:"brush teeth",phonetic:"/brʌʃ tiːθ/",chinese:"刷牙"},{english:"breakfast",phonetic:"/ˈbrekfəst/",chinese:"早餐"},{english:"class",phonetic:"/klæs/",chinese:"课"},{english:"homework",phonetic:"/ˈhoʊmwɜːrk/",chinese:"作业"},{english:"park",phonetic:"/pɑːrk/",chinese:"公园"},{english:"bath",phonetic:"/bæθ/",chinese:"洗澡"},{english:"busy",phonetic:"/ˈbɪzi/",chinese:"忙碌的"}]},{id:"5",title:"I Love Summer",titleCn:"我爱夏天",image:"/images/05我爱夏天.jpg",englishText:`Summer is my favorite season. I love it so much!

In summer, the sun is bright and the sky is blue. The days are long and warm.

I can swim in the swimming pool. The water is cool and I feel so happy.

I eat lots of ice cream in summer. My favorite is strawberry flavor.

I also wear my beautiful dresses and sandals. I look so cute!

Summer vacation starts in July. I will go to the beach with my family. I cannot wait!`,chineseText:`夏天是我最喜欢的季节。我太喜欢它了！

夏天的时候，太阳很明亮，天空是蓝色的。白天很长很暖和。

我可以在游泳池里游泳。水很凉快，我感觉很开心。

夏天我可以吃很多冰淇淋。我最喜欢草莓味的。

我还穿上漂亮的裙子和凉鞋。我看起来好可爱！

暑假从七月开始。我会和家人一起去海边。我等不及了！`,vocabularies:[{english:"summer",phonetic:"/ˈsʌmər/",chinese:"夏天"},{english:"season",phonetic:"/ˈsiːzn/",chinese:"季节"},{english:"swim",phonetic:"/swɪm/",chinese:"游泳"},{english:"swimming pool",phonetic:"/ˈswɪmɪŋ puːl/",chinese:"游泳池"},{english:"vacation",phonetic:"/veɪˈkeɪʃn/",chinese:"假期"},{english:"beach",phonetic:"/biːtʃ/",chinese:"海边"},{english:"sandal",phonetic:"/ˈsændl/",chinese:"凉鞋"},{english:"bright",phonetic:"/braɪt/",chinese:"明亮的"}]},{id:"6",title:"My School",titleCn:"我的学校",image:"/images/06我的学校.jpg",englishText:`I go to Sunshine Elementary School. It is a beautiful school.

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

爸爸永远爱我和妈妈。我永远是他的小女孩。`,vocabularies:[{english:"dad",phonetic:"/dæd/",chinese:"爸爸"},{english:"superman",phonetic:"/ˈsuːpərmæn/",chinese:"超人"},{english:"strong",phonetic:"/strɔːŋ/",chinese:"强壮的"},{english:"brave",phonetic:"/breɪv/",chinese:"勇敢的"},{english:"basketball",phonetic:"/ˈbæskɪtbɔːl/",chinese:"篮球"},{english:"scared",phonetic:"/skerd/",chinese:"害怕的"},{english:"forever",phonetic:"/fərˈevər/",chinese:"永远"},{english:"swimmer",phonetic:"/ˈswɪmər/",chinese:"游泳者"}]}],vf=[{id:"11",title:"Dragon Boat Festival",titleCn:"端午节",image:"/images/11端午节.jpg",englishText:`Dragon Boat Festival is on the fifth day of the fifth lunar month.

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

当爸爸看到卡片时，他紧紧拥抱我。他的眼睛湿润了。"这是最好的礼物，"他说。`,vocabularies:[{english:"Father's Day",phonetic:"/ˈfɑːðərz deɪ/",chinese:"父亲节"},{english:"special",phonetic:"/ˈspeʃl/",chinese:"特殊的"},{english:"gift",phonetic:"/ɡɪft/",chinese:"礼物"},{english:"card",phonetic:"/kɑːrd/",chinese:"卡片"},{english:"heart",phonetic:"/hɑːrt/",chinese:"心"},{english:"hug",phonetic:"/hʌɡ/",chinese:"拥抱"},{english:"surprise",phonetic:"/sərˈpraɪz/",chinese:"惊喜"},{english:"wet",phonetic:"/wet/",chinese:"湿润的"}]}],wf=[{id:"21",title:"My Body",titleCn:"我的身体",image:"/images/21我的身体.jpg",englishText:`I have one head, one body, two arms, and two legs. This is my body.

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

我的头发又黑又直。我每天早晚洗脸。我保持脸部清洁！`,vocabularies:[{english:"face",phonetic:"/feɪs/",chinese:"脸"},{english:"mirror",phonetic:"/ˈmɪrər/",chinese:"镜子"},{english:"oval",phonetic:"/ˈoʊvl/",chinese:"椭圆形的"},{english:"brown",phonetic:"/braʊn/",chinese:"棕色的"},{english:"nose",phonetic:"/noʊz/",chinese:"鼻子"},{english:"teeth",phonetic:"/tiːθ/",chinese:"牙齿"},{english:"ear",phonetic:"/ɪr/",chinese:"耳朵"},{english:"straight",phonetic:"/streɪt/",chinese:"直的"}]}],kf=[{id:"31",title:"My Mom",titleCn:"我的妈妈",image:"/images/31我的妈妈.jpg",englishText:`My mom is the best mom in the world. She is kind and beautiful.

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

妈妈说每天吃绿色蔬菜是健康的。现在我开心地吃西兰花！`,vocabularies:[{english:"broccoli",phonetic:"/ˈbrɑːkəli/",chinese:"西兰花"},{english:"vegetable",phonetic:"/ˈvedʒtəbl/",chinese:"蔬菜"},{english:"steam",phonetic:"/stiːm/",chinese:"蒸"},{english:"salt",phonetic:"/sɔːlt/",chinese:"盐"},{english:"stir-fry",phonetic:"/ˈstɜːr fraɪ/",chinese:"翻炒"},{english:"garlic",phonetic:"/ˈɡɑːrlɪk/",chinese:"大蒜"},{english:"vitamin",phonetic:"/ˈvaɪtəmɪn/",chinese:"维生素"},{english:"healthy",phonetic:"/ˈhelθi/",chinese:"健康的"}]}],xf=[{id:"41",title:"Tomato",titleCn:"西红柿",image:"/images/41西红柿.jpg",englishText:`Tomato is a red and round vegetable. But some people say it is a fruit!

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

旅行让我看到新地方，学到新东西。我等不及下一次旅行了！`,vocabularies:[{english:"travel",phonetic:"/ˈtrævl/",chinese:"旅行"},{english:"exciting",phonetic:"/ɪkˈsaɪtɪŋ/",chinese:"令人兴奋的"},{english:"view",phonetic:"/vjuː/",chinese:"风景"},{english:"building",phonetic:"/ˈbɪldɪŋ/",chinese:"建筑物"},{english:"delicious",phonetic:"/dɪˈlɪʃəs/",chinese:"美味的"},{english:"lit up",phonetic:"/lɪt ʌp/",chinese:"点亮"},{english:"trip",phonetic:"/trɪp/",chinese:"旅行"},{english:"amazing",phonetic:"/əˈmeɪzɪŋ/",chinese:"惊人的"}]}],Sf=[{id:"51",title:"My Little Sister",titleCn:"我的妹妹",image:"/images/51我的妹妹.jpg",englishText:`I have a little sister. Her name is Lily. She is five years old.

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

梦想很重要。它们给我方向。我永远不会停止相信我的梦想！`,vocabularies:[{english:"dream",phonetic:"/driːm/",chinese:"梦想"},{english:"scientist",phonetic:"/ˈsaɪəntɪst/",chinese:"科学家"},{english:"discover",phonetic:"/dɪˈskʌvər/",chinese:"发现"},{english:"technology",phonetic:"/tekˈnɑːlədʒi/",chinese:"科技"},{english:"invent",phonetic:"/ɪnˈvent/",chinese:"发明"},{english:"robot",phonetic:"/ˈroʊbɑːt/",chinese:"机器人"},{english:"medicine",phonetic:"/ˈmedɪsn/",chinese:"药"},{english:"believe",phonetic:"/bɪˈliːv/",chinese:"相信"}]}],Tf=[{id:"61",title:"The Great Wall",titleCn:"长城",image:"/images/61长城.jpg",englishText:`The Great Wall of China is one of the greatest wonders in the world. I visited it last year.

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

时间管理是一个有用的技能。它帮我把每件事都安排好时间！`,vocabularies:[{english:"time",phonetic:"/taɪm/",chinese:"时间"},{english:"precious",phonetic:"/ˈpreʃəs/",chinese:"宝贵的"},{english:"manage",phonetic:"/ˈmænɪdʒ/",chinese:"管理"},{english:"schedule",phonetic:"/ˈskedʒuːl/",chinese:"时间表"},{english:"homework",phonetic:"/ˈhoʊmwɜːrk/",chinese:"作业"},{english:"sleep",phonetic:"/sliːp/",chinese:"睡觉"},{english:"skill",phonetic:"/skɪl/",chinese:"技能"},{english:"important",phonetic:"/ɪmˈpɔːrtnt/",chinese:"重要的"}]}],If=[{id:"71",title:"Dumplings",titleCn:"饺子",image:"/images/71饺子.jpg",englishText:`Dumplings are a traditional Chinese food. My family makes them together.

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

每一天都是一份礼物。让我们充分利用它，不浪费一刻！`,vocabularies:[{english:"waste",phonetic:"/weɪst/",chinese:"浪费"},{english:"time",phonetic:"/taɪm/",chinese:"时间"},{english:"precious",phonetic:"/ˈpreʃəs/",chinese:"宝贵的"},{english:"realize",phonetic:"/ˈriːəlaɪz/",chinese:"意识到"},{english:"wisely",phonetic:"/ˈwaɪzli/",chinese:"明智地"},{english:"skill",phonetic:"/skɪl/",chinese:"技能"},{english:"exercise",phonetic:"/ˈeksərsaɪz/",chinese:"锻炼"},{english:"gift",phonetic:"/ɡɪft/",chinese:"礼物"}]}],Cf=[{id:"81",title:"I Love Sports",titleCn:"我爱运动",image:"/images/81我爱运动.jpg",englishText:`Sports are important for our health. I love playing all kinds of sports.

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

最后，我赢了比赛。我的队友为我欢呼。我太骄傲了！`,vocabularies:[{english:"table tennis",phonetic:"/ˈteɪbl ˈtenɪs/",chinese:"乒乓球"},{english:"match",phonetic:"/mætʃ/",chinese:"比赛"},{english:"nervous",phonetic:"/ˈnɜːrvəs/",chinese:"紧张的"},{english:"serve",phonetic:"/sɜːrv/",chinese:"发球"},{english:"opponent",phonetic:"/əˈpoʊnənt/",chinese:"对手"},{english:"team",phonetic:"/tiːm/",chinese:"队"},{english:"cheer",phonetic:"/tʃɪr/",chinese:"欢呼"},{english:"proud",phonetic:"/praʊd/",chinese:"骄傲的"}]}],bf=[{id:"91",title:"Olympic Spirit",titleCn:"奥运精神",image:"/images/91奥运精神.jpg",englishText:`The Olympic spirit teaches us important values. It is about more than just winning.

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

金牌不只是关于荣耀。它是关于奉献、自律和永不放弃。这就是真正的精神！`,vocabularies:[{english:"gold medal",phonetic:"/ɡoʊld ˈmedl/",chinese:"金牌"},{english:"honor",phonetic:"/ˈɑːnər/",chinese:"荣誉"},{english:"train",phonetic:"/treɪn/",chinese:"训练"},{english:"injury",phonetic:"/ˈɪndʒəri/",chinese:"伤病"},{english:"national anthem",phonetic:"/ˈnæʃnəl ˈænθəm/",chinese:"国歌"},{english:"glory",phonetic:"/ˈɡlɔːri/",chinese:"荣耀"},{english:"dedication",phonetic:"/ˌdedɪˈkeɪʃn/",chinese:"奉献"},{english:"discipline",phonetic:"/ˈdɪsəplɪn/",chinese:"自律"}]}],Ie=[...yf,...vf,...wf,...kf,...xf,...Sf,...Tf,...If,...Cf,...bf];function Ef(){const e=Nr(),[n,t]=C.useState(""),i=Ie.filter(r=>r.titleCn.toLowerCase().includes(n.toLowerCase())||r.title.toLowerCase().includes(n.toLowerCase()));return f.jsxs("div",{className:"home-page",children:[f.jsxs("div",{className:"header",children:[f.jsx("h1",{className:"app-title",children:"📚 英语点读宝"}),f.jsx("p",{className:"app-desc",children:"英语初学者绘本阅读"})]}),f.jsxs("div",{className:"page-content",children:[f.jsxs("div",{className:"search-box",children:[f.jsx("span",{className:"search-icon",children:"🔍"}),f.jsx("input",{type:"text",placeholder:"搜索绘本...",value:n,onChange:r=>t(r.target.value)}),n&&f.jsx("button",{className:"clear-btn",onClick:()=>t(""),children:"✕"})]}),f.jsx("div",{className:"result-count",children:n?`找到 ${i.length} 个绘本`:`${Ie.length} 个绘本`}),f.jsx("div",{className:"story-list",children:i.map((r,s)=>f.jsxs("div",{className:"story-card",onClick:()=>e(`/reading/${r.id}`),children:[f.jsx("div",{className:"story-number",children:String(s+1).padStart(2,"0")}),f.jsxs("div",{className:"story-info",children:[f.jsx("h3",{className:"story-title",children:r.title}),f.jsx("p",{className:"story-desc",children:r.titleCn})]})]},r.id))}),i.length===0&&f.jsx("div",{className:"no-result",children:"没有找到相关绘本"})]}),f.jsx("style",{children:`
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
      `})]})}function jf({onClick:e,size:n="medium"}){const t={small:32,medium:48,large:64},i={small:16,medium:24,large:32};return f.jsxs("button",{className:"speaker-icon",onClick:e,style:{width:t[n],height:t[n],fontSize:i[n]},children:["🔊",f.jsx("style",{children:`
        .speaker-icon {
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-light) 100%);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: var(--shadow-md);
          transition: all 0.2s ease;
        }

        .speaker-icon:active {
          transform: scale(0.9);
          box-shadow: var(--shadow-sm);
        }
      `})]})}function Nf(){const{id:e}=Yp(),n=Nr(),[t,i]=C.useState(null),[r,s]=C.useState(!1),l=Ie.find(h=>h.id===e)||Ie[0],o=Ie.findIndex(h=>h.id===e),a=o>0?Ie[o-1]:null,u=o<Ie.length-1?Ie[o+1]:null,g=.6,p=()=>{const h=speechSynthesis.getVoices(),c=h.find(y=>y.lang.includes("en")&&(y.name.toLowerCase().includes("female")||y.name.toLowerCase().includes("girl")||y.name.toLowerCase().includes("woman")||y.name.toLowerCase().includes("samantha")||y.name.toLowerCase().includes("victoria")||y.name.toLowerCase().includes("karen")||y.name.toLowerCase().includes("moira")||y.name.toLowerCase().includes("tessa")||y.name.toLowerCase().includes("fiona")||y.name.toLowerCase().includes("veena")));return c||h.find(y=>y.lang.includes("en"))},m=()=>{if(r)speechSynthesis.cancel(),s(!1);else{s(!0);const h=new SpeechSynthesisUtterance(l.englishText);h.lang="en-US",h.rate=g;const c=p();c&&(h.voice=c),h.onend=()=>{s(!1)},speechSynthesis.speak(h)}},v=(h,c)=>{speechSynthesis.cancel(),i(c);const d=new SpeechSynthesisUtterance(h);d.lang="en-US",d.rate=g;const y=p();y&&(d.voice=y),d.onend=()=>{setTimeout(()=>i(null),1e3)},speechSynthesis.speak(d)},k=h=>{const c=new SpeechSynthesisUtterance(h);c.lang="en-US",c.rate=g;const d=p();d&&(c.voice=d),speechSynthesis.speak(c)},x=l.englishText.split(new RegExp("(?<=[.!?])\\s+")).filter(h=>h.trim()),T=l.chineseText.replace(/\n\n/g,`
`).replace(/([。！？])/g,`$1
`).split(`
`).filter(h=>h.trim());return f.jsxs("div",{className:"reading-page",children:[f.jsxs("div",{className:"header",children:[f.jsx("div",{className:"back-btn-wrapper",children:f.jsx("button",{className:"back-btn",onClick:()=>n(-1),children:"← 返回"})}),f.jsx("h1",{className:"header-title",children:l.titleCn}),f.jsx("div",{className:"header-placeholder"})]}),f.jsxs("div",{className:"title-section",children:[f.jsx("h2",{className:"story-title",children:l.title}),f.jsx("p",{className:"story-title-cn",children:l.titleCn})]}),f.jsxs("div",{className:"english-section",children:[f.jsx("div",{className:"section-label",children:"📖 英文短文"}),f.jsx("div",{className:"english-content",children:x.map((h,c)=>f.jsxs("span",{className:`sentence-item ${t===c?"active":""}`,onClick:()=>v(h,c),children:[h.trim(),f.jsx("span",{className:"speak-icon",children:"🔊"})]},c))}),f.jsxs("div",{className:"speak-section",children:[f.jsx(jf,{onClick:m,size:"medium"}),f.jsx("span",{className:"speak-hint",onClick:m,children:r?"⏸ 暂停":"▶ 点击听全文朗读"})]})]}),f.jsxs("div",{className:"chinese-section",children:[f.jsx("div",{className:"section-label",children:"📝 中文翻译"}),f.jsx("div",{className:"chinese-content",children:T.map((h,c)=>f.jsx("span",{className:`chinese-sentence ${t===c?"highlight":""}`,children:h.trim()},c))})]}),f.jsxs("div",{className:"vocab-section",children:[f.jsx("div",{className:"section-label",children:"⭐ 重点词汇"}),f.jsx("div",{className:"vocab-grid",children:(l.vocabularies||[]).map((h,c)=>f.jsxs("div",{className:"vocab-card",children:[f.jsxs("div",{className:"vocab-row",children:[f.jsx("span",{className:"vocab-english",children:h.english}),f.jsx("button",{className:"vocab-speak",onClick:()=>k(h.english),children:"🔊"})]}),f.jsx("div",{className:"vocab-phonetic",children:h.phonetic}),f.jsx("div",{className:"vocab-chinese",children:h.chinese})]},c))})]}),f.jsxs("div",{className:"nav-section",children:[a&&f.jsxs("button",{className:"nav-btn prev-btn",onClick:()=>n(`/reading/${a.id}`),children:["← 上一篇：",a.titleCn]}),u&&f.jsxs("button",{className:"nav-btn next-btn",onClick:()=>n(`/reading/${u.id}`),children:["下一篇：",u.titleCn," →"]})]}),f.jsx("style",{children:`
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

        .header-title {
          font-size: 18px;
          font-weight: 600;
          color: #333;
        }

        .header-placeholder {
          width: 60px;
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
          padding-left: 4px;
        }

        .english-section {
          background: #fff;
          border-radius: 16px;
          padding: 20px;
          margin: 0 20px 16px;
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
          margin-top: 4px;
        }

        .sentence-item.active .speak-icon {
          opacity: 0;
        }

        .speak-section {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 12px;
          border-top: 1px dashed #eee;
        }

        .speak-hint {
          font-size: 14px;
          color: #999;
        }

        .chinese-section {
          background: #FFF9E6;
          border-radius: 16px;
          padding: 20px;
          margin: 0 20px 16px;
        }

        .chinese-sentence {
          font-size: 14px;
          line-height: 1.6;
          color: #666;
          display: inline;
          padding: 2px 4px;
          border-radius: 4px;
          transition: background 0.2s, color 0.2s;
        }

        .chinese-sentence.highlight {
          background: rgba(255, 193, 7, 0.3);
          color: #333;
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
      `})]})}const zf=Ie.flatMap(e=>(e.vocabularies||[]).map(n=>({english:n.english,phonetic:n.phonetic,chinese:n.chinese,source:e.titleCn})));function Pf(){const[e,n]=C.useState(""),t=zf.filter(r=>r.english.toLowerCase().includes(e.toLowerCase())||r.chinese.includes(e)),i=r=>{const s=new SpeechSynthesisUtterance(r);s.lang="en-US",s.rate=.85,speechSynthesis.speak(s)};return f.jsxs("div",{className:"words-page",children:[f.jsxs("div",{className:"header",children:[f.jsx("h1",{className:"page-title",children:"📖 单词列表"}),f.jsxs("div",{className:"search-box",children:[f.jsx("span",{className:"search-icon",children:"🔍"}),f.jsx("input",{type:"text",placeholder:"搜索单词...",value:e,onChange:r=>n(r.target.value)})]})]}),f.jsxs("div",{className:"word-count",children:["共 ",t.length," 个词汇"]}),f.jsx("div",{className:"word-list",children:t.map((r,s)=>f.jsxs("div",{className:"word-card",children:[f.jsxs("div",{className:"word-main",children:[f.jsxs("div",{className:"word-row",children:[f.jsx("span",{className:"word-english",children:r.english}),f.jsx("button",{className:"speak-btn",onClick:()=>i(r.english),children:"🔊"})]}),f.jsx("div",{className:"word-phonetic",children:r.phonetic}),f.jsx("div",{className:"word-chinese",children:r.chinese})]}),f.jsxs("div",{className:"word-source",children:["📚 ",r.source]})]},s))}),f.jsx("style",{children:`
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
      `})]})}function _f(){const[e,n]=C.useState(.85),[t,i]=C.useState("medium"),r=Ie.reduce((o,a)=>{var u;return o+(((u=a.vocabularies)==null?void 0:u.length)||0)},0),s=7,l=Ie.length;return f.jsxs("div",{className:"profile-page",children:[f.jsxs("div",{className:"profile-header",children:[f.jsx("div",{className:"avatar",children:f.jsx("span",{children:"👧"})}),f.jsxs("div",{className:"user-info",children:[f.jsx("div",{className:"user-name",children:"小学霸"}),f.jsxs("div",{className:"user-stats",children:[f.jsxs("span",{children:["📚 已读 ",l," 篇"]}),f.jsxs("span",{children:["⭐ 已学 ",r," 词"]})]})]})]}),f.jsxs("div",{className:"stats-section",children:[f.jsx("div",{className:"stats-title",children:"学习统计"}),f.jsxs("div",{className:"stats-grid",children:[f.jsxs("div",{className:"stat-card",children:[f.jsx("div",{className:"stat-icon",children:"📖"}),f.jsx("div",{className:"stat-value",children:l}),f.jsx("div",{className:"stat-label",children:"阅读绘本"})]}),f.jsxs("div",{className:"stat-card",children:[f.jsx("div",{className:"stat-icon",children:"📝"}),f.jsx("div",{className:"stat-value",children:r}),f.jsx("div",{className:"stat-label",children:"学习词汇"})]}),f.jsxs("div",{className:"stat-card",children:[f.jsx("div",{className:"stat-icon",children:"🔥"}),f.jsx("div",{className:"stat-value",children:s}),f.jsx("div",{className:"stat-label",children:"连续打卡"})]}),f.jsxs("div",{className:"stat-card",children:[f.jsx("div",{className:"stat-icon",children:"⏱️"}),f.jsx("div",{className:"stat-value",children:s*10}),f.jsx("div",{className:"stat-label",children:"学习时长(分钟)"})]})]})]}),f.jsxs("div",{className:"stories-section",children:[f.jsx("div",{className:"section-title",children:"我的绘本"}),f.jsx("div",{className:"story-list",children:Ie.map(o=>{var a;return f.jsxs("div",{className:"story-item",children:[f.jsx("img",{src:o.image,alt:o.title,className:"story-thumb"}),f.jsxs("div",{className:"story-info",children:[f.jsx("div",{className:"story-title",children:o.titleCn}),f.jsxs("div",{className:"story-vocab",children:["已学 ",((a=o.vocabularies)==null?void 0:a.length)||0," 个词汇"]})]}),f.jsx("div",{className:"story-status",children:"✓"})]},o.id)})})]}),f.jsxs("div",{className:"settings-section",children:[f.jsx("div",{className:"section-title",children:"设置"}),f.jsxs("div",{className:"setting-item",children:[f.jsxs("div",{className:"setting-label",children:[f.jsx("span",{className:"setting-icon",children:"🔊"}),f.jsx("span",{children:"朗读语速"})]}),f.jsxs("div",{className:"speed-control",children:[f.jsx("button",{className:e===.7?"active":"",onClick:()=>n(.7),children:"慢"}),f.jsx("button",{className:e===.85?"active":"",onClick:()=>n(.85),children:"中"}),f.jsx("button",{className:e===1?"active":"",onClick:()=>n(1),children:"快"})]})]}),f.jsxs("div",{className:"setting-item",children:[f.jsxs("div",{className:"setting-label",children:[f.jsx("span",{className:"setting-icon",children:"🔤"}),f.jsx("span",{children:"字体大小"})]}),f.jsxs("div",{className:"size-control",children:[f.jsx("button",{className:t==="small"?"active":"",onClick:()=>i("small"),children:"小"}),f.jsx("button",{className:t==="medium"?"active":"",onClick:()=>i("medium"),children:"中"}),f.jsx("button",{className:t==="large"?"active":"",onClick:()=>i("large"),children:"大"})]})]})]}),f.jsxs("div",{className:"about-section",children:[f.jsx("div",{className:"about-item",children:f.jsx("span",{children:"📖 英语点读宝 v1.0"})}),f.jsx("div",{className:"about-item",children:f.jsx("span",{children:"💡 帮助与反馈"})})]}),f.jsx("style",{children:`
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
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .stat-card {
          text-align: center;
          padding: 12px 4px;
          background: #F8F9FA;
          border-radius: 12px;
        }

        .stat-icon {
          font-size: 20px;
          margin-bottom: 4px;
        }

        .stat-value {
          font-size: 20px;
          font-weight: 700;
          color: #4A90D9;
        }

        .stat-label {
          font-size: 11px;
          color: #666;
          margin-top: 2px;
        }

        .stories-section {
          background: #fff;
          border-radius: 16px;
          padding: 20px;
          margin-bottom: 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }

        .section-title {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          margin-bottom: 16px;
        }

        .story-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .story-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px;
          background: #F8F9FA;
          border-radius: 12px;
        }

        .story-thumb {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          object-fit: cover;
        }

        .story-info {
          flex: 1;
        }

        .story-title {
          font-size: 14px;
          font-weight: 600;
          color: #333;
          margin-bottom: 2px;
        }

        .story-vocab {
          font-size: 12px;
          color: #666;
        }

        .story-status {
          color: #4CAF50;
          font-size: 18px;
          font-weight: 600;
        }

        .settings-section {
          background: #fff;
          border-radius: 16px;
          padding: 20px;
          margin-bottom: 16px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }

        .setting-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 0;
          border-bottom: 1px solid #F0F0F0;
        }

        .setting-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .setting-item:first-of-type {
          padding-top: 0;
        }

        .setting-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #333;
        }

        .setting-icon {
          font-size: 18px;
        }

        .speed-control,
        .size-control {
          display: flex;
          gap: 4px;
        }

        .speed-control button,
        .size-control button {
          padding: 6px 12px;
          font-size: 12px;
          border-radius: 16px;
          background: #F0F0F0;
          color: #666;
          transition: all 0.2s;
        }

        .speed-control button.active,
        .size-control button.active {
          background: #4A90D9;
          color: #fff;
        }

        .about-section {
          background: #fff;
          border-radius: 16px;
          padding: 8px 20px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
        }

        .about-item {
          padding: 14px 0;
          font-size: 14px;
          color: #666;
          border-bottom: 1px solid #F0F0F0;
        }

        .about-item:last-child {
          border-bottom: none;
        }
      `})]})}function Mf(){return f.jsx(ff,{children:f.jsxs("div",{className:"app",children:[f.jsxs(hf,{children:[f.jsx(An,{path:"/",element:f.jsx(Ef,{})}),f.jsx(An,{path:"/reading/:id",element:f.jsx(Nf,{})}),f.jsx(An,{path:"/words",element:f.jsx(Pf,{})}),f.jsx(An,{path:"/profile",element:f.jsx(_f,{})}),f.jsx(An,{path:"*",element:f.jsx(cf,{to:"/",replace:!0})})]}),f.jsx(mf,{}),f.jsx("style",{children:`
          .app {
            width: 100%;
            min-height: 100vh;
            background: #F5F7FA;
            position: relative;
          }
        `})]})})}ls.createRoot(document.getElementById("root")).render(f.jsx(Ea.StrictMode,{children:f.jsx(Mf,{})}));
