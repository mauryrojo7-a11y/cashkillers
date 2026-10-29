(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function _g(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Gu={exports:{}},Qa={},Vu={exports:{}},Ot={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am;function Bv(){if(am)return Ot;am=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function g(D){return D===null||typeof D!="object"?null:(D=S&&D[S]||D["@@iterator"],typeof D=="function"?D:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,R={};function x(D,le,Ee){this.props=D,this.context=le,this.refs=R,this.updater=Ee||M}x.prototype.isReactComponent={},x.prototype.setState=function(D,le){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,le,"setState")},x.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function _(){}_.prototype=x.prototype;function N(D,le,Ee){this.props=D,this.context=le,this.refs=R,this.updater=Ee||M}var W=N.prototype=new _;W.constructor=N,w(W,x.prototype),W.isPureReactComponent=!0;var C=Array.isArray,I=Object.prototype.hasOwnProperty,L={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function E(D,le,Ee){var Ze,Xe={},qe=null,oe=null;if(le!=null)for(Ze in le.ref!==void 0&&(oe=le.ref),le.key!==void 0&&(qe=""+le.key),le)I.call(le,Ze)&&!k.hasOwnProperty(Ze)&&(Xe[Ze]=le[Ze]);var he=arguments.length-2;if(he===1)Xe.children=Ee;else if(1<he){for(var be=Array(he),Qe=0;Qe<he;Qe++)be[Qe]=arguments[Qe+2];Xe.children=be}if(D&&D.defaultProps)for(Ze in he=D.defaultProps,he)Xe[Ze]===void 0&&(Xe[Ze]=he[Ze]);return{$$typeof:s,type:D,key:qe,ref:oe,props:Xe,_owner:L.current}}function P(D,le){return{$$typeof:s,type:D.type,key:le,ref:D.ref,props:D.props,_owner:D._owner}}function z(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function j(D){var le={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Ee){return le[Ee]})}var $=/\/+/g;function ee(D,le){return typeof D=="object"&&D!==null&&D.key!=null?j(""+D.key):le.toString(36)}function V(D,le,Ee,Ze,Xe){var qe=typeof D;(qe==="undefined"||qe==="boolean")&&(D=null);var oe=!1;if(D===null)oe=!0;else switch(qe){case"string":case"number":oe=!0;break;case"object":switch(D.$$typeof){case s:case e:oe=!0}}if(oe)return oe=D,Xe=Xe(oe),D=Ze===""?"."+ee(oe,0):Ze,C(Xe)?(Ee="",D!=null&&(Ee=D.replace($,"$&/")+"/"),V(Xe,le,Ee,"",function(Qe){return Qe})):Xe!=null&&(z(Xe)&&(Xe=P(Xe,Ee+(!Xe.key||oe&&oe.key===Xe.key?"":(""+Xe.key).replace($,"$&/")+"/")+D)),le.push(Xe)),1;if(oe=0,Ze=Ze===""?".":Ze+":",C(D))for(var he=0;he<D.length;he++){qe=D[he];var be=Ze+ee(qe,he);oe+=V(qe,le,Ee,be,Xe)}else if(be=g(D),typeof be=="function")for(D=be.call(D),he=0;!(qe=D.next()).done;)qe=qe.value,be=Ze+ee(qe,he++),oe+=V(qe,le,Ee,be,Xe);else if(qe==="object")throw le=String(D),Error("Objects are not valid as a React child (found: "+(le==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":le)+"). If you meant to render a collection of children, use an array instead.");return oe}function te(D,le,Ee){if(D==null)return D;var Ze=[],Xe=0;return V(D,Ze,"","",function(qe){return le.call(Ee,qe,Xe++)}),Ze}function pe(D){if(D._status===-1){var le=D._result;le=le(),le.then(function(Ee){(D._status===0||D._status===-1)&&(D._status=1,D._result=Ee)},function(Ee){(D._status===0||D._status===-1)&&(D._status=2,D._result=Ee)}),D._status===-1&&(D._status=0,D._result=le)}if(D._status===1)return D._result.default;throw D._result}var re={current:null},Q={transition:null},Z={ReactCurrentDispatcher:re,ReactCurrentBatchConfig:Q,ReactCurrentOwner:L};function J(){throw Error("act(...) is not supported in production builds of React.")}return Ot.Children={map:te,forEach:function(D,le,Ee){te(D,function(){le.apply(this,arguments)},Ee)},count:function(D){var le=0;return te(D,function(){le++}),le},toArray:function(D){return te(D,function(le){return le})||[]},only:function(D){if(!z(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Ot.Component=x,Ot.Fragment=t,Ot.Profiler=o,Ot.PureComponent=N,Ot.StrictMode=r,Ot.Suspense=h,Ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,Ot.act=J,Ot.cloneElement=function(D,le,Ee){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Ze=w({},D.props),Xe=D.key,qe=D.ref,oe=D._owner;if(le!=null){if(le.ref!==void 0&&(qe=le.ref,oe=L.current),le.key!==void 0&&(Xe=""+le.key),D.type&&D.type.defaultProps)var he=D.type.defaultProps;for(be in le)I.call(le,be)&&!k.hasOwnProperty(be)&&(Ze[be]=le[be]===void 0&&he!==void 0?he[be]:le[be])}var be=arguments.length-2;if(be===1)Ze.children=Ee;else if(1<be){he=Array(be);for(var Qe=0;Qe<be;Qe++)he[Qe]=arguments[Qe+2];Ze.children=he}return{$$typeof:s,type:D.type,key:Xe,ref:qe,props:Ze,_owner:oe}},Ot.createContext=function(D){return D={$$typeof:u,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:l,_context:D},D.Consumer=D},Ot.createElement=E,Ot.createFactory=function(D){var le=E.bind(null,D);return le.type=D,le},Ot.createRef=function(){return{current:null}},Ot.forwardRef=function(D){return{$$typeof:f,render:D}},Ot.isValidElement=z,Ot.lazy=function(D){return{$$typeof:v,_payload:{_status:-1,_result:D},_init:pe}},Ot.memo=function(D,le){return{$$typeof:p,type:D,compare:le===void 0?null:le}},Ot.startTransition=function(D){var le=Q.transition;Q.transition={};try{D()}finally{Q.transition=le}},Ot.unstable_act=J,Ot.useCallback=function(D,le){return re.current.useCallback(D,le)},Ot.useContext=function(D){return re.current.useContext(D)},Ot.useDebugValue=function(){},Ot.useDeferredValue=function(D){return re.current.useDeferredValue(D)},Ot.useEffect=function(D,le){return re.current.useEffect(D,le)},Ot.useId=function(){return re.current.useId()},Ot.useImperativeHandle=function(D,le,Ee){return re.current.useImperativeHandle(D,le,Ee)},Ot.useInsertionEffect=function(D,le){return re.current.useInsertionEffect(D,le)},Ot.useLayoutEffect=function(D,le){return re.current.useLayoutEffect(D,le)},Ot.useMemo=function(D,le){return re.current.useMemo(D,le)},Ot.useReducer=function(D,le,Ee){return re.current.useReducer(D,le,Ee)},Ot.useRef=function(D){return re.current.useRef(D)},Ot.useState=function(D){return re.current.useState(D)},Ot.useSyncExternalStore=function(D,le,Ee){return re.current.useSyncExternalStore(D,le,Ee)},Ot.useTransition=function(){return re.current.useTransition()},Ot.version="18.3.1",Ot}var om;function Sf(){return om||(om=1,Vu.exports=Bv()),Vu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm;function kv(){if(lm)return Qa;lm=1;var s=Sf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var v,S={},g=null,M=null;p!==void 0&&(g=""+p),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(M=h.ref);for(v in h)r.call(h,v)&&!l.hasOwnProperty(v)&&(S[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)S[v]===void 0&&(S[v]=h[v]);return{$$typeof:e,type:f,key:g,ref:M,props:S,_owner:o.current}}return Qa.Fragment=t,Qa.jsx=u,Qa.jsxs=u,Qa}var cm;function zv(){return cm||(cm=1,Gu.exports=kv()),Gu.exports}var F=zv(),ut=Sf();const Gv=_g(ut);var yl={},Hu={exports:{}},ni={},Wu={exports:{}},Xu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um;function Vv(){return um||(um=1,(function(s){function e(Q,Z){var J=Q.length;Q.push(Z);e:for(;0<J;){var D=J-1>>>1,le=Q[D];if(0<o(le,Z))Q[D]=Z,Q[J]=le,J=D;else break e}}function t(Q){return Q.length===0?null:Q[0]}function r(Q){if(Q.length===0)return null;var Z=Q[0],J=Q.pop();if(J!==Z){Q[0]=J;e:for(var D=0,le=Q.length,Ee=le>>>1;D<Ee;){var Ze=2*(D+1)-1,Xe=Q[Ze],qe=Ze+1,oe=Q[qe];if(0>o(Xe,J))qe<le&&0>o(oe,Xe)?(Q[D]=oe,Q[qe]=J,D=qe):(Q[D]=Xe,Q[Ze]=J,D=Ze);else if(qe<le&&0>o(oe,J))Q[D]=oe,Q[qe]=J,D=qe;else break e}}return Z}function o(Q,Z){var J=Q.sortIndex-Z.sortIndex;return J!==0?J:Q.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],p=[],v=1,S=null,g=3,M=!1,w=!1,R=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function W(Q){for(var Z=t(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=Q)r(p),Z.sortIndex=Z.expirationTime,e(h,Z);else break;Z=t(p)}}function C(Q){if(R=!1,W(Q),!w)if(t(h)!==null)w=!0,pe(I);else{var Z=t(p);Z!==null&&re(C,Z.startTime-Q)}}function I(Q,Z){w=!1,R&&(R=!1,_(E),E=-1),M=!0;var J=g;try{for(W(Z),S=t(h);S!==null&&(!(S.expirationTime>Z)||Q&&!j());){var D=S.callback;if(typeof D=="function"){S.callback=null,g=S.priorityLevel;var le=D(S.expirationTime<=Z);Z=s.unstable_now(),typeof le=="function"?S.callback=le:S===t(h)&&r(h),W(Z)}else r(h);S=t(h)}if(S!==null)var Ee=!0;else{var Ze=t(p);Ze!==null&&re(C,Ze.startTime-Z),Ee=!1}return Ee}finally{S=null,g=J,M=!1}}var L=!1,k=null,E=-1,P=5,z=-1;function j(){return!(s.unstable_now()-z<P)}function $(){if(k!==null){var Q=s.unstable_now();z=Q;var Z=!0;try{Z=k(!0,Q)}finally{Z?ee():(L=!1,k=null)}}else L=!1}var ee;if(typeof N=="function")ee=function(){N($)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,te=V.port2;V.port1.onmessage=$,ee=function(){te.postMessage(null)}}else ee=function(){x($,0)};function pe(Q){k=Q,L||(L=!0,ee())}function re(Q,Z){E=x(function(){Q(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Q){Q.callback=null},s.unstable_continueExecution=function(){w||M||(w=!0,pe(I))},s.unstable_forceFrameRate=function(Q){0>Q||125<Q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<Q?Math.floor(1e3/Q):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(Q){switch(g){case 1:case 2:case 3:var Z=3;break;default:Z=g}var J=g;g=Z;try{return Q()}finally{g=J}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Q,Z){switch(Q){case 1:case 2:case 3:case 4:case 5:break;default:Q=3}var J=g;g=Q;try{return Z()}finally{g=J}},s.unstable_scheduleCallback=function(Q,Z,J){var D=s.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?D+J:D):J=D,Q){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=J+le,Q={id:v++,callback:Z,priorityLevel:Q,startTime:J,expirationTime:le,sortIndex:-1},J>D?(Q.sortIndex=J,e(p,Q),t(h)===null&&Q===t(p)&&(R?(_(E),E=-1):R=!0,re(C,J-D))):(Q.sortIndex=le,e(h,Q),w||M||(w=!0,pe(I))),Q},s.unstable_shouldYield=j,s.unstable_wrapCallback=function(Q){var Z=g;return function(){var J=g;g=Z;try{return Q.apply(this,arguments)}finally{g=J}}}})(Xu)),Xu}var dm;function Hv(){return dm||(dm=1,Wu.exports=Vv()),Wu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm;function Wv(){if(fm)return ni;fm=1;var s=Sf(),e=Hv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},S={};function g(n){return h.call(S,n)?!0:h.call(v,n)?!1:p.test(n)?S[n]=!0:(v[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,a,c,d,m,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=T}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,N);x[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,N);x[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,N);x[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function W(n,i,a,c){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,d,c)&&(a=null),c||d===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),L=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),j=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),ee=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),pe=Symbol.for("react.lazy"),re=Symbol.for("react.offscreen"),Q=Symbol.iterator;function Z(n){return n===null||typeof n!="object"?null:(n=Q&&n[Q]||n["@@iterator"],typeof n=="function"?n:null)}var J=Object.assign,D;function le(n){if(D===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);D=i&&i[1]||""}return`
`+D+n}var Ee=!1;function Ze(n,i){if(!n||Ee)return"";Ee=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(me){var c=me}Reflect.construct(n,[],i)}else{try{i.call()}catch(me){c=me}n.call(i.prototype)}else{try{throw Error()}catch(me){c=me}n()}}catch(me){if(me&&c&&typeof me.stack=="string"){for(var d=me.stack.split(`
`),m=c.stack.split(`
`),T=d.length-1,B=m.length-1;1<=T&&0<=B&&d[T]!==m[B];)B--;for(;1<=T&&0<=B;T--,B--)if(d[T]!==m[B]){if(T!==1||B!==1)do if(T--,B--,0>B||d[T]!==m[B]){var Y=`
`+d[T].replace(" at new "," at ");return n.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",n.displayName)),Y}while(1<=T&&0<=B);break}}}finally{Ee=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?le(n):""}function Xe(n){switch(n.tag){case 5:return le(n.type);case 16:return le("Lazy");case 13:return le("Suspense");case 19:return le("SuspenseList");case 0:case 2:case 15:return n=Ze(n.type,!1),n;case 11:return n=Ze(n.type.render,!1),n;case 1:return n=Ze(n.type,!0),n;default:return""}}function qe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case L:return"Portal";case P:return"Profiler";case E:return"StrictMode";case ee:return"Suspense";case V:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case j:return(n.displayName||"Context")+".Consumer";case z:return(n._context.displayName||"Context")+".Provider";case $:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case te:return i=n.displayName||null,i!==null?i:qe(n.type)||"Memo";case pe:i=n._payload,n=n._init;try{return qe(n(i))}catch{}}return null}function oe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qe(i);case 8:return i===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function he(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(n){var i=be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){c=""+T,m.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Ge(n){n._valueTracker||(n._valueTracker=Qe(n))}function dt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function pt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ft(n,i){var a=i.checked;return J({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Rt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=he(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Lt(n,i){i=i.checked,i!=null&&W(n,"checked",i,!1)}function xt(n,i){Lt(n,i);var a=he(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Yt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Yt(n,i.type,he(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function St(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Yt(n,i,a){(i!=="number"||pt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var tn=Array.isArray;function It(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+he(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function mt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return J({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function q(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(tn(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:he(a)}}function jt(n,i){var a=he(i.value),c=he(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Oe(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function b(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function y(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?b(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var O,se=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(O=O||document.createElement("div"),O.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=O.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function de(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Te={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ne=["Webkit","ms","Moz","O"];Object.keys(Te).forEach(function(n){Ne.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Te[i]=Te[n]})});function ge(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Te.hasOwnProperty(n)&&Te[n]?(""+i).trim():i+"px"}function _e(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=ge(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var De=J({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $e(n,i){if(i){if(De[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ue(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Re=null;function Ye(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var tt=null,ht=null,G=null;function Le(n){if(n=Ba(n)){if(typeof tt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Fo(i),tt(n.stateNode,n.type,i))}}function ve(n){ht?G?G.push(n):G=[n]:ht=n}function Fe(){if(ht){var n=ht,i=G;if(G=ht=null,Le(n),i)for(n=0;n<i.length;n++)Le(i[n])}}function Be(n,i){return n(i)}function Se(){}var rt=!1;function Je(n,i,a){if(rt)return n(i,a);rt=!0;try{return Be(n,i,a)}finally{rt=!1,(ht!==null||G!==null)&&(Se(),Fe())}}function Dt(n,i){var a=n.stateNode;if(a===null)return null;var c=Fo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ut=!1;if(f)try{var vn={};Object.defineProperty(vn,"passive",{get:function(){Ut=!0}}),window.addEventListener("test",vn,vn),window.removeEventListener("test",vn,vn)}catch{Ut=!1}function Dn(n,i,a,c,d,m,T,B,Y){var me=Array.prototype.slice.call(arguments,3);try{i.apply(a,me)}catch(Ae){this.onError(Ae)}}var mi=!1,gi=null,Mn=!1,$n=null,br={onError:function(n){mi=!0,gi=n}};function or(n,i,a,c,d,m,T,B,Y){mi=!1,gi=null,Dn.apply(br,arguments)}function lr(n,i,a,c,d,m,T,B,Y){if(or.apply(this,arguments),mi){if(mi){var me=gi;mi=!1,gi=null}else throw Error(t(198));Mn||(Mn=!0,$n=me)}}function _n(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function vi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function U(n){if(_n(n)!==n)throw Error(t(188))}function xe(n){var i=n.alternate;if(!i){if(i=_n(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return U(d),n;if(m===c)return U(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var T=!1,B=d.child;B;){if(B===a){T=!0,a=d,c=m;break}if(B===c){T=!0,c=d,a=m;break}B=B.sibling}if(!T){for(B=m.child;B;){if(B===a){T=!0,a=m,c=d;break}if(B===c){T=!0,c=m,a=d;break}B=B.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Ve(n){return n=xe(n),n!==null?Me(n):null}function Me(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Me(n);if(i!==null)return i;n=n.sibling}return null}var _t=e.unstable_scheduleCallback,X=e.unstable_cancelCallback,nn=e.unstable_shouldYield,Tt=e.unstable_requestPaint,kt=e.unstable_now,Ri=e.unstable_getCurrentPriorityLevel,on=e.unstable_ImmediatePriority,Zt=e.unstable_UserBlockingPriority,A=e.unstable_NormalPriority,H=e.unstable_LowPriority,ue=e.unstable_IdlePriority,ne=null,ie=null;function je(n){if(ie&&typeof ie.onCommitFiberRoot=="function")try{ie.onCommitFiberRoot(ne,n,void 0,(n.current.flags&128)===128)}catch{}}var He=Math.clz32?Math.clz32:nt,We=Math.log,it=Math.LN2;function nt(n){return n>>>=0,n===0?32:31-(We(n)/it|0)|0}var ye=64,ke=4194304;function Ce(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function at(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,T=a&268435455;if(T!==0){var B=T&~d;B!==0?c=Ce(B):(m&=T,m!==0&&(c=Ce(m)))}else T=a&~d,T!==0?c=Ce(T):m!==0&&(c=Ce(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-He(i),d=1<<a,c|=n[a],i&=~d;return c}function bt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ct(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var T=31-He(m),B=1<<T,Y=d[T];Y===-1?((B&a)===0||(B&c)!==0)&&(d[T]=bt(B,i)):Y<=i&&(n.expiredLanes|=B),m&=~B}}function wt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function qt(){var n=ye;return ye<<=1,(ye&4194240)===0&&(ye=64),n}function ze(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Jt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-He(i),n[i]=a}function Bt(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-He(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Rn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-He(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var Pt=0;function ai(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ci,zt,ln,Pi,Qt,_i=!1,Li=[],Ni=null,Rr=null,Cr=null,Ma=new Map,Ea=new Map,Pr=[],a0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hf(n,i){switch(n){case"focusin":case"focusout":Ni=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":Ma.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ea.delete(i.pointerId)}}function wa(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Ba(i),i!==null&&zt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function o0(n,i,a,c,d){switch(i){case"focusin":return Ni=wa(Ni,n,i,a,c,d),!0;case"dragenter":return Rr=wa(Rr,n,i,a,c,d),!0;case"mouseover":return Cr=wa(Cr,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return Ma.set(m,wa(Ma.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,Ea.set(m,wa(Ea.get(m)||null,n,i,a,c,d)),!0}return!1}function Wf(n){var i=is(n.target);if(i!==null){var a=_n(i);if(a!==null){if(i=a.tag,i===13){if(i=vi(a),i!==null){n.blockedOn=i,Qt(n.priority,function(){ln(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Mo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=pc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Re=c,a.target.dispatchEvent(c),Re=null}else return i=Ba(a),i!==null&&zt(i),n.blockedOn=a,!1;i.shift()}return!0}function Xf(n,i,a){Mo(n)&&a.delete(i)}function l0(){_i=!1,Ni!==null&&Mo(Ni)&&(Ni=null),Rr!==null&&Mo(Rr)&&(Rr=null),Cr!==null&&Mo(Cr)&&(Cr=null),Ma.forEach(Xf),Ea.forEach(Xf)}function Ta(n,i){n.blockedOn===i&&(n.blockedOn=null,_i||(_i=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,l0)))}function Aa(n){function i(d){return Ta(d,n)}if(0<Li.length){Ta(Li[0],n);for(var a=1;a<Li.length;a++){var c=Li[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Ni!==null&&Ta(Ni,n),Rr!==null&&Ta(Rr,n),Cr!==null&&Ta(Cr,n),Ma.forEach(i),Ea.forEach(i),a=0;a<Pr.length;a++)c=Pr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Pr.length&&(a=Pr[0],a.blockedOn===null);)Wf(a),a.blockedOn===null&&Pr.shift()}var Ls=C.ReactCurrentBatchConfig,Eo=!0;function c0(n,i,a,c){var d=Pt,m=Ls.transition;Ls.transition=null;try{Pt=1,hc(n,i,a,c)}finally{Pt=d,Ls.transition=m}}function u0(n,i,a,c){var d=Pt,m=Ls.transition;Ls.transition=null;try{Pt=4,hc(n,i,a,c)}finally{Pt=d,Ls.transition=m}}function hc(n,i,a,c){if(Eo){var d=pc(n,i,a,c);if(d===null)Lc(n,i,c,wo,a),Hf(n,c);else if(o0(d,n,i,a,c))c.stopPropagation();else if(Hf(n,c),i&4&&-1<a0.indexOf(n)){for(;d!==null;){var m=Ba(d);if(m!==null&&Ci(m),m=pc(n,i,a,c),m===null&&Lc(n,i,c,wo,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Lc(n,i,c,null,a)}}var wo=null;function pc(n,i,a,c){if(wo=null,n=Ye(c),n=is(n),n!==null)if(i=_n(n),i===null)n=null;else if(a=i.tag,a===13){if(n=vi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return wo=n,null}function Yf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ri()){case on:return 1;case Zt:return 4;case A:case H:return 16;case ue:return 536870912;default:return 16}default:return 16}}var Lr=null,mc=null,To=null;function jf(){if(To)return To;var n,i=mc,a=i.length,c,d="value"in Lr?Lr.value:Lr.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===d[m-c];c++);return To=d.slice(n,1<c?1-c:void 0)}function Ao(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function bo(){return!0}function qf(){return!1}function oi(n){function i(a,c,d,m,T){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(a=n[B],this[B]=a?a(m):m[B]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?bo:qf,this.isPropagationStopped=qf,this}return J(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=bo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=bo)},persist:function(){},isPersistent:bo}),i}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gc=oi(Ns),ba=J({},Ns,{view:0,detail:0}),d0=oi(ba),vc,_c,Ra,Ro=J({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ra&&(Ra&&n.type==="mousemove"?(vc=n.screenX-Ra.screenX,_c=n.screenY-Ra.screenY):_c=vc=0,Ra=n),vc)},movementY:function(n){return"movementY"in n?n.movementY:_c}}),Kf=oi(Ro),f0=J({},Ro,{dataTransfer:0}),h0=oi(f0),p0=J({},ba,{relatedTarget:0}),xc=oi(p0),m0=J({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),g0=oi(m0),v0=J({},Ns,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),_0=oi(v0),x0=J({},Ns,{data:0}),$f=oi(x0),S0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},y0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},M0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function E0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=M0[n])?!!i[n]:!1}function Sc(){return E0}var w0=J({},ba,{key:function(n){if(n.key){var i=S0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ao(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?y0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sc,charCode:function(n){return n.type==="keypress"?Ao(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ao(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),T0=oi(w0),A0=J({},Ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zf=oi(A0),b0=J({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sc}),R0=oi(b0),C0=J({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),P0=oi(C0),L0=J({},Ro,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),N0=oi(L0),I0=[9,13,27,32],yc=f&&"CompositionEvent"in window,Ca=null;f&&"documentMode"in document&&(Ca=document.documentMode);var D0=f&&"TextEvent"in window&&!Ca,Jf=f&&(!yc||Ca&&8<Ca&&11>=Ca),Qf=" ",eh=!1;function th(n,i){switch(n){case"keyup":return I0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Is=!1;function U0(n,i){switch(n){case"compositionend":return nh(i);case"keypress":return i.which!==32?null:(eh=!0,Qf);case"textInput":return n=i.data,n===Qf&&eh?null:n;default:return null}}function F0(n,i){if(Is)return n==="compositionend"||!yc&&th(n,i)?(n=jf(),To=mc=Lr=null,Is=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Jf&&i.locale!=="ko"?null:i.data;default:return null}}var O0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ih(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!O0[n.type]:i==="textarea"}function rh(n,i,a,c){ve(c),i=Io(i,"onChange"),0<i.length&&(a=new gc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Pa=null,La=null;function B0(n){Mh(n,0)}function Co(n){var i=Bs(n);if(dt(i))return n}function k0(n,i){if(n==="change")return i}var sh=!1;if(f){var Mc;if(f){var Ec="oninput"in document;if(!Ec){var ah=document.createElement("div");ah.setAttribute("oninput","return;"),Ec=typeof ah.oninput=="function"}Mc=Ec}else Mc=!1;sh=Mc&&(!document.documentMode||9<document.documentMode)}function oh(){Pa&&(Pa.detachEvent("onpropertychange",lh),La=Pa=null)}function lh(n){if(n.propertyName==="value"&&Co(La)){var i=[];rh(i,La,n,Ye(n)),Je(B0,i)}}function z0(n,i,a){n==="focusin"?(oh(),Pa=i,La=a,Pa.attachEvent("onpropertychange",lh)):n==="focusout"&&oh()}function G0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Co(La)}function V0(n,i){if(n==="click")return Co(i)}function H0(n,i){if(n==="input"||n==="change")return Co(i)}function W0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ii=typeof Object.is=="function"?Object.is:W0;function Na(n,i){if(Ii(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!Ii(n[d],i[d]))return!1}return!0}function ch(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function uh(n,i){var a=ch(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ch(a)}}function dh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?dh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function fh(){for(var n=window,i=pt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=pt(n.document)}return i}function wc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function X0(n){var i=fh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&dh(a.ownerDocument.documentElement,a)){if(c!==null&&wc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=uh(a,m);var T=uh(a,c);d&&T&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Y0=f&&"documentMode"in document&&11>=document.documentMode,Ds=null,Tc=null,Ia=null,Ac=!1;function hh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ac||Ds==null||Ds!==pt(c)||(c=Ds,"selectionStart"in c&&wc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ia&&Na(Ia,c)||(Ia=c,c=Io(Tc,"onSelect"),0<c.length&&(i=new gc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ds)))}function Po(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Us={animationend:Po("Animation","AnimationEnd"),animationiteration:Po("Animation","AnimationIteration"),animationstart:Po("Animation","AnimationStart"),transitionend:Po("Transition","TransitionEnd")},bc={},ph={};f&&(ph=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function Lo(n){if(bc[n])return bc[n];if(!Us[n])return n;var i=Us[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in ph)return bc[n]=i[a];return n}var mh=Lo("animationend"),gh=Lo("animationiteration"),vh=Lo("animationstart"),_h=Lo("transitionend"),xh=new Map,Sh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(n,i){xh.set(n,i),l(i,[n])}for(var Rc=0;Rc<Sh.length;Rc++){var Cc=Sh[Rc],j0=Cc.toLowerCase(),q0=Cc[0].toUpperCase()+Cc.slice(1);Nr(j0,"on"+q0)}Nr(mh,"onAnimationEnd"),Nr(gh,"onAnimationIteration"),Nr(vh,"onAnimationStart"),Nr("dblclick","onDoubleClick"),Nr("focusin","onFocus"),Nr("focusout","onBlur"),Nr(_h,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Da));function yh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,lr(c,i,void 0,n),n.currentTarget=null}function Mh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var T=c.length-1;0<=T;T--){var B=c[T],Y=B.instance,me=B.currentTarget;if(B=B.listener,Y!==m&&d.isPropagationStopped())break e;yh(d,B,me),m=Y}else for(T=0;T<c.length;T++){if(B=c[T],Y=B.instance,me=B.currentTarget,B=B.listener,Y!==m&&d.isPropagationStopped())break e;yh(d,B,me),m=Y}}}if(Mn)throw n=$n,Mn=!1,$n=null,n}function sn(n,i){var a=i[Oc];a===void 0&&(a=i[Oc]=new Set);var c=n+"__bubble";a.has(c)||(Eh(i,n,2,!1),a.add(c))}function Pc(n,i,a){var c=0;i&&(c|=4),Eh(a,n,c,i)}var No="_reactListening"+Math.random().toString(36).slice(2);function Ua(n){if(!n[No]){n[No]=!0,r.forEach(function(a){a!=="selectionchange"&&(K0.has(a)||Pc(a,!1,n),Pc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[No]||(i[No]=!0,Pc("selectionchange",!1,i))}}function Eh(n,i,a,c){switch(Yf(i)){case 1:var d=c0;break;case 4:d=u0;break;default:d=hc}a=d.bind(null,i,a,n),d=void 0,!Ut||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Lc(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var B=c.stateNode.containerInfo;if(B===d||B.nodeType===8&&B.parentNode===d)break;if(T===4)for(T=c.return;T!==null;){var Y=T.tag;if((Y===3||Y===4)&&(Y=T.stateNode.containerInfo,Y===d||Y.nodeType===8&&Y.parentNode===d))return;T=T.return}for(;B!==null;){if(T=is(B),T===null)return;if(Y=T.tag,Y===5||Y===6){c=m=T;continue e}B=B.parentNode}}c=c.return}Je(function(){var me=m,Ae=Ye(a),Pe=[];e:{var we=xh.get(n);if(we!==void 0){var et=gc,ot=n;switch(n){case"keypress":if(Ao(a)===0)break e;case"keydown":case"keyup":et=T0;break;case"focusin":ot="focus",et=xc;break;case"focusout":ot="blur",et=xc;break;case"beforeblur":case"afterblur":et=xc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":et=Kf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":et=h0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":et=R0;break;case mh:case gh:case vh:et=g0;break;case _h:et=P0;break;case"scroll":et=d0;break;case"wheel":et=N0;break;case"copy":case"cut":case"paste":et=_0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":et=Zf}var lt=(i&4)!==0,xn=!lt&&n==="scroll",ce=lt?we!==null?we+"Capture":null:we;lt=[];for(var K=me,fe;K!==null;){fe=K;var Ie=fe.stateNode;if(fe.tag===5&&Ie!==null&&(fe=Ie,ce!==null&&(Ie=Dt(K,ce),Ie!=null&&lt.push(Fa(K,Ie,fe)))),xn)break;K=K.return}0<lt.length&&(we=new et(we,ot,null,a,Ae),Pe.push({event:we,listeners:lt}))}}if((i&7)===0){e:{if(we=n==="mouseover"||n==="pointerover",et=n==="mouseout"||n==="pointerout",we&&a!==Re&&(ot=a.relatedTarget||a.fromElement)&&(is(ot)||ot[cr]))break e;if((et||we)&&(we=Ae.window===Ae?Ae:(we=Ae.ownerDocument)?we.defaultView||we.parentWindow:window,et?(ot=a.relatedTarget||a.toElement,et=me,ot=ot?is(ot):null,ot!==null&&(xn=_n(ot),ot!==xn||ot.tag!==5&&ot.tag!==6)&&(ot=null)):(et=null,ot=me),et!==ot)){if(lt=Kf,Ie="onMouseLeave",ce="onMouseEnter",K="mouse",(n==="pointerout"||n==="pointerover")&&(lt=Zf,Ie="onPointerLeave",ce="onPointerEnter",K="pointer"),xn=et==null?we:Bs(et),fe=ot==null?we:Bs(ot),we=new lt(Ie,K+"leave",et,a,Ae),we.target=xn,we.relatedTarget=fe,Ie=null,is(Ae)===me&&(lt=new lt(ce,K+"enter",ot,a,Ae),lt.target=fe,lt.relatedTarget=xn,Ie=lt),xn=Ie,et&&ot)t:{for(lt=et,ce=ot,K=0,fe=lt;fe;fe=Fs(fe))K++;for(fe=0,Ie=ce;Ie;Ie=Fs(Ie))fe++;for(;0<K-fe;)lt=Fs(lt),K--;for(;0<fe-K;)ce=Fs(ce),fe--;for(;K--;){if(lt===ce||ce!==null&&lt===ce.alternate)break t;lt=Fs(lt),ce=Fs(ce)}lt=null}else lt=null;et!==null&&wh(Pe,we,et,lt,!1),ot!==null&&xn!==null&&wh(Pe,xn,ot,lt,!0)}}e:{if(we=me?Bs(me):window,et=we.nodeName&&we.nodeName.toLowerCase(),et==="select"||et==="input"&&we.type==="file")var ct=k0;else if(ih(we))if(sh)ct=H0;else{ct=G0;var gt=z0}else(et=we.nodeName)&&et.toLowerCase()==="input"&&(we.type==="checkbox"||we.type==="radio")&&(ct=V0);if(ct&&(ct=ct(n,me))){rh(Pe,ct,a,Ae);break e}gt&&gt(n,we,me),n==="focusout"&&(gt=we._wrapperState)&&gt.controlled&&we.type==="number"&&Yt(we,"number",we.value)}switch(gt=me?Bs(me):window,n){case"focusin":(ih(gt)||gt.contentEditable==="true")&&(Ds=gt,Tc=me,Ia=null);break;case"focusout":Ia=Tc=Ds=null;break;case"mousedown":Ac=!0;break;case"contextmenu":case"mouseup":case"dragend":Ac=!1,hh(Pe,a,Ae);break;case"selectionchange":if(Y0)break;case"keydown":case"keyup":hh(Pe,a,Ae)}var vt;if(yc)e:{switch(n){case"compositionstart":var Mt="onCompositionStart";break e;case"compositionend":Mt="onCompositionEnd";break e;case"compositionupdate":Mt="onCompositionUpdate";break e}Mt=void 0}else Is?th(n,a)&&(Mt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Mt="onCompositionStart");Mt&&(Jf&&a.locale!=="ko"&&(Is||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&Is&&(vt=jf()):(Lr=Ae,mc="value"in Lr?Lr.value:Lr.textContent,Is=!0)),gt=Io(me,Mt),0<gt.length&&(Mt=new $f(Mt,n,null,a,Ae),Pe.push({event:Mt,listeners:gt}),vt?Mt.data=vt:(vt=nh(a),vt!==null&&(Mt.data=vt)))),(vt=D0?U0(n,a):F0(n,a))&&(me=Io(me,"onBeforeInput"),0<me.length&&(Ae=new $f("onBeforeInput","beforeinput",null,a,Ae),Pe.push({event:Ae,listeners:me}),Ae.data=vt))}Mh(Pe,i)})}function Fa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Io(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Dt(n,a),m!=null&&c.unshift(Fa(n,m,d)),m=Dt(n,i),m!=null&&c.push(Fa(n,m,d))),n=n.return}return c}function Fs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function wh(n,i,a,c,d){for(var m=i._reactName,T=[];a!==null&&a!==c;){var B=a,Y=B.alternate,me=B.stateNode;if(Y!==null&&Y===c)break;B.tag===5&&me!==null&&(B=me,d?(Y=Dt(a,m),Y!=null&&T.unshift(Fa(a,Y,B))):d||(Y=Dt(a,m),Y!=null&&T.push(Fa(a,Y,B)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var $0=/\r\n?/g,Z0=/\u0000|\uFFFD/g;function Th(n){return(typeof n=="string"?n:""+n).replace($0,`
`).replace(Z0,"")}function Do(n,i,a){if(i=Th(i),Th(n)!==i&&a)throw Error(t(425))}function Uo(){}var Nc=null,Ic=null;function Dc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Uc=typeof setTimeout=="function"?setTimeout:void 0,J0=typeof clearTimeout=="function"?clearTimeout:void 0,Ah=typeof Promise=="function"?Promise:void 0,Q0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ah<"u"?function(n){return Ah.resolve(null).then(n).catch(ev)}:Uc;function ev(n){setTimeout(function(){throw n})}function Fc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),Aa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Aa(i)}function Ir(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function bh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Os=Math.random().toString(36).slice(2),ji="__reactFiber$"+Os,Oa="__reactProps$"+Os,cr="__reactContainer$"+Os,Oc="__reactEvents$"+Os,tv="__reactListeners$"+Os,nv="__reactHandles$"+Os;function is(n){var i=n[ji];if(i)return i;for(var a=n.parentNode;a;){if(i=a[cr]||a[ji]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=bh(n);n!==null;){if(a=n[ji])return a;n=bh(n)}return i}n=a,a=n.parentNode}return null}function Ba(n){return n=n[ji]||n[cr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Bs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Fo(n){return n[Oa]||null}var Bc=[],ks=-1;function Dr(n){return{current:n}}function an(n){0>ks||(n.current=Bc[ks],Bc[ks]=null,ks--)}function rn(n,i){ks++,Bc[ks]=n.current,n.current=i}var Ur={},kn=Dr(Ur),Zn=Dr(!1),rs=Ur;function zs(n,i){var a=n.type.contextTypes;if(!a)return Ur;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Jn(n){return n=n.childContextTypes,n!=null}function Oo(){an(Zn),an(kn)}function Rh(n,i,a){if(kn.current!==Ur)throw Error(t(168));rn(kn,i),rn(Zn,a)}function Ch(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,oe(n)||"Unknown",d));return J({},a,c)}function Bo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ur,rs=kn.current,rn(kn,n),rn(Zn,Zn.current),!0}function Ph(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Ch(n,i,rs),c.__reactInternalMemoizedMergedChildContext=n,an(Zn),an(kn),rn(kn,n)):an(Zn),rn(Zn,a)}var ur=null,ko=!1,kc=!1;function Lh(n){ur===null?ur=[n]:ur.push(n)}function iv(n){ko=!0,Lh(n)}function Fr(){if(!kc&&ur!==null){kc=!0;var n=0,i=Pt;try{var a=ur;for(Pt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}ur=null,ko=!1}catch(d){throw ur!==null&&(ur=ur.slice(n+1)),_t(on,Fr),d}finally{Pt=i,kc=!1}}return null}var Gs=[],Vs=0,zo=null,Go=0,xi=[],Si=0,ss=null,dr=1,fr="";function as(n,i){Gs[Vs++]=Go,Gs[Vs++]=zo,zo=n,Go=i}function Nh(n,i,a){xi[Si++]=dr,xi[Si++]=fr,xi[Si++]=ss,ss=n;var c=dr;n=fr;var d=32-He(c)-1;c&=~(1<<d),a+=1;var m=32-He(i)+d;if(30<m){var T=d-d%5;m=(c&(1<<T)-1).toString(32),c>>=T,d-=T,dr=1<<32-He(i)+d|a<<d|c,fr=m+n}else dr=1<<m|a<<d|c,fr=n}function zc(n){n.return!==null&&(as(n,1),Nh(n,1,0))}function Gc(n){for(;n===zo;)zo=Gs[--Vs],Gs[Vs]=null,Go=Gs[--Vs],Gs[Vs]=null;for(;n===ss;)ss=xi[--Si],xi[Si]=null,fr=xi[--Si],xi[Si]=null,dr=xi[--Si],xi[Si]=null}var li=null,ci=null,cn=!1,Di=null;function Ih(n,i){var a=wi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Dh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,li=n,ci=Ir(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,li=n,ci=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=ss!==null?{id:dr,overflow:fr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=wi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,li=n,ci=null,!0):!1;default:return!1}}function Vc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Hc(n){if(cn){var i=ci;if(i){var a=i;if(!Dh(n,i)){if(Vc(n))throw Error(t(418));i=Ir(a.nextSibling);var c=li;i&&Dh(n,i)?Ih(c,a):(n.flags=n.flags&-4097|2,cn=!1,li=n)}}else{if(Vc(n))throw Error(t(418));n.flags=n.flags&-4097|2,cn=!1,li=n}}}function Uh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;li=n}function Vo(n){if(n!==li)return!1;if(!cn)return Uh(n),cn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Dc(n.type,n.memoizedProps)),i&&(i=ci)){if(Vc(n))throw Fh(),Error(t(418));for(;i;)Ih(n,i),i=Ir(i.nextSibling)}if(Uh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){ci=Ir(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}ci=null}}else ci=li?Ir(n.stateNode.nextSibling):null;return!0}function Fh(){for(var n=ci;n;)n=Ir(n.nextSibling)}function Hs(){ci=li=null,cn=!1}function Wc(n){Di===null?Di=[n]:Di.push(n)}var rv=C.ReactCurrentBatchConfig;function ka(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(T){var B=d.refs;T===null?delete B[m]:B[m]=T},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ho(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Oh(n){var i=n._init;return i(n._payload)}function Bh(n){function i(ce,K){if(n){var fe=ce.deletions;fe===null?(ce.deletions=[K],ce.flags|=16):fe.push(K)}}function a(ce,K){if(!n)return null;for(;K!==null;)i(ce,K),K=K.sibling;return null}function c(ce,K){for(ce=new Map;K!==null;)K.key!==null?ce.set(K.key,K):ce.set(K.index,K),K=K.sibling;return ce}function d(ce,K){return ce=Wr(ce,K),ce.index=0,ce.sibling=null,ce}function m(ce,K,fe){return ce.index=fe,n?(fe=ce.alternate,fe!==null?(fe=fe.index,fe<K?(ce.flags|=2,K):fe):(ce.flags|=2,K)):(ce.flags|=1048576,K)}function T(ce){return n&&ce.alternate===null&&(ce.flags|=2),ce}function B(ce,K,fe,Ie){return K===null||K.tag!==6?(K=Uu(fe,ce.mode,Ie),K.return=ce,K):(K=d(K,fe),K.return=ce,K)}function Y(ce,K,fe,Ie){var ct=fe.type;return ct===k?Ae(ce,K,fe.props.children,Ie,fe.key):K!==null&&(K.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===pe&&Oh(ct)===K.type)?(Ie=d(K,fe.props),Ie.ref=ka(ce,K,fe),Ie.return=ce,Ie):(Ie=hl(fe.type,fe.key,fe.props,null,ce.mode,Ie),Ie.ref=ka(ce,K,fe),Ie.return=ce,Ie)}function me(ce,K,fe,Ie){return K===null||K.tag!==4||K.stateNode.containerInfo!==fe.containerInfo||K.stateNode.implementation!==fe.implementation?(K=Fu(fe,ce.mode,Ie),K.return=ce,K):(K=d(K,fe.children||[]),K.return=ce,K)}function Ae(ce,K,fe,Ie,ct){return K===null||K.tag!==7?(K=ps(fe,ce.mode,Ie,ct),K.return=ce,K):(K=d(K,fe),K.return=ce,K)}function Pe(ce,K,fe){if(typeof K=="string"&&K!==""||typeof K=="number")return K=Uu(""+K,ce.mode,fe),K.return=ce,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case I:return fe=hl(K.type,K.key,K.props,null,ce.mode,fe),fe.ref=ka(ce,null,K),fe.return=ce,fe;case L:return K=Fu(K,ce.mode,fe),K.return=ce,K;case pe:var Ie=K._init;return Pe(ce,Ie(K._payload),fe)}if(tn(K)||Z(K))return K=ps(K,ce.mode,fe,null),K.return=ce,K;Ho(ce,K)}return null}function we(ce,K,fe,Ie){var ct=K!==null?K.key:null;if(typeof fe=="string"&&fe!==""||typeof fe=="number")return ct!==null?null:B(ce,K,""+fe,Ie);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case I:return fe.key===ct?Y(ce,K,fe,Ie):null;case L:return fe.key===ct?me(ce,K,fe,Ie):null;case pe:return ct=fe._init,we(ce,K,ct(fe._payload),Ie)}if(tn(fe)||Z(fe))return ct!==null?null:Ae(ce,K,fe,Ie,null);Ho(ce,fe)}return null}function et(ce,K,fe,Ie,ct){if(typeof Ie=="string"&&Ie!==""||typeof Ie=="number")return ce=ce.get(fe)||null,B(K,ce,""+Ie,ct);if(typeof Ie=="object"&&Ie!==null){switch(Ie.$$typeof){case I:return ce=ce.get(Ie.key===null?fe:Ie.key)||null,Y(K,ce,Ie,ct);case L:return ce=ce.get(Ie.key===null?fe:Ie.key)||null,me(K,ce,Ie,ct);case pe:var gt=Ie._init;return et(ce,K,fe,gt(Ie._payload),ct)}if(tn(Ie)||Z(Ie))return ce=ce.get(fe)||null,Ae(K,ce,Ie,ct,null);Ho(K,Ie)}return null}function ot(ce,K,fe,Ie){for(var ct=null,gt=null,vt=K,Mt=K=0,Ln=null;vt!==null&&Mt<fe.length;Mt++){vt.index>Mt?(Ln=vt,vt=null):Ln=vt.sibling;var Kt=we(ce,vt,fe[Mt],Ie);if(Kt===null){vt===null&&(vt=Ln);break}n&&vt&&Kt.alternate===null&&i(ce,vt),K=m(Kt,K,Mt),gt===null?ct=Kt:gt.sibling=Kt,gt=Kt,vt=Ln}if(Mt===fe.length)return a(ce,vt),cn&&as(ce,Mt),ct;if(vt===null){for(;Mt<fe.length;Mt++)vt=Pe(ce,fe[Mt],Ie),vt!==null&&(K=m(vt,K,Mt),gt===null?ct=vt:gt.sibling=vt,gt=vt);return cn&&as(ce,Mt),ct}for(vt=c(ce,vt);Mt<fe.length;Mt++)Ln=et(vt,ce,Mt,fe[Mt],Ie),Ln!==null&&(n&&Ln.alternate!==null&&vt.delete(Ln.key===null?Mt:Ln.key),K=m(Ln,K,Mt),gt===null?ct=Ln:gt.sibling=Ln,gt=Ln);return n&&vt.forEach(function(Xr){return i(ce,Xr)}),cn&&as(ce,Mt),ct}function lt(ce,K,fe,Ie){var ct=Z(fe);if(typeof ct!="function")throw Error(t(150));if(fe=ct.call(fe),fe==null)throw Error(t(151));for(var gt=ct=null,vt=K,Mt=K=0,Ln=null,Kt=fe.next();vt!==null&&!Kt.done;Mt++,Kt=fe.next()){vt.index>Mt?(Ln=vt,vt=null):Ln=vt.sibling;var Xr=we(ce,vt,Kt.value,Ie);if(Xr===null){vt===null&&(vt=Ln);break}n&&vt&&Xr.alternate===null&&i(ce,vt),K=m(Xr,K,Mt),gt===null?ct=Xr:gt.sibling=Xr,gt=Xr,vt=Ln}if(Kt.done)return a(ce,vt),cn&&as(ce,Mt),ct;if(vt===null){for(;!Kt.done;Mt++,Kt=fe.next())Kt=Pe(ce,Kt.value,Ie),Kt!==null&&(K=m(Kt,K,Mt),gt===null?ct=Kt:gt.sibling=Kt,gt=Kt);return cn&&as(ce,Mt),ct}for(vt=c(ce,vt);!Kt.done;Mt++,Kt=fe.next())Kt=et(vt,ce,Mt,Kt.value,Ie),Kt!==null&&(n&&Kt.alternate!==null&&vt.delete(Kt.key===null?Mt:Kt.key),K=m(Kt,K,Mt),gt===null?ct=Kt:gt.sibling=Kt,gt=Kt);return n&&vt.forEach(function(Ov){return i(ce,Ov)}),cn&&as(ce,Mt),ct}function xn(ce,K,fe,Ie){if(typeof fe=="object"&&fe!==null&&fe.type===k&&fe.key===null&&(fe=fe.props.children),typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case I:e:{for(var ct=fe.key,gt=K;gt!==null;){if(gt.key===ct){if(ct=fe.type,ct===k){if(gt.tag===7){a(ce,gt.sibling),K=d(gt,fe.props.children),K.return=ce,ce=K;break e}}else if(gt.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===pe&&Oh(ct)===gt.type){a(ce,gt.sibling),K=d(gt,fe.props),K.ref=ka(ce,gt,fe),K.return=ce,ce=K;break e}a(ce,gt);break}else i(ce,gt);gt=gt.sibling}fe.type===k?(K=ps(fe.props.children,ce.mode,Ie,fe.key),K.return=ce,ce=K):(Ie=hl(fe.type,fe.key,fe.props,null,ce.mode,Ie),Ie.ref=ka(ce,K,fe),Ie.return=ce,ce=Ie)}return T(ce);case L:e:{for(gt=fe.key;K!==null;){if(K.key===gt)if(K.tag===4&&K.stateNode.containerInfo===fe.containerInfo&&K.stateNode.implementation===fe.implementation){a(ce,K.sibling),K=d(K,fe.children||[]),K.return=ce,ce=K;break e}else{a(ce,K);break}else i(ce,K);K=K.sibling}K=Fu(fe,ce.mode,Ie),K.return=ce,ce=K}return T(ce);case pe:return gt=fe._init,xn(ce,K,gt(fe._payload),Ie)}if(tn(fe))return ot(ce,K,fe,Ie);if(Z(fe))return lt(ce,K,fe,Ie);Ho(ce,fe)}return typeof fe=="string"&&fe!==""||typeof fe=="number"?(fe=""+fe,K!==null&&K.tag===6?(a(ce,K.sibling),K=d(K,fe),K.return=ce,ce=K):(a(ce,K),K=Uu(fe,ce.mode,Ie),K.return=ce,ce=K),T(ce)):a(ce,K)}return xn}var Ws=Bh(!0),kh=Bh(!1),Wo=Dr(null),Xo=null,Xs=null,Xc=null;function Yc(){Xc=Xs=Xo=null}function jc(n){var i=Wo.current;an(Wo),n._currentValue=i}function qc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ys(n,i){Xo=n,Xc=Xs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Qn=!0),n.firstContext=null)}function yi(n){var i=n._currentValue;if(Xc!==n)if(n={context:n,memoizedValue:i,next:null},Xs===null){if(Xo===null)throw Error(t(308));Xs=n,Xo.dependencies={lanes:0,firstContext:n}}else Xs=Xs.next=n;return i}var os=null;function Kc(n){os===null?os=[n]:os.push(n)}function zh(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,Kc(i)):(a.next=d.next,d.next=a),i.interleaved=a,hr(n,c)}function hr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Or=!1;function $c(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function pr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Br(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Wt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,hr(n,a)}return d=c.interleaved,d===null?(i.next=i,Kc(c)):(i.next=d.next,d.next=i),c.interleaved=i,hr(n,a)}function Yo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Rn(n,a)}}function Vh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=T:m=m.next=T,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function jo(n,i,a,c){var d=n.updateQueue;Or=!1;var m=d.firstBaseUpdate,T=d.lastBaseUpdate,B=d.shared.pending;if(B!==null){d.shared.pending=null;var Y=B,me=Y.next;Y.next=null,T===null?m=me:T.next=me,T=Y;var Ae=n.alternate;Ae!==null&&(Ae=Ae.updateQueue,B=Ae.lastBaseUpdate,B!==T&&(B===null?Ae.firstBaseUpdate=me:B.next=me,Ae.lastBaseUpdate=Y))}if(m!==null){var Pe=d.baseState;T=0,Ae=me=Y=null,B=m;do{var we=B.lane,et=B.eventTime;if((c&we)===we){Ae!==null&&(Ae=Ae.next={eventTime:et,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var ot=n,lt=B;switch(we=i,et=a,lt.tag){case 1:if(ot=lt.payload,typeof ot=="function"){Pe=ot.call(et,Pe,we);break e}Pe=ot;break e;case 3:ot.flags=ot.flags&-65537|128;case 0:if(ot=lt.payload,we=typeof ot=="function"?ot.call(et,Pe,we):ot,we==null)break e;Pe=J({},Pe,we);break e;case 2:Or=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,we=d.effects,we===null?d.effects=[B]:we.push(B))}else et={eventTime:et,lane:we,tag:B.tag,payload:B.payload,callback:B.callback,next:null},Ae===null?(me=Ae=et,Y=Pe):Ae=Ae.next=et,T|=we;if(B=B.next,B===null){if(B=d.shared.pending,B===null)break;we=B,B=we.next,we.next=null,d.lastBaseUpdate=we,d.shared.pending=null}}while(!0);if(Ae===null&&(Y=Pe),d.baseState=Y,d.firstBaseUpdate=me,d.lastBaseUpdate=Ae,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);us|=T,n.lanes=T,n.memoizedState=Pe}}function Hh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var za={},qi=Dr(za),Ga=Dr(za),Va=Dr(za);function ls(n){if(n===za)throw Error(t(174));return n}function Zc(n,i){switch(rn(Va,i),rn(Ga,n),rn(qi,za),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:y(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=y(i,n)}an(qi),rn(qi,i)}function js(){an(qi),an(Ga),an(Va)}function Wh(n){ls(Va.current);var i=ls(qi.current),a=y(i,n.type);i!==a&&(rn(Ga,n),rn(qi,a))}function Jc(n){Ga.current===n&&(an(qi),an(Ga))}var dn=Dr(0);function qo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Qc=[];function eu(){for(var n=0;n<Qc.length;n++)Qc[n]._workInProgressVersionPrimary=null;Qc.length=0}var Ko=C.ReactCurrentDispatcher,tu=C.ReactCurrentBatchConfig,cs=0,fn=null,En=null,Cn=null,$o=!1,Ha=!1,Wa=0,sv=0;function zn(){throw Error(t(321))}function nu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Ii(n[a],i[a]))return!1;return!0}function iu(n,i,a,c,d,m){if(cs=m,fn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ko.current=n===null||n.memoizedState===null?cv:uv,n=a(c,d),Ha){m=0;do{if(Ha=!1,Wa=0,25<=m)throw Error(t(301));m+=1,Cn=En=null,i.updateQueue=null,Ko.current=dv,n=a(c,d)}while(Ha)}if(Ko.current=Qo,i=En!==null&&En.next!==null,cs=0,Cn=En=fn=null,$o=!1,i)throw Error(t(300));return n}function ru(){var n=Wa!==0;return Wa=0,n}function Ki(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cn===null?fn.memoizedState=Cn=n:Cn=Cn.next=n,Cn}function Mi(){if(En===null){var n=fn.alternate;n=n!==null?n.memoizedState:null}else n=En.next;var i=Cn===null?fn.memoizedState:Cn.next;if(i!==null)Cn=i,En=n;else{if(n===null)throw Error(t(310));En=n,n={memoizedState:En.memoizedState,baseState:En.baseState,baseQueue:En.baseQueue,queue:En.queue,next:null},Cn===null?fn.memoizedState=Cn=n:Cn=Cn.next=n}return Cn}function Xa(n,i){return typeof i=="function"?i(n):i}function su(n){var i=Mi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=En,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var T=d.next;d.next=m.next,m.next=T}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var B=T=null,Y=null,me=m;do{var Ae=me.lane;if((cs&Ae)===Ae)Y!==null&&(Y=Y.next={lane:0,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null}),c=me.hasEagerState?me.eagerState:n(c,me.action);else{var Pe={lane:Ae,action:me.action,hasEagerState:me.hasEagerState,eagerState:me.eagerState,next:null};Y===null?(B=Y=Pe,T=c):Y=Y.next=Pe,fn.lanes|=Ae,us|=Ae}me=me.next}while(me!==null&&me!==m);Y===null?T=c:Y.next=B,Ii(c,i.memoizedState)||(Qn=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=Y,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,fn.lanes|=m,us|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function au(n){var i=Mi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var T=d=d.next;do m=n(m,T.action),T=T.next;while(T!==d);Ii(m,i.memoizedState)||(Qn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Xh(){}function Yh(n,i){var a=fn,c=Mi(),d=i(),m=!Ii(c.memoizedState,d);if(m&&(c.memoizedState=d,Qn=!0),c=c.queue,ou(Kh.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||Cn!==null&&Cn.memoizedState.tag&1){if(a.flags|=2048,Ya(9,qh.bind(null,a,c,d,i),void 0,null),Pn===null)throw Error(t(349));(cs&30)!==0||jh(a,i,d)}return d}function jh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=fn.updateQueue,i===null?(i={lastEffect:null,stores:null},fn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function qh(n,i,a,c){i.value=a,i.getSnapshot=c,$h(i)&&Zh(n)}function Kh(n,i,a){return a(function(){$h(i)&&Zh(n)})}function $h(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Ii(n,a)}catch{return!0}}function Zh(n){var i=hr(n,1);i!==null&&Bi(i,n,1,-1)}function Jh(n){var i=Ki();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xa,lastRenderedState:n},i.queue=n,n=n.dispatch=lv.bind(null,fn,n),[i.memoizedState,n]}function Ya(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=fn.updateQueue,i===null?(i={lastEffect:null,stores:null},fn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Qh(){return Mi().memoizedState}function Zo(n,i,a,c){var d=Ki();fn.flags|=n,d.memoizedState=Ya(1|i,a,void 0,c===void 0?null:c)}function Jo(n,i,a,c){var d=Mi();c=c===void 0?null:c;var m=void 0;if(En!==null){var T=En.memoizedState;if(m=T.destroy,c!==null&&nu(c,T.deps)){d.memoizedState=Ya(i,a,m,c);return}}fn.flags|=n,d.memoizedState=Ya(1|i,a,m,c)}function ep(n,i){return Zo(8390656,8,n,i)}function ou(n,i){return Jo(2048,8,n,i)}function tp(n,i){return Jo(4,2,n,i)}function np(n,i){return Jo(4,4,n,i)}function ip(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function rp(n,i,a){return a=a!=null?a.concat([n]):null,Jo(4,4,ip.bind(null,i,n),a)}function lu(){}function sp(n,i){var a=Mi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&nu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function ap(n,i){var a=Mi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&nu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function op(n,i,a){return(cs&21)===0?(n.baseState&&(n.baseState=!1,Qn=!0),n.memoizedState=a):(Ii(a,i)||(a=qt(),fn.lanes|=a,us|=a,n.baseState=!0),i)}function av(n,i){var a=Pt;Pt=a!==0&&4>a?a:4,n(!0);var c=tu.transition;tu.transition={};try{n(!1),i()}finally{Pt=a,tu.transition=c}}function lp(){return Mi().memoizedState}function ov(n,i,a){var c=Vr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},cp(n))up(i,a);else if(a=zh(n,i,a,c),a!==null){var d=qn();Bi(a,n,c,d),dp(a,i,c)}}function lv(n,i,a){var c=Vr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(cp(n))up(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,B=m(T,a);if(d.hasEagerState=!0,d.eagerState=B,Ii(B,T)){var Y=i.interleaved;Y===null?(d.next=d,Kc(i)):(d.next=Y.next,Y.next=d),i.interleaved=d;return}}catch{}finally{}a=zh(n,i,d,c),a!==null&&(d=qn(),Bi(a,n,c,d),dp(a,i,c))}}function cp(n){var i=n.alternate;return n===fn||i!==null&&i===fn}function up(n,i){Ha=$o=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function dp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Rn(n,a)}}var Qo={readContext:yi,useCallback:zn,useContext:zn,useEffect:zn,useImperativeHandle:zn,useInsertionEffect:zn,useLayoutEffect:zn,useMemo:zn,useReducer:zn,useRef:zn,useState:zn,useDebugValue:zn,useDeferredValue:zn,useTransition:zn,useMutableSource:zn,useSyncExternalStore:zn,useId:zn,unstable_isNewReconciler:!1},cv={readContext:yi,useCallback:function(n,i){return Ki().memoizedState=[n,i===void 0?null:i],n},useContext:yi,useEffect:ep,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Zo(4194308,4,ip.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Zo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Zo(4,2,n,i)},useMemo:function(n,i){var a=Ki();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ki();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=ov.bind(null,fn,n),[c.memoizedState,n]},useRef:function(n){var i=Ki();return n={current:n},i.memoizedState=n},useState:Jh,useDebugValue:lu,useDeferredValue:function(n){return Ki().memoizedState=n},useTransition:function(){var n=Jh(!1),i=n[0];return n=av.bind(null,n[1]),Ki().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=fn,d=Ki();if(cn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Pn===null)throw Error(t(349));(cs&30)!==0||jh(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,ep(Kh.bind(null,c,m,n),[n]),c.flags|=2048,Ya(9,qh.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Ki(),i=Pn.identifierPrefix;if(cn){var a=fr,c=dr;a=(c&~(1<<32-He(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Wa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=sv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},uv={readContext:yi,useCallback:sp,useContext:yi,useEffect:ou,useImperativeHandle:rp,useInsertionEffect:tp,useLayoutEffect:np,useMemo:ap,useReducer:su,useRef:Qh,useState:function(){return su(Xa)},useDebugValue:lu,useDeferredValue:function(n){var i=Mi();return op(i,En.memoizedState,n)},useTransition:function(){var n=su(Xa)[0],i=Mi().memoizedState;return[n,i]},useMutableSource:Xh,useSyncExternalStore:Yh,useId:lp,unstable_isNewReconciler:!1},dv={readContext:yi,useCallback:sp,useContext:yi,useEffect:ou,useImperativeHandle:rp,useInsertionEffect:tp,useLayoutEffect:np,useMemo:ap,useReducer:au,useRef:Qh,useState:function(){return au(Xa)},useDebugValue:lu,useDeferredValue:function(n){var i=Mi();return En===null?i.memoizedState=n:op(i,En.memoizedState,n)},useTransition:function(){var n=au(Xa)[0],i=Mi().memoizedState;return[n,i]},useMutableSource:Xh,useSyncExternalStore:Yh,useId:lp,unstable_isNewReconciler:!1};function Ui(n,i){if(n&&n.defaultProps){i=J({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function cu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:J({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var el={isMounted:function(n){return(n=n._reactInternals)?_n(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=qn(),d=Vr(n),m=pr(c,d);m.payload=i,a!=null&&(m.callback=a),i=Br(n,m,d),i!==null&&(Bi(i,n,d,c),Yo(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=qn(),d=Vr(n),m=pr(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=Br(n,m,d),i!==null&&(Bi(i,n,d,c),Yo(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=qn(),c=Vr(n),d=pr(a,c);d.tag=2,i!=null&&(d.callback=i),i=Br(n,d,c),i!==null&&(Bi(i,n,c,a),Yo(i,n,c))}};function fp(n,i,a,c,d,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,T):i.prototype&&i.prototype.isPureReactComponent?!Na(a,c)||!Na(d,m):!0}function hp(n,i,a){var c=!1,d=Ur,m=i.contextType;return typeof m=="object"&&m!==null?m=yi(m):(d=Jn(i)?rs:kn.current,c=i.contextTypes,m=(c=c!=null)?zs(n,d):Ur),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=el,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function pp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&el.enqueueReplaceState(i,i.state,null)}function uu(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},$c(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=yi(m):(m=Jn(i)?rs:kn.current,d.context=zs(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(cu(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&el.enqueueReplaceState(d,d.state,null),jo(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function qs(n,i){try{var a="",c=i;do a+=Xe(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function du(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function fu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var fv=typeof WeakMap=="function"?WeakMap:Map;function mp(n,i,a){a=pr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){ol||(ol=!0,bu=c),fu(n,i)},a}function gp(n,i,a){a=pr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){fu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){fu(n,i),typeof c!="function"&&(zr===null?zr=new Set([this]):zr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function vp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new fv;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=Av.bind(null,n,i,a),i.then(n,n))}function _p(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function xp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=pr(-1,1),i.tag=2,Br(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var hv=C.ReactCurrentOwner,Qn=!1;function jn(n,i,a,c){i.child=n===null?kh(i,null,a,c):Ws(i,n.child,a,c)}function Sp(n,i,a,c,d){a=a.render;var m=i.ref;return Ys(i,d),c=iu(n,i,a,c,m,d),a=ru(),n!==null&&!Qn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,mr(n,i,d)):(cn&&a&&zc(i),i.flags|=1,jn(n,i,c,d),i.child)}function yp(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Du(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Mp(n,i,m,c,d)):(n=hl(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var T=m.memoizedProps;if(a=a.compare,a=a!==null?a:Na,a(T,c)&&n.ref===i.ref)return mr(n,i,d)}return i.flags|=1,n=Wr(m,c),n.ref=i.ref,n.return=i,i.child=n}function Mp(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(Na(m,c)&&n.ref===i.ref)if(Qn=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Qn=!0);else return i.lanes=n.lanes,mr(n,i,d)}return hu(n,i,a,c,d)}function Ep(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},rn($s,ui),ui|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,rn($s,ui),ui|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,rn($s,ui),ui|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,rn($s,ui),ui|=c;return jn(n,i,d,a),i.child}function wp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function hu(n,i,a,c,d){var m=Jn(a)?rs:kn.current;return m=zs(i,m),Ys(i,d),a=iu(n,i,a,c,m,d),c=ru(),n!==null&&!Qn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,mr(n,i,d)):(cn&&c&&zc(i),i.flags|=1,jn(n,i,a,d),i.child)}function Tp(n,i,a,c,d){if(Jn(a)){var m=!0;Bo(i)}else m=!1;if(Ys(i,d),i.stateNode===null)nl(n,i),hp(i,a,c),uu(i,a,c,d),c=!0;else if(n===null){var T=i.stateNode,B=i.memoizedProps;T.props=B;var Y=T.context,me=a.contextType;typeof me=="object"&&me!==null?me=yi(me):(me=Jn(a)?rs:kn.current,me=zs(i,me));var Ae=a.getDerivedStateFromProps,Pe=typeof Ae=="function"||typeof T.getSnapshotBeforeUpdate=="function";Pe||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(B!==c||Y!==me)&&pp(i,T,c,me),Or=!1;var we=i.memoizedState;T.state=we,jo(i,c,T,d),Y=i.memoizedState,B!==c||we!==Y||Zn.current||Or?(typeof Ae=="function"&&(cu(i,a,Ae,c),Y=i.memoizedState),(B=Or||fp(i,a,B,c,we,Y,me))?(Pe||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=Y),T.props=c,T.state=Y,T.context=me,c=B):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,Gh(n,i),B=i.memoizedProps,me=i.type===i.elementType?B:Ui(i.type,B),T.props=me,Pe=i.pendingProps,we=T.context,Y=a.contextType,typeof Y=="object"&&Y!==null?Y=yi(Y):(Y=Jn(a)?rs:kn.current,Y=zs(i,Y));var et=a.getDerivedStateFromProps;(Ae=typeof et=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(B!==Pe||we!==Y)&&pp(i,T,c,Y),Or=!1,we=i.memoizedState,T.state=we,jo(i,c,T,d);var ot=i.memoizedState;B!==Pe||we!==ot||Zn.current||Or?(typeof et=="function"&&(cu(i,a,et,c),ot=i.memoizedState),(me=Or||fp(i,a,me,c,we,ot,Y)||!1)?(Ae||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,ot,Y),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,ot,Y)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||B===n.memoizedProps&&we===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&we===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ot),T.props=c,T.state=ot,T.context=Y,c=me):(typeof T.componentDidUpdate!="function"||B===n.memoizedProps&&we===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&we===n.memoizedState||(i.flags|=1024),c=!1)}return pu(n,i,a,c,m,d)}function pu(n,i,a,c,d,m){wp(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return d&&Ph(i,a,!1),mr(n,i,m);c=i.stateNode,hv.current=i;var B=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=Ws(i,n.child,null,m),i.child=Ws(i,null,B,m)):jn(n,i,B,m),i.memoizedState=c.state,d&&Ph(i,a,!0),i.child}function Ap(n){var i=n.stateNode;i.pendingContext?Rh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Rh(n,i.context,!1),Zc(n,i.containerInfo)}function bp(n,i,a,c,d){return Hs(),Wc(d),i.flags|=256,jn(n,i,a,c),i.child}var mu={dehydrated:null,treeContext:null,retryLane:0};function gu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Rp(n,i,a){var c=i.pendingProps,d=dn.current,m=!1,T=(i.flags&128)!==0,B;if((B=T)||(B=n!==null&&n.memoizedState===null?!1:(d&2)!==0),B?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),rn(dn,d&1),n===null)return Hc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=c.children,n=c.fallback,m?(c=i.mode,m=i.child,T={mode:"hidden",children:T},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=T):m=pl(T,c,0,null),n=ps(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=gu(a),i.memoizedState=mu,n):vu(i,T));if(d=n.memoizedState,d!==null&&(B=d.dehydrated,B!==null))return pv(n,i,T,c,B,d,a);if(m){m=c.fallback,T=i.mode,d=n.child,B=d.sibling;var Y={mode:"hidden",children:c.children};return(T&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=Y,i.deletions=null):(c=Wr(d,Y),c.subtreeFlags=d.subtreeFlags&14680064),B!==null?m=Wr(B,m):(m=ps(m,T,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,T=n.child.memoizedState,T=T===null?gu(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},m.memoizedState=T,m.childLanes=n.childLanes&~a,i.memoizedState=mu,c}return m=n.child,n=m.sibling,c=Wr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function vu(n,i){return i=pl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function tl(n,i,a,c){return c!==null&&Wc(c),Ws(i,n.child,null,a),n=vu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function pv(n,i,a,c,d,m,T){if(a)return i.flags&256?(i.flags&=-257,c=du(Error(t(422))),tl(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=pl({mode:"visible",children:c.children},d,0,null),m=ps(m,d,T,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Ws(i,n.child,null,T),i.child.memoizedState=gu(T),i.memoizedState=mu,m);if((i.mode&1)===0)return tl(n,i,T,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var B=c.dgst;return c=B,m=Error(t(419)),c=du(m,c,void 0),tl(n,i,T,c)}if(B=(T&n.childLanes)!==0,Qn||B){if(c=Pn,c!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|T))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,hr(n,d),Bi(c,n,d,-1))}return Iu(),c=du(Error(t(421))),tl(n,i,T,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=bv.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,ci=Ir(d.nextSibling),li=i,cn=!0,Di=null,n!==null&&(xi[Si++]=dr,xi[Si++]=fr,xi[Si++]=ss,dr=n.id,fr=n.overflow,ss=i),i=vu(i,c.children),i.flags|=4096,i)}function Cp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),qc(n.return,i,a)}function _u(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Pp(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(jn(n,i,c.children,a),c=dn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Cp(n,a,i);else if(n.tag===19)Cp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(rn(dn,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&qo(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),_u(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&qo(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}_u(i,!0,a,null,m);break;case"together":_u(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function nl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function mr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),us|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Wr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Wr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function mv(n,i,a){switch(i.tag){case 3:Ap(i),Hs();break;case 5:Wh(i);break;case 1:Jn(i.type)&&Bo(i);break;case 4:Zc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;rn(Wo,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(rn(dn,dn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Rp(n,i,a):(rn(dn,dn.current&1),n=mr(n,i,a),n!==null?n.sibling:null);rn(dn,dn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Pp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),rn(dn,dn.current),c)break;return null;case 22:case 23:return i.lanes=0,Ep(n,i,a)}return mr(n,i,a)}var Lp,xu,Np,Ip;Lp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},xu=function(){},Np=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,ls(qi.current);var m=null;switch(a){case"input":d=ft(n,d),c=ft(n,c),m=[];break;case"select":d=J({},d,{value:void 0}),c=J({},c,{value:void 0}),m=[];break;case"textarea":d=mt(n,d),c=mt(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Uo)}$e(a,c);var T;a=null;for(me in d)if(!c.hasOwnProperty(me)&&d.hasOwnProperty(me)&&d[me]!=null)if(me==="style"){var B=d[me];for(T in B)B.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else me!=="dangerouslySetInnerHTML"&&me!=="children"&&me!=="suppressContentEditableWarning"&&me!=="suppressHydrationWarning"&&me!=="autoFocus"&&(o.hasOwnProperty(me)?m||(m=[]):(m=m||[]).push(me,null));for(me in c){var Y=c[me];if(B=d!=null?d[me]:void 0,c.hasOwnProperty(me)&&Y!==B&&(Y!=null||B!=null))if(me==="style")if(B){for(T in B)!B.hasOwnProperty(T)||Y&&Y.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in Y)Y.hasOwnProperty(T)&&B[T]!==Y[T]&&(a||(a={}),a[T]=Y[T])}else a||(m||(m=[]),m.push(me,a)),a=Y;else me==="dangerouslySetInnerHTML"?(Y=Y?Y.__html:void 0,B=B?B.__html:void 0,Y!=null&&B!==Y&&(m=m||[]).push(me,Y)):me==="children"?typeof Y!="string"&&typeof Y!="number"||(m=m||[]).push(me,""+Y):me!=="suppressContentEditableWarning"&&me!=="suppressHydrationWarning"&&(o.hasOwnProperty(me)?(Y!=null&&me==="onScroll"&&sn("scroll",n),m||B===Y||(m=[])):(m=m||[]).push(me,Y))}a&&(m=m||[]).push("style",a);var me=m;(i.updateQueue=me)&&(i.flags|=4)}},Ip=function(n,i,a,c){a!==c&&(i.flags|=4)};function ja(n,i){if(!cn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Gn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function gv(n,i,a){var c=i.pendingProps;switch(Gc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gn(i),null;case 1:return Jn(i.type)&&Oo(),Gn(i),null;case 3:return c=i.stateNode,js(),an(Zn),an(kn),eu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Vo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Di!==null&&(Pu(Di),Di=null))),xu(n,i),Gn(i),null;case 5:Jc(i);var d=ls(Va.current);if(a=i.type,n!==null&&i.stateNode!=null)Np(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Gn(i),null}if(n=ls(qi.current),Vo(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[ji]=i,c[Oa]=m,n=(i.mode&1)!==0,a){case"dialog":sn("cancel",c),sn("close",c);break;case"iframe":case"object":case"embed":sn("load",c);break;case"video":case"audio":for(d=0;d<Da.length;d++)sn(Da[d],c);break;case"source":sn("error",c);break;case"img":case"image":case"link":sn("error",c),sn("load",c);break;case"details":sn("toggle",c);break;case"input":Rt(c,m),sn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},sn("invalid",c);break;case"textarea":q(c,m),sn("invalid",c)}$e(a,m),d=null;for(var T in m)if(m.hasOwnProperty(T)){var B=m[T];T==="children"?typeof B=="string"?c.textContent!==B&&(m.suppressHydrationWarning!==!0&&Do(c.textContent,B,n),d=["children",B]):typeof B=="number"&&c.textContent!==""+B&&(m.suppressHydrationWarning!==!0&&Do(c.textContent,B,n),d=["children",""+B]):o.hasOwnProperty(T)&&B!=null&&T==="onScroll"&&sn("scroll",c)}switch(a){case"input":Ge(c),St(c,m,!0);break;case"textarea":Ge(c),Oe(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Uo)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=b(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[ji]=i,n[Oa]=c,Lp(n,i,!1,!1),i.stateNode=n;e:{switch(T=Ue(a,c),a){case"dialog":sn("cancel",n),sn("close",n),d=c;break;case"iframe":case"object":case"embed":sn("load",n),d=c;break;case"video":case"audio":for(d=0;d<Da.length;d++)sn(Da[d],n);d=c;break;case"source":sn("error",n),d=c;break;case"img":case"image":case"link":sn("error",n),sn("load",n),d=c;break;case"details":sn("toggle",n),d=c;break;case"input":Rt(n,c),d=ft(n,c),sn("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=J({},c,{value:void 0}),sn("invalid",n);break;case"textarea":q(n,c),d=mt(n,c),sn("invalid",n);break;default:d=c}$e(a,d),B=d;for(m in B)if(B.hasOwnProperty(m)){var Y=B[m];m==="style"?_e(n,Y):m==="dangerouslySetInnerHTML"?(Y=Y?Y.__html:void 0,Y!=null&&se(n,Y)):m==="children"?typeof Y=="string"?(a!=="textarea"||Y!=="")&&de(n,Y):typeof Y=="number"&&de(n,""+Y):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?Y!=null&&m==="onScroll"&&sn("scroll",n):Y!=null&&W(n,m,Y,T))}switch(a){case"input":Ge(n),St(n,c,!1);break;case"textarea":Ge(n),Oe(n);break;case"option":c.value!=null&&n.setAttribute("value",""+he(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?It(n,!!c.multiple,m,!1):c.defaultValue!=null&&It(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Uo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Gn(i),null;case 6:if(n&&i.stateNode!=null)Ip(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=ls(Va.current),ls(qi.current),Vo(i)){if(c=i.stateNode,a=i.memoizedProps,c[ji]=i,(m=c.nodeValue!==a)&&(n=li,n!==null))switch(n.tag){case 3:Do(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Do(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[ji]=i,i.stateNode=c}return Gn(i),null;case 13:if(an(dn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(cn&&ci!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Fh(),Hs(),i.flags|=98560,m=!1;else if(m=Vo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[ji]=i}else Hs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Gn(i),m=!1}else Di!==null&&(Pu(Di),Di=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(dn.current&1)!==0?wn===0&&(wn=3):Iu())),i.updateQueue!==null&&(i.flags|=4),Gn(i),null);case 4:return js(),xu(n,i),n===null&&Ua(i.stateNode.containerInfo),Gn(i),null;case 10:return jc(i.type._context),Gn(i),null;case 17:return Jn(i.type)&&Oo(),Gn(i),null;case 19:if(an(dn),m=i.memoizedState,m===null)return Gn(i),null;if(c=(i.flags&128)!==0,T=m.rendering,T===null)if(c)ja(m,!1);else{if(wn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=qo(n),T!==null){for(i.flags|=128,ja(m,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,T=m.alternate,T===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=T.childLanes,m.lanes=T.lanes,m.child=T.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=T.memoizedProps,m.memoizedState=T.memoizedState,m.updateQueue=T.updateQueue,m.type=T.type,n=T.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return rn(dn,dn.current&1|2),i.child}n=n.sibling}m.tail!==null&&kt()>Zs&&(i.flags|=128,c=!0,ja(m,!1),i.lanes=4194304)}else{if(!c)if(n=qo(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ja(m,!0),m.tail===null&&m.tailMode==="hidden"&&!T.alternate&&!cn)return Gn(i),null}else 2*kt()-m.renderingStartTime>Zs&&a!==1073741824&&(i.flags|=128,c=!0,ja(m,!1),i.lanes=4194304);m.isBackwards?(T.sibling=i.child,i.child=T):(a=m.last,a!==null?a.sibling=T:i.child=T,m.last=T)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=kt(),i.sibling=null,a=dn.current,rn(dn,c?a&1|2:a&1),i):(Gn(i),null);case 22:case 23:return Nu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ui&1073741824)!==0&&(Gn(i),i.subtreeFlags&6&&(i.flags|=8192)):Gn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function vv(n,i){switch(Gc(i),i.tag){case 1:return Jn(i.type)&&Oo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return js(),an(Zn),an(kn),eu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Jc(i),null;case 13:if(an(dn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Hs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return an(dn),null;case 4:return js(),null;case 10:return jc(i.type._context),null;case 22:case 23:return Nu(),null;case 24:return null;default:return null}}var il=!1,Vn=!1,_v=typeof WeakSet=="function"?WeakSet:Set,st=null;function Ks(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){pn(n,i,c)}else a.current=null}function Su(n,i,a){try{a()}catch(c){pn(n,i,c)}}var Dp=!1;function xv(n,i){if(Nc=Eo,n=fh(),wc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var T=0,B=-1,Y=-1,me=0,Ae=0,Pe=n,we=null;t:for(;;){for(var et;Pe!==a||d!==0&&Pe.nodeType!==3||(B=T+d),Pe!==m||c!==0&&Pe.nodeType!==3||(Y=T+c),Pe.nodeType===3&&(T+=Pe.nodeValue.length),(et=Pe.firstChild)!==null;)we=Pe,Pe=et;for(;;){if(Pe===n)break t;if(we===a&&++me===d&&(B=T),we===m&&++Ae===c&&(Y=T),(et=Pe.nextSibling)!==null)break;Pe=we,we=Pe.parentNode}Pe=et}a=B===-1||Y===-1?null:{start:B,end:Y}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ic={focusedElem:n,selectionRange:a},Eo=!1,st=i;st!==null;)if(i=st,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,st=n;else for(;st!==null;){i=st;try{var ot=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ot!==null){var lt=ot.memoizedProps,xn=ot.memoizedState,ce=i.stateNode,K=ce.getSnapshotBeforeUpdate(i.elementType===i.type?lt:Ui(i.type,lt),xn);ce.__reactInternalSnapshotBeforeUpdate=K}break;case 3:var fe=i.stateNode.containerInfo;fe.nodeType===1?fe.textContent="":fe.nodeType===9&&fe.documentElement&&fe.removeChild(fe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ie){pn(i,i.return,Ie)}if(n=i.sibling,n!==null){n.return=i.return,st=n;break}st=i.return}return ot=Dp,Dp=!1,ot}function qa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&Su(i,a,m)}d=d.next}while(d!==c)}}function rl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function yu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Up(n){var i=n.alternate;i!==null&&(n.alternate=null,Up(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[ji],delete i[Oa],delete i[Oc],delete i[tv],delete i[nv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Fp(n){return n.tag===5||n.tag===3||n.tag===4}function Op(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Fp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Mu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Uo));else if(c!==4&&(n=n.child,n!==null))for(Mu(n,i,a),n=n.sibling;n!==null;)Mu(n,i,a),n=n.sibling}function Eu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Eu(n,i,a),n=n.sibling;n!==null;)Eu(n,i,a),n=n.sibling}var Un=null,Fi=!1;function kr(n,i,a){for(a=a.child;a!==null;)Bp(n,i,a),a=a.sibling}function Bp(n,i,a){if(ie&&typeof ie.onCommitFiberUnmount=="function")try{ie.onCommitFiberUnmount(ne,a)}catch{}switch(a.tag){case 5:Vn||Ks(a,i);case 6:var c=Un,d=Fi;Un=null,kr(n,i,a),Un=c,Fi=d,Un!==null&&(Fi?(n=Un,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Un.removeChild(a.stateNode));break;case 18:Un!==null&&(Fi?(n=Un,a=a.stateNode,n.nodeType===8?Fc(n.parentNode,a):n.nodeType===1&&Fc(n,a),Aa(n)):Fc(Un,a.stateNode));break;case 4:c=Un,d=Fi,Un=a.stateNode.containerInfo,Fi=!0,kr(n,i,a),Un=c,Fi=d;break;case 0:case 11:case 14:case 15:if(!Vn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,T=m.destroy;m=m.tag,T!==void 0&&((m&2)!==0||(m&4)!==0)&&Su(a,i,T),d=d.next}while(d!==c)}kr(n,i,a);break;case 1:if(!Vn&&(Ks(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(B){pn(a,i,B)}kr(n,i,a);break;case 21:kr(n,i,a);break;case 22:a.mode&1?(Vn=(c=Vn)||a.memoizedState!==null,kr(n,i,a),Vn=c):kr(n,i,a);break;default:kr(n,i,a)}}function kp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new _v),i.forEach(function(c){var d=Rv.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Oi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,T=i,B=T;e:for(;B!==null;){switch(B.tag){case 5:Un=B.stateNode,Fi=!1;break e;case 3:Un=B.stateNode.containerInfo,Fi=!0;break e;case 4:Un=B.stateNode.containerInfo,Fi=!0;break e}B=B.return}if(Un===null)throw Error(t(160));Bp(m,T,d),Un=null,Fi=!1;var Y=d.alternate;Y!==null&&(Y.return=null),d.return=null}catch(me){pn(d,i,me)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)zp(i,n),i=i.sibling}function zp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Oi(i,n),$i(n),c&4){try{qa(3,n,n.return),rl(3,n)}catch(lt){pn(n,n.return,lt)}try{qa(5,n,n.return)}catch(lt){pn(n,n.return,lt)}}break;case 1:Oi(i,n),$i(n),c&512&&a!==null&&Ks(a,a.return);break;case 5:if(Oi(i,n),$i(n),c&512&&a!==null&&Ks(a,a.return),n.flags&32){var d=n.stateNode;try{de(d,"")}catch(lt){pn(n,n.return,lt)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,T=a!==null?a.memoizedProps:m,B=n.type,Y=n.updateQueue;if(n.updateQueue=null,Y!==null)try{B==="input"&&m.type==="radio"&&m.name!=null&&Lt(d,m),Ue(B,T);var me=Ue(B,m);for(T=0;T<Y.length;T+=2){var Ae=Y[T],Pe=Y[T+1];Ae==="style"?_e(d,Pe):Ae==="dangerouslySetInnerHTML"?se(d,Pe):Ae==="children"?de(d,Pe):W(d,Ae,Pe,me)}switch(B){case"input":xt(d,m);break;case"textarea":jt(d,m);break;case"select":var we=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var et=m.value;et!=null?It(d,!!m.multiple,et,!1):we!==!!m.multiple&&(m.defaultValue!=null?It(d,!!m.multiple,m.defaultValue,!0):It(d,!!m.multiple,m.multiple?[]:"",!1))}d[Oa]=m}catch(lt){pn(n,n.return,lt)}}break;case 6:if(Oi(i,n),$i(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(lt){pn(n,n.return,lt)}}break;case 3:if(Oi(i,n),$i(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Aa(i.containerInfo)}catch(lt){pn(n,n.return,lt)}break;case 4:Oi(i,n),$i(n);break;case 13:Oi(i,n),$i(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Au=kt())),c&4&&kp(n);break;case 22:if(Ae=a!==null&&a.memoizedState!==null,n.mode&1?(Vn=(me=Vn)||Ae,Oi(i,n),Vn=me):Oi(i,n),$i(n),c&8192){if(me=n.memoizedState!==null,(n.stateNode.isHidden=me)&&!Ae&&(n.mode&1)!==0)for(st=n,Ae=n.child;Ae!==null;){for(Pe=st=Ae;st!==null;){switch(we=st,et=we.child,we.tag){case 0:case 11:case 14:case 15:qa(4,we,we.return);break;case 1:Ks(we,we.return);var ot=we.stateNode;if(typeof ot.componentWillUnmount=="function"){c=we,a=we.return;try{i=c,ot.props=i.memoizedProps,ot.state=i.memoizedState,ot.componentWillUnmount()}catch(lt){pn(c,a,lt)}}break;case 5:Ks(we,we.return);break;case 22:if(we.memoizedState!==null){Hp(Pe);continue}}et!==null?(et.return=we,st=et):Hp(Pe)}Ae=Ae.sibling}e:for(Ae=null,Pe=n;;){if(Pe.tag===5){if(Ae===null){Ae=Pe;try{d=Pe.stateNode,me?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(B=Pe.stateNode,Y=Pe.memoizedProps.style,T=Y!=null&&Y.hasOwnProperty("display")?Y.display:null,B.style.display=ge("display",T))}catch(lt){pn(n,n.return,lt)}}}else if(Pe.tag===6){if(Ae===null)try{Pe.stateNode.nodeValue=me?"":Pe.memoizedProps}catch(lt){pn(n,n.return,lt)}}else if((Pe.tag!==22&&Pe.tag!==23||Pe.memoizedState===null||Pe===n)&&Pe.child!==null){Pe.child.return=Pe,Pe=Pe.child;continue}if(Pe===n)break e;for(;Pe.sibling===null;){if(Pe.return===null||Pe.return===n)break e;Ae===Pe&&(Ae=null),Pe=Pe.return}Ae===Pe&&(Ae=null),Pe.sibling.return=Pe.return,Pe=Pe.sibling}}break;case 19:Oi(i,n),$i(n),c&4&&kp(n);break;case 21:break;default:Oi(i,n),$i(n)}}function $i(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Fp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(de(d,""),c.flags&=-33);var m=Op(n);Eu(n,m,d);break;case 3:case 4:var T=c.stateNode.containerInfo,B=Op(n);Mu(n,B,T);break;default:throw Error(t(161))}}catch(Y){pn(n,n.return,Y)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Sv(n,i,a){st=n,Gp(n)}function Gp(n,i,a){for(var c=(n.mode&1)!==0;st!==null;){var d=st,m=d.child;if(d.tag===22&&c){var T=d.memoizedState!==null||il;if(!T){var B=d.alternate,Y=B!==null&&B.memoizedState!==null||Vn;B=il;var me=Vn;if(il=T,(Vn=Y)&&!me)for(st=d;st!==null;)T=st,Y=T.child,T.tag===22&&T.memoizedState!==null?Wp(d):Y!==null?(Y.return=T,st=Y):Wp(d);for(;m!==null;)st=m,Gp(m),m=m.sibling;st=d,il=B,Vn=me}Vp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,st=m):Vp(n)}}function Vp(n){for(;st!==null;){var i=st;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Vn||rl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Vn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Ui(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Hh(i,m,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Hh(i,T,a)}break;case 5:var B=i.stateNode;if(a===null&&i.flags&4){a=B;var Y=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":Y.autoFocus&&a.focus();break;case"img":Y.src&&(a.src=Y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var me=i.alternate;if(me!==null){var Ae=me.memoizedState;if(Ae!==null){var Pe=Ae.dehydrated;Pe!==null&&Aa(Pe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Vn||i.flags&512&&yu(i)}catch(we){pn(i,i.return,we)}}if(i===n){st=null;break}if(a=i.sibling,a!==null){a.return=i.return,st=a;break}st=i.return}}function Hp(n){for(;st!==null;){var i=st;if(i===n){st=null;break}var a=i.sibling;if(a!==null){a.return=i.return,st=a;break}st=i.return}}function Wp(n){for(;st!==null;){var i=st;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{rl(4,i)}catch(Y){pn(i,a,Y)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(Y){pn(i,d,Y)}}var m=i.return;try{yu(i)}catch(Y){pn(i,m,Y)}break;case 5:var T=i.return;try{yu(i)}catch(Y){pn(i,T,Y)}}}catch(Y){pn(i,i.return,Y)}if(i===n){st=null;break}var B=i.sibling;if(B!==null){B.return=i.return,st=B;break}st=i.return}}var yv=Math.ceil,sl=C.ReactCurrentDispatcher,wu=C.ReactCurrentOwner,Ei=C.ReactCurrentBatchConfig,Wt=0,Pn=null,Sn=null,Fn=0,ui=0,$s=Dr(0),wn=0,Ka=null,us=0,al=0,Tu=0,$a=null,ei=null,Au=0,Zs=1/0,gr=null,ol=!1,bu=null,zr=null,ll=!1,Gr=null,cl=0,Za=0,Ru=null,ul=-1,dl=0;function qn(){return(Wt&6)!==0?kt():ul!==-1?ul:ul=kt()}function Vr(n){return(n.mode&1)===0?1:(Wt&2)!==0&&Fn!==0?Fn&-Fn:rv.transition!==null?(dl===0&&(dl=qt()),dl):(n=Pt,n!==0||(n=window.event,n=n===void 0?16:Yf(n.type)),n)}function Bi(n,i,a,c){if(50<Za)throw Za=0,Ru=null,Error(t(185));Jt(n,a,c),((Wt&2)===0||n!==Pn)&&(n===Pn&&((Wt&2)===0&&(al|=a),wn===4&&Hr(n,Fn)),ti(n,c),a===1&&Wt===0&&(i.mode&1)===0&&(Zs=kt()+500,ko&&Fr()))}function ti(n,i){var a=n.callbackNode;Ct(n,i);var c=at(n,n===Pn?Fn:0);if(c===0)a!==null&&X(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&X(a),i===1)n.tag===0?iv(Yp.bind(null,n)):Lh(Yp.bind(null,n)),Q0(function(){(Wt&6)===0&&Fr()}),a=null;else{switch(ai(c)){case 1:a=on;break;case 4:a=Zt;break;case 16:a=A;break;case 536870912:a=ue;break;default:a=A}a=em(a,Xp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Xp(n,i){if(ul=-1,dl=0,(Wt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Js()&&n.callbackNode!==a)return null;var c=at(n,n===Pn?Fn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=fl(n,c);else{i=c;var d=Wt;Wt|=2;var m=qp();(Pn!==n||Fn!==i)&&(gr=null,Zs=kt()+500,fs(n,i));do try{wv();break}catch(B){jp(n,B)}while(!0);Yc(),sl.current=m,Wt=d,Sn!==null?i=0:(Pn=null,Fn=0,i=wn)}if(i!==0){if(i===2&&(d=wt(n),d!==0&&(c=d,i=Cu(n,d))),i===1)throw a=Ka,fs(n,0),Hr(n,c),ti(n,kt()),a;if(i===6)Hr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Mv(d)&&(i=fl(n,c),i===2&&(m=wt(n),m!==0&&(c=m,i=Cu(n,m))),i===1))throw a=Ka,fs(n,0),Hr(n,c),ti(n,kt()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:hs(n,ei,gr);break;case 3:if(Hr(n,c),(c&130023424)===c&&(i=Au+500-kt(),10<i)){if(at(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){qn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Uc(hs.bind(null,n,ei,gr),i);break}hs(n,ei,gr);break;case 4:if(Hr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var T=31-He(c);m=1<<T,T=i[T],T>d&&(d=T),c&=~m}if(c=d,c=kt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*yv(c/1960))-c,10<c){n.timeoutHandle=Uc(hs.bind(null,n,ei,gr),c);break}hs(n,ei,gr);break;case 5:hs(n,ei,gr);break;default:throw Error(t(329))}}}return ti(n,kt()),n.callbackNode===a?Xp.bind(null,n):null}function Cu(n,i){var a=$a;return n.current.memoizedState.isDehydrated&&(fs(n,i).flags|=256),n=fl(n,i),n!==2&&(i=ei,ei=a,i!==null&&Pu(i)),n}function Pu(n){ei===null?ei=n:ei.push.apply(ei,n)}function Mv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!Ii(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Hr(n,i){for(i&=~Tu,i&=~al,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-He(i),c=1<<a;n[a]=-1,i&=~c}}function Yp(n){if((Wt&6)!==0)throw Error(t(327));Js();var i=at(n,0);if((i&1)===0)return ti(n,kt()),null;var a=fl(n,i);if(n.tag!==0&&a===2){var c=wt(n);c!==0&&(i=c,a=Cu(n,c))}if(a===1)throw a=Ka,fs(n,0),Hr(n,i),ti(n,kt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,hs(n,ei,gr),ti(n,kt()),null}function Lu(n,i){var a=Wt;Wt|=1;try{return n(i)}finally{Wt=a,Wt===0&&(Zs=kt()+500,ko&&Fr())}}function ds(n){Gr!==null&&Gr.tag===0&&(Wt&6)===0&&Js();var i=Wt;Wt|=1;var a=Ei.transition,c=Pt;try{if(Ei.transition=null,Pt=1,n)return n()}finally{Pt=c,Ei.transition=a,Wt=i,(Wt&6)===0&&Fr()}}function Nu(){ui=$s.current,an($s)}function fs(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,J0(a)),Sn!==null)for(a=Sn.return;a!==null;){var c=a;switch(Gc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Oo();break;case 3:js(),an(Zn),an(kn),eu();break;case 5:Jc(c);break;case 4:js();break;case 13:an(dn);break;case 19:an(dn);break;case 10:jc(c.type._context);break;case 22:case 23:Nu()}a=a.return}if(Pn=n,Sn=n=Wr(n.current,null),Fn=ui=i,wn=0,Ka=null,Tu=al=us=0,ei=$a=null,os!==null){for(i=0;i<os.length;i++)if(a=os[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var T=m.next;m.next=d,c.next=T}a.pending=c}os=null}return n}function jp(n,i){do{var a=Sn;try{if(Yc(),Ko.current=Qo,$o){for(var c=fn.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}$o=!1}if(cs=0,Cn=En=fn=null,Ha=!1,Wa=0,wu.current=null,a===null||a.return===null){wn=1,Ka=i,Sn=null;break}e:{var m=n,T=a.return,B=a,Y=i;if(i=Fn,B.flags|=32768,Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var me=Y,Ae=B,Pe=Ae.tag;if((Ae.mode&1)===0&&(Pe===0||Pe===11||Pe===15)){var we=Ae.alternate;we?(Ae.updateQueue=we.updateQueue,Ae.memoizedState=we.memoizedState,Ae.lanes=we.lanes):(Ae.updateQueue=null,Ae.memoizedState=null)}var et=_p(T);if(et!==null){et.flags&=-257,xp(et,T,B,m,i),et.mode&1&&vp(m,me,i),i=et,Y=me;var ot=i.updateQueue;if(ot===null){var lt=new Set;lt.add(Y),i.updateQueue=lt}else ot.add(Y);break e}else{if((i&1)===0){vp(m,me,i),Iu();break e}Y=Error(t(426))}}else if(cn&&B.mode&1){var xn=_p(T);if(xn!==null){(xn.flags&65536)===0&&(xn.flags|=256),xp(xn,T,B,m,i),Wc(qs(Y,B));break e}}m=Y=qs(Y,B),wn!==4&&(wn=2),$a===null?$a=[m]:$a.push(m),m=T;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var ce=mp(m,Y,i);Vh(m,ce);break e;case 1:B=Y;var K=m.type,fe=m.stateNode;if((m.flags&128)===0&&(typeof K.getDerivedStateFromError=="function"||fe!==null&&typeof fe.componentDidCatch=="function"&&(zr===null||!zr.has(fe)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ie=gp(m,B,i);Vh(m,Ie);break e}}m=m.return}while(m!==null)}$p(a)}catch(ct){i=ct,Sn===a&&a!==null&&(Sn=a=a.return);continue}break}while(!0)}function qp(){var n=sl.current;return sl.current=Qo,n===null?Qo:n}function Iu(){(wn===0||wn===3||wn===2)&&(wn=4),Pn===null||(us&268435455)===0&&(al&268435455)===0||Hr(Pn,Fn)}function fl(n,i){var a=Wt;Wt|=2;var c=qp();(Pn!==n||Fn!==i)&&(gr=null,fs(n,i));do try{Ev();break}catch(d){jp(n,d)}while(!0);if(Yc(),Wt=a,sl.current=c,Sn!==null)throw Error(t(261));return Pn=null,Fn=0,wn}function Ev(){for(;Sn!==null;)Kp(Sn)}function wv(){for(;Sn!==null&&!nn();)Kp(Sn)}function Kp(n){var i=Qp(n.alternate,n,ui);n.memoizedProps=n.pendingProps,i===null?$p(n):Sn=i,wu.current=null}function $p(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=gv(a,i,ui),a!==null){Sn=a;return}}else{if(a=vv(a,i),a!==null){a.flags&=32767,Sn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{wn=6,Sn=null;return}}if(i=i.sibling,i!==null){Sn=i;return}Sn=i=n}while(i!==null);wn===0&&(wn=5)}function hs(n,i,a){var c=Pt,d=Ei.transition;try{Ei.transition=null,Pt=1,Tv(n,i,a,c)}finally{Ei.transition=d,Pt=c}return null}function Tv(n,i,a,c){do Js();while(Gr!==null);if((Wt&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Bt(n,m),n===Pn&&(Sn=Pn=null,Fn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ll||(ll=!0,em(A,function(){return Js(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Ei.transition,Ei.transition=null;var T=Pt;Pt=1;var B=Wt;Wt|=4,wu.current=null,xv(n,a),zp(a,n),X0(Ic),Eo=!!Nc,Ic=Nc=null,n.current=a,Sv(a),Tt(),Wt=B,Pt=T,Ei.transition=m}else n.current=a;if(ll&&(ll=!1,Gr=n,cl=d),m=n.pendingLanes,m===0&&(zr=null),je(a.stateNode),ti(n,kt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(ol)throw ol=!1,n=bu,bu=null,n;return(cl&1)!==0&&n.tag!==0&&Js(),m=n.pendingLanes,(m&1)!==0?n===Ru?Za++:(Za=0,Ru=n):Za=0,Fr(),null}function Js(){if(Gr!==null){var n=ai(cl),i=Ei.transition,a=Pt;try{if(Ei.transition=null,Pt=16>n?16:n,Gr===null)var c=!1;else{if(n=Gr,Gr=null,cl=0,(Wt&6)!==0)throw Error(t(331));var d=Wt;for(Wt|=4,st=n.current;st!==null;){var m=st,T=m.child;if((st.flags&16)!==0){var B=m.deletions;if(B!==null){for(var Y=0;Y<B.length;Y++){var me=B[Y];for(st=me;st!==null;){var Ae=st;switch(Ae.tag){case 0:case 11:case 15:qa(8,Ae,m)}var Pe=Ae.child;if(Pe!==null)Pe.return=Ae,st=Pe;else for(;st!==null;){Ae=st;var we=Ae.sibling,et=Ae.return;if(Up(Ae),Ae===me){st=null;break}if(we!==null){we.return=et,st=we;break}st=et}}}var ot=m.alternate;if(ot!==null){var lt=ot.child;if(lt!==null){ot.child=null;do{var xn=lt.sibling;lt.sibling=null,lt=xn}while(lt!==null)}}st=m}}if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,st=T;else e:for(;st!==null;){if(m=st,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:qa(9,m,m.return)}var ce=m.sibling;if(ce!==null){ce.return=m.return,st=ce;break e}st=m.return}}var K=n.current;for(st=K;st!==null;){T=st;var fe=T.child;if((T.subtreeFlags&2064)!==0&&fe!==null)fe.return=T,st=fe;else e:for(T=K;st!==null;){if(B=st,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:rl(9,B)}}catch(ct){pn(B,B.return,ct)}if(B===T){st=null;break e}var Ie=B.sibling;if(Ie!==null){Ie.return=B.return,st=Ie;break e}st=B.return}}if(Wt=d,Fr(),ie&&typeof ie.onPostCommitFiberRoot=="function")try{ie.onPostCommitFiberRoot(ne,n)}catch{}c=!0}return c}finally{Pt=a,Ei.transition=i}}return!1}function Zp(n,i,a){i=qs(a,i),i=mp(n,i,1),n=Br(n,i,1),i=qn(),n!==null&&(Jt(n,1,i),ti(n,i))}function pn(n,i,a){if(n.tag===3)Zp(n,n,a);else for(;i!==null;){if(i.tag===3){Zp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(zr===null||!zr.has(c))){n=qs(a,n),n=gp(i,n,1),i=Br(i,n,1),n=qn(),i!==null&&(Jt(i,1,n),ti(i,n));break}}i=i.return}}function Av(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=qn(),n.pingedLanes|=n.suspendedLanes&a,Pn===n&&(Fn&a)===a&&(wn===4||wn===3&&(Fn&130023424)===Fn&&500>kt()-Au?fs(n,0):Tu|=a),ti(n,i)}function Jp(n,i){i===0&&((n.mode&1)===0?i=1:(i=ke,ke<<=1,(ke&130023424)===0&&(ke=4194304)));var a=qn();n=hr(n,i),n!==null&&(Jt(n,i,a),ti(n,a))}function bv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Jp(n,a)}function Rv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Jp(n,a)}var Qp;Qp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Zn.current)Qn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Qn=!1,mv(n,i,a);Qn=(n.flags&131072)!==0}else Qn=!1,cn&&(i.flags&1048576)!==0&&Nh(i,Go,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;nl(n,i),n=i.pendingProps;var d=zs(i,kn.current);Ys(i,a),d=iu(null,i,c,n,d,a);var m=ru();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Jn(c)?(m=!0,Bo(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,$c(i),d.updater=el,i.stateNode=d,d._reactInternals=i,uu(i,c,n,a),i=pu(null,i,c,!0,m,a)):(i.tag=0,cn&&m&&zc(i),jn(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(nl(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Pv(c),n=Ui(c,n),d){case 0:i=hu(null,i,c,n,a);break e;case 1:i=Tp(null,i,c,n,a);break e;case 11:i=Sp(null,i,c,n,a);break e;case 14:i=yp(null,i,c,Ui(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ui(c,d),hu(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ui(c,d),Tp(n,i,c,d,a);case 3:e:{if(Ap(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,Gh(n,i),jo(i,c,null,a);var T=i.memoizedState;if(c=T.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=qs(Error(t(423)),i),i=bp(n,i,c,a,d);break e}else if(c!==d){d=qs(Error(t(424)),i),i=bp(n,i,c,a,d);break e}else for(ci=Ir(i.stateNode.containerInfo.firstChild),li=i,cn=!0,Di=null,a=kh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Hs(),c===d){i=mr(n,i,a);break e}jn(n,i,c,a)}i=i.child}return i;case 5:return Wh(i),n===null&&Hc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,T=d.children,Dc(c,d)?T=null:m!==null&&Dc(c,m)&&(i.flags|=32),wp(n,i),jn(n,i,T,a),i.child;case 6:return n===null&&Hc(i),null;case 13:return Rp(n,i,a);case 4:return Zc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ws(i,null,c,a):jn(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ui(c,d),Sp(n,i,c,d,a);case 7:return jn(n,i,i.pendingProps,a),i.child;case 8:return jn(n,i,i.pendingProps.children,a),i.child;case 12:return jn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,T=d.value,rn(Wo,c._currentValue),c._currentValue=T,m!==null)if(Ii(m.value,T)){if(m.children===d.children&&!Zn.current){i=mr(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var B=m.dependencies;if(B!==null){T=m.child;for(var Y=B.firstContext;Y!==null;){if(Y.context===c){if(m.tag===1){Y=pr(-1,a&-a),Y.tag=2;var me=m.updateQueue;if(me!==null){me=me.shared;var Ae=me.pending;Ae===null?Y.next=Y:(Y.next=Ae.next,Ae.next=Y),me.pending=Y}}m.lanes|=a,Y=m.alternate,Y!==null&&(Y.lanes|=a),qc(m.return,a,i),B.lanes|=a;break}Y=Y.next}}else if(m.tag===10)T=m.type===i.type?null:m.child;else if(m.tag===18){if(T=m.return,T===null)throw Error(t(341));T.lanes|=a,B=T.alternate,B!==null&&(B.lanes|=a),qc(T,a,i),T=m.sibling}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===i){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}jn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Ys(i,a),d=yi(d),c=c(d),i.flags|=1,jn(n,i,c,a),i.child;case 14:return c=i.type,d=Ui(c,i.pendingProps),d=Ui(c.type,d),yp(n,i,c,d,a);case 15:return Mp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Ui(c,d),nl(n,i),i.tag=1,Jn(c)?(n=!0,Bo(i)):n=!1,Ys(i,a),hp(i,c,d),uu(i,c,d,a),pu(null,i,c,!0,n,a);case 19:return Pp(n,i,a);case 22:return Ep(n,i,a)}throw Error(t(156,i.tag))};function em(n,i){return _t(n,i)}function Cv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wi(n,i,a,c){return new Cv(n,i,a,c)}function Du(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Pv(n){if(typeof n=="function")return Du(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$)return 11;if(n===te)return 14}return 2}function Wr(n,i){var a=n.alternate;return a===null?(a=wi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function hl(n,i,a,c,d,m){var T=2;if(c=n,typeof n=="function")Du(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case k:return ps(a.children,d,m,i);case E:T=8,d|=8;break;case P:return n=wi(12,a,i,d|2),n.elementType=P,n.lanes=m,n;case ee:return n=wi(13,a,i,d),n.elementType=ee,n.lanes=m,n;case V:return n=wi(19,a,i,d),n.elementType=V,n.lanes=m,n;case re:return pl(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case z:T=10;break e;case j:T=9;break e;case $:T=11;break e;case te:T=14;break e;case pe:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=wi(T,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function ps(n,i,a,c){return n=wi(7,n,c,i),n.lanes=a,n}function pl(n,i,a,c){return n=wi(22,n,c,i),n.elementType=re,n.lanes=a,n.stateNode={isHidden:!1},n}function Uu(n,i,a){return n=wi(6,n,null,i),n.lanes=a,n}function Fu(n,i,a){return i=wi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Lv(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ze(0),this.expirationTimes=ze(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ze(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Ou(n,i,a,c,d,m,T,B,Y){return n=new Lv(n,i,a,B,Y),i===1?(i=1,m===!0&&(i|=8)):i=0,m=wi(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},$c(m),n}function Nv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function tm(n){if(!n)return Ur;n=n._reactInternals;e:{if(_n(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Jn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Jn(a))return Ch(n,a,i)}return i}function nm(n,i,a,c,d,m,T,B,Y){return n=Ou(a,c,!0,n,d,m,T,B,Y),n.context=tm(null),a=n.current,c=qn(),d=Vr(a),m=pr(c,d),m.callback=i??null,Br(a,m,d),n.current.lanes=d,Jt(n,d,c),ti(n,c),n}function ml(n,i,a,c){var d=i.current,m=qn(),T=Vr(d);return a=tm(a),i.context===null?i.context=a:i.pendingContext=a,i=pr(m,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Br(d,i,T),n!==null&&(Bi(n,d,T,m),Yo(n,d,T)),T}function gl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function im(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Bu(n,i){im(n,i),(n=n.alternate)&&im(n,i)}function Iv(){return null}var rm=typeof reportError=="function"?reportError:function(n){console.error(n)};function ku(n){this._internalRoot=n}vl.prototype.render=ku.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));ml(n,i,null,null)},vl.prototype.unmount=ku.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ds(function(){ml(null,n,null,null)}),i[cr]=null}};function vl(n){this._internalRoot=n}vl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Pi();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Pr.length&&i!==0&&i<Pr[a].priority;a++);Pr.splice(a,0,n),a===0&&Wf(n)}};function zu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function _l(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function sm(){}function Dv(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var me=gl(T);m.call(me)}}var T=nm(i,c,n,0,null,!1,!1,"",sm);return n._reactRootContainer=T,n[cr]=T.current,Ua(n.nodeType===8?n.parentNode:n),ds(),T}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var B=c;c=function(){var me=gl(Y);B.call(me)}}var Y=Ou(n,0,!1,null,null,!1,!1,"",sm);return n._reactRootContainer=Y,n[cr]=Y.current,Ua(n.nodeType===8?n.parentNode:n),ds(function(){ml(i,Y,a,c)}),Y}function xl(n,i,a,c,d){var m=a._reactRootContainer;if(m){var T=m;if(typeof d=="function"){var B=d;d=function(){var Y=gl(T);B.call(Y)}}ml(i,T,n,d)}else T=Dv(a,i,n,d,c);return gl(T)}Ci=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ce(i.pendingLanes);a!==0&&(Rn(i,a|1),ti(i,kt()),(Wt&6)===0&&(Zs=kt()+500,Fr()))}break;case 13:ds(function(){var c=hr(n,1);if(c!==null){var d=qn();Bi(c,n,1,d)}}),Bu(n,1)}},zt=function(n){if(n.tag===13){var i=hr(n,134217728);if(i!==null){var a=qn();Bi(i,n,134217728,a)}Bu(n,134217728)}},ln=function(n){if(n.tag===13){var i=Vr(n),a=hr(n,i);if(a!==null){var c=qn();Bi(a,n,i,c)}Bu(n,i)}},Pi=function(){return Pt},Qt=function(n,i){var a=Pt;try{return Pt=n,i()}finally{Pt=a}},tt=function(n,i,a){switch(i){case"input":if(xt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Fo(c);if(!d)throw Error(t(90));dt(c),xt(c,d)}}}break;case"textarea":jt(n,a);break;case"select":i=a.value,i!=null&&It(n,!!a.multiple,i,!1)}},Be=Lu,Se=ds;var Uv={usingClientEntryPoint:!1,Events:[Ba,Bs,Fo,ve,Fe,Lu]},Ja={findFiberByHostInstance:is,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fv={bundleType:Ja.bundleType,version:Ja.version,rendererPackageName:Ja.rendererPackageName,rendererConfig:Ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ve(n),n===null?null:n.stateNode},findFiberByHostInstance:Ja.findFiberByHostInstance||Iv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sl.isDisabled&&Sl.supportsFiber)try{ne=Sl.inject(Fv),ie=Sl}catch{}}return ni.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uv,ni.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zu(i))throw Error(t(200));return Nv(n,i,null,a)},ni.createRoot=function(n,i){if(!zu(n))throw Error(t(299));var a=!1,c="",d=rm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Ou(n,1,!1,null,null,a,!1,c,d),n[cr]=i.current,Ua(n.nodeType===8?n.parentNode:n),new ku(i)},ni.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ve(i),n=n===null?null:n.stateNode,n},ni.flushSync=function(n){return ds(n)},ni.hydrate=function(n,i,a){if(!_l(i))throw Error(t(200));return xl(null,n,i,!0,a)},ni.hydrateRoot=function(n,i,a){if(!zu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",T=rm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=nm(i,null,n,1,a??null,d,!1,m,T),n[cr]=i.current,Ua(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new vl(i)},ni.render=function(n,i,a){if(!_l(i))throw Error(t(200));return xl(null,n,i,!1,a)},ni.unmountComponentAtNode=function(n){if(!_l(n))throw Error(t(40));return n._reactRootContainer?(ds(function(){xl(null,null,n,!1,function(){n._reactRootContainer=null,n[cr]=null})}),!0):!1},ni.unstable_batchedUpdates=Lu,ni.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!_l(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return xl(n,i,a,!1,c)},ni.version="18.3.1-next-f1338f8080-20240426",ni}var hm;function Xv(){if(hm)return Hu.exports;hm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Hu.exports=Wv(),Hu.exports}var pm;function Yv(){if(pm)return yl;pm=1;var s=Xv();return yl.createRoot=s.createRoot,yl.hydrateRoot=s.hydrateRoot,yl}var jv=Yv();const qv=_g(jv);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yf="186",Kv=0,mm=1,$v=2,ql=1,Zv=2,lo=3,Ts=0,si=1,tr=2,wr=0,uo=1,Qi=2,gm=3,vm=4,Jv=5,ha=100,Qv=101,e_=102,t_=103,n_=104,i_=200,r_=201,s_=202,a_=203,xg=204,Sg=205,o_=206,l_=207,c_=208,u_=209,d_=210,f_=211,h_=212,p_=213,m_=214,Pd=0,Ld=1,Nd=2,ho=3,Id=4,Dd=5,Ud=6,Fd=7,yg=0,g_=1,v_=2,rr=0,Mg=1,Eg=2,wg=3,Mf=4,Tg=5,Ag=6,bg=7,Rg=300,As=301,va=302,Yu=303,ju=304,cc=306,bs=1e3,Er=1001,Od=1002,On=1003,__=1004,Ml=1005,Xn=1006,qu=1007,Es=1008,pi=1009,Cg=1010,Pg=1011,po=1012,Ef=1013,sr=1014,nr=1015,ar=1016,wf=1017,Tf=1018,mo=1020,Lg=35902,Ng=35899,Ig=1021,Dg=1022,Hi=1023,Ar=1026,ws=1027,Ug=1028,Af=1029,Rs=1030,bf=1031,Rf=1033,Kl=33776,$l=33777,Zl=33778,Jl=33779,Bd=35840,kd=35841,zd=35842,Gd=35843,Vd=36196,Hd=37492,Wd=37496,Xd=37488,Yd=37489,tc=37490,jd=37491,qd=37808,Kd=37809,$d=37810,Zd=37811,Jd=37812,Qd=37813,ef=37814,tf=37815,nf=37816,rf=37817,sf=37818,af=37819,of=37820,lf=37821,cf=36492,uf=36494,df=36495,ff=36283,hf=36284,nc=36285,pf=36286,x_=3200,mf=0,S_=1,es="",bi="srgb",ic="srgb-linear",rc="linear",en="srgb",Ku=7680,y_=519,M_=512,E_=513,w_=514,Cf=515,T_=516,A_=517,Pf=518,b_=519,R_=35044,_m="300 es",ir=2e3,go=2001;function C_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function sc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function P_(){const s=sc("canvas");return s.style.display="block",s}const xm={};function Sm(...s){const e="THREE."+s.shift();console.log(e,...s)}function Fg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Et(...s){s=Fg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function $t(...s){s=Fg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function ma(...s){const e=s.join(" ");e in xm||(xm[e]=!0,Et(...s))}function L_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const N_={[Pd]:Ld,[Nd]:Ud,[Id]:Fd,[ho]:Dd,[Ld]:Pd,[Ud]:Nd,[Fd]:Id,[Dd]:ho};class Cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$u=Math.PI/180,gf=180/Math.PI;function xo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Hn[s&255]+Hn[s>>8&255]+Hn[s>>16&255]+Hn[s>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[t&63|128]+Hn[t>>8&255]+"-"+Hn[t>>16&255]+Hn[t>>24&255]+Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]).toLowerCase()}function Vt(s,e,t){return Math.max(e,Math.min(t,s))}function I_(s,e){return(s%e+e)%e}function Zu(s,e,t){return(1-t)*s+t*e}function eo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ii(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Bf=class Bf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Vt(this.x,e.x,t.x),this.y=Vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Vt(this.x,e,t),this.y=Vt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Bf.prototype.isVector2=!0;let Ht=Bf;class Sa{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let h=r[o+0],p=r[o+1],v=r[o+2],S=r[o+3],g=l[u+0],M=l[u+1],w=l[u+2],R=l[u+3];if(S!==R||h!==g||p!==M||v!==w){let x=h*g+p*M+v*w+S*R;x<0&&(g=-g,M=-M,w=-w,R=-R,x=-x);let _=1-f;if(x<.9995){const N=Math.acos(x),W=Math.sin(N);_=Math.sin(_*N)/W,f=Math.sin(f*N)/W,h=h*_+g*f,p=p*_+M*f,v=v*_+w*f,S=S*_+R*f}else{h=h*_+g*f,p=p*_+M*f,v=v*_+w*f,S=S*_+R*f;const N=1/Math.sqrt(h*h+p*p+v*v+S*S);h*=N,p*=N,v*=N,S*=N}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=S}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],h=r[o+1],p=r[o+2],v=r[o+3],S=l[u],g=l[u+1],M=l[u+2],w=l[u+3];return e[t]=f*w+v*S+h*M-p*g,e[t+1]=h*w+v*g+p*S-f*M,e[t+2]=p*w+v*M+f*g-h*S,e[t+3]=v*w-f*S-h*g-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(r/2),v=f(o/2),S=f(l/2),g=h(r/2),M=h(o/2),w=h(l/2);switch(u){case"XYZ":this._x=g*v*S+p*M*w,this._y=p*M*S-g*v*w,this._z=p*v*w+g*M*S,this._w=p*v*S-g*M*w;break;case"YXZ":this._x=g*v*S+p*M*w,this._y=p*M*S-g*v*w,this._z=p*v*w-g*M*S,this._w=p*v*S+g*M*w;break;case"ZXY":this._x=g*v*S-p*M*w,this._y=p*M*S+g*v*w,this._z=p*v*w+g*M*S,this._w=p*v*S-g*M*w;break;case"ZYX":this._x=g*v*S-p*M*w,this._y=p*M*S+g*v*w,this._z=p*v*w-g*M*S,this._w=p*v*S+g*M*w;break;case"YZX":this._x=g*v*S+p*M*w,this._y=p*M*S+g*v*w,this._z=p*v*w-g*M*S,this._w=p*v*S-g*M*w;break;case"XZY":this._x=g*v*S-p*M*w,this._y=p*M*S-g*v*w,this._z=p*v*w+g*M*S,this._w=p*v*S+g*M*w;break;default:Et("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],v=t[6],S=t[10],g=r+f+S;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(v-h)*M,this._y=(l-p)*M,this._z=(u-o)*M}else if(r>f&&r>S){const M=2*Math.sqrt(1+r-f-S);this._w=(v-h)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+p)/M}else if(f>S){const M=2*Math.sqrt(1+f-r-S);this._w=(l-p)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(h+v)/M}else{const M=2*Math.sqrt(1+S-r-f);this._w=(u-o)/M,this._x=(l+p)/M,this._y=(h+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,v=t._w;return this._x=r*v+u*f+o*p-l*h,this._y=o*v+u*h+l*f-r*p,this._z=l*v+u*p+r*h-o*f,this._w=u*v-r*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),v=Math.sin(p);h=Math.sin(h*p)/v,t=Math.sin(t*p)/v,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const kf=class kf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ym.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ym.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*o-f*r),v=2*(f*t-l*o),S=2*(l*r-u*t);return this.x=t+h*p+u*S-f*v,this.y=r+h*v+f*p-l*S,this.z=o+h*S+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Vt(this.x,e.x,t.x),this.y=Vt(this.y,e.y,t.y),this.z=Vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Vt(this.x,e,t),this.y=Vt(this.y,e,t),this.z=Vt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*u-r*h,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ju.copy(this).projectOnVector(e),this.sub(Ju)}reflect(e){return this.sub(Ju.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Vt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};kf.prototype.isVector3=!0;let ae=kf;const Ju=new ae,ym=new Sa,zf=class zf{constructor(e,t,r,o,l,u,f,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p)}set(e,t,r,o,l,u,f,h,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=t,v[4]=l,v[5]=h,v[6]=r,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],h=r[6],p=r[1],v=r[4],S=r[7],g=r[2],M=r[5],w=r[8],R=o[0],x=o[3],_=o[6],N=o[1],W=o[4],C=o[7],I=o[2],L=o[5],k=o[8];return l[0]=u*R+f*N+h*I,l[3]=u*x+f*W+h*L,l[6]=u*_+f*C+h*k,l[1]=p*R+v*N+S*I,l[4]=p*x+v*W+S*L,l[7]=p*_+v*C+S*k,l[2]=g*R+M*N+w*I,l[5]=g*x+M*W+w*L,l[8]=g*_+M*C+w*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8];return t*u*v-t*f*p-r*l*v+r*f*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],S=v*u-f*p,g=f*h-v*l,M=p*l-u*h,w=t*S+r*g+o*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=S*R,e[1]=(o*p-v*r)*R,e[2]=(f*r-o*u)*R,e[3]=g*R,e[4]=(v*t-o*h)*R,e[5]=(o*l-f*t)*R,e[6]=M*R,e[7]=(r*h-p*t)*R,e[8]=(u*t-r*l)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*f)+u+e,-o*p,o*h,-o*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return ma("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qu.makeScale(e,t)),this}rotate(e){return ma("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qu.makeRotation(-e)),this}translate(e,t){return ma("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};zf.prototype.isMatrix3=!0;let At=zf;const Qu=new At,Mm=new At().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Em=new At().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function D_(){const s={enabled:!0,workingColorSpace:ic,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===en&&(o.r=Tr(o.r),o.g=Tr(o.g),o.b=Tr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===en&&(o.r=ga(o.r),o.g=ga(o.g),o.b=ga(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===es?rc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return ma("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return ma("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[ic]:{primaries:e,whitePoint:r,transfer:rc,toXYZ:Mm,fromXYZ:Em,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bi},outputColorSpaceConfig:{drawingBufferColorSpace:bi}},[bi]:{primaries:e,whitePoint:r,transfer:en,toXYZ:Mm,fromXYZ:Em,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bi}}}),s}const Gt=D_();function Tr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ga(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Qs;class U_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Qs===void 0&&(Qs=sc("canvas")),Qs.width=e.width,Qs.height=e.height;const o=Qs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Qs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Tr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Tr(t[r]/255)*255):t[r]=Tr(t[r]);return{data:t,width:e.width,height:e.height}}else return Et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let F_=0;class Lf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=xo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(ed(o[u].image)):l.push(ed(o[u]))}else l=ed(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function ed(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?U_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Et("Texture: Unable to serialize Texture."),{})}let O_=0;const td=new ae;class Yn extends Cs{constructor(e=Yn.DEFAULT_IMAGE,t=Yn.DEFAULT_MAPPING,r=Er,o=Er,l=Xn,u=Es,f=Hi,h=pi,p=Yn.DEFAULT_ANISOTROPY,v=es){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=xo(),this.name="",this.source=new Lf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(td).x}get height(){return this.source.getSize(td).y}get depth(){return this.source.getSize(td).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){Et(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Et(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bs:e.x=e.x-Math.floor(e.x);break;case Er:e.x=e.x<0?0:1;break;case Od:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bs:e.y=e.y-Math.floor(e.y);break;case Er:e.y=e.y<0?0:1;break;case Od:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=Rg;Yn.DEFAULT_ANISOTROPY=1;const Gf=class Gf{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,p=h[0],v=h[4],S=h[8],g=h[1],M=h[5],w=h[9],R=h[2],x=h[6],_=h[10];if(Math.abs(v-g)<.01&&Math.abs(S-R)<.01&&Math.abs(w-x)<.01){if(Math.abs(v+g)<.1&&Math.abs(S+R)<.1&&Math.abs(w+x)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const W=(p+1)/2,C=(M+1)/2,I=(_+1)/2,L=(v+g)/4,k=(S+R)/4,E=(w+x)/4;return W>C&&W>I?W<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(W),o=L/r,l=k/r):C>I?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=L/o,l=E/o):I<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(I),r=k/l,o=E/l),this.set(r,o,l,t),this}let N=Math.sqrt((x-w)*(x-w)+(S-R)*(S-R)+(g-v)*(g-v));return Math.abs(N)<.001&&(N=1),this.x=(x-w)/N,this.y=(S-R)/N,this.z=(g-v)/N,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Vt(this.x,e.x,t.x),this.y=Vt(this.y,e.y,t.y),this.z=Vt(this.z,e.z,t.z),this.w=Vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Vt(this.x,e,t),this.y=Vt(this.y,e,t),this.z=Vt(this.z,e,t),this.w=Vt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Vt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gf.prototype.isVector4=!0;let hn=Gf;class B_ extends Cs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new hn(0,0,e,t),this.scissorTest=!1,this.viewport=new hn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Yn(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Lf(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends B_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Og extends Yn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=On,this.minFilter=On,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class k_ extends Yn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=On,this.minFilter=On,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const lc=class lc{constructor(e,t,r,o,l,u,f,h,p,v,S,g,M,w,R,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p,v,S,g,M,w,R,x)}set(e,t,r,o,l,u,f,h,p,v,S,g,M,w,R,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=u,_[9]=f,_[13]=h,_[2]=p,_[6]=v,_[10]=S,_[14]=g,_[3]=M,_[7]=w,_[11]=R,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/ea.setFromMatrixColumn(e,0).length(),l=1/ea.setFromMatrixColumn(e,1).length(),u=1/ea.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(o),p=Math.sin(o),v=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const g=u*v,M=u*S,w=f*v,R=f*S;t[0]=h*v,t[4]=-h*S,t[8]=p,t[1]=M+w*p,t[5]=g-R*p,t[9]=-f*h,t[2]=R-g*p,t[6]=w+M*p,t[10]=u*h}else if(e.order==="YXZ"){const g=h*v,M=h*S,w=p*v,R=p*S;t[0]=g+R*f,t[4]=w*f-M,t[8]=u*p,t[1]=u*S,t[5]=u*v,t[9]=-f,t[2]=M*f-w,t[6]=R+g*f,t[10]=u*h}else if(e.order==="ZXY"){const g=h*v,M=h*S,w=p*v,R=p*S;t[0]=g-R*f,t[4]=-u*S,t[8]=w+M*f,t[1]=M+w*f,t[5]=u*v,t[9]=R-g*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const g=u*v,M=u*S,w=f*v,R=f*S;t[0]=h*v,t[4]=w*p-M,t[8]=g*p+R,t[1]=h*S,t[5]=R*p+g,t[9]=M*p-w,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const g=u*h,M=u*p,w=f*h,R=f*p;t[0]=h*v,t[4]=R-g*S,t[8]=w*S+M,t[1]=S,t[5]=u*v,t[9]=-f*v,t[2]=-p*v,t[6]=M*S+w,t[10]=g-R*S}else if(e.order==="XZY"){const g=u*h,M=u*p,w=f*h,R=f*p;t[0]=h*v,t[4]=-S,t[8]=p*v,t[1]=g*S+R,t[5]=u*v,t[9]=M*S-w,t[2]=w*S-M,t[6]=f*v,t[10]=R*S+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(z_,e,G_)}lookAt(e,t,r){const o=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),Yr.crossVectors(r,di),Yr.lengthSq()===0&&(Math.abs(r.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),Yr.crossVectors(r,di)),Yr.normalize(),El.crossVectors(di,Yr),o[0]=Yr.x,o[4]=El.x,o[8]=di.x,o[1]=Yr.y,o[5]=El.y,o[9]=di.y,o[2]=Yr.z,o[6]=El.z,o[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],h=r[8],p=r[12],v=r[1],S=r[5],g=r[9],M=r[13],w=r[2],R=r[6],x=r[10],_=r[14],N=r[3],W=r[7],C=r[11],I=r[15],L=o[0],k=o[4],E=o[8],P=o[12],z=o[1],j=o[5],$=o[9],ee=o[13],V=o[2],te=o[6],pe=o[10],re=o[14],Q=o[3],Z=o[7],J=o[11],D=o[15];return l[0]=u*L+f*z+h*V+p*Q,l[4]=u*k+f*j+h*te+p*Z,l[8]=u*E+f*$+h*pe+p*J,l[12]=u*P+f*ee+h*re+p*D,l[1]=v*L+S*z+g*V+M*Q,l[5]=v*k+S*j+g*te+M*Z,l[9]=v*E+S*$+g*pe+M*J,l[13]=v*P+S*ee+g*re+M*D,l[2]=w*L+R*z+x*V+_*Q,l[6]=w*k+R*j+x*te+_*Z,l[10]=w*E+R*$+x*pe+_*J,l[14]=w*P+R*ee+x*re+_*D,l[3]=N*L+W*z+C*V+I*Q,l[7]=N*k+W*j+C*te+I*Z,l[11]=N*E+W*$+C*pe+I*J,l[15]=N*P+W*ee+C*re+I*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],v=e[2],S=e[6],g=e[10],M=e[14],w=e[3],R=e[7],x=e[11],_=e[15],N=h*M-p*g,W=f*M-p*S,C=f*g-h*S,I=u*M-p*v,L=u*g-h*v,k=u*S-f*v;return t*(R*N-x*W+_*C)-r*(w*N-x*I+_*L)+o*(w*W-R*I+_*k)-l*(w*C-R*L+x*k)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],f=e[9],h=e[2],p=e[6],v=e[10];return t*(u*v-f*p)-r*(l*v-f*h)+o*(l*p-u*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],v=e[8],S=e[9],g=e[10],M=e[11],w=e[12],R=e[13],x=e[14],_=e[15],N=t*f-r*u,W=t*h-o*u,C=t*p-l*u,I=r*h-o*f,L=r*p-l*f,k=o*p-l*h,E=v*R-S*w,P=v*x-g*w,z=v*_-M*w,j=S*x-g*R,$=S*_-M*R,ee=g*_-M*x,V=N*ee-W*$+C*j+I*z-L*P+k*E;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const te=1/V;return e[0]=(f*ee-h*$+p*j)*te,e[1]=(o*$-r*ee-l*j)*te,e[2]=(R*k-x*L+_*I)*te,e[3]=(g*L-S*k-M*I)*te,e[4]=(h*z-u*ee-p*P)*te,e[5]=(t*ee-o*z+l*P)*te,e[6]=(x*C-w*k-_*W)*te,e[7]=(v*k-g*C+M*W)*te,e[8]=(u*$-f*z+p*E)*te,e[9]=(r*z-t*$-l*E)*te,e[10]=(w*L-R*C+_*N)*te,e[11]=(S*C-v*L-M*N)*te,e[12]=(f*P-u*j-h*E)*te,e[13]=(t*j-r*P+o*E)*te,e[14]=(R*W-w*I-x*N)*te,e[15]=(v*I-S*W+g*N)*te,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,h=e.z,p=l*u,v=l*f;return this.set(p*u+r,p*f-o*h,p*h+o*f,0,p*f+o*h,v*f+r,v*h-o*u,0,p*h-o*f,v*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,v=u+u,S=f+f,g=l*p,M=l*v,w=l*S,R=u*v,x=u*S,_=f*S,N=h*p,W=h*v,C=h*S,I=r.x,L=r.y,k=r.z;return o[0]=(1-(R+_))*I,o[1]=(M+C)*I,o[2]=(w-W)*I,o[3]=0,o[4]=(M-C)*L,o[5]=(1-(g+_))*L,o[6]=(x+N)*L,o[7]=0,o[8]=(w+W)*k,o[9]=(x-N)*k,o[10]=(1-(g+R))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=ea.set(o[0],o[1],o[2]).length();const f=ea.set(o[4],o[5],o[6]).length(),h=ea.set(o[8],o[9],o[10]).length();l<0&&(u=-u),ki.copy(this);const p=1/u,v=1/f,S=1/h;return ki.elements[0]*=p,ki.elements[1]*=p,ki.elements[2]*=p,ki.elements[4]*=v,ki.elements[5]*=v,ki.elements[6]*=v,ki.elements[8]*=S,ki.elements[9]*=S,ki.elements[10]*=S,t.setFromRotationMatrix(ki),r.x=u,r.y=f,r.z=h,this}makePerspective(e,t,r,o,l,u,f=ir,h=!1){const p=this.elements,v=2*l/(t-e),S=2*l/(r-o),g=(t+e)/(t-e),M=(r+o)/(r-o);let w,R;if(h)w=l/(u-l),R=u*l/(u-l);else if(f===ir)w=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(f===go)w=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=S,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=w,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=ir,h=!1){const p=this.elements,v=2/(t-e),S=2/(r-o),g=-(t+e)/(t-e),M=-(r+o)/(r-o);let w,R;if(h)w=1/(u-l),R=u/(u-l);else if(f===ir)w=-2/(u-l),R=-(u+l)/(u-l);else if(f===go)w=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=S,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=w,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};lc.prototype.isMatrix4=!0;let un=lc;const ea=new ae,ki=new un,z_=new ae(0,0,0),G_=new ae(1,1,1),Yr=new ae,El=new ae,di=new ae,wm=new un,Tm=new Sa;class ns{constructor(e=0,t=0,r=0,o=ns.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],p=o[5],v=o[9],S=o[2],g=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(Vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Vt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:Et("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return wm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tm.setFromEuler(this),this.setFromQuaternion(Tm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ns.DEFAULT_ORDER="XYZ";class Bg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let V_=0;const Am=new ae,ta=new Sa,vr=new un,wl=new ae,to=new ae,H_=new ae,W_=new Sa,bm=new ae(1,0,0),Rm=new ae(0,1,0),Cm=new ae(0,0,1),Pm={type:"added"},X_={type:"removed"},na={type:"childadded",child:null},nd={type:"childremoved",child:null};class In extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new ae,t=new ns,r=new Sa,o=new ae(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new un},normalMatrix:{value:new At}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.multiply(ta),this}rotateOnWorldAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.premultiply(ta),this}rotateX(e){return this.rotateOnAxis(bm,e)}rotateY(e){return this.rotateOnAxis(Rm,e)}rotateZ(e){return this.rotateOnAxis(Cm,e)}translateOnAxis(e,t){return Am.copy(e).applyQuaternion(this.quaternion),this.position.add(Am.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bm,e)}translateY(e){return this.translateOnAxis(Rm,e)}translateZ(e){return this.translateOnAxis(Cm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?wl.copy(e):wl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vr.lookAt(to,wl,this.up):vr.lookAt(wl,to,this.up),this.quaternion.setFromRotationMatrix(vr),o&&(vr.extractRotation(o.matrixWorld),ta.setFromRotationMatrix(vr),this.quaternion.premultiply(ta.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?($t("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pm),na.child=e,this.dispatchEvent(na),na.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(X_),nd.child=e,this.dispatchEvent(nd),nd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vr.multiply(e.parent.matrixWorld)),e.applyMatrix4(vr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pm),na.child=e,this.dispatchEvent(na),na.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,e,H_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,W_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const S=h[p];l(e.shapes,S)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),v=u(e.images),S=u(e.shapes),g=u(e.skeletons),M=u(e.animations),w=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),S.length>0&&(r.shapes=S),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),w.length>0&&(r.nodes=w)}return r.object=o,r;function u(f){const h=[];for(const p in f){const v=f[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}In.DEFAULT_UP=new ae(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Tn extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Y_={type:"move"};class id{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ae,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ae),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ae,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ae,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const R of e.hand.values()){const x=t.getJointPose(R,r),_=this._getHandJoint(p,R);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const v=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],g=v.position.distanceTo(S.position),M=.02,w=.005;p.inputState.pinching&&g>M+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=M-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Y_)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Tn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const kg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jr={h:0,s:0,l:0},Tl={h:0,s:0,l:0};function rd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ft{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Gt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Gt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Gt.workingColorSpace){if(e=I_(e,1),t=Vt(t,0,1),r=Vt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=rd(u,l,e+1/3),this.g=rd(u,l,e),this.b=rd(u,l,e-1/3)}return Gt.colorSpaceToWorking(this,o),this}setStyle(e,t=bi){function r(l){l!==void 0&&parseFloat(l)<1&&Et("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:Et("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);Et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bi){const r=kg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):Et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tr(e.r),this.g=Tr(e.g),this.b=Tr(e.b),this}copyLinearToSRGB(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bi){return Gt.workingToColorSpace(Wn.copy(this),e),Math.round(Vt(Wn.r*255,0,255))*65536+Math.round(Vt(Wn.g*255,0,255))*256+Math.round(Vt(Wn.b*255,0,255))}getHexString(e=bi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gt.workingColorSpace){Gt.workingToColorSpace(Wn.copy(this),t);const r=Wn.r,o=Wn.g,l=Wn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let h,p;const v=(f+u)/2;if(f===u)h=0,p=0;else{const S=u-f;switch(p=v<=.5?S/(u+f):S/(2-u-f),u){case r:h=(o-l)/S+(o<l?6:0);break;case o:h=(l-r)/S+2;break;case l:h=(r-o)/S+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=Gt.workingColorSpace){return Gt.workingToColorSpace(Wn.copy(this),t),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=bi){Gt.workingToColorSpace(Wn.copy(this),e);const t=Wn.r,r=Wn.g,o=Wn.b;return e!==bi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(jr),this.setHSL(jr.h+e,jr.s+t,jr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(jr),e.getHSL(Tl);const r=Zu(jr.h,Tl.h,t),o=Zu(jr.s,Tl.s,t),l=Zu(jr.l,Tl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wn=new Ft;Ft.NAMES=kg;class Nf{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ft(e),this.density=t}clone(){return new Nf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class j_ extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ns,this.environmentIntensity=1,this.environmentRotation=new ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const zi=new ae,_r=new ae,sd=new ae,xr=new ae,ia=new ae,ra=new ae,Lm=new ae,ad=new ae,od=new ae,ld=new ae,cd=new hn,ud=new hn,dd=new hn;class Vi{constructor(e=new ae,t=new ae,r=new ae){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),zi.subVectors(e,t),o.cross(zi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){zi.subVectors(o,t),_r.subVectors(r,t),sd.subVectors(e,t);const u=zi.dot(zi),f=zi.dot(_r),h=zi.dot(sd),p=_r.dot(_r),v=_r.dot(sd),S=u*p-f*f;if(S===0)return l.set(0,0,0),null;const g=1/S,M=(p*h-f*v)*g,w=(u*v-f*h)*g;return l.set(1-M-w,w,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,xr)===null?!1:xr.x>=0&&xr.y>=0&&xr.x+xr.y<=1}static getInterpolation(e,t,r,o,l,u,f,h){return this.getBarycoord(e,t,r,o,xr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,xr.x),h.addScaledVector(u,xr.y),h.addScaledVector(f,xr.z),h)}static getInterpolatedAttribute(e,t,r,o,l,u){return cd.setScalar(0),ud.setScalar(0),dd.setScalar(0),cd.fromBufferAttribute(e,t),ud.fromBufferAttribute(e,r),dd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(cd,l.x),u.addScaledVector(ud,l.y),u.addScaledVector(dd,l.z),u}static isFrontFacing(e,t,r,o){return zi.subVectors(r,t),_r.subVectors(e,t),zi.cross(_r).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zi.subVectors(this.c,this.b),_r.subVectors(this.a,this.b),zi.cross(_r).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Vi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;ia.subVectors(o,r),ra.subVectors(l,r),ad.subVectors(e,r);const h=ia.dot(ad),p=ra.dot(ad);if(h<=0&&p<=0)return t.copy(r);od.subVectors(e,o);const v=ia.dot(od),S=ra.dot(od);if(v>=0&&S<=v)return t.copy(o);const g=h*S-v*p;if(g<=0&&h>=0&&v<=0)return u=h/(h-v),t.copy(r).addScaledVector(ia,u);ld.subVectors(e,l);const M=ia.dot(ld),w=ra.dot(ld);if(w>=0&&M<=w)return t.copy(l);const R=M*p-h*w;if(R<=0&&p>=0&&w<=0)return f=p/(p-w),t.copy(r).addScaledVector(ra,f);const x=v*w-M*S;if(x<=0&&S-v>=0&&M-w>=0)return Lm.subVectors(l,o),f=(S-v)/(S-v+(M-w)),t.copy(o).addScaledVector(Lm,f);const _=1/(x+R+g);return u=R*_,f=g*_,t.copy(r).addScaledVector(ia,u).addScaledVector(ra,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class So{constructor(e=new ae(1/0,1/0,1/0),t=new ae(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Gi):Gi.fromBufferAttribute(l,u),Gi.applyMatrix4(e.matrixWorld),this.expandByPoint(Gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Al.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Al.copy(r.boundingBox)),Al.applyMatrix4(e.matrixWorld),this.union(Al)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gi),Gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(no),bl.subVectors(this.max,no),sa.subVectors(e.a,no),aa.subVectors(e.b,no),oa.subVectors(e.c,no),qr.subVectors(aa,sa),Kr.subVectors(oa,aa),ms.subVectors(sa,oa);let t=[0,-qr.z,qr.y,0,-Kr.z,Kr.y,0,-ms.z,ms.y,qr.z,0,-qr.x,Kr.z,0,-Kr.x,ms.z,0,-ms.x,-qr.y,qr.x,0,-Kr.y,Kr.x,0,-ms.y,ms.x,0];return!fd(t,sa,aa,oa,bl)||(t=[1,0,0,0,1,0,0,0,1],!fd(t,sa,aa,oa,bl))?!1:(Rl.crossVectors(qr,Kr),t=[Rl.x,Rl.y,Rl.z],fd(t,sa,aa,oa,bl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sr=[new ae,new ae,new ae,new ae,new ae,new ae,new ae,new ae],Gi=new ae,Al=new So,sa=new ae,aa=new ae,oa=new ae,qr=new ae,Kr=new ae,ms=new ae,no=new ae,bl=new ae,Rl=new ae,gs=new ae;function fd(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){gs.fromArray(s,l);const f=o.x*Math.abs(gs.x)+o.y*Math.abs(gs.y)+o.z*Math.abs(gs.z),h=e.dot(gs),p=t.dot(gs),v=r.dot(gs);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>f)return!1}return!0}const yn=new ae,Cl=new Ht;let q_=0;class Xi extends Cs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:q_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=R_,this.updateRanges=[],this.gpuType=nr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Cl.fromBufferAttribute(this,t),Cl.applyMatrix3(e),this.setXY(t,Cl.x,Cl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix3(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)yn.fromBufferAttribute(this,t),yn.applyMatrix4(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)yn.fromBufferAttribute(this,t),yn.applyNormalMatrix(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)yn.fromBufferAttribute(this,t),yn.transformDirection(e),this.setXYZ(t,yn.x,yn.y,yn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=eo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=ii(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=eo(t,this.array)),t}setX(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=eo(t,this.array)),t}setY(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=eo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=eo(t,this.array)),t}setW(e,t){return this.normalized&&(t=ii(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=ii(t,this.array),r=ii(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=ii(t,this.array),r=ii(r,this.array),o=ii(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=ii(t,this.array),r=ii(r,this.array),o=ii(o,this.array),l=ii(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class zg extends Xi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Gg extends Xi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class gn extends Xi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const K_=new So,io=new ae,hd=new ae;class yo{constructor(e=new ae,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):K_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;io.subVectors(e,this.center);const t=io.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(io,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(io.copy(e.center).add(hd)),this.expandByPoint(io.copy(e.center).sub(hd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let $_=0;const Ti=new un,pd=new In,la=new ae,fi=new So,ro=new So,Nn=new ae;class Bn extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(C_(e)?Gg:zg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new At().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,t,r){return Ti.makeTranslation(e,t,r),this.applyMatrix4(Ti),this}scale(e,t,r){return Ti.makeScale(e,t,r),this.applyMatrix4(Ti),this}lookAt(e){return pd.lookAt(e),pd.updateMatrix(),this.applyMatrix4(pd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(la).negate(),this.translate(la.x,la.y,la.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new gn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&Et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new So);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ae(-1/0,-1/0,-1/0),new ae(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];fi.setFromBufferAttribute(l),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ae,1/0);return}if(e){const r=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];ro.setFromBufferAttribute(f),this.morphTargetsRelative?(Nn.addVectors(fi.min,ro.min),fi.expandByPoint(Nn),Nn.addVectors(fi.max,ro.max),fi.expandByPoint(Nn)):(fi.expandByPoint(ro.min),fi.expandByPoint(ro.max))}fi.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)Nn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Nn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,v=f.count;p<v;p++)Nn.fromBufferAttribute(f,p),h&&(la.fromBufferAttribute(e,p),Nn.add(la)),o=Math.max(o,r.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Xi(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],h=[];for(let E=0;E<r.count;E++)f[E]=new ae,h[E]=new ae;const p=new ae,v=new ae,S=new ae,g=new Ht,M=new Ht,w=new Ht,R=new ae,x=new ae;function _(E,P,z){p.fromBufferAttribute(r,E),v.fromBufferAttribute(r,P),S.fromBufferAttribute(r,z),g.fromBufferAttribute(l,E),M.fromBufferAttribute(l,P),w.fromBufferAttribute(l,z),v.sub(p),S.sub(p),M.sub(g),w.sub(g);const j=1/(M.x*w.y-w.x*M.y);isFinite(j)&&(R.copy(v).multiplyScalar(w.y).addScaledVector(S,-M.y).multiplyScalar(j),x.copy(S).multiplyScalar(M.x).addScaledVector(v,-w.x).multiplyScalar(j),f[E].add(R),f[P].add(R),f[z].add(R),h[E].add(x),h[P].add(x),h[z].add(x))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let E=0,P=N.length;E<P;++E){const z=N[E],j=z.start,$=z.count;for(let ee=j,V=j+$;ee<V;ee+=3)_(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const W=new ae,C=new ae,I=new ae,L=new ae;function k(E){I.fromBufferAttribute(o,E),L.copy(I);const P=f[E];W.copy(P),W.sub(I.multiplyScalar(I.dot(P))).normalize(),C.crossVectors(L,P);const j=C.dot(h[E])<0?-1:1;u.setXYZW(E,W.x,W.y,W.z,j)}for(let E=0,P=N.length;E<P;++E){const z=N[E],j=z.start,$=z.count;for(let ee=j,V=j+$;ee<V;ee+=3)k(e.getX(ee+0)),k(e.getX(ee+1)),k(e.getX(ee+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Xi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const o=new ae,l=new ae,u=new ae,f=new ae,h=new ae,p=new ae,v=new ae,S=new ae;if(e)for(let g=0,M=e.count;g<M;g+=3){const w=e.getX(g+0),R=e.getX(g+1),x=e.getX(g+2);o.fromBufferAttribute(t,w),l.fromBufferAttribute(t,R),u.fromBufferAttribute(t,x),v.subVectors(u,l),S.subVectors(o,l),v.cross(S),f.fromBufferAttribute(r,w),h.fromBufferAttribute(r,R),p.fromBufferAttribute(r,x),f.add(v),h.add(v),p.add(v),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(R,h.x,h.y,h.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let g=0,M=t.count;g<M;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),v.subVectors(u,l),S.subVectors(o,l),v.cross(S),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Nn.fromBufferAttribute(e,t),Nn.normalize(),e.setXYZ(t,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function e(f,h){const p=f.array,v=f.itemSize,S=f.normalized,g=new p.constructor(h.length*v);let M=0,w=0;for(let R=0,x=h.length;R<x;R++){f.isInterleavedBufferAttribute?M=h[R]*f.data.stride+f.offset:M=h[R]*v;for(let _=0;_<v;_++)g[w++]=p[M++]}return new Xi(g,v,S)}if(this.index===null)return Et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let v=0,S=p.length;v<S;v++){const g=p[v],M=e(g,r);h.push(M)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let S=0,g=p.length;S<g;S++){const M=p[S];v.push(M.toJSON(e.data))}v.length>0&&(o[h]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],S=l[p];for(let g=0,M=S.length;g<M;g++)v.push(S[g].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const S=u[p];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const md=new ae,Z_=new ae,J_=new At;class Qr{constructor(e=new ae(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=md.subVectors(r,t).cross(Z_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(md),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||J_.getNormalMatrix(e),o=this.coplanarPoint(md).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Q_=0;class Ps extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=xo(),this.name="",this.type="Material",this.blending=uo,this.side=Ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xg,this.blendDst=Sg,this.blendEquation=ha,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=y_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ku,this.stencilZFail=Ku,this.stencilZPass=Ku,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){Et(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Et(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ft().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Qr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Ht().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ht().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const yr=new ae,gd=new ae,Pl=new ae,Ll=new ae;class If{constructor(e=new ae,t=new ae(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yr.copy(this.origin).addScaledVector(this.direction,t),yr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){gd.copy(e).add(t).multiplyScalar(.5),Pl.copy(t).sub(e).normalize(),Ll.copy(this.origin).sub(gd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Pl),f=Ll.dot(this.direction),h=-Ll.dot(Pl),p=Ll.lengthSq(),v=Math.abs(1-u*u);let S,g,M,w;if(v>0)if(S=u*h-f,g=u*f-h,w=l*v,S>=0)if(g>=-w)if(g<=w){const R=1/v;S*=R,g*=R,M=S*(S+u*g+2*f)+g*(u*S+g+2*h)+p}else g=l,S=Math.max(0,-(u*g+f)),M=-S*S+g*(g+2*h)+p;else g=-l,S=Math.max(0,-(u*g+f)),M=-S*S+g*(g+2*h)+p;else g<=-w?(S=Math.max(0,-(-u*l+f)),g=S>0?-l:Math.min(Math.max(-l,-h),l),M=-S*S+g*(g+2*h)+p):g<=w?(S=0,g=Math.min(Math.max(-l,-h),l),M=g*(g+2*h)+p):(S=Math.max(0,-(u*l+f)),g=S>0?l:Math.min(Math.max(-l,-h),l),M=-S*S+g*(g+2*h)+p);else g=u>0?-l:l,S=Math.max(0,-(u*g+f)),M=-S*S+g*(g+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(gd).addScaledVector(Pl,g),M}intersectSphere(e,t){if(e.radius<0)return null;yr.subVectors(e.center,this.origin);const r=yr.dot(this.direction),o=yr.dot(yr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,h;const p=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),v>=0?(l=(e.min.y-g.y)*v,u=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,u=(e.min.y-g.y)*v),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),S>=0?(f=(e.min.z-g.z)*S,h=(e.max.z-g.z)*S):(f=(e.max.z-g.z)*S,h=(e.min.z-g.z)*S),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,yr)!==null}intersectTriangle(e,t,r,o,l){const u=this.origin,f=this.direction,h=f.x,p=f.y,v=f.z,S=e.x-u.x,g=e.y-u.y,M=e.z-u.z,w=t.x-u.x,R=t.y-u.y,x=t.z-u.z,_=r.x-u.x,N=r.y-u.y,W=r.z-u.z,C=Math.abs(h),I=Math.abs(p),L=Math.abs(v);let k,E,P,z,j,$,ee,V,te,pe,re,Q;if(C>=I&&C>=L?(P=h,$=S,te=w,Q=_,h>=0?(k=p,E=v,z=g,j=M,ee=R,V=x,pe=N,re=W):(k=v,E=p,z=M,j=g,ee=x,V=R,pe=W,re=N)):I>=L?(P=p,$=g,te=R,Q=N,p>=0?(k=v,E=h,z=M,j=S,ee=x,V=w,pe=W,re=_):(k=h,E=v,z=S,j=M,ee=w,V=x,pe=_,re=W)):(P=v,$=M,te=x,Q=W,v>=0?(k=h,E=p,z=S,j=g,ee=w,V=R,pe=_,re=N):(k=p,E=h,z=g,j=S,ee=R,V=w,pe=N,re=_)),P===0)return null;const Z=k/P,J=E/P,D=1/P,le=z-Z*$,Ee=j-J*$,Ze=ee-Z*te,Xe=V-J*te,qe=pe-Z*Q,oe=re-J*Q,he=qe*Xe-oe*Ze,be=le*oe-Ee*qe,Qe=Ze*Ee-Xe*le;if(o){if(he<0||be<0||Qe<0)return null}else if((he<0||be<0||Qe<0)&&(he>0||be>0||Qe>0))return null;const Ge=he+be+Qe;if(Ge===0)return null;const dt=D*(he*$+be*te+Qe*Q);return(Ge>0?dt<0:dt>0)?null:this.at(dt/Ge,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mn extends Ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=yg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nm=new un,vs=new If,Nl=new yo,Im=new ae,Il=new ae,Dl=new ae,Ul=new ae,vd=new ae,Fl=new ae,Dm=new ae,Ol=new ae;class yt extends In{constructor(e=new Bn,t=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Fl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=f[h],S=l[h];v!==0&&(vd.fromBufferAttribute(S,e),u?Fl.addScaledVector(vd,v):Fl.addScaledVector(vd.sub(t),v))}t.add(Fl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Nl.copy(r.boundingSphere),Nl.applyMatrix4(l),vs.copy(e.ray).recast(e.near),!(Nl.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Nl,Im)===null||vs.origin.distanceToSquared(Im)>(e.far-e.near)**2))&&(Nm.copy(l).invert(),vs.copy(e.ray).applyMatrix4(Nm),!(r.boundingBox!==null&&vs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,vs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,S=l.attributes.normal,g=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(u))for(let w=0,R=g.length;w<R;w++){const x=g[w],_=u[x.materialIndex],N=Math.max(x.start,M.start),W=Math.min(f.count,Math.min(x.start+x.count,M.start+M.count));for(let C=N,I=W;C<I;C+=3){const L=f.getX(C),k=f.getX(C+1),E=f.getX(C+2);o=Bl(this,_,e,r,p,v,S,L,k,E),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const w=Math.max(0,M.start),R=Math.min(f.count,M.start+M.count);for(let x=w,_=R;x<_;x+=3){const N=f.getX(x),W=f.getX(x+1),C=f.getX(x+2);o=Bl(this,u,e,r,p,v,S,N,W,C),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let w=0,R=g.length;w<R;w++){const x=g[w],_=u[x.materialIndex],N=Math.max(x.start,M.start),W=Math.min(h.count,Math.min(x.start+x.count,M.start+M.count));for(let C=N,I=W;C<I;C+=3){const L=C,k=C+1,E=C+2;o=Bl(this,_,e,r,p,v,S,L,k,E),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const w=Math.max(0,M.start),R=Math.min(h.count,M.start+M.count);for(let x=w,_=R;x<_;x+=3){const N=x,W=x+1,C=x+2;o=Bl(this,u,e,r,p,v,S,N,W,C),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function ex(s,e,t,r,o,l,u,f){let h;if(e.side===si?h=r.intersectTriangle(u,l,o,!0,f):h=r.intersectTriangle(o,l,u,e.side===Ts,f),h===null)return null;Ol.copy(f),Ol.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Ol);return p<t.near||p>t.far?null:{distance:p,point:Ol.clone(),object:s}}function Bl(s,e,t,r,o,l,u,f,h,p){s.getVertexPosition(f,Il),s.getVertexPosition(h,Dl),s.getVertexPosition(p,Ul);const v=ex(s,e,t,r,Il,Dl,Ul,Dm);if(v){const S=new ae;Vi.getBarycoord(Dm,Il,Dl,Ul,S),o&&(v.uv=Vi.getInterpolatedAttribute(o,f,h,p,S,new Ht)),l&&(v.uv1=Vi.getInterpolatedAttribute(l,f,h,p,S,new Ht)),u&&(v.normal=Vi.getInterpolatedAttribute(u,f,h,p,S,new ae),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:f,b:h,c:p,normal:new ae,materialIndex:0};Vi.getNormal(Il,Dl,Ul,g.normal),v.face=g,v.barycoord=S}return v}class tx extends Yn{constructor(e=null,t=1,r=1,o,l,u,f,h,p=On,v=On,S,g){super(null,u,f,h,p,v,o,l,S,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _s=new yo,nx=new Ht(.5,.5),kl=new ae;class Df{constructor(e=new Qr,t=new Qr,r=new Qr,o=new Qr,l=new Qr,u=new Qr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ir,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],v=l[4],S=l[5],g=l[6],M=l[7],w=l[8],R=l[9],x=l[10],_=l[11],N=l[12],W=l[13],C=l[14],I=l[15];if(o[0].setComponents(p-u,M-v,_-w,I-N).normalize(),o[1].setComponents(p+u,M+v,_+w,I+N).normalize(),o[2].setComponents(p+f,M+S,_+R,I+W).normalize(),o[3].setComponents(p-f,M-S,_-R,I-W).normalize(),r)o[4].setComponents(h,g,x,C).normalize(),o[5].setComponents(p-h,M-g,_-x,I-C).normalize();else if(o[4].setComponents(p-h,M-g,_-x,I-C).normalize(),t===ir)o[5].setComponents(p+h,M+g,_+x,I+C).normalize();else if(t===go)o[5].setComponents(h,g,x,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_s.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_s.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_s)}intersectsSprite(e){_s.center.set(0,0,0);const t=nx.distanceTo(e.center);return _s.radius=.7071067811865476+t,_s.applyMatrix4(e.matrixWorld),this.intersectsSphere(_s)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(kl.x=o.normal.x>0?e.max.x:e.min.x,kl.y=o.normal.y>0?e.max.y:e.min.y,kl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(kl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vg extends Ps{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ac=new ae,oc=new ae,Um=new un,so=new If,zl=new yo,_d=new ae,Fm=new ae;class ix extends In{constructor(e=new Bn,t=new Vg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)ac.fromBufferAttribute(t,o-1),oc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=ac.distanceTo(oc);e.setAttribute("lineDistance",new gn(r,1))}else Et("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),zl.copy(r.boundingSphere),zl.applyMatrix4(o),zl.radius+=l,e.ray.intersectsSphere(zl)===!1)return;Um.copy(o).invert(),so.copy(e.ray).applyMatrix4(Um);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=this.isLineSegments?2:1,v=r.index,g=r.attributes.position;if(v!==null){const M=Math.max(0,u.start),w=Math.min(v.count,u.start+u.count);for(let R=M,x=w-1;R<x;R+=p){const _=v.getX(R),N=v.getX(R+1),W=Gl(this,e,so,h,_,N,R);W&&t.push(W)}if(this.isLineLoop){const R=v.getX(w-1),x=v.getX(M),_=Gl(this,e,so,h,R,x,w-1);_&&t.push(_)}}else{const M=Math.max(0,u.start),w=Math.min(g.count,u.start+u.count);for(let R=M,x=w-1;R<x;R+=p){const _=Gl(this,e,so,h,R,R+1,R);_&&t.push(_)}if(this.isLineLoop){const R=Gl(this,e,so,h,w-1,M,w-1);R&&t.push(R)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Gl(s,e,t,r,o,l,u){const f=s.geometry.attributes.position;if(ac.fromBufferAttribute(f,o),oc.fromBufferAttribute(f,l),t.distanceSqToSegment(ac,oc,_d,Fm)>r)return;_d.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(_d);if(!(p<e.near||p>e.far))return{distance:p,point:Fm.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}class Hg extends Ps{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Om=new un,vf=new If,Vl=new yo,Hl=new ae;class rx extends In{constructor(e=new Bn,t=new Hg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Vl.copy(r.boundingSphere),Vl.applyMatrix4(o),Vl.radius+=l,e.ray.intersectsSphere(Vl)===!1)return;Om.copy(o).invert(),vf.copy(e.ray).applyMatrix4(Om);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=r.index,S=r.attributes.position;if(p!==null){const g=Math.max(0,u.start),M=Math.min(p.count,u.start+u.count);for(let w=g,R=M;w<R;w++){const x=p.getX(w);Hl.fromBufferAttribute(S,x),Bm(Hl,x,h,o,e,t,this)}}else{const g=Math.max(0,u.start),M=Math.min(S.count,u.start+u.count);for(let w=g,R=M;w<R;w++)Hl.fromBufferAttribute(S,w),Bm(Hl,w,h,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Bm(s,e,t,r,o,l,u){const f=vf.distanceSqToPoint(s);if(f<t){const h=new ae;vf.closestPointToPoint(s,h),h.applyMatrix4(r);const p=o.ray.origin.distanceTo(h);if(p<o.near||p>o.far)return;l.push({distance:p,distanceToRay:Math.sqrt(f),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Wg extends Yn{constructor(e=[],t=As,r,o,l,u,f,h,p,v){super(e,t,r,o,l,u,f,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uc extends Yn{constructor(e,t,r,o,l,u,f,h,p){super(e,t,r,o,l,u,f,h,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vo extends Yn{constructor(e,t,r=sr,o,l,u,f=On,h=On,p,v=Ar,S=1){if(v!==Ar&&v!==ws)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:S};super(g,o,l,u,f,h,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class sx extends vo{constructor(e,t=sr,r=As,o,l,u=On,f=On,h,p=Ar){const v={width:e,height:e,depth:1},S=[v,v,v,v,v,v];super(e,e,t,r,o,l,u,f,h,p),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Xg extends Yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ri extends Bn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],v=[],S=[];let g=0,M=0;w("z","y","x",-1,-1,r,t,e,u,l,0),w("z","y","x",1,-1,r,t,-e,u,l,1),w("x","z","y",1,1,e,r,t,o,u,2),w("x","z","y",1,-1,e,r,-t,o,u,3),w("x","y","z",1,-1,e,t,r,o,l,4),w("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new gn(p,3)),this.setAttribute("normal",new gn(v,3)),this.setAttribute("uv",new gn(S,2));function w(R,x,_,N,W,C,I,L,k,E,P){const z=C/k,j=I/E,$=C/2,ee=I/2,V=L/2,te=k+1,pe=E+1;let re=0,Q=0;const Z=new ae;for(let J=0;J<pe;J++){const D=J*j-ee;for(let le=0;le<te;le++){const Ee=le*z-$;Z[R]=Ee*N,Z[x]=D*W,Z[_]=V,p.push(Z.x,Z.y,Z.z),Z[R]=0,Z[x]=0,Z[_]=L>0?1:-1,v.push(Z.x,Z.y,Z.z),S.push(le/k),S.push(1-J/E),re+=1}}for(let J=0;J<E;J++)for(let D=0;D<k;D++){const le=g+D+te*J,Ee=g+D+te*(J+1),Ze=g+(D+1)+te*(J+1),Xe=g+(D+1)+te*J;h.push(le,Ee,Xe),h.push(Ee,Ze,Xe),Q+=6}f.addGroup(M,Q,P),M+=Q,g+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ri(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ss extends Bn{constructor(e=1,t=1,r=4,o=8,l=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:r,radialSegments:o,heightSegments:l},t=Math.max(0,t),r=Math.max(1,Math.floor(r)),o=Math.max(3,Math.floor(o)),l=Math.max(1,Math.floor(l));const u=[],f=[],h=[],p=[],v=t/2,S=Math.PI/2*e,g=t,M=2*S+g,w=r*2+l,R=o+1,x=new ae,_=new ae;for(let N=0;N<=w;N++){let W=0,C=0,I=0,L=0;if(N<=r){const P=N/r,z=P*Math.PI/2;C=-v-e*Math.cos(z),I=e*Math.sin(z),L=-e*Math.cos(z),W=P*S}else if(N<=r+l){const P=(N-r)/l;C=-v+P*t,I=e,L=0,W=S+P*g}else{const P=(N-r-l)/r,z=P*Math.PI/2;C=v+e*Math.sin(z),I=e*Math.cos(z),L=e*Math.sin(z),W=S+g+P*S}const k=Math.max(0,Math.min(1,W/M));let E=0;N===0?E=.5/o:N===w&&(E=-.5/o);for(let P=0;P<=o;P++){const z=P/o,j=z*Math.PI*2,$=Math.sin(j),ee=Math.cos(j);_.x=-I*ee,_.y=C,_.z=I*$,f.push(_.x,_.y,_.z),x.set(-I*ee,L,I*$),x.normalize(),h.push(x.x,x.y,x.z),p.push(z+E,k)}if(N>0){const P=(N-1)*R;for(let z=0;z<o;z++){const j=P+z,$=P+z+1,ee=N*R+z,V=N*R+z+1;u.push(j,$,ee),u.push($,V,ee)}}}this.setIndex(u),this.setAttribute("position",new gn(f,3)),this.setAttribute("normal",new gn(h,3)),this.setAttribute("uv",new gn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ss(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Ai extends Bn{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const p=this;o=Math.floor(o),l=Math.floor(l);const v=[],S=[],g=[],M=[];let w=0;const R=[],x=r/2;let _=0;N(),u===!1&&(e>0&&W(!0),t>0&&W(!1)),this.setIndex(v),this.setAttribute("position",new gn(S,3)),this.setAttribute("normal",new gn(g,3)),this.setAttribute("uv",new gn(M,2));function N(){const C=new ae,I=new ae;let L=0;const k=(t-e)/r;for(let E=0;E<=l;E++){const P=[],z=E/l,j=z*(t-e)+e;for(let $=0;$<=o;$++){const ee=$/o,V=ee*h+f,te=Math.sin(V),pe=Math.cos(V);I.x=j*te,I.y=-z*r+x,I.z=j*pe,S.push(I.x,I.y,I.z),C.set(te,k,pe).normalize(),g.push(C.x,C.y,C.z),M.push(ee,1-z),P.push(w++)}R.push(P)}for(let E=0;E<o;E++)for(let P=0;P<l;P++){const z=R[P][E],j=R[P+1][E],$=R[P+1][E+1],ee=R[P][E+1];(e>0||P!==0)&&(v.push(z,j,ee),L+=3),(t>0||P!==l-1)&&(v.push(j,$,ee),L+=3)}p.addGroup(_,L,0),_+=L}function W(C){const I=w,L=new Ht,k=new ae;let E=0;const P=C===!0?e:t,z=C===!0?1:-1;for(let $=1;$<=o;$++)S.push(0,x*z,0),g.push(0,z,0),M.push(.5,.5),w++;const j=w;for(let $=0;$<=o;$++){const V=$/o*h+f,te=Math.cos(V),pe=Math.sin(V);k.x=P*pe,k.y=x*z,k.z=P*te,S.push(k.x,k.y,k.z),g.push(0,z,0),L.x=te*.5+.5,L.y=pe*.5*z+.5,M.push(L.x,L.y),w++}for(let $=0;$<o;$++){const ee=I+$,V=j+$;C===!0?v.push(V,V+1,ee):v.push(V+1,V,ee),E+=3}p.addGroup(_,E,C===!0?1:2),_+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Uf extends Ai{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,f=Math.PI*2){super(0,e,t,r,o,l,u,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:f}}static fromJSON(e){return new Uf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class _a extends Bn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),h=Math.floor(o),p=f+1,v=h+1,S=e/f,g=t/h,M=[],w=[],R=[],x=[];for(let _=0;_<v;_++){const N=_*g-u;for(let W=0;W<p;W++){const C=W*S-l;w.push(C,-N,0),R.push(0,0,1),x.push(W/f),x.push(1-_/h)}}for(let _=0;_<h;_++)for(let N=0;N<f;N++){const W=N+p*_,C=N+p*(_+1),I=N+1+p*(_+1),L=N+1+p*_;M.push(W,C,L),M.push(C,I,L)}this.setIndex(M),this.setAttribute("position",new gn(w,3)),this.setAttribute("normal",new gn(R,3)),this.setAttribute("uv",new gn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.width,e.height,e.widthSegments,e.heightSegments)}}class Mr extends Bn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let p=0;const v=[],S=new ae,g=new ae,M=[],w=[],R=[],x=[];for(let _=0;_<=r;_++){const N=[],W=_/r,C=u+W*f,I=e*Math.cos(C),L=Math.sqrt(e*e-I*I);let k=0;_===0&&u===0?k=.5/t:_===r&&h===Math.PI&&(k=-.5/t);for(let E=0;E<=t;E++){const P=E/t,z=o+P*l;S.x=-L*Math.cos(z),S.y=I,S.z=L*Math.sin(z),w.push(S.x,S.y,S.z),g.copy(S).normalize(),R.push(g.x,g.y,g.z),x.push(P+k,1-W),N.push(p++)}v.push(N)}for(let _=0;_<r;_++)for(let N=0;N<t;N++){const W=v[_][N+1],C=v[_][N],I=v[_+1][N],L=v[_+1][N+1];(_!==0||u>0)&&M.push(W,C,L),(_!==r-1||h<Math.PI)&&M.push(C,I,L)}this.setIndex(M),this.setAttribute("position",new gn(w,3)),this.setAttribute("normal",new gn(R,3)),this.setAttribute("uv",new gn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class fo extends Bn{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2,u=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l,thetaStart:u,thetaLength:f},r=Math.floor(r),o=Math.floor(o);const h=[],p=[],v=[],S=[],g=new ae,M=new ae,w=new ae;for(let R=0;R<=r;R++){const x=u+R/r*f;for(let _=0;_<=o;_++){const N=_/o*l;M.x=(e+t*Math.cos(x))*Math.cos(N),M.y=(e+t*Math.cos(x))*Math.sin(N),M.z=t*Math.sin(x),p.push(M.x,M.y,M.z),g.x=e*Math.cos(N),g.y=e*Math.sin(N),w.subVectors(M,g).normalize(),v.push(w.x,w.y,w.z),S.push(_/o),S.push(R/r)}}for(let R=1;R<=r;R++)for(let x=1;x<=o;x++){const _=(o+1)*R+x-1,N=(o+1)*(R-1)+x-1,W=(o+1)*(R-1)+x,C=(o+1)*R+x;h.push(_,N,C),h.push(N,W,C)}this.setIndex(h),this.setAttribute("position",new gn(p,3)),this.setAttribute("normal",new gn(v,3)),this.setAttribute("uv",new gn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function xa(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(km(o))o.isRenderTargetTexture?(Et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(km(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Kn(s){const e={};for(let t=0;t<s.length;t++){const r=xa(s[t]);for(const o in r)e[o]=r[o]}return e}function km(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function ax(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Yg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Gt.workingColorSpace}const ox={clone:xa,merge:Kn};var lx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lx,this.fragmentShader=cx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xa(e.uniforms),this.uniformsGroups=ax(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new Ft().setHex(o.value);break;case"v2":this.uniforms[r].value=new Ht().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ae().fromArray(o.value);break;case"v4":this.uniforms[r].value=new hn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new At().fromArray(o.value);break;case"m4":this.uniforms[r].value=new un().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ux extends Yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class xd extends Ps{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mf,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dx extends Ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=x_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fx extends Ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ff extends In{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Sd=new un,zm=new ae,Gm=new ae;class jg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.mapType=pi,this.map=null,this.mapPass=null,this.matrix=new un,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Df,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new hn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;zm.setFromMatrixPosition(e.matrixWorld),t.position.copy(zm),Gm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gm),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,o){Sd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Sd,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,f=o?o.w/l.y:1,h=o?o.x/l.x:0,p=o?o.y/l.y:0;e.coordinateSystem===go||e.reversedDepth?t.set(.5*u,0,0,.5*u+h,0,.5*f,0,.5*f+p,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+h,0,.5*f,0,.5*f+p,0,0,.5,.5,0,0,0,1),t.multiply(Sd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Wl=new ae,Xl=new Sa,Zi=new ae;class qg extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=ir,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wl,Xl,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,Xl,Zi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Wl,Xl,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wl,Xl,Zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $r=new ae,Vm=new Ht,Hm=new Ht;class hi extends qg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($u*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gf*2*Math.atan(Math.tan($u*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){$r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($r.x,$r.y).multiplyScalar(-e/$r.z),$r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set($r.x,$r.y).multiplyScalar(-e/$r.z)}getViewSize(e,t){return this.getViewBounds(e,Vm,Hm),t.subVectors(Hm,Vm)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($u*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*r/p,o*=u.width/h,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class hx extends jg{constructor(){super(new hi(90,1,.5,500)),this.isPointLightShadow=!0}}class Wm extends Ff{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new hx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Of extends qg{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class px extends jg{constructor(){super(new Of(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mx extends Ff{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.target=new In,this.shadow=new px}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class gx extends Ff{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ca=-90,ua=1;class vx extends In{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new hi(ca,ua,e,t);o.layers=this.layers,this.add(o);const l=new hi(ca,ua,e,t);l.layers=this.layers,this.add(l);const u=new hi(ca,ua,e,t);u.layers=this.layers,this.add(u);const f=new hi(ca,ua,e,t);f.layers=this.layers,this.add(f);const h=new hi(ca,ua,e,t);h.layers=this.layers,this.add(h);const p=new hi(ca,ua,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===ir)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===go)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,v]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(S,g,M),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class _x extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Vf=class Vf{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};Vf.prototype.isMatrix2=!0;let Xm=Vf;function Ym(s,e,t,r){const o=xx(r);switch(t){case Ig:return s*e;case Ug:return s*e/o.components*o.byteLength;case Af:return s*e/o.components*o.byteLength;case Rs:return s*e*2/o.components*o.byteLength;case bf:return s*e*2/o.components*o.byteLength;case Dg:return s*e*3/o.components*o.byteLength;case Hi:return s*e*4/o.components*o.byteLength;case Rf:return s*e*4/o.components*o.byteLength;case Kl:case $l:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Zl:case Jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kd:case Gd:return Math.max(s,16)*Math.max(e,8)/4;case Bd:case zd:return Math.max(s,8)*Math.max(e,8)/2;case Vd:case Hd:case Xd:case Yd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Wd:case tc:case jd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case $d:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ef:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case tf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case nf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case rf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case sf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case af:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case of:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case lf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case cf:case uf:case df:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ff:case hf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case nc:case pf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xx(s){switch(s){case pi:case Cg:return{byteLength:1,components:1};case po:case Pg:case ar:return{byteLength:2,components:1};case wf:case Tf:return{byteLength:2,components:4};case sr:case Ef:case nr:return{byteLength:4,components:1};case Lg:case Ng:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yf}}));typeof window<"u"&&(window.__THREE__?Et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Kg(){let s=null,e=!1,t=null,r=null;function o(l,u){r=s.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Sx(s){const e=new WeakMap;function t(f,h){const p=f.array,v=f.usage,S=p.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,p,v),f.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:S}}function r(f,h,p){const v=h.array,S=h.updateRanges;if(s.bindBuffer(p,f),S.length===0)s.bufferSubData(p,0,v);else{S.sort((M,w)=>M.start-w.start);let g=0;for(let M=1;M<S.length;M++){const w=S[g],R=S[M];R.start<=w.start+w.count+1?w.count=Math.max(w.count,R.start+R.count-w.start):(++g,S[g]=R)}S.length=g+1;for(let M=0,w=S.length;M<w;M++){const R=S[M];s.bufferSubData(p,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:u}}var yx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mx=`#ifdef USE_ALPHAHASH
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
#endif`,Ex=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ax=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bx=`#ifdef USE_AOMAP
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
#endif`,Rx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cx=`#ifdef USE_BATCHING
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
#endif`,Px=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Nx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ix=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dx=`#ifdef USE_IRIDESCENCE
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
#endif`,Ux=`#ifdef USE_BUMPMAP
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
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ox=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Hx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Wx=`#define PI 3.141592653589793
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
} // validated`,Xx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yx=`vec3 transformedNormal = objectNormal;
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
#endif`,jx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$x=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qx=`#ifdef USE_ENVMAP
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
#endif`,eS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tS=`#ifdef USE_ENVMAP
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
#endif`,nS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iS=`#ifdef USE_ENVMAP
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
#endif`,rS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lS=`#ifdef USE_GRADIENTMAP
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
}`,cS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fS=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,hS=`#ifdef USE_ENVMAP
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
#endif`,pS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_S=`PhysicalMaterial material;
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
#endif`,xS=`uniform sampler2D dfgLUT;
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
}`,SS=`
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
#endif`,yS=`#if defined( RE_IndirectDiffuse )
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
#endif`,MS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ES=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,wS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,LS=`#if defined( USE_POINTS_UV )
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
#endif`,NS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,US=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OS=`#ifdef USE_MORPHTARGETS
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
#endif`,BS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,GS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,WS=`#ifdef USE_NORMALMAP
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
#endif`,XS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$S=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ZS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ey=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ty=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ny=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ay=`float getShadowMask() {
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
}`,oy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ly=`#ifdef USE_SKINNING
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
#endif`,cy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uy=`#ifdef USE_SKINNING
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
#endif`,dy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,py=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,my=`#ifdef USE_TRANSMISSION
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
#endif`,gy=`#ifdef USE_TRANSMISSION
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
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,My=`uniform sampler2D t2D;
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
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ay=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,by=`#include <common>
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
}`,Ry=`#if DEPTH_PACKING == 3200
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
}`,Cy=`#define DISTANCE
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
}`,Py=`#define DISTANCE
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
}`,Ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ny=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`uniform float scale;
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
}`,Dy=`uniform vec3 diffuse;
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
}`,Uy=`#include <common>
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
}`,Fy=`uniform vec3 diffuse;
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
}`,Oy=`#define LAMBERT
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
}`,By=`#define LAMBERT
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
}`,ky=`#define MATCAP
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
}`,zy=`#define MATCAP
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
}`,Gy=`#define NORMAL
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
}`,Vy=`#define NORMAL
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
}`,Hy=`#define PHONG
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
}`,Wy=`#define PHONG
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
}`,Xy=`#define STANDARD
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
}`,Yy=`#define STANDARD
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
}`,jy=`#define TOON
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
}`,qy=`#define TOON
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
}`,Ky=`uniform float size;
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
}`,$y=`uniform vec3 diffuse;
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
}`,Zy=`#include <common>
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
}`,Jy=`uniform vec3 color;
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
}`,Qy=`uniform float rotation;
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
}`,eM=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:yx,alphahash_pars_fragment:Mx,alphamap_fragment:Ex,alphamap_pars_fragment:wx,alphatest_fragment:Tx,alphatest_pars_fragment:Ax,aomap_fragment:bx,aomap_pars_fragment:Rx,batching_pars_vertex:Cx,batching_vertex:Px,begin_vertex:Lx,beginnormal_vertex:Nx,bsdfs:Ix,iridescence_fragment:Dx,bumpmap_pars_fragment:Ux,clipping_planes_fragment:Fx,clipping_planes_pars_fragment:Ox,clipping_planes_pars_vertex:Bx,clipping_planes_vertex:kx,color_fragment:zx,color_pars_fragment:Gx,color_pars_vertex:Vx,color_vertex:Hx,common:Wx,cube_uv_reflection_fragment:Xx,defaultnormal_vertex:Yx,displacementmap_pars_vertex:jx,displacementmap_vertex:qx,emissivemap_fragment:Kx,emissivemap_pars_fragment:$x,colorspace_fragment:Zx,colorspace_pars_fragment:Jx,envmap_fragment:Qx,envmap_common_pars_fragment:eS,envmap_pars_fragment:tS,envmap_pars_vertex:nS,envmap_physical_pars_fragment:hS,envmap_vertex:iS,fog_vertex:rS,fog_pars_vertex:sS,fog_fragment:aS,fog_pars_fragment:oS,gradientmap_pars_fragment:lS,lightmap_pars_fragment:cS,lights_lambert_fragment:uS,lights_lambert_pars_fragment:dS,lights_pars_begin:fS,lights_toon_fragment:pS,lights_toon_pars_fragment:mS,lights_phong_fragment:gS,lights_phong_pars_fragment:vS,lights_physical_fragment:_S,lights_physical_pars_fragment:xS,lights_fragment_begin:SS,lights_fragment_maps:yS,lights_fragment_end:MS,lightprobes_pars_fragment:ES,logdepthbuf_fragment:wS,logdepthbuf_pars_fragment:TS,logdepthbuf_pars_vertex:AS,logdepthbuf_vertex:bS,map_fragment:RS,map_pars_fragment:CS,map_particle_fragment:PS,map_particle_pars_fragment:LS,metalnessmap_fragment:NS,metalnessmap_pars_fragment:IS,morphinstance_vertex:DS,morphcolor_vertex:US,morphnormal_vertex:FS,morphtarget_pars_vertex:OS,morphtarget_vertex:BS,normal_fragment_begin:kS,normal_fragment_maps:zS,normal_pars_fragment:GS,normal_pars_vertex:VS,normal_vertex:HS,normalmap_pars_fragment:WS,clearcoat_normal_fragment_begin:XS,clearcoat_normal_fragment_maps:YS,clearcoat_pars_fragment:jS,iridescence_pars_fragment:qS,opaque_fragment:KS,packing:$S,premultiplied_alpha_fragment:ZS,project_vertex:JS,dithering_fragment:QS,dithering_pars_fragment:ey,roughnessmap_fragment:ty,roughnessmap_pars_fragment:ny,shadowmap_pars_fragment:iy,shadowmap_pars_vertex:ry,shadowmap_vertex:sy,shadowmask_pars_fragment:ay,skinbase_vertex:oy,skinning_pars_vertex:ly,skinning_vertex:cy,skinnormal_vertex:uy,specularmap_fragment:dy,specularmap_pars_fragment:fy,tonemapping_fragment:hy,tonemapping_pars_fragment:py,transmission_fragment:my,transmission_pars_fragment:gy,uv_pars_fragment:vy,uv_pars_vertex:_y,uv_vertex:xy,worldpos_vertex:Sy,background_vert:yy,background_frag:My,backgroundCube_vert:Ey,backgroundCube_frag:wy,cube_vert:Ty,cube_frag:Ay,depth_vert:by,depth_frag:Ry,distance_vert:Cy,distance_frag:Py,equirect_vert:Ly,equirect_frag:Ny,linedashed_vert:Iy,linedashed_frag:Dy,meshbasic_vert:Uy,meshbasic_frag:Fy,meshlambert_vert:Oy,meshlambert_frag:By,meshmatcap_vert:ky,meshmatcap_frag:zy,meshnormal_vert:Gy,meshnormal_frag:Vy,meshphong_vert:Hy,meshphong_frag:Wy,meshphysical_vert:Xy,meshphysical_frag:Yy,meshtoon_vert:jy,meshtoon_frag:qy,points_vert:Ky,points_frag:$y,shadow_vert:Zy,shadow_frag:Jy,sprite_vert:Qy,sprite_frag:eM},Ke={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new At}},envmap:{envMap:{value:null},envMapRotation:{value:new At},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new At}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new At}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new At},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new At},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new At},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new At}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new At}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new At}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ae},probesMax:{value:new ae},probesResolution:{value:new ae}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}}},er={basic:{uniforms:Kn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Kn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Ft(0)},envMapIntensity:{value:1}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Kn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Kn([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Kn([Ke.common,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Kn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Kn([Ke.points,Ke.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Kn([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Kn([Ke.common,Ke.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Kn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Kn([Ke.sprite,Ke.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new At}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distance:{uniforms:Kn([Ke.common,Ke.displacementmap,{referencePosition:{value:new ae},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distance_vert,fragmentShader:Nt.distance_frag},shadow:{uniforms:Kn([Ke.lights,Ke.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};er.physical={uniforms:Kn([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new At},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new At},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new At},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new At},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new At},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new At},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new At},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new At},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new At},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new At},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new At},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new At}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const Yl={r:0,b:0,g:0},tM=new un,$g=new At;$g.set(-1,0,0,0,1,0,0,0,1);function nM(s,e,t,r,o,l){const u=new Ft(0);let f=o===!0?0:1,h,p,v=null,S=0,g=null;function M(N){let W=N.isScene===!0?N.background:null;if(W&&W.isTexture){const C=N.backgroundBlurriness>0;W=e.get(W,C)}return W}function w(N){let W=!1;const C=M(N);C===null?x(u,f):C&&C.isColor&&(x(C,1),W=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,l):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||W)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(N,W){const C=M(W);C&&(C.isCubeTexture||C.mapping===cc)?(p===void 0&&(p=new yt(new ri(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:xa(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,L,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=W.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=W.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(tM.makeRotationFromEuler(W.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply($g),p.material.toneMapped=Gt.getTransfer(C.colorSpace)!==en,(v!==C||S!==C.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,v=C,S=C.version,g=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(h===void 0&&(h=new yt(new _a(2,2),new Yi({name:"BackgroundMaterial",uniforms:xa(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:Ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=C,h.material.uniforms.backgroundIntensity.value=W.backgroundIntensity,h.material.toneMapped=Gt.getTransfer(C.colorSpace)!==en,C.matrixAutoUpdate===!0&&C.updateMatrix(),h.material.uniforms.uvTransform.value.copy(C.matrix),(v!==C||S!==C.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,v=C,S=C.version,g=s.toneMapping),h.layers.enableAll(),N.unshift(h,h.geometry,h.material,0,0,null))}function x(N,W){N.getRGB(Yl,Yg(s)),t.buffers.color.setClear(Yl.r,Yl.g,Yl.b,W,l)}function _(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(N,W=1){u.set(N),f=W,x(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(N){f=N,x(u,f)},render:w,addToRenderList:R,dispose:_}}function iM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function f(j,$,ee,V,te){let pe=!1;const re=S(j,V,ee,$);l!==re&&(l=re,p(l.object)),pe=M(j,V,ee,te),pe&&w(j,V,ee,te),te!==null&&e.update(te,s.ELEMENT_ARRAY_BUFFER),(pe||u)&&(u=!1,C(j,$,ee,V),te!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function h(){return s.createVertexArray()}function p(j){return s.bindVertexArray(j)}function v(j){return s.deleteVertexArray(j)}function S(j,$,ee,V){const te=V.wireframe===!0;let pe=r[$.id];pe===void 0&&(pe={},r[$.id]=pe);const re=j.isInstancedMesh===!0?j.id:0;let Q=pe[re];Q===void 0&&(Q={},pe[re]=Q);let Z=Q[ee.id];Z===void 0&&(Z={},Q[ee.id]=Z);let J=Z[te];return J===void 0&&(J=g(h()),Z[te]=J),J}function g(j){const $=[],ee=[],V=[];for(let te=0;te<t;te++)$[te]=0,ee[te]=0,V[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:ee,attributeDivisors:V,object:j,attributes:{},index:null}}function M(j,$,ee,V){const te=l.attributes,pe=$.attributes;let re=0;const Q=ee.getAttributes();for(const Z in Q)if(Q[Z].location>=0){const D=te[Z];let le=pe[Z];if(le===void 0&&(Z==="instanceMatrix"&&j.instanceMatrix&&(le=j.instanceMatrix),Z==="instanceColor"&&j.instanceColor&&(le=j.instanceColor)),D===void 0||D.attribute!==le||le&&D.data!==le.data)return!0;re++}return l.attributesNum!==re||l.index!==V}function w(j,$,ee,V){const te={},pe=$.attributes;let re=0;const Q=ee.getAttributes();for(const Z in Q)if(Q[Z].location>=0){let D=pe[Z];D===void 0&&(Z==="instanceMatrix"&&j.instanceMatrix&&(D=j.instanceMatrix),Z==="instanceColor"&&j.instanceColor&&(D=j.instanceColor));const le={};le.attribute=D,D&&D.data&&(le.data=D.data),te[Z]=le,re++}l.attributes=te,l.attributesNum=re,l.index=V}function R(){const j=l.newAttributes;for(let $=0,ee=j.length;$<ee;$++)j[$]=0}function x(j){_(j,0)}function _(j,$){const ee=l.newAttributes,V=l.enabledAttributes,te=l.attributeDivisors;ee[j]=1,V[j]===0&&(s.enableVertexAttribArray(j),V[j]=1),te[j]!==$&&(s.vertexAttribDivisor(j,$),te[j]=$)}function N(){const j=l.newAttributes,$=l.enabledAttributes;for(let ee=0,V=$.length;ee<V;ee++)$[ee]!==j[ee]&&(s.disableVertexAttribArray(ee),$[ee]=0)}function W(j,$,ee,V,te,pe,re){re===!0?s.vertexAttribIPointer(j,$,ee,te,pe):s.vertexAttribPointer(j,$,ee,V,te,pe)}function C(j,$,ee,V){R();const te=V.attributes,pe=ee.getAttributes(),re=$.defaultAttributeValues;for(const Q in pe){const Z=pe[Q];if(Z.location>=0){let J=te[Q];if(J===void 0&&(Q==="instanceMatrix"&&j.instanceMatrix&&(J=j.instanceMatrix),Q==="instanceColor"&&j.instanceColor&&(J=j.instanceColor)),J!==void 0){const D=J.normalized,le=J.itemSize,Ee=e.get(J);if(Ee===void 0)continue;const Ze=Ee.buffer,Xe=Ee.type,qe=Ee.bytesPerElement,oe=Xe===s.INT||Xe===s.UNSIGNED_INT||J.gpuType===Ef;if(J.isInterleavedBufferAttribute){const he=J.data,be=he.stride,Qe=J.offset;if(he.isInstancedInterleavedBuffer){for(let Ge=0;Ge<Z.locationSize;Ge++)_(Z.location+Ge,he.meshPerAttribute);j.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ge=0;Ge<Z.locationSize;Ge++)x(Z.location+Ge);s.bindBuffer(s.ARRAY_BUFFER,Ze);for(let Ge=0;Ge<Z.locationSize;Ge++)W(Z.location+Ge,le/Z.locationSize,Xe,D,be*qe,(Qe+le/Z.locationSize*Ge)*qe,oe)}else{if(J.isInstancedBufferAttribute){for(let he=0;he<Z.locationSize;he++)_(Z.location+he,J.meshPerAttribute);j.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let he=0;he<Z.locationSize;he++)x(Z.location+he);s.bindBuffer(s.ARRAY_BUFFER,Ze);for(let he=0;he<Z.locationSize;he++)W(Z.location+he,le/Z.locationSize,Xe,D,le*qe,le/Z.locationSize*he*qe,oe)}}else if(re!==void 0){const D=re[Q];if(D!==void 0)switch(D.length){case 2:s.vertexAttrib2fv(Z.location,D);break;case 3:s.vertexAttrib3fv(Z.location,D);break;case 4:s.vertexAttrib4fv(Z.location,D);break;default:s.vertexAttrib1fv(Z.location,D)}}}}N()}function I(){P();for(const j in r){const $=r[j];for(const ee in $){const V=$[ee];for(const te in V){const pe=V[te];for(const re in pe)v(pe[re].object),delete pe[re];delete V[te]}}delete r[j]}}function L(j){if(r[j.id]===void 0)return;const $=r[j.id];for(const ee in $){const V=$[ee];for(const te in V){const pe=V[te];for(const re in pe)v(pe[re].object),delete pe[re];delete V[te]}}delete r[j.id]}function k(j){for(const $ in r){const ee=r[$];for(const V in ee){const te=ee[V];if(te[j.id]===void 0)continue;const pe=te[j.id];for(const re in pe)v(pe[re].object),delete pe[re];delete te[j.id]}}}function E(j){for(const $ in r){const ee=r[$],V=j.isInstancedMesh===!0?j.id:0,te=ee[V];if(te!==void 0){for(const pe in te){const re=te[pe];for(const Q in re)v(re[Q].object),delete re[Q];delete te[pe]}delete ee[V],Object.keys(ee).length===0&&delete r[$]}}}function P(){z(),u=!0,l!==o&&(l=o,p(l.object))}function z(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:P,resetDefaultState:z,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfObject:E,releaseStatesOfProgram:k,initAttributes:R,enableAttribute:x,disableUnusedAttributes:N}}function rM(s,e,t){let r;function o(h){r=h}function l(h,p){s.drawArrays(r,h,p),t.update(p,r,1)}function u(h,p,v){v!==0&&(s.drawArraysInstanced(r,h,p,v),t.update(p,r,v))}function f(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,v);let g=0;for(let M=0;M<v;M++)g+=p[M];t.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function sM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(k){return!(k!==Hi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const E=k===ar&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==pi&&k!==nr&&!E&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function h(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(Et("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const S=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&Et("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),W=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:w,maxTextureSize:R,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:N,maxVaryings:W,maxFragmentUniforms:C,maxSamples:I,samples:L}}function aM(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Qr,f=new At,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const M=S.length!==0||g||r!==0||o;return o=g,r=S.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,g){t=v(S,g,0)},this.setState=function(S,g,M){const w=S.clippingPlanes,R=S.clipIntersection,x=S.clipShadows,_=s.get(S);if(!o||w===null||w.length===0||l&&!x)l?v(null):p();else{const N=l?0:r,W=N*4;let C=_.clippingState||null;h.value=C,C=v(w,g,W,M);for(let I=0;I!==W;++I)C[I]=t[I];_.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=N}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(S,g,M,w){const R=S!==null?S.length:0;let x=null;if(R!==0){if(x=h.value,w!==!0||x===null){const _=M+R*4,N=g.matrixWorldInverse;f.getNormalMatrix(N),(x===null||x.length<_)&&(x=new Float32Array(_));for(let W=0,C=M;W!==R;++W,C+=4)u.copy(S[W]).applyMatrix4(N,f),u.normal.toArray(x,C),x[C+3]=u.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,x}}const pa=4,oM=6,lM=20,cM=256,ao=new Of,jm=new Ft;let yd=null,Md=0,Ed=0,wd=!1;const uM=new ae,xs=new ae;class qm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=uM}=l;yd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$m(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yd,Md,Ed),this._renderer.xr.enabled=wd,e.scissorTest=!1,da(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===As||e.mapping===va?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:ar,format:Hi,colorSpace:ic,depthBuffer:!1},o=Km(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Km(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=dM(l)),this._blurMaterial=hM(l,e,t),this._ggxMaterial=fM(l,e,t)}return o}_compileMaterial(e){const t=new yt(new Bn,e);this._renderer.compile(t,ao)}_sceneToCubeUV(e,t,r,o,l){const h=new hi(90,1,t,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,M=S.toneMapping;S.getClearColor(jm),S.toneMapping=rr,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yt(new ri,new mn({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,x=R.material;let _=!1;const N=e.background;N?N.isColor&&(x.color.copy(N),e.background=null,_=!0):(x.color.copy(jm),_=!0);for(let W=0;W<6;W++){const C=W%3;C===0?(h.up.set(0,p[W],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[W],l.y,l.z)):C===1?(h.up.set(0,0,p[W]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[W],l.z)):(h.up.set(0,p[W],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[W]));const I=this._cubeSize;da(o,C*I,W>2?I:0,I,I),S.setRenderTarget(o),_&&S.render(R,h),S.render(e,h)}S.toneMapping=M,S.autoClear=g,e.background=N}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===As||e.mapping===va;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$m());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;da(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,ao)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const h=u.uniforms,p=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),S=Math.sqrt(p*p-v*v),g=p*1.25,M=S*g,{_lodMax:w}=this,R=this._sizeLods[r],x=3*R*(r>w-pa?r-w+pa:0),_=4*(this._cubeSize-R);h.envMap.value=e.texture,h.roughness.value=M,h.mipInt.value=w-t,da(l,x,_,3*R,2*R),o.setRenderTarget(l),o.render(f,ao),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=w-r,da(e,x,_,3*R,2*R),o.setRenderTarget(e),o.render(f,ao)}_blur(e,t,r,o){const l=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,l,t,r,u),this._blurPass(l,e,r,r,u)}_blurPass(e,t,r,o,l){const u=this._renderer,f=this._blurMaterial,h=this._lodMeshes[o];h.material=f;const p=f.uniforms;p.envMap.value=e.texture,p.sigma.value=l,p.mipInt.value=this._lodMax-r;const v=this._sizeLods[o],S=3*v*(o>this._lodMax-pa?o-this._lodMax+pa:0),g=4*(this._cubeSize-v);da(t,S,g,3*v,2*v),u.setRenderTarget(t),u.render(h,ao)}}function dM(s){const e=[],t=[];let r=s;const o=s-pa+1+oM;for(let l=0;l<o;l++){const u=Math.pow(2,r);e.push(u);const f=1/(u-2),h=-f,p=1+f,v=[h,h,p,h,p,p,h,h,p,p,h,p],S=6,g=6,M=3,w=new Float32Array(M*g*S),R=new Float32Array(M*g*S);for(let _=0;_<S;_++){const N=_%3*2/3-1,W=_>2?0:-1,C=[N,W,0,N+2/3,W,0,N+2/3,W+1,0,N,W,0,N+2/3,W+1,0,N,W+1,0];w.set(C,M*g*_);for(let I=0;I<g;I++){const L=v[I*2]*2-1,k=v[I*2+1]*2-1;_===0?xs.set(1,k,L):_===1?xs.set(-L,1,-k):_===2?xs.set(-L,k,1):_===3?xs.set(-1,k,-L):_===4?xs.set(-L,-1,k):xs.set(L,k,-1),xs.toArray(R,(_*g+I)*M)}}const x=new Bn;x.setAttribute("position",new Xi(w,M)),x.setAttribute("outputDirection",new Xi(R,M)),t.push(new yt(x,null)),r>pa&&r--}return{lodMeshes:t,sizeLods:e}}function Km(s,e,t){const r=new Wi(s,e,t);return r.texture.mapping=cc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function da(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function fM(s,e,t){return new Yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:cM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:dc(),fragmentShader:`

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
		`,blending:wr,depthTest:!1,depthWrite:!1})}function hM(s,e,t){return new Yi({name:"SphericalGaussianBlur",defines:{SAMPLES:lM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:dc(),fragmentShader:`

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
		`,blending:wr,depthTest:!1,depthWrite:!1})}function $m(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dc(),fragmentShader:`

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
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Zm(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function dc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Zg extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Wg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new ri(5,5,5),l=new Yi({name:"CubemapFromEquirect",uniforms:xa(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:si,blending:wr});l.uniforms.tEquirect.value=t;const u=new yt(o,l),f=t.minFilter;return t.minFilter===Es&&(t.minFilter=Xn),new vx(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function pM(s){let e=new WeakMap,t=new WeakMap,r=null;function o(g,M=!1){return g==null?null:M?u(g):l(g)}function l(g){if(g&&g.isTexture){const M=g.mapping;if(M===Yu||M===ju)if(e.has(g)){const w=e.get(g).texture;return f(w,g.mapping)}else{const w=g.image;if(w&&w.height>0){const R=new Zg(w.height);return R.fromEquirectangularTexture(s,g),e.set(g,R),g.addEventListener("dispose",p),f(R.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const M=g.mapping,w=M===Yu||M===ju,R=M===As||M===va;if(w||R){let x=t.get(g);const _=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==_)return r===null&&(r=new qm(s)),x=w?r.fromEquirectangular(g,x):r.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),x.texture;if(x!==void 0)return x.texture;{const N=g.image;return w&&N&&N.height>0||R&&N&&h(N)?(r===null&&(r=new qm(s)),x=w?r.fromEquirectangular(g):r.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),g.addEventListener("dispose",v),x.texture):null}}}return g}function f(g,M){return M===Yu?g.mapping=As:M===ju&&(g.mapping=va),g}function h(g){let M=0;const w=6;for(let R=0;R<w;R++)g[R]!==void 0&&M++;return M===w}function p(g){const M=g.target;M.removeEventListener("dispose",p);const w=e.get(M);w!==void 0&&(e.delete(M),w.dispose())}function v(g){const M=g.target;M.removeEventListener("dispose",v);const w=t.get(M);w!==void 0&&(t.delete(M),w.dispose())}function S(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function mM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&ma("WebGLRenderer: "+r+" extension not supported."),o}}}function gM(s,e,t,r){const o={},l=new WeakMap;function u(S){const g=S.target;g.index!==null&&e.remove(g.index);for(const w in g.attributes)e.remove(g.attributes[w]);g.removeEventListener("dispose",u),delete o[g.id];const M=l.get(g);M&&(e.remove(M),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(S,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function h(S){const g=S.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER)}function p(S){const g=[],M=S.index,w=S.attributes.position;let R=0;if(w===void 0)return;if(M!==null){const N=M.array;R=M.version;for(let W=0,C=N.length;W<C;W+=3){const I=N[W+0],L=N[W+1],k=N[W+2];g.push(I,L,L,k,k,I)}}else{const N=w.array;R=w.version;for(let W=0,C=N.length/3-1;W<C;W+=3){const I=W+0,L=W+1,k=W+2;g.push(I,L,L,k,k,I)}}const x=new(w.count>=65535?Gg:zg)(g,1);x.version=R;const _=l.get(S);_&&e.remove(_),l.set(S,x)}function v(S){const g=l.get(S);if(g){const M=S.index;M!==null&&g.version<M.version&&p(S)}else p(S);return l.get(S)}return{get:f,update:h,getWireframeAttribute:v}}function vM(s,e,t){let r;function o(S){r=S}let l,u;function f(S){l=S.type,u=S.bytesPerElement}function h(S,g){s.drawElements(r,g,l,S*u),t.update(g,r,1)}function p(S,g,M){M!==0&&(s.drawElementsInstanced(r,g,l,S*u,M),t.update(g,r,M))}function v(S,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,S,0,M);let R=0;for(let x=0;x<M;x++)R+=g[x];t.update(R,r,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=v}function _M(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:$t("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function xM(s,e,t){const r=new WeakMap,o=new hn;function l(u,f,h){const p=u.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=v!==void 0?v.length:0;let g=r.get(f);if(g===void 0||g.count!==S){let z=function(){E.dispose(),r.delete(f),f.removeEventListener("dispose",z)};var M=z;g!==void 0&&g.texture.dispose();const w=f.morphAttributes.position!==void 0,R=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],N=f.morphAttributes.normal||[],W=f.morphAttributes.color||[];let C=0;w===!0&&(C=1),R===!0&&(C=2),x===!0&&(C=3);let I=f.attributes.position.count*C,L=1;I>e.maxTextureSize&&(L=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const k=new Float32Array(I*L*4*S),E=new Og(k,I,L,S);E.type=nr,E.needsUpdate=!0;const P=C*4;for(let j=0;j<S;j++){const $=_[j],ee=N[j],V=W[j],te=I*L*4*j;for(let pe=0;pe<$.count;pe++){const re=pe*P;w===!0&&(o.fromBufferAttribute($,pe),k[te+re+0]=o.x,k[te+re+1]=o.y,k[te+re+2]=o.z,k[te+re+3]=0),R===!0&&(o.fromBufferAttribute(ee,pe),k[te+re+4]=o.x,k[te+re+5]=o.y,k[te+re+6]=o.z,k[te+re+7]=0),x===!0&&(o.fromBufferAttribute(V,pe),k[te+re+8]=o.x,k[te+re+9]=o.y,k[te+re+10]=o.z,k[te+re+11]=V.itemSize===4?o.w:1)}}g={count:S,texture:E,size:new Ht(I,L)},r.set(f,g),f.addEventListener("dispose",z)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let w=0;for(let x=0;x<p.length;x++)w+=p[x];const R=f.morphTargetsRelative?1:1-w;h.getUniforms().setValue(s,"morphTargetBaseInfluence",R),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function SM(s,e,t,r,o){let l=new WeakMap;function u(p){const v=o.render.frame,S=p.geometry,g=e.get(p,S);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==v&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const M=p.skeleton;l.get(M)!==v&&(M.update(),l.set(M,v))}return g}function f(){l=new WeakMap}function h(p){const v=p.target;v.removeEventListener("dispose",h),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:f}}const yM={[Mg]:"LINEAR_TONE_MAPPING",[Eg]:"REINHARD_TONE_MAPPING",[wg]:"CINEON_TONE_MAPPING",[Mf]:"ACES_FILMIC_TONE_MAPPING",[Ag]:"AGX_TONE_MAPPING",[bg]:"NEUTRAL_TONE_MAPPING",[Tg]:"CUSTOM_TONE_MAPPING"};function MM(s,e,t,r,o,l){const u=new Wi(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,h=null;const p=new Bn;p.setAttribute("position",new gn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new gn([0,2,0,0,2,0],2));const v=new ux({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),S=new yt(p,v),g=new Of(-1,1,1,-1,0,1);let M=null,w=null,R=!1,x,_=null,N=[],W=!1;this.setSize=function(C,I){u.setSize(C,I),f!==null&&f.setSize(C,I),h!==null&&h.setSize(C,I);for(let L=0;L<N.length;L++){const k=N[L];k.setSize&&k.setSize(C,I)}},this.setEffects=function(C){N=C,W=N.length>0&&N[0].isRenderPass===!0;const I=u.width,L=u.height;N.length>0&&f===null&&(f=new Wi(I,L,{type:ar,depthBuffer:!1,stencilBuffer:!1}),h=new Wi(I,L,{type:ar,depthBuffer:!1,stencilBuffer:!1}));for(let k=0;k<N.length;k++){const E=N[k];E.setSize&&E.setSize(I,L)}},this.begin=function(C,I){if(R||C.toneMapping===rr&&N.length===0)return!1;if(_=I,I!==null){const L=I.width,k=I.height;(u.width!==L||u.height!==k)&&this.setSize(L,k)}return W===!1&&C.setRenderTarget(u),x=C.toneMapping,C.toneMapping=rr,!0},this.hasRenderPass=function(){return W},this.end=function(C,I){C.toneMapping=x,R=!0;let L=u,k=f;for(let E=0;E<N.length;E++){const P=N[E];P.enabled!==!1&&(P.render(C,k,L,I),P.needsSwap!==!1&&(L=k,k=k===f?h:f))}if(M!==C.outputColorSpace||w!==C.toneMapping){M=C.outputColorSpace,w=C.toneMapping,v.defines={},Gt.getTransfer(M)===en&&(v.defines.SRGB_TRANSFER="");const E=yM[w];E&&(v.defines[E]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=L.texture,C.setRenderTarget(_),C.render(S,g),_=null,R=!1},this.isCompositing=function(){return R},this.dispose=function(){u.dispose(),f!==null&&f.dispose(),h!==null&&h.dispose(),p.dispose(),v.dispose()}}const Jg=new Yn,_f=new vo(1,1),Qg=new Og,e0=new k_,t0=new Wg,Jm=[],Qm=[],eg=new Float32Array(16),tg=new Float32Array(9),ng=new Float32Array(4);function ya(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=Jm[o];if(l===void 0&&(l=new Float32Array(o),Jm[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function An(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function bn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function fc(s,e){let t=Qm[e];t===void 0&&(t=new Int32Array(e),Qm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function EM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function wM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(An(t,e))return;s.uniform2fv(this.addr,e),bn(t,e)}}function TM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(An(t,e))return;s.uniform3fv(this.addr,e),bn(t,e)}}function AM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(An(t,e))return;s.uniform4fv(this.addr,e),bn(t,e)}}function bM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(An(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),bn(t,e)}else{if(An(t,r))return;ng.set(r),s.uniformMatrix2fv(this.addr,!1,ng),bn(t,r)}}function RM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(An(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),bn(t,e)}else{if(An(t,r))return;tg.set(r),s.uniformMatrix3fv(this.addr,!1,tg),bn(t,r)}}function CM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(An(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),bn(t,e)}else{if(An(t,r))return;eg.set(r),s.uniformMatrix4fv(this.addr,!1,eg),bn(t,r)}}function PM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function LM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(An(t,e))return;s.uniform2iv(this.addr,e),bn(t,e)}}function NM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(An(t,e))return;s.uniform3iv(this.addr,e),bn(t,e)}}function IM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(An(t,e))return;s.uniform4iv(this.addr,e),bn(t,e)}}function DM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function UM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(An(t,e))return;s.uniform2uiv(this.addr,e),bn(t,e)}}function FM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(An(t,e))return;s.uniform3uiv(this.addr,e),bn(t,e)}}function OM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(An(t,e))return;s.uniform4uiv(this.addr,e),bn(t,e)}}function BM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(_f.compareFunction=t.isReversedDepthBuffer()?Pf:Cf,l=_f):l=Jg,t.setTexture2D(e||l,o)}function kM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||e0,o)}function zM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||t0,o)}function GM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Qg,o)}function VM(s){switch(s){case 5126:return EM;case 35664:return wM;case 35665:return TM;case 35666:return AM;case 35674:return bM;case 35675:return RM;case 35676:return CM;case 5124:case 35670:return PM;case 35667:case 35671:return LM;case 35668:case 35672:return NM;case 35669:case 35673:return IM;case 5125:return DM;case 36294:return UM;case 36295:return FM;case 36296:return OM;case 35678:case 36198:case 36298:case 36306:case 35682:return BM;case 35679:case 36299:case 36307:return kM;case 35680:case 36300:case 36308:case 36293:return zM;case 36289:case 36303:case 36311:case 36292:return GM}}function HM(s,e){s.uniform1fv(this.addr,e)}function WM(s,e){const t=ya(e,this.size,2);s.uniform2fv(this.addr,t)}function XM(s,e){const t=ya(e,this.size,3);s.uniform3fv(this.addr,t)}function YM(s,e){const t=ya(e,this.size,4);s.uniform4fv(this.addr,t)}function jM(s,e){const t=ya(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function qM(s,e){const t=ya(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function KM(s,e){const t=ya(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function $M(s,e){s.uniform1iv(this.addr,e)}function ZM(s,e){s.uniform2iv(this.addr,e)}function JM(s,e){s.uniform3iv(this.addr,e)}function QM(s,e){s.uniform4iv(this.addr,e)}function eE(s,e){s.uniform1uiv(this.addr,e)}function tE(s,e){s.uniform2uiv(this.addr,e)}function nE(s,e){s.uniform3uiv(this.addr,e)}function iE(s,e){s.uniform4uiv(this.addr,e)}function rE(s,e,t){const r=this.cache,o=e.length,l=fc(t,o);An(r,l)||(s.uniform1iv(this.addr,l),bn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=_f:u=Jg;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function sE(s,e,t){const r=this.cache,o=e.length,l=fc(t,o);An(r,l)||(s.uniform1iv(this.addr,l),bn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||e0,l[u])}function aE(s,e,t){const r=this.cache,o=e.length,l=fc(t,o);An(r,l)||(s.uniform1iv(this.addr,l),bn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||t0,l[u])}function oE(s,e,t){const r=this.cache,o=e.length,l=fc(t,o);An(r,l)||(s.uniform1iv(this.addr,l),bn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Qg,l[u])}function lE(s){switch(s){case 5126:return HM;case 35664:return WM;case 35665:return XM;case 35666:return YM;case 35674:return jM;case 35675:return qM;case 35676:return KM;case 5124:case 35670:return $M;case 35667:case 35671:return ZM;case 35668:case 35672:return JM;case 35669:case 35673:return QM;case 5125:return eE;case 36294:return tE;case 36295:return nE;case 36296:return iE;case 35678:case 36198:case 36298:case 36306:case 35682:return rE;case 35679:case 36299:case 36307:return sE;case 35680:case 36300:case 36308:case 36293:return aE;case 36289:case 36303:case 36311:case 36292:return oE}}class cE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=VM(t.type)}}class uE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=lE(t.type)}}class dE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Td=/(\w+)(\])?(\[|\.)?/g;function ig(s,e){s.seq.push(e),s.map[e.id]=e}function fE(s,e,t){const r=s.name,o=r.length;for(Td.lastIndex=0;;){const l=Td.exec(r),u=Td.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===o){ig(t,p===void 0?new cE(f,s,e):new uE(f,s,e));break}else{let S=t.map[f];S===void 0&&(S=new dE(f),ig(t,S)),t=S}}}class Ql{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);fE(f,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function rg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const hE=37297;let pE=0;function mE(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const sg=new At;function gE(s){Gt._getMatrix(sg,Gt.workingColorSpace,s);const e=`mat3( ${sg.elements.map(t=>t.toFixed(4))} )`;switch(Gt.getTransfer(s)){case rc:return[e,"LinearTransferOETF"];case en:return[e,"sRGBTransferOETF"];default:return Et("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function ag(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+mE(s.getShaderSource(e),f)}else return l}function vE(s,e){const t=gE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const _E={[Mg]:"Linear",[Eg]:"Reinhard",[wg]:"Cineon",[Mf]:"ACESFilmic",[Ag]:"AgX",[bg]:"Neutral",[Tg]:"Custom"};function xE(s,e){const t=_E[e];return t===void 0?(Et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const jl=new ae;function SE(){Gt.getLuminanceCoefficients(jl);const s=jl.x.toFixed(4),e=jl.y.toFixed(4),t=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function ME(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function EE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function co(s){return s!==""}function og(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wE=/^[ \t]*#include +<([\w\d./]+)>/gm;function xf(s){return s.replace(wE,AE)}const TE=new Map;function AE(s,e){let t=Nt[e];if(t===void 0){const r=TE.get(e);if(r!==void 0)t=Nt[r],Et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return xf(t)}const bE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cg(s){return s.replace(bE,RE)}function RE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function ug(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const CE={[ql]:"SHADOWMAP_TYPE_PCF",[lo]:"SHADOWMAP_TYPE_VSM"};function PE(s){return CE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const LE={[As]:"ENVMAP_TYPE_CUBE",[va]:"ENVMAP_TYPE_CUBE",[cc]:"ENVMAP_TYPE_CUBE_UV"};function NE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":LE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const IE={[va]:"ENVMAP_MODE_REFRACTION"};function DE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":IE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const UE={[yg]:"ENVMAP_BLENDING_MULTIPLY",[g_]:"ENVMAP_BLENDING_MIX",[v_]:"ENVMAP_BLENDING_ADD"};function FE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":UE[s.combine]||"ENVMAP_BLENDING_NONE"}function OE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function BE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=PE(t),p=NE(t),v=DE(t),S=FE(t),g=OE(t),M=yE(t),w=ME(l),R=o.createProgram();let x,_,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(co).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(co).join(`
`),_.length>0&&(_+=`
`)):(x=[ug(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),_=[ug(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rr?"#define TONE_MAPPING":"",t.toneMapping!==rr?Nt.tonemapping_pars_fragment:"",t.toneMapping!==rr?xE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,vE("linearToOutputTexel",t.outputColorSpace),SE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(co).join(`
`)),u=xf(u),u=og(u,t),u=lg(u,t),f=xf(f),f=og(f,t),f=lg(f,t),u=cg(u),f=cg(f),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",t.glslVersion===_m?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_m?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const W=N+x+u,C=N+_+f,I=rg(o,o.VERTEX_SHADER,W),L=rg(o,o.FRAGMENT_SHADER,C);o.attachShader(R,I),o.attachShader(R,L),t.index0AttributeName!==void 0?o.bindAttribLocation(R,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function k(j){if(s.debug.checkShaderErrors){const $=o.getProgramInfoLog(R)||"",ee=o.getShaderInfoLog(I)||"",V=o.getShaderInfoLog(L)||"",te=$.trim(),pe=ee.trim(),re=V.trim();let Q=!0,Z=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,R,I,L);else{const J=ag(o,I,"vertex"),D=ag(o,L,"fragment");$t("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+te+`
`+J+`
`+D)}else te!==""?Et("WebGLProgram: Program Info Log:",te):(pe===""||re==="")&&(Z=!1);Z&&(j.diagnostics={runnable:Q,programLog:te,vertexShader:{log:pe,prefix:x},fragmentShader:{log:re,prefix:_}})}o.deleteShader(I),o.deleteShader(L),E=new Ql(o,R),P=EE(o,R)}let E;this.getUniforms=function(){return E===void 0&&k(this),E};let P;this.getAttributes=function(){return P===void 0&&k(this),P};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=o.getProgramParameter(R,hE)),z},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=pE++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=I,this.fragmentShader=L,this}let kE=0;class zE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new GE(e),t.set(e,r)),r}}class GE{constructor(e){this.id=kE++,this.code=e,this.usedTimes=0}}function VE(s){return s===Rs||s===tc||s===nc}function HE(s,e,t,r,o,l){const u=new Bg,f=new zE,h=new Set,p=[],v=new Map,S=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(E){return h.add(E),E===0?"uv":`uv${E}`}function R(E,P,z,j,$,ee){const V=j.fog,te=$.geometry,pe=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?j.environment:null,re=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,Q=e.get(E.envMap||pe,re),Z=Q&&Q.mapping===cc?Q.image.height:null,J=M[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&Et("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const D=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,le=D!==void 0?D.length:0;let Ee=0;te.morphAttributes.position!==void 0&&(Ee=1),te.morphAttributes.normal!==void 0&&(Ee=2),te.morphAttributes.color!==void 0&&(Ee=3);let Ze,Xe,qe,oe;if(J){const Dt=er[J];Ze=Dt.vertexShader,Xe=Dt.fragmentShader}else{Ze=E.vertexShader,Xe=E.fragmentShader;const Dt=f.getVertexShaderStage(E),Ut=f.getFragmentShaderStage(E);f.update(E,Dt,Ut),qe=Dt.id,oe=Ut.id}const he=s.getRenderTarget(),be=s.state.buffers.depth.getReversed(),Qe=$.isInstancedMesh===!0,Ge=$.isBatchedMesh===!0,dt=!!E.map,pt=!!E.matcap,ft=!!Q,Rt=!!E.aoMap,Lt=!!E.lightMap,xt=!!E.bumpMap&&E.wireframe===!1,St=!!E.normalMap,Yt=!!E.displacementMap,tn=!!E.emissiveMap,It=!!E.metalnessMap,mt=!!E.roughnessMap,q=E.anisotropy>0,jt=E.clearcoat>0,Oe=E.dispersion>0,b=E.retroreflectivity>0,y=E.iridescence>0,O=E.sheen>0,se=E.transmission>0,de=q&&!!E.anisotropyMap,Te=jt&&!!E.clearcoatMap,Ne=jt&&!!E.clearcoatNormalMap,ge=jt&&!!E.clearcoatRoughnessMap,_e=y&&!!E.iridescenceMap,De=y&&!!E.iridescenceThicknessMap,$e=O&&!!E.sheenColorMap,Ue=O&&!!E.sheenRoughnessMap,Re=!!E.specularMap,Ye=!!E.specularColorMap,tt=!!E.specularIntensityMap,ht=se&&!!E.transmissionMap,G=se&&!!E.thicknessMap,Le=!!E.gradientMap,ve=!!E.alphaMap,Fe=E.alphaTest>0,Be=!!E.alphaHash,Se=!!E.extensions;let rt=rr;E.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(rt=s.toneMapping);const Je={shaderID:J,shaderType:E.type,shaderName:E.name,vertexShader:Ze,fragmentShader:Xe,defines:E.defines,customVertexShaderID:qe,customFragmentShaderID:oe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Ge,batchingColor:Ge&&$._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&$.instanceColor!==null,instancingMorph:Qe&&$.morphTexture!==null,outputColorSpace:he===null?s.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Gt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:dt,matcap:pt,envMap:ft,envMapMode:ft&&Q.mapping,envMapCubeUVHeight:Z,aoMap:Rt,lightMap:Lt,bumpMap:xt,normalMap:St,displacementMap:Yt,emissiveMap:tn,normalMapObjectSpace:St&&E.normalMapType===S_,normalMapTangentSpace:St&&E.normalMapType===mf,packedNormalMap:St&&E.normalMapType===mf&&VE(E.normalMap.format),metalnessMap:It,roughnessMap:mt,anisotropy:q,anisotropyMap:de,clearcoat:jt,clearcoatMap:Te,clearcoatNormalMap:Ne,clearcoatRoughnessMap:ge,dispersion:Oe,retroreflection:b,iridescence:y,iridescenceMap:_e,iridescenceThicknessMap:De,sheen:O,sheenColorMap:$e,sheenRoughnessMap:Ue,specularMap:Re,specularColorMap:Ye,specularIntensityMap:tt,transmission:se,transmissionMap:ht,thicknessMap:G,gradientMap:Le,opaque:E.transparent===!1&&E.blending===uo&&E.alphaToCoverage===!1,alphaMap:ve,alphaTest:Fe,alphaHash:Be,combine:E.combine,mapUv:dt&&w(E.map.channel),aoMapUv:Rt&&w(E.aoMap.channel),lightMapUv:Lt&&w(E.lightMap.channel),bumpMapUv:xt&&w(E.bumpMap.channel),normalMapUv:St&&w(E.normalMap.channel),displacementMapUv:Yt&&w(E.displacementMap.channel),emissiveMapUv:tn&&w(E.emissiveMap.channel),metalnessMapUv:It&&w(E.metalnessMap.channel),roughnessMapUv:mt&&w(E.roughnessMap.channel),anisotropyMapUv:de&&w(E.anisotropyMap.channel),clearcoatMapUv:Te&&w(E.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&w(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&w(E.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&w(E.iridescenceMap.channel),iridescenceThicknessMapUv:De&&w(E.iridescenceThicknessMap.channel),sheenColorMapUv:$e&&w(E.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&w(E.sheenRoughnessMap.channel),specularMapUv:Re&&w(E.specularMap.channel),specularColorMapUv:Ye&&w(E.specularColorMap.channel),specularIntensityMapUv:tt&&w(E.specularIntensityMap.channel),transmissionMapUv:ht&&w(E.transmissionMap.channel),thicknessMapUv:G&&w(E.thicknessMap.channel),alphaMapUv:ve&&w(E.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(St||q),vertexNormals:!!te.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!te.attributes.uv&&(dt||ve),fog:!!V,useFog:E.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||te.attributes.normal===void 0&&St===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:be,skinning:$.isSkinnedMesh===!0,hasPositionAttribute:te.attributes.position!==void 0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Ee,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:ee.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:dt&&E.map.isVideoTexture===!0&&Gt.getTransfer(E.map.colorSpace)===en,decodeVideoTextureEmissive:tn&&E.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(E.emissiveMap.colorSpace)===en,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===tr,flipSided:E.side===si,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Se&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&E.extensions.multiDraw===!0||Ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Je.vertexUv1s=h.has(1),Je.vertexUv2s=h.has(2),Je.vertexUv3s=h.has(3),h.clear(),Je}function x(E){const P=[];if(E.shaderID?P.push(E.shaderID):(P.push(E.customVertexShaderID),P.push(E.customFragmentShaderID)),E.defines!==void 0)for(const z in E.defines)P.push(z),P.push(E.defines[z]);return E.isRawShaderMaterial===!1&&(_(P,E),N(P,E),P.push(s.outputColorSpace)),P.push(E.customProgramCacheKey),P.join()}function _(E,P){E.push(P.precision),E.push(P.outputColorSpace),E.push(P.envMapMode),E.push(P.envMapCubeUVHeight),E.push(P.mapUv),E.push(P.alphaMapUv),E.push(P.lightMapUv),E.push(P.aoMapUv),E.push(P.bumpMapUv),E.push(P.normalMapUv),E.push(P.displacementMapUv),E.push(P.emissiveMapUv),E.push(P.metalnessMapUv),E.push(P.roughnessMapUv),E.push(P.anisotropyMapUv),E.push(P.clearcoatMapUv),E.push(P.clearcoatNormalMapUv),E.push(P.clearcoatRoughnessMapUv),E.push(P.iridescenceMapUv),E.push(P.iridescenceThicknessMapUv),E.push(P.sheenColorMapUv),E.push(P.sheenRoughnessMapUv),E.push(P.specularMapUv),E.push(P.specularColorMapUv),E.push(P.specularIntensityMapUv),E.push(P.transmissionMapUv),E.push(P.thicknessMapUv),E.push(P.combine),E.push(P.fogExp2),E.push(P.sizeAttenuation),E.push(P.morphTargetsCount),E.push(P.morphAttributeCount),E.push(P.numSunLights),E.push(P.numDirLights),E.push(P.numPointLights),E.push(P.numSpotLights),E.push(P.numSpotLightMaps),E.push(P.numHemiLights),E.push(P.numRectAreaLights),E.push(P.numSunLightShadows),E.push(P.numDirLightShadows),E.push(P.numPointLightShadows),E.push(P.numSpotLightShadows),E.push(P.numSpotLightShadowsWithMaps),E.push(P.numLightProbes),E.push(P.shadowMapType),E.push(P.toneMapping),E.push(P.numClippingPlanes),E.push(P.numClipIntersection),E.push(P.depthPacking)}function N(E,P){u.disableAll(),P.instancing&&u.enable(0),P.instancingColor&&u.enable(1),P.instancingMorph&&u.enable(2),P.matcap&&u.enable(3),P.envMap&&u.enable(4),P.normalMapObjectSpace&&u.enable(5),P.normalMapTangentSpace&&u.enable(6),P.clearcoat&&u.enable(7),P.iridescence&&u.enable(8),P.alphaTest&&u.enable(9),P.vertexColors&&u.enable(10),P.vertexAlphas&&u.enable(11),P.vertexUv1s&&u.enable(12),P.vertexUv2s&&u.enable(13),P.vertexUv3s&&u.enable(14),P.vertexTangents&&u.enable(15),P.anisotropy&&u.enable(16),P.alphaHash&&u.enable(17),P.batching&&u.enable(18),P.dispersion&&u.enable(19),P.retroreflection&&u.enable(24),P.batchingColor&&u.enable(20),P.gradientMap&&u.enable(21),P.packedNormalMap&&u.enable(22),P.vertexNormals&&u.enable(23),E.push(u.mask),u.disableAll(),P.fog&&u.enable(0),P.useFog&&u.enable(1),P.flatShading&&u.enable(2),P.logarithmicDepthBuffer&&u.enable(3),P.reversedDepthBuffer&&u.enable(4),P.skinning&&u.enable(5),P.morphTargets&&u.enable(6),P.morphNormals&&u.enable(7),P.morphColors&&u.enable(8),P.premultipliedAlpha&&u.enable(9),P.shadowMapEnabled&&u.enable(10),P.doubleSided&&u.enable(11),P.flipSided&&u.enable(12),P.useDepthPacking&&u.enable(13),P.dithering&&u.enable(14),P.transmission&&u.enable(15),P.sheen&&u.enable(16),P.opaque&&u.enable(17),P.pointsUvs&&u.enable(18),P.decodeVideoTexture&&u.enable(19),P.decodeVideoTextureEmissive&&u.enable(20),P.alphaToCoverage&&u.enable(21),P.numLightProbeGrids>0&&u.enable(22),P.hasPositionAttribute&&u.enable(23),E.push(u.mask)}function W(E){const P=M[E.type];let z;if(P){const j=er[P];z=ox.clone(j.uniforms)}else z=E.uniforms;return z}function C(E,P){let z=v.get(P);return z!==void 0?++z.usedTimes:(z=new BE(s,P,E,o),p.push(z),v.set(P,z)),z}function I(E){if(--E.usedTimes===0){const P=p.indexOf(E);p[P]=p[p.length-1],p.pop(),v.delete(E.cacheKey),E.destroy()}}function L(E){f.remove(E)}function k(){f.dispose()}return{getParameters:R,getProgramCacheKey:x,getUniforms:W,acquireProgram:C,releaseProgram:I,releaseShaderCache:L,programs:p,dispose:k}}function WE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function XE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function dg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function fg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function f(g,M,w,R,x,_){let N=s[e];return N===void 0?(N={id:g.id,object:g,geometry:M,material:w,materialVariant:u(g),groupOrder:R,renderOrder:g.renderOrder,z:x,group:_},s[e]=N):(N.id=g.id,N.object=g,N.geometry=M,N.material=w,N.materialVariant=u(g),N.groupOrder=R,N.renderOrder=g.renderOrder,N.z=x,N.group=_),e++,N}function h(g,M,w,R,x,_,N){N.reversedDepth===!0&&(x=-x);const W=f(g,M,w,R,x,_);w.transmission>0?r.push(W):w.transparent===!0?o.push(W):t.push(W)}function p(g,M,w,R,x,_){const N=f(g,M,w,R,x,_);w.transmission>0?r.unshift(N):w.transparent===!0?o.unshift(N):t.unshift(N)}function v(g,M){t.length>1&&t.sort(g||XE),r.length>1&&r.sort(M||dg),o.length>1&&o.sort(M||dg)}function S(){for(let g=e,M=s.length;g<M;g++){const w=s[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:h,unshift:p,finish:S,sort:v}}function YE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new fg,s.set(r,[u])):o>=l.length?(u=new fg,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function jE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ae,color:new Ft};break;case"SpotLight":t={position:new ae,direction:new ae,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ae,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ae,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":t={color:new Ft,position:new ae,halfWidth:new ae,halfHeight:new ae};break}return s[e.id]=t,t}}}function qE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let KE=0;function $E(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ZE(s){const e=new jE,t=qE(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ae);const o=new ae,l=new un,u=new un;function f(p){let v=0,S=0,g=0;for(let $=0;$<9;$++)r.probe[$].set(0,0,0);let M=0,w=0,R=0,x=0,_=0,N=0,W=0,C=0,I=0,L=0,k=0,E=0,P=0,z=0;p.sort($E);for(let $=0,ee=p.length;$<ee;$++){const V=p[$],te=V.color,pe=V.intensity,re=V.distance;let Q=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Rs?Q=V.shadow.map.texture:Q=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)v+=te.r*pe,S+=te.g*pe,g+=te.b*pe;else if(V.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(V.sh.coefficients[Z],pe);z++}else if(V.isSunLight){const Z=e.get(V);if(Z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const J=V.shadow,D=t.get(V);D.shadowIntensity=J.intensity,D.shadowBias=J.bias,D.shadowNormalBias=J.normalBias,D.shadowRadius=J.radius,D.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),r.sunShadow[w]=D,r.sunShadowMap[w]=Q;const le=J.getViewportCount();for(let Ee=0;Ee<le;Ee++)r.sunShadowMatrix[R+Ee]=J.getMatrix(Ee),r.sunShadowCascade[R+Ee]=J._cascadeData[Ee];R+=le,w++}r.sun[M]=Z,M++}else if(V.isDirectionalLight){const Z=e.get(V);if(Z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const J=V.shadow,D=t.get(V);D.shadowIntensity=J.intensity,D.shadowBias=J.bias,D.shadowNormalBias=J.normalBias,D.shadowRadius=J.radius,D.shadowMapSize=J.mapSize,r.directionalShadow[x]=D,r.directionalShadowMap[x]=Q,r.directionalShadowMatrix[x]=V.shadow.matrix,I++}r.directional[x]=Z,x++}else if(V.isSpotLight){const Z=e.get(V);Z.position.setFromMatrixPosition(V.matrixWorld),Z.color.copy(te).multiplyScalar(pe),Z.distance=re,Z.coneCos=Math.cos(V.angle),Z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),Z.decay=V.decay,r.spot[N]=Z;const J=V.shadow;if(V.map&&(r.spotLightMap[E]=V.map,E++,J.updateMatrices(V),V.castShadow&&P++),r.spotLightMatrix[N]=J.matrix,V.castShadow){const D=t.get(V);D.shadowIntensity=J.intensity,D.shadowBias=J.bias,D.shadowNormalBias=J.normalBias,D.shadowRadius=J.radius,D.shadowMapSize=J.mapSize,r.spotShadow[N]=D,r.spotShadowMap[N]=Q,k++}N++}else if(V.isRectAreaLight){const Z=e.get(V);Z.color.copy(te).multiplyScalar(pe),Z.halfWidth.set(V.width*.5,0,0),Z.halfHeight.set(0,V.height*.5,0),r.rectArea[W]=Z,W++}else if(V.isPointLight){const Z=e.get(V);if(Z.color.copy(V.color).multiplyScalar(V.intensity),Z.distance=V.distance,Z.decay=V.decay,V.castShadow){const J=V.shadow,D=t.get(V);D.shadowIntensity=J.intensity,D.shadowBias=J.bias,D.shadowNormalBias=J.normalBias,D.shadowRadius=J.radius,D.shadowMapSize=J.mapSize,D.shadowCameraNear=J.camera.near,D.shadowCameraFar=J.camera.far,r.pointShadow[_]=D,r.pointShadowMap[_]=Q,r.pointShadowMatrix[_]=V.shadow.matrix,L++}r.point[_]=Z,_++}else if(V.isHemisphereLight){const Z=e.get(V);Z.skyColor.copy(V.color).multiplyScalar(pe),Z.groundColor.copy(V.groundColor).multiplyScalar(pe),r.hemi[C]=Z,C++}}W>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ke.LTC_FLOAT_1,r.rectAreaLTC2=Ke.LTC_FLOAT_2):(r.rectAreaLTC1=Ke.LTC_HALF_1,r.rectAreaLTC2=Ke.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=S,r.ambient[2]=g;const j=r.hash;(j.sunLength!==M||j.directionalLength!==x||j.pointLength!==_||j.spotLength!==N||j.rectAreaLength!==W||j.hemiLength!==C||j.numSunShadows!==w||j.numDirectionalShadows!==I||j.numPointShadows!==L||j.numSpotShadows!==k||j.numSpotMaps!==E||j.numLightProbes!==z)&&(r.sun.length=M,r.directional.length=x,r.spot.length=N,r.rectArea.length=W,r.point.length=_,r.hemi.length=C,r.sunShadow.length=w,r.sunShadowMap.length=w,r.sunShadowMatrix.length=R,r.sunShadowCascade.length=R,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.directionalShadowMatrix.length=I,r.pointShadow.length=L,r.pointShadowMap.length=L,r.pointShadowMatrix.length=L,r.spotShadow.length=k,r.spotShadowMap.length=k,r.spotLightMatrix.length=k+E-P,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=z,j.sunLength=M,j.directionalLength=x,j.pointLength=_,j.spotLength=N,j.rectAreaLength=W,j.hemiLength=C,j.numSunShadows=w,j.numDirectionalShadows=I,j.numPointShadows=L,j.numSpotShadows=k,j.numSpotMaps=E,j.numLightProbes=z,r.version=KE++)}function h(p,v){let S=0,g=0,M=0,w=0,R=0,x=0;const _=v.matrixWorldInverse;for(let N=0,W=p.length;N<W;N++){const C=p[N];if(C.isSunLight){const I=r.sun[S];I.direction.setFromMatrixPosition(C.matrixWorld),I.direction.transformDirection(_),S++}else if(C.isDirectionalLight){const I=r.directional[g];I.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(_),g++}else if(C.isSpotLight){const I=r.spot[w];I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(_),I.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),I.direction.sub(o),I.direction.transformDirection(_),w++}else if(C.isRectAreaLight){const I=r.rectArea[R];I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(_),u.identity(),l.copy(C.matrixWorld),l.premultiply(_),u.extractRotation(l),I.halfWidth.set(C.width*.5,0,0),I.halfHeight.set(0,C.height*.5,0),I.halfWidth.applyMatrix4(u),I.halfHeight.applyMatrix4(u),R++}else if(C.isPointLight){const I=r.point[M];I.position.setFromMatrixPosition(C.matrixWorld),I.position.applyMatrix4(_),M++}else if(C.isHemisphereLight){const I=r.hemi[x];I.direction.setFromMatrixPosition(C.matrixWorld),I.direction.transformDirection(_),x++}}}return{setup:f,setupView:h,state:r}}function hg(s){const e=new ZE(s),t=[],r=[],o=[];function l(g){S.camera=g,t.length=0,r.length=0,o.length=0}function u(g){t.push(g)}function f(g){r.push(g)}function h(g){o.push(g)}function p(){e.setup(t)}function v(g){e.setupView(t,g)}const S={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:S,setupLights:p,setupLightsView:v,pushLight:u,pushShadow:f,pushLightProbeGrid:h}}function JE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new hg(s),e.set(o,[f])):l>=u.length?(f=new hg(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const QE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e1=`uniform sampler2D shadow_pass;
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
}`,t1=[new ae(1,0,0),new ae(-1,0,0),new ae(0,1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1)],n1=[new ae(0,-1,0),new ae(0,-1,0),new ae(0,0,1),new ae(0,0,-1),new ae(0,-1,0),new ae(0,-1,0)],pg=new un,oo=new ae,Ad=new ae;function i1(s,e,t){let r=new Df;const o=new Ht,l=new Ht,u=new hn,f=new dx,h=new fx,p={},v=t.maxTextureSize,S={[Ts]:si,[si]:Ts,[tr]:tr},g=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:QE,fragmentShader:e1}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const w=new Bn;w.setAttribute("position",new Xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new yt(w,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ql;let _=this.type;this.render=function(L,k,E){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||L.length===0)return;this.type===Zv&&(Et("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ql);const P=s.getRenderTarget(),z=s.getActiveCubeFace(),j=s.getActiveMipmapLevel(),$=s.state;$.setBlending(wr),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const ee=_!==this.type;ee&&k.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(te=>te.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,te=L.length;V<te;V++){const pe=L[V],re=pe.shadow;if(re===void 0){Et("WebGLShadowMap:",pe,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;o.copy(re.mapSize);const Q=re.getFrameExtents();o.multiply(Q),l.copy(re.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/Q.x),o.x=l.x*Q.x,re.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/Q.y),o.y=l.y*Q.y,re.mapSize.y=l.y));const Z=s.state.buffers.depth.getReversed();if(re.camera._reversedDepth=Z,re.map===null||ee===!0){if(re.map!==null&&(re.map.depthTexture!==null&&(re.map.depthTexture.dispose(),re.map.depthTexture=null),re.map.dispose()),this.type===lo){if(pe.isPointLight){Et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}re.map=new Wi(o.x,o.y,{format:Rs,type:ar,minFilter:Xn,magFilter:Xn,generateMipmaps:!1}),re.map.texture.name=pe.name+".shadowMap",re.map.depthTexture=new vo(o.x,o.y,nr),re.map.depthTexture.name=pe.name+".shadowMapDepth",re.map.depthTexture.format=Ar,re.map.depthTexture.compareFunction=null,re.map.depthTexture.minFilter=On,re.map.depthTexture.magFilter=On}else pe.isPointLight?(re.map=new Zg(o.x),re.map.depthTexture=new sx(o.x,sr)):(re.map=new Wi(o.x,o.y),re.map.depthTexture=new vo(o.x,o.y,sr)),re.map.depthTexture.name=pe.name+".shadowMap",re.map.depthTexture.format=Ar,this.type===ql?(re.map.depthTexture.compareFunction=Z?Pf:Cf,re.map.depthTexture.minFilter=Xn,re.map.depthTexture.magFilter=Xn):(re.map.depthTexture.compareFunction=null,re.map.depthTexture.minFilter=On,re.map.depthTexture.magFilter=On);re.camera.updateProjectionMatrix()}re.map.isWebGLCubeRenderTarget!==!0&&(re.map.width!==o.x||re.map.height!==o.y)&&re.map.setSize(o.x,o.y);const J=re.map.isWebGLCubeRenderTarget?6:re.getViewportCount();pe.isPointLight!==!0&&re.updateMatrices(pe,E);for(let D=0;D<J;D++){const le=re.getCamera(D);if(pe.isPointLight){const Ee=re.camera,Ze=re.matrix,Xe=pe.distance||Ee.far;Xe!==Ee.far&&(Ee.far=Xe,Ee.updateProjectionMatrix()),oo.setFromMatrixPosition(pe.matrixWorld),Ee.position.copy(oo),Ad.copy(Ee.position),Ad.add(t1[D]),Ee.up.copy(n1[D]),Ee.lookAt(Ad),Ee.updateMatrixWorld(),Ze.makeTranslation(-oo.x,-oo.y,-oo.z),pg.multiplyMatrices(Ee.projectionMatrix,Ee.matrixWorldInverse),re._frustum.setFromProjectionMatrix(pg,Ee.coordinateSystem,Ee.reversedDepth)}if(re.map.isWebGLCubeRenderTarget)s.setRenderTarget(re.map,D),s.clear();else{D===0&&(s.setRenderTarget(re.map),s.clear());const Ee=re.getViewport(D);u.set(l.x*Ee.x,l.y*Ee.y,l.x*Ee.z,l.y*Ee.w),$.viewport(u)}r=re.getFrustum(D),C(k,E,le,pe,this.type)}re.isPointLightShadow!==!0&&this.type===lo&&N(re,E),re.needsUpdate=!1}_=this.type,x.needsUpdate=!1,s.setRenderTarget(P,z,j)};function N(L,k){const E=e.update(R);g.defines.VSM_SAMPLES!==L.blurSamples&&(g.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null?L.mapPass=new Wi(o.x,o.y,{format:Rs,type:ar}):(L.mapPass.width!==L.map.width||L.mapPass.height!==L.map.height)&&L.mapPass.setSize(L.map.width,L.map.height),g.uniforms.shadow_pass.value=L.map.depthTexture,g.uniforms.resolution.value.set(L.map.width,L.map.height),g.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(k,null,E,g,R,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value.set(L.map.width,L.map.height),M.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(k,null,E,M,R,null)}function W(L,k,E,P){let z=null;const j=E.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(j!==void 0)z=j;else if(z=E.isPointLight===!0?h:f,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const $=z.uuid,ee=k.uuid;let V=p[$];V===void 0&&(V={},p[$]=V);let te=V[ee];te===void 0&&(te=z.clone(),V[ee]=te,k.addEventListener("dispose",I)),z=te}if(z.visible=k.visible,z.wireframe=k.wireframe,P===lo?z.side=k.shadowSide!==null?k.shadowSide:k.side:z.side=k.shadowSide!==null?k.shadowSide:S[k.side],z.alphaMap=k.alphaMap,z.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,z.map=k.map,z.clipShadows=k.clipShadows,z.clippingPlanes=k.clippingPlanes,z.clipIntersection=k.clipIntersection,z.displacementMap=k.displacementMap,z.displacementScale=k.displacementScale,z.displacementBias=k.displacementBias,z.wireframeLinewidth=k.wireframeLinewidth,z.linewidth=k.linewidth,E.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const $=s.properties.get(z);$.light=E}return z}function C(L,k,E,P,z){if(L.visible===!1)return;if(L.layers.test(k.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&z===lo)&&(!L.frustumCulled||L.intersectsFrustum(r))){L.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,L.matrixWorld);const ee=e.update(L),V=L.material;if(Array.isArray(V)){const te=ee.groups;for(let pe=0,re=te.length;pe<re;pe++){const Q=te[pe],Z=V[Q.materialIndex];if(Z&&Z.visible){const J=W(L,Z,P,z);L.onBeforeShadow(s,L,k,E,ee,J,Q),s.renderBufferDirect(E,null,ee,J,L,Q),L.onAfterShadow(s,L,k,E,ee,J,Q)}}}else if(V.visible){const te=W(L,V,P,z);L.onBeforeShadow(s,L,k,E,ee,te,null),s.renderBufferDirect(E,null,ee,te,L,null),L.onAfterShadow(s,L,k,E,ee,te,null)}}const $=L.children;for(let ee=0,V=$.length;ee<V;ee++)C($[ee],k,E,P,z)}function I(L){L.target.removeEventListener("dispose",I);for(const E in p){const P=p[E],z=L.target.uuid;z in P&&(P[z].dispose(),delete P[z])}}}function r1(s,e){function t(){let G=!1;const Le=new hn;let ve=null;const Fe=new hn(0,0,0,0);return{setMask:function(Be){ve!==Be&&!G&&(s.colorMask(Be,Be,Be,Be),ve=Be)},setLocked:function(Be){G=Be},setClear:function(Be,Se,rt,Je,Dt){Dt===!0&&(Be*=Je,Se*=Je,rt*=Je),Le.set(Be,Se,rt,Je),Fe.equals(Le)===!1&&(s.clearColor(Be,Se,rt,Je),Fe.copy(Le))},reset:function(){G=!1,ve=null,Fe.set(-1,0,0,0)}}}function r(){let G=!1,Le=!1,ve=null,Fe=null,Be=null;return{setReversed:function(Se){if(Le!==Se){const rt=e.get("EXT_clip_control");Se?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT),Le=Se;const Je=Be;Be=null,this.setClear(Je)}},getReversed:function(){return Le},setTest:function(Se){Se?he(s.DEPTH_TEST):be(s.DEPTH_TEST)},setMask:function(Se){ve!==Se&&!G&&(s.depthMask(Se),ve=Se)},setFunc:function(Se){if(Le&&(Se=N_[Se]),Fe!==Se){switch(Se){case Pd:s.depthFunc(s.NEVER);break;case Ld:s.depthFunc(s.ALWAYS);break;case Nd:s.depthFunc(s.LESS);break;case ho:s.depthFunc(s.LEQUAL);break;case Id:s.depthFunc(s.EQUAL);break;case Dd:s.depthFunc(s.GEQUAL);break;case Ud:s.depthFunc(s.GREATER);break;case Fd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Fe=Se}},setLocked:function(Se){G=Se},setClear:function(Se){Be!==Se&&(Be=Se,Le&&(Se=1-Se),s.clearDepth(Se))},reset:function(){G=!1,ve=null,Fe=null,Be=null,Le=!1}}}function o(){let G=!1,Le=null,ve=null,Fe=null,Be=null,Se=null,rt=null,Je=null,Dt=null;return{setTest:function(Ut){G||(Ut?he(s.STENCIL_TEST):be(s.STENCIL_TEST))},setMask:function(Ut){Le!==Ut&&!G&&(s.stencilMask(Ut),Le=Ut)},setFunc:function(Ut,vn,Dn){(ve!==Ut||Fe!==vn||Be!==Dn)&&(s.stencilFunc(Ut,vn,Dn),ve=Ut,Fe=vn,Be=Dn)},setOp:function(Ut,vn,Dn){(Se!==Ut||rt!==vn||Je!==Dn)&&(s.stencilOp(Ut,vn,Dn),Se=Ut,rt=vn,Je=Dn)},setLocked:function(Ut){G=Ut},setClear:function(Ut){Dt!==Ut&&(s.clearStencil(Ut),Dt=Ut)},reset:function(){G=!1,Le=null,ve=null,Fe=null,Be=null,Se=null,rt=null,Je=null,Dt=null}}}const l=new t,u=new r,f=new o,h=new WeakMap,p=new WeakMap;let v={},S={},g={},M=new WeakMap,w=[],R=null,x=!1,_=null,N=null,W=null,C=null,I=null,L=null,k=null,E=new Ft(0,0,0),P=0,z=!1,j=null,$=null,ee=null,V=null,te=null;const pe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,Q=0;const Z=s.getParameter(s.VERSION);Z.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(Z)[1]),re=Q>=1):Z.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),re=Q>=2);let J=null,D={};const le=s.getParameter(s.SCISSOR_BOX),Ee=s.getParameter(s.VIEWPORT),Ze=new hn().fromArray(le),Xe=new hn().fromArray(Ee);function qe(G,Le,ve,Fe){const Be=new Uint8Array(4),Se=s.createTexture();s.bindTexture(G,Se),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<ve;rt++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,Fe,0,s.RGBA,s.UNSIGNED_BYTE,Be):s.texImage2D(Le+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Be);return Se}const oe={};oe[s.TEXTURE_2D]=qe(s.TEXTURE_2D,s.TEXTURE_2D,1),oe[s.TEXTURE_CUBE_MAP]=qe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[s.TEXTURE_2D_ARRAY]=qe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),oe[s.TEXTURE_3D]=qe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),he(s.DEPTH_TEST),u.setFunc(ho),xt(!1),St(mm),he(s.CULL_FACE),Rt(wr);function he(G){v[G]!==!0&&(s.enable(G),v[G]=!0)}function be(G){v[G]!==!1&&(s.disable(G),v[G]=!1)}function Qe(G,Le){return g[G]!==Le?(s.bindFramebuffer(G,Le),g[G]=Le,G===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Le),G===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ge(G,Le){let ve=w,Fe=!1;if(G){ve=M.get(Le),ve===void 0&&(ve=[],M.set(Le,ve));const Be=G.textures;if(ve.length!==Be.length||ve[0]!==s.COLOR_ATTACHMENT0){for(let Se=0,rt=Be.length;Se<rt;Se++)ve[Se]=s.COLOR_ATTACHMENT0+Se;ve.length=Be.length,Fe=!0}}else ve[0]!==s.BACK&&(ve[0]=s.BACK,Fe=!0);Fe&&s.drawBuffers(ve)}function dt(G){return R!==G?(s.useProgram(G),R=G,!0):!1}const pt={[ha]:s.FUNC_ADD,[Qv]:s.FUNC_SUBTRACT,[e_]:s.FUNC_REVERSE_SUBTRACT};pt[t_]=s.MIN,pt[n_]=s.MAX;const ft={[i_]:s.ZERO,[r_]:s.ONE,[s_]:s.SRC_COLOR,[xg]:s.SRC_ALPHA,[d_]:s.SRC_ALPHA_SATURATE,[c_]:s.DST_COLOR,[o_]:s.DST_ALPHA,[a_]:s.ONE_MINUS_SRC_COLOR,[Sg]:s.ONE_MINUS_SRC_ALPHA,[u_]:s.ONE_MINUS_DST_COLOR,[l_]:s.ONE_MINUS_DST_ALPHA,[f_]:s.CONSTANT_COLOR,[h_]:s.ONE_MINUS_CONSTANT_COLOR,[p_]:s.CONSTANT_ALPHA,[m_]:s.ONE_MINUS_CONSTANT_ALPHA};function Rt(G,Le,ve,Fe,Be,Se,rt,Je,Dt,Ut){if(G===wr){x===!0&&(be(s.BLEND),x=!1);return}if(x===!1&&(he(s.BLEND),x=!0),G!==Jv){if(G!==_||Ut!==z){if((N!==ha||I!==ha)&&(s.blendEquation(s.FUNC_ADD),N=ha,I=ha),Ut)switch(G){case uo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qi:s.blendFunc(s.ONE,s.ONE);break;case gm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:$t("WebGLState: Invalid blending: ",G);break}else switch(G){case uo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case gm:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vm:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",G);break}W=null,C=null,L=null,k=null,E.set(0,0,0),P=0,_=G,z=Ut}return}Be=Be||Le,Se=Se||ve,rt=rt||Fe,(Le!==N||Be!==I)&&(s.blendEquationSeparate(pt[Le],pt[Be]),N=Le,I=Be),(ve!==W||Fe!==C||Se!==L||rt!==k)&&(s.blendFuncSeparate(ft[ve],ft[Fe],ft[Se],ft[rt]),W=ve,C=Fe,L=Se,k=rt),(Je.equals(E)===!1||Dt!==P)&&(s.blendColor(Je.r,Je.g,Je.b,Dt),E.copy(Je),P=Dt),_=G,z=!1}function Lt(G,Le){G.side===tr?be(s.CULL_FACE):he(s.CULL_FACE);let ve=G.side===si;Le&&(ve=!ve),xt(ve),G.blending===uo&&G.transparent===!1?Rt(wr):Rt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),l.setMask(G.colorWrite);const Fe=G.stencilWrite;f.setTest(Fe),Fe&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),tn(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):be(s.SAMPLE_ALPHA_TO_COVERAGE)}function xt(G){j!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),j=G)}function St(G){G!==Kv?(he(s.CULL_FACE),G!==$&&(G===mm?s.cullFace(s.BACK):G===$v?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):be(s.CULL_FACE),$=G}function Yt(G){G!==ee&&(re&&s.lineWidth(G),ee=G)}function tn(G,Le,ve){G?(he(s.POLYGON_OFFSET_FILL),(V!==Le||te!==ve)&&(V=Le,te=ve,u.getReversed()&&(Le=-Le),s.polygonOffset(Le,ve))):be(s.POLYGON_OFFSET_FILL)}function It(G){G?he(s.SCISSOR_TEST):be(s.SCISSOR_TEST)}function mt(G){G===void 0&&(G=s.TEXTURE0+pe-1),J!==G&&(s.activeTexture(G),J=G)}function q(G,Le,ve){ve===void 0&&(J===null?ve=s.TEXTURE0+pe-1:ve=J);let Fe=D[ve];Fe===void 0&&(Fe={type:void 0,texture:void 0},D[ve]=Fe),(Fe.type!==G||Fe.texture!==Le)&&(J!==ve&&(s.activeTexture(ve),J=ve),s.bindTexture(G,Le||oe[G]),Fe.type=G,Fe.texture=Le)}function jt(){const G=D[J];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Oe(){try{s.compressedTexImage2D(...arguments)}catch(G){$t("WebGLState:",G)}}function b(){try{s.compressedTexImage3D(...arguments)}catch(G){$t("WebGLState:",G)}}function y(){try{s.texSubImage2D(...arguments)}catch(G){$t("WebGLState:",G)}}function O(){try{s.texSubImage3D(...arguments)}catch(G){$t("WebGLState:",G)}}function se(){try{s.compressedTexSubImage2D(...arguments)}catch(G){$t("WebGLState:",G)}}function de(){try{s.compressedTexSubImage3D(...arguments)}catch(G){$t("WebGLState:",G)}}function Te(){try{s.texStorage2D(...arguments)}catch(G){$t("WebGLState:",G)}}function Ne(){try{s.texStorage3D(...arguments)}catch(G){$t("WebGLState:",G)}}function ge(){try{s.texImage2D(...arguments)}catch(G){$t("WebGLState:",G)}}function _e(){try{s.texImage3D(...arguments)}catch(G){$t("WebGLState:",G)}}function De(G){return S[G]!==void 0?S[G]:s.getParameter(G)}function $e(G,Le){S[G]!==Le&&(s.pixelStorei(G,Le),S[G]=Le)}function Ue(G){Ze.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Ze.copy(G))}function Re(G){Xe.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Xe.copy(G))}function Ye(G,Le){let ve=p.get(Le);ve===void 0&&(ve=new WeakMap,p.set(Le,ve));let Fe=ve.get(G);Fe===void 0&&(Fe=s.getUniformBlockIndex(Le,G.name),ve.set(G,Fe))}function tt(G,Le){const Fe=p.get(Le).get(G);h.get(Le)!==Fe&&(s.uniformBlockBinding(Le,Fe,G.__bindingPointIndex),h.set(Le,Fe))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},S={},J=null,D={},g={},M=new WeakMap,w=[],R=null,x=!1,_=null,N=null,W=null,C=null,I=null,L=null,k=null,E=new Ft(0,0,0),P=0,z=!1,j=null,$=null,ee=null,V=null,te=null,Ze.set(0,0,s.canvas.width,s.canvas.height),Xe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:he,disable:be,bindFramebuffer:Qe,drawBuffers:Ge,useProgram:dt,setBlending:Rt,setMaterial:Lt,setFlipSided:xt,setCullFace:St,setLineWidth:Yt,setPolygonOffset:tn,setScissorTest:It,activeTexture:mt,bindTexture:q,unbindTexture:jt,compressedTexImage2D:Oe,compressedTexImage3D:b,texImage2D:ge,texImage3D:_e,pixelStorei:$e,getParameter:De,updateUBOMapping:Ye,uniformBlockBinding:tt,texStorage2D:Te,texStorage3D:Ne,texSubImage2D:y,texSubImage3D:O,compressedTexSubImage2D:se,compressedTexSubImage3D:de,scissor:Ue,viewport:Re,reset:ht}}function s1(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ht,v=new WeakMap,S=new Set;let g;const M=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(b,y){return w?new OffscreenCanvas(b,y):sc("canvas")}function x(b,y,O){let se=1;const de=Oe(b);if((de.width>O||de.height>O)&&(se=O/Math.max(de.width,de.height)),se<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Te=Math.floor(se*de.width),Ne=Math.floor(se*de.height);g===void 0&&(g=R(Te,Ne));const ge=y?R(Te,Ne):g;return ge.width=Te,ge.height=Ne,ge.getContext("2d").drawImage(b,0,0,Te,Ne),Et("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+Te+"x"+Ne+")."),ge}else return"data"in b&&Et("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),b;return b}function _(b){return b.generateMipmaps}function N(b){s.generateMipmap(b)}function W(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(b,y,O,se,de,Te=!1){if(b!==null){if(s[b]!==void 0)return s[b];Et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Ne;se&&(Ne=e.get("EXT_texture_norm16"),Ne||Et("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=y;if(y===s.RED&&(O===s.FLOAT&&(ge=s.R32F),O===s.HALF_FLOAT&&(ge=s.R16F),O===s.UNSIGNED_BYTE&&(ge=s.R8),O===s.UNSIGNED_SHORT&&Ne&&(ge=Ne.R16_EXT),O===s.SHORT&&Ne&&(ge=Ne.R16_SNORM_EXT)),y===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(ge=s.R8UI),O===s.UNSIGNED_SHORT&&(ge=s.R16UI),O===s.UNSIGNED_INT&&(ge=s.R32UI),O===s.BYTE&&(ge=s.R8I),O===s.SHORT&&(ge=s.R16I),O===s.INT&&(ge=s.R32I)),y===s.RG&&(O===s.FLOAT&&(ge=s.RG32F),O===s.HALF_FLOAT&&(ge=s.RG16F),O===s.UNSIGNED_BYTE&&(ge=s.RG8),O===s.UNSIGNED_SHORT&&Ne&&(ge=Ne.RG16_EXT),O===s.SHORT&&Ne&&(ge=Ne.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(ge=s.RG8UI),O===s.UNSIGNED_SHORT&&(ge=s.RG16UI),O===s.UNSIGNED_INT&&(ge=s.RG32UI),O===s.BYTE&&(ge=s.RG8I),O===s.SHORT&&(ge=s.RG16I),O===s.INT&&(ge=s.RG32I)),y===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(ge=s.RGB8UI),O===s.UNSIGNED_SHORT&&(ge=s.RGB16UI),O===s.UNSIGNED_INT&&(ge=s.RGB32UI),O===s.BYTE&&(ge=s.RGB8I),O===s.SHORT&&(ge=s.RGB16I),O===s.INT&&(ge=s.RGB32I)),y===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(ge=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(ge=s.RGBA16UI),O===s.UNSIGNED_INT&&(ge=s.RGBA32UI),O===s.BYTE&&(ge=s.RGBA8I),O===s.SHORT&&(ge=s.RGBA16I),O===s.INT&&(ge=s.RGBA32I)),y===s.RGB&&(O===s.UNSIGNED_SHORT&&Ne&&(ge=Ne.RGB16_EXT),O===s.SHORT&&Ne&&(ge=Ne.RGB16_SNORM_EXT),O===s.UNSIGNED_INT_5_9_9_9_REV&&(ge=s.RGB9_E5),O===s.UNSIGNED_INT_10F_11F_11F_REV&&(ge=s.R11F_G11F_B10F)),y===s.RGBA){const _e=Te?rc:Gt.getTransfer(de);O===s.FLOAT&&(ge=s.RGBA32F),O===s.HALF_FLOAT&&(ge=s.RGBA16F),O===s.UNSIGNED_BYTE&&(ge=_e===en?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT&&Ne&&(ge=Ne.RGBA16_EXT),O===s.SHORT&&Ne&&(ge=Ne.RGBA16_SNORM_EXT),O===s.UNSIGNED_SHORT_4_4_4_4&&(ge=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(ge=s.RGB5_A1)}return(ge===s.R16F||ge===s.R32F||ge===s.RG16F||ge===s.RG32F||ge===s.RGBA16F||ge===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function I(b,y){let O;return b?y===null||y===sr||y===mo?O=s.DEPTH24_STENCIL8:y===nr?O=s.DEPTH32F_STENCIL8:y===po&&(O=s.DEPTH24_STENCIL8,Et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===sr||y===mo?O=s.DEPTH_COMPONENT24:y===nr?O=s.DEPTH_COMPONENT32F:y===po&&(O=s.DEPTH_COMPONENT16),O}function L(b,y){return _(b)===!0||b.isFramebufferTexture&&b.minFilter!==On&&b.minFilter!==Xn?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function k(b){const y=b.target;y.removeEventListener("dispose",k),P(y),y.isVideoTexture&&v.delete(y),y.isHTMLTexture&&S.delete(y)}function E(b){const y=b.target;y.removeEventListener("dispose",E),j(y)}function P(b){const y=r.get(b);if(y.__webglInit===void 0)return;const O=b.source,se=M.get(O);if(se){const de=se[y.__cacheKey];de.usedTimes--,de.usedTimes===0&&z(b),Object.keys(se).length===0&&M.delete(O)}r.remove(b)}function z(b){const y=r.get(b);s.deleteTexture(y.__webglTexture);const O=b.source,se=M.get(O);delete se[y.__cacheKey],u.memory.textures--}function j(b){const y=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(y.__webglFramebuffer[se]))for(let de=0;de<y.__webglFramebuffer[se].length;de++)s.deleteFramebuffer(y.__webglFramebuffer[se][de]);else s.deleteFramebuffer(y.__webglFramebuffer[se]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[se])}else{if(Array.isArray(y.__webglFramebuffer))for(let se=0;se<y.__webglFramebuffer.length;se++)s.deleteFramebuffer(y.__webglFramebuffer[se]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let se=0;se<y.__webglColorRenderbuffer.length;se++)y.__webglColorRenderbuffer[se]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[se]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=b.textures;for(let se=0,de=O.length;se<de;se++){const Te=r.get(O[se]);Te.__webglTexture&&(s.deleteTexture(Te.__webglTexture),u.memory.textures--),r.remove(O[se])}r.remove(b)}let $=0;function ee(){$=0}function V(){return $}function te(b){$=b}function pe(){const b=$;return b>=o.maxTextures&&Et("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+o.maxTextures),$+=1,b}function re(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function Q(b,y){const O=r.get(b);if(b.isVideoTexture&&q(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){const se=b.image;if(se===null)Et("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)Et("WebGLRenderer: Texture marked for update but image is incomplete");else{be(O,b,y);return}}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+y)}function Z(b,y){const O=r.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){be(O,b,y);return}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+y)}function J(b,y){const O=r.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){be(O,b,y);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+y)}function D(b,y){const O=r.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&O.__version!==b.version){Qe(O,b,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+y)}const le={[bs]:s.REPEAT,[Er]:s.CLAMP_TO_EDGE,[Od]:s.MIRRORED_REPEAT},Ee={[On]:s.NEAREST,[__]:s.NEAREST_MIPMAP_NEAREST,[Ml]:s.NEAREST_MIPMAP_LINEAR,[Xn]:s.LINEAR,[qu]:s.LINEAR_MIPMAP_NEAREST,[Es]:s.LINEAR_MIPMAP_LINEAR},Ze={[M_]:s.NEVER,[b_]:s.ALWAYS,[E_]:s.LESS,[Cf]:s.LEQUAL,[w_]:s.EQUAL,[Pf]:s.GEQUAL,[T_]:s.GREATER,[A_]:s.NOTEQUAL};function Xe(b,y){if(y.type===nr&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Xn||y.magFilter===qu||y.magFilter===Ml||y.magFilter===Es||y.minFilter===Xn||y.minFilter===qu||y.minFilter===Ml||y.minFilter===Es)&&Et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,le[y.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,le[y.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,le[y.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,Ee[y.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,Ee[y.minFilter]),y.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,Ze[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===On||y.minFilter!==Ml&&y.minFilter!==Es||y.type===nr&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,o.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function qe(b,y){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",k));const se=y.source;let de=M.get(se);de===void 0&&(de={},M.set(se,de));const Te=re(y);if(Te!==b.__cacheKey){de[Te]===void 0&&(de[Te]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,O=!0),de[Te].usedTimes++;const Ne=de[b.__cacheKey];Ne!==void 0&&(de[b.__cacheKey].usedTimes--,Ne.usedTimes===0&&z(y)),b.__cacheKey=Te,b.__webglTexture=de[Te].texture}return O}function oe(b,y,O){return Math.floor(Math.floor(b/O)/y)}function he(b,y,O,se){const Te=b.updateRanges;if(Te.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,O,se,y.data);else{Te.sort(($e,Ue)=>$e.start-Ue.start);let Ne=0;for(let $e=1;$e<Te.length;$e++){const Ue=Te[Ne],Re=Te[$e],Ye=Ue.start+Ue.count,tt=oe(Re.start,y.width,4),ht=oe(Ue.start,y.width,4);Re.start<=Ye+1&&tt===ht&&oe(Re.start+Re.count-1,y.width,4)===tt?Ue.count=Math.max(Ue.count,Re.start+Re.count-Ue.start):(++Ne,Te[Ne]=Re)}Te.length=Ne+1;const ge=t.getParameter(s.UNPACK_ROW_LENGTH),_e=t.getParameter(s.UNPACK_SKIP_PIXELS),De=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let $e=0,Ue=Te.length;$e<Ue;$e++){const Re=Te[$e],Ye=Math.floor(Re.start/4),tt=Math.ceil(Re.count/4),ht=Ye%y.width,G=Math.floor(Ye/y.width),Le=tt,ve=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ht),t.pixelStorei(s.UNPACK_SKIP_ROWS,G),t.texSubImage2D(s.TEXTURE_2D,0,ht,G,Le,ve,O,se,y.data)}b.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,ge),t.pixelStorei(s.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(s.UNPACK_SKIP_ROWS,De)}}function be(b,y,O){let se=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(se=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(se=s.TEXTURE_3D);const de=qe(b,y),Te=y.source;t.bindTexture(se,b.__webglTexture,s.TEXTURE0+O);const Ne=r.get(Te);if(Te.version!==Ne.__version||de===!0){if(t.activeTexture(s.TEXTURE0+O),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const ve=Gt.getPrimaries(Gt.workingColorSpace),Fe=y.colorSpace===es?null:Gt.getPrimaries(y.colorSpace),Be=y.colorSpace===es||ve===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let _e=x(y.image,!1,o.maxTextureSize);_e=jt(y,_e);const De=l.convert(y.format,y.colorSpace),$e=l.convert(y.type);let Ue=C(y.internalFormat,De,$e,y.normalized,y.colorSpace,y.isVideoTexture);Xe(se,y);let Re;const Ye=y.mipmaps,tt=y.isVideoTexture!==!0,ht=Ne.__version===void 0||de===!0,G=Te.dataReady,Le=L(y,_e);if(y.isDepthTexture)Ue=I(y.format===ws,y.type),ht&&(tt?t.texStorage2D(s.TEXTURE_2D,1,Ue,_e.width,_e.height):t.texImage2D(s.TEXTURE_2D,0,Ue,_e.width,_e.height,0,De,$e,null));else if(y.isDataTexture)if(Ye.length>0){tt&&ht&&t.texStorage2D(s.TEXTURE_2D,Le,Ue,Ye[0].width,Ye[0].height);for(let ve=0,Fe=Ye.length;ve<Fe;ve++)Re=Ye[ve],tt?G&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,Re.width,Re.height,De,$e,Re.data):t.texImage2D(s.TEXTURE_2D,ve,Ue,Re.width,Re.height,0,De,$e,Re.data);y.generateMipmaps=!1}else tt?(ht&&t.texStorage2D(s.TEXTURE_2D,Le,Ue,_e.width,_e.height),G&&he(y,_e,De,$e)):t.texImage2D(s.TEXTURE_2D,0,Ue,_e.width,_e.height,0,De,$e,_e.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){tt&&ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Ue,Ye[0].width,Ye[0].height,_e.depth);for(let ve=0,Fe=Ye.length;ve<Fe;ve++)if(Re=Ye[ve],y.format!==Hi)if(De!==null)if(tt){if(G)if(y.layerUpdates.size>0){const Be=Ym(Re.width,Re.height,y.format,y.type);for(const Se of y.layerUpdates){const rt=Re.data.subarray(Se*Be/Re.data.BYTES_PER_ELEMENT,(Se+1)*Be/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,Se,Re.width,Re.height,1,De,rt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,Re.width,Re.height,_e.depth,De,Re.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ve,Ue,Re.width,Re.height,_e.depth,0,Re.data,0,0);else Et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?G&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ve,0,0,0,Re.width,Re.height,_e.depth,De,$e,Re.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ve,Ue,Re.width,Re.height,_e.depth,0,De,$e,Re.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{tt&&ht&&t.texStorage2D(s.TEXTURE_2D,Le,Ue,Ye[0].width,Ye[0].height);for(let ve=0,Fe=Ye.length;ve<Fe;ve++)Re=Ye[ve],y.format!==Hi?De!==null?tt?G&&t.compressedTexSubImage2D(s.TEXTURE_2D,ve,0,0,Re.width,Re.height,De,Re.data):t.compressedTexImage2D(s.TEXTURE_2D,ve,Ue,Re.width,Re.height,0,Re.data):Et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?G&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,Re.width,Re.height,De,$e,Re.data):t.texImage2D(s.TEXTURE_2D,ve,Ue,Re.width,Re.height,0,De,$e,Re.data)}else if(y.isDataArrayTexture)if(tt){if(ht&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Ue,_e.width,_e.height,_e.depth),G)if(y.layerUpdates.size>0){const ve=Ym(_e.width,_e.height,y.format,y.type);for(const Fe of y.layerUpdates){const Be=_e.data.subarray(Fe*ve/_e.data.BYTES_PER_ELEMENT,(Fe+1)*ve/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Fe,_e.width,_e.height,1,De,$e,Be)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,De,$e,_e.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ue,_e.width,_e.height,_e.depth,0,De,$e,_e.data);else if(y.isData3DTexture)tt?(ht&&t.texStorage3D(s.TEXTURE_3D,Le,Ue,_e.width,_e.height,_e.depth),G&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,De,$e,_e.data)):t.texImage3D(s.TEXTURE_3D,0,Ue,_e.width,_e.height,_e.depth,0,De,$e,_e.data);else if(y.isFramebufferTexture){if(ht)if(tt)t.texStorage2D(s.TEXTURE_2D,Le,Ue,_e.width,_e.height);else{let ve=_e.width,Fe=_e.height;for(let Be=0;Be<Le;Be++)t.texImage2D(s.TEXTURE_2D,Be,Ue,ve,Fe,0,De,$e,null),ve>>=1,Fe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){const ve=s.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),_e.parentNode!==ve){ve.appendChild(_e),S.add(y),ve.onpaint=Fe=>{const Be=Fe.changedElements;for(const Se of S)Be.includes(Se.image)&&(Se.needsUpdate=!0)},ve.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,_e);else{const Be=s.RGBA,Se=s.RGBA,rt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Be,Se,rt,_e)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ye.length>0){if(tt&&ht){const ve=Oe(Ye[0]);t.texStorage2D(s.TEXTURE_2D,Le,Ue,ve.width,ve.height)}for(let ve=0,Fe=Ye.length;ve<Fe;ve++)Re=Ye[ve],tt?G&&t.texSubImage2D(s.TEXTURE_2D,ve,0,0,De,$e,Re):t.texImage2D(s.TEXTURE_2D,ve,Ue,De,$e,Re);y.generateMipmaps=!1}else if(tt){if(ht){const ve=Oe(_e);t.texStorage2D(s.TEXTURE_2D,Le,Ue,ve.width,ve.height)}G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,De,$e,_e)}else t.texImage2D(s.TEXTURE_2D,0,Ue,De,$e,_e);_(y)&&N(se),Ne.__version=Te.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function Qe(b,y,O){if(y.image.length!==6)return;const se=qe(b,y),de=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+O);const Te=r.get(de);if(de.version!==Te.__version||se===!0){t.activeTexture(s.TEXTURE0+O);const Ne=Gt.getPrimaries(Gt.workingColorSpace),ge=y.colorSpace===es?null:Gt.getPrimaries(y.colorSpace),_e=y.colorSpace===es||Ne===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const De=y.isCompressedTexture||y.image[0].isCompressedTexture,$e=y.image[0]&&y.image[0].isDataTexture,Ue=[];for(let Se=0;Se<6;Se++)!De&&!$e?Ue[Se]=x(y.image[Se],!0,o.maxCubemapSize):Ue[Se]=$e?y.image[Se].image:y.image[Se],Ue[Se]=jt(y,Ue[Se]);const Re=Ue[0],Ye=l.convert(y.format,y.colorSpace),tt=l.convert(y.type),ht=C(y.internalFormat,Ye,tt,y.normalized,y.colorSpace),G=y.isVideoTexture!==!0,Le=Te.__version===void 0||se===!0,ve=de.dataReady;let Fe=L(y,Re);Xe(s.TEXTURE_CUBE_MAP,y);let Be;if(De){G&&Le&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,ht,Re.width,Re.height);for(let Se=0;Se<6;Se++){Be=Ue[Se].mipmaps;for(let rt=0;rt<Be.length;rt++){const Je=Be[rt];y.format!==Hi?Ye!==null?G?ve&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,rt,0,0,Je.width,Je.height,Ye,Je.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,rt,ht,Je.width,Je.height,0,Je.data):Et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,rt,0,0,Je.width,Je.height,Ye,tt,Je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,rt,ht,Je.width,Je.height,0,Ye,tt,Je.data)}}}else{if(Be=y.mipmaps,G&&Le){Be.length>0&&Fe++;const Se=Oe(Ue[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,ht,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if($e){G?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ue[Se].width,Ue[Se].height,Ye,tt,Ue[Se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ht,Ue[Se].width,Ue[Se].height,0,Ye,tt,Ue[Se].data);for(let rt=0;rt<Be.length;rt++){const Dt=Be[rt].image[Se].image;G?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,rt+1,0,0,Dt.width,Dt.height,Ye,tt,Dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,rt+1,ht,Dt.width,Dt.height,0,Ye,tt,Dt.data)}}else{G?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ye,tt,Ue[Se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ht,Ye,tt,Ue[Se]);for(let rt=0;rt<Be.length;rt++){const Je=Be[rt];G?ve&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,rt+1,0,0,Ye,tt,Je.image[Se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Se,rt+1,ht,Ye,tt,Je.image[Se])}}}_(y)&&N(s.TEXTURE_CUBE_MAP),Te.__version=de.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function Ge(b,y,O,se,de,Te){const Ne=l.convert(O.format,O.colorSpace),ge=l.convert(O.type),_e=C(O.internalFormat,Ne,ge,O.normalized,O.colorSpace),De=r.get(y),$e=r.get(O);if($e.__renderTarget=y,!De.__hasExternalTextures){const Ue=Math.max(1,y.width>>Te),Re=Math.max(1,y.height>>Te);de===s.TEXTURE_3D||de===s.TEXTURE_2D_ARRAY?t.texImage3D(de,Te,_e,Ue,Re,y.depth,0,Ne,ge,null):t.texImage2D(de,Te,_e,Ue,Re,0,Ne,ge,null)}t.bindFramebuffer(s.FRAMEBUFFER,b),mt(y)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,de,$e.__webglTexture,0,It(y)):(de===s.TEXTURE_2D||de>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,se,de,$e.__webglTexture,Te),t.bindFramebuffer(s.FRAMEBUFFER,null)}function dt(b,y,O){if(s.bindRenderbuffer(s.RENDERBUFFER,b),y.depthBuffer){const se=y.depthTexture,de=se&&se.isDepthTexture?se.type:null,Te=I(y.stencilBuffer,de),Ne=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;mt(y)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,It(y),Te,y.width,y.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,It(y),Te,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Te,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ne,s.RENDERBUFFER,b)}else{const se=y.textures;for(let de=0;de<se.length;de++){const Te=se[de],Ne=l.convert(Te.format,Te.colorSpace),ge=l.convert(Te.type),_e=C(Te.internalFormat,Ne,ge,Te.normalized,Te.colorSpace);mt(y)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,It(y),_e,y.width,y.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,It(y),_e,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,_e,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pt(b,y,O){const se=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=r.get(y.depthTexture);if(de.__renderTarget=y,(!de.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),se){if(de.__webglInit===void 0&&(de.__webglInit=!0,y.depthTexture.addEventListener("dispose",k)),de.__webglTexture===void 0){de.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),Xe(s.TEXTURE_CUBE_MAP,y.depthTexture);const De=l.convert(y.depthTexture.format),$e=l.convert(y.depthTexture.type);let Ue;y.depthTexture.format===Ar?Ue=s.DEPTH_COMPONENT24:y.depthTexture.format===ws&&(Ue=s.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Ue,y.width,y.height,0,De,$e,null)}}else Q(y.depthTexture,0);const Te=de.__webglTexture,Ne=It(y),ge=se?s.TEXTURE_CUBE_MAP_POSITIVE_X+O:s.TEXTURE_2D,_e=y.depthTexture.format===ws?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ar)mt(y)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,ge,Te,0,Ne):s.framebufferTexture2D(s.FRAMEBUFFER,_e,ge,Te,0);else if(y.depthTexture.format===ws)mt(y)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,ge,Te,0,Ne):s.framebufferTexture2D(s.FRAMEBUFFER,_e,ge,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ft(b){const y=r.get(b),O=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){const se=b.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),se){const de=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,se.removeEventListener("dispose",de)};se.addEventListener("dispose",de),y.__depthDisposeCallback=de}y.__boundDepthTexture=se}if(b.depthTexture&&!y.__autoAllocateDepthBuffer)if(O)for(let se=0;se<6;se++)pt(y.__webglFramebuffer[se],b,se);else{const se=b.texture.mipmaps;se&&se.length>0?pt(y.__webglFramebuffer[0],b,0):pt(y.__webglFramebuffer,b,0)}else if(O){y.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[se]),y.__webglDepthbuffer[se]===void 0)y.__webglDepthbuffer[se]=s.createRenderbuffer(),dt(y.__webglDepthbuffer[se],b,!1);else{const de=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=y.__webglDepthbuffer[se];s.bindRenderbuffer(s.RENDERBUFFER,Te),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,Te)}}else{const se=b.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),dt(y.__webglDepthbuffer,b,!1);else{const de=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Te=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Te),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,Te)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Rt(b,y,O){const se=r.get(b);y!==void 0&&Ge(se.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&ft(b)}function Lt(b){const y=b.texture,O=r.get(b),se=r.get(y);b.addEventListener("dispose",E);const de=b.textures,Te=b.isWebGLCubeRenderTarget===!0,Ne=de.length>1;if(Ne||(se.__webglTexture===void 0&&(se.__webglTexture=s.createTexture()),se.__version=y.version,u.memory.textures++),Te){O.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[ge]=[];for(let _e=0;_e<y.mipmaps.length;_e++)O.__webglFramebuffer[ge][_e]=s.createFramebuffer()}else O.__webglFramebuffer[ge]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let ge=0;ge<y.mipmaps.length;ge++)O.__webglFramebuffer[ge]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Ne)for(let ge=0,_e=de.length;ge<_e;ge++){const De=r.get(de[ge]);De.__webglTexture===void 0&&(De.__webglTexture=s.createTexture(),u.memory.textures++)}if(b.samples>0&&mt(b)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ge=0;ge<de.length;ge++){const _e=de[ge];O.__webglColorRenderbuffer[ge]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[ge]);const De=l.convert(_e.format,_e.colorSpace),$e=l.convert(_e.type),Ue=C(_e.internalFormat,De,$e,_e.normalized,_e.colorSpace,b.isXRRenderTarget===!0),Re=It(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,Ue,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,O.__webglColorRenderbuffer[ge])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),dt(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Te){t.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture),Xe(s.TEXTURE_CUBE_MAP,y);for(let ge=0;ge<6;ge++)if(y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)Ge(O.__webglFramebuffer[ge][_e],b,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,_e);else Ge(O.__webglFramebuffer[ge],b,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);_(y)&&N(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ne){for(let ge=0,_e=de.length;ge<_e;ge++){const De=de[ge],$e=r.get(De);let Ue=s.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Ue=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ue,$e.__webglTexture),Xe(Ue,De),Ge(O.__webglFramebuffer,b,De,s.COLOR_ATTACHMENT0+ge,Ue,0),_(De)&&N(Ue)}t.unbindTexture()}else{let ge=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ge=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ge,se.__webglTexture),Xe(ge,y),y.mipmaps&&y.mipmaps.length>0)for(let _e=0;_e<y.mipmaps.length;_e++)Ge(O.__webglFramebuffer[_e],b,y,s.COLOR_ATTACHMENT0,ge,_e);else Ge(O.__webglFramebuffer,b,y,s.COLOR_ATTACHMENT0,ge,0);_(y)&&N(ge),t.unbindTexture()}b.depthBuffer&&ft(b)}function xt(b){const y=b.textures;for(let O=0,se=y.length;O<se;O++){const de=y[O];if(_(de)){const Te=W(b),Ne=r.get(de).__webglTexture;t.bindTexture(Te,Ne),N(Te),t.unbindTexture()}}}const St=[],Yt=[];function tn(b){if(b.samples>0){if(mt(b)===!1){const y=b.textures,O=b.width,se=b.height;let de=s.COLOR_BUFFER_BIT;const Te=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=r.get(b),ge=y.length>1;if(ge)for(let De=0;De<y.length;De++)t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer);const _e=b.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let De=0;De<y.length;De++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(de|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(de|=s.STENCIL_BUFFER_BIT)),ge){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[De]);const $e=r.get(y[De]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,$e,0)}s.blitFramebuffer(0,0,O,se,0,0,O,se,de,s.NEAREST),h===!0&&(St.length=0,Yt.length=0,St.push(s.COLOR_ATTACHMENT0+De),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&(St.push(Te),Yt.push(Te),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Yt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,St))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ge)for(let De=0;De<y.length;De++){t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[De]);const $e=r.get(y[De]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,$e,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&h){const y=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function It(b){return Math.min(o.maxSamples,b.samples)}function mt(b){const y=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function q(b){const y=u.render.frame;v.get(b)!==y&&(v.set(b,y),b.update())}function jt(b,y){const O=b.colorSpace,se=b.format,de=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==ic&&O!==es&&(Gt.getTransfer(O)===en?(se!==Hi||de!==pi)&&Et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",O)),y}function Oe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(p.width=b.naturalWidth||b.width,p.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(p.width=b.displayWidth,p.height=b.displayHeight):(p.width=b.width,p.height=b.height),p}this.allocateTextureUnit=pe,this.resetTextureUnits=ee,this.getTextureUnits=V,this.setTextureUnits=te,this.setTexture2D=Q,this.setTexture2DArray=Z,this.setTexture3D=J,this.setTextureCube=D,this.rebindTextures=Rt,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function a1(s,e){function t(r,o=es){let l;const u=Gt.getTransfer(o);if(r===pi)return s.UNSIGNED_BYTE;if(r===wf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Tf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Lg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Ng)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Cg)return s.BYTE;if(r===Pg)return s.SHORT;if(r===po)return s.UNSIGNED_SHORT;if(r===Ef)return s.INT;if(r===sr)return s.UNSIGNED_INT;if(r===nr)return s.FLOAT;if(r===ar)return s.HALF_FLOAT;if(r===Ig)return s.ALPHA;if(r===Dg)return s.RGB;if(r===Hi)return s.RGBA;if(r===Ar)return s.DEPTH_COMPONENT;if(r===ws)return s.DEPTH_STENCIL;if(r===Ug)return s.RED;if(r===Af)return s.RED_INTEGER;if(r===Rs)return s.RG;if(r===bf)return s.RG_INTEGER;if(r===Rf)return s.RGBA_INTEGER;if(r===Kl||r===$l||r===Zl||r===Jl)if(u===en)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Kl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===$l)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Kl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===$l)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Zl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Jl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Bd||r===kd||r===zd||r===Gd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Bd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===kd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vd||r===Hd||r===Wd||r===Xd||r===Yd||r===tc||r===jd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Vd||r===Hd)return u===en?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Wd)return u===en?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Xd)return l.COMPRESSED_R11_EAC;if(r===Yd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===tc)return l.COMPRESSED_RG11_EAC;if(r===jd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===qd||r===Kd||r===$d||r===Zd||r===Jd||r===Qd||r===ef||r===tf||r===nf||r===rf||r===sf||r===af||r===of||r===lf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===qd)return u===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Kd)return u===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===$d)return u===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Zd)return u===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Jd)return u===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Qd)return u===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ef)return u===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===tf)return u===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===nf)return u===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===rf)return u===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===sf)return u===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===af)return u===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===of)return u===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===lf)return u===en?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===cf||r===uf||r===df)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===cf)return u===en?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===uf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===df)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ff||r===hf||r===nc||r===pf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===ff)return l.COMPRESSED_RED_RGTC1_EXT;if(r===hf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===nc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===pf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===mo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const o1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l1=`
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

}`;class c1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Xg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Yi({vertexShader:o1,fragmentShader:l1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yt(new _a(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class u1 extends Cs{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",h=1,p=null,v=null,S=null,g=null,M=null,w=null;const R=typeof XRWebGLBinding<"u",x=new c1,_={},N=t.getContextAttributes();let W=null,C=null;const I=[],L=[],k=new Ht;let E=null,P=null;const z=new hi;z.viewport=new hn;const j=new hi;j.viewport=new hn;const $=[z,j],ee=new _x;let V=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let he=I[oe];return he===void 0&&(he=new id,I[oe]=he),he.getTargetRaySpace()},this.getControllerGrip=function(oe){let he=I[oe];return he===void 0&&(he=new id,I[oe]=he),he.getGripSpace()},this.getHand=function(oe){let he=I[oe];return he===void 0&&(he=new id,I[oe]=he),he.getHandSpace()};function pe(oe){const he=L.indexOf(oe.inputSource);if(he===-1)return;const be=I[he];be!==void 0&&(be.update(oe.inputSource,oe.frame,p||u),be.dispatchEvent({type:oe.type,data:oe.inputSource}))}function re(){o.removeEventListener("select",pe),o.removeEventListener("selectstart",pe),o.removeEventListener("selectend",pe),o.removeEventListener("squeeze",pe),o.removeEventListener("squeezestart",pe),o.removeEventListener("squeezeend",pe),o.removeEventListener("end",re),o.removeEventListener("inputsourceschange",Q);for(let oe=0;oe<I.length;oe++){const he=L[oe];he!==null&&(L[oe]=null,I[oe].disconnect(he))}V=null,te=null,x.reset();for(const oe in _)delete _[oe];if(e.setRenderTarget(W),M=null,g=null,S=null,o=null,C=null,qe.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(k.width,k.height,!1),P!==null){const oe=P.camera;oe.fov=P.fov,oe.zoom=P.zoom,oe.updateProjectionMatrix(),P=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){l=oe,r.isPresenting===!0&&Et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){f=oe,r.isPresenting===!0&&Et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(oe){p=oe},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return S===null&&R&&(S=new XRWebGLBinding(o,t)),S},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(oe){if(o=oe,o!==null){if(W=e.getRenderTarget(),o.addEventListener("select",pe),o.addEventListener("selectstart",pe),o.addEventListener("selectend",pe),o.addEventListener("squeeze",pe),o.addEventListener("squeezestart",pe),o.addEventListener("squeezeend",pe),o.addEventListener("end",re),o.addEventListener("inputsourceschange",Q),N.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(k),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Qe=null,Ge=null;N.depth&&(Ge=N.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,be=N.stencil?ws:Ar,Qe=N.stencil?mo:sr);const dt={colorFormat:t.RGBA8,depthFormat:Ge,scaleFactor:l};S=this.getBinding(),g=S.createProjectionLayer(dt),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),C=new Wi(g.textureWidth,g.textureHeight,{format:Hi,type:pi,depthTexture:new vo(g.textureWidth,g.textureHeight,Qe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}else{const be={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,be),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),C=new Wi(M.framebufferWidth,M.framebufferHeight,{format:Hi,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(f),qe.setContext(o),qe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Q(oe){for(let he=0;he<oe.removed.length;he++){const be=oe.removed[he],Qe=L.indexOf(be);Qe>=0&&(L[Qe]=null,I[Qe].disconnect(be))}for(let he=0;he<oe.added.length;he++){const be=oe.added[he];let Qe=L.indexOf(be);if(Qe===-1){for(let dt=0;dt<I.length;dt++)if(dt>=L.length){L.push(be),Qe=dt;break}else if(L[dt]===null){L[dt]=be,Qe=dt;break}if(Qe===-1)break}const Ge=I[Qe];Ge&&Ge.connect(be)}}const Z=new ae,J=new ae;function D(oe,he,be){Z.setFromMatrixPosition(he.matrixWorld),J.setFromMatrixPosition(be.matrixWorld);const Qe=Z.distanceTo(J),Ge=he.projectionMatrix.elements,dt=be.projectionMatrix.elements,pt=Ge[14]/(Ge[10]-1),ft=Ge[14]/(Ge[10]+1),Rt=(Ge[9]+1)/Ge[5],Lt=(Ge[9]-1)/Ge[5],xt=(Ge[8]-1)/Ge[0],St=(dt[8]+1)/dt[0],Yt=pt*xt,tn=pt*St,It=Qe/(-xt+St),mt=It*-xt;if(he.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(mt),oe.translateZ(It),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Ge[10]===-1)oe.projectionMatrix.copy(he.projectionMatrix),oe.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const q=pt+It,jt=ft+It,Oe=Yt-mt,b=tn+(Qe-mt),y=Rt*ft/jt*q,O=Lt*ft/jt*q;oe.projectionMatrix.makePerspective(Oe,b,y,O,q,jt),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function le(oe,he){he===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(he.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(o===null)return;let he=oe.near,be=oe.far;x.texture!==null&&(x.depthNear>0&&(he=x.depthNear),x.depthFar>0&&(be=x.depthFar)),ee.near=j.near=z.near=he,ee.far=j.far=z.far=be,(V!==ee.near||te!==ee.far)&&(o.updateRenderState({depthNear:ee.near,depthFar:ee.far}),V=ee.near,te=ee.far),ee.layers.mask=oe.layers.mask|6,z.layers.mask=ee.layers.mask&-5,j.layers.mask=ee.layers.mask&-3;const Qe=oe.parent,Ge=ee.cameras;le(ee,Qe);for(let dt=0;dt<Ge.length;dt++)le(Ge[dt],Qe);Ge.length===2?D(ee,z,j):ee.projectionMatrix.copy(z.projectionMatrix),P===null&&oe.isPerspectiveCamera&&(P={camera:oe,fov:oe.fov,zoom:oe.zoom}),Ee(oe,ee,Qe)};function Ee(oe,he,be){be===null?oe.matrix.copy(he.matrixWorld):(oe.matrix.copy(be.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(he.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(he.projectionMatrix),oe.projectionMatrixInverse.copy(he.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=gf*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(g===null&&M===null))return h},this.setFoveation=function(oe){h=oe,g!==null&&(g.fixedFoveation=oe),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=oe)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(ee)},this.getCameraTexture=function(oe){return _[oe]};let Ze=null;function Xe(oe,he){if(v=he.getViewerPose(p||u),w=he,v!==null){const be=v.views;M!==null&&(e.setRenderTargetFramebuffer(C,M.framebuffer),e.setRenderTarget(C));let Qe=!1;be.length!==ee.cameras.length&&(ee.cameras.length=0,Qe=!0);for(let ft=0;ft<be.length;ft++){const Rt=be[ft];let Lt=null;if(M!==null)Lt=M.getViewport(Rt);else{const St=S.getViewSubImage(g,Rt);Lt=St.viewport,ft===0&&(e.setRenderTargetTextures(C,St.colorTexture,St.depthStencilTexture),e.setRenderTarget(C))}let xt=$[ft];xt===void 0&&(xt=new hi,xt.layers.enable(ft),xt.viewport=new hn,$[ft]=xt),xt.matrix.fromArray(Rt.transform.matrix),xt.matrix.decompose(xt.position,xt.quaternion,xt.scale),xt.projectionMatrix.fromArray(Rt.projectionMatrix),xt.projectionMatrixInverse.copy(xt.projectionMatrix).invert(),xt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),ft===0&&(ee.matrix.copy(xt.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),Qe===!0&&ee.cameras.push(xt)}const Ge=o.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){S=r.getBinding();const ft=S.getDepthInformation(be[0]);ft&&ft.isValid&&ft.texture&&x.init(ft,o.renderState)}if(Ge&&Ge.includes("camera-access")&&R){e.state.unbindTexture(),S=r.getBinding();for(let ft=0;ft<be.length;ft++){const Rt=be[ft].camera;if(Rt){let Lt=_[Rt];Lt||(Lt=new Xg,_[Rt]=Lt);const xt=S.getCameraImage(Rt);Lt.sourceTexture=xt}}}}for(let be=0;be<I.length;be++){const Qe=L[be],Ge=I[be];Qe!==null&&Ge!==void 0&&Ge.update(Qe,he,p||u)}Ze&&Ze(oe,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),w=null}const qe=new Kg;qe.setAnimationLoop(Xe),this.setAnimationLoop=function(oe){Ze=oe},this.dispose=function(){}}}const d1=new un,n0=new At;n0.set(-1,0,0,0,1,0,0,0,1);function f1(s,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function r(x,_){_.color.getRGB(x.fogColor.value,Yg(s)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function o(x,_,N,W,C){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?l(x,_):_.isMeshLambertMaterial?(l(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(x,_),S(x,_)):_.isMeshPhongMaterial?(l(x,_),v(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(x,_),g(x,_),_.isMeshPhysicalMaterial&&M(x,_,C)):_.isMeshMatcapMaterial?(l(x,_),w(x,_)):_.isMeshDepthMaterial?l(x,_):_.isMeshDistanceMaterial?(l(x,_),R(x,_)):_.isMeshNormalMaterial?l(x,_):_.isLineBasicMaterial?(u(x,_),_.isLineDashedMaterial&&f(x,_)):_.isPointsMaterial?h(x,_,N,W):_.isSpriteMaterial?p(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===si&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===si&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const N=e.get(_),W=N.envMap,C=N.envMapRotation;W&&(x.envMap.value=W,x.envMapRotation.value.setFromMatrix4(d1.makeRotationFromEuler(C)).transpose(),W.isCubeTexture&&W.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(n0),x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function u(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function f(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function h(x,_,N,W){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*N,x.scale.value=W*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function p(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function v(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function S(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function g(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function M(x,_,N){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===si&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.retroreflectivity>0&&(x.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=N.texture,x.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function w(x,_){_.matcap&&(x.matcap.value=_.matcap)}function R(x,_){const N=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(N.matrixWorld),x.nearDistance.value=N.shadow.camera.near,x.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function h1(s,e,t,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(C,I){const L=I.program;r.uniformBlockBinding(C,L)}function p(C,I){let L=o[C.id];L===void 0&&(x(C),L=v(C),o[C.id]=L,C.addEventListener("dispose",N));const k=I.program;r.updateUBOMapping(C,k);const E=e.render.frame;l[C.id]!==E&&(g(C),l[C.id]=E)}function v(C){const I=S();C.__bindingPointIndex=I;const L=s.createBuffer(),k=C.__size,E=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,k,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,L),L}function S(){for(let C=0;C<f;C++)if(u.indexOf(C)===-1)return u.push(C),C;return $t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const I=o[C.id],L=C.uniforms,k=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let E=0,P=L.length;E<P;E++){const z=L[E];if(Array.isArray(z))for(let j=0,$=z.length;j<$;j++)M(z[j],E,j,k);else M(z,E,0,k)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(C,I,L,k){if(R(C,I,L,k)===!0){const E=C.__offset,P=C.value;if(Array.isArray(P)){let z=0;for(let j=0;j<P.length;j++){const $=P[j],ee=_($);w($,C.__data,z),typeof $!="number"&&typeof $!="boolean"&&!$.isMatrix3&&!ArrayBuffer.isView($)&&(z+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(P,C.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,C.__data)}}function w(C,I,L){typeof C=="number"||typeof C=="boolean"?I[0]=C:C.isMatrix3?(I[0]=C.elements[0],I[1]=C.elements[1],I[2]=C.elements[2],I[3]=0,I[4]=C.elements[3],I[5]=C.elements[4],I[6]=C.elements[5],I[7]=0,I[8]=C.elements[6],I[9]=C.elements[7],I[10]=C.elements[8],I[11]=0):ArrayBuffer.isView(C)?I.set(new C.constructor(C.buffer,C.byteOffset,I.length)):C.toArray(I,L)}function R(C,I,L,k){const E=C.value,P=I+"_"+L;if(k[P]===void 0)return typeof E=="number"||typeof E=="boolean"?k[P]=E:ArrayBuffer.isView(E)?k[P]=E.slice():k[P]=E.clone(),!0;{const z=k[P];if(typeof E=="number"||typeof E=="boolean"){if(z!==E)return k[P]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(z.equals(E)===!1)return z.copy(E),!0}}return!1}function x(C){const I=C.uniforms;let L=0;const k=16;for(let P=0,z=I.length;P<z;P++){const j=Array.isArray(I[P])?I[P]:[I[P]];for(let $=0,ee=j.length;$<ee;$++){const V=j[$],te=Array.isArray(V.value)?V.value:[V.value];for(let pe=0,re=te.length;pe<re;pe++){const Q=te[pe],Z=_(Q),J=L%k,D=J%Z.boundary,le=J+D;L+=D,le!==0&&k-le<Z.storage&&(L+=k-le),V.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=L,L+=Z.storage}}}const E=L%k;return E>0&&(L+=k-E),C.__size=L,C.__cache={},this}function _(C){const I={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(I.boundary=4,I.storage=4):C.isVector2?(I.boundary=8,I.storage=8):C.isVector3||C.isColor?(I.boundary=16,I.storage=12):C.isVector4?(I.boundary=16,I.storage=16):C.isMatrix3?(I.boundary=48,I.storage=48):C.isMatrix4?(I.boundary=64,I.storage=64):C.isTexture?Et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(I.boundary=16,I.storage=C.byteLength):Et("WebGLRenderer: Unsupported uniform value type.",C),I}function N(C){const I=C.target;I.removeEventListener("dispose",N);const L=u.indexOf(I.__bindingPointIndex);u.splice(L,1),s.deleteBuffer(o[I.id]),delete o[I.id],delete l[I.id]}function W(){for(const C in o)s.deleteBuffer(o[C]);u=[],o={},l={}}return{bind:h,update:p,dispose:W}}const p1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function m1(){return Ji===null&&(Ji=new tx(p1,16,16,Rs,ar),Ji.name="DFG_LUT",Ji.minFilter=Xn,Ji.magFilter=Xn,Ji.wrapS=Er,Ji.wrapT=Er,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class g1{constructor(e={}){const{canvas:t=P_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:M=pi}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=u;const R=M,x=new Set([Rf,bf,Af]),_=new Set([pi,sr,po,mo,wf,Tf]),N=new Uint32Array(4),W=new Int32Array(4),C=new ae;let I=null,L=null;const k=[],E=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let j=!1,$=null,ee=null,V=null,te=null;this._outputColorSpace=bi;let pe=0,re=0,Q=null,Z=-1,J=null;const D=new hn,le=new hn;let Ee=null;const Ze=new Ft(0);let Xe=0,qe=t.width,oe=t.height,he=1,be=null,Qe=null;const Ge=new hn(0,0,qe,oe),dt=new hn(0,0,qe,oe);let pt=!1;const ft=new Df;let Rt=!1,Lt=!1;const xt=new un,St=new ae,Yt=new hn,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function mt(){return Q===null?he:1}let q=r;function jt(A,H){return t.getContext(A,H)}let Oe,b,y,O,se,de,Te,Ne,ge,_e,De,$e,Ue,Re,Ye,tt,ht,G,Le,ve,Fe,Be,Se;try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yf}`),t.addEventListener("webglcontextlost",Dt,!1),t.addEventListener("webglcontextrestored",Ut,!1),t.addEventListener("webglcontextcreationerror",vn,!1),q===null){const H="webgl2";if(q=jt(H,A),q===null)throw jt(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}rt()}catch(A){throw t.removeEventListener("webglcontextlost",Dt,!1),t.removeEventListener("webglcontextrestored",Ut,!1),t.removeEventListener("webglcontextcreationerror",vn,!1),$t("WebGLRenderer: "+A.message),A}function rt(){Oe=new mM(q),Oe.init(),Fe=new a1(q,Oe),b=new sM(q,Oe,e,Fe),y=new r1(q,Oe),b.reversedDepthBuffer&&g&&y.buffers.depth.setReversed(!0),ee=q.createFramebuffer(),V=q.createFramebuffer(),te=q.createFramebuffer(),O=new _M(q),se=new WE,de=new s1(q,Oe,y,se,b,Fe,O),Te=new pM(z),Ne=new Sx(q),Be=new iM(q,Ne),ge=new gM(q,Ne,O,Be),_e=new SM(q,ge,Ne,Be,O),G=new xM(q,b,de),Ye=new aM(se),De=new HE(z,Te,Oe,b,Be,Ye),$e=new f1(z,se),Ue=new YE,Re=new JE(Oe),ht=new nM(z,Te,y,_e,w,h),tt=new i1(z,_e,b),Se=new h1(q,O,b,y),Le=new rM(q,Oe,O),ve=new vM(q,Oe,O),O.programs=De.programs,z.capabilities=b,z.extensions=Oe,z.properties=se,z.renderLists=Ue,z.shadowMap=tt,z.state=y,z.info=O}R!==pi&&(P=new MM(R,t.width,t.height,f,o,l));const Je=new u1(z,q);this.xr=Je,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const A=Oe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Oe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(A){A!==void 0&&(he=A,this.setSize(qe,oe,!1))},this.getSize=function(A){return A.set(qe,oe)},this.setSize=function(A,H,ue=!0){if(Je.isPresenting){Et("WebGLRenderer: Can't change size while VR device is presenting.");return}qe=A,oe=H,t.width=Math.floor(A*he),t.height=Math.floor(H*he),ue===!0&&(t.style.width=A+"px",t.style.height=H+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(qe*he,oe*he).floor()},this.setDrawingBufferSize=function(A,H,ue){qe=A,oe=H,he=ue,t.width=Math.floor(A*ue),t.height=Math.floor(H*ue),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(R===pi){$t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){Et("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(D)},this.getViewport=function(A){return A.copy(Ge)},this.setViewport=function(A,H,ue,ne){A.isVector4?Ge.set(A.x,A.y,A.z,A.w):Ge.set(A,H,ue,ne),y.viewport(D.copy(Ge).multiplyScalar(he).round())},this.getScissor=function(A){return A.copy(dt)},this.setScissor=function(A,H,ue,ne){A.isVector4?dt.set(A.x,A.y,A.z,A.w):dt.set(A,H,ue,ne),y.scissor(le.copy(dt).multiplyScalar(he).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(A){y.setScissorTest(pt=A)},this.setOpaqueSort=function(A){be=A},this.setTransparentSort=function(A){Qe=A},this.getClearColor=function(A){return A.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor(...arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,ue=!0){let ne=0;if(A){let ie=!1;if(Q!==null){const je=Q.texture.format;ie=x.has(je)}if(ie){const je=Q.texture.type,He=_.has(je),We=ht.getClearColor(),it=ht.getClearAlpha(),nt=We.r,ye=We.g,ke=We.b;He?(N[0]=nt,N[1]=ye,N[2]=ke,N[3]=it,q.clearBufferuiv(q.COLOR,0,N)):(W[0]=nt,W[1]=ye,W[2]=ke,W[3]=it,q.clearBufferiv(q.COLOR,0,W))}else ne|=q.COLOR_BUFFER_BIT}H&&(ne|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(ne|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&q.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),$=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Dt,!1),t.removeEventListener("webglcontextrestored",Ut,!1),t.removeEventListener("webglcontextcreationerror",vn,!1),ht.dispose(),Ue.dispose(),Re.dispose(),se.dispose(),Te.dispose(),_e.dispose(),Be.dispose(),Se.dispose(),De.dispose(),Je.dispose(),Je.removeEventListener("sessionstart",or),Je.removeEventListener("sessionend",lr),_n.stop()};function Dt(A){A.preventDefault(),Sm("WebGLRenderer: Context Lost."),j=!0}function Ut(){Sm("WebGLRenderer: Context Restored."),j=!1;const A=O.autoReset,H=tt.enabled,ue=tt.autoUpdate,ne=tt.needsUpdate,ie=tt.type;rt(),O.autoReset=A,tt.enabled=H,tt.autoUpdate=ue,tt.needsUpdate=ne,tt.type=ie}function vn(A){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Dn(A){const H=A.target;H.removeEventListener("dispose",Dn),mi(H)}function mi(A){gi(A),se.remove(A)}function gi(A){const H=se.get(A).programs;H!==void 0&&(H.forEach(function(ue){De.releaseProgram(ue)}),A.isShaderMaterial&&De.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,ue,ne,ie,je){H===null&&(H=tn);const He=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,We=kt(A,H,ue,ne,ie);y.setMaterial(ne,He);let it=ue.index,nt=1;if(ne.wireframe===!0){if(it=ge.getWireframeAttribute(ue),it===void 0)return;nt=2}const ye=ue.drawRange,ke=ue.attributes.position;let Ce=ye.start*nt,at=(ye.start+ye.count)*nt;je!==null&&(Ce=Math.max(Ce,je.start*nt),at=Math.min(at,(je.start+je.count)*nt)),it!==null?(Ce=Math.max(Ce,0),at=Math.min(at,it.count)):ke!=null&&(Ce=Math.max(Ce,0),at=Math.min(at,ke.count));const bt=at-Ce;if(bt<0||bt===1/0)return;Be.setup(ie,ne,We,ue,it);let Ct,wt=Le;if(it!==null&&(Ct=Ne.get(it),wt=ve,wt.setIndex(Ct)),ie.isMesh)ne.wireframe===!0?(y.setLineWidth(ne.wireframeLinewidth*mt()),wt.setMode(q.LINES)):wt.setMode(q.TRIANGLES);else if(ie.isLine){let qt=ne.linewidth;qt===void 0&&(qt=1),y.setLineWidth(qt*mt()),ie.isLineSegments?wt.setMode(q.LINES):ie.isLineLoop?wt.setMode(q.LINE_LOOP):wt.setMode(q.LINE_STRIP)}else ie.isPoints?wt.setMode(q.POINTS):ie.isSprite&&wt.setMode(q.TRIANGLES);if(ie.isBatchedMesh)if(Oe.get("WEBGL_multi_draw"))wt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const qt=ie._multiDrawStarts,ze=ie._multiDrawCounts,Jt=ie._multiDrawCount,Bt=it?Ne.get(it).bytesPerElement:1,Rn=se.get(ne).currentProgram.getUniforms();for(let Pt=0;Pt<Jt;Pt++)Rn.setValue(q,"_gl_DrawID",Pt),wt.render(qt[Pt]/Bt,ze[Pt])}else if(ie.isInstancedMesh)wt.renderInstances(Ce,bt,ie.count);else if(ue.isInstancedBufferGeometry){const qt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,ze=Math.min(ue.instanceCount,qt);wt.renderInstances(Ce,bt,ze)}else wt.render(Ce,bt)};function Mn(A,H,ue,ne){$!==null&&A.isNodeMaterial&&$.setObject(ne,A),Rt===!0&&Ye.setState(A,ue,!1),A.transparent===!0&&A.side===tr&&A.forceSinglePass===!1?(A.side=si,A.needsUpdate=!0,_t(A,H,ne),A.side=Ts,A.needsUpdate=!0,_t(A,H,ne),A.side=tr):_t(A,H,ne)}this.compile=function(A,H,ue=null){ue===null&&(ue=A),$!==null&&$.renderStart(A,H,ue),L=Re.get(ue),L.init(H),E.push(L),ue.traverseVisible(function(ie){ie.isLight&&ie.layers.test(H.layers)&&(L.pushLight(ie),ie.castShadow&&L.pushShadow(ie))}),A!==ue&&A.traverseVisible(function(ie){ie.isLight&&ie.layers.test(H.layers)&&(L.pushLight(ie),ie.castShadow&&L.pushShadow(ie))}),L.setupLights(),$!==null&&$.updateLights(L.state.lightsArray),Lt=this.localClippingEnabled,Rt=Ye.init(this.clippingPlanes,Lt),Rt===!0&&Ye.setGlobalState(this.clippingPlanes,H),$!==null&&tt.render(L.state.shadowsArray,ue,H);const ne=new Set;return A.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const je=ie.material;if(je)if(Array.isArray(je))for(let He=0;He<je.length;He++){const We=je[He];Mn(We,ue,H,ie),ne.add(We)}else Mn(je,ue,H,ie),ne.add(je)}),L=E.pop(),$!==null&&$.renderEnd(),ne},this.compileAsync=function(A,H,ue=null){const ne=this.compile(A,H,ue);return new Promise(ie=>{function je(){if(ne.forEach(function(He){const it=se.get(He).currentProgram;(it===void 0||it.isReady())&&ne.delete(He)}),ne.size===0){ie(A);return}setTimeout(je,10)}Oe.get("KHR_parallel_shader_compile")!==null?je():setTimeout(je,10)})};let $n=null;function br(A){$n&&$n(A)}function or(){_n.stop()}function lr(){_n.start()}const _n=new Kg;_n.setAnimationLoop(br),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(A){$n=A,Je.setAnimationLoop(A),A===null?_n.stop():_n.start()},Je.addEventListener("sessionstart",or),Je.addEventListener("sessionend",lr),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;$!==null&&$.renderStart(A,H);const ue=Je.enabled===!0&&Je.isPresenting===!0,ne=P!==null&&(Q===null||ue)&&P.begin(z,Q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Je.enabled===!0&&Je.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Je.cameraAutoUpdate===!0&&Je.updateCamera(H),H=Je.getCamera()),A.isScene===!0&&A.onBeforeRender(z,A,H,Q),L=Re.get(A,E.length),L.init(H),L.state.textureUnits=de.getTextureUnits(),E.push(L),xt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ft.setFromProjectionMatrix(xt,ir,H.reversedDepth),Lt=this.localClippingEnabled,Rt=Ye.init(this.clippingPlanes,Lt),I=Ue.get(A,k.length),I.init(),k.push(I),Je.enabled===!0&&Je.isPresenting===!0){const He=z.xr.getDepthSensingMesh();He!==null&&vi(He,H,-1/0,z.sortObjects)}vi(A,H,0,z.sortObjects),I.finish(),$!==null&&$.updateLights(L.state.lightsArray),z.sortObjects===!0&&I.sort(be,Qe),It=Je.enabled===!1||Je.isPresenting===!1||Je.hasDepthSensing()===!1,It&&ht.addToRenderList(I,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Rt===!0&&Ye.beginShadows();const ie=L.state.shadowsArray;if(tt.render(ie,A,H),Rt===!0&&Ye.endShadows(),(ne&&P.hasRenderPass())===!1){const He=I.opaque,We=I.transmissive;if(L.setupLights(),H.isArrayCamera){const it=H.cameras;if(We.length>0)for(let nt=0,ye=it.length;nt<ye;nt++){const ke=it[nt];xe(He,We,A,ke)}It&&ht.render(A);for(let nt=0,ye=it.length;nt<ye;nt++){const ke=it[nt];U(I,A,ke,ke.viewport)}}else We.length>0&&xe(He,We,A,H),It&&ht.render(A),U(I,A,H)}Q!==null&&re===0&&(de.updateMultisampleRenderTarget(Q),de.updateRenderTargetMipmap(Q)),ne&&P.end(z),A.isScene===!0&&A.onAfterRender(z,A,H),Be.resetDefaultState(),Z=-1,J=null,E.pop(),E.length>0?(L=E[E.length-1],de.setTextureUnits(L.state.textureUnits),Rt===!0&&Ye.setGlobalState(z.clippingPlanes,L.state.camera)):L=null,k.pop(),k.length>0?I=k[k.length-1]:I=null,$!==null&&$.renderEnd()};function vi(A,H,ue,ne){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)ue=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLightProbeGrid)L.pushLightProbeGrid(A);else if(A.isLight)L.pushLight(A),A.castShadow&&L.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(ft)){ne&&Yt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(xt);const He=_e.update(A),We=A.material;We.visible&&I.push(A,He,We,ue,Yt.z,null,H)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(ft))){const He=_e.update(A),We=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Yt.copy(A.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),Yt.copy(He.boundingSphere.center)),Yt.applyMatrix4(A.matrixWorld).applyMatrix4(xt)),Array.isArray(We)){const it=He.groups;for(let nt=0,ye=it.length;nt<ye;nt++){const ke=it[nt],Ce=We[ke.materialIndex];Ce&&Ce.visible&&I.push(A,He,Ce,ue,Yt.z,ke,H)}}else We.visible&&I.push(A,He,We,ue,Yt.z,null,H)}}const je=A.children;for(let He=0,We=je.length;He<We;He++)vi(je[He],H,ue,ne)}function U(A,H,ue,ne){const{opaque:ie,transmissive:je,transparent:He}=A;L.setupLightsView(ue),Rt===!0&&Ye.setGlobalState(z.clippingPlanes,ue),ne&&y.viewport(D.copy(ne)),ie.length>0&&Ve(ie,H,ue),je.length>0&&Ve(je,H,ue),He.length>0&&Ve(He,H,ue),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function xe(A,H,ue,ne){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ne.id]===void 0){const Ce=Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ne.id]=new Wi(1,1,{generateMipmaps:!0,type:Ce?ar:pi,minFilter:Es,samples:Math.max(4,b.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Gt.workingColorSpace})}const je=L.state.transmissionRenderTarget[ne.id],He=ne.viewport||D;je.setSize(He.z*z.transmissionResolutionScale,He.w*z.transmissionResolutionScale);const We=z.getRenderTarget(),it=z.getActiveCubeFace(),nt=z.getActiveMipmapLevel();z.setRenderTarget(je),z.getClearColor(Ze),Xe=z.getClearAlpha(),Xe<1&&z.setClearColor(16777215,.5),z.clear(),It&&ht.render(ue);const ye=z.toneMapping;z.toneMapping=rr;const ke=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),L.setupLightsView(ne),Rt===!0&&Ye.setGlobalState(z.clippingPlanes,ne),Ve(A,ue,ne),de.updateMultisampleRenderTarget(je),de.updateRenderTargetMipmap(je),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let at=0,bt=H.length;at<bt;at++){const Ct=H[at],{object:wt,geometry:qt,material:ze,group:Jt}=Ct;if(ze.side===tr&&wt.layers.test(ne.layers)){const Bt=ze.side;ze.side=si,ze.needsUpdate=!0,Me(wt,ue,ne,qt,ze,Jt),ze.side=Bt,ze.needsUpdate=!0,Ce=!0}}Ce===!0&&(de.updateMultisampleRenderTarget(je),de.updateRenderTargetMipmap(je))}z.setRenderTarget(We,it,nt),z.setClearColor(Ze,Xe),ke!==void 0&&(ne.viewport=ke),z.toneMapping=ye}function Ve(A,H,ue){const ne=H.isScene===!0?H.overrideMaterial:null;for(let ie=0,je=A.length;ie<je;ie++){const He=A[ie],{object:We,geometry:it,group:nt}=He;let ye=He.material;ye.allowOverride===!0&&ne!==null&&(ye=ne),We.layers.test(ue.layers)&&Me(We,H,ue,it,ye,nt)}}function Me(A,H,ue,ne,ie,je){$!==null&&ie.isNodeMaterial&&$.setObject(A,ie),A.onBeforeRender(z,H,ue,ne,ie,je),A.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ie.onBeforeRender(z,H,ue,ne,A,je),ie.transparent===!0&&ie.side===tr&&ie.forceSinglePass===!1?(ie.side=si,ie.needsUpdate=!0,z.renderBufferDirect(ue,H,ne,ie,A,je),ie.side=Ts,ie.needsUpdate=!0,z.renderBufferDirect(ue,H,ne,ie,A,je),ie.side=tr):z.renderBufferDirect(ue,H,ne,ie,A,je),A.onAfterRender(z,H,ue,ne,ie,je)}function _t(A,H,ue){H.isScene!==!0&&(H=tn);const ne=se.get(A),ie=L.state.lights,je=L.state.shadowsArray,He=ie.state.version,We=De.getParameters(A,ie.state,je,H,ue,L.state.lightProbeGridArray),it=De.getProgramCacheKey(We);let nt=ne.programs;ne.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,ne.fog=H.fog;const ye=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ne.envMap=Te.get(A.envMap||ne.environment,ye),ne.envMapRotation=ne.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,nt===void 0&&(A.addEventListener("dispose",Dn),nt=new Map,ne.programs=nt);let ke=nt.get(it);if(ke!==void 0){if(ne.currentProgram===ke&&ne.lightsStateVersion===He)return nn(A,We),ke}else We.uniforms=De.getUniforms(A),$!==null&&A.isNodeMaterial&&$.build(A,ue,We),A.onBeforeCompile(We,z),ke=De.acquireProgram(We,it),nt.set(it,ke),ne.uniforms=We.uniforms;const Ce=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ce.clippingPlanes=Ye.uniform),nn(A,We),ne.needsLights=on(A),ne.lightsStateVersion=He,ne.needsLights&&(Ce.ambientLightColor.value=ie.state.ambient,Ce.lightProbe.value=ie.state.probe,Ce.sunLights.value=ie.state.sun,Ce.sunLightShadows.value=ie.state.sunShadow,Ce.directionalLights.value=ie.state.directional,Ce.directionalLightShadows.value=ie.state.directionalShadow,Ce.spotLights.value=ie.state.spot,Ce.spotLightShadows.value=ie.state.spotShadow,Ce.rectAreaLights.value=ie.state.rectArea,Ce.ltc_1.value=ie.state.rectAreaLTC1,Ce.ltc_2.value=ie.state.rectAreaLTC2,Ce.pointLights.value=ie.state.point,Ce.pointLightShadows.value=ie.state.pointShadow,Ce.hemisphereLights.value=ie.state.hemi,Ce.sunShadowMatrix.value=ie.state.sunShadowMatrix,Ce.sunShadowCascade.value=ie.state.sunShadowCascade,Ce.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ce.spotLightMatrix.value=ie.state.spotLightMatrix,Ce.spotLightMap.value=ie.state.spotLightMap,Ce.pointShadowMatrix.value=ie.state.pointShadowMatrix),ne.lightProbeGrid=L.state.lightProbeGridArray.length>0,ne.currentProgram=ke,ne.uniformsList=null,ke}function X(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=Ql.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function nn(A,H){const ue=se.get(A);ue.outputColorSpace=H.outputColorSpace,ue.batching=H.batching,ue.batchingColor=H.batchingColor,ue.instancing=H.instancing,ue.instancingColor=H.instancingColor,ue.instancingMorph=H.instancingMorph,ue.skinning=H.skinning,ue.morphTargets=H.morphTargets,ue.morphNormals=H.morphNormals,ue.morphColors=H.morphColors,ue.morphTargetsCount=H.morphTargetsCount,ue.numClippingPlanes=H.numClippingPlanes,ue.numIntersection=H.numClipIntersection,ue.vertexAlphas=H.vertexAlphas,ue.vertexTangents=H.vertexTangents,ue.toneMapping=H.toneMapping}function Tt(A,H){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;C.setFromMatrixPosition(H.matrixWorld);for(let ue=0,ne=A.length;ue<ne;ue++){const ie=A[ue];if(ie.texture!==null&&ie.boundingBox.containsPoint(C))return ie}return null}function kt(A,H,ue,ne,ie){H.isScene!==!0&&(H=tn),de.resetTextureUnits();const je=H.fog,He=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?H.environment:null,We=Q===null?z.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Gt.workingColorSpace,it=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,nt=Te.get(ne.envMap||He,it),ye=ne.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,ke=!!ue.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ce=!!ue.morphAttributes.position,at=!!ue.morphAttributes.normal,bt=!!ue.morphAttributes.color;let Ct=rr;ne.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ct=z.toneMapping);const wt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,qt=wt!==void 0?wt.length:0,ze=se.get(ne),Jt=L.state.lights;if(Rt===!0&&(Lt===!0||A!==J)){const Qt=A===J&&ne.id===Z;Ye.setState(ne,A,Qt)}let Bt=!1;ne.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Jt.state.version||ze.outputColorSpace!==We||ie.isBatchedMesh&&ze.batching===!1||!ie.isBatchedMesh&&ze.batching===!0||ie.isBatchedMesh&&ze.batchingColor===!0&&ie._colorsTexture===null||ie.isBatchedMesh&&ze.batchingColor===!1&&ie._colorsTexture!==null||ie.isInstancedMesh&&ze.instancing===!1||!ie.isInstancedMesh&&ze.instancing===!0||ie.isSkinnedMesh&&ze.skinning===!1||!ie.isSkinnedMesh&&ze.skinning===!0||ie.isInstancedMesh&&ze.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&ze.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&ze.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&ze.instancingMorph===!1&&ie.morphTexture!==null||ze.envMap!==nt||ne.fog===!0&&ze.fog!==je||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ye.numPlanes||ze.numIntersection!==Ye.numIntersection)||ze.vertexAlphas!==ye||ze.vertexTangents!==ke||ze.morphTargets!==Ce||ze.morphNormals!==at||ze.morphColors!==bt||ze.toneMapping!==Ct||ze.morphTargetsCount!==qt||!!ze.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Bt=!0):(Bt=!0,ze.__version=ne.version);let Rn=ze.currentProgram;Bt===!0&&(Rn=_t(ne,H,ie),$&&ne.isNodeMaterial&&$.onUpdateProgram(ne,Rn,ze));let Pt=!1,ai=!1,Ci=!1;const zt=Rn.getUniforms(),ln=ze.uniforms;if(y.useProgram(Rn.program)&&(Pt=!0,ai=!0,Ci=!0),ne.id!==Z&&(Z=ne.id,ai=!0),ze.needsLights){const Qt=Tt(L.state.lightProbeGridArray,ie);ze.lightProbeGrid!==Qt&&(ze.lightProbeGrid=Qt,ai=!0)}if(Pt||J!==A){y.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),zt.setValue(q,"projectionMatrix",A.projectionMatrix),zt.setValue(q,"viewMatrix",A.matrixWorldInverse);const _i=zt.map.cameraPosition;_i!==void 0&&_i.setValue(q,St.setFromMatrixPosition(A.matrixWorld)),b.logarithmicDepthBuffer&&zt.setValue(q,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&zt.setValue(q,"isOrthographic",A.isOrthographicCamera===!0),J!==A&&(J=A,ai=!0,Ci=!0)}if(ze.needsLights&&(Jt.state.sunShadowMap.length>0&&zt.setValue(q,"sunShadowMap",Jt.state.sunShadowMap,de),Jt.state.directionalShadowMap.length>0&&zt.setValue(q,"directionalShadowMap",Jt.state.directionalShadowMap,de),Jt.state.spotShadowMap.length>0&&zt.setValue(q,"spotShadowMap",Jt.state.spotShadowMap,de),Jt.state.pointShadowMap.length>0&&zt.setValue(q,"pointShadowMap",Jt.state.pointShadowMap,de)),ie.isSkinnedMesh){zt.setOptional(q,ie,"bindMatrix"),zt.setOptional(q,ie,"bindMatrixInverse");const Qt=ie.skeleton;Qt&&(Qt.boneTexture===null&&Qt.computeBoneTexture(),zt.setValue(q,"boneTexture",Qt.boneTexture,de))}ie.isBatchedMesh&&(zt.setOptional(q,ie,"batchingTexture"),zt.setValue(q,"batchingTexture",ie._matricesTexture,de),zt.setOptional(q,ie,"batchingIdTexture"),zt.setValue(q,"batchingIdTexture",ie._indirectTexture,de),zt.setOptional(q,ie,"batchingColorTexture"),ie._colorsTexture!==null&&zt.setValue(q,"batchingColorTexture",ie._colorsTexture,de));const Pi=ue.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&G.update(ie,ue,Rn),(ai||ze.receiveShadow!==ie.receiveShadow)&&(ze.receiveShadow=ie.receiveShadow,zt.setValue(q,"receiveShadow",ie.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&H.environment!==null&&(ln.envMapIntensity.value=H.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=m1()),ai){if(zt.setValue(q,"toneMappingExposure",z.toneMappingExposure),ze.needsLights&&Ri(ln,Ci),je&&ne.fog===!0&&$e.refreshFogUniforms(ln,je),$e.refreshMaterialUniforms(ln,ne,he,oe,L.state.transmissionRenderTarget[A.id]),ze.needsLights&&ze.lightProbeGrid){const Qt=ze.lightProbeGrid;ln.probesSH.value=Qt.texture,ln.probesMin.value.copy(Qt.boundingBox.min),ln.probesMax.value.copy(Qt.boundingBox.max),ln.probesResolution.value.copy(Qt.resolution)}Ql.upload(q,X(ze),ln,de)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Ql.upload(q,X(ze),ln,de),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&zt.setValue(q,"center",ie.center),zt.setValue(q,"modelViewMatrix",ie.modelViewMatrix),zt.setValue(q,"normalMatrix",ie.normalMatrix),zt.setValue(q,"modelMatrix",ie.matrixWorld),ne.uniformsGroups!==void 0){const Qt=ne.uniformsGroups;for(let _i=0,Li=Qt.length;_i<Li;_i++){const Ni=Qt[_i];Se.update(Ni,Rn),Se.bind(Ni,Rn)}}return Rn}function Ri(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.sunLights.needsUpdate=H,A.sunLightShadows.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function on(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return pe},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(A,H,ue){const ne=se.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),se.get(A.texture).__webglTexture=H,se.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ue,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){const ue=se.get(A);ue.__webglFramebuffer=H,ue.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,ue=0){Q=A,pe=H,re=ue;let ne=null,ie=!1,je=!1;if(A){const We=se.get(A);if(We.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(q.FRAMEBUFFER,We.__webglFramebuffer),D.copy(A.viewport),le.copy(A.scissor),Ee=A.scissorTest,y.viewport(D),y.scissor(le),y.setScissorTest(Ee),Z=-1;return}else if(We.__webglFramebuffer===void 0)de.setupRenderTarget(A);else if(We.__hasExternalTextures)de.rebindTextures(A,se.get(A.texture).__webglTexture,se.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const ye=A.depthTexture;if(We.__boundDepthTexture!==ye){if(ye!==null&&se.has(ye)&&(A.width!==ye.image.width||A.height!==ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(A)}}const it=A.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(je=!0);const nt=se.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(nt[H])?ne=nt[H][ue]:ne=nt[H],ie=!0):A.samples>0&&de.useMultisampledRTT(A)===!1?ne=se.get(A).__webglMultisampledFramebuffer:Array.isArray(nt)?ne=nt[ue]:ne=nt,D.copy(A.viewport),le.copy(A.scissor),Ee=A.scissorTest}else D.copy(Ge).multiplyScalar(he).floor(),le.copy(dt).multiplyScalar(he).floor(),Ee=pt;if(ue!==0&&(ne=ee),y.bindFramebuffer(q.FRAMEBUFFER,ne)&&y.drawBuffers(A,ne),y.viewport(D),y.scissor(le),y.setScissorTest(Ee),ie){const We=se.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+H,We.__webglTexture,ue)}else if(je){const We=H;for(let it=0;it<A.textures.length;it++){const nt=se.get(A.textures[it]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+it,nt.__webglTexture,ue,We)}}else if(A!==null&&ue!==0){const We=se.get(A.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,We.__webglTexture,ue)}Z=-1};function Zt(A){const H=se.get(A);return(H.__readFormat!==A.format||H.__readType!==A.type)&&(H.__readFormat=A.format,H.__readType=A.type,H.__formatReadable=b.textureFormatReadable(A.format),H.__typeReadable=b.textureTypeReadable(A.type)),H}this.readRenderTargetPixels=function(A,H,ue,ne,ie,je,He,We=0){if(!(A&&A.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(it=it[He]),it){y.bindFramebuffer(q.FRAMEBUFFER,it);try{const nt=A.textures[We],ye=nt.format,ke=nt.type;A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+We);const Ce=Zt(nt);if(Ce.__formatReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-ne&&ue>=0&&ue<=A.height-ie&&q.readPixels(H,ue,ne,ie,Fe.convert(ye),Fe.convert(ke),je)}finally{const nt=Q!==null?se.get(Q).__webglFramebuffer:null;y.bindFramebuffer(q.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(A,H,ue,ne,ie,je,He,We=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let it=se.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(it=it[He]),it)if(H>=0&&H<=A.width-ne&&ue>=0&&ue<=A.height-ie){y.bindFramebuffer(q.FRAMEBUFFER,it);const nt=A.textures[We],ye=nt.format,ke=nt.type;A.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+We);const Ce=Zt(nt);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,at),q.bufferData(q.PIXEL_PACK_BUFFER,je.byteLength,q.STREAM_READ),q.readPixels(H,ue,ne,ie,Fe.convert(ye),Fe.convert(ke),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);const bt=Q!==null?se.get(Q).__webglFramebuffer:null;y.bindFramebuffer(q.FRAMEBUFFER,bt);const Ct=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await L_(q,Ct,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,at),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,je),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(at),q.deleteSync(Ct),je}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,ue=0){const ne=Math.pow(2,-ue),ie=Math.floor(A.image.width*ne),je=Math.floor(A.image.height*ne),He=H!==null?H.x:0,We=H!==null?H.y:0;de.setTexture2D(A,0),q.copyTexSubImage2D(q.TEXTURE_2D,ue,0,0,He,We,ie,je),y.unbindTexture()},this.copyTextureToTexture=function(A,H,ue=null,ne=null,ie=0,je=0){let He,We,it,nt,ye,ke,Ce,at,bt;const Ct=A.isCompressedTexture?A.mipmaps[je]:A.image;if(ue!==null)He=ue.max.x-ue.min.x,We=ue.max.y-ue.min.y,it=ue.isBox3?ue.max.z-ue.min.z:1,nt=ue.min.x,ye=ue.min.y,ke=ue.isBox3?ue.min.z:0;else{const ln=Math.pow(2,-ie);He=Math.floor(Ct.width*ln),We=Math.floor(Ct.height*ln),A.isDataArrayTexture?it=Ct.depth:A.isData3DTexture?it=Math.floor(Ct.depth*ln):it=1,nt=0,ye=0,ke=0}ne!==null?(Ce=ne.x,at=ne.y,bt=ne.z):(Ce=0,at=0,bt=0);const wt=Fe.convert(H.format),qt=Fe.convert(H.type);let ze;H.isData3DTexture?(de.setTexture3D(H,0),ze=q.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(de.setTexture2DArray(H,0),ze=q.TEXTURE_2D_ARRAY):(de.setTexture2D(H,0),ze=q.TEXTURE_2D),y.activeTexture(q.TEXTURE0),y.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,H.flipY),y.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),y.pixelStorei(q.UNPACK_ALIGNMENT,H.unpackAlignment);const Jt=y.getParameter(q.UNPACK_ROW_LENGTH),Bt=y.getParameter(q.UNPACK_IMAGE_HEIGHT),Rn=y.getParameter(q.UNPACK_SKIP_PIXELS),Pt=y.getParameter(q.UNPACK_SKIP_ROWS),ai=y.getParameter(q.UNPACK_SKIP_IMAGES);y.pixelStorei(q.UNPACK_ROW_LENGTH,Ct.width),y.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ct.height),y.pixelStorei(q.UNPACK_SKIP_PIXELS,nt),y.pixelStorei(q.UNPACK_SKIP_ROWS,ye),y.pixelStorei(q.UNPACK_SKIP_IMAGES,ke);const Ci=A.isDataArrayTexture||A.isData3DTexture,zt=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const ln=se.get(A),Pi=se.get(H),Qt=se.get(ln.__renderTarget),_i=se.get(Pi.__renderTarget);y.bindFramebuffer(q.READ_FRAMEBUFFER,Qt.__webglFramebuffer),y.bindFramebuffer(q.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let Li=0;Li<it;Li++)Ci&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,se.get(A).__webglTexture,ie,ke+Li),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,se.get(H).__webglTexture,je,bt+Li)),q.blitFramebuffer(nt,ye,He,We,Ce,at,He,We,q.DEPTH_BUFFER_BIT,q.NEAREST);y.bindFramebuffer(q.READ_FRAMEBUFFER,null),y.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ie!==0||A.isRenderTargetTexture||se.has(A)){const ln=se.get(A),Pi=se.get(H);y.bindFramebuffer(q.READ_FRAMEBUFFER,V),y.bindFramebuffer(q.DRAW_FRAMEBUFFER,te);for(let Qt=0;Qt<it;Qt++)Ci?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ln.__webglTexture,ie,ke+Qt):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,ln.__webglTexture,ie),zt?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Pi.__webglTexture,je,bt+Qt):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Pi.__webglTexture,je),ie!==0?q.blitFramebuffer(nt,ye,He,We,Ce,at,He,We,q.COLOR_BUFFER_BIT,q.NEAREST):zt?q.copyTexSubImage3D(ze,je,Ce,at,bt+Qt,nt,ye,He,We):q.copyTexSubImage2D(ze,je,Ce,at,nt,ye,He,We);y.bindFramebuffer(q.READ_FRAMEBUFFER,null),y.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else zt?A.isDataTexture||A.isData3DTexture?q.texSubImage3D(ze,je,Ce,at,bt,He,We,it,wt,qt,Ct.data):H.isCompressedArrayTexture?q.compressedTexSubImage3D(ze,je,Ce,at,bt,He,We,it,wt,Ct.data):q.texSubImage3D(ze,je,Ce,at,bt,He,We,it,wt,qt,Ct):A.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,je,Ce,at,He,We,wt,qt,Ct.data):A.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,je,Ce,at,Ct.width,Ct.height,wt,Ct.data):q.texSubImage2D(q.TEXTURE_2D,je,Ce,at,He,We,wt,qt,Ct);y.pixelStorei(q.UNPACK_ROW_LENGTH,Jt),y.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Bt),y.pixelStorei(q.UNPACK_SKIP_PIXELS,Rn),y.pixelStorei(q.UNPACK_SKIP_ROWS,Pt),y.pixelStorei(q.UNPACK_SKIP_IMAGES,ai),je===0&&H.generateMipmaps&&q.generateMipmap(ze),y.unbindTexture()},this.initRenderTarget=function(A){se.get(A).__webglFramebuffer===void 0&&de.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?de.setTextureCube(A,0):A.isData3DTexture?de.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?de.setTexture2DArray(A,0):de.setTexture2D(A,0),y.unbindTexture()},this.resetState=function(){pe=0,re=0,Q=null,y.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ir}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Gt._getUnpackColorSpace()}}const ec=[{code:"AR",flag:"🇦🇷",name:"Argentina",label:"🇦🇷 AR (Argentina)"},{code:"UY",flag:"🇺🇾",name:"Uruguay",label:"🇺🇾 UY (Uruguay)"},{code:"CL",flag:"🇨🇱",name:"Chile",label:"🇨🇱 CL (Chile)"},{code:"BR",flag:"🇧🇷",name:"Brasil",label:"🇧🇷 BR (Brasil)"},{code:"PY",flag:"🇵🇾",name:"Paraguay",label:"🇵🇾 PY (Paraguay)"},{code:"BO",flag:"🇧🇴",name:"Bolivia",label:"🇧🇴 BO (Bolivia)"},{code:"PE",flag:"🇵🇪",name:"Perú",label:"🇵🇪 PE (Perú)"},{code:"CO",flag:"🇨🇴",name:"Colombia",label:"🇨🇴 CO (Colombia)"},{code:"MX",flag:"🇲🇽",name:"México",label:"🇲🇽 MX (México)"},{code:"ES",flag:"🇪🇸",name:"España",label:"🇪🇸 ES (España)"},{code:"US",flag:"🇺🇸",name:"EE.UU.",label:"🇺🇸 US (EE.UU.)"},{code:"IT",flag:"🇮🇹",name:"Italia",label:"🇮🇹 IT (Italia)"},{code:"GB",flag:"🇬🇧",name:"Reino Unido",label:"🇬🇧 GB (Reino Unido)"},{code:"JP",flag:"🇯🇵",name:"Japón",label:"🇯🇵 JP (Japón)"}];function Zr(s){return s&&ec.find(t=>t.code===s||t.flag===s)||ec[0]}const _o=[{index:0,flag:"🇦🇷",name:{es:"Buenos Aires",en:"Buenos Aires"},monumentName:{es:"Obelisco y Puerto Madero",en:"Obelisk & Puerto Madero"},weatherLabel:{es:"Brisa Nocturna y Reflectores",en:"Night Breeze & Searchlights"},skyTop:"#040a1c",skyMid:"#0b1d42",skyBot:"#13315c",winColor:"#fef08a",accentColor:"#38bdf8",weather:"breeze",weatherArchetype:"urban",windStrength:.42,monument:"obelisco"},{index:1,flag:"🇧🇷",name:{es:"São Paulo",en:"São Paulo"},monumentName:{es:"Ponte Octávio Frias de Oliveira",en:"Octávio Frias Cable Bridge"},weatherLabel:{es:"Brasa Nocturna Paulista",en:"Paulista Warm Night Haze"},skyTop:"#12091c",skyMid:"#261438",skyBot:"#422040",winColor:"#fde047",accentColor:"#f59e0b",weather:"haze",weatherArchetype:"golden_embers",windStrength:.49,monument:"sealink"},{index:2,flag:"🇲🇽",name:{es:"CDMX",en:"Mexico City"},monumentName:{es:"Torre Latinoamericana y El Ángel",en:"Torre Latinoamericana & The Angel"},weatherLabel:{es:"Polvo Dorado de Altura",en:"High-Altitude Golden Dust"},skyTop:"#140c05",skyMid:"#2d1b0b",skyBot:"#4a2c11",winColor:"#fbbf24",accentColor:"#f59e0b",weather:"haze",weatherArchetype:"golden_embers",windStrength:.56,monument:"angel"},{index:3,flag:"🇺🇸",name:{es:"Nueva York",en:"New York"},monumentName:{es:"Aguja del Empire State",en:"Empire State Spire"},weatherLabel:{es:"Reflectores de Manhattan",en:"Manhattan Sky Searchlights"},skyTop:"#040814",skyMid:"#0f1b38",skyBot:"#1e325c",winColor:"#e0f2fe",accentColor:"#60a5fa",weather:"steam",weatherArchetype:"urban",windStrength:.63,monument:"empire"},{index:4,flag:"🇺🇸",name:{es:"Chicago",en:"Chicago"},monumentName:{es:"Willis Tower (Ciudad del Viento)",en:"Willis Tower (Windy City)"},weatherLabel:{es:"Ráfagas del Lago Michigan",en:"Lake Michigan Gusts"},skyTop:"#060c1e",skyMid:"#132448",skyBot:"#1f3a68",winColor:"#bae6fd",accentColor:"#38bdf8",weather:"gusts",weatherArchetype:"urban",windStrength:.71,monument:"empire"},{index:5,flag:"🇨🇦",name:{es:"Toronto",en:"Toronto"},monumentName:{es:"Silueta de la CN Tower",en:"CN Tower Silhouette"},weatherLabel:{es:"Ventisca Helada de Altura",en:"High-Altitude Ice Blizzard"},skyTop:"#071226",skyMid:"#102a4c",skyBot:"#1c4472",winColor:"#e0f2fe",accentColor:"#7dd3fc",weather:"snow",weatherArchetype:"blizzard",windStrength:.78,monument:"cntower"},{index:6,flag:"🇬🇧",name:{es:"Londres",en:"London"},monumentName:{es:"Big Ben, London Eye y The Shard",en:"Big Ben, London Eye & The Shard"},weatherLabel:{es:"Niebla Profunda del Támesis",en:"Thames Nocturnal Mist"},skyTop:"#050a14",skyMid:"#0f1e36",skyBot:"#1c3456",winColor:"#fecaca",accentColor:"#38bdf8",weather:"fog",weatherArchetype:"urban",windStrength:.85,monument:"londoneye"},{index:7,flag:"🇫🇷",name:{es:"París",en:"Paris"},monumentName:{es:"Torre Eiffel Iluminada",en:"Illuminated Eiffel Tower"},weatherLabel:{es:"Haces de Luz Nocturnos",en:"Eiffel Nocturnal Beams"},skyTop:"#06091c",skyMid:"#121d42",skyBot:"#1e3266",winColor:"#fde68a",accentColor:"#fbbf24",weather:"gusts",weatherArchetype:"urban",windStrength:.92,monument:"eiffel"},{index:8,flag:"🇪🇸",name:{es:"Madrid",en:"Madrid"},monumentName:{es:"Cuatro Torres Business Area",en:"Cuatro Torres Skyline"},weatherLabel:{es:"Ventisca Fría de la Sierra",en:"Sierra High-Altitude Gale"},skyTop:"#081326",skyMid:"#14294a",skyBot:"#214270",winColor:"#bae6fd",accentColor:"#38bdf8",weather:"snow",weatherArchetype:"blizzard",windStrength:.99,monument:"obelisco"},{index:9,flag:"🇩🇪",name:{es:"Berlín",en:"Berlin"},monumentName:{es:"Torre de TV en Alexanderplatz",en:"Fernsehturm Alexanderplatz"},weatherLabel:{es:"Ventisca invernal Europea",en:"European Winter Blizzard"},skyTop:"#06101c",skyMid:"#122640",skyBot:"#1e3e64",winColor:"#a5f3fc",accentColor:"#22d3ee",weather:"snow",weatherArchetype:"blizzard",windStrength:1.06,monument:"cntower"},{index:10,flag:"🇹🇷",name:{es:"Estambul",en:"Istanbul"},monumentName:{es:"Puente del Bósforo y Minaretes",en:"Bosphorus Bridge & Minarets"},weatherLabel:{es:"Brasa Dorada del Estrecho",en:"Bosphorus Golden Ember Wind"},skyTop:"#160b18",skyMid:"#31152e",skyBot:"#522338",winColor:"#fde047",accentColor:"#f59e0b",weather:"gusts",weatherArchetype:"golden_embers",windStrength:1.13,monument:"bosphorus"},{index:11,flag:"🇪🇬",name:{es:"El Cairo",en:"Cairo"},monumentName:{es:"Pirámides de Giza",en:"Pyramids of Giza"},weatherLabel:{es:"Tormenta de Polvo Dorado",en:"Golden Desert Dust Storm"},skyTop:"#1a0d04",skyMid:"#422009",skyBot:"#6b3610",winColor:"#fed7aa",accentColor:"#f97316",weather:"sand",weatherArchetype:"golden_embers",windStrength:1.2,monument:"pyramids"},{index:12,flag:"🇦🇪",name:{es:"Dubái",en:"Dubai"},monumentName:{es:"Aguja del Burj Khalifa (828m)",en:"Burj Khalifa Spire (828m)"},weatherLabel:{es:"Brasa Ámbar del Golfo",en:"Gulf Amber Thermal Dust"},skyTop:"#180d04",skyMid:"#361f09",skyBot:"#593310",winColor:"#fde047",accentColor:"#f59e0b",weather:"lasers",weatherArchetype:"golden_embers",windStrength:1.28,monument:"burjkhalifa"},{index:13,flag:"🇮🇳",name:{es:"Mumbai",en:"Mumbai"},monumentName:{es:"Puente Colgante Sea Link",en:"Bandra-Worli Sea Link"},weatherLabel:{es:"Lluvia Diagonal de Monzón",en:"Diagonal Monsoon Neon Rain"},skyTop:"#0b0620",skyMid:"#1c1042",skyBot:"#2f1b68",winColor:"#fbcfe8",accentColor:"#e879f9",weather:"monsoon",weatherArchetype:"cyber_rain",windStrength:1.35,monument:"sealink"},{index:14,flag:"🇹🇭",name:{es:"Bangkok",en:"Bangkok"},monumentName:{es:"Torre MahaNakhon Pixelada",en:"MahaNakhon Pixel Tower"},weatherLabel:{es:"Lluvia Eléctrica Tropical",en:"Tropical Neon Downpour"},skyTop:"#0c0622",skyMid:"#1e1148",skyBot:"#331c6e",winColor:"#fde047",accentColor:"#ec4899",weather:"lightning",weatherArchetype:"cyber_rain",windStrength:1.42,monument:"empire"},{index:15,flag:"🇸🇬",name:{es:"Singapur",en:"Singapore"},monumentName:{es:"3 Torres Marina Bay Sands",en:"Marina Bay Sands SkyPark"},weatherLabel:{es:"Lluvia Neón de la Bahía",en:"Marina Bay Cyber Rain"},skyTop:"#04091e",skyMid:"#0d1d45",skyBot:"#18346e",winColor:"#a5f3fc",accentColor:"#00f2fe",weather:"lasers",weatherArchetype:"cyber_rain",windStrength:1.5,monument:"marinabay"},{index:16,flag:"🇭🇰",name:{es:"Hong Kong",en:"Hong Kong"},monumentName:{es:"Bahía Victoria y Bank of China",en:"Victoria Harbour & Bank of China"},weatherLabel:{es:"Tifón Cyberpunk Neón",en:"Neon Cyberpunk Typhoon"},skyTop:"#040a1c",skyMid:"#0c2040",skyBot:"#153a66",winColor:"#6ee7b7",accentColor:"#00f2fe",weather:"typhoon",weatherArchetype:"cyber_rain",windStrength:1.58,monument:"hkharbor"},{index:17,flag:"🇰🇷",name:{es:"Seúl",en:"Seoul"},monumentName:{es:"Lotte World Tower Cyberpunk",en:"Lotte World Tower Cyberpunk"},weatherLabel:{es:"Lluvia Neón Cian/Magenta",en:"Cyan/Magenta Cyber Rain"},skyTop:"#050622",skyMid:"#12184f",skyBot:"#222d7a",winColor:"#7dd3fc",accentColor:"#f43f5e",weather:"cyber",weatherArchetype:"cyber_rain",windStrength:1.66,monument:"lotte"},{index:18,flag:"🇦🇺",name:{es:"Sídney",en:"Sydney"},monumentName:{es:"Ópera de Sídney y Harbour Bridge",en:"Sydney Opera House & Harbour Bridge"},weatherLabel:{es:"Ventisca Austral Oceánica",en:"Southern Ocean Gale Blizzard"},skyTop:"#040e21",skyMid:"#0b264f",skyBot:"#16427d",winColor:"#f1f5f9",accentColor:"#38bdf8",weather:"gusts",weatherArchetype:"blizzard",windStrength:1.75,monument:"opera"},{index:19,flag:"🇯🇵",name:{es:"Tokio",en:"Tokyo"},monumentName:{es:"Shinjuku Neón y Torre de Tokio",en:"Shinjuku Neon & Tokyo Tower"},weatherLabel:{es:"Tormenta Cyberpunk Final",en:"Ultimate Cyberpunk Neon Storm"},skyTop:"#090420",skyMid:"#1b0b45",skyBot:"#32146e",winColor:"#fda4af",accentColor:"#00f2fe",weather:"lightning",weatherArchetype:"cyber_rain",windStrength:1.85,monument:"tokyotower"}],ys=[{id:"skin_1",icon:"🧥",unlockLevel:1,unlockCity:1,gemCost:0,name:{es:"Urbano Callejero",en:"Street Urban"},desc:{es:"Buzo con capucha gris grafito oscuro que flamea con el viento, pantalón cargo negro y botas urbanas.",en:"Dark graphite hoodie fluttering in the wind, black cargo pants and urban boots."},hoodieColor:"#334155",pantsColor:"#0f172a",trimColor:"#94a3b8",shoeColor:"#e2e8f0",glowColor:null,goldTrail:!1},{id:"skin_2",icon:"🏃",unlockLevel:11,unlockCity:3,gemCost:150,name:{es:"Night Runner",en:"Night Runner"},desc:{es:"Rompevientos negro con tiras reflectivas blancas y calzado aerodinámico de alta visibilidad.",en:"Black windbreaker with white reflective strips and high-visibility aerodynamic footwear."},hoodieColor:"#111827",pantsColor:"#090d16",trimColor:"#f8fafc",shoeColor:"#38bdf8",glowColor:"#e2e8f0",goldTrail:!1},{id:"skin_3",icon:"⚡",unlockLevel:21,unlockCity:5,gemCost:300,name:{es:"Infiltrado Táctico",en:"Tactical Infiltrator"},desc:{es:"Campera técnica entallada negro mate con arnés y líneas de neón cian en talones y muñecas.",en:"Matte black fitted tactical jacket with harness and cyan neon lines on heels and wrists."},hoodieColor:"#0f172a",pantsColor:"#060a12",trimColor:"#22d3ee",shoeColor:"#06b6d4",glowColor:"#22d3ee",goldTrail:!1},{id:"skin_4",icon:"🎩",unlockLevel:36,unlockCity:8,gemCost:500,name:{es:"Ilusionista de Altura",en:"High-Wire Illusionist"},desc:{es:"Chaleco sastrero oscuro con detalles púrpura/plata, cinta reactiva al viento y guantes de precisión.",en:"Dark tailored vest with purple/silver accents, wind-reactive headband and precision gloves."},hoodieColor:"#1e1b2e",pantsColor:"#0d0b14",trimColor:"#c084fc",shoeColor:"#e2e8f0",glowColor:"#a855f7",goldTrail:!1},{id:"skin_5",icon:"🥷",unlockLevel:61,unlockCity:13,gemCost:800,name:{es:"Cyber-Shinobi Tokio",en:"Tokyo Cyber-Shinobi"},desc:{es:"Traje técnico oscuro con circuito carmesí luminoso en espalda y botas magnéticas.",en:"Dark technical shinobi suit with glowing crimson spine circuit and magnetic boots."},hoodieColor:"#14111a",pantsColor:"#09070d",trimColor:"#f43f5e",shoeColor:"#fb7185",glowColor:"#f43f5e",goldTrail:!1},{id:"skin_6",icon:"👑",unlockLevel:81,unlockCity:17,gemCost:1200,name:{es:"Leyenda Black & Gold",en:"Black & Gold Legend"},desc:{es:"Traje aerodinámico de fibra de carbono negro profundo con bordes dorados y estela luminosa.",en:"Deep black carbon-fiber aerodynamic suit with bright golden edges and luminous arm trail."},hoodieColor:"#09090b",pantsColor:"#050507",trimColor:"#fde047",shoeColor:"#f59e0b",glowColor:"#fde047",goldTrail:!0}],Ms=[{id:"balls",icon:"🎾",mult:1,unlockLevel:1,gemCost:0,name:{es:"Esferas Cromadas",en:"Chrome Spheres"},color:"#a3e635"},{id:"torches",icon:"🔥",mult:3,unlockLevel:6,gemCost:120,name:{es:"Antorchas de Fuego",en:"Fire Torches"},color:"#f97316"},{id:"knives",icon:"🔪",mult:6,unlockLevel:16,gemCost:260,name:{es:"Cuchillos Tácticos",en:"Tactical Knives"},color:"#cbd5e1"},{id:"chainsaws",icon:"🪚",mult:12,unlockLevel:31,gemCost:480,name:{es:"Motosierras",en:"Chainsaws"},color:"#ef4444"},{id:"dynamite",icon:"🧨",mult:25,unlockLevel:56,gemCost:750,name:{es:"Dinamita Activa",en:"Active Dynamite"},color:"#dc2626"},{id:"goldbars",icon:"🪙",mult:50,unlockLevel:81,gemCost:1100,name:{es:"Lingotes 24K",en:"24K Gold Bars"},color:"#fde047"}],v1=[{id:"pole",icon:"⚖️",maxLevel:10,baseCost:140,costScale:1.42,statLabel:{es:"-4.8% Gravedad / Nv",en:"-4.8% Gravity / Lvl"},name:{es:"Vara de Inercia",en:"Inertia Balance Pole"},desc:{es:"Aumenta el momento de inercia rotacional, desacelerando la caída gravitatoria lateral.",en:"Increases rotational moment of inertia, slowing down lateral gravitational tipping."}},{id:"boots",icon:"🥾",maxLevel:10,baseCost:160,costScale:1.45,statLabel:{es:"-5.2% Viento / Nv",en:"-5.2% Wind / Lvl"},name:{es:"Calzado Magnético",en:"Magnetic Footwear"},desc:{es:"Incrementa la adherencia al cable de acero, reduce el empuje del viento y acelera el paso.",en:"Increases grip on the steel cable, dampens wind gusts and speeds up walking pace."}},{id:"gloves",icon:"🧤",maxLevel:10,baseCost:150,costScale:1.42,statLabel:{es:"+1.5% Ventana / Nv",en:"+1.5% Catch Window / Lvl"},name:{es:"Guantes Rítmicos",en:"Rhythmic Gloves"},desc:{es:"Amplía la ventana dorada de captura (catchThreshold) y amortigua el sacudón por fallo.",en:"Widens the golden capture window (catchThreshold) and dampens balance jolts on a miss."}}],_1=v1,x1=[{id:"r1",name:"Kaito_Skywalker",flag:"🇯🇵",country:"🇯🇵",baseLp:14200,lp:14200,badge:"👑"},{id:"r2",name:"Elena_Vertigo",flag:"🇪🇸",country:"🇪🇸",baseLp:11850,lp:11850,badge:"💎"},{id:"r3",name:"Marcus_Highwire",flag:"🇺🇸",country:"🇺🇸",baseLp:9400,lp:9400,badge:"🔥"},{id:"r4",name:"Lucas_SP",flag:"🇧🇷",country:"🇧🇷",baseLp:7200,lp:7200,badge:"⚡"},{id:"r5",name:"Valeria_BA",flag:"🇦🇷",country:"🇦🇷",baseLp:4850,lp:4850,badge:"🌟"},{id:"r6",name:"Liam_London",flag:"🇬🇧",country:"🇬🇧",baseLp:2600,lp:2600,badge:"🎯"},{id:"r7",name:"Mateo_CDMX",flag:"🇲🇽",country:"🇲🇽",baseLp:1150,lp:1150,badge:"👟"}],S1=[{id:"tier_1",rankLabel:"TOP 25",icon:"🥉",requiredLp:500,gems:40,coins:1e3,gemsReward:40,coinsReward:1e3,title:{es:"Bronce Urbano",en:"Urban Bronze"}},{id:"tier_2",rankLabel:"TOP 10",icon:"🥈",requiredLp:1500,gems:90,coins:2500,gemsReward:90,coinsReward:2500,title:{es:"Plata de Altura",en:"High-Wire Silver"}},{id:"tier_3",rankLabel:"TOP 5",icon:"🥇",requiredLp:3500,gems:180,coins:6e3,gemsReward:180,coinsReward:6e3,title:{es:"Oro Acrobático",en:"Acrobatic Gold"}},{id:"tier_4",rankLabel:"TOP 3",icon:"💎",requiredLp:7e3,gems:350,coins:15e3,gemsReward:350,coinsReward:15e3,title:{es:"Platino sin Red",en:"No-Net Platinum"}},{id:"tier_5",rankLabel:"TOP 1",icon:"👑",requiredLp:12e3,gems:750,coins:35e3,gemsReward:750,coinsReward:35e3,title:{es:"Leyenda Inmortal",en:"Immortal Legend"}}],y1=[{id:"bundle_starter",icon:"⚡",coinCost:1500,gems:80,coins:1200,leaguePts:150,popular:!1,tag:"🎁 RECLAMAR",name:{es:"Cofre de Equilibrista",en:"Tightrope Chest"},perks:{es:["+80 💎 Gemas al instante","+150 🏆 Puntos de Liga","Recarga para Gancho Salvavidas"],en:["+80 💎 Instant Gems","+150 🏆 League Points","Grapple Hook Save refill"]}},{id:"bundle_pro",icon:"🔥",coinCost:4500,gems:260,coins:4e3,leaguePts:500,popular:!0,tag:"⭐ POPULAR",unlockProp:"torches",unlockSkin:"skin_2",badge:{es:"RECOMENDADO",en:"RECOMMENDED"},name:{es:"Cofre Maestro del Abismo",en:"Abyss Master Chest"},perks:{es:["+260 💎 Gemas","🔥 Desbloquea Antorchas de Fuego (x3)",'🏃 Desbloquea Aspecto "Night Runner"',"+500 🏆 Puntos de Liga"],en:["+260 💎 Gems","🔥 Unlocks Fire Torches (x3)",'🏃 Unlocks "Night Runner" Skin',"+500 🏆 League Points"]}},{id:"bundle_legend",icon:"👑",coinCost:12e3,gems:800,coins:12e3,leaguePts:1500,popular:!0,tag:"👑 ÉLITE",bootsBonus:5,unlockProp:"chainsaws",unlockSkin:"skin_6",badge:{es:"ÉLITE DE TEMPORADA",en:"SEASON ELITE"},name:{es:"Cofre Leyenda Black & Gold",en:"Black & Gold Legend Chest"},perks:{es:["+800 💎 Gemas","🥾 Calzado Magnético +5 Niveles","🪚 Desbloquea Motosierras (x12)",'👑 Desbloquea Aspecto "Leyenda Black & Gold"',"+1,500 🏆 Puntos de Liga"],en:["+800 💎 Gems","🥾 Magnetic Footwear +5 Levels","🪚 Unlocks Chainsaws (x12)",'👑 Unlocks "Black & Gold Legend" Skin',"+1,500 🏆 League Points"]}}],fa={es:{title:"NO MIRES ABAJO",gameTitle:"NO MIRES ABAJO",installApp:"📲 Instalar",iosInstallHint:'Para instalar en tu dispositivo: tocá el menú del navegador y seleccioná "Agregar a pantalla de inicio".',leagueBanner:"LIGA DE TEMPORADA",leagueBannerLabel:"🏆 LIGA DE TEMPORADA:",seasonEndsIn:"Cierre en",leaguePointsShort:"LP",multiplier:"MULTIPLICADOR",gems:"GEMAS",left:"IZQ",right:"DER",leftBtn:"IZQ",rightBtn:"DER",holdBalanceTapJuggle:"EQUILIBRIO / CAPTURA",grappleTitle:"GANCHO SALVAVIDAS",grappleCost:"SALVAR (20 💎)",grappleHookTitle:"GANCHO SALVAVIDAS",grappleHookCost:"SALVAR (20 💎)",addJuggle:"+ SUMAR MALABAR",citiesBtn:"20 Ciudades",armoryBtn:"Armería",shopBtn:"Cofres",pauseBtn:"PAUSA",playNowBtn:"▶ JUGAR / SALTAR AL CABLE",mapBtn:"🗺️ Mapa",skinsBtn:"Aspectos",gearBtn:"🎒 Armería",storeBtn:"🛒 Cofres",leagueBtn:"🏆 Liga",level:"Nivel",levelWord:"Nivel",cityWord:"Ciudad",windLabel:"VIENTO",windGustAlert:"⚠️ RÁFAGA DE VIENTO",nearMissPopup:"⚡ ¡SALVADA AL LÍMITE! +100",feverModeBadge:"🔥 MODO FRENESÍ x2",perfectCatchLabel:"¡PERFECTO!",goodCatchLabel:"¡BIEN!",onboardingTitle:"⚡ CREÁ TU PERFIL DE EQUILIBRISTA",onboardingSubtitle:"Elegí tu Nombre/Apodo y Bandera para registrarte en vivo en el Ranking Online de la Liga de Temporada.",onboardingNameLabel:"NOMBRE O APODO (2 A 16 CARACTERES)",onboardingNamePlaceholder:"Ej: Mauricio, Franco_99...",onboardingCountryLabel:"PAÍS / BANDERA",onboardingSaveCta:"GUARDAR Y ENTRAR AL JUEGO",editProfileTooltip:"Editar nombre o bandera",lossModalHeader:"🚨 ¡PERDISTE EL EJE DE GRAVEDAD EN EL METRO {meter}m DE {city} (NIVEL {level})!",lossModalSub:"Cámara lenta activada ({seconds}s antes de caer al abismo)...",grappleCta:"🪝 DISPARAR GANCHO SALVAVIDAS Y VOLVER AL CABLE (20 💎)",rooftopCleared:"🏁 ¡AZOTEA ALCANZADA!",levelCleared:"¡AZOTEA ALCANZADA!",bossChestTitle:"🎁 ¡COFRE DE JEFE DE CIUDAD DESBLOQUEADO!",nextLevel:"SIGUIENTE NIVEL",nextLevelBtn:"▶️ SIGUIENTE NIVEL",worldMapTitle:"🗺️ CAMPAÑA MUNDIAL — 20 CIUDADES (100 NIVELES)",skinsModalTitle:"🧥 TIENDA DE ASPECTOS URBANOS",skinsModalNote:"Equipá cualquier aspecto desbloqueado conservando el 100% de tus mejoras de Armería RPG.",equipBtn:"EQUIPAR",equippedBadge:"✓ EQUIPADO",unlockWithGems:"Desbloquear ({cost} 💎)",lockedAtLevel:"Nivel {level} o {cost} 💎",armoryTitle:"ARMERÍA RPG DE PRECISIÓN",armorySub:"Mejorá tu equipamiento técnico para dominar las ráfagas y la gravedad",maxLevelLabel:"NIVEL MÁXIMO (10/10)",upgradeBtn:"MEJORAR",gearModalTitle:"🎒 ARMERÍA RPG DE PRECISIÓN (NVL 1–10)",upgradeCoins:"Mejorar ({cost} 🪙)",upgradeGems:"Instantáneo (15 💎)",maxLevelReached:"NIVEL MÁXIMO (10/10)",leagueModalTitle:"LIGA DE TEMPORADA — CLASIFICACIÓN MUNDIAL",leagueModalSub:"Sumá Puntos de Liga (LP) superando niveles y encadenando capturas rítmicas perfectas para ganar Cofres Épicos de Gemas y Monedas.",leagueModalDesc:"Sumá Puntos de Liga (LP) superando niveles, encadenando capturas rítmicas perfectas y abriendo Cofres de Jefe de Ciudad.",yourLeaguePoints:"🏆 Tus Puntos de Liga:",claimRewardBtn:"🎁 Reclamar Cofre",claimedBadge:"✓ Reclamado",shopTitle:"TIENDA DE COFRES DE TEMPORADA",shopSub:"Obtené Cofres de Gemas y Monedas para desbloquear Aspectos, Objetos y Ganchos Salvavidas.",storeModalTitle:"🛒 TIENDA DE COFRES Y EQUIPAMIENTO",storeModalSubtitle:"Canjeá tus Monedas ganadas en el cable por Cofres de Temporada, Gemas y Objetos Especiales.",exchangeCoinsBtn:"Canjear por {cost} 🪙",freeDailyGemsBtn:"🎁 Reclamar +25 💎 de Bonificación Diaria",dailyClaimedMsg:"✅ ¡Bonificación acreditada!",lobbySubtitle:"📍 Nivel {level}/100 — {flag} {city} ({meters}m)",lobbyCitiesBtn:"🗺️ 20 Ciudades (1-100)",lobbyGearSkinsBtn:"🎒 Armería y Skins",lobbyLeagueBtn:"🏆 Liga de Temporada",lobbyPlayCta:"▶️ JUGAR / SALTAR AL CABLE",pauseBtnLabel:"⏸️ PAUSA",pauseTitle:"PARTIDA EN PAUSA",pauseSub:"Tomate un respiro sobre el cable antes de continuar hacia la meta.",pauseModalTitle:"⏸️ PARTIDA EN PAUSA",pauseProgressInfo:"📍 {flag} {city} • Nivel {level} ({meter}m / {target}m)",resumeBtn:"REANUDAR PARTIDA",restartBtn:"REINICIAR NIVEL",resumeGameBtn:"▶️ REANUDAR PARTIDA",restartLevelBtn:"🔄 REINICIAR NIVEL",openGearSkinsFromPauseBtn:"🎒 ABRIR ARMERÍA / CAMBIAR ASPECTO",backToLobbyBtn:"VOLVER AL MENÚ PRINCIPAL",mainMenuShortBtn:"🏠 Menú Principal",retryFromZeroBtn:"🔄 Reintentar desde 0m",fellTitle:"¡PERDISTE EL EQUILIBRIO!",fellSub:"Estabas a pocos metros de alcanzar la azotea de enfrente",continueHook:"USAR GANCHO SALVAVIDAS (20 💎)",retryFree:"REINTENTAR DESDE 0m",tabEquipment:"🎒 Armería RPG (1-10)",tabSkins:"🧥 Aspectos (6 Skins)",youLabel:"TÚ (Equilibrista)"},en:{title:"DON'T LOOK DOWN",gameTitle:"DON'T LOOK DOWN",installApp:"📲 Install",iosInstallHint:'To install on your device: tap the browser menu and select "Add to Home Screen".',leagueBanner:"SEASON LEAGUE",leagueBannerLabel:"🏆 SEASON LEAGUE:",seasonEndsIn:"Ends in",leaguePointsShort:"LP",multiplier:"MULTIPLIER",gems:"GEMS",left:"LEFT",right:"RIGHT",leftBtn:"LEFT",rightBtn:"RIGHT",holdBalanceTapJuggle:"BALANCE / CATCH",grappleTitle:"GRAPPLE HOOK SAVE",grappleCost:"SAVE (20 💎)",grappleHookTitle:"GRAPPLE HOOK",grappleHookCost:"SAVE (20 💎)",addJuggle:"+ ADD JUGGLE",citiesBtn:"20 Cities",armoryBtn:"Armory",shopBtn:"Chests",pauseBtn:"PAUSE",playNowBtn:"▶ PLAY / STEP ON THE WIRE",mapBtn:"🗺️ Map",skinsBtn:"Skins",gearBtn:"🎒 Armory",storeBtn:"🛒 Chests",leagueBtn:"🏆 League",level:"Level",levelWord:"Level",cityWord:"City",windLabel:"WIND",windGustAlert:"⚠️ WIND GUST",nearMissPopup:"⚡ EDGE SAVE! +100",feverModeBadge:"🔥 FEVER MODE x2",perfectCatchLabel:"PERFECT!",goodCatchLabel:"NICE!",onboardingTitle:"⚡ CREATE YOUR TIGHTROPE PROFILE",onboardingSubtitle:"Choose your Nickname & Country Flag to register live on the Season League Online Leaderboard.",onboardingNameLabel:"NICKNAME (2 TO 16 CHARACTERS)",onboardingNamePlaceholder:"Ex: Mauricio, Franco_99...",onboardingCountryLabel:"COUNTRY / FLAG",onboardingSaveCta:"SAVE & ENTER THE GAME",editProfileTooltip:"Edit nickname or flag",lossModalHeader:"🚨 YOU LOST YOUR CENTER OF GRAVITY AT METER {meter}m OF {city} (LEVEL {level})!",lossModalSub:"Slow-motion activated ({seconds}s before falling into the abyss)...",grappleCta:"🪝 FIRE GRAPPLE HOOK SAVE & RETURN TO WIRE (20 💎)",rooftopCleared:"🏁 ROOFTOP REACHED!",levelCleared:"ROOFTOP REACHED!",bossChestTitle:"🎁 CITY BOSS CHEST UNLOCKED!",nextLevel:"NEXT LEVEL",nextLevelBtn:"▶️ NEXT LEVEL",worldMapTitle:"🗺️ WORLD CAMPAIGN — 20 CITIES (100 LEVELS)",skinsModalTitle:"🧥 URBAN SKIN SHOP",skinsModalNote:"Equip any unlocked skin while keeping 100% of your RPG Armory upgrades.",equipBtn:"EQUIP",equippedBadge:"✓ EQUIPPED",unlockWithGems:"Unlock ({cost} 💎)",lockedAtLevel:"Level {level} or {cost} 💎",armoryTitle:"PRECISION RPG ARMORY",armorySub:"Upgrade your technical gear to master wind gusts and gravity",maxLevelLabel:"MAX LEVEL (10/10)",upgradeBtn:"UPGRADE",gearModalTitle:"🎒 PRECISION RPG ARMORY (LVL 1–10)",upgradeCoins:"Upgrade ({cost} 🪙)",upgradeGems:"Instant (15 💎)",maxLevelReached:"MAX LEVEL (10/10)",leagueModalTitle:"SEASON LEAGUE — GLOBAL LEADERBOARD",leagueModalSub:"Earn League Points (LP) by clearing levels and chaining rhythmic catches to win Epic Gem & Coin Chests.",leagueModalDesc:"Earn League Points (LP) by clearing levels, chaining rhythmic catches and unlocking City Boss Chests.",yourLeaguePoints:"🏆 Your League Points:",claimRewardBtn:"🎁 Claim Chest",claimedBadge:"✓ Claimed",shopTitle:"SEASON CHEST SHOP",shopSub:"Claim Gem & Coin Chests to unlock Skins, Juggling Props and Grapple Hook Saves.",storeModalTitle:"🛒 CHEST & GEAR SHOP",storeModalSubtitle:"Exchange Coins earned on the wire for Season Chests, Gems and Special Props.",exchangeCoinsBtn:"Exchange for {cost} 🪙",freeDailyGemsBtn:"🎁 Claim +25 💎 Daily Bonus",dailyClaimedMsg:"✅ Bonus credited!",lobbySubtitle:"📍 Level {level}/100 — {flag} {city} ({meters}m)",lobbyCitiesBtn:"🗺️ 20 Cities (1-100)",lobbyGearSkinsBtn:"🎒 Armory & Skins",lobbyLeagueBtn:"🏆 Season League",lobbyPlayCta:"▶️ PLAY / STEP ON THE WIRE",pauseBtnLabel:"⏸️ PAUSE",pauseTitle:"GAME PAUSED",pauseSub:"Take a breath on the high wire before continuing to the target roof.",pauseModalTitle:"⏸️ GAME PAUSED",pauseProgressInfo:"📍 {flag} {city} • Level {level} ({meter}m / {target}m)",resumeBtn:"RESUME GAME",restartBtn:"RESTART LEVEL",resumeGameBtn:"▶️ RESUME GAME",restartLevelBtn:"🔄 RESTART LEVEL",openGearSkinsFromPauseBtn:"🎒 OPEN ARMORY / CHANGE SKIN",backToLobbyBtn:"BACK TO MAIN MENU",mainMenuShortBtn:"🏠 Main Menu",retryFromZeroBtn:"🔄 Retry from 0m",fellTitle:"YOU LOST YOUR BALANCE!",fellSub:"You were just meters away from reaching the opposite rooftop",continueHook:"USE GRAPPLE HOOK SAVE (20 💎)",retryFree:"RETRY FROM 0m",tabEquipment:"🎒 RPG Armory (1-10)",tabSkins:"🧥 Skins (6 Outfits)",youLabel:"YOU (Tightrope Walker)"}};for(let s=0;s<_o.length;s++){const e=_o[s];e.id=e.id||`city_${e.index}`,e.landmark=e.landmark||e.monumentName,e.accent=e.accent||e.accentColor,e.windowColor=e.windowColor||e.winColor,e.landmarkType=e.landmarkType||e.monument}const M1=[1,1.2,1.5,2,3,5];for(let s=0;s<ys.length;s++){const e=ys[s];e.bonusMult=e.bonusMult||M1[s]||1,e.cost=e.cost??e.gemCost??0,e.currency=e.currency||"gems",e.coatColor=e.coatColor||e.hoodieColor}for(let s=0;s<Ms.length;s++){const e=Ms[s];e.cost=e.cost??e.gemCost??0,e.currency=e.currency||"gems",e.primaryColor=e.primaryColor||e.color,e.glowColor=e.glowColor||e.color}function mg(){const s=new Date,e=new Date(s.getFullYear(),s.getMonth()+1,0,23,59,59),t=Math.max(0,e.getTime()-s.getTime()),r=Math.floor(t/(1e3*60*60*24)),o=Math.floor(t/(1e3*60*60)%24),l=Math.floor(t/1e3/60%60),u=Math.floor(t/1e3%60);return{days:r,hours:o,mins:l,secs:u}}function i0(s){const e=Math.max(1,Math.min(100,s||1));return e<=3?1:e<=10?Number((1.25+(e-4)/6*.2).toFixed(3)):e<=25?Number((1.5+(e-11)/14*.25).toFixed(3)):e<=50?Number((1.8+(e-26)/24*.3).toFixed(3)):Number((2.15+(e-51)/49*.45).toFixed(3))}function E1(s){const e=Math.max(1,Math.min(100,s||1)),t=i0(e),r=100+(e-1)*5;return Math.round(r*t)}function bd(s){const e=Math.max(1,Math.min(100,s||1)),t=Math.min(19,Math.max(0,Math.floor((e-1)/5))),r=_o[t],o=(e-1)%5+1,l=i0(e),u=5,f=Number((u*l).toFixed(3)),h=E1(e),p=e<4?0:Number((l*(1+(e-4)*.018)).toFixed(3)),v=Number((l*1.15).toFixed(3)),S=Number((.62*v).toFixed(3)),g=Number(Math.max(.14,.28-(e-1)/99*.14).toFixed(4)),M=e<4?6:Number(Math.max(4.5,6-(e-4)/96*1.5).toFixed(2)),w=.32+r.windStrength*.45+o*.045,R=1.08+e/100*.92,x=e<=15?2:e<=55?3:4;return{level:e,cityIndex:t,city:r,stageInCity:o,walkSpeedMultiplier:l,baseWalkSpeed:u,walkSpeed:f,totalDistance:h,targetMeters:h,targetDistance:h,difficultyFactor:p,juggleSpeedMultiplier:v,juggleBaseSpeed:S,catchWindow:g,gravityFactor:R,windMax:w,windChangeFreq:M,windBaseForce:w,gravityInstability:R,defaultObjects:x}}const gg=[523.25,587.33,659.25,783.99,880,1046.5];class w1{constructor(){this.ctx=null,this.muted=!1,this.lastHeartbeat=0,this.noiseBuffer=null}get enabled(){return!this.muted}set enabled(e){this.muted=!e}init(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}if(this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{}),this.ctx&&!this.noiseBuffer){const e=this.ctx.sampleRate||44100,t=Math.floor(e*1.1),r=this.ctx.createBuffer(1,t,e),o=r.getChannelData(0);for(let l=0;l<t;l++)o[l]=Math.random()*2-1;this.noiseBuffer=r}}playCatchSound(e=1,t=!1){if(t&&typeof navigator<"u"&&navigator.vibrate?navigator.vibrate(12):!t&&typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(8),this.muted||(this.init(),!this.ctx))return;const r=this.ctx.currentTime,o=Math.max(0,(e-1)%gg.length),l=e>=12?1.25:1,u=gg[o]*l,f=this.ctx.createOscillator(),h=this.ctx.createOscillator(),p=this.ctx.createGain();if(f.type="triangle",h.type="sine",f.frequency.setValueAtTime(u,r),h.frequency.setValueAtTime(u,r),p.gain.setValueAtTime(.001,r),p.gain.linearRampToValueAtTime(.18,r+.015),p.gain.exponentialRampToValueAtTime(.06,r+.07),p.gain.exponentialRampToValueAtTime(.001,r+.18),f.connect(p),h.connect(p),p.connect(this.ctx.destination),f.start(r),h.start(r),f.stop(r+.19),h.stop(r+.19),t){const v=this.ctx.createOscillator(),S=this.ctx.createGain();v.type="sine",v.frequency.setValueAtTime(u*2,r),v.frequency.exponentialRampToValueAtTime(u*2.04,r+.18),S.gain.setValueAtTime(.001,r),S.gain.linearRampToValueAtTime(.14,r+.012),S.gain.exponentialRampToValueAtTime(.001,r+.18),v.connect(S),S.connect(this.ctx.destination),v.start(r),v.stop(r+.19)}}playCatch(e=1,t=!1){this.playCatchSound(e,t)}playWindGust(){if(this.muted||(this.init(),!this.ctx||!this.noiseBuffer))return;const e=this.ctx.currentTime,t=this.ctx.createBufferSource();t.buffer=this.noiseBuffer;const r=this.ctx.createBiquadFilter();r.type="bandpass",r.Q.setValueAtTime(6.5,e),r.frequency.setValueAtTime(310,e),r.frequency.exponentialRampToValueAtTime(920,e+.42),r.frequency.exponentialRampToValueAtTime(380,e+.95);const o=this.ctx.createGain();o.gain.setValueAtTime(.001,e),o.gain.linearRampToValueAtTime(.22,e+.18),o.gain.exponentialRampToValueAtTime(.001,e+.98),t.connect(r),r.connect(o),o.connect(this.ctx.destination),t.start(e),t.stop(e+1)}playHeartbeatIfDanger(e){if(e-this.lastHeartbeat<420||(this.lastHeartbeat=e,typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(20),this.muted)||(this.init(),!this.ctx))return;const t=this.ctx.currentTime,r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(65,t),r.frequency.exponentialRampToValueAtTime(42,t+.14),o.gain.setValueAtTime(.24,t),o.gain.exponentialRampToValueAtTime(.001,t+.16),r.connect(o),o.connect(this.ctx.destination),r.start(t),r.stop(t+.17)}playNearMissSave(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([15,25,15]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=[587.33,783.99,1046.5];for(let r=0;r<t.length;r++){const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(t[r],e+r*.045),l.gain.setValueAtTime(.14,e+r*.045),l.gain.exponentialRampToValueAtTime(.001,e+r*.045+.22),o.connect(l),l.connect(this.ctx.destination),o.start(e+r*.045),o.stop(e+r*.045+.23)}}playLevelWin(){this.playVictory()}playVictory(){if(this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=[523.25,659.25,783.99,1046.5];for(let r=0;r<t.length;r++){const o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="triangle",o.frequency.setValueAtTime(t[r],e+r*.085),l.gain.setValueAtTime(.17,e+r*.085),l.gain.exponentialRampToValueAtTime(.001,e+r*.085+.38),o.connect(l),l.connect(this.ctx.destination),o.start(e+r*.085),o.stop(e+r*.085+.4)}}playFall(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([90,45,140]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=[0,.18,.36],r=[.22,.11,.055];for(let o=0;o<t.length;o++){const l=t[o],u=this.ctx.createOscillator(),f=this.ctx.createGain();u.type="sawtooth",u.frequency.setValueAtTime(440-o*45,e+l),u.frequency.exponentialRampToValueAtTime(68,e+l+.78),f.gain.setValueAtTime(r[o],e+l),f.gain.exponentialRampToValueAtTime(.001,e+l+.82),u.connect(f),f.connect(this.ctx.destination),u.start(e+l),u.stop(e+l+.84)}}playGrapple(){if(typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([30,25,65]),this.muted||(this.init(),!this.ctx))return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),r=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(220,e),t.frequency.exponentialRampToValueAtTime(980,e+.3),r.gain.setValueAtTime(.2,e),r.gain.exponentialRampToValueAtTime(.001,e+.34),t.connect(r),r.connect(this.ctx.destination),t.start(e),t.stop(e+.36)}}const Xt=new w1,r0="NO_MIRES_ABAJO_PLAYSTORE_V3",s0="nma_online_leaderboard_v1",ts=.82;function Jr(s){if(typeof s!="string")return!1;const e=s.trim();return!e||e==="TÚ (Equilibrista)"||e==="YOU (Tightrope Pro)"||e==="YOU (Tightrope Walker)"?!1:e.replace(/\s+/g,"").length>=2&&e.length<=16}function Rd(){try{const s=localStorage.getItem("nma_player_id");if(s&&s.trim().length>0)return s.trim();const e=typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():"nma_"+Array.from({length:16},()=>Math.floor(Math.random()*16).toString(16)).join("")+"_"+Date.now().toString(16);return localStorage.setItem("nma_player_id",e),e}catch{return"nma_"+Date.now().toString(16)}}function T1(s){try{const e=localStorage.getItem("nma_profile_completed")==="true",t=localStorage.getItem("nma_player_name")||(s==null?void 0:s.playerName)||"",r=localStorage.getItem("nma_player_country")||(s==null?void 0:s.playerCountry)||"AR",o=localStorage.getItem("nma_player_id")||(s==null?void 0:s.playerId)||"",l=e&&Jr(t),u=Zr(r);return{needsOnboarding:!l,playerId:o,playerName:l?t.trim():"",playerCountry:u.code}}catch{return{needsOnboarding:!0,playerId:"",playerName:"",playerCountry:"AR"}}}function Cd(){try{const s=localStorage.getItem(s0);if(!s)return[];const e=JSON.parse(s);return Array.isArray(e)?e:[]}catch{return[]}}function A1(){return new Yi({uniforms:{uBaseColor:{value:new Ft(395278)},uRimColor:{value:new Ft(62206)},uRimPower:{value:2.15},uRimStrength:{value:.96}},vertexShader:`
      varying vec3 vNormal;
      varying vec3 vViewDir;
      void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vNormal = normalize(normalMatrix * normal);
        vViewDir = normalize(-mvPosition.xyz);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,fragmentShader:`
      uniform vec3 uBaseColor;
      uniform vec3 uRimColor;
      uniform float uRimPower;
      uniform float uRimStrength;
      varying vec3 vNormal;
      varying vec3 vViewDir;
      void main() {
        float ndotv = clamp(dot(normalize(vNormal), normalize(vViewDir)), 0.0, 1.0);
        float fresnel = pow(1.0 - ndotv, uRimPower);
        float rim = smoothstep(0.22, 0.86, fresnel) * uRimStrength;
        vec3 finalCol = mix(uBaseColor, uRimColor, rim);
        gl_FragColor = vec4(finalCol, 1.0);
      }
    `})}function b1(){const s=document.createElement("canvas");s.width=256,s.height=512;const e=s.getContext("2d"),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#030712"),t.addColorStop(.22,"#07162c"),t.addColorStop(.44,"#0c2d48"),t.addColorStop(.56,"#145374"),t.addColorStop(.64,"#0ea5e9"),t.addColorStop(.72,"#0c2d48"),t.addColorStop(1,"#030712"),e.fillStyle=t,e.fillRect(0,0,256,512);const r=e.createRadialGradient(128,305,10,128,305,135);return r.addColorStop(0,"rgba(0, 242, 254, 0.52)"),r.addColorStop(.45,"rgba(14, 165, 233, 0.26)"),r.addColorStop(1,"rgba(7, 22, 44, 0.0)"),e.fillStyle=r,e.fillRect(0,0,256,512),new uc(s)}function R1(){const s=document.createElement("canvas");s.width=64,s.height=128;const e=s.getContext("2d"),t=e.createLinearGradient(0,0,64,0);t.addColorStop(0,"#0f172a"),t.addColorStop(.35,"#475569"),t.addColorStop(.5,"#e2e8f0"),t.addColorStop(.65,"#334155"),t.addColorStop(1,"#090d16"),e.fillStyle=t,e.fillRect(0,0,64,128),e.strokeStyle="#06080e",e.lineWidth=5;for(let o=-32;o<160;o+=16)e.beginPath(),e.moveTo(0,o),e.lineTo(64,o+24),e.stroke(),e.strokeStyle="rgba(0, 242, 254, 0.85)",e.lineWidth=2,e.beginPath(),e.moveTo(0,o+5),e.lineTo(64,o+29),e.stroke(),e.strokeStyle="#06080e",e.lineWidth=5;const r=new uc(s);return r.wrapS=bs,r.wrapT=bs,r.repeat.set(1,720),r}function vg(s=!1){const e=document.createElement("canvas");e.width=128,e.height=256;const t=e.getContext("2d");t.fillStyle=s?"#081c30":"#051020",t.fillRect(0,0,128,256);const r=8,o=26,l=128/r,u=256/o;for(let h=0;h<o;h++)for(let p=0;p<r;p++){const v=(h*37+p*19)%29;v<(s?18:12)||(v%5===0?t.fillStyle=s?"rgba(0, 242, 254, 0.35)":"rgba(0, 242, 254, 0.72)":v%7===0?t.fillStyle=s?"rgba(253, 224, 71, 0.28)":"rgba(253, 224, 71, 0.62)":t.fillStyle=s?"rgba(125, 211, 252, 0.25)":"rgba(186, 230, 253, 0.45)",t.fillRect(p*l+3,h*u+2,l-6,u-4))}const f=new uc(e);return f.wrapS=bs,f.wrapT=bs,f}function C1(){const s=document.createElement("canvas");s.width=256,s.height=256;const e=s.getContext("2d");return e.fillStyle="#060c18",e.fillRect(0,0,256,256),e.strokeStyle="#00f2fe",e.lineWidth=10,e.beginPath(),e.arc(128,128,102,0,Math.PI*2),e.stroke(),e.strokeStyle="#fde047",e.lineWidth=5,e.beginPath(),e.arc(128,128,84,0,Math.PI*2),e.stroke(),e.fillStyle="#00f2fe",e.font="900 110px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText("H",128,132),new uc(s)}function P1(s){const e=s.clientWidth||420,t=s.clientHeight||780,r=new j_;r.background=new Ft(398118),r.fog=new Nf(664121,.011);const o=new hi(58,e/t,.1,600);o.position.set(0,3.4,6.2),o.lookAt(0,1.65,-15);const l=new g1({antialias:!0,powerPreference:"high-performance"});l.setSize(e,t),l.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),l.toneMapping=Mf,l.toneMappingExposure=1.22,s.innerHTML="",s.appendChild(l.domElement);const u=new gx(3718648,.85);r.add(u);const f=new mx(62206,1.65);f.position.set(0,28,-65),r.add(f);const h=new Wm(62206,3.8,22);h.position.set(0,1.35,0),r.add(h);const p=new Wm(16638023,4.2,24);p.position.set(0,2.5,-.3),r.add(p);const v=b1(),S=new _a(340,220),g=new mn({map:v,fog:!1,depthWrite:!1}),M=new yt(S,g);M.position.set(0,12,-210),r.add(M);const w=1800,R=R1(),x=new Ai(.042,.042,w,16);x.rotateX(Math.PI/2);const _=new xd({color:13358561,map:R,metalness:.9,roughness:.18,emissive:62206,emissiveIntensity:.38}),N=new yt(x,_);N.position.set(0,0,-w*.5+12),r.add(N);const W=new Ai(.015,.015,w,8);W.rotateX(Math.PI/2);const C=new mn({color:62206,transparent:!0,opacity:.72}),I=new yt(W,C);I.position.set(0,.022,-w*.5+12),r.add(I);const L=new xd({color:330002,roughness:.8,metalness:.2}),k=new ri(7.2,60,7),E=new yt(k,L);E.position.set(0,-30.045,3.5),r.add(E);const P=new Tn,z=new ri(9.2,70,9.2),j=new yt(z,L);j.position.set(0,-35.045,0),P.add(j);const $=C1(),ee=new _a(7,7);ee.rotateX(-Math.PI/2);const V=new mn({map:$}),te=new yt(ee,V);te.position.set(0,.01,0),P.add(te);const pe=new fo(3.4,.075,12,36);pe.rotateX(Math.PI/2);const re=new mn({color:62206}),Q=new yt(pe,re);Q.position.set(0,.12,0),P.add(Q),P.position.set(0,0,-100),r.add(P);const Z=vg(!1),J=vg(!0),D=new xd({color:464166,map:Z,emissive:959977,emissiveMap:Z,emissiveIntensity:.58,roughness:.5,metalness:.4}),le=new mn({color:729657,map:J}),Ee=new mn({color:1128020}),Ze=new mn({color:62206,transparent:!0,opacity:.35}),Xe=[];for(let ye=0;ye<44;ye++){const ke=ye%2===0,Ce=ye%3,at=Math.floor(ye/2),bt=6.5+ye%4*2.1+Ce*2.2,Ct=6.5+ye*3%4*1.8,wt=72+ye*13%42+Ce*16,qt=new ri(bt,wt,Ct),ze=Ce===0?D:Ce===1?le:Ee,Jt=new yt(qt,ze),Bt=Ce===0?12.2+ye%3*2.8:Ce===1?21.5+ye%3*4.2:32+ye%4*5,Rn=(ke?-1:1)*Bt,Pt=10-at*13,ai=-60+wt*.5;if(Jt.position.set(Rn,ai,Pt),Ce===0){const Ci=new ri(.12,wt,.12),zt=new yt(Ci,Ze);zt.position.set(ke?bt*.5+.04:-bt*.5-.04,0,Ct*.5),Jt.add(zt)}r.add(Jt),Xe.push(Jt)}const qe=[],oe=new Uf(5.5,115,20,1,!0);for(let ye=0;ye<10;ye++){const ke=ye%2===0,Ce=new mn({color:ye%3===0?62206:959977,transparent:!0,opacity:ye%3===0?.11:.075,side:tr,depthWrite:!1,blending:Qi}),at=new yt(oe,Ce),bt=(ke?-1:1)*(8.5+ye%3*4.5),Ct=-18-ye*24;at.position.set(bt,8,Ct),at.rotation.z=(ke?-1:1)*.24,r.add(at),qe.push({mesh:at,mat:Ce,baseAngle:(ke?-1:1)*.24,speed:.45+ye%4*.18,phaseOffset:ye*1.1})}const he=[],be=new ri(.4,.18,2.2),Qe=new mn({color:62206}),Ge=new mn({color:15680580});for(let ye=0;ye<20;ye++){const ke=ye%2===0,Ce=new yt(be,ke?Ge:Qe),at=(ye%4-1.5)*2.1;Ce.position.set(at,-36,-ye*12),r.add(Ce),he.push({mesh:Ce,speed:(ke?-1:1)*(15+ye%4*3.5)})}const dt=220,pt=new Float32Array(dt*3);for(let ye=0;ye<dt;ye++)pt[ye*3+0]=(Math.random()-.5)*28,pt[ye*3+1]=-6+Math.random()*20,pt[ye*3+2]=6-Math.random()*55;const ft=new Bn;ft.setAttribute("position",new Xi(pt,3));const Rt=new Hg({color:62206,size:.14,transparent:!0,opacity:.65,blending:Qi,depthWrite:!1}),Lt=new rx(ft,Rt);r.add(Lt);const xt=new Tn;xt.position.set(0,0,0),r.add(xt);const St=A1(),Yt=new mn({color:62206}),tn=ye=>{const ke=new Tn;ke.position.set(ye?-.08:.08,.88,0);const Ce=new Ss(.064,.34,10,18),at=new yt(Ce,St);at.position.set(ye?.018:-.018,-.19,0),at.rotation.z=ye?.05:-.05,ke.add(at);const bt=new Tn;bt.position.set(ye?.035:-.035,-.41,0),ke.add(bt);const Ct=new Ss(.05,.34,10,18),wt=new yt(Ct,St);wt.position.set(ye?.02:-.02,-.2,0),wt.rotation.z=ye?.04:-.04,bt.add(wt);const qt=new Tn;qt.position.set(ye?.035:-.035,-.43,0),bt.add(qt);const ze=new Ss(.042,.14,8,14);ze.rotateX(Math.PI/2);const Jt=new yt(ze,St);return Jt.position.set(0,-.01,-.025),qt.add(Jt),{hipGroup:ke,kneeGroup:bt,bootGroup:qt}},It=tn(!0),mt=tn(!1);xt.add(It.hipGroup),xt.add(mt.hipGroup);const q=new Tn;xt.add(q);const jt=new Ai(.135,.12,.15,18);jt.scale(1.15,1,.72);const Oe=new yt(jt,St);Oe.position.set(0,.89,0),q.add(Oe);const b=new Tn;b.position.set(0,.95,0),q.add(b);const y=new Ai(.165,.125,.24,18);y.scale(1.18,1,.68);const O=new yt(y,St);O.position.set(0,.12,0),b.add(O);const se=new Ai(.215,.162,.28,20);se.scale(1.24,1,.68);const de=new yt(se,St);de.position.set(0,.35,0),b.add(de);const Te=new ri(.036,.38,.024),Ne=new mn({color:62206,transparent:!0,opacity:.45}),ge=new yt(Te,Ne);ge.position.set(0,.26,.13),b.add(ge);const _e=new Mr(.078,16,16),De=new yt(_e,St);De.position.set(-.255,.45,0),b.add(De);const $e=new yt(_e,St);$e.position.set(.255,.45,0),b.add($e);const Ue=new Ai(.05,.06,.1,14),Re=new yt(Ue,St);Re.position.set(0,.54,0),b.add(Re);const Ye=new Tn;Ye.position.set(0,.67,0),b.add(Ye);const tt=new Mr(.118,24,24);tt.scale(.95,1.06,1.02);const ht=new yt(tt,St);Ye.add(ht);const G=new fo(.116,.016,12,28);G.rotateX(Math.PI/2);const Le=new yt(G,Yt);Le.position.set(0,.025,0),Ye.add(Le);const ve=new Tn;ve.position.set(0,.022,.118),Ye.add(ve);const Fe=new ri(.16,.028,.008);Fe.translate(.08,0,0);const Be=new yt(Fe,Yt);ve.add(Be);const Se=new Tn;Se.position.set(.155,0,0),Be.add(Se);const rt=new ri(.16,.024,.007);rt.translate(.08,0,0);const Je=new yt(rt,Yt);Se.add(Je);const Dt=new Tn;Dt.position.set(.155,0,0),Je.add(Dt);const Ut=new ri(.15,.018,.006);Ut.translate(.075,0,0);const vn=new yt(Ut,Yt);Dt.add(vn);const Dn=ye=>{const ke=new Tn;ke.position.set(ye?-.255:.255,.44,0);const Ce=new Ss(.048,.22,10,16),at=new yt(Ce,St);at.position.set(ye?-.08:.08,-.11,-.02),at.rotation.z=ye?-.56:.56,ke.add(at);const bt=new Tn;bt.position.set(ye?-.16:.16,-.21,-.04),ke.add(bt);const Ct=new Ss(.042,.21,10,16),wt=new yt(Ct,St);wt.position.set(ye?-.07:.07,-.04,-.09),wt.rotation.x=.72,wt.rotation.z=ye?-.45:.45,bt.add(wt);const qt=new Mr(.046,14,14),ze=new yt(qt,St);return ze.position.set(ye?-.14:.14,-.08,-.18),bt.add(ze),{shoulderGroup:ke,elbowGroup:bt,handMesh:ze}},mi=Dn(!0),gi=Dn(!1);b.add(mi.shoulderGroup),b.add(gi.shoulderGroup);const Mn=new Tn;Mn.position.set(0,.17,-.2),b.add(Mn);const $n=4,br=new Ai(.018,.018,$n,16);br.rotateZ(Math.PI/2);const or=new mn({color:14742270}),lr=new yt(br,or);Mn.add(lr);const _n=new Ai(.052,.052,$n,14);_n.rotateZ(Math.PI/2);const vi=new mn({color:62206,transparent:!0,opacity:.42,blending:Qi,depthWrite:!1}),U=new yt(_n,vi);Mn.add(U);const xe=new Mr(.055,14,14),Ve=new yt(xe,Yt);Ve.position.set(-$n*.5,0,0),Mn.add(Ve);const Me=new yt(xe,Yt);Me.position.set($n*.5,0,0),Mn.add(Me);const _t=new Float32Array(6),X=new Bn;X.setAttribute("position",new Xi(_t,3));const nn=new Vg({color:62206,linewidth:3}),Tt=new ix(X,nn);Tt.visible=!1,r.add(Tt);const kt=new Ai(.04,.04,1,10),Ri=new mn({color:62206,transparent:!0,opacity:.85,blending:Qi,depthWrite:!1}),on=new yt(kt,Ri);on.visible=!1,r.add(on);const Zt=new fo(.14,.012,10,28),A=new mn({color:62206,transparent:!0,opacity:.55,blending:Qi}),H=new mn({color:62206,transparent:!0,opacity:.55,blending:Qi}),ue=new yt(Zt,A),ne=new yt(Zt,H);r.add(ue),r.add(ne);const ie=new Mr(.12,24,24),je=new Mr(.24,16,16),He=new Mr(.072,12,12),We=new mn({color:16710083}),it=new mn({color:16638023,transparent:!0,opacity:.52,blending:Qi,depthWrite:!1}),nt=[];for(let ye=0;ye<4;ye++){const ke=new Tn,Ce=new yt(ie,We),at=new yt(je,it);ke.add(Ce),ke.add(at),r.add(ke);const bt=[];for(let Ct=0;Ct<7;Ct++){const wt=new mn({color:Ct<3?16638023:16096779,transparent:!0,opacity:.68-Ct*.085,blending:Qi,depthWrite:!1}),qt=new yt(He,wt),ze=1-Ct*.12;qt.scale.set(ze,ze,ze),r.add(qt),bt.push(qt)}nt.push({group:ke,core:Ce,halo:at,trails:bt})}return{scene:r,camera:o,renderer:l,ambientLight:u,rimDirLight:f,cyanPoleLight:h,goldOrbLight:p,backlitBackdrop:M,cableTex:R,arrivalGroup:P,beaconRingMesh:Q,skyscrapers:Xe,spotlightBeams:qe,carMeshes:he,weatherPoints:Lt,weatherGeo:ft,weatherMat:Rt,weatherCount:dt,acrobatGroup:xt,vectorSilhouetteMat:St,dorsalStripMat:Ne,poleCoreMat:or,poleLaserGlowMat:vi,poleGlowMesh:U,upperBodyGroup:q,torsoSpineGroup:b,headGroup:Ye,leftLeg:It,rightLeg:mt,leftArm:mi,rightArm:gi,poleGroup:Mn,ribbonPivot:ve,ribbonJoint2:Se,ribbonJoint3:Dt,grappleLaserLine:Tt,grappleLineGeo:X,grappleBeamMesh:on,leftReceiverRing:ue,rightReceiverRing:ne,leftReceiverMat:A,rightReceiverMat:H,orbMeshes:nt,worldLeftHand:new ae,worldRightHand:new ae,grappleAnchor:new ae,activeCityIndex:-1}}function L1(s,e,t){var jt;if(!s)return;const r=-e.distance,o=e.angle,l=Math.abs(o),u=Math.min(1,l/ts),f=e.walkSpeedMultiplier||1,h=((jt=e.cfg)==null?void 0:jt.city)||_o[0];if(s.activeCityIndex!==e.cityIndex){s.activeCityIndex=e.cityIndex;const Oe=h.weatherArchetype||"urban";Oe==="cyber_rain"?(s.scene.background.setHex(395550),s.scene.fog.color.setHex(923714),s.weatherMat.color.setHex(62206),s.weatherMat.size=.16):Oe==="golden_embers"?(s.scene.background.setHex(1181976),s.scene.fog.color.setHex(2627372),s.weatherMat.color.setHex(16638023),s.weatherMat.size=.18):Oe==="blizzard"?(s.scene.background.setHex(398118),s.scene.fog.color.setHex(1059918),s.weatherMat.color.setHex(14742270),s.weatherMat.size=.2):(s.scene.background.setHex(332068),s.scene.fog.color.setHex(664121),s.weatherMat.color.setHex(3718648),s.weatherMat.size=.14)}const p=s.weatherGeo.attributes.position,v=p.array,S=h.weatherArchetype||"urban",g=(e.windCurrent||0)*(S==="blizzard"?14:9.5),M=S==="cyber_rain"?-24:S==="blizzard"?-6.5:S==="golden_embers"?2.2:-1.8;for(let Oe=0;Oe<s.weatherCount;Oe++){const b=Oe*3;v[b+0]+=g*t,v[b+1]+=M*t,v[b+0]>15?v[b+0]-=30:v[b+0]<-15&&(v[b+0]+=30),M<0&&v[b+1]<-8?v[b+1]=14:M>0&&v[b+1]>14&&(v[b+1]=-8),v[b+2]>r+8?v[b+2]-=56:v[b+2]<r-50&&(v[b+2]+=56)}p.needsUpdate=!0;const w=e.isFeverMode;s.vectorSilhouetteMat.uniforms.uRimStrength.value=w?1.65:.96,s.vectorSilhouetteMat.uniforms.uRimColor.value.setHex(w&&Math.sin(e.time*18)>0?16638023:62206),s.dorsalStripMat.opacity=w?.95:.45,s.dorsalStripMat.color.setHex(w?16638023:62206),s.poleLaserGlowMat.opacity=w?.82:.42;const R=w?1.45:1;s.poleGlowMesh.scale.set(R,1,R);const x=Math.min(1,t*11),_=Math.min(1,t*7.5),N=u*.56+(e.fallSlowMo?.22:0);e.smoothKneeFlex+=(N-e.smoothKneeFlex)*x;const W=-Math.sin(o)*.25;e.smoothHipX+=(W-e.smoothHipX)*x;const I=l>ts*.75||e.fallSlowMo?1:0;e.edgeSaveBlend+=(I-e.edgeSaveBlend)*x;const L=-o*.38-Math.sin(o)*.16*(1+e.edgeSaveBlend*.45),k=-o*.32;if(e.smoothTorsoComp+=(L-e.smoothTorsoComp)*_,e.smoothNeckComp+=(k-e.smoothNeckComp)*_,e.fallSlowMo)s.acrobatGroup.position.set(e.fallPosX,e.fallPosY,r),s.acrobatGroup.rotation.z=-o*1.35,s.acrobatGroup.rotation.x=e.fallTumbleX;else if(e.grappleRescueTimer>0){const Oe=e.grappleRescueTimer/.45,b=e.rescueStartX*Oe,y=e.rescueStartY*Oe;s.acrobatGroup.position.set(b,y,r),s.acrobatGroup.rotation.z=-o*Oe,s.acrobatGroup.rotation.x=0}else s.acrobatGroup.position.set(0,0,r),s.acrobatGroup.rotation.z=-o*.72,s.acrobatGroup.rotation.x=0;const E=e.gameStatus==="PLAYING"&&!e.fallSlowMo,P=E?Math.sin(e.stepPhase):0,z=E?Math.cos(e.stepPhase):0,j=Math.min(.56,.34*Math.pow(f,.45)),$=E?Math.abs(P)*.036*Math.min(1.5,f):Math.sin(e.time*2.6)*.012,ee=e.smoothKneeFlex*.22;s.upperBodyGroup.position.x=e.smoothHipX,s.upperBodyGroup.position.y=$-ee;const V=Math.sin(e.time*22)*e.edgeSaveBlend,te=e.smoothKneeFlex*.95;s.leftLeg.hipGroup.position.x=-.08+e.smoothHipX*.65,s.rightLeg.hipGroup.position.x=.08+e.smoothHipX*.65,s.leftLeg.hipGroup.position.y=.88-ee,s.rightLeg.hipGroup.position.y=.88-ee;const pe=-e.smoothHipX*.75,re=o>0?e.edgeSaveBlend*(.28+Math.abs(V)*.22):0,Q=o<0?-e.edgeSaveBlend*(.28+Math.abs(V)*.22):0;s.leftLeg.hipGroup.rotation.z=pe-re,s.rightLeg.hipGroup.rotation.z=pe-Q,s.leftLeg.hipGroup.rotation.x=P*j+te*.55+V*.25,s.leftLeg.kneeGroup.rotation.x=-Math.max(0,z)*(j*1.22)-te*1.1,s.leftLeg.bootGroup.rotation.x=te*.52,s.rightLeg.hipGroup.rotation.x=-P*j+te*.55-V*.25,s.rightLeg.kneeGroup.rotation.x=-Math.max(0,-z)*(j*1.22)-te*1.1,s.rightLeg.bootGroup.rotation.x=te*.52;const Z=E?Math.min(.24,(f-1)*.14):0;s.torsoSpineGroup.rotation.z=e.smoothTorsoComp+V*.08,s.torsoSpineGroup.rotation.x=.06+Z+e.smoothKneeFlex*.18+e.edgeSaveBlend*.28,s.headGroup.rotation.z=e.smoothNeckComp,s.headGroup.rotation.x=-Z*.7-e.smoothKneeFlex*.14-e.edgeSaveBlend*.2;const J=e.leftPressed?.28:0,D=e.grappleRescueTimer>0?1.45:e.rightPressed?.28:0,le=P*.12*f;s.leftArm.shoulderGroup.rotation.x=-le+V*.55,s.rightArm.shoulderGroup.rotation.x=e.grappleRescueTimer>0?-1.35:le-V*.55,s.leftArm.shoulderGroup.rotation.z=-e.smoothTorsoComp*.4-e.edgeSaveBlend*.22,s.rightArm.shoulderGroup.rotation.z=-e.smoothTorsoComp*.4+e.edgeSaveBlend*.22,s.leftArm.elbowGroup.rotation.x=J+e.edgeSaveBlend*.25,s.rightArm.elbowGroup.rotation.x=D+e.edgeSaveBlend*.25,s.poleGroup.rotation.z=(D-J)*.38-o*.42+V*.14;const Ee=e.windCurrent||0,Ze=10.5*Math.min(1.6,f);s.ribbonPivot.rotation.y=-Math.PI*.5+Ee*.78+Math.sin(e.time*Ze)*.22,s.ribbonPivot.rotation.z=Math.cos(e.time*(Ze*1.15))*.16,s.ribbonJoint2.rotation.y=Math.sin(e.time*(Ze*1.35)-.8)*.28+Ee*.22,s.ribbonJoint3.rotation.y=Math.sin(e.time*(Ze*1.6)-1.6)*.34+Ee*.25,s.backlitBackdrop.position.z=r-210,s.arrivalGroup.position.set(0,0,-e.targetDistance-3.5);const Xe=1+Math.sin(e.time*5)*.08;s.beaconRingMesh.scale.set(Xe,Xe,1);for(let Oe=0;Oe<s.spotlightBeams.length;Oe++){const b=s.spotlightBeams[Oe];b.mesh.rotation.z=b.baseAngle+Math.sin(e.time*b.speed+b.phaseOffset)*.14,b.mesh.position.z>r+15?b.mesh.position.z-=240:b.mesh.position.z<r-235&&(b.mesh.position.z+=240)}for(let Oe=0;Oe<s.skyscrapers.length;Oe++){const b=s.skyscrapers[Oe];b.position.z>r+18?b.position.z-=286:b.position.z<r-268&&(b.position.z+=286)}for(let Oe=0;Oe<s.carMeshes.length;Oe++){const b=s.carMeshes[Oe];b.mesh.position.z+=b.speed*t,b.mesh.position.z>r+25?b.mesh.position.z=r-230:b.mesh.position.z<r-235&&(b.mesh.position.z=r+20)}s.acrobatGroup.updateMatrixWorld(!0),s.leftArm.handMesh.getWorldPosition(s.worldLeftHand),s.rightArm.handMesh.getWorldPosition(s.worldRightHand);const qe=s.worldLeftHand,oe=s.worldRightHand;if(e.grappleRescueTimer>0){s.grappleLaserLine.visible=!0,s.grappleBeamMesh.visible=!0,s.grappleAnchor.set(0,0,r-1.2);const Oe=s.grappleLineGeo.attributes.position.array;Oe[0]=oe.x,Oe[1]=oe.y,Oe[2]=oe.z,Oe[3]=s.grappleAnchor.x,Oe[4]=s.grappleAnchor.y,Oe[5]=s.grappleAnchor.z,s.grappleLineGeo.attributes.position.needsUpdate=!0;const b=oe.distanceTo(s.grappleAnchor);s.grappleBeamMesh.position.lerpVectors(oe,s.grappleAnchor,.5),s.grappleBeamMesh.scale.set(1,Math.max(.1,b),1),s.grappleBeamMesh.lookAt(s.grappleAnchor),s.grappleBeamMesh.rotateX(Math.PI/2)}else s.grappleLaserLine.visible=!1,s.grappleBeamMesh.visible=!1;let he=!1,be=!1;for(let Oe=0;Oe<e.jugglePool.length;Oe++){const b=e.jugglePool[Oe];b.active&&b.phase>=e.catchThreshold&&(b.targetHand==="L"&&(he=!0),b.targetHand==="R"&&(be=!0))}s.leftReceiverRing.position.copy(qe),s.rightReceiverRing.position.copy(oe),s.leftReceiverMat.color.setHex(he?16638023:62206),s.rightReceiverMat.color.setHex(be?16638023:62206);const Qe=he?1.32:.78,Ge=be?1.32:.78;s.leftReceiverRing.scale.set(Qe,Qe,Qe),s.rightReceiverRing.scale.set(Ge,Ge,Ge);for(let Oe=0;Oe<4;Oe++){const b=e.jugglePool[Oe],y=s.orbMeshes[Oe];if(!b.active||e.fallSlowMo){y.group.visible=!1;for(let Re=0;Re<y.trails.length;Re++)y.trails[Re].visible=!1;continue}y.group.visible=!0;const O=b.targetHand==="R"?qe:oe,se=b.targetHand==="R"?oe:qe,de=b.phase,Te=1.48+Oe%2*.22,Ne=O.x+(se.x-O.x)*de,ge=O.y+(se.y-O.y)*de+4*Te*de*(1-de),_e=O.z+(se.z-O.z)*de-.12*Math.sin(de*Math.PI);y.group.position.set(Ne,ge,_e);const $e=de>=e.catchThreshold?1.28:w?1.15:1;y.group.scale.set($e,$e,$e);const Ue=w?.028:.036;for(let Re=0;Re<y.trails.length;Re++){const Ye=y.trails[Re],tt=de-(Re+1)*Ue;if(tt<=.01){Ye.visible=!1;continue}Ye.visible=!0;const ht=O.x+(se.x-O.x)*tt,G=O.y+(se.y-O.y)*tt+4*Te*tt*(1-tt),Le=O.z+(se.z-O.z)*tt-.12*Math.sin(tt*Math.PI);Ye.position.set(ht,G,Le)}}s.cyanPoleLight.position.set(0,1.35,r),s.cyanPoleLight.intensity=w?6.8:3.8,s.goldOrbLight.position.set(0,2.45,r-.25);const dt=Math.min(1,(e.combo||0)/14),pt=Math.min(1,Math.max(0,(l-ts*.28)/(ts*.62))),ft=e.fallSlowMo?1:pt,Lt=(58+dt*6)*(1-ft)+48*ft,St=(6.2+dt*.55)*(1-ft)+4.95*ft,tn=(3.38+dt*.16)*(1-ft)+2.95*ft,It=Math.min(1,t*5.5);e.dynamicFov+=(Lt-e.dynamicFov)*It,e.dynamicCamDist+=(St-e.dynamicCamDist)*It,e.dynamicCamY+=(tn-e.dynamicCamY)*It,Math.abs(s.camera.fov-e.dynamicFov)>.02&&(s.camera.fov=e.dynamicFov,s.camera.updateProjectionMatrix());const mt=e.shake>.05?Math.sin(e.time*42)*e.shake*.038:0,q=e.shake>.05?Math.cos(e.time*36)*e.shake*.038:0;s.camera.position.set(mt+Math.sin(o)*.32,e.dynamicCamY+q,r+e.dynamicCamDist),e.fallSlowMo?s.camera.lookAt(s.acrobatGroup.position):s.camera.lookAt(e.smoothHipX*.35,1.65-e.smoothKneeFlex*.2,r-15),s.camera.rotation.z=-e.cameraRoll*(.52+ft*.65),s.renderer.render(s.scene,s.camera)}function N1(){try{const s=localStorage.getItem(r0);return s?JSON.parse(s):null}catch{return null}}function I1(s=.72){const e=[];for(let t=0;t<4;t++)e.push({id:t,active:t===0,phase:t*.25,speed:s,targetHand:t%2===0?"R":"L",arcHeight:132,spinAngle:0});return{jugglePool:e}}function D1(){var lr,_n,vi;const s=N1(),e=T1(s),[t,r]=ut.useState((s==null?void 0:s.lang)||"es"),[o,l]=ut.useState((s==null?void 0:s.soundOn)??!0),[u,f]=ut.useState((s==null?void 0:s.currentLevel)||1),[h,p]=ut.useState((s==null?void 0:s.maxUnlockedLevel)||1),[v,S]=ut.useState((s==null?void 0:s.coins)??450),[g,M]=ut.useState((s==null?void 0:s.gems)??80),[w,R]=ut.useState((s==null?void 0:s.leaguePoints)??1250),[x,_]=ut.useState(e.playerId),[N,W]=ut.useState(e.playerName),[C,I]=ut.useState(e.playerCountry||"AR"),[L,k]=ut.useState(e.needsOnboarding),[E,P]=ut.useState(e.playerName||""),[z,j]=ut.useState(e.playerCountry||"AR"),[$,ee]=ut.useState(()=>Cd()),[V,te]=ut.useState((s==null?void 0:s.gearLevels)||{pole:1,boots:1,gloves:1}),[pe,re]=ut.useState((s==null?void 0:s.unlockedSkins)||["skin_1"]),[Q,Z]=ut.useState((s==null?void 0:s.equippedSkin)||"skin_1"),[J,D]=ut.useState((s==null?void 0:s.unlockedProps)||["balls"]),[le,Ee]=ut.useState((s==null?void 0:s.equippedProp)||"balls"),[Ze,Xe]=ut.useState("home"),[qe,oe]=ut.useState(!0),[he,be]=ut.useState("./icon.jpg"),[Qe,Ge]=ut.useState("LOBBY"),[dt,pt]=ut.useState(null),[ft,Rt]=ut.useState(""),[Lt,xt]=ut.useState(()=>mg()),[St,Yt]=ut.useState(null),[tn,It]=ut.useState(0),[mt,q]=ut.useState({angleDeg:0,distance:0,targetDistance:100,walkSpeedMultiplier:1,juggleCount:1,multiplier:1,combo:0,isFeverMode:!1,windCurrent:0,windWarningActive:!1,fallSlowMo:!1,slowMoTimer:1.25,leftPressed:!1,rightPressed:!1,leftTimingReady:!1,rightTimingReady:!1}),jt=ut.useRef(null),Oe=ut.useRef(null),b=ut.useRef(null),y=ut.useRef(null),O=fa[t]||fa.es,se=bd(u),de=se.city,Te=ys.find(U=>U.id===Q)||ys[0],Ne=Ms.find(U=>U.id===le)||Ms[0],ge=Zr(C),_e=ge.flag,De=Jr(N)?N:O.youLabel,$e=ut.useCallback((U={})=>{try{const xe=U.id||x||Rd(),Ve=(U.name??N??"").trim(),Me=U.country||C||"AR",_t=typeof U.lp=="number"?U.lp:w,X=typeof U.level=="number"?U.level:h;if(!Jr(Ve))return;const nn=Zr(Me),Tt={id:xe,name:Ve,countryCode:nn.code,country:nn.flag,flag:nn.flag,lp:_t,maxLevel:X,badge:"⭐",updatedAt:Date.now()},on=[...Cd().filter(Zt=>Zt&&Zt.id!==xe),Tt];if(localStorage.setItem(s0,JSON.stringify(on)),ee(on),typeof BroadcastChannel<"u"){const Zt=new BroadcastChannel("nma_live_league_sync");Zt.postMessage({type:"PLAYER_SYNC",payload:Tt}),Zt.close()}}catch{}},[x,N,C,w,h]);ut.useEffect(()=>{try{const U=localStorage.getItem("nma_profile_completed")==="true",xe=localStorage.getItem("nma_player_name")||"",Ve=localStorage.getItem("nma_player_country")||"AR";if(!U||!Jr(xe))k(!0);else{const Me=Rd();_(Me),W(xe.trim()),I(Zr(Ve).code),k(!1),$e({id:Me,name:xe.trim(),country:Zr(Ve).code,lp:w,level:h})}}catch{k(!0)}},[]),ut.useEffect(()=>{Jr(N)&&!L&&$e({id:x,name:N,country:C,lp:w,level:h})},[w,h,N,C,x,L,$e]),ut.useEffect(()=>{if(typeof BroadcastChannel>"u")return;const U=new BroadcastChannel("nma_live_league_sync");return U.onmessage=()=>{ee(Cd())},()=>U.close()},[]),ut.useEffect(()=>{if(L&&!qe){const U=setTimeout(()=>{y.current&&y.current.focus()},80);return()=>clearTimeout(U)}},[L,qe]);const Ue=ut.useCallback(()=>{Xt.init(),P(Jr(N)?N:""),j(C||"AR"),k(!0)},[N,C]),Re=E.replace(/\s+/g,"").length,Ye=Re>=2&&E.trim().length<=16&&Jr(E),tt=ut.useCallback(U=>{if(U&&U.preventDefault&&U.preventDefault(),!Ye)return;Xt.init();const xe=E.trim().slice(0,16),Ve=Zr(z||"AR"),Me=Rd();try{localStorage.setItem("nma_player_id",Me),localStorage.setItem("nma_player_name",xe),localStorage.setItem("nma_player_country",Ve.code),localStorage.setItem("nma_profile_completed","true")}catch{}_(Me),W(xe),I(Ve.code),k(!1),$e({id:Me,name:xe,country:Ve.code,lp:w,level:h}),Xt.playVictory()},[Ye,E,z,w,h,$e]);ut.useEffect(()=>{const U=setTimeout(()=>{oe(!1)},550);return()=>clearTimeout(U)},[]);const ht=ut.useCallback(()=>{be(U=>U==="./icon.jpg"?"/icon.jpg":U==="/icon.jpg"?"./icon.png":U==="./icon.png"?"/icon.png":U)},[]),G=ut.useRef(null);if(!G.current){const U=bd((s==null?void 0:s.currentLevel)||1),xe=I1(U.juggleBaseSpeed),Ve=ys.find(X=>X.id===((s==null?void 0:s.equippedSkin)||"skin_1"))||ys[0],Me=Ms.find(X=>X.id===((s==null?void 0:s.equippedProp)||"balls"))||Ms[0],_t=((lr=s==null?void 0:s.gearLevels)==null?void 0:lr.gloves)||1;G.current={lastTimestamp:0,time:0,hudSyncTimer:0,gameStatus:"LOBBY",paused:!1,cfg:U,level:U.level,cityIndex:U.cityIndex,targetDistance:U.totalDistance,distance:0,walkSpeedMultiplier:U.walkSpeedMultiplier,walkSpeed:U.walkSpeed,difficultyFactor:U.difficultyFactor,catchWindow:U.catchWindow,gravityFactor:U.gravityFactor,windMax:U.windMax,windChangeFreq:U.windChangeFreq,windCurrent:.15,windTarget:.25,windTimer:0,windWarningActive:!1,nextWindSign:-1,angle:.03,angleRad:.03,angleDeg:.03*180/Math.PI,cameraRoll:0,angularVelocity:0,stepPhase:0,smoothKneeFlex:0,smoothHipX:0,smoothTorsoComp:0,smoothNeckComp:0,edgeSaveBlend:0,dynamicFov:58,dynamicCamDist:6.2,dynamicCamY:3.38,fallSlowMo:!1,slowMoTimer:1.25,fallPosX:0,fallPosY:0,fallVelocityY:0,fallTumbleX:0,grappleRescueTimer:0,rescueStartX:0,rescueStartY:0,immunityTimer:0,criticalTiltDuration:0,nearMissArmed:!1,isFeverMode:!1,juggleCount:1,combo:0,maxCombo:0,catchesRun:0,coinsEarnedRun:0,lpEarnedRun:0,leftPressed:!1,rightPressed:!1,shake:0,grappleFlash:0,poleLevel:((_n=s==null?void 0:s.gearLevels)==null?void 0:_n.pole)||1,bootsLevel:((vi=s==null?void 0:s.gearLevels)==null?void 0:vi.boots)||1,glovesLevel:_t,catchThreshold:Math.max(.62,1-U.catchWindow-(_t-1)*.008),skinObj:Ve,propObj:Me,...xe}}ut.useEffect(()=>{try{localStorage.setItem(r0,JSON.stringify({lang:t,soundOn:o,playerId:x,playerName:N,playerCountry:C,currentLevel:u,maxUnlockedLevel:h,coins:v,gems:g,leaguePoints:w,gearLevels:V,unlockedSkins:pe,equippedSkin:Q,unlockedProps:J,equippedProp:le}))}catch{}},[t,o,x,N,C,u,h,v,g,w,V,pe,Q,J,le]),ut.useEffect(()=>{Xt.enabled=o},[o]),ut.useEffect(()=>{var Ve;const U=G.current;U.poleLevel=V.pole||1,U.bootsLevel=V.boots||1,U.glovesLevel=V.gloves||1;const xe=((Ve=U.cfg)==null?void 0:Ve.catchWindow)||.28;U.catchThreshold=Math.max(.62,1-xe-(U.glovesLevel-1)*.008),U.skinObj=Te,U.propObj=Ne},[V,de,Te,Ne]),ut.useEffect(()=>{const U=setInterval(()=>{xt(mg())},1e3);return()=>clearInterval(U)},[]);const Le=ut.useCallback((U,xe="LOBBY")=>{const Ve=bd(U),Me=G.current;Me.cfg=Ve,Me.level=Ve.level,Me.cityIndex=Ve.cityIndex,Me.targetDistance=Ve.totalDistance,Me.distance=0,Me.walkSpeedMultiplier=Ve.walkSpeedMultiplier,Me.walkSpeed=Ve.walkSpeed,Me.difficultyFactor=Ve.difficultyFactor,Me.catchWindow=Ve.catchWindow,Me.catchThreshold=Math.max(.62,1-Ve.catchWindow-(Me.glovesLevel-1)*.008),Me.gravityFactor=Ve.gravityFactor,Me.windMax=Ve.windMax,Me.windChangeFreq=Ve.windChangeFreq,Me.windCurrent=.15,Me.windTarget=.32,Me.windTimer=0,Me.windWarningActive=!1,Me.nextWindSign=-1,Me.angle=.03,Me.angleRad=.03,Me.angleDeg=.03*180/Math.PI,Me.cameraRoll=0,Me.angularVelocity=0,Me.stepPhase=0,Me.smoothKneeFlex=0,Me.smoothHipX=0,Me.smoothTorsoComp=0,Me.smoothNeckComp=0,Me.edgeSaveBlend=0,Me.dynamicFov=58,Me.dynamicCamDist=6.2,Me.dynamicCamY=3.38,Me.fallSlowMo=!1,Me.slowMoTimer=1.25,Me.fallPosX=0,Me.fallPosY=0,Me.fallVelocityY=0,Me.fallTumbleX=0,Me.grappleRescueTimer=0,Me.rescueStartX=0,Me.rescueStartY=0,Me.immunityTimer=0,Me.criticalTiltDuration=0,Me.nearMissArmed=!1,Me.isFeverMode=!1,Me.juggleCount=1,Me.combo=0,Me.maxCombo=0,Me.catchesRun=0,Me.coinsEarnedRun=0,Me.lpEarnedRun=0,Me.leftPressed=!1,Me.rightPressed=!1,Me.shake=0,Me.grappleFlash=0,Me.gameStatus=xe,Me.paused=!1;for(let _t=0;_t<Me.jugglePool.length;_t++){const X=Me.jugglePool[_t];X.active=_t===0,X.phase=_t*.26,X.speed=Ve.juggleBaseSpeed,X.targetHand=_t%2===0?"R":"L"}Ge(xe),pt(null),q({angleDeg:Me.angleDeg,distance:0,targetDistance:Ve.totalDistance,walkSpeedMultiplier:Ve.walkSpeedMultiplier,juggleCount:1,multiplier:Ne.mult*Te.bonusMult,combo:0,isFeverMode:!1,windCurrent:Me.windCurrent,windWarningActive:!1,fallSlowMo:!1,slowMoTimer:1.25,leftPressed:!1,rightPressed:!1,leftTimingReady:!1,rightTimingReady:!1})},[Ne.mult,Te.bonusMult]),ve=ut.useCallback(()=>{if(L||!Jr(N)){k(!0);return}Xt.init(),Xt.playCatchSound(2,!1),Le(u,"PLAYING")},[u,Le,L,N]),Fe=ut.useCallback(()=>{Xt.init();const U=G.current;if(U.gameStatus!=="PLAYING"||U.juggleCount>=4)return;const xe=U.juggleCount,Ve=U.jugglePool[xe];Ve.active=!0,Ve.phase=.08,Ve.speed=U.cfg.juggleBaseSpeed,Ve.targetHand=xe%2===0?"R":"L",U.juggleCount+=1,Xt.playCatchSound(U.juggleCount+2,!0)},[]),Be=ut.useCallback(U=>{var _t,X;const xe=G.current;if(xe.gameStatus!=="PLAYING"||xe.paused||xe.fallSlowMo)return!1;let Ve=!1;const Me=xe.catchThreshold;for(let nn=0;nn<xe.jugglePool.length;nn++){const Tt=xe.jugglePool[nn];if(Tt.active&&Tt.targetHand===U&&Tt.phase>=Me){const kt=Tt.phase>=.88;if(Tt.phase=0,Tt.speed=xe.cfg.juggleBaseSpeed,Tt.targetHand=U==="L"?"R":"L",xe.combo+=1,xe.combo>xe.maxCombo&&(xe.maxCombo=xe.combo),xe.catchesRun+=1,xe.isFeverMode=xe.combo>=10,xe.level>=4){const ue=(U==="L"?-1:1)*.06*(xe.difficultyFactor||xe.walkSpeedMultiplier);xe.angularVelocity+=ue}else xe.angularVelocity*=.82,xe.angle*=.92;xe.angleRad=xe.angle,xe.angleDeg=xe.angle*180/Math.PI;const Ri=xe.isFeverMode?2:1,on=xe.juggleCount*(((_t=xe.propObj)==null?void 0:_t.mult)||1)*(((X=xe.skinObj)==null?void 0:X.bonusMult)||1)*Ri,Zt=Math.max(1,Math.round((kt?6:3)*on)),A=Math.max(1,Math.round((kt?4:2)*xe.juggleCount));xe.coinsEarnedRun+=Zt,xe.lpEarnedRun+=A,S(H=>H+Zt),R(H=>H+A),xe.catchesRun%8===0&&M(H=>H+1),Xt.playCatchSound(xe.combo,kt),Yt({id:Date.now()+Math.random(),side:U==="L"?"left":"right",isPerfect:kt,text:`${kt?(fa[t]||fa.es).perfectCatchLabel:(fa[t]||fa.es).goodCatchLabel} x${xe.combo}`}),Ve=!0;break}}return Ve},[t]),Se=ut.useCallback(()=>{Xt.init();const U=G.current;if(!(U.gameStatus!=="PLAYING"&&U.gameStatus!=="GAMEOVER")){if(g<20){pt("SHOP"),U.paused=!0;return}M(xe=>xe-20),U.rescueStartX=U.fallSlowMo?U.fallPosX:Math.sin(U.angle)*.5,U.rescueStartY=U.fallSlowMo?Math.min(-.8,U.fallPosY):-.6,U.grappleRescueTimer=.45,U.immunityTimer=1.5,U.angle=0,U.angleRad=0,U.angleDeg=0,U.angularVelocity=0,U.fallSlowMo=!1,U.slowMoTimer=1.25,U.fallPosX=0,U.fallPosY=0,U.fallVelocityY=0,U.fallTumbleX=0,U.grappleFlash=1,U.shake=0,U.gameStatus="PLAYING",Ge("PLAYING"),Xt.playGrapple()}},[g]),rt=ut.useCallback((U,xe)=>{xe&&xe.cancelable&&xe.preventDefault(),Xt.init();const Ve=G.current;U==="L"?(Ve.leftPressed=!0,Be("L")):(Ve.rightPressed=!0,Be("R"))},[Be]),Je=ut.useCallback((U,xe)=>{xe&&xe.cancelable&&xe.preventDefault();const Ve=G.current;U==="L"?Ve.leftPressed=!1:Ve.rightPressed=!1},[]);ut.useEffect(()=>{const U=Ve=>{var X,nn;if(L||((X=Ve.target)==null?void 0:X.tagName)==="INPUT"||((nn=Ve.target)==null?void 0:nn.tagName)==="TEXTAREA"||Ve.repeat)return;const Me=Ve.key.toLowerCase(),_t=G.current;Me==="arrowleft"||Me==="a"?(_t.leftPressed=!0,Be("L")):Me==="arrowright"||Me==="d"?(_t.rightPressed=!0,Be("R")):Me==="w"||Me==="arrowup"?Fe():Me===" "?(Ve.preventDefault(),_t.gameStatus==="LOBBY"?ve():_t.gameStatus==="PLAYING"&&Se()):(Me==="escape"||Me==="p")&&_t.gameStatus==="PLAYING"&&(_t.paused=!_t.paused,pt(_t.paused?"PAUSE":null))},xe=Ve=>{var X,nn;if(L||((X=Ve.target)==null?void 0:X.tagName)==="INPUT"||((nn=Ve.target)==null?void 0:nn.tagName)==="TEXTAREA")return;const Me=Ve.key.toLowerCase(),_t=G.current;Me==="arrowleft"||Me==="a"?_t.leftPressed=!1:(Me==="arrowright"||Me==="d")&&(_t.rightPressed=!1)};return window.addEventListener("keydown",U),window.addEventListener("keyup",xe),()=>{window.removeEventListener("keydown",U),window.removeEventListener("keyup",xe)}},[L,Be,Fe,Se,ve]),ut.useEffect(()=>{if(!jt.current)return;const U=P1(jt.current);Oe.current=U;let xe=null;const Ve=()=>{if(!jt.current||!Oe.current)return;const _t=jt.current.clientWidth||420,X=jt.current.clientHeight||780;Oe.current.camera.aspect=_t/X,Oe.current.camera.updateProjectionMatrix(),Oe.current.renderer.setSize(_t,X)};window.addEventListener("resize",Ve);const Me=_t=>{var kt,Ri;const X=G.current,nn=(_t-X.lastTimestamp)/1e3,Tt=nn>0&&nn<.2?Math.min(nn,.05):.0166;if(X.lastTimestamp=_t,!X.paused){if(X.time+=Tt,X.cameraRoll+=(X.angle*.24-X.cameraRoll)*Math.min(1,Tt*8),X.grappleFlash>0&&(X.grappleFlash=Math.max(0,X.grappleFlash-Tt*2.4)),X.grappleRescueTimer>0&&(X.grappleRescueTimer=Math.max(0,X.grappleRescueTimer-Tt)),X.immunityTimer>0&&(X.immunityTimer=Math.max(0,X.immunityTimer-Tt)),X.shake>0&&(X.shake=Math.max(0,X.shake-Tt*4.5)),X.gameStatus==="PLAYING")if(X.fallSlowMo)X.slowMoTimer-=Tt,X.fallVelocityY-=16.8*Tt,X.fallPosY+=X.fallVelocityY*Tt,X.fallPosX+=(X.angle>=0?1:-1)*2.4*Tt,X.fallTumbleX+=Tt*2.8,X.angle+=(X.angle>=0?1:-1)*.35*Tt,X.angleRad=X.angle,X.angleDeg=X.angle*180/Math.PI,X.slowMoTimer<=0&&(X.fallSlowMo=!1,X.gameStatus="GAMEOVER",Ge("GAMEOVER"));else{if(X.windTimer+=Tt,X.level>=4&&X.windTimer>=X.windChangeFreq-1&&(X.windWarningActive||(X.windWarningActive=!0,X.nextWindSign=X.windTarget>=0?-1:1)),X.windTimer>=X.windChangeFreq)if(X.windTimer=0,X.windWarningActive=!1,X.level>=4){const ye=X.nextWindSign||(X.windTarget>=0?-1:1),ke=(.36+Math.abs(Math.cos(X.time*2.3))*X.windMax*.58)*Math.pow(X.walkSpeedMultiplier,.45);X.windTarget=ye*ke,X.shake=1.9,Xt.playWindGust()}else{const ye=Math.sin(X.time*3.7)>=0?1:-1;X.windTarget=ye*(.16+Math.abs(Math.cos(X.time*2.3))*X.windMax*.36)}X.windCurrent+=(X.windTarget-X.windCurrent)*Math.min(1,Tt*2.2);const on=X.cfg,Zt=1-(X.poleLevel-1)*.048,A=1-(X.bootsLevel-1)*.052,H=4.55+(X.poleLevel-1)*.15,ue=1+(X.bootsLevel-1)*.025,ne=X.walkSpeed*ue*Tt;X.distance=Math.min(X.targetDistance,X.distance+ne),X.stepPhase+=Tt*7.2*X.walkSpeedMultiplier*ue;const ie=Math.sin(X.stepPhase)*.45*Math.pow(X.walkSpeedMultiplier,1.35)*A,He=((X.rightPressed?1:0)-(X.leftPressed?1:0))*H,We=Math.sin(X.angle)*on.gravityInstability*2.55*Zt,it=X.windCurrent*A*1.65;if(X.immunityTimer>0)X.angularVelocity=0,X.angle*=Math.pow(.82,Tt*60);else{X.angularVelocity+=(We+it+ie+He)*Tt;const ye=X.isFeverMode?.905:.92;X.angularVelocity*=Math.pow(ye,Tt*60),X.angle+=X.angularVelocity*Tt}X.angleRad=X.angle,X.angleDeg=X.angle*180/Math.PI;const nt=Math.abs(X.angle);nt>ts*.75&&Xt.playHeartbeatIfDanger(_t),nt>ts*.78?(X.criticalTiltDuration+=Tt,X.criticalTiltDuration>=.35&&(X.nearMissArmed=!0)):nt<ts*.3&&(X.nearMissArmed?(X.nearMissArmed=!1,X.criticalTiltDuration=0,X.coinsEarnedRun+=5,X.lpEarnedRun+=100,S(ye=>ye+5),R(ye=>ye+100),Xt.playNearMissSave(),It(Date.now())):X.criticalTiltDuration=0);for(let ye=0;ye<X.jugglePool.length;ye++){const ke=X.jugglePool[ye];if(ke.active){if(ke.phase+=ke.speed*Tt,ke.spinAngle=ke.phase*Math.PI*4,ke.phase>=X.catchThreshold&&(ke.targetHand==="L"&&X.leftPressed||ke.targetHand==="R"&&X.rightPressed)){Be(ke.targetHand);continue}if(ke.phase>=1){ke.phase=0;const Ce=ke.targetHand==="L"?-1:1;ke.targetHand=ke.targetHand==="L"?"R":"L",X.combo=0,X.isFeverMode=!1;const at=X.level>=4?Ce*(.68+.06*(X.difficultyFactor||1))*Zt:Ce*.65*Zt;X.immunityTimer<=0&&(X.angularVelocity+=at),X.shake=2.8}}}if(nt>=ts&&X.immunityTimer<=0&&(X.fallSlowMo=!0,X.slowMoTimer=1.25,X.fallPosX=Math.sin(X.angle)*.35,X.fallPosY=-.08,X.fallVelocityY=-2.4,X.fallTumbleX=.15,X.isFeverMode=!1,X.shake=4,Xt.playFall()),X.distance>=X.targetDistance){X.gameStatus="VICTORY";const ye=120+X.level*25,ke=X.level%5===0?18:6,Ce=45+X.level*8;X.coinsEarnedRun+=ye,X.lpEarnedRun+=Ce,S(at=>at+ye),M(at=>at+ke),R(at=>at+Ce),p(at=>Math.max(at,Math.min(100,X.level+1))),Xt.playVictory(),Ge("VICTORY")}}else if(X.gameStatus==="LOBBY"){X.angle=Math.sin(X.time*1.5)*.04,X.angleRad=X.angle,X.angleDeg=X.angle*180/Math.PI,X.windCurrent=Math.sin(X.time*.8)*.35;for(let on=0;on<X.jugglePool.length;on++){const Zt=X.jugglePool[on];Zt.active&&(Zt.phase=(Zt.phase+Tt*.65)%1)}}}if(b.current){const Zt=Math.max(-47,Math.min(47,X.angleDeg||0))/47*90;b.current.style.transform=`translateX(${Zt.toFixed(1)}px)`}if(L1(Oe.current,X,Tt),X.hudSyncTimer+=Tt,X.hudSyncTimer>=.08){X.hudSyncTimer=0;let on=!1,Zt=!1;for(let ue=0;ue<X.jugglePool.length;ue++){const ne=X.jugglePool[ue];ne.active&&ne.phase>=X.catchThreshold&&(ne.targetHand==="L"&&(on=!0),ne.targetHand==="R"&&(Zt=!0))}const A=X.isFeverMode?2:1,H=X.juggleCount*(((kt=X.propObj)==null?void 0:kt.mult)||1)*(((Ri=X.skinObj)==null?void 0:Ri.bonusMult)||1)*A;q({angleDeg:X.angleDeg||0,distance:Math.floor(X.distance),targetDistance:X.targetDistance,walkSpeedMultiplier:X.walkSpeedMultiplier||1,juggleCount:X.juggleCount,multiplier:H,combo:X.combo,isFeverMode:X.isFeverMode,windCurrent:X.windCurrent,windWarningActive:X.windWarningActive,fallSlowMo:X.fallSlowMo,slowMoTimer:X.slowMoTimer,leftPressed:X.leftPressed,rightPressed:X.rightPressed,leftTimingReady:on,rightTimingReady:Zt})}xe=requestAnimationFrame(Me)};return xe=requestAnimationFrame(Me),()=>{window.removeEventListener("resize",Ve),xe&&cancelAnimationFrame(xe),Oe.current&&Oe.current.renderer&&Oe.current.renderer.dispose()}},[Be]);const Dt=U=>{Xt.init();const xe=V[U.id]||1;if(xe>=U.maxLevel)return;const Ve=Math.round(U.baseCost*Math.pow(U.costScale,xe-1));v<Ve||(S(Me=>Me-Ve),te(Me=>({...Me,[U.id]:xe+1})),Xt.playCatchSound(xe+3,!0))},Ut=U=>{if(Xt.init(),pe.includes(U.id)){Z(U.id),Xt.playCatchSound(2,!1);return}U.currency==="coins"&&v>=U.cost?(S(xe=>xe-U.cost),re(xe=>[...xe,U.id]),Z(U.id),Xt.playVictory()):U.currency==="gems"&&g>=U.cost&&(M(xe=>xe-U.cost),re(xe=>[...xe,U.id]),Z(U.id),Xt.playVictory())},vn=U=>{if(Xt.init(),J.includes(U.id)){Ee(U.id),Xt.playCatchSound(3,!1);return}U.currency==="coins"&&v>=U.cost?(S(xe=>xe-U.cost),D(xe=>[...xe,U.id]),Ee(U.id),Xt.playVictory()):U.currency==="gems"&&g>=U.cost&&(M(xe=>xe-U.cost),D(xe=>[...xe,U.id]),Ee(U.id),Xt.playVictory())},Dn=U=>{Xt.init(),M(xe=>xe+U.gems),S(xe=>xe+U.coins),Xt.playVictory(),Rt(`+${U.gems} 💎  +${U.coins} 🪙`),setTimeout(()=>Rt(""),2500)},mi=$.filter(U=>U&&U.id&&U.id!==(x||"player")),gi=[...x1,...mi,{id:x||"player",name:De,country:_e,countryCode:ge.code,lp:w,badge:"⭐",isPlayer:!0}].sort((U,xe)=>xe.lp-U.lp),Mn=gi.findIndex(U=>U.isPlayer)+1,$n=Math.abs(mt.windCurrent).toFixed(1),br=mt.windCurrent<-.8?"◄◄":mt.windCurrent<-.15?"◄":mt.windCurrent>.8?"►►":mt.windCurrent>.15?"►":"•",or=mt.fallSlowMo||Math.abs(mt.angleDeg)>30;return F.jsxs("div",{className:"game-shell",children:[F.jsx("div",{ref:jt,className:"webgl-mount"}),qe&&F.jsxs("div",{className:"modal-backdrop",style:{zIndex:90,flexDirection:"column",gap:"14px",background:"radial-gradient(circle at 50% 35%, #09152b 0%, #02040a 85%)"},children:[F.jsxs("div",{style:{position:"relative",width:"82%",maxWidth:"320px",borderRadius:"18px",overflow:"hidden",border:"2px solid rgba(0, 242, 254, 0.75)",boxShadow:"0 0 32px rgba(0, 242, 254, 0.45), 0 18px 40px rgba(0, 0, 0, 0.9)"},children:[F.jsx("img",{src:he,onError:ht,alt:"NO MIRES ABAJO",style:{width:"100%",height:"auto",display:"block"}}),F.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(5,8,17,0) 55%, rgba(5,8,17,0.95) 100%)"}})]}),F.jsx("div",{style:{fontFamily:"Bebas Neue, Orbitron, sans-serif",fontSize:"2rem",letterSpacing:"0.08em",color:"#fde047",textShadow:"0 0 16px rgba(0, 242, 254, 0.6)"},children:O.title})]}),!qe&&L&&F.jsx("div",{className:"onboarding-priority-backdrop backdrop-blur-xl bg-slate-950/90",style:{zIndex:9999},children:F.jsxs("form",{className:"onboarding-modal-card",onSubmit:tt,children:[F.jsxs("div",{children:[F.jsx("h2",{className:"onboarding-title",children:O.onboardingTitle}),F.jsx("p",{className:"onboarding-subtitle",children:O.onboardingSubtitle})]}),F.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"10px",padding:"6px 10px",borderRadius:"10px",background:"rgba(15, 23, 42, 0.85)",border:"1px solid rgba(250, 204, 21, 0.38)",fontSize:"0.76rem",fontWeight:800,color:"#fde047"},children:[F.jsxs("span",{children:["🏆 ",w," LP"]}),F.jsx("span",{children:"•"}),F.jsxs("span",{children:["📍 Nv. ",h,"/100"]}),F.jsx("span",{children:"•"}),F.jsxs("span",{children:["🪙 ",v]}),F.jsx("span",{children:"•"}),F.jsxs("span",{children:["💎 ",g]})]}),F.jsxs("div",{className:"onboarding-field-group",children:[F.jsxs("div",{className:"onboarding-label-row",children:[F.jsx("label",{htmlFor:"nma-nickname-input",children:O.onboardingNameLabel}),F.jsxs("span",{style:{color:Ye?"#4ade80":"#fde047"},children:[Re,"/16"]})]}),F.jsx("input",{id:"nma-nickname-input",ref:y,type:"text",className:"onboarding-name-input",placeholder:O.onboardingNamePlaceholder,value:E,maxLength:16,autoFocus:!0,autoComplete:"off",onChange:U=>P(U.target.value),onKeyDown:U=>{U.key==="Enter"&&Ye&&tt(U)}})]}),F.jsxs("div",{className:"onboarding-field-group",children:[F.jsxs("div",{className:"onboarding-label-row",children:[F.jsx("span",{children:O.onboardingCountryLabel}),F.jsxs("span",{style:{color:"#fde047"},children:[Zr(z).flag," ",Zr(z).code]})]}),F.jsx("div",{className:"onboarding-country-grid",children:ec.map(U=>{const xe=z===U.code;return F.jsx("button",{type:"button",className:`onboarding-country-btn ${xe?"selected":""}`,onClick:()=>{Xt.init(),Xt.playCatchSound(3,!1),j(U.code)},children:F.jsx("span",{children:U.label})},U.code)})})]}),F.jsx("button",{type:"submit",className:"onboarding-submit-btn",disabled:!Ye,children:O.onboardingSaveCta})]})}),Qe!=="PLAYING"&&F.jsxs("header",{className:"top-utility-bar",children:[F.jsxs("div",{className:"league-strip",onClick:()=>{G.current.paused=!0,pt("LEAGUE")},children:[F.jsxs("div",{className:"league-strip-left",children:[F.jsxs("span",{children:["🏆 ",O.leagueBanner,":"]}),F.jsxs("span",{className:"league-points-badge",children:["#",Mn," (",w," ",O.leaguePointsShort,")"]})]}),F.jsxs("span",{className:"league-timer",children:["⏳ ",Lt.days,"d ",Lt.hours,"h"]})]}),F.jsxs("div",{className:"nav-pills-row",children:[F.jsxs("div",{className:"nav-pills-group",children:[F.jsxs("button",{type:"button",className:"mini-pill player-identity-pill",title:O.editProfileTooltip,onClick:Ue,children:[F.jsx("span",{children:_e}),F.jsx("span",{className:"player-identity-name",children:De}),F.jsx("span",{children:"✏️"})]}),F.jsxs("button",{type:"button",className:"mini-pill gold",onClick:()=>{G.current.paused=!0,pt("CITIES")},children:[de.flag," ",O.level," ",u,"/100"]}),F.jsxs("button",{type:"button",className:"mini-pill cyan",onClick:()=>{G.current.paused=!0,pt("ARMORY")},children:["⚙️ ",O.armoryBtn]})]}),F.jsxs("div",{className:"nav-pills-group",children:[F.jsx("button",{type:"button",className:"mini-pill",onClick:()=>{Xt.init(),l(U=>!U)},children:o?"🔊":"🔇"}),F.jsx("button",{type:"button",className:"mini-pill",onClick:()=>r(U=>U==="es"?"en":"es"),children:t.toUpperCase()})]})]})]}),Qe==="PLAYING"&&F.jsxs(F.Fragment,{children:[F.jsxs("section",{className:`compact-play-hud ${mt.isFeverMode?"fever-active":""}`,children:[F.jsxs("div",{className:"compact-hud-top-row",children:[F.jsxs("div",{className:"compact-hud-city",children:[F.jsx("span",{children:de.flag}),F.jsxs("span",{className:"compact-hud-lvl-badge",children:["Nv.",u]}),F.jsxs("span",{className:"compact-hud-speed-badge",children:[mt.walkSpeedMultiplier.toFixed(2),"x"]}),F.jsx("span",{children:de.name[t]})]}),F.jsxs("div",{className:"compact-hud-metrics",children:[F.jsxs("div",{className:"compact-metric-pill distance",children:[F.jsxs("span",{className:"compact-dist-cur",children:[mt.distance,"m"]}),F.jsxs("span",{className:"compact-dist-target",children:["/ ",mt.targetDistance,"m"]})]}),F.jsx("div",{className:"compact-metric-pill wind",children:F.jsxs("span",{children:["💨 ",br," ",$n]})}),F.jsx("div",{className:"compact-metric-pill mult",children:F.jsxs("span",{children:["x",mt.multiplier]})}),F.jsx("button",{type:"button",className:"compact-pause-btn",title:"Mute / Audio",onClick:()=>{Xt.init(),l(U=>!U)},children:o?"🔊":"🔇"}),F.jsx("button",{type:"button",className:"compact-pause-btn",title:O.pauseBtn,onClick:()=>{G.current.paused=!0,pt("PAUSE")},children:"⏸"})]})]}),F.jsxs("div",{className:"balance-axis-row",children:[F.jsx("span",{className:"balance-axis-label",children:t==="es"?"EJE":"AXIS"}),F.jsxs("div",{className:"balance-axis-track",children:[F.jsx("div",{className:"balance-axis-center-notch"}),F.jsx("div",{ref:b,className:"balance-axis-needle"})]}),mt.isFeverMode?F.jsx("span",{className:"fever-mode-pill",children:O.feverModeBadge}):F.jsxs("span",{className:"balance-axis-label",style:{color:"#fde047"},children:["🔥",mt.combo]})]})]}),mt.windWarningActive&&F.jsx("div",{className:"wind-gust-alert-pill",children:F.jsx("span",{children:O.windGustAlert})}),tn>0&&F.jsx("div",{className:"near-miss-floater",children:O.nearMissPopup},tn),St&&F.jsx("div",{className:`hand-catch-floater ${St.side} ${St.isPerfect?"perfect":"good"}`,children:St.text},St.id)]}),Qe==="LOBBY"&&Ze==="home"&&F.jsxs("div",{className:"lobby-overlay",children:[F.jsxs("div",{className:"lobby-top-section",children:[F.jsxs("div",{className:"rounded-2xl",style:{position:"relative",width:"100%",height:"132px",borderRadius:"16px",overflow:"hidden",border:"1.5px solid rgba(0, 242, 254, 0.72)",boxShadow:"0 0 24px rgba(0, 242, 254, 0.38), 0 10px 26px rgba(0, 0, 0, 0.85)"},children:[F.jsx("img",{src:he,onError:ht,alt:"NO MIRES ABAJO",style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center 28%",display:"block"}}),F.jsxs("div",{style:{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(5, 8, 17, 0.1) 0%, rgba(5, 8, 17, 0.45) 52%, rgba(9, 15, 32, 0.96) 100%)",display:"flex",flexDirection:"column",justifyContent:"flex-end",alignItems:"center",padding:"8px 12px"},children:[F.jsx("h1",{className:"lobby-main-title",style:{fontSize:"2.1rem",marginBottom:"2px"},children:O.title}),F.jsx("div",{className:"lobby-level-subtitle",onClick:()=>pt("CITIES"),style:{cursor:"pointer",marginTop:0},children:F.jsxs("span",{children:["📍 ",O.level," ",u,"/100 — ",de.flag," ",de.name[t]," (",se.totalDistance,"m •"," ",se.walkSpeedMultiplier.toFixed(2),"x)"]})})]})]}),F.jsxs("div",{className:"lobby-league-banner",onClick:()=>pt("LEAGUE"),children:[F.jsxs("div",{className:"lobby-league-row",children:[F.jsxs("span",{style:{fontWeight:900,fontSize:"0.84rem",color:"#fde047"},children:["🏆 ",O.leagueBanner," — #",Mn," (",w," LP)"]}),F.jsxs("span",{style:{fontSize:"0.74rem",color:"#67e8f9",fontWeight:800},onClick:U=>{U.stopPropagation(),Ue()},children:[_e," ",De," (✏️)"]})]}),F.jsxs("div",{style:{fontSize:"0.74rem",color:"#cbd5e1",display:"flex",justifyContent:"space-between"},children:[F.jsx("span",{children:de.weatherLabel[t]}),F.jsxs("span",{children:["🪙 ",v," | 💎 ",g]})]})]})]}),F.jsxs("div",{className:"lobby-bottom-section",children:[F.jsxs("div",{className:"lobby-prep-grid",children:[F.jsxs("button",{type:"button",className:"lobby-prep-btn gold-border",onClick:()=>{Xe("home"),pt("CITIES")},children:[F.jsx("span",{style:{fontSize:"1.15rem"},children:"🌍"}),F.jsx("span",{children:O.citiesBtn})]}),F.jsxs("button",{type:"button",className:"lobby-prep-btn cyan-border",onClick:()=>{Xe("home"),pt("ARMORY")},children:[F.jsx("span",{style:{fontSize:"1.15rem"},children:"⚙️"}),F.jsx("span",{children:O.armoryBtn})]}),F.jsxs("button",{type:"button",className:"lobby-prep-btn",onClick:()=>{Xe("home"),pt("SKINS")},children:[F.jsx("span",{style:{fontSize:"1.15rem"},children:"🧥"}),F.jsx("span",{children:O.skinsBtn})]}),F.jsxs("button",{type:"button",className:"lobby-prep-btn gold-border",onClick:()=>{Xe("home"),pt("SHOP")},children:[F.jsx("span",{style:{fontSize:"1.15rem"},children:"💎"}),F.jsx("span",{children:O.shopBtn})]})]}),F.jsx("button",{type:"button",className:"lobby-play-btn",onClick:ve,children:O.playNowBtn})]})]}),Qe==="PLAYING"&&F.jsxs(F.Fragment,{children:[F.jsxs("div",{className:"multitouch-split-overlay",children:[F.jsx("div",{className:"multitouch-half-panel",onPointerDown:U=>rt("L",U),onPointerUp:U=>Je("L",U),onPointerCancel:U=>Je("L",U),onPointerLeave:U=>Je("L",U)}),F.jsx("div",{className:"multitouch-half-panel",onPointerDown:U=>rt("R",U),onPointerUp:U=>Je("R",U),onPointerCancel:U=>Je("R",U),onPointerLeave:U=>Je("R",U)})]}),F.jsxs("div",{className:"vector-minimal-hud",children:[F.jsxs("div",{className:`vector-corner-indicator left ${mt.leftPressed?"pressed":""} ${mt.leftTimingReady?"timing-ready":""}`,children:[F.jsxs("span",{className:"vector-corner-label",children:["◄ ",O.left]}),F.jsx("div",{className:"vector-corner-line"})]}),F.jsxs("div",{className:"vector-center-micro-bar",children:[mt.juggleCount<4&&F.jsxs("button",{type:"button",className:"vector-micro-pill gold",onClick:Fe,children:[F.jsx("span",{children:"+1 🟡"}),F.jsxs("span",{children:["(",mt.juggleCount,"/4)"]})]}),F.jsxs("button",{type:"button",className:`vector-micro-pill ${or?"danger":""}`,onClick:Se,children:[F.jsx("span",{children:"🪝"}),F.jsx("span",{children:mt.fallSlowMo?`${mt.slowMoTimer.toFixed(1)}s`:"20💎"})]})]}),F.jsxs("div",{className:`vector-corner-indicator right ${mt.rightPressed?"pressed":""} ${mt.rightTimingReady?"timing-ready":""}`,children:[F.jsxs("span",{className:"vector-corner-label",children:[O.right," ►"]}),F.jsx("div",{className:"vector-corner-line"})]})]})]}),dt==="LEAGUE"&&F.jsx("div",{className:"modal-backdrop",children:F.jsxs("div",{className:"modal-card",children:[F.jsxs("div",{className:"modal-header",children:[F.jsxs("h2",{className:"modal-title",children:["🏆 ",O.leagueModalTitle]}),F.jsx("button",{type:"button",className:"close-btn",onClick:()=>{G.current.paused=!1,pt(null)},children:"✕"})]}),F.jsx("p",{style:{fontSize:"0.84rem",color:"#cbd5e1",marginBottom:"12px"},children:O.leagueModalSub}),F.jsxs("div",{className:"item-card highlight",style:{marginBottom:"12px",textAlign:"center"},children:[F.jsxs("div",{style:{fontSize:"0.78rem",color:"#fde047",fontWeight:800},children:["⏳ ",O.seasonEndsIn,": ",Lt.days,"d ",Lt.hours,"h"," ",Lt.mins,"m ",Lt.secs,"s"]}),F.jsxs("div",{style:{fontSize:"1.35rem",fontWeight:900,color:"#ffffff",marginTop:"2px"},children:["#",Mn," — ",w," ",O.leaguePointsShort]}),F.jsx("div",{style:{marginTop:"6px"},children:F.jsxs("button",{type:"button",className:"mini-pill cyan",onClick:Ue,children:[F.jsx("span",{children:_e}),F.jsx("span",{style:{fontWeight:900,color:"#fde047"},children:De}),F.jsx("span",{children:"(✏️)"})]})})]}),F.jsx("div",{className:"grid-list",style:{marginBottom:"14px"},children:S1.map(U=>F.jsxs("div",{className:"item-card",style:{flexDirection:"row",alignItems:"center",justifyContent:"space-between"},children:[F.jsx("div",{children:F.jsxs("div",{style:{fontWeight:900,color:"#fde047"},children:[U.icon," ",U.rankLabel," — ",U.title[t]]})}),F.jsxs("div",{style:{fontWeight:800,fontSize:"0.82rem",color:"#67e8f9"},children:["+",U.gemsReward," 💎 | +",U.coinsReward," 🪙"]})]},U.rankLabel))}),F.jsx("div",{className:"grid-list",children:gi.map((U,xe)=>F.jsxs("div",{className:`league-rank-row ${U.isPlayer?"is-player":""}`,onClick:U.isPlayer?Ue:void 0,style:U.isPlayer?{cursor:"pointer"}:void 0,children:[F.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[F.jsxs("span",{style:{fontWeight:900,color:"#fde047",width:"24px"},children:["#",xe+1]}),F.jsx("span",{children:U.country}),F.jsxs("span",{style:{fontWeight:800},children:[U.name," ",U.isPlayer?"(✏️)":""]})]}),F.jsxs("div",{style:{fontWeight:900,color:"#38bdf8"},children:[U.lp," LP ",U.badge]})]},U.id))})]})}),dt==="ARMORY"&&F.jsx("div",{className:"modal-backdrop",children:F.jsxs("div",{className:"modal-card",children:[F.jsxs("div",{className:"modal-header",children:[F.jsxs("h2",{className:"modal-title",children:["⚙️ ",O.armoryTitle]}),F.jsx("button",{type:"button",className:"close-btn",onClick:()=>{G.current.paused=!1,pt(null)},children:"✕"})]}),F.jsxs("p",{style:{fontSize:"0.84rem",color:"#cbd5e1",marginBottom:"10px"},children:[O.armorySub," (🪙 ",v,")"]}),F.jsx("div",{className:"grid-list",children:_1.map(U=>{const xe=V[U.id]||1,Ve=xe>=U.maxLevel,Me=Math.round(U.baseCost*Math.pow(U.costScale,xe-1));return F.jsxs("div",{className:"item-card highlight",children:[F.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[F.jsxs("div",{style:{fontWeight:900,fontSize:"1.02rem"},children:[U.icon," ",U.name[t]," (Nv. ",xe,"/",U.maxLevel,")"]}),F.jsx("span",{style:{fontSize:"0.76rem",color:"#4ade80",fontWeight:800},children:U.statLabel[t]})]}),F.jsx("p",{style:{fontSize:"0.78rem",color:"#cbd5e1"},children:U.desc[t]}),F.jsx("div",{className:"armory-progress-bar",children:Array.from({length:10}).map((_t,X)=>F.jsx("div",{className:`armory-pip ${X<xe?"filled":""}`},X))}),F.jsx("button",{type:"button",className:"pause-action-btn gold",style:{marginTop:"6px",padding:"8px 12px"},disabled:Ve||v<Me,onClick:()=>Dt(U),children:Ve?`✅ ${O.maxLevelLabel}`:`⬆️ ${O.upgradeBtn} — ${Me} 🪙`})]},U.id)})})]})}),dt==="CITIES"&&F.jsx("div",{className:"modal-backdrop",children:F.jsxs("div",{className:"modal-card",children:[F.jsxs("div",{className:"modal-header",children:[F.jsxs("h2",{className:"modal-title",children:["🌍 ",O.citiesBtn," (100 Niveles)"]}),F.jsx("button",{type:"button",className:"close-btn",onClick:()=>{G.current.paused=!1,pt(null)},children:"✕"})]}),F.jsx("div",{className:"grid-list",children:_o.map((U,xe)=>{const Ve=xe*5+1;return F.jsxs("div",{className:"item-card",children:[F.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[F.jsxs("span",{style:{fontWeight:900,color:"#fde047"},children:[U.flag," ",xe+1,". ",U.name[t]]}),F.jsx("span",{style:{fontSize:"0.75rem",color:"#94a3b8"},children:U.weatherLabel[t]})]}),F.jsx("div",{className:"city-levels-row",children:[0,1,2,3,4].map(Me=>{const _t=Ve+Me,X=_t<=h,nn=_t===u;return F.jsxs("button",{type:"button",className:`lvl-chip ${nn?"current":""} ${X&&!nn?"completed":""} ${X?"":"locked"}`,disabled:!X,onClick:()=>{f(_t),Le(_t,"LOBBY")},children:["Nv.",_t]},_t)})})]},U.id)})})]})}),dt==="SKINS"&&F.jsx("div",{className:"modal-backdrop",children:F.jsxs("div",{className:"modal-card",children:[F.jsxs("div",{className:"modal-header",children:[F.jsxs("h2",{className:"modal-title",children:["🧥 ",O.skinsBtn]}),F.jsx("button",{type:"button",className:"close-btn",onClick:()=>{G.current.paused=!1,pt(null)},children:"✕"})]}),F.jsxs("h3",{style:{fontSize:"0.95rem",color:"#67e8f9",marginBottom:"8px"},children:["🧥 Aspectos Urbanos (🪙 ",v," | 💎 ",g,")"]}),F.jsx("div",{className:"grid-list",style:{marginBottom:"16px"},children:ys.map(U=>{const xe=pe.includes(U.id),Ve=Q===U.id;return F.jsxs("div",{className:`item-card ${Ve?"highlight":""}`,children:[F.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[F.jsxs("span",{style:{fontWeight:900},children:[U.name[t]," (x",U.bonusMult,")"]}),F.jsx("button",{type:"button",className:"mini-pill gold",onClick:()=>Ut(U),children:Ve?"✅ EQUIPADO":xe?"EQUIPAR":`${U.cost} ${U.currency==="gems"?"💎":"🪙"}`})]}),F.jsx("span",{style:{fontSize:"0.76rem",color:"#94a3b8"},children:U.desc[t]})]},U.id)})}),F.jsx("h3",{style:{fontSize:"0.95rem",color:"#fde047",marginBottom:"8px"},children:"🎪 Objetos de Malabar 3D Especulares"}),F.jsx("div",{className:"grid-list",children:Ms.map(U=>{const xe=J.includes(U.id),Ve=le===U.id;return F.jsx("div",{className:`item-card ${Ve?"highlight":""}`,children:F.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[F.jsxs("span",{style:{fontWeight:900},children:[U.icon," ",U.name[t]," (x",U.mult,")"]}),F.jsx("button",{type:"button",className:"mini-pill gold",onClick:()=>vn(U),children:Ve?"✅ EQUIPADO":xe?"EQUIPAR":`${U.cost} ${U.currency==="gems"?"💎":"🪙"}`})]})},U.id)})})]})}),dt==="SHOP"&&F.jsx("div",{className:"modal-backdrop",children:F.jsxs("div",{className:"modal-card",children:[F.jsxs("div",{className:"modal-header",children:[F.jsxs("h2",{className:"modal-title",children:["💎 ",O.shopTitle]}),F.jsx("button",{type:"button",className:"close-btn",onClick:()=>{G.current.paused=!1,pt(null)},children:"✕"})]}),F.jsx("p",{style:{fontSize:"0.82rem",color:"#cbd5e1",marginBottom:"12px"},children:O.shopSub}),ft&&F.jsxs("div",{className:"item-card highlight",style:{marginBottom:"10px",textAlign:"center",color:"#4ade80",fontWeight:900},children:["🎁 ",ft]}),F.jsx("div",{className:"grid-list",children:y1.map(U=>F.jsx("div",{className:`item-card ${U.popular?"highlight":""}`,children:F.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[F.jsxs("div",{children:[F.jsxs("div",{style:{fontWeight:900,fontSize:"1rem"},children:[U.icon," ",U.name[t]]}),F.jsxs("div",{style:{fontSize:"0.8rem",color:"#67e8f9"},children:["+",U.gems," 💎 Gemas | +",U.coins," 🪙 Monedas"]})]}),F.jsx("button",{type:"button",className:"mini-pill gold",onClick:()=>Dn(U),children:U.tag})]})},U.id))})]})}),dt==="PAUSE"&&F.jsx("div",{className:"modal-backdrop",children:F.jsxs("div",{className:"modal-card",children:[F.jsx("div",{className:"modal-header",children:F.jsxs("h2",{className:"modal-title",children:["⏸ ",O.pauseTitle]})}),F.jsx("p",{style:{fontSize:"0.85rem",color:"#cbd5e1",marginBottom:"12px"},children:O.pauseSub}),F.jsxs("div",{className:"lobby-prep-grid",style:{marginBottom:"12px"},children:[F.jsxs("button",{type:"button",className:"lobby-prep-btn cyan-border",onClick:()=>pt("ARMORY"),children:[F.jsx("span",{children:"⚙️"}),F.jsx("span",{children:O.armoryBtn})]}),F.jsxs("button",{type:"button",className:"lobby-prep-btn",onClick:()=>pt("SKINS"),children:[F.jsx("span",{children:"🧥"}),F.jsx("span",{children:O.skinsBtn})]}),F.jsxs("button",{type:"button",className:"lobby-prep-btn gold-border",onClick:()=>pt("LEAGUE"),children:[F.jsx("span",{children:"🏆"}),F.jsx("span",{children:"Liga"})]}),F.jsxs("button",{type:"button",className:"lobby-prep-btn gold-border",onClick:()=>pt("CITIES"),children:[F.jsx("span",{children:"🌍"}),F.jsx("span",{children:O.citiesBtn})]})]}),F.jsxs("div",{className:"pause-menu-stack",children:[F.jsxs("button",{type:"button",className:"pause-action-btn resume",onClick:()=>{G.current.paused=!1,pt(null)},children:["▶ ",O.resumeBtn]}),F.jsxs("button",{type:"button",className:"pause-action-btn gold",onClick:()=>Le(u,"PLAYING"),children:["🔄 ",O.restartBtn]}),F.jsxs("button",{type:"button",className:"pause-action-btn",onClick:()=>Le(u,"LOBBY"),children:["🏠 ",O.backToLobbyBtn]})]})]})}),Qe==="VICTORY"&&F.jsx("div",{className:"modal-backdrop",children:F.jsxs("div",{className:"modal-card",children:[F.jsx("div",{className:"modal-header",children:F.jsxs("h2",{className:"modal-title",children:["🏆 ",O.levelCleared]})}),F.jsxs("div",{className:"item-card highlight",style:{textAlign:"center",marginBottom:"14px"},children:[F.jsxs("div",{style:{fontSize:"1.1rem",fontWeight:900},children:[de.flag," ",de.name[t]," — ",O.level," ",u]}),F.jsxs("div",{style:{fontSize:"0.95rem",color:"#4ade80",fontWeight:800,marginTop:"6px"},children:["+",G.current.coinsEarnedRun," 🪙 | +",G.current.lpEarnedRun," 🏆 LP"]})]}),F.jsxs("div",{className:"pause-menu-stack",children:[F.jsxs("button",{type:"button",className:"cta-giant-btn",onClick:()=>{const U=Math.min(100,u+1);f(U),Le(U,"PLAYING")},children:["▶ ",O.nextLevel," (",Math.min(100,u+1),"/100)"]}),F.jsxs("button",{type:"button",className:"pause-action-btn",onClick:()=>{const U=Math.min(100,u+1);f(U),Le(U,"LOBBY")},children:["🏠 ",O.backToLobbyBtn]})]})]})}),Qe==="GAMEOVER"&&F.jsx("div",{className:"modal-backdrop",children:F.jsxs("div",{className:"modal-card loss-aversion",children:[F.jsx("div",{className:"modal-header",children:F.jsxs("h2",{className:"modal-title",style:{color:"#fca5a5"},children:["⚠️ ",O.fellTitle]})}),F.jsxs("p",{style:{fontSize:"0.92rem",color:"#fef2f2",marginBottom:"14px"},children:[O.fellSub," ",F.jsxs("strong",{children:["(",mt.distance,"m / ",mt.targetDistance,"m)"]})]}),F.jsxs("div",{className:"pause-menu-stack",children:[F.jsxs("button",{type:"button",className:"cta-giant-btn",onClick:Se,children:["🪝 ",O.continueHook]}),F.jsxs("button",{type:"button",className:"pause-action-btn",onClick:()=>Le(u,"PLAYING"),children:["🔄 ",O.retryFree]}),F.jsxs("button",{type:"button",className:"pause-action-btn",onClick:()=>Le(u,"LOBBY"),children:["🏠 ",O.backToLobbyBtn]})]})]})})]})}qv.createRoot(document.getElementById("root")).render(F.jsx(Gv.StrictMode,{children:F.jsx(D1,{})}));
