(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function vg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var rf={exports:{}},ll={},sf={exports:{}},Vt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t0;function r_(){if(t0)return Vt;t0=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),S=Symbol.iterator;function _(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,R={};function x(U,de,be){this.props=U,this.context=de,this.refs=R,this.updater=be||M}x.prototype.isReactComponent={},x.prototype.setState=function(U,de){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,de,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=x.prototype;function T(U,de,be){this.props=U,this.context=de,this.refs=R,this.updater=be||M}var F=T.prototype=new v;F.constructor=T,E(F,x.prototype),F.isPureReactComponent=!0;var A=Array.isArray,D=Object.prototype.hasOwnProperty,L={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function b(U,de,be){var qe,je={},$e=null,ce=null;if(de!=null)for(qe in de.ref!==void 0&&(ce=de.ref),de.key!==void 0&&($e=""+de.key),de)D.call(de,qe)&&!k.hasOwnProperty(qe)&&(je[qe]=de[qe]);var he=arguments.length-2;if(he===1)je.children=be;else if(1<he){for(var Ne=Array(he),Qe=0;Qe<he;Qe++)Ne[Qe]=arguments[Qe+2];je.children=Ne}if(U&&U.defaultProps)for(qe in he=U.defaultProps,he)je[qe]===void 0&&(je[qe]=he[qe]);return{$$typeof:s,type:U,key:$e,ref:ce,props:je,_owner:L.current}}function I(U,de){return{$$typeof:s,type:U.type,key:de,ref:U.ref,props:U.props,_owner:U._owner}}function z(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function G(U){var de={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(be){return de[be]})}var W=/\/+/g;function ne(U,de){return typeof U=="object"&&U!==null&&U.key!=null?G(""+U.key):de.toString(36)}function H(U,de,be,qe,je){var $e=typeof U;($e==="undefined"||$e==="boolean")&&(U=null);var ce=!1;if(U===null)ce=!0;else switch($e){case"string":case"number":ce=!0;break;case"object":switch(U.$$typeof){case s:case e:ce=!0}}if(ce)return ce=U,je=je(ce),U=qe===""?"."+ne(ce,0):qe,A(je)?(be="",U!=null&&(be=U.replace(W,"$&/")+"/"),H(je,de,be,"",function(Qe){return Qe})):je!=null&&(z(je)&&(je=I(je,be+(!je.key||ce&&ce.key===je.key?"":(""+je.key).replace(W,"$&/")+"/")+U)),de.push(je)),1;if(ce=0,qe=qe===""?".":qe+":",A(U))for(var he=0;he<U.length;he++){$e=U[he];var Ne=qe+ne($e,he);ce+=H($e,de,be,Ne,je)}else if(Ne=_(U),typeof Ne=="function")for(U=Ne.call(U),he=0;!($e=U.next()).done;)$e=$e.value,Ne=qe+ne($e,he++),ce+=H($e,de,be,Ne,je);else if($e==="object")throw de=String(U),Error("Objects are not valid as a React child (found: "+(de==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":de)+"). If you meant to render a collection of children, use an array instead.");return ce}function re(U,de,be){if(U==null)return U;var qe=[],je=0;return H(U,qe,"","",function($e){return de.call(be,$e,je++)}),qe}function fe(U){if(U._status===-1){var de=U._result;de=de(),de.then(function(be){(U._status===0||U._status===-1)&&(U._status=1,U._result=be)},function(be){(U._status===0||U._status===-1)&&(U._status=2,U._result=be)}),U._status===-1&&(U._status=0,U._result=de)}if(U._status===1)return U._result.default;throw U._result}var ee={current:null},te={transition:null},K={ReactCurrentDispatcher:ee,ReactCurrentBatchConfig:te,ReactCurrentOwner:L};function Z(){throw Error("act(...) is not supported in production builds of React.")}return Vt.Children={map:re,forEach:function(U,de,be){re(U,function(){de.apply(this,arguments)},be)},count:function(U){var de=0;return re(U,function(){de++}),de},toArray:function(U){return re(U,function(de){return de})||[]},only:function(U){if(!z(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},Vt.Component=x,Vt.Fragment=t,Vt.Profiler=o,Vt.PureComponent=T,Vt.StrictMode=r,Vt.Suspense=m,Vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,Vt.act=Z,Vt.cloneElement=function(U,de,be){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var qe=E({},U.props),je=U.key,$e=U.ref,ce=U._owner;if(de!=null){if(de.ref!==void 0&&($e=de.ref,ce=L.current),de.key!==void 0&&(je=""+de.key),U.type&&U.type.defaultProps)var he=U.type.defaultProps;for(Ne in de)D.call(de,Ne)&&!k.hasOwnProperty(Ne)&&(qe[Ne]=de[Ne]===void 0&&he!==void 0?he[Ne]:de[Ne])}var Ne=arguments.length-2;if(Ne===1)qe.children=be;else if(1<Ne){he=Array(Ne);for(var Qe=0;Qe<Ne;Qe++)he[Qe]=arguments[Qe+2];qe.children=he}return{$$typeof:s,type:U.type,key:je,ref:$e,props:qe,_owner:ce}},Vt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},Vt.createElement=b,Vt.createFactory=function(U){var de=b.bind(null,U);return de.type=U,de},Vt.createRef=function(){return{current:null}},Vt.forwardRef=function(U){return{$$typeof:f,render:U}},Vt.isValidElement=z,Vt.lazy=function(U){return{$$typeof:y,_payload:{_status:-1,_result:U},_init:fe}},Vt.memo=function(U,de){return{$$typeof:p,type:U,compare:de===void 0?null:de}},Vt.startTransition=function(U){var de=te.transition;te.transition={};try{U()}finally{te.transition=de}},Vt.unstable_act=Z,Vt.useCallback=function(U,de){return ee.current.useCallback(U,de)},Vt.useContext=function(U){return ee.current.useContext(U)},Vt.useDebugValue=function(){},Vt.useDeferredValue=function(U){return ee.current.useDeferredValue(U)},Vt.useEffect=function(U,de){return ee.current.useEffect(U,de)},Vt.useId=function(){return ee.current.useId()},Vt.useImperativeHandle=function(U,de,be){return ee.current.useImperativeHandle(U,de,be)},Vt.useInsertionEffect=function(U,de){return ee.current.useInsertionEffect(U,de)},Vt.useLayoutEffect=function(U,de){return ee.current.useLayoutEffect(U,de)},Vt.useMemo=function(U,de){return ee.current.useMemo(U,de)},Vt.useReducer=function(U,de,be){return ee.current.useReducer(U,de,be)},Vt.useRef=function(U){return ee.current.useRef(U)},Vt.useState=function(U){return ee.current.useState(U)},Vt.useSyncExternalStore=function(U,de,be){return ee.current.useSyncExternalStore(U,de,be)},Vt.useTransition=function(){return ee.current.useTransition()},Vt.version="18.3.1",Vt}var n0;function Dh(){return n0||(n0=1,sf.exports=r_()),sf.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i0;function s_(){if(i0)return ll;i0=1;var s=Dh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,m,p){var y,S={},_=null,M=null;p!==void 0&&(_=""+p),m.key!==void 0&&(_=""+m.key),m.ref!==void 0&&(M=m.ref);for(y in m)r.call(m,y)&&!l.hasOwnProperty(y)&&(S[y]=m[y]);if(f&&f.defaultProps)for(y in m=f.defaultProps,m)S[y]===void 0&&(S[y]=m[y]);return{$$typeof:e,type:f,key:_,ref:M,props:S,_owner:o.current}}return ll.Fragment=t,ll.jsx=u,ll.jsxs=u,ll}var r0;function a_(){return r0||(r0=1,rf.exports=s_()),rf.exports}var N=a_(),nt=Dh();const o_=vg(nt);var Pc={},af={exports:{}},Fi={},of={exports:{}},lf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s0;function l_(){return s0||(s0=1,(function(s){function e(te,K){var Z=te.length;te.push(K);e:for(;0<Z;){var U=Z-1>>>1,de=te[U];if(0<o(de,K))te[U]=K,te[Z]=de,Z=U;else break e}}function t(te){return te.length===0?null:te[0]}function r(te){if(te.length===0)return null;var K=te[0],Z=te.pop();if(Z!==K){te[0]=Z;e:for(var U=0,de=te.length,be=de>>>1;U<be;){var qe=2*(U+1)-1,je=te[qe],$e=qe+1,ce=te[$e];if(0>o(je,Z))$e<de&&0>o(ce,je)?(te[U]=ce,te[$e]=Z,U=$e):(te[U]=je,te[qe]=Z,U=qe);else if($e<de&&0>o(ce,Z))te[U]=ce,te[$e]=Z,U=$e;else break e}}return K}function o(te,K){var Z=te.sortIndex-K.sortIndex;return Z!==0?Z:te.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var m=[],p=[],y=1,S=null,_=3,M=!1,E=!1,R=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(te){for(var K=t(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=te)r(p),K.sortIndex=K.expirationTime,e(m,K);else break;K=t(p)}}function A(te){if(R=!1,F(te),!E)if(t(m)!==null)E=!0,fe(D);else{var K=t(p);K!==null&&ee(A,K.startTime-te)}}function D(te,K){E=!1,R&&(R=!1,v(b),b=-1),M=!0;var Z=_;try{for(F(K),S=t(m);S!==null&&(!(S.expirationTime>K)||te&&!G());){var U=S.callback;if(typeof U=="function"){S.callback=null,_=S.priorityLevel;var de=U(S.expirationTime<=K);K=s.unstable_now(),typeof de=="function"?S.callback=de:S===t(m)&&r(m),F(K)}else r(m);S=t(m)}if(S!==null)var be=!0;else{var qe=t(p);qe!==null&&ee(A,qe.startTime-K),be=!1}return be}finally{S=null,_=Z,M=!1}}var L=!1,k=null,b=-1,I=5,z=-1;function G(){return!(s.unstable_now()-z<I)}function W(){if(k!==null){var te=s.unstable_now();z=te;var K=!0;try{K=k(!0,te)}finally{K?ne():(L=!1,k=null)}}else L=!1}var ne;if(typeof T=="function")ne=function(){T(W)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,re=H.port2;H.port1.onmessage=W,ne=function(){re.postMessage(null)}}else ne=function(){x(W,0)};function fe(te){k=te,L||(L=!0,ne())}function ee(te,K){b=x(function(){te(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(te){te.callback=null},s.unstable_continueExecution=function(){E||M||(E=!0,fe(D))},s.unstable_forceFrameRate=function(te){0>te||125<te?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<te?Math.floor(1e3/te):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(m)},s.unstable_next=function(te){switch(_){case 1:case 2:case 3:var K=3;break;default:K=_}var Z=_;_=K;try{return te()}finally{_=Z}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(te,K){switch(te){case 1:case 2:case 3:case 4:case 5:break;default:te=3}var Z=_;_=te;try{return K()}finally{_=Z}},s.unstable_scheduleCallback=function(te,K,Z){var U=s.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?U+Z:U):Z=U,te){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=Z+de,te={id:y++,callback:K,priorityLevel:te,startTime:Z,expirationTime:de,sortIndex:-1},Z>U?(te.sortIndex=Z,e(p,te),t(m)===null&&te===t(p)&&(R?(v(b),b=-1):R=!0,ee(A,Z-U))):(te.sortIndex=de,e(m,te),E||M||(E=!0,fe(D))),te},s.unstable_shouldYield=G,s.unstable_wrapCallback=function(te){var K=_;return function(){var Z=_;_=K;try{return te.apply(this,arguments)}finally{_=Z}}}})(lf)),lf}var a0;function c_(){return a0||(a0=1,of.exports=l_()),of.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var o0;function u_(){if(o0)return Fi;o0=1;var s=Dh(),e=c_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},S={};function _(n){return m.call(S,n)?!0:m.call(y,n)?!1:p.test(n)?S[n]=!0:(y[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,a,c,d,g,C){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=C}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function T(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,T);x[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,T);x[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,T);x[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function F(n,i,a,c){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,d,c)&&(a=null),c||d===null?_(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var A=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),L=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),G=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),te=Symbol.iterator;function K(n){return n===null||typeof n!="object"?null:(n=te&&n[te]||n["@@iterator"],typeof n=="function"?n:null)}var Z=Object.assign,U;function de(n){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var be=!1;function qe(n,i){if(!n||be)return"";be=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(_e){var c=_e}Reflect.construct(n,[],i)}else{try{i.call()}catch(_e){c=_e}n.call(i.prototype)}else{try{throw Error()}catch(_e){c=_e}n()}}catch(_e){if(_e&&c&&typeof _e.stack=="string"){for(var d=_e.stack.split(`
`),g=c.stack.split(`
`),C=d.length-1,V=g.length-1;1<=C&&0<=V&&d[C]!==g[V];)V--;for(;1<=C&&0<=V;C--,V--)if(d[C]!==g[V]){if(C!==1||V!==1)do if(C--,V--,0>V||d[C]!==g[V]){var j=`
`+d[C].replace(" at new "," at ");return n.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",n.displayName)),j}while(1<=C&&0<=V);break}}}finally{be=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?de(n):""}function je(n){switch(n.tag){case 5:return de(n.type);case 16:return de("Lazy");case 13:return de("Suspense");case 19:return de("SuspenseList");case 0:case 2:case 15:return n=qe(n.type,!1),n;case 11:return n=qe(n.type.render,!1),n;case 1:return n=qe(n.type,!0),n;default:return""}}function $e(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case L:return"Portal";case I:return"Profiler";case b:return"StrictMode";case ne:return"Suspense";case H:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case G:return(n.displayName||"Context")+".Consumer";case z:return(n._context.displayName||"Context")+".Provider";case W:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case re:return i=n.displayName||null,i!==null?i:$e(n.type)||"Memo";case fe:i=n._payload,n=n._init;try{return $e(n(i))}catch{}}return null}function ce(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $e(i);case 8:return i===b?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function he(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ne(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(n){var i=Ne(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(C){c=""+C,g.call(this,C)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(C){c=""+C},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ze(n){n._valueTracker||(n._valueTracker=Qe(n))}function dt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ne(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function en(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ht(n,i){var a=i.checked;return Z({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function bt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=he(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function It(n,i){i=i.checked,i!=null&&F(n,"checked",i,!1)}function vt(n,i){It(n,i);var a=he(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Ot(n,i.type,a):i.hasOwnProperty("defaultValue")&&Ot(n,i.type,he(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ct(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Ot(n,i,a){(i!=="number"||en(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Zt=Array.isArray;function Ft(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+he(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Bt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return Z({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function $(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Zt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:he(a)}}function tn(n,i){var a=he(i.value),c=he(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Pt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function B(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function w(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?B(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var J,se=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(J=J||document.createElement("div"),J.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=J.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ge(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ce={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ie=["Webkit","ms","Moz","O"];Object.keys(Ce).forEach(function(n){Ie.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ce[i]=Ce[n]})});function xe(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ce.hasOwnProperty(n)&&Ce[n]?(""+i).trim():i+"px"}function Ee(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=xe(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Be=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ze(n,i){if(i){if(Be[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ue(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pe=null;function et(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var rt=null,ut=null,q=null;function Te(n){if(n=jo(n)){if(typeof rt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Xl(i),rt(n.stateNode,n.type,i))}}function Se(n){ut?q?q.push(n):q=[n]:ut=n}function ye(){if(ut){var n=ut,i=q;if(q=ut=null,Te(n),i)for(n=0;n<i.length;n++)Te(i[n])}}function Me(n,i){return n(i)}function Y(){}var Oe=!1;function Fe(n,i,a){if(Oe)return n(i,a);Oe=!0;try{return Me(n,i,a)}finally{Oe=!1,(ut!==null||q!==null)&&(Y(),ye())}}function Et(n,i){var a=n.stateNode;if(a===null)return null;var c=Xl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ot=!1;if(f)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){ot=!0}}),window.addEventListener("test",xn,xn),window.removeEventListener("test",xn,xn)}catch{ot=!1}function fn(n,i,a,c,d,g,C,V,j){var _e=Array.prototype.slice.call(arguments,3);try{i.apply(a,_e)}catch(Le){this.onError(Le)}}var An=!1,yi=null,Ci=!1,Rn=null,ui={onError:function(n){An=!0,yi=n}};function mn(n,i,a,c,d,g,C,V,j){An=!1,yi=null,fn.apply(ui,arguments)}function Pi(n,i,a,c,d,g,C,V,j){if(mn.apply(this,arguments),An){if(An){var _e=yi;An=!1,yi=null}else throw Error(t(198));Ci||(Ci=!0,Rn=_e)}}function wn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function pt(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ri(n){if(wn(n)!==n)throw Error(t(188))}function $r(n){var i=n.alternate;if(!i){if(i=wn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return ri(d),n;if(g===c)return ri(d),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var C=!1,V=d.child;V;){if(V===a){C=!0,a=d,c=g;break}if(V===c){C=!0,c=d,a=g;break}V=V.sibling}if(!C){for(V=g.child;V;){if(V===a){C=!0,a=g,c=d;break}if(V===c){C=!0,c=g,a=d;break}V=V.sibling}if(!C)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Gi(n){return n=$r(n),n!==null?pr(n):null}function pr(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=pr(n);if(i!==null)return i;n=n.sibling}return null}var Yn=e.unstable_scheduleCallback,Hn=e.unstable_cancelCallback,Yr=e.unstable_shouldYield,Ht=e.unstable_requestPaint,kt=e.unstable_now,Hi=e.unstable_getCurrentPriorityLevel,mr=e.unstable_ImmediatePriority,Wi=e.unstable_UserBlockingPriority,P=e.unstable_NormalPriority,X=e.unstable_LowPriority,me=e.unstable_IdlePriority,ae=null,oe=null;function He(n){if(oe&&typeof oe.onCommitFiberRoot=="function")try{oe.onCommitFiberRoot(ae,n,void 0,(n.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:it,Ge=Math.log,Je=Math.LN2;function it(n){return n>>>=0,n===0?32:31-(Ge(n)/Je|0)|0}var ft=64,xt=4194304;function Xe(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Dt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,g=n.pingedLanes,C=a&268435455;if(C!==0){var V=C&~d;V!==0?c=Xe(V):(g&=C,g!==0&&(c=Xe(g)))}else C=a&~d,C!==0?c=Xe(C):g!==0&&(c=Xe(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,g=i&-i,d>=g||d===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Ve(i),d=1<<a,c|=n[a],i&=~d;return c}function hn(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sn(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,g=n.pendingLanes;0<g;){var C=31-Ve(g),V=1<<C,j=d[C];j===-1?((V&a)===0||(V&c)!==0)&&(d[C]=hn(V,i)):j<=i&&(n.expiredLanes|=V),g&=~V}}function qt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function yn(){var n=ft;return ft<<=1,(ft&4194240)===0&&(ft=64),n}function Ye(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function ln(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ve(i),n[i]=a}function Lt(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Ve(a),g=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~g}}function Dn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Ve(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var yt=0;function si(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var h,O,le,we,Ae,Tt=!1,zt=[],Jt=null,gn=null,Nn=null,ai=new Map,Si=new Map,Qt=[],Un="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Kn(n,i){switch(n){case"focusin":case"focusout":Jt=null;break;case"dragenter":case"dragleave":gn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":ai.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Si.delete(i.pointerId)}}function er(n,i,a,c,d,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},i!==null&&(i=jo(i),i!==null&&O(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Ss(n,i,a,c,d){switch(i){case"focusin":return Jt=er(Jt,n,i,a,c,d),!0;case"dragenter":return gn=er(gn,n,i,a,c,d),!0;case"mouseover":return Nn=er(Nn,n,i,a,c,d),!0;case"pointerover":var g=d.pointerId;return ai.set(g,er(ai.get(g)||null,n,i,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,Si.set(g,er(Si.get(g)||null,n,i,a,c,d)),!0}return!1}function gr(n){var i=oa(n.target);if(i!==null){var a=wn(i);if(a!==null){if(i=a.tag,i===13){if(i=pt(a),i!==null){n.blockedOn=i,Ae(n.priority,function(){le(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Kr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Es(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Pe=c,a.target.dispatchEvent(c),Pe=null}else return i=jo(a),i!==null&&O(i),n.blockedOn=a,!1;i.shift()}return!0}function Xi(n,i,a){Kr(n)&&a.delete(i)}function Qs(){Tt=!1,Jt!==null&&Kr(Jt)&&(Jt=null),gn!==null&&Kr(gn)&&(gn=null),Nn!==null&&Kr(Nn)&&(Nn=null),ai.forEach(Xi),Si.forEach(Xi)}function Zr(n,i){n.blockedOn===i&&(n.blockedOn=null,Tt||(Tt=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Qs)))}function Nr(n){function i(d){return Zr(d,n)}if(0<zt.length){Zr(zt[0],n);for(var a=1;a<zt.length;a++){var c=zt[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Jt!==null&&Zr(Jt,n),gn!==null&&Zr(gn,n),Nn!==null&&Zr(Nn,n),ai.forEach(i),Si.forEach(i),a=0;a<Qt.length;a++)c=Qt[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Qt.length&&(a=Qt[0],a.blockedOn===null);)gr(a),a.blockedOn===null&&Qt.shift()}var vr=A.ReactCurrentBatchConfig,Ms=!0;function Jr(n,i,a,c){var d=yt,g=vr.transition;vr.transition=null;try{yt=1,ea(n,i,a,c)}finally{yt=d,vr.transition=g}}function Ir(n,i,a,c){var d=yt,g=vr.transition;vr.transition=null;try{yt=4,ea(n,i,a,c)}finally{yt=d,vr.transition=g}}function ea(n,i,a,c){if(Ms){var d=Es(n,i,a,c);if(d===null)ju(n,i,c,_r,a),Kn(n,c);else if(Ss(d,n,i,a,c))c.stopPropagation();else if(Kn(n,c),i&4&&-1<Un.indexOf(n)){for(;d!==null;){var g=jo(d);if(g!==null&&h(g),g=Es(n,i,a,c),g===null&&ju(n,i,c,_r,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else ju(n,i,c,null,a)}}var _r=null;function Es(n,i,a,c){if(_r=null,n=et(c),n=oa(n),n!==null)if(i=wn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=pt(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return _r=n,null}function ws(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Hi()){case mr:return 1;case Wi:return 4;case P:case X:return 16;case me:return 536870912;default:return 16}default:return 16}}var Mi=null,Qr=null,Dr=null;function es(){if(Dr)return Dr;var n,i=Qr,a=i.length,c,d="value"in Mi?Mi.value:Mi.textContent,g=d.length;for(n=0;n<a&&i[n]===d[n];n++);var C=a-n;for(c=1;c<=C&&i[a-c]===d[g-c];c++);return Dr=d.slice(n,1<c?1-c:void 0)}function ts(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function bs(){return!0}function ta(){return!1}function _t(n){function i(a,c,d,g,C){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=C,this.currentTarget=null;for(var V in n)n.hasOwnProperty(V)&&(a=n[V],this[V]=a?a(g):g[V]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?bs:ta,this.isPropagationStopped=ta,this}return Z(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=bs)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=bs)},persist:function(){},isPersistent:bs}),i}var cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},On=_t(cn),Ei=Z({},cn,{view:0,detail:0}),Li=_t(Ei),ns,Lo,Ts,na=Z({},Ei,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ka,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ts&&(Ts&&n.type==="mousemove"?(ns=n.screenX-Ts.screenX,Lo=n.screenY-Ts.screenY):Lo=ns=0,Ts=n),ns)},movementY:function(n){return"movementY"in n?n.movementY:Lo}}),No=_t(na),Pl=Z({},na,{dataTransfer:0}),ia=_t(Pl),Ll=Z({},Ei,{relatedTarget:0}),Ua=_t(Ll),Nl=Z({},cn,{animationName:0,elapsedTime:0,pseudoElement:0}),Oa=_t(Nl),Fa=Z({},cn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Lu=_t(Fa),Io=Z({},cn,{data:0}),Il=_t(Io),Do={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uo(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Iu[n])?!!i[n]:!1}function ka(){return Uo}var Dl=Z({},Ei,{key:function(n){if(n.key){var i=Do[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ts(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Nu[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ka,charCode:function(n){return n.type==="keypress"?ts(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ts(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ul=_t(Dl),Ol=Z({},na,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oo=_t(Ol),Du=Z({},Ei,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ka}),Uu=_t(Du),Ou=Z({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fu=_t(Ou),ku=Z({},na,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Fl=_t(ku),Fo=[9,13,27,32],We=f&&"CompositionEvent"in window,At=null;f&&"documentMode"in document&&(At=document.documentMode);var jt=f&&"TextEvent"in window&&!At,un=f&&(!We||At&&8<At&&11>=At),Zn=" ",vn=!1;function kn(n,i){switch(n){case"keyup":return Fo.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wi(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Sn=!1;function xr(n,i){switch(n){case"compositionend":return wi(i);case"keypress":return i.which!==32?null:(vn=!0,Zn);case"textInput":return n=i.data,n===Zn&&vn?null:n;default:return null}}function tr(n,i){if(Sn)return n==="compositionend"||!We&&kn(n,i)?(n=es(),Dr=Qr=Mi=null,Sn=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return un&&i.locale!=="ko"?null:i.data;default:return null}}var ra={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nr(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!ra[n.type]:i==="textarea"}function Ba(n,i,a,c){Se(c),i=Gl(i,"onChange"),0<i.length&&(a=new On("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ir=null,di=null;function kl(n){vp(n,0)}function sa(n){var i=Wa(n);if(dt(i))return n}function Bu(n,i){if(n==="change")return i}var ko=!1;if(f){var Bo;if(f){var As="oninput"in document;if(!As){var zo=document.createElement("div");zo.setAttribute("oninput","return;"),As=typeof zo.oninput=="function"}Bo=As}else Bo=!1;ko=Bo&&(!document.documentMode||9<document.documentMode)}function aa(){ir&&(ir.detachEvent("onpropertychange",ip),di=ir=null)}function ip(n){if(n.propertyName==="value"&&sa(di)){var i=[];Ba(i,di,n,et(n)),Fe(kl,i)}}function av(n,i,a){n==="focusin"?(aa(),ir=i,di=a,ir.attachEvent("onpropertychange",ip)):n==="focusout"&&aa()}function ov(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return sa(di)}function lv(n,i){if(n==="click")return sa(i)}function cv(n,i){if(n==="input"||n==="change")return sa(i)}function uv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var yr=typeof Object.is=="function"?Object.is:uv;function Vo(n,i){if(yr(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!m.call(i,d)||!yr(n[d],i[d]))return!1}return!0}function rp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function sp(n,i){var a=rp(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=rp(a)}}function ap(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ap(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function op(){for(var n=window,i=en();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=en(n.document)}return i}function zu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function dv(n){var i=op(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&ap(a.ownerDocument.documentElement,a)){if(c!==null&&zu(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!n.extend&&g>c&&(d=c,c=g,g=d),d=sp(a,g);var C=sp(a,c);d&&C&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==C.node||n.focusOffset!==C.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(C.node,C.offset)):(i.setEnd(C.node,C.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var fv=f&&"documentMode"in document&&11>=document.documentMode,za=null,Vu=null,Go=null,Gu=!1;function lp(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Gu||za==null||za!==en(c)||(c=za,"selectionStart"in c&&zu(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Go&&Vo(Go,c)||(Go=c,c=Gl(Vu,"onSelect"),0<c.length&&(i=new On("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=za)))}function Bl(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Va={animationend:Bl("Animation","AnimationEnd"),animationiteration:Bl("Animation","AnimationIteration"),animationstart:Bl("Animation","AnimationStart"),transitionend:Bl("Transition","TransitionEnd")},Hu={},cp={};f&&(cp=document.createElement("div").style,"AnimationEvent"in window||(delete Va.animationend.animation,delete Va.animationiteration.animation,delete Va.animationstart.animation),"TransitionEvent"in window||delete Va.transitionend.transition);function zl(n){if(Hu[n])return Hu[n];if(!Va[n])return n;var i=Va[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in cp)return Hu[n]=i[a];return n}var up=zl("animationend"),dp=zl("animationiteration"),fp=zl("animationstart"),hp=zl("transitionend"),pp=new Map,mp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rs(n,i){pp.set(n,i),l(i,[n])}for(var Wu=0;Wu<mp.length;Wu++){var Xu=mp[Wu],hv=Xu.toLowerCase(),pv=Xu[0].toUpperCase()+Xu.slice(1);Rs(hv,"on"+pv)}Rs(up,"onAnimationEnd"),Rs(dp,"onAnimationIteration"),Rs(fp,"onAnimationStart"),Rs("dblclick","onDoubleClick"),Rs("focusin","onFocus"),Rs("focusout","onBlur"),Rs(hp,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ho));function gp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Pi(c,i,void 0,n),n.currentTarget=null}function vp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var C=c.length-1;0<=C;C--){var V=c[C],j=V.instance,_e=V.currentTarget;if(V=V.listener,j!==g&&d.isPropagationStopped())break e;gp(d,V,_e),g=j}else for(C=0;C<c.length;C++){if(V=c[C],j=V.instance,_e=V.currentTarget,V=V.listener,j!==g&&d.isPropagationStopped())break e;gp(d,V,_e),g=j}}}if(Ci)throw n=Rn,Ci=!1,Rn=null,n}function Mn(n,i){var a=i[Qu];a===void 0&&(a=i[Qu]=new Set);var c=n+"__bubble";a.has(c)||(_p(i,n,2,!1),a.add(c))}function qu(n,i,a){var c=0;i&&(c|=4),_p(a,n,c,i)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function Wo(n){if(!n[Vl]){n[Vl]=!0,r.forEach(function(a){a!=="selectionchange"&&(mv.has(a)||qu(a,!1,n),qu(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Vl]||(i[Vl]=!0,qu("selectionchange",!1,i))}}function _p(n,i,a,c){switch(ws(i)){case 1:var d=Jr;break;case 4:d=Ir;break;default:d=ea}a=d.bind(null,i,a,n),d=void 0,!ot||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function ju(n,i,a,c,d){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var C=c.tag;if(C===3||C===4){var V=c.stateNode.containerInfo;if(V===d||V.nodeType===8&&V.parentNode===d)break;if(C===4)for(C=c.return;C!==null;){var j=C.tag;if((j===3||j===4)&&(j=C.stateNode.containerInfo,j===d||j.nodeType===8&&j.parentNode===d))return;C=C.return}for(;V!==null;){if(C=oa(V),C===null)return;if(j=C.tag,j===5||j===6){c=g=C;continue e}V=V.parentNode}}c=c.return}Fe(function(){var _e=g,Le=et(a),De=[];e:{var Re=pp.get(n);if(Re!==void 0){var tt=On,at=n;switch(n){case"keypress":if(ts(a)===0)break e;case"keydown":case"keyup":tt=Ul;break;case"focusin":at="focus",tt=Ua;break;case"focusout":at="blur",tt=Ua;break;case"beforeblur":case"afterblur":tt=Ua;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":tt=No;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":tt=ia;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":tt=Uu;break;case up:case dp:case fp:tt=Oa;break;case hp:tt=Fu;break;case"scroll":tt=Li;break;case"wheel":tt=Fl;break;case"copy":case"cut":case"paste":tt=Lu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":tt=Oo}var lt=(i&4)!==0,Fn=!lt&&n==="scroll",ue=lt?Re!==null?Re+"Capture":null:Re;lt=[];for(var Q=_e,pe;Q!==null;){pe=Q;var ke=pe.stateNode;if(pe.tag===5&&ke!==null&&(pe=ke,ue!==null&&(ke=Et(Q,ue),ke!=null&&lt.push(Xo(Q,ke,pe)))),Fn)break;Q=Q.return}0<lt.length&&(Re=new tt(Re,at,null,a,Le),De.push({event:Re,listeners:lt}))}}if((i&7)===0){e:{if(Re=n==="mouseover"||n==="pointerover",tt=n==="mouseout"||n==="pointerout",Re&&a!==Pe&&(at=a.relatedTarget||a.fromElement)&&(oa(at)||at[is]))break e;if((tt||Re)&&(Re=Le.window===Le?Le:(Re=Le.ownerDocument)?Re.defaultView||Re.parentWindow:window,tt?(at=a.relatedTarget||a.toElement,tt=_e,at=at?oa(at):null,at!==null&&(Fn=wn(at),at!==Fn||at.tag!==5&&at.tag!==6)&&(at=null)):(tt=null,at=_e),tt!==at)){if(lt=No,ke="onMouseLeave",ue="onMouseEnter",Q="mouse",(n==="pointerout"||n==="pointerover")&&(lt=Oo,ke="onPointerLeave",ue="onPointerEnter",Q="pointer"),Fn=tt==null?Re:Wa(tt),pe=at==null?Re:Wa(at),Re=new lt(ke,Q+"leave",tt,a,Le),Re.target=Fn,Re.relatedTarget=pe,ke=null,oa(Le)===_e&&(lt=new lt(ue,Q+"enter",at,a,Le),lt.target=pe,lt.relatedTarget=Fn,ke=lt),Fn=ke,tt&&at)t:{for(lt=tt,ue=at,Q=0,pe=lt;pe;pe=Ga(pe))Q++;for(pe=0,ke=ue;ke;ke=Ga(ke))pe++;for(;0<Q-pe;)lt=Ga(lt),Q--;for(;0<pe-Q;)ue=Ga(ue),pe--;for(;Q--;){if(lt===ue||ue!==null&&lt===ue.alternate)break t;lt=Ga(lt),ue=Ga(ue)}lt=null}else lt=null;tt!==null&&xp(De,Re,tt,lt,!1),at!==null&&Fn!==null&&xp(De,Fn,at,lt,!0)}}e:{if(Re=_e?Wa(_e):window,tt=Re.nodeName&&Re.nodeName.toLowerCase(),tt==="select"||tt==="input"&&Re.type==="file")var ct=Bu;else if(nr(Re))if(ko)ct=cv;else{ct=ov;var mt=av}else(tt=Re.nodeName)&&tt.toLowerCase()==="input"&&(Re.type==="checkbox"||Re.type==="radio")&&(ct=lv);if(ct&&(ct=ct(n,_e))){Ba(De,ct,a,Le);break e}mt&&mt(n,Re,_e),n==="focusout"&&(mt=Re._wrapperState)&&mt.controlled&&Re.type==="number"&&Ot(Re,"number",Re.value)}switch(mt=_e?Wa(_e):window,n){case"focusin":(nr(mt)||mt.contentEditable==="true")&&(za=mt,Vu=_e,Go=null);break;case"focusout":Go=Vu=za=null;break;case"mousedown":Gu=!0;break;case"contextmenu":case"mouseup":case"dragend":Gu=!1,lp(De,a,Le);break;case"selectionchange":if(fv)break;case"keydown":case"keyup":lp(De,a,Le)}var gt;if(We)e:{switch(n){case"compositionstart":var wt="onCompositionStart";break e;case"compositionend":wt="onCompositionEnd";break e;case"compositionupdate":wt="onCompositionUpdate";break e}wt=void 0}else Sn?kn(n,a)&&(wt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(wt="onCompositionStart");wt&&(un&&a.locale!=="ko"&&(Sn||wt!=="onCompositionStart"?wt==="onCompositionEnd"&&Sn&&(gt=es()):(Mi=Le,Qr="value"in Mi?Mi.value:Mi.textContent,Sn=!0)),mt=Gl(_e,wt),0<mt.length&&(wt=new Il(wt,n,null,a,Le),De.push({event:wt,listeners:mt}),gt?wt.data=gt:(gt=wi(a),gt!==null&&(wt.data=gt)))),(gt=jt?xr(n,a):tr(n,a))&&(_e=Gl(_e,"onBeforeInput"),0<_e.length&&(Le=new Il("onBeforeInput","beforeinput",null,a,Le),De.push({event:Le,listeners:_e}),Le.data=gt))}vp(De,i)})}function Xo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Gl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=Et(n,a),g!=null&&c.unshift(Xo(n,g,d)),g=Et(n,i),g!=null&&c.push(Xo(n,g,d))),n=n.return}return c}function Ga(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function xp(n,i,a,c,d){for(var g=i._reactName,C=[];a!==null&&a!==c;){var V=a,j=V.alternate,_e=V.stateNode;if(j!==null&&j===c)break;V.tag===5&&_e!==null&&(V=_e,d?(j=Et(a,g),j!=null&&C.unshift(Xo(a,j,V))):d||(j=Et(a,g),j!=null&&C.push(Xo(a,j,V)))),a=a.return}C.length!==0&&n.push({event:i,listeners:C})}var gv=/\r\n?/g,vv=/\u0000|\uFFFD/g;function yp(n){return(typeof n=="string"?n:""+n).replace(gv,`
`).replace(vv,"")}function Hl(n,i,a){if(i=yp(i),yp(n)!==i&&a)throw Error(t(425))}function Wl(){}var $u=null,Yu=null;function Ku(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Zu=typeof setTimeout=="function"?setTimeout:void 0,_v=typeof clearTimeout=="function"?clearTimeout:void 0,Sp=typeof Promise=="function"?Promise:void 0,xv=typeof queueMicrotask=="function"?queueMicrotask:typeof Sp<"u"?function(n){return Sp.resolve(null).then(n).catch(yv)}:Zu;function yv(n){setTimeout(function(){throw n})}function Ju(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Nr(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Nr(i)}function Cs(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Mp(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ha=Math.random().toString(36).slice(2),Ur="__reactFiber$"+Ha,qo="__reactProps$"+Ha,is="__reactContainer$"+Ha,Qu="__reactEvents$"+Ha,Sv="__reactListeners$"+Ha,Mv="__reactHandles$"+Ha;function oa(n){var i=n[Ur];if(i)return i;for(var a=n.parentNode;a;){if(i=a[is]||a[Ur]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Mp(n);n!==null;){if(a=n[Ur])return a;n=Mp(n)}return i}n=a,a=n.parentNode}return null}function jo(n){return n=n[Ur]||n[is],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Wa(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Xl(n){return n[qo]||null}var ed=[],Xa=-1;function Ps(n){return{current:n}}function En(n){0>Xa||(n.current=ed[Xa],ed[Xa]=null,Xa--)}function _n(n,i){Xa++,ed[Xa]=n.current,n.current=i}var Ls={},fi=Ps(Ls),Ni=Ps(!1),la=Ls;function qa(n,i){var a=n.type.contextTypes;if(!a)return Ls;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Ii(n){return n=n.childContextTypes,n!=null}function ql(){En(Ni),En(fi)}function Ep(n,i,a){if(fi.current!==Ls)throw Error(t(168));_n(fi,i),_n(Ni,a)}function wp(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,ce(n)||"Unknown",d));return Z({},a,c)}function jl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ls,la=fi.current,_n(fi,n),_n(Ni,Ni.current),!0}function bp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=wp(n,i,la),c.__reactInternalMemoizedMergedChildContext=n,En(Ni),En(fi),_n(fi,n)):En(Ni),_n(Ni,a)}var rs=null,$l=!1,td=!1;function Tp(n){rs===null?rs=[n]:rs.push(n)}function Ev(n){$l=!0,Tp(n)}function Ns(){if(!td&&rs!==null){td=!0;var n=0,i=yt;try{var a=rs;for(yt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}rs=null,$l=!1}catch(d){throw rs!==null&&(rs=rs.slice(n+1)),Yn(mr,Ns),d}finally{yt=i,td=!1}}return null}var ja=[],$a=0,Yl=null,Kl=0,rr=[],sr=0,ca=null,ss=1,as="";function ua(n,i){ja[$a++]=Kl,ja[$a++]=Yl,Yl=n,Kl=i}function Ap(n,i,a){rr[sr++]=ss,rr[sr++]=as,rr[sr++]=ca,ca=n;var c=ss;n=as;var d=32-Ve(c)-1;c&=~(1<<d),a+=1;var g=32-Ve(i)+d;if(30<g){var C=d-d%5;g=(c&(1<<C)-1).toString(32),c>>=C,d-=C,ss=1<<32-Ve(i)+d|a<<d|c,as=g+n}else ss=1<<g|a<<d|c,as=n}function nd(n){n.return!==null&&(ua(n,1),Ap(n,1,0))}function id(n){for(;n===Yl;)Yl=ja[--$a],ja[$a]=null,Kl=ja[--$a],ja[$a]=null;for(;n===ca;)ca=rr[--sr],rr[sr]=null,as=rr[--sr],rr[sr]=null,ss=rr[--sr],rr[sr]=null}var qi=null,ji=null,bn=!1,Sr=null;function Rp(n,i){var a=cr(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Cp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,qi=n,ji=Cs(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,qi=n,ji=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ca!==null?{id:ss,overflow:as}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=cr(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,qi=n,ji=null,!0):!1;default:return!1}}function rd(n){return(n.mode&1)!==0&&(n.flags&128)===0}function sd(n){if(bn){var i=ji;if(i){var a=i;if(!Cp(n,i)){if(rd(n))throw Error(t(418));i=Cs(a.nextSibling);var c=qi;i&&Cp(n,i)?Rp(c,a):(n.flags=n.flags&-4097|2,bn=!1,qi=n)}}else{if(rd(n))throw Error(t(418));n.flags=n.flags&-4097|2,bn=!1,qi=n}}}function Pp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;qi=n}function Zl(n){if(n!==qi)return!1;if(!bn)return Pp(n),bn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Ku(n.type,n.memoizedProps)),i&&(i=ji)){if(rd(n))throw Lp(),Error(t(418));for(;i;)Rp(n,i),i=Cs(i.nextSibling)}if(Pp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){ji=Cs(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}ji=null}}else ji=qi?Cs(n.stateNode.nextSibling):null;return!0}function Lp(){for(var n=ji;n;)n=Cs(n.nextSibling)}function Ya(){ji=qi=null,bn=!1}function ad(n){Sr===null?Sr=[n]:Sr.push(n)}var wv=A.ReactCurrentBatchConfig;function $o(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(C){var V=d.refs;C===null?delete V[g]:V[g]=C},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Jl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Np(n){var i=n._init;return i(n._payload)}function Ip(n){function i(ue,Q){if(n){var pe=ue.deletions;pe===null?(ue.deletions=[Q],ue.flags|=16):pe.push(Q)}}function a(ue,Q){if(!n)return null;for(;Q!==null;)i(ue,Q),Q=Q.sibling;return null}function c(ue,Q){for(ue=new Map;Q!==null;)Q.key!==null?ue.set(Q.key,Q):ue.set(Q.index,Q),Q=Q.sibling;return ue}function d(ue,Q){return ue=zs(ue,Q),ue.index=0,ue.sibling=null,ue}function g(ue,Q,pe){return ue.index=pe,n?(pe=ue.alternate,pe!==null?(pe=pe.index,pe<Q?(ue.flags|=2,Q):pe):(ue.flags|=2,Q)):(ue.flags|=1048576,Q)}function C(ue){return n&&ue.alternate===null&&(ue.flags|=2),ue}function V(ue,Q,pe,ke){return Q===null||Q.tag!==6?(Q=Zd(pe,ue.mode,ke),Q.return=ue,Q):(Q=d(Q,pe),Q.return=ue,Q)}function j(ue,Q,pe,ke){var ct=pe.type;return ct===k?Le(ue,Q,pe.props.children,ke,pe.key):Q!==null&&(Q.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===fe&&Np(ct)===Q.type)?(ke=d(Q,pe.props),ke.ref=$o(ue,Q,pe),ke.return=ue,ke):(ke=Mc(pe.type,pe.key,pe.props,null,ue.mode,ke),ke.ref=$o(ue,Q,pe),ke.return=ue,ke)}function _e(ue,Q,pe,ke){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==pe.containerInfo||Q.stateNode.implementation!==pe.implementation?(Q=Jd(pe,ue.mode,ke),Q.return=ue,Q):(Q=d(Q,pe.children||[]),Q.return=ue,Q)}function Le(ue,Q,pe,ke,ct){return Q===null||Q.tag!==7?(Q=_a(pe,ue.mode,ke,ct),Q.return=ue,Q):(Q=d(Q,pe),Q.return=ue,Q)}function De(ue,Q,pe){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Q=Zd(""+Q,ue.mode,pe),Q.return=ue,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case D:return pe=Mc(Q.type,Q.key,Q.props,null,ue.mode,pe),pe.ref=$o(ue,null,Q),pe.return=ue,pe;case L:return Q=Jd(Q,ue.mode,pe),Q.return=ue,Q;case fe:var ke=Q._init;return De(ue,ke(Q._payload),pe)}if(Zt(Q)||K(Q))return Q=_a(Q,ue.mode,pe,null),Q.return=ue,Q;Jl(ue,Q)}return null}function Re(ue,Q,pe,ke){var ct=Q!==null?Q.key:null;if(typeof pe=="string"&&pe!==""||typeof pe=="number")return ct!==null?null:V(ue,Q,""+pe,ke);if(typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case D:return pe.key===ct?j(ue,Q,pe,ke):null;case L:return pe.key===ct?_e(ue,Q,pe,ke):null;case fe:return ct=pe._init,Re(ue,Q,ct(pe._payload),ke)}if(Zt(pe)||K(pe))return ct!==null?null:Le(ue,Q,pe,ke,null);Jl(ue,pe)}return null}function tt(ue,Q,pe,ke,ct){if(typeof ke=="string"&&ke!==""||typeof ke=="number")return ue=ue.get(pe)||null,V(Q,ue,""+ke,ct);if(typeof ke=="object"&&ke!==null){switch(ke.$$typeof){case D:return ue=ue.get(ke.key===null?pe:ke.key)||null,j(Q,ue,ke,ct);case L:return ue=ue.get(ke.key===null?pe:ke.key)||null,_e(Q,ue,ke,ct);case fe:var mt=ke._init;return tt(ue,Q,pe,mt(ke._payload),ct)}if(Zt(ke)||K(ke))return ue=ue.get(pe)||null,Le(Q,ue,ke,ct,null);Jl(Q,ke)}return null}function at(ue,Q,pe,ke){for(var ct=null,mt=null,gt=Q,wt=Q=0,ei=null;gt!==null&&wt<pe.length;wt++){gt.index>wt?(ei=gt,gt=null):ei=gt.sibling;var an=Re(ue,gt,pe[wt],ke);if(an===null){gt===null&&(gt=ei);break}n&&gt&&an.alternate===null&&i(ue,gt),Q=g(an,Q,wt),mt===null?ct=an:mt.sibling=an,mt=an,gt=ei}if(wt===pe.length)return a(ue,gt),bn&&ua(ue,wt),ct;if(gt===null){for(;wt<pe.length;wt++)gt=De(ue,pe[wt],ke),gt!==null&&(Q=g(gt,Q,wt),mt===null?ct=gt:mt.sibling=gt,mt=gt);return bn&&ua(ue,wt),ct}for(gt=c(ue,gt);wt<pe.length;wt++)ei=tt(gt,ue,wt,pe[wt],ke),ei!==null&&(n&&ei.alternate!==null&&gt.delete(ei.key===null?wt:ei.key),Q=g(ei,Q,wt),mt===null?ct=ei:mt.sibling=ei,mt=ei);return n&&gt.forEach(function(Vs){return i(ue,Vs)}),bn&&ua(ue,wt),ct}function lt(ue,Q,pe,ke){var ct=K(pe);if(typeof ct!="function")throw Error(t(150));if(pe=ct.call(pe),pe==null)throw Error(t(151));for(var mt=ct=null,gt=Q,wt=Q=0,ei=null,an=pe.next();gt!==null&&!an.done;wt++,an=pe.next()){gt.index>wt?(ei=gt,gt=null):ei=gt.sibling;var Vs=Re(ue,gt,an.value,ke);if(Vs===null){gt===null&&(gt=ei);break}n&&gt&&Vs.alternate===null&&i(ue,gt),Q=g(Vs,Q,wt),mt===null?ct=Vs:mt.sibling=Vs,mt=Vs,gt=ei}if(an.done)return a(ue,gt),bn&&ua(ue,wt),ct;if(gt===null){for(;!an.done;wt++,an=pe.next())an=De(ue,an.value,ke),an!==null&&(Q=g(an,Q,wt),mt===null?ct=an:mt.sibling=an,mt=an);return bn&&ua(ue,wt),ct}for(gt=c(ue,gt);!an.done;wt++,an=pe.next())an=tt(gt,ue,wt,an.value,ke),an!==null&&(n&&an.alternate!==null&&gt.delete(an.key===null?wt:an.key),Q=g(an,Q,wt),mt===null?ct=an:mt.sibling=an,mt=an);return n&&gt.forEach(function(i_){return i(ue,i_)}),bn&&ua(ue,wt),ct}function Fn(ue,Q,pe,ke){if(typeof pe=="object"&&pe!==null&&pe.type===k&&pe.key===null&&(pe=pe.props.children),typeof pe=="object"&&pe!==null){switch(pe.$$typeof){case D:e:{for(var ct=pe.key,mt=Q;mt!==null;){if(mt.key===ct){if(ct=pe.type,ct===k){if(mt.tag===7){a(ue,mt.sibling),Q=d(mt,pe.props.children),Q.return=ue,ue=Q;break e}}else if(mt.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===fe&&Np(ct)===mt.type){a(ue,mt.sibling),Q=d(mt,pe.props),Q.ref=$o(ue,mt,pe),Q.return=ue,ue=Q;break e}a(ue,mt);break}else i(ue,mt);mt=mt.sibling}pe.type===k?(Q=_a(pe.props.children,ue.mode,ke,pe.key),Q.return=ue,ue=Q):(ke=Mc(pe.type,pe.key,pe.props,null,ue.mode,ke),ke.ref=$o(ue,Q,pe),ke.return=ue,ue=ke)}return C(ue);case L:e:{for(mt=pe.key;Q!==null;){if(Q.key===mt)if(Q.tag===4&&Q.stateNode.containerInfo===pe.containerInfo&&Q.stateNode.implementation===pe.implementation){a(ue,Q.sibling),Q=d(Q,pe.children||[]),Q.return=ue,ue=Q;break e}else{a(ue,Q);break}else i(ue,Q);Q=Q.sibling}Q=Jd(pe,ue.mode,ke),Q.return=ue,ue=Q}return C(ue);case fe:return mt=pe._init,Fn(ue,Q,mt(pe._payload),ke)}if(Zt(pe))return at(ue,Q,pe,ke);if(K(pe))return lt(ue,Q,pe,ke);Jl(ue,pe)}return typeof pe=="string"&&pe!==""||typeof pe=="number"?(pe=""+pe,Q!==null&&Q.tag===6?(a(ue,Q.sibling),Q=d(Q,pe),Q.return=ue,ue=Q):(a(ue,Q),Q=Zd(pe,ue.mode,ke),Q.return=ue,ue=Q),C(ue)):a(ue,Q)}return Fn}var Ka=Ip(!0),Dp=Ip(!1),Ql=Ps(null),ec=null,Za=null,od=null;function ld(){od=Za=ec=null}function cd(n){var i=Ql.current;En(Ql),n._currentValue=i}function ud(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ja(n,i){ec=n,od=Za=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Di=!0),n.firstContext=null)}function ar(n){var i=n._currentValue;if(od!==n)if(n={context:n,memoizedValue:i,next:null},Za===null){if(ec===null)throw Error(t(308));Za=n,ec.dependencies={lanes:0,firstContext:n}}else Za=Za.next=n;return i}var da=null;function dd(n){da===null?da=[n]:da.push(n)}function Up(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,dd(i)):(a.next=d.next,d.next=a),i.interleaved=a,os(n,c)}function os(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Is=!1;function fd(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Op(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ls(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Ds(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(nn&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,os(n,a)}return d=c.interleaved,d===null?(i.next=i,dd(c)):(i.next=d.next,d.next=i),c.interleaved=i,os(n,a)}function tc(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Dn(n,a)}}function Fp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var C={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=C:g=g.next=C,a=a.next}while(a!==null);g===null?d=g=i:g=g.next=i}else d=g=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function nc(n,i,a,c){var d=n.updateQueue;Is=!1;var g=d.firstBaseUpdate,C=d.lastBaseUpdate,V=d.shared.pending;if(V!==null){d.shared.pending=null;var j=V,_e=j.next;j.next=null,C===null?g=_e:C.next=_e,C=j;var Le=n.alternate;Le!==null&&(Le=Le.updateQueue,V=Le.lastBaseUpdate,V!==C&&(V===null?Le.firstBaseUpdate=_e:V.next=_e,Le.lastBaseUpdate=j))}if(g!==null){var De=d.baseState;C=0,Le=_e=j=null,V=g;do{var Re=V.lane,tt=V.eventTime;if((c&Re)===Re){Le!==null&&(Le=Le.next={eventTime:tt,lane:0,tag:V.tag,payload:V.payload,callback:V.callback,next:null});e:{var at=n,lt=V;switch(Re=i,tt=a,lt.tag){case 1:if(at=lt.payload,typeof at=="function"){De=at.call(tt,De,Re);break e}De=at;break e;case 3:at.flags=at.flags&-65537|128;case 0:if(at=lt.payload,Re=typeof at=="function"?at.call(tt,De,Re):at,Re==null)break e;De=Z({},De,Re);break e;case 2:Is=!0}}V.callback!==null&&V.lane!==0&&(n.flags|=64,Re=d.effects,Re===null?d.effects=[V]:Re.push(V))}else tt={eventTime:tt,lane:Re,tag:V.tag,payload:V.payload,callback:V.callback,next:null},Le===null?(_e=Le=tt,j=De):Le=Le.next=tt,C|=Re;if(V=V.next,V===null){if(V=d.shared.pending,V===null)break;Re=V,V=Re.next,Re.next=null,d.lastBaseUpdate=Re,d.shared.pending=null}}while(!0);if(Le===null&&(j=De),d.baseState=j,d.firstBaseUpdate=_e,d.lastBaseUpdate=Le,i=d.shared.interleaved,i!==null){d=i;do C|=d.lane,d=d.next;while(d!==i)}else g===null&&(d.shared.lanes=0);pa|=C,n.lanes=C,n.memoizedState=De}}function kp(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Yo={},Or=Ps(Yo),Ko=Ps(Yo),Zo=Ps(Yo);function fa(n){if(n===Yo)throw Error(t(174));return n}function hd(n,i){switch(_n(Zo,i),_n(Ko,n),_n(Or,Yo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:w(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=w(i,n)}En(Or),_n(Or,i)}function Qa(){En(Or),En(Ko),En(Zo)}function Bp(n){fa(Zo.current);var i=fa(Or.current),a=w(i,n.type);i!==a&&(_n(Ko,n),_n(Or,a))}function pd(n){Ko.current===n&&(En(Or),En(Ko))}var Cn=Ps(0);function ic(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var md=[];function gd(){for(var n=0;n<md.length;n++)md[n]._workInProgressVersionPrimary=null;md.length=0}var rc=A.ReactCurrentDispatcher,vd=A.ReactCurrentBatchConfig,ha=0,Pn=null,Wn=null,Jn=null,sc=!1,Jo=!1,Qo=0,bv=0;function hi(){throw Error(t(321))}function _d(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!yr(n[a],i[a]))return!1;return!0}function xd(n,i,a,c,d,g){if(ha=g,Pn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,rc.current=n===null||n.memoizedState===null?Cv:Pv,n=a(c,d),Jo){g=0;do{if(Jo=!1,Qo=0,25<=g)throw Error(t(301));g+=1,Jn=Wn=null,i.updateQueue=null,rc.current=Lv,n=a(c,d)}while(Jo)}if(rc.current=lc,i=Wn!==null&&Wn.next!==null,ha=0,Jn=Wn=Pn=null,sc=!1,i)throw Error(t(300));return n}function yd(){var n=Qo!==0;return Qo=0,n}function Fr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Jn===null?Pn.memoizedState=Jn=n:Jn=Jn.next=n,Jn}function or(){if(Wn===null){var n=Pn.alternate;n=n!==null?n.memoizedState:null}else n=Wn.next;var i=Jn===null?Pn.memoizedState:Jn.next;if(i!==null)Jn=i,Wn=n;else{if(n===null)throw Error(t(310));Wn=n,n={memoizedState:Wn.memoizedState,baseState:Wn.baseState,baseQueue:Wn.baseQueue,queue:Wn.queue,next:null},Jn===null?Pn.memoizedState=Jn=n:Jn=Jn.next=n}return Jn}function el(n,i){return typeof i=="function"?i(n):i}function Sd(n){var i=or(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Wn,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var C=d.next;d.next=g.next,g.next=C}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var V=C=null,j=null,_e=g;do{var Le=_e.lane;if((ha&Le)===Le)j!==null&&(j=j.next={lane:0,action:_e.action,hasEagerState:_e.hasEagerState,eagerState:_e.eagerState,next:null}),c=_e.hasEagerState?_e.eagerState:n(c,_e.action);else{var De={lane:Le,action:_e.action,hasEagerState:_e.hasEagerState,eagerState:_e.eagerState,next:null};j===null?(V=j=De,C=c):j=j.next=De,Pn.lanes|=Le,pa|=Le}_e=_e.next}while(_e!==null&&_e!==g);j===null?C=c:j.next=V,yr(c,i.memoizedState)||(Di=!0),i.memoizedState=c,i.baseState=C,i.baseQueue=j,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do g=d.lane,Pn.lanes|=g,pa|=g,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Md(n){var i=or(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,g=i.memoizedState;if(d!==null){a.pending=null;var C=d=d.next;do g=n(g,C.action),C=C.next;while(C!==d);yr(g,i.memoizedState)||(Di=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function zp(){}function Vp(n,i){var a=Pn,c=or(),d=i(),g=!yr(c.memoizedState,d);if(g&&(c.memoizedState=d,Di=!0),c=c.queue,Ed(Wp.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||Jn!==null&&Jn.memoizedState.tag&1){if(a.flags|=2048,tl(9,Hp.bind(null,a,c,d,i),void 0,null),Qn===null)throw Error(t(349));(ha&30)!==0||Gp(a,i,d)}return d}function Gp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Pn.updateQueue,i===null?(i={lastEffect:null,stores:null},Pn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Hp(n,i,a,c){i.value=a,i.getSnapshot=c,Xp(i)&&qp(n)}function Wp(n,i,a){return a(function(){Xp(i)&&qp(n)})}function Xp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!yr(n,a)}catch{return!0}}function qp(n){var i=os(n,1);i!==null&&br(i,n,1,-1)}function jp(n){var i=Fr();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:el,lastRenderedState:n},i.queue=n,n=n.dispatch=Rv.bind(null,Pn,n),[i.memoizedState,n]}function tl(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Pn.updateQueue,i===null?(i={lastEffect:null,stores:null},Pn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function $p(){return or().memoizedState}function ac(n,i,a,c){var d=Fr();Pn.flags|=n,d.memoizedState=tl(1|i,a,void 0,c===void 0?null:c)}function oc(n,i,a,c){var d=or();c=c===void 0?null:c;var g=void 0;if(Wn!==null){var C=Wn.memoizedState;if(g=C.destroy,c!==null&&_d(c,C.deps)){d.memoizedState=tl(i,a,g,c);return}}Pn.flags|=n,d.memoizedState=tl(1|i,a,g,c)}function Yp(n,i){return ac(8390656,8,n,i)}function Ed(n,i){return oc(2048,8,n,i)}function Kp(n,i){return oc(4,2,n,i)}function Zp(n,i){return oc(4,4,n,i)}function Jp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Qp(n,i,a){return a=a!=null?a.concat([n]):null,oc(4,4,Jp.bind(null,i,n),a)}function wd(){}function em(n,i){var a=or();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&_d(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function tm(n,i){var a=or();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&_d(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function nm(n,i,a){return(ha&21)===0?(n.baseState&&(n.baseState=!1,Di=!0),n.memoizedState=a):(yr(a,i)||(a=yn(),Pn.lanes|=a,pa|=a,n.baseState=!0),i)}function Tv(n,i){var a=yt;yt=a!==0&&4>a?a:4,n(!0);var c=vd.transition;vd.transition={};try{n(!1),i()}finally{yt=a,vd.transition=c}}function im(){return or().memoizedState}function Av(n,i,a){var c=ks(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},rm(n))sm(i,a);else if(a=Up(n,i,a,c),a!==null){var d=Ti();br(a,n,c,d),am(a,i,c)}}function Rv(n,i,a){var c=ks(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(rm(n))sm(i,d);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var C=i.lastRenderedState,V=g(C,a);if(d.hasEagerState=!0,d.eagerState=V,yr(V,C)){var j=i.interleaved;j===null?(d.next=d,dd(i)):(d.next=j.next,j.next=d),i.interleaved=d;return}}catch{}finally{}a=Up(n,i,d,c),a!==null&&(d=Ti(),br(a,n,c,d),am(a,i,c))}}function rm(n){var i=n.alternate;return n===Pn||i!==null&&i===Pn}function sm(n,i){Jo=sc=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function am(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Dn(n,a)}}var lc={readContext:ar,useCallback:hi,useContext:hi,useEffect:hi,useImperativeHandle:hi,useInsertionEffect:hi,useLayoutEffect:hi,useMemo:hi,useReducer:hi,useRef:hi,useState:hi,useDebugValue:hi,useDeferredValue:hi,useTransition:hi,useMutableSource:hi,useSyncExternalStore:hi,useId:hi,unstable_isNewReconciler:!1},Cv={readContext:ar,useCallback:function(n,i){return Fr().memoizedState=[n,i===void 0?null:i],n},useContext:ar,useEffect:Yp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,ac(4194308,4,Jp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return ac(4194308,4,n,i)},useInsertionEffect:function(n,i){return ac(4,2,n,i)},useMemo:function(n,i){var a=Fr();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Fr();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Av.bind(null,Pn,n),[c.memoizedState,n]},useRef:function(n){var i=Fr();return n={current:n},i.memoizedState=n},useState:jp,useDebugValue:wd,useDeferredValue:function(n){return Fr().memoizedState=n},useTransition:function(){var n=jp(!1),i=n[0];return n=Tv.bind(null,n[1]),Fr().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Pn,d=Fr();if(bn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Qn===null)throw Error(t(349));(ha&30)!==0||Gp(c,i,a)}d.memoizedState=a;var g={value:a,getSnapshot:i};return d.queue=g,Yp(Wp.bind(null,c,g,n),[n]),c.flags|=2048,tl(9,Hp.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=Fr(),i=Qn.identifierPrefix;if(bn){var a=as,c=ss;a=(c&~(1<<32-Ve(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Qo++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=bv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Pv={readContext:ar,useCallback:em,useContext:ar,useEffect:Ed,useImperativeHandle:Qp,useInsertionEffect:Kp,useLayoutEffect:Zp,useMemo:tm,useReducer:Sd,useRef:$p,useState:function(){return Sd(el)},useDebugValue:wd,useDeferredValue:function(n){var i=or();return nm(i,Wn.memoizedState,n)},useTransition:function(){var n=Sd(el)[0],i=or().memoizedState;return[n,i]},useMutableSource:zp,useSyncExternalStore:Vp,useId:im,unstable_isNewReconciler:!1},Lv={readContext:ar,useCallback:em,useContext:ar,useEffect:Ed,useImperativeHandle:Qp,useInsertionEffect:Kp,useLayoutEffect:Zp,useMemo:tm,useReducer:Md,useRef:$p,useState:function(){return Md(el)},useDebugValue:wd,useDeferredValue:function(n){var i=or();return Wn===null?i.memoizedState=n:nm(i,Wn.memoizedState,n)},useTransition:function(){var n=Md(el)[0],i=or().memoizedState;return[n,i]},useMutableSource:zp,useSyncExternalStore:Vp,useId:im,unstable_isNewReconciler:!1};function Mr(n,i){if(n&&n.defaultProps){i=Z({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function bd(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:Z({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var cc={isMounted:function(n){return(n=n._reactInternals)?wn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Ti(),d=ks(n),g=ls(c,d);g.payload=i,a!=null&&(g.callback=a),i=Ds(n,g,d),i!==null&&(br(i,n,d,c),tc(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Ti(),d=ks(n),g=ls(c,d);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=Ds(n,g,d),i!==null&&(br(i,n,d,c),tc(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Ti(),c=ks(n),d=ls(a,c);d.tag=2,i!=null&&(d.callback=i),i=Ds(n,d,c),i!==null&&(br(i,n,c,a),tc(i,n,c))}};function om(n,i,a,c,d,g,C){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,C):i.prototype&&i.prototype.isPureReactComponent?!Vo(a,c)||!Vo(d,g):!0}function lm(n,i,a){var c=!1,d=Ls,g=i.contextType;return typeof g=="object"&&g!==null?g=ar(g):(d=Ii(i)?la:fi.current,c=i.contextTypes,g=(c=c!=null)?qa(n,d):Ls),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=cc,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=g),i}function cm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&cc.enqueueReplaceState(i,i.state,null)}function Td(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},fd(n);var g=i.contextType;typeof g=="object"&&g!==null?d.context=ar(g):(g=Ii(i)?la:fi.current,d.context=qa(n,g)),d.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(bd(n,i,g,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&cc.enqueueReplaceState(d,d.state,null),nc(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function eo(n,i){try{var a="",c=i;do a+=je(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:d,digest:null}}function Ad(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Rd(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Nv=typeof WeakMap=="function"?WeakMap:Map;function um(n,i,a){a=ls(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){gc||(gc=!0,Hd=c),Rd(n,i)},a}function dm(n,i,a){a=ls(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){Rd(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Rd(n,i),typeof c!="function"&&(Os===null?Os=new Set([this]):Os.add(this));var C=i.stack;this.componentDidCatch(i.value,{componentStack:C!==null?C:""})}),a}function fm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Nv;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=qv.bind(null,n,i,a),i.then(n,n))}function hm(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function pm(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=ls(-1,1),i.tag=2,Ds(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Iv=A.ReactCurrentOwner,Di=!1;function bi(n,i,a,c){i.child=n===null?Dp(i,null,a,c):Ka(i,n.child,a,c)}function mm(n,i,a,c,d){a=a.render;var g=i.ref;return Ja(i,d),c=xd(n,i,a,c,g,d),a=yd(),n!==null&&!Di?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,cs(n,i,d)):(bn&&a&&nd(i),i.flags|=1,bi(n,i,c,d),i.child)}function gm(n,i,a,c,d){if(n===null){var g=a.type;return typeof g=="function"&&!Kd(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,vm(n,i,g,c,d)):(n=Mc(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&d)===0){var C=g.memoizedProps;if(a=a.compare,a=a!==null?a:Vo,a(C,c)&&n.ref===i.ref)return cs(n,i,d)}return i.flags|=1,n=zs(g,c),n.ref=i.ref,n.return=i,i.child=n}function vm(n,i,a,c,d){if(n!==null){var g=n.memoizedProps;if(Vo(g,c)&&n.ref===i.ref)if(Di=!1,i.pendingProps=c=g,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Di=!0);else return i.lanes=n.lanes,cs(n,i,d)}return Cd(n,i,a,c,d)}function _m(n,i,a){var c=i.pendingProps,d=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},_n(no,$i),$i|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,_n(no,$i),$i|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,_n(no,$i),$i|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,_n(no,$i),$i|=c;return bi(n,i,d,a),i.child}function xm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Cd(n,i,a,c,d){var g=Ii(a)?la:fi.current;return g=qa(i,g),Ja(i,d),a=xd(n,i,a,c,g,d),c=yd(),n!==null&&!Di?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,cs(n,i,d)):(bn&&c&&nd(i),i.flags|=1,bi(n,i,a,d),i.child)}function ym(n,i,a,c,d){if(Ii(a)){var g=!0;jl(i)}else g=!1;if(Ja(i,d),i.stateNode===null)dc(n,i),lm(i,a,c),Td(i,a,c,d),c=!0;else if(n===null){var C=i.stateNode,V=i.memoizedProps;C.props=V;var j=C.context,_e=a.contextType;typeof _e=="object"&&_e!==null?_e=ar(_e):(_e=Ii(a)?la:fi.current,_e=qa(i,_e));var Le=a.getDerivedStateFromProps,De=typeof Le=="function"||typeof C.getSnapshotBeforeUpdate=="function";De||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(V!==c||j!==_e)&&cm(i,C,c,_e),Is=!1;var Re=i.memoizedState;C.state=Re,nc(i,c,C,d),j=i.memoizedState,V!==c||Re!==j||Ni.current||Is?(typeof Le=="function"&&(bd(i,a,Le,c),j=i.memoizedState),(V=Is||om(i,a,V,c,Re,j,_e))?(De||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(i.flags|=4194308)):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=j),C.props=c,C.state=j,C.context=_e,c=V):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{C=i.stateNode,Op(n,i),V=i.memoizedProps,_e=i.type===i.elementType?V:Mr(i.type,V),C.props=_e,De=i.pendingProps,Re=C.context,j=a.contextType,typeof j=="object"&&j!==null?j=ar(j):(j=Ii(a)?la:fi.current,j=qa(i,j));var tt=a.getDerivedStateFromProps;(Le=typeof tt=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(V!==De||Re!==j)&&cm(i,C,c,j),Is=!1,Re=i.memoizedState,C.state=Re,nc(i,c,C,d);var at=i.memoizedState;V!==De||Re!==at||Ni.current||Is?(typeof tt=="function"&&(bd(i,a,tt,c),at=i.memoizedState),(_e=Is||om(i,a,_e,c,Re,at,j)||!1)?(Le||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(c,at,j),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(c,at,j)),typeof C.componentDidUpdate=="function"&&(i.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof C.componentDidUpdate!="function"||V===n.memoizedProps&&Re===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||V===n.memoizedProps&&Re===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=at),C.props=c,C.state=at,C.context=j,c=_e):(typeof C.componentDidUpdate!="function"||V===n.memoizedProps&&Re===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||V===n.memoizedProps&&Re===n.memoizedState||(i.flags|=1024),c=!1)}return Pd(n,i,a,c,g,d)}function Pd(n,i,a,c,d,g){xm(n,i);var C=(i.flags&128)!==0;if(!c&&!C)return d&&bp(i,a,!1),cs(n,i,g);c=i.stateNode,Iv.current=i;var V=C&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&C?(i.child=Ka(i,n.child,null,g),i.child=Ka(i,null,V,g)):bi(n,i,V,g),i.memoizedState=c.state,d&&bp(i,a,!0),i.child}function Sm(n){var i=n.stateNode;i.pendingContext?Ep(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ep(n,i.context,!1),hd(n,i.containerInfo)}function Mm(n,i,a,c,d){return Ya(),ad(d),i.flags|=256,bi(n,i,a,c),i.child}var Ld={dehydrated:null,treeContext:null,retryLane:0};function Nd(n){return{baseLanes:n,cachePool:null,transitions:null}}function Em(n,i,a){var c=i.pendingProps,d=Cn.current,g=!1,C=(i.flags&128)!==0,V;if((V=C)||(V=n!==null&&n.memoizedState===null?!1:(d&2)!==0),V?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),_n(Cn,d&1),n===null)return sd(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(C=c.children,n=c.fallback,g?(c=i.mode,g=i.child,C={mode:"hidden",children:C},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=C):g=Ec(C,c,0,null),n=_a(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Nd(a),i.memoizedState=Ld,n):Id(i,C));if(d=n.memoizedState,d!==null&&(V=d.dehydrated,V!==null))return Dv(n,i,C,c,V,d,a);if(g){g=c.fallback,C=i.mode,d=n.child,V=d.sibling;var j={mode:"hidden",children:c.children};return(C&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=j,i.deletions=null):(c=zs(d,j),c.subtreeFlags=d.subtreeFlags&14680064),V!==null?g=zs(V,g):(g=_a(g,C,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,C=n.child.memoizedState,C=C===null?Nd(a):{baseLanes:C.baseLanes|a,cachePool:null,transitions:C.transitions},g.memoizedState=C,g.childLanes=n.childLanes&~a,i.memoizedState=Ld,c}return g=n.child,n=g.sibling,c=zs(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Id(n,i){return i=Ec({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function uc(n,i,a,c){return c!==null&&ad(c),Ka(i,n.child,null,a),n=Id(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Dv(n,i,a,c,d,g,C){if(a)return i.flags&256?(i.flags&=-257,c=Ad(Error(t(422))),uc(n,i,C,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,d=i.mode,c=Ec({mode:"visible",children:c.children},d,0,null),g=_a(g,d,C,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&Ka(i,n.child,null,C),i.child.memoizedState=Nd(C),i.memoizedState=Ld,g);if((i.mode&1)===0)return uc(n,i,C,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var V=c.dgst;return c=V,g=Error(t(419)),c=Ad(g,c,void 0),uc(n,i,C,c)}if(V=(C&n.childLanes)!==0,Di||V){if(c=Qn,c!==null){switch(C&-C){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|C))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,os(n,d),br(c,n,d,-1))}return Yd(),c=Ad(Error(t(421))),uc(n,i,C,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=jv.bind(null,n),d._reactRetry=i,null):(n=g.treeContext,ji=Cs(d.nextSibling),qi=i,bn=!0,Sr=null,n!==null&&(rr[sr++]=ss,rr[sr++]=as,rr[sr++]=ca,ss=n.id,as=n.overflow,ca=i),i=Id(i,c.children),i.flags|=4096,i)}function wm(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),ud(n.return,i,a)}function Dd(n,i,a,c,d){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function bm(n,i,a){var c=i.pendingProps,d=c.revealOrder,g=c.tail;if(bi(n,i,c.children,a),c=Cn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&wm(n,a,i);else if(n.tag===19)wm(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(_n(Cn,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&ic(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Dd(i,!1,d,a,g);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&ic(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Dd(i,!0,a,null,g);break;case"together":Dd(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function dc(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function cs(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),pa|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=zs(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=zs(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Uv(n,i,a){switch(i.tag){case 3:Sm(i),Ya();break;case 5:Bp(i);break;case 1:Ii(i.type)&&jl(i);break;case 4:hd(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;_n(Ql,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(_n(Cn,Cn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Em(n,i,a):(_n(Cn,Cn.current&1),n=cs(n,i,a),n!==null?n.sibling:null);_n(Cn,Cn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return bm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),_n(Cn,Cn.current),c)break;return null;case 22:case 23:return i.lanes=0,_m(n,i,a)}return cs(n,i,a)}var Tm,Ud,Am,Rm;Tm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ud=function(){},Am=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,fa(Or.current);var g=null;switch(a){case"input":d=ht(n,d),c=ht(n,c),g=[];break;case"select":d=Z({},d,{value:void 0}),c=Z({},c,{value:void 0}),g=[];break;case"textarea":d=Bt(n,d),c=Bt(n,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Wl)}Ze(a,c);var C;a=null;for(_e in d)if(!c.hasOwnProperty(_e)&&d.hasOwnProperty(_e)&&d[_e]!=null)if(_e==="style"){var V=d[_e];for(C in V)V.hasOwnProperty(C)&&(a||(a={}),a[C]="")}else _e!=="dangerouslySetInnerHTML"&&_e!=="children"&&_e!=="suppressContentEditableWarning"&&_e!=="suppressHydrationWarning"&&_e!=="autoFocus"&&(o.hasOwnProperty(_e)?g||(g=[]):(g=g||[]).push(_e,null));for(_e in c){var j=c[_e];if(V=d!=null?d[_e]:void 0,c.hasOwnProperty(_e)&&j!==V&&(j!=null||V!=null))if(_e==="style")if(V){for(C in V)!V.hasOwnProperty(C)||j&&j.hasOwnProperty(C)||(a||(a={}),a[C]="");for(C in j)j.hasOwnProperty(C)&&V[C]!==j[C]&&(a||(a={}),a[C]=j[C])}else a||(g||(g=[]),g.push(_e,a)),a=j;else _e==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,V=V?V.__html:void 0,j!=null&&V!==j&&(g=g||[]).push(_e,j)):_e==="children"?typeof j!="string"&&typeof j!="number"||(g=g||[]).push(_e,""+j):_e!=="suppressContentEditableWarning"&&_e!=="suppressHydrationWarning"&&(o.hasOwnProperty(_e)?(j!=null&&_e==="onScroll"&&Mn("scroll",n),g||V===j||(g=[])):(g=g||[]).push(_e,j))}a&&(g=g||[]).push("style",a);var _e=g;(i.updateQueue=_e)&&(i.flags|=4)}},Rm=function(n,i,a,c){a!==c&&(i.flags|=4)};function nl(n,i){if(!bn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function pi(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Ov(n,i,a){var c=i.pendingProps;switch(id(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pi(i),null;case 1:return Ii(i.type)&&ql(),pi(i),null;case 3:return c=i.stateNode,Qa(),En(Ni),En(fi),gd(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Zl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Sr!==null&&(qd(Sr),Sr=null))),Ud(n,i),pi(i),null;case 5:pd(i);var d=fa(Zo.current);if(a=i.type,n!==null&&i.stateNode!=null)Am(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return pi(i),null}if(n=fa(Or.current),Zl(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Ur]=i,c[qo]=g,n=(i.mode&1)!==0,a){case"dialog":Mn("cancel",c),Mn("close",c);break;case"iframe":case"object":case"embed":Mn("load",c);break;case"video":case"audio":for(d=0;d<Ho.length;d++)Mn(Ho[d],c);break;case"source":Mn("error",c);break;case"img":case"image":case"link":Mn("error",c),Mn("load",c);break;case"details":Mn("toggle",c);break;case"input":bt(c,g),Mn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Mn("invalid",c);break;case"textarea":$(c,g),Mn("invalid",c)}Ze(a,g),d=null;for(var C in g)if(g.hasOwnProperty(C)){var V=g[C];C==="children"?typeof V=="string"?c.textContent!==V&&(g.suppressHydrationWarning!==!0&&Hl(c.textContent,V,n),d=["children",V]):typeof V=="number"&&c.textContent!==""+V&&(g.suppressHydrationWarning!==!0&&Hl(c.textContent,V,n),d=["children",""+V]):o.hasOwnProperty(C)&&V!=null&&C==="onScroll"&&Mn("scroll",c)}switch(a){case"input":ze(c),Ct(c,g,!0);break;case"textarea":ze(c),Pt(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Wl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{C=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=B(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=C.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=C.createElement(a,{is:c.is}):(n=C.createElement(a),a==="select"&&(C=n,c.multiple?C.multiple=!0:c.size&&(C.size=c.size))):n=C.createElementNS(n,a),n[Ur]=i,n[qo]=c,Tm(n,i,!1,!1),i.stateNode=n;e:{switch(C=Ue(a,c),a){case"dialog":Mn("cancel",n),Mn("close",n),d=c;break;case"iframe":case"object":case"embed":Mn("load",n),d=c;break;case"video":case"audio":for(d=0;d<Ho.length;d++)Mn(Ho[d],n);d=c;break;case"source":Mn("error",n),d=c;break;case"img":case"image":case"link":Mn("error",n),Mn("load",n),d=c;break;case"details":Mn("toggle",n),d=c;break;case"input":bt(n,c),d=ht(n,c),Mn("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=Z({},c,{value:void 0}),Mn("invalid",n);break;case"textarea":$(n,c),d=Bt(n,c),Mn("invalid",n);break;default:d=c}Ze(a,d),V=d;for(g in V)if(V.hasOwnProperty(g)){var j=V[g];g==="style"?Ee(n,j):g==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&se(n,j)):g==="children"?typeof j=="string"?(a!=="textarea"||j!=="")&&ge(n,j):typeof j=="number"&&ge(n,""+j):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?j!=null&&g==="onScroll"&&Mn("scroll",n):j!=null&&F(n,g,j,C))}switch(a){case"input":ze(n),Ct(n,c,!1);break;case"textarea":ze(n),Pt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+he(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?Ft(n,!!c.multiple,g,!1):c.defaultValue!=null&&Ft(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Wl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return pi(i),null;case 6:if(n&&i.stateNode!=null)Rm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=fa(Zo.current),fa(Or.current),Zl(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ur]=i,(g=c.nodeValue!==a)&&(n=qi,n!==null))switch(n.tag){case 3:Hl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Hl(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ur]=i,i.stateNode=c}return pi(i),null;case 13:if(En(Cn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(bn&&ji!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Lp(),Ya(),i.flags|=98560,g=!1;else if(g=Zl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Ur]=i}else Ya(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;pi(i),g=!1}else Sr!==null&&(qd(Sr),Sr=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Cn.current&1)!==0?Xn===0&&(Xn=3):Yd())),i.updateQueue!==null&&(i.flags|=4),pi(i),null);case 4:return Qa(),Ud(n,i),n===null&&Wo(i.stateNode.containerInfo),pi(i),null;case 10:return cd(i.type._context),pi(i),null;case 17:return Ii(i.type)&&ql(),pi(i),null;case 19:if(En(Cn),g=i.memoizedState,g===null)return pi(i),null;if(c=(i.flags&128)!==0,C=g.rendering,C===null)if(c)nl(g,!1);else{if(Xn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(C=ic(n),C!==null){for(i.flags|=128,nl(g,!1),c=C.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,C=g.alternate,C===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=C.childLanes,g.lanes=C.lanes,g.child=C.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=C.memoizedProps,g.memoizedState=C.memoizedState,g.updateQueue=C.updateQueue,g.type=C.type,n=C.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return _n(Cn,Cn.current&1|2),i.child}n=n.sibling}g.tail!==null&&kt()>io&&(i.flags|=128,c=!0,nl(g,!1),i.lanes=4194304)}else{if(!c)if(n=ic(C),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),nl(g,!0),g.tail===null&&g.tailMode==="hidden"&&!C.alternate&&!bn)return pi(i),null}else 2*kt()-g.renderingStartTime>io&&a!==1073741824&&(i.flags|=128,c=!0,nl(g,!1),i.lanes=4194304);g.isBackwards?(C.sibling=i.child,i.child=C):(a=g.last,a!==null?a.sibling=C:i.child=C,g.last=C)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=kt(),i.sibling=null,a=Cn.current,_n(Cn,c?a&1|2:a&1),i):(pi(i),null);case 22:case 23:return $d(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?($i&1073741824)!==0&&(pi(i),i.subtreeFlags&6&&(i.flags|=8192)):pi(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Fv(n,i){switch(id(i),i.tag){case 1:return Ii(i.type)&&ql(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Qa(),En(Ni),En(fi),gd(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return pd(i),null;case 13:if(En(Cn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ya()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return En(Cn),null;case 4:return Qa(),null;case 10:return cd(i.type._context),null;case 22:case 23:return $d(),null;case 24:return null;default:return null}}var fc=!1,mi=!1,kv=typeof WeakSet=="function"?WeakSet:Set,st=null;function to(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){In(n,i,c)}else a.current=null}function Od(n,i,a){try{a()}catch(c){In(n,i,c)}}var Cm=!1;function Bv(n,i){if($u=Ms,n=op(),zu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var C=0,V=-1,j=-1,_e=0,Le=0,De=n,Re=null;t:for(;;){for(var tt;De!==a||d!==0&&De.nodeType!==3||(V=C+d),De!==g||c!==0&&De.nodeType!==3||(j=C+c),De.nodeType===3&&(C+=De.nodeValue.length),(tt=De.firstChild)!==null;)Re=De,De=tt;for(;;){if(De===n)break t;if(Re===a&&++_e===d&&(V=C),Re===g&&++Le===c&&(j=C),(tt=De.nextSibling)!==null)break;De=Re,Re=De.parentNode}De=tt}a=V===-1||j===-1?null:{start:V,end:j}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yu={focusedElem:n,selectionRange:a},Ms=!1,st=i;st!==null;)if(i=st,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,st=n;else for(;st!==null;){i=st;try{var at=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(at!==null){var lt=at.memoizedProps,Fn=at.memoizedState,ue=i.stateNode,Q=ue.getSnapshotBeforeUpdate(i.elementType===i.type?lt:Mr(i.type,lt),Fn);ue.__reactInternalSnapshotBeforeUpdate=Q}break;case 3:var pe=i.stateNode.containerInfo;pe.nodeType===1?pe.textContent="":pe.nodeType===9&&pe.documentElement&&pe.removeChild(pe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ke){In(i,i.return,ke)}if(n=i.sibling,n!==null){n.return=i.return,st=n;break}st=i.return}return at=Cm,Cm=!1,at}function il(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var g=d.destroy;d.destroy=void 0,g!==void 0&&Od(i,a,g)}d=d.next}while(d!==c)}}function hc(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Fd(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Pm(n){var i=n.alternate;i!==null&&(n.alternate=null,Pm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ur],delete i[qo],delete i[Qu],delete i[Sv],delete i[Mv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Lm(n){return n.tag===5||n.tag===3||n.tag===4}function Nm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Lm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function kd(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Wl));else if(c!==4&&(n=n.child,n!==null))for(kd(n,i,a),n=n.sibling;n!==null;)kd(n,i,a),n=n.sibling}function Bd(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Bd(n,i,a),n=n.sibling;n!==null;)Bd(n,i,a),n=n.sibling}var oi=null,Er=!1;function Us(n,i,a){for(a=a.child;a!==null;)Im(n,i,a),a=a.sibling}function Im(n,i,a){if(oe&&typeof oe.onCommitFiberUnmount=="function")try{oe.onCommitFiberUnmount(ae,a)}catch{}switch(a.tag){case 5:mi||to(a,i);case 6:var c=oi,d=Er;oi=null,Us(n,i,a),oi=c,Er=d,oi!==null&&(Er?(n=oi,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):oi.removeChild(a.stateNode));break;case 18:oi!==null&&(Er?(n=oi,a=a.stateNode,n.nodeType===8?Ju(n.parentNode,a):n.nodeType===1&&Ju(n,a),Nr(n)):Ju(oi,a.stateNode));break;case 4:c=oi,d=Er,oi=a.stateNode.containerInfo,Er=!0,Us(n,i,a),oi=c,Er=d;break;case 0:case 11:case 14:case 15:if(!mi&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,C=g.destroy;g=g.tag,C!==void 0&&((g&2)!==0||(g&4)!==0)&&Od(a,i,C),d=d.next}while(d!==c)}Us(n,i,a);break;case 1:if(!mi&&(to(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(V){In(a,i,V)}Us(n,i,a);break;case 21:Us(n,i,a);break;case 22:a.mode&1?(mi=(c=mi)||a.memoizedState!==null,Us(n,i,a),mi=c):Us(n,i,a);break;default:Us(n,i,a)}}function Dm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new kv),i.forEach(function(c){var d=$v.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function wr(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=n,C=i,V=C;e:for(;V!==null;){switch(V.tag){case 5:oi=V.stateNode,Er=!1;break e;case 3:oi=V.stateNode.containerInfo,Er=!0;break e;case 4:oi=V.stateNode.containerInfo,Er=!0;break e}V=V.return}if(oi===null)throw Error(t(160));Im(g,C,d),oi=null,Er=!1;var j=d.alternate;j!==null&&(j.return=null),d.return=null}catch(_e){In(d,i,_e)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Um(i,n),i=i.sibling}function Um(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(wr(i,n),kr(n),c&4){try{il(3,n,n.return),hc(3,n)}catch(lt){In(n,n.return,lt)}try{il(5,n,n.return)}catch(lt){In(n,n.return,lt)}}break;case 1:wr(i,n),kr(n),c&512&&a!==null&&to(a,a.return);break;case 5:if(wr(i,n),kr(n),c&512&&a!==null&&to(a,a.return),n.flags&32){var d=n.stateNode;try{ge(d,"")}catch(lt){In(n,n.return,lt)}}if(c&4&&(d=n.stateNode,d!=null)){var g=n.memoizedProps,C=a!==null?a.memoizedProps:g,V=n.type,j=n.updateQueue;if(n.updateQueue=null,j!==null)try{V==="input"&&g.type==="radio"&&g.name!=null&&It(d,g),Ue(V,C);var _e=Ue(V,g);for(C=0;C<j.length;C+=2){var Le=j[C],De=j[C+1];Le==="style"?Ee(d,De):Le==="dangerouslySetInnerHTML"?se(d,De):Le==="children"?ge(d,De):F(d,Le,De,_e)}switch(V){case"input":vt(d,g);break;case"textarea":tn(d,g);break;case"select":var Re=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var tt=g.value;tt!=null?Ft(d,!!g.multiple,tt,!1):Re!==!!g.multiple&&(g.defaultValue!=null?Ft(d,!!g.multiple,g.defaultValue,!0):Ft(d,!!g.multiple,g.multiple?[]:"",!1))}d[qo]=g}catch(lt){In(n,n.return,lt)}}break;case 6:if(wr(i,n),kr(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,g=n.memoizedProps;try{d.nodeValue=g}catch(lt){In(n,n.return,lt)}}break;case 3:if(wr(i,n),kr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Nr(i.containerInfo)}catch(lt){In(n,n.return,lt)}break;case 4:wr(i,n),kr(n);break;case 13:wr(i,n),kr(n),d=n.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(Gd=kt())),c&4&&Dm(n);break;case 22:if(Le=a!==null&&a.memoizedState!==null,n.mode&1?(mi=(_e=mi)||Le,wr(i,n),mi=_e):wr(i,n),kr(n),c&8192){if(_e=n.memoizedState!==null,(n.stateNode.isHidden=_e)&&!Le&&(n.mode&1)!==0)for(st=n,Le=n.child;Le!==null;){for(De=st=Le;st!==null;){switch(Re=st,tt=Re.child,Re.tag){case 0:case 11:case 14:case 15:il(4,Re,Re.return);break;case 1:to(Re,Re.return);var at=Re.stateNode;if(typeof at.componentWillUnmount=="function"){c=Re,a=Re.return;try{i=c,at.props=i.memoizedProps,at.state=i.memoizedState,at.componentWillUnmount()}catch(lt){In(c,a,lt)}}break;case 5:to(Re,Re.return);break;case 22:if(Re.memoizedState!==null){km(De);continue}}tt!==null?(tt.return=Re,st=tt):km(De)}Le=Le.sibling}e:for(Le=null,De=n;;){if(De.tag===5){if(Le===null){Le=De;try{d=De.stateNode,_e?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(V=De.stateNode,j=De.memoizedProps.style,C=j!=null&&j.hasOwnProperty("display")?j.display:null,V.style.display=xe("display",C))}catch(lt){In(n,n.return,lt)}}}else if(De.tag===6){if(Le===null)try{De.stateNode.nodeValue=_e?"":De.memoizedProps}catch(lt){In(n,n.return,lt)}}else if((De.tag!==22&&De.tag!==23||De.memoizedState===null||De===n)&&De.child!==null){De.child.return=De,De=De.child;continue}if(De===n)break e;for(;De.sibling===null;){if(De.return===null||De.return===n)break e;Le===De&&(Le=null),De=De.return}Le===De&&(Le=null),De.sibling.return=De.return,De=De.sibling}}break;case 19:wr(i,n),kr(n),c&4&&Dm(n);break;case 21:break;default:wr(i,n),kr(n)}}function kr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Lm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(ge(d,""),c.flags&=-33);var g=Nm(n);Bd(n,g,d);break;case 3:case 4:var C=c.stateNode.containerInfo,V=Nm(n);kd(n,V,C);break;default:throw Error(t(161))}}catch(j){In(n,n.return,j)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function zv(n,i,a){st=n,Om(n)}function Om(n,i,a){for(var c=(n.mode&1)!==0;st!==null;){var d=st,g=d.child;if(d.tag===22&&c){var C=d.memoizedState!==null||fc;if(!C){var V=d.alternate,j=V!==null&&V.memoizedState!==null||mi;V=fc;var _e=mi;if(fc=C,(mi=j)&&!_e)for(st=d;st!==null;)C=st,j=C.child,C.tag===22&&C.memoizedState!==null?Bm(d):j!==null?(j.return=C,st=j):Bm(d);for(;g!==null;)st=g,Om(g),g=g.sibling;st=d,fc=V,mi=_e}Fm(n)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,st=g):Fm(n)}}function Fm(n){for(;st!==null;){var i=st;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:mi||hc(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!mi)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Mr(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&kp(i,g,c);break;case 3:var C=i.updateQueue;if(C!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}kp(i,C,a)}break;case 5:var V=i.stateNode;if(a===null&&i.flags&4){a=V;var j=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&a.focus();break;case"img":j.src&&(a.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var _e=i.alternate;if(_e!==null){var Le=_e.memoizedState;if(Le!==null){var De=Le.dehydrated;De!==null&&Nr(De)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}mi||i.flags&512&&Fd(i)}catch(Re){In(i,i.return,Re)}}if(i===n){st=null;break}if(a=i.sibling,a!==null){a.return=i.return,st=a;break}st=i.return}}function km(n){for(;st!==null;){var i=st;if(i===n){st=null;break}var a=i.sibling;if(a!==null){a.return=i.return,st=a;break}st=i.return}}function Bm(n){for(;st!==null;){var i=st;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{hc(4,i)}catch(j){In(i,a,j)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(j){In(i,d,j)}}var g=i.return;try{Fd(i)}catch(j){In(i,g,j)}break;case 5:var C=i.return;try{Fd(i)}catch(j){In(i,C,j)}}}catch(j){In(i,i.return,j)}if(i===n){st=null;break}var V=i.sibling;if(V!==null){V.return=i.return,st=V;break}st=i.return}}var Vv=Math.ceil,pc=A.ReactCurrentDispatcher,zd=A.ReactCurrentOwner,lr=A.ReactCurrentBatchConfig,nn=0,Qn=null,Bn=null,li=0,$i=0,no=Ps(0),Xn=0,rl=null,pa=0,mc=0,Vd=0,sl=null,Ui=null,Gd=0,io=1/0,us=null,gc=!1,Hd=null,Os=null,vc=!1,Fs=null,_c=0,al=0,Wd=null,xc=-1,yc=0;function Ti(){return(nn&6)!==0?kt():xc!==-1?xc:xc=kt()}function ks(n){return(n.mode&1)===0?1:(nn&2)!==0&&li!==0?li&-li:wv.transition!==null?(yc===0&&(yc=yn()),yc):(n=yt,n!==0||(n=window.event,n=n===void 0?16:ws(n.type)),n)}function br(n,i,a,c){if(50<al)throw al=0,Wd=null,Error(t(185));ln(n,a,c),((nn&2)===0||n!==Qn)&&(n===Qn&&((nn&2)===0&&(mc|=a),Xn===4&&Bs(n,li)),Oi(n,c),a===1&&nn===0&&(i.mode&1)===0&&(io=kt()+500,$l&&Ns()))}function Oi(n,i){var a=n.callbackNode;sn(n,i);var c=Dt(n,n===Qn?li:0);if(c===0)a!==null&&Hn(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Hn(a),i===1)n.tag===0?Ev(Vm.bind(null,n)):Tp(Vm.bind(null,n)),xv(function(){(nn&6)===0&&Ns()}),a=null;else{switch(si(c)){case 1:a=mr;break;case 4:a=Wi;break;case 16:a=P;break;case 536870912:a=me;break;default:a=P}a=Ym(a,zm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function zm(n,i){if(xc=-1,yc=0,(nn&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ro()&&n.callbackNode!==a)return null;var c=Dt(n,n===Qn?li:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Sc(n,c);else{i=c;var d=nn;nn|=2;var g=Hm();(Qn!==n||li!==i)&&(us=null,io=kt()+500,ga(n,i));do try{Wv();break}catch(V){Gm(n,V)}while(!0);ld(),pc.current=g,nn=d,Bn!==null?i=0:(Qn=null,li=0,i=Xn)}if(i!==0){if(i===2&&(d=qt(n),d!==0&&(c=d,i=Xd(n,d))),i===1)throw a=rl,ga(n,0),Bs(n,c),Oi(n,kt()),a;if(i===6)Bs(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Gv(d)&&(i=Sc(n,c),i===2&&(g=qt(n),g!==0&&(c=g,i=Xd(n,g))),i===1))throw a=rl,ga(n,0),Bs(n,c),Oi(n,kt()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:va(n,Ui,us);break;case 3:if(Bs(n,c),(c&130023424)===c&&(i=Gd+500-kt(),10<i)){if(Dt(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ti(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Zu(va.bind(null,n,Ui,us),i);break}va(n,Ui,us);break;case 4:if(Bs(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var C=31-Ve(c);g=1<<C,C=i[C],C>d&&(d=C),c&=~g}if(c=d,c=kt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Vv(c/1960))-c,10<c){n.timeoutHandle=Zu(va.bind(null,n,Ui,us),c);break}va(n,Ui,us);break;case 5:va(n,Ui,us);break;default:throw Error(t(329))}}}return Oi(n,kt()),n.callbackNode===a?zm.bind(null,n):null}function Xd(n,i){var a=sl;return n.current.memoizedState.isDehydrated&&(ga(n,i).flags|=256),n=Sc(n,i),n!==2&&(i=Ui,Ui=a,i!==null&&qd(i)),n}function qd(n){Ui===null?Ui=n:Ui.push.apply(Ui,n)}function Gv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!yr(g(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Bs(n,i){for(i&=~Vd,i&=~mc,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ve(i),c=1<<a;n[a]=-1,i&=~c}}function Vm(n){if((nn&6)!==0)throw Error(t(327));ro();var i=Dt(n,0);if((i&1)===0)return Oi(n,kt()),null;var a=Sc(n,i);if(n.tag!==0&&a===2){var c=qt(n);c!==0&&(i=c,a=Xd(n,c))}if(a===1)throw a=rl,ga(n,0),Bs(n,i),Oi(n,kt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,va(n,Ui,us),Oi(n,kt()),null}function jd(n,i){var a=nn;nn|=1;try{return n(i)}finally{nn=a,nn===0&&(io=kt()+500,$l&&Ns())}}function ma(n){Fs!==null&&Fs.tag===0&&(nn&6)===0&&ro();var i=nn;nn|=1;var a=lr.transition,c=yt;try{if(lr.transition=null,yt=1,n)return n()}finally{yt=c,lr.transition=a,nn=i,(nn&6)===0&&Ns()}}function $d(){$i=no.current,En(no)}function ga(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,_v(a)),Bn!==null)for(a=Bn.return;a!==null;){var c=a;switch(id(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ql();break;case 3:Qa(),En(Ni),En(fi),gd();break;case 5:pd(c);break;case 4:Qa();break;case 13:En(Cn);break;case 19:En(Cn);break;case 10:cd(c.type._context);break;case 22:case 23:$d()}a=a.return}if(Qn=n,Bn=n=zs(n.current,null),li=$i=i,Xn=0,rl=null,Vd=mc=pa=0,Ui=sl=null,da!==null){for(i=0;i<da.length;i++)if(a=da[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var C=g.next;g.next=d,c.next=C}a.pending=c}da=null}return n}function Gm(n,i){do{var a=Bn;try{if(ld(),rc.current=lc,sc){for(var c=Pn.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}sc=!1}if(ha=0,Jn=Wn=Pn=null,Jo=!1,Qo=0,zd.current=null,a===null||a.return===null){Xn=1,rl=i,Bn=null;break}e:{var g=n,C=a.return,V=a,j=i;if(i=li,V.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var _e=j,Le=V,De=Le.tag;if((Le.mode&1)===0&&(De===0||De===11||De===15)){var Re=Le.alternate;Re?(Le.updateQueue=Re.updateQueue,Le.memoizedState=Re.memoizedState,Le.lanes=Re.lanes):(Le.updateQueue=null,Le.memoizedState=null)}var tt=hm(C);if(tt!==null){tt.flags&=-257,pm(tt,C,V,g,i),tt.mode&1&&fm(g,_e,i),i=tt,j=_e;var at=i.updateQueue;if(at===null){var lt=new Set;lt.add(j),i.updateQueue=lt}else at.add(j);break e}else{if((i&1)===0){fm(g,_e,i),Yd();break e}j=Error(t(426))}}else if(bn&&V.mode&1){var Fn=hm(C);if(Fn!==null){(Fn.flags&65536)===0&&(Fn.flags|=256),pm(Fn,C,V,g,i),ad(eo(j,V));break e}}g=j=eo(j,V),Xn!==4&&(Xn=2),sl===null?sl=[g]:sl.push(g),g=C;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var ue=um(g,j,i);Fp(g,ue);break e;case 1:V=j;var Q=g.type,pe=g.stateNode;if((g.flags&128)===0&&(typeof Q.getDerivedStateFromError=="function"||pe!==null&&typeof pe.componentDidCatch=="function"&&(Os===null||!Os.has(pe)))){g.flags|=65536,i&=-i,g.lanes|=i;var ke=dm(g,V,i);Fp(g,ke);break e}}g=g.return}while(g!==null)}Xm(a)}catch(ct){i=ct,Bn===a&&a!==null&&(Bn=a=a.return);continue}break}while(!0)}function Hm(){var n=pc.current;return pc.current=lc,n===null?lc:n}function Yd(){(Xn===0||Xn===3||Xn===2)&&(Xn=4),Qn===null||(pa&268435455)===0&&(mc&268435455)===0||Bs(Qn,li)}function Sc(n,i){var a=nn;nn|=2;var c=Hm();(Qn!==n||li!==i)&&(us=null,ga(n,i));do try{Hv();break}catch(d){Gm(n,d)}while(!0);if(ld(),nn=a,pc.current=c,Bn!==null)throw Error(t(261));return Qn=null,li=0,Xn}function Hv(){for(;Bn!==null;)Wm(Bn)}function Wv(){for(;Bn!==null&&!Yr();)Wm(Bn)}function Wm(n){var i=$m(n.alternate,n,$i);n.memoizedProps=n.pendingProps,i===null?Xm(n):Bn=i,zd.current=null}function Xm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Ov(a,i,$i),a!==null){Bn=a;return}}else{if(a=Fv(a,i),a!==null){a.flags&=32767,Bn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Xn=6,Bn=null;return}}if(i=i.sibling,i!==null){Bn=i;return}Bn=i=n}while(i!==null);Xn===0&&(Xn=5)}function va(n,i,a){var c=yt,d=lr.transition;try{lr.transition=null,yt=1,Xv(n,i,a,c)}finally{lr.transition=d,yt=c}return null}function Xv(n,i,a,c){do ro();while(Fs!==null);if((nn&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(Lt(n,g),n===Qn&&(Bn=Qn=null,li=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||vc||(vc=!0,Ym(P,function(){return ro(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=lr.transition,lr.transition=null;var C=yt;yt=1;var V=nn;nn|=4,zd.current=null,Bv(n,a),Um(a,n),dv(Yu),Ms=!!$u,Yu=$u=null,n.current=a,zv(a),Ht(),nn=V,yt=C,lr.transition=g}else n.current=a;if(vc&&(vc=!1,Fs=n,_c=d),g=n.pendingLanes,g===0&&(Os=null),He(a.stateNode),Oi(n,kt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(gc)throw gc=!1,n=Hd,Hd=null,n;return(_c&1)!==0&&n.tag!==0&&ro(),g=n.pendingLanes,(g&1)!==0?n===Wd?al++:(al=0,Wd=n):al=0,Ns(),null}function ro(){if(Fs!==null){var n=si(_c),i=lr.transition,a=yt;try{if(lr.transition=null,yt=16>n?16:n,Fs===null)var c=!1;else{if(n=Fs,Fs=null,_c=0,(nn&6)!==0)throw Error(t(331));var d=nn;for(nn|=4,st=n.current;st!==null;){var g=st,C=g.child;if((st.flags&16)!==0){var V=g.deletions;if(V!==null){for(var j=0;j<V.length;j++){var _e=V[j];for(st=_e;st!==null;){var Le=st;switch(Le.tag){case 0:case 11:case 15:il(8,Le,g)}var De=Le.child;if(De!==null)De.return=Le,st=De;else for(;st!==null;){Le=st;var Re=Le.sibling,tt=Le.return;if(Pm(Le),Le===_e){st=null;break}if(Re!==null){Re.return=tt,st=Re;break}st=tt}}}var at=g.alternate;if(at!==null){var lt=at.child;if(lt!==null){at.child=null;do{var Fn=lt.sibling;lt.sibling=null,lt=Fn}while(lt!==null)}}st=g}}if((g.subtreeFlags&2064)!==0&&C!==null)C.return=g,st=C;else e:for(;st!==null;){if(g=st,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:il(9,g,g.return)}var ue=g.sibling;if(ue!==null){ue.return=g.return,st=ue;break e}st=g.return}}var Q=n.current;for(st=Q;st!==null;){C=st;var pe=C.child;if((C.subtreeFlags&2064)!==0&&pe!==null)pe.return=C,st=pe;else e:for(C=Q;st!==null;){if(V=st,(V.flags&2048)!==0)try{switch(V.tag){case 0:case 11:case 15:hc(9,V)}}catch(ct){In(V,V.return,ct)}if(V===C){st=null;break e}var ke=V.sibling;if(ke!==null){ke.return=V.return,st=ke;break e}st=V.return}}if(nn=d,Ns(),oe&&typeof oe.onPostCommitFiberRoot=="function")try{oe.onPostCommitFiberRoot(ae,n)}catch{}c=!0}return c}finally{yt=a,lr.transition=i}}return!1}function qm(n,i,a){i=eo(a,i),i=um(n,i,1),n=Ds(n,i,1),i=Ti(),n!==null&&(ln(n,1,i),Oi(n,i))}function In(n,i,a){if(n.tag===3)qm(n,n,a);else for(;i!==null;){if(i.tag===3){qm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Os===null||!Os.has(c))){n=eo(a,n),n=dm(i,n,1),i=Ds(i,n,1),n=Ti(),i!==null&&(ln(i,1,n),Oi(i,n));break}}i=i.return}}function qv(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Ti(),n.pingedLanes|=n.suspendedLanes&a,Qn===n&&(li&a)===a&&(Xn===4||Xn===3&&(li&130023424)===li&&500>kt()-Gd?ga(n,0):Vd|=a),Oi(n,i)}function jm(n,i){i===0&&((n.mode&1)===0?i=1:(i=xt,xt<<=1,(xt&130023424)===0&&(xt=4194304)));var a=Ti();n=os(n,i),n!==null&&(ln(n,i,a),Oi(n,a))}function jv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),jm(n,a)}function $v(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),jm(n,a)}var $m;$m=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Ni.current)Di=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Di=!1,Uv(n,i,a);Di=(n.flags&131072)!==0}else Di=!1,bn&&(i.flags&1048576)!==0&&Ap(i,Kl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;dc(n,i),n=i.pendingProps;var d=qa(i,fi.current);Ja(i,a),d=xd(null,i,c,n,d,a);var g=yd();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Ii(c)?(g=!0,jl(i)):g=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,fd(i),d.updater=cc,i.stateNode=d,d._reactInternals=i,Td(i,c,n,a),i=Pd(null,i,c,!0,g,a)):(i.tag=0,bn&&g&&nd(i),bi(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(dc(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Kv(c),n=Mr(c,n),d){case 0:i=Cd(null,i,c,n,a);break e;case 1:i=ym(null,i,c,n,a);break e;case 11:i=mm(null,i,c,n,a);break e;case 14:i=gm(null,i,c,Mr(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mr(c,d),Cd(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mr(c,d),ym(n,i,c,d,a);case 3:e:{if(Sm(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,d=g.element,Op(n,i),nc(i,c,null,a);var C=i.memoizedState;if(c=C.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){d=eo(Error(t(423)),i),i=Mm(n,i,c,a,d);break e}else if(c!==d){d=eo(Error(t(424)),i),i=Mm(n,i,c,a,d);break e}else for(ji=Cs(i.stateNode.containerInfo.firstChild),qi=i,bn=!0,Sr=null,a=Dp(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ya(),c===d){i=cs(n,i,a);break e}bi(n,i,c,a)}i=i.child}return i;case 5:return Bp(i),n===null&&sd(i),c=i.type,d=i.pendingProps,g=n!==null?n.memoizedProps:null,C=d.children,Ku(c,d)?C=null:g!==null&&Ku(c,g)&&(i.flags|=32),xm(n,i),bi(n,i,C,a),i.child;case 6:return n===null&&sd(i),null;case 13:return Em(n,i,a);case 4:return hd(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ka(i,null,c,a):bi(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mr(c,d),mm(n,i,c,d,a);case 7:return bi(n,i,i.pendingProps,a),i.child;case 8:return bi(n,i,i.pendingProps.children,a),i.child;case 12:return bi(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,g=i.memoizedProps,C=d.value,_n(Ql,c._currentValue),c._currentValue=C,g!==null)if(yr(g.value,C)){if(g.children===d.children&&!Ni.current){i=cs(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var V=g.dependencies;if(V!==null){C=g.child;for(var j=V.firstContext;j!==null;){if(j.context===c){if(g.tag===1){j=ls(-1,a&-a),j.tag=2;var _e=g.updateQueue;if(_e!==null){_e=_e.shared;var Le=_e.pending;Le===null?j.next=j:(j.next=Le.next,Le.next=j),_e.pending=j}}g.lanes|=a,j=g.alternate,j!==null&&(j.lanes|=a),ud(g.return,a,i),V.lanes|=a;break}j=j.next}}else if(g.tag===10)C=g.type===i.type?null:g.child;else if(g.tag===18){if(C=g.return,C===null)throw Error(t(341));C.lanes|=a,V=C.alternate,V!==null&&(V.lanes|=a),ud(C,a,i),C=g.sibling}else C=g.child;if(C!==null)C.return=g;else for(C=g;C!==null;){if(C===i){C=null;break}if(g=C.sibling,g!==null){g.return=C.return,C=g;break}C=C.return}g=C}bi(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Ja(i,a),d=ar(d),c=c(d),i.flags|=1,bi(n,i,c,a),i.child;case 14:return c=i.type,d=Mr(c,i.pendingProps),d=Mr(c.type,d),gm(n,i,c,d,a);case 15:return vm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Mr(c,d),dc(n,i),i.tag=1,Ii(c)?(n=!0,jl(i)):n=!1,Ja(i,a),lm(i,c,d),Td(i,c,d,a),Pd(null,i,c,!0,n,a);case 19:return bm(n,i,a);case 22:return _m(n,i,a)}throw Error(t(156,i.tag))};function Ym(n,i){return Yn(n,i)}function Yv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cr(n,i,a,c){return new Yv(n,i,a,c)}function Kd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Kv(n){if(typeof n=="function")return Kd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===W)return 11;if(n===re)return 14}return 2}function zs(n,i){var a=n.alternate;return a===null?(a=cr(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Mc(n,i,a,c,d,g){var C=2;if(c=n,typeof n=="function")Kd(n)&&(C=1);else if(typeof n=="string")C=5;else e:switch(n){case k:return _a(a.children,d,g,i);case b:C=8,d|=8;break;case I:return n=cr(12,a,i,d|2),n.elementType=I,n.lanes=g,n;case ne:return n=cr(13,a,i,d),n.elementType=ne,n.lanes=g,n;case H:return n=cr(19,a,i,d),n.elementType=H,n.lanes=g,n;case ee:return Ec(a,d,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case z:C=10;break e;case G:C=9;break e;case W:C=11;break e;case re:C=14;break e;case fe:C=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=cr(C,a,i,d),i.elementType=n,i.type=c,i.lanes=g,i}function _a(n,i,a,c){return n=cr(7,n,c,i),n.lanes=a,n}function Ec(n,i,a,c){return n=cr(22,n,c,i),n.elementType=ee,n.lanes=a,n.stateNode={isHidden:!1},n}function Zd(n,i,a){return n=cr(6,n,null,i),n.lanes=a,n}function Jd(n,i,a){return i=cr(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Zv(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ye(0),this.expirationTimes=Ye(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Qd(n,i,a,c,d,g,C,V,j){return n=new Zv(n,i,a,V,j),i===1?(i=1,g===!0&&(i|=8)):i=0,g=cr(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},fd(g),n}function Jv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Km(n){if(!n)return Ls;n=n._reactInternals;e:{if(wn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Ii(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Ii(a))return wp(n,a,i)}return i}function Zm(n,i,a,c,d,g,C,V,j){return n=Qd(a,c,!0,n,d,g,C,V,j),n.context=Km(null),a=n.current,c=Ti(),d=ks(a),g=ls(c,d),g.callback=i??null,Ds(a,g,d),n.current.lanes=d,ln(n,d,c),Oi(n,c),n}function wc(n,i,a,c){var d=i.current,g=Ti(),C=ks(d);return a=Km(a),i.context===null?i.context=a:i.pendingContext=a,i=ls(g,C),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Ds(d,i,C),n!==null&&(br(n,d,C,g),tc(n,d,C)),C}function bc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Jm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function ef(n,i){Jm(n,i),(n=n.alternate)&&Jm(n,i)}function Qv(){return null}var Qm=typeof reportError=="function"?reportError:function(n){console.error(n)};function tf(n){this._internalRoot=n}Tc.prototype.render=tf.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));wc(n,i,null,null)},Tc.prototype.unmount=tf.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ma(function(){wc(null,n,null,null)}),i[is]=null}};function Tc(n){this._internalRoot=n}Tc.prototype.unstable_scheduleHydration=function(n){if(n){var i=we();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Qt.length&&i!==0&&i<Qt[a].priority;a++);Qt.splice(a,0,n),a===0&&gr(n)}};function nf(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ac(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function e0(){}function e_(n,i,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var _e=bc(C);g.call(_e)}}var C=Zm(i,c,n,0,null,!1,!1,"",e0);return n._reactRootContainer=C,n[is]=C.current,Wo(n.nodeType===8?n.parentNode:n),ma(),C}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var V=c;c=function(){var _e=bc(j);V.call(_e)}}var j=Qd(n,0,!1,null,null,!1,!1,"",e0);return n._reactRootContainer=j,n[is]=j.current,Wo(n.nodeType===8?n.parentNode:n),ma(function(){wc(i,j,a,c)}),j}function Rc(n,i,a,c,d){var g=a._reactRootContainer;if(g){var C=g;if(typeof d=="function"){var V=d;d=function(){var j=bc(C);V.call(j)}}wc(i,C,n,d)}else C=e_(a,i,n,d,c);return bc(C)}h=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Xe(i.pendingLanes);a!==0&&(Dn(i,a|1),Oi(i,kt()),(nn&6)===0&&(io=kt()+500,Ns()))}break;case 13:ma(function(){var c=os(n,1);if(c!==null){var d=Ti();br(c,n,1,d)}}),ef(n,1)}},O=function(n){if(n.tag===13){var i=os(n,134217728);if(i!==null){var a=Ti();br(i,n,134217728,a)}ef(n,134217728)}},le=function(n){if(n.tag===13){var i=ks(n),a=os(n,i);if(a!==null){var c=Ti();br(a,n,i,c)}ef(n,i)}},we=function(){return yt},Ae=function(n,i){var a=yt;try{return yt=n,i()}finally{yt=a}},rt=function(n,i,a){switch(i){case"input":if(vt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Xl(c);if(!d)throw Error(t(90));dt(c),vt(c,d)}}}break;case"textarea":tn(n,a);break;case"select":i=a.value,i!=null&&Ft(n,!!a.multiple,i,!1)}},Me=jd,Y=ma;var t_={usingClientEntryPoint:!1,Events:[jo,Wa,Xl,Se,ye,jd]},ol={findFiberByHostInstance:oa,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},n_={bundleType:ol.bundleType,version:ol.version,rendererPackageName:ol.rendererPackageName,rendererConfig:ol.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Gi(n),n===null?null:n.stateNode},findFiberByHostInstance:ol.findFiberByHostInstance||Qv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cc.isDisabled&&Cc.supportsFiber)try{ae=Cc.inject(n_),oe=Cc}catch{}}return Fi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=t_,Fi.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nf(i))throw Error(t(200));return Jv(n,i,null,a)},Fi.createRoot=function(n,i){if(!nf(n))throw Error(t(299));var a=!1,c="",d=Qm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Qd(n,1,!1,null,null,a,!1,c,d),n[is]=i.current,Wo(n.nodeType===8?n.parentNode:n),new tf(i)},Fi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Gi(i),n=n===null?null:n.stateNode,n},Fi.flushSync=function(n){return ma(n)},Fi.hydrate=function(n,i,a){if(!Ac(i))throw Error(t(200));return Rc(null,n,i,!0,a)},Fi.hydrateRoot=function(n,i,a){if(!nf(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",C=Qm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(C=a.onRecoverableError)),i=Zm(i,null,n,1,a??null,d,!1,g,C),n[is]=i.current,Wo(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Tc(i)},Fi.render=function(n,i,a){if(!Ac(i))throw Error(t(200));return Rc(null,n,i,!1,a)},Fi.unmountComponentAtNode=function(n){if(!Ac(n))throw Error(t(40));return n._reactRootContainer?(ma(function(){Rc(null,null,n,!1,function(){n._reactRootContainer=null,n[is]=null})}),!0):!1},Fi.unstable_batchedUpdates=jd,Fi.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Ac(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Rc(n,i,a,!1,c)},Fi.version="18.3.1-next-f1338f8080-20240426",Fi}var l0;function d_(){if(l0)return af.exports;l0=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),af.exports=u_(),af.exports}var c0;function f_(){if(c0)return Pc;c0=1;var s=d_();return Pc.createRoot=s.createRoot,Pc.hydrateRoot=s.hydrateRoot,Pc}var h_=f_();const p_=vg(h_),_g="no_mires_abajo_playstore_v3",uu=[{code:"AR",flag:"🇦🇷",name:"Argentina",label:"🇦🇷 AR (Argentina)"},{code:"UY",flag:"🇺🇾",name:"Uruguay",label:"🇺🇾 UY (Uruguay)"},{code:"CL",flag:"🇨🇱",name:"Chile",label:"🇨🇱 CL (Chile)"},{code:"BR",flag:"🇧🇷",name:"Brasil",label:"🇧🇷 BR (Brasil)"},{code:"PY",flag:"🇵🇾",name:"Paraguay",label:"🇵🇾 PY (Paraguay)"},{code:"BO",flag:"🇧🇴",name:"Bolivia",label:"🇧🇴 BO (Bolivia)"},{code:"PE",flag:"🇵🇪",name:"Perú",label:"🇵🇪 PE (Perú)"},{code:"CO",flag:"🇨🇴",name:"Colombia",label:"🇨🇴 CO (Colombia)"},{code:"MX",flag:"🇲🇽",name:"México",label:"🇲🇽 MX (México)"},{code:"ES",flag:"🇪🇸",name:"España",label:"🇪🇸 ES (España)"},{code:"US",flag:"🇺🇸",name:"EE.UU.",label:"🇺🇸 US (EE.UU.)"},{code:"IT",flag:"🇮🇹",name:"Italia",label:"🇮🇹 IT (Italia)"},{code:"GB",flag:"🇬🇧",name:"Reino Unido",label:"🇬🇧 GB (Reino Unido)"},{code:"JP",flag:"🇯🇵",name:"Japón",label:"🇯🇵 JP (Japón)"}];function m_(s){return s&&uu.find(t=>t.code===s||t.flag===s)||uu[0]}const gs=[{index:0,flag:"🇦🇷",name:{es:"Buenos Aires",en:"Buenos Aires"},monumentName:{es:"Obelisco y Puente de la Mujer",en:"Obelisk & Puente de la Mujer"},weatherLabel:{es:"Brisa Nocturna y Reflectores",en:"Night Breeze & Searchlights"},skyTop:"#040a1c",skyMid:"#0b1d42",skyBot:"#13315c",winColor:"#fef08a",accentColor:"#38bdf8",weather:"breeze",weatherArchetype:"urban",windStrength:.42,monument:"obelisco"},{index:1,flag:"🇧🇷",name:{es:"Río de Janeiro",en:"Rio de Janeiro"},monumentName:{es:"Cristo Redentor Iluminado",en:"Illuminated Christ the Redeemer"},weatherLabel:{es:"Brasa Nocturna Carioca",en:"Carioca Warm Night Haze"},skyTop:"#12091c",skyMid:"#261438",skyBot:"#422040",winColor:"#fde047",accentColor:"#4ade80",weather:"haze",weatherArchetype:"golden_embers",windStrength:.49,monument:"cristo"},{index:2,flag:"🇲🇽",name:{es:"CDMX",en:"Mexico City"},monumentName:{es:"Torre Latinoamericana y El Ángel",en:"Torre Latinoamericana & The Angel"},weatherLabel:{es:"Polvo Dorado de Altura",en:"High-Altitude Golden Dust"},skyTop:"#140c05",skyMid:"#2d1b0b",skyBot:"#4a2c11",winColor:"#fbbf24",accentColor:"#f59e0b",weather:"haze",weatherArchetype:"golden_embers",windStrength:.56,monument:"angel"},{index:3,flag:"🇺🇸",name:{es:"Nueva York",en:"New York"},monumentName:{es:"Estatua de la Libertad y Empire State",en:"Statue of Liberty & Empire State"},weatherLabel:{es:"Reflectores de Manhattan",en:"Manhattan Sky Searchlights"},skyTop:"#040814",skyMid:"#0f1b38",skyBot:"#1e325c",winColor:"#e0f2fe",accentColor:"#38bdf8",weather:"steam",weatherArchetype:"urban",windStrength:.63,monument:"liberty_empire"},{index:4,flag:"🇺🇸",name:{es:"Chicago",en:"Chicago"},monumentName:{es:"Willis Tower (Ciudad del Viento)",en:"Willis Tower (Windy City)"},weatherLabel:{es:"Ráfagas del Lago Michigan",en:"Lake Michigan Gusts"},skyTop:"#060c1e",skyMid:"#132448",skyBot:"#1f3a68",winColor:"#bae6fd",accentColor:"#38bdf8",weather:"gusts",weatherArchetype:"urban",windStrength:.71,monument:"willis"},{index:5,flag:"🇨🇦",name:{es:"Toronto",en:"Toronto"},monumentName:{es:"Silueta de la CN Tower",en:"CN Tower Silhouette"},weatherLabel:{es:"Ventisca Helada de Altura",en:"High-Altitude Ice Blizzard"},skyTop:"#071226",skyMid:"#102a4c",skyBot:"#1c4472",winColor:"#e0f2fe",accentColor:"#7dd3fc",weather:"snow",weatherArchetype:"blizzard",windStrength:.78,monument:"cntower"},{index:6,flag:"🇬🇧",name:{es:"Londres",en:"London"},monumentName:{es:"Big Ben y London Eye Giratorio",en:"Big Ben & Rotating London Eye"},weatherLabel:{es:"Niebla Profunda del Támesis",en:"Thames Nocturnal Mist"},skyTop:"#050a14",skyMid:"#0f1e36",skyBot:"#1c3456",winColor:"#fecaca",accentColor:"#38bdf8",weather:"fog",weatherArchetype:"urban",windStrength:.85,monument:"londoneye"},{index:7,flag:"🇫🇷",name:{es:"París",en:"Paris"},monumentName:{es:"Torre Eiffel y Faro Giratorio",en:"Eiffel Tower & Rotating Beacon"},weatherLabel:{es:"Haces de Luz Ámbar/Dorado",en:"Amber/Gold Nocturnal Beams"},skyTop:"#06091c",skyMid:"#121d42",skyBot:"#1e3266",winColor:"#fde68a",accentColor:"#fbbf24",weather:"gusts",weatherArchetype:"golden_embers",windStrength:.92,monument:"eiffel"},{index:8,flag:"🇪🇸",name:{es:"Madrid",en:"Madrid"},monumentName:{es:"Cuatro Torres Business Area",en:"Cuatro Torres Skyline"},weatherLabel:{es:"Ventisca Fría de la Sierra",en:"Sierra High-Altitude Gale"},skyTop:"#081326",skyMid:"#14294a",skyBot:"#214270",winColor:"#bae6fd",accentColor:"#38bdf8",weather:"snow",weatherArchetype:"blizzard",windStrength:.99,monument:"cuatrotorres"},{index:9,flag:"🇷🇺",name:{es:"Moscú",en:"Moscow"},monumentName:{es:"Cúpulas de San Basilio con Estrellas",en:"Saint Basil's Onion Domes"},weatherLabel:{es:"Ventisca Invernal Rusa",en:"Russian Winter Blizzard"},skyTop:"#06101c",skyMid:"#122640",skyBot:"#1e3e64",winColor:"#a5f3fc",accentColor:"#f43f5e",weather:"snow",weatherArchetype:"blizzard",windStrength:1.06,monument:"stbasil"},{index:10,flag:"🇹🇷",name:{es:"Estambul",en:"Istanbul"},monumentName:{es:"Puente del Bósforo y Minaretes",en:"Bosphorus Bridge & Minarets"},weatherLabel:{es:"Brasa Dorada del Estrecho",en:"Bosphorus Golden Ember Wind"},skyTop:"#160b18",skyMid:"#31152e",skyBot:"#522338",winColor:"#fde047",accentColor:"#f59e0b",weather:"gusts",weatherArchetype:"golden_embers",windStrength:1.13,monument:"bosphorus"},{index:11,flag:"🇪🇬",name:{es:"El Cairo",en:"Cairo"},monumentName:{es:"Las Tres Grandes Pirámides de Giza",en:"Three Great Pyramids of Giza"},weatherLabel:{es:"Tormenta de Polvo Dorado",en:"Golden Desert Dust Storm"},skyTop:"#1a0d04",skyMid:"#422009",skyBot:"#6b3610",winColor:"#fed7aa",accentColor:"#fde047",weather:"sand",weatherArchetype:"golden_embers",windStrength:1.2,monument:"pyramids"},{index:12,flag:"🇦🇪",name:{es:"Dubái",en:"Dubai"},monumentName:{es:"Aguja del Burj Khalifa (828m)",en:"Burj Khalifa Spire (828m)"},weatherLabel:{es:"Brasa Ámbar del Golfo",en:"Gulf Amber Thermal Dust"},skyTop:"#180d04",skyMid:"#361f09",skyBot:"#593310",winColor:"#fde047",accentColor:"#00f2fe",weather:"lasers",weatherArchetype:"golden_embers",windStrength:1.28,monument:"burjkhalifa"},{index:13,flag:"🇮🇳",name:{es:"Mumbai",en:"Mumbai"},monumentName:{es:"Puente Colgante Sea Link",en:"Bandra-Worli Sea Link"},weatherLabel:{es:"Lluvia Diagonal de Monzón",en:"Diagonal Monsoon Neon Rain"},skyTop:"#0b0620",skyMid:"#1c1042",skyBot:"#2f1b68",winColor:"#fbcfe8",accentColor:"#e879f9",weather:"monsoon",weatherArchetype:"cyber_rain",windStrength:1.35,monument:"sealink"},{index:14,flag:"🇹🇭",name:{es:"Bangkok",en:"Bangkok"},monumentName:{es:"Torre MahaNakhon Pixelada",en:"MahaNakhon Pixel Tower"},weatherLabel:{es:"Lluvia Eléctrica Tropical",en:"Tropical Neon Downpour"},skyTop:"#0c0622",skyMid:"#1e1148",skyBot:"#331c6e",winColor:"#fde047",accentColor:"#ec4899",weather:"lightning",weatherArchetype:"cyber_rain",windStrength:1.42,monument:"mahanakhon"},{index:15,flag:"🇸🇬",name:{es:"Singapur",en:"Singapore"},monumentName:{es:"3 Torres Marina Bay Sands",en:"Marina Bay Sands SkyPark"},weatherLabel:{es:"Lluvia Neón de la Bahía",en:"Marina Bay Cyber Rain"},skyTop:"#04091e",skyMid:"#0d1d45",skyBot:"#18346e",winColor:"#a5f3fc",accentColor:"#00f2fe",weather:"lasers",weatherArchetype:"cyber_rain",windStrength:1.5,monument:"marinabay"},{index:16,flag:"🇭🇰",name:{es:"Hong Kong",en:"Hong Kong"},monumentName:{es:"Bahía Victoria y Bank of China",en:"Victoria Harbour & Bank of China"},weatherLabel:{es:"Tifón Cyberpunk Neón",en:"Neon Cyberpunk Typhoon"},skyTop:"#040a1c",skyMid:"#0c2040",skyBot:"#153a66",winColor:"#6ee7b7",accentColor:"#00f2fe",weather:"typhoon",weatherArchetype:"cyber_rain",windStrength:1.58,monument:"hkharbor"},{index:17,flag:"🇰🇷",name:{es:"Seúl",en:"Seoul"},monumentName:{es:"Lotte World Tower Cyberpunk",en:"Lotte World Tower Cyberpunk"},weatherLabel:{es:"Lluvia Neón Cian/Magenta",en:"Cyan/Magenta Cyber Rain"},skyTop:"#050622",skyMid:"#12184f",skyBot:"#222d7a",winColor:"#7dd3fc",accentColor:"#f43f5e",weather:"cyber",weatherArchetype:"cyber_rain",windStrength:1.66,monument:"lotte"},{index:18,flag:"🇦🇺",name:{es:"Sídney",en:"Sydney"},monumentName:{es:"Velas de la Ópera de Sídney",en:"Sydney Opera House Sails"},weatherLabel:{es:"Ventisca Austral Oceánica",en:"Southern Ocean Gale Blizzard"},skyTop:"#040e21",skyMid:"#0b264f",skyBot:"#16427d",winColor:"#f1f5f9",accentColor:"#38bdf8",weather:"gusts",weatherArchetype:"blizzard",windStrength:1.75,monument:"opera"},{index:19,flag:"🇯🇵",name:{es:"Tokio",en:"Tokyo"},monumentName:{es:"Torre de Tokio y Arco Torii Luminoso",en:"Tokyo Tower & Luminous Torii Gate"},weatherLabel:{es:"Tormenta Cyberpunk Final",en:"Ultimate Cyberpunk Neon Storm"},skyTop:"#090420",skyMid:"#1b0b45",skyBot:"#32146e",winColor:"#fda4af",accentColor:"#ef4444",weather:"lightning",weatherArchetype:"cyber_rain",windStrength:1.85,monument:"tokyotower"}],cf=[{id:"vip_dubai",index:20,flag:"🇦🇪",name:{es:"Dubái Sky-Bridge VIP",en:"Dubai Sky-Bridge VIP"},desc:{es:"Cruce entre las torres más altas del mundo con tormenta de oro y pago x3.",en:"Crossing between the tallest towers in the world with golden storm & x3 payout."},weatherLabel:{es:"Tormenta de Oro 24K VIP",en:"24K Gold Storm VIP"},weatherArchetype:"golden_embers",accentColor:"#fde047",winColor:"#fef08a",windStrength:1.25,monument:"burjkhalifa",rewardMult:3,gemBonus:25,gemUnlockCost:350,usdPrice:"$1.99 USD"},{id:"vip_vegas",index:21,flag:"🇺🇸",name:{es:"Las Vegas Neon Strip VIP",en:"Las Vegas Neon Strip VIP"},desc:{es:"Luces de casino hiper-brillantes y recompensas triples x3 LP y Gemas.",en:"Hyper-bright casino lights and triple x3 LP & Gems rewards."},weatherLabel:{es:"Lluvia de Neón y Fichas VIP",en:"Casino Neon Rain VIP"},weatherArchetype:"cyber_rain",accentColor:"#f43f5e",winColor:"#fde047",windStrength:1.32,monument:"vegas_strip",rewardMult:3,gemBonus:35,gemUnlockCost:400,usdPrice:"$2.49 USD"},{id:"vip_monaco",index:22,flag:"🇲🇨",name:{es:"Mónaco Casino Royal VIP",en:"Monaco Casino Royal VIP"},desc:{es:"Noche de gala sobre la bahía de Montecarlo con pago triple de monedas.",en:"Gala night over Monte Carlo bay with triple coin payouts."},weatherLabel:{es:"Destellos Dorados de Gala",en:"Royal Golden Sparkles"},weatherArchetype:"golden_embers",accentColor:"#fbbf24",winColor:"#fef9c3",windStrength:1.18,monument:"monaco_casino",rewardMult:3,gemBonus:30,gemUnlockCost:400,usdPrice:"$2.49 USD"},{id:"vip_alps",index:23,flag:"🇨🇭",name:{es:"Alpes Suizos Nocturnos VIP",en:"Swiss Alps Nocturnal VIP"},desc:{es:"Cruce extremo entre teleféricos de alta montaña bajo aurora boreal.",en:"Extreme crossing between high-mountain cable cars under the Aurora Borealis."},weatherLabel:{es:"Aurora Boreal y Ventisca Alpina",en:"Aurora Borealis & Alpine Gale"},weatherArchetype:"blizzard",accentColor:"#4ade80",winColor:"#a5f3fc",windStrength:1.45,monument:"swiss_alps",rewardMult:3.5,gemBonus:45,gemUnlockCost:450,usdPrice:"$2.99 USD"}],Lc=[{id:"pole_basic",icon:"🦯",name:{es:"Barra de Acero Urbano",en:"Urban Steel Pole"},badge:{es:"GRATIS • BASE 1.0x",en:"FREE • BASE 1.0x"},desc:{es:"Estabilidad base 1.0x con núcleo láser cian estándar.",en:"Base 1.0x stability with standard cyan laser core."},currency:"free",cost:0,gemCost:0,usdPrice:null,isPro:!1,isVipOnly:!1,gravityReduction:0,stepDamp:0,catchRadiusBonus:0,scoreMult:1,coinMult:1,noCatchRecoil:!1,autoSaveFall:!1,poleScaleX:1,coreHex:14742270,glowHex:62206,tipHex:62206,hasGyroRings:!1},{id:"pole_carbon",icon:"⚡",name:{es:"Barra de Fibra de Carbono",en:"Carbon Fiber Pole"},badge:{es:"-18% GRAVEDAD • +LARGO 3D",en:"-18% GRAVITY • +3D LENGTH"},desc:{es:"Reduce la gravedad de inclinación un 18% y aumenta el largo visual de la barra en 3D.",en:"Reduces tipping gravity by 18% and extends the 3D pole length."},currency:"coins",cost:14500,gemCost:140,usdPrice:null,isPro:!1,isVipOnly:!1,gravityReduction:.18,stepDamp:.1,catchRadiusBonus:.05,scoreMult:1.1,coinMult:1.1,noCatchRecoil:!1,autoSaveFall:!1,poleScaleX:1.22,coreHex:14482663,glowHex:2282478,tipHex:4906624,hasGyroRings:!1},{id:"pole_gyro",icon:"🌀",name:{es:"Barra Giroscópica Neón",en:"Neon Gyroscopic Pole"},badge:{es:"-32% INCLINACIÓN • -30% PISADA",en:"-32% TILT • -30% STEP SWAY"},desc:{es:"Reduce la inclinación un 32% y amortigua el impacto lateral de las pisadas rápidas un 30%.",en:"Reduces tilt by 32% and dampens fast-step lateral impact by 30%."},currency:"coins",cost:48e3,gemCost:290,usdPrice:null,isPro:!1,isVipOnly:!1,gravityReduction:.32,stepDamp:.3,catchRadiusBonus:.1,scoreMult:1.25,coinMult:1.25,noCatchRecoil:!1,autoSaveFall:!1,poleScaleX:1.34,coreHex:15984895,glowHex:11032055,tipHex:62206,hasGyroRings:!0},{id:"pole_quantum",icon:"👑",name:{es:"👑 Barra Láser Cuántica",en:"👑 Quantum Laser Pole"},badge:{es:"EXCLUSIVA PAGA • -50% GRAVEDAD • +25% ARO • x1.5 PTS",en:"PRO EXCLUSIVE • -50% GRAVITY • +25% RING • x1.5 PTS"},desc:{es:"Reduce la inclinación un 50%, agranda el aro de captura de malabares un 25% y otorga Multiplicador de Puntos x1.5.",en:"Reduces tilt by 50%, enlarges juggle catch rings by 25% and grants x1.5 Score Multiplier."},currency:"gems_or_usd",cost:450,gemCost:450,usdPrice:"$1.99 USD",isPro:!0,isVipOnly:!1,gravityReduction:.5,stepDamp:.4,catchRadiusBonus:.25,scoreMult:1.5,coinMult:1.5,noCatchRecoil:!1,autoSaveFall:!1,poleScaleX:1.45,coreHex:16770278,glowHex:16007006,tipHex:62206,hasGyroRings:!0},{id:"pole_imperial",icon:"👑",name:{es:"👑 Barra Gravitatoria Imperial",en:"👑 Imperial Graviton Pole"},badge:{es:"PASE VIP • +65% ESTABILIDAD • CERO RETROCESO • AUTO-SALVADA • x2.0",en:"VIP PASS • +65% STABILITY • ZERO RECOIL • AUTO-SAVE • x2.0"},desc:{es:"Estabilidad máxima (+65%), anula el retroceso al atrapar esferas, salva automáticamente de la 1ra caída por nivel y otorga Multiplicador x2.0.",en:"Max stability (+65%), zero catch recoil, auto-saves first fall per level and grants x2.0 Multiplier."},currency:"vip_or_usd",cost:900,gemCost:900,usdPrice:"$3.99 USD",isPro:!0,isVipOnly:!0,gravityReduction:.65,stepDamp:.55,catchRadiusBonus:.3,scoreMult:2,coinMult:2,noCatchRecoil:!0,autoSaveFall:!0,poleScaleX:1.56,coreHex:16710083,glowHex:16638023,tipHex:16096779,hasGyroRings:!0}],Aa={urbano:{id:"urbano",key:"urbano",legacyId:"skin_1",styleType:"urbano",icon:"🧥",currency:"coins",price:0,cost:0,gemCost:0,priceUSD:null,usdPrice:null,isPro:!1,isVipOnly:!1,mult:1,bonusMult:1,multLabel:"x1",windResist:0,windReduction:0,gravityMod:1,gravityReduction:0,catchBonus:1,catchWindowBonus:0,recoveryBonus:0,stepDampBonus:0,freeShields:0,accessory:"capucha_urbana",torsoColor:"#1e293b",torsoEmissive:"#0b1829",torsoEmissiveIntensity:.35,limbsColor:"#0f172a",limbsEmissive:"#070d19",limbsEmissiveIntensity:.25,neonStripColor:"#38bdf8",emissiveIntensity:1.35,shoesColor:"#334155",soleColor:"#38bdf8",glovesColor:"#334155",wristColor:"#38bdf8",headColor:"#1e293b",headbandColor:"#38bdf8",ribbonColor:"#38bdf8",metalness:.35,roughness:.55,jacketHex:1976635,jacketEmissiveHex:727081,pantsHex:988970,bootHex:3359061,soleHex:3718648,gloveHex:3359061,wristHex:3718648,headHex:1976635,headbandHex:3718648,ribbonHex:3718648,dorsalHex:3718648,rimHex:3718648,rimStrength:1.15,hoodieColor:"#1e293b",pantsColor:"#0f172a",trimColor:"#38bdf8",shoeColor:"#334155",glowColor:"#38bdf8",paletteSwatches:["#1e293b","#0f172a","#38bdf8","#334155"],paletteLabel:{es:"Grafito + Cian Urbano",en:"Graphite + Urban Cyan"},goldTrail:!1,badge:{es:"GRATIS POR DEFECTO • MULTI x1",en:"FREE DEFAULT • x1 MULTI"},name:{es:"Urbano Callejero (x1)",en:"Street Urban (x1)"},desc:{es:"Traje gris grafito (#1e293b), pantalón cargo negro (#0f172a), líneas dorsales cian suave (#38bdf8), botas oscuras y capucha urbana.",en:"Graphite grey suit (#1e293b), black cargo pants (#0f172a), soft cyan dorsal lines (#38bdf8), dark boots and urban hood."}},night_runner:{id:"night_runner",key:"night_runner",legacyId:"skin_2",styleType:"night_runner",icon:"🏃",currency:"coins",price:8500,cost:8500,gemCost:0,priceUSD:null,usdPrice:null,isPro:!1,isVipOnly:!1,mult:1.2,bonusMult:1.2,multLabel:"x1.2",windResist:.1,windReduction:.1,gravityMod:.92,gravityReduction:.08,catchBonus:1.05,catchWindowBonus:.05,recoveryBonus:.1,stepDampBonus:.08,freeShields:0,accessory:"tiras_reflectivas_blancas",torsoColor:"#090d16",torsoEmissive:"#1e293b",torsoEmissiveIntensity:.45,limbsColor:"#090d16",limbsEmissive:"#111827",limbsEmissiveIntensity:.35,neonStripColor:"#ffffff",emissiveIntensity:2.2,shoesColor:"#a3e635",soleColor:"#ffffff",glovesColor:"#111827",wristColor:"#ffffff",headColor:"#090d16",headbandColor:"#ffffff",ribbonColor:"#ffffff",metalness:.45,roughness:.35,jacketHex:593174,jacketEmissiveHex:1976635,pantsHex:593174,bootHex:10741301,soleHex:16777215,gloveHex:1120295,wristHex:16777215,headHex:593174,headbandHex:16777215,ribbonHex:16777215,dorsalHex:16777215,rimHex:10741301,rimStrength:1.45,hoodieColor:"#090d16",pantsColor:"#090d16",trimColor:"#ffffff",shoeColor:"#a3e635",glowColor:"#a3e635",paletteSwatches:["#090d16","#ffffff","#a3e635"],paletteLabel:{es:"Reflectivo Blanco + Lima Flúor",en:"Reflective White + Fluor Lime"},goldTrail:!1,badge:{es:"MULTI x1.2 • -10% VIENTO • -8% GRAVEDAD • +5% CAPTURA",en:"x1.2 MULTI • -10% WIND • -8% GRAVITY • +5% CATCH"},name:{es:"Night Runner (x1.2)",en:"Night Runner (x1.2)"},desc:{es:"Rompevientos negro azabache (#090d16), tiras reflectivas blancas puras ultra-brillantes (#ffffff) en espalda, brazos y piernas, zapatillas verde lima flúor (#a3e635) y vincha blanca.",en:"Jet-black windbreaker (#090d16), ultra-bright white reflective strips (#ffffff) on back, arms & legs, fluor lime sneakers (#a3e635) and white headband."}},infiltrado:{id:"infiltrado",key:"infiltrado",legacyId:"skin_3",styleType:"infiltrado",icon:"⚡",currency:"coins",price:25e3,cost:25e3,gemCost:0,priceUSD:null,usdPrice:null,isPro:!1,isVipOnly:!1,mult:1.5,bonusMult:1.5,multLabel:"x1.5",windResist:.2,windReduction:.2,gravityMod:.88,gravityReduction:.12,catchBonus:1.1,catchWindowBonus:.1,recoveryBonus:.12,stepDampBonus:.15,freeShields:0,accessory:"arnes_x_tactico_cian",torsoColor:"#05070b",torsoEmissive:"#003554",torsoEmissiveIntensity:.65,limbsColor:"#05070b",limbsEmissive:"#00243d",limbsEmissiveIntensity:.5,neonStripColor:"#00f2fe",emissiveIntensity:2.5,shoesColor:"#081426",soleColor:"#00f2fe",glovesColor:"#081426",wristColor:"#00f2fe",headColor:"#05070b",headbandColor:"#00f2fe",ribbonColor:"#00f2fe",metalness:.6,roughness:.3,jacketHex:329483,jacketEmissiveHex:13652,pantsHex:329483,bootHex:529446,soleHex:62206,gloveHex:529446,wristHex:62206,headHex:329483,headbandHex:62206,ribbonHex:62206,dorsalHex:62206,rimHex:62206,rimStrength:1.6,hoodieColor:"#05070b",pantsColor:"#05070b",trimColor:"#00f2fe",shoeColor:"#00f2fe",glowColor:"#00f2fe",paletteSwatches:["#05070b","#00f2fe","#0284c7"],paletteLabel:{es:"Arnés Táctico X + Neón Cian",en:"Tactical X-Harness + Cyan Neon"},goldTrail:!1,badge:{es:"MULTI x1.5 • -20% VIENTO • -12% GRAVEDAD • +10% CAPTURA",en:"x1.5 MULTI • -20% WIND • -12% GRAVITY • +10% CATCH"},name:{es:"Infiltrado Táctico (x1.5)",en:"Tactical Infiltrator (x1.5)"},desc:{es:"Traje táctico negro mate (#05070b), arnés cruzado en X en la espalda de neón cian intenso (#00f2fe), hombreras tácticas, visor nocturno cian y talones/muñecas cian luminosos.",en:"Matte black tactical suit (#05070b), intense cyan neon X-harness (#00f2fe) on the back, tactical shoulder pads, cyan night visor and glowing cyan heels/wrists."}},ilusionista:{id:"ilusionista",key:"ilusionista",legacyId:"skin_4",styleType:"ilusionista",icon:"🎩",currency:"coins",price:6e4,cost:6e4,gemCost:0,priceUSD:null,usdPrice:null,isPro:!1,isVipOnly:!1,mult:2,bonusMult:2,multLabel:"x2",windResist:.25,windReduction:.25,gravityMod:.85,gravityReduction:.15,catchBonus:1.25,catchWindowBonus:.25,recoveryBonus:.15,stepDampBonus:.2,freeShields:0,accessory:"chaleco_purpura_guantes_plata",torsoColor:"#2e1065",torsoEmissive:"#581c87",torsoEmissiveIntensity:.85,limbsColor:"#1e0a45",limbsEmissive:"#3b0764",limbsEmissiveIntensity:.65,neonStripColor:"#c084fc",emissiveIntensity:2.4,shoesColor:"#2e1065",soleColor:"#c084fc",glovesColor:"#f8fafc",wristColor:"#f8fafc",headColor:"#2e1065",headbandColor:"#f8fafc",ribbonColor:"#c084fc",metalness:.55,roughness:.28,jacketHex:3018853,jacketEmissiveHex:5774471,pantsHex:1968709,bootHex:3018853,soleHex:12616956,gloveHex:16317180,wristHex:16317180,headHex:3018853,headbandHex:16317180,ribbonHex:12616956,dorsalHex:12616956,rimHex:12616956,rimStrength:1.65,hoodieColor:"#2e1065",pantsColor:"#1e0a45",trimColor:"#c084fc",shoeColor:"#c084fc",glowColor:"#c084fc",paletteSwatches:["#2e1065","#c084fc","#f8fafc","#a855f7"],paletteLabel:{es:"Púrpura Imperial + Guantes Plata",en:"Imperial Purple + Silver Gloves"},goldTrail:!1,badge:{es:"MULTI x2.0 • -25% VIENTO • -15% GRAVEDAD • +25% CAPTURA",en:"x2.0 MULTI • -25% WIND • -15% GRAVITY • +25% CATCH"},name:{es:"Ilusionista de Altura (x2)",en:"High-Wire Illusionist (x2)"},desc:{es:"Chaleco sastrero púrpura imperial oscuro (#2e1065), líneas y circuito dorsal en violeta neón (#c084fc) y plata (#f8fafc), cinta larga violeta al viento y guantes blancos/plateados brillantes en las manos.",en:"Dark imperial purple tailored vest (#2e1065), neon violet (#c084fc) & silver (#f8fafc) dorsal circuit, long violet wind ribbon and bright silver/white gloves."}},shinobi:{id:"shinobi",key:"shinobi",legacyId:"skin_5",styleType:"shinobi",icon:"🥷",currency:"coins",price:135e3,cost:135e3,gemCost:0,priceUSD:null,usdPrice:null,isPro:!1,isVipOnly:!1,mult:3,bonusMult:3,multLabel:"x3",windResist:.35,windReduction:.35,gravityMod:.65,gravityReduction:.35,catchBonus:1.3,catchWindowBonus:.3,recoveryBonus:.2,stepDampBonus:.35,freeShields:0,accessory:"single_katana_3d",torsoColor:"#18060c",torsoEmissive:"#4c0519",torsoEmissiveIntensity:.85,limbsColor:"#120409",limbsEmissive:"#3b0413",limbsEmissiveIntensity:.65,neonStripColor:"#ff0055",emissiveIntensity:2.8,shoesColor:"#ef4444",soleColor:"#ff0055",glovesColor:"#1f0810",wristColor:"#ff0055",headColor:"#18060c",headbandColor:"#ff0055",ribbonColor:"#ff0055",metalness:.65,roughness:.25,jacketHex:1574412,jacketEmissiveHex:4982041,pantsHex:1180681,bootHex:15680580,soleHex:16711765,gloveHex:2033680,wristHex:16711765,headHex:1574412,headbandHex:16711765,ribbonHex:16711765,dorsalHex:16711765,rimHex:16711765,rimStrength:1.75,hoodieColor:"#18060c",pantsColor:"#120409",trimColor:"#ff0055",shoeColor:"#ef4444",glowColor:"#ff0055",paletteSwatches:["#18060c","#ff0055","#ef4444","#fbbf24"],paletteLabel:{es:"Carmesí Cyber + 1 Katana 3D",en:"Cyber Crimson + 1 Back Katana 3D"},goldTrail:!1,badge:{es:"MULTI x3.0 • -35% VIENTO • -35% GRAVEDAD • +30% CAPTURA",en:"x3.0 MULTI • -35% WIND • -35% GRAVITY • +30% CATCH"},name:{es:"Cyber-Shinobi Tokio (x3)",en:"Cyber-Shinobi Tokyo (x3)"},desc:{es:"Armadura ninja negra/carmesí (#18060c), circuito dorsal rojo láser incandescente (#ff0055), 1 Katana 3D cruzada en la espalda con vaina negra y empuñadura roja, bufanda roja larga al viento y botas magnéticas rojas (#ef4444).",en:"Black/crimson ninja armor (#18060c), glowing laser-red dorsal circuit (#ff0055), 1 3D Katana crossed on the back with black scabbard & red hilt, long red scarf and red magnetic boots (#ef4444)."}},ronin_gold:{id:"ronin_gold",key:"ronin_gold",legacyId:"skin_6",styleType:"ronin_gold",icon:"⚔️",currency:"usd",price:450,cost:450,gemCost:450,priceUSD:"$1.99 USD",usdPrice:"$1.99 USD",isPro:!0,isVipOnly:!1,proTag:{es:"👑 EXCLUSIVO PRO",en:"👑 PRO EXCLUSIVE"},mult:4,bonusMult:4,multLabel:"x4",windResist:.5,windReduction:.5,gravityMod:.6,gravityReduction:.4,catchBonus:1.35,catchWindowBonus:.35,recoveryBonus:.25,stepDampBonus:.4,freeShields:0,accessory:"dual_gold_katanas_samurai_shoulders",torsoColor:"#0c0a09",torsoEmissive:"#78350f",torsoEmissiveIntensity:.9,limbsColor:"#0c0a09",limbsEmissive:"#451a03",limbsEmissiveIntensity:.7,neonStripColor:"#f59e0b",emissiveIntensity:2.6,shoesColor:"#f59e0b",soleColor:"#fef08a",glovesColor:"#1c1917",wristColor:"#f59e0b",headColor:"#0c0a09",headbandColor:"#f59e0b",ribbonColor:"#fbbf24",metalness:.82,roughness:.2,jacketHex:789001,jacketEmissiveHex:7877903,pantsHex:789001,bootHex:16096779,soleHex:16707722,gloveHex:1841431,wristHex:16096779,headHex:789001,headbandHex:16096779,ribbonHex:16498468,dorsalHex:16096779,rimHex:16096779,rimStrength:1.85,hoodieColor:"#0c0a09",pantsColor:"#0c0a09",trimColor:"#f59e0b",shoeColor:"#f59e0b",glowColor:"#f59e0b",paletteSwatches:["#0c0a09","#f59e0b","#fbbf24","#fef08a"],paletteLabel:{es:"Laca Negra + 2 Katanas Oro",en:"Black Lacquer + Dual Gold Katanas"},goldTrail:!1,badge:{es:"👑 EXCLUSIVO PRO • MULTI x4 • -50% VIENTO • -40% GRAVEDAD • +35% CAPTURA",en:"👑 PRO EXCLUSIVE • x4 MULTI • -50% WIND • -40% GRAVITY • +35% CATCH"},name:{es:"👑 Ronin Imperial Dorado (x4)",en:"👑 Golden Imperial Ronin (x4)"},desc:{es:"Armadura samurái negra laqueada (#0c0a09) con placas y bordes de oro radiante (#f59e0b), hombreras samurái 3D doradas, 2 Katanas Doradas cruzadas en X en la espalda y botas doradas.",en:"Black lacquered samurai armor (#0c0a09) with radiant gold plates (#f59e0b), 3D golden samurai shoulder armor, 2 Golden Katanas crossed in X on the back and golden boots."}},quantum_specter:{id:"quantum_specter",key:"quantum_specter",legacyId:"skin_7",styleType:"quantum_specter",icon:"🌌",currency:"usd",price:680,cost:680,gemCost:680,priceUSD:"$2.99 USD",usdPrice:"$2.99 USD",isPro:!0,isVipOnly:!1,proTag:{es:"👑 EXCLUSIVO PRO",en:"👑 PRO EXCLUSIVE"},mult:5,bonusMult:5,multLabel:"x5",windResist:.6,windReduction:.6,gravityMod:.55,gravityReduction:.45,catchBonus:1.5,catchWindowBonus:.5,recoveryBonus:.3,stepDampBonus:.45,freeShields:0,accessory:"quantum_halo_3d",torsoColor:"#0284c7",torsoEmissive:"#00f2fe",torsoEmissiveIntensity:1.35,limbsColor:"#0369a1",limbsEmissive:"#00f2fe",limbsEmissiveIntensity:1.15,neonStripColor:"#00f2fe",emissiveIntensity:3.2,shoesColor:"#00f2fe",soleColor:"#ffffff",glovesColor:"#00f2fe",wristColor:"#ffffff",headColor:"#0284c7",headbandColor:"#ffffff",ribbonColor:"#00f2fe",metalness:.78,roughness:.16,jacketHex:165063,jacketEmissiveHex:62206,pantsHex:223649,bootHex:62206,soleHex:16777215,gloveHex:62206,wristHex:16777215,headHex:165063,headbandHex:16777215,ribbonHex:62206,dorsalHex:62206,rimHex:62206,rimStrength:1.95,hoodieColor:"#0284c7",pantsColor:"#0369a1",trimColor:"#00f2fe",shoeColor:"#00f2fe",glowColor:"#00f2fe",paletteSwatches:["#0284c7","#00f2fe","#38bdf8","#ffffff"],paletteLabel:{es:"Plasma Cian + Halo Holográfico 3D",en:"Cyan Plasma + 3D Holographic Halo"},goldTrail:!1,badge:{es:"👑 EXCLUSIVO PRO • MULTI x5 • -60% VIENTO • IMÁN MALABARES (+50% ARO)",en:"👑 PRO EXCLUSIVE • x5 MULTI • -60% WIND • JUGGLE MAGNET (+50% RING)"},name:{es:"👑 Espectro Cuántico (x5)",en:"👑 Quantum Specter (x5)"},desc:{es:"Cuerpo cibernético translúcido de energía azul eléctrica (#0284c7) y plasma cian incandescente (#00f2fe), anillo/halo holográfico 3D flotando detrás de la espalda, manos y pies de plasma puro.",en:"Translucent cybernetic body of electric blue energy (#0284c7) & incandescent cyan plasma (#00f2fe), 3D holographic halo floating behind the back, pure plasma hands and feet."}},immortal_legend:{id:"immortal_legend",key:"immortal_legend",legacyId:"skin_8",styleType:"immortal_legend",icon:"👑",currency:"usd",price:1100,cost:1100,gemCost:1100,priceUSD:"$4.99 USD",usdPrice:"$4.99 USD",isPro:!0,isVipOnly:!0,proTag:{es:"👑 EXCLUSIVO PRO / VIP",en:"👑 PRO / VIP EXCLUSIVE"},mult:8,bonusMult:8,multLabel:"x8",windResist:.7,windReduction:.7,gravityMod:.45,gravityReduction:.55,catchBonus:1.6,catchWindowBonus:.6,recoveryBonus:.4,stepDampBonus:.55,freeShields:1,accessory:"immortal_crown_3d_gold_trail",torsoColor:"#fbbf24",torsoEmissive:"#f59e0b",torsoEmissiveIntensity:1.45,limbsColor:"#fbbf24",limbsEmissive:"#d97706",limbsEmissiveIntensity:1.25,neonStripColor:"#fef08a",emissiveIntensity:3.4,shoesColor:"#fef08a",soleColor:"#ffffff",glovesColor:"#fef08a",wristColor:"#ffffff",headColor:"#fbbf24",headbandColor:"#fef08a",ribbonColor:"#fef08a",metalness:.95,roughness:.15,jacketHex:16498468,jacketEmissiveHex:16096779,pantsHex:16498468,bootHex:16707722,soleHex:16777215,gloveHex:16707722,wristHex:16777215,headHex:16498468,headbandHex:16707722,ribbonHex:16707722,dorsalHex:16707722,rimHex:16707722,rimStrength:2.1,hoodieColor:"#fbbf24",pantsColor:"#f59e0b",trimColor:"#fef08a",shoeColor:"#fef08a",glowColor:"#fde047",paletteSwatches:["#fbbf24","#fef08a","#f59e0b","#ffffff"],paletteLabel:{es:"Oro Líquido 24K + Corona Solar 3D",en:"24K Liquid Gold + 3D Solar Crown"},goldTrail:!0,badge:{es:"👑 EXCLUSIVO PRO / VIP • MULTI x8 • -70% VIENTO • -55% GRAVEDAD • +1 ESCUDO GRATIS",en:"👑 PRO / VIP EXCLUSIVE • x8 MULTI • -70% WIND • -55% GRAVITY • +1 FREE SHIELD"},name:{es:"👑 Leyenda Dorada Inmortal (x8)",en:"👑 Immortal Golden Legend (x8)"},desc:{es:"Cuerpo entero bañado en oro líquido metálico brillante (#fbbf24 / #fef08a), corona/halo solar 3D sobre la cabeza, hombreras imperiales, cinta de fuego dorado, estela continua de partículas de oro y 1 Escudo Anti-Caída gratis por nivel.",en:"Full body bathed in radiant metallic liquid gold (#fbbf24 / #fef08a), 3D solar crown/halo above the head, imperial shoulders, golden fire ribbon, continuous gold particle trail & 1 free Anti-Fall Shield per level."}}},Nc=Aa,g_={default:"urbano",urbano:"urbano",skin_1:"urbano",night_runner:"night_runner",skin_2:"night_runner",infiltrado:"infiltrado",skin_3:"infiltrado",ilusionista:"ilusionista",skin_4:"ilusionista",shinobi:"shinobi",skin_5:"shinobi",ronin_gold:"ronin_gold",skin_6:"ronin_gold",quantum_specter:"quantum_specter",skin_7:"quantum_specter",samurai:"ronin_gold",leyenda_dorada:"immortal_legend",immortal_legend:"immortal_legend",skin_8:"immortal_legend"};function Zi(s){return s?g_[s]||(Aa[s]?s:"urbano"):"urbano"}function xg(s){const e=Zi(s);return Aa[e]||Aa.urbano}const To=Object.values(Aa).map(s=>({...s,visual:s}));function Gs(s){const e=Zi(s);return To.find(t=>t.id===e||t.legacyId===s)||To[0]}const Ic=[{id:"mult_x2_coins",icon:"🪙",name:{es:"Multiplicador x2 de Monedas",en:"x2 Permanent Coin Multiplier"},badge:{es:"MONEDAS DEL JUEGO • x2 🪙",en:"IN-GAME COINS • x2 🪙"},desc:{es:"Duplica permanentemente todas las monedas ganadas en malabares y al cruzar azoteas.",en:"Permanently doubles all coins earned from juggling and clearing rooftops."},currency:"coins",cost:38e3,gemCost:260,usdPrice:null,isPro:!1,isVipOnly:!1,coinMult:2,lpMult:1},{id:"mult_x3_pro",icon:"👑",name:{es:"👑 Multiplicador x3 Pro de LP y Monedas",en:"👑 x3 Pro LP & Coin Multiplier"},badge:{es:"EXCLUSIVO PAGA / PASE VIP • x3 LP Y 🪙",en:"PRO / VIP PASS • x3 LP & 🪙"},desc:{es:"Triplica permanentemente tus Puntos de Liga (LP) para dominar el Ranking Online y tus Monedas.",en:"Permanently triples your League Points (LP) for the Online Leaderboard and your Coins."},currency:"vip_or_usd",cost:600,gemCost:600,usdPrice:"$2.99 USD",isPro:!0,isVipOnly:!0,coinMult:3,lpMult:3},{id:"mult_x5_ultra",icon:"🚀",name:{es:"👑 Multiplicador x5 Ultra de LP y Monedas",en:"👑 x5 Ultra LP & Coin Multiplier"},badge:{es:"EXCLUSIVO PACK PRO • x5 LP Y 🪙",en:"PRO PACK EXCLUSIVE • x5 LP & 🪙"},desc:{es:"Potencia máxima x5 en Puntos de Liga Online y Monedas en todas las ciudades y niveles.",en:"Maximum x5 boost to Online League Points and Coins across all cities and levels."},currency:"gems_or_usd",cost:1200,gemCost:1200,usdPrice:"$5.99 USD",isPro:!0,isVipOnly:!1,coinMult:5,lpMult:5}],yl=[{id:"balls",icon:"🎾",mult:1,unlockLevel:1,currency:"coins",cost:0,gemCost:0,name:{es:"Esferas Incandescentes",en:"Incandescent Orbs"},color:"#fde047"},{id:"torches",icon:"🔥",mult:2,unlockLevel:6,currency:"coins",cost:18500,gemCost:160,name:{es:"Antorchas de Plasma (x2)",en:"Plasma Torches (x2)"},color:"#f97316"},{id:"knives",icon:"🔪",mult:3,unlockLevel:16,currency:"coins",cost:42e3,gemCost:280,name:{es:"Dagas Láser Cian (x3)",en:"Cyan Laser Daggers (x3)"},color:"#00f2fe"},{id:"chainsaws",icon:"🪚",mult:5,unlockLevel:31,currency:"gems",cost:480,gemCost:480,name:{es:"👑 Sierras Neón Pro (x5)",en:"👑 Pro Neon Saws (x5)"},color:"#ef4444"},{id:"goldbars",icon:"🪙",mult:8,unlockLevel:60,currency:"gems",cost:950,gemCost:950,name:{es:"👑 Orbes Cuánticos 24K (x8)",en:"👑 24K Quantum Orbs (x8)"},color:"#fde047"}],v_=[{id:"pole",icon:"⚖️",maxLevel:10,statLabel:{es:"-4.8% Gravedad / Nv",en:"-4.8% Gravity / Lvl"},name:{es:"Núcleo de Inercia",en:"Inertia Core"},desc:{es:"Niveles 1-5 con Monedas (850 -> 30.600). Niveles 6-10 Élite Pro (Gemas / Pase VIP).",en:"Levels 1-5 with Coins (850 -> 30,600). Levels 6-10 Pro Elite (Gems / VIP Pass)."}},{id:"boots",icon:"🥾",maxLevel:10,statLabel:{es:"-5.2% Viento / Nv",en:"-5.2% Wind / Lvl"},name:{es:"Calzado Magnético",en:"Magnetic Footwear"},desc:{es:"Niveles 1-5 con Monedas (850 -> 30.600). Niveles 6-10 Élite Pro (Gemas / Pase VIP).",en:"Levels 1-5 with Coins (850 -> 30,600). Levels 6-10 Pro Elite (Gems / VIP Pass)."}},{id:"gloves",icon:"🧤",maxLevel:10,statLabel:{es:"+1.5% Ventana / Nv",en:"+1.5% Catch Window / Lvl"},name:{es:"Guantes Rítmicos",en:"Rhythmic Gloves"},desc:{es:"Niveles 1-5 con Monedas (850 -> 30.600). Niveles 6-10 Élite Pro (Gemas / Pase VIP).",en:"Levels 1-5 with Coins (850 -> 30,600). Levels 6-10 Pro Elite (Gems / VIP Pass)."}}];function u0(s){const e=Math.max(0,Math.min(10,s||0));if(e>=10)return{isMax:!0,isProTier:!0,coinCost:0,gemCost:0};if(e<5)return{isMax:!1,isProTier:!1,coinCost:Math.round(850*Math.pow(2.45,e)),gemCost:0};const t=e-5;return{isMax:!1,isProTier:!0,coinCost:0,gemCost:Math.round(140*Math.pow(1.45,t))}}const __=[{id:"r1",name:"Kaito_Skywalker",flag:"🇯🇵",country:"🇯🇵",baseLp:14200,lp:14200,badge:"👑"},{id:"r2",name:"Elena_Vertigo",flag:"🇪🇸",country:"🇪🇸",baseLp:11850,lp:11850,badge:"💎"},{id:"r3",name:"Marcus_Highwire",flag:"🇺🇸",country:"🇺🇸",baseLp:9400,lp:9400,badge:"🔥"},{id:"r4",name:"Lucas_SP",flag:"🇧🇷",country:"🇧🇷",baseLp:7200,lp:7200,badge:"⚡"},{id:"r5",name:"Valeria_BA",flag:"🇦🇷",country:"🇦🇷",baseLp:4850,lp:4850,badge:"🌟"},{id:"r6",name:"Liam_London",flag:"🇬🇧",country:"🇬🇧",baseLp:2600,lp:2600,badge:"🎯"},{id:"r7",name:"Mateo_CDMX",flag:"🇲🇽",country:"🇲🇽",baseLp:1150,lp:1150,badge:"👟"}],x_=[{id:"tier_1",rankLabel:"TOP 25",icon:"🥉",requiredLp:500,gems:40,coins:1e3,gemsReward:40,coinsReward:1e3,title:{es:"Bronce Urbano",en:"Urban Bronze"}},{id:"tier_2",rankLabel:"TOP 10",icon:"🥈",requiredLp:1500,gems:90,coins:2500,gemsReward:90,coinsReward:2500,title:{es:"Plata de Altura",en:"High-Wire Silver"}},{id:"tier_3",rankLabel:"TOP 5",icon:"🥇",requiredLp:3500,gems:180,coins:6e3,gemsReward:180,coinsReward:6e3,title:{es:"Oro Acrobático",en:"Acrobatic Gold"}},{id:"tier_4",rankLabel:"TOP 3",icon:"💎",requiredLp:7e3,gems:350,coins:15e3,gemsReward:350,coinsReward:15e3,title:{es:"Platino sin Red",en:"No-Net Platinum"}},{id:"tier_5",rankLabel:"TOP 1",icon:"👑",requiredLp:12e3,gems:750,coins:35e3,gemsReward:750,coinsReward:35e3,title:{es:"Leyenda Inmortal",en:"Immortal Legend"}}],y_=[{id:"bundle_vip_pass",icon:"👑",isVipPassBundle:!0,gems:1500,coins:5e4,leaguePts:1500,popular:!0,tag:"👑 ACTIVAR VIP ($4.99)",name:{es:"👑 PASE VIP PRO TEMPORADA",en:"👑 SEASON VIP PRO PASS"},perks:{es:["🔓 Desbloquea Mejoras Élite Nv. 6 a 10 en Armería","👑 Desbloquea las 4 Ciudades Exclusivas VIP","🦯 Incluye Barra Gravitatoria Imperial (x2.0 + Auto-Salvada)","🧥 Incluye Aspecto Leyenda Dorada Inmortal (x2.5 + Escudo)","+1.500 💎 Gemas y +50.000 🪙 Monedas al instante"],en:["🔓 Unlocks Elite Armory Upgrades Lvl 6 to 10","👑 Unlocks all 4 Exclusive VIP Cities","🦯 Includes Imperial Graviton Pole (x2.0 + Auto-Save)","🧥 Includes Immortal Golden Legend Skin (x2.5 + Shield)","+1,500 💎 Gems & +50,000 🪙 Coins instantly"]}},{id:"bundle_starter",icon:"⚡",gems:450,coins:18e3,leaguePts:300,popular:!1,tag:"💎 PACK PRO ($1.99)",name:{es:"Cofre Cuántico de Gemas",en:"Quantum Gem Chest"},perks:{es:["+450 💎 Gemas Premium + 18.000 🪙 Monedas","Ideal para Barra Láser Cuántica o Mejoras Nv. 6+"],en:["+450 💎 Premium Gems + 18,000 🪙 Coins","Ideal for Quantum Laser Pole or Lvl 6+ Upgrades"]}},{id:"bundle_legend",icon:"🚀",gems:1400,coins:85e3,leaguePts:2500,popular:!0,tag:"👑 PACK ULTRA ($5.99)",name:{es:"Cofre Leyenda Black & Gold",en:"Black & Gold Legend Chest"},perks:{es:["+1.400 💎 Gemas + 85.000 🪙 Monedas","Alcanza para Multiplicador x5 Ultra + Samurái Neón"],en:["+1,400 💎 Gems + 85,000 🪙 Coins","Enough for x5 Ultra Multiplier + Neon Samurai"]}}],d0={es:{title:"NO MIRES ABAJO",gameTitle:"NO MIRES ABAJO",installApp:"📲 Instalar",leagueBanner:"LIGA DE TEMPORADA",seasonEndsIn:"Cierre en",leaguePointsShort:"LP",multiplier:"MULTIPLICADOR",gems:"GEMAS",left:"IZQ",right:"DER",grappleTitle:"GANCHO SALVAVIDAS",grappleCost:"SALVAR (20 💎)",addJuggle:"+ SUMAR MALABAR",citiesBtn:"20 Ciudades",armoryBtn:"Armería",shopBtn:"Tienda VIP",pauseBtn:"PAUSA",playNowBtn:"▶ JUGAR / SALTAR AL CABLE",skinsBtn:"Aspectos",level:"Nivel",windLabel:"VIENTO",windGustAlert:"⚠️ RÁFAGA DE VIENTO",nearMissPopup:"⚡ ¡SALVADA AL LÍMITE! +100",shieldSavedPopup:"🛡️ ¡ESCUDO ANTI-CAÍDA ACTIVADO!",feverModeBadge:"🔥 MODO FRENESÍ x2",perfectCatchLabel:"¡PERFECTO!",goodCatchLabel:"¡BIEN!",onboardingTitle:"⚡ CREÁ TU PERFIL DE EQUILIBRISTA",onboardingSubtitle:"Elegí tu Nombre/Apodo y Bandera para registrarte en vivo en el Ranking Online de la Liga de Temporada.",onboardingNameLabel:"NOMBRE O APODO (2 A 16 CARACTERES)",onboardingNamePlaceholder:"Ej: Mauricio, Franco_99...",onboardingCountryLabel:"PAÍS / BANDERA",onboardingSaveCta:"GUARDAR Y ENTRAR AL JUEGO",editProfileTooltip:"Editar nombre o bandera",levelCleared:"¡AZOTEA ALCANZADA!",nextLevel:"SIGUIENTE NIVEL",armoryTitle:"ARMERÍA PRO, BARRAS Y MULTIPLICADORES",armorySub:"Tramo 1-5 con Monedas • Tramo 6-10 Élite Pro con Gemas o Pase VIP",maxLevelLabel:"NIVEL MÁXIMO (10/10)",upgradeBtn:"MEJORAR",proUpgradeBtn:"👑 MEJORA PRO — GEMAS / PASE VIP",polesSectionTitle:"⚖️ VARAS DE EQUILIBRIO (BARRAS)",multipliersSectionTitle:"🚀 MULTIPLICADORES PERMANENTES",vipCitiesTitle:"👑 CIUDADES EXCLUSIVAS VIP",leagueModalTitle:"LIGA DE TEMPORADA — CLASIFICACIÓN MUNDIAL",leagueModalSub:"Sumá Puntos de Liga (LP) superando niveles y encadenando capturas rítmicas perfectas para ganar Cofres Épicos.",shopTitle:"👑 TIENDA PRO & PASE VIP DE TEMPORADA",shopSub:"Activá el Pase VIP Pro o adquirí Gemas para desbloquear Barras Cuánticas, Ciudades VIP y Mejoras Nv. 6-10.",pauseTitle:"PARTIDA EN PAUSA",pauseSub:"Tomate un respiro sobre el cable antes de continuar hacia la meta.",resumeBtn:"REANUDAR PARTIDA",restartBtn:"REINICIAR NIVEL",backToLobbyBtn:"VOLVER AL MENÚ PRINCIPAL",fellTitle:"¡PERDISTE EL EQUILIBRIO!",fellSub:"Estabas a pocos metros de alcanzar la azotea de enfrente",continueHook:"USAR GANCHO SALVAVIDAS (20 💎)",retryFree:"REINTENTAR DESDE 0m",youLabel:"TÚ (Equilibrista)"},en:{title:"DON'T LOOK DOWN",gameTitle:"DON'T LOOK DOWN",installApp:"📲 Install",leagueBanner:"SEASON LEAGUE",seasonEndsIn:"Ends in",leaguePointsShort:"LP",multiplier:"MULTIPLIER",gems:"GEMS",left:"LEFT",right:"RIGHT",grappleTitle:"GRAPPLE HOOK SAVE",grappleCost:"SAVE (20 💎)",addJuggle:"+ ADD JUGGLE",citiesBtn:"20 Cities",armoryBtn:"Armory",shopBtn:"VIP Shop",pauseBtn:"PAUSE",playNowBtn:"▶ PLAY / STEP ON THE WIRE",skinsBtn:"Skins",level:"Level",windLabel:"WIND",windGustAlert:"⚠️ WIND GUST",nearMissPopup:"⚡ EDGE SAVE! +100",shieldSavedPopup:"🛡️ ANTI-FALL SHIELD ACTIVATED!",feverModeBadge:"🔥 FEVER MODE x2",perfectCatchLabel:"PERFECT!",goodCatchLabel:"NICE!",onboardingTitle:"⚡ CREATE YOUR TIGHTROPE PROFILE",onboardingSubtitle:"Choose your Nickname & Country Flag to register live on the Season League Online Leaderboard.",onboardingNameLabel:"NICKNAME (2 TO 16 CHARACTERS)",onboardingNamePlaceholder:"Ex: Mauricio, Franco_99...",onboardingCountryLabel:"COUNTRY / FLAG",onboardingSaveCta:"SAVE & ENTER THE GAME",editProfileTooltip:"Edit nickname or flag",levelCleared:"ROOFTOP REACHED!",nextLevel:"NEXT LEVEL",armoryTitle:"PRO ARMORY, POLES & MULTIPLIERS",armorySub:"Tier 1-5 with Coins • Tier 6-10 Pro Elite with Gems or VIP Pass",maxLevelLabel:"MAX LEVEL (10/10)",upgradeBtn:"UPGRADE",proUpgradeBtn:"👑 PRO UPGRADE — GEMS / VIP PASS",polesSectionTitle:"⚖️ BALANCE POLES (BARS)",multipliersSectionTitle:"🚀 PERMANENT MULTIPLIERS",vipCitiesTitle:"👑 EXCLUSIVE VIP CITIES",leagueModalTitle:"SEASON LEAGUE — GLOBAL LEADERBOARD",leagueModalSub:"Earn League Points (LP) by clearing levels and chaining rhythmic catches to win Epic Chests.",shopTitle:"👑 PRO SHOP & SEASON VIP PASS",shopSub:"Activate the VIP Pro Pass or get Gems to unlock Quantum Poles, VIP Cities and Lvl 6-10 Upgrades.",pauseTitle:"GAME PAUSED",pauseSub:"Take a breath on the high wire before continuing to the target roof.",resumeBtn:"RESUME GAME",restartBtn:"RESTART LEVEL",backToLobbyBtn:"BACK TO MAIN MENU",fellTitle:"YOU LOST YOUR BALANCE!",fellSub:"You were just meters away from reaching the opposite rooftop",continueHook:"USE GRAPPLE HOOK SAVE (20 💎)",retryFree:"RETRY FROM 0m",youLabel:"YOU (Tightrope Walker)"}};for(let s=0;s<gs.length;s++){const e=gs[s];e.id=e.id||`city_${e.index}`,e.landmark=e.landmark||e.monumentName,e.accent=e.accent||e.accentColor,e.windowColor=e.windowColor||e.winColor,e.landmarkType=e.landmarkType||e.monument}for(let s=0;s<To.length;s++){const e=To[s];e.coatColor=e.coatColor||e.hoodieColor}for(let s=0;s<yl.length;s++){const e=yl[s];e.primaryColor=e.primaryColor||e.color,e.glowColor=e.glowColor||e.color}function yg(s){const e=Math.max(1,Math.min(100,s||1));return e<=3?1:e<=10?Number((1.25+(e-4)/6*.2).toFixed(3)):e<=25?Number((1.5+(e-11)/14*.25).toFixed(3)):e<=50?Number((1.8+(e-26)/24*.3).toFixed(3)):Number((2.15+(e-51)/49*.45).toFixed(3))}function S_(s){const e=Math.max(1,Math.min(100,s||1)),t=yg(e),r=100+(e-1)*5;return Math.round(r*t)}function uf(s,e=null){const t=Math.max(1,Math.min(100,s||1)),r=Math.min(19,Math.max(0,Math.floor((t-1)/5))),o=e||gs[r],l=(t-1)%5+1,u=yg(t),f=5,m=Number((f*u).toFixed(3)),p=S_(t),y=t<4?0:Number((u*(1+(t-4)*.018)).toFixed(3)),S=Number((u*1.15).toFixed(3)),_=Number((.62*S).toFixed(3)),M=Number(Math.max(.14,.28-(t-1)/99*.14).toFixed(4)),E=t<4?6:Number(Math.max(4.5,6-(t-4)/96*1.5).toFixed(2)),R=.32+o.windStrength*.45+l*.045,x=1.08+t/100*.92,v=t<=15?2:t<=55?3:4,T=t<=3?0:t<=10?1:t<=25?2:t<=50?3:4,F=Number((.028+Math.max(0,u-1)*.068).toFixed(4)),A=Number((.036+Math.max(0,u-1)*.064).toFixed(4));return{level:t,cityIndex:e?e.index:r,city:o,isVipCity:!!e,stageInCity:l,speedPhase:T,walkSpeedMultiplier:u,baseWalkSpeed:f,walkSpeed:u,walkSpeedMeters:m,totalDistance:p,targetMeters:p,targetDistance:p,difficultyFactor:y,juggleSpeedMultiplier:S,juggleBaseSpeed:_,juggleSpeed:_,catchWindow:M,gravityFactor:x,gravity:x*2.1,windMax:R,windBase:R,windChangeFreq:E,gustInterval:Math.max(.75,2.2-T*.32),windBaseForce:R,gravityInstability:x,defaultObjects:v,ballCount:v,stepSwayImpulse:F,catchRecoilImpulse:A}}const f0=[523.25,587.33,659.25,783.99,880,1046.5];class M_{constructor(){this.ctx=null,this.muted=!1,this.lastHeartbeat=0,this.noiseBuffer=null}get enabled(){return!this.muted}set enabled(e){this.muted=!e}init(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}if(this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx&&!this.noiseBuffer){const e=this.ctx.sampleRate||44100,t=Math.floor(e*1.1),r=this.ctx.createBuffer(1,t,e),o=r.getChannelData(0);for(let l=0;l<t;l++)o[l]=Math.random()*2-1;this.noiseBuffer=r}}playCatchSound(e=1,t=!1){if(t&&typeof navigator<"u"&&navigator.vibrate?navigator.vibrate(12):!t&&typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(8),this.muted||(this.init(),!this.ctx))return;const r=this.ctx.currentTime,o=Math.max(0,(e-1)%f0.length),l=e>=12?1.25:1,u=f0[o]*l,f=this.ctx.createOscillator(),m=this.ctx.createOscillator(),p=this.ctx.createGain();if(f.type="triangle",m.type="sine",f.frequency.setValueAtTime(u,r),m.frequency.setValueAtTime(u,r),p.gain.setValueAtTime(.001,r),p.gain.linearRampToValueAtTime(.18,r+.015),p.gain.exponentialRampToValueAtTime(.06,r+.07),p.gain.exponentialRampToValueAtTime(.001,r+.18),f.connect(p),m.connect(p),p.connect(this.ctx.destination),f.start(r),m.start(r),f.stop(r+.19),m.stop(r+.19),t){const y=this.ctx.createOscillator(),S=this.ctx.createGain();y.type="sine",y.frequency.setValueAtTime(u*2,r),y.frequency.exponentialRampToValueAtTime(u*2.04,r+.18),S.gain.setValueAtTime(.001,r),S.gain.linearRampToValueAtTime(.14,r+.012),S.gain.exponentialRampToValueAtTime(.001,r+.18),y.connect(S),S.connect(this.ctx.destination),y.start(r),y.stop(r+.19)}}playCatch(e=1,t=!1){this.playCatchSound(e,t)}playWindGust(){if(this.muted||(this.init(),!this.ctx||!this.noiseBuffer))return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer;const r=this.ctx.createBiquadFilter();r.type="bandpass",r.Q.setValueAtTime(6.5,e),r.frequency.setValueAtTime(310,e),r.frequency.exponentialRampToValueAtTime(920,e+.42),r.frequency.exponentialRampToValueAtTime(380,e+.95);const o=this.ctx.createGain();o.gain.setValueAtTime(.001,e),o.gain.linearRampToValueAtTime(.22,e+.18),o.gain.exponentialRampToValueAtTime(.001,e+.98),t.connect(r),r.connect(o),o.connect(this.ctx.destination),t.start(e),t.stop(e+1)}playHeartbeatIfDanger(e){if(e-this.lastHeartbeat<420||(this.lastHeartbeat=e,typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(20),this.muted)||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(65,t),r.frequency.exponentialRampToValueAtTime(42,t+.14),o.gain.setValueAtTime(.24,t),o.gain.exponentialRampToValueAtTime(.001,t+.16),r.connect(o),o.connect(this.ctx.destination),r.start(t),r.stop(t+.17)}playNearMissSave(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([15,25,15]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=[587.33,783.99,1046.5];for(let r=0;r<t.length;r++){const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(t[r],e+r*.045),l.gain.setValueAtTime(.14,e+r*.045),l.gain.exponentialRampToValueAtTime(.001,e+r*.045+.22),o.connect(l),l.connect(this.ctx.destination),o.start(e+r*.045),o.stop(e+r*.045+.23)}}playLevelWin(){this.playVictory()}playVictory(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=[523.25,659.25,783.99,1046.5];for(let r=0;r<t.length;r++){const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(t[r],e+r*.085),l.gain.setValueAtTime(.17,e+r*.085),l.gain.exponentialRampToValueAtTime(.001,e+r*.085+.38),o.connect(l),l.connect(this.ctx.destination),o.start(e+r*.085),o.stop(e+r*.085+.4)}}playFall(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([90,45,140]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=[0,.18,.36],r=[.22,.11,.055];for(let o=0;o<t.length;o++){const l=t[o],u=this.ctx.createOscillator(),f=this.ctx.createGain();u.type="sawtooth",u.frequency.setValueAtTime(440-o*45,e+l),u.frequency.exponentialRampToValueAtTime(68,e+l+.78),f.gain.setValueAtTime(r[o],e+l),f.gain.exponentialRampToValueAtTime(.001,e+l+.82),u.connect(f),f.connect(this.ctx.destination),u.start(e+l),u.stop(e+l+.84)}}playGrapple(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([30,25,65]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),r=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(220,e),t.frequency.exponentialRampToValueAtTime(980,e+.3),r.gain.setValueAtTime(.2,e),r.gain.exponentialRampToValueAtTime(.001,e+.34),t.connect(r),r.connect(this.ctx.destination),t.start(e),t.stop(e+.36)}playHookRescue(){this.playGrapple()}playNearMiss(){this.playNearMissSave()}playFallScream(){this.playFall()}playFrenzyStart(){this.playVictory()}playMissAlert(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([35,25,45]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),r=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(195,e),t.frequency.exponentialRampToValueAtTime(98,e+.22),r.gain.setValueAtTime(.18,e),r.gain.exponentialRampToValueAtTime(.001,e+.24),t.connect(r),r.connect(this.ctx.destination),t.start(e),t.stop(e+.25)}playFootstep(e=1){if(this.muted||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="sine";const l=92+Math.min(45,(e-1)*30);r.frequency.setValueAtTime(l,t),r.frequency.exponentialRampToValueAtTime(42,t+.065),o.gain.setValueAtTime(.09,t),o.gain.exponentialRampToValueAtTime(.001,t+.07),r.connect(o),o.connect(this.ctx.destination),r.start(t),r.stop(t+.075)}updateWind(e=0){Math.abs(e)>.85&&Math.random()<.015&&this.playWindGust()}}const Nt=new M_,E_=uu;function Mo(s){return m_(s).flag}const w_="nma_live_leaderboard_cache_v2";async function cl(s,e,t,r=1){const o=(s||"Equilibrista").trim().slice(0,15),l=(e||"AR").trim(),u=Mo(l),f={id:"player_self",name:o,country:l,flag:u,score:Math.max(0,Math.floor(t||0)),lp:Math.max(0,Math.floor(t||0)),level:Math.max(1,r||1),updatedAt:Date.now(),isPlayer:!0};try{localStorage.setItem(w_,JSON.stringify(f))}catch{}return f}async function h0(s){const e=((s==null?void 0:s.name)||"Equilibrista").trim().slice(0,15),t=((s==null?void 0:s.country)||"AR").trim(),r=Mo(t),o=Math.max(0,Math.floor((s==null?void 0:s.score)??320)),l=Math.max(1,(s==null?void 0:s.level)||1),u=Math.floor(Date.now()/45e3),f=__.map((y,S)=>{const _=(u+S*7)%11*15,M=y.baseLp+_;return{id:y.id,name:y.name,country:y.country,flag:y.flag,score:M,lp:M,level:Math.max(5,Math.min(100,Math.floor(M/180))),badge:y.badge,isPlayer:!1}}),m={id:"player_self",name:e,country:t,flag:r,score:o,lp:o,level:l,badge:"⚡",isPlayer:!0};return[...f,m].sort((y,S)=>S.lp-y.lp)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uh="186",b_=0,p0=1,T_=2,du=1,A_=2,_l=3,Ra=0,Vi=1,zi=2,_s=0,Sl=1,Bi=2,m0=3,g0=4,R_=5,So=100,C_=101,P_=102,L_=103,N_=104,I_=200,D_=201,U_=202,O_=203,Sg=204,Mg=205,F_=206,k_=207,B_=208,z_=209,V_=210,G_=211,H_=212,W_=213,X_=214,Xf=0,qf=1,jf=2,Ml=3,$f=4,Yf=5,Kf=6,Zf=7,Eg=0,q_=1,j_=2,Wr=0,wg=1,bg=2,Tg=3,Oh=4,Ag=5,Rg=6,Cg=7,Pg=300,Ca=301,Ao=302,df=303,ff=304,Tu=306,Pa=1e3,vs=1001,Jf=1002,ci=1003,$_=1004,Dc=1005,_i=1006,hf=1007,ba=1008,Qi=1009,Lg=1010,Ng=1011,El=1012,Fh=1013,Xr=1014,Gr=1015,qr=1016,kh=1017,Bh=1018,wl=1020,Ig=35902,Dg=35899,Ug=1021,Og=1022,Cr=1023,ys=1026,Ta=1027,Fg=1028,zh=1029,La=1030,Vh=1031,Gh=1033,fu=33776,hu=33777,pu=33778,mu=33779,Qf=35840,eh=35841,th=35842,nh=35843,ih=36196,rh=37492,sh=37496,ah=37488,oh=37489,_u=37490,lh=37491,ch=37808,uh=37809,dh=37810,fh=37811,hh=37812,ph=37813,mh=37814,gh=37815,vh=37816,_h=37817,xh=37818,yh=37819,Sh=37820,Mh=37821,Eh=36492,wh=36494,bh=36495,Th=36283,Ah=36284,xu=36285,Rh=36286,Y_=3200,Ch=0,K_=1,Ks="",fr="srgb",yu="srgb-linear",Su="linear",dn="srgb",pf=7680,Z_=519,J_=512,Q_=513,ex=514,Hh=515,tx=516,nx=517,Wh=518,ix=519,rx=35044,v0="300 es",Hr=2e3,bl=2001;function sx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Mu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ax(){const s=Mu("canvas");return s.style.display="block",s}const _0={};function x0(...s){const e="THREE."+s.shift();console.log(e,...s)}function kg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Mt(...s){s=kg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function on(...s){s=kg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function wo(...s){const e=s.join(" ");e in _0||(_0[e]=!0,Mt(...s))}function ox(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const lx={[Xf]:qf,[jf]:Kf,[$f]:Zf,[Ml]:Yf,[qf]:Xf,[Kf]:jf,[Zf]:$f,[Yf]:Ml};class Ia{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const gi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gu=Math.PI/180,Ph=180/Math.PI;function Al(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(gi[s&255]+gi[s>>8&255]+gi[s>>16&255]+gi[s>>24&255]+"-"+gi[e&255]+gi[e>>8&255]+"-"+gi[e>>16&15|64]+gi[e>>24&255]+"-"+gi[t&63|128]+gi[t>>8&255]+"-"+gi[t>>16&255]+gi[t>>24&255]+gi[r&255]+gi[r>>8&255]+gi[r>>16&255]+gi[r>>24&255]).toLowerCase()}function Kt(s,e,t){return Math.max(e,Math.min(t,s))}function cx(s,e){return(s%e+e)%e}function mf(s,e,t){return(1-t)*s+t*e}function ul(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ki(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Jh=class Jh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Kt(this.x,e.x,t.x),this.y=Kt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Kt(this.x,e,t),this.y=Kt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Kt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Kt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Jh.prototype.isVector2=!0;let Gt=Jh;class Co{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let m=r[o+0],p=r[o+1],y=r[o+2],S=r[o+3],_=l[u+0],M=l[u+1],E=l[u+2],R=l[u+3];if(S!==R||m!==_||p!==M||y!==E){let x=m*_+p*M+y*E+S*R;x<0&&(_=-_,M=-M,E=-E,R=-R,x=-x);let v=1-f;if(x<.9995){const T=Math.acos(x),F=Math.sin(T);v=Math.sin(v*T)/F,f=Math.sin(f*T)/F,m=m*v+_*f,p=p*v+M*f,y=y*v+E*f,S=S*v+R*f}else{m=m*v+_*f,p=p*v+M*f,y=y*v+E*f,S=S*v+R*f;const T=1/Math.sqrt(m*m+p*p+y*y+S*S);m*=T,p*=T,y*=T,S*=T}}e[t]=m,e[t+1]=p,e[t+2]=y,e[t+3]=S}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],m=r[o+1],p=r[o+2],y=r[o+3],S=l[u],_=l[u+1],M=l[u+2],E=l[u+3];return e[t]=f*E+y*S+m*M-p*_,e[t+1]=m*E+y*_+p*S-f*M,e[t+2]=p*E+y*M+f*_-m*S,e[t+3]=y*E-f*S-m*_-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,m=Math.sin,p=f(r/2),y=f(o/2),S=f(l/2),_=m(r/2),M=m(o/2),E=m(l/2);switch(u){case"XYZ":this._x=_*y*S+p*M*E,this._y=p*M*S-_*y*E,this._z=p*y*E+_*M*S,this._w=p*y*S-_*M*E;break;case"YXZ":this._x=_*y*S+p*M*E,this._y=p*M*S-_*y*E,this._z=p*y*E-_*M*S,this._w=p*y*S+_*M*E;break;case"ZXY":this._x=_*y*S-p*M*E,this._y=p*M*S+_*y*E,this._z=p*y*E+_*M*S,this._w=p*y*S-_*M*E;break;case"ZYX":this._x=_*y*S-p*M*E,this._y=p*M*S+_*y*E,this._z=p*y*E-_*M*S,this._w=p*y*S+_*M*E;break;case"YZX":this._x=_*y*S+p*M*E,this._y=p*M*S+_*y*E,this._z=p*y*E-_*M*S,this._w=p*y*S-_*M*E;break;case"XZY":this._x=_*y*S-p*M*E,this._y=p*M*S-_*y*E,this._z=p*y*E+_*M*S,this._w=p*y*S+_*M*E;break;default:Mt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],m=t[9],p=t[2],y=t[6],S=t[10],_=r+f+S;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(y-m)*M,this._y=(l-p)*M,this._z=(u-o)*M}else if(r>f&&r>S){const M=2*Math.sqrt(1+r-f-S);this._w=(y-m)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+p)/M}else if(f>S){const M=2*Math.sqrt(1+f-r-S);this._w=(l-p)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(m+y)/M}else{const M=2*Math.sqrt(1+S-r-f);this._w=(u-o)/M,this._x=(l+p)/M,this._y=(m+y)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,m=t._y,p=t._z,y=t._w;return this._x=r*y+u*f+o*p-l*m,this._y=o*y+u*m+l*f-r*p,this._z=l*y+u*p+r*m-o*f,this._w=u*y-r*f-o*m-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let m=1-t;if(f<.9995){const p=Math.acos(f),y=Math.sin(p);m=Math.sin(m*p)/y,t=Math.sin(t*p)/y,this._x=this._x*m+r*t,this._y=this._y*m+o*t,this._z=this._z*m+l*t,this._w=this._w*m+u*t,this._onChangeCallback()}else this._x=this._x*m+r*t,this._y=this._y*m+o*t,this._z=this._z*m+l*t,this._w=this._w*m+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Qh=class Qh{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(y0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(y0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,m=e.w,p=2*(u*o-f*r),y=2*(f*t-l*o),S=2*(l*r-u*t);return this.x=t+m*p+u*S-f*y,this.y=r+m*y+f*p-l*S,this.z=o+m*S+l*y-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Kt(this.x,e.x,t.x),this.y=Kt(this.y,e.y,t.y),this.z=Kt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Kt(this.x,e,t),this.y=Kt(this.y,e,t),this.z=Kt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Kt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,m=t.z;return this.x=o*m-l*f,this.y=l*u-r*m,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return gf.copy(this).projectOnVector(e),this.sub(gf)}reflect(e){return this.sub(gf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Kt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Qh.prototype.isVector3=!0;let ie=Qh;const gf=new ie,y0=new Co,ep=class ep{constructor(e,t,r,o,l,u,f,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,m,p)}set(e,t,r,o,l,u,f,m,p){const y=this.elements;return y[0]=e,y[1]=o,y[2]=f,y[3]=t,y[4]=l,y[5]=m,y[6]=r,y[7]=u,y[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],m=r[6],p=r[1],y=r[4],S=r[7],_=r[2],M=r[5],E=r[8],R=o[0],x=o[3],v=o[6],T=o[1],F=o[4],A=o[7],D=o[2],L=o[5],k=o[8];return l[0]=u*R+f*T+m*D,l[3]=u*x+f*F+m*L,l[6]=u*v+f*A+m*k,l[1]=p*R+y*T+S*D,l[4]=p*x+y*F+S*L,l[7]=p*v+y*A+S*k,l[2]=_*R+M*T+E*D,l[5]=_*x+M*F+E*L,l[8]=_*v+M*A+E*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],y=e[8];return t*u*y-t*f*p-r*l*y+r*f*m+o*l*p-o*u*m}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],y=e[8],S=y*u-f*p,_=f*m-y*l,M=p*l-u*m,E=t*S+r*_+o*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=S*R,e[1]=(o*p-y*r)*R,e[2]=(f*r-o*u)*R,e[3]=_*R,e[4]=(y*t-o*m)*R,e[5]=(o*l-f*t)*R,e[6]=M*R,e[7]=(r*m-p*t)*R,e[8]=(u*t-r*l)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const m=Math.cos(l),p=Math.sin(l);return this.set(r*m,r*p,-r*(m*u+p*f)+u+e,-o*p,o*m,-o*(-p*u+m*f)+f+t,0,0,1),this}scale(e,t){return wo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vf.makeScale(e,t)),this}rotate(e){return wo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vf.makeRotation(-e)),this}translate(e,t){return wo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ep.prototype.isMatrix3=!0;let Rt=ep;const vf=new Rt,S0=new Rt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),M0=new Rt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ux(){const s={enabled:!0,workingColorSpace:yu,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===dn&&(o.r=xs(o.r),o.g=xs(o.g),o.b=xs(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===dn&&(o.r=bo(o.r),o.g=bo(o.g),o.b=bo(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ks?Su:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return wo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return wo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[yu]:{primaries:e,whitePoint:r,transfer:Su,toXYZ:S0,fromXYZ:M0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:fr},outputColorSpaceConfig:{drawingBufferColorSpace:fr}},[fr]:{primaries:e,whitePoint:r,transfer:dn,toXYZ:S0,fromXYZ:M0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:fr}}}),s}const Yt=ux();function xs(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function bo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let so;class dx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{so===void 0&&(so=Mu("canvas")),so.width=e.width,so.height=e.height;const o=so.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=so}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mu("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=xs(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(xs(t[r]/255)*255):t[r]=xs(t[r]);return{data:t,width:e.width,height:e.height}}else return Mt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fx=0;class Xh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Al(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(_f(o[u].image)):l.push(_f(o[u]))}else l=_f(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function _f(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?dx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Mt("Texture: Unable to serialize Texture."),{})}let hx=0;const xf=new ie;class xi extends Ia{constructor(e=xi.DEFAULT_IMAGE,t=xi.DEFAULT_MAPPING,r=vs,o=vs,l=_i,u=ba,f=Cr,m=Qi,p=xi.DEFAULT_ANISOTROPY,y=Ks){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=Al(),this.name="",this.source=new Xh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=m,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Rt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(xf).x}get height(){return this.source.getSize(xf).y}get depth(){return this.source.getSize(xf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){Mt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Mt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pa:e.x=e.x-Math.floor(e.x);break;case vs:e.x=e.x<0?0:1;break;case Jf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pa:e.y=e.y-Math.floor(e.y);break;case vs:e.y=e.y<0?0:1;break;case Jf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xi.DEFAULT_IMAGE=null;xi.DEFAULT_MAPPING=Pg;xi.DEFAULT_ANISOTROPY=1;const tp=class tp{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const m=e.elements,p=m[0],y=m[4],S=m[8],_=m[1],M=m[5],E=m[9],R=m[2],x=m[6],v=m[10];if(Math.abs(y-_)<.01&&Math.abs(S-R)<.01&&Math.abs(E-x)<.01){if(Math.abs(y+_)<.1&&Math.abs(S+R)<.1&&Math.abs(E+x)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const F=(p+1)/2,A=(M+1)/2,D=(v+1)/2,L=(y+_)/4,k=(S+R)/4,b=(E+x)/4;return F>A&&F>D?F<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(F),o=L/r,l=k/r):A>D?A<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(A),r=L/o,l=b/o):D<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(D),r=k/l,o=b/l),this.set(r,o,l,t),this}let T=Math.sqrt((x-E)*(x-E)+(S-R)*(S-R)+(_-y)*(_-y));return Math.abs(T)<.001&&(T=1),this.x=(x-E)/T,this.y=(S-R)/T,this.z=(_-y)/T,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Kt(this.x,e.x,t.x),this.y=Kt(this.y,e.y,t.y),this.z=Kt(this.z,e.z,t.z),this.w=Kt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Kt(this.x,e,t),this.y=Kt(this.y,e,t),this.z=Kt(this.z,e,t),this.w=Kt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Kt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};tp.prototype.isVector4=!0;let Ln=tp;class px extends Ia{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_i,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Ln(0,0,e,t),this.scissorTest=!1,this.viewport=new Ln(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new xi(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:_i,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Xh(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends px{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Bg extends xi{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=ci,this.minFilter=ci,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mx extends xi{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=ci,this.minFilter=ci,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const bu=class bu{constructor(e,t,r,o,l,u,f,m,p,y,S,_,M,E,R,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,m,p,y,S,_,M,E,R,x)}set(e,t,r,o,l,u,f,m,p,y,S,_,M,E,R,x){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=o,v[1]=l,v[5]=u,v[9]=f,v[13]=m,v[2]=p,v[6]=y,v[10]=S,v[14]=_,v[3]=M,v[7]=E,v[11]=R,v[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bu().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/ao.setFromMatrixColumn(e,0).length(),l=1/ao.setFromMatrixColumn(e,1).length(),u=1/ao.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),m=Math.cos(o),p=Math.sin(o),y=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const _=u*y,M=u*S,E=f*y,R=f*S;t[0]=m*y,t[4]=-m*S,t[8]=p,t[1]=M+E*p,t[5]=_-R*p,t[9]=-f*m,t[2]=R-_*p,t[6]=E+M*p,t[10]=u*m}else if(e.order==="YXZ"){const _=m*y,M=m*S,E=p*y,R=p*S;t[0]=_+R*f,t[4]=E*f-M,t[8]=u*p,t[1]=u*S,t[5]=u*y,t[9]=-f,t[2]=M*f-E,t[6]=R+_*f,t[10]=u*m}else if(e.order==="ZXY"){const _=m*y,M=m*S,E=p*y,R=p*S;t[0]=_-R*f,t[4]=-u*S,t[8]=E+M*f,t[1]=M+E*f,t[5]=u*y,t[9]=R-_*f,t[2]=-u*p,t[6]=f,t[10]=u*m}else if(e.order==="ZYX"){const _=u*y,M=u*S,E=f*y,R=f*S;t[0]=m*y,t[4]=E*p-M,t[8]=_*p+R,t[1]=m*S,t[5]=R*p+_,t[9]=M*p-E,t[2]=-p,t[6]=f*m,t[10]=u*m}else if(e.order==="YZX"){const _=u*m,M=u*p,E=f*m,R=f*p;t[0]=m*y,t[4]=R-_*S,t[8]=E*S+M,t[1]=S,t[5]=u*y,t[9]=-f*y,t[2]=-p*y,t[6]=M*S+E,t[10]=_-R*S}else if(e.order==="XZY"){const _=u*m,M=u*p,E=f*m,R=f*p;t[0]=m*y,t[4]=-S,t[8]=p*y,t[1]=_*S+R,t[5]=u*y,t[9]=M*S-E,t[2]=E*S-M,t[6]=f*y,t[10]=R*S+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gx,e,vx)}lookAt(e,t,r){const o=this.elements;return Yi.subVectors(e,t),Yi.lengthSq()===0&&(Yi.z=1),Yi.normalize(),Hs.crossVectors(r,Yi),Hs.lengthSq()===0&&(Math.abs(r.z)===1?Yi.x+=1e-4:Yi.z+=1e-4,Yi.normalize(),Hs.crossVectors(r,Yi)),Hs.normalize(),Uc.crossVectors(Yi,Hs),o[0]=Hs.x,o[4]=Uc.x,o[8]=Yi.x,o[1]=Hs.y,o[5]=Uc.y,o[9]=Yi.y,o[2]=Hs.z,o[6]=Uc.z,o[10]=Yi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],m=r[8],p=r[12],y=r[1],S=r[5],_=r[9],M=r[13],E=r[2],R=r[6],x=r[10],v=r[14],T=r[3],F=r[7],A=r[11],D=r[15],L=o[0],k=o[4],b=o[8],I=o[12],z=o[1],G=o[5],W=o[9],ne=o[13],H=o[2],re=o[6],fe=o[10],ee=o[14],te=o[3],K=o[7],Z=o[11],U=o[15];return l[0]=u*L+f*z+m*H+p*te,l[4]=u*k+f*G+m*re+p*K,l[8]=u*b+f*W+m*fe+p*Z,l[12]=u*I+f*ne+m*ee+p*U,l[1]=y*L+S*z+_*H+M*te,l[5]=y*k+S*G+_*re+M*K,l[9]=y*b+S*W+_*fe+M*Z,l[13]=y*I+S*ne+_*ee+M*U,l[2]=E*L+R*z+x*H+v*te,l[6]=E*k+R*G+x*re+v*K,l[10]=E*b+R*W+x*fe+v*Z,l[14]=E*I+R*ne+x*ee+v*U,l[3]=T*L+F*z+A*H+D*te,l[7]=T*k+F*G+A*re+D*K,l[11]=T*b+F*W+A*fe+D*Z,l[15]=T*I+F*ne+A*ee+D*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],m=e[9],p=e[13],y=e[2],S=e[6],_=e[10],M=e[14],E=e[3],R=e[7],x=e[11],v=e[15],T=m*M-p*_,F=f*M-p*S,A=f*_-m*S,D=u*M-p*y,L=u*_-m*y,k=u*S-f*y;return t*(R*T-x*F+v*A)-r*(E*T-x*D+v*L)+o*(E*F-R*D+v*k)-l*(E*A-R*L+x*k)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],f=e[9],m=e[2],p=e[6],y=e[10];return t*(u*y-f*p)-r*(l*y-f*m)+o*(l*p-u*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],m=e[6],p=e[7],y=e[8],S=e[9],_=e[10],M=e[11],E=e[12],R=e[13],x=e[14],v=e[15],T=t*f-r*u,F=t*m-o*u,A=t*p-l*u,D=r*m-o*f,L=r*p-l*f,k=o*p-l*m,b=y*R-S*E,I=y*x-_*E,z=y*v-M*E,G=S*x-_*R,W=S*v-M*R,ne=_*v-M*x,H=T*ne-F*W+A*G+D*z-L*I+k*b;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const re=1/H;return e[0]=(f*ne-m*W+p*G)*re,e[1]=(o*W-r*ne-l*G)*re,e[2]=(R*k-x*L+v*D)*re,e[3]=(_*L-S*k-M*D)*re,e[4]=(m*z-u*ne-p*I)*re,e[5]=(t*ne-o*z+l*I)*re,e[6]=(x*A-E*k-v*F)*re,e[7]=(y*k-_*A+M*F)*re,e[8]=(u*W-f*z+p*b)*re,e[9]=(r*z-t*W-l*b)*re,e[10]=(E*L-R*A+v*T)*re,e[11]=(S*A-y*L-M*T)*re,e[12]=(f*I-u*G-m*b)*re,e[13]=(t*G-r*I+o*b)*re,e[14]=(R*F-E*D-x*T)*re,e[15]=(y*D-S*F+_*T)*re,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,m=e.z,p=l*u,y=l*f;return this.set(p*u+r,p*f-o*m,p*m+o*f,0,p*f+o*m,y*f+r,y*m-o*u,0,p*m-o*f,y*m+o*u,l*m*m+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,m=t._w,p=l+l,y=u+u,S=f+f,_=l*p,M=l*y,E=l*S,R=u*y,x=u*S,v=f*S,T=m*p,F=m*y,A=m*S,D=r.x,L=r.y,k=r.z;return o[0]=(1-(R+v))*D,o[1]=(M+A)*D,o[2]=(E-F)*D,o[3]=0,o[4]=(M-A)*L,o[5]=(1-(_+v))*L,o[6]=(x+T)*L,o[7]=0,o[8]=(E+F)*k,o[9]=(x-T)*k,o[10]=(1-(_+R))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=ao.set(o[0],o[1],o[2]).length();const f=ao.set(o[4],o[5],o[6]).length(),m=ao.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Tr.copy(this);const p=1/u,y=1/f,S=1/m;return Tr.elements[0]*=p,Tr.elements[1]*=p,Tr.elements[2]*=p,Tr.elements[4]*=y,Tr.elements[5]*=y,Tr.elements[6]*=y,Tr.elements[8]*=S,Tr.elements[9]*=S,Tr.elements[10]*=S,t.setFromRotationMatrix(Tr),r.x=u,r.y=f,r.z=m,this}makePerspective(e,t,r,o,l,u,f=Hr,m=!1){const p=this.elements,y=2*l/(t-e),S=2*l/(r-o),_=(t+e)/(t-e),M=(r+o)/(r-o);let E,R;if(m)E=l/(u-l),R=u*l/(u-l);else if(f===Hr)E=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(f===bl)E=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=y,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=S,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=Hr,m=!1){const p=this.elements,y=2/(t-e),S=2/(r-o),_=-(t+e)/(t-e),M=-(r+o)/(r-o);let E,R;if(m)E=1/(u-l),R=u/(u-l);else if(f===Hr)E=-2/(u-l),R=-(u+l)/(u-l);else if(f===bl)E=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=y,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=S,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};bu.prototype.isMatrix4=!0;let Tn=bu;const ao=new ie,Tr=new Tn,gx=new ie(0,0,0),vx=new ie(1,1,1),Hs=new ie,Uc=new ie,Yi=new ie,E0=new Tn,w0=new Co;class Js{constructor(e=0,t=0,r=0,o=Js.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],m=o[1],p=o[5],y=o[9],S=o[2],_=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-y,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,l));break;case"ZYX":this._y=Math.asin(-Kt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(m,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Kt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-y,p),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-y,M),this._y=0);break;default:Mt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return E0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(E0,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return w0.setFromEuler(this),this.setFromQuaternion(w0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Js.DEFAULT_ORDER="XYZ";class zg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _x=0;const b0=new ie,oo=new Co,ds=new Tn,Oc=new ie,dl=new ie,xx=new ie,yx=new Co,T0=new ie(1,0,0),A0=new ie(0,1,0),R0=new ie(0,0,1),C0={type:"added"},Sx={type:"removed"},lo={type:"childadded",child:null},yf={type:"childremoved",child:null};class ii extends Ia{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Al(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ii.DEFAULT_UP.clone();const e=new ie,t=new Js,r=new Co,o=new ie(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Tn},normalMatrix:{value:new Rt}}),this.matrix=new Tn,this.matrixWorld=new Tn,this.matrixAutoUpdate=ii.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return oo.setFromAxisAngle(e,t),this.quaternion.multiply(oo),this}rotateOnWorldAxis(e,t){return oo.setFromAxisAngle(e,t),this.quaternion.premultiply(oo),this}rotateX(e){return this.rotateOnAxis(T0,e)}rotateY(e){return this.rotateOnAxis(A0,e)}rotateZ(e){return this.rotateOnAxis(R0,e)}translateOnAxis(e,t){return b0.copy(e).applyQuaternion(this.quaternion),this.position.add(b0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(T0,e)}translateY(e){return this.translateOnAxis(A0,e)}translateZ(e){return this.translateOnAxis(R0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ds.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Oc.copy(e):Oc.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),dl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ds.lookAt(dl,Oc,this.up):ds.lookAt(Oc,dl,this.up),this.quaternion.setFromRotationMatrix(ds),o&&(ds.extractRotation(o.matrixWorld),oo.setFromRotationMatrix(ds),this.quaternion.premultiply(oo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(on("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(C0),lo.child=e,this.dispatchEvent(lo),lo.child=null):on("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sx),yf.child=e,this.dispatchEvent(yf),yf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ds.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ds.multiply(e.parent.matrixWorld)),e.applyMatrix4(ds),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(C0),lo.child=e,this.dispatchEvent(lo),lo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dl,e,xx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dl,yx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let p=0,y=m.length;p<y;p++){const S=m[p];l(e.shapes,S)}else l(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,p=this.material.length;m<p;m++)f.push(l(e.materials,this.material[m]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];o.animations.push(l(e.animations,m))}}if(t){const f=u(e.geometries),m=u(e.materials),p=u(e.textures),y=u(e.images),S=u(e.shapes),_=u(e.skeletons),M=u(e.animations),E=u(e.nodes);f.length>0&&(r.geometries=f),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),y.length>0&&(r.images=y),S.length>0&&(r.shapes=S),_.length>0&&(r.skeletons=_),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(f){const m=[];for(const p in f){const y=f[p];delete y.metadata,m.push(y)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}ii.DEFAULT_UP=new ie(0,1,0);ii.DEFAULT_MATRIX_AUTO_UPDATE=!0;ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class $t extends ii{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mx={type:"move"};class Sf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,m=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const R of e.hand.values()){const x=t.getJointPose(R,r),v=this._getHandJoint(p,R);x!==null&&(v.matrix.fromArray(x.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=x.radius),v.visible=x!==null}const y=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],_=y.position.distanceTo(S.position),M=.02,E=.005;p.inputState.pinching&&_>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Mx)))}return f!==null&&(f.visible=o!==null),m!==null&&(m.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new $t;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Vg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ws={h:0,s:0,l:0},Fc={h:0,s:0,l:0};function Mf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Xt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=fr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Yt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Yt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Yt.workingColorSpace){if(e=cx(e,1),t=Kt(t,0,1),r=Kt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Mf(u,l,e+1/3),this.g=Mf(u,l,e),this.b=Mf(u,l,e-1/3)}return Yt.colorSpaceToWorking(this,o),this}setStyle(e,t=fr){function r(l){l!==void 0&&parseFloat(l)<1&&Mt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:Mt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);Mt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=fr){const r=Vg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):Mt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}copyLinearToSRGB(e){return this.r=bo(e.r),this.g=bo(e.g),this.b=bo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fr){return Yt.workingToColorSpace(vi.copy(this),e),Math.round(Kt(vi.r*255,0,255))*65536+Math.round(Kt(vi.g*255,0,255))*256+Math.round(Kt(vi.b*255,0,255))}getHexString(e=fr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Yt.workingColorSpace){Yt.workingToColorSpace(vi.copy(this),t);const r=vi.r,o=vi.g,l=vi.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let m,p;const y=(f+u)/2;if(f===u)m=0,p=0;else{const S=u-f;switch(p=y<=.5?S/(u+f):S/(2-u-f),u){case r:m=(o-l)/S+(o<l?6:0);break;case o:m=(l-r)/S+2;break;case l:m=(r-o)/S+4;break}m/=6}return e.h=m,e.s=p,e.l=y,e}getRGB(e,t=Yt.workingColorSpace){return Yt.workingToColorSpace(vi.copy(this),t),e.r=vi.r,e.g=vi.g,e.b=vi.b,e}getStyle(e=fr){Yt.workingToColorSpace(vi.copy(this),e);const t=vi.r,r=vi.g,o=vi.b;return e!==fr?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Ws),this.setHSL(Ws.h+e,Ws.s+t,Ws.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Ws),e.getHSL(Fc);const r=mf(Ws.h,Fc.h,t),o=mf(Ws.s,Fc.s,t),l=mf(Ws.l,Fc.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vi=new Xt;Xt.NAMES=Vg;class qh{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xt(e),this.density=t}clone(){return new qh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ex extends ii{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Js,this.environmentIntensity=1,this.environmentRotation=new Js,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ar=new ie,fs=new ie,Ef=new ie,hs=new ie,co=new ie,uo=new ie,P0=new ie,wf=new ie,bf=new ie,Tf=new ie,Af=new Ln,Rf=new Ln,Cf=new Ln;class hr{constructor(e=new ie,t=new ie,r=new ie){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ar.subVectors(e,t),o.cross(Ar);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Ar.subVectors(o,t),fs.subVectors(r,t),Ef.subVectors(e,t);const u=Ar.dot(Ar),f=Ar.dot(fs),m=Ar.dot(Ef),p=fs.dot(fs),y=fs.dot(Ef),S=u*p-f*f;if(S===0)return l.set(0,0,0),null;const _=1/S,M=(p*m-f*y)*_,E=(u*y-f*m)*_;return l.set(1-M-E,E,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,hs)===null?!1:hs.x>=0&&hs.y>=0&&hs.x+hs.y<=1}static getInterpolation(e,t,r,o,l,u,f,m){return this.getBarycoord(e,t,r,o,hs)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(l,hs.x),m.addScaledVector(u,hs.y),m.addScaledVector(f,hs.z),m)}static getInterpolatedAttribute(e,t,r,o,l,u){return Af.setScalar(0),Rf.setScalar(0),Cf.setScalar(0),Af.fromBufferAttribute(e,t),Rf.fromBufferAttribute(e,r),Cf.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Af,l.x),u.addScaledVector(Rf,l.y),u.addScaledVector(Cf,l.z),u}static isFrontFacing(e,t,r,o){return Ar.subVectors(r,t),fs.subVectors(e,t),Ar.cross(fs).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ar.subVectors(this.c,this.b),fs.subVectors(this.a,this.b),Ar.cross(fs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return hr.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return hr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;co.subVectors(o,r),uo.subVectors(l,r),wf.subVectors(e,r);const m=co.dot(wf),p=uo.dot(wf);if(m<=0&&p<=0)return t.copy(r);bf.subVectors(e,o);const y=co.dot(bf),S=uo.dot(bf);if(y>=0&&S<=y)return t.copy(o);const _=m*S-y*p;if(_<=0&&m>=0&&y<=0)return u=m/(m-y),t.copy(r).addScaledVector(co,u);Tf.subVectors(e,l);const M=co.dot(Tf),E=uo.dot(Tf);if(E>=0&&M<=E)return t.copy(l);const R=M*p-m*E;if(R<=0&&p>=0&&E<=0)return f=p/(p-E),t.copy(r).addScaledVector(uo,f);const x=y*E-M*S;if(x<=0&&S-y>=0&&M-E>=0)return P0.subVectors(l,o),f=(S-y)/(S-y+(M-E)),t.copy(o).addScaledVector(P0,f);const v=1/(x+R+_);return u=R*v,f=_*v,t.copy(r).addScaledVector(co,u).addScaledVector(uo,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Rl{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Rr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Rr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Rr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Rr):Rr.fromBufferAttribute(l,u),Rr.applyMatrix4(e.matrixWorld),this.expandByPoint(Rr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),kc.copy(r.boundingBox)),kc.applyMatrix4(e.matrixWorld),this.union(kc)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rr),Rr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fl),Bc.subVectors(this.max,fl),fo.subVectors(e.a,fl),ho.subVectors(e.b,fl),po.subVectors(e.c,fl),Xs.subVectors(ho,fo),qs.subVectors(po,ho),xa.subVectors(fo,po);let t=[0,-Xs.z,Xs.y,0,-qs.z,qs.y,0,-xa.z,xa.y,Xs.z,0,-Xs.x,qs.z,0,-qs.x,xa.z,0,-xa.x,-Xs.y,Xs.x,0,-qs.y,qs.x,0,-xa.y,xa.x,0];return!Pf(t,fo,ho,po,Bc)||(t=[1,0,0,0,1,0,0,0,1],!Pf(t,fo,ho,po,Bc))?!1:(zc.crossVectors(Xs,qs),t=[zc.x,zc.y,zc.z],Pf(t,fo,ho,po,Bc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ps[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ps[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ps[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ps[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ps[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ps[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ps[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ps[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ps),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ps=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Rr=new ie,kc=new Rl,fo=new ie,ho=new ie,po=new ie,Xs=new ie,qs=new ie,xa=new ie,fl=new ie,Bc=new ie,zc=new ie,ya=new ie;function Pf(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){ya.fromArray(s,l);const f=o.x*Math.abs(ya.x)+o.y*Math.abs(ya.y)+o.z*Math.abs(ya.z),m=e.dot(ya),p=t.dot(ya),y=r.dot(ya);if(Math.max(-Math.max(m,p,y),Math.min(m,p,y))>f)return!1}return!0}const zn=new ie,Vc=new Gt;let wx=0;class Lr extends Ia{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=rx,this.updateRanges=[],this.gpuType=Gr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Vc.fromBufferAttribute(this,t),Vc.applyMatrix3(e),this.setXY(t,Vc.x,Vc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)zn.fromBufferAttribute(this,t),zn.applyMatrix3(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)zn.fromBufferAttribute(this,t),zn.applyMatrix4(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)zn.fromBufferAttribute(this,t),zn.applyNormalMatrix(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)zn.fromBufferAttribute(this,t),zn.transformDirection(e),this.setXYZ(t,zn.x,zn.y,zn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ul(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=ki(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ul(t,this.array)),t}setX(e,t){return this.normalized&&(t=ki(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ul(t,this.array)),t}setY(e,t){return this.normalized&&(t=ki(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ul(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ki(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ul(t,this.array)),t}setW(e,t){return this.normalized&&(t=ki(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=ki(t,this.array),r=ki(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=ki(t,this.array),r=ki(r,this.array),o=ki(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=ki(t,this.array),r=ki(r,this.array),o=ki(o,this.array),l=ki(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Gg extends Lr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Hg extends Lr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class pn extends Lr{constructor(e,t,r){super(new Float32Array(e),t,r)}}const bx=new Rl,hl=new ie,Lf=new ie;class Cl{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):bx.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hl.subVectors(e,this.center);const t=hl.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(hl,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hl.copy(e.center).add(Lf)),this.expandByPoint(hl.copy(e.center).sub(Lf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Tx=0;const ur=new Tn,Nf=new ii,mo=new ie,Ki=new Rl,pl=new Rl,ti=new ie;class qn extends Ia{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=Al(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sx(e)?Hg:Gg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Rt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ur.makeRotationFromQuaternion(e),this.applyMatrix4(ur),this}rotateX(e){return ur.makeRotationX(e),this.applyMatrix4(ur),this}rotateY(e){return ur.makeRotationY(e),this.applyMatrix4(ur),this}rotateZ(e){return ur.makeRotationZ(e),this.applyMatrix4(ur),this}translate(e,t,r){return ur.makeTranslation(e,t,r),this.applyMatrix4(ur),this}scale(e,t,r){return ur.makeScale(e,t,r),this.applyMatrix4(ur),this}lookAt(e){return Nf.lookAt(e),Nf.updateMatrix(),this.applyMatrix4(Nf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mo).negate(),this.translate(mo.x,mo.y,mo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new pn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&Mt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){on("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Ki.setFromBufferAttribute(l),this.morphTargetsRelative?(ti.addVectors(this.boundingBox.min,Ki.min),this.boundingBox.expandByPoint(ti),ti.addVectors(this.boundingBox.max,Ki.max),this.boundingBox.expandByPoint(ti)):(this.boundingBox.expandByPoint(Ki.min),this.boundingBox.expandByPoint(Ki.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&on('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Cl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){on("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(Ki.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];pl.setFromBufferAttribute(f),this.morphTargetsRelative?(ti.addVectors(Ki.min,pl.min),Ki.expandByPoint(ti),ti.addVectors(Ki.max,pl.max),Ki.expandByPoint(ti)):(Ki.expandByPoint(pl.min),Ki.expandByPoint(pl.max))}Ki.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)ti.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(ti));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],m=this.morphTargetsRelative;for(let p=0,y=f.count;p<y;p++)ti.fromBufferAttribute(f,p),m&&(mo.fromBufferAttribute(e,p),ti.add(mo)),o=Math.max(o,r.distanceToSquared(ti))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&on('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){on("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Lr(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],m=[];for(let b=0;b<r.count;b++)f[b]=new ie,m[b]=new ie;const p=new ie,y=new ie,S=new ie,_=new Gt,M=new Gt,E=new Gt,R=new ie,x=new ie;function v(b,I,z){p.fromBufferAttribute(r,b),y.fromBufferAttribute(r,I),S.fromBufferAttribute(r,z),_.fromBufferAttribute(l,b),M.fromBufferAttribute(l,I),E.fromBufferAttribute(l,z),y.sub(p),S.sub(p),M.sub(_),E.sub(_);const G=1/(M.x*E.y-E.x*M.y);isFinite(G)&&(R.copy(y).multiplyScalar(E.y).addScaledVector(S,-M.y).multiplyScalar(G),x.copy(S).multiplyScalar(M.x).addScaledVector(y,-E.x).multiplyScalar(G),f[b].add(R),f[I].add(R),f[z].add(R),m[b].add(x),m[I].add(x),m[z].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let b=0,I=T.length;b<I;++b){const z=T[b],G=z.start,W=z.count;for(let ne=G,H=G+W;ne<H;ne+=3)v(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const F=new ie,A=new ie,D=new ie,L=new ie;function k(b){D.fromBufferAttribute(o,b),L.copy(D);const I=f[b];F.copy(I),F.sub(D.multiplyScalar(D.dot(I))).normalize(),A.crossVectors(L,I);const G=A.dot(m[b])<0?-1:1;u.setXYZW(b,F.x,F.y,F.z,G)}for(let b=0,I=T.length;b<I;++b){const z=T[b],G=z.start,W=z.count;for(let ne=G,H=G+W;ne<H;ne+=3)k(e.getX(ne+0)),k(e.getX(ne+1)),k(e.getX(ne+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Lr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,M=r.count;_<M;_++)r.setXYZ(_,0,0,0);const o=new ie,l=new ie,u=new ie,f=new ie,m=new ie,p=new ie,y=new ie,S=new ie;if(e)for(let _=0,M=e.count;_<M;_+=3){const E=e.getX(_+0),R=e.getX(_+1),x=e.getX(_+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,R),u.fromBufferAttribute(t,x),y.subVectors(u,l),S.subVectors(o,l),y.cross(S),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,x),f.add(y),m.add(y),p.add(y),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let _=0,M=t.count;_<M;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),y.subVectors(u,l),S.subVectors(o,l),y.cross(S),r.setXYZ(_+0,y.x,y.y,y.z),r.setXYZ(_+1,y.x,y.y,y.z),r.setXYZ(_+2,y.x,y.y,y.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)ti.fromBufferAttribute(e,t),ti.normalize(),e.setXYZ(t,ti.x,ti.y,ti.z)}toNonIndexed(){function e(f,m){const p=f.array,y=f.itemSize,S=f.normalized,_=new p.constructor(m.length*y);let M=0,E=0;for(let R=0,x=m.length;R<x;R++){f.isInterleavedBufferAttribute?M=m[R]*f.data.stride+f.offset:M=m[R]*y;for(let v=0;v<y;v++)_[E++]=p[M++]}return new Lr(_,y,S)}if(this.index===null)return Mt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qn,r=this.index.array,o=this.attributes;for(const f in o){const m=o[f],p=e(m,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const m=[],p=l[f];for(let y=0,S=p.length;y<S;y++){const _=p[y],M=e(_,r);m.push(M)}t.morphAttributes[f]=m}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,m=u.length;f<m;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let l=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],y=[];for(let S=0,_=p.length;S<_;S++){const M=p[S];y.push(M.toJSON(e.data))}y.length>0&&(o[m]=y,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const y=o[p];this.setAttribute(p,y.clone(t))}const l=e.morphAttributes;for(const p in l){const y=[],S=l[p];for(let _=0,M=S.length;_<M;_++)y.push(S[_].clone(t));this.morphAttributes[p]=y}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,y=u.length;p<y;p++){const S=u[p];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const If=new ie,Ax=new ie,Rx=new Rt;class $s{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=If.subVectors(r,t).cross(Ax.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(If),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Rx.getNormalMatrix(e),o=this.coplanarPoint(If).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Cx=0;class Da extends Ia{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=Al(),this.name="",this.type="Material",this.blending=Sl,this.side=Ra,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sg,this.blendDst=Mg,this.blendEquation=So,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Ml,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Z_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pf,this.stencilZFail=pf,this.stencilZPass=pf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){Mt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Mt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const m=l[f];delete m.metadata,u.push(m)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new $s().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Gt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Gt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ms=new ie,Df=new ie,Gc=new ie,Hc=new ie;class jh{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ms)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ms.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ms.copy(this.origin).addScaledVector(this.direction,t),ms.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Df.copy(e).add(t).multiplyScalar(.5),Gc.copy(t).sub(e).normalize(),Hc.copy(this.origin).sub(Df);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Gc),f=Hc.dot(this.direction),m=-Hc.dot(Gc),p=Hc.lengthSq(),y=Math.abs(1-u*u);let S,_,M,E;if(y>0)if(S=u*m-f,_=u*f-m,E=l*y,S>=0)if(_>=-E)if(_<=E){const R=1/y;S*=R,_*=R,M=S*(S+u*_+2*f)+_*(u*S+_+2*m)+p}else _=l,S=Math.max(0,-(u*_+f)),M=-S*S+_*(_+2*m)+p;else _=-l,S=Math.max(0,-(u*_+f)),M=-S*S+_*(_+2*m)+p;else _<=-E?(S=Math.max(0,-(-u*l+f)),_=S>0?-l:Math.min(Math.max(-l,-m),l),M=-S*S+_*(_+2*m)+p):_<=E?(S=0,_=Math.min(Math.max(-l,-m),l),M=_*(_+2*m)+p):(S=Math.max(0,-(u*l+f)),_=S>0?l:Math.min(Math.max(-l,-m),l),M=-S*S+_*(_+2*m)+p);else _=u>0?-l:l,S=Math.max(0,-(u*_+f)),M=-S*S+_*(_+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(Df).addScaledVector(Gc,_),M}intersectSphere(e,t){if(e.radius<0)return null;ms.subVectors(e.center,this.origin);const r=ms.dot(this.direction),o=ms.dot(ms)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,m=r+u;return m<0?null:f<0?this.at(m,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,m;const p=1/this.direction.x,y=1/this.direction.y,S=1/this.direction.z,_=this.origin;return p>=0?(r=(e.min.x-_.x)*p,o=(e.max.x-_.x)*p):(r=(e.max.x-_.x)*p,o=(e.min.x-_.x)*p),y>=0?(l=(e.min.y-_.y)*y,u=(e.max.y-_.y)*y):(l=(e.max.y-_.y)*y,u=(e.min.y-_.y)*y),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),S>=0?(f=(e.min.z-_.z)*S,m=(e.max.z-_.z)*S):(f=(e.max.z-_.z)*S,m=(e.min.z-_.z)*S),r>m||f>o)||((f>r||r!==r)&&(r=f),(m<o||o!==o)&&(o=m),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,ms)!==null}intersectTriangle(e,t,r,o,l){const u=this.origin,f=this.direction,m=f.x,p=f.y,y=f.z,S=e.x-u.x,_=e.y-u.y,M=e.z-u.z,E=t.x-u.x,R=t.y-u.y,x=t.z-u.z,v=r.x-u.x,T=r.y-u.y,F=r.z-u.z,A=Math.abs(m),D=Math.abs(p),L=Math.abs(y);let k,b,I,z,G,W,ne,H,re,fe,ee,te;if(A>=D&&A>=L?(I=m,W=S,re=E,te=v,m>=0?(k=p,b=y,z=_,G=M,ne=R,H=x,fe=T,ee=F):(k=y,b=p,z=M,G=_,ne=x,H=R,fe=F,ee=T)):D>=L?(I=p,W=_,re=R,te=T,p>=0?(k=y,b=m,z=M,G=S,ne=x,H=E,fe=F,ee=v):(k=m,b=y,z=S,G=M,ne=E,H=x,fe=v,ee=F)):(I=y,W=M,re=x,te=F,y>=0?(k=m,b=p,z=S,G=_,ne=E,H=R,fe=v,ee=T):(k=p,b=m,z=_,G=S,ne=R,H=E,fe=T,ee=v)),I===0)return null;const K=k/I,Z=b/I,U=1/I,de=z-K*W,be=G-Z*W,qe=ne-K*re,je=H-Z*re,$e=fe-K*te,ce=ee-Z*te,he=$e*je-ce*qe,Ne=de*ce-be*$e,Qe=qe*be-je*de;if(o){if(he<0||Ne<0||Qe<0)return null}else if((he<0||Ne<0||Qe<0)&&(he>0||Ne>0||Qe>0))return null;const ze=he+Ne+Qe;if(ze===0)return null;const dt=U*(he*W+Ne*re+Qe*te);return(ze>0?dt<0:dt>0)?null:this.at(dt/ze,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt extends Da{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Js,this.combine=Eg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const L0=new Tn,Sa=new jh,Wc=new Cl,N0=new ie,Xc=new ie,qc=new ie,jc=new ie,Uf=new ie,$c=new ie,I0=new ie,Yc=new ie;class ve extends ii{constructor(e=new qn,t=new Wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){$c.set(0,0,0);for(let m=0,p=l.length;m<p;m++){const y=f[m],S=l[m];y!==0&&(Uf.fromBufferAttribute(S,e),u?$c.addScaledVector(Uf,y):$c.addScaledVector(Uf.sub(t),y))}t.add($c)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Wc.copy(r.boundingSphere),Wc.applyMatrix4(l),Sa.copy(e.ray).recast(e.near),!(Wc.containsPoint(Sa.origin)===!1&&(Sa.intersectSphere(Wc,N0)===null||Sa.origin.distanceToSquared(N0)>(e.far-e.near)**2))&&(L0.copy(l).invert(),Sa.copy(e.ray).applyMatrix4(L0),!(r.boundingBox!==null&&Sa.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Sa)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,m=l.attributes.position,p=l.attributes.uv,y=l.attributes.uv1,S=l.attributes.normal,_=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(u))for(let E=0,R=_.length;E<R;E++){const x=_[E],v=u[x.materialIndex],T=Math.max(x.start,M.start),F=Math.min(f.count,Math.min(x.start+x.count,M.start+M.count));for(let A=T,D=F;A<D;A+=3){const L=f.getX(A),k=f.getX(A+1),b=f.getX(A+2);o=Kc(this,v,e,r,p,y,S,L,k,b),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),R=Math.min(f.count,M.start+M.count);for(let x=E,v=R;x<v;x+=3){const T=f.getX(x),F=f.getX(x+1),A=f.getX(x+2);o=Kc(this,u,e,r,p,y,S,T,F,A),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let E=0,R=_.length;E<R;E++){const x=_[E],v=u[x.materialIndex],T=Math.max(x.start,M.start),F=Math.min(m.count,Math.min(x.start+x.count,M.start+M.count));for(let A=T,D=F;A<D;A+=3){const L=A,k=A+1,b=A+2;o=Kc(this,v,e,r,p,y,S,L,k,b),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const E=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let x=E,v=R;x<v;x+=3){const T=x,F=x+1,A=x+2;o=Kc(this,u,e,r,p,y,S,T,F,A),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function Px(s,e,t,r,o,l,u,f){let m;if(e.side===Vi?m=r.intersectTriangle(u,l,o,!0,f):m=r.intersectTriangle(o,l,u,e.side===Ra,f),m===null)return null;Yc.copy(f),Yc.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Yc);return p<t.near||p>t.far?null:{distance:p,point:Yc.clone(),object:s}}function Kc(s,e,t,r,o,l,u,f,m,p){s.getVertexPosition(f,Xc),s.getVertexPosition(m,qc),s.getVertexPosition(p,jc);const y=Px(s,e,t,r,Xc,qc,jc,I0);if(y){const S=new ie;hr.getBarycoord(I0,Xc,qc,jc,S),o&&(y.uv=hr.getInterpolatedAttribute(o,f,m,p,S,new Gt)),l&&(y.uv1=hr.getInterpolatedAttribute(l,f,m,p,S,new Gt)),u&&(y.normal=hr.getInterpolatedAttribute(u,f,m,p,S,new ie),y.normal.dot(r.direction)>0&&y.normal.multiplyScalar(-1));const _={a:f,b:m,c:p,normal:new ie,materialIndex:0};hr.getNormal(Xc,qc,jc,_.normal),y.face=_,y.barycoord=S}return y}class Lx extends xi{constructor(e=null,t=1,r=1,o,l,u,f,m,p=ci,y=ci,S,_){super(null,u,f,m,p,y,o,l,S,_),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ma=new Cl,Nx=new Gt(.5,.5),Zc=new ie;class $h{constructor(e=new $s,t=new $s,r=new $s,o=new $s,l=new $s,u=new $s){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Hr,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],m=l[2],p=l[3],y=l[4],S=l[5],_=l[6],M=l[7],E=l[8],R=l[9],x=l[10],v=l[11],T=l[12],F=l[13],A=l[14],D=l[15];if(o[0].setComponents(p-u,M-y,v-E,D-T).normalize(),o[1].setComponents(p+u,M+y,v+E,D+T).normalize(),o[2].setComponents(p+f,M+S,v+R,D+F).normalize(),o[3].setComponents(p-f,M-S,v-R,D-F).normalize(),r)o[4].setComponents(m,_,x,A).normalize(),o[5].setComponents(p-m,M-_,v-x,D-A).normalize();else if(o[4].setComponents(p-m,M-_,v-x,D-A).normalize(),t===Hr)o[5].setComponents(p+m,M+_,v+x,D+A).normalize();else if(t===bl)o[5].setComponents(m,_,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ma.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ma.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ma)}intersectsSprite(e){Ma.center.set(0,0,0);const t=Nx.distanceTo(e.center);return Ma.radius=.7071067811865476+t,Ma.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ma)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Zc.x=o.normal.x>0?e.max.x:e.min.x,Zc.y=o.normal.y>0?e.max.y:e.min.y,Zc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Zc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ys extends Da{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Eu=new ie,wu=new ie,D0=new Tn,ml=new jh,Jc=new Cl,Of=new ie,U0=new ie;class Wg extends ii{constructor(e=new qn,t=new Ys){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)Eu.fromBufferAttribute(t,o-1),wu.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=Eu.distanceTo(wu);e.setAttribute("lineDistance",new pn(r,1))}else Mt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Jc.copy(r.boundingSphere),Jc.applyMatrix4(o),Jc.radius+=l,e.ray.intersectsSphere(Jc)===!1)return;D0.copy(o).invert(),ml.copy(e.ray).applyMatrix4(D0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),m=f*f,p=this.isLineSegments?2:1,y=r.index,_=r.attributes.position;if(y!==null){const M=Math.max(0,u.start),E=Math.min(y.count,u.start+u.count);for(let R=M,x=E-1;R<x;R+=p){const v=y.getX(R),T=y.getX(R+1),F=Qc(this,e,ml,m,v,T,R);F&&t.push(F)}if(this.isLineLoop){const R=y.getX(E-1),x=y.getX(M),v=Qc(this,e,ml,m,R,x,E-1);v&&t.push(v)}}else{const M=Math.max(0,u.start),E=Math.min(_.count,u.start+u.count);for(let R=M,x=E-1;R<x;R+=p){const v=Qc(this,e,ml,m,R,R+1,R);v&&t.push(v)}if(this.isLineLoop){const R=Qc(this,e,ml,m,E-1,M,E-1);R&&t.push(R)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Qc(s,e,t,r,o,l,u){const f=s.geometry.attributes.position;if(Eu.fromBufferAttribute(f,o),wu.fromBufferAttribute(f,l),t.distanceSqToSegment(Eu,wu,Of,U0)>r)return;Of.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(Of);if(!(p<e.near||p>e.far))return{distance:p,point:U0.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const O0=new ie,F0=new ie;class go extends Wg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)O0.fromBufferAttribute(t,o),F0.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+O0.distanceTo(F0);e.setAttribute("lineDistance",new pn(r,1))}else Mt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Xg extends Da{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const k0=new Tn,Lh=new jh,eu=new Cl,tu=new ie;class Ix extends ii{constructor(e=new qn,t=new Xg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),eu.copy(r.boundingSphere),eu.applyMatrix4(o),eu.radius+=l,e.ray.intersectsSphere(eu)===!1)return;k0.copy(o).invert(),Lh.copy(e.ray).applyMatrix4(k0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),m=f*f,p=r.index,S=r.attributes.position;if(p!==null){const _=Math.max(0,u.start),M=Math.min(p.count,u.start+u.count);for(let E=_,R=M;E<R;E++){const x=p.getX(E);tu.fromBufferAttribute(S,x),B0(tu,x,m,o,e,t,this)}}else{const _=Math.max(0,u.start),M=Math.min(S.count,u.start+u.count);for(let E=_,R=M;E<R;E++)tu.fromBufferAttribute(S,E),B0(tu,E,m,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function B0(s,e,t,r,o,l,u){const f=Lh.distanceSqToPoint(s);if(f<t){const m=new ie;Lh.closestPointToPoint(s,m),m.applyMatrix4(r);const p=o.ray.origin.distanceTo(m);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class qg extends xi{constructor(e=[],t=Ca,r,o,l,u,f,m,p,y){super(e,t,r,o,l,u,f,m,p,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Au extends xi{constructor(e,t,r,o,l,u,f,m,p){super(e,t,r,o,l,u,f,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Tl extends xi{constructor(e,t,r=Xr,o,l,u,f=ci,m=ci,p,y=ys,S=1){if(y!==ys&&y!==Ta)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:S};super(_,o,l,u,f,m,y,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Dx extends Tl{constructor(e,t=Xr,r=Ca,o,l,u=ci,f=ci,m,p=ys){const y={width:e,height:e,depth:1},S=[y,y,y,y,y,y];super(e,e,t,r,o,l,u,f,m,p),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class jg extends xi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class St extends qn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const m=[],p=[],y=[],S=[];let _=0,M=0;E("z","y","x",-1,-1,r,t,e,u,l,0),E("z","y","x",1,-1,r,t,-e,u,l,1),E("x","z","y",1,1,e,r,t,o,u,2),E("x","z","y",1,-1,e,r,-t,o,u,3),E("x","y","z",1,-1,e,t,r,o,l,4),E("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(m),this.setAttribute("position",new pn(p,3)),this.setAttribute("normal",new pn(y,3)),this.setAttribute("uv",new pn(S,2));function E(R,x,v,T,F,A,D,L,k,b,I){const z=A/k,G=D/b,W=A/2,ne=D/2,H=L/2,re=k+1,fe=b+1;let ee=0,te=0;const K=new ie;for(let Z=0;Z<fe;Z++){const U=Z*G-ne;for(let de=0;de<re;de++){const be=de*z-W;K[R]=be*T,K[x]=U*F,K[v]=H,p.push(K.x,K.y,K.z),K[R]=0,K[x]=0,K[v]=L>0?1:-1,y.push(K.x,K.y,K.z),S.push(de/k),S.push(1-Z/b),ee+=1}}for(let Z=0;Z<b;Z++)for(let U=0;U<k;U++){const de=_+U+re*Z,be=_+U+re*(Z+1),qe=_+(U+1)+re*(Z+1),je=_+(U+1)+re*Z;m.push(de,be,je),m.push(be,qe,je),te+=6}f.addGroup(M,te,I),M+=te,_+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new St(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class wa extends qn{constructor(e=1,t=1,r=4,o=8,l=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:r,radialSegments:o,heightSegments:l},t=Math.max(0,t),r=Math.max(1,Math.floor(r)),o=Math.max(3,Math.floor(o)),l=Math.max(1,Math.floor(l));const u=[],f=[],m=[],p=[],y=t/2,S=Math.PI/2*e,_=t,M=2*S+_,E=r*2+l,R=o+1,x=new ie,v=new ie;for(let T=0;T<=E;T++){let F=0,A=0,D=0,L=0;if(T<=r){const I=T/r,z=I*Math.PI/2;A=-y-e*Math.cos(z),D=e*Math.sin(z),L=-e*Math.cos(z),F=I*S}else if(T<=r+l){const I=(T-r)/l;A=-y+I*t,D=e,L=0,F=S+I*_}else{const I=(T-r-l)/r,z=I*Math.PI/2;A=y+e*Math.sin(z),D=e*Math.cos(z),L=e*Math.sin(z),F=S+_+I*S}const k=Math.max(0,Math.min(1,F/M));let b=0;T===0?b=.5/o:T===E&&(b=-.5/o);for(let I=0;I<=o;I++){const z=I/o,G=z*Math.PI*2,W=Math.sin(G),ne=Math.cos(G);v.x=-D*ne,v.y=A,v.z=D*W,f.push(v.x,v.y,v.z),x.set(-D*ne,L,D*W),x.normalize(),m.push(x.x,x.y,x.z),p.push(z+b,k)}if(T>0){const I=(T-1)*R;for(let z=0;z<o;z++){const G=I+z,W=I+z+1,ne=T*R+z,H=T*R+z+1;u.push(G,W,ne),u.push(W,H,ne)}}}this.setIndex(u),this.setAttribute("position",new pn(f,3)),this.setAttribute("normal",new pn(m,3)),this.setAttribute("uv",new pn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class rn extends qn{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,f=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:m};const p=this;o=Math.floor(o),l=Math.floor(l);const y=[],S=[],_=[],M=[];let E=0;const R=[],x=r/2;let v=0;T(),u===!1&&(e>0&&F(!0),t>0&&F(!1)),this.setIndex(y),this.setAttribute("position",new pn(S,3)),this.setAttribute("normal",new pn(_,3)),this.setAttribute("uv",new pn(M,2));function T(){const A=new ie,D=new ie;let L=0;const k=(t-e)/r;for(let b=0;b<=l;b++){const I=[],z=b/l,G=z*(t-e)+e;for(let W=0;W<=o;W++){const ne=W/o,H=ne*m+f,re=Math.sin(H),fe=Math.cos(H);D.x=G*re,D.y=-z*r+x,D.z=G*fe,S.push(D.x,D.y,D.z),A.set(re,k,fe).normalize(),_.push(A.x,A.y,A.z),M.push(ne,1-z),I.push(E++)}R.push(I)}for(let b=0;b<o;b++)for(let I=0;I<l;I++){const z=R[I][b],G=R[I+1][b],W=R[I+1][b+1],ne=R[I][b+1];(e>0||I!==0)&&(y.push(z,G,ne),L+=3),(t>0||I!==l-1)&&(y.push(G,W,ne),L+=3)}p.addGroup(v,L,0),v+=L}function F(A){const D=E,L=new Gt,k=new ie;let b=0;const I=A===!0?e:t,z=A===!0?1:-1;for(let W=1;W<=o;W++)S.push(0,x*z,0),_.push(0,z,0),M.push(.5,.5),E++;const G=E;for(let W=0;W<=o;W++){const H=W/o*m+f,re=Math.cos(H),fe=Math.sin(H);k.x=I*fe,k.y=x*z,k.z=I*re,S.push(k.x,k.y,k.z),_.push(0,z,0),L.x=re*.5+.5,L.y=fe*.5*z+.5,M.push(L.x,L.y),E++}for(let W=0;W<o;W++){const ne=D+W,H=G+W;A===!0?y.push(H,H+1,ne):y.push(H+1,H,ne),b+=3}p.addGroup(v,b,A===!0?1:2),v+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ri extends rn{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,f=Math.PI*2){super(0,e,t,r,o,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new Ri(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yh extends qn{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],u=[];f(o),p(r),y(),this.setAttribute("position",new pn(l,3)),this.setAttribute("normal",new pn(l.slice(),3)),this.setAttribute("uv",new pn(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(T){const F=new ie,A=new ie,D=new ie;for(let L=0;L<t.length;L+=3)M(t[L+0],F),M(t[L+1],A),M(t[L+2],D),m(F,A,D,T)}function m(T,F,A,D){const L=D+1,k=[];for(let b=0;b<=L;b++){k[b]=[];const I=T.clone().lerp(A,b/L),z=F.clone().lerp(A,b/L),G=L-b;for(let W=0;W<=G;W++)W===0&&b===L?k[b][W]=I:k[b][W]=I.clone().lerp(z,W/G)}for(let b=0;b<L;b++)for(let I=0;I<2*(L-b)-1;I++){const z=Math.floor(I/2);I%2===0?(_(k[b][z+1]),_(k[b+1][z]),_(k[b][z])):(_(k[b][z+1]),_(k[b+1][z+1]),_(k[b+1][z]))}}function p(T){const F=new ie;for(let A=0;A<l.length;A+=3)F.x=l[A+0],F.y=l[A+1],F.z=l[A+2],F.normalize().multiplyScalar(T),l[A+0]=F.x,l[A+1]=F.y,l[A+2]=F.z}function y(){const T=new ie;for(let F=0;F<l.length;F+=3){T.x=l[F+0],T.y=l[F+1],T.z=l[F+2];const A=x(T)/2/Math.PI+.5,D=v(T)/Math.PI+.5;u.push(A,1-D)}E(),S()}function S(){for(let T=0;T<u.length;T+=6){const F=u[T+0],A=u[T+2],D=u[T+4],L=Math.max(F,A,D),k=Math.min(F,A,D);L>.9&&k<.1&&(F<.2&&(u[T+0]+=1),A<.2&&(u[T+2]+=1),D<.2&&(u[T+4]+=1))}}function _(T){l.push(T.x,T.y,T.z)}function M(T,F){const A=T*3;F.x=e[A+0],F.y=e[A+1],F.z=e[A+2]}function E(){const T=new ie,F=new ie,A=new ie,D=new ie,L=new Gt,k=new Gt,b=new Gt;for(let I=0,z=0;I<l.length;I+=9,z+=6){T.set(l[I+0],l[I+1],l[I+2]),F.set(l[I+3],l[I+4],l[I+5]),A.set(l[I+6],l[I+7],l[I+8]),L.set(u[z+0],u[z+1]),k.set(u[z+2],u[z+3]),b.set(u[z+4],u[z+5]),D.copy(T).add(F).add(A).divideScalar(3);const G=x(D);R(L,z+0,T,G),R(k,z+2,F,G),R(b,z+4,A,G)}}function R(T,F,A,D){D<0&&T.x===1&&(u[F]=T.x-1),A.x===0&&A.z===0&&(u[F]=D/2/Math.PI+.5)}function x(T){return Math.atan2(T.z,-T.x)}function v(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yh(e.vertices,e.indices,e.radius,e.detail)}}const nu=new ie,iu=new ie,Ff=new ie,ru=new hr;class vo extends qn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),l=Math.cos(gu*t),u=e.getIndex(),f=e.getAttribute("position"),m=u?u.count:f.count,p=[0,0,0],y=["a","b","c"],S=new Array(3),_={},M=[];for(let E=0;E<m;E+=3){u?(p[0]=u.getX(E),p[1]=u.getX(E+1),p[2]=u.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:R,b:x,c:v}=ru;if(R.fromBufferAttribute(f,p[0]),x.fromBufferAttribute(f,p[1]),v.fromBufferAttribute(f,p[2]),ru.getNormal(Ff),S[0]=`${Math.round(R.x*o)},${Math.round(R.y*o)},${Math.round(R.z*o)}`,S[1]=`${Math.round(x.x*o)},${Math.round(x.y*o)},${Math.round(x.z*o)}`,S[2]=`${Math.round(v.x*o)},${Math.round(v.y*o)},${Math.round(v.z*o)}`,!(S[0]===S[1]||S[1]===S[2]||S[2]===S[0]))for(let T=0;T<3;T++){const F=(T+1)%3,A=S[T],D=S[F],L=ru[y[T]],k=ru[y[F]],b=`${A}_${D}`,I=`${D}_${A}`;I in _&&_[I]?(Ff.dot(_[I].normal)<=l&&(M.push(L.x,L.y,L.z),M.push(k.x,k.y,k.z)),_[I]=null):b in _||(_[b]={index0:p[T],index1:p[F],normal:Ff.clone()})}}for(const E in _)if(_[E]){const{index0:R,index1:x}=_[E];nu.fromBufferAttribute(f,R),iu.fromBufferAttribute(f,x),M.push(nu.x,nu.y,nu.z),M.push(iu.x,iu.y,iu.z)}this.setAttribute("position",new pn(M,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Ru extends Yh{constructor(e=1,t=0){const r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],o=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,o,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ru(e.radius,e.detail)}}class Na extends qn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),m=Math.floor(o),p=f+1,y=m+1,S=e/f,_=t/m,M=[],E=[],R=[],x=[];for(let v=0;v<y;v++){const T=v*_-u;for(let F=0;F<p;F++){const A=F*S-l;E.push(A,-T,0),R.push(0,0,1),x.push(F/f),x.push(1-v/m)}}for(let v=0;v<m;v++)for(let T=0;T<f;T++){const F=T+p*v,A=T+p*(v+1),D=T+1+p*(v+1),L=T+1+p*v;M.push(F,A,L),M.push(A,D,L)}this.setIndex(M),this.setAttribute("position",new pn(E,3)),this.setAttribute("normal",new pn(R,3)),this.setAttribute("uv",new pn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.width,e.height,e.widthSegments,e.heightSegments)}}class ni extends qn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const m=Math.min(u+f,Math.PI);let p=0;const y=[],S=new ie,_=new ie,M=[],E=[],R=[],x=[];for(let v=0;v<=r;v++){const T=[],F=v/r,A=u+F*f,D=e*Math.cos(A),L=Math.sqrt(e*e-D*D);let k=0;v===0&&u===0?k=.5/t:v===r&&m===Math.PI&&(k=-.5/t);for(let b=0;b<=t;b++){const I=b/t,z=o+I*l;S.x=-L*Math.cos(z),S.y=D,S.z=L*Math.sin(z),E.push(S.x,S.y,S.z),_.copy(S).normalize(),R.push(_.x,_.y,_.z),x.push(I+k,1-F),T.push(p++)}y.push(T)}for(let v=0;v<r;v++)for(let T=0;T<t;T++){const F=y[v][T+1],A=y[v][T],D=y[v+1][T],L=y[v+1][T+1];(v!==0||u>0)&&M.push(F,A,L),(v!==r-1||m<Math.PI)&&M.push(A,D,L)}this.setIndex(M),this.setAttribute("position",new pn(E,3)),this.setAttribute("normal",new pn(R,3)),this.setAttribute("uv",new pn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ni(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Gn extends qn{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2,u=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l,thetaStart:u,thetaLength:f},r=Math.floor(r),o=Math.floor(o);const m=[],p=[],y=[],S=[],_=new ie,M=new ie,E=new ie;for(let R=0;R<=r;R++){const x=u+R/r*f;for(let v=0;v<=o;v++){const T=v/o*l;M.x=(e+t*Math.cos(x))*Math.cos(T),M.y=(e+t*Math.cos(x))*Math.sin(T),M.z=t*Math.sin(x),p.push(M.x,M.y,M.z),_.x=e*Math.cos(T),_.y=e*Math.sin(T),E.subVectors(M,_).normalize(),y.push(E.x,E.y,E.z),S.push(v/o),S.push(R/r)}}for(let R=1;R<=r;R++)for(let x=1;x<=o;x++){const v=(o+1)*R+x-1,T=(o+1)*(R-1)+x-1,F=(o+1)*(R-1)+x,A=(o+1)*R+x;m.push(v,T,A),m.push(T,F,A)}this.setIndex(m),this.setAttribute("position",new pn(p,3)),this.setAttribute("normal",new pn(y,3)),this.setAttribute("uv",new pn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ro(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(z0(o))o.isRenderTargetTexture?(Mt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(z0(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Ai(s){const e={};for(let t=0;t<s.length;t++){const r=Ro(s[t]);for(const o in r)e[o]=r[o]}return e}function z0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Ux(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function $g(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Yt.workingColorSpace}const Ox={clone:Ro,merge:Ai};var Fx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jr extends Da{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fx,this.fragmentShader=kx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ro(e.uniforms),this.uniformsGroups=Ux(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Xt().setHex(o.value);break;case"v2":this.uniforms[r].value=new Gt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ie().fromArray(o.value);break;case"v4":this.uniforms[r].value=new Ln().fromArray(o.value);break;case"m3":this.uniforms[r].value=new Rt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Tn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Bx extends jr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vn extends Da{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ch,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Js,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zx extends Da{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Y_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vx extends Da{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Kh extends ii{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const kf=new Tn,V0=new ie,G0=new ie;class Yg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.mapType=Qi,this.map=null,this.mapPass=null,this.matrix=new Tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $h,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new Ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;V0.setFromMatrixPosition(e.matrixWorld),t.position.copy(V0),G0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(G0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){kf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(kf,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,f=o?o.w/l.y:1,m=o?o.x/l.x:0,p=o?o.y/l.y:0;e.coordinateSystem===bl||e.reversedDepth?t.set(.5*u,0,0,.5*u+m,0,.5*f,0,.5*f+p,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+m,0,.5*f,0,.5*f+p,0,0,.5,.5,0,0,0,1),t.multiply(kf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const su=new ie,au=new Co,Br=new ie;class Kg extends ii{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tn,this.projectionMatrix=new Tn,this.projectionMatrixInverse=new Tn,this.coordinateSystem=Hr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(su,au,Br),Br.x===1&&Br.y===1&&Br.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(su,au,Br.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(su,au,Br),Br.x===1&&Br.y===1&&Br.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(su,au,Br.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const js=new ie,H0=new Gt,W0=new Gt;class Ji extends Kg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ph*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ph*2*Math.atan(Math.tan(gu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){js.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(js.x,js.y).multiplyScalar(-e/js.z),js.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(js.x,js.y).multiplyScalar(-e/js.z)}getViewSize(e,t){return this.getViewBounds(e,H0,W0),t.subVectors(W0,H0)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gu*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/m,t-=u.offsetY*r/p,o*=u.width/m,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Gx extends Yg{constructor(){super(new Ji(90,1,.5,500)),this.isPointLightShadow=!0}}class ou extends Kh{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new Gx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Zh extends Kg{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,m=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=y*this.view.offsetY,m=f-y*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Hx extends Yg{constructor(){super(new Zh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wx extends Kh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ii.DEFAULT_UP),this.updateMatrix(),this.target=new ii,this.shadow=new Hx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Xx extends Kh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const _o=-90,xo=1;class qx extends ii{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Ji(_o,xo,e,t);o.layers=this.layers,this.add(o);const l=new Ji(_o,xo,e,t);l.layers=this.layers,this.add(l);const u=new Ji(_o,xo,e,t);u.layers=this.layers,this.add(u);const f=new Ji(_o,xo,e,t);f.layers=this.layers,this.add(f);const m=new Ji(_o,xo,e,t);m.layers=this.layers,this.add(m);const p=new Ji(_o,xo,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,m]=t;for(const p of t)this.remove(p);if(e===Hr)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===bl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,m,p,y]=this.children,S=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(r,4,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,y),e.setRenderTarget(S,_,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class jx extends Ji{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const np=class np{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};np.prototype.isMatrix2=!0;let X0=np;function q0(s,e,t,r){const o=$x(r);switch(t){case Ug:return s*e;case Fg:return s*e/o.components*o.byteLength;case zh:return s*e/o.components*o.byteLength;case La:return s*e*2/o.components*o.byteLength;case Vh:return s*e*2/o.components*o.byteLength;case Og:return s*e*3/o.components*o.byteLength;case Cr:return s*e*4/o.components*o.byteLength;case Gh:return s*e*4/o.components*o.byteLength;case fu:case hu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case pu:case mu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case eh:case nh:return Math.max(s,16)*Math.max(e,8)/4;case Qf:case th:return Math.max(s,8)*Math.max(e,8)/2;case ih:case rh:case ah:case oh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case sh:case _u:case lh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ch:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case uh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case dh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case fh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case hh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ph:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case mh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case gh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case vh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case _h:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case xh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case yh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Sh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Mh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Eh:case wh:case bh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Th:case Ah:return Math.ceil(s/4)*Math.ceil(e/4)*8;case xu:case Rh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $x(s){switch(s){case Qi:case Lg:return{byteLength:1,components:1};case El:case Ng:case qr:return{byteLength:2,components:1};case kh:case Bh:return{byteLength:2,components:4};case Xr:case Fh:case Gr:return{byteLength:4,components:1};case Ig:case Dg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uh}}));typeof window<"u"&&(window.__THREE__?Mt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zg(){let s=null,e=!1,t=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Yx(s){const e=new WeakMap;function t(f,m){const p=f.array,y=f.usage,S=p.byteLength,_=s.createBuffer();s.bindBuffer(m,_),s.bufferData(m,p,y),f.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:S}}function r(f,m,p){const y=m.array,S=m.updateRanges;if(s.bindBuffer(p,f),S.length===0)s.bufferSubData(p,0,y);else{S.sort((M,E)=>M.start-E.start);let _=0;for(let M=1;M<S.length;M++){const E=S[_],R=S[M];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++_,S[_]=R)}S.length=_+1;for(let M=0,E=S.length;M<E;M++){const R=S[M];s.bufferSubData(p,R.start*y.BYTES_PER_ELEMENT,y,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=e.get(f);m&&(s.deleteBuffer(m.buffer),e.delete(f))}function u(f,m){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const y=e.get(f);(!y||y.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,m));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,m),p.version=f.version}}return{get:o,remove:l,update:u}}var Kx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zx=`#ifdef USE_ALPHAHASH
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
#endif`,Jx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ey=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ty=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ny=`#ifdef USE_AOMAP
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
#endif`,iy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ry=`#ifdef USE_BATCHING
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
#endif`,sy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ay=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ly=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cy=`#ifdef USE_IRIDESCENCE
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
#endif`,uy=`#ifdef USE_BUMPMAP
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
#endif`,dy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,my=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,_y=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,xy=`#define PI 3.141592653589793
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
} // validated`,yy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Sy=`vec3 transformedNormal = objectNormal;
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
#endif`,My=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ey=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,by=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ty="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ay=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ry=`#ifdef USE_ENVMAP
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
#endif`,Cy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Py=`#ifdef USE_ENVMAP
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
#endif`,Ly=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ny=`#ifdef USE_ENVMAP
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
#endif`,Iy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Uy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Oy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fy=`#ifdef USE_GRADIENTMAP
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
}`,ky=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,By=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vy=`uniform bool receiveShadow;
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#include <lightprobes_pars_fragment>`,Gy=`#ifdef USE_ENVMAP
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
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Hy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jy=`PhysicalMaterial material;
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
#endif`,$y=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
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
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
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
}`,Yy=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
#endif`,Ky=`#if defined( RE_IndirectDiffuse )
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
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Qy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,eS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,aS=`#if defined( USE_POINTS_UV )
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
#endif`,oS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fS=`#ifdef USE_MORPHTARGETS
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
#endif`,hS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_S=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xS=`#ifdef USE_NORMALMAP
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
#endif`,yS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,SS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,MS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ES=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,TS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,PS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,LS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
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
#endif`,IS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,DS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,US=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
}`,OS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,FS=`#ifdef USE_SKINNING
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
#endif`,kS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,BS=`#ifdef USE_SKINNING
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
#endif`,zS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,VS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,WS=`#ifdef USE_TRANSMISSION
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
#endif`,XS=`#ifdef USE_TRANSMISSION
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
#endif`,qS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ZS=`uniform sampler2D t2D;
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
}`,JS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nM=`#include <common>
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
}`,iM=`#if DEPTH_PACKING == 3200
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
}`,rM=`#define DISTANCE
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
}`,sM=`#define DISTANCE
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
}`,aM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lM=`uniform float scale;
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
}`,cM=`uniform vec3 diffuse;
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
}`,uM=`#include <common>
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
}`,dM=`uniform vec3 diffuse;
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
}`,fM=`#define LAMBERT
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
}`,hM=`#define LAMBERT
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
}`,pM=`#define MATCAP
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
}`,mM=`#define MATCAP
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
}`,gM=`#define NORMAL
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
}`,vM=`#define NORMAL
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
}`,_M=`#define PHONG
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
}`,xM=`#define PHONG
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
}`,yM=`#define STANDARD
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
}`,SM=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
}`,MM=`#define TOON
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
}`,EM=`#define TOON
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
}`,wM=`uniform float size;
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
}`,bM=`uniform vec3 diffuse;
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
}`,TM=`#include <common>
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
}`,AM=`uniform vec3 color;
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
}`,RM=`uniform float rotation;
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
}`,CM=`uniform vec3 diffuse;
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
}`,Ut={alphahash_fragment:Kx,alphahash_pars_fragment:Zx,alphamap_fragment:Jx,alphamap_pars_fragment:Qx,alphatest_fragment:ey,alphatest_pars_fragment:ty,aomap_fragment:ny,aomap_pars_fragment:iy,batching_pars_vertex:ry,batching_vertex:sy,begin_vertex:ay,beginnormal_vertex:oy,bsdfs:ly,iridescence_fragment:cy,bumpmap_pars_fragment:uy,clipping_planes_fragment:dy,clipping_planes_pars_fragment:fy,clipping_planes_pars_vertex:hy,clipping_planes_vertex:py,color_fragment:my,color_pars_fragment:gy,color_pars_vertex:vy,color_vertex:_y,common:xy,cube_uv_reflection_fragment:yy,defaultnormal_vertex:Sy,displacementmap_pars_vertex:My,displacementmap_vertex:Ey,emissivemap_fragment:wy,emissivemap_pars_fragment:by,colorspace_fragment:Ty,colorspace_pars_fragment:Ay,envmap_fragment:Ry,envmap_common_pars_fragment:Cy,envmap_pars_fragment:Py,envmap_pars_vertex:Ly,envmap_physical_pars_fragment:Gy,envmap_vertex:Ny,fog_vertex:Iy,fog_pars_vertex:Dy,fog_fragment:Uy,fog_pars_fragment:Oy,gradientmap_pars_fragment:Fy,lightmap_pars_fragment:ky,lights_lambert_fragment:By,lights_lambert_pars_fragment:zy,lights_pars_begin:Vy,lights_toon_fragment:Hy,lights_toon_pars_fragment:Wy,lights_phong_fragment:Xy,lights_phong_pars_fragment:qy,lights_physical_fragment:jy,lights_physical_pars_fragment:$y,lights_fragment_begin:Yy,lights_fragment_maps:Ky,lights_fragment_end:Zy,lightprobes_pars_fragment:Jy,logdepthbuf_fragment:Qy,logdepthbuf_pars_fragment:eS,logdepthbuf_pars_vertex:tS,logdepthbuf_vertex:nS,map_fragment:iS,map_pars_fragment:rS,map_particle_fragment:sS,map_particle_pars_fragment:aS,metalnessmap_fragment:oS,metalnessmap_pars_fragment:lS,morphinstance_vertex:cS,morphcolor_vertex:uS,morphnormal_vertex:dS,morphtarget_pars_vertex:fS,morphtarget_vertex:hS,normal_fragment_begin:pS,normal_fragment_maps:mS,normal_pars_fragment:gS,normal_pars_vertex:vS,normal_vertex:_S,normalmap_pars_fragment:xS,clearcoat_normal_fragment_begin:yS,clearcoat_normal_fragment_maps:SS,clearcoat_pars_fragment:MS,iridescence_pars_fragment:ES,opaque_fragment:wS,packing:bS,premultiplied_alpha_fragment:TS,project_vertex:AS,dithering_fragment:RS,dithering_pars_fragment:CS,roughnessmap_fragment:PS,roughnessmap_pars_fragment:LS,shadowmap_pars_fragment:NS,shadowmap_pars_vertex:IS,shadowmap_vertex:DS,shadowmask_pars_fragment:US,skinbase_vertex:OS,skinning_pars_vertex:FS,skinning_vertex:kS,skinnormal_vertex:BS,specularmap_fragment:zS,specularmap_pars_fragment:VS,tonemapping_fragment:GS,tonemapping_pars_fragment:HS,transmission_fragment:WS,transmission_pars_fragment:XS,uv_pars_fragment:qS,uv_pars_vertex:jS,uv_vertex:$S,worldpos_vertex:YS,background_vert:KS,background_frag:ZS,backgroundCube_vert:JS,backgroundCube_frag:QS,cube_vert:eM,cube_frag:tM,depth_vert:nM,depth_frag:iM,distance_vert:rM,distance_frag:sM,equirect_vert:aM,equirect_frag:oM,linedashed_vert:lM,linedashed_frag:cM,meshbasic_vert:uM,meshbasic_frag:dM,meshlambert_vert:fM,meshlambert_frag:hM,meshmatcap_vert:pM,meshmatcap_frag:mM,meshnormal_vert:gM,meshnormal_frag:vM,meshphong_vert:_M,meshphong_frag:xM,meshphysical_vert:yM,meshphysical_frag:SM,meshtoon_vert:MM,meshtoon_frag:EM,points_vert:wM,points_frag:bM,shadow_vert:TM,shadow_frag:AM,sprite_vert:RM,sprite_frag:CM},Ke={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Rt}},envmap:{envMap:{value:null},envMapRotation:{value:new Rt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Rt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Rt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Rt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Rt},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Rt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Rt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Rt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Rt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0},uvTransform:{value:new Rt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Rt},alphaMap:{value:null},alphaMapTransform:{value:new Rt},alphaTest:{value:0}}},Vr={basic:{uniforms:Ai([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:Ai([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Xt(0)},envMapIntensity:{value:1}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:Ai([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:Ai([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:Ai([Ke.common,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:Ai([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:Ai([Ke.points,Ke.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:Ai([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:Ai([Ke.common,Ke.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:Ai([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:Ai([Ke.sprite,Ke.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Rt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Rt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distance:{uniforms:Ai([Ke.common,Ke.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distance_vert,fragmentShader:Ut.distance_frag},shadow:{uniforms:Ai([Ke.lights,Ke.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Vr.physical={uniforms:Ai([Vr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Rt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Rt},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Rt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Rt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Rt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Rt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Rt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Rt},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Rt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Rt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Rt},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Rt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const lu={r:0,b:0,g:0},PM=new Tn,Jg=new Rt;Jg.set(-1,0,0,0,1,0,0,0,1);function LM(s,e,t,r,o,l){const u=new Xt(0);let f=o===!0?0:1,m,p,y=null,S=0,_=null;function M(T){let F=T.isScene===!0?T.background:null;if(F&&F.isTexture){const A=T.backgroundBlurriness>0;F=e.get(F,A)}return F}function E(T){let F=!1;const A=M(T);A===null?x(u,f):A&&A.isColor&&(x(A,1),F=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,l):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||F)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(T,F){const A=M(F);A&&(A.isCubeTexture||A.mapping===Tu)?(p===void 0&&(p=new ve(new St(1,1,1),new jr({name:"BackgroundCubeMaterial",uniforms:Ro(Vr.backgroundCube.uniforms),vertexShader:Vr.backgroundCube.vertexShader,fragmentShader:Vr.backgroundCube.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(D,L,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=A,p.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(PM.makeRotationFromEuler(F.backgroundRotation)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Jg),p.material.toneMapped=Yt.getTransfer(A.colorSpace)!==dn,(y!==A||S!==A.version||_!==s.toneMapping)&&(p.material.needsUpdate=!0,y=A,S=A.version,_=s.toneMapping),p.layers.enableAll(),T.unshift(p,p.geometry,p.material,0,0,null)):A&&A.isTexture&&(m===void 0&&(m=new ve(new Na(2,2),new jr({name:"BackgroundMaterial",uniforms:Ro(Vr.background.uniforms),vertexShader:Vr.background.vertexShader,fragmentShader:Vr.background.fragmentShader,side:Ra,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=A,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.toneMapped=Yt.getTransfer(A.colorSpace)!==dn,A.matrixAutoUpdate===!0&&A.updateMatrix(),m.material.uniforms.uvTransform.value.copy(A.matrix),(y!==A||S!==A.version||_!==s.toneMapping)&&(m.material.needsUpdate=!0,y=A,S=A.version,_=s.toneMapping),m.layers.enableAll(),T.unshift(m,m.geometry,m.material,0,0,null))}function x(T,F){T.getRGB(lu,$g(s)),t.buffers.color.setClear(lu.r,lu.g,lu.b,F,l)}function v(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(T,F=1){u.set(T),f=F,x(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(T){f=T,x(u,f)},render:E,addToRenderList:R,dispose:v}}function NM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=_(null);let l=o,u=!1;function f(G,W,ne,H,re){let fe=!1;const ee=S(G,H,ne,W);l!==ee&&(l=ee,p(l.object)),fe=M(G,H,ne,re),fe&&E(G,H,ne,re),re!==null&&e.update(re,s.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,A(G,W,ne,H),re!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function m(){return s.createVertexArray()}function p(G){return s.bindVertexArray(G)}function y(G){return s.deleteVertexArray(G)}function S(G,W,ne,H){const re=H.wireframe===!0;let fe=r[W.id];fe===void 0&&(fe={},r[W.id]=fe);const ee=G.isInstancedMesh===!0?G.id:0;let te=fe[ee];te===void 0&&(te={},fe[ee]=te);let K=te[ne.id];K===void 0&&(K={},te[ne.id]=K);let Z=K[re];return Z===void 0&&(Z=_(m()),K[re]=Z),Z}function _(G){const W=[],ne=[],H=[];for(let re=0;re<t;re++)W[re]=0,ne[re]=0,H[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W,enabledAttributes:ne,attributeDivisors:H,object:G,attributes:{},index:null}}function M(G,W,ne,H){const re=l.attributes,fe=W.attributes;let ee=0;const te=ne.getAttributes();for(const K in te)if(te[K].location>=0){const U=re[K];let de=fe[K];if(de===void 0&&(K==="instanceMatrix"&&G.instanceMatrix&&(de=G.instanceMatrix),K==="instanceColor"&&G.instanceColor&&(de=G.instanceColor)),U===void 0||U.attribute!==de||de&&U.data!==de.data)return!0;ee++}return l.attributesNum!==ee||l.index!==H}function E(G,W,ne,H){const re={},fe=W.attributes;let ee=0;const te=ne.getAttributes();for(const K in te)if(te[K].location>=0){let U=fe[K];U===void 0&&(K==="instanceMatrix"&&G.instanceMatrix&&(U=G.instanceMatrix),K==="instanceColor"&&G.instanceColor&&(U=G.instanceColor));const de={};de.attribute=U,U&&U.data&&(de.data=U.data),re[K]=de,ee++}l.attributes=re,l.attributesNum=ee,l.index=H}function R(){const G=l.newAttributes;for(let W=0,ne=G.length;W<ne;W++)G[W]=0}function x(G){v(G,0)}function v(G,W){const ne=l.newAttributes,H=l.enabledAttributes,re=l.attributeDivisors;ne[G]=1,H[G]===0&&(s.enableVertexAttribArray(G),H[G]=1),re[G]!==W&&(s.vertexAttribDivisor(G,W),re[G]=W)}function T(){const G=l.newAttributes,W=l.enabledAttributes;for(let ne=0,H=W.length;ne<H;ne++)W[ne]!==G[ne]&&(s.disableVertexAttribArray(ne),W[ne]=0)}function F(G,W,ne,H,re,fe,ee){ee===!0?s.vertexAttribIPointer(G,W,ne,re,fe):s.vertexAttribPointer(G,W,ne,H,re,fe)}function A(G,W,ne,H){R();const re=H.attributes,fe=ne.getAttributes(),ee=W.defaultAttributeValues;for(const te in fe){const K=fe[te];if(K.location>=0){let Z=re[te];if(Z===void 0&&(te==="instanceMatrix"&&G.instanceMatrix&&(Z=G.instanceMatrix),te==="instanceColor"&&G.instanceColor&&(Z=G.instanceColor)),Z!==void 0){const U=Z.normalized,de=Z.itemSize,be=e.get(Z);if(be===void 0)continue;const qe=be.buffer,je=be.type,$e=be.bytesPerElement,ce=je===s.INT||je===s.UNSIGNED_INT||Z.gpuType===Fh;if(Z.isInterleavedBufferAttribute){const he=Z.data,Ne=he.stride,Qe=Z.offset;if(he.isInstancedInterleavedBuffer){for(let ze=0;ze<K.locationSize;ze++)v(K.location+ze,he.meshPerAttribute);G.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ze=0;ze<K.locationSize;ze++)x(K.location+ze);s.bindBuffer(s.ARRAY_BUFFER,qe);for(let ze=0;ze<K.locationSize;ze++)F(K.location+ze,de/K.locationSize,je,U,Ne*$e,(Qe+de/K.locationSize*ze)*$e,ce)}else{if(Z.isInstancedBufferAttribute){for(let he=0;he<K.locationSize;he++)v(K.location+he,Z.meshPerAttribute);G.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let he=0;he<K.locationSize;he++)x(K.location+he);s.bindBuffer(s.ARRAY_BUFFER,qe);for(let he=0;he<K.locationSize;he++)F(K.location+he,de/K.locationSize,je,U,de*$e,de/K.locationSize*he*$e,ce)}}else if(ee!==void 0){const U=ee[te];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(K.location,U);break;case 3:s.vertexAttrib3fv(K.location,U);break;case 4:s.vertexAttrib4fv(K.location,U);break;default:s.vertexAttrib1fv(K.location,U)}}}}T()}function D(){I();for(const G in r){const W=r[G];for(const ne in W){const H=W[ne];for(const re in H){const fe=H[re];for(const ee in fe)y(fe[ee].object),delete fe[ee];delete H[re]}}delete r[G]}}function L(G){if(r[G.id]===void 0)return;const W=r[G.id];for(const ne in W){const H=W[ne];for(const re in H){const fe=H[re];for(const ee in fe)y(fe[ee].object),delete fe[ee];delete H[re]}}delete r[G.id]}function k(G){for(const W in r){const ne=r[W];for(const H in ne){const re=ne[H];if(re[G.id]===void 0)continue;const fe=re[G.id];for(const ee in fe)y(fe[ee].object),delete fe[ee];delete re[G.id]}}}function b(G){for(const W in r){const ne=r[W],H=G.isInstancedMesh===!0?G.id:0,re=ne[H];if(re!==void 0){for(const fe in re){const ee=re[fe];for(const te in ee)y(ee[te].object),delete ee[te];delete re[fe]}delete ne[H],Object.keys(ne).length===0&&delete r[W]}}}function I(){z(),u=!0,l!==o&&(l=o,p(l.object))}function z(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:I,resetDefaultState:z,dispose:D,releaseStatesOfGeometry:L,releaseStatesOfObject:b,releaseStatesOfProgram:k,initAttributes:R,enableAttribute:x,disableUnusedAttributes:T}}function IM(s,e,t){let r;function o(m){r=m}function l(m,p){s.drawArrays(r,m,p),t.update(p,r,1)}function u(m,p,y){y!==0&&(s.drawArraysInstanced(r,m,p,y),t.update(p,r,y))}function f(m,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,p,0,y);let _=0;for(let M=0;M<y;M++)_+=p[M];t.update(_,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function DM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(k){return!(k!==Cr&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const b=k===qr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==Qi&&k!==Gr&&!b&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function m(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const y=m(p);y!==p&&(Mt("WebGLRenderer:",p,"not supported, using",y,"instead."),p=y);const S=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&_===!1&&Mt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),F=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:S,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:x,maxAttributes:v,maxVertexUniforms:T,maxVaryings:F,maxFragmentUniforms:A,maxSamples:D,samples:L}}function UM(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new $s,f=new Rt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,_){const M=S.length!==0||_||r!==0||o;return o=_,r=S.length,M},this.beginShadows=function(){l=!0,y(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,_){t=y(S,_,0)},this.setState=function(S,_,M){const E=S.clippingPlanes,R=S.clipIntersection,x=S.clipShadows,v=s.get(S);if(!o||E===null||E.length===0||l&&!x)l?y(null):p();else{const T=l?0:r,F=T*4;let A=v.clippingState||null;m.value=A,A=y(E,_,F,M);for(let D=0;D!==F;++D)A[D]=t[D];v.clippingState=A,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=T}};function p(){m.value!==t&&(m.value=t,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function y(S,_,M,E){const R=S!==null?S.length:0;let x=null;if(R!==0){if(x=m.value,E!==!0||x===null){const v=M+R*4,T=_.matrixWorldInverse;f.getNormalMatrix(T),(x===null||x.length<v)&&(x=new Float32Array(v));for(let F=0,A=M;F!==R;++F,A+=4)u.copy(S[F]).applyMatrix4(T,f),u.normal.toArray(x,A),x[A+3]=u.constant}m.value=x,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,x}}const Eo=4,OM=6,FM=20,kM=256,gl=new Zh,j0=new Xt;let Bf=null,zf=0,Vf=0,Gf=!1;const BM=new ie,Ea=new ie;class $0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=BM}=l;Bf=this._renderer.getRenderTarget(),zf=this._renderer.getActiveCubeFace(),Vf=this._renderer.getActiveMipmapLevel(),Gf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,o,m,f),t>0&&this._blur(m,0,0,t),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Z0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=K0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Bf,zf,Vf),this._renderer.xr.enabled=Gf,e.scissorTest=!1,yo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ca||e.mapping===Ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bf=this._renderer.getRenderTarget(),zf=this._renderer.getActiveCubeFace(),Vf=this._renderer.getActiveMipmapLevel(),Gf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:_i,minFilter:_i,generateMipmaps:!1,type:qr,format:Cr,colorSpace:yu,depthBuffer:!1},o=Y0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Y0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=zM(l)),this._blurMaterial=GM(l,e,t),this._ggxMaterial=VM(l,e,t)}return o}_compileMaterial(e){const t=new ve(new qn,e);this._renderer.compile(t,gl)}_sceneToCubeUV(e,t,r,o,l){const m=new Ji(90,1,t,r),p=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],S=this._renderer,_=S.autoClear,M=S.toneMapping;S.getClearColor(j0),S.toneMapping=Wr,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ve(new St,new Wt({name:"PMREM.Background",side:Vi,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,x=R.material;let v=!1;const T=e.background;T?T.isColor&&(x.color.copy(T),e.background=null,v=!0):(x.color.copy(j0),v=!0);for(let F=0;F<6;F++){const A=F%3;A===0?(m.up.set(0,p[F],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x+y[F],l.y,l.z)):A===1?(m.up.set(0,0,p[F]),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y+y[F],l.z)):(m.up.set(0,p[F],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y,l.z+y[F]));const D=this._cubeSize;yo(o,A*D,F>2?D:0,D,D),S.setRenderTarget(o),v&&S.render(R,m),S.render(e,m)}S.toneMapping=M,S.autoClear=_,e.background=T}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Ca||e.mapping===Ao;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Z0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=K0());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const m=this._cubeSize;yo(t,0,0,3*m,2*m),r.setRenderTarget(t),r.render(u,gl)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const m=u.uniforms,p=r/(this._lodMeshes.length-1),y=t/(this._lodMeshes.length-1),S=Math.sqrt(p*p-y*y),_=p*1.25,M=S*_,{_lodMax:E}=this,R=this._sizeLods[r],x=3*R*(r>E-Eo?r-E+Eo:0),v=4*(this._cubeSize-R);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=E-t,yo(l,x,v,3*R,2*R),o.setRenderTarget(l),o.render(f,gl),m.envMap.value=l.texture,m.roughness.value=0,m.mipInt.value=E-r,yo(e,x,v,3*R,2*R),o.setRenderTarget(e),o.render(f,gl)}_blur(e,t,r,o){const l=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,l,t,r,u),this._blurPass(l,e,r,r,u)}_blurPass(e,t,r,o,l){const u=this._renderer,f=this._blurMaterial,m=this._lodMeshes[o];m.material=f;const p=f.uniforms;p.envMap.value=e.texture,p.sigma.value=l,p.mipInt.value=this._lodMax-r;const y=this._sizeLods[o],S=3*y*(o>this._lodMax-Eo?o-this._lodMax+Eo:0),_=4*(this._cubeSize-y);yo(t,S,_,3*y,2*y),u.setRenderTarget(t),u.render(m,gl)}}function zM(s){const e=[],t=[];let r=s;const o=s-Eo+1+OM;for(let l=0;l<o;l++){const u=Math.pow(2,r);e.push(u);const f=1/(u-2),m=-f,p=1+f,y=[m,m,p,m,p,p,m,m,p,p,m,p],S=6,_=6,M=3,E=new Float32Array(M*_*S),R=new Float32Array(M*_*S);for(let v=0;v<S;v++){const T=v%3*2/3-1,F=v>2?0:-1,A=[T,F,0,T+2/3,F,0,T+2/3,F+1,0,T,F,0,T+2/3,F+1,0,T,F+1,0];E.set(A,M*_*v);for(let D=0;D<_;D++){const L=y[D*2]*2-1,k=y[D*2+1]*2-1;v===0?Ea.set(1,k,L):v===1?Ea.set(-L,1,-k):v===2?Ea.set(-L,k,1):v===3?Ea.set(-1,k,-L):v===4?Ea.set(-L,-1,k):Ea.set(L,k,-1),Ea.toArray(R,(v*_+D)*M)}}const x=new qn;x.setAttribute("position",new Lr(E,M)),x.setAttribute("outputDirection",new Lr(R,M)),t.push(new ve(x,null)),r>Eo&&r--}return{lodMeshes:t,sizeLods:e}}function Y0(s,e,t){const r=new Pr(s,e,t);return r.texture.mapping=Tu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function yo(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function VM(s,e,t){return new jr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:_s,depthTest:!1,depthWrite:!1})}function GM(s,e,t){return new jr({name:"SphericalGaussianBlur",defines:{SAMPLES:FM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Cu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:_s,depthTest:!1,depthWrite:!1})}function K0(){return new jr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cu(),fragmentShader:`

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
		`,blending:_s,depthTest:!1,depthWrite:!1})}function Z0(){return new jr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_s,depthTest:!1,depthWrite:!1})}function Cu(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Qg extends Pr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new qg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new St(5,5,5),l=new jr({name:"CubemapFromEquirect",uniforms:Ro(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vi,blending:_s});l.uniforms.tEquirect.value=t;const u=new ve(o,l),f=t.minFilter;return t.minFilter===ba&&(t.minFilter=_i),new qx(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function HM(s){let e=new WeakMap,t=new WeakMap,r=null;function o(_,M=!1){return _==null?null:M?u(_):l(_)}function l(_){if(_&&_.isTexture){const M=_.mapping;if(M===df||M===ff)if(e.has(_)){const E=e.get(_).texture;return f(E,_.mapping)}else{const E=_.image;if(E&&E.height>0){const R=new Qg(E.height);return R.fromEquirectangularTexture(s,_),e.set(_,R),_.addEventListener("dispose",p),f(R.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture){const M=_.mapping,E=M===df||M===ff,R=M===Ca||M===Ao;if(E||R){let x=t.get(_);const v=x!==void 0?x.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==v)return r===null&&(r=new $0(s)),x=E?r.fromEquirectangular(_,x):r.fromCubemap(_,x),x.texture.pmremVersion=_.pmremVersion,t.set(_,x),x.texture;if(x!==void 0)return x.texture;{const T=_.image;return E&&T&&T.height>0||R&&T&&m(T)?(r===null&&(r=new $0(s)),x=E?r.fromEquirectangular(_):r.fromCubemap(_),x.texture.pmremVersion=_.pmremVersion,t.set(_,x),_.addEventListener("dispose",y),x.texture):null}}}return _}function f(_,M){return M===df?_.mapping=Ca:M===ff&&(_.mapping=Ao),_}function m(_){let M=0;const E=6;for(let R=0;R<E;R++)_[R]!==void 0&&M++;return M===E}function p(_){const M=_.target;M.removeEventListener("dispose",p);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function y(_){const M=_.target;M.removeEventListener("dispose",y);const E=t.get(M);E!==void 0&&(t.delete(M),E.dispose())}function S(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function WM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&wo("WebGLRenderer: "+r+" extension not supported."),o}}}function XM(s,e,t,r){const o={},l=new WeakMap;function u(S){const _=S.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",u),delete o[_.id];const M=l.get(_);M&&(e.remove(M),l.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function f(S,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,t.memory.geometries++),_}function m(S){const _=S.attributes;for(const M in _)e.update(_[M],s.ARRAY_BUFFER)}function p(S){const _=[],M=S.index,E=S.attributes.position;let R=0;if(E===void 0)return;if(M!==null){const T=M.array;R=M.version;for(let F=0,A=T.length;F<A;F+=3){const D=T[F+0],L=T[F+1],k=T[F+2];_.push(D,L,L,k,k,D)}}else{const T=E.array;R=E.version;for(let F=0,A=T.length/3-1;F<A;F+=3){const D=F+0,L=F+1,k=F+2;_.push(D,L,L,k,k,D)}}const x=new(E.count>=65535?Hg:Gg)(_,1);x.version=R;const v=l.get(S);v&&e.remove(v),l.set(S,x)}function y(S){const _=l.get(S);if(_){const M=S.index;M!==null&&_.version<M.version&&p(S)}else p(S);return l.get(S)}return{get:f,update:m,getWireframeAttribute:y}}function qM(s,e,t){let r;function o(S){r=S}let l,u;function f(S){l=S.type,u=S.bytesPerElement}function m(S,_){s.drawElements(r,_,l,S*u),t.update(_,r,1)}function p(S,_,M){M!==0&&(s.drawElementsInstanced(r,_,l,S*u,M),t.update(_,r,M))}function y(S,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,l,S,0,M);let R=0;for(let x=0;x<M;x++)R+=_[x];t.update(R,r,1)}this.setMode=o,this.setIndex=f,this.render=m,this.renderInstances=p,this.renderMultiDraw=y}function jM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:on("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function $M(s,e,t){const r=new WeakMap,o=new Ln;function l(u,f,m){const p=u.morphTargetInfluences,y=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=y!==void 0?y.length:0;let _=r.get(f);if(_===void 0||_.count!==S){let z=function(){b.dispose(),r.delete(f),f.removeEventListener("dispose",z)};var M=z;_!==void 0&&_.texture.dispose();const E=f.morphAttributes.position!==void 0,R=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],T=f.morphAttributes.normal||[],F=f.morphAttributes.color||[];let A=0;E===!0&&(A=1),R===!0&&(A=2),x===!0&&(A=3);let D=f.attributes.position.count*A,L=1;D>e.maxTextureSize&&(L=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const k=new Float32Array(D*L*4*S),b=new Bg(k,D,L,S);b.type=Gr,b.needsUpdate=!0;const I=A*4;for(let G=0;G<S;G++){const W=v[G],ne=T[G],H=F[G],re=D*L*4*G;for(let fe=0;fe<W.count;fe++){const ee=fe*I;E===!0&&(o.fromBufferAttribute(W,fe),k[re+ee+0]=o.x,k[re+ee+1]=o.y,k[re+ee+2]=o.z,k[re+ee+3]=0),R===!0&&(o.fromBufferAttribute(ne,fe),k[re+ee+4]=o.x,k[re+ee+5]=o.y,k[re+ee+6]=o.z,k[re+ee+7]=0),x===!0&&(o.fromBufferAttribute(H,fe),k[re+ee+8]=o.x,k[re+ee+9]=o.y,k[re+ee+10]=o.z,k[re+ee+11]=H.itemSize===4?o.w:1)}}_={count:S,texture:b,size:new Gt(D,L)},r.set(f,_),f.addEventListener("dispose",z)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let E=0;for(let x=0;x<p.length;x++)E+=p[x];const R=f.morphTargetsRelative?1:1-E;m.getUniforms().setValue(s,"morphTargetBaseInfluence",R),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),m.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:l}}function YM(s,e,t,r,o){let l=new WeakMap;function u(p){const y=o.render.frame,S=p.geometry,_=e.get(p,S);if(l.get(_)!==y&&(e.update(_),l.set(_,y)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),l.get(p)!==y&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,y))),p.isSkinnedMesh){const M=p.skeleton;l.get(M)!==y&&(M.update(),l.set(M,y))}return _}function f(){l=new WeakMap}function m(p){const y=p.target;y.removeEventListener("dispose",m),r.releaseStatesOfObject(y),t.remove(y.instanceMatrix),y.instanceColor!==null&&t.remove(y.instanceColor)}return{update:u,dispose:f}}const KM={[wg]:"LINEAR_TONE_MAPPING",[bg]:"REINHARD_TONE_MAPPING",[Tg]:"CINEON_TONE_MAPPING",[Oh]:"ACES_FILMIC_TONE_MAPPING",[Rg]:"AGX_TONE_MAPPING",[Cg]:"NEUTRAL_TONE_MAPPING",[Ag]:"CUSTOM_TONE_MAPPING"};function ZM(s,e,t,r,o,l){const u=new Pr(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,m=null;const p=new qn;p.setAttribute("position",new pn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new pn([0,2,0,0,2,0],2));const y=new Bx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),S=new ve(p,y),_=new Zh(-1,1,1,-1,0,1);let M=null,E=null,R=!1,x,v=null,T=[],F=!1;this.setSize=function(A,D){u.setSize(A,D),f!==null&&f.setSize(A,D),m!==null&&m.setSize(A,D);for(let L=0;L<T.length;L++){const k=T[L];k.setSize&&k.setSize(A,D)}},this.setEffects=function(A){T=A,F=T.length>0&&T[0].isRenderPass===!0;const D=u.width,L=u.height;T.length>0&&f===null&&(f=new Pr(D,L,{type:qr,depthBuffer:!1,stencilBuffer:!1}),m=new Pr(D,L,{type:qr,depthBuffer:!1,stencilBuffer:!1}));for(let k=0;k<T.length;k++){const b=T[k];b.setSize&&b.setSize(D,L)}},this.begin=function(A,D){if(R||A.toneMapping===Wr&&T.length===0)return!1;if(v=D,D!==null){const L=D.width,k=D.height;(u.width!==L||u.height!==k)&&this.setSize(L,k)}return F===!1&&A.setRenderTarget(u),x=A.toneMapping,A.toneMapping=Wr,!0},this.hasRenderPass=function(){return F},this.end=function(A,D){A.toneMapping=x,R=!0;let L=u,k=f;for(let b=0;b<T.length;b++){const I=T[b];I.enabled!==!1&&(I.render(A,k,L,D),I.needsSwap!==!1&&(L=k,k=k===f?m:f))}if(M!==A.outputColorSpace||E!==A.toneMapping){M=A.outputColorSpace,E=A.toneMapping,y.defines={},Yt.getTransfer(M)===dn&&(y.defines.SRGB_TRANSFER="");const b=KM[E];b&&(y.defines[b]=""),y.needsUpdate=!0}y.uniforms.tDiffuse.value=L.texture,A.setRenderTarget(v),A.render(S,_),v=null,R=!1},this.isCompositing=function(){return R},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),m!==null&&m.dispose(),p.dispose(),y.dispose()}}const ev=new xi,Nh=new Tl(1,1),tv=new Bg,nv=new mx,iv=new qg,J0=[],Q0=[],eg=new Float32Array(16),tg=new Float32Array(9),ng=new Float32Array(4);function Po(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=J0[o];if(l===void 0&&(l=new Float32Array(o),J0[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function jn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function $n(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Pu(s,e){let t=Q0[e];t===void 0&&(t=new Int32Array(e),Q0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function JM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function QM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jn(t,e))return;s.uniform2fv(this.addr,e),$n(t,e)}}function e1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jn(t,e))return;s.uniform3fv(this.addr,e),$n(t,e)}}function t1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jn(t,e))return;s.uniform4fv(this.addr,e),$n(t,e)}}function n1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(jn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),$n(t,e)}else{if(jn(t,r))return;ng.set(r),s.uniformMatrix2fv(this.addr,!1,ng),$n(t,r)}}function i1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(jn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),$n(t,e)}else{if(jn(t,r))return;tg.set(r),s.uniformMatrix3fv(this.addr,!1,tg),$n(t,r)}}function r1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(jn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),$n(t,e)}else{if(jn(t,r))return;eg.set(r),s.uniformMatrix4fv(this.addr,!1,eg),$n(t,r)}}function s1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function a1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jn(t,e))return;s.uniform2iv(this.addr,e),$n(t,e)}}function o1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jn(t,e))return;s.uniform3iv(this.addr,e),$n(t,e)}}function l1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jn(t,e))return;s.uniform4iv(this.addr,e),$n(t,e)}}function c1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function u1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jn(t,e))return;s.uniform2uiv(this.addr,e),$n(t,e)}}function d1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jn(t,e))return;s.uniform3uiv(this.addr,e),$n(t,e)}}function f1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jn(t,e))return;s.uniform4uiv(this.addr,e),$n(t,e)}}function h1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Nh.compareFunction=t.isReversedDepthBuffer()?Wh:Hh,l=Nh):l=ev,t.setTexture2D(e||l,o)}function p1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||nv,o)}function m1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||iv,o)}function g1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||tv,o)}function v1(s){switch(s){case 5126:return JM;case 35664:return QM;case 35665:return e1;case 35666:return t1;case 35674:return n1;case 35675:return i1;case 35676:return r1;case 5124:case 35670:return s1;case 35667:case 35671:return a1;case 35668:case 35672:return o1;case 35669:case 35673:return l1;case 5125:return c1;case 36294:return u1;case 36295:return d1;case 36296:return f1;case 35678:case 36198:case 36298:case 36306:case 35682:return h1;case 35679:case 36299:case 36307:return p1;case 35680:case 36300:case 36308:case 36293:return m1;case 36289:case 36303:case 36311:case 36292:return g1}}function _1(s,e){s.uniform1fv(this.addr,e)}function x1(s,e){const t=Po(e,this.size,2);s.uniform2fv(this.addr,t)}function y1(s,e){const t=Po(e,this.size,3);s.uniform3fv(this.addr,t)}function S1(s,e){const t=Po(e,this.size,4);s.uniform4fv(this.addr,t)}function M1(s,e){const t=Po(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function E1(s,e){const t=Po(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function w1(s,e){const t=Po(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function b1(s,e){s.uniform1iv(this.addr,e)}function T1(s,e){s.uniform2iv(this.addr,e)}function A1(s,e){s.uniform3iv(this.addr,e)}function R1(s,e){s.uniform4iv(this.addr,e)}function C1(s,e){s.uniform1uiv(this.addr,e)}function P1(s,e){s.uniform2uiv(this.addr,e)}function L1(s,e){s.uniform3uiv(this.addr,e)}function N1(s,e){s.uniform4uiv(this.addr,e)}function I1(s,e,t){const r=this.cache,o=e.length,l=Pu(t,o);jn(r,l)||(s.uniform1iv(this.addr,l),$n(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=Nh:u=ev;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function D1(s,e,t){const r=this.cache,o=e.length,l=Pu(t,o);jn(r,l)||(s.uniform1iv(this.addr,l),$n(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||nv,l[u])}function U1(s,e,t){const r=this.cache,o=e.length,l=Pu(t,o);jn(r,l)||(s.uniform1iv(this.addr,l),$n(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||iv,l[u])}function O1(s,e,t){const r=this.cache,o=e.length,l=Pu(t,o);jn(r,l)||(s.uniform1iv(this.addr,l),$n(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||tv,l[u])}function F1(s){switch(s){case 5126:return _1;case 35664:return x1;case 35665:return y1;case 35666:return S1;case 35674:return M1;case 35675:return E1;case 35676:return w1;case 5124:case 35670:return b1;case 35667:case 35671:return T1;case 35668:case 35672:return A1;case 35669:case 35673:return R1;case 5125:return C1;case 36294:return P1;case 36295:return L1;case 36296:return N1;case 35678:case 36198:case 36298:case 36306:case 35682:return I1;case 35679:case 36299:case 36307:return D1;case 35680:case 36300:case 36308:case 36293:return U1;case 36289:case 36303:case 36311:case 36292:return O1}}class k1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=v1(t.type)}}class B1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=F1(t.type)}}class z1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Hf=/(\w+)(\])?(\[|\.)?/g;function ig(s,e){s.seq.push(e),s.map[e.id]=e}function V1(s,e,t){const r=s.name,o=r.length;for(Hf.lastIndex=0;;){const l=Hf.exec(r),u=Hf.lastIndex;let f=l[1];const m=l[2]==="]",p=l[3];if(m&&(f=f|0),p===void 0||p==="["&&u+2===o){ig(t,p===void 0?new k1(f,s,e):new B1(f,s,e));break}else{let S=t.map[f];S===void 0&&(S=new z1(f),ig(t,S)),t=S}}}class vu{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),m=e.getUniformLocation(t,f.name);V1(f,m,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],m=r[f.id];m.needsUpdate!==!1&&f.setValue(e,m.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function rg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const G1=37297;let H1=0;function W1(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const sg=new Rt;function X1(s){Yt._getMatrix(sg,Yt.workingColorSpace,s);const e=`mat3( ${sg.elements.map(t=>t.toFixed(4))} )`;switch(Yt.getTransfer(s)){case Su:return[e,"LinearTransferOETF"];case dn:return[e,"sRGBTransferOETF"];default:return Mt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ag(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+W1(s.getShaderSource(e),f)}else return l}function q1(s,e){const t=X1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const j1={[wg]:"Linear",[bg]:"Reinhard",[Tg]:"Cineon",[Oh]:"ACESFilmic",[Rg]:"AgX",[Cg]:"Neutral",[Ag]:"Custom"};function $1(s,e){const t=j1[e];return t===void 0?(Mt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const cu=new ie;function Y1(){Yt.getLuminanceCoefficients(cu);const s=cu.x.toFixed(4),e=cu.y.toFixed(4),t=cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xl).join(`
`)}function Z1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function J1(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function xl(s){return s!==""}function og(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Q1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ih(s){return s.replace(Q1,tE)}const eE=new Map;function tE(s,e){let t=Ut[e];if(t===void 0){const r=eE.get(e);if(r!==void 0)t=Ut[r],Mt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ih(t)}const nE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cg(s){return s.replace(nE,iE)}function iE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function ug(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const rE={[du]:"SHADOWMAP_TYPE_PCF",[_l]:"SHADOWMAP_TYPE_VSM"};function sE(s){return rE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aE={[Ca]:"ENVMAP_TYPE_CUBE",[Ao]:"ENVMAP_TYPE_CUBE",[Tu]:"ENVMAP_TYPE_CUBE_UV"};function oE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":aE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const lE={[Ao]:"ENVMAP_MODE_REFRACTION"};function cE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":lE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const uE={[Eg]:"ENVMAP_BLENDING_MULTIPLY",[q_]:"ENVMAP_BLENDING_MIX",[j_]:"ENVMAP_BLENDING_ADD"};function dE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":uE[s.combine]||"ENVMAP_BLENDING_NONE"}function fE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function hE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const m=sE(t),p=oE(t),y=cE(t),S=dE(t),_=fE(t),M=K1(t),E=Z1(l),R=o.createProgram();let x,v,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(xl).join(`
`),x.length>0&&(x+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(xl).join(`
`),v.length>0&&(v+=`
`)):(x=[ug(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+y:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xl).join(`
`),v=[ug(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+y:"",t.envMap?"#define "+S:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wr?"#define TONE_MAPPING":"",t.toneMapping!==Wr?Ut.tonemapping_pars_fragment:"",t.toneMapping!==Wr?$1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,q1("linearToOutputTexel",t.outputColorSpace),Y1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xl).join(`
`)),u=Ih(u),u=og(u,t),u=lg(u,t),f=Ih(f),f=og(f,t),f=lg(f,t),u=cg(u),f=cg(f),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,v=["#define varying in",t.glslVersion===v0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===v0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const F=T+x+u,A=T+v+f,D=rg(o,o.VERTEX_SHADER,F),L=rg(o,o.FRAGMENT_SHADER,A);o.attachShader(R,D),o.attachShader(R,L),t.index0AttributeName!==void 0?o.bindAttribLocation(R,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function k(G){if(s.debug.checkShaderErrors){const W=o.getProgramInfoLog(R)||"",ne=o.getShaderInfoLog(D)||"",H=o.getShaderInfoLog(L)||"",re=W.trim(),fe=ne.trim(),ee=H.trim();let te=!0,K=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(te=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,R,D,L);else{const Z=ag(o,D,"vertex"),U=ag(o,L,"fragment");on("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+re+`
`+Z+`
`+U)}else re!==""?Mt("WebGLProgram: Program Info Log:",re):(fe===""||ee==="")&&(K=!1);K&&(G.diagnostics={runnable:te,programLog:re,vertexShader:{log:fe,prefix:x},fragmentShader:{log:ee,prefix:v}})}o.deleteShader(D),o.deleteShader(L),b=new vu(o,R),I=J1(o,R)}let b;this.getUniforms=function(){return b===void 0&&k(this),b};let I;this.getAttributes=function(){return I===void 0&&k(this),I};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=o.getProgramParameter(R,G1)),z},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=H1++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=D,this.fragmentShader=L,this}let pE=0;class mE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new gE(e),t.set(e,r)),r}}class gE{constructor(e){this.id=pE++,this.code=e,this.usedTimes=0}}function vE(s){return s===La||s===_u||s===xu}function _E(s,e,t,r,o,l){const u=new zg,f=new mE,m=new Set,p=[],y=new Map,S=r.logarithmicDepthBuffer;let _=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(b){return m.add(b),b===0?"uv":`uv${b}`}function R(b,I,z,G,W,ne){const H=G.fog,re=W.geometry,fe=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?G.environment:null,ee=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,te=e.get(b.envMap||fe,ee),K=te&&te.mapping===Tu?te.image.height:null,Z=M[b.type];b.precision!==null&&(_=r.getMaxPrecision(b.precision),_!==b.precision&&Mt("WebGLProgram.getParameters:",b.precision,"not supported, using",_,"instead."));const U=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,de=U!==void 0?U.length:0;let be=0;re.morphAttributes.position!==void 0&&(be=1),re.morphAttributes.normal!==void 0&&(be=2),re.morphAttributes.color!==void 0&&(be=3);let qe,je,$e,ce;if(Z){const Et=Vr[Z];qe=Et.vertexShader,je=Et.fragmentShader}else{qe=b.vertexShader,je=b.fragmentShader;const Et=f.getVertexShaderStage(b),ot=f.getFragmentShaderStage(b);f.update(b,Et,ot),$e=Et.id,ce=ot.id}const he=s.getRenderTarget(),Ne=s.state.buffers.depth.getReversed(),Qe=W.isInstancedMesh===!0,ze=W.isBatchedMesh===!0,dt=!!b.map,en=!!b.matcap,ht=!!te,bt=!!b.aoMap,It=!!b.lightMap,vt=!!b.bumpMap&&b.wireframe===!1,Ct=!!b.normalMap,Ot=!!b.displacementMap,Zt=!!b.emissiveMap,Ft=!!b.metalnessMap,Bt=!!b.roughnessMap,$=b.anisotropy>0,tn=b.clearcoat>0,Pt=b.dispersion>0,B=b.retroreflectivity>0,w=b.iridescence>0,J=b.sheen>0,se=b.transmission>0,ge=$&&!!b.anisotropyMap,Ce=tn&&!!b.clearcoatMap,Ie=tn&&!!b.clearcoatNormalMap,xe=tn&&!!b.clearcoatRoughnessMap,Ee=w&&!!b.iridescenceMap,Be=w&&!!b.iridescenceThicknessMap,Ze=J&&!!b.sheenColorMap,Ue=J&&!!b.sheenRoughnessMap,Pe=!!b.specularMap,et=!!b.specularColorMap,rt=!!b.specularIntensityMap,ut=se&&!!b.transmissionMap,q=se&&!!b.thicknessMap,Te=!!b.gradientMap,Se=!!b.alphaMap,ye=b.alphaTest>0,Me=!!b.alphaHash,Y=!!b.extensions;let Oe=Wr;b.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Oe=s.toneMapping);const Fe={shaderID:Z,shaderType:b.type,shaderName:b.name,vertexShader:qe,fragmentShader:je,defines:b.defines,customVertexShaderID:$e,customFragmentShaderID:ce,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:_,batching:ze,batchingColor:ze&&W._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&W.instanceColor!==null,instancingMorph:Qe&&W.morphTexture!==null,outputColorSpace:he===null?s.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Yt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:dt,matcap:en,envMap:ht,envMapMode:ht&&te.mapping,envMapCubeUVHeight:K,aoMap:bt,lightMap:It,bumpMap:vt,normalMap:Ct,displacementMap:Ot,emissiveMap:Zt,normalMapObjectSpace:Ct&&b.normalMapType===K_,normalMapTangentSpace:Ct&&b.normalMapType===Ch,packedNormalMap:Ct&&b.normalMapType===Ch&&vE(b.normalMap.format),metalnessMap:Ft,roughnessMap:Bt,anisotropy:$,anisotropyMap:ge,clearcoat:tn,clearcoatMap:Ce,clearcoatNormalMap:Ie,clearcoatRoughnessMap:xe,dispersion:Pt,retroreflection:B,iridescence:w,iridescenceMap:Ee,iridescenceThicknessMap:Be,sheen:J,sheenColorMap:Ze,sheenRoughnessMap:Ue,specularMap:Pe,specularColorMap:et,specularIntensityMap:rt,transmission:se,transmissionMap:ut,thicknessMap:q,gradientMap:Te,opaque:b.transparent===!1&&b.blending===Sl&&b.alphaToCoverage===!1,alphaMap:Se,alphaTest:ye,alphaHash:Me,combine:b.combine,mapUv:dt&&E(b.map.channel),aoMapUv:bt&&E(b.aoMap.channel),lightMapUv:It&&E(b.lightMap.channel),bumpMapUv:vt&&E(b.bumpMap.channel),normalMapUv:Ct&&E(b.normalMap.channel),displacementMapUv:Ot&&E(b.displacementMap.channel),emissiveMapUv:Zt&&E(b.emissiveMap.channel),metalnessMapUv:Ft&&E(b.metalnessMap.channel),roughnessMapUv:Bt&&E(b.roughnessMap.channel),anisotropyMapUv:ge&&E(b.anisotropyMap.channel),clearcoatMapUv:Ce&&E(b.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&E(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xe&&E(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&E(b.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&E(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&E(b.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&E(b.sheenRoughnessMap.channel),specularMapUv:Pe&&E(b.specularMap.channel),specularColorMapUv:et&&E(b.specularColorMap.channel),specularIntensityMapUv:rt&&E(b.specularIntensityMap.channel),transmissionMapUv:ut&&E(b.transmissionMap.channel),thicknessMapUv:q&&E(b.thicknessMap.channel),alphaMapUv:Se&&E(b.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Ct||$),vertexNormals:!!re.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!re.attributes.uv&&(dt||Se),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||re.attributes.normal===void 0&&Ct===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Ne,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:re.attributes.position!==void 0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:be,numSunLights:I.sun.length,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numSunLightShadows:I.sunShadowMap.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:ne.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Oe,decodeVideoTexture:dt&&b.map.isVideoTexture===!0&&Yt.getTransfer(b.map.colorSpace)===dn,decodeVideoTextureEmissive:Zt&&b.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(b.emissiveMap.colorSpace)===dn,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===zi,flipSided:b.side===Vi,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Y&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Y&&b.extensions.multiDraw===!0||ze)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Fe.vertexUv1s=m.has(1),Fe.vertexUv2s=m.has(2),Fe.vertexUv3s=m.has(3),m.clear(),Fe}function x(b){const I=[];if(b.shaderID?I.push(b.shaderID):(I.push(b.customVertexShaderID),I.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)I.push(z),I.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(v(I,b),T(I,b),I.push(s.outputColorSpace)),I.push(b.customProgramCacheKey),I.join()}function v(b,I){b.push(I.precision),b.push(I.outputColorSpace),b.push(I.envMapMode),b.push(I.envMapCubeUVHeight),b.push(I.mapUv),b.push(I.alphaMapUv),b.push(I.lightMapUv),b.push(I.aoMapUv),b.push(I.bumpMapUv),b.push(I.normalMapUv),b.push(I.displacementMapUv),b.push(I.emissiveMapUv),b.push(I.metalnessMapUv),b.push(I.roughnessMapUv),b.push(I.anisotropyMapUv),b.push(I.clearcoatMapUv),b.push(I.clearcoatNormalMapUv),b.push(I.clearcoatRoughnessMapUv),b.push(I.iridescenceMapUv),b.push(I.iridescenceThicknessMapUv),b.push(I.sheenColorMapUv),b.push(I.sheenRoughnessMapUv),b.push(I.specularMapUv),b.push(I.specularColorMapUv),b.push(I.specularIntensityMapUv),b.push(I.transmissionMapUv),b.push(I.thicknessMapUv),b.push(I.combine),b.push(I.fogExp2),b.push(I.sizeAttenuation),b.push(I.morphTargetsCount),b.push(I.morphAttributeCount),b.push(I.numSunLights),b.push(I.numDirLights),b.push(I.numPointLights),b.push(I.numSpotLights),b.push(I.numSpotLightMaps),b.push(I.numHemiLights),b.push(I.numRectAreaLights),b.push(I.numSunLightShadows),b.push(I.numDirLightShadows),b.push(I.numPointLightShadows),b.push(I.numSpotLightShadows),b.push(I.numSpotLightShadowsWithMaps),b.push(I.numLightProbes),b.push(I.shadowMapType),b.push(I.toneMapping),b.push(I.numClippingPlanes),b.push(I.numClipIntersection),b.push(I.depthPacking)}function T(b,I){u.disableAll(),I.instancing&&u.enable(0),I.instancingColor&&u.enable(1),I.instancingMorph&&u.enable(2),I.matcap&&u.enable(3),I.envMap&&u.enable(4),I.normalMapObjectSpace&&u.enable(5),I.normalMapTangentSpace&&u.enable(6),I.clearcoat&&u.enable(7),I.iridescence&&u.enable(8),I.alphaTest&&u.enable(9),I.vertexColors&&u.enable(10),I.vertexAlphas&&u.enable(11),I.vertexUv1s&&u.enable(12),I.vertexUv2s&&u.enable(13),I.vertexUv3s&&u.enable(14),I.vertexTangents&&u.enable(15),I.anisotropy&&u.enable(16),I.alphaHash&&u.enable(17),I.batching&&u.enable(18),I.dispersion&&u.enable(19),I.retroreflection&&u.enable(24),I.batchingColor&&u.enable(20),I.gradientMap&&u.enable(21),I.packedNormalMap&&u.enable(22),I.vertexNormals&&u.enable(23),b.push(u.mask),u.disableAll(),I.fog&&u.enable(0),I.useFog&&u.enable(1),I.flatShading&&u.enable(2),I.logarithmicDepthBuffer&&u.enable(3),I.reversedDepthBuffer&&u.enable(4),I.skinning&&u.enable(5),I.morphTargets&&u.enable(6),I.morphNormals&&u.enable(7),I.morphColors&&u.enable(8),I.premultipliedAlpha&&u.enable(9),I.shadowMapEnabled&&u.enable(10),I.doubleSided&&u.enable(11),I.flipSided&&u.enable(12),I.useDepthPacking&&u.enable(13),I.dithering&&u.enable(14),I.transmission&&u.enable(15),I.sheen&&u.enable(16),I.opaque&&u.enable(17),I.pointsUvs&&u.enable(18),I.decodeVideoTexture&&u.enable(19),I.decodeVideoTextureEmissive&&u.enable(20),I.alphaToCoverage&&u.enable(21),I.numLightProbeGrids>0&&u.enable(22),I.hasPositionAttribute&&u.enable(23),b.push(u.mask)}function F(b){const I=M[b.type];let z;if(I){const G=Vr[I];z=Ox.clone(G.uniforms)}else z=b.uniforms;return z}function A(b,I){let z=y.get(I);return z!==void 0?++z.usedTimes:(z=new hE(s,I,b,o),p.push(z),y.set(I,z)),z}function D(b){if(--b.usedTimes===0){const I=p.indexOf(b);p[I]=p[p.length-1],p.pop(),y.delete(b.cacheKey),b.destroy()}}function L(b){f.remove(b)}function k(){f.dispose()}return{getParameters:R,getProgramCacheKey:x,getUniforms:F,acquireProgram:A,releaseProgram:D,releaseShaderCache:L,programs:p,dispose:k}}function xE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,m){s.get(u)[f]=m}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function yE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function dg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function fg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(_){let M=0;return _.isInstancedMesh&&(M+=2),_.isSkinnedMesh&&(M+=1),M}function f(_,M,E,R,x,v){let T=s[e];return T===void 0?(T={id:_.id,object:_,geometry:M,material:E,materialVariant:u(_),groupOrder:R,renderOrder:_.renderOrder,z:x,group:v},s[e]=T):(T.id=_.id,T.object=_,T.geometry=M,T.material=E,T.materialVariant=u(_),T.groupOrder=R,T.renderOrder=_.renderOrder,T.z=x,T.group=v),e++,T}function m(_,M,E,R,x,v,T){T.reversedDepth===!0&&(x=-x);const F=f(_,M,E,R,x,v);E.transmission>0?r.push(F):E.transparent===!0?o.push(F):t.push(F)}function p(_,M,E,R,x,v){const T=f(_,M,E,R,x,v);E.transmission>0?r.unshift(T):E.transparent===!0?o.unshift(T):t.unshift(T)}function y(_,M){t.length>1&&t.sort(_||yE),r.length>1&&r.sort(M||dg),o.length>1&&o.sort(M||dg)}function S(){for(let _=e,M=s.length;_<M;_++){const E=s[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:m,unshift:p,finish:S,sort:y}}function SE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new fg,s.set(r,[u])):o>=l.length?(u=new fg,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function ME(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ie,color:new Xt};break;case"SpotLight":t={position:new ie,direction:new ie,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":t={color:new Xt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return s[e.id]=t,t}}}function EE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let wE=0;function bE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function TE(s){const e=new ME,t=EE(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ie);const o=new ie,l=new Tn,u=new Tn;function f(p){let y=0,S=0,_=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let M=0,E=0,R=0,x=0,v=0,T=0,F=0,A=0,D=0,L=0,k=0,b=0,I=0,z=0;p.sort(bE);for(let W=0,ne=p.length;W<ne;W++){const H=p[W],re=H.color,fe=H.intensity,ee=H.distance;let te=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===La?te=H.shadow.map.texture:te=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)y+=re.r*fe,S+=re.g*fe,_+=re.b*fe;else if(H.isLightProbe){for(let K=0;K<9;K++)r.probe[K].addScaledVector(H.sh.coefficients[K],fe);z++}else if(H.isSunLight){const K=e.get(H);if(K.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Z=H.shadow,U=t.get(H);U.shadowIntensity=Z.intensity,U.shadowBias=Z.bias,U.shadowNormalBias=Z.normalBias,U.shadowRadius=Z.radius,U.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),r.sunShadow[E]=U,r.sunShadowMap[E]=te;const de=Z.getViewportCount();for(let be=0;be<de;be++)r.sunShadowMatrix[R+be]=Z.getMatrix(be),r.sunShadowCascade[R+be]=Z._cascadeData[be];R+=de,E++}r.sun[M]=K,M++}else if(H.isDirectionalLight){const K=e.get(H);if(K.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Z=H.shadow,U=t.get(H);U.shadowIntensity=Z.intensity,U.shadowBias=Z.bias,U.shadowNormalBias=Z.normalBias,U.shadowRadius=Z.radius,U.shadowMapSize=Z.mapSize,r.directionalShadow[x]=U,r.directionalShadowMap[x]=te,r.directionalShadowMatrix[x]=H.shadow.matrix,D++}r.directional[x]=K,x++}else if(H.isSpotLight){const K=e.get(H);K.position.setFromMatrixPosition(H.matrixWorld),K.color.copy(re).multiplyScalar(fe),K.distance=ee,K.coneCos=Math.cos(H.angle),K.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),K.decay=H.decay,r.spot[T]=K;const Z=H.shadow;if(H.map&&(r.spotLightMap[b]=H.map,b++,Z.updateMatrices(H),H.castShadow&&I++),r.spotLightMatrix[T]=Z.matrix,H.castShadow){const U=t.get(H);U.shadowIntensity=Z.intensity,U.shadowBias=Z.bias,U.shadowNormalBias=Z.normalBias,U.shadowRadius=Z.radius,U.shadowMapSize=Z.mapSize,r.spotShadow[T]=U,r.spotShadowMap[T]=te,k++}T++}else if(H.isRectAreaLight){const K=e.get(H);K.color.copy(re).multiplyScalar(fe),K.halfWidth.set(H.width*.5,0,0),K.halfHeight.set(0,H.height*.5,0),r.rectArea[F]=K,F++}else if(H.isPointLight){const K=e.get(H);if(K.color.copy(H.color).multiplyScalar(H.intensity),K.distance=H.distance,K.decay=H.decay,H.castShadow){const Z=H.shadow,U=t.get(H);U.shadowIntensity=Z.intensity,U.shadowBias=Z.bias,U.shadowNormalBias=Z.normalBias,U.shadowRadius=Z.radius,U.shadowMapSize=Z.mapSize,U.shadowCameraNear=Z.camera.near,U.shadowCameraFar=Z.camera.far,r.pointShadow[v]=U,r.pointShadowMap[v]=te,r.pointShadowMatrix[v]=H.shadow.matrix,L++}r.point[v]=K,v++}else if(H.isHemisphereLight){const K=e.get(H);K.skyColor.copy(H.color).multiplyScalar(fe),K.groundColor.copy(H.groundColor).multiplyScalar(fe),r.hemi[A]=K,A++}}F>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ke.LTC_FLOAT_1,r.rectAreaLTC2=Ke.LTC_FLOAT_2):(r.rectAreaLTC1=Ke.LTC_HALF_1,r.rectAreaLTC2=Ke.LTC_HALF_2)),r.ambient[0]=y,r.ambient[1]=S,r.ambient[2]=_;const G=r.hash;(G.sunLength!==M||G.directionalLength!==x||G.pointLength!==v||G.spotLength!==T||G.rectAreaLength!==F||G.hemiLength!==A||G.numSunShadows!==E||G.numDirectionalShadows!==D||G.numPointShadows!==L||G.numSpotShadows!==k||G.numSpotMaps!==b||G.numLightProbes!==z)&&(r.sun.length=M,r.directional.length=x,r.spot.length=T,r.rectArea.length=F,r.point.length=v,r.hemi.length=A,r.sunShadow.length=E,r.sunShadowMap.length=E,r.sunShadowMatrix.length=R,r.sunShadowCascade.length=R,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.directionalShadowMatrix.length=D,r.pointShadow.length=L,r.pointShadowMap.length=L,r.pointShadowMatrix.length=L,r.spotShadow.length=k,r.spotShadowMap.length=k,r.spotLightMatrix.length=k+b-I,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=z,G.sunLength=M,G.directionalLength=x,G.pointLength=v,G.spotLength=T,G.rectAreaLength=F,G.hemiLength=A,G.numSunShadows=E,G.numDirectionalShadows=D,G.numPointShadows=L,G.numSpotShadows=k,G.numSpotMaps=b,G.numLightProbes=z,r.version=wE++)}function m(p,y){let S=0,_=0,M=0,E=0,R=0,x=0;const v=y.matrixWorldInverse;for(let T=0,F=p.length;T<F;T++){const A=p[T];if(A.isSunLight){const D=r.sun[S];D.direction.setFromMatrixPosition(A.matrixWorld),D.direction.transformDirection(v),S++}else if(A.isDirectionalLight){const D=r.directional[_];D.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(v),_++}else if(A.isSpotLight){const D=r.spot[E];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(v),D.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(v),E++}else if(A.isRectAreaLight){const D=r.rectArea[R];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(v),u.identity(),l.copy(A.matrixWorld),l.premultiply(v),u.extractRotation(l),D.halfWidth.set(A.width*.5,0,0),D.halfHeight.set(0,A.height*.5,0),D.halfWidth.applyMatrix4(u),D.halfHeight.applyMatrix4(u),R++}else if(A.isPointLight){const D=r.point[M];D.position.setFromMatrixPosition(A.matrixWorld),D.position.applyMatrix4(v),M++}else if(A.isHemisphereLight){const D=r.hemi[x];D.direction.setFromMatrixPosition(A.matrixWorld),D.direction.transformDirection(v),x++}}}return{setup:f,setupView:m,state:r}}function hg(s){const e=new TE(s),t=[],r=[],o=[];function l(_){S.camera=_,t.length=0,r.length=0,o.length=0}function u(_){t.push(_)}function f(_){r.push(_)}function m(_){o.push(_)}function p(){e.setup(t)}function y(_){e.setupView(t,_)}const S={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:S,setupLights:p,setupLightsView:y,pushLight:u,pushShadow:f,pushLightProbeGrid:m}}function AE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new hg(s),e.set(o,[f])):l>=u.length?(f=new hg(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const RE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CE=`uniform sampler2D shadow_pass;
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
}`,PE=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],LE=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],pg=new Tn,vl=new ie,Wf=new ie;function NE(s,e,t){let r=new $h;const o=new Gt,l=new Gt,u=new Ln,f=new zx,m=new Vx,p={},y=t.maxTextureSize,S={[Ra]:Vi,[Vi]:Ra,[zi]:zi},_=new jr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:RE,fragmentShader:CE}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const E=new qn;E.setAttribute("position",new Lr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new ve(E,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=du;let v=this.type;this.render=function(L,k,b){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||L.length===0)return;this.type===A_&&(Mt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=du);const I=s.getRenderTarget(),z=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),W=s.state;W.setBlending(_s),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const ne=v!==this.type;ne&&k.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(re=>re.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,re=L.length;H<re;H++){const fe=L[H],ee=fe.shadow;if(ee===void 0){Mt("WebGLShadowMap:",fe,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;o.copy(ee.mapSize);const te=ee.getFrameExtents();o.multiply(te),l.copy(ee.mapSize),(o.x>y||o.y>y)&&(o.x>y&&(l.x=Math.floor(y/te.x),o.x=l.x*te.x,ee.mapSize.x=l.x),o.y>y&&(l.y=Math.floor(y/te.y),o.y=l.y*te.y,ee.mapSize.y=l.y));const K=s.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=K,ee.map===null||ne===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===_l){if(fe.isPointLight){Mt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new Pr(o.x,o.y,{format:La,type:qr,minFilter:_i,magFilter:_i,generateMipmaps:!1}),ee.map.texture.name=fe.name+".shadowMap",ee.map.depthTexture=new Tl(o.x,o.y,Gr),ee.map.depthTexture.name=fe.name+".shadowMapDepth",ee.map.depthTexture.format=ys,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=ci,ee.map.depthTexture.magFilter=ci}else fe.isPointLight?(ee.map=new Qg(o.x),ee.map.depthTexture=new Dx(o.x,Xr)):(ee.map=new Pr(o.x,o.y),ee.map.depthTexture=new Tl(o.x,o.y,Xr)),ee.map.depthTexture.name=fe.name+".shadowMap",ee.map.depthTexture.format=ys,this.type===du?(ee.map.depthTexture.compareFunction=K?Wh:Hh,ee.map.depthTexture.minFilter=_i,ee.map.depthTexture.magFilter=_i):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=ci,ee.map.depthTexture.magFilter=ci);ee.camera.updateProjectionMatrix()}ee.map.isWebGLCubeRenderTarget!==!0&&(ee.map.width!==o.x||ee.map.height!==o.y)&&ee.map.setSize(o.x,o.y);const Z=ee.map.isWebGLCubeRenderTarget?6:ee.getViewportCount();fe.isPointLight!==!0&&ee.updateMatrices(fe,b);for(let U=0;U<Z;U++){const de=ee.getCamera(U);if(fe.isPointLight){const be=ee.camera,qe=ee.matrix,je=fe.distance||be.far;je!==be.far&&(be.far=je,be.updateProjectionMatrix()),vl.setFromMatrixPosition(fe.matrixWorld),be.position.copy(vl),Wf.copy(be.position),Wf.add(PE[U]),be.up.copy(LE[U]),be.lookAt(Wf),be.updateMatrixWorld(),qe.makeTranslation(-vl.x,-vl.y,-vl.z),pg.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(pg,be.coordinateSystem,be.reversedDepth)}if(ee.map.isWebGLCubeRenderTarget)s.setRenderTarget(ee.map,U),s.clear();else{U===0&&(s.setRenderTarget(ee.map),s.clear());const be=ee.getViewport(U);u.set(l.x*be.x,l.y*be.y,l.x*be.z,l.y*be.w),W.viewport(u)}r=ee.getFrustum(U),A(k,b,de,fe,this.type)}ee.isPointLightShadow!==!0&&this.type===_l&&T(ee,b),ee.needsUpdate=!1}v=this.type,x.needsUpdate=!1,s.setRenderTarget(I,z,G)};function T(L,k){const b=e.update(R);_.defines.VSM_SAMPLES!==L.blurSamples&&(_.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null?L.mapPass=new Pr(o.x,o.y,{format:La,type:qr}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),_.uniforms.shadow_pass.value=L.map.depthTexture,_.uniforms.resolution.value.set(L.map.width,L.map.height),_.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(k,null,b,_,R,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value.set(L.map.width,L.map.height),M.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(k,null,b,M,R,null)}function F(L,k,b,I){let z=null;const G=b.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(G!==void 0)z=G;else if(z=b.isPointLight===!0?m:f,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const W=z.uuid,ne=k.uuid;let H=p[W];H===void 0&&(H={},p[W]=H);let re=H[ne];re===void 0&&(re=z.clone(),H[ne]=re,k.addEventListener("dispose",D)),z=re}if(z.visible=k.visible,z.wireframe=k.wireframe,I===_l?z.side=k.shadowSide!==null?k.shadowSide:k.side:z.side=k.shadowSide!==null?k.shadowSide:S[k.side],z.alphaMap=k.alphaMap,z.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,z.map=k.map,z.clipShadows=k.clipShadows,z.clippingPlanes=k.clippingPlanes,z.clipIntersection=k.clipIntersection,z.displacementMap=k.displacementMap,z.displacementScale=k.displacementScale,z.displacementBias=k.displacementBias,z.wireframeLinewidth=k.wireframeLinewidth,z.linewidth=k.linewidth,b.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const W=s.properties.get(z);W.light=b}return z}function A(L,k,b,I,z){if(L.visible===!1)return;if(L.layers.test(k.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&z===_l)&&(!L.frustumCulled||L.intersectsFrustum(r))){L.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,L.matrixWorld);const ne=e.update(L),H=L.material;if(Array.isArray(H)){const re=ne.groups;for(let fe=0,ee=re.length;fe<ee;fe++){const te=re[fe],K=H[te.materialIndex];if(K&&K.visible){const Z=F(L,K,I,z);L.onBeforeShadow(s,L,k,b,ne,Z,te),s.renderBufferDirect(b,null,ne,Z,L,te),L.onAfterShadow(s,L,k,b,ne,Z,te)}}}else if(H.visible){const re=F(L,H,I,z);L.onBeforeShadow(s,L,k,b,ne,re,null),s.renderBufferDirect(b,null,ne,re,L,null),L.onAfterShadow(s,L,k,b,ne,re,null)}}const W=L.children;for(let ne=0,H=W.length;ne<H;ne++)A(W[ne],k,b,I,z)}function D(L){L.target.removeEventListener("dispose",D);for(const b in p){const I=p[b],z=L.target.uuid;z in I&&(I[z].dispose(),delete I[z])}}}function IE(s,e){function t(){let q=!1;const Te=new Ln;let Se=null;const ye=new Ln(0,0,0,0);return{setMask:function(Me){Se!==Me&&!q&&(s.colorMask(Me,Me,Me,Me),Se=Me)},setLocked:function(Me){q=Me},setClear:function(Me,Y,Oe,Fe,Et){Et===!0&&(Me*=Fe,Y*=Fe,Oe*=Fe),Te.set(Me,Y,Oe,Fe),ye.equals(Te)===!1&&(s.clearColor(Me,Y,Oe,Fe),ye.copy(Te))},reset:function(){q=!1,Se=null,ye.set(-1,0,0,0)}}}function r(){let q=!1,Te=!1,Se=null,ye=null,Me=null;return{setReversed:function(Y){if(Te!==Y){const Oe=e.get("EXT_clip_control");Y?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),Te=Y;const Fe=Me;Me=null,this.setClear(Fe)}},getReversed:function(){return Te},setTest:function(Y){Y?he(s.DEPTH_TEST):Ne(s.DEPTH_TEST)},setMask:function(Y){Se!==Y&&!q&&(s.depthMask(Y),Se=Y)},setFunc:function(Y){if(Te&&(Y=lx[Y]),ye!==Y){switch(Y){case Xf:s.depthFunc(s.NEVER);break;case qf:s.depthFunc(s.ALWAYS);break;case jf:s.depthFunc(s.LESS);break;case Ml:s.depthFunc(s.LEQUAL);break;case $f:s.depthFunc(s.EQUAL);break;case Yf:s.depthFunc(s.GEQUAL);break;case Kf:s.depthFunc(s.GREATER);break;case Zf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ye=Y}},setLocked:function(Y){q=Y},setClear:function(Y){Me!==Y&&(Me=Y,Te&&(Y=1-Y),s.clearDepth(Y))},reset:function(){q=!1,Se=null,ye=null,Me=null,Te=!1}}}function o(){let q=!1,Te=null,Se=null,ye=null,Me=null,Y=null,Oe=null,Fe=null,Et=null;return{setTest:function(ot){q||(ot?he(s.STENCIL_TEST):Ne(s.STENCIL_TEST))},setMask:function(ot){Te!==ot&&!q&&(s.stencilMask(ot),Te=ot)},setFunc:function(ot,xn,fn){(Se!==ot||ye!==xn||Me!==fn)&&(s.stencilFunc(ot,xn,fn),Se=ot,ye=xn,Me=fn)},setOp:function(ot,xn,fn){(Y!==ot||Oe!==xn||Fe!==fn)&&(s.stencilOp(ot,xn,fn),Y=ot,Oe=xn,Fe=fn)},setLocked:function(ot){q=ot},setClear:function(ot){Et!==ot&&(s.clearStencil(ot),Et=ot)},reset:function(){q=!1,Te=null,Se=null,ye=null,Me=null,Y=null,Oe=null,Fe=null,Et=null}}}const l=new t,u=new r,f=new o,m=new WeakMap,p=new WeakMap;let y={},S={},_={},M=new WeakMap,E=[],R=null,x=!1,v=null,T=null,F=null,A=null,D=null,L=null,k=null,b=new Xt(0,0,0),I=0,z=!1,G=null,W=null,ne=null,H=null,re=null;const fe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,te=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(K)[1]),ee=te>=1):K.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),ee=te>=2);let Z=null,U={};const de=s.getParameter(s.SCISSOR_BOX),be=s.getParameter(s.VIEWPORT),qe=new Ln().fromArray(de),je=new Ln().fromArray(be);function $e(q,Te,Se,ye){const Me=new Uint8Array(4),Y=s.createTexture();s.bindTexture(q,Y),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Oe=0;Oe<Se;Oe++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Te,0,s.RGBA,1,1,ye,0,s.RGBA,s.UNSIGNED_BYTE,Me):s.texImage2D(Te+Oe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Me);return Y}const ce={};ce[s.TEXTURE_2D]=$e(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=$e(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[s.TEXTURE_2D_ARRAY]=$e(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=$e(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),he(s.DEPTH_TEST),u.setFunc(Ml),vt(!1),Ct(p0),he(s.CULL_FACE),bt(_s);function he(q){y[q]!==!0&&(s.enable(q),y[q]=!0)}function Ne(q){y[q]!==!1&&(s.disable(q),y[q]=!1)}function Qe(q,Te){return _[q]!==Te?(s.bindFramebuffer(q,Te),_[q]=Te,q===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Te),q===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Te),!0):!1}function ze(q,Te){let Se=E,ye=!1;if(q){Se=M.get(Te),Se===void 0&&(Se=[],M.set(Te,Se));const Me=q.textures;if(Se.length!==Me.length||Se[0]!==s.COLOR_ATTACHMENT0){for(let Y=0,Oe=Me.length;Y<Oe;Y++)Se[Y]=s.COLOR_ATTACHMENT0+Y;Se.length=Me.length,ye=!0}}else Se[0]!==s.BACK&&(Se[0]=s.BACK,ye=!0);ye&&s.drawBuffers(Se)}function dt(q){return R!==q?(s.useProgram(q),R=q,!0):!1}const en={[So]:s.FUNC_ADD,[C_]:s.FUNC_SUBTRACT,[P_]:s.FUNC_REVERSE_SUBTRACT};en[L_]=s.MIN,en[N_]=s.MAX;const ht={[I_]:s.ZERO,[D_]:s.ONE,[U_]:s.SRC_COLOR,[Sg]:s.SRC_ALPHA,[V_]:s.SRC_ALPHA_SATURATE,[B_]:s.DST_COLOR,[F_]:s.DST_ALPHA,[O_]:s.ONE_MINUS_SRC_COLOR,[Mg]:s.ONE_MINUS_SRC_ALPHA,[z_]:s.ONE_MINUS_DST_COLOR,[k_]:s.ONE_MINUS_DST_ALPHA,[G_]:s.CONSTANT_COLOR,[H_]:s.ONE_MINUS_CONSTANT_COLOR,[W_]:s.CONSTANT_ALPHA,[X_]:s.ONE_MINUS_CONSTANT_ALPHA};function bt(q,Te,Se,ye,Me,Y,Oe,Fe,Et,ot){if(q===_s){x===!0&&(Ne(s.BLEND),x=!1);return}if(x===!1&&(he(s.BLEND),x=!0),q!==R_){if(q!==v||ot!==z){if((T!==So||D!==So)&&(s.blendEquation(s.FUNC_ADD),T=So,D=So),ot)switch(q){case Sl:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bi:s.blendFunc(s.ONE,s.ONE);break;case m0:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case g0:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:on("WebGLState: Invalid blending: ",q);break}else switch(q){case Sl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Bi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case m0:on("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case g0:on("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:on("WebGLState: Invalid blending: ",q);break}F=null,A=null,L=null,k=null,b.set(0,0,0),I=0,v=q,z=ot}return}Me=Me||Te,Y=Y||Se,Oe=Oe||ye,(Te!==T||Me!==D)&&(s.blendEquationSeparate(en[Te],en[Me]),T=Te,D=Me),(Se!==F||ye!==A||Y!==L||Oe!==k)&&(s.blendFuncSeparate(ht[Se],ht[ye],ht[Y],ht[Oe]),F=Se,A=ye,L=Y,k=Oe),(Fe.equals(b)===!1||Et!==I)&&(s.blendColor(Fe.r,Fe.g,Fe.b,Et),b.copy(Fe),I=Et),v=q,z=!1}function It(q,Te){q.side===zi?Ne(s.CULL_FACE):he(s.CULL_FACE);let Se=q.side===Vi;Te&&(Se=!Se),vt(Se),q.blending===Sl&&q.transparent===!1?bt(_s):bt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),l.setMask(q.colorWrite);const ye=q.stencilWrite;f.setTest(ye),ye&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Zt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):Ne(s.SAMPLE_ALPHA_TO_COVERAGE)}function vt(q){G!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),G=q)}function Ct(q){q!==b_?(he(s.CULL_FACE),q!==W&&(q===p0?s.cullFace(s.BACK):q===T_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ne(s.CULL_FACE),W=q}function Ot(q){q!==ne&&(ee&&s.lineWidth(q),ne=q)}function Zt(q,Te,Se){q?(he(s.POLYGON_OFFSET_FILL),(H!==Te||re!==Se)&&(H=Te,re=Se,u.getReversed()&&(Te=-Te),s.polygonOffset(Te,Se))):Ne(s.POLYGON_OFFSET_FILL)}function Ft(q){q?he(s.SCISSOR_TEST):Ne(s.SCISSOR_TEST)}function Bt(q){q===void 0&&(q=s.TEXTURE0+fe-1),Z!==q&&(s.activeTexture(q),Z=q)}function $(q,Te,Se){Se===void 0&&(Z===null?Se=s.TEXTURE0+fe-1:Se=Z);let ye=U[Se];ye===void 0&&(ye={type:void 0,texture:void 0},U[Se]=ye),(ye.type!==q||ye.texture!==Te)&&(Z!==Se&&(s.activeTexture(Se),Z=Se),s.bindTexture(q,Te||ce[q]),ye.type=q,ye.texture=Te)}function tn(){const q=U[Z];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Pt(){try{s.compressedTexImage2D(...arguments)}catch(q){on("WebGLState:",q)}}function B(){try{s.compressedTexImage3D(...arguments)}catch(q){on("WebGLState:",q)}}function w(){try{s.texSubImage2D(...arguments)}catch(q){on("WebGLState:",q)}}function J(){try{s.texSubImage3D(...arguments)}catch(q){on("WebGLState:",q)}}function se(){try{s.compressedTexSubImage2D(...arguments)}catch(q){on("WebGLState:",q)}}function ge(){try{s.compressedTexSubImage3D(...arguments)}catch(q){on("WebGLState:",q)}}function Ce(){try{s.texStorage2D(...arguments)}catch(q){on("WebGLState:",q)}}function Ie(){try{s.texStorage3D(...arguments)}catch(q){on("WebGLState:",q)}}function xe(){try{s.texImage2D(...arguments)}catch(q){on("WebGLState:",q)}}function Ee(){try{s.texImage3D(...arguments)}catch(q){on("WebGLState:",q)}}function Be(q){return S[q]!==void 0?S[q]:s.getParameter(q)}function Ze(q,Te){S[q]!==Te&&(s.pixelStorei(q,Te),S[q]=Te)}function Ue(q){qe.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),qe.copy(q))}function Pe(q){je.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),je.copy(q))}function et(q,Te){let Se=p.get(Te);Se===void 0&&(Se=new WeakMap,p.set(Te,Se));let ye=Se.get(q);ye===void 0&&(ye=s.getUniformBlockIndex(Te,q.name),Se.set(q,ye))}function rt(q,Te){const ye=p.get(Te).get(q);m.get(Te)!==ye&&(s.uniformBlockBinding(Te,ye,q.__bindingPointIndex),m.set(Te,ye))}function ut(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),y={},S={},Z=null,U={},_={},M=new WeakMap,E=[],R=null,x=!1,v=null,T=null,F=null,A=null,D=null,L=null,k=null,b=new Xt(0,0,0),I=0,z=!1,G=null,W=null,ne=null,H=null,re=null,qe.set(0,0,s.canvas.width,s.canvas.height),je.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:he,disable:Ne,bindFramebuffer:Qe,drawBuffers:ze,useProgram:dt,setBlending:bt,setMaterial:It,setFlipSided:vt,setCullFace:Ct,setLineWidth:Ot,setPolygonOffset:Zt,setScissorTest:Ft,activeTexture:Bt,bindTexture:$,unbindTexture:tn,compressedTexImage2D:Pt,compressedTexImage3D:B,texImage2D:xe,texImage3D:Ee,pixelStorei:Ze,getParameter:Be,updateUBOMapping:et,uniformBlockBinding:rt,texStorage2D:Ce,texStorage3D:Ie,texSubImage2D:w,texSubImage3D:J,compressedTexSubImage2D:se,compressedTexSubImage3D:ge,scissor:Ue,viewport:Pe,reset:ut}}function DE(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Gt,y=new WeakMap,S=new Set;let _;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(B,w){return E?new OffscreenCanvas(B,w):Mu("canvas")}function x(B,w,J){let se=1;const ge=Pt(B);if((ge.width>J||ge.height>J)&&(se=J/Math.max(ge.width,ge.height)),se<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const Ce=Math.floor(se*ge.width),Ie=Math.floor(se*ge.height);_===void 0&&(_=R(Ce,Ie));const xe=w?R(Ce,Ie):_;return xe.width=Ce,xe.height=Ie,xe.getContext("2d").drawImage(B,0,0,Ce,Ie),Mt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Ce+"x"+Ie+")."),xe}else return"data"in B&&Mt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),B;return B}function v(B){return B.generateMipmaps}function T(B){s.generateMipmap(B)}function F(B){return B.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?s.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function A(B,w,J,se,ge,Ce=!1){if(B!==null){if(s[B]!==void 0)return s[B];Mt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Ie;se&&(Ie=e.get("EXT_texture_norm16"),Ie||Mt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xe=w;if(w===s.RED&&(J===s.FLOAT&&(xe=s.R32F),J===s.HALF_FLOAT&&(xe=s.R16F),J===s.UNSIGNED_BYTE&&(xe=s.R8),J===s.UNSIGNED_SHORT&&Ie&&(xe=Ie.R16_EXT),J===s.SHORT&&Ie&&(xe=Ie.R16_SNORM_EXT)),w===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(xe=s.R8UI),J===s.UNSIGNED_SHORT&&(xe=s.R16UI),J===s.UNSIGNED_INT&&(xe=s.R32UI),J===s.BYTE&&(xe=s.R8I),J===s.SHORT&&(xe=s.R16I),J===s.INT&&(xe=s.R32I)),w===s.RG&&(J===s.FLOAT&&(xe=s.RG32F),J===s.HALF_FLOAT&&(xe=s.RG16F),J===s.UNSIGNED_BYTE&&(xe=s.RG8),J===s.UNSIGNED_SHORT&&Ie&&(xe=Ie.RG16_EXT),J===s.SHORT&&Ie&&(xe=Ie.RG16_SNORM_EXT)),w===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(xe=s.RG8UI),J===s.UNSIGNED_SHORT&&(xe=s.RG16UI),J===s.UNSIGNED_INT&&(xe=s.RG32UI),J===s.BYTE&&(xe=s.RG8I),J===s.SHORT&&(xe=s.RG16I),J===s.INT&&(xe=s.RG32I)),w===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(xe=s.RGB8UI),J===s.UNSIGNED_SHORT&&(xe=s.RGB16UI),J===s.UNSIGNED_INT&&(xe=s.RGB32UI),J===s.BYTE&&(xe=s.RGB8I),J===s.SHORT&&(xe=s.RGB16I),J===s.INT&&(xe=s.RGB32I)),w===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(xe=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(xe=s.RGBA16UI),J===s.UNSIGNED_INT&&(xe=s.RGBA32UI),J===s.BYTE&&(xe=s.RGBA8I),J===s.SHORT&&(xe=s.RGBA16I),J===s.INT&&(xe=s.RGBA32I)),w===s.RGB&&(J===s.UNSIGNED_SHORT&&Ie&&(xe=Ie.RGB16_EXT),J===s.SHORT&&Ie&&(xe=Ie.RGB16_SNORM_EXT),J===s.UNSIGNED_INT_5_9_9_9_REV&&(xe=s.RGB9_E5),J===s.UNSIGNED_INT_10F_11F_11F_REV&&(xe=s.R11F_G11F_B10F)),w===s.RGBA){const Ee=Ce?Su:Yt.getTransfer(ge);J===s.FLOAT&&(xe=s.RGBA32F),J===s.HALF_FLOAT&&(xe=s.RGBA16F),J===s.UNSIGNED_BYTE&&(xe=Ee===dn?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT&&Ie&&(xe=Ie.RGBA16_EXT),J===s.SHORT&&Ie&&(xe=Ie.RGBA16_SNORM_EXT),J===s.UNSIGNED_SHORT_4_4_4_4&&(xe=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(xe=s.RGB5_A1)}return(xe===s.R16F||xe===s.R32F||xe===s.RG16F||xe===s.RG32F||xe===s.RGBA16F||xe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function D(B,w){let J;return B?w===null||w===Xr||w===wl?J=s.DEPTH24_STENCIL8:w===Gr?J=s.DEPTH32F_STENCIL8:w===El&&(J=s.DEPTH24_STENCIL8,Mt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Xr||w===wl?J=s.DEPTH_COMPONENT24:w===Gr?J=s.DEPTH_COMPONENT32F:w===El&&(J=s.DEPTH_COMPONENT16),J}function L(B,w){return v(B)===!0||B.isFramebufferTexture&&B.minFilter!==ci&&B.minFilter!==_i?Math.log2(Math.max(w.width,w.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?w.mipmaps.length:1}function k(B){const w=B.target;w.removeEventListener("dispose",k),I(w),w.isVideoTexture&&y.delete(w),w.isHTMLTexture&&S.delete(w)}function b(B){const w=B.target;w.removeEventListener("dispose",b),G(w)}function I(B){const w=r.get(B);if(w.__webglInit===void 0)return;const J=B.source,se=M.get(J);if(se){const ge=se[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&z(B),Object.keys(se).length===0&&M.delete(J)}r.remove(B)}function z(B){const w=r.get(B);s.deleteTexture(w.__webglTexture);const J=B.source,se=M.get(J);delete se[w.__cacheKey],u.memory.textures--}function G(B){const w=r.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),r.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(w.__webglFramebuffer[se]))for(let ge=0;ge<w.__webglFramebuffer[se].length;ge++)s.deleteFramebuffer(w.__webglFramebuffer[se][ge]);else s.deleteFramebuffer(w.__webglFramebuffer[se]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[se])}else{if(Array.isArray(w.__webglFramebuffer))for(let se=0;se<w.__webglFramebuffer.length;se++)s.deleteFramebuffer(w.__webglFramebuffer[se]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let se=0;se<w.__webglColorRenderbuffer.length;se++)w.__webglColorRenderbuffer[se]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[se]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const J=B.textures;for(let se=0,ge=J.length;se<ge;se++){const Ce=r.get(J[se]);Ce.__webglTexture&&(s.deleteTexture(Ce.__webglTexture),u.memory.textures--),r.remove(J[se])}r.remove(B)}let W=0;function ne(){W=0}function H(){return W}function re(B){W=B}function fe(){const B=W;return B>=o.maxTextures&&Mt("WebGLTextures: Trying to use "+(B+1)+" texture units while this GPU supports only "+o.maxTextures),W+=1,B}function ee(B){const w=[];return w.push(B.wrapS),w.push(B.wrapT),w.push(B.wrapR||0),w.push(B.magFilter),w.push(B.minFilter),w.push(B.anisotropy),w.push(B.internalFormat),w.push(B.format),w.push(B.type),w.push(B.generateMipmaps),w.push(B.premultiplyAlpha),w.push(B.flipY),w.push(B.unpackAlignment),w.push(B.colorSpace),w.join()}function te(B,w){const J=r.get(B);if(B.isVideoTexture&&$(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&J.__version!==B.version){const se=B.image;if(se===null)Mt("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Mt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(J,B,w);return}}else B.isExternalTexture&&(J.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+w)}function K(B,w){const J=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&J.__version!==B.version){Ne(J,B,w);return}else B.isExternalTexture&&(J.__webglTexture=B.sourceTexture?B.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+w)}function Z(B,w){const J=r.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&J.__version!==B.version){Ne(J,B,w);return}t.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+w)}function U(B,w){const J=r.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&J.__version!==B.version){Qe(J,B,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+w)}const de={[Pa]:s.REPEAT,[vs]:s.CLAMP_TO_EDGE,[Jf]:s.MIRRORED_REPEAT},be={[ci]:s.NEAREST,[$_]:s.NEAREST_MIPMAP_NEAREST,[Dc]:s.NEAREST_MIPMAP_LINEAR,[_i]:s.LINEAR,[hf]:s.LINEAR_MIPMAP_NEAREST,[ba]:s.LINEAR_MIPMAP_LINEAR},qe={[J_]:s.NEVER,[ix]:s.ALWAYS,[Q_]:s.LESS,[Hh]:s.LEQUAL,[ex]:s.EQUAL,[Wh]:s.GEQUAL,[tx]:s.GREATER,[nx]:s.NOTEQUAL};function je(B,w){if(w.type===Gr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===_i||w.magFilter===hf||w.magFilter===Dc||w.magFilter===ba||w.minFilter===_i||w.minFilter===hf||w.minFilter===Dc||w.minFilter===ba)&&Mt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(B,s.TEXTURE_WRAP_S,de[w.wrapS]),s.texParameteri(B,s.TEXTURE_WRAP_T,de[w.wrapT]),(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)&&s.texParameteri(B,s.TEXTURE_WRAP_R,de[w.wrapR]),s.texParameteri(B,s.TEXTURE_MAG_FILTER,be[w.magFilter]),s.texParameteri(B,s.TEXTURE_MIN_FILTER,be[w.minFilter]),w.compareFunction&&(s.texParameteri(B,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(B,s.TEXTURE_COMPARE_FUNC,qe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ci||w.minFilter!==Dc&&w.minFilter!==ba||w.type===Gr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(B,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function $e(B,w){let J=!1;B.__webglInit===void 0&&(B.__webglInit=!0,w.addEventListener("dispose",k));const se=w.source;let ge=M.get(se);ge===void 0&&(ge={},M.set(se,ge));const Ce=ee(w);if(Ce!==B.__cacheKey){ge[Ce]===void 0&&(ge[Ce]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,J=!0),ge[Ce].usedTimes++;const Ie=ge[B.__cacheKey];Ie!==void 0&&(ge[B.__cacheKey].usedTimes--,Ie.usedTimes===0&&z(w)),B.__cacheKey=Ce,B.__webglTexture=ge[Ce].texture}return J}function ce(B,w,J){return Math.floor(Math.floor(B/J)/w)}function he(B,w,J,se){const Ce=B.updateRanges;if(Ce.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,J,se,w.data);else{Ce.sort((Ze,Ue)=>Ze.start-Ue.start);let Ie=0;for(let Ze=1;Ze<Ce.length;Ze++){const Ue=Ce[Ie],Pe=Ce[Ze],et=Ue.start+Ue.count,rt=ce(Pe.start,w.width,4),ut=ce(Ue.start,w.width,4);Pe.start<=et+1&&rt===ut&&ce(Pe.start+Pe.count-1,w.width,4)===rt?Ue.count=Math.max(Ue.count,Pe.start+Pe.count-Ue.start):(++Ie,Ce[Ie]=Pe)}Ce.length=Ie+1;const xe=t.getParameter(s.UNPACK_ROW_LENGTH),Ee=t.getParameter(s.UNPACK_SKIP_PIXELS),Be=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let Ze=0,Ue=Ce.length;Ze<Ue;Ze++){const Pe=Ce[Ze],et=Math.floor(Pe.start/4),rt=Math.ceil(Pe.count/4),ut=et%w.width,q=Math.floor(et/w.width),Te=rt,Se=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ut),t.pixelStorei(s.UNPACK_SKIP_ROWS,q),t.texSubImage2D(s.TEXTURE_2D,0,ut,q,Te,Se,J,se,w.data)}B.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,xe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ee),t.pixelStorei(s.UNPACK_SKIP_ROWS,Be)}}function Ne(B,w,J){let se=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(se=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(se=s.TEXTURE_3D);const ge=$e(B,w),Ce=w.source;t.bindTexture(se,B.__webglTexture,s.TEXTURE0+J);const Ie=r.get(Ce);if(Ce.version!==Ie.__version||ge===!0){if(t.activeTexture(s.TEXTURE0+J),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const Se=Yt.getPrimaries(Yt.workingColorSpace),ye=w.colorSpace===Ks?null:Yt.getPrimaries(w.colorSpace),Me=w.colorSpace===Ks||Se===ye?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment);let Ee=x(w.image,!1,o.maxTextureSize);Ee=tn(w,Ee);const Be=l.convert(w.format,w.colorSpace),Ze=l.convert(w.type);let Ue=A(w.internalFormat,Be,Ze,w.normalized,w.colorSpace,w.isVideoTexture);je(se,w);let Pe;const et=w.mipmaps,rt=w.isVideoTexture!==!0,ut=Ie.__version===void 0||ge===!0,q=Ce.dataReady,Te=L(w,Ee);if(w.isDepthTexture)Ue=D(w.format===Ta,w.type),ut&&(rt?t.texStorage2D(s.TEXTURE_2D,1,Ue,Ee.width,Ee.height):t.texImage2D(s.TEXTURE_2D,0,Ue,Ee.width,Ee.height,0,Be,Ze,null));else if(w.isDataTexture)if(et.length>0){rt&&ut&&t.texStorage2D(s.TEXTURE_2D,Te,Ue,et[0].width,et[0].height);for(let Se=0,ye=et.length;Se<ye;Se++)Pe=et[Se],rt?q&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Pe.width,Pe.height,Be,Ze,Pe.data):t.texImage2D(s.TEXTURE_2D,Se,Ue,Pe.width,Pe.height,0,Be,Ze,Pe.data);w.generateMipmaps=!1}else rt?(ut&&t.texStorage2D(s.TEXTURE_2D,Te,Ue,Ee.width,Ee.height),q&&he(w,Ee,Be,Ze)):t.texImage2D(s.TEXTURE_2D,0,Ue,Ee.width,Ee.height,0,Be,Ze,Ee.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){rt&&ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,Ue,et[0].width,et[0].height,Ee.depth);for(let Se=0,ye=et.length;Se<ye;Se++)if(Pe=et[Se],w.format!==Cr)if(Be!==null)if(rt){if(q)if(w.layerUpdates.size>0){const Me=q0(Pe.width,Pe.height,w.format,w.type);for(const Y of w.layerUpdates){const Oe=Pe.data.subarray(Y*Me/Pe.data.BYTES_PER_ELEMENT,(Y+1)*Me/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,Y,Pe.width,Pe.height,1,Be,Oe)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Pe.width,Pe.height,Ee.depth,Be,Pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Se,Ue,Pe.width,Pe.height,Ee.depth,0,Pe.data,0,0);else Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?q&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Pe.width,Pe.height,Ee.depth,Be,Ze,Pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Se,Ue,Pe.width,Pe.height,Ee.depth,0,Be,Ze,Pe.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{rt&&ut&&t.texStorage2D(s.TEXTURE_2D,Te,Ue,et[0].width,et[0].height);for(let Se=0,ye=et.length;Se<ye;Se++)Pe=et[Se],w.format!==Cr?Be!==null?rt?q&&t.compressedTexSubImage2D(s.TEXTURE_2D,Se,0,0,Pe.width,Pe.height,Be,Pe.data):t.compressedTexImage2D(s.TEXTURE_2D,Se,Ue,Pe.width,Pe.height,0,Pe.data):Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?q&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Pe.width,Pe.height,Be,Ze,Pe.data):t.texImage2D(s.TEXTURE_2D,Se,Ue,Pe.width,Pe.height,0,Be,Ze,Pe.data)}else if(w.isDataArrayTexture)if(rt){if(ut&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,Ue,Ee.width,Ee.height,Ee.depth),q)if(w.layerUpdates.size>0){const Se=q0(Ee.width,Ee.height,w.format,w.type);for(const ye of w.layerUpdates){const Me=Ee.data.subarray(ye*Se/Ee.data.BYTES_PER_ELEMENT,(ye+1)*Se/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ye,Ee.width,Ee.height,1,Be,Ze,Me)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Be,Ze,Ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ue,Ee.width,Ee.height,Ee.depth,0,Be,Ze,Ee.data);else if(w.isData3DTexture)rt?(ut&&t.texStorage3D(s.TEXTURE_3D,Te,Ue,Ee.width,Ee.height,Ee.depth),q&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Be,Ze,Ee.data)):t.texImage3D(s.TEXTURE_3D,0,Ue,Ee.width,Ee.height,Ee.depth,0,Be,Ze,Ee.data);else if(w.isFramebufferTexture){if(ut)if(rt)t.texStorage2D(s.TEXTURE_2D,Te,Ue,Ee.width,Ee.height);else{let Se=Ee.width,ye=Ee.height;for(let Me=0;Me<Te;Me++)t.texImage2D(s.TEXTURE_2D,Me,Ue,Se,ye,0,Be,Ze,null),Se>>=1,ye>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in s){const Se=s.canvas;if(Se.hasAttribute("layoutsubtree")||Se.setAttribute("layoutsubtree","true"),Ee.parentNode!==Se){Se.appendChild(Ee),S.add(w),Se.onpaint=ye=>{const Me=ye.changedElements;for(const Y of S)Me.includes(Y.image)&&(Y.needsUpdate=!0)},Se.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,Ee);else{const Me=s.RGBA,Y=s.RGBA,Oe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Me,Y,Oe,Ee)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(et.length>0){if(rt&&ut){const Se=Pt(et[0]);t.texStorage2D(s.TEXTURE_2D,Te,Ue,Se.width,Se.height)}for(let Se=0,ye=et.length;Se<ye;Se++)Pe=et[Se],rt?q&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Be,Ze,Pe):t.texImage2D(s.TEXTURE_2D,Se,Ue,Be,Ze,Pe);w.generateMipmaps=!1}else if(rt){if(ut){const Se=Pt(Ee);t.texStorage2D(s.TEXTURE_2D,Te,Ue,Se.width,Se.height)}q&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Be,Ze,Ee)}else t.texImage2D(s.TEXTURE_2D,0,Ue,Be,Ze,Ee);v(w)&&T(se),Ie.__version=Ce.version,w.onUpdate&&w.onUpdate(w)}B.__version=w.version}function Qe(B,w,J){if(w.image.length!==6)return;const se=$e(B,w),ge=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+J);const Ce=r.get(ge);if(ge.version!==Ce.__version||se===!0){t.activeTexture(s.TEXTURE0+J);const Ie=Yt.getPrimaries(Yt.workingColorSpace),xe=w.colorSpace===Ks?null:Yt.getPrimaries(w.colorSpace),Ee=w.colorSpace===Ks||Ie===xe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Be=w.isCompressedTexture||w.image[0].isCompressedTexture,Ze=w.image[0]&&w.image[0].isDataTexture,Ue=[];for(let Y=0;Y<6;Y++)!Be&&!Ze?Ue[Y]=x(w.image[Y],!0,o.maxCubemapSize):Ue[Y]=Ze?w.image[Y].image:w.image[Y],Ue[Y]=tn(w,Ue[Y]);const Pe=Ue[0],et=l.convert(w.format,w.colorSpace),rt=l.convert(w.type),ut=A(w.internalFormat,et,rt,w.normalized,w.colorSpace),q=w.isVideoTexture!==!0,Te=Ce.__version===void 0||se===!0,Se=ge.dataReady;let ye=L(w,Pe);je(s.TEXTURE_CUBE_MAP,w);let Me;if(Be){q&&Te&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ye,ut,Pe.width,Pe.height);for(let Y=0;Y<6;Y++){Me=Ue[Y].mipmaps;for(let Oe=0;Oe<Me.length;Oe++){const Fe=Me[Oe];w.format!==Cr?et!==null?q?Se&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Oe,0,0,Fe.width,Fe.height,et,Fe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Oe,ut,Fe.width,Fe.height,0,Fe.data):Mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Oe,0,0,Fe.width,Fe.height,et,rt,Fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Oe,ut,Fe.width,Fe.height,0,et,rt,Fe.data)}}}else{if(Me=w.mipmaps,q&&Te){Me.length>0&&ye++;const Y=Pt(Ue[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ye,ut,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Ze){q?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ue[Y].width,Ue[Y].height,et,rt,Ue[Y].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ut,Ue[Y].width,Ue[Y].height,0,et,rt,Ue[Y].data);for(let Oe=0;Oe<Me.length;Oe++){const Et=Me[Oe].image[Y].image;q?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Oe+1,0,0,Et.width,Et.height,et,rt,Et.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Oe+1,ut,Et.width,Et.height,0,et,rt,Et.data)}}else{q?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,et,rt,Ue[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ut,et,rt,Ue[Y]);for(let Oe=0;Oe<Me.length;Oe++){const Fe=Me[Oe];q?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Oe+1,0,0,et,rt,Fe.image[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Oe+1,ut,et,rt,Fe.image[Y])}}}v(w)&&T(s.TEXTURE_CUBE_MAP),Ce.__version=ge.version,w.onUpdate&&w.onUpdate(w)}B.__version=w.version}function ze(B,w,J,se,ge,Ce){const Ie=l.convert(J.format,J.colorSpace),xe=l.convert(J.type),Ee=A(J.internalFormat,Ie,xe,J.normalized,J.colorSpace),Be=r.get(w),Ze=r.get(J);if(Ze.__renderTarget=w,!Be.__hasExternalTextures){const Ue=Math.max(1,w.width>>Ce),Pe=Math.max(1,w.height>>Ce);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,Ce,Ee,Ue,Pe,w.depth,0,Ie,xe,null):t.texImage2D(ge,Ce,Ee,Ue,Pe,0,Ie,xe,null)}t.bindFramebuffer(s.FRAMEBUFFER,B),Bt(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,ge,Ze.__webglTexture,0,Ft(w)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,se,ge,Ze.__webglTexture,Ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(B,w,J){if(s.bindRenderbuffer(s.RENDERBUFFER,B),w.depthBuffer){const se=w.depthTexture,ge=se&&se.isDepthTexture?se.type:null,Ce=D(w.stencilBuffer,ge),Ie=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Bt(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ft(w),Ce,w.width,w.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft(w),Ce,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Ce,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ie,s.RENDERBUFFER,B)}else{const se=w.textures;for(let ge=0;ge<se.length;ge++){const Ce=se[ge],Ie=l.convert(Ce.format,Ce.colorSpace),xe=l.convert(Ce.type),Ee=A(Ce.internalFormat,Ie,xe,Ce.normalized,Ce.colorSpace);Bt(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ft(w),Ee,w.width,w.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ft(w),Ee,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Ee,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function en(B,w,J){const se=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,B),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=r.get(w.depthTexture);if(ge.__renderTarget=w,(!ge.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),se){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,w.depthTexture.addEventListener("dispose",k)),ge.__webglTexture===void 0){ge.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),je(s.TEXTURE_CUBE_MAP,w.depthTexture);const Be=l.convert(w.depthTexture.format),Ze=l.convert(w.depthTexture.type);let Ue;w.depthTexture.format===ys?Ue=s.DEPTH_COMPONENT24:w.depthTexture.format===Ta&&(Ue=s.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ue,w.width,w.height,0,Be,Ze,null)}}else te(w.depthTexture,0);const Ce=ge.__webglTexture,Ie=Ft(w),xe=se?s.TEXTURE_CUBE_MAP_POSITIVE_X+J:s.TEXTURE_2D,Ee=w.depthTexture.format===Ta?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===ys)Bt(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,xe,Ce,0,Ie):s.framebufferTexture2D(s.FRAMEBUFFER,Ee,xe,Ce,0);else if(w.depthTexture.format===Ta)Bt(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ee,xe,Ce,0,Ie):s.framebufferTexture2D(s.FRAMEBUFFER,Ee,xe,Ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ht(B){const w=r.get(B),J=B.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==B.depthTexture){const se=B.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),se){const ge=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,se.removeEventListener("dispose",ge)};se.addEventListener("dispose",ge),w.__depthDisposeCallback=ge}w.__boundDepthTexture=se}if(B.depthTexture&&!w.__autoAllocateDepthBuffer)if(J)for(let se=0;se<6;se++)en(w.__webglFramebuffer[se],B,se);else{const se=B.texture.mipmaps;se&&se.length>0?en(w.__webglFramebuffer[0],B,0):en(w.__webglFramebuffer,B,0)}else if(J){w.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[se]),w.__webglDepthbuffer[se]===void 0)w.__webglDepthbuffer[se]=s.createRenderbuffer(),dt(w.__webglDepthbuffer[se],B,!1);else{const ge=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=w.__webglDepthbuffer[se];s.bindRenderbuffer(s.RENDERBUFFER,Ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Ce)}}else{const se=B.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),dt(w.__webglDepthbuffer,B,!1);else{const ge=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Ce)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function bt(B,w,J){const se=r.get(B);w!==void 0&&ze(se.__webglFramebuffer,B,B.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&ht(B)}function It(B){const w=B.texture,J=r.get(B),se=r.get(w);B.addEventListener("dispose",b);const ge=B.textures,Ce=B.isWebGLCubeRenderTarget===!0,Ie=ge.length>1;if(Ie||(se.__webglTexture===void 0&&(se.__webglTexture=s.createTexture()),se.__version=w.version,u.memory.textures++),Ce){J.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer[xe]=[];for(let Ee=0;Ee<w.mipmaps.length;Ee++)J.__webglFramebuffer[xe][Ee]=s.createFramebuffer()}else J.__webglFramebuffer[xe]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer=[];for(let xe=0;xe<w.mipmaps.length;xe++)J.__webglFramebuffer[xe]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(Ie)for(let xe=0,Ee=ge.length;xe<Ee;xe++){const Be=r.get(ge[xe]);Be.__webglTexture===void 0&&(Be.__webglTexture=s.createTexture(),u.memory.textures++)}if(B.samples>0&&Bt(B)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let xe=0;xe<ge.length;xe++){const Ee=ge[xe];J.__webglColorRenderbuffer[xe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[xe]);const Be=l.convert(Ee.format,Ee.colorSpace),Ze=l.convert(Ee.type),Ue=A(Ee.internalFormat,Be,Ze,Ee.normalized,Ee.colorSpace,B.isXRRenderTarget===!0),Pe=Ft(B);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,Ue,B.width,B.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xe,s.RENDERBUFFER,J.__webglColorRenderbuffer[xe])}s.bindRenderbuffer(s.RENDERBUFFER,null),B.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),dt(J.__webglDepthRenderbuffer,B,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ce){t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture),je(s.TEXTURE_CUBE_MAP,w);for(let xe=0;xe<6;xe++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ee=0;Ee<w.mipmaps.length;Ee++)ze(J.__webglFramebuffer[xe][Ee],B,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Ee);else ze(J.__webglFramebuffer[xe],B,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);v(w)&&T(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let xe=0,Ee=ge.length;xe<Ee;xe++){const Be=ge[xe],Ze=r.get(Be);let Ue=s.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Ue=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ue,Ze.__webglTexture),je(Ue,Be),ze(J.__webglFramebuffer,B,Be,s.COLOR_ATTACHMENT0+xe,Ue,0),v(Be)&&T(Ue)}t.unbindTexture()}else{let xe=s.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(xe=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(xe,se.__webglTexture),je(xe,w),w.mipmaps&&w.mipmaps.length>0)for(let Ee=0;Ee<w.mipmaps.length;Ee++)ze(J.__webglFramebuffer[Ee],B,w,s.COLOR_ATTACHMENT0,xe,Ee);else ze(J.__webglFramebuffer,B,w,s.COLOR_ATTACHMENT0,xe,0);v(w)&&T(xe),t.unbindTexture()}B.depthBuffer&&ht(B)}function vt(B){const w=B.textures;for(let J=0,se=w.length;J<se;J++){const ge=w[J];if(v(ge)){const Ce=F(B),Ie=r.get(ge).__webglTexture;t.bindTexture(Ce,Ie),T(Ce),t.unbindTexture()}}}const Ct=[],Ot=[];function Zt(B){if(B.samples>0){if(Bt(B)===!1){const w=B.textures,J=B.width,se=B.height;let ge=s.COLOR_BUFFER_BIT;const Ce=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ie=r.get(B),xe=w.length>1;if(xe)for(let Be=0;Be<w.length;Be++)t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const Ee=B.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Be=0;Be<w.length;Be++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),xe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[Be]);const Ze=r.get(w[Be]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ze,0)}s.blitFramebuffer(0,0,J,se,0,0,J,se,ge,s.NEAREST),m===!0&&(Ct.length=0,Ot.length=0,Ct.push(s.COLOR_ATTACHMENT0+Be),B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&(Ct.push(Ce),Ot.push(Ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ot)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ct))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),xe)for(let Be=0;Be<w.length;Be++){t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,Ie.__webglColorRenderbuffer[Be]);const Ze=r.get(w[Be]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ie.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,Ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.storeMultisampledDepthBuffer===!1&&m){const w=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function Ft(B){return Math.min(o.maxSamples,B.samples)}function Bt(B){const w=r.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function $(B){const w=u.render.frame;y.get(B)!==w&&(y.set(B,w),B.update())}function tn(B,w){const J=B.colorSpace,se=B.format,ge=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||J!==yu&&J!==Ks&&(Yt.getTransfer(J)===dn?(se!==Cr||ge!==Qi)&&Mt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):on("WebGLTextures: Unsupported texture color space:",J)),w}function Pt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(p.width=B.naturalWidth||B.width,p.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(p.width=B.displayWidth,p.height=B.displayHeight):(p.width=B.width,p.height=B.height),p}this.allocateTextureUnit=fe,this.resetTextureUnits=ne,this.getTextureUnits=H,this.setTextureUnits=re,this.setTexture2D=te,this.setTexture2DArray=K,this.setTexture3D=Z,this.setTextureCube=U,this.rebindTextures=bt,this.setupRenderTarget=It,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=Bt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function UE(s,e){function t(r,o=Ks){let l;const u=Yt.getTransfer(o);if(r===Qi)return s.UNSIGNED_BYTE;if(r===kh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Bh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Ig)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Dg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Lg)return s.BYTE;if(r===Ng)return s.SHORT;if(r===El)return s.UNSIGNED_SHORT;if(r===Fh)return s.INT;if(r===Xr)return s.UNSIGNED_INT;if(r===Gr)return s.FLOAT;if(r===qr)return s.HALF_FLOAT;if(r===Ug)return s.ALPHA;if(r===Og)return s.RGB;if(r===Cr)return s.RGBA;if(r===ys)return s.DEPTH_COMPONENT;if(r===Ta)return s.DEPTH_STENCIL;if(r===Fg)return s.RED;if(r===zh)return s.RED_INTEGER;if(r===La)return s.RG;if(r===Vh)return s.RG_INTEGER;if(r===Gh)return s.RGBA_INTEGER;if(r===fu||r===hu||r===pu||r===mu)if(u===dn)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===fu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===hu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===pu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===mu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===fu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===hu)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===pu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===mu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Qf||r===eh||r===th||r===nh)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Qf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===eh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===th)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===nh)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ih||r===rh||r===sh||r===ah||r===oh||r===_u||r===lh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===ih||r===rh)return u===dn?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===sh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===ah)return l.COMPRESSED_R11_EAC;if(r===oh)return l.COMPRESSED_SIGNED_R11_EAC;if(r===_u)return l.COMPRESSED_RG11_EAC;if(r===lh)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ch||r===uh||r===dh||r===fh||r===hh||r===ph||r===mh||r===gh||r===vh||r===_h||r===xh||r===yh||r===Sh||r===Mh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===ch)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===uh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===dh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===fh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ph)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===mh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===gh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===vh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===_h)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===xh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===yh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Sh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Mh)return u===dn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Eh||r===wh||r===bh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Eh)return u===dn?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===wh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===bh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Th||r===Ah||r===xu||r===Rh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Th)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Ah)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xu)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Rh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===wl?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const OE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FE=`
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

}`;class kE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new jg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new jr({vertexShader:OE,fragmentShader:FE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ve(new Na(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BE extends Ia{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",m=1,p=null,y=null,S=null,_=null,M=null,E=null;const R=typeof XRWebGLBinding<"u",x=new kE,v={},T=t.getContextAttributes();let F=null,A=null;const D=[],L=[],k=new Gt;let b=null,I=null;const z=new Ji;z.viewport=new Ln;const G=new Ji;G.viewport=new Ln;const W=[z,G],ne=new jx;let H=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let he=D[ce];return he===void 0&&(he=new Sf,D[ce]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ce){let he=D[ce];return he===void 0&&(he=new Sf,D[ce]=he),he.getGripSpace()},this.getHand=function(ce){let he=D[ce];return he===void 0&&(he=new Sf,D[ce]=he),he.getHandSpace()};function fe(ce){const he=L.indexOf(ce.inputSource);if(he===-1)return;const Ne=D[he];Ne!==void 0&&(Ne.update(ce.inputSource,ce.frame,p||u),Ne.dispatchEvent({type:ce.type,data:ce.inputSource}))}function ee(){o.removeEventListener("select",fe),o.removeEventListener("selectstart",fe),o.removeEventListener("selectend",fe),o.removeEventListener("squeeze",fe),o.removeEventListener("squeezestart",fe),o.removeEventListener("squeezeend",fe),o.removeEventListener("end",ee),o.removeEventListener("inputsourceschange",te);for(let ce=0;ce<D.length;ce++){const he=L[ce];he!==null&&(L[ce]=null,D[ce].disconnect(he))}H=null,re=null,x.reset();for(const ce in v)delete v[ce];if(e.setRenderTarget(F),M=null,_=null,S=null,o=null,A=null,$e.stop(),r.isPresenting=!1,e.setPixelRatio(b),e.setSize(k.width,k.height,!1),I!==null){const ce=I.camera;ce.fov=I.fov,ce.zoom=I.zoom,ce.updateProjectionMatrix(),I=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){l=ce,r.isPresenting===!0&&Mt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){f=ce,r.isPresenting===!0&&Mt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ce){p=ce},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return S===null&&R&&(S=new XRWebGLBinding(o,t)),S},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(ce){if(o=ce,o!==null){if(F=e.getRenderTarget(),o.addEventListener("select",fe),o.addEventListener("selectstart",fe),o.addEventListener("selectend",fe),o.addEventListener("squeeze",fe),o.addEventListener("squeezestart",fe),o.addEventListener("squeezeend",fe),o.addEventListener("end",ee),o.addEventListener("inputsourceschange",te),T.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(k),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ne=null,Qe=null,ze=null;T.depth&&(ze=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ne=T.stencil?Ta:ys,Qe=T.stencil?wl:Xr);const dt={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:l};S=this.getBinding(),_=S.createProjectionLayer(dt),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),A=new Pr(_.textureWidth,_.textureHeight,{format:Cr,type:Qi,depthTexture:new Tl(_.textureWidth,_.textureHeight,Qe,void 0,void 0,void 0,void 0,void 0,void 0,Ne),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const Ne={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,Ne),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),A=new Pr(M.framebufferWidth,M.framebufferHeight,{format:Cr,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(f),$e.setContext(o),$e.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function te(ce){for(let he=0;he<ce.removed.length;he++){const Ne=ce.removed[he],Qe=L.indexOf(Ne);Qe>=0&&(L[Qe]=null,D[Qe].disconnect(Ne))}for(let he=0;he<ce.added.length;he++){const Ne=ce.added[he];let Qe=L.indexOf(Ne);if(Qe===-1){for(let dt=0;dt<D.length;dt++)if(dt>=L.length){L.push(Ne),Qe=dt;break}else if(L[dt]===null){L[dt]=Ne,Qe=dt;break}if(Qe===-1)break}const ze=D[Qe];ze&&ze.connect(Ne)}}const K=new ie,Z=new ie;function U(ce,he,Ne){K.setFromMatrixPosition(he.matrixWorld),Z.setFromMatrixPosition(Ne.matrixWorld);const Qe=K.distanceTo(Z),ze=he.projectionMatrix.elements,dt=Ne.projectionMatrix.elements,en=ze[14]/(ze[10]-1),ht=ze[14]/(ze[10]+1),bt=(ze[9]+1)/ze[5],It=(ze[9]-1)/ze[5],vt=(ze[8]-1)/ze[0],Ct=(dt[8]+1)/dt[0],Ot=en*vt,Zt=en*Ct,Ft=Qe/(-vt+Ct),Bt=Ft*-vt;if(he.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(Bt),ce.translateZ(Ft),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),ze[10]===-1)ce.projectionMatrix.copy(he.projectionMatrix),ce.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const $=en+Ft,tn=ht+Ft,Pt=Ot-Bt,B=Zt+(Qe-Bt),w=bt*ht/tn*$,J=It*ht/tn*$;ce.projectionMatrix.makePerspective(Pt,B,w,J,$,tn),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function de(ce,he){he===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(he.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(o===null)return;let he=ce.near,Ne=ce.far;x.texture!==null&&(x.depthNear>0&&(he=x.depthNear),x.depthFar>0&&(Ne=x.depthFar)),ne.near=G.near=z.near=he,ne.far=G.far=z.far=Ne,(H!==ne.near||re!==ne.far)&&(o.updateRenderState({depthNear:ne.near,depthFar:ne.far}),H=ne.near,re=ne.far),ne.layers.mask=ce.layers.mask|6,z.layers.mask=ne.layers.mask&-5,G.layers.mask=ne.layers.mask&-3;const Qe=ce.parent,ze=ne.cameras;de(ne,Qe);for(let dt=0;dt<ze.length;dt++)de(ze[dt],Qe);ze.length===2?U(ne,z,G):ne.projectionMatrix.copy(z.projectionMatrix),I===null&&ce.isPerspectiveCamera&&(I={camera:ce,fov:ce.fov,zoom:ce.zoom}),be(ce,ne,Qe)};function be(ce,he,Ne){Ne===null?ce.matrix.copy(he.matrixWorld):(ce.matrix.copy(Ne.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(he.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(he.projectionMatrix),ce.projectionMatrixInverse.copy(he.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=Ph*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(_===null&&M===null))return m},this.setFoveation=function(ce){m=ce,_!==null&&(_.fixedFoveation=ce),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ce)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(ne)},this.getCameraTexture=function(ce){return v[ce]};let qe=null;function je(ce,he){if(y=he.getViewerPose(p||u),E=he,y!==null){const Ne=y.views;M!==null&&(e.setRenderTargetFramebuffer(A,M.framebuffer),e.setRenderTarget(A));let Qe=!1;Ne.length!==ne.cameras.length&&(ne.cameras.length=0,Qe=!0);for(let ht=0;ht<Ne.length;ht++){const bt=Ne[ht];let It=null;if(M!==null)It=M.getViewport(bt);else{const Ct=S.getViewSubImage(_,bt);It=Ct.viewport,ht===0&&(e.setRenderTargetTextures(A,Ct.colorTexture,Ct.depthStencilTexture),e.setRenderTarget(A))}let vt=W[ht];vt===void 0&&(vt=new Ji,vt.layers.enable(ht),vt.viewport=new Ln,W[ht]=vt),vt.matrix.fromArray(bt.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(bt.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(It.x,It.y,It.width,It.height),ht===0&&(ne.matrix.copy(vt.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),Qe===!0&&ne.cameras.push(vt)}const ze=o.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){S=r.getBinding();const ht=S.getDepthInformation(Ne[0]);ht&&ht.isValid&&ht.texture&&x.init(ht,o.renderState)}if(ze&&ze.includes("camera-access")&&R){e.state.unbindTexture(),S=r.getBinding();for(let ht=0;ht<Ne.length;ht++){const bt=Ne[ht].camera;if(bt){let It=v[bt];It||(It=new jg,v[bt]=It);const vt=S.getCameraImage(bt);It.sourceTexture=vt}}}}for(let Ne=0;Ne<D.length;Ne++){const Qe=L[Ne],ze=D[Ne];Qe!==null&&ze!==void 0&&ze.update(Qe,he,p||u)}qe&&qe(ce,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),E=null}const $e=new Zg;$e.setAnimationLoop(je),this.setAnimationLoop=function(ce){qe=ce},this.dispose=function(){}}}const zE=new Tn,rv=new Rt;rv.set(-1,0,0,0,1,0,0,0,1);function VE(s,e){function t(x,v){x.matrixAutoUpdate===!0&&x.updateMatrix(),v.value.copy(x.matrix)}function r(x,v){v.color.getRGB(x.fogColor.value,$g(s)),v.isFog?(x.fogNear.value=v.near,x.fogFar.value=v.far):v.isFogExp2&&(x.fogDensity.value=v.density)}function o(x,v,T,F,A){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?l(x,v):v.isMeshLambertMaterial?(l(x,v),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(l(x,v),S(x,v)):v.isMeshPhongMaterial?(l(x,v),y(x,v),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(l(x,v),_(x,v),v.isMeshPhysicalMaterial&&M(x,v,A)):v.isMeshMatcapMaterial?(l(x,v),E(x,v)):v.isMeshDepthMaterial?l(x,v):v.isMeshDistanceMaterial?(l(x,v),R(x,v)):v.isMeshNormalMaterial?l(x,v):v.isLineBasicMaterial?(u(x,v),v.isLineDashedMaterial&&f(x,v)):v.isPointsMaterial?m(x,v,T,F):v.isSpriteMaterial?p(x,v):v.isShadowMaterial?(x.color.value.copy(v.color),x.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(x,v){x.opacity.value=v.opacity,v.color&&x.diffuse.value.copy(v.color),v.emissive&&x.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.bumpMap&&(x.bumpMap.value=v.bumpMap,t(v.bumpMap,x.bumpMapTransform),x.bumpScale.value=v.bumpScale,v.side===Vi&&(x.bumpScale.value*=-1)),v.normalMap&&(x.normalMap.value=v.normalMap,t(v.normalMap,x.normalMapTransform),x.normalScale.value.copy(v.normalScale),v.side===Vi&&x.normalScale.value.negate()),v.displacementMap&&(x.displacementMap.value=v.displacementMap,t(v.displacementMap,x.displacementMapTransform),x.displacementScale.value=v.displacementScale,x.displacementBias.value=v.displacementBias),v.emissiveMap&&(x.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,x.emissiveMapTransform)),v.specularMap&&(x.specularMap.value=v.specularMap,t(v.specularMap,x.specularMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest);const T=e.get(v),F=T.envMap,A=T.envMapRotation;F&&(x.envMap.value=F,x.envMapRotation.value.setFromMatrix4(zE.makeRotationFromEuler(A)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(rv),x.reflectivity.value=v.reflectivity,x.ior.value=v.ior,x.refractionRatio.value=v.refractionRatio),v.lightMap&&(x.lightMap.value=v.lightMap,x.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,x.lightMapTransform)),v.aoMap&&(x.aoMap.value=v.aoMap,x.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,x.aoMapTransform))}function u(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform))}function f(x,v){x.dashSize.value=v.dashSize,x.totalSize.value=v.dashSize+v.gapSize,x.scale.value=v.scale}function m(x,v,T,F){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.size.value=v.size*T,x.scale.value=F*.5,v.map&&(x.map.value=v.map,t(v.map,x.uvTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function p(x,v){x.diffuse.value.copy(v.color),x.opacity.value=v.opacity,x.rotation.value=v.rotation,v.map&&(x.map.value=v.map,t(v.map,x.mapTransform)),v.alphaMap&&(x.alphaMap.value=v.alphaMap,t(v.alphaMap,x.alphaMapTransform)),v.alphaTest>0&&(x.alphaTest.value=v.alphaTest)}function y(x,v){x.specular.value.copy(v.specular),x.shininess.value=Math.max(v.shininess,1e-4)}function S(x,v){v.gradientMap&&(x.gradientMap.value=v.gradientMap)}function _(x,v){x.metalness.value=v.metalness,v.metalnessMap&&(x.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,x.metalnessMapTransform)),x.roughness.value=v.roughness,v.roughnessMap&&(x.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,x.roughnessMapTransform)),v.envMap&&(x.envMapIntensity.value=v.envMapIntensity)}function M(x,v,T){x.ior.value=v.ior,v.sheen>0&&(x.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),x.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(x.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,x.sheenColorMapTransform)),v.sheenRoughnessMap&&(x.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,x.sheenRoughnessMapTransform))),v.clearcoat>0&&(x.clearcoat.value=v.clearcoat,x.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(x.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,x.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(x.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Vi&&x.clearcoatNormalScale.value.negate())),v.dispersion>0&&(x.dispersion.value=v.dispersion),v.retroreflectivity>0&&(x.retroreflectivity.value=v.retroreflectivity),v.iridescence>0&&(x.iridescence.value=v.iridescence,x.iridescenceIOR.value=v.iridescenceIOR,x.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(x.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,x.iridescenceMapTransform)),v.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),v.transmission>0&&(x.transmission.value=v.transmission,x.transmissionSamplerMap.value=T.texture,x.transmissionSamplerSize.value.set(T.width,T.height),v.transmissionMap&&(x.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,x.transmissionMapTransform)),x.thickness.value=v.thickness,v.thicknessMap&&(x.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=v.attenuationDistance,x.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(x.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(x.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=v.specularIntensity,x.specularColor.value.copy(v.specularColor),v.specularColorMap&&(x.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,x.specularColorMapTransform)),v.specularIntensityMap&&(x.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,v){v.matcap&&(x.matcap.value=v.matcap)}function R(x,v){const T=e.get(v).light;x.referencePosition.value.setFromMatrixPosition(T.matrixWorld),x.nearDistance.value=T.shadow.camera.near,x.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function GE(s,e,t,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(A,D){const L=D.program;r.uniformBlockBinding(A,L)}function p(A,D){let L=o[A.id];L===void 0&&(x(A),L=y(A),o[A.id]=L,A.addEventListener("dispose",T));const k=D.program;r.updateUBOMapping(A,k);const b=e.render.frame;l[A.id]!==b&&(_(A),l[A.id]=b)}function y(A){const D=S();A.__bindingPointIndex=D;const L=s.createBuffer(),k=A.__size,b=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,k,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,L),L}function S(){for(let A=0;A<f;A++)if(u.indexOf(A)===-1)return u.push(A),A;return on("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(A){const D=o[A.id],L=A.uniforms,k=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let b=0,I=L.length;b<I;b++){const z=L[b];if(Array.isArray(z))for(let G=0,W=z.length;G<W;G++)M(z[G],b,G,k);else M(z,b,0,k)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(A,D,L,k){if(R(A,D,L,k)===!0){const b=A.__offset,I=A.value;if(Array.isArray(I)){let z=0;for(let G=0;G<I.length;G++){const W=I[G],ne=v(W);E(W,A.__data,z),typeof W!="number"&&typeof W!="boolean"&&!W.isMatrix3&&!ArrayBuffer.isView(W)&&(z+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(I,A.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,b,A.__data)}}function E(A,D,L){typeof A=="number"||typeof A=="boolean"?D[0]=A:A.isMatrix3?(D[0]=A.elements[0],D[1]=A.elements[1],D[2]=A.elements[2],D[3]=0,D[4]=A.elements[3],D[5]=A.elements[4],D[6]=A.elements[5],D[7]=0,D[8]=A.elements[6],D[9]=A.elements[7],D[10]=A.elements[8],D[11]=0):ArrayBuffer.isView(A)?D.set(new A.constructor(A.buffer,A.byteOffset,D.length)):A.toArray(D,L)}function R(A,D,L,k){const b=A.value,I=D+"_"+L;if(k[I]===void 0)return typeof b=="number"||typeof b=="boolean"?k[I]=b:ArrayBuffer.isView(b)?k[I]=b.slice():k[I]=b.clone(),!0;{const z=k[I];if(typeof b=="number"||typeof b=="boolean"){if(z!==b)return k[I]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(z.equals(b)===!1)return z.copy(b),!0}}return!1}function x(A){const D=A.uniforms;let L=0;const k=16;for(let I=0,z=D.length;I<z;I++){const G=Array.isArray(D[I])?D[I]:[D[I]];for(let W=0,ne=G.length;W<ne;W++){const H=G[W],re=Array.isArray(H.value)?H.value:[H.value];for(let fe=0,ee=re.length;fe<ee;fe++){const te=re[fe],K=v(te),Z=L%k,U=Z%K.boundary,de=Z+U;L+=U,de!==0&&k-de<K.storage&&(L+=k-de),H.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=L,L+=K.storage}}}const b=L%k;return b>0&&(L+=k-b),A.__size=L,A.__cache={},this}function v(A){const D={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(D.boundary=4,D.storage=4):A.isVector2?(D.boundary=8,D.storage=8):A.isVector3||A.isColor?(D.boundary=16,D.storage=12):A.isVector4?(D.boundary=16,D.storage=16):A.isMatrix3?(D.boundary=48,D.storage=48):A.isMatrix4?(D.boundary=64,D.storage=64):A.isTexture?Mt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(A)?(D.boundary=16,D.storage=A.byteLength):Mt("WebGLRenderer: Unsupported uniform value type.",A),D}function T(A){const D=A.target;D.removeEventListener("dispose",T);const L=u.indexOf(D.__bindingPointIndex);u.splice(L,1),s.deleteBuffer(o[D.id]),delete o[D.id],delete l[D.id]}function F(){for(const A in o)s.deleteBuffer(o[A]);u=[],o={},l={}}return{bind:m,update:p,dispose:F}}const HE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zr=null;function WE(){return zr===null&&(zr=new Lx(HE,16,16,La,qr),zr.name="DFG_LUT",zr.minFilter=_i,zr.magFilter=_i,zr.wrapS=vs,zr.wrapT=vs,zr.generateMipmaps=!1,zr.needsUpdate=!0),zr}class XE{constructor(e={}){const{canvas:t=ax(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:_=!1,outputBufferType:M=Qi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const R=M,x=new Set([Gh,Vh,zh]),v=new Set([Qi,Xr,El,wl,kh,Bh]),T=new Uint32Array(4),F=new Int32Array(4),A=new ie;let D=null,L=null;const k=[],b=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let G=!1,W=null,ne=null,H=null,re=null;this._outputColorSpace=fr;let fe=0,ee=0,te=null,K=-1,Z=null;const U=new Ln,de=new Ln;let be=null;const qe=new Xt(0);let je=0,$e=t.width,ce=t.height,he=1,Ne=null,Qe=null;const ze=new Ln(0,0,$e,ce),dt=new Ln(0,0,$e,ce);let en=!1;const ht=new $h;let bt=!1,It=!1;const vt=new Tn,Ct=new ie,Ot=new Ln,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function Bt(){return te===null?he:1}let $=r;function tn(P,X){return t.getContext(P,X)}let Pt,B,w,J,se,ge,Ce,Ie,xe,Ee,Be,Ze,Ue,Pe,et,rt,ut,q,Te,Se,ye,Me,Y;try{const P={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:y,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uh}`),t.addEventListener("webglcontextlost",Et,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",xn,!1),$===null){const X="webgl2";if($=tn(X,P),$===null)throw tn(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(P){throw t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",xn,!1),on("WebGLRenderer: "+P.message),P}function Oe(){Pt=new WM($),Pt.init(),ye=new UE($,Pt),B=new DM($,Pt,e,ye),w=new IE($,Pt),B.reversedDepthBuffer&&_&&w.buffers.depth.setReversed(!0),ne=$.createFramebuffer(),H=$.createFramebuffer(),re=$.createFramebuffer(),J=new jM($),se=new xE,ge=new DE($,Pt,w,se,B,ye,J),Ce=new HM(z),Ie=new Yx($),Me=new NM($,Ie),xe=new XM($,Ie,J,Me),Ee=new YM($,xe,Ie,Me,J),q=new $M($,B,ge),et=new UM(se),Be=new _E(z,Ce,Pt,B,Me,et),Ze=new VE(z,se),Ue=new SE,Pe=new AE(Pt),ut=new LM(z,Ce,w,Ee,E,m),rt=new NE(z,Ee,B),Y=new GE($,J,B,w),Te=new IM($,Pt,J),Se=new qM($,Pt,J),J.programs=Be.programs,z.capabilities=B,z.extensions=Pt,z.properties=se,z.renderLists=Ue,z.shadowMap=rt,z.state=w,z.info=J}R!==Qi&&(I=new ZM(R,t.width,t.height,f,o,l));const Fe=new BE(z,$);this.xr=Fe,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const P=Pt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Pt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(P){P!==void 0&&(he=P,this.setSize($e,ce,!1))},this.getSize=function(P){return P.set($e,ce)},this.setSize=function(P,X,me=!0){if(Fe.isPresenting){Mt("WebGLRenderer: Can't change size while VR device is presenting.");return}$e=P,ce=X,t.width=Math.floor(P*he),t.height=Math.floor(X*he),me===!0&&(t.style.width=P+"px",t.style.height=X+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,P,X)},this.getDrawingBufferSize=function(P){return P.set($e*he,ce*he).floor()},this.setDrawingBufferSize=function(P,X,me){$e=P,ce=X,he=me,t.width=Math.floor(P*me),t.height=Math.floor(X*me),this.setViewport(0,0,P,X)},this.setEffects=function(P){if(R===Qi){on("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let X=0;X<P.length;X++)if(P[X].isOutputPass===!0){Mt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(U)},this.getViewport=function(P){return P.copy(ze)},this.setViewport=function(P,X,me,ae){P.isVector4?ze.set(P.x,P.y,P.z,P.w):ze.set(P,X,me,ae),w.viewport(U.copy(ze).multiplyScalar(he).round())},this.getScissor=function(P){return P.copy(dt)},this.setScissor=function(P,X,me,ae){P.isVector4?dt.set(P.x,P.y,P.z,P.w):dt.set(P,X,me,ae),w.scissor(de.copy(dt).multiplyScalar(he).round())},this.getScissorTest=function(){return en},this.setScissorTest=function(P){w.setScissorTest(en=P)},this.setOpaqueSort=function(P){Ne=P},this.setTransparentSort=function(P){Qe=P},this.getClearColor=function(P){return P.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(P=!0,X=!0,me=!0){let ae=0;if(P){let oe=!1;if(te!==null){const He=te.texture.format;oe=x.has(He)}if(oe){const He=te.texture.type,Ve=v.has(He),Ge=ut.getClearColor(),Je=ut.getClearAlpha(),it=Ge.r,ft=Ge.g,xt=Ge.b;Ve?(T[0]=it,T[1]=ft,T[2]=xt,T[3]=Je,$.clearBufferuiv($.COLOR,0,T)):(F[0]=it,F[1]=ft,F[2]=xt,F[3]=Je,$.clearBufferiv($.COLOR,0,F))}else ae|=$.COLOR_BUFFER_BIT}X&&(ae|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),me&&(ae|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&$.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),W=P},this.dispose=function(){t.removeEventListener("webglcontextlost",Et,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",xn,!1),ut.dispose(),Ue.dispose(),Pe.dispose(),se.dispose(),Ce.dispose(),Ee.dispose(),Me.dispose(),Y.dispose(),Be.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",mn),Fe.removeEventListener("sessionend",Pi),wn.stop()};function Et(P){P.preventDefault(),x0("WebGLRenderer: Context Lost."),G=!0}function ot(){x0("WebGLRenderer: Context Restored."),G=!1;const P=J.autoReset,X=rt.enabled,me=rt.autoUpdate,ae=rt.needsUpdate,oe=rt.type;Oe(),J.autoReset=P,rt.enabled=X,rt.autoUpdate=me,rt.needsUpdate=ae,rt.type=oe}function xn(P){on("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function fn(P){const X=P.target;X.removeEventListener("dispose",fn),An(X)}function An(P){yi(P),se.remove(P)}function yi(P){const X=se.get(P).programs;X!==void 0&&(X.forEach(function(me){Be.releaseProgram(me)}),P.isShaderMaterial&&Be.releaseShaderCache(P))}this.renderBufferDirect=function(P,X,me,ae,oe,He){X===null&&(X=Zt);const Ve=oe.isMesh&&oe.matrixWorld.determinantAffine()<0,Ge=kt(P,X,me,ae,oe);w.setMaterial(ae,Ve);let Je=me.index,it=1;if(ae.wireframe===!0){if(Je=xe.getWireframeAttribute(me),Je===void 0)return;it=2}const ft=me.drawRange,xt=me.attributes.position;let Xe=ft.start*it,Dt=(ft.start+ft.count)*it;He!==null&&(Xe=Math.max(Xe,He.start*it),Dt=Math.min(Dt,(He.start+He.count)*it)),Je!==null?(Xe=Math.max(Xe,0),Dt=Math.min(Dt,Je.count)):xt!=null&&(Xe=Math.max(Xe,0),Dt=Math.min(Dt,xt.count));const hn=Dt-Xe;if(hn<0||hn===1/0)return;Me.setup(oe,ae,Ge,me,Je);let sn,qt=Te;if(Je!==null&&(sn=Ie.get(Je),qt=Se,qt.setIndex(sn)),oe.isMesh)ae.wireframe===!0?(w.setLineWidth(ae.wireframeLinewidth*Bt()),qt.setMode($.LINES)):qt.setMode($.TRIANGLES);else if(oe.isLine){let yn=ae.linewidth;yn===void 0&&(yn=1),w.setLineWidth(yn*Bt()),oe.isLineSegments?qt.setMode($.LINES):oe.isLineLoop?qt.setMode($.LINE_LOOP):qt.setMode($.LINE_STRIP)}else oe.isPoints?qt.setMode($.POINTS):oe.isSprite&&qt.setMode($.TRIANGLES);if(oe.isBatchedMesh)if(Pt.get("WEBGL_multi_draw"))qt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const yn=oe._multiDrawStarts,Ye=oe._multiDrawCounts,ln=oe._multiDrawCount,Lt=Je?Ie.get(Je).bytesPerElement:1,Dn=se.get(ae).currentProgram.getUniforms();for(let yt=0;yt<ln;yt++)Dn.setValue($,"_gl_DrawID",yt),qt.render(yn[yt]/Lt,Ye[yt])}else if(oe.isInstancedMesh)qt.renderInstances(Xe,hn,oe.count);else if(me.isInstancedBufferGeometry){const yn=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,Ye=Math.min(me.instanceCount,yn);qt.renderInstances(Xe,hn,Ye)}else qt.render(Xe,hn)};function Ci(P,X,me,ae){W!==null&&P.isNodeMaterial&&W.setObject(ae,P),bt===!0&&et.setState(P,me,!1),P.transparent===!0&&P.side===zi&&P.forceSinglePass===!1?(P.side=Vi,P.needsUpdate=!0,Yn(P,X,ae),P.side=Ra,P.needsUpdate=!0,Yn(P,X,ae),P.side=zi):Yn(P,X,ae)}this.compile=function(P,X,me=null){me===null&&(me=P),W!==null&&W.renderStart(P,X,me),L=Pe.get(me),L.init(X),b.push(L),me.traverseVisible(function(oe){oe.isLight&&oe.layers.test(X.layers)&&(L.pushLight(oe),oe.castShadow&&L.pushShadow(oe))}),P!==me&&P.traverseVisible(function(oe){oe.isLight&&oe.layers.test(X.layers)&&(L.pushLight(oe),oe.castShadow&&L.pushShadow(oe))}),L.setupLights(),W!==null&&W.updateLights(L.state.lightsArray),It=this.localClippingEnabled,bt=et.init(this.clippingPlanes,It),bt===!0&&et.setGlobalState(this.clippingPlanes,X),W!==null&&rt.render(L.state.shadowsArray,me,X);const ae=new Set;return P.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const He=oe.material;if(He)if(Array.isArray(He))for(let Ve=0;Ve<He.length;Ve++){const Ge=He[Ve];Ci(Ge,me,X,oe),ae.add(Ge)}else Ci(He,me,X,oe),ae.add(He)}),L=b.pop(),W!==null&&W.renderEnd(),ae},this.compileAsync=function(P,X,me=null){const ae=this.compile(P,X,me);return new Promise(oe=>{function He(){if(ae.forEach(function(Ve){const Je=se.get(Ve).currentProgram;(Je===void 0||Je.isReady())&&ae.delete(Ve)}),ae.size===0){oe(P);return}setTimeout(He,10)}Pt.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let Rn=null;function ui(P){Rn&&Rn(P)}function mn(){wn.stop()}function Pi(){wn.start()}const wn=new Zg;wn.setAnimationLoop(ui),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(P){Rn=P,Fe.setAnimationLoop(P),P===null?wn.stop():wn.start()},Fe.addEventListener("sessionstart",mn),Fe.addEventListener("sessionend",Pi),this.render=function(P,X){if(X!==void 0&&X.isCamera!==!0){on("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;W!==null&&W.renderStart(P,X);const me=Fe.enabled===!0&&Fe.isPresenting===!0,ae=I!==null&&(te===null||me)&&I.begin(z,te);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(X),X=Fe.getCamera()),P.isScene===!0&&P.onBeforeRender(z,P,X,te),L=Pe.get(P,b.length),L.init(X),L.state.textureUnits=ge.getTextureUnits(),b.push(L),vt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ht.setFromProjectionMatrix(vt,Hr,X.reversedDepth),It=this.localClippingEnabled,bt=et.init(this.clippingPlanes,It),D=Ue.get(P,k.length),D.init(),k.push(D),Fe.enabled===!0&&Fe.isPresenting===!0){const Ve=z.xr.getDepthSensingMesh();Ve!==null&&pt(Ve,X,-1/0,z.sortObjects)}pt(P,X,0,z.sortObjects),D.finish(),W!==null&&W.updateLights(L.state.lightsArray),z.sortObjects===!0&&D.sort(Ne,Qe),Ft=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,Ft&&ut.addToRenderList(D,P),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),bt===!0&&et.beginShadows();const oe=L.state.shadowsArray;if(rt.render(oe,P,X),bt===!0&&et.endShadows(),(ae&&I.hasRenderPass())===!1){const Ve=D.opaque,Ge=D.transmissive;if(L.setupLights(),X.isArrayCamera){const Je=X.cameras;if(Ge.length>0)for(let it=0,ft=Je.length;it<ft;it++){const xt=Je[it];$r(Ve,Ge,P,xt)}Ft&&ut.render(P);for(let it=0,ft=Je.length;it<ft;it++){const xt=Je[it];ri(D,P,xt,xt.viewport)}}else Ge.length>0&&$r(Ve,Ge,P,X),Ft&&ut.render(P),ri(D,P,X)}te!==null&&ee===0&&(ge.updateMultisampleRenderTarget(te),ge.updateRenderTargetMipmap(te)),ae&&I.end(z),P.isScene===!0&&P.onAfterRender(z,P,X),Me.resetDefaultState(),K=-1,Z=null,b.pop(),b.length>0?(L=b[b.length-1],ge.setTextureUnits(L.state.textureUnits),bt===!0&&et.setGlobalState(z.clippingPlanes,L.state.camera)):L=null,k.pop(),k.length>0?D=k[k.length-1]:D=null,W!==null&&W.renderEnd()};function pt(P,X,me,ae){if(P.visible===!1)return;if(P.layers.test(X.layers)){if(P.isGroup)me=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(X);else if(P.isLightProbeGrid)L.pushLightProbeGrid(P);else if(P.isLight)L.pushLight(P),P.castShadow&&L.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||P.intersectsFrustum(ht)){ae&&Ot.setFromMatrixPosition(P.matrixWorld).applyMatrix4(vt);const Ve=Ee.update(P),Ge=P.material;Ge.visible&&D.push(P,Ve,Ge,me,Ot.z,null,X)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||P.intersectsFrustum(ht))){const Ve=Ee.update(P),Ge=P.material;if(ae&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Ot.copy(P.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Ot.copy(Ve.boundingSphere.center)),Ot.applyMatrix4(P.matrixWorld).applyMatrix4(vt)),Array.isArray(Ge)){const Je=Ve.groups;for(let it=0,ft=Je.length;it<ft;it++){const xt=Je[it],Xe=Ge[xt.materialIndex];Xe&&Xe.visible&&D.push(P,Ve,Xe,me,Ot.z,xt,X)}}else Ge.visible&&D.push(P,Ve,Ge,me,Ot.z,null,X)}}const He=P.children;for(let Ve=0,Ge=He.length;Ve<Ge;Ve++)pt(He[Ve],X,me,ae)}function ri(P,X,me,ae){const{opaque:oe,transmissive:He,transparent:Ve}=P;L.setupLightsView(me),bt===!0&&et.setGlobalState(z.clippingPlanes,me),ae&&w.viewport(U.copy(ae)),oe.length>0&&Gi(oe,X,me),He.length>0&&Gi(He,X,me),Ve.length>0&&Gi(Ve,X,me),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function $r(P,X,me,ae){if((me.isScene===!0?me.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ae.id]===void 0){const Xe=Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ae.id]=new Pr(1,1,{generateMipmaps:!0,type:Xe?qr:Qi,minFilter:ba,samples:Math.max(4,B.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}const He=L.state.transmissionRenderTarget[ae.id],Ve=ae.viewport||U;He.setSize(Ve.z*z.transmissionResolutionScale,Ve.w*z.transmissionResolutionScale);const Ge=z.getRenderTarget(),Je=z.getActiveCubeFace(),it=z.getActiveMipmapLevel();z.setRenderTarget(He),z.getClearColor(qe),je=z.getClearAlpha(),je<1&&z.setClearColor(16777215,.5),z.clear(),Ft&&ut.render(me);const ft=z.toneMapping;z.toneMapping=Wr;const xt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),L.setupLightsView(ae),bt===!0&&et.setGlobalState(z.clippingPlanes,ae),Gi(P,me,ae),ge.updateMultisampleRenderTarget(He),ge.updateRenderTargetMipmap(He),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let Dt=0,hn=X.length;Dt<hn;Dt++){const sn=X[Dt],{object:qt,geometry:yn,material:Ye,group:ln}=sn;if(Ye.side===zi&&qt.layers.test(ae.layers)){const Lt=Ye.side;Ye.side=Vi,Ye.needsUpdate=!0,pr(qt,me,ae,yn,Ye,ln),Ye.side=Lt,Ye.needsUpdate=!0,Xe=!0}}Xe===!0&&(ge.updateMultisampleRenderTarget(He),ge.updateRenderTargetMipmap(He))}z.setRenderTarget(Ge,Je,it),z.setClearColor(qe,je),xt!==void 0&&(ae.viewport=xt),z.toneMapping=ft}function Gi(P,X,me){const ae=X.isScene===!0?X.overrideMaterial:null;for(let oe=0,He=P.length;oe<He;oe++){const Ve=P[oe],{object:Ge,geometry:Je,group:it}=Ve;let ft=Ve.material;ft.allowOverride===!0&&ae!==null&&(ft=ae),Ge.layers.test(me.layers)&&pr(Ge,X,me,Je,ft,it)}}function pr(P,X,me,ae,oe,He){W!==null&&oe.isNodeMaterial&&W.setObject(P,oe),P.onBeforeRender(z,X,me,ae,oe,He),P.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),oe.onBeforeRender(z,X,me,ae,P,He),oe.transparent===!0&&oe.side===zi&&oe.forceSinglePass===!1?(oe.side=Vi,oe.needsUpdate=!0,z.renderBufferDirect(me,X,ae,oe,P,He),oe.side=Ra,oe.needsUpdate=!0,z.renderBufferDirect(me,X,ae,oe,P,He),oe.side=zi):z.renderBufferDirect(me,X,ae,oe,P,He),P.onAfterRender(z,X,me,ae,oe,He)}function Yn(P,X,me){X.isScene!==!0&&(X=Zt);const ae=se.get(P),oe=L.state.lights,He=L.state.shadowsArray,Ve=oe.state.version,Ge=Be.getParameters(P,oe.state,He,X,me,L.state.lightProbeGridArray),Je=Be.getProgramCacheKey(Ge);let it=ae.programs;ae.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?X.environment:null,ae.fog=X.fog;const ft=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;ae.envMap=Ce.get(P.envMap||ae.environment,ft),ae.envMapRotation=ae.environment!==null&&P.envMap===null?X.environmentRotation:P.envMapRotation,it===void 0&&(P.addEventListener("dispose",fn),it=new Map,ae.programs=it);let xt=it.get(Je);if(xt!==void 0){if(ae.currentProgram===xt&&ae.lightsStateVersion===Ve)return Yr(P,Ge),xt}else Ge.uniforms=Be.getUniforms(P),W!==null&&P.isNodeMaterial&&W.build(P,me,Ge),P.onBeforeCompile(Ge,z),xt=Be.acquireProgram(Ge,Je),it.set(Je,xt),ae.uniforms=Ge.uniforms;const Xe=ae.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Xe.clippingPlanes=et.uniform),Yr(P,Ge),ae.needsLights=mr(P),ae.lightsStateVersion=Ve,ae.needsLights&&(Xe.ambientLightColor.value=oe.state.ambient,Xe.lightProbe.value=oe.state.probe,Xe.sunLights.value=oe.state.sun,Xe.sunLightShadows.value=oe.state.sunShadow,Xe.directionalLights.value=oe.state.directional,Xe.directionalLightShadows.value=oe.state.directionalShadow,Xe.spotLights.value=oe.state.spot,Xe.spotLightShadows.value=oe.state.spotShadow,Xe.rectAreaLights.value=oe.state.rectArea,Xe.ltc_1.value=oe.state.rectAreaLTC1,Xe.ltc_2.value=oe.state.rectAreaLTC2,Xe.pointLights.value=oe.state.point,Xe.pointLightShadows.value=oe.state.pointShadow,Xe.hemisphereLights.value=oe.state.hemi,Xe.sunShadowMatrix.value=oe.state.sunShadowMatrix,Xe.sunShadowCascade.value=oe.state.sunShadowCascade,Xe.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,Xe.spotLightMatrix.value=oe.state.spotLightMatrix,Xe.spotLightMap.value=oe.state.spotLightMap,Xe.pointShadowMatrix.value=oe.state.pointShadowMatrix),ae.lightProbeGrid=L.state.lightProbeGridArray.length>0,ae.currentProgram=xt,ae.uniformsList=null,xt}function Hn(P){if(P.uniformsList===null){const X=P.currentProgram.getUniforms();P.uniformsList=vu.seqWithValue(X.seq,P.uniforms)}return P.uniformsList}function Yr(P,X){const me=se.get(P);me.outputColorSpace=X.outputColorSpace,me.batching=X.batching,me.batchingColor=X.batchingColor,me.instancing=X.instancing,me.instancingColor=X.instancingColor,me.instancingMorph=X.instancingMorph,me.skinning=X.skinning,me.morphTargets=X.morphTargets,me.morphNormals=X.morphNormals,me.morphColors=X.morphColors,me.morphTargetsCount=X.morphTargetsCount,me.numClippingPlanes=X.numClippingPlanes,me.numIntersection=X.numClipIntersection,me.vertexAlphas=X.vertexAlphas,me.vertexTangents=X.vertexTangents,me.toneMapping=X.toneMapping}function Ht(P,X){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;A.setFromMatrixPosition(X.matrixWorld);for(let me=0,ae=P.length;me<ae;me++){const oe=P[me];if(oe.texture!==null&&oe.boundingBox.containsPoint(A))return oe}return null}function kt(P,X,me,ae,oe){X.isScene!==!0&&(X=Zt),ge.resetTextureUnits();const He=X.fog,Ve=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?X.environment:null,Ge=te===null?z.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Yt.workingColorSpace,Je=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,it=Ce.get(ae.envMap||Ve,Je),ft=ae.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,xt=!!me.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Xe=!!me.morphAttributes.position,Dt=!!me.morphAttributes.normal,hn=!!me.morphAttributes.color;let sn=Wr;ae.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(sn=z.toneMapping);const qt=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,yn=qt!==void 0?qt.length:0,Ye=se.get(ae),ln=L.state.lights;if(bt===!0&&(It===!0||P!==Z)){const Ae=P===Z&&ae.id===K;et.setState(ae,P,Ae)}let Lt=!1;ae.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==ln.state.version||Ye.outputColorSpace!==Ge||oe.isBatchedMesh&&Ye.batching===!1||!oe.isBatchedMesh&&Ye.batching===!0||oe.isBatchedMesh&&Ye.batchingColor===!0&&oe._colorsTexture===null||oe.isBatchedMesh&&Ye.batchingColor===!1&&oe._colorsTexture!==null||oe.isInstancedMesh&&Ye.instancing===!1||!oe.isInstancedMesh&&Ye.instancing===!0||oe.isSkinnedMesh&&Ye.skinning===!1||!oe.isSkinnedMesh&&Ye.skinning===!0||oe.isInstancedMesh&&Ye.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Ye.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&Ye.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&Ye.instancingMorph===!1&&oe.morphTexture!==null||Ye.envMap!==it||ae.fog===!0&&Ye.fog!==He||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==et.numPlanes||Ye.numIntersection!==et.numIntersection)||Ye.vertexAlphas!==ft||Ye.vertexTangents!==xt||Ye.morphTargets!==Xe||Ye.morphNormals!==Dt||Ye.morphColors!==hn||Ye.toneMapping!==sn||Ye.morphTargetsCount!==yn||!!Ye.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Lt=!0):(Lt=!0,Ye.__version=ae.version);let Dn=Ye.currentProgram;Lt===!0&&(Dn=Yn(ae,X,oe),W&&ae.isNodeMaterial&&W.onUpdateProgram(ae,Dn,Ye));let yt=!1,si=!1,h=!1;const O=Dn.getUniforms(),le=Ye.uniforms;if(w.useProgram(Dn.program)&&(yt=!0,si=!0,h=!0),ae.id!==K&&(K=ae.id,si=!0),Ye.needsLights){const Ae=Ht(L.state.lightProbeGridArray,oe);Ye.lightProbeGrid!==Ae&&(Ye.lightProbeGrid=Ae,si=!0)}if(yt||Z!==P){w.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),O.setValue($,"projectionMatrix",P.projectionMatrix),O.setValue($,"viewMatrix",P.matrixWorldInverse);const Tt=O.map.cameraPosition;Tt!==void 0&&Tt.setValue($,Ct.setFromMatrixPosition(P.matrixWorld)),B.logarithmicDepthBuffer&&O.setValue($,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&O.setValue($,"isOrthographic",P.isOrthographicCamera===!0),Z!==P&&(Z=P,si=!0,h=!0)}if(Ye.needsLights&&(ln.state.sunShadowMap.length>0&&O.setValue($,"sunShadowMap",ln.state.sunShadowMap,ge),ln.state.directionalShadowMap.length>0&&O.setValue($,"directionalShadowMap",ln.state.directionalShadowMap,ge),ln.state.spotShadowMap.length>0&&O.setValue($,"spotShadowMap",ln.state.spotShadowMap,ge),ln.state.pointShadowMap.length>0&&O.setValue($,"pointShadowMap",ln.state.pointShadowMap,ge)),oe.isSkinnedMesh){O.setOptional($,oe,"bindMatrix"),O.setOptional($,oe,"bindMatrixInverse");const Ae=oe.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),O.setValue($,"boneTexture",Ae.boneTexture,ge))}oe.isBatchedMesh&&(O.setOptional($,oe,"batchingTexture"),O.setValue($,"batchingTexture",oe._matricesTexture,ge),O.setOptional($,oe,"batchingIdTexture"),O.setValue($,"batchingIdTexture",oe._indirectTexture,ge),O.setOptional($,oe,"batchingColorTexture"),oe._colorsTexture!==null&&O.setValue($,"batchingColorTexture",oe._colorsTexture,ge));const we=me.morphAttributes;if((we.position!==void 0||we.normal!==void 0||we.color!==void 0)&&q.update(oe,me,Dn),(si||Ye.receiveShadow!==oe.receiveShadow)&&(Ye.receiveShadow=oe.receiveShadow,O.setValue($,"receiveShadow",oe.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&X.environment!==null&&(le.envMapIntensity.value=X.environmentIntensity),le.dfgLUT!==void 0&&(le.dfgLUT.value=WE()),si){if(O.setValue($,"toneMappingExposure",z.toneMappingExposure),Ye.needsLights&&Hi(le,h),He&&ae.fog===!0&&Ze.refreshFogUniforms(le,He),Ze.refreshMaterialUniforms(le,ae,he,ce,L.state.transmissionRenderTarget[P.id]),Ye.needsLights&&Ye.lightProbeGrid){const Ae=Ye.lightProbeGrid;le.probesSH.value=Ae.texture,le.probesMin.value.copy(Ae.boundingBox.min),le.probesMax.value.copy(Ae.boundingBox.max),le.probesResolution.value.copy(Ae.resolution)}vu.upload($,Hn(Ye),le,ge)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(vu.upload($,Hn(Ye),le,ge),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&O.setValue($,"center",oe.center),O.setValue($,"modelViewMatrix",oe.modelViewMatrix),O.setValue($,"normalMatrix",oe.normalMatrix),O.setValue($,"modelMatrix",oe.matrixWorld),ae.uniformsGroups!==void 0){const Ae=ae.uniformsGroups;for(let Tt=0,zt=Ae.length;Tt<zt;Tt++){const Jt=Ae[Tt];Y.update(Jt,Dn),Y.bind(Jt,Dn)}}return Dn}function Hi(P,X){P.ambientLightColor.needsUpdate=X,P.lightProbe.needsUpdate=X,P.sunLights.needsUpdate=X,P.sunLightShadows.needsUpdate=X,P.directionalLights.needsUpdate=X,P.directionalLightShadows.needsUpdate=X,P.pointLights.needsUpdate=X,P.pointLightShadows.needsUpdate=X,P.spotLights.needsUpdate=X,P.spotLightShadows.needsUpdate=X,P.rectAreaLights.needsUpdate=X,P.hemisphereLights.needsUpdate=X}function mr(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return fe},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(P,X,me){const ae=se.get(P);ae.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),se.get(P.texture).__webglTexture=X,se.get(P.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:me,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,X){const me=se.get(P);me.__webglFramebuffer=X,me.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(P,X=0,me=0){te=P,fe=X,ee=me;let ae=null,oe=!1,He=!1;if(P){const Ge=se.get(P);if(Ge.__useDefaultFramebuffer!==void 0){w.bindFramebuffer($.FRAMEBUFFER,Ge.__webglFramebuffer),U.copy(P.viewport),de.copy(P.scissor),be=P.scissorTest,w.viewport(U),w.scissor(de),w.setScissorTest(be),K=-1;return}else if(Ge.__webglFramebuffer===void 0)ge.setupRenderTarget(P);else if(Ge.__hasExternalTextures)ge.rebindTextures(P,se.get(P.texture).__webglTexture,se.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const ft=P.depthTexture;if(Ge.__boundDepthTexture!==ft){if(ft!==null&&se.has(ft)&&(P.width!==ft.image.width||P.height!==ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(P)}}const Je=P.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(He=!0);const it=se.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(it[X])?ae=it[X][me]:ae=it[X],oe=!0):P.samples>0&&ge.useMultisampledRTT(P)===!1?ae=se.get(P).__webglMultisampledFramebuffer:Array.isArray(it)?ae=it[me]:ae=it,U.copy(P.viewport),de.copy(P.scissor),be=P.scissorTest}else U.copy(ze).multiplyScalar(he).floor(),de.copy(dt).multiplyScalar(he).floor(),be=en;if(me!==0&&(ae=ne),w.bindFramebuffer($.FRAMEBUFFER,ae)&&w.drawBuffers(P,ae),w.viewport(U),w.scissor(de),w.setScissorTest(be),oe){const Ge=se.get(P.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ge.__webglTexture,me)}else if(He){const Ge=X;for(let Je=0;Je<P.textures.length;Je++){const it=se.get(P.textures[Je]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+Je,it.__webglTexture,me,Ge)}}else if(P!==null&&me!==0){const Ge=se.get(P.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Ge.__webglTexture,me)}K=-1};function Wi(P){const X=se.get(P);return(X.__readFormat!==P.format||X.__readType!==P.type)&&(X.__readFormat=P.format,X.__readType=P.type,X.__formatReadable=B.textureFormatReadable(P.format),X.__typeReadable=B.textureTypeReadable(P.type)),X}this.readRenderTargetPixels=function(P,X,me,ae,oe,He,Ve,Ge=0){if(!(P&&P.isWebGLRenderTarget)){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=se.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ve!==void 0&&(Je=Je[Ve]),Je){w.bindFramebuffer($.FRAMEBUFFER,Je);try{const it=P.textures[Ge],ft=it.format,xt=it.type;P.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Ge);const Xe=Wi(it);if(Xe.__formatReadable===!1){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Xe.__typeReadable===!1){on("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=P.width-ae&&me>=0&&me<=P.height-oe&&$.readPixels(X,me,ae,oe,ye.convert(ft),ye.convert(xt),He)}finally{const it=te!==null?se.get(te).__webglFramebuffer:null;w.bindFramebuffer($.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(P,X,me,ae,oe,He,Ve,Ge=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=se.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ve!==void 0&&(Je=Je[Ve]),Je)if(X>=0&&X<=P.width-ae&&me>=0&&me<=P.height-oe){w.bindFramebuffer($.FRAMEBUFFER,Je);const it=P.textures[Ge],ft=it.format,xt=it.type;P.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Ge);const Xe=Wi(it);if(Xe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Xe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Dt=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,Dt),$.bufferData($.PIXEL_PACK_BUFFER,He.byteLength,$.STREAM_READ),$.readPixels(X,me,ae,oe,ye.convert(ft),ye.convert(xt),0),$.bindBuffer($.PIXEL_PACK_BUFFER,null);const hn=te!==null?se.get(te).__webglFramebuffer:null;w.bindFramebuffer($.FRAMEBUFFER,hn);const sn=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await ox($,sn,4),$.bindBuffer($.PIXEL_PACK_BUFFER,Dt),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,He),$.bindBuffer($.PIXEL_PACK_BUFFER,null),$.deleteBuffer(Dt),$.deleteSync(sn),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,X=null,me=0){const ae=Math.pow(2,-me),oe=Math.floor(P.image.width*ae),He=Math.floor(P.image.height*ae),Ve=X!==null?X.x:0,Ge=X!==null?X.y:0;ge.setTexture2D(P,0),$.copyTexSubImage2D($.TEXTURE_2D,me,0,0,Ve,Ge,oe,He),w.unbindTexture()},this.copyTextureToTexture=function(P,X,me=null,ae=null,oe=0,He=0){let Ve,Ge,Je,it,ft,xt,Xe,Dt,hn;const sn=P.isCompressedTexture?P.mipmaps[He]:P.image;if(me!==null)Ve=me.max.x-me.min.x,Ge=me.max.y-me.min.y,Je=me.isBox3?me.max.z-me.min.z:1,it=me.min.x,ft=me.min.y,xt=me.isBox3?me.min.z:0;else{const le=Math.pow(2,-oe);Ve=Math.floor(sn.width*le),Ge=Math.floor(sn.height*le),P.isDataArrayTexture?Je=sn.depth:P.isData3DTexture?Je=Math.floor(sn.depth*le):Je=1,it=0,ft=0,xt=0}ae!==null?(Xe=ae.x,Dt=ae.y,hn=ae.z):(Xe=0,Dt=0,hn=0);const qt=ye.convert(X.format),yn=ye.convert(X.type);let Ye;X.isData3DTexture?(ge.setTexture3D(X,0),Ye=$.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ge.setTexture2DArray(X,0),Ye=$.TEXTURE_2D_ARRAY):(ge.setTexture2D(X,0),Ye=$.TEXTURE_2D),w.activeTexture($.TEXTURE0),w.pixelStorei($.UNPACK_FLIP_Y_WEBGL,X.flipY),w.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),w.pixelStorei($.UNPACK_ALIGNMENT,X.unpackAlignment);const ln=w.getParameter($.UNPACK_ROW_LENGTH),Lt=w.getParameter($.UNPACK_IMAGE_HEIGHT),Dn=w.getParameter($.UNPACK_SKIP_PIXELS),yt=w.getParameter($.UNPACK_SKIP_ROWS),si=w.getParameter($.UNPACK_SKIP_IMAGES);w.pixelStorei($.UNPACK_ROW_LENGTH,sn.width),w.pixelStorei($.UNPACK_IMAGE_HEIGHT,sn.height),w.pixelStorei($.UNPACK_SKIP_PIXELS,it),w.pixelStorei($.UNPACK_SKIP_ROWS,ft),w.pixelStorei($.UNPACK_SKIP_IMAGES,xt);const h=P.isDataArrayTexture||P.isData3DTexture,O=X.isDataArrayTexture||X.isData3DTexture;if(P.isDepthTexture){const le=se.get(P),we=se.get(X),Ae=se.get(le.__renderTarget),Tt=se.get(we.__renderTarget);w.bindFramebuffer($.READ_FRAMEBUFFER,Ae.__webglFramebuffer),w.bindFramebuffer($.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let zt=0;zt<Je;zt++)h&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,se.get(P).__webglTexture,oe,xt+zt),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,se.get(X).__webglTexture,He,hn+zt)),$.blitFramebuffer(it,ft,Ve,Ge,Xe,Dt,Ve,Ge,$.DEPTH_BUFFER_BIT,$.NEAREST);w.bindFramebuffer($.READ_FRAMEBUFFER,null),w.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(oe!==0||P.isRenderTargetTexture||se.has(P)){const le=se.get(P),we=se.get(X);w.bindFramebuffer($.READ_FRAMEBUFFER,H),w.bindFramebuffer($.DRAW_FRAMEBUFFER,re);for(let Ae=0;Ae<Je;Ae++)h?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,le.__webglTexture,oe,xt+Ae):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,le.__webglTexture,oe),O?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,we.__webglTexture,He,hn+Ae):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,we.__webglTexture,He),oe!==0?$.blitFramebuffer(it,ft,Ve,Ge,Xe,Dt,Ve,Ge,$.COLOR_BUFFER_BIT,$.NEAREST):O?$.copyTexSubImage3D(Ye,He,Xe,Dt,hn+Ae,it,ft,Ve,Ge):$.copyTexSubImage2D(Ye,He,Xe,Dt,it,ft,Ve,Ge);w.bindFramebuffer($.READ_FRAMEBUFFER,null),w.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else O?P.isDataTexture||P.isData3DTexture?$.texSubImage3D(Ye,He,Xe,Dt,hn,Ve,Ge,Je,qt,yn,sn.data):X.isCompressedArrayTexture?$.compressedTexSubImage3D(Ye,He,Xe,Dt,hn,Ve,Ge,Je,qt,sn.data):$.texSubImage3D(Ye,He,Xe,Dt,hn,Ve,Ge,Je,qt,yn,sn):P.isDataTexture?$.texSubImage2D($.TEXTURE_2D,He,Xe,Dt,Ve,Ge,qt,yn,sn.data):P.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,He,Xe,Dt,sn.width,sn.height,qt,sn.data):$.texSubImage2D($.TEXTURE_2D,He,Xe,Dt,Ve,Ge,qt,yn,sn);w.pixelStorei($.UNPACK_ROW_LENGTH,ln),w.pixelStorei($.UNPACK_IMAGE_HEIGHT,Lt),w.pixelStorei($.UNPACK_SKIP_PIXELS,Dn),w.pixelStorei($.UNPACK_SKIP_ROWS,yt),w.pixelStorei($.UNPACK_SKIP_IMAGES,si),He===0&&X.generateMipmaps&&$.generateMipmap(Ye),w.unbindTexture()},this.initRenderTarget=function(P){se.get(P).__webglFramebuffer===void 0&&ge.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?ge.setTextureCube(P,0):P.isData3DTexture?ge.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?ge.setTexture2DArray(P,0):ge.setTexture2D(P,0),w.unbindTexture()},this.resetState=function(){fe=0,ee=0,te=null,w.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Yt._getUnpackColorSpace()}}function qE(s,e,t,r=62206,o=16638023){for(;s.children.length>0;)s.remove(s.children[0]);for(;e.children.length>0;)e.remove(e.children[0]);const l={londonEyeWheel:null,eiffelBeacon:null,libertyTorchHalo:null,auroraMesh:null},u=new Wt({color:330518,fog:!1}),f=new Wt({color:r,fog:!1}),m=new Wt({color:o,fog:!1}),p=new Wt({color:16777215,fog:!1}),y=new Wt({color:62206,fog:!1}),S=new Wt({color:16638023,fog:!1}),_=new Wt({color:15680580,fog:!1}),M=(R,x,v,T,F,A,D,L=f)=>{const k=new St(x,v,T),b=new ve(k,u);b.position.set(F,A,D);const I=new vo(k),z=new go(I,new Ys({color:L.color,fog:!1}));return b.add(z),R.add(b),b},E=-28;if(t==="obelisco"){const R=new Wt({color:3718648,fog:!1}),x=M(s,5.2,68,5.2,-10,E+34,0,R),v=new St(1.1,66,5.4),T=new ve(v,p);x.add(T);const F=new Ri(3.7,10,4);F.rotateY(Math.PI/4);const A=new ve(F,p);A.position.set(-10,E+73,0),s.add(A);const D=new St(36,1.4,3.2),L=new ve(D,R);L.position.set(14,E+12,2),s.add(L);const k=new rn(.45,.9,42,10),b=new ve(k,p);b.position.set(12,E+28,2),b.rotation.z=-.46,s.add(b);for(let I=0;I<6;I++){const z=new rn(.08,.08,24+I*2,6),G=new ve(z,R);G.position.set(16+I*2.2,E+21,2),G.rotation.z=.55+I*.06,s.add(G)}}else if(t==="cristo"){const R=new Ri(28,44,7),x=new ve(R,u);x.position.set(0,E+14,0);const v=new go(new vo(R),new Ys({color:2278750,fog:!1}));x.add(v),s.add(x),M(s,7,10,7,0,E+39,0,S);const T=M(s,6.2,26,4.2,0,E+57,0,p),F=new ve(new St(3.8,25,4.4),new Wt({color:14742270,fog:!1}));T.add(F);const A=new St(32,3.2,3),D=new ve(A,p);D.position.set(0,E+64,0),s.add(D);const L=new ni(2.6,14,14),k=new ve(L,p);k.position.set(0,E+72.5,.5),s.add(k);const b=new Ri(12,55,16,1,!0),I=new Wt({color:4906624,transparent:!0,opacity:.18,blending:Bi,side:zi,depthWrite:!1,fog:!1}),z=new ve(b,I);z.position.set(-14,E+46,2),z.rotation.z=-.35,s.add(z);const G=new ve(b,I);G.position.set(14,E+46,2),G.rotation.z=.35,s.add(G)}else if(t==="liberty_empire"){M(s,11,20,11,-16,E+10,0,y),M(s,6.5,28,5.5,-16,E+34,0,y);const R=new ve(new ni(2.8,12,12),y);R.position.set(-16,E+50,0),s.add(R);for(let A=-3;A<=3;A++){const D=new ve(new Ri(.35,3.6,6),y);D.position.set(-16+A*.9,E+53,0),D.rotation.z=-A*.22,s.add(D)}const x=new ve(new rn(.7,.9,14,8),y);x.position.set(-12.5,E+54,0),x.rotation.z=-.25,s.add(x);const v=new ve(new ni(2.2,16,16),S);v.position.set(-10.8,E+62,0),s.add(v);const T=new ve(new ni(5.2,16,16),new Wt({color:16638023,transparent:!0,opacity:.42,blending:Bi,fog:!1}));T.position.copy(v.position),s.add(T),l.libertyTorchHalo=T,M(s,14,52,12,15,E+26,-2,y),M(s,9.5,18,9,15,E+61,-2,y),M(s,5.5,12,5.5,15,E+76,-2,S);const F=new ve(new rn(.25,.9,24,10),p);F.position.set(15,E+94,-2),s.add(F)}else if(t==="eiffel"){const R=new Wt({color:16498468,fog:!1}),x=[[-11,-6],[11,-6],[-11,6],[11,6]];for(let k=0;k<x.length;k++){const[b,I]=x[k],z=new rn(1.1,2.4,30,8),G=new ve(z,R);G.position.set(b*.72,E+14,I*.72),G.rotation.z=b<0?-.24:.24,s.add(G)}M(s,20,3.2,14,0,E+28,0,S),M(s,12,24,9,0,E+42,0,R),M(s,14,2.6,10,0,E+54,0,S);const v=new ve(new rn(1.2,4.8,34,4,4,!0),new Wt({color:16638023,wireframe:!0,fog:!1}));v.position.set(0,E+72,0),v.rotation.y=Math.PI/4,s.add(v);const T=new $t;T.position.set(0,E+90,0);const F=new Ri(9,75,16,1,!0);F.translate(0,-37.5,0),F.rotateZ(Math.PI/2);const A=new Wt({color:16707722,transparent:!0,opacity:.32,blending:Bi,side:zi,depthWrite:!1,fog:!1}),D=new ve(F,A),L=new ve(F,A);L.rotation.y=Math.PI,T.add(D),T.add(L),s.add(T),l.eiffelBeacon=T}else if(t==="tokyotower"){const R=[{y:14,rBot:11,rTop:7,h:28,mat:_},{y:38,rBot:7,rTop:4.5,h:20,mat:p},{y:56,rBot:4.5,rTop:2.4,h:16,mat:_},{y:71,rBot:2.4,rTop:.8,h:14,mat:p},{y:84,rBot:.8,rTop:.2,h:14,mat:_}];for(let L=0;L<R.length;L++){const k=R[L],b=new rn(k.rTop,k.rBot,k.h,4,2,!0),I=new ve(b,new Wt({color:k.mat.color,wireframe:!0,fog:!1}));I.position.set(0,E+k.y,0),I.rotation.y=Math.PI/4,s.add(I)}const x=new rn(.24,.28,6.2,12),v=new ve(x,_);v.position.set(-2.5,3.1,2.2),e.add(v);const T=new ve(x,_);T.position.set(2.5,3.1,2.2),e.add(T);const F=new ve(new St(7.2,.42,.55),_);F.position.set(0,6.2,2.2),e.add(F);const A=new ve(new St(7.5,.16,.6),S);A.position.set(0,6.48,2.2),e.add(A);const D=new ve(new St(5.8,.28,.38),_);D.position.set(0,4.9,2.2),e.add(D)}else if(t==="pyramids"){const R=[{x:0,z:-4,r:26,h:48},{x:-24,z:4,r:19,h:36},{x:24,z:6,r:16,h:30}];for(let x=0;x<R.length;x++){const v=R[x],T=new Ri(v.r,v.h,4);T.rotateY(Math.PI/4);const F=new ve(T,u);F.position.set(v.x,E+v.h*.5,v.z);const A=new vo(T),D=new go(A,new Ys({color:16638023,fog:!1}));F.add(D);const L=new Ri(v.r*.22,v.h*.22,4);L.rotateY(Math.PI/4);const k=new ve(L,S);k.position.set(0,v.h*.39,0),F.add(k),s.add(F)}}else if(t==="londoneye"){M(s,7.5,54,7.5,-18,E+27,0,S),M(s,8.6,8.6,8.6,-18,E+58,0,S);const R=new ve(new rn(3.2,3.2,.5,20),S);R.rotation.x=Math.PI/2,R.position.set(-18,E+58,4.4),s.add(R);const x=new ve(new Ri(5.2,16,4),S);x.rotation.y=Math.PI/4,x.position.set(-18,E+70,0),s.add(x);const v=new $t;v.position.set(14,E+42,0);const T=new ve(new Gn(21,.65,12,48),y);v.add(T);for(let F=0;F<12;F++){const A=F/12*Math.PI*2,D=new ve(new rn(.12,.12,42,6),y);D.rotation.z=A,v.add(D);const L=new ve(new ni(1.15,10,10),p);L.position.set(Math.cos(A)*21,Math.sin(A)*21,0),v.add(L)}s.add(v),l.londonEyeWheel=v}else if(t==="burjkhalifa"){const R=[{w:15,h:24,y:12},{w:12,h:24,y:36},{w:9,h:22,y:59},{w:6.2,h:22,y:81},{w:3.6,h:20,y:102},{w:1.5,h:24,y:124}];for(let x=0;x<R.length;x++){const v=R[x];M(s,v.w,v.h,v.w,0,E+v.y,0,y);const T=new ve(new Gn(v.w*.68,.32,10,28),x%2===0?y:S);T.rotation.x=Math.PI/2,T.position.set(0,E+v.y+v.h*.5,0),s.add(T)}}else if(t==="opera"){M(s,44,6,14,0,E+12,0,S);const R=[-14,-6,3,12];for(let T=0;T<R.length;T++){const F=R[T],A=22+T%2*8,D=new Ri(6.5,A,4),L=new ve(D,p);L.position.set(F,E+15+A*.45,2),L.rotation.z=-.28;const k=new go(new vo(D),new Ys({color:62206,fog:!1}));L.add(k),s.add(L)}const x=new Gn(30,.85,10,36,Math.PI),v=new ve(x,y);v.position.set(0,E+14,-8),s.add(v)}else if(t==="stbasil"){const R=[{x:0,h:48,r:5.2,mat:_},{x:-12,h:36,r:4.2,mat:y},{x:12,h:36,r:4.2,mat:S},{x:-22,h:28,r:3.5,mat:S},{x:22,h:28,r:3.5,mat:y}];for(let x=0;x<R.length;x++){const v=R[x];M(s,v.r*1.4,v.h,v.r*1.4,v.x,E+v.h*.5,0,v.mat);const T=new ve(new ni(v.r,16,16),v.mat);T.scale.set(1,1.25,1),T.position.set(v.x,E+v.h+v.r*.8,0),s.add(T);const F=new ve(new Ri(v.r*.45,7,8),S);F.position.set(v.x,E+v.h+v.r*2.1,0),s.add(F);const A=new ve(new Ru(1.6,0),S);A.position.set(v.x,E+v.h+v.r*2.1+4.5,0),s.add(A)}}else if(t==="marinabay"){const R=[-16,0,16];for(let v=0;v<R.length;v++)M(s,7.5,58,7,R[v],E+29,0,y);const x=new ve(new St(46,3.8,10),S);x.position.set(2,E+60,0),s.add(x)}else if(t==="swiss_alps"){const R=new ve(new Ri(24,65,5),u);R.position.set(-20,E+32,-4),R.add(new go(new vo(R.geometry),new Ys({color:3718648,fog:!1}))),s.add(R);const x=new ve(new Ri(26,72,5),u);x.position.set(20,E+36,-4),x.add(new go(new vo(x.geometry),new Ys({color:4906624,fog:!1}))),s.add(x);const v=new Na(76,32,16,4),T=new Wt({color:4906624,transparent:!0,opacity:.28,blending:Bi,side:zi,depthWrite:!1,fog:!1}),F=new ve(v,T);F.position.set(0,E+78,-8),s.add(F),l.auroraMesh=F}else{M(s,10,62,10,-16,E+31,0,f),M(s,10,62,10,16,E+31,0,f);const R=new ve(new ni(6.2,16,16),m);R.position.set(0,E+62,0),s.add(R);const x=M(s,5.5,78,5.5,0,E+39,0,m),v=new ve(new rn(.25,.8,22,8),p);v.position.set(0,48,0),x.add(v);const T=new ve(new St(48,1.8,4),f);T.position.set(0,E+24,2),s.add(T)}return l}const Zs=.82;let sv=null;function jE(){const s=document.createElement("canvas");s.width=256,s.height=512;const e=s.getContext("2d"),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#020612"),t.addColorStop(.32,"#071630"),t.addColorStop(.62,"#0f2c56"),t.addColorStop(.84,"#154e7a"),t.addColorStop(1,"#040b18"),e.fillStyle=t,e.fillRect(0,0,256,512);const r=e.createRadialGradient(128,310,12,128,310,165);return r.addColorStop(0,"rgba(0, 242, 254, 0.42)"),r.addColorStop(.55,"rgba(14, 165, 233, 0.14)"),r.addColorStop(1,"rgba(2, 6, 18, 0.0)"),e.fillStyle=r,e.fillRect(0,0,256,512),new Au(s)}function $E(){const s=document.createElement("canvas");s.width=128,s.height=128;const e=s.getContext("2d");e.fillStyle="#64748b",e.fillRect(0,0,128,128),e.strokeStyle="#cbd5e1",e.lineWidth=6;for(let r=-128;r<256;r+=20)e.beginPath(),e.moveTo(r,0),e.lineTo(r+80,128),e.stroke();const t=new Au(s);return t.wrapS=Pa,t.wrapT=Pa,t.repeat.set(2,320),t}function YE(){const s=document.createElement("canvas");s.width=256,s.height=256;const e=s.getContext("2d");return e.fillStyle="#09111f",e.fillRect(0,0,256,256),e.strokeStyle="#00f2fe",e.lineWidth=8,e.beginPath(),e.arc(128,128,102,0,Math.PI*2),e.stroke(),e.fillStyle="#fde047",e.font="bold 116px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("H",128,134),new Au(s)}function mg(s=!1){const e=document.createElement("canvas");e.width=128,e.height=256;const t=e.getContext("2d");t.fillStyle=s?"#061121":"#040914",t.fillRect(0,0,128,256);const r=8,o=24;for(let u=1;u<o;u++)for(let f=1;f<r;f++){const m=(u*17+f*31)%100;m<(s?28:42)&&(m<7?t.fillStyle="#00f2fe":m<18?t.fillStyle="#fef08a":t.fillStyle=s?"#1e3a5f":"#38bdf8",t.fillRect(f*14,u*10,7,5))}const l=new Au(e);return l.wrapS=Pa,l.wrapT=Pa,l.repeat.set(1,2),l}function KE(s){const e=s.clientWidth||420,t=s.clientHeight||780,r=new Ex;r.background=new Xt(398118),r.fog=new qh(664121,.011);const o=new Ji(58,e/t,.1,600);o.position.set(0,3.4,6.2),o.lookAt(0,1.65,-15);const l=new XE({antialias:!0,powerPreference:"high-performance"});l.setSize(e,t),l.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),l.toneMapping=Oh,l.toneMappingExposure=1.25,s.innerHTML="",s.appendChild(l.domElement);const u=new Xx(3718648,.9);r.add(u);const f=new Wx(62206,1.75);f.position.set(0,28,-65),r.add(f);const m=new ou(62206,3.8,22);m.position.set(0,1.35,0),r.add(m);const p=new ou(16638023,4.2,24);p.position.set(0,2.5,-.3),r.add(p);const y=jE(),S=new Na(340,220),_=new Wt({map:y,fog:!1,depthWrite:!1}),M=new ve(S,_);M.position.set(0,12,-210),r.add(M);const E=1800,R=$E(),x=new rn(.042,.042,E,16);x.rotateX(Math.PI/2);const v=new Vn({color:13358561,map:R,metalness:.9,roughness:.18,emissive:62206,emissiveIntensity:.38}),T=new ve(x,v);T.position.set(0,0,-E*.5+12),r.add(T);const F=new rn(.015,.015,E,8);F.rotateX(Math.PI/2);const A=new Wt({color:62206,transparent:!0,opacity:.72}),D=new ve(F,A);D.position.set(0,.022,-E*.5+12),r.add(D);const L=new Vn({color:330002,roughness:.8,metalness:.2}),k=new St(7.2,60,7),b=new ve(k,L);b.position.set(0,-30.045,3.5),r.add(b);const I=new $t,z=new St(9.2,70,9.2),G=new ve(z,L);G.position.set(0,-35.045,0),I.add(G);const W=YE(),ne=new Na(7,7);ne.rotateX(-Math.PI/2);const H=new Wt({map:W}),re=new ve(ne,H);re.position.set(0,.01,0),I.add(re);const fe=new Gn(3.4,.075,12,36);fe.rotateX(Math.PI/2);const ee=new Wt({color:62206}),te=new ve(fe,ee);te.position.set(0,.12,0),I.add(te);const K=new $t;I.add(K),I.position.set(0,0,-100),r.add(I);const Z=new $t;Z.position.set(0,0,-135),r.add(Z);const U=mg(!1),de=mg(!0),be=new Vn({color:464166,map:U,emissive:959977,emissiveMap:U,emissiveIntensity:.58,roughness:.5,metalness:.4}),qe=new Wt({color:729657,map:de}),je=new Wt({color:1128020}),$e=new Wt({color:62206,transparent:!0,opacity:.35}),ce=[];for(let We=0;We<44;We++){const At=We%2===0,jt=We%3,un=Math.floor(We/2),Zn=6.5+We%4*2.1+jt*2.2,vn=6.5+We*3%4*1.8,kn=72+We*13%42+jt*16,wi=new St(Zn,kn,vn),Sn=jt===0?be:jt===1?qe:je,xr=new ve(wi,Sn),tr=jt===0?12.2+We%3*2.8:jt===1?21.5+We%3*4.2:32+We%4*5,ra=(At?-1:1)*tr,nr=10-un*13,Ba=-60+kn*.5;if(xr.position.set(ra,Ba,nr),jt===0){const ir=new St(.12,kn,.12),di=new ve(ir,$e);di.position.set(At?Zn*.5+.04:-Zn*.5-.04,0,vn*.5),xr.add(di)}r.add(xr),ce.push(xr)}const he=[],Ne=new Ri(5.5,115,20,1,!0);for(let We=0;We<10;We++){const At=We%2===0,jt=new Wt({color:We%3===0?62206:959977,transparent:!0,opacity:We%3===0?.11:.075,side:zi,depthWrite:!1,blending:Bi}),un=new ve(Ne,jt),Zn=(At?-1:1)*(8.5+We%3*4.5),vn=-18-We*24;un.position.set(Zn,8,vn),un.rotation.z=(At?-1:1)*.24,r.add(un),he.push({mesh:un,mat:jt,baseAngle:(At?-1:1)*.24,speed:.45+We%4*.18,phaseOffset:We*1.1})}const Qe=[],ze=new St(.4,.18,2.2),dt=new Wt({color:62206}),en=new Wt({color:15680580});for(let We=0;We<20;We++){const At=We%2===0,jt=new ve(ze,At?en:dt),un=(We%4-1.5)*2.1;jt.position.set(un,-36,-We*12),r.add(jt),Qe.push({mesh:jt,speed:(At?-1:1)*(15+We%4*3.5)})}const ht=220,bt=new Float32Array(ht*3);for(let We=0;We<ht;We++)bt[We*3+0]=(Math.random()-.5)*28,bt[We*3+1]=-6+Math.random()*20,bt[We*3+2]=6-Math.random()*55;const It=new qn;It.setAttribute("position",new Lr(bt,3));const vt=new Xg({color:62206,size:.14,transparent:!0,opacity:.65,blending:Bi,depthWrite:!1}),Ct=new Ix(It,vt);r.add(Ct);const Ot=new $t;Ot.position.set(0,0,0),r.add(Ot);const Zt=new ou(16777215,3.6,12);Zt.position.set(0,1.45,2.4),Ot.add(Zt);const Ft=new ou(3718648,3.4,12);Ft.position.set(0,1.55,-1.8),Ot.add(Ft);const Bt=new Vn({color:1976635,emissive:727081,emissiveIntensity:.35,metalness:.35,roughness:.55}),$=new Vn({color:988970,emissive:462105,emissiveIntensity:.25,metalness:.35,roughness:.55}),tn=new Vn({color:3718648,emissive:3718648,emissiveIntensity:1.35,metalness:.2,roughness:.2}),Pt=new Vn({color:3359061,emissive:3718648,emissiveIntensity:.45,metalness:.5,roughness:.35}),B=new Vn({color:3359061,emissive:3718648,emissiveIntensity:.45,metalness:.45,roughness:.35}),w=new Vn({color:3718648,emissive:3718648,emissiveIntensity:1.5,metalness:.3,roughness:.25}),J=Bt,se=$,ge=Pt,Ce=Bt,Ie=B,xe=tn,Ee=new Vn({color:3718648,emissive:3718648,emissiveIntensity:1.4,metalness:.3,roughness:.25}),Be=new Vn({color:3718648,emissive:3718648,emissiveIntensity:1.6,metalness:.3,roughness:.25}),Ze=new Vn({color:3718648,emissive:3718648,emissiveIntensity:1.6,side:zi,metalness:.2,roughness:.3}),Ue=new Vn({color:16777215,emissive:16777215,emissiveIntensity:2.2,metalness:.2,roughness:.2}),Pe=new Vn({color:62206,emissive:62206,emissiveIntensity:2.6,metalness:.3,roughness:.2}),et=new Vn({color:12616956,emissive:12616956,emissiveIntensity:2.4,metalness:.4,roughness:.25}),rt=new Vn({color:16317180,emissive:14870768,emissiveIntensity:1.5,metalness:.85,roughness:.18}),ut=new Vn({color:16711765,emissive:16711765,emissiveIntensity:2.8,metalness:.4,roughness:.2}),q=new Vn({color:15680580,emissive:16711765,emissiveIntensity:2.2,metalness:.5,roughness:.25}),Te=new Vn({color:16498468,emissive:16096779,emissiveIntensity:2.6,metalness:.95,roughness:.15}),Se=new Vn({color:789001,emissive:1841431,emissiveIntensity:.35,metalness:.75,roughness:.25}),ye=We=>{const At=new $t;At.position.set(We?-.08:.08,.88,0);const jt=new wa(.064,.34,10,18),un=new ve(jt,se);un.position.set(We?.018:-.018,-.19,0),un.rotation.z=We?.05:-.05,At.add(un);const Zn=new St(.03,.12,.075),vn=new ve(Zn,J);vn.position.set(We?-.055:.055,-.18,0),At.add(vn);const kn=new St(.018,.28,.032),wi=new ve(kn,Ue);wi.position.set(We?-.062:.062,-.19,.01),wi.visible=!1,At.add(wi);const Sn=new $t;Sn.position.set(We?.035:-.035,-.41,0),At.add(Sn);const xr=new Gn(.062,.014,10,20);xr.rotateX(Math.PI/2);const tr=new ve(xr,Pe);tr.position.set(We?.01:-.01,-.02,0),tr.visible=!1,Sn.add(tr);const ra=new wa(.05,.34,10,18),nr=new ve(ra,se);nr.position.set(We?.02:-.02,-.2,0),nr.rotation.z=We?.04:-.04,Sn.add(nr);const Ba=new St(.018,.25,.028),ir=new ve(Ba,Ue);ir.position.set(We?-.042:.042,-.2,.015),ir.visible=!1,Sn.add(ir);const di=new $t;di.position.set(We?.035:-.035,-.43,0),Sn.add(di);const kl=new wa(.045,.14,8,14);kl.rotateX(Math.PI/2);const sa=new ve(kl,ge);sa.position.set(0,-.005,-.025),di.add(sa);const Bu=new St(.095,.026,.22),ko=new ve(Bu,Ee);ko.position.set(0,-.038,-.025),di.add(ko);const Bo=new St(.098,.032,.045),As=new ve(Bo,Pe);As.position.set(0,-.01,.068),As.visible=!1,di.add(As);const zo=new rn(.024,.036,.06,12);zo.rotateX(Math.PI/2);const aa=new ve(zo,q);return aa.position.set(0,.01,.085),aa.visible=!1,di.add(aa),{hipGroup:At,kneeGroup:Sn,bootGroup:di,cargoPocketMesh:vn,thighReflectiveMesh:wi,calfReflectiveMesh:ir,tacticalKneeNeon:tr,tacticalHeelNeon:As,shinobiBootThruster:aa}},Me=ye(!0),Y=ye(!1);Ot.add(Me.hipGroup),Ot.add(Y.hipGroup);const Oe=new $t;Ot.add(Oe);const Fe=new rn(.135,.12,.15,18);Fe.scale(1.15,1,.72);const Et=new ve(Fe,se);Et.position.set(0,.89,0),Oe.add(Et);const ot=new $t;ot.position.set(0,.95,0),Oe.add(ot);const xn=new rn(.165,.125,.24,18);xn.scale(1.18,1,.68);const fn=new ve(xn,J);fn.position.set(0,.12,0),ot.add(fn);const An=new rn(.215,.162,.28,20);An.scale(1.24,1,.68);const yi=new ve(An,J);yi.position.set(0,.35,0),ot.add(yi);const Ci=new St(.042,.38,.026),Rn=new ve(Ci,xe);Rn.position.set(0,.26,.135),ot.add(Rn);const ui=new $t,mn=new ni(.135,16,14);mn.scale(1.15,.68,.95);const Pi=new ve(mn,J);Pi.position.set(0,.5,.095),ui.add(Pi);const wn=new Gn(.13,.014,10,24);wn.rotateX(Math.PI*.42);const pt=new ve(wn,xe);pt.position.set(0,.52,.09),ui.add(pt),ot.add(ui);const ri=new $t;ri.visible=!1;const $r=new ve(new St(.42,.032,.026),Ue);$r.position.set(0,.4,.145),ri.add($r);const Gi=new ve(new St(.32,.028,.026),Ue);Gi.position.set(0,.16,.135),ri.add(Gi);const pr=new ve(new St(.032,.36,.026),Ue);pr.position.set(-.11,.28,.142),ri.add(pr);const Yn=new ve(new St(.032,.36,.026),Ue);Yn.position.set(.11,.28,.142),ri.add(Yn),ot.add(ri);const Hn=new $t;Hn.visible=!1;const Yr=new St(.042,.48,.028),Ht=new ve(Yr,Pe);Ht.position.set(0,.28,.148),Ht.rotation.z=.64,Hn.add(Ht);const kt=new ve(Yr,Pe);kt.position.set(0,.28,.148),kt.rotation.z=-.64,Hn.add(kt);const Hi=new ve(new rn(.055,.055,.032,6),Pe);Hi.rotation.x=Math.PI/2,Hi.position.set(0,.28,.155),Hn.add(Hi);const mr=new St(.14,.065,.18),Wi=new ve(mr,Se);Wi.position.set(-.27,.48,0),Wi.rotation.z=.22;const P=new ve(new St(.15,.018,.19),Pe);P.position.set(0,.028,0),Wi.add(P),Hn.add(Wi);const X=new ve(mr,Se);X.position.set(.27,.48,0),X.rotation.z=-.22;const me=new ve(new St(.15,.018,.19),Pe);me.position.set(0,.028,0),X.add(me),Hn.add(X),ot.add(Hn);const ae=new $t;ae.visible=!1;const oe=new Gn(.13,.018,8,4),He=new ve(oe,et);He.position.set(0,.3,.148),ae.add(He);const Ve=new ve(new Gn(.065,.014,8,4),rt);Ve.position.set(0,.3,.152),ae.add(Ve);const Ge=new ve(new St(.025,.42,.03),rt);Ge.position.set(-.16,.27,.138),Ge.rotation.z=-.12,ae.add(Ge);const Je=new ve(new St(.025,.42,.03),rt);Je.position.set(.16,.27,.138),Je.rotation.z=.12,ae.add(Je);const it=new ve(new Gn(.135,.016,10,24),rt);it.rotateX(Math.PI/2),it.position.set(0,.49,.01),ae.add(it),ot.add(ae);const ft=new $t;ft.visible=!1;const xt=new ve(new St(.036,.4,.028),ut);xt.position.set(0,.27,.146),ft.add(xt);for(let We=0;We<4;We++){const At=We%2===0?-1:1,jt=We<2?.36:.21,un=new ve(new St(.14,.022,.026),ut);un.position.set(At*.08,jt,.146),un.rotation.z=At*.38,ft.add(un)}const Xe=new $t;Xe.position.set(.02,.31,.172),Xe.rotation.z=-.68;const Dt=new ve(new rn(.018,.015,.66,12),Se);Dt.position.set(0,-.06,0),Xe.add(Dt);const hn=new ve(new St(.012,.64,.038),ut);hn.position.set(0,-.06,0),Xe.add(hn);const sn=new ve(new rn(.052,.052,.016,16),Te);sn.position.set(0,.27,0),Xe.add(sn);const qt=new ve(new rn(.02,.02,.22,12),q);qt.position.set(0,.39,0),Xe.add(qt);const yn=new ve(new rn(.025,.025,.028,12),Te);yn.position.set(0,.51,0),Xe.add(yn);const Ye=Xe;ft.add(Ye),ot.add(ft);const ln=new $t;ln.visible=!1;for(let We=0;We<3;We++){const At=new ve(new St(.24-We*.03,.055,.03),Te);At.position.set(0,.39-We*.1,.145),ln.add(At)}const Lt=new $t;Lt.visible=!1;const Dn=new St(.16,.14,.2),yt=new ve(Dn,Se);yt.position.set(-.285,.45,0),yt.rotation.z=.28;const si=new ve(new St(.17,.024,.21),Te);si.position.set(0,.06,0),yt.add(si),Lt.add(yt);const h=new ve(Dn,Se);h.position.set(.285,.45,0),h.rotation.z=-.28;const O=new ve(new St(.17,.024,.21),Te);O.position.set(0,.06,0),h.add(O),Lt.add(h),ot.add(Lt);const le=new $t;le.visible=!1;const we=(We,At)=>{const jt=new $t;jt.position.set(0,.3,At),jt.rotation.z=We;const un=new ve(new rn(.018,.015,.68,12),Se);un.position.set(0,-.06,0),jt.add(un);const Zn=new ve(new St(.012,.65,.038),Te);Zn.position.set(0,-.06,0),jt.add(Zn);const vn=new ve(new rn(.054,.054,.018,16),Te);vn.position.set(0,.28,0),jt.add(vn);const kn=new ve(new rn(.021,.021,.23,12),Te);return kn.position.set(0,.4,0),jt.add(kn),jt};le.add(we(-.62,.172)),le.add(we(.62,.192)),ln.add(le),ot.add(ln);const Ae=new $t;Ae.visible=!1;const Tt=Ae,zt=new ve(new Ru(.085,1),Pe);zt.position.set(0,.3,.165),Ae.add(zt);const Jt=new ve(new Gn(.13,.014,10,28),Ue);Jt.position.set(0,.3,.165),Ae.add(Jt);const gn=new ve(new Gn(.38,.014,10,36),Pe);gn.position.set(0,.28,0),gn.rotation.x=Math.PI*.35,Ae.add(gn);const Nn=new ve(new Gn(.42,.012,10,36),Ue);Nn.position.set(0,.28,0),Nn.rotation.y=Math.PI*.25,Ae.add(Nn),ot.add(Ae);const ai=new $t;ai.visible=!1;const Si=new ve(new Gn(.34,.02,12,36),Te);Si.position.set(0,.32,.16),ai.add(Si);const Qt=new $t;Qt.position.set(0,.3,0);const Un=new ni(.026,8,8);for(let We=0;We<8;We++){const At=We/8*Math.PI*2,jt=new ve(Un,Te);jt.position.set(Math.cos(At)*.42,Math.sin(At*2)*.18,Math.sin(At)*.32),Qt.add(jt)}ai.add(Qt),ot.add(ai);const Kn=new ni(.078,16,16),er=new ve(Kn,J);er.position.set(-.255,.45,0),ot.add(er);const Ss=new ve(Kn,J);Ss.position.set(.255,.45,0),ot.add(Ss);const gr=new rn(.05,.06,.1,14),Kr=new ve(gr,J);Kr.position.set(0,.54,0),ot.add(Kr);const Xi=new $t;Xi.position.set(0,.67,0),ot.add(Xi);const Qs=new ni(.118,24,24);Qs.scale(.95,1.06,1.02);const Zr=new ve(Qs,Ce);Xi.add(Zr);const Nr=new Gn(.116,.018,12,28);Nr.rotateX(Math.PI/2);const vr=new ve(Nr,w);vr.position.set(0,.025,0),Xi.add(vr);const Ms=new rn(.124,.124,.045,20,1,!0,Math.PI*.55,Math.PI*.9),Jr=new ve(Ms,Pe);Jr.position.set(0,.02,0),Jr.visible=!1,Xi.add(Jr);const Ir=new ve(new Gn(.14,.015,10,28),Te);Ir.rotateX(Math.PI/2),Ir.position.set(0,.16,0),Ir.visible=!1,Xi.add(Ir);const ea=Ir,_r=new $t;_r.position.set(0,.022,.118),Xi.add(_r);const Es=new St(.18,.032,.01);Es.translate(.09,0,0);const ws=new ve(Es,Ze);_r.add(ws);const Mi=new $t;Mi.position.set(.175,0,0),ws.add(Mi);const Qr=new St(.18,.028,.009);Qr.translate(.09,0,0);const Dr=new ve(Qr,Ze);Mi.add(Dr);const es=new $t;es.position.set(.175,0,0),Dr.add(es);const ts=new St(.17,.022,.008);ts.translate(.085,0,0);const bs=new ve(ts,Ze);es.add(bs);const ta=We=>{const At=new $t;At.position.set(We?-.255:.255,.44,0);const jt=new wa(.048,.22,10,16),un=new ve(jt,J);un.position.set(We?-.08:.08,-.11,-.02),un.rotation.z=We?-.56:.56,At.add(un);const Zn=new St(.02,.19,.028),vn=new ve(Zn,Ue);vn.position.set(We?-.095:.095,-.11,.025),vn.rotation.z=We?-.56:.56,vn.visible=!1,At.add(vn);const kn=new $t;kn.position.set(We?-.16:.16,-.21,-.04),At.add(kn);const wi=new wa(.042,.21,10,16),Sn=new ve(wi,J);Sn.position.set(We?-.07:.07,-.04,-.09),Sn.rotation.x=.72,Sn.rotation.z=We?-.45:.45,kn.add(Sn);const xr=new Gn(.046,.013,10,20),tr=new ve(xr,Be);tr.position.set(We?-.12:.12,-.07,-.155),kn.add(tr);const ra=new ni(.052,14,14),nr=new ve(ra,Ie);return nr.position.set(We?-.14:.14,-.08,-.18),kn.add(nr),{shoulderGroup:At,elbowGroup:kn,handMesh:nr,wristMesh:tr,sleeveReflectiveMesh:vn}},_t=ta(!0),cn=ta(!1);ot.add(_t.shoulderGroup),ot.add(cn.shoulderGroup);const On=new $t;On.position.set(0,.17,-.2),ot.add(On);const Ei=4,Li=new rn(.018,.018,Ei,16);Li.rotateZ(Math.PI/2);const ns=new Wt({color:14742270}),Lo=new ve(Li,ns);On.add(Lo);const Ts=new rn(.052,.052,Ei,14);Ts.rotateZ(Math.PI/2);const na=new Wt({color:62206,transparent:!0,opacity:.42,blending:Bi,depthWrite:!1}),No=new ve(Ts,na);On.add(No);const Pl=new ni(.058,14,14),ia=new Wt({color:62206}),Ll=new ve(Pl,ia);Ll.position.set(-Ei*.5,0,0),On.add(Ll);const Ua=new ve(Pl,ia);Ua.position.set(Ei*.5,0,0),On.add(Ua);const Nl=new Gn(.14,.015,10,24),Oa=new ve(Nl,ia);Oa.position.set(-Ei*.5,0,0),Oa.visible=!1,On.add(Oa);const Fa=new ve(Nl,ia);Fa.position.set(Ei*.5,0,0),Fa.visible=!1,On.add(Fa);const Lu=new Float32Array(6),Io=new qn;Io.setAttribute("position",new Lr(Lu,3));const Il=new Ys({color:62206,linewidth:3}),Do=new Wg(Io,Il);Do.visible=!1,r.add(Do);const Nu=new rn(.04,.04,1,10),Iu=new Wt({color:62206,transparent:!0,opacity:.85,blending:Bi,depthWrite:!1}),Uo=new ve(Nu,Iu);Uo.visible=!1,r.add(Uo);const ka=new Gn(.14,.012,10,28),Dl=new Wt({color:62206,transparent:!0,opacity:.55,blending:Bi}),Ul=new Wt({color:62206,transparent:!0,opacity:.55,blending:Bi}),Ol=new ve(ka,Dl),Oo=new ve(ka,Ul);r.add(Ol),r.add(Oo);const Du=new ni(.12,24,24),Uu=new ni(.24,16,16),Ou=new ni(.072,12,12),Fu=new Wt({color:16710083}),ku=new Wt({color:16638023,transparent:!0,opacity:.52,blending:Bi,depthWrite:!1}),Fl=[];for(let We=0;We<4;We++){const At=new $t,jt=new ve(Du,Fu),un=new ve(Uu,ku);At.add(jt),At.add(un),r.add(At);const Zn=[];for(let vn=0;vn<7;vn++){const kn=new Wt({color:vn<3?16638023:16096779,transparent:!0,opacity:.68-vn*.085,blending:Bi,depthWrite:!1}),wi=new ve(Ou,kn),Sn=1-vn*.12;wi.scale.set(Sn,Sn,Sn),r.add(wi),Zn.push(wi)}Fl.push({group:At,core:jt,halo:un,trails:Zn})}const Fo={scene:r,camera:o,renderer:l,ambientLight:u,rimDirLight:f,cyanPoleLight:m,goldOrbLight:p,acrobatKeyLight:Zt,acrobatBackLight:Ft,backlitBackdrop:M,cableTex:R,arrivalGroup:I,arrivalToriiGroup:K,beaconRingMesh:te,landmarkGroup:Z,landmarkAnimRefs:{},activeLandmarkKey:"",skyscrapers:ce,spotlightBeams:he,carMeshes:Qe,weatherPoints:Ct,weatherGeo:It,weatherMat:vt,weatherCount:ht,acrobatGroup:Ot,torsoMat:Bt,limbsMat:$,neonStripMat:tn,shoesMat:Pt,glovesMat:B,headbandMat:w,jacketMat:J,pantsMat:se,bootMat:ge,headMat:Ce,soleMat:Ee,gloveMat:Ie,wristBandMat:Be,ribbonMat:Ze,dorsalStripMat:xe,singleKatanaMesh:Ye,dualGoldKatanasGroup:le,samuraiShouldersGroup:Lt,quantumHaloMesh:Tt,immortalCrownMesh:ea,urbanoAccGroup:ui,nightRunnerAccGroup:ri,infiltradoAccGroup:Hn,ilusionistaAccGroup:ae,shinobiAccGroup:ft,roninGoldAccGroup:ln,quantumSpecterAccGroup:Ae,quantumCoreMesh:zt,quantumHoloRingA:gn,quantumHoloRingB:Nn,goldenLegendAccGroup:ai,solarAuraRing:Si,solarParticlesGroup:Qt,tacticalVisorMesh:Jr,goldenCrownHalo:Ir,poleCoreMat:ns,poleLaserGlowMat:na,poleTipMat:ia,poleGlowMesh:No,leftGyroRing:Oa,rightGyroRing:Fa,upperBodyGroup:Oe,torsoSpineGroup:ot,headGroup:Xi,leftLeg:Me,rightLeg:Y,leftArm:_t,rightArm:cn,poleGroup:On,ribbonPivot:_r,ribbonJoint2:Mi,ribbonJoint3:es,grappleLaserLine:Do,grappleLineGeo:Io,grappleBeamMesh:Uo,leftReceiverRing:Ol,rightReceiverRing:Oo,leftReceiverMat:Dl,rightReceiverMat:Ul,orbMeshes:Fl,worldLeftHand:new ie,worldRightHand:new ie,grappleAnchor:new ie,lastTimeSec:0,smoothKneeFlex:0,smoothHipX:0,edgeSaveBlend:0,smoothTorsoComp:0,smoothNeckComp:0,dynamicFov:58,dynamicCamDist:6.2,dynamicCamY:3.38};return sv=Fo,dr("urbano",Fo,!1),Fo}function dr(s,e=null,t=!1){var A,D,L,k,b,I,z,G,W,ne,H,re,fe,ee;const r=e||sv;if(!r)return null;const o=Zi(s),l=Aa[o]||Aa.urbano,u=l.styleType||o,f=l.metalness??.45,m=l.roughness??.35,p=t?3.2:l.emissiveIntensity??2.2,y=16638023;r.torsoMat&&(r.torsoMat.color.set(l.torsoColor||l.jacketHex),r.torsoMat.emissive.set(t?y:l.torsoEmissive||l.jacketEmissiveHex),r.torsoMat.emissiveIntensity=t?1.15:l.torsoEmissiveIntensity??.6,r.torsoMat.metalness=f,r.torsoMat.roughness=m,r.torsoMat.needsUpdate=!0),r.limbsMat&&(r.limbsMat.color.set(l.limbsColor||l.pantsHex),r.limbsMat.emissive.set(t?y:l.limbsEmissive||l.pantsHex),r.limbsMat.emissiveIntensity=t?.95:l.limbsEmissiveIntensity??.45,r.limbsMat.metalness=f,r.limbsMat.roughness=m,r.limbsMat.needsUpdate=!0),r.neonStripMat&&(r.neonStripMat.color.set(t?y:l.neonStripColor||l.dorsalHex),r.neonStripMat.emissive.set(t?y:l.neonStripColor||l.dorsalHex),r.neonStripMat.emissiveIntensity=p,r.neonStripMat.needsUpdate=!0),r.shoesMat&&(r.shoesMat.color.set(l.shoesColor||l.bootHex),r.shoesMat.emissive.set(t?y:l.shoesColor||l.soleHex),r.shoesMat.emissiveIntensity=t?1.4:u==="urbano"?.35:1.15,r.shoesMat.metalness=f,r.shoesMat.roughness=m,r.shoesMat.needsUpdate=!0),r.glovesMat&&(r.glovesMat.color.set(l.glovesColor||l.gloveHex),r.glovesMat.emissive.set(t?y:l.glovesColor||l.wristHex),r.glovesMat.emissiveIntensity=u==="ilusionista"||u==="quantum_specter"||u==="immortal_legend"?1.75:.65,r.glovesMat.metalness=f,r.glovesMat.roughness=m,r.glovesMat.needsUpdate=!0),r.headbandMat&&(r.headbandMat.color.set(t?y:l.headbandColor||l.headbandHex),r.headbandMat.emissive.set(t?y:l.headbandColor||l.headbandHex),r.headbandMat.emissiveIntensity=p*.9,r.headbandMat.needsUpdate=!0),r.soleMat&&(r.soleMat.color.set(l.soleColor||l.soleHex),r.soleMat.emissive.set(t?y:l.soleColor||l.soleHex),r.soleMat.emissiveIntensity=p*.85,r.soleMat.needsUpdate=!0),r.wristBandMat&&(r.wristBandMat.color.set(l.wristColor||l.wristHex),r.wristBandMat.emissive.set(t?y:l.wristColor||l.wristHex),r.wristBandMat.emissiveIntensity=p*.9,r.wristBandMat.needsUpdate=!0),r.ribbonMat&&(r.ribbonMat.color.set(t?y:l.ribbonColor||l.ribbonHex),r.ribbonMat.emissive.set(t?y:l.ribbonColor||l.ribbonHex),r.ribbonMat.emissiveIntensity=p*.9,r.ribbonMat.needsUpdate=!0),r.acrobatBackLight&&r.acrobatBackLight.color.set(t?y:l.neonStripColor||l.rimHex);const S=u==="shinobi"||u==="immortal_legend"?1.48:u==="ilusionista"||u==="ronin_gold"?1.32:1;r.ribbonPivot&&r.ribbonPivot.scale.set(S,1,1);const _=u==="urbano",M=u==="night_runner",E=u==="infiltrado",R=u==="ilusionista",x=u==="shinobi",v=u==="ronin_gold",T=u==="quantum_specter",F=u==="immortal_legend"||u==="leyenda_dorada";return r.urbanoAccGroup&&(r.urbanoAccGroup.visible=_),(A=r.leftLeg)!=null&&A.cargoPocketMesh&&(r.leftLeg.cargoPocketMesh.visible=_),(D=r.rightLeg)!=null&&D.cargoPocketMesh&&(r.rightLeg.cargoPocketMesh.visible=_),r.nightRunnerAccGroup&&(r.nightRunnerAccGroup.visible=M),(L=r.leftArm)!=null&&L.sleeveReflectiveMesh&&(r.leftArm.sleeveReflectiveMesh.visible=M),(k=r.rightArm)!=null&&k.sleeveReflectiveMesh&&(r.rightArm.sleeveReflectiveMesh.visible=M),(b=r.leftLeg)!=null&&b.thighReflectiveMesh&&(r.leftLeg.thighReflectiveMesh.visible=M),(I=r.rightLeg)!=null&&I.thighReflectiveMesh&&(r.rightLeg.thighReflectiveMesh.visible=M),(z=r.leftLeg)!=null&&z.calfReflectiveMesh&&(r.leftLeg.calfReflectiveMesh.visible=M),(G=r.rightLeg)!=null&&G.calfReflectiveMesh&&(r.rightLeg.calfReflectiveMesh.visible=M),r.infiltradoAccGroup&&(r.infiltradoAccGroup.visible=E),r.tacticalVisorMesh&&(r.tacticalVisorMesh.visible=E||T),(W=r.leftLeg)!=null&&W.tacticalKneeNeon&&(r.leftLeg.tacticalKneeNeon.visible=E||T),(ne=r.rightLeg)!=null&&ne.tacticalKneeNeon&&(r.rightLeg.tacticalKneeNeon.visible=E||T),(H=r.leftLeg)!=null&&H.tacticalHeelNeon&&(r.leftLeg.tacticalHeelNeon.visible=E||T),(re=r.rightLeg)!=null&&re.tacticalHeelNeon&&(r.rightLeg.tacticalHeelNeon.visible=E||T),r.ilusionistaAccGroup&&(r.ilusionistaAccGroup.visible=R),r.shinobiAccGroup&&(r.shinobiAccGroup.visible=x),r.singleKatanaMesh&&(r.singleKatanaMesh.visible=x),(fe=r.leftLeg)!=null&&fe.shinobiBootThruster&&(r.leftLeg.shinobiBootThruster.visible=x),(ee=r.rightLeg)!=null&&ee.shinobiBootThruster&&(r.rightLeg.shinobiBootThruster.visible=x),r.roninGoldAccGroup&&(r.roninGoldAccGroup.visible=v),r.dualGoldKatanasGroup&&(r.dualGoldKatanasGroup.visible=v),r.samuraiShouldersGroup&&(r.samuraiShouldersGroup.visible=v||F),r.quantumSpecterAccGroup&&(r.quantumSpecterAccGroup.visible=T),r.quantumHaloMesh&&(r.quantumHaloMesh.visible=T),r.goldenLegendAccGroup&&(r.goldenLegendAccGroup.visible=F),r.immortalCrownMesh&&(r.immortalCrownMesh.visible=F),r.goldenCrownHalo&&(r.goldenCrownHalo.visible=F),l}function ZE(s,e,t,r="menu",o="urbano",l="home"){var rt,ut,q,Te,Se;if(!s||!e)return;const u=Math.min(.05,Math.max(.001,t-(s.lastTimeSec||t-.016)));s.lastTimeSec=t;const f=-(e.distance||0),m=e.angle||0,p=Math.abs(m),y=Math.min(1,p/Zs),S=((rt=e.cfg)==null?void 0:rt.walkSpeed)||1,_=!!e.frenzyActive,M=dr(o||((ut=e.skinObj)==null?void 0:ut.id),s,_)||xg(o||((q=e.skinObj)==null?void 0:q.id)),E=M.styleType,R=_?16638023:M.rimHex,x=E==="quantum_specter",v=E==="immortal_legend"||E==="leyenda_dorada";x&&(s.quantumCoreMesh&&(s.quantumCoreMesh.rotation.y=t*2.8,s.quantumCoreMesh.rotation.z=t*1.9),s.quantumHoloRingA&&(s.quantumHoloRingA.rotation.z=t*1.6,s.quantumHoloRingA.rotation.x=Math.PI*.35+Math.sin(t*2.1)*.22),s.quantumHoloRingB&&(s.quantumHoloRingB.rotation.x=-t*1.4,s.quantumHoloRingB.rotation.y=Math.PI*.25+Math.cos(t*1.8)*.25)),v&&(s.solarAuraRing&&(s.solarAuraRing.rotation.z=t*2.1),s.solarParticlesGroup&&(s.solarParticlesGroup.rotation.y=t*2.4,s.solarParticlesGroup.rotation.z=Math.sin(t*1.5)*.25));const T=((Te=e.cfg)==null?void 0:Te.city)||gs[0],F=e.targetDistance||68,A=`${T.id||T.index}_${T.monument}_${F}`;if(s.activeLandmarkKey!==A){s.activeLandmarkKey=A;const ye=T.weatherArchetype||"urban";ye==="cyber_rain"?(s.scene.background.setHex(395550),s.scene.fog.color.setHex(923714),s.weatherMat.color.setHex(62206),s.weatherMat.size=.16):ye==="golden_embers"?(s.scene.background.setHex(1181976),s.scene.fog.color.setHex(2627372),s.weatherMat.color.setHex(16638023),s.weatherMat.size=.18):ye==="blizzard"?(s.scene.background.setHex(398118),s.scene.fog.color.setHex(1059918),s.weatherMat.color.setHex(14742270),s.weatherMat.size=.2):(s.scene.background.setHex(332068),s.scene.fog.color.setHex(664121),s.weatherMat.color.setHex(3718648),s.weatherMat.size=.14);const Me=T.accentColor?parseInt(T.accentColor.replace("#",""),16):62206,Y=T.winColor?parseInt(T.winColor.replace("#",""),16):16638023;s.landmarkAnimRefs=qE(s.landmarkGroup,s.arrivalToriiGroup,T.monument||"obelisco",Me,Y)}if(s.landmarkGroup.position.set(0,0,-F-35),s.landmarkAnimRefs){if(s.landmarkAnimRefs.londonEyeWheel&&(s.landmarkAnimRefs.londonEyeWheel.rotation.z+=u*.22),s.landmarkAnimRefs.eiffelBeacon&&(s.landmarkAnimRefs.eiffelBeacon.rotation.y+=u*1.4),s.landmarkAnimRefs.libertyTorchHalo){const ye=1+Math.sin(t*6)*.18;s.landmarkAnimRefs.libertyTorchHalo.scale.set(ye,ye,ye)}s.landmarkAnimRefs.auroraMesh&&(s.landmarkAnimRefs.auroraMesh.position.x=Math.sin(t*.9)*4.5)}const D=s.weatherGeo.attributes.position,L=D.array,k=T.weatherArchetype||"urban",b=(e.windForce||0)*(k==="blizzard"?14:9.5),I=k==="cyber_rain"?-24:k==="blizzard"?-6.5:k==="golden_embers"?2.2:-1.8;for(let ye=0;ye<s.weatherCount;ye++){const Me=ye*3;L[Me+0]+=b*u,L[Me+1]+=I*u,L[Me+0]>15?L[Me+0]-=30:L[Me+0]<-15&&(L[Me+0]+=30),I<0&&L[Me+1]<-8?L[Me+1]=14:I>0&&L[Me+1]>14&&(L[Me+1]=-8),L[Me+2]>f+8?L[Me+2]-=56:L[Me+2]<f-50&&(L[Me+2]+=56)}D.needsUpdate=!0;const z=e.poleObj||{},G=z.poleScaleX||1;s.poleGroup.scale.set(G,1,1),s.poleCoreMat.color.setHex(z.coreHex||14742270),s.poleLaserGlowMat.color.setHex(_?16638023:z.glowHex||62206),s.poleTipMat.color.setHex(z.tipHex||62206),s.poleLaserGlowMat.opacity=_?.85:.48;const W=_?1.45:1;s.poleGlowMesh.scale.set(1,W,W);const ne=!!z.hasGyroRings;s.leftGyroRing.visible=ne,s.rightGyroRing.visible=ne,ne&&(s.leftGyroRing.rotation.x=t*7.5,s.leftGyroRing.rotation.y=t*5.2,s.rightGyroRing.rotation.x=-t*7.5,s.rightGyroRing.rotation.y=-t*5.2);const H=Math.min(1,u*11),re=Math.min(1,u*7.5),fe=e.fallSequence||{active:!1},ee=y*.56+(fe.active?.22:0);s.smoothKneeFlex+=(ee-s.smoothKneeFlex)*H;const te=-Math.sin(m)*.25;s.smoothHipX+=(te-s.smoothHipX)*H;const Z=p>Zs*.75||fe.active?1:0;s.edgeSaveBlend+=(Z-s.edgeSaveBlend)*H;const U=-m*.38-Math.sin(m)*.16*(1+s.edgeSaveBlend*.45),de=-m*.32;s.smoothTorsoComp+=(U-s.smoothTorsoComp)*re,s.smoothNeckComp+=(de-s.smoothNeckComp)*re;const be=r==="menu"&&l==="skins";fe.active?(s.acrobatGroup.position.set(Math.sin(m)*.85,fe.fallY||0,f),s.acrobatGroup.rotation.z=-(fe.fallRotZ||m),s.acrobatGroup.rotation.x=fe.fallRotX||0,s.acrobatGroup.rotation.y=0):(s.acrobatGroup.position.set(0,0,f),s.acrobatGroup.rotation.z=-m*.72,s.acrobatGroup.rotation.x=0,s.acrobatGroup.rotation.y=be?Math.sin(t*1.15)*.65:0);const qe=r==="playing"&&!fe.active,je=e.walkCycle||0,$e=Math.sin(je),ce=Math.cos(je),he=qe?Math.min(.56,.34*Math.pow(S,.45)):.12,Ne=qe?Math.abs($e)*.036*Math.min(1.5,S):Math.sin(t*2.6)*.014,Qe=s.smoothKneeFlex*.22;s.upperBodyGroup.position.x=s.smoothHipX,s.upperBodyGroup.position.y=Ne-Qe;const ze=Math.sin(t*22)*s.edgeSaveBlend,dt=s.smoothKneeFlex*.95;s.leftLeg.hipGroup.position.x=-.08+s.smoothHipX*.65,s.rightLeg.hipGroup.position.x=.08+s.smoothHipX*.65,s.leftLeg.hipGroup.position.y=.88-Qe,s.rightLeg.hipGroup.position.y=.88-Qe;const en=-s.smoothHipX*.75,ht=m>0?s.edgeSaveBlend*(.28+Math.abs(ze)*.22):0,bt=m<0?-s.edgeSaveBlend*(.28+Math.abs(ze)*.22):0;s.leftLeg.hipGroup.rotation.z=en-ht,s.rightLeg.hipGroup.rotation.z=en-bt,s.leftLeg.hipGroup.rotation.x=$e*he+dt*.55+ze*.25,s.leftLeg.kneeGroup.rotation.x=-Math.max(0,ce)*(he*1.22)-dt*1.1,s.leftLeg.bootGroup.rotation.x=dt*.52,s.rightLeg.hipGroup.rotation.x=-$e*he+dt*.55-ze*.25,s.rightLeg.kneeGroup.rotation.x=-Math.max(0,-ce)*(he*1.22)-dt*1.1,s.rightLeg.bootGroup.rotation.x=dt*.52;const It=qe?Math.min(.24,(S-1)*.14):.04;s.torsoSpineGroup.rotation.z=s.smoothTorsoComp+ze*.08,s.torsoSpineGroup.rotation.x=.06+It+s.smoothKneeFlex*.18+s.edgeSaveBlend*.28,s.headGroup.rotation.z=s.smoothNeckComp,s.headGroup.rotation.x=-It*.7-s.smoothKneeFlex*.14-s.edgeSaveBlend*.2;const vt=fe.active&&fe.mode==="hook_rescue"||e.hookActive,Ct=$e*.12*S;s.leftArm.shoulderGroup.rotation.x=-Ct+ze*.55,s.rightArm.shoulderGroup.rotation.x=vt?-1.35:Ct-ze*.55,s.leftArm.shoulderGroup.rotation.z=-s.smoothTorsoComp*.4-s.edgeSaveBlend*.22,s.rightArm.shoulderGroup.rotation.z=-s.smoothTorsoComp*.4+s.edgeSaveBlend*.22,s.leftArm.elbowGroup.rotation.x=s.edgeSaveBlend*.25,s.rightArm.elbowGroup.rotation.x=(vt?1.35:0)+s.edgeSaveBlend*.25,s.poleGroup.rotation.z=-m*.42+ze*.14;const Ot=e.windForce||0,Zt=10.5*Math.min(1.6,S);s.ribbonPivot.rotation.y=-Math.PI*.5+Ot*.78+Math.sin(t*Zt)*.22,s.ribbonPivot.rotation.z=Math.cos(t*(Zt*1.15))*.16,s.ribbonJoint2.rotation.y=Math.sin(t*(Zt*1.35)-.8)*.28+Ot*.22,s.ribbonJoint3.rotation.y=Math.sin(t*(Zt*1.6)-1.6)*.34+Ot*.25,s.backlitBackdrop.position.z=f-210,s.arrivalGroup.position.set(0,0,-F-3.5);const Ft=1+Math.sin(t*5)*.08;s.beaconRingMesh.scale.set(Ft,Ft,1);for(let ye=0;ye<s.spotlightBeams.length;ye++){const Me=s.spotlightBeams[ye];Me.mesh.rotation.z=Me.baseAngle+Math.sin(t*Me.speed+Me.phaseOffset)*.14,Me.mesh.position.z>f+15?Me.mesh.position.z-=240:Me.mesh.position.z<f-235&&(Me.mesh.position.z+=240)}for(let ye=0;ye<s.skyscrapers.length;ye++){const Me=s.skyscrapers[ye];Me.position.z>f+18?Me.position.z-=286:Me.position.z<f-268&&(Me.position.z+=286)}for(let ye=0;ye<s.carMeshes.length;ye++){const Me=s.carMeshes[ye];Me.mesh.position.z+=Me.speed*u,Me.mesh.position.z>f+25?Me.mesh.position.z=f-230:Me.mesh.position.z<f-235&&(Me.mesh.position.z=f+20)}s.acrobatGroup.updateMatrixWorld(!0),s.leftArm.handMesh.getWorldPosition(s.worldLeftHand),s.rightArm.handMesh.getWorldPosition(s.worldRightHand);const Bt=s.worldLeftHand,$=s.worldRightHand;if(vt){s.grappleLaserLine.visible=!0,s.grappleBeamMesh.visible=!0,s.grappleAnchor.set(0,fe.ropeTopY||12,f-.5);const ye=s.grappleLineGeo.attributes.position.array;ye[0]=$.x,ye[1]=$.y,ye[2]=$.z,ye[3]=s.grappleAnchor.x,ye[4]=s.grappleAnchor.y,ye[5]=s.grappleAnchor.z,s.grappleLineGeo.attributes.position.needsUpdate=!0;const Me=$.distanceTo(s.grappleAnchor);s.grappleBeamMesh.position.lerpVectors($,s.grappleAnchor,.5),s.grappleBeamMesh.scale.set(1,Math.max(.1,Me),1),s.grappleBeamMesh.lookAt(s.grappleAnchor),s.grappleBeamMesh.rotateX(Math.PI/2)}else s.grappleLaserLine.visible=!1,s.grappleBeamMesh.visible=!1;const tn=e.balls||[];let Pt=!1,B=!1;for(let ye=0;ye<tn.length;ye++){const Me=tn[ye];Me.waitingCatch&&(Me.targetHand==="left"&&(Pt=!0),Me.targetHand==="right"&&(B=!0))}const w=1+(z.catchRadiusBonus||0)+(((Se=e.skinObj)==null?void 0:Se.catchWindowBonus)||0);s.leftReceiverRing.position.copy(Bt),s.rightReceiverRing.position.copy($),s.leftReceiverMat.color.setHex(Pt?16638023:M.rimHex),s.rightReceiverMat.color.setHex(B?16638023:M.rimHex);const J=(Pt?1.35:.78)*w,se=(B?1.35:.78)*w;s.leftReceiverRing.scale.set(J,J,J),s.rightReceiverRing.scale.set(se,se,se);for(let ye=0;ye<4;ye++){const Me=tn[ye],Y=s.orbMeshes[ye];if(!Me||fe.active){Y.group.visible=!1;for(let Rn=0;Rn<Y.trails.length;Rn++)Y.trails[Rn].visible=!1;continue}Y.group.visible=!0;const Oe=Me.targetHand==="right"?Bt:$,Fe=Me.targetHand==="right"?$:Bt,Et=Math.max(0,Math.min(1.05,Me.progress||0)),ot=1.48+ye%2*.22,xn=Oe.x+(Fe.x-Oe.x)*Et,fn=Oe.y+(Fe.y-Oe.y)*Et+4*ot*Et*(1-Et),An=Oe.z+(Fe.z-Oe.z)*Et-.12*Math.sin(Et*Math.PI);Y.group.position.set(xn,fn,An);const yi=Me.waitingCatch?1.28:_?1.15:1;Y.group.scale.set(yi,yi,yi);const Ci=_||M.goldTrail?.028:.036;for(let Rn=0;Rn<Y.trails.length;Rn++){const ui=Y.trails[Rn],mn=Et-(Rn+1)*Ci;if(mn<=.01){ui.visible=!1;continue}ui.visible=!0;const Pi=Oe.x+(Fe.x-Oe.x)*mn,wn=Oe.y+(Fe.y-Oe.y)*mn+4*ot*mn*(1-mn),pt=Oe.z+(Fe.z-Oe.z)*mn-.12*Math.sin(mn*Math.PI);ui.position.set(Pi,wn,pt)}}s.cyanPoleLight.position.set(0,1.35,f),s.cyanPoleLight.color.setHex(R),s.cyanPoleLight.intensity=_?6.8:4.2,s.goldOrbLight.position.set(0,2.45,f-.25);const ge=Math.min(1,(e.combo||0)/14),Ce=Math.min(1,Math.max(0,(p-Zs*.28)/(Zs*.62))),Ie=fe.active?1:Ce,Ee=(be?46:58+ge*6)*(1-Ie)+48*Ie,Ze=(be?3.25:6.2+ge*.55)*(1-Ie)+4.95*Ie,Pe=(be?2.15:3.38+ge*.16)*(1-Ie)+2.95*Ie,et=Math.min(1,u*5.5);s.dynamicFov+=(Ee-s.dynamicFov)*et,s.dynamicCamDist+=(Ze-s.dynamicCamDist)*et,s.dynamicCamY+=(Pe-s.dynamicCamY)*et,Math.abs(s.camera.fov-s.dynamicFov)>.02&&(s.camera.fov=s.dynamicFov,s.camera.updateProjectionMatrix()),s.camera.position.set(Math.sin(m)*.32,s.dynamicCamY,f+s.dynamicCamDist),fe.active?s.camera.lookAt(s.acrobatGroup.position):be?s.camera.lookAt(0,1.05,f):s.camera.lookAt(s.smoothHipX*.35,1.65-s.smoothKneeFlex*.2,f-15),s.renderer.render(s.scene,s.camera)}function JE(){try{const s=localStorage.getItem(_g);return s?JSON.parse(s):null}catch{return null}}function gg(){try{const s=localStorage.getItem("nma_profile_completed")==="true",e=(localStorage.getItem("nma_player_name")||"").trim(),t=(localStorage.getItem("nma_player_country")||"").trim();return!s||!e||e==="TÚ (Equilibrista)"||e.length<3||!t}catch{return!0}}function QE(){var si;const s=nt.useRef(JE()).current,e=nt.useRef((()=>{try{return localStorage.getItem("nma_economy_v2_migrated")==="true"}catch{return!1}})()).current,[t,r]=nt.useState((s==null?void 0:s.lang)||"es"),[o,l]=nt.useState((s==null?void 0:s.level)||1),[u,f]=nt.useState((s==null?void 0:s.maxUnlockedCity)??Math.min(19,Math.floor((((s==null?void 0:s.level)||1)-1)/5))),[m,p]=nt.useState((s==null?void 0:s.coins)??1200),[y,S]=nt.useState((s==null?void 0:s.gems)??60),[_,M]=nt.useState((s==null?void 0:s.bestScore)||0),[E,R]=nt.useState((s==null?void 0:s.leaguePoints)??320),[x,v]=nt.useState(()=>{try{const O=(localStorage.getItem("nma_player_name")||"").trim();if(O&&O!=="TÚ (Equilibrista)")return O}catch{}const h=((s==null?void 0:s.playerName)||"").trim();return h&&h!=="TÚ (Equilibrista)"?h:""}),[T,F]=nt.useState(()=>{try{const h=(localStorage.getItem("nma_player_country")||"").trim();if(h)return h}catch{}return(s==null?void 0:s.playerCountry)||"AR"}),[A,D]=nt.useState(()=>gg()),[L,k]=nt.useState(()=>{try{const h=(localStorage.getItem("nma_player_name")||"").trim();if(h&&h!=="TÚ (Equilibrista)")return h}catch{}return""}),[b,I]=nt.useState(()=>{try{const h=(localStorage.getItem("nma_player_country")||"").trim();if(h)return h}catch{}return"AR"}),[z,G]=nt.useState(!1),[W,ne]=nt.useState((s==null?void 0:s.vipPassActive)||!1),[H,re]=nt.useState(()=>{let h=[];try{const we=localStorage.getItem("nma_owned_skins");we&&(h=JSON.parse(we))}catch{}const le=[...(s==null?void 0:s.ownedSkins)||[],...(s==null?void 0:s.unlockedSkins)||[],...Array.isArray(h)?h:[],"urbano"].map(we=>Zi(we));return le.includes("urbano")||le.unshift("urbano"),Array.from(new Set(le))}),fe=re,[ee,te]=nt.useState(()=>{try{const h=localStorage.getItem("nma_equipped_skin");if(h)return Zi(h)}catch{}return Zi((s==null?void 0:s.equippedSkin)||"urbano")}),[K,Z]=nt.useState(null),[U,de]=nt.useState(null),be=nt.useRef(ee);nt.useEffect(()=>{be.current=ee,dr(ee);try{localStorage.setItem("nma_equipped_skin",ee)}catch{}},[ee]),nt.useEffect(()=>{const h=K||ee;be.current=h,dr(h)},[K,ee]);const[qe,je]=nt.useState((s==null?void 0:s.unlockedPoles)||["pole_basic"]),[$e,ce]=nt.useState((s==null?void 0:s.equippedPole)||"pole_basic"),[he,Ne]=nt.useState((s==null?void 0:s.ownedMultipliers)||[]),[Qe,ze]=nt.useState((s==null?void 0:s.unlockedVipCities)||[]),[dt,en]=nt.useState((s==null?void 0:s.activeVipCityId)||null),[ht,bt]=nt.useState((s==null?void 0:s.unlockedProps)||["balls"]),[It,vt]=nt.useState((s==null?void 0:s.equippedProp)||"balls"),[Ct,Ot]=nt.useState(()=>e?(s==null?void 0:s.gearLevels)||{pole:0,boots:0,gloves:0}:{pole:0,boots:0,gloves:0}),[Zt,Ft]=nt.useState((s==null?void 0:s.claimedTiers)||[]),[Bt,$]=nt.useState((s==null?void 0:s.soundEnabled)??!0),[tn,Pt]=nt.useState("upgrades"),[B,w]=nt.useState("home"),J=nt.useRef(B);nt.useEffect(()=>{J.current=B,B!=="skins"&&K&&(Z(null),be.current=ee)},[B,K,ee]);const[se,ge]=nt.useState("menu"),[Ce,Ie]=nt.useState(null),[xe,Ee]=nt.useState(2),[Be,Ze]=nt.useState(null),[Ue,Pe]=nt.useState(!1),[et,rt]=nt.useState([]),[ut,q]=nt.useState("live"),[Te,Se]=nt.useState({progress:0,metersRemaining:68,totalMeters:68,score:0,combo:0,frenzyActive:!1,tiltRatio:0,windForce:0,juggleAlertHands:{left:!1,right:!1},hookAvailable:!0,hookActive:!1,fallCinematicPhase:null,floatingPopups:[]}),[ye,Me]=nt.useState({coinsEarned:0,scoreEarned:0,lpEarned:0,gemsEarned:0,doubled:!1,revivedOnce:!1}),Y=d0[t]||d0.es,Oe=cf.find(h=>h.id===dt)||null,Fe=uf(o,Oe),Et=Gs(ee),ot=Gs(K||ee),xn=xg(K||ee),fn=Lc.find(h=>h.id===$e)||Lc[0],An=yl.find(h=>h.id===It)||yl[0],yi=he.reduce((h,O)=>{const le=Ic.find(we=>we.id===O);return le?Math.max(h,le.coinMult):h},1),Ci=he.reduce((h,O)=>{const le=Ic.find(we=>we.id===O);return le?Math.max(h,le.lpMult):h},1),Rn=Oe?Oe.rewardMult:1,ui=Et.bonusMult||1,mn=Number((An.mult*ui*fn.scoreMult*Ci*Rn).toFixed(2)),Pi=Number((An.mult*ui*fn.coinMult*yi*Rn).toFixed(2)),wn=Number((ui*fn.scoreMult*Ci*Rn).toFixed(2));nt.useEffect(()=>{Nt.enabled=Bt},[Bt]),nt.useEffect(()=>{const h=Math.min(19,Math.floor((o-1)/5));h>u&&f(h)},[o,u]),nt.useEffect(()=>{try{localStorage.setItem("nma_economy_v2_migrated","true"),localStorage.setItem("nma_owned_skins",JSON.stringify(H)),localStorage.setItem("nma_equipped_skin",ee),localStorage.setItem(_g,JSON.stringify({lang:t,level:o,maxUnlockedCity:Math.max(u,Math.min(19,Math.floor((o-1)/5))),coins:m,gems:y,bestScore:_,leaguePoints:E,playerName:x||"Equilibrista",playerCountry:T,vipPassActive:W,ownedSkins:H,unlockedSkins:H,equippedSkin:ee,unlockedPoles:qe,equippedPole:$e,ownedMultipliers:he,unlockedVipCities:Qe,activeVipCityId:dt,unlockedProps:ht,equippedProp:It,gearLevels:Ct,claimedTiers:Zt,soundEnabled:Bt}))}catch{}},[t,o,u,m,y,_,E,x,T,W,H,ee,qe,$e,he,Qe,dt,ht,It,Ct,Zt,Bt]);const pt=nt.useCallback(h=>{Ze(h),setTimeout(()=>{Ze(O=>O===h?null:O)},2600)},[]),ri=nt.useCallback(async()=>{const h=(x||"Equilibrista").trim(),O=await h0({name:h,country:T,score:E,level:o});rt(O)},[x,T,E,o]);nt.useEffect(()=>{ri();const h=setInterval(ri,12e3);return()=>clearInterval(h)},[ri]);const $r=nt.useCallback(async h=>{h&&h.preventDefault();const O=(L||"").trim().slice(0,15);if(O.length<3||O==="TÚ (Equilibrista)"){G(!0),Nt.playMissAlert();return}const le=b||"AR";G(!1),v(O),F(le);try{localStorage.setItem("nma_player_name",O),localStorage.setItem("nma_player_country",le),localStorage.setItem("nma_profile_completed","true")}catch{}D(!1),Nt.init(),Nt.playVictory(),pt(t==="es"?`✅ Perfil activo: ${Mo(le)} ${O}`:`✅ Profile active: ${Mo(le)} ${O}`),q("syncing"),await cl(O,le,E,o);const we=await h0({name:O,country:le,score:E,level:o});rt(we),q("live")},[L,b,E,o,t,pt]),Gi=nt.useCallback(()=>{k(x||""),I(T||"AR"),G(!1),D(!0)},[x,T]),pr=nt.useRef(null),Yn=nt.useRef(null),Hn=nt.useRef(null),Yr=nt.useRef(1),Ht=nt.useRef({running:!1,angle:0,angularVel:0,distance:0,targetDistance:68,score:0,combo:0,maxCombo:0,frenzyActive:!1,windForce:0,windTarget:0,windTimer:0,walkCycle:0,lastStepPhase:0,controlInput:0,balls:[],sparks:[],floatingPopups:[],hookAvailable:!0,hookActive:!1,hookTimer:0,freeFallShieldsRemaining:0,revivedOnce:!1,lastTimestamp:0,hudSyncTimer:0,nearMissCooldown:0,lightningFlashAlpha:0,fallSequence:{active:!1,mode:null,timer:0,fallY:0,fallVy:0,fallRotX:0,fallRotZ:0,ropeTopY:16,finalCoins:0,finalScore:0,finalLp:0,finalGems:0},cfg:null,skinObj:null,poleObj:null,propObj:null,gear:{pole:0,boots:0,gloves:0}}),kt=nt.useCallback((h,O,le="#00f2fe",we="")=>{const Ae=Yr.current++;h.floatingPopups.push({id:Ae,text:O,subtext:we,color:le,ttl:1.05}),h.floatingPopups.length>4&&h.floatingPopups.shift()},[]),Hi=nt.useCallback((h,O)=>{const le=h.ballCount,we=[O,"#00f2fe","#fde047","#f43f5e","#c084fc"],Ae=[];for(let Tt=0;Tt<le;Tt++){const zt=Tt%2===0;Ae.push({id:Tt,fromLeft:zt,targetHand:zt?"right":"left",progress:Tt/le*.72,speed:h.juggleSpeed*(.95+Tt%3*.05),color:we[Tt%we.length],waitingCatch:!1})}return Ae},[]),mr=nt.useCallback((h=!1)=>{Nt.init();const O=uf(o,Oe),le=Gs(be.current),we=Ht.current;if(we.cfg=O,we.skinObj=le,we.poleObj=fn,we.propObj=An,we.gear={...Ct},we.targetDistance=O.totalDistance,!h){we.distance=0,we.score=0,we.combo=0,we.maxCombo=0,we.frenzyActive=!1,we.hookAvailable=!0,we.revivedOnce=!1,we.floatingPopups=[];const Ae=fn.autoSaveFall?1:0,Tt=le.freeShields||0;we.freeFallShieldsRemaining=Ae+Tt}we.angle=h?0:(Math.random()-.5)*.08,we.angularVel=0,we.windForce=0,we.windTarget=(Math.random()-.5)*O.windBase*.5,we.windTimer=1.6,we.controlInput=0,we.hookActive=!1,we.hookTimer=0,we.nearMissCooldown=0,we.lightningFlashAlpha=0,we.fallSequence={active:!1,mode:null,timer:0,fallY:0,fallVy:0,fallRotX:0,fallRotZ:0,ropeTopY:16,finalCoins:0,finalScore:0,finalLp:0,finalGems:0},we.balls=Hi(O,An.color),we.sparks=[],we.lastTimestamp=performance.now(),we.running=!0,Se({progress:Math.min(100,Math.floor(we.distance/we.targetDistance*100)),metersRemaining:Math.max(0,Math.ceil(we.targetDistance-we.distance)),totalMeters:we.targetDistance,score:Math.floor(we.score),combo:we.combo,frenzyActive:we.frenzyActive,tiltRatio:0,windForce:0,juggleAlertHands:{left:!1,right:!1},hookAvailable:we.hookAvailable,hookActive:!1,fallCinematicPhase:null,floatingPopups:[]})},[o,Oe,fn,An,Ct,Hi]),Wi=()=>{if(gg()){D(!0);return}Z(null),be.current=ee,mr(!1),ge("playing")},P=()=>{se==="playing"?(Ht.current.running=!1,Nt.updateWind(0),ge("paused")):se==="paused"&&(Ht.current.lastTimestamp=performance.now(),Ht.current.running=!0,ge("playing"))},X=nt.useCallback(h=>{var Nn,ai,Si,Qt,Un;const O=Ht.current;if(!O.running||O.fallSequence.active)return;const le=Gs(be.current),we=(((Nn=O.gear)==null?void 0:Nn.gloves)||0)*.015,Ae=((ai=O.poleObj)==null?void 0:ai.catchRadiusBonus)||0,Tt=(le==null?void 0:le.catchWindowBonus)||0,zt=Math.max(.5,.74-(((Si=O.cfg)==null?void 0:Si.catchWindow)||.24)-we-(Ae+Tt)*.35);let Jt=null,gn=-1;for(const Kn of O.balls)Kn.targetHand===h&&Kn.progress>=zt&&Kn.progress>gn&&(gn=Kn.progress,Jt=Kn);if(Jt){const Kn=Jt.progress>=.85&&Jt.progress<=.96;Jt.fromLeft=h==="left",Jt.targetHand=h==="left"?"right":"left",Jt.progress=.02,Jt.waitingCatch=!1,O.combo+=1,O.combo>O.maxCombo&&(O.maxCombo=O.combo);const er=O.frenzyActive;O.frenzyActive=O.combo>=10,!er&&O.frenzyActive?(Nt.playFrenzyStart(),kt(O,t==="es"?"🔥 ¡MODO FRENESÍ x2!":"🔥 FRENZY MODE x2!","#fde047",t==="es"?"COMBO x10 ALCANZADO":"COMBO x10 REACHED")):(Nt.playCatch(O.combo,O.frenzyActive),Kn&&kt(O,t==="es"?`⚡ ¡PERFECTO! x${O.combo}`:`⚡ PERFECT! x${O.combo}`,O.frenzyActive?"#fde047":"#00f2fe"));const Ss=O.frenzyActive?2:1;if(O.score+=Math.round((28+O.combo*9)*mn*Ss),!((Qt=O.poleObj)!=null&&Qt.noCatchRecoil)){const gr=((Un=O.cfg)==null?void 0:Un.catchRecoilImpulse)??.05;O.angularVel+=(h==="left"?-1:1)*gr}for(let gr=0;gr<10;gr++)O.sparks.push({hand:h,x:(Math.random()-.5)*.25,y:(Math.random()-.5)*.25,vx:(Math.random()-.5)*3.8,vy:.9+Math.random()*2.8,vz:(Math.random()-.5)*2.8,ttl:.42,color:O.frenzyActive?"#fde047":Jt.color})}else O.angularVel+=h==="left"?-.16:.16,O.combo=0,O.frenzyActive=!1,Nt.playMissAlert()},[mn,t,kt]),me=nt.useCallback(()=>{const h=Ht.current;!h.running||!h.hookAvailable||h.fallSequence.active||(h.hookAvailable=!1,h.hookActive=!0,h.hookTimer=2.6,h.angle*=.15,h.angularVel=0,Nt.playHookRescue(),kt(h,t==="es"?"🪝 ¡GANCHO SALVAVIDAS!":"🪝 LIFELINE HOOK!","#4ade80",t==="es"?"ESTABILIDAD RESTAURADA":"STABILITY RESTORED"),pt(t==="es"?"🪝 ¡Gancho Salvavidas Activado!":"🪝 Lifeline Hook Activated!"))},[t,pt,kt]);nt.useEffect(()=>{const h=le=>{const we=Ht.current;se!=="playing"||!we.running||(le.key==="ArrowLeft"||le.key==="a"||le.key==="A"?we.controlInput=-1:le.key==="ArrowRight"||le.key==="d"||le.key==="D"?we.controlInput=1:le.key==="q"||le.key==="Q"?X("left"):le.key==="e"||le.key==="E"?X("right"):le.key===" "?(le.preventDefault(),me()):le.key==="Escape"&&P())},O=le=>{const we=Ht.current;(le.key==="ArrowLeft"||le.key==="a"||le.key==="A")&&we.controlInput<0&&(we.controlInput=0),(le.key==="ArrowRight"||le.key==="d"||le.key==="D")&&we.controlInput>0&&(we.controlInput=0)};return window.addEventListener("keydown",h),window.addEventListener("keyup",O),()=>{window.removeEventListener("keydown",h),window.removeEventListener("keyup",O)}},[se,X,me]),nt.useEffect(()=>{const h=pr.current;if(!h)return;const O=KE(h);Yn.current=O,dr(be.current,O,!1);const le=()=>{if(!h||!Yn.current)return;const we=h.clientWidth||390,Ae=h.clientHeight||844;Yn.current.camera.aspect=we/Ae,Yn.current.camera.updateProjectionMatrix(),Yn.current.renderer.setSize(we,Ae)};return window.addEventListener("resize",le),()=>{window.removeEventListener("resize",le),Nt.updateWind(0),O&&O.renderer&&O.renderer.domElement&&(h.contains(O.renderer.domElement)&&h.removeChild(O.renderer.domElement),O.renderer.dispose())}},[]),nt.useEffect(()=>{const h=Ht.current,O=Gs(be.current);h.cfg?(h.skinObj=O,h.poleObj=fn,h.propObj=An,h.gear={...Ct},!h.running&&se==="menu"&&(h.cfg=Fe,h.targetDistance=Fe.totalDistance)):(h.cfg=Fe,h.skinObj=O,h.poleObj=fn,h.propObj=An,h.gear={...Ct},h.targetDistance=Fe.totalDistance,h.balls=Hi(Fe,An.color));const le=we=>{var Jt,gn,Nn,ai,Si;const Ae=Math.min(.05,Math.max(.001,(we-(h.lastTimestamp||we))/1e3));h.lastTimestamp=we;const Tt=be.current,zt=Gs(Tt);if(h.skinObj=zt,h.floatingPopups.length>0)for(let Qt=h.floatingPopups.length-1;Qt>=0;Qt--)h.floatingPopups[Qt].ttl-=Ae,h.floatingPopups[Qt].ttl<=0&&h.floatingPopups.splice(Qt,1);if(h.lightningFlashAlpha>0&&(h.lightningFlashAlpha=Math.max(0,h.lightningFlashAlpha-Ae*2.4)),h.running&&se==="playing"){const Qt=h.cfg;if(h.fallSequence.active)if(h.fallSequence.timer+=Ae,Nt.updateWind(0),h.fallSequence.mode==="hook_rescue")if(h.fallSequence.timer<.58)h.fallSequence.fallVy-=24*Ae,h.fallSequence.fallY+=h.fallSequence.fallVy*Ae,h.fallSequence.fallRotX+=2.2*Ae,h.fallSequence.fallRotZ+=(h.angle>=0?1:-1)*2.5*Ae,h.fallSequence.ropeTopY=Math.max(h.fallSequence.fallY+1.8,16-h.fallSequence.timer*28);else if(h.fallSequence.timer<1.38){const Un=(h.fallSequence.timer-.58)/.8;h.fallSequence.fallY=ae(h.fallSequence.fallY,0,Un*.25),h.fallSequence.fallRotX=ae(h.fallSequence.fallRotX,0,Un*.3),h.fallSequence.fallRotZ=ae(h.fallSequence.fallRotZ,0,Un*.3),h.fallSequence.ropeTopY=h.fallSequence.fallY+2.2+Un*10}else h.fallSequence.active=!1,h.fallSequence.mode=null,h.fallSequence.fallY=0,h.fallSequence.fallRotX=0,h.fallSequence.fallRotZ=0,h.angle=0,h.angularVel=0,h.hookActive=!0,h.hookTimer=2,kt(h,t==="es"?"🪝 ¡RESCATE EN EL AIRE!":"🪝 MID-AIR HOOK RESCUE!","#4ade80",t==="es"?"DEVUELTO AL CABLE":"PULLED BACK TO CABLE");else h.fallSequence.mode==="gameover_fall"&&(h.fallSequence.fallVy-=28*Ae,h.fallSequence.fallY+=h.fallSequence.fallVy*Ae,h.fallSequence.fallRotX+=3.4*Ae,h.fallSequence.fallRotZ+=(h.angle>=0?1:-1)*4.2*Ae,h.fallSequence.timer>=1.5&&(h.running=!1,Me({coinsEarned:h.fallSequence.finalCoins,scoreEarned:h.fallSequence.finalScore,lpEarned:h.fallSequence.finalLp,gemsEarned:0,doubled:!1,revivedOnce:h.revivedOnce}),p(Un=>Un+h.fallSequence.finalCoins),R(Un=>{const Kn=Un+h.fallSequence.finalLp;return cl(x||"Equilibrista",T,Kn,o),Kn}),M(Un=>Math.max(Un,h.fallSequence.finalScore)),ge("gameover")));else{const Un=Math.min(.45,(h.gear.pole||0)*.048),Kn=((Jt=h.poleObj)==null?void 0:Jt.gravityReduction)||0,er=zt.gravityMod??1-(zt.gravityReduction||0),Ss=Math.max(.18,(1-Un)*(1-Kn)*er),gr=Math.min(.48,(h.gear.boots||0)*.052),Kr=zt.windResist??zt.windReduction??0,Xi=Math.max(.2,(1-gr)*(1-Kr)),Qs=Math.max(.25,1-Math.min(.75,(((gn=h.poleObj)==null?void 0:gn.stepDamp)||0)+(zt.stepDampBonus||0))),Zr=zt.recoveryBonus||0;if(h.windTimer-=Ae,h.windTimer<=0){const _t=Qt.gustInterval??1.8;h.windTimer=_t*(.75+Math.random()*.45);const cn=Math.abs(h.windTarget)>.05&&Math.random()<.72?-Math.sign(h.windTarget):Math.random()<.5?-1:1,On=(.45+Math.random()*.65)*Qt.windBase*cn;h.windTarget=On*Xi,((Nn=Qt.city)==null?void 0:Nn.weatherArchetype)==="cyber_rain"&&Math.abs(On)>.7&&Math.random()<.45&&(h.lightningFlashAlpha=.85)}h.windForce+=(h.windTarget-h.windForce)*Ae*2.8,Nt.updateWind(h.windForce),h.hookActive&&(h.hookTimer-=Ae,h.hookTimer<=0&&(h.hookActive=!1));const Nr=h.walkCycle,vr=3.2*Qt.walkSpeed;h.walkCycle+=Ae*vr;const Ms=Math.floor(Nr/Math.PI),Jr=Math.floor(h.walkCycle/Math.PI);if(Jr!==Ms){const _t=Jr%2===0?1:-1,cn=(Qt.stepSwayImpulse??.04)*Qs;h.angularVel+=_t*cn*(h.hookActive?.25:1),Nt.playFootstep(Qt.walkSpeed)}const Ir=Math.sin(h.angle)*Qt.gravity*Ss*(h.hookActive?.25:1),ea=h.windForce*.78*(h.hookActive?.2:1),_r=h.controlInput*3.15*(1+Zr),Es=Math.sin(we*.0047)*.12*Qt.walkSpeed*Qs*(h.hookActive?.2:1);h.angularVel+=(Ir+ea+_r+Es)*Ae,h.angularVel*=Math.pow(.88,Ae*60),h.angle+=h.angularVel*Ae,h.hookActive&&(h.angle*=Math.pow(.86,Ae*60)),h.nearMissCooldown>0&&(h.nearMissCooldown-=Ae);const ws=Math.abs(h.angle)/Zs;if(ws>=.78&&ws<.98&&h.nearMissCooldown<=0&&h.angle*h.controlInput<0&&Math.abs(h.controlInput)>.1){h.nearMissCooldown=2.4;const _t=Math.round(150*mn*(h.frenzyActive?2:1));h.score+=_t,Nt.playNearMiss(),kt(h,t==="es"?`⚡ ¡SALVADA AL LÍMITE! +${_t}`:`⚡ NEAR-MISS SAVE! +${_t}`,"#38bdf8",t==="es"?"RECUPERACIÓN EXTREMA":"EXTREME RECOVERY")}const Mi=Math.max(.35,1-Math.abs(h.angle)/(Zs*1.15)),Qr=4.6*Qt.walkSpeed*(.72+Mi*.38);h.distance+=Qr*Ae,h.score+=Qr*Ae*12*mn*(h.frenzyActive?2:1);const Dr={left:!1,right:!1},es=(((ai=h.gear)==null?void 0:ai.gloves)||0)*.015,ts=((Si=h.poleObj)==null?void 0:Si.catchRadiusBonus)||0,bs=zt.catchWindowBonus||0,ta=Math.max(.5,.74-Qt.catchWindow-es-(ts+bs)*.35);for(const _t of h.balls)if(_t.progress+=_t.speed*Ae,_t.progress>=ta&&_t.progress<=1.02?(Dr[_t.targetHand]=!0,_t.waitingCatch=!0):_t.waitingCatch=!1,_t.progress>1.03){_t.fromLeft=_t.targetHand==="left",_t.targetHand=_t.fromLeft?"right":"left",_t.progress=0,_t.waitingCatch=!1,h.combo=0,h.frenzyActive=!1;const cn=.24+(Qt.speedPhase||0)*.04;h.angularVel+=_t.targetHand==="left"?-cn:cn,Nt.playMissAlert(),kt(h,t==="es"?"⚠️ ¡ESFERA PERDIDA!":"⚠️ DROPPED ORB!","#ef4444")}for(let _t=h.sparks.length-1;_t>=0;_t--){const cn=h.sparks[_t];cn.ttl-=Ae,cn.ttl<=0?h.sparks.splice(_t,1):(cn.x+=cn.vx*Ae,cn.y+=cn.vy*Ae,cn.vy-=5.5*Ae)}if(Math.abs(h.angle)>=Zs)if(h.freeFallShieldsRemaining>0)h.freeFallShieldsRemaining-=1,h.angle*=.12,h.angularVel=0,h.hookActive=!0,h.hookTimer=2.2,Nt.playHookRescue(),kt(h,t==="es"?"🛡️ ¡ESCUDO ANTI-CAÍDA ACTIVADO!":"🛡️ ANTI-FALL SHIELD ACTIVATED!","#fde047",t==="es"?"PROTECCIÓN PRO / VIP":"PRO / VIP PROTECTION");else if(h.hookAvailable)h.hookAvailable=!1,h.fallSequence.active=!0,h.fallSequence.mode="hook_rescue",h.fallSequence.timer=0,h.fallSequence.fallY=0,h.fallSequence.fallVy=-3.8,h.fallSequence.fallRotX=.18,h.fallSequence.fallRotZ=h.angle*.8,h.fallSequence.ropeTopY=16,Nt.playFallScream(),setTimeout(()=>Nt.playHookRescue(),460),kt(h,t==="es"?"🪝 ¡GANCHO SALVAVIDAS!":"🪝 LIFELINE HOOK!","#4ade80");else{const _t=Math.floor(h.score),cn=Math.max(15,Math.floor((h.distance*1.4+h.maxCombo*6)*Pi)),On=Math.max(10,Math.floor((h.distance*.8+h.maxCombo*4)*wn));h.fallSequence.active=!0,h.fallSequence.mode="gameover_fall",h.fallSequence.timer=0,h.fallSequence.fallY=0,h.fallSequence.fallVy=-4.5,h.fallSequence.fallRotX=.25,h.fallSequence.fallRotZ=h.angle,h.fallSequence.finalCoins=cn,h.fallSequence.finalScore=_t,h.fallSequence.finalLp=On,Nt.updateWind(0),Nt.playFallScream()}else if(h.distance>=h.targetDistance){h.running=!1,Nt.updateWind(0),Nt.playVictory();const _t=Math.floor(h.score+500*mn),cn=Math.floor((125+o*26+h.maxCombo*12)*Pi),On=Math.floor((95+o*16+h.maxCombo*9)*wn),Ei=(Oe?Oe.gemBonus:0)+(o%5===0?12:4);Me({coinsEarned:cn,scoreEarned:_t,lpEarned:On,gemsEarned:Ei,doubled:!1,revivedOnce:h.revivedOnce}),p(Li=>Li+cn),S(Li=>Li+Ei),R(Li=>{const ns=Li+On;return cl(x||"Equilibrista",T,ns,o+1),ns}),M(Li=>Math.max(Li,_t)),f(Li=>Math.max(Li,Math.min(19,Math.floor(o/5)))),ge("victory");return}h.hudSyncTimer+=Ae,h.hudSyncTimer>=.07&&(h.hudSyncTimer=0,Se({progress:Math.min(100,Math.floor(h.distance/h.targetDistance*100)),metersRemaining:Math.max(0,Math.ceil(h.targetDistance-h.distance)),totalMeters:h.targetDistance,score:Math.floor(h.score),combo:h.combo,frenzyActive:h.frenzyActive,tiltRatio:Math.max(-1,Math.min(1,h.angle/Zs)),windForce:h.windForce,juggleAlertHands:Dr,hookAvailable:h.hookAvailable,hookActive:h.hookActive,fallCinematicPhase:h.fallSequence.mode,floatingPopups:[...h.floatingPopups]}))}h.fallSequence.active&&(h.hudSyncTimer+=Ae,h.hudSyncTimer>=.07&&(h.hudSyncTimer=0,Se(Un=>({...Un,fallCinematicPhase:h.fallSequence.mode,floatingPopups:[...h.floatingPopups]}))))}else h.walkCycle+=Ae*1.4;Yn.current&&ZE(Yn.current,h,we*.001,se,be.current,J.current),Hn.current=requestAnimationFrame(le)};return Hn.current=requestAnimationFrame(le),()=>{Hn.current&&cancelAnimationFrame(Hn.current)}},[se,Fe,fn,An,Ct,mn,Pi,wn,Oe,o,t,x,T,Hi,kt]);function ae(h,O,le){return h+(O-h)*Math.max(0,Math.min(1,le))}nt.useEffect(()=>{if(!Ce)return;Ee(2);const h=setInterval(()=>{Ee(O=>O<=1?(clearInterval(h),0):O-1)},1e3);return()=>clearInterval(h)},[Ce]);const oe=()=>{const h=Ce;if(Ie(null),h==="revive"){const O=Ht.current;O.revivedOnce=!0,O.hookAvailable=!0,mr(!0),ge("playing"),pt(t==="es"?"⚡ ¡Segunda oportunidad activada!":"⚡ Second chance activated!")}else h==="double"?ye.doubled||(p(O=>O+ye.coinsEarned),R(O=>{const le=O+ye.lpEarned;return cl(x||"Equilibrista",T,le,o),le}),Me(O=>({...O,coinsEarned:O.coinsEarned*2,lpEarned:O.lpEarned*2,doubled:!0})),pt(t==="es"?"🎬 ¡Recompensas Duplicadas x2!":"🎬 Rewards Doubled x2!")):h==="gems"?(S(O=>O+35),pt(t==="es"?"💎 +35 Gemas Gratis acreditadas":"💎 +35 Free Gems credited")):h==="coins"&&(p(O=>O+1500),pt(t==="es"?"🪙 +1.500 Monedas Gratis acreditadas":"🪙 +1,500 Free Coins credited"))},He=()=>{const h=o+1;l(h),f(O=>Math.max(O,Math.min(19,Math.floor((h-1)/5)))),setTimeout(()=>{const O=Ht.current,le=uf(h,Oe),we=Gs(be.current);O.cfg=le,O.skinObj=we,O.targetDistance=le.totalDistance,O.distance=0,O.score=0,O.combo=0,O.maxCombo=0,O.frenzyActive=!1,O.angle=0,O.angularVel=0,O.hookAvailable=!0,O.hookActive=!1,O.revivedOnce=!1;const Ae=fn.autoSaveFall?1:0,Tt=we.freeShields||0;O.freeFallShieldsRemaining=Ae+Tt,O.fallSequence.active=!1,O.fallSequence.mode=null,O.balls=Hi(le,An.color),O.lastTimestamp=performance.now(),O.running=!0,ge("playing")},30)},Ve=h=>{const O=Ct[h.id]||0,le=u0(O);if(!le.isMax)if(le.isProTier){if(W){Ot(we=>({...we,[h.id]:O+1})),Nt.playVictory(),pt(`👑 ${h.name[t]} Élite Nv.${O+1}/10 (Pase VIP)!`);return}y>=le.gemCost?(S(we=>we-le.gemCost),Ot(we=>({...we,[h.id]:O+1})),Nt.playVictory(),pt(`👑 ${h.name[t]} Élite Nv.${O+1}/10!`)):(w("store"),pt(t==="es"?`👑 Nivel Élite (6-10): Requiere ${le.gemCost} Gemas o Pase VIP Pro`:`👑 Elite Tier (6-10): Requires ${le.gemCost} Gems or VIP Pro Pass`))}else{if(m<le.coinCost){pt(t==="es"?`🪙 Necesitás ${le.coinCost.toLocaleString()} Monedas`:`🪙 Need ${le.coinCost.toLocaleString()} Coins`);return}p(we=>we-le.coinCost),Ot(we=>({...we,[h.id]:O+1})),Nt.playCatch(O+2,!1),pt(`${h.icon} ${h.name[t]} Nv.${O+1}/10!`)}},Ge=h=>{if(qe.includes(h.id)||h.isVipOnly&&W){qe.includes(h.id)||je(O=>[...O,h.id]),ce(h.id),Nt.playCatch(4,!1),pt(`${h.icon} ${h.name[t]} ${Y.equipped}`);return}h.currency==="coins"?m>=h.cost?(p(O=>O-h.cost),je(O=>[...O,h.id]),ce(h.id),Nt.playVictory(),pt(`${h.icon} ${h.name[t]}!`)):pt(t==="es"?`🪙 Necesitás ${h.cost.toLocaleString()} Monedas`:`🪙 Need ${h.cost.toLocaleString()} Coins`):y>=h.gemCost?(S(O=>O-h.gemCost),je(O=>[...O,h.id]),ce(h.id),Nt.playVictory(),pt(`👑 ${h.name[t]} Desbloqueada!`)):(w("store"),pt(t==="es"?`👑 Vara Exclusiva (${h.usdPrice||`${h.gemCost} 💎`}): Visitá la Tienda VIP`:`👑 Exclusive Pole (${h.usdPrice||`${h.gemCost} 💎`}): Visit VIP Store`))},Je=h=>{const O=Zi(h.id);if(K===O){Z(null),be.current=ee,Ht.current.skinObj=Gs(ee),dr(ee);return}be.current=O,Ht.current.skinObj=h,Z(O),dr(O),Nt.playCatch(3,!1),pt(t==="es"?`👁️ Probando en 3D: ${h.icon} ${h.name.es}`:`👁️ Trying in 3D: ${h.icon} ${h.name.en}`)},it=(h,O=!1)=>{if(!h)return;const le=Zi(h.id);O&&h.gemCost&&y>=h.gemCost&&S(Ae=>Ae-h.gemCost);const we=Array.from(new Set([...H,le]));fe(we);try{localStorage.setItem("nma_owned_skins",JSON.stringify(we)),localStorage.setItem("nma_equipped_skin",le)}catch{}Z(null),de(null),be.current=le,Ht.current.skinObj=h,te(le),dr(le),Nt.playVictory(),pt(t==="es"?`👑 ¡${h.name.es} DESBLOQUEADO Y EQUIPADO EN 3D!`:`👑 ${h.name.en} UNLOCKED & EQUIPPED IN 3D!`)},ft=h=>{const O=Zi(h.id);if(H.includes(O)||H.includes(h.legacyId)||h.isVipOnly&&W){if(!H.includes(O)){const Ae=Array.from(new Set([...H,O]));fe(Ae);try{localStorage.setItem("nma_owned_skins",JSON.stringify(Ae))}catch{}}Z(null),be.current=O,Ht.current.skinObj=h,te(O),dr(O),Nt.playCatch(5,!0),pt(`${h.icon} ${h.name[t]} — ${Y.equipped}!`);return}const we=h.price??h.cost??0;if(h.currency==="coins")if(m>=we){p(Tt=>Tt-we);const Ae=Array.from(new Set([...H,O]));fe(Ae);try{localStorage.setItem("nma_owned_skins",JSON.stringify(Ae)),localStorage.setItem("nma_equipped_skin",O)}catch{}Z(null),be.current=O,Ht.current.skinObj=h,te(O),dr(O),Nt.playVictory(),pt(`${h.icon} ${h.name[t]} ${Y.equipped}!`)}else be.current=O,Ht.current.skinObj=h,Z(O),dr(O),pt(t==="es"?`🪙 Necesitás ${we.toLocaleString()} Monedas (Probando en 3D)`:`🪙 Need ${we.toLocaleString()} Coins (Trying in 3D)`);else be.current=O,Ht.current.skinObj=h,Z(O),dr(O),de(h)},xt=h=>{if(he.includes(h.id)){pt(t==="es"?"✅ Multiplicador ya activo":"✅ Multiplier already active");return}if(h.isVipOnly&&W){Ne(O=>[...O,h.id]),Nt.playVictory(),pt(`👑 ${h.name[t]} Activado!`);return}h.currency==="coins"?m>=h.cost?(p(O=>O-h.cost),Ne(O=>[...O,h.id]),Nt.playVictory(),pt(`🚀 ${h.name[t]} Activado!`)):pt(t==="es"?`🪙 Necesitás ${h.cost.toLocaleString()} Monedas`:`🪙 Need ${h.cost.toLocaleString()} Coins`):y>=h.gemCost?(S(O=>O-h.gemCost),Ne(O=>[...O,h.id]),Nt.playVictory(),pt(`👑 ${h.name[t]} Activado!`)):(w("store"),pt(t==="es"?`👑 Multiplicador Pro (${h.usdPrice}): Requiere ${h.gemCost} 💎 o Pase VIP`:`👑 Pro Multiplier (${h.usdPrice}): Requires ${h.gemCost} 💎 or VIP Pass`))},Xe=h=>{if(ht.includes(h.id)){vt(h.id),pt(`${h.icon} ${h.name[t]} ${Y.equipped}`);return}h.currency==="coins"?m>=h.cost?(p(O=>O-h.cost),bt(O=>[...O,h.id]),vt(h.id),Nt.playVictory(),pt(`${h.icon} ${h.name[t]}!`)):pt(t==="es"?`🪙 Necesitás ${h.cost.toLocaleString()} Monedas`:`🪙 Need ${h.cost.toLocaleString()} Coins`):y>=h.cost?(S(O=>O-h.cost),bt(O=>[...O,h.id]),vt(h.id),Nt.playVictory(),pt(`${h.icon} ${h.name[t]}!`)):(w("store"),pt(t==="es"?"💎 Gemas insuficientes":"💎 Not enough gems"))},Dt=h=>{const O=Math.max(u,Math.min(19,Math.floor((o-1)/5)));if(h>O)return;const le=h*5+1;en(null),l(le),Pe(!1),pt(t==="es"?`✈️ Viajaste a ${gs[h].flag} ${gs[h].name.es} (Nivel ${le})`:`✈️ Traveled to ${gs[h].flag} ${gs[h].name.en} (Level ${le})`)},hn=h=>{if(W||Qe.includes(h.id)){en(h.id),Pe(!1),Nt.playVictory(),pt(t==="es"?`👑 Ciudad VIP Activa: ${h.flag} ${h.name.es} (x${h.rewardMult} Recompensas)`:`👑 VIP City Active: ${h.flag} ${h.name.en} (x${h.rewardMult} Rewards)`);return}y>=h.gemUnlockCost?(S(le=>le-h.gemUnlockCost),ze(le=>[...le,h.id]),en(h.id),Pe(!1),Nt.playVictory(),pt(`👑 ${h.flag} ${h.name[t]} Desbloqueada!`)):(Pe(!1),w("store"),pt(t==="es"?`🔒 Ciudad Exclusiva VIP: Desbloqueala con Pase VIP Pro o ${h.gemUnlockCost} 💎`:`🔒 Exclusive VIP City: Unlock with VIP Pro Pass or ${h.gemUnlockCost} 💎`))},sn=h=>{S(O=>O+h.gems),p(O=>O+h.coins),h.isVipPassBundle&&(ne(!0),je(O=>Array.from(new Set([...O,"pole_imperial","pole_quantum"]))),ce("pole_imperial"),re(O=>Array.from(new Set([...O,"shinobi","ronin_gold","quantum_specter","immortal_legend","leyenda_dorada"]))),Z(null),be.current="immortal_legend",te("immortal_legend"),Ne(O=>Array.from(new Set([...O,"mult_x3_pro"]))),ze(cf.map(O=>O.id))),R(O=>{const le=O+(h.leaguePts||200);return cl(x||"Equilibrista",T,le,o),le}),Nt.playVictory(),pt(h.isVipPassBundle?t==="es"?"👑 ¡PASE VIP PRO ACTIVADO! Todo el equipo Élite y Ciudades VIP desbloqueadas":"👑 VIP PRO PASS ACTIVATED! All Elite gear & VIP Cities unlocked":`👑 ${h.name[t]} (+${h.gems} 💎 / +${h.coins.toLocaleString()} 🪙)`)},qt=h=>{Zt.includes(h.id)||E<h.requiredLp||(Ft(O=>[...O,h.id]),S(O=>O+h.gemsReward),p(O=>O+h.coinsReward),Nt.playVictory(),pt(`🏆 +${h.gemsReward} 💎 & +${h.coinsReward} 🪙!`))},yn=et.length>0?et:[{id:"player_self",name:x||"Equilibrista",country:T,flag:Mo(T),score:E,lp:E,level:o,isPlayer:!0}],Ye=yn.findIndex(h=>h.isPlayer),ln=Ye>=0?Ye+1:1,Lt=Math.abs(Te.windForce)<.08?"•":Te.windForce>0?">>>":"<<<",Dn=Math.max(u,Math.min(19,Math.floor((o-1)/5))),yt=Mo(T);return N.jsx("div",{className:"app-root",children:N.jsxs("div",{className:"phone-frame",children:[N.jsx("div",{ref:pr,className:"game-canvas",style:{width:"100%",height:"100%",position:"absolute",inset:0}}),Be&&N.jsx("div",{className:"toast-banner",children:Be}),A&&N.jsx("div",{className:"modal-backdrop onboarding-backdrop",style:{zIndex:250},children:N.jsxs("form",{className:"modal-card onboarding-modal-card",onSubmit:$r,children:[N.jsx("div",{className:"onboarding-crown-badge",children:t==="es"?"🏆 LIGA MUNDIAL EN VIVO":"🏆 LIVE WORLD LEAGUE"}),N.jsx("h2",{className:"modal-title onboarding-title",children:t==="es"?"⚡ CREÁ TU PERFIL DE EQUILIBRISTA":"⚡ CREATE YOUR TIGHTROPE PROFILE"}),N.jsx("p",{className:"modal-subtitle onboarding-subtitle",children:t==="es"?"Elegí tu nombre y país para competir en el Ranking Mundial en vivo.":"Choose your name and country to compete on the Live World Leaderboard."}),N.jsxs("div",{className:"onboarding-field-group",children:[N.jsx("label",{className:"onboarding-label",htmlFor:"onboarding-name-input",children:t==="es"?"1. TU NOMBRE O APODO (3 A 15 CARACTERES)":"1. YOUR NAME OR NICKNAME (3 TO 15 CHARS)"}),N.jsx("input",{id:"onboarding-name-input",type:"text",maxLength:15,autoFocus:!0,className:`onboarding-input ${z?"input-error-shake":""}`,placeholder:t==="es"?"Tu Nombre o Apodo (Ej: Maury_AR)":"Your Nickname (e.g. Maury_AR)",value:L,onChange:h=>{k(h.target.value),z&&G(!1)}}),z&&N.jsx("div",{className:"onboarding-error-msg",children:t==="es"?"⚠️ Ingresá un nombre válido de al menos 3 caracteres.":"⚠️ Please enter a valid name of at least 3 characters."})]}),N.jsxs("div",{className:"onboarding-field-group",children:[N.jsx("label",{className:"onboarding-label",children:t==="es"?"2. SELECCIONÁ TU PAÍS / BANDERA":"2. SELECT YOUR COUNTRY / FLAG"}),N.jsx("div",{className:"onboarding-country-grid",children:E_.map(h=>{const O=b===h.code;return N.jsxs("button",{type:"button",className:`onboarding-country-chip ${O?"selected":""}`,onClick:()=>I(h.code),children:[N.jsx("span",{className:"country-chip-flag",children:h.flag}),N.jsx("span",{className:"country-chip-code",children:h.code}),N.jsx("span",{className:"country-chip-name",children:h.name})]},h.code)})})]}),N.jsx("button",{type:"submit",className:"onboarding-submit-btn",children:t==="es"?"🚀 GUARDAR Y ENTRAR A COMPETIR":"🚀 SAVE & START COMPETING"})]})}),Ue&&N.jsx("div",{className:"modal-backdrop",style:{zIndex:120},children:N.jsxs("div",{className:"modal-card",style:{maxHeight:"86%",display:"flex",flexDirection:"column",padding:"16px 14px"},children:[N.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[N.jsx("h2",{className:"modal-title",style:{fontSize:16,margin:0},children:t==="es"?"🌍 CIUDADES Y MONUMENTOS 3D":"🌍 CITIES & 3D LANDMARKS"}),N.jsx("button",{className:"hud-pause-btn",onClick:()=>Pe(!1),style:{width:30,height:30,fontSize:13},children:"✕"})]}),N.jsxs("div",{className:"items-scroll-list",style:{flex:1,overflowY:"auto",paddingRight:4},children:[N.jsx("div",{style:{fontSize:11,fontWeight:900,color:"#fde047",letterSpacing:.8,marginBottom:6,marginTop:2},children:Y.vipCitiesTitle}),cf.map(h=>{const O=W||Qe.includes(h.id),le=dt===h.id;return N.jsxs("div",{className:"item-card vip-city-card",style:{cursor:"pointer",borderColor:le?"rgba(253, 224, 71, 0.95)":"rgba(250, 204, 21, 0.45)"},onClick:()=>hn(h),children:[N.jsx("div",{className:"item-icon-box",style:{fontSize:22},children:O?h.flag:"🔒"}),N.jsxs("div",{className:"item-info",children:[N.jsxs("div",{className:"item-title",style:{color:"#fde047"},children:["👑 ",h.name[t]]}),N.jsxs("div",{className:"benefit-pill-tag pro",children:["x",h.rewardMult," 🪙/LP • +",h.gemBonus," 💎 POR CRUCE"]}),N.jsx("div",{className:"item-desc",children:h.desc[t]})]}),N.jsx("button",{className:`item-action-btn ${le?"equipped":"buy-gems"}`,children:le?t==="es"?"ACTIVA":"ACTIVE":O?t==="es"?"VIAJAR":"TRAVEL":`👑 ${h.gemUnlockCost} 💎`})]},h.id)}),N.jsx("div",{style:{fontSize:11,fontWeight:900,color:"#38bdf8",letterSpacing:.8,margin:"12px 0 6px"},children:t==="es"?"🏙️ 20 CIUDADES DEL TOUR MUNDIAL (MONUMENTOS 3D)":"🏙️ 20 WORLD TOUR CITIES (3D LANDMARKS)"}),gs.map((h,O)=>{var zt,Jt,gn,Nn;const le=O<=Dn,we=!dt&&Fe.cityIndex===O,Ae=O*5+1,Tt=O*5+5;return N.jsxs("div",{className:`item-card ${we?"selected":""}`,style:{opacity:le?1:.52,cursor:le?"pointer":"not-allowed"},onClick:()=>le&&Dt(O),children:[N.jsx("div",{className:"item-icon-box",style:{fontSize:22},children:le?h.flag:"🔒"}),N.jsxs("div",{className:"item-info",children:[N.jsxs("div",{className:"item-title",children:[O+1,". ",h.name[t]]}),N.jsxs("div",{className:"benefit-pill-tag",children:["🗿 ",((zt=h.monumentName)==null?void 0:zt[t])||((Jt=h.weatherLabel)==null?void 0:Jt[t])]}),N.jsx("div",{className:"item-desc",children:t==="es"?`Niveles ${Ae} al ${Tt} • ${(gn=h.weatherLabel)==null?void 0:gn.es}`:`Levels ${Ae} to ${Tt} • ${(Nn=h.weatherLabel)==null?void 0:Nn.en}`})]}),N.jsx("button",{className:`item-action-btn ${we?"equipped":le?"buy-coins":"locked"}`,disabled:!le,children:we?t==="es"?"ACTUAL":"ACTIVE":le?t==="es"?`NV. ${Ae}`:`LVL ${Ae}`:`🔒 NV.${Ae}`})]},h.index)})]})]})}),se==="playing"&&N.jsxs("div",{className:"gameplay-hud-layer",children:[Te.lightningFlashAlpha>.05&&N.jsx("div",{className:"weather-lightning-flash",style:{opacity:Te.lightningFlashAlpha}}),N.jsxs("div",{className:"vector-hud-top",children:[N.jsxs("div",{className:"vector-top-row",children:[N.jsxs("div",{className:"vector-city-tag",children:[N.jsxs("span",{children:[Fe.city.flag," ",Fe.city.name[t].toUpperCase()," •"," ",Oe?"👑 VIP":`${Y.level} ${o}`," • x",mn]}),N.jsxs("span",{className:"vector-meters-left",children:[Te.metersRemaining,"m / ",Te.totalMeters,"m"]})]}),N.jsx("button",{className:"hud-pause-btn",onClick:P,"aria-label":"Pause",children:"⏸"})]}),N.jsx("div",{className:"vector-progress-rail",children:N.jsx("div",{className:"vector-progress-fill",style:{width:`${Te.progress}%`}})}),N.jsxs("div",{className:"vector-Horizon-pill-row",children:[N.jsxs("div",{className:`vector-horizon-pill ${Math.abs(Te.tiltRatio)>.65?"danger":""}`,children:[N.jsx("div",{className:"vector-horizon-center-tick"}),N.jsx("div",{className:"vector-horizon-dot",style:{left:`${50+Math.max(-46,Math.min(46,Te.tiltRatio*46))}%`}})]}),N.jsxs("div",{className:"vector-wind-badge",children:["🌬️ ",Lt," ",Math.abs(Te.windForce*18).toFixed(0)," km/h"]}),N.jsxs("div",{className:`vector-score-badge ${Te.frenzyActive?"frenzy-glow":""}`,children:[Te.score.toLocaleString()," pts",Te.combo>1?` • x${Te.combo}`:"",Te.frenzyActive?" 🔥":""]})]})]}),Te.floatingPopups&&Te.floatingPopups.length>0&&N.jsx("div",{className:"floating-popups-layer",children:Te.floatingPopups.map(h=>N.jsxs("div",{className:"floating-feedback-popup",style:{color:h.color,borderColor:h.color},children:[N.jsx("div",{className:"floating-popup-main",children:h.text}),h.subtext&&N.jsx("div",{className:"floating-popup-sub",children:h.subtext})]},h.id))}),N.jsxs("div",{className:"vector-controls-layer",children:[N.jsxs("div",{className:"vector-touch-zones",children:[N.jsx("button",{className:"vector-touch-half left",onPointerDown:()=>{Ht.current.controlInput=-1},onPointerUp:()=>{Ht.current.controlInput<0&&(Ht.current.controlInput=0)},onPointerLeave:()=>{Ht.current.controlInput<0&&(Ht.current.controlInput=0)},children:N.jsxs("span",{className:"vector-corner-hint",children:["◀ ",Y.leanLeft]})}),N.jsx("button",{className:"vector-touch-half right",onPointerDown:()=>{Ht.current.controlInput=1},onPointerUp:()=>{Ht.current.controlInput>0&&(Ht.current.controlInput=0)},onPointerLeave:()=>{Ht.current.controlInput>0&&(Ht.current.controlInput=0)},children:N.jsxs("span",{className:"vector-corner-hint",children:[Y.leanRight," ▶"]})})]}),N.jsxs("div",{className:"vector-juggle-overlay-row",children:[N.jsxs("button",{className:`vector-catch-pill ${Te.juggleAlertHands.left?"ready":""}`,onPointerDown:h=>{h.stopPropagation(),X("left")},children:["✋ ",Y.leftHand]}),Te.hookAvailable&&N.jsx("button",{className:"vector-hook-pill",onPointerDown:h=>{h.stopPropagation(),me()},children:"🪝"}),N.jsxs("button",{className:`vector-catch-pill ${Te.juggleAlertHands.right?"ready":""}`,onPointerDown:h=>{h.stopPropagation(),X("right")},children:[Y.rightHand," ✋"]})]})]})]}),se==="menu"&&N.jsxs("div",{className:"menu-overlay-layer",children:[N.jsxs("div",{className:"currency-top-bar",children:[N.jsxs("div",{className:"currency-group",children:[N.jsxs("div",{className:"currency-pill coins",onClick:()=>Ie("coins"),title:Y.freeCoinsAd,children:["🪙 ",m.toLocaleString()," ",N.jsx("span",{className:"plus-badge",children:"+"})]}),N.jsxs("div",{className:"currency-pill gems",onClick:()=>Ie("gems"),title:Y.freeGemsAd,children:["💎 ",y.toLocaleString()," ",N.jsx("span",{className:"plus-badge",children:"+"})]}),N.jsxs("div",{className:"currency-pill lp",onClick:()=>w("league"),children:["🏆 #",ln]})]}),N.jsxs("div",{className:"utility-group",children:[N.jsxs("button",{className:"profile-header-badge",onClick:Gi,title:t==="es"?"Editar Perfil":"Edit Profile",children:[N.jsx("span",{children:yt}),N.jsx("span",{className:"profile-header-name",children:x||"Equilibrista"}),N.jsx("span",{className:"profile-header-edit",children:"✏️"})]}),N.jsx("button",{className:"icon-btn",onClick:()=>$(h=>!h),title:"Sound",children:Bt?"🔊":"🔇"})]})]}),N.jsxs("div",{className:"tab-content-area",children:[B==="home"&&N.jsxs("div",{className:"home-card",children:[N.jsx("div",{className:"brand-header",children:N.jsxs("div",{className:"cover-hero-banner",children:[N.jsx("img",{src:"/cashkillers/icon.jpg",alt:"NO MIRES ABAJO Portada Oficial",className:"cover-hero-img"}),N.jsxs("div",{className:"cover-hero-overlay",children:[N.jsx("span",{className:"official-badge",children:W?"👑 PASE VIP PRO ACTIVO":Y.officialEdition}),N.jsx("h1",{className:"game-logo-title",children:Y.title}),N.jsxs("p",{className:"game-logo-sub",children:["🗿 ",((si=Fe.city.monumentName)==null?void 0:si[t])||Y.subtitle]})]})]})}),N.jsxs("div",{className:"city-campaign-card",onClick:()=>Pe(!0),style:{cursor:"pointer"},children:[N.jsx("div",{className:"city-flag-circle",children:Fe.city.flag}),N.jsxs("div",{className:"city-details",children:[N.jsxs("div",{className:"city-stage-tag",children:[Oe?`👑 CIUDAD VIP (x${Oe.rewardMult} PAGO)`:`${Y.worldTour} • ${Y.city} ${Fe.cityIndex+1}/20`," ",N.jsx("span",{style:{color:"#fde047",marginLeft:6,textDecoration:"underline",fontSize:"10px"},children:t==="es"?"(Cambiar 🌍)":"(Change 🌍)"})]}),N.jsx("div",{className:"city-title-text",children:Fe.city.name[t]}),N.jsxs("div",{className:"city-level-sub",children:[Y.level," ",o," • ",Et.icon," ",Et.name[t]]})]}),N.jsxs("div",{className:"multiplier-chip",children:["x",mn]})]}),N.jsxs("div",{className:"quick-stats-grid",children:[N.jsxs("div",{className:"stat-box",children:[N.jsx("span",{className:"stat-lbl",children:Y.bestScore}),N.jsx("span",{className:"stat-val",children:_.toLocaleString()})]}),N.jsxs("div",{className:"stat-box",children:[N.jsx("span",{className:"stat-lbl",children:t==="es"?"MULTI TOTAL ACTIVO":"ACTIVE TOTAL MULTI"}),N.jsxs("span",{className:"stat-val gold",children:["x",mn," PTS / x",Pi," 🪙"]})]})]}),N.jsxs("button",{className:"play-cta-button",onClick:Wi,children:[N.jsx("span",{className:"play-icon",children:"▶"})," ",Y.playNow," (",Y.level," ",o,")"]}),N.jsxs("div",{className:"reward-ads-row",children:[N.jsxs("button",{className:"ad-reward-btn coins",onClick:()=>Ie("coins"),children:["🎬 ",Y.freeCoinsAd]}),N.jsxs("button",{className:"ad-reward-btn gems",onClick:()=>Ie("gems"),children:["🎬 ",Y.freeGemsAd]})]})]}),B==="armory"&&N.jsxs("div",{className:"panel-card",children:[N.jsxs("h2",{className:"panel-heading",children:["⚙️ ",Y.armoryTitle]}),N.jsxs("div",{className:"section-sub-tabs",children:[N.jsx("button",{className:`sub-tab-btn ${tn==="upgrades"?"active":""}`,onClick:()=>Pt("upgrades"),children:t==="es"?"⚙️ MEJORAS (1-10)":"⚙️ UPGRADES (1-10)"}),N.jsx("button",{className:`sub-tab-btn ${tn==="poles"?"active":""}`,onClick:()=>Pt("poles"),children:t==="es"?"⚖️ VARAS 3D (5)":"⚖️ 3D POLES (5)"}),N.jsx("button",{className:`sub-tab-btn ${tn==="multipliers"?"active":""}`,onClick:()=>Pt("multipliers"),children:t==="es"?"🚀 MULTIPLICADORES":"🚀 MULTIPLIERS"})]}),N.jsxs("div",{className:"items-scroll-list",children:[tn==="upgrades"&&N.jsxs(N.Fragment,{children:[v_.map(h=>{const O=Ct[h.id]||0,le=u0(O);return N.jsxs("div",{className:"item-card",children:[N.jsx("div",{className:"item-icon-box",children:h.icon}),N.jsxs("div",{className:"item-info",children:[N.jsxs("div",{className:"item-title",children:[h.name[t]," ",N.jsxs("span",{className:"lvl-pill",children:["Nv. ",O,"/10"]})]}),N.jsx("div",{className:`benefit-pill-tag ${le.isProTier?"pro":""}`,children:le.isProTier?t==="es"?"👑 TRAMO ÉLITE PRO (NV. 6 A 10)":"👑 PRO ELITE TIER (LVL 6 TO 10)":h.statLabel[t]}),N.jsx("div",{className:"item-desc",children:h.desc[t]}),N.jsx("div",{className:"armory-level-bar",children:Array.from({length:10}).map((we,Ae)=>N.jsx("span",{className:`armory-pip ${Ae>=5?"pro-pip":""} ${Ae<O?"filled":""}`},Ae))})]}),N.jsx("button",{className:`item-action-btn ${le.isMax?"equipped":le.isProTier?"buy-gems":"buy-coins"}`,disabled:le.isMax,onClick:()=>Ve(h),children:le.isMax?Y.maxLevel:le.isProTier?W?"👑 VIP GRATIS":`👑 PRO ${le.gemCost} 💎`:`🪙 ${le.coinCost.toLocaleString()}`})]},h.id)}),N.jsxs("h3",{className:"sub-section-title",children:["🎪 ",Y.propsTitle]}),yl.map(h=>{const O=ht.includes(h.id),le=It===h.id;return N.jsxs("div",{className:`item-card ${le?"selected":""}`,children:[N.jsx("div",{className:"item-icon-box",children:h.icon}),N.jsxs("div",{className:"item-info",children:[N.jsx("div",{className:"item-title",children:h.name[t]}),N.jsxs("div",{className:"item-desc",children:["Multiplicador Base x",h.mult]})]}),N.jsx("button",{className:`item-action-btn ${le?"equipped":O?"equip":h.currency==="gems"?"buy-gems":"buy-coins"}`,onClick:()=>Xe(h),children:le?Y.equipped:O?Y.equip:h.currency==="gems"?`💎 ${h.cost}`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)})]}),tn==="poles"&&Lc.map(h=>{const O=qe.includes(h.id)||h.isVipOnly&&W,le=$e===h.id;return N.jsxs("div",{className:`item-card ${le?"selected":""} ${h.isPro?"vip-city-card":""}`,children:[N.jsx("div",{className:"item-icon-box",children:h.icon}),N.jsxs("div",{className:"item-info",children:[N.jsx("div",{className:"item-title",children:h.name[t]}),N.jsx("div",{className:`benefit-pill-tag ${h.isPro?"pro":""}`,children:h.badge[t]}),N.jsx("div",{className:"item-desc",children:h.desc[t]})]}),N.jsx("button",{className:`item-action-btn ${le?"equipped":O?"equip":h.isPro?"buy-gems":"buy-coins"}`,onClick:()=>Ge(h),children:le?Y.equipped:O?Y.equip:h.isPro?`👑 ${h.gemCost} 💎`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)}),tn==="multipliers"&&Ic.map(h=>{const O=he.includes(h.id)||h.isVipOnly&&W;return N.jsxs("div",{className:`item-card ${O?"selected":""} ${h.isPro?"vip-city-card":""}`,children:[N.jsx("div",{className:"item-icon-box",children:h.icon}),N.jsxs("div",{className:"item-info",children:[N.jsx("div",{className:"item-title",children:h.name[t]}),N.jsx("div",{className:`benefit-pill-tag ${h.isPro?"pro":""}`,children:h.badge[t]}),N.jsx("div",{className:"item-desc",children:h.desc[t]})]}),N.jsx("button",{className:`item-action-btn ${O?"equipped":h.isPro?"buy-gems":"buy-coins"}`,onClick:()=>xt(h),children:O?t==="es"?"ACTIVO":"ACTIVE":h.isPro?`👑 ${h.gemCost} 💎`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)})]})]}),B==="skins"&&N.jsxs("div",{className:"panel-card skins-panel-card",children:[N.jsxs("h2",{className:"panel-heading",children:["🎭 ",Y.skinsTitle]}),N.jsxs("div",{className:"skin-3d-live-window",children:[N.jsxs("div",{className:"skin-live-top-tag",children:[N.jsxs("span",{children:["🎥"," ",K?t==="es"?"VISTA PREVIA 3D ACTIVA":"3D PREVIEW ACTIVE":t==="es"?"VISTA 3D EN TIEMPO REAL":"LIVE 3D PREVIEW"]}),N.jsxs("span",{className:"skin-live-mult-chip",children:[ot.icon," ",xn.multLabel," (TOTAL x",mn,")"]})]}),N.jsxs("div",{className:"skin-live-bottom-bar",children:[N.jsxs("span",{children:[ot.name[t],K?t==="es"?" (PROBANDO)":" (PREVIEW)":""]}),N.jsx("span",{style:{display:"inline-flex",alignItems:"center",gap:4},children:(xn.paletteSwatches||[]).map((h,O)=>N.jsx("span",{className:"palette-swatch-dot",style:{backgroundColor:h}},O))})]})]}),N.jsxs("div",{className:"items-scroll-list",children:[To.filter(h=>!h.isPro).map(h=>{var zt;const O=Zi(h.id),le=H.includes(O)||H.includes(h.legacyId),we=Zi(ee)===O&&!K,Ae=K===O,Tt=h.visual||Nc[O]||Nc.urbano;return N.jsxs("div",{className:`item-card ${we||Ae?"selected":""}`,children:[N.jsx("div",{className:"item-icon-box",style:{background:`linear-gradient(135deg, ${h.hoodieColor}, ${h.trimColor})`,border:`1.5px solid ${h.trimColor}`},children:h.icon}),N.jsxs("div",{className:"item-info",children:[N.jsx("div",{className:"item-title",children:h.name[t]}),N.jsxs("div",{className:"skin-palette-preview-badge",children:[(Tt.paletteSwatches||[]).map((Jt,gn)=>N.jsx("span",{className:"palette-swatch-dot",style:{backgroundColor:Jt}},gn)),N.jsxs("span",{className:"palette-label-text",children:[((zt=Tt.paletteLabel)==null?void 0:zt[t])||Tt.multLabel," • ",Tt.multLabel]})]}),N.jsx("div",{className:"benefit-pill-tag",children:h.badge[t]}),N.jsx("div",{className:"item-desc",children:h.desc[t]})]}),N.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:5,alignItems:"flex-end"},children:[!we&&N.jsx("button",{type:"button",className:"item-action-btn equip",style:{fontSize:"0.62rem",padding:"4px 8px",background:Ae?"linear-gradient(135deg, #00f2fe, #0284c7)":"rgba(15, 23, 42, 0.85)",color:Ae?"#04121d":"#bae6fd",border:"1px solid rgba(56, 189, 248, 0.55)"},onClick:()=>Je(h),children:Ae?t==="es"?"👁️ PROBANDO":"👁️ TRYING":t==="es"?"👁️ PROBAR":"👁️ TRY"}),N.jsx("button",{className:`item-action-btn ${we?"equipped":le?"equip":"buy-coins"}`,onClick:()=>ft(h),children:we?Y.equipped:le?Y.equip:`🪙 ${(h.price??h.cost??0).toLocaleString()}`})]})]},h.id)}),N.jsxs("h3",{className:"sub-section-title",style:{color:"#fbbf24",borderColor:"rgba(251, 191, 36, 0.45)",marginTop:14},children:["👑"," ",t==="es"?"ASPECTOS ÉLITE (EXCLUSIVOS PRO)":"ELITE SKINS (PRO EXCLUSIVE)"]}),To.filter(h=>h.isPro).map(h=>{var zt;const O=Zi(h.id),le=H.includes(O)||H.includes(h.legacyId)||h.isVipOnly&&W,we=Zi(ee)===O&&!K,Ae=K===O,Tt=h.visual||Nc[O]||Nc.urbano;return N.jsxs("div",{className:`item-card vip-city-card ${we||Ae?"selected":""}`,children:[N.jsx("div",{className:"item-icon-box",style:{background:`linear-gradient(135deg, ${h.hoodieColor}, ${h.trimColor})`,border:`1.5px solid ${h.trimColor}`,boxShadow:`0 0 12px ${h.trimColor}55`},children:h.icon}),N.jsxs("div",{className:"item-info",children:[N.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"},children:[N.jsx("span",{className:"item-title",children:h.name[t]}),N.jsx("span",{style:{fontSize:"0.58rem",fontWeight:900,padding:"2px 6px",borderRadius:999,background:"linear-gradient(135deg, #f59e0b, #fbbf24)",color:"#1e1b4b",letterSpacing:"0.04em"},children:h.proTag?h.proTag[t]:"👑 EXCLUSIVO PRO"})]}),N.jsxs("div",{className:"skin-palette-preview-badge",children:[(Tt.paletteSwatches||[]).map((Jt,gn)=>N.jsx("span",{className:"palette-swatch-dot",style:{backgroundColor:Jt}},gn)),N.jsxs("span",{className:"palette-label-text",children:[((zt=Tt.paletteLabel)==null?void 0:zt[t])||Tt.multLabel," • ",Tt.multLabel]})]}),N.jsx("div",{className:"benefit-pill-tag pro",children:h.badge[t]}),N.jsx("div",{className:"item-desc",children:h.desc[t]})]}),N.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:5,alignItems:"flex-end"},children:[!we&&N.jsx("button",{type:"button",className:"item-action-btn equip",style:{fontSize:"0.62rem",padding:"4px 8px",background:Ae?"linear-gradient(135deg, #fbbf24, #f59e0b)":"rgba(15, 23, 42, 0.88)",color:Ae?"#1e1b4b":"#fde68a",border:"1px solid rgba(251, 191, 36, 0.6)"},onClick:()=>Je(h),children:Ae?t==="es"?"👁️ PROBANDO":"👁️ TRYING":t==="es"?"👁️ PROBAR":"👁️ TRY"}),N.jsx("button",{className:`item-action-btn ${we?"equipped":le?"equip":"buy-gems"}`,onClick:()=>ft(h),children:we?Y.equipped:le?Y.equip:`👑 ${h.priceUSD||h.usdPrice||`${h.gemCost} 💎`}`})]})]},h.id)}),N.jsx("h3",{className:"sub-section-title",children:Y.polesTitle}),Lc.map(h=>{const O=qe.includes(h.id)||h.isVipOnly&&W,le=$e===h.id;return N.jsxs("div",{className:`item-card ${le?"selected":""} ${h.isPro?"vip-city-card":""}`,children:[N.jsx("div",{className:"item-icon-box",children:h.icon}),N.jsxs("div",{className:"item-info",children:[N.jsx("div",{className:"item-title",children:h.name[t]}),N.jsx("div",{className:`benefit-pill-tag ${h.isPro?"pro":""}`,children:h.badge[t]}),N.jsx("div",{className:"item-desc",children:h.desc[t]})]}),N.jsx("button",{className:`item-action-btn ${le?"equipped":O?"equip":h.isPro?"buy-gems":"buy-coins"}`,onClick:()=>Ge(h),children:le?Y.equipped:O?Y.equip:h.isPro?`👑 ${h.gemCost} 💎`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)})]})]}),B==="league"&&N.jsxs("div",{className:"panel-card",children:[N.jsxs("div",{className:"league-banner-top",children:[N.jsxs("div",{children:[N.jsxs("div",{className:"season-chip",children:[Y.seasonTitle," ",N.jsxs("span",{style:{color:"#4ade80",marginLeft:6},children:["● ",ut==="syncing"?"SYNC...":"ONLINE LIVE"]})]}),N.jsx("h2",{className:"panel-heading",children:Y.leagueTitle})]}),N.jsxs("div",{className:"rank-badge-large",children:["#",ln]})]}),N.jsxs("div",{className:"player-name-bar",children:[N.jsxs("div",{className:"profile-active-summary",children:[N.jsx("span",{className:"profile-flag-big",children:yt}),N.jsxs("div",{className:"profile-text-col",children:[N.jsx("span",{className:"profile-label-mini",children:t==="es"?"COMPETIDOR OFICIAL":"OFFICIAL COMPETITOR"}),N.jsx("span",{className:"profile-name-strong",children:x||"Equilibrista"})]})]}),N.jsxs("button",{type:"button",className:"edit-profile-pill-btn",onClick:Gi,children:["✏️ ",t==="es"?"Editar Perfil":"Edit Profile"]})]}),N.jsxs("div",{className:"items-scroll-list",children:[N.jsx("div",{className:"leaderboard-box",children:yn.map((h,O)=>N.jsxs("div",{className:`leader-row ${h.isPlayer?"is-player":""}`,children:[N.jsx("span",{className:"leader-pos",children:O===0?"🥇":O===1?"🥈":O===2?"🥉":`#${O+1}`}),N.jsx("span",{className:"leader-flag",children:h.flag}),N.jsxs("span",{className:"leader-name",children:[h.name,h.isPlayer?t==="es"?" (TÚ)":" (YOU)":""]}),N.jsxs("span",{className:"leader-lp",children:[(h.lp??h.score??0).toLocaleString()," LP"]})]},h.id))}),N.jsxs("h3",{className:"sub-section-title",children:["🎁 ",Y.seasonPrizes]}),x_.map(h=>{const O=Zt.includes(h.id),le=!O&&E>=h.requiredLp;return N.jsxs("div",{className:"item-card",children:[N.jsx("div",{className:"item-icon-box",children:h.icon}),N.jsxs("div",{className:"item-info",children:[N.jsxs("div",{className:"item-title",children:[h.rankLabel," • ",h.title[t]]}),N.jsxs("div",{className:"item-desc",children:[h.requiredLp.toLocaleString()," LP → +",h.gemsReward," ","💎 & +",h.coinsReward.toLocaleString()," 🪙"]})]}),N.jsx("button",{className:`item-action-btn ${O?"equipped":le?"buy-coins":"locked"}`,disabled:!le,onClick:()=>qt(h),children:O?Y.claimed:le?Y.claim:`${h.requiredLp} LP`})]},h.id)})]})]}),B==="store"&&N.jsxs("div",{className:"panel-card",children:[N.jsxs("h2",{className:"panel-heading",children:["💎 ",Y.storeTitle]}),N.jsx("p",{className:"panel-sub",children:Y.storeSubtitle}),N.jsxs("div",{className:"items-scroll-list",children:[y_.map(h=>N.jsxs("div",{className:"vip-bundle-card",children:[N.jsxs("div",{className:"vip-bundle-header",children:[N.jsx("span",{className:"vip-icon",children:h.icon}),N.jsxs("div",{children:[N.jsx("div",{className:"vip-title",children:h.name[t]}),N.jsxs("div",{className:"vip-rewards-inline",children:["+",h.gems," 💎 • +",h.coins.toLocaleString()," 🪙"]})]}),N.jsx("button",{className:"vip-buy-btn",onClick:()=>sn(h),children:h.isVipPassBundle&&W?"👑 VIP ACTIVO (+BONO)":h.tag})]}),N.jsx("ul",{className:"vip-perk-list",children:h.perks[t].map((O,le)=>N.jsxs("li",{children:["✓ ",O]},le))})]},h.id)),N.jsx("h3",{className:"sub-section-title",children:Y.multipliersTitle}),Ic.map(h=>{const O=he.includes(h.id)||h.isVipOnly&&W;return N.jsxs("div",{className:`item-card ${O?"selected":""} ${h.isPro?"vip-city-card":""}`,children:[N.jsx("div",{className:"item-icon-box",children:h.icon}),N.jsxs("div",{className:"item-info",children:[N.jsx("div",{className:"item-title",children:h.name[t]}),N.jsx("div",{className:`benefit-pill-tag ${h.isPro?"pro":""}`,children:h.badge[t]}),N.jsx("div",{className:"item-desc",children:h.desc[t]})]}),N.jsx("button",{className:`item-action-btn ${O?"equipped":h.isPro?"buy-gems":"buy-coins"}`,onClick:()=>xt(h),children:O?t==="es"?"ACTIVO":"ACTIVE":h.isPro?`👑 ${h.gemCost} 💎`:`🪙 ${h.cost.toLocaleString()}`})]},h.id)})]})]})]}),N.jsxs("nav",{className:"bottom-tab-nav",children:[N.jsxs("button",{className:`nav-tab-btn ${B==="home"?"active":""}`,onClick:()=>w("home"),children:[N.jsx("span",{className:"nav-ic",children:"🏙️"}),N.jsx("span",{children:Y.tabs.home})]}),N.jsxs("button",{className:`nav-tab-btn ${B==="armory"?"active":""}`,onClick:()=>w("armory"),children:[N.jsx("span",{className:"nav-ic",children:"⚖️"}),N.jsx("span",{children:Y.tabs.armory})]}),N.jsxs("button",{className:`nav-tab-btn ${B==="skins"?"active":""}`,onClick:()=>w("skins"),children:[N.jsx("span",{className:"nav-ic",children:"🎭"}),N.jsx("span",{children:Y.tabs.skins})]}),N.jsxs("button",{className:`nav-tab-btn ${B==="league"?"active":""}`,onClick:()=>w("league"),children:[N.jsx("span",{className:"nav-ic",children:"🏆"}),N.jsx("span",{children:Y.tabs.league})]}),N.jsxs("button",{className:`nav-tab-btn ${B==="store"?"active":""}`,onClick:()=>w("store"),children:[N.jsx("span",{className:"nav-ic",children:"💎"}),N.jsx("span",{children:Y.tabs.store})]})]})]}),se==="paused"&&N.jsx("div",{className:"modal-backdrop",children:N.jsxs("div",{className:"modal-card",children:[N.jsxs("h2",{className:"modal-title",children:["⏸ ",Y.pause]}),N.jsxs("p",{className:"modal-subtitle",children:[Fe.city.flag," ",Fe.city.name[t]," — ",Y.level," ",o]}),N.jsxs("button",{className:"pause-action-btn primary",onClick:P,children:["▶ ",Y.resume]}),N.jsxs("button",{className:"pause-action-btn secondary",onClick:()=>{Ht.current.running=!1,Nt.updateWind(0),ge("menu")},children:["🏠 ",Y.backToMenu]})]})}),se==="victory"&&N.jsx("div",{className:"modal-backdrop",children:N.jsxs("div",{className:"modal-card victory",children:[N.jsx("div",{className:"modal-Cover-icon-wrap",children:N.jsx("img",{src:"/cashkillers/icon.jpg",alt:"NO MIRES ABAJO",className:"modal-cover-thumb"})}),N.jsx("h2",{className:"modal-title",children:Y.victoryTitle}),N.jsxs("p",{className:"modal-subtitle",children:[Fe.city.flag," ",Fe.city.name[t]," • ",Y.level," ",o]}),N.jsxs("div",{className:"rewards-summary-box",children:[N.jsxs("div",{className:"reward-line",children:[N.jsx("span",{children:Y.score}),N.jsx("strong",{children:ye.scoreEarned.toLocaleString()})]}),N.jsxs("div",{className:"reward-line gold",children:[N.jsx("span",{children:Y.coinsEarned}),N.jsxs("strong",{children:["+",ye.coinsEarned.toLocaleString()," 🪙"]})]}),ye.gemsEarned>0&&N.jsxs("div",{className:"reward-line cyan",children:[N.jsx("span",{children:t==="es"?"Gemas Ganadas":"Gems Earned"}),N.jsxs("strong",{children:["+",ye.gemsEarned," 💎"]})]}),N.jsxs("div",{className:"reward-line cyan",children:[N.jsx("span",{children:Y.leaguePointsEarned}),N.jsxs("strong",{children:["+",ye.lpEarned," 🏆"]})]})]}),!ye.doubled&&N.jsx("button",{className:"pause-action-btn ad-gold",onClick:()=>Ie("double"),children:Y.doubleRewardsAd}),N.jsxs("button",{className:"pause-action-btn primary",onClick:He,children:[Y.nextLevel," (",Y.level," ",o+1,") ➔"]}),N.jsxs("button",{className:"pause-action-btn secondary",onClick:()=>ge("menu"),children:["🏠 ",Y.backToMenu]})]})}),se==="gameover"&&N.jsx("div",{className:"modal-backdrop",children:N.jsxs("div",{className:"modal-card gameover",children:[N.jsx("div",{className:"modal-Cover-icon-wrap",children:N.jsx("img",{src:"/cashkillers/icon.jpg",alt:"NO MIRES ABAJO",className:"modal-cover-thumb"})}),N.jsx("h2",{className:"modal-title",children:Y.fallTitle}),N.jsx("p",{className:"modal-subtitle",children:Y.fallSub}),N.jsxs("div",{className:"rewards-summary-box",children:[N.jsxs("div",{className:"reward-line",children:[N.jsx("span",{children:Y.score}),N.jsx("strong",{children:ye.scoreEarned.toLocaleString()})]}),N.jsxs("div",{className:"reward-line gold",children:[N.jsx("span",{children:Y.coinsEarned}),N.jsxs("strong",{children:["+",ye.coinsEarned.toLocaleString()," 🪙"]})]}),N.jsxs("div",{className:"reward-line cyan",children:[N.jsx("span",{children:Y.leaguePointsEarned}),N.jsxs("strong",{children:["+",ye.lpEarned," 🏆"]})]})]}),!ye.revivedOnce&&N.jsx("button",{className:"pause-action-btn ad-gold",onClick:()=>Ie("revive"),children:Y.reviveAd}),N.jsxs("button",{className:"pause-action-btn primary",onClick:Wi,children:["🔄 ",Y.retry]}),N.jsxs("button",{className:"pause-action-btn secondary",onClick:()=>ge("menu"),children:["🏠 ",Y.backToMenu]})]})}),U&&N.jsx("div",{className:"modal-backdrop ad-layer",children:N.jsxs("div",{className:"modal-card",style:{border:"1.5px solid rgba(251, 191, 36, 0.75)",boxShadow:"0 0 36px rgba(245, 158, 11, 0.35)",maxWidth:365},children:[N.jsx("div",{style:{fontSize:"2.35rem",marginBottom:4,filter:"drop-shadow(0 0 12px rgba(251, 191, 36, 0.7))"},children:U.icon}),N.jsx("span",{style:{display:"inline-block",fontSize:"0.64rem",fontWeight:900,padding:"3px 10px",borderRadius:999,background:"linear-gradient(135deg, #f59e0b, #fbbf24)",color:"#1e1b4b",letterSpacing:"0.06em",marginBottom:8},children:t==="es"?"👑 PASARELA VIP • ASPECTO ÉLITE PRO":"👑 VIP CHECKOUT • ELITE PRO SKIN"}),N.jsx("h2",{className:"modal-title",style:{fontSize:"1.15rem",marginBottom:4},children:U.name[t]}),N.jsx("p",{className:"modal-subtitle",style:{fontSize:"0.78rem",marginBottom:10},children:U.desc[t]}),N.jsxs("div",{className:"rewards-summary-box",style:{marginBottom:12},children:[N.jsxs("div",{className:"reward-line gold",children:[N.jsx("span",{children:t==="es"?"Multiplicador Activo":"Active Multiplier"}),N.jsxs("strong",{children:["x",U.mult||U.bonusMult," LP & 🪙"]})]}),N.jsxs("div",{className:"reward-line cyan",children:[N.jsx("span",{children:t==="es"?"Resistencia al Viento":"Wind Resistance"}),N.jsxs("strong",{children:["-",Math.round((U.windResist||U.windReduction||0)*100),"%"]})]}),N.jsxs("div",{className:"reward-line cyan",children:[N.jsx("span",{children:t==="es"?"Estabilidad sobre el Cable":"Cable Stability"}),N.jsxs("strong",{children:["+",Math.round((1-(U.gravityMod??1))*100),"%"]})]}),N.jsxs("div",{className:"reward-line",children:[N.jsx("span",{children:t==="es"?"Ventana Imán Malabares":"Juggle Magnet Window"}),N.jsxs("strong",{children:["+",Math.round(((U.catchBonus||1)-1)*100),"%"]})]}),(U.freeShields||0)>0&&N.jsxs("div",{className:"reward-line gold",children:[N.jsx("span",{children:t==="es"?"Escudo Anti-Caída Gratis":"Free Anti-Fall Shield"}),N.jsxs("strong",{children:["+",U.freeShields," / ",t==="es"?"Nivel":"Level"," 🛡️"]})]})]}),N.jsx("button",{className:"pause-action-btn ad-gold",style:{marginBottom:8,fontWeight:900},onClick:()=>it(U,!1),children:t==="es"?`✅ CONFIRMAR Y EQUIPAR (${U.priceUSD||U.usdPrice})`:`✅ CONFIRM & EQUIP (${U.priceUSD||U.usdPrice})`}),U.gemCost&&y>=U.gemCost&&N.jsx("button",{className:"pause-action-btn primary",style:{marginBottom:8},onClick:()=>it(U,!0),children:t==="es"?`💎 CANJEAR CON ${U.gemCost} GEMAS Y EQUIPAR`:`💎 REDEEM WITH ${U.gemCost} GEMS & EQUIP`}),N.jsx("button",{className:"pause-action-btn secondary",onClick:()=>de(null),children:t==="es"?"Seguir Probando en 3D":"Keep Trying in 3D"})]})}),Ce&&N.jsx("div",{className:"modal-backdrop ad-layer",children:N.jsxs("div",{className:"modal-card",children:[N.jsx("div",{className:"modal-big-icon",children:"🎬"}),N.jsx("h2",{className:"modal-title",children:Y.adWatching}),N.jsx("p",{className:"modal-subtitle",children:xe>0?`${Y.adSeconds} ${xe}s...`:"✅ ¡Listo!"}),N.jsx("button",{className:"pause-action-btn primary",disabled:xe>0,onClick:oe,children:xe>0?`${xe}s`:Y.adCollect})]})})]})})}p_.createRoot(document.getElementById("root")).render(N.jsx(o_.StrictMode,{children:N.jsx(QE,{})}));
